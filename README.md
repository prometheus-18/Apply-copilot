# Apply Co-Pilot 🧭

**Your whole job hunt in one HTML file.** Add your résumé once, then paste any job description and get back an **ATS-tuned résumé** + a **tailored cover letter** (download as PDF), a **keyword-gap score**, a **company-specific outreach kit**, a **job finder**, and an **application tracker**.

No sign-up. No server. No build step. Your data never leaves your browser.

👉 **[Open the app live](https://raw.githack.com/prometheus-18/apply-copilot/main/index.html)** · or download [`apply_copilot_app.html`](apply_copilot_app.html) and open it in Chrome.

> Tip: maintainers can enable **GitHub Pages** (Settings → Pages → deploy from `main` / root) for a `https://prometheus-18.github.io/apply-copilot/` URL.

---

## How it works (3 steps)

1. **Add your master résumé — once.** Go to the **⓪ Master** tab and either:
   - **Upload your master PDF** (your optimized, all-in-one résumé), or **paste its text**, then hit **Auto-fill** — and tweak anything that's off, or
   - type your details straight into the fields.

   This becomes your **single source of truth**. Every tailoring starts from it and only **reorders & emphasizes** what's already there — it never invents experience.

2. **Paste a job description.** Add the company + role, paste the JD, hit **Analyze & generate**.

3. **Review & send.** Flip through the tabs:
   - **① Fit** — an estimated ATS match score, the keywords you already have, and the ones the JD wants that you're missing.
   - **② Résumé** — auto-tailored to the role, fully editable, one-click **Download PDF**.
   - **③ Cover** — a company- and role-specific cover letter, editable, **Download PDF**.
   - **④ Outreach** — LinkedIn people-search deep links (hiring manager / peer / recruiter), a connection note, and a referral email + follow-up, with an email-*pattern* guess to verify.
   - **⑤ Find jobs** — filtered LinkedIn & Indeed deep links across *your* target roles and locations.
   - **⑥ Tracker** — log every application with stage / next-action dropdowns and notes; export to CSV.

---

## ✨ Why it's different

- **Built around one master résumé.** Upload your optimized "master PDF" once; tailor from it forever. No re-typing per application.
- **Honest tailoring.** It reorders and emphasizes your real bullets and weaves in the JD's exact keywords you *genuinely* have — it won't fabricate skills.
- **Private by default.** Your profile and application log live in your browser's `localStorage`. Nothing is uploaded.
- **Works anywhere.** A single, dependency-free HTML file. Open it locally, host it, or run it as a Claude Cowork artifact.

## 🤖 AI mode vs Manual mode

- Inside **Claude Cowork** (as an artifact) it uses an LLM to auto-structure your uploaded résumé and to tailor each application for higher-quality output.
- Opened as a **standalone file**, it falls back to a built-in deterministic rules engine — no network, fully offline — plus the reliable Chrome **Download PDF**.

## 🚀 Quick start

1. Open **`apply_copilot_app.html`** in **Google Chrome** (direct PDF download works best there).
2. **⓪ Master** tab → upload your master résumé PDF (or paste it) → **Auto-fill** → review → **Save master**. New here? Hit **Load sample** to see a complete example first.
3. Paste a JD on the left → **Analyze & generate** → review the tabs → **Download PDF**.

## 🔒 Privacy

All data — your profile and your application log — is stored in your browser's `localStorage`. Nothing is sent to any server. Uploaded résumé files are parsed in-browser and never leave your machine.

## 🛠 Tech

Single-file HTML + CSS + vanilla JS. PDF **export** via [html2pdf.js](https://github.com/eKoopmans/html2pdf.js); PDF **import** via [pdf.js](https://github.com/mozilla/pdf.js) (both from CDN). No build step, no install.

## ⚖️ Responsible use

The outreach features are built for **manual, personalized** sending — open a link, write to a real person, hit send yourself. Don't use them to mass-automate connection requests or emails; it violates platform terms and gets accounts flagged.

## 🤝 Contributing

Issues and PRs welcome — it's one file, so it's easy to hack on. Ideas: more job boards, better résumé parsing, more export formats.

## 📄 License

MIT — see [LICENSE](LICENSE). Maintained by [@prometheus-18](https://github.com/prometheus-18).
