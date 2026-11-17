/* Revision Arena · Class XII Economics · Unit 7 · Current Challenges facing the Indian Economy (Parts 1-4). Original cases. */
NFArena.register({
  id: "eco12-ied2", cls: "XII", subject: "Economics", unit: "Unit", num: "7",
  title: "Current Challenges facing the Indian Economy",
  tagline: "Human capital formation, rural development, employment, and sustainable economic development.",
  notesLink: "../#eco12-ied2",
  concepts: {
    hc: { n: "Human capital and its sources", s: "human" },
    hcpc: { n: "Human capital vs physical capital; human development", s: "human" },
    edu: { n: "Growth of the education sector", s: "human" },
    credit: { n: "Rural credit and SHGs", s: "rural" },
    mkt: { n: "Agricultural marketing and cooperatives", s: "rural" },
    divers: { n: "Agricultural diversification and organic farming", s: "rural" },
    wpr: { n: "Workforce, worker-population ratio", s: "emp" },
    formal: { n: "Formal and informal sectors; jobless growth", s: "emp" },
    unemp: { n: "Unemployment types and policies", s: "emp" },
    sd: { n: "Sustainable development", s: "sd" },
    env: { n: "Environment: functions, absorptive capacity, global warming", s: "sd" }
  },
  overview: {
    text: "Growth alone is not enough. India must build <b>human capital</b> (skilled, healthy people), develop <b>rural areas</b> where most people live, create enough <b>jobs</b>, and grow in a way that is <b>sustainable</b>, meeting today's needs without harming future generations.",
    points: [
      "Sources of human capital: <b>education, health, on-the-job training, migration, information</b>.",
      "Rural development needs <b>credit, marketing, diversification</b> and infrastructure; <b>SHGs</b> bring microcredit to the poor.",
      "Worker-population ratio = <b>workers ÷ population × 100</b>.",
      "Sustainable development (Brundtland, 1987): development that meets present needs without compromising future generations' ability to meet theirs."
    ],
    map: {
      center: "Current Challenges",
      branches: [
        { t: "Human capital", c: ["Education, health", "Training, migration", "vs physical capital"] },
        { t: "Rural development", c: ["Credit, SHGs", "Marketing, cooperatives", "Diversification, organic"] },
        { t: "Employment", c: ["Worker-population ratio", "Formal vs informal", "Jobless growth"] },
        { t: "Sustainable development", c: ["Environment's functions", "Absorptive capacity", "Global warming"] }
      ]
    }
  },
  sections: [
    {
      id: "human", title: "Human capital formation", sub: "How people become a resource", icon: "🎓", color: "#4da3ff",
      quick: [
        "<b>Human capital</b>: the stock of skill and expertise of a nation at a point of time. <b>Human capital formation</b>: the process of adding to it.",
        "<b>Sources</b>: (i) expenditure on <b>education</b>; (ii) expenditure on <b>health</b>; (iii) <b>on-the-job training</b>; (iv) <b>migration</b> to better-paying jobs; (v) expenditure on <b>information</b> (about jobs, education, health).",
        "<b>Human capital vs physical capital</b>: human capital is intangible and inseparable from its owner; physical capital is tangible and can be sold separately. Human capital also gives social benefits (an educated person spreads awareness).",
        "<b>Human development</b> is broader: education and health are <b>ends in themselves</b>, not only means to raise productivity.",
        "<b>Education sector</b>: government spending on education is shown as % of total government spending and % of GDP; the <b>Kothari Commission (1964)</b> recommended 6% of GDP. The Right to Education Act (2009) made education free and compulsory for 6–14 years.",
        "<b>Problems</b>: brain drain, high population, insufficient resources, gender gaps, poor health facilities."
      ],
      cards: [
        { t: "Human capital and growth", tag: "why", b: "<p>An educated, healthy worker produces more, adopts new technology faster and earns more. Higher income then funds more education: a cycle of growth.</p>" }
      ],
      exam: ["'Seema moves from her village to a city for a better job' → <b>migration</b> as a source of human capital."]
    },
    {
      id: "rural", title: "Rural development", sub: "Credit, marketing, diversification", icon: "🚜", color: "#22c55e",
      quick: [
        "<b>Rural credit</b>: farmers need credit for seeds, fertilisers, machines. <b>Non-institutional</b> sources (moneylenders, traders) charge high interest; <b>institutional</b> sources include cooperatives, commercial banks, Regional Rural Banks, and <b>NABARD</b> (1982), the apex body.",
        "<b>Self-Help Groups (SHGs)</b>: small groups (often women) save regularly and lend to members; banks link to SHGs. This <b>microcredit</b> reaches those without collateral.",
        "<b>Agricultural marketing</b>: assembling, storing, processing, transporting and selling farm produce. Measures: regulated markets, cold storage and warehouses, cooperative marketing, <b>minimum support price (MSP)</b>, buffer stocks.",
        "Emerging alternative channels: farmers' markets (Apni Mandi, Rythu Bazars), contracts with firms.",
        "<b>Diversification</b>: (i) <b>of crop production</b>: from food grains to cash crops and horticulture; (ii) <b>of activity</b>: from crop farming to animal husbandry, fisheries, poultry, horticulture, cottage industry, IT in villages. It reduces risk and gives income in the off-season.",
        "<b>Organic farming</b>: farming without chemical fertilisers and pesticides, using natural manure. Benefits: healthier food, soil and environment, export demand. Limits: lower yields at first, more labour, shorter shelf-life."
      ],
      cards: [
        { t: "Operation Flood", tag: "eg", b: "<p>Milk cooperatives (begun at Anand, Gujarat) collect milk from small farmers, process it and sell it, making India the world's largest milk producer: the White Revolution.</p>" }
      ],
      exam: ["SHG loans need no collateral: they rely on <b>group guarantee</b>."]
    },
    {
      id: "emp", title: "Employment", sub: "Workers, sectors and jobs", icon: "👷", color: "#f5b301",
      quick: [
        "<b>Worker</b>: anyone engaged in an economic activity that contributes to GDP. <b>Worker-population ratio</b> = (Total workers ÷ Total population) × 100.",
        "Higher participation in <b>rural</b> areas and among <b>men</b>; urban women's participation is low.",
        "<b>Self-employed</b> (own business), <b>regular salaried</b>, <b>casual wage labourers</b>. Most Indian workers are self-employed.",
        "<b>Formal sector</b>: public sector units and private firms with 10 or more hired workers; job security, social security. <b>Informal sector</b>: farmers, small traders, casual labourers, small firms; no security. Most workers (about 90%+) are informal.",
        "<b>Jobless growth</b>: GDP grows but employment does not grow at the same pace.",
        "<b>Casualisation</b>: rise in the share of casual wage workers. <b>Informalisation</b>: rise in informal jobs.",
        "<b>Disguised unemployment</b>: more people working than needed, so the marginal product of extra workers is zero (common in family farms). <b>Seasonal unemployment</b>: no work in the off-season.",
        "Government policies: direct job creation (MGNREGA: 100 days of guaranteed wage employment for rural households), self-employment schemes, and infrastructure spending."
      ],
      table: { cap: "Formal vs informal sector", head: ["Basis", "Formal", "Informal"], rows: [["Units", "PSUs; private firms with 10+ workers", "Small units, farms, self-employed"], ["Security", "Regular pay, social security", "No security"], ["Laws", "Labour laws apply", "Little protection"], ["Share of workers", "Small", "Very large"]] },
      cards: [
        { t: "Worked example", tag: "eg", b: "<p>A village has 1,200 people, of whom 480 are workers. Worker-population ratio = 480 ÷ 1,200 × 100 = <b>40%</b>.</p>" }
      ],
      exam: ["'5 family members on a farm needing 3' → <b>disguised unemployment</b>."]
    },
    {
      id: "sd", title: "Sustainable economic development", sub: "Growth that lasts", icon: "🌱", color: "#ff5470",
      quick: [
        "<b>Environment</b>: all biotic (living) and abiotic (non-living) factors around us. <b>Four functions</b>: (i) supplies renewable and non-renewable <b>resources</b>; (ii) <b>assimilates waste</b>; (iii) sustains <b>life</b> (genetic and biodiversity); (iv) provides <b>aesthetic services</b> (scenery).",
        "<b>Absorptive capacity</b>: the ability of the environment to absorb degradation. Problems arise when resource extraction exceeds regeneration and waste exceeds absorptive capacity.",
        "<b>Global warming</b>: gradual rise in Earth's average temperature due to <b>greenhouse gases</b> (CO₂, methane) from burning fossil fuels and deforestation. Effects: melting ice, rising sea levels, extreme weather.",
        "<b>Sustainable development</b>: development that meets the needs of the present generation without compromising the ability of future generations to meet their own needs (<b>Brundtland Commission, 1987</b>).",
        "<b>Strategies</b>: use of non-conventional energy (solar, wind), LPG and CNG in place of wood and diesel, biogas in rural areas, mini-hydel plants, traditional knowledge (Ayurveda, natural farming), bio-composting, bio-pest control."
      ],
      cards: [
        { t: "Opportunity cost of degradation", tag: "why", b: "<p>Cleaning polluted rivers and treating pollution-related illness costs money that could otherwise go to schools and hospitals. Environmental damage has a real economic cost.</p>" }
      ],
      exam: ["Name all <b>four</b> functions of the environment for full marks."]
    }
  ],
  flashcards: [
    { k: "Human", c: "hc", q: "Define human capital.", a: "The stock of skill and expertise of a nation at a point of time." },
    { k: "Human", c: "hc", q: "Name the five sources of human capital.", a: "Education, health, on-the-job training, migration, information." },
    { k: "Human", c: "hcpc", q: "One difference between human and physical capital?", a: "Human capital is intangible and inseparable from its owner; physical capital is tangible and separable." },
    { k: "Human", c: "hcpc", q: "Human capital vs human development?", a: "Human capital sees education and health as means to productivity; human development sees them as ends in themselves." },
    { k: "Education", c: "edu", q: "What share of GDP did the Kothari Commission recommend for education?", a: "6%." },
    { k: "Rural", c: "credit", q: "Which is the apex body for rural credit?", a: "NABARD (set up in 1982)." },
    { k: "Rural", c: "credit", q: "What is an SHG?", a: "A small group that saves regularly and lends to members, without collateral (microcredit)." },
    { k: "Rural", c: "mkt", q: "Define agricultural marketing.", a: "Assembling, storing, processing, transporting, packaging, grading and selling farm produce." },
    { k: "Rural", c: "mkt", q: "Name two government measures to improve agricultural marketing.", a: "Regulated markets and MSP (also warehouses, cooperative marketing)." },
    { k: "Rural", c: "divers", q: "Two kinds of agricultural diversification?", a: "Diversification of crop production and of productive activity." },
    { k: "Rural", c: "divers", q: "What is organic farming?", a: "Farming without chemical fertilisers and pesticides, using natural inputs." },
    { k: "Employment", c: "wpr", q: "Formula for worker-population ratio?", a: "(Total workers ÷ Total population) × 100." },
    { k: "Employment", c: "formal", q: "What is the formal sector?", a: "Public sector and private establishments with 10 or more hired workers." },
    { k: "Employment", c: "formal", q: "What is jobless growth?", a: "GDP grows without a matching rise in employment." },
    { k: "Employment", c: "unemp", q: "What is disguised unemployment?", a: "More people working than needed; extra workers' marginal product is zero." },
    { k: "Environment", c: "env", q: "Name the four functions of the environment.", a: "Supplies resources, assimilates waste, sustains life, provides aesthetic services." },
    { k: "Environment", c: "env", q: "What is absorptive capacity?", a: "The environment's ability to absorb degradation." },
    { k: "SD", c: "sd", q: "Define sustainable development.", a: "Meeting present needs without compromising the ability of future generations to meet theirs." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Five roads to a skilled worker",
      text: "<p><b>Arjun</b> completed a diploma in electronics. His employer sent him for a three-month training programme. When a better job opened in Pune, he moved there. His company runs a free health check-up for staff, and Arjun reads job portals regularly to know about new openings.</p>",
      qs: [
        { q: "Identify five sources of human capital formation in the case.", m: 5, type: "Identify", c: "hc", ans: "Education, on-the-job training, migration, health, information", keys: ["education", "training", "migration", "health", "information"], hint: "One per sentence.",
          points: [{ p: "<b>Education</b>: diploma in electronics", m: 1, k: ["education", "diploma"] }, { p: "<b>On-the-job training</b>: three-month programme", m: 1, k: ["training"] }, { p: "<b>Migration</b>: moved to Pune for a better job", m: 1, k: ["migrat"] }, { p: "<b>Health</b>: free health check-ups", m: 1, k: ["health"] }, { p: "<b>Information</b>: job portals", m: 1, k: ["information"] }],
          structure: ["Source + quoted line, five times."],
          model: "<p>(i) <b>Education:</b> 'completed a diploma in electronics'.</p><p>(ii) <b>On-the-job training:</b> 'sent him for a three-month training programme'.</p><p>(iii) <b>Migration:</b> 'he moved there' for a better job.</p><p>(iv) <b>Health:</b> 'free health check-up for staff'.</p><p>(v) <b>Information:</b> 'reads job portals regularly'.</p>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "The women of Saheli SHG",
      text: "<p>Twelve women in <b>Rampur</b> save ₹200 each month in a common fund. When <b>Kamla</b> needed ₹10,000 to buy a buffalo, the group lent it at low interest without any collateral. A nearby bank later gave the group a larger loan because of its repayment record. Earlier, Kamla had borrowed from a moneylender at 5% a month.</p>",
      qs: [
        { q: "Identify the credit arrangement and explain its advantages over the moneylender.", m: 4, type: "Identify and explain", c: "credit", ans: "SHG microcredit; no collateral, low interest, bank linkage, women empowerment", keys: ["shg", "self-help", "collateral"], hint: "Compare with the moneylender.",
          points: [{ p: "<b>Self-Help Group</b> / microcredit", m: 1, k: ["shg", "self-help", "microcredit"] }, { p: "No collateral needed; group guarantee", m: 1, k: ["collateral", "guarantee"] }, { p: "Low interest, unlike moneylender's 5% a month", m: 1, k: ["low interest", "moneylender"] }, { p: "Bank linkage / empowers women, builds savings", m: 1, k: ["bank", "women", "saving"] }],
          structure: ["Name; three advantages."],
          model: "<p>This is a <b>Self-Help Group (SHG)</b>, providing <b>microcredit</b>.</p><p>(i) Members borrow <b>without collateral</b>, relying on group trust and peer pressure for repayment.</p><p>(ii) Interest is <b>low</b>, unlike the moneylender's 5% a month (about 60% a year).</p><p>(iii) A good record earns <b>bank linkage</b> for larger loans, and the group builds savings and <b>empowers women</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Counting workers",
      text: "<p>A town has a population of 2,500, of whom 900 are workers. Of these, 540 are self-employed, 180 are regular salaried, and the rest are casual labourers. Only the 180 regular staff in the hospital and the factory get provident fund and paid leave.</p>",
      qs: [
        { q: "Calculate the worker-population ratio and the share of casual workers. Classify the workers into formal and informal sectors.", m: 4, type: "Calculate and classify", c: "wpr", ans: "WPR 36%; casual 180 = 20%; 180 formal, 720 informal", keys: ["36", "20"], hint: "900 ÷ 2,500.",
          points: [{ p: "WPR = 900 ÷ 2,500 × 100 = <b>36%</b>", m: 1, k: ["36"] }, { p: "Casual workers = 900 − 540 − 180 = 180, i.e. <b>20%</b> of workers", m: 1, k: ["20", "180"] }, { p: "Formal: 180 regular staff with PF and paid leave", m: 1, k: ["formal", "180"] }, { p: "Informal: 720 self-employed and casual, no security", m: 1, k: ["informal", "720"] }],
          structure: ["Ratio, share, two sectors."],
          model: "<p>Worker-population ratio = 900 ÷ 2,500 × 100 = <b>36%</b>.</p><p>Casual workers = 900 − 540 − 180 = <b>180</b>, which is 180 ÷ 900 × 100 = <b>20%</b> of the workforce.</p><p><b>Formal sector:</b> the 180 regular staff who get provident fund and paid leave.</p><p><b>Informal sector:</b> the remaining <b>720</b> (540 self-employed + 180 casual), who lack job and social security.</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "Five on a field for three",
      text: "<p><b>Hari</b>'s family of five works on a 2-acre farm that needs only three people. When two brothers took jobs in a nearby brick kiln, output did not fall. After harvest, the whole family sits idle for four months. The government's rural job guarantee gave Hari 100 days of road-building work.</p>",
      qs: [
        { q: "Identify the types of unemployment and the government programme. Explain how diversification could help.", m: 6, type: "Identify and suggest", c: "unemp", ans: "Disguised and seasonal unemployment; MGNREGA; diversification into dairy, poultry etc.", keys: ["disguised", "seasonal", "mgnrega"], hint: "Output didn't fall; idle after harvest.",
          points: [{ p: "<b>Disguised unemployment</b>: five where three are needed", m: 1, k: ["disguised"] }, { p: "Evidence: output did not fall when two left (zero marginal product)", m: 1, k: ["output", "marginal", "zero"] }, { p: "<b>Seasonal unemployment</b>: idle four months after harvest", m: 1, k: ["seasonal"] }, { p: "Programme: <b>MGNREGA</b>, 100 days of guaranteed wage work", m: 1, k: ["mgnrega", "100 days", "guarantee"] }, { p: "Diversification into animal husbandry, poultry, fisheries", m: 1, k: ["animal", "dairy", "poultry", "fish"] }, { p: "Gives off-season income and reduces risk", m: 1, k: ["off-season", "income", "risk"] }],
          structure: ["Two types with evidence, programme, diversification."],
          model: "<p>(i) <b>Disguised unemployment:</b> five people work where three are enough; when two brothers left, <b>output did not fall</b>, so their marginal product was zero.</p><p>(ii) <b>Seasonal unemployment:</b> the family is idle for four months after harvest.</p><p>The government programme is <b>MGNREGA</b>, which guarantees 100 days of wage employment to rural households.</p><p><b>Diversification</b> into animal husbandry, poultry or fisheries would give the family work and <b>income in the off-season</b>, and spread risk away from a single crop.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "The river that could not cope",
      text: "<p>Factories in <b>Navnagar</b> pour untreated waste into the river, which once cleaned itself. Fish have died, villagers fall sick, and the town spends crores on water treatment. A panel suggests solar power, biogas plants for villages and bio-composting of waste, so that the next generation also has clean water.</p>",
      qs: [
        { q: "Explain the environmental concept shown, the economic cost, and the sustainable strategies suggested.", m: 4, type: "Explain", c: "sd", ans: "Waste exceeds absorptive capacity; opportunity cost; solar, biogas, bio-composting", keys: ["absorptive", "sustainable"], hint: "The river 'once cleaned itself'.",
          points: [{ p: "Waste has exceeded the river's <b>absorptive capacity</b>", m: 1, k: ["absorptive"] }, { p: "Economic cost: health and treatment spending (opportunity cost)", m: 1, k: ["cost", "treatment", "opportunity"] }, { p: "Strategies: solar power, biogas, bio-composting", m: 1, k: ["solar", "biogas", "compost"] }, { p: "Aim: <b>sustainable development</b>, protecting future generations", m: 1, k: ["sustainable", "future"] }],
          structure: ["Concept, cost, strategies, aim."],
          model: "<p>The river 'once cleaned itself', but the waste now <b>exceeds its absorptive capacity</b>, so pollution builds up.</p><p>There is a real <b>economic cost</b>: illness and crores spent on water treatment, money that could have gone to schools or hospitals (opportunity cost).</p><p>The suggested <b>strategies</b>, solar power, biogas plants and bio-composting, reduce pollution.</p><p>They aim at <b>sustainable development</b>: meeting present needs without harming the next generation's access to clean water.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "credit", q: "The apex institution for rural credit in India is:", o: ["RBI", "NABARD", "SBI", "SIDBI"], a: 1, hint: "Set up 1982.", why: "<b>NABARD</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "sd", q: "The Brundtland Commission defined sustainable development in:", o: ["1972", "1987", "1992", "2015"], a: 1, hint: "'Our Common Future'.", why: "<b>1987</b>." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "hc", q: "Which is NOT a source of human capital?", o: ["Education", "Health", "Migration", "Buying a tractor"], a: 3, hint: "Physical capital.", why: "<b>Buying a tractor</b> is physical capital." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "wpr", q: "Population 4,000, workers 1,400. Worker-population ratio:", o: ["28%", "35%", "40%", "14%"], a: 1, hint: "1,400 ÷ 4,000.", why: "<b>35%</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "formal", q: "A private firm is in the formal sector if it hires at least:", o: ["5 workers", "10 workers", "20 workers", "100 workers"], a: 1, hint: "Ten.", why: "<b>10 workers</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "divers", q: "Moving from crop farming to dairy and poultry is:", o: ["Diversification of activity", "Green Revolution", "Land reform", "Organic farming"], a: 0, hint: "New activity.", why: "<b>Diversification of activity</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "unemp", q: "When extra workers on a farm add nothing to output, it is:", o: ["Seasonal unemployment", "Disguised unemployment", "Open unemployment", "Frictional unemployment"], a: 1, hint: "Zero marginal product.", why: "<b>Disguised unemployment</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "env", q: "Which is NOT a function of the environment?", o: ["Supplies resources", "Assimilates waste", "Prints currency", "Provides aesthetic services"], a: 2, hint: "Four functions.", why: "<b>Printing currency</b> is not." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "hcpc", q: "Human capital cannot be sold separately from its owner.", r: "Human capital is embodied in a person.", a: 0, hint: "Inseparable.", why: "Both true; R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "credit", q: "SHGs help the poor get credit.", r: "SHG loans require heavy collateral.", a: 2, hint: "Group guarantee.", why: "A true; R false." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "formal", q: "India has experienced jobless growth at times.", r: "GDP grew faster than employment.", a: 0, hint: "Definition.", why: "Both true; R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "divers", q: "Organic farming uses chemical fertilisers.", a: false, hint: "Natural inputs.", why: "False." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "formal", q: "Most Indian workers are in the informal sector.", a: true, hint: "90%+.", why: "True." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "env", q: "Global warming is caused mainly by greenhouse gases.", a: true, hint: "CO₂, methane.", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "hc", q: "Match the situation with the source of human capital.", pairs: [["B.Tech degree", "Education"], ["Vaccination drive", "Health"], ["Apprenticeship at a factory", "On-the-job training"], ["Moving to a city for work", "Migration"]], hint: "Five sources.", why: "Each situation is one source." },
    { id: "q16", t: "match", d: "M", m: 4, c: "mkt", q: "Match the term with its meaning.", pairs: [["MSP", "Price at which government buys crops"], ["Regulated market", "Market with fair rules and weighing"], ["Rythu Bazar", "Farmers sell directly to consumers"], ["Warehouse", "Storage to avoid distress sale"]], hint: "Marketing measures.", why: "Each term has one meaning." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "edu", q: "The Kothari Commission recommended ______% of GDP on education.", acc: ["6", "six"], hint: "Single digit.", why: "6%." },
    { id: "q18", t: "fill", d: "M", m: 1, c: "env", q: "The environment's ability to absorb degradation is its ______ capacity.", acc: ["absorptive"], hint: "Soak up.", why: "Absorptive." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "unemp", q: "MGNREGA guarantees ______ days of wage employment.", acc: ["100", "hundred"], hint: "A round number.", why: "100." },
    { id: "q20", t: "short", d: "E", m: 1, c: "credit", q: "What is microcredit provided by small savings groups called? Name the group.", acc: ["shg", "self-help group", "self help group", "self-help groups"], hint: "Women's groups.", why: "Self-Help Group." },
    { id: "q21", t: "short", d: "M", m: 1, c: "env", q: "Name one greenhouse gas.", acc: ["carbon dioxide", "co2", "methane", "nitrous oxide"], hint: "From burning fuel.", why: "CO₂ or methane." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "hcpc", q: "Distinguish between human capital and physical capital on three bases.", hint: "Tangible, separable, mobility.", why: "",
      points: [{ p: "Intangible vs tangible", m: 1, k: ["tangible"] }, { p: "Inseparable from owner vs separable / can be sold", m: 1, k: ["separa", "sold"] }, { p: "Social benefits vs private benefits / mobility differs", m: 1, k: ["social", "benefit", "mobil"] }],
      model: "<table><tr><th>Basis</th><th>Human capital</th><th>Physical capital</th></tr><tr><td>Nature</td><td>Intangible</td><td>Tangible</td></tr><tr><td>Separability</td><td>Inseparable from owner</td><td>Can be sold separately</td></tr><tr><td>Benefits</td><td>Private and social</td><td>Mainly private</td></tr></table>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "divers", q: "Explain three benefits of organic farming.", hint: "Health, soil, exports.", why: "",
      points: [{ p: "Healthier, chemical-free food", m: 1, k: ["health", "chemical"] }, { p: "Maintains soil fertility / environment-friendly", m: 1, k: ["soil", "environment"] }, { p: "Export demand / low-cost inputs / employment", m: 1, k: ["export", "cost", "employ"] }],
      model: "<p>(i) Produces <b>healthier, chemical-free food</b>.</p><p>(ii) <b>Maintains soil fertility</b> and protects the environment.</p><p>(iii) Organic produce has high <b>export demand</b>, and uses cheap local inputs while generating more employment.</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "mkt", q: "Explain four measures taken to improve agricultural marketing in India.", hint: "Regulated markets, infrastructure, cooperatives, MSP.", why: "",
      points: [{ p: "Regulated markets", m: 1, k: ["regulat"] }, { p: "Physical infrastructure: roads, warehouses, cold storage", m: 1, k: ["warehouse", "storage", "road"] }, { p: "Cooperative marketing", m: 1, k: ["cooperat"] }, { p: "MSP, buffer stocks, PDS", m: 1, k: ["msp", "minimum support", "buffer"] }],
      model: "<p>(i) <b>Regulated markets:</b> ensure fair weighing and prices, protecting farmers from traders.</p><p>(ii) <b>Physical infrastructure:</b> roads, warehouses and cold storage reduce wastage and distress sales.</p><p>(iii) <b>Cooperative marketing:</b> farmers sell together for better prices.</p><p>(iv) <b>Policy support:</b> minimum support price, buffer stocks and the public distribution system.</p>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "env", q: "Explain the four functions of the environment.", hint: "Resources, waste, life, beauty.", why: "",
      points: [{ p: "Supplies renewable and non-renewable resources", m: 1, k: ["resource"] }, { p: "Assimilates waste", m: 1, k: ["waste", "assimilat"] }, { p: "Sustains life (biodiversity)", m: 1, k: ["life", "biodivers"] }, { p: "Provides aesthetic services", m: 1, k: ["aesthetic", "scenery"] }],
      model: "<p>(i) <b>Supplies resources:</b> renewable (forests, water) and non-renewable (minerals, oil).</p><p>(ii) <b>Assimilates waste</b> produced by human activity.</p><p>(iii) <b>Sustains life</b> through genetic and biodiversity.</p><p>(iv) <b>Provides aesthetic services</b> like scenery and natural beauty.</p>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "credit", q: "Explain the sources of rural credit in India and the role of SHGs.", hint: "Non-institutional, institutional, NABARD, SHGs.", why: "",
      points: [{ p: "Non-institutional: moneylenders, traders; high interest", m: 1, k: ["moneylender", "non-institutional"] }, { p: "Institutional: cooperatives, commercial banks, RRBs", m: 1, k: ["cooperat", "commercial", "rrb", "regional rural"] }, { p: "NABARD as apex body (1982)", m: 1, k: ["nabard"] }, { p: "SHGs: group savings and lending", m: 1, k: ["shg", "self-help"] }, { p: "SHGs: no collateral, low interest", m: 1, k: ["collateral"] }, { p: "SHGs: women empowerment, bank linkage", m: 1, k: ["women", "bank linkage", "empower"] }],
      model: "<p><b>Non-institutional sources:</b> moneylenders, traders and landlords, who charge high interest and often trap farmers in debt.</p><p><b>Institutional sources:</b> cooperative societies, commercial banks and Regional Rural Banks, coordinated by <b>NABARD</b> (1982), the apex body for rural credit.</p><p><b>Self-Help Groups:</b> small groups, mostly of women, pool savings and lend to members. Loans need <b>no collateral</b>, carry <b>low interest</b>, and good records earn <b>bank linkage</b>. SHGs have empowered rural women.</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "sd", q: "What is sustainable development? Suggest five strategies for it.", hint: "Brundtland; energy, fuels, biogas, traditional knowledge.", why: "",
      points: [{ p: "Definition (Brundtland, 1987)", m: 1, k: ["future generation", "present"] }, { p: "Non-conventional energy: solar, wind", m: 1, k: ["solar", "wind"] }, { p: "LPG/CNG in place of wood and diesel", m: 1, k: ["lpg", "cng"] }, { p: "Biogas in rural areas / mini-hydel plants", m: 1, k: ["biogas", "hydel"] }, { p: "Traditional knowledge (natural farming, Ayurveda)", m: 1, k: ["traditional"] }, { p: "Bio-composting and bio-pest control", m: 1, k: ["compost", "bio-pest"] }],
      model: "<p><b>Sustainable development</b> is development that meets the needs of the present generation without compromising the ability of future generations to meet their own needs (Brundtland Commission, 1987).</p><p><b>Strategies:</b> (i) use <b>solar and wind energy</b>; (ii) switch to <b>LPG in homes and CNG in transport</b>; (iii) build <b>biogas plants</b> and mini-hydel plants in villages; (iv) revive <b>traditional knowledge</b> such as natural farming; (v) use <b>bio-composting</b> and bio-pest control instead of chemicals.</p>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "hc", q: "A company pays for its staff to learn data analytics on weekends. This builds human capital through", o: ["Migration", "On-the-job training", "Health", "Information"], a: 1, hint: "Employer-sponsored.", why: "<b>On-the-job training</b>." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "formal", q: "A street vendor with no fixed salary or pension works in the", o: ["Formal sector", "Informal sector", "Public sector", "Organised sector"], a: 1, hint: "No security.", why: "<b>Informal sector</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "env", q: "A lake that once cleaned itself now stays dirty because waste has crossed its", o: ["Absorptive capacity", "Carrying cost", "Buffer stock", "Marketed surplus"], a: 0, hint: "Absorb.", why: "<b>Absorptive capacity</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "credit", passage: "Fifteen women in a village pool savings and lend ₹5,000 to a member for a sewing machine.", q: "This is", o: ["SHG microcredit", "NABARD", "Moneylending", "MSP"], a: 0, hint: "Group savings.", why: "<b>SHG</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "wpr", passage: "A district has 50,000 people and 20,000 workers.", q: "Its worker-population ratio is", o: ["25%", "40%", "50%", "20%"], a: 1, hint: "20,000 ÷ 50,000.", why: "<b>40%</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "divers", passage: "A Punjab farmer adds a fish pond and a poultry shed to his wheat farm.", q: "This is", o: ["Diversification of activity", "Green Revolution", "Disguised unemployment", "Land ceiling"], a: 0, hint: "New activities.", why: "<b>Diversification of activity</b>." }
  ],
  find: {
    mcq: [
      { s: "A nurse completes a two-year course.", o: ["Education (human capital)", "Physical capital", "Migration", "Diversification"], a: 0, c: "hc", d: "E", why: "<b>Education</b>." },
      { s: "A worker leaves Bihar for a better-paid job in Surat.", o: ["Migration (human capital)", "Disguised unemployment", "SHG", "Organic farming"], a: 0, c: "hc", d: "E", why: "<b>Migration</b>." },
      { s: "A village gets a free health camp.", o: ["Health (human capital)", "Credit", "MSP", "Absorptive capacity"], a: 0, c: "hc", d: "E", why: "<b>Health</b>." },
      { s: "Women in a village save together and lend to each other.", o: ["SHG", "NABARD", "Moneylender", "Cooperative bank"], a: 0, c: "credit", d: "E", why: "<b>SHG</b>." },
      { s: "Government buys wheat at ₹2,425 per quintal.", o: ["Minimum support price", "Organic farming", "Disinvestment", "Outsourcing"], a: 0, c: "mkt", d: "M", why: "<b>MSP</b>." },
      { s: "Farmer adds a dairy unit to his crop farm.", o: ["Diversification of activity", "Land ceiling", "Green Revolution", "Seasonal unemployment"], a: 0, c: "divers", d: "M", why: "<b>Diversification</b>." },
      { s: "Vegetables grown with cow-dung manure and neem spray only.", o: ["Organic farming", "Green Revolution", "Diversification", "MSP"], a: 0, c: "divers", d: "M", why: "<b>Organic farming</b>." },
      { s: "480 of a village's 1,200 people are workers.", o: ["Worker-population ratio 40%", "Unemployment 40%", "GDP", "Literacy"], a: 0, c: "wpr", d: "M", why: "<b>WPR = 40%</b>." },
      { s: "Bank clerk with pension and paid leave.", o: ["Formal sector", "Informal sector", "Casual labour", "Disguised unemployment"], a: 0, c: "formal", d: "M", why: "<b>Formal sector</b>." },
      { s: "Daily-wage construction worker, no contract.", o: ["Informal / casual worker", "Formal sector", "Regular salaried", "Public sector"], a: 0, c: "formal", d: "M", why: "<b>Informal, casual</b>." },
      { s: "GDP grows 7% but jobs grow only 1%.", o: ["Jobless growth", "Full employment", "Inflation", "Disinvestment"], a: 0, c: "formal", d: "C", why: "<b>Jobless growth</b>." },
      { s: "Six family members on a farm that needs four.", o: ["Disguised unemployment", "Seasonal unemployment", "Frictional", "Open"], a: 0, c: "unemp", d: "C", why: "<b>Disguised</b>." },
      { s: "Sugarcane workers idle for five months after crushing.", o: ["Seasonal unemployment", "Disguised", "Structural", "Jobless growth"], a: 0, c: "unemp", d: "C", why: "<b>Seasonal</b>." },
      { s: "A forest supplies timber, absorbs CO₂ and attracts tourists.", o: ["Functions of the environment", "Absorptive capacity exceeded", "Global warming", "Diversification"], a: 0, c: "env", d: "C", why: "<b>Functions of environment</b>." },
      { s: "Glaciers melt and sea levels rise.", o: ["Global warming", "Organic farming", "Jobless growth", "MSP"], a: 0, c: "env", d: "C", why: "<b>Global warming</b>." },
      { s: "Using solar panels so future generations have clean air.", o: ["Sustainable development", "Jobless growth", "Disinvestment", "Outsourcing"], a: 0, c: "sd", d: "C", why: "<b>Sustainable development</b>." }
    ],
    match: [
      { title: "Drag each situation onto its concept.", pairs: [["Weekend course paid by employer", "On-the-job training", "hc"], ["Women's group lends without collateral", "SHG", "credit"], ["Wheat farm adds poultry", "Diversification", "divers"], ["Extra workers add nothing to output", "Disguised unemployment", "unemp"], ["Waste more than a river can clean", "Absorptive capacity", "env"], ["Meeting today's needs without harming tomorrow", "Sustainable development", "sd"]] }
    ],
    wrong: [
      { stmts: ["Education is a source of human capital.", "Human capital is tangible.", "Migration is a source of human capital.", "Health spending builds human capital."], a: 1, c: "hcpc", why: "Human capital is <b>intangible</b>." },
      { stmts: ["NABARD was set up in 1982.", "SHG loans need collateral.", "MSP protects farmers.", "Organic farming avoids chemicals."], a: 1, c: "credit", why: "SHG loans need <b>no</b> collateral." },
      { stmts: ["Most Indian workers are informal.", "MGNREGA offers 100 days of work.", "The formal sector employs most workers.", "WPR = workers ÷ population × 100."], a: 2, c: "formal", why: "The <b>informal</b> sector employs most workers." }
    ],
    para: [
      { target: "Information (human capital)", c: "hc", sents: ["Pooja lives in Agra.", "She completed her graduation.", "She regularly checks a government portal for job openings and exam dates.", "She enjoys painting."], a: 2, why: "Spending time on job information: <b>information</b>." },
      { target: "Seasonal unemployment", c: "unemp", sents: ["Ramesh grows paddy in Bihar.", "He works hard from June to November.", "From December to May he has no work at all.", "His son goes to school."], a: 2, why: "Idle in off-season: <b>seasonal unemployment</b>." },
      { target: "Global warming", c: "env", sents: ["Mumbai is a coastal city.", "Factories and cars burn coal and petrol.", "Average temperatures have risen and sea levels are creeping up.", "The city has many film studios."], a: 2, why: "Rising temperature and sea level: <b>global warming</b>." }
    ],
    explain: [
      { s: "A degree cannot be sold separately from the graduate.", o: ["Human capital is inseparable", "Physical capital", "Diversification", "Absorptive capacity"], a: 0, c: "hcpc", why: "The clue is <i>cannot be sold separately</i>: <b>human capital</b>." },
      { s: "Farmers sell directly to buyers at a Rythu Bazar.", o: ["Alternative marketing channel", "MSP", "SHG", "Organic farming"], a: 0, c: "mkt", why: "<b>Alternative marketing</b>." },
      { s: "A tailor works alone from home with no contract.", o: ["Self-employed, informal sector", "Formal sector", "Public sector", "Regular salaried"], a: 0, c: "formal", why: "<b>Self-employed, informal</b>." },
      { s: "Villages use cow-dung gas instead of firewood.", o: ["Biogas: sustainable strategy", "Global warming", "Jobless growth", "Disinvestment"], a: 0, c: "sd", why: "<b>Biogas</b>." }
    ]
  }
});
