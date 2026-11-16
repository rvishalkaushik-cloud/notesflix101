/* ===== LEGAL KIT (Legal Studies only; injected when meta.kit==='legal') =====
   Blocks: casebrief · gate · revclock · fixarg · docfill   (see SCHEMA.md "Legal kit")
   Each block awards XP through window.__xp and saves progress in localStorage "nf.legal.v1". */
(function(){
window.NFX=window.NFX||{};window.NFX_IC=window.NFX_IC||{};
const KEY='nf.legal.v1',PAGE=location.pathname.split('/').pop()||'note';
const ld=()=>{try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return {}}};
const sv=(id,v)=>{try{const d=ld();d[PAGE]=d[PAGE]||{};d[PAGE][id]=v;d[PAGE].t=Date.now();localStorage.setItem(KEY,JSON.stringify(d))}catch(e){}};
const got=id=>{const d=ld();return d[PAGE]&&d[PAGE][id]};
const XP=(id,n)=>{try{window.__xp&&window.__xp(id,n)}catch(e){}};
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const el=(h)=>{const d=document.createElement('div');d.innerHTML=h;return d.firstElementChild};

if(!document.getElementById('lgCss')){const s=document.createElement('style');s.id='lgCss';s.textContent=
/* courtroom identity: serif headings, gold rule, navy cards */
'h1,h2,.ttl{font-family:"Playfair Display",Georgia,"Times New Roman",serif!important;letter-spacing:.2px}'+
'.btn{box-shadow:0 5px 0 #6b4f1a!important}.btn.teal{box-shadow:0 5px 0 #173a4d!important}'+
'.lg{font-size:.95rem}.lg *{box-sizing:border-box}'+
'.lg-tabs{display:flex;gap:6px;flex-wrap:wrap;margin:6px 0 10px}.lg-tabs button{border:2px solid var(--line);background:var(--card);border-radius:999px;padding:6px 12px;font:700 .82rem Poppins,sans-serif;color:var(--ink);cursor:pointer}'+
'.lg-tabs button.on{background:var(--navy);color:#fff;border-color:var(--navy)}.lg-tabs button:disabled{opacity:.4;cursor:not-allowed}.lg-tabs button.ok:not(.on){border-color:var(--teal)}'+
'.lg-case{border-radius:16px;background:linear-gradient(160deg,var(--navy),#0a1428);color:#f6f1e4;padding:16px 16px 14px;position:relative;overflow:hidden}'+
'.lg-case:after{content:"⚖";position:absolute;right:10px;top:-14px;font-size:96px;opacity:.08}'+
'.lg-case h4{margin:0 0 2px;font:700 1.15rem "Playfair Display",Georgia,serif;color:#f1d58a}.lg-case small{color:#cfd6e6}'+
'.lg-pane{background:var(--card);border:2px solid var(--line);border-radius:14px;padding:12px 14px;margin-top:10px;line-height:1.55;animation:lgIn .35s ease both}'+
'.lg-pane h5{margin:0 0 6px;font:800 .78rem Poppins,sans-serif;letter-spacing:1px;text-transform:uppercase;color:var(--orange)}'+
'.lg-arg{display:grid;grid-template-columns:1fr 1fr;gap:10px}@media(max-width:560px){.lg-arg{grid-template-columns:1fr}}'+
'.lg-arg div{border-radius:12px;padding:10px 12px;border:2px solid var(--line)}.lg-arg div:first-child{background:var(--tint1)}.lg-arg div:last-child{background:var(--tint2)}'+
'.lg-opts{display:grid;gap:8px;margin-top:8px}.lg-opts button{text-align:left;border:2px solid var(--line);background:var(--card);border-radius:12px;padding:10px 12px;font:600 .9rem Poppins,sans-serif;color:var(--ink);cursor:pointer}'+
'.lg-opts button.y{border-color:#2e9d6a;background:#e5f6ec;color:#14532d}.lg-opts button.n{border-color:#c2410c;background:#fdeee6;color:#7c2d12}'+
'.lg-fb{margin-top:8px;padding:9px 12px;border-radius:12px;background:var(--tint2);color:var(--tint2ink);font-size:.9rem;animation:lgIn .3s ease both}'+
'.lg-src{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.lg-src a{font:700 .78rem Poppins,sans-serif;color:var(--navy);background:var(--tint1);border-radius:999px;padding:5px 10px;text-decoration:none}'+
'.lg-stage{position:relative;border-radius:16px;background:linear-gradient(180deg,#12213f,#0b1426);padding:14px 10px 12px;color:#f6f1e4;overflow:hidden}'+
'.lg-track{display:flex;align-items:center;gap:4px;justify-content:space-between;position:relative;margin:8px 4px 4px}'+
'.lg-track:before{content:"";position:absolute;left:0;right:0;top:50%;height:4px;background:#ffffff22;border-radius:4px}'+
'.lg-g{position:relative;z-index:1;flex:1;min-width:0;display:grid;place-items:center;gap:3px;border:2px solid #c9a54b66;background:#0f1e3dcc;border-radius:12px;padding:8px 2px;cursor:pointer;color:#f6f1e4;font:700 .66rem/1.15 Poppins,sans-serif;text-align:center;transition:transform .2s,background .2s}'+
'.lg-g .gs{display:none}@media(max-width:560px){.lg-g .gl{display:none}.lg-g .gs{display:block;font-size:.56rem;letter-spacing:-.2px}.lg-g{padding:7px 0;border-radius:9px}.lg-g b{font-size:1.1rem!important}.lg-track{gap:2px;margin:8px 0 4px}}'+
'.lg-g b{font-size:1.35rem;line-height:1}.lg-g:hover{transform:translateY(-3px)}.lg-g.pass{background:#1f6f54;border-color:#7be0b5}.lg-g.fail{background:#8a2c22;border-color:#ffb4a6;animation:lgShake .45s}'+
'.lg-tok{position:absolute;top:-2px;left:0;font-size:1.7rem;transition:left .5s cubic-bezier(.4,1.4,.6,1);z-index:2;filter:drop-shadow(0 3px 4px #0008)}'+
'.lg-scn{background:#f6f1e4;color:#1c1f26;border-radius:12px;padding:10px 12px;margin:30px 0 10px;font-size:.92rem;border-left:6px solid #c9a54b;min-height:62px}'+
'.lg-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:8px}.lg-pill{background:#ffffff1a;border-radius:999px;padding:4px 10px;font:700 .78rem Poppins,sans-serif}'+
'.lg-gold{background:#c9a54b;color:#0f1e3d;border:0;border-radius:12px;padding:9px 14px;font:800 .88rem Poppins,sans-serif;cursor:pointer;box-shadow:0 4px 0 #6b4f1a}.lg-gold:disabled{opacity:.5}'+
'.lg-ghost{background:transparent;color:inherit;border:2px solid currentColor;border-radius:12px;padding:7px 12px;font:700 .85rem Poppins,sans-serif;cursor:pointer;opacity:.85}'+
'.lg-tl{display:grid;gap:8px}.lg-ev{display:grid;grid-template-columns:34px 1fr;gap:10px;align-items:start;opacity:.28;transition:opacity .3s}.lg-ev.on{opacity:1}.lg-ev .d{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:#c9a54b;color:#0f1e3d;font-size:1rem}'+
'.lg-ev small{display:block;color:#c9a54b;font:800 .72rem Poppins,sans-serif;letter-spacing:.5px}'+
'.lg-lights{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px;margin-top:12px}.lg-lights div{border-radius:12px;padding:8px 10px;background:#ffffff12;font:700 .76rem/1.25 Poppins,sans-serif;display:flex;gap:8px;align-items:center}'+
'.lg-lights i{flex:none;width:14px;height:14px;border-radius:50%;background:#6b7280;box-shadow:0 0 0 3px #ffffff14}.lg-lights i.g{background:#34d399;box-shadow:0 0 10px #34d399}.lg-lights i.r{background:#f87171;box-shadow:0 0 10px #f87171}'+
'.lg-q{background:#f6f1e4;color:#1c1f26;border-radius:14px;padding:12px;margin-top:12px;animation:lgIn .3s ease both}'+
'.lg-line{display:block;width:100%;text-align:left;border:2px dashed var(--line);background:var(--card);border-radius:12px;padding:10px 12px;margin:6px 0;font:500 .92rem/1.45 Poppins,sans-serif;color:var(--ink);cursor:pointer}'+
'.lg-line.mk{border-style:solid;border-color:#c2410c;background:#fdeee6}.lg-line.good{border-style:solid;border-color:#2e9d6a;background:#e5f6ec}.lg-line.miss{border-style:solid;border-color:#b45309;background:#fff7e0}'+
'.lg-doc{background:#fffdf6;border:1px solid #d8cba8;border-radius:6px;padding:18px 18px 14px;box-shadow:0 8px 20px #0f1e3d22,inset 0 0 0 6px #fffdf6,inset 0 0 0 7px #e8dcbc;font:500 .93rem/1.9 Georgia,"Times New Roman",serif;color:#1c1f26}'+
'.lg-doc h4{text-align:center;margin:0 0 8px;font:700 1.05rem "Playfair Display",Georgia,serif;letter-spacing:1px;text-transform:uppercase}'+
'.lg-doc select{font:600 .86rem Poppins,sans-serif;border:2px solid #c9a54b;border-radius:8px;padding:2px 4px;background:#fff8e6;max-width:100%}.lg-doc select.y{border-color:#2e9d6a;background:#e5f6ec}.lg-doc select.n{border-color:#c2410c;background:#fdeee6}'+
'.lg-score{font:800 .85rem Poppins,sans-serif}.lg-stars{font-size:1.4rem;letter-spacing:2px}'+
'@keyframes lgIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}@keyframes lgShake{0%,100%{transform:none}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}'+
'@media(prefers-reduced-motion:reduce){.lg *{animation:none!important;transition:none!important}}';
document.head.appendChild(s);
const f=document.createElement('link');f.rel='stylesheet';f.href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap';document.head.appendChild(f)}

function stars(r){return '<span class="lg-stars">'+(r>=.99?'⭐⭐⭐':r>=.66?'⭐⭐☆':r>=.33?'⭐☆☆':'☆☆☆')+'</span>'}

/* ---------- casebrief: real case, unlocked tab by tab, verdict predicted before it is shown ---------- */
NFX_IC.casebrief='⚖️';
NFX.casebrief=function(h,x){
 const tabs=[['facts','1 · Facts'],['issue','2 · Issue'],['args','3 · Arguments'],['predict','4 · You decide'],['decision','5 · Decision'],['principle','6 · Principle']];
 let open=got(x.id+'.open')||1,cur=0;
 h.innerHTML='<div class="lg"><div class="lg-case"><h4>'+x.name+'</h4><small>'+esc(x.court)+' · '+esc(x.year)+(x.cite?' · '+esc(x.cite):'')+'</small>'+(x.bench?'<br><small>Bench: '+esc(x.bench)+'</small>':'')+(x.label?'<div class="lg-row"><span class="lg-pill">'+x.label+'</span></div>':'')+'</div><div class="lg-tabs" role="tablist"></div><div class="lg-body"></div><div class="lg-src">'+(x.src||[]).map(s=>'<a href="'+s[1]+'" target="_blank" rel="noopener">📄 '+esc(s[0])+'</a>').join('')+'</div></div>';
 const T=h.querySelector('.lg-tabs'),B=h.querySelector('.lg-body');
 function bar(){T.innerHTML=tabs.map((t,i)=>'<button role="tab" type="button" data-i="'+i+'" class="'+(i===cur?'on ':'')+(i<open?'ok':'')+'"'+(i>open?' disabled':'')+'>'+(i>open?'🔒 ':'')+t[1]+'</button>').join('');T.querySelectorAll('button').forEach(b=>b.onclick=()=>{cur=+b.dataset.i;show()})}
 function next(lbl){return '<div class="lg-row" style="margin-top:10px"><button class="btn" type="button" data-nx>'+(lbl||'Next →')+'</button></div>'}
 function unlock(i){if(i>open){open=i;sv(x.id+'.open',open)}}
 function show(){bar();const k=tabs[cur][0];let p='';
  if(k==='facts')p='<h5>What happened</h5>'+x.facts+next();
  if(k==='issue')p='<h5>The legal question</h5>'+x.issue+next();
  if(k==='args')p='<h5>Both sides</h5><div class="lg-arg">'+x.args.map(a=>'<div><b>'+a[0]+'</b><br>'+a[1]+'</div>').join('')+'</div>'+next('I have weighed both sides →');
  if(k==='predict'){const o=shuf(x.predict.opts.map((t,i)=>[t,i]));p='<h5>You are the judge</h5><p>'+x.predict.q+'</p><div class="lg-opts">'+o.map(a=>'<button type="button" data-a="'+a[1]+'">'+a[0]+'</button>').join('')+'</div><div class="lg-out"></div>'}
  if(k==='decision')p='<h5>What the court decided</h5>'+x.decision+next();
  if(k==='principle')p='<h5>Legal principle (ratio)</h5>'+x.principle+(x.exam?'<div class="lg-fb">✍️ <b>Use it in the exam:</b> '+x.exam+'</div>':'')+(x.today?'<div class="lg-fb">📱 <b>Today:</b> '+x.today+'</div>':'');
  B.innerHTML='<div class="lg-pane">'+p+'</div>';
  const nx=B.querySelector('[data-nx]');if(nx)nx.onclick=()=>{unlock(cur+1);cur++;show()};
  B.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{const ok=b.dataset.a==='0';B.querySelectorAll('[data-a]').forEach(z=>{z.disabled=true;if(z.dataset.a==='0')z.classList.add('y')});if(!ok)b.classList.add('n');
   B.querySelector('.lg-out').innerHTML='<div class="lg-fb">'+(ok?'✅ <b>Same as the court!</b> ':'🤔 <b>The court saw it differently.</b> ')+x.predict.why+'</div>'+next('See the decision →');
   sv(x.id+'.pred',ok?1:0);XP(x.id,ok?15:8);B.querySelector('[data-nx]').onclick=()=>{unlock(cur+1);cur++;show()}});
  if(k==='principle'){XP(x.id+'p',5);unlock(6)}}
 show()};

/* ---------- gate: the agreement token walks through the essentials of a valid contract ---------- */
NFX_IC.gate='🚪';
NFX.gate=function(h,x){
 const G=x.gates,S=shuf(x.scenarios);let i=0,score=0,streak=0,locked=false;
 h.innerHTML='<div class="lg"><div class="lg-stage"><div class="lg-row" style="justify-content:space-between"><span class="lg-pill lg-n"></span><span class="lg-pill lg-st"></span></div>'+
  '<div class="lg-scn"></div><div class="lg-track"><span class="lg-tok">📜</span>'+G.map((g,j)=>'<button type="button" class="lg-g" data-j="'+j+'" aria-label="'+esc(g[1])+'"><b>'+g[0]+'</b><span class="gl">'+g[1]+'</span><span class="gs">'+(g[3]||g[1].split(' ')[0])+'</span></button>').join('')+'</div>'+
  '<div class="lg-row" style="justify-content:center;margin-top:12px"><button type="button" class="lg-gold lg-all">'+(x.allText||'✅ Every gate passes: it is a CONTRACT')+'</button></div><div class="lg-msg"></div></div></div>';
 const $=s=>h.querySelector(s),tok=$('.lg-tok'),gs=[...h.querySelectorAll('.lg-g')];
 function pos(j){const tr=$('.lg-track').getBoundingClientRect(),b=(j<0?null:gs[Math.min(j,gs.length-1)].getBoundingClientRect());tok.style.left=(j<0?-4:(j>=gs.length?tr.width-26:b.left-tr.left+b.width/2-14))+'px'}
 function load(){locked=false;gs.forEach(g=>g.classList.remove('pass','fail'));const s=S[i];$('.lg-n').textContent='Case file '+(i+1)+' / '+S.length;$('.lg-st').textContent='⚖️ '+score+' · 🔥 '+streak;
  $('.lg-scn').innerHTML=(s.e?'<b style="font-size:1.2rem">'+s.e+'</b> ':'')+s.t+'<br><small style="color:#6b5a2e">'+(x.hint||'<b>Tap the gate it FAILS</b>, or press the gold button if it passes all.')+'</small>';$('.lg-msg').innerHTML='';pos(-1)}
 function walk(stop,ok){let j=0;const lim=stop<0?gs.length:stop;(function step(){if(j<lim){gs[j].classList.add('pass');pos(j);j++;setTimeout(step,260)}else{if(stop>=0){gs[stop].classList.add('fail');pos(stop)}else pos(gs.length);fin(ok)}})()}
 function fin(ok){const s=S[i];if(ok){score++;streak++}else streak=0;$('.lg-st').textContent='⚖️ '+score+' · 🔥 '+streak;
  const res=s.fail<0?(x.okText||'<b>Valid contract.</b>'):(x.stopText||'Stopped at')+' <b>'+G[s.fail][1]+'</b> ('+G[s.fail][2]+') → <b>'+(s.result||'not a valid contract')+'</b>.';
  $('.lg-msg').innerHTML='<div class="lg-q">'+(ok?'✅ Correct! ':'❌ Not quite. ')+res+' '+s.why+'<div class="lg-row"><button type="button" class="btn lg-nx">'+(i<S.length-1?'Next case file →':'See my verdict →')+'</button></div></div>';
  $('.lg-nx').onclick=()=>{i++;if(i<S.length)load();else end()}}
 function pick(j){if(locked)return;locked=true;const s=S[i];walk(s.fail,j===s.fail)}
 gs.forEach(g=>g.onclick=()=>pick(+g.dataset.j));$('.lg-all').onclick=()=>pick(-1);
 function end(){const r=score/S.length;sv(x.id,score);XP(x.id,10+score*3);$('.lg-scn').innerHTML='🏛️ <b>Session over.</b> You judged '+score+' of '+S.length+' case files correctly. '+stars(r)+'<br>'+(x.endText||'');$('.lg-msg').innerHTML='<div class="lg-row" style="justify-content:center"><button type="button" class="lg-ghost lg-re">↻ Play again (new order)</button></div>';$('.lg-n').textContent='Done';
  $('.lg-re').onclick=()=>{i=0;score=0;streak=0;S.splice(0,S.length,...shuf(x.scenarios));load()}}
 load();addEventListener('resize',()=>pos(-1))};

/* ---------- revclock: offer / acceptance / revocation timeline with live status lights ---------- */
NFX_IC.revclock='⏱️';
NFX.revclock=function(h,x){
 const E=x.events,L=x.lights;let at=0,ans={};
 h.innerHTML='<div class="lg"><div class="lg-stage"><div class="lg-row" style="justify-content:space-between"><b class="lg-tt">'+(x.title||'')+'</b><span class="lg-pill lg-c"></span></div>'+
  '<input type="range" min="0" max="'+(E.length-1)+'" value="0" class="lg-rg" aria-label="Move through the timeline" style="width:100%;accent-color:#c9a54b;margin:10px 0">'+
  '<div class="lg-tl">'+E.map((e,j)=>'<div class="lg-ev" data-j="'+j+'"><span class="d">'+e.e+'</span><div><small>'+esc(e.t)+'</small>'+e.text+'</div></div>').join('')+'</div>'+
  '<div class="lg-lights">'+L.map(l=>'<div><i></i>'+l+'</div>').join('')+'</div><div class="lg-qa"></div>'+
  '<div class="lg-row" style="justify-content:space-between;margin-top:10px"><button type="button" class="lg-ghost lg-pv">◀ Back</button><button type="button" class="lg-gold lg-nxt">Next event ▶</button></div></div></div>';
 const $=s=>h.querySelector(s),rg=$('.lg-rg'),evs=[...h.querySelectorAll('.lg-ev')],lt=[...h.querySelectorAll('.lg-lights i')];
 function need(){const q=E[at].q;return q&&ans[at]==null}
 function draw(){rg.value=at;evs.forEach((e,j)=>e.classList.toggle('on',j<=at));const st=E[at].s||[];lt.forEach((l,j)=>{l.className=st[j]===1?'g':st[j]===0?'r':''});
  $('.lg-c').textContent='Event '+(at+1)+' / '+E.length;const q=E[at].q;$('.lg-qa').innerHTML='';
  if(q){const o=shuf(q[1].map((t,i)=>[t,i]));$('.lg-qa').innerHTML='<div class="lg-q"><b>⚖️ Pause and rule:</b> '+q[0]+'<div class="lg-opts">'+o.map(a=>'<button type="button" data-a="'+a[1]+'">'+a[0]+'</button>').join('')+'</div><div class="lg-o"></div></div>';
   const bs=$('.lg-qa').querySelectorAll('[data-a]');const mark=(v)=>{bs.forEach(z=>{z.disabled=true;if(z.dataset.a==='0')z.classList.add('y');else if(z.dataset.a===v)z.classList.add('n')});$('.lg-o').innerHTML='<div class="lg-fb">'+(v==='0'?'✅ ':'❌ ')+q[2]+'</div>'};
   if(ans[at]!=null)mark(ans[at]);bs.forEach(b=>b.onclick=()=>{ans[at]=b.dataset.a;mark(b.dataset.a);if(b.dataset.a==='0')XP(x.id+'q'+at,6);$('.lg-nxt').disabled=false;if(at===E.length-1)done()})}
  $('.lg-nxt').disabled=need()||at===E.length-1;$('.lg-pv').disabled=at===0}
 function done(){const qs=E.map((e,j)=>e.q?j:-1).filter(j=>j>=0),ok=qs.filter(j=>ans[j]==='0').length;sv(x.id,ok);XP(x.id,10);$('.lg-qa').insertAdjacentHTML('beforeend','<div class="lg-fb">🏁 Timeline complete: '+ok+' / '+qs.length+' rulings correct '+stars(ok/qs.length)+'</div>')}
 $('.lg-nxt').onclick=()=>{if(need())return;if(at<E.length-1){at++;draw();if(at===E.length-1&&!E[at].q)done()}};$('.lg-pv').onclick=()=>{if(at>0){at--;draw()}};
 rg.oninput=()=>{let v=+rg.value;for(let j=0;j<v;j++)if(E[j].q&&ans[j]==null){v=j;break}at=v;draw()};draw()};

/* ---------- fixarg: spot the legally wrong lines in an argument, then choose the correction ---------- */
NFX_IC.fixarg='🖍️';
NFX.fixarg=function(h,x){
 let phase=0;const mk=new Set();
 h.innerHTML='<div class="lg"><div class="lg-pane" style="margin-top:0"><h5>'+(x.who||'Draft argument')+'</h5>'+(x.facts?'<p style="margin:0 0 8px">'+x.facts+'</p>':'')+'<div class="lg-ls">'+x.lines.map((l,j)=>'<button type="button" class="lg-line" data-j="'+j+'">'+(j+1)+'. '+l.t+'</button>').join('')+'</div>'+
  '<div class="lg-row"><button type="button" class="btn lg-ck">Check my marks</button><span class="lg-score"></span></div><div class="lg-fx"></div></div></div>';
 const $=s=>h.querySelector(s),ls=[...h.querySelectorAll('.lg-line')];
 ls.forEach(b=>b.onclick=()=>{if(phase)return;const j=+b.dataset.j;mk.has(j)?mk.delete(j):mk.add(j);b.classList.toggle('mk')});
 $('.lg-ck').onclick=()=>{if(phase)return;phase=1;$('.lg-ck').disabled=true;let hit=0,wr=0;
  x.lines.forEach((l,j)=>{const m=mk.has(j);if(l.wrong&&m)hit++;if(!l.wrong&&m)wr++;ls[j].classList.remove('mk');ls[j].classList.add(l.wrong?(m?'mk':'miss'):(m?'miss':'good'))});
  const W=x.lines.map((l,j)=>l.wrong?j:-1).filter(j=>j>=0);$('.lg-score').textContent='Found '+hit+' / '+W.length+' errors'+(wr?' · '+wr+' correct line(s) wrongly marked':'');
  let k=0,fixed=0;(function ask(){if(k>=W.length){const r=(hit+fixed-wr)/(2*W.length);sv(x.id,Math.max(0,r));XP(x.id,10+fixed*4);$('.lg-fx').insertAdjacentHTML('beforeend','<div class="lg-fb">🏛️ Argument repaired. '+stars(Math.max(0,r))+(x.end?' '+x.end:'')+'</div>');return}
   const j=W[k],l=x.lines[j],o=shuf(l.fix.map((t,i)=>[t,i]));const d=el('<div class="lg-q"><b>Fix line '+(j+1)+':</b> “'+l.t+'”<div class="lg-opts">'+o.map(a=>'<button type="button" data-a="'+a[1]+'">'+a[0]+'</button>').join('')+'</div><div class="lg-o"></div></div>');$('.lg-fx').appendChild(d);
   d.querySelectorAll('[data-a]').forEach(b=>b.onclick=()=>{const ok=b.dataset.a==='0';if(ok)fixed++;d.querySelectorAll('[data-a]').forEach(z=>{z.disabled=true;if(z.dataset.a==='0')z.classList.add('y')});if(!ok)b.classList.add('n');d.querySelector('.lg-o').innerHTML='<div class="lg-fb">'+l.why+'</div>';k++;setTimeout(ask,350)})})()}};

/* ---------- docfill: complete a legal document; every blank is a reasoned choice ---------- */
NFX_IC.docfill='📝';
NFX.docfill=function(h,x){
 let n=0;const body=x.doc.replace(/\{(\d+)\}/g,(m,i)=>{const b=x.blanks[+i];const o=shuf(b.slice(0,-1).map((t,k)=>[t,k]));return '<select data-b="'+i+'" aria-label="Blank '+(+i+1)+'"><option value="">— choose —</option>'+o.map(a=>'<option value="'+a[1]+'">'+esc(a[0])+'</option>').join('')+'</select>'});
 h.innerHTML='<div class="lg"><div class="lg-doc"><h4>'+x.title+'</h4>'+body+'</div><div class="lg-row"><button type="button" class="btn lg-ck">Check the document</button><span class="lg-score"></span></div><div class="lg-ex"></div></div>';
 const $=s=>h.querySelector(s),sel=[...h.querySelectorAll('select')];
 $('.lg-ck').onclick=()=>{let ok=0,miss=0;const ex=[];sel.forEach(s=>{const i=+s.dataset.b,b=x.blanks[i];s.classList.remove('y','n');if(s.value==='')miss++;else if(s.value==='0'){ok++;s.classList.add('y')}else{s.classList.add('n');ex.push('<li><b>Blank '+(i+1)+':</b> '+b[b.length-1]+'</li>')}});
  if(miss){$('.lg-score').textContent='Fill every blank first ('+miss+' left).';return}
  $('.lg-score').innerHTML=ok+' / '+sel.length+' correct '+stars(ok/sel.length);$('.lg-ex').innerHTML=ok===sel.length?'<div class="lg-fb">✅ '+(x.done||'Legally sound document!')+'</div>':'<div class="lg-fb">Fix the red blanks:<ul style="margin:6px 0 0 18px;padding:0">'+ex.join('')+'</ul></div>';
  n++;if(ok===sel.length){sv(x.id,1);XP(x.id,n===1?20:10)}}};
})();
