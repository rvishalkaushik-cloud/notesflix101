/* Answer Writing Lab · Class XII Economics. Original questions; every figure recomputed. */
NFWrite.register({
  slug: "xii-eco", cls: "XII", subject: "Economics",
  intro: "Economics answers need the right term, the right formula and the cause-and-effect chain. Numericals reward each step; theory rewards logic, written as A → B → C.",
  rules: [
    { t: "Show the chain", b: "Write cause and effect step by step: 'repo rate rises → borrowing costlier → credit falls → demand falls'. Each link can carry a mark." },
    { t: "Formula, then numbers", b: "In numericals, write the <b>formula</b>, substitute, and give the answer with units (₹ crore). Steps earn marks even if the final figure is wrong." },
    { t: "Name the aggregate", b: "Always label which aggregate you found: <b>NDP<sub>FC</sub></b>, <b>NNP<sub>FC</sub></b>, <b>GDP<sub>MP</sub></b>. Unlabelled totals lose marks." },
    { t: "Diagrams when asked", b: "If the question says 'with a diagram', draw and <b>label axes, curves and equilibrium</b>. An unlabelled diagram earns little." },
    { t: "Distinguish in a table", b: "For 'distinguish', use a table with a <b>Basis</b> column." },
    { t: "Indian Economy with facts", b: "In Indian Economic Development, add a <b>specific fact</b> (year, state, scheme) to each point: 'HYV seeds, first in Punjab, AP and TN'." }
  ],
  questions: [
    {
      id: "q1", ch: "eco12-ni", chTitle: "National Income", marks: 4, cmd: "Calculate",
      q: "From the following data (₹ crore), calculate (a) National Income and (b) Gross Domestic Product at Market Price: Compensation of employees 800; Rent 150; Interest 120; Profit 300; Mixed income of self-employed 200; Net indirect taxes 90; Depreciation 60; Net factor income from abroad (−)20.",
      ask: "Income method: first NDP<sub>FC</sub>, then add NFIA for National Income (NNP<sub>FC</sub>); for GDP<sub>MP</sub>, add depreciation and net indirect taxes to NDP<sub>FC</sub>.",
      points: [
        { p: "NDP<sub>FC</sub> = 800 + 150 + 120 + 300 + 200 = ₹1,570 crore", m: 1, k: ["1,570", "1570"] },
        { p: "National Income (NNP<sub>FC</sub>) = 1,570 + (−20) = ₹1,550 crore", m: 1, k: ["1,550", "1550"] },
        { p: "Formula: GDP<sub>MP</sub> = NDP<sub>FC</sub> + Depreciation + Net indirect taxes", m: 1, k: ["depreciation +", "+ depreciation", "ndp"] },
        { p: "GDP<sub>MP</sub> = 1,570 + 60 + 90 = ₹1,720 crore", m: 1, k: ["1,720", "1720"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>National income = 800 + 150 + 120 + 300 + 200 = 1,570</p><p>GDP = 1,570 + 60 + 90 − 20 = 1,700</p>",
          notes: ["1,570 is <b>NDP<sub>FC</sub></b>, not National Income: NFIA (−20) must be added. 1 mark for the correct sum.", "GDP is <b>domestic</b>: NFIA is not included in it.", "No units, no labels."] },
        good: { score: 3, text: "<p>NDP<sub>FC</sub> = 800 + 150 + 120 + 300 + 200 = ₹1,570 crore</p><p>National Income (NNP<sub>FC</sub>) = 1,570 − 20 = ₹1,550 crore</p><p>GDP<sub>MP</sub> = ₹1,720 crore</p>",
          notes: ["NDP, NNP and the final GDP figure are right: 3 marks.", "The GDP<sub>MP</sub> step jumps to the answer. Write the formula and substitution: NDP<sub>FC</sub> + Dep. + NIT = 1,570 + 60 + 90."] },
        full: { score: 4, text: "<p><span class=\"mp\" data-p=\"1\"><b>NDP<sub>FC</sub></b> = Compensation of employees + Rent + Interest + Profit + Mixed income<br>= 800 + 150 + 120 + 300 + 200 = <b>₹1,570 crore</b></span></p><p><span class=\"mp\" data-p=\"2\"><b>(a) National Income (NNP<sub>FC</sub>)</b> = NDP<sub>FC</sub> + NFIA = 1,570 + (−20) = <b>₹1,550 crore</b></span></p><p><span class=\"mp\" data-p=\"3\"><b>(b) GDP<sub>MP</sub></b> = NDP<sub>FC</sub> + Depreciation + Net indirect taxes</span><br><span class=\"mp\" data-p=\"4\">= 1,570 + 60 + 90 = <b>₹1,720 crore</b></span></p>",
          notes: ["Each aggregate is named before its value.", "NFIA used only for the national aggregate; GDP stays domestic.", "Formulas written in words, then numbers, with units."] }
      },
      mistakes: ["Calling NDP<sub>FC</sub> 'national income'.", "Adding NFIA while finding a domestic aggregate.", "Forgetting the minus sign on NFIA."],
      tip: "'National' = add NFIA. 'Gross' = add depreciation. 'Market price' = add net indirect taxes."
    },
    {
      id: "q2", ch: "eco12-income", chTitle: "Determination of Income and Employment", marks: 3, cmd: "Calculate",
      q: "In an economy the marginal propensity to consume is 0.8. If investment increases by ₹500 crore, calculate the investment multiplier and the total increase in income.",
      ask: "Multiplier formula, its value, and ΔY = k × ΔI.",
      points: [
        { p: "Formula: k = 1 ÷ (1 − MPC)", m: 1, k: ["1 − mpc", "1-mpc", "1 - mpc", "1/(1"] },
        { p: "k = 1 ÷ 0.2 = 5", m: 1, k: ["= 5", "k = 5", "k=5"] },
        { p: "ΔY = 5 × 500 = ₹2,500 crore", m: 1, k: ["2,500", "2500"] }
      ],
      answers: {
        weak: { score: 0, text: "<p>Multiplier = 1/MPC = 1/0.8 = 1.25. Increase in income = 1.25 × 500 = 625.</p>",
          notes: ["Wrong formula: the multiplier is 1 ÷ (1 − MPC), i.e. 1 ÷ MPS.", "Every later figure is therefore wrong: 0 marks.", "A multiplier must be greater than 1 when MPC is positive: 1.25 is small, a sign to re-check."] },
        good: { score: 2, text: "<p>k = 1 ÷ (1 − MPC) = 1 ÷ (1 − 0.8) = 5</p><p>Increase in income = ΔC = 0.8 × 2,500 = ₹2,000 crore</p>",
          notes: ["Formula and k = 5 are right: 2 marks.", "The question asks for the change in <b>income</b>, ΔY = k × ΔI = ₹2,500 crore. ₹2,000 crore is the change in consumption."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\"><b>Investment multiplier</b> k = 1 ÷ (1 − MPC)</span><br><span class=\"mp\" data-p=\"2\">= 1 ÷ (1 − 0.8) = 1 ÷ 0.2 = <b>5</b></span></p><p><span class=\"mp\" data-p=\"3\"><b>Increase in income</b> ΔY = k × ΔI = 5 × ₹500 crore = <b>₹2,500 crore</b></span></p>",
          notes: ["Formula, substitution and answer for each part.", "Units given for income."] }
      },
      mistakes: ["Using 1/MPC instead of 1/(1 − MPC).", "Giving ΔC when ΔY is asked.", "Forgetting units."],
      tip: "Quick check: MPC 0.5 → k = 2; MPC 0.75 → k = 4; MPC 0.8 → k = 5; MPC 0.9 → k = 10."
    },
    {
      id: "q3", ch: "eco12-money", chTitle: "Money and Banking", marks: 4, cmd: "Explain",
      q: "Explain how the central bank can use (a) the repo rate and (b) open market operations to control inflation.",
      ask: "For each tool: what it is (1 mark) and the chain of effects in inflation (1 mark).",
      points: [
        { p: "Repo rate: rate at which the central bank lends to commercial banks for the short term", m: 1, k: ["lends", "short term", "short-term", "commercial banks"] },
        { p: "In inflation, raise repo → borrowing costlier for banks → lending rates rise → credit and demand fall", m: 1, k: ["raise", "increase", "costlier", "credit fall", "reduce credit"] },
        { p: "OMO: purchase and sale of government securities by the central bank in the open market", m: 1, k: ["securities", "open market"] },
        { p: "In inflation, sell securities → banks' reserves fall → lending capacity falls", m: 1, k: ["sell", "sale", "reserves fall", "reduce"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Repo rate is the rate of interest charged by banks. In inflation RBI increases it. Open market operations are buying of securities.</p>",
          notes: ["Repo is the rate at which the <b>central bank</b> lends to commercial banks, not a rate charged by banks to the public.", "'Increases it' is right but there is no effect chain: 1 mark.", "In inflation the central bank <b>sells</b> securities; buying injects money."] },
        good: { score: 3, text: "<p><b>(a) Repo rate:</b> the rate at which the central bank lends short-term funds to commercial banks. In inflation it is raised, so banks borrow less and lend less.</p><p><b>(b) Open market operations:</b> the sale and purchase of government securities by the central bank. In inflation the central bank sells securities.</p>",
          notes: ["Both meanings and the repo effect are right: 3 marks.", "OMO needs the effect: when the public and banks buy securities, money moves to the central bank, banks' <b>reserves fall</b> and credit shrinks."] },
        full: { score: 4, text: "<p><b>(a) Repo rate</b></p><p><span class=\"mp\" data-p=\"1\">It is the rate at which the central bank lends short-term funds to commercial banks against securities.</span></p><p><span class=\"mp\" data-p=\"2\">In inflation, the central bank <b>raises</b> the repo rate → borrowing becomes costlier for banks → banks raise their lending rates → people and firms borrow less → aggregate demand and prices fall.</span></p><p><b>(b) Open market operations</b></p><p><span class=\"mp\" data-p=\"3\">They are the purchase and sale of government securities by the central bank in the open market.</span></p><p><span class=\"mp\" data-p=\"4\">In inflation, the central bank <b>sells</b> securities → buyers pay from bank deposits → banks' reserves fall → their capacity to create credit falls → money supply and demand fall.</span></p>",
          notes: ["Meaning + direction + full chain for each tool.", "Arrows make the cause-and-effect clear and easy to mark.", "Ends with the final effect on demand and prices."] }
      },
      mistakes: ["Saying the central bank buys securities in inflation.", "Defining repo as the rate banks charge customers.", "Stopping at 'repo rises' without the effect on credit."],
      tip: "Inflation = take money out: raise rates, sell securities. Deflation = put money in: cut rates, buy securities."
    },
    {
      id: "q4", ch: "eco12-budget", chTitle: "Government Budget", marks: 3, cmd: "Distinguish",
      q: "Distinguish between revenue receipts and capital receipts on any three bases.",
      ask: "A table with a Basis column; same basis on both sides of every row.",
      points: [
        { p: "Effect on liabilities: revenue receipts do not create liabilities; capital receipts may create liabilities (borrowings)", m: 1, k: ["liabilit"] },
        { p: "Effect on assets: revenue receipts do not reduce assets; capital receipts may reduce assets (disinvestment)", m: 1, k: ["asset", "disinvest"] },
        { p: "Nature or examples: recurring (taxes, fees) vs non-recurring (borrowings, recovery of loans)", m: 1, k: ["recurring", "tax", "borrowing", "example"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Revenue receipts are taxes. Capital receipts are loans. Revenue receipts are regular while capital receipts are not regular.</p>",
          notes: ["Only examples and regularity: 1 mark for the recurring basis.", "The two key bases, effect on <b>liabilities</b> and on <b>assets</b>, are missing.", "No table."] },
        good: { score: 2, text: "<table><tr><th>Basis</th><th>Revenue receipts</th><th>Capital receipts</th></tr><tr><td>Liabilities</td><td>Do not create liabilities</td><td>Create liabilities</td></tr><tr><td>Examples</td><td>Taxes, fees</td><td>Borrowings, disinvestment</td></tr><tr><td>Importance</td><td>More important</td><td>Less important</td></tr></table>",
          notes: ["Rows 1 and 2 are correct: 2 marks.", "'Importance' is not a valid basis. Use <b>effect on assets</b>: capital receipts like disinvestment reduce assets."] },
        full: { score: 3, text: "<table><tr><th>Basis</th><th>Revenue receipts</th><th>Capital receipts</th></tr><tr><td>Effect on liabilities</td><td><span class=\"mp\" data-p=\"1\">Do not create any liability for the government</span></td><td>May create a liability, e.g. borrowings</td></tr><tr><td>Effect on assets</td><td><span class=\"mp\" data-p=\"2\">Do not reduce assets</span></td><td>May reduce assets, e.g. disinvestment, recovery of loans</td></tr><tr><td>Nature and examples</td><td><span class=\"mp\" data-p=\"3\">Recurring: taxes, fees, interest received</span></td><td>Non-recurring: borrowings, disinvestment</td></tr></table>",
          notes: ["The two defining bases (liabilities, assets) come first.", "Every row compares the same basis.", "Examples support each side."] }
      },
      mistakes: ["Using invented bases like 'importance'.", "Calling disinvestment a revenue receipt.", "Writing a paragraph instead of a table."],
      tip: "Test for a capital receipt: does it create a liability OR reduce an asset? If either, it is capital."
    },
    {
      id: "q5", ch: "eco12-bop", chTitle: "Balance of Payments", marks: 3, cmd: "Explain",
      q: "Explain the likely effect of a depreciation of the rupee on India's exports.",
      ask: "Meaning of depreciation, why Indian goods become cheaper for foreigners, and the effect on exports.",
      points: [
        { p: "Depreciation: fall in the value of the rupee against foreign currency (more ₹ per $) in a flexible system", m: 1, k: ["fall in the value", "more rupees", "₹ per", "decrease in value"] },
        { p: "Indian goods become cheaper for foreign buyers (each dollar buys more Indian goods)", m: 1, k: ["cheaper"] },
        { p: "Demand for Indian goods abroad rises, so exports increase", m: 1, k: ["exports increase", "exports rise", "increase in exports", "rise in exports"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Depreciation means the rupee becomes weak. So exports will fall because the rupee has less value.</p>",
          notes: ["'Rupee becomes weak' is a loose meaning: 1 mark at most.", "The effect is the opposite: a weaker rupee makes Indian goods <b>cheaper</b> abroad, so exports <b>rise</b>."] },
        good: { score: 2, text: "<p>Depreciation is a fall in the value of the rupee in terms of foreign currency, e.g. ₹84 per $ instead of ₹80. As a result India's exports will increase.</p>",
          notes: ["Meaning with example and correct conclusion: 2 marks.", "The middle link is missing: <b>why</b> exports rise (Indian goods become cheaper for foreigners)."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\"><b>Depreciation</b> is a fall in the value of the domestic currency in terms of foreign currency in a flexible exchange rate system, e.g. ₹/$ rising from 80 to 84.</span></p><p><span class=\"mp\" data-p=\"2\">Now a foreign buyer gets more rupees for each dollar, so <b>Indian goods become cheaper</b> for foreigners.</span></p><p><span class=\"mp\" data-p=\"3\">Foreign demand for Indian goods rises, so <b>India's exports increase</b>.</span></p>",
          notes: ["Meaning → price effect → final effect: three links, three marks.", "A small number example makes the meaning concrete."] }
      },
      mistakes: ["Saying exports fall because the rupee is 'weak'.", "Confusing depreciation (market) with devaluation (government).", "Skipping the 'cheaper for foreigners' link."],
      tip: "Depreciation helps exporters and hurts importers. Say it out loud before writing."
    },
    {
      id: "q6", ch: "eco12-ied1", chTitle: "Development Experience 1947-90", marks: 6, cmd: "Explain",
      q: "What was the Green Revolution? Explain its benefits and the risks it posed.",
      ask: "Meaning with HYV seeds and inputs, the first phase (crops, states), three benefits and at least one risk with how it was handled.",
      points: [
        { p: "Meaning: large rise in food-grain output from HYV seeds with fertilisers, pesticides and assured irrigation", m: 1, k: ["hyv", "high yield", "high-yield"] },
        { p: "First phase: mid-1960s to mid-1970s, mainly wheat and rice, in Punjab, Andhra Pradesh and Tamil Nadu", m: 1, k: ["punjab", "wheat"] },
        { p: "Benefit: self-sufficiency in food grains", m: 1, k: ["self-suffic", "self suffic"] },
        { p: "Benefit: marketed surplus, so food prices fell, helping the poor", m: 1, k: ["marketed surplus"] },
        { p: "Benefit: government built a buffer stock", m: 1, k: ["buffer"] },
        { p: "Risk: gains to rich farmers and some regions / pest attacks, reduced through credit, subsidies and research", m: 1, k: ["rich farmer", "inequal", "pest", "region"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>The Green Revolution was a revolution in agriculture in India. Farmers started using new seeds and production increased. India stopped importing food. But it also caused pollution and farmers committed suicide.</p>",
          notes: ["'New seeds, production increased' and 'stopped importing food' earn 2 marks.", "No mention of HYV, inputs, phases, marketed surplus or buffer stock.", "The risks given are not the NCERT ones; write about <b>inequality between farmers and regions</b> and <b>pest attacks</b>."] },
        good: { score: 4, text: "<p><b>Meaning:</b> The Green Revolution was the large increase in food-grain production from the use of HYV seeds along with fertilisers, pesticides and irrigation.</p><p><b>Benefits:</b> (i) India became self-sufficient in food grains. (ii) Farmers sold a marketed surplus, which lowered food prices. (iii) The government could build buffer stocks.</p><p><b>Risk:</b> It might increase inequality.</p>",
          notes: ["Meaning and three benefits are right: 4 marks.", "Add the first phase (wheat and rice; Punjab, AP, TN).", "The risk needs explaining: rich farmers could afford inputs first, and HYV crops were prone to pests; say how the government reduced these risks."] },
        full: { score: 6, text: "<p><span class=\"mp\" data-p=\"1\"><b>Meaning:</b> The Green Revolution was the large increase in food-grain production that resulted from using <b>high-yielding variety (HYV) seeds</b> together with fertilisers, pesticides and assured irrigation.</span></p><p><span class=\"mp\" data-p=\"2\">In its first phase (mid-1960s to mid-1970s) it was largely limited to <b>wheat and rice</b> in <b>Punjab, Andhra Pradesh and Tamil Nadu</b>.</span></p><p><b>Benefits</b></p><p><span class=\"mp\" data-p=\"3\">(i) India became <b>self-sufficient</b> in food grains and ended dependence on imports.</span></p><p><span class=\"mp\" data-p=\"4\">(ii) Farmers produced a <b>marketed surplus</b>; more grain in the market lowered food prices, which helped low-income groups.</span></p><p><span class=\"mp\" data-p=\"5\">(iii) The government procured grain to build a <b>buffer stock</b> for years of shortage.</span></p><p><b>Risks</b></p><p><span class=\"mp\" data-p=\"6\">At first, only <b>rich farmers</b> could afford the inputs, so inequality could widen; HYV crops were also prone to <b>pest attacks</b>. The government reduced these risks through cheap credit to small farmers, subsidies and research institutions.</span></p>",
          notes: ["Meaning, a dated fact, three benefits and a risk with the government's response: one mark each.", "Sub-headings (Benefits, Risks) guide the examiner.", "Specific facts (crops, states, years) mark it as a board-quality answer."] }
      },
      mistakes: ["Describing it only as 'more production' without HYV seeds and inputs.", "Missing the first-phase crops and states.", "Writing risks from current affairs instead of the syllabus (inequality, pests)."],
      tip: "For 6-mark IED answers, use sub-headings: Meaning / Benefits / Risks. It shows structure and saves the examiner time."
    }
  ]
});
