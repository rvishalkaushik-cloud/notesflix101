/* Revision Arena · Class XII Economics · Unit 8 · Development Experience of India: A Comparison with Neighbours. Original cases; comparisons kept relative, at NCERT level. */
NFArena.register({
  id: "eco12-neighbours", cls: "XII", subject: "Economics", unit: "Unit", num: "8",
  title: "India, Pakistan and China Compared",
  tagline: "Development paths, growth, population, sectoral shares and human development across three neighbours.",
  notesLink: "../#eco12-neighbours",
  concepts: {
    path: { n: "Similar starting points and planning", s: "paths" },
    china: { n: "China's path: GLF, Cultural Revolution, 1978 reforms", s: "paths" },
    pak: { n: "Pakistan's path: mixed economy, reforms of 1988", s: "paths" },
    demo: { n: "Demographic indicators", s: "compare" },
    gdp: { n: "Growth and sectoral development", s: "compare" },
    hdi: { n: "Human development indicators", s: "compare" },
    lessons: { n: "Strategies, appraisal and lessons", s: "lessons" }
  },
  overview: {
    text: "India, Pakistan and China began their development journeys at about the same time with similar incomes. All three chose planning. China moved fastest after its <b>1978 reforms</b>; Pakistan's growth was uneven; India's growth picked up after <b>1991</b>, led by services.",
    points: [
      "India and Pakistan became independent in <b>1947</b>; the People's Republic of China was formed in <b>1949</b>.",
      "First five year plans: India <b>1951</b>, China <b>1953</b>, Pakistan <b>1956</b> (Medium Term Development Plan).",
      "China adopted the <b>one-child policy</b> in 1979, slowing population growth.",
      "China leads in growth and most human development indicators."
    ],
    map: {
      center: "Three Neighbours",
      branches: [
        { t: "Paths", c: ["Planning in all three", "China: GLF, Cultural Revolution", "Reforms: China 1978, Pakistan 1988, India 1991"] },
        { t: "Demography", c: ["Population, density", "Growth rate", "Sex ratio, urbanisation"] },
        { t: "Growth and sectors", c: ["China: industry-led", "India, Pakistan: services-led"] },
        { t: "Human development", c: ["HDI rank", "Life expectancy", "Literacy, poverty"] }
      ]
    }
  },
  sections: [
    {
      id: "paths", title: "Development paths", sub: "Same start, different roads", icon: "🛤️", color: "#4da3ff",
      quick: [
        "All three started with <b>low incomes</b>, a large agricultural workforce and poor infrastructure, and adopted <b>five year plans</b>.",
        "<b>China</b>: <b>Great Leap Forward (GLF, 1958)</b>: industrialisation on a massive scale, backyard furnaces, and <b>communes</b> (collective farming). It faced setbacks (drought, famine, withdrawal of Soviet experts). <b>Great Proletarian Cultural Revolution (1966-76)</b>: students and professionals sent to the countryside to learn.",
        "<b>China's reforms (1978)</b>: in phases. First, agriculture, foreign trade and investment; <b>commune land divided</b> into plots for households (who kept income after taxes). Then <b>industry</b>: private firms and township and village enterprises allowed. <b>Dual pricing</b>: fixed quotas at state prices, the rest at market prices. <b>Special Economic Zones (SEZs)</b> to attract foreign investors.",
        "<b>Pakistan</b>: a <b>mixed economy</b> with public and private sectors; import substitution in the 1950s-60s, then a Green Revolution and nationalisation of key industries in the 1970s, denationalisation in the late 1970s-80s. <b>Reforms began in 1988</b>.",
        "<b>India</b>: mixed economy and planning; reforms from <b>1991</b>."
      ],
      table: { cap: "Key dates", head: ["Event", "India", "Pakistan", "China"], rows: [["Became a nation", "1947", "1947", "1949 (PRC)"], ["First five year plan", "1951", "1956", "1953"], ["Economic reforms", "1991", "1988", "1978"]] },
      cards: [
        { t: "Why did China reform early?", tag: "why", b: "<p>After the setbacks of the GLF and Cultural Revolution, China's growth was slow and there was little modernisation. The leadership opened the economy gradually from 1978 to speed up growth.</p>" }
      ],
      exam: ["Memorise the order: <b>China 1978 → Pakistan 1988 → India 1991</b>."]
    },
    {
      id: "compare", title: "Comparing the three", sub: "Demography, growth, sectors, HDI", icon: "📊", color: "#22c55e",
      quick: [
        "<b>Population</b>: China and India are the most populous; Pakistan is much smaller.",
        "<b>Population density</b> is lowest in China (because of its large land area), higher in India.",
        "<b>Population growth</b>: highest in Pakistan, lowest in China (one-child policy).",
        "<b>Sex ratio</b> is low (biased against females) in all three, reflecting son preference.",
        "<b>Urbanisation</b> is highest in China.",
        "<b>GDP growth</b>: China grew fastest for decades (often near double digits); India's growth improved after 1991; Pakistan's was slower and fluctuating.",
        "<b>Sectoral shares</b>: in <b>China</b>, growth was led by <b>manufacturing (industry)</b>; in <b>India and Pakistan</b>, by the <b>services</b> sector. In all three, agriculture's share of output fell faster than its share of employment.",
        "<b>Human development</b>: China ranks above India and Pakistan in HDI, with higher life expectancy and literacy, lower infant mortality and poverty. India does better than Pakistan on several indicators.",
        "<b>Liberty indicators</b> (democratic freedoms) are also important; HDI alone does not capture them."
      ],
      table: { cap: "Relative picture", head: ["Indicator", "Best", "Note"], rows: [["GDP growth", "China", "Industry-led"], ["Population growth", "China (lowest)", "One-child policy"], ["Density", "China (lowest)", "Large area"], ["HDI rank", "China", "Health and education"], ["Growth source", "India, Pakistan: services", "China: manufacturing"]] },
      cards: [
        { t: "Reading a comparison table", tag: "tip", b: "<p>When a question gives data, first name the country that is best and worst on each indicator, then give one reason (e.g. one-child policy, large land area, industry-led growth).</p>" }
      ],
      exam: ["Low density in China is due to <b>large area</b>, not small population."]
    },
    {
      id: "lessons", title: "Appraisal and lessons", sub: "What explains the differences", icon: "💡", color: "#f5b301",
      quick: [
        "<b>China</b>: early investment in <b>health and education</b> and land reforms before 1978 laid a base; reforms then used it. Commune-based infrastructure reached rural areas. Concerns: environmental strain, limited political freedom.",
        "<b>Pakistan</b>: slow growth due to <b>political instability</b>, over-dependence on <b>remittances and foreign aid</b>, volatile agriculture, and a slowdown of the Green Revolution; growth in some years came from good harvests. Rising foreign debt.",
        "<b>India</b>: democratic institutions and a strong services sector; reforms raised growth, but manufacturing and human development lagged behind China.",
        "Lesson: building <b>human capital</b> and infrastructure first makes market reforms more effective."
      ],
      cards: [
        { t: "Remittances", tag: "def", b: "<p>Money sent home by citizens working abroad. Pakistan relied heavily on them, which made its foreign exchange earnings uncertain.</p>" }
      ],
      exam: ["Pakistan's problems: <b>political instability, dependence on aid and remittances</b>."]
    }
  ],
  flashcards: [
    { k: "Dates", c: "path", q: "When was the People's Republic of China formed?", a: "1949." },
    { k: "Dates", c: "path", q: "When did each country start its first five year plan?", a: "India 1951, China 1953, Pakistan 1956." },
    { k: "China", c: "china", q: "What was the Great Leap Forward?", a: "A 1958 campaign for rapid industrialisation, with backyard furnaces and communes." },
    { k: "China", c: "china", q: "What are communes?", a: "Collective farming in which people jointly cultivated land." },
    { k: "China", c: "china", q: "What was the Cultural Revolution?", a: "A 1966-76 movement sending students and professionals to the countryside to learn." },
    { k: "China", c: "china", q: "When did China start reforms?", a: "1978." },
    { k: "China", c: "china", q: "What is dual pricing?", a: "Fixed quotas sold at state prices; the rest sold at market prices." },
    { k: "China", c: "china", q: "Why were SEZs set up?", a: "To attract foreign investors." },
    { k: "Pakistan", c: "pak", q: "When did Pakistan start reforms?", a: "1988." },
    { k: "Pakistan", c: "pak", q: "Name two causes of Pakistan's slow growth.", a: "Political instability and dependence on remittances and foreign aid." },
    { k: "Demography", c: "demo", q: "Which country has the lowest population growth? Why?", a: "China, due to the one-child policy (1979)." },
    { k: "Demography", c: "demo", q: "Which country has the lowest population density?", a: "China, because of its large land area." },
    { k: "Demography", c: "demo", q: "Which country has the highest population growth?", a: "Pakistan." },
    { k: "Growth", c: "gdp", q: "Which sector led China's growth?", a: "Manufacturing (industry)." },
    { k: "Growth", c: "gdp", q: "Which sector led growth in India and Pakistan?", a: "Services." },
    { k: "HDI", c: "hdi", q: "Which country ranks highest on HDI among the three?", a: "China." },
    { k: "HDI", c: "hdi", q: "What do liberty indicators measure?", a: "Democratic participation and civil and political freedoms." },
    { k: "Lesson", c: "lessons", q: "What base helped China's reforms succeed?", a: "Earlier investment in health, education, land reforms and rural infrastructure." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Three timelines",
      text: "<p>A student made a timeline: Country X became independent in 1947, started its plan in 1951 and reformed in 1991. Country Y formed in 1949, started its plan in 1953 and reformed in 1978. Country Z became independent in 1947, began its plan in 1956 and reformed in 1988.</p>",
      qs: [
        { q: "Identify X, Y and Z, and arrange them in order of the year of reform.", m: 3, type: "Identify", c: "path", ans: "X India; Y China; Z Pakistan; China → Pakistan → India", keys: ["india", "china", "pakistan"], hint: "1978, 1988, 1991.",
          points: [{ p: "X = <b>India</b> (plan 1951, reforms 1991)", m: 1, k: ["india"] }, { p: "Y = <b>China</b> (PRC 1949, plan 1953, reforms 1978)", m: 1, k: ["china"] }, { p: "Z = <b>Pakistan</b> (plan 1956, reforms 1988); order China → Pakistan → India", m: 1, k: ["pakistan"] }],
          structure: ["Three identifications; the order."],
          model: "<p>X is <b>India</b>, Y is <b>China</b> and Z is <b>Pakistan</b>.</p><p>Order of reforms: <b>China (1978) → Pakistan (1988) → India (1991)</b>.</p>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "Backyard furnaces",
      text: "<p>In 1958, villagers in a Chinese province were told to set up small steel furnaces in their backyards. Farms were merged into large collectives where everyone worked together. A drought followed, Soviet experts left, and output fell sharply.</p>",
      qs: [
        { q: "Name the campaign and the farming system, and explain why the campaign faced problems.", m: 4, type: "Identify and explain", c: "china", ans: "Great Leap Forward; communes; drought, Soviet withdrawal, poor-quality output", keys: ["great leap", "commune"], hint: "1958.",
          points: [{ p: "<b>Great Leap Forward</b> (1958)", m: 1, k: ["great leap", "glf"] }, { p: "Farming system: <b>communes</b> (collective farming)", m: 1, k: ["commune", "collective"] }, { p: "Problem: drought / natural calamity", m: 1, k: ["drought", "famine"] }, { p: "Problem: withdrawal of Soviet experts; poor quality backyard steel", m: 1, k: ["soviet", "quality"] }],
          structure: ["Two names, two problems."],
          model: "<p>The campaign is the <b>Great Leap Forward</b> (1958), which aimed at rapid industrialisation through backyard steel furnaces.</p><p>The farming system is the <b>commune</b>, under which people cultivated land collectively.</p><p>It faced problems because a <b>drought</b> hit farm output, and the <b>Soviet Union withdrew its experts</b>; much backyard steel was also of poor quality.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "The plot and the quota",
      text: "<p>After 1978, <b>Li Wei</b>'s family received a plot of former commune land. They had to sell a fixed quota of rice to the state at a set price, but could sell the rest in the market at whatever price buyers paid. Near the coast, a foreign electronics firm built a factory in a zone with tax concessions.</p>",
      qs: [
        { q: "Identify three reform measures of China shown in the case.", m: 3, type: "Identify", c: "china", ans: "Division of commune land; dual pricing; SEZ", keys: ["commune", "dual pricing", "sez"], hint: "Land, price, zone.",
          points: [{ p: "Commune land divided into household plots", m: 1, k: ["commune", "plot", "household"] }, { p: "<b>Dual pricing</b>: quota at state price, rest at market price", m: 1, k: ["dual pricing"] }, { p: "<b>Special Economic Zone</b> to attract foreign investment", m: 1, k: ["sez", "special economic zone"] }],
          structure: ["Three measures with case lines."],
          model: "<p>(i) <b>Division of commune land</b> into household plots, with families keeping income after taxes.</p><p>(ii) <b>Dual pricing:</b> a fixed quota sold at state prices, the rest at market prices.</p><p>(iii) <b>Special Economic Zone:</b> the foreign firm's factory in a coastal zone with tax concessions.</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "Reading the dashboard",
      text: "<p>A table shows three countries. Country P has the highest GDP growth, the lowest population growth, the lowest population density and the highest HDI rank; most of its growth comes from factories. Country Q has the highest population growth and relies heavily on remittances. Country R's growth is led by IT and other services, and it is a democracy.</p>",
      qs: [
        { q: "Identify P, Q and R and give one reason behind each country's main feature.", m: 6, type: "Interpret data", c: "gdp", ans: "P China (one-child, industry, large area); Q Pakistan (remittances); R India (services)", keys: ["china", "pakistan", "india"], hint: "Factories, remittances, services.",
          points: [{ p: "P = <b>China</b>", m: 1, k: ["china"] }, { p: "Reason: one-child policy lowers population growth; large area lowers density", m: 1, k: ["one-child", "area"] }, { p: "Reason: manufacturing-led growth; early health and education investment raises HDI", m: 1, k: ["manufactur", "industr", "health", "education"] }, { p: "Q = <b>Pakistan</b>: high population growth, dependence on remittances", m: 1, k: ["pakistan"] }, { p: "R = <b>India</b>", m: 1, k: ["india"] }, { p: "Reason: services-led growth after 1991 reforms; democracy (liberty)", m: 1, k: ["service", "1991", "democra"] }],
          structure: ["Identify each; one reason each."],
          model: "<p><b>P is China.</b> Its population growth is lowest because of the <b>one-child policy</b>; density is lowest because of its <b>large land area</b>; growth is <b>manufacturing-led</b>; and early investment in health and education gives it the highest HDI.</p><p><b>Q is Pakistan.</b> It has the highest population growth and depends heavily on <b>remittances</b> and foreign aid.</p><p><b>R is India.</b> Its growth after the <b>1991 reforms</b> has been led by <b>services</b> such as IT, and it scores well on <b>liberty indicators</b> as a democracy.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Why Pakistan lagged",
      text: "<p>An economist notes that one neighbour's governments changed often, its growth rose in years of good harvests and fell in bad years, and a large part of its foreign exchange came from workers abroad and from foreign loans, leading to rising debt.</p>",
      qs: [
        { q: "Name the country and explain four reasons for its slow growth from the case.", m: 4, type: "Explain", c: "pak", ans: "Pakistan: political instability, volatile agriculture, remittances, foreign debt", keys: ["pakistan", "instab", "remittance"], hint: "Four lines, four reasons.",
          points: [{ p: "Country: <b>Pakistan</b>; political instability", m: 1, k: ["pakistan", "instab", "political"] }, { p: "Dependence on agriculture / weather (volatile growth)", m: 1, k: ["agricult", "harvest", "weather"] }, { p: "Dependence on remittances", m: 1, k: ["remittance"] }, { p: "Dependence on foreign aid / rising foreign debt", m: 1, k: ["aid", "debt", "loan"] }],
          structure: ["Name; four reasons."],
          model: "<p>The country is <b>Pakistan</b>. Reasons for slow growth:</p><p>(i) <b>Political instability:</b> frequent changes of government.</p><p>(ii) <b>Volatile agriculture:</b> growth depended on good harvests.</p><p>(iii) <b>Dependence on remittances</b> from workers abroad, an uncertain source.</p><p>(iv) <b>Dependence on foreign aid</b> and loans, causing rising debt.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "path", q: "The People's Republic of China was formed in:", o: ["1947", "1949", "1953", "1978"], a: 1, hint: "Two years after India.", why: "<b>1949</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "china", q: "China introduced economic reforms in:", o: ["1958", "1966", "1978", "1991"], a: 2, hint: "Earliest of the three.", why: "<b>1978</b>." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "pak", q: "Pakistan introduced economic reforms in:", o: ["1978", "1988", "1991", "1956"], a: 1, hint: "Between China and India.", why: "<b>1988</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "china", q: "The Great Leap Forward was launched in:", o: ["1949", "1958", "1966", "1978"], a: 1, hint: "Backyard furnaces.", why: "<b>1958</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "demo", q: "The lowest population density among the three is in:", o: ["India", "Pakistan", "China", "All equal"], a: 2, hint: "Large land area.", why: "<b>China</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "gdp", q: "China's growth has been led mainly by:", o: ["Agriculture", "Manufacturing", "Services", "Remittances"], a: 1, hint: "Factories.", why: "<b>Manufacturing</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "path", q: "Pakistan's first five year plan began in:", o: ["1951", "1953", "1956", "1961"], a: 2, hint: "Medium Term Development Plan.", why: "<b>1956</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "demo", q: "Highest population growth rate among the three:", o: ["China", "India", "Pakistan", "Same"], a: 2, hint: "No one-child policy.", why: "<b>Pakistan</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "demo", q: "China's population growth slowed sharply.", r: "China adopted the one-child policy in 1979.", a: 0, hint: "Policy.", why: "Both true; R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "gdp", q: "Services have led growth in India.", r: "India's manufacturing share is the highest among the three.", a: 2, hint: "China leads manufacturing.", why: "A true; R false." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "lessons", q: "China's reforms succeeded quickly after 1978.", r: "China had already invested in health, education and land reforms.", a: 0, hint: "Base.", why: "Both true; R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "path", q: "All three countries adopted five year plans.", a: true, hint: "Planning.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "hdi", q: "Pakistan ranks highest on HDI among the three.", a: false, hint: "Health and education.", why: "False: <b>China</b>." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "china", q: "Dual pricing let farmers sell surplus output at market prices.", a: true, hint: "Two prices.", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "china", q: "Match the Chinese event with its feature.", pairs: [["Great Leap Forward", "Backyard furnaces"], ["Cultural Revolution", "Students sent to countryside"], ["1978 reforms", "Commune land divided"], ["SEZ", "Attract foreign investors"]], hint: "One each.", why: "Each event has one feature." },
    { id: "q16", t: "match", d: "M", m: 4, c: "path", q: "Match the country with its reform year.", pairs: [["China", "1978"], ["Pakistan", "1988"], ["India", "1991"], ["China's GLF", "1958"]], hint: "Order of reforms.", why: "Each has one year." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "demo", q: "China's one-child policy was adopted in ______.", acc: ["1979"], hint: "A year after reforms.", why: "1979." },
    { id: "q18", t: "fill", d: "M", m: 1, c: "china", q: "Collective farms under the GLF were called ______.", acc: ["communes", "commune"], hint: "Community.", why: "Communes." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "pak", q: "Money sent home by workers abroad is called ______.", acc: ["remittances", "remittance"], hint: "Pakistan relied on it.", why: "Remittances." },
    { id: "q20", t: "short", d: "E", m: 1, c: "path", q: "In which year did China begin its first five year plan?", acc: ["1953"], hint: "Two years after India.", why: "1953." },
    { id: "q21", t: "short", d: "M", m: 1, c: "hdi", q: "Which country among the three has the highest HDI?", acc: ["china"], hint: "Health and education.", why: "China." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "china", q: "Explain any three features of China's reforms of 1978.", hint: "Commune plots, dual pricing, SEZs.", why: "",
      points: [{ p: "Commune land divided into household plots", m: 1, k: ["commune", "plot"] }, { p: "Dual pricing", m: 1, k: ["dual pric"] }, { p: "SEZs / private enterprise / township and village enterprises", m: 1, k: ["sez", "special economic", "township", "private"] }],
      model: "<p>(i) <b>Commune land was divided</b> into plots allotted to households, who kept income after taxes.</p><p>(ii) <b>Dual pricing:</b> fixed quotas at state prices, the rest at market prices.</p><p>(iii) <b>Special Economic Zones</b> were set up to attract foreign investment, and private and township and village enterprises were allowed.</p>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "pak", q: "State three reasons for Pakistan's slow economic growth.", hint: "Politics, aid, agriculture.", why: "",
      points: [{ p: "Political instability", m: 1, k: ["political", "instab"] }, { p: "Dependence on remittances and foreign aid", m: 1, k: ["remittance", "aid"] }, { p: "Volatile agriculture / rising debt", m: 1, k: ["agricult", "debt"] }],
      model: "<p>(i) <b>Political instability</b> with frequent changes of government.</p><p>(ii) Heavy <b>dependence on remittances and foreign aid</b>.</p><p>(iii) <b>Volatile agriculture</b> and rising foreign debt.</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "demo", q: "Compare the demographic indicators of India, Pakistan and China.", hint: "Population, density, growth, sex ratio, urbanisation.", why: "",
      points: [{ p: "Population: China and India largest; Pakistan much smaller", m: 1, k: ["population"] }, { p: "Density lowest in China (large area)", m: 1, k: ["density"] }, { p: "Growth: lowest China (one-child), highest Pakistan", m: 1, k: ["growth", "one-child"] }, { p: "Low sex ratio in all three; urbanisation highest in China", m: 1, k: ["sex ratio", "urban"] }],
      model: "<p>(i) <b>Population:</b> China and India are the most populous; Pakistan is much smaller.</p><p>(ii) <b>Density:</b> lowest in China due to its large land area.</p><p>(iii) <b>Growth rate:</b> lowest in China (one-child policy), highest in Pakistan.</p><p>(iv) <b>Sex ratio</b> is low in all three; <b>urbanisation</b> is highest in China.</p>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "gdp", q: "Compare the sectoral growth pattern of the three countries.", hint: "China industry; India, Pakistan services.", why: "",
      points: [{ p: "China: manufacturing-led growth", m: 1, k: ["manufactur", "industr"] }, { p: "India: services-led growth", m: 1, k: ["india", "service"] }, { p: "Pakistan: services-led too", m: 1, k: ["pakistan", "service"] }, { p: "In all, agriculture's output share fell faster than its employment share", m: 1, k: ["agricult", "employ"] }],
      model: "<p>(i) In <b>China</b>, growth has been led by <b>manufacturing</b>, which has a large share of output.</p><p>(ii) In <b>India</b>, growth has been led by <b>services</b> such as IT and finance.</p><p>(iii) In <b>Pakistan</b>, too, <b>services</b> grew faster than industry.</p><p>(iv) In all three, agriculture's share of output fell much faster than its share of employment, so many workers remain in farming.</p>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "china", q: "Trace China's development path from 1949 to the reforms of 1978 and after.", hint: "PRC, plan, GLF, Cultural Revolution, 1978 phases.", why: "",
      points: [{ p: "PRC 1949; command economy; first plan 1953", m: 1, k: ["1949", "1953"] }, { p: "GLF 1958: backyard furnaces, communes", m: 1, k: ["great leap", "commune"] }, { p: "Setbacks: drought, Soviet withdrawal", m: 1, k: ["drought", "soviet"] }, { p: "Cultural Revolution 1966-76", m: 1, k: ["cultural revolution"] }, { p: "1978 reforms: agriculture, commune plots, dual pricing", m: 1, k: ["1978", "dual pric", "plot"] }, { p: "Later: industry, private firms, SEZs, foreign investment", m: 1, k: ["sez", "industr", "foreign"] }],
      model: "<p>After the <b>People's Republic of China</b> was formed in 1949, all key sectors came under state control, and the first five year plan began in <b>1953</b>.</p><p>The <b>Great Leap Forward (1958)</b> pushed rapid industrialisation through backyard furnaces and organised farmers into <b>communes</b>. It suffered from a <b>drought</b> and the <b>withdrawal of Soviet experts</b>.</p><p>The <b>Cultural Revolution (1966-76)</b> sent students and professionals to the countryside.</p><p>From <b>1978</b>, reforms came in phases: first agriculture (commune land divided into household plots, <b>dual pricing</b>), foreign trade and investment; then industry, with private and township enterprises and <b>SEZs</b> to attract foreign investors.</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "lessons", q: "Compare the human development of India, Pakistan and China and explain the reasons for China's lead.", hint: "HDI, life expectancy, literacy, poverty; early investment.", why: "",
      points: [{ p: "China ranks highest on HDI", m: 1, k: ["china", "hdi"] }, { p: "China: higher life expectancy, lower infant mortality", m: 1, k: ["life expectancy", "infant"] }, { p: "China: higher literacy, lower poverty", m: 1, k: ["literacy", "poverty"] }, { p: "India ahead of Pakistan on several indicators", m: 1, k: ["india", "pakistan"] }, { p: "Reason: early public investment in health and education", m: 1, k: ["health", "education", "invest"] }, { p: "Reason: land reforms, rural infrastructure; liberty indicators also matter", m: 1, k: ["land", "infrastructure", "liberty"] }],
      model: "<p><b>China</b> ranks highest on HDI among the three: it has <b>higher life expectancy</b>, <b>lower infant mortality</b>, <b>higher literacy</b> and <b>lower poverty</b>. <b>India</b> is ahead of Pakistan on several indicators.</p><p><b>Reasons for China's lead:</b> (i) early <b>public investment in health and education</b> before 1978; (ii) <b>land reforms</b> and commune-built <b>rural infrastructure</b>; (iii) fast, job-creating manufacturing growth after reforms.</p><p>However, HDI does not capture <b>liberty indicators</b> such as democratic rights, on which India does well.</p>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "china", q: "A farmer sells his fixed quota to the state and the rest in the open market. This is", o: ["Commune system", "Dual pricing", "SEZ", "One-child policy"], a: 1, hint: "Two prices.", why: "<b>Dual pricing</b>." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "demo", q: "A country's population grows slowly because families may have only one child. The country is", o: ["India", "Pakistan", "China", "Bangladesh"], a: 2, hint: "1979 policy.", why: "<b>China</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "pak", q: "A country's foreign exchange depends heavily on money sent by workers in the Gulf. This describes", o: ["China", "Pakistan", "Japan", "Germany"], a: 1, hint: "Remittances.", why: "<b>Pakistan</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "china", passage: "In 1966, a Chinese doctor was sent to work and learn in a village for years.", q: "This was part of the", o: ["Great Leap Forward", "Cultural Revolution", "1978 reforms", "SEZ policy"], a: 1, hint: "1966-76.", why: "<b>Cultural Revolution</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "china", passage: "A foreign firm sets up a plant in a Chinese coastal zone with special tax benefits.", q: "This zone is", o: ["A commune", "An SEZ", "A township", "A quota"], a: 1, hint: "Special zone.", why: "<b>SEZ</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "hdi", passage: "Country A has higher life expectancy and literacy than its two neighbours, but limited political freedoms.", q: "Country A is most likely", o: ["India", "Pakistan", "China", "Nepal"], a: 2, hint: "High HDI, low liberty.", why: "<b>China</b>." }
  ],
  find: {
    mcq: [
      { s: "Villagers build steel furnaces in their backyards in 1958.", o: ["Great Leap Forward", "Cultural Revolution", "1978 reforms", "SEZ"], a: 0, c: "china", d: "E", why: "<b>GLF</b>." },
      { s: "Farmers jointly cultivate large collective farms.", o: ["Communes", "SEZs", "Dual pricing", "Remittances"], a: 0, c: "china", d: "E", why: "<b>Communes</b>." },
      { s: "Students sent to villages to learn from peasants, 1966-76.", o: ["Cultural Revolution", "GLF", "One-child policy", "1978 reforms"], a: 0, c: "china", d: "E", why: "<b>Cultural Revolution</b>." },
      { s: "All three countries adopt five year plans.", o: ["Similar development path", "Different paths", "SEZ", "Remittances"], a: 0, c: "path", d: "E", why: "<b>Similar path</b> of planning." },
      { s: "Commune land given to households as plots.", o: ["China's 1978 reforms", "GLF", "Cultural Revolution", "Pakistan's reforms"], a: 0, c: "china", d: "M", why: "<b>1978 reforms</b>." },
      { s: "Rice quota sold at state price, extra at market price.", o: ["Dual pricing", "Commune", "SEZ", "MSP"], a: 0, c: "china", d: "M", why: "<b>Dual pricing</b>." },
      { s: "Coastal zones with tax breaks for foreign firms.", o: ["SEZs", "Communes", "Townships", "Quotas"], a: 0, c: "china", d: "M", why: "<b>SEZs</b>." },
      { s: "Pakistan opens up its economy.", o: ["1988 reforms", "1978 reforms", "1991 reforms", "1958 GLF"], a: 0, c: "pak", d: "M", why: "<b>1988</b>." },
      { s: "Families limited to one child from 1979.", o: ["Slower population growth in China", "Pakistan's reforms", "India's reforms", "GLF"], a: 0, c: "demo", d: "M", why: "<b>One-child policy</b>." },
      { s: "Huge land area but fewer people per sq km.", o: ["Low density in China", "High density in India", "Remittances", "SEZ"], a: 0, c: "demo", d: "M", why: "<b>Low density, China</b>." },
      { s: "Factories drive a decade of near double-digit growth.", o: ["China's manufacturing-led growth", "India's services", "Pakistan's remittances", "Communes"], a: 0, c: "gdp", d: "C", why: "<b>China</b>." },
      { s: "IT exports lead growth after 1991.", o: ["India's services-led growth", "China's manufacturing", "Pakistan's aid", "GLF"], a: 0, c: "gdp", d: "C", why: "<b>India, services</b>." },
      { s: "Growth jumps in a year of good cotton harvest, then falls.", o: ["Pakistan's volatile agriculture", "China's SEZs", "India's IT", "One-child"], a: 0, c: "pak", d: "C", why: "<b>Pakistan</b>." },
      { s: "Highest life expectancy and literacy of the three.", o: ["China's HDI lead", "Pakistan", "India", "None"], a: 0, c: "hdi", d: "C", why: "<b>China</b>." },
      { s: "Free elections and a free press, but lower HDI than China.", o: ["Liberty indicators (India)", "Dual pricing", "Communes", "SEZ"], a: 0, c: "hdi", d: "C", why: "<b>Liberty indicators</b>." },
      { s: "Health and literacy built before markets opened.", o: ["Base for China's reform success", "Pakistan's instability", "India's licence raj", "GLF failure"], a: 0, c: "lessons", d: "C", why: "<b>Lesson</b>: human capital first." }
    ],
    match: [
      { title: "Drag each situation onto its concept.", pairs: [["Backyard steel furnaces", "Great Leap Forward", "china"], ["Quota at state price, rest at market", "Dual pricing", "china"], ["Reforms began in 1988", "Pakistan", "pak"], ["One child per family", "Low population growth", "demo"], ["Services lead growth after 1991", "India", "gdp"], ["Highest HDI of the three", "China", "hdi"]] }
    ],
    wrong: [
      { stmts: ["China reformed in 1978.", "Pakistan reformed in 1988.", "India reformed in 1978.", "PRC formed in 1949."], a: 2, c: "path", why: "India reformed in <b>1991</b>." },
      { stmts: ["China has the lowest density.", "Pakistan has the highest population growth.", "India has the highest HDI of the three.", "Sex ratio is low in all three."], a: 2, c: "hdi", why: "<b>China</b> has the highest HDI." },
      { stmts: ["China's growth is manufacturing-led.", "India's growth is services-led.", "Pakistan relies on remittances.", "The GLF was launched in 1978."], a: 3, c: "china", why: "GLF: <b>1958</b>." }
    ],
    para: [
      { target: "Commune", c: "china", sents: ["In 1959, Zhang lived in a Chinese village.", "All families pooled their land and worked together, sharing output.", "The village had a river.", "Zhang later moved to Shanghai."], a: 1, why: "Pooled land, shared output: <b>commune</b>." },
      { target: "Remittances", c: "pak", sents: ["Ali is from Lahore.", "He works as an electrician in Dubai.", "Every month he sends money to his parents back home.", "He likes cricket."], a: 2, why: "Money sent home: <b>remittances</b>." },
      { target: "One-child policy", c: "demo", sents: ["Mei grew up in Beijing in the 1980s.", "Her parents were allowed to have only one child.", "She studied engineering.", "She now works in Shenzhen."], a: 1, why: "<b>One-child policy</b>." }
    ],
    explain: [
      { s: "A Chinese family keeps profits from its plot after paying tax.", o: ["1978 agricultural reform", "Commune", "GLF", "Cultural Revolution"], a: 0, c: "china", why: "The clue is <i>its plot</i>: <b>1978 reform</b>." },
      { s: "Frequent changes of government slow growth.", o: ["Political instability (Pakistan)", "SEZ", "Dual pricing", "One-child"], a: 0, c: "pak", why: "<b>Political instability</b>." },
      { s: "Growth figures look strong but elections are not free.", o: ["HDI vs liberty indicators", "Remittances", "Commune", "GLF"], a: 0, c: "hdi", why: "<b>Liberty indicators</b> matter too." },
      { s: "A country began planning in 1953.", o: ["China", "India", "Pakistan", "Nepal"], a: 0, c: "path", why: "<b>China</b>." }
    ]
  }
});
