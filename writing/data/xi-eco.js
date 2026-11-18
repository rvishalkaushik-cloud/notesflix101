/* Answer Writing Lab · Class XI Economics (Statistics and Microeconomics). Original questions; figures recomputed. */
NFWrite.register({
  slug: "xi-eco", cls: "XI", subject: "Economics",
  intro: "Class XI Economics mixes Statistics (tables and formulas) and Microeconomics (laws, conditions and diagrams). Both reward structure: formula or statement first, then working or explanation.",
  rules: [
    { t: "Statistics: table + formula", b: "Show the working <b>table</b> (e.g. an fx column), the totals (Σf, Σfx), the <b>formula</b>, and the answer." },
    { t: "Laws: statement first", b: "Begin with the <b>statement of the law</b> and its assumption ('other things remaining constant')." },
    { t: "Diagrams", b: "Label both <b>axes</b>, the <b>curves</b> and the key points. Arrows show movement or shift." },
    { t: "Conditions with reasons", b: "For equilibrium, state the <b>condition</b>, then what happens if it is not met (MU > P, MU < P)." },
    { t: "Movement vs shift", b: "Own price → <b>movement along</b> the curve. Any other factor → <b>shift</b> of the curve." },
    { t: "Distinguish in a table", b: "Basis column, same basis on both sides." }
  ],
  questions: [
    {
      id: "q1", ch: "eco11-tools", chTitle: "Statistical Tools and Interpretation", marks: 3, cmd: "Calculate",
      q: "Calculate the arithmetic mean of the following distribution: Marks (x): 10, 20, 30, 40; Number of students (f): 2, 3, 4, 1.",
      ask: "An fx column, the totals Σf and Σfx, the formula, and the mean.",
      points: [
        { p: "fx column: 20, 60, 120, 40", m: 1, k: ["20, 60", "120"] },
        { p: "Σf = 10 and Σfx = 240", m: 1, k: ["240"] },
        { p: "Mean = Σfx ÷ Σf = 240 ÷ 10 = 24 marks", m: 1, k: ["24"] }
      ],
      answers: {
        weak: { score: 0, text: "<p>Mean = (10 + 20 + 30 + 40) ÷ 4 = 25</p>",
          notes: ["This ignores the frequencies: it is a simple mean, not the mean of the distribution.", "No fx column and no Σf: 0 marks."] },
        good: { score: 2, text: "<table><tr><th>x</th><th>f</th><th>fx</th></tr><tr><td>10</td><td>2</td><td>20</td></tr><tr><td>20</td><td>3</td><td>60</td></tr><tr><td>30</td><td>4</td><td>120</td></tr><tr><td>40</td><td>1</td><td>40</td></tr></table><p>Mean = 240 ÷ 4 = 60</p>",
          notes: ["The fx column and Σfx = 240 are right: 2 marks.", "Divide by <b>Σf = 10</b> (number of students), not by 4 (number of rows). Mean = 24."] },
        full: { score: 3, text: "<table><tr><th>Marks (x)</th><th>Students (f)</th><th>fx</th></tr><tr><td>10</td><td>2</td><td>20</td></tr><tr><td>20</td><td>3</td><td>60</td></tr><tr><td>30</td><td>4</td><td>120</td></tr><tr><td>40</td><td>1</td><td>40</td></tr><tr><th>Total</th><th>Σf = 10</th><th>Σfx = 240</th></tr></table><p><span class=\"mp\" data-p=\"1\">The fx column is shown in the table above.</span></p><p><span class=\"mp\" data-p=\"2\">Σf = 10; Σfx = 240</span></p><p><span class=\"mp\" data-p=\"3\">Mean (X̄) = Σfx ÷ Σf = 240 ÷ 10 = <b>24 marks</b></span></p>",
          notes: ["Working table with totals.", "Formula written before numbers.", "Answer with its unit (marks)."] }
      },
      mistakes: ["Ignoring frequencies.", "Dividing by the number of rows instead of Σf.", "No totals row."],
      tip: "Quick check: the mean must lie between the smallest and largest x (10 and 40)."
    },
    {
      id: "q2", ch: "eco11-consumer", chTitle: "Consumer's Equilibrium and Demand", marks: 4, cmd: "Explain",
      q: "Explain the condition of consumer's equilibrium in the case of a single commodity using the utility approach.",
      ask: "The condition (MU<sub>x</sub> = P<sub>x</sub>, in money terms), what happens when MU > P and MU < P, and why equilibrium is restored (diminishing marginal utility).",
      points: [
        { p: "Condition: MU<sub>x</sub> ÷ MU<sub>m</sub> = P<sub>x</sub>, i.e. MU in money terms equals price", m: 1, k: ["mu", "= p", "price"] },
        { p: "If MU > P, the consumer buys more", m: 1, k: ["buy more", "increase"] },
        { p: "If MU < P, the consumer buys less", m: 1, k: ["buy less", "reduce", "decrease"] },
        { p: "Diminishing marginal utility brings MU back to equal P", m: 1, k: ["diminishing"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>A consumer is in equilibrium when he gets maximum satisfaction from his income.</p>",
          notes: ["Correct meaning of equilibrium: 1 mark.", "The question asks for the <b>condition</b>, and what happens when it is not met."] },
        good: { score: 3, text: "<p>The consumer is in equilibrium when MU<sub>x</sub> = P<sub>x</sub>. If MU > P, he buys more of the good. If MU < P, he buys less.</p>",
          notes: ["Condition and both adjustments: 3 marks.", "Explain <b>why</b> buying more lowers MU: the law of diminishing marginal utility."] },
        full: { score: 4, text: "<p><span class=\"mp\" data-p=\"1\"><b>Condition:</b> MU<sub>x</sub> ÷ MU<sub>m</sub> = P<sub>x</sub>, i.e. the marginal utility of the good, measured in money, equals its price.</span></p><p><span class=\"mp\" data-p=\"2\">If <b>MU<sub>x</sub> > P<sub>x</sub></b>, the consumer gains more satisfaction than the price paid, so he <b>buys more</b>.</span></p><p><span class=\"mp\" data-p=\"3\">If <b>MU<sub>x</sub> < P<sub>x</sub></b>, he pays more than the satisfaction gained, so he <b>buys less</b>.</span></p><p><span class=\"mp\" data-p=\"4\">As he buys more, MU falls (<b>law of diminishing marginal utility</b>); as he buys less, MU rises. Either way MU<sub>x</sub> moves towards P<sub>x</sub>, restoring equilibrium.</span></p>",
          notes: ["Condition in symbols and words.", "Both disequilibrium cases with the consumer's response.", "The law that restores equilibrium is named."] }
      },
      mistakes: ["Writing only the meaning of equilibrium.", "Missing the 'why': diminishing marginal utility.", "Mixing in the two-commodity condition."],
      tip: "Condition → two 'if' cases → the law that fixes it. That structure fits every equilibrium question."
    },
    {
      id: "q3", ch: "eco11-producer", chTitle: "Producer Behaviour and Supply", marks: 3, cmd: "Distinguish",
      q: "Distinguish between a change in quantity supplied and a change in supply.",
      ask: "A table: cause, effect on the curve, and the terms used.",
      points: [
        { p: "Cause: change in the good's own price vs change in other factors (input prices, technology, taxes)", m: 1, k: ["own price", "other factors", "technolog"] },
        { p: "Curve: movement along the same supply curve vs shift of the supply curve", m: 1, k: ["movement", "shift"] },
        { p: "Terms: extension/contraction vs increase/decrease in supply", m: 1, k: ["extension", "contraction", "increase", "decrease"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Change in quantity supplied happens when price changes. Change in supply happens when supply changes.</p>",
          notes: ["First half is right: 1 mark.", "'Change in supply happens when supply changes' is circular: name the other factors."] },
        good: { score: 2, text: "<table><tr><th>Basis</th><th>Change in quantity supplied</th><th>Change in supply</th></tr><tr><td>Cause</td><td>Own price changes</td><td>Other factors change</td></tr><tr><td>Curve</td><td>Movement along the curve</td><td>Shift of the curve</td></tr></table>",
          notes: ["Two correct rows: 2 marks.", "Add a third basis: the <b>terms</b> extension/contraction vs increase/decrease."] },
        full: { score: 3, text: "<table><tr><th>Basis</th><th>Change in quantity supplied</th><th>Change in supply</th></tr><tr><td>Cause</td><td><span class=\"mp\" data-p=\"1\">Change in the good's own price, other factors constant</span></td><td>Change in other factors: input prices, technology, taxes, prices of related goods</td></tr><tr><td>Effect on curve</td><td><span class=\"mp\" data-p=\"2\">Movement along the same supply curve</span></td><td>Shift of the whole supply curve (right or left)</td></tr><tr><td>Terms used</td><td><span class=\"mp\" data-p=\"3\">Extension or contraction of supply</span></td><td>Increase or decrease in supply</td></tr></table>",
          notes: ["Three bases; the other factors are named.", "Correct technical terms."] }
      },
      mistakes: ["Circular definitions.", "Saying a price change shifts the curve.", "Mixing 'extension' with 'increase'."],
      tip: "Price → move. Anything else → shift."
    },
    {
      id: "q4", ch: "eco11-market", chTitle: "Perfect Competition and Price Determination", marks: 4, cmd: "Explain",
      q: "Explain any four features of a perfectly competitive market.",
      ask: "Four features, each with its implication (e.g. 'so a firm is a price taker').",
      points: [
        { p: "Very large number of buyers and sellers (firm is a price taker)", m: 1, k: ["large number"] },
        { p: "Homogeneous products", m: 1, k: ["homogeneous", "identical"] },
        { p: "Free entry and exit (only normal profit in the long run)", m: 1, k: ["entry", "exit"] },
        { p: "Perfect knowledge / perfect mobility / no transport costs", m: 1, k: ["knowledge", "mobility", "transport"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>In perfect competition there are many sellers and the price is the same everywhere. Firms earn huge profits.</p>",
          notes: ["Many sellers: 1 mark.", "'Huge profits' is wrong: free entry wipes out abnormal profits in the long run."] },
        good: { score: 3, text: "<p><b>1. Large number of buyers and sellers.</b></p><p><b>2. Homogeneous products:</b> all units are identical.</p><p><b>3. Free entry and exit.</b></p><p><b>4. Price maker:</b> each firm decides its price.</p>",
          notes: ["Points 1–3 are correct: 3 marks.", "Point 4 is wrong: a firm under perfect competition is a <b>price taker</b>.", "Points 1 and 3 need their implication."] },
        full: { score: 4, text: "<p><span class=\"mp\" data-p=\"1\"><b>1. Very large number of buyers and sellers:</b> each firm's output is tiny compared with the market, so it cannot influence price: it is a <b>price taker</b>.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. Homogeneous products:</b> all firms sell identical products, so buyers have no reason to pay more to any one firm.</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Free entry and exit:</b> firms can join or leave freely, so in the long run firms earn only <b>normal profit</b>.</span></p><p><span class=\"mp\" data-p=\"4\"><b>4. Perfect knowledge:</b> buyers and sellers know market prices, so a uniform price prevails.</span></p>",
          notes: ["Each feature has its implication.", "Correct conclusions: price taker, normal profit, uniform price."] }
      },
      mistakes: ["Calling the firm a price maker.", "Saying firms earn abnormal profits in the long run.", "Listing features without implications."],
      tip: "Large number → price taker. Homogeneous → uniform price. Free entry → normal profit."
    },
    {
      id: "q5", ch: "eco11-data", chTitle: "Collection, Organisation and Presentation of Data", marks: 3, cmd: "Distinguish",
      q: "Distinguish between primary data and secondary data on three bases.",
      ask: "A table: source/originality, cost and time, and suitability/reliability.",
      points: [
        { p: "Originality: collected first-hand by the investigator vs already collected by someone else", m: 1, k: ["first-hand", "first hand", "original", "someone else", "already"] },
        { p: "Cost and time: more costly and time-consuming vs cheaper and quicker", m: 1, k: ["cost", "time"] },
        { p: "Suitability: fits the purpose exactly vs may need adjustment / reliability", m: 1, k: ["suitab", "purpose", "adjust", "reliab"] }
      ],
      answers: {
        weak: { score: 0, text: "<p>Primary data is the main data and secondary data is less important data.</p>",
          notes: ["'Primary' does not mean 'main'. It means first-hand, collected by the investigator.", "No valid basis of difference: 0 marks."] },
        good: { score: 2, text: "<table><tr><th>Basis</th><th>Primary data</th><th>Secondary data</th></tr><tr><td>Source</td><td>Collected by investigator</td><td>Collected by others</td></tr><tr><td>Cost</td><td>Costly</td><td>Cheap</td></tr><tr><td>Example</td><td>Survey</td><td>Census</td></tr></table>",
          notes: ["Source and cost rows: 2 marks.", "'Example' is not a basis of difference; use <b>suitability</b>: primary data fits the purpose exactly, secondary may need adjusting."] },
        full: { score: 3, text: "<table><tr><th>Basis</th><th>Primary data</th><th>Secondary data</th></tr><tr><td>Originality</td><td><span class=\"mp\" data-p=\"1\">Collected first-hand by the investigator for the purpose</span></td><td>Already collected by someone else, e.g. Census, RBI reports</td></tr><tr><td>Cost and time</td><td><span class=\"mp\" data-p=\"2\">More costly and time-consuming</span></td><td>Cheaper and quicker to obtain</td></tr><tr><td>Suitability</td><td><span class=\"mp\" data-p=\"3\">Fits the investigation exactly</span></td><td>May need careful checking and adjustment before use</td></tr></table>",
          notes: ["Three valid bases.", "Examples placed inside a row, not as a separate basis."] }
      },
      mistakes: ["Reading 'primary' as 'more important'.", "Using 'example' as a basis.", "Paragraph instead of table."],
      tip: "Primary = first-hand. Secondary = second-hand."
    },
    {
      id: "q6", ch: "eco11-producer", chTitle: "Producer Behaviour and Supply", marks: 6, cmd: "Explain",
      q: "State and explain the law of variable proportions with the help of a schedule.",
      ask: "Statement with assumption, a TP/MP schedule, the three phases, and the reasons.",
      points: [
        { p: "Statement: as more units of a variable input are combined with a fixed input, MP first rises, then falls, and finally becomes negative", m: 1, k: ["variable input", "fixed", "first rises", "negative"] },
        { p: "Schedule of TP and MP", m: 1, k: ["schedule", "tp", "mp"] },
        { p: "Phase I: TP rises at an increasing rate; MP rises", m: 1, k: ["increasing rate", "phase i", "phase 1"] },
        { p: "Phase II: TP rises at a diminishing rate; MP falls but stays positive; TP max when MP = 0", m: 1, k: ["diminishing rate", "phase ii", "phase 2", "mp = 0"] },
        { p: "Phase III: TP falls; MP negative", m: 1, k: ["tp falls", "negative", "phase iii", "phase 3"] },
        { p: "Reasons: better use of fixed factor / division of labour in Phase I; overcrowding of fixed factor in Phases II–III", m: 1, k: ["fixed factor", "division of labour", "overcrowd", "reason"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>The law of variable proportions says that output increases first and then decreases when more labour is used. It has three stages.</p>",
          notes: ["A rough statement and 'three stages': 2 marks.", "No schedule, no description of the phases, no reasons."] },
        good: { score: 4, text: "<p><b>Statement:</b> when more units of a variable factor are used with a fixed factor, MP first rises, then falls and finally becomes negative.</p><table><tr><th>Labour</th><th>TP</th><th>MP</th></tr><tr><td>1</td><td>10</td><td>10</td></tr><tr><td>2</td><td>24</td><td>14</td></tr><tr><td>3</td><td>34</td><td>10</td></tr><tr><td>4</td><td>38</td><td>4</td></tr><tr><td>5</td><td>38</td><td>0</td></tr><tr><td>6</td><td>35</td><td>−3</td></tr></table><p>Phase I: TP rises at an increasing rate. Phase II: TP rises at a decreasing rate. Phase III: TP falls.</p>",
          notes: ["Statement, schedule and the phases (described through TP only): 4 marks.", "Describe MP in each phase too (rising, falling but positive, negative).", "Reasons for the phases are missing."] },
        full: { score: 6, text: "<p><span class=\"mp\" data-p=\"1\"><b>Statement:</b> when more and more units of a variable factor are combined with a fixed factor, other things constant, the marginal product of the variable factor first rises, then falls, and eventually becomes negative.</span></p><p><span class=\"mp\" data-p=\"2\"><b>Schedule</b> (land fixed, labour variable):</span></p><table><tr><th>Labour</th><th>TP</th><th>MP</th><th>Phase</th></tr><tr><td>1</td><td>10</td><td>10</td><td rowspan=\"2\">I</td></tr><tr><td>2</td><td>24</td><td>14</td></tr><tr><td>3</td><td>34</td><td>10</td><td rowspan=\"3\">II</td></tr><tr><td>4</td><td>38</td><td>4</td></tr><tr><td>5</td><td>38</td><td>0</td></tr><tr><td>6</td><td>35</td><td>−3</td><td>III</td></tr></table><p><span class=\"mp\" data-p=\"3\"><b>Phase I (increasing returns):</b> TP rises at an increasing rate and MP rises (up to 2 workers).</span></p><p><span class=\"mp\" data-p=\"4\"><b>Phase II (diminishing returns):</b> TP rises at a diminishing rate and MP falls but stays positive; TP is maximum when MP = 0 (5 workers).</span></p><p><span class=\"mp\" data-p=\"5\"><b>Phase III (negative returns):</b> TP falls and MP becomes negative (6th worker).</span></p><p><span class=\"mp\" data-p=\"6\"><b>Reasons:</b> In Phase I the fixed factor is better utilised and division of labour raises efficiency. Later, the fixed factor becomes overcrowded, so each extra worker adds less and finally gets in the way.</span></p>",
          notes: ["Statement with assumption, schedule with phases marked, both TP and MP in every phase, and reasons.", "The schedule's numbers match the phases described."] }
      },
      mistakes: ["Describing only TP and not MP.", "A schedule whose numbers do not match the phases.", "Missing reasons."],
      tip: "Phase II ends exactly where MP = 0 and TP is at its maximum."
    }
  ]
});
