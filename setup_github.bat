@echo off
REM ============================================================
REM  Apply AutoPilot  ->  GitHub
REM  Run this from INSIDE this folder (it already contains
REM  apply_copilot_app.html, README.md, LICENSE, .gitignore).
REM  Prereq: create the EMPTY repo first at:
REM     https://github.com/prometheus-18/Apply-AutoPilot
REM     (Public, do NOT add README/.gitignore there)
REM ============================================================
cd /d "%~dp0"
echo.
echo === Initializing git ===
git init
git add .
git commit -m "Initial commit: Apply AutoPilot job-application co-pilot"
git branch -M main
echo.
echo === Linking remote ===
git remote remove origin 2>nul
git remote add origin https://github.com/prometheus-18/Apply-AutoPilot.git
echo.
echo === Pushing (you may be asked to sign in / paste a token) ===
git push -u origin main
echo.
echo Done. Open: https://github.com/prometheus-18/Apply-AutoPilot
pause
