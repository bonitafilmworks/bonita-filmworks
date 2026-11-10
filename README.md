# bonita filmworks company — portfolio

A dependency-free portfolio site made for **GitHub Pages** (free hosting).
An index page plus four project pages, a plain white background, an oversized
black logo at 40% opacity with an 8 px blur anchored right, a black cropped logo
as the home link, a Jasper Red ant cursor, a solid randomised colour box in
Vandyke Brown, Vandyke Red, Carmine Red and Eosine Pink that covers hovered
navigation labels, centred navigation, and display type at 20 pt.

The site is published from this repository and served at
**https://bonitafilmworks.co**.

## Pages

| Page | File | Content |
| --- | --- | --- |
| Home / Index | `index.html` | List of the four pages (no top-right navigation) |
| Us | `us.html` | Coming soon |
| whiteTAR | `whitetar.html` | Embedded YouTube player |
| Two Bridges, New York | `two-bridges.html` | Embedded YouTube player |
| Bonnet & Calypso | `bonnet-calypso.html` | Coming soon |

Each project page has a **← Index** link in its footer, and the logo at the top
centre links back to the index.

## Palette

Colours are taken from [Wada Sanzo's Dictionary of Color Combinations](https://sanzo-wada.dmbk.io/):

- Background: **white** `#ffffff`
- Logos and text: **black** `#000000`
- Cursor: **Jasper Red** `#fa2b00`
- Hover box: **Vandyke Brown** `#362304`, **Vandyke Red** `#740909`,
  **Carmine Red** `#a10b2b`, **Eosine Pink** `#ff5ec4`

The paper-grain background was removed; the page is a flat white. All type is
set at 20 pt with 4 px of inward kerning (`letter-spacing: -4px`) and
`word-spacing: 4px` so word gaps stay open. The whiteTAR wordmark uses a lighter
−2 px kern (`.kern-2`). The index navigation and the footer **← Index** link are
centred.

## Typography

The site uses the system **Helvetica** family
(`Helvetica, "Helvetica Neue", Arial, sans-serif`); no webfont is downloaded.
`New York` is wrapped in `.no-break` so it never splits across lines on narrow
screens.

## Files

- `styles.css` — all styling (shared by every page)
- `nav-highlight.js` — covers the hovered label with a solid box in a random
  colour from the palette
- `logo-position.js` — centres the top logo between the frame and the first
  navigation label on the index page
- `video-fallback.js` — replaces the embed with a thumbnail link when the site
  is opened from `file://`, where YouTube cannot receive a referrer
- `assets/logo-ant.png` — black web version of `LOGO ANT BIG.png`, used as the
  oversized background logo at 40% opacity with an 8 px blur
  (`--backdrop-blur`)
- `assets/logo-ant-small.png` — cropped 480 px black logo used as the top-centre
  home link (displayed at 117–151 px wide)
- `assets/cursor-ant.png` — Jasper Red 64 px version of `BFWC ANT.png`, used as the cursor
- `assets/favicon.png` — black ant on a white tile
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
   - `logo-position.js`
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
  `font-size: 20pt`, and `letter-spacing`).
- The nav highlight uses the four hex values listed in `nav-highlight.js`.
  Change them there to recolour the hover box.
- To swap the cursor, replace `assets/cursor-ant.png` with another square PNG
  (64 × 64 px works well) and update the hotspot in the `--cursor` rule if needed.
