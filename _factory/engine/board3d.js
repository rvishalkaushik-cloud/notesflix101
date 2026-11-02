/* Notesflix factory · generic 3D board. window.Board3D(cfg,xp)
   cfg.modes = [{id,label,kit:'flow'|'bars'|'stack', title, intro, ...kit data}]
   flow : nodes[{id,label,emoji,x,z,shape:'house'|'factory'|'bank'|'govt'|'shop'|'globe'|'tower'|'box',color,info}], edges[{from,to,color,label,token,group}], groups[{id,label,on}]
   bars : series[{name,color}], cats[{label, values:[..], info}], unit, max
   stack: layers[{label,h,color,info}] bottom→top, toggles optional: steps[{label,show:[layer idx...],note}]  */
window.Board3D=function(cfg,xp){
 const $=s=>document.querySelector(s),cv=$('#cv'),pan=$('#pan'),lbls=$('#lbls');xp=xp||function(){};
 if(!cv)return;
 if(typeof THREE==='undefined'){cv.insertAdjacentHTML('beforeend','<div style="position:absolute;inset:0;display:grid;place-items:center;padding:20px;text-align:center;font-weight:700">The 3D board needs an internet connection to load. Everything else works offline.</div>');return}
 let R;try{R=new THREE.WebGLRenderer({antialias:true,alpha:true})}catch(e){cv.insertAdjacentHTML('beforeend','<div style="position:absolute;inset:0;display:grid;place-items:center">3D is not supported on this device.</div>');return}
 R.setPixelRatio(Math.min(2,devicePixelRatio));cv.prepend(R.domElement);
 const S=new THREE.Scene(),C=new THREE.PerspectiveCamera(42,1,.1,400);
 S.add(new THREE.HemisphereLight(0xffffff,0xf0e0b0,.85));const dl=new THREE.DirectionalLight(0xffffff,.7);dl.position.set(20,40,15);S.add(dl);
 const css=getComputedStyle(document.documentElement),cvar=n=>css.getPropertyValue(n).trim()||'#888';
 const col=c=>new THREE.Color(!c?cvar('--orange'):c.startsWith('--')?cvar(c):c);
 const M=c=>new THREE.MeshLambertMaterial({color:col(c)});
 let az=.8,el=.75,rad=46,tgt=new THREE.Vector3(0,0,0),G=null,picks=[],labels=[],anim=[],seen=new Set(),modeCfg=null;
 const box=(w,h,d,c,x,y,z,p)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),M(c));m.position.set(x,y+h/2,z);(p||G).add(m);return m};
 const lab=(t,x,y,z,cls)=>{const d=document.createElement('div');d.className='lb'+(cls?' '+cls:'');d.textContent=t;lbls.appendChild(d);labels.push({d,p:new THREE.Vector3(x,y,z)});return d};
 const pick=(obj,info)=>{(obj.isGroup?obj.children:[obj]).forEach(o=>{o.userData.info=info;picks.push(o)});return obj};
 function clear(){if(G)S.remove(G);G=new THREE.Group();S.add(G);picks=[];labels.forEach(l=>l.d.remove());labels=[];anim=[];seen=new Set()}
 function ground(c){const g=new THREE.Mesh(new THREE.CylinderGeometry(27,27,1,48),M(c||'--bg2'));g.position.y=-.5;G.add(g)}
 function setPan(tag,h,p,extra){pan.innerHTML='<span class="tag">'+tag+'</span><h4>'+h+'</h4><p>'+p+'</p>'+(extra||'')}
 /* ---------- shapes ---------- */
 function shape(n){const g=new THREE.Group(),c=n.color||'--orange',x=n.x||0,z=n.z||0;G.add(g);
  const add=(w,h,d,cc,dx,dy,dz)=>box(w,h,d,cc,x+(dx||0),dy||0,z+(dz||0),g);
  switch(n.shape){
   case 'house':add(4,3,4,'#ffffff');{const r=new THREE.Mesh(new THREE.ConeGeometry(3.3,2.4,4),M(c));r.rotation.y=Math.PI/4;r.position.set(x,4.2,z);g.add(r)}add(1,1.6,.2,c,0,0,2.05);break;
   case 'factory':add(6,4,5,'#eef0f8');add(6,.6,5,c,0,4);add(1.2,6,1.2,'#eef0f8',2,4,-1.5);add(1.2,.5,1.2,c,2,10);break;
   case 'bank':add(7,.8,5,'#f2f2f2');for(let i=0;i<4;i++)add(.8,3.6,.8,'#ffffff',-2.6+i*1.75,.8,1.6);add(7,3.6,3,'#f7f3e8',0,.8,-.6);{const r=new THREE.Mesh(new THREE.ConeGeometry(4.6,1.8,4),M(c));r.rotation.y=Math.PI/4;r.scale.z=.7;r.position.set(x,5.3,z);g.add(r)}break;
   case 'govt':add(8,3.4,5,'#f7f3e8');add(8.6,.6,5.6,c,0,3.4);{const d=new THREE.Mesh(new THREE.SphereGeometry(1.8,20,12,0,Math.PI*2,0,Math.PI/2),M(c));d.position.set(x,4,z);g.add(d)}add(.2,2.4,.2,'#555',0,5.6);add(1.4,.8,.1,'--orange',.7,7.2);break;
   case 'shop':add(4.4,3,3.6,'--mint');for(let k=0;k<4;k++)add(1.1,.35,1.2,k%2?'#ffffff':c,-1.65+k*1.1,3,1.9);break;
   case 'globe':{const s=new THREE.Mesh(new THREE.SphereGeometry(2.8,24,16),M(c));s.position.set(x,3.2,z);g.add(s);const r=new THREE.Mesh(new THREE.TorusGeometry(3.4,.18,8,40),M('--amber'));r.rotation.x=Math.PI/2.4;r.position.set(x,3.2,z);g.add(r);anim.push({f:t=>{s.rotation.y=t*.5}})}break;
   case 'tower':add(4,9,4,c);for(let y=1;y<8.5;y+=1.6)add(4.1,.35,4.1,'#ffffff',0,y);break;
   default:add(3.6,3.6,3.6,c)}
  pick(g,['',n.label,n.info||'']);lab((n.emoji?n.emoji+' ':'')+n.label,x,(n.shape==='tower'?11:n.shape==='factory'?11:7.5),z);return g}
 function token(e,c){const g=new THREE.Group();const m=new THREE.Mesh(new THREE.SphereGeometry(.75,14,10),M(c||'--amber'));m.position.y=1.2;g.add(m);G.add(g);return g}
 /* ---------- kits ---------- */
 const KIT={
  flow(m){ground(m.ground);const N={};(m.nodes||[]).forEach(n=>{N[n.id]=n;shape(n)});
   const on=new Set((m.groups||[]).filter(g=>g.on!==false).map(g=>g.id));
   function draw(){anim=anim.filter(a=>!a.tok);G.children.filter(o=>o.userData.edge).forEach(o=>G.remove(o));G.children.filter(o=>o.userData.tok).forEach(o=>G.remove(o));labels.filter(l=>l.edge).forEach(l=>l.d.remove());labels=labels.filter(l=>!l.edge);
    (m.edges||[]).forEach((e,i)=>{if(e.group&&!on.has(e.group))return;const A=N[e.from],B=N[e.to];if(!A||!B)return;const off=(e.side||0)*1.6;
     const dx=B.x-A.x,dz=B.z-A.z,L=Math.hypot(dx,dz),nx=-dz/L*off,nz=dx/L*off;const mid=new THREE.Vector3((A.x+B.x)/2+nx*1.8,0,(A.z+B.z)/2+nz*1.8);
     const curve=new THREE.QuadraticBezierCurve3(new THREE.Vector3(A.x+nx,0,A.z+nz),mid,new THREE.Vector3(B.x+nx,0,B.z+nz));
     const tube=new THREE.Mesh(new THREE.TubeGeometry(curve,30,.28,6,false),M(e.color||'--teal'));tube.position.y=.3;tube.userData.edge=1;G.add(tube);
     pick(tube,['FLOW',e.label||'',e.info||'']);
     if(e.label){const p=curve.getPoint(.5);const d=lab(e.label,p.x,2.2,p.z,'sm');labels[labels.length-1].edge=1;d.style.background=col(e.color||'--teal').getStyle()}
     for(let k=0;k<3;k++){const t=token('',e.tokenColor||e.color||'--amber');t.userData.tok=1;anim.push({tok:1,f:tt=>{const u=((tt*.18+k/3+i*.07)%1);const p=curve.getPoint(u);t.position.set(p.x,.2,p.z)}})}});
    keepCtl()}
   function ctl(){return (m.groups&&m.groups.length?'<div class="row" style="margin-top:6px">'+m.groups.map(g=>'<button type="button" class="btn sm '+(on.has(g.id)?'':'alt')+'" data-g="'+g.id+'">'+(on.has(g.id)?'✓ ':'+ ')+g.label+'</button>').join('')+'</div>':'')+(m.note?'<div class="fb ok" id="b3n" style="margin-top:8px">'+m.note+'</div>':'')}
   function keepCtl(){const c=pan.querySelector('.bctl');if(c){c.innerHTML=ctl();bind()}}
   function bind(){pan.querySelectorAll('[data-g]').forEach(b=>b.onclick=()=>{const g=b.dataset.g;on.has(g)?on.delete(g):on.add(g);draw();const gg=(m.groups||[]).find(x=>x.id===g);const n=$('#b3n');if(n&&gg&&gg.say)n.innerHTML=gg.say[on.has(g)?0:1]||n.innerHTML;xp('b3',6)})}
   modeCfg.extra=()=>'<div class="bctl">'+ctl()+'</div>';modeCfg.bind=bind;draw()},
  bars(m){ground(m.ground);const ser=m.series||[{name:'',color:'--orange'}],cats=m.cats||[],max=m.max||Math.max(...cats.flatMap(c=>c.values))||1,W=2.2,gap=ser.length*W+2.2,x0=-(cats.length-1)*gap/2;
   cats.forEach((c,i)=>{c.values.forEach((v,j)=>{const h=Math.max(.2,v/max*16),x=x0+i*gap+(j-(ser.length-1)/2)*W;const b=box(W*.86,1,W*.86,ser[j].color,x,0,0);b.scale.y=.01;b.position.y=.005;
      anim.push({f:t=>{const k=Math.min(1,(t-(m._t0||t))/1.2);b.scale.y=Math.max(.01,h*k);b.position.y=h*k/2}});
      pick(b,[ser[j].name||'VALUE',c.label+(ser[j].name?' · '+ser[j].name:''),(c.info||'')+'<br><b>'+v+(m.unit?' '+m.unit:'')+'</b>']);lab(String(v),x,h+1.2,0,'sm')});
     lab(c.label,x0+i*gap,-.2,3.4)});
   m._t0=performance.now()/1000;
   modeCfg.extra=()=>ser.length>1?'<div class="row">'+ser.map(s=>'<span class="tag" style="background:'+col(s.color).getStyle()+';color:#fff">'+s.name+'</span>').join(' ')+'</div>':'';tgt.set(0,5,0);rad=Math.max(40,cats.length*gap*1.1)},
  stack(m){ground(m.ground);let y=0;const L=m.layers||[],meshes=[];L.forEach((l,i)=>{const w=14-i*1.2,b=box(w,l.h||2.4,w*.8,l.color||(i%2?'--teal':'--orange'),0,y,0);meshes.push(b);pick(b,['LAYER '+(i+1),l.label,l.info||'']);lab(l.label,w/2+2,y+(l.h||2.4)/2,0);y+=(l.h||2.4)});
   let st=-1;const steps=m.steps||[];
   function show(k){st=k;const s=steps[k];meshes.forEach((b,i)=>{const vis=!s||s.show.includes(i);b.visible=vis;labels[i].d.style.opacity=vis?1:.25});const n=$('#b3n');if(n&&s)n.innerHTML=s.note;xp('b3',4)}
   modeCfg.extra=()=>steps.length?'<div class="row">'+steps.map((s,i)=>'<button type="button" class="btn sm alt" data-st="'+i+'">'+s.label+'</button>').join('')+'</div><div class="fb ok" id="b3n" style="margin-top:8px">'+(m.note||'Tap a button.')+'</div>':'';
   modeCfg.bind=()=>pan.querySelectorAll('[data-st]').forEach(b=>b.onclick=()=>{pan.querySelectorAll('[data-st]').forEach(x=>x.classList.add('alt'));b.classList.remove('alt');show(+b.dataset.st)});tgt.set(0,y/2,0);rad=Math.max(42,y*2.4)}
 };
 function load(id){const m=cfg.modes.find(x=>x.id===id)||cfg.modes[0];document.querySelectorAll('.modes button').forEach(b=>b.classList.toggle('on',b.dataset.m===m.id));clear();tgt.set(0,0,0);rad=46;modeCfg={m};(KIT[m.kit]||KIT.flow)(m);
  setPan(m.tag||m.kit.toUpperCase(),m.title||m.label,m.intro||'',modeCfg.extra?modeCfg.extra():'');modeCfg.bind&&modeCfg.bind()}
 window.__mode=load;document.querySelectorAll('.modes button').forEach(b=>b.onclick=()=>{load(b.dataset.m);xp('b3',3)});
 const ray=new THREE.Raycaster(),mv=new THREE.Vector2();let drag=null,moved=0,pinch=0;const e2=R.domElement;
 e2.addEventListener('pointerdown',e=>{drag={x:e.clientX,y:e.clientY};moved=0;try{e2.setPointerCapture(e.pointerId)}catch(_){}});
 e2.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;moved+=Math.abs(dx)+Math.abs(dy);az-=dx*.008;el=Math.max(.2,Math.min(1.35,el+dy*.006));drag={x:e.clientX,y:e.clientY}});
 e2.addEventListener('pointerup',e=>{const was=drag;drag=null;if(!was||moved>6)return;const r=e2.getBoundingClientRect();mv.x=(e.clientX-r.left)/r.width*2-1;mv.y=-(e.clientY-r.top)/r.height*2+1;ray.setFromCamera(mv,C);const h=ray.intersectObjects(picks,false)[0];
  if(h&&h.object.userData.info){const i=h.object.userData.info;seen.add(i[1]);const keep=pan.querySelector('.bctl,.row')?'':'';setPan(i[0]||'TAPPED',i[1],i[2],(modeCfg.extra?modeCfg.extra():'')+'<div class="fb ok" style="margin-top:8px">Explored: <b>'+seen.size+'</b></div>');modeCfg.bind&&modeCfg.bind();if(seen.size>=3)xp('b3',8)}});
 e2.addEventListener('wheel',e=>{e.preventDefault();rad=Math.max(18,Math.min(110,rad+e.deltaY*.04))},{passive:false});
 e2.addEventListener('touchmove',e=>{if(e.touches.length===2){const d=Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);if(pinch)rad=Math.max(18,Math.min(110,rad-(d-pinch)*.08));pinch=d;e.preventDefault()}},{passive:false});
 e2.addEventListener('touchend',()=>pinch=0);
 function size(){const w=cv.clientWidth,h=cv.clientHeight;R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix()}
 new ResizeObserver(size).observe(cv);size();let vis=false;new IntersectionObserver(es=>{vis=es[0].isIntersecting}).observe(cv);
 load(cfg.modes[0].id);const tmp=new THREE.Vector3();
 (function loop(){requestAnimationFrame(loop);if(!vis)return;const t=performance.now()/1000;if(!drag)az+=.0012;
  C.position.set(tgt.x+rad*Math.cos(el)*Math.cos(az),tgt.y+rad*Math.sin(el),tgt.z+rad*Math.cos(el)*Math.sin(az));C.lookAt(tgt);anim.forEach(a=>a.f&&a.f(t));R.render(S,C);
  const w=cv.clientWidth,h=cv.clientHeight;labels.forEach(l=>{tmp.copy(l.p).project(C);l.d.style.display=tmp.z<1?'block':'none';l.d.style.left=((tmp.x+1)/2*w)+'px';l.d.style.top=((1-tmp.y)/2*h)+'px'})})();
};
