// SEO + AI (GEO) builder.  node _factory/tools/seo.js   (run from the repo root, after marathon.js)
// Writes, from the CHAPTERS data in index.html:
//   learn/<slug>.html   one static, crawlable page per class + subject (chapters, parts, FAQ, JSON-LD)
//   learn/index.html    all subjects
//   llms.txt            short guide for AI assistants;  llms-full.txt  every chapter and part in Markdown
//   sitemap.xml         home, marathons, learn pages and every free (unlocked) note
// and adds description, canonical and LearningResource JSON-LD to every free note (between <!--nf-seo--> markers).
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = process.cwd(), SITE = 'https://notesflix101.com/';
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const CH = vm.runInNewContext('(' + html.match(/const CHAPTERS = (\[[\s\S]*?\n\]);/)[1] + ')', {});
const CONFIG = vm.runInNewContext('(' + html.match(/const CONFIG = (\{[\s\S]*?\n\});/)[1] + ')', {});
const MAR = (() => { try { return JSON.parse(fs.readFileSync(path.join(ROOT, 'marathon', 'index.json'), 'utf8')).subjects; } catch (e) { return []; } })();
const TODAY = new Date().toISOString().slice(0, 10);
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const md = s => String(s == null ? '' : s).replace(/\s+/g, ' ').trim();
const CLASSNAME = { IX: 'Class 9', X: 'Class 10', XI: 'Class 11', XII: 'Class 12' };
const SHORT = { 'Social Science (SST)': 'sst', 'Business Studies': 'bst', 'Accountancy': 'acc', 'Economics': 'eco', 'Entrepreneurship': 'ent', 'Science': 'science', 'English (Kaveri)': 'english', 'Hindi (Ganga)': 'hindi' };
const slugOf = (cls, sub) => cls.toLowerCase() + '-' + (SHORT[sub] || sub.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
// textbook names only where they are confirmed (new NCERT books for Class 9, 2026-27)
const BOOK = { 'IX|Science': 'the new NCERT textbook Exploration (2026-27)', 'IX|Social Science (SST)': 'the new NCERT textbook Understanding Society: India and Beyond (2026-27)',
  'IX|English (Kaveri)': 'the new NCERT English textbook Kaveri (2026-27)', 'IX|Hindi (Ganga)': 'the new NCERT Hindi textbook Ganga (2026-27)' };
const isLocked = f => /const P=\{"s":/.test(fs.readFileSync(path.join(ROOT, f), 'utf8'));
const numKey = c => [(c.unit || '').includes('Part 2') ? 1 : 0, parseFloat(c.num) || 999];

// ---------- group chapters by class + subject ----------
const groups = new Map();
for (const c of CH) {
  const key = c.cls + '|' + c.subject;
  if (!groups.has(key)) groups.set(key, { cls: c.cls, subject: c.subject, slug: slugOf(c.cls, c.subject), chapters: [] });
  const eps = (c.episodes || []).filter(e => e.url && fs.existsSync(path.join(ROOT, e.url))).map(e => ({ ...e, open: !isLocked(e.url) }));
  if (eps.length) groups.get(key).chapters.push({ ...c, episodes: eps });
}
const ORDER = ['IX', 'X', 'XI', 'XII'];
const subjects = [...groups.values()].filter(g => g.chapters.length)
  .sort((a, b) => ORDER.indexOf(a.cls) - ORDER.indexOf(b.cls) || a.subject.localeCompare(b.subject));
subjects.forEach(g => {
  g.chapters.sort((a, b) => { const x = numKey(a), y = numKey(b); return x[0] - y[0] || x[1] - y[1]; });
  g.parts = g.chapters.reduce((n, c) => n + c.episodes.length, 0);
  g.free = g.chapters.reduce((n, c) => n + c.episodes.filter(e => e.open).length, 0);
  g.name = CLASSNAME[g.cls] + ' ' + g.subject;
  g.mar = MAR.find(m => m.slug === g.slug) || null;
  g.book = BOOK[g.cls + '|' + g.subject] || ('the CBSE syllabus and NCERT textbook for ' + CLASSNAME[g.cls]);
});
const wa = 'https://wa.me/' + CONFIG.whatsapp;

// ---------- shared page shell ----------
const CSS = `:root{--bg:#0b0b0f;--panel:#14141b;--line:rgba(255,255,255,.1);--ink:#f5f5f7;--dim:#b4b4c2;--red:#e50914;--green:#22c55e}
*{box-sizing:border-box}html,body{margin:0;background:var(--bg);color:var(--ink);font:500 16px/1.6 Inter,system-ui,-apple-system,"Segoe UI",Roboto,"Noto Sans Devanagari",sans-serif}
a{color:#ff6b72}header{border-bottom:1px solid var(--line);background:#0b0b0f}header .in,main,footer .in{max-width:960px;margin:0 auto;padding:14px 16px}
.logo{font:800 22px/1 inherit;color:var(--red);text-decoration:none}.logo span{color:#fff}
nav.bc{font-size:13px;color:var(--dim);margin:6px 0 0}nav.bc a{color:var(--dim)}
h1{font-size:32px;line-height:1.15;margin:18px 0 10px;letter-spacing:-.02em}h2{font-size:22px;margin:30px 0 8px}h3{font-size:18px;margin:0 0 4px}
.lead{color:var(--dim);font-size:17px;max-width:720px}.stats{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0}
.stats span{border:1px solid var(--line);background:var(--panel);border-radius:999px;padding:5px 12px;font-size:13px;font-weight:700}
.cta{display:flex;gap:10px;flex-wrap:wrap;margin:16px 0 8px}.btn{display:inline-block;background:var(--red);color:#fff;text-decoration:none;font-weight:800;border-radius:10px;padding:11px 16px}
.btn.g{background:transparent;border:1px solid var(--line)}
.ch{display:grid;grid-template-columns:200px 1fr;gap:16px;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:14px;margin:12px 0}
.ch img{width:100%;border-radius:10px;aspect-ratio:900/330;object-fit:cover;background:#000}.ch p{margin:0 0 8px;color:var(--dim)}
.ch ul{margin:0;padding-left:18px}.ch li{margin:4px 0}.tag{font-size:11px;font-weight:800;letter-spacing:.08em;border-radius:5px;padding:2px 6px;margin-left:6px;vertical-align:middle}
.free{background:rgba(34,197,94,.18);color:#9ff0bb}.lock{background:rgba(255,255,255,.08);color:var(--dim)}
details{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:12px 14px;margin:10px 0}summary{font-weight:800;cursor:pointer}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px}.card{display:block;text-decoration:none;color:inherit;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:14px}
.card b{display:block;font-size:17px}.card small{color:var(--dim)}footer{border-top:1px solid var(--line);margin-top:40px;color:var(--dim);font-size:14px}
@media(max-width:640px){.ch{grid-template-columns:1fr}h1{font-size:26px}}`;
function page({ title, desc, canon, image, jsonld, body, crumbs }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">
<link rel="canonical" href="${canon}">
<meta property="og:type" content="website"><meta property="og:site_name" content="Notesflix 101"><meta property="og:url" content="${canon}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:image" content="${image}"><meta property="og:locale" content="en_IN">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(title)}"><meta name="twitter:description" content="${esc(desc)}"><meta name="twitter:image" content="${image}">
<link rel="icon" href="../img/icon-192.png"><link rel="alternate" type="text/plain" title="LLM guide" href="${SITE}llms.txt">
<meta name="theme-color" content="#0b0b0f">
<script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, '\\u003c')}</script>
<style>${CSS}</style>
</head>
<body>
<header><div class="in"><a class="logo" href="../index.html">NOTESFLIX <span>101</span></a>
<nav class="bc" aria-label="Breadcrumb">${crumbs.map(c => c.url ? `<a href="${c.url}">${esc(c.name)}</a>` : esc(c.name)).join(' › ')}</nav></div></header>
<main>${body}</main>
<footer><div class="in">Notesflix 101 is made by ${esc(CONFIG.teacher)}, ${esc(CONFIG.brand)}, Gurugram. Interactive CBSE notes for Classes 9 to 12. Updated ${TODAY}.
 · <a href="../index.html">Home</a> · <a href="index.html">All subjects</a> · <a href="../marathon.html">Practice marathons</a> · <a href="${wa}">WhatsApp</a></div></footer>
