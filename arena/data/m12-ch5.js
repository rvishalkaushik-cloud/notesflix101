/* Revision Arena · Class XII Mathematics · Chapter 5 · Continuity and Differentiability (rationalised: no mean value theorems). Original examples; every derivative rechecked. */
NFArena.register({
  id: "m12-ch5", cls: "XII", subject: "Mathematics", unit: "Chapter", num: "5",
  title: "Continuity and Differentiability",
  tagline: "Continuity at a point, differentiability, chain rule, inverse trig derivatives, implicit, exponential and log differentiation, parametric forms and second derivatives.",
  notesLink: "../#m12-ch5",
  concepts: {
    cont: { n: "Continuity at a point", s: "cont" },
    piece: { n: "Piecewise functions and finding k", s: "cont" },
    diff: { n: "Differentiability and its link with continuity", s: "cont" },
    chain: { n: "Chain rule", s: "rules" },
    invtrig: { n: "Derivatives of inverse trig functions", s: "rules" },
    implicit: { n: "Implicit differentiation", s: "rules" },
    explog: { n: "Exponential and logarithmic functions", s: "adv" },
    logdiff: { n: "Logarithmic differentiation", s: "adv" },
    param: { n: "Parametric differentiation", s: "adv" },
    second: { n: "Second-order derivatives", s: "adv" }
  },
  overview: {
    text: "A function is <b>continuous</b> at x = c if its graph has no break there: lim<sub>x→c</sub> f(x) = f(c). It is <b>differentiable</b> at c if the left and right derivatives are equal (no sharp corner). Every differentiable function is continuous, but not conversely (|x| at 0). Then we build a toolkit of rules: <b>chain rule</b>, inverse trig, <b>implicit</b>, <b>log differentiation</b>, <b>parametric</b> and <b>second-order</b> derivatives.",
    points: [
      "Continuity at c: LHL = RHL = f(c).",
      "Differentiable ⇒ continuous; continuous ⇏ differentiable.",
      "Chain rule: d/dx f(g(x)) = f′(g(x)) · g′(x).",
      "For y = [f(x)]^g(x), take log first. For parametric x(t), y(t): dy/dx = (dy/dt)/(dx/dt)."
    ],
    map: {
      center: "Continuity and Differentiability",
      branches: [
        { t: "Continuity", c: ["LHL = RHL = f(c)", "Piecewise k", "Algebra of continuous functions"] },
        { t: "Differentiability", c: ["LHD = RHD", "|x| at 0", "Diff ⇒ cont"] },
        { t: "Rules", c: ["Chain rule", "Inverse trig", "Implicit"] },
        { t: "Advanced", c: ["eˣ, log x", "Log differentiation", "Parametric", "Second order"] }
      ]
    }
  },
  sections: [
    {
      id: "cont", title: "Continuity and differentiability", sub: "No breaks, no corners", icon: "📈", color: "#2F6BFF",
      quick: [
        "f is <b>continuous at x = c</b> if lim<sub>x→c⁻</sub> f(x) = lim<sub>x→c⁺</sub> f(x) = f(c).",
        "Polynomials, sin x, cos x, eˣ and |x| are continuous everywhere; log x on (0, ∞); tan x except where cos x = 0.",
        "Sums, differences, products and quotients (denominator ≠ 0) of continuous functions are continuous; so are compositions.",
        "The <b>greatest integer function</b> [x] is discontinuous at every integer.",
        "f is <b>differentiable at c</b> if the left-hand derivative equals the right-hand derivative.",
        "<b>Differentiable ⇒ continuous</b>, but |x| is continuous at 0 and not differentiable there (LHD = −1, RHD = 1)."
      ],
      cards: [
        { t: "Worked: find k", tag: "numerical", b: "<p>f(x) = kx + 1 for x ≤ 5, 3x − 5 for x > 5. Continuity at 5: 5k + 1 = 3(5) − 5 = 10 ⇒ <b>k = 9/5</b>.</p>" },
        { t: "Corner test", tag: "hook", b: "<p><b>“Break ⇒ not continuous; corner ⇒ not differentiable.”</b> A smooth, unbroken curve passes both tests.</p>" }
      ],
      exam: ["Write LHL, RHL and f(c) separately for piecewise functions.", "For non-differentiability, compute LHD and RHD."]
    },
    {
      id: "rules", title: "Chain rule, inverse trig and implicit", sub: "The core toolkit", icon: "⛓️", color: "#12B5A6",
      quick: [
        "<b>Chain rule</b>: if y = f(u), u = g(x), then dy/dx = (dy/du)(du/dx). E.g. d/dx sin(x²) = 2x cos(x²).",
        "d/dx sin⁻¹x = 1/√(1 − x²); d/dx cos⁻¹x = −1/√(1 − x²); d/dx tan⁻¹x = 1/(1 + x²).",
        "d/dx cot⁻¹x = −1/(1 + x²); d/dx sec⁻¹x = 1/(|x|√(x² − 1)) type; d/dx cosec⁻¹x = −1/(|x|√(x² − 1)) type (for |x| > 1).",
        "<b>Implicit</b>: differentiate both sides with respect to x, treating y as a function of x (d/dx y² = 2y dy/dx), then solve for dy/dx.",
        "Trig substitution simplifies inverse-trig expressions: for tan⁻¹(2x/(1 − x²)) with |x| < 1, put x = tan θ to get 2 tan⁻¹x, so the derivative is 2/(1 + x²)."
      ],
      cards: [
        { t: "Worked: implicit", tag: "numerical", b: "<p>x² + y² = 25: 2x + 2y y′ = 0 ⇒ <b>y′ = −x/y</b>. At (3, 4): y′ = −3/4.</p>" },
        { t: "Worked: chain rule", tag: "numerical", b: "<p>y = e^(sin x) ⇒ y′ = cos x · e^(sin x). y = log(sin x) ⇒ y′ = cos x/sin x = <b>cot x</b>.</p>" }
      ],
      exam: ["Show the inner derivative clearly in chain-rule answers.", "In implicit questions, collect dy/dx terms on one side."]
    },
    {
      id: "adv", title: "Exponential, log, parametric and second order", sub: "Advanced techniques", icon: "🚀", color: "#FF8A1F",
      quick: [
        "d/dx eˣ = eˣ; d/dx aˣ = aˣ log a; d/dx log x = 1/x (x > 0).",
        "<b>Logarithmic differentiation</b> for y = [f(x)]^g(x) or long products: take log, differentiate, multiply by y. y = xˣ ⇒ y′ = xˣ(1 + log x).",
        "<b>Parametric</b>: x = f(t), y = g(t) ⇒ dy/dx = (dy/dt)/(dx/dt), if dx/dt ≠ 0. x = a cos t, y = a sin t ⇒ dy/dx = −cot t.",
        "<b>Second order</b>: d²y/dx² = d/dx (dy/dx). For parametric forms: d²y/dx² = d/dt(dy/dx) ÷ (dx/dt).",
        "y = A e^(3x) + B e^(−3x) satisfies y″ = 9y; y = e^(2x) satisfies y″ = 4y."
      ],
      cards: [
        { t: "Worked: y = x^(sin x)", tag: "numerical", b: "<p>log y = sin x · log x ⇒ y′/y = cos x · log x + (sin x)/x ⇒ <b>y′ = x^(sin x)[cos x log x + (sin x)/x]</b>.</p>" },
        { t: "Worked: parametric second derivative", tag: "numerical", b: "<p>x = t², y = t³: dy/dx = 3t²/2t = 3t/2. d²y/dx² = (3/2) ÷ (2t) = <b>3/(4t)</b>.</p>" }
      ],
      exam: ["For log differentiation, write log y = … as the first line.", "For parametric d²y/dx², remember to divide by dx/dt again."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "cont", q: "Continuity at x = c?", a: "LHL = RHL = f(c)." },
    { k: "Example", c: "cont", q: "Where is [x] discontinuous?", a: "At every integer." },
    { k: "Definition", c: "diff", q: "Differentiable at c?", a: "LHD = RHD at c." },
    { k: "Fact", c: "diff", q: "Is |x| differentiable at 0?", a: "No (LHD −1, RHD 1); it is continuous there." },
    { k: "Fact", c: "diff", q: "Does differentiability imply continuity?", a: "Yes." },
    { k: "Numerical", c: "piece", q: "kx + 1 (x ≤ 5), 3x − 5 (x > 5) continuous at 5 ⇒ k?", a: "9/5." },
    { k: "Rule", c: "chain", q: "Chain rule?", a: "d/dx f(g(x)) = f′(g(x)) g′(x)." },
    { k: "Derivative", c: "chain", q: "d/dx sin(x²)?", a: "2x cos(x²)." },
    { k: "Derivative", c: "invtrig", q: "d/dx sin⁻¹x?", a: "1/√(1 − x²)." },
    { k: "Derivative", c: "invtrig", q: "d/dx tan⁻¹x?", a: "1/(1 + x²)." },
    { k: "Derivative", c: "invtrig", q: "d/dx cos⁻¹x?", a: "−1/√(1 − x²)." },
    { k: "Method", c: "implicit", q: "x² + y² = 25: dy/dx?", a: "−x/y." },
    { k: "Derivative", c: "explog", q: "d/dx aˣ?", a: "aˣ log a." },
    { k: "Derivative", c: "explog", q: "d/dx log(sin x)?", a: "cot x." },
    { k: "Derivative", c: "logdiff", q: "d/dx xˣ?", a: "xˣ(1 + log x)." },
    { k: "Formula", c: "param", q: "Parametric dy/dx?", a: "(dy/dt) ÷ (dx/dt)." },
    { k: "Example", c: "param", q: "x = a cos t, y = a sin t: dy/dx?", a: "−cot t." },
    { k: "Example", c: "second", q: "y = e^(2x): y″ in terms of y?", a: "y″ = 4y." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "The taxi fare formula",
      text: "<p>A taxi charges f(x) = kx + 1 (in tens of rupees) for the first 5 km and 3x − 5 for distances above 5 km, where x is in km. The company wants the fare to have <b>no sudden jump</b> at 5 km.</p>",
      qs: [
        { q: "Find k so that f is continuous at x = 5.", m: 2, type: "Find k", c: "piece", hint: "LHL = RHL.", points: [{ p: "LHL = f(5) = 5k + 1; RHL = 10", m: 1, k: ["5k + 1", "10"] }, { p: "5k + 1 = 10 ⇒ k = 9/5", m: 1, k: ["9/5", "1.8"] }], structure: ["Limits, equation, k."], model: "<p>LHL = f(5) = 5k + 1; RHL = 3(5) − 5 = 10. Continuity: 5k + 1 = 10 ⇒ <b>k = 9/5</b>.</p>" },
        { q: "With this k, is f differentiable at 5? Compare the slopes.", m: 1, type: "Check", c: "diff", hint: "LHD = k, RHD = 3.", points: [{ p: "LHD = 9/5, RHD = 3: not equal, so not differentiable (a corner)", m: 1, k: ["not differentiable", "9/5", "3"] }], structure: ["Slopes, conclusion."], model: "<p>LHD = k = 9/5 and RHD = 3. They differ, so f has a <b>corner</b> at 5: continuous but <b>not differentiable</b>.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "The V-shaped road",
      text: "<p>A road on a map follows y = |x − 2| (in km). A cyclist notices the road makes a sharp turn at x = 2.</p>",
      qs: [
        { q: "Is the road continuous at x = 2? Is it differentiable there?", m: 2, type: "Decide", c: "diff", hint: "LHD and RHD.", points: [{ p: "Continuous: LHL = RHL = f(2) = 0", m: 1, k: ["continuous", "0"] }, { p: "Not differentiable: LHD = −1, RHD = 1", m: 1, k: ["−1", "-1", "not differentiable"] }], structure: ["Continuity, differentiability."], model: "<p><b>Continuous:</b> both one-sided limits are 0 = f(2).</p><p><b>Not differentiable:</b> slope is −1 on the left and +1 on the right, a sharp corner.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "A circle on a screen",
      text: "<p>A game draws a circle x² + y² = 25. The character moves along it, and the designer needs the slope at (3, 4). The same circle is also drawn using x = 5 cos t, y = 5 sin t.</p>",
      qs: [
        { q: "Find dy/dx by implicit differentiation and its value at (3, 4).", m: 2, type: "Implicit", c: "implicit", hint: "2x + 2y y′ = 0.", points: [{ p: "y′ = −x/y", m: 1, k: ["−x/y", "-x/y"] }, { p: "At (3, 4): −3/4", m: 1, k: ["−3/4", "-3/4"] }], structure: ["Differentiate, substitute."], model: "<p>2x + 2y (dy/dx) = 0 ⇒ dy/dx = <b>−x/y</b>. At (3, 4): <b>−3/4</b>.</p>" },
        { q: "Find dy/dx using the parametric form and check it matches.", m: 2, type: "Parametric", c: "param", hint: "dy/dt ÷ dx/dt.", points: [{ p: "dy/dx = 5 cos t/(−5 sin t) = −cot t", m: 1, k: ["−cot t", "-cot t"] }, { p: "At (3, 4): cos t = 3/5, sin t = 4/5 ⇒ −3/4 ✓", m: 1, k: ["−3/4", "-3/4"] }], structure: ["Formula, check."], model: "<p>dx/dt = −5 sin t, dy/dt = 5 cos t ⇒ dy/dx = <b>−cot t</b>.</p><p>At (3, 4): cos t = 3/5, sin t = 4/5 ⇒ −cot t = −3/4 ✓.</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "A power tower",
      text: "<p>In a maths club, <b>Ira</b> is asked to differentiate y = xˣ and y = x^(sin x). Her friend tries the power rule and gets x · x^(x − 1).</p>",
      qs: [
        { q: "Why is the friend wrong? Find dy/dx for y = xˣ.", m: 2, type: "Explain + differentiate", c: "logdiff", hint: "Variable exponent.", points: [{ p: "Power rule needs a constant exponent; here it is x, so use logs", m: 1, k: ["constant", "variable", "log"] }, { p: "y′ = xˣ(1 + log x)", m: 1, k: ["1 + log x"] }], structure: ["Reason, answer."], model: "<p>The power rule needs a <b>constant</b> exponent. Here the exponent is x, so take logs: log y = x log x ⇒ y′/y = log x + 1 ⇒ <b>y′ = xˣ(1 + log x)</b>.</p>" },
        { q: "Find dy/dx for y = x^(sin x).", m: 2, type: "Log differentiation", c: "logdiff", hint: "log y = sin x log x.", points: [{ p: "y′/y = cos x log x + sin x/x", m: 1, k: ["cos x log x"] }, { p: "y′ = x^(sin x)[cos x log x + sin x/x]", m: 1, k: ["x^(sin x)"] }], structure: ["Log, differentiate, multiply."], model: "<p>log y = sin x · log x ⇒ y′/y = cos x · log x + (sin x)/x ⇒ <b>y′ = x^(sin x)[cos x log x + (sin x)/x]</b>.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "The spring and the projectile",
      text: "<p>A physics lab models a spring by y = A e^(3x) + B e^(−3x), and a projectile by x = t², y = t³.</p>",
      qs: [
        { q: "Show that the spring model satisfies d²y/dx² = 9y.", m: 2, type: "Prove", c: "second", hint: "Differentiate twice.", points: [{ p: "y′ = 3A e^(3x) − 3B e^(−3x)", m: 1, k: ["3a", "3b"] }, { p: "y″ = 9A e^(3x) + 9B e^(−3x) = 9y", m: 1, k: ["9y"] }], structure: ["First, second derivative."], model: "<p>y′ = 3A e^(3x) − 3B e^(−3x); y″ = 9A e^(3x) + 9B e^(−3x) = 9(A e^(3x) + B e^(−3x)) = <b>9y</b>.</p>" },
        { q: "For the projectile, find dy/dx and d²y/dx² in terms of t.", m: 3, type: "Parametric", c: "param", hint: "Divide by dx/dt twice.", points: [{ p: "dy/dx = 3t²/(2t) = 3t/2", m: 1, k: ["3t/2"] }, { p: "d/dt(3t/2) = 3/2", m: 1, k: ["3/2"] }, { p: "d²y/dx² = (3/2) ÷ 2t = 3/(4t)", m: 1, k: ["3/(4t)", "3/4t"] }], structure: ["dy/dx, then second derivative."], model: "<p>dx/dt = 2t, dy/dt = 3t² ⇒ dy/dx = <b>3t/2</b>.</p><p>d²y/dx² = [d/dt(3t/2)] ÷ (dx/dt) = (3/2) ÷ (2t) = <b>3/(4t)</b>.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "chain", q: "d/dx sin(x²) =", o: ["2x cos(x²)", "cos(x²)", "2x sin(x²)", "cos(2x)"], a: 0, hint: "Chain rule.", why: "<b>2x cos(x²)</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "invtrig", q: "d/dx tan⁻¹x =", o: ["1/(1 + x²)", "1/√(1 − x²)", "−1/(1 + x²)", "sec² x"], a: 0, hint: "Standard.", why: "<b>1/(1 + x²)</b>." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "diff", q: "f(x) = |x| at x = 0 is:", o: ["Continuous but not differentiable", "Differentiable but not continuous", "Neither", "Both"], a: 0, hint: "Corner.", why: "<b>Continuous, not differentiable</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "explog", q: "d/dx 2ˣ =", o: ["2ˣ log 2", "x 2^(x − 1)", "2ˣ", "2ˣ/log 2"], a: 0, hint: "aˣ log a.", why: "<b>2ˣ log 2</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "logdiff", q: "d/dx xˣ =", o: ["xˣ(1 + log x)", "x · x^(x − 1)", "xˣ log x", "xˣ"], a: 0, hint: "Take logs.", why: "<b>xˣ(1 + log x)</b>." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "piece", q: "f(x) = kx + 1 (x ≤ 5), 3x − 5 (x > 5) is continuous at 5 if k =", o: ["9/5", "5/9", "2", "1"], a: 0, hint: "5k + 1 = 10.", why: "<b>9/5</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "param", q: "If x = t², y = t³, then d²y/dx² =", o: ["3/(4t)", "3t/2", "6t", "3/(2t)"], a: 0, hint: "(3/2) ÷ 2t.", why: "<b>3/(4t)</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "invtrig", q: "For |x| < 1, d/dx tan⁻¹(2x/(1 − x²)) =", o: ["2/(1 + x²)", "1/(1 + x²)", "2x/(1 + x²)", "−2/(1 + x²)"], a: 0, hint: "Put x = tan θ.", why: "It equals 2 tan⁻¹x: <b>2/(1 + x²)</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "diff", q: "Every differentiable function is continuous.", r: "|x| is continuous at 0 but not differentiable there.", a: 1, hint: "R is about the converse.", why: "Both true, but R does not explain A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "cont", q: "The greatest integer function [x] is discontinuous at x = 2.", r: "The left-hand limit at 2 is 1 and the right-hand limit is 2.", a: 0, hint: "Jump.", why: "Both true, and R explains A." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "logdiff", q: "d/dx xˣ = x · x^(x − 1).", r: "The power rule applies only when the exponent is a constant.", a: 3, hint: "Is A correct?", why: "A is false; R is true." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "cont", q: "Every polynomial function is continuous everywhere.", a: true, hint: "No breaks.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "explog", q: "d/dx log x = 1/x for x > 0.", a: true, hint: "Standard.", why: "True." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "diff", q: "Every continuous function is differentiable.", a: false, hint: "|x|.", why: "False." },
    { id: "q15", t: "match", d: "E", m: 4, c: "invtrig", q: "Match the function with its derivative.", pairs: [["sin⁻¹x", "1/√(1 − x²)"], ["cos⁻¹x", "−1/√(1 − x²)"], ["tan⁻¹x", "1/(1 + x²)"], ["cot⁻¹x", "−1/(1 + x²)"]], hint: "Co- functions have minus.", why: "Standard derivatives." },
    { id: "q16", t: "match", d: "M", m: 4, c: "chain", q: "Match the function with its derivative.", pairs: [["e^(sin x)", "cos x · e^(sin x)"], ["log(sin x)", "cot x"], ["sin(x²)", "2x cos(x²)"], ["(3x + 1)⁵", "15(3x + 1)⁴"]], hint: "Chain rule.", why: "Outer × inner." },
    { id: "q17", t: "match", d: "M", m: 4, c: "second", q: "Match the function with the equation it satisfies.", pairs: [["e^(2x)", "y″ = 4y"], ["A e^(3x) + B e^(−3x)", "y″ = 9y"], ["sin x", "y″ = −y"], ["x³", "y″ = 6x"]], hint: "Differentiate twice.", why: "Each satisfies one equation." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "explog", q: "d/dx eˣ = ______.", acc: ["eˣ", "e^x", "ex"], hint: "Itself.", why: "<b>eˣ</b>." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "implicit", q: "For x² + y² = 25, dy/dx at (3, 4) is ______.", acc: ["-3/4", "−3/4", "-0.75"], hint: "−x/y.", why: "<b>−3/4</b>." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "param", q: "If x = a cos t and y = a sin t, dy/dx = −______ t.", acc: ["cot"], hint: "cos/sin.", why: "<b>−cot t</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "explog", q: "d/dx log(sin x) = ______.", acc: ["cot x", "cotx", "cos x/sin x"], hint: "cos/sin.", why: "<b>cot x</b>." },
    { id: "q22", t: "short", d: "E", m: 1, c: "cont", q: "At which kind of points is [x] discontinuous?", acc: ["integers", "integer points", "every integer", "at integers"], hint: "Jumps.", why: "At <b>integers</b>." },
    { id: "q23", t: "short", d: "M", m: 1, c: "diff", q: "What is the left-hand derivative of |x| at 0?", acc: ["-1", "−1"], hint: "Slope on the left.", why: "<b>−1</b>." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "piece", q: "Find k if f(x) = kx² for x ≤ 2 and 3 for x > 2 is continuous at x = 2.", hint: "4k = 3.", why: "", points: [{ p: "LHL = f(2) = 4k", m: 1, k: ["4k"] }, { p: "RHL = 3", m: 1, k: ["3"] }, { p: "4k = 3 ⇒ k = 3/4", m: 1, k: ["3/4"] }], model: "<p>LHL = f(2) = k(2)² = 4k. RHL = 3. Continuity: 4k = 3 ⇒ <b>k = 3/4</b>.</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "logdiff", q: "Differentiate y = (sin x)^x with respect to x.", hint: "log y = x log sin x.", why: "", points: [{ p: "log y = x log(sin x)", m: 1, k: ["log y"] }, { p: "y′/y = log(sin x) + x cot x", m: 1, k: ["x cot x"] }, { p: "y′ = (sin x)^x [log(sin x) + x cot x]", m: 1, k: ["(sin x)^x"] }], model: "<p>log y = x log(sin x). Differentiate: (1/y) y′ = log(sin x) + x · (cos x/sin x).</p><p><b>y′ = (sin x)^x [log(sin x) + x cot x]</b>.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "diff", q: "Show that f(x) = |x − 3| is continuous but not differentiable at x = 3.", hint: "Limits, then LHD/RHD.", why: "", points: [{ p: "LHL = RHL = 0 = f(3): continuous", m: 1, k: ["continuous", "0"] }, { p: "LHD: lim (|3 − h − 3| − 0)/(−h) = −1", m: 1, k: ["−1", "-1"] }, { p: "RHD: lim (|3 + h − 3| − 0)/h = 1", m: 1, k: ["1"] }, { p: "LHD ≠ RHD: not differentiable", m: 1, k: ["not differentiable"] }], model: "<p>LHL = lim<sub>h→0</sub> |−h| = 0, RHL = lim |h| = 0, f(3) = 0: <b>continuous</b>.</p><p>LHD = lim<sub>h→0</sub> (|−h| − 0)/(−h) = −1. RHD = lim (|h| − 0)/h = 1. LHD ≠ RHD: <b>not differentiable</b>.</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "second", q: "If y = e^(2x) + e^(−3x), show that y″ + y′ − 6y = 0.", hint: "Two derivatives.", why: "", points: [{ p: "y′ = 2e^(2x) − 3e^(−3x)", m: 1, k: ["2e^(2x)"] }, { p: "y″ = 4e^(2x) + 9e^(−3x)", m: 1, k: ["4e^(2x)", "9e^(−3x)", "9e^(-3x)"] }, { p: "Sum of e^(2x) terms: 4 + 2 − 6 = 0", m: 1, k: ["4 + 2 − 6", "4+2-6"] }, { p: "Sum of e^(−3x) terms: 9 − 3 − 6 = 0", m: 1, k: ["9 − 3 − 6", "9-3-6"] }], model: "<p>y′ = 2e^(2x) − 3e^(−3x); y″ = 4e^(2x) + 9e^(−3x).</p><p>y″ + y′ − 6y = (4 + 2 − 6)e^(2x) + (9 − 3 − 6)e^(−3x) = <b>0</b>.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "implicit", q: "(a) If x³ + y³ = 3xy, find dy/dx. (b) If y = sin⁻¹x, show that (1 − x²)y″ − xy′ = 0. (c) Differentiate (log x)^x.", hint: "Implicit; differentiate twice; log differentiation.", why: "", points: [{ p: "(a) 3x² + 3y² y′ = 3y + 3x y′", m: 1, k: ["3y² y′", "3y^2"] }, { p: "(a) y′ = (y − x²)/(y² − x)", m: 1, k: ["(y − x²)/(y² − x)", "(y-x^2)/(y^2-x)"] }, { p: "(b) y′ = 1/√(1 − x²) ⇒ √(1 − x²) y′ = 1", m: 1, k: ["√(1 − x²) y′ = 1"] }, { p: "(b) differentiate: √(1 − x²) y″ − x y′/√(1 − x²) = 0 ⇒ result", m: 1, k: ["(1 − x²)y″ − xy′ = 0", "(1-x^2)y''"] }, { p: "(c) log y = x log(log x)", m: 1, k: ["log(log x)"] }, { p: "(c) y′ = (log x)^x [log(log x) + 1/log x]", m: 1, k: ["1/log x"] }], model: "<p>(a) 3x² + 3y² y′ = 3y + 3x y′ ⇒ y′(y² − x) = y − x² ⇒ <b>dy/dx = (y − x²)/(y² − x)</b>.</p><p>(b) y′ = 1/√(1 − x²) ⇒ √(1 − x²) y′ = 1. Differentiate: √(1 − x²) y″ + y′ · (−x/√(1 − x²)) = 0. Multiply by √(1 − x²): <b>(1 − x²)y″ − xy′ = 0</b>.</p><p>(c) y = (log x)^x ⇒ log y = x log(log x) ⇒ y′/y = log(log x) + x · 1/(x log x) ⇒ <b>y′ = (log x)^x [log(log x) + 1/log x]</b>.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "cont", q: "A parking fee is ₹20 for up to 1 hour, ₹40 for up to 2 hours, and so on (pay per started hour). Its graph against time is:", o: ["Discontinuous at whole hours", "Continuous everywhere", "Differentiable everywhere", "A straight line"], a: 0, hint: "Jumps.", why: "Step function: <b>jumps at whole hours</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "param", q: "A drone's path is x = 2t, y = t² (t in seconds). The slope of its path at t = 3 is:", o: ["3", "6", "1.5", "9"], a: 0, hint: "(2t)/2.", why: "dy/dx = 2t/2 = t = <b>3</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "chain", passage: "A population grows as P = e^(0.5t).", q: "dP/dt =", o: ["0.5 e^(0.5t)", "e^(0.5t)", "0.5t e^(0.5t)", "e^(0.5)"], a: 0, hint: "Chain rule.", why: "<b>0.5 e^(0.5t)</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "diff", passage: "A road map follows y = |x − 1| with a sharp turn.", q: "At x = 1 the function is:", o: ["Continuous, not differentiable", "Differentiable", "Discontinuous", "Undefined"], a: 0, hint: "Corner.", why: "<b>Continuous, not differentiable</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "implicit", passage: "An elliptical track satisfies x²/9 + y²/4 = 1.", q: "dy/dx =", o: ["−4x/(9y)", "−9x/(4y)", "4x/(9y)", "−x/y"], a: 0, hint: "2x/9 + 2y y′/4 = 0.", why: "y′ = −(2x/9)/(y/2) = <b>−4x/(9y)</b>." }
  ],
  find: {
    mcq: [
      { s: "LHL = RHL = f(c).", o: ["Continuous at c", "Differentiable at c", "Discontinuous", "Parametric"], a: 0, c: "cont", d: "E", why: "<b>Continuity</b>." },
      { s: "A graph with a jump at x = 2.", o: ["Discontinuous at 2", "Differentiable at 2", "Continuous at 2", "Implicit"], a: 0, c: "cont", d: "E", why: "<b>Jump</b>: discontinuous." },
      { s: "Choosing k so two pieces meet at a point.", o: ["Piecewise continuity", "Chain rule", "Log differentiation", "Second derivative"], a: 0, c: "piece", d: "M", why: "<b>Piecewise k</b>." },
      { s: "LHD = −1 and RHD = 1.", o: ["Not differentiable (corner)", "Differentiable", "Discontinuous", "Parametric"], a: 0, c: "diff", d: "M", why: "<b>Corner</b>." },
      { s: "Differentiate the outer function, then multiply by the inner derivative.", o: ["Chain rule", "Product rule", "Implicit differentiation", "Log differentiation"], a: 0, c: "chain", d: "E", why: "<b>Chain rule</b>." },
      { s: "1/√(1 − x²).", o: ["d/dx sin⁻¹x", "d/dx tan⁻¹x", "d/dx cos⁻¹x", "d/dx log x"], a: 0, c: "invtrig", d: "E", why: "<b>sin⁻¹</b>." },
      { s: "Put x = tan θ to simplify before differentiating.", o: ["Trig substitution for inverse trig", "Implicit", "Parametric", "Second order"], a: 0, c: "invtrig", d: "C", why: "<b>Substitution</b>." },
      { s: "Differentiate x² + y² = 25 term by term with y as a function of x.", o: ["Implicit differentiation", "Parametric", "Log differentiation", "Continuity"], a: 0, c: "implicit", d: "E", why: "<b>Implicit</b>." },
      { s: "aˣ log a.", o: ["d/dx aˣ", "d/dx xᵃ", "d/dx log x", "d/dx eˣ"], a: 0, c: "explog", d: "M", why: "<b>aˣ</b>." },
      { s: "Take log of both sides to handle a variable exponent.", o: ["Logarithmic differentiation", "Chain rule only", "Parametric", "Continuity"], a: 0, c: "logdiff", d: "M", why: "<b>Log differentiation</b>." },
      { s: "xˣ(1 + log x).", o: ["d/dx xˣ", "d/dx eˣ", "d/dx x log x", "d/dx log x"], a: 0, c: "logdiff", d: "C", why: "<b>xˣ</b>." },
      { s: "(dy/dt) ÷ (dx/dt).", o: ["Parametric derivative", "Implicit derivative", "Second derivative", "Chain rule"], a: 0, c: "param", d: "E", why: "<b>Parametric</b>." },
      { s: "Divide d/dt(dy/dx) by dx/dt.", o: ["Parametric second derivative", "Implicit", "Log differentiation", "Continuity"], a: 0, c: "param", d: "C", why: "<b>Second derivative</b>, parametric." },
      { s: "y″ = 4y for y = e^(2x).", o: ["Second-order derivative", "First derivative", "Continuity", "Implicit"], a: 0, c: "second", d: "M", why: "<b>Second order</b>." },
      { s: "Polynomials, sin x and eˣ have no breaks.", o: ["Continuous everywhere", "Discontinuous", "Not differentiable", "Parametric"], a: 0, c: "cont", d: "M", why: "<b>Continuous</b>." },
      { s: "Differentiable at a point ⇒ also this.", o: ["Continuous there", "Discontinuous", "Constant", "Periodic"], a: 0, c: "diff", d: "C", why: "<b>Continuous</b>." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["LHL = RHL = f(c).", "Continuity", "cont"], ["|x| at 0.", "Not differentiable", "diff"], ["d/dx sin(x²) = 2x cos(x²).", "Chain rule", "chain"], ["x² + y² = 25 ⇒ y′ = −x/y.", "Implicit differentiation", "implicit"], ["log y = x log x.", "Logarithmic differentiation", "logdiff"], ["dy/dx = (dy/dt)/(dx/dt).", "Parametric", "param"]] }
    ],
    wrong: [
      { stmts: ["Differentiable ⇒ continuous.", "Continuous ⇒ differentiable.", "|x| is continuous at 0.", "|x| is not differentiable at 0."], a: 1, c: "diff", why: "Continuity does <b>not</b> imply differentiability." },
      { stmts: ["d/dx tan⁻¹x = 1/(1 + x²).", "d/dx sin⁻¹x = 1/√(1 − x²).", "d/dx cos⁻¹x = 1/√(1 − x²).", "d/dx cot⁻¹x = −1/(1 + x²)."], a: 2, c: "invtrig", why: "It is <b>−1/√(1 − x²)</b>." },
      { stmts: ["d/dx eˣ = eˣ.", "d/dx aˣ = aˣ log a.", "d/dx xˣ = x · x^(x − 1).", "d/dx log x = 1/x."], a: 2, c: "logdiff", why: "d/dx xˣ = <b>xˣ(1 + log x)</b>." }
    ],
    para: [
      { target: "Discontinuity", c: "cont", sents: ["A mobile plan charges per started 10 MB.", "The bill jumps suddenly from ₹5 to ₹10 at exactly 10 MB.", "The company has many plans.", "It offers free calls."], a: 1, why: "Sudden jump: <b>discontinuous</b>." },
      { target: "Parametric differentiation", c: "param", sents: ["A drone's x and y positions are both given as functions of time t.", "The engineer found the slope of its path by dividing dy/dt by dx/dt.", "The drone is red.", "It flies at noon."], a: 1, why: "<b>Parametric</b> slope." },
      { target: "Logarithmic differentiation", c: "logdiff", sents: ["A student met the function y = x^(x).", "She took log of both sides before differentiating.", "Her notebook was blue.", "She finished early."], a: 1, why: "<b>Log differentiation</b>." }
    ],
    explain: [
      { s: "A V-shaped graph is continuous but has no derivative at its tip.", o: ["LHD ≠ RHD at the corner", "It has a jump", "It is a polynomial", "It is implicit"], a: 0, c: "diff", why: "The clue is <i>tip</i>: slopes on the two sides <b>differ</b>." },
      { s: "The power rule fails for y = xˣ.", o: ["Exponent is not a constant", "x is negative", "xˣ is discontinuous", "Chain rule is forbidden"], a: 0, c: "logdiff", why: "<b>Variable exponent</b>." },
      { s: "dy/dx for a circle uses both x and y.", o: ["Implicit differentiation keeps y", "Parametric gives only t", "Circle is discontinuous", "It is a polynomial"], a: 0, c: "implicit", why: "<b>Implicit</b> answers involve y." },
      { s: "We divide by dx/dt again for d²y/dx² in parametric form.", o: ["d/dx = (d/dt) ÷ (dx/dt)", "Second derivative is always zero", "t cancels", "It is a constant"], a: 0, c: "param", why: "<b>Chain rule</b> in t." }
    ]
  }
});
