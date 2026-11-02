# Notesflix notes factory — playbook

This folder builds the interactive notes and publishes them on notesflix101.com. GitHub Pages does not serve folders that start with `_`, so nothing here appears on the site.

**APPROVAL RULE (owner, 2 Nov 2026): never publish a part the owner has not seen.** One run = build + test ONE part and show it to the owner as a private preview (Artifact). Publish with `publish.py` only after he approves that part. Do not create any auto-publishing schedule unless he asks again.

## 1. Pick the part
Open `roadmap.json`. Take the first part with `"status":"todo"` (Class XII first, then XI). Its `topics` are the CBSE 2026-27 syllabus lines for that part. Teach exactly those — nothing outside the syllabus.

## 2. Research (every run, ~10 minutes)
Use web search to check the facts for this part against:
- the NCERT chapter (Macroeconomics / Indian Economic Development / Statistics for Economics / Introductory Microeconomics),
- the CBSE 2026-27 curriculum and sample question paper + marking scheme (cbseacademic.nic.in),
- previous-year board questions and KV/KVS study material for the question styles that actually come.
Any current figure (GDP, repo rate, GST, budget numbers) must be checked online that day and named with its source in the note. If not verifiable, use clearly labelled made-up numbers.

## 3. Write the content file (outside the repo!)
Write `$TMPDIR/<part_id>.js` following `SCHEMA.md` and the shape of `example/example-note.js`. Never commit content files: the notes are password-locked and plain text in the public repo would leak them.

House rules (from the owner — keep all of them):
- **Concept first, direct, very easy language.** No long or indirect stories. A student must get the idea in the first two lines of each step.
- Start the note with **"Main points of this part"** (`points:[[term, one-line meaning]…]`): the whole part in 4–6 lines. No hook question, no cast card on top (`showCast` stays off).
- Order inside every step (the renderer does this): **concept slide first** (title = the concept's name, e.g. "Stock vs flow"; `simple` = a one-line definition with `=`; 3–4 short points; one-line analogy; NCERT exam answer) → short motion scene "See it" for **that one concept only** → words to know → flip cards → activity ("What to try" / "What you just learned") → 3 quick MCQs → one-liner. No `pred` "think first" questions.
- Sentences of ~12 words or fewer. Examples are one short line ("Flour at home = final. Flour in a bakery = intermediate."). Use generic names (a bakery, a family, a mill), not character names, in slides, captions, games and the 3D board. A cast may appear only inside a `story` block when it truly helps.
- Motion-scene captions: 3–6 words each, one idea each.
- Title words ≤ 10 letters per line in `titleHtml` (use `<br>`, e.g. `MACRO-<br><span>ECONOMICS</span>`), so the hero title never breaks mid-word.
- Explanations go in flip cards; only definitions and main points are open.
- A 3D board with 2–3 modes that model the concept (flow / stack / bars).
- **Engagement is compulsory (owner, 2 Nov 2026).** Every step needs a real game, not a plain button list: use `dragsort` (drag-and-drop with streaks and stars) instead of `sort`, and add a second game in `extra` where it fits. Every part needs at least one hands-on simulation (`graph` with sliders, `calc` that draws bars, `tank`, `counttap`) and a `speed` round (10 MCQs, 60 s) at the top of `summary.blocks`. Do not use the plain `sort` or `scenario` widgets as a step's main activity.
- Numericals: full working step by step, the CBSE way.
- Exam corner: 1, 3, 4 and 6-mark questions in CBSE style with marking points, plus assertion–reason / case-based MCQs.
- No teacher name, no coaching name or logo anywhere in the note.
- Colourful and different every time: use only `$$` colour tokens (palette comes from the roadmap), draw fresh hero and concept-slide SVGs for each part.

Before publishing, set this part's `emojis` in roadmap.json to 3 emojis that fit ITS topic (not the chapter default), so every episode thumbnail looks different.

## 4. Publish (one command)
```
cd <repo>/_factory/tools
NF_PASS="<class password>" python3 publish.py <part_id> $TMPDIR/<part_id>.js
```
It builds the page, tests it at laptop and phone width (fails on any error, overflow or broken flip card), locks it with the class password, makes the episode thumbnail (and the chapter/subject thumbnails the first time), adds it to `index.html` under Economics, bumps `sw.js`, marks the roadmap and pushes to `main`. If the test fails, read the screenshots in the printed folder, fix the content, run again.

Need a local three.js for the test (the CDN is blocked in the build container)? `npm i three@0.128.0` in a scratch folder and set `THREE_LOCAL=<that>/node_modules/three/build/three.min.js`.

## 5. Report
Before approval: publish the built page as a private Artifact preview, say in 3–4 lines what is in it, and wait. After approval: run publish.py and report that it is live, plus the next part in line.

## Files
`engine/` page shell, motion engine, 3D board, renderer, lock page · `tools/` build, test, lock, thumbs, site, publish · `palettes.json` 10 colour themes · `roadmap.json` every part with status · `casts.json` casts used per chapter · `example/` sample content.