</body>
</html>
`;
}
const abs = u => SITE + u.replace(/^\.?\//, '');

// ---------- one page per subject ----------
fs.mkdirSync(path.join(ROOT, 'learn'), { recursive: true });
for (const g of subjects) {
  const canon = SITE + 'learn/' + g.slug + '.html';
  const img = abs(g.chapters.find(c => c.thumb)?.thumb || 'img/subj-bst.jpg');
  const freeLine = g.free ? `${g.free} of ${g.parts} parts are free to read with no password${g.cls === 'IX' ? ' (Part 1 of every chapter)' : ''}. The other parts open with a password from ${CONFIG.teacher}.` :
    `All ${g.parts} parts open with a password from ${CONFIG.teacher}.`;
  const desc = `${g.name} notes for CBSE, following ${g.book.replace(/^the /, '')}: ${g.chapters.length} chapters in ${g.parts} interactive parts with quizzes, exam questions and a practice marathon.`.slice(0, 300);
  const faqs = [
    [`Are the ${g.name} notes free?`, freeLine],
    [`Which syllabus do these ${g.name} notes follow?`, `They follow ${g.book}. Every chapter is split into short interactive parts with simple explanations, flash cards, quizzes and board-style exam questions with model answers.`],
    [`How many chapters are covered?`, `${g.chapters.length} chapters: ${g.chapters.map(c => md(c.title)).join('; ')}.`],
  ];
  if (g.mar) faqs.push([`Is there a practice test for ${g.name}?`, `Yes. The ${g.name} Practice Marathon has ${g.mar.total} multiple-choice questions taken from the notes: a weekly marathon (30 questions, 20 minutes, the same set for everyone that week), a 10-question sprint, a 100-question mega marathon and chapter practice. A free sample is open to all; the full bank opens with the subject password.`]);
  faqs.push([`How do I get the password for locked notes?`, `Message ${CONFIG.teacher} of ${CONFIG.brand} on WhatsApp from the Notesflix 101 website. The same password opens every locked ${g.subject} note.`]);
  const course = {
    '@type': 'Course', '@id': canon + '#course', name: g.name + ' notes', description: desc, url: canon, inLanguage: g.subject.startsWith('Hindi') ? 'hi-IN' : 'en-IN',
    educationalLevel: CLASSNAME[g.cls] + ' (CBSE)', provider: { '@id': SITE + '#org' }, isAccessibleForFree: g.free > 0,
    hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT' + g.chapters.reduce((n, c) => n + c.episodes.reduce((m, e) => m + (e.mins || 30), 0), 0) + 'M' },
    syllabusSections: g.chapters.map(c => ({ '@type': 'Syllabus', name: md(c.title), description: md(c.tagline || '') })),
    offers: { '@type': 'Offer', category: g.free ? 'Partially free' : 'Paid', price: 0, priceCurrency: 'INR' }
  };
  const list = { '@type': 'ItemList', name: g.name + ' chapters', itemListElement: g.chapters.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: md(c.title),
    url: canon + '#' + c.id })) };
  const jsonld = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'EducationalOrganization', '@id': SITE + '#org', name: CONFIG.brand, url: SITE, founder: { '@type': 'Person', name: CONFIG.teacher } },
    course, list,
    { '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Notesflix 101', item: SITE }, { '@type': 'ListItem', position: 2, name: 'All subjects', item: SITE + 'learn/' },
      { '@type': 'ListItem', position: 3, name: g.name, item: canon }] }] };
  let body = `<h1>${esc(g.name)} Notes</h1>
