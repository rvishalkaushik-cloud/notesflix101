/* ===== ANIME KIT: code-made episode player, manga panels, memory codes =====
   Content blocks: {type:'episode'} {type:'manga'} {type:'memcode'} — see SCHEMA.md "Anime kit". */
(function(){
const NS='http://www.w3.org/2000/svg';
if(!document.getElementById('akCss')){const s=document.createElement('style');s.id='akCss';s.textContent=
'.ak-ep{position:relative;border-radius:20px;overflow:hidden;background:#0b0820;box-shadow:0 0 0 3px #ff2e88,0 12px 30px #0006}'+
'.ak-ep svg.st{display:block;width:100%;height:auto;aspect-ratio:16/9}'+
'.ak-sub{position:relative;padding:10px 14px 6px;min-height:3.3em;display:flex;align-items:center;justify-content:center;background:#0b0820;text-align:center;font:800 clamp(.95rem,3vw,1.45rem)/1.25 "Baloo 2",Poppins,sans-serif;color:#fff;text-shadow:0 2px 0 #000,0 0 10px #000,2px 0 0 #000,-2px 0 0 #000;pointer-events:none}'+
'.ak-sub b{color:#ffe14d}'+
'.ak-bar{position:relative;display:flex;gap:8px;align-items:center;padding:8px 10px 10px;background:#0b0820}'+
'.ak-bar button{border:0;border-radius:10px;min-width:38px;height:36px;font:800 .85rem Poppins,sans-serif;background:#ffe14d;color:#160f3a;cursor:pointer}'+
'.ak-bar button.on{background:#22e4ff}.ak-prog{flex:1;height:8px;border-radius:9px;background:#ffffff33;position:relative;cursor:pointer}'+
'.ak-prog i{position:absolute;left:0;top:0;bottom:0;border-radius:9px;background:linear-gradient(90deg,#ff2e88,#ffe14d);width:0}'+
'.ak-prog b{position:absolute;top:-3px;width:3px;height:14px;background:#fff8;border-radius:2px}'+
'.ak-big{position:absolute;left:0;right:0;top:0;aspect-ratio:16/9;width:100%;display:grid;place-items:center;background:#0008;border:0;cursor:pointer;color:#fff;font:800 clamp(1rem,3.5vw,1.6rem) "Baloo 2",sans-serif}'+
'.ak-big span{display:grid;place-items:center;gap:8px}.ak-big em{font-style:normal;width:84px;height:84px;border-radius:50%;background:#ff2e88;display:grid;place-items:center;font-size:2.2rem;box-shadow:0 0 0 8px #ff2e8855}'+
'.ak-ep .a-pop{animation:akPop .55s cubic-bezier(.3,1.6,.5,1) both}.ak-ep .a-left,.ak-mg .a-left{animation:akL .6s ease-out both}.ak-ep .a-right,.ak-mg .a-right{animation:akR .6s ease-out both}'+
'.a-drop{animation:akD .6s cubic-bezier(.3,1.5,.5,1) both}.a-float{animation:akF 2.4s ease-in-out infinite}.a-shake{animation:akS .5s linear 2}.a-spin{animation:akSpin 8s linear infinite}'+
'.ak-mg .a-pop{animation:akPop .55s cubic-bezier(.3,1.6,.5,1) both}'+
'.a-pop,.a-left,.a-right,.a-drop,.a-float,.a-shake,.a-spin{transform-box:fill-box;transform-origin:center}'+
'@keyframes akPop{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:1}}@keyframes akL{0%{transform:translateX(-420px);opacity:0}100%{transform:none;opacity:1}}'+
'@keyframes akR{0%{transform:translateX(420px);opacity:0}100%{transform:none;opacity:1}}@keyframes akD{0%{transform:translateY(-380px)}100%{transform:none}}'+
'@keyframes akF{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}@keyframes akS{0%,100%{transform:none}25%{transform:translateX(-8px) rotate(-2deg)}75%{transform:translateX(8px) rotate(2deg)}}'+
'@keyframes akSpin{to{transform:rotate(360deg)}}@keyframes akFlash{0%{opacity:.95}100%{opacity:0}}@keyframes akZoom{0%{transform:scale(1)}100%{transform:scale(1.08)}}'+
'.ak-flash{animation:akFlash .5s ease-out both}.ak-zoom{animation:akZoom 4s ease-out both;transform-origin:50% 50%}'+
'.ak-mg{display:grid;gap:10px}.ak-strip{display:flex;align-items:flex-start;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;padding-bottom:6px}'+
'.ak-pan{flex:0 0 min(92%,560px);scroll-snap-align:center;background:#fff;border:4px solid #15122e;border-radius:16px;overflow:hidden;box-shadow:6px 6px 0 #15122e}'+
'.ak-pan svg{display:block;width:100%;height:auto;aspect-ratio:16/9}.ak-pan p{margin:0;padding:10px 12px;font:800 1.02rem/1.3 "Baloo 2",Poppins,sans-serif;color:#15122e;background:#ffe14d;border-top:4px solid #15122e}'+
'.ak-nav{display:flex;gap:8px;align-items:center;justify-content:center}.ak-nav button{border:0;border-radius:12px;padding:8px 14px;font:800 .9rem Poppins,sans-serif;background:var(--orange,#ff7a1a);color:#fff;cursor:pointer}.ak-nav span{font-weight:800}'+
'.ak-mc{display:grid;gap:12px;background:linear-gradient(135deg,#1b1147,#3b0f5c 55%,#0e3a5c);color:#fff;border-radius:20px;padding:16px;border:2px solid #ff2e88}'+
'.ak-mc .ph{font:800 clamp(1.15rem,4.4vw,1.6rem)/1.2 "Baloo 2",sans-serif;background:linear-gradient(90deg,#ffe14d,#ff7ad9,#22e4ff);-webkit-background-clip:text;background-clip:text;color:transparent}'+
'.ak-mc .tl{display:flex;gap:8px;flex-wrap:wrap}.ak-tile{perspective:700px;border:0;background:none;padding:0;cursor:pointer;flex:1 1 112px;max-width:220px;min-width:104px;height:124px;color:inherit;font:inherit}'+
'.ak-tile>span{position:relative;display:block;width:100%;height:100%;transition:transform .55s;transform-style:preserve-3d}.ak-tile.on>span{transform:rotateY(180deg)}'+
'.ak-tile>span>i{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:16px;display:grid;place-items:center;align-content:center;gap:4px;padding:8px;font-style:normal;text-align:center}'+
'.ak-tile .fr{background:#ffffff14;border:2px solid #ffffff40;font:800 2.6rem "Baloo 2",sans-serif}.ak-tile .fr small{font:600 .7rem Poppins,sans-serif;opacity:.8}'+
'.ak-tile .bk{transform:rotateY(180deg);background:#ffe14d;color:#1b1147;font:600 .74rem/1.25 Poppins,sans-serif;overflow-wrap:anywhere}.ak-tile .bk b{font:800 .95rem "Baloo 2",sans-serif}'+
'.ak-mc .tst{display:grid;grid-template-columns:auto minmax(0,1fr);gap:8px 10px;align-items:center}.ak-mc .tst b{font:800 1.5rem "Baloo 2",sans-serif;color:#ffe14d;text-align:center;min-width:36px}'+
'.ak-mc select{font:600 .9rem Poppins,sans-serif;padding:7px;border-radius:10px;border:2px solid #ffffff55;background:#ffffff15;color:#fff;max-width:100%}.ak-mc select option{color:#111}'+
'.ak-mc select.ok{border-color:#3ff2a5;background:#3ff2a533}.ak-mc select.no{border-color:#ff5c7a;background:#ff5c7a33}'+
'.ak-mc .row2{display:flex;gap:8px;flex-wrap:wrap}.ak-mc button.b{border:0;border-radius:12px;padding:9px 14px;font:800 .9rem Poppins,sans-serif;background:#ff2e88;color:#fff;cursor:pointer}.ak-mc button.b.alt{background:#ffffff22}'+
'.ak-exp{background:#140f33;color:#fff;border-top:2px solid #ff2e88}.ak-exp summary{cursor:pointer;padding:10px 14px;font:800 1rem "Baloo 2",sans-serif;color:#ffe14d}.ak-ex{padding:0 14px 14px;font:500 1rem/1.6 Poppins,sans-serif}.ak-ex b{color:#22e4ff}'+
'.ak-op{display:grid;gap:18px}.ak-oplead{margin:0;font-size:1.08rem;line-height:1.6}'+
'.ak-sec{display:grid;gap:10px;background:var(--bg2,#f7f3ea);border-radius:20px;padding:16px;border:2px solid var(--line,#ddd)}'+
'.ak-sk{display:flex;align-items:center;gap:8px;font:800 .78rem Poppins,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:var(--teal,#18a)}.ak-sk span{display:grid;place-items:center;width:30px;height:30px;border-radius:10px;background:var(--orange,#f60);color:#fff;font-size:.95rem;letter-spacing:0}'+
'.ak-sec h3{margin:0;font:800 clamp(1.25rem,4.4vw,1.6rem)/1.2 "Baloo 2",sans-serif}.ak-art svg{display:block;width:100%;height:auto;border-radius:16px}'+
'.ak-body{font-size:1.05rem;line-height:1.7}.ak-body p{margin:0 0 10px}.ak-body ul{margin:0 0 10px;padding-left:22px}.ak-body li{margin-bottom:6px}'+
'.ak-simple{background:var(--amber,#ffd23f);color:#1b1147;border-radius:14px;padding:10px 14px;font-weight:600;line-height:1.5}'+
'.ak-kw{display:flex;flex-wrap:wrap;gap:8px}.ak-kw span{background:var(--card,#fff);border:2px solid var(--line,#ddd);border-radius:12px;padding:6px 10px;font-size:.92rem}'+
'.ak-think{background:var(--card,#fff);border:2px dashed var(--orange,#f60);border-radius:14px;padding:10px 14px}.ak-think summary{cursor:pointer;font-weight:700}.ak-think p{margin:8px 0 0;line-height:1.6}'+
'@media (max-width:520px){.ak-bar{gap:5px;padding:6px}.ak-bar button{min-width:30px;height:30px;font-size:.75rem}.ak-sub{font-size:.92rem}}'+
'@media (prefers-reduced-motion:reduce){.a-pop,.a-left,.a-right,.a-drop,.a-float,.a-shake,.a-spin,.ak-zoom{animation:none!important}}';
document.head.appendChild(s)}
function el(t,a,p){const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e}
const SKIN={l:'#ffe0c7',m:'#f1c19a',d:'#c98a5e'};
/* chibi: anime-style character drawn in code */
function chibi(p,c,mood){const g=el('g',{},p),sk=SKIN[c.skin||'m']||c.skin,hair=c.hair||'#2b1d3a',out=c.outfit||'#3a5bd9',m=mood||c.mood||'happy';
 el('path',{d:'M-46 150 Q-50 70 0 64 Q50 70 46 150 Z',fill:out,stroke:'#15122e','stroke-width':4},g);
 if(c.sash)el('path',{d:'M-34 76 L30 146',stroke:c.sash,'stroke-width':10},g);
 el('rect',{x:-10,y:52,width:20,height:16,fill:sk},g);
 el('circle',{cx:0,cy:0,r:58,fill:sk,stroke:'#15122e','stroke-width':4},g);
 el('path',{d:'M-60 4 Q-64 -60 0 -64 Q64 -60 60 4 Q48 -26 34 -30 L38 -8 L20 -34 L12 -6 L-4 -36 L-14 -8 L-28 -34 L-30 -6 Q-46 -24 -60 4 Z',fill:hair,stroke:'#15122e','stroke-width':4,'stroke-linejoin':'round'},g);
 const eye=(x)=>{if(m==='cool'){el('path',{d:'M'+(x-14)+' 10 Q'+x+' 2 '+(x+14)+' 10',stroke:'#15122e','stroke-width':5,fill:'none','stroke-linecap':'round'},g);return}
  if(m==='happy'){el('path',{d:'M'+(x-13)+' 14 Q'+x+' 0 '+(x+13)+' 14',stroke:'#15122e','stroke-width':5,fill:'none','stroke-linecap':'round'},g);return}
  const ry=m==='shock'?16:13;el('ellipse',{cx:x,cy:12,rx:11,ry:ry,fill:'#15122e'},g);el('ellipse',{cx:x,cy:14,rx:6,ry:ry-5,fill:c.eye||'#4f7bff'},g);el('circle',{cx:x-4,cy:6,r:4,fill:'#fff'},g);el('circle',{cx:x+4,cy:18,r:2,fill:'#fff'},g)};
 eye(-22);eye(22);
 if(m==='angry'){el('path',{d:'M-36 -6 L-10 4 M36 -6 L10 4',stroke:'#15122e','stroke-width':5,'stroke-linecap':'round'},g);el('path',{d:'M30 -40 l8 8 m0 -8 l-8 8',stroke:'#ff2e4d','stroke-width':4},g)}
 if(m==='sad')el('path',{d:'M-34 0 L-12 -4 M34 0 L12 -4',stroke:'#15122e','stroke-width':4,'stroke-linecap':'round'},g);
 el('ellipse',{cx:-34,cy:30,rx:9,ry:5,fill:'#ff8fb1',opacity:.7},g);el('ellipse',{cx:34,cy:30,rx:9,ry:5,fill:'#ff8fb1',opacity:.7},g);
 const mouth={happy:'M-12 32 Q0 46 12 32 Z',shock:'M-7 34 a7 9 0 1 0 14 0 a7 9 0 1 0 -14 0',angry:'M-12 40 Q0 30 12 40',sad:'M-10 42 Q0 34 10 42',cool:'M-8 36 Q4 40 12 32',smug:'M-10 36 Q4 42 14 30'}[m]||'M-12 32 Q0 46 12 32 Z';
 el('path',{d:mouth,fill:(m==='happy'||m==='shock')?'#7a1f3d':'none',stroke:'#15122e','stroke-width':4,'stroke-linecap':'round'},g);
 if(m==='shock')el('path',{d:'M46 -20 q8 14 0 20 q-8 -6 0 -20 Z',fill:'#7fd3ff',stroke:'#15122e','stroke-width':2},g);
 const hat=c.hat;
 if(hat==='crown')el('path',{d:'M-34 -56 L-34 -88 L-17 -70 L0 -94 L17 -70 L34 -88 L34 -56 Z',fill:'#ffd23f',stroke:'#15122e','stroke-width':4},g);
 if(hat==='bicorne'){el('path',{d:'M-78 -42 Q0 -120 78 -42 Q0 -66 -78 -42 Z',fill:'#1d1d2b',stroke:'#15122e','stroke-width':4},g);el('circle',{cx:0,cy:-62,r:9,fill:'#e0322f',stroke:'#fff','stroke-width':3},g)}
 if(hat==='cap')el('path',{d:'M-40 -50 Q0 -110 40 -50 Q0 -62 -40 -50 Z',fill:'#e0322f',stroke:'#15122e','stroke-width':4},g);
 if(hat==='tophat'){el('rect',{x:-30,y:-118,width:60,height:62,fill:'#222',stroke:'#15122e','stroke-width':4},g);el('rect',{x:-48,y:-62,width:96,height:10,fill:'#222',stroke:'#15122e','stroke-width':4},g)}
 if(hat==='beret')el('ellipse',{cx:6,cy:-58,rx:46,ry:14,fill:c.hatc||'#2f8f5b',stroke:'#15122e','stroke-width':4},g);
 if(c.tag)el('text',{x:0,y:132,'text-anchor':'middle','font-size':16,'font-weight':800,fill:'#fff','font-family':'Baloo 2,sans-serif'},g).textContent=c.tag;
 return g}
function wrap(t,max){const w=String(t).split(' ');const L=[];let cur='';w.forEach(x=>{if((cur+' '+x).trim().length>max){if(cur)L.push(cur);cur=x}else cur=(cur+' '+x).trim()});if(cur)L.push(cur);return L}
function txt(p,t,a){const e=el('text',a,p);const parts=String(t).split(/(<b>.*?<\/b>)/);parts.forEach(s=>{if(!s)return;const b=/^<b>/.test(s);const ts=el('tspan',b?{fill:a.hl||'#e6006e'}:{},e);ts.textContent=s.replace(/<\/?b>/g,'')});return e}
function bubble(p,b){const g=el('g',{class:'a-pop',style:'animation-delay:'+(b.d||300)+'ms'},p);const fs=b.fs||20,max=Math.max(8,Math.floor((b.w||240)/(fs*.55)));const L=wrap(b.t,max);const h=L.length*(fs+4)+22,w=b.w||240;
 const shape=b.shout?'M0 0 L'+w+' 0 L'+w+' '+h+' L0 '+h+' Z':'';
 const tail=b.tail||'l';const tx=tail==='l'?24:tail==='r'?w-44:w/2-10;
 el('path',{d:'M'+tx+' '+(h-2)+' l'+(tail==='l'?-16:16)+' 26 l26 -26 Z',fill:'#fff',stroke:'#15122e','stroke-width':4,'stroke-linejoin':'round'},g);
 el('rect',{x:0,y:0,width:w,height:h,rx:b.shout?4:22,fill:'#fff',stroke:'#15122e','stroke-width':4},g);
 el('path',{d:'M'+(tx+2)+' '+(h-4)+' l'+(tail==='l'?-12:12)+' 18 l20 -18 Z',fill:'#fff'},g);
 L.forEach((ln,i)=>txt(g,ln,{x:w/2,y:20+fs*.8+i*(fs+4),'text-anchor':'middle','font-size':fs,'font-weight':800,fill:'#15122e','font-family':'Baloo 2,Poppins,sans-serif'}));
 g.setAttribute('transform','translate('+b.x+' '+b.y+')');const o=el('g',{transform:'translate('+b.x+' '+b.y+')'},p);o.appendChild(g);g.setAttribute('transform','');return o}
function sfx(p,s){const o=el('g',{transform:'translate('+s.x+' '+s.y+') rotate('+(s.r==null?-8:s.r)+')'},p);const g=el('g',{class:'a-pop',style:'animation-delay:'+(s.d||200)+'ms'},o);
 const a={x:0,y:0,'text-anchor':'middle','font-size':s.fs||64,'font-weight':800,'font-family':'Baloo 2,Impact,sans-serif','paint-order':'stroke',stroke:'#15122e','stroke-width':10,'stroke-linejoin':'round',fill:s.c||'#ffe14d'};el('text',a,g).textContent=s.t;return o}
function bgPaint(p,sc,id){const b=sc.bg||['#2a1b5e','#120c2e'];const gid='g'+id;const d=el('defs',{},p);const lg=el('linearGradient',{id:gid,x1:0,y1:0,x2:0,y2:1},d);el('stop',{offset:0,'stop-color':Array.isArray(b)?b[0]:b},lg);el('stop',{offset:1,'stop-color':Array.isArray(b)?b[1]:b},lg);
 const pt=el('pattern',{id:'h'+id,width:14,height:14,patternUnits:'userSpaceOnUse'},d);el('circle',{cx:7,cy:7,r:2.2,fill:'#ffffff',opacity:.12},pt);
 el('rect',{width:800,height:450,fill:'url(#'+gid+')'},p);el('rect',{width:800,height:450,fill:'url(#h'+id+')'},p);
 if(sc.lines){const g=el('g',{class:'a-spin',opacity:.35},p);for(let i=0;i<36;i++){const a=i/36*Math.PI*2;el('path',{d:'M'+(400+Math.cos(a)*80)+' '+(225+Math.sin(a)*80)+' L'+(400+Math.cos(a)*700)+' '+(225+Math.sin(a)*700),stroke:sc.lineC||'#fff','stroke-width':i%2?2:5},g)}}
 if(sc.ground!==false)el('rect',{y:380,width:800,height:70,fill:sc.ground||'#00000040'},p)}
function drawScene(svg,sc,cast,id){while(svg.firstChild)svg.removeChild(svg.firstChild);const root=el('g',{class:sc.zoom?'ak-zoom':''},svg);bgPaint(root,sc,id);
 (sc.props||[]).forEach((o,i)=>{const w=el('g',{transform:'translate('+o.x+' '+o.y+') scale('+(o.s||1)+')'},root);const g=el('g',{class:'a-'+(o.enter||'pop')+(o.float?' a-float':''),style:'animation-delay:'+(o.d||i*150)+'ms'},w);
  if(o.svg){g.innerHTML=o.svg}else{const t=el('text',Object.assign({x:0,y:0,'text-anchor':'middle','dominant-baseline':'central','font-size':o.fs||80},o.c?{fill:o.c,stroke:'#15122e','stroke-width':8,'paint-order':'stroke','font-weight':800,'font-family':'Baloo 2,Impact,sans-serif'}:{}),g);t.textContent=o.e}
  if(o.label){el('text',{x:0,y:(o.fs||80)*.75,'text-anchor':'middle','font-size':o.lfs||20,'font-weight':800,fill:o.lc||'#fff','font-family':'Baloo 2,sans-serif','paint-order':'stroke',stroke:'#15122e','stroke-width':5},g).textContent=o.label}});
 (sc.chars||[]).forEach((c,i)=>{const C=Object.assign({},(cast||{})[c.ch]||{},c);const w=el('g',{transform:'translate('+c.x+' '+(c.y||300)+') scale('+(c.s||1)+')'},root);const g=el('g',{class:'a-'+(c.enter||'pop'),style:'animation-delay:'+(c.d||i*200)+'ms'},w);const fl=el('g',{class:c.still?'':'a-float'},g);chibi(fl,C,c.mood);
  if(C.name&&c.name!==false){const nt=el('g',{},g);const nw=Math.max(120,String(C.name).length*10+24);el('rect',{x:-nw/2,y:154,width:nw,height:28,rx:10,fill:'#ff2e88',stroke:'#15122e','stroke-width':3},nt);el('text',{x:0,y:174,'text-anchor':'middle','font-size':16,'font-weight':800,fill:'#fff','font-family':'Baloo 2,sans-serif'},nt).textContent=C.name}});
 (sc.bubbles||[]).forEach(b=>bubble(root,b));(sc.sfx||[]).forEach(s=>sfx(root,s));
 if(sc.title){const L=wrap(sc.title,24),top=sc.kicker?58:24,bh=top+L.length*46+24,by=225-bh/2;const g=el('g',{class:'a-pop'},root);el('rect',{x:70,y:by,width:660,height:bh,rx:24,fill:'#15122e',stroke:'#ffe14d','stroke-width':6},g);
  if(sc.kicker)el('text',{x:400,y:by+40,'text-anchor':'middle','font-size':22,'font-weight':800,fill:'#22e4ff','font-family':'Baloo 2,sans-serif','letter-spacing':3},g).textContent=sc.kicker;
  L.forEach((ln,i)=>el('text',{x:400,y:by+top+36+i*46,'text-anchor':'middle','font-size':40,'font-weight':800,fill:'#ffe14d','font-family':'Baloo 2,sans-serif'},g).textContent=ln)}
 if(sc.flash){const f=el('rect',{width:800,height:450,fill:'#fff',class:'ak-flash'},root)}
 if(sc.shake)root.setAttribute('class',(root.getAttribute('class')||'')+' a-shake')}
/* ---------- episode player ---------- */
function episode(host,a){const S=a.scenes,cast=a.cast||{};let i=-1,timer=null,playing=false,t0=0,elapsed=0,narr=false,rate=1;const total=S.reduce((s,x)=>s+(x.dur||4000),0);
 host.innerHTML='<div class="ak-ep"><svg class="st" viewBox="0 0 800 450" role="img" aria-label="'+(a.aria||'Animated episode')+'"></svg><div class="ak-sub"></div><div class="ak-bar"><button type="button" data-k="pp" aria-label="Play or pause">▶</button><button type="button" data-k="pv" aria-label="Previous scene">⏮</button><button type="button" data-k="nx" aria-label="Next scene">⏭</button><div class="ak-prog" role="slider" aria-label="Episode progress"><i></i>'+(()=>{let acc=0;return S.map(x=>{const l=acc/total*100;acc+=x.dur||4000;return '<b style="left:'+l+'%"></b>'}).join('')})()+'</div><button type="button" data-k="nr" aria-label="Narrator voice">🔊</button><button type="button" data-k="sp" aria-label="Speed">1x</button></div>'+(S.some(x=>x.exp)?'<details class="ak-exp" open><summary>📖 Explain this scene</summary><div class="ak-ex"></div></details>':'')+'<button type="button" class="ak-big"><span><em>▶</em>'+(a.poster||'Play the episode')+'</span></button></div>';
 const svg=host.querySelector('svg.st'),sub=host.querySelector('.ak-sub'),pp=host.querySelector('[data-k=pp]'),bar=host.querySelector('.ak-prog i'),big=host.querySelector('.ak-big');
 const startOf=k=>S.slice(0,k).reduce((s,x)=>s+(x.dur||4000),0);
 function speak(t){if(!narr||!window.speechSynthesis)return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(String(t).replace(/<[^>]+>/g,''));const vs=speechSynthesis.getVoices();u.voice=vs.find(v=>/en-IN/i.test(v.lang))||vs.find(v=>/en-GB/i.test(v.lang))||vs.find(v=>/^en/i.test(v.lang))||null;u.rate=1.05*rate;u.pitch=1.1;speechSynthesis.speak(u)}catch(e){}}
 function show(k){i=Math.max(0,Math.min(S.length-1,k));const sc=S[i];drawScene(svg,sc,cast,(a.id||'ep')+i);sub.innerHTML='<span>'+(sc.sub||'')+'</span>';const ex=host.querySelector('.ak-ex');if(ex)ex.innerHTML='<b>Scene '+(i+1)+' / '+S.length+'</b> · '+(sc.exp||sc.sub||'');elapsed=startOf(i);t0=performance.now();speak(sc.say||sc.sub||'');if(i===S.length-1&&typeof xp==='function')xp(a.id||'ep',15)}
 function tick(){if(!playing)return;const sc=S[i],d=(sc.dur||4000)/rate,now=performance.now()-t0;bar.style.width=Math.min(100,(elapsed+now*rate)/total*100)+'%';
  const talking=narr&&window.speechSynthesis&&speechSynthesis.speaking;if(now>=d&&!talking){if(i>=S.length-1){stop();pp.textContent='↻';return}show(i+1)}timer=requestAnimationFrame(tick)}
 function play(){if(i<0||i>=S.length-1&&pp.textContent==='↻')show(0);playing=true;pp.textContent='❚❚';big.hidden=true;t0=performance.now()-0;timer=requestAnimationFrame(tick)}
 function stop(){playing=false;cancelAnimationFrame(timer);pp.textContent='▶';try{speechSynthesis.cancel()}catch(e){}}
 big.onclick=()=>{if(i<0)show(0);play()};pp.onclick=()=>playing?stop():play();
 host.querySelector('[data-k=nx]').onclick=()=>{show(i+1);if(!playing)bar.style.width=startOf(i)/total*100+'%'};host.querySelector('[data-k=pv]').onclick=()=>{show(i-1);if(!playing)bar.style.width=startOf(i)/total*100+'%'};
 const nb=host.querySelector('[data-k=nr]');if(!window.speechSynthesis)nb.hidden=true;nb.onclick=()=>{narr=!narr;nb.classList.toggle('on',narr);if(!narr)try{speechSynthesis.cancel()}catch(e){}else if(i>=0)speak(S[i].say||S[i].sub)};
 const spb=host.querySelector('[data-k=sp]');spb.onclick=()=>{rate=rate===1?1.25:rate===1.25?1.5:1;spb.textContent=rate+'x'};
 host.querySelector('.ak-prog').onclick=e=>{const r=e.currentTarget.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*total;let acc=0,k=0;for(;k<S.length;k++){acc+=S[k].dur||4000;if(acc>x)break}show(k);bar.style.width=startOf(i)/total*100+'%'};
 drawScene(svg,S[0],cast,(a.id||'ep')+'p');sub.innerHTML='';const ex0=host.querySelector('.ak-ex');if(ex0)ex0.innerHTML='Press play. The explanation of each scene will appear here, in easy words.'}
/* ---------- manga panels (picture presentation) ---------- */
function manga(host,a){const P=a.panels;host.innerHTML='<div class="ak-mg"><div class="ak-strip">'+P.map((p,k)=>'<figure class="ak-pan" style="margin:0" data-k="'+k+'"><svg viewBox="0 0 800 450" role="img" aria-label="'+(p.aria||('Panel '+(k+1)))+'"></svg><p>'+(p.cap||'')+'</p></figure>').join('')+'</div><div class="ak-nav"><button type="button" data-d="-1">‹ Prev</button><span>1 / '+P.length+'</span><button type="button" data-d="1">Next ›</button></div></div>';
 const strip=host.querySelector('.ak-strip'),figs=[...host.querySelectorAll('.ak-pan')],cnt=host.querySelector('.ak-nav span');const drawn=new Set();
 function draw(k){if(drawn.has(k))return;drawn.add(k);drawScene(figs[k].querySelector('svg'),Object.assign({ground:false},P[k]),a.cast||{},(a.id||'mg')+k);if(drawn.size===P.length&&typeof xp==='function')xp(a.id||'mg',8)}
 const io=('IntersectionObserver' in window)?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const k=+e.target.dataset.k;draw(k);cnt.textContent=(k+1)+' / '+P.length}}),{root:strip,threshold:.6}):null;
 figs.forEach((f,k)=>{if(io)io.observe(f);else draw(k)});draw(0);
 host.querySelectorAll('.ak-nav button').forEach(b=>b.onclick=()=>{const w=figs[0].getBoundingClientRect().width+12;strip.scrollBy({left:+b.dataset.d*w,behavior:'smooth'})})}
