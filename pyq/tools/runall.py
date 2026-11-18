import os, json, collections, parse
rows=[]; stats=collections.defaultdict(lambda:[0,0,0])
srcs=[("txt2",f) for f in os.listdir("txt2")]+[("ocr",f) for f in os.listdir("ocr")]
for d,f in sorted(srcs):
    p=os.path.join(d,f)
    if os.path.getsize(p)<3000: continue
    try: qs=parse.parse(p)
    except Exception as e: print("ERR",f,e); continue
    key=f.split("__")[0]
    stats[key][0]+=1
    if len(qs)>=30: stats[key][1]+=1
    stats[key][2]+=len(qs)
    for q in qs: q["src"]=d; rows.append(q)
for k in sorted(stats): print(k, "files",stats[k][0],"good",stats[k][1],"qs",stats[k][2])
json.dump(rows, open("all.json","w"), ensure_ascii=False)
print(len(rows))