<p class="lead">Interactive CBSE ${esc(g.name)} notes by ${esc(CONFIG.teacher)}, ${esc(CONFIG.brand)}. They follow ${esc(g.book)}. Each chapter is broken into short parts with easy explanations, picture stories, flash cards, quizzes and board-style exam questions with model answers. ${esc(freeLine)}</p>
<div class="stats"><span>${g.chapters.length} chapters</span><span>${g.parts} parts</span><span>${g.free} free parts</span>${g.mar ? `<span>${g.mar.total} practice questions</span>` : ''}</div>
<div class="cta"><a class="btn" href="../index.html">Open the notes</a>${g.mar ? `<a class="btn g" href="../marathon.html?s=${g.slug}">Practice marathon</a>` : ''}<a class="btn g" href="${wa}">Get the password on WhatsApp</a></div>
<h2>Chapters</h2>\n`;
  for (const c of g.chapters) {
    const label = (c.unit ? c.unit.replace(/\s*·\s*Chapter$/, '').replace(/^Unit$/, 'Unit') + ' ' : 'Chapter ') + (c.num || '');
    body += `<section class="ch" id="${esc(c.id)}">${c.thumb ? `<img src="../${esc(c.thumb)}" alt="${esc(g.name + ': ' + c.title)}" loading="lazy" width="900" height="330">` : '<div></div>'}<div>
