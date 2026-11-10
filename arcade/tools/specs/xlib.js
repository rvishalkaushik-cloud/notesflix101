/* helper: compact authoring of extra spec content.
   s: [['Category','item|item|item']], p: ['term=>meaning'], q: [['Name','step>step>step']], c: [[prompt, answer, unit, why]] */
module.exports = function build(o) {
  const out = {};
  for (const id of Object.keys(o)) {
    const x = o[id], r = {};
    if (x.s) r.sort = x.s.map(([c, i]) => [c, i.split('|').map(t => t.trim()).filter(Boolean)]);
    if (x.p) r.pair = x.p.map(t => { const i = t.indexOf('=>'); return [t.slice(0, i).trim(), t.slice(i + 2).trim()]; });
    if (x.q) r.seq = x.q.map(([n, st]) => [n, st.split('>').map(t => t.trim()).filter(Boolean)]);
    if (x.c) r.calc = x.c;
    out[id] = r;
  }
  return out;
};
