/* Notesflix tidy: turns any paragraph longer than 45 words into short bullet points (one sentence each). */
(function(){
var OK=/^(B|I|EM|STRONG|SPAN|A|SUP|SUB|BR|SMALL|MARK|U|CODE)$/;
var ABBR=/\b(v|vs|Art|Arts|No|Ltd|Co|Dr|Mr|Mrs|Sr|St|viz|etc|Pvt|Govt|Rs|Sec|Inc|e\.g|i\.e)\.$/;
var css=document.createElement('style');css.textContent='ul.nf-tidy{margin:.3em 0;padding-left:1.15em}ul.nf-tidy li{margin:.35em 0;line-height:1.45}';
(document.head||document.documentElement).appendChild(css);
function words(t){return t.trim().split(/\s+/).filter(Boolean).length}
function sentences(html){var parts=[],buf='',depth=0,i=0;
 while(i<html.length){var c=html[i];
  if(c==='<'){var j=html.indexOf('>',i);if(j<0)j=html.length-1;buf+=html.slice(i,j+1);i=j+1;continue}
  buf+=c;i++;
  if((c==='.'||c==='?'||c==='!'||c===';')&&/\s/.test(html[i]||'')){
   var plain=buf.replace(/<[^>]+>/g,'');
   if(c==='.'&&(ABBR.test(plain)||/\d\.$/.test(plain)&&/\d/.test(html[i+1]||'')))continue;
   if(words(plain)>=4){parts.push(buf.trim());buf=''}}}
 if(buf.trim())parts.push(buf.trim());
 return parts.map(function(p){p=p.replace(/;$/,'');return p.replace(/^((?:<[^>]+>|\s)*)([a-z])/,function(m,a,b){return a+b.toUpperCase()})});}
function tidy(el){
 if(el.dataset.nfTidy||el.closest('button,label,select,textarea,ul.nf-tidy,svg,[contenteditable],#intro,.intro'))return;
 for(var k=0;k<el.children.length;k++){if(!OK.test(el.children[k].tagName))return}
 if(words(el.textContent)<=45)return;
 var s=sentences(el.innerHTML);if(s.length<2)return;
 el.dataset.nfTidy='1';
 el.innerHTML='<ul class="nf-tidy">'+s.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul>';}
function run(root){(root.querySelectorAll?root:document).querySelectorAll('p,div,td,dd').forEach(function(e){if(!e.querySelector('p,div,ul,ol,table'))tidy(e)})}
var t=null;function later(){if(t)return;t=setTimeout(function(){t=null;run(document)},700)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',later);else later();
new MutationObserver(later).observe(document.documentElement,{childList:true,subtree:true});
})();
