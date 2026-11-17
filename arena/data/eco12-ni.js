/* Revision Arena · Class XII Economics · Unit 1 · National Income and Related Aggregates (Parts 1-7). Original cases; every figure recomputed. */
NFArena.register({
  id: "eco12-ni", cls: "XII", subject: "Economics", unit: "Unit", num: "1",
  title: "National Income and Related Aggregates",
  tagline: "Macro basics, circular flow, GDP to NNP, three methods of measurement, real vs nominal GDP and welfare.",
  notesLink: "../#eco12-ni",
  concepts: {
    macro: { n: "Macroeconomics vs microeconomics", s: "basics" },
    goods: { n: "Final, intermediate, consumption and capital goods", s: "basics" },
    flowstock: { n: "Stocks, flows and investment", s: "basics" },
    cflow: { n: "Circular flow of income", s: "basics" },
    terr: { n: "Domestic territory and normal resident", s: "agg" },
    agg: { n: "GDP, GNP, NDP, NNP at MP and FC", s: "agg" },
    va: { n: "Value added method and double counting", s: "methods" },
    inc: { n: "Income method", s: "methods" },
    exp: { n: "Expenditure method", s: "methods" },
    incl: { n: "Items included or excluded", s: "incl" },
    real: { n: "Real and nominal GDP, GDP deflator", s: "welfare" },
    welfare: { n: "GDP and welfare", s: "welfare" }
  },
  overview: {
    text: "<b>National income</b> (NNP at factor cost) is the sum of factor incomes earned by the <b>normal residents</b> of a country during a year. It can be measured three ways: the <b>value added</b>, <b>income</b> and <b>expenditure</b> methods, which give the same answer because production = income = expenditure in the <b>circular flow</b>.",
    points: [
      "<b>National = Domestic + NFIA</b>; <b>Net = Gross − Depreciation</b>; <b>Factor cost = Market price − Net indirect taxes</b>.",
      "Only <b>final</b> goods are counted; counting intermediate goods causes <b>double counting</b>.",
      "Transfer payments, second-hand goods and financial assets are <b>not</b> part of national income.",
      "<b>Real GDP</b> uses base-year prices; GDP is not a perfect measure of <b>welfare</b>."
    ],
    map: {
      center: "National Income",
      branches: [
        { t: "Basics", c: ["Macro vs micro", "Final vs intermediate", "Stocks and flows", "Circular flow"] },
        { t: "Aggregates", c: ["Domestic vs national", "Gross vs net", "MP vs FC"] },
        { t: "Methods", c: ["Value added", "Income", "Expenditure"] },
        { t: "Beyond GDP", c: ["Included / excluded items", "Real vs nominal", "GDP and welfare"] }
      ]
    }
  },
  sections: [
    {
      id: "basics", title: "Basic concepts and circular flow", sub: "The language of macroeconomics", icon: "🔄", color: "#4da3ff",
      quick: [
        "<b>Macroeconomics</b> studies the economy as a whole (aggregates like national income, employment, price level); <b>microeconomics</b> studies individual units.",
        "<b>Final goods</b> are bought for consumption or investment and are not resold or used up in production that year. <b>Intermediate goods</b> are used up as inputs or resold. The same good can be either: it depends on <b>use</b>.",
        "<b>Capital goods</b> are durable final goods used again and again in production (machines, buildings).",
        "<b>Stock</b>: measured at a point of time (wealth, capital). <b>Flow</b>: measured over a period (income, investment, depreciation).",
        "<b>Gross investment</b> = Net investment + Depreciation. Investment = fixed capital formation + change in stock.",
        "<b>Circular flow (two-sector)</b>: firms pay factor incomes to households (money flow); households supply factor services (real flow). Production = Income = Expenditure."
      ],
      table: { cap: "Same good, different classification", head: ["Good", "Bought by", "Type"], rows: [["Car", "A family", "Final (consumption)"], ["Car", "A taxi company", "Final (capital)"], ["Milk", "A household", "Final"], ["Milk", "A sweet shop", "Intermediate"], ["Machine", "A factory, for use", "Final (capital)"]] },
      cards: [
        { t: "Real and money flows", tag: "def", b: "<p><b>Real flow</b>: factor services from households to firms and goods from firms to households. <b>Money flow</b>: factor payments and consumption spending, moving in the <b>opposite</b> direction.</p>" },
        { t: "Why the three totals match", tag: "why", b: "<p>Whatever firms produce is paid out as factor income, and households spend that income on the same output. So the value of output, income and expenditure are equal.</p>" }
      ],
      exam: ["'Wheat bought by a flour mill' → intermediate.", "Depreciation is a <b>flow</b>; capital is a <b>stock</b>."]
    },
    {
      id: "agg", title: "Aggregates of national income", sub: "Domestic or national, gross or net, MP or FC", icon: "🧮", color: "#22c55e",
      quick: [
        "<b>Domestic territory</b>: political frontiers plus ships, aircraft and fishing vessels operated by residents, and the country's embassies abroad. Foreign embassies in India are <b>not</b> India's domestic territory.",
        "<b>Normal resident</b>: a person or institution whose centre of economic interest is in that country (living there over a year, as a rule).",
        "<b>NFIA</b> = Factor income earned from abroad − Factor income paid to non-residents. <b>GNP = GDP + NFIA</b>.",
        "<b>Net = Gross − Depreciation</b> (consumption of fixed capital).",
        "<b>FC = MP − Net indirect taxes</b>, where NIT = Indirect taxes − Subsidies.",
        "<b>National income = NNP at FC</b> = GDP at MP − Depreciation + NFIA − NIT."
      ],
      table: { cap: "From GDP at MP", head: ["Aggregate", "Formula"], rows: [["GNP at MP", "GDP MP + NFIA"], ["NDP at MP", "GDP MP − Depreciation"], ["GDP at FC", "GDP MP − NIT"], ["NNP at FC (NI)", "GDP MP − Dep + NFIA − NIT"]] },
      cards: [
        { t: "Worked example", tag: "eg", b: "<p>GDP MP ₹1,250 cr; depreciation 100; NIT 80; NFIA 20.</p><p>NNP FC = 1,250 − 100 + 20 − 80 = <b>₹1,090 cr</b>.</p>" },
        { t: "Negative NFIA", tag: "tip", b: "<p>If a country pays more factor income abroad than it earns, NFIA is negative and GNP is <b>smaller</b> than GDP.</p>" }
      ],
      exam: ["Remember the order does not matter: subtract depreciation, subtract NIT, add NFIA."]
    },
    {
      id: "methods", title: "Three methods of measurement", sub: "Value added, income, expenditure", icon: "📐", color: "#f5b301",
      quick: [
        "<b>Value added method</b>: Value of output = Sales + Change in stock; GVA MP = Value of output − Intermediate consumption; NVA FC = GVA MP − Depreciation − NIT. Sum NVA FC of all sectors = NDP FC; add NFIA = NI.",
        "<b>Income method</b>: NDP FC = Compensation of employees + Operating surplus + Mixed income. Operating surplus = Rent + Royalty + Interest + Profit; Profit = Dividend + Corporate tax + Undistributed profit.",
        "<b>Compensation of employees</b> includes wages in cash and kind and the <b>employer's contribution</b> to social security.",
        "<b>Expenditure method</b>: GDP MP = PFCE + GFCE + GDCF + Net exports (X − M).",
        "<b>Double counting</b> is avoided by counting only final goods or only value added."
      ],
      table: { cap: "Value added along a chain (₹)", head: ["Firm", "Sells for", "Bought inputs", "Value added"], rows: [["Farmer (wheat)", "1,000", "0", "1,000"], ["Miller (flour)", "1,500", "1,000", "500"], ["Baker (bread)", "2,200", "1,500", "700"], ["Total", "", "", "2,200 = final price"]] },
      cards: [
        { t: "Worked example: value added", tag: "eg", b: "<p>Sales 5,000; opening stock 1,000; closing stock 800; IC 2,000; depreciation 300; NIT 200.</p><p>Value of output = 5,000 + (800 − 1,000) = 4,800. GVA MP = 2,800. NVA FC = 2,800 − 300 − 200 = <b>2,300</b>.</p>" },
        { t: "Worked example: income method", tag: "eg", b: "<p>COE 600; rent 100; interest 80; profit 220; mixed income 300; NFIA −20.</p><p>OS = 400; NDP FC = 1,300; NNP FC = <b>1,280</b>.</p>" }
      ],
      exam: ["Change in stock can be negative.", "Mixed income is the income of self-employed persons (labour + capital mixed)."]
    },
    {
      id: "incl", title: "Included or excluded?", sub: "The board's favourite trap", icon: "🎯", color: "#ff5470",
      quick: [
        "<b>Excluded:</b> transfer payments (old-age pension, scholarships, unemployment allowance), sale of second-hand goods, purchase of shares and bonds, capital gains, windfall gains, interest on national debt, services of a homemaker.",
        "<b>Included:</b> commission or brokerage on second-hand goods and shares (a fresh service), imputed rent of owner-occupied houses, production for self-consumption, employer's contribution to provident fund, free services to employees.",
        "Test: <b>was a good or service produced this year in exchange for this payment?</b> If not, exclude it."
      ],
      table: { cap: "Quick decisions", head: ["Item", "In national income?", "Why"], rows: [["Old-age pension", "No", "Transfer payment"], ["Brokerage on shares", "Yes", "Payment for a service"], ["Sale of an old car", "No", "Produced in an earlier year"], ["Imputed rent of own house", "Yes", "Housing service produced"], ["Lottery prize", "No", "Windfall gain"], ["Interest paid by a firm on a loan", "Yes", "Factor income"], ["Interest on national debt", "No", "Treated as transfer payment"]] },
      cards: [
        { t: "Second-hand goods", tag: "tip", b: "<p>The old car was counted in the year it was made. Counting its resale again would be double counting. Only the <b>dealer's commission</b> is new income.</p>" }
      ],
      exam: ["Always give the reason; the reason carries the mark."]
    },
    {
      id: "welfare", title: "Real GDP and welfare", sub: "More output or just higher prices?", icon: "🌱", color: "#c084fc",
      quick: [
        "<b>Nominal GDP</b>: at current prices. <b>Real GDP</b>: at base-year (constant) prices; shows the change in actual output.",
        "<b>GDP deflator</b> = Nominal GDP ÷ Real GDP × 100.",
        "<b>GDP and welfare:</b> higher GDP need not mean higher welfare because of (i) <b>distribution</b> of income, (ii) <b>non-monetary exchanges</b> not counted, (iii) <b>externalities</b> (pollution, positive spillovers), (iv) <b>composition</b> of GDP (more weapons vs more food)."
      ],
      cards: [
        { t: "Worked example", tag: "eg", b: "<p>Nominal GDP ₹1,500 cr; deflator 125 → Real GDP = 1,500 ÷ 125 × 100 = <b>₹1,200 cr</b>.</p>" },
        { t: "Externalities", tag: "def", b: "<p>A factory's smoke harms nearby farms but is not deducted from GDP (negative externality). A beautiful public garden helps people but adds little to GDP (positive externality).</p>" }
      ],
      exam: ["'GDP rose but most income went to a few families' → distribution limitation."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "macro", q: "What does macroeconomics study?", a: "The economy as a whole: aggregates like national income, employment and the general price level." },
    { k: "Goods", c: "goods", q: "When is a good 'final'?", a: "When it is bought for consumption or investment and not resold or used up as input during the year." },
    { k: "Goods", c: "goods", q: "Is a machine bought by a factory a final good?", a: "Yes: a final capital good (investment)." },
    { k: "Flow", c: "flowstock", q: "Is national income a stock or a flow?", a: "A flow (measured over a year)." },
    { k: "Formula", c: "flowstock", q: "Gross investment = ?", a: "Net investment + Depreciation." },
    { k: "Circular flow", c: "cflow", q: "In which direction do real and money flows move?", a: "Opposite directions." },
    { k: "Territory", c: "terr", q: "Is the US embassy in New Delhi part of India's domestic territory?", a: "No." },
    { k: "Formula", c: "agg", q: "NFIA?", a: "Factor income earned from abroad − Factor income paid to non-residents." },
    { k: "Formula", c: "agg", q: "Factor cost from market price?", a: "MP − Net indirect taxes (indirect taxes − subsidies)." },
    { k: "Formula", c: "agg", q: "National income = ?", a: "NNP at FC = GDP MP − Depreciation + NFIA − NIT." },
    { k: "Formula", c: "va", q: "Value of output?", a: "Sales + Change in stock." },
    { k: "Method", c: "va", q: "How does the value added method avoid double counting?", a: "It counts only the value added at each stage, not the inputs again." },
    { k: "Formula", c: "inc", q: "Operating surplus?", a: "Rent + Royalty + Interest + Profit." },
    { k: "Formula", c: "inc", q: "Profit is split into…?", a: "Dividend + Corporate tax + Undistributed profit." },
    { k: "Formula", c: "exp", q: "GDP at MP by expenditure method?", a: "PFCE + GFCE + GDCF + (X − M)." },
    { k: "Include?", c: "incl", q: "Is old-age pension part of national income?", a: "No: it is a transfer payment." },
    { k: "Include?", c: "incl", q: "Is imputed rent of an owner-occupied house included?", a: "Yes: housing service is produced." },
    { k: "Formula", c: "real", q: "GDP deflator?", a: "Nominal GDP ÷ Real GDP × 100." },
    { k: "Welfare", c: "welfare", q: "Name the four limitations of GDP as a welfare index.", a: "Distribution of income, non-monetary exchanges, externalities, composition of GDP." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Wheat, flour, bread",
      text: "<p>In a village, <b>Kishan</b> grows wheat and sells it to <span class='co'>Annapurna Mills</span> for ₹1,000. The mill makes flour and sells it to <span class='co'>Good Morning Bakery</span> for ₹1,500. The bakery bakes bread and sells it to households for ₹2,200. An official adds up 1,000 + 1,500 + 2,200 = ₹4,700 as the village's output.</p>",
      qs: [
        { q: "Is the official right? Calculate the correct value of output using the value added method and name the error.", m: 3, type: "Apply and correct", c: "va", ans: "₹2,200; error is double counting", keys: ["2,200", "double counting"], hint: "Count only what each firm adds.",
          points: [{ p: "Value added: 1,000; 500; 700", m: 1, k: ["500", "700"] }, { p: "Total = <b>₹2,200</b> (= final price of bread)", m: 1, k: ["2,200"] }, { p: "Error: <b>double counting</b> of intermediate goods", m: 1, k: ["double"] }],
          structure: ["VA of each firm, total, name the error."],
          model: "<p>Value added: farmer 1,000 − 0 = ₹1,000; mill 1,500 − 1,000 = ₹500; bakery 2,200 − 1,500 = ₹700.</p><p>Total value added = <b>₹2,200</b>, equal to the value of the final good (bread).</p><p>The official is wrong: by adding wheat and flour again, he made the error of <b>double counting</b>.</p>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "A country's statistics office",
      text: "<p>The statistics office of <span class='co'>Republic of Sundar</span> reports (₹ crore): private final consumption expenditure 800; government final consumption expenditure 200; gross domestic capital formation 300; exports 100; imports 150; depreciation 100; indirect taxes 100; subsidies 20; net factor income from abroad 20.</p>",
      qs: [
        { q: "Calculate GDP at market price and national income.", m: 4, type: "Calculate", c: "exp", ans: "GDP MP 1,250; NI 1,090", keys: ["1,250", "1,090"], hint: "NIT = 100 − 20.",
          points: [{ p: "Net exports = 100 − 150 = −50", m: 1, k: ["-50", "−50", "(50)"] }, { p: "GDP MP = 800 + 200 + 300 − 50 = <b>1,250</b>", m: 1, k: ["1,250"] }, { p: "NIT = 100 − 20 = 80", m: 1, k: ["80"] }, { p: "NI = 1,250 − 100 + 20 − 80 = <b>1,090</b>", m: 1, k: ["1,090"] }],
          structure: ["GDP MP by expenditure, then NNP FC."],
          model: "<p>Net exports = 100 − 150 = −50.</p><p>GDP MP = 800 + 200 + 300 + (−50) = <b>₹1,250 crore</b>.</p><p>NIT = 100 − 20 = 80. National income (NNP FC) = 1,250 − 100 (dep) + 20 (NFIA) − 80 (NIT) = <b>₹1,090 crore</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Payments that are not income",
      text: "<p>During a year in Sundar: the government paid old-age pensions of ₹50 cr; Ravi sold his 5-year-old car for ₹3 lakh through a dealer who charged ₹15,000; families living in their own houses would have paid ₹200 cr as rent; Meena won ₹10 lakh in a lottery; a firm paid ₹40 cr interest on a bank loan.</p>",
      qs: [
        { q: "State, with reasons, whether each item is included in national income.", m: 5, type: "Classify with reasons", c: "incl", ans: "Pension no; car sale no but commission yes; imputed rent yes; lottery no; firm's interest yes", keys: ["transfer", "commission", "imputed"], hint: "Was something produced this year for this payment?",
          points: [{ p: "Pension: <b>excluded</b>, transfer payment", m: 1, k: ["transfer"] }, { p: "Car sale ₹3 lakh excluded (already counted); dealer's ₹15,000 <b>included</b>", m: 1, k: ["commission", "15,000"] }, { p: "Imputed rent ₹200 cr <b>included</b>", m: 1, k: ["imputed"] }, { p: "Lottery: <b>excluded</b>, windfall gain", m: 1, k: ["windfall"] }, { p: "Firm's loan interest <b>included</b>: factor income for production", m: 1, k: ["factor"] }],
          structure: ["Item → included/excluded → reason, five lines."],
          model: "<p>(i) Pension: <b>excluded</b>; a transfer payment with no service in return.</p><p>(ii) Old car: the ₹3 lakh is <b>excluded</b> (counted when the car was made); the dealer's commission of ₹15,000 is <b>included</b> (a fresh service).</p><p>(iii) Imputed rent: <b>included</b>; owner-occupiers produce housing services for themselves.</p><p>(iv) Lottery: <b>excluded</b>; a windfall gain, not earned by production.</p><p>(v) Interest paid by a firm on a production loan: <b>included</b>; it is a factor payment for capital.</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "Did the country really grow?",
      text: "<p>Sundar's nominal GDP rose from ₹1,000 cr in 2024-25 (base year) to ₹1,500 cr in 2025-26. The GDP deflator for 2025-26 is 125. A minister claims output grew by 50%.</p>",
      qs: [
        { q: "Calculate real GDP for 2025-26 and the real growth rate. Is the minister right?", m: 3, type: "Calculate and evaluate", c: "real", ans: "Real GDP 1,200; real growth 20%; minister wrong", keys: ["1,200", "20%"], hint: "Real = Nominal ÷ deflator × 100.",
          points: [{ p: "Real GDP = 1,500 ÷ 125 × 100 = <b>₹1,200 cr</b>", m: 1, k: ["1,200"] }, { p: "Real growth = 200 ÷ 1,000 × 100 = <b>20%</b>", m: 1, k: ["20"] }, { p: "Minister wrong: 50% includes price rise; output grew only 20%", m: 1, k: ["price", "wrong", "inflation"] }],
          structure: ["Real GDP, growth, verdict."],
          model: "<p>Real GDP = 1,500 ÷ 125 × 100 = <b>₹1,200 crore</b>. Base-year real GDP = ₹1,000 crore.</p><p>Real growth = (1,200 − 1,000) ÷ 1,000 × 100 = <b>20%</b>.</p><p>The minister is <b>wrong</b>: the 50% rise is in nominal GDP and includes a price rise. Actual output grew only 20%.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Richer, but better off?",
      text: "<p>Sundar's real GDP rose by 9% last year. A new chemical park caused the growth, but it polluted the river that fishing villages depend on. Most of the extra income went to the park's owners, and a large share of output was military equipment.</p>",
      qs: [
        { q: "Explain why this rise in GDP may not mean a rise in welfare, linking each reason to the case.", m: 4, type: "Evaluate", c: "welfare", ans: "Externality (pollution), distribution, composition", keys: ["externalit", "distribution", "composition"], hint: "Three limitations are visible here.",
          points: [{ p: "<b>Negative externality</b>: river pollution harms fishing villages, not deducted from GDP", m: 1.5, k: ["externalit", "pollut"] }, { p: "<b>Distribution</b>: extra income went to a few owners", m: 1.5, k: ["distribution", "few", "unequal"] }, { p: "<b>Composition</b>: much of output is military equipment, not consumer goods", m: 1, k: ["composition", "military"] }],
          structure: ["Each limitation: name, line from case, effect on welfare."],
          model: "<p>(i) <b>Externalities:</b> the chemical park polluted the river and harmed fishing villages. This cost is not subtracted from GDP, so welfare rises less than GDP.</p><p>(ii) <b>Distribution of income:</b> most of the extra income went to the park's owners, so the average person may not be better off.</p><p>(iii) <b>Composition of GDP:</b> a large part of output was military equipment, which does not raise people's living standards directly.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "macro", q: "Which of these is studied in macroeconomics?", o: ["Price of a mobile phone", "Demand of one household", "National income", "Cost of one firm"], a: 2, hint: "Aggregate.", why: "<b>National income</b> is an aggregate." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "flowstock", q: "Which is a stock variable?", o: ["Income", "Wealth", "Investment", "Depreciation"], a: 1, hint: "At a point of time.", why: "<b>Wealth</b>." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "agg", q: "Net = Gross − ______", o: ["NFIA", "Depreciation", "Net indirect tax", "Subsidies"], a: 1, hint: "Wear and tear.", why: "<b>Depreciation</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "goods", q: "Milk bought by a sweet shop is:", o: ["A final good", "An intermediate good", "A capital good", "A free good"], a: 1, hint: "Used up as input.", why: "<b>Intermediate</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "agg", q: "GDP MP ₹500 cr; NFIA −₹20 cr. GNP MP is:", o: ["₹520 cr", "₹480 cr", "₹500 cr", "₹460 cr"], a: 1, hint: "Add NFIA.", why: "500 + (−20) = <b>₹480 cr</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "inc", q: "Which is NOT part of operating surplus?", o: ["Rent", "Interest", "Compensation of employees", "Profit"], a: 2, hint: "Property and entrepreneurship.", why: "<b>Compensation of employees</b> is separate." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "va", q: "Sales ₹800; opening stock ₹100; closing stock ₹60; IC ₹300. GVA MP is:", o: ["₹500", "₹460", "₹540", "₹760"], a: 1, hint: "Change in stock = −40.", why: "Value of output 760 − 300 = <b>₹460</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "terr", q: "Which is part of India's domestic territory?", o: ["Japanese embassy in Delhi", "Indian embassy in Tokyo", "UN office in Delhi", "A US ship in Mumbai port"], a: 1, hint: "Own embassies abroad.", why: "<b>Indian embassy in Tokyo</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "incl", q: "Old-age pension is not included in national income.", r: "It is a transfer payment without any productive service in return.", a: 0, hint: "Why excluded?", why: "Both true; R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "real", q: "Real GDP is a better measure of growth in output than nominal GDP.", r: "Real GDP is calculated at current-year prices.", a: 2, hint: "Base-year prices.", why: "A true; R false (real GDP uses <b>base-year</b> prices)." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "cflow", q: "In a two-sector economy, production equals income.", r: "Households spend their entire income on goods produced by firms.", a: 1, hint: "Does R explain production = income?", why: "Both true, but R explains income = expenditure, not production = income." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "incl", q: "Purchase of shares is included in national income.", a: false, hint: "Financial asset.", why: "False: only brokerage is included." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "cflow", q: "Real flow and money flow move in opposite directions.", a: true, hint: "Goods one way, money the other.", why: "True." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "inc", q: "Employer's contribution to provident fund is part of compensation of employees.", a: true, hint: "Paid for labour.", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "agg", q: "Match the aggregate with its formula.", pairs: [["GNP MP", "GDP MP + NFIA"], ["NDP MP", "GDP MP − Depreciation"], ["GDP FC", "GDP MP − NIT"], ["NNP FC", "GDP MP − Dep + NFIA − NIT"]], hint: "One adjustment each, then all three.", why: "Each aggregate has one formula." },
    { id: "q16", t: "match", d: "M", m: 4, c: "incl", q: "Match the item with the reason it is excluded.", pairs: [["Scholarship to students", "Transfer payment"], ["Sale of a 3-year-old scooter", "Already counted earlier"], ["Lottery prize", "Windfall gain"], ["Purchase of bonds", "Financial transaction"]], hint: "Why is it not new income?", why: "Each exclusion has its own reason." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "agg", q: "National income is NNP at ______ cost.", acc: ["factor"], hint: "FC.", why: "Factor." },
    { id: "q18", t: "fill", d: "M", m: 1, c: "real", q: "GDP deflator = Nominal GDP ÷ ______ GDP × 100.", acc: ["real"], hint: "Constant prices.", why: "Real." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "va", q: "Counting the value of a good more than once is called double ______.", acc: ["counting"], hint: "Error.", why: "Counting." },
    { id: "q20", t: "short", d: "E", m: 1, c: "exp", q: "Expand GDCF.", acc: ["gross domestic capital formation"], hint: "Investment.", why: "Gross domestic capital formation." },
    { id: "q21", t: "short", d: "M", m: 1, c: "real", q: "Nominal GDP ₹1,500 cr; deflator 125. Real GDP in ₹ crore?", acc: ["1200", "1,200"], hint: "÷ 1.25.", why: "₹1,200 crore." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "goods", q: "Distinguish between final goods and intermediate goods with one example each.", hint: "Use and end of the year.", why: "",
      points: [{ p: "Final: for consumption/investment, not resold", m: 1, k: ["consumption", "investment", "not resold"] }, { p: "Intermediate: used up as input or resold within the year", m: 1, k: ["input", "resold", "raw"] }, { p: "Examples (bread for a family; flour for a bakery)", m: 1, k: ["bread", "flour", "milk", "example"] }],
      model: "<p><b>Final goods</b> are bought for final use: consumption or investment, and are not resold or used up in production during the year (e.g. bread bought by a family).</p><p><b>Intermediate goods</b> are used up as inputs or resold during the year (e.g. flour bought by a bakery).</p><p>Only final goods are counted in national income to avoid double counting.</p>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "inc", q: "Calculate national income: COE 600; rent 100; interest 80; profit 220; mixed income 300; NFIA −20 (₹ crore).", hint: "OS first.", why: "",
      points: [{ p: "OS = 100 + 80 + 220 = 400", m: 1, k: ["400"] }, { p: "NDP FC = 600 + 400 + 300 = 1,300", m: 1, k: ["1,300"] }, { p: "NNP FC = <b>1,280</b>", m: 1, k: ["1,280"] }],
      model: "<p>Operating surplus = 100 + 80 + 220 = 400.</p><p>NDP FC = COE + OS + MI = 600 + 400 + 300 = 1,300.</p><p>National income = NDP FC + NFIA = 1,300 − 20 = <b>₹1,280 crore</b>.</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "va", q: "Calculate NVA at FC: sales ₹5,000; opening stock ₹1,000; closing stock ₹800; intermediate consumption ₹2,000; depreciation ₹300; net indirect taxes ₹200.", hint: "Value of output = sales + change in stock.", why: "",
      points: [{ p: "Change in stock = −200", m: 1, k: ["-200", "−200", "(200)"] }, { p: "Value of output = 4,800", m: 1, k: ["4,800"] }, { p: "GVA MP = 2,800", m: 1, k: ["2,800"] }, { p: "NVA FC = <b>2,300</b>", m: 1, k: ["2,300"] }],
      model: "<p>Change in stock = 800 − 1,000 = −200. Value of output = 5,000 − 200 = ₹4,800.</p><p>GVA MP = 4,800 − 2,000 = ₹2,800.</p><p>NVA FC = 2,800 − 300 − 200 = <b>₹2,300</b>.</p>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "welfare", q: "Explain any two reasons why GDP may not be a good index of welfare.", hint: "Distribution, non-monetary, externalities, composition.", why: "",
      points: [{ p: "Reason 1 named", m: 1, k: ["distribution", "non-monetary", "externalit", "composition"] }, { p: "Reason 1 explained", m: 1, k: ["income", "barter", "pollut", "goods"] }, { p: "Reason 2 named", m: 1, k: ["distribution", "non-monetary", "externalit", "composition"] }, { p: "Reason 2 explained", m: 1, k: ["income", "barter", "pollut", "goods"] }],
      model: "<p>(i) <b>Distribution of GDP:</b> if the rise in GDP goes to a few rich people, the welfare of the majority may not rise.</p><p>(ii) <b>Externalities:</b> harmful effects like pollution are not deducted from GDP, so welfare may fall even as GDP rises. (Also: non-monetary exchanges are not counted; composition of GDP matters.)</p>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "exp", q: "From the following (₹ crore), calculate GDP at MP by the expenditure method and national income: PFCE 800; GFCE 200; GDCF 300; exports 100; imports 150; depreciation 100; indirect taxes 100; subsidies 20; NFIA 20.", hint: "Net exports negative.", why: "",
      points: [{ p: "Formula: PFCE + GFCE + GDCF + (X − M)", m: 1, k: ["pfce"] }, { p: "Net exports −50", m: 1, k: ["-50", "−50"] }, { p: "GDP MP = 1,250", m: 1, k: ["1,250"] }, { p: "NIT = 80", m: 1, k: ["80"] }, { p: "Formula for NNP FC", m: 1, k: ["depreciation", "nfia"] }, { p: "National income = <b>1,090</b>", m: 1, k: ["1,090"] }],
      model: "<p>GDP MP = PFCE + GFCE + GDCF + (X − M) = 800 + 200 + 300 + (100 − 150) = <b>₹1,250 crore</b>.</p><p>NIT = 100 − 20 = 80.</p><p>NNP FC = GDP MP − Depreciation + NFIA − NIT = 1,250 − 100 + 20 − 80 = <b>₹1,090 crore</b>.</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "cflow", q: "Explain the circular flow of income in a two-sector economy with a diagram description. Why are production, income and expenditure equal?", hint: "Households and firms; real and money flows.", why: "",
      points: [{ p: "Two sectors: households and firms", m: 1, k: ["households", "firms"] }, { p: "Real flow: factor services → firms; goods → households", m: 1, k: ["factor services", "goods"] }, { p: "Money flow: factor payments → households; consumption spending → firms", m: 1, k: ["factor payment", "spending", "expenditure"] }, { p: "Flows move in opposite directions", m: 1, k: ["opposite"] }, { p: "Assumptions: households spend all income; no government/foreign sector/saving", m: 1, k: ["spend all", "no saving", "assum"] }, { p: "Hence production = income = expenditure", m: 1, k: ["production", "income", "expenditure"] }],
      model: "<p>In a two-sector economy there are <b>households</b> and <b>firms</b>.</p><p><b>Real flow:</b> households supply factor services (land, labour, capital, enterprise) to firms; firms supply goods and services to households.</p><p><b>Money flow:</b> firms pay factor incomes (rent, wages, interest, profit) to households; households spend this income on firms' goods. The two flows move in <b>opposite directions</b>.</p><p>Assuming households spend all their income and there is no saving, government or foreign sector, the value of output produced by firms is paid out as factor income, and the whole income comes back as spending. Hence <b>production = income = expenditure</b>.</p>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "goods", q: "A taxi company buys a car. For national income, the car is", o: ["Intermediate good", "Final consumption good", "Final capital good", "Not counted"], a: 2, hint: "Used again and again to earn.", why: "<b>Final capital good</b>." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "incl", q: "A homemaker cooks and cleans for her family. Her services are", o: ["Included at market value", "Excluded: not exchanged for money", "Included as mixed income", "Included as transfer"], a: 1, hint: "No market transaction.", why: "<b>Excluded</b>, though they add to welfare." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "agg", q: "Indian workers abroad send home more factor income than foreigners earn in India. Then", o: ["GNP > GDP", "GNP < GDP", "GNP = GDP", "NFIA = 0"], a: 0, hint: "NFIA positive.", why: "Positive NFIA → <b>GNP > GDP</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "incl", passage: "<b>Rhea</b> receives a monthly scholarship of ₹2,000 from the government.", q: "In national income, this is", o: ["Included as factor income", "Excluded as transfer payment", "Included as mixed income", "Included as COE"], a: 1, hint: "No service in return.", why: "<b>Transfer payment</b>: excluded." },
    { id: "q32", t: "case", d: "M", m: 1, c: "va", passage: "A baker buys flour for ₹1,500 and sells bread for ₹2,200. The flour mill bought wheat for ₹1,000.", q: "Value added by the baker is", o: ["₹2,200", "₹1,200", "₹700", "₹500"], a: 2, hint: "Sales − input.", why: "2,200 − 1,500 = <b>₹700</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "real", passage: "Nominal GDP rose 30% in a year when prices rose 30%.", q: "Real GDP", o: ["Rose 30%", "Rose 60%", "Stayed about the same", "Fell 30%"], a: 2, hint: "All due to prices.", why: "No real growth: <b>about the same</b>." }
  ],
  find: {
    mcq: [
      { s: "A study of unemployment in the whole country.", o: ["Macroeconomics", "Microeconomics", "Value added", "Welfare"], a: 0, c: "macro", d: "E", why: "<b>Macroeconomics</b>." },
      { s: "Bricks bought by a builder to construct a house for sale.", o: ["Intermediate good", "Final good", "Capital good", "Transfer"], a: 0, c: "goods", d: "E", why: "<b>Intermediate</b>." },
      { s: "Total machines in the country on 31 March.", o: ["Stock", "Flow", "Transfer", "NFIA"], a: 0, c: "flowstock", d: "E", why: "At a point of time: <b>stock</b>." },
      { s: "Firms pay wages to households; households buy firms' goods.", o: ["Circular flow (money flow)", "Real flow", "Double counting", "Externality"], a: 0, c: "cflow", d: "E", why: "<b>Money flow</b> of the circular flow." },
      { s: "Indian Navy ship sailing in the Arabian Sea outside Indian waters.", o: ["India's domestic territory", "Not domestic territory", "Rest of world", "Free zone"], a: 0, c: "terr", d: "M", why: "Operated by residents: <b>domestic territory</b>." },
      { s: "Factor income earned from abroad minus factor income paid abroad.", o: ["NFIA", "Net exports", "NIT", "Depreciation"], a: 0, c: "agg", d: "M", why: "<b>NFIA</b>." },
      { s: "GDP at MP minus depreciation minus net indirect taxes plus NFIA.", o: ["National income (NNP FC)", "GNP MP", "NDP MP", "GDP FC"], a: 0, c: "agg", d: "M", why: "<b>NNP FC</b>." },
      { s: "Sales plus change in stock minus intermediate consumption.", o: ["GVA at MP", "NVA at FC", "Mixed income", "Operating surplus"], a: 0, c: "va", d: "M", why: "<b>GVA MP</b>." },
      { s: "Income of a self-employed tailor using his own shop and machine.", o: ["Mixed income", "Operating surplus", "COE", "Transfer"], a: 0, c: "inc", d: "M", why: "<b>Mixed income</b>." },
      { s: "Rent + royalty + interest + profit.", o: ["Operating surplus", "Mixed income", "COE", "NFIA"], a: 0, c: "inc", d: "M", why: "<b>Operating surplus</b>." },
      { s: "PFCE + GFCE + GDCF + net exports.", o: ["GDP at MP (expenditure)", "NNP FC", "Operating surplus", "GVA"], a: 0, c: "exp", d: "C", why: "<b>Expenditure method</b>." },
      { s: "Commission earned by a property dealer on resale of an old flat.", o: ["Included", "Excluded", "Transfer", "Windfall"], a: 0, c: "incl", d: "C", why: "A fresh service: <b>included</b>." },
      { s: "Interest paid by the government on its war loans.", o: ["Excluded (transfer)", "Included as factor income", "Mixed income", "Royalty"], a: 0, c: "incl", d: "C", why: "Interest on national debt: <b>excluded</b>." },
      { s: "GDP calculated at 2011-12 prices.", o: ["Real GDP", "Nominal GDP", "GDP deflator", "NFIA"], a: 0, c: "real", d: "C", why: "<b>Real GDP</b>." },
      { s: "Most extra income in a booming year went to the top 1%.", o: ["Distribution limitation", "Externality", "Non-monetary exchange", "Composition"], a: 0, c: "welfare", d: "C", why: "<b>Distribution</b>." },
      { s: "A farmer exchanges rice for a neighbour's labour, no money involved.", o: ["Non-monetary exchange", "Transfer", "Externality", "Mixed income"], a: 0, c: "welfare", d: "C", why: "<b>Non-monetary exchange</b>, not in GDP." }
    ],
    match: [
      { title: "Drag each situation onto its concept.", pairs: [["Counting wheat, flour and bread together", "Double counting", "va"], ["Pension to a retired teacher", "Transfer payment", "incl"], ["Rent you would pay for your own house", "Imputed rent", "incl"], ["Smoke from a factory harming farms", "Negative externality", "welfare"], ["Output at base-year prices", "Real GDP", "real"], ["Earned abroad − paid abroad", "NFIA", "agg"]] }
    ],
    wrong: [
      { stmts: ["Net = Gross − Depreciation.", "FC = MP − NIT.", "National = Domestic − NFIA.", "NIT = Indirect taxes − Subsidies."], a: 2, c: "agg", why: "National = Domestic <b>+</b> NFIA." },
      { stmts: ["Brokerage on shares is included.", "Imputed rent is included.", "Old-age pension is included.", "Production for self-consumption is included."], a: 2, c: "incl", why: "Pension is a <b>transfer</b>: excluded." },
      { stmts: ["Real GDP uses base-year prices.", "Nominal GDP uses current prices.", "GDP deflator = Real ÷ Nominal × 100.", "Real GDP shows change in output."], a: 2, c: "real", why: "Deflator = <b>Nominal ÷ Real</b> × 100." }
    ],
    para: [
      { target: "Mixed income", c: "inc", sents: ["Lalit runs a small cycle repair shop.", "He owns the shop and the tools and does the work himself.", "His earnings mix rent, interest, wages and profit.", "He opens at 9 a.m."], a: 2, why: "Earnings that cannot be split: <b>mixed income</b>." },
      { target: "Double counting", c: "va", sents: ["The survey team visited three firms.", "They added the sales of cotton, yarn and cloth.", "The total was far above the cloth's value.", "They wrote a report."], a: 1, why: "Adding inputs and output together: <b>double counting</b>." },
      { target: "Externality", c: "welfare", sents: ["A new cement plant opened near the village.", "The country's GDP rose.", "Dust from the plant made many villagers ill.", "The plant hired 200 workers."], a: 2, why: "Harm not paid for: <b>negative externality</b>." }
    ],
    explain: [
      { s: "Vegetables grown by a family for its own kitchen are valued and counted.", o: ["Production for self-consumption (included)", "Transfer", "Windfall", "Excluded"], a: 0, c: "incl", why: "The clue is <i>grown</i>: production happened, so <b>included</b>." },
      { s: "GDP rose but so did the number of guns produced.", o: ["Composition of GDP", "Distribution", "Externality", "Double counting"], a: 0, c: "welfare", why: "What is produced matters: <b>composition</b>." },
      { s: "A factory's machines lose ₹50 lakh of value in a year.", o: ["Depreciation", "NFIA", "Subsidy", "Transfer"], a: 0, c: "agg", why: "Wear and tear: <b>depreciation</b>." },
      { s: "Prices doubled and nominal GDP doubled.", o: ["No real growth", "Real GDP doubled", "Deflator 50", "Welfare doubled"], a: 0, c: "real", why: "All price effect: <b>no real growth</b>." }
    ]
  }
});
