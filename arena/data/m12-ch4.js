/* Revision Arena · Class XII Mathematics · Chapter 4 · Determinants (rationalised syllabus: up to 3×3, minors, cofactors, area, adjoint, inverse, matrix method). Original systems; every cofactor recomputed. */
NFArena.register({
  id: "m12-ch4", cls: "XII", subject: "Mathematics", unit: "Chapter", num: "4",
  title: "Determinants",
  tagline: "Evaluating 2×2 and 3×3 determinants, area of a triangle, minors and cofactors, adjoint and inverse, and solving linear equations by the matrix method.",
  notesLink: "../#m12-ch4",
  concepts: {
    eval: { n: "Evaluating determinants", s: "eval" },
    area: { n: "Area of a triangle and collinearity", s: "eval" },
    minor: { n: "Minors and cofactors", s: "adj" },
    adj: { n: "Adjoint of a matrix", s: "adj" },
    inv: { n: "Inverse using adjoint", s: "adj" },
    sing: { n: "Singular and non-singular matrices", s: "adj" },
    system: { n: "Solving equations by matrix method", s: "sys" },
    consist: { n: "Consistency of a system", s: "sys" }
  },
  overview: {
    text: "Every square matrix A has a number called its <b>determinant</b>, |A|. It gives the <b>area of a triangle</b> from its vertices, tells us whether A is <b>invertible</b> (|A| ≠ 0), and, through <b>cofactors</b> and the <b>adjoint</b>, gives A⁻¹ = adj A ÷ |A|. Then a system AX = B is solved as <b>X = A⁻¹B</b>.",
    points: [
      "|a b; c d| = ad − bc. A 3 × 3 determinant is expanded along any row or column using cofactors.",
      "Area of triangle = ½ |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|; area 0 ⇒ collinear.",
      "Cofactor Aᵢⱼ = (−1)^(i+j) Mᵢⱼ; adj A = transpose of the cofactor matrix; A (adj A) = |A| I.",
      "|A| ≠ 0 ⇒ unique solution X = A⁻¹B. |A| = 0: check (adj A)B."
    ],
    map: {
      center: "Determinants",
      branches: [
        { t: "Evaluate", c: ["2 × 2: ad − bc", "3 × 3 expansion", "Area of triangle"] },
        { t: "Cofactors", c: ["Minor Mᵢⱼ", "Cofactor Aᵢⱼ", "Sign pattern"] },
        { t: "Inverse", c: ["adj A", "A⁻¹ = adj A/|A|", "Singular if |A| = 0"] },
        { t: "Equations", c: ["AX = B", "X = A⁻¹B", "Consistency"] }
      ]
    }
  },
  sections: [
    {
      id: "eval", title: "Evaluating determinants and area", sub: "A number from a square matrix", icon: "🔲", color: "#2F6BFF",
      quick: [
        "|a b; c d| = <b>ad − bc</b>. Example: |2 3; 1 4| = 8 − 3 = 5.",
        "3 × 3: expand along a row (or column): |A| = a₁₁A₁₁ + a₁₂A₁₂ + a₁₃A₁₃. Choose the row with most zeros.",
        "Sign pattern for cofactors: <b>+ − + / − + − / + − +</b>.",
        "Area of triangle with vertices (x₁, y₁), (x₂, y₂), (x₃, y₃) = ½ |det[x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1]|. Take the absolute value: area is never negative.",
        "Area = 0 ⇔ the three points are <b>collinear</b>; this also gives the equation of a line through two points.",
        "If an area is given, solve ½ |…| = area: two values usually come out (± cases)."
      ],
      cards: [
        { t: "Worked: area", tag: "numerical", b: "<p>(1, 0), (6, 0), (4, 3): ½ |1(0 − 3) + 6(3 − 0) + 4(0 − 0)| = ½ |−3 + 18| = <b>7.5</b> sq units.</p>" },
        { t: "Worked: find k", tag: "numerical", b: "<p>Area 4 with (k, 0), (4, 0), (0, 2): ½ |k(0 − 2) + 4(2 − 0) + 0| = 4 ⇒ |8 − 2k| = 8 ⇒ <b>k = 0 or k = 8</b>.</p>" }
      ],
      exam: ["Write the determinant with the third column of 1s.", "Keep both values of k in area questions."]
    },
    {
      id: "adj", title: "Minors, cofactors, adjoint and inverse", sub: "Building A⁻¹", icon: "🧮", color: "#12B5A6",
      quick: [
        "<b>Minor Mᵢⱼ</b>: determinant left after deleting row i and column j. <b>Cofactor Aᵢⱼ = (−1)^(i+j) Mᵢⱼ</b>.",
        "Expansion along a row with its <b>own</b> cofactors gives |A|; with cofactors of <b>another</b> row gives 0.",
        "<b>adj A</b> = transpose of the matrix of cofactors. For 2 × 2: adj[a b; c d] = [d −b; −c a].",
        "<b>A (adj A) = (adj A) A = |A| I</b>.",
        "A is <b>singular</b> if |A| = 0 and <b>non-singular</b> if |A| ≠ 0. A is invertible ⇔ non-singular, and then <b>A⁻¹ = (1/|A|) adj A</b>.",
        "For an n × n matrix: |adj A| = |A|^(n − 1); |A⁻¹| = 1/|A|."
      ],
      cards: [
        { t: "Worked: 2 × 2 inverse", tag: "numerical", b: "<p>A = [3 2; 5 4]: |A| = 12 − 10 = 2; adj A = [4 −2; −5 3]; <b>A⁻¹ = [2 −1; −5/2 3/2]</b>.</p>" },
        { t: "Memory hook", tag: "hook", b: "<p><b>“Swap the diagonal, sign the others, divide by the determinant.”</b> (2 × 2 inverse.)</p>" }
      ],
      exam: ["Show the full cofactor table before taking the transpose.", "Check: A × A⁻¹ = I for one entry at least."]
    },
    {
      id: "sys", title: "Solving equations by the matrix method", sub: "X = A⁻¹B", icon: "🧩", color: "#FF8A1F",
      quick: [
        "Write the system as <b>AX = B</b>: A = coefficient matrix, X = variables, B = constants.",
        "If <b>|A| ≠ 0</b>: the system is <b>consistent</b> with a <b>unique</b> solution X = A⁻¹B.",
        "If |A| = 0 and <b>(adj A)B ≠ O</b>: the system is <b>inconsistent</b> (no solution).",
        "If |A| = 0 and (adj A)B = O: either infinitely many solutions (consistent) or none.",
        "Always <b>check</b> the answer in all the original equations."
      ],
      cards: [
        { t: "Worked: 3 × 3 system", tag: "numerical", b: "<p>x + y + z = 6, 2x − y + z = 3, x + 2y − z = 2.</p><p>|A| = 7 (≠ 0). adj A = [−1 3 2; 3 −2 1; 5 −1 −3].</p><p>(adj A)B = [−6 + 9 + 4; 18 − 6 + 2; 30 − 3 − 6] = [7; 14; 21] ⇒ X = ⅐[7; 14; 21] = <b>[1; 2; 3]</b>.</p>" },
        { t: "Worked: 2 × 2 system", tag: "numerical", b: "<p>3x + 2y = 70, 2x + 5y = 120: |A| = 11, adj A = [5 −2; −2 3].</p><p>X = (1/11)[350 − 240; −140 + 360] = (1/11)[110; 220] = <b>[10; 20]</b>.</p>" }
      ],
      exam: ["State |A| ≠ 0 before using A⁻¹.", "Write the final answer as x = …, y = …, z = …"]
    }
  ],
  flashcards: [
    { k: "Formula", c: "eval", q: "|a b; c d| = ?", a: "ad − bc." },
    { k: "Value", c: "eval", q: "|2 3; 1 4|?", a: "5." },
    { k: "Pattern", c: "eval", q: "Sign pattern of cofactors in a 3 × 3?", a: "+ − + / − + − / + − +." },
    { k: "Formula", c: "area", q: "Area of a triangle with determinants?", a: "½ |det[x₁ y₁ 1; x₂ y₂ 1; x₃ y₃ 1]|." },
    { k: "Fact", c: "area", q: "Area 0 means…", a: "The points are collinear." },
    { k: "Definition", c: "minor", q: "Minor Mᵢⱼ?", a: "Determinant after deleting row i and column j." },
    { k: "Definition", c: "minor", q: "Cofactor Aᵢⱼ?", a: "(−1)^(i+j) Mᵢⱼ." },
    { k: "Fact", c: "minor", q: "Row of elements × cofactors of another row gives…", a: "0." },
    { k: "Definition", c: "adj", q: "Adjoint of A?", a: "Transpose of the cofactor matrix." },
    { k: "Formula", c: "adj", q: "adj[a b; c d]?", a: "[d −b; −c a]." },
    { k: "Formula", c: "adj", q: "A (adj A) = ?", a: "|A| I." },
    { k: "Formula", c: "inv", q: "A⁻¹ = ?", a: "(1/|A|) adj A, if |A| ≠ 0." },
    { k: "Definition", c: "sing", q: "Singular matrix?", a: "|A| = 0." },
    { k: "Formula", c: "adj", q: "|adj A| for 3 × 3?", a: "|A|²." },
    { k: "Method", c: "system", q: "Matrix-method solution of AX = B?", a: "X = A⁻¹B (|A| ≠ 0)." },
    { k: "Rule", c: "consist", q: "|A| ≠ 0 means the system has…", a: "A unique solution (consistent)." },
    { k: "Rule", c: "consist", q: "|A| = 0 and (adj A)B ≠ O means…", a: "No solution (inconsistent)." },
    { k: "Formula", c: "inv", q: "|A⁻¹| = ?", a: "1/|A|." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "The triangular garden",
      text: "<p>A park plans a triangular flower bed with corners at <b>(1, 0)</b>, <b>(6, 0)</b> and <b>(4, 3)</b> (in metres). A path is also planned through (1, 2), (3, 4) and (5, 6).</p>",
      qs: [
        { q: "Find the area of the flower bed using determinants.", m: 2, type: "Numerical", c: "area", hint: "½ |…|.", points: [{ p: "½ |1(0 − 3) + 6(3 − 0) + 4(0 − 0)|", m: 1, k: ["−3 + 18", "-3 + 18", "15"] }, { p: "= 7.5 m²", m: 1, k: ["7.5"] }], structure: ["Formula, answer."], model: "<p>Area = ½ |1(0 − 3) + 6(3 − 0) + 4(0 − 0)| = ½ |−3 + 18| = <b>7.5 m²</b>.</p>" },
        { q: "Show that the three path points are collinear.", m: 1, type: "Verify", c: "area", hint: "Area 0.", points: [{ p: "½ |1(4 − 6) + 3(6 − 2) + 5(2 − 4)| = ½ |−2 + 12 − 10| = 0", m: 1, k: ["0"] }], structure: ["One calculation."], model: "<p>½ |1(4 − 6) + 3(6 − 2) + 5(2 − 4)| = ½ |−2 + 12 − 10| = <b>0</b>, so the points are collinear.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "Tea and samosas",
      text: "<p>At a school fair, 3 cups of tea and 2 samosas cost <b>₹70</b>, while 2 cups of tea and 5 samosas cost <b>₹120</b>.</p>",
      qs: [
        { q: "Write the system in matrix form and find |A|.", m: 1, type: "Set up", c: "system", hint: "AX = B.", points: [{ p: "A = [3 2; 2 5], B = [70; 120]; |A| = 15 − 4 = 11", m: 1, k: ["11"] }], structure: ["Matrices, determinant."], model: "<p>A = [3 2; 2 5], X = [x; y], B = [70; 120]. |A| = 15 − 4 = <b>11</b> ≠ 0.</p>" },
        { q: "Solve by the matrix method.", m: 2, type: "Solve", c: "system", hint: "X = A⁻¹B.", points: [{ p: "adj A = [5 −2; −2 3]; (adj A)B = [110; 220]", m: 1, k: ["110", "220"] }, { p: "x = 10, y = 20 (tea ₹10, samosa ₹20)", m: 1, k: ["10", "20"] }], structure: ["Adjoint, product, answer."], model: "<p>adj A = [5 −2; −2 3]. (adj A)B = [350 − 240; −140 + 360] = [110; 220].</p><p>X = (1/11)[110; 220] = [10; 20]: <b>tea ₹10, samosa ₹20</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Finding a missing corner",
      text: "<p>A surveyor knows two corners of a triangular plot, (4, 0) and (0, 2), and that the third corner (k, 0) lies on the x-axis. The plot's area is <b>4 square units</b>.</p>",
      qs: [
        { q: "Find the possible values of k.", m: 2, type: "Solve", c: "area", hint: "|8 − 2k| = 8.", points: [{ p: "½ |k(0 − 2) + 4(2 − 0) + 0(0 − 0)| = 4 ⇒ |8 − 2k| = 8", m: 1, k: ["8 − 2k", "8-2k"] }, { p: "k = 0 or k = 8", m: 1, k: ["0", "8"] }], structure: ["Equation, both values."], model: "<p>½ |k(0 − 2) + 4(2 − 0) + 0| = 4 ⇒ |8 − 2k| = 8 ⇒ 8 − 2k = ±8 ⇒ <b>k = 0 or k = 8</b>.</p>" },
        { q: "Why do we get two values?", m: 1, type: "Explain", c: "area", hint: "Absolute value.", points: [{ p: "The determinant can be +8 or −8 (orientation); area uses the absolute value", m: 1, k: ["absolute", "±", "sign"] }], structure: ["One line."], model: "<p>The determinant gives a signed value (+8 or −8 depending on the order of the vertices); area uses its <b>absolute value</b>, so both signs are allowed.</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "The singular matrix trap",
      text: "<p><b>Kunal</b> tries to solve 2x + 4y = 6 and x + 2y = 5 by the matrix method.</p>",
      qs: [
        { q: "Find |A|. Can he use A⁻¹?", m: 1, type: "Check", c: "sing", hint: "|2 4; 1 2|.", points: [{ p: "|A| = 4 − 4 = 0: singular, no inverse", m: 1, k: ["0", "singular"] }], structure: ["Value, conclusion."], model: "<p>|A| = 2·2 − 4·1 = <b>0</b>: A is singular, so A⁻¹ does not exist.</p>" },
        { q: "Find (adj A)B and decide whether the system has any solution.", m: 2, type: "Consistency", c: "consist", hint: "adj A = [2 −4; −1 2].", points: [{ p: "(adj A)B = [12 − 20; −6 + 10] = [−8; 4] ≠ O", m: 1, k: ["−8", "-8", "4"] }, { p: "Inconsistent: no solution", m: 1, k: ["inconsistent", "no solution"] }], structure: ["Product, conclusion."], model: "<p>adj A = [2 −4; −1 2]. (adj A)B = [2·6 − 4·5; −1·6 + 2·5] = <b>[−8; 4] ≠ O</b>.</p><p>So the system is <b>inconsistent</b>: no solution (the lines are parallel: 2x + 4y = 6 means x + 2y = 3, not 5).</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Three products, three equations",
      text: "<p>A puzzle contest gives three clues about the prices x, y and z (in hundreds of rupees) of three gift packs: <b>x + y + z = 6</b>, <b>2x − y + z = 3</b> and <b>x + 2y − z = 2</b>. <b>Aarav</b> must solve it by the matrix method.</p>",
      qs: [
        { q: "Find |A| and the cofactors of the first row.", m: 2, type: "Compute", c: "minor", hint: "A = [1 1 1; 2 −1 1; 1 2 −1].", points: [{ p: "A₁₁ = −1, A₁₂ = 3, A₁₃ = 5", m: 1, k: ["−1", "-1", "3", "5"] }, { p: "|A| = 1(−1) + 1(3) + 1(5) = 7", m: 1, k: ["7"] }], structure: ["Cofactors, then |A|."], model: "<p>A₁₁ = +((−1)(−1) − (1)(2)) = −1; A₁₂ = −((2)(−1) − (1)(1)) = 3; A₁₃ = +((2)(2) − (−1)(1)) = 5.</p><p>|A| = 1(−1) + 1(3) + 1(5) = <b>7</b>.</p>" },
        { q: "Find adj A and solve the system.", m: 3, type: "Solve", c: "system", hint: "X = (1/7)(adj A)B.", points: [{ p: "adj A = [−1 3 2; 3 −2 1; 5 −1 −3]", m: 1, k: ["[−1 3 2", "[-1 3 2"] }, { p: "(adj A)B = [7; 14; 21]", m: 1, k: ["7", "14", "21"] }, { p: "x = 1, y = 2, z = 3", m: 1, k: ["x = 1", "1, 2, 3"] }], structure: ["Adjoint, product, answer."], model: "<p>Remaining cofactors: A₂₁ = 3, A₂₂ = −2, A₂₃ = −1; A₃₁ = 2, A₃₂ = 1, A₃₃ = −3.</p><p>adj A = <b>[−1 3 2; 3 −2 1; 5 −1 −3]</b>. (adj A)B = [−6 + 9 + 4; 18 − 6 + 2; 30 − 3 − 6] = [7; 14; 21].</p><p>X = ⅐[7; 14; 21] ⇒ <b>x = 1, y = 2, z = 3</b>. Check: 1 + 2 + 3 = 6 ✓.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "eval", q: "|2 3; 1 4| equals:", o: ["5", "11", "−5", "8"], a: 0, hint: "ad − bc.", why: "8 − 3 = <b>5</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "sing", q: "A square matrix is singular if:", o: ["|A| = 0", "|A| = 1", "A = Aᵀ", "A = I"], a: 0, hint: "No inverse.", why: "<b>|A| = 0</b>." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "adj", q: "adj[3 2; 5 4] is:", o: ["[4 −2; −5 3]", "[4 −5; −2 3]", "[3 −2; −5 4]", "[−4 2; 5 −3]"], a: 0, hint: "Swap, change signs.", why: "<b>[4 −2; −5 3]</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "area", q: "The area of the triangle with vertices (0, 0), (4, 0), (0, 3) is:", o: ["6", "12", "7", "3.5"], a: 0, hint: "½ × 4 × 3.", why: "<b>6</b> sq units." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "adj", q: "If A is 3 × 3 and |A| = 5, then |adj A| is:", o: ["25", "5", "125", "15"], a: 0, hint: "|A|^(n−1).", why: "5² = <b>25</b>." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "eval", q: "If A is 3 × 3 and |A| = 4, then |2A| is:", o: ["32", "8", "16", "64"], a: 0, hint: "2³ × 4.", why: "<b>32</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "consist", q: "If |A| = 0 and (adj A)B ≠ O, the system AX = B has:", o: ["No solution", "A unique solution", "Infinitely many solutions", "Exactly two solutions"], a: 0, hint: "Inconsistent.", why: "<b>No solution</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "minor", q: "For A = [1 1 1; 2 −1 1; 1 2 −1], the cofactor A₁₃ is:", o: ["5", "−5", "3", "−1"], a: 0, hint: "+|2 −1; 1 2|.", why: "4 − (−1) = <b>5</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "inv", q: "A square matrix A has an inverse if and only if |A| ≠ 0.", r: "A⁻¹ = (1/|A|) adj A.", a: 0, hint: "Division by |A|.", why: "Both true, and R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "area", q: "Points (1, 2), (3, 4), (5, 6) are collinear.", r: "The area of the triangle formed by collinear points is zero.", a: 0, hint: "Compute area.", why: "Both true, and R explains A." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "minor", q: "Sum of elements of a row multiplied by the cofactors of another row is |A|.", r: "Expansion along a row uses that row's own cofactors.", a: 3, hint: "Another row gives 0.", why: "A is false (it gives 0); R is true." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "eval", q: "A determinant can be found for a 2 × 3 matrix.", a: false, hint: "Square only.", why: "False." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "adj", q: "A (adj A) = |A| I.", a: true, hint: "Key identity.", why: "True." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "consist", q: "If |A| ≠ 0, AX = B has a unique solution.", a: true, hint: "A⁻¹ exists.", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "eval", q: "Match the determinant with its value.", pairs: [["|2 3; 1 4|", "5"], ["|5 2; 3 1|", "−1"], ["|4 6; 2 3|", "0"], ["|1 0; 0 7|", "7"]], hint: "ad − bc.", why: "Each value from ad − bc." },
    { id: "q16", t: "match", d: "M", m: 4, c: "consist", q: "Match the condition with the type of solution.", pairs: [["|A| ≠ 0", "Unique solution"], ["|A| = 0, (adj A)B ≠ O", "No solution"], ["|A| = 0, (adj A)B = O", "Infinitely many or none"], ["A non-singular, B = O", "Only X = O"]], hint: "Consistency rules.", why: "Each condition gives one outcome." },
    { id: "q17", t: "match", d: "M", m: 4, c: "adj", q: "For a 3 × 3 matrix with |A| = 3, match.", pairs: [["|adj A|", "9"], ["|A⁻¹|", "1/3"], ["|2A|", "24"], ["|Aᵀ|", "3"]], hint: "|A|², 1/|A|, 2³|A|, |A|.", why: "Each follows from a rule." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "minor", q: "The cofactor Aᵢⱼ = (−1)^(i+j) × ______.", acc: ["mij", "minor", "m_ij", "mᵢⱼ"], hint: "M.", why: "<b>Mᵢⱼ</b>." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "area", q: "The area of the triangle with vertices (1, 0), (6, 0), (4, 3) is ______ sq units.", acc: ["7.5", "15/2"], hint: "½ × 15.", why: "<b>7.5</b>." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "system", q: "Solving 3x + 2y = 70 and 2x + 5y = 120 gives x = ______.", acc: ["10"], hint: "|A| = 11.", why: "<b>10</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "area", q: "If the area of the triangle with vertices (k, 0), (4, 0), (0, 2) is 4, the non-zero value of k is ______.", acc: ["8"], hint: "|8 − 2k| = 8.", why: "<b>8</b>." },
    { id: "q22", t: "short", d: "E", m: 1, c: "sing", q: "Is [2 4; 1 2] singular? (yes/no)", acc: ["yes"], hint: "4 − 4.", why: "<b>Yes</b>." },
    { id: "q23", t: "short", d: "M", m: 1, c: "eval", q: "Find |1 2 0; 0 3 0; 4 5 2| (expand along column 3).", acc: ["6"], hint: "2 × |1 2; 0 3|.", why: "2 × 3 = <b>6</b>." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "inv", q: "Find the inverse of A = [3 2; 5 4] and verify AA⁻¹ = I.", hint: "|A| = 2.", why: "", points: [{ p: "|A| = 2", m: 1, k: ["2"] }, { p: "A⁻¹ = ½[4 −2; −5 3] = [2 −1; −5/2 3/2]", m: 1, k: ["[2 −1", "−5/2", "-5/2"] }, { p: "AA⁻¹ = [6 − 5, −3 + 3; 10 − 10, −5 + 6] = I", m: 1, k: ["= i"] }], model: "<p>|A| = 12 − 10 = 2; adj A = [4 −2; −5 3].</p><p>A⁻¹ = ½[4 −2; −5 3] = <b>[2 −1; −5/2 3/2]</b>.</p><p>AA⁻¹ = [3·2 + 2(−5/2), 3(−1) + 2(3/2); 5·2 + 4(−5/2), 5(−1) + 4(3/2)] = [1 0; 0 1] = <b>I</b>.</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "consist", q: "Examine the consistency of 2x + 4y = 6 and x + 2y = 5.", hint: "|A|, then (adj A)B.", why: "", points: [{ p: "|A| = 0", m: 1, k: ["0"] }, { p: "(adj A)B = [−8; 4] ≠ O", m: 1, k: ["−8", "-8"] }, { p: "Inconsistent", m: 1, k: ["inconsistent"] }], model: "<p>A = [2 4; 1 2], |A| = 0.</p><p>adj A = [2 −4; −1 2]; (adj A)B = [12 − 20; −6 + 10] = [−8; 4] ≠ O.</p><p>Hence the system is <b>inconsistent</b>.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "area", q: "Using determinants, find the equation of the line through (1, 2) and (3, 6), and check whether (5, 10) lies on it.", hint: "Area with (x, y) = 0.", why: "", points: [{ p: "det[x y 1; 1 2 1; 3 6 1] = 0", m: 1, k: ["det", "= 0"] }, { p: "x(2 − 6) − y(1 − 3) + (6 − 6) = 0 ⇒ −4x + 2y = 0", m: 1, k: ["−4x + 2y", "-4x + 2y"] }, { p: "y = 2x", m: 1, k: ["y = 2x"] }, { p: "(5, 10): 10 = 2 × 5, so it lies on the line", m: 1, k: ["10", "lies"] }], model: "<p>For any point (x, y) on the line, the area with (1, 2), (3, 6) is 0: det[x y 1; 1 2 1; 3 6 1] = 0.</p><p>x(2 − 6) − y(1 − 3) + 1(6 − 6) = 0 ⇒ −4x + 2y = 0 ⇒ <b>y = 2x</b>.</p><p>(5, 10): 10 = 2 × 5 ✓, so it <b>lies on the line</b>.</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "adj", q: "For A = [1 1 1; 2 −1 1; 1 2 −1], find all cofactors and adj A.", hint: "Sign pattern.", why: "", points: [{ p: "Row 1 cofactors: −1, 3, 5", m: 1, k: ["−1, 3, 5", "-1, 3, 5"] }, { p: "Row 2 cofactors: 3, −2, −1", m: 1, k: ["3, −2, −1", "3, -2, -1"] }, { p: "Row 3 cofactors: 2, 1, −3", m: 1, k: ["2, 1, −3", "2, 1, -3"] }, { p: "adj A = [−1 3 2; 3 −2 1; 5 −1 −3]", m: 1, k: ["[−1 3 2", "[-1 3 2"] }], model: "<p>A₁₁ = −1, A₁₂ = 3, A₁₃ = 5; A₂₁ = 3, A₂₂ = −2, A₂₃ = −1; A₃₁ = 2, A₃₂ = 1, A₃₃ = −3.</p><p>adj A = transpose of the cofactor matrix = <b>[−1 3 2; 3 −2 1; 5 −1 −3]</b>.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "system", q: "Solve by the matrix method: x + y + z = 6, 2x − y + z = 3, x + 2y − z = 2.", hint: "|A| = 7.", why: "", points: [{ p: "A, X, B written", m: 1, k: ["ax = b"] }, { p: "|A| = 7 ≠ 0", m: 1, k: ["7"] }, { p: "Cofactors correct", m: 1, k: ["cofactor"] }, { p: "adj A = [−1 3 2; 3 −2 1; 5 −1 −3]", m: 1, k: ["[−1 3 2", "[-1 3 2"] }, { p: "X = (1/7)(adj A)B = (1/7)[7; 14; 21]", m: 1, k: ["[7; 14; 21]", "14", "21"] }, { p: "x = 1, y = 2, z = 3", m: 1, k: ["x = 1"] }], model: "<p>A = [1 1 1; 2 −1 1; 1 2 −1], X = [x; y; z], B = [6; 3; 2].</p><p>|A| = 1(1 − 2) − 1(−2 − 1) + 1(4 + 1) = −1 + 3 + 5 = <b>7</b> ≠ 0, so a unique solution exists.</p><p>Cofactors: A₁₁ = −1, A₁₂ = 3, A₁₃ = 5; A₂₁ = 3, A₂₂ = −2, A₂₃ = −1; A₃₁ = 2, A₃₂ = 1, A₃₃ = −3.</p><p>adj A = [−1 3 2; 3 −2 1; 5 −1 −3]; X = ⅐(adj A)B = ⅐[7; 14; 21] = [1; 2; 3].</p><p><b>x = 1, y = 2, z = 3</b>.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "area", q: "A farmer's three fence posts stand at (0, 0), (8, 0) and (0, 5) metres. The area enclosed is:", o: ["20 m²", "40 m²", "13 m²", "10 m²"], a: 0, hint: "½ × 8 × 5.", why: "<b>20 m²</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "consist", q: "Two shops give the price lists 2x + 4y = 6 and x + 2y = 3 (same information). The system has:", o: ["Infinitely many solutions", "No solution", "A unique solution", "Exactly two solutions"], a: 0, hint: "Same line.", why: "|A| = 0 and (adj A)B = O; same line: <b>infinitely many</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "eval", passage: "A puzzle shows the matrix [6 2; 3 1].", q: "Its determinant is:", o: ["0", "12", "6", "9"], a: 0, hint: "6 − 6.", why: "<b>0</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "inv", passage: "A code uses A = [2 1; 1 1] to scramble messages and A⁻¹ to unscramble.", q: "A⁻¹ is:", o: ["[1 −1; −1 2]", "[1 1; 1 2]", "[2 −1; −1 1]", "[−1 1; 1 −2]"], a: 0, hint: "|A| = 1.", why: "adj A/|A| = <b>[1 −1; −1 2]</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "adj", passage: "A 3 × 3 matrix used in a simulation has |A| = −2.", q: "|adj A| equals:", o: ["4", "−4", "−8", "2"], a: 0, hint: "|A|².", why: "(−2)² = <b>4</b>." }
  ],
  find: {
    mcq: [
      { s: "ad − bc for a 2 × 2 matrix.", o: ["Determinant", "Adjoint", "Inverse", "Transpose"], a: 0, c: "eval", d: "E", why: "<b>Determinant</b>." },
      { s: "Expanding along a row with zeros to save work.", o: ["Evaluating a 3 × 3 determinant", "Finding a transpose", "Adding matrices", "Area"], a: 0, c: "eval", d: "M", why: "<b>Expansion</b>." },
      { s: "½ |x₁(y₂ − y₃) + x₂(y₃ − y₁) + x₃(y₁ − y₂)|.", o: ["Area of a triangle", "Inverse", "Cofactor", "Adjoint"], a: 0, c: "area", d: "E", why: "<b>Area</b>." },
      { s: "Three points give zero area.", o: ["Collinear", "Right-angled", "Equilateral", "Singular"], a: 0, c: "area", d: "M", why: "<b>Collinear</b>." },
      { s: "Determinant left after deleting row 2 and column 3.", o: ["Minor M₂₃", "Cofactor A₃₂", "Adjoint", "Transpose"], a: 0, c: "minor", d: "E", why: "<b>Minor M₂₃</b>." },
      { s: "(−1)^(i+j) Mᵢⱼ.", o: ["Cofactor", "Minor", "Determinant", "Inverse"], a: 0, c: "minor", d: "E", why: "<b>Cofactor</b>." },
      { s: "Transpose of the cofactor matrix.", o: ["Adjoint", "Inverse", "Determinant", "Minor"], a: 0, c: "adj", d: "M", why: "<b>Adjoint</b>." },
      { s: "[d −b; −c a] from [a b; c d].", o: ["Adjoint of 2 × 2", "Inverse always", "Transpose", "Determinant"], a: 0, c: "adj", d: "M", why: "<b>adj</b>." },
      { s: "A (adj A) = |A| I.", o: ["Adjoint identity", "Inverse formula", "Area formula", "Consistency"], a: 0, c: "adj", d: "C", why: "<b>Adjoint identity</b>." },
      { s: "(1/|A|) adj A.", o: ["A⁻¹", "Aᵀ", "|A|", "Minor"], a: 0, c: "inv", d: "E", why: "<b>Inverse</b>." },
      { s: "|A| = 0; no inverse.", o: ["Singular", "Non-singular", "Symmetric", "Identity"], a: 0, c: "sing", d: "E", why: "<b>Singular</b>." },
      { s: "X = A⁻¹B.", o: ["Matrix method", "Area method", "Cofactor expansion", "Transpose"], a: 0, c: "system", d: "M", why: "<b>Matrix method</b>." },
      { s: "Two equations represent parallel lines.", o: ["Inconsistent system", "Unique solution", "Singular identity", "Collinear points"], a: 0, c: "consist", d: "M", why: "<b>Inconsistent</b>." },
      { s: "|A| ≠ 0 for the coefficient matrix.", o: ["Unique solution", "No solution", "Infinitely many", "Cannot say"], a: 0, c: "consist", d: "M", why: "<b>Unique</b>." },
      { s: "|adj A| = |A|² for this size.", o: ["3 × 3 matrix", "2 × 2 matrix", "4 × 4 matrix", "1 × 1 matrix"], a: 0, c: "adj", d: "C", why: "n − 1 = 2: <b>3 × 3</b>." },
      { s: "Same equation written twice in different multiples.", o: ["Infinitely many solutions", "No solution", "Unique solution", "Singular inverse"], a: 0, c: "consist", d: "C", why: "<b>Infinitely many</b>." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["ad − bc.", "2 × 2 determinant", "eval"], ["Zero area.", "Collinear points", "area"], ["(−1)^(i+j) Mᵢⱼ.", "Cofactor", "minor"], ["Transpose of cofactors.", "Adjoint", "adj"], ["adj A ÷ |A|.", "Inverse", "inv"], ["|A| = 0, (adj A)B ≠ O.", "Inconsistent system", "consist"]] }
    ],
    wrong: [
      { stmts: ["A⁻¹ exists if |A| ≠ 0.", "A⁻¹ = adj A/|A|.", "Every square matrix has an inverse.", "A singular matrix has |A| = 0."], a: 2, c: "inv", why: "Only <b>non-singular</b> matrices do." },
      { stmts: ["Area by determinant can be negative.", "Collinear points give zero area.", "We take the absolute value for area.", "Area questions may give two values of k."], a: 0, c: "area", why: "Area uses the <b>absolute</b> value." },
      { stmts: ["|A| ≠ 0 ⇒ unique solution.", "|A| = 0, (adj A)B ≠ O ⇒ no solution.", "|A| = 0 always means no solution.", "Check answers in all equations."], a: 2, c: "consist", why: "|A| = 0 can also give <b>infinitely many</b> solutions." }
    ],
    para: [
      { target: "Area of a triangle", c: "area", sents: ["A town plans a new park.", "The engineer used the coordinates of three corner posts in a determinant to find the land size.", "The park will have a pond.", "It opens next spring."], a: 1, why: "Determinant for <b>area</b>." },
      { target: "Matrix method", c: "system", sents: ["A juice shop sells three sizes.", "From three days of sales, the owner set up AX = B and used A⁻¹ to find each size's price.", "The shop is near a school.", "It closes at 8 pm."], a: 1, why: "X = A⁻¹B." },
      { target: "Inconsistent system", c: "consist", sents: ["Two friends gave different clues about the same two prices.", "Their clues reduced to x + 2y = 3 and x + 2y = 5.", "They met at a café.", "It was raining."], a: 1, why: "Parallel lines: <b>no solution</b>." }
    ],
    explain: [
      { s: "A matrix with |A| = 0 has no inverse.", o: ["A⁻¹ = adj A/|A| would divide by zero", "Its transpose is zero", "It is not square", "Its adjoint is zero"], a: 0, c: "sing", why: "The clue is <i>no inverse</i>: <b>division by |A| = 0</b>." },
      { s: "Area of three points comes out 0.", o: ["They lie on one line", "They form a right triangle", "The matrix is identity", "Determinant is negative"], a: 0, c: "area", why: "<b>Collinear</b>." },
      { s: "Elements of row 1 × cofactors of row 2 add to 0.", o: ["It is the determinant of a matrix with two equal rows", "Row 1 is zero", "Cofactors are zero", "The matrix is singular"], a: 0, c: "minor", why: "It equals a determinant with <b>two identical rows</b>, which is 0." },
      { s: "x + y = 2 and 2x + 2y = 4 have infinitely many solutions.", o: ["Same line; |A| = 0 and (adj A)B = O", "Parallel lines", "|A| ≠ 0", "No inverse needed"], a: 0, c: "consist", why: "<b>Same line</b>." }
    ]
  }
});
