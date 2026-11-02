// Make site thumbnails.  node thumbs.js spec.json
// spec: [{kind:"chapter"|"episode"|"subject", out:"../../img/x.jpg", palette:3, kicker:"CLASS XII · ECONOMICS", title:"National Income", sub:"Part 1", emojis:["🏭","💰","📊"]}]
const {chromium}=require('playwright'),fs=require('fs'),path=require('path');
const PALS=require(path.join(__dirname,'..','palettes.json'));
const SIZE={chapter:[900,330],episode:[480,300],subject:[1280,720]};
const esc=s=>String(s||'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
function page(t){const p=PALS[(t.palette||0)%PALS.length],[W,H]=SIZE[t.kind],k=H/330,em=t.emojis||['📘'];
 const fs1=t.kind==='episode'?32:t.kind==='subject'?110:Math.max(40,62-Math.max(0,t.title.length-18)*1.4);
 return `<!doctype html><html><head><meta charset="utf-8"><style>
 *{margin:0;box-sizing:border-box}body{width:${W}px;height:${H}px;overflow:hidden;font-family:'Inter Display','Inter',sans-serif;background:${p.H};position:relative}
 .bg{position:absolute;inset:0;background:radial-gradient(${W*.7}px ${H*1.2}px at 0% 0%,${p.P} 0,transparent 62%),radial-gradient(${W*.6}px ${H}px at 100% 100%,${p.S} 0,transparent 60%),${p.H}}
 .dots{position:absolute;inset:0;background-image:radial-gradient(#ffffff22 1.5px,transparent 1.6px);background-size:${18*k}px ${18*k}px}
 .txt{position:absolute;left:${34*k}px;top:50%;transform:translateY(-50%);width:${t.kind==="episode"?W*.56:W*.6}px;color:#fff}
 .kick{display:inline-block;background:${p.A};color:${p.H};font-weight:900;font-size:${13*k}px;letter-spacing:.08em;padding:${5*k}px ${12*k}px;border-radius:99px}
 h1{font-weight:900;font-size:${fs1*(t.kind==='subject'?1:k)}px;line-height:1.02;margin:${10*k}px 0 ${6*k}px;text-shadow:0 ${4*k}px 0 #0004}
 .sub{font-weight:700;font-size:${18*k}px;opacity:.92}
 .em{position:absolute;right:${t.kind==='episode'?6*k:30*k}px;top:50%;transform:translateY(-50%);width:300px;height:300px;transform:translateY(-50%) scale(${t.kind==="episode"?.5*k:k});transform-origin:right center;}
 .em span{position:absolute;display:grid;place-items:center;border-radius:50%;background:#ffffff26;border:3px solid #ffffff55;font-family:'Noto Color Emoji'}
 .bar{position:absolute;left:0;bottom:0;height:${8*k}px;width:100%;background:linear-gradient(90deg,${p.P},${p.A},${p.S})}
 </style></head><body><div class="bg"></div><div class="dots"></div>
 <div class="em">${em.slice(0,3).map((e,i)=>{const s=[[160,70,110],[100,0,8],[100,190,0]][i];return `<span style="width:${s[0]}px;height:${s[0]}px;left:${s[1]}px;top:${s[2]}px;font-size:${s[0]*.55}px">${e}</span>`}).join('')}</div>
 <div class="txt"><span class="kick">${esc(t.kicker)}</span><h1>${esc(t.title)}</h1>${t.sub?`<div class="sub">${esc(t.sub)}</div>`:''}</div><div class="bar"></div></body></html>`}
(async()=>{const spec=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));const b=await chromium.launch();
 for(const t of spec){const [W,H]=SIZE[t.kind];const pg=await b.newPage({viewport:{width:W,height:H}});await pg.setContent(page(t));await pg.waitForTimeout(150);
  const out=path.resolve(path.dirname(process.argv[2]),t.out);fs.mkdirSync(path.dirname(out),{recursive:true});await pg.screenshot({path:out,type:'jpeg',quality:86});console.log('thumb',out)}
 await b.close()})();
