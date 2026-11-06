# RestartGen website: instructions for Claude

Static, bilingual (English default, Greek toggle) website for RestartGen, an independent
non-profit initiative of young Greeks abroad working to turn brain drain into brain gain.
Hosted on GitHub Pages from the `main` branch, root folder. A push to `main` goes live in
about a minute: https://vassilikibilli.github.io/restartgen-website/

There is no build step. **The HTML files are the source of truth**: edit them directly.

## Files
- `index.html` Home · `about.html` About us · `team.html` Our team ·
  `articles.html` Articles & research · `contact.html` Contact · `404.html`
- `css/style.css`: all styling; brand tokens at the top
- `js/main.js`: language toggle (remembers choice), mobile menu, small helpers
- `assets/`: logos (`logo.svg`, `logo-cream.svg`, `mark.svg`, `favicon.svg`),
  waves (`wave-teal.svg`, `wave-yellow.svg`), `contact-phone.png` (teal rotary phone on the
  contact page), `team-map-base.svg` (Europe map on the team page)
- `.nojekyll`: keeps GitHub Pages from processing files; leave it in place

The header (menu) and footer are repeated in every page. A change to either must be made
in **all six** HTML files.

## Bilingual text: always edit both languages
Every piece of visible text exists twice, side by side, marked with `lang`:

    <p lang="en">English text</p><p lang="el">Ελληνικό κείμενο</p>

CSS shows only the active language. When adding or changing text, write both versions;
if no Greek is given, translate it and tell the user so they can check it. Placeholders and
`<option>` labels use `data-en` / `data-el` (or `data-ph-en` / `data-ph-el`) attributes.
Page titles come from `data-title-en` / `data-title-el` on `<body>`.

## Brand rules: do not deviate
- Colours: teal `#7fc3ba`, yellow `#fad57e`, charcoal `#313032`, cream `#f7f1ec`
  (page background). `#3d7f76` is a darker teal used only for small text and links,
  for legibility.
- Headings: Poppins. Body: Avenir Next, falling back to Nunito Sans (loaded from Google
  Fonts). Greek uses Manrope, because Poppins has no Greek letters.
- Shapes: rounded "panels" with a 1.5px charcoal border and a coloured label bar, pill
  buttons, thin charcoal rules. Flat colours, no gradients or drop shadows.
- Illustrations: flat, brand colours only. The wave from the logo is the main graphic motif.

## Content facts
- Contact: info@restartgen.org · Instagram https://www.instagram.com/restartgen/ ·
  LinkedIn https://www.linkedin.com/company/restartgen/ · no Facebook.
- The contact page has no form, just the text, email and social links.
- Team (`team.html`): Laura Bakola (co-founder, Netherlands) always first; then all other
  members in alphabetical order by surname: Vasiliki Bili (Denmark), Spyros Kroussas
  (Luxembourg), Elena Lianidou (Netherlands), Argyro Myzithra (Greece), Maria Slamari
  (Belgium). Each member uses the same card: initials circle (alternating teal/yellow),
  name, role and country. No "photo and bio coming soon" placeholder text. To add a photo, put it in `assets/team/` and
  replace the initials with `<img src="assets/team/NAME.jpg" alt="">`.
- The team map pins and their labels are an inline `<svg class="team-map-pins">` in
  `team.html`; update the member counts there (in both languages) and in the map image's
  `alt` text when members change.

## How to make a change
1. Make the edit, in both languages where text is involved.
2. Serve the folder locally (`python3 -m http.server`) and take Playwright screenshots of
   the changed page at desktop (1280px wide) and phone (390px wide) sizes. Show them to the
   user. Check that nothing overflows horizontally on the phone.
3. Publish only after the user approves: commit with a short, plain message and push to
   `main`. Run `git fetch origin main` first and rebase if needed.
4. Check the "pages build and deployment" run finishes with success:
   `gh api "repos/vassilikibilli/restartgen-website/actions/runs?per_page=1"`.
   The github.io address itself may be unreachable from the workspace; that's fine.
5. Tell the user in a sentence or two what changed and that it's live.

Do not change GitHub repository settings, and do not publish to Netlify. The site moved off
Netlify to avoid its deploy credits.
