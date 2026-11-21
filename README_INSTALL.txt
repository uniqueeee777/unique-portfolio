UNIQUE PORTFOLIO — PROJECT LAB + PUBLICATIONS + PDF READABILITY UPDATE
21 November 2026 | VS Code / GitHub Pages

THIS UPDATE MODIFIES THE WEBSITE AND PDF TOGETHER.
It does not change index.html or .github/workflows/publish.yml.

1. Make a backup or create a Git commit before replacing files.
2. Open your Git-connected folder: unique-portfolio (not the older unique_portfolio_html folder).
3. Extract the ZIP into the root of unique-portfolio, keeping the assets/ subfolder.
   Replace these FIVE root files:
   - app.js
   - data.js
   - styles.css
   - portfolio-print.js
   - portfolio-print.css
   Add these SEVEN new print-only images:
   - assets/print-unique-profile.jpg
   - assets/print-teaching-01.jpg to assets/print-teaching-06.jpg
4. Keep all other original images in assets/ (the website still uses them).
5. Confirm index.html calls (in this exact order):
   <script defer src="data.js"></script>
   <script defer src="app.js"></script>
   <script defer src="portfolio-print.js"></script>
   and has <link rel="stylesheet" href="portfolio-print.css" media="print">
6. Confirm the existing .github/workflows/publish.yml Prepare website step copies:
   cp index.html app.js data.js styles.css portfolio-print.js portfolio-print.css dist/
   cp -R assets dist/assets
7. Open Go Live in VS Code and verify:
   - Project Lab (menu 07): Lexia, Socioeconomic Data Explorer, Tableau Practice Lab.
   - Scientific Publications popup: three short research summaries, no status tabs.
   - Published paper links remain in Education; Data-Driven Writing popup remains unchanged.
   - Ctrl+P or Save as PDF in Contact: exactly 8 A4-landscape pages.
   - Turn ON Background graphics in the browser print dialog.
8. When the site and PDF are verified, stage the five updated files and seven new print images,
   Commit -> Sync Changes / Push, then check the GitHub Actions deploy job is green.

NOTES
- Research metadata full titles remain in data.js, but the portfolio displays short summaries.
- Submitted research remains identified truthfully; development projects are not marked as completed.
- Lexia's n8n/PostgreSQL/WhatsApp architecture is under development, not claimed deployed.
- Do not commit test PDFs or portfolio-print.json; they are not required for the website.
- Tested offline in Chromium/Playwright as 8 pages, about 1.86 MB; your Chrome Save as PDF
  file size can vary due to browser and print settings.
