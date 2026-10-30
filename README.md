# Notesflix 101

Free interactive Business Studies and Accountancy notes for CBSE Class XI and XII.
By Vishal Sir — C&S Classes, Gurugram.

Everything is static HTML. No build step, no server, no database.

```
index.html        the Notesflix 101 home page
notes/            the interactive notes, one HTML file each
img/              chapter thumbnails (ch01.jpg ... ch14.jpg) and the app icons
manifest.json     lets students install the site on their phone
sw.js             keeps the site readable with no connection
README.md         this file
```

---

## Put it live on GitHub (about 5 minutes)

1. On GitHub, create a new repository named `notesflix101`. Make it **Public**. Do not add a README — this zip already has one.
2. Open the repo → **Add file** → **Upload files**. Drag in `index.html`, `README.md`, `manifest.json`, `sw.js` and the whole `notes` and `img` folders. Commit.
3. Go to **Settings** → **Pages**.
4. Source: **Deploy from a branch**. Branch: **main**. Folder: **/ (root)**. Save.
5. Wait a minute or two. Your site is then live at:

   `https://rvishalkaushik-cloud.github.io/notesflix101/`

That is the single link you share with students. Every note opens from it — nothing is private, nothing needs a login.

To change anything later, edit the file on GitHub and commit. The site updates itself.

---

## How the site is organised

Everything lives in one list near the top of `index.html`: `const CHAPTERS = [ ... ]`.

Each chapter is a **series**; the notes inside it are its **episodes**. A student picks Class XII or Class XI, clicks a chapter, and sees every note in that chapter in study order.

To add a note to an existing chapter, find that chapter and add one line to its `episodes`:

```js
{ id:"unique-id", title:"Note title", mins:25, tier:"free", art:"chart",
  desc:"One line about what is inside.", url:"notes/your-file.html" },
```

| Field | What it does |
|---|---|
| `id` | any short unique word |
| `title` | shown in the episode row |
| `mins` | reading time |
| `tier` | `"free"` — every note is free right now. Set `"locked"` on a note to put it behind the short form again |
| `art` | the small drawing beside it — list below |
| `desc` | one line under the title |
| `url` | `notes/your-file.html` |

Order in the list is the order students see. A chapter with an empty `episodes: []` shows as **Coming soon** — the thumbnail still appears, so the site looks complete while you write.

To add a whole chapter, copy an existing block and change `id`, `cls` (`"XI"` or `"XII"`), `num`, `title`, `tagline`, `thumb` and `art`.

**Small drawings for `art`:** `teacher`, `package`, `pricetag`, `truck`, `megaphone`, `notebook`, `chart`, `coins`, `shield`, `certificate`, `globe`, `ship`, `documents`, `stamp`, `bank`, `crane`, `brain`, `target`, `blueprint`, `gears`.

## Chapter thumbnails

Each chapter points at a picture: `thumb:"img/ch11.jpg"`. All fourteen are already in `img/`, cut from the sheet and sized to 900x330. To change one, drop a new 900x330 JPEG in `img/` with the same name. Leave `thumb:""` and the site draws its own artwork instead.

---

## The story film

The "Why these notes exist" band plays a six-scene animated film. It is drawn by the page itself — no video file, nothing to host — so it costs nothing to load and works offline.

The scenes live in `const FILM = [ ... ]` inside `index.html`. Each one is a list of SVG paths that draw themselves in order, a title, a caption and a `hold` time in milliseconds. `figure(x, y, {...})` draws a person with consistent proportions; pass `cape:true` for the hero, `seated:true` at a desk, `armsDown:true` or `armsFwd:true` for the pose.

To change the words, edit `title` and `cap`. To change the pace, edit `hold`.

---

## What students get beyond the notes

**Progress.** Every note has a tick. What they have read is saved in their own browser — no account, nothing sent anywhere. Chapter cards show a green ring and a filled bar; the chapter page shows "2 of 3 read"; and a **Carry on where you left off** row appears at the top with whatever they started and the next note waiting for them.

