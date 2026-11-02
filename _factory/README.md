# Notesflix notes factory — daily playbook

This folder builds the interactive notes and publishes them on notesflix101.com. GitHub Pages does not serve folders that start with `_`, so nothing here appears on the site.

**One run = one new part, published.** Do it end to end without asking the owner for permission (he has said so). Only stop and report if something genuinely blocks you (password missing, push rejected, tests failing after three fixes).

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
- Easy enough for an average student, picture-led, short sentences. Explanations hidden in flip cards; only the most important definitions open on the key slide. No walls of prose.
- Order inside every step: think-first question → motion scene for **that one concept only** → key slide (simple words, 3–4 points, analogy, NCERT exam answer) → words to know → flip cards → activity with "What to try" and "What you just learned" → 3 quick MCQs → one-liner.
- Start the note with a real-life hook question (never with a video).
- Story mode: a cast of 3–4 Indian characters and businesses. **New cast and company names for every chapter**; keep the same cast across the parts of one chapter. Record the cast in `casts.json` under the chapter id.
- A 3D board with 2–3 modes that model the concept (flow / stack / bars).
- At least one real simulation per part (calc, graph with sliders, scenario, sort, order). Economics loves `graph` (curves with sliders) and `calc` (numericals with working shown).
- Numericals: show the full working step by step, the CBSE way.
- Exam corner: 1, 3, 4 and 6-mark questions in CBSE style with marking points, plus assertion–reason / case-based MCQs.
- No teacher name, no coaching name or logo anywhere in the note.
- Colourful and different every time: use only `$$` colour tokens (palette comes from the roadmap), draw fresh hero and key-slide SVGs for each part.

## 4. Publish (one command)
```
cd <repo>/_factory/tools
NF_PASS="<class password>" python3 publish.py <part_id> $TMPDIR/<part_id>.js
```
It builds the page, tests it at laptop and phone width (fails on any error, overflow or broken flip card), locks it with the class password, makes the episode thumbnail (and the chapter/subject thumbnails the first time), adds it to `index.html` under Economics, bumps `sw.js`, marks the roadmap and pushes to `main`. If the test fails, read the screenshots in the printed folder, fix the content, run again.

Need a local three.js for the test (the CDN is blocked in the build container)? `npm i three@0.128.0` in a scratch folder and set `THREE_LOCAL=<that>/node_modules/three/build/three.min.js`.

## 5. Report
Finish with a short message: part published, what is in it, the next part in line.

## Files
`engine/` page shell, motion engine, 3D board, renderer, lock page · `tools/` build, test, lock, thumbs, site, publish · `palettes.json` 10 colour themes · `roadmap.json` every part with status · `casts.json` casts used per chapter · `example/` sample content.
