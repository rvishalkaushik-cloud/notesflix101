import json, re, collections, os, tag
VOCAB = set(json.load(open("vocab.json")))
rows = json.load(open("all.json"))
SUBJ = {("XII","BST"):"xii-bst",("XII","ACC"):"xii-acc",("XII","ECO"):"xii-eco",("XII","ENT"):"xii-ent",("XII","CHEM"):"xii-chem",("XII","LEGAL"):"xii-legal",("X","SCI"):"x-sci",("X","SST"):"x-sst"}
NAMES = {"xii-bst":"Business Studies","xii-acc":"Accountancy","xii-eco":"Economics","xii-ent":"Entrepreneurship","xii-chem":"Chemistry","xii-legal":"Legal Studies","x-sci":"Science","x-sst":"Social Science (SST)"}
idx = open("/home/claude/notesflix101/index.html", encoding="utf-8").read()
TITLES = dict(re.findall(r'\{\s*id:"([^"]+)",\s*cls:"(?:XII|X)",\s*subject:"[^"]+"[^}]*?title:"([^"]+)"', idx))
TITLES.update(tag.CH_TITLES_EXTRA)

def norm(t): return re.sub(r"[^a-z]", "", t.lower())[:140]
def good(t):
    if len(t) < 30: return False
    words = re.findall(r"[A-Za-z]{2,}", t)
    if len(words) < 6: return False
    singles = re.findall(r"(?<![A-Za-z])[A-Za-z](?![A-Za-z])", t)
    return len(singles) < len(words) * 0.8

out = collections.defaultdict(dict); papers = collections.defaultdict(set); report = collections.Counter()
for q in rows:
    slug = SUBJ.get((q["cls"], q["subj"]))
    if not slug: continue
    if q.get("src") == "ocr" and q["subj"] not in ("BST", "ECO"): continue
    mC = re.match(r"(\d{2,3})_C_(\w)", q["set"])
    if mC:
        if mC.group(1).lstrip("0") != {"BST":"66","ACC":"67","ECO":"58","CHEM":"56","SCI":"31","SST":"32"}.get(q["subj"], mC.group(1)): continue
        q["set"] = "%s/C/%s" % (mC.group(1), mC.group(2))
    t = q["text"].strip()
    if q.get("src") == "ocr":
        keep = []
        for ln in t.split("\n"):
            toks = [w for w in re.findall(r"[A-Za-z]+", ln.lower()) if len(w) >= 3]
            ok = (not toks and re.search(r"\d", ln)) or (toks and sum(w in VOCAB for w in toks) / len(toks) >= 0.85 and not re.search(r"[|}{]", ln))
            if ok: keep.append(ln)
            elif keep: break
        t = "\n".join(keep)
    t = re.sub(r"\n(?=[a-z,;])", " ", t)            # rejoin wrapped lines
    t = re.sub(r"(?<=[A-Za-z,;’'])\n(?=[A-Za-z‘'(])", " ", t)
    t = t.replace("`", "₹")
    t = re.sub(r"<\s?(?=\d)", "₹ ", t)
    if q.get("src") == "ocr": t = re.sub(r"%\s?(?=\d)", "₹ ", t)
    if len(re.findall(r"[$\{\}\^]", t)) > 2: report[slug+" dropped"] += 1; continue
    if not good(t) or re.match(r"(Internal choice|There is no overall choice|All questions are compulsory|This question paper)", t, re.I): report[slug+" dropped"] += 1; continue
    k = norm(t)
    papers[slug].add((q["year"], q["exam"], q["set"]))
    e = out[slug].get(k)
    if not e:
        ch, sc = tag.tag(q["subj"], t + " " + " ".join(q.get("alts", [])))
        e = out[slug][k] = {"ch": ch or "other", "marks": q["marks"], "text": t, "alts": [re.sub(r"(?<=[A-Za-z,;’'])\n(?=[A-Za-z‘'(])", " ", a).replace("`", "₹") for a in q.get("alts", []) if good(a)], "img": q["img"], "seen": []}
    e["seen"].append([q["year"], q["exam"], q["set"]])
    if not e["marks"] and q["marks"]: e["marks"] = q["marks"]
os.makedirs("data", exist_ok=True)
for slug, qs in out.items():
    L = []
    for i, (k, e) in enumerate(sorted(qs.items(), key=lambda kv: (-max(s[0] for s in kv[1]["seen"]), kv[1]["marks"] or 0))):
        seen = sorted({(s[0], s[1], s[2]) for s in e["seen"]}, reverse=True)
        e["seen"] = [list(s) for s in seen]
        e["id"] = "p%d" % (i + 1)
        L.append(e)
    chs = sorted({e["ch"] for e in L})
    pl = sorted(papers[slug], reverse=True)
    json.dump({"slug": slug, "subject": NAMES[slug], "cls": "XII" if slug.startswith("xii") else "X",
               "chapters": {c: TITLES.get(c, "Other / not tagged") for c in chs}, "papers": [list(p) for p in pl], "qs": L},
              open("data/%s.json" % slug, "w"), ensure_ascii=False, separators=(",", ":"))
    by = collections.Counter(e["ch"] for e in L)
    print(slug, "unique", len(L), "papers", len(pl), "untagged", by.get("other", 0), "size", os.path.getsize("data/%s.json" % slug)//1024, "KB", "dropped", report[slug+" dropped"])
