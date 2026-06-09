# Apply Co-Pilot 🧭

**Upload your résumé once → paste any job → get a custom, ATS-optimized résumé + cover letter as a PDF with clickable links.**
Runs **100% in your browser**. No sign-up, no servers, no AI keys — your résumé never leaves your device.

![License: MIT](https://img.shields.io/badge/License-MIT-22d3ee) ![100% client-side](https://img.shields.io/badge/100%25-client--side-7c83ff) ![No sign-up](https://img.shields.io/badge/no-sign--up-34d399) ![Single file](https://img.shields.io/badge/single-HTML%20file-f59e0b)

### 👉 [**Open the app**](https://raw.githack.com/prometheus-18/Apply-copilot/main/index.html) &nbsp;·&nbsp; or download [`apply_copilot_app.html`](apply_copilot_app.html) and open it in **Chrome** or **Edge**.

---

## ⚡ Try it in 30 seconds

1. **Open the app** (link above). It opens straight to the **⓪ Master** tab.
2. **Upload your résumé** (PDF or TXT) — or click **Load a sample** to see it work first.
3. On the left, type the **Company** + **Role** and **paste the full job description**.
4. Hit **✨ Tailor my résumé.**
5. Go to **① Résumé → ⬇ Download PDF**, and in the print dialog choose **“Save as PDF.”** Done. ✅

> 💡 Your résumé is the **master** — you only upload it once. After that, every new job just needs a paste + one click.

---

## 🎯 What it actually does

It doesn't just *score* your résumé — it **rebuilds it for the specific job**:

- ✍️ **Rewrites your summary** to lead with your strongest match to the role.
- 🔝 **Reorders your bullets and skills** so the most JD-relevant, quantified ones come first.
- 🧲 **Surfaces the JD's exact keywords** you genuinely have (that's what ATS systems match on).
- 🚫 **Never invents anything** — it only reorders and re-emphasizes your *real* experience.

…and the PDF is **real selectable text with working hyperlinks** (email · LinkedIn · GitHub), which is exactly the format ATS parsers can read — not a flat image.

---

## 🗂 The tabs

| Tab | What you get |
|---|---|
| **⓪ Master** | Upload your résumé once. Replace or clear it anytime. |
| **① Résumé** | Your résumé rebuilt for the job. Editable. **Download PDF.** |
| **② Cover** | A matching, role-specific cover letter. Editable. **Download PDF.** |
| **③ Fit** | Estimated ATS match score, matched vs. missing keywords, tips to improve. |
| **④ Outreach** | LinkedIn deep links (hiring manager / peer / recruiter) + a connection note, referral email & follow-up. |
| **⑤ Find jobs** | One-click LinkedIn / Indeed / Naukri searches for the role. |
| **⑥ Tracker** | Log applications with stage + next-action dropdowns. Export to CSV. |

---

## ✅ Tips for the best result

- **Use a normal résumé format** with clear section headers — `Summary`, `Skills`, `Experience`, `Projects`, `Education`, `Certifications`. The parser keys off these.
- **Paste the *entire* job description** (responsibilities *and* requirements) — more text = better keyword matching.
- The résumé and cover letter are **fully editable** — click any line to fix wording before you download.
- Anything the parser gets slightly wrong, just **edit it inline** — it takes seconds.

---

## ❓ FAQ

**Is my data safe?** Yes. Everything runs in your browser. Your résumé, the tailored output, and your tracker live only in your browser's `localStorage`. Nothing is uploaded to any server — there is no server.

**The downloaded PDF is empty / cut off?** Make sure you **tailored a résumé first** (① Résumé tab shows it), then use **Download PDF** and pick **“Save as PDF”** as the destination. Chrome/Edge give the cleanest result.

**My résumé parsed a bit wrong.** Some PDFs flatten oddly. The output is **editable** — fix it inline. Or paste your résumé as text in ⓪ Master for the cleanest parse.

**Does it need internet / an account / an API key?** No to all three. After the page loads, it works offline. It's free forever.

**Will it lie on my résumé?** No. It only reorders and rephrases what's already there. It will *suggest* missing keywords in **③ Fit**, but only you decide what's true.

---

## 🔒 Privacy

100% client-side. Résumés are parsed in-browser via [pdf.js](https://github.com/mozilla/pdf.js). Data is stored only in your browser's `localStorage` and never transmitted.

## 🛠 Tech

One HTML file. Vanilla JS + a deterministic résumé parser and JD-keyword engine (no LLM, no network). PDF **import** via [pdf.js](https://github.com/mozilla/pdf.js); PDF **export** via the browser's native print-to-PDF (keeps text + links ATS-readable). No build step, no dependencies to host.

## 🤝 Contributing

It's a single file — easy to hack on. Issues & PRs welcome. Good first ideas: smarter parsing for unusual layouts, more job boards/locales, résumé themes.

## ⚖️ Responsible use

Outreach is for **manual, personalized** sending — open a link, write to a real person, send it yourself. Don't mass-automate; it violates platform terms.

## 📄 License

MIT — see [LICENSE](LICENSE). Built by [@prometheus-18](https://github.com/prometheus-18).
