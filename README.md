# bonita filmworks company — portfolio

A dependency-free portfolio site made for **GitHub Pages** (free hosting).
An index page plus four project pages, a plain white background, an oversized
black logo at 40% opacity anchored right, a black cropped logo as the home link,
a Jasper Red ant cursor, a cursor trail in three Sanzo Wada colours, a solid
randomised colour box that covers hovered navigation labels, and Courier type at
20 pt with 5 pt letter spacing.

The site is published from this repository and served at
**https://bonitafilmworks.co**.

## Pages

| Page | File | Content |
| --- | --- | --- |
| Home / Index | `index.html` | List of the four pages (no top-right navigation) |
| Us | `us.html` | Coming soon |
| whiteTAR | `whitetar.html` | Embedded YouTube player |
| Two Bridges, 纽约 | `two-bridges.html` | Embedded YouTube player |
| Bonnet & Calypso | `bonnet-calypso.html` | Coming soon |

Each project page has a **← Index** link next to the YouTube link, and the logo at
the top left links back to the index.

## Palette

Colours are taken from [Wada Sanzo's Dictionary of Color Combinations](https://sanzo-wada.dmbk.io/):

- Background: **white** `#ffffff`
- Logos and text: **black** `#000000`
- Cursor: **Jasper Red** `#fa2b00`
- Cursor trail: **Rosolanc Purple** `#b319ab`, **Deep Lyons Blue** `#0024cc`,
  **Jasper Red** `#fa2b00`
- Hover box: **Sulphine Yellow** `#baa600`, **Rosolanc Purple** `#b319ab`,
  **Deep Lyons Blue** `#0024cc`, **Jasper Red** `#fa2b00`

The paper-grain background was removed; the page is a flat white. All type is
set at 20 pt with 5 pt letter spacing.

## Typography

The site uses **“Why do we blink so frequently? Jungle”** by junkohanhero
(`assets/fonts/why-do-we-blink-jungle.ttf`, loaded via `@font-face` as
`Bonita Display`). The font has no Chinese glyphs, so `纽约` falls back to
PingFang / Hiragino Sans / Noto Sans CJK, and the `←` in the back link falls back
to the system font. `纽约` is wrapped in `.no-break` so it never splits across
lines on narrow screens.

Licensing: the font is **free for personal use only**; commercial use (this is a
company site) requires a $20 licence from junkohanhero
(junkohanhero@gmail.com). Swap the file if a licensed alternative is preferred —
only the `@font-face` `src` and the `font-family` list need to change.

## Files

- `styles.css` — all styling (shared by every page)
- `nav-highlight.js` — covers the hovered label with a solid box in a random
  colour from the palette
- `trail.js` — spawns the randomised ant trail on mouse move (skipped on touch
  devices and when reduced motion is requested)
- `video-fallback.js` — replaces the embed with a thumbnail link when the site
  is opened from `file://`, where YouTube cannot receive a referrer
- `assets/fonts/why-do-we-blink-jungle.ttf` — the display typeface (see Typography)
- `assets/fonts/LICENCE.txt` — the type designer's licence note
- `assets/logo-ant.png` — black web version of `LOGO ANT BIG.png`, used as the
  oversized background logo at 40% opacity
- `assets/logo-ant-small.png` — cropped 480 px black logo used as the top-left
  home link (displayed at 117–151 px wide)
- `assets/cursor-ant.png` — Jasper Red 64 px version of `BFWC ANT.png`, used as the cursor
- `assets/favicon.png` — black ant on a white tile
- `assets/trail-rosolanc.png`, `assets/trail-lyons.png`,
  `assets/trail-jasper.png` — 128 px trail ants
- `BFWC ANT.png`, `LOGO ANT BIG.png` — your original artwork, untouched
- `CNAME` — tells GitHub Pages to serve the site at `bonitafilmworks.co`
- `.nojekyll` — tells GitHub Pages to serve the files exactly as they are

The original artwork is black on a transparent background. It is kept in the
project as supplied; the versions in `assets/` are recoloured black and sized for
the web.

## Preview locally

Run a tiny local server and open the site over `http://`:

```sh
ruby -run -e httpd . -p 8000
# then open http://localhost:8000
```

Use the server rather than opening the `.html` files directly. YouTube now
requires a real http(s) referrer for embedded players; a `file://` preview can
show **“Error 153: Video player configuration error”**. The embeds also use
`youtube-nocookie.com` and send
`Referrer-Policy: strict-origin-when-cross-origin` to keep the player happy.

## Publish for free with GitHub Pages

1. Create a new **public** repository on [github.com/new](https://github.com/new).
2. Upload the whole folder (or push it with git):
   - `index.html`
   - `us.html`
   - `whitetar.html`
   - `two-bridges.html`
   - `bonnet-calypso.html`
   - `styles.css`
   - `nav-highlight.js`
   - `trail.js`
   - `video-fallback.js`
   - `assets/` (the whole folder)
   - `.nojekyll`
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Choose branch **main** and folder **/ (root)**, then click **Save**.
6. After a minute, the site is live at:

   ```
   https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
   ```

Tip: if you name the repository `YOUR-USERNAME.github.io`, the site will live at
`https://YOUR-USERNAME.github.io/` with no extra path.

## Editing later

- Change text, titles and links directly in the `.html` files.
- Change colours, type sizes and the logo size in `styles.css`
  (look for `--bg`, `--fg`, `--jasper`, `.backdrop__logo`, `.brand__logo`,
  `font-size: 20pt`, `letter-spacing: 5pt`, and `.cursor-trail`).
- The trail picks randomly from the three `assets/trail-*.png` files listed in
  `trail.js`; change the colours there and regenerate those PNGs to recolour it.
- The nav highlight uses the four hex values listed in `nav-highlight.js`.
  Change them there to recolour the hover box.
- To swap the cursor, replace `assets/cursor-ant.png` with another square PNG
  (64 × 64 px works well) and update the hotspot in the `--cursor` rule if needed.