**Search that reaches inside the notes.** Typing `esprit`, `delegation`, `bill of lading` or `budget` finds the note that covers it, not just the chapter title. Each note carries a `keys:"..."` list of its own terms — built from the note's text. If you rewrite a note heavily, ask me to rebuild that list.

**Sharing.** The ↗ button on each note opens WhatsApp with the note's link ready to send. This is how the site spreads — students passing notes to their class group.

**Exam countdown.** The hero shows "Board exams in N days". Set the date in the `CONFIG` block at the top of `index.html`:

```js
examDate: "2027-02-15"   // set to "" to hide the countdown
```

**Install and offline.** On a phone, students get an "Install" option that puts Notesflix on their home screen; after that the notes they have opened stay readable with no connection. This only works on the live GitHub Pages address, not from a file on the desktop.

**When you change the site:** open `sw.js` and bump `notesflix-v1` to `notesflix-v2`. That tells installed phones to pick up the new version. Forget this and some students keep seeing the old one.

---

## Mobile and motion standards

The CSS follows a checklist audited against [emilkowalski/skills](https://github.com/emilkowalski/skills). Three habits to keep if you edit it by hand:

1. **Every `:hover` rule lives in the one `@media (hover:hover) and (pointer:fine)` block** near the bottom of the stylesheet. A hover rule written anywhere else will stick to whatever a student taps on their phone until they tap elsewhere.
2. **Press feedback is `:active`, never `click`.** Anything tappable scales down a touch so it answers the instant a finger lands.
3. **Animate `transform` and `opacity` only.** Width, height and margin force the browser to redo layout on every frame. The progress bars use `transform:scaleX()` with `transform-origin:left` for exactly this reason.

Inputs are 16px because anything smaller makes iOS zoom in on focus and never zoom back out.

---

## The dark notebook look

The visual layer lives in one block at the very bottom of the `<style>` in `index.html`, marked `DARK NOTEBOOK`. It is appended last and only adds texture, type and borders on top of the original dark build — it sets no layout and renames nothing, so deleting the block leaves the plain dark site exactly as it was.

What it adds:

- **Graph paper in the dark**: near-black page with faint grid lines, a grain layer, punched binding holes and a red margin rule down the left edge (all hidden below 1100px so phones lose no width).
- **Marker type**: `Luckiest Guy` for the logo, hero, section and chapter headings; `Caveat` for the small handwritten asides. Both fall back to `Bebas Neue` if Google Fonts is unreachable.
- **Marker strokes**: a hand-drawn red underline under each section heading and under "binge" in the hero, drawn as inline SVG — no image files.
- **Masking tape**: yellow tape on the doodle reel's top corners and on the chapter sheet.
- **Pen borders**: cards, buttons and panels get a 2px light border, slightly uneven corner radii and a hard black offset shadow, so they read as paper pinned on a dark board.

To go further towards paper, raise `--grid` and `--edge` at the top of the block. To drop the notebook character entirely, delete the block.

## Collecting student details (switched off right now)

Every note is free and opens straight away — no form, nothing to fill in.

The form is still built in, just unused. To put any note behind it, change that note's `tier` from `"free"` to `"locked"`. A student then fills in name, class, WhatsApp number and school once; those details arrive as a ready-made WhatsApp message to **+91 81301 22362** (they only press send), and every locked note opens for them from then on. No server, no Google Form.

If you want a Google Form as well, paste its link in the `CONFIG` block at the top of `index.html`:

```js
googleFormUrl: "https://forms.gle/xxxxxxx"
```

**What the form is not:** it collects leads, it does not protect anything. Anyone who knows a file name can open it directly. Never put genuinely paid notes in this repo — send those on WhatsApp instead.

## Changing the phone number

In `index.html`, the `CONFIG` block:

```js
whatsapp: "918130122362",   // country code + number, no plus sign, no spaces
```

and the number shown on screen is in the line marked `id="phoneText"`.
