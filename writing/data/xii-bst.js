/* Answer Writing Lab · Class XII Business Studies. Original questions and answers. */
NFWrite.register({
  slug: "xii-bst", cls: "XII", subject: "Business Studies",
  intro: "Business Studies answers are marked point by point. Every mark needs a clear heading, a one-line explanation and, for case questions, a line quoted from the case.",
  rules: [
    { t: "Heading first", b: "Start every point with a <b>bold or underlined heading</b> (the term itself), then explain it in one or two lines. Examiners scan for headings." },
    { t: "One point = one mark", b: "A 4-mark 'explain' question needs <b>four separate points</b>. A 3-mark question with 'state three' needs three. Count before you write." },
    { t: "Quote the case", b: "In case-based questions, identify the concept <b>and</b> quote the exact line from the case that shows it. 'Identify and quote' carries a mark each." },
    { t: "Distinguish in a table", b: "For 'distinguish between', draw a <b>table with a 'Basis' column</b>. Each row is one mark; the same basis must appear on both sides." },
    { t: "Command words", b: "<b>State</b> = name it in a line. <b>Explain</b> = name + 1–2 lines. <b>Describe</b> = explain with an example. <b>Identify</b> = name the concept only." },
    { t: "Use the textbook term", b: "Write 'unity of command', not 'one boss'. Marks go to the correct technical term." }
  ],
  questions: [
    {
      id: "q1", ch: "ch02", chTitle: "Principles of Management", marks: 3, cmd: "Explain",
      q: "Explain any three points that highlight the significance of principles of management.",
      ask: "Three separate points, each with a heading and a one-line explanation. No example needed for 3 marks, but one helps.",
      points: [
        { p: "Heading + explanation of point 1 (e.g. providing managers with useful insights into reality)", m: 1, k: ["insight", "reality"] },
        { p: "Heading + explanation of point 2 (e.g. optimum utilisation of resources)", m: 1, k: ["optimum", "resources", "utilisation", "utilization"] },
        { p: "Heading + explanation of point 3 (e.g. scientific decisions / meeting changing environment / social responsibility / training)", m: 1, k: ["scientific decision", "changing environment", "social responsibilit", "training", "research"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Principles of management are very important for managers. They help managers to do their work in a better way and use resources properly. They also help in taking decisions. Without principles the business will not run well.</p>",
          notes: ["No headings: the examiner has to hunt for points.", "'Use resources properly' earns 1 mark as optimum utilisation, but 'help in taking decisions' is too vague to earn a second mark.", "The last line is filler and earns nothing."] },
        good: { score: 2, text: "<p><b>1. Optimum utilisation of resources:</b> Principles help managers use men, money and materials without waste.</p><p><b>2. Scientific decisions:</b> Decisions become logical and objective.</p><p><b>3. Helps the business grow:</b> Following principles makes the business successful.</p>",
          notes: ["Points 1 and 2 are correct and headed: 2 marks.", "Point 3 is not a textbook significance; 'helps the business grow' is too general and earns nothing.", "Point 2 should add why: decisions are based on facts and free from personal bias."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\"><b>1. Providing managers with useful insights into reality:</b> Principles add to managers' knowledge and understanding of situations, so they learn from past mistakes and save time.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. Optimum utilisation of resources:</b> Principles show cause-and-effect relationships, helping managers use human and material resources with minimum waste.</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Scientific decisions:</b> Decisions based on principles are logical, objective and free from personal bias.</span></p>",
          notes: ["Three textbook headings, each followed by a one-line reason.", "Each point is separate and numbered, so the examiner can tick three marks quickly.", "Length is right for 3 marks: about 70 words."] }
      },
      mistakes: ["Writing a paragraph without headings.", "Giving the <b>nature</b> of principles (flexible, general guidelines) when the question asks for <b>significance</b>.", "Repeating the same idea in different words as two points."],
      tip: "Learn significance and nature as two separate lists. Questions often swap one for the other."
    },
    {
      id: "q2", ch: "ch05", chTitle: "Organising", marks: 4, cmd: "Identify and explain",
      q: "<i>FreshCrate Ltd</i> sells packed vegetables. Its CEO has kept the authority to approve every purchase above ₹500 with himself. Store managers wait days for approval, and fresh stock is often spoilt. (a) Identify the concept the CEO is not following. (b) Explain two importance of this concept for FreshCrate.",
      ask: "(a) Name the concept and quote the line that shows it is missing (2 marks). (b) Two points of importance, linked to the case (2 marks).",
      points: [
        { p: "Identifies <b>decentralisation</b> (the CEO follows centralisation)", m: 1, k: ["decentrali"] },
        { p: "Quotes the line: 'kept the authority to approve every purchase above ₹500 with himself'", m: 1, k: ["approve every purchase", "with himself", "₹500", "500"] },
        { p: "Importance 1, e.g. quick decision-making (store managers would not wait days)", m: 1, k: ["quick decision", "quicker decision", "faster decision"] },
        { p: "Importance 2, e.g. relief to top management / develops managerial talent / better control", m: 1, k: ["relief", "top management", "talent", "initiative", "control"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>(a) Delegation.</p><p>(b) It is important because work is divided and managers become free. It also helps in growth of the company.</p>",
          notes: ["'Delegation' is wrong. The case is about authority being kept at the top level across the whole organisation, which is <b>centralisation vs decentralisation</b>.", "No line is quoted from the case.", "'Managers become free' is close to 'relief to top management', so 1 mark is possible; 'growth' is too vague."] },
        good: { score: 3, text: "<p>(a) The CEO is not following <b>decentralisation</b>. He keeps all authority with himself.</p><p>(b) <b>Quick decisions:</b> Lower managers can take decisions on the spot.</p><p><b>Develops managers:</b> Lower-level managers get a chance to take initiative.</p>",
          notes: ["Concept is correct: 1 mark.", "'He keeps all authority with himself' is a paraphrase, not a quote. Quote the case's own words for the mark.", "Both points of importance are correct, but neither is linked to FreshCrate. Here they still earn the marks; in stricter schemes, linking secures them."] },
        full: { score: 4, text: "<p><b>(a)</b> <span class=\"mp\" data-p=\"1\">The CEO is not following <b>decentralisation</b>; he is practising centralisation.</span> <span class=\"mp\" data-p=\"2\">This is shown by: <i>\"Its CEO has kept the authority to approve every purchase above ₹500 with himself.\"</i></span></p><p><b>(b)</b> <span class=\"mp\" data-p=\"3\"><b>1. Quick decision-making:</b> If store managers could approve purchases themselves, fresh stock would be bought at once and would not be spoilt while waiting.</span></p><p><span class=\"mp\" data-p=\"4\"><b>2. Relief to top management:</b> The CEO would be free of routine approvals and could focus on strategic matters like expansion.</span></p>",
          notes: ["Concept named correctly, with the quoted line in quotation marks.", "Each importance has a heading and is tied back to FreshCrate's problem.", "Clear (a) and (b) labels make marking easy."] }
      },
      mistakes: ["Confusing <b>delegation</b> (one manager to a subordinate) with <b>decentralisation</b> (authority spread across all levels).", "Not quoting the case when the question says 'identify'.", "Writing importance of delegation instead of decentralisation."],
      tip: "If the case talks about the whole organisation or 'every' decision, think decentralisation. If it is one manager and one subordinate, think delegation."
    },
    {
      id: "q3", ch: "ch04", chTitle: "Planning", marks: 3, cmd: "Distinguish",
      q: "Distinguish between a policy and a procedure on any three bases.",
      ask: "A table with a 'Basis' column and three rows. Each row is one mark only if both sides answer the same basis.",
      points: [
        { p: "Basis 1 with both sides correct (e.g. meaning / nature: guide to thinking vs guide to action)", m: 1, k: ["guide to thinking", "guide to action", "meaning", "nature"] },
        { p: "Basis 2 with both sides correct (e.g. flexibility: flexible vs rigid / fixed sequence)", m: 1, k: ["flexib", "rigid", "sequence"] },
        { p: "Basis 3 with both sides correct (e.g. level: framed by top management vs middle management / scope: broad vs narrow)", m: 1, k: ["top management", "middle", "broad", "narrow", "scope", "level"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>A policy is a general statement that guides decision-making. A procedure tells the steps to do work. Policies are made by top management. Procedures are flexible.</p>",
          notes: ["Written as a paragraph, not a table: harder to mark.", "The meanings are correct: 1 mark.", "'Procedures are flexible' is wrong. Procedures are <b>rigid</b>, with a fixed sequence of steps. Policies are flexible.", "'Made by top management' gives only one side of the basis."] },
        good: { score: 2, text: "<table><tr><th>Policy</th><th>Procedure</th></tr><tr><td>General statement guiding thinking</td><td>Steps for doing a routine job</td></tr><tr><td>Flexible</td><td>Rigid</td></tr><tr><td>Made for the whole organisation</td><td>Made by middle management</td></tr></table>",
          notes: ["A table is used, but there is no 'Basis' column, so each row's meaning is unclear.", "Rows 1 and 2 are correct: 2 marks.", "Row 3 compares two different things: <b>scope</b> on one side and <b>level</b> on the other. A row needs the same basis on both sides."] },
        full: { score: 3, text: "<table><tr><th>Basis</th><th>Policy</th><th>Procedure</th></tr><tr><td>Meaning</td><td><span class=\"mp\" data-p=\"1\">A general guide to thinking and decision-making</span></td><td>A guide to action: a sequence of steps for routine work</td></tr><tr><td>Flexibility</td><td><span class=\"mp\" data-p=\"2\">Flexible; leaves room for judgement</span></td><td>Rigid; steps follow a fixed order</td></tr><tr><td>Level</td><td><span class=\"mp\" data-p=\"3\">Framed by top management</span></td><td>Framed by middle management</td></tr></table>",
          notes: ["A Basis column makes each row a clear, separate mark.", "Both sides of every row answer the same basis.", "Short phrases are enough in a table; no long sentences needed."] }
      },
      mistakes: ["Writing a paragraph instead of a table.", "Mismatched rows: a different basis on each side.", "Reversing flexibility: <b>policies</b> are flexible, <b>procedures</b> are rigid."],
      tip: "Draw the table before you write anything. Fill the Basis column first, then each side."
    },
    {
      id: "q4", ch: "ch11", chTitle: "Marketing Management", marks: 4, cmd: "Explain",
      q: "Explain any four functions of packaging.",
      ask: "Four functions, each with a heading and a line on how packaging does it. The question asks for <b>functions</b>, not levels or importance.",
      points: [
        { p: "Product identification", m: 1, k: ["identif"] },
        { p: "Product protection", m: 1, k: ["protect"] },
        { p: "Facilitating use of the product", m: 1, k: ["facilitat", "convenien", "use of the product", "easy to use"] },
        { p: "Product promotion", m: 1, k: ["promot", "silent salesman"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Packaging is very important in today's world. There are three levels of packaging: primary, secondary and transportation. Packaging protects the product from damage.</p>",
          notes: ["Levels of packaging are not functions: no marks for that line.", "'Protects the product from damage' is one function: 1 mark.", "Only one function given for a 4-mark question."] },
        good: { score: 3, text: "<p><b>1. Protection:</b> Packaging protects the product from breakage, moisture and dust.</p><p><b>2. Promotion:</b> An attractive pack helps sell the product.</p><p><b>3. Identification:</b> Packaging helps identify the product.</p><p><b>4. Rising standard of health:</b> Packed goods are hygienic.</p>",
          notes: ["Protection, promotion and identification are correct: 3 marks.", "'Rising standard of health' is an <b>importance</b> of packaging, not a function. Use 'facilitating use of the product' instead.", "'Helps identify the product' repeats the heading; add how (e.g. a distinct shape or colour)."] },
        full: { score: 4, text: "<p><span class=\"mp\" data-p=\"1\"><b>1. Product identification:</b> A distinctive pack, colour or shape helps customers recognise the product on a crowded shelf.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. Product protection:</b> Packaging protects the contents from spoilage, breakage, leakage and pilferage during storage and transport.</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Facilitating use of the product:</b> Packs that are easy to open, pour, carry and reseal make the product convenient to use.</span></p><p><span class=\"mp\" data-p=\"4\"><b>4. Product promotion:</b> An attractive pack catches the buyer's eye and acts as a 'silent salesman'.</span></p>",
          notes: ["All four textbook functions, each with a heading.", "Each explanation says <b>how</b> packaging performs the function.", "Nothing extra about levels or importance."] }
      },
      mistakes: ["Writing the <b>levels</b> of packaging (primary, secondary, transportation).", "Mixing up <b>functions</b> with <b>importance</b> (health, self-service, innovation).", "Explaining packaging as labelling."],
      tip: "Remember the four functions as I-P-F-P: Identification, Protection, Facilitating use, Promotion."
    },
    {
      id: "q5", ch: "ch07", chTitle: "Directing", marks: 5, cmd: "Explain",
      q: "Explain any five non-financial incentives that a manager can use to motivate employees.",
      ask: "Five separate non-financial incentives, each with a heading and a short explanation of how it motivates. Bonus, commission and perks are financial, so no marks.",
      points: [
        { p: "Status", m: 1, k: ["status"] },
        { p: "Organisational climate", m: 1, k: ["climate"] },
        { p: "Career advancement opportunity", m: 1, k: ["career", "promotion", "advancement"] },
        { p: "Job enrichment", m: 1, k: ["enrich"] },
        { p: "Employee recognition / job security / participation / empowerment (any one)", m: 1, k: ["recognition", "job security", "participation", "empower"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>Non-financial incentives are incentives not in money. Examples are promotion, recognition, bonus, good working conditions and perks. These motivate employees to work hard.</p>",
          notes: ["A list without explanation: 'explain' needs a line on each.", "<b>Bonus</b> and <b>perks</b> are financial incentives, so they earn nothing and show confusion.", "Promotion and recognition are valid: 2 marks at most, even unexplained in a lenient scheme."] },
        good: { score: 4, text: "<p><b>1. Status:</b> Giving employees a higher rank and prestige.</p><p><b>2. Job security:</b> Employees want stable jobs.</p><p><b>3. Employee recognition:</b> Praising good work.</p><p><b>4. Career advancement:</b> Chances of promotion.</p><p><b>5. Productivity-linked wages:</b> Wages increase with output.</p>",
          notes: ["Four correct non-financial incentives with headings: 4 marks.", "<b>Productivity-linked wage incentives</b> are financial: no mark for point 5.", "Explanations are very short; add how each motivates (e.g. 'recognition satisfies esteem needs')."] },
        full: { score: 5, text: "<p><span class=\"mp\" data-p=\"1\"><b>1. Status:</b> A higher position, title or office gives prestige and satisfies employees' esteem needs.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. Organisational climate:</b> A culture of trust, autonomy and reward for good work makes employees feel valued.</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Career advancement opportunity:</b> Training and promotion paths motivate employees to improve their skills.</span></p><p><span class=\"mp\" data-p=\"4\"><b>4. Job enrichment:</b> Jobs with more variety, responsibility and challenge make work interesting.</span></p><p><span class=\"mp\" data-p=\"5\"><b>5. Employee recognition:</b> Praising good work in public, through certificates or 'employee of the month', boosts morale.</span></p>",
          notes: ["Five correct non-financial incentives, none financial.", "Each says how it motivates, often linked to a need (esteem, growth).", "Headings make the five marks easy to award."] }
      },
      mistakes: ["Including bonus, perks, profit sharing or co-partnership (all financial).", "Listing without explaining.", "Writing Maslow's needs instead of incentives."],
      tip: "Before writing, ask of each point: 'Is money directly involved?' If yes, it is financial."
    },
    {
      id: "q6", ch: "ch09", chTitle: "Financial Management", marks: 6, cmd: "Explain",
      q: "Explain any six factors affecting the working capital requirements of a business.",
      ask: "Six factors, each with a heading and a line saying how it changes working capital (more or less). Direction matters.",
      points: [
        { p: "Nature of business (trading/service needs less; manufacturing needs more)", m: 1, k: ["nature of business"] },
        { p: "Scale of operations", m: 1, k: ["scale"] },
        { p: "Business cycle (boom needs more, depression less)", m: 1, k: ["business cycle", "boom", "depression"] },
        { p: "Seasonal factors", m: 1, k: ["season"] },
        { p: "Production cycle / operating cycle", m: 1, k: ["production cycle", "operating cycle"] },
        { p: "Credit allowed / credit availed / growth prospects / inflation / competition (any one)", m: 1, k: ["credit allowed", "credit availed", "growth", "inflation", "competition"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>Working capital means current assets minus current liabilities. It depends on many factors like size of business, type of business, profits, fixed assets, inflation and dividend policy.</p>",
          notes: ["The definition is fine but carries no marks here.", "Size (scale) and type (nature) are valid but unexplained: up to 2 marks.", "Profits, fixed assets and dividend policy are <b>not</b> factors affecting working capital: they belong to other topics."] },
        good: { score: 4, text: "<p><b>1. Nature of business:</b> Manufacturing firms need more working capital.</p><p><b>2. Scale of operations:</b> Larger firms need more.</p><p><b>3. Seasonal factors:</b> More is needed in peak season.</p><p><b>4. Credit allowed:</b> Liberal credit to customers needs more working capital.</p><p><b>5. Technology upgradation:</b> New technology needs more money.</p><p><b>6. Choice of technique:</b> Capital-intensive techniques need more.</p>",
          notes: ["Points 1 to 4 are correct with direction: 4 marks.", "Points 5 and 6 are factors affecting <b>fixed</b> capital, not working capital: no marks.", "Fixed and working capital factors are a common mix-up."] },
        full: { score: 6, text: "<p><span class=\"mp\" data-p=\"1\"><b>1. Nature of business:</b> A trading firm needs less working capital than a manufacturing firm, which must hold raw materials, work-in-progress and finished goods.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. Scale of operations:</b> Larger firms carry more stock and debtors, so they need more working capital.</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Business cycle:</b> In a boom, sales and production rise, so more working capital is needed; in a depression, less.</span></p><p><span class=\"mp\" data-p=\"4\"><b>4. Seasonal factors:</b> In the peak season, more stock and activity require more working capital.</span></p><p><span class=\"mp\" data-p=\"5\"><b>5. Production cycle:</b> A longer time between buying raw materials and producing goods ties up funds, so more working capital is needed.</span></p><p><span class=\"mp\" data-p=\"6\"><b>6. Credit allowed:</b> A liberal credit policy towards customers increases debtors and so raises working capital needs.</span></p>",
          notes: ["Six correct factors, none borrowed from fixed capital.", "Every point states the <b>direction</b> (more or less working capital).", "Headings are the exact textbook terms."] }
      },
      mistakes: ["Writing factors of <b>fixed</b> capital (technology upgradation, choice of technique, diversification, financing alternatives).", "Not saying whether working capital rises or falls.", "Writing the factors of capital structure instead."],
      tip: "Working capital factors are about day-to-day cycles: stock, debtors, seasons and credit. Fixed capital factors are about long-term assets and technology."
    }
  ]
});
