/* Revision Arena · Class XII Mathematics · Chapter 3 · Matrices (rationalised syllabus: no elementary operations). Original examples; every product recomputed. */
NFArena.register({
  id: "m12-ch3", cls: "XII", subject: "Mathematics", unit: "Chapter", num: "3",
  title: "Matrices",
  tagline: "Order and types of matrices, addition and scalar multiplication, matrix multiplication, transpose, symmetric and skew-symmetric matrices, and invertible matrices.",
  notesLink: "../#m12-ch3",
  concepts: {
    order: { n: "Order and construction", s: "basics" },
    types: { n: "Types of matrices", s: "basics" },
    addsc: { n: "Addition and scalar multiplication", s: "ops" },
    mult: { n: "Matrix multiplication", s: "ops" },
    trans: { n: "Transpose and its properties", s: "sym" },
    symskew: { n: "Symmetric and skew-symmetric matrices", s: "sym" },
    inv: { n: "Invertible matrices", s: "sym" }
  },
  overview: {
    text: "A <b>matrix</b> is a rectangular array of numbers with m rows and n columns (order m × n). Matrices of the same order can be added; any matrix can be multiplied by a scalar; A × B exists only when the <b>columns of A equal the rows of B</b>, and in general <b>AB ≠ BA</b>. The <b>transpose</b> swaps rows and columns. Every square matrix is the sum of a <b>symmetric</b> and a <b>skew-symmetric</b> matrix.",
    points: [
      "(A + B)ᵀ = Aᵀ + Bᵀ; (kA)ᵀ = kAᵀ; <b>(AB)ᵀ = BᵀAᵀ</b>.",
      "Symmetric: Aᵀ = A. Skew-symmetric: Aᵀ = −A (diagonal entries 0).",
      "A = ½(A + Aᵀ) + ½(A − Aᵀ).",
      "B is the inverse of A if AB = BA = I; an inverse, if it exists, is unique."
    ],
    map: {
      center: "Matrices",
      branches: [
        { t: "Basics", c: ["Order m × n", "aᵢⱼ construction", "Types"] },
        { t: "Operations", c: ["Addition", "Scalar multiple", "Multiplication", "AB ≠ BA"] },
        { t: "Transpose", c: ["(AB)ᵀ = BᵀAᵀ", "Symmetric", "Skew-symmetric"] },
        { t: "Inverse", c: ["AB = BA = I", "Uniqueness"] }
      ]
    }
  },
  sections: [
    {
      id: "basics", title: "Order, construction and types", sub: "Reading a matrix", icon: "🔢", color: "#2F6BFF",
      quick: [
        "Order <b>m × n</b>: m rows, n columns; mn elements. aᵢⱼ is the element in row i, column j.",
        "A matrix with 12 elements can have orders 1 × 12, 2 × 6, 3 × 4, 4 × 3, 6 × 2, 12 × 1: <b>6 orders</b>.",
        "Types: <b>row</b> (1 × n), <b>column</b> (m × 1), <b>square</b> (m = n), <b>diagonal</b> (off-diagonal entries 0), <b>scalar</b> (diagonal with equal entries), <b>identity I</b> (diagonal entries 1), <b>zero</b> matrix O.",
        "Two matrices are <b>equal</b> if they have the same order and equal corresponding entries.",
        "Number of m × n matrices with each entry 0 or 1: <b>2^(mn)</b> (e.g. 2 × 2: 16; 3 × 3: 512)."
      ],
      cards: [
        { t: "Worked: construct aᵢⱼ = i + 2j (2 × 3)", tag: "example", b: "<p>a₁₁ = 3, a₁₂ = 5, a₁₃ = 7; a₂₁ = 4, a₂₂ = 6, a₂₃ = 8.</p><p>A = [3 5 7; 4 6 8].</p>" }
      ],
      exam: ["Write the order as rows × columns.", "For construction questions, show each aᵢⱼ substitution."]
    },
    {
      id: "ops", title: "Addition, scalar multiple and multiplication", sub: "Operations and their rules", icon: "✖️", color: "#12B5A6",
      quick: [
        "<b>A + B</b>: add corresponding entries (same order only). Addition is commutative and associative; A + O = A.",
        "<b>kA</b>: multiply every entry by k. k(A + B) = kA + kB.",
        "<b>AB</b> exists if A is m × n and B is n × p; AB is m × p. Entry (i, j) = row i of A · column j of B.",
        "Multiplication is <b>associative</b> and distributes over addition, but is <b>not commutative</b>: usually AB ≠ BA.",
        "AB = O does not mean A = O or B = O.",
        "AI = IA = A for a square matrix A of the same order as I."
      ],
      cards: [
        { t: "Worked: AB ≠ BA", tag: "numerical", b: "<p>A = [1 2; 3 4], B = [2 0; 1 −1].</p><p>AB = [4 −2; 10 −4]; BA = [2 4; −2 −2]. Different.</p>" },
        { t: "Worked: A² − 4A + 3I", tag: "numerical", b: "<p>A = [2 1; 1 2]: A² = [5 4; 4 5].</p><p>A² − 4A + 3I = [5 − 8 + 3, 4 − 4; 4 − 4, 5 − 8 + 3] = <b>O</b>.</p>" },
        { t: "Memory hook", tag: "hook", b: "<p><b>“Inside numbers match, outside numbers stay.”</b> (m × <u>n</u>)(<u>n</u> × p) → m × p.</p>" }
      ],
      exam: ["Check orders before multiplying.", "Show one entry's working when multiplying 3 × 3 matrices."]
    },
    {
      id: "sym", title: "Transpose, symmetric, skew-symmetric, inverse", sub: "Flipping and splitting", icon: "🪞", color: "#FF8A1F",
      quick: [
        "<b>Transpose Aᵀ</b> (or A′): rows become columns. (Aᵀ)ᵀ = A; (A + B)ᵀ = Aᵀ + Bᵀ; (kA)ᵀ = kAᵀ; <b>(AB)ᵀ = BᵀAᵀ</b>.",
        "<b>Symmetric</b>: Aᵀ = A (aᵢⱼ = aⱼᵢ). <b>Skew-symmetric</b>: Aᵀ = −A, so every diagonal entry is <b>0</b>.",
        "For any square A: A + Aᵀ is symmetric and A − Aᵀ is skew-symmetric.",
        "<b>A = P + Q</b> with P = ½(A + Aᵀ) symmetric and Q = ½(A − Aᵀ) skew-symmetric.",
        "<b>Invertible</b>: square A has inverse B if AB = BA = I. The inverse is <b>unique</b>, and (AB)⁻¹ = B⁻¹A⁻¹."
      ],
      cards: [
        { t: "Worked: split A = [1 5; −1 2]", tag: "numerical", b: "<p>Aᵀ = [1 −1; 5 2].</p><p>P = ½(A + Aᵀ) = [1 2; 2 2] (symmetric). Q = ½(A − Aᵀ) = [0 3; −3 0] (skew-symmetric). P + Q = A.</p>" },
        { t: "Why is the diagonal of a skew-symmetric matrix zero?", tag: "why", b: "<p>aᵢᵢ = −aᵢᵢ ⇒ 2aᵢᵢ = 0 ⇒ aᵢᵢ = 0.</p>" }
      ],
      exam: ["When splitting, verify P + Q = A at the end.", "Remember the order reversal in (AB)ᵀ and (AB)⁻¹."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "order", q: "Order of a matrix with 3 rows and 4 columns?", a: "3 × 4." },
    { k: "Count", c: "order", q: "Possible orders of a matrix with 8 elements?", a: "1 × 8, 2 × 4, 4 × 2, 8 × 1 (four)." },
    { k: "Count", c: "order", q: "Number of 2 × 2 matrices with entries 0 or 1?", a: "2⁴ = 16." },
    { k: "Definition", c: "types", q: "Scalar matrix?", a: "A diagonal matrix with all diagonal entries equal." },
    { k: "Definition", c: "types", q: "Identity matrix?", a: "Square diagonal matrix with every diagonal entry 1." },
    { k: "Rule", c: "addsc", q: "When can A and B be added?", a: "When they have the same order." },
    { k: "Rule", c: "mult", q: "When does AB exist?", a: "When the number of columns of A equals the number of rows of B." },
    { k: "Rule", c: "mult", q: "Order of AB if A is 2 × 3 and B is 3 × 4?", a: "2 × 4." },
    { k: "Fact", c: "mult", q: "Is matrix multiplication commutative?", a: "No, in general AB ≠ BA." },
    { k: "Fact", c: "mult", q: "Does AB = O imply A = O or B = O?", a: "No." },
    { k: "Rule", c: "trans", q: "(AB)ᵀ = ?", a: "BᵀAᵀ." },
    { k: "Definition", c: "symskew", q: "Symmetric matrix?", a: "Aᵀ = A." },
    { k: "Definition", c: "symskew", q: "Skew-symmetric matrix?", a: "Aᵀ = −A." },
    { k: "Fact", c: "symskew", q: "Diagonal entries of a skew-symmetric matrix?", a: "All zero." },
    { k: "Formula", c: "symskew", q: "Symmetric part of A?", a: "½(A + Aᵀ)." },
    { k: "Definition", c: "inv", q: "Inverse of A?", a: "B with AB = BA = I." },
    { k: "Fact", c: "inv", q: "Can a matrix have two inverses?", a: "No; the inverse is unique." },
    { k: "Rule", c: "inv", q: "(AB)⁻¹ = ?", a: "B⁻¹A⁻¹." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Two stationery shops",
      text: "<p>On Monday, shop X sold <b>10 pens and 15 notebooks</b>, and shop Y sold <b>20 pens and 5 notebooks</b>. A pen costs <b>₹10</b> and a notebook <b>₹40</b>.</p>",
      qs: [
        { q: "Write the sales as a 2 × 2 matrix S and the prices as a 2 × 1 matrix P. What is the order of SP?", m: 1, type: "Set up", c: "mult", hint: "(2 × 2)(2 × 1).", points: [{ p: "S = [10 15; 20 5], P = [10; 40]; SP is 2 × 1", m: 1, k: ["2 × 1", "2x1"] }], structure: ["Matrices, then order."], model: "<p>S = [10 15; 20 5], P = [10; 40]. (2 × 2)(2 × 1) gives SP of order <b>2 × 1</b>.</p>" },
        { q: "Find each shop's revenue using SP.", m: 2, type: "Multiply", c: "mult", hint: "Row · column.", points: [{ p: "X: 10 × 10 + 15 × 40 = 700", m: 1, k: ["700"] }, { p: "Y: 20 × 10 + 5 × 40 = 400", m: 1, k: ["400"] }], structure: ["Each row."], model: "<p>SP = [10 × 10 + 15 × 40; 20 × 10 + 5 × 40] = <b>[700; 400]</b>: shop X earned ₹700 and shop Y ₹400.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "The seating grid",
      text: "<p>A hall's seat numbers form a 2 × 3 matrix with aᵢⱼ = i + 2j, where i is the row and j the column.</p>",
      qs: [
        { q: "Construct the matrix.", m: 2, type: "Construct", c: "order", hint: "Substitute i, j.", points: [{ p: "Row 1: 3, 5, 7", m: 1, k: ["3", "5", "7"] }, { p: "Row 2: 4, 6, 8", m: 1, k: ["4", "6", "8"] }], structure: ["Six entries."], model: "<p>A = <b>[3 5 7; 4 6 8]</b>.</p>" },
        { q: "Write Aᵀ and its order.", m: 1, type: "Transpose", c: "trans", hint: "Rows ↔ columns.", points: [{ p: "Aᵀ = [3 4; 5 6; 7 8], order 3 × 2", m: 1, k: ["3 × 2", "3x2"] }], structure: ["Matrix and order."], model: "<p>Aᵀ = [3 4; 5 6; 7 8], order <b>3 × 2</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Does the order of multiplication matter?",
      text: "<p><b>Rhea</b> multiplies A = [1 2; 3 4] by B = [2 0; 1 −1] in both orders to test whether AB = BA.</p>",
      qs: [
        { q: "Find AB and BA.", m: 2, type: "Multiply", c: "mult", hint: "Row by column.", points: [{ p: "AB = [4 −2; 10 −4]", m: 1, k: ["10", "−4", "-4"] }, { p: "BA = [2 4; −2 −2]", m: 1, k: ["−2", "-2"] }], structure: ["Each product."], model: "<p>AB = [1·2 + 2·1, 1·0 + 2·(−1); 3·2 + 4·1, 3·0 + 4·(−1)] = <b>[4 −2; 10 −4]</b>.</p><p>BA = [2·1 + 0·3, 2·2 + 0·4; 1·1 + (−1)·3, 1·2 + (−1)·4] = <b>[2 4; −2 −2]</b>.</p>" },
        { q: "What do you conclude? Verify (AB)ᵀ = BᵀAᵀ for the (1, 2) entry.", m: 2, type: "Conclude + verify", c: "trans", hint: "(AB)ᵀ₁₂ = (AB)₂₁.", points: [{ p: "AB ≠ BA: multiplication is not commutative", m: 1, k: ["not commutative", "≠"] }, { p: "(AB)ᵀ entry (1, 2) = 10; BᵀAᵀ entry (1, 2) = 2·3 + 1·4 = 10", m: 1, k: ["10"] }], structure: ["Conclusion, check."], model: "<p>AB ≠ BA, so <b>matrix multiplication is not commutative</b>.</p><p>(AB)ᵀ has (1, 2) entry = (AB)₂₁ = 10. Bᵀ = [2 1; 0 −1], Aᵀ = [1 3; 2 4]: (BᵀAᵀ)₁₂ = 2·3 + 1·4 = <b>10</b>. ✓</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "Splitting a matrix",
      text: "<p>A data analyst stores a 2 × 2 table as A = [1 5; −1 2] and wants to write it as the sum of a symmetric and a skew-symmetric matrix.</p>",
      qs: [
        { q: "Find P = ½(A + Aᵀ) and Q = ½(A − Aᵀ).", m: 2, type: "Compute", c: "symskew", hint: "Aᵀ first.", points: [{ p: "P = [1 2; 2 2]", m: 1, k: ["[1 2; 2 2]", "2"] }, { p: "Q = [0 3; −3 0]", m: 1, k: ["3", "−3", "-3"] }], structure: ["Aᵀ, P, Q."], model: "<p>Aᵀ = [1 −1; 5 2]. P = ½[2 4; 4 4] = <b>[1 2; 2 2]</b>. Q = ½[0 6; −6 0] = <b>[0 3; −3 0]</b>.</p>" },
        { q: "Show that P is symmetric, Q is skew-symmetric and P + Q = A.", m: 2, type: "Verify", c: "symskew", hint: "Transpose each.", points: [{ p: "Pᵀ = P; Qᵀ = −Q", m: 1, k: ["pᵀ = p", "qᵀ = −q", "qᵀ = -q"] }, { p: "P + Q = [1 5; −1 2] = A", m: 1, k: ["= a"] }], structure: ["Checks."], model: "<p>Pᵀ = [1 2; 2 2] = P (symmetric). Qᵀ = [0 −3; 3 0] = −Q (skew-symmetric). P + Q = [1 5; −1 2] = <b>A</b>.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "A matrix that solves its own equation",
      text: "<p>A coding club uses A = [2 1; 1 2] in a graphics program. A member notices A² − 4A + 3I = O and wants to use this to find A⁻¹ without any other method.</p>",
      qs: [
        { q: "Verify that A² − 4A + 3I = O.", m: 2, type: "Verify", c: "mult", hint: "A² first.", points: [{ p: "A² = [5 4; 4 5]", m: 1, k: ["5", "4"] }, { p: "A² − 4A + 3I = O", m: 1, k: ["o", "zero"] }], structure: ["A², then combine."], model: "<p>A² = [4 + 1, 2 + 2; 2 + 2, 1 + 4] = [5 4; 4 5].</p><p>A² − 4A + 3I = [5 − 8 + 3, 4 − 4 + 0; 4 − 4 + 0, 5 − 8 + 3] = <b>O</b>.</p>" },
        { q: "Use the equation to find A⁻¹ and check AA⁻¹ = I.", m: 3, type: "Derive", c: "inv", hint: "Multiply by A⁻¹.", points: [{ p: "Multiply by A⁻¹: A − 4I + 3A⁻¹ = O", m: 1, k: ["a⁻¹", "a^-1"] }, { p: "A⁻¹ = ⅓(4I − A) = ⅓[2 −1; −1 2]", m: 1, k: ["[2 −1; −1 2]", "1/3", "⅓"] }, { p: "Check: A · A⁻¹ = ⅓[3 0; 0 3] = I", m: 1, k: ["= i", "[3 0; 0 3]"] }], structure: ["Rearrange, inverse, check."], model: "<p>Multiplying A² − 4A + 3I = O by A⁻¹: A − 4I + 3A⁻¹ = O ⇒ <b>A⁻¹ = ⅓(4I − A) = ⅓[2 −1; −1 2]</b>.</p><p>Check: A · ⅓[2 −1; −1 2] = ⅓[4 − 1, −2 + 2; 2 − 2, −1 + 4] = ⅓[3 0; 0 3] = <b>I</b>.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "order", q: "A matrix with 12 elements can have how many possible orders?", o: ["6", "4", "12", "3"], a: 0, hint: "Factor pairs of 12.", why: "1×12, 2×6, 3×4, 4×3, 6×2, 12×1: <b>6</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "mult", q: "If A is 3 × 2 and B is 2 × 4, the order of AB is:", o: ["3 × 4", "2 × 2", "4 × 3", "Not defined"], a: 0, hint: "Outside numbers.", why: "<b>3 × 4</b>." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "symskew", q: "The diagonal entries of a skew-symmetric matrix are:", o: ["0", "1", "Equal", "Any numbers"], a: 0, hint: "aᵢᵢ = −aᵢᵢ.", why: "<b>0</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "trans", q: "(AB)ᵀ equals:", o: ["BᵀAᵀ", "AᵀBᵀ", "AB", "BA"], a: 0, hint: "Reverse order.", why: "<b>BᵀAᵀ</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "order", q: "The number of 3 × 3 matrices with each entry 0 or 1 is:", o: ["512", "81", "27", "18"], a: 0, hint: "2⁹.", why: "<b>512</b>." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "mult", q: "If A = [2 1; 1 2], then A² equals:", o: ["[5 4; 4 5]", "[4 1; 1 4]", "[4 2; 2 4]", "[5 2; 2 5]"], a: 0, hint: "Row · column.", why: "<b>[5 4; 4 5]</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "symskew", q: "If A is any square matrix, A − Aᵀ is:", o: ["Skew-symmetric", "Symmetric", "Diagonal", "Identity"], a: 0, hint: "Transpose it.", why: "(A − Aᵀ)ᵀ = −(A − Aᵀ): <b>skew-symmetric</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "order", q: "The number of 2 × 2 symmetric matrices with entries 0 or 1 is:", o: ["8", "16", "4", "6"], a: 0, hint: "a₁₂ = a₂₁, so 3 free entries.", why: "2³ = <b>8</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "mult", q: "For square matrices, (A + B)² may not equal A² + 2AB + B².", r: "Matrix multiplication is not commutative in general.", a: 0, hint: "AB vs BA.", why: "(A + B)² = A² + AB + BA + B²; equals the formula only if AB = BA. Both true, R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "types", q: "Every scalar matrix is a diagonal matrix.", r: "A scalar matrix has equal diagonal entries and zeros elsewhere.", a: 0, hint: "Definitions.", why: "Both true, and R explains A." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "mult", q: "If AB = O, then A = O or B = O.", r: "Matrix multiplication is associative.", a: 3, hint: "Counter-example exists.", why: "A is false; R is true (but irrelevant)." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "addsc", q: "A 2 × 3 matrix can be added to a 3 × 2 matrix.", a: false, hint: "Same order.", why: "False." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "inv", q: "The inverse of a square matrix, if it exists, is unique.", a: true, hint: "Proof uses B = BI = B(AC) = (BA)C = C.", why: "True." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "symskew", q: "A matrix can be both symmetric and skew-symmetric.", a: true, hint: "Zero matrix.", why: "True: the <b>zero matrix</b>." },
    { id: "q15", t: "match", d: "E", m: 4, c: "types", q: "Match the matrix with its type.", pairs: [["[1 0; 0 1]", "Identity"], ["[3 0; 0 3]", "Scalar"], ["[2 0; 0 5]", "Diagonal (not scalar)"], ["[0 0; 0 0]", "Zero matrix"]], hint: "Look at the diagonal.", why: "Each matrix has one most specific type." },
    { id: "q16", t: "match", d: "M", m: 4, c: "trans", q: "Match the expression with its equal.", pairs: [["(Aᵀ)ᵀ", "A"], ["(A + B)ᵀ", "Aᵀ + Bᵀ"], ["(kA)ᵀ", "kAᵀ"], ["(AB)ᵀ", "BᵀAᵀ"]], hint: "Transpose rules.", why: "Each identity is standard." },
    { id: "q17", t: "match", d: "M", m: 4, c: "mult", q: "Match the orders with the order of AB.", pairs: [["2 × 3 and 3 × 1", "2 × 1"], ["1 × 3 and 3 × 1", "1 × 1"], ["3 × 1 and 1 × 3", "3 × 3"], ["2 × 2 and 2 × 3", "2 × 3"]], hint: "Outside numbers.", why: "(m × n)(n × p) → m × p." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "symskew", q: "A square matrix with Aᵀ = A is called ______.", acc: ["symmetric"], hint: "s…", why: "<b>Symmetric</b>." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "order", q: "For aᵢⱼ = i + 2j, the entry a₂₃ = ______.", acc: ["8"], hint: "2 + 6.", why: "<b>8</b>." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "mult", q: "If A = [1 2; 3 4] and B = [2 0; 1 −1], the (2, 1) entry of AB is ______.", acc: ["10"], hint: "Row 2 · column 1.", why: "3·2 + 4·1 = <b>10</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "inv", q: "If A² − 4A + 3I = O, then A⁻¹ = ⅓(______ − A).", acc: ["4i", "4I"], hint: "Multiply by A⁻¹.", why: "<b>4I</b>." },
    { id: "q22", t: "short", d: "E", m: 1, c: "types", q: "What is a matrix with only one column called?", acc: ["column matrix", "column", "column vector"], hint: "m × 1.", why: "<b>Column matrix</b>." },
    { id: "q23", t: "short", d: "M", m: 1, c: "symskew", q: "If [0 a; 3 0] is skew-symmetric, find a.", acc: ["-3", "−3"], hint: "a = −3.", why: "<b>−3</b>." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "symskew", q: "Express A = [3 5; 1 −1] as the sum of a symmetric and a skew-symmetric matrix.", hint: "½(A ± Aᵀ).", why: "", points: [{ p: "Aᵀ = [3 1; 5 −1]", m: 1, k: ["[3 1; 5 −1]", "aᵀ"] }, { p: "P = ½(A + Aᵀ) = [3 3; 3 −1]", m: 1, k: ["[3 3; 3 −1]", "3 3"] }, { p: "Q = ½(A − Aᵀ) = [0 2; −2 0]; P + Q = A", m: 1, k: ["[0 2; −2 0]", "2"] }], model: "<p>Aᵀ = [3 1; 5 −1].</p><p>P = ½(A + Aᵀ) = ½[6 6; 6 −2] = <b>[3 3; 3 −1]</b> (symmetric).</p><p>Q = ½(A − Aᵀ) = ½[0 4; −4 0] = <b>[0 2; −2 0]</b> (skew-symmetric). P + Q = [3 5; 1 −1] = A.</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "mult", q: "If A = [1 0; 2 1], find A² and show A² − 2A + I = O.", hint: "Square first.", why: "", points: [{ p: "A² = [1 0; 4 1]", m: 1, k: ["[1 0; 4 1]", "4"] }, { p: "2A = [2 0; 4 2]", m: 1, k: ["[2 0; 4 2]"] }, { p: "A² − 2A + I = [1 − 2 + 1, 0; 4 − 4, 1 − 2 + 1] = O", m: 1, k: ["o", "zero"] }], model: "<p>A² = [1·1 + 0·2, 0; 2·1 + 1·2, 0·2 + 1·1] = <b>[1 0; 4 1]</b>.</p><p>A² − 2A + I = [1 − 2 + 1, 0 − 0 + 0; 4 − 4 + 0, 1 − 2 + 1] = <b>O</b>.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "trans", q: "For A = [1 2; 0 3] and B = [2 1; 1 0], verify that (AB)ᵀ = BᵀAᵀ.", hint: "Compute both sides.", why: "", points: [{ p: "AB = [4 1; 3 0]", m: 1, k: ["[4 1; 3 0]"] }, { p: "(AB)ᵀ = [4 3; 1 0]", m: 1, k: ["[4 3; 1 0]"] }, { p: "Bᵀ = [2 1; 1 0], Aᵀ = [1 0; 2 3]", m: 1, k: ["[1 0; 2 3]"] }, { p: "BᵀAᵀ = [4 3; 1 0] = (AB)ᵀ", m: 1, k: ["[4 3; 1 0]"] }], model: "<p>AB = [1·2 + 2·1, 1·1 + 2·0; 0·2 + 3·1, 0·1 + 3·0] = [4 1; 3 0], so (AB)ᵀ = <b>[4 3; 1 0]</b>.</p><p>Bᵀ = [2 1; 1 0], Aᵀ = [1 0; 2 3]. BᵀAᵀ = [2 + 2, 0 + 3; 1 + 0, 0 + 0] = <b>[4 3; 1 0]</b>. Equal. ✓</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "inv", q: "Show that B = [2 −1; −1 1] is the inverse of A = [1 1; 1 2], and explain why an inverse is unique.", hint: "AB and BA.", why: "", points: [{ p: "AB = [1 0; 0 1]", m: 1, k: ["ab = i", "[1 0; 0 1]"] }, { p: "BA = [1 0; 0 1]", m: 1, k: ["ba = i"] }, { p: "Suppose B and C are both inverses", m: 1, k: ["both inverses", "b and c"] }, { p: "B = BI = B(AC) = (BA)C = IC = C", m: 1, k: ["(ba)c", "= c"] }], model: "<p>AB = [2 − 1, −1 + 1; 2 − 2, −1 + 2] = I and BA = [2 − 1, 2 − 2; −1 + 1, −1 + 2] = I, so <b>B = A⁻¹</b>.</p><p><b>Uniqueness:</b> if B and C are both inverses, B = BI = B(AC) = (BA)C = IC = <b>C</b>.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "mult", q: "A school sells three kinds of tickets: adult ₹50, student ₹30, child ₹20. On Day 1 it sold 40 adult, 100 student, 60 child tickets; on Day 2, 30 adult, 120 student, 80 child. (a) Write the sales as a 2 × 3 matrix and prices as a 3 × 1 matrix. (b) Find each day's collection by matrix multiplication. (c) Find the total collection and the extra amount on Day 2.", hint: "Row · column.", why: "", points: [{ p: "S = [40 100 60; 30 120 80]", m: 1, k: ["[40 100 60"] }, { p: "P = [50; 30; 20]", m: 1, k: ["[50; 30; 20]"] }, { p: "Day 1: 40·50 + 100·30 + 60·20 = 6200", m: 1, k: ["6200"] }, { p: "Day 2: 30·50 + 120·30 + 80·20 = 6700", m: 1, k: ["6700"] }, { p: "Total 12 900", m: 1, k: ["12900", "12 900", "12,900"] }, { p: "Day 2 collected ₹500 more", m: 1, k: ["500"] }], model: "<p>(a) S = [40 100 60; 30 120 80], P = [50; 30; 20].</p><p>(b) SP = [40·50 + 100·30 + 60·20; 30·50 + 120·30 + 80·20] = [2000 + 3000 + 1200; 1500 + 3600 + 1600] = <b>[6200; 6700]</b>.</p><p>(c) Total = 6200 + 6700 = <b>₹12 900</b>; Day 2 collected <b>₹500</b> more.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "mult", q: "A bakery's daily orders (rows: shops, columns: items) form a 3 × 4 matrix, and item prices form a 4 × 1 matrix. Their product gives:", o: ["Each shop's bill (3 × 1)", "Each item's total (4 × 1)", "A 4 × 3 matrix", "It cannot be multiplied"], a: 0, hint: "(3 × 4)(4 × 1).", why: "<b>3 × 1</b>: one bill per shop." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "symskew", q: "A distance table between 4 towns (same distance both ways, 0 on the diagonal) is:", o: ["Symmetric", "Skew-symmetric", "Identity", "Scalar"], a: 0, hint: "aᵢⱼ = aⱼᵢ.", why: "<b>Symmetric</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "order", passage: "A class marks register has 5 students (rows) and 3 tests (columns).", q: "The order of the marks matrix is:", o: ["5 × 3", "3 × 5", "15 × 1", "8 × 1"], a: 0, hint: "Rows × columns.", why: "<b>5 × 3</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "addsc", passage: "All prices in a 2 × 3 price matrix P rise by 10%.", q: "The new price matrix is:", o: ["1.1P", "P + 10", "10P", "P + 0.1"], a: 0, hint: "Scalar multiple.", why: "<b>1.1P</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "symskew", passage: "In a game score table, A[i][j] is the points i won from j, and A[j][i] = −A[i][j] for every pair.", q: "The table matrix is:", o: ["Skew-symmetric", "Symmetric", "Diagonal", "Identity"], a: 0, hint: "Aᵀ = −A.", why: "<b>Skew-symmetric</b>." }
  ],
  find: {
    mcq: [
      { s: "3 rows and 2 columns.", o: ["Order 3 × 2", "Order 2 × 3", "Square", "Column matrix"], a: 0, c: "order", d: "E", why: "<b>3 × 2</b>." },
      { s: "[4 0; 0 4].", o: ["Scalar matrix", "Identity matrix", "Zero matrix", "Skew-symmetric"], a: 0, c: "types", d: "E", why: "<b>Scalar</b>." },
      { s: "Only one row.", o: ["Row matrix", "Column matrix", "Square matrix", "Diagonal matrix"], a: 0, c: "types", d: "E", why: "<b>Row matrix</b>." },
      { s: "Every entry doubled.", o: ["Scalar multiplication 2A", "A + I", "A²", "Aᵀ"], a: 0, c: "addsc", d: "E", why: "<b>2A</b>." },
      { s: "Adding matrices of different orders.", o: ["Not defined", "Always zero", "Gives identity", "Gives transpose"], a: 0, c: "addsc", d: "M", why: "<b>Not defined</b>." },
      { s: "Columns of A = rows of B.", o: ["Condition for AB", "Condition for A + B", "Symmetric", "Skew-symmetric"], a: 0, c: "mult", d: "M", why: "<b>AB</b> is defined." },
      { s: "AB = [4 −2; 10 −4] but BA = [2 4; −2 −2].", o: ["Non-commutative multiplication", "Associativity", "Distributivity", "Identity property"], a: 0, c: "mult", d: "M", why: "<b>AB ≠ BA</b>." },
      { s: "A non-zero A and B with AB = O.", o: ["Possible for matrices", "Impossible", "Means A = O", "Means B = I"], a: 0, c: "mult", d: "C", why: "<b>Possible</b>." },
      { s: "Rows written as columns.", o: ["Transpose", "Inverse", "Adjoint", "Determinant"], a: 0, c: "trans", d: "E", why: "<b>Transpose</b>." },
      { s: "BᵀAᵀ.", o: ["(AB)ᵀ", "(A + B)ᵀ", "(BA)⁻¹", "AB"], a: 0, c: "trans", d: "M", why: "<b>(AB)ᵀ</b>." },
      { s: "aᵢⱼ = aⱼᵢ for all i, j.", o: ["Symmetric", "Skew-symmetric", "Diagonal", "Zero"], a: 0, c: "symskew", d: "E", why: "<b>Symmetric</b>." },
      { s: "aᵢⱼ = −aⱼᵢ and zeros on the diagonal.", o: ["Skew-symmetric", "Symmetric", "Scalar", "Identity"], a: 0, c: "symskew", d: "M", why: "<b>Skew-symmetric</b>." },
      { s: "½(A + Aᵀ).", o: ["Symmetric part of A", "Skew part of A", "Inverse of A", "A²"], a: 0, c: "symskew", d: "C", why: "<b>Symmetric part</b>." },
      { s: "AB = BA = I.", o: ["B is the inverse of A", "B is the transpose", "A is symmetric", "A is zero"], a: 0, c: "inv", d: "M", why: "<b>Inverse</b>." },
      { s: "B⁻¹A⁻¹.", o: ["(AB)⁻¹", "(A + B)⁻¹", "(AB)ᵀ", "A⁻¹B⁻¹"], a: 0, c: "inv", d: "C", why: "<b>(AB)⁻¹</b>." },
      { s: "2^(mn) choices for an m × n matrix of 0s and 1s.", o: ["Counting matrices", "Order", "Transpose", "Inverse"], a: 0, c: "order", d: "C", why: "<b>Counting</b>." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["aᵢⱼ = i + 2j.", "Constructing a matrix", "order"], ["[5 0; 0 5].", "Scalar matrix", "types"], ["Columns of A = rows of B.", "Matrix multiplication", "mult"], ["(AB)ᵀ = BᵀAᵀ.", "Transpose rule", "trans"], ["Aᵀ = −A.", "Skew-symmetric", "symskew"], ["AB = BA = I.", "Inverse", "inv"]] }
    ],
    wrong: [
      { stmts: ["AB exists if columns of A = rows of B.", "Matrix multiplication is commutative.", "Matrix multiplication is associative.", "AI = A for square A."], a: 1, c: "mult", why: "It is <b>not</b> commutative." },
      { stmts: ["(AB)ᵀ = BᵀAᵀ.", "(A + B)ᵀ = Aᵀ + Bᵀ.", "(AB)ᵀ = AᵀBᵀ always.", "(Aᵀ)ᵀ = A."], a: 2, c: "trans", why: "Order must <b>reverse</b>." },
      { stmts: ["Diagonal entries of a skew-symmetric matrix are 0.", "A + Aᵀ is symmetric.", "A − Aᵀ is symmetric.", "Zero matrix is both symmetric and skew-symmetric."], a: 2, c: "symskew", why: "A − Aᵀ is <b>skew-symmetric</b>." }
    ],
    para: [
      { target: "Matrix multiplication", c: "mult", sents: ["A café records daily orders.", "The owner multiplies the orders table by the price list to get each day's bill.", "The café opens at 7 am.", "It has six tables."], a: 1, why: "Orders × prices: <b>multiplication</b>." },
      { target: "Symmetric matrix", c: "symskew", sents: ["A travel company lists distances between five cities.", "The distance from A to B equals the distance from B to A in the table.", "Its office is in Jaipur.", "It runs buses daily."], a: 1, why: "aᵢⱼ = aⱼᵢ: <b>symmetric</b>." },
      { target: "Scalar multiplication", c: "addsc", sents: ["A shop has a price list for 6 items.", "For a festival sale, every price is cut to 80%.", "The shop is near the station.", "It is open till 9 pm."], a: 1, why: "Multiply every entry by 0.8: <b>scalar multiple</b>." }
    ],
    explain: [
      { s: "(A + B)² ≠ A² + 2AB + B² for many matrices.", o: ["AB ≠ BA in general", "Addition is not defined", "A² is not defined", "Matrices have no identity"], a: 0, c: "mult", why: "The clue is <i>≠</i>: the cross terms are AB + BA, equal to 2AB only if <b>AB = BA</b>." },
      { s: "A 2 × 3 matrix cannot be squared.", o: ["Columns (3) ≠ rows (2)", "It has no transpose", "It is skew-symmetric", "It has no inverse"], a: 0, c: "mult", why: "A·A needs <b>columns = rows</b>." },
      { s: "Every diagonal entry of a skew-symmetric matrix is zero.", o: ["aᵢᵢ = −aᵢᵢ", "It is a scalar matrix", "It is invertible", "Its transpose is itself"], a: 0, c: "symskew", why: "<b>aᵢᵢ = −aᵢᵢ ⇒ 0</b>." },
      { s: "A matrix cannot have two different inverses.", o: ["B = BI = B(AC) = (BA)C = C", "AB = BA always", "Inverses are symmetric", "Transpose equals inverse"], a: 0, c: "inv", why: "<b>Uniqueness</b> proof." }
    ]
  }
});
