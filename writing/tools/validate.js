// Validate Answer Writing Lab data: node writing/tools/validate.js [slug ...]
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..", "..");
const idx = fs.readFileSync(path.join(root, "index.html"), "utf8");
const chIds = new Set([...idx.matchAll(/\{\s*id:"([^"]+)",\s*cls:"/g)].map(m => m[1]));
let slugs = process.argv.slice(2);
if (!slugs.length) slugs = fs.readdirSync(path.join(root, "writing/data")).filter(f => f.endsWith(".js")).map(f => f.replace(/\.js$/, ""));
let bad = 0;
for (const slug of slugs) {
  let d = null; const errs = [], warn = [];
  vm.runInNewContext(fs.readFileSync(path.join(root, "writing/data", slug + ".js"), "utf8"), { NFWrite: { register: x => d = x } });
  if (!d) { console.log("✗", slug, "no register()"); bad++; continue; }
  if (d.slug !== slug) errs.push("slug mismatch");
  ["cls", "subject", "intro"].forEach(k => { if (!d[k]) errs.push("missing " + k); });
  if (!Array.isArray(d.rules) || d.rules.length < 4) errs.push("need ≥4 rules");
  const ids = new Set(), marks = {};
  (d.questions || []).forEach((q, i) => {
    const w = "q" + (i + 1) + " " + (q.id || "") + ": ";
    if (!q.id || ids.has(q.id)) errs.push(w + "bad/duplicate id"); ids.add(q.id);
    ["ch", "chTitle", "marks", "cmd", "q", "ask"].forEach(k => { if (q[k] == null || q[k] === "") errs.push(w + "missing " + k); });
    if (q.ch && !chIds.has(q.ch)) errs.push(w + "unknown chapter " + q.ch);
    marks[q.marks] = (marks[q.marks] || 0) + 1;
    const sum = (q.points || []).reduce((s, p) => s + p.m, 0);
    if (sum !== q.marks) errs.push(w + "points sum " + sum + " ≠ " + q.marks);
    (q.points || []).forEach((p, j) => { if (!p.p || !p.k || !p.k.length) errs.push(w + "point " + (j + 1) + " needs p and k"); });
    const a = q.answers || {};
    ["weak", "good", "full"].forEach(k => { if (!a[k] || !a[k].text || !(a[k].notes || []).length) errs.push(w + k + " needs text and notes"); });
    if (a.full && a.full.score !== q.marks) errs.push(w + "full score must equal marks");
    if (a.weak && a.good && a.full && !(a.weak.score < a.good.score && a.good.score < a.full.score)) errs.push(w + "scores must rise weak<good<full");
    if (a.full && !/class="mp"/.test(a.full.text)) warn.push(w + "full answer has no mark highlights");
    if (!(q.mistakes || []).length) warn.push(w + "no mistakes listed");
  });
  if ((d.questions || []).length < 6) errs.push("need ≥6 questions");
  const ok = !errs.length;
  if (!ok) bad++;
  console.log((ok ? "✓ " : "✗ ") + slug + "  " + (d.questions || []).length + " questions · marks " + JSON.stringify(marks));
  errs.forEach(e => console.log("   ERR " + e)); warn.forEach(e => console.log("   warn " + e));
}
process.exit(bad ? 1 : 0);
