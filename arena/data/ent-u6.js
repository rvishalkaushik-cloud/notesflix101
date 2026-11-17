/* Revision Arena · Class XII Entrepreneurship · Unit 6 · Resource Mobilization. Original cases; figures recomputed. */
NFArena.register({
  id: "ent-u6", cls: "XII", subject: "Entrepreneurship", unit: "Unit", num: "6",
  title: "Resource Mobilization",
  tagline: "From the owner's savings to angel investors, venture capital and the stock exchange: how a growing business finds money.",
  notesLink: "../#ent-u6",
  concepts: {
    need: { n: "Need for funds: fixed and working capital", s: "basics" },
    src: { n: "Owned vs borrowed funds", s: "basics" },
    angel: { n: "Angel investors", s: "investors" },
    vc: { n: "Venture capital and its stages", s: "investors" },
    crowd: { n: "Crowdfunding and other sources", s: "investors" },
    ipo: { n: "IPO and the stock market", s: "market" },
    govt: { n: "Government schemes and bank loans", s: "basics" }
  },
  overview: {
    text: "Every enterprise needs money for <b>fixed capital</b> (assets) and <b>working capital</b> (day-to-day operations). Funds may be <b>owned</b> (owner's savings, equity) or <b>borrowed</b> (loans). As a start-up grows, it moves from <b>personal savings, friends and family</b> to <b>angel investors</b>, <b>venture capital</b> and finally the <b>stock exchange</b> through an <b>IPO</b>.",
    points: [
      "Owned funds carry no fixed repayment but dilute ownership; borrowed funds keep control but carry interest.",
      "Angel investors: wealthy individuals who invest early, often with mentoring.",
      "Venture capital: professional funds that invest in high-growth firms for an equity stake and exit later.",
      "IPO: a company's first sale of shares to the public, listed on a stock exchange."
    ],
    map: {
      center: "Resource Mobilization",
      branches: [
        { t: "Basics", c: ["Fixed vs working capital", "Owned vs borrowed", "Bank loans, schemes"] },
        { t: "Early money", c: ["Savings, friends, family", "Angel investors", "Crowdfunding"] },
        { t: "Venture capital", c: ["Seed, start-up", "Expansion", "Exit"] },
        { t: "Stock market", c: ["IPO", "Listing", "Primary vs secondary"] }
      ]
    }
  },
  sections: [
    {
      id: "basics", title: "Funds: what, why and from where", sub: "The money map", icon: "💼", color: "#4da3ff",
      quick: [
        "<b>Fixed capital</b>: money for long-term assets: land, building, machinery, furniture.",
        "<b>Working capital</b>: money for day-to-day operations: raw materials, wages, rent, electricity, credit to customers.",
        "<b>Owned funds</b>: owner's savings, retained profits, equity shares, money from partners. No fixed repayment or interest; but sharing ownership dilutes control.",
        "<b>Borrowed funds</b>: bank loans, debentures, trade credit, loans from financial institutions. Interest must be paid and loans repaid; ownership is not shared.",
        "<b>Sources for a start-up</b>: personal savings, friends and family ('bootstrapping'), bank loans, government schemes, angel investors, venture capital, crowdfunding.",
        "<b>Government support</b>: schemes such as <b>MUDRA loans</b> for micro units, <b>Stand-Up India</b> (SC/ST and women entrepreneurs), <b>Startup India</b> (tax benefits, fund of funds), subsidies and credit guarantees."
      ],
      table: { cap: "Owned vs borrowed funds", head: ["Basis", "Owned", "Borrowed"], rows: [["Return", "Dividend / profit (not fixed)", "Fixed interest"], ["Repayment", "Not required", "Required"], ["Control", "Shared with investors", "Retained by owner"], ["Risk to firm", "Low", "High if profits fall"]] },
      cards: [
        { t: "Bootstrapping", tag: "def", b: "<p>Starting and growing a business with the founder's own savings and early revenue, without outside investors.</p>" }
      ],
      exam: ["Raw materials and wages → <b>working capital</b>."]
    },
    {
      id: "investors", title: "Angel investors, venture capital and crowdfunding", sub: "Outside money for growth", icon: "🚀", color: "#22c55e",
      quick: [
        "<b>Angel investors</b>: wealthy individuals (often successful entrepreneurs) who invest their own money in early-stage start-ups in exchange for equity, and often mentor the founders.",
        "<b>Venture capital (VC)</b>: funds managed by professional firms that invest in young, high-risk, high-growth companies in exchange for equity. VCs take an active role (board seat, guidance) and aim to <b>exit</b> with a large gain.",
        "<b>Stages of VC financing</b>: (i) <b>seed</b>: to test the idea and build a prototype; (ii) <b>start-up</b>: to begin production and marketing; (iii) <b>early / first stage</b>: to scale operations; (iv) <b>expansion</b>: new markets and products; (v) <b>later / mezzanine (bridge)</b>: just before going public; (vi) <b>exit</b>: VC sells its stake through an IPO, sale to another firm, or buy-back.",
        "<b>Angel vs VC</b>: angels use their own money, invest smaller amounts at an earlier stage; VCs use pooled funds, invest larger amounts later, with more formal control.",
        "<b>Crowdfunding</b>: raising small amounts from a large number of people, usually online. Types: donation, reward (pre-orders) and equity-based.",
        "<b>Private equity</b>: investment in mature private companies for a stake."
      ],
      cards: [
        { t: "Valuation example", tag: "eg", b: "<p>An angel invests ₹50 lakh for a 10% stake. This values the company at 50 ÷ 0.10 = <b>₹5 crore</b> (post-money).</p>" },
        { t: "Why VCs accept high risk", tag: "why", b: "<p>Most start-ups fail, but a few succeed hugely. One big success can return many times the money lost on the others.</p>" }
      ],
      exam: ["Angel = <b>individual, own money, early</b>; VC = <b>firm, pooled money, later</b>."]
    },
    {
      id: "market", title: "The stock market and IPO", sub: "Going public", icon: "🏛️", color: "#f5b301",
      quick: [
        "<b>Initial Public Offer (IPO)</b>: the first time a company offers its shares to the public. It is a <b>primary market</b> transaction, where new securities are issued.",
        "After the IPO the shares are <b>listed</b> and traded on a stock exchange (BSE, NSE) in the <b>secondary market</b>, where existing securities are bought and sold among investors.",
        "Benefits of an IPO: raises large capital, gives existing investors (VCs, angels) an exit, improves visibility and credibility, shares can be used for acquisitions and employee stock options.",
        "Costs and duties: listing requirements, disclosure of information, SEBI regulation, compliance costs, loss of some privacy and control.",
        "<b>SEBI</b> (Securities and Exchange Board of India) regulates the securities market to protect investors.",
        "<b>Trading</b> takes place electronically through a <b>broker</b>; shares are held in a <b>demat account</b>."
      ],
      cards: [
        { t: "IPO arithmetic", tag: "eg", b: "<p>A company issues 20 lakh new shares at ₹150 each in an IPO. Money raised = 20,00,000 × 150 = <b>₹30 crore</b>.</p>" }
      ],
      exam: ["IPO = <b>primary</b> market; later trading = <b>secondary</b> market."]
    }
  ],
  flashcards: [
    { k: "Basics", c: "need", q: "Fixed capital vs working capital?", a: "Fixed: long-term assets. Working: day-to-day operations." },
    { k: "Basics", c: "src", q: "Give two owned sources of funds.", a: "Owner's savings and equity shares (also retained profits)." },
    { k: "Basics", c: "src", q: "Give two borrowed sources of funds.", a: "Bank loans and debentures (also trade credit)." },
    { k: "Basics", c: "src", q: "One drawback of borrowed funds?", a: "Fixed interest and repayment burden." },
    { k: "Basics", c: "src", q: "What is bootstrapping?", a: "Funding a business with own savings and early revenue." },
    { k: "Govt", c: "govt", q: "Name two government schemes for entrepreneurs.", a: "MUDRA loans and Startup India (also Stand-Up India)." },
    { k: "Angel", c: "angel", q: "Who are angel investors?", a: "Wealthy individuals who invest own money in early-stage start-ups for equity." },
    { k: "Angel", c: "angel", q: "What else do angels often give besides money?", a: "Mentoring and contacts." },
    { k: "VC", c: "vc", q: "What is venture capital?", a: "Professional funds investing in high-risk, high-growth firms for equity." },
    { k: "VC", c: "vc", q: "Name the stages of VC financing.", a: "Seed, start-up, early, expansion, later/mezzanine, exit." },
    { k: "VC", c: "vc", q: "What is the seed stage?", a: "Funding to test the idea and build a prototype." },
    { k: "VC", c: "vc", q: "Name two exit routes for a VC.", a: "IPO and sale to another company (also buy-back)." },
    { k: "Crowd", c: "crowd", q: "What is crowdfunding?", a: "Raising small amounts from many people, usually online." },
    { k: "Crowd", c: "crowd", q: "Three types of crowdfunding?", a: "Donation, reward, equity." },
    { k: "IPO", c: "ipo", q: "What is an IPO?", a: "A company's first offer of shares to the public." },
    { k: "IPO", c: "ipo", q: "Primary vs secondary market?", a: "Primary: new securities issued. Secondary: existing securities traded." },
    { k: "IPO", c: "ipo", q: "Who regulates the securities market in India?", a: "SEBI." },
    { k: "IPO", c: "ipo", q: "Where are shares held electronically?", a: "In a demat account." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Where Kavya's money goes",
      text: "<p><b>Kavya</b> is starting a bakery. She needs ₹6 lakh for ovens, a mixer and furniture, and ₹1.5 lakh for flour, butter, staff wages and the first three months' rent. She puts in ₹2 lakh of her savings and takes a ₹5.5 lakh MUDRA loan.</p>",
      qs: [
        { q: "Classify her needs into fixed and working capital, find the total requirement, and classify her sources.", m: 4, type: "Classify and calculate", c: "need", ans: "Fixed ₹6 lakh; working ₹1.5 lakh; total ₹7.5 lakh; savings owned, MUDRA borrowed", keys: ["fixed", "working", "7.5", "owned", "borrowed"], hint: "Assets vs daily needs.",
          points: [{ p: "<b>Fixed capital</b>: ₹6 lakh (ovens, mixer, furniture)", m: 1, k: ["fixed"] }, { p: "<b>Working capital</b>: ₹1.5 lakh (flour, wages, rent)", m: 1, k: ["working"] }, { p: "Total = ₹7.5 lakh = 2 + 5.5", m: 1, k: ["7.5", "750000", "7,50,000"] }, { p: "Savings: <b>owned</b>; MUDRA loan: <b>borrowed</b> (government scheme)", m: 1, k: ["owned", "borrowed"] }],
          structure: ["Fixed, working, total, sources."],
          model: "<p><b>Fixed capital:</b> ovens, mixer and furniture: ₹6 lakh.</p><p><b>Working capital:</b> flour, butter, wages and rent: ₹1.5 lakh.</p><p>Total requirement = 6 + 1.5 = <b>₹7.5 lakh</b>, met by ₹2 lakh + ₹5.5 lakh.</p><p>Her ₹2 lakh savings are <b>owned funds</b>; the ₹5.5 lakh MUDRA loan is <b>borrowed funds</b> under a government scheme.</p>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "The mentor with a cheque",
      text: "<p><b>Aman</b>'s app helps farmers check soil health. A retired tech founder invested ₹40 lakh of his own money for an 8% stake and meets Aman weekly to guide him. Two years later, a fund managed by <b>Horizon Ventures</b> invested ₹12 crore to help the app expand to five states and took a seat on the board.</p>",
      qs: [
        { q: "Identify the two types of investors, calculate the valuation implied by the first investment, and give two differences between them.", m: 6, type: "Identify, calculate, distinguish", c: "angel", ans: "Angel investor; VC (expansion stage); valuation ₹5 crore", keys: ["angel", "venture", "5 crore", "500"], hint: "40 ÷ 0.08.",
          points: [{ p: "First: <b>angel investor</b> (own money, mentoring)", m: 1, k: ["angel"] }, { p: "Second: <b>venture capital</b> fund, expansion stage", m: 1, k: ["venture", "vc"] }, { p: "Valuation = 40 lakh ÷ 8%", m: 1, k: ["0.08", "8%"] }, { p: "= <b>₹5 crore</b>", m: 1, k: ["5 crore", "500 lakh", "5,00,00,000"] }, { p: "Difference: own money vs pooled funds", m: 1, k: ["own", "pool"] }, { p: "Difference: smaller, earlier vs larger, later with board control", m: 1, k: ["smaller", "larger", "earlier", "board"] }],
          structure: ["Two types; valuation; two differences."],
          model: "<p>The retired founder is an <b>angel investor</b>; Horizon Ventures is a <b>venture capital</b> fund investing at the <b>expansion stage</b>.</p><p>Implied valuation = ₹40 lakh ÷ 8% = 40 ÷ 0.08 = <b>₹500 lakh = ₹5 crore</b>.</p><p><b>Differences:</b> (i) the angel invests his <b>own money</b>, while the VC invests <b>pooled funds</b> of many investors; (ii) the angel invested a <b>smaller amount earlier</b> with informal mentoring, while the VC invested a <b>larger amount later</b> and took formal control through a <b>board seat</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Five hundred backers",
      text: "<p><b>Nirmal</b> designed a solar-powered lantern. He posted a video on an online platform asking people to pre-order at ₹1,200. 500 people paid in advance, and he used the money to manufacture the first batch.</p>",
      qs: [
        { q: "Name the source of funds, its type, and calculate the money raised. State one advantage.", m: 3, type: "Identify and calculate", c: "crowd", ans: "Reward-based crowdfunding; ₹6,00,000; tests demand / no equity given", keys: ["crowdfund", "600000", "6,00,000"], hint: "500 × 1,200.",
          points: [{ p: "<b>Crowdfunding</b>, reward-based (pre-orders)", m: 1, k: ["crowdfund", "reward"] }, { p: "Money raised = 500 × 1,200 = <b>₹6,00,000</b>", m: 1, k: ["600000", "6,00,000", "6 lakh"] }, { p: "Advantage: tests market demand / no ownership or interest", m: 1, k: ["demand", "ownership", "equity", "interest"] }],
          structure: ["Name, amount, advantage."],
          model: "<p>This is <b>reward-based crowdfunding</b>: backers paid in advance for the product.</p><p>Money raised = 500 × ₹1,200 = <b>₹6,00,000</b>.</p><p>Advantage: it <b>tests demand</b> before production, and Nirmal gives up <b>no ownership</b> and pays <b>no interest</b>.</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "The journey of FarmFresh",
      text: "<p>(a) <b>FarmFresh</b> got ₹25 lakh to build a prototype of its cold-storage box. (b) Next, ₹2 crore to begin production and sales in Pune. (c) Then ₹15 crore to enter four new states and launch a dairy line. (d) A bridge round of ₹40 crore came a year before going public. (e) Finally, the VC sold its shares when FarmFresh listed on the stock exchange.</p>",
      qs: [
        { q: "Identify the stage of venture capital financing at each point.", m: 5, type: "Sequence", c: "vc", ans: "(a) seed (b) start-up (c) expansion (d) later/mezzanine (e) exit via IPO", keys: ["seed", "start-up", "expansion", "mezzanine", "exit"], hint: "Prototype → launch → grow → bridge → exit.",
          points: [{ p: "(a) <b>Seed</b> stage: prototype", m: 1, k: ["seed"] }, { p: "(b) <b>Start-up</b> stage: begin production and sales", m: 1, k: ["start-up", "startup", "start up"] }, { p: "(c) <b>Expansion</b> stage: new states and products", m: 1, k: ["expansion"] }, { p: "(d) <b>Later / mezzanine (bridge)</b> stage", m: 1, k: ["mezzanine", "bridge", "later"] }, { p: "(e) <b>Exit</b> through IPO", m: 1, k: ["exit", "ipo"] }],
          structure: ["Stage + case line, five times."],
          model: "<p>(a) ₹25 lakh for a prototype: <b>seed stage</b>.</p><p>(b) ₹2 crore to begin production and sales: <b>start-up stage</b>.</p><p>(c) ₹15 crore for new states and a dairy line: <b>expansion stage</b>.</p><p>(d) ₹40 crore bridge round before listing: <b>later (mezzanine) stage</b>.</p><p>(e) VC sells its shares on listing: <b>exit</b> through an <b>IPO</b>.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Going public",
      text: "<p><b>SkyKart Ltd</b> issues 40 lakh new shares to the public at ₹250 each. After listing on the NSE, investor <b>Pooja</b> buys 100 SkyKart shares from another investor through her broker, and they are credited to her demat account. SkyKart must now publish quarterly results and follow SEBI rules.</p>",
      qs: [
        { q: "Calculate the IPO proceeds, distinguish the two markets shown, and state one benefit and one cost of going public.", m: 6, type: "Calculate and explain", c: "ipo", ans: "₹100 crore; IPO primary; Pooja's purchase secondary; benefit: large capital; cost: disclosure", keys: ["100 crore", "primary", "secondary", "disclos"], hint: "40 lakh × 250.",
          points: [{ p: "Proceeds = 40,00,000 × 250", m: 1, k: ["40,00,000", "4000000"] }, { p: "= <b>₹100 crore</b>", m: 1, k: ["100 crore", "10000 lakh", "1,00,00,00,000"] }, { p: "IPO: <b>primary market</b> (new shares)", m: 1, k: ["primary"] }, { p: "Pooja's purchase: <b>secondary market</b> (existing shares)", m: 1, k: ["secondary"] }, { p: "Benefit: large capital, visibility, exit for investors", m: 1, k: ["capital", "visib", "exit", "credib"] }, { p: "Cost: disclosure, SEBI compliance, listing costs", m: 1, k: ["disclos", "sebi", "complian", "cost"] }],
          structure: ["Proceeds; two markets; benefit; cost."],
          model: "<p>IPO proceeds = 40,00,000 × ₹250 = <b>₹100 crore</b>.</p><p>The IPO is a <b>primary market</b> transaction: new shares are issued by the company. Pooja buying shares from another investor after listing is a <b>secondary market</b> transaction.</p><p><b>Benefit:</b> the company raises a <b>large amount of capital</b>, gains visibility, and early investors get an exit.</p><p><b>Cost:</b> it must <b>disclose results</b> regularly and follow <b>SEBI</b> rules, which adds compliance costs.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "need", q: "Money for raw materials and wages is:", o: ["Fixed capital", "Working capital", "Venture capital", "Equity"], a: 1, hint: "Day-to-day.", why: "<b>Working capital</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "angel", q: "A wealthy individual investing own money in an early start-up is a:", o: ["Banker", "Angel investor", "Debenture holder", "Creditor"], a: 1, hint: "Angel.", why: "<b>Angel investor</b>." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "ipo", q: "A company's first sale of shares to the public is a/an:", o: ["FPO", "IPO", "Rights issue", "Buy-back"], a: 1, hint: "Initial.", why: "<b>IPO</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "vc", q: "Funding to test an idea and build a prototype is the:", o: ["Expansion stage", "Seed stage", "Mezzanine stage", "Exit stage"], a: 1, hint: "Plant the seed.", why: "<b>Seed stage</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "src", q: "Which is a borrowed source?", o: ["Retained profits", "Equity shares", "Bank loan", "Owner's savings"], a: 2, hint: "Must repay.", why: "<b>Bank loan</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "angel", q: "₹30 lakh for a 6% stake values the firm at:", o: ["₹1.8 crore", "₹3 crore", "₹5 crore", "₹6 crore"], a: 2, hint: "30 ÷ 0.06.", why: "<b>₹5 crore</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "ipo", q: "Buying shares of a listed company from another investor happens in the:", o: ["Primary market", "Secondary market", "Money market", "IPO"], a: 1, hint: "Existing shares.", why: "<b>Secondary market</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "vc", q: "A bridge round just before an IPO is the:", o: ["Seed stage", "Start-up stage", "Mezzanine stage", "Early stage"], a: 2, hint: "Bridge.", why: "<b>Mezzanine</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "src", q: "Borrowed funds do not dilute ownership.", r: "Lenders do not get an ownership stake.", a: 0, hint: "Control.", why: "Both true; R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "vc", q: "Venture capitalists invest only in low-risk firms.", r: "VCs aim for high returns from high-growth companies.", a: 3, hint: "Risk.", why: "A false; R true." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "ipo", q: "An IPO gives venture capitalists an exit route.", r: "After listing, VCs can sell their shares to the public.", a: 0, hint: "Liquidity.", why: "Both true; R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "ipo", q: "SEBI regulates the securities market in India.", a: true, hint: "Regulator.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "need", q: "Buying machinery requires working capital.", a: false, hint: "Long-term asset.", why: "False: <b>fixed capital</b>." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "crowd", q: "Crowdfunding raises small amounts from many people.", a: true, hint: "Crowd.", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "vc", q: "Match the need with the VC stage.", pairs: [["Build a prototype", "Seed"], ["Begin production and sales", "Start-up"], ["Enter new markets", "Expansion"], ["VC sells stake", "Exit"]], hint: "Stages.", why: "Each need is one stage." },
    { id: "q16", t: "match", d: "M", m: 4, c: "src", q: "Match the source with its type.", pairs: [["Owner's savings", "Owned funds"], ["Bank loan", "Borrowed funds"], ["Pre-orders online", "Crowdfunding"], ["Professional fund for equity", "Venture capital"]], hint: "Sources.", why: "Each source is one type." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "ipo", q: "Shares are held electronically in a ______ account.", acc: ["demat", "dematerialised", "dematerialized"], hint: "Dematerialised.", why: "Demat." },
    { id: "q18", t: "fill", d: "M", m: 1, c: "src", q: "Funding a business from own savings and early revenue is called ______.", acc: ["bootstrapping"], hint: "Pull yourself up.", why: "Bootstrapping." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "ipo", q: "New securities are issued in the ______ market.", acc: ["primary"], hint: "First.", why: "Primary." },
    { id: "q20", t: "short", d: "E", m: 1, c: "govt", q: "Name one government scheme that gives loans to micro enterprises.", acc: ["mudra", "mudra loan", "pmmy", "pradhan mantri mudra yojana"], hint: "Micro Units.", why: "MUDRA." },
    { id: "q21", t: "short", d: "M", m: 1, c: "vc", q: "Name one exit route for a venture capitalist.", acc: ["ipo", "sale", "trade sale", "buy-back", "buyback", "acquisition"], hint: "How VCs cash out.", why: "IPO, sale to another firm, buy-back." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "need", q: "Distinguish between fixed and working capital with examples.", hint: "Long-term vs day-to-day.", why: "",
      points: [{ p: "Fixed: long-term assets", m: 1, k: ["long-term", "asset"] }, { p: "Working: day-to-day operations", m: 1, k: ["day-to-day", "daily", "operation"] }, { p: "Examples: machinery vs raw materials/wages", m: 1, k: ["machin", "raw", "wage"] }],
      model: "<p><b>Fixed capital</b> is invested in <b>long-term assets</b>, e.g. land, building and machinery.</p><p><b>Working capital</b> is needed for <b>day-to-day operations</b>, e.g. raw materials, wages, rent.</p>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "angel", q: "Who are angel investors? State two features.", hint: "Individuals, early, mentoring.", why: "",
      points: [{ p: "Wealthy individuals investing own money", m: 1, k: ["individual", "own money", "wealthy"] }, { p: "Invest at an early stage for equity", m: 1, k: ["early", "equity"] }, { p: "Provide mentoring and contacts", m: 1, k: ["mentor", "contact", "guid"] }],
      model: "<p><b>Angel investors</b> are wealthy individuals, often successful entrepreneurs, who invest their <b>own money</b> in start-ups.</p><p>Features: (i) they invest at an <b>early stage</b> in exchange for <b>equity</b>; (ii) they often <b>mentor</b> founders and open their network of contacts.</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "src", q: "Distinguish between owned and borrowed funds on four bases.", hint: "Return, repayment, control, risk.", why: "",
      points: [{ p: "Return: dividend vs fixed interest", m: 1, k: ["dividend", "interest"] }, { p: "Repayment: not required vs required", m: 1, k: ["repay"] }, { p: "Control: shared vs retained", m: 1, k: ["control"] }, { p: "Risk: low vs high", m: 1, k: ["risk"] }],
      model: "<table><tr><th>Basis</th><th>Owned funds</th><th>Borrowed funds</th></tr><tr><td>Return</td><td>Profit/dividend, not fixed</td><td>Fixed interest</td></tr><tr><td>Repayment</td><td>Not required</td><td>Required</td></tr><tr><td>Control</td><td>Shared with investors</td><td>Retained by owner</td></tr><tr><td>Risk</td><td>Low</td><td>High if profits fall</td></tr></table>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "ipo", q: "State two benefits and two costs of an IPO for a company.", hint: "Capital, exit; disclosure, compliance.", why: "",
      points: [{ p: "Benefit: large capital", m: 1, k: ["capital"] }, { p: "Benefit: visibility / exit for investors / liquidity", m: 1, k: ["visib", "exit", "liquid", "credib"] }, { p: "Cost: disclosure / loss of privacy", m: 1, k: ["disclos", "privacy"] }, { p: "Cost: SEBI compliance and listing costs", m: 1, k: ["sebi", "complian", "cost"] }],
      model: "<p><b>Benefits:</b> (i) raises a <b>large amount of capital</b>; (ii) improves <b>visibility and credibility</b> and gives early investors an <b>exit</b>.</p><p><b>Costs:</b> (i) regular <b>disclosure</b> of results and loss of privacy; (ii) <b>SEBI compliance</b> and listing costs.</p>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "vc", q: "What is venture capital? Explain its stages of financing.", hint: "Six stages.", why: "",
      points: [{ p: "Meaning: professional funds for high-growth firms, equity", m: 1, k: ["equity", "high", "fund"] }, { p: "Seed stage", m: 1, k: ["seed"] }, { p: "Start-up and early stages", m: 1, k: ["start-up", "startup", "early"] }, { p: "Expansion stage", m: 1, k: ["expansion"] }, { p: "Later / mezzanine stage", m: 1, k: ["mezzanine", "later", "bridge"] }, { p: "Exit (IPO, sale, buy-back)", m: 1, k: ["exit"] }],
      model: "<p><b>Venture capital</b> is money from professional funds invested in young, high-risk, high-growth companies in exchange for equity, with active guidance.</p><p><b>Stages:</b> (i) <b>seed:</b> testing the idea and building a prototype; (ii) <b>start-up:</b> beginning production and marketing; (iii) <b>early stage:</b> scaling up operations; (iv) <b>expansion:</b> new markets and products; (v) <b>later / mezzanine:</b> bridge funding before going public; (vi) <b>exit:</b> the VC sells its stake through an IPO, sale to another firm or buy-back.</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "src", q: "Explain six sources of funds available to a start-up.", hint: "Savings to IPO.", why: "",
      points: [{ p: "Personal savings / friends and family", m: 1, k: ["saving", "friend", "family"] }, { p: "Bank loans", m: 1, k: ["bank"] }, { p: "Government schemes (MUDRA, Startup India)", m: 1, k: ["mudra", "startup india", "government"] }, { p: "Angel investors", m: 1, k: ["angel"] }, { p: "Venture capital", m: 1, k: ["venture"] }, { p: "Crowdfunding / IPO", m: 1, k: ["crowdfund", "ipo"] }],
      model: "<p>(i) <b>Personal savings, friends and family</b> (bootstrapping): quick and flexible, but limited.</p><p>(ii) <b>Bank loans:</b> no loss of ownership, but interest and collateral are needed.</p><p>(iii) <b>Government schemes</b> such as MUDRA, Stand-Up India and Startup India: easier credit and incentives.</p><p>(iv) <b>Angel investors:</b> early equity with mentoring.</p><p>(v) <b>Venture capital:</b> large funds for high-growth firms in exchange for equity and board influence.</p><p>(vi) <b>Crowdfunding</b> from many small backers, and later an <b>IPO</b> on the stock exchange.</p>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "crowd", q: "A film-maker raises ₹10 lakh from 2,000 fans online, offering a signed poster to each. This is", o: ["Equity crowdfunding", "Reward-based crowdfunding", "Venture capital", "IPO"], a: 1, hint: "Reward.", why: "<b>Reward-based crowdfunding</b>." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "src", q: "An owner who refuses to give up any ownership should prefer", o: ["Equity shares", "Angel investment", "Bank loan", "Venture capital"], a: 2, hint: "No stake given.", why: "<b>Bank loan</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "ipo", q: "A company issues 10 lakh shares at ₹120 in its IPO. It raises", o: ["₹1.2 crore", "₹12 crore", "₹120 crore", "₹1,200 crore"], a: 1, hint: "10 lakh × 120.", why: "<b>₹12 crore</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "need", passage: "A printing press needs ₹20 lakh to buy a new offset machine.", q: "This is a need for", o: ["Working capital", "Fixed capital", "Crowdfunding", "Royalty"], a: 1, hint: "Machine.", why: "<b>Fixed capital</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "vc", passage: "A VC fund gives ₹8 crore to a meal-kit firm to open in six new cities.", q: "This is the", o: ["Seed stage", "Expansion stage", "Exit stage", "Mezzanine stage"], a: 1, hint: "New cities.", why: "<b>Expansion</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "angel", passage: "An investor puts ₹60 lakh into a start-up for a 12% stake.", q: "The implied valuation is", o: ["₹5 crore", "₹7.2 crore", "₹50 lakh", "₹6 crore"], a: 0, hint: "60 ÷ 0.12.", why: "<b>₹5 crore</b>." }
  ],
  find: {
    mcq: [
      { s: "Money for a delivery van and cold room.", o: ["Fixed capital", "Working capital", "Royalty", "Crowdfunding"], a: 0, c: "need", d: "E", why: "<b>Fixed capital</b>." },
      { s: "Money for vegetables, wages and electricity bills.", o: ["Working capital", "Fixed capital", "Equity", "IPO"], a: 0, c: "need", d: "E", why: "<b>Working capital</b>." },
      { s: "Founder uses ₹3 lakh of her savings.", o: ["Owned funds", "Borrowed funds", "VC", "IPO"], a: 0, c: "src", d: "E", why: "<b>Owned</b>." },
      { s: "Firm takes a ₹10 lakh loan at 11% interest.", o: ["Borrowed funds", "Owned funds", "Angel", "Crowdfunding"], a: 0, c: "src", d: "E", why: "<b>Borrowed</b>." },
      { s: "Micro-enterprise gets a ₹5 lakh loan under a central scheme.", o: ["MUDRA (government scheme)", "VC", "IPO", "Crowdfunding"], a: 0, c: "govt", d: "M", why: "<b>MUDRA</b>." },
      { s: "A retired CEO invests ₹25 lakh and mentors the founders.", o: ["Angel investor", "Venture capital", "Bank", "IPO"], a: 0, c: "angel", d: "M", why: "<b>Angel</b>." },
      { s: "A professional fund invests ₹20 crore and takes a board seat.", o: ["Venture capital", "Angel", "Bank loan", "Crowdfunding"], a: 0, c: "vc", d: "M", why: "<b>VC</b>." },
      { s: "Money to build the first working model.", o: ["Seed stage", "Expansion stage", "Exit", "Mezzanine"], a: 0, c: "vc", d: "M", why: "<b>Seed</b>." },
      { s: "Funding to launch production in one city.", o: ["Start-up stage", "Seed stage", "Exit", "Mezzanine"], a: 0, c: "vc", d: "M", why: "<b>Start-up</b>." },
      { s: "2,000 people each pay ₹500 online for an early copy.", o: ["Reward-based crowdfunding", "Equity crowdfunding", "VC", "IPO"], a: 0, c: "crowd", d: "M", why: "<b>Reward crowdfunding</b>." },
      { s: "Bridge money a year before listing.", o: ["Mezzanine stage", "Seed stage", "Start-up stage", "Exit"], a: 0, c: "vc", d: "C", why: "<b>Mezzanine</b>." },
      { s: "VC sells its stake when the company lists.", o: ["Exit via IPO", "Seed", "Expansion", "Bootstrapping"], a: 0, c: "vc", d: "C", why: "<b>Exit</b>." },
      { s: "Company offers shares to the public for the first time.", o: ["IPO (primary market)", "Secondary market", "Crowdfunding", "Angel round"], a: 0, c: "ipo", d: "C", why: "<b>IPO</b>." },
      { s: "Investor buys listed shares from another investor.", o: ["Secondary market", "Primary market", "IPO", "Seed"], a: 0, c: "ipo", d: "C", why: "<b>Secondary</b>." },
      { s: "Listed company must publish quarterly results.", o: ["SEBI disclosure (cost of IPO)", "Royalty", "Bootstrapping", "Seed"], a: 0, c: "ipo", d: "C", why: "<b>Disclosure</b>." },
      { s: "Growing only from early sales, no outside money.", o: ["Bootstrapping", "VC", "IPO", "Angel"], a: 0, c: "src", d: "C", why: "<b>Bootstrapping</b>." }
    ],
    match: [
      { title: "Drag each situation onto its concept.", pairs: [["Wages and raw materials", "Working capital", "need"], ["₹5 lakh loan for a micro unit", "Government scheme (MUDRA)", "govt"], ["Individual invests and mentors", "Angel investor", "angel"], ["Funds to build a prototype", "Seed stage", "vc"], ["Many backers pre-order online", "Crowdfunding", "crowd"], ["First sale of shares to public", "IPO", "ipo"]] }
    ],
    wrong: [
      { stmts: ["Fixed capital buys long-term assets.", "Working capital pays wages.", "A bank loan is an owned fund.", "Equity is an owned fund."], a: 2, c: "src", why: "A bank loan is <b>borrowed</b>." },
      { stmts: ["Angels use their own money.", "VCs use pooled funds.", "Angels usually invest later than VCs.", "VCs often take board seats."], a: 2, c: "angel", why: "Angels invest <b>earlier</b>." },
      { stmts: ["An IPO is a primary market issue.", "Listed shares trade in the secondary market.", "SEBI regulates the securities market.", "Shares are held in a savings account."], a: 3, c: "ipo", why: "Shares are held in a <b>demat</b> account." }
    ],
    para: [
      { target: "Angel investor", c: "angel", sents: ["Riya built an app for tutors.", "She showed it at a college fest.", "A former founder of a tech firm invested ₹30 lakh of his own and agreed to advise her monthly.", "The app now has 5,000 users."], a: 2, why: "Individual, own money, mentoring: <b>angel</b>." },
      { target: "Expansion stage", c: "vc", sents: ["CleanCart sells eco-friendly detergents.", "It is profitable in Mumbai.", "A VC fund invested ₹10 crore so it could launch in Delhi, Bengaluru and Chennai.", "Its logo is green."], a: 2, why: "Funds for new markets: <b>expansion</b>." },
      { target: "Secondary market", c: "ipo", sents: ["NovaPharma listed on the BSE last year.", "Its IPO raised ₹200 crore.", "This week Arjun bought 50 NovaPharma shares from another investor through his broker.", "He also reads business news."], a: 2, why: "Buying existing shares: <b>secondary market</b>." }
    ],
    explain: [
      { s: "Founder gives 15% equity for ₹45 lakh.", o: ["Valuation ₹3 crore", "Valuation ₹45 lakh", "Valuation ₹6.75 lakh", "Valuation ₹30 crore"], a: 0, c: "angel", why: "The clue is <i>45 ÷ 0.15</i> = <b>₹3 crore</b>." },
      { s: "A firm wants funds without paying interest or giving up shares.", o: ["Reward crowdfunding / bootstrapping", "Bank loan", "VC", "IPO"], a: 0, c: "crowd", why: "<b>Reward crowdfunding</b> or bootstrapping." },
      { s: "A start-up's rent and salaries for three months.", o: ["Working capital", "Fixed capital", "Seed stage", "IPO"], a: 0, c: "need", why: "<b>Working capital</b>." },
      { s: "A company becomes 'listed' after this event.", o: ["IPO", "Angel round", "Seed funding", "Bootstrapping"], a: 0, c: "ipo", why: "<b>IPO</b>." }
    ]
  }
});
