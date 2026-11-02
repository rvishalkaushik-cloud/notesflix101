// Lock a built note with the class password (same format as every note on the site).
// node lock.js <plain.html> <repo/notes/out.html>   (password from env NF_PASS)
const fs=require('fs'),path=require('path'),{webcrypto:c}=require('crypto');
const [src,out]=process.argv.slice(2),pw=process.env.NF_PASS;
if(!pw){console.error('Set NF_PASS to the class password');process.exit(1)}
(async()=>{const salt=c.getRandomValues(new Uint8Array(16)),iv=c.getRandomValues(new Uint8Array(12));
 const base=await c.subtle.importKey('raw',new TextEncoder().encode(pw),'PBKDF2',false,['deriveKey']);
 const key=await c.subtle.deriveKey({name:'PBKDF2',salt,iterations:250000,hash:'SHA-256'},base,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);
 const ct=new Uint8Array(await c.subtle.encrypt({name:'AES-GCM',iv},key,new TextEncoder().encode(fs.readFileSync(src,'utf8'))));
 const b=u=>Buffer.from(u).toString('base64');
 const tpl=fs.readFileSync(path.join(__dirname,'..','engine','lock_template.html'),'utf8');
 fs.writeFileSync(out,tpl.replace('__P__',JSON.stringify({s:b(salt),i:b(iv),c:b(ct)})));
 // self-check: decrypt again
 const P=JSON.parse(fs.readFileSync(out,'utf8').match(/const P=(\{.*?\});/)[1]);
 const pt=await c.subtle.decrypt({name:'AES-GCM',iv:Buffer.from(P.i,'base64')},key,Buffer.from(P.c,'base64'));
 console.log('locked',out,new TextDecoder().decode(pt).length===fs.readFileSync(src,'utf8').length?'verified':'MISMATCH');
})();
