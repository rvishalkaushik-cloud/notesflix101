#!/usr/bin/env python3
"""Parse CBSE board-paper text (pdftotext -layout or OCR) into English questions.
Usage: python3 parse.py <txt files...>  -> writes JSON lines to stdout."""
import re, sys, json, os

LATIN = re.compile(r"[A-Za-z]")
WORD = re.compile(r"\b[A-Za-z]{2,}\b")
QSTART = re.compile(r"^\s{0,10}(\d{1,2})\s*[.)]\s+(.*\S)?\s*$")
SETCODE = re.compile(r"(\d{2,3}(?:\(B\))?)[-_ ]([0-9S])[-_ ](\d)")
NOISE = re.compile(r"(P\.T\.O|Page \d+ of|^\s*\d{2,3}/[\dS]/\d\b|Roll No|Series\s*:|SET\s*[-~]|Q\.P\. Code|Candidates must write|Please check that this|15 minute time has been|Time allowed|Maximum Marks|^\s*\d{4}-\d\s*$|=====PAGE=====|~\s*\d+\s*~)", re.I)

SUBCODE = {"BST":"66","ACC":"67","ECO":"58","CHEM":"56","SCI":"31","SST":"32","ENT":"98","LEGAL":"40"}
KRUTI = re.compile(r"[$\{\}\[\]\^<>~]|\b(?:Ho|H|Am|Zo|_|g|{H)\$")
def kruti(line):
    toks = line.split()
    if not toks: return False
    bad = sum(1 for t in toks if KRUTI.search(t))
    return bad >= 2 and bad / len(toks) > 0.12

def meta(path):
    base = os.path.basename(path)
    pre, rest = base.split("__", 1)
    year = int(pre[:4]); tag = pre[4] if pre[4].isalpha() else ""
    exam = {"C": "Compartment", "S": "Second Board"}.get(tag, "Main")
    cls, subj = pre.split("_")[1], pre.split("_")[2]
    want = SUBCODE.get(subj)
    ms = list(SETCODE.finditer(rest.replace("(B)", "B")))
    pick = [m for m in ms if m.group(1).lstrip("0").rstrip("B") == want] or ms
    m = pick[0] if pick else None
    code = "/".join(m.groups()) if m else rest.rsplit(".", 1)[0][:20]
    other = bool(ms) and not [x for x in ms if x.group(1).lstrip("0").rstrip("B") == want]
    return dict(year=year, exam=exam, cls=cls, subj=subj, set=code, file=base, wrong=other)

def latin_ratio(s):
    t = re.sub(r"\s", "", s)
    if not t: return 0
    return len(LATIN.findall(t)) / len(t)

STOP = set("the of to and a an in is are was were which following given for on by with as be that this it its from at or not what your their his her has have will can should any two three four state explain identify answer company market management".split())
try:
    VOCAB = set(json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "vocab.json"))))
except Exception:
    VOCAB = set()
def englishish(line):
    toks = [t for t in re.findall(r"[A-Za-z]+", line.lower()) if len(t) >= 3]
    if len(toks) < 2: return len(re.findall(r"[A-Za-z]+", line)) < 4
    hit = sum(1 for t in toks if t in VOCAB or t in STOP)
    return hit / len(toks) >= 0.7

def clean_lines(text, ocr=False):
    out = []
    for ln in text.split("\n"):
        ln = ln.replace("\x0c", "").rstrip()
        if not ln.strip(): continue
        if NOISE.search(ln): continue
        if kruti(ln): continue
        if ocr and not englishish(ln): continue
        raw = ln
        ln = re.sub(r"[^\x20-\x7E₹°±×÷√≤≥→←⇌²³⁻⁺₂₃₄₁·–—‘’“”]", " ", ln)  # drop Devanagari garbage
        if latin_ratio(ln) < 0.45 and not re.search(r"\d", ln): continue
        if len(LATIN.findall(ln)) < 2 and not re.search(r"\d{2,}|\d,\d", ln): continue
        out.append(ln)
    return out

