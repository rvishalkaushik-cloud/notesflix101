/* Revision Arena · Class XII Economics · Unit 6 · Development Experience 1947-90 (Parts 1-3). Original cases; facts kept to the NCERT level. */
NFArena.register({
  id: "eco12-ied1", cls: "XII", subject: "Economics", unit: "Unit", num: "6",
  title: "Development Experience 1947-90",
  tagline: "The economy India inherited, the goals of planning, land reforms and the Green Revolution, industrial policy and import substitution.",
  notesLink: "../#eco12-ied1",
  concepts: {
    agri: { n: "Colonial agriculture: stagnation and its causes", s: "colonial" },
    ind: { n: "De-industrialisation under colonial rule", s: "colonial" },
    trade: { n: "Foreign trade under colonial rule", s: "colonial" },
    demo: { n: "Demographic condition and occupational structure", s: "colonial" },
    infra: { n: "Infrastructure under colonial rule", s: "colonial" },
    plan: { n: "Mixed economy and goals of five year plans", s: "plans" },
    land: { n: "Land reforms", s: "agriculture" },
    green: { n: "Green Revolution", s: "agriculture" },
    subsidy: { n: "Debate on agricultural subsidies", s: "agriculture" },
    ipr: { n: "Industrial Policy Resolution 1956 and licensing", s: "industry" },
    ssi: { n: "Small-scale industries", s: "industry" },
    isub: { n: "Import substitution (trade policy)", s: "industry" }
  },
  overview: {
    text: "At independence India inherited a <b>stagnant, colonial economy</b>: low farm productivity, ruined handicrafts, trade geared to Britain's needs, and poor health and literacy. The government chose a <b>mixed economy</b> with <b>five year plans</b> aiming at <b>growth, modernisation, self-reliance and equity</b>. Land reforms and the <b>Green Revolution</b> transformed agriculture; the <b>Industrial Policy Resolution 1956</b> gave the public sector the lead; and <b>import substitution</b> protected domestic industry.",
    points: [
      "Colonial rule turned India into a <b>supplier of raw materials</b> and a <b>market for British goods</b>.",
      "Plans: Planning Commission set up in 1950; First Five Year Plan from 1951.",
      "Green Revolution (from the mid-1960s): <b>HYV seeds</b> with fertilisers, pesticides and irrigation made India self-sufficient in food grains.",
      "By 1990, heavy controls and inefficiency set the stage for the 1991 reforms."
    ],
    map: {
      center: "Development 1947-90",
      branches: [
        { t: "Colonial legacy", c: ["Stagnant agriculture", "De-industrialisation", "Drain through trade", "Poor demography"] },
        { t: "Planning", c: ["Mixed economy", "Growth, modernisation", "Self-reliance, equity"] },
        { t: "Agriculture", c: ["Land reforms", "Green Revolution", "Subsidies debate"] },
        { t: "Industry and trade", c: ["IPR 1956", "Small-scale industries", "Import substitution"] }
      ]
    }
  },
  sections: [
    {
      id: "colonial", title: "The economy on the eve of independence", sub: "What two centuries of colonial rule left", icon: "🏚️", color: "#4da3ff",
      quick: [
        "<b>Agriculture</b>: stagnant, with very low productivity. Causes: the <b>zamindari system</b> (zamindars collected rent but did not improve land), <b>commercialisation</b> of agriculture (cash crops for British industry), poor irrigation and technology, and the effects of partition.",
        "<b>Industry</b>: <b>de-industrialisation</b>: India's famous handicrafts declined; India became an exporter of raw materials and importer of British finished goods. No capital goods industry; modern industry was limited (cotton and jute mills, TISCO in 1907).",
        "<b>Foreign trade</b>: Britain had a near <b>monopoly</b>; India exported raw materials (raw silk, cotton, indigo) and imported finished goods. The <b>export surplus</b> paid for the British administration and war expenses (a drain of wealth). The <b>Suez Canal</b> (1869) made the route shorter.",
        "<b>Demography</b>: high birth and death rates, <b>infant mortality about 218 per 1,000</b>, life expectancy about 44 years, literacy below 16%. <b>1921</b> is the 'year of great divide' after which population grew steadily.",
        "<b>Occupational structure</b>: about 70–75% of the workforce in agriculture, about 10% in manufacturing, 15–20% in services.",
        "<b>Infrastructure</b>: railways (from 1850), ports, posts and telegraph were built to serve <b>colonial interests</b> (moving raw materials and troops), not Indian development."
      ],
      table: { cap: "Colonial policy and its effect", head: ["Area", "Colonial policy", "Effect on India"], rows: [["Agriculture", "Zamindari, forced cash crops", "Low productivity, famines"], ["Industry", "Tariffs favouring British goods", "Decline of handicrafts"], ["Trade", "Raw materials out, finished goods in", "Drain of wealth via export surplus"], ["Infrastructure", "Railways for raw material and troops", "Little benefit to Indians"]] },
      cards: [
        { t: "Why the export surplus did not help India", tag: "why", b: "<p>India exported more than it imported, but the surplus was used to pay for the British government's expenses in India and its wars, and to import invisible items. No gold or wealth came back into the economy.</p>" },
        { t: "A positive side?", tag: "tip", b: "<p>Railways opened up long-distance trade, broke cultural barriers and helped commercialise agriculture, though their main purpose was colonial.</p>" }
      ],
      exam: ["'Indian weavers lost jobs as cheap Manchester cloth flooded in' → de-industrialisation."]
    },
    {
      id: "plans", title: "Mixed economy and five year plans", sub: "Choosing a path", icon: "🗺️", color: "#22c55e",
      quick: [
        "India chose a <b>mixed economy</b>: both the state and private sector, with the state controlling key industries.",
        "<b>Planning Commission</b> set up in <b>1950</b> with the Prime Minister as chairperson; the First Five Year Plan began in 1951.",
        "<b>Goals of planning</b>: (i) <b>growth</b>: increase in GDP; (ii) <b>modernisation</b>: new technology and social change (e.g. equal rights for women); (iii) <b>self-reliance</b>: avoid dependence on foreign countries, especially for food; (iv) <b>equity</b>: benefits of growth reach the poor.",
        "Goals can conflict: e.g. modern machines (modernisation) may reduce jobs (equity)."
      ],
      cards: [
        { t: "Why a mixed economy?", tag: "why", b: "<p>Leaders wanted the efficiency of markets but feared a purely capitalist path would ignore the poor. A socialist planned path seemed too restrictive. So India took the middle road.</p>" }
      ],
      exam: ["'Producing our own food instead of importing it' → self-reliance."]
    },
    {
      id: "agriculture", title: "Agriculture 1950-90", sub: "Land reforms and the Green Revolution", icon: "🌾", color: "#f5b301",
      quick: [
        "<b>Land reforms</b>: (i) <b>abolition of intermediaries</b> (zamindars) so tillers own land; (ii) <b>land ceiling</b>: fixing the maximum land a person can own, redistributing the surplus; (iii) tenancy reforms. Aim: <b>'land to the tiller'</b> and equity.",
        "Results: abolition of intermediaries succeeded in some states (Kerala, West Bengal); ceiling laws faced loopholes and delays by large landowners.",
        "<b>Green Revolution</b>: large increase in food-grain output from the use of <b>high-yielding variety (HYV) seeds</b>, with fertilisers, pesticides and assured irrigation.",
        "<b>First phase</b> (mid-1960s to mid-1970s): mainly <b>wheat and rice</b>, in <b>Punjab, Andhra Pradesh and Tamil Nadu</b>. Second phase (mid-1970s to mid-1980s): spread to more states and crops.",
        "Benefits: <b>self-sufficiency in food grains</b>, a <b>marketed surplus</b> (farmers sold more), and the government built a <b>buffer stock</b>.",
        "Risks: benefits first went to rich farmers and some regions; HYV crops were prone to pests. Credit and subsidies helped small farmers too."
      ],
      cards: [
        { t: "Marketed surplus", tag: "def", b: "<p>The part of farm output sold in the market by farmers. The Green Revolution raised it, which lowered food prices and helped low-income groups.</p>" },
        { t: "The subsidy debate", tag: "why", b: "<p><b>For:</b> subsidies on fertilisers and power encouraged poor farmers to adopt new technology. <b>Against:</b> once technology spread, subsidies mainly helped the fertiliser industry and rich farmers, and burdened the government.</p>" }
      ],
      exam: ["Land ceiling = <b>maximum</b> land, not minimum."]
    },
    {
      id: "industry", title: "Industry and trade 1950-90", sub: "Public sector lead and protection", icon: "🏭", color: "#ff5470",
      quick: [
        "<b>Industrial Policy Resolution 1956</b>: industries in three categories: (i) <b>exclusively state-owned</b>; (ii) state to start new units, private sector to supplement; (iii) the rest left to the private sector.",
        "<b>Industrial licensing</b>: private firms needed a licence to start or expand. It was used to promote industry in <b>backward regions</b> and to control output by plan priorities.",
        "<b>Small-scale industries (SSI)</b>: defined by maximum investment in fixed assets (₹5 lakh in 1950; now higher). Recommended by the <b>Karve Committee</b> (1955). They are <b>labour-intensive</b>, generate employment and spread industry to villages. Some products were <b>reserved</b> for SSI.",
        "<b>Trade policy: import substitution</b> (inward-looking): replace imports with domestic production, using <b>tariffs</b> (taxes on imports) and <b>quotas</b> (quantity limits)."
      ],
      table: { cap: "Achievements and failures (1950-90)", head: ["Area", "Achievement", "Failure"], rows: [["Industry", "Diversified industrial base; share of industry in GDP rose", "Inefficient public sector, losses"], ["Agriculture", "Self-sufficiency in food grains", "Most workers still in agriculture"], ["Trade", "Protected infant industries", "Uncompetitive, poor quality goods"], ["Policy", "Reduced regional imbalance in places", "Licence-permit raj, red tape"]] },
      cards: [
        { t: "Why protect domestic industry?", tag: "why", b: "<p>Leaders believed infant Indian industries could not compete with developed countries' firms and needed protection. Saving foreign exchange was another aim.</p>" },
        { t: "Tariff vs quota", tag: "def", b: "<p><b>Tariff</b>: a tax on imports that makes them dearer. <b>Quota</b>: a fixed limit on the quantity that may be imported.</p>" }
      ],
      exam: ["'A licence is denied in a crowded city but granted for a backward district' → licensing for regional equality."]
    }
  ],
  flashcards: [
    { k: "Colonial", c: "agri", q: "Name two causes of agricultural stagnation under colonial rule.", a: "Zamindari system and commercialisation of agriculture (also poor technology, irrigation)." },
    { k: "Colonial", c: "ind", q: "What is de-industrialisation?", a: "The decline of India's handicraft industries under colonial rule without growth of modern industry." },
    { k: "Colonial", c: "trade", q: "How was India's export surplus used?", a: "To pay for British administrative and war expenses in India (drain of wealth)." },
    { k: "Colonial", c: "trade", q: "When did the Suez Canal open?", a: "1869." },
    { k: "Demography", c: "demo", q: "Which year is called the 'year of great divide'?", a: "1921." },
    { k: "Demography", c: "demo", q: "Infant mortality rate at independence?", a: "About 218 per 1,000 live births." },
    { k: "Occupation", c: "demo", q: "Share of workforce in agriculture at independence?", a: "About 70–75%." },
    { k: "Infrastructure", c: "infra", q: "When were railways introduced in India?", a: "1850." },
    { k: "Plan", c: "plan", q: "When was the Planning Commission set up?", a: "1950." },
    { k: "Goals", c: "plan", q: "Name the four goals of five year plans.", a: "Growth, modernisation, self-reliance, equity." },
    { k: "Reform", c: "land", q: "What is a land ceiling?", a: "The maximum amount of land an individual can own." },
    { k: "Reform", c: "land", q: "What was the slogan of land reforms?", a: "Land to the tiller." },
    { k: "Green Rev.", c: "green", q: "What drove the Green Revolution?", a: "HYV seeds with fertilisers, pesticides and assured irrigation." },
    { k: "Green Rev.", c: "green", q: "Which crops and states benefited in the first phase?", a: "Wheat and rice; Punjab, Andhra Pradesh, Tamil Nadu." },
    { k: "Term", c: "green", q: "What is marketed surplus?", a: "The part of farm output sold in the market by farmers." },
    { k: "Policy", c: "ipr", q: "How many categories of industries did IPR 1956 create?", a: "Three." },
    { k: "SSI", c: "ssi", q: "Which committee recommended promoting small-scale industries?", a: "Karve Committee (1955)." },
    { k: "Trade", c: "isub", q: "What is import substitution?", a: "Replacing imports with domestic production, protected by tariffs and quotas." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "The weaver's lost market",
      text: "<p>In 1850, <b>Rahim</b>'s family had woven fine muslin in Dhaka for generations. Cheap machine-made cloth from Manchester flooded Indian markets, while Indian cloth faced heavy duties in Britain. Rahim's sons became farm labourers. Meanwhile, raw cotton from Indian fields was shipped to British mills.</p>",
      qs: [
        { q: "Name the process shown and explain its two-fold motive.", m: 3, type: "Identify and explain", c: "ind", ans: "De-industrialisation; raw materials for Britain; market for British goods", keys: ["de-industrial", "raw material", "market"], hint: "What Britain wanted from India.",
          points: [{ p: "<b>De-industrialisation</b> / decline of handicrafts", m: 1, k: ["de-industrial", "decline"] }, { p: "Motive 1: India as a <b>supplier of raw materials</b> (raw cotton to British mills)", m: 1, k: ["raw material"] }, { p: "Motive 2: India as a <b>market</b> for British finished goods", m: 1, k: ["market"] }],
          structure: ["Name, motive 1 with quote, motive 2 with quote."],
          model: "<p>This is <b>de-industrialisation</b>: the decline of India's world-famous handicrafts without modern industry taking their place.</p><p>Its two-fold motive: (i) to make India a <b>supplier of raw materials</b>, like raw cotton for British mills; and (ii) to make India a <b>market</b> for British finished goods, like Manchester cloth.</p>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "The village that got its land",
      text: "<p>In <b>Kalyanpur</b> village, a zamindar owned 2,000 acres worked by tenants who paid half their crop as rent. After 1950, the state abolished intermediaries, fixed a maximum of 30 acres per family, and gave the surplus land to the tillers. In a nearby district, landlords transferred land to relatives' names and kept control.</p>",
      qs: [
        { q: "Identify the land reform measures and explain why they succeeded in one place and failed in another.", m: 4, type: "Identify and evaluate", c: "land", ans: "Abolition of intermediaries; land ceiling; loopholes (benami transfers)", keys: ["intermediar", "ceiling"], hint: "Two reforms; one loophole.",
          points: [{ p: "<b>Abolition of intermediaries</b> (zamindars)", m: 1, k: ["intermediar", "zamindar"] }, { p: "<b>Land ceiling</b>: maximum 30 acres", m: 1, k: ["ceiling"] }, { p: "Success: tillers became owners, more incentive to invest and produce", m: 1, k: ["owner", "incentive", "tiller"] }, { p: "Failure: landlords used loopholes, transferring land to relatives", m: 1, k: ["loophole", "relative", "transfer"] }],
          structure: ["Two measures; one reason for success; one for failure."],
          model: "<p>Measures: (i) <b>abolition of intermediaries</b>: the zamindar's ownership ended; (ii) <b>land ceiling</b>: a maximum of 30 acres per family, with surplus land given to tillers.</p><p>In Kalyanpur, tillers became owners, which gave them the <b>incentive</b> to invest in and improve the land.</p><p>In the nearby district, landlords exploited <b>loopholes</b>, transferring land to relatives to escape the ceiling, so the poor did not benefit.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Gurpreet's first HYV harvest",
      text: "<p>In 1968, <b>Gurpreet Singh</b> of Punjab sowed new <b>high-yielding wheat seeds</b>, used fertilisers from the cooperative on credit, and irrigated from a new tube-well. His yield doubled. He kept enough for his family and sold the rest in the mandi. The government bought wheat at a fixed price to store for lean years.</p>",
      qs: [
        { q: "Identify four features or results of the Green Revolution shown in the case.", m: 4, type: "Identify concepts", c: "green", ans: "HYV seeds; fertiliser and irrigation; marketed surplus; buffer stock", keys: ["hyv", "marketed surplus", "buffer"], hint: "Inputs, output, selling, storing.",
          points: [{ p: "<b>HYV seeds</b> (wheat, Punjab, first phase)", m: 1, k: ["hyv", "high-yield"] }, { p: "Complementary inputs: <b>fertilisers on credit, irrigation</b>", m: 1, k: ["fertili", "irrigat", "credit"] }, { p: "<b>Marketed surplus</b>: sold the rest in the mandi", m: 1, k: ["marketed surplus", "sold"] }, { p: "<b>Buffer stock</b>: government buys and stores grain", m: 1, k: ["buffer"] }],
          structure: ["Feature + quoted line, four times."],
          model: "<p>(i) <b>HYV seeds:</b> 'new high-yielding wheat seeds' in Punjab, typical of the first phase.</p><p>(ii) <b>Complementary inputs:</b> fertilisers on credit and tube-well irrigation.</p><p>(iii) <b>Marketed surplus:</b> after keeping enough for his family, he 'sold the rest in the mandi'.</p><p>(iv) <b>Buffer stock:</b> the government bought wheat to store for lean years.</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "Protected, but not competitive",
      text: "<p>In the 1970s, <span class='co'>Bharat Scooters Ltd</span> was the only scooter maker allowed to expand, because imports faced a 150% tariff and a strict quota. Buyers waited three years for a scooter of old design. The firm needed a licence even to add a new production line. A rival's licence application lay pending for five years.</p>",
      qs: [
        { q: "Identify the policies at work and evaluate their effects on industry and consumers.", m: 6, type: "Identify and evaluate", c: "isub", ans: "Import substitution (tariff, quota); licensing; protection led to inefficiency and poor quality", keys: ["import substitution", "licens", "tariff"], hint: "Trade policy and industrial policy.",
          points: [{ p: "<b>Import substitution</b>: tariff of 150%", m: 1, k: ["import substitution", "tariff"] }, { p: "<b>Quota</b> on imports", m: 1, k: ["quota"] }, { p: "<b>Industrial licensing</b> for expansion and entry", m: 1, k: ["licens"] }, { p: "Positive: protected infant domestic industry, saved foreign exchange", m: 1, k: ["protect", "infant", "foreign exchange"] }, { p: "Negative: no competition → inefficiency, old design, long waits", m: 1, k: ["ineffici", "competi", "quality", "wait"] }, { p: "Negative: delays and red tape ('licence raj') discouraged new firms", m: 1, k: ["delay", "red tape", "licence raj"] }],
          structure: ["Three policies, one benefit, two costs."],
          model: "<p><b>Policies:</b> (i) <b>import substitution</b> through a 150% <b>tariff</b> and (ii) an import <b>quota</b>; (iii) <b>industrial licensing</b> to start or expand production.</p><p><b>Positive effect:</b> the infant domestic industry was protected from foreign competition, and foreign exchange was saved.</p><p><b>Negative effects:</b> with no competition, the firm had no reason to improve, so consumers got old designs after three-year waits. Licensing delays (the 'licence-permit raj') kept new firms out, reducing efficiency and choice.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Small units, many jobs",
      text: "<p>In Ludhiana, hundreds of small units with a few lakh rupees of investment each make hosiery, bicycle parts and tools. Together they employ far more people than one big factory with the same investment. The government reserved some products for such units and gave them cheap loans and tax concessions.</p>",
      qs: [
        { q: "Explain the role of small-scale industries in India's development, with reference to the case.", m: 4, type: "Explain", c: "ssi", ans: "Labour-intensive employment; decentralisation; reservation and support", keys: ["labour-intensive", "employment"], hint: "Jobs, spread, support.",
          points: [{ p: "<b>Labour-intensive</b>: more employment per rupee of investment", m: 1, k: ["labour", "employment", "jobs"] }, { p: "Low capital requirement; spreads industry to small towns", m: 1, k: ["capital", "spread", "town", "decentral"] }, { p: "Support: <b>reservation</b> of products", m: 1, k: ["reserv"] }, { p: "Support: cheap loans, tax concessions (Karve Committee view)", m: 1, k: ["loan", "concession", "karve"] }],
          structure: ["Role with case lines; support measures."],
          model: "<p>Small-scale industries are <b>labour-intensive</b>: the Ludhiana units employ far more people than one big factory with the same investment, so they create jobs.</p><p>They need little capital and spread industry to towns and villages, promoting <b>more equal regional development</b>.</p><p>To help them compete with big firms, the government <b>reserved</b> certain products for SSI and gave <b>cheap loans and tax concessions</b>, as the Karve Committee (1955) had recommended.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "demo", q: "The 'year of great divide' in India's demographic history is:", o: ["1901", "1921", "1947", "1951"], a: 1, hint: "After this, steady growth.", why: "<b>1921</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "plan", q: "The Planning Commission was set up in:", o: ["1947", "1950", "1951", "1956"], a: 1, hint: "First Plan began a year later.", why: "<b>1950</b>." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "green", q: "The Green Revolution was based on:", o: ["Organic farming", "HYV seeds", "Land ceiling", "Cooperative farming"], a: 1, hint: "New seeds.", why: "<b>HYV seeds</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "trade", q: "Under colonial rule, India's export surplus was used to:", o: ["Build Indian industries", "Pay British administrative and war expenses", "Import gold", "Fund education"], a: 1, hint: "Drain.", why: "<b>British expenses</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "land", q: "Land ceiling means:", o: ["Minimum land for each family", "Maximum land a person can own", "Tax on land", "Lease of land"], a: 1, hint: "Upper limit.", why: "<b>Maximum land</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "isub", q: "Import substitution was carried out mainly through:", o: ["Subsidies to exporters", "Tariffs and quotas", "Free trade", "Devaluation"], a: 1, hint: "Protection.", why: "<b>Tariffs and quotas</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "green", q: "In the first phase, the Green Revolution was largely limited to:", o: ["Pulses in Rajasthan", "Wheat and rice in Punjab, AP and TN", "Cotton in Gujarat", "Tea in Assam"], a: 1, hint: "Assured irrigation states.", why: "<b>Wheat and rice in Punjab, AP, TN</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "ssi", q: "The committee that recommended promotion of small-scale industries was the:", o: ["Narasimham Committee", "Karve Committee", "Mahalanobis Committee", "Rangarajan Committee"], a: 1, hint: "1955.", why: "<b>Karve Committee</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "infra", q: "Railways in colonial India mainly served British interests.", r: "They were built to carry raw materials to ports and move troops.", a: 0, hint: "Purpose.", why: "Both true; R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "plan", q: "Modernisation and equity can sometimes conflict.", r: "Modern labour-saving machines may reduce employment.", a: 0, hint: "Machines vs jobs.", why: "Both true; R explains A." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "subsidy", q: "Agricultural subsidies should continue forever.", r: "Once a technology is widely adopted, subsidies may mainly benefit rich farmers and industry.", a: 3, hint: "R argues against A.", why: "A is not a settled truth (false as stated); R is true." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "demo", q: "At independence, most of India's workforce was engaged in agriculture.", a: true, hint: "70–75%.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "ipr", q: "Under IPR 1956, all industries were reserved for the public sector.", a: false, hint: "Three categories.", why: "False." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "green", q: "The Green Revolution created a marketed surplus of food grains.", a: true, hint: "Farmers sold more.", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "plan", q: "Match the situation with the goal of planning.", pairs: [["GDP rises 6% a year", "Growth"], ["Farmers adopt tractors and new seeds", "Modernisation"], ["India stops importing food", "Self-reliance"], ["Benefits reach the poorest", "Equity"]], hint: "Four goals.", why: "Each situation shows one goal." },
    { id: "q16", t: "match", d: "M", m: 4, c: "agri", q: "Match the colonial feature with its effect.", pairs: [["Zamindari system", "No investment in land"], ["Commercialisation of agriculture", "Cash crops replaced food crops"], ["Cheap British cloth", "Decline of handicrafts"], ["Railways to ports", "Raw materials exported"]], hint: "Cause → effect.", why: "Each cause had one main effect." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "infra", q: "Railways were introduced in India in ______.", acc: ["1850"], hint: "Mid-19th century.", why: "1850." },
    { id: "q18", t: "fill", d: "M", m: 1, c: "green", q: "The part of farm output sold by farmers in the market is the marketed ______.", acc: ["surplus"], hint: "Extra.", why: "Surplus." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "land", q: "The slogan of land reforms was 'land to the ______'.", acc: ["tiller"], hint: "Who works it.", why: "Tiller." },
    { id: "q20", t: "short", d: "E", m: 1, c: "ind", q: "What is the decline of India's handicrafts under colonial rule called?", acc: ["de-industrialisation", "deindustrialisation", "de-industrialization", "deindustrialization"], hint: "Opposite of industrialisation.", why: "De-industrialisation." },
    { id: "q21", t: "short", d: "M", m: 1, c: "isub", q: "Name one instrument used for import substitution.", acc: ["tariff", "tariffs", "quota", "quotas"], hint: "Tax or limit.", why: "Tariffs or quotas." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "agri", q: "Explain any three causes of the stagnation of Indian agriculture under colonial rule.", hint: "Zamindari, commercialisation, technology.", why: "",
      points: [{ p: "Zamindari system", m: 1, k: ["zamindar"] }, { p: "Commercialisation of agriculture", m: 1, k: ["commercial", "cash crop"] }, { p: "Low technology / poor irrigation / fertilisers", m: 1, k: ["technolog", "irrigat", "fertili"] }],
      model: "<p><b>(i) Zamindari system:</b> zamindars collected high rents but did nothing to improve land, leaving cultivators poor and unmotivated.</p><p><b>(ii) Commercialisation of agriculture:</b> farmers were pushed to grow cash crops for British industry rather than food.</p><p><b>(iii) Low technology:</b> little use of irrigation, fertilisers or improved seeds kept productivity very low.</p>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "infra", q: "Describe the state of infrastructure at independence and whom it served.", hint: "Railways, ports, posts.", why: "",
      points: [{ p: "Railways, ports, roads, posts and telegraph developed", m: 1, k: ["railway", "port", "post"] }, { p: "Built mainly to serve colonial interests (raw materials, troops, control)", m: 1, k: ["colonial", "raw material", "troops"] }, { p: "Limited benefit to Indians; poor quality outside key routes", m: 1, k: ["limited", "little", "poor"] }],
      model: "<p>Under colonial rule, <b>railways, ports, roads, posts and telegraph</b> were developed.</p><p>Their main aim was to serve <b>colonial interests</b>: to carry raw materials to ports, move troops and maintain law and order.</p><p>They brought <b>limited benefit</b> to ordinary Indians; roads outside key routes were poor and electricity was scarce.</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "plan", q: "Explain the four goals of India's five year plans.", hint: "Growth, modernisation, self-reliance, equity.", why: "",
      points: [{ p: "Growth: increase in GDP", m: 1, k: ["growth", "gdp"] }, { p: "Modernisation: new technology and social change", m: 1, k: ["modern"] }, { p: "Self-reliance: avoid dependence on foreign countries", m: 1, k: ["self-relian"] }, { p: "Equity: benefits reach the poor", m: 1, k: ["equity", "poor"] }],
      model: "<p><b>(i) Growth:</b> increase in the country's capacity to produce goods and services (GDP).</p><p><b>(ii) Modernisation:</b> adopting new technology and changing social outlook, e.g. equal rights for women.</p><p><b>(iii) Self-reliance:</b> using domestic resources and avoiding dependence on foreign countries, especially for food.</p><p><b>(iv) Equity:</b> ensuring the benefits of growth reach the poor, reducing inequality.</p>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "subsidy", q: "Present the debate on agricultural subsidies with two arguments on each side.", hint: "For: adoption; against: who benefits.", why: "",
      points: [{ p: "For: encouraged adoption of new technology (HYV, fertilisers)", m: 1, k: ["adopt", "technolog"] }, { p: "For: helps small and poor farmers bear risk / cost", m: 1, k: ["small", "poor", "risk"] }, { p: "Against: benefits rich farmers and fertiliser industry", m: 1, k: ["rich", "industry"] }, { p: "Against: burden on government finances; wasteful use", m: 1, k: ["burden", "waste", "fiscal"] }],
      model: "<p><b>For:</b> (i) subsidies on fertilisers, power and seeds encouraged farmers, especially small ones, to adopt the new technology; (ii) they reduce costs and risks for poor farmers.</p><p><b>Against:</b> (i) once the technology is widely adopted, subsidies mainly benefit rich farmers and the fertiliser industry; (ii) they burden government finances and encourage wasteful use of water and fertilisers.</p>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "green", q: "Explain the Green Revolution, its benefits and its risks.", hint: "HYV + inputs; self-sufficiency; inequality, pests.", why: "",
      points: [{ p: "Meaning: big rise in food-grain output from HYV seeds", m: 1, k: ["hyv", "output"] }, { p: "Inputs: fertilisers, pesticides, assured irrigation", m: 1, k: ["fertili", "irrigat"] }, { p: "Benefit: self-sufficiency in food grains", m: 1, k: ["self-suffic"] }, { p: "Benefit: marketed surplus, lower prices, buffer stock", m: 1, k: ["marketed", "buffer", "price"] }, { p: "Risk: benefits to rich farmers and few regions", m: 1, k: ["rich", "region", "inequal"] }, { p: "Risk: pests, soil damage; managed through credit/research", m: 1, k: ["pest", "soil", "credit", "research"] }],
      model: "<p>The <b>Green Revolution</b> was the large increase in food-grain production from the mid-1960s, based on <b>HYV seeds</b> used with fertilisers, pesticides and assured irrigation.</p><p><b>Benefits:</b> India became <b>self-sufficient</b> in food grains; farmers produced a <b>marketed surplus</b> that lowered food prices; the government built a <b>buffer stock</b>.</p><p><b>Risks:</b> at first, gains went mainly to <b>rich farmers</b> and a few states (Punjab, AP, TN), widening inequality; HYV crops were more prone to <b>pests</b>. The government reduced these through cheap credit, subsidies and research institutions.</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "isub", q: "Explain the policy of import substitution. Why was it adopted and what were its effects?", hint: "Tariffs, quotas; protect infant industry; inefficiency.", why: "",
      points: [{ p: "Meaning: replace imports by domestic production", m: 1, k: ["replace", "domestic"] }, { p: "Tools: tariffs and quotas", m: 1, k: ["tariff", "quota"] }, { p: "Reason: protect infant industries", m: 1, k: ["infant", "protect"] }, { p: "Reason: save foreign exchange / self-reliance", m: 1, k: ["foreign exchange", "self"] }, { p: "Effect +: diversified industrial base", m: 1, k: ["diversif", "industrial base"] }, { p: "Effect −: inefficiency, poor quality, no competition", m: 1, k: ["ineffici", "quality", "competi"] }],
      model: "<p><b>Import substitution</b> is an inward-looking trade policy of producing goods at home instead of importing them.</p><p><b>Tools:</b> <b>tariffs</b> (taxes on imports) and <b>quotas</b> (limits on quantity).</p><p><b>Why:</b> (i) to protect <b>infant domestic industries</b> from developed-country competition; (ii) to save scarce <b>foreign exchange</b> and build self-reliance.</p><p><b>Effects:</b> India built a <b>diversified industrial base</b>, but long protection removed competition, leading to <b>inefficiency, high costs and poor quality</b> goods.</p>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "ipr", q: "A private company is refused permission to set up a factory in Mumbai but offered one in a backward district. Which policy?", o: ["Import substitution", "Industrial licensing for regional balance", "Land ceiling", "Green Revolution"], a: 1, hint: "Permission to start.", why: "<b>Industrial licensing</b>." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "demo", q: "Very high birth and death rates, low literacy and life expectancy describe India's", o: ["Occupational structure", "Demographic condition", "Trade pattern", "Industrial base"], a: 1, hint: "Population.", why: "<b>Demographic condition</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "plan", q: "The government chose a path with a strong public sector alongside private firms. This is", o: ["Capitalism", "Socialism", "Mixed economy", "Feudalism"], a: 2, hint: "Both sectors.", why: "<b>Mixed economy</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "trade", passage: "Raw indigo and cotton were shipped from Calcutta to London, while textiles came back.", q: "This shows India as", o: ["Exporter of finished goods", "Supplier of raw materials", "Self-reliant", "Industrial power"], a: 1, hint: "Raw out, finished in.", why: "<b>Supplier of raw materials</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "land", passage: "A state law says no family may own more than 20 acres; extra land goes to landless workers.", q: "This measure is", o: ["Abolition of intermediaries", "Land ceiling", "Green Revolution", "Tenancy rent"], a: 1, hint: "Maximum.", why: "<b>Land ceiling</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "ssi", passage: "A unit making leather bags employs 40 workers with machines worth ₹4 lakh.", q: "In 1950 terms, this would be", o: ["A large industry", "A small-scale industry", "A public sector unit", "A cottage industry abroad"], a: 1, hint: "Investment limit ₹5 lakh.", why: "Investment under ₹5 lakh: <b>small-scale</b>." }
  ],
  find: {
    mcq: [
      { s: "Zamindars collected rent but never improved the land.", o: ["Cause of agricultural stagnation", "Green Revolution", "Import substitution", "Equity"], a: 0, c: "agri", d: "E", why: "<b>Agricultural stagnation</b>." },
      { s: "Famous Dhaka muslin weavers lost their trade.", o: ["De-industrialisation", "Self-reliance", "Land reform", "Modernisation"], a: 0, c: "ind", d: "E", why: "<b>De-industrialisation</b>." },
      { s: "Most Indians worked in farming in 1947.", o: ["Occupational structure", "Infrastructure", "Planning", "Green Revolution"], a: 0, c: "demo", d: "E", why: "<b>Occupational structure</b>." },
      { s: "Railways carried cotton to Bombay port for export.", o: ["Colonial infrastructure", "Import substitution", "SSI", "Land ceiling"], a: 0, c: "infra", d: "E", why: "<b>Colonial infrastructure</b>." },
      { s: "Both state-owned steel plants and private textile mills exist.", o: ["Mixed economy", "Capitalism", "Socialism", "Barter"], a: 0, c: "plan", d: "M", why: "<b>Mixed economy</b>." },
      { s: "India stops importing wheat from the USA.", o: ["Self-reliance", "Equity", "Modernisation", "Growth"], a: 0, c: "plan", d: "M", why: "<b>Self-reliance</b>." },
      { s: "Tenants become owners of the land they till.", o: ["Abolition of intermediaries", "Land ceiling", "Buffer stock", "Licensing"], a: 0, c: "land", d: "M", why: "<b>Abolition of intermediaries</b>." },
      { s: "New wheat seeds plus fertiliser and tube-wells double the yield.", o: ["Green Revolution", "Land reform", "Import substitution", "Planning"], a: 0, c: "green", d: "M", why: "<b>Green Revolution</b>." },
      { s: "Government stores wheat for drought years.", o: ["Buffer stock", "Marketed surplus", "Quota", "Tariff"], a: 0, c: "green", d: "M", why: "<b>Buffer stock</b>." },
      { s: "Debate over whether fertiliser subsidies help poor or rich farmers.", o: ["Agricultural subsidies", "Land ceiling", "IPR 1956", "SSI"], a: 0, c: "subsidy", d: "M", why: "<b>Subsidy debate</b>." },
      { s: "Steel, railways and atomic energy kept for the state.", o: ["IPR 1956 (first category)", "SSI reservation", "Import substitution", "Land reform"], a: 0, c: "ipr", d: "C", why: "<b>IPR 1956</b>." },
      { s: "A firm needs government permission to add production capacity.", o: ["Industrial licensing", "Tariff", "Buffer stock", "Ceiling"], a: 0, c: "ipr", d: "C", why: "<b>Licensing</b>." },
      { s: "Products like pickles and candles reserved for small units.", o: ["SSI reservation", "Import substitution", "Green Revolution", "Zamindari"], a: 0, c: "ssi", d: "C", why: "<b>SSI reservation</b>." },
      { s: "150% duty on imported cars to help domestic makers.", o: ["Tariff (import substitution)", "Quota", "Subsidy", "Licence"], a: 0, c: "isub", d: "C", why: "<b>Tariff</b>." },
      { s: "Only 5,000 foreign TVs allowed in a year.", o: ["Quota", "Tariff", "Subsidy", "Ceiling"], a: 0, c: "isub", d: "C", why: "<b>Quota</b>." },
      { s: "India exported more than it imported, but the money paid for British wars.", o: ["Drain through export surplus", "Self-reliance", "Green Revolution", "Equity"], a: 0, c: "trade", d: "C", why: "<b>Drain</b> via export surplus." }
    ],
    match: [
      { title: "Drag each situation onto its concept.", pairs: [["Handlooms ruined by Manchester cloth", "De-industrialisation", "ind"], ["Maximum 30 acres per family", "Land ceiling", "land"], ["Farmers sell grain beyond family needs", "Marketed surplus", "green"], ["Benefits reach the poor", "Equity", "plan"], ["Permission needed to expand a factory", "Industrial licensing", "ipr"], ["Heavy duty on imported goods", "Import substitution", "isub"]] }
    ],
    wrong: [
      { stmts: ["Railways began in 1850.", "1921 is the year of great divide.", "Most workers were in industry in 1947.", "Literacy was below 16% at independence."], a: 2, c: "demo", why: "Most workers were in <b>agriculture</b>." },
      { stmts: ["Land ceiling sets a maximum.", "Green Revolution used HYV seeds.", "The first phase covered pulses in Rajasthan.", "Buffer stocks protect against shortages."], a: 2, c: "green", why: "First phase: <b>wheat and rice in Punjab, AP, TN</b>." },
      { stmts: ["IPR 1956 had three categories.", "Import substitution used tariffs and quotas.", "SSIs are capital-intensive.", "Licensing aimed at regional balance."], a: 2, c: "ssi", why: "SSIs are <b>labour-intensive</b>." }
    ],
    para: [
      { target: "Commercialisation of agriculture", c: "agri", sents: ["Ram's family farmed in Bihar in 1900.", "British agents forced them to grow indigo instead of rice.", "The family went hungry in a dry year.", "Ram's son later moved to Calcutta."], a: 1, why: "Forced cash crop: <b>commercialisation</b>." },
      { target: "Self-reliance", c: "plan", sents: ["In the 1960s India depended on wheat imports.", "Leaders felt this made the country vulnerable.", "By the 1970s India grew enough food of its own.", "Cities grew rapidly."], a: 2, why: "Producing its own food: <b>self-reliance</b>." },
      { target: "Industrial licensing", c: "ipr", sents: ["Mehta Textiles wanted a new plant.", "It applied to the ministry for permission.", "The permission came only for a backward district.", "The plant opened in 1975."], a: 1, why: "Applying for permission: <b>licensing</b>." }
    ],
    explain: [
      { s: "A country exports raw cotton and imports cloth made from it.", o: ["Colonial trade pattern", "Import substitution", "Self-reliance", "SSI"], a: 0, c: "trade", why: "The clue is <i>raw out, finished in</i>: <b>colonial trade</b>." },
      { s: "Tractors replace bullocks in Punjab fields.", o: ["Modernisation", "Equity", "Land ceiling", "Quota"], a: 0, c: "plan", why: "New technology: <b>modernisation</b>." },
      { s: "One small factory with ₹3 lakh capital employs 50 people.", o: ["Labour-intensive SSI", "Capital-intensive industry", "Public sector", "Quota"], a: 0, c: "ssi", why: "Many jobs, little capital: <b>SSI</b>." },
      { s: "Car buyers wait 3 years for an outdated model.", o: ["Inefficiency from protection", "Green Revolution", "Equity", "Buffer stock"], a: 0, c: "isub", why: "No competition: <b>inefficiency under protection</b>." }
    ]
  }
});
