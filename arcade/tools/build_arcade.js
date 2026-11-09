// Generates arcade/game-registry.json and one HTML per chapter from specs. Usage: node build_arcade.js [--ready=id1,id2|all]
const fs=require('fs'),path=require('path');
const root=require('path').resolve(__dirname,'../..');
const s=fs.readFileSync(root+'/index.html','utf8');
const a=s.indexOf('const CHAPTERS');const b=s.indexOf('];',a);
const C=eval('('+s.slice(s.indexOf('[',a),b+1)+')');
const specs=Object.assign({},...['c12','c11','c10','c9'].map(f=>require(__dirname+'/specs/'+f+'.js')));
const RT=['runner','space','rhythm','sports','tower'];
const KITS={runner:'Knowledge Runner',space:'Space Mission',rhythm:'Rhythm Master',sports:'Sports Champion',tower:'Tower Defence Academy',jumper:'Concept Jumper',racing:'Formula Racing',detective:'Detective Academy',escape:'Escape Room',tycoon:'Business Tycoon',supermarket:'Supermarket Simulator',city:'City Builder',farm:'Farm Master',story:'Story Designer',quest:'Chapter Quest',machine:'Build Your Machine',lab:'Science Lab Simulator',art:'Art Studio',circuit:'Circuit Master',recipe:'Recipe Master'};
const ENGINE={runner:'run3d',space:'run3d',quest:'run3d',detective:'run3d',escape:'run3d',jumper:'run3d',farm:'run3d',city:'run3d',racing:'hill',tycoon:'hill',supermarket:'hill',machine:'hill',circuit:'hill',recipe:'hill',rhythm:'hill',lab:'rope',art:'rope',story:'rope',tower:'rope',sports:'rope'};
const ENAME={run3d:'Gate Runner 3D',hill:'Hill Racer',rope:'Rope Drop Lab'};
const clsDir={IX:'class-9',X:'class-10',XI:'class-11',XII:'class-12'};
const subDir=n=>n.toLowerCase().replace(/\(.*?\)/g,'').trim().replace(/[^a-z]+/g,'-').replace(/-$/,'');
const prev=JSON.parse(fs.readFileSync(root+'/arcade/game-registry.json','utf8')).games;
const oldStatus={};prev.forEach(g=>oldStatus[g.chapterId]=g.status);
const errs=[];const reg=[];
for(const c of C){
  const sp=specs[c.id]; const isOld=c.id==='acc-ratios';
  if(!sp&&!isOld){continue;}
  const dir=`arcade/games/${clsDir[c.cls]}/${subDir(c.subject)}`;
  const file=`${dir}/${c.id}.html`;
  const eps=c.episodes.map(e=>({id:e.id,title:e.title,url:e.url}));
  if(isOld){reg.push({chapterId:c.id,class:c.cls,subject:c.subject,num:c.num,chapter:c.title,gameId:'20',genre:'Build Your Machine',mechanic:'Ratio Factory: tune transactions into target ratio bands',status:oldStatus[c.id]||'ready',kit:'custom',file,episodes:eps});continue;}
  // validation
  const e=m=>errs.push(c.id+': '+m);
  if(!KITS[sp.kit])e('unknown kit '+sp.kit);
  const hasSort=sp.sort&&sp.sort.length>=2;
  if(RT.includes(sp.kit)&&!hasSort)e('real-time kit needs >=2 sort categories');
  if(RT.includes(sp.kit)&&sp.sort&&sp.sort.length>3)e('real-time kit allows max 3 categories');
  if(sp.kit==='jumper'&&!(sp.seq&&sp.seq.length))e('jumper needs seq');
  if(!sp.sort&&!sp.seq&&!sp.pair&&!sp.calc)e('no content');
  if(sp.sort){const seen={};sp.sort.forEach(([cat,items])=>{if(items.length<2)e('category too small: '+cat);items.forEach(i=>{if(seen[i])e('duplicate sort item "'+i+'" in '+seen[i]+' and '+cat);seen[i]=cat;});});}
  if(sp.seq)sp.seq.forEach(([n,st])=>{if(st.length<3)e('seq too short '+n);if(new Set(st).size!==st.length)e('dup seq step in '+n);});
  if(sp.pair){if(sp.pair.length<4)e('need >=4 pairs');if(new Set(sp.pair.map(p=>p[0])).size!==sp.pair.length)e('dup pair term');if(new Set(sp.pair.map(p=>p[1])).size!==sp.pair.length)e('dup pair meaning');}
  if(sp.calc)sp.calc.forEach(q=>{if(isNaN(parseFloat(q[1])))e('bad calc answer');});
  if(!sp.pair&&!sp.calc&&!(sp.seq&&sp.seq.length)&&RT.includes(sp.kit)===false&&!hasSort)e('too thin');
  const full={id:c.id,title:c.title,kit:ENGINE[sp.kit],skin:sp.kit,mission:sp.mission,sport:sp.sport,parts:c.episodes.map(x=>x.id),sort:sp.sort,seq:sp.seq,pair:sp.pair,calc:sp.calc};
  const html=`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${c.title.replace(/</g,'&lt;')} | Notesflix Arcade</title>
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></head>
<body><div id="nfa"></div>
<script src="../../../shared/arcade.js"></script>
<script src="../../../shared/kits-rt.js"></script>
${ENGINE[sp.kit]==='run3d'?'<script src="../../../shared/three.min.js"></script>\n':''}<script src="../../../shared/kits-3d.js"></script>
<script src="../../../shared/kits-2dpro.js"></script>
<script>NFA.game(${JSON.stringify(full)});</script>
</body></html>
`;
  fs.mkdirSync(path.join(root,dir),{recursive:true});fs.writeFileSync(path.join(root,file),html);
  reg.push({chapterId:c.id,class:c.cls,subject:c.subject,num:c.num,chapter:c.title,gameId:'-',genre:ENAME[ENGINE[sp.kit]],mechanic:sp.mission,status:oldStatus[c.id]||'planned',kit:ENGINE[sp.kit],file,episodes:eps});
}
const arg=(process.argv.find(x=>x.startsWith('--ready='))||'').slice(8);
if(arg){const ids=arg==='all'?reg.map(r=>r.chapterId):arg.split(',');reg.forEach(r=>{if(ids.includes(r.chapterId))r.status='ready';});}
fs.writeFileSync(root+'/arcade/game-registry.json',JSON.stringify({version:1,games:reg},null,1));
console.log(reg.length,'chapters; ready:',reg.filter(r=>r.status==='ready').length);
const missing=C.filter(c=>!specs[c.id]&&c.id!=='acc-ratios').map(c=>c.id);
console.log('chapters without spec:',missing.join(',')||'none');
if(errs.length){console.log('SPEC ERRORS:\n'+errs.join('\n'));process.exitCode=1;}
