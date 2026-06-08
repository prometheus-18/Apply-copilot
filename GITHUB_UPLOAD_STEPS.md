# 📤 How to upload Apply AutoPilot to GitHub

Everything is already saved in this folder:
`C:\Users\hp\Claude\Artifacts\apply-copilot`

Files: `apply_copilot_app.html`, `README.md`, `LICENSE`, `.gitignore`, `setup_github.bat`, this guide.

You'll do this once. Pick **Path A** (one click) or **Path B** (type the commands).

---

## Step 1 — Create the empty repo on GitHub
1. Go to https://github.com/new
2. **Owner:** prometheus-18 · **Repository name:** `Apply-AutoPilot`
3. **Visibility:** Public (or Private if you prefer)
4. **Leave OFF:** "Add a README", "Add .gitignore", "Choose a license" — the repo must be **empty** so the push works cleanly.
5. Click **Create repository**.

---

## Step 2 — Open this folder in VS Code
- VS Code → **File ▸ Open Folder…** → select `C:\Users\hp\Claude\Artifacts\apply-copilot`
- Open a terminal: **Terminal ▸ New Terminal**

---

## Step 3A — One-click (easiest)
In the terminal, type:
```
setup_github.bat
```
…and press Enter. (Or just double-click `setup_github.bat` in File Explorer.) It runs every git step for you.

## Step 3B — Manual commands
Paste these one by one in the terminal:
```bash
git init
git add .
git commit -m "Initial commit: Apply AutoPilot job-application co-pilot"
git branch -M main
git remote add origin https://github.com/prometheus-18/Apply-AutoPilot.git
git push -u origin main
```

---

## Step 4 — Sign in when prompted
On `git push`, GitHub asks you to authenticate. **It will NOT accept your account password.** Use one of:
- The **"Sign in with browser"** popup VS Code shows (easiest), or
- A **Personal Access Token** as the password: GitHub ▸ Settings ▸ Developer settings ▸ Personal access tokens ▸ *Tokens (classic)* ▸ Generate (scope: `repo`), then paste it when asked for a password.

*(This step is yours — I can't enter credentials for you.)*

---

## Step 5 — Verify
Open **https://github.com/prometheus-18/Apply-AutoPilot** — you should see all the files and the README rendered on the front page. Done. 🎉

---

## Troubleshooting
| Message | Fix |
|---|---|
| `git is not recognized` | Install Git: https://git-scm.com/download/win then reopen the terminal. |
| `remote origin already exists` | Run `git remote remove origin`, then the `git remote add …` line again. |
| `failed to push … fetch first` / `non-fast-forward` | The repo wasn't empty (a README/license was added). Run `git pull origin main --allow-unrelated-histories`, then `git push -u origin main`. |
| `Authentication failed` | Use a Personal Access Token as the password (see Step 4). |
| Want to update later | Edit files, then: `git add .` → `git commit -m "update"` → `git push`. |

---

## Updating the app later
Edit `apply_copilot_app.html` (or anything), then:
```bash
git add .
git commit -m "Describe your change"
git push
```
