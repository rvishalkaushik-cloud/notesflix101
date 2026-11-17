/* Revision Arena · Class XII Accountancy · Chapter 2 · Goodwill (covers Parts 1-2). Original cases; every figure recomputed. */
NFArena.register({
  id: "acc-goodwill", cls: "XII", subject: "Accountancy", unit: "Chapter", num: "2",
  title: "Goodwill",
  tagline: "What a good name is worth, how it is valued, and who pays whom when the profit-sharing ratio changes.",
  notesLink: "../#acc-goodwill",
  concepts: {
    mean: { n: "Meaning and nature of goodwill", s: "nature" },
    factors: { n: "Factors affecting goodwill", s: "nature" },
    need: { n: "When goodwill must be valued", s: "nature" },
    adj: { n: "Adjusting past profits (normal profit)", s: "adjust" },
    simple: { n: "Simple average profit method", s: "methods" },
    weighted: { n: "Weighted average profit method", s: "methods" },
    super: { n: "Super profit method", s: "super" },
    cap: { n: "Capitalisation method", s: "super" },
    sacgain: { n: "Sacrificing and gaining ratio", s: "change" },
    entry: { n: "Adjustment entry for goodwill on change in ratio", s: "change" },
    exist: { n: "Writing off existing goodwill", s: "change" }
  },
  overview: {
    text: "<b>Goodwill</b> is the value of a firm's reputation: its ability to earn <b>more than normal profit</b> because of its name, location, customers and management. It is an <b>intangible</b> asset, but not a fictitious one: it can be sold. Goodwill is valued from <b>adjusted (normal) past profits</b> and is used to compensate partners who give up a share of future profit.",
    points: [
      "Valuation methods: <b>average profit</b> (simple or weighted), <b>super profit</b> and <b>capitalisation</b>.",
      "Before averaging, past profits are adjusted for abnormal items, errors and costs the business will bear in future.",
      "On a change in ratio, the <b>gaining</b> partner compensates the <b>sacrificing</b> partner: Gaining partner's Capital A/c Dr, To Sacrificing partner's Capital A/c.",
      "Goodwill already in the books is first <b>written off</b> among the old partners in the <b>old ratio</b>."
    ],
    map: {
      center: "Goodwill",
      branches: [
        { t: "Nature", c: ["Intangible, not fictitious", "Factors affecting it", "When it is valued"] },
        { t: "Profit-based methods", c: ["Adjust past profits", "Simple average", "Weighted average"] },
        { t: "Super profit methods", c: ["Super profit × years", "Capitalisation of average profit", "Capitalisation of super profit"] },
        { t: "Change in ratio", c: ["Sacrifice = old − new", "Adjustment entry", "Write off existing goodwill"] }
      ]
    }
  },
  sections: [
    {
      id: "nature", title: "Meaning, factors and need", sub: "Why a good name has a price", icon: "🏷️", color: "#4da3ff",
      quick: [
        "<b>Goodwill</b>: the present value of a firm's expected <b>future excess profits</b>. It arises from reputation, location, loyal customers and efficient management.",
        "It is an <b>intangible asset</b> (no physical form) but <b>not fictitious</b>: it has a value and can be sold with the business.",
        "<b>Factors:</b> nature of business, location, efficiency of management, market situation (monopoly or little competition), special advantages (licences, cheap power, long leases) and quality of products.",
        "<b>Needed when:</b> profit-sharing ratio changes, a partner is admitted, retires or dies, the firm is sold, or firms amalgamate."
      ],
      table: { cap: "Tangible, intangible, fictitious", head: ["Type", "Example", "Can be sold?"], rows: [["Tangible", "Machinery, stock", "Yes"], ["Intangible", "Goodwill, patents", "Yes"], ["Fictitious", "Preliminary expenses written off over time", "No"]] },
      cards: [
        { t: "Why it changes hands", tag: "why", b: "<p>When a partner gives up part of his future profit, he gives up part of the goodwill he helped build. The partner who gains that share must <b>pay him</b> for it.</p>" },
        { t: "Self-generated goodwill", tag: "tip", b: "<p>Goodwill built up by the firm is <b>not shown</b> in the books (AS 26). Only purchased goodwill is recorded. That is why most entries on a change in ratio are passed through capital accounts.</p>" }
      ],
      exam: ["'A shop near the railway station earns more than similar shops' → <b>location</b>.", "'The firm has a government licence that rivals lack' → <b>special advantage</b>."]
    },
    {
      id: "adjust", title: "Adjusting past profits", sub: "Find the normal profit first", icon: "🧹", color: "#22c55e",
      quick: [
        "<b>Abnormal loss</b> already charged → <b>add back</b>. <b>Abnormal gain</b> included → <b>deduct</b>.",
        "<b>Capital expenditure</b> wrongly charged to revenue → add back (less any depreciation on it, if given).",
        "<b>Closing stock overvalued</b> → that year's profit is too high: deduct. The same stock is <b>next year's opening stock</b>: next year's profit is too low: add.",
        "<b>Future costs</b> not yet charged (manager's or partners' remuneration) → deduct from <b>every</b> year. If part is already charged, deduct only the extra."
      ],
      table: { cap: "Effect on the year's profit", head: ["Item", "This year", "Next year"], rows: [["Closing stock overvalued", "Deduct", "Add"], ["Closing stock undervalued", "Add", "Deduct"], ["Abnormal loss charged", "Add back", "—"], ["Abnormal gain included", "Deduct", "—"]] },
      cards: [
        { t: "Worked example: stock error", tag: "eg", b: "<p>Profits ₹30,000, ₹36,000, ₹42,000. Year 2 closing stock undervalued by ₹5,000.</p><p>Year 2: +5,000 = 41,000. Year 3 (opening stock too low): −5,000 = 37,000. Total stays ₹1,08,000; average ₹36,000.</p>" },
        { t: "Worked example: remuneration", tag: "eg", b: "<p>Profits after a manager's salary of ₹10,000 were ₹56,000, ₹64,000, ₹72,000. Salary will now be ₹16,000.</p><p>Deduct only the extra ₹6,000 each year: 50,000, 58,000, 66,000 → average <b>₹58,000</b>.</p>" }
      ],
      exam: ["A loss year is included in the average with a <b>minus</b> sign.", "'Normal profit is ₹45,000; an abnormal loss is shown separately' → use 45,000 as given."]
    },
    {
      id: "methods", title: "Average profit methods", sub: "Simple and weighted", icon: "🧮", color: "#f5b301",
      quick: [
        "<b>Simple average:</b> Goodwill = Average adjusted profit × Number of years' purchase.",
        "<b>Weighted average:</b> used when profits show a trend. Multiply each year's profit by its weight; Weighted average = Sum of products ÷ Sum of weights.",
        "Recent years usually get <b>higher weights</b>."
      ],
      cards: [
        { t: "Worked example: simple average", tag: "eg", b: "<p>Profits ₹25,000, ₹40,000, loss ₹15,000, ₹80,000, ₹1,00,000.</p><p>Total = 2,30,000; average = ₹46,000; goodwill at 4 years' purchase = <b>₹1,84,000</b>.</p>" },
        { t: "Worked example: weighted average", tag: "eg", b: "<p>Profits ₹30,000, ₹45,000, ₹60,000 with weights 1, 2, 3.</p><p>Products: 30,000 + 90,000 + 1,80,000 = 3,00,000; ÷ 6 = ₹50,000. Goodwill at 4 years' purchase = <b>₹2,00,000</b>.</p>" }
      ],
      exam: ["'Profits rising steadily; weights 1, 2, 3' → weighted average."]
    },
    {
      id: "super", title: "Super profit and capitalisation", sub: "Profit above the normal return", icon: "🚀", color: "#ff5470",
      quick: [
        "<b>Normal profit</b> = Capital employed × Normal rate of return ÷ 100.",
        "<b>Super profit</b> = Average profit − Normal profit. Goodwill = Super profit × Years' purchase.",
        "<b>Capitalisation of average profit:</b> Capitalised value = Average profit × 100 ÷ Normal rate; Goodwill = Capitalised value − Capital employed (net assets).",
        "<b>Capitalisation of super profit:</b> Goodwill = Super profit × 100 ÷ Normal rate.",
        "<b>Capital employed</b> = Total assets (excluding goodwill and fictitious assets) − Outside liabilities."
      ],
      table: { cap: "One firm, three methods (capital employed ₹5,00,000, normal rate 10%, average profit ₹80,000)", head: ["Method", "Working", "Goodwill"], rows: [["Super profit, 3 years' purchase", "(80,000 − 50,000) × 3", "₹90,000"], ["Capitalisation of average profit", "8,00,000 − 5,00,000", "₹3,00,000"], ["Capitalisation of super profit", "30,000 × 100 ÷ 10", "₹3,00,000"]] },
      cards: [
        { t: "Why the two capitalisation answers match", tag: "why", b: "<p>Both measure the value of the excess return in perpetuity at the normal rate, so with the same data they always give the <b>same goodwill</b>.</p>" },
        { t: "No super profit", tag: "tip", b: "<p>If average profit is <b>equal to or less than</b> normal profit, there is no super profit and <b>no goodwill</b>.</p>" }
      ],
      exam: ["Exclude goodwill already in the books when you calculate capital employed."]
    },
    {
      id: "change", title: "Goodwill on change in profit-sharing ratio", sub: "Gainer pays the sacrificer", icon: "🔄", color: "#c084fc",
      quick: [
        "<b>Sacrifice (or gain) = Old share − New share.</b> Positive → sacrifice; negative → gain. The totals always cancel.",
        "<b>Entry (goodwill not in books):</b> Gaining partner's Capital A/c Dr, To Sacrificing partner's Capital A/c, with Goodwill × fraction.",
        "Fixed capitals → use <b>Current Accounts</b>.",
        "A partner whose share does not change is <b>left out</b> of the entry.",
        "<b>Goodwill already in the books</b>: write it off first among old partners in the <b>old ratio</b>: Old partners' Capital A/cs Dr, To Goodwill A/c."
      ],
      table: { cap: "5 : 3 : 2 → equal (in 30ths), goodwill ₹90,000", head: ["Partner", "Old", "New", "Old − New", "Entry (₹)"], rows: [["A", "15", "10", "+5 sacrifice", "15,000 Cr"], ["B", "9", "10", "−1 gain", "3,000 Dr"], ["C", "6", "10", "−4 gain", "12,000 Dr"]] },
      cards: [
        { t: "Surrendering part of one's own share", tag: "eg", b: "<p>X and Y share 3 : 2. X gives 1/5 of <b>his share</b> to Y: sacrifice = 1/5 × 3/5 = <b>3/25</b>.</p><p>New: X 12/25, Y 13/25. With goodwill ₹1,25,000: Y pays X 1,25,000 × 3/25 = <b>₹15,000</b>.</p>" },
        { t: "Write-off of existing goodwill", tag: "eg", b: "<p>A and B (3 : 2) change to equal; goodwill in books ₹30,000.</p><p>A's Capital A/c Dr 18,000; B's Capital A/c Dr 12,000, To Goodwill A/c 30,000.</p>" }
      ],
      exam: ["Always work in a common denominator (10ths, 30ths) before comparing old and new shares."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "mean", q: "What is goodwill?", a: "The value of a firm's reputation: its ability to earn more than normal profit." },
    { k: "Nature", c: "mean", q: "Is goodwill a fictitious asset?", a: "No. It is intangible but has value and can be sold." },
    { k: "AS 26", c: "mean", q: "Is self-generated goodwill recorded in the books?", a: "No. Only purchased goodwill is recorded." },
    { k: "Factors", c: "factors", q: "Name four factors affecting goodwill.", a: "Nature of business, location, efficiency of management, market situation (also special advantages, quality)." },
    { k: "Need", c: "need", q: "Name three occasions when goodwill is valued.", a: "Change in profit-sharing ratio, admission, retirement or death (also sale, amalgamation)." },
    { k: "Adjustment", c: "adj", q: "Abnormal loss already charged: what do you do?", a: "Add it back to that year's profit." },
    { k: "Adjustment", c: "adj", q: "Year 1 closing stock overvalued by ₹4,000. Effect on Year 2?", a: "Year 2 profit was too low: add ₹4,000 (opening stock too high)." },
    { k: "Formula", c: "simple", q: "Goodwill by average profit method?", a: "Average adjusted profit × Number of years' purchase." },
    { k: "Formula", c: "weighted", q: "Weighted average profit?", a: "Sum of (profit × weight) ÷ Sum of weights." },
    { k: "When", c: "weighted", q: "When is the weighted average preferred?", a: "When profits show a rising or falling trend." },
    { k: "Formula", c: "super", q: "Normal profit?", a: "Capital employed × Normal rate of return ÷ 100." },
    { k: "Formula", c: "super", q: "Super profit?", a: "Average profit − Normal profit." },
    { k: "Formula", c: "cap", q: "Goodwill by capitalisation of super profit?", a: "Super profit × 100 ÷ Normal rate of return." },
    { k: "Formula", c: "cap", q: "Goodwill by capitalisation of average profit?", a: "(Average profit × 100 ÷ Normal rate) − Capital employed." },
    { k: "Ratio", c: "sacgain", q: "Sacrifice of a partner on change in ratio?", a: "Old share − New share (positive = sacrifice)." },
    { k: "Entry", c: "entry", q: "Entry for goodwill on change in ratio (not in books)?", a: "Gaining partner's Capital A/c Dr, To Sacrificing partner's Capital A/c." },
    { k: "Existing", c: "exist", q: "In which ratio is existing goodwill written off?", a: "Old profit-sharing ratio, among all old partners." },
    { k: "Surrender", c: "sacgain", q: "X (3/5) surrenders 1/5 of his share. His sacrifice?", a: "1/5 × 3/5 = 3/25." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Why the station café earns more",
      text: "<p><span class='co'>Platform Chai Co.</span> runs a café right outside the busiest railway station in the city. It holds the only licence to sell inside the waiting hall. Its owners have run it for 20 years, regulars come every morning, and a rival café two streets away earns half as much.</p>",
      qs: [
        { q: "Identify three factors that give the firm its goodwill. Quote the lines.", m: 3, type: "Identify concepts", c: "factors", ans: "Location, special advantage (licence), customer loyalty/management", keys: ["location", "licence"], hint: "Where, what rivals lack, who keeps coming.",
          points: [{ p: "<b>Location</b>: outside the busiest station", m: 1, k: ["location"] }, { p: "<b>Special advantage</b>: only licence in the waiting hall", m: 1, k: ["licence", "special", "advantage"] }, { p: "<b>Efficiency of management / customer loyalty</b>: 20 years, regulars every morning", m: 1, k: ["management", "loyal", "regular", "reputation"] }],
          structure: ["Factor + quoted line, three times."],
          model: "<p>(i) <b>Location:</b> 'right outside the busiest railway station'.</p><p>(ii) <b>Special advantage:</b> 'the only licence to sell inside the waiting hall'.</p><p>(iii) <b>Efficiency of management / reputation:</b> 'run it for 20 years, regulars come every morning'.</p>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "Cleaning up three years of profit",
      text: "<p><span class='co'>Maple Furnishings</span> is valuing goodwill at 3 years' purchase of the average profit. Year 1 profit ₹36,000 was <b>after</b> an abnormal fire loss of ₹6,000. Year 2 profit ₹40,000 <b>includes</b> a one-time gain of ₹4,000. Year 3 profit ₹46,000 is after wrongly charging ₹8,000 of capital expenditure to the P&L Account.</p>",
      qs: [
        { q: "Calculate the adjusted profits, the average and the goodwill.", m: 4, type: "Calculate", c: "adj", ans: "42,000; 36,000; 54,000; average 44,000; goodwill 1,32,000", keys: ["44,000", "1,32,000"], hint: "Add back the loss and capital expenditure; deduct the gain.",
          points: [{ p: "Year 1: 36,000 + 6,000 = <b>42,000</b>", m: 1, k: ["42,000"] }, { p: "Year 2: 40,000 − 4,000 = <b>36,000</b>", m: 1, k: ["36,000"] }, { p: "Year 3: 46,000 + 8,000 = <b>54,000</b>", m: 1, k: ["54,000"] }, { p: "Average ₹44,000; goodwill <b>₹1,32,000</b>", m: 1, k: ["44,000", "1,32,000"] }],
          structure: ["Adjust each year, total, average, × 3."],
          model: "<p>Year 1: abnormal loss added back: 36,000 + 6,000 = <b>₹42,000</b>.</p><p>Year 2: one-time gain deducted: 40,000 − 4,000 = <b>₹36,000</b>.</p><p>Year 3: capital expenditure added back: 46,000 + 8,000 = <b>₹54,000</b>.</p><p>Total = 1,32,000; average = <b>₹44,000</b>; goodwill = 44,000 × 3 = <b>₹1,32,000</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "A firm on the way up",
      text: "<p><span class='co'>CloudNest Software</span> earned ₹48,000 (Year 1, <b>after</b> an abnormal loss of ₹6,000), ₹60,000 (Year 2, <b>including</b> an abnormal gain of ₹12,000) and ₹66,000 (Year 3, closing stock <b>undervalued</b> by ₹6,000). Profits are rising, so the partners give weights 1, 2 and 3 and value goodwill at 3 years' purchase.</p>",
      qs: [
        { q: "Calculate goodwill by the weighted average profit method.", m: 4, type: "Calculate", c: "weighted", ans: "Adjusted 54,000, 48,000, 72,000; weighted average 61,000; goodwill 1,83,000", keys: ["61,000", "1,83,000"], hint: "Adjust first, then weight.",
          points: [{ p: "Adjusted: 54,000, 48,000, 72,000", m: 1, k: ["54,000", "48,000", "72,000"] }, { p: "Products: 54,000 + 96,000 + 2,16,000 = 3,66,000", m: 1, k: ["3,66,000", "366000"] }, { p: "Weighted average = 3,66,000 ÷ 6 = <b>₹61,000</b>", m: 1, k: ["61,000"] }, { p: "Goodwill = <b>₹1,83,000</b>", m: 1, k: ["1,83,000"] }],
          structure: ["Adjusted profits → products → ÷ 6 → × 3."],
          model: "<p>Adjusted: Year 1 48,000 + 6,000 = 54,000; Year 2 60,000 − 12,000 = 48,000; Year 3 66,000 + 6,000 = 72,000.</p><p>Products: 54,000 × 1 + 48,000 × 2 + 72,000 × 3 = 54,000 + 96,000 + 2,16,000 = <b>3,66,000</b>.</p><p>Weighted average = 3,66,000 ÷ 6 = <b>₹61,000</b>. Goodwill = 61,000 × 3 = <b>₹1,83,000</b>.</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "Two methods, one answer",
      text: "<p><span class='co'>Greenleaf Organics</span> has total assets of ₹6,40,000 (including goodwill of ₹40,000) and outside liabilities of ₹1,00,000. Its average profit is ₹90,000. The normal rate of return in the industry is 12%.</p>",
      qs: [
        { q: "Calculate goodwill by (a) capitalisation of average profit and (b) capitalisation of super profit. Comment on the result.", m: 6, type: "Calculate and compare", c: "cap", ans: "Capital employed 5,00,000; goodwill 2,50,000 by both methods", keys: ["5,00,000", "2,50,000"], hint: "Exclude goodwill from assets first.",
          points: [{ p: "Capital employed = 6,40,000 − 40,000 − 1,00,000 = <b>₹5,00,000</b>", m: 1, k: ["5,00,000", "500000"] }, { p: "Capitalised value = 90,000 × 100 ÷ 12 = <b>₹7,50,000</b>", m: 1, k: ["7,50,000", "750000"] }, { p: "(a) Goodwill = 7,50,000 − 5,00,000 = <b>₹2,50,000</b>", m: 1, k: ["2,50,000"] }, { p: "Normal profit = 5,00,000 × 12% = 60,000; super profit <b>₹30,000</b>", m: 1, k: ["60,000", "30,000"] }, { p: "(b) Goodwill = 30,000 × 100 ÷ 12 = <b>₹2,50,000</b>", m: 1, k: ["2,50,000"] }, { p: "Comment: both methods give the same goodwill", m: 1, k: ["same", "equal"] }],
          structure: ["Capital employed, then (a), then (b), then one-line comment."],
          model: "<p>Capital employed = 6,40,000 − 40,000 (goodwill) − 1,00,000 = <b>₹5,00,000</b>.</p><p><b>(a)</b> Capitalised value = 90,000 × 100 ÷ 12 = ₹7,50,000. Goodwill = 7,50,000 − 5,00,000 = <b>₹2,50,000</b>.</p><p><b>(b)</b> Normal profit = 5,00,000 × 12/100 = ₹60,000. Super profit = 90,000 − 60,000 = ₹30,000. Goodwill = 30,000 × 100 ÷ 12 = <b>₹2,50,000</b>.</p><p>Both methods value the excess return at the normal rate, so they give the <b>same</b> goodwill.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Equal from today",
      text: "<p><b>Aditi</b>, <b>Bhuvan</b> and <b>Charu</b> of <span class='co'>Tri-Star Events</span> share profits 5 : 3 : 2. From 1 April 2026 they will share <b>equally</b>. Goodwill is valued at ₹90,000; it is not in the books. Capitals are fluctuating.</p>",
      qs: [
        { q: "Calculate each partner's sacrifice or gain and pass the journal entry for goodwill.", m: 4, type: "Calculate and record", c: "entry", ans: "A sacrifices 5/30; B gains 1/30; C gains 4/30. Bhuvan Dr 3,000, Charu Dr 12,000, To Aditi 15,000", keys: ["15,000", "12,000", "3,000"], hint: "Work in 30ths.",
          points: [{ p: "Old 15, 9, 6; new 10, 10, 10 (30ths)", m: 1, k: ["30"] }, { p: "Aditi sacrifices 5/30; Bhuvan gains 1/30; Charu gains 4/30", m: 1, k: ["5/30", "1/30", "4/30"] }, { p: "Amounts: Aditi ₹15,000; Bhuvan ₹3,000; Charu ₹12,000", m: 1, k: ["15,000", "3,000", "12,000"] }, { p: "Entry: Bhuvan's and Charu's Capital A/cs Dr, To Aditi's Capital A/c", m: 1, k: ["dr", "to aditi"] }],
          structure: ["Table of old − new, amounts, journal entry."],
          model: "<table><tr><th>Partner</th><th>Old</th><th>New</th><th>Old − New</th><th>₹</th></tr><tr><td>Aditi</td><td>15/30</td><td>10/30</td><td>+5 (sacrifice)</td><td>15,000 Cr</td></tr><tr><td>Bhuvan</td><td>9/30</td><td>10/30</td><td>−1 (gain)</td><td>3,000 Dr</td></tr><tr><td>Charu</td><td>6/30</td><td>10/30</td><td>−4 (gain)</td><td>12,000 Dr</td></tr></table><p><b>Journal:</b> Bhuvan's Capital A/c Dr 3,000; Charu's Capital A/c Dr 12,000, To Aditi's Capital A/c 15,000 (being adjustment for goodwill on change in ratio).</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "mean", q: "Goodwill is a/an:", o: ["Fictitious asset", "Current asset", "Intangible asset", "Liquid asset"], a: 2, hint: "No physical form, but has value.", why: "<b>Intangible</b> asset." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "factors", q: "Which of these does NOT affect goodwill?", o: ["Location", "Efficiency of management", "Number of partners' children", "Market situation"], a: 2, hint: "Business factors only.", why: "Partners' family size has nothing to do with earning power." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "simple", q: "Average profit ₹50,000; goodwill at 3 years' purchase is:", o: ["₹50,000", "₹1,00,000", "₹1,50,000", "₹16,667"], a: 2, hint: "× 3.", why: "50,000 × 3 = <b>₹1,50,000</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "super", q: "Capital employed ₹4,00,000; normal rate 10%; average profit ₹55,000. Super profit is:", o: ["₹40,000", "₹15,000", "₹55,000", "₹95,000"], a: 1, hint: "55,000 − 40,000.", why: "Normal profit 40,000; super profit <b>₹15,000</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "adj", q: "Closing stock of Year 1 was overvalued by ₹3,000. Year 2's profit should be:", o: ["Reduced by ₹3,000", "Increased by ₹3,000", "Left unchanged", "Reduced by ₹6,000"], a: 1, hint: "Year 2's opening stock was too high.", why: "Opening stock too high made Year 2 cost too high and profit too low: <b>add ₹3,000</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "sacgain", q: "A and B share 3 : 2 and will now share equally. A's sacrifice is:", o: ["1/10", "1/5", "1/2", "Nil"], a: 0, hint: "6/10 − 5/10.", why: "<b>1/10</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "cap", q: "Average profit ₹60,000; normal rate 15%; capital employed ₹3,00,000. Goodwill by capitalisation of average profit is:", o: ["₹4,00,000", "₹1,00,000", "₹60,000", "₹45,000"], a: 1, hint: "60,000 × 100/15 − 3,00,000.", why: "4,00,000 − 3,00,000 = <b>₹1,00,000</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "entry", q: "A, B, C share 5 : 3 : 2 and change to 3 : 2 : 1. Goodwill ₹1,50,000. The entry is between:", o: ["A and B", "B and C", "A and C", "All three"], a: 1, hint: "In 30ths: 15/9/6 → 15/10/5.", why: "A unchanged; B gains 1/30, C sacrifices 1/30: <b>B and C</b> (₹5,000)." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "mean", q: "Goodwill is not a fictitious asset.", r: "Goodwill can be sold along with the business.", a: 0, hint: "Saleable?", why: "Both true; R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "exist", q: "Goodwill already in the books is written off among old partners in their new ratio.", r: "The old partners built the goodwill together.", a: 3, hint: "Which ratio?", why: "A is false (it is the <b>old</b> ratio); R is true." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "weighted", q: "The weighted average method is preferred when profits show a trend.", r: "It gives more importance to recent years' profits.", a: 0, hint: "Why weights?", why: "Both true; R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "mean", q: "Self-generated goodwill is recorded in the books.", a: false, hint: "AS 26.", why: "False: only purchased goodwill is recorded." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "adj", q: "A loss year is ignored while calculating average profit.", a: false, hint: "Minus sign.", why: "False: it is included as a negative figure." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "super", q: "If average profit is less than normal profit, there is no goodwill.", a: true, hint: "No super profit.", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "super", q: "Match the method with its formula.", pairs: [["Average profit method", "Average profit × years' purchase"], ["Super profit method", "Super profit × years' purchase"], ["Capitalisation of super profit", "Super profit × 100 ÷ normal rate"], ["Capitalisation of average profit", "Capitalised value − capital employed"]], hint: "Look at what is multiplied.", why: "Each method has one formula." },
    { id: "q16", t: "match", d: "M", m: 4, c: "adj", q: "Match the item with its adjustment to that year's profit.", pairs: [["Abnormal loss charged", "Add back to that year"], ["Abnormal gain included", "Deduct from that year"], ["Closing stock undervalued", "Add this year, deduct next year"], ["Manager's salary not charged", "Deduct from every year"]], hint: "Make the profit normal.", why: "Each adjustment makes the year's profit normal." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "super", q: "Super profit = Average profit − ______ profit.", acc: ["normal"], hint: "Expected return.", why: "Normal." },
    { id: "q18", t: "fill", d: "M", m: 1, c: "sacgain", q: "Sacrifice = ______ share − New share.", acc: ["old"], hint: "Before − after.", why: "Old." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "mean", q: "Goodwill is an ______ asset.", acc: ["intangible"], hint: "Cannot touch it.", why: "Intangible." },
    { id: "q20", t: "short", d: "E", m: 1, c: "need", q: "Name one occasion, other than a change in ratio, when goodwill is valued.", acc: ["admission", "retirement", "death", "sale", "amalgamation", "dissolution"], hint: "A partner joins or leaves.", why: "Admission, retirement, death, sale or amalgamation." },
    { id: "q21", t: "short", d: "M", m: 1, c: "entry", q: "Which partner's account is debited for goodwill on a change in ratio?", acc: ["gaining partner", "gainer", "gaining"], hint: "Who benefits?", why: "The <b>gaining</b> partner." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "factors", q: "Explain any three factors affecting the value of goodwill.", hint: "Location, management, market.", why: "",
      points: [{ p: "Location", m: 1, k: ["location"] }, { p: "Efficiency of management", m: 1, k: ["management"] }, { p: "Market situation / nature of business / special advantages", m: 1, k: ["market", "nature", "special", "monopoly"] }],
      model: "<p><b>(i) Location:</b> a centrally located business attracts more customers, so goodwill is higher.</p><p><b>(ii) Efficiency of management:</b> good management keeps costs low and profits high.</p><p><b>(iii) Market situation:</b> a monopoly or little competition lets the firm earn above-normal profit.</p>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "simple", q: "Profits of a firm: ₹40,000, ₹50,000, ₹60,000, ₹30,000 and ₹70,000. Calculate goodwill at 3 years' purchase of the average profit.", hint: "Total ÷ 5.", why: "",
      points: [{ p: "Total ₹2,50,000", m: 1, k: ["2,50,000", "250000"] }, { p: "Average ₹50,000", m: 1, k: ["50,000"] }, { p: "Goodwill <b>₹1,50,000</b>", m: 1, k: ["1,50,000"] }],
      model: "<p>Total = 40,000 + 50,000 + 60,000 + 30,000 + 70,000 = <b>₹2,50,000</b>.</p><p>Average = 2,50,000 ÷ 5 = <b>₹50,000</b>. Goodwill = 50,000 × 3 = <b>₹1,50,000</b>.</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "entry", q: "X and Y share 3 : 2. X surrenders 1/5 of his share in favour of Y. Goodwill is ₹1,25,000 (not in books); capitals are fixed. Calculate the new ratio and pass the entry.", hint: "Sacrifice = 1/5 × 3/5.", why: "",
      points: [{ p: "Sacrifice 3/25", m: 1, k: ["3/25"] }, { p: "New ratio 12 : 13", m: 1, k: ["12", "13"] }, { p: "Amount ₹15,000", m: 1, k: ["15,000"] }, { p: "Y's Current A/c Dr, To X's Current A/c", m: 1, k: ["current"] }],
      model: "<p>X's sacrifice = 1/5 × 3/5 = <b>3/25</b>. X's new share = 15/25 − 3/25 = 12/25; Y's = 10/25 + 3/25 = 13/25. New ratio <b>12 : 13</b>.</p><p>Amount = 1,25,000 × 3/25 = <b>₹15,000</b>.</p><p><b>Journal:</b> Y's Current A/c Dr 15,000, To X's Current A/c 15,000 (capitals are fixed).</p>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "adj", q: "Profits of three years were ₹50,000, ₹60,000 and ₹70,000 before charging a manager's remuneration of ₹12,000 a year. Year 3 profit includes an abnormal gain of ₹6,000. Calculate goodwill at 2 years' purchase of average adjusted profit.", hint: "Deduct 12,000 every year; deduct the gain in Year 3.", why: "",
      points: [{ p: "Year 1: 38,000; Year 2: 48,000", m: 1, k: ["38,000", "48,000"] }, { p: "Year 3: 70,000 − 12,000 − 6,000 = 52,000", m: 1, k: ["52,000"] }, { p: "Average ₹46,000", m: 1, k: ["46,000"] }, { p: "Goodwill <b>₹92,000</b>", m: 1, k: ["92,000"] }],
      model: "<p>Year 1: 50,000 − 12,000 = 38,000. Year 2: 60,000 − 12,000 = 48,000. Year 3: 70,000 − 12,000 − 6,000 = 52,000.</p><p>Total = 1,38,000; average = <b>₹46,000</b>; goodwill = 46,000 × 2 = <b>₹92,000</b>.</p>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "entry", q: "A, B and C share profits 3 : 2 : 1. From today C will get 3/5 of the profit and the rest will be shared equally by A and B. Goodwill is ₹3,90,000 (not in books). Capitals are fluctuating. Calculate sacrifices/gains and pass the entry.", hint: "New: A 6/30, B 6/30, C 18/30.", why: "",
      points: [{ p: "Old: 15/30, 10/30, 5/30", m: 1, k: ["15/30", "10/30", "5/30"] }, { p: "New: 6/30, 6/30, 18/30", m: 1, k: ["6/30", "18/30"] }, { p: "A sacrifices 9/30, B 4/30; C gains 13/30", m: 1, k: ["9/30", "4/30", "13/30"] }, { p: "C ₹1,69,000 Dr", m: 1, k: ["1,69,000"] }, { p: "A ₹1,17,000 Cr; B ₹52,000 Cr", m: 1, k: ["1,17,000", "52,000"] }, { p: "Entry: C's Capital A/c Dr, To A's and B's Capital A/cs", m: 1, k: ["c's capital", "dr"] }],
      model: "<p>Old: A 15/30, B 10/30, C 5/30. New: C 3/5 = 18/30; remaining 2/5 equally → A 6/30, B 6/30.</p><p>A: 15 − 6 = +9 (sacrifice); B: 10 − 6 = +4 (sacrifice); C: 5 − 18 = −13 (gain).</p><p>C: 3,90,000 × 13/30 = ₹1,69,000; A: 3,90,000 × 9/30 = ₹1,17,000; B: 3,90,000 × 4/30 = ₹52,000.</p><p><b>Journal:</b> C's Capital A/c Dr 1,69,000, To A's Capital A/c 1,17,000, To B's Capital A/c 52,000.</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "super", q: "A firm's capital employed is ₹8,00,000 and the normal rate of return is 10%. Profits for three years were ₹1,10,000, ₹1,20,000 and ₹1,30,000. Calculate goodwill by (a) super profit at 3 years' purchase and (b) capitalisation of super profit.", hint: "Average 1,20,000; normal 80,000.", why: "",
      points: [{ p: "Average profit ₹1,20,000", m: 1, k: ["1,20,000"] }, { p: "Normal profit ₹80,000", m: 1, k: ["80,000"] }, { p: "Super profit ₹40,000", m: 1, k: ["40,000"] }, { p: "(a) Goodwill ₹1,20,000", m: 1, k: ["1,20,000"] }, { p: "(b) 40,000 × 100 ÷ 10", m: 1, k: ["100"] }, { p: "(b) Goodwill ₹4,00,000", m: 1, k: ["4,00,000"] }],
      model: "<p>Average profit = 3,60,000 ÷ 3 = <b>₹1,20,000</b>. Normal profit = 8,00,000 × 10% = <b>₹80,000</b>. Super profit = <b>₹40,000</b>.</p><p><b>(a)</b> Goodwill = 40,000 × 3 = <b>₹1,20,000</b>.</p><p><b>(b)</b> Goodwill = 40,000 × 100 ÷ 10 = <b>₹4,00,000</b>.</p>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "factors", q: "Two identical bakeries; one has a monopoly licence near a college. Its goodwill is higher because of", o: ["Special advantage", "Fixed capital", "Weighted average", "Low drawings"], a: 0, hint: "Licence.", why: "<b>Special advantage</b>." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "exist", q: "Goodwill of ₹30,000 is in the books when A and B (3 : 2) change to equal. First step:", o: ["Write it off in 3 : 2", "Write it off equally", "Ignore it", "Raise it to market value"], a: 0, hint: "Old ratio.", why: "Write off in the <b>old ratio</b> 3 : 2." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "cap", q: "Total assets ₹5,50,000 include goodwill ₹50,000; liabilities ₹1,00,000. Capital employed is", o: ["₹5,50,000", "₹4,50,000", "₹4,00,000", "₹5,00,000"], a: 2, hint: "Exclude goodwill.", why: "5,50,000 − 50,000 − 1,00,000 = <b>₹4,00,000</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "need", passage: "Partners of <b>Lakeview Studio</b> decide that from next year the junior partner will get a bigger share.", q: "Goodwill must be valued because of", o: ["Change in profit-sharing ratio", "Admission", "Dissolution", "Amalgamation"], a: 0, hint: "Shares change, nobody joins.", why: "<b>Change in profit-sharing ratio</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "weighted", passage: "<b>Swift Couriers</b> earned ₹20,000, ₹40,000 and ₹60,000 in three years. Weights 1, 2, 3.", q: "Weighted average profit is", o: ["₹40,000", "₹46,667", "₹2,80,000", "₹50,000"], a: 1, hint: "2,80,000 ÷ 6.", why: "20,000 + 80,000 + 1,80,000 = 2,80,000; ÷ 6 = <b>₹46,667</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "adj", passage: "Profits of <b>Delta Traders</b>: Year 2 ₹48,000 after a ₹10,000 loss on sale of machinery; Year 1 closing stock was undervalued by ₹5,000.", q: "Adjusted Year 2 profit is", o: ["₹63,000", "₹53,000", "₹43,000", "₹58,000"], a: 1, hint: "+10,000 loss; −5,000 for undervalued opening stock.", why: "48,000 + 10,000 − 5,000 = <b>₹53,000</b>." }
  ],
  find: {
    mcq: [
      { s: "A firm can sell its name and customer list for ₹2 lakh along with the shop.", o: ["Goodwill", "Fictitious asset", "Capital employed", "Super profit"], a: 0, c: "mean", d: "E", why: "<b>Goodwill</b>: value of reputation." },
      { s: "A medical store next to the city hospital earns more than others.", o: ["Location", "Management", "Special advantage", "Nature of business"], a: 0, c: "factors", d: "E", why: "<b>Location</b>." },
      { s: "A new partner joins the firm; the old partners want to be paid for the share they give up.", o: ["Need for valuation of goodwill", "Past adjustment", "Guarantee", "Interest on capital"], a: 0, c: "need", d: "E", why: "Admission: goodwill must be <b>valued</b>." },
      { s: "Profits of five years are totalled and divided by five, then multiplied by 3.", o: ["Simple average method", "Weighted average", "Super profit", "Capitalisation"], a: 0, c: "simple", d: "E", why: "<b>Simple average</b>." },
      { s: "Later years' profits are multiplied by bigger numbers before averaging.", o: ["Weighted average method", "Simple average", "Super profit", "Sacrificing ratio"], a: 0, c: "weighted", d: "M", why: "<b>Weighted average</b>." },
      { s: "A one-time insurance claim is removed from last year's profit before valuing goodwill.", o: ["Adjusting past profits", "Capitalisation", "Gaining ratio", "Write-off"], a: 0, c: "adj", d: "M", why: "Removing an abnormal gain: <b>adjusting past profits</b>." },
      { s: "Average profit minus 10% of capital employed is multiplied by 2.", o: ["Super profit method", "Capitalisation", "Simple average", "Weighted average"], a: 0, c: "super", d: "M", why: "<b>Super profit × years' purchase</b>." },
      { s: "Average profit × 100 ÷ normal rate, less net assets.", o: ["Capitalisation of average profit", "Capitalisation of super profit", "Super profit", "Weighted average"], a: 0, c: "cap", d: "M", why: "<b>Capitalisation of average profit</b>." },
      { s: "Old share 6/10, new share 5/10: the partner gives up 1/10.", o: ["Sacrifice", "Gain", "Write-off", "Guarantee"], a: 0, c: "sacgain", d: "M", why: "Old − new positive: <b>sacrifice</b>." },
      { s: "B's Capital A/c Dr ₹10,000, To A's Capital A/c ₹10,000 on a change from 3 : 2 to equal.", o: ["Adjustment entry for goodwill", "Write-off of goodwill", "Interest on capital", "Past adjustment"], a: 0, c: "entry", d: "M", why: "Gainer pays sacrificer: <b>adjustment entry</b>." },
      { s: "Goodwill A/c of ₹30,000 is closed by debiting old partners 3 : 2.", o: ["Writing off existing goodwill", "Raising goodwill", "Sacrifice", "Super profit"], a: 0, c: "exist", d: "C", why: "<b>Write-off of existing goodwill</b> in the old ratio." },
      { s: "Profit is ₹50,000 but a fair return on capital would be ₹60,000.", o: ["No goodwill", "Goodwill ₹10,000", "Goodwill ₹60,000", "Goodwill ₹50,000"], a: 0, c: "super", d: "C", why: "No super profit → <b>no goodwill</b>." },
      { s: "Two methods give the same goodwill of ₹2,50,000.", o: ["Both capitalisation methods", "Simple and weighted average", "Super profit and simple average", "Sacrificing and gaining ratio"], a: 0, c: "cap", d: "C", why: "The two <b>capitalisation</b> methods always agree." },
      { s: "In a change from 5 : 3 : 2 to 3 : 2 : 1, the first partner's share stays 15/30.", o: ["Left out of the entry", "Debited", "Credited", "Gets half"], a: 0, c: "entry", d: "C", why: "No change → <b>no entry</b> for that partner." },
      { s: "Year 3 profit is reduced because its opening stock was undervalued.", o: ["Stock error carried forward", "Abnormal gain", "Capital expenditure", "Weighted average"], a: 0, c: "adj", d: "C", why: "Opening stock too low → profit too high: deduct. <b>Stock error</b>." },
      { s: "A partner gives 1/4 of his own 2/5 share to another.", o: ["Sacrifice 1/10", "Sacrifice 1/4", "Gain 2/5", "Sacrifice 2/5"], a: 0, c: "sacgain", d: "C", why: "1/4 × 2/5 = <b>1/10</b>." }
    ],
    match: [
      { title: "Drag each situation onto its concept.", pairs: [["Shop beside the busiest junction", "Location", "factors"], ["Add back last year's fire loss", "Adjusting past profits", "adj"], ["Profits × 1, 2, 3 then ÷ 6", "Weighted average", "weighted"], ["Average − normal profit", "Super profit", "super"], ["Old share − new share > 0", "Sacrifice", "sacgain"], ["Goodwill in books debited to old partners", "Write-off of existing goodwill", "exist"]] }
    ],
    wrong: [
      { stmts: ["Goodwill is an intangible asset.", "Goodwill can be sold.", "Goodwill is a fictitious asset.", "Self-generated goodwill is not recorded."], a: 2, c: "mean", why: "Goodwill is <b>not fictitious</b>." },
      { stmts: ["Abnormal loss charged → add back.", "Abnormal gain included → deduct.", "Closing stock overvalued → add to that year.", "Future salary not charged → deduct."], a: 2, c: "adj", why: "Overvalued closing stock → <b>deduct</b> from that year." },
      { stmts: ["Gaining partner is debited.", "Sacrificing partner is credited.", "A partner with no change is left out.", "Existing goodwill is written off in the new ratio."], a: 3, c: "entry", why: "Existing goodwill is written off in the <b>old</b> ratio." }
    ],
    para: [
      { target: "Special advantage", c: "factors", sents: ["Rao & Sons make packaged water.", "They have a 30-year lease on a spring at a very low rent.", "Their trucks are painted blue.", "They sell in three districts."], a: 1, why: "A cheap long lease: <b>special advantage</b>." },
      { target: "Adjusting past profits", c: "adj", sents: ["The partners collected five years' accounts.", "The accountant removed a one-time gain from the sale of land.", "He then found the average.", "Goodwill was valued at 2 years' purchase."], a: 1, why: "Removing an abnormal gain: <b>adjusting profits</b>." },
      { target: "Adjustment entry for goodwill", c: "entry", sents: ["Asha and Bina agreed to share equally from April.", "Goodwill was valued at ₹80,000.", "Bina's Capital A/c was debited ₹8,000 and Asha's credited.", "The firm then opened a new branch."], a: 2, why: "Gainer debited, sacrificer credited: <b>adjustment entry</b>." }
    ],
    explain: [
      { s: "A partner's share falls from 1/2 to 2/5.", o: ["Sacrifice of 1/10", "Gain of 1/10", "No change", "Sacrifice of 2/5"], a: 0, c: "sacgain", why: "The clue is <i>falls</i>: 5/10 − 4/10 = <b>sacrifice 1/10</b>." },
      { s: "Goodwill is the extra profit × 100 ÷ 12.", o: ["Capitalisation of super profit", "Super profit method", "Simple average", "Weighted average"], a: 0, c: "cap", why: "× 100 ÷ rate on super profit: <b>capitalisation of super profit</b>." },
      { s: "Profits of ₹10,000, ₹20,000, ₹30,000 are multiplied by 1, 2, 3.", o: ["Weighted average", "Simple average", "Super profit", "Adjustment"], a: 0, c: "weighted", why: "Weights → <b>weighted average</b>." },
      { s: "A firm with 25 years of trusted service earns more than a new rival.", o: ["Goodwill from reputation", "Super profit method", "Gaining ratio", "Capital employed"], a: 0, c: "mean", why: "Long trusted service builds <b>goodwill</b>." }
    ]
  }
});