<h3>${esc(label.trim())}: ${esc(c.title)}</h3><p>${esc(c.tagline || '')}</p><ul>
${c.episodes.map((e, i) => `<li>${e.open ? `<a href="../${esc(e.url)}">${esc(e.title)}</a><span class="tag free">FREE</span>` : `${esc(e.title)}<span class="tag lock">PASSWORD</span>`} ${e.desc ? '— ' + esc(e.desc) : ''}${e.mins ? ` <small>(${e.mins} min)</small>` : ''}</li>`).join('\n')}
</ul></div></section>\n`;
  }
  body += `<h2>Frequently asked questions</h2>\n` + faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n');
  body += `\n<h2>More subjects</h2><div class="grid">` + subjects.filter(x => x !== g && (x.cls === g.cls)).map(x => `<a class="card" href="${x.slug}.html"><b>${esc(x.name)}</b><small>${x.chapters.length} chapters · ${x.parts} parts</small></a>`).join('') + `<a class="card" href="index.html"><b>All subjects</b><small>Classes 9 to 12</small></a></div>`;
  const title = `${g.name} Notes ${g.cls === 'IX' ? '2026-27 (New NCERT) ' : ''}| Free Interactive CBSE Notes | Notesflix 101`;
  fs.writeFileSync(path.join(ROOT, 'learn', g.slug + '.html'), page({ title, desc, canon, image: img, jsonld, body,
    crumbs: [{ name: 'Notesflix 101', url: '../index.html' }, { name: 'All subjects', url: 'index.html' }, { name: g.name }] }));
}

// ---------- all subjects ----------
{
  const canon = SITE + 'learn/';
  const desc = `Free interactive CBSE notes for Classes 9 to 12 by ${CONFIG.teacher}, ${CONFIG.brand}: ${subjects.map(g => g.name).join(', ')}.`;
  let body = `<h1>All subjects: CBSE notes for Classes 9 to 12</h1><p class="lead">${esc(desc)} Every subject has short interactive parts, quizzes, board-style exam questions and a practice marathon.</p>`;
  for (const cls of ORDER) {
    const gs = subjects.filter(g => g.cls === cls); if (!gs.length) continue;
    body += `<h2>${CLASSNAME[cls]}</h2><div class="grid">` + gs.map(g => `<a class="card" href="${g.slug}.html"><b>${esc(g.name)}</b><small>${g.chapters.length} chapters · ${g.parts} parts · ${g.free} free${g.mar ? ` · ${g.mar.total} practice questions` : ''}</small></a>`).join('') + `</div>`;
  }
  const jsonld = { '@context': 'https://schema.org', '@graph': [{ '@type': 'CollectionPage', name: 'All subjects', url: canon, description: desc,
    mainEntity: { '@type': 'ItemList', itemListElement: subjects.map((g, i) => ({ '@type': 'ListItem', position: i + 1, name: g.name + ' notes', url: SITE + 'learn/' + g.slug + '.html' })) } }] };
  fs.writeFileSync(path.join(ROOT, 'learn', 'index.html'), page({ title: 'CBSE Notes for Classes 9 to 12: All Subjects | Notesflix 101', desc, canon, image: SITE + 'img/subj-bst.jpg', jsonld, body,
    crumbs: [{ name: 'Notesflix 101', url: '../index.html' }, { name: 'All subjects' }] }));
}

// ---------- llms.txt / llms-full.txt ----------
{
  let s = `# Notesflix 101\n\n> Interactive CBSE notes for Classes 9 to 12 by ${CONFIG.teacher} of ${CONFIG.brand}, Gurugram, India. Each chapter is split into short parts with simple explanations, flash cards, quizzes and board-style exam questions with model answers. Many parts are free to read (in Class 9, Part 1 of every chapter); the rest open with a subject password from ${CONFIG.teacher}. Every subject also has a Practice Marathon of multiple-choice questions taken from the notes.\n\n`;
  s += `Key facts:\n- Board: CBSE (India). Classes: 9, 10, 11, 12.\n- Class 9 notes follow the new NCERT books for 2026-27 (Exploration, Understanding Society: India and Beyond, Kaveri, Ganga).\n- Access: free parts open directly; locked parts need the subject password, available from ${CONFIG.teacher} on WhatsApp (${wa}).\n- Practice: weekly marathon (30 questions, 20 minutes, same set for everyone that week), 10-question sprint, 100-question mega marathon and chapter practice.\n\n`;
  s += `## Subjects\n\n` + subjects.map(g => `- [${g.name} notes](${SITE}learn/${g.slug}.html): ${g.chapters.length} chapters, ${g.parts} parts, ${g.free} free${g.mar ? `, ${g.mar.total} practice questions` : ''}`).join('\n') + '\n\n';
  s += `## Practice\n\n- [Practice marathons for every subject](${SITE}marathon.html)\n\n## Optional\n\n- [Full list of chapters and parts](${SITE}llms-full.txt)\n- [All subjects page](${SITE}learn/)\n`;
  fs.writeFileSync(path.join(ROOT, 'llms.txt'), s);
  let f = `# Notesflix 101: every chapter and part\n\n> Interactive CBSE notes for Classes 9 to 12 by ${CONFIG.teacher}, ${CONFIG.brand}. Updated ${TODAY}. Parts marked (free) open without a password.\n\n`;
  for (const g of subjects) {
    f += `## ${g.name}\n\nPage: ${SITE}learn/${g.slug}.html\nSyllabus: ${g.book}\n${g.mar ? `Practice marathon: ${SITE}marathon.html?s=${g.slug} (${g.mar.total} questions)\n` : ''}\n`;
    for (const c of g.chapters) {
      f += `### ${md(c.title)}\n\n${md(c.tagline || '')}\n\n` + c.episodes.map(e => `- ${md(e.title)}${e.open ? ` (free): ${SITE}${e.url}` : ' (password)'}${e.desc ? ' — ' + md(e.desc) : ''}`).join('\n') + '\n\n';
    }
  }
  fs.writeFileSync(path.join(ROOT, 'llms-full.txt'), f);
}

