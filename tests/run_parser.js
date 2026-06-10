// Apply Co-Pilot — parser regression harness.
// Usage:  node tests/run_parser.js                 → run every fixture in tests/fixtures/
//         node tests/run_parser.js fixtures/x.txt  → run one fixture
// A fixture is a plain-text file simulating what pdf.js text-extraction emits for a résumé
// (multi-line). For each fixture this prints: parsed-field summary + a CONTENT-RETENTION score
// (how many significant tokens of the raw text survive into the parsed object) + the most
// important tokens that were LOST. Exit code 1 if any fixture retains < 55%.
// NOTE: the metric counts INTENTIONAL drops (references, hobbies, campus addresses, committee
// names, 'Curriculum Vitae' headers) as lost — pure-academic CVs therefore sit lower than the
// raw number suggests. Read the lost-token list before treating a dip as a bug.
const fs = require("fs"), path = require("path");

const html = fs.readFileSync(path.join(__dirname, "..", "apply_copilot_app.html"), "utf8");
const code = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]).find(b => /function parseResume/.test(b));

const elStub = () => ({ style:{}, classList:{add(){},remove(){},toggle(){},contains:()=>false}, dataset:{}, addEventListener(){}, appendChild(){}, querySelectorAll:()=>[], querySelector:()=>null, innerHTML:"", textContent:"", value:"" });
const documentStub = { getElementById:()=>elStub(), querySelector:()=>elStub(), querySelectorAll:()=>[], createElement:()=>elStub(), addEventListener(){}, body:elStub(), documentElement:elStub() };
const localStorageStub = { _m:{}, getItem(k){ return this._m[k] ?? null; }, setItem(k,v){ this._m[k]=String(v); }, removeItem(k){ delete this._m[k]; } };
const api = new Function("document","localStorage","window","navigator","confirm","alert",
  code + ';return {parseResume, analyze, setMaster, deLig};'
)(documentStub, localStorageStub, { addEventListener(){}, matchMedia:()=>({matches:false}) }, { clipboard:null }, ()=>true, ()=>{});

const STOP = new Set(("with from that this have been were will your they them their and the for are was its our of in on at to a an as by or is it more than over under into across able strong work team teams using used use new other others each every per also etc www http https com").split(" "));
const toks = s => (String(s).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").match(/[a-z][a-z0-9+#.\-]{3,}/g) || []).filter(w => !STOP.has(w));

function run(file) {
  const raw = fs.readFileSync(file, "utf8");
  const p = api.parseResume(raw);
  if (!p) return { file, retention: 0, summary: "parseResume returned null", lost: [] };
  const out = JSON.stringify(p).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"");
  const rawToks = [...new Set(toks(raw))];
  const lost = rawToks.filter(w => !out.includes(w));
  const retention = rawToks.length ? Math.round(100 * (rawToks.length - lost.length) / rawToks.length) : 100;
  const summary =
    `name="${p.name}" email=${p.email ? "Y" : "-"} phone=${p.phone ? "Y" : "-"} loc="${p.location}" | ` +
    `summary=${(p.summary || "").length}ch skills=${(p.skills || []).length}g ` +
    `exp=${(p.experience || []).length}(${(p.experience || []).reduce((a, e) => a + (e.bullets || []).length, 0)}b) ` +
    `proj=${(p.projects || []).length} edu=${(p.education || []).length} certs=${(p.certifications || []).length} ` +
    `achv=${(p.achievements || []).length}` + (p.publications ? ` pubs=${p.publications.length}` : "") +
    ((p.skills || []).some(g => /language/i.test(g.group)) ? " +langs" : "");
  return { file: path.basename(file), retention, summary, lost: lost.slice(0, 18) };
}

const arg = process.argv[2];
const dir = path.join(__dirname, "fixtures");
const files = arg ? [path.resolve(__dirname, "..", arg)] :
  (fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith(".txt")).map(f => path.join(dir, f)) : []);
if (!files.length) { console.log("no fixtures found"); process.exit(0); }

let fail = 0;
for (const f of files) {
  const r = run(f);
  const flag = r.retention < 55 ? "  ⚠ LOW" : "";
  console.log(`\n── ${r.file} — retention ${r.retention}%${flag}\n   ${r.summary}`);
  if (r.lost.length) console.log("   lost tokens:", r.lost.join(", "));
  if (r.retention < 55) fail++;
}
console.log(`\n${files.length} fixtures, ${fail} below 55% retention`);
process.exit(fail ? 1 : 0);