PATTERNS = {
  "BST": (34, [(1,20,1),(21,24,3),(25,30,4),(31,34,6)]),
  "ECO": (34, [(1,10,1),(11,12,3),(13,15,4),(16,17,6),(18,27,1),(28,29,3),(30,32,4),(33,34,6)]),
  "ACC": (34, [(1,16,1),(17,20,3),(21,22,4),(23,26,6),(27,30,1),(31,32,3),(33,33,4),(34,34,6)]),
  "CHEM": (33, [(1,16,1),(17,21,2),(22,28,3),(29,30,4),(31,33,5)]),
  "SCI": (39, [(1,20,1),(21,26,2),(27,33,3),(34,36,5),(37,39,4)]),
}
def pattern_marks(subj, n, total):
    if subj not in PATTERNS: return None
    tot, rng = PATTERNS[subj]
    if not (tot - 8 <= total <= tot): return None
    for a, b, m in rng:
        if a <= n <= b: return m
    return None

def parse(path):
    md = meta(path)
    if md.pop("wrong"): return []
    ocr = os.path.basename(os.path.dirname(path)) == "ocr"
    lines = clean_lines(open(path, encoding="utf-8", errors="ignore").read(), ocr)
    # start after English general instructions if present
    start = 0
    for i, ln in enumerate(lines):
        if re.search(r"General Instructions", ln, re.I): start = i; break
    qs, cur, expect, skip = [], None, 1, False
    for ln in lines[start:]:
        m = QSTART.match(ln)
        if m:
            n = int(m.group(1)); rest = m.group(2) or ""
            if (n == expect or (ocr and n == expect + 1 and englishish(rest))) and len(WORD.findall(rest)) >= 3:
                cur = {"n": n, "lines": [rest]}; qs.append(cur); expect = n + 1; skip = False; continue
            if expect <= n <= expect + 3 and len(WORD.findall(rest)) < 3:
                skip = True; continue   # Hindi version of the next question
        if skip:
            if len(WORD.findall(ln)) >= 2 and re.search(r"[a-z]{4,}", ln): skip = False
            else: continue
        if cur is not None: cur["lines"].append(ln.strip() if not re.search(r"\s{6,}\S", ln) else ln.rstrip())
    res = []
    for q in qs:
        pm = pattern_marks(md["subj"], q["n"], len(qs))
        body = q["lines"]
        # cut visually-impaired alternative
        cut = len(body)
        for i, l in enumerate(body):
            if re.search(r"For Visually Impaired|Note\s*:\s*The following question|^\s*SECTION\s*[-–—]?\s*[A-E]\b|For Questions? (number|no)|^\s*Section\s*[-–—]?\s*[A-E]\s*$", l, re.I): cut = i; break
        body = body[:cut]
        marks_found = []
        txt_lines = []
        for l in body:
            mm = re.search(r"\s{3,}([1-6])\s*$", l) or re.search(r"(?<=[.?:)])\s*([1-6])\s*$", l)
            if mm and len(LATIN.findall(l)) >= 2:
                marks_found.append(int(mm.group(1))); l = l[:mm.start()].rstrip()
            elif re.fullmatch(r"\s*[1-6]\s*", l):
                marks_found.append(int(l)); continue
            txt_lines.append(re.sub(r"\s{2,}", "  ", l.strip()))
        text = "\n".join(t for t in txt_lines if t)
        # stop at OR: keep first alternative, store the rest
        parts = re.split(r"\n\s*OR\s*\n", text)
        marks = None
        if marks_found:
            first_or = [x for x in marks_found]
            marks = first_or[0] if len(set(first_or)) == 1 else min(sum(first_or[:len(first_or)//max(1,len(parts))] or first_or), 6)
        if pm: marks = pm
        res.append(dict(md, n=q["n"], marks=marks, mk_src=("pattern" if pm else "detected"), text=parts[0].strip(), alts=[p.strip() for p in parts[1:]],
                        img=bool(re.search(r"(picture|figure|diagram|image|graph|cartoon|map)\s+(given|shown|below|above)", text, re.I))))
    return res

if __name__ == "__main__":
    for p in sys.argv[1:]:
        try:
            for q in parse(p): print(json.dumps(q, ensure_ascii=False))
        except Exception as e:
            print(json.dumps({"error": str(e), "file": p}), file=sys.stderr)
