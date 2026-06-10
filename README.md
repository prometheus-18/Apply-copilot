<div align="center">

# 🧭 Apply Co-Pilot

### Create a free account → upload your résumé once → paste any job → get an honest ATS score → let ✦ AI sharpen your bullets → download a custom, one-page résumé + cover letter as a real PDF.

**Deterministic scoring you can trust, with an AI layer on top that never invents facts. Your résumé and tracker sync across all your devices. Free.**

[![▶ Open the live app](https://img.shields.io/badge/▶_OPEN_THE_LIVE_APP-ff4c24?style=for-the-badge&logoColor=white)](https://prometheus-18.github.io/Apply-copilot/)

`https://prometheus-18.github.io/Apply-copilot/`

![License: MIT](https://img.shields.io/badge/License-MIT-3c3a3e) ![AI augmented](https://img.shields.io/badge/✦_AI-augmented-ff6436) ![Honest ATS score](https://img.shields.io/badge/honest-ATS_score-7b7a7c) ![Cross-device sync](https://img.shields.io/badge/cross--device-sync-a2a2a2) ![Real vector PDF](https://img.shields.io/badge/real-vector_PDF-c9c7cc)

*Best in **Chrome** or **Edge**. Works on phones too.*

</div>

---

## 🚀 How it works — step by step

> The app is one page you scroll down. Each step is a section. Here's the whole journey:

### 0️⃣ Create your free account &nbsp;·&nbsp; *the landing page*
Sign up with an email + password (or sign in if you're back). No card, no setup.
Your master résumé and job tracker **follow you to every device** — start on your laptop, finish on your phone. Your data is private to your account; row-level security means the database itself refuses to show it to anyone else.

### 1️⃣ Upload your résumé — **once** &nbsp;·&nbsp; section *⓪ Master Résumé*
Drag in your résumé (**PDF or TXT**) — any layout: single-column, two-column, LaTeX/Overleaf, academic CVs with publications, table-based templates, even messy multi-page ones. The parser is stress-tested against all the popular template families and keeps your real content: experience, projects, education, certifications, achievements, publications, languages.
This becomes your **master** — you never upload it again.

### 2️⃣ Paste the job &nbsp;·&nbsp; section *◆ Job Description*
Company + role + the **entire job description**, then **▶ Run analysis & tailor.**

### 3️⃣ See your honest score &nbsp;·&nbsp; section *① ATS Score*
Your **real current score first**, then a **projected score after tailoring** — with a full breakdown (keyword coverage, seniority/experience fit, structure), matched vs. missing keywords, and honest **knockouts** (a 1-year résumé against a VP role scores low — on purpose). This score is deterministic and explainable, not an AI guess: the same résumé + job always gives the same number.

### 4️⃣ Accept the tips that are true &nbsp;·&nbsp; *① ATS Score → Tips*
**Every missing keyword is its own line with its own ➕ Add button** — you decide, line by line. Add one **only if you genuinely have that skill**; the projected score updates live. *The app never invents anything for you.*

### ✦ 5️⃣ Run the AI Review &nbsp;·&nbsp; *① ATS Score → ✦ AI Review*
One click sends your bullets + the JD to the AI layer, which returns **tailored tips** and **rewrites of your own bullets** in the job's language — shown as before/after cards. Guard-rails you can rely on:
- A rewrite must carry **exactly your original numbers** — none invented, none dropped — or it's automatically discarded.
- Nothing applies until you click **✓ Use this**, and everything stays editable afterward.
- If AI is unavailable or you hit the daily limit, the deterministic engine simply carries on.

### 6️⃣ Download &nbsp;·&nbsp; *② Custom Résumé · ③ Cover Letter*
Your résumé **rebuilt for this job** — sharper summary, most relevant bullets first, matched keywords surfaced. **✎ Edit** anything inline, then **⬇ Download PDF**: a clean **one-page** vector PDF with **selectable text and clickable links** (exactly what ATS software reads). Plus a matching, editable cover letter.

### 7️⃣ Outreach, tracking, discovery &nbsp;·&nbsp; *④–⑥*
- **④ LinkedIn Outreach** — find the hiring manager / a peer / a recruiter + ready-to-personalize messages.
- **⑤ Job Tracker** — log every application (stage + next step), synced to your account; export to CSV/Sheets.
- **⑥ Find Jobs** — one-click LinkedIn / Indeed / Naukri searches.

<div align="center">

**Sign in → ⓪ Master → ◆ Job → ① Score → ➕ Tips → ✦ AI Review → ② Résumé → ⬇ PDF**

</div>

---

## ✨ Why it's different

- 🎯 **An ATS score you can actually trust.** Deterministic and explainable — real years-of-experience math, honest knockouts, no inflated floor, no AI dice-roll.
- ✦ **AI that can't lie about you.** The AI layer only rephrases what you wrote; a code-level guard rejects any rewrite whose numbers don't match yours exactly, and you approve every change.
- 🧩 **Reads almost any résumé.** Single/two-column, LaTeX, academic CVs (publications included), tables, icon fonts, multi-page — stress-tested against the popular template families with a content-retention regression suite.
- 📄 **A real one-page PDF, no watermark.** Built programmatically → selectable text + working links, auto-fitted to one page by trimming only the least job-relevant content.
- ☁️ **Yours, everywhere.** Sign in once — master résumé + tracker on every device.

---

## ❓ FAQ

<details>
<summary><b>Is my data private?</b></summary>

Your master résumé and tracker live in your own row in a secured database protected by **row-level security** — only your login can read it. When you run ✦ AI Review, your bullets + that job description are processed by the AI provider for that request only; the AI feature is opt-in per click, never automatic.
</details>

<details>
<summary><b>Will the AI make things up on my résumé?</b></summary>

No. It can only rephrase bullets you wrote. Every suggestion passes a number-preservation check (your metrics, verbatim, or it's discarded), shows you the original side-by-side, and applies only when you click **✓ Use this**.
</details>

<details>
<summary><b>Is there a limit on AI use?</b></summary>

A fair-use daily limit per account keeps the service free for everyone. Everything else — scoring, tailoring, PDFs, tracking — has no limits.
</details>

<details>
<summary><b>My résumé parsed a little wrong.</b></summary>

Some PDFs extract oddly. Everything is **editable** — click ✎ Edit and fix it inline — or paste your résumé as text in ⓪ Master for the cleanest parse. Found a template that parses badly? Open an issue with the layout (not your personal data) — the test suite grows from real cases.
</details>

<details>
<summary><b>Is the PDF really one page?</b></summary>

Yes — the layout auto-shrinks the font and trims only the least job-relevant bullets while keeping your strongest content.
</details>

---

## 🛠 Tech

One HTML file, vanilla JS. The core is a **deterministic** résumé parser + JD-keyword/seniority scoring engine (same input → same score, fully explainable). On top: **✦ AI Review** via a Supabase Edge Function proxy → Groq (Llama 3.3 70B) — the API key lives server-side only, callers must be signed-in users, per-user daily caps. Auth & cross-device sync: **Supabase** (email/password + Postgres with row-level security). Libraries via CDN: pdf.js, pdfmake, Lenis, supabase-js, Google Fonts. Hosted free on **GitHub Pages**. No build step. The parser is backed by a content-retention regression suite covering the popular résumé template families.

To run your own copy: fork, create a free Supabase project (auth + `profiles`/`ai_usage` tables + an `ai` Edge Function that proxies to Groq, with your own `GROQ_API_KEY` kept as a server-side secret), drop your project URL + publishable key into the account `<script>` block, enable GitHub Pages. Open an issue if you want the Edge Function source.

## 🤝 Contributing

Single file — easy to hack on. Issues & PRs welcome. Great first contributions: a résumé layout that parses badly (describe the layout in an issue — never post your personal data), more job boards/locales, résumé themes.

## 💗 Support

Apply Co-Pilot is free and always will be. If it helped you land an interview, there's a UPI QR in the app's **Support** section.

## ⚖️ Responsible use

Outreach is for **manual, personalized** sending — open a link, write to a real person, send it yourself. Don't mass-automate. AI suggestions are suggestions: you are responsible for what your résumé claims.

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=prometheus-18.Apply-copilot)

## 📄 License

MIT — see [LICENSE](LICENSE). Made with ♥ by [@prometheus-18](https://github.com/prometheus-18).
