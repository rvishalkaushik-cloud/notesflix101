/* Answer Writing Lab · Class XII Entrepreneurship. Original questions; figures recomputed. */
NFWrite.register({
  slug: "xii-ent", cls: "XII", subject: "Entrepreneurship",
  intro: "Entrepreneurship answers reward the exact term plus a business example. Case questions want the concept named and the line from the case that proves it.",
  rules: [
    { t: "Term + meaning + example", b: "Each point: the <b>term</b> as a heading, a one-line meaning, then a small <b>business example</b>. Examples separate a good answer from a full-marks one." },
    { t: "Quote the case", b: "In case questions, name the concept and <b>quote the line</b> from the case that shows it." },
    { t: "Show working in numericals", b: "Break-even, royalty and valuation: <b>formula → substitution → answer with ₹ and units</b>." },
    { t: "Stages in order", b: "For processes (creativity, VC financing, feasibility), write the stages <b>in the correct order</b>, numbered." },
    { t: "Match the command word", b: "<b>Identify</b> = name only. <b>Explain</b> = name + meaning. <b>Discuss</b> = explain with merits and limits." },
    { t: "No vague lines", b: "Avoid 'it is very important for business'. Every sentence should carry a fact." }
  ],
  questions: [
    {
      id: "q1", ch: "ent-u1", chTitle: "Entrepreneurial Opportunity", marks: 5, cmd: "Explain",
      q: "Explain the five stages of the creative process with an example of a new product idea.",
      ask: "All five stages, in order, each with a one-line meaning tied to the same example.",
      points: [
        { p: "Idea germination: the seed of an idea from a need or interest", m: 1, k: ["germination"] },
        { p: "Preparation: research and information gathering", m: 1, k: ["preparation"] },
        { p: "Incubation: the mind works on the problem subconsciously", m: 1, k: ["incubation"] },
        { p: "Illumination: the 'aha' moment when the solution appears", m: 1, k: ["illumination"] },
        { p: "Verification: testing the idea in practice", m: 1, k: ["verification"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>Creativity means thinking of new ideas. The stages are thinking, research, getting the idea and testing it. Example: a new type of bag.</p>",
          notes: ["Only four loose stages, without the textbook names.", "'Research' (preparation) and 'testing' (verification) can earn 2 marks.", "Incubation is missing, and germination and illumination are not named."] },
        good: { score: 4, text: "<p><b>1. Idea germination:</b> the idea starts from a need.</p><p><b>2. Preparation:</b> collecting information.</p><p><b>3. Illumination:</b> the idea suddenly comes.</p><p><b>4. Verification:</b> testing the idea.</p><p>Example: a foldable school bag.</p>",
          notes: ["Four stages named correctly in order: 4 marks.", "<b>Incubation</b> (between preparation and illumination) is missing.", "The example sits at the end; weave it into each stage."] },
        full: { score: 5, text: "<p>Example: Meera wants a school bag that is easier on children's backs.</p><p><span class=\"mp\" data-p=\"1\"><b>1. Idea germination:</b> the seed of the idea: Meera notices children complaining of back pain.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. Preparation:</b> she researches posture, weight limits and materials.</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Incubation:</b> she sets the problem aside while her mind works on it subconsciously.</span></p><p><span class=\"mp\" data-p=\"4\"><b>4. Illumination:</b> the 'aha' moment: a bag with wheels that turns into a backpack.</span></p><p><span class=\"mp\" data-p=\"5\"><b>5. Verification:</b> she makes a sample and tests it with 20 students.</span></p>",
          notes: ["All five stages, numbered in order.", "One running example shows each stage in action.", "Each stage has a crisp meaning."] }
      },
      mistakes: ["Missing incubation.", "Writing stages out of order (illumination before preparation).", "Giving a separate, unrelated example for each stage."],
      tip: "Remember G-P-I-I-V: Germination, Preparation, Incubation, Illumination, Verification."
    },
    {
      id: "q2", ch: "ent-u2", chTitle: "Enterprise Planning", marks: 4, cmd: "Calculate",
      q: "A firm's fixed costs are ₹1,20,000. It sells each unit for ₹50, and the variable cost per unit is ₹30. Calculate (a) the break-even point in units and in rupees, and (b) the profit if it sells 8,000 units.",
      ask: "Contribution per unit, BEP formula with units and rupees, and profit at 8,000 units.",
      points: [
        { p: "Contribution per unit = ₹50 − ₹30 = ₹20", m: 1, k: ["20"] },
        { p: "BEP (units) = Fixed costs ÷ Contribution = 1,20,000 ÷ 20 = 6,000 units", m: 1, k: ["6,000", "6000"] },
        { p: "BEP (₹) = 6,000 × 50 = ₹3,00,000", m: 1, k: ["3,00,000", "300000"] },
        { p: "Profit at 8,000 units = 8,000 × 20 − 1,20,000 = ₹40,000", m: 1, k: ["40,000", "40000"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>BEP = 1,20,000 ÷ 50 = 2,400 units. Profit = 8,000 × 50 = 4,00,000.</p>",
          notes: ["Divide fixed cost by <b>contribution</b> (₹20), not price.", "Profit ignores variable and fixed costs: sales revenue is not profit.", "1 mark at most for attempting the formula structure."] },
        good: { score: 3, text: "<p>Contribution = 50 − 30 = ₹20 per unit.</p><p>BEP = 1,20,000 ÷ 20 = 6,000 units; in sales = 6,000 × 50 = ₹3,00,000.</p><p>Profit at 8,000 units = 8,000 × 20 = ₹1,60,000.</p>",
          notes: ["Contribution and both BEP figures right: 3 marks.", "Total contribution ₹1,60,000 must still cover <b>fixed costs</b>: profit = 1,60,000 − 1,20,000 = ₹40,000."] },
        full: { score: 4, text: "<p><span class=\"mp\" data-p=\"1\"><b>Contribution per unit</b> = Selling price − Variable cost = ₹50 − ₹30 = ₹20</span></p><p><span class=\"mp\" data-p=\"2\"><b>(a) BEP (units)</b> = Fixed costs ÷ Contribution per unit = ₹1,20,000 ÷ ₹20 = <b>6,000 units</b></span></p><p><span class=\"mp\" data-p=\"3\"><b>BEP (₹)</b> = 6,000 × ₹50 = <b>₹3,00,000</b></span></p><p><span class=\"mp\" data-p=\"4\"><b>(b) Profit</b> = (Units sold × Contribution) − Fixed costs = (8,000 × ₹20) − ₹1,20,000 = <b>₹40,000</b></span></p>",
          notes: ["Each step names its formula.", "Profit check: 8,000 is 2,000 units above BEP, and 2,000 × ₹20 = ₹40,000. ✓"] }
      },
      mistakes: ["Dividing fixed cost by selling price.", "Forgetting to subtract fixed costs when finding profit.", "Giving BEP only in units when rupees are also asked."],
      tip: "Quick check: profit = (units sold − BEP units) × contribution per unit."
    },
    {
      id: "q3", ch: "ent-u3", chTitle: "Enterprise Marketing", marks: 3, cmd: "Distinguish",
      q: "Distinguish between penetration pricing and skimming pricing on three bases.",
      ask: "A table: meaning (low vs high launch price), objective, and suitable products/markets.",
      points: [
        { p: "Launch price: low vs high", m: 1, k: ["low", "high"] },
        { p: "Objective: capture market share quickly vs recover costs/earn high profit from early buyers", m: 1, k: ["market share", "early", "recover", "profit"] },
        { p: "Suitable for: price-sensitive mass market vs new innovative products with few competitors", m: 1, k: ["price-sensitive", "price sensitive", "mass", "innovat", "new technolog"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Penetration pricing means low price. Skimming pricing means high price.</p>",
          notes: ["Only one basis (price level), not in a table: 1 mark.", "Add the objective and the kind of product or market each suits."] },
        good: { score: 2, text: "<table><tr><th>Basis</th><th>Penetration</th><th>Skimming</th></tr><tr><td>Price</td><td>Low at launch</td><td>High at launch</td></tr><tr><td>Objective</td><td>Gain market share</td><td>Earn high profit from early buyers</td></tr><tr><td>Example</td><td>Mobile data packs</td><td>Expensive</td></tr></table>",
          notes: ["Rows 1 and 2 are correct: 2 marks.", "Row 3 is incomplete on the skimming side. Use 'Suitable for' as the basis: mass, price-sensitive markets vs new, innovative products."] },
        full: { score: 3, text: "<table><tr><th>Basis</th><th>Penetration pricing</th><th>Skimming pricing</th></tr><tr><td>Launch price</td><td><span class=\"mp\" data-p=\"1\">Low introductory price</span></td><td>High introductory price, reduced later</td></tr><tr><td>Objective</td><td><span class=\"mp\" data-p=\"2\">Capture a large market share quickly</span></td><td>Recover development costs and earn high profit from early buyers</td></tr><tr><td>Suitable for</td><td><span class=\"mp\" data-p=\"3\">Price-sensitive mass markets, e.g. a new app at ₹1 for the first month</span></td><td>New, innovative products with few rivals, e.g. a new smartphone</td></tr></table>",
          notes: ["Three valid bases, same on both sides.", "Short examples strengthen the third row."] }
      },
      mistakes: ["Writing only 'low price vs high price'.", "Mismatched rows.", "Calling skimming a permanent high price (it is reduced later)."],
      tip: "Penetration = 'enter deep' with a low price. Skimming = 'skim the cream' of buyers who pay more."
    },
    {
      id: "q4", ch: "ent-u4", chTitle: "Enterprise Growth Strategies", marks: 4, cmd: "Identify and explain",
      q: "<i>Spicebox</i>, a biryani brand from Hyderabad, allows people in other cities to open outlets under its name. Each pays ₹6 lakh upfront and 5% of monthly sales. Spicebox trains their cooks and supplies its secret masala. (a) Identify the growth strategy. (b) Explain any two of its advantages to Spicebox.",
      ask: "(a) Name the strategy and quote the case (2 marks). (b) Two advantages to the <b>brand owner</b>, not the outlet owner (2 marks).",
      points: [
        { p: "Identifies <b>franchising</b>", m: 1, k: ["franchis"] },
        { p: "Quotes: 'allows people in other cities to open outlets under its name … ₹6 lakh upfront and 5% of monthly sales'", m: 1, k: ["outlets under its name", "under its name", "5% of monthly sales", "₹6 lakh"] },
        { p: "Advantage 1: rapid expansion using franchisees' capital", m: 1, k: ["expansion", "capital", "investment"] },
        { p: "Advantage 2: steady royalty income / motivated owner-managers / brand recognition", m: 1, k: ["royalty", "motivated", "brand"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>(a) Merger.</p><p>(b) Spicebox will get more money. The franchisee gets a known brand.</p>",
          notes: ["Wrong strategy: no companies combine here. Outlets run under Spicebox's name for a fee = <b>franchising</b>.", "'More money' is close to royalty income: 1 mark.", "'Franchisee gets a known brand' is an advantage to the <b>franchisee</b>, not Spicebox."] },
        good: { score: 3, text: "<p>(a) The strategy is <b>franchising</b>.</p><p>(b) <b>Fast expansion:</b> Spicebox can open outlets in many cities quickly. <b>Royalty income:</b> it earns 5% of every outlet's sales.</p>",
          notes: ["Strategy and both advantages right: 3 marks.", "Quote the case line for the identification mark.", "Add <b>why</b> expansion is fast: the franchisees invest their own money."] },
        full: { score: 4, text: "<p><b>(a)</b> <span class=\"mp\" data-p=\"1\">The growth strategy is <b>franchising</b>.</span> <span class=\"mp\" data-p=\"2\">It is shown by: <i>\"allows people in other cities to open outlets under its name. Each pays ₹6 lakh upfront and 5% of monthly sales.\"</i></span></p><p><b>(b)</b> <span class=\"mp\" data-p=\"3\"><b>1. Rapid expansion with little capital:</b> franchisees invest their own money in outlets, so Spicebox can enter many cities without raising large funds.</span></p><p><span class=\"mp\" data-p=\"4\"><b>2. Steady royalty income:</b> Spicebox earns ₹6 lakh per new outlet plus 5% of monthly sales from each outlet.</span></p>",
          notes: ["Strategy named and proved with a quote.", "Advantages are to the <b>franchisor</b>, as the question asks.", "Each advantage is linked back to the case figures."] }
      },
      mistakes: ["Calling it a merger or acquisition.", "Giving advantages to the franchisee instead of the franchisor.", "Not quoting the case."],
      tip: "Franchisor = brand owner (Spicebox). Franchisee = outlet owner. Check whose advantages are asked."
    },
    {
      id: "q5", ch: "ent-u6", chTitle: "Resource Mobilization", marks: 3, cmd: "Distinguish",
      q: "Distinguish between angel investors and venture capitalists on three bases.",
      ask: "A table: source of money, stage and size of investment, and degree of control.",
      points: [
        { p: "Source: own money (individuals) vs pooled funds managed by firms", m: 1, k: ["own money", "pooled", "individual"] },
        { p: "Stage/size: early stage, smaller amounts vs later stage, larger amounts", m: 1, k: ["early", "later", "smaller", "larger"] },
        { p: "Involvement: informal mentoring vs formal control (board seat)", m: 1, k: ["mentor", "board", "control"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Angel investors are rich people who help start-ups. Venture capitalists are companies that give money to businesses.</p>",
          notes: ["Only the source basis, loosely: 1 mark.", "Add stage/size and control, in a table."] },
        good: { score: 2, text: "<table><tr><th>Basis</th><th>Angel investors</th><th>Venture capitalists</th></tr><tr><td>Source</td><td>Own money</td><td>Pooled funds of many investors</td></tr><tr><td>Stage</td><td>Early stage</td><td>Later stage</td></tr><tr><td>Risk</td><td>High</td><td>High</td></tr></table>",
          notes: ["Rows 1 and 2 are correct: 2 marks.", "Row 3 shows no difference. Use <b>involvement</b>: angels mentor informally; VCs take formal control through a board seat."] },
        full: { score: 3, text: "<table><tr><th>Basis</th><th>Angel investors</th><th>Venture capitalists</th></tr><tr><td>Source of funds</td><td><span class=\"mp\" data-p=\"1\">Wealthy individuals investing their own money</span></td><td>Professional firms investing pooled funds of many investors</td></tr><tr><td>Stage and size</td><td><span class=\"mp\" data-p=\"2\">Early stage; smaller amounts</span></td><td>Later stages (expansion); larger amounts</td></tr><tr><td>Involvement</td><td><span class=\"mp\" data-p=\"3\">Informal mentoring and contacts</span></td><td>Formal control, often a board seat, and a planned exit</td></tr></table>",
          notes: ["Three real differences, same basis per row.", "Specific words (pooled funds, board seat, exit) show precise knowledge."] }
      },
      mistakes: ["Using a basis where both sides are the same (both take high risk).", "Saying angels invest later than VCs.", "Paragraph instead of table."],
      tip: "Angel = individual, own money, early. VC = firm, pooled money, later, board seat."
    },
    {
      id: "q6", ch: "ent-u4", chTitle: "Enterprise Growth Strategies", marks: 6, cmd: "Explain",
      q: "Explain Porter's value chain, describing its primary and support activities.",
      ask: "Meaning, all five primary activities and all four support activities. Group them under two sub-headings.",
      points: [
        { p: "Meaning: activities through which a firm creates value for customers (Michael Porter)", m: 1, k: ["porter", "creates value", "value for customers"] },
        { p: "Inbound logistics and operations", m: 1, k: ["inbound", "operations"] },
        { p: "Outbound logistics", m: 1, k: ["outbound"] },
        { p: "Marketing and sales; service", m: 1, k: ["marketing", "service"] },
        { p: "Firm infrastructure and human resource management", m: 1, k: ["infrastructure", "human resource"] },
        { p: "Technology development and procurement", m: 1, k: ["technology", "procurement"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>Value chain means adding value to products. The activities are production, marketing, sales and HR.</p>",
          notes: ["Rough meaning and a few activities: 2 marks.", "Primary and support activities are not separated, and logistics, service, infrastructure, technology and procurement are missing."] },
        good: { score: 4, text: "<p>The value chain, given by Michael Porter, shows activities that create value.</p><p><b>Primary:</b> inbound logistics, operations, outbound logistics, marketing and sales, service.</p><p><b>Support:</b> HRM, technology development, procurement.</p>",
          notes: ["Meaning and all five primary activities: 4 marks.", "<b>Firm infrastructure</b> is missing from support activities.", "It is a list: 'describe' needs a line on each activity."] },
        full: { score: 6, text: "<p><span class=\"mp\" data-p=\"1\"><b>Meaning:</b> Michael Porter's value chain is the set of activities through which a firm creates value for its customers; the margin is the value created minus the cost of these activities.</span></p><p><b>Primary activities</b></p><p><span class=\"mp\" data-p=\"2\">(i) <b>Inbound logistics:</b> receiving, storing and handling inputs. (ii) <b>Operations:</b> converting inputs into finished products.</span></p><p><span class=\"mp\" data-p=\"3\">(iii) <b>Outbound logistics:</b> storing and delivering finished goods to customers.</span></p><p><span class=\"mp\" data-p=\"4\">(iv) <b>Marketing and sales:</b> persuading customers to buy. (v) <b>Service:</b> installation, repair and after-sales support.</span></p><p><b>Support activities</b></p><p><span class=\"mp\" data-p=\"5\">(i) <b>Firm infrastructure:</b> management, finance, legal and planning. (ii) <b>Human resource management:</b> hiring, training and paying staff.</span></p><p><span class=\"mp\" data-p=\"6\">(iii) <b>Technology development:</b> research, design and process improvement. (iv) <b>Procurement:</b> buying inputs, machines and supplies.</span></p>",
          notes: ["Meaning credits Porter and explains 'margin'.", "Two sub-headings with all nine activities, each described in a line.", "Numbering inside each group makes counting easy."] }
      },
      mistakes: ["Mixing primary and support activities in one list.", "Missing firm infrastructure.", "Confusing inbound (inputs in) with outbound (goods out)."],
      tip: "Primary = the product's journey: in → make → out → sell → serve. Support = the backstage: infrastructure, people, technology, buying."
    }
  ]
});
