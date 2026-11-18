/* Answer Writing Lab · Class XII Chemistry. Original questions; every figure recomputed. */
NFWrite.register({
  slug: "xii-chem", cls: "XII", subject: "Chemistry",
  intro: "Chemistry answers are marked on formula, substitution with units, the final answer with units, and correct chemical reasoning. Equations must be balanced and conditions written on the arrow.",
  words: { 3: "40–70", 4: "60–90", 5: "working + answer" },
  rules: [
    { t: "Formula, substitution, answer", b: "Write the <b>formula</b>, substitute values <b>with units</b>, then the answer with the correct <b>unit and significant figures</b>." },
    { t: "Given–find layout", b: "In numericals, list <b>Given</b> data and <b>To find</b> first. It prevents unit slips (g vs kg, min vs s)." },
    { t: "Balanced equations", b: "Equations must be <b>balanced</b>, with conditions (catalyst, temperature) written on the arrow." },
    { t: "Reasoning words", b: "For 'give reason' questions, use the cause word: <b>due to</b> poor shielding, <b>because</b> of hydrogen bonding." },
    { t: "Distinguish in a table", b: "Use a table with a Basis column for SN1 vs SN2, order vs molecularity, etc." },
    { t: "Name the theory", b: "Coordination answers: state oxidation state, configuration, field strength, hybridisation, geometry and magnetic behaviour in that order." }
  ],
  questions: [
    {
      id: "q1", ch: "chem12-ch1", chTitle: "Solutions", marks: 3, cmd: "Calculate",
      q: "9 g of glucose (C₆H₁₂O₆, molar mass 180 g mol⁻¹) is dissolved in 250 g of water. Calculate the molality of the solution.",
      ask: "Moles of solute, mass of solvent in kg, and molality with unit mol kg⁻¹.",
      points: [
        { p: "Moles of glucose = 9 ÷ 180 = 0.05 mol", m: 1, k: ["0.05"] },
        { p: "Mass of water = 250 g = 0.25 kg", m: 1, k: ["0.25"] },
        { p: "Molality = 0.05 ÷ 0.25 = 0.2 mol kg⁻¹", m: 1, k: ["0.2"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Moles = 9/180 = 0.05. Molality = 0.05/250 = 0.0002</p>",
          notes: ["Moles are right: 1 mark.", "Molality uses the mass of solvent in <b>kilograms</b>: 250 g = 0.25 kg.", "No unit on the answer."] },
        good: { score: 2, text: "<p>Moles of glucose = 9 ÷ 180 = 0.05 mol</p><p>Molality = 0.05 ÷ 0.25 = 0.2</p>",
          notes: ["Moles and the value 0.2 are right, but the kg conversion is not shown and the unit is missing: 2 marks.", "Write 'Mass of water = 250 g = 0.25 kg' and end with 'mol kg⁻¹' (or 'm')."] },
        full: { score: 3, text: "<p><b>Given:</b> mass of glucose = 9 g; M = 180 g mol⁻¹; mass of water = 250 g</p><p><span class=\"mp\" data-p=\"1\">Moles of glucose, n = 9 g ÷ 180 g mol⁻¹ = <b>0.05 mol</b></span></p><p><span class=\"mp\" data-p=\"2\">Mass of solvent = 250 g = <b>0.25 kg</b></span></p><p><span class=\"mp\" data-p=\"3\">Molality, m = moles of solute ÷ mass of solvent (kg) = 0.05 ÷ 0.25 = <b>0.2 mol kg⁻¹</b></span></p>",
          notes: ["Given data first, then each step with units.", "Formula stated in words before substituting.", "Unit on the final answer."] }
      },
      mistakes: ["Using grams of solvent instead of kilograms.", "Using mass of solution instead of solvent (that is not molality).", "Leaving out units."],
      tip: "Molality = per kg of solvent; molarity = per litre of solution. Underline which one is asked."
    },
    {
      id: "q2", ch: "chem12-ch3", chTitle: "Chemical Kinetics", marks: 3, cmd: "Calculate",
      q: "The rate constant of a first order reaction is 0.0693 min⁻¹. Calculate (a) its half-life and (b) the time taken for 75% completion.",
      ask: "Half-life formula, its value, and recognising that 75% completion is two half-lives (or using the integrated rate law).",
      points: [
        { p: "Formula: t½ = 0.693 ÷ k (independent of initial concentration)", m: 1, k: ["0.693/k", "0.693 ÷ k", "0.693 / k"] },
        { p: "t½ = 0.693 ÷ 0.0693 = 10 min", m: 1, k: ["10 min"] },
        { p: "75% completion = 2 half-lives = 20 min (or t = 2.303/k × log 4 = 20 min)", m: 1, k: ["20 min"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>t½ = 0.693/k = 10. Time for 75% = 0.75 × ... = 7.5 min</p>",
          notes: ["Half-life value is right, unit missing: 1 mark.", "75% completion is not 75% of a half-life. 100 → 50 → 25 means 75% done after <b>two</b> half-lives."] },
        good: { score: 2, text: "<p>For a first order reaction, t½ = 0.693 ÷ k = 0.693 ÷ 0.0693 = 10 min.</p><p>Time for 75% completion = 1.5 × t½ = 15 min.</p>",
          notes: ["Formula and half-life right: 2 marks.", "75% completion needs two half-lives (50% then 25% left): 20 min."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\">(a) For a first order reaction, <b>t½ = 0.693 ÷ k</b></span><br><span class=\"mp\" data-p=\"2\">= 0.693 ÷ 0.0693 min⁻¹ = <b>10 min</b></span></p><p><span class=\"mp\" data-p=\"3\">(b) After 75% completion, 25% remains: [R]₀ → ½[R]₀ → ¼[R]₀ = two half-lives.<br>t = 2 × 10 min = <b>20 min</b><br>(Check: t = (2.303 ÷ k) log ([R]₀/[R]) = (2.303 ÷ 0.0693) × log 4 = 33.23 × 0.602 = 20 min.)</span></p>",
          notes: ["Formula and units at each step.", "Half-life reasoning shown, then checked with the integrated equation."] }
      },
      mistakes: ["Taking 75% completion as 1.5 half-lives.", "Forgetting the time unit.", "Using a zero-order half-life formula."],
      tip: "First order: 50% → 1 t½, 75% → 2 t½, 87.5% → 3 t½, 99.9% ≈ 10 t½."
    },
    {
      id: "q3", ch: "chem12-ch2", chTitle: "Electrochemistry", marks: 5, cmd: "Calculate",
      q: "Calculate the emf of the cell at 298 K: Zn(s) | Zn²⁺(0.1 M) || Cu²⁺(1 M) | Cu(s). Given E°cell = 1.10 V.",
      ask: "Cell reaction, n, the Nernst equation, correct substitution of the reaction quotient, and the answer in volts.",
      points: [
        { p: "Cell reaction: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)", m: 1, k: ["zn(s) + cu", "zn + cu"] },
        { p: "Number of electrons n = 2", m: 1, k: ["n = 2", "n=2"] },
        { p: "Nernst equation: E = E° − (0.059 ÷ n) log ([Zn²⁺] ÷ [Cu²⁺])", m: 1, k: ["0.059", "nernst"] },
        { p: "Substitution: E = 1.10 − 0.0295 × log (0.1 ÷ 1) = 1.10 − 0.0295 × (−1)", m: 1, k: ["0.0295", "log 0.1", "−1", "-1"] },
        { p: "E = 1.1295 V ≈ 1.13 V", m: 1, k: ["1.13", "1.1295"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>E = E° − 0.059 log (0.1/1) = 1.10 + 0.059 = 1.159 V</p>",
          notes: ["The Nernst structure is recognised: 1 mark.", "The factor is 0.059 ÷ <b>n</b>, and n = 2 here, so it is 0.0295.", "No cell reaction written."] },
        good: { score: 3, text: "<p>Cell reaction: Zn + Cu²⁺ → Zn²⁺ + Cu; n = 2</p><p>E = E° − (0.059/2) log ([Cu²⁺]/[Zn²⁺]) = 1.10 − 0.0295 log 10 = 1.10 − 0.0295 = 1.07 V</p>",
          notes: ["Reaction, n and the equation form earn 3 marks.", "The quotient is inverted: Q = [products]/[reactants] = [Zn²⁺]/[Cu²⁺] = 0.1. So log Q = −1 and E <b>rises</b> to 1.13 V.", "Sanity check: lower product concentration should increase the emf."] },
        full: { score: 5, text: "<p><span class=\"mp\" data-p=\"1\"><b>Cell reaction:</b> Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)</span></p><p><span class=\"mp\" data-p=\"2\">Electrons transferred, <b>n = 2</b></span></p><p><span class=\"mp\" data-p=\"3\"><b>Nernst equation (298 K):</b> E<sub>cell</sub> = E°<sub>cell</sub> − (0.059 ÷ n) log ([Zn²⁺] ÷ [Cu²⁺])</span></p><p><span class=\"mp\" data-p=\"4\">= 1.10 − (0.059 ÷ 2) log (0.1 ÷ 1) = 1.10 − 0.0295 × (−1)</span></p><p><span class=\"mp\" data-p=\"5\">= 1.10 + 0.0295 = <b>1.1295 V ≈ 1.13 V</b></span></p>",
          notes: ["Reaction first, so n and Q come from it.", "Q written as products over reactants.", "Sign of log 0.1 shown explicitly, and the answer has units."] }
      },
      mistakes: ["Forgetting to divide 0.059 by n.", "Inverting the reaction quotient.", "Including the concentrations of solids (Zn, Cu) in Q."],
      tip: "Write the balanced reaction first: n and Q both come straight from it."
    },
    {
      id: "q4", ch: "chem12-ch6", chTitle: "Haloalkanes and Haloarenes", marks: 3, cmd: "Distinguish",
      q: "Distinguish between S<sub>N</sub>1 and S<sub>N</sub>2 reactions on three bases.",
      ask: "A table: kinetics/steps, intermediate or transition state, and stereochemistry (or reactivity order).",
      points: [
        { p: "Kinetics: S<sub>N</sub>1 first order, two steps; S<sub>N</sub>2 second order, one step", m: 1, k: ["first order", "second order", "unimolecular", "bimolecular"] },
        { p: "Intermediate: carbocation in S<sub>N</sub>1; single transition state in S<sub>N</sub>2", m: 1, k: ["carbocation", "transition state"] },
        { p: "Stereochemistry: racemisation in S<sub>N</sub>1; inversion of configuration in S<sub>N</sub>2 (or reactivity 3° > 2° > 1° vs 1° > 2° > 3°)", m: 1, k: ["racemi", "inversion", "3°", "tertiary"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>SN1 is unimolecular and SN2 is bimolecular. SN1 is faster than SN2.</p>",
          notes: ["Molecularity is correct: 1 mark.", "'SN1 is faster' is not a valid general difference; speed depends on the substrate.", "No table."] },
        good: { score: 2, text: "<table><tr><th>Basis</th><th>S<sub>N</sub>1</th><th>S<sub>N</sub>2</th></tr><tr><td>Order</td><td>First order</td><td>Second order</td></tr><tr><td>Intermediate</td><td>Carbocation formed</td><td>No intermediate</td></tr><tr><td>Example</td><td>Tertiary halides</td><td>Primary</td></tr></table>",
          notes: ["Rows 1 and 2 are correct: 2 marks.", "Row 3 is unclear. Use stereochemistry: S<sub>N</sub>1 gives <b>racemisation</b>; S<sub>N</sub>2 gives <b>inversion</b>."] },
        full: { score: 3, text: "<table><tr><th>Basis</th><th>S<sub>N</sub>1</th><th>S<sub>N</sub>2</th></tr><tr><td>Kinetics and steps</td><td><span class=\"mp\" data-p=\"1\">First order (unimolecular); two steps</span></td><td>Second order (bimolecular); one step</td></tr><tr><td>Intermediate</td><td><span class=\"mp\" data-p=\"2\">Planar carbocation intermediate</span></td><td>No intermediate; a single transition state</td></tr><tr><td>Stereochemistry</td><td><span class=\"mp\" data-p=\"3\">Racemisation (attack from both faces)</span></td><td>Inversion of configuration (backside attack)</td></tr></table>",
          notes: ["Three precise bases.", "Brief reasons in brackets show understanding, not just recall."] }
      },
      mistakes: ["Saying one mechanism is always faster.", "Mixing up racemisation and inversion.", "Reversing the reactivity order of halides."],
      tip: "SN1 → 'one' molecule in the slow step, carbocation, racemisation, tertiary favoured."
    },
    {
      id: "q5", ch: "chem12-ch4", chTitle: "The d- and f-Block Elements", marks: 3, cmd: "Explain",
      q: "What is lanthanoid contraction? Give its cause and one consequence.",
      ask: "Definition, cause (poor shielding of 4f electrons) and one consequence.",
      points: [
        { p: "Definition: steady decrease in atomic and ionic radii from La to Lu", m: 1, k: ["decrease", "radii", "radius"] },
        { p: "Cause: poor (imperfect) shielding by 4f electrons, so effective nuclear charge increases", m: 1, k: ["shielding", "4f"] },
        { p: "Consequence: Zr and Hf have almost the same radii (similar properties, hard to separate)", m: 1, k: ["zr", "hf", "zirconium", "hafnium"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Lanthanoid contraction means the lanthanoids contract. It happens because of the f-orbitals.</p>",
          notes: ["Circular definition; 'f-orbitals' hints at the cause: 1 mark at most.", "Say <b>what</b> decreases (atomic and ionic radii) and <b>why</b> (poor shielding)."] },
        good: { score: 2, text: "<p>Lanthanoid contraction is the steady decrease in atomic and ionic radii from lanthanum to lutetium. It is due to the poor shielding effect of 4f electrons.</p>",
          notes: ["Definition and cause: 2 marks.", "A consequence is missing: e.g. Zr (4d) and Hf (5d) have nearly identical radii."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\"><b>Lanthanoid contraction</b> is the steady decrease in atomic and ionic (Ln³⁺) radii from lanthanum to lutetium.</span></p><p><span class=\"mp\" data-p=\"2\"><b>Cause:</b> electrons are added to 4f orbitals, which shield one another poorly from the nucleus; so effective nuclear charge increases and the electron cloud is pulled inward.</span></p><p><span class=\"mp\" data-p=\"3\"><b>Consequence:</b> elements of the second and third transition series in the same group have almost equal radii, e.g. <b>Zr (160 pm) and Hf (159 pm)</b>, so they have very similar properties and are hard to separate.</span></p>",
          notes: ["Definition names what shrinks and over which range.", "Cause explains the mechanism (shielding → effective nuclear charge).", "Consequence with a named example."] }
      },
      mistakes: ["Circular definition.", "Saying 4f electrons shield 'strongly'.", "Giving no example for the consequence."],
      tip: "Cause and consequence pair: poor 4f shielding → Zr ≈ Hf."
    },
    {
      id: "q6", ch: "chem12-ch5", chTitle: "Coordination Compounds", marks: 4, cmd: "Explain",
      q: "Using valence bond theory, explain the hybridisation, shape and magnetic behaviour of [Co(NH₃)₆]³⁺.",
      ask: "Oxidation state and configuration, effect of the ligand, hybridisation and geometry, and magnetic behaviour.",
      points: [
        { p: "Co is +3; Co³⁺ is 3d⁶", m: 1, k: ["+3", "3d6", "3d⁶", "d6", "d⁶"] },
        { p: "NH₃ acts as a strong field ligand here, so the 3d electrons pair up, leaving two 3d orbitals empty", m: 1, k: ["pair", "strong field"] },
        { p: "Hybridisation d²sp³ (inner orbital); octahedral shape", m: 1, k: ["d2sp3", "d²sp³", "octahedral"] },
        { p: "No unpaired electrons, so diamagnetic", m: 1, k: ["diamagnetic"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Co has 6 ligands so it is octahedral and sp³d² hybridised. It is paramagnetic.</p>",
          notes: ["Octahedral shape is right: 1 mark.", "With pairing of the 3d⁶ electrons, Co³⁺ uses inner 3d orbitals: <b>d²sp³</b>, not sp³d².", "All six electrons are paired, so the complex is <b>diamagnetic</b>."] },
        good: { score: 3, text: "<p>Oxidation state of Co = +3; Co³⁺ = 3d⁶. NH₃ causes pairing of electrons, so two 3d orbitals are free. Hybridisation is d²sp³ and the shape is octahedral.</p>",
          notes: ["Configuration, pairing and hybridisation/shape: 3 marks.", "The question also asks for <b>magnetic behaviour</b>: no unpaired electrons → diamagnetic."] },
        full: { score: 4, text: "<p><span class=\"mp\" data-p=\"1\">Oxidation state of Co: x + 6(0) = +3, so x = +3. Co³⁺: <b>[Ar] 3d⁶</b>.</span></p><p><span class=\"mp\" data-p=\"2\">NH₃ behaves as a strong field ligand here, so the six 3d electrons <b>pair up</b> in three orbitals, leaving two 3d orbitals empty.</span></p><p><span class=\"mp\" data-p=\"3\">Two 3d, one 4s and three 4p orbitals mix: <b>d²sp³ hybridisation</b> (inner orbital complex), giving an <b>octahedral</b> shape; six NH₃ donate lone pairs into these orbitals.</span></p><p><span class=\"mp\" data-p=\"4\">No unpaired electrons remain, so [Co(NH₃)₆]³⁺ is <b>diamagnetic</b>.</span></p>",
          notes: ["Follows the order: oxidation state → configuration → pairing → hybridisation → shape → magnetism.", "Names which orbitals hybridise.", "Every part of the question answered."] }
      },
      mistakes: ["Writing sp³d² (outer orbital) for this complex.", "Forgetting to work out the oxidation state first.", "Leaving out magnetic behaviour."],
      tip: "Inner orbital (d²sp³) complexes use (n−1)d; outer orbital (sp³d²) use nd. Pairing decides which."
    }
  ]
});
