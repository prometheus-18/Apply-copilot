# Apply Co-Pilot 🧭

**Upload your résumé once. Paste any job. Get a custom, ATS-optimized résumé + cover letter — as a direct PDF with clickable links.**

No sign-up. No servers. No AI keys. **100% in your browser** — your résumé never leaves your machine.

👉 **[Open the app live](https://raw.githack.com/prometheus-18/apply-copilot/main/index.html)** · or download [`apply_copilot_app.html`](apply_copilot_app.html) and open it in Chrome/Edge.

---

## How it works (3 steps)

1. **⓪ Upload your résumé — once.** Drop a **PDF** (or paste the text). That's it — no forms to fill. It becomes your **master**, and a built-in parser turns it into clean, structured sections.
2. **Paste a job description.** Add the company + role, paste the JD, hit **Tailor my résumé**.
3. **Download & send.** Flip through the tabs:
   - **① Résumé** — your résumé **rebuilt for the role**: a tailored summary, bullets and skills **reordered toward the JD's keywords**, one-click **Download PDF** (real, selectable text + clickable hyperlinks → exactly what ATS parsers read). Fully editable.
   - **② Cover** — a matching, role-specific cover letter. Editable, **Download PDF**.
   - **③ Fit** — an estimated **ATS match score**, the keywords you already have, the ones the JD wants that you're missing, and concrete tips to raise it.
   - **④ Outreach** — LinkedIn people-search deep links (hiring manager / peer / recruiter), a connection note, and a referral email + follow-up, with an email-*pattern* guess to verify.
   - **⑤ Find jobs** — quick LinkedIn / Indeed / Naukri searches for the role.
   - **⑥ Tracker** — log every application with stage / next-action dropdowns and notes; export to CSV.

---

## ✨ Why it's different

- **The custom résumé is the product.** It doesn't just score you — it **rebuilds your résumé for the specific job**: rewrites the summary, leads each role with its most relevant quantified bullet, and surfaces the JD's exact keywords *you genuinely have*.
- **Honest tailoring.** It reorders and re-emphasizes your **real** experience. It never invents skills, employers, or metrics.
- **ATS-friendly by construction.** The PDF is real text (not an image), with standard section headers and **working hyperlinks** — the format ATS systems actually parse.
- **Truly private & free.** No accounts, no API keys, no network calls. Your résumé, the tailored output, and your application log all live in your browser's `localStorage`. Nothing is uploaded, ever.
- **One file.** A single dependency-light HTML file. Open it locally, host it, or fork it.

---

## 🚀 Quick start

1. Open **`apply_copilot_app.html`** in **Google Chrome / Edge** (best print-to-PDF support).
2. **⓪ Master** → upload your résumé PDF (or paste it). New here? Hit **Load a sample** to see a full example.
3. Paste a JD on the left → **Tailor my résumé** → open **① Résumé** → **Download PDF** → in the dialog choose **“Save as PDF.”**

---

## 🔒 Privacy

Everything runs client-side. Uploaded résumés are parsed in-browser via [pdf.js](https://github.com/mozilla/pdf.js). Your data is stored only in your browser's `localStorage` and is never transmitted to any server.

## 🛠 Tech

Single-file HTML + CSS + vanilla JS. A deterministic résumé parser + JD keyword engine (no LLM, no network). PDF **import** via [pdf.js](https://github.com/mozilla/pdf.js); PDF **export** via the browser's native print-to-PDF (keeps text + links ATS-readable). No build step, no install, no dependencies to host.

## ⚖️ Responsible use

The outreach features are for **manual, personalized** sending — open a link, write to a real person, send it yourself. Don't mass-automate connection requests or emails; it violates platform terms and gets accounts flagged.

## 🤝 Contributing

Issues and PRs welcome — it's one file, easy to hack on. Ideas: smarter résumé parsing for unusual layouts, more job boards, more locales, themes.

## 📄 License

MIT — see [LICENSE](LICENSE). Maintained by [@prometheus-18](https://github.com/prometheus-18).
