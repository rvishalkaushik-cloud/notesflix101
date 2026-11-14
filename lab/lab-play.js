/* Notesflix 101 · Accountancy Lab · activities, case studies, games, revision, chapter test and performance report */
(function(){
"use strict";
var X = window.NFLX, U = X.util, $ = U.$, $$ = U.$$, esc = U.esc;
function D(){ return X.D(); } function P(){ return X.P(); }
var AR = ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is not the correct explanation of A.","A is true, but R is false.","A is false, but R is true."];
var timers = [];
function clearTimers(){ timers.forEach(clearInterval); timers = []; }
window.addEventListener("hashchange", clearTimers);

/* ================= activities (Class 7 mode) ================= */
X.activity = function(box, a){
  if(a.type === "sort") sortAct(box, a); else if(a.type === "minute") minuteAct(box, a);
};
function sortAct(box, a, preset){
  var place = preset || {}, sel = null;
  box.innerHTML = '<h3>🧲 ' + esc(a.title) + '</h3><p class="muted">Drag each card into the right box. On a phone: tap a card, then tap a box.</p>' +
    '<div class="pool" data-bin="-1"></div><div class="bins">' + a.bins.map(function(b, i){ return '<div class="bin" data-bin="' + i + '"><h4>' + esc(b) + '</h4><div class="bz"></div></div>'; }).join("") + '</div>' +
    '<div class="btns"><button class="btn ok ck">Check</button><button class="btn ghost rs">Reset</button></div><div class="afb"></div>';
  function chip(it, i){ return '<button class="dchip" draggable="true" data-i="' + i + '">' + esc(it.t) + '</button>'; }
  function paint(){
    $(".pool", box).innerHTML = a.items.map(function(it, i){ return place[i] == null ? chip(it, i) : ""; }).join("");
    $$(".bin", box).forEach(function(b){ var n = +b.dataset.bin; $(".bz", b).innerHTML = a.items.map(function(it, i){ return place[i] === n ? chip(it, i) : ""; }).join(""); });
    $$(".dchip", box).forEach(function(c){
      c.ondragstart = function(e){ e.dataTransfer.setData("text/plain", c.dataset.i); };
      c.onclick = function(e){ e.stopPropagation(); var z = c.closest("[data-bin]"); if(sel != null && sel !== +c.dataset.i && z){ put(sel, +z.dataset.bin); sel = null; return; } $$(".dchip.sel", box).forEach(function(x){ x.classList.remove("sel"); }); sel = +c.dataset.i; c.classList.add("sel"); };
    });
  }
  $$("[data-bin]", box).forEach(function(z){
    z.ondragover = function(e){ e.preventDefault(); z.classList.add("over"); }; z.ondragleave = function(){ z.classList.remove("over"); };
    z.ondrop = function(e){ e.preventDefault(); z.classList.remove("over"); var i = +e.dataTransfer.getData("text/plain"); put(i, +z.dataset.bin); };
    z.onclick = function(){ if(sel != null){ put(sel, +z.dataset.bin); sel = null; } };
  });
  function put(i, b){ if(b < 0) delete place[i]; else place[i] = b; paint(); $(".afb", box).innerHTML = ""; }
  $(".rs", box).onclick = function(){ place = {}; paint(); $(".afb", box).innerHTML = ""; };
  $(".ck", box).onclick = function(){
    var right = 0, miss = [];
    a.items.forEach(function(it, i){ var c = $('.dchip[data-i="' + i + '"]', box), ok = place[i] === it.b; if(ok) right++; else miss.push(it);
      if(c && place[i] != null){ c.classList.add(ok ? "right" : "wrong"); } U.mark(a.c, ok, ok ? null : a.c); });
    var all = right === a.items.length; var k = P().ka[a.id] = P().ka[a.id] || {}; k.best = Math.max(k.best || 0, U.pct(right, a.items.length)); U.save();
    $(".afb", box).innerHTML = all ? U.fb(true, {why:"All " + right + " cards are in the right box."}) : '<div class="fb bad"><b>' + right + ' of ' + a.items.length + ' correct.</b><ul>' + miss.map(function(it){ return '<li><b>' + esc(it.t) + '</b> → ' + esc(a.bins[it.b]) + '. ' + esc(it.why) + '</li>'; }).join("") + '</ul></div>';
    if(all) U.xpPop(this, "+30 XP");
  };
  paint();
}
function minuteAct(box, a){
  var k = P().ka[a.id] || {};
  box.innerHTML = '<h3>⏱ ' + esc(a.title) + '</h3><p class="muted">' + a.items.length + ' quick questions in ' + a.secs + ' seconds.' + (k.best != null ? ' Your best: ' + k.best + '/' + a.items.length + '.' : '') + '</p><button class="btn ok st">Start the clock</button><div class="mbox"></div>';
  $(".st", box).onclick = function(){
    this.remove(); var i = 0, right = 0, left = a.secs, log = [], qs = U.shuffle(a.items), M = $(".mbox", box);
    var tm = setInterval(function(){ left--; var t = $(".mt", box); if(t) t.textContent = "⏱ " + left + " s"; if(left <= 0) end(); }, 1000); timers.push(tm);
    function show(){ if(i >= qs.length) return end(); var q = qs[i], o = U.shuffle(q.opts.map(function(t, j){ return {t:t, ok:j === q.a}; }));
      M.innerHTML = '<div class="mhead"><span class="mt">⏱ ' + left + ' s</span><span>' + (i + 1) + ' / ' + qs.length + '</span><span>✓ ' + right + '</span></div><p class="q">' + esc(q.q) + '</p><div class="opts">' + o.map(function(x, j){ return '<button class="opt" data-j="' + j + '">' + esc(x.t) + '</button>'; }).join("") + '</div>';
      $$(".opt", M).forEach(function(b){ b.onclick = function(){ var ok = o[+b.dataset.j].ok; if(ok) right++; log.push({q:q, ok:ok}); U.mark(a.c, ok); b.classList.add(ok ? "right" : "wrong"); i++; setTimeout(show, 280); }; }); }
    function end(){ clearInterval(tm); var kk = P().ka[a.id] = P().ka[a.id] || {}; kk.best = Math.max(kk.best || 0, right); U.save();
      M.innerHTML = '<div class="score ' + (right === qs.length ? "full" : right >= qs.length / 2 ? "mid" : "low") + '"><b>' + right + ' / ' + qs.length + '</b><span>' + (left > 0 ? "Finished with " + left + " s left" : "Time up") + '</span><button class="btn sm again">Play again</button></div><ul class="rev">' + qs.map(function(q){ return '<li>' + esc(q.q) + ' <b>' + esc(q.opts[q.a]) + '</b></li>'; }).join("") + '</ul>';
      $(".again", M).onclick = function(){ minuteAct(box, a); }; i = qs.length + 1; }
    show();
  };
}

/* ================= 13 case studies ================= */
X.route("cases", function(R){
  var d = D();
  R.innerHTML = U.head("cases", "A real-world business situation. Answer each part; every answer is checked with an explanation.") + d.cases.map(function(c){
    return '<article class="card case"><div class="chips">' + X.tagLabel(c.tag) + '</div><h3>💼 ' + esc(c.title) + '</h3><div class="story">' + c.story + '</div>' + c.qs.map(function(q, i){
      var id = c.id + "q" + i;
      if(q.type === "mcq") return '<div class="cq"><span class="qn">Q' + (i + 1) + '</span>' + U.mcqHTML(q, id) + '</div>';
      return '<div class="cq"><span class="qn">Q' + (i + 1) + '</span><p class="q">' + esc(q.q) + '</p><div class="irow"><input class="sin" data-cq="' + id + '" placeholder="' + (q.type === "ratio" ? "e.g. 2:1:1" : "₹") + '"><button class="btn ok" data-ck="' + id + '">Check</button></div><div class="fbx" data-fb="' + id + '"></div></div>'; }).join("") + '</article>'; }).join("") + U.foot("cases");
  d.cases.forEach(function(c){ c.qs.forEach(function(q, i){
    var id = c.id + "q" + i;
    if(q.type === "mcq") return U.wireMcq(R, q, P().cs, id, q.c, fin);
    var inp = $('[data-cq="' + id + '"]', R), btn = $('[data-ck="' + id + '"]', R), box = $('[data-fb="' + id + '"]', R);
    if(P().cs[id] != null){ inp.value = P().cs[id]; }
    function chk(){ var r = U.check(q.type === "ratio" ? "ratio" : "num", inp.value, q.ans); P().cs[id] = inp.value; U.mark(q.c, r.ok, r.ok ? null : q.c); U.save();
      inp.classList.remove("good","bad"); inp.classList.add(r.ok ? "good" : "bad");
      box.innerHTML = U.fb(r.ok, r.ok ? {why:q.why} : {what:"You entered " + esc(inp.value || "nothing") + ".", whyWrong:"It does not match the facts in the case.", why:q.why, avoid:"Underline each figure in the case and decide which partners it concerns."}); fin(); }
    btn.onclick = chk; inp.onkeydown = function(e){ if(e.key === "Enter") chk(); };
  }); });
  function fin(){ var all = d.cases.every(function(c){ return c.qs.every(function(q, i){ return P().cs[c.id + "q" + i] != null; }); }); if(all) U.done("cases"); }
});

/* ================= 14 games ================= */
var GAMES = [
  {k:"dc", n:"Debit or Credit?", e:"⇄", col:"#7b3fe4", obj:"Choose the correct debit and credit accounts for each transaction of this chapter.", c:"entries"},
  {k:"detective", n:"Accounting Detective", e:"🔍", col:"#2563eb", obj:"Spot the error in each journal entry.", c:"entries"},
  {k:"bs", n:"Balance Sheet Builder", e:"📊", col:"#0f9d7a", obj:"Put every item in the right place.", c:"capital"},
  {k:"race", n:"Journal Entry Race", e:"🏁", col:"#8b2fc9", obj:"Pick the right entry and type the amount before the clock runs out.", c:"entries"},
  {k:"missing", n:"Missing Figure Mystery", e:"❓", col:"#d61f69", obj:"Find the missing amount with the chapter's formulas.", c:"hidden"},
  {k:"profit", n:"Profit Master", e:"💹", col:"#d97706", obj:"Keep the running figure right as each adjustment arrives.", c:"reval"},
  {k:"escape", n:"Accounting Escape Room", e:"🔐", col:"#4338ca", obj:"Solve a puzzle at each door to unlock the next room.", c:"ratio"},
  {k:"casegame", n:"Case Study Challenge", e:"💼", col:"#0284c7", obj:"Solve a real business scenario against the clock.", c:"goodwill"}
];
X.gameList = function(){ var G = (X.D() && X.D().games) || {}; return GAMES.map(function(g){ var o = {}; for(var k in g) o[k] = g[k]; if(G.names && G.names[g.k]) o.n = G.names[g.k]; if(G.obj && G.obj[g.k]) o.obj = G.obj[g.k]; if(G.cc && G.cc[g.k]) o.c = G.cc[g.k]; return o; }); };
X.route("games", function(R, sub){
  var GL = X.gameList(), g = GL.filter(function(x){ return x.k === sub; })[0];
  if(!g){
    R.innerHTML = U.head("games", "Every game tests a learning objective of this chapter. Points, streak bonuses, limited hints and personal bests.") +
      '<div class="ggrid">' + GL.map(function(x){ var s = P().games[x.k] || {}; return '<a class="gcard" style="--g:' + x.col + '" href="#games/' + x.k + '"><span class="ge">' + x.e + '</span><h3>' + esc(x.n) + '</h3><p>' + esc(x.obj) + '</p><small>' + (s.plays ? "Best " + s.best + " pts · played " + s.plays + "×" : "Not played yet") + '</small></a>'; }).join("") + '</div>' +
      '<div class="card"><h3>🏅 Badges</h3><div class="badges">' + badgeList() + '</div></div>' + U.foot("games");
    return;
  }
  R.innerHTML = '<a class="btn sm ghost" href="#games">← All games</a><div class="card game" style="--g:' + g.col + '"><div class="gtitle"><span class="ge">' + g.e + '</span><div><h2>' + esc(g.n) + '</h2><p>🎯 Learning objective: ' + esc(g.obj) + '</p></div></div><div id="gbox"></div></div>';
  var B = $("#gbox"), d = D(), G = d.games;
  if(g.k === "bs") return bsGame(B, G.bs, g);
  var items, cfg = {key:g.k, hints:3};
  if(g.k === "dc") items = U.shuffle(G.dc).slice(0, 10).map(function(x){ var o = U.shuffle([x.ok].concat(x.bad)); return {kind:"choice", q:x.t, opts:o, a:o.indexOf(x.ok), why:"Correct entry: " + x.ok + ".", c:x.c}; });
  if(g.k === "detective") items = U.shuffle(d.mistakes).map(function(m){ var o = U.shuffle(m.opts.map(function(t, i){ return {t:t, ok:i === m.a}; })); return {kind:"choice", pre:X.shownWork(m), q:m.q + " What is wrong?", opts:o.map(function(x){ return x.t; }), a:o.map(function(x){ return x.ok; }).indexOf(true), why:m.why, c:m.c}; });
  if(g.k === "race"){ cfg.timer = 120; items = U.shuffle(G.race).map(function(x){ var o = U.shuffle([x.ok].concat(x.bad)); return {kind:"combo", q:x.t, opts:o, a:o.indexOf(x.ok), ans:x.amt, why:x.ok + " · ₹" + U.inr(x.amt), c:x.c}; }); cfg.auto = true; }
  if(g.k === "missing") items = U.shuffle(G.missing).map(function(x){ return {kind:x.kind, q:x.q, ans:x.ans, why:x.why, hint:x.why.split(".")[0].replace(/[\d,]+(?=\s*$)/, "?"), c:x.c}; });
  if(g.k === "profit"){ var run = G.profit.from || 0, PF = G.profit, plus = PF.plus || "gain", minus = PF.minus || "loss"; items = PF.steps.map(function(s){ run += s.v; return {kind:"num", pre:'<p class="muted">' + esc(PF.base) + ' ' + esc(PF.start) + '</p>', q:s.t + " → " + (PF.ask || "running revaluation result?"), ans:run, signed:true, why:(s.why ? s.why + " " : "") + "Change " + (s.v > 0 ? "+" : "−") + "₹" + U.inr(Math.abs(s.v)) + " (" + (s.v > 0 ? plus : minus) + "). Running figure " + (run < 0 ? "−" : "") + "₹" + U.inr(Math.abs(run)) + ".", hint:s.hint || (s.v > 0 ? "This is a " + plus + ": add it." : "This is a " + minus + ": subtract it."), c:PF.c || g.c}; });
    items.push({kind:"num", q:PF.final.q, ans:PF.final.ans, why:PF.final.why || "", hint:PF.final.hint || "", c:PF.c || g.c}); }
  if(g.k === "escape"){ cfg.retry = true; cfg.timer = 480; cfg.escape = true; items = G.escape.locks.map(function(l){ return {kind:"num", pre:'<div class="door"><span>🚪</span><b>' + esc(l.room) + '</b></div>', q:l.q, ans:l.ans, why:"Code " + l.ans + ". " + l.hint, hint:l.hint, c:l.c}; }); }
  if(g.k === "casegame"){ cfg.timer = 360; var c0 = d.cases[0]; items = c0.qs.map(function(q){ return q.type === "mcq" ? {kind:"choice", pre:'<div class="story sm">' + c0.story + '</div>', q:q.q, opts:q.opts, a:q.a, why:q.why, c:q.c} : {kind:q.type === "ratio" ? "ratio" : "num", pre:'<div class="story sm">' + c0.story + '</div>', q:q.q, ans:q.ans, why:q.why, c:q.c}; }); }
  intro(B, g, function(){ quiz(B, g, items, cfg); });
});
function entryTable(rows){ return '<table class="acct jt wrongent"><tbody>' + rows.map(function(r){ return '<tr class="' + (r[3] !== "" && r[3] != null ? "iscr" : "") + '"><td class="pc">' + esc(r[0]) + '</td><td>' + r[1] + '</td><td class="num">' + U.inr(r[2]) + '</td><td class="num">' + U.inr(r[3]) + '</td></tr>'; }).join("") + '</tbody></table>'; }
function intro(B, g, start){
  var s = P().games[g.k] || {};
  B.innerHTML = '<div class="gintro"><ul><li>✅ 10 points for each correct answer</li><li>🔥 +5 streak bonus from the 3rd correct answer in a row</li><li>💡 3 hints per game (a hinted answer scores half)</li>' + (g.k === "race" ? '<li>⏱ 2 minutes on the clock</li>' : g.k === "escape" ? '<li>🔐 Doors stay locked until you get the code; each wrong try costs 5 points; 8 minutes</li>' : g.k === "casegame" ? '<li>⏱ 6 minutes</li>' : '') + '</ul>' + (s.best != null ? '<p>Personal best: <b>' + s.best + ' pts</b></p>' : '') + '<button class="btn ok big">▶ Play</button></div>';
  $(".btn", B).onclick = start;
}
function quiz(B, g, items, cfg){
  var st = {i:0, score:0, streak:0, best:0, right:0, hints:cfg.hints, used:false, log:[], tries:0}, left = cfg.timer || 0, t0 = Date.now(), over = false, tm = null;
  if(cfg.timer){ tm = setInterval(function(){ left--; var e = $(".gtm", B); if(e){ e.textContent = "⏱ " + U.fmtTime(left); e.classList.toggle("warn", left <= 20); } if(left <= 0) end(true); }, 1000); timers.push(tm); }
  function hud(){ return '<div class="hud"><span>' + (cfg.escape ? "🚪 Door " : "Q ") + (st.i + 1) + '/' + items.length + '</span><span>⭐ ' + st.score + '</span><span class="stk' + (st.streak >= 3 ? " hot" : "") + '">🔥 ' + st.streak + '</span><span>💡 ' + st.hints + '</span>' + (cfg.timer ? '<span class="gtm">⏱ ' + U.fmtTime(left) + '</span>' : '') + '</div><div class="gbar"><i style="width:' + U.pct(st.i, items.length) + '%"></i></div>'; }
  function show(){
    if(over) return; if(st.i >= items.length) return end(false);
    var it = items[st.i]; st.used = false; st.tries = 0;
    var body = it.kind === "choice" || it.kind === "combo" ? '<div class="opts">' + it.opts.map(function(o, j){ return '<button class="opt" data-j="' + j + '"><span class="ol">' + "ABCD"[j] + '</span>' + esc(o) + '</button>'; }).join("") + '</div>' : '';
    if(it.kind === "combo") body += '<label class="amtl">Amount (₹) <input class="sin" id="gamt" inputmode="decimal"></label>';
    if(it.kind !== "choice") body += '<div class="irow">' + (it.kind !== "combo" ? '<input class="sin" id="gin" placeholder="' + (it.kind === "ratio" ? "a:b:c" : it.kind === "frac" ? "a/b" : it.signed ? "e.g. −2,500 or 4,000" : "₹") + '">' : '') + '<button class="btn ok" id="gsub">Submit</button></div>';
    B.innerHTML = hud() + '<div class="gq ' + (cfg.escape ? "esc" : "") + '">' + (it.pre || "") + '<p class="q">' + esc(it.q) + '</p>' + body + '<div class="gact"><button class="btn sm ghost" id="ghint"' + (st.hints ? "" : " disabled") + '>💡 Hint</button></div><div id="gfb"></div></div>';
    var chosen = null;
    $$(".opt", B).forEach(function(b){ b.onclick = function(){ if(it.kind === "choice") answer(+b.dataset.j); else { $$(".opt", B).forEach(function(x){ x.classList.remove("sel"); }); b.classList.add("sel"); chosen = +b.dataset.j; var a = $("#gamt", B); if(a) a.focus(); } }; });
    var gi = $("#gin", B) || $("#gamt", B); if(gi){ gi.focus(); gi.onkeydown = function(e){ if(e.key === "Enter") $("#gsub", B).click(); }; }
    if($("#gsub", B)) $("#gsub", B).onclick = function(){ answer(it.kind === "combo" ? chosen : null); };
    $("#ghint", B).onclick = function(){
      if(!st.hints) return; st.hints--; st.used = true; this.disabled = true;
      if(it.opts){ var wrong = it.opts.map(function(o, j){ return j; }).filter(function(j){ return j !== it.a; }); U.shuffle(wrong).slice(0, 2).forEach(function(j){ var b = $('.opt[data-j="' + j + '"]', B); if(b){ b.disabled = true; b.classList.add("dim"); } }); }
      if(it.kind !== "choice") $("#gfb", B).innerHTML = '<div class="fb tip">💡 ' + esc(it.hint || "Write the formula first, then substitute the figures.") + '</div>';
      var hd = $(".hud", B); if(hd) hd.outerHTML = hud().split('<div class="gbar">')[0]; };
  }
  function answer(j){
    var it = items[st.i], ok;
    if(it.kind === "choice") ok = j === it.a;
    else if(it.kind === "combo"){ if(j == null){ $("#gfb", B).innerHTML = '<div class="fb tip">Choose an entry first.</div>'; return; } ok = j === it.a && U.check("num", $("#gamt", B).value, it.ans).ok; }
    else { var raw = $("#gin", B).value; if(!raw.trim()) return; ok = U.check(it.kind, raw, it.ans).ok; }
    st.tries++;
    if(!ok && cfg.retry){ st.score = Math.max(0, st.score - 5); st.streak = 0; U.mark(it.c, false, it.c); $("#gfb", B).innerHTML = '<div class="fb bad">🔒 The lock does not open. ' + (st.tries >= 2 ? "Hint: " + esc(it.hint) : "Check your working and try again.") + '</div>'; var q = $(".gq", B); q.classList.remove("shake"); void q.offsetWidth; q.classList.add("shake"); $(".hud", B).outerHTML = hud().split('<div class="gbar">')[0]; return; }
    U.mark(it.c, ok, ok ? null : it.c);
    if(ok){ st.right++; st.streak++; st.best = Math.max(st.best, st.streak); var pts = (st.used ? 5 : 10) + (st.streak >= 3 ? 5 : 0); st.score += pts; } else st.streak = 0;
    st.log.push({it:it, ok:ok});
    $$(".opt", B).forEach(function(b, k){ b.disabled = true; if(it.opts && k === it.a) b.classList.add("right"); if(j === k && !ok) b.classList.add("wrong"); });
    $$("#gin,#gamt,#gsub,#ghint", B).forEach(function(x){ x.disabled = true; });
    $("#gfb", B).innerHTML = (ok ? '<div class="fb good"><b>✓ ' + (cfg.escape ? "🔓 Door unlocked!" : "Correct!") + '</b> ' + esc(it.why) + '</div>' : '<div class="fb bad"><b>✗ Not quite.</b> ' + esc(it.why) + '</div>') + (cfg.auto ? '' : '<button class="btn" id="gnx">' + (st.i + 1 < items.length ? "Next →" : "Finish") + '</button>');
    if(ok) U.xpPop($("#gfb", B), "+" + ((st.used ? 5 : 10) + (st.streak >= 3 ? 5 : 0)));
    st.i++;
    if(cfg.auto) setTimeout(show, ok ? 650 : 1500); else { $("#gnx", B).onclick = show; $("#gnx", B).focus(); }
  }
  function end(timeUp){
    if(over) return; over = true; clearInterval(tm);
    var s = P().games[cfg.key] = P().games[cfg.key] || {}, pb = st.score > (s.best || 0);
    s.plays = (s.plays || 0) + 1; s.best = Math.max(s.best || 0, st.score); s.last = st.score; s.acc = U.pct(st.right, st.log.length || items.length); U.save();
    U.done("games"); U.badge("firstgame", "First game played");
    if(st.best >= 5) U.badge("streak5", "5-answer streak");
    if(st.right === items.length && !timeUp) U.badge("perfect-" + cfg.key, "Perfect: " + g.n);
    if(cfg.escape && st.right === items.length) U.badge("escape", "Escape artist");
    if(cfg.key === "race" && st.right >= 5) U.badge("speed", "Speed accountant");
    var wrong = st.log.filter(function(l){ return !l.ok; });
    B.innerHTML = '<div class="gend"><h3>' + (cfg.escape ? (st.right === items.length ? "🔓 You escaped!" : "⏱ Time up: still locked in") : timeUp ? "⏱ Time up!" : "🏁 Game over") + '</h3><div class="kpis"><div><small>Score</small><b>' + st.score + '</b></div><div><small>Correct</small><b>' + st.right + '/' + items.length + '</b></div><div><small>Best streak</small><b>🔥 ' + st.best + '</b></div><div><small>Personal best</small><b>' + s.best + (pb ? " 🆕" : "") + '</b></div></div>' +
      (wrong.length ? '<h4>Review your mistakes</h4><ul class="rev">' + wrong.map(function(l){ return '<li><b>' + esc(l.it.q) + '</b><br>' + esc(l.it.why) + '</li>'; }).join("") + '</ul>' : '<p>🎉 No mistakes.</p>') +
      '<div class="btns"><button class="btn ok" id="grp">↻ Replay</button><a class="btn ghost" href="#games">All games</a></div></div>';
    $("#grp", B).onclick = function(){ X.keepScroll = true; var h = location.hash; location.hash = "#games"; setTimeout(function(){ location.hash = h; }, 0); };
  }
  show();
}
function bsGame(B, cfg, g){
  intro(B, g, function(){
    var place = {}, sel = null, hints = 3, t0 = Date.now();
    B.innerHTML = '<p>' + esc(cfg.title) + '. Drag each item into the right box (on a phone: tap the item, then tap a box).</p><div class="pool" data-bin="-1"></div><div class="bins three">' + cfg.bins.map(function(b, i){ return '<div class="bin" data-bin="' + i + '"><h4>' + esc(b) + ' <span class="bt" data-t="' + i + '"></span></h4><div class="bz"></div></div>'; }).join("") + '</div><div class="btns"><button class="btn ok ck">Check</button><button class="btn ghost hn">💡 Hint (3)</button></div><div class="afb"></div>';
    function chip(it, i){ return '<button class="dchip" draggable="true" data-i="' + i + '">' + esc(it.t) + (it.amt ? ' <b>₹' + U.inr(it.amt) + '</b>' : '') + '</button>'; }
    function paint(){ $(".pool", B).innerHTML = cfg.items.map(function(it, i){ return place[i] == null ? chip(it, i) : ""; }).join("");
      $$(".bin", B).forEach(function(b){ var n = +b.dataset.bin, t = 0; $(".bz", b).innerHTML = cfg.items.map(function(it, i){ if(place[i] === n){ t += it.amt; return chip(it, i); } return ""; }).join(""); var bt = $('[data-t="' + n + '"]', B); if(bt) bt.textContent = cfg.total && n < 2 && t ? "₹" + U.inr(t) : ""; });
      $$(".dchip", B).forEach(function(c){ c.ondragstart = function(e){ e.dataTransfer.setData("text/plain", c.dataset.i); }; c.onclick = function(e){ e.stopPropagation(); var z = c.closest("[data-bin]"); if(sel != null && sel !== +c.dataset.i && z){ put(sel, +z.dataset.bin); sel = null; return; } $$(".dchip.sel", B).forEach(function(x){ x.classList.remove("sel"); }); sel = +c.dataset.i; c.classList.add("sel"); }; }); }
    $$("[data-bin]", B).forEach(function(z){ z.ondragover = function(e){ e.preventDefault(); }; z.ondrop = function(e){ e.preventDefault(); put(+e.dataTransfer.getData("text/plain"), +z.dataset.bin); }; z.onclick = function(){ if(sel != null){ put(sel, +z.dataset.bin); sel = null; } }; });
    function put(i, b){ if(b < 0) delete place[i]; else place[i] = b; paint(); }
    $(".hn", B).onclick = function(){ if(!hints) return; var i = cfg.items.map(function(x, k){ return k; }).filter(function(k){ return place[k] !== cfg.items[k].b; })[0]; if(i == null) return; place[i] = cfg.items[i].b; hints--; this.textContent = "💡 Hint (" + hints + ")"; if(!hints) this.disabled = true; paint(); };
    $(".ck", B).onclick = function(){
      var right = 0, miss = [];
      cfg.items.forEach(function(it, i){ var ok = place[i] === it.b; if(ok) right++; else miss.push(it); U.mark(cfg.c || g.c, ok, ok ? null : (cfg.c || g.c)); var c = $('.dchip[data-i="' + i + '"]', B); if(c && place[i] != null) c.classList.add(ok ? "right" : "wrong"); });
      var sc = right * 10 - (3 - hints) * 5, s = P().games.bs = P().games.bs || {}; s.plays = (s.plays || 0) + 1; s.best = Math.max(s.best || 0, sc); s.last = sc; U.save(); U.done("games"); U.badge("firstgame", "First game played");
      if(right === cfg.items.length){ U.badge("builder", "Balance Sheet builder"); }
      $(".afb", B).innerHTML = '<div class="score ' + (right === cfg.items.length ? "full" : "mid") + '"><b>' + sc + ' pts</b><span>' + right + ' of ' + cfg.items.length + ' items placed correctly · time ' + U.fmtTime((Date.now() - t0) / 1000) + '</span>' + (right === cfg.items.length ? '<span>' + (cfg.total ? 'Both sides total ₹' + U.inr(cfg.total) + '. Balanced! 🎉' : 'Every item is in the right box! 🎉') + '</span>' : '') + '</div>' +
        (miss.length ? '<ul class="rev">' + miss.map(function(it){ return '<li><b>' + esc(it.t) + '</b> → ' + esc(cfg.bins[it.b]) + (it.why ? '. ' + esc(it.why) : '') + '</li>'; }).join("") + '</ul>' : '') + '<button class="btn sm" id="bre">Replay</button>';
      $("#bre", B).onclick = function(){ bsGame(B, cfg, g); };
    };
    paint();
  });
}
function badgeList(){
  var all = [["firstgame","First game played"],["streak5","5-answer streak"],["builder","Balance Sheet builder"],["escape","Escape artist"],["speed","Speed accountant"],["firsttry","First-try perfect sheet"],["examace","Exam-mode ace"],["quickrev","Quick revision done"],["testpass","Chapter test: 80%+"]];
  var S = X.S();
  return all.map(function(b){ var on = S.badges[b[0]]; return '<span class="badge' + (on ? " on" : "") + '">' + (on ? "🏅" : "🔒") + ' ' + esc(b[1]) + '</span>'; }).join("");
}

/* ================= 15 revision ================= */
X.route("revision", function(R, sub){
  var d = D(), V = d.revision, tab = sub || "summary";
  var TABS = [["summary","One-page summary"],["defs","Definitions"],["flash","Formula flashcards"],["treat","Treatments"],["mistakes","Common mistakes"],["fib","Fill in the blanks"],["mcq","MCQs"],["ar","Assertion–Reason"],["more","Case studies & numericals"]];
  R.innerHTML = U.head("revision", "Revise the whole chapter here, or press Quick Revision for a guided 12-minute run.") +
    '<div class="qrbar"><button class="btn big ok" id="qrv">⚡ QUICK REVISION · 12 min</button><span class="muted">Summary → flashcards → treatments → questions → fill-ups, with a timer.</span></div>' +
    '<div class="tabs">' + TABS.map(function(t){ return '<a class="tab' + (tab === t[0] ? " on" : "") + '" href="#revision/' + t[0] + '">' + t[1] + '</a>'; }).join("") + '</div><div id="rvb" class="card"></div>' + U.foot("revision");
  var B = $("#rvb");
  ({summary:sum, defs:defs, flash:flash, treat:treat, mistakes:mist, fib:fib, mcq:mcq, ar:ar, more:more})[tab](B);
  $("#qrv").onclick = function(){ quickRev(R); };
  function sum(b){ b.innerHTML = '<h3>One-page summary</h3><ol class="sumlist">' + V.summary.map(function(s){ return '<li>' + esc(s) + '</li>'; }).join("") + '</ol><h4>Formulas</h4><table class="tt"><tbody>' + d.formulas.map(function(f){ return '<tr><td><b>' + esc(f.n) + '</b></td><td>' + esc(f.f) + '</td><td class="muted">🧠 ' + esc(f.code) + '</td></tr>'; }).join("") + '</tbody></table>'; }
  function defs(b){ b.innerHTML = '<h3>Important definitions</h3><dl class="defs">' + V.defs.map(function(x){ return '<dt>' + esc(x[0]) + '</dt><dd>' + esc(x[1]) + '</dd>'; }).join("") + '</dl>'; }
  function flash(b){
    var seen = P().rev.fc = P().rev.fc || {};
    b.innerHTML = '<h3>Formula flashcards</h3><p class="muted">Tap a card to flip it. ' + Object.keys(seen).length + ' of ' + V.flash.length + ' flipped.</p><div class="flash">' + V.flash.map(function(f, i){ return '<button class="fc' + (seen[i] ? " seen" : "") + '" data-i="' + i + '"><span class="fr">' + esc(f.f) + '</span><span class="bk">' + esc(f.b) + '</span></button>'; }).join("") + '</div>';
    $$(".fc", b).forEach(function(c){ c.onclick = function(){ c.classList.toggle("flip"); seen[c.dataset.i] = 1; c.classList.add("seen"); U.save(); }; });
  }
  function treat(b){ b.innerHTML = '<h3>Important accounting treatments</h3><table class="tt"><thead><tr><th>Situation</th><th>Entry</th></tr></thead><tbody>' + V.treat.map(function(t){ return '<tr><td>' + esc(t[0]) + '</td><td>' + esc(t[1]) + '</td></tr>'; }).join("") + '</tbody></table>'; }
  function mist(b){ b.innerHTML = '<h3>Common mistakes students make</h3><ul class="mlist">' + V.mistakes.map(function(m){ return '<li>⚠️ ' + esc(m) + '</li>'; }).join("") + '</ul><a class="btn" href="#mistakes">Practise finding errors →</a>'; }
  function fib(b){
    b.innerHTML = '<h3>Fill in the blanks</h3>' + V.fib.map(function(f, i){ return '<div class="fibq"><p>' + (i + 1) + '. ' + esc(f.q) + '</p><div class="irow"><input class="sin" data-f="' + i + '" value="' + esc((P().rev.fib || {})[i] || "") + '"><button class="btn ok" data-fc="' + i + '">Check</button></div><div class="fbx" data-ff="' + i + '"></div></div>'; }).join("");
    $$("[data-fc]", b).forEach(function(bt){ bt.onclick = function(){ var i = +bt.dataset.fc, inp = $('[data-f="' + i + '"]', b), v = U.normAcc(inp.value), ok = V.fib[i].a.some(function(a){ return U.normAcc(a) === v; });
      (P().rev.fib = P().rev.fib || {})[i] = inp.value; U.mark("entries", ok); U.save(); inp.classList.remove("good","bad"); inp.classList.add(ok ? "good" : "bad");
      $('[data-ff="' + i + '"]', b).innerHTML = U.fb(ok, {what:"You wrote “" + esc(inp.value) + "”.", why:"Answer: <b>" + esc(V.fib[i].a[0]) + "</b>."}); }; });
  }
  function mcq(b){ b.innerHTML = '<h3>MCQs</h3>' + V.mcq.map(function(q, i){ return U.mcqHTML(q, "rm" + i); }).join(""); V.mcq.forEach(function(q, i){ U.wireMcq(b, q, P().rev, "rm" + i, q.c); }); }
  function ar(b){ b.innerHTML = '<h3>Assertion and Reason</h3>' + V.ar.map(function(q, i){ return U.mcqHTML({q:"<b>Assertion (A):</b> " + esc(q.a) + "<br><b>Reason (R):</b> " + esc(q.r), opts:AR}, "ra" + i); }).join("");
    V.ar.forEach(function(q, i){ U.wireMcq(b, {q:"", opts:AR, a:q.ans, why:q.why}, P().rev, "ra" + i, q.c); }); }
  function more(b){ b.innerHTML = '<h3>Case studies</h3><p>' + d.cases.map(function(c){ return '<a class="btn" href="#cases">💼 ' + esc(c.title) + '</a>'; }).join(" ") + '</p><h3>Important numerical problems</h3><div class="links">' + V.numericals.map(function(id){ var l = d.lab.filter(function(x){ return x.id === id; })[0], s = d.solver.filter(function(x){ return x.id === id; })[0]; return l ? '<a class="btn ghost" href="#lab/' + id + '">🧾 ' + id + ' · ' + esc(l.title) + '</a>' : '<a class="btn ghost" href="#solver/' + id + '">🪜 ' + esc(s.title) + '</a>'; }).join("") + '</div><h3>Board examination practice</h3><p>Take the timed <a href="#test">Chapter Test</a> (25 marks, 30 minutes) for a board-style paper with marking.</p>'; }
});
function quickRev(R){
  var d = D(), V = d.revision, stages = [
    {n:"Summary", m:2, f:function(b){ b.innerHTML = '<ol class="sumlist">' + V.summary.map(function(s){ return '<li>' + esc(s) + '</li>'; }).join("") + '</ol>'; }},
    {n:"Formula flashcards", m:3, f:function(b){ b.innerHTML = '<div class="flash">' + V.flash.map(function(f){ return '<button class="fc"><span class="fr">' + esc(f.f) + '</span><span class="bk">' + esc(f.b) + '</span></button>'; }).join("") + '</div>'; $$(".fc", b).forEach(function(c){ c.onclick = function(){ c.classList.toggle("flip"); }; }); }},
    {n:"Treatments and mistakes", m:2, f:function(b){ b.innerHTML = '<table class="tt"><tbody>' + V.treat.map(function(t){ return '<tr><td>' + esc(t[0]) + '</td><td>' + esc(t[1]) + '</td></tr>'; }).join("") + '</tbody></table><ul class="mlist">' + V.mistakes.map(function(m){ return '<li>⚠️ ' + esc(m) + '</li>'; }).join("") + '</ul>'; }},
    {n:"Quick questions", m:3, f:function(b){ var qs = V.mcq.slice(0, 5); b.innerHTML = qs.map(function(q, i){ return U.mcqHTML(q, "qr" + i); }).join("") + V.ar.map(function(q, i){ return U.mcqHTML({q:"<b>A:</b> " + esc(q.a) + "<br><b>R:</b> " + esc(q.r), opts:AR}, "qa" + i); }).join("");
      var tmp = {}; qs.forEach(function(q, i){ U.wireMcq(b, q, tmp, "qr" + i, q.c); }); V.ar.forEach(function(q, i){ U.wireMcq(b, {q:"", opts:AR, a:q.ans, why:q.why}, tmp, "qa" + i, q.c); }); }},
    {n:"Definitions recap", m:2, f:function(b){ b.innerHTML = '<dl class="defs">' + V.defs.map(function(x){ return '<dt>' + esc(x[0]) + '</dt><dd>' + esc(x[1]) + '</dd>'; }).join("") + '</dl>'; }}
  ], i = 0, total = 12 * 60, t0 = Date.now();
  var ov = U.el('<div class="qrov" role="dialog" aria-modal="true" aria-label="Quick revision"><div class="qrin"><div class="qrh"><b>⚡ Quick Revision</b><span class="qrt"></span><button class="btn sm ghost qx">✕ Close</button></div><div class="gbar"><i></i></div><h3 class="qrs"></h3><div class="qrb"></div><div class="btns"><button class="btn ok qn">Next →</button></div></div></div>');
  document.body.appendChild(ov); document.body.classList.add("noscroll");
  var tm = setInterval(function(){ var l = total - Math.floor((Date.now() - t0) / 1000); $(".qrt", ov).textContent = "⏱ " + U.fmtTime(Math.max(0, l)) + " left"; }, 1000);
  function close(){ clearInterval(tm); ov.remove(); document.body.classList.remove("noscroll"); }
  function stage(){ var s = stages[i]; $(".qrs", ov).textContent = "Stage " + (i + 1) + " of " + stages.length + ": " + s.n + " (about " + s.m + " min)"; $(".gbar i", ov).style.width = U.pct(i, stages.length) + "%"; s.f($(".qrb", ov)); $(".qn", ov).textContent = i + 1 < stages.length ? "Next stage →" : "Finish ✓"; $(".qrin", ov).scrollTop = 0; }
  $(".qn", ov).onclick = function(){ i++; if(i >= stages.length){ P().rev.quick = (P().rev.quick || 0) + 1; U.save(); U.done("revision"); U.badge("quickrev", "Quick revision done"); close(); return; } stage(); };
  $(".qx", ov).onclick = close; stage();
}

/* ================= 16 chapter test ================= */
X.route("test", function(R){
  var d = D(), T = d.test, max = T.items.reduce(function(s, x){ return s + x.m; }, 0), last = P().tests[P().tests.length - 1];
  R.innerHTML = U.head("test", "Board-style chapter test with marking.") + '<div class="card tstart"><h3>📋 Chapter Test · ' + max + ' marks · ' + T.mins + ' minutes</h3><ul><li>' + T.items.length + ' questions: MCQ, Assertion–Reason, numericals, one theory answer and a journal question.</li><li>Numericals and journal entries are marked automatically.</li><li>The theory answer is <b>self-assessed</b>: after you submit, compare it with the model answer and tick the marking points you covered. A computer cannot fairly mark written answers, so we do not pretend to.</li><li>The test submits itself when time runs out.</li></ul>' +
    (last ? '<p>Last attempt: <b>' + last.got + ' / ' + last.max + '</b> on ' + new Date(last.at).toLocaleDateString("en-IN") + '. Best: ' + U.bestTest() + '%.</p>' : '') + '<button class="btn ok big" id="tgo">Start test</button></div>' + U.foot("test");
  $("#tgo").onclick = function(){ run(R, T, max); };
});
function run(R, T, max){
  var t0 = Date.now(), secs = T.mins * 60, K = X.KIND.journal, submitted = false;
  R.innerHTML = '<div class="timer sticky" id="ttm"></div><div class="test">' + T.items.map(function(q, i){
    var h = '<div class="card tq" data-q="' + i + '"><div class="tqh"><b>Q' + (i + 1) + '.</b><span class="chip">' + q.m + ' mark' + (q.m > 1 ? "s" : "") + '</span></div>';
    if(q.type === "mcq") h += '<p>' + esc(q.q) + '</p>' + q.opts.map(function(o, j){ return '<label class="ropt"><input type="radio" name="t' + i + '" value="' + j + '"> ' + esc(o) + '</label>'; }).join("");
    if(q.type === "ar") h += '<p><b>Assertion (A):</b> ' + esc(q.a) + '<br><b>Reason (R):</b> ' + esc(q.r) + '</p>' + AR.map(function(o, j){ return '<label class="ropt"><input type="radio" name="t' + i + '" value="' + j + '"> ' + esc(o) + '</label>'; }).join("");
    if(q.type === "ratio") h += '<p>' + esc(q.q) + '</p><input class="sin" data-t="' + i + '" placeholder="a:b:c">';
    if(q.type === "nums") h += '<p>' + esc(q.q) + '</p>' + q.parts.map(function(p, j){ return '<label class="pl2">' + esc(p.p) + ' <input class="sin" data-t="' + i + '_' + j + '" inputmode="decimal"></label>'; }).join("");
    if(q.type === "self") h += '<p>' + esc(q.q) + '</p><textarea class="ta" data-t="' + i + '" rows="5" placeholder="Write your answer…"></textarea>';
    if(q.type === "journal") h += '<p>' + esc(q.q) + '</p><div class="sheet tj" data-t="' + i + '">' + K.html({entries:q.entries}, "grade") + '</div>';
    return h + '<div class="tfb"></div></div>'; }).join("") + '<div class="btns"><button class="btn ok big" id="tsub">Submit test</button></div></div>';
  $$(".tj", R).forEach(function(s){ s.addEventListener("input", function(){ K.live(s); }); });
  var tm = setInterval(function(){ var l = secs - Math.floor((Date.now() - t0) / 1000), e = $("#ttm"); if(!e){ clearInterval(tm); return; } e.textContent = "⏱ " + U.fmtTime(Math.max(0, l)) + " left"; e.classList.toggle("warn", l <= 120); if(l <= 0) submit(); }, 1000);
  timers.push(tm);
  $("#tsub").onclick = function(){ submit(); };
  function submit(){
    if(submitted) return; submitted = true; clearInterval(tm);
    var got = 0, byC = {}, correct = 0, took = Math.min(secs, Math.round((Date.now() - t0) / 1000)), selfIdx = -1;
    function add(c, g, m){ var b = byC[c] = byC[c] || [0, 0]; b[0] += g; b[1] += m; }
    T.items.forEach(function(q, i){
      var box = $('[data-q="' + i + '"]', R), F = $(".tfb", box), g = 0;
      if(q.type === "mcq" || q.type === "ar"){ var r = $('input[name="t' + i + '"]:checked', box), v = r ? +r.value : -1, ok = v === (q.type === "ar" ? q.ans : q.a); g = ok ? q.m : 0;
        F.innerHTML = U.fb(ok, {what:v < 0 ? "Not answered." : "Your choice is not correct.", why:q.why + (q.type === "ar" ? " Answer: " + AR[q.ans] : " Answer: " + q.opts[q.a])}); }
      if(q.type === "ratio"){ var x = U.check("ratio", $('[data-t="' + i + '"]', box).value, q.ans); g = x.ok ? q.m : 0; F.innerHTML = U.fb(x.ok, {what:"Your ratio is not correct.", why:q.why + " Answer: " + q.ans.join(" : ")}); }
      if(q.type === "nums"){ var per = q.m / q.parts.length; F.innerHTML = q.parts.map(function(p, j){ var y = U.check("num", $('[data-t="' + i + '_' + j + '"]', box).value, p.ans); if(y.ok) g += per; return U.fb(y.ok, {what:esc(p.p) + ": not correct.", why:p.why}); }).join(""); }
      if(q.type === "journal"){ var s = $(".tj", box), jr = K.grade(s, {entries:q.entries, c:q.c}); g = Math.round(q.m * jr.got / jr.items * 2) / 2;
        F.innerHTML = '<p><b>' + g + ' / ' + q.m + '</b></p>' + jr.issues.map(function(it){ return '<details class="iss"><summary>✗ ' + it.h + '</summary>' + U.fb(false, it.o) + '</details>'; }).join("") + '<details class="iss"><summary>Model answer</summary>' + X.formatShow({type:"journal", entries:q.entries}) + '</details>'; }
      if(q.type === "self"){ selfIdx = i; F.innerHTML = '<div class="fb tip"><b>Model answer:</b> ' + esc(q.model) + '<p><b>Self-assessment:</b> tick each point your answer covers (1 mark each).</p>' + q.crit.map(function(c, j){ return '<label class="ropt"><input type="checkbox" data-sc="' + j + '"> ' + esc(c) + '</label>'; }).join("") + '</div>'; }
      if(q.type !== "self"){ got += g; add(q.c, g, q.m); if(g >= q.m) correct++; U.mark(q.c, g >= q.m, g >= q.m ? null : q.c); box.classList.add(g >= q.m ? "ok" : g > 0 ? "part" : "no"); }
      $$("input,textarea", box).forEach(function(x){ if(!x.dataset.sc) x.disabled = true; });
    });
    var rec = {at:Date.now(), got:got, max:max, secs:took, correct:correct, n:T.items.length, byC:byC, self:0};
    P().tests.push(rec); U.save(); U.done("test");
    function paintRes(){
      var tot = rec.got + rec.self, p = U.pct(tot, max); if(p >= 80) U.badge("testpass", "Chapter test: 80%+");
      var weak = Object.keys(rec.byC).filter(function(c){ return rec.byC[c][0] / rec.byC[c][1] < 0.6; });
      $("#tres").innerHTML = '<div class="score ' + (p >= 80 ? "full" : p >= 50 ? "mid" : "low") + '"><b>' + tot + ' / ' + max + '</b><span>' + p + '% · time taken ' + U.fmtTime(rec.secs) + ' · ' + rec.correct + ' of ' + (rec.n - 1) + ' auto-marked questions fully correct' + (selfIdx >= 0 ? ' · theory answer self-assessed: ' + rec.self + ' / ' + T.items[selfIdx].m : '') + '</span></div>' +
        '<div class="kpis"><div><small>Maximum marks</small><b>' + max + '</b></div><div><small>Marks obtained</small><b>' + tot + '</b></div><div><small>Time taken</small><b>' + U.fmtTime(rec.secs) + '</b></div><div><small>Chapter mastery</small><b>' + U.mastery() + '%</b></div></div>' +
        '<h4>Areas of improvement</h4>' + (weak.length ? '<ul>' + weak.map(function(c){ return '<li><b>' + esc(D().concepts[c].n) + '</b> (' + rec.byC[c][0] + '/' + rec.byC[c][1] + ') · <a href="#' + (D().concepts[c].go || "solver") + '">practise</a></li>'; }).join("") + '</ul>' : '<p>No weak area in this test. 🎉</p>') + '<div class="btns"><a class="btn" href="#report">Full performance report →</a><button class="btn ghost" id="tagain">Retake test</button></div>';
      $("#tagain").onclick = function(){ X.keepScroll = false; location.hash = "#test"; };
    }
    $(".test .btns", R).outerHTML = '<div class="card" id="tres"></div>';
    $$("[data-sc]", R).forEach(function(c){ c.onchange = function(){ rec.self = $$("[data-sc]:checked", R).length; U.save(); paintRes(); }; });
    paintRes(); $("#ttm").remove(); $("#tres").scrollIntoView({behavior:"smooth"});
  }
}

/* ================= 17 performance report ================= */
var ERRN = {side:"Debit/credit side errors", amount:"Calculation (amount) errors", missing:"Accounts missed out of entries", extra:"Extra or wrong accounts", narration:"Missing narrations", total:"Totals not agreeing", unbalanced:"Unbalanced entries (Dr ≠ Cr)", "goodwill-raised":"Raising Goodwill A/c at admission", gone:"Closed accounts shown in the Balance Sheet"};
function errName(t){ if(ERRN[t]) return ERRN[t]; if(D().concepts[t]) return D().concepts[t].n + " questions"; var m = t.match(/^step:(\w+):(\d+)$/); if(m){ var s = D().solver.filter(function(x){ return x.id === m[1]; })[0]; return s ? "Solver · " + s.title + " · step " + (+m[2] + 1) + " (" + s.steps[+m[2]].label + ")" : t; } return t; }
X.route("report", function(R){
  var d = D(), p = P(), a = U.accuracy(), time = Object.keys(p.time).reduce(function(s, k){ return s + p.time[k]; }, 0);
  var solved = Object.keys(p.sv).filter(function(k){ var v = p.sv[k]; return v.gDone || v.ind != null || v.ex != null; }).length + Object.keys(p.ws).filter(function(k){ return p.ws[k].tries && d.lab.some(function(l){ return l.id === k; }); }).length;
  var gamesN = Object.keys(p.games).reduce(function(s, k){ return s + (p.games[k].plays || 0); }, 0);
  var errs = Object.keys(p.errs).sort(function(x, y){ return p.errs[y] - p.errs[x]; }).filter(function(k){ return p.errs[k] >= 2; }).slice(0, 6);
  var conc = Object.keys(d.concepts).map(function(c){ var w = p.wk[c] || [0, 0], n = w[0] + w[1]; return {c:c, n:n, p:U.pct(w[0], n)}; });
  var weak = conc.filter(function(x){ return x.n >= 2 && x.p < 66; });
  R.innerHTML = U.head("report", "Your personal learning dashboard for this chapter.") +
    (p.last && p.last !== "report" ? '<div class="resume"><span>⏯ Resume exactly where you stopped: <b>' + esc(U.secName(p.last)) + '</b></span><a class="btn" href="#' + p.last + '">Resume →</a></div>' : '') +
    '<div class="kpis big"><div><small>Chapter completion</small><b>' + U.chapterPct() + '%</b></div><div><small>Chapter mastery</small><b>' + U.mastery() + '%</b></div><div><small>Accuracy</small><b>' + (a.r + a.w ? a.p + "%" : "—") + '</b><em>' + a.r + ' right · ' + a.w + ' wrong</em></div><div><small>Numericals solved</small><b>' + solved + '</b></div><div><small>Practice time</small><b>' + U.mins(time) + '</b></div><div><small>Games played</small><b>' + gamesN + '</b></div></div>' +
    '<div class="rgrid"><div class="card"><h3>Concepts mastered</h3>' + conc.map(function(x){ return '<div class="cbar"><span>' + esc(d.concepts[x.c].n) + '</span><div class="btrack"><i style="width:' + (x.n ? x.p : 0) + '%;background:' + (x.p >= 80 ? "var(--green)" : x.p >= 60 ? "var(--gold)" : "var(--red)") + '"></i></div><b>' + (x.n ? x.p + "%" : "—") + '</b></div>'; }).join("") + '</div>' +
    '<div class="card"><h3>Weak areas</h3>' + (weak.length ? '<ul>' + weak.map(function(x){ return '<li><b>' + esc(d.concepts[x.c].n) + '</b> · ' + x.p + '% · <a href="#' + (d.concepts[x.c].go || "solver") + '">practise now</a></li>'; }).join("") + '</ul>' : '<p class="muted">No weak area yet. Keep practising to build the picture.</p>') +
    '<h3>Repeated mistakes</h3>' + (errs.length ? '<ul>' + errs.map(function(k){ return '<li>' + esc(errName(k)) + ' <span class="chip">×' + p.errs[k] + '</span></li>'; }).join("") + '</ul>' : '<p class="muted">No mistake has repeated yet.</p>') + '</div></div>' +
    '<div class="rgrid"><div class="card"><h3>Test performance</h3>' + (p.tests.length ? testChart(p.tests) + '<table class="tt"><thead><tr><th>Date</th><th>Marks</th><th>Time</th></tr></thead><tbody>' + p.tests.slice(-5).reverse().map(function(t){ return '<tr><td>' + new Date(t.at).toLocaleDateString("en-IN") + '</td><td>' + (t.got + (t.self || 0)) + ' / ' + t.max + '</td><td>' + U.fmtTime(t.secs) + '</td></tr>'; }).join("") + '</tbody></table>' : '<p class="muted">No test yet. <a href="#test">Take the chapter test</a>.</p>') + '</div>' +
    '<div class="card"><h3>Sections</h3><ul class="seclist">' + U.SECS.map(function(s){ return '<li class="' + (p.done[s.k] ? "d" : "") + '"><a href="#' + s.k + '">' + (p.done[s.k] ? "✓" : "○") + ' ' + esc(s.n) + '</a><small>' + (p.time[s.k] ? U.mins(p.time[s.k]) : "") + '</small></li>'; }).join("") + '</ul></div></div>' +
    '<div class="card"><h3>Games</h3><div class="gstat">' + X.gameList().map(function(g){ var s = p.games[g.k] || {}; return '<div><b>' + g.e + ' ' + esc(g.n) + '</b><small>' + (s.plays ? "Best " + s.best + " pts · " + s.plays + " plays" : "Not played") + '</small></div>'; }).join("") + '</div><h3>Badges</h3><div class="badges">' + badgeList() + '</div></div>' +
    '<div class="card danger"><h3>Start this chapter again</h3><p class="muted">Clears your progress, answers and scores for this chapter on this device and in your account.</p><button class="btn ghost" id="rst">Reset chapter progress</button></div>';
  U.done("report");
  $("#rst").onclick = function(){
    var b = U.el('<div class="askbox" role="dialog" aria-modal="true"><div class="askin"><p>Reset all progress for “' + esc(d.title) + '”? This cannot be undone.</p><div class="btns"><button class="btn ghost" data-x="no">Cancel</button><button class="btn red" data-x="ok">Reset</button></div></div></div>');
    document.body.appendChild(b);
    b.onclick = function(e){ var x = e.target.dataset.x; if(e.target === b || x === "no") b.remove(); if(x === "ok"){ delete X.S().ch[d.id]; b.remove(); try{ localStorage.setItem("nf.lab.v1", JSON.stringify(X.S())); }catch(er){} location.hash = "#home"; location.reload(); } };
  };
});
function testChart(t){
  var L = t.slice(-8), w = 300, h = 120, bw = w / Math.max(L.length, 1);
  return '<svg viewBox="0 0 ' + w + ' ' + (h + 20) + '" class="tchart" role="img" aria-label="Test scores">' + L.map(function(x, i){ var p = (x.got + (x.self || 0)) / x.max, bh = Math.max(2, p * h);
    return '<rect x="' + (i * bw + 6) + '" y="' + (h - bh) + '" width="' + (bw - 12) + '" height="' + bh + '" rx="4" fill="' + (p >= .8 ? "#3ddc84" : p >= .5 ? "#f5c518" : "#ff5d6c") + '"/><text x="' + (i * bw + bw / 2) + '" y="' + (h - bh - 4) + '" text-anchor="middle" font-size="11" fill="#fff">' + Math.round(p * 100) + '%</text><text x="' + (i * bw + bw / 2) + '" y="' + (h + 14) + '" text-anchor="middle" font-size="10" fill="#b9b1dc">#' + (t.length - L.length + i + 1) + '</text>'; }).join("") + '</svg>';
}
})();
