/*
 * Notesflix 101 - scroll-synced chapter video
 *
 * Usage:
 *   <video id="nfVideo" src="chapters/xyz.mp4" muted playsinline preload="auto"></video>
 *   <section data-vs="0" data-ve="10" data-title="Why marketing?">...</section>
 *   <section data-vs="10" data-ve="20" data-title="Meaning">...</section>
 *   NFScrollVideo.init({ video: '#nfVideo', sections: 'section[data-vs]', timeline: '#nfTimeline' });
 *
 * data-vs / data-ve = start / end second of the video for that section of notes.
 * As the student scrolls through a section, the video moves from vs to ve.
 */
(function (global) {
  'use strict';
  var clamp = function (x, a, b) { return Math.min(b, Math.max(a, x)); };

  function init(opt) {
    var video = document.querySelector(opt.video);
    var secs = Array.prototype.slice.call(document.querySelectorAll(opt.sections));
    if (!video || !secs.length) return;
    var anchor = opt.anchor == null ? 0.42 : opt.anchor;      // reading line, as a fraction of viewport height
    var tl = opt.timeline ? document.querySelector(opt.timeline) : null;
    var labelEl = opt.label ? document.querySelector(opt.label) : null;
    var timeEl = opt.timeEl ? document.querySelector(opt.timeEl) : null;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var S = secs.map(function (el) {
      return { el: el, vs: parseFloat(el.dataset.vs), ve: parseFloat(el.dataset.ve), title: el.dataset.title || '' };
    });
    var total = S[S.length - 1].ve;
    var target = S[0].vs, shown = -1, seeking = false, playing = false, hold = false, stopAt = 0, active = 0, ready = false;

    video.muted = true; video.pause();
    video.addEventListener('loadedmetadata', function () { ready = true; video.currentTime = 0.001; });
    video.addEventListener('seeked', function () { seeking = false; });

    /* ----- timeline (chapter bar with one tick per section) ----- */
    var fill = null, ticks = [];
    if (tl) {
      tl.innerHTML = '<div class="nf-tl-track"><div class="nf-tl-fill"></div></div>';
      fill = tl.querySelector('.nf-tl-fill');
      var track = tl.querySelector('.nf-tl-track');
      S.forEach(function (s, i) {
        var b = document.createElement('button');
        b.type = 'button'; b.className = 'nf-tl-tick'; b.title = s.title; b.setAttribute('aria-label', 'Go to: ' + s.title);
        b.style.left = (s.vs / total * 100) + '%';
        b.addEventListener('click', function () {
          s.el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        });
        track.appendChild(b); ticks.push(b);
      });
    }

    /* ----- scroll -> target time ----- */
    function compute() {
      var line = window.innerHeight * anchor, idx = 0, p = 0;
      for (var i = 0; i < S.length; i++) {
        var r = S[i].el.getBoundingClientRect();
        if (r.top <= line) { idx = i; p = clamp((line - r.top) / Math.max(1, r.height), 0, 1); }
      }
      active = idx;
      target = S[idx].vs + p * (S[idx].ve - S[idx].vs);
    }

    function paint(t) {
      if (fill) fill.style.width = (t / total * 100) + '%';
      ticks.forEach(function (b, i) { b.classList.toggle('on', i === active); });
      if (labelEl) labelEl.textContent = S[active].title;
      if (timeEl) timeEl.textContent = fmt(t) + ' / ' + fmt(total);
    }
    function fmt(s) { s = Math.floor(s); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); }

    /* ----- smooth follow loop ----- */
    var cur = 0;
    function tick() {
      if (ready && !playing && !hold) {
        cur += (target - cur) * (reduce ? 1 : 0.18);
        if (Math.abs(target - cur) < 0.01) cur = target;
        if (!seeking && Math.abs(cur - shown) >= 1 / 30) {
          seeking = true; shown = cur;
          try { video.currentTime = cur; } catch (e) { seeking = false; }
        }
        paint(cur);
      } else if (playing || hold) {
        paint(video.currentTime);
      }
      requestAnimationFrame(tick);
    }

    /* ----- "play this segment" buttons ----- */
    function playSegment(i) {
      var s = S[i]; playing = true; stopAt = s.ve; active = i;
      video.currentTime = s.vs;
      hold = false; var p = video.play(); if (p && p.catch) p.catch(function () { playing = false; });
    }
    video.addEventListener('timeupdate', function () {
      if (playing && video.currentTime >= stopAt - 0.04) {
        video.pause(); playing = false; hold = true; cur = stopAt; shown = stopAt;
      }
    });
    S.forEach(function (s, i) {
      var btn = s.el.querySelector('[data-nf-play]');
      if (btn) btn.addEventListener('click', function () { playSegment(i); });
    });
    function release() { if (playing) { video.pause(); playing = false; } hold = false; shown = -1; }
    window.addEventListener('wheel', release, { passive: true });
    window.addEventListener('touchmove', release, { passive: true });
    window.addEventListener('keydown', function (e) { if (/^(ArrowUp|ArrowDown|PageUp|PageDown|Home|End| )$/.test(e.key)) release(); });

    window.addEventListener('scroll', function () { if (hold) return; compute(); }, { passive: true });
    window.addEventListener('resize', compute);
    compute(); cur = target; tick();
  }

  global.NFScrollVideo = { init: init };
})(window);
