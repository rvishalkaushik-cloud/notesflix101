// node test.js <plain.html> [shotsDir]  → page errors, overflow at 1366 and 390, screenshots of each step + 3D board
const {chromium}=require('playwright'),path=require('path'),fs=require('fs');
const THREE_LOCAL=process.env.THREE_LOCAL||'';
(async()=>{const f=path.resolve(process.argv[2]),dir=process.argv[3]||path.dirname(f);fs.mkdirSync(dir,{recursive:true});
 const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist']});let bad=0;
 for(const w of [1366,390]){const p=await b.newPage({viewport:{width:w,height:900}});const errs=[];
  p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error'&&!/ERR_|Failed to load resource/.test(m.text()))errs.push(m.text())});
  if(THREE_LOCAL)await p.route(/cdnjs.*three/,r=>r.fulfill({path:THREE_LOCAL,contentType:'text/javascript'}));
  await p.route(/fonts\.g/,r=>r.fulfill({body:'',contentType:'text/css'}));
  await p.goto('file://'+f);await p.waitForTimeout(1200);
  const ov=await p.evaluate(()=>{const W=document.documentElement.clientWidth;return [...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.width&&r.right>W+1&&getComputedStyle(e).position!=='fixed'&&!e.ownerSVGElement&&!e.closest('.nav,.cv,.ak-strip,[style*="overflow-x"]')}).slice(0,6).map(e=>e.tagName+'.'+e.className+' '+e.textContent.slice(0,40))});
  const sw=await p.evaluate(()=>document.documentElement.scrollWidth);
  const ids=await p.evaluate(()=>[...document.querySelectorAll('section.step')].map(s=>s.id));
  for(const id of ids){await p.evaluate(i=>document.getElementById(i).scrollIntoView(),id);await p.waitForTimeout(w===1366?2600:600);if(w===1366||id==='top')await p.screenshot({path:path.join(dir,id+'_'+w+'.png')})}
  // click every flip card and sorter button once to catch runtime errors
  await p.evaluate(()=>{document.querySelectorAll('.fp').forEach(x=>x.click());document.querySelectorAll('.bk button,.opt').forEach((x,i)=>{if(i<4)x.click()})});await p.waitForTimeout(500);
  const flipOk=await p.evaluate(()=>{const f=document.querySelector('.fp');if(!f)return true;const r=f.getBoundingClientRect();return r.width>120&&r.height>120});
  console.log(JSON.stringify({w,errs,overflow:ov,scrollWidth:sw,flipOk,steps:ids.length}));
  if(errs.length||sw>w||!flipOk)bad=1}
 await b.close();process.exit(bad)})();
