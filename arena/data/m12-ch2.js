/* Revision Arena · Class XII Mathematics · Chapter 2 · Inverse Trigonometric Functions (rationalised syllabus: domain, range, principal value branches, graphs). Original examples; every value rechecked. */
NFArena.register({
  id: "m12-ch2", cls: "XII", subject: "Mathematics", unit: "Chapter", num: "2",
  title: "Inverse Trigonometric Functions",
  tagline: "Why trigonometric functions need restricted domains, the six principal value branches, finding principal values, and reading the graphs.",
  notesLink: "../#m12-ch2",
  concepts: {
    why: { n: "Restricting domains to get inverses", s: "basics" },
    sininv: { n: "sin⁻¹ and cosec⁻¹", s: "branches" },
    cosinv: { n: "cos⁻¹ and sec⁻¹", s: "branches" },
    taninv: { n: "tan⁻¹ and cot⁻¹", s: "branches" },
    pv: { n: "Principal values", s: "pv" },
    comp: { n: "Expressions like sin⁻¹(sin x)", s: "pv" },
    graph: { n: "Graphs of inverse trig functions", s: "basics" }
  },
  overview: {
    text: "Trigonometric functions repeat, so they are not one-one on ℝ. To get an inverse we <b>restrict the domain</b> to one branch where the function is one-one and onto. The chosen branch is the <b>principal value branch</b>, and the output of the inverse function is its <b>principal value</b>. The graph of an inverse function is the mirror image of the restricted graph in the line y = x.",
    points: [
      "sin⁻¹: domain [−1, 1], range [−π/2, π/2].  cos⁻¹: domain [−1, 1], range [0, π].",
      "tan⁻¹: domain ℝ, range (−π/2, π/2).  cot⁻¹: domain ℝ, range (0, π).",
      "sec⁻¹: domain ℝ − (−1, 1), range [0, π] − {π/2}.  cosec⁻¹: domain ℝ − (−1, 1), range [−π/2, π/2] − {0}.",
      "sin⁻¹x does <b>not</b> mean 1/sin x."
    ],
    map: {
      center: "Inverse trig",
      branches: [
        { t: "Why restrict", c: ["Not one-one on ℝ", "Pick one branch", "Mirror in y = x"] },
        { t: "Ranges", c: ["sin⁻¹, tan⁻¹, cosec⁻¹: around 0", "cos⁻¹, cot⁻¹, sec⁻¹: 0 to π"] },
        { t: "Principal values", c: ["Negative inputs", "Check the range", "Common angles"] },
        { t: "Traps", c: ["sin⁻¹(sin x) ≠ x always", "Domain of sin⁻¹", "sin⁻¹x ≠ 1/sin x"] }
      ]
    }
  },
  sections: [
    {
      id: "basics", title: "Why we restrict and what the graphs look like", sub: "Making trig functions invertible", icon: "🔁", color: "#2F6BFF",
      quick: [
        "A function has an inverse only if it is <b>one-one and onto</b>. sin x is neither on ℝ (it repeats every 2π and its values lie in [−1, 1]).",
        "Restrict sin to [−π/2, π/2] → onto [−1, 1]: now it is a bijection, so <b>sin⁻¹: [−1, 1] → [−π/2, π/2]</b> exists.",
        "Restrict cos to [0, π] and tan to (−π/2, π/2) in the same way.",
        "<b>sin⁻¹x</b> is an angle; it means arcsin x, not (sin x)⁻¹ = 1/sin x.",
        "Graph of y = sin⁻¹x is the reflection of y = sin x (on [−π/2, π/2]) in the line <b>y = x</b>. It rises from (−1, −π/2) to (1, π/2).",
        "y = cos⁻¹x falls from (−1, π) to (1, 0); y = tan⁻¹x rises between the horizontal asymptotes y = −π/2 and y = π/2."
      ],
      cards: [
        { t: "Mirror trick", tag: "hook", b: "<p>Swap the axes of the restricted trig graph (reflect in y = x) and you have the inverse graph. Domain and range swap too.</p>" },
        { t: "Common mistake", tag: "trap", b: "<p>sin⁻¹(2) is <b>not defined</b>: 2 lies outside [−1, 1]. But tan⁻¹(2) exists, since tan⁻¹ accepts every real number.</p>" }
      ],
      exam: ["When asked for domain or range, write intervals with correct brackets.", "Sketch graphs with end points marked."]
    },
    {
      id: "branches", title: "The six principal value branches", sub: "Domains and ranges to memorise", icon: "📏", color: "#12B5A6",
      quick: [
        "<b>sin⁻¹</b>: [−1, 1] → [−π/2, π/2]. <b>cosec⁻¹</b>: ℝ − (−1, 1) → [−π/2, π/2] − {0}.",
        "<b>cos⁻¹</b>: [−1, 1] → [0, π]. <b>sec⁻¹</b>: ℝ − (−1, 1) → [0, π] − {π/2}.",
        "<b>tan⁻¹</b>: ℝ → (−π/2, π/2). <b>cot⁻¹</b>: ℝ → (0, π).",
        "Group 1 (sin⁻¹, tan⁻¹, cosec⁻¹): range is <b>around 0</b>; a negative input gives a <b>negative</b> angle.",
        "Group 2 (cos⁻¹, cot⁻¹, sec⁻¹): range is <b>0 to π</b>; a negative input gives an angle in (π/2, π].",
        "Open or closed: tan⁻¹ and cot⁻¹ have open ranges (never reach ±π/2 or 0, π)."
      ],
      table: { cap: "Principal value branches", head: ["Function", "Domain", "Range"], rows: [["sin⁻¹x", "[−1, 1]", "[−π/2, π/2]"], ["cos⁻¹x", "[−1, 1]", "[0, π]"], ["tan⁻¹x", "ℝ", "(−π/2, π/2)"], ["cot⁻¹x", "ℝ", "(0, π)"], ["sec⁻¹x", "ℝ − (−1, 1)", "[0, π] − {π/2}"], ["cosec⁻¹x", "ℝ − (−1, 1)", "[−π/2, π/2] − {0}"]] },
      cards: [
        { t: "Memory hook", tag: "hook", b: "<p><b>“S-T-Co around zero; Co-Co-Se from zero to π.”</b> sin⁻¹, tan⁻¹, cosec⁻¹ sit around 0; cos⁻¹, cot⁻¹, sec⁻¹ run from 0 to π.</p>" }
      ],
      exam: ["Learn the table: a 1-mark question is very common.", "Remember the excluded points: π/2 for sec⁻¹, 0 for cosec⁻¹."]
    },
    {
      id: "pv", title: "Finding principal values", sub: "The answer must lie in the range", icon: "🎯", color: "#FF8A1F",
      quick: [
        "Find an angle with the right trig value, then make sure it lies in the principal range.",
        "sin⁻¹(−1/2) = <b>−π/6</b>; cos⁻¹(−1/2) = <b>2π/3</b>; tan⁻¹(−1) = <b>−π/4</b>; cot⁻¹(−√3) = <b>5π/6</b>; sec⁻¹(2) = <b>π/3</b>; cosec⁻¹(−√2) = <b>−π/4</b>.",
        "<b>sin⁻¹(sin x) = x only if x ∈ [−π/2, π/2]</b>. Otherwise find the angle in that range with the same sine: sin⁻¹(sin 3π/5) = π − 3π/5 = <b>2π/5</b>.",
        "<b>cos⁻¹(cos x) = x only if x ∈ [0, π]</b>: cos⁻¹(cos 7π/6) = 2π − 7π/6 = <b>5π/6</b>.",
        "tan⁻¹(tan 3π/4) = <b>−π/4</b> (3π/4 is outside (−π/2, π/2); tan has period π).",
        "Combine values only after finding each one: tan⁻¹(√3) − sec⁻¹(−2) = π/3 − 2π/3 = <b>−π/3</b>."
      ],
      cards: [
        { t: "Worked: cos⁻¹(−√3/2)", tag: "example", b: "<p>cos(π/6) = √3/2. The angle in [0, π] with cosine −√3/2 is π − π/6 = <b>5π/6</b>.</p>" },
        { t: "Worked: sin⁻¹(sin 2π/3)", tag: "example", b: "<p>2π/3 is outside [−π/2, π/2]. sin(2π/3) = sin(π/3) and π/3 is in range, so the answer is <b>π/3</b>.</p>" }
      ],
      exam: ["Write the range first, then the value.", "For sin⁻¹(sin x)-type questions, never just cancel."]
    }
  ],
  flashcards: [
    { k: "Range", c: "sininv", q: "Range of sin⁻¹x?", a: "[−π/2, π/2]." },
    { k: "Range", c: "cosinv", q: "Range of cos⁻¹x?", a: "[0, π]." },
    { k: "Range", c: "taninv", q: "Range of tan⁻¹x?", a: "(−π/2, π/2)." },
    { k: "Range", c: "taninv", q: "Range of cot⁻¹x?", a: "(0, π)." },
    { k: "Range", c: "cosinv", q: "Range of sec⁻¹x?", a: "[0, π] − {π/2}." },
    { k: "Range", c: "sininv", q: "Range of cosec⁻¹x?", a: "[−π/2, π/2] − {0}." },
    { k: "Domain", c: "sininv", q: "Domain of sin⁻¹x?", a: "[−1, 1]." },
    { k: "Domain", c: "cosinv", q: "Domain of sec⁻¹x?", a: "ℝ − (−1, 1)." },
    { k: "Value", c: "pv", q: "sin⁻¹(−1/2)?", a: "−π/6." },
    { k: "Value", c: "pv", q: "cos⁻¹(−1/2)?", a: "2π/3." },
    { k: "Value", c: "pv", q: "tan⁻¹(−1)?", a: "−π/4." },
    { k: "Value", c: "pv", q: "cot⁻¹(−√3)?", a: "5π/6." },
    { k: "Value", c: "pv", q: "sec⁻¹(2)?", a: "π/3." },
    { k: "Value", c: "comp", q: "sin⁻¹(sin 3π/5)?", a: "2π/5." },
    { k: "Value", c: "comp", q: "cos⁻¹(cos 7π/6)?", a: "5π/6." },
    { k: "Trap", c: "why", q: "Does sin⁻¹x mean 1/sin x?", a: "No; 1/sin x is cosec x." },
    { k: "Reason", c: "why", q: "Why restrict sin x before inverting?", a: "It is not one-one on ℝ." },
    { k: "Graph", c: "graph", q: "Graph of y = sin⁻¹x is the reflection of… in…", a: "y = sin x on [−π/2, π/2], in the line y = x." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "The ramp designer",
      text: "<p>An architect designs a wheelchair ramp. The ratio of height to sloping length is sin θ = 1/2. Another ramp has height equal to its horizontal run, so tan θ = 1.</p>",
      qs: [
        { q: "Find the angle of each ramp using inverse trig functions.", m: 2, type: "Principal value", c: "pv", hint: "sin⁻¹(1/2), tan⁻¹(1).", points: [{ p: "θ₁ = sin⁻¹(1/2) = π/6 (30°)", m: 1, k: ["π/6", "30"] }, { p: "θ₂ = tan⁻¹(1) = π/4 (45°)", m: 1, k: ["π/4", "45"] }], structure: ["Each angle."], model: "<p>θ₁ = sin⁻¹(1/2) = <b>π/6</b> (30°). θ₂ = tan⁻¹(1) = <b>π/4</b> (45°).</p>" },
        { q: "Why can't a ramp have sin θ = 1.2?", m: 1, type: "Explain", c: "sininv", hint: "Domain.", points: [{ p: "1.2 is outside [−1, 1], the domain of sin⁻¹; no such angle", m: 1, k: ["domain", "[−1, 1]", "[-1, 1]"] }], structure: ["One line."], model: "<p>sin θ can never exceed 1; 1.2 lies outside <b>[−1, 1]</b>, the domain of sin⁻¹, so no angle exists.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "Calculator check",
      text: "<p><b>Anya</b>'s calculator (in radians) gives cos⁻¹(−0.5) = 2.094 and sin⁻¹(−0.5) = −0.524.</p>",
      qs: [
        { q: "Write these values in terms of π and explain why one is negative and the other positive.", m: 3, type: "Explain", c: "pv", hint: "Ranges.", points: [{ p: "cos⁻¹(−1/2) = 2π/3", m: 1, k: ["2π/3"] }, { p: "sin⁻¹(−1/2) = −π/6", m: 1, k: ["−π/6", "-π/6"] }, { p: "cos⁻¹ range is [0, π] (never negative); sin⁻¹ range is [−π/2, π/2]", m: 1, k: ["[0, π]", "range"] }], structure: ["Values, then ranges."], model: "<p>cos⁻¹(−1/2) = <b>2π/3</b> ≈ 2.094; sin⁻¹(−1/2) = <b>−π/6</b> ≈ −0.524.</p><p>cos⁻¹ has range <b>[0, π]</b>, so a negative input gives an obtuse angle; sin⁻¹ has range <b>[−π/2, π/2]</b>, so a negative input gives a negative angle.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Don't just cancel",
      text: "<p>In a test, <b>Rohit</b> writes sin⁻¹(sin 3π/4) = 3π/4 and cos⁻¹(cos 5π/3) = 5π/3. His teacher marks both wrong.</p>",
      qs: [
        { q: "Find the correct values.", m: 2, type: "Principal value", c: "comp", hint: "Bring the angle into range.", points: [{ p: "sin⁻¹(sin 3π/4) = π − 3π/4 = π/4", m: 1, k: ["π/4"] }, { p: "cos⁻¹(cos 5π/3) = 2π − 5π/3 = π/3", m: 1, k: ["π/3"] }], structure: ["Each value."], model: "<p>sin(3π/4) = sin(π/4), and π/4 ∈ [−π/2, π/2], so sin⁻¹(sin 3π/4) = <b>π/4</b>.</p><p>cos(5π/3) = cos(π/3), and π/3 ∈ [0, π], so cos⁻¹(cos 5π/3) = <b>π/3</b>.</p>" },
        { q: "When is sin⁻¹(sin x) = x true?", m: 1, type: "State", c: "comp", hint: "Principal range.", points: [{ p: "Only when x ∈ [−π/2, π/2]", m: 1, k: ["[−π/2, π/2]", "[-π/2, π/2]"] }], structure: ["One line."], model: "<p>Only when x lies in the principal range <b>[−π/2, π/2]</b>.</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "Adding principal values",
      text: "<p>A worksheet asks students to find tan⁻¹(√3) − sec⁻¹(−2) and cos⁻¹(1/2) + 2 sin⁻¹(1/2).</p>",
      qs: [
        { q: "Find tan⁻¹(√3) − sec⁻¹(−2).", m: 2, type: "Evaluate", c: "pv", hint: "sec⁻¹(−2) in [0, π].", points: [{ p: "tan⁻¹(√3) = π/3; sec⁻¹(−2) = 2π/3", m: 1, k: ["π/3", "2π/3"] }, { p: "Answer −π/3", m: 1, k: ["−π/3", "-π/3"] }], structure: ["Each value, then combine."], model: "<p>tan⁻¹(√3) = π/3. sec⁻¹(−2) = cos⁻¹(−1/2) = 2π/3. Difference = <b>−π/3</b>.</p>" },
        { q: "Find cos⁻¹(1/2) + 2 sin⁻¹(1/2).", m: 1, type: "Evaluate", c: "pv", hint: "π/3 + 2(π/6).", points: [{ p: "π/3 + π/3 = 2π/3", m: 1, k: ["2π/3"] }], structure: ["One line."], model: "<p>π/3 + 2(π/6) = <b>2π/3</b>.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "The lighthouse beam",
      text: "<p>A lighthouse keeper models the angle of a beam as θ = tan⁻¹(x), where x is a horizontal distance ratio. A student also studies y = cos⁻¹(x) on the same screen.</p>",
      qs: [
        { q: "State the domain and range of each function and describe the graph of tan⁻¹ as x → ±∞.", m: 3, type: "Describe", c: "graph", hint: "Asymptotes.", points: [{ p: "tan⁻¹: domain ℝ, range (−π/2, π/2)", m: 1, k: ["ℝ", "(−π/2, π/2)", "(-π/2, π/2)"] }, { p: "cos⁻¹: domain [−1, 1], range [0, π]", m: 1, k: ["[0, π]", "[−1, 1]", "[-1, 1]"] }, { p: "tan⁻¹x → π/2 as x → ∞ and → −π/2 as x → −∞ (horizontal asymptotes)", m: 1, k: ["asymptote", "π/2"] }], structure: ["Two functions, then behaviour."], model: "<p><b>tan⁻¹:</b> domain ℝ, range (−π/2, π/2). <b>cos⁻¹:</b> domain [−1, 1], range [0, π].</p><p>As x → ∞, tan⁻¹x → π/2; as x → −∞, tan⁻¹x → −π/2. The lines y = ±π/2 are <b>horizontal asymptotes</b>; the beam angle never reaches 90°.</p>" },
        { q: "Find tan⁻¹(tan 3π/4) and explain.", m: 2, type: "Evaluate", c: "comp", hint: "Period π.", points: [{ p: "tan(3π/4) = −1 = tan(−π/4)", m: 1, k: ["−1", "-1"] }, { p: "−π/4 lies in (−π/2, π/2), so answer −π/4", m: 1, k: ["−π/4", "-π/4"] }], structure: ["Value, then range check."], model: "<p>tan(3π/4) = −1 = tan(−π/4). Since −π/4 ∈ (−π/2, π/2), tan⁻¹(tan 3π/4) = <b>−π/4</b>.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "sininv", q: "The range of sin⁻¹x is:", o: ["[−π/2, π/2]", "[0, π]", "(−π/2, π/2)", "(0, π)"], a: 0, hint: "Closed, around 0.", why: "<b>[−π/2, π/2]</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "pv", q: "The principal value of cos⁻¹(−1/2) is:", o: ["2π/3", "−π/3", "π/3", "4π/3"], a: 0, hint: "In [0, π].", why: "<b>2π/3</b>." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "pv", q: "The principal value of cot⁻¹(−√3) is:", o: ["5π/6", "−π/6", "π/6", "2π/3"], a: 0, hint: "Range (0, π).", why: "<b>5π/6</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "cosinv", q: "The domain of sec⁻¹x is:", o: ["ℝ − (−1, 1)", "[−1, 1]", "ℝ", "(0, π)"], a: 0, hint: "|x| ≥ 1.", why: "<b>ℝ − (−1, 1)</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "pv", q: "tan⁻¹(√3) − sec⁻¹(−2) equals:", o: ["−π/3", "π", "π/3", "2π/3"], a: 0, hint: "π/3 − 2π/3.", why: "<b>−π/3</b>." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "comp", q: "sin⁻¹(sin 3π/5) equals:", o: ["2π/5", "3π/5", "−2π/5", "π/5"], a: 0, hint: "π − 3π/5.", why: "<b>2π/5</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "comp", q: "cos⁻¹(cos 7π/6) equals:", o: ["5π/6", "7π/6", "π/6", "−π/6"], a: 0, hint: "2π − 7π/6.", why: "<b>5π/6</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "sininv", q: "The principal value of cosec⁻¹(−√2) is:", o: ["−π/4", "3π/4", "π/4", "5π/4"], a: 0, hint: "Range around 0.", why: "<b>−π/4</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "why", q: "sin x is not invertible on ℝ.", r: "sin x is not one-one on ℝ.", a: 0, hint: "Needs bijection.", why: "Both true, and R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "comp", q: "sin⁻¹(sin 2π/3) = 2π/3.", r: "The range of sin⁻¹ is [−π/2, π/2].", a: 3, hint: "Is 2π/3 in range?", why: "A is false (answer π/3); R is true." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "taninv", q: "tan⁻¹x is defined for every real x.", r: "tan x takes every real value on (−π/2, π/2).", a: 0, hint: "Onto ℝ.", why: "Both true, and R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "why", q: "sin⁻¹x = 1/sin x.", a: false, hint: "Notation.", why: "False: sin⁻¹x is arcsin x." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "taninv", q: "The range of cot⁻¹x is (0, π).", a: true, hint: "Group 2.", why: "True." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "sininv", q: "sin⁻¹(2) = π/2 + something.", a: false, hint: "Domain.", why: "False: sin⁻¹(2) is <b>not defined</b>." },
    { id: "q15", t: "match", d: "E", m: 4, c: "pv", q: "Match the expression with its principal value.", pairs: [["sin⁻¹(1/2)", "π/6"], ["cos⁻¹(0)", "π/2"], ["tan⁻¹(−1)", "−π/4"], ["sec⁻¹(2)", "π/3"]], hint: "Standard angles.", why: "Each expression has one principal value." },
    { id: "q16", t: "match", d: "M", m: 4, c: "cosinv", q: "Match the function with its range.", pairs: [["cos⁻¹x", "[0, π]"], ["tan⁻¹x", "(−π/2, π/2)"], ["sec⁻¹x", "[0, π] − {π/2}"], ["cosec⁻¹x", "[−π/2, π/2] − {0}"]], hint: "Table.", why: "Each function has one range." },
    { id: "q17", t: "match", d: "M", m: 4, c: "comp", q: "Match the expression with its value.", pairs: [["sin⁻¹(sin 3π/4)", "π/4"], ["cos⁻¹(cos 5π/3)", "π/3"], ["tan⁻¹(tan 3π/4)", "−π/4"], ["cos⁻¹(cos 2π/3)", "2π/3"]], hint: "Bring into range.", why: "Each value lies in the principal range." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "cosinv", q: "The range of cos⁻¹x is [0, ______].", acc: ["π", "pi"], hint: "180°.", why: "<b>π</b>." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "pv", q: "The principal value of sin⁻¹(−√3/2) is ______.", acc: ["−π/3", "-π/3", "-pi/3"], hint: "Negative angle.", why: "<b>−π/3</b>." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "pv", q: "The principal value of tan⁻¹(−√3) is ______.", acc: ["−π/3", "-π/3", "-pi/3"], hint: "In (−π/2, π/2).", why: "<b>−π/3</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "pv", q: "cos⁻¹(1/2) + 2 sin⁻¹(1/2) = ______.", acc: ["2π/3", "2pi/3"], hint: "π/3 + π/3.", why: "<b>2π/3</b>." },
    { id: "q22", t: "short", d: "E", m: 1, c: "sininv", q: "What is the domain of sin⁻¹x?", acc: ["[-1, 1]", "[−1, 1]", "[-1,1]", "[−1,1]"], hint: "Values of sine.", why: "<b>[−1, 1]</b>." },
    { id: "q23", t: "short", d: "M", m: 1, c: "pv", q: "Find cos⁻¹(−1).", acc: ["π", "pi"], hint: "End of range.", why: "<b>π</b>." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "pv", q: "Find the principal values of (a) sin⁻¹(−1/√2), (b) cos⁻¹(−√3/2), (c) cot⁻¹(1).", hint: "Ranges.", why: "", points: [{ p: "(a) −π/4", m: 1, k: ["−π/4", "-π/4"] }, { p: "(b) 5π/6", m: 1, k: ["5π/6"] }, { p: "(c) π/4", m: 1, k: ["π/4"] }], model: "<p>(a) sin(π/4) = 1/√2, so sin⁻¹(−1/√2) = <b>−π/4</b> ∈ [−π/2, π/2].</p><p>(b) cos(π/6) = √3/2, so cos⁻¹(−√3/2) = π − π/6 = <b>5π/6</b>.</p><p>(c) cot(π/4) = 1, and π/4 ∈ (0, π): <b>π/4</b>.</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "comp", q: "Evaluate (a) sin⁻¹(sin 2π/3), (b) cos⁻¹(cos 13π/6), (c) tan⁻¹(tan 7π/6).", hint: "Bring each into its range.", why: "", points: [{ p: "(a) π/3", m: 1, k: ["π/3"] }, { p: "(b) π/6 (13π/6 = 2π + π/6)", m: 1, k: ["π/6"] }, { p: "(c) π/6 (7π/6 = π + π/6)", m: 1, k: ["π/6"] }], model: "<p>(a) sin(2π/3) = sin(π/3), π/3 ∈ [−π/2, π/2]: <b>π/3</b>.</p><p>(b) 13π/6 = 2π + π/6, so cos(13π/6) = cos(π/6), π/6 ∈ [0, π]: <b>π/6</b>.</p><p>(c) tan has period π: tan(7π/6) = tan(π/6), π/6 ∈ (−π/2, π/2): <b>π/6</b>.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "graph", q: "Draw the graph of y = sin⁻¹x and state its domain, range, and two points on it.", hint: "Reflect sin x.", why: "", points: [{ p: "Reflection of y = sin x on [−π/2, π/2] in y = x", m: 1, k: ["reflect", "y = x"] }, { p: "Domain [−1, 1]", m: 1, k: ["[−1, 1]", "[-1, 1]"] }, { p: "Range [−π/2, π/2]", m: 1, k: ["[−π/2, π/2]", "[-π/2, π/2]"] }, { p: "Points e.g. (−1, −π/2), (0, 0), (1, π/2)", m: 1, k: ["(1, π/2)", "(0, 0)"] }], model: "<p>The graph is the reflection of y = sin x (on [−π/2, π/2]) in the line <b>y = x</b>: an increasing curve.</p><p><b>Domain</b> [−1, 1]; <b>range</b> [−π/2, π/2].</p><p>It passes through <b>(−1, −π/2)</b>, <b>(0, 0)</b> and <b>(1, π/2)</b>.</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "taninv", q: "Explain why cot⁻¹ has range (0, π) while tan⁻¹ has range (−π/2, π/2). Find cot⁻¹(−1) and tan⁻¹(−1).", hint: "Branch where each is one-one.", why: "", points: [{ p: "tan is one-one and onto ℝ on (−π/2, π/2)", m: 1, k: ["(−π/2, π/2)", "(-π/2, π/2)"] }, { p: "cot is one-one and onto ℝ on (0, π)", m: 1, k: ["(0, π)"] }, { p: "cot⁻¹(−1) = 3π/4", m: 1, k: ["3π/4"] }, { p: "tan⁻¹(−1) = −π/4", m: 1, k: ["−π/4", "-π/4"] }], model: "<p>tan x is one-one and takes every real value on <b>(−π/2, π/2)</b>; cot x does the same on <b>(0, π)</b> (cot is undefined at 0 and π). These branches become the ranges of the inverses.</p><p>cot⁻¹(−1) = <b>3π/4</b>; tan⁻¹(−1) = <b>−π/4</b>.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "pv", q: "Evaluate: (a) tan⁻¹(1) + cos⁻¹(−1/2) + sin⁻¹(−1/2); (b) cos⁻¹(1/2) + 2 sin⁻¹(1/2); (c) sin⁻¹(sin 4π/5) + cos⁻¹(cos 4π/3).", hint: "Find each value in range first.", why: "", points: [{ p: "(a) tan⁻¹1 = π/4, cos⁻¹(−1/2) = 2π/3, sin⁻¹(−1/2) = −π/6", m: 1, k: ["π/4", "2π/3", "−π/6"] }, { p: "(a) sum = 3π/4", m: 1, k: ["3π/4"] }, { p: "(b) π/3 + π/3 = 2π/3", m: 1, k: ["2π/3"] }, { p: "(c) sin⁻¹(sin 4π/5) = π/5", m: 1, k: ["π/5"] }, { p: "(c) cos⁻¹(cos 4π/3) = 2π/3", m: 1, k: ["2π/3"] }, { p: "(c) total = 13π/15", m: 1, k: ["13π/15"] }], model: "<p>(a) π/4 + 2π/3 − π/6 = (3π + 8π − 2π)/12 = <b>3π/4</b>.</p><p>(b) π/3 + 2 × π/6 = <b>2π/3</b>.</p><p>(c) sin(4π/5) = sin(π/5) ⇒ <b>π/5</b>; cos(4π/3) = cos(2π/3) ⇒ <b>2π/3</b>. Sum = 3π/15 + 10π/15 = <b>13π/15</b>.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "pv", q: "A kite string makes an angle θ with the ground where cos θ = √3/2. The angle is:", o: ["π/6", "π/3", "π/4", "5π/6"], a: 0, hint: "cos⁻¹(√3/2).", why: "<b>π/6</b> (30°)." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "why", q: "A student types sin⁻¹(1.5) on a calculator and gets 'Math ERROR'. This is because:", o: ["1.5 is outside the domain [−1, 1]", "The calculator is in degrees", "sin⁻¹ needs radians", "1.5 is irrational"], a: 0, hint: "Domain.", why: "<b>Domain</b> of sin⁻¹ is [−1, 1]." },
    { id: "q31", t: "case", d: "E", m: 1, c: "pv", passage: "A slide rises 1 m for every 1 m of horizontal distance.", q: "Its angle of slope is:", o: ["π/4", "π/3", "π/6", "π/2"], a: 0, hint: "tan⁻¹(1).", why: "<b>π/4</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "cosinv", passage: "A robot arm can only turn between 0 and 180°, and its controller uses cos⁻¹ to set the angle.", q: "cos⁻¹ suits this arm because its range is:", o: ["[0, π]", "[−π/2, π/2]", "(0, π/2)", "ℝ"], a: 0, hint: "0 to 180°.", why: "<b>[0, π]</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "comp", passage: "A wave model gives θ = sin⁻¹(sin(5π/6)).", q: "θ equals:", o: ["π/6", "5π/6", "−π/6", "π/3"], a: 0, hint: "π − 5π/6.", why: "<b>π/6</b>." }
  ],
  find: {
    mcq: [
      { s: "sin x repeats, so it has no inverse on ℝ.", o: ["Not one-one", "Not continuous", "Not defined", "Not periodic"], a: 0, c: "why", d: "E", why: "<b>Not one-one</b>." },
      { s: "Choosing [−π/2, π/2] for sin.", o: ["Principal value branch", "Codomain", "Period", "Asymptote"], a: 0, c: "why", d: "E", why: "<b>Principal branch</b>." },
      { s: "Graph obtained by reflecting in y = x.", o: ["Inverse function graph", "Derivative graph", "Integral graph", "Periodic graph"], a: 0, c: "graph", d: "M", why: "<b>Inverse</b>." },
      { s: "Range [−π/2, π/2].", o: ["sin⁻¹x", "cos⁻¹x", "cot⁻¹x", "sec⁻¹x"], a: 0, c: "sininv", d: "E", why: "<b>sin⁻¹</b>." },
      { s: "Range [0, π].", o: ["cos⁻¹x", "sin⁻¹x", "tan⁻¹x", "cosec⁻¹x"], a: 0, c: "cosinv", d: "E", why: "<b>cos⁻¹</b>." },
      { s: "Domain ℝ and range (−π/2, π/2).", o: ["tan⁻¹x", "cot⁻¹x", "sin⁻¹x", "sec⁻¹x"], a: 0, c: "taninv", d: "E", why: "<b>tan⁻¹</b>." },
      { s: "Domain ℝ and range (0, π).", o: ["cot⁻¹x", "tan⁻¹x", "cos⁻¹x", "sin⁻¹x"], a: 0, c: "taninv", d: "M", why: "<b>cot⁻¹</b>." },
      { s: "Range [0, π] − {π/2}.", o: ["sec⁻¹x", "cos⁻¹x", "cosec⁻¹x", "cot⁻¹x"], a: 0, c: "cosinv", d: "M", why: "<b>sec⁻¹</b>." },
      { s: "Range [−π/2, π/2] − {0}.", o: ["cosec⁻¹x", "sin⁻¹x", "sec⁻¹x", "tan⁻¹x"], a: 0, c: "sininv", d: "M", why: "<b>cosec⁻¹</b>." },
      { s: "sin⁻¹(−1/2) = −π/6.", o: ["Principal value", "Period", "Domain", "Asymptote"], a: 0, c: "pv", d: "E", why: "<b>Principal value</b>." },
      { s: "cos⁻¹(−1/2) = 2π/3, not −π/3.", o: ["Range of cos⁻¹ is [0, π]", "cos is odd", "Domain is ℝ", "π/3 is too small"], a: 0, c: "pv", d: "M", why: "Answer must be in <b>[0, π]</b>." },
      { s: "sin⁻¹(sin 3π/4) = π/4.", o: ["Bring the angle into the principal range", "Cancel sin and sin⁻¹", "Use period 2π", "Use cos instead"], a: 0, c: "comp", d: "M", why: "<b>Principal range</b> rule." },
      { s: "tan⁻¹(tan 3π/4) = −π/4.", o: ["tan has period π", "tan has period 2π", "tan is even", "tan⁻¹ is not defined"], a: 0, c: "comp", d: "C", why: "<b>Period π</b>." },
      { s: "sin⁻¹(3) is not defined.", o: ["Outside the domain", "Outside the range", "Not one-one", "Asymptote"], a: 0, c: "sininv", d: "M", why: "<b>Outside [−1, 1]</b>." },
      { s: "tan⁻¹x approaches π/2 but never reaches it.", o: ["Horizontal asymptote", "Vertical asymptote", "Maximum value", "Discontinuity"], a: 0, c: "graph", d: "C", why: "<b>Horizontal asymptote</b>." },
      { s: "cos⁻¹(cos 5π/3) = π/3.", o: ["2π − 5π/3 lies in [0, π]", "Cancel directly", "Use tan", "5π/3 is in range"], a: 0, c: "comp", d: "C", why: "Bring into <b>[0, π]</b>." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["Restrict sin to [−π/2, π/2].", "Making trig invertible", "why"], ["Range [−π/2, π/2].", "sin⁻¹", "sininv"], ["Range [0, π].", "cos⁻¹", "cosinv"], ["Domain ℝ, range (−π/2, π/2).", "tan⁻¹", "taninv"], ["cos⁻¹(−1/2) = 2π/3.", "Principal value", "pv"], ["sin⁻¹(sin 3π/5) = 2π/5.", "sin⁻¹(sin x) trap", "comp"]] }
    ],
    wrong: [
      { stmts: ["Range of sin⁻¹ is [−π/2, π/2].", "Range of cos⁻¹ is [0, π].", "Range of tan⁻¹ is [0, π].", "Range of cot⁻¹ is (0, π)."], a: 2, c: "taninv", why: "tan⁻¹ has range <b>(−π/2, π/2)</b>." },
      { stmts: ["sin⁻¹(−1/2) = −π/6.", "cos⁻¹(−1/2) = −π/3.", "tan⁻¹(−1) = −π/4.", "sec⁻¹(2) = π/3."], a: 1, c: "pv", why: "cos⁻¹(−1/2) = <b>2π/3</b>." },
      { stmts: ["sin⁻¹(sin x) = x for all x.", "sin⁻¹(sin π/6) = π/6.", "cos⁻¹(cos π/3) = π/3.", "tan⁻¹(tan π/4) = π/4."], a: 0, c: "comp", why: "Only for x in <b>[−π/2, π/2]</b>." }
    ],
    para: [
      { target: "Principal value of cos⁻¹", c: "cosinv", sents: ["A surveyor measured a slope.", "Her app reported cos⁻¹(−0.5) as 120°, not −60°.", "The slope was near a river.", "She saved the data."], a: 1, why: "cos⁻¹ range [0, π]." },
      { target: "Domain of sin⁻¹", c: "sininv", sents: ["Rohan was testing a calculator.", "When he entered sin⁻¹(1.4), it showed an error.", "The calculator was new.", "He bought it online."], a: 1, why: "1.4 outside <b>[−1, 1]</b>." },
      { target: "Horizontal asymptote of tan⁻¹", c: "graph", sents: ["Meera plotted y = tan⁻¹x on a graphing tool.", "She zoomed far to the right and saw the curve flatten towards y = 1.57 without touching it.", "The screen was bright.", "She saved a screenshot."], a: 1, why: "y = π/2 is an <b>asymptote</b>." }
    ],
    explain: [
      { s: "sin⁻¹(sin 5π/6) is π/6, not 5π/6.", o: ["5π/6 lies outside [−π/2, π/2]", "sin is negative there", "5π/6 is not an angle", "sin⁻¹ has period π"], a: 0, c: "comp", why: "The clue is <i>not 5π/6</i>: the answer must lie in the <b>principal range</b>." },
      { s: "tan⁻¹ accepts every real number but sin⁻¹ does not.", o: ["tan takes all real values; sin only [−1, 1]", "tan is periodic", "sin is not periodic", "tan is one-one on ℝ"], a: 0, c: "taninv", why: "Domain of the inverse = <b>range of the restricted function</b>." },
      { s: "cos⁻¹ of a negative number is always an obtuse angle (or π).", o: ["Range of cos⁻¹ is [0, π]", "cos is odd", "cos⁻¹ is negative", "cos has period π"], a: 0, c: "cosinv", why: "Negative cosine in <b>[0, π]</b> means angle in (π/2, π]." },
      { s: "sec⁻¹(0.5) is not defined.", o: ["Domain of sec⁻¹ is ℝ − (−1, 1)", "sec is odd", "Range excludes π/2", "0.5 is too large"], a: 0, c: "cosinv", why: "|x| must be ≥ 1." }
    ]
  }
});
