/* Revision Arena · Class XII Entrepreneurship · Unit 2 · Enterprise Planning. Original cases; figures recomputed. */
NFArena.register({
  id: "ent-u2", cls: "XII", subject: "Entrepreneurship", unit: "Unit", num: "2",
  title: "Enterprise Planning",
  tagline: "Choosing a form of business, writing the business plan, and the formalities of starting up.",
  notesLink: "../#ent-u2",
  concepts: {
    forms: { n: "Forms of business organisation", s: "forms" },
    choice: { n: "Choosing the right form", s: "forms" },
    bplan: { n: "Business plan: meaning and importance", s: "plan" },
    org: { n: "Organisational plan", s: "plan" },
    ops: { n: "Operational / production plan", s: "plan" },
    fin: { n: "Financial plan and break-even", s: "plan" },
    mkt: { n: "Marketing plan", s: "plan" },
    hr: { n: "Human resource plan", s: "plan" },
    formal: { n: "Formalities for setting up", s: "formal" }
  },
  overview: {
    text: "Once an opportunity is chosen, the entrepreneur must decide the <b>form of ownership</b> (sole proprietorship, partnership, LLP or company) and prepare a <b>business plan</b>, a written document that sets out the goals of the business and how they will be reached through its <b>organisational, operational, financial, marketing and human resource plans</b>.",
    points: [
      "Business plan = <b>road map</b> for the entrepreneur and a <b>proof</b> for investors and banks.",
      "Break-even point (units) = <b>Fixed costs ÷ (Price − Variable cost per unit)</b>.",
      "Choice of form depends on liability, capital needed, control, continuity and legal formalities.",
      "Formalities: registration, licences, tax registration (GST), bank account, approvals."
    ],
    map: {
      center: "Enterprise Planning",
      branches: [
        { t: "Forms", c: ["Sole proprietorship", "Partnership, LLP", "Company"] },
        { t: "Business plan", c: ["Organisational", "Operational", "Financial", "Marketing", "HR"] },
        { t: "Numbers", c: ["Project cost", "Break-even", "Projected profit"] },
        { t: "Formalities", c: ["Registration", "Licences", "Tax, bank account"] }
      ]
    }
  },
  sections: [
    {
      id: "forms", title: "Forms of business organisation", sub: "Who owns, who risks", icon: "🏢", color: "#4da3ff",
      quick: [
        "<b>Sole proprietorship</b>: owned and run by one person; easy to start; <b>unlimited liability</b>; full control; limited capital; no separate legal entity.",
        "<b>Partnership</b>: two or more persons sharing profits of a business run by all or any of them acting for all (Partnership Act, 1932); partnership deed; <b>unlimited, joint</b> liability; more capital and skills; risk of disputes.",
        "<b>Limited Liability Partnership (LLP)</b>: a separate legal entity with <b>limited liability</b> of partners and the flexibility of a partnership (LLP Act, 2008).",
        "<b>Company</b>: an artificial person with a <b>separate legal entity</b>, <b>limited liability</b> and <b>perpetual succession</b>. <b>Private company</b>: minimum 2, maximum 200 members, restricts share transfer. <b>Public company</b>: minimum 7 members, shares freely transferable, can raise money from the public. <b>One Person Company (OPC)</b>: a single member with limited liability.",
        "<b>Choosing a form</b>: nature and size of business, capital needed, liability the owner can bear, degree of control, continuity, and legal formalities and cost."
      ],
      table: { cap: "Quick comparison", head: ["Basis", "Sole", "Partnership", "Company"], rows: [["Members", "1", "2 or more", "Private 2–200; public 7+"], ["Liability", "Unlimited", "Unlimited", "Limited"], ["Legal entity", "No", "No", "Yes"], ["Continuity", "Ends with owner", "Unstable", "Perpetual"], ["Formalities", "Few", "Moderate", "Many"]] },
      cards: [
        { t: "Unlimited liability", tag: "def", b: "<p>If business debts exceed business assets, the owner's <b>personal property</b> can be used to pay creditors.</p>" }
      ],
      exam: ["'Wants to raise capital from the public' → <b>public company</b>."]
    },
    {
      id: "plan", title: "The business plan", sub: "The road map", icon: "🗺️", color: "#22c55e",
      quick: [
        "<b>Business plan</b>: a written document describing the business, its objectives, and the strategies to achieve them. It is a road map for the entrepreneur and a tool to raise funds.",
        "<b>Importance</b>: clarifies goals; identifies risks; helps raise finance; guides operations; a benchmark to measure progress.",
        "<b>Contents</b>: executive summary, description of the business, and the five sub-plans:",
        "<b>Organisational plan</b>: form of ownership, management team, roles and responsibilities, organisation structure.",
        "<b>Operational (production) plan</b>: location, layout, machinery, raw materials and suppliers, production process, capacity, quality control.",
        "<b>Financial plan</b>: <b>project cost</b> (fixed capital + working capital), <b>sources of funds</b>, projected income statement and balance sheet, cash flow, <b>break-even analysis</b>.",
        "<b>Marketing plan</b>: target market, competitors, product, price, place, promotion, sales forecast.",
        "<b>Human resource plan</b>: number and type of employees needed, recruitment, training, wages."
      ],
      table: { cap: "Which sub-plan?", head: ["Item", "Sub-plan"], rows: [["Factory layout", "Operational"], ["Who is the CEO, who handles sales", "Organisational"], ["Bank loan of ₹10 lakh", "Financial"], ["Price ₹99, social-media ads", "Marketing"], ["Hire and train 8 workers", "Human resource"]] },
      cards: [
        { t: "Break-even worked example", tag: "eg", b: "<p>Fixed costs ₹1,20,000; price ₹50; variable cost ₹30 per unit. Contribution per unit = ₹20. Break-even = 1,20,000 ÷ 20 = <b>6,000 units</b> (sales ₹3,00,000).</p>" },
        { t: "Project cost", tag: "def", b: "<p><b>Fixed capital</b> (land, building, machinery) + <b>working capital</b> (raw materials, wages, day-to-day expenses).</p>" }
      ],
      exam: ["Always show the break-even formula before substituting."]
    },
    {
      id: "formal", title: "Formalities of setting up", sub: "Making it official", icon: "📋", color: "#f5b301",
      quick: [
        "<b>Registration</b> of the business (e.g. Udyam registration for MSMEs; Registrar of Companies for companies and LLPs).",
        "<b>Licences and approvals</b>: trade licence, FSSAI for food, pollution clearance, fire safety, shop and establishment licence.",
        "<b>Tax registration</b>: PAN, TAN, <b>GST registration</b>.",
        "<b>Opening a bank account</b> in the business's name.",
        "Other: lease or purchase of premises, power connection, insurance, intellectual property registration (trademark).",
        "For a company: name approval, Memorandum and Articles of Association, Certificate of Incorporation."
      ],
      cards: [
        { t: "Why formalities matter", tag: "why", b: "<p>They give the business legal standing, avoid penalties, allow access to bank loans and government schemes, and build customer trust.</p>" }
      ],
      exam: ["Food business → mention <b>FSSAI</b> licence."]
    }
  ],
  flashcards: [
    { k: "Form", c: "forms", q: "What is sole proprietorship?", a: "A business owned and run by one person with unlimited liability." },
    { k: "Form", c: "forms", q: "Under which Act is partnership governed?", a: "Indian Partnership Act, 1932." },
    { k: "Form", c: "forms", q: "What is an LLP?", a: "A separate legal entity where partners have limited liability (LLP Act, 2008)." },
    { k: "Form", c: "forms", q: "Members in a private company?", a: "Minimum 2, maximum 200." },
    { k: "Form", c: "forms", q: "Minimum members in a public company?", a: "Seven." },
    { k: "Form", c: "forms", q: "What is perpetual succession?", a: "A company continues to exist regardless of changes in its members." },
    { k: "Choice", c: "choice", q: "Name three factors in choosing a form of business.", a: "Capital needed, liability, control (also continuity, formalities, nature of business)." },
    { k: "Plan", c: "bplan", q: "What is a business plan?", a: "A written document describing the business, its objectives and strategies to achieve them." },
    { k: "Plan", c: "bplan", q: "Name the five sub-plans of a business plan.", a: "Organisational, operational, financial, marketing, human resource." },
    { k: "Plan", c: "org", q: "What does the organisational plan cover?", a: "Form of ownership, management team, roles and structure." },
    { k: "Plan", c: "ops", q: "What does the operational plan cover?", a: "Location, layout, machinery, raw materials, process, capacity, quality control." },
    { k: "Plan", c: "fin", q: "What does the financial plan cover?", a: "Project cost, sources of funds, projected statements, cash flow, break-even." },
    { k: "Formula", c: "fin", q: "Break-even point in units?", a: "Fixed costs ÷ (Price − Variable cost per unit)." },
    { k: "Plan", c: "fin", q: "Project cost = ?", a: "Fixed capital + working capital." },
    { k: "Plan", c: "mkt", q: "What does the marketing plan cover?", a: "Target market, competition, 4Ps and sales forecast." },
    { k: "Plan", c: "hr", q: "What does the HR plan cover?", a: "Number and type of staff, recruitment, training and wages." },
    { k: "Formal", c: "formal", q: "Name three formalities for starting a business.", a: "Registration, licences, GST registration (also bank account)." },
    { k: "Formal", c: "formal", q: "Which licence does a food business need?", a: "FSSAI licence." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Which form for whom?",
      text: "<p><b>Anil</b> wants to open a small tea stall with ₹50,000 of his own and keep full control. <b>Sara and Dev</b>, two chartered accountants, want to start a firm together but limit their personal risk. <b>GreenFuel</b> needs ₹200 crore for a solar plant and wants to invite the public to buy shares.</p>",
      qs: [
        { q: "Suggest the most suitable form of business for each and give one reason each.", m: 3, type: "Apply", c: "choice", ans: "Anil: sole proprietorship; Sara and Dev: LLP; GreenFuel: public company", keys: ["sole", "llp", "public company"], hint: "Control, limited risk, public money.",
          points: [{ p: "Anil: <b>sole proprietorship</b>: small capital, full control", m: 1, k: ["sole"] }, { p: "Sara and Dev: <b>LLP</b>: partnership flexibility with limited liability", m: 1, k: ["llp", "limited liability partnership"] }, { p: "GreenFuel: <b>public company</b>: can raise capital from the public", m: 1, k: ["public company"] }],
          structure: ["Form + reason, three times."],
          model: "<p><b>Anil:</b> a <b>sole proprietorship</b>; it needs little capital and gives him full control.</p><p><b>Sara and Dev:</b> a <b>Limited Liability Partnership</b>; they can work as partners while limiting their personal liability.</p><p><b>GreenFuel:</b> a <b>public company</b>; only it can invite the public to buy shares to raise ₹200 crore.</p>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "The plan for Kraft Candles",
      text: "<p><b>Priya</b>'s business plan for Kraft Candles includes: (a) a workshop of 800 sq ft with two moulding machines and wax supplied from Rajkot; (b) Priya as managing partner and her friend as sales head; (c) a bank loan of ₹3 lakh and own funds of ₹2 lakh; (d) selling online at ₹249 per box with Instagram ads; (e) hiring and training six women from her locality.</p>",
      qs: [
        { q: "Identify the sub-plan to which each part of the business plan belongs.", m: 5, type: "Classify", c: "bplan", ans: "(a) operational (b) organisational (c) financial (d) marketing (e) HR", keys: ["operational", "organisational", "financial", "marketing", "human"], hint: "Five parts.",
          points: [{ p: "(a) <b>Operational plan</b>", m: 1, k: ["operational", "production"] }, { p: "(b) <b>Organisational plan</b>", m: 1, k: ["organisational", "organizational"] }, { p: "(c) <b>Financial plan</b>", m: 1, k: ["financial"] }, { p: "(d) <b>Marketing plan</b>", m: 1, k: ["marketing"] }, { p: "(e) <b>Human resource plan</b>", m: 1, k: ["human", "hr"] }],
          structure: ["Part → sub-plan."],
          model: "<p>(a) Workshop, machines and wax supply: <b>operational (production) plan</b>.</p><p>(b) Roles of managing partner and sales head: <b>organisational plan</b>.</p><p>(c) Loan and own funds: <b>financial plan</b>.</p><p>(d) Online price and Instagram ads: <b>marketing plan</b>.</p><p>(e) Hiring and training six women: <b>human resource plan</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "How many lamps to break even?",
      text: "<p><b>Lumio Lamps</b> has monthly fixed costs of ₹90,000 (rent, salaries, interest). Each lamp sells for ₹450, and the variable cost (materials, packing) is ₹300 per lamp. The owner expects to sell 800 lamps a month.</p>",
      qs: [
        { q: "Calculate the break-even point in units and in rupees, and the monthly profit at the expected sales.", m: 4, type: "Calculate", c: "fin", ans: "Contribution ₹150; BEP 600 lamps = ₹2,70,000; profit ₹30,000", keys: ["600", "270000", "2,70,000", "30000", "30,000"], hint: "90,000 ÷ 150.",
          points: [{ p: "Contribution per unit = 450 − 300 = <b>₹150</b>", m: 1, k: ["150"] }, { p: "BEP = 90,000 ÷ 150 = <b>600 lamps</b>", m: 1, k: ["600"] }, { p: "BEP in sales = 600 × 450 = <b>₹2,70,000</b>", m: 1, k: ["270000", "2,70,000"] }, { p: "Profit at 800 = (800 − 600) × 150 = <b>₹30,000</b>", m: 1, k: ["30000", "30,000"] }],
          structure: ["Contribution, BEP units, BEP sales, profit."],
          model: "<p>Contribution per lamp = 450 − 300 = <b>₹150</b>.</p><p>Break-even point = Fixed costs ÷ Contribution = 90,000 ÷ 150 = <b>600 lamps</b>.</p><p>Break-even sales = 600 × ₹450 = <b>₹2,70,000</b>.</p><p>At 800 lamps, profit = (800 − 600) × 150 = <b>₹30,000</b> a month. (Check: 800 × 150 − 90,000 = 30,000.)</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "Why the bank said yes",
      text: "<p><b>Imran</b> approached a bank for a ₹15 lakh loan for a bakery. The manager asked for a business plan. Imran's plan showed the market size, competitors, project cost, projected profits for three years, and how much he and his brother would invest. The bank approved the loan. Imran also uses the plan each quarter to check whether sales are on target.</p>",
      qs: [
        { q: "Explain the importance of a business plan with reference to the case.", m: 4, type: "Explain", c: "bplan", ans: "Raises finance; road map; identifies risks; benchmark for progress", keys: ["finance", "road map", "benchmark", "risk"], hint: "Bank, quarterly checks.",
          points: [{ p: "Helps <b>raise finance</b>: bank approved the loan", m: 1, k: ["financ", "loan", "bank"] }, { p: "Shows market and competitors, so <b>risks are identified</b>", m: 1, k: ["risk", "competit"] }, { p: "Acts as a <b>road map</b> with clear goals", m: 1, k: ["road map", "goal", "direction"] }, { p: "<b>Benchmark</b> to measure progress each quarter", m: 1, k: ["benchmark", "measure", "progress", "control"] }],
          structure: ["Four points linked to the case."],
          model: "<p>(i) <b>Raising finance:</b> the bank approved the ₹15 lakh loan only after seeing the plan.</p><p>(ii) <b>Identifying risks:</b> studying the market and competitors shows what could go wrong.</p><p>(iii) <b>Road map:</b> the plan sets clear goals and the steps to reach them.</p><p>(iv) <b>Benchmark for control:</b> Imran compares actual sales with the plan each quarter.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Before the shutters go up",
      text: "<p><b>Neeraj</b> is opening a restaurant as a private company. He has to get approval for the company name, file the Memorandum and Articles, register for GST, obtain a food-safety licence, get a fire NOC, and open a current account in the company's name.</p>",
      qs: [
        { q: "Identify the formalities and explain why completing them matters.", m: 6, type: "Identify and explain", c: "formal", ans: "Incorporation, GST, FSSAI, fire NOC, bank account; legal standing, loans, trust", keys: ["incorporat", "gst", "fssai", "bank"], hint: "Company, tax, food, safety, bank.",
          points: [{ p: "Company incorporation: name approval, MoA and AoA", m: 1, k: ["incorporat", "name", "memorandum", "articles"] }, { p: "Tax registration: GST", m: 1, k: ["gst"] }, { p: "Licence: FSSAI food-safety", m: 1, k: ["fssai", "food"] }, { p: "Approval: fire NOC; business bank account", m: 1, k: ["fire", "bank"] }, { p: "Why: legal standing, avoid penalties", m: 1, k: ["legal", "penalt"] }, { p: "Why: access to loans and schemes, customer trust", m: 1, k: ["loan", "scheme", "trust"] }],
          structure: ["Four formalities; two reasons."],
          model: "<p><b>Formalities:</b> (i) <b>incorporation</b> of the company: name approval and filing of the Memorandum and Articles of Association; (ii) <b>GST registration</b>; (iii) an <b>FSSAI food-safety licence</b>; (iv) a <b>fire NOC</b> and a <b>current bank account</b> in the company's name.</p><p><b>Why they matter:</b> they give the restaurant <b>legal standing</b> and avoid fines or closure, and they make it eligible for <b>bank loans and government schemes</b> while building <b>customer trust</b>.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "forms", q: "A business owned by one person with unlimited liability is a:", o: ["Partnership", "Sole proprietorship", "Company", "LLP"], a: 1, hint: "Sole = one.", why: "<b>Sole proprietorship</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "forms", q: "Minimum members in a public company:", o: ["2", "5", "7", "50"], a: 2, hint: "Seven.", why: "<b>7</b>." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "ops", q: "Factory location and layout are part of the:", o: ["Financial plan", "Operational plan", "Marketing plan", "HR plan"], a: 1, hint: "Production.", why: "<b>Operational plan</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "fin", q: "Fixed costs ₹60,000; price ₹40; variable cost ₹25. Break-even units:", o: ["1,500", "2,400", "4,000", "6,000"], a: 2, hint: "60,000 ÷ 15.", why: "<b>4,000 units</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "forms", q: "Which form gives partners limited liability?", o: ["General partnership", "LLP", "Sole proprietorship", "HUF"], a: 1, hint: "2008 Act.", why: "<b>LLP</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "fin", q: "Project cost equals:", o: ["Fixed capital only", "Working capital only", "Fixed capital + working capital", "Sales − costs"], a: 2, hint: "Both.", why: "<b>Fixed + working capital</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "forms", q: "A company continues even after all its founders die. This is:", o: ["Limited liability", "Perpetual succession", "Separate ownership", "Unlimited liability"], a: 1, hint: "Lasts forever.", why: "<b>Perpetual succession</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "org", q: "Defining the CEO, sales head and their duties belongs to the:", o: ["Operational plan", "Organisational plan", "Marketing plan", "Financial plan"], a: 1, hint: "Structure.", why: "<b>Organisational plan</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "forms", q: "A sole proprietor's personal assets may be used to pay business debts.", r: "Sole proprietorship has unlimited liability.", a: 0, hint: "Liability.", why: "Both true; R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "forms", q: "A private company can invite the public to buy its shares.", r: "A private company restricts the transfer of its shares.", a: 3, hint: "Private.", why: "A false; R true." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "bplan", q: "Banks ask for a business plan before giving loans.", r: "The plan shows the project's viability and repayment ability.", a: 0, hint: "Proof.", why: "Both true; R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "forms", q: "A company is a separate legal entity.", a: true, hint: "Artificial person.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "hr", q: "Recruitment and training are part of the marketing plan.", a: false, hint: "People.", why: "False: <b>HR plan</b>." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "formal", q: "A food business needs an FSSAI licence.", a: true, hint: "Food safety.", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "bplan", q: "Match the item with the sub-plan.", pairs: [["Machines and layout", "Operational plan"], ["Loan and break-even", "Financial plan"], ["Price and advertising", "Marketing plan"], ["Hiring and training", "HR plan"]], hint: "Four plans.", why: "Each item is one sub-plan." },
    { id: "q16", t: "match", d: "M", m: 4, c: "forms", q: "Match the form with its feature.", pairs: [["Sole proprietorship", "One owner, full control"], ["Partnership", "Partnership deed"], ["LLP", "Partners' liability limited"], ["Public company", "Shares freely transferable"]], hint: "Features.", why: "Each form has one feature." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "forms", q: "A private company can have at most ______ members.", acc: ["200"], hint: "Two hundred.", why: "200." },
    { id: "q18", t: "fill", d: "M", m: 1, c: "fin", q: "Price minus variable cost per unit is called ______ per unit.", acc: ["contribution"], hint: "Covers fixed cost.", why: "Contribution." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "forms", q: "Partnership in India is governed by the Indian Partnership Act, ______.", acc: ["1932"], hint: "Pre-independence.", why: "1932." },
    { id: "q20", t: "short", d: "E", m: 1, c: "bplan", q: "What written document sets out a business's goals and strategies?", acc: ["business plan"], hint: "Road map.", why: "Business plan." },
    { id: "q21", t: "short", d: "M", m: 1, c: "formal", q: "Name one tax registration needed to start a business.", acc: ["gst", "pan", "tan", "gst registration"], hint: "Indirect tax.", why: "GST (also PAN, TAN)." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "choice", q: "State three factors that affect the choice of a form of business.", hint: "Capital, liability, control.", why: "",
      points: [{ p: "Capital required", m: 1, k: ["capital"] }, { p: "Liability / risk", m: 1, k: ["liabilit", "risk"] }, { p: "Control / continuity / formalities", m: 1, k: ["control", "continu", "formalit"] }],
      model: "<p>(i) <b>Capital required:</b> large capital suits a company.</p><p>(ii) <b>Liability:</b> those wanting limited risk choose an LLP or company.</p><p>(iii) <b>Control and formalities:</b> those wanting full control and few formalities choose a sole proprietorship.</p>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "fin", q: "Fixed costs ₹2,40,000; price ₹120; variable cost ₹80. Find the break-even point in units and rupees.", hint: "Contribution ₹40.", why: "",
      points: [{ p: "Contribution = 120 − 80 = ₹40", m: 1, k: ["40"] }, { p: "BEP = 2,40,000 ÷ 40 = 6,000 units", m: 1, k: ["6000", "6,000"] }, { p: "BEP sales = 6,000 × 120 = ₹7,20,000", m: 1, k: ["720000", "7,20,000"] }],
      model: "<p>Contribution per unit = 120 − 80 = <b>₹40</b>.</p><p>Break-even point = 2,40,000 ÷ 40 = <b>6,000 units</b>.</p><p>Break-even sales = 6,000 × ₹120 = <b>₹7,20,000</b>.</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "bplan", q: "Explain the importance of a business plan.", hint: "Goals, risks, finance, control.", why: "",
      points: [{ p: "Clarifies goals / road map", m: 1, k: ["goal", "road map"] }, { p: "Identifies risks and problems", m: 1, k: ["risk"] }, { p: "Helps raise finance", m: 1, k: ["financ", "investor", "bank"] }, { p: "Benchmark to measure performance", m: 1, k: ["benchmark", "measure", "performance"] }],
      model: "<p>(i) <b>Road map:</b> sets clear goals and steps to achieve them.</p><p>(ii) <b>Identifies risks:</b> problems are spotted before they occur.</p><p>(iii) <b>Raises finance:</b> banks and investors rely on it to judge viability.</p><p>(iv) <b>Benchmark:</b> actual performance can be compared with the plan.</p>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "forms", q: "Distinguish between a sole proprietorship and a company on four bases.", hint: "Members, liability, entity, continuity.", why: "",
      points: [{ p: "Members: one vs many", m: 1, k: ["one", "member"] }, { p: "Liability: unlimited vs limited", m: 1, k: ["liabilit"] }, { p: "Legal entity: no vs yes", m: 1, k: ["entity"] }, { p: "Continuity: ends with owner vs perpetual", m: 1, k: ["perpetual", "continu"] }],
      model: "<table><tr><th>Basis</th><th>Sole proprietorship</th><th>Company</th></tr><tr><td>Members</td><td>One</td><td>Private 2–200; public 7+</td></tr><tr><td>Liability</td><td>Unlimited</td><td>Limited</td></tr><tr><td>Legal entity</td><td>Not separate</td><td>Separate</td></tr><tr><td>Continuity</td><td>Ends with owner</td><td>Perpetual succession</td></tr></table>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "bplan", q: "Explain the components of a business plan.", hint: "Summary + five sub-plans.", why: "",
      points: [{ p: "Executive summary / business description", m: 1, k: ["summary", "description"] }, { p: "Organisational plan", m: 1, k: ["organisational", "organizational"] }, { p: "Operational plan", m: 1, k: ["operational", "production"] }, { p: "Financial plan", m: 1, k: ["financial"] }, { p: "Marketing plan", m: 1, k: ["marketing"] }, { p: "Human resource plan", m: 1, k: ["human", "hr"] }],
      model: "<p>(i) <b>Executive summary and business description:</b> what the business is and its objectives.</p><p>(ii) <b>Organisational plan:</b> form of ownership, management team, roles and structure.</p><p>(iii) <b>Operational plan:</b> location, layout, machinery, raw materials, process and quality control.</p><p>(iv) <b>Financial plan:</b> project cost, sources of funds, projected statements and break-even.</p><p>(v) <b>Marketing plan:</b> target market, competition, product, price, place, promotion.</p><p>(vi) <b>Human resource plan:</b> staffing needs, recruitment, training and wages.</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "fin", q: "A firm's fixed costs are ₹1,50,000; price ₹75; variable cost ₹45. Find (a) BEP in units and rupees, (b) profit at 7,000 units, (c) units needed for a profit of ₹60,000.", hint: "Contribution ₹30.", why: "",
      points: [{ p: "Contribution = 75 − 45 = ₹30", m: 1, k: ["30"] }, { p: "BEP = 1,50,000 ÷ 30 = 5,000 units", m: 1, k: ["5000", "5,000"] }, { p: "BEP sales = 5,000 × 75 = ₹3,75,000", m: 1, k: ["375000", "3,75,000"] }, { p: "Profit at 7,000 = 7,000 × 30 − 1,50,000", m: 1, k: ["210000", "2,10,000"] }, { p: "= ₹60,000", m: 1, k: ["60000", "60,000"] }, { p: "Units for ₹60,000 profit = (1,50,000 + 60,000) ÷ 30 = 7,000", m: 1, k: ["7000", "7,000"] }],
      model: "<p>Contribution per unit = 75 − 45 = <b>₹30</b>.</p><p>(a) BEP = 1,50,000 ÷ 30 = <b>5,000 units</b>; BEP sales = 5,000 × 75 = <b>₹3,75,000</b>.</p><p>(b) Profit at 7,000 units = 7,000 × 30 − 1,50,000 = 2,10,000 − 1,50,000 = <b>₹60,000</b>.</p><p>(c) Units for ₹60,000 profit = (1,50,000 + 60,000) ÷ 30 = <b>7,000 units</b>, which matches part (b).</p>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "forms", q: "Two architects want to work together, keep flexibility and protect their homes from business debts. Best form:", o: ["General partnership", "LLP", "Sole proprietorship", "Public company"], a: 1, hint: "Limited liability.", why: "<b>LLP</b>." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "mkt", q: "A section showing target customers, competitors and a ₹99 launch price belongs to the", o: ["Operational plan", "Marketing plan", "HR plan", "Financial plan"], a: 1, hint: "4Ps.", why: "<b>Marketing plan</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "fin", q: "A unit's contribution is ₹25 and fixed costs ₹50,000. It sells 2,400 units. It makes", o: ["Profit ₹10,000", "Loss ₹10,000", "Break-even", "Profit ₹50,000"], a: 0, hint: "2,400 × 25 − 50,000.", why: "60,000 − 50,000 = <b>profit ₹10,000</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "forms", passage: "Lata runs a boutique alone, takes all decisions and keeps all profits.", q: "Her business is a", o: ["Partnership", "Sole proprietorship", "Company", "Cooperative"], a: 1, hint: "Alone.", why: "<b>Sole proprietorship</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "hr", passage: "The plan says the firm will hire 12 tailors and train them for two weeks.", q: "This is the", o: ["HR plan", "Marketing plan", "Financial plan", "Operational plan"], a: 0, hint: "People.", why: "<b>HR plan</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "fin", passage: "A café needs ₹8 lakh for furniture and equipment and ₹2 lakh for stock and wages.", q: "Its project cost is", o: ["₹6 lakh", "₹8 lakh", "₹10 lakh", "₹2 lakh"], a: 2, hint: "Fixed + working.", why: "<b>₹10 lakh</b>." }
  ],
  find: {
    mcq: [
      { s: "One owner, all profits, all risk.", o: ["Sole proprietorship", "Company", "LLP", "Cooperative"], a: 0, c: "forms", d: "E", why: "<b>Sole proprietorship</b>." },
      { s: "Friends sign a deed to share profits of a shop.", o: ["Partnership", "Company", "Sole", "Trust"], a: 0, c: "forms", d: "E", why: "<b>Partnership</b>." },
      { s: "Machines, layout and suppliers listed in the plan.", o: ["Operational plan", "Financial plan", "Marketing plan", "HR plan"], a: 0, c: "ops", d: "E", why: "<b>Operational</b>." },
      { s: "Hiring 10 workers and training them.", o: ["HR plan", "Marketing plan", "Organisational plan", "Financial plan"], a: 0, c: "hr", d: "E", why: "<b>HR</b>." },
      { s: "Partners' liability limited, firm is a legal entity.", o: ["LLP", "General partnership", "Sole", "HUF"], a: 0, c: "forms", d: "M", why: "<b>LLP</b>." },
      { s: "Firm invites the public to buy its shares.", o: ["Public company", "Private company", "LLP", "Partnership"], a: 0, c: "forms", d: "M", why: "<b>Public company</b>." },
      { s: "Company survives the death of all founders.", o: ["Perpetual succession", "Unlimited liability", "Deed", "Break-even"], a: 0, c: "forms", d: "M", why: "<b>Perpetual succession</b>." },
      { s: "Bank loan, own funds, projected profit listed.", o: ["Financial plan", "Operational plan", "Marketing plan", "HR plan"], a: 0, c: "fin", d: "M", why: "<b>Financial</b>." },
      { s: "Target customers, price ₹299, Instagram ads.", o: ["Marketing plan", "Financial plan", "HR plan", "Operational"], a: 0, c: "mkt", d: "M", why: "<b>Marketing</b>." },
      { s: "Who heads production, who heads sales.", o: ["Organisational plan", "Operational plan", "Marketing plan", "Financial"], a: 0, c: "org", d: "M", why: "<b>Organisational</b>." },
      { s: "Sales level where total revenue equals total cost.", o: ["Break-even point", "Project cost", "Contribution", "Working capital"], a: 0, c: "fin", d: "C", why: "<b>Break-even point</b>." },
      { s: "Land, building and machines plus stock and wages.", o: ["Project cost", "Contribution", "Break-even", "Revenue"], a: 0, c: "fin", d: "C", why: "<b>Project cost</b>." },
      { s: "Choosing LLP because partners don't want to risk their homes.", o: ["Choice by liability", "Choice by capital", "Choice by control", "Break-even"], a: 0, c: "choice", d: "C", why: "<b>Liability</b> drives choice." },
      { s: "Getting an FSSAI licence and GST number.", o: ["Formalities", "Marketing plan", "Feasibility", "HR plan"], a: 0, c: "formal", d: "C", why: "<b>Formalities</b>." },
      { s: "A document used to convince a bank to lend.", o: ["Business plan", "Partnership deed", "Invoice", "Balance sheet"], a: 0, c: "bplan", d: "C", why: "<b>Business plan</b>." },
      { s: "Filing Memorandum and Articles of Association.", o: ["Company formalities", "Partnership deed", "Sole registration", "Marketing plan"], a: 0, c: "formal", d: "C", why: "<b>Company formalities</b>." }
    ],
    match: [
      { title: "Drag each situation onto its concept.", pairs: [["One owner, unlimited liability", "Sole proprietorship", "forms"], ["Partners' liability limited", "LLP", "forms"], ["Factory layout and machines", "Operational plan", "ops"], ["Fixed cost ÷ contribution", "Break-even point", "fin"], ["Hiring and training staff", "HR plan", "hr"], ["GST and FSSAI registration", "Formalities", "formal"]] }
    ],
    wrong: [
      { stmts: ["A sole proprietor has unlimited liability.", "A company has perpetual succession.", "A private company can have 500 members.", "A public company needs at least 7 members."], a: 2, c: "forms", why: "Private company: <b>maximum 200</b>." },
      { stmts: ["Layout is in the operational plan.", "Break-even is in the financial plan.", "Advertising is in the HR plan.", "Recruitment is in the HR plan."], a: 2, c: "bplan", why: "Advertising is in the <b>marketing plan</b>." },
      { stmts: ["BEP = Fixed cost ÷ contribution per unit.", "Contribution = Price − Variable cost.", "Project cost = Fixed capital only.", "Profit = Contribution − Fixed cost."], a: 2, c: "fin", why: "Project cost = fixed <b>+ working</b> capital." }
    ],
    para: [
      { target: "Financial plan", c: "fin", sents: ["Ritu plans a pottery studio.", "She found a shed near the highway.", "She estimated a project cost of ₹7 lakh, to be met by a ₹5 lakh loan and ₹2 lakh savings.", "She loves blue glazes."], a: 2, why: "Costs and funding: <b>financial plan</b>." },
      { target: "LLP", c: "forms", sents: ["Three lawyers wanted to start a firm.", "They wanted to share profits like partners.", "They also wanted their personal assets protected from firm debts.", "Their office is in Delhi."], a: 2, why: "Partners with limited liability: <b>LLP</b>." },
      { target: "Operational plan", c: "ops", sents: ["Kraft Foods will make pickles.", "The plan describes a 1,000 sq ft kitchen with three grinders and mango supply from Nashik.", "The owners are sisters.", "They plan to sell in Pune."], a: 1, why: "Layout, machines, raw material: <b>operational</b>." }
    ],
    explain: [
      { s: "A plan says the shop will sell 600 units to cover all costs.", o: ["Break-even point", "Project cost", "HR plan", "Marketing plan"], a: 0, c: "fin", why: "The clue is <i>cover all costs</i>: <b>break-even</b>." },
      { s: "A company's shareholders change every day, but it continues.", o: ["Perpetual succession", "Unlimited liability", "Partnership", "Deed"], a: 0, c: "forms", why: "<b>Perpetual succession</b>." },
      { s: "A sweet shop needs a food-safety licence before opening.", o: ["Formalities (FSSAI)", "Marketing plan", "Feasibility", "Break-even"], a: 0, c: "formal", why: "<b>FSSAI formality</b>." },
      { s: "The plan names the managing director and department heads.", o: ["Organisational plan", "Operational plan", "Financial plan", "HR plan"], a: 0, c: "org", why: "<b>Organisational</b>." }
    ]
  }
});