/* ---------- memory code ---------- */
function memcode(host,a){const L=a.letters,words=L.map(x=>x[1]);
 host.innerHTML='<div class="ak-mc"><div class="ph">“'+a.phrase+'”</div><div class="tl">'+L.map((x,k)=>'<button type="button" class="ak-tile" aria-label="'+x[0]+' stands for '+x[1]+'"><span><i class="fr">'+x[0]+'<small>tap</small></i><i class="bk"><b>'+x[1]+'</b>'+(x[2]||'')+'</i></span></button>').join('')+'</div>'+(a.tip?'<p style="margin:0;opacity:.9">💡 '+a.tip+'</p>':'')+'<div class="row2"><button type="button" class="b" data-k="t">🧠 Test me</button><button type="button" class="b alt" data-k="a">Flip all</button></div><div class="tst" hidden></div></div>';
 const tiles=[...host.querySelectorAll('.ak-tile')];tiles.forEach(t=>t.onclick=()=>t.classList.toggle('on'));
 host.querySelector('[data-k=a]').onclick=()=>{const on=tiles.some(t=>!t.classList.contains('on'));tiles.forEach(t=>t.classList.toggle('on',on))};
 host.querySelector('[data-k=t]').onclick=()=>{tiles.forEach(t=>t.classList.remove('on'));const box=host.querySelector('.tst');box.hidden=false;const sh=[...words].sort(()=>Math.random()-.5);
  box.innerHTML=L.map((x,k)=>'<b>'+x[0]+'</b><select data-k="'+k+'"><option value="">Which one?</option>'+sh.map(w=>'<option>'+w+'</option>').join('')+'</select>').join('')+'<span></span><div class="row2"><button type="button" class="b" data-k="c">Check</button><b class="sc" style="font-size:1rem"></b></div>';
  box.querySelector('[data-k=c]').onclick=()=>{let ok=0;box.querySelectorAll('select').forEach(s=>{const g=s.value===words[+s.dataset.k];s.className=g?'ok':'no';if(g)ok++});box.querySelector('.sc').textContent=ok+' / '+L.length+(ok===L.length?' 🔥 locked in!':'');if(ok===L.length&&typeof xp==='function')xp(a.id||'mc',10)}}}

