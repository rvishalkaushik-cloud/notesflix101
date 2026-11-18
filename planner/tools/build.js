// Build planner/data.json from index.html CHAPTERS, ARENA and the PYQ banks. node planner/tools/build.js
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..", "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const start = html.indexOf("const CHAPTERS = ["); const arr0 = html.indexOf("[", start);
let depth = 0, i = arr0; for (; i < html.length; i++) { const c = html[i]; if (c === "[") depth++; else if (c === "]") { depth--; if (!depth) break; } }
const CH = vm.runInNewContext("(" + html.slice(arr0, i + 1) + ")");
const arena = vm.runInNewContext("(" + html.match(/var ARENA = (\{[^}]*\})/)[1] + ")");
const PYQ = { "XII|Business Studies":"xii-bst","XII|Accountancy":"xii-acc","XII|Economics":"xii-eco","XII|Entrepreneurship":"xii-ent","XII|Chemistry":"xii-chem","XII|Legal Studies":"xii-legal","X|Science":"x-sci","X|Social Science (SST)":"x-sst" };
const WR = { "XII|Business Studies":"xii-bst","XII|Accountancy":"xii-acc","XII|Economics":"xii-eco","XII|Entrepreneurship":"xii-ent","XII|Chemistry":"xii-chem","XII|Legal Studies":"xii-legal","XI|Business Studies":"xi-bst","XI|Economics":"xi-eco","XI|Physics":"xi-phy","XI|Legal Studies":"xi-legal","X|Science":"x-sci","X|Social Science (SST)":"x-sst","IX|Science":"ix-sci","IX|Social Science (SST)":"ix-sst","IX|English (Kaveri)":"ix-eng","IX|Hindi (Ganga)":"ix-hin" };
const weight = {};
for (const k in PYQ) {
  const f = path.join(root, "pyq/data", PYQ[k] + ".json"); if (!fs.existsSync(f)) continue;
  const d = JSON.parse(fs.readFileSync(f, "utf8")); const tot = d.papers.length || 1; const w = {};
  d.qs.forEach(q => { w[q.ch] = (w[q.ch] || 0) + (q.marks || 0) * q.seen.length; });
  for (const c in w) weight[c] = +(w[c] / tot).toFixed(1);
}
const out = {};
CH.forEach(c => {
  if (!c.cls || !c.subject || !c.episodes || !c.episodes.length) return;
  const cl = out[c.cls] = out[c.cls] || {}; const s = cl[c.subject] = cl[c.subject] || { pyq: PYQ[c.cls + "|" + c.subject] || null, write: WR[c.cls + "|" + c.subject] || null, chapters: [] };
  s.chapters.push({ id: c.id, num: c.num, title: c.title, w: weight[c.id] || 0, arena: !!arena[c.id],
    parts: c.episodes.map(e => ({ id: e.id, t: e.title.replace(/^Part \d+\s*[—-]\s*/, ""), m: e.mins || 30, url: e.url })) });
});
for (const cl in out) for (const s in out[cl]) out[cl][s].chapters.sort((a, b) => (parseFloat(a.num) || 0) - (parseFloat(b.num) || 0));
fs.writeFileSync(path.join(root, "planner/data.json"), JSON.stringify(out));
for (const cl in out) console.log(cl, Object.keys(out[cl]).map(s => s + " (" + out[cl][s].chapters.length + ")").join(", "));
