/* Notesflix 101 · Revision Arena engine
   One engine for every chapter. A chapter's content lives in arena/data/<chapterId>.js and calls NFArena.register({...}).
   Page: arena/index.html?ch=<chapterId>   Modules: #quick #cases #flash #practice #find #battle
   Progress is kept in this browser only (localStorage key "nf.arena.v1"). */
(function(){
"use strict";
var D = null;            // chapter data
var ROOT = null;         // <main>
var KEY = "nf.arena.v1";
var S = {ch:{}};         // saved state
var P = null;            // this chapter's progress
var timers = [];         // intervals to clear on route change

/* ---------- utils ---------- */
function esc(s){ return String(s == null ? "" : s).replace(/[&<>"']/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }
function $(sel, el){ return (el || document).querySelector(sel); }
function $$(sel, el){ return Array.prototype.slice.call((el || document).querySelectorAll(sel)); }
function shuffle(a){ a = a.slice(); for(var i = a.length - 1; i > 0; i--){ var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function pct(a, b){ return b ? Math.round(a * 100 / b) : 0; }
function today(){ var d = new Date(); return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
function norm(s){ return String(s || "").toLowerCase().replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim(); }
function words(s){ s = String(s || "").trim(); return s ? s.split(/\s+/).length : 0; }
function fmtTime(sec){ sec = Math.max(0, Math.round(sec)); return Math.floor(sec / 60) + ":" + ("0" + (sec % 60)).slice(-2); }
function clearTimers(){ timers.forEach(clearInterval); timers = []; }
function toast(msg){
  var t = $(".toast"); if(!t){ t = document.createElement("div"); t.className = "toast"; t.setAttribute("role","status"); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("in"); clearTimeout(t._h); t._h = setTimeout(function(){ t.classList.remove("in"); }, 2200);
}
function xpPop(el, txt){
  if(!el || !el.getBoundingClientRect) return;
  var r = el.getBoundingClientRect(), x = document.createElement("div");
  x.className = "xp"; x.textContent = txt; x.style.left = (r.left + r.width / 2 - 20) + "px"; x.style.top = (r.top - 10) + "px";
  document.body.appendChild(x); setTimeout(function(){ x.remove(); }, 1000);
}
function countUp(el, to, ms){
  var t0 = performance.now(); ms = ms || 900;
  function f(t){ var k = Math.min(1, (t - t0) / ms); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if(k < 1) requestAnimationFrame(f); }
  requestAnimationFrame(f);
}
/* in-page confirm box (the browser's own confirm box is blocked in some frames and looks poor on phones) */
function ask(msg, okText, onOk){
  var old = $(".askbox"); if(old) old.remove();
  var w = document.createElement("div"); w.className = "askbox"; w.setAttribute("role","dialog"); w.setAttribute("aria-modal","true");
  w.innerHTML = '<div class="askin"><p>' + esc(msg) + '</p><div class="btns" style="justify-content:flex-end"><button class="btn" data-x="no">Cancel</button><button class="btn red" data-x="ok">' + esc(okText) + '</button></div></div>';
  document.body.appendChild(w);
  function close(){ w.remove(); document.removeEventListener("keydown", key); }
  function key(e){ if(e.key === "Escape") close(); }
  document.addEventListener("keydown", key);
  w.addEventListener("click", function(e){ var x = e.target.dataset && e.target.dataset.x; if(e.target === w || x === "no") close(); else if(x === "ok"){ close(); onOk(); } });
  $('[data-x="ok"]', w).focus();
}
function cname(id){ return (D.concepts[id] && D.concepts[id].n) || id; }

/* ---------- progress ---------- */
function load(){ try{ var r = localStorage.getItem(KEY); if(r) S = JSON.parse(r) || {ch:{}}; }catch(e){} if(!S.ch) S.ch = {}; }
function save(){ P.last = Date.now(); P.days[today()] = 1; try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} }
function initP(){
  P = S.ch[D.id] = S.ch[D.id] || {};
  ["qr","cs","qp","fd","days","wk"].forEach(function(k){ if(!P[k] || typeof P[k] !== "object") P[k] = {}; });
  if(!P.fc) P.fc = {k:{}, a:{}};
  if(!P.bt) P.bt = [];
}
/* concept stats: wk[c] = [right, wrong] */
function mark(c, ok){ if(!c) return; var w = P.wk[c] = P.wk[c] || [0,0]; w[ok ? 0 : 1]++; }
function weakList(){
  return Object.keys(P.wk).filter(function(c){ var w = P.wk[c]; return w[1] > 0 && w[1] / (w[0] + w[1]) >= 0.34; })
    .sort(function(a, b){ return (P.wk[b][1] - P.wk[b][0]) - (P.wk[a][1] - P.wk[a][0]); });
}
function strongList(){
  return Object.keys(P.wk).filter(function(c){ var w = P.wk[c]; return w[0] >= 2 && w[0] / (w[0] + w[1]) >= 0.8; })
    .sort(function(a, b){ return P.wk[b][0] - P.wk[a][0]; });
}
function findItems(){ var f = D.find, n = 0; n += f.mcq.length + f.wrong.length + f.para.length + f.explain.length; f.match.forEach(function(m){ n += m.pairs.length; }); return n; }
function modPct(){
  var qp = D.questions.length;
  var best = P.bt.reduce(function(m, b){ return Math.max(m, b.acc); }, 0);
  return {
    quick: pct(Object.keys(P.qr).filter(function(k){ return D.sections.some(function(s){ return s.id === k; }); }).length, D.sections.length),
    flash: pct(Object.keys(P.fc.k).length, D.flashcards.length),
    cases: pct(Object.keys(P.cs).length, D.cases.length),
    practice: pct(Object.keys(P.qp).length, qp),
    find: pct(Object.keys(P.fd).length, findItems()),
    battle: best
  };
}
function streak(){
  var n = 0, d = new Date();
  for(;;){ var k = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
    if(S.ch && anyDay(k)){ n++; d.setDate(d.getDate() - 1); } else break; }
  return n;
}
function anyDay(k){ return Object.keys(S.ch).some(function(id){ return S.ch[id].days && S.ch[id].days[k]; }); }

/* ---------- comic mascot (coded SVG) ---------- */
function mascot(){
  return '<svg class="mascot" viewBox="0 0 120 120" aria-hidden="true">' +
    '<circle cx="60" cy="60" r="56" fill="#2b1d66" stroke="#ffd84d" stroke-width="3"/>' +
    '<path d="M22 118c4-26 18-38 38-38s34 12 38 38z" fill="#8f6bff" stroke="#120a2c" stroke-width="3"/>' +
    '<path d="M48 82l12 14 12-14" fill="#ffd84d" stroke="#120a2c" stroke-width="3"/>' +
    '<circle cx="60" cy="52" r="24" fill="#ffcf9e" stroke="#120a2c" stroke-width="3"/>' +
    '<path d="M35 48c0-18 12-26 26-26 13 0 24 8 24 22-6-6-14-8-22-6-8-6-18-4-28 10z" fill="#3a2414" stroke="#120a2c" stroke-width="3"/>' +
    '<circle cx="51" cy="54" r="3.5" fill="#120a2c"/><circle cx="69" cy="54" r="3.5" fill="#120a2c"/>' +
    '<path d="M52 64q8 7 16 0" fill="none" stroke="#120a2c" stroke-width="3" stroke-linecap="round"/>' +
    '<circle cx="46" cy="62" r="3" fill="#ff8fa3" opacity=".7"/><circle cx="74" cy="62" r="3" fill="#ff8fa3" opacity=".7"/>' +
    '<g transform="translate(88 18) rotate(18)"><rect x="-4" y="0" width="8" height="26" rx="3" fill="#e50914" stroke="#120a2c" stroke-width="2"/><polygon points="-7,0 7,0 0,-10" fill="#ffd84d" stroke="#120a2c" stroke-width="2"/></g>' +
    '</svg>';
}

/* ---------- routing ---------- */
var MODS = [
  {k:"quick", n:"Quick Revision", e:"📖", d:"Revise the whole chapter: concept cards, mind map, tables and exam points."},
  {k:"cases", n:"Case Study Lab", e:"🧪", d:"Real business situations. Find the concept, write the answer, check it against the marking scheme.", b:"Most important"},
  {k:"flash", n:"Flashcard Challenge", e:"🃏", d:"Flip cards for definitions, features, principles and differences."},
  {k:"practice", n:"Question Practice", e:"🎯", d:"MCQ, A&R, true/false, match, fill-ups and 1 to 6 mark answers with solutions."},
  {k:"find", n:"Find the Concept", e:"🔍", d:"Read the situation, spot the concept. Five game modes against the clock."},
  {k:"battle", n:"Chapter Battle", e:"🏆", d:"A timed, random chapter test with a full performance report."}
];
function route(){
  clearTimers();
  var h = (location.hash || "#hub").slice(1);
  var fn = {hub:hub, quick:quick, cases:cases, flash:flash, practice:practice, find:find, battle:battle}[h] || hub;
  ROOT.innerHTML = "";
  ROOT.className = "wrap fade";
  void ROOT.offsetWidth;
  fn();
  window.scrollTo(0, 0);
  var crumb = $("#crumbMod"); var m = MODS.filter(function(x){ return x.k === h; })[0];
  crumb.textContent = m ? m.n : "Revision Arena";
}
function head(k, sub){
  var m = MODS.filter(function(x){ return x.k === k; })[0];
  return '<div class="mhead"><span class="big" aria-hidden="true">' + m.e + '</span><div class="grow"><h2>' + m.n + '</h2><p>' + esc(sub || m.d) + '</p></div>' +
    '<a class="btn" href="#hub">← Arena</a></div>';
}

/* ================= HUB ================= */
function hub(){
  var mp = modPct(), keys = Object.keys(mp), tot = Math.round(keys.reduce(function(s, k){ return s + mp[k]; }, 0) / keys.length);
  var wk = weakList().slice(0, 6), st = strongList().slice(0, 6), sk = streak();
  var last = P.last ? new Date(P.last).toLocaleDateString("en-IN", {day:"numeric", month:"short", year:"numeric"}) : "Not yet";
  var html = '<section class="hero">' + mascot() +
    '<div><h1>Revision Arena</h1><div class="ribbon">' + esc(D.title) + '</div>' +
    '<p>Class ' + esc(D.cls) + ' · ' + esc(D.subject) + ' · ' + esc(D.unit || "Chapter") + ' ' + esc(D.num) + '. ' + esc(D.tagline) + '</p></div>' +
    '<div class="note">Revise<br>+ Practise<br>+ Case studies<br>+ Test</div></section>' +
    '<div class="journey" aria-label="Learning path">' + ["Understand","Revise","Identify","Apply","Practise","Test","Improve"].map(function(w, i){ return '<span class="' + (i < Math.ceil(tot / 15) ? "on" : "") + '">' + w + '</span>' + (i < 6 ? "→" : ""); }).join("") + '</div>' +
    '<div class="hubgrid"><div class="mods">' +
    MODS.map(function(m){ return '<a class="mod m-' + m.k + '" href="#' + m.k + '" style="text-decoration:none">' + (m.b ? '<span class="badge">👑 ' + m.b + '</span>' : '') +
      '<span class="ico" aria-hidden="true">' + m.e + '</span><h3>' + m.n + '</h3><p>' + m.d + '</p>' +
      '<span class="mpct"><span>Progress</span><span>' + mp[m.k] + '%</span></span><span class="mbar"><i style="width:0" data-w="' + mp[m.k] + '"></i></span></a>'; }).join("") +
    '</div><aside class="side">' +
    '<div class="card"><h4>Chapter Progress</h4><div class="ringrow"><div class="ring"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="none" stroke="#2b1d66" stroke-width="12"/>' +
    '<circle id="ringArc" cx="60" cy="60" r="50" fill="none" stroke="url(#rg)" stroke-width="12" stroke-linecap="round" stroke-dasharray="314" stroke-dashoffset="314" style="transition:stroke-dashoffset 1.2s cubic-bezier(.23,1,.32,1)"/>' +
    '<defs><linearGradient id="rg"><stop offset="0" stop-color="#3ddc84"/><stop offset="1" stop-color="#3fe0ff"/></linearGradient></defs></svg><b id="ringNum">0</b><small>% done</small></div>' +
    '<ul class="plist">' + MODS.map(function(m){ return '<li><span>' + m.n.replace(" Challenge","").replace(" Practice"," Practice") + '</span><em class="' + (mp[m.k] >= 80 ? "ok" : "") + '">' + (mp[m.k] >= 80 ? "✓ " : "") + mp[m.k] + '%</em></li>'; }).join("") + '</ul></div>' +
    '<p class="muted" style="margin:10px 0 0;font-size:12.5px">Saved on this device only. Last revised: ' + esc(last) + '</p></div>' +
    '<div class="card streak"><span class="fire" aria-hidden="true">🔥</span><div><b>' + sk + ' day' + (sk === 1 ? "" : "s") + '</b><div class="muted" style="color:#ffd0e4">Revision streak. Revise every day to keep it going.</div></div></div>' +
    '<div class="card"><h4>Weak concepts</h4>' + (wk.length ? '<div class="chips">' + wk.map(function(c){ return '<a class="chip weak" href="#quick" data-sec="' + esc((D.concepts[c] || {}).s || "") + '">⚠ ' + esc(cname(c)) + '</a>'; }).join("") + '</div>' :
      '<p class="muted" style="margin:0">None yet. Answer questions in Practice, Find the Concept or the Battle and the concepts you miss will show here.</p>') +
    (st.length ? '<h4 style="margin-top:14px">Strongest concepts</h4><div class="chips">' + st.map(function(c){ return '<span class="chip strong">★ ' + esc(cname(c)) + '</span>'; }).join("") + '</div>' : '') + '</div>' +
    (D.notesLink ? '<a class="btn" href="' + esc(D.notesLink) + '">📚 Back to chapter notes</a>' : '') +
    '<button class="btn sm" id="resetP" style="opacity:.7">Reset this chapter\'s progress</button>' +
    '</aside></div>';
  ROOT.innerHTML = html;
  requestAnimationFrame(function(){ requestAnimationFrame(function(){
    $$(".mbar i").forEach(function(i){ i.style.width = i.dataset.w + "%"; });
    $("#ringArc").style.strokeDashoffset = 314 - 314 * tot / 100; countUp($("#ringNum"), tot);
  }); });
  $$(".chip.weak").forEach(function(a){ a.addEventListener("click", function(){ sessionStorage.setItem("nf.arena.open", a.dataset.sec); }); });
  $("#resetP").addEventListener("click", function(){
    ask("Clear all Revision Arena progress for this chapter on this device?", "Clear progress", function(){ delete S.ch[D.id]; initP(); save(); route(); toast("Progress cleared"); });
  });
}

/* ================= MODULE 1: QUICK REVISION ================= */
var qrMode = "detail";
function quick(){
  var openSec = sessionStorage.getItem("nf.arena.open") || ""; sessionStorage.removeItem("nf.arena.open");
  var html = head("quick") +
    '<div class="qrtop"><div class="seg" role="group" aria-label="Revision mode"><button data-m="detail" class="' + (qrMode === "detail" ? "on" : "") + '">📖 Detailed</button><button data-m="fast" class="' + (qrMode === "fast" ? "on" : "") + '">⚡ 10-minute quick mode</button></div>' +
    '<div class="btns"><button class="btn sm" id="xAll">Expand all</button><button class="btn sm" id="cAll">Collapse all</button></div></div>' +
    '<div class="overview"><h3>Chapter overview</h3><p style="margin:0">' + D.overview.text + '</p>' +
    (D.overview.points ? '<ul>' + D.overview.points.map(function(p){ return '<li>' + p + '</li>'; }).join("") + '</ul>' : '') + '</div>' +
    '<div class="mm" aria-label="Mind map of the chapter">' + mindMap(D.overview.map) + '</div>';
  if(qrMode === "fast"){
    html += D.sections.map(function(s){
      return '<details open class="sec" style="--sc:' + s.color + '"><summary><span class="si">' + s.icon + '</span><h3>' + esc(s.title) + '</h3>' + tickBtn(s.id) + '<span class="chev">▶</span></summary><div class="sbody">' +
        '<ul class="qlist">' + s.quick.map(function(q){ return '<li>' + q + '</li>'; }).join("") + '</ul>' + (s.mnem ? mnem(s.mnem) : '') + '</div></details>';
    }).join("");
  } else {
    html += D.sections.map(function(s){
      return '<details class="sec" id="sec-' + s.id + '" style="--sc:' + s.color + '"' + (s.id === openSec ? " open" : "") + '><summary><span class="si">' + s.icon + '</span><h3>' + esc(s.title) + '<small>' + esc(s.sub || "") + '</small></h3>' + tickBtn(s.id) + '<span class="chev">▶</span></summary><div class="sbody">' +
        (s.intro ? '<p>' + s.intro + '</p>' : '') +
        '<ul class="qlist">' + s.quick.map(function(q){ return '<li>' + q + '</li>'; }).join("") + '</ul>' +
        (s.defs ? s.defs.map(function(d){ return '<div class="def"><b>' + d[0] + ':</b> ' + d[1] + '</div>'; }).join("") : '') +
        (s.flow ? flow(s.flow) : '') +
        (s.cards ? '<div class="cards">' + s.cards.map(function(c, i){ return concept(c, s, i); }).join("") + '</div>' : '') +
        (s.table ? table(s.table) : '') +
        (s.tables ? s.tables.map(table).join("") : '') +
        (s.mnem ? mnem(s.mnem) : '') +
        (s.examples ? '<div class="key"><b>Examples:</b><ul style="margin:4px 0;padding-left:18px">' + s.examples.map(function(e){ return '<li>' + e + '</li>'; }).join("") + '</ul></div>' : '') +
        (s.exam ? '<div class="exam"><h5>🎯 CBSE exam points</h5><ul>' + s.exam.map(function(e){ return '<li>' + e + '</li>'; }).join("") + '</ul></div>' : '') +
        '</div></details>';
    }).join("");
  }
  var done = Object.keys(P.qr).length;
  html += '<div class="checklist" aria-live="polite"><b>Checklist</b><span class="bar"><i id="qrBar" style="width:' + pct(done, D.sections.length) + '%"></i></span><span id="qrTxt">' + done + ' / ' + D.sections.length + ' topics revised</span></div>';
  ROOT.innerHTML = html;
  $$(".seg button").forEach(function(b){ b.addEventListener("click", function(){ qrMode = b.dataset.m; quickRerender(); }); });
  $("#xAll").addEventListener("click", function(){ $$("details.sec").forEach(function(d){ d.open = true; }); $$(".cc").forEach(function(c){ c.classList.remove("closed"); c.querySelector(".cch").setAttribute("aria-expanded","true"); }); });
  $("#cAll").addEventListener("click", function(){ $$("details.sec").forEach(function(d){ d.open = false; }); });
  $$(".cch").forEach(function(b){ b.addEventListener("click", function(){ var c = b.parentNode; c.classList.toggle("closed"); b.setAttribute("aria-expanded", c.classList.contains("closed") ? "false" : "true"); }); });
  $$(".tick").forEach(function(b){ b.addEventListener("click", function(ev){
    ev.preventDefault(); ev.stopPropagation();
    var id = b.dataset.s; if(P.qr[id]) delete P.qr[id]; else { P.qr[id] = Date.now(); xpPop(b, "+10 XP"); }
    save(); b.classList.toggle("on", !!P.qr[id]); b.innerHTML = P.qr[id] ? "✓ Revised" : "○ Mark revised";
    var n = Object.keys(P.qr).length; $("#qrBar").style.width = pct(n, D.sections.length) + "%"; $("#qrTxt").textContent = n + " / " + D.sections.length + " topics revised";
    if(n === D.sections.length) toast("🎉 Whole chapter revised! Try the Case Study Lab next.");
  }); });
  if(openSec){ var el = $("#sec-" + openSec); if(el) setTimeout(function(){ el.scrollIntoView({behavior:"smooth", block:"start"}); }, 100); }
}
function quickRerender(){ var y = window.scrollY; quick(); window.scrollTo(0, Math.min(y, 300)); }
function tickBtn(id){ return '<button class="tick' + (P.qr[id] ? " on" : "") + '" data-s="' + id + '">' + (P.qr[id] ? "✓ Revised" : "○ Mark revised") + '</button>'; }
function concept(c, s, i){
  var col = {def:"#ffd84d", feat:"#3fe0ff", imp:"#3ddc84", obj:"#3ddc84", merit:"#3ddc84", lim:"#ff5d6c", func:"#ff9f43", prin:"#8f6bff", diff:"#ff5fa2", ex:"#3fe0ff", step:"#ff9f43", type:"#bfa3ff"}[c.tag] || "#8f6bff";
  var lab = {def:"Definition", feat:"Feature", imp:"Importance", obj:"Objective", merit:"Merit", lim:"Limitation", func:"Function", prin:"Principle", diff:"Difference", ex:"Example", step:"Step", type:"Type"}[c.tag] || "Concept";
  return '<div class="cc closed" style="--cc:' + col + '"><button class="cch" aria-expanded="false"><span class="ct">' + c.t + '</span><span class="tag">' + lab + '</span></button><div class="cb">' + c.b + '</div></div>';
}
function table(t){ return '<div class="tblw"><table class="cmp">' + (t.cap ? '<caption class="sr">' + esc(t.cap) + '</caption>' : '') + '<thead><tr>' + t.head.map(function(h){ return '<th>' + h + '</th>'; }).join("") + '</tr></thead><tbody>' +
  t.rows.map(function(r){ return '<tr>' + r.map(function(c){ return '<td>' + c + '</td>'; }).join("") + '</tr>'; }).join("") + '</tbody></table></div>'; }
function flow(f){ return '<div class="flow" role="list">' + f.map(function(st, i){ return (i ? '<span class="ar" aria-hidden="true">➜</span>' : '') + '<div class="fs" role="listitem"><b>' + (i + 1) + '</b>' + st + '</div>'; }).join("") + '</div>'; }
function mnem(m){ return '<div class="mnem"><span style="font-size:26px">🧠</span><div><b>' + esc(m[0]) + '</b><div style="font-size:14px">' + m[1] + '</div></div></div>'; }
function mindMap(m){
  var W = 960, H = 560, cx = W / 2, cy = H / 2, n = m.branches.length, cols = ["#ffd84d","#3fe0ff","#ff5fa2","#3ddc84","#ff9f43","#bfa3ff","#5bc0ff","#ff8f8f"];
  var out = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Mind map: ' + esc(m.center) + '">';
  var nodes = "";
  m.branches.forEach(function(b, i){
    var a = -Math.PI / 2 + i * 2 * Math.PI / n, rx = 300, ry = 190, x = cx + rx * Math.cos(a), y = cy + ry * Math.sin(a), col = cols[i % cols.length];
    out += '<path d="M' + cx + ' ' + cy + ' Q' + ((cx + x) / 2 + 30 * Math.sin(a)) + ' ' + ((cy + y) / 2 - 30 * Math.cos(a)) + ' ' + x + ' ' + y + '" stroke="' + col + '" stroke-width="4" fill="none" opacity=".75"/>';
    var bw = Math.max(120, b.t.length * 8.6 + 24), lines = b.c || [];
    var boxH = 30 + lines.length * 17;
    var bx = Math.min(W - bw - 6, Math.max(6, x - bw / 2)), by = Math.min(H - boxH - 6, Math.max(6, y - 15));
    nodes += '<g><rect x="' + bx + '" y="' + by + '" width="' + bw + '" height="' + boxH + '" rx="12" fill="#1c1442" stroke="' + col + '" stroke-width="2.5"/>' +
      '<text x="' + (bx + bw / 2) + '" y="' + (by + 21) + '" text-anchor="middle" fill="' + col + '" font-family="Barlow,sans-serif" font-weight="800" font-size="15">' + esc(b.t) + '</text>' +
      lines.map(function(l, j){ return '<text x="' + (bx + bw / 2) + '" y="' + (by + 40 + j * 17) + '" text-anchor="middle" fill="#e8e3ff" font-family="Barlow,sans-serif" font-size="13">' + esc(l) + '</text>'; }).join("") + '</g>';
  });
  out += nodes + '<ellipse cx="' + cx + '" cy="' + cy + '" rx="130" ry="44" fill="#e50914" stroke="#ffd84d" stroke-width="3"/>' +
    '<text x="' + cx + '" y="' + (cy + 8) + '" text-anchor="middle" fill="#fff" font-family="Luckiest Guy,Bebas Neue,sans-serif" font-size="22" letter-spacing="1">' + esc(m.center) + '</text></svg>';
  return out;
}

/* ================= shared answer helpers ================= */
/* A rubric is a list of marking points. The student ticks what they wrote; marks come from the ticks.
   Keyword "spotted" labels are only a reminder, never the mark. */
function rubric(points, answer, idp){
  var a = norm(answer);
  return '<ul class="rub">' + points.map(function(p, i){
    var spot = (p.k || []).some(function(k){ return a.indexOf(norm(k)) >= 0; });
    return '<li><input type="checkbox" id="' + idp + i + '" data-m="' + p.m + '"><label for="' + idp + i + '">' + p.p +
      (spot ? '<span class="spot">🔎 A matching word appears in your answer. Tick only if you explained it.</span>' : '') + '</label><span class="pm">' + p.m + ' mark' + (p.m === 1 ? "" : "s") + '</span></li>';
  }).join("") + '</ul>';
}
function rubricScore(box){ return $$('.rub input', box).reduce(function(s, c){ return s + (c.checked ? +c.dataset.m : 0); }, 0); }
/* does the answer name the expected concept? Used only for "Identify" parts. */
function names(answer, keys){ var a = norm(answer); return (keys || []).some(function(k){ return a.indexOf(norm(k)) >= 0; }); }
var AR_OPTS = ["Both Assertion (A) and Reason (R) are true, and R is the correct explanation of A.","Both A and R are true, but R is not the correct explanation of A.","A is true, but R is false.","A is false, but R is true."];
function optsOf(q){ return q.t === "ar" ? AR_OPTS : q.t === "tf" ? ["True","False"] : q.o; }
function correctIdx(q){ return q.t === "tf" ? (q.a ? 0 : 1) : q.a; }
function qBody(q){
  var s = '';
  if(q.t === "ar") s = '<p><b>Assertion (A):</b> ' + q.q + '</p><p><b>Reason (R):</b> ' + q.r + '</p>';
  else if(q.passage) s = '<div class="passage" style="margin-bottom:10px">' + q.passage + '</div><p>' + q.q + '</p>';
  else s = '<p>' + q.q + '</p>';
  return s;
}
var TNAME = {mcq:"MCQ", ar:"Assertion–Reason", tf:"True / False", match:"Match the following", fill:"Fill in the blank", short:"1 mark", sa3:"3 marks", sa4:"4 marks", la6:"6 marks", comp:"Competency-based", case:"Case-based"};
var DNAME = {E:"Easy", M:"Moderate", C:"Challenging"};

/* ================= MODULE 2: CASE STUDY LAB ================= */
var csIdx = 0;
function cases(){
  var list = D.cases;
  var c = list[csIdx];
  var html = head("cases", "Read the business situation, identify the concept, write your answer, then mark it against the CBSE-style scheme.") +
    '<div class="caselist" role="tablist">' + list.map(function(x, i){
      return '<button class="cpill' + (i === csIdx ? " on" : "") + (P.cs[x.id] ? " done" : "") + '" data-i="' + i + '" role="tab" aria-selected="' + (i === csIdx) + '"><span class="lvl">' + "★★★".slice(0, x.lvl) + '<i aria-hidden="true">' + "★★★".slice(0, 3 - x.lvl) + "</i>" + " " + ["","Easy","Moderate","Challenging"][x.lvl] + '</span><b>' + esc(x.title) + '</b>' +
        (P.cs[x.id] ? '<span style="color:var(--green)">✓ ' + P.cs[x.id].s + '/' + P.cs[x.id].m + '</span>' : '<span class="muted">' + x.qs.length + ' question' + (x.qs.length > 1 ? "s" : "") + '</span>') + '</button>';
    }).join("") + '</div>' +
    '<div class="lab"><div class="passage"><h4>📘 Case study · ' + (csIdx + 1) + ' of ' + list.length + '</h4>' + c.text + '</div>' +
    '<div id="csQs">' + c.qs.map(function(q, j){
      return '<div class="qcard stepq" data-j="' + j + '"><div class="qmeta"><span class="m">' + q.m + ' mark' + (q.m > 1 ? "s" : "") + '</span><span class="t">' + esc(q.type) + '</span></div>' +
        '<p class="qtext">' + q.q + '</p><textarea class="ans" aria-label="Your answer" placeholder="Type your answer here..."></textarea><div class="wc">0 words</div>' +
        '<div class="btns" style="margin-top:8px"><button class="btn warn sm" data-a="hint">💡 Hint</button><button class="btn sm" data-a="scheme">📋 Marking scheme</button><button class="btn pri" data-a="sub">➤ Submit answer</button></div>' +
        '<div class="out"></div></div>';
    }).join("") +
    '<div class="btns" style="justify-content:space-between;margin-top:6px"><button class="btn" id="csPrev"' + (csIdx ? "" : " disabled") + '>← Previous case</button><button class="btn go" id="csNext">Try another case study →</button></div>' +
    '</div></div>';
  ROOT.innerHTML = html;
  $$(".cpill").forEach(function(b){ b.addEventListener("click", function(){ csIdx = +b.dataset.i; cases(); }); });
  $("#csPrev").addEventListener("click", function(){ if(csIdx){ csIdx--; cases(); } });
  $("#csNext").addEventListener("click", function(){
    var next = list.findIndex(function(x, i){ return i > csIdx && !P.cs[x.id]; });
    csIdx = next >= 0 ? next : (csIdx + 1) % list.length; cases();
  });
  $$("#csQs .stepq").forEach(function(box){
    var q = c.qs[+box.dataset.j], ta = $("textarea", box), out = $(".out", box);
    ta.addEventListener("input", function(){ $(".wc", box).textContent = words(ta.value) + " words"; });
    box.addEventListener("click", function(ev){
      var a = ev.target.dataset && ev.target.dataset.a; if(!a) return;
      if(a === "hint"){ out.innerHTML = '<div class="fb hint"><h5>💡 Hint</h5><p>' + q.hint + '</p></div>'; }
      if(a === "scheme"){ out.innerHTML = '<div class="fb info"><h5>📋 Marking scheme</h5><ul>' + q.points.map(function(p){ return '<li>' + p.p + ' <b style="color:var(--yel)">(' + p.m + ')</b></li>'; }).join("") + '</ul><p class="muted">Write first, then check. Peeking costs you the practice.</p></div>'; }
      if(a === "sub"){
        if(words(ta.value) < 2){ toast("Write your answer first, even a few lines."); ta.focus(); return; }
        var named = q.keys ? names(ta.value, q.keys) : null;
        out.innerHTML = '<div class="fb ' + (named === false ? "no" : "info") + '">' +
          (named === null ? '' : named ? '<h5>✅ Concept check</h5><p>You named <b>' + q.ans + '</b>. That is the concept examiners look for.</p>' :
            '<h5>❌ Concept check</h5><p>Your answer does not name <b>' + q.ans + '</b>' + (q.alt ? ' (or ' + q.alt + ')' : '') + '. In the board exam, a wrong or missing concept name usually means the explanation marks are lost too.</p>') +
          '<h5 style="margin-top:10px">📝 Mark yourself against the scheme</h5><p class="muted" style="margin:0">Tick each point your answer really covers. This is self-assessment: a computer cannot fairly judge a written answer.</p>' +
          rubric(q.points, ta.value, "r" + c.id + box.dataset.j) +
          '<div class="btns"><button class="btn go" data-a="score">Total my marks</button><span class="score" aria-live="polite"></span></div></div>' +
          '<div class="fb ok"><h5>🧱 Suggested answer structure</h5><ol>' + q.structure.map(function(s){ return '<li>' + s + '</li>'; }).join("") + '</ol></div>' +
          '<div class="fb info"><h5>⭐ Model CBSE-style answer</h5>' + q.model + '</div>';
        if(q.mis) out.innerHTML += '<div class="mis"><b>Common mistake:</b> ' + q.mis + '</div>';
        if(q.keys) mark(q.c, !!named);
        save();
      }
      if(a === "score"){
        var s = rubricScore(box), m = q.m; s = Math.min(s, m);
        $(".score", box).textContent = s + " / " + m;
        box.dataset.s = s;
        var all = $$("#csQs .stepq"), tot = 0, max = 0, doneAll = true;
        all.forEach(function(b2){ var q2 = c.qs[+b2.dataset.j]; max += q2.m; if(b2.dataset.s == null) doneAll = false; else tot += +b2.dataset.s; });
        if(doneAll){ P.cs[c.id] = {s:tot, m:max, at:Date.now()}; save(); xpPop(ev.target, "+" + (10 + tot * 2) + " XP"); toast("Case scored " + tot + "/" + max + ". Saved."); }
      }
    });
  });
}

/* ================= MODULE 3: FLASHCARDS ================= */
var fc = null;
function flash(){
  if(!fc) fc = {order: D.flashcards.map(function(_, i){ return i; }), i:0, mode:"all"};
  var total = D.flashcards.length, kn = Object.keys(P.fc.k).length, ag = Object.keys(P.fc.a).length;
  var deck = fc.order;
  var html = head("flash") +
    '<div class="fcwrap"><div class="fcstats"><span class="chip strong">✓ Know it: ' + kn + '</span><span class="chip weak">↻ Revise again: ' + ag + '</span><span class="chip">Completion: <b style="margin-left:4px">' + pct(kn, total) + '%</b></span></div>' +
    '<div class="fcbar" aria-hidden="true"><i style="width:' + pct(kn, total) + '%;background:var(--green)"></i><i style="width:' + pct(ag, total) + '%;background:var(--wrong)"></i></div>' +
    '<div class="tabs"><button class="tab' + (fc.mode === "all" ? " on" : "") + '" data-m="all">All cards (' + total + ')</button><button class="tab' + (fc.mode === "again" ? " on" : "") + '" data-m="again">Repeat “revise again” (' + ag + ')</button>' +
    '<button class="tab' + (fc.mode === "new" ? " on" : "") + '" data-m="new">Not yet known (' + (total - kn) + ')</button><button class="tab" id="fcShuf">🔀 Shuffle</button></div>';
  if(!deck.length){
    html += '<div class="donebox"><div class="big">🎉</div><h3>' + (fc.mode === "again" ? "No cards left to revise again." : "You know every card in this set.") + '</h3><p class="muted">Pick “All cards” to go through the full deck again.</p></div></div>';
    ROOT.innerHTML = html; bindFcTabs(); return;
  }
  if(fc.i >= deck.length) fc.i = 0;
  var card = D.flashcards[deck[fc.i]];
  html += '<div class="flip" id="flip" tabindex="0" role="button" aria-label="Flashcard. Press Enter or click to flip."><div class="in">' +
    '<div class="face front"><small>' + esc(card.k || "Card") + ' · ' + (fc.i + 1) + ' / ' + deck.length + '</small><div class="fq">' + card.q + '</div><span class="hint2">Tap to reveal the answer</span></div>' +
    '<div class="face back"><small style="color:var(--yel)">Answer</small><div class="fa">' + card.a + '</div></div></div></div>' +
    '<div class="fcnav"><button class="btn nv" id="fcPrev" aria-label="Previous card">←</button><button class="btn red" id="fcAgain">↻ Revise again</button><button class="btn go" id="fcKnow">✓ Know it</button><button class="btn nv" id="fcNext" aria-label="Next card">→</button></div>' +
    '<p class="muted" style="text-align:center;margin-top:10px">Keys: Space flips, ← → move, K = know it, R = revise again.</p></div>';
  ROOT.innerHTML = html;
  bindFcTabs();
  var fl = $("#flip");
  function flip(){ fl.classList.toggle("on"); }
  fl.addEventListener("click", flip);
  fl.addEventListener("keydown", function(e){ if(e.key === "Enter"){ e.preventDefault(); flip(); } });
  function go(d){ fc.i = (fc.i + d + deck.length) % deck.length; flash(); }
  function rate(know, btn){
    var id = deck[fc.i];
    if(know){ P.fc.k[id] = 1; delete P.fc.a[id]; mark(card.c, true); xpPop(btn, "+5 XP"); }
    else { P.fc.a[id] = 1; delete P.fc.k[id]; mark(card.c, false); }
    save();
    if(fc.mode !== "all"){ setDeck(fc.mode, true); flash(); return; }
    if(Object.keys(P.fc.k).length === total) toast("🏆 100% flashcards! Every card known.");
    go(1);
  }
  $("#fcPrev").addEventListener("click", function(){ go(-1); });
  $("#fcNext").addEventListener("click", function(){ go(1); });
  $("#fcKnow").addEventListener("click", function(e){ rate(true, e.target); });
  $("#fcAgain").addEventListener("click", function(e){ rate(false, e.target); });
  document.onkeydown = function(e){
    if(location.hash !== "#flash" || /input|textarea/i.test(e.target.tagName)) return;
    if(e.key === " "){ e.preventDefault(); flip(); } else if(e.key === "ArrowRight") go(1); else if(e.key === "ArrowLeft") go(-1);
    else if(e.key === "k" || e.key === "K") rate(true, $("#fcKnow")); else if(e.key === "r" || e.key === "R") rate(false, $("#fcAgain"));
  };
}
function setDeck(m, keepPos){
  var all = D.flashcards.map(function(_, i){ return i; });
  fc.mode = m;
  fc.order = m === "again" ? all.filter(function(i){ return P.fc.a[i]; }) : m === "new" ? all.filter(function(i){ return !P.fc.k[i]; }) : all;
  if(!keepPos) fc.i = 0;
}
function bindFcTabs(){
  $$(".tab[data-m]").forEach(function(b){ b.addEventListener("click", function(){ setDeck(b.dataset.m); flash(); }); });
  $("#fcShuf").addEventListener("click", function(){ fc.order = shuffle(fc.order); fc.i = 0; flash(); toast("Cards shuffled"); });
}

/* ================= MODULE 4: QUESTION PRACTICE ================= */
var qpF = {t:"all", d:"all", i:0};
function practice(){
  var Q = D.questions.filter(function(q){ return (qpF.t === "all" || q.t === qpF.t || (qpF.t === "long" && /sa3|sa4|la6/.test(q.t))) && (qpF.d === "all" || q.d === qpF.d); });
  var types = ["mcq","ar","tf","match","fill","short","sa3","sa4","la6","comp","case"].filter(function(t){ return D.questions.some(function(q){ return q.t === t; }); });
  var att = Object.keys(P.qp).length, cor = Object.keys(P.qp).filter(function(k){ return P.qp[k] === 1; }).length;
  var html = head("practice") +
    '<div class="filters"><select id="fT" aria-label="Question type"><option value="all">All question types</option>' + types.map(function(t){ return '<option value="' + t + '"' + (qpF.t === t ? " selected" : "") + '>' + TNAME[t] + ' (' + D.questions.filter(function(q){ return q.t === t; }).length + ')</option>'; }).join("") + '</select>' +
    '<select id="fD" aria-label="Difficulty"><option value="all">All levels</option>' + ["E","M","C"].map(function(d){ return '<option value="' + d + '"' + (qpF.d === d ? " selected" : "") + '>' + DNAME[d] + '</option>'; }).join("") + '</select>' +
    '<span class="counter">Attempted ' + att + ' / ' + D.questions.length + ' · Correct ' + cor + '</span></div>';
  if(!Q.length){ ROOT.innerHTML = html + '<p class="muted">No questions match this filter.</p>'; bindQpF(); return; }
  if(qpF.i >= Q.length) qpF.i = 0;
  var q = Q[qpF.i];
  html += '<div class="qcard" id="qbox"><div class="qmeta"><span class="m">' + q.m + ' mark' + (q.m > 1 ? "s" : "") + '</span><span class="t">' + TNAME[q.t] + '</span><span class="d d-' + q.d + '">' + DNAME[q.d] + '</span><span class="muted" style="margin-left:auto">Q ' + (qpF.i + 1) + ' of ' + Q.length + '</span></div>' +
    '<div class="qtext">' + qBody(q) + '</div>' + answerUI(q) +
    '<div class="btns" style="margin-top:12px"><button class="btn pri" id="qCheck">✔ Check answer</button><button class="btn warn sm" id="qHint">💡 Hint</button><button class="btn sm" id="qSol">📖 Show solution</button></div><div id="qOut"></div></div>' +
    '<div class="btns" style="justify-content:space-between"><button class="btn" id="qPrev">← Previous</button><button class="btn go" id="qNext">Next question →</button></div>';
  ROOT.innerHTML = html;
  bindQpF();
  var box = $("#qbox"), out = $("#qOut"), sel = null;
  $$(".opt", box).forEach(function(o){ o.addEventListener("click", function(){ $$(".opt", box).forEach(function(x){ x.classList.remove("sel"); x.setAttribute("aria-pressed","false"); }); o.classList.add("sel"); o.setAttribute("aria-pressed","true"); sel = +o.dataset.i; }); });
  var ta = $("textarea", box); if(ta) ta.addEventListener("input", function(){ var w = $(".wc", box); if(w) w.textContent = words(ta.value) + " words"; });
  $("#qHint").addEventListener("click", function(){ out.innerHTML = '<div class="fb hint"><h5>💡 Hint</h5><p>' + q.hint + '</p></div>'; });
  $("#qSol").addEventListener("click", function(){ out.innerHTML = solution(q); if(P.qp[q.id] == null){ P.qp[q.id] = 0; save(); } });
  $("#qCheck").addEventListener("click", function(e){
    var r = checkQ(q, box, sel);
    if(r === "empty"){ toast("Answer first, then check."); return; }
    if(r === "self"){
      out.innerHTML = '<div class="fb info"><h5>📝 Mark yourself</h5><p class="muted" style="margin:0">Tick each point your answer covers. Self-assessment against the marking points: a computer cannot fairly judge a written answer.</p>' +
        rubric(q.points, (ta || {}).value, "p" + q.id) + '<div class="btns"><button class="btn go" id="qScore">Total my marks</button><span class="score" aria-live="polite"></span></div></div>' + solution(q, true);
      $("#qScore").addEventListener("click", function(){ var s = Math.min(q.m, rubricScore(out)); $(".score", out).textContent = s + " / " + q.m; P.qp[q.id] = s >= q.m * 0.6 ? 1 : 0; mark(q.c, s >= q.m * 0.6); save(); });
      return;
    }
    P.qp[q.id] = r ? 1 : 0; mark(q.c, r); save();
    if(r) xpPop(e.target, "+" + (q.m * 5) + " XP");
    out.innerHTML = '<div class="fb ' + (r ? "ok" : "no") + '"><h5>' + (r ? "✅ Correct!" : "❌ Not quite") + '</h5>' + (r ? "" : '<p>Correct answer: <b>' + rightText(q) + '</b></p>') + '<p>' + q.why + '</p></div>' + (q.mis ? '<div class="mis"><b>Common misconception:</b> ' + q.mis + '</div>' : '');  });
  $("#qPrev").addEventListener("click", function(){ qpF.i = (qpF.i - 1 + Q.length) % Q.length; practice(); });
  $("#qNext").addEventListener("click", function(){ qpF.i = (qpF.i + 1) % Q.length; practice(); });
}
function bindQpF(){
  $("#fT").addEventListener("change", function(e){ qpF.t = e.target.value; qpF.i = 0; practice(); });
  $("#fD").addEventListener("change", function(e){ qpF.d = e.target.value; qpF.i = 0; practice(); });
}
function answerUI(q){
  if(/mcq|ar|tf|comp|case/.test(q.t)) return '<div class="opts">' + optsOf(q).map(function(o, i){ return '<button class="opt" aria-pressed="false" data-i="' + i + '"><span class="k">' + "ABCD"[i] + '</span><span>' + o + '</span></button>'; }).join("") + '</div>';
  if(q.t === "match"){
    var right = shuffle(q.pairs.map(function(p){ return p[1]; }));
    return '<div class="match">' + q.pairs.map(function(p, i){ return '<div class="mr" data-i="' + i + '"><span>' + p[0] + '</span><select aria-label="Match for ' + esc(p[0]) + '"><option value="">— choose —</option>' + right.map(function(r){ return '<option>' + esc(r) + '</option>'; }).join("") + '</select></div>'; }).join("") + '</div>';
  }
  if(q.t === "fill" || (q.t === "short" && q.acc)) return '<input class="ans one" type="text" autocomplete="off" aria-label="Your answer" placeholder="Type your answer">';
  return '<textarea class="ans" aria-label="Your answer" placeholder="Write your answer the way you would in the exam..."></textarea><div class="wc">0 words</div>';
}
/* returns true / false / "empty" / "self" */
function checkQ(q, box, sel){
  if(/mcq|ar|tf|comp|case/.test(q.t)){
    if(sel == null) return "empty";
    var ok = sel === correctIdx(q);
    $$(".opt", box).forEach(function(o){ o.disabled = true; var i = +o.dataset.i; if(i === correctIdx(q)) o.classList.add("right"); else if(i === sel) o.classList.add("wrong"); });
    return ok;
  }
  if(q.t === "match"){
    var rows = $$(".mr", box), all = true, any = false;
    rows.forEach(function(r){ var v = $("select", r).value; if(v) any = true; var ok = v === q.pairs[+r.dataset.i][1]; r.classList.add(ok ? "right" : "wrong"); if(!ok) all = false; });
    return any ? all : "empty";
  }
  if(q.t === "fill" || (q.t === "short" && q.acc)){
    var v = norm($("input", box).value); if(!v) return "empty";
    return q.acc.some(function(a){ return norm(a) === v || (norm(a).length > 5 && v.indexOf(norm(a)) >= 0); });
  }
  var t = $("textarea", box); if(!t || words(t.value) < 2) return "empty";
  return "self";
}
function rightText(q){
  if(q.t === "match") return q.pairs.map(function(p){ return p[0] + " → " + p[1]; }).join("; ");
  if(q.t === "fill" || q.t === "short") return q.acc[0];
  return "ABCD"[correctIdx(q)] + ". " + optsOf(q)[correctIdx(q)];
}
function solution(q, noHead){
  var s = '';
  if(q.model){
    s += '<div class="fb ok"><h5>⭐ Model answer (' + q.m + ' mark' + (q.m > 1 ? "s" : "") + ')</h5>' + q.model + '</div>';
  } else {
    s += '<div class="fb ok"><h5>📖 Solution</h5><p>Answer: <b>' + rightText(q) + '</b></p><p>' + q.why + '</p></div>';
  }
  if(q.mis) s += '<div class="mis"><b>Common misconception:</b> ' + q.mis + '</div>';
  return s;
}

/* ================= MODULE 5: FIND THE CONCEPT ================= */
var GM = [
  {k:"spot", e:"⚡", n:"Spot It", d:"10 situations, 20 seconds each. Pick the concept. Streaks score double.", bg:"linear-gradient(135deg,#bfe8ff,#5bc0ff)"},
  {k:"match", e:"🧲", n:"Match Up", d:"Drag each concept onto the situation it fits (or tap a chip, then a slot).", bg:"linear-gradient(135deg,#ffd28a,#ff9f43)"},
  {k:"odd", e:"🚫", n:"Odd One Out", d:"Four statements. One is wrong. Find it.", bg:"linear-gradient(135deg,#ffc0dc,#ff6fae)"},
  {k:"hunt", e:"🔦", n:"Concept Hunt", d:"Tap the exact sentence in the paragraph that shows the concept.", bg:"linear-gradient(135deg,#c8ffe0,#3ddc84)"},
  {k:"explain", e:"✍️", n:"Explain It", d:"Pick the concept, then say why in one line. Compare with the expert reason.", bg:"linear-gradient(135deg,#e2b8ff,#a35bff)"}
];
function find(){
  var done = Object.keys(P.fd).length, tot = findItems();
  ROOT.innerHTML = head("find") + '<div class="hud"><span class="h">Items cleared<b>' + done + '/' + tot + '</b></span><span class="h">Best Spot It score<b>' + (P.fdBest || 0) + '</b></span></div>' +
    '<div class="gmodes">' + GM.map(function(g){ return '<button class="gm" data-k="' + g.k + '" style="background:' + g.bg + '"><span class="e" aria-hidden="true">' + g.e + '</span><h4>' + g.n + '</h4><p>' + g.d + '</p></button>'; }).join("") + '</div>';
  $$(".gm").forEach(function(b){ b.addEventListener("click", function(){ ({spot:gSpot, match:gMatch, odd:gOdd, hunt:gHunt, explain:gExplain})[b.dataset.k](); }); });
}
function gHead(n){ return '<div class="mhead"><span class="big">🔍</span><div class="grow"><h2>' + n + '</h2><p>Find the Concept · ' + esc(D.title) + '</p></div><button class="btn" id="gBack">← Game modes</button></div>'; }
function bindBack(){ $("#gBack").addEventListener("click", function(){ clearTimers(); find(); }); }
function endBox(title, score, max, extra){
  return '<div class="endbox fade"><div style="font-size:48px">' + (score >= max * 0.8 ? "🏆" : score >= max * 0.5 ? "🎖️" : "💪") + '</div><h3 style="font-family:var(--head);font-weight:400;font-size:28px;margin:6px 0">' + title + '</h3>' +
    '<div class="big"><span id="endN">0</span><span style="font-size:32px;color:var(--dim)"> / ' + max + '</span></div>' + (extra || "") +
    '<div class="btns" style="justify-content:center;margin-top:14px"><button class="btn go" id="again">Play again</button><button class="btn" id="gBack2">Other modes</button></div></div>';
}
function bindEnd(fn, score){ countUp($("#endN"), score); $("#again").addEventListener("click", fn); $("#gBack2").addEventListener("click", find); }

function gSpot(){
  var items = shuffle(D.find.mcq).slice(0, 10), i = 0, score = 0, streakN = 0, right = 0, T = 20;
  function show(){
    clearTimers();
    if(i >= items.length){
      if(score > (P.fdBest || 0)) P.fdBest = score; save();
      ROOT.innerHTML = gHead("⚡ Spot It") + endBox("Round over", right, items.length, '<p>Score: <b style="color:var(--yel)">' + score + ' points</b>' + (score >= (P.fdBest || 0) ? ' · Personal best!' : '') + '</p>');
      bindBack(); bindEnd(gSpot, right); return;
    }
    var it = items[i], opts = shuffle(it.o.map(function(o, j){ return {t:o, ok:j === it.a}; })), left = T;
    ROOT.innerHTML = gHead("⚡ Spot It") + '<div class="hud"><span class="h">Q<b>' + (i + 1) + '/' + items.length + '</b></span><span class="h">Score<b id="sc">' + score + '</b></span><span class="h">Streak<b>' + streakN + '🔥</b></span><span class="tbar" aria-hidden="true"><i id="tb" style="width:100%"></i></span><span class="h">⏱<b id="tl">' + T + '</b></span></div>' +
      '<div class="situ"><div class="lbl">Business situation</div>' + it.s + '</div><p class="qtext">' + (it.ask || "Identify the concept.") + '</p>' +
      '<div class="opts">' + opts.map(function(o, j){ return '<button class="opt" data-j="' + j + '"><span class="k">' + "ABCD"[j] + '</span><span>' + o.t + '</span></button>'; }).join("") + '</div><div id="fo"></div>';
    bindBack();
    var answered = false;
    function answer(j, btn){
      if(answered) return; answered = true; clearTimers();
      var ok = j != null && opts[j].ok;
      $$(".opt").forEach(function(b, k){ b.disabled = true; if(opts[k].ok) b.classList.add("right"); else if(k === j) b.classList.add("wrong"); });
      var key = "m" + D.find.mcq.indexOf(it);
      if(ok){ right++; streakN++; var pts = 10 + left + (streakN >= 3 ? 10 : 0); score += pts; P.fd[key] = 1; xpPop(btn, "+" + pts); } else streakN = 0;
      mark(it.c, ok); save();
      $("#fo").innerHTML = '<div class="fb ' + (ok ? "ok" : "no") + '"><h5>' + (ok ? (streakN >= 3 ? '<span class="combo">COMBO x' + streakN + '!</span>' : "✅ Spot on!") : j == null ? "⏰ Time up" : "❌ Missed it") + '</h5><p>' + it.why + '</p></div><div class="btns" style="margin-top:10px"><button class="btn go" id="nx">Next →</button></div>';
      $("#nx").addEventListener("click", function(){ i++; show(); }); $("#nx").focus();
    }
    $$(".opt").forEach(function(b){ b.addEventListener("click", function(){ answer(+b.dataset.j, b); }); });
    timers.push(setInterval(function(){ left--; var tl = $("#tl"), tb = $("#tb"); if(!tl){ clearTimers(); return; } tl.textContent = left; tb.style.width = (left / T * 100) + "%"; if(left <= 0) answer(null); }, 1000));
  }
  show();
}

function gMatch(){
  var set = D.find.match[Math.floor(Math.random() * D.find.match.length)], pairs = shuffle(set.pairs).slice(0, 6), placed = {}, picked = null;
  function render(checked){
    var used = Object.keys(placed).map(function(k){ return placed[k]; });
    ROOT.innerHTML = gHead("🧲 Match Up") + '<p class="qtext">' + esc(set.title) + '</p>' +
      '<div class="dnd"><div class="pool" id="pool" aria-label="Concept chips">' + shuffle(pairs.map(function(p){ return p[1]; })).filter(function(c){ return used.indexOf(c) < 0; }).map(chip).join("") + (used.length === pairs.length ? '<span class="muted">All placed. Press Check.</span>' : '') + '</div>' +
      pairs.map(function(p, i){ var v = placed[i], st = checked ? (v === p[1] ? " right" : " wrong") : "";
        return '<div class="slotrow"><span>' + p[0] + '</span><div class="slot' + st + '" data-i="' + i + '" tabindex="0" role="button" aria-label="Drop zone">' + (v ? chip(v) : '<span class="muted" style="font-size:13px">drop here</span>') + '</div></div>'; }).join("") +
      '</div><div class="btns" style="margin-top:12px"><button class="btn pri" id="mChk">✔ Check</button><button class="btn" id="mRe">↺ Reset</button></div><div id="mo"></div>';
    bindBack();
    if(checked){
      var r = pairs.filter(function(p, i){ return placed[i] === p[1]; }).length;
      pairs.forEach(function(p, i){ var ok = placed[i] === p[1]; mark(p[2], ok); if(ok) P.fd["x" + set.title + p[1]] = 1; });
      save();
      $("#mo").innerHTML = '<div class="fb ' + (r === pairs.length ? "ok" : "no") + '"><h5>' + r + ' / ' + pairs.length + ' matched</h5><ul>' + pairs.map(function(p){ return '<li>' + p[0] + ' → <b>' + p[1] + '</b></li>'; }).join("") + '</ul></div>';
      $("#mChk").textContent = "Play again"; $("#mChk").onclick = gMatch; $("#mRe").remove(); return;
    }
    $("#mChk").addEventListener("click", function(){ if(Object.keys(placed).length < pairs.length){ toast("Place every chip first."); return; } render(true); });
    $("#mRe").addEventListener("click", function(){ placed = {}; picked = null; render(); });
    dragWire();
  }
  function chip(c){ return '<button class="dchip" data-c="' + esc(c) + '">' + esc(c) + '</button>'; }
  function drop(i, c){ Object.keys(placed).forEach(function(k){ if(placed[k] === c) delete placed[k]; }); placed[i] = c; picked = null; render(); }
  function dragWire(){
    $$(".slot").forEach(function(s){
      s.addEventListener("click", function(){ if(picked) drop(+s.dataset.i, picked); else if(placed[s.dataset.i]){ delete placed[s.dataset.i]; render(); } });
      s.addEventListener("keydown", function(e){ if(e.key === "Enter" && picked) drop(+s.dataset.i, picked); });
    });
    $$(".dchip").forEach(function(ch){
      ch.addEventListener("click", function(e){ e.stopPropagation(); if(ch.closest(".slot")){ return; } picked = ch.dataset.c; $$(".dchip").forEach(function(x){ x.classList.remove("pick"); }); ch.classList.add("pick"); });
      ch.addEventListener("pointerdown", function(e){
        if(ch.closest(".slot")) return;
        var sx = e.clientX, sy = e.clientY, ghost = null, over = null, moved = false;
        function mv(ev){
          if(!moved && Math.abs(ev.clientX - sx) + Math.abs(ev.clientY - sy) < 8) return;
          if(!moved){ moved = true; ghost = ch.cloneNode(true); ghost.classList.add("ghost"); document.body.appendChild(ghost); }
          ev.preventDefault();
          ghost.style.left = (ev.clientX - 40) + "px"; ghost.style.top = (ev.clientY - 20) + "px";
          var el = document.elementFromPoint(ev.clientX, ev.clientY), sl = el && el.closest ? el.closest(".slot") : null;
          if(over && over !== sl) over.classList.remove("over"); over = sl; if(sl) sl.classList.add("over");
        }
        function up(){
          document.removeEventListener("pointermove", mv); document.removeEventListener("pointerup", up); document.removeEventListener("pointercancel", up);
          if(ghost) ghost.remove();
          if(moved && over){ drop(+over.dataset.i, ch.dataset.c); }
        }
        document.addEventListener("pointermove", mv, {passive:false}); document.addEventListener("pointerup", up); document.addEventListener("pointercancel", up);
      });
    });
  }
  render();
}

function gOdd(){
  var items = shuffle(D.find.wrong).slice(0, 6), i = 0, right = 0;
  function show(){
    if(i >= items.length){ ROOT.innerHTML = gHead("🚫 Odd One Out") + endBox("Statements checked", right, items.length); bindBack(); bindEnd(gOdd, right); return; }
    var it = items[i];
    ROOT.innerHTML = gHead("🚫 Odd One Out") + '<div class="hud"><span class="h">Round<b>' + (i + 1) + '/' + items.length + '</b></span><span class="h">Right<b>' + right + '</b></span></div>' +
      '<p class="qtext">' + (it.ask || "Which statement is INCORRECT?") + '</p><div class="opts">' + it.stmts.map(function(s, j){ return '<button class="opt" data-j="' + j + '"><span class="k">' + "ABCD"[j] + '</span><span>' + s + '</span></button>'; }).join("") + '</div><div id="fo"></div>';
    bindBack();
    $$(".opt").forEach(function(b){ b.addEventListener("click", function(){
      var j = +b.dataset.j, ok = j === it.a;
      $$(".opt").forEach(function(x, k){ x.disabled = true; if(k === it.a) x.classList.add("wrong"); });
      if(ok){ right++; P.fd["o" + D.find.wrong.indexOf(it)] = 1; b.classList.remove("wrong"); b.classList.add("right"); xpPop(b, "+10"); } else b.classList.add("sel");
      mark(it.c, ok); save();
      $("#fo").innerHTML = '<div class="fb ' + (ok ? "ok" : "no") + '"><h5>' + (ok ? "✅ You caught the wrong one" : "❌ The incorrect statement was " + "ABCD"[it.a]) + '</h5><p>' + it.why + '</p></div><div class="btns" style="margin-top:10px"><button class="btn go" id="nx">Next →</button></div>';
      $("#nx").addEventListener("click", function(){ i++; show(); });
    }); });
  }
  show();
}

function gHunt(){
  var items = shuffle(D.find.para), i = 0, right = 0;
  function show(){
    if(i >= items.length){ ROOT.innerHTML = gHead("🔦 Concept Hunt") + endBox("Hunt complete", right, items.length); bindBack(); bindEnd(gHunt, right); return; }
    var it = items[i];
    ROOT.innerHTML = gHead("🔦 Concept Hunt") + '<div class="hud"><span class="h">Paragraph<b>' + (i + 1) + '/' + items.length + '</b></span><span class="h">Found<b>' + right + '</b></span></div>' +
      '<p class="qtext">Tap the sentence that shows: <span class="hl">' + it.target + '</span></p><div class="para">' + it.sents.map(function(s, j){ return '<span class="sn" role="button" tabindex="0" data-j="' + j + '">' + s + '</span> '; }).join("") + '</div><div id="fo"></div>';
    bindBack();
    var done = false;
    $$(".sn").forEach(function(sn){
      function pick(){
        if(done) return; done = true;
        var j = +sn.dataset.j, ok = j === it.a;
        $$(".sn")[it.a].classList.add("right"); if(!ok) sn.classList.add("wrong");
        if(ok){ right++; P.fd["h" + D.find.para.indexOf(it)] = 1; xpPop(sn, "+15"); }
        mark(it.c, ok); save();
        $("#fo").innerHTML = '<div class="fb ' + (ok ? "ok" : "no") + '" style="margin-top:12px"><h5>' + (ok ? "✅ Found it" : "❌ Look at the green sentence") + '</h5><p>' + it.why + '</p></div><div class="btns" style="margin-top:10px"><button class="btn go" id="nx">Next →</button></div>';
        $("#nx").addEventListener("click", function(){ i++; show(); });
      }
      sn.addEventListener("click", pick); sn.addEventListener("keydown", function(e){ if(e.key === "Enter") pick(); });
    });
  }
  show();
}

function gExplain(){
  var items = shuffle(D.find.explain), i = 0, right = 0;
  function show(){
    if(i >= items.length){ ROOT.innerHTML = gHead("✍️ Explain It") + endBox("Reasons compared", right, items.length); bindBack(); bindEnd(gExplain, right); return; }
    var it = items[i], sel = null;
    ROOT.innerHTML = gHead("✍️ Explain It") + '<div class="hud"><span class="h">Situation<b>' + (i + 1) + '/' + items.length + '</b></span></div>' +
      '<div class="situ"><div class="lbl">Business situation</div>' + it.s + '</div><p class="qtext">1. Which concept is this?</p><div class="opts">' +
      it.o.map(function(o, j){ return '<button class="opt" data-j="' + j + '"><span class="k">' + "ABCD"[j] + '</span><span>' + o + '</span></button>'; }).join("") + '</div>' +
      '<p class="qtext" style="margin-top:12px">2. Why? Point to the words in the situation that prove it (one or two lines).</p><textarea class="ans" style="min-height:70px" aria-label="Your reason"></textarea>' +
      '<div class="btns" style="margin-top:10px"><button class="btn pri" id="ex">Compare with the expert</button></div><div id="fo"></div>';
    bindBack();
    $$(".opt").forEach(function(b){ b.addEventListener("click", function(){ $$(".opt").forEach(function(x){ x.classList.remove("sel"); }); b.classList.add("sel"); sel = +b.dataset.j; }); });
    $("#ex").addEventListener("click", function(){
      var ta = $("textarea"); if(sel == null){ toast("Pick a concept first."); return; } if(words(ta.value) < 3){ toast("Write your reason in a few words."); return; }
      var ok = sel === it.a;
      $$(".opt").forEach(function(x, k){ x.disabled = true; if(k === it.a) x.classList.add("right"); else if(k === sel) x.classList.add("wrong"); });
      if(ok){ right++; P.fd["e" + D.find.explain.indexOf(it)] = 1; }
      mark(it.c, ok); save();
      $("#fo").innerHTML = '<div class="fb ' + (ok ? "ok" : "no") + '"><h5>' + (ok ? "✅ Right concept" : "❌ The concept is " + it.o[it.a]) + '</h5><p><b>Your reason:</b> ' + esc(ta.value) + '</p><p><b>Expert reason:</b> ' + it.why + '</p><p class="muted">Check: did your reason quote the clue words? That is what earns the explanation mark.</p></div>' +
        '<div class="btns" style="margin-top:10px"><button class="btn go" id="nx">Next →</button></div>';
      $("#ex").disabled = true; ta.readOnly = true;
      $("#nx").addEventListener("click", function(){ i++; show(); });
    });
  }
  show();
}

/* ================= MODULE 6: CHAPTER BATTLE ================= */
var bt = null;
function battlePool(){
  var pool = D.questions.filter(function(q){ return /mcq|ar|tf|fill|comp|case/.test(q.t); }).map(function(q){ return q; });
  D.find.mcq.forEach(function(it, i){ pool.push({id:"f" + i, t:"mcq", d:it.d || "M", m:1, c:it.c, q:'<b>Situation:</b> ' + it.s + '<br>' + (it.ask || "Identify the concept."), o:it.o, a:it.a, why:it.why}); });
  return pool;
}
function battle(){
  var best = P.bt.reduce(function(m, b){ return Math.max(m, b.acc); }, 0);
  ROOT.innerHTML = head("battle") + '<div class="bset">' +
    '<div class="card"><h4>Difficulty</h4>' + [["mix","Mixed (recommended)"],["E","Easy"],["M","Moderate"],["C","Challenging"]].map(function(d, i){ return '<label><input type="radio" name="bd" value="' + d[0] + '"' + (i ? "" : " checked") + '> ' + d[1] + '</label>'; }).join("") + '</div>' +
    '<div class="card"><h4>Length</h4>' + [[10,"10 questions · 10 min"],[20,"20 questions · 18 min"],[30,"30 questions · 25 min"]].map(function(d, i){ return '<label><input type="radio" name="bn" value="' + d[0] + '"' + (i === 1 ? " checked" : "") + '> ' + d[1] + '</label>'; }).join("") + '</div>' +
    '<div class="card"><h4>Your record</h4>' + (P.bt.length ? '<p style="margin:0">Attempts: <b>' + P.bt.length + '</b><br>Best accuracy: <b style="color:var(--yel)">' + best + '%</b><br>Last: ' + P.bt[P.bt.length - 1].s + ' / ' + P.bt[P.bt.length - 1].m + '</p>' : '<p class="muted" style="margin:0">No battles yet. Every battle draws a fresh random set.</p>') + '</div></div>' +
    '<div class="card" style="margin-top:14px"><h4>Rules</h4><ul style="margin:0;padding-left:18px"><li>Objective questions only, so every answer is scored automatically.</li><li>Move freely between questions. Use <b>Mark for review</b> to come back.</li><li>The test submits itself when the clock hits zero.</li></ul></div>' +
    '<div class="btns" style="margin-top:16px;justify-content:center"><button class="btn red" id="bGo" style="font-size:20px;padding:14px 30px">⚔️ Start Chapter Battle</button></div>';
  $("#bGo").addEventListener("click", function(){
    var d = $('input[name=bd]:checked').value, n = +$('input[name=bn]:checked').value;
    var pool = battlePool(), pick;
    if(d === "mix"){
      var by = {E:shuffle(pool.filter(function(q){ return q.d === "E"; })), M:shuffle(pool.filter(function(q){ return q.d === "M"; })), C:shuffle(pool.filter(function(q){ return q.d === "C"; }))};
      var want = {E:Math.round(n * .3), C:Math.round(n * .3)}; want.M = n - want.E - want.C;
      pick = by.E.slice(0, want.E).concat(by.M.slice(0, want.M), by.C.slice(0, want.C));
      var rest = shuffle(pool.filter(function(q){ return pick.indexOf(q) < 0; })); while(pick.length < n && rest.length) pick.push(rest.pop());
    } else {
      pick = shuffle(pool.filter(function(q){ return q.d === d; })).slice(0, n);
      if(pick.length < n) pick = pick.concat(shuffle(pool.filter(function(q){ return pick.indexOf(q) < 0; })).slice(0, n - pick.length));
    }
    var secs = {10:600, 20:1080, 30:1500}[n];
    bt = {qs:shuffle(pick), ans:{}, rev:{}, i:0, end:Date.now() + secs * 1000, start:Date.now(), secs:secs, n:n, d:d};
    battleRun();
  });
}
function battleRun(){
  var q = bt.qs[bt.i];
  var html = '<div class="mhead"><span class="big">🏆</span><div class="grow"><h2>Chapter Battle</h2><p>' + esc(D.title) + ' · Question ' + (bt.i + 1) + ' of ' + bt.qs.length + '</p></div></div>' +
    '<div class="battle"><div><div class="qcard"><div class="qmeta"><span class="m">1 mark</span><span class="t">' + TNAME[q.t] + '</span><span class="d d-' + q.d + '">' + DNAME[q.d] + '</span>' + (bt.rev[bt.i] ? '<span class="chip" style="color:var(--yel)">🚩 Marked for review</span>' : '') + '</div>' +
    '<div class="qtext">' + qBody(q) + '</div>' +
    (q.t === "fill" ? '<input class="ans one" type="text" id="bIn" autocomplete="off" aria-label="Your answer" value="' + esc(bt.ans[bt.i] || "") + '">' :
      '<div class="opts">' + optsOf(q).map(function(o, i){ return '<button class="opt' + (bt.ans[bt.i] === i ? " sel" : "") + '" data-i="' + i + '" aria-pressed="' + (bt.ans[bt.i] === i) + '"><span class="k">' + "ABCD"[i] + '</span><span>' + o + '</span></button>'; }).join("") + '</div>') +
    '<div class="btns" style="margin-top:14px;justify-content:space-between"><span class="btns"><button class="btn" id="bPrev"' + (bt.i ? "" : " disabled") + '>← Prev</button><button class="btn warn" id="bRev">' + (bt.rev[bt.i] ? "Unmark review" : "🚩 Mark for review") + '</button><button class="btn sm" id="bClr">Clear</button></span>' +
    '<button class="btn pri" id="bNext">' + (bt.i < bt.qs.length - 1 ? "Save & next →" : "Save") + '</button></div></div></div>' +
    '<aside class="pal card"><div class="clock" id="clk" aria-live="off">--:--</div><div class="muted" style="text-align:center;font-size:12px">time left</div>' +
    '<div class="pgrid">' + bt.qs.map(function(_, i){ var a = bt.ans[i] != null && bt.ans[i] !== "", r = bt.rev[i];
      return '<button data-i="' + i + '" class="' + (a && r ? "ar" : a ? "a" : r ? "r" : "") + (i === bt.i ? " cur" : "") + '" aria-label="Question ' + (i + 1) + (a ? ", answered" : ", not answered") + (r ? ", marked for review" : "") + '">' + (i + 1) + '</button>'; }).join("") + '</div>' +
    '<div class="legend"><span><i style="background:#123d2c;border-color:var(--green)"></i>Answered</span><span><i></i>Not answered</span><span><i style="background:#3a2a05;border-color:var(--yel)"></i>Review</span><span><i style="background:#123d2c;border-color:var(--yel)"></i>Answered + review</span></div>' +
    '<p style="font-size:13px;margin:10px 0">Answered: <b>' + Object.keys(bt.ans).filter(function(k){ return bt.ans[k] != null && bt.ans[k] !== ""; }).length + '</b> / ' + bt.qs.length + '</p>' +
    '<button class="btn red" id="bSub" style="width:100%">Submit battle</button></aside></div>';
  ROOT.innerHTML = html;
  function store(){ var inp = $("#bIn"); if(inp){ var v = inp.value.trim(); if(v) bt.ans[bt.i] = v; else delete bt.ans[bt.i]; } }
  $$(".opt").forEach(function(o){ o.addEventListener("click", function(){ bt.ans[bt.i] = +o.dataset.i; $$(".opt").forEach(function(x){ x.classList.remove("sel"); x.setAttribute("aria-pressed","false"); }); o.classList.add("sel"); o.setAttribute("aria-pressed","true"); refreshPal(); }); });
  $("#bPrev").addEventListener("click", function(){ store(); bt.i--; battleRun(); });
  $("#bNext").addEventListener("click", function(){ store(); if(bt.i < bt.qs.length - 1){ bt.i++; } battleRun(); });
  $("#bRev").addEventListener("click", function(){ store(); bt.rev[bt.i] = !bt.rev[bt.i]; battleRun(); });
  $("#bClr").addEventListener("click", function(){ delete bt.ans[bt.i]; battleRun(); });
  $$(".pgrid button").forEach(function(b){ b.addEventListener("click", function(){ store(); bt.i = +b.dataset.i; battleRun(); }); });
  $("#bSub").addEventListener("click", function(){
    store();
    var un = bt.qs.length - Object.keys(bt.ans).length;
    ask((un ? un + " question" + (un > 1 ? "s are" : " is") + " not answered. " : "") + "Submit the battle now?", "Submit", battleEnd);
  });
  function refreshPal(){ var b = $('.pgrid button[data-i="' + bt.i + '"]'); if(b){ b.className = (bt.rev[bt.i] ? "ar" : "a") + " cur"; } }
  var cur = $(".pgrid .cur"); if(cur && cur.scrollIntoView && window.innerWidth <= 900){ var g = cur.parentNode; g.scrollLeft = cur.offsetLeft - g.clientWidth / 2; }
  tick(); timers.push(setInterval(tick, 1000));
  function tick(){
    var left = (bt.end - Date.now()) / 1000, c = $("#clk"); if(!c) return;
    c.textContent = fmtTime(left); c.classList.toggle("low", left < 60);
    if(left <= 0){ clearTimers(); store(); toast("⏰ Time up! Battle submitted."); battleEnd(); }
  }
}
function battleEnd(){
  clearTimers();
  var used = Math.min(bt.secs, Math.round((Date.now() - bt.start) / 1000));
  var res = bt.qs.map(function(q, i){
    var a = bt.ans[i]; if(a == null || a === "") return 0;
    var ok = q.t === "fill" ? q.acc.some(function(x){ return norm(x) === norm(a); }) : a === correctIdx(q);
    return ok ? 1 : -1;
  });
  var cor = res.filter(function(r){ return r === 1; }).length, inc = res.filter(function(r){ return r === -1; }).length, sk = res.length - cor - inc;
  var per = {};
  bt.qs.forEach(function(q, i){ if(res[i] !== 0) mark(q.c, res[i] === 1); var c = q.c; if(!c) return; per[c] = per[c] || [0,0]; per[c][res[i] === 1 ? 0 : 1]++; });
  var acc = pct(cor, cor + inc), score = pct(cor, res.length);
  P.bt.push({s:cor, m:res.length, acc:score, t:used, at:Date.now()}); if(P.bt.length > 30) P.bt.shift();
  save();
  var strong = Object.keys(per).filter(function(c){ return per[c][0] && !per[c][1]; }), weak = Object.keys(per).filter(function(c){ return per[c][1]; }).sort(function(a, b){ return per[b][1] - per[a][1]; });
  var secs = []; weak.forEach(function(c){ var s = (D.concepts[c] || {}).s; if(s && secs.indexOf(s) < 0) secs.push(s); });
  var rec = [];
  if(weak.length) rec.push('<a class="btn" href="#quick">📖 Quick Revision: ' + secs.slice(0, 3).map(function(s){ var x = D.sections.filter(function(y){ return y.id === s; })[0]; return x ? esc(x.title) : ""; }).filter(Boolean).join(", ") + '</a>');
  if(weak.length) rec.push('<a class="btn" href="#flash">🃏 Flashcards: repeat “revise again” cards</a>');
  if(score < 80) rec.push('<a class="btn" href="#find">🔍 Find the Concept: Spot It round</a>');
  rec.push('<a class="btn" href="#cases">🧪 Case Study Lab: write one full case answer</a>');
  var html = '<div class="mhead"><span class="big">🏆</span><div class="grow"><h2>Battle Report</h2><p>' + esc(D.title) + '</p></div><a class="btn" href="#hub">← Arena</a></div>' +
    '<div class="card trophy"><div style="font-size:54px">' + (score >= 80 ? "🏆" : score >= 50 ? "🥈" : "🛡️") + '</div><div class="big"><span id="bsN">0</span><span style="font-size:.4em;color:var(--dim)"> / ' + res.length + '</span></div>' +
    '<p style="margin:4px 0 0;font-weight:700">' + (score >= 80 ? "Chapter conquered!" : score >= 50 ? "Good fight. Fix the weak spots below." : "Regroup, revise, and battle again.") + '</p></div>' +
    '<div class="res">' + [["Total score", cor],["Maximum marks", res.length],["Accuracy", acc + "%"],["Correct", cor],["Incorrect", inc],["Skipped", sk],["Time taken", fmtTime(used)]].map(function(s){ return '<div class="st"><b>' + s[1] + '</b><span>' + s[0] + '</span></div>'; }).join("") + '</div>' +
    '<p class="muted" style="margin:-4px 0 12px;font-size:13px">Accuracy counts only the questions you attempted.</p>' +
    '<div class="bset"><div class="card"><h4>💪 Strongest concepts</h4>' + (strong.length ? '<div class="chips">' + strong.map(function(c){ return '<span class="chip strong">' + esc(cname(c)) + '</span>'; }).join("") + '</div>' : '<p class="muted" style="margin:0">None fully correct this time.</p>') + '</div>' +
    '<div class="card"><h4>⚠️ Weak concepts</h4>' + (weak.length ? '<div class="chips">' + weak.map(function(c){ return '<span class="chip weak">' + esc(cname(c)) + ' (' + per[c][1] + ' missed)</span>'; }).join("") + '</div>' : '<p class="muted" style="margin:0">No weak concepts. Excellent!</p>') + '</div></div>' +
    '<div class="card" style="margin-top:14px"><h4>Recommended next</h4><div class="btns">' + rec.join("") + '</div></div>' +
    '<div class="btns" style="justify-content:center;margin:16px 0"><button class="btn red" id="bAgain">⚔️ Retake with new questions</button></div>' +
    '<h3 style="font-family:var(--head);font-weight:400;font-size:24px">Answer review</h3>' +
    bt.qs.map(function(q, i){
      var a = bt.ans[i], st = res[i] === 1 ? "ok" : res[i] === -1 ? "no" : "sk";
      var yours = a == null || a === "" ? "Not attempted" : q.t === "fill" ? esc(a) : "ABCD"[a] + ". " + optsOf(q)[a];
      return '<div class="qcard rv ' + st + '"><div class="qmeta"><span class="m">Q' + (i + 1) + '</span><span class="t">' + TNAME[q.t] + '</span><span>' + (st === "ok" ? "✅" : st === "no" ? "❌" : "⏭️") + '</span></div><div class="qtext" style="font-size:15.5px">' + qBody(q) + '</div>' +
        '<p style="margin:4px 0"><b>Your answer:</b> ' + yours + '</p><p style="margin:4px 0"><b>Correct:</b> ' + rightText(q) + '</p><p class="muted" style="margin:4px 0">' + q.why + '</p></div>';
    }).join("");
  ROOT.innerHTML = html; window.scrollTo(0, 0);
  countUp($("#bsN"), cor);
  $("#bAgain").addEventListener("click", function(){ bt = null; battle(); });
}

/* ================= boot ================= */
window.NFArena = {
  register:function(data){ D = data; },
  boot:function(){
    ROOT = document.getElementById("app");
    var id = (new URLSearchParams(location.search).get("ch") || window.NF_ARENA_CH || "").toLowerCase();
    if(!/^[a-z0-9-]{2,40}$/.test(id)){ ROOT.innerHTML = '<div class="err"><h2>Choose a chapter</h2><p>Open the Revision Arena from a chapter on the <a href="../">Notesflix 101 home page</a>.</p></div>'; return; }
    var s = document.createElement("script"); s.src = "data/" + id + ".js?v=" + (window.NF_ARENA_V || 1);
    s.onload = function(){
      if(!D || D.id !== id){ ROOT.innerHTML = '<div class="err"><h2>Content not found</h2></div>'; return; }
      document.title = "Revision Arena · " + D.title + " · Class " + D.cls + " " + D.subject + " | Notesflix 101";
      $("#crumbCh").textContent = "Class " + D.cls + " · " + D.title;
      load(); initP();
      window.addEventListener("hashchange", route);
      route();
    };
    s.onerror = function(){ ROOT.innerHTML = '<div class="err"><h2>The Revision Arena for this chapter is coming soon.</h2><p><a href="../">Back to Notesflix 101</a></p></div>'; };
    document.head.appendChild(s);
  },
  _test:{ state:function(){ return S; }, data:function(){ return D; } }
};
})();
