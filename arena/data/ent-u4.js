/* Revision Arena · Class XII Entrepreneurship · Unit 4 · Enterprise Growth Strategies. Original cases; figures recomputed. */
NFArena.register({
  id: "ent-u4", cls: "XII", subject: "Entrepreneurship", unit: "Unit", num: "4",
  title: "Enterprise Growth Strategies",
  tagline: "Growing by franchising, by adding value along the value chain, and by mergers and acquisitions.",
  notesLink: "../#ent-u4",
  concepts: {
    growth: { n: "Need for growth and expansion routes", s: "grow" },
    fran: { n: "Franchising: meaning and working", s: "grow" },
    franad: { n: "Franchising: merits and limitations", s: "grow" },
    va: { n: "Value addition", s: "value" },
    chain: { n: "Porter's value chain", s: "value" },
    merger: { n: "Mergers and their types", s: "join" },
    acq: { n: "Acquisitions and takeovers", s: "join" },
    mareason: { n: "Reasons and risks of M&A", s: "join" }
  },
  overview: {
    text: "Once a business works, it must <b>grow</b> or risk falling behind. It can grow <b>internally</b> (more products, outlets, markets) or <b>externally</b>. Three key strategies are <b>franchising</b> (others run outlets under your brand), <b>value addition</b> (making the product worth more along the <b>value chain</b>), and <b>mergers and acquisitions</b> (joining forces with or buying other firms).",
    points: [
      "Franchisor gets an <b>initial fee</b> and <b>royalty</b> (often a % of sales) from franchisees.",
      "Value added = <b>Value of output − Value of inputs</b>.",
      "Porter's value chain: <b>5 primary</b> and <b>4 support</b> activities.",
      "Merger types: <b>horizontal, vertical, conglomerate</b> (and concentric)."
    ],
    map: {
      center: "Growth Strategies",
      branches: [
        { t: "Franchising", c: ["Franchisor, franchisee", "Fee and royalty", "Merits and limits"] },
        { t: "Value addition", c: ["Output − inputs", "Branding, processing", "Packaging, service"] },
        { t: "Value chain", c: ["Primary activities", "Support activities"] },
        { t: "M&A", c: ["Horizontal, vertical", "Conglomerate", "Synergy and risks"] }
      ]
    }
  },
  sections: [
    {
      id: "grow", title: "Growth and franchising", sub: "Grow or die", icon: "📈", color: "#4da3ff",
      quick: [
        "<b>Why grow</b>: economies of scale, larger market share, survival against competition, use of spare capacity, more profit, prestige.",
        "<b>Internal growth</b>: expansion through own resources: new products, new markets, more outlets, more capacity. <b>External growth</b>: franchising, mergers, acquisitions, joint ventures.",
        "<b>Franchising</b>: an arrangement in which the <b>franchisor</b> (owner of a proven brand and system) grants the <b>franchisee</b> the right to run a business under its name, in return for an <b>initial franchise fee</b> and continuing <b>royalties</b>.",
        "The franchisor provides the brand, products, training, operating manual, marketing support. The franchisee invests in the outlet, runs it, and follows the franchisor's standards.",
        "<b>Merits for franchisor</b>: fast expansion with others' capital; motivated owner-managers; royalty income. <b>For franchisee</b>: proven brand, training and support, lower risk.",
        "<b>Limitations</b>: franchisor loses some control and its reputation depends on franchisees; franchisee pays continuing fees and has limited freedom; disputes over territory and terms."
      ],
      table: { cap: "Franchisor vs franchisee", head: ["Basis", "Franchisor", "Franchisee"], rows: [["Owns", "Brand and system", "Outlet"], ["Gives", "Training, products, support", "Fee, royalty, investment"], ["Gets", "Fee, royalty, fast growth", "Proven model, lower risk"]] },
      cards: [
        { t: "Royalty example", tag: "eg", b: "<p>A franchisee's monthly sales are ₹6,00,000 and the royalty is 5%. Royalty = <b>₹30,000</b> a month to the franchisor.</p>" }
      ],
      exam: ["Franchisor = brand owner; franchisee = outlet owner."]
    },
    {
      id: "value", title: "Value addition and the value chain", sub: "Making it worth more", icon: "⚙️", color: "#22c55e",
      quick: [
        "<b>Value addition</b>: the increase in the worth of a product at each stage of production or service. Value added = value of output − value of inputs.",
        "Ways to add value: <b>processing</b> (milk → cheese), <b>branding</b>, <b>packaging</b>, <b>quality improvement</b>, <b>after-sales service</b>, convenience, faster delivery, customisation.",
        "<b>Porter's value chain</b> (Michael Porter): the set of activities through which a firm creates value. <b>Primary activities</b>: (i) <b>inbound logistics</b> (receiving and storing inputs); (ii) <b>operations</b> (converting inputs into products); (iii) <b>outbound logistics</b> (storing and distributing finished goods); (iv) <b>marketing and sales</b>; (v) <b>service</b> (after-sales support).",
        "<b>Support activities</b>: (i) <b>firm infrastructure</b> (management, finance, legal); (ii) <b>human resource management</b>; (iii) <b>technology development</b>; (iv) <b>procurement</b> (buying inputs).",
        "Margin: the difference between the value created and the cost of the activities."
      ],
      table: { cap: "Value chain at a bakery", head: ["Activity", "Type", "Example"], rows: [["Receiving flour and butter", "Primary: inbound logistics", "Store in cold room"], ["Baking cakes", "Primary: operations", "Oven, decorating"], ["Delivery vans", "Primary: outbound logistics", "Home delivery"], ["Instagram offers", "Primary: marketing and sales", "Festival discount"], ["Replacing a damaged cake", "Primary: service", "Customer care"], ["Training bakers", "Support: HRM", "Skill workshop"], ["Buying ovens", "Support: procurement", "Tender"], ["New recipe software", "Support: technology", "App"]] },
      cards: [
        { t: "Worked example", tag: "eg", b: "<p>A dairy buys milk worth ₹40,000, and makes paneer sold for ₹70,000. Value added = 70,000 − 40,000 = <b>₹30,000</b>.</p>" }
      ],
      exam: ["Inbound = <b>inputs in</b>; outbound = <b>finished goods out</b>."]
    },
    {
      id: "join", title: "Mergers and acquisitions", sub: "Join forces", icon: "🤝", color: "#f5b301",
      quick: [
        "<b>Merger</b>: two or more firms combine to form one. <b>Absorption</b>: one company absorbs another (A + B = A). <b>Consolidation (amalgamation)</b>: both dissolve to form a new company (A + B = C).",
        "<b>Types</b>: (i) <b>horizontal</b>: firms in the same line of business at the same stage (two cement makers); (ii) <b>vertical</b>: firms at different stages of the same supply chain (a car maker and a tyre maker); (iii) <b>conglomerate</b>: firms in unrelated businesses (a hotel chain and a steel firm); (iv) <b>concentric</b>: related but not identical products (a bank and an insurance firm).",
        "<b>Acquisition (takeover)</b>: one company buys a controlling stake in another, which may keep its identity. A <b>friendly</b> takeover has the target's consent; a <b>hostile</b> takeover does not.",
        "<b>Reasons</b>: <b>synergy</b> (combined value greater than the sum: 2 + 2 = 5), economies of scale, wider market, new technology, reduced competition, diversification of risk, tax benefits.",
        "<b>Risks</b>: overpaying ('winner's curse'), clash of cultures, integration problems, job losses, debt burden. Careful <b>due diligence</b> (checking the target's finances and legal position) reduces risk."
      ],
      cards: [
        { t: "Synergy", tag: "def", b: "<p>When two firms together are worth more than separately: shared distribution, cheaper bulk buying, combined research.</p>" }
      ],
      exam: ["Car maker buys a tyre maker → <b>vertical</b> merger."]
    }
  ],
  flashcards: [
    { k: "Growth", c: "growth", q: "Internal vs external growth?", a: "Internal: own resources (new products, outlets); external: franchising, mergers, acquisitions." },
    { k: "Franchise", c: "fran", q: "Define franchising.", a: "A franchisor grants a franchisee the right to run a business under its brand for a fee and royalty." },
    { k: "Franchise", c: "fran", q: "Who is the franchisor?", a: "The owner of the brand and business system." },
    { k: "Franchise", c: "fran", q: "Name the two payments by a franchisee.", a: "Initial franchise fee and continuing royalty." },
    { k: "Franchise", c: "franad", q: "One merit of franchising for the franchisor?", a: "Fast expansion using franchisees' capital." },
    { k: "Franchise", c: "franad", q: "One limitation for the franchisee?", a: "Continuing fees and limited freedom." },
    { k: "Value", c: "va", q: "Formula for value added?", a: "Value of output − Value of inputs." },
    { k: "Value", c: "va", q: "Three ways to add value?", a: "Processing, branding, packaging (also service, quality)." },
    { k: "Chain", c: "chain", q: "Who gave the value chain model?", a: "Michael Porter." },
    { k: "Chain", c: "chain", q: "Name the five primary activities.", a: "Inbound logistics, operations, outbound logistics, marketing and sales, service." },
    { k: "Chain", c: "chain", q: "Name the four support activities.", a: "Firm infrastructure, HRM, technology development, procurement." },
    { k: "Merger", c: "merger", q: "Absorption vs consolidation?", a: "Absorption: A + B = A. Consolidation: A + B = C (new company)." },
    { k: "Merger", c: "merger", q: "What is a horizontal merger?", a: "A merger of firms in the same line of business at the same stage." },
    { k: "Merger", c: "merger", q: "What is a vertical merger?", a: "A merger of firms at different stages of the same supply chain." },
    { k: "Merger", c: "merger", q: "What is a conglomerate merger?", a: "A merger of firms in unrelated businesses." },
    { k: "Acq", c: "acq", q: "Friendly vs hostile takeover?", a: "Friendly: with the target's consent; hostile: without it." },
    { k: "M&A", c: "mareason", q: "What is synergy?", a: "Combined value greater than the sum of the parts (2 + 2 = 5)." },
    { k: "M&A", c: "mareason", q: "What is due diligence?", a: "A careful check of the target's finances and legal position before buying." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Momo Mantra goes national",
      text: "<p><b>Momo Mantra</b>, a hit momo chain in Delhi, lets entrepreneurs in other cities open outlets under its name. Each pays ₹5 lakh upfront and 6% of monthly sales. Momo Mantra trains their staff, supplies the secret sauces and gives a recipe manual.</p>",
      qs: [
        { q: "Identify the growth strategy, the two parties, and the two payments.", m: 3, type: "Identify", c: "fran", ans: "Franchising; Momo Mantra franchisor, entrepreneurs franchisees; fee ₹5 lakh, royalty 6%", keys: ["franchis", "royalty", "fee"], hint: "Brand owner vs outlet owner.",
          points: [{ p: "Strategy: <b>franchising</b>", m: 1, k: ["franchis"] }, { p: "Franchisor: Momo Mantra; franchisees: outlet entrepreneurs", m: 1, k: ["franchisor", "franchisee"] }, { p: "Payments: <b>initial fee</b> ₹5 lakh and <b>royalty</b> 6% of sales", m: 1, k: ["fee", "royalty"] }],
          structure: ["Strategy, parties, payments."],
          model: "<p>The strategy is <b>franchising</b>.</p><p><b>Momo Mantra</b> is the <b>franchisor</b>; the entrepreneurs who open outlets are the <b>franchisees</b>.</p><p>They pay an <b>initial franchise fee</b> of ₹5 lakh and a continuing <b>royalty</b> of 6% of monthly sales.</p>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "The royalty cheque",
      text: "<p>A Momo Mantra franchisee in Jaipur had monthly sales of ₹4,50,000 in October. Royalty is 6% of sales. His other monthly costs (rent, staff, ingredients) total ₹3,40,000.</p>",
      qs: [
        { q: "Calculate the royalty and the franchisee's monthly profit. State one merit of franchising for him.", m: 3, type: "Calculate", c: "franad", ans: "Royalty ₹27,000; profit ₹83,000; proven brand", keys: ["27000", "27,000", "83000", "83,000"], hint: "6% of 4,50,000.",
          points: [{ p: "Royalty = 6% × 4,50,000 = <b>₹27,000</b>", m: 1, k: ["27000", "27,000"] }, { p: "Profit = 4,50,000 − 3,40,000 − 27,000 = <b>₹83,000</b>", m: 1, k: ["83000", "83,000"] }, { p: "Merit: proven brand / training and support / lower risk", m: 1, k: ["brand", "training", "support", "risk"] }],
          structure: ["Royalty, profit, merit."],
          model: "<p>Royalty = 6% × ₹4,50,000 = <b>₹27,000</b>.</p><p>Profit = 4,50,000 − 3,40,000 − 27,000 = <b>₹83,000</b>.</p><p>Merit: he runs a business with a <b>proven brand</b>, training and supply support, so his <b>risk is lower</b> than starting from scratch.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "From milk to cheese",
      text: "<p><b>Pahadi Dairy</b> buys milk from farmers for ₹1,20,000 a month. Instead of selling raw milk, it now makes cheese, packs it in branded wedges with a recipe card, and sells it online for ₹2,10,000. Processing and packing cost ₹35,000.</p>",
      qs: [
        { q: "Calculate the value added and identify three ways in which value was added.", m: 4, type: "Calculate and identify", c: "va", ans: "Value added ₹90,000 (gross) — ₹55,000 after processing cost; processing, branding, packaging", keys: ["90000", "90,000", "processing", "brand"], hint: "Output − milk.",
          points: [{ p: "Value added = 2,10,000 − 1,20,000 = <b>₹90,000</b>", m: 1, k: ["90000", "90,000"] }, { p: "After processing and packing costs: 90,000 − 35,000 = ₹55,000", m: 1, k: ["55000", "55,000"] }, { p: "Ways: <b>processing</b> (milk into cheese)", m: 1, k: ["process"] }, { p: "Ways: <b>branding and packaging</b> (wedges, recipe card)", m: 1, k: ["brand", "packag"] }],
          structure: ["Value added, net gain, ways."],
          model: "<p>Value added = Value of output − Value of milk = 2,10,000 − 1,20,000 = <b>₹90,000</b>.</p><p>After the ₹35,000 spent on processing and packing, the dairy's net gain is <b>₹55,000</b> a month.</p><p>Value was added by <b>processing</b> (milk into cheese), <b>branding</b> and <b>packaging</b> (branded wedges with a recipe card), and convenient <b>online selling</b>.</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "Mapping the value chain",
      text: "<p><b>Threadline</b>, a T-shirt maker, (a) receives and stores cotton fabric; (b) cuts, stitches and prints shirts; (c) sends shirts to warehouses and courier partners; (d) runs influencer campaigns; (e) offers free exchange within 15 days; (f) trains tailors; (g) buys fabric through annual contracts; (h) develops a 3-D design app; (i) has a finance and legal team.</p>",
      qs: [
        { q: "Classify each activity as a primary or support activity of Porter's value chain and name it.", m: 6, type: "Classify", c: "chain", ans: "(a) inbound (b) operations (c) outbound (d) marketing & sales (e) service — primary; (f) HRM (g) procurement (h) technology (i) infrastructure — support", keys: ["inbound", "operations", "outbound", "procurement"], hint: "5 primary, 4 support.",
          points: [{ p: "(a) Inbound logistics; (b) operations", m: 1, k: ["inbound", "operations"] }, { p: "(c) Outbound logistics", m: 1, k: ["outbound"] }, { p: "(d) Marketing and sales; (e) service", m: 1, k: ["marketing", "service"] }, { p: "(f) Human resource management", m: 1, k: ["human", "hrm"] }, { p: "(g) Procurement", m: 1, k: ["procurement"] }, { p: "(h) Technology development; (i) firm infrastructure", m: 1, k: ["technology", "infrastructure"] }],
          structure: ["Primary: a–e; support: f–i."],
          model: "<p><b>Primary activities:</b> (a) <b>inbound logistics</b>; (b) <b>operations</b>; (c) <b>outbound logistics</b>; (d) <b>marketing and sales</b>; (e) <b>service</b>.</p><p><b>Support activities:</b> (f) <b>human resource management</b>; (g) <b>procurement</b>; (h) <b>technology development</b>; (i) <b>firm infrastructure</b>.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Three deals",
      text: "<p>(1) <b>Sunrise Cement</b> and <b>Rockstar Cement</b> combine and form a new company, <b>SunRock Ltd</b>. (2) <b>Velocity Cars</b> buys 80% of <b>GripTyres</b>, which supplies its tyres; GripTyres keeps its name. (3) <b>Royal Hotels</b> merges into <b>Kiran Steel</b>, which continues. Kiran Steel had not checked Royal's debts and later found hidden liabilities.</p>",
      qs: [
        { q: "Classify each deal and explain one reason for and one risk of such deals.", m: 6, type: "Classify and evaluate", c: "merger", ans: "(1) horizontal consolidation (2) vertical acquisition (3) conglomerate absorption; synergy; lack of due diligence", keys: ["horizontal", "vertical", "conglomerate", "synergy"], hint: "Same line, supply chain, unrelated.",
          points: [{ p: "(1) <b>Horizontal</b> merger, by <b>consolidation</b> (A + B = C)", m: 1, k: ["horizontal", "consolidat"] }, { p: "(2) <b>Vertical</b> integration by <b>acquisition</b>", m: 1, k: ["vertical", "acqui"] }, { p: "(3) <b>Conglomerate</b> merger by <b>absorption</b> (A + B = A)", m: 1, k: ["conglomerate", "absorp"] }, { p: "Reason: synergy / economies of scale", m: 1, k: ["synergy", "scale"] }, { p: "Reason: secure supply / diversification", m: 1, k: ["supply", "diversif"] }, { p: "Risk: hidden liabilities due to no due diligence", m: 1, k: ["due diligence", "liabilit", "hidden"] }],
          structure: ["Classify three; reasons; risk."],
          model: "<p>(1) Two cement firms form SunRock Ltd: a <b>horizontal</b> merger by <b>consolidation</b> (A + B = C).</p><p>(2) A car maker buys 80% of its tyre supplier, which keeps its name: a <b>vertical</b> combination by <b>acquisition</b>.</p><p>(3) A hotel firm merges into a steel firm, which continues: a <b>conglomerate</b> merger by <b>absorption</b> (A + B = A).</p><p><b>Reasons:</b> <b>synergy</b> and economies of scale (deal 1), secure supply of inputs (deal 2), and diversification of risk (deal 3).</p><p><b>Risk:</b> without <b>due diligence</b>, Kiran Steel inherited hidden liabilities, a classic M&A pitfall.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "fran", q: "The owner of the brand in franchising is the:", o: ["Franchisee", "Franchisor", "Agent", "Retailer"], a: 1, hint: "Grants rights.", why: "<b>Franchisor</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "chain", q: "The value chain model was given by:", o: ["Philip Kotler", "Michael Porter", "Henri Fayol", "F.W. Taylor"], a: 1, hint: "Competitive advantage.", why: "<b>Michael Porter</b>." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "merger", q: "Merger of two banks is a:", o: ["Vertical merger", "Horizontal merger", "Conglomerate merger", "Joint venture"], a: 1, hint: "Same business.", why: "<b>Horizontal</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "va", q: "Inputs ₹50,000; output ₹85,000. Value added:", o: ["₹35,000", "₹50,000", "₹85,000", "₹1,35,000"], a: 0, hint: "Output − inputs.", why: "<b>₹35,000</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "chain", q: "Delivering finished goods to customers is:", o: ["Inbound logistics", "Operations", "Outbound logistics", "Procurement"], a: 2, hint: "Out.", why: "<b>Outbound logistics</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "merger", q: "A shoe maker buying a leather tannery is a:", o: ["Horizontal merger", "Vertical merger", "Conglomerate merger", "Franchise"], a: 1, hint: "Supply chain.", why: "<b>Vertical</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "chain", q: "Which is a support activity?", o: ["Operations", "Service", "Procurement", "Marketing and sales"], a: 2, hint: "Buying inputs.", why: "<b>Procurement</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "merger", q: "A + B = C describes:", o: ["Absorption", "Consolidation", "Acquisition", "Franchising"], a: 1, hint: "New company.", why: "<b>Consolidation</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "franad", q: "Franchising allows a brand to expand quickly.", r: "Franchisees invest their own capital in outlets.", a: 0, hint: "Others' money.", why: "Both true; R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "acq", q: "A hostile takeover has the consent of the target's management.", r: "In a hostile takeover the buyer approaches shareholders directly.", a: 3, hint: "Consent?", why: "A false; R true." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "mareason", q: "Mergers can create synergy.", r: "Combined firms can share distribution and buy in bulk.", a: 0, hint: "2 + 2 = 5.", why: "Both true; R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "fran", q: "The franchisee pays royalty to the franchisor.", a: true, hint: "Outlet owner pays.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "chain", q: "HRM is a primary activity in the value chain.", a: false, hint: "Support.", why: "False: <b>support</b>." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "merger", q: "A conglomerate merger combines firms in unrelated businesses.", a: true, hint: "Unrelated.", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "chain", q: "Match the activity with the value chain element.", pairs: [["Storing raw materials", "Inbound logistics"], ["Assembling products", "Operations"], ["Shipping to dealers", "Outbound logistics"], ["Repairs after sale", "Service"]], hint: "Primary activities.", why: "Each activity is one element." },
    { id: "q16", t: "match", d: "M", m: 4, c: "merger", q: "Match the deal with its type.", pairs: [["Two telecom firms merge", "Horizontal"], ["Car maker and steel supplier", "Vertical"], ["Hotel chain and textile firm", "Conglomerate"], ["Bank and insurance firm", "Concentric"]], hint: "Relationship.", why: "Each deal has one type." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "fran", q: "A continuing payment by a franchisee based on sales is called ______.", acc: ["royalty", "royalties"], hint: "Regular share.", why: "Royalty." },
    { id: "q18", t: "fill", d: "M", m: 1, c: "mareason", q: "Combined value greater than the sum of parts is called ______.", acc: ["synergy"], hint: "2 + 2 = 5.", why: "Synergy." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "acq", q: "A careful check of a target's finances before buying is due ______.", acc: ["diligence"], hint: "Careful.", why: "Diligence." },
    { id: "q20", t: "short", d: "E", m: 1, c: "chain", q: "Name one primary activity of the value chain.", acc: ["inbound logistics", "operations", "outbound logistics", "marketing and sales", "service", "marketing"], hint: "Five of them.", why: "Inbound, operations, outbound, marketing and sales, service." },
    { id: "q21", t: "short", d: "M", m: 1, c: "growth", q: "Give one reason why a business seeks to grow.", acc: ["economies of scale", "market share", "survival", "profit", "competition", "prestige"], hint: "Bigger is cheaper.", why: "Economies of scale, market share, survival, profit." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "franad", q: "State three advantages of franchising to the franchisee.", hint: "Brand, training, risk.", why: "",
      points: [{ p: "Proven brand and customer base", m: 1, k: ["brand"] }, { p: "Training and continuing support", m: 1, k: ["training", "support"] }, { p: "Lower risk of failure", m: 1, k: ["risk"] }],
      model: "<p>(i) A <b>proven brand</b> with ready customers.</p><p>(ii) <b>Training, manuals and support</b> from the franchisor.</p><p>(iii) <b>Lower risk</b> of failure than an independent start-up.</p>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "va", q: "What is value addition? Give two ways in which an enterprise adds value.", hint: "Output − input.", why: "",
      points: [{ p: "Meaning: increase in worth at each stage", m: 1, k: ["increase", "worth", "output"] }, { p: "Way: processing / quality", m: 1, k: ["process", "quality"] }, { p: "Way: branding / packaging / service", m: 1, k: ["brand", "packag", "service"] }],
      model: "<p><b>Value addition</b> is the increase in the worth of a product at each stage of production: value of output − value of inputs.</p><p>Ways: (i) <b>processing</b>, e.g. turning milk into cheese; (ii) <b>branding and packaging</b>, or better after-sales <b>service</b>.</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "merger", q: "Explain four types of mergers with examples.", hint: "Horizontal, vertical, conglomerate, concentric.", why: "",
      points: [{ p: "Horizontal with example", m: 1, k: ["horizontal"] }, { p: "Vertical with example", m: 1, k: ["vertical"] }, { p: "Conglomerate with example", m: 1, k: ["conglomerate"] }, { p: "Concentric with example", m: 1, k: ["concentric"] }],
      model: "<p>(i) <b>Horizontal:</b> same line, same stage, e.g. two cement companies.</p><p>(ii) <b>Vertical:</b> different stages of one supply chain, e.g. a car maker and a tyre maker.</p><p>(iii) <b>Conglomerate:</b> unrelated businesses, e.g. a hotel chain and a steel firm.</p><p>(iv) <b>Concentric:</b> related but different products, e.g. a bank and an insurance firm.</p>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "mareason", q: "Explain two reasons for and two risks of mergers and acquisitions.", hint: "Synergy, scale; overpaying, culture.", why: "",
      points: [{ p: "Reason: synergy", m: 1, k: ["synergy"] }, { p: "Reason: economies of scale / market / technology", m: 1, k: ["scale", "market", "technolog"] }, { p: "Risk: overpaying (winner's curse) / debt", m: 1, k: ["overpay", "winner", "debt"] }, { p: "Risk: culture clash / integration problems", m: 1, k: ["culture", "integration"] }],
      model: "<p><b>Reasons:</b> (i) <b>synergy</b>: combined firms are worth more than separately; (ii) <b>economies of scale</b>, wider markets and access to new technology.</p><p><b>Risks:</b> (i) <b>overpaying</b> for the target (winner's curse), creating debt; (ii) <b>culture clash</b> and integration problems that reduce efficiency.</p>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "chain", q: "Explain Porter's value chain with its primary and support activities.", hint: "5 + 4.", why: "",
      points: [{ p: "Meaning: activities through which a firm creates value", m: 1, k: ["activit", "value"] }, { p: "Inbound logistics and operations", m: 1, k: ["inbound", "operations"] }, { p: "Outbound logistics", m: 1, k: ["outbound"] }, { p: "Marketing and sales, service", m: 1, k: ["marketing", "service"] }, { p: "Support: infrastructure, HRM", m: 1, k: ["infrastructure", "human"] }, { p: "Support: technology development, procurement", m: 1, k: ["technology", "procurement"] }],
      model: "<p><b>Porter's value chain</b> describes the activities through which a firm creates value for customers.</p><p><b>Primary activities:</b> (i) <b>inbound logistics</b>: receiving and storing inputs; (ii) <b>operations</b>: converting inputs into products; (iii) <b>outbound logistics</b>: storing and delivering finished goods; (iv) <b>marketing and sales</b>; (v) <b>service</b>: installation, repair, support.</p><p><b>Support activities:</b> (i) <b>firm infrastructure</b>: management, finance, legal; (ii) <b>human resource management</b>; (iii) <b>technology development</b>; (iv) <b>procurement</b>: buying inputs.</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "fran", q: "Explain franchising, how it works, and its merits and limitations.", hint: "Parties, payments, support; merits; limits.", why: "",
      points: [{ p: "Meaning: franchisor grants right to use brand and system", m: 1, k: ["franchisor", "right"] }, { p: "Working: franchisee pays fee and royalty", m: 1, k: ["fee", "royalty"] }, { p: "Franchisor provides training, products, manual", m: 1, k: ["training", "manual"] }, { p: "Merit: fast expansion for franchisor", m: 1, k: ["expansion", "capital"] }, { p: "Merit: proven model, lower risk for franchisee", m: 1, k: ["proven", "risk"] }, { p: "Limitations: loss of control, fees, disputes", m: 1, k: ["control", "dispute", "fees"] }],
      model: "<p><b>Franchising</b> is an arrangement in which a <b>franchisor</b>, owner of a proven brand and business system, grants a <b>franchisee</b> the right to run a business under its name.</p><p><b>Working:</b> the franchisee pays an <b>initial fee</b> and continuing <b>royalties</b>, invests in the outlet and follows set standards; the franchisor provides <b>training, products, an operating manual</b> and marketing support.</p><p><b>Merits:</b> the franchisor <b>expands quickly</b> using others' capital; the franchisee gets a <b>proven model</b> with <b>lower risk</b>.</p><p><b>Limitations:</b> the franchisor <b>loses some control</b> over quality; the franchisee pays <b>continuing fees</b> with limited freedom; <b>disputes</b> can arise over territory and terms.</p>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "va", q: "A farmer sells mangoes as pulp in branded jars instead of raw fruit. He is", o: ["Merging", "Adding value", "Franchising", "Taking over"], a: 1, hint: "Worth more.", why: "<b>Adding value</b>." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "acq", q: "A firm buys a controlling stake in a rival without the rival's board agreeing. This is", o: ["Friendly takeover", "Hostile takeover", "Franchise", "Consolidation"], a: 1, hint: "No consent.", why: "<b>Hostile takeover</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "fran", q: "Monthly sales ₹8,00,000, royalty 4%. Royalty payable:", o: ["₹24,000", "₹32,000", "₹40,000", "₹3,200"], a: 1, hint: "4% of 8 lakh.", why: "<b>₹32,000</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "fran", passage: "A salon brand lets a woman in Indore open an outlet under its name for a fee and monthly royalty.", q: "The salon brand is the", o: ["Franchisee", "Franchisor", "Acquirer", "Wholesaler"], a: 1, hint: "Brand owner.", why: "<b>Franchisor</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "chain", passage: "A phone company runs service centres that repair handsets under warranty.", q: "This is the value chain activity of", o: ["Operations", "Service", "Procurement", "Inbound logistics"], a: 1, hint: "After sale.", why: "<b>Service</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "merger", passage: "Company X merges into Company Y; Y continues and X ceases to exist.", q: "This is", o: ["Consolidation", "Absorption", "Franchising", "Joint venture"], a: 1, hint: "A + B = A.", why: "<b>Absorption</b>." }
  ],
  find: {
    mcq: [
      { s: "A café chain opens 50 new outlets with its own money.", o: ["Internal growth", "Franchising", "Merger", "Acquisition"], a: 0, c: "growth", d: "E", why: "<b>Internal growth</b>." },
      { s: "Brand owner grants outlet rights for fee and royalty.", o: ["Franchising", "Merger", "Acquisition", "Value chain"], a: 0, c: "fran", d: "E", why: "<b>Franchising</b>." },
      { s: "Outlet owner pays 5% of sales every month.", o: ["Royalty", "Initial fee", "Synergy", "Due diligence"], a: 0, c: "fran", d: "E", why: "<b>Royalty</b>." },
      { s: "Raw cotton turned into branded shirts.", o: ["Value addition", "Merger", "Royalty", "Takeover"], a: 0, c: "va", d: "E", why: "<b>Value addition</b>." },
      { s: "Franchisor's name harmed by one badly run outlet.", o: ["Limitation of franchising", "Merit of franchising", "Synergy", "Vertical merger"], a: 0, c: "franad", d: "M", why: "<b>Limitation</b>." },
      { s: "Unloading and storing raw materials.", o: ["Inbound logistics", "Outbound logistics", "Operations", "Service"], a: 0, c: "chain", d: "M", why: "<b>Inbound</b>." },
      { s: "Assembling bikes on the factory floor.", o: ["Operations", "Inbound logistics", "Procurement", "HRM"], a: 0, c: "chain", d: "M", why: "<b>Operations</b>." },
      { s: "Buying steel through annual contracts.", o: ["Procurement", "Operations", "Marketing", "Service"], a: 0, c: "chain", d: "M", why: "<b>Procurement</b>." },
      { s: "Training staff and paying salaries.", o: ["HRM (support)", "Operations", "Inbound", "Service"], a: 0, c: "chain", d: "M", why: "<b>HRM</b>." },
      { s: "Two airlines merge into one.", o: ["Horizontal merger", "Vertical", "Conglomerate", "Franchise"], a: 0, c: "merger", d: "M", why: "<b>Horizontal</b>." },
      { s: "A juice firm buys an orange orchard company.", o: ["Vertical merger", "Horizontal", "Conglomerate", "Franchise"], a: 0, c: "merger", d: "C", why: "<b>Vertical</b>." },
      { s: "A software firm merges with a hotel chain.", o: ["Conglomerate merger", "Horizontal", "Vertical", "Absorption only"], a: 0, c: "merger", d: "C", why: "<b>Conglomerate</b>." },
      { s: "Two firms dissolve and form a brand-new company.", o: ["Consolidation", "Absorption", "Acquisition", "Franchise"], a: 0, c: "merger", d: "C", why: "<b>Consolidation</b>." },
      { s: "Buyer gains 60% shares; target keeps its name.", o: ["Acquisition", "Consolidation", "Franchise", "Absorption"], a: 0, c: "acq", d: "C", why: "<b>Acquisition</b>." },
      { s: "Combined firm saves costs by sharing warehouses.", o: ["Synergy", "Royalty", "Procurement", "Due diligence"], a: 0, c: "mareason", d: "C", why: "<b>Synergy</b>." },
      { s: "Buyer overpaid and later regretted the deal.", o: ["Winner's curse (M&A risk)", "Synergy", "Royalty", "Value added"], a: 0, c: "mareason", d: "C", why: "<b>Winner's curse</b>." }
    ],
    match: [
      { title: "Drag each situation onto its concept.", pairs: [["Outlet pays 6% of sales to brand", "Royalty", "fran"], ["Milk worth ₹40k becomes paneer worth ₹70k", "Value addition", "va"], ["Delivering goods to dealers", "Outbound logistics", "chain"], ["Car maker buys a tyre maker", "Vertical merger", "merger"], ["Buying without target's consent", "Hostile takeover", "acq"], ["2 + 2 = 5", "Synergy", "mareason"]] }
    ],
    wrong: [
      { stmts: ["The franchisor owns the brand.", "The franchisee pays royalty.", "The franchisor pays the franchisee a fee.", "Franchising allows fast expansion."], a: 2, c: "fran", why: "The <b>franchisee</b> pays the fee." },
      { stmts: ["Operations is a primary activity.", "Procurement is a support activity.", "Service is a support activity.", "HRM is a support activity."], a: 2, c: "chain", why: "Service is a <b>primary</b> activity." },
      { stmts: ["Horizontal: same line of business.", "Vertical: different stages of one chain.", "Conglomerate: same product.", "Consolidation: A + B = C."], a: 2, c: "merger", why: "Conglomerate: <b>unrelated</b> businesses." }
    ],
    para: [
      { target: "Inbound logistics", c: "chain", sents: ["Spice Route Ltd makes masalas.", "Trucks bring chillies and turmeric to its warehouse, where they are checked and stored.", "Grinding happens in the next building.", "Packets are sold across India."], a: 1, why: "Receiving and storing inputs: <b>inbound</b>." },
      { target: "Vertical merger", c: "merger", sents: ["BrightPaints is a paint maker.", "It found pigment prices rising.", "It merged with PigmentCo, which supplies its raw material.", "It also sponsors a cricket team."], a: 2, why: "Merging with a supplier: <b>vertical</b>." },
      { target: "Franchising", c: "fran", sents: ["Raj wanted to own a business.", "He chose a known pizza brand.", "He paid a fee, got training and opened an outlet under its name.", "He hired eight staff."], a: 2, why: "Outlet under another's brand for a fee: <b>franchising</b>." }
    ],
    explain: [
      { s: "A bakery's new recipe app counts as which value chain activity?", o: ["Technology development", "Operations", "Inbound logistics", "Service"], a: 0, c: "chain", why: "The clue is <i>app</i>: <b>technology development</b>." },
      { s: "A firm checks a target's tax cases and debts before buying.", o: ["Due diligence", "Synergy", "Royalty", "Franchising"], a: 0, c: "acq", why: "<b>Due diligence</b>." },
      { s: "A hotel chain lets local owners run hotels under its name.", o: ["Franchising", "Merger", "Acquisition", "Procurement"], a: 0, c: "fran", why: "<b>Franchising</b>." },
      { s: "A tea company adds gift boxes and sells at a premium.", o: ["Value addition (packaging)", "Merger", "Royalty", "Inbound logistics"], a: 0, c: "va", why: "<b>Value addition</b>." }
    ]
  }
});
