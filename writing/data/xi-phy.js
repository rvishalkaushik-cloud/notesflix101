/* Answer Writing Lab · Class XI Physics. Original questions; every figure recomputed. */
NFWrite.register({
  slug: "xi-phy", cls: "XI", subject: "Physics",
  intro: "Physics is marked step by step: the formula, substitution with units, and the answer with units. Derivations are marked line by line, so every step must follow from the one before.",
  words: { 3: "working + answer", 4: "working + answer", 5: "derivation" },
  rules: [
    { t: "Given – To find – Formula", b: "Start numericals with <b>Given</b> (with SI units) and <b>To find</b>. Then the formula, then numbers." },
    { t: "Units at every step", b: "Write units in the substitution and the answer: <b>20 m s⁻¹</b>, not 20." },
    { t: "Derivations: say why", b: "Each line of a derivation needs a short reason: 'by conservation of energy', 'since GM = gR²'." },
    { t: "Diagrams help", b: "Draw a labelled sketch for projectiles, forces and circuits. It earns marks and prevents sign errors." },
    { t: "Statement then formula", b: "For laws, write the <b>statement in words</b> first, then the mathematical form." },
    { t: "Sensible answers", b: "Check magnitude: a car's acceleration of 400 m s⁻² is a sign of a slip." }
  ],
  questions: [
    {
      id: "q1", ch: "phy11-ch1", chTitle: "Units and Measurements", marks: 3, cmd: "Check",
      q: "Check the dimensional correctness of the equation v = u + at.",
      ask: "Dimensions of each term and the conclusion from the principle of homogeneity.",
      points: [
        { p: "[v] = [u] = [M⁰LT⁻¹]", m: 1, k: ["lt⁻¹", "lt-1", "lt^-1"] },
        { p: "[at] = [LT⁻²][T] = [M⁰LT⁻¹]", m: 1, k: ["lt⁻²", "lt-2", "[t]"] },
        { p: "All terms have the same dimensions, so the equation is dimensionally correct (principle of homogeneity)", m: 1, k: ["homogeneity", "dimensionally correct", "same dimensions"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>v and u are velocities and at is also velocity, so it is correct.</p>",
          notes: ["The idea is right but no dimensions are written: 1 mark.", "Show [at] = [LT⁻²][T] = [LT⁻¹]."] },
        good: { score: 2, text: "<p>[v] = [LT⁻¹]; [u] = [LT⁻¹]; [at] = [LT⁻²] × [T] = [LT⁻¹]</p>",
          notes: ["All dimensions are right: 2 marks.", "The conclusion is missing: state that all terms match, so by the <b>principle of homogeneity</b> the equation is dimensionally correct."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\">LHS: [v] = [M⁰LT⁻¹]. First term on RHS: [u] = [M⁰LT⁻¹].</span></p><p><span class=\"mp\" data-p=\"2\">Second term on RHS: [at] = [M⁰LT⁻²] × [T] = [M⁰LT⁻¹].</span></p><p><span class=\"mp\" data-p=\"3\">All terms have the same dimensions, so by the <b>principle of homogeneity</b> the equation v = u + at is <b>dimensionally correct</b>.</span></p>",
          notes: ["Each term checked separately.", "The principle is named in the conclusion."] }
      },
      mistakes: ["Skipping the dimensions of 'at'.", "No conclusion.", "Claiming the check proves the equation is physically correct (it only checks consistency)."],
      tip: "A dimensionally correct equation may still be wrong by a number factor, e.g. ½."
    },
    {
      id: "q2", ch: "phy11-ch2", chTitle: "Motion in a Straight Line", marks: 3, cmd: "Calculate",
      q: "A car's velocity increases uniformly from 10 m s⁻¹ to 30 m s⁻¹ in 5 s. Find its acceleration and the distance covered in this time.",
      ask: "a = (v − u) ÷ t, then s = ut + ½at² (or s = average velocity × t), with units.",
      points: [
        { p: "a = (30 − 10) ÷ 5 = 4 m s⁻²", m: 1, k: ["4 m"] },
        { p: "Formula s = ut + ½at² (or s = (u + v)t ÷ 2)", m: 1, k: ["ut + ½", "ut+1/2", "(u + v)", "½at"] },
        { p: "s = 10 × 5 + ½ × 4 × 25 = 100 m", m: 1, k: ["100 m"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>a = 30/5 = 6. Distance = 30 × 5 = 150 m.</p>",
          notes: ["Acceleration uses the <b>change</b> in velocity: (30 − 10) ÷ 5.", "Distance cannot use the final speed for the whole time.", "1 mark for a unit on the distance and the attempt."] },
        good: { score: 2, text: "<p>a = (v − u) ÷ t = (30 − 10) ÷ 5 = 4 m s⁻²</p><p>s = ut + ½at² = 10 × 5 + ½ × 4 × 5 = 60 m</p>",
          notes: ["Acceleration and formula right: 2 marks.", "t² was taken as 5 instead of 25: s = 50 + 50 = 100 m."] },
        full: { score: 3, text: "<p><b>Given:</b> u = 10 m s⁻¹, v = 30 m s⁻¹, t = 5 s</p><p><span class=\"mp\" data-p=\"1\">a = (v − u) ÷ t = (30 − 10) ÷ 5 = <b>4 m s⁻²</b></span></p><p><span class=\"mp\" data-p=\"2\">s = ut + ½at²</span></p><p><span class=\"mp\" data-p=\"3\">= 10 × 5 + ½ × 4 × 5² = 50 + 50 = <b>100 m</b></span><br>(Check: s = (u + v)t ÷ 2 = (10 + 30) × 5 ÷ 2 = 100 m ✓)</p>",
          notes: ["Given data listed with units.", "Answer checked by a second equation."] }
      },
      mistakes: ["Using final velocity instead of change in velocity.", "Forgetting to square t.", "No units."],
      tip: "For uniform acceleration, distance = average velocity × time is a fast cross-check."
    },
    {
      id: "q3", ch: "phy11-ch3", chTitle: "Motion in a Plane", marks: 4, cmd: "Calculate",
      q: "A ball is projected with a speed of 20 m s⁻¹ at 30° to the horizontal. Taking g = 10 m s⁻², find its time of flight, maximum height and horizontal range.",
      ask: "Three standard projectile formulas, substituted with sin 30° = 0.5 and sin 60° = √3/2.",
      points: [
        { p: "T = 2u sin θ ÷ g = 2 × 20 × 0.5 ÷ 10 = 2 s", m: 1, k: ["2 s"] },
        { p: "H = u² sin²θ ÷ 2g = 400 × 0.25 ÷ 20 = 5 m", m: 1, k: ["5 m"] },
        { p: "R = u² sin 2θ ÷ g", m: 1, k: ["sin 2θ", "sin2θ", "sin 60"] },
        { p: "R = 400 × (√3/2) ÷ 10 = 20√3 ≈ 34.6 m", m: 1, k: ["34.6", "20√3"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>T = 2 × 20 / 10 = 4 s. H = 400/20 = 20 m. R = 400/10 = 40 m.</p>",
          notes: ["All sin θ terms are missing: these are the values for θ = 90° or 45°, not 30°.", "1 mark for knowing the formula shapes at most."] },
        good: { score: 2, text: "<p>T = 2u sin θ ÷ g = 2 × 20 × 0.5 ÷ 10 = 2 s</p><p>H = u² sin²θ ÷ 2g = 400 × 0.25 ÷ 20 = 5 m</p><p>R = u² sin θ ÷ g = 400 × 0.5 ÷ 10 = 20 m</p>",
          notes: ["T and H are right: 2 marks.", "Range uses <b>sin 2θ</b> = sin 60° = √3/2, so R = 20√3 ≈ 34.6 m."] },
        full: { score: 4, text: "<p><b>Given:</b> u = 20 m s⁻¹, θ = 30°, g = 10 m s⁻²</p><p><span class=\"mp\" data-p=\"1\">Time of flight T = 2u sin θ ÷ g = 2 × 20 × 0.5 ÷ 10 = <b>2 s</b></span></p><p><span class=\"mp\" data-p=\"2\">Maximum height H = u² sin²θ ÷ 2g = (400 × 0.25) ÷ 20 = <b>5 m</b></span></p><p><span class=\"mp\" data-p=\"3\">Range R = u² sin 2θ ÷ g</span><br><span class=\"mp\" data-p=\"4\">= 400 × sin 60° ÷ 10 = 40 × (√3/2) = 20√3 ≈ <b>34.6 m</b></span></p>",
          notes: ["All three formulas named and substituted.", "Exact (20√3) and decimal answers, with units."] }
      },
      mistakes: ["Using sin θ instead of sin 2θ in the range.", "Forgetting to square sin θ in H.", "Using degrees in a calculator set to radians."],
      tip: "sin 30° = 0.5, sin 60° = √3/2 ≈ 0.866, sin²30° = 0.25. Write them down first."
    },
    {
      id: "q4", ch: "phy11-ch4", chTitle: "Laws of Motion", marks: 3, cmd: "State and derive",
      q: "State Newton's second law of motion and derive F = ma from it.",
      ask: "Statement in terms of momentum, the proportionality, and the derivation with k = 1 in SI units.",
      points: [
        { p: "Statement: rate of change of momentum is directly proportional to the applied force and takes place in the direction of the force", m: 1, k: ["rate of change of momentum", "momentum"] },
        { p: "F ∝ dp/dt, with p = mv; for constant mass, dp/dt = m dv/dt = ma", m: 1, k: ["dp/dt", "m dv/dt", "dv/dt"] },
        { p: "F = kma; k = 1 in SI units (1 N defined), so F = ma", m: 1, k: ["k = 1", "k=1"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Newton's second law says F = ma. Force is mass into acceleration.</p>",
          notes: ["That is the result, not the statement: the law is about <b>rate of change of momentum</b>.", "No derivation: 1 mark for the final relation."] },
        good: { score: 2, text: "<p><b>Statement:</b> the rate of change of momentum of a body is directly proportional to the force applied and takes place in the direction of the force.</p><p>F ∝ dp/dt = d(mv)/dt = m dv/dt = ma, so F = ma.</p>",
          notes: ["Statement and derivation steps: 2 marks.", "The step from F ∝ ma to F = ma needs the constant: F = kma, and k = 1 by choice of SI units."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\"><b>Statement:</b> the rate of change of linear momentum of a body is directly proportional to the applied force and takes place in the direction in which the force acts.</span></p><p><span class=\"mp\" data-p=\"2\">F ∝ dp/dt, where p = mv. For constant mass, dp/dt = m (dv/dt) = ma. So F ∝ ma.</span></p><p><span class=\"mp\" data-p=\"3\">F = kma. In SI units, 1 N is defined as the force that gives 1 kg an acceleration of 1 m s⁻², so k = 1 and <b>F = ma</b>.</span></p>",
          notes: ["Statement in momentum form.", "Each step has its reason (constant mass, definition of newton)."] }
      },
      mistakes: ["Stating the law as 'F = ma' only.", "Skipping the constant of proportionality.", "Forgetting 'for constant mass'."],
      tip: "The law is about momentum; F = ma is a special case for constant mass."
    },
    {
      id: "q5", ch: "phy11-ch5", chTitle: "Work, Energy and Power", marks: 4, cmd: "Calculate",
      q: "A ball of mass 2 kg is dropped from a height of 20 m. Using the law of conservation of mechanical energy, find its speed just before it hits the ground. (g = 10 m s⁻², ignore air resistance)",
      ask: "The principle, potential energy at the top, the KE expression, and the speed.",
      points: [
        { p: "Principle: loss in PE = gain in KE (mechanical energy conserved)", m: 1, k: ["conserv", "loss in pe", "gain in ke"] },
        { p: "PE at top = mgh = 2 × 10 × 20 = 400 J", m: 1, k: ["400 j"] },
        { p: "½mv² = 400 J", m: 1, k: ["½mv²", "1/2 mv", "½ mv"] },
        { p: "v = √(2 × 400 ÷ 2) = 20 m s⁻¹", m: 1, k: ["20 m"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>v = gh = 10 × 20 = 200 m/s</p>",
          notes: ["Wrong relation: v² = 2gh, not v = gh.", "200 m s⁻¹ is far too fast for a 20 m drop: a magnitude check would catch it.", "1 mark for a unit at most."] },
        good: { score: 3, text: "<p>PE = mgh = 2 × 10 × 20 = 400 J. All PE becomes KE, so ½mv² = 400 → v² = 400 → v = 20 m/s.</p>",
          notes: ["PE, the KE equation and the speed are right: 3 marks.", "The principle is assumed, not stated: begin with 'by conservation of mechanical energy, loss in PE = gain in KE'.", "Add units in the working (J, m s⁻¹)."] },
        full: { score: 4, text: "<p><span class=\"mp\" data-p=\"1\">By conservation of mechanical energy (no air resistance): <b>loss in PE = gain in KE</b>.</span></p><p><span class=\"mp\" data-p=\"2\">PE at the top = mgh = 2 kg × 10 m s⁻² × 20 m = <b>400 J</b></span></p><p><span class=\"mp\" data-p=\"3\">At the ground, KE = ½mv² = 400 J</span></p><p><span class=\"mp\" data-p=\"4\">v² = 2 × 400 ÷ 2 = 400 → <b>v = 20 m s⁻¹</b></span><br>(Check: v = √(2gh) = √(2 × 10 × 20) = 20 m s⁻¹ ✓)</p>",
          notes: ["Principle stated first.", "Units in every line; result cross-checked with v = √(2gh)."] }
      },
      mistakes: ["Using v = gh.", "Not stating the principle.", "Missing units on energy (J)."],
      tip: "Mass cancels: v = √(2gh) for any mass. Use it as a check."
    },
    {
      id: "q6", ch: "phy11-ch7", chTitle: "Gravitation", marks: 5, cmd: "Derive",
      q: "Derive an expression for the escape speed of a body from the surface of the Earth, and find its value. (g = 9.8 m s⁻², R = 6.4 × 10⁶ m)",
      ask: "Energy condition, PE at the surface, the equation, the result in terms of g and R, and the value.",
      points: [
        { p: "Condition: total energy at the surface ≥ 0 (body just reaches infinity with zero speed)", m: 1, k: ["infinity", "total energy", "zero"] },
        { p: "PE at the surface = −GMm ÷ R", m: 1, k: ["−gmm/r", "-gmm/r", "gmm"] },
        { p: "½mv<sub>e</sub>² = GMm ÷ R", m: 1, k: ["½mv", "1/2 mv", "= gmm"] },
        { p: "v<sub>e</sub> = √(2GM ÷ R) = √(2gR), using GM = gR²", m: 1, k: ["2gr", "2gm/r", "gm = gr"] },
        { p: "v<sub>e</sub> = √(2 × 9.8 × 6.4 × 10⁶) ≈ 11.2 km s⁻¹", m: 1, k: ["11.2"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Escape velocity = √(2gR) = 11.2 km/s.</p>",
          notes: ["Correct result and value, but no derivation: 1 mark (value only).", "A 'derive' question is marked step by step."] },
        good: { score: 3, text: "<p>To escape, KE = PE. ½mv² = GMm/R → v = √(2GM/R).</p><p>Value = 11.2 km/s.</p>",
          notes: ["Key equation, result and value: 3 marks.", "State the condition (total energy zero at infinity) and the PE at the surface with its <b>negative</b> sign.", "Show GM = gR² to reach √(2gR) before substituting."] },
        full: { score: 5, text: "<p><span class=\"mp\" data-p=\"1\">For a body to just escape, it must reach infinity with zero speed, where both its KE and PE are zero. So its <b>total energy at the surface must be zero</b>.</span></p><p><span class=\"mp\" data-p=\"2\">PE at the Earth's surface = −GMm ÷ R</span></p><p><span class=\"mp\" data-p=\"3\">½mv<sub>e</sub>² + (−GMm ÷ R) = 0 → ½mv<sub>e</sub>² = GMm ÷ R</span></p><p><span class=\"mp\" data-p=\"4\">v<sub>e</sub> = √(2GM ÷ R). Since g = GM ÷ R², GM = gR², so <b>v<sub>e</sub> = √(2gR)</b></span></p><p><span class=\"mp\" data-p=\"5\">v<sub>e</sub> = √(2 × 9.8 × 6.4 × 10⁶) = √(1.254 × 10⁸) ≈ 1.12 × 10⁴ m s⁻¹ = <b>11.2 km s⁻¹</b></span></p>",
          notes: ["Physical condition stated before any equation.", "PE carries its negative sign.", "Substitution shown with powers of ten and the final unit."] }
      },
      mistakes: ["Writing PE without the negative sign.", "Jumping to √(2gR) without GM = gR².", "Giving the answer in m s⁻¹ without converting or vice versa incorrectly."],
      tip: "Escape speed does not depend on the mass of the body or the direction of projection."
    }
  ]
});