// ---------- SEO block in every free note ----------
let tagged = 0;
for (const g of subjects) for (const c of g.chapters) for (const e of c.episodes) {
  if (!e.open) continue;
  const f = path.join(ROOT, e.url); let h = fs.readFileSync(f, 'utf8');
  h = h.replace(/<!--nf-seo-->[\s\S]*?<!--\/nf-seo-->\n?/, '');
  const url = SITE + e.url, d = md(`${g.name} · ${c.title}: ${e.desc || e.title}`).slice(0, 300);
  const hasDesc = /<meta\s+name="description"/i.test(h), hasCanon = /<link\s+rel="canonical"/i.test(h);
  const ld = { '@context': 'https://schema.org', '@type': 'LearningResource', name: md(c.title) + ' — ' + md(e.title), description: d, url, inLanguage: g.subject.startsWith('Hindi') ? 'hi-IN' : 'en-IN',
    educationalLevel: CLASSNAME[g.cls] + ' (CBSE)', learningResourceType: 'Interactive notes', isAccessibleForFree: true, timeRequired: 'PT' + (e.mins || 30) + 'M',
    about: md(c.title), isPartOf: { '@type': 'Course', name: g.name + ' notes', url: SITE + 'learn/' + g.slug + '.html' }, provider: { '@type': 'EducationalOrganization', name: CONFIG.brand, url: SITE } };
  const block = `<!--nf-seo-->${hasDesc ? '' : `<meta name="description" content="${esc(d)}">`}${hasCanon ? '' : `<link rel="canonical" href="${url}">`}<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script><!--/nf-seo-->\n`;
  const at = h.search(/<\/head>/i); if (at < 0) continue;
  h = h.slice(0, at) + block + h.slice(at); fs.writeFileSync(f, h); tagged++;
}

