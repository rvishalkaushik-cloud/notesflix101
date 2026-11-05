# Note content schema (`module.exports = {...}`)

A note is one JS file exporting one object. `tools/build.py` turns it into a page. See `example/example-note.js` for a real, working sample.

**Colour tokens.** Write `$$P` (primary), `$$A` (accent), `$$S` (secondary), `$$H` (dark heading ink), `$$H2`, `$$C` (coral/alert), `$$BG`, `$$BG2`, `$$L` (line), `$$T` (light tint), `$$TI` anywhere: in SVG, in motion specs and in cast colours. They are swapped for the part's palette, so every part comes out in different colours. Never hard-code a theme colour; white `#fff` and neutral greys are fine.

```js
{
 meta:{ title, titleHtml /* hero h1, may use <span> for the coloured word */, kicker, lead /* HTML */ },
 hook:[question, answerHTML],              // opening "think first" before the journey map
 cast:[{key,name,role, hair:'short'|'long'|'bun'|'bald', skin, hairColor, shirt, bg, glasses, beard, bindi, cap}],  // drawn avatars; new names every chapter
 hero:'<svg viewBox="0 0 640 380">…</svg>', // big illustrated, animated hero picture (SVG <animate>/<animateMotion> welcome)
 glossary:{term:definition},               // every term in steps[].words must be here; first use in the text becomes tappable
 mspec:{ id:{ aria, sky:[top,bottom], ground, objs:[…], steps:[{t:ms, c:caption, big:1, do:[actions]}] } },
 steps:[ step… ],                          // 4–6 steps, ONE concept each
 board:{ after:stepIndex, title, try, modes:[mode…] },   // 3D board, shown after that step
 summary:{ blocks:[block…], line },
 exam:{ qs:[{m:1|3|4|6, q, tag?, ans?, pts:[marking points]}], mcq:[mcq…] },
 next:'Part 2 · …'
}
```

## step
```js
{ id:'s1', e:'🔭', t:'Step title', nav:'short nav label',
  pred:[question, answerHTML],
  motion:['Scene title', 'mspecId'],
  ks:{ title, art:'<svg viewBox="0 0 300 200">…</svg>', simple:'1–2 plain sentences', pts:[[emoji, html]…3-4], an:'student-life analogy', ex:'NCERT-style exam answer' },
  words:['term', …],
  flips:{ h:'heading', items:[[emoji, title, back text, example, colour?]…4-6] },
  act:{ type:<widget>, id:'unique', h:'🎮 heading', try:'What to try', learn:'What you just learned', …widget fields },
  before:[block…], extra:[block…],          // optional blocks before / after the activity
  quiz:[mcq…3], line:'one-line summary HTML' }
```
`mcq` = `[question, [correct, wrong, wrong, wrong], explanation, tagOptional]` (the first option is always the correct one; it is shuffled on screen).

## widgets (`act.type`, or any block with `type`)
| type | fields |
|---|---|
| `sort` | `buckets:[a,b,(c)]`, `items:[[text, bucketIndex, why]…]` |
| `scenario` | `who:castKey`, `items:[[prompt, [best, other, other], why, castKey?]…]`, `endText` |
| `tree` | `levels:[[{t, c:'var(--orange)', info}…]…]` (tap every box) |
| `order` | `items:[correct order…]`, `why` (student taps in sequence) |
| `calc` | `inputs:[{id,label,val,type:'number'|'select',opts:[[v,label]],min,max,step}]`, `fn:"JS body: v.<id>, fmt(n); return HTML"` |
| `graph` | `h, xr:[min,max], yr:[min,max], xl, yl, params:[{id,label,min,max,step,val}], curves:[{f:'expr in x and p.<id>', c, label, dash}], points:[{x:'expr', y:'expr (x available)', label}], note:'JS body using p, fmt → return HTML'` (Math functions available) |
| `flipgame` | `items:[[clue, answer]…]`, `ask` |
| `dragsort` | **game** · `bins:[{t,e}]` (2–3), `items:[[text, binIndex, why, emoji]…]` 6–8 cards: drag (or tap) into boxes, streak, stars, confetti |
| `counttap` | **challenge** · `ask, unit, chain:1, win, items:[{t,e,v,f:1 if it should be counted}]`, optional `okMsg, overMsg, missMsg` (feedback text; default wording is about final goods / double counting): tap what to count, live meter, checks double counting |
| `tank` | **simulation** · `s0, fin, fout`: water tank sliders (stock vs flow) |
| `speed` | **timed round** · `secs:60, items:[mcq…10]` 3 lives, timer, trophy |
| `b3jump` | `go:[[modeId, button label, 'teal'|'alt']]` (opens the 3D board in a mode) |

## blocks (summary.blocks, before, extra)
`{type:'cmp', h, heads:[…3], rows:[[…]…]}` · `{type:'formula', h, lines:[…], note}` · `{type:'timeline', h, items:[[year, title, detail]…]}` · `{type:'story', h, lines:[[castKey, html]…]}` · `{type:'flips', h, items}` · `{type:'html', html}` · any widget.

## motion scene (`mspec`)
Canvas is 800 × `h` (default 400); ground band at the bottom 70px.
- objects `k`: `box` (w,h,c,e emoji,t label,tc text colour,rx,sc,sw), `emoji` (t, fs), `text` (t, fs, c), `circ` (rr, c, e), `face` (img = cast key, rr, t), `bubble` (t, w, h), `bar` (w, h, c, t), `line` (dx, dy, c), `path` (d, c, sc, sw). Common: `id, x, y, s, o (opacity), r`.
- actions in `do`: `{id, to:{x,y,s,o,r}, ms}` move/fade · `{fly:{from,to,e,n,gap,arc,ms}}` emojis flying · `{count:{id,from,to,pre,suf,ms}}` number counter on a text/box label · `{id, fill:0-100}` bar fill · `{id, text}` change label · `{pulse:id}` · `{shake:id}` · `{sky:[a,b]}`.
- Captions: short, one idea each, `<b>` for the key word. Last step is the takeaway (`big:1`). ~4–6 steps, 10–14 s total. Show ONLY that step's concept.

## 3D board modes
- `kit:'flow'` — `nodes:[{id,label,emoji,x,z,shape:'house'|'factory'|'bank'|'govt'|'shop'|'globe'|'tower'|'box',color,info}]` (x,z within ±20), `edges:[{from,to,color,label,group,side}]` (tokens move along them), `groups:[{id,label,say:[whenOn,whenOff]}]`, `note`. Great for circular flow, money creation, trade, budget flows.
- `kit:'bars'` — `series:[{name,color}]`, `cats:[{label, values:[…], info}]`, `unit`. Use real figures only with a source in `info`; otherwise label "made-up numbers".
- `kit:'stack'` — `layers:[{label,h,color,info}]` bottom→top, `steps:[{label, show:[layerIdx…], note}]`. Great for GDP→NNP conversions, capital stock, deficits.
Every mode: `id, label (with emoji), tag, title, intro`.
