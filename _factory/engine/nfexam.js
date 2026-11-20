function nfOrd(q){var n=q[1].length,a=[],h=0,t=String(q[0]);for(var k=0;k<n;k++)a.push(k);if(/Assertion/.test(t))return a;for(var j=0;j<t.length;j++)h=(h*31+t.charCodeAt(j))%9973;var r=(h>>3)%n;return a.slice(r).concat(a.slice(0,r));}
/* Notesflix "Board practice" panel. Needs window.NF_EXAM = {title, pyq, write, quick:[[q,[opts],ansIndex,why,src]], long:[{m,q,src,pts:[],tip}], cases:[{m,q,src,ask,pts:[]}]} */
(function(){
var E=window.NF_EXAM; if(!E||document.getElementById('nfx-fab'))return;
var KEY='nf.exam.'+location.pathname, S={}; try{S=JSON.parse(localStorage.getItem(KEY))||{}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
function esc(t){return String(t).replace(/[&<>]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[c]})}
var css=document.createElement('style');css.textContent=
'#nfx-fab{position:fixed;right:12px;bottom:calc(84px + env(safe-area-inset-bottom,0px));z-index:2147483000;border:0;border-radius:999px;padding:12px 16px;font:800 15px/1 system-ui,sans-serif;color:#1b1030;background:linear-gradient(135deg,#ffd23f,#ff9f1c);box-shadow:0 8px 24px #0005,0 0 0 3px #fff8;cursor:pointer;display:flex;gap:6px;align-items:center}'+
'#nfx-fab b{background:#1b1030;color:#ffd23f;border-radius:999px;padding:3px 7px;font-size:12px}'+
'#nfx{position:fixed;inset:0;z-index:2147483001;background:#140b2e;color:#fff;font:15px/1.5 system-ui,sans-serif;display:none;flex-direction:column}'+
'#nfx.on{display:flex}#nfx *{box-sizing:border-box}'+
'#nfx .hd{padding:14px 14px 10px;background:linear-gradient(120deg,#7b2ff7,#f107a3);display:flex;gap:10px;align-items:center}'+
'#nfx .hd h2{margin:0;font-size:18px;flex:1;line-height:1.2}#nfx .hd small{display:block;font-weight:600;opacity:.9;font-size:12px}'+
'#nfx .x{border:0;background:#fff3;color:#fff;border-radius:12px;width:44px;height:44px;font-size:20px;cursor:pointer}'+
'#nfx .tb{display:flex;gap:6px;padding:10px 12px;background:#1d1240;overflow-x:auto}'+
'#nfx .tb button{flex:none;border:0;border-radius:999px;padding:10px 14px;font:800 14px system-ui;background:#2e2160;color:#fff;cursor:pointer}'+
'#nfx .tb button.on{background:#ffd23f;color:#1b1030}'+
'#nfx .bd{flex:1;overflow:auto;padding:12px 12px 90px;max-width:760px;width:100%;margin:0 auto}'+
'#nfx .cd{background:#231650;border-radius:18px;padding:14px;margin:0 0 12px;border-left:6px solid var(--c,#4cc9f0)}'+
'#nfx .ch{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px}#nfx .ch span{font:800 11px system-ui;padding:4px 8px;border-radius:999px;background:var(--c,#4cc9f0);color:#120a2a}#nfx .ch span.s{background:#ffffff22;color:#fff}'+
'#nfx .q{font-weight:700;margin:0 0 10px}'+
'#nfx .op{display:block;width:100%;text-align:left;border:2px solid #ffffff2a;background:#ffffff0d;color:#fff;border-radius:14px;padding:11px 12px;margin:6px 0;font:600 15px system-ui;cursor:pointer;min-height:44px}'+
'#nfx .op.ok{border-color:#06d6a0;background:#06d6a033}#nfx .op.no{border-color:#ef476f;background:#ef476f33}'+
'#nfx .why{margin-top:8px;padding:9px 11px;border-radius:12px;background:#ffffff12;font-size:14px}'+
'#nfx .rv{border:0;border-radius:12px;padding:11px 14px;font:800 14px system-ui;background:#4cc9f0;color:#120a2a;cursor:pointer;min-height:44px}'+
'#nfx ol{margin:10px 0 0;padding-left:22px}#nfx li{margin:5px 0}#nfx .tip{margin-top:8px;font-size:13px;color:#ffd23f}'+
'#nfx .sf{display:flex;gap:6px;margin-top:10px}#nfx .sf button{flex:1;border:2px solid #ffffff33;background:none;color:#fff;border-radius:12px;padding:9px;font:700 13px system-ui;cursor:pointer;min-height:44px}#nfx .sf button.on{background:#06d6a0;color:#120a2a;border-color:#06d6a0}#nfx .sf button.on.r{background:#ffd23f;border-color:#ffd23f}'+
'#nfx .ln{display:flex;gap:8px;flex-wrap:wrap;margin-top:6px}#nfx .ln a{flex:1 1 200px;text-align:center;text-decoration:none;border-radius:14px;padding:12px;font:800 14px system-ui;color:#120a2a;background:#06d6a0}#nfx .ln a.w{background:#ffd23f}'+
'#nfx .sc{font:800 14px system-ui;color:#ffd23f;margin:0 0 10px}';
document.head.appendChild(css);
var cols=['#4cc9f0','#f72585','#06d6a0','#ffd23f','#b388ff','#ff9f1c'];
var fab=document.createElement('button');fab.id='nfx-fab';fab.type='button';fab.innerHTML='📝 Board practice <b>'+((E.quick||[]).length+(E.long||[]).length+(E.cases||[]).length)+'</b>';
var box=document.createElement('div');box.id='nfx';box.setAttribute('role','dialog');box.setAttribute('aria-label','Board practice');
box.innerHTML='<div class="hd"><h2>📝 Board practice<small>'+esc(E.title||'')+'</small></h2><button class="x" type="button" aria-label="Close">✕</button></div><div class="tb"></div><div class="bd"></div>';
document.body.appendChild(fab);document.body.appendChild(box);
var tabs=[['quick','⚡ 1 mark'],['long','✍️ 3–6 marks'],['cases','🔍 Case based'],['more','➕ More']].filter(function(t){return t[0]==='more'||(E[t[0]]&&E[t[0]].length)});
var cur=tabs[0][0],tb=box.querySelector('.tb'),bd=box.querySelector('.bd');
function chips(m,src,c){return '<div class="ch" style="--c:'+c+'"><span>'+m+' mark'+(m>1?'s':'')+'</span>'+(src?'<span class="s">'+esc(src)+'</span>':'')+'</div>'}
function selfRate(id){var v=S[id]||'';return '<div class="sf" data-id="'+id+'"><button type="button" class="'+(v==='g'?'on':'')+'" data-v="g">✅ I got it</button><button type="button" class="r'+(v==='r'?' on r':'')+'" data-v="r">🔁 Revise again</button></div>'}
function draw(){
 tb.innerHTML=tabs.map(function(t){return '<button type="button" data-t="'+t[0]+'" class="'+(t[0]===cur?'on':'')+'">'+t[1]+'</button>'}).join('');
 var h='';
 if(cur==='quick'){var done=E.quick.filter(function(q,i){return S['q'+i]!=null}).length,ok=E.quick.filter(function(q,i){return S['q'+i]===q[2]}).length;
  h+='<p class="sc">Score: '+ok+' / '+E.quick.length+' · answered '+done+'</p>';
  E.quick.forEach(function(q,i){var a=S['q'+i];h+='<div class="cd" style="--c:'+cols[i%6]+'">'+chips(1,q[4],cols[i%6])+'<p class="q">'+esc(q[0])+'</p>'+nfOrd(q).map(function(k,p){var o=q[1][k];var c=a==null?'':(k===q[2]?'ok':(k===a?'no':''));return '<button type="button" class="op '+c+'" data-q="'+i+'" data-k="'+k+'">'+String.fromCharCode(65+p)+'. '+esc(o)+'</button>'}).join('')+(a!=null?'<div class="why">'+(a===q[2]?'✅ ':'❌ ')+esc(q[3])+'</div>':'')+'</div>'});}
 if(cur==='long'||cur==='cases'){E[cur].forEach(function(q,i){var id=cur[0]+i,c=cols[(i+2)%6],op=S['o'+id];
  h+='<div class="cd" style="--c:'+c+'">'+chips(q.m,q.src,c)+'<p class="q">'+esc(q.q)+'</p>'+(q.ask?'<p class="q" style="color:#ffd23f">'+esc(q.ask)+'</p>':'')+
  (op?'<ol>'+q.pts.map(function(p){return '<li>'+p+'</li>'}).join('')+'</ol>'+(q.tip?'<div class="tip">💡 '+q.tip+'</div>':'')+selfRate(id):'<button type="button" class="rv" data-o="'+id+'">✍️ Try it in your notebook, then tap to see the answer points</button>')+'</div>'});}
 if(cur==='more'){h+='<div class="cd"><p class="q">Want more?</p><div class="ln">'+(E.pyq?'<a href="'+E.pyq+'">📚 All past board questions of this chapter</a>':'')+(E.write?'<a class="w" href="'+E.write+'">✍️ Practise writing full answers</a>':'')+'</div></div>';
  var g=Object.keys(S).filter(function(k){return S[k]==='g'}).length,r=Object.keys(S).filter(function(k){return S[k]==='r'}).length;h+='<div class="cd"><p class="q">Your progress here</p>✅ Got it: <b>'+g+'</b> &nbsp; 🔁 To revise: <b>'+r+'</b></div>';}
 bd.innerHTML=h;bd.scrollTop=0;}
tb.onclick=function(e){var b=e.target.closest('[data-t]');if(b){cur=b.dataset.t;draw()}};
bd.onclick=function(e){var b=e.target.closest('[data-q]');if(b){var i=+b.dataset.q;if(S['q'+i]==null){S['q'+i]=+b.dataset.k;save();var y=bd.scrollTop;draw();bd.scrollTop=y}return}
 b=e.target.closest('[data-o]');if(b){S['o'+b.dataset.o]=1;save();var y2=bd.scrollTop;draw();bd.scrollTop=y2;return}
 b=e.target.closest('.sf button');if(b){var id=b.parentNode.dataset.id;S[id]=b.dataset.v;save();var y3=bd.scrollTop;draw();bd.scrollTop=y3}};
fab.onclick=function(){box.classList.add('on');draw();try{gtag('event','exam_practice_open',{page:location.pathname})}catch(e){}};
box.querySelector('.x').onclick=function(){box.classList.remove('on')};
document.addEventListener('keydown',function(e){if(e.key==='Escape')box.classList.remove('on')});
})();