// ---------- sitemap ----------
{
  const urls = [[SITE, '1.0', 'weekly'], [SITE + 'learn/', '0.9', 'weekly'], [SITE + 'marathon.html', '0.8', 'weekly']]
    .concat(subjects.map(g => [SITE + 'learn/' + g.slug + '.html', '0.9', 'weekly']))
    .concat(subjects.flatMap(g => g.chapters.flatMap(c => c.episodes.filter(e => e.open).map(e => [SITE + e.url, '0.7', 'monthly']))));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(([u, p, f]) => `  <url><loc>${u}</loc><lastmod>${TODAY}</lastmod><changefreq>${f}</changefreq><priority>${p}</priority></url>`).join('\n') + `\n</urlset>\n`;
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
  console.log('subjects', subjects.length, 'free notes tagged', tagged, 'sitemap urls', urls.length);
}

// ---------- plain-HTML subject list + FAQ on the home page (between <!--nf-subjects--> markers) ----------
{
  const p = path.join(ROOT, 'index.html'); let h = fs.readFileSync(p, 'utf8');
  const totalQ = MAR.reduce((n, m) => n + m.total, 0);
  const faqs = [
    ['What is Notesflix 101?', `Notesflix 101 is a website of interactive CBSE notes for Classes 9 to 12, made by ${CONFIG.teacher} of ${CONFIG.brand}, Gurugram. Each chapter is split into short parts with simple explanations, picture stories, flash cards, quizzes and board-style exam questions with model answers.`],
    ['Which classes and subjects are covered?', ORDER.map(cls => { const gs = subjects.filter(g => g.cls === cls); return gs.length ? `${CLASSNAME[cls]}: ${gs.map(g => g.subject).join(', ')}` : ''; }).filter(Boolean).join('. ') + '.'],
    ['Are the notes free?', `Many parts are free and open without a password; in Class 9, Part 1 of every chapter is free. Each subject page shows exactly which parts are free. The other parts open with a subject password from ${CONFIG.teacher}, available on WhatsApp.`],
    ['Do the notes follow the latest syllabus?', 'Yes. Class 9 notes follow the new NCERT books for 2026-27: Exploration (Science), Understanding Society: India and Beyond (Social Science), Kaveri (English) and Ganga (Hindi). Classes 10, 11 and 12 follow the CBSE syllabus and NCERT textbooks.'],
    ['What is a practice marathon?', `Every subject has a Practice Marathon of multiple-choice questions taken from the notes (${totalQ.toLocaleString('en-IN')} questions in all): a weekly marathon of 30 questions in 20 minutes with the same set for everyone that week, a 10-question sprint, a 100-question mega marathon and chapter practice. Results show chapter-wise accuracy and the questions you missed.`]
  ];
  let block = `<section class="nf-hub" id="subjects" aria-label="All subjects"><h2>Browse notes by subject</h2>`;
  for (const cls of ORDER) {
    const gs = subjects.filter(g => g.cls === cls); if (!gs.length) continue;
    block += `<div class="g">` + gs.map(g => `<a href="learn/${g.slug}.html"><b>${esc(g.name)}</b><small>${g.chapters.length} chapters · ${g.parts} parts · ${g.free} free</small></a>`).join('') + `</div>`;
  }
  block += `<h2>Frequently asked questions</h2>` + faqs.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('') +
    `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }).replace(/</g, '\\u003c')}</script></section>`;
  h = h.replace(/<!--nf-subjects-->[\s\S]*?<!--\/nf-subjects-->/, '<!--nf-subjects-->' + block + '<!--/nf-subjects-->');
  fs.writeFileSync(p, h);
  console.log('home subject list and FAQ updated');
}
