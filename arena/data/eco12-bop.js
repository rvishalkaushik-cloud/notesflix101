/* Revision Arena · Class XII Economics · Unit 5 · Balance of Payments (Parts 1-2). Original cases; figures recomputed. */
NFArena.register({
  id: "eco12-bop", cls: "XII", subject: "Economics", unit: "Unit", num: "5",
  title: "Balance of Payments",
  tagline: "The BoP account, current and capital account, trade balance, and how exchange rates are fixed or float.",
  notesLink: "../#eco12-bop",
  concepts: {
    bopm: { n: "Meaning of balance of payments", s: "bop" },
    ca: { n: "Current account (visibles and invisibles)", s: "bop" },
    bot: { n: "Balance of trade vs balance on current account", s: "bop" },
    kac: { n: "Capital account", s: "bop" },
    auto: { n: "Autonomous and accommodating transactions; BoP deficit", s: "bop" },
    fxr: { n: "Foreign exchange rate", s: "fx" },
    dd: { n: "Demand and supply of foreign exchange", s: "fx" },
    regime: { n: "Fixed, flexible and managed floating rates", s: "regime" },
    dep: { n: "Depreciation/devaluation and appreciation/revaluation", s: "regime" }
  },
  overview: {
    text: "The <b>balance of payments (BoP)</b> is a systematic record of all economic transactions between the residents of a country and the rest of the world during a year. It has a <b>current account</b> (trade in goods and services, income and transfers) and a <b>capital account</b> (investment, loans and banking capital). The price of foreign currency, the <b>exchange rate</b>, may be fixed by government, set by the market, or managed.",
    points: [
      "<b>Balance of trade</b> = Visible exports − Visible imports (goods only).",
      "<b>Current account balance</b> = trade in goods + services + income + transfers.",
      "BoP surplus or deficit is judged on <b>autonomous</b> transactions; <b>accommodating</b> ones fill the gap.",
      "A rise in the ₹ per $ rate means the rupee has <b>depreciated</b>: exports become cheaper abroad."
    ],
    map: {
      center: "Balance of Payments",
      branches: [
        { t: "Current account", c: ["Visible trade", "Services", "Income", "Transfers"] },
        { t: "Capital account", c: ["FDI and FPI", "Borrowings", "Banking capital"] },
        { t: "Balance", c: ["Balance of trade", "Autonomous vs accommodating", "BoP deficit"] },
        { t: "Exchange rate", c: ["Demand and supply", "Fixed / flexible / managed", "Depreciation vs devaluation"] }
      ]
    }
  },
  sections: [
    {
      id: "bop", title: "The balance of payments account", sub: "Recording a country's dealings with the world", icon: "🌍", color: "#4da3ff",
      quick: [
        "<b>Current account</b>: (i) <b>visible trade</b> (export and import of goods); (ii) <b>invisibles</b>: services (travel, transport, IT, insurance), income (interest, profit, compensation of employees), and transfers (remittances, gifts, grants).",
        "<b>Capital account</b>: foreign direct investment (FDI), portfolio investment (FPI), external borrowings (commercial loans, aid), banking capital (NRI deposits), and change in foreign exchange reserves.",
        "<b>Current account</b> transactions do not change assets or liabilities; <b>capital account</b> transactions do.",
        "<b>Autonomous transactions</b>: made for economic motives (profit, trade), independent of the BoP position ('above the line'). <b>Accommodating transactions</b>: made to cover a gap in autonomous ones (drawing on reserves, borrowing from the IMF; 'below the line').",
        "<b>BoP deficit</b>: autonomous receipts < autonomous payments. In the accounting sense, the BoP always balances."
      ],
      table: { cap: "Where does it go?", head: ["Transaction", "Account", "Item"], rows: [["Export of rice", "Current", "Visible trade"], ["IT services sold to a US firm", "Current", "Services (invisible)"], ["Remittance from a worker in Dubai", "Current", "Transfer"], ["Interest paid on a foreign loan", "Current", "Income"], ["A Japanese firm builds a factory in India", "Capital", "FDI"], ["Foreign fund buys Indian shares", "Capital", "Portfolio investment"], ["NRI deposits in an Indian bank", "Capital", "Banking capital"]] },
      cards: [
        { t: "Worked example", tag: "eg", b: "<p>Visible exports ₹500 cr; visible imports ₹700 cr; net invisibles +₹150 cr.</p><p>Balance of trade = <b>−₹200 cr</b> (deficit). Current account balance = −200 + 150 = <b>−₹50 cr</b>.</p>" },
        { t: "Trade balance vs current account", tag: "tip", b: "<p>Balance of trade covers only <b>goods</b>; current account balance adds services, income and transfers. India often has a trade deficit but a smaller current account deficit thanks to IT services and remittances.</p>" }
      ],
      exam: ["'Purchase of a foreign company's shares' → capital account (asset created)."]
    },
    {
      id: "fx", title: "Foreign exchange rate", sub: "The price of a foreign currency", icon: "💱", color: "#22c55e",
      quick: [
        "<b>Foreign exchange rate</b>: price of one unit of foreign currency in terms of domestic currency (e.g. ₹84 = $1).",
        "<b>Demand for foreign exchange</b> comes from: imports, travel and study abroad, investment abroad, gifts sent abroad, repaying foreign loans. Demand curve slopes <b>downward</b>: at a higher rate, imports are costlier, so less foreign currency is demanded.",
        "<b>Supply of foreign exchange</b> comes from: exports, foreign tourists, foreign investment in India, remittances. Supply curve slopes <b>upward</b>: at a higher rate, exports are cheaper abroad, so more foreign currency comes in.",
        "In a free market, the rate is set where demand equals supply."
      ],
      cards: [
        { t: "Why a higher rate cuts demand for dollars", tag: "why", b: "<p>If ₹/$ rises from 80 to 84, a $100 import costs ₹8,400 instead of ₹8,000. Imports fall, so demand for dollars falls.</p>" },
        { t: "Shift of the curves", tag: "eg", b: "<p>A boom in Indian software exports raises the <b>supply</b> of dollars, shifting the supply curve right: the rate falls (rupee appreciates).</p>" }
      ],
      exam: ["Always say whose currency becomes cheaper or dearer."]
    },
    {
      id: "regime", title: "Exchange rate systems", sub: "Fixed, flexible, managed", icon: "🎛️", color: "#f5b301",
      quick: [
        "<b>Fixed (pegged) rate</b>: set by the government or central bank. Merits: stability, encourages trade and investment, prevents speculation. Demerits: needs large reserves, may hide true value, discourages efficiency.",
        "<b>Flexible (floating) rate</b>: set by market demand and supply. Merits: no need for reserves, BoP corrects itself, efficient use of resources. Demerits: instability, uncertainty, speculation.",
        "<b>Managed floating</b>: market decides, but the central bank intervenes (buys or sells foreign currency) to limit wide swings. India follows this.",
        "<b>Depreciation</b>: fall in value of domestic currency in a <b>flexible</b> system (market). <b>Devaluation</b>: deliberate reduction by the government in a <b>fixed</b> system. <b>Appreciation / revaluation</b> are the opposites."
      ],
      table: { cap: "Depreciation vs devaluation", head: ["Basis", "Depreciation", "Devaluation"], rows: [["System", "Flexible", "Fixed"], ["Caused by", "Market forces", "Government decision"], ["Example", "₹/$ rises 80 → 84 in the market", "Government resets peg from 80 to 84"]] },
      cards: [
        { t: "Effect of rupee depreciation on exports", tag: "why", b: "<p>When the rupee depreciates, Indian goods become cheaper for foreigners, so <b>exports rise</b>; imports become dearer, so <b>imports fall</b>.</p>" }
      ],
      exam: ["'RBI sells dollars when the rupee falls sharply' → managed floating."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "bopm", q: "What is balance of payments?", a: "A systematic record of all economic transactions between residents of a country and the rest of the world in a year." },
    { k: "Accounts", c: "ca", q: "Name the four parts of the current account.", a: "Visible trade, services, income, transfers." },
    { k: "Formula", c: "bot", q: "Balance of trade?", a: "Visible exports − Visible imports." },
    { k: "Invisibles", c: "ca", q: "Give two examples of invisibles.", a: "IT services exports, remittances (also tourism, interest income)." },
    { k: "Capital", c: "kac", q: "Name three items of the capital account.", a: "FDI, portfolio investment, external borrowings (also banking capital)." },
    { k: "Capital", c: "kac", q: "FDI vs FPI?", a: "FDI: controlling stake/new business; FPI: buying shares and bonds without control." },
    { k: "Transactions", c: "auto", q: "What are autonomous transactions?", a: "Transactions for economic motives, independent of the BoP position ('above the line')." },
    { k: "Transactions", c: "auto", q: "What are accommodating transactions?", a: "Transactions to cover a gap in autonomous receipts and payments ('below the line')." },
    { k: "Deficit", c: "auto", q: "When is there a BoP deficit?", a: "When autonomous payments exceed autonomous receipts." },
    { k: "Definition", c: "fxr", q: "What is the foreign exchange rate?", a: "Price of one unit of foreign currency in terms of domestic currency." },
    { k: "Demand", c: "dd", q: "Why does the demand curve for foreign exchange slope down?", a: "A higher rate makes imports costlier, so less foreign currency is demanded." },
    { k: "Supply", c: "dd", q: "Name two sources of supply of foreign exchange.", a: "Exports and foreign investment (also tourism, remittances)." },
    { k: "System", c: "regime", q: "What is a flexible exchange rate?", a: "A rate determined by market demand and supply of foreign exchange." },
    { k: "System", c: "regime", q: "What is managed floating?", a: "Market-determined rate with central bank intervention to limit fluctuations." },
    { k: "Term", c: "dep", q: "Depreciation vs devaluation?", a: "Depreciation: market fall (flexible system). Devaluation: government cut (fixed system)." },
    { k: "Effect", c: "dep", q: "Effect of rupee depreciation on exports?", a: "Exports rise because Indian goods become cheaper abroad." },
    { k: "Effect", c: "dep", q: "₹/$ falls from 84 to 80. What happened to the rupee?", a: "It appreciated." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Sorting India's transactions",
      text: "<p>During a year: Indian firms exported textiles worth $20 bn; an Indian IT firm earned $5 bn for software services; Indian workers in the Gulf sent home $8 bn; a Korean car maker set up a $3 bn plant in Chennai; and a foreign mutual fund bought Indian shares worth $2 bn.</p>",
      qs: [
        { q: "Classify each transaction into the current or capital account and name the sub-head.", m: 5, type: "Classify", c: "ca", ans: "Visible trade; services; transfers; FDI; portfolio investment", keys: ["visible", "fdi", "portfolio"], hint: "Does it create an asset or liability?",
          points: [{ p: "Textile exports: current, <b>visible trade</b>", m: 1, k: ["visible"] }, { p: "Software services: current, <b>services (invisible)</b>", m: 1, k: ["service", "invisible"] }, { p: "Gulf remittances: current, <b>transfers</b>", m: 1, k: ["transfer", "remittance"] }, { p: "Korean plant: capital, <b>FDI</b>", m: 1, k: ["fdi", "direct"] }, { p: "Mutual fund shares: capital, <b>portfolio investment</b>", m: 1, k: ["portfolio", "fpi"] }],
          structure: ["Transaction → account → sub-head."],
          model: "<p>(i) Textile exports $20 bn: <b>current account</b>, visible trade.</p><p>(ii) Software services $5 bn: <b>current account</b>, services (invisible).</p><p>(iii) Gulf remittances $8 bn: <b>current account</b>, transfers.</p><p>(iv) Korean car plant $3 bn: <b>capital account</b>, foreign direct investment.</p><p>(v) Mutual fund buying shares $2 bn: <b>capital account</b>, portfolio investment.</p>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "Trade deficit, smaller current deficit",
      text: "<p>Sundar's figures (₹ crore): visible exports 500; visible imports 700; services exports 180; services imports 80; net income from abroad −20; net transfers +70.</p>",
      qs: [
        { q: "Calculate the balance of trade and the current account balance. Explain why they differ.", m: 4, type: "Calculate and explain", c: "bot", ans: "BoT −200; net invisibles +150; CA −50", keys: ["-200", "−200", "-50", "−50"], hint: "Net invisibles = 100 − 20 + 70.",
          points: [{ p: "BoT = 500 − 700 = <b>−200</b>", m: 1, k: ["200"] }, { p: "Net invisibles = (180 − 80) − 20 + 70 = <b>+150</b>", m: 1, k: ["150"] }, { p: "Current account = −200 + 150 = <b>−50</b>", m: 1, k: ["50"] }, { p: "Differ because BoT covers goods only; CA adds services, income, transfers", m: 1, k: ["goods only", "invisible", "services"] }],
          structure: ["BoT, net invisibles, CA, reason."],
          model: "<p>Balance of trade = 500 − 700 = <b>−₹200 crore</b> (deficit).</p><p>Net invisibles = (180 − 80) + (−20) + 70 = <b>+₹150 crore</b>.</p><p>Current account balance = −200 + 150 = <b>−₹50 crore</b>.</p><p>They differ because the balance of trade counts only <b>goods</b>, while the current account also counts services, income and transfers, which are in surplus here.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "The rupee slides",
      text: "<p>The rupee moved from ₹80 to ₹84 per US dollar in a year, purely due to market forces. An Indian tea exporter is happy; an Indian student going to the US is worried.</p>",
      qs: [
        { q: "Name the change in the rupee and explain why the exporter is happy and the student is worried.", m: 3, type: "Apply", c: "dep", ans: "Depreciation; exports cheaper; foreign costs dearer", keys: ["depreciat"], hint: "Market forces.",
          points: [{ p: "<b>Depreciation</b> of the rupee (market-driven)", m: 1, k: ["depreciat"] }, { p: "Exporter: Indian tea cheaper abroad, more sales / more rupees per dollar", m: 1, k: ["cheaper", "more rupees", "export"] }, { p: "Student: US fees cost more rupees", m: 1, k: ["more rupees", "costl", "dearer"] }],
          structure: ["Name, effect on exporter, effect on student."],
          model: "<p>The rupee has <b>depreciated</b> (a market-driven fall in a flexible system).</p><p>The <b>exporter</b> gains: Indian tea becomes cheaper for foreign buyers, and each dollar earned now fetches ₹84 instead of ₹80.</p><p>The <b>student</b> loses: a $10,000 fee now costs ₹8,40,000 instead of ₹8,00,000.</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "Who sets the rate?",
      text: "<p>Country A keeps its currency at exactly 10 units per dollar by law and buys or sells dollars to hold it there. Country B lets its rate change every minute with demand and supply. Country C lets the market decide but its central bank sells dollars when its currency falls sharply.</p>",
      qs: [
        { q: "Name each exchange-rate system and give one merit and one demerit of the systems used by A and B.", m: 6, type: "Identify and evaluate", c: "regime", ans: "A fixed; B flexible; C managed floating", keys: ["fixed", "flexible", "managed"], hint: "Law, market, market + intervention.",
          points: [{ p: "A: <b>fixed</b> exchange rate", m: 1, k: ["fixed", "peg"] }, { p: "B: <b>flexible</b> exchange rate", m: 1, k: ["flexible", "float"] }, { p: "C: <b>managed floating</b>", m: 1, k: ["managed"] }, { p: "Fixed merit: stability; demerit: needs large reserves", m: 1, k: ["stabil", "reserve"] }, { p: "Flexible merit: no reserves needed / self-correcting BoP", m: 1, k: ["no reserve", "self", "automatic"] }, { p: "Flexible demerit: instability, speculation", m: 1, k: ["instab", "specul", "uncertain"] }],
          structure: ["Name three systems; merit and demerit for A and B."],
          model: "<p>A: <b>fixed exchange rate</b>. B: <b>flexible (floating) exchange rate</b>. C: <b>managed floating</b>.</p><p><b>Fixed (A):</b> merit: stable rate encourages trade and investment; demerit: the government needs large foreign exchange reserves to defend it.</p><p><b>Flexible (B):</b> merit: no need for reserves and the BoP adjusts automatically; demerit: frequent changes create uncertainty and encourage speculation.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Filling the gap",
      text: "<p>In 2025-26, Sundar's autonomous payments (imports, investments abroad) exceeded its autonomous receipts by $12 bn. The central bank sold $8 bn from its reserves and the government borrowed $4 bn from the IMF.</p>",
      qs: [
        { q: "Is there a BoP deficit? Identify the accommodating transactions and explain the difference between autonomous and accommodating transactions.", m: 4, type: "Analyse", c: "auto", ans: "Yes, BoP deficit $12 bn; reserves and IMF loan are accommodating", keys: ["deficit", "accommodating"], hint: "Above and below the line.",
          points: [{ p: "Yes: BoP deficit of <b>$12 bn</b> (autonomous payments > receipts)", m: 1, k: ["deficit", "12"] }, { p: "Accommodating: sale of reserves $8 bn and IMF loan $4 bn", m: 1, k: ["reserve", "imf"] }, { p: "Autonomous: for economic motives, independent of BoP", m: 1, k: ["motive", "independent", "profit"] }, { p: "Accommodating: to cover the gap in autonomous transactions", m: 1, k: ["cover", "gap", "fill"] }],
          structure: ["Verdict, the two accommodating items, the distinction."],
          model: "<p>Yes: autonomous payments exceed autonomous receipts by <b>$12 bn</b>, so there is a <b>BoP deficit</b>.</p><p>The <b>accommodating transactions</b> are the sale of $8 bn of reserves and the $4 bn IMF loan.</p><p><b>Autonomous transactions</b> are undertaken for economic motives like profit or trade, independent of the BoP position. <b>Accommodating transactions</b> are undertaken only to cover the gap left by autonomous ones.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "bot", q: "Balance of trade includes:", o: ["Goods only", "Services only", "Goods and services", "Capital flows"], a: 0, hint: "Visibles.", why: "<b>Goods only</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "ca", q: "Remittances from Indians working abroad are recorded in:", o: ["Capital account", "Current account", "Reserves", "Not recorded"], a: 1, hint: "Transfers.", why: "<b>Current account</b> (transfers)." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "kac", q: "FDI is part of the:", o: ["Current account", "Capital account", "Trade balance", "Invisibles"], a: 1, hint: "Creates assets/liabilities.", why: "<b>Capital account</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "dd", q: "A rise in foreign tourists coming to India will:", o: ["Raise demand for dollars", "Raise supply of dollars", "Reduce exports", "Cause devaluation"], a: 1, hint: "They bring dollars.", why: "<b>Supply of dollars rises</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "dep", q: "₹/$ changes from 82 to 86 in the market. The rupee has:", o: ["Appreciated", "Depreciated", "Been devalued", "Been revalued"], a: 1, hint: "More rupees per dollar, market.", why: "<b>Depreciated</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "regime", q: "India's exchange rate system is:", o: ["Fixed", "Freely floating", "Managed floating", "Gold standard"], a: 2, hint: "Market + RBI intervention.", why: "<b>Managed floating</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "auto", q: "Which is an accommodating transaction?", o: ["Export of tea", "FDI in a new plant", "Borrowing from the IMF to meet a deficit", "Remittances"], a: 2, hint: "Covers a gap.", why: "<b>Borrowing from IMF</b> to meet a deficit." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "bot", q: "Exports ₹500 cr; imports ₹700 cr; net invisibles +₹150 cr. Current account balance:", o: ["−₹200 cr", "−₹50 cr", "+₹150 cr", "+₹50 cr"], a: 1, hint: "−200 + 150.", why: "<b>−₹50 cr</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "dep", q: "Depreciation of the rupee encourages Indian exports.", r: "Indian goods become cheaper for foreign buyers.", a: 0, hint: "Cheaper abroad.", why: "Both true; R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "dep", q: "Devaluation takes place in a flexible exchange rate system.", r: "Devaluation is a deliberate decision of the government.", a: 3, hint: "Which system?", why: "A false (fixed system); R true." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "dd", q: "The demand curve for foreign exchange slopes downward.", r: "A higher exchange rate makes imports more expensive.", a: 0, hint: "Fewer imports.", why: "Both true; R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "bopm", q: "BoP records transactions between residents and non-residents.", a: true, hint: "Rest of the world.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "ca", q: "Export of software services is a visible item.", a: false, hint: "Can you see it?", why: "False: <b>invisible</b>." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "regime", q: "A fixed exchange rate needs large foreign exchange reserves.", a: true, hint: "To defend the peg.", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "kac", q: "Match the transaction with its BoP item.", pairs: [["Export of cotton", "Visible trade"], ["Tourism earnings", "Services"], ["Gift from a relative abroad", "Transfers"], ["Foreign firm buys a 60% stake", "FDI"]], hint: "Goods, services, transfers, investment.", why: "Each transaction has one item." },
    { id: "q16", t: "match", d: "M", m: 4, c: "regime", q: "Match the term with its meaning.", pairs: [["Devaluation", "Government cuts value under fixed rate"], ["Depreciation", "Market fall under flexible rate"], ["Revaluation", "Government raises value under fixed rate"], ["Appreciation", "Market rise under flexible rate"]], hint: "Government vs market; up vs down.", why: "Each term has one meaning." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "bot", q: "Visible exports − visible imports = balance of ______.", acc: ["trade"], hint: "Goods.", why: "Trade." },
    { id: "q18", t: "fill", d: "M", m: 1, c: "auto", q: "Transactions made only to cover a BoP gap are called ______ transactions.", acc: ["accommodating", "accomodating"], hint: "Below the line.", why: "Accommodating." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "dep", q: "A fall in the value of a currency under a fixed system by government decision is ______.", acc: ["devaluation"], hint: "Not depreciation.", why: "Devaluation." },
    { id: "q20", t: "short", d: "E", m: 1, c: "fxr", q: "What is the price of one foreign currency in terms of domestic currency called?", acc: ["exchange rate", "foreign exchange rate"], hint: "₹/$.", why: "Foreign exchange rate." },
    { id: "q21", t: "short", d: "M", m: 1, c: "dd", q: "Name one source of demand for foreign exchange.", acc: ["imports", "import", "travel abroad", "investment abroad", "gifts abroad"], hint: "Paying foreigners.", why: "Imports (also travel, investment abroad)." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "ca", q: "Name the components of the current account with one example each.", hint: "Visible, services, income, transfers.", why: "",
      points: [{ p: "Visible trade (goods) with example", m: 1, k: ["visible", "goods"] }, { p: "Services / income with example", m: 1, k: ["service", "income"] }, { p: "Transfers with example", m: 1, k: ["transfer", "remittance"] }],
      model: "<p>(i) <b>Visible trade:</b> export and import of goods, e.g. export of rice.</p><p>(ii) <b>Services and income:</b> e.g. software exports, tourism; interest and profits on investments.</p><p>(iii) <b>Transfers:</b> one-way payments like remittances and gifts.</p>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "dd", q: "Give three sources of supply of foreign exchange.", hint: "Money coming in.", why: "",
      points: [{ p: "Exports of goods and services", m: 1, k: ["export"] }, { p: "Foreign investment (FDI/FPI)", m: 1, k: ["investment", "fdi"] }, { p: "Remittances / tourism", m: 1, k: ["remittance", "tourist", "tourism"] }],
      model: "<p>(i) <b>Exports</b> of goods and services by India.</p><p>(ii) <b>Foreign investment</b> (FDI and portfolio) into India.</p><p>(iii) <b>Remittances</b> from Indians abroad and spending by <b>foreign tourists</b> in India.</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "regime", q: "Distinguish between fixed and flexible exchange rate systems on four bases.", hint: "Who decides, reserves, stability, adjustment.", why: "",
      points: [{ p: "Determined by government vs market", m: 1, k: ["government", "market"] }, { p: "Reserves needed vs not needed", m: 1, k: ["reserve"] }, { p: "Stable vs fluctuating", m: 1, k: ["stab", "fluctuat"] }, { p: "Devaluation/revaluation vs depreciation/appreciation", m: 1, k: ["devaluation", "depreciation"] }],
      model: "<table><tr><th>Basis</th><th>Fixed</th><th>Flexible</th></tr><tr><td>Set by</td><td>Government / central bank</td><td>Market demand and supply</td></tr><tr><td>Reserves</td><td>Large reserves needed</td><td>Not needed</td></tr><tr><td>Stability</td><td>Stable</td><td>Fluctuates</td></tr><tr><td>Change called</td><td>Devaluation / revaluation</td><td>Depreciation / appreciation</td></tr></table>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "auto", q: "Distinguish between autonomous and accommodating transactions and explain when a BoP is in deficit.", hint: "Motive; above/below the line.", why: "",
      points: [{ p: "Autonomous: economic motive, independent of BoP", m: 1, k: ["motive", "independent"] }, { p: "Accommodating: to cover the gap", m: 1, k: ["cover", "gap"] }, { p: "Autonomous above the line; accommodating below the line", m: 1, k: ["above", "below"] }, { p: "Deficit: autonomous payments > autonomous receipts", m: 1, k: ["payments", "exceed", "deficit"] }],
      model: "<p><b>Autonomous transactions</b> are made for economic motives such as profit or trade, regardless of the BoP position ('above the line'). <b>Accommodating transactions</b> are made only to fill the gap left by autonomous ones, e.g. using reserves or IMF loans ('below the line').</p><p>The BoP is in <b>deficit</b> when autonomous payments exceed autonomous receipts.</p>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "dd", q: "Explain how the exchange rate is determined in a flexible system. What happens if demand for dollars rises?", hint: "Downward demand, upward supply.", why: "",
      points: [{ p: "Demand for foreign exchange: sources and downward slope", m: 1, k: ["import", "downward"] }, { p: "Supply: sources and upward slope", m: 1, k: ["export", "upward"] }, { p: "Equilibrium where demand = supply", m: 1, k: ["equal", "equilibrium"] }, { p: "Rise in demand shifts curve right", m: 1, k: ["shift", "right"] }, { p: "Rate rises (rupee depreciates)", m: 1, k: ["rise", "depreciat"] }, { p: "Quantity exchanged rises", m: 1, k: ["quantity"] }],
      model: "<p><b>Demand for dollars</b> comes from imports, travel and investment abroad. It slopes downward: a higher rate makes imports dearer, so fewer dollars are demanded.</p><p><b>Supply of dollars</b> comes from exports, foreign investment and remittances. It slopes upward: a higher rate makes Indian goods cheaper abroad, so more dollars flow in.</p><p>The rate settles where demand equals supply.</p><p>If <b>demand for dollars rises</b> (say, imports of oil increase), the demand curve shifts right. At the old rate there is excess demand, so the rate <b>rises</b> (the rupee depreciates) and more dollars are exchanged at the new equilibrium.</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "kac", q: "Explain the components of the capital account of the BoP with examples.", hint: "FDI, FPI, borrowings, banking capital, reserves.", why: "",
      points: [{ p: "FDI with example", m: 1, k: ["fdi", "direct"] }, { p: "Portfolio investment with example", m: 1, k: ["portfolio", "fpi"] }, { p: "External borrowings with example", m: 1, k: ["borrow", "loan", "ecb"] }, { p: "Banking capital (NRI deposits)", m: 1, k: ["nri", "banking"] }, { p: "Change in foreign exchange reserves", m: 1, k: ["reserve"] }, { p: "Capital account changes assets/liabilities", m: 1, k: ["asset", "liabilit"] }],
      model: "<p>The capital account records transactions that change the <b>assets or liabilities</b> of residents abroad:</p><p>(i) <b>FDI:</b> a foreign firm sets up or controls a business in India (e.g. a Korean car plant in Chennai).</p><p>(ii) <b>Portfolio investment:</b> purchase of shares and bonds without control.</p><p>(iii) <b>External borrowings:</b> commercial loans from foreign banks, aid from other governments.</p><p>(iv) <b>Banking capital:</b> NRI deposits in Indian banks.</p><p>(v) <b>Change in foreign exchange reserves</b> held by the RBI.</p>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "dep", q: "After the rupee depreciates, a foreign buyer finds Indian handicrafts", o: ["Costlier", "Cheaper", "Unchanged", "Banned"], a: 1, hint: "More rupees per dollar.", why: "<b>Cheaper</b>." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "regime", q: "The RBI sells dollars when the rupee falls too fast. This is", o: ["Fixed rate", "Free float", "Managed floating", "Devaluation"], a: 2, hint: "Intervention.", why: "<b>Managed floating</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "dd", q: "A surge in Indian students going abroad will", o: ["Raise supply of dollars", "Raise demand for dollars", "Appreciate the rupee", "Lower imports"], a: 1, hint: "They pay fees in dollars.", why: "<b>Demand for dollars rises</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "ca", passage: "An Indian software company earns $2 bn for services to US banks.", q: "This is recorded as", o: ["Visible export", "Invisible export (services)", "FDI", "Transfer"], a: 1, hint: "Service.", why: "<b>Invisible export</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "kac", passage: "A US pension fund buys shares of Indian companies worth $1 bn without seeking control.", q: "This is", o: ["FDI", "Portfolio investment", "Remittance", "Visible trade"], a: 1, hint: "No control.", why: "<b>Portfolio investment</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "auto", passage: "To meet a shortfall, the central bank sells $5 bn of its reserves.", q: "This transaction is", o: ["Autonomous", "Accommodating", "Visible", "A transfer"], a: 1, hint: "Covers a gap.", why: "<b>Accommodating</b>." }
  ],
  find: {
    mcq: [
      { s: "A record of all India's transactions with the rest of the world in 2025-26.", o: ["Balance of payments", "Balance of trade", "Budget", "National income"], a: 0, c: "bopm", d: "E", why: "<b>BoP</b>." },
      { s: "Exports of rice minus imports of crude oil and gold.", o: ["Balance of trade", "Current account", "Capital account", "Reserves"], a: 0, c: "bot", d: "E", why: "<b>Balance of trade</b>." },
      { s: "Indians in the Gulf send money home to families.", o: ["Transfers (current account)", "FDI", "Visible trade", "Banking capital"], a: 0, c: "ca", d: "E", why: "<b>Transfers</b>." },
      { s: "A Japanese company builds a factory in India.", o: ["FDI (capital account)", "Portfolio investment", "Services", "Transfer"], a: 0, c: "kac", d: "E", why: "<b>FDI</b>." },
      { s: "Indian airline earns from foreign passengers.", o: ["Services (invisible)", "Visible trade", "FDI", "Borrowing"], a: 0, c: "ca", d: "M", why: "Transport service: <b>invisible</b>." },
      { s: "NRIs deposit dollars in Indian bank accounts.", o: ["Banking capital", "Visible trade", "Transfer", "Services"], a: 0, c: "kac", d: "M", why: "<b>Banking capital</b>." },
      { s: "₹84 needed to buy one US dollar.", o: ["Foreign exchange rate", "Balance of trade", "Repo rate", "Tariff"], a: 0, c: "fxr", d: "M", why: "<b>Exchange rate</b>." },
      { s: "More foreign tourists visit India during a cricket World Cup.", o: ["Supply of foreign exchange rises", "Demand rises", "Devaluation", "BoP deficit"], a: 0, c: "dd", d: "M", why: "<b>Supply</b> of dollars rises." },
      { s: "Indian companies import more crude oil.", o: ["Demand for foreign exchange rises", "Supply rises", "Appreciation", "Revaluation"], a: 0, c: "dd", d: "M", why: "<b>Demand</b> for dollars rises." },
      { s: "Market pushes ₹/$ from 80 to 84.", o: ["Depreciation", "Devaluation", "Appreciation", "Revaluation"], a: 0, c: "dep", d: "M", why: "<b>Depreciation</b>." },
      { s: "Government officially changes the pegged rate from 10 to 12 per dollar.", o: ["Devaluation", "Depreciation", "Appreciation", "Managed float"], a: 0, c: "dep", d: "C", why: "<b>Devaluation</b>." },
      { s: "Rate changes every minute with demand and supply, no intervention.", o: ["Flexible exchange rate", "Fixed rate", "Managed floating", "Gold standard"], a: 0, c: "regime", d: "C", why: "<b>Flexible</b>." },
      { s: "Market sets the rate, but the central bank steps in to smooth big swings.", o: ["Managed floating", "Fixed", "Free float", "Barter"], a: 0, c: "regime", d: "C", why: "<b>Managed floating</b>." },
      { s: "IMF loan taken to cover a BoP shortfall.", o: ["Accommodating transaction", "Autonomous transaction", "FDI", "Visible trade"], a: 0, c: "auto", d: "C", why: "<b>Accommodating</b>." },
      { s: "Autonomous payments exceed autonomous receipts by $12 bn.", o: ["BoP deficit", "BoP surplus", "Trade surplus", "Revaluation"], a: 0, c: "auto", d: "C", why: "<b>BoP deficit</b>." },
      { s: "₹/$ falls from 84 to 80 in the market.", o: ["Appreciation of rupee", "Depreciation", "Devaluation", "Revaluation"], a: 0, c: "dep", d: "C", why: "Fewer rupees per dollar: <b>appreciation</b>." }
    ],
    match: [
      { title: "Drag each situation onto its concept.", pairs: [["Rice exports − oil imports", "Balance of trade", "bot"], ["Money sent home from Dubai", "Transfers", "ca"], ["Korean car plant in Chennai", "FDI", "kac"], ["IMF loan to cover a gap", "Accommodating transaction", "auto"], ["Market pushes ₹/$ from 80 to 84", "Depreciation", "dep"], ["RBI sells dollars to steady the rupee", "Managed floating", "regime"]] }
    ],
    wrong: [
      { stmts: ["Balance of trade covers goods only.", "Remittances are in the current account.", "FDI is in the current account.", "Portfolio investment is in the capital account."], a: 2, c: "kac", why: "FDI is in the <b>capital account</b>." },
      { stmts: ["Depreciation happens under flexible rates.", "Devaluation happens under fixed rates.", "Depreciation makes exports dearer abroad.", "Appreciation is a market rise in value."], a: 2, c: "dep", why: "Depreciation makes exports <b>cheaper</b> abroad." },
      { stmts: ["Demand for dollars slopes downward.", "Supply of dollars slopes upward.", "Imports add to supply of dollars.", "Exports add to supply of dollars."], a: 2, c: "dd", why: "Imports add to <b>demand</b> for dollars." }
    ],
    para: [
      { target: "Invisible export", c: "ca", sents: ["Infotech Ltd is based in Pune.", "It wrote banking software for a London bank and was paid $3 m.", "It has 2,000 employees.", "Its office has a large cafeteria."], a: 1, why: "Selling software services abroad: <b>invisible export</b>." },
      { target: "Depreciation", c: "dep", sents: ["Sundar has a floating exchange rate.", "Oil imports rose sharply.", "Demand for dollars pushed the rate from 80 to 85 per dollar.", "Tourists still visited the beaches."], a: 2, why: "Market rise in ₹/$: <b>depreciation</b>." },
      { target: "Accommodating transaction", c: "auto", sents: ["Sundar's imports far exceeded exports.", "Foreign investors also pulled money out.", "The central bank drew $6 bn from its reserves to pay for the gap.", "The finance minister gave a speech."], a: 2, why: "Using reserves to cover a gap: <b>accommodating</b>." }
    ],
    explain: [
      { s: "A country records its imports of machines and its exports of tea.", o: ["Visible trade in current account", "Capital account", "Reserves", "Transfers"], a: 0, c: "ca", why: "The clue is <i>machines and tea</i>, goods: <b>visible trade</b>." },
      { s: "Foreign students pay fees to Indian universities.", o: ["Supply of foreign exchange", "Demand for foreign exchange", "Devaluation", "FDI"], a: 0, c: "dd", why: "Money comes in: <b>supply</b>." },
      { s: "Exchange rate is guaranteed by law and never changes.", o: ["Fixed exchange rate", "Flexible", "Managed floating", "Depreciation"], a: 0, c: "regime", why: "<b>Fixed</b>." },
      { s: "Purchase of a 70% stake in an Indian firm by a foreign company.", o: ["FDI", "Portfolio investment", "Transfer", "Visible import"], a: 0, c: "kac", why: "Controlling stake: <b>FDI</b>." }
    ]
  }
});
