/* Answer Writing Lab · Class X Science. Original questions; every figure recomputed. */
NFWrite.register({
  slug: "x-sci", cls: "X", subject: "Science",
  intro: "Class 10 Science answers are marked on key words, balanced equations, labelled diagrams and units. Write in points, not paragraphs, and give the reason behind every observation.",
  words: { 2: "30–50", 3: "50–80", 5: "120–160" },
  rules: [
    { t: "Balanced equations with states", b: "Chemistry: <b>balance</b> every equation and add physical states (s), (l), (g), (aq) and conditions like 'heat'." },
    { t: "Sign convention in optics", b: "Light: use the <b>New Cartesian sign convention</b>; write u, v and f with signs before substituting." },
    { t: "Formula → substitution → unit", b: "Physics numericals: formula, values with units, answer with unit (Ω, A, cm)." },
    { t: "Diagrams with labels", b: "Biology: a neat, <b>labelled</b> diagram can carry 1–2 marks. Label with straight lines, no arrows crossing." },
    { t: "Observation + reason", b: "For 'why' questions: state what happens <b>and</b> the scientific reason." },
    { t: "Key terms", b: "Use exact terms: 'thermal decomposition', 'double circulation', 'phenotypic ratio'." }
  ],
  questions: [
    {
      id: "q1", ch: "sci10-ch1", chTitle: "Chemical Reactions and Equations", marks: 3, cmd: "Write and identify",
      q: "When lead nitrate powder is heated in a boiling tube, brown fumes are seen. Write the balanced chemical equation, name the brown gas and identify the type of reaction.",
      ask: "Balanced equation with states, the gas (NO₂), and the reaction type (thermal decomposition).",
      points: [
        { p: "2Pb(NO₃)₂(s) → 2PbO(s) + 4NO₂(g) + O₂(g) (balanced, with heat)", m: 1, k: ["2pb(no3)2", "2pb(no₃)₂", "4no2", "4no₂"] },
        { p: "Brown gas: nitrogen dioxide (NO₂)", m: 1, k: ["nitrogen dioxide", "no2", "no₂"] },
        { p: "Type: thermal decomposition reaction", m: 1, k: ["thermal decomposition", "decomposition"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Pb(NO₃)₂ → PbO + NO₂ + O₂. It is a combination reaction.</p>",
          notes: ["The equation is unbalanced and lacks states and 'heat'.", "One substance breaking into several is <b>decomposition</b>, not combination.", "Brown gas not named: 1 mark at most for the products."] },
        good: { score: 2, text: "<p>2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂</p><p>The brown gas is nitrogen dioxide.</p>",
          notes: ["Balanced equation and the gas: 2 marks.", "The reaction type is missing: <b>thermal decomposition</b>.", "Add states and 'heat' over the arrow."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\">2Pb(NO₃)₂(s) —heat→ 2PbO(s) + 4NO₂(g) + O₂(g)</span></p><p><span class=\"mp\" data-p=\"2\">The brown fumes are <b>nitrogen dioxide (NO₂)</b>.</span></p><p><span class=\"mp\" data-p=\"3\">It is a <b>thermal decomposition reaction</b>: one reactant breaks down into simpler products on heating.</span></p>",
          notes: ["Balanced, with states and the condition on the arrow.", "Reaction type with a one-line reason."] }
      },
      mistakes: ["Not balancing (count N and O atoms on both sides).", "Calling it a combination reaction.", "Naming the brown gas as oxygen."],
      tip: "Check balance: Pb 2 = 2, N 4 = 4, O 12 = 2 + 8 + 2."
    },
    {
      id: "q2", ch: "sci10-ch2", chTitle: "Acids, Bases and Salts", marks: 2, cmd: "Give reason",
      q: "Why does dry HCl gas not change the colour of dry blue litmus paper?",
      ask: "The role of water and H⁺ ions.",
      points: [
        { p: "Acidic behaviour needs H⁺ (H₃O⁺) ions, which form only in the presence of water", m: 1, k: ["h+", "h⁺", "h3o", "h₃o", "ions"] },
        { p: "Dry HCl does not dissociate, so no H⁺ ions form and litmus does not change", m: 1, k: ["dissociat", "dry", "no h"] }
      ],
      answers: {
        weak: { score: 0, text: "<p>Because HCl is a weak acid.</p>",
          notes: ["HCl is a <b>strong</b> acid in water. The reason is the absence of water, not weakness: 0 marks."] },
        good: { score: 1, text: "<p>Because HCl gas does not form H⁺ ions without water.</p>",
          notes: ["Correct idea: 1 mark.", "Add the link: no H⁺ ions → no acidic behaviour → no colour change. Mention that HCl dissociates only in water."] },
        full: { score: 2, text: "<p><span class=\"mp\" data-p=\"1\">An acid shows acidic properties only when it produces H⁺ (H₃O⁺) ions, and this happens only in the presence of water: HCl + H₂O → H₃O⁺ + Cl⁻.</span></p><p><span class=\"mp\" data-p=\"2\">Dry HCl gas does not dissociate, so <b>no H⁺ ions</b> are formed and dry blue litmus <b>does not turn red</b>.</span></p>",
          notes: ["The reason (H⁺ needs water) and the result (no change) are both stated.", "A small equation strengthens the explanation."] }
      },
      mistakes: ["Calling HCl a weak acid.", "Stating the observation without the reason.", "Forgetting that the litmus is also dry."],
      tip: "No water → no ions → no acid behaviour."
    },
    {
      id: "q3", ch: "sci10-ch11", chTitle: "Electricity", marks: 3, cmd: "Calculate",
      q: "Three resistors of 2 Ω, 3 Ω and 6 Ω are connected in parallel across a 6 V battery. Find the equivalent resistance and the total current drawn.",
      ask: "Parallel formula, equivalent resistance, and current using Ohm's law.",
      points: [
        { p: "1/R<sub>p</sub> = 1/2 + 1/3 + 1/6", m: 1, k: ["1/2 + 1/3", "1/r"] },
        { p: "1/R<sub>p</sub> = (3 + 2 + 1)/6 = 1, so R<sub>p</sub> = 1 Ω", m: 1, k: ["1 ω", "1 ohm", "= 1"] },
        { p: "I = V/R = 6 V ÷ 1 Ω = 6 A", m: 1, k: ["6 a"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>R = 2 + 3 + 6 = 11 Ω. I = 6/11 = 0.55 A</p>",
          notes: ["That is the <b>series</b> formula. In parallel, reciprocals add.", "Ohm's law is applied correctly to the (wrong) R: 1 mark."] },
        good: { score: 2, text: "<p>1/R = 1/2 + 1/3 + 1/6 = 6/6 = 1, so R = 1 Ω.</p><p>Current = 6 × 1 = 6</p>",
          notes: ["Formula and R = 1 Ω: 2 marks.", "Ohm's law is I = V ÷ R (it gives 6 here only by coincidence), and the unit A is missing."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\">For resistors in parallel: 1/R<sub>p</sub> = 1/R₁ + 1/R₂ + 1/R₃ = 1/2 + 1/3 + 1/6</span></p><p><span class=\"mp\" data-p=\"2\">= (3 + 2 + 1)/6 = 6/6 = 1, so <b>R<sub>p</sub> = 1 Ω</b></span></p><p><span class=\"mp\" data-p=\"3\">By Ohm's law, I = V ÷ R<sub>p</sub> = 6 V ÷ 1 Ω = <b>6 A</b></span></p>",
          notes: ["Formula in symbols first.", "LCM step shown.", "Units on R and I."] }
      },
      mistakes: ["Using the series formula.", "Forgetting to invert 1/R.", "Writing I = V × R."],
      tip: "Parallel R is always smaller than the smallest resistor (here, less than 2 Ω)."
    },
    {
      id: "q4", ch: "sci10-ch9", chTitle: "Light: Reflection and Refraction", marks: 3, cmd: "Calculate",
      q: "An object is placed 30 cm in front of a concave mirror of focal length 15 cm. Find the position and nature of the image and its magnification.",
      ask: "Sign convention, mirror formula, image distance, magnification and nature.",
      points: [
        { p: "u = −30 cm, f = −15 cm; 1/v = 1/f − 1/u", m: 1, k: ["−30", "-30", "−15", "-15", "1/f"] },
        { p: "1/v = −1/15 + 1/30 = −1/30, so v = −30 cm (in front of the mirror, at C)", m: 1, k: ["v = −30", "v = -30", "v=-30"] },
        { p: "m = −v/u = −1: real, inverted, same size", m: 1, k: ["−1", "-1", "real", "inverted"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>1/v = 1/15 − 1/30 = 1/30. v = 30 cm. Image is virtual.</p>",
          notes: ["Signs are ignored: with the sign convention u = −30 and f = −15.", "Magnitude 30 cm is right by luck: 1 mark.", "An image in front of a concave mirror at C is <b>real</b>."] },
        good: { score: 2, text: "<p>u = −30 cm, f = −15 cm</p><p>1/v = 1/f − 1/u = −1/15 + 1/30 = −1/30 → v = −30 cm</p><p>The image is real.</p>",
          notes: ["Sign convention and v: 2 marks.", "Magnification missing: m = −v/u = −1, so inverted and the same size."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\"><b>Given:</b> u = −30 cm, f = −15 cm (concave mirror). Mirror formula: 1/v + 1/u = 1/f, so 1/v = 1/f − 1/u</span></p><p><span class=\"mp\" data-p=\"2\">1/v = −1/15 − (−1/30) = −1/15 + 1/30 = −1/30 → <b>v = −30 cm</b>: the image is 30 cm in front of the mirror, at the centre of curvature.</span></p><p><span class=\"mp\" data-p=\"3\">m = −v/u = −(−30)/(−30) = <b>−1</b>: the image is <b>real, inverted and the same size</b> as the object.</span></p>",
          notes: ["Signs written before substituting.", "Position, nature and size all stated."] }
      },
      mistakes: ["Ignoring the sign convention.", "Using the lens formula for a mirror.", "Forgetting magnification and nature."],
      tip: "Object at C (2f) of a concave mirror → image at C, real, inverted, same size. Use it to check."
    },
    {
      id: "q5", ch: "sci10-ch5", chTitle: "Life Processes", marks: 5, cmd: "Explain",
      q: "What is double circulation? Explain how it occurs in humans and why it is necessary.",
      ask: "Meaning, pulmonary circuit, systemic circuit, the role of the four chambers, and why separation matters.",
      points: [
        { p: "Meaning: blood passes through the heart twice in one complete circuit", m: 1, k: ["twice"] },
        { p: "Pulmonary circulation: right ventricle → lungs → left atrium (deoxygenated blood oxygenated)", m: 1, k: ["right ventricle", "lungs", "pulmonary"] },
        { p: "Systemic circulation: left ventricle → body → right atrium", m: 1, k: ["left ventricle", "systemic", "aorta"] },
        { p: "Four chambers keep oxygenated and deoxygenated blood separate", m: 1, k: ["separate", "mixing", "four chamber"] },
        { p: "Necessary: efficient oxygen supply for high energy needs and constant body temperature", m: 1, k: ["energy", "efficient", "body temperature", "warm"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>Double circulation means blood flows two times. The heart pumps blood to the body and the lungs.</p>",
          notes: ["Meaning (loosely) and the two destinations: 2 marks.", "No chambers, no direction of flow, no reason why it is needed."] },
        good: { score: 4, text: "<p>Blood passes through the heart twice in one cycle.</p><p>The right ventricle pumps deoxygenated blood to the lungs; oxygenated blood returns to the left atrium.</p><p>The left ventricle pumps oxygenated blood to the body; deoxygenated blood returns to the right atrium.</p><p>This keeps the two types of blood separate.</p>",
          notes: ["Meaning, both circuits and separation: 4 marks.", "<b>Why necessary</b> is missing: efficient oxygen supply for high energy needs and maintaining body temperature in mammals and birds."] },
        full: { score: 5, text: "<p><span class=\"mp\" data-p=\"1\"><b>Double circulation:</b> blood passes through the heart <b>twice</b> during one complete circuit of the body.</span></p><p><span class=\"mp\" data-p=\"2\"><b>Pulmonary circulation:</b> the right ventricle pumps deoxygenated blood through the pulmonary artery to the lungs; oxygenated blood returns through the pulmonary vein to the left atrium.</span></p><p><span class=\"mp\" data-p=\"3\"><b>Systemic circulation:</b> the left ventricle pumps oxygenated blood through the aorta to all body parts; deoxygenated blood returns through the vena cava to the right atrium.</span></p><p><span class=\"mp\" data-p=\"4\">The four-chambered heart, with a wall (septum) between the right and left sides, keeps oxygenated and deoxygenated blood <b>separate</b>.</span></p><p><span class=\"mp\" data-p=\"5\"><b>Why necessary:</b> it gives a highly efficient supply of oxygen to the body, which humans need because of high energy use and to maintain a constant body temperature.</span></p>",
          notes: ["Both circuits traced with chamber and vessel names.", "Separation and its purpose both explained.", "A labelled flow diagram (heart → lungs → heart → body) would add value."] }
      },
      mistakes: ["Saying the left side pumps blood to the lungs.", "Not explaining why separation matters.", "Confusing arteries and veins in the pulmonary circuit."],
      tip: "Right side = deoxygenated → lungs. Left side = oxygenated → body."
    },
    {
      id: "q6", ch: "sci10-ch8", chTitle: "Heredity", marks: 5, cmd: "Explain with a cross",
      q: "A pure tall pea plant (TT) is crossed with a pure dwarf pea plant (tt). Show the F₁ and F₂ generations and give the phenotypic and genotypic ratios of F₂.",
      ask: "Parents and gametes, F₁ result, F₁ × F₁ (Punnett square), and both F₂ ratios.",
      points: [
        { p: "Parents TT × tt; gametes T and t", m: 1, k: ["tt ×", "gametes", "t and t"] },
        { p: "F₁: all Tt, all tall (tall is dominant)", m: 1, k: ["all tall", "tt", "dominant"] },
        { p: "F₁ selfed: Tt × Tt with a Punnett square giving TT, Tt, Tt, tt", m: 1, k: ["punnett", "tt × tt", "tt x tt"] },
        { p: "F₂ phenotypic ratio 3 tall : 1 dwarf", m: 1, k: ["3:1", "3 : 1"] },
        { p: "F₂ genotypic ratio 1 TT : 2 Tt : 1 tt", m: 1, k: ["1:2:1", "1 : 2 : 1"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>In F₁ all plants are tall. In F₂ the ratio is 3:1.</p>",
          notes: ["Correct F₁ result and phenotypic ratio: 2 marks.", "No cross shown, no gametes, no Punnett square, no genotypic ratio."] },
        good: { score: 4, text: "<p>P: TT × tt → F₁: Tt (all tall)</p><p>F₁ × F₁: Tt × Tt → TT, Tt, Tt, tt</p><p>Phenotypic ratio = 3 tall : 1 dwarf</p><p>Genotypic ratio = 1:2:1</p>",
          notes: ["Cross, F₁, F₂ and both ratios: 4 marks.", "Gametes are not shown, and the F₂ cross should be a Punnett square for full credit.", "Label the genotypic ratio: 1 TT : 2 Tt : 1 tt."] },
        full: { score: 5, text: "<p><span class=\"mp\" data-p=\"1\"><b>Parents (P):</b> TT (pure tall) × tt (pure dwarf). <b>Gametes:</b> T and t.</span></p><p><span class=\"mp\" data-p=\"2\"><b>F₁:</b> all <b>Tt</b>, all tall, because T (tall) is dominant over t (dwarf).</span></p><p><span class=\"mp\" data-p=\"3\"><b>F₁ × F₁:</b> Tt × Tt; gametes T, t from each parent.</span></p><table><tr><th>♂ / ♀</th><th>T</th><th>t</th></tr><tr><th>T</th><td>TT (tall)</td><td>Tt (tall)</td></tr><tr><th>t</th><td>Tt (tall)</td><td>tt (dwarf)</td></tr></table><p><span class=\"mp\" data-p=\"4\"><b>F₂ phenotypic ratio:</b> 3 tall : 1 dwarf</span></p><p><span class=\"mp\" data-p=\"5\"><b>F₂ genotypic ratio:</b> 1 TT : 2 Tt : 1 tt</span></p>",
          notes: ["Every stage labelled (P, gametes, F₁, F₂).", "Punnett square with phenotypes in each box.", "Both ratios written out with genotype labels."] }
      },
      mistakes: ["Skipping gametes.", "Mixing up phenotypic (3:1) and genotypic (1:2:1) ratios.", "No Punnett square in a 5-mark answer."],
      tip: "Phenotype = what you see (3:1). Genotype = the gene pairs (1:2:1)."
    }
  ]
});
