# Accountancy Lab (Notesflix 101)

One reusable engine for every Accountancy chapter. Content is kept separate from the interface.

    lab/index.html?ch=<chapterId>#<section>   the page
    lab/lab.js        core: layout, two learning modes, 17 sections, progress, Firestore sync
    lab/lab-fmt.js    accounting formats (journal, T-account / Balance Sheet, columnar grid) + 3-level numerical solver
    lab/lab-play.js   activities, case studies, 8 games, revision, chapter test, performance report
    lab/data/*.js     one file per chapter: NFLab.register({...})
    lab/tools/validate.js   node lab/tools/validate.js  → recomputes every answer from the facts
    lab/tools/bundle.py     single-file preview for review

Live chapters: partnership, goodwill, change-psr, admission, retirement, dissolution (sidebar list: CHAPTERS in lab.js).
Home page: LAB map in index.html links acc-partnership and acc-goodwill; learn/xii-acc.html has an Accountancy Lab button (seo.js).

Add a chapter: copy lab/data/admission.js, change the content, mark it s:"live" in CHAPTERS in lab.js, add a recompute function in tools/validate.js, run the validator. No engine change is needed.

Progress: localStorage key `nf.lab.v1`; when the student is signed in, also `students/{uid}.lab`
(merge write, the existing firestore.rules already allow a student to write their own record).
