/* NOTESFLIX ARCADE: shared challenge builder, sound, typed checkpoint, and the 3D runner (Three.js).
   Needs three.min.js, arcade.js and kits-rt.js (for NFA.kits and NFA.game). */
(function () {
  'use strict';
  var NFA = window.NFA, el = NFA.el, esc = NFA.esc, shuffle = NFA.shuffle, K = NFA.kits;

  /* ---------- sound (tiny synth, no files) ---------- */
  var AC = null;
  NFA.sfx = function (type) {
    try {
      if (NFA.muted) return;
      AC = AC || new (window.AudioContext || window.webkitAudioContext)();
      if (AC.state === 'suspended') AC.resume();
      var t = AC.currentTime, o = AC.createOscillator(), g = AC.createGain(); o.connect(g); g.connect(AC.destination);
      var P = { coin: [[880, 0], [1320, 0.07]], hit: [[160, 0], [90, 0.08]], jump: [[300, 0], [520, 0.08]], win: [[523, 0], [659, 0.1], [784, 0.2], [1046, 0.3]], tick: [[600, 0]] }[type] || [[440, 0]];
      o.type = type === 'hit' ? 'sawtooth' : 'square'; g.gain.setValueAtTime(0.06, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12 + P.length * 0.08);
      P.forEach(function (n) { o.frequency.setValueAtTime(n[0], t + n[1]); }); o.start(t); o.stop(t + 0.2 + P.length * 0.1);
    } catch (e) { }
  };

  /* ---------- challenges: one list, shaped for the game ---------- */
  /* mode 'cat'  : prompt is the category, options are items (runner)
     mode 'item' : prompt is the item,     options are the categories (rope, hill)  */
  NFA.LEVELS = { 1: 'EASY', 2: 'MEDIUM', 3: 'HARD' };
  NFA.lvl = 1;
  /* all concepts, three levels: 1 recognise, 2 reverse and order, 3 mixed + numericals. Padded so a full run is long. */
  NFA.challenges = function (spec, mode, minQ) {
    var cats = spec.sort ? NFA.cats(spec) : [], pool = spec.sort ? NFA.pool(spec) : [], hasSort = pool.length > 0 && cats.length >= 2;
    var pairs = spec.pair || [], seqs = spec.seq || [], calcs = (spec.calc || []).slice();
    var defDir = mode === 'item' ? 'item' : 'cat', revDir = defDir === 'cat' ? 'item' : 'cat';
    var canRev = defDir === 'item' || cats.length >= 3;
    function three(correct, others) { var seen = {}, o = []; shuffle(others.slice()).forEach(function (t) { if (t !== correct && !seen[t] && o.length < 2) { seen[t] = 1; o.push({ t: t, ok: false }); } }); o.push({ t: correct, ok: true }); return shuffle(o); }
    function qSort(it, dir) {
      if (dir === 'cat') return { k: 'sort', dir: 'cat', ask: 'COLLECT: ' + it.cat, tag: it.cat, opts: three(it.t, pool.filter(function (x) { return x.c !== it.c; }).map(function (x) { return x.t; })), why: NFA.why(it) };
      return { k: 'sort', dir: 'item', ask: 'Where does "' + it.t + '" belong?', tag: it.t, opts: three(it.cat, cats.filter(function (c, k) { return k !== it.c; })), why: NFA.why(it) };
    }
    function qPair(p, rev) {
      var others = pairs.filter(function (x) { return x !== p; });
      return rev ? { k: 'pair', ask: 'Which term means: ' + p[1] + '?', opts: three(p[0], others.map(function (x) { return x[0]; })), why: p[0] + ' = ' + p[1] }
        : { k: 'pair', ask: 'What does "' + p[0] + '" mean?', opts: three(p[1], others.map(function (x) { return x[1]; })), why: p[0] + ' = ' + p[1] };
    }
    function qSeq(s, k, after) {
      var steps = s[1], ask = (after && k > 0) ? s[0] + ': what comes right after "' + steps[k - 1] + '"?' : (k === 0 ? s[0] + ': which step comes first?' : s[0] + ': step ' + (k + 1));
      return { k: 'seq', ask: ask, opts: three(steps[k], steps.filter(function (x, j) { return j !== k; })), why: 'Step ' + (k + 1) + ' of ' + s[0] + ': ' + steps[k] };
    }
    function mixKinds(list) { /* round-robin across kinds so the run never repeats one task type too long */
      var by = {}; list.forEach(function (c) { (by[c.k] = by[c.k] || []).push(c); });
      var res = [], ks = shuffle(Object.keys(by)), more = true; while (more) { more = false; ks.forEach(function (k) { if (by[k].length) { res.push(by[k].shift()); more = true; } }); } return res;
    }
    function sortRound(dirFn) { /* every item once, categories alternating */
      var byC = cats.map(function (c, ci) { return shuffle(pool.filter(function (x) { return x.c === ci; })); }), out = [], left = true, turn = 0;
      while (left) { left = false; for (var ci = 0; ci < byC.length; ci++) { var it = byC[ci].pop(); if (it) { out.push(qSort(it, dirFn())); left = true; } } turn++; } return out;
    }
    function spreadCalcs(list, cl) { if (!cl.length) return list; var gap = Math.max(3, Math.floor(list.length / (cl.length + 1))); cl.forEach(function (c, i) { list.splice(Math.min(list.length, (i + 1) * gap + i), 0, c); }); return list; }
    function mkCalc(q) { var c = { k: 'calc', q: q, ask: 'Pit stop: work out the number' }; q._c = c; return c; }
    var calcObjs = calcs.map(mkCalc), nc2 = Math.ceil(calcObjs.length / 3), c2 = calcObjs.slice(0, nc2), c3 = calcObjs.slice(nc2);
    /* level 1: recognise */
    var L1 = []; if (hasSort) L1 = L1.concat(sortRound(function () { return defDir; })); pairs.forEach(function (p) { L1.push(qPair(p, false)); }); L1 = mixKinds(L1);
    /* level 2: reverse direction and order */
    var L2 = []; if (hasSort) L2 = L2.concat(sortRound(function () { return canRev ? revDir : defDir; })); pairs.forEach(function (p) { L2.push(qPair(p, true)); });
    seqs.forEach(function (s) { for (var k = 0; k < s[1].length; k++) L2.push(qSeq(s, k, true)); }); L2 = spreadCalcs(mixKinds(L2), c2);
    /* level 3: mixed, harder, plus numericals */
    function L3round() { var L = []; if (hasSort) L = L.concat(sortRound(function () { return Math.random() < 0.5 ? 'cat' : 'item'; }).map(function (q) { return q; })); pairs.forEach(function (p) { L.push(qPair(p, Math.random() < 0.5)); }); seqs.forEach(function (s) { for (var k = 0; k < s[1].length; k++) L.push(qSeq(s, k, false)); }); return mixKinds(L); }
    if (!canRev) { /* engines that cannot show item prompts: keep default direction in level 3 */ var oldRound = L3round; L3round = function () { var L = []; if (hasSort) L = L.concat(sortRound(function () { return defDir; })); pairs.forEach(function (p) { L.push(qPair(p, Math.random() < 0.5)); }); seqs.forEach(function (s) { for (var k = 0; k < s[1].length; k++) L.push(qSeq(s, k, false)); }); return mixKinds(L); }; }
    var L3 = L3round(), target = minQ || 100, guard = 0;
    while (L1.length + L2.length + L3.length < target && guard++ < 4) L3 = L3.concat(L3round());
    L3 = spreadCalcs(L3, c3);
    var all = [];
    [L1, L2, L3].forEach(function (L, li) { L.forEach(function (c, i) { c.lvl = li + 1; c.last = i === L.length - 1; c.n = all.length + 1; all.push(c); }); });
    all.forEach(function (c) { c.prompt = c.ask; });
    NFA.lvl = 1; NFA._rc = 0; return all;
  };
  /* called by every engine the moment a question is resolved */
  NFA.lvlTick = function (ctx, c) {
    if (c && c.lvl) { NFA._rc = (NFA._rc || 0) + 1; if (NFA._rc % 15 === 0 && ctx.heal) ctx.heal(5); }
    if (!c || !c.lvl || NFA.lvl !== c.lvl || !c.last || c.lvl >= 3) return;
    NFA.lvl = c.lvl + 1; NFA.sfx('win'); if (ctx.heal) ctx.heal(5);
    ctx.toast('LEVEL ' + NFA.lvl + ' · ' + NFA.LEVELS[NFA.lvl] + ' · hearts refilled');
  };

  /* ---------- typed checkpoint (for numericals) ---------- */
  NFA.checkpoint = function (ctx, host, q, done) {
    var ov = el('div'); ov.style.cssText = 'position:absolute;inset:0;background:#0009;display:flex;align-items:center;justify-content:center;z-index:5;padding:14px';
    var card = el('div', 'nfa-card'); card.style.cssText = 'max-width:340px;width:100%;text-align:center;border:2px solid #ffd24d';
    card.innerHTML = '<div class="nfa-eyebrow">PIT STOP · WORK IT OUT</div><div style="font-weight:700;margin:8px 0">' + esc(q[0]) + '</div>';
    var row = el('div'); row.style.cssText = 'display:flex;gap:8px;justify-content:center;align-items:center';
    var inp = el('input'); inp.type = 'text'; inp.inputMode = 'decimal'; inp.placeholder = 'Answer'; inp.style.cssText = 'width:130px;padding:12px;border-radius:10px;border:2px solid #3d3b9a;background:#0d0d2b;color:#fff;font-size:18px;font-weight:800;text-align:center';
    var u = el('span', 'nfa-mute', esc(q[2] || '')), go = el('button', 'nfa-btn', 'Go'); row.appendChild(inp); row.appendChild(u); row.appendChild(go); card.appendChild(row);
    var msg = el('div', 'nfa-mute'); msg.style.cssText = 'min-height:36px;margin-top:8px;font-size:13px'; card.appendChild(msg); ov.appendChild(card); host.appendChild(ov);
    var tries = 0, val = function (s) { return parseFloat(String(s).replace(/[,\s%₹]/g, '')); }, fin = false;
    function end(ok) { if (fin) return; fin = true; setTimeout(function () { ov.remove(); NFA.lvlTick(ctx, q._c); done(ok); }, ok ? 450 / NFA.T : 1500 / NFA.T); }
    function chk() {
      if (fin) return; var v = val(inp.value); if (isNaN(v)) { msg.textContent = 'Type a number.'; return; }
      var a = val(q[1]), ok = Math.abs(v - a) <= Math.max(0.011, Math.abs(a) * 0.005);
      if (ok) { ctx.record('calc', true); ctx.addScore(150); NFA.sfx('win'); msg.innerHTML = '✅ ' + esc(q[3] || 'Correct.'); end(true); }
      else { tries++; ctx.record('calc', false); NFA.sfx('hit'); if (tries >= 2) { msg.innerHTML = '❌ The answer is ' + esc(String(q[1])) + (q[2] ? ' ' + esc(q[2]) : '') + '. ' + esc(q[3] || ''); inp.disabled = go.disabled = true; end(false); } else msg.textContent = 'Not quite. Check the formula and try once more.'; }
    }
    go.onclick = chk; inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') chk(); e.stopPropagation(); }); setTimeout(function () { try { inp.focus(); } catch (e) { } }, 50);
    ctx.cleanup(function () { ov.remove(); });
    return { answer: function () { inp.value = q[1]; chk(); }, now: function () { if (fin) return; fin = true; ctx.record('calc', true); ctx.addScore(150); ov.remove(); NFA.lvlTick(ctx, q._c); done(true); } };
  };

  /* ---------- skins ---------- */
  var SKINS = {
    city: { sky: 0x7ec8ff, fog: 0xbfe3ff, ground: 0x4d9a54, road: 0x34385a, acc: 0xffc44d, scn: 'tower' },
    jungle: { sky: 0x9be28a, fog: 0xcff3b8, ground: 0x2f8a3c, road: 0x6b4a2b, acc: 0xffe14d, scn: 'tree' },
    space: { sky: 0x0b0b2e, fog: 0x1a1a4a, ground: 0x15154a, road: 0x2a2a6a, acc: 0x4dfff0, scn: 'crystal' },
    desert: { sky: 0xffcf8a, fog: 0xffe2b8, ground: 0xe6b866, road: 0x8a5a36, acc: 0xff7a3d, scn: 'cactus' },
    snow: { sky: 0xbfe6ff, fog: 0xeaf6ff, ground: 0xf2f8ff, road: 0x5a6a8a, acc: 0x3da8ff, scn: 'pine' },
    castle: { sky: 0xc59bff, fog: 0xe3cfff, ground: 0x6a8f5a, road: 0x4a4258, acc: 0xff6a8a, scn: 'pillar' },
    factory: { sky: 0xffb48a, fog: 0xffd9c0, ground: 0x6b6f7a, road: 0x2e3038, acc: 0xffd24d, scn: 'tower' },
    farm: { sky: 0xa8e6ff, fog: 0xdff4ff, ground: 0x7cc44a, road: 0x9a7a4a, acc: 0xff5a3d, scn: 'tree' }
  };
  var KIT_SKIN = { tycoon: 'city', city: 'city', supermarket: 'city', detective: 'castle', escape: 'castle', quest: 'jungle', farm: 'farm', lab: 'space', machine: 'factory', circuit: 'factory', art: 'desert', story: 'snow', recipe: 'farm', racing: 'city', runner: 'jungle', space: 'space', sports: 'farm', tower: 'snow', rhythm: 'castle', jumper: 'jungle' };
  NFA.skin = function (spec) { return SKINS[spec.skin] || SKINS[KIT_SKIN[spec.skin || spec.kit]] || SKINS[KIT_SKIN[spec.kit]] || SKINS.city; };

  /* ---------- 3D runner ---------- */
  function cardTex(text, col, ok) {
    var c = document.createElement('canvas'); c.width = 512; c.height = 380; var g = c.getContext('2d');
    g.fillStyle = ok === true ? '#1fbf7a' : ok === false ? '#e0405a' : col; g.fillRect(0, 0, 512, 380);
    g.fillStyle = 'rgba(255,255,255,.18)'; g.fillRect(0, 0, 512, 110);
    g.strokeStyle = '#fff'; g.lineWidth = 14; g.strokeRect(7, 7, 498, 366);
    g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle'; var size = 88, lines;
    for (; size >= 30; size -= 4) {
      g.font = '900 ' + size + 'px system-ui,sans-serif'; var w = String(text).split(' '), cur = ''; lines = [];
      w.forEach(function (t) { var tt = cur ? cur + ' ' + t : t; if (g.measureText(tt).width > 440 && cur) { lines.push(cur); cur = t; } else cur = tt; }); lines.push(cur);
      if (lines.length * size * 1.1 <= 320 && lines.length <= 5) break;
    }
    g.shadowColor = '#0007'; g.shadowBlur = 6; var y0 = 190 - (lines.length - 1) * size * 0.55;
    lines.forEach(function (l, i) { g.fillText(l, 256, y0 + i * size * 1.1); });
    var t = new THREE.CanvasTexture(c); t.anisotropy = 4; return t;
  }
  function scenery(kind, acc) {
    var g = new THREE.Group(), M = function (c) { return new THREE.MeshLambertMaterial({ color: c, flatShading: true }); };
    if (kind === 'tree' || kind === 'pine') { var h = 1.6 + Math.random() * 1.2; var tr = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.28, h, 6), M(0x7a4a2a)); tr.position.y = h / 2; g.add(tr);
      for (var i = 0; i < 3; i++) { var c = new THREE.Mesh(kind === 'pine' ? new THREE.ConeGeometry(1.2 - i * 0.25, 1.3, 7) : new THREE.IcosahedronGeometry(1.1 - i * 0.2, 0), M(kind === 'pine' ? 0x2f7a5a : 0x39b04a)); c.position.y = h + i * 0.8; g.add(c); } }
    else if (kind === 'tower') { var w = 1.8 + Math.random() * 1.6, hh = 4 + Math.random() * 9; var b = new THREE.Mesh(new THREE.BoxGeometry(w, hh, w), M([0x8fa6d6, 0xd68fa6, 0xa6d68f, 0xd6c48f][Math.floor(Math.random() * 4)])); b.position.y = hh / 2; g.add(b);
      var win = new THREE.Mesh(new THREE.BoxGeometry(w * 1.02, 0.25, w * 1.02), new THREE.MeshBasicMaterial({ color: 0xfff3b0 })); win.position.y = hh * 0.7; g.add(win); }
    else if (kind === 'crystal') { var cr = new THREE.Mesh(new THREE.OctahedronGeometry(1 + Math.random(), 0), new THREE.MeshBasicMaterial({ color: [0x4dfff0, 0xff4dd2, 0x8a6bff][Math.floor(Math.random() * 3)] })); cr.scale.y = 2; cr.position.y = 2; g.add(cr); }
    else if (kind === 'cactus') { var ca = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 2.6, 7), M(0x3f9a4a)); ca.position.y = 1.3; g.add(ca); var arm = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 1, 6), M(0x3f9a4a)); arm.position.set(0.5, 1.7, 0); arm.rotation.z = -0.6; g.add(arm); }
    else { var p = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 5, 8), M(0xe9dff5)); p.position.y = 2.5; g.add(p); var cap = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.4, 1.5), M(acc)); cap.position.y = 5.1; g.add(cap); }
    return g;
  }
  function runner(skin) {
    var M = function (c) { return new THREE.MeshLambertMaterial({ color: c, flatShading: true }); }, g = new THREE.Group(), body = new THREE.Group(); g.add(body);
    var torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.5, 4, 8), M(skin.acc)); torso.position.y = 1.0; body.add(torso);
    var head = new THREE.Mesh(new THREE.SphereGeometry(0.27, 12, 10), M(0xffd0a8)); head.position.y = 1.7; body.add(head);
    var cap = new THREE.Mesh(new THREE.SphereGeometry(0.29, 12, 8, 0, 6.3, 0, 1.3), M(0x2b2b6a)); cap.position.y = 1.74; body.add(cap);
    var bag = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.5, 0.2), M(0xe0405a)); bag.position.set(0, 1.05, 0.28); body.add(bag);
    function limb(x, y, len, col) { var p = new THREE.Group(); p.position.set(x, y, 0); var m = new THREE.Mesh(new THREE.CapsuleGeometry(0.1, len, 4, 6), M(col)); m.position.y = -len / 2; p.add(m); body.add(p); return p; }
    var armL = limb(-0.38, 1.35, 0.5, 0xffd0a8), armR = limb(0.38, 1.35, 0.5, 0xffd0a8), legL = limb(-0.15, 0.75, 0.6, 0x2b2b6a), legR = limb(0.15, 0.75, 0.6, 0x2b2b6a);
    var sh = new THREE.Mesh(new THREE.CircleGeometry(0.55, 16), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28 })); sh.rotation.x = -Math.PI / 2; sh.position.y = 0.02; g.add(sh);
    g.userData = { body: body, armL: armL, armR: armR, legL: legL, legR: legR, shadow: sh };
    return g;
  }

  K.run3d = { name: 'Gate Runner 3D', howto: function () { return ['Swipe left or right (or use ← → / A D) to change lane. Swipe up, tap above the runner, or press Space or ↑ to jump.', 'The banner tells you what to collect. Run through the glowing gate with the right answer. Jump over the red hurdles.', 'A wrong gate or a hurdle hit costs a heart. Some stages end at a pit stop where you type a number.']; },
    run: function (ctx, spec) {
      var skin = NFA.skin(spec), cs = NFA.challenges(spec, 'cat', 108), LANE = 2.4, ROW = 60, SP0 = 8.6, SPMAX = 12.2;
      var host = el('div'); host.style.cssText = 'position:relative;max-width:420px;margin:0 auto'; ctx.root.appendChild(host);
      var W = Math.min(420, host.clientWidth || ctx.root.clientWidth || 380), H = Math.round(W * 1.42);
      var ren = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' }); ren.setPixelRatio(Math.min(2, window.devicePixelRatio || 1)); ren.setSize(W, H);
      var cv = ren.domElement; cv.style.cssText = 'width:100%;display:block;border-radius:16px;touch-action:none;border:2px solid #3d3b9a'; host.appendChild(cv);
      var sc = new THREE.Scene(); sc.background = new THREE.Color(skin.sky); sc.fog = new THREE.Fog(skin.fog, 40, 110);
      var cam = new THREE.PerspectiveCamera(66, W / H, 0.1, 140); cam.position.set(0, 3.4, 6.2); cam.lookAt(0, 1.2, -8);
      sc.add(new THREE.HemisphereLight(0xffffff, skin.ground, 1.05)); var sun = new THREE.DirectionalLight(0xffffff, 1.4); sun.position.set(-4, 9, 6); sc.add(sun);
      var ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 260), new THREE.MeshLambertMaterial({ color: skin.ground })); ground.rotation.x = -Math.PI / 2; ground.position.set(0, -0.02, -60); sc.add(ground);
      var road = new THREE.Mesh(new THREE.PlaneGeometry(LANE * 3 + 1, 260), new THREE.MeshLambertMaterial({ color: skin.road })); road.rotation.x = -Math.PI / 2; road.position.set(0, 0, -60); sc.add(road);
      [-1, 1].forEach(function (s) { var e = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.18, 260), new THREE.MeshBasicMaterial({ color: skin.acc })); e.position.set(s * (LANE * 1.5 + 0.5), 0.09, -60); sc.add(e); });
      var dashes = []; for (var d = 0; d < 22; d++) [-0.5, 0.5].forEach(function (o) { var m = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.02, 1.6), new THREE.MeshBasicMaterial({ color: 0xffffff })); m.position.set(o * LANE * 2 * 0.5 + (o > 0 ? LANE * 0.5 - 0.0 : -LANE * 0.5) - o * LANE * 0.0, 0.03, -d * 5); m.position.x = o * LANE; sc.add(m); dashes.push(m); });
      var side = []; for (var s = 0; s < 26; s++) { var o = scenery(skin.scn, skin.acc), sd = s % 2 ? 1 : -1; o.position.set(sd * (6.5 + Math.random() * 7), 0, -Math.floor(s / 2) * 9 - Math.random() * 4); o.userData.sd = sd; sc.add(o); side.push(o); }
      var clouds = []; for (var q = 0; q < 6; q++) { var cl = new THREE.Mesh(new THREE.SphereGeometry(2 + Math.random() * 2, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 })); cl.scale.set(2, 0.6, 1); cl.position.set((Math.random() - 0.5) * 70, 16 + Math.random() * 8, -50 - Math.random() * 40); sc.add(cl); clouds.push(cl); }
      var hero = runner(skin); sc.add(hero);
      /* particles */
      var parts = []; function burst(x, y, z, col, n) { for (var i = 0; i < n; i++) { var m = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.14), new THREE.MeshBasicMaterial({ color: col })); m.position.set(x, y, z); m.userData = { v: new THREE.Vector3((Math.random() - 0.5) * 6, 2 + Math.random() * 5, (Math.random() - 0.5) * 6), life: 0.7 }; sc.add(m); parts.push(m); } }
      /* world state */
      var lane = 1, px = 0, py = 0, vy = 0, lives = 5, speed = SP0, dist = 0, t = 0, done = false, hold = false, shake = 0, flash = 0, solved = 0, ci = 0, nextRow = 18, items = [], hurdlesOn = true, hurdleFlag = 0, lastMsg = '';
      var bn = NFA.bar(ctx.root), nt = NFA.note(ctx.root); bn.style.maxWidth = '420px';
      function hud() { ctx.setHud({ Lives: '❤'.repeat(Math.max(0, lives)), Level: NFA.LEVELS[NFA.lvl], Gates: solved + '/' + cs.length }); } ctx.heal = function () { lives = 5; hud(); }; setTimeout(function () { ctx.toast('LEVEL 1 · EASY'); }, 400);
      function banner(t) { bn.innerHTML = '🎯 <span style="color:#ffd24d">' + esc(t) + '</span>'; }
      function hurt() { lives--; shake = 0.5; flash = 0.4; NFA.sfx('hit'); hud(); if (lives <= 0 && !done) { done = true; ctx.finish(false); } }
      function spawnRow(c) {
        var z = -(nextRow + 36);
        if (c.k === 'calc') { var arch = new THREE.Group(); [-1, 1].forEach(function (s) { var p = new THREE.Mesh(new THREE.BoxGeometry(0.4, 4, 0.4), new THREE.MeshBasicMaterial({ color: 0xffd24d })); p.position.set(s * 4.2, 2, 0); arch.add(p); });
          var top = new THREE.Mesh(new THREE.PlaneGeometry(8.8, 1.4), new THREE.MeshBasicMaterial({ map: cardTex('PIT STOP', '#7a3df0') })); top.position.set(0, 4, 0); arch.add(top); arch.position.z = z; sc.add(arch); items.push({ k: 'calc', z: z, obj: arch, c: c, hit: false }); return; }
        var group = new THREE.Group(); var row = { k: 'gate', z: z, obj: group, c: c, cards: [], hit: false };
        c.opts.forEach(function (o, i) {
          var cols = ['#2b6cff', '#ff7a1f', '#9a3dff'], mat = new THREE.MeshBasicMaterial({ map: cardTex(o.t, cols[i]), side: THREE.DoubleSide });
          var m = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 1.7), mat); m.position.set((i - 1) * LANE, 2.85, 0); group.add(m);
          [-1, 1].forEach(function (s) { var p = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.6, 0.1), new THREE.MeshBasicMaterial({ color: 0xffffff })); p.position.set((i - 1) * LANE + s * 1.15, 1.3, 0); group.add(p); });
          var glow = new THREE.Mesh(new THREE.PlaneGeometry(LANE - 0.2, 1.4), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12 })); glow.rotation.x = -Math.PI / 2; glow.position.set((i - 1) * LANE, 0.05, 0); group.add(glow);
          row.cards.push({ mesh: m, o: o, i: i });
        });
        group.position.z = z; sc.add(group); items.push(row);
        /* hurdles between this row and the next: a barrier in one or two lanes */
        (NFA.lvl >= 2 ? [0.55, 0.25] : [0.55]).forEach(function (fr) { if (hurdlesOn && ci < cs.length) { var hz = z + ROW * fr, bl = Math.random() < 0.4 ? [0, 1, 2] : [Math.floor(Math.random() * 3)]; if (bl.length === 3) bl = [Math.floor(Math.random() * 3), (Math.floor(Math.random() * 3))]; var hg = new THREE.Group(); var uniq = {}; bl.forEach(function (l) { uniq[l] = 1; });
          Object.keys(uniq).forEach(function (l) { var b = new THREE.Mesh(new THREE.BoxGeometry(LANE - 0.4, 0.8, 0.5), new THREE.MeshLambertMaterial({ color: 0xe0304a, flatShading: true })); b.position.set((l - 1) * LANE, 0.4, 0); hg.add(b); var st = new THREE.Mesh(new THREE.BoxGeometry(LANE - 0.4, 0.18, 0.52), new THREE.MeshBasicMaterial({ color: 0xffffff })); st.position.set((l - 1) * LANE, 0.55, 0); hg.add(st); });
          hg.position.z = hz; sc.add(hg); items.push({ k: 'hurdle', z: hz, obj: hg, lanes: Object.keys(uniq).map(Number), hit: false }); } });
      }
      function setBanner() { var nxt = items.filter(function (r) { return (r.k === 'gate' || r.k === 'calc') && !r.hit; })[0]; if (nxt) banner(nxt.k === 'calc' ? 'Pit stop ahead: work out the number' : nxt.c.prompt); else banner('Finish line!'); }
      function jump() { if (py <= 0.001 && !hold && !done) { vy = 9.4; NFA.sfx('jump'); } }
      function mv(d) { if (!hold) lane = Math.max(0, Math.min(2, lane + d)); }
      NFA.keys(ctx, { ArrowLeft: function () { mv(-1); }, ArrowRight: function () { mv(1); }, a: function () { mv(-1); }, d: function () { mv(1); }, ArrowUp: jump, w: jump, ' ': jump });
      var sx = 0, sy = 0; cv.addEventListener('pointerdown', function (e) { sx = e.clientX; sy = e.clientY; });
      cv.addEventListener('pointerup', function (e) { var dx = e.clientX - sx, dy = e.clientY - sy; if (Math.abs(dx) > 26 && Math.abs(dx) > Math.abs(dy)) { dx < 0 ? mv(-1) : mv(1); } else if (dy < -26) jump(); else { var r = cv.getBoundingClientRect(); var fx = (e.clientX - r.left) / r.width; if (fx < 0.33) mv(-1); else if (fx > 0.67) mv(1); else jump(); } });
      function resolveGate(r) {
        r.hit = true; var card = r.cards[lane], ok = card.o.ok, c = r.c; ctx.record(c.k, ok); NFA.lvlTick(ctx, c);
        card.mesh.material.map = cardTex(card.o.t, '#000', ok); card.mesh.material.needsUpdate = true;
        if (ok) { ctx.addScore(100); solved++; if (solved % 12 === 0 && lives < 5) { lives++; hud(); } NFA.sfx('coin'); burst(px, 2, r.z, 0xffd24d, 22); NFA.say(nt, true, c.why); } else { hurt(); burst(px, 1.5, r.z, 0xe0405a, 14); NFA.say(nt, false, '"' + card.o.t + '" is not right. ' + c.why); solved++; }
        hud(); setBanner();
      }
      function step(dt) {
        if (done) return; t += dt; window.__t = t; if (hold) return;
        speed = SP0 + (NFA.lvl - 1) * 1.8; var dz = speed * dt; dist += dz;
        px += (( lane - 1) * LANE - px) * Math.min(1, dt * 12);
        vy -= 26 * dt; py += vy * dt; if (py <= 0) { py = 0; vy = 0; }
        items.forEach(function (r) { r.z += dz; r.obj.position.z = r.z; });
        nextRow -= dz; while (nextRow <= 0 && ci < cs.length) { spawnRow(cs[ci++]); nextRow += ROW; }
        items.forEach(function (r) {
          if (r.hit || r.z < -1.2) return;
          if (r.k === 'gate' && r.z > -0.6) resolveGate(r);
          else if (r.k === 'calc' && r.z > -0.6) { r.hit = true; hold = true; var cp = NFA.checkpoint(ctx, host, r.c.q, function (ok) { if (!ok) hurt(); solved++; hud(); hold = false; setBanner(); if (!done) { burst(px, 2, 0, 0x4dfff0, 18); } }); window.__cp = cp; }
          else if (r.k === 'hurdle' && r.z > -0.5 && r.z < 0.5) { if (r.lanes.indexOf(lane) >= 0 && py < 0.7 && Math.abs(px - (lane - 1) * LANE) < 1.0) { r.hit = true; hurt(); burst(px, 0.6, 0, 0xe0304a, 16); NFA.say(nt, false, 'Hurdle! Jump over the red barriers.'); } }
        });
        items = items.filter(function (r) { if (r.z > 8) { sc.remove(r.obj); r.obj.traverse(function (o) { if (o.material) { var ms = Array.isArray(o.material) ? o.material : [o.material]; ms.forEach(function (m) { if (m.map) m.map.dispose(); m.dispose(); }); } if (o.geometry) o.geometry.dispose(); }); return false; } return true; });
        if (!done && ci >= cs.length && !items.some(function (r) { return r.k !== 'hurdle' && !r.hit; })) { done = true; NFA.sfx('win'); burst(px, 2, 0, 0xffd24d, 40); setTimeout(function () { ctx.finish(true); }, 700 / NFA.T); }
      }
      function anim(dt) {
        dashes.forEach(function (m) { m.position.z += speed * dt; if (m.position.z > 6) m.position.z -= 110; });
        side.forEach(function (o) { o.position.z += speed * dt; if (o.position.z > 10) { o.position.z -= 120; o.position.x = o.userData.sd * (6.5 + Math.random() * 7); } });
        clouds.forEach(function (c) { c.position.x += dt * 0.6; if (c.position.x > 40) c.position.x = -40; });
        var u = hero.userData, ph = t * speed * 0.9; hero.position.set(px, py, 0);
        u.legL.rotation.x = Math.sin(ph) * 0.9; u.legR.rotation.x = -Math.sin(ph) * 0.9; u.armL.rotation.x = -Math.sin(ph) * 0.9; u.armR.rotation.x = Math.sin(ph) * 0.9;
        u.body.position.y = py > 0.01 ? 0 : Math.abs(Math.sin(ph)) * 0.08; u.body.rotation.z = ((lane - 1) * LANE - px) * -0.12; u.body.rotation.x = py > 0.01 ? -0.25 : 0.12; u.shadow.scale.setScalar(Math.max(0.5, 1 - py * 0.25));
        cam.position.x += (px * 0.55 - cam.position.x) * Math.min(1, dt * 5); cam.position.y = 3.4 + Math.max(0, py) * 0.25 + (shake > 0 ? (Math.random() - 0.5) * shake * 0.5 : 0);
        cam.fov += ((66 + (speed - SP0) * 1.1) - cam.fov) * Math.min(1, dt * 3); cam.updateProjectionMatrix(); cam.lookAt(px * 0.3, 1.2, -8);
        shake = Math.max(0, shake - dt * 1.6); flash = Math.max(0, flash - dt);
        parts.forEach(function (m) { m.userData.v.y -= 14 * dt; m.position.addScaledVector(m.userData.v, dt); m.position.z += speed * dt * 0.5; m.userData.life -= dt; m.scale.setScalar(Math.max(0.01, m.userData.life / 0.7)); });
        parts = parts.filter(function (m) { if (m.userData.life <= 0) { sc.remove(m); return false; } return true; });
        sc.background.setHex(flash > 0 ? 0xff6a7a : skin.sky);
      }
      hud(); for (var k0 = 0; k0 < 2 && ci < cs.length; k0++) { spawnRow(cs[ci++]); nextRow += ROW; } setBanner();
      var last = performance.now(), run = true, rid;
      function frame(now) { if (!run) return; var dt = Math.min(0.05, (now - last) / 1000); last = now; if (!ctx.isPaused()) { step(dt); } anim(ctx.isPaused() ? 0 : dt); ren.render(sc, cam); rid = requestAnimationFrame(frame); }
      rid = requestAnimationFrame(frame);
      ctx.cleanup(function () { run = false; cancelAnimationFrame(rid); try { ren.dispose(); } catch (e) { } host.remove(); });
      window.__auto = function () {
        var g = 0; while (!done && g++ < 400000) {
          if (hold) { if (window.__cp) { var c = window.__cp; window.__cp = null; c.now(); } else { hold = false; } step(0.001); continue; }
          var nxt = items.filter(function (r) { return r.k === 'gate' && !r.hit; })[0];
          if (nxt) { var ti = nxt.cards.filter(function (c) { return c.o.ok; })[0].i; lane = ti; }
          var hz = items.filter(function (r) { return r.k === 'hurdle' && !r.hit && r.z < 0 && r.z > -speed * 0.4 && r.lanes.indexOf(lane) >= 0; })[0];
          if (hz && hz.z >= -speed * 0.36 && py <= 0.001) { vy = 9.4; }
          step(0.016); if (hold === false && false) break;
        }
      };
    } };
})();
