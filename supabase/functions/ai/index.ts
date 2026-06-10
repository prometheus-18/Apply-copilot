// Apply Co-Pilot — AI proxy ("ai" Supabase Edge Function).
// Keeps the Groq API key server-side (set GROQ_API_KEY in Dashboard → Edge Functions → Secrets);
// only signed-in app users can call it, and each user gets a daily cap so the free quota can't be drained.
// SUPABASE_URL / SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY are injected automatically by Supabase.
import { createClient } from "npm:@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const j = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { ...CORS, "Content-Type": "application/json" } });

const DAILY_LIMIT = 40;
const MODEL = "llama-3.3-70b-versatile";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return j({ error: "method" }, 405);
  try {
    // 1) caller must be a signed-in app user (their JWT arrives in the Authorization header)
    const supa = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
      global: { headers: { Authorization: req.headers.get("Authorization") ?? "" } },
    });
    const { data: { user } } = await supa.auth.getUser();
    if (!user) return j({ error: "auth" }, 401);

    // 2) per-user daily cap
    const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    const day = new Date().toISOString().slice(0, 10);
    const { data: row } = await admin.from("ai_usage").select("count").eq("uid", user.id).eq("day", day).maybeSingle();
    const used = row?.count ?? 0;
    if (used >= DAILY_LIMIT) return j({ error: "quota" }, 429);
    await admin.from("ai_usage").upsert({ uid: user.id, day, count: used + 1 });

    // 3) tightly-scoped prompt — the model may only rephrase what the candidate already wrote
    const b = await req.json();
    const bullets = (Array.isArray(b.bullets) ? b.bullets : []).slice(0, 12)
      .map((x: { id: string; text: string }) => `[${x.id}] ${String(x.text).slice(0, 300)}`).join("\n");
    const sys =
      "You are an elite résumé coach. STRICT RULES: never invent numbers, metrics, employers, titles, dates or skills that are not in the candidate's text. PRESERVE every number/metric the candidate wrote, verbatim — quantified results are the strongest part of a bullet, and a rewrite that drops a number will be rejected. Only rephrase what exists; mirror the job description's exact vocabulary; strong action verbs; each rewrite ≤ 28 words. " +
      'Reply ONLY with JSON: {"tips":[{"t":"specific, actionable tip"}],"rewrites":[{"id":"<bullet id>","text":"<rewritten bullet>"}]} — 3 to 5 tips, and rewrites only for bullets you can genuinely improve (max 6).';
    const usr =
      `TARGET ROLE: ${String(b.role ?? "").slice(0, 120)} at ${String(b.company ?? "").slice(0, 120)}\n\n` +
      `JOB DESCRIPTION:\n${String(b.jd ?? "").slice(0, 5000)}\n\n` +
      `CANDIDATE SUMMARY: ${String(b.summary ?? "").slice(0, 600)}\n` +
      `CANDIDATE SKILLS: ${(Array.isArray(b.skills) ? b.skills : []).slice(0, 30).join(", ")}\n` +
      `KEYWORDS THE ATS FOUND MISSING: ${(Array.isArray(b.missing) ? b.missing : []).slice(0, 8).join(", ")}\n\n` +
      `CANDIDATE BULLETS (id + text):\n${bullets}`;

    // 4) Groq (free tier) — the key only ever lives here, server-side
    const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${Deno.env.get("GROQ_API_KEY")}` },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.4,
        max_tokens: 1400,
        response_format: { type: "json_object" },
        messages: [{ role: "system", content: sys }, { role: "user", content: usr }],
      }),
    });
    if (!r.ok) return j({ error: "upstream", detail: (await r.text()).slice(0, 400) }, 502);
    const out = await r.json();
    let parsed: unknown = {};
    try { parsed = JSON.parse(out.choices?.[0]?.message?.content ?? "{}"); } catch { /* malformed → empty */ }
    return j(parsed);
  } catch (e) {
    return j({ error: "server", detail: String(e).slice(0, 300) }, 500);
  }
});
