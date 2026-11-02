// Netflix-style site thumbnails.  node thumbs.js spec.json
// spec: [{kind:"chapter"|"episode"|"subject", out, palette, kicker:"CLASS 12 · ECO · UNIT 1", chip:"PART 1", title, sub, emojis:[main,2nd,3rd], art?:'<svg…>' (optional big illustration)}]
const {chromium}=require('playwright'),fs=require('fs'),path=require('path');
const PALS=require(path.join(__dirname,'..','palettes.json'));
const FONT='data:font/woff2;base64,'+fs.readFileSync(path.join(__dirname,'..','fonts','bebas.woff2')).toString('base64');
const SIZE={chapter:[900,330],episode:[480,300],subject:[1280,720]};
const esc=s=>String(s||'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
function page(t){const p=PALS[(t.palette||0)%PALS.length],[W,H]=SIZE[t.kind],k=H/300,em=t.emojis||['📘'],ep=t.kind==='episode';
 const tl=String(t.title).toUpperCase(),len=tl.length;
 const fsT=ep?(len>26?44:len>16?52:64):t.kind==='chapter'?(len>30?62:len>18?72:84):150;
 const art=t.art||`<div class="e1">${em[0]}</div>${em[1]?`<div class="e2">${em[1]}</div>`:''}${em[2]?`<div class="e3">${em[2]}</div>`:''}`;
 return `<!doctype html><html><head><meta charset="utf-8"><style>
 @font-face{font-family:Bebas;src:url(${FONT}) format('woff2')}
 *{margin:0;box-sizing:border-box}body{width:${W}px;height:${H}px;overflow:hidden;background:#07070b;position:relative;font-family:Inter,'DejaVu Sans',sans-serif}
 .glow{position:absolute;right:-${W*.08}px;top:50%;width:${H*1.5}px;height:${H*1.5}px;transform:translateY(-50%);background:radial-gradient(circle,${p.P}cc 0,${p.P}55 30%,transparent 65%);filter:blur(4px)}
 .glow2{position:absolute;right:${W*.22}px;bottom:-${H*.4}px;width:${H}px;height:${H}px;background:radial-gradient(circle,${p.S}88 0,transparent 60%)}
 .beam{position:absolute;right:${W*.12}px;top:-20px;width:${H*.9}px;height:${H*1.3}px;background:linear-gradient(180deg,#ffffff22,transparent 75%);clip-path:polygon(40% 0,60% 0,100% 100%,0 100%);opacity:.5}
 .grid{position:absolute;inset:0;background-image:linear-gradient(#ffffff08 1px,transparent 1px),linear-gradient(90deg,#ffffff08 1px,transparent 1px);background-size:${24*k}px ${24*k}px}
 .art{position:absolute;right:${ep?10*k:40*k}px;top:0;bottom:0;width:${ep?W*.5:W*.42}px;display:grid;place-items:center}
 .art svg{width:100%;height:auto;filter:drop-shadow(0 ${10*k}px ${18*k}px #000a)}
 .e1,.e2,.e3{position:absolute;font-family:'Noto Color Emoji';line-height:1;filter:drop-shadow(0 0 ${14*k}px ${p.P}) drop-shadow(0 ${10*k}px ${10*k}px #000c)}
 .e1{font-size:${ep?120*k*.95:H*.62}px;transform:rotate(-8deg);right:${ep?16*k:W*.1}px;top:50%;margin-top:-${ep?62*k:H*.33}px}
 .e2{font-size:${ep?50*k:H*.24}px;right:${ep?150*k:W*.31}px;top:${ep?44*k:30*k}px;transform:rotate(10deg);opacity:.95}
 .e3{font-size:${ep?50*k:H*.24}px;right:${ep?6*k:W*.02}px;bottom:${16*k}px;transform:rotate(12deg);opacity:.95}
 .fade{position:absolute;inset:0;background:linear-gradient(90deg,#07070b 0,#07070bee 34%,#07070b55 60%,transparent 80%),linear-gradient(0deg,#07070bcc 0,transparent 40%)}
 .top{position:absolute;left:${20*k}px;top:${16*k}px;display:flex;gap:${8*k}px;align-items:center;color:#e9e9f0;font-weight:800;font-size:${12*k}px;letter-spacing:.12em}
 .chip{background:${p.A};color:#111;padding:${3*k}px ${9*k}px;border-radius:${5*k}px;letter-spacing:.06em}
 .new{position:absolute;right:0;top:${14*k}px;background:#e50914;color:#fff;font-weight:900;font-size:${11*k}px;letter-spacing:.12em;padding:${4*k}px ${10*k}px ${4*k}px ${12*k}px;border-radius:${4*k}px 0 0 ${4*k}px}
 .txt{position:absolute;left:${18*k}px;bottom:${12*k}px;display:flex;flex-direction:column;gap:${6*k}px}
 h1{width:${ep?W*.62:W*.6}px;font-family:Bebas;font-weight:400;font-size:${fsT*k*(t.kind==='subject'?.6:1)}px;line-height:.9;letter-spacing:.01em;background:linear-gradient(180deg,#fff 0,#fff 45%,${p.A} 100%);-webkit-background-clip:text;color:transparent;filter:drop-shadow(0 ${3*k}px 0 #000) drop-shadow(0 0 ${12*k}px ${p.P}88)}
 .sub{width:${W*.55}px;color:#fff;font-family:Bebas;font-size:${(ep?16:20)*k}px;letter-spacing:.06em;line-height:1.05;opacity:.95}
 .logo{font-family:Bebas;font-size:${17*k}px;letter-spacing:.08em;color:#fff}.logo b{color:#e50914;font-weight:400}
 .bar{position:absolute;left:0;bottom:0;height:${4*k}px;width:100%;background:linear-gradient(90deg,#e50914,${p.P},${p.S})}
 </style></head><body><div class="grid"></div><div class="glow"></div><div class="glow2"></div><div class="beam"></div><div class="art">${art}</div><div class="fade"></div>
 <div class="top"><span>${esc(t.kicker)}</span>${t.chip?`<span class="chip">${esc(t.chip)}</span>`:''}</div>${t.isNew?'<div class="new">NEW</div>':''}
 <div class="txt"><h1>${esc(tl)}</h1>${t.sub?`<div class="sub">${esc(String(t.sub).toUpperCase())}</div>`:''}<div class="logo">NOTES<b>FLIX</b> 101</div></div><div class="bar"></div></body></html>`}
(async()=>{const spec=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));const b=await chromium.launch();
 for(const t of spec){const [W,H]=SIZE[t.kind];const pg=await b.newPage({viewport:{width:W,height:H}});await pg.setContent(page(t));await pg.evaluate(()=>document.fonts.ready);await pg.waitForTimeout(200);
  const out=path.resolve(path.dirname(process.argv[2]),t.out);fs.mkdirSync(path.dirname(out),{recursive:true});await pg.screenshot({path:out,type:'jpeg',quality:88});console.log('thumb',out)}
 await b.close()})();
