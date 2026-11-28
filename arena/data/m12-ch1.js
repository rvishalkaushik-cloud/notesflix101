/* Revision Arena · Class XII Mathematics · Chapter 1 · Relations and Functions (rationalised syllabus: types of relations, equivalence, one-one, onto, bijective). Original examples; every count recomputed. */
NFArena.register({
  id: "m12-ch1", cls: "XII", subject: "Mathematics", unit: "Chapter", num: "1",
  title: "Relations and Functions",
  tagline: "Reflexive, symmetric and transitive relations, equivalence relations and classes, and one-one, onto and bijective functions.",
  notesLink: "../#m12-ch1",
  concepts: {
    rel: { n: "Relations as subsets of A × A", s: "rel" },
    refl: { n: "Reflexive relations", s: "rel" },
    sym: { n: "Symmetric relations", s: "rel" },
    trans: { n: "Transitive relations", s: "rel" },
    equiv: { n: "Equivalence relations and classes", s: "equiv" },
    count: { n: "Counting relations and functions", s: "equiv" },
    oneone: { n: "One-one (injective) functions", s: "func" },
    onto: { n: "Onto (surjective) functions", s: "func" },
    bij: { n: "Bijective functions", s: "func" }
  },
  overview: {
    text: "A <b>relation</b> R on a set A is any subset of A × A. We test it for three properties: <b>reflexive</b> (every a related to itself), <b>symmetric</b> (a R b ⇒ b R a) and <b>transitive</b> (a R b and b R c ⇒ a R c). If all three hold, R is an <b>equivalence relation</b>, and it splits A into disjoint <b>equivalence classes</b>. A <b>function</b> f: A → B is <b>one-one</b> if different inputs give different outputs and <b>onto</b> if every element of B is an output; both together make it <b>bijective</b>.",
    points: [
      "To prove a property, take general elements; to disprove, give <b>one counter-example</b>.",
      "Equivalence = reflexive + symmetric + transitive.",
      "One-one: f(x₁) = f(x₂) ⇒ x₁ = x₂. Onto: for every y in B, solve y = f(x) and check x is in A.",
      "Same rule, different domain or codomain can change one-one/onto (x² on ℕ vs on ℝ)."
    ],
    map: {
      center: "Relations and Functions",
      branches: [
        { t: "Relations", c: ["Empty, universal", "Reflexive", "Symmetric", "Transitive"] },
        { t: "Equivalence", c: ["All three properties", "Equivalence classes", "Partition of A"] },
        { t: "Functions", c: ["One-one", "Onto", "Bijective"] },
        { t: "Counting", c: ["2^(n²) relations", "nᵐ functions", "n! bijections"] }
      ]
    }
  },
  sections: [
    {
      id: "rel", title: "Types of relations", sub: "Reflexive, symmetric, transitive", icon: "🔗", color: "#2F6BFF",
      quick: [
        "A relation R on A is a subset of A × A; (a, b) ∈ R is written a R b.",
        "<b>Empty (void) relation</b>: R = ∅. <b>Universal relation</b>: R = A × A.",
        "<b>Reflexive</b>: (a, a) ∈ R for <b>every</b> a ∈ A.",
        "<b>Symmetric</b>: (a, b) ∈ R ⇒ (b, a) ∈ R.",
        "<b>Transitive</b>: (a, b) ∈ R and (b, c) ∈ R ⇒ (a, c) ∈ R.",
        "On a non-empty set, the empty relation is symmetric and transitive (no pair breaks the rule) but <b>not reflexive</b>; the universal relation is an equivalence relation."
      ],
      table: { cap: "Quick checks", head: ["Relation", "Reflexive", "Symmetric", "Transitive"], rows: [["a ≤ b on ℝ", "Yes", "No", "Yes"], ["Line L₁ ⊥ L₂", "No", "Yes", "No"], ["a − b even on ℤ", "Yes", "Yes", "Yes"], ["{(1, 2), (2, 1)} on {1, 2, 3}", "No", "Yes", "No"]] },
      cards: [
        { t: "Worked: why {(1, 2), (2, 1)} is not transitive", tag: "example", b: "<p>(1, 2) ∈ R and (2, 1) ∈ R, so transitivity needs (1, 1) ∈ R. It is missing: <b>not transitive</b>. It is not reflexive either, since (3, 3) is missing.</p>" },
        { t: "Proof style", tag: "hook", b: "<p><b>“Prove with letters, disprove with numbers.”</b> Use general a, b, c to show a property holds; one specific counter-example shows it fails.</p>" }
      ],
      exam: ["Write each property in symbols before testing.", "A single counter-example is enough to disprove."]
    },
    {
      id: "equiv", title: "Equivalence relations and counting", sub: "Partitions and how many", icon: "🧩", color: "#12B5A6",
      quick: [
        "<b>Equivalence relation</b>: reflexive, symmetric and transitive. Examples: congruence of triangles, a − b divisible by n on ℤ, \"has the same birthday month as\".",
        "<b>Equivalence class</b> [a] = {x ∈ A : x R a}. Classes are either equal or disjoint, and together they cover A (a <b>partition</b>).",
        "On ℤ with R = {(a, b): 3 divides a − b}, there are three classes: [0], [1], [2] (remainders 0, 1, 2).",
        "If |A| = n: number of relations on A = <b>2<sup>n²</sup></b>; reflexive relations = 2<sup>n² − n</sup>.",
        "Functions from a set of m elements to a set of n elements: <b>nᵐ</b>. One-one functions from an n-set to itself = <b>n!</b> (these are all bijections).",
        "Smallest equivalence relation on {1, 2, 3} containing (1, 2): {(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)}."
      ],
      cards: [
        { t: "Worked: counting on A = {1, 2, 3}", tag: "numerical", b: "<p>Relations: 2⁹ = <b>512</b>. Reflexive relations: 2⁶ = <b>64</b>. Bijections A → A: 3! = <b>6</b>. Equivalence relations on A: <b>5</b>.</p>" },
        { t: "Worked: classes mod 4", tag: "example", b: "<p>R on ℤ: a R b if 4 divides a − b. Classes: [0] = {…, −4, 0, 4, …}, [1], [2], [3]. <b>Four</b> disjoint classes.</p>" }
      ],
      exam: ["When proving equivalence, write three separate parts with headings.", "List equivalence classes as sets."]
    },
    {
      id: "func", title: "One-one, onto and bijective", sub: "Testing functions", icon: "🎯", color: "#FF8A1F",
      quick: [
        "<b>One-one (injective)</b>: f(x₁) = f(x₂) ⇒ x₁ = x₂ (no two inputs share an output). Graph test: every horizontal line meets the graph at most once.",
        "<b>Onto (surjective)</b>: range = codomain; for every y in the codomain there is an x in the domain with f(x) = y.",
        "<b>Bijective</b>: both one-one and onto.",
        "f: ℝ → ℝ, f(x) = 2x + 3: bijective. f(x) = x³: bijective. f(x) = x² or |x|: neither (−2 and 2 share an output; negatives are never reached).",
        "f: ℕ → ℕ, f(x) = x²: one-one but <b>not onto</b> (2 is not a square). f: ℕ → ℕ, f(n) = n + 1: one-one, not onto (1 is missed).",
        "Greatest integer function [x] on ℝ → ℝ: neither (1.2 and 1.5 both give 1; 0.5 is never an output)."
      ],
      cards: [
        { t: "Worked: proving f(x) = 3 − 4x is bijective on ℝ", tag: "example", b: "<p><b>One-one:</b> 3 − 4x₁ = 3 − 4x₂ ⇒ x₁ = x₂.</p><p><b>Onto:</b> for any y ∈ ℝ, x = (3 − y)/4 ∈ ℝ gives f(x) = y. Hence <b>bijective</b>.</p>" },
        { t: "Why domain and codomain matter", tag: "why", b: "<p>x² on ℝ → ℝ is not one-one, but on [0, ∞) → [0, ∞) it is a bijection. Always read the domain and codomain before deciding.</p>" }
      ],
      exam: ["For onto, solve y = f(x) for x and check x lies in the domain.", "Give a specific counter-example when a function fails a test."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "rel", q: "A relation on A is…", a: "Any subset of A × A." },
    { k: "Definition", c: "refl", q: "Reflexive relation?", a: "(a, a) ∈ R for every a ∈ A." },
    { k: "Definition", c: "sym", q: "Symmetric relation?", a: "(a, b) ∈ R ⇒ (b, a) ∈ R." },
    { k: "Definition", c: "trans", q: "Transitive relation?", a: "(a, b), (b, c) ∈ R ⇒ (a, c) ∈ R." },
    { k: "Fact", c: "rel", q: "Is the empty relation on a non-empty set reflexive?", a: "No (but it is symmetric and transitive)." },
    { k: "Fact", c: "rel", q: "Is the universal relation an equivalence relation?", a: "Yes." },
    { k: "Example", c: "sym", q: "\"Is perpendicular to\" on lines is…", a: "Symmetric only (not reflexive, not transitive)." },
    { k: "Example", c: "trans", q: "a ≤ b on ℝ is…", a: "Reflexive and transitive, not symmetric." },
    { k: "Definition", c: "equiv", q: "Equivalence relation?", a: "Reflexive, symmetric and transitive." },
    { k: "Fact", c: "equiv", q: "Two equivalence classes are either…", a: "Equal or disjoint." },
    { k: "Count", c: "count", q: "Number of relations on a set of n elements?", a: "2^(n²)." },
    { k: "Count", c: "count", q: "Number of functions from an m-set to an n-set?", a: "nᵐ." },
    { k: "Count", c: "count", q: "Number of bijections from a 4-set to itself?", a: "4! = 24." },
    { k: "Definition", c: "oneone", q: "One-one function?", a: "f(x₁) = f(x₂) ⇒ x₁ = x₂." },
    { k: "Definition", c: "onto", q: "Onto function?", a: "Range equals codomain." },
    { k: "Example", c: "oneone", q: "f: ℕ → ℕ, f(x) = x² is…", a: "One-one but not onto." },
    { k: "Example", c: "bij", q: "f: ℝ → ℝ, f(x) = x³ is…", a: "Bijective." },
    { k: "Test", c: "oneone", q: "Horizontal line test checks…", a: "One-one: each horizontal line meets the graph at most once." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "The class seating chart",
      text: "<p>In <b>Mr. Rao</b>'s class of 30 students, a relation R is defined: \"student a R student b if a and b sit in the same row.\" There are 5 rows of 6 students each.</p>",
      qs: [
        { q: "Show that R is an equivalence relation.", m: 3, type: "Prove", c: "equiv", hint: "Three properties.", points: [{ p: "Reflexive: every student sits in the same row as themselves", m: 1, k: ["reflexive"] }, { p: "Symmetric: if a is in b's row, b is in a's row", m: 1, k: ["symmetric"] }, { p: "Transitive: a, b same row and b, c same row ⇒ a, c same row", m: 1, k: ["transitive"] }], structure: ["Reflexive, symmetric, transitive."], model: "<p><b>Reflexive:</b> each student sits in the same row as themself.</p><p><b>Symmetric:</b> if a sits in b's row, then b sits in a's row.</p><p><b>Transitive:</b> if a and b share a row and b and c share a row, then a and c share that row. So R is an <b>equivalence relation</b>.</p>" },
        { q: "How many equivalence classes are there, and how many students are in each?", m: 1, type: "Count", c: "equiv", hint: "Rows.", points: [{ p: "5 classes (one per row), 6 students each", m: 1, k: ["5", "6"] }], structure: ["Number, size."], model: "<p><b>5</b> equivalence classes, one per row, each with <b>6</b> students.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "Locker numbers",
      text: "<p>A school gives each of its students a locker. The function f maps each student to a locker number. The school has 500 lockers and 480 students; no two students share a locker.</p>",
      qs: [
        { q: "Is f one-one? Is it onto the set of 500 lockers? Explain.", m: 2, type: "Decide", c: "oneone", hint: "Sharing; empty lockers.", points: [{ p: "One-one: no two students share a locker", m: 1, k: ["one-one", "injective"] }, { p: "Not onto: 20 lockers have no student", m: 1, k: ["not onto", "20"] }], structure: ["One-one, then onto."], model: "<p><b>One-one:</b> no two students share a locker, so different students map to different lockers.</p><p><b>Not onto:</b> 500 − 480 = 20 lockers are not assigned to anyone.</p>" },
        { q: "How many more students must join, each taking an empty locker, for f to become a bijection?", m: 1, type: "Numerical", c: "bij", hint: "Fill every locker.", points: [{ p: "20 students", m: 1, k: ["20"] }], structure: ["One number."], model: "<p><b>20</b> students: then every locker has exactly one student.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Testing a friendship rule",
      text: "<p>On the set A = {1, 2, 3, 4}, <b>Priya</b> writes R = {(1, 1), (2, 2), (3, 3), (4, 4), (1, 2), (2, 1), (2, 3), (3, 2)}.</p>",
      qs: [
        { q: "Is R reflexive and symmetric? Justify.", m: 2, type: "Test", c: "sym", hint: "Check (a, a) and reversed pairs.", points: [{ p: "Reflexive: (1,1), (2,2), (3,3), (4,4) all present", m: 1, k: ["reflexive"] }, { p: "Symmetric: (1,2)/(2,1) and (2,3)/(3,2) both present", m: 1, k: ["symmetric"] }], structure: ["Each property."], model: "<p><b>Reflexive:</b> (1, 1), (2, 2), (3, 3), (4, 4) are all in R.</p><p><b>Symmetric:</b> each pair's reverse is present: (1, 2)/(2, 1) and (2, 3)/(3, 2).</p>" },
        { q: "Is R transitive? If not, which pairs must be added to make it an equivalence relation?", m: 2, type: "Test + fix", c: "trans", hint: "(1, 2), (2, 3) ⇒ ?", points: [{ p: "Not transitive: (1, 2), (2, 3) ∈ R but (1, 3) ∉ R", m: 1, k: ["(1, 3)", "(1,3)", "not transitive"] }, { p: "Add (1, 3) and (3, 1)", m: 1, k: ["(3, 1)", "(3,1)"] }], structure: ["Counter-example, pairs to add."], model: "<p><b>Not transitive:</b> (1, 2) ∈ R and (2, 3) ∈ R but (1, 3) ∉ R.</p><p>Adding <b>(1, 3)</b> and <b>(3, 1)</b> makes R reflexive, symmetric and transitive, with classes {1, 2, 3} and {4}.</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "Remainders on the clock",
      text: "<p>A clock shop defines R on ℤ by a R b if 12 divides a − b (so 15 o'clock and 3 o'clock are \"the same\").</p>",
      qs: [
        { q: "Prove that R is an equivalence relation.", m: 3, type: "Prove", c: "equiv", hint: "Use a − b = 12k.", points: [{ p: "Reflexive: a − a = 0 = 12 × 0", m: 1, k: ["0", "reflexive"] }, { p: "Symmetric: a − b = 12k ⇒ b − a = 12(−k)", m: 1, k: ["−k", "-k", "symmetric"] }, { p: "Transitive: a − b = 12k, b − c = 12m ⇒ a − c = 12(k + m)", m: 1, k: ["k + m", "k+m", "transitive"] }], structure: ["Three properties with algebra."], model: "<p><b>Reflexive:</b> a − a = 0 = 12 × 0, so a R a.</p><p><b>Symmetric:</b> a − b = 12k ⇒ b − a = 12(−k), so b R a.</p><p><b>Transitive:</b> a − b = 12k and b − c = 12m ⇒ a − c = 12(k + m), so a R c. Hence R is an <b>equivalence relation</b>.</p>" },
        { q: "How many equivalence classes are there? Write the class of 5.", m: 1, type: "Classes", c: "equiv", hint: "Remainders 0 to 11.", points: [{ p: "12 classes; [5] = {…, −7, 5, 17, 29, …}", m: 1, k: ["12", "17", "-7", "−7"] }], structure: ["Count, one class."], model: "<p><b>12</b> classes (remainders 0 to 11). [5] = {…, −19, −7, 5, 17, 29, …}.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "The ticket-pricing formula",
      text: "<p>A theme park sets the ticket price (in ₹) for a group of x people as f(x) = 50x + 200, where x ∈ ℕ. An analyst also studies g: ℝ → ℝ, g(x) = 50x + 200, and h: ℝ → ℝ, h(x) = (x − 4)².</p>",
      qs: [
        { q: "Is f: ℕ → ℕ one-one? Is it onto? Justify.", m: 2, type: "Test", c: "onto", hint: "Is 100 a price?", points: [{ p: "One-one: 50x₁ + 200 = 50x₂ + 200 ⇒ x₁ = x₂", m: 1, k: ["one-one", "x₁ = x₂", "x1 = x2"] }, { p: "Not onto: e.g. 100 (or any value < 250) is never a price", m: 1, k: ["not onto", "100", "250"] }], structure: ["One-one, onto with counter-example."], model: "<p><b>One-one:</b> 50x₁ + 200 = 50x₂ + 200 ⇒ x₁ = x₂.</p><p><b>Not onto:</b> the smallest price is f(1) = 250, so, for example, 100 ∈ ℕ is never an output.</p>" },
        { q: "Show that g is bijective, but h is neither one-one nor onto.", m: 3, type: "Prove", c: "bij", hint: "Solve for x; find counter-examples.", points: [{ p: "g one-one (same algebra) and onto: x = (y − 200)/50 ∈ ℝ", m: 1, k: ["(y − 200)/50", "(y-200)/50"] }, { p: "h not one-one: h(2) = h(6) = 4", m: 1, k: ["h(2)", "h(6)", "4"] }, { p: "h not onto: negative numbers (e.g. −1) are never outputs", m: 1, k: ["negative", "−1", "-1"] }], structure: ["g, then h."], model: "<p><b>g:</b> one-one as above; for any y ∈ ℝ, x = (y − 200)/50 ∈ ℝ gives g(x) = y, so g is onto: <b>bijective</b>.</p><p><b>h:</b> h(2) = 4 = h(6), so it is <b>not one-one</b>; (x − 4)² ≥ 0, so −1 is never an output: <b>not onto</b>.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "refl", q: "Which relation on A = {1, 2, 3} is reflexive?", o: ["{(1, 1), (2, 2), (3, 3), (1, 2)}", "{(1, 1), (2, 2)}", "{(1, 2), (2, 1)}", "∅"], a: 0, hint: "All (a, a).", why: "Only the first contains all of (1, 1), (2, 2), (3, 3)." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "count", q: "The number of relations on a set with 2 elements is:", o: ["16", "4", "8", "2"], a: 0, hint: "2^(n²).", why: "2⁴ = <b>16</b>." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "oneone", q: "f: ℝ → ℝ, f(x) = x² is:", o: ["Neither one-one nor onto", "One-one only", "Onto only", "Bijective"], a: 0, hint: "f(−1) = f(1).", why: "<b>Neither</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "sym", q: "R = {(a, b): a ⊥ b} on the set of lines in a plane is:", o: ["Symmetric only", "Equivalence", "Reflexive only", "Transitive only"], a: 0, hint: "A line is not ⊥ itself.", why: "<b>Symmetric only</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "count", q: "The number of bijections from {1, 2, 3, 4} to itself is:", o: ["24", "16", "256", "4"], a: 0, hint: "n!.", why: "4! = <b>24</b>." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "count", q: "The number of reflexive relations on a set with 3 elements is:", o: ["64", "512", "8", "27"], a: 0, hint: "2^(n² − n).", why: "2⁶ = <b>64</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "onto", q: "f: ℕ → ℕ, f(n) = n + 1 is:", o: ["One-one but not onto", "Onto but not one-one", "Bijective", "Neither"], a: 0, hint: "Is 1 reached?", why: "1 has no pre-image: <b>one-one, not onto</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "equiv", q: "On ℤ, R = {(a, b): 5 divides a − b} has how many equivalence classes?", o: ["5", "1", "Infinitely many", "10"], a: 0, hint: "Remainders.", why: "Remainders 0–4: <b>5</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "rel", q: "The empty relation on A = {1, 2} is transitive.", r: "No pairs in it can violate the transitive condition.", a: 0, hint: "Vacuous truth.", why: "Both true, and R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "oneone", q: "f: ℕ → ℕ, f(x) = 2x is one-one.", r: "Every natural number is even.", a: 2, hint: "Is R true?", why: "A is true; R is false." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "bij", q: "f: ℝ → ℝ, f(x) = x³ is bijective.", r: "Every real number has exactly one real cube root.", a: 0, hint: "Solve y = x³.", why: "Both true, and R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "trans", q: "The relation \"≤\" on ℝ is symmetric.", a: false, hint: "2 ≤ 3 but 3 ≤ 2?", why: "False." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "equiv", q: "Congruence of triangles is an equivalence relation.", a: true, hint: "Three properties.", why: "True." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "onto", q: "The greatest integer function f: ℝ → ℝ, f(x) = [x], is onto.", a: false, hint: "Is 0.5 an output?", why: "False: outputs are integers only." },
    { id: "q15", t: "match", d: "E", m: 4, c: "rel", q: "Match the relation (on a suitable set) with its type.", pairs: [["a ≤ b on ℝ", "Reflexive and transitive only"], ["L₁ ⊥ L₂", "Symmetric only"], ["3 divides a − b on ℤ", "Equivalence"], ["A × A", "Universal relation"]], hint: "Test each.", why: "Each relation has one type." },
    { id: "q16", t: "match", d: "M", m: 4, c: "bij", q: "Match the function with its type.", pairs: [["f: ℝ → ℝ, f(x) = 2x + 3", "Bijective"], ["f: ℕ → ℕ, f(x) = x²", "One-one, not onto"], ["f: ℝ → ℝ, f(x) = |x|", "Neither one-one nor onto"], ["f: ℝ → [0, ∞), f(x) = x²", "Onto, not one-one"]], hint: "Check domain and codomain.", why: "Each function has one type." },
    { id: "q17", t: "match", d: "M", m: 4, c: "count", q: "Match the count for A with 3 elements and B with 2 elements.", pairs: [["Relations on A", "512"], ["Functions A → B", "8"], ["Functions B → A", "9"], ["Bijections A → A", "6"]], hint: "2⁹, 2³, 3², 3!.", why: "Each count follows from a formula." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "equiv", q: "A relation that is reflexive, symmetric and transitive is called an ______ relation.", acc: ["equivalence"], hint: "e…", why: "<b>Equivalence</b>." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "onto", q: "A function whose range equals its codomain is called ______.", acc: ["onto", "surjective"], hint: "o…", why: "<b>Onto</b>." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "count", q: "The number of functions from a 3-element set to a 4-element set is ______.", acc: ["64"], hint: "4³.", why: "<b>64</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "equiv", q: "The number of equivalence relations on {1, 2, 3} is ______.", acc: ["5", "five"], hint: "List the partitions.", why: "<b>5</b> partitions." },
    { id: "q22", t: "short", d: "E", m: 1, c: "refl", q: "Is the relation R = {(1, 1), (2, 2)} on A = {1, 2, 3} reflexive? (yes/no)", acc: ["no"], hint: "(3, 3)?", why: "<b>No</b>: (3, 3) is missing." },
    { id: "q23", t: "short", d: "M", m: 1, c: "oneone", q: "Give a counter-example value showing f(x) = x² on ℝ is not one-one: f(2) = f(?)", acc: ["-2", "−2"], hint: "Opposite number.", why: "f(2) = f(<b>−2</b>) = 4." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "equiv", q: "Show that R = {(a, b): a − b is even} on ℤ is an equivalence relation.", hint: "a − b = 2k.", why: "", points: [{ p: "Reflexive: a − a = 0, even", m: 1, k: ["0", "reflexive"] }, { p: "Symmetric: a − b = 2k ⇒ b − a = −2k, even", m: 1, k: ["−2k", "-2k", "symmetric"] }, { p: "Transitive: a − b = 2k, b − c = 2m ⇒ a − c = 2(k + m), even", m: 1, k: ["2(k + m)", "2(k+m)", "transitive"] }], model: "<p><b>Reflexive:</b> a − a = 0, which is even.</p><p><b>Symmetric:</b> a − b = 2k ⇒ b − a = 2(−k), even.</p><p><b>Transitive:</b> a − b = 2k and b − c = 2m ⇒ a − c = 2(k + m), even. So R is an <b>equivalence relation</b> (classes: even and odd integers).</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "bij", q: "Show that f: ℝ → ℝ, f(x) = 5 − 2x is bijective.", hint: "Solve for x.", why: "", points: [{ p: "One-one: 5 − 2x₁ = 5 − 2x₂ ⇒ x₁ = x₂", m: 1, k: ["x₁ = x₂", "x1 = x2"] }, { p: "Onto: x = (5 − y)/2 ∈ ℝ", m: 1, k: ["(5 − y)/2", "(5-y)/2"] }, { p: "f(x) = y, so bijective", m: 1, k: ["bijective"] }], model: "<p><b>One-one:</b> 5 − 2x₁ = 5 − 2x₂ ⇒ x₁ = x₂.</p><p><b>Onto:</b> for any y ∈ ℝ, take x = (5 − y)/2 ∈ ℝ; then f(x) = 5 − (5 − y) = y.</p><p>Hence f is <b>bijective</b>.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "rel", q: "Check whether R = {(a, b): b = a + 1} on A = {1, 2, 3, 4, 5, 6} is reflexive, symmetric or transitive.", hint: "List R first.", why: "", points: [{ p: "R = {(1, 2), (2, 3), (3, 4), (4, 5), (5, 6)}", m: 1, k: ["(1, 2)", "(1,2)"] }, { p: "Not reflexive: (1, 1) ∉ R", m: 1, k: ["not reflexive"] }, { p: "Not symmetric: (1, 2) ∈ R but (2, 1) ∉ R", m: 1, k: ["not symmetric"] }, { p: "Not transitive: (1, 2), (2, 3) ∈ R but (1, 3) ∉ R", m: 1, k: ["not transitive"] }], model: "<p>R = {(1, 2), (2, 3), (3, 4), (4, 5), (5, 6)}.</p><p><b>Not reflexive:</b> (1, 1) ∉ R. <b>Not symmetric:</b> (1, 2) ∈ R, (2, 1) ∉ R. <b>Not transitive:</b> (1, 2), (2, 3) ∈ R but (1, 3) ∉ R.</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "onto", q: "Let f: ℕ → ℕ be defined by f(n) = (n + 1)/2 if n is odd and n/2 if n is even. Show that f is onto but not one-one.", hint: "f(1) = f(2).", why: "", points: [{ p: "f(1) = 1 and f(2) = 1", m: 1, k: ["f(1)", "f(2)"] }, { p: "So not one-one", m: 1, k: ["not one-one"] }, { p: "For any m ∈ ℕ, f(2m) = m", m: 1, k: ["2m"] }, { p: "So every m has a pre-image: onto", m: 1, k: ["onto"] }], model: "<p>f(1) = (1 + 1)/2 = 1 and f(2) = 2/2 = 1: two inputs share an output, so f is <b>not one-one</b>.</p><p>For any m ∈ ℕ, 2m is even and f(2m) = m, so every m has a pre-image: f is <b>onto</b>.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "equiv", q: "Let A = {1, 2, 3, …, 9} and R be the relation on A × A defined by (a, b) R (c, d) if a + d = b + c. Prove that R is an equivalence relation and find the equivalence class of (2, 5).", hint: "a + d = b + c ⇔ a − b = c − d.", why: "", points: [{ p: "Reflexive: a + b = b + a", m: 1, k: ["reflexive"] }, { p: "Symmetric: a + d = b + c ⇒ c + b = d + a", m: 1, k: ["symmetric"] }, { p: "Transitive: a + d = b + c and c + f = d + e ⇒ a + f = b + e", m: 1, k: ["a + f = b + e", "transitive"] }, { p: "Class of (2, 5): pairs with a − b = −3, i.e. b = a + 3", m: 1, k: ["a − b = −3", "b = a + 3", "-3"] }, { p: "Listing starts (1, 4), (2, 5), (3, 6)", m: 1, k: ["(1, 4)", "(1,4)"] }, { p: "…, (4, 7), (5, 8), (6, 9): six pairs", m: 1, k: ["(6, 9)", "(6,9)", "six"] }], model: "<p><b>Reflexive:</b> a + b = b + a, so (a, b) R (a, b).</p><p><b>Symmetric:</b> a + d = b + c ⇒ c + b = d + a, so (c, d) R (a, b).</p><p><b>Transitive:</b> a + d = b + c and c + f = d + e. Adding: a + d + c + f = b + c + d + e ⇒ a + f = b + e, so (a, b) R (e, f).</p><p>Class of (2, 5): pairs with a − b = 2 − 5 = −3, i.e. b = a + 3: <b>{(1, 4), (2, 5), (3, 6), (4, 7), (5, 8), (6, 9)}</b>.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "oneone", q: "A college gives every student a unique roll number, but some numbers are unused. The function \"student → roll number\" is:", o: ["One-one but not onto", "Onto but not one-one", "Bijective", "Neither"], a: 0, hint: "Unique, but gaps.", why: "<b>One-one, not onto</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "equiv", q: "In a library, books are related if they are on the same shelf. Each shelf holds books. The shelves are best described as the relation's:", o: ["Equivalence classes", "Codomain", "Pre-images", "Inverse"], a: 0, hint: "Partition.", why: "Shelves partition the books: <b>equivalence classes</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "refl", passage: "On a set of people, R = {(a, b): a and b have the same height (in cm)}.", q: "R is:", o: ["An equivalence relation", "Only reflexive", "Only symmetric", "Not reflexive"], a: 0, hint: "\"Same as\" relations.", why: "\"Same height\" is <b>reflexive, symmetric and transitive</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "onto", passage: "Every seat in a cinema hall is booked, and some people bought two seats.", q: "The function \"seat → buyer\" from seats to buyers is:", o: ["Onto but not one-one", "One-one but not onto", "Bijective", "Neither"], a: 0, hint: "Every buyer has a seat; two seats share a buyer.", why: "<b>Onto, not one-one</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "count", passage: "A quiz assigns each of 4 questions one of 3 difficulty levels.", q: "Number of possible assignments:", o: ["81", "64", "12", "7"], a: 0, hint: "3⁴.", why: "3⁴ = <b>81</b> functions." }
  ],
  find: {
    mcq: [
      { s: "Every element is related to itself.", o: ["Reflexive", "Symmetric", "Transitive", "Onto"], a: 0, c: "refl", d: "E", why: "<b>Reflexive</b>." },
      { s: "If a is a cousin of b, then b is a cousin of a.", o: ["Symmetric", "Reflexive", "Transitive", "Bijective"], a: 0, c: "sym", d: "E", why: "<b>Symmetric</b>." },
      { s: "If a > b and b > c, then a > c.", o: ["Transitive", "Symmetric", "Reflexive", "One-one"], a: 0, c: "trans", d: "E", why: "<b>Transitive</b>." },
      { s: "R = A × A.", o: ["Universal relation", "Empty relation", "Identity relation", "Function"], a: 0, c: "rel", d: "E", why: "<b>Universal</b>." },
      { s: "R = ∅ on {1, 2}.", o: ["Empty relation", "Universal relation", "Equivalence relation", "Bijection"], a: 0, c: "rel", d: "M", why: "<b>Empty</b>." },
      { s: "Students related if they were born in the same month.", o: ["Equivalence relation", "Only symmetric", "Only transitive", "Not reflexive"], a: 0, c: "equiv", d: "M", why: "<b>Equivalence</b>." },
      { s: "{…, −3, 0, 3, 6, …} under \"3 divides a − b\".", o: ["Equivalence class [0]", "Codomain", "Range", "Universal relation"], a: 0, c: "equiv", d: "M", why: "<b>Class [0]</b>." },
      { s: "2^(n²).", o: ["Number of relations on an n-set", "Number of functions", "Number of bijections", "Number of classes"], a: 0, c: "count", d: "M", why: "<b>Relations</b>." },
      { s: "n! for a set to itself.", o: ["Number of bijections", "Number of relations", "Number of onto maps to a 2-set", "Number of classes"], a: 0, c: "count", d: "C", why: "<b>Bijections</b>." },
      { s: "No two inputs give the same output.", o: ["One-one", "Onto", "Reflexive", "Constant"], a: 0, c: "oneone", d: "E", why: "<b>One-one</b>." },
      { s: "Every element of the codomain is used.", o: ["Onto", "One-one", "Symmetric", "Transitive"], a: 0, c: "onto", d: "E", why: "<b>Onto</b>." },
      { s: "One-one and onto together.", o: ["Bijective", "Equivalence", "Universal", "Reflexive"], a: 0, c: "bij", d: "E", why: "<b>Bijective</b>." },
      { s: "f: ℕ → ℕ, f(x) = 3x: 1 is never an output.", o: ["Not onto", "Not one-one", "Bijective", "Not a function"], a: 0, c: "onto", d: "M", why: "<b>Not onto</b>." },
      { s: "f(−3) = f(3) for f(x) = x².", o: ["Not one-one", "Not onto", "Bijective", "Reflexive"], a: 0, c: "oneone", d: "M", why: "<b>Not one-one</b>." },
      { s: "Horizontal line meets the graph twice.", o: ["Not one-one", "Onto", "Bijective", "Symmetric"], a: 0, c: "oneone", d: "C", why: "Fails the horizontal line test: <b>not one-one</b>." },
      { s: "f: [0, ∞) → [0, ∞), f(x) = x².", o: ["Bijective", "Not one-one", "Not onto", "Neither"], a: 0, c: "bij", d: "C", why: "Restricted domain: <b>bijective</b>." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["(a, a) ∈ R for all a.", "Reflexive", "refl"], ["(a, b) ⇒ (b, a).", "Symmetric", "sym"], ["(a, b), (b, c) ⇒ (a, c).", "Transitive", "trans"], ["Splits a set into disjoint parts.", "Equivalence relation", "equiv"], ["f(x₁) = f(x₂) ⇒ x₁ = x₂.", "One-one", "oneone"], ["Range = codomain.", "Onto", "onto"]] }
    ],
    wrong: [
      { stmts: ["a ≤ b on ℝ is reflexive.", "a ≤ b on ℝ is transitive.", "a ≤ b on ℝ is symmetric.", "a ≤ b on ℝ is not an equivalence relation."], a: 2, c: "sym", why: "2 ≤ 3 but 3 ≰ 2: <b>not symmetric</b>." },
      { stmts: ["x³ on ℝ is bijective.", "2x + 1 on ℝ is bijective.", "x² on ℝ is one-one.", "|x| on ℝ is not onto."], a: 2, c: "oneone", why: "x² is <b>not</b> one-one on ℝ." },
      { stmts: ["Equivalence classes are disjoint or equal.", "Every element lies in some class.", "Two classes can overlap partly.", "Classes form a partition."], a: 2, c: "equiv", why: "Classes <b>never</b> overlap partly." }
    ],
    para: [
      { target: "Equivalence relation", c: "equiv", sents: ["A sports club has 60 members.", "Two members are \"linked\" if they play in the same team, and every member plays in exactly one team.", "The club meets on Sundays.", "It has a new coach."], a: 1, why: "Same team: an <b>equivalence relation</b>." },
      { target: "Not onto", c: "onto", sents: ["A hotel has 40 rooms.", "Each of 35 guests is given a different room.", "Breakfast is served at 8 am.", "The hotel has a garden."], a: 1, why: "5 rooms unused: <b>not onto</b>." },
      { target: "Not one-one", c: "oneone", sents: ["A teacher gives grades to 30 students.", "Several students receive the same grade A.", "The grades were posted online.", "Parents were informed."], a: 1, why: "Same output for different students: <b>not one-one</b>." }
    ],
    explain: [
      { s: "\"Is a friend of\" (with everyone counted as their own friend) may still fail to be an equivalence relation.", o: ["It may not be transitive", "It is never symmetric", "It is never reflexive", "It is a function"], a: 0, c: "trans", why: "The clue is <i>still fail</i>: a friend of a friend need not be a friend: <b>transitivity</b> fails." },
      { s: "f: ℝ → ℝ, f(x) = x² + 1 is not onto.", o: ["Outputs are always ≥ 1", "f(1) = f(−1)", "Domain is ℕ", "It is linear"], a: 0, c: "onto", why: "Values below 1 are <b>never reached</b>." },
      { s: "f: ℕ → ℕ, f(x) = x² is one-one, though x² on ℝ is not.", o: ["ℕ has no negative numbers", "ℕ is finite", "x² is linear on ℕ", "Codomain changed to ℝ"], a: 0, c: "oneone", why: "No −x in ℕ, so <b>no clashes</b>." },
      { s: "The number of relations on {a, b} is 16.", o: ["2^(2²) subsets of A × A", "2! arrangements", "2² functions", "4 classes"], a: 0, c: "count", why: "A × A has 4 pairs, so <b>2⁴</b> subsets." }
    ]
  }
});
