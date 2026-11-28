/* Revision Arena · Class XII Mathematics · Chapter 8 · Application of Integrals (rationalised: area under simple curves only; area between two curves not included). Original examples; every area recomputed. */
NFArena.register({
  id: "m12-ch8", cls: "XII", subject: "Mathematics", unit: "Chapter", num: "8",
  title: "Application of Integrals",
  tagline: "Area under simple curves: lines, parabolas, circles and ellipses, using vertical or horizontal strips.",
  notesLink: "../#m12-ch8",
  concepts: {
    strip: { n: "Area as a definite integral", s: "idea" },
    yaxis: { n: "Area with respect to the y-axis", s: "idea" },
    sign: { n: "Curves below the x-axis", s: "idea" },
    parab: { n: "Area under a parabola", s: "curves" },
    circle: { n: "Area of a circle", s: "curves" },
    ellipse: { n: "Area of an ellipse", s: "curves" },
    symm: { n: "Using symmetry", s: "curves" }
  },
  overview: {
    text: "A definite integral adds up thin <b>strips</b>. The area bounded by y = f(x), the x-axis and the lines x = a, x = b is <b>A = ∫ₐᵇ y dx</b>. With horizontal strips, the area bounded by x = g(y), the y-axis and y = c, y = d is <b>A = ∫꜀ᵈ x dy</b>. We use these for lines, parabolas, circles and ellipses, and use <b>symmetry</b> to save work.",
    points: [
      "Always draw a rough sketch and shade the region first.",
      "Area is always positive: if the curve is below the x-axis, take |∫ y dx|.",
      "Circle x² + y² = a²: area πa². Ellipse x²/a² + y²/b² = 1: area πab.",
      "Tool: ∫√(a² − x²) dx = (x/2)√(a² − x²) + (a²/2) sin⁻¹(x/a) + C."
    ],
    map: {
      center: "Area under curves",
      branches: [
        { t: "Idea", c: ["Vertical strips ∫y dx", "Horizontal strips ∫x dy", "Sketch first"] },
        { t: "Sign", c: ["Below axis ⇒ negative integral", "Take modulus", "Split at crossings"] },
        { t: "Parabola", c: ["y² = 4ax", "x² = 4ay", "Cut by a line x = k"] },
        { t: "Circle & ellipse", c: ["πa²", "πab", "4 × quadrant", "Symmetry"] }
      ]
    }
  },
  sections: [
    {
      id: "idea", title: "Area as a definite integral", sub: "Adding thin strips", icon: "▦", color: "#2F6BFF",
      quick: [
        "Area bounded by y = f(x) ≥ 0, the x-axis, x = a and x = b: <b>A = ∫ₐᵇ y dx</b> (vertical strips of width dx).",
        "Area bounded by x = g(y) ≥ 0, the y-axis, y = c and y = d: <b>A = ∫꜀ᵈ x dy</b> (horizontal strips).",
        "Check with geometry: y = x + 1 from x = 0 to 2 is a trapezium of area (1 + 3)/2 × 2 = 4, and ∫₀² (x + 1) dx = 4 ✓.",
        "If f(x) ≤ 0 on [a, b], the integral is negative; the <b>area = |∫ₐᵇ f(x) dx|</b>.",
        "If the curve crosses the axis, <b>split</b> at the crossing: area under y = sin x from 0 to 2π is 2 + 2 = 4, not 0.",
        "Area under y = x³ from −1 to 1 is 1/4 + 1/4 = 1/2, although ∫₋₁¹ x³ dx = 0."
      ],
      cards: [
        { t: "Worked: horizontal strips", tag: "numerical", b: "<p>Area bounded by x = y², the y-axis and y = 0 to y = 2: A = ∫₀² y² dy = <b>8/3</b> sq units.</p>" },
        { t: "Sketch rule", tag: "hook", b: "<p><b>“No sketch, no marks.”</b> Board marking schemes give a mark for the correct figure with the region shaded.</p>" }
      ],
      exam: ["Draw and shade the region.", "Write ‘sq units’ with the answer."]
    },
    {
      id: "curves", title: "Parabola, circle and ellipse", sub: "Standard regions", icon: "⬭", color: "#12B5A6",
      quick: [
        "<b>Parabola y² = 4ax</b> cut by x = k: area = 2∫₀ᵏ 2√(ax) dx = (8/3)√a · k^(3/2). For y² = 4x and x = 1: 8/3 sq units.",
        "<b>Parabola x² = 4y</b>, with the y-axis and y = 1 to y = 4, first quadrant: ∫₁⁴ 2√y dy = (4/3)(8 − 1) = 28/3 sq units.",
        "<b>Circle x² + y² = a²</b>: A = 4∫₀ᵃ √(a² − x²) dx = 4 × (a²/2)(π/2) = <b>πa²</b>.",
        "<b>Ellipse x²/a² + y²/b² = 1</b>: y = (b/a)√(a² − x²), A = 4(b/a)∫₀ᵃ √(a² − x²) dx = <b>πab</b>.",
        "Quadrant of a circle: πa²/4; quadrant of an ellipse: πab/4.",
        "<b>Symmetry</b>: find the area in one quadrant (or one half) and multiply."
      ],
      cards: [
        { t: "Worked: ellipse", tag: "numerical", b: "<p>x²/9 + y²/4 = 1 has a = 3, b = 2. Area = π × 3 × 2 = <b>6π</b> sq units.</p>" },
        { t: "Worked: parabolic arch", tag: "numerical", b: "<p>y = 4 − x² above the x-axis (x from −2 to 2): A = 2∫₀² (4 − x²) dx = 2(8 − 8/3) = <b>32/3</b> sq units.</p>" }
      ],
      exam: ["State the symmetry you use.", "Write limits from the points where the curve meets the axis or line."]
    }
  ],
  flashcards: [
    { k: "Formula", c: "strip", q: "Area bounded by y = f(x), x-axis, x = a, x = b?", a: "∫ₐᵇ y dx (f ≥ 0)." },
    { k: "Formula", c: "yaxis", q: "Area bounded by x = g(y), y-axis, y = c, y = d?", a: "∫꜀ᵈ x dy." },
    { k: "Rule", c: "sign", q: "The integral comes out negative. The area is…", a: "Its modulus (absolute value)." },
    { k: "Example", c: "sign", q: "Area under y = sin x from 0 to 2π?", a: "4 sq units." },
    { k: "Example", c: "sign", q: "Area under y = cos x from 0 to π?", a: "2 sq units (1 + 1)." },
    { k: "Example", c: "strip", q: "Area under y = x² from 0 to 2?", a: "8/3 sq units." },
    { k: "Example", c: "strip", q: "Area under y = √x from 0 to 4?", a: "16/3 sq units." },
    { k: "Example", c: "parab", q: "Area bounded by y² = 4x and x = 1?", a: "8/3 sq units." },
    { k: "Formula", c: "circle", q: "Area of x² + y² = a²?", a: "πa²." },
    { k: "Formula", c: "ellipse", q: "Area of x²/a² + y²/b² = 1?", a: "πab." },
    { k: "Example", c: "ellipse", q: "Area of x²/16 + y²/9 = 1?", a: "12π sq units." },
    { k: "Tool", c: "circle", q: "∫₀ᵃ √(a² − x²) dx = ?", a: "πa²/4." },
    { k: "Method", c: "symm", q: "Why multiply by 4 for a circle?", a: "It is symmetric about both axes; find one quadrant." },
    { k: "Example", c: "strip", q: "Area under y = eˣ from 0 to 1?", a: "e − 1 sq units." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "A sloping garden bed",
      text: "<p>A garden bed is bounded by the x-axis, the lines x = 0 and x = 4 (metres) and the edge y = x/2 + 1.</p>",
      qs: [
        { q: "Find the area of the bed by integration.", m: 2, type: "Area", c: "strip", hint: "∫₀⁴ (x/2 + 1) dx.", points: [{ p: "A = ∫₀⁴ (x/2 + 1) dx = [x²/4 + x]₀⁴", m: 1, k: ["x²/4 + x", "x^2/4+x"] }, { p: "= 4 + 4 = 8 m²", m: 1, k: ["8"] }], structure: ["Integral, value."], model: "<p>A = ∫₀⁴ (x/2 + 1) dx = [x²/4 + x]₀⁴ = 4 + 4 = <b>8 m²</b>.</p>" },
        { q: "Check your answer using a geometric formula.", m: 1, type: "Verify", c: "strip", hint: "Trapezium.", points: [{ p: "Trapezium: heights 1 and 3, width 4 ⇒ (1 + 3)/2 × 4 = 8 ✓", m: 1, k: ["trapezium", "8"] }], structure: ["One line."], model: "<p>It is a trapezium with parallel sides 1 and 3 and width 4: (1 + 3)/2 × 4 = 8 ✓.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "A circular pond",
      text: "<p>A circular pond in a park is modelled by x² + y² = 25 (metres).</p>",
      qs: [
        { q: "Write the integral for its area and evaluate it.", m: 2, type: "Circle", c: "circle", hint: "4∫₀⁵ √(25 − x²) dx.", points: [{ p: "A = 4∫₀⁵ √(25 − x²) dx", m: 1, k: ["4∫", "√(25 − x²)", "sqrt(25-x^2)"] }, { p: "= 4 × (25/2)(π/2) = 25π m²", m: 1, k: ["25π"] }], structure: ["Symmetry, evaluate."], model: "<p>By symmetry, A = 4∫₀⁵ √(25 − x²) dx = 4[(x/2)√(25 − x²) + (25/2) sin⁻¹(x/5)]₀⁵ = 4 × (25/2)(π/2) = <b>25π m²</b>.</p>" },
        { q: "What area lies in the first quadrant?", m: 1, type: "Quadrant", c: "symm", hint: "One quarter.", points: [{ p: "25π/4 m²", m: 1, k: ["25π/4"] }], structure: ["One line."], model: "<p>One quarter: <b>25π/4 m²</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "A parabolic arch",
      text: "<p>The opening of a tunnel is shaped like y = 4 − x² above the road (the x-axis), with x and y in metres.</p>",
      qs: [
        { q: "Where does the arch meet the road?", m: 1, type: "Limits", c: "parab", hint: "y = 0.", points: [{ p: "4 − x² = 0 ⇒ x = ±2", m: 1, k: ["±2", "x = 2", "−2"] }], structure: ["Solve."], model: "<p>4 − x² = 0 ⇒ <b>x = −2 and x = 2</b>.</p>" },
        { q: "Find the area of the tunnel opening.", m: 2, type: "Area", c: "symm", hint: "2∫₀².", points: [{ p: "A = 2∫₀² (4 − x²) dx (symmetric about the y-axis)", m: 1, k: ["2∫", "symmetric"] }, { p: "= 2(8 − 8/3) = 32/3 m²", m: 1, k: ["32/3"] }], structure: ["Symmetry, evaluate."], model: "<p>The curve is symmetric about the y-axis: A = 2∫₀² (4 − x²) dx = 2[4x − x³/3]₀² = 2(8 − 8/3) = <b>32/3 m²</b>.</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "An elliptical running track",
      text: "<p>The field inside a running track is modelled by x²/64 + y²/36 = 1 (metres).</p>",
      qs: [
        { q: "Find the area of the field.", m: 2, type: "Ellipse", c: "ellipse", hint: "πab.", points: [{ p: "a = 8, b = 6", m: 1, k: ["a = 8", "b = 6"] }, { p: "A = π × 8 × 6 = 48π m²", m: 1, k: ["48π"] }], structure: ["a, b, area."], model: "<p>a² = 64, b² = 36 ⇒ a = 8, b = 6. Area = πab = <b>48π m²</b>.</p>" },
        { q: "Show the first-quadrant integral that gives one quarter of it.", m: 1, type: "Set up", c: "ellipse", hint: "y = (6/8)√(64 − x²).", points: [{ p: "(3/4)∫₀⁸ √(64 − x²) dx = 12π", m: 1, k: ["(3/4)∫", "3/4", "12π"] }], structure: ["One integral."], model: "<p>y = (3/4)√(64 − x²), so the quarter is (3/4)∫₀⁸ √(64 − x²) dx = (3/4)(16π) = <b>12π m²</b>.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "The disappearing area",
      text: "<p><b>Rohan</b> computed ∫₀^(2π) sin x dx = 0 and claimed the curve y = sin x encloses no area with the x-axis on [0, 2π].</p>",
      qs: [
        { q: "Explain his mistake and find the correct area.", m: 3, type: "Sign", c: "sign", hint: "Split at π.", points: [{ p: "sin x < 0 on (π, 2π); the integral there is negative", m: 1, k: ["negative", "below"] }, { p: "∫₀^π sin x dx = 2; ∫_π^(2π) sin x dx = −2", m: 1, k: ["2", "−2", "-2"] }, { p: "Area = 2 + |−2| = 4 sq units", m: 1, k: ["4"] }], structure: ["Reason, split, total."], model: "<p>The positive and negative parts cancelled. Below the axis (π to 2π) the integral is negative.</p><p>∫₀^π sin x dx = 2 and ∫_π^(2π) sin x dx = −2. Area = 2 + |−2| = <b>4 sq units</b>.</p>" },
        { q: "Find the area bounded by y = x³, the x-axis, x = −1 and x = 1.", m: 2, type: "Sign", c: "sign", hint: "Two equal parts.", points: [{ p: "∫₀¹ x³ dx = 1/4; the left part has the same size", m: 1, k: ["1/4"] }, { p: "Area = 1/2 sq unit", m: 1, k: ["1/2"] }], structure: ["Parts, total."], model: "<p>∫₀¹ x³ dx = 1/4 and ∫₋₁⁰ x³ dx = −1/4. Area = 1/4 + 1/4 = <b>1/2 sq unit</b>.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "strip", q: "The area under y = x² from x = 0 to x = 3 is:", o: ["9", "27", "3", "6"], a: 0, hint: "x³/3.", why: "27/3 = <b>9</b> sq units." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "circle", q: "The area of the circle x² + y² = 16 is:", o: ["16π", "4π", "8π", "256π"], a: 0, hint: "πa².", why: "<b>16π</b>." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "ellipse", q: "The area of x²/9 + y²/4 = 1 is:", o: ["6π", "36π", "13π", "5π"], a: 0, hint: "πab.", why: "π × 3 × 2 = <b>6π</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "sign", q: "The area bounded by y = cos x and the x-axis from 0 to π is:", o: ["2", "0", "1", "π"], a: 0, hint: "Split at π/2.", why: "1 + 1 = <b>2</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "parab", q: "The area bounded by y² = 4x and the line x = 1 is:", o: ["8/3", "4/3", "2/3", "16/3"], a: 0, hint: "2∫₀¹ 2√x dx.", why: "<b>8/3</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "yaxis", q: "The area bounded by x = y², the y-axis and the lines y = 0, y = 3 is:", o: ["9", "27", "3", "6"], a: 0, hint: "∫₀³ y² dy.", why: "<b>9</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "strip", q: "The area under y = √x from x = 0 to x = 9 is:", o: ["18", "27", "6", "9"], a: 0, hint: "(2/3)x^(3/2).", why: "(2/3) × 27 = <b>18</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "ellipse", q: "The area of the ellipse 4x² + 9y² = 36 in the first quadrant is:", o: ["3π/2", "6π", "3π", "π"], a: 0, hint: "a = 3, b = 2; quarter.", why: "6π/4 = <b>3π/2</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "sign", q: "The area bounded by y = sin x and the x-axis from 0 to 2π is 0.", r: "∫₀^(2π) sin x dx = 0.", a: 3, hint: "Split at π.", why: "A is false (area 4); R is true." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "circle", q: "The area of x² + y² = a² is 4∫₀ᵃ √(a² − x²) dx.", r: "A circle centred at the origin is symmetric about both axes.", a: 0, hint: "Four quadrants.", why: "Both true, and R explains A." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "ellipse", q: "The area of x²/25 + y²/16 = 1 is 20π.", r: "The area of a circle of radius r is πr².", a: 1, hint: "πab.", why: "Both true, but R (circle) does not explain A (ellipse)." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "sign", q: "An area can be negative.", a: false, hint: "Modulus.", why: "False." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "yaxis", q: "Area with horizontal strips uses ∫ x dy.", a: true, hint: "Strip width dy.", why: "True." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "parab", q: "The area under y = 4 − x² above the x-axis is 32/3 sq units.", a: true, hint: "2∫₀² (4 − x²).", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "strip", q: "Match the region with its area.", pairs: [["y = x², x from 0 to 2", "8/3"], ["y = eˣ, x from 0 to 1", "e − 1"], ["y = 1/x, x from 1 to e", "1"], ["y = x + 1, x from 0 to 2", "4"]], hint: "∫ y dx.", why: "Each evaluated directly." },
    { id: "q16", t: "match", d: "M", m: 4, c: "ellipse", q: "Match the curve with its total area.", pairs: [["x² + y² = 9", "9π"], ["x²/4 + y² = 1", "2π"], ["x²/16 + y²/9 = 1", "12π"], ["x²/25 + y²/4 = 1", "10π"]], hint: "πa², πab.", why: "πa² or πab." },
    { id: "q17", t: "match", d: "M", m: 4, c: "sign", q: "Match the region with its area.", pairs: [["y = sin x, 0 to π", "2"], ["y = sin x, 0 to 2π", "4"], ["y = x³, −1 to 1", "1/2"], ["y = cos x, 0 to π/2", "1"]], hint: "Split where the curve crosses.", why: "Take modulus of each part." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "circle", q: "The area of x² + y² = 49 is ______π.", acc: ["49"], hint: "a = 7.", why: "<b>49</b>π." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "parab", q: "The area bounded by y² = 4x and x = 4 is ______ sq units.", acc: ["64/3"], hint: "2∫₀⁴ 2√x dx.", why: "4 × (2/3) × 8 = <b>64/3</b>." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "ellipse", q: "The area of x²/a² + y²/b² = 1 is ______.", acc: ["πab", "pi ab", "πba"], hint: "Formula.", why: "<b>πab</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "yaxis", q: "The area bounded by x² = 4y, the y-axis, y = 1 and y = 4 in the first quadrant is ______.", acc: ["28/3"], hint: "∫₁⁴ 2√y dy.", why: "(4/3)(8 − 1) = <b>28/3</b>." },
    { id: "q22", t: "short", d: "E", m: 1, c: "strip", q: "What must you draw first in any area question?", acc: ["sketch", "rough sketch", "figure", "graph", "diagram"], hint: "Board scheme.", why: "A <b>rough sketch</b> with the region shaded." },
    { id: "q23", t: "short", d: "M", m: 1, c: "circle", q: "Value of ∫₀³ √(9 − x²) dx? (in terms of π)", acc: ["9π/4", "9pi/4"], hint: "Quarter of 9π.", why: "<b>9π/4</b>." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "parab", q: "Find the area of the region bounded by y² = 9x, x = 2, x = 4 and the x-axis in the first quadrant.", hint: "y = 3√x.", why: "", points: [{ p: "A = ∫₂⁴ 3√x dx", m: 1, k: ["3√x", "3sqrt"] }, { p: "= 2[x^(3/2)]₂⁴", m: 1, k: ["x^(3/2)", "x³ᐟ²"] }, { p: "= 2(8 − 2√2) = 16 − 4√2 sq units", m: 1, k: ["16 − 4√2", "16-4√2"] }], model: "<p>In the first quadrant y = 3√x. A = ∫₂⁴ 3√x dx = 3 × (2/3)[x^(3/2)]₂⁴ = 2(8 − 2√2) = <b>16 − 4√2 sq units</b>.</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "sign", q: "Find the area bounded by y = x² − 4, the x-axis and the lines x = 0 and x = 2.", hint: "The curve is below the axis.", why: "", points: [{ p: "On [0, 2], x² − 4 ≤ 0 (below the axis)", m: 1, k: ["below", "negative"] }, { p: "∫₀² (x² − 4) dx = 8/3 − 8 = −16/3", m: 1, k: ["−16/3", "-16/3"] }, { p: "Area = 16/3 sq units", m: 1, k: ["16/3"] }], model: "<p>For 0 ≤ x ≤ 2, x² − 4 ≤ 0, so the region lies below the x-axis.</p><p>∫₀² (x² − 4) dx = [x³/3 − 4x]₀² = 8/3 − 8 = −16/3.</p><p>Area = |−16/3| = <b>16/3 sq units</b>.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "circle", q: "Using integration, find the area of the circle x² + y² = 36.", hint: "4∫₀⁶ √(36 − x²) dx.", why: "", points: [{ p: "Symmetric about both axes ⇒ A = 4∫₀⁶ √(36 − x²) dx", m: 1, k: ["4∫", "symmetric"] }, { p: "Use ∫√(a² − x²) = (x/2)√(a² − x²) + (a²/2) sin⁻¹(x/a)", m: 1, k: ["sin⁻¹", "sin^-1"] }, { p: "= 4[0 + 18 × π/2 − 0]", m: 1, k: ["18", "π/2"] }, { p: "= 36π sq units", m: 1, k: ["36π"] }], model: "<p>The circle is symmetric about both axes: A = 4∫₀⁶ √(36 − x²) dx.</p><p>= 4[(x/2)√(36 − x²) + 18 sin⁻¹(x/6)]₀⁶ = 4[0 + 18 × π/2 − 0] = <b>36π sq units</b>.</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "parab", q: "Find the area of the region bounded by the parabola y² = 8x and its latus rectum.", hint: "4a = 8 ⇒ a = 2; latus rectum x = 2.", why: "", points: [{ p: "a = 2; latus rectum is x = 2", m: 1, k: ["x = 2", "a = 2"] }, { p: "A = 2∫₀² √(8x) dx", m: 1, k: ["2∫", "√(8x)", "2√2"] }, { p: "= 2 × 2√2 × (2/3)(2√2)", m: 1, k: ["2√2", "(2/3)"] }, { p: "= 32/3 sq units", m: 1, k: ["32/3"] }], model: "<p>y² = 8x = 4(2)x ⇒ a = 2; the latus rectum is x = 2.</p><p>By symmetry about the x-axis, A = 2∫₀² √(8x) dx = 2 × 2√2 × (2/3)[x^(3/2)]₀² = 2 × 2√2 × (2/3) × 2√2 = <b>32/3 sq units</b>.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "ellipse", q: "Using integration, find the area of the ellipse x²/16 + y²/9 = 1. Hence write the area of the part of the ellipse in the first quadrant.", hint: "y = (3/4)√(16 − x²).", why: "", points: [{ p: "Sketch; ellipse symmetric about both axes", m: 1, k: ["symmetric", "sketch"] }, { p: "y = (3/4)√(16 − x²) in the first quadrant", m: 1, k: ["(3/4)√(16 − x²)", "3/4"] }, { p: "A = 4 × (3/4)∫₀⁴ √(16 − x²) dx = 3∫₀⁴ √(16 − x²) dx", m: 1, k: ["3∫"] }, { p: "= 3[(x/2)√(16 − x²) + 8 sin⁻¹(x/4)]₀⁴", m: 1, k: ["8 sin⁻¹", "8sin"] }, { p: "= 3 × 8 × π/2 = 12π sq units", m: 1, k: ["12π"] }, { p: "First quadrant: 3π sq units", m: 1, k: ["3π"] }], model: "<p>The ellipse is symmetric about both axes. In the first quadrant, y = (3/4)√(16 − x²), 0 ≤ x ≤ 4.</p><p>A = 4∫₀⁴ (3/4)√(16 − x²) dx = 3[(x/2)√(16 − x²) + 8 sin⁻¹(x/4)]₀⁴ = 3(0 + 8 × π/2) = <b>12π sq units</b>.</p><p>Check: πab = π × 4 × 3 = 12π ✓. First quadrant: 12π/4 = <b>3π sq units</b>.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "strip", q: "A logo is the region under y = 2x from x = 0 to x = 3 cm. Its area is:", o: ["9 cm²", "6 cm²", "18 cm²", "3 cm²"], a: 0, hint: "∫₀³ 2x dx.", why: "[x²]₀³ = <b>9 cm²</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "ellipse", q: "An elliptical mirror has semi-axes 50 cm and 30 cm. Its area is:", o: ["1500π cm²", "2500π cm²", "80π cm²", "750π cm²"], a: 0, hint: "πab.", why: "<b>1500π cm²</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "circle", passage: "A round table top is modelled by x² + y² = 1 (metres).", q: "Its area is:", o: ["π m²", "2π m²", "π/4 m²", "4π m²"], a: 0, hint: "a = 1.", why: "<b>π m²</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "symm", passage: "A designer needs only the first-quadrant part of the table top above.", q: "That area is:", o: ["π/4 m²", "π/2 m²", "π m²", "1 m²"], a: 0, hint: "One quarter.", why: "<b>π/4 m²</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "parab", passage: "A reflector's cross-section is bounded by y² = 4x and x = 9 (cm).", q: "The area of the cross-section is:", o: ["72 cm²", "36 cm²", "18 cm²", "108 cm²"], a: 0, hint: "2∫₀⁹ 2√x dx.", why: "4 × (2/3) × 27 = <b>72 cm²</b>." }
  ],
  find: {
    mcq: [
      { s: "∫ₐᵇ y dx with vertical strips.", o: ["Area under a curve", "Area with the y-axis", "Volume", "Slope"], a: 0, c: "strip", d: "E", why: "<b>Area under a curve</b>." },
      { s: "Strips of width dy between the curve and the y-axis.", o: ["Area with respect to the y-axis", "Area under a curve (x-axis)", "Odd property", "Partial fractions"], a: 0, c: "yaxis", d: "E", why: "<b>Horizontal strips</b>." },
      { s: "∫₀³ y² dy for the curve x = y².", o: ["Area with respect to the y-axis", "Area of an ellipse", "Area of a circle", "Below-axis area"], a: 0, c: "yaxis", d: "M", why: "<b>∫x dy</b>." },
      { s: "The integral came out as −16/3, so the area is 16/3.", o: ["Taking modulus for a curve below the axis", "Symmetry", "Ellipse formula", "Horizontal strips"], a: 0, c: "sign", d: "M", why: "<b>Below the axis</b>." },
      { s: "Splitting y = sin x at x = π.", o: ["Curve crossing the axis", "Symmetry of a circle", "Ellipse formula", "Horizontal strips"], a: 0, c: "sign", d: "M", why: "<b>Crossing the axis</b>: split." },
      { s: "πa².", o: ["Area of a circle", "Area of an ellipse", "Area under a parabola", "Area of a quadrant"], a: 0, c: "circle", d: "E", why: "<b>Circle</b>." },
      { s: "4∫₀ᵃ √(a² − x²) dx.", o: ["Area of a circle", "Area of an ellipse", "Area under a line", "Volume of a sphere"], a: 0, c: "circle", d: "M", why: "<b>Circle</b>, by symmetry." },
      { s: "πab.", o: ["Area of an ellipse", "Area of a circle", "Area under a parabola", "Area of a triangle"], a: 0, c: "ellipse", d: "E", why: "<b>Ellipse</b>." },
      { s: "y = (b/a)√(a² − x²) in the first quadrant.", o: ["Ellipse", "Circle", "Parabola", "Line"], a: 0, c: "ellipse", d: "M", why: "<b>Ellipse</b>." },
      { s: "Region bounded by y² = 4x and x = 1.", o: ["Area under a parabola", "Area of a circle", "Area of an ellipse", "Below-axis area"], a: 0, c: "parab", d: "E", why: "<b>Parabola</b>." },
      { s: "Bounded by a parabola and its latus rectum.", o: ["Area under a parabola", "Area of an ellipse", "Area of a circle", "Area with a line only"], a: 0, c: "parab", d: "C", why: "<b>Parabola</b> cut by x = a." },
      { s: "Find one quadrant and multiply by 4.", o: ["Using symmetry", "Taking modulus", "Horizontal strips", "By parts"], a: 0, c: "symm", d: "E", why: "<b>Symmetry</b>." },
      { s: "Tunnel y = 4 − x²: area = 2∫₀².", o: ["Symmetry about the y-axis", "Ellipse formula", "Below-axis area", "Horizontal strips"], a: 0, c: "symm", d: "M", why: "<b>Symmetry</b>." },
      { s: "A trapezium-shaped bed found by ∫(x/2 + 1) dx.", o: ["Area under a curve", "Area of an ellipse", "Area of a circle", "Below-axis area"], a: 0, c: "strip", d: "M", why: "<b>Area under a line</b>." },
      { s: "Total area under y = x³ on [−1, 1] is 1/2, not 0.", o: ["Curve below the axis on part of the interval", "Ellipse formula", "Symmetry of a circle", "Horizontal strips"], a: 0, c: "sign", d: "C", why: "<b>Sign</b>: take modulus of each part." },
      { s: "Area of a mirror with semi-axes 50 and 30.", o: ["Area of an ellipse", "Area of a circle", "Area under a parabola", "Area with the y-axis"], a: 0, c: "ellipse", d: "C", why: "<b>πab</b>." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["∫ₐᵇ y dx.", "Area as a definite integral", "strip"], ["∫꜀ᵈ x dy.", "Area with respect to the y-axis", "yaxis"], ["Take |∫ y dx|.", "Curves below the x-axis", "sign"], ["y² = 4ax cut by x = k.", "Area under a parabola", "parab"], ["πa².", "Area of a circle", "circle"], ["πab.", "Area of an ellipse", "ellipse"]] }
    ],
    wrong: [
      { stmts: ["Area of x² + y² = 16 is 16π.", "Area of x²/9 + y²/4 = 1 is 6π.", "Area under y = sin x from 0 to 2π is 0.", "Area under y = x² from 0 to 3 is 9."], a: 2, c: "sign", why: "The area is <b>4</b>; the integral is 0." },
      { stmts: ["∫ x dy uses horizontal strips.", "An area is always positive.", "A sketch earns a mark.", "The area of an ellipse is πa²."], a: 3, c: "ellipse", why: "It is <b>πab</b>." },
      { stmts: ["Area bounded by y² = 4x and x = 1 is 8/3.", "Area under y = √x from 0 to 4 is 16/3.", "Area under y = 4 − x² above the axis is 16/3.", "Area under y = eˣ from 0 to 1 is e − 1."], a: 2, c: "parab", why: "It is <b>32/3</b>." }
    ],
    para: [
      { target: "Curves below the x-axis", c: "sign", sents: ["Asha integrated x² − 4 from 0 to 2 and got −16/3.", "She wrote the area as 16/3 because the region lies under the x-axis.", "Her notebook was new.", "The class ended at noon."], a: 1, why: "<b>Modulus</b> for a region below the axis." },
      { target: "Using symmetry", c: "symm", sents: ["A pond was modelled by a circle centred at the origin.", "The surveyor found the first-quadrant area and multiplied it by four.", "He wore a cap.", "It rained later."], a: 1, why: "<b>Symmetry</b>." },
      { target: "Area with respect to the y-axis", c: "yaxis", sents: ["A region lay between the curve x = y² and the y-axis.", "The student used horizontal strips and integrated x with respect to y.", "The bench was wooden.", "The bell rang."], a: 1, why: "<b>∫x dy</b>." }
    ],
    explain: [
      { s: "∫₀^(2π) sin x dx = 0 but the area is 4.", o: ["Parts above and below the axis cancel in the integral", "sin x is even", "The limits are wrong", "Area is always zero for trig curves"], a: 0, c: "sign", why: "<b>Cancellation</b>: take modulus of each part." },
      { s: "A circle's area is written as 4 × a first-quadrant integral.", o: ["Symmetry about both axes", "The circle is below the axis", "Horizontal strips", "By parts"], a: 0, c: "circle", why: "<b>Symmetry</b>." },
      { s: "The ellipse x²/16 + y²/9 = 1 has area 12π, not 16π.", o: ["Area is πab, with a = 4, b = 3", "It is a circle", "b = 4", "Area is πa²"], a: 0, c: "ellipse", why: "<b>πab</b> = 12π." },
      { s: "For x = y², we integrate with respect to y.", o: ["x is given as a function of y and the region touches the y-axis", "The curve is a circle", "The region is below the x-axis", "It is an ellipse"], a: 0, c: "yaxis", why: "<b>Horizontal strips</b>." }
    ]
  }
});
