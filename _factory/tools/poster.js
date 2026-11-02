// Chapter poster in the site's anime-banner style: illustrated art + "UNIT 01" + slanted gold title + 2-line tagline.
// node poster.js <art.jpg|png> <out.jpg> "<UNIT 01>" "<TITLE LINE 1|LINE 2>" "<TAG LINE 1|TAG LINE 2>" [W H]
const {chromium}=require('playwright'),fs=require('fs'),path=require('path');
const [art,out,kick,title,tag,Wa,Ha]=process.argv.slice(2);const W=+Wa||900,H=+Ha||330;
const b64=f=>fs.readFileSync(f).toString('base64');
const BANG='data:font/woff2;base64,'+b64(path.join(__dirname,'..','fonts','bangers.woff2'));
const IMG='data:image/'+(art.endsWith('png')?'png':'jpeg')+';base64,'+b64(art);
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const lines=title.split('|'),tl=tag.split('|'),longest=Math.max(...lines.map(l=>l.length));
const fs1=Math.min(78,Math.round(520/(longest*.5+1)));
const html=`<!doctype html><meta charset=utf-8><style>@font-face{font-family:Bang;src:url(${BANG})}
*{margin:0}body{width:${W}px;height:${H}px;overflow:hidden;background:#000;position:relative;font-family:Bang}
.art{position:absolute;inset:0;background:url(${IMG}) right center/cover no-repeat}
.fade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.82) 0,rgba(0,0,0,.55) 34%,rgba(0,0,0,0) 62%)}
.k{position:absolute;left:22px;top:14px;color:#ff8a1f;font-size:30px;letter-spacing:1px;text-shadow:0 2px 0 #000}
.t{position:absolute;left:18px;top:${H*.2}px;transform:rotate(-5deg);transform-origin:left top}
.t div{font-size:${fs1}px;line-height:.92;letter-spacing:1px;background:linear-gradient(180deg,#fff6c8 0,#ffd23f 45%,#ff9a1f 100%);-webkit-background-clip:text;color:transparent;filter:drop-shadow(3px 3px 0 #1a0d00) drop-shadow(0 0 10px rgba(255,140,0,.45));-webkit-text-stroke:1.2px #3a1c00}
.g{position:absolute;left:30px;bottom:24px;transform:rotate(-4deg);transform-origin:left bottom;color:#fff;font-size:24px;line-height:1.05;letter-spacing:1px;text-shadow:2px 2px 0 #000}
</style><div class=art></div><div class=fade></div><div class=k>${esc(kick)}</div><div class=t>${lines.map(l=>'<div>'+esc(l)+'</div>').join('')}</div><div class=g>${tl.map(esc).join('<br>')}</div>`;
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:W,height:H}});await p.setContent(html);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(200);await p.screenshot({path:out,type:'jpeg',quality:90});await b.close();console.log('poster',out)})();