/* ---------- chapter opener (textbook-style start) ---------- */
function opener(host,a){const S=a.sections;
 host.innerHTML='<div class="ak-op">'+(a.lead?'<p class="ak-oplead">'+a.lead+'</p>':'')+S.map((x,k)=>'<article class="ak-sec"><div class="ak-sk"><span>'+(k+1)+'</span>'+(x.k||('Read '+(k+1)+' of '+S.length))+'</div><h3>'+x.t+'</h3>'+(x.art?'<div class="ak-art">'+x.art+'</div>':'')+'<div class="ak-body">'+x.body+'</div>'+(x.simple?'<div class="ak-simple"><b>Say it simply:</b> '+x.simple+'</div>':'')+(x.words?'<div class="ak-kw">'+x.words.map(w=>'<span><b>'+w[0]+'</b> = '+w[1]+'</span>').join('')+'</div>':'')+(x.think?'<details class="ak-think"><summary>🤔 Pause and think: '+x.think[0]+'</summary><p>'+x.think[1]+'</p></details>':'')+'</article>').join('')+'</div>';
 host.querySelectorAll('.ak-think').forEach((d,k)=>d.addEventListener('toggle',()=>{if(d.open&&host.querySelectorAll('.ak-think[open]').length===host.querySelectorAll('.ak-think').length&&typeof xp==='function')xp(a.id||'op',10)}))}
window.NFX={episode,manga,memcode,opener};window.NFX_IC={episode:'🎬',manga:'🖼️',memcode:'🔐',opener:'📖'};
})();
