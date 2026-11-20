import json,re,sys
sys.path.insert(0,'/tmp/fix');from note import load
ABBR=['v.','Art.','Arts.','No.','Ltd.','Co.','i.e.','e.g.','Dr.','Mr.','Mrs.','Sr.','St.','viz.','etc.','Pvt.','Govt.','Rs.','vs.','Sec.','S.','Ch.','cl.','para.','Corp.','Inc.','Bros.','Jr.','U.S.','U.K.','A.I.R.','S.C.','SCC.']
CSS='<style id="exbl">.ex details summary{cursor:pointer;font-weight:800;list-style:none;padding:4px 0}.ex details summary::-webkit-details-marker{display:none}.ex details ul{margin:8px 0 0;padding-left:20px}.ex details li{margin:6px 0;line-height:1.45}</style>'
def split(t):
    p=t
    for i,a in enumerate(ABBR): p=p.replace(a,a.replace('.','․'))
    p=re.sub(r'(\d)\.(\d)',lambda m:m.group(1)+'․'+m.group(2),p)
    parts=re.split(r'(?<=[.])\s+(?=[A-Z(“"0-9]|<b>)|(?<=;)\s+',p)
    out=[x.replace('․','.').strip().rstrip(';').strip() for x in parts if x.strip()]
    return [x[0].upper()+x[1:] if x and x[0].islower() else x for x in out]
def conv(ex):
    w=len(re.sub('<[^>]+>',' ',ex).split())
    if w<=45 or '<details' in ex: return ex,False
    items=split(ex)
    if len(items)<2: return ex,False
    return '<details><summary>📝 Exam-ready answer · '+str(len(items))+' points · tap to open ▾</summary><ul>'+''.join('<li>'+i+'</li>' for i in items)+'</ul></details>',True
n=0
for f in sys.argv[1:]:
    s,a,b,N=load(f);ch=0
    for st in N.get('steps',[]):
        k=st.get('ks') or {}
        if 'ex' in k:
            k['ex'],c=conv(k['ex']);ch+=c
    if ch:
        s=s[:a]+json.dumps(N,ensure_ascii=False).replace('</','<\\/')+s[b:]
        if 'id="exbl"' not in s: s=s.replace('</head>',CSS+'</head>',1)
        open(f,'w',encoding='utf-8').write(s);n+=1
    print(f.split('/')[-1],'converted',ch)
print('files changed',n)
