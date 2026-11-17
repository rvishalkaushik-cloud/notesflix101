/* Revision Arena · Class XII Entrepreneurship · Unit 1 · Entrepreneurial Opportunity. Original cases. */
NFArena.register({
  id: "ent-u1", cls: "XII", subject: "Entrepreneurship", unit: "Unit", num: "1",
  title: "Entrepreneurial Opportunity",
  tagline: "Sensing opportunities, scanning the environment, generating and testing ideas, and checking feasibility.",
  notesLink: "../#ent-u1",
  concepts: {
    sense: { n: "Sensing entrepreneurial opportunities", s: "sense" },
    envscan: { n: "Environment scanning", s: "sense" },
    problem: { n: "Problem identification and opportunity", s: "sense" },
    ideas: { n: "Idea generation: sources", s: "ideas" },
    tech: { n: "Idea generation techniques", s: "ideas" },
    creat: { n: "Creativity and its process", s: "ideas" },
    feas: { n: "Feasibility study", s: "feas" },
    select: { n: "Idea fields and selection of an enterprise", s: "feas" }
  },
  overview: {
    text: "An <b>entrepreneurial opportunity</b> is an unmet need or problem that someone can solve profitably. Entrepreneurs <b>sense</b> such opportunities by <b>scanning the environment</b>, then <b>generate ideas</b> through creative techniques, and finally test the best idea with a <b>feasibility study</b> before starting.",
    points: [
      "Every <b>problem</b> is a potential <b>opportunity</b>.",
      "Environment scanning looks at economic, social, technological, political and legal forces.",
      "Idea techniques: <b>brainstorming, focus groups, problem inventory analysis, creative problem solving</b>.",
      "Feasibility: is it <b>technically</b>, <b>financially</b>, <b>market</b>-wise and <b>legally</b> possible?"
    ],
    map: {
      center: "Entrepreneurial Opportunity",
      branches: [
        { t: "Sensing", c: ["Environment scanning", "Problem identification", "Market assessment"] },
        { t: "Idea sources", c: ["Customers, competitors", "Distribution channels", "Government, R&D"] },
        { t: "Techniques", c: ["Brainstorming", "Focus groups", "Problem inventory", "Creativity"] },
        { t: "Feasibility", c: ["Technical", "Financial", "Market", "Legal / social"] }
      ]
    }
  },
  sections: [
    {
      id: "sense", title: "Sensing opportunities", sub: "Seeing the gap before others", icon: "🔭", color: "#4da3ff",
      quick: [
        "<b>Opportunity</b>: a favourable set of circumstances that creates a need for a new product, service or business.",
        "Entrepreneurs sense opportunities through <b>observation</b>, <b>experience</b>, <b>knowledge</b> and <b>alertness</b> to change.",
        "<b>Environment scanning</b>: a careful study of the environment to spot opportunities and threats. Factors: <b>economic</b> (income, inflation), <b>social</b> (lifestyle, values, demographics), <b>technological</b> (new inventions), <b>political and legal</b> (policies, laws), <b>competitive</b>.",
        "<b>Problem identification</b>: every problem people face (long queues, no parking, unsafe water) is a possible business idea.",
        "<b>Market assessment</b>: understanding customers, their needs, size of the market and competition.",
        "Changes create opportunities: e.g. more working couples → demand for ready-to-cook food and daycare."
      ],
      table: { cap: "Environment change → opportunity", head: ["Change", "Factor", "Opportunity"], rows: [["More working couples", "Social", "Daycare, tiffin service"], ["Cheap smartphones and data", "Technological", "Ed-tech and delivery apps"], ["Rising incomes in towns", "Economic", "Cafés, gyms, branded stores"], ["Ban on single-use plastic", "Legal", "Cloth and paper bags"]] },
      cards: [
        { t: "Ideas vs opportunities", tag: "def", b: "<p>An <b>idea</b> is just a thought. It becomes an <b>opportunity</b> only when there is real demand, customers who will pay, and a way to deliver profitably.</p>" }
      ],
      exam: ["Always name the <b>environment factor</b> that created the opportunity."]
    },
    {
      id: "ideas", title: "Generating ideas", sub: "Sources, techniques and creativity", icon: "💡", color: "#22c55e",
      quick: [
        "<b>Sources of ideas</b>: <b>consumers</b> (complaints, feedback), <b>existing products and services</b> (improve them), <b>distribution channels</b> (dealers know what sells), <b>government</b> (policies, patents, schemes), <b>research and development</b>.",
        "<b>Brainstorming</b>: a group freely suggests as many ideas as possible; no criticism at first; quantity over quality; ideas built on each other.",
        "<b>Focus groups</b>: 8–14 people guided by a moderator discuss a product or need in depth.",
        "<b>Problem inventory analysis</b>: consumers are given a list of problems in a product category and asked to link products to them, revealing gaps.",
        "<b>Creative problem solving</b>: techniques such as checklists, free association and attribute listing.",
        "<b>Creativity</b>: the ability to bring something new into existence. <b>Process</b>: (i) <b>idea germination</b> (seed of a need); (ii) <b>preparation</b> (research); (iii) <b>incubation</b> (subconscious mulling); (iv) <b>illumination</b> (the 'aha' moment); (v) <b>verification</b> (testing the idea)."
      ],
      cards: [
        { t: "Rules of brainstorming", tag: "tip", b: "<p>No criticism; wild ideas welcome; quantity matters; combine and improve others' ideas.</p>" },
        { t: "Incubation", tag: "def", b: "<p>The stage where the mind works on the problem subconsciously, often while doing something else, before the solution suddenly appears.</p>" }
      ],
      exam: ["Order of creativity: <b>germination → preparation → incubation → illumination → verification</b>."]
    },
    {
      id: "feas", title: "Feasibility and selection", sub: "Testing the idea", icon: "✅", color: "#f5b301",
      quick: [
        "<b>Feasibility study</b>: a detailed analysis of whether a business idea can be carried out successfully.",
        "<b>Technical feasibility</b>: availability of technology, machines, raw materials, skilled labour, location.",
        "<b>Financial feasibility</b>: capital needed, sources of funds, expected costs, revenue and profit, break-even.",
        "<b>Market feasibility</b>: demand, target market, competition, price customers will pay.",
        "<b>Legal / social feasibility</b>: licences, laws, environmental and social acceptability.",
        "<b>Idea fields</b> to explore: natural resources, existing products, market-driven ideas, trading, import substitution and export, services, and the needs of special groups.",
        "Selection of an enterprise depends on the entrepreneur's <b>skills and interest</b>, available <b>resources</b>, <b>market demand</b> and <b>risk</b>."
      ],
      cards: [
        { t: "Why do a feasibility study?", tag: "why", b: "<p>It saves money and effort by revealing problems before investment, helps attract investors and banks, and guides the business plan.</p>" }
      ],
      exam: ["Name the <b>type</b> of feasibility each fact tests."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "sense", q: "What is an entrepreneurial opportunity?", a: "A favourable set of circumstances creating a need for a new product, service or business." },
    { k: "Scanning", c: "envscan", q: "What is environment scanning?", a: "A careful study of the environment to identify opportunities and threats." },
    { k: "Scanning", c: "envscan", q: "Name four environment factors scanned.", a: "Economic, social, technological, political-legal (also competitive)." },
    { k: "Idea", c: "problem", q: "How can problems become opportunities?", a: "Solving a problem people face can be turned into a business." },
    { k: "Sources", c: "ideas", q: "Name four sources of ideas.", a: "Consumers, existing products, distribution channels, government (also R&D)." },
    { k: "Technique", c: "tech", q: "What is brainstorming?", a: "A group technique of freely generating many ideas without criticism." },
    { k: "Technique", c: "tech", q: "What is a focus group?", a: "8–14 people guided by a moderator discussing a product or need in depth." },
    { k: "Technique", c: "tech", q: "What is problem inventory analysis?", a: "Consumers link products to a given list of problems, revealing gaps." },
    { k: "Creativity", c: "creat", q: "Define creativity.", a: "The ability to bring something new into existence." },
    { k: "Creativity", c: "creat", q: "Name the five stages of the creative process.", a: "Idea germination, preparation, incubation, illumination, verification." },
    { k: "Creativity", c: "creat", q: "Which stage is the 'aha' moment?", a: "Illumination." },
    { k: "Feasibility", c: "feas", q: "What is a feasibility study?", a: "A detailed analysis of whether a business idea can be carried out successfully." },
    { k: "Feasibility", c: "feas", q: "What does technical feasibility check?", a: "Technology, machines, materials, skilled labour and location." },
    { k: "Feasibility", c: "feas", q: "What does financial feasibility check?", a: "Capital needed, sources, costs, revenue, profit and break-even." },
    { k: "Feasibility", c: "feas", q: "What does market feasibility check?", a: "Demand, target customers, competition and acceptable price." },
    { k: "Selection", c: "select", q: "Name three idea fields.", a: "Natural resources, existing products, services (also trading, import substitution, export)." },
    { k: "Selection", c: "select", q: "Two factors in selecting an enterprise?", a: "Entrepreneur's skills and resources (also demand, risk)." },
    { k: "Idea", c: "sense", q: "Idea vs opportunity?", a: "An idea becomes an opportunity only when there is real, profitable demand." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "The parking problem",
      text: "<p>In a busy Gurugram market, <b>Kabir</b> noticed that shoppers wasted 20 minutes finding parking every evening. He studied how many cars came, how much drivers would pay, and whether a mobile app could book slots in nearby buildings. He found that more people now own cars and use smartphones.</p>",
      qs: [
        { q: "Identify how Kabir sensed the opportunity and the environment factors involved.", m: 3, type: "Identify", c: "problem", ans: "Problem identification; market assessment; social and technological factors", keys: ["problem", "social", "technolog"], hint: "Problem, demand, two factors.",
          points: [{ p: "<b>Problem identification</b>: shoppers wasted time finding parking", m: 1, k: ["problem"] }, { p: "<b>Market assessment</b>: studied car numbers and willingness to pay", m: 1, k: ["market", "pay", "demand"] }, { p: "Environment factors: <b>social</b> (more car owners) and <b>technological</b> (smartphones)", m: 1, k: ["social", "technolog"] }],
          structure: ["Problem, assessment, factors."],
          model: "<p>Kabir sensed the opportunity through <b>problem identification</b>: shoppers wasted 20 minutes finding parking.</p><p>He then did a <b>market assessment</b>: how many cars came and how much drivers would pay.</p><p>Two <b>environment factors</b> support it: <b>social</b> (more people own cars) and <b>technological</b> (wide smartphone use makes a booking app possible).</p>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "Sticky notes on the wall",
      text: "<p>Ten members of a start-up team sat in a room for an hour. The leader asked everyone to call out any idea for a new snack, however silly. Nobody was allowed to criticise. They filled the wall with 80 sticky notes and kept combining ideas. Later, they invited 10 college students and a moderator to discuss their three favourite snacks in detail.</p>",
      qs: [
        { q: "Name the two idea-generation techniques used and state two rules of the first one.", m: 4, type: "Identify", c: "tech", ans: "Brainstorming; focus group; no criticism, quantity, combine ideas", keys: ["brainstorm", "focus group"], hint: "Group of ten; students with moderator.",
          points: [{ p: "<b>Brainstorming</b>: team calls out ideas freely", m: 1, k: ["brainstorm"] }, { p: "<b>Focus group</b>: 10 students with a moderator", m: 1, k: ["focus group"] }, { p: "Rule: no criticism", m: 1, k: ["no critic", "criticis"] }, { p: "Rule: quantity over quality / combine ideas", m: 1, k: ["quantity", "combin"] }],
          structure: ["Two techniques; two rules."],
          model: "<p>The first technique is <b>brainstorming</b>: the team called out ideas freely. The second is a <b>focus group</b>: 10 students and a moderator discussed three snacks in depth.</p><p>Two rules of brainstorming seen here: (i) <b>no criticism</b> is allowed; (ii) <b>quantity</b> of ideas matters, and ideas are <b>combined</b> and improved.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "The idea in the shower",
      text: "<p><b>Meera</b> wanted a better school bag for children with back pain. She read about posture and materials for weeks, then set the problem aside. One morning, while in the shower, the idea of a bag with wheels that converts into a backpack struck her. She made a sample and tested it with 20 students.</p>",
      qs: [
        { q: "Identify the stages of the creative process in the case, in order.", m: 5, type: "Sequence", c: "creat", ans: "Germination, preparation, incubation, illumination, verification", keys: ["germination", "preparation", "incubation", "illumination", "verification"], hint: "Five stages.",
          points: [{ p: "<b>Idea germination</b>: wanted a better bag for back pain", m: 1, k: ["germinat"] }, { p: "<b>Preparation</b>: read about posture and materials", m: 1, k: ["preparat"] }, { p: "<b>Incubation</b>: set the problem aside", m: 1, k: ["incubat"] }, { p: "<b>Illumination</b>: idea struck in the shower", m: 1, k: ["illuminat"] }, { p: "<b>Verification</b>: tested a sample with 20 students", m: 1, k: ["verificat", "test"] }],
          structure: ["Stage + quoted line, five times."],
          model: "<p>(i) <b>Idea germination:</b> she wanted a better bag for children with back pain.</p><p>(ii) <b>Preparation:</b> she read about posture and materials for weeks.</p><p>(iii) <b>Incubation:</b> she set the problem aside.</p><p>(iv) <b>Illumination:</b> the idea struck her in the shower.</p><p>(v) <b>Verification:</b> she made a sample and tested it with 20 students.</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "Will the juice bar work?",
      text: "<p><b>Tanya</b> plans a cold-pressed juice bar near a college. She checks that a cold-press machine and fresh fruit suppliers are available nearby. She calculates that she needs ₹6 lakh and will break even in 14 months. A survey shows 300 students would buy juice at ₹80. She also confirms an FSSAI licence and a shop licence are required and obtainable.</p>",
      qs: [
        { q: "Identify the types of feasibility Tanya tested and explain why a feasibility study is important.", m: 6, type: "Classify and explain", c: "feas", ans: "Technical, financial, market, legal; saves losses, attracts funds, guides plan", keys: ["technical", "financial", "market", "legal"], hint: "Machines, money, survey, licences.",
          points: [{ p: "<b>Technical</b>: machine and fruit suppliers available", m: 1, k: ["technical"] }, { p: "<b>Financial</b>: ₹6 lakh, break-even in 14 months", m: 1, k: ["financial"] }, { p: "<b>Market</b>: 300 students at ₹80", m: 1, k: ["market"] }, { p: "<b>Legal</b>: FSSAI and shop licences", m: 1, k: ["legal"] }, { p: "Importance: reveals problems before investing, avoids losses", m: 1, k: ["loss", "problem", "before"] }, { p: "Importance: helps raise funds and prepare the business plan", m: 1, k: ["fund", "investor", "bank", "plan"] }],
          structure: ["Four types with evidence; two reasons."],
          model: "<p>(i) <b>Technical feasibility:</b> a cold-press machine and fruit suppliers are available nearby.</p><p>(ii) <b>Financial feasibility:</b> she needs ₹6 lakh and breaks even in 14 months.</p><p>(iii) <b>Market feasibility:</b> 300 students would buy juice at ₹80.</p><p>(iv) <b>Legal feasibility:</b> FSSAI and shop licences are required and obtainable.</p><p><b>Importance:</b> a feasibility study reveals problems <b>before money is invested</b>, avoiding losses, and its findings help <b>convince banks and investors</b> and form the base of the business plan.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "From complaint to company",
      text: "<p>A tyre dealer told <b>Ravi</b> that customers often asked for puncture-proof cycle tyres, but none were sold in India. Ravi read a government patent database and found an expired foreign patent for such tyres. He also listened to complaints on cycling forums.</p>",
      qs: [
        { q: "Identify three sources of ideas in the case.", m: 3, type: "Identify", c: "ideas", ans: "Distribution channels; government (patents); consumers", keys: ["distribution", "government", "consumer"], hint: "Dealer, patents, forums.",
          points: [{ p: "<b>Distribution channels</b>: the tyre dealer", m: 1, k: ["distribution", "dealer"] }, { p: "<b>Government</b>: patent database", m: 1, k: ["government", "patent"] }, { p: "<b>Consumers</b>: complaints on cycling forums", m: 1, k: ["consumer", "customer"] }],
          structure: ["Source + case line, three times."],
          model: "<p>(i) <b>Distribution channels:</b> the tyre dealer reported customers' requests.</p><p>(ii) <b>Government:</b> the patent database revealed an expired patent.</p><p>(iii) <b>Consumers:</b> complaints on cycling forums.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "tech", q: "A group technique that generates many ideas without criticism is:", o: ["Focus group", "Brainstorming", "Feasibility study", "Market survey"], a: 1, hint: "Storm of ideas.", why: "<b>Brainstorming</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "creat", q: "The 'aha' stage of creativity is:", o: ["Preparation", "Incubation", "Illumination", "Verification"], a: 2, hint: "Light bulb.", why: "<b>Illumination</b>." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "envscan", q: "A rise in working couples is a change in the:", o: ["Technological environment", "Social environment", "Legal environment", "Political environment"], a: 1, hint: "Lifestyle.", why: "<b>Social</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "feas", q: "Checking whether raw materials and machines are available is:", o: ["Market feasibility", "Financial feasibility", "Technical feasibility", "Legal feasibility"], a: 2, hint: "Can we make it?", why: "<b>Technical feasibility</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "tech", q: "8–14 people guided by a moderator discuss a product. This is a:", o: ["Brainstorm", "Focus group", "Board meeting", "Survey"], a: 1, hint: "Moderator.", why: "<b>Focus group</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "ideas", q: "Dealers telling a firm what customers ask for is idea source:", o: ["Government", "Distribution channels", "R&D", "Competitors"], a: 1, hint: "Middlemen.", why: "<b>Distribution channels</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "creat", q: "The stage after preparation in the creative process is:", o: ["Germination", "Incubation", "Illumination", "Verification"], a: 1, hint: "Subconscious.", why: "<b>Incubation</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "tech", q: "Consumers are given a list of problems and asked which products have them. This is:", o: ["Problem inventory analysis", "Brainstorming", "Feasibility", "Focus group"], a: 0, hint: "List of problems.", why: "<b>Problem inventory analysis</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "problem", q: "Every problem can be a business opportunity.", r: "People are willing to pay for solutions to their problems.", a: 0, hint: "Demand.", why: "Both true; R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "tech", q: "Criticism is encouraged during brainstorming.", r: "Brainstorming aims at a large number of ideas.", a: 3, hint: "Rule.", why: "A false; R true." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "feas", q: "A feasibility study is done before starting a business.", r: "It helps avoid losses by revealing problems early.", a: 0, hint: "Purpose.", why: "Both true; R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "sense", q: "Every idea is an opportunity.", a: false, hint: "Demand needed.", why: "False." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "creat", q: "Verification is the last stage of the creative process.", a: true, hint: "Testing.", why: "True." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "feas", q: "Break-even analysis is part of financial feasibility.", a: true, hint: "Money.", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "feas", q: "Match the check with the type of feasibility.", pairs: [["Machines available?", "Technical"], ["Enough capital and profit?", "Financial"], ["Will customers buy?", "Market"], ["Licence obtainable?", "Legal"]], hint: "Four types.", why: "Each check is one type." },
    { id: "q16", t: "match", d: "M", m: 4, c: "envscan", q: "Match the change with the environment factor.", pairs: [["Cheap internet data", "Technological"], ["Rising incomes", "Economic"], ["Ban on plastic bags", "Legal"], ["Health-conscious lifestyle", "Social"]], hint: "Four factors.", why: "Each change is one factor." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "creat", q: "The first stage of the creative process is idea ______.", acc: ["germination"], hint: "Seed.", why: "Germination." },
    { id: "q18", t: "fill", d: "M", m: 1, c: "envscan", q: "A careful study of the environment for opportunities and threats is environment ______.", acc: ["scanning"], hint: "Like a scanner.", why: "Scanning." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "feas", q: "A detailed study of whether an idea can work is a ______ study.", acc: ["feasibility"], hint: "Possible?", why: "Feasibility." },
    { id: "q20", t: "short", d: "E", m: 1, c: "ideas", q: "Name one source of business ideas.", acc: ["consumers", "customers", "existing products", "distribution channels", "government", "research and development", "r&d"], hint: "Who tells you?", why: "Consumers, existing products, distribution channels, government, R&D." },
    { id: "q21", t: "short", d: "M", m: 1, c: "creat", q: "Name the creative stage in which the mind works on a problem subconsciously.", acc: ["incubation"], hint: "Like an egg.", why: "Incubation." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "envscan", q: "Explain how changes in the environment create opportunities, with three examples.", hint: "Social, economic, technological.", why: "",
      points: [{ p: "Social change example (working couples → daycare)", m: 1, k: ["social", "daycare", "working"] }, { p: "Technological change example (smartphones → apps)", m: 1, k: ["technolog", "app", "smartphone"] }, { p: "Economic or legal change example", m: 1, k: ["economic", "income", "legal", "law"] }],
      model: "<p>(i) <b>Social:</b> more working couples created demand for daycare and ready-to-cook food.</p><p>(ii) <b>Technological:</b> cheap smartphones and data created opportunities for delivery and ed-tech apps.</p><p>(iii) <b>Legal:</b> the ban on single-use plastic created demand for cloth and paper bags.</p>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "tech", q: "Explain brainstorming and state two of its rules.", hint: "Group, many ideas.", why: "",
      points: [{ p: "Meaning: group technique for many ideas", m: 1, k: ["group", "ideas"] }, { p: "Rule: no criticism", m: 1, k: ["critic"] }, { p: "Rule: quantity / wild ideas welcome / combine ideas", m: 1, k: ["quantity", "wild", "combin"] }],
      model: "<p><b>Brainstorming</b> is a group technique in which members freely suggest as many ideas as possible on a problem.</p><p>Rules: (i) <b>no criticism</b> of any idea during the session; (ii) <b>quantity</b> is wanted and wild ideas are welcome; ideas may be combined and improved.</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "creat", q: "Explain the stages of the creative process.", hint: "Five stages.", why: "",
      points: [{ p: "Idea germination", m: 1, k: ["germinat"] }, { p: "Preparation", m: 1, k: ["preparat"] }, { p: "Incubation and illumination", m: 1, k: ["incubat", "illuminat"] }, { p: "Verification", m: 1, k: ["verificat"] }],
      model: "<p>(i) <b>Idea germination:</b> the seed of an idea from a need or interest.</p><p>(ii) <b>Preparation:</b> research and gathering of information.</p><p>(iii) <b>Incubation:</b> the subconscious works on the problem; then <b>illumination</b>, when the solution suddenly appears.</p><p>(iv) <b>Verification:</b> the idea is tested and refined.</p>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "feas", q: "Explain four types of feasibility an entrepreneur should test.", hint: "Technical, financial, market, legal.", why: "",
      points: [{ p: "Technical", m: 1, k: ["technical"] }, { p: "Financial", m: 1, k: ["financial"] }, { p: "Market", m: 1, k: ["market"] }, { p: "Legal / social", m: 1, k: ["legal", "social"] }],
      model: "<p>(i) <b>Technical:</b> is the technology, machinery, raw material, skilled labour and location available?</p><p>(ii) <b>Financial:</b> how much capital is needed, from where, and will it earn a profit?</p><p>(iii) <b>Market:</b> is there enough demand at a profitable price, and what is the competition?</p><p>(iv) <b>Legal and social:</b> can licences be obtained, and is the project acceptable to society and the environment?</p>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "ideas", q: "Explain the sources of ideas and two techniques of generating ideas.", hint: "Sources + brainstorming, focus group.", why: "",
      points: [{ p: "Consumers", m: 1, k: ["consumer", "customer"] }, { p: "Existing products and services", m: 1, k: ["existing"] }, { p: "Distribution channels", m: 1, k: ["distribution"] }, { p: "Government / R&D", m: 1, k: ["government", "research"] }, { p: "Brainstorming", m: 1, k: ["brainstorm"] }, { p: "Focus groups / problem inventory analysis", m: 1, k: ["focus", "problem inventory"] }],
      model: "<p><b>Sources:</b> (i) <b>consumers</b>: their complaints and feedback; (ii) <b>existing products and services</b>: improving them; (iii) <b>distribution channels</b>: dealers know what customers want; (iv) <b>government and R&D</b>: patents, policies and research.</p><p><b>Techniques:</b> (i) <b>brainstorming</b>: a group freely suggests ideas without criticism; (ii) <b>focus groups</b>: a moderator leads 8–14 people in an in-depth discussion of a product or need.</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "sense", q: "How does an entrepreneur sense opportunities? Explain with reference to environment scanning.", hint: "Observation, problems, factors.", why: "",
      points: [{ p: "Observation and alertness to change", m: 1, k: ["observ", "alert"] }, { p: "Problem identification", m: 1, k: ["problem"] }, { p: "Market assessment", m: 1, k: ["market"] }, { p: "Environment scanning meaning", m: 1, k: ["scanning"] }, { p: "Factors: economic, social", m: 1, k: ["economic", "social"] }, { p: "Factors: technological, political-legal, competitive", m: 1, k: ["technolog", "legal", "political"] }],
      model: "<p>An entrepreneur senses opportunities through <b>observation</b> and <b>alertness to change</b>, by <b>identifying problems</b> people face, and through <b>market assessment</b> of needs and competition.</p><p><b>Environment scanning</b> is a careful study of the environment to identify opportunities and threats. It covers <b>economic</b> factors (income, inflation), <b>social</b> factors (lifestyle, values), <b>technological</b> factors (new inventions), <b>political-legal</b> factors (policies, laws) and the <b>competitive</b> situation.</p>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "feas", q: "Before opening a bakery, Rohit surveys 200 households to see how many would buy his cakes. He is testing", o: ["Technical feasibility", "Market feasibility", "Legal feasibility", "Creativity"], a: 1, hint: "Demand.", why: "<b>Market feasibility</b>." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "creat", q: "After weeks of research, Asha stops thinking about her design problem and goes on a holiday. She is in the", o: ["Illumination stage", "Incubation stage", "Verification stage", "Preparation stage"], a: 1, hint: "Subconscious.", why: "<b>Incubation</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "envscan", q: "Government subsidies for electric vehicles open a market for EV charging stations. The factor is", o: ["Social", "Political-legal", "Technological only", "Competitive"], a: 1, hint: "Policy.", why: "<b>Political-legal</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "problem", passage: "Students complained there was no affordable photocopy shop near the hostel; Vikas opened one.", q: "His idea came from", o: ["Problem identification", "Government", "R&D", "Competitors"], a: 0, hint: "Complaint.", why: "<b>Problem identification</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "feas", passage: "Neha calculates she needs ₹4 lakh and will recover it in 18 months.", q: "This is", o: ["Financial feasibility", "Market feasibility", "Technical feasibility", "Brainstorming"], a: 0, hint: "Money.", why: "<b>Financial feasibility</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "creat", passage: "Arun builds a prototype of his folding chair and asks 30 users to try it.", q: "This is the stage of", o: ["Germination", "Incubation", "Illumination", "Verification"], a: 3, hint: "Testing.", why: "<b>Verification</b>." }
  ],
  find: {
    mcq: [
      { s: "Long queues at a clinic inspire an appointment app.", o: ["Problem identification", "Verification", "Legal feasibility", "Incubation"], a: 0, c: "problem", d: "E", why: "<b>Problem identification</b>." },
      { s: "Studying income, lifestyle, technology and laws before starting.", o: ["Environment scanning", "Brainstorming", "Verification", "Focus group"], a: 0, c: "envscan", d: "E", why: "<b>Environment scanning</b>." },
      { s: "Team calls out 50 ideas in 30 minutes; no criticism.", o: ["Brainstorming", "Focus group", "Feasibility", "Market survey"], a: 0, c: "tech", d: "E", why: "<b>Brainstorming</b>." },
      { s: "Customers' complaints about a product give a new idea.", o: ["Consumers as source", "Government", "R&D", "Competitors"], a: 0, c: "ideas", d: "E", why: "<b>Consumers</b>." },
      { s: "A moderator leads 10 mothers in a discussion of baby food.", o: ["Focus group", "Brainstorming", "Problem inventory", "Verification"], a: 0, c: "tech", d: "M", why: "<b>Focus group</b>." },
      { s: "Shoppers tick which products 'leak', 'break' or 'go stale'.", o: ["Problem inventory analysis", "Brainstorming", "Focus group", "Feasibility"], a: 0, c: "tech", d: "M", why: "<b>Problem inventory</b>." },
      { s: "Dealer says customers keep asking for a lighter helmet.", o: ["Distribution channel as source", "Government", "R&D", "Competitor"], a: 0, c: "ideas", d: "M", why: "<b>Distribution channels</b>." },
      { s: "Reading a patent database for expired patents.", o: ["Government as source", "Consumers", "Focus group", "Incubation"], a: 0, c: "ideas", d: "M", why: "<b>Government</b>." },
      { s: "Weeks of reading about solar cookers.", o: ["Preparation", "Incubation", "Illumination", "Verification"], a: 0, c: "creat", d: "M", why: "<b>Preparation</b>." },
      { s: "The answer suddenly strikes while jogging.", o: ["Illumination", "Preparation", "Germination", "Verification"], a: 0, c: "creat", d: "M", why: "<b>Illumination</b>." },
      { s: "Leaving the problem alone for a while.", o: ["Incubation", "Illumination", "Verification", "Preparation"], a: 0, c: "creat", d: "C", why: "<b>Incubation</b>." },
      { s: "Are cold-storage machines available locally?", o: ["Technical feasibility", "Market feasibility", "Financial feasibility", "Legal feasibility"], a: 0, c: "feas", d: "C", why: "<b>Technical</b>." },
      { s: "Will 500 customers pay ₹200 a month?", o: ["Market feasibility", "Technical", "Legal", "Incubation"], a: 0, c: "feas", d: "C", why: "<b>Market</b>." },
      { s: "Can a pollution clearance be obtained?", o: ["Legal feasibility", "Market feasibility", "Technical", "Financial"], a: 0, c: "feas", d: "C", why: "<b>Legal</b>." },
      { s: "Choosing a dairy because the family owns cattle and land.", o: ["Selection based on resources", "Brainstorming", "Verification", "Focus group"], a: 0, c: "select", d: "C", why: "<b>Selection</b> by resources." },
      { s: "A thought becomes viable only when people will pay for it.", o: ["Idea vs opportunity", "Creativity", "Incubation", "Scanning"], a: 0, c: "sense", d: "C", why: "<b>Idea vs opportunity</b>." }
    ],
    match: [
      { title: "Drag each situation onto its concept.", pairs: [["Spotting a gap in long clinic queues", "Problem identification", "problem"], ["Studying lifestyle and laws", "Environment scanning", "envscan"], ["Many ideas, no criticism", "Brainstorming", "tech"], ["Solution strikes in the shower", "Illumination", "creat"], ["Calculating break-even", "Financial feasibility", "feas"], ["Dealer reports customer requests", "Idea source: distribution channels", "ideas"]] }
    ],
    wrong: [
      { stmts: ["Brainstorming encourages many ideas.", "Criticism is allowed in brainstorming.", "Focus groups have a moderator.", "Problem inventory uses a list of problems."], a: 1, c: "tech", why: "<b>No criticism</b> in brainstorming." },
      { stmts: ["Germination is the first stage.", "Illumination is the 'aha' moment.", "Incubation comes after illumination.", "Verification tests the idea."], a: 2, c: "creat", why: "Incubation comes <b>before</b> illumination." },
      { stmts: ["Technical feasibility checks machines.", "Market feasibility checks demand.", "Financial feasibility checks licences.", "Legal feasibility checks laws."], a: 2, c: "feas", why: "Licences are <b>legal</b> feasibility." }
    ],
    para: [
      { target: "Environment scanning", c: "envscan", sents: ["Pooja wanted to start a business in Jaipur.", "She studied rising incomes, changing food habits and new food-safety laws.", "She liked cooking.", "Her father was a teacher."], a: 1, why: "Studying economic, social, legal forces: <b>scanning</b>." },
      { target: "Verification", c: "creat", sents: ["Raj thought of a solar lamp for village shops.", "He researched batteries.", "He built a model and tested it in five shops for a month.", "He then applied for a loan."], a: 2, why: "Testing the model: <b>verification</b>." },
      { target: "Market feasibility", c: "feas", sents: ["Simran plans a dance academy.", "She found a hall on rent.", "A survey showed 120 children would join at ₹1,500 a month.", "She bought speakers."], a: 2, why: "Demand survey: <b>market feasibility</b>." }
    ],
    explain: [
      { s: "More people working from home creates demand for ergonomic chairs.", o: ["Social change creating an opportunity", "Legal feasibility", "Incubation", "Focus group"], a: 0, c: "sense", why: "The clue is a <i>lifestyle shift</i>: <b>social environment</b>." },
      { s: "Mothers discuss baby-food needs with a moderator.", o: ["Focus group", "Brainstorming", "Problem inventory", "Verification"], a: 0, c: "tech", why: "<b>Focus group</b>." },
      { s: "An idea for a bag suddenly comes while cooking.", o: ["Illumination", "Preparation", "Germination", "Verification"], a: 0, c: "creat", why: "<b>Illumination</b>." },
      { s: "Checking if a city allows food trucks.", o: ["Legal feasibility", "Market", "Technical", "Financial"], a: 0, c: "feas", why: "<b>Legal</b>." }
    ]
  }
});
