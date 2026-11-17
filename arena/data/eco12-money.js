/* Revision Arena · Class XII Economics · Unit 2 · Money and Banking (Parts 1-3). Original cases; figures recomputed. */
NFArena.register({
  id: "eco12-money", cls: "XII", subject: "Economics", unit: "Unit", num: "2",
  title: "Money and Banking",
  tagline: "From barter to money, money supply, how banks create money, and how the RBI controls credit.",
  notesLink: "../#eco12-money",
  concepts: {
    barter: { n: "Barter system and its problems", s: "money" },
    func: { n: "Functions of money", s: "money" },
    supply: { n: "Money supply (M1)", s: "money" },
    cbank: { n: "Commercial banks and their functions", s: "creation" },
    lrr: { n: "Legal reserve ratio (CRR and SLR)", s: "creation" },
    mult: { n: "Money creation and money multiplier", s: "creation" },
    rbi: { n: "Functions of the central bank (RBI)", s: "rbi" },
    quant: { n: "Quantitative instruments of credit control", s: "control" },
    qual: { n: "Qualitative instruments of credit control", s: "control" }
  },
  overview: {
    text: "<b>Money</b> is anything generally accepted as a <b>medium of exchange</b>, a unit of account and a store of value. It solved the problems of <b>barter</b>. <b>Commercial banks</b> create money by lending out deposits again and again, limited by the <b>legal reserve ratio</b> fixed by the <b>RBI</b>, which controls credit with tools like repo rate, CRR and open market operations.",
    points: [
      "<b>Money supply (M1)</b> = Currency held by the public + Net demand deposits with banks.",
      "<b>Money multiplier</b> = 1 ÷ LRR. Total deposits created = Initial deposit × 1 ÷ LRR.",
      "RBI is the <b>bank of issue</b>, banker to the government, banker's bank and lender of last resort.",
      "To <b>control inflation</b>, RBI raises repo rate and CRR and sells securities; to <b>fight deflation</b>, it does the opposite."
    ],
    map: {
      center: "Money and Banking",
      branches: [
        { t: "Money", c: ["Barter problems", "Functions", "Money supply M1"] },
        { t: "Banks create money", c: ["Deposits and loans", "Legal reserve ratio", "Money multiplier"] },
        { t: "RBI", c: ["Bank of issue", "Banker's bank", "Lender of last resort", "Custodian of reserves"] },
        { t: "Credit control", c: ["Repo / reverse repo / bank rate", "CRR / SLR", "Open market operations", "Margin / moral suasion"] }
      ]
    }
  },
  sections: [
    {
      id: "money", title: "Barter, money and money supply", sub: "Why money was needed", icon: "💵", color: "#4da3ff",
      quick: [
        "<b>Barter</b>: direct exchange of goods for goods. Problems: (i) lack of <b>double coincidence of wants</b>, (ii) no <b>common measure of value</b>, (iii) difficulty in <b>storing value</b>, (iv) difficulty in <b>deferred payments</b>.",
        "<b>Functions of money</b>: primary: medium of exchange, unit of account (measure of value); secondary: store of value, standard of deferred payment.",
        "<b>Fiat money</b>: money by government order (notes, coins). <b>Legal tender</b>: cannot be refused in payment (notes and coins in India). Cheques are not legal tender.",
        "<b>Money supply</b> is a <b>stock</b> held by the public at a point of time. <b>M1 = C + DD</b>: currency with the public + net demand deposits (inter-bank deposits excluded). Time deposits are not in M1.",
        "In India, the <b>RBI</b> issues notes (except ₹1); the <b>Government of India</b> issues coins and ₹1 notes."
      ],
      table: { cap: "Barter problem → money's function that solves it", head: ["Barter problem", "Solved by money as…"], rows: [["No double coincidence of wants", "Medium of exchange"], ["No common measure of value", "Unit of account"], ["Cannot store wealth (goods spoil)", "Store of value"], ["Future payments hard to fix", "Standard of deferred payment"]] },
      cards: [
        { t: "Worked example: M1", tag: "eg", b: "<p>Currency with the public ₹4,000 cr; demand deposits ₹3,000 cr, of which ₹500 cr are deposits of one bank with another; time deposits ₹6,000 cr.</p><p>M1 = 4,000 + (3,000 − 500) = <b>₹6,500 cr</b>. Time deposits are left out.</p>" },
        { t: "Why money held by banks is not money supply", tag: "why", b: "<p>Money supply counts money with the <b>public</b> (households, firms) that can be spent. Cash with banks, the RBI and the government is not counted.</p>" }
      ],
      exam: ["'Price of a shirt quoted as ₹800' → unit of account.", "'Saving ₹500 a month for a cycle' → store of value."]
    },
    {
      id: "creation", title: "Money creation by commercial banks", sub: "One deposit, many loans", icon: "🏦", color: "#22c55e",
      quick: [
        "<b>Commercial bank</b>: accepts deposits and gives loans. Functions: accepting deposits (current, savings, fixed), advancing loans (cash credit, overdraft, discounting bills, term loans).",
        "<b>Legal reserve ratio (LRR)</b>: minimum share of deposits banks must keep as reserves. It has two parts: <b>CRR</b> (cash kept with RBI) and <b>SLR</b> (liquid assets kept with themselves).",
        "Banks can lend because all depositors never withdraw at the same time.",
        "<b>Money multiplier</b> = 1 ÷ LRR. <b>Total deposits</b> = Initial deposit × 1 ÷ LRR. <b>Credit created</b> = Total deposits − Initial deposit.",
        "Higher LRR → smaller multiplier → less credit; lower LRR → more credit."
      ],
      table: { cap: "Initial deposit ₹100, LRR 20%", head: ["Round", "Deposit (₹)", "Reserve 20% (₹)", "Loan (₹)"], rows: [["1", "100", "20", "80"], ["2", "80", "16", "64"], ["3", "64", "12.8", "51.2"], ["…", "…", "…", "…"], ["Total", "500", "100", "400"]] },
      cards: [
        { t: "Worked example", tag: "eg", b: "<p>Initial deposit ₹10,000; LRR 10%.</p><p>Multiplier = 1 ÷ 0.1 = <b>10</b>. Total deposits = <b>₹1,00,000</b>. Credit created = 1,00,000 − 10,000 = <b>₹90,000</b>.</p>" },
        { t: "Working backwards", tag: "tip", b: "<p>Total deposits ₹4,000 cr from an initial deposit of ₹800 cr → multiplier 5 → LRR = 1 ÷ 5 = <b>20%</b>.</p>" }
      ],
      exam: ["Show rounds in a table for 3–4 marks; state the formula for the final total."]
    },
    {
      id: "rbi", title: "The central bank (RBI)", sub: "The bank of banks", icon: "🏛️", color: "#f5b301",
      quick: [
        "<b>Bank of issue</b>: sole authority to issue currency notes (except ₹1). Ensures uniformity and public confidence.",
        "<b>Banker to the government</b>: keeps government accounts, manages public debt, gives advice and loans.",
        "<b>Banker's bank and supervisor</b>: holds cash reserves of commercial banks, regulates and supervises them.",
        "<b>Lender of last resort</b>: lends to commercial banks in a financial crisis to prevent collapse.",
        "<b>Custodian of foreign exchange reserves</b> and <b>controller of credit</b> (monetary policy)."
      ],
      cards: [
        { t: "Lender of last resort", tag: "def", b: "<p>When a bank faces a sudden rush of withdrawals and no one else will lend, the RBI provides funds so that depositors' confidence is maintained.</p>" },
        { t: "Central bank vs commercial bank", tag: "tip", b: "<p>The RBI does not deal with the public for profit; commercial banks accept public deposits and lend to earn profit.</p>" }
      ],
      exam: ["'RBI lends to a bank facing a crisis' → lender of last resort."]
    },
    {
      id: "control", title: "Credit control", sub: "Tightening and easing money", icon: "🎚️", color: "#ff5470",
      quick: [
        "<b>Repo rate</b>: rate at which RBI lends short-term to banks against securities. <b>Reverse repo rate</b>: rate at which RBI borrows from banks.",
        "<b>Bank rate</b>: rate at which RBI lends long-term to banks without buying securities (rediscounting).",
        "<b>CRR</b> and <b>SLR</b>: higher ratios leave banks less to lend.",
        "<b>Open market operations (OMO)</b>: RBI <b>sells</b> government securities to absorb money, <b>buys</b> them to inject money.",
        "<b>Qualitative tools</b>: <b>margin requirement</b> (difference between the value of security and the loan), <b>moral suasion</b> (persuasion, advice), selective credit controls."
      ],
      table: { cap: "What RBI does", head: ["Tool", "To control inflation (excess demand)", "To fight deflation (deficient demand)"], rows: [["Repo / bank rate", "Raise", "Lower"], ["Reverse repo rate", "Raise", "Lower"], ["CRR / SLR", "Raise", "Lower"], ["Open market operations", "Sell securities", "Buy securities"], ["Margin requirement", "Raise", "Lower"], ["Moral suasion", "Persuade banks to lend less", "Persuade banks to lend more"]] },
      cards: [
        { t: "How a repo rate hike works", tag: "why", b: "<p>Higher repo rate → banks borrow from RBI at higher cost → banks raise loan rates → people and firms borrow less → spending falls → inflation eases.</p>" },
        { t: "Margin requirement", tag: "eg", b: "<p>Gold worth ₹1,00,000 pledged; margin 25% → loan of ₹75,000. Raising margin to 40% → loan only ₹60,000. Less credit.</p>" }
      ],
      exam: ["Always state the direction (raise/lower, buy/sell) and the chain of effects."]
    }
  ],
  flashcards: [
    { k: "Barter", c: "barter", q: "What is double coincidence of wants?", a: "Both parties must want what the other has for a barter exchange to happen." },
    { k: "Definition", c: "func", q: "Define money.", a: "Anything generally accepted as a medium of exchange, unit of account and store of value." },
    { k: "Function", c: "func", q: "Which function removes the need for double coincidence of wants?", a: "Medium of exchange." },
    { k: "Function", c: "func", q: "What is a standard of deferred payment?", a: "Money as the unit in which future payments (like loan repayments) are expressed." },
    { k: "Legal tender", c: "func", q: "Is a cheque legal tender?", a: "No. Notes and coins are; a cheque can be refused." },
    { k: "Formula", c: "supply", q: "M1 = ?", a: "Currency held by the public + Net demand deposits with banks." },
    { k: "Supply", c: "supply", q: "Are time deposits part of M1?", a: "No." },
    { k: "Stock", c: "supply", q: "Is money supply a stock or a flow?", a: "A stock (at a point of time)." },
    { k: "Bank", c: "cbank", q: "Name two functions of a commercial bank.", a: "Accepting deposits and advancing loans." },
    { k: "LRR", c: "lrr", q: "What are the two parts of the legal reserve ratio?", a: "CRR (cash with RBI) and SLR (liquid assets with the bank)." },
    { k: "Formula", c: "mult", q: "Money multiplier?", a: "1 ÷ LRR." },
    { k: "Formula", c: "mult", q: "LRR 25%, initial deposit ₹1,000. Total deposits?", a: "₹4,000 (multiplier 4)." },
    { k: "RBI", c: "rbi", q: "Who issues ₹500 notes in India?", a: "The Reserve Bank of India." },
    { k: "RBI", c: "rbi", q: "What is 'lender of last resort'?", a: "RBI lends to commercial banks in a crisis when no other source is available." },
    { k: "Tool", c: "quant", q: "Define repo rate.", a: "Rate at which RBI lends short-term funds to commercial banks against securities." },
    { k: "Tool", c: "quant", q: "OMO to control inflation?", a: "RBI sells government securities." },
    { k: "Tool", c: "qual", q: "What is margin requirement?", a: "The difference between the value of the security offered and the loan granted." },
    { k: "Tool", c: "qual", q: "What is moral suasion?", a: "RBI persuades banks through advice, letters and meetings to follow its credit policy." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "The village without money",
      text: "<p>In a hill village, <b>Tenzin</b> has wool and wants salt. <b>Dorje</b> has salt but wants honey, not wool. Nobody can agree how many bags of salt equal one blanket. Tenzin's milk spoils before he can trade it, and the potter cannot promise to pay for clay 'next winter'.</p>",
      qs: [
        { q: "Identify four problems of barter shown here and the function of money that solves each.", m: 4, type: "Identify and link", c: "barter", ans: "Double coincidence; common measure; store of value; deferred payment", keys: ["double coincidence", "store"], hint: "One problem per sentence of the case.",
          points: [{ p: "No <b>double coincidence of wants</b> → medium of exchange", m: 1, k: ["double coincidence", "medium"] }, { p: "No <b>common measure of value</b> → unit of account", m: 1, k: ["common", "unit of account", "measure"] }, { p: "No <b>store of value</b> (milk spoils) → store of value", m: 1, k: ["store"] }, { p: "No <b>deferred payment</b> → standard of deferred payment", m: 1, k: ["deferred"] }],
          structure: ["Problem → quoted line → money's function."],
          model: "<p>(i) <b>Lack of double coincidence of wants</b>: Dorje wants honey, not wool. Money as a <b>medium of exchange</b> solves it.</p><p>(ii) <b>No common measure of value</b>: no agreement on salt per blanket. Money as a <b>unit of account</b> solves it.</p><p>(iii) <b>Difficulty in storing value</b>: milk spoils. Money is a <b>store of value</b>.</p><p>(iv) <b>Difficulty in deferred payments</b>: the potter cannot promise to pay later. Money is a <b>standard of deferred payment</b>.</p>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "How ₹10,000 becomes ₹1,00,000",
      text: "<p><b>Neha</b> deposits ₹10,000 in <span class='co'>Sahyadri Bank</span>. The RBI's legal reserve ratio is 10%. The bank keeps the reserve and lends the rest; the borrowers deposit the loans in other banks, which do the same.</p>",
      qs: [
        { q: "Show the first three rounds, and calculate the money multiplier, total deposits and total credit created.", m: 4, type: "Calculate", c: "mult", ans: "Multiplier 10; deposits 1,00,000; credit 90,000", keys: ["10", "1,00,000", "90,000"], hint: "Reserve 10% each round.",
          points: [{ p: "Rounds: 10,000 → 9,000 → 8,100 deposits", m: 1, k: ["9,000", "8,100"] }, { p: "Multiplier = 1 ÷ 0.1 = <b>10</b>", m: 1, k: ["10"] }, { p: "Total deposits = <b>₹1,00,000</b>", m: 1, k: ["1,00,000"] }, { p: "Credit created = <b>₹90,000</b>", m: 1, k: ["90,000"] }],
          structure: ["Rounds table, then formulas."],
          model: "<table><tr><th>Round</th><th>Deposit</th><th>Reserve 10%</th><th>Loan</th></tr><tr><td>1</td><td>10,000</td><td>1,000</td><td>9,000</td></tr><tr><td>2</td><td>9,000</td><td>900</td><td>8,100</td></tr><tr><td>3</td><td>8,100</td><td>810</td><td>7,290</td></tr></table><p>Money multiplier = 1 ÷ LRR = 1 ÷ 0.1 = <b>10</b>.</p><p>Total deposits = 10,000 × 10 = <b>₹1,00,000</b>. Credit created = 1,00,000 − 10,000 = <b>₹90,000</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Counting the money supply",
      text: "<p>Data for <span class='co'>Republic of Sundar</span> (₹ crore): currency with the public 4,000; demand deposits with banks 3,000 (including 500 of inter-bank deposits); time deposits 6,000; cash held by banks 700; cash with the government 300.</p>",
      qs: [
        { q: "Calculate the money supply (M1) and explain why any three items were left out.", m: 4, type: "Calculate and justify", c: "supply", ans: "M1 = 6,500", keys: ["6,500"], hint: "Only public's currency and net demand deposits.",
          points: [{ p: "Net demand deposits = 3,000 − 500 = 2,500", m: 1, k: ["2,500"] }, { p: "M1 = 4,000 + 2,500 = <b>₹6,500 cr</b>", m: 1, k: ["6,500"] }, { p: "Time deposits excluded (not withdrawable on demand)", m: 1, k: ["time"] }, { p: "Inter-bank deposits / cash with banks and government excluded (not with the public)", m: 1, k: ["public", "inter-bank", "government"] }],
          structure: ["Net DD, M1, reasons for exclusions."],
          model: "<p>Net demand deposits = 3,000 − 500 (inter-bank) = 2,500. M1 = 4,000 + 2,500 = <b>₹6,500 crore</b>.</p><p>Left out: <b>time deposits</b> (not payable on demand, so not in M1); <b>inter-bank deposits</b> (held by banks, not the public); <b>cash held by banks and the government</b> (money supply counts only money with the public).</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "Prices are rising fast",
      text: "<p>Inflation in Sundar has crossed 8%. People are borrowing heavily to buy cars and houses, and banks are lending freely. The central bank's governor says, 'We must reduce the flow of credit without shocking the economy.'</p>",
      qs: [
        { q: "Suggest and explain three quantitative measures the central bank can use, showing the chain of effects for one of them.", m: 6, type: "Suggest and explain", c: "quant", ans: "Raise repo/bank rate; raise CRR/SLR; sell securities (OMO)", keys: ["repo", "crr", "sell"], hint: "Raise, raise, sell.",
          points: [{ p: "<b>Raise repo / bank rate</b>", m: 1, k: ["repo", "bank rate"] }, { p: "Effect: banks' cost of funds up, loan rates up, borrowing falls", m: 1, k: ["cost", "interest", "borrow"] }, { p: "<b>Raise CRR / SLR</b>", m: 1, k: ["crr", "slr"] }, { p: "Effect: less lendable funds, multiplier falls", m: 1, k: ["less", "multiplier", "lend"] }, { p: "<b>Sell government securities (OMO)</b>", m: 1, k: ["sell", "open market"] }, { p: "Effect: money absorbed from banks/public; credit falls; demand and prices ease", m: 1, k: ["absorb", "demand", "price"] }],
          structure: ["Three measures, each with direction and effect; one full chain."],
          model: "<p><b>(i) Raise the repo rate (and bank rate):</b> banks borrow from the central bank at a higher cost, so they raise lending rates. Loans become costlier, borrowing and spending fall, and inflation eases.</p><p><b>(ii) Raise CRR / SLR:</b> banks must keep more of their deposits as reserves, so they have less to lend and the money multiplier falls.</p><p><b>(iii) Open market operations, sell securities:</b> buyers pay the central bank, which absorbs money from banks and the public, reducing credit.</p><p>Together these reduce aggregate demand and bring down prices.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "The bank that ran out of cash",
      text: "<p>A rumour spread that <span class='co'>Coastal Co-operative Bank</span> was in trouble. Thousands of depositors queued to withdraw. The bank had lent most of its funds and could not pay everyone that day. The RBI stepped in with emergency funds, and depositors calmed down.</p>",
      qs: [
        { q: "Name the function of the RBI shown here and state two other functions of the RBI.", m: 3, type: "Identify and state", c: "rbi", ans: "Lender of last resort; bank of issue, banker to government, etc.", keys: ["last resort"], hint: "Crisis help.",
          points: [{ p: "<b>Lender of last resort</b>", m: 1, k: ["last resort"] }, { p: "Second function (e.g. bank of issue)", m: 1, k: ["issue", "government", "banker", "custodian", "credit"] }, { p: "Third function (e.g. banker's bank / custodian of reserves)", m: 1, k: ["issue", "government", "banker", "custodian", "credit"] }],
          structure: ["Name with reason; two more functions."],
          model: "<p>The RBI acted as the <b>lender of last resort</b>: it provided funds to a bank in crisis when no one else would, protecting depositors.</p><p>Other functions: (i) <b>bank of issue</b>, the sole issuer of currency notes; (ii) <b>banker to the government</b>, managing its accounts and debt. (Also: banker's bank, custodian of foreign exchange reserves, controller of credit.)</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "barter", q: "The main problem of barter is lack of:", o: ["Banks", "Double coincidence of wants", "Goods", "Labour"], a: 1, hint: "Both must want.", why: "<b>Double coincidence of wants</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "func", q: "Which is a primary function of money?", o: ["Store of value", "Medium of exchange", "Deferred payment", "Transfer of value"], a: 1, hint: "Primary vs secondary.", why: "<b>Medium of exchange</b>." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "rbi", q: "The central bank of India is:", o: ["SBI", "RBI", "NABARD", "SIDBI"], a: 1, hint: "1935.", why: "<b>RBI</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "mult", q: "LRR is 20%. Money multiplier is:", o: ["2", "5", "20", "0.2"], a: 1, hint: "1 ÷ 0.2.", why: "<b>5</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "quant", q: "To control inflation, RBI will:", o: ["Lower repo rate", "Buy securities", "Raise CRR", "Lower SLR"], a: 2, hint: "Less lending.", why: "<b>Raise CRR</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "supply", q: "M1 does NOT include:", o: ["Currency with public", "Demand deposits", "Time deposits", "Coins with public"], a: 2, hint: "Fixed period.", why: "<b>Time deposits</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "mult", q: "Initial deposit ₹800 cr creates total deposits of ₹4,000 cr. LRR is:", o: ["5%", "20%", "25%", "80%"], a: 1, hint: "Multiplier 5.", why: "1 ÷ 5 = <b>20%</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "quant", q: "The rate at which RBI borrows from commercial banks is:", o: ["Repo rate", "Reverse repo rate", "Bank rate", "CRR"], a: 1, hint: "Reverse.", why: "<b>Reverse repo rate</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "mult", q: "A rise in LRR reduces the credit creation power of banks.", r: "Money multiplier is the reciprocal of LRR.", a: 0, hint: "Bigger LRR, smaller 1/LRR.", why: "Both true; R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "func", q: "A cheque is legal tender money.", r: "A cheque can be refused in payment.", a: 3, hint: "Can be refused?", why: "A false; R true." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "quant", q: "Selling government securities in the open market reduces money supply.", r: "Buyers pay the central bank, which absorbs money from the system.", a: 0, hint: "Money goes to RBI.", why: "Both true; R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "supply", q: "Money supply is a stock concept.", a: true, hint: "Point of time.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "rbi", q: "The RBI accepts deposits from the general public.", a: false, hint: "Banker's bank.", why: "False." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "qual", q: "Moral suasion is a quantitative tool of credit control.", a: false, hint: "Persuasion.", why: "False: it is <b>qualitative</b>." },
    { id: "q15", t: "match", d: "E", m: 4, c: "func", q: "Match the situation with the function of money.", pairs: [["Paying ₹40 for a pen", "Medium of exchange"], ["Shirt priced at ₹800", "Unit of account"], ["Saving ₹500 a month", "Store of value"], ["Loan to be repaid in 2028", "Deferred payment"]], hint: "Exchange, price, saving, future.", why: "Each situation shows one function." },
    { id: "q16", t: "match", d: "M", m: 4, c: "quant", q: "Match the tool with its definition.", pairs: [["Repo rate", "RBI lends short-term against securities"], ["Reverse repo rate", "RBI borrows from banks"], ["CRR", "Cash reserve with RBI"], ["SLR", "Liquid assets kept by banks"]], hint: "Lend, borrow, cash, liquid.", why: "Each tool has one meaning." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "mult", q: "Money multiplier = 1 ÷ ______.", acc: ["lrr", "legal reserve ratio"], hint: "Reserve.", why: "LRR." },
    { id: "q18", t: "fill", d: "M", m: 1, c: "supply", q: "M1 = Currency with public + net ______ deposits.", acc: ["demand"], hint: "Withdrawable on demand.", why: "Demand." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "qual", q: "Difference between the value of security and the loan is the ______ requirement.", acc: ["margin"], hint: "Gap.", why: "Margin." },
    { id: "q20", t: "short", d: "E", m: 1, c: "rbi", q: "Who issues coins in India?", acc: ["government of india", "government", "goi"], hint: "Not RBI.", why: "Government of India." },
    { id: "q21", t: "short", d: "M", m: 1, c: "mult", q: "Initial deposit ₹2,000; LRR 25%. Total deposits created (₹)?", acc: ["8000", "8,000"], hint: "× 4.", why: "₹8,000." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "barter", q: "Explain any three problems of the barter system.", hint: "Double coincidence, common unit, storage.", why: "",
      points: [{ p: "Lack of double coincidence of wants", m: 1, k: ["double"] }, { p: "Lack of common measure of value", m: 1, k: ["common", "measure"] }, { p: "Difficulty in storing value / deferred payments", m: 1, k: ["store", "deferred"] }],
      model: "<p>(i) <b>Lack of double coincidence of wants:</b> both parties rarely want what the other has.</p><p>(ii) <b>No common measure of value:</b> there is no unit to compare the value of different goods.</p><p>(iii) <b>Difficulty in storing value:</b> goods spoil or lose value, so wealth is hard to save.</p>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "mult", q: "Initial deposit ₹5,000; LRR 20%. Calculate the money multiplier, total deposits and credit created.", hint: "1 ÷ 0.2.", why: "",
      points: [{ p: "Multiplier 5", m: 1, k: ["5"] }, { p: "Total deposits ₹25,000", m: 1, k: ["25,000"] }, { p: "Credit created ₹20,000", m: 1, k: ["20,000"] }],
      model: "<p>Money multiplier = 1 ÷ 0.2 = <b>5</b>.</p><p>Total deposits = 5,000 × 5 = <b>₹25,000</b>.</p><p>Credit created = 25,000 − 5,000 = <b>₹20,000</b>.</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "rbi", q: "Explain any two functions of the central bank.", hint: "Issue, government, banker's bank, last resort.", why: "",
      points: [{ p: "Function 1 named", m: 1, k: ["issue", "government", "banker", "resort", "custodian"] }, { p: "Function 1 explained", m: 1, k: ["currency", "account", "reserve", "crisis", "foreign"] }, { p: "Function 2 named", m: 1, k: ["issue", "government", "banker", "resort", "custodian"] }, { p: "Function 2 explained", m: 1, k: ["currency", "account", "reserve", "crisis", "foreign"] }],
      model: "<p><b>(i) Bank of issue:</b> the RBI alone issues currency notes (except ₹1), which brings uniformity and public confidence and lets it control currency in circulation.</p><p><b>(ii) Lender of last resort:</b> when commercial banks face a crisis and cannot borrow elsewhere, the RBI lends to them, protecting depositors and the banking system.</p>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "qual", q: "Explain margin requirement and moral suasion as tools of credit control.", hint: "Gap and persuasion.", why: "",
      points: [{ p: "Margin requirement: difference between value of security and loan", m: 1, k: ["difference", "security", "loan"] }, { p: "Raising margin reduces loans (control inflation)", m: 1, k: ["raise", "reduce", "less"] }, { p: "Moral suasion: persuasion through advice, letters, meetings", m: 1, k: ["persua", "advice", "request"] }, { p: "Used to ask banks to lend more/less as required", m: 1, k: ["lend"] }],
      model: "<p><b>Margin requirement</b> is the difference between the market value of the security offered and the loan given against it. Raising the margin (say from 25% to 40%) means a smaller loan for the same security, so credit falls; lowering it expands credit.</p><p><b>Moral suasion</b> is persuasion by the RBI through letters, meetings and advice, asking banks to follow its policy, e.g. to lend less for speculation during inflation or more to priority sectors.</p>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "mult", q: "Explain the process of money creation by commercial banks with a numerical example (initial deposit ₹1,000, LRR 20%).", hint: "Rounds, multiplier.", why: "",
      points: [{ p: "Banks keep LRR and lend the rest", m: 1, k: ["reserve", "lend"] }, { p: "Loans come back as fresh deposits", m: 1, k: ["deposit", "again"] }, { p: "Round table: 1,000 → 800 → 640", m: 1, k: ["800", "640"] }, { p: "Multiplier = 1 ÷ 0.2 = 5", m: 1, k: ["5"] }, { p: "Total deposits ₹5,000; credit ₹4,000", m: 1, k: ["5,000", "4,000"] }, { p: "Process ends when total reserves = initial deposit", m: 1, k: ["reserves", "1,000", "end"] }],
      model: "<p>Banks know that all depositors will not withdraw at once, so they keep only the legal reserve and lend the rest. Borrowers spend the loans, and the money comes back to banks as new deposits, which are again partly lent.</p><table><tr><th>Round</th><th>Deposit</th><th>Reserve 20%</th><th>Loan</th></tr><tr><td>1</td><td>1,000</td><td>200</td><td>800</td></tr><tr><td>2</td><td>800</td><td>160</td><td>640</td></tr><tr><td>3</td><td>640</td><td>128</td><td>512</td></tr><tr><td>Total</td><td>5,000</td><td>1,000</td><td>4,000</td></tr></table><p>Money multiplier = 1 ÷ LRR = 1 ÷ 0.2 = <b>5</b>; total deposits = <b>₹5,000</b>; credit created = <b>₹4,000</b>. The process stops when total reserves equal the initial deposit (₹1,000).</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "quant", q: "How can the central bank correct deficient demand (deflation) using three monetary tools?", hint: "Lower, lower, buy.", why: "",
      points: [{ p: "Lower repo / bank rate", m: 1, k: ["lower", "repo", "bank rate"] }, { p: "Cheaper loans, more borrowing and spending", m: 1, k: ["cheap", "borrow", "spend"] }, { p: "Lower CRR / SLR", m: 1, k: ["crr", "slr"] }, { p: "More lendable funds; higher multiplier", m: 1, k: ["more", "lend", "multiplier"] }, { p: "Buy securities (OMO)", m: 1, k: ["buy"] }, { p: "Money injected; aggregate demand rises", m: 1, k: ["inject", "demand"] }],
      model: "<p><b>(i) Lower repo rate / bank rate:</b> banks get cheaper funds, lower their loan rates; borrowing, investment and consumption rise.</p><p><b>(ii) Lower CRR / SLR:</b> banks keep less in reserve, have more to lend, and the money multiplier rises.</p><p><b>(iii) Buy securities (OMO):</b> the central bank pays money into the banking system, increasing banks' lending capacity.</p><p>All three raise credit and <b>aggregate demand</b>, correcting deficient demand.</p>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "func", q: "A trader keeps ₹10,000 aside to buy stock next month. Money works as", o: ["Medium of exchange", "Store of value", "Unit of account", "Legal tender"], a: 1, hint: "Holding for later.", why: "<b>Store of value</b>." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "lrr", q: "RBI cuts CRR from 4% to 3%. Banks will", o: ["Lend less", "Lend more", "Close branches", "Raise SLR"], a: 1, hint: "Less locked up.", why: "<b>Lend more</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "qual", q: "Loan against gold worth ₹1,00,000 falls from ₹75,000 to ₹60,000. RBI has", o: ["Raised margin requirement", "Lowered repo rate", "Bought securities", "Cut SLR"], a: 0, hint: "Gap widened.", why: "Margin rose from 25% to 40%: <b>raised margin requirement</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "barter", passage: "A fisherman wants rice, but the rice farmer wants only cloth.", q: "This shows lack of", o: ["Double coincidence of wants", "Store of value", "Legal tender", "Credit"], a: 0, hint: "Wants do not match.", why: "<b>Double coincidence of wants</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "quant", passage: "Inflation is high. The RBI announces a 0.5% increase in a key rate at which it lends overnight to banks.", q: "The rate is", o: ["Repo rate", "Reverse repo rate", "SLR", "Margin"], a: 0, hint: "RBI lends.", why: "<b>Repo rate</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "supply", passage: "Currency with public ₹500; demand deposits ₹400 (inter-bank ₹50); time deposits ₹900.", q: "M1 is", o: ["₹900", "₹850", "₹1,800", "₹1,750"], a: 1, hint: "500 + 350.", why: "500 + (400 − 50) = <b>₹850</b>." }
  ],
  find: {
    mcq: [
      { s: "Two people swap rice for cloth directly.", o: ["Barter", "Money economy", "Credit creation", "OMO"], a: 0, c: "barter", d: "E", why: "<b>Barter</b>." },
      { s: "Prices of all goods in a shop are written in rupees.", o: ["Unit of account", "Store of value", "Medium of exchange", "Deferred payment"], a: 0, c: "func", d: "E", why: "<b>Unit of account</b>." },
      { s: "A shopkeeper refuses a cheque but must accept a ₹100 note.", o: ["Legal tender", "Fiat money only", "Credit money", "Barter"], a: 0, c: "func", d: "E", why: "Notes are <b>legal tender</b>." },
      { s: "Currency with households plus their current account balances.", o: ["Money supply (M1)", "Time deposits", "LRR", "Bank rate"], a: 0, c: "supply", d: "E", why: "<b>M1</b>." },
      { s: "A bank accepts savings deposits and lends to a shop owner.", o: ["Commercial bank", "Central bank", "Barter", "OMO"], a: 0, c: "cbank", d: "M", why: "<b>Commercial bank</b>." },
      { s: "Banks must keep 4% of deposits as cash with the RBI.", o: ["CRR", "SLR", "Repo", "Margin"], a: 0, c: "lrr", d: "M", why: "<b>CRR</b>." },
      { s: "Banks must keep 18% of deposits in government securities themselves.", o: ["SLR", "CRR", "Bank rate", "Reverse repo"], a: 0, c: "lrr", d: "M", why: "<b>SLR</b>." },
      { s: "₹100 deposit grows into ₹500 of deposits across many banks.", o: ["Money multiplier at work", "Barter", "Moral suasion", "Reverse repo"], a: 0, c: "mult", d: "M", why: "<b>Money creation</b> with multiplier 5." },
      { s: "RBI keeps the government's accounts and manages its loans.", o: ["Banker to the government", "Bank of issue", "Lender of last resort", "Custodian"], a: 0, c: "rbi", d: "M", why: "<b>Banker to the government</b>." },
      { s: "RBI rescues a bank facing a run by depositors.", o: ["Lender of last resort", "Bank of issue", "OMO", "Moral suasion"], a: 0, c: "rbi", d: "M", why: "<b>Lender of last resort</b>." },
      { s: "RBI sells bonds worth ₹10,000 crore to banks.", o: ["Open market operation (contraction)", "Repo cut", "Moral suasion", "Margin cut"], a: 0, c: "quant", d: "C", why: "<b>OMO</b> selling: absorbs money." },
      { s: "RBI pays banks 6.25% on money they park with it overnight.", o: ["Reverse repo rate", "Repo rate", "Bank rate", "CRR"], a: 0, c: "quant", d: "C", why: "RBI borrows: <b>reverse repo</b>." },
      { s: "Governor holds a meeting asking banks not to lend for speculation.", o: ["Moral suasion", "CRR", "Repo", "OMO"], a: 0, c: "qual", d: "C", why: "Persuasion: <b>moral suasion</b>." },
      { s: "Loan against shares cut to 50% of their value.", o: ["Margin requirement", "SLR", "Reverse repo", "Bank of issue"], a: 0, c: "qual", d: "C", why: "<b>Margin requirement</b> raised." },
      { s: "RBI holds the country's dollar and gold reserves.", o: ["Custodian of foreign exchange reserves", "Bank of issue", "Commercial banking", "Moral suasion"], a: 0, c: "rbi", d: "C", why: "<b>Custodian</b> of reserves." },
      { s: "LRR rises from 10% to 20%; deposits created from ₹1,000 fall from ₹10,000 to ₹5,000.", o: ["Multiplier falls", "Multiplier rises", "M1 rises", "Barter returns"], a: 0, c: "mult", d: "C", why: "Multiplier 10 → 5: <b>falls</b>." }
    ],
    match: [
      { title: "Drag each situation onto its concept.", pairs: [["Wants do not match in a swap", "Double coincidence of wants", "barter"], ["Saving for next year", "Store of value", "func"], ["1 ÷ LRR", "Money multiplier", "mult"], ["RBI rescues a bank in crisis", "Lender of last resort", "rbi"], ["RBI sells bonds", "Open market operations", "quant"], ["Persuasion letters to banks", "Moral suasion", "qual"]] }
    ],
    wrong: [
      { stmts: ["M1 includes currency with the public.", "M1 includes net demand deposits.", "M1 includes time deposits.", "Inter-bank deposits are excluded."], a: 2, c: "supply", why: "Time deposits are <b>not</b> in M1." },
      { stmts: ["To control inflation, raise repo rate.", "To control inflation, raise CRR.", "To control inflation, buy securities.", "To control inflation, raise margin."], a: 2, c: "quant", why: "To control inflation, <b>sell</b> securities." },
      { stmts: ["RBI issues currency notes.", "RBI is the banker to the government.", "RBI accepts deposits from the public.", "RBI is lender of last resort."], a: 2, c: "rbi", why: "RBI does <b>not</b> deal with the general public." }
    ],
    para: [
      { target: "Standard of deferred payment", c: "func", sents: ["Ravi bought a tractor on credit.", "He agreed to repay ₹2 lakh in 2028.", "The tractor is red.", "He uses it every day."], a: 1, why: "Future payment fixed in money: <b>deferred payment</b>." },
      { target: "Money multiplier", c: "mult", sents: ["Asha deposited ₹1,000 in a bank.", "The bank kept 20% and lent the rest.", "The loans came back as deposits again and again until ₹5,000 of deposits existed.", "Asha later opened a second account."], a: 2, why: "Deposits multiplied 5 times: <b>money multiplier</b>." },
      { target: "Repo rate", c: "quant", sents: ["Inflation crossed 7%.", "The RBI raised the rate at which it lends overnight to banks.", "Car loans became costlier.", "Sales of cars slowed."], a: 1, why: "RBI's lending rate to banks: <b>repo rate</b>." }
    ],
    explain: [
      { s: "Gold can be pledged for a loan of only 60% of its value now.", o: ["Margin requirement", "Repo", "CRR", "Barter"], a: 0, c: "qual", why: "The clue is <i>60% of its value</i>: <b>margin requirement</b>." },
      { s: "₹500 notes printed only by one authority.", o: ["Bank of issue", "Lender of last resort", "Commercial bank", "OMO"], a: 0, c: "rbi", why: "Sole issuer: <b>bank of issue</b>." },
      { s: "Banks can lend 80% of every deposit.", o: ["LRR is 20%", "LRR is 80%", "Multiplier is 0.8", "CRR is 0"], a: 0, c: "lrr", why: "Reserve kept = 20%: <b>LRR 20%</b>." },
      { s: "A ₹1,000 cheque is returned by a seller.", o: ["Cheque is not legal tender", "Barter", "Moral suasion", "Store of value"], a: 0, c: "func", why: "Can be refused: <b>not legal tender</b>." }
    ]
  }
});
