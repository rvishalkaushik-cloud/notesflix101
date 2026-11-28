/* Revision Arena · Class XII Mathematics · Chapter 7 · Integrals (rationalised: no definite integral as limit of a sum). Original examples; every answer checked by differentiation. */
NFArena.register({
  id: "m12-ch7", cls: "XII", subject: "Mathematics", unit: "Chapter", num: "7",
  title: "Integrals",
  tagline: "Standard integrals, substitution, special integrals, partial fractions, integration by parts, definite integrals and their properties.",
  notesLink: "../#m12-ch7",
  concepts: {
    basic: { n: "Standard integrals", s: "basics" },
    subst: { n: "Integration by substitution", s: "basics" },
    trig4: { n: "∫tan, cot, sec, cosec", s: "basics" },
    special: { n: "Special integrals (x² ± a²)", s: "special" },
    square: { n: "Completing the square", s: "special" },
    partial: { n: "Partial fractions", s: "special" },
    parts: { n: "Integration by parts", s: "parts" },
    exf: { n: "∫eˣ[f(x) + f′(x)] dx", s: "parts" },
    ftc: { n: "Fundamental theorem and evaluation", s: "definite" },
    props: { n: "Properties of definite integrals", s: "definite" }
  },
  overview: {
    text: "Integration is the <b>reverse of differentiation</b>: ∫f(x) dx = F(x) + C where F′(x) = f(x). We learn standard results, then techniques: <b>substitution</b>, <b>special integrals</b>, <b>partial fractions</b> and <b>integration by parts</b>. A <b>definite integral</b> ∫ₐᵇ f(x) dx = F(b) − F(a) gives a number, and its <b>properties</b> make many hard-looking integrals easy.",
    points: [
      "Always add + C to indefinite integrals.",
      "Check any answer by differentiating it.",
      "By parts: ∫u v dx = u∫v dx − ∫(u′ ∫v dx) dx; choose u by <b>ILATE</b>.",
      "∫₀ᵃ f(x) dx = ∫₀ᵃ f(a − x) dx; ∫₋ₐᵃ f = 0 if f is odd, 2∫₀ᵃ f if f is even."
    ],
    map: {
      center: "Integrals",
      branches: [
        { t: "Basics", c: ["Standard table", "Substitution", "∫tan, cot, sec, cosec"] },
        { t: "Special forms", c: ["1/(x² ± a²)", "1/√(a² − x²)", "Completing square", "Partial fractions"] },
        { t: "By parts", c: ["ILATE", "x eˣ, log x", "eˣ(f + f′)"] },
        { t: "Definite", c: ["F(b) − F(a)", "a − x property", "Odd/even", "Splitting at kinks"] }
      ]
    }
  },
  sections: [
    {
      id: "basics", title: "Standard integrals and substitution", sub: "Reverse differentiation", icon: "∫", color: "#2F6BFF",
      quick: [
        "∫xⁿ dx = xⁿ⁺¹/(n + 1) + C (n ≠ −1); ∫(1/x) dx = log|x| + C; ∫eˣ dx = eˣ + C; ∫aˣ dx = aˣ/log a + C.",
        "∫sin x = −cos x; ∫cos x = sin x; ∫sec²x = tan x; ∫cosec²x = −cot x; ∫sec x tan x = sec x; ∫cosec x cot x = −cosec x.",
        "∫tan x dx = log|sec x| + C; ∫cot x dx = log|sin x| + C; ∫sec x dx = log|sec x + tan x| + C; ∫cosec x dx = log|cosec x − cot x| + C.",
        "<b>Substitution</b>: if the integrand has g(x) and g′(x), put t = g(x). ∫2x cos(x²) dx = sin(x²) + C.",
        "∫f′(x)/f(x) dx = log|f(x)| + C. E.g. ∫eˣ/(1 + eˣ) dx = log(1 + eˣ) + C.",
        "∫(log x)/x dx = (log x)²/2 + C (put t = log x)."
      ],
      cards: [
        { t: "Worked: substitution", tag: "numerical", b: "<p>∫sin³x cos x dx: put t = sin x, dt = cos x dx ⇒ ∫t³ dt = t⁴/4 + C = <b>sin⁴x/4 + C</b>.</p>" },
        { t: "Check by differentiating", tag: "hook", b: "<p><b>“Differentiate to verify.”</b> d/dx[log|sec x|] = sec x tan x/sec x = tan x ✓.</p>" }
      ],
      exam: ["Write the substitution and dt clearly.", "Return to x at the end."]
    },
    {
      id: "special", title: "Special integrals and partial fractions", sub: "Recognising the shape", icon: "🧩", color: "#12B5A6",
      quick: [
        "∫dx/(x² + a²) = (1/a) tan⁻¹(x/a) + C.",
        "∫dx/(x² − a²) = (1/2a) log|(x − a)/(x + a)| + C; ∫dx/(a² − x²) = (1/2a) log|(a + x)/(a − x)| + C.",
        "∫dx/√(a² − x²) = sin⁻¹(x/a) + C; ∫dx/√(x² + a²) = log|x + √(x² + a²)| + C; ∫dx/√(x² − a²) = log|x + √(x² − a²)| + C.",
        "<b>Completing the square</b> for ax² + bx + c: x² + 4x + 8 = (x + 2)² + 4, so ∫dx/(x² + 4x + 8) = ½ tan⁻¹((x + 2)/2) + C.",
        "<b>Partial fractions</b> for a proper rational function with factorised denominator: 1/((x − 1)(x + 2)) = (1/3)/(x − 1) − (1/3)/(x + 2).",
        "If the degree of the numerator ≥ degree of the denominator, divide first."
      ],
      cards: [
        { t: "Worked: partial fractions", tag: "numerical", b: "<p>∫dx/((x − 1)(x + 2)) = (1/3) log|x − 1| − (1/3) log|x + 2| + C = <b>(1/3) log|(x − 1)/(x + 2)| + C</b>.</p>" },
        { t: "Worked: a = 3", tag: "numerical", b: "<p>∫dx/(x² + 9) = <b>(1/3) tan⁻¹(x/3) + C</b>.</p>" }
      ],
      exam: ["Write a² clearly (e.g. a = 3).", "Find A, B by substituting convenient x values."]
    },
    {
      id: "parts", title: "Integration by parts", sub: "Products of two functions", icon: "✂️", color: "#FF8A1F",
      quick: [
        "<b>∫u v dx = u ∫v dx − ∫(u′ ∫v dx) dx</b>.",
        "Choose u (the first function) by <b>ILATE</b>: Inverse trig, Logarithmic, Algebraic, Trigonometric, Exponential.",
        "∫x eˣ dx = eˣ(x − 1) + C; ∫x sin x dx = −x cos x + sin x + C.",
        "∫log x dx = x log x − x + C (take 1 as the second function).",
        "∫tan⁻¹x dx = x tan⁻¹x − ½ log(1 + x²) + C.",
        "<b>∫eˣ[f(x) + f′(x)] dx = eˣ f(x) + C</b>: ∫eˣ(sin x + cos x) dx = eˣ sin x + C."
      ],
      cards: [
        { t: "Worked: ∫x² eˣ dx", tag: "numerical", b: "<p>Parts twice: x² eˣ − ∫2x eˣ dx = x² eˣ − 2eˣ(x − 1) + C = <b>eˣ(x² − 2x + 2) + C</b>.</p>" },
        { t: "ILATE hook", tag: "hook", b: "<p><b>“I Love All Tasty Eats.”</b> The earlier letter becomes u.</p>" }
      ],
      exam: ["State which function is u.", "For eˣ(f + f′), identify f first."]
    },
    {
      id: "definite", title: "Definite integrals and properties", sub: "From area to a number", icon: "📏", color: "#7B4DFF",
      quick: [
        "<b>Second fundamental theorem</b>: ∫ₐᵇ f(x) dx = F(b) − F(a), no + C needed.",
        "∫₀¹ x² dx = 1/3; ∫₀^π sin x dx = 2; ∫₁² (1/x) dx = log 2; ∫₀¹ x eˣ dx = 1.",
        "Properties: ∫ₐᵇ f = −∫ᵇₐ f; ∫ₐᵇ f = ∫ₐᶜ f + ∫ᶜᵇ f (split at kinks like |x|).",
        "<b>∫₀ᵃ f(x) dx = ∫₀ᵃ f(a − x) dx</b>: gives ∫₀^(π/2) sinⁿx/(sinⁿx + cosⁿx) dx = π/4.",
        "∫₋ₐᵃ f(x) dx = 0 if f is <b>odd</b>; = 2∫₀ᵃ f(x) dx if f is <b>even</b>. ∫₋₁¹ x³ dx = 0; ∫₋₂² |x| dx = 4.",
        "∫₀^(2a) f(x) dx = 2∫₀ᵃ f(x) dx if f(2a − x) = f(x), and 0 if f(2a − x) = −f(x)."
      ],
      cards: [
        { t: "Worked: the a − x trick", tag: "numerical", b: "<p>I = ∫₀^(π/2) √sin x/(√sin x + √cos x) dx. Replace x by π/2 − x: I = ∫₀^(π/2) √cos x/(√cos x + √sin x) dx. Add: 2I = ∫₀^(π/2) 1 dx = π/2 ⇒ <b>I = π/4</b>.</p>" }
      ],
      exam: ["Write limits on every line of a definite integral.", "Mention odd/even when using that property."]
    }
  ],
  flashcards: [
    { k: "Formula", c: "basic", q: "∫xⁿ dx?", a: "xⁿ⁺¹/(n + 1) + C, n ≠ −1." },
    { k: "Formula", c: "basic", q: "∫aˣ dx?", a: "aˣ/log a + C." },
    { k: "Formula", c: "trig4", q: "∫tan x dx?", a: "log|sec x| + C." },
    { k: "Formula", c: "trig4", q: "∫sec x dx?", a: "log|sec x + tan x| + C." },
    { k: "Rule", c: "subst", q: "∫f′(x)/f(x) dx?", a: "log|f(x)| + C." },
    { k: "Example", c: "subst", q: "∫2x cos(x²) dx?", a: "sin(x²) + C." },
    { k: "Formula", c: "special", q: "∫dx/(x² + a²)?", a: "(1/a) tan⁻¹(x/a) + C." },
    { k: "Formula", c: "special", q: "∫dx/√(a² − x²)?", a: "sin⁻¹(x/a) + C." },
    { k: "Formula", c: "special", q: "∫dx/(x² − a²)?", a: "(1/2a) log|(x − a)/(x + a)| + C." },
    { k: "Method", c: "square", q: "x² + 4x + 8 completed square?", a: "(x + 2)² + 4." },
    { k: "Method", c: "partial", q: "1/((x − 1)(x + 2)) in partial fractions?", a: "(1/3)/(x − 1) − (1/3)/(x + 2)." },
    { k: "Rule", c: "parts", q: "Integration by parts formula?", a: "∫u v = u∫v − ∫(u′∫v)." },
    { k: "Rule", c: "parts", q: "ILATE stands for?", a: "Inverse trig, Log, Algebraic, Trig, Exponential." },
    { k: "Example", c: "parts", q: "∫log x dx?", a: "x log x − x + C." },
    { k: "Formula", c: "exf", q: "∫eˣ[f(x) + f′(x)] dx?", a: "eˣ f(x) + C." },
    { k: "Theorem", c: "ftc", q: "∫ₐᵇ f(x) dx = ?", a: "F(b) − F(a)." },
    { k: "Property", c: "props", q: "∫₀ᵃ f(x) dx equals…", a: "∫₀ᵃ f(a − x) dx." },
    { k: "Property", c: "props", q: "∫₋ₐᵃ f(x) dx for odd f?", a: "0." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Water flowing into a tank",
      text: "<p>Water flows into a tank at a rate of r(t) = 3t² + 2t litres per minute. At t = 0 the tank holds 5 litres.</p>",
      qs: [
        { q: "Find the volume V(t) in the tank at time t.", m: 2, type: "Integrate", c: "basic", hint: "V = ∫r dt + C.", points: [{ p: "V = t³ + t² + C", m: 1, k: ["t³ + t²", "t^3 + t^2"] }, { p: "V(0) = 5 ⇒ C = 5 ⇒ V = t³ + t² + 5", m: 1, k: ["+ 5", "c = 5"] }], structure: ["Integrate, find C."], model: "<p>V = ∫(3t² + 2t) dt = t³ + t² + C. V(0) = 5 ⇒ C = 5. <b>V(t) = t³ + t² + 5</b>.</p>" },
        { q: "How much water flows in between t = 1 and t = 2?", m: 1, type: "Definite", c: "ftc", hint: "∫₁².", points: [{ p: "[t³ + t²]₁² = 12 − 2 = 10 litres", m: 1, k: ["10"] }], structure: ["One evaluation."], model: "<p>∫₁² (3t² + 2t) dt = [t³ + t²]₁² = (8 + 4) − (1 + 1) = <b>10 litres</b>.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "Spot the substitution",
      text: "<p><b>Kabir</b> must integrate ∫eˣ/(1 + eˣ) dx and ∫(log x)/x dx in a timed quiz.</p>",
      qs: [
        { q: "Integrate both, naming the substitution used.", m: 2, type: "Substitution", c: "subst", hint: "t = 1 + eˣ; t = log x.", points: [{ p: "t = 1 + eˣ ⇒ log(1 + eˣ) + C", m: 1, k: ["log(1 + eˣ)", "log(1+e^x)"] }, { p: "t = log x ⇒ (log x)²/2 + C", m: 1, k: ["(log x)²/2", "(log x)^2/2"] }], structure: ["Each integral."], model: "<p>(i) t = 1 + eˣ, dt = eˣ dx ⇒ ∫dt/t = <b>log(1 + eˣ) + C</b>.</p><p>(ii) t = log x, dt = dx/x ⇒ ∫t dt = <b>(log x)²/2 + C</b>.</p>" },
        { q: "Check the first answer by differentiation.", m: 1, type: "Verify", c: "subst", hint: "d/dx log(1 + eˣ).", points: [{ p: "d/dx log(1 + eˣ) = eˣ/(1 + eˣ) ✓", m: 1, k: ["eˣ/(1 + eˣ)", "e^x/(1+e^x)"] }], structure: ["One line."], model: "<p>d/dx log(1 + eˣ) = eˣ/(1 + eˣ) ✓.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Two rational functions",
      text: "<p>An engineering student meets ∫dx/(x² + 4x + 8) and ∫dx/((x − 1)(x + 2)) in a circuit formula.</p>",
      qs: [
        { q: "Evaluate ∫dx/(x² + 4x + 8).", m: 2, type: "Complete the square", c: "square", hint: "(x + 2)² + 2².", points: [{ p: "x² + 4x + 8 = (x + 2)² + 4", m: 1, k: ["(x + 2)² + 4", "(x+2)^2+4"] }, { p: "= ½ tan⁻¹((x + 2)/2) + C", m: 1, k: ["½ tan⁻¹", "1/2 tan"] }], structure: ["Square, formula."], model: "<p>x² + 4x + 8 = (x + 2)² + 2². So ∫dx/((x + 2)² + 2²) = <b>½ tan⁻¹((x + 2)/2) + C</b>.</p>" },
        { q: "Evaluate ∫dx/((x − 1)(x + 2)) by partial fractions.", m: 2, type: "Partial fractions", c: "partial", hint: "A = 1/3, B = −1/3.", points: [{ p: "1 = A(x + 2) + B(x − 1): A = 1/3, B = −1/3", m: 1, k: ["1/3", "−1/3", "-1/3"] }, { p: "(1/3) log|(x − 1)/(x + 2)| + C", m: 1, k: ["(1/3) log"] }], structure: ["Constants, integral."], model: "<p>1/((x − 1)(x + 2)) = A/(x − 1) + B/(x + 2) ⇒ 1 = A(x + 2) + B(x − 1). x = 1: A = 1/3; x = −2: B = −1/3.</p><p>Integral = <b>(1/3) log|(x − 1)/(x + 2)| + C</b>.</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "Which function first?",
      text: "<p>In a test, <b>Sneha</b> must integrate ∫x eˣ dx, ∫log x dx and ∫eˣ(sin x + cos x) dx.</p>",
      qs: [
        { q: "Integrate ∫x eˣ dx and ∫log x dx, stating your choice of u.", m: 2, type: "By parts", c: "parts", hint: "ILATE.", points: [{ p: "u = x: eˣ(x − 1) + C", m: 1, k: ["eˣ(x − 1)", "e^x(x-1)"] }, { p: "u = log x, v = 1: x log x − x + C", m: 1, k: ["x log x − x", "xlogx - x"] }], structure: ["Each integral."], model: "<p>∫x eˣ dx: u = x (Algebraic before Exponential) ⇒ x eˣ − ∫eˣ dx = <b>eˣ(x − 1) + C</b>.</p><p>∫log x dx: u = log x, v = 1 ⇒ x log x − ∫x · (1/x) dx = <b>x log x − x + C</b>.</p>" },
        { q: "Integrate ∫eˣ(sin x + cos x) dx quickly.", m: 1, type: "Special form", c: "exf", hint: "f = sin x.", points: [{ p: "f = sin x, f′ = cos x ⇒ eˣ sin x + C", m: 1, k: ["eˣ sin x", "e^x sin x"] }], structure: ["Identify f."], model: "<p>It is eˣ[f(x) + f′(x)] with f(x) = sin x, so the answer is <b>eˣ sin x + C</b>.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "The symmetry shortcut",
      text: "<p>A competition asks for I = ∫₀^(π/2) √sin x/(√sin x + √cos x) dx, J = ∫₋₁¹ x³ cos x dx and K = ∫₋₂² |x| dx.</p>",
      qs: [
        { q: "Find I using a property of definite integrals.", m: 2, type: "Property", c: "props", hint: "Replace x by π/2 − x and add.", points: [{ p: "I = ∫₀^(π/2) √cos x/(√cos x + √sin x) dx", m: 1, k: ["π/2 − x", "cos x"] }, { p: "2I = π/2 ⇒ I = π/4", m: 1, k: ["π/4"] }], structure: ["Property, add."], model: "<p>Using ∫₀ᵃ f(x) = ∫₀ᵃ f(a − x): I = ∫₀^(π/2) √cos x/(√cos x + √sin x) dx. Adding the two forms: 2I = ∫₀^(π/2) 1 dx = π/2 ⇒ <b>I = π/4</b>.</p>" },
        { q: "Find J and K, naming the property used.", m: 3, type: "Odd/even", c: "props", hint: "x³ cos x is odd; |x| is even.", points: [{ p: "x³ cos x is odd ⇒ J = 0", m: 1, k: ["odd", "0"] }, { p: "|x| is even ⇒ K = 2∫₀² x dx", m: 1, k: ["even"] }, { p: "K = 2 × 2 = 4", m: 1, k: ["4"] }], structure: ["J, K."], model: "<p>(−x)³cos(−x) = −x³ cos x: <b>odd</b>, so <b>J = 0</b>.</p><p>|x| is <b>even</b>: K = 2∫₀² x dx = 2 × [x²/2]₀² = 2 × 2 = <b>4</b>.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "basic", q: "∫(1/x) dx =", o: ["log|x| + C", "1/x² + C", "x + C", "−1/x² + C"], a: 0, hint: "Standard.", why: "<b>log|x| + C</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "trig4", q: "∫tan x dx =", o: ["log|sec x| + C", "sec² x + C", "log|cos x| + C", "−log|sec x| + C"], a: 0, hint: "−log|cos x|.", why: "<b>log|sec x| + C</b>." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "special", q: "∫dx/(x² + 9) =", o: ["(1/3) tan⁻¹(x/3) + C", "tan⁻¹(x/3) + C", "(1/9) tan⁻¹(x/9) + C", "3 tan⁻¹(3x) + C"], a: 0, hint: "a = 3.", why: "<b>(1/3) tan⁻¹(x/3) + C</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "parts", q: "∫x eˣ dx =", o: ["eˣ(x − 1) + C", "x eˣ + C", "eˣ(x + 1) + C", "x² eˣ/2 + C"], a: 0, hint: "By parts.", why: "<b>eˣ(x − 1) + C</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "ftc", q: "∫₀^π sin x dx =", o: ["2", "0", "1", "π"], a: 0, hint: "[−cos x].", why: "−(−1) − (−1) = <b>2</b>." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "props", q: "∫₋₁¹ x³ dx =", o: ["0", "1/2", "1/4", "2"], a: 0, hint: "Odd function.", why: "<b>0</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "exf", q: "∫eˣ(1/x − 1/x²) dx =", o: ["eˣ/x + C", "eˣ/x² + C", "eˣ log x + C", "−eˣ/x + C"], a: 0, hint: "f = 1/x.", why: "f = 1/x, f′ = −1/x²: <b>eˣ/x + C</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "props", q: "∫₀^(π/2) sin⁴x/(sin⁴x + cos⁴x) dx =", o: ["π/4", "π/2", "0", "1"], a: 0, hint: "a − x property.", why: "<b>π/4</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "parts", q: "In ∫x log x dx, log x should be taken as the first function u.", r: "In ILATE, L (logarithmic) comes before A (algebraic).", a: 0, hint: "ILATE.", why: "Both true, and R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "props", q: "∫₋₂² |x| dx = 0.", r: "|x| is an even function.", a: 3, hint: "Even ⇒ 2∫₀².", why: "A is false (it is 4); R is true." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "subst", q: "∫cot x dx = log|sin x| + C.", r: "d/dx(sin x) = cos x, so cot x = (sin x)′/sin x.", a: 0, hint: "f′/f.", why: "Both true, and R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "basic", q: "∫eˣ dx = eˣ + C.", a: true, hint: "Self.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "ftc", q: "A definite integral needs a constant C.", a: false, hint: "C cancels.", why: "False." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "partial", q: "Partial fractions can be used directly when the numerator's degree is greater than the denominator's.", a: false, hint: "Divide first.", why: "False: divide first." },
    { id: "q15", t: "match", d: "E", m: 4, c: "basic", q: "Match the integrand with its integral.", pairs: [["sec²x", "tan x + C"], ["cosec²x", "−cot x + C"], ["sec x tan x", "sec x + C"], ["sin x", "−cos x + C"]], hint: "Reverse of derivatives.", why: "Standard results." },
    { id: "q16", t: "match", d: "M", m: 4, c: "special", q: "Match the integral with its result.", pairs: [["∫dx/(x² + a²)", "(1/a) tan⁻¹(x/a)"], ["∫dx/√(a² − x²)", "sin⁻¹(x/a)"], ["∫dx/(x² − a²)", "(1/2a) log|(x − a)/(x + a)|"], ["∫dx/√(x² + a²)", "log|x + √(x² + a²)|"]], hint: "Special table.", why: "Each is a standard result." },
    { id: "q17", t: "match", d: "M", m: 4, c: "ftc", q: "Match the definite integral with its value.", pairs: [["∫₀¹ x² dx", "1/3"], ["∫₁² (1/x) dx", "log 2"], ["∫₀¹ x eˣ dx", "1"], ["∫₀² (x² + 1) dx", "14/3"]], hint: "F(b) − F(a).", why: "Each evaluated by the fundamental theorem." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "basic", q: "∫x⁴ dx = x⁵/______ + C.", acc: ["5"], hint: "n + 1.", why: "<b>5</b>." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "parts", q: "∫log x dx = x log x − ______ + C.", acc: ["x"], hint: "∫1 dx.", why: "<b>x</b>." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "props", q: "∫₋₂² |x| dx = ______.", acc: ["4"], hint: "2∫₀² x.", why: "<b>4</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "ftc", q: "∫₀¹ x eˣ dx = ______.", acc: ["1"], hint: "[eˣ(x − 1)]₀¹.", why: "0 − (−1) = <b>1</b>." },
    { id: "q22", t: "short", d: "E", m: 1, c: "parts", q: "What does the letter E stand for in ILATE?", acc: ["exponential"], hint: "eˣ.", why: "<b>Exponential</b>." },
    { id: "q23", t: "short", d: "M", m: 1, c: "subst", q: "∫2x/(1 + x²) dx = ? (write without + C)", acc: ["log(1 + x²)", "log(1+x^2)", "log(1+x²)", "ln(1+x^2)"], hint: "f′/f.", why: "<b>log(1 + x²)</b>." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "partial", q: "Evaluate ∫(x + 1)/((x + 2)(x + 3)) dx.", hint: "A/(x + 2) + B/(x + 3).", why: "", points: [{ p: "x + 1 = A(x + 3) + B(x + 2)", m: 1, k: ["a(x + 3)", "a(x+3)"] }, { p: "x = −2: A = −1; x = −3: B = 2", m: 1, k: ["a = −1", "a = -1", "b = 2"] }, { p: "−log|x + 2| + 2 log|x + 3| + C", m: 1, k: ["2 log|x + 3|", "2log|x+3|"] }], model: "<p>(x + 1)/((x + 2)(x + 3)) = A/(x + 2) + B/(x + 3) ⇒ x + 1 = A(x + 3) + B(x + 2).</p><p>x = −2: −1 = A ⇒ A = −1. x = −3: −2 = −B ⇒ B = 2.</p><p>Integral = <b>−log|x + 2| + 2 log|x + 3| + C</b> = log|(x + 3)²/(x + 2)| + C.</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "parts", q: "Evaluate ∫x² eˣ dx.", hint: "By parts twice.", why: "", points: [{ p: "x² eˣ − ∫2x eˣ dx", m: 1, k: ["x² eˣ", "x^2 e^x"] }, { p: "∫2x eˣ dx = 2eˣ(x − 1)", m: 1, k: ["2eˣ(x − 1)", "2e^x(x-1)"] }, { p: "eˣ(x² − 2x + 2) + C", m: 1, k: ["x² − 2x + 2", "x^2-2x+2"] }], model: "<p>u = x², v = eˣ: ∫x² eˣ dx = x² eˣ − ∫2x eˣ dx.</p><p>∫2x eˣ dx = 2(x eˣ − eˣ) = 2eˣ(x − 1).</p><p>Answer: x² eˣ − 2eˣ(x − 1) + C = <b>eˣ(x² − 2x + 2) + C</b>.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "square", q: "Evaluate (a) ∫dx/(x² + 6x + 13) and (b) ∫dx/√(5 − 4x − x²).", hint: "Complete the square.", why: "", points: [{ p: "(a) (x + 3)² + 4", m: 1, k: ["(x + 3)² + 4", "(x+3)^2+4"] }, { p: "(a) ½ tan⁻¹((x + 3)/2) + C", m: 1, k: ["½ tan⁻¹((x + 3)/2)", "1/2 tan"] }, { p: "(b) 5 − 4x − x² = 9 − (x + 2)²", m: 1, k: ["9 − (x + 2)²", "9-(x+2)^2"] }, { p: "(b) sin⁻¹((x + 2)/3) + C", m: 1, k: ["sin⁻¹((x + 2)/3)", "sin^-1"] }], model: "<p>(a) x² + 6x + 13 = (x + 3)² + 2² ⇒ <b>½ tan⁻¹((x + 3)/2) + C</b>.</p><p>(b) 5 − 4x − x² = 9 − (x² + 4x + 4) = 3² − (x + 2)² ⇒ <b>sin⁻¹((x + 2)/3) + C</b>.</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "props", q: "Evaluate ∫₀^π x sin x/(1 + cos²x) dx.", hint: "Use x → π − x.", why: "", points: [{ p: "I = ∫₀^π (π − x) sin x/(1 + cos²x) dx", m: 1, k: ["π − x"] }, { p: "2I = π ∫₀^π sin x/(1 + cos²x) dx", m: 1, k: ["2i = π"] }, { p: "Put t = cos x: ∫₋₁¹ dt/(1 + t²) = π/2", m: 1, k: ["π/2", "t = cos x"] }, { p: "I = π²/4", m: 1, k: ["π²/4", "pi^2/4"] }], model: "<p>Using ∫₀ᵃ f(x) = ∫₀ᵃ f(a − x): I = ∫₀^π (π − x) sin x/(1 + cos²x) dx (since sin(π − x) = sin x, cos²(π − x) = cos²x).</p><p>Adding: 2I = π∫₀^π sin x/(1 + cos²x) dx. Put t = cos x: = π∫₋₁¹ dt/(1 + t²) = π[tan⁻¹t]₋₁¹ = π(π/2).</p><p>So <b>I = π²/4</b>.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "props", q: "(a) Prove ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a − x) dx. (b) Use it to evaluate ∫₀^(π/2) log(tan x) dx. (c) Evaluate ∫₀² |x − 1| dx.", hint: "Substitute t = a − x.", why: "", points: [{ p: "(a) Put t = a − x, dx = −dt; limits a → 0", m: 1, k: ["t = a − x", "t = a-x"] }, { p: "(a) ∫ₐ⁰ f(a − t)(−dt) = ∫₀ᵃ f(a − t) dt", m: 1, k: ["∫₀ᵃ f(a − t)"] }, { p: "(b) I = ∫₀^(π/2) log(cot x) dx = −I", m: 1, k: ["cot", "−i", "-i"] }, { p: "(b) 2I = 0 ⇒ I = 0", m: 1, k: ["0"] }, { p: "(c) split at 1: ∫₀¹ (1 − x) + ∫₁² (x − 1)", m: 1, k: ["split", "1 − x"] }, { p: "(c) = ½ + ½ = 1", m: 1, k: ["1"] }], model: "<p>(a) Put t = a − x, dx = −dt; when x = 0, t = a; when x = a, t = 0. ∫₀ᵃ f(x) dx = ∫ₐ⁰ f(a − t)(−dt) = ∫₀ᵃ f(a − t) dt = ∫₀ᵃ f(a − x) dx.</p><p>(b) I = ∫₀^(π/2) log(tan x) dx = ∫₀^(π/2) log(tan(π/2 − x)) dx = ∫₀^(π/2) log(cot x) dx = −I ⇒ <b>I = 0</b>.</p><p>(c) |x − 1| = 1 − x on [0, 1] and x − 1 on [1, 2]: ∫₀¹ (1 − x) dx + ∫₁² (x − 1) dx = ½ + ½ = <b>1</b>.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "ftc", q: "A car's speed is v(t) = 2t m/s. The distance it covers from t = 0 to t = 5 s is:", o: ["25 m", "10 m", "50 m", "5 m"], a: 0, hint: "∫₀⁵ 2t dt.", why: "[t²]₀⁵ = <b>25 m</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "props", q: "A sensor reading is an odd function of time f(t) between −5 s and 5 s. Its total ∫₋₅⁵ f(t) dt is:", o: ["0", "2∫₀⁵ f", "f(5)", "Cannot be found"], a: 0, hint: "Odd.", why: "<b>0</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "basic", passage: "A marginal cost function is C′(x) = 4x + 10.", q: "The cost function (with fixed cost F) is:", o: ["2x² + 10x + F", "4x² + 10x + F", "2x² + F", "4 + F"], a: 0, hint: "Integrate.", why: "<b>2x² + 10x + F</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "subst", passage: "A growth rate is given as f′(x)/f(x) with f(x) = 1 + x².", q: "∫2x/(1 + x²) dx =", o: ["log(1 + x²) + C", "tan⁻¹x + C", "2 tan⁻¹x + C", "x² + C"], a: 0, hint: "f′/f.", why: "<b>log(1 + x²) + C</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "exf", passage: "A pattern ∫eˣ(tan x + sec²x) dx appears in a test.", q: "The answer is:", o: ["eˣ tan x + C", "eˣ sec²x + C", "eˣ sec x + C", "eˣ(tan x + 1) + C"], a: 0, hint: "f = tan x.", why: "<b>eˣ tan x + C</b>." }
  ],
  find: {
    mcq: [
      { s: "xⁿ⁺¹/(n + 1) + C.", o: ["∫xⁿ dx", "d/dx xⁿ", "∫eˣ dx", "∫log x dx"], a: 0, c: "basic", d: "E", why: "<b>Power rule</b> for integrals." },
      { s: "Put t = sin x in ∫sin³x cos x dx.", o: ["Substitution", "By parts", "Partial fractions", "Property"], a: 0, c: "subst", d: "E", why: "<b>Substitution</b>." },
      { s: "Numerator is the derivative of the denominator.", o: ["log|f(x)| + C", "f(x)² + C", "tan⁻¹ f(x)", "By parts"], a: 0, c: "subst", d: "M", why: "<b>f′/f</b>." },
      { s: "log|sec x + tan x| + C.", o: ["∫sec x dx", "∫tan x dx", "∫cot x dx", "∫cosec x dx"], a: 0, c: "trig4", d: "M", why: "<b>∫sec x</b>." },
      { s: "(1/a) tan⁻¹(x/a).", o: ["∫dx/(x² + a²)", "∫dx/(x² − a²)", "∫dx/√(a² − x²)", "∫dx/x"], a: 0, c: "special", d: "E", why: "<b>x² + a²</b>." },
      { s: "sin⁻¹(x/a).", o: ["∫dx/√(a² − x²)", "∫dx/(a² + x²)", "∫dx/(a² − x²)", "∫dx/√(x² + a²)"], a: 0, c: "special", d: "M", why: "<b>√(a² − x²)</b>." },
      { s: "x² + 4x + 8 written as (x + 2)² + 4.", o: ["Completing the square", "Partial fractions", "By parts", "Substitution t = x²"], a: 0, c: "square", d: "M", why: "<b>Completing the square</b>." },
      { s: "Splitting 1/((x − 1)(x + 2)) into two simpler fractions.", o: ["Partial fractions", "By parts", "Completing the square", "Odd/even property"], a: 0, c: "partial", d: "E", why: "<b>Partial fractions</b>." },
      { s: "∫u v dx = u∫v − ∫(u′∫v).", o: ["Integration by parts", "Substitution", "Partial fractions", "FTC"], a: 0, c: "parts", d: "E", why: "<b>By parts</b>." },
      { s: "Choosing log x as u in ∫x log x dx.", o: ["ILATE rule", "Odd/even", "a − x property", "Partial fractions"], a: 0, c: "parts", d: "M", why: "<b>ILATE</b>." },
      { s: "eˣ f(x) + C.", o: ["∫eˣ[f + f′] dx", "∫eˣ f dx", "∫f′ dx", "∫eˣ dx"], a: 0, c: "exf", d: "C", why: "<b>eˣ(f + f′)</b> form." },
      { s: "F(b) − F(a).", o: ["Fundamental theorem", "By parts", "Substitution", "Odd property"], a: 0, c: "ftc", d: "E", why: "<b>FTC</b>." },
      { s: "Replace x by π/2 − x and add the two forms.", o: ["∫₀ᵃ f(x) = ∫₀ᵃ f(a − x)", "Odd property", "By parts", "Partial fractions"], a: 0, c: "props", d: "C", why: "<b>a − x</b> property." },
      { s: "∫₋₁¹ x³ dx = 0.", o: ["Odd function property", "Even function property", "By parts", "Substitution"], a: 0, c: "props", d: "M", why: "<b>Odd</b>." },
      { s: "∫₋₂² |x| dx = 2∫₀² x dx.", o: ["Even function property", "Odd property", "Partial fractions", "By parts"], a: 0, c: "props", d: "M", why: "<b>Even</b>." },
      { s: "Split ∫₀² |x − 1| dx at x = 1.", o: ["Additivity of definite integrals", "By parts", "Substitution", "Odd property"], a: 0, c: "props", d: "C", why: "<b>Splitting</b> the interval." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["t = log x in ∫(log x)/x.", "Substitution", "subst"], ["(1/a) tan⁻¹(x/a).", "Special integral", "special"], ["A/(x − 1) + B/(x + 2).", "Partial fractions", "partial"], ["ILATE.", "Integration by parts", "parts"], ["F(b) − F(a).", "Fundamental theorem", "ftc"], ["∫₀ᵃ f(a − x) dx.", "Property of definite integrals", "props"]] }
    ],
    wrong: [
      { stmts: ["∫tan x dx = log|sec x| + C.", "∫cot x dx = log|sin x| + C.", "∫sec x dx = sec x tan x + C.", "∫cosec²x dx = −cot x + C."], a: 2, c: "trig4", why: "∫sec x dx = <b>log|sec x + tan x| + C</b>." },
      { stmts: ["∫x eˣ dx = eˣ(x − 1) + C.", "∫log x dx = x log x − x + C.", "∫eˣ(sin x + cos x) dx = eˣ cos x + C.", "In ILATE, I comes first."], a: 2, c: "exf", why: "It is <b>eˣ sin x + C</b>." },
      { stmts: ["∫₋ₐᵃ odd f = 0.", "∫₋ₐᵃ even f = 2∫₀ᵃ f.", "∫₋₂² |x| dx = 0.", "∫₀ᵃ f(x) = ∫₀ᵃ f(a − x)."], a: 2, c: "props", why: "|x| is even: the integral is <b>4</b>." }
    ],
    para: [
      { target: "Integration by parts", c: "parts", sents: ["Meera faced ∫x sin x dx.", "She chose u = x and v = sin x and applied u∫v − ∫(u′∫v).", "She used a blue pen.", "The test was on Friday."], a: 1, why: "<b>By parts</b>." },
      { target: "Partial fractions", c: "partial", sents: ["A rational function appeared in a circuit problem.", "The engineer split it into A/(x − 1) + B/(x + 2) before integrating.", "The lab had new oscilloscopes.", "It was a warm day."], a: 1, why: "<b>Partial fractions</b>." },
      { target: "Odd function property", c: "props", sents: ["A signal is symmetric but opposite in sign about t = 0.", "Its integral from −3 to 3 was written down as zero without any calculation.", "The signal was recorded at night.", "The data was saved."], a: 1, why: "<b>Odd function</b>: integral 0." }
    ],
    explain: [
      { s: "∫₀^(π/2) sinⁿx/(sinⁿx + cosⁿx) dx = π/4 for every n.", o: ["a − x property makes the two forms add to π/2", "sin and cos are equal", "Odd function", "By parts"], a: 0, c: "props", why: "The clue is <i>every n</i>: the <b>a − x</b> property gives 2I = π/2." },
      { s: "We take log x as u in ∫x log x dx, not x.", o: ["L comes before A in ILATE", "x cannot be integrated", "log x has no derivative", "Odd property"], a: 0, c: "parts", why: "<b>ILATE</b>." },
      { s: "∫2x cos(x²) dx is quick.", o: ["2x is the derivative of x²", "cos is odd", "By parts is needed", "It is a definite integral"], a: 0, c: "subst", why: "<b>Substitution</b> t = x²." },
      { s: "No + C appears in ∫₀¹ x² dx.", o: ["C cancels in F(b) − F(a)", "C is zero", "Definite integrals have no antiderivative", "x² is odd"], a: 0, c: "ftc", why: "<b>C cancels</b>." }
    ]
  }
});
