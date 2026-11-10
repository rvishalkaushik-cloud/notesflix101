/* NOTESFLIX ARCADE: hill-climb racer and cut-the-rope puzzle (polished canvas games). Needs kits-3d.js. */
(function () {
  'use strict';
  var NFA = window.NFA, el = NFA.el, esc = NFA.esc, shuffle = NFA.shuffle, K = NFA.kits;
  function rr(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
  function wrapLines(g, s, maxW) { var w = String(s).split(' '), lines = [], cur = ''; w.forEach(function (t) { var tt = cur ? cur + ' ' + t : t; if (g.measureText(tt).width > maxW && cur) { lines.push(cur); cur = t; } else cur = tt; }); lines.push(cur); return lines; }
  function fitText(g, s, x, y, maxW, maxH, col, max) { var size = max || 18, lines; for (; size >= 9; size--) { g.font = '800 ' + size + 'px system-ui,sans-serif'; lines = wrapLines(g, s, maxW); if (lines.length * size * 1.15 <= maxH) break; } g.fillStyle = col; g.textAlign = 'center'; g.textBaseline = 'middle'; var y0 = y - (lines.length - 1) * size * 0.575; lines.forEach(function (l, i) { g.fillText(l, x, y0 + i * size * 1.15); }); }

  /* ================= HILL CLIMB RACER ================= */
  K.hill = { name: 'Hill Racer', howto: function () { return ['Hold GAS (or →/D) to drive and BRAKE (or ←/A) to slow down. Tap JUMP (or Space/↑) to leap over things.', 'The banner tells you what to collect. Drive through the barrel with the right answer and JUMP over the wrong ones and over rocks.', 'A wrong barrel or a rock costs a heart. Some stages end at a pit stop where you type a number.']; },
    run: function (ctx, spec) {
      var W = 420, H = 440, cv = NFA.canvas(ctx.root, W, H), g = cv.g, skin = NFA.skin(spec), cs = NFA.challenges(spec, 'cat', 100);
      function hex(n) { return '#' + ('000000' + n.toString(16)).slice(-6); }
      var bn = NFA.bar(ctx.root), nt = NFA.note(ctx.root), host = cv.c.parentNode; host.style.position = 'relative';
      function ground(x) { return 330 + 34 * Math.sin(x / 230) + 22 * Math.sin(x / 83 + 1.3) + 12 * Math.sin(x / 41); }
      var car = { x: 60, y: ground(60) - 16, vy: 0, v: 0, ang: 0, air: false, wr: 0 }, lives = 5, done = false, hold = false, t = 0, solved = 0, shake = 0, flash = 0, gas = false, brake = false, parts = [], objs = [], ci = 0, nextX = 560, fin = null;
      function hud() { ctx.setHud({ Lives: '❤'.repeat(Math.max(0, lives)), Level: NFA.LEVELS[NFA.lvl], Barrels: solved + '/' + cs.length }); } ctx.heal = function () { lives = 5; hud(); }; setTimeout(function () { ctx.toast('LEVEL 1 · EASY'); }, 400);
      function banner(s) { bn.innerHTML = '🎯 <span style="color:#ffd24d">' + esc(s) + '</span>'; }
      function hurt(msg) { lives--; shake = 0.4; flash = 0.35; car.v *= 0.35; NFA.sfx('hit'); if (msg) NFA.say(nt, false, msg); hud(); if (lives <= 0 && !done) { done = true; ctx.finish(false); } }
      function puff(x, y, col, n) { for (var i = 0; i < n; i++) parts.push({ x: x, y: y, vx: (Math.random() - 0.5) * 160 - 40, vy: -Math.random() * 140, life: 0.6, col: col }); }
      function spawn(c) {
        var x = nextX;
        if (c.k === 'calc') { objs.push({ k: 'calc', x: x + 120, c: c, hit: false }); nextX = x + 420; return; }
        c.opts.forEach(function (o, i) { objs.push({ k: 'can', x: x + i * 290, o: o, c: c, hit: false, lastOfRow: i === 2 }); });
        var rx = x + 3 * 290 + 20; objs.push({ k: 'rock', x: rx, hit: false }); nextX = rx + 400;
      }
      function curC() { var o = objs.filter(function (q) { return (q.k === 'can' || q.k === 'calc') && !q.hit; })[0]; return o ? o.c : null; }
      function setBanner() { var c = curC(); banner(c ? (c.k === 'calc' ? 'Pit stop ahead: work out the number' : c.prompt) : 'Reach the flag!'); }
      function jump() { if (!car.air && !hold && !done) { car.vy = -470; car.air = true; NFA.sfx('jump'); puff(car.x, car.y + 14, '#e8d8b0', 8); } }
      NFA.keys(ctx, { ArrowRight: function () { gas = true; }, d: function () { gas = true; }, ArrowLeft: function () { brake = true; }, a: function () { brake = true; }, ArrowUp: jump, w: jump, ' ': jump });
      var ku = function (e) { if (e.key === 'ArrowRight' || e.key === 'd') gas = false; if (e.key === 'ArrowLeft' || e.key === 'a') brake = false; }; window.addEventListener('keyup', ku); ctx.cleanup(function () { window.removeEventListener('keyup', ku); });
      var pad = el('div'); pad.style.cssText = 'display:flex;justify-content:center;gap:8px;margin-top:8px;max-width:420px;margin-left:auto;margin-right:auto';
      function hbtn(label, on, off, cls) { var b = el('button', 'nfa-btn' + (cls ? ' ' + cls : ''), label); b.style.cssText = 'flex:1;min-height:56px;font-size:16px;user-select:none;touch-action:none'; b.addEventListener('pointerdown', function (e) { e.preventDefault(); on(); }); ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (ev) { b.addEventListener(ev, function () { off && off(); }); }); pad.appendChild(b); }
      hbtn('◀ BRAKE', function () { brake = true; }, function () { brake = false; }, 'alt'); hbtn('⤒ JUMP', jump, null); hbtn('GAS ▶', function () { gas = true; }, function () { gas = false; });
      ctx.root.appendChild(pad);
      hud(); for (var k = 0; k < 2 && ci < cs.length; k++) spawn(cs[ci++]); setBanner();
      function step(dt) {
        if (done) return; t += dt; window.__t = t; if (hold) return;
        var gy = ground(car.x), gy2 = ground(car.x + 8), slope = (gy2 - gy) / 8, tang = Math.atan(slope);
        var acc = (gas ? 190 : 0) - (brake ? 260 : 0) - Math.sin(tang) * 220 - car.v * 0.45; car.v = Math.max(0, Math.min(135 + 28 * NFA.lvl, car.v + acc * dt)); if (gas && car.v < 40) car.v = 40;
        car.x += car.v * Math.cos(tang) * dt; car.wr += car.v * dt / 14;
        if (car.air) { car.vy += 900 * dt; car.y += car.vy * dt; var g2 = ground(car.x) - 16; if (car.y >= g2 && car.vy > 0) { car.y = g2; car.vy = 0; car.air = false; puff(car.x, car.y + 14, '#e8d8b0', 10); } }
        else { var g3 = ground(car.x) - 16; if (car.y < g3 - 4 && false) car.air = true; car.y = g3; }
        car.ang += (Math.atan((ground(car.x + 14) - ground(car.x - 14)) / 28) * (car.air ? 0.5 : 1) - car.ang) * Math.min(1, dt * 9);
        if (!car.air && car.v > 60 && Math.random() < 0.5) puff(car.x - 26, car.y + 16, '#d8c9a0', 1);
        if (ci < cs.length && nextX - car.x < 900) spawn(cs[ci++]);
        objs.forEach(function (o) {
          if (o.hit) return; var dx = o.x - car.x, h = (ground(o.x) - 16) - car.y;
          if (o.k === 'can' && Math.abs(dx) < 26 && h < 34) { o.hit = true; if (o.o.ok) { ctx.record(o.c.k, true); NFA.lvlTick(ctx, o.c); ctx.addScore(100); solved++; NFA.sfx('coin'); puff(o.x, ground(o.x) - 30, '#ffd24d', 20); NFA.say(nt, true, o.c.why); } else { ctx.record(o.c.k, false); NFA.lvlTick(ctx, o.c); puff(o.x, ground(o.x) - 30, '#e0405a', 14); hurt('"' + o.o.t + '" is not right. ' + o.c.why); }
            if (o.lastOfRow) { /* row finished; count it solved if player missed correct (rare) */ } hud(); setBanner(); }
          else if (o.k === 'can' && dx < -40 && !o.hit) { o.hit = true; if (o.o.ok) { ctx.record(o.c.k, false); NFA.lvlTick(ctx, o.c); hurt('You drove past the right barrel. ' + o.c.why); solved++; } hud(); setBanner(); }
          else if (o.k === 'rock' && Math.abs(dx) < 24 && h < 30) { o.hit = true; puff(o.x, ground(o.x) - 20, '#9aa0b0', 14); hurt('Rock! Jump over the hurdles.'); }
          else if (o.k === 'calc' && dx < 10) { o.hit = true; hold = true; var cp = NFA.checkpoint(ctx, host, o.c.q, function (ok) { if (!ok) hurt(); solved++; hud(); hold = false; setBanner(); }); window.__cp = cp; }
        });
        objs = objs.filter(function (o) { return o.x > car.x - 200; });
        parts.forEach(function (p) { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 300 * dt; p.life -= dt; }); parts = parts.filter(function (p) { return p.life > 0; });
        shake = Math.max(0, shake - dt * 1.5); flash = Math.max(0, flash - dt);
        if (!done && ci >= cs.length && !objs.some(function (o) { return (o.k === 'can' || o.k === 'calc') && !o.hit; })) { done = true; NFA.sfx('win'); setTimeout(function () { ctx.finish(true); }, 700 / NFA.T); }
      }
      function draw() {
        var cx = car.x - 140, sy = shake > 0 ? (Math.random() - 0.5) * shake * 14 : 0;
        var gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, hex(skin.sky)); gr.addColorStop(1, hex(skin.fog)); g.fillStyle = gr; g.fillRect(0, 0, W, H);
        g.fillStyle = '#fff8c0'; g.beginPath(); g.arc(330, 70, 34, 0, 7); g.fill(); g.fillStyle = '#ffffff55'; g.beginPath(); g.arc(330, 70, 52, 0, 7); g.fill();
        for (var L = 0; L < 2; L++) { g.fillStyle = L ? hex(skin.ground) + 'aa' : '#ffffff40'; g.beginPath(); g.moveTo(0, H); for (var x = 0; x <= W; x += 10) { var wx = x + cx * (L ? 0.35 : 0.15); g.lineTo(x, 250 - L * 20 - 50 * Math.abs(Math.sin(wx / (L ? 120 : 190))) - 20 * Math.sin(wx / 47)); } g.lineTo(W, H); g.fill(); }
        for (var c = 0; c < 4; c++) { var cxx = ((c * 190 - cx * 0.08) % (W + 160) + W + 160) % (W + 160) - 80; g.fillStyle = '#ffffffaa'; g.beginPath(); g.ellipse(cxx, 60 + c * 22, 46, 15, 0, 0, 7); g.fill(); }
        g.save(); g.translate(0, sy);
        g.beginPath(); g.moveTo(0, H + 10); for (var x2 = 0; x2 <= W; x2 += 6) g.lineTo(x2, ground(x2 + cx)); g.lineTo(W, H + 10); g.closePath();
        var tg = g.createLinearGradient(0, 300, 0, H); tg.addColorStop(0, hex(skin.road)); tg.addColorStop(1, '#2a1a10'); g.fillStyle = tg; g.fill();
        g.lineWidth = 9; g.strokeStyle = hex(skin.ground); g.beginPath(); for (var x3 = 0; x3 <= W; x3 += 6) { var yy = ground(x3 + cx); x3 ? g.lineTo(x3, yy) : g.moveTo(x3, yy); } g.stroke();
        g.lineWidth = 3; g.strokeStyle = '#ffffff55'; g.beginPath(); for (var x4 = 0; x4 <= W; x4 += 6) { var y4 = ground(x4 + cx) - 4; x4 ? g.lineTo(x4, y4) : g.moveTo(x4, y4); } g.stroke();
        objs.forEach(function (o) {
          var sx = o.x - cx; if (sx < -80 || sx > W + 80) return; var gy = ground(o.x);
          if (o.k === 'can') { var bw = 50, bh = 58, by = gy - bh - 2; g.globalAlpha = o.hit ? 0.35 : 1; g.fillStyle = '#00000033'; g.beginPath(); g.ellipse(sx, gy, 30, 6, 0, 0, 7); g.fill();
            var cg = g.createLinearGradient(sx - bw / 2, 0, sx + bw / 2, 0); cg.addColorStop(0, '#c43a2a'); cg.addColorStop(0.5, '#ff6a4d'); cg.addColorStop(1, '#a82a1c'); g.fillStyle = cg; rr(g, sx - bw / 2, by, bw, bh, 8); g.fill(); g.fillStyle = '#ffd24d'; g.fillRect(sx - bw / 2, by + 8, bw, 5); g.fillRect(sx - bw / 2, by + bh - 13, bw, 5);
            g.fillStyle = '#fff'; rr(g, sx - 56, by - 48, 112, 42, 9); g.fill(); g.beginPath(); g.moveTo(sx - 8, by - 6); g.lineTo(sx + 8, by - 6); g.lineTo(sx, by + 2); g.fill(); fitText(g, o.o.t, sx, by - 27, 102, 36, '#10102e', 15); g.globalAlpha = 1; }
          else if (o.k === 'rock') { g.fillStyle = '#00000033'; g.beginPath(); g.ellipse(sx, gy, 30, 6, 0, 0, 7); g.fill(); g.fillStyle = '#8a90a2'; g.beginPath(); g.moveTo(sx - 28, gy); g.lineTo(sx - 16, gy - 28); g.lineTo(sx + 4, gy - 36); g.lineTo(sx + 24, gy - 18); g.lineTo(sx + 30, gy); g.closePath(); g.fill(); g.fillStyle = '#b6bccd'; g.beginPath(); g.moveTo(sx - 16, gy - 28); g.lineTo(sx + 4, gy - 36); g.lineTo(sx + 2, gy - 16); g.closePath(); g.fill(); g.strokeStyle = '#e0304a'; g.lineWidth = 3; g.strokeRect(sx - 32, gy - 40, 64, 40); }
          else if (o.k === 'calc') { g.fillStyle = '#ffd24d'; g.fillRect(sx - 40, gy - 110, 8, 110); g.fillRect(sx + 32, gy - 110, 8, 110); g.fillStyle = '#7a3df0'; rr(g, sx - 44, gy - 130, 88, 30, 8); g.fill(); g.fillStyle = '#fff'; g.font = '900 15px system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('PIT STOP', sx, gy - 115); }
        });
        parts.forEach(function (p) { g.globalAlpha = Math.max(0, p.life / 0.6); g.fillStyle = p.col; g.beginPath(); g.arc(p.x - cx, p.y, 4, 0, 7); g.fill(); }); g.globalAlpha = 1;
        /* car */
        var sx0 = car.x - cx; g.save(); g.translate(sx0, car.y); g.rotate(car.ang);
        g.fillStyle = '#00000030'; g.beginPath(); g.ellipse(0, 24, 40, 5, 0, 0, 7); g.fill();
        var bg = g.createLinearGradient(0, -22, 0, 12); bg.addColorStop(0, hex(skin.acc)); bg.addColorStop(1, '#b02a40'); g.fillStyle = bg; rr(g, -36, -8, 72, 22, 9); g.fill();
        g.fillStyle = '#ffffff40'; rr(g, -30, -6, 58, 6, 3); g.fill();
        g.fillStyle = bg; rr(g, -18, -26, 36, 22, 9); g.fill(); g.fillStyle = '#bfe6ff'; rr(g, -13, -22, 26, 13, 5); g.fill();
        g.fillStyle = '#ffd0a8'; g.beginPath(); g.arc(2, -17, 6, 0, 7); g.fill(); g.fillStyle = '#2b2b6a'; g.beginPath(); g.arc(2, -19, 6.4, Math.PI, 0); g.fill();
        g.fillStyle = '#ffe98a'; g.fillRect(34, -2, 5, 6); if (gas) { g.fillStyle = '#ff7a1f'; g.beginPath(); g.moveTo(-36, 4); g.lineTo(-52 - Math.random() * 10, 8); g.lineTo(-36, 12); g.fill(); }
        [[-22, 14], [24, 14]].forEach(function (w) { g.save(); g.translate(w[0], w[1]); g.rotate(car.wr); g.fillStyle = '#1b1b24'; g.beginPath(); g.arc(0, 0, 13, 0, 7); g.fill(); g.fillStyle = '#c8cde0'; g.beginPath(); g.arc(0, 0, 6, 0, 7); g.fill(); g.strokeStyle = '#1b1b24'; g.lineWidth = 2; g.beginPath(); g.moveTo(-6, 0); g.lineTo(6, 0); g.moveTo(0, -6); g.lineTo(0, 6); g.stroke(); g.restore(); });
        g.restore(); g.restore();
        if (car.v > 200) { g.strokeStyle = '#ffffff55'; g.lineWidth = 2; for (var s = 0; s < 6; s++) { var ly = 100 + ((s * 53 + t * 400) % 200), lx = (s * 97 + t * 900) % W; g.beginPath(); g.moveTo(lx, ly); g.lineTo(lx - 40, ly); g.stroke(); } }
        if (flash > 0) { g.fillStyle = 'rgba(255,40,70,' + flash * 0.5 + ')'; g.fillRect(0, 0, W, H); }
        g.fillStyle = '#0006'; rr(g, 10, 10, 120, 12, 6); g.fill(); g.fillStyle = '#4dfff0'; rr(g, 10, 10, Math.max(8, 120 * Math.min(1, car.v / 260)), 12, 6); g.fill();
      }
      var last = performance.now(), run = true, rid;
      function frame(now) { if (!run) return; var dt = Math.min(0.033, (now - last) / 1000); last = now; if (!ctx.isPaused()) step(dt); draw(); rid = requestAnimationFrame(frame); }
      rid = requestAnimationFrame(frame); ctx.cleanup(function () { run = false; cancelAnimationFrame(rid); });
      window.__auto = function () {
        var n = 0; while (!done && n++ < 400000) {
          if (hold) { if (window.__cp) { var c = window.__cp; window.__cp = null; c.now(); } else hold = false; step(0.001); continue; }
          gas = true; brake = false;
          var near = objs.filter(function (o) { return !o.hit && (o.k === 'rock' || (o.k === 'can' && !o.o.ok)) && o.x - car.x > 0 && o.x - car.x < 240; })[0];
          if (near && !car.air) { var dx = near.x - car.x; if (dx <= car.v * 0.522) jump(); }
          step(0.016);
        }
      };
    } };

  /* ================= CUT THE ROPE ================= */
  K.rope = { name: 'Rope Drop Lab', howto: function () { return ['The gift hangs from a rope. Tap or swipe across a rope to cut it.', 'Time the cut so the gift falls into the right bucket. When it hangs from two ropes, cut one first, then the other.', 'The banner tells you where the gift must go. A wrong bucket costs a heart. Some stages end at a pit stop where you type a number.']; },
    run: function (ctx, spec) {
      var W = 420, H = 540, cv = NFA.canvas(ctx.root, W, H), g = cv.g, skin = NFA.skin(spec), hk = skin.acc;
      var cs = NFA.challenges(spec, 'item', 72), bn = NFA.bar(ctx.root), nt = NFA.note(ctx.root), host = cv.c.parentNode; host.style.position = 'relative';
      function hex(n) { return '#' + ('000000' + n.toString(16)).slice(-6); }
      var BINY = H - 120, G = 900, DT = 1 / 120, lives = 4, done = false, hold = false, ci = 0, solved = 0, t = 0, st = null, wait = 0, parts = [], flash = 0, shake = 0, lastBin = -1, lastOk = null, acc = 0;
      function hud() { ctx.setHud({ Lives: '❤'.repeat(Math.max(0, lives)), Level: NFA.LEVELS[NFA.lvl], Gifts: solved + '/' + cs.length }); } ctx.heal = function () { lives = 5; hud(); }; setTimeout(function () { ctx.toast('LEVEL 1 · EASY'); }, 400);
      function binOf(x) { return Math.max(0, Math.min(2, Math.floor(x / (W / 3)))); }
      /* deterministic physics: state s = {x,y,px,py, ropes:[{ax,ay,L,on}], landed:-1} */
      function phys(s) {
        var vx = (s.x - s.px) * 0.9993, vy = (s.y - s.py) * 0.9993; s.px = s.x; s.py = s.y; s.x += vx; s.y += vy + G * DT * DT;
        for (var it = 0; it < 4; it++) s.ropes.forEach(function (r) { if (!r.on) return; var dx = s.x - r.ax, dy = s.y - r.ay, d = Math.sqrt(dx * dx + dy * dy); if (d > r.L) { var k = r.L / d; s.x = r.ax + dx * k; s.y = r.ay + dy * k; } });
        if (s.x < 30) { var v1 = s.x - s.px; s.x = 30; s.px = 30 + v1 * 0.4; } if (s.x > W - 30) { var v2 = s.x - s.px; s.x = W - 30; s.px = W - 30 + v2 * 0.4; }
        if (s.y > BINY && s.landed < 0) s.landed = binOf(s.x);
      }
      function clone(s) { return { x: s.x, y: s.y, px: s.px, py: s.py, landed: s.landed, ropes: s.ropes.map(function (r) { return { ax: r.ax, ay: r.ay, L: r.L, on: r.on }; }) }; }
      /* find cut schedules that land in bin b; returns {first:[time list]} or null */
      function solve(s0, bin) {
        var best = null, n = s0.ropes.length, res = [];
        function run(cuts) { var s = clone(s0), tt = 0, ci2 = 0; for (var i = 0; i < 700 && s.landed < 0; i++) { while (ci2 < cuts.length && tt >= cuts[ci2][0]) { s.ropes[cuts[ci2][1]].on = false; ci2++; } phys(s); tt += DT; } return s.landed; }
        if (n === 1) { for (var c = 0.0; c <= 3.2; c += 0.04) { if (run([[c, 0]]) === bin) res.push([[c, 0]]); } }
        else { for (var a = 0; a <= 0.8; a += 0.4) for (var c2 = a + 0.2; c2 <= 3.2; c2 += 0.04) { if (run([[a, 0], [c2, 1]]) === bin) res.push([[a, 0], [c2, 1]]); } }
        return res;
      }
      function layout(c) {
        for (var tryN = 0; tryN < 40; tryN++) {
          var two = c.k !== 'calc' && Math.random() < 0.5, ay = 70, ropes, s;
          if (two) { var gap = 90 + Math.random() * 70, cx = W / 2 + (Math.random() - 0.5) * 80, L = 190 + Math.random() * 30; ropes = [{ ax: cx - gap, ay: ay, L: L, on: true }, { ax: cx + gap, ay: ay, L: L, on: true }];
            var side = Math.random() < 0.5 ? -1 : 1; s = { x: cx + side * 60, y: ay + Math.sqrt(L * L - Math.pow(gap - side * 60, 2)) * 0.98, landed: -1, ropes: ropes }; }
          else { var ax = 90 + Math.random() * 240, L1 = 200 + Math.random() * 40, ang = (Math.random() < 0.5 ? -1 : 1) * (0.7 + Math.random() * 0.5); ropes = [{ ax: ax, ay: ay, L: L1, on: true }]; s = { x: ax + Math.sin(ang) * L1, y: ay + Math.cos(ang) * L1, landed: -1, ropes: ropes }; }
          s.x = Math.max(40, Math.min(W - 40, s.x)); s.px = s.x; s.py = s.y;
          var bin = c.opts.findIndex(function (o) { return o.ok; }), sols = solve(s, bin);
          if (two ? sols.length >= 3 : sols.length >= 4) return { s: s, sols: sols, bin: bin };
        }
        /* fallback: simple single rope straight over the middle, always cuttable */
        var s2 = { x: W / 2 - 150, y: 70 + 170, px: W / 2 - 150, py: 70 + 170, landed: -1, ropes: [{ ax: W / 2, ay: 70, L: 190, on: true }] }; return { s: s2, sols: solve(s2, c.opts.findIndex(function (o) { return o.ok; })), bin: c.opts.findIndex(function (o) { return o.ok; }) };
      }
      function next() {
        if (ci >= cs.length) { done = true; NFA.sfx('win'); setTimeout(function () { ctx.finish(true); }, 600 / NFA.T); return; }
        var c = cs[ci++];
        if (c.k === 'calc') { hold = true; var cp = NFA.checkpoint(ctx, host, c.q, function (ok) { if (!ok) hurt(); solved++; hud(); hold = false; next(); }); window.__cp = cp; st = null; bn.innerHTML = '🎯 <span style="color:#ffd24d">Pit stop: work out the number</span>'; return; }
        var L = layout(c); st = { c: c, s: L.s, sols: L.sols, bin: L.bin, cut: 0, resolved: false }; bn.innerHTML = '🎯 <span style="color:#ffd24d">' + esc(c.ask) + '</span>'; acc = 0;
      }
      function hurt() { lives--; shake = 0.4; flash = 0.35; NFA.sfx('hit'); hud(); if (lives <= 0 && !done) { done = true; ctx.finish(false); } }
      function sparkle(x, y, col, n) { for (var i = 0; i < n; i++) parts.push({ x: x, y: y, vx: (Math.random() - 0.5) * 240, vy: -Math.random() * 260, life: 0.8, col: col }); }
      function cutRope(i) { var r = st.s.ropes[i]; if (!r.on) return; r.on = false; st.cut++; NFA.sfx('tick'); sparkle((r.ax + st.s.x) / 2, (r.ay + st.s.y) / 2, '#fff', 8); }
      function segHit(ax, ay, bx, by, cx, cy, dx, dy) { function o(px, py, qx, qy, rx, ry) { return (qy - py) * (rx - qx) - (qx - px) * (ry - qy); } var o1 = o(ax, ay, bx, by, cx, cy), o2 = o(ax, ay, bx, by, dx, dy), o3 = o(cx, cy, dx, dy, ax, ay), o4 = o(cx, cy, dx, dy, bx, by); return o1 * o2 < 0 && o3 * o4 < 0; }
      function distSeg(px, py, ax, ay, bx, by) { var dx = bx - ax, dy = by - ay, tt = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy))); return Math.hypot(px - (ax + tt * dx), py - (ay + tt * dy)); }
      var last = null, down = false;
      cv.c.addEventListener('pointerdown', function (e) { var p = cv.pt(e); last = p; down = true; if (!st || hold || done) return; st.s.ropes.forEach(function (r, i) { if (r.on && distSeg(p.x, p.y, r.ax, r.ay, st.s.x, st.s.y) < 18) cutRope(i); }); });
      cv.c.addEventListener('pointermove', function (e) { if (!down || !st || hold || done) return; var p = cv.pt(e); st.s.ropes.forEach(function (r, i) { if (r.on && segHit(last.x, last.y, p.x, p.y, r.ax, r.ay, st.s.x, st.s.y)) cutRope(i); }); last = p; });
      ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (ev) { cv.c.addEventListener(ev, function () { down = false; }); });
      function land() {
        var s = st.s, ok = s.landed === st.bin; st.resolved = true; lastBin = s.landed; lastOk = ok; ctx.record(st.c.k, ok); NFA.lvlTick(ctx, st.c);
        if (ok) { ctx.addScore(100); NFA.sfx('coin'); sparkle(s.x, BINY, '#ffd24d', 30); NFA.say(nt, true, st.c.why); } else { hurt(); sparkle(s.x, BINY, '#e0405a', 18); NFA.say(nt, false, st.c.why); }
        solved++; hud(); wait = 1.1;
      }
      function step(dt) {
        if (done || hold) return; t += dt; window.__t = t;
        if (wait > 0) { wait -= dt; if (wait <= 0) { lastBin = -1; next(); } }
        else if (st && !st.resolved) { acc += dt; while (acc >= DT && !st.resolved) { acc -= DT; phys(st.s); if (st.s.landed >= 0) land(); } }
        parts.forEach(function (p) { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 500 * dt; p.life -= dt; }); parts = parts.filter(function (p) { return p.life > 0; });
        shake = Math.max(0, shake - dt * 1.5); flash = Math.max(0, flash - dt);
      }
      function draw() {
        var sy = shake > 0 ? (Math.random() - 0.5) * shake * 12 : 0;
        var gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, hex(skin.sky)); gr.addColorStop(1, hex(skin.fog)); g.fillStyle = gr; g.fillRect(0, 0, W, H);
        g.fillStyle = '#ffffff26'; for (var i = 0; i < 14; i++) { g.beginPath(); g.arc((i * 83 + t * 8 * (1 + i % 3)) % W, (i * 61) % (BINY - 20) + 10, 3 + i % 4, 0, 7); g.fill(); }
        g.fillStyle = '#00000018'; for (var j = 0; j < 6; j++) { g.fillRect(j * 70 + 10, 0, 28, 28); g.fillRect(j * 70 + 38, 28, 28, 28); }
        g.save(); g.translate(0, sy);
        /* buckets */
        var bw = W / 3, c = st && st.c;
        for (var b = 0; b < 3; b++) {
          var x0 = b * bw, hit = lastBin === b, col = hit ? (lastOk ? '#1fbf7a' : '#e0405a') : ['#2b6cff', '#ff7a1f', '#9a3dff'][b];
          var bg = g.createLinearGradient(0, BINY, 0, H); bg.addColorStop(0, col); bg.addColorStop(1, '#10102e'); g.fillStyle = bg; g.beginPath(); g.moveTo(x0 + 8, BINY); g.lineTo(x0 + bw - 8, BINY); g.lineTo(x0 + bw - 22, H - 20); g.lineTo(x0 + 22, H - 20); g.closePath(); g.fill();
          g.strokeStyle = '#fff'; g.lineWidth = 4; g.beginPath(); g.moveTo(x0 + 8, BINY); g.lineTo(x0 + 22, H - 20); g.lineTo(x0 + bw - 22, H - 20); g.lineTo(x0 + bw - 8, BINY); g.stroke();
          var lab = c && c.opts ? c.opts[b].t : (lastBin >= 0 ? '' : ''); if (lab) fitText(g, lab, x0 + bw / 2, BINY + 50, bw - 46, 70, '#fff', 16);
        }
        if (st && !hold) {
          var s = st.s;
          s.ropes.forEach(function (r) { g.fillStyle = '#888'; g.beginPath(); g.arc(r.ax, r.ay, 9, 0, 7); g.fill(); g.fillStyle = '#ddd'; g.beginPath(); g.arc(r.ax, r.ay, 4, 0, 7); g.fill();
            if (r.on) { var d = Math.hypot(s.x - r.ax, s.y - r.ay), sag = Math.max(0, r.L - d) * 0.5; g.strokeStyle = '#6b3f1d'; g.lineWidth = 6; g.lineCap = 'round'; g.beginPath(); g.moveTo(r.ax, r.ay); g.quadraticCurveTo((r.ax + s.x) / 2, (r.ay + s.y) / 2 + sag, s.x, s.y); g.stroke(); g.strokeStyle = '#c98a4a'; g.lineWidth = 2; g.setLineDash([5, 5]); g.stroke(); g.setLineDash([]); } });
          /* gift */
          var gx = s.x, gy = s.y, rot = Math.atan2(s.y - s.py, s.x - s.px) * 0.1;
          g.save(); g.translate(gx, gy); g.rotate(rot); g.fillStyle = '#00000030'; g.beginPath(); g.ellipse(0, 36, 34, 6, 0, 0, 7); g.fill();
          var gg = g.createLinearGradient(-34, -26, 34, 26); gg.addColorStop(0, '#ffe98a'); gg.addColorStop(1, hex(hk)); g.fillStyle = gg; rr(g, -36, -28, 72, 56, 10); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 3; g.stroke();
          g.fillStyle = '#e0405a'; g.fillRect(-5, -28, 10, 56); g.beginPath(); g.ellipse(-10, -32, 12, 7, -0.5, 0, 7); g.ellipse(10, -32, 12, 7, 0.5, 0, 7); g.fill();
          g.restore();
          var pt = st.c.tag || '';
          if (pt) { var lx = Math.max(64, Math.min(W - 64, gx)); g.fillStyle = '#fff'; rr(g, lx - 62, gy + 34, 124, 30, 8); g.fill(); fitText(g, pt, lx, gy + 49, 116, 26, '#10102e', 14); }
        }
        parts.forEach(function (p) { g.globalAlpha = Math.max(0, p.life / 0.8); g.fillStyle = p.col; g.beginPath(); g.arc(p.x, p.y, 4, 0, 7); g.fill(); }); g.globalAlpha = 1;
        g.restore();
        if (flash > 0) { g.fillStyle = 'rgba(255,40,70,' + flash * 0.5 + ')'; g.fillRect(0, 0, W, H); }
        if (st && !hold && st.cut === 0 && !st.resolved) { g.fillStyle = '#fff'; g.font = '800 14px system-ui'; g.textAlign = 'center'; g.fillText('✂ Tap or swipe the rope', W / 2, 30); }
      }
      hud(); next();
      var lastT = performance.now(), run = true, rid;
      function frame(now) { if (!run) return; var dt = Math.min(0.033, (now - lastT) / 1000); lastT = now; if (!ctx.isPaused()) step(dt); draw(); rid = requestAnimationFrame(frame); }
      rid = requestAnimationFrame(frame); ctx.cleanup(function () { run = false; cancelAnimationFrame(rid); });
      window.__auto = function () {
        var n = 0; while (!done && n++ < 400000) {
          if (hold) { if (window.__cp) { var c = window.__cp; window.__cp = null; c.now(); } else hold = false; continue; }
          if (wait > 0) { step(0.05); continue; }
          if (st && !st.resolved) {
            var sol = st.sols[Math.floor(st.sols.length / 2)] || [[0, 0]], tt = 0, ci2 = 0;
            while (!st.resolved && tt < 12) { while (ci2 < sol.length && tt >= sol[ci2][0]) { cutRope(sol[ci2][1]); ci2++; } phys(st.s); tt += DT; if (st.s.landed >= 0) land(); }
          } else step(0.05);
        }
      };
      window.__solvable = function () { return st && st.sols.length; };
    } };
})();

