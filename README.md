<div align="center">

# 🧭 Apply Co-Pilot

### Paste a job → get an honest ATS score → download a custom, one-page résumé + cover letter as a real PDF with clickable links.

**100% in your browser. No sign-up. No servers. No AI keys. Your résumé never leaves your device.**

[![▶ Open the live app](https://img.shields.io/badge/▶_OPEN_THE_LIVE_APP-22d3ee?style=for-the-badge&logoColor=black)](https://raw.githack.com/prometheus-18/Apply-copilot/main/index.html)

`https://raw.githack.com/prometheus-18/Apply-copilot/main/index.html`

![License: MIT](https://img.shields.io/badge/License-MIT-22d3ee) ![100% client-side](https://img.shields.io/badge/100%25-client--side-7c83ff) ![No sign-up](https://img.shields.io/badge/no-sign--up-34d399) ![Single HTML file](https://img.shields.io/badge/single-HTML%20file-f59e0b) ![Free forever](https://img.shields.io/badge/free-forever-ff6ad5)

*Best in **Chrome** or **Edge**. Works offline after it loads.*

</div>

---

## 🚀 How it works — step by step

> The app is one page you scroll down. Each step is a section. Here's the whole journey:

### 1️⃣ Upload your résumé — **once** &nbsp;·&nbsp; section *⓪ Master Résumé*
Drag in your résumé (**PDF or TXT**), or click **Load a sample** to try it first.
This becomes your **master** — you never upload it again. Every future job is just a paste + a click.
🔒 *It's saved only in your own browser. Nothing is uploaded.*

### 2️⃣ Paste the job &nbsp;·&nbsp; section *◆ Job Description*
Type the **Company** and **Role**, then paste the **entire job description** (responsibilities *and* requirements — more text = a better match).
Hit **▶ Run analysis & tailor.**

### 3️⃣ See your honest score &nbsp;·&nbsp; section *① ATS Score*
You get your **real current score first**, then a **projected score after tailoring** — plus:
- a breakdown (keyword coverage, seniority/experience fit, structure),
- **matched vs. missing** keywords (required & preferred),
- honest **knockouts** (e.g. applying to a VP role with 1 year of experience scores low — on purpose).

### 4️⃣ Accept the tips that are true &nbsp;·&nbsp; *① ATS Score → Tips*
Each suggestion to add a missing keyword has a **➕ Add** button.
Click it **only if you genuinely have that skill** — the app weaves it into your résumé and updates the projected score. *It never invents anything for you.*

### 5️⃣ Get your tailored résumé &nbsp;·&nbsp; *→ View tailored résumé → section ② Custom Résumé*
Your résumé, **rebuilt for this job**: a sharper summary, your most relevant bullets first, your matched keywords surfaced.
Click **✎ Edit** to fix any wording, then **⬇ Download PDF** — a clean **one-page** PDF with **selectable text and clickable links** (exactly what ATS software reads).

### 6️⃣ Cover letter, outreach & tracking &nbsp;·&nbsp; *③–⑤*
- **③ Cover Letter** — a matching, role-specific letter. Editable. Download.
- **④ LinkedIn Outreach** — find the hiring manager / a peer / a recruiter, plus a ready connection note, referral email & follow-up.
- **⑤ Job Tracker** — log each application (stage + next step). **Export CSV** or **Copy for Sheets** to drop it into Google Sheets / Excel. *(Private to your browser.)*
- **⑥ Find Jobs** — one-click LinkedIn / Indeed / Naukri searches for the role.

<div align="center">

**⓪ Master → ◆ Job → ① Score → ➕ Accept tips → ② Résumé → ⬇ PDF**

</div>

---

## ✨ Why it's different

- 🎯 **An ATS score you can actually trust.** No inflated floor — it computes your real years of experience and applies knockouts, so the number is honest.
- 📄 **A real one-page PDF, no watermark.** Built programmatically (not a screenshot) → **selectable text + working links**, the format ATS parsers can read. No print dialog.
- 🧩 **Reads almost any résumé.** Single-column, LaTeX/Overleaf, icon-heavy templates — it merges wrapped bullets, strips PDF noise, and keeps Education, Projects, Certifications **and Achievements**.
- 🚫 **Never lies.** It only reorders and re-emphasizes *your real* content, and surfaces keywords *you* confirm you have.
- 🔒 **Truly private.** Everything runs in your browser; your data lives only in your `localStorage` and is never sent anywhere.

---

## ❓ FAQ

<details>
<summary><b>Is my data private? Can other people see my tracker?</b></summary>

Yes, it's private — and no, nobody else can see it. There's **no server**. Your résumé and tracker are saved only in **your own browser** (`localStorage`). Every visitor gets their own separate, private copy. The flip side: it's tied to that browser/device — use **Export CSV / Copy for Sheets** to back it up.
</details>

<details>
<summary><b>Is the PDF really one page?</b></summary>

It's built to be — the layout auto-shrinks the font and trims only the least job-relevant bullets to fit, while keeping all your strongest content.
</details>

<details>
<summary><b>My résumé parsed a little wrong.</b></summary>

Some PDFs extract oddly. The output is fully **editable** — click ✎ Edit and fix it inline — or paste your résumé as text in ⓪ Master for the cleanest parse.
</details>

<details>
<summary><b>Does it use AI or scrape the job link?</b></summary>

No. It's 100% offline and deterministic — a browser can't scrape arbitrary sites and there's no LLM. You paste the JD; the intelligence is in how it analyzes that text.
</details>

<details>
<summary><b>Do I need an account, API key, or internet?</b></summary>

No account, no key. Just a one-time CDN load for the libraries, then it works offline. Free forever.
</details>

---

## 🛠 Tech

One HTML file, vanilla JS — a deterministic résumé parser + JD-keyword/seniority scoring engine (no LLM, no scraping). Libraries via CDN: **pdf.js** (résumé import), **pdfmake** (real vector PDF with clickable links), **three.js** (the 3D hero), **Lenis** (smooth scroll), Google Fonts. No build step, nothing to host.

To run locally: download [`apply_copilot_app.html`](apply_copilot_app.html) and open it in Chrome/Edge.

## 🤝 Contributing

It's a single file — easy to hack on. Issues & PRs welcome. Good first ideas: parsing for more layouts, more job boards/locales, résumé themes.

## ⚖️ Responsible use

Outreach is for **manual, personalized** sending — open a link, write to a real person, send it yourself. Don't mass-automate.

## 📄 License

MIT — see [LICENSE](LICENSE). Built by [@prometheus-18](https://github.com/prometheus-18).
