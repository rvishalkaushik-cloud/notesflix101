// node extract.js <chapterId>  -> prints the readable text of every part of that chapter (decrypting locked notes)
const fs=require('fs'),path=require('path'),vm=require('vm'),{webcrypto:c}=require('crypto');
const R=require('path').join(__dirname,'..','..'), PW=process.env.NF_PASS;
const h=fs.readFileSync(R+'/index.html','utf8');
const CH=vm.runInNewContext('('+h.match(/const CHAPTERS = (\[[\s\S]*?\n\]);/)[1]+')',{});
const RX=/const P=(\{"s":"[^"]*","i":"[^"]*","c":"[^"]*"\});/;
async function open(src){const m=src.match(RX);if(!m)return src;const P=JSON.parse(m[1]),b=s=>Buffer.from(s,'base64');
 const base=await c.subtle.importKey('raw',new TextEncoder().encode(PW),'PBKDF2',false,['deriveKey']);
 const k=await c.subtle.deriveKey({name:'PBKDF2',salt:b(P.s),iterations:250000,hash:'SHA-256'},base,{name:'AES-GCM',length:256},false,['decrypt']);
 return new TextDecoder().decode(await c.subtle.decrypt({name:'AES-GCM',iv:b(P.i)},k,b(P.c)));}
function text(html){
 let t=html.replace(/<style[\s\S]*?<\/style>/gi,' ');
 // keep JSON/JS string content (many notes hold their text in scripts) but drop code syntax noise
 const scripts=[...t.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map(m=>m[1]).join('\n');
 t=t.replace(/<script[\s\S]*?<\/script>/gi,' ');
 const strs=[...scripts.matchAll(/(["'`])((?:\\.|(?!\1).){25,}?)\1/g)].map(m=>m[2]).filter(s=>/[a-zA-Zऀ-ॿ]{3,}\s/.test(s)&&!/function|=>|var |const |\.(js|css|png)|https?:|class=|style=|#[0-9a-f]{3,6}\b|rgba?\(/.test(s));
 const clean=s=>s.replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/\\n/g,' ').replace(/\\u2019/g,"'").replace(/\\"/g,'"').replace(/\s+/g,' ').trim();
 const seen=new Set(), out=[];
 for(const s of [clean(t)].concat(strs.map(clean))) if(s && !seen.has(s)){seen.add(s);out.push(s);}
 return out.join('\n');
}
(async()=>{const id=process.argv[2];const ch=CH.find(x=>x.id===id);if(!ch){console.error('no chapter',id);process.exit(1)}
 console.log('# '+ch.cls+' '+ch.subject+' · '+(ch.unit||'')+' '+(ch.num||'')+' · '+ch.title+'\n'+(ch.tagline||''));
 for(const e of ch.episodes){const f=path.join(R,e.url);if(!fs.existsSync(f))continue;
  console.log('\n## PART '+e.id+': '+e.title+' — '+(e.desc||'')+'\n');console.log(text(await open(fs.readFileSync(f,'utf8'))).slice(0,+process.env.MAXC||60000));}
})().catch(e=>{console.error(e.message);process.exit(1)});
