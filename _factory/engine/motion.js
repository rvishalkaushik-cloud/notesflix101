/* ===== MOTION SCENES: animated explainer scenes (replace doodles) ===== */
const MOS=(typeof MSPEC!=='undefined')?MSPEC:{};
(function(){if(document.getElementById('msCss'))return;const s=document.createElement('style');s.id='msCss';s.textContent=
'.ms{position:relative;border-radius:18px;overflow:hidden;border:1px solid var(--line,#2a356f);background:#070c28}'+
'.ms svg{display:block;width:100%;height:auto}'+
'.ms .mcap{position:absolute;left:0;right:0;bottom:0;padding:10px 14px 12px;text-align:center;font:800 clamp(1rem,3.2vw,1.55rem)/1.15 "Baloo 2","Poppins",sans-serif;color:#fff;text-shadow:0 2px 0 #000,0 0 14px #000;background:linear-gradient(transparent,#000a);min-height:2.4em;transition:opacity .25s}'+
'.ms .mcap b{color:#ffd24d}.ms .mcap.big{font-size:clamp(1.1rem,3.8vw,1.8rem)}'+
'.ms .mctl{position:absolute;top:10px;right:10px;display:flex;gap:6px}.ms .mctl button{font:700 .8rem Poppins,sans-serif;border:0;border-radius:10px;padding:6px 10px;background:#22e4ff;color:#0b1236;cursor:pointer}'+
'.ms .mbar{position:absolute;left:0;top:0;height:4px;background:#ff2e63;width:0}'+
'@media (prefers-reduced-motion:reduce){.ms .mcap{transition:none}}';document.head.appendChild(s)})();
function Motion(host,spec){
 if(!host||!spec)return;const NS='http://www.w3.org/2000/svg',W=800,H=spec.h||400,IMG=window.NF_IMG||{};
 host.innerHTML='<div class="ms"><div class="mbar"></div><svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="'+(spec.aria||'Animated scene')+'"></svg><div class="mctl"><button type="button" class="mpl">▶ Play</button></div><div class="mcap" aria-live="polite"></div></div>';
 const svg=host.querySelector('svg'),cap=host.querySelector('.mcap'),bar=host.querySelector('.mbar'),btn=host.querySelector('.mpl');
 const red=matchMedia('(prefers-reduced-motion: reduce)').matches;
 let O={},timers=[],raf=[];
 const el=(t,a,p)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);(p||svg).appendChild(e);return e};
 function build(){svg.innerHTML='';O={};const GID='msk'+(Motion._n=(Motion._n||0)+1);
  const d=el('defs',{});const g=el('linearGradient',{id:GID,x1:0,y1:0,x2:0,y2:1},d);const s1=el('stop',{offset:0,'stop-color':(spec.sky||['#16105a','#0b1236'])[0]},g),s2=el('stop',{offset:1,'stop-color':(spec.sky||['#16105a','#0b1236'])[1]},g);O._s1=s1;O._s2=s2;
  const cp=el('clipPath',{id:'msc'},d);el('circle',{cx:0,cy:0,r:1},cp);
  el('rect',{width:W,height:H,fill:'url(#'+GID+')'});
  for(let i=0;i<26;i++)el('circle',{cx:(i*137)%W,cy:(i*61)%(H*.5),r:1+i%2,fill:'#ffffff55'});
  if(spec.ground!==false)el('rect',{y:H-70,width:W,height:70,fill:spec.ground||'#121a48'});
  (spec.objs||[]).forEach(o=>{const g=el('g',{});const st={x:o.x||0,y:o.y||0,s:o.s==null?1:o.s,o:o.o==null?1:o.o,r:o.r||0};g._st=st;O[o.id]=g;draw(o,g);apply(g)})}
 function draw(o,g){const c=o.c||'#2f6bff';
  if(o.k==='emoji')el('text',{'font-size':o.fs||48,'text-anchor':'middle','dominant-baseline':'central'},g).textContent=o.t;
  else if(o.k==='text'){const t=el('text',{'font-size':o.fs||18,'text-anchor':'middle','font-weight':800,fill:o.c||'#fff','font-family':'Poppins,sans-serif'},g);t.textContent=o.t;g._t=t}
  else if(o.k==='box'){el('rect',{x:-o.w/2,y:-o.h/2,width:o.w,height:o.h,rx:o.rx==null?14:o.rx,fill:c,stroke:o.sc||'none','stroke-width':o.sw||0},g);const efs=o.efs||Math.min(o.h*.42,40);if(o.e)el('text',{y:o.t?(-o.h/2+efs*.55+4):0,'font-size':efs,'text-anchor':'middle','dominant-baseline':'central'},g).textContent=o.e;if(o.t){const t=el('text',{y:o.e?o.h/2-10:5,'font-size':o.fs||14,'text-anchor':'middle','font-weight':800,fill:o.tc||'#fff','font-family':'Poppins,sans-serif'},g);t.textContent=o.t;g._t=t}}
  else if(o.k==='circ'){el('circle',{r:o.rr||30,fill:c,stroke:o.sc||'none','stroke-width':o.sw||0},g);if(o.e)el('text',{'font-size':(o.rr||30)*1.05,'text-anchor':'middle','dominant-baseline':'central'},g).textContent=o.e}
  else if(o.k==='face'){const r=o.rr||34;el('circle',{r:r+4,fill:o.c||'#ffd24d'},g);const cpid='mf'+Math.random().toString(36).slice(2,7);const cp=el('clipPath',{id:cpid},svg.querySelector('defs'));el('circle',{r},cp);el('image',{href:IMG[o.img]||'',x:-r,y:-r,width:2*r,height:2*r,'clip-path':'url(#'+cpid+')'},g);if(o.t){const t=el('text',{y:r+22,'font-size':13,'text-anchor':'middle','font-weight':800,fill:'#fff','font-family':'Poppins,sans-serif'},g);t.textContent=o.t}}
  else if(o.k==='bubble'){const w=o.w||170,h=o.h||46;el('rect',{x:-w/2,y:-h/2,width:w,height:h,rx:14,fill:'#fff'},g);el('path',{d:'M-10 '+(h/2-1)+' L0 '+(h/2+12)+' L10 '+(h/2-1)+'Z',fill:'#fff'},g);const t=el('text',{y:5,'font-size':o.fs||13,'text-anchor':'middle','font-weight':700,fill:'#111','font-family':'Poppins,sans-serif'},g);t.textContent=o.t;g._t=t}
  else if(o.k==='bar'){el('rect',{x:0,y:-o.h/2,width:o.w,height:o.h,rx:o.h/2,fill:'#ffffff1a'},g);const f=el('rect',{x:0,y:-o.h/2,width:0,height:o.h,rx:o.h/2,fill:c},g);g._f=f;g._w=o.w;if(o.t){const t=el('text',{x:0,y:-o.h/2-6,'font-size':12,'font-weight':800,fill:'#fff','font-family':'Poppins,sans-serif'},g);t.textContent=o.t}}
  else if(o.k==='line'){el('line',{x1:0,y1:0,x2:o.dx,y2:o.dy,stroke:c,'stroke-width':o.sw||4,'stroke-dasharray':o.dash||'10 8','stroke-linecap':'round'},g)}
  else if(o.k==='path'){el('path',{d:o.d,fill:o.c||'none',stroke:o.sc||'none','stroke-width':o.sw||0},g)}}
 function apply(g){const s=g._st;g.setAttribute('transform','translate('+s.x+' '+s.y+') rotate('+s.r+') scale('+s.s+')');g.setAttribute('opacity',s.o)}
 function tween(g,to,ms){const s=g._st,fr={...s};if(red||!ms){Object.assign(s,to);apply(g);return}const t0=performance.now();
  const f=n=>{const k=Math.max(0,Math.min(1,(n-t0)/ms)),e=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;for(const p in to)s[p]=fr[p]+(to[p]-fr[p])*e;apply(g);if(k<1)raf.push(requestAnimationFrame(f))};raf.push(requestAnimationFrame(f))}
 function fly(a){const A=O[a.from]._st,B=O[a.to]._st,n=a.n||3;for(let i=0;i<n;i++)timers.push(setTimeout(()=>{const g=el('g',{});g._st={x:A.x,y:A.y,s:.4,o:1,r:0};const t=el('text',{'font-size':a.fs||28,'text-anchor':'middle','dominant-baseline':'central'},g);t.textContent=a.e;apply(g);
   if(red){g.remove();return}const t0=performance.now(),ms=a.ms||900,cx=(A.x+B.x)/2,cy=Math.min(A.y,B.y)-(a.arc==null?80:a.arc);
   const f=n=>{const k=Math.min(1,(n-t0)/ms),u=1-k;g._st.x=u*u*A.x+2*u*k*cx+k*k*B.x;g._st.y=u*u*A.y+2*u*k*cy+k*k*B.y;g._st.s=.5+.6*Math.sin(Math.PI*k);apply(g);if(k<1)raf.push(requestAnimationFrame(f));else g.remove()};raf.push(requestAnimationFrame(f))},i*(a.gap||220)))}
 function count(a){const g=O[a.id],t=g._t;if(!t)return;const fr=a.from||0,to=a.to,ms=red?0:(a.ms||1000),t0=performance.now();const fm=v=>(a.pre||'')+Math.round(v).toLocaleString('en-IN')+(a.suf||'');
  if(!ms){t.textContent=fm(to);return}const f=n=>{const k=Math.min(1,(n-t0)/ms);t.textContent=fm(fr+(to-fr)*k);if(k<1)raf.push(requestAnimationFrame(f))};raf.push(requestAnimationFrame(f))}
 function act(a){
  if(a.id&&a.to)tween(O[a.id],a.to,a.ms==null?700:a.ms);
  if(a.id&&a.text!=null&&O[a.id]._t)O[a.id]._t.textContent=a.text;
  if(a.id&&a.fill!=null&&O[a.id]._f){const g=O[a.id];const w=g._w*a.fill/100;if(red)g._f.setAttribute('width',w);else{const s0=+g._f.getAttribute('width'),t0=performance.now(),ms=a.ms||900;const f=n=>{const k=Math.max(0,Math.min(1,(n-t0)/ms));g._f.setAttribute('width',s0+(w-s0)*(1-Math.pow(1-k,3)));if(k<1)raf.push(requestAnimationFrame(f))};raf.push(requestAnimationFrame(f))}}
  if(a.pulse){const g=O[a.pulse],s=g._st.s;tween(g,{s:s*1.25},220);timers.push(setTimeout(()=>tween(g,{s},260),240))}
  if(a.shake){const g=O[a.shake],x=g._st.x;[8,-8,6,-6,0].forEach((d,i)=>timers.push(setTimeout(()=>{g._st.x=x+d;apply(g)},i*70)))}
  if(a.fly)fly(a.fly);if(a.count)count(a.count);
  if(a.sky){O._s1.setAttribute('stop-color',a.sky[0]);O._s2.setAttribute('stop-color',a.sky[1])}}
 function stop(){timers.forEach(clearTimeout);raf.forEach(cancelAnimationFrame);timers=[];raf=[]}
 function rest(){stop();build();(spec.steps||[]).forEach(st=>(st.do||[]).forEach(a=>{const b={...a,ms:0};if(b.fly)return;if(b.count)b.count={...b.count,ms:0};if(b.pulse||b.shake)return;act(b)}));cap.innerHTML=spec.end||(spec.steps||[]).slice(-1)[0].c;cap.classList.add('big');bar.style.width='100%';btn.textContent='↺ Replay'}
 function play(){stop();build();cap.classList.remove('big');const L=spec.len||((spec.steps||[]).slice(-1)[0].t+3500);btn.textContent='↺ Replay';
  bar.style.transition='none';bar.style.width='0';requestAnimationFrame(()=>{bar.style.transition='width '+L+'ms linear';bar.style.width='100%'});
  (spec.steps||[]).forEach((st,i,arr)=>timers.push(setTimeout(()=>{if(st.c!=null){cap.style.opacity=0;setTimeout(()=>{cap.innerHTML=st.c;cap.style.opacity=1;cap.classList.toggle('big',!!st.big||i===arr.length-1)},180)}(st.do||[]).forEach(act)},red?0:st.t)))}
 btn.onclick=play;rest();
 if('IntersectionObserver' in window&&!red){const io=new IntersectionObserver(es=>{if(es[0].isIntersecting){io.disconnect();play()}},{threshold:.55});io.observe(host)}
 return {play,rest};
}
