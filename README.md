# Apply Co-Pilot 🧭

**Upload your résumé once → paste any job → get an honest ATS fit score, then a custom, ATS-optimized résumé + cover letter as a real one-page PDF with clickable links.**
Runs **100% in your browser**. No sign-up, no servers, no AI keys — your résumé never leaves your device.

![License: MIT](https://img.shields.io/badge/License-MIT-22d3ee) ![100% client-side](https://img.shields.io/badge/100%25-client--side-7c83ff) ![No sign-up](https://img.shields.io/badge/no-sign--up-34d399) ![Single file](https://img.shields.io/badge/single-HTML%20file-f59e0b)

### 👉 [**Open the live app**](https://raw.githack.com/prometheus-18/Apply-copilot/main/index.html) &nbsp;·&nbsp; or download [`apply_copilot_app.html`](apply_copilot_app.html) and open it in **Chrome** or **Edge**.

> Live link: `https://raw.githack.com/prometheus-18/Apply-copilot/main/index.html`

---

## ⚡ Try it in 60 seconds

1. **Open the app** (link above) — a vertical-scroll page with a live 3D hero.
2. **⓪ Master Résumé** — upload your résumé (PDF or TXT), or **Load a sample**. You only do this once.
3. **◆ Job Description** — type the **Company** + **Role**, paste the **full** job description, hit **▶ Run analysis & tailor**.
4. **① ATS Score** — see your **honest current score first**, plus the projected score after tailoring, a breakdown, and matched/missing keywords.
5. Tick **＋ Add** on any tip whose keywords you genuinely have, then hit **→ View tailored résumé**.
6. **② Custom Résumé → ⬇ Download PDF** — a real, selectable-text, one-page PDF with working links. Done. ✅

> 💡 Your résumé is the **master** — uploaded once. Every new job is just paste + one click.

---

## 🎯 What makes it different

It doesn't just *score* your résumé — it **rebuilds it for the specific job**, honestly:

- 🎯 **An ATS score you can trust.** It shows your **original** score first, computes your real years of experience (interval-merged so concurrent roles don't inflate), and applies **knockouts** — so a 1-year résumé against a VP role honestly scores ~7–15, not a fake 45. No score floor, no inflation.
- ✍️ **Rebuilds the résumé** — a 3–4 line tailored summary, bullets & skills reordered toward the JD, your matched keywords surfaced into high-signal spots.
- ✅ **Accept-to-apply tips.** Missing-keyword suggestions come with a **＋ Add** toggle; accepting weaves them in and updates the projected score live. **It never invents facts** — accepting means *you* assert it's true.
- 📄 **Real vector PDF, one page, no watermark.** Built with pdfmake (not a screenshot): **selectable text + genuinely clickable links** (email · phone · LinkedIn · GitHub) — exactly what ATS parsers read. No print dialog, no URL/timestamp header.
- 🧩 **Universal parser.** Handles many résumé templates (single-column, LaTeX/Overleaf tab-layouts, icon-font headers, multi-line entries) — merges wrapped bullets, strips PDF page-header/icon noise, and keeps Education, Projects, Certifications & **Achievements** intact.

---

## 🗂 The sections (scroll down)

| Section | What you get |
|---|---|
| **⓪ Master Résumé** | Upload once (PDF/TXT). Replace or clear anytime. Everything stays on your device. |
| **◆ Job Description** | Company, role, optional job URL, and the full JD. One button runs everything. |
| **① ATS Score** | Honest **original vs. projected** score, breakdown bars, seniority/years fit, knockout reasons, matched vs. missing (required & preferred) keywords, and **accept-to-apply tips**. |
| **② Custom Résumé** | Your résumé rebuilt for the job — centered header, clean bullets, two-line entries. **Edit inline · Download 1-page PDF · Copy text.** |
| **③ Cover Letter** | A matching, role-specific cover letter. Editable. Download PDF. |
| **④ LinkedIn Outreach** | Deep links (hiring manager / peer / recruiter) + a connection note, referral email & follow-up. |
| **⑤ Job Tracker** | Log applications with stage + next-action dropdowns. **Export CSV** or **Copy for Sheets** (paste straight into Google Sheets / Excel). |
| **⑥ Find Jobs** | One-click LinkedIn / Indeed / Naukri searches for the role. |

---

## ✅ Tips for the best result

- **Use clear section headers** — `Summary`, `Skills`, `Experience`, `Projects`, `Education`, `Certifications`, `Achievements`. The parser keys off them.
- **Paste the *entire* job description** (responsibilities *and* requirements) — more text = better keyword matching and a truer score.
- The résumé and cover letter are **editable** — click **✎ Edit**, fix any wording, then download (your edits are in the PDF).
- Only tick **＋ Add** on tips whose keywords you *actually* have — the tool keeps you honest, it won't lie for you.

---

## ❓ FAQ

**Is my data safe?** Yes — there is no server. Your résumé, the tailored output, and your tracker live only in your browser's `localStorage`. Nothing is uploaded.

**Is the PDF really one page?** It's designed to be: the layout auto-shrinks the font and trims only the lowest-JD-relevance bullets to fit, while keeping all your top content.

**My résumé parsed a bit wrong.** Some PDFs extract oddly. The output is **editable** — fix it inline — or paste your résumé as text in ⓪ Master for the cleanest parse.

**Does it scrape the job URL / use AI?** No. It's 100% offline and deterministic — a browser can't scrape arbitrary sites (CORS) and there's no LLM. You paste the JD; the smarts are in how it analyzes that text.

**Does it need internet / an account / an API key?** Only a one-time CDN load for the libraries; then it works offline. No account, no key, free forever.

---

## 🔒 Privacy

100% client-side. Résumés are parsed in-browser via [pdf.js](https://github.com/mozilla/pdf.js). Data is stored only in your browser's `localStorage` and never transmitted.

## 🛠 Tech

One HTML file, vanilla JS — a deterministic résumé parser + JD-keyword/seniority scoring engine (no LLM, no network analysis, no scraping). Libraries via CDN: **pdf.js** (résumé import), **pdfmake** (real vector PDF export with clickable links + selectable text), **three.js** (the 3D hero), **Lenis** (smooth scroll), and Google Fonts. No build step, nothing to host.

## 🤝 Contributing

It's a single file — easy to hack on. Issues & PRs welcome. Good first ideas: parsing for more unusual layouts, more job boards/locales, résumé themes.

## ⚖️ Responsible use

Outreach is for **manual, personalized** sending — open a link, write to a real person, send it yourself. Don't mass-automate; it violates platform terms.

## 📄 License

MIT — see [LICENSE](LICENSE). Built by [@prometheus-18](https://github.com/prometheus-18).
