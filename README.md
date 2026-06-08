# Apply AutoPilot 🧭

A self-contained, single-file job-application co-pilot. Paste a job description and it produces an **ATS-tuned résumé** and a **tailored cover letter** (download as PDF), a **keyword-gap analysis** against your master résumé, a **company-specific outreach kit**, a **job finder**, and an **application tracker** — all in one HTML file. Your data never leaves your browser.

## ✨ Features

- **⓪ Master résumé** — your résumé is held as the single source of truth. Every tailoring starts from it and only reorders/emphasizes — it never invents experience.
- **① Fit & keywords** — estimated ATS match score, the keywords you already have, and the JD keywords you're missing.
- **② Tailored résumé** — auto-adjusted to the role, editable, one-click **Download PDF**.
- **③ Tailored cover letter** — company- and role-specific, editable, **Download PDF**.
- **④ Outreach kit** — direct LinkedIn search links (hiring manager / peer / recruiter), a connection-request note, and a company-specific referral email + follow-up. Ships with known public recruiting contacts for a few firms; verified email-*pattern* guesses otherwise.
- **⑤ Find Jobs** — filtered LinkedIn & Naukri deep links across your target roles and cities.
- **⑥ Tracker** — log every application with stage / next-action dropdowns and notes; export to CSV.

## 🚀 Quick start

1. Open **`apply_copilot_app.html`** in **Google Chrome** (direct PDF download works best there).
2. Go to the **Master** tab and set your name, contact details, summary, and skills — saved locally in your browser.
3. Paste a JD on the left → **Analyze & generate** → review the tabs → **Download PDF**.

## 🤖 AI mode vs Manual mode

- Run inside **Claude Cowork** (as an artifact) and it tailors with an LLM for higher-quality output.
- Opened as a **standalone file**, it uses a built-in deterministic rules engine (no network, fully offline) and the reliable Chrome **Download PDF**.

## 🔒 Privacy

All data — your profile and your application log — is stored in your browser's `localStorage`. Nothing is sent to any server.

## 🛠 Tech

Single-file HTML + CSS + vanilla JS. PDF export via [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) (CDN). No build step, no dependencies to install.

## ⚖️ Responsible use

The outreach features are built for **manual, personalized** sending — open a link, write to a real person, hit send yourself. Don't use them to mass-automate connection requests or emails; it violates platform terms and gets accounts flagged.

## 📄 License

MIT © 2026 Rahul Verma ([@prometheus-18](https://github.com/prometheus-18))
