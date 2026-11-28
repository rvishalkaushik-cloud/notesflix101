/* Revision Arena · Class XII Mathematics · Chapter 6 · Application of Derivatives (rationalised: rate of change, increasing/decreasing, maxima and minima; no tangents/normals or approximations). Original problems; every value recomputed. */
NFArena.register({
  id: "m12-ch6", cls: "XII", subject: "Mathematics", unit: "Chapter", num: "6",
  title: "Application of Derivatives",
  tagline: "Rate of change, increasing and decreasing functions, critical points, first and second derivative tests, absolute extrema and word problems on maxima and minima.",
  notesLink: "../#m12-ch6",
  concepts: {
    rate: { n: "Rate of change", s: "rate" },
    marginal: { n: "Marginal cost and revenue", s: "rate" },
    incdec: { n: "Increasing and decreasing functions", s: "mono" },
    intervals: { n: "Finding intervals", s: "mono" },
    critical: { n: "Critical points", s: "ext" },
    firsttest: { n: "First derivative test", s: "ext" },
    secondtest: { n: "Second derivative test", s: "ext" },
    absolute: { n: "Absolute maxima and minima on a closed interval", s: "ext" },
    optim: { n: "Optimisation word problems", s: "opt" }
  },
  overview: {
    text: "The derivative measures <b>how fast</b> a quantity changes. If dy/dx > 0 on an interval, y is <b>increasing</b>; if dy/dx < 0, it is <b>decreasing</b>. Where f′(x) = 0 (or does not exist) we find <b>critical points</b>, and the first or second derivative test tells us whether each is a <b>local maximum</b> or <b>minimum</b>. On a closed interval, compare critical values and end-point values for the <b>absolute</b> extremes.",
    points: [
      "Related rates: dA/dt = (dA/dr)(dr/dt).",
      "f′ > 0 ⇒ increasing; f′ < 0 ⇒ decreasing.",
      "Second derivative test: f′(c) = 0 and f″(c) < 0 ⇒ local max; f″(c) > 0 ⇒ local min.",
      "Word problems: write the quantity as a function of one variable, set its derivative to 0, and check with f″."
    ],
    map: {
      center: "Application of Derivatives",
      branches: [
        { t: "Rates", c: ["dy/dt chain", "Marginal cost / revenue"] },
        { t: "Monotonicity", c: ["f′ > 0 increasing", "f′ < 0 decreasing", "Sign chart"] },
        { t: "Extrema", c: ["Critical points", "First derivative test", "Second derivative test", "Absolute on [a, b]"] },
        { t: "Optimisation", c: ["Area, volume", "Sum and product", "Cost and profit"] }
      ]
    }
  },
  sections: [
    {
      id: "rate", title: "Rate of change", sub: "How fast things grow", icon: "⏱️", color: "#2F6BFF",
      quick: [
        "dy/dx is the rate of change of y with respect to x; with time, dy/dt.",
        "<b>Related rates</b>: if A depends on r and r on t, dA/dt = (dA/dr)(dr/dt).",
        "Circle: A = πr² ⇒ dA/dt = 2πr dr/dt. Cube: V = x³ ⇒ dV/dt = 3x² dx/dt. Sphere: V = (4/3)πr³ ⇒ dV/dt = 4πr² dr/dt.",
        "<b>Marginal cost</b> = dC/dx; <b>marginal revenue</b> = dR/dx (rate of change with respect to output x).",
        "Always write units: cm²/s, cm³/s, ₹ per unit."
      ],
      cards: [
        { t: "Worked: circle", tag: "numerical", b: "<p>r = 5 cm, dr/dt = 2 cm/s: dA/dt = 2π(5)(2) = <b>20π cm²/s</b>.</p>" },
        { t: "Worked: cube", tag: "numerical", b: "<p>Edge 10 cm growing at 3 cm/s: dV/dt = 3(10)²(3) = <b>900 cm³/s</b>.</p>" },
        { t: "Worked: marginal revenue", tag: "numerical", b: "<p>R(x) = 3x² + 36x + 5: MR = 6x + 36. At x = 5: <b>₹66</b>.</p>" }
      ],
      exam: ["Write the formula linking the quantities first.", "Substitute values only after differentiating."]
    },
    {
      id: "mono", title: "Increasing and decreasing functions", sub: "Sign of f′", icon: "📈", color: "#12B5A6",
      quick: [
        "f is <b>strictly increasing</b> on an interval if f′(x) > 0 there, and <b>strictly decreasing</b> if f′(x) < 0.",
        "Method: find f′(x), solve f′(x) = 0, mark these points on the number line, test the sign of f′ in each part.",
        "f(x) = x² − 4x + 1: f′ = 2x − 4 ⇒ decreasing on (−∞, 2), increasing on (2, ∞).",
        "f(x) = x³ − 3x² + 4: f′ = 3x(x − 2) ⇒ increasing on (−∞, 0) ∪ (2, ∞), decreasing on (0, 2).",
        "eˣ is increasing on ℝ; log x is increasing on (0, ∞); a linear function ax + b is increasing if a > 0."
      ],
      cards: [
        { t: "Sign chart hook", tag: "hook", b: "<p><b>“Plus climbs, minus slides.”</b> Mark zeros of f′, test one point in each gap.</p>" }
      ],
      exam: ["Give the answer as intervals, using ∪ for two parts.", "Show the sign of f′ in each interval in a table."]
    },
    {
      id: "ext", title: "Maxima and minima", sub: "Tests and absolute values", icon: "⛰️", color: "#FF8A1F",
      quick: [
        "<b>Critical point</b>: f′(c) = 0 or f′(c) does not exist.",
        "<b>First derivative test</b>: f′ changes + to − at c ⇒ local max; − to + ⇒ local min; no change ⇒ neither (point of inflection).",
        "<b>Second derivative test</b>: f′(c) = 0 and f″(c) < 0 ⇒ local max; f″(c) > 0 ⇒ local min; f″(c) = 0 ⇒ test fails, use the first derivative test.",
        "f(x) = x³ − 3x² + 4: f″ = 6x − 6. f″(0) = −6 < 0 ⇒ <b>local max f(0) = 4</b>; f″(2) = 6 > 0 ⇒ <b>local min f(2) = 0</b>.",
        "<b>Absolute extrema on [a, b]</b>: evaluate f at critical points inside and at a and b; the largest is the absolute max, the smallest the absolute min.",
        "On [−1, 3]: f(−1) = 0, f(0) = 4, f(2) = 0, f(3) = 4 ⇒ absolute max 4 (at 0 and 3), absolute min 0 (at −1 and 2)."
      ],
      cards: [
        { t: "Worked: x + 1/x (x > 0)", tag: "numerical", b: "<p>f′ = 1 − 1/x² = 0 ⇒ x = 1. f″ = 2/x³ > 0 ⇒ <b>local min f(1) = 2</b>.</p>" }
      ],
      exam: ["State which test you are using.", "Give both the point and the maximum/minimum value."]
    },
    {
      id: "opt", title: "Optimisation word problems", sub: "Best size, best price", icon: "📦", color: "#7B4DFF",
      quick: [
        "Step 1: name the variable and write the quantity to optimise as a function of <b>one</b> variable (use the constraint).",
        "Step 2: differentiate, set to 0, solve.",
        "Step 3: confirm max/min with the second derivative (or sign change), then answer in words with units.",
        "Two numbers with sum 20 and maximum product: <b>10 and 10</b> (product 100).",
        "Rectangle with perimeter 40: maximum area when it is a <b>square</b> of side 10 (area 100).",
        "Open box from an 18 cm square sheet cutting x cm squares from corners: V = x(18 − 2x)² is maximum at <b>x = 3 cm</b>, V = 432 cm³."
      ],
      cards: [
        { t: "Worked: the open box", tag: "numerical", b: "<p>V = x(18 − 2x)². V′ = (18 − 2x)(18 − 6x) = 0 ⇒ x = 3 (x = 9 gives no box).</p><p>V″ = 24x − 144 ⇒ V″(3) = −72 < 0: maximum. <b>V = 3 × 12² = 432 cm³</b>.</p>" }
      ],
      exam: ["Reject values that make no physical sense (negative length, zero volume).", "Draw a labelled diagram first."]
    }
  ],
  flashcards: [
    { k: "Formula", c: "rate", q: "Rate of change of area of a circle?", a: "dA/dt = 2πr dr/dt." },
    { k: "Formula", c: "rate", q: "Rate of change of volume of a cube?", a: "dV/dt = 3x² dx/dt." },
    { k: "Numerical", c: "rate", q: "r = 5 cm, dr/dt = 2 cm/s: dA/dt?", a: "20π cm²/s." },
    { k: "Definition", c: "marginal", q: "Marginal revenue?", a: "dR/dx, rate of change of revenue with output." },
    { k: "Numerical", c: "marginal", q: "R = 3x² + 36x + 5: MR at x = 5?", a: "66." },
    { k: "Rule", c: "incdec", q: "f′(x) > 0 on an interval means…", a: "f is strictly increasing there." },
    { k: "Example", c: "incdec", q: "Is eˣ increasing on ℝ?", a: "Yes (f′ = eˣ > 0)." },
    { k: "Numerical", c: "intervals", q: "Where is x² − 4x + 1 decreasing?", a: "(−∞, 2)." },
    { k: "Definition", c: "critical", q: "Critical point?", a: "f′(c) = 0 or f′(c) does not exist." },
    { k: "Rule", c: "firsttest", q: "f′ changes from + to − at c ⇒", a: "Local maximum at c." },
    { k: "Rule", c: "secondtest", q: "f′(c) = 0, f″(c) > 0 ⇒", a: "Local minimum at c." },
    { k: "Rule", c: "secondtest", q: "If f″(c) = 0, the second derivative test…", a: "Fails; use the first derivative test." },
    { k: "Numerical", c: "secondtest", q: "Local max of x³ − 3x² + 4?", a: "4, at x = 0." },
    { k: "Method", c: "absolute", q: "Absolute max on [a, b]?", a: "Largest of f at critical points and at a, b." },
    { k: "Numerical", c: "optim", q: "Sum 20, maximum product?", a: "100 (10 and 10)." },
    { k: "Fact", c: "optim", q: "Rectangle of fixed perimeter with maximum area?", a: "A square." },
    { k: "Numerical", c: "optim", q: "Open box from 18 cm sheet: best cut?", a: "x = 3 cm, V = 432 cm³." },
    { k: "Numerical", c: "critical", q: "Minimum of x + 1/x for x > 0?", a: "2, at x = 1." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "The ripple in the pond",
      text: "<p>A stone dropped in a pond makes a circular ripple whose radius grows at <b>2 cm/s</b>.</p>",
      qs: [
        { q: "How fast is the area growing when the radius is 5 cm?", m: 2, type: "Rate", c: "rate", hint: "dA/dt = 2πr dr/dt.", points: [{ p: "dA/dt = 2πr dr/dt", m: 1, k: ["2πr"] }, { p: "= 2π × 5 × 2 = 20π cm²/s", m: 1, k: ["20π", "20pi"] }], structure: ["Formula, substitute."], model: "<p>A = πr² ⇒ dA/dt = 2πr (dr/dt) = 2π × 5 × 2 = <b>20π cm²/s</b>.</p>" },
        { q: "Is the rate of increase of area constant? Explain.", m: 1, type: "Explain", c: "rate", hint: "Depends on r.", points: [{ p: "No: dA/dt depends on r, so it grows as the ripple widens", m: 1, k: ["no", "depends"] }], structure: ["One line."], model: "<p>No. dA/dt = 4πr here, so it <b>increases as r increases</b>.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "The souvenir shop",
      text: "<p>A souvenir shop's revenue from selling x mugs is R(x) = 3x² + 36x + 5 rupees.</p>",
      qs: [
        { q: "Find the marginal revenue when x = 5 and interpret it.", m: 2, type: "Marginal", c: "marginal", hint: "dR/dx.", points: [{ p: "MR = 6x + 36", m: 1, k: ["6x + 36"] }, { p: "At x = 5: ₹66, approx. extra revenue from the 6th mug", m: 1, k: ["66"] }], structure: ["Derivative, value, meaning."], model: "<p>MR = dR/dx = 6x + 36. At x = 5: <b>₹66</b>, roughly the extra revenue from selling one more mug.</p>" },
        { q: "Is revenue increasing for all x ≥ 0?", m: 1, type: "Check", c: "incdec", hint: "Sign of MR.", points: [{ p: "Yes: 6x + 36 > 0 for x ≥ 0", m: 1, k: ["yes", "> 0"] }], structure: ["One line."], model: "<p>Yes: dR/dx = 6x + 36 > 0 for all x ≥ 0, so revenue is <b>increasing</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "The roller-coaster profile",
      text: "<p>A roller-coaster section follows f(x) = x³ − 3x² + 4 for x between −1 and 3 (in tens of metres).</p>",
      qs: [
        { q: "Find the intervals where the track rises and falls.", m: 2, type: "Intervals", c: "intervals", hint: "f′ = 3x(x − 2).", points: [{ p: "f′ = 3x² − 6x = 3x(x − 2)", m: 1, k: ["3x(x − 2)", "3x(x-2)"] }, { p: "Rises on (−1, 0) and (2, 3); falls on (0, 2)", m: 1, k: ["(0, 2)", "(0,2)"] }], structure: ["f′, sign chart."], model: "<p>f′(x) = 3x² − 6x = 3x(x − 2). On [−1, 3]: f′ > 0 on (−1, 0) and (2, 3) (<b>rising</b>); f′ < 0 on (0, 2) (<b>falling</b>).</p>" },
        { q: "Find the local maximum and minimum heights and the absolute highest and lowest points on [−1, 3].", m: 3, type: "Extrema", c: "absolute", hint: "Test 0, 2 and ends.", points: [{ p: "f″ = 6x − 6: f″(0) < 0 local max f(0) = 4; f″(2) > 0 local min f(2) = 0", m: 1, k: ["4", "0"] }, { p: "End values: f(−1) = 0, f(3) = 4", m: 1, k: ["f(−1)", "f(3)"] }, { p: "Absolute max 4 (x = 0, 3); absolute min 0 (x = −1, 2)", m: 1, k: ["absolute"] }], structure: ["Local, ends, absolute."], model: "<p>f″(x) = 6x − 6. f″(0) = −6 < 0: <b>local max f(0) = 4</b>. f″(2) = 6 > 0: <b>local min f(2) = 0</b>.</p><p>Ends: f(−1) = −1 − 3 + 4 = 0; f(3) = 27 − 27 + 4 = 4.</p><p><b>Absolute max 4</b> at x = 0 and 3; <b>absolute min 0</b> at x = −1 and 2.</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "Fencing a vegetable patch",
      text: "<p><b>Neha</b> has <b>40 m</b> of fencing to enclose a rectangular vegetable patch and wants the largest possible area.</p>",
      qs: [
        { q: "Express the area as a function of one side x and find the best x.", m: 2, type: "Optimise", c: "optim", hint: "Other side 20 − x.", points: [{ p: "A = x(20 − x)", m: 1, k: ["x(20 − x)", "x(20-x)"] }, { p: "A′ = 20 − 2x = 0 ⇒ x = 10", m: 1, k: ["10"] }], structure: ["Function, derivative."], model: "<p>2x + 2y = 40 ⇒ y = 20 − x. A = x(20 − x) = 20x − x². A′ = 20 − 2x = 0 ⇒ <b>x = 10</b>.</p>" },
        { q: "Confirm it is a maximum and state the shape and area.", m: 1, type: "Confirm", c: "secondtest", hint: "A″.", points: [{ p: "A″ = −2 < 0: maximum; a 10 m × 10 m square, area 100 m²", m: 1, k: ["100", "square"] }], structure: ["Test, answer."], model: "<p>A″ = −2 < 0, so it is a maximum: a <b>10 m × 10 m square</b> with area <b>100 m²</b>.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "The open gift box",
      text: "<p>A craft class makes open boxes from square cardboard sheets of side <b>18 cm</b> by cutting equal squares of side x from each corner and folding up the sides.</p>",
      qs: [
        { q: "Write the volume V(x) and its domain.", m: 1, type: "Model", c: "optim", hint: "Base (18 − 2x)².", points: [{ p: "V = x(18 − 2x)², 0 < x < 9", m: 1, k: ["x(18 − 2x)²", "0 < x < 9"] }], structure: ["Formula, domain."], model: "<p>V(x) = x(18 − 2x)², with <b>0 < x < 9</b>.</p>" },
        { q: "Find x for maximum volume, confirm with the second derivative, and give the volume.", m: 3, type: "Optimise", c: "secondtest", hint: "V′ = (18 − 2x)(18 − 6x).", points: [{ p: "V′ = (18 − 2x)² − 4x(18 − 2x) = (18 − 2x)(18 − 6x) = 0 ⇒ x = 3 (x = 9 rejected)", m: 1, k: ["x = 3", "3"] }, { p: "V = 4x³ − 72x² + 324x ⇒ V″ = 24x − 144; V″(3) = −72 < 0", m: 1, k: ["−72", "-72"] }, { p: "V(3) = 3 × 12² = 432 cm³", m: 1, k: ["432"] }], structure: ["Critical point, test, value."], model: "<p>V′ = (18 − 2x)² − 4x(18 − 2x) = (18 − 2x)(18 − 6x) = 0 ⇒ x = 9 or x = 3. x = 9 gives no box, so <b>x = 3</b>.</p><p>V = 4x³ − 72x² + 324x ⇒ V″ = 24x − 144; V″(3) = −72 < 0: <b>maximum</b>.</p><p>V(3) = 3 × 12² = <b>432 cm³</b>.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "rate", q: "If r = 5 cm and dr/dt = 2 cm/s, then dA/dt for a circle is:", o: ["20π cm²/s", "10π cm²/s", "25π cm²/s", "4π cm²/s"], a: 0, hint: "2πr dr/dt.", why: "<b>20π cm²/s</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "incdec", q: "f(x) = 3x + 7 is:", o: ["Increasing on ℝ", "Decreasing on ℝ", "Constant", "Neither"], a: 0, hint: "f′ = 3.", why: "<b>Increasing</b>." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "intervals", q: "f(x) = x² − 4x + 1 is decreasing on:", o: ["(−∞, 2)", "(2, ∞)", "(−∞, ∞)", "(0, 4)"], a: 0, hint: "2x − 4 < 0.", why: "<b>(−∞, 2)</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "secondtest", q: "If f′(c) = 0 and f″(c) = −3, then at c f has:", o: ["A local maximum", "A local minimum", "No extremum", "A point of discontinuity"], a: 0, hint: "Negative ⇒ max.", why: "<b>Local maximum</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "rate", q: "The edge of a cube is 10 cm and increases at 3 cm/s. The volume increases at:", o: ["900 cm³/s", "300 cm³/s", "30 cm³/s", "1000 cm³/s"], a: 0, hint: "3x² dx/dt.", why: "3 × 100 × 3 = <b>900</b>." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "critical", q: "The minimum value of x + 1/x for x > 0 is:", o: ["2", "1", "0", "4"], a: 0, hint: "At x = 1.", why: "<b>2</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "absolute", q: "The absolute maximum of f(x) = x³ − 3x² + 4 on [−1, 3] is:", o: ["4", "0", "8", "22"], a: 0, hint: "Compare f(−1), f(0), f(2), f(3).", why: "<b>4</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "optim", q: "Two positive numbers have sum 24. Their maximum product is:", o: ["144", "120", "576", "143"], a: 0, hint: "12 × 12.", why: "<b>144</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "incdec", q: "eˣ is strictly increasing on ℝ.", r: "The derivative of eˣ is eˣ, which is always positive.", a: 0, hint: "f′ > 0.", why: "Both true, and R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "secondtest", q: "For f(x) = x⁴, the second derivative test fails at x = 0.", r: "f″(0) = 0.", a: 0, hint: "12x² at 0.", why: "Both true, and R explains A (x = 0 is actually a minimum)." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "critical", q: "Every critical point is a local extremum.", r: "At a critical point f′(c) = 0 or does not exist.", a: 3, hint: "x³ at 0.", why: "A is false (x³ has no extremum at 0); R is true." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "incdec", q: "log x is increasing on (0, ∞).", a: true, hint: "1/x > 0.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "optim", q: "Among rectangles of fixed perimeter, the square has the largest area.", a: true, hint: "x(20 − x).", why: "True." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "firsttest", q: "If f′ changes from − to + at c, f has a local maximum at c.", a: false, hint: "Valley.", why: "False: it is a local <b>minimum</b>." },
    { id: "q15", t: "match", d: "E", m: 4, c: "rate", q: "Match the quantity with its rate formula.", pairs: [["Area of circle", "2πr dr/dt"], ["Volume of cube", "3x² dx/dt"], ["Volume of sphere", "4πr² dr/dt"], ["Area of square", "2x dx/dt"]], hint: "Differentiate.", why: "Each formula from the chain rule." },
    { id: "q16", t: "match", d: "M", m: 4, c: "firsttest", q: "Match the sign change of f′ at c with the result.", pairs: [["+ to −", "Local maximum"], ["− to +", "Local minimum"], ["+ to +", "Neither (inflection)"], ["f′(c) = 0, f″(c) > 0", "Local minimum (second test)"]], hint: "Hill or valley.", why: "Each pattern gives one result." },
    { id: "q17", t: "match", d: "M", m: 4, c: "optim", q: "Match the problem with its best value.", pairs: [["Sum 20, max product", "100"], ["Perimeter 40, max rectangle area", "100 sq units"], ["Open box from 18 cm sheet, max volume", "432 cm³"], ["x + 1/x (x > 0), minimum", "2"]], hint: "Recall each.", why: "Each problem has one optimum." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "critical", q: "A point where f′(x) = 0 or does not exist is called a ______ point.", acc: ["critical", "stationary"], hint: "c…", why: "<b>Critical</b>." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "marginal", q: "If R(x) = 3x² + 36x + 5, the marginal revenue at x = 5 is ______.", acc: ["66"], hint: "6x + 36.", why: "<b>66</b>." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "secondtest", q: "The local minimum value of f(x) = x³ − 3x² + 4 is ______.", acc: ["0"], hint: "At x = 2.", why: "<b>0</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "optim", q: "From an 18 cm square sheet, the side of the square cut from each corner for an open box of maximum volume is ______ cm.", acc: ["3"], hint: "(18 − 2x)(18 − 6x) = 0.", why: "<b>3 cm</b>." },
    { id: "q22", t: "short", d: "E", m: 1, c: "incdec", q: "Is f(x) = −2x + 5 increasing or decreasing?", acc: ["decreasing"], hint: "f′ = −2.", why: "<b>Decreasing</b>." },
    { id: "q23", t: "short", d: "M", m: 1, c: "critical", q: "At what x does f(x) = x² − 6x + 2 have a critical point?", acc: ["3", "x = 3", "x=3"], hint: "2x − 6 = 0.", why: "<b>x = 3</b>." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "intervals", q: "Find the intervals in which f(x) = 2x³ − 9x² + 12x + 1 is increasing or decreasing.", hint: "f′ = 6(x − 1)(x − 2).", why: "", points: [{ p: "f′ = 6x² − 18x + 12 = 6(x − 1)(x − 2)", m: 1, k: ["6(x − 1)(x − 2)", "6(x-1)(x-2)"] }, { p: "Increasing on (−∞, 1) ∪ (2, ∞)", m: 1, k: ["(−∞, 1)", "(-∞, 1)", "(2, ∞)"] }, { p: "Decreasing on (1, 2)", m: 1, k: ["(1, 2)", "(1,2)"] }], model: "<p>f′(x) = 6x² − 18x + 12 = 6(x − 1)(x − 2).</p><p>f′ > 0 for x < 1 and x > 2: <b>increasing on (−∞, 1) ∪ (2, ∞)</b>. f′ < 0 for 1 < x < 2: <b>decreasing on (1, 2)</b>.</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "secondtest", q: "Find the local maximum and minimum values of f(x) = 2x³ − 9x² + 12x + 1.", hint: "f″ = 12x − 18.", why: "", points: [{ p: "Critical points x = 1, 2", m: 1, k: ["1", "2"] }, { p: "f″(1) = −6 < 0: local max f(1) = 6", m: 1, k: ["6"] }, { p: "f″(2) = 6 > 0: local min f(2) = 5", m: 1, k: ["5"] }], model: "<p>f′ = 6(x − 1)(x − 2) = 0 ⇒ x = 1, 2. f″ = 12x − 18.</p><p>f″(1) = −6 < 0: <b>local max f(1) = 2 − 9 + 12 + 1 = 6</b>.</p><p>f″(2) = 6 > 0: <b>local min f(2) = 16 − 36 + 24 + 1 = 5</b>.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "rate", q: "A balloon (sphere) is inflated so that its radius increases at 0.5 cm/s. Find the rate of increase of its volume and of its surface area when r = 10 cm.", hint: "V = 4πr³/3, S = 4πr².", why: "", points: [{ p: "dV/dt = 4πr² dr/dt", m: 1, k: ["4πr²"] }, { p: "= 4π(100)(0.5) = 200π cm³/s", m: 1, k: ["200π"] }, { p: "dS/dt = 8πr dr/dt", m: 1, k: ["8πr"] }, { p: "= 8π(10)(0.5) = 40π cm²/s", m: 1, k: ["40π"] }], model: "<p>V = (4/3)πr³ ⇒ dV/dt = 4πr² (dr/dt) = 4π(100)(0.5) = <b>200π cm³/s</b>.</p><p>S = 4πr² ⇒ dS/dt = 8πr (dr/dt) = 8π(10)(0.5) = <b>40π cm²/s</b>.</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "absolute", q: "Find the absolute maximum and minimum values of f(x) = 2x³ − 9x² + 12x + 1 on [0, 3].", hint: "Ends and critical points.", why: "", points: [{ p: "Critical points 1 and 2 in [0, 3]", m: 1, k: ["1", "2"] }, { p: "f(0) = 1, f(1) = 6, f(2) = 5, f(3) = 10", m: 1, k: ["10", "1"] }, { p: "Absolute max 10 at x = 3", m: 1, k: ["10"] }, { p: "Absolute min 1 at x = 0", m: 1, k: ["1"] }], model: "<p>Critical points: x = 1, 2.</p><p>f(0) = 1, f(1) = 6, f(2) = 5, f(3) = 54 − 81 + 36 + 1 = 10.</p><p><b>Absolute max 10</b> at x = 3; <b>absolute min 1</b> at x = 0.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "optim", q: "A square sheet of tin of side 18 cm is to be made into an open box by cutting equal squares from the corners and folding up the sides. Find the side of the square to be cut so that the volume is maximum, and find the maximum volume.", hint: "V = x(18 − 2x)².", why: "", points: [{ p: "V = x(18 − 2x)², 0 < x < 9", m: 1, k: ["x(18 − 2x)²"] }, { p: "V′ = (18 − 2x)(18 − 6x)", m: 1, k: ["(18 − 6x)", "(18-6x)"] }, { p: "V′ = 0 ⇒ x = 3 (x = 9 rejected)", m: 1, k: ["x = 3"] }, { p: "V″ = 24x − 144", m: 1, k: ["24x − 144", "24x-144"] }, { p: "V″(3) = −72 < 0: maximum", m: 1, k: ["−72", "-72"] }, { p: "V = 432 cm³", m: 1, k: ["432"] }], model: "<p>Let x cm squares be cut. Base side = 18 − 2x, height x: <b>V = x(18 − 2x)²</b>, 0 < x < 9.</p><p>V′ = (18 − 2x)² − 4x(18 − 2x) = (18 − 2x)(18 − 6x). V′ = 0 ⇒ x = 9 (no box) or <b>x = 3</b>.</p><p>V = 4x³ − 72x² + 324x ⇒ V″ = 24x − 144; V″(3) = −72 < 0, so V is <b>maximum</b> at x = 3.</p><p>Maximum volume = 3 × 12² = <b>432 cm³</b>.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "marginal", q: "A factory's cost is C(x) = 0.5x² + 20x + 100. The cost of producing roughly one more item when x = 30 is:", o: ["₹50", "₹30", "₹20", "₹100"], a: 0, hint: "C′ = x + 20.", why: "Marginal cost = 30 + 20 = <b>₹50</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "optim", q: "A farmer has 100 m of fencing for three sides of a rectangular plot along a river (no fence by the river). The maximum area is:", o: ["1250 m²", "625 m²", "2500 m²", "1000 m²"], a: 0, hint: "A = x(100 − 2x).", why: "A′ = 100 − 4x = 0 ⇒ x = 25; A = 25 × 50 = <b>1250 m²</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "incdec", passage: "A company's profit P(t) has P′(t) > 0 for all months this year.", q: "This means profit was:", o: ["Increasing all year", "Decreasing all year", "Constant", "Maximum in January"], a: 0, hint: "Positive derivative.", why: "<b>Increasing</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "firsttest", passage: "A ball's height h(t) increases until t = 2 s and then decreases.", q: "At t = 2 s, h has a:", o: ["Local maximum", "Local minimum", "Point of inflection", "Discontinuity"], a: 0, hint: "+ to −.", why: "<b>Local maximum</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "rate", passage: "Sand falls into a conical heap; the volume grows at a constant rate.", q: "As the heap gets bigger, the height grows:", o: ["More slowly", "Faster", "At a constant rate", "Not at all"], a: 0, hint: "V ∝ h³.", why: "dh/dt ∝ 1/h²: <b>slower</b>." }
  ],
  find: {
    mcq: [
      { s: "dA/dt = 2πr dr/dt.", o: ["Rate of change of area", "Marginal cost", "Second derivative", "Critical point"], a: 0, c: "rate", d: "E", why: "<b>Rate of change</b>." },
      { s: "dC/dx for a factory.", o: ["Marginal cost", "Average cost", "Total cost", "Profit"], a: 0, c: "marginal", d: "E", why: "<b>Marginal cost</b>." },
      { s: "f′(x) > 0 for all x in (a, b).", o: ["Strictly increasing", "Strictly decreasing", "Constant", "Maximum"], a: 0, c: "incdec", d: "E", why: "<b>Increasing</b>." },
      { s: "Sign chart of f′ around its zeros.", o: ["Finding increasing/decreasing intervals", "Finding area", "Finding inverse", "Finding rate"], a: 0, c: "intervals", d: "M", why: "<b>Intervals</b>." },
      { s: "f′(c) = 0.", o: ["Critical point", "Point of discontinuity", "Absolute max always", "Zero of f"], a: 0, c: "critical", d: "E", why: "<b>Critical point</b>." },
      { s: "f′ goes from positive to negative at c.", o: ["Local maximum", "Local minimum", "Inflection", "Discontinuity"], a: 0, c: "firsttest", d: "M", why: "<b>Local max</b>." },
      { s: "f′ goes from negative to positive at c.", o: ["Local minimum", "Local maximum", "Inflection", "Asymptote"], a: 0, c: "firsttest", d: "M", why: "<b>Local min</b>." },
      { s: "f″(c) < 0 at a critical point.", o: ["Local maximum", "Local minimum", "Test fails", "Inflection"], a: 0, c: "secondtest", d: "M", why: "<b>Max</b>." },
      { s: "f″(c) = 0 at a critical point.", o: ["Second derivative test fails", "Local maximum", "Local minimum", "Discontinuity"], a: 0, c: "secondtest", d: "C", why: "<b>Test fails</b>." },
      { s: "Compare f(a), f(b) and f at critical points.", o: ["Absolute extrema on [a, b]", "Local extrema only", "Rate of change", "Monotonicity"], a: 0, c: "absolute", d: "M", why: "<b>Absolute</b>." },
      { s: "Square gives the largest area for a fixed perimeter.", o: ["Optimisation", "Rate of change", "Continuity", "Marginal revenue"], a: 0, c: "optim", d: "E", why: "<b>Optimisation</b>." },
      { s: "Cut 3 cm squares from an 18 cm sheet for the biggest box.", o: ["Optimisation (maximum volume)", "Rate of change", "Absolute minimum", "Marginal cost"], a: 0, c: "optim", d: "C", why: "<b>Max volume</b>." },
      { s: "x³ at x = 0: f′ = 0 but no hill or valley.", o: ["Point of inflection", "Local maximum", "Local minimum", "Absolute max"], a: 0, c: "critical", d: "C", why: "<b>Neither</b>." },
      { s: "dV/dt = 3x² dx/dt.", o: ["Rate of change of cube volume", "Marginal revenue", "Second derivative", "Area of square"], a: 0, c: "rate", d: "M", why: "<b>Cube</b>." },
      { s: "6x + 36 for R = 3x² + 36x + 5.", o: ["Marginal revenue", "Total revenue", "Marginal cost", "Profit"], a: 0, c: "marginal", d: "M", why: "<b>MR</b>." },
      { s: "eˣ always rises.", o: ["Increasing on ℝ", "Decreasing on ℝ", "Has a maximum", "Has a minimum"], a: 0, c: "incdec", d: "E", why: "<b>Increasing</b>." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["dA/dt = 2πr dr/dt.", "Rate of change", "rate"], ["dR/dx.", "Marginal revenue", "marginal"], ["f′ > 0 on an interval.", "Increasing function", "incdec"], ["+ to − sign change.", "First derivative test (max)", "firsttest"], ["f″(c) > 0.", "Second derivative test (min)", "secondtest"], ["Largest of end and critical values.", "Absolute maximum", "absolute"]] }
    ],
    wrong: [
      { stmts: ["f′ > 0 ⇒ increasing.", "f′ < 0 ⇒ decreasing.", "f′ = 0 always gives a maximum.", "f″ < 0 at a critical point ⇒ local max."], a: 2, c: "critical", why: "f′ = 0 may give a max, min or <b>neither</b>." },
      { stmts: ["Square maximises area for a fixed perimeter.", "Sum 20 gives max product 100.", "Box from 18 cm sheet is maximum at x = 9.", "x + 1/x has minimum 2 for x > 0."], a: 2, c: "optim", why: "x = 9 gives <b>no box</b>; the answer is x = 3." },
      { stmts: ["Absolute extrema on [a, b] need the end values.", "A local max is always the absolute max.", "The second test fails if f″(c) = 0.", "Marginal cost is dC/dx."], a: 1, c: "absolute", why: "A local max need <b>not</b> be the absolute max." }
    ],
    para: [
      { target: "Rate of change", c: "rate", sents: ["Oil leaked from a tanker onto calm water.", "The circular slick's radius grew 3 m every minute, and the coastguard calculated how fast its area was growing.", "The coastguard boat was white.", "The sea was blue."], a: 1, why: "dA/dt: <b>rate of change</b>." },
      { target: "Local maximum", c: "firsttest", sents: ["A city's daily temperature was tracked in summer.", "It rose every day until 15 June and fell after that.", "Rain arrived in July.", "Schools reopened in July."], a: 1, why: "+ to −: <b>maximum</b>." },
      { target: "Optimisation", c: "optim", sents: ["A juice company designs a can.", "It chooses the radius that uses the least metal for a fixed volume.", "The can is green.", "It sells in summer."], a: 1, why: "Minimise material: <b>optimisation</b>." }
    ],
    explain: [
      { s: "A ripple's area grows faster as it gets bigger, though the radius grows steadily.", o: ["dA/dt = 2πr dr/dt grows with r", "Area is constant", "Radius speeds up", "π changes"], a: 0, c: "rate", why: "The clue is <i>faster as bigger</i>: dA/dt <b>depends on r</b>." },
      { s: "x³ has f′(0) = 0 but no maximum or minimum at 0.", o: ["f′ does not change sign at 0", "f is discontinuous at 0", "f″(0) > 0", "f is decreasing"], a: 0, c: "critical", why: "<b>No sign change</b>: inflection." },
      { s: "We check the end points when finding an absolute maximum on [a, b].", o: ["The maximum may occur at an end", "End points are always zero", "f′ is zero at ends", "Ends are critical points"], a: 0, c: "absolute", why: "Extremes can sit at the <b>ends</b>." },
      { s: "A fixed-perimeter rectangle of greatest area is a square.", o: ["A = x(P/2 − x) is greatest at x = P/4", "Squares have more sides", "Rectangles cannot be measured", "Area is constant"], a: 0, c: "optim", why: "Derivative zero at <b>x = P/4</b>." }
    ]
  }
});
