/* Revision Arena · Class XII Economics · Unit 4 · Government Budget and the Economy (Parts 1-2). Original cases; figures recomputed. */
NFArena.register({
  id: "eco12-budget", cls: "XII", subject: "Economics", unit: "Unit", num: "4",
  title: "Government Budget and the Economy",
  tagline: "Objectives of the budget, revenue vs capital receipts and expenditure, and the three deficits.",
  notesLink: "../#eco12-budget",
  concepts: {
    mean: { n: "Meaning of government budget", s: "intro" },
    obj: { n: "Objectives of government budget", s: "intro" },
    rr: { n: "Revenue receipts (tax and non-tax)", s: "receipts" },
    tax: { n: "Direct and indirect taxes", s: "receipts" },
    cr: { n: "Capital receipts", s: "receipts" },
    re: { n: "Revenue expenditure", s: "exp" },
    ce: { n: "Capital expenditure", s: "exp" },
    types: { n: "Balanced, surplus and deficit budget", s: "deficits" },
    rd: { n: "Revenue deficit", s: "deficits" },
    fd: { n: "Fiscal deficit", s: "deficits" },
    pd: { n: "Primary deficit", s: "deficits" }
  },
  overview: {
    text: "A <b>government budget</b> is an annual statement of the estimated receipts and expenditure of the government for a financial year (1 April to 31 March). In India it is the 'Annual Financial Statement' under <b>Article 112</b>. Receipts and expenditure are each split into <b>revenue</b> and <b>capital</b>, and the gaps between them give the <b>revenue, fiscal and primary deficits</b>.",
    points: [
      "<b>Capital receipts</b> create a liability or reduce assets; <b>revenue receipts</b> do neither.",
      "<b>Capital expenditure</b> creates an asset or reduces a liability; <b>revenue expenditure</b> does neither.",
      "<b>Fiscal deficit</b> = Total expenditure − Total receipts excluding borrowings = Borrowings.",
      "<b>Primary deficit</b> = Fiscal deficit − Interest payments."
    ],
    map: {
      center: "Government Budget",
      branches: [
        { t: "Purpose", c: ["Reallocation of resources", "Redistribution", "Stability", "Growth"] },
        { t: "Receipts", c: ["Revenue: tax, non-tax", "Capital: borrowing, recovery, disinvestment"] },
        { t: "Expenditure", c: ["Revenue: salaries, interest, subsidies", "Capital: assets, loans, repayment"] },
        { t: "Deficits", c: ["Revenue", "Fiscal", "Primary"] }
      ]
    }
  },
  sections: [
    {
      id: "intro", title: "Meaning and objectives", sub: "Why governments budget", icon: "📜", color: "#4da3ff",
      quick: [
        "<b>Budget</b>: statement of estimated receipts and expenditure of the government for a financial year.",
        "<b>Reallocation of resources</b>: direct resources to socially desirable areas (taxing harmful goods, subsidising essentials, providing public goods).",
        "<b>Redistribution of income and wealth</b>: progressive taxes on the rich, subsidies and free services for the poor.",
        "<b>Economic stability</b>: control inflation and deflation (budget surplus in boom, deficit in slump).",
        "<b>Management of public enterprises</b>, <b>economic growth</b> and reducing <b>regional disparities</b>."
      ],
      cards: [
        { t: "Public goods", tag: "def", b: "<p>Goods like defence, street lights and parks are <b>non-rival</b> and <b>non-excludable</b>: markets do not supply enough of them, so the budget provides them.</p>" },
        { t: "Budget as a stabiliser", tag: "why", b: "<p>In inflation, the government cuts spending and raises taxes (surplus budget). In a slump, it spends more and taxes less (deficit budget).</p>" }
      ],
      exam: ["'Higher tax on cigarettes, subsidy on organic farming' → reallocation of resources."]
    },
    {
      id: "receipts", title: "Budget receipts", sub: "Revenue or capital?", icon: "💰", color: "#22c55e",
      quick: [
        "<b>Revenue receipts</b>: neither create a liability nor reduce assets. <b>Tax revenue</b> (direct and indirect) and <b>non-tax revenue</b> (interest, profits and dividends of PSUs, fees, fines, penalties, grants).",
        "<b>Direct tax</b>: impact and incidence on the same person; burden cannot be shifted (income tax, corporation tax). <b>Indirect tax</b>: burden can be shifted (GST, customs duty).",
        "<b>Capital receipts</b>: create a liability or reduce assets. <b>Borrowings</b> (create liability), <b>recovery of loans</b> and <b>disinvestment</b> (reduce assets).",
        "Test: does it create a liability or reduce an asset? Yes → capital; No → revenue."
      ],
      table: { cap: "Classify the receipt", head: ["Receipt", "Type", "Why"], rows: [["Income tax", "Revenue (direct tax)", "No liability, no asset reduced"], ["GST", "Revenue (indirect tax)", "Burden shifted to buyers"], ["Dividend from a PSU", "Revenue (non-tax)", "Income on investment"], ["Borrowing from the public", "Capital", "Creates liability"], ["Recovery of loan from a state", "Capital", "Reduces asset"], ["Disinvestment (sale of PSU shares)", "Capital", "Reduces asset"], ["Fine for traffic violation", "Revenue (non-tax)", "No liability"]] },
      cards: [
        { t: "Why disinvestment is capital", tag: "why", b: "<p>When the government sells shares of a public sector company, its ownership (an asset) falls. Because an asset is reduced, the receipt is <b>capital</b>.</p>" }
      ],
      exam: ["Give the reason (liability / asset) with every classification."]
    },
    {
      id: "exp", title: "Budget expenditure", sub: "Revenue or capital?", icon: "🏗️", color: "#f5b301",
      quick: [
        "<b>Revenue expenditure</b>: neither creates an asset nor reduces a liability. Salaries, pensions, interest payments, subsidies, grants to states, running hospitals and schools.",
        "<b>Capital expenditure</b>: creates an asset or reduces a liability. Building roads, dams and schools, buying machines, loans to states, <b>repayment of loans</b>, buying shares.",
        "Grants to state governments are <b>revenue</b> expenditure even if the state builds assets with them, because the Centre gets no asset."
      ],
      table: { cap: "Classify the expenditure", head: ["Expenditure", "Type", "Why"], rows: [["Salaries of government employees", "Revenue", "No asset created"], ["Interest on public debt", "Revenue", "No asset, no liability reduced"], ["Construction of a metro line", "Capital", "Creates asset"], ["Repayment of a loan", "Capital", "Reduces liability"], ["Loan given to a state", "Capital", "Creates asset (a claim)"], ["Subsidy on fertilisers", "Revenue", "No asset created"]] },
      cards: [
        { t: "Interest vs repayment", tag: "tip", b: "<p>Paying <b>interest</b> on a loan is revenue expenditure. Repaying the <b>principal</b> is capital expenditure because the liability falls.</p>" }
      ],
      exam: ["Grants-in-aid to states: revenue expenditure."]
    },
    {
      id: "deficits", title: "Budget deficits", sub: "Measuring the gap", icon: "📉", color: "#ff5470",
      quick: [
        "<b>Balanced budget</b>: estimated receipts = expenditure. <b>Surplus</b>: receipts > expenditure. <b>Deficit</b>: expenditure > receipts.",
        "<b>Revenue deficit</b> = Revenue expenditure − Revenue receipts. Shows government <b>dissaving</b>: borrowing to meet day-to-day expenses.",
        "<b>Fiscal deficit</b> = Total expenditure − Total receipts excluding borrowings = <b>Borrowings</b>. Shows the total borrowing requirement.",
        "<b>Primary deficit</b> = Fiscal deficit − Interest payments. Shows borrowing for current needs, excluding past interest.",
        "<b>Implications of high fiscal deficit:</b> rising debt and interest burden (debt trap), inflation if financed by printing money, crowding out of private investment, dependence on foreign lenders."
      ],
      table: { cap: "Worked data (₹ crore)", head: ["Item", "Amount"], rows: [["Revenue receipts", "1,000"], ["Revenue expenditure (interest 300)", "1,200"], ["Capital receipts: borrowings 500; recovery and disinvestment 100", "600"], ["Capital expenditure", "400"], ["Revenue deficit", "200"], ["Fiscal deficit", "500"], ["Primary deficit", "200"]] },
      cards: [
        { t: "Check the fiscal deficit", tag: "eg", b: "<p>Total expenditure = 1,200 + 400 = 1,600. Receipts excluding borrowings = 1,000 + 100 = 1,100. FD = <b>500</b>, equal to borrowings.</p>" },
        { t: "Zero primary deficit", tag: "why", b: "<p>If the primary deficit is zero, the government is borrowing <b>only to pay interest</b> on past debt.</p>" }
      ],
      exam: ["FD = Borrowings: use this to check your answer."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "mean", q: "What is a government budget?", a: "An annual statement of estimated receipts and expenditure of the government for a financial year." },
    { k: "Article", c: "mean", q: "Under which Article is the budget presented in India?", a: "Article 112 (Annual Financial Statement)." },
    { k: "Objective", c: "obj", q: "Name three objectives of a budget.", a: "Reallocation of resources, redistribution of income, economic stability (also growth, managing PSUs)." },
    { k: "Receipt", c: "rr", q: "Revenue receipt: definition?", a: "A receipt that neither creates a liability nor reduces an asset." },
    { k: "Receipt", c: "cr", q: "Capital receipt: definition?", a: "A receipt that creates a liability or reduces an asset." },
    { k: "Classify", c: "cr", q: "Is disinvestment a revenue or capital receipt?", a: "Capital: it reduces assets." },
    { k: "Tax", c: "tax", q: "Difference between direct and indirect tax?", a: "Direct: burden cannot be shifted (income tax). Indirect: burden can be shifted (GST)." },
    { k: "Classify", c: "rr", q: "Dividend from a public sector company?", a: "Revenue (non-tax) receipt." },
    { k: "Expenditure", c: "re", q: "Revenue expenditure: definition?", a: "Expenditure that neither creates an asset nor reduces a liability." },
    { k: "Expenditure", c: "ce", q: "Capital expenditure: definition?", a: "Expenditure that creates an asset or reduces a liability." },
    { k: "Classify", c: "ce", q: "Repayment of loan: revenue or capital expenditure?", a: "Capital: it reduces a liability." },
    { k: "Classify", c: "re", q: "Grants to state governments?", a: "Revenue expenditure." },
    { k: "Formula", c: "rd", q: "Revenue deficit?", a: "Revenue expenditure − Revenue receipts." },
    { k: "Formula", c: "fd", q: "Fiscal deficit?", a: "Total expenditure − Total receipts excluding borrowings (= Borrowings)." },
    { k: "Formula", c: "pd", q: "Primary deficit?", a: "Fiscal deficit − Interest payments." },
    { k: "Meaning", c: "pd", q: "Primary deficit is zero. What does it mean?", a: "The government borrows only to pay interest on past loans." },
    { k: "Implication", c: "fd", q: "Give two implications of a high fiscal deficit.", a: "Debt trap (rising interest burden) and inflation / crowding out of private investment." },
    { k: "Type", c: "types", q: "What is a surplus budget?", a: "Estimated receipts exceed estimated expenditure." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "The finance minister's speech",
      text: "<p>In her budget speech, Sundar's finance minister announced: a 40% tax on luxury cars and cigarettes; free textbooks and a scholarship for poor students; cuts in government spending because prices are rising fast; and new highways in backward hill districts.</p>",
      qs: [
        { q: "Identify four objectives of the government budget shown in the speech.", m: 4, type: "Identify concepts", c: "obj", ans: "Reallocation of resources; redistribution; stability; reducing regional disparities / growth", keys: ["reallocation", "redistribution", "stability"], hint: "One objective per announcement.",
          points: [{ p: "Tax on luxury cars, cigarettes → <b>reallocation of resources</b>", m: 1, k: ["reallocat"] }, { p: "Free textbooks, scholarships → <b>redistribution of income</b>", m: 1, k: ["redistribut"] }, { p: "Spending cuts as prices rise → <b>economic stability</b>", m: 1, k: ["stabil"] }, { p: "Highways in backward districts → <b>reducing regional disparities / growth</b>", m: 1, k: ["regional", "growth"] }],
          structure: ["Objective + quoted announcement, four times."],
          model: "<p>(i) <b>Reallocation of resources:</b> heavy tax on luxury cars and cigarettes discourages their production.</p><p>(ii) <b>Redistribution of income:</b> free textbooks and scholarships for poor students.</p><p>(iii) <b>Economic stability:</b> spending cuts to control rising prices.</p><p>(iv) <b>Reducing regional disparities</b> (and growth): highways in backward hill districts.</p>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "Sorting the receipts",
      text: "<p>Sundar's treasury received: income tax ₹300 cr; GST ₹500 cr; dividend from the state power company ₹40 cr; ₹200 cr borrowed from the public; ₹60 cr recovered from loans given to provinces; ₹80 cr from selling shares of a public airline.</p>",
      qs: [
        { q: "Classify each receipt as revenue or capital with a reason, and calculate total revenue receipts and capital receipts.", m: 6, type: "Classify and calculate", c: "cr", ans: "Revenue 840; capital 340", keys: ["840", "340"], hint: "Liability or asset reduced?",
          points: [{ p: "Income tax and GST: revenue (tax) receipts", m: 1, k: ["revenue", "tax"] }, { p: "Dividend: revenue (non-tax) receipt", m: 1, k: ["non-tax", "dividend"] }, { p: "Borrowing: capital, creates liability", m: 1, k: ["liability"] }, { p: "Recovery of loans and share sale: capital, reduce assets", m: 1, k: ["asset", "disinvest"] }, { p: "Revenue receipts = <b>₹840 cr</b>", m: 1, k: ["840"] }, { p: "Capital receipts = <b>₹340 cr</b>", m: 1, k: ["340"] }],
          structure: ["Table of item, type, reason; then totals."],
          model: "<table><tr><th>Receipt</th><th>Type</th><th>Reason</th></tr><tr><td>Income tax 300</td><td>Revenue (direct tax)</td><td>No liability, no asset reduced</td></tr><tr><td>GST 500</td><td>Revenue (indirect tax)</td><td>No liability, no asset reduced</td></tr><tr><td>Dividend 40</td><td>Revenue (non-tax)</td><td>Income on investment</td></tr><tr><td>Borrowing 200</td><td>Capital</td><td>Creates liability</td></tr><tr><td>Recovery of loans 60</td><td>Capital</td><td>Reduces asset</td></tr><tr><td>Share sale 80</td><td>Capital (disinvestment)</td><td>Reduces asset</td></tr></table><p>Revenue receipts = 300 + 500 + 40 = <b>₹840 crore</b>. Capital receipts = 200 + 60 + 80 = <b>₹340 crore</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Where the money went",
      text: "<p>Sundar spent: ₹400 cr on salaries and pensions; ₹150 cr interest on past loans; ₹100 cr fertiliser subsidy; ₹250 cr building a new metro; ₹120 cr repaying a World Bank loan; ₹80 cr grants to provinces for schools.</p>",
      qs: [
        { q: "Classify each item as revenue or capital expenditure with reasons.", m: 4, type: "Classify", c: "ce", ans: "Revenue: salaries, interest, subsidy, grants. Capital: metro, loan repayment", keys: ["metro", "repay"], hint: "Asset created or liability reduced?",
          points: [{ p: "Salaries/pensions, subsidy: revenue (no asset)", m: 1, k: ["salar", "subsid"] }, { p: "Interest: revenue; grants to provinces: revenue", m: 1, k: ["interest", "grant"] }, { p: "Metro: capital (creates asset)", m: 1, k: ["metro", "asset"] }, { p: "Loan repayment: capital (reduces liability)", m: 1, k: ["repay", "liabilit"] }],
          structure: ["Item → type → reason."],
          model: "<p><b>Revenue expenditure</b> (no asset created, no liability reduced): salaries and pensions ₹400 cr; interest ₹150 cr; fertiliser subsidy ₹100 cr; grants to provinces ₹80 cr (the Centre gets no asset).</p><p><b>Capital expenditure:</b> metro ₹250 cr (creates an asset); repayment of World Bank loan ₹120 cr (reduces a liability).</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "Three deficits",
      text: "<p>Sundar's budget (₹ crore): revenue receipts 1,000; revenue expenditure 1,200 (including interest 300); capital receipts 600, of which borrowings 500 and recovery of loans and disinvestment 100; capital expenditure 400.</p>",
      qs: [
        { q: "Calculate revenue deficit, fiscal deficit and primary deficit, and state what each shows.", m: 6, type: "Calculate and interpret", c: "fd", ans: "RD 200; FD 500; PD 200", keys: ["200", "500"], hint: "FD = borrowings.",
          points: [{ p: "RD = 1,200 − 1,000 = <b>200</b>", m: 1, k: ["200"] }, { p: "RD shows dissaving: borrowing for day-to-day spending", m: 1, k: ["dissav", "consumption", "day"] }, { p: "FD = 1,600 − 1,100 = <b>500</b>", m: 1, k: ["500"] }, { p: "FD shows total borrowing requirement", m: 1, k: ["borrow"] }, { p: "PD = 500 − 300 = <b>200</b>", m: 1, k: ["200"] }, { p: "PD shows borrowing excluding interest on past debt", m: 1, k: ["interest", "past"] }],
          structure: ["Each deficit: formula, figure, meaning."],
          model: "<p><b>Revenue deficit</b> = 1,200 − 1,000 = <b>₹200 cr</b>: the government is borrowing to meet day-to-day (consumption) expenses: it is dissaving.</p><p><b>Fiscal deficit</b> = Total expenditure − Receipts excluding borrowings = (1,200 + 400) − (1,000 + 100) = <b>₹500 cr</b>: the total borrowing needed (equal to borrowings).</p><p><b>Primary deficit</b> = 500 − 300 = <b>₹200 cr</b>: borrowing for current needs, excluding interest on past loans.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Borrowing to pay interest",
      text: "<p>A newspaper reports that Sundar's fiscal deficit has been above 6% of GDP for five years, interest now takes 40% of revenue receipts, and the government is borrowing more each year just to pay interest. Private firms complain that bank loans have become scarce and costly.</p>",
      qs: [
        { q: "Explain three implications of a persistently high fiscal deficit shown in the report.", m: 4, type: "Evaluate", c: "fd", ans: "Debt trap; crowding out; inflation / burden on future", keys: ["debt trap", "crowding"], hint: "Interest, private loans, future.",
          points: [{ p: "<b>Debt trap</b>: borrowing to pay interest; rising interest burden", m: 1.5, k: ["debt trap", "interest"] }, { p: "<b>Crowding out</b>: government borrowing makes loans scarce/costly for private firms", m: 1.5, k: ["crowding", "private"] }, { p: "Inflation (if money is created) / burden on future generations", m: 1, k: ["inflation", "future"] }],
          structure: ["Implication + evidence from report."],
          model: "<p>(i) <b>Debt trap:</b> the government borrows to pay interest on old loans; interest already takes 40% of revenue receipts, leaving less for development.</p><p>(ii) <b>Crowding out of private investment:</b> heavy government borrowing absorbs savings, so loans for private firms become scarce and costly.</p><p>(iii) <b>Inflation and future burden:</b> if the deficit is financed by creating money, prices rise; and future generations must repay the debt.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "cr", q: "Which is a capital receipt?", o: ["Income tax", "GST", "Borrowings", "Fines"], a: 2, hint: "Creates liability.", why: "<b>Borrowings</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "tax", q: "Which is an indirect tax?", o: ["Income tax", "Corporation tax", "GST", "Wealth tax"], a: 2, hint: "Burden shifted.", why: "<b>GST</b>." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "ce", q: "Which is capital expenditure?", o: ["Salaries", "Interest", "Construction of a bridge", "Subsidies"], a: 2, hint: "Asset.", why: "<b>Bridge</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "fd", q: "Fiscal deficit equals:", o: ["Revenue deficit", "Borrowings", "Interest payments", "Primary deficit"], a: 1, hint: "Gap filled by…", why: "<b>Borrowings</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "cr", q: "Disinvestment is a capital receipt because it:", o: ["Creates a liability", "Reduces assets", "Is a tax", "Is recurring"], a: 1, hint: "Sale of shares.", why: "<b>Reduces assets</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "pd", q: "FD ₹500 cr, interest ₹300 cr. Primary deficit:", o: ["₹800 cr", "₹200 cr", "₹300 cr", "₹500 cr"], a: 1, hint: "FD − interest.", why: "<b>₹200 cr</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "re", q: "Grants given by the Centre to states for building schools are:", o: ["Capital expenditure", "Revenue expenditure", "Capital receipt", "Revenue receipt"], a: 1, hint: "Does the Centre get an asset?", why: "<b>Revenue expenditure</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "pd", q: "Primary deficit is zero when:", o: ["FD = 0", "FD = interest payments", "RD = 0", "Borrowings = 0"], a: 1, hint: "FD − interest = 0.", why: "<b>FD = interest payments</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "ce", q: "Repayment of a loan is capital expenditure.", r: "It reduces the liability of the government.", a: 0, hint: "Liability.", why: "Both true; R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "rr", q: "Recovery of loans is a revenue receipt.", r: "It reduces the assets of the government.", a: 3, hint: "Reduces assets → which type?", why: "A false (it is capital); R true." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "rd", q: "Revenue deficit shows government dissaving.", r: "The government borrows to meet its consumption expenditure.", a: 0, hint: "Borrowing for day-to-day.", why: "Both true; R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "mean", q: "The financial year in India runs from 1 April to 31 March.", a: true, hint: "Fiscal year.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "re", q: "Interest payment on loans is capital expenditure.", a: false, hint: "Interest vs principal.", why: "False: <b>revenue</b> expenditure." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "tax", q: "The burden of a direct tax can be shifted to others.", a: false, hint: "Same person.", why: "False." },
    { id: "q15", t: "match", d: "E", m: 4, c: "rr", q: "Match the receipt with its type.", pairs: [["Corporation tax", "Revenue (tax)"], ["Fees for passport", "Revenue (non-tax)"], ["Borrowing from RBI", "Capital (liability)"], ["Sale of PSU shares", "Capital (asset reduced)"]], hint: "Liability / asset test.", why: "Each receipt is one type." },
    { id: "q16", t: "match", d: "M", m: 4, c: "fd", q: "Match the deficit with its formula.", pairs: [["Revenue deficit", "Revenue exp − Revenue receipts"], ["Fiscal deficit", "Total exp − Receipts excl. borrowing"], ["Primary deficit", "Fiscal deficit − Interest"], ["Surplus budget", "Receipts > Expenditure"]], hint: "Three deficits plus a surplus.", why: "Each has one formula." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "mean", q: "The budget is presented under Article ______ of the Constitution.", acc: ["112"], hint: "Annual Financial Statement.", why: "112." },
    { id: "q18", t: "fill", d: "M", m: 1, c: "pd", q: "Primary deficit = Fiscal deficit − ______ payments.", acc: ["interest"], hint: "On past debt.", why: "Interest." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "cr", q: "Sale of government shares in public enterprises is called ______.", acc: ["disinvestment"], hint: "Opposite of investment.", why: "Disinvestment." },
    { id: "q20", t: "short", d: "E", m: 1, c: "types", q: "What is a budget called when estimated receipts equal estimated expenditure?", acc: ["balanced", "balanced budget"], hint: "Equal.", why: "Balanced budget." },
    { id: "q21", t: "short", d: "M", m: 1, c: "rd", q: "Revenue expenditure ₹900 cr; revenue receipts ₹750 cr. Revenue deficit (₹ cr)?", acc: ["150"], hint: "Subtract.", why: "₹150 crore." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "obj", q: "Explain any three objectives of a government budget.", hint: "Reallocation, redistribution, stability.", why: "",
      points: [{ p: "Reallocation of resources", m: 1, k: ["reallocat"] }, { p: "Redistribution of income", m: 1, k: ["redistribut"] }, { p: "Economic stability / growth", m: 1, k: ["stabil", "growth"] }],
      model: "<p><b>(i) Reallocation of resources:</b> through taxes and subsidies, resources are moved towards socially useful goods.</p><p><b>(ii) Redistribution of income:</b> progressive taxes on the rich and spending on the poor reduce inequality.</p><p><b>(iii) Economic stability:</b> surplus budgets in inflation and deficit budgets in deflation keep prices and employment stable.</p>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "tax", q: "Distinguish between direct and indirect taxes (three points).", hint: "Burden, examples, nature.", why: "",
      points: [{ p: "Burden: cannot vs can be shifted", m: 1, k: ["shift"] }, { p: "Examples: income tax vs GST", m: 1, k: ["income tax", "gst"] }, { p: "Progressive vs regressive in nature / levied on income vs goods", m: 1, k: ["progressive", "regressive", "goods", "income"] }],
      model: "<p>(i) <b>Burden:</b> a direct tax is paid by the person on whom it is levied; an indirect tax can be shifted to buyers.</p><p>(ii) <b>Examples:</b> income tax, corporation tax vs GST, customs duty.</p><p>(iii) <b>Nature:</b> direct taxes can be progressive (on income); indirect taxes fall on goods and are often regressive.</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "cr", q: "Distinguish between revenue receipts and capital receipts with two examples each.", hint: "Liability / asset test.", why: "",
      points: [{ p: "Revenue: no liability created, no asset reduced", m: 1, k: ["neither", "no liability"] }, { p: "Capital: creates liability or reduces asset", m: 1, k: ["liability", "asset"] }, { p: "Revenue examples: taxes, dividends, fees", m: 1, k: ["tax", "dividend", "fee"] }, { p: "Capital examples: borrowings, disinvestment, recovery of loans", m: 1, k: ["borrow", "disinvest", "recovery"] }],
      model: "<p><b>Revenue receipts</b> neither create a liability nor reduce assets: e.g. income tax, GST, dividends from PSUs, fees.</p><p><b>Capital receipts</b> either create a liability or reduce assets: e.g. borrowings (liability), disinvestment and recovery of loans (asset reduced).</p>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "fd", q: "Explain any two implications of a high fiscal deficit.", hint: "Debt, inflation, crowding out.", why: "",
      points: [{ p: "Implication 1 named", m: 1, k: ["debt", "inflation", "crowd", "foreign", "future"] }, { p: "Implication 1 explained", m: 1, k: ["interest", "price", "private", "borrow"] }, { p: "Implication 2 named", m: 1, k: ["debt", "inflation", "crowd", "foreign", "future"] }, { p: "Implication 2 explained", m: 1, k: ["interest", "price", "private", "borrow"] }],
      model: "<p>(i) <b>Debt trap:</b> borrowing piles up; interest payments rise and force more borrowing, leaving less for development.</p><p>(ii) <b>Inflation:</b> if the deficit is met by borrowing from the central bank (new money), money supply rises and prices go up. (Also: crowding out of private investment; burden on future generations.)</p>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "rd", q: "From the following (₹ crore), calculate revenue, fiscal and primary deficits: revenue receipts 1,000; revenue expenditure 1,200 (interest 300); borrowings 500; recovery of loans and disinvestment 100; capital expenditure 400. What does each indicate?", hint: "FD should equal 500.", why: "",
      points: [{ p: "RD = 200", m: 1, k: ["200"] }, { p: "RD meaning: dissaving", m: 1, k: ["dissav", "consumption"] }, { p: "FD = 500", m: 1, k: ["500"] }, { p: "FD meaning: borrowing requirement", m: 1, k: ["borrow"] }, { p: "PD = 200", m: 1, k: ["200"] }, { p: "PD meaning: borrowing excluding interest", m: 1, k: ["interest"] }],
      model: "<p>RD = 1,200 − 1,000 = <b>200</b>: the government borrows to meet day-to-day expenses (dissaving).</p><p>FD = (1,200 + 400) − (1,000 + 100) = <b>500</b>: total borrowing requirement (= borrowings).</p><p>PD = 500 − 300 = <b>200</b>: borrowing for current needs, excluding interest on past loans.</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "obj", q: "How can the government budget be used to (a) reallocate resources and (b) bring economic stability? Explain with examples.", hint: "Taxes, subsidies; surplus and deficit.", why: "",
      points: [{ p: "Reallocation: heavy taxes on harmful goods", m: 1, k: ["tax", "harmful", "cigarette"] }, { p: "Reallocation: subsidies / tax relief for desirable goods", m: 1, k: ["subsid", "relief"] }, { p: "Reallocation: direct provision of public goods", m: 1, k: ["public good", "provide"] }, { p: "Stability: inflation → cut spending, raise taxes (surplus)", m: 1, k: ["inflation", "surplus"] }, { p: "Stability: deflation → more spending, lower taxes (deficit)", m: 1, k: ["deflation", "deficit"] }, { p: "Examples given", m: 1, k: ["example", "e.g"] }],
      model: "<p><b>(a) Reallocation of resources:</b> the government taxes harmful goods heavily (e.g. cigarettes), gives subsidies or tax relief for desirable ones (e.g. organic farming, solar panels), and directly provides public goods like roads and parks that markets under-supply.</p><p><b>(b) Economic stability:</b> during inflation, it cuts spending and raises taxes (surplus budget) to reduce aggregate demand; during deflation, it raises spending and cuts taxes (deficit budget) to boost demand and employment.</p>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "obj", q: "The government gives free LPG connections to poor families. Which objective?", o: ["Reallocation", "Redistribution of income", "Managing PSUs", "Stability"], a: 1, hint: "Helps the poor.", why: "<b>Redistribution</b>." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "cr", q: "The government sells 10% of its stake in a public bank. This receipt is", o: ["Revenue, tax", "Revenue, non-tax", "Capital (disinvestment)", "Not a receipt"], a: 2, hint: "Asset reduced.", why: "<b>Capital (disinvestment)</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "pd", q: "Fiscal deficit ₹4,00,000 cr; interest payments ₹4,00,000 cr. This means", o: ["No borrowing", "Borrowing only to pay interest", "Revenue surplus", "Balanced budget"], a: 1, hint: "PD = 0.", why: "<b>Borrowing only to pay interest</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "re", passage: "The government spent ₹2,000 cr on salaries of school teachers.", q: "This is", o: ["Revenue expenditure", "Capital expenditure", "Capital receipt", "Disinvestment"], a: 0, hint: "No asset.", why: "<b>Revenue expenditure</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "fd", passage: "Total expenditure ₹1,600 cr; receipts other than borrowings ₹1,100 cr.", q: "Fiscal deficit is", o: ["₹500 cr", "₹1,100 cr", "₹2,700 cr", "₹200 cr"], a: 0, hint: "Subtract.", why: "<b>₹500 cr</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "fd", passage: "Private firms say bank loans are scarce because the government borrows heavily.", q: "This effect is", o: ["Crowding out", "Debt trap", "Redistribution", "Disinvestment"], a: 0, hint: "Private pushed out.", why: "<b>Crowding out</b>." }
  ],
  find: {
    mcq: [
      { s: "A document listing the government's expected income and spending for 2026-27.", o: ["Government budget", "Balance of payments", "Money supply", "Fiscal policy only"], a: 0, c: "mean", d: "E", why: "<b>Budget</b>." },
      { s: "₹1,500 cr collected as income tax.", o: ["Revenue receipt (tax)", "Capital receipt", "Capital expenditure", "Borrowing"], a: 0, c: "rr", d: "E", why: "<b>Revenue receipt</b>." },
      { s: "₹50 cr earned as passport fees.", o: ["Non-tax revenue", "Tax revenue", "Capital receipt", "Disinvestment"], a: 0, c: "rr", d: "E", why: "<b>Non-tax revenue</b>." },
      { s: "Government raises ₹5,000 cr by selling bonds to the public.", o: ["Capital receipt (borrowing)", "Revenue receipt", "Revenue expenditure", "Grant"], a: 0, c: "cr", d: "E", why: "<b>Borrowing</b>: capital receipt." },
      { s: "A shopkeeper adds GST to the bill; the buyer pays it.", o: ["Indirect tax", "Direct tax", "Capital receipt", "Fine"], a: 0, c: "tax", d: "M", why: "Burden shifted: <b>indirect tax</b>." },
      { s: "₹200 cr spent on building a new AIIMS hospital.", o: ["Capital expenditure", "Revenue expenditure", "Capital receipt", "Subsidy"], a: 0, c: "ce", d: "M", why: "Asset created: <b>capital expenditure</b>." },
      { s: "₹100 cr paid as interest on old loans.", o: ["Revenue expenditure", "Capital expenditure", "Primary deficit", "Disinvestment"], a: 0, c: "re", d: "M", why: "<b>Revenue expenditure</b>." },
      { s: "₹300 cr of an old loan repaid to the World Bank.", o: ["Capital expenditure", "Revenue expenditure", "Capital receipt", "Revenue receipt"], a: 0, c: "ce", d: "M", why: "Liability reduced: <b>capital expenditure</b>." },
      { s: "Tax on luxury cars raised to discourage their production.", o: ["Reallocation of resources", "Redistribution", "Stability", "Growth"], a: 0, c: "obj", d: "M", why: "<b>Reallocation</b>." },
      { s: "Expenditure exceeds receipts in the budget.", o: ["Deficit budget", "Surplus budget", "Balanced budget", "Primary surplus"], a: 0, c: "types", d: "M", why: "<b>Deficit budget</b>." },
      { s: "Revenue expenditure minus revenue receipts.", o: ["Revenue deficit", "Fiscal deficit", "Primary deficit", "Trade deficit"], a: 0, c: "rd", d: "C", why: "<b>Revenue deficit</b>." },
      { s: "Amount the government must borrow in a year.", o: ["Fiscal deficit", "Revenue deficit", "Primary deficit", "Current account deficit"], a: 0, c: "fd", d: "C", why: "<b>Fiscal deficit</b>." },
      { s: "Borrowing excluding interest on past loans.", o: ["Primary deficit", "Fiscal deficit", "Revenue deficit", "Surplus"], a: 0, c: "pd", d: "C", why: "<b>Primary deficit</b>." },
      { s: "Government borrows to pay salaries and subsidies.", o: ["Revenue deficit (dissaving)", "Capital expenditure", "Disinvestment", "Surplus budget"], a: 0, c: "rd", d: "C", why: "Borrowing for consumption: <b>revenue deficit</b>." },
      { s: "Interest payments keep rising, forcing more borrowing each year.", o: ["Debt trap", "Crowding out", "Redistribution", "Balanced budget"], a: 0, c: "fd", d: "C", why: "<b>Debt trap</b>." },
      { s: "Centre gives ₹500 cr to a state for village roads.", o: ["Revenue expenditure (grant)", "Capital expenditure", "Capital receipt", "Loan recovery"], a: 0, c: "re", d: "C", why: "Grants: <b>revenue expenditure</b> for the Centre." }
    ],
    match: [
      { title: "Drag each item onto its classification.", pairs: [["Corporation tax", "Revenue receipt", "rr"], ["Sale of PSU shares", "Capital receipt", "cr"], ["Teachers' salaries", "Revenue expenditure", "re"], ["New flyover", "Capital expenditure", "ce"], ["Total exp − receipts excl. borrowing", "Fiscal deficit", "fd"], ["Fiscal deficit − interest", "Primary deficit", "pd"]] }
    ],
    wrong: [
      { stmts: ["Borrowing is a capital receipt.", "Disinvestment is a capital receipt.", "Recovery of loans is a revenue receipt.", "Income tax is a revenue receipt."], a: 2, c: "cr", why: "Recovery of loans is a <b>capital</b> receipt." },
      { stmts: ["Salaries are revenue expenditure.", "Interest is revenue expenditure.", "Loan repayment is revenue expenditure.", "Building a dam is capital expenditure."], a: 2, c: "ce", why: "Loan repayment is <b>capital</b> expenditure." },
      { stmts: ["FD = Borrowings.", "PD = FD − Interest.", "RD = Revenue exp − Revenue receipts.", "PD = FD + Interest."], a: 3, c: "pd", why: "PD = FD <b>−</b> Interest." }
    ],
    para: [
      { target: "Redistribution of income", c: "obj", sents: ["The budget raised the top income tax rate.", "It used the money for free meals in government schools.", "The budget speech lasted two hours.", "Markets rose the next day."], a: 1, why: "Taxing the rich to help the poor: <b>redistribution</b>." },
      { target: "Capital receipt", c: "cr", sents: ["The government needed funds for highways.", "It sold 5% of its shares in a public oil company.", "The highways will connect ten cities.", "Work starts in May."], a: 1, why: "Share sale reduces assets: <b>capital receipt</b>." },
      { target: "Revenue deficit", c: "rd", sents: ["Salaries, subsidies and interest exceeded tax and non-tax income.", "The government borrowed the difference.", "It also built a new port.", "Exports rose."], a: 0, why: "Revenue expenditure > revenue receipts: <b>revenue deficit</b>." }
    ],
    explain: [
      { s: "Government's receipt that will have to be repaid with interest.", o: ["Borrowing (capital receipt)", "Tax", "Fee", "Grant"], a: 0, c: "cr", why: "The clue is <i>repaid</i>: a liability, so <b>borrowing</b>." },
      { s: "Spending on salaries is high even though no new assets are built.", o: ["Revenue expenditure", "Capital expenditure", "Disinvestment", "Primary deficit"], a: 0, c: "re", why: "<b>Revenue expenditure</b>." },
      { s: "Budget with spending cuts and tax increases during high inflation.", o: ["Surplus budget for stability", "Deficit budget", "Redistribution", "Balanced budget"], a: 0, c: "types", why: "<b>Surplus budget</b> to fight inflation." },
      { s: "Primary deficit is negative.", o: ["Interest exceeds fiscal deficit", "Fiscal deficit exceeds interest", "No borrowing at all", "Revenue surplus"], a: 0, c: "pd", why: "FD − interest < 0 → <b>interest exceeds FD</b>." }
    ]
  }
});
