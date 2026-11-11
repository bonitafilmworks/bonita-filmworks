# bonita filmworks company — portfolio

A dependency-free portfolio site made for **GitHub Pages** (free hosting).
An index page plus four project pages, a warm off-white background, an oversized
black logo at 40% opacity with an 8 px blur anchored right, a black cropped logo
as the home link, a Jasper Red ant cursor with a Hermosa Pink outline, a solid
randomised colour box in
Vandyke Brown, Vandyke Red, Carmine Red and Eosine Pink that covers hovered
navigation labels, centred navigation, and display type at 20 pt.

The site is published from this repository and served at
**https://bonitafilmworks.co**.

## Pages

| Page | File | Content |
| --- | --- | --- |
| Home / Index | `index.html` | List of the four pages (no top-right navigation) |
| Who Are We? | `us.html` | Company statement and Contact button |
| Contact | `contact.html` | Project/Email/Info form with mailing-list signup |
| whiteTAR | `whitetar.html` | Embedded player with credits, synopsis and reflection |
| Two Bridges, New York | `two-bridges.html` | Embedded player with credits, synopsis and reflection |
| Bonnet & Calypso | `bonnet-calypso.html` | Coming soon |

Each project page is returned to the index with the logo at the top centre; the
pages carry no footer navigation of their own.

## Palette

Colours are taken from [Wada Sanzo's Dictionary of Color Combinations](https://sanzo-wada.dmbk.io/):

- Background: **warm off-white** `#f7f2f0`
- Logos and text: **black** `#000000`
- Cursor: **Jasper Red** `#fa2b00`, outlined in **Hermosa Pink** `#ffb3f0`
- Hover box: **Vandyke Brown** `#362304`, **Vandyke Red** `#740909`,
  **Carmine Red** `#a10b2b`, **Eosine Pink** `#ff5ec4`

The paper-grain background was removed; the page is a flat warm off-white
(`#f7f2f0`). All type is set at 20 pt with 4 px of inward kerning
(`letter-spacing: -4px`) and `word-spacing: 4px` so word gaps stay open. The
whiteTAR wordmark uses a lighter −2 px kern (`.kern-2`). Page headings are
underlined, and paragraph copy uses a lighter −3 px kerning. All
page text is centred, including the statement, form labels and buttons; text
typed into the form fields stays left-aligned. The logo is the only way back to
the index.

## Typography

The site uses the system **Helvetica** family
(`Helvetica, "Helvetica Neue", Arial, sans-serif`); no webfont is downloaded.
`New York` is wrapped in `.no-break` so it never splits across lines on narrow
screens.

## Files

- `styles.css` — all styling (shared by every page)
- `nav-highlight.js` — covers a hovered navigation label or button with a solid
  box in a random colour from the palette
- `contact.js` — posts the Contact form to FormSubmit and, when the mailing-list
  box is ticked, subscribes the sender's email through Kit
- `logo-position.js` — centres the top logo between the frame and the first
  navigation label on the index page
- `video-fallback.js` — replaces the embed with a thumbnail link when the site
  is opened from `file://`, where YouTube cannot receive a referrer
- `assets/logo-ant.png` — black web version of `LOGO ANT BIG.png`, used as the
  oversized background logo at 40% opacity with an 8 px blur
  (`--backdrop-blur`)
- `assets/logo-ant-small.png` — cropped 480 px black logo used as the top-centre
  home link (displayed at 117–151 px wide)
- `assets/cursor-ant.png` — 64 px cursor ant: Jasper Red fill with a Hermosa
  Pink outline; the same file is used as the favicon
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

## Contact form

`contact.html` posts to [FormSubmit](https://formsubmit.co/), a free form service
that forwards submissions to an inbox — no account and no backend required, so it
works on GitHub Pages.

- `contact.js` sends the form with `fetch` to
  `https://formsubmit.co/ajax/bonitafilmworks@gmail.com`, keeps the visitor on the
  page, and shows an inline confirmation or error.
- **Activation is one-time:** the first submission triggers an email from
  FormSubmit to `bonitafilmworks@gmail.com`. Click the confirmation link in that
  email to start receiving messages. Any submission sent before activation is
  not delivered.
- After activation, FormSubmit offers a random alias link
  (`https://formsubmit.co/abc123…`) that hides the plain address from bots.
  Replace the address in the `fetch` endpoint in `contact.js` and in the form
  `action` in `contact.html` to use it.
- The **Project** field becomes the email subject (`Project: …`), the **Info**
  field becomes the body, and the sender's **Email** becomes the Reply-To address.
  `_honey` is a hidden spam trap. Captcha is off so visitors only see the three
  fields.
- Test submissions on the live site, not from `localhost`, so activation is tied
  to `bonitafilmworks.co`.

### Mailing list

The same form feeds a [Kit](https://kit.com/) mailing list (formerly ConvertKit;
free up to 10,000 subscribers). The **Add me to the Bonita FilmWorks mailing
list** box is ticked by default. When it is left ticked, `contact.js` posts the
sender's address to Kit after FormSubmit accepts the message.

To connect it:

1. Create the free Kit account and set the sender name, email and mailing address.
2. In **Grow → Landing pages & forms**, create an inline form. In its settings,
   keep **double opt-in** on, add a tag such as `contact form`, and publish it.
   Keep the email field as the only required field so the hidden form can submit
   with just an address.
3. The hidden form is already wired to Kit form `10175681`
   (`https://app.kit.com/forms/10175681/subscriptions`, uid `2e5520d864`). If you
   replace the form later, copy **Embed → HTML** and update the `action`,
   `data-sv-form` and `data-uid` on `#subscribe-form` in `contact.html`.
4. Send one test contact message and click the confirmation link in the Kit email
   to finish.

With double opt-in, Kit emails each sender a confirmation link; they join the list
after clicking it, which also proves the address is real. The hidden
`subscribe-form` and its iframe in `contact.html` keep this off the page, so the
visitor only sees the inline thank-you.

## Publish for free with GitHub Pages

1. Create a new **public** repository on [github.com/new](https://github.com/new).
2. Upload the whole folder (or push it with git):
   - `index.html`
   - `us.html`
   - `whitetar.html`
   - `two-bridges.html`
   - `bonnet-calypso.html`
   - `contact.html`
   - `styles.css`
   - `nav-highlight.js`
   - `contact.js`
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
