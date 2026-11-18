/* Answer Writing Lab · Class IX Social Science (new NCERT). Original questions; figures recomputed. */
NFWrite.register({
  slug: "ix-sst", cls: "IX", subject: "Social Science (SST)",
  intro: "Class 9 SST rewards clear points with a fact or example each. In economics and geography numericals, show the formula and the working, just like in Maths.",
  words: { 3: "60–80", 5: "120–150" },
  rules: [
    { t: "Points with headings", b: "Number each point and start with a short <b>heading</b>. One point per mark." },
    { t: "Fact or example in every point", b: "Add a fact, number or Indian example: 'Election Commission', '6.5 °C per km', 'MGNREGA'." },
    { t: "Show working in numbers", b: "Interest, lapse rate, prices: write the <b>formula</b>, substitute, and give the answer with units (₹, °C)." },
    { t: "Use the chapter's terms", b: "'Representative democracy', 'equilibrium price', 'opportunity cost', 'Model Code of Conduct'." },
    { t: "Distinguish in a table", b: "Basis column; the same basis on both sides." },
    { t: "Cause → effect", b: "For 'why' questions, write the chain: 'price above equilibrium → surplus → sellers cut prices'." }
  ],
  questions: [
    {
      id: "q1", ch: "ix-sst6", chTitle: "Democracy", marks: 3, cmd: "Distinguish",
      q: "Distinguish between direct democracy and representative democracy.",
      ask: "A table: who takes decisions, where it is practical, and an example.",
      points: [
        { p: "Decisions: citizens decide directly vs elected representatives decide on their behalf", m: 1, k: ["directly", "representatives", "elected"] },
        { p: "Practicality: suitable for small communities vs suitable for large countries", m: 1, k: ["small", "large"] },
        { p: "Example: ancient Athens / gram sabha vs India's Parliament", m: 1, k: ["athens", "gram sabha", "parliament", "lok sabha"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>In direct democracy people rule directly. In representative democracy people choose leaders.</p>",
          notes: ["The core idea is right: 1 mark.", "Add where each is practical and an example, in a table."] },
        good: { score: 2, text: "<table><tr><th>Basis</th><th>Direct</th><th>Representative</th></tr><tr><td>Decisions</td><td>By citizens themselves</td><td>By elected representatives</td></tr><tr><td>Example</td><td>Ancient Athens</td><td>India</td></tr></table>",
          notes: ["Two correct rows: 2 marks.", "Add a third basis: <b>practicality</b>: direct democracy works only in small communities."] },
        full: { score: 3, text: "<table><tr><th>Basis</th><th>Direct democracy</th><th>Representative democracy</th></tr><tr><td>Who decides</td><td><span class=\"mp\" data-p=\"1\">Citizens take decisions themselves</span></td><td>Citizens elect representatives who decide for them</td></tr><tr><td>Where practical</td><td><span class=\"mp\" data-p=\"2\">Small communities where all can meet</span></td><td>Large countries with millions of citizens</td></tr><tr><td>Example</td><td><span class=\"mp\" data-p=\"3\">Ancient Athens; a gram sabha today</span></td><td>India's Parliament and state assemblies</td></tr></table>",
          notes: ["Three bases including practicality.", "An Indian example on both sides."] }
      },
      mistakes: ["Calling India a direct democracy.", "No example.", "Paragraph instead of table."],
      tip: "Direct = people decide. Representative = people choose who decides."
    },
    {
      id: "q2", ch: "ix-sst7", chTitle: "Elections in a Democracy", marks: 3, cmd: "Explain",
      q: "What is the Model Code of Conduct? State any two of its provisions.",
      ask: "Meaning (rules for parties and candidates during elections, enforced by the Election Commission) and two provisions.",
      points: [
        { p: "Meaning: a set of norms and guidelines that parties and candidates must follow during the election period", m: 1, k: ["norms", "guidelines", "rules", "election commission"] },
        { p: "Provision 1: no use of places of worship for election propaganda", m: 1, k: ["worship", "religio", "caste"] },
        { p: "Provision 2: no use of government vehicles, aircraft or officials for campaigning / ministers cannot announce new schemes or lay foundation stones", m: 1, k: ["government vehicle", "official", "foundation", "new scheme", "policy"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>The Model Code of Conduct is a code for voters on how to vote properly.</p>",
          notes: ["It applies to <b>parties and candidates</b>, not voters.", "1 mark at most for linking it to elections."] },
        good: { score: 2, text: "<p>The Model Code of Conduct is a set of rules that political parties and candidates must follow during elections. For example, no party can use a temple or mosque for campaigning.</p>",
          notes: ["Meaning and one provision: 2 marks.", "A second provision is needed, e.g. government vehicles and officials cannot be used for campaigning."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\">The <b>Model Code of Conduct</b> is a set of norms and guidelines that every political party and candidate must follow from the announcement of elections; it is enforced by the Election Commission.</span></p><p><span class=\"mp\" data-p=\"2\"><b>1.</b> No party or candidate can use any place of worship for election propaganda.</span></p><p><span class=\"mp\" data-p=\"3\"><b>2.</b> Government vehicles, aircraft and officials cannot be used for campaigning, and ministers cannot announce new schemes or lay foundation stones once elections are announced.</span></p>",
          notes: ["Meaning names who it binds and who enforces it.", "Two specific, accurate provisions."] }
      },
      mistakes: ["Saying it applies to voters.", "Giving general advice ('parties should be honest') as provisions.", "Not mentioning the Election Commission."],
      tip: "Who? Parties and candidates. When? From the announcement of elections. Enforced by? Election Commission."
    },
    {
      id: "q3", ch: "ix-sst3", chTitle: "Atmosphere and Climate", marks: 3, cmd: "Explain and calculate",
      q: "Why does temperature fall as we go higher in the troposphere? If the temperature at sea level is 30 °C, estimate the temperature at a height of 2 km.",
      ask: "The reason (heated from below), the normal lapse rate (6.5 °C per km), and the calculation.",
      points: [
        { p: "The atmosphere is heated mainly from below, by heat radiated from the Earth's surface; higher air is farther from this source and thinner", m: 1, k: ["from below", "earth's surface", "terrestrial", "thinner"] },
        { p: "Normal lapse rate: temperature falls by about 6.5 °C per 1 km (1,000 m)", m: 1, k: ["6.5"] },
        { p: "At 2 km: 30 − (6.5 × 2) = 30 − 13 = 17 °C", m: 1, k: ["17"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Because higher places are closer to the sky and the sun is far. At 2 km the temperature will be 28 °C.</p>",
          notes: ["The reason is wrong: higher places are actually slightly closer to the Sun. Air is heated from <b>below</b>, by the Earth.", "28 °C uses 1 °C per km; the normal lapse rate is 6.5 °C per km.", "1 mark for recognising that temperature falls."] },
        good: { score: 2, text: "<p>Temperature falls with height at the rate of 6.5 °C per km. So at 2 km, temperature = 30 − 13 = 17 °C.</p>",
          notes: ["Lapse rate and calculation: 2 marks.", "The question first asks <b>why</b>: the air is heated from below by the Earth's surface, and higher air is thinner."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\">The atmosphere is heated mainly from <b>below</b>: the Earth absorbs sunlight and radiates heat to the air near it. Air higher up is farther from this heat source and is thinner, so it holds less heat.</span></p><p><span class=\"mp\" data-p=\"2\">Temperature falls at the <b>normal lapse rate</b> of about <b>6.5 °C per km</b>.</span></p><p><span class=\"mp\" data-p=\"3\">At 2 km: 30 °C − (6.5 × 2) °C = 30 − 13 = <b>17 °C</b></span></p>",
          notes: ["Reason, rate and calculation: each part answered.", "Units on the final answer."] }
      },
      mistakes: ["Saying the sun is 'farther' at height.", "Using the wrong lapse rate.", "Skipping the 'why'."],
      tip: "Every 1 km up → about 6.5 °C cooler."
    },
    {
      id: "q4", ch: "ix-sst9", chTitle: "The Price Puzzle", marks: 3, cmd: "Explain",
      q: "What happens in a market when the price of a good is above the equilibrium price? How is equilibrium restored?",
      ask: "Quantity supplied > quantity demanded (surplus), sellers' response, and the move back to equilibrium.",
      points: [
        { p: "At a price above equilibrium, quantity supplied is greater than quantity demanded: a surplus", m: 1, k: ["surplus", "supply is greater", "excess supply"] },
        { p: "Sellers with unsold stock lower prices to attract buyers", m: 1, k: ["lower", "reduce", "cut"] },
        { p: "As price falls, demand rises and supply falls until quantity demanded = quantity supplied at the equilibrium price", m: 1, k: ["demand rises", "equal", "equilibrium"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>If the price is high, people will not buy. The seller will have a loss.</p>",
          notes: ["'People will not buy' hints at lower demand: 1 mark.", "Use the terms: <b>surplus</b> (excess supply), and explain how the price falls back."] },
        good: { score: 2, text: "<p>When price is above equilibrium, supply is more than demand, so there is a surplus. Sellers then reduce the price.</p>",
          notes: ["Surplus and sellers' response: 2 marks.", "Finish the chain: as price falls, demand rises and supply falls until they are <b>equal</b> at the equilibrium price."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\">At a price above equilibrium, sellers want to sell more but buyers want to buy less, so quantity supplied exceeds quantity demanded: there is a <b>surplus</b>.</span></p><p><span class=\"mp\" data-p=\"2\">Sellers left with unsold stock <b>lower their prices</b> to attract buyers.</span></p><p><span class=\"mp\" data-p=\"3\">As the price falls, quantity demanded rises and quantity supplied falls, until they become <b>equal at the equilibrium price</b>.</span></p>",
          notes: ["Cause → effect chain, step by step.", "Correct terms: surplus, quantity demanded, quantity supplied."] }
      },
      mistakes: ["Calling it a shortage.", "Stopping at 'sellers reduce price'.", "Mixing up demand and quantity demanded."],
      tip: "Price too high → surplus → price falls. Price too low → shortage → price rises."
    },
    {
      id: "q5", ch: "ix-sstp2-5", chTitle: "Managing Your Personal Finances", marks: 3, cmd: "Calculate",
      q: "Riya deposits ₹5,000 in a bank at a simple interest rate of 6% per year for 2 years. Calculate the interest earned and the total amount she will receive.",
      ask: "SI = P × R × T ÷ 100, then Amount = P + SI.",
      points: [
        { p: "Formula: SI = (P × R × T) ÷ 100", m: 1, k: ["p × r × t", "prt", "p x r x t"] },
        { p: "SI = (5,000 × 6 × 2) ÷ 100 = ₹600", m: 1, k: ["600"] },
        { p: "Amount = ₹5,000 + ₹600 = ₹5,600", m: 1, k: ["5,600", "5600"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Interest = 6% of 5,000 = 300. Amount = 5,300</p>",
          notes: ["One year's interest is right: 1 mark.", "The deposit is for <b>2</b> years: interest = ₹600."] },
        good: { score: 2, text: "<p>SI = P × R × T ÷ 100 = 5,000 × 6 × 2 ÷ 100 = ₹600</p>",
          notes: ["Formula and interest: 2 marks.", "The question also asks for the <b>total amount</b>: ₹5,000 + ₹600 = ₹5,600."] },
        full: { score: 3, text: "<p><b>Given:</b> P = ₹5,000, R = 6% p.a., T = 2 years</p><p><span class=\"mp\" data-p=\"1\">Simple interest, SI = (P × R × T) ÷ 100</span><br><span class=\"mp\" data-p=\"2\">= (5,000 × 6 × 2) ÷ 100 = <b>₹600</b></span></p><p><span class=\"mp\" data-p=\"3\">Amount = P + SI = ₹5,000 + ₹600 = <b>₹5,600</b></span></p>",
          notes: ["Given data, formula, and both answers with ₹."] }
      },
      mistakes: ["Forgetting to multiply by time.", "Giving only interest when amount is also asked.", "No ₹ sign."],
      tip: "Interest is the extra; amount is principal + extra."
    },
    {
      id: "q6", ch: "ix-sst8", chTitle: "Building Blocks in Economics", marks: 5, cmd: "Explain",
      q: "Explain the four factors of production with an example of each, and name the reward each receives.",
      ask: "Land, labour, capital and entrepreneurship, each with meaning and example, plus the rewards (rent, wages, interest, profit).",
      points: [
        { p: "Land: all natural resources (soil, water, minerals), e.g. a farmer's field", m: 1, k: ["land", "natural"] },
        { p: "Labour: human physical and mental effort, e.g. a worker or teacher", m: 1, k: ["labour", "effort"] },
        { p: "Capital: man-made goods used to produce more goods (machines, tools, buildings)", m: 1, k: ["capital", "machine", "tool"] },
        { p: "Entrepreneurship: organising the other factors and bearing risk", m: 1, k: ["entrepreneur", "risk", "organis"] },
        { p: "Rewards: rent (land), wages (labour), interest (capital), profit (entrepreneur)", m: 1, k: ["rent", "wage", "interest", "profit"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>The factors of production are land, labour, money and machines. They help in producing goods.</p>",
          notes: ["Land and labour named: 2 marks.", "'Money and machines' are not two factors: machines are capital; money is not itself a factor.", "Entrepreneurship and rewards are missing."] },
        good: { score: 4, text: "<p><b>1. Land:</b> natural resources like soil and water, e.g. a field.</p><p><b>2. Labour:</b> human effort, e.g. a factory worker.</p><p><b>3. Capital:</b> machines and tools, e.g. a tractor.</p><p><b>4. Entrepreneur:</b> the person who starts and manages the business.</p>",
          notes: ["All four factors with examples: 4 marks.", "The rewards part is missing: rent, wages, interest, profit.", "Mention that the entrepreneur <b>bears risk</b>."] },
        full: { score: 5, text: "<p><span class=\"mp\" data-p=\"1\"><b>1. Land:</b> all natural resources such as soil, water, forests and minerals. Example: a farmer's field.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. Labour:</b> human physical and mental effort used in production. Example: a mason, a teacher.</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Capital:</b> man-made goods used to produce further goods. Example: a tractor, a sewing machine, a factory building.</span></p><p><span class=\"mp\" data-p=\"4\"><b>4. Entrepreneurship:</b> the ability to bring land, labour and capital together, take decisions and <b>bear the risk</b>. Example: a person who starts a bakery.</span></p><p><span class=\"mp\" data-p=\"5\"><b>Rewards:</b> land earns <b>rent</b>, labour earns <b>wages</b>, capital earns <b>interest</b> and the entrepreneur earns <b>profit</b>.</span></p>",
          notes: ["Meaning and example for each factor.", "Rewards given as a matched set.", "Highlights risk-bearing, which defines the entrepreneur."] }
      },
      mistakes: ["Listing money as a factor.", "Forgetting rewards.", "Leaving out risk-bearing for entrepreneurship."],
      tip: "Match: Land–Rent, Labour–Wages, Capital–Interest, Entrepreneur–Profit."
    }
  ]
});
