/* NOTESFLIX ARCADE shared engine. Play. Learn. Level Up.
   Each chapter game calls NFA.boot({...}) and supplies only its own gameplay. This file gives every
   game the same: read-lock, start screen, instructions, pause, restart, score, mastery results, XP and badges.
   Progress is in localStorage today; every write goes through save(), so a backend can replace it later. */
(function () {
  'use strict';
  var KEY = 'notesflix101.arcade', READ = 'notesflix101.progress';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || { xp: 0, chapters: {}, badges: {} }; } catch (e) { return { xp: 0, chapters: {}, badges: {} }; } }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }
  function readDone() { try { return (JSON.parse(localStorage.getItem(READ)) || {}).done || {}; } catch (e) { return {}; } }

  var CSS = '' +
    ':root{--bg:#0e0d2b;--bg2:#1a1850;--card:#23216a;--fg:#fff;--mute:#b9b7ee;--line:#3d3b9a;--y:#ffc83d;--c:#35e0ff;--p:#ff4fa3;--g:#3df0a6;--bad:#ff6b81}' +
    '*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}html,body{margin:0;height:100%;background:var(--bg);color:var(--fg);font:16px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif}' +
    '#nfa{min-height:100%;display:flex;flex-direction:column;background:radial-gradient(1200px 500px at 50% -10%,#3a2a9a55,transparent),var(--bg)}' +
    '.nfa-top{display:flex;gap:8px;align-items:center;padding:8px 12px;background:#0008;border-bottom:2px solid var(--line);position:sticky;top:0;z-index:20}' +
    '.nfa-top b{flex:1;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
    '.nfa-btn{border:0;border-radius:12px;background:linear-gradient(180deg,var(--y),#ff9f1c);color:#2a1a00;font:800 15px system-ui;padding:10px 16px;min-height:44px;cursor:pointer}' +
    '.nfa-btn.alt{background:var(--card);color:var(--fg);border:2px solid var(--line)}.nfa-btn.sm{min-height:38px;padding:6px 12px;font-size:14px}.nfa-btn:disabled{opacity:.4;cursor:not-allowed}' +
    '.nfa-hud{display:flex;gap:8px;flex-wrap:wrap;padding:8px 12px}.nfa-hud span{background:var(--card);border:2px solid var(--line);border-radius:12px;padding:4px 10px;font-weight:700;font-size:14px}.nfa-hud i{font-style:normal;color:var(--c)}' +
    '.nfa-stage{flex:1;position:relative;padding:0 12px 12px;touch-action:manipulation}' +
    '.nfa-screen{max-width:760px;margin:0 auto;padding:18px 14px;display:grid;gap:12px}.nfa-screen h1{margin:0;font-size:clamp(26px,7vw,40px);line-height:1.1}' +
    '.nfa-eyebrow{color:var(--c);font:800 12px system-ui;letter-spacing:.1em;text-transform:uppercase}' +
    '.nfa-card{background:var(--card);border:2px solid var(--line);border-radius:18px;padding:14px;box-shadow:0 5px 0 #0006}.nfa-card ul{margin:6px 0 0;padding-left:20px}' +
    '.nfa-bar{height:12px;border-radius:99px;background:#0006;overflow:hidden}.nfa-bar i{display:block;height:100%;background:linear-gradient(90deg,var(--c),var(--g));transition:width .4s}' +
    '.nfa-stars{font-size:44px;letter-spacing:6px;text-align:center}.nfa-big{font:900 clamp(28px,8vw,44px) system-ui;color:var(--y);text-align:center}' +
    '.nfa-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}.nfa-mute{color:var(--mute);font-size:14px}.nfa-weak a{color:var(--c)}' +
    '.nfa-pause{position:absolute;inset:0;background:#000b;display:grid;place-items:center;z-index:15}.nfa-pause>div{display:grid;gap:10px;text-align:center}' +
    '.nfa-toast{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);background:var(--p);color:#fff;font-weight:800;border-radius:99px;padding:8px 16px;z-index:50;animation:nfaT 1.8s forwards}@keyframes nfaT{0%{opacity:0;transform:translate(-50%,14px)}12%,80%{opacity:1;transform:translate(-50%,0)}100%{opacity:0}}' +
    '.nfa-hide{display:none!important}.nfa-cb{display:grid;grid-template-columns:auto 1fr auto;gap:8px;align-items:center;font-size:14px}';

  var cfg, st, data, root, stage, hudEl, game, paused = false, ended = false, tally, score, regEntry = null, cleanups = [];
  function runCleanups() { var c = cleanups; cleanups = []; c.forEach(function (f) { try { f(); } catch (e) {} }); }

  function toast(t) { var d = el('div', 'nfa-toast', esc(t)); document.body.appendChild(d); setTimeout(function () { d.remove(); }, 1900); }

  function badge(id, name) {
    if (data.badges[id]) return false;
    data.badges[id] = Date.now(); toast('🏅 Badge: ' + name); return true;
  }

  function boot(c) {
    cfg = c;
    var s = document.createElement('style'); s.textContent = CSS; document.head.appendChild(s);
    if (!document.querySelector('meta[name=viewport]')) { var m = document.createElement('meta'); m.name = 'viewport'; m.content = 'width=device-width,initial-scale=1,viewport-fit=cover'; document.head.appendChild(m); }
    document.title = c.title + ' · Notesflix Arcade';
    root = $('#nfa') || document.body.appendChild(el('div')); root.id = 'nfa'; root.textContent = '';
    data = load();
    var top = el('div', 'nfa-top', '<a class="nfa-btn alt sm" href="' + (c.back || '../../../../index.html') + '" aria-label="Back to Notesflix">←</a><b>' + esc(c.title) + '</b>');
    var pb = el('button', 'nfa-btn alt sm nfa-hide', '❚❚ Pause'), rb = el('button', 'nfa-btn alt sm nfa-hide', '↻ Restart');
    top.appendChild(pb); top.appendChild(rb); root.appendChild(top);
    hudEl = el('div', 'nfa-hud nfa-hide'); root.appendChild(hudEl);
    stage = el('div', 'nfa-stage'); root.appendChild(stage);
    pb.onclick = function () { setPause(!paused); };
    rb.onclick = function () { if (confirm('Restart this game?')) play(); };
    cfg._pb = pb; cfg._rb = rb;
    document.addEventListener('visibilitychange', function () { if (document.hidden && st === 'play') setPause(true); });
    // load registry for the read-lock
    fetch(c.registry || '../../../game-registry.json').then(function (r) { return r.json(); }).then(function (j) {
      regEntry = (j.games || []).filter(function (g) { return g.chapterId === c.chapterId; })[0] || null; gate();
    }).catch(function () { regEntry = null; gate(); });
  }

  function partUrl(id) { var e = regEntry && regEntry.episodes.filter(function (x) { return x.id === id; })[0]; return e && e.url ? e.url : 'notes/' + id + '.html'; }
  function partTitle(id) { var e = regEntry && regEntry.episodes.filter(function (x) { return x.id === id; })[0]; return e ? e.title : id; }

  function gate() {
    var eps = regEntry ? regEntry.episodes : [], done = readDone();
    var read = eps.filter(function (e) { return done[e.id]; }).length;
    var preview = /[?&]preview=1/.test(location.search);
    if (eps.length && read < eps.length && !preview) {
      st = 'lock'; stage.textContent = '';
      var s = el('div', 'nfa-screen', '<span class="nfa-eyebrow">Locked</span><h1>🔒 ' + esc(cfg.title) + '</h1>' +
        '<div class="nfa-card"><b>Read the whole chapter to unlock this game.</b><p class="nfa-mute">You have read ' + read + ' of ' + eps.length + ' notes.</p><div class="nfa-bar"><i style="width:' + Math.round(read / eps.length * 100) + '%"></i></div>' +
        '<ul>' + eps.map(function (e) { return '<li>' + (done[e.id] ? '✅ ' : '⬜ ') + esc(e.title) + '</li>'; }).join('') + '</ul></div>' +
        '<a class="nfa-btn" style="text-align:center;text-decoration:none" href="../../../../index.html">Go to the notes</a>');
      stage.appendChild(s); return;
    }
    intro();
  }

  function intro() {
    st = 'intro'; stage.textContent = ''; cfg._pb.classList.add('nfa-hide'); cfg._rb.classList.add('nfa-hide'); hudEl.classList.add('nfa-hide');
    var best = (data.chapters[cfg.chapterId] || {}).best;
    var s = el('div', 'nfa-screen',
      '<span class="nfa-eyebrow">' + esc(cfg.genre || 'Chapter game') + '</span><h1>' + esc(cfg.title) + '</h1><p>' + esc(cfg.tagline || '') + '</p>' +
      '<div class="nfa-card"><b>How to play</b><ul>' + (cfg.howto || []).map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="nfa-card"><b>3 levels · about 10–15 minutes</b><ul><li>Level 1 · Easy: every concept of the chapter, once.</li><li>Level 2 · Medium: the same ideas the other way round, plus the order of steps.</li><li>Level 3 · Hard: faster, mixed, with numericals. Hearts refill at every new level.</li></ul></div>' +
      '<div class="nfa-card"><b>Concepts you will practise</b><ul>' + Object.keys(cfg.concepts).map(function (k) { return '<li>' + esc(cfg.concepts[k].label) + '</li>'; }).join('') + '</ul></div>' +
      (best ? '<p class="nfa-mute">Your best: ' + '★'.repeat(best.stars) + '☆'.repeat(3 - best.stars) + ' · mastery ' + best.mastery + '%</p>' : '') +
      '<button class="nfa-btn" id="nfaGo">▶ Start</button>');
    stage.appendChild(s); $('#nfaGo').onclick = play;
  }

  function hud() {
    var o = game && game.hud || {}; hudEl.innerHTML = '<span>Score <i>' + score + '</i></span>' + Object.keys(o).map(function (k) { return '<span>' + esc(k) + ' <i>' + esc(o[k]) + '</i></span>'; }).join('');
  }

  var ctx = {
    record: function (k, ok) { var t = tally[k] || (tally[k] = { right: 0, total: 0 }); t.total++; if (ok) t.right++; },
    addScore: function (n) { score = Math.max(0, score + n); hud(); },
    setHud: function (o) { game.hud = o; hud(); },
    toast: toast,
    isPaused: function () { return paused; },
    finish: function (won) { finish(won); },
    on: function (fn) { game.tick = fn; },
    cleanup: function (fn) { cleanups.push(fn); }
  };

  function play() {
    runCleanups(); window.__auto = null;
    ended = false; paused = false; st = 'play'; tally = {}; score = 0; game = { hud: {} };
    stage.textContent = ''; cfg._pb.classList.remove('nfa-hide'); cfg._rb.classList.remove('nfa-hide'); hudEl.classList.remove('nfa-hide');
    ctx.root = stage; ctx.cfg = cfg; hud();
    cfg.start(ctx);
  }

  function setPause(p) {
    if (st !== 'play') return; paused = p; var old = $('.nfa-pause', stage); if (old) old.remove();
    cfg._pb.textContent = p ? '▶ Resume' : '❚❚ Pause';
    if (p) { var d = el('div', 'nfa-pause', '<div><div class="nfa-big">Paused</div><button class="nfa-btn" id="nfaRes">Resume</button></div>'); stage.appendChild(d); $('#nfaRes', d).onclick = function () { setPause(false); }; }
    if (cfg.onPause) cfg.onPause(p);
  }

  function finish(won) {
    if (ended) return; ended = true; st = 'end'; runCleanups();
    var keys = Object.keys(cfg.concepts), right = 0, total = 0, rows = [];
    keys.forEach(function (k) { var t = tally[k] || { right: 0, total: 0 }; right += t.right; total += t.total; rows.push({ k: k, pct: t.total ? Math.round(t.right / t.total * 100) : null, t: t }); });
    var mastery = total ? Math.round(right / total * 100) : 0;
    var stars = mastery >= 90 ? 3 : mastery >= 75 ? 2 : mastery >= 60 ? 1 : 0;
    var passed = !!won && mastery >= 60;
    var xp = Math.round(score / 10) + stars * 50 + (passed ? 50 : 0);
    var ch = data.chapters[cfg.chapterId] || (data.chapters[cfg.chapterId] = { plays: 0, history: [] });
    ch.plays++; ch.history.push({ t: Date.now(), mastery: mastery, score: score, stars: stars, passed: passed }); ch.history = ch.history.slice(-30);
    var prev = ch.best; if (!prev || mastery > prev.mastery || (mastery === prev.mastery && score > prev.score)) ch.best = { mastery: mastery, score: score, stars: stars };
    if (passed) ch.completed = true; data.xp += xp;
    if (passed) badge('first-' + cfg.chapterId, 'Chapter cleared');
    if (mastery === 100 && total >= 5) badge('perfect-' + cfg.chapterId, 'Perfect mastery');
    if (ch.plays >= 5) badge('persist-' + cfg.chapterId, 'Never gives up');
    save(data);
    if (cfg._pb) { cfg._pb.classList.add('nfa-hide'); cfg._rb.classList.add('nfa-hide'); } hudEl.classList.add('nfa-hide');
    stage.textContent = '';
    var weak = rows.filter(function (r) { return r.pct !== null && r.pct < 70; });
    var s = el('div', 'nfa-screen',
      '<span class="nfa-eyebrow">' + (passed ? 'Chapter cleared' : won ? 'Almost there' : 'Game over') + '</span>' +
      '<div class="nfa-stars">' + '★'.repeat(stars) + '☆'.repeat(3 - stars) + '</div><div class="nfa-big">Mastery ' + mastery + '%</div>' +
      '<p class="nfa-mute" style="text-align:center">Score ' + score + ' · +' + xp + ' XP · total ' + data.xp + ' XP</p>' +
      '<div class="nfa-card"><b>Concept by concept</b>' + rows.map(function (r) {
        return '<div class="nfa-cb" style="margin-top:8px"><span>' + esc(cfg.concepts[r.k].label) + '</span><div class="nfa-bar" style="width:90px"><i style="width:' + (r.pct || 0) + '%"></i></div><span>' + (r.pct === null ? '–' : r.pct + '%') + '</span></div>';
      }).join('') + '</div>' +
      (weak.length ? '<div class="nfa-card nfa-weak"><b>Revise these</b><ul>' + weak.map(function (r) { var p = cfg.concepts[r.k].part; return '<li>' + esc(cfg.concepts[r.k].label) + (p ? ' → <a href="../../../../' + partUrl(p) + '">' + esc(partTitle(p)) + '</a>' : '') + '</li>'; }).join('') + '</ul></div>' : '<div class="nfa-card">No weak spots. Strong chapter.</div>') +
      (mastery < 60 ? '<p class="nfa-mute">Reach 60% mastery to mark this chapter completed.</p>' : '') +
      '<div class="nfa-row"><button class="nfa-btn" id="nfaAgain">↻ Play again</button><a class="nfa-btn alt" style="text-decoration:none" href="../../../../index.html">Back to notes</a></div>');
    stage.appendChild(s); $('#nfaAgain').onclick = play;
  }

  window.NFA = { boot: boot, el: el, esc: esc, $: $, T: +((/[?&]fast=(\d+)/.exec(location.search) || [0, 1])[1]) };
})();
