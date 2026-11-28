/* Revision Arena · Class XII Chemistry · Unit 3 · Chemical Kinetics (Parts 1-3 + exercises). Original cases; every number recomputed. */
NFArena.register({
  id: "chem12-ch3", cls: "XII", subject: "Chemistry", unit: "Unit", num: "3",
  title: "Chemical Kinetics",
  tagline: "Rate of reaction, rate law, order and molecularity, integrated rate equations, half-life, the Arrhenius equation, catalysts and collision theory.",
  notesLink: "../#chem12-ch3",
  concepts: {
    rate: { n: "Average and instantaneous rate", s: "rate" },
    stoich: { n: "Rate in terms of each species", s: "rate" },
    factors: { n: "Factors affecting rate", s: "rate" },
    law: { n: "Rate law and rate constant", s: "order" },
    order: { n: "Order and molecularity", s: "order" },
    units: { n: "Units of k", s: "order" },
    zero: { n: "Zero-order reactions", s: "integ" },
    first: { n: "First-order reactions", s: "integ" },
    half: { n: "Half-life", s: "integ" },
    pseudo: { n: "Pseudo-first-order reactions", s: "integ" },
    arr: { n: "Arrhenius equation and activation energy", s: "temp" },
    cat: { n: "Catalysts and collision theory", s: "temp" }
  },
  overview: {
    text: "Kinetics tells us <b>how fast</b> a reaction goes and <b>why</b>. The <b>rate law</b> links rate to concentrations through the <b>rate constant k</b> and the <b>order</b>. Integrated equations give concentration after time t and the <b>half-life</b>. The <b>Arrhenius equation</b> explains why rate rises sharply with temperature and why a <b>catalyst</b>, by lowering the activation energy, speeds a reaction up.",
    points: [
      "Rate = −(1/a) d[A]/dt = +(1/c) d[C]/dt; units mol L⁻¹ s⁻¹.",
      "Order is found by <b>experiment</b>; molecularity is the number of species in an <b>elementary</b> step.",
      "First order: <b>k = (2.303/t) log([R]₀/[R])</b>, <b>t½ = 0.693/k</b> (independent of [R]₀).",
      "<b>k = A e<sup>−Ea/RT</sup></b>; a 10 K rise roughly doubles the rate."
    ],
    map: {
      center: "Chemical Kinetics",
      branches: [
        { t: "Rate", c: ["Average vs instantaneous", "Stoichiometric factors", "Factors affecting rate"] },
        { t: "Rate law", c: ["k and order", "Molecularity", "Units of k"] },
        { t: "Integrated", c: ["Zero order", "First order", "Half-life", "Pseudo-first order"] },
        { t: "Temperature", c: ["Arrhenius equation", "Ea from two temperatures", "Catalysts", "Collision theory"] }
      ]
    }
  },
  sections: [
    {
      id: "rate", title: "Rate of a reaction", sub: "Change in concentration per unit time", icon: "⏱️", color: "#EC4899",
      quick: [
        "<b>Average rate</b> = −Δ[R]/Δt = +Δ[P]/Δt over a time interval; <b>instantaneous rate</b> = slope of the tangent at a moment (−d[R]/dt).",
        "For aA + bB → cC + dD: <b>rate = −(1/a)d[A]/dt = −(1/b)d[B]/dt = (1/c)d[C]/dt = (1/d)d[D]/dt</b>.",
        "Units: mol L⁻¹ s⁻¹ (for gases, atm s⁻¹).",
        "Rate depends on <b>concentration</b>, <b>temperature</b>, <b>catalyst</b>, nature of reactants and surface area."
      ],
      cards: [
        { t: "Worked: rates of each species", tag: "numerical", b: "<p>2N₂O₅ → 4NO₂ + O₂. If N₂O₅ disappears at 0.02 mol L⁻¹ s⁻¹:</p><p>rate = ½ × 0.02 = <b>0.01</b>; NO₂ forms at 4 × 0.01 = <b>0.04</b>; O₂ at <b>0.01</b> mol L⁻¹ s⁻¹.</p>" },
        { t: "Why a minus sign?", tag: "why", b: "<p>Reactant concentration falls, so Δ[R] is negative; the minus sign keeps the rate positive.</p>" }
      ],
      exam: ["Divide by the stoichiometric coefficient before comparing rates.", "Instantaneous rate = slope of the tangent on a [R] vs t graph."]
    },
    {
      id: "order", title: "Rate law, order and molecularity", sub: "How concentration controls rate", icon: "📐", color: "#7B4DFF",
      quick: [
        "<b>Rate law</b>: rate = k[A]<sup>x</sup>[B]<sup>y</sup>; x and y are found by <b>experiment</b>, not from the balanced equation.",
        "<b>Order</b> = x + y; it can be 0, a fraction or an integer.",
        "<b>Molecularity</b>: the number of species colliding in an <b>elementary</b> step; always a whole number (1, 2, rarely 3), never zero.",
        "For a complex reaction the <b>slowest step</b> (rate-determining step) decides the rate.",
        "<b>Units of k</b>: (mol L⁻¹)<sup>1−n</sup> s⁻¹: zero order mol L⁻¹ s⁻¹; first order s⁻¹; second order L mol⁻¹ s⁻¹.",
        "Initial-rate method: if doubling [A] doubles the rate, order in A = 1; if it quadruples, order = 2; no change, order = 0."
      ],
      table: { cap: "Order vs molecularity", head: ["Basis", "Order", "Molecularity"], rows: [["Found by", "Experiment", "Mechanism (elementary step)"], ["Values", "0, fraction, whole", "Whole number only"], ["Applies to", "Overall reaction", "Each elementary step"]] },
      cards: [
        { t: "Worked: order from the rate law", tag: "numerical", b: "<p>rate = k[A]<sup>1/2</sup>[B]<sup>3/2</sup>: order = ½ + 3/2 = <b>2</b>; k in <b>L mol⁻¹ s⁻¹</b>.</p>" },
        { t: "Worked: initial rates", tag: "numerical", b: "<p>[A] doubled, [B] fixed: rate ×4 ⇒ order 2 in A. [B] doubled, [A] fixed: rate ×2 ⇒ order 1 in B. <b>rate = k[A]²[B]</b>, overall 3.</p>" }
      ],
      exam: ["Never read the order from coefficients unless the step is elementary.", "Give the unit of k with the order."]
    },
    {
      id: "integ", title: "Integrated rate laws and half-life", sub: "Concentration after time t", icon: "📊", color: "#12B5A6",
      quick: [
        "<b>Zero order</b>: [R] = [R]₀ − kt; [R] vs t is a straight line of slope −k; <b>t½ = [R]₀/2k</b> (∝ [R]₀). E.g. decomposition of NH₃ on hot platinum.",
        "<b>First order</b>: <b>k = (2.303/t) log([R]₀/[R])</b>; log[R] vs t is a straight line of slope −k/2.303.",
        "<b>t½ = 0.693/k</b> for first order: independent of the starting concentration. Radioactive decay is first order.",
        "After n half-lives, the fraction left is (½)<sup>n</sup>.",
        "Time for 99% completion is twice the time for 90% in a first-order reaction.",
        "<b>Pseudo-first order</b>: one reactant in large excess, so its concentration hardly changes (hydrolysis of an ester in water; inversion of cane sugar)."
      ],
      cards: [
        { t: "Worked: first-order times", tag: "numerical", b: "<p>k = 0.0693 min⁻¹ ⇒ t½ = 0.693 ÷ 0.0693 = <b>10 min</b>.</p><p>90%: t = (2.303/k) log 10 = 2.303 ÷ 0.0693 = <b>33.2 min</b>. 99%: t = (2.303/k) log 100 = <b>66.5 min</b> (double).</p>" },
        { t: "Worked: fraction left", tag: "numerical", b: "<p>After 30 min (3 half-lives of 10 min): fraction left = (½)³ = <b>1/8</b> = 12.5%.</p>" },
        { t: "Memory hook", tag: "hook", b: "<p><b>“Zero depends, first forgets”</b>: zero-order t½ depends on [R]₀; first-order t½ forgets it.</p>" }
      ],
      exam: ["Write the integrated equation, then substitute with log of the ratio.", "Use 0.693/k for half-life questions in first order."]
    },
    {
      id: "temp", title: "Temperature, catalysts and collisions", sub: "Why reactions speed up", icon: "🔥", color: "#FF8A1F",
      quick: [
        "For many reactions, a <b>10 K rise roughly doubles</b> the rate (temperature coefficient ≈ 2).",
        "<b>Arrhenius equation</b>: k = A e<sup>−Ea/RT</sup>; ln k = ln A − Ea/RT, so ln k vs 1/T is a straight line of slope −Ea/R.",
        "Two temperatures: <b>log(k₂/k₁) = (Ea/2.303R)(1/T₁ − 1/T₂)</b>.",
        "<b>Activation energy Ea</b>: the extra energy needed to form the activated complex. Higher temperature increases the fraction of molecules with energy ≥ Ea.",
        "A <b>catalyst</b> gives an alternative path with <b>lower Ea</b>; it does <b>not</b> change ΔG or the equilibrium constant, and is unchanged at the end.",
        "<b>Collision theory</b>: rate = P Z<sub>AB</sub> e<sup>−Ea/RT</sup>; only collisions with enough energy and <b>proper orientation</b> are effective."
      ],
      cards: [
        { t: "Worked: Ea from a doubling", tag: "numerical", b: "<p>Rate doubles from 300 K to 310 K.</p><p>log 2 = (Ea/2.303 × 8.314)(1/300 − 1/310) ⇒ Ea = 2.303 × 8.314 × 0.3010 × (300 × 310/10) ≈ <b>53.6 kJ mol⁻¹</b>.</p>" },
        { t: "Why does a catalyst not shift equilibrium?", tag: "why", b: "<p>It lowers Ea for the forward and backward reactions equally, so both speed up by the same factor; equilibrium is reached sooner but at the same position.</p>" }
      ],
      exam: ["Use R = 8.314 J K⁻¹ mol⁻¹ and give Ea in kJ mol⁻¹.", "Draw an energy profile showing Ea with and without catalyst."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "rate", q: "Instantaneous rate?", a: "The rate at a particular moment: slope of the tangent to the concentration–time curve." },
    { k: "Formula", c: "stoich", q: "Rate of 2A → B in terms of A?", a: "−½ d[A]/dt." },
    { k: "Definition", c: "law", q: "Rate law?", a: "Rate = k[A]<sup>x</sup>[B]<sup>y</sup>, with x and y found by experiment." },
    { k: "Definition", c: "order", q: "Order of reaction?", a: "Sum of the powers of concentration terms in the rate law." },
    { k: "Definition", c: "order", q: "Molecularity?", a: "Number of reacting species colliding in an elementary step." },
    { k: "Fact", c: "order", q: "Can molecularity be zero or fractional?", a: "No; only order can." },
    { k: "Unit", c: "units", q: "Unit of k for a first-order reaction?", a: "s⁻¹." },
    { k: "Unit", c: "units", q: "Unit of k for a second-order reaction?", a: "L mol⁻¹ s⁻¹." },
    { k: "Formula", c: "zero", q: "Half-life of a zero-order reaction?", a: "t½ = [R]₀/2k." },
    { k: "Formula", c: "first", q: "Integrated first-order equation?", a: "k = (2.303/t) log([R]₀/[R])." },
    { k: "Formula", c: "half", q: "Half-life of a first-order reaction?", a: "t½ = 0.693/k." },
    { k: "Fact", c: "half", q: "Fraction left after 4 half-lives?", a: "1/16." },
    { k: "Example", c: "pseudo", q: "Example of pseudo-first-order reaction?", a: "Acid hydrolysis of ethyl acetate in excess water (or inversion of cane sugar)." },
    { k: "Formula", c: "arr", q: "Arrhenius equation?", a: "k = A e<sup>−Ea/RT</sup>." },
    { k: "Graph", c: "arr", q: "Slope of ln k vs 1/T?", a: "−Ea/R." },
    { k: "Rule", c: "arr", q: "Effect of a 10 K rise on rate (typical)?", a: "Rate nearly doubles." },
    { k: "Fact", c: "cat", q: "What does a catalyst lower?", a: "The activation energy (not ΔG or K)." },
    { k: "Fact", c: "cat", q: "Two conditions for an effective collision?", a: "Energy ≥ threshold, and proper orientation." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Milk on the kitchen counter",
      text: "<p><b>Mira</b> notices that milk left on the counter turns sour in about a day in summer but lasts much longer in the fridge. Her brother says the souring reaction is \"just slower when cold\".</p>",
      qs: [
        { q: "Which factor affecting rate is shown here, and why does it work?", m: 2, type: "Identify + explain", c: "arr", hint: "Energy of molecules.", points: [{ p: "Temperature", m: 1, k: ["temperature"] }, { p: "Lower T: fewer molecules have energy ≥ Ea, so fewer effective collisions", m: 1, k: ["ea", "activation", "fewer"] }], structure: ["Factor, then reason."], model: "<p><b>Temperature.</b> In the fridge fewer molecules have energy equal to or greater than the <b>activation energy</b>, so there are fewer effective collisions and the reaction is slower.</p>" },
        { q: "State the rule of thumb for how rate changes with a 10 K change in temperature.", m: 1, type: "State", c: "arr", hint: "Doubles.", points: [{ p: "Rate roughly doubles for every 10 K rise", m: 1, k: ["double", "2"] }], structure: ["One line."], model: "<p>For many reactions the rate roughly <b>doubles</b> for every 10 K rise in temperature.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "The disappearing dye",
      text: "<p>In a lab, a coloured dye fades by reacting with bleach: 2A → 3B. <b>Aarav</b> finds that [A] falls from 0.50 to 0.30 mol L⁻¹ in 100 s.</p>",
      qs: [
        { q: "Find the average rate of the reaction over this interval.", m: 2, type: "Numerical", c: "stoich", hint: "Divide by 2.", points: [{ p: "−Δ[A]/Δt = 0.20/100 = 2 × 10⁻³ mol L⁻¹ s⁻¹", m: 1, k: ["0.002", "2 × 10⁻³"] }, { p: "Rate = ½ × 2 × 10⁻³ = 1 × 10⁻³ mol L⁻¹ s⁻¹", m: 1, k: ["0.001", "1 × 10⁻³", "10⁻³"] }], structure: ["Rate of A, then rate of reaction."], model: "<p>−Δ[A]/Δt = (0.50 − 0.30) ÷ 100 = 2 × 10⁻³ mol L⁻¹ s⁻¹.</p><p>Rate = −½ Δ[A]/Δt = <b>1 × 10⁻³ mol L⁻¹ s⁻¹</b>.</p>" },
        { q: "At what rate is B forming?", m: 1, type: "Numerical", c: "stoich", hint: "Multiply by 3.", points: [{ p: "3 × 10⁻³ mol L⁻¹ s⁻¹", m: 1, k: ["0.003", "3 × 10⁻³"] }], structure: ["One step."], model: "<p>d[B]/dt = 3 × rate = <b>3 × 10⁻³ mol L⁻¹ s⁻¹</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "The hospital's tracer",
      text: "<p>A hospital uses a radioactive tracer whose decay is first order with <b>k = 0.0693 h⁻¹</b>. A batch is delivered at 8 am. <b>Dr Mathur</b> wants to know how long it stays useful.</p>",
      qs: [
        { q: "Find the half-life, and the fraction left after 30 hours.", m: 2, type: "Numerical", c: "half", hint: "0.693/k.", points: [{ p: "t½ = 0.693/0.0693 = 10 h", m: 1, k: ["10"] }, { p: "30 h = 3 half-lives: (½)³ = 1/8", m: 1, k: ["1/8", "12.5"] }], structure: ["t½, then fraction."], model: "<p>t½ = 0.693 ÷ 0.0693 = <b>10 h</b>. 30 h is three half-lives, so the fraction left is (½)³ = <b>1/8</b> (12.5%).</p>" },
        { q: "How long until 99% of the tracer has decayed? Compare with the time for 90%.", m: 3, type: "Numerical + compare", c: "first", hint: "log 100 = 2.", points: [{ p: "t = (2.303/k) log([R]₀/[R])", m: 1, k: ["2.303"] }, { p: "99%: 2.303 × 2/0.0693 = 66.5 h", m: 1, k: ["66.5", "66"] }, { p: "90%: 33.2 h, so 99% takes twice as long", m: 1, k: ["33.2", "twice", "double"] }], structure: ["Equation, 99%, 90%, compare."], model: "<p>t = (2.303/k) log([R]₀/[R]).</p><p>99%: t = (2.303 ÷ 0.0693) × log 100 = 33.2 × 2 = <b>66.5 h</b>. 90%: t = 33.2 × log 10 = <b>33.2 h</b>. So 99% takes <b>twice</b> as long as 90%.</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "Initial-rate experiments",
      text: "<p><b>Veer</b> studies A + B → products at 298 K:</p><p>Expt 1: [A] = 0.1, [B] = 0.1, rate = 2.0 × 10⁻³<br>Expt 2: [A] = 0.2, [B] = 0.1, rate = 8.0 × 10⁻³<br>Expt 3: [A] = 0.1, [B] = 0.2, rate = 4.0 × 10⁻³ (concentrations in mol L⁻¹, rates in mol L⁻¹ s⁻¹)</p>",
      qs: [
        { q: "Find the order with respect to A and B and write the rate law.", m: 2, type: "Deduce", c: "law", hint: "Compare pairs.", points: [{ p: "Expts 1→2: [A] ×2, rate ×4 ⇒ order 2 in A; 1→3: [B] ×2, rate ×2 ⇒ order 1 in B", m: 1, k: ["2", "1"] }, { p: "rate = k[A]²[B]", m: 1, k: ["[a]²", "[a]^2", "a²"] }], structure: ["Each order, then the law."], model: "<p>Expts 1 and 2: doubling [A] makes the rate 4 times ⇒ <b>second order in A</b>. Expts 1 and 3: doubling [B] doubles the rate ⇒ <b>first order in B</b>.</p><p><b>rate = k[A]²[B]</b>.</p>" },
        { q: "Find the overall order, the value of k and its unit.", m: 2, type: "Numerical", c: "units", hint: "Use Expt 1.", points: [{ p: "Overall order 3", m: 1, k: ["3", "three"] }, { p: "k = 2.0 × 10⁻³ ÷ (0.1² × 0.1) = 2.0 L² mol⁻² s⁻¹", m: 1, k: ["2", "l² mol⁻² s⁻¹", "l2"] }], structure: ["Order, then k with unit."], model: "<p>Overall order = 2 + 1 = <b>3</b>.</p><p>k = 2.0 × 10⁻³ ÷ (0.1² × 0.1) = 2.0 × 10⁻³ ÷ 10⁻³ = <b>2.0 L² mol⁻² s⁻¹</b>.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "The car's catalytic converter",
      text: "<p>An automobile lab measures a reaction whose rate constant <b>doubles from 300 K to 310 K</b>. A catalytic converter (platinum/rhodium) makes the same exhaust reaction fast even at lower temperature. <b>Naina</b> wonders whether the catalyst also changes how much product forms at equilibrium. (R = 8.314 J K⁻¹ mol⁻¹.)</p>",
      qs: [
        { q: "Calculate the activation energy of the uncatalysed reaction.", m: 3, type: "Numerical", c: "arr", hint: "log(k₂/k₁) = (Ea/2.303R)(1/T₁ − 1/T₂).", points: [{ p: "Correct equation with k₂/k₁ = 2", m: 1, k: ["log 2", "2.303"] }, { p: "(1/300 − 1/310) = 10/93 000", m: 1, k: ["93000", "93 000", "1.075"] }, { p: "Ea ≈ 53.6 kJ mol⁻¹", m: 1, k: ["53.6", "53.5", "53598"] }], structure: ["Equation, substitution, answer."], model: "<p>log(k₂/k₁) = (Ea/2.303R)(1/T₁ − 1/T₂) ⇒ log 2 = (Ea/2.303 × 8.314) × (10/93 000).</p><p>Ea = 0.3010 × 2.303 × 8.314 × 9300 ≈ 53 600 J mol⁻¹ = <b>53.6 kJ mol⁻¹</b>.</p>" },
        { q: "How does the converter speed up the reaction? Answer Naina's question.", m: 2, type: "Explain", c: "cat", hint: "Lower Ea; K unchanged.", points: [{ p: "Provides an alternative path with lower activation energy", m: 1, k: ["lower", "activation", "alternative"] }, { p: "Does not change ΔG or the equilibrium constant; equilibrium is only reached faster", m: 1, k: ["equilibrium", "same", "not change"] }], structure: ["Mechanism, then equilibrium."], model: "<p>The catalyst offers an <b>alternative pathway with lower activation energy</b>, so more molecules can react at a given temperature.</p><p>It speeds up the forward and backward reactions equally, so it <b>does not change ΔG or K</b>: the same amount of product forms at equilibrium, just sooner.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "units", q: "The unit of the rate constant of a first-order reaction is:", o: ["s⁻¹", "mol L⁻¹ s⁻¹", "L mol⁻¹ s⁻¹", "No unit"], a: 0, hint: "(mol L⁻¹)⁰ s⁻¹.", why: "<b>s⁻¹</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "half", q: "Half-life of a first-order reaction with k = 0.693 s⁻¹ is:", o: ["1 s", "0.693 s", "2 s", "0.5 s"], a: 0, hint: "0.693/k.", why: "<b>1 s</b>." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "order", q: "For rate = k[A]<sup>1/2</sup>[B]<sup>3/2</sup>, the overall order is:", o: ["2", "1.5", "3", "0.5"], a: 0, hint: "Add powers.", why: "½ + 3/2 = <b>2</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "zero", q: "For a zero-order reaction, the half-life is:", o: ["Proportional to [R]₀", "Independent of [R]₀", "Inversely proportional to [R]₀", "Always 0.693/k"], a: 0, hint: "[R]₀/2k.", why: "t½ = [R]₀/2k: <b>proportional to [R]₀</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "arr", q: "In the Arrhenius plot of ln k against 1/T, the slope equals:", o: ["−Ea/R", "Ea/R", "−Ea/2.303R", "ln A"], a: 0, hint: "ln k = ln A − Ea/RT.", why: "<b>−Ea/R</b>." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "first", q: "A first-order reaction is 75% complete in 60 min. Its half-life is:", o: ["30 min", "60 min", "15 min", "45 min"], a: 0, hint: "75% = 2 half-lives.", why: "¼ left = 2 half-lives ⇒ t½ = <b>30 min</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "law", q: "Doubling [A] makes the rate 8 times. The order with respect to A is:", o: ["3", "2", "8", "4"], a: 0, hint: "2ⁿ = 8.", why: "2³ = 8: <b>order 3</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "cat", q: "A catalyst changes the:", o: ["Activation energy", "Equilibrium constant", "ΔG of reaction", "Enthalpy of reaction"], a: 0, hint: "New path.", why: "Only <b>Ea</b> is lowered." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "order", q: "Molecularity of a reaction can be zero.", r: "Molecularity is the number of species that collide in an elementary step.", a: 3, hint: "Can zero molecules collide?", why: "A is false (at least one species is needed); R is true." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "half", q: "The half-life of a first-order reaction does not depend on the initial concentration.", r: "For a first-order reaction t½ = 0.693/k.", a: 0, hint: "No [R]₀ in the formula.", why: "Both true, and R explains A." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "cat", q: "A catalyst increases the rate of both forward and backward reactions equally.", r: "A catalyst increases the equilibrium constant.", a: 2, hint: "K unchanged.", why: "A is true; R is false (K is not changed)." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "law", q: "The order of a reaction can be found from its balanced equation.", a: false, hint: "Experiment.", why: "False: order is found <b>experimentally</b>." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "first", q: "Radioactive decay follows first-order kinetics.", a: true, hint: "Half-life constant.", why: "True." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "pseudo", q: "Acid hydrolysis of ethyl acetate in excess water is a pseudo-first-order reaction.", a: true, hint: "Water in excess.", why: "True: [H₂O] hardly changes." },
    { id: "q15", t: "match", d: "E", m: 4, c: "units", q: "Match the order with the unit of k.", pairs: [["Zero order", "mol L⁻¹ s⁻¹"], ["First order", "s⁻¹"], ["Second order", "L mol⁻¹ s⁻¹"], ["Third order", "L² mol⁻² s⁻¹"]], hint: "(mol L⁻¹)<sup>1−n</sup> s⁻¹.", why: "Each unit follows from the formula." },
    { id: "q16", t: "match", d: "M", m: 4, c: "first", q: "Match the plot with the straight-line order.", pairs: [["[R] vs t", "Zero order"], ["log [R] vs t", "First order"], ["ln k vs 1/T", "Arrhenius plot"], ["Rate vs [R] (horizontal line)", "Zero order: rate independent of [R]"]], hint: "Which is linear?", why: "Each plot is linear for one case." },
    { id: "q17", t: "match", d: "M", m: 4, c: "factors", q: "Match the observation with the factor.", pairs: [["Powdered chalk reacts faster than a lump", "Surface area"], ["Food lasts longer in the fridge", "Temperature"], ["H₂O₂ decomposes fast with MnO₂", "Catalyst"], ["Stronger acid dissolves zinc faster", "Concentration"]], hint: "One each.", why: "Each observation shows one factor." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "arr", q: "The minimum extra energy that colliding molecules need to react is the ______ energy.", acc: ["activation"], hint: "Ea.", why: "<b>Activation</b> energy." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "half", q: "The fraction of a first-order reactant left after 4 half-lives is ______.", acc: ["1/16", "0.0625"], hint: "(½)⁴.", why: "<b>1/16</b>." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "first", q: "If k = 0.0693 min⁻¹, the time for 90% completion is about ______ min.", acc: ["33.2", "33.23", "33"], hint: "2.303/k.", why: "2.303 ÷ 0.0693 ≈ <b>33.2 min</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "stoich", q: "In 2N₂O₅ → 4NO₂ + O₂, if O₂ forms at 0.01 mol L⁻¹ s⁻¹, NO₂ forms at ______ mol L⁻¹ s⁻¹.", acc: ["0.04"], hint: "×4.", why: "<b>0.04</b>." },
    { id: "q22", t: "short", d: "E", m: 1, c: "order", q: "Which step decides the rate of a complex reaction?", acc: ["slowest step", "slowest", "rate determining step", "rate-determining step", "slow step"], hint: "Bottleneck.", why: "The <b>slowest</b> (rate-determining) step." },
    { id: "q23", t: "short", d: "M", m: 1, c: "zero", q: "Give one example of a zero-order reaction.", acc: ["decomposition of ammonia on platinum", "nh3 on platinum", "ammonia on hot platinum", "decomposition of nh3", "decomposition of ammonia"], hint: "Gas on a hot metal surface.", why: "Decomposition of <b>NH₃ on hot platinum</b>." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "order", q: "Distinguish between order and molecularity on three points.", hint: "How found, values, applies to.", why: "", points: [{ p: "Order: experimental; molecularity: theoretical (from mechanism)", m: 1, k: ["experiment", "mechanism", "theoretical"] }, { p: "Order can be 0 or fractional; molecularity only whole numbers", m: 1, k: ["fraction", "zero", "whole"] }, { p: "Order for overall reaction; molecularity for each elementary step", m: 1, k: ["elementary", "overall"] }], model: "<p>(i) <b>Order</b> is found by experiment; <b>molecularity</b> comes from the mechanism.</p><p>(ii) Order can be zero or fractional; molecularity is always a whole number (1, 2 or 3).</p><p>(iii) Order applies to the overall reaction; molecularity to each <b>elementary step</b>.</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "first", q: "Show that for a first-order reaction the time for 99% completion is twice the time for 90% completion.", hint: "log 100 vs log 10.", why: "", points: [{ p: "t = (2.303/k) log([R]₀/[R])", m: 1, k: ["2.303"] }, { p: "t₉₉ = (2.303/k) log 100 = 2 × 2.303/k; t₉₀ = (2.303/k) log 10 = 2.303/k", m: 1, k: ["log 100", "log 10"] }, { p: "So t₉₉ = 2 t₉₀", m: 1, k: ["2", "twice"] }], model: "<p>t = (2.303/k) log([R]₀/[R]).</p><p>99%: [R] = [R]₀/100 ⇒ t₉₉ = (2.303/k) × 2. 90%: [R] = [R]₀/10 ⇒ t₉₀ = (2.303/k) × 1.</p><p>Hence <b>t₉₉ = 2 t₉₀</b>.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "cat", q: "Explain collision theory and state two ways a catalyst affects a reaction.", hint: "Energy + orientation; lower Ea, K same.", why: "", points: [{ p: "Reaction occurs through collisions of molecules", m: 1, k: ["collision"] }, { p: "Effective only with energy ≥ threshold and proper orientation (rate = PZe<sup>−Ea/RT</sup>)", m: 1, k: ["orientation", "threshold", "energy"] }, { p: "Catalyst lowers Ea via an alternative path", m: 1, k: ["lower", "alternative"] }, { p: "Catalyst does not change ΔG or K", m: 1, k: ["equilibrium", "δg", "k"] }], model: "<p><b>Collision theory:</b> molecules must collide to react, but only collisions with energy at least equal to the <b>threshold energy</b> and the <b>proper orientation</b> are effective: rate = P Z<sub>AB</sub> e<sup>−Ea/RT</sup>.</p><p>A catalyst (i) provides an <b>alternative path with lower Ea</b>, and (ii) <b>does not change ΔG or K</b>; it only helps equilibrium be reached sooner.</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "arr", q: "The rate constant of a reaction doubles when temperature rises from 300 K to 310 K. Calculate Ea (R = 8.314 J K⁻¹ mol⁻¹, log 2 = 0.3010).", hint: "Two-temperature form.", why: "", points: [{ p: "log(k₂/k₁) = (Ea/2.303R)(1/T₁ − 1/T₂)", m: 1, k: ["2.303"] }, { p: "0.3010 = (Ea/19.147)(10/93 000)", m: 1, k: ["19.14", "93000", "93 000"] }, { p: "Ea = 0.3010 × 19.147 × 9300", m: 1, k: ["9300"] }, { p: "Ea ≈ 53.6 kJ mol⁻¹", m: 1, k: ["53.6", "53.5"] }], model: "<p>log(k₂/k₁) = (Ea/2.303R)(1/T₁ − 1/T₂).</p><p>0.3010 = (Ea ÷ 19.147) × (10 ÷ 93 000).</p><p>Ea = 0.3010 × 19.147 × 9300 ≈ 53 600 J mol⁻¹ = <b>53.6 kJ mol⁻¹</b>.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "first", q: "(a) Derive the integrated rate equation for a first-order reaction. (b) Show that its half-life is independent of [R]₀. (c) A first-order reaction has k = 1.15 × 10⁻³ s⁻¹. How long will 5 g take to reduce to 3 g? (log 5/3 = 0.2219)", hint: "Integrate d[R]/[R].", why: "", points: [{ p: "−d[R]/dt = k[R] ⇒ d[R]/[R] = −k dt", m: 1, k: ["d[r]", "k dt"] }, { p: "Integrate: ln[R] = −kt + ln[R]₀", m: 1, k: ["ln"] }, { p: "k = (2.303/t) log([R]₀/[R])", m: 1, k: ["2.303"] }, { p: "At t½, [R] = [R]₀/2 ⇒ t½ = 0.693/k, no [R]₀", m: 1, k: ["0.693"] }, { p: "t = (2.303/1.15 × 10⁻³) × 0.2219", m: 1, k: ["0.2219", "2003"] }, { p: "t ≈ 444 s", m: 1, k: ["444"] }], model: "<p>(a) −d[R]/dt = k[R] ⇒ ∫d[R]/[R] = −k∫dt ⇒ ln[R] = −kt + ln[R]₀ ⇒ <b>k = (2.303/t) log([R]₀/[R])</b>.</p><p>(b) At t = t½, [R] = [R]₀/2: k = (2.303/t½) log 2 ⇒ <b>t½ = 0.693/k</b>, which contains no [R]₀.</p><p>(c) t = (2.303 ÷ 1.15 × 10⁻³) × log(5/3) = 2003 × 0.2219 ≈ <b>444 s</b>.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "factors", q: "Kindling (small wood pieces) catches fire faster than a big log because of greater:", o: ["Surface area", "Activation energy", "Molecularity", "Half-life"], a: 0, hint: "More exposed.", why: "<b>Surface area</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "pseudo", q: "Cane sugar is inverted in a large excess of water with acid. The reaction behaves as:", o: ["Pseudo-first order", "Second order", "Zero order", "Third order"], a: 0, hint: "Water excess.", why: "<b>Pseudo-first order</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "half", passage: "A sample of 80 g of a radioactive isotope (t½ = 5 days) is kept for 15 days.", q: "Mass left:", o: ["10 g", "20 g", "40 g", "5 g"], a: 0, hint: "3 half-lives.", why: "80 → 40 → 20 → <b>10 g</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "zero", passage: "Ammonia decomposes on a hot platinum surface; the rate stays the same whatever the ammonia pressure.", q: "The order is:", o: ["Zero", "First", "Second", "Fractional"], a: 0, hint: "Rate independent of concentration.", why: "<b>Zero order</b>: the surface is saturated." },
    { id: "q33", t: "case", d: "C", m: 1, c: "arr", passage: "A lab finds that raising the temperature by 10 K increases k by a factor of 3 for reaction X but only 1.5 for reaction Y.", q: "Which reaction has the higher activation energy?", o: ["X", "Y", "Equal", "Cannot say"], a: 0, hint: "Bigger change, bigger Ea.", why: "Reactions with higher Ea are <b>more sensitive</b> to temperature: <b>X</b>." }
  ],
  find: {
    mcq: [
      { s: "Slope of the tangent to the [R]–t curve at a moment.", o: ["Instantaneous rate", "Average rate", "Rate constant", "Half-life"], a: 0, c: "rate", d: "E", why: "<b>Instantaneous rate</b>." },
      { s: "−½ d[A]/dt for 2A → products.", o: ["Rate of reaction", "Rate constant", "Order", "Molecularity"], a: 0, c: "stoich", d: "E", why: "<b>Rate of reaction</b>." },
      { s: "Crushed tablet dissolves and acts faster than a whole one.", o: ["Surface area", "Catalyst", "Order", "Pressure"], a: 0, c: "factors", d: "E", why: "<b>Surface area</b>." },
      { s: "rate = k[A]²[B].", o: ["Rate law", "Arrhenius equation", "Integrated equation", "Molecularity"], a: 0, c: "law", d: "E", why: "<b>Rate law</b>." },
      { s: "The sum of the powers in the rate law.", o: ["Order", "Molecularity", "Rate constant", "Activation energy"], a: 0, c: "order", d: "E", why: "<b>Order</b>." },
      { s: "Two molecules colliding in a single elementary step.", o: ["Bimolecular", "Second order always", "Zero order", "Pseudo-first order"], a: 0, c: "order", d: "M", why: "Molecularity 2: <b>bimolecular</b>." },
      { s: "k measured in L mol⁻¹ s⁻¹.", o: ["Second order", "First order", "Zero order", "Third order"], a: 0, c: "units", d: "M", why: "<b>Second order</b>." },
      { s: "[R] falls by the same amount every minute.", o: ["Zero order", "First order", "Second order", "Pseudo-first order"], a: 0, c: "zero", d: "M", why: "Constant rate: <b>zero order</b>." },
      { s: "log[R] vs t gives a straight line.", o: ["First order", "Zero order", "Second order", "Arrhenius"], a: 0, c: "first", d: "M", why: "<b>First order</b>." },
      { s: "Time taken for half the reactant to be used up.", o: ["Half-life", "Rate constant", "Activation energy", "Average rate"], a: 0, c: "half", d: "E", why: "<b>Half-life</b>." },
      { s: "Drug level in blood halves every 4 hours, whatever the dose.", o: ["First-order half-life", "Zero-order half-life", "Catalysis", "Molecularity"], a: 0, c: "half", d: "C", why: "Constant t½: <b>first order</b>." },
      { s: "One reactant in huge excess so its concentration barely changes.", o: ["Pseudo-first order", "Zero order", "Bimolecular", "Elementary"], a: 0, c: "pseudo", d: "M", why: "<b>Pseudo-first order</b>." },
      { s: "k = A e<sup>−Ea/RT</sup>.", o: ["Arrhenius equation", "Rate law", "Nernst equation", "Integrated rate law"], a: 0, c: "arr", d: "E", why: "<b>Arrhenius equation</b>." },
      { s: "The energy barrier between reactants and the activated complex.", o: ["Activation energy", "Enthalpy of reaction", "Gibbs energy", "Threshold frequency"], a: 0, c: "arr", d: "M", why: "<b>Activation energy</b>." },
      { s: "MnO₂ makes H₂O₂ decompose fast and is recovered unchanged.", o: ["Catalyst", "Reactant", "Inhibitor", "Product"], a: 0, c: "cat", d: "C", why: "<b>Catalyst</b>." },
      { s: "Molecules collide with enough energy but bounce apart because they hit the wrong way.", o: ["Improper orientation", "Low concentration", "Zero order", "Catalyst poisoning"], a: 0, c: "cat", d: "C", why: "<b>Orientation</b> matters in collision theory." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["rate ∝ [A]⁰.", "Zero order", "zero"], ["t½ = 0.693/k.", "First order", "first"], ["Ethyl acetate + excess water.", "Pseudo-first order", "pseudo"], ["Slope of ln k vs 1/T is −Ea/R.", "Arrhenius equation", "arr"], ["Lowers Ea, K unchanged.", "Catalyst", "cat"], ["Number of species in an elementary step.", "Molecularity", "order"]] }
    ],
    wrong: [
      { stmts: ["Order can be fractional.", "Molecularity can be zero.", "Order is found by experiment.", "Molecularity applies to elementary steps."], a: 1, c: "order", why: "Molecularity is <b>never zero</b>." },
      { stmts: ["First-order t½ = 0.693/k.", "Zero-order t½ = [R]₀/2k.", "First-order t½ depends on [R]₀.", "Radioactive decay is first order."], a: 2, c: "half", why: "First-order t½ is <b>independent</b> of [R]₀." },
      { stmts: ["A catalyst lowers Ea.", "A catalyst changes the equilibrium constant.", "A catalyst is unchanged at the end.", "A catalyst provides an alternative path."], a: 1, c: "cat", why: "A catalyst does <b>not</b> change K." }
    ],
    para: [
      { target: "Effect of temperature", c: "arr", sents: ["Riya's family runs a pickle business.", "They store jars in a cool cellar because pickles spoil much faster in the hot kitchen.", "They sell mango and lime pickles.", "Orders come mostly from Delhi."], a: 1, why: "Faster spoiling when hot: <b>temperature</b>." },
      { target: "Catalyst", c: "cat", sents: ["Karan was making oxygen in the lab.", "The H₂O₂ bubbled slowly at first.", "When he added a pinch of MnO₂, it fizzed rapidly, and the MnO₂ was left over at the end.", "He collected the gas over water."], a: 2, why: "Speeds up, recovered unchanged: <b>catalyst</b>." },
      { target: "First-order half-life", c: "half", sents: ["A hospital stores a medicine in vials.", "Each vial is labelled with the batch number.", "Whatever the starting dose, half the medicine breaks down every 6 months.", "Vials are kept away from sunlight."], a: 2, why: "Constant half-life: <b>first order</b>." }
    ],
    explain: [
      { s: "Order of 2NO + O₂ → 2NO₂ cannot be guessed from the coefficients.", o: ["Order is found by experiment", "Coefficients are wrong", "NO is a catalyst", "It is zero order"], a: 0, c: "law", why: "The clue is <i>cannot be guessed</i>: order is <b>experimental</b>." },
      { s: "The hydrolysis of an ester in plenty of water follows first-order kinetics though two molecules react.", o: ["Water is in large excess (pseudo-first order)", "Water is a catalyst", "Ester is zero order", "Molecularity is 1"], a: 0, c: "pseudo", why: "<b>Excess water</b> keeps its concentration constant." },
      { s: "A small rise in temperature greatly increases the rate.", o: ["More molecules gain energy ≥ Ea", "Ea becomes zero", "Molecularity increases", "Catalyst is formed"], a: 0, c: "arr", why: "The fraction of molecules with energy ≥ Ea rises <b>sharply</b>." },
      { s: "A platinum gauze speeds up a reaction but the final amounts at equilibrium do not change.", o: ["Catalyst lowers Ea, K unchanged", "Platinum reacts", "Order changes", "ΔG becomes more negative"], a: 0, c: "cat", why: "Catalysts change <b>rate only</b>." }
    ]
  }
});