/* ================= more engines: jetpack flyer and shot master ================= */
(function () {
  'use strict';
  var NFA = window.NFA, el = NFA.el, esc = NFA.esc, shuffle = NFA.shuffle, K = NFA.kits;
  function hex(n) { return '#' + ('000000' + n.toString(16)).slice(-6); }
  function rr(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
  function fit(g, s, x, y, maxW, maxH, col, max) { var size = max || 16, lines; for (; size >= 9; size--) { g.font = '800 ' + size + 'px system-ui,sans-serif'; var w = String(s).split(' '), cur = ''; lines = []; w.forEach(function (t) { var tt = cur ? cur + ' ' + t : t; if (g.measureText(tt).width > maxW && cur) { lines.push(cur); cur = t; } else cur = tt; }); lines.push(cur); if (lines.length * size * 1.15 <= maxH) break; } g.fillStyle = col; g.textAlign = 'center'; g.textBaseline = 'middle'; var y0 = y - (lines.length - 1) * size * 0.575; lines.forEach(function (l, i) { g.fillText(l, x, y0 + i * size * 1.15); }); }

  /* ----- Jetpack flyer: your altitude picks the answer ----- */
  K.jet = { name: 'Jetpack Flyer', howto: function () { return ['Hold the screen (or Space / ↑) to fly up, release to fall.', 'The banner tells you what to collect. Fly to the height of the right bubble in each column.', 'Dodge the electric zappers. A wrong bubble, a missed column or a zapper hit costs a heart. Some stages end at a pit stop where you type a number.']; },
    run: function (ctx, spec) {
      var W = 420, H = 440, cv = NFA.canvas(ctx.root, W, H), g = cv.g, skin = NFA.skin(spec), cs = NFA.challenges(spec, 'cat', 108), bn = NFA.bar(ctx.root), nt = NFA.note(ctx.root), host = cv.c.parentNode; host.style.position = 'relative';
      var py = 220, vy = 0, up = false, lives = 5, done = false, hold = false, t = 0, solved = 0, ci = 0, nextX = 520, objs = [], parts = [], flash = 0, shake = 0, wx = 0, SP = 190, PX = 90, imm = 0;
      var Y = [100, 220, 340];
      function hud() { ctx.setHud({ Lives: '❤'.repeat(Math.max(0, lives)), Level: NFA.LEVELS[NFA.lvl], Columns: solved + '/' + cs.length }); } ctx.heal = function () { lives = 5; hud(); }; setTimeout(function () { ctx.toast('LEVEL 1 · EASY'); }, 400);
      function setBanner() { var o = objs.filter(function (q) { return q.k !== 'zap' && !q.done; })[0]; bn.innerHTML = '🎯 <span style="color:#ffd24d">' + esc(o ? (o.k === 'calc' ? 'Pit stop ahead: work out the number' : o.c.prompt) : 'Finish line!') + '</span>'; }
      function hurt(m) { if (imm > 0) return; lives--; imm = 1.0; shake = 0.4; flash = 0.35; NFA.sfx('hit'); if (m) NFA.say(nt, false, m); hud(); if (lives <= 0 && !done) { done = true; ctx.finish(false); } }
      function burst(x, y, col, n) { for (var i = 0; i < n; i++) parts.push({ x: x, y: y, vx: (Math.random() - 0.5) * 240, vy: (Math.random() - 0.5) * 240, life: 0.7, col: col }); }
      function spawn(c) {
        var x = nextX;
        if (c.k === 'calc') { objs.push({ k: 'calc', x: x, c: c, done: false }); nextX = x + 600; return; }
        var order = shuffle([0, 1, 2]); objs.push({ k: 'col', x: x, c: c, done: false, hits: false, b: c.opts.map(function (o, i) { return { o: o, y: Y[order[i]], got: false }; }) });
        var zy = 100 + Math.random() * 240; objs.push({ k: 'zap', x: x + 420, y: zy, h: 48 });
        if (Math.random() < 0.6) objs.push({ k: 'zap', x: x + 800, y: zy > 220 ? zy - 130 : zy + 130, h: 44 });
        nextX = x + 1100;
      }
      hud(); for (var q0 = 0; q0 < 2 && ci < cs.length; q0++) spawn(cs[ci++]); setBanner();
      function fly(v) { up = v; } NFA.keys(ctx, { ' ': function () { up = true; }, ArrowUp: function () { up = true; }, w: function () { up = true; } });
      var ku = function (e) { if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w') up = false; }; window.addEventListener('keyup', ku); ctx.cleanup(function () { window.removeEventListener('keyup', ku); });
      cv.c.addEventListener('pointerdown', function () { up = true; }); ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (ev) { cv.c.addEventListener(ev, function () { up = false; }); });
      function step(dt) {
        if (done) return; t += dt; window.__t = t; if (hold) return; imm = Math.max(0, imm - dt);
        SP = 172 + (NFA.lvl - 1) * 22 + Math.min(20, wx / 400); wx += SP * dt; vy += (up ? -1500 : 900) * dt; vy = Math.max(-380, Math.min(420, vy)); py += vy * dt; if (py < 30) { py = 30; vy = 0; } if (py > H - 50) { py = H - 50; vy = 0; }
        if (nextX - wx < 1100 && ci < cs.length) spawn(cs[ci++]);
        objs.forEach(function (o) {
          var sx = o.x - wx + PX; if (o.done) return;
          if (o.k === 'col') { o.b.forEach(function (b) { if (!b.got && Math.abs(sx - PX) < 40 && Math.abs(b.y - py) < 44) { b.got = true; o.hits = true; o.done = true;
              ctx.record(o.c.k, b.o.ok); NFA.lvlTick(ctx, o.c); if (b.o.ok) { ctx.addScore(100); NFA.sfx('coin'); burst(PX, b.y, '#ffd24d', 24); NFA.say(nt, true, o.c.why); } else { burst(PX, b.y, '#e0405a', 14); hurt('"' + b.o.t + '" is not right. ' + o.c.why); } solved++; hud(); setBanner(); } });
            if (!o.done && sx < PX - 50) { o.done = true; ctx.record(o.c.k, false); NFA.lvlTick(ctx, o.c); solved++; hurt('You flew past it. ' + o.c.why); hud(); setBanner(); } }
          else if (o.k === 'zap') { if (Math.abs(sx - PX) < 18 && Math.abs(py - o.y) < o.h + 10) { hurt('Zapped! Fly around the electric bars.'); burst(PX, py, '#4dfff0', 14); } if (sx < -40) o.done = true; }
          else if (o.k === 'calc' && sx < PX + 10) { o.done = true; hold = true; var cp = NFA.checkpoint(ctx, host, o.c.q, function (ok) { if (!ok) hurt(); solved++; hud(); hold = false; setBanner(); }); window.__cp = cp; }
        });
        objs = objs.filter(function (o) { return o.x - wx > -200; });
        if (up && Math.random() < 0.7) parts.push({ x: PX - 14, y: py + 18, vx: -90 - Math.random() * 60, vy: 40 + Math.random() * 60, life: 0.4, col: '#ffb02e' });
        parts.forEach(function (p) { p.x += p.vx * dt; p.y += p.vy * dt; p.life -= dt; }); parts = parts.filter(function (p) { return p.life > 0; });
        shake = Math.max(0, shake - dt * 1.5); flash = Math.max(0, flash - dt);
        if (!done && ci >= cs.length && !objs.some(function (o) { return o.k !== 'zap' && !o.done; })) { done = true; NFA.sfx('win'); setTimeout(function () { ctx.finish(true); }, 600 / NFA.T); }
      }
      function draw() {
        var sy = shake > 0 ? (Math.random() - 0.5) * shake * 12 : 0, gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, hex(skin.sky)); gr.addColorStop(1, hex(skin.fog)); g.fillStyle = gr; g.fillRect(0, 0, W, H);
        g.fillStyle = '#ffffff30'; for (var i = 0; i < 8; i++) { var cx = ((i * 150 - wx * 0.15) % (W + 200) + W + 200) % (W + 200) - 100; g.beginPath(); g.ellipse(cx, 60 + (i * 47) % 260, 50, 16, 0, 0, 7); g.fill(); }
        g.fillStyle = '#00000020'; for (var j = 0; j < 12; j++) { var bx = ((j * 90 - wx * 0.4) % (W + 120) + W + 120) % (W + 120) - 60; g.fillRect(bx, H - 120 - (j * 37) % 70, 46, 200); }
        g.save(); g.translate(0, sy); g.fillStyle = hex(skin.road); g.fillRect(0, H - 22, W, 22); g.fillStyle = hex(skin.acc); g.fillRect(0, H - 22, W, 4); g.fillRect(0, 0, W, 5);
        objs.forEach(function (o) {
          var sx = o.x - wx + PX; if (sx < -80 || sx > W + 80) return;
          if (o.k === 'col') o.b.forEach(function (b) { g.globalAlpha = b.got ? 0.3 : 1; var pulse = 1 + Math.sin(t * 5 + b.y) * 0.04; g.fillStyle = hex(skin.acc) + '55'; g.beginPath(); g.arc(sx, b.y, 46 * pulse, 0, 7); g.fill(); var bg = g.createRadialGradient(sx - 10, b.y - 12, 4, sx, b.y, 38); bg.addColorStop(0, '#ffffff'); bg.addColorStop(1, '#8fb8ff'); g.fillStyle = bg; g.beginPath(); g.arc(sx, b.y, 38, 0, 7); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 3; g.stroke(); fit(g, b.o.t, sx, b.y, 62, 56, '#10102e', 14); g.globalAlpha = 1; });
          else if (o.k === 'zap') { var a = 0.6 + Math.random() * 0.4; g.strokeStyle = '#4dfff0'; g.globalAlpha = a; g.lineWidth = 6; g.beginPath(); g.moveTo(sx, o.y - o.h); for (var z = -o.h; z <= o.h; z += 14) g.lineTo(sx + (Math.random() - 0.5) * 12, o.y + z); g.stroke(); g.lineWidth = 2; g.strokeStyle = '#fff'; g.stroke(); g.globalAlpha = 1; g.fillStyle = '#2a2a6a'; g.fillRect(sx - 9, o.y - o.h - 8, 18, 12); g.fillRect(sx - 9, o.y + o.h - 4, 18, 12); }
          else if (o.k === 'calc') { g.fillStyle = '#7a3df0'; rr(g, sx - 60, 120, 120, 40, 10); g.fill(); g.fillStyle = '#fff'; g.font = '900 16px system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('PIT STOP', sx, 140); g.fillStyle = '#ffd24d'; g.fillRect(sx - 4, 160, 8, 260); }
        });
        parts.forEach(function (p) { g.globalAlpha = Math.max(0, p.life / 0.5); g.fillStyle = p.col; g.beginPath(); g.arc(p.x, p.y, 4, 0, 7); g.fill(); }); g.globalAlpha = 1;
        g.save(); g.translate(PX, py); g.rotate(vy / 1200); g.globalAlpha = imm > 0 && Math.floor(t * 16) % 2 ? 0.4 : 1;
        g.fillStyle = '#9aa0b8'; rr(g, -18, -6, 10, 28, 4); g.fill(); if (up) { g.fillStyle = '#ffb02e'; g.beginPath(); g.moveTo(-18, 22); g.lineTo(-13, 40 + Math.random() * 10); g.lineTo(-8, 22); g.fill(); }
        g.fillStyle = hex(skin.acc); rr(g, -10, -16, 24, 34, 8); g.fill(); g.fillStyle = '#ffd0a8'; g.beginPath(); g.arc(4, -24, 10, 0, 7); g.fill(); g.fillStyle = '#2b2b6a'; g.beginPath(); g.arc(4, -26, 10.5, Math.PI, 0); g.fill(); g.fillStyle = '#2b2b6a'; g.fillRect(-4, 16, 6, 14); g.fillRect(6, 16, 6, 14); g.restore(); g.globalAlpha = 1; g.restore();
        if (flash > 0) { g.fillStyle = 'rgba(255,40,70,' + flash * 0.5 + ')'; g.fillRect(0, 0, W, H); }
        if (t < 3) { g.fillStyle = '#fff'; g.font = '800 14px system-ui'; g.textAlign = 'center'; g.fillText('Hold to fly up', W / 2, H - 40); }
      }
      var last = performance.now(), run = true, rid;
      function frame(now) { if (!run) return; var dt = Math.min(0.033, (now - last) / 1000); last = now; if (!ctx.isPaused()) step(dt); draw(); rid = requestAnimationFrame(frame); }
      rid = requestAnimationFrame(frame); ctx.cleanup(function () { run = false; cancelAnimationFrame(rid); });
      window.__auto = function () {
        var n = 0; while (!done && n++ < 400000) {
          if (hold) { if (window.__cp) { var c = window.__cp; window.__cp = null; c.now(); } else hold = false; step(0.001); continue; }
          var col = objs.filter(function (o) { return o.k === 'col' && !o.done; })[0], want = py;
          if (col) want = col.b.filter(function (b) { return b.o.ok; })[0].y;
          var zs = objs.filter(function (o) { var d = o.x - wx; return o.k === 'zap' && !o.done && d > -30 && d < 200 && (!col || o.x <= col.x + 30); });
          zs.forEach(function (z) { var lo = z.y - z.h - 46, hi = z.y + z.h + 46, canUp = lo > 36, canDn = hi < H - 36, up2 = canUp && (py <= z.y || !canDn);
            if (want > lo && want < hi || (py < z.y) !== (want < z.y)) { if (up2) want = Math.min(want, lo); else want = Math.max(want, hi); } });
           var dv = Math.max(-260, Math.min(260, (want - py) * 5)); up = vy > dv;
          step(0.01);
        }
      };
    } };

  /* ----- Shot master: aim and release so the ball drops through the right hoop ----- */
  K.shot = { name: 'Shot Master', howto: function () { return ['Drag back from the ball like a slingshot, then release to shoot. The dotted line shows your path.', 'Each hoop is labelled. Shoot the ball into the hoop that matches the banner and the ball.', 'Three misses on one ball reveals the answer and costs a heart. A wrong hoop also costs a heart. Some stages end at a pit stop where you type a number.']; },
    run: function (ctx, spec) {
      var W = 420, H = 460, cv = NFA.canvas(ctx.root, W, H), g = cv.g, skin = NFA.skin(spec), cs = NFA.challenges(spec, 'item', 72), bn = NFA.bar(ctx.root), nt = NFA.note(ctx.root), host = cv.c.parentNode; host.style.position = 'relative';
      var GR = 900, DT = 1 / 120, BX = 56, BY = H - 70, lives = 5, done = false, hold = false, ci = 0, solved = 0, t = 0, st = null, wait = 0, parts = [], flash = 0, shake = 0, drag = null, acc = 0;
      function hud() { ctx.setHud({ Lives: '❤'.repeat(Math.max(0, lives)), Level: NFA.LEVELS[NFA.lvl], Shots: solved + '/' + cs.length }); } ctx.heal = function () { lives = 5; hud(); }; setTimeout(function () { ctx.toast('LEVEL 1 · EASY'); }, 400);
      function hurt(m) { lives--; shake = 0.4; flash = 0.35; NFA.sfx('hit'); hud(); if (lives <= 0 && !done) { done = true; ctx.finish(false); } }
      function burst(x, y, col, n) { for (var i = 0; i < n; i++) parts.push({ x: x, y: y, vx: (Math.random() - 0.5) * 260, vy: -Math.random() * 280, life: 0.8, col: col }); }
      function fly(b) { b.vy += GR * DT; b.x += b.vx * DT; b.y += b.vy * DT; }
      function hoopCheck(b, py) { for (var i = 0; i < st.hoops.length; i++) { var h = st.hoops[i]; if (b.vy > 0 && py <= h.y && b.y > h.y && Math.abs(b.x - h.x) < 24) return i; } return -1; }
      function simShot(vx, vy) { var b = { x: BX, y: BY, vx: vx, vy: vy }, n = 0; while (n++ < 900) { var py = b.y; fly(b); var h = hoopCheck(b, py); if (h >= 0) return h; if (b.y > BY + 20 || b.x > W + 40) return -1; } return -1; }
      function levelFor(c) {
        var bin = c.opts.findIndex(function (o) { return o.ok; });
        for (var tryN = 0; tryN < 60; tryN++) {
          var xs = shuffle(c.opts.length < 3 ? [190, 320] : [170, 255, 340]), hoops = xs.map(function (x, i) { return { x: x + (Math.random() - 0.5) * 16, y: 130 + Math.random() * 170, o: c.opts[i] }; });
          st = { c: c, hoops: hoops, ball: { x: BX, y: BY, vx: 0, vy: 0 }, flying: false, tries: 3, resolved: false };
          if (solveFor(bin)) return;
        }
        st.hoops.forEach(function (h, i) { h.x = (st.hoops.length < 3 ? [190, 320] : [170, 255, 340])[i]; h.y = 200; });
      }
      function solveFor(bin) { var h = st.hoops[bin]; for (var a = 40; a <= 80; a += 1) { var th = a * Math.PI / 180, d = h.x - BX, hh = BY - h.y, den = 2 * Math.pow(Math.cos(th), 2) * (d * Math.tan(th) - -hh * -1 - 0); /* v^2 = g d^2 / (2 cos^2 (d tan - rise)) */ var rise = hh, dn = d * Math.tan(th) - rise; if (dn <= 0) continue; var v2 = GR * d * d / (2 * Math.pow(Math.cos(th), 2) * dn), v = Math.sqrt(v2); if (v > 720) continue; var vx = v * Math.cos(th), vy = -v * Math.sin(th); for (var dv = 0; dv < 3; dv++) { if (simShot(vx, vy) === bin) { st.sol = [vx, vy]; return true; } vx *= 1.005; vy *= 1.005; } } return false; }
      function next() {
        if (ci >= cs.length) { done = true; NFA.sfx('win'); setTimeout(function () { ctx.finish(true); }, 600 / NFA.T); return; }
        var c = cs[ci++];
        if (c.k === 'calc') { hold = true; st = null; var cp = NFA.checkpoint(ctx, host, c.q, function (ok) { if (!ok) hurt(); solved++; hud(); hold = false; next(); }); window.__cp = cp; bn.innerHTML = '🎯 <span style="color:#ffd24d">Pit stop: work out the number</span>'; return; }
        levelFor(c); bn.innerHTML = '🎯 <span style="color:#ffd24d">' + esc(c.ask) + '</span>';
      }
      function launch(vx, vy) { if (!st || st.flying || st.resolved) return; st.ball = { x: BX, y: BY, vx: vx, vy: vy }; st.flying = true; NFA.sfx('jump'); acc = 0; }
      function resolve(h) {
        var ok = st.hoops[h].o.ok; st.resolved = true; st.flying = false; ctx.record(st.c.k, ok); NFA.lvlTick(ctx, st.c); var hp = st.hoops[h];
        if (ok) { ctx.addScore(100); NFA.sfx('coin'); burst(hp.x, hp.y, '#ffd24d', 28); NFA.say(nt, true, st.c.why); } else { hurt(); burst(hp.x, hp.y, '#e0405a', 16); NFA.say(nt, false, '"' + hp.o.t + '" is not right. ' + st.c.why); }
        solved++; hud(); wait = 1.0;
      }
      function miss() {
        st.flying = false; st.tries--; NFA.sfx('tick');
        if (st.tries <= 0) { st.resolved = true; ctx.record(st.c.k, false); NFA.lvlTick(ctx, st.c); hurt(); NFA.say(nt, false, 'Out of shots. ' + st.c.why); solved++; hud(); wait = 1.2; } else { NFA.say(nt, false, 'Missed. ' + st.tries + ' shot' + (st.tries > 1 ? 's' : '') + ' left. Adjust your angle and power.'); st.ball = { x: BX, y: BY, vx: 0, vy: 0 }; }
      }
      function pt(e) { return cv.pt(e); }
      cv.c.addEventListener('pointerdown', function (e) { if (!st || st.flying || hold || done) return; var p = pt(e); drag = { x: p.x, y: p.y }; });
      cv.c.addEventListener('pointermove', function (e) { if (drag) { var p = pt(e); drag.x = p.x; drag.y = p.y; } });
      function rel() { if (!drag) return; var vx = (BX - drag.x) * 5.2, vy = (BY - drag.y) * 5.2, m = Math.hypot(vx, vy); if (m > 760) { vx *= 760 / m; vy *= 760 / m; } drag = null; if (m > 90) launch(vx, vy); }
      ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (ev) { cv.c.addEventListener(ev, rel); });
      function step(dt) {
        if (done || hold) return; t += dt; window.__t = t;
        if (wait > 0) { wait -= dt; if (wait <= 0) next(); }
        else if (st && st.flying) { acc += dt; while (acc >= DT && st.flying) { acc -= DT; var b = st.ball, py = b.y; fly(b); var h = hoopCheck(b, py); if (h >= 0) { resolve(h); break; } if (b.y > BY + 20 || b.x > W + 40 || b.x < -40) { miss(); break; } } }
        parts.forEach(function (p) { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 500 * dt; p.life -= dt; }); parts = parts.filter(function (p) { return p.life > 0; });
        shake = Math.max(0, shake - dt * 1.5); flash = Math.max(0, flash - dt);
      }
      function draw() {
        var sy = shake > 0 ? (Math.random() - 0.5) * shake * 12 : 0, gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, hex(skin.sky)); gr.addColorStop(1, hex(skin.fog)); g.fillStyle = gr; g.fillRect(0, 0, W, H);
        g.fillStyle = '#ffffff30'; for (var i = 0; i < 6; i++) { g.beginPath(); g.ellipse((i * 110 + t * 6) % (W + 120) - 40, 50 + (i * 53) % 150, 46, 14, 0, 0, 7); g.fill(); }
        g.save(); g.translate(0, sy); g.fillStyle = hex(skin.ground); g.fillRect(0, BY + 20, W, H); g.fillStyle = hex(skin.acc); g.fillRect(0, BY + 20, W, 5);
        if (st) st.hoops.forEach(function (h, i) {
          g.fillStyle = '#ffffffdd'; rr(g, h.x - 52, h.y - 84, 104, 46, 9); g.fill(); fit(g, h.o.t, h.x, h.y - 61, 94, 40, '#10102e', 14);
          g.fillStyle = '#ffffff90'; g.fillRect(h.x + 26, h.y - 40, 6, 60); g.strokeStyle = '#ff6a1f'; g.lineWidth = 6; g.beginPath(); g.moveTo(h.x - 26, h.y); g.lineTo(h.x + 26, h.y); g.stroke();
          g.strokeStyle = '#ffffffaa'; g.lineWidth = 2; for (var k = -20; k <= 20; k += 10) { g.beginPath(); g.moveTo(h.x + k, h.y); g.lineTo(h.x + k * 0.6, h.y + 28); g.stroke(); }
        });
        if (st && !hold) {
          if (drag && !st.flying) { var vx = (BX - drag.x) * 5.2, vy = (BY - drag.y) * 5.2, m = Math.hypot(vx, vy); if (m > 760) { vx *= 760 / m; vy *= 760 / m; } var b2 = { x: BX, y: BY, vx: vx, vy: vy }; g.fillStyle = '#fff'; for (var s = 0; s < 70; s++) { fly(b2); if (s % 4 === 0) { g.globalAlpha = 1 - s / 80; g.beginPath(); g.arc(b2.x, b2.y, 3, 0, 7); g.fill(); } if (b2.y > BY + 20) break; } g.globalAlpha = 1; }
          var b = st.ball, bx = st.flying ? b.x : (drag ? Math.max(BX - 60, Math.min(BX, drag.x)) : BX), by = st.flying ? b.y : (drag ? Math.max(BY, Math.min(BY + 50, drag.y)) : BY);
          if (st.resolved && !st.flying) { bx = -100; }
          g.fillStyle = '#00000030'; g.beginPath(); g.ellipse(bx, BY + 22, 16, 4, 0, 0, 7); g.fill();
          var bg = g.createRadialGradient(bx - 4, by - 4, 2, bx, by, 16); bg.addColorStop(0, '#ffb060'); bg.addColorStop(1, '#e0601a'); g.fillStyle = bg; g.beginPath(); g.arc(bx, by, 16, 0, 7); g.fill(); g.strokeStyle = '#6a2a0a'; g.lineWidth = 2; g.stroke(); g.beginPath(); g.moveTo(bx - 16, by); g.lineTo(bx + 16, by); g.moveTo(bx, by - 16); g.lineTo(bx, by + 16); g.stroke();
          if (st.c.tag) { g.fillStyle = '#fff'; rr(g, 8, BY + 34, 150, 30, 8); g.fill(); fit(g, st.c.tag, 83, BY + 49, 140, 26, '#10102e', 14); }
          g.fillStyle = '#fff'; g.font = '800 13px system-ui'; g.textAlign = 'right'; g.fillText('Shots left: ' + st.tries, W - 10, 20);
        }
        parts.forEach(function (p) { g.globalAlpha = Math.max(0, p.life / 0.8); g.fillStyle = p.col; g.beginPath(); g.arc(p.x, p.y, 4, 0, 7); g.fill(); }); g.globalAlpha = 1; g.restore();
        if (flash > 0) { g.fillStyle = 'rgba(255,40,70,' + flash * 0.5 + ')'; g.fillRect(0, 0, W, H); }
        if (st && !st.flying && !st.resolved && t < 8 && !drag) { g.fillStyle = '#fff'; g.font = '800 14px system-ui'; g.textAlign = 'center'; g.fillText('Drag back from the ball and release', W / 2, 24); }
      }
      hud(); next();
      var last = performance.now(), run = true, rid;
      function frame(now) { if (!run) return; var dt = Math.min(0.033, (now - last) / 1000); last = now; if (!ctx.isPaused()) step(dt); draw(); rid = requestAnimationFrame(frame); }
      rid = requestAnimationFrame(frame); ctx.cleanup(function () { run = false; cancelAnimationFrame(rid); });
      window.__auto = function () {
        var n = 0; while (!done && n++ < 400000) {
          if (hold) { if (window.__cp) { var c = window.__cp; window.__cp = null; c.now(); } else hold = false; continue; }
          if (wait > 0) { step(0.05); continue; }
          if (st && !st.resolved && !st.flying) { var sol = st.sol; if (!sol) { solveFor(st.c.opts.findIndex(function (o) { return o.ok; })); sol = st.sol; } if (sol) launch(sol[0], sol[1]); else launch(300, -500); }
          if (st && st.flying) { var g2 = 0; while (st.flying && g2++ < 2000) { var b = st.ball, py = b.y; fly(b); var h = hoopCheck(b, py); if (h >= 0) { resolve(h); break; } if (b.y > BY + 20 || b.x > W + 40 || b.x < -40) { miss(); break; } } }
          else step(0.05);
        }
      };
    } };
})();
