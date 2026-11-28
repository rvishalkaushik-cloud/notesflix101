/* Revision Arena · Class XII Chemistry · Unit 1 · Solutions (Parts 1-3 + exercises). Original cases; every number recomputed. */
NFArena.register({
  id: "chem12-ch1", cls: "XII", subject: "Chemistry", unit: "Unit", num: "1",
  title: "Solutions",
  tagline: "Concentration terms, solubility and Henry's law, Raoult's law, ideal and non-ideal solutions, colligative properties and the van't Hoff factor.",
  notesLink: "../#chem12-ch1",
  concepts: {
    types: { n: "Types of solutions", s: "conc" },
    conc: { n: "Concentration terms", s: "conc" },
    tdep: { n: "Temperature dependence of concentration", s: "conc" },
    solub: { n: "Solubility of solids", s: "solub" },
    henry: { n: "Henry's law", s: "solub" },
    vp: { n: "Vapour pressure and Raoult's law", s: "raoult" },
    ideal: { n: "Ideal and non-ideal solutions, azeotropes", s: "raoult" },
    rlvp: { n: "Relative lowering of vapour pressure", s: "coll" },
    tb: { n: "Elevation in boiling point", s: "coll" },
    tfp: { n: "Depression in freezing point", s: "coll" },
    osm: { n: "Osmosis and osmotic pressure", s: "osm" },
    vant: { n: "van't Hoff factor and abnormal molar mass", s: "osm" }
  },
  overview: {
    text: "A <b>solution</b> is a homogeneous mixture. We first say <b>how much</b> is dissolved (concentration), then <b>how much can</b> dissolve (solubility, <b>Henry's law</b>), then how the solution's <b>vapour pressure</b> behaves (<b>Raoult's law</b>). Properties that depend only on the <b>number of solute particles</b> are <b>colligative</b>; they let us find <b>molar masses</b>, and the <b>van't Hoff factor</b> corrects for dissociation or association.",
    points: [
      "Mass %, ppm, mole fraction and <b>molality</b> do not change with temperature; <b>molarity</b> does.",
      "Henry's law: <b>p = K<sub>H</sub> x</b>; a larger K<sub>H</sub> means a <b>less</b> soluble gas.",
      "Raoult's law: <b>p<sub>A</sub> = p°<sub>A</sub> x<sub>A</sub></b>; deviations give <b>azeotropes</b>.",
      "Four colligative properties: <b>RLVP, ΔT<sub>b</sub>, ΔT<sub>f</sub>, π</b>; multiply by <b>i</b> for electrolytes."
    ],
    map: {
      center: "Solutions",
      branches: [
        { t: "Concentration", c: ["9 types of solutions", "Mass %, ppm, x, M, m", "Temperature dependence"] },
        { t: "Solubility", c: ["Like dissolves like", "Effect of temperature", "Henry's law"] },
        { t: "Raoult's law", c: ["Volatile components", "Ideal solutions", "Positive / negative deviation", "Azeotropes"] },
        { t: "Colligative", c: ["RLVP", "ΔTb = Kb m", "ΔTf = Kf m", "π = CRT", "van't Hoff factor i"] }
      ]
    }
  },
  sections: [
    {
      id: "conc", title: "Types and concentration", sub: "Saying exactly how much is dissolved", icon: "⚖️", color: "#EC4899",
      quick: [
        "A <b>solution</b> is a homogeneous mixture; the component in the largest amount is the <b>solvent</b>. A binary solution has two components.",
        "By the states of solute and solvent there are <b>9 types</b>; e.g. H₂ in palladium is <b>gas in solid</b>, amalgam of mercury with sodium is <b>liquid in solid</b>.",
        "<b>Mass %</b> = mass of component ÷ mass of solution × 100; <b>ppm</b> = parts per 10⁶ parts (for traces).",
        "<b>Mole fraction</b> x<sub>A</sub> = n<sub>A</sub> ÷ total moles; all mole fractions add to 1.",
        "<b>Molarity</b> M = mol of solute ÷ L of <b>solution</b>; <b>molality</b> m = mol of solute ÷ kg of <b>solvent</b>.",
        "Terms based only on mass (mass %, ppm, x, m) are <b>independent of temperature</b>; volume-based terms (M, volume %) change because liquids expand."
      ],
      table: { cap: "Concentration terms at a glance", head: ["Term", "Formula", "Changes with T?"], rows: [["Mass %", "w<sub>solute</sub>/w<sub>solution</sub> × 100", "No"], ["ppm", "parts/total × 10⁶", "No"], ["Mole fraction", "n<sub>A</sub>/Σn", "No"], ["Molarity (M)", "mol / L solution", "Yes"], ["Molality (m)", "mol / kg solvent", "No"]] },
      cards: [
        { t: "Worked: molarity and molality", tag: "numerical", b: "<p><b>0.5 mol NaOH in 250 mL of solution:</b> M = 0.5 ÷ 0.250 = <b>2 M</b>.</p><p><b>9 g glucose (M = 180) in 500 g water:</b> n = 0.05 mol; m = 0.05 ÷ 0.500 = <b>0.1 mol kg⁻¹</b>.</p>" },
        { t: "Worked: mole fraction", tag: "numerical", b: "<p>46 g ethanol (1 mol) with 72 g water (4 mol): x<sub>ethanol</sub> = 1 ÷ 5 = <b>0.2</b>, x<sub>water</sub> = <b>0.8</b>.</p>" },
        { t: "Memory hook", tag: "hook", b: "<p><b>Molari-T-y → soluTion volume (L); molaL-ity → soLvent mass (kg).</b></p>" }
      ],
      exam: ["Always state the unit: mol L⁻¹ for M, mol kg⁻¹ for m.", "'Which term is independent of temperature?' Molality (or mole fraction)."]
    },
    {
      id: "solub", title: "Solubility and Henry's law", sub: "How much can dissolve", icon: "🫧", color: "#7B4DFF",
      quick: [
        "<b>Solubility</b>: the maximum amount that dissolves in a given amount of solvent at a given temperature; at that point the solution is <b>saturated</b> (dynamic equilibrium).",
        "<b>Like dissolves like</b>: polar in polar (NaCl in water), non-polar in non-polar (naphthalene in benzene).",
        "Solids: if dissolution is <b>endothermic</b>, solubility <b>rises</b> with temperature; if <b>exothermic</b>, it falls (Le Chatelier). <b>Pressure has little effect</b>.",
        "<b>Henry's law</b>: at constant T, the solubility (mole fraction x) of a gas is proportional to its partial pressure: <b>p = K<sub>H</sub> x</b>.",
        "Larger K<sub>H</sub> ⇒ <b>lower</b> solubility. K<sub>H</sub> rises with temperature, so gases are <b>less soluble in warm water</b>.",
        "Uses: soda bottled under high CO₂ pressure; divers use <b>helium-diluted air</b> to avoid the bends; <b>anoxia</b> at high altitude."
      ],
      cards: [
        { t: "Worked: Henry's law", tag: "numerical", b: "<p>O₂ above water at partial pressure 0.2 bar, K<sub>H</sub> = 34.86 kbar = 34 860 bar.</p><p>x = p ÷ K<sub>H</sub> = 0.2 ÷ 34 860 = <b>5.74 × 10⁻⁶</b>.</p>" },
        { t: "Why does a warm soda gush?", tag: "why", b: "<p>Dissolving a gas is exothermic, so heating lowers solubility (higher K<sub>H</sub>). Opening the cap also drops the CO₂ partial pressure, so the drink is suddenly supersaturated and the extra gas bubbles out.</p>" },
        { t: "The bends", tag: "life", b: "<p>At depth, high pressure dissolves more N₂ in blood. Surfacing fast releases it as bubbles that block capillaries. Helium is much less soluble in blood, so tanks use air diluted with He (with O₂).</p>" }
      ],
      exam: ["State Henry's law in words <b>and</b> write p = K<sub>H</sub>x.", "Compare gases by K<sub>H</sub>: higher K<sub>H</sub>, lower solubility."]
    },
    {
      id: "raoult", title: "Raoult's law and deviations", sub: "Vapour pressure of solutions", icon: "♨️", color: "#12B5A6",
      quick: [
        "For a solution of two <b>volatile</b> liquids: <b>p<sub>A</sub> = p°<sub>A</sub>x<sub>A</sub></b>, p<sub>B</sub> = p°<sub>B</sub>x<sub>B</sub>, and total p = p<sub>A</sub> + p<sub>B</sub> (Dalton).",
        "The vapour is <b>richer in the more volatile</b> component: y<sub>A</sub> = p<sub>A</sub> ÷ p<sub>total</sub>.",
        "A non-volatile solute <b>lowers</b> the vapour pressure: p = p°<sub>A</sub>x<sub>A</sub>. Raoult's law is then a special case of Henry's law.",
        "<b>Ideal solution</b>: obeys Raoult's law at all compositions; ΔmixH = 0, ΔmixV = 0; A–B forces ≈ A–A and B–B (n-hexane + n-heptane, benzene + toluene).",
        "<b>Positive deviation</b>: A–B forces weaker; p higher; ΔmixH > 0, ΔmixV > 0 (ethanol + acetone, CS₂ + acetone) → <b>minimum-boiling azeotrope</b> (ethanol–water, ~95% ethanol by volume).",
        "<b>Negative deviation</b>: A–B forces stronger (e.g. H-bonds); p lower; ΔmixH < 0, ΔmixV < 0 (chloroform + acetone, HNO₃ + water) → <b>maximum-boiling azeotrope</b> (~68% HNO₃ by mass)."
      ],
      table: { cap: "Ideal vs non-ideal", head: ["Feature", "Ideal", "Positive dev.", "Negative dev."], rows: [["A–B forces", "≈ A–A, B–B", "Weaker", "Stronger"], ["ΔmixH", "0", "> 0", "< 0"], ["ΔmixV", "0", "> 0", "< 0"], ["Azeotrope", "None", "Minimum boiling", "Maximum boiling"]] },
      cards: [
        { t: "Worked: Raoult's law", tag: "numerical", b: "<p>p°<sub>A</sub> = 80 kPa, p°<sub>B</sub> = 40 kPa, x<sub>A</sub> = 0.25.</p><p>p<sub>A</sub> = 80 × 0.25 = 20 kPa; p<sub>B</sub> = 40 × 0.75 = 30 kPa; <b>p = 50 kPa</b>.</p><p>Vapour: y<sub>A</sub> = 20 ÷ 50 = <b>0.4</b> (richer in A than the liquid's 0.25).</p>" },
        { t: "Azeotrope", tag: "def", b: "<p>A mixture that boils at constant temperature with liquid and vapour of the <b>same composition</b>, so it cannot be separated by fractional distillation.</p>" },
        { t: "Why does chloroform + acetone deviate negatively?", tag: "why", b: "<p>Chloroform's H forms a <b>hydrogen bond</b> with acetone's O. A–B attraction is stronger than in the pure liquids, so fewer molecules escape: lower vapour pressure, heat released.</p>" }
      ],
      exam: ["For deviations, write all three: forces, sign of ΔmixH and ΔmixV, and an example.", "Draw p vs x graphs: straight lines for ideal; curve above or below for deviations."]
    },
    {
      id: "coll", title: "Colligative properties", sub: "Depend on the number of particles", icon: "🌡️", color: "#FF8A1F",
      quick: [
        "<b>Colligative</b> properties depend on the <b>number</b> of solute particles, not their nature: RLVP, ΔT<sub>b</sub>, ΔT<sub>f</sub> and π.",
        "<b>Relative lowering of vapour pressure</b>: (p° − p)/p° = x<sub>solute</sub> ≈ n<sub>2</sub>/n<sub>1</sub> (dilute solution).",
        "<b>Elevation in boiling point</b>: ΔT<sub>b</sub> = K<sub>b</sub>m; K<sub>b</sub> (ebullioscopic constant) for water = 0.52 K kg mol⁻¹.",
        "<b>Depression in freezing point</b>: ΔT<sub>f</sub> = K<sub>f</sub>m; K<sub>f</sub> (cryoscopic constant) for water = 1.86 K kg mol⁻¹.",
        "Molar mass from ΔT: <b>M<sub>2</sub> = K × w<sub>2</sub> × 1000 ÷ (ΔT × w<sub>1</sub>)</b> (w in grams).",
        "Uses: antifreeze (ethylene glycol) in radiators; salt spread on icy roads."
      ],
      cards: [
        { t: "Worked: boiling point", tag: "numerical", b: "<p>6 g urea (M = 60) in 200 g water: n = 0.1, m = 0.1 ÷ 0.200 = 0.5 mol kg⁻¹.</p><p>ΔT<sub>b</sub> = 0.52 × 0.5 = <b>0.26 K</b>, so the solution boils at <b>373.41 K</b> (100.26 °C).</p>" },
        { t: "Worked: molar mass from ΔT<sub>f</sub>", tag: "numerical", b: "<p>1.0 g of a non-electrolyte in 50 g benzene lowers the freezing point by 0.40 K; K<sub>f</sub> = 5.12 K kg mol⁻¹.</p><p>M = 5.12 × 1.0 × 1000 ÷ (0.40 × 50) = <b>256 g mol⁻¹</b>.</p>" },
        { t: "Worked: RLVP", tag: "numerical", b: "<p>18 g glucose (0.1 mol) in 180 g water (10 mol): x<sub>solute</sub> = 0.1 ÷ 10.1 ≈ <b>0.0099</b>. With p° = 3.17 kPa, p ≈ 3.17 × (1 − 0.0099) ≈ <b>3.14 kPa</b>.</p>" }
      ],
      exam: ["Write the formula, then convert grams to moles and grams of solvent to kg.", "ΔT is the same in K and °C."]
    },
    {
      id: "osm", title: "Osmosis and the van't Hoff factor", sub: "Pressure across a membrane, and real particles", icon: "🧫", color: "#2F6BFF",
      quick: [
        "<b>Osmosis</b>: net flow of <b>solvent</b> through a semipermeable membrane from the <b>dilute</b> (or pure) side to the concentrated side.",
        "<b>Osmotic pressure</b> π = the extra pressure that just stops osmosis: <b>π = CRT</b> (C in mol L⁻¹, R = 0.083 L bar K⁻¹ mol⁻¹). Best method for <b>polymers and proteins</b> (measured at room temperature, large value).",
        "<b>Isotonic</b> solutions have equal π (0.9% w/V NaCl ≈ blood). In a <b>hypertonic</b> solution cells shrink; in a <b>hypotonic</b> one they swell.",
        "<b>Reverse osmosis</b>: applying pressure greater than π pushes solvent from the concentrated side: used to <b>desalinate</b> sea water (cellulose acetate membrane).",
        "<b>van't Hoff factor</b> i = observed colligative property ÷ calculated = normal molar mass ÷ abnormal molar mass. Dissociation: i > 1 (KCl ≈ 2, K₂SO₄ ≈ 3); association: i < 1 (ethanoic acid dimer in benzene ≈ 0.5).",
        "With i: ΔT<sub>b</sub> = iK<sub>b</sub>m, ΔT<sub>f</sub> = iK<sub>f</sub>m, π = iCRT. Degree of dissociation α = (i − 1) ÷ (n − 1)."
      ],
      cards: [
        { t: "Worked: osmotic pressure", tag: "numerical", b: "<p>0.1 M sucrose at 300 K: π = 0.1 × 0.083 × 300 = <b>2.49 bar</b>.</p>" },
        { t: "Worked: molar mass of a protein", tag: "numerical", b: "<p>2 g protein in 1 L of solution gives π = 2.49 × 10⁻³ bar at 300 K.</p><p>M = wRT ÷ (πV) = 2 × 0.083 × 300 ÷ (2.49 × 10⁻³ × 1) = <b>20 000 g mol⁻¹</b>.</p>" },
        { t: "Worked: degree of dissociation", tag: "numerical", b: "<p>CaCl₂ (gives n = 3 ions) shows i = 2.47. α = (2.47 − 1) ÷ (3 − 1) = <b>0.735</b> (73.5%).</p>" }
      ],
      exam: ["Say <b>solvent</b> moves in osmosis, never solute.", "For electrolytes always multiply by i; for association i < 1."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "types", q: "Name the type of solution: hydrogen in palladium.", a: "Gas in solid (solid solution)." },
    { k: "Formula", c: "conc", q: "Molality?", a: "Moles of solute ÷ mass of solvent in kg (mol kg⁻¹)." },
    { k: "Formula", c: "conc", q: "Molarity?", a: "Moles of solute ÷ volume of solution in L (mol L⁻¹)." },
    { k: "Fact", c: "tdep", q: "Which concentration terms do not change with temperature?", a: "Mass %, ppm, mole fraction and molality (mass-based)." },
    { k: "Rule", c: "solub", q: "Dissolution of a salt is endothermic. Effect of heating on solubility?", a: "Solubility increases (Le Chatelier)." },
    { k: "Law", c: "henry", q: "State Henry's law.", a: "At constant temperature, the mole fraction of a gas in solution is proportional to its partial pressure: p = K<sub>H</sub>x." },
    { k: "Fact", c: "henry", q: "Larger K<sub>H</sub> means the gas is…", a: "Less soluble." },
    { k: "Law", c: "vp", q: "State Raoult's law for volatile liquids.", a: "The partial vapour pressure of each component equals its pure vapour pressure × its mole fraction." },
    { k: "Definition", c: "ideal", q: "Ideal solution: ΔmixH and ΔmixV?", a: "Both zero." },
    { k: "Example", c: "ideal", q: "An example of negative deviation.", a: "Chloroform + acetone (or nitric acid + water)." },
    { k: "Definition", c: "ideal", q: "Azeotrope?", a: "A constant-boiling mixture whose liquid and vapour have the same composition." },
    { k: "Definition", c: "rlvp", q: "Colligative property?", a: "Depends only on the number of solute particles, not their nature." },
    { k: "Formula", c: "rlvp", q: "Relative lowering of vapour pressure equals…", a: "The mole fraction of the solute." },
    { k: "Value", c: "tb", q: "K<sub>b</sub> of water?", a: "0.52 K kg mol⁻¹." },
    { k: "Value", c: "tfp", q: "K<sub>f</sub> of water?", a: "1.86 K kg mol⁻¹." },
    { k: "Formula", c: "osm", q: "Osmotic pressure formula?", a: "π = CRT (× i for electrolytes)." },
    { k: "Use", c: "osm", q: "One use of reverse osmosis.", a: "Desalination of sea water." },
    { k: "Formula", c: "vant", q: "van't Hoff factor for complete dissociation of K₂SO₄?", a: "i = 3." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "The school canteen's lemonade",
      text: "<p>The canteen makes lemonade by dissolving <b>34.2 g</b> of sucrose (M = 342 g mol⁻¹) in <b>500 g</b> of water. The final volume of lemonade is <b>0.52 L</b>. <b>Ira</b> says the molarity and molality must be the same number.</p>",
      qs: [
        { q: "Calculate the molality of sucrose.", m: 1, type: "Numerical", c: "conc", hint: "Moles ÷ kg of water.", points: [{ p: "n = 34.2/342 = 0.1 mol; m = 0.1/0.5 = <b>0.2 mol kg⁻¹</b>", m: 1, k: ["0.2"] }], structure: ["Moles, then divide by kg of solvent."], model: "<p>n = 34.2 ÷ 342 = 0.1 mol; molality = 0.1 ÷ 0.500 kg = <b>0.2 mol kg⁻¹</b>.</p>" },
        { q: "Calculate the molarity.", m: 1, type: "Numerical", c: "conc", hint: "Moles ÷ L of solution.", points: [{ p: "M = 0.1/0.52 ≈ <b>0.19 mol L⁻¹</b>", m: 1, k: ["0.19"] }], structure: ["Use the solution volume."], model: "<p>Molarity = 0.1 ÷ 0.52 L ≈ <b>0.19 mol L⁻¹</b>.</p>" },
        { q: "Is Ira right? Which value will stay the same if the lemonade warms up?", m: 2, type: "Explain", c: "tdep", hint: "Volume vs mass.", points: [{ p: "Not the same: molarity uses solution volume, molality uses solvent mass", m: 1, k: ["volume", "mass"] }, { p: "Molality stays the same on warming (masses do not change)", m: 1, k: ["molality"] }], structure: ["Difference, then temperature."], model: "<p>No. Molarity divides by the <b>volume of solution</b> (0.52 L), molality by the <b>mass of solvent</b> (0.5 kg), so they differ. On warming, the volume expands and molarity falls, but <b>molality stays the same</b> because masses do not change.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "Fish tank in summer",
      text: "<p><b>Kabir</b>'s goldfish gasp at the surface on hot afternoons, though the air pump runs all day. His sister says warm water holds less oxygen. At 293 K, K<sub>H</sub> for O₂ is 34.86 kbar.</p>",
      qs: [
        { q: "Name the law that relates gas solubility to pressure and state it.", m: 2, type: "State the law", c: "henry", hint: "p = K<sub>H</sub>x.", points: [{ p: "Henry's law", m: 1, k: ["henry"] }, { p: "At constant T, mole fraction of gas ∝ partial pressure (p = K<sub>H</sub>x)", m: 1, k: ["partial pressure", "proportional"] }], structure: ["Name, then statement."], model: "<p><b>Henry's law</b>: at constant temperature, the mole fraction of a gas dissolved in a liquid is directly proportional to its partial pressure above the liquid, <b>p = K<sub>H</sub>x</b>.</p>" },
        { q: "Why does warm water hold less oxygen? Find the mole fraction of O₂ when its partial pressure is 0.2 bar.", m: 2, type: "Explain + numerical", c: "henry", hint: "K<sub>H</sub> rises with T; x = p/K<sub>H</sub>.", points: [{ p: "Dissolving gas is exothermic / K<sub>H</sub> increases with temperature, so solubility falls", m: 1, k: ["exothermic", "increases", "k"] }, { p: "x = 0.2/34 860 = 5.74 × 10⁻⁶", m: 1, k: ["5.74"] }], structure: ["Reason, then calculation."], model: "<p>Gas dissolution is exothermic and K<sub>H</sub> <b>increases with temperature</b>, so at a given pressure less O₂ dissolves in warm water.</p><p>x = p ÷ K<sub>H</sub> = 0.2 ÷ 34 860 = <b>5.74 × 10⁻⁶</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Two solvents in the lab",
      text: "<p><b>Meher</b> mixes liquid A (p° = 80 kPa) and liquid B (p° = 40 kPa) so that x<sub>A</sub> = 0.25. In a second beaker she mixes acetone with chloroform and notices the beaker gets <b>warm</b> and the total volume is slightly <b>less</b> than the sum of the two volumes.</p>",
      qs: [
        { q: "If A and B form an ideal solution, find the total vapour pressure and the mole fraction of A in the vapour.", m: 2, type: "Numerical", c: "vp", hint: "Raoult + Dalton.", points: [{ p: "p<sub>A</sub> = 20 kPa, p<sub>B</sub> = 30 kPa, total 50 kPa", m: 1, k: ["50"] }, { p: "y<sub>A</sub> = 20/50 = 0.4", m: 1, k: ["0.4"] }], structure: ["Partial pressures, total, then vapour fraction."], model: "<p>p<sub>A</sub> = 80 × 0.25 = 20 kPa; p<sub>B</sub> = 40 × 0.75 = 30 kPa; <b>p<sub>total</sub> = 50 kPa</b>.</p><p>y<sub>A</sub> = 20 ÷ 50 = <b>0.4</b>.</p>" },
        { q: "What type of deviation does the acetone–chloroform mixture show? Give two reasons from her observations and the cause.", m: 3, type: "Identify + explain", c: "ideal", hint: "Warm, smaller volume.", points: [{ p: "Negative deviation from Raoult's law", m: 1, k: ["negative"] }, { p: "Warm ⇒ ΔmixH < 0; smaller volume ⇒ ΔmixV < 0", m: 1, k: ["δmixh", "heat", "volume", "< 0"] }, { p: "H-bond between chloroform H and acetone O makes A–B forces stronger", m: 1, k: ["hydrogen", "h-bond"] }], structure: ["Name, evidence, cause."], model: "<p>It shows <b>negative deviation</b>. Heat is released (<b>ΔmixH &lt; 0</b>) and the volume decreases (<b>ΔmixV &lt; 0</b>). The cause is a <b>hydrogen bond</b> between the H of chloroform and the O of acetone, so A–B attractions are stronger than A–A and B–B.</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "Winter on the hill road",
      text: "<p>A hill town spreads salt on icy roads and adds <b>ethylene glycol</b> to car radiators. <b>Sana</b> dissolves 31 g of ethylene glycol (M = 62 g mol⁻¹) in 500 g of water (K<sub>f</sub> = 1.86 K kg mol⁻¹, K<sub>b</sub> = 0.52 K kg mol⁻¹).</p>",
      qs: [
        { q: "Find the freezing point of her solution.", m: 2, type: "Numerical", c: "tfp", hint: "m first.", points: [{ p: "n = 0.5 mol, m = 1 mol kg⁻¹", m: 1, k: ["1"] }, { p: "ΔT<sub>f</sub> = 1.86 K, freezing point = 271.29 K (−1.86 °C)", m: 1, k: ["1.86", "271.29"] }], structure: ["Molality, ΔTf, then the new freezing point."], model: "<p>n = 31 ÷ 62 = 0.5 mol; m = 0.5 ÷ 0.500 = 1 mol kg⁻¹.</p><p>ΔT<sub>f</sub> = 1.86 × 1 = 1.86 K, so the solution freezes at 273.15 − 1.86 = <b>271.29 K (−1.86 °C)</b>.</p>" },
        { q: "Find its boiling point, and explain why salt works better per mole than glycol on roads.", m: 2, type: "Numerical + reason", c: "vant", hint: "i for NaCl.", points: [{ p: "ΔT<sub>b</sub> = 0.52 K, boiling point 373.67 K", m: 1, k: ["0.52", "373.67"] }, { p: "NaCl dissociates into 2 ions (i ≈ 2), so twice the particles, twice the depression", m: 1, k: ["ions", "i", "2", "dissociat"] }], structure: ["Calculation, then particles."], model: "<p>ΔT<sub>b</sub> = 0.52 × 1 = 0.52 K, so it boils at <b>373.67 K</b>.</p><p>Colligative effects depend on the number of particles. NaCl splits into Na⁺ and Cl⁻ (<b>i ≈ 2</b>), so one mole of salt gives about twice the freezing-point depression of one mole of glycol (i = 1).</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "The protein and the saline drip",
      text: "<p>A research lab dissolves <b>2 g</b> of a new protein in water to make <b>1 L</b> of solution. Its osmotic pressure at 300 K is <b>2.49 × 10⁻³ bar</b> (R = 0.083 L bar K⁻¹ mol⁻¹). In the hospital next door, a nurse warns that red blood cells placed in 2% salt solution would shrink, but in 0.9% saline they stay normal.</p>",
      qs: [
        { q: "Calculate the molar mass of the protein. Why is osmotic pressure preferred over freezing-point depression here?", m: 3, type: "Numerical + reason", c: "osm", hint: "M = wRT/(πV).", points: [{ p: "M = 2 × 0.083 × 300 / (2.49 × 10⁻³ × 1)", m: 1, k: ["0.083", "300"] }, { p: "M = 20 000 g mol⁻¹", m: 1, k: ["20000", "20 000", "2 × 10⁴"] }, { p: "π is measurable at room temperature and is large even for tiny molar concentrations; proteins are unstable at higher temperatures", m: 1, k: ["room", "temperature", "large", "unstable"] }], structure: ["Formula, substitution, answer, reason."], model: "<p>π = (w/M)RT ÷ V ⇒ M = wRT ÷ (πV) = 2 × 0.083 × 300 ÷ (2.49 × 10⁻³ × 1) = <b>20 000 g mol⁻¹</b>.</p><p>For such a large molar mass, ΔT<sub>f</sub> would be too tiny to measure, while π is measurable and is taken at <b>room temperature</b>, so the protein is not damaged by heating or cooling.</p>" },
        { q: "Explain the nurse's warning using the terms isotonic and hypertonic.", m: 2, type: "Explain", c: "osm", hint: "Which way does water move?", points: [{ p: "0.9% saline is isotonic with blood: no net water flow, cells normal", m: 1, k: ["isotonic"] }, { p: "2% is hypertonic: water leaves the cells by osmosis, so they shrink", m: 1, k: ["hypertonic", "shrink", "leaves"] }], structure: ["Isotonic case, hypertonic case."], model: "<p>0.9% saline is <b>isotonic</b> with blood plasma, so there is no net movement of water and cells keep their shape. A 2% solution is <b>hypertonic</b>; water moves out of the cells by osmosis and they <b>shrink</b>.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "types", q: "Sodium amalgam is a solution of the type:", o: ["Liquid in solid", "Solid in liquid", "Gas in solid", "Solid in solid"], a: 0, hint: "Mercury is the liquid.", why: "Mercury (liquid) dissolved in sodium (solid): <b>liquid in solid</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "conc", q: "0.5 mol NaOH is dissolved to make 250 mL of solution. Its molarity is:", o: ["2 M", "0.5 M", "0.125 M", "1 M"], a: 0, hint: "Divide by litres.", why: "0.5 ÷ 0.25 = <b>2 M</b>." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "tdep", q: "Which concentration term changes with temperature?", o: ["Molarity", "Molality", "Mole fraction", "Mass percentage"], a: 0, hint: "Depends on volume.", why: "<b>Molarity</b> uses volume, which changes with temperature." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "henry", q: "At the same temperature, K<sub>H</sub> values (kbar) are: gas P 1.67, gas Q 34.86, gas R 76.48. The most soluble gas is:", o: ["P", "Q", "R", "All equally"], a: 0, hint: "Inverse relation.", why: "Smallest K<sub>H</sub> ⇒ <b>most soluble</b>: P." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "ideal", q: "Which mixture shows positive deviation from Raoult's law?", o: ["Ethanol + acetone", "Chloroform + acetone", "Benzene + toluene", "Nitric acid + water"], a: 0, hint: "Weaker A–B forces.", why: "Ethanol's H-bonds are broken by acetone: <b>positive deviation</b>." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "vant", q: "The van't Hoff factor for K₄[Fe(CN)₆], assuming complete dissociation, is:", o: ["5", "4", "2", "11"], a: 0, hint: "Count ions.", why: "4 K⁺ + 1 [Fe(CN)₆]⁴⁻ = <b>5</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "tfp", q: "Which 0.1 m aqueous solution has the lowest freezing point?", o: ["Al₂(SO₄)₃", "K₂SO₄", "NaCl", "Glucose"], a: 0, hint: "Largest i.", why: "Al₂(SO₄)₃ gives 5 ions: largest ΔT<sub>f</sub>, <b>lowest freezing point</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "osm", q: "0.1 M glucose and 0.1 M NaCl are separated by a semipermeable membrane. Water will flow:", o: ["From glucose to NaCl", "From NaCl to glucose", "Neither way", "Both ways equally"], a: 0, hint: "NaCl gives more particles.", why: "NaCl (i ≈ 2) has higher π, so water moves <b>into the NaCl side</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "tdep", q: "Molality of a solution does not change with temperature.", r: "Molality is defined using the mass of the solvent.", a: 0, hint: "Mass vs volume.", why: "Both true, and R explains A." },
    { id: "q10", t: "ar", d: "C", m: 1, c: "ideal", q: "A solution of chloroform and acetone forms a minimum-boiling azeotrope.", r: "Chloroform and acetone show negative deviation from Raoult's law.", a: 3, hint: "Negative deviation → which azeotrope?", why: "A is false (it forms a <b>maximum</b>-boiling azeotrope); R is true." },
    { id: "q11", t: "ar", d: "M", m: 1, c: "osm", q: "Osmotic pressure is preferred for finding molar masses of proteins.", r: "Osmotic pressure is measured at room temperature and is large even for dilute solutions.", a: 0, hint: "Why π?", why: "Both true, and R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "solub", q: "Pressure has a large effect on the solubility of solids in liquids.", a: false, hint: "Incompressible.", why: "False: solids and liquids are nearly incompressible, so pressure has <b>little</b> effect." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "rlvp", q: "Relative lowering of vapour pressure equals the mole fraction of the solute.", a: true, hint: "Raoult.", why: "True: (p° − p)/p° = x<sub>solute</sub>." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "vant", q: "Ethanoic acid in benzene has a van't Hoff factor greater than 1.", a: false, hint: "Dimer.", why: "False: it <b>associates</b> into dimers, so i ≈ 0.5." },
    { id: "q15", t: "match", d: "E", m: 4, c: "tb", q: "Match the term with its symbol or value.", pairs: [["Ebullioscopic constant of water", "0.52 K kg mol⁻¹"], ["Cryoscopic constant of water", "1.86 K kg mol⁻¹"], ["Gas constant for π = CRT", "0.083 L bar K⁻¹ mol⁻¹"], ["Isotonic saline", "0.9% (w/V) NaCl"]], hint: "Kb is the smaller water constant.", why: "Each value belongs to one term." },
    { id: "q16", t: "match", d: "M", m: 4, c: "ideal", q: "Match the mixture with its behaviour.", pairs: [["n-Hexane + n-heptane", "Nearly ideal"], ["Acetone + carbon disulphide", "Positive deviation"], ["Nitric acid + water", "Negative deviation"], ["Ethanol + water (95%)", "Minimum-boiling azeotrope"]], hint: "Similar molecules are ideal.", why: "Similar forces → ideal; weaker A–B → positive; stronger → negative." },
    { id: "q17", t: "match", d: "M", m: 4, c: "henry", q: "Match the situation with the idea behind it.", pairs: [["Soda bottled under high CO₂ pressure", "Henry's law"], ["Helium-diluted air for divers", "Avoiding the bends"], ["Weakness at high altitude", "Anoxia"], ["Sea water made drinkable", "Reverse osmosis"]], hint: "Pressure and gases.", why: "Each pair links an application to its principle." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "conc", q: "Moles of solute per kilogram of solvent is called ______.", acc: ["molality"], hint: "m", why: "<b>Molality</b>." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "ideal", q: "A constant-boiling mixture is called an ______.", acc: ["azeotrope", "azeotropic mixture"], hint: "a…", why: "<b>Azeotrope</b>." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "tb", q: "6 g of urea (M = 60) in 200 g of water raises the boiling point by ______ K (K<sub>b</sub> = 0.52).", acc: ["0.26"], hint: "m = 0.5.", why: "0.52 × 0.5 = <b>0.26 K</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "osm", q: "The osmotic pressure of 0.1 M sucrose at 300 K is ______ bar (R = 0.083).", acc: ["2.49"], hint: "CRT.", why: "0.1 × 0.083 × 300 = <b>2.49 bar</b>." },
    { id: "q22", t: "short", d: "E", m: 1, c: "osm", q: "In osmosis, does the solvent or the solute pass through the membrane?", acc: ["solvent"], hint: "Semipermeable.", why: "The <b>solvent</b>." },
    { id: "q23", t: "short", d: "M", m: 1, c: "vant", q: "What is the van't Hoff factor of K₂SO₄ if it dissociates completely?", acc: ["3"], hint: "2 K⁺ + SO₄²⁻.", why: "<b>3</b>." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "henry", q: "State Henry's law and give two of its applications.", hint: "Law + soda + divers / altitude.", why: "", points: [{ p: "Statement: at constant T, mole fraction of gas ∝ partial pressure (p = K<sub>H</sub>x)", m: 1, k: ["partial pressure", "proportional"] }, { p: "Application 1 (e.g. soft drinks bottled under high CO₂ pressure)", m: 1, k: ["soda", "soft", "co2", "co₂"] }, { p: "Application 2 (e.g. divers use He-diluted air / anoxia at altitude)", m: 1, k: ["diver", "helium", "bends", "altitude", "anoxia"] }], model: "<p><b>Henry's law:</b> at constant temperature, the mole fraction of a gas in solution is proportional to its partial pressure: p = K<sub>H</sub>x.</p><p>(i) Soft drinks are sealed under high CO₂ pressure to dissolve more gas.</p><p>(ii) Scuba divers breathe air diluted with helium to avoid the bends.</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "tfp", q: "1.0 g of a non-electrolyte dissolved in 50 g of benzene lowers its freezing point by 0.40 K. Find the molar mass (K<sub>f</sub> for benzene = 5.12 K kg mol⁻¹).", hint: "M = K<sub>f</sub>w₂ × 1000/(ΔT<sub>f</sub>w₁).", why: "", points: [{ p: "Correct formula", m: 1, k: ["kf", "1000"] }, { p: "Substitution: 5.12 × 1.0 × 1000 / (0.40 × 50)", m: 1, k: ["5.12", "0.40", "50"] }, { p: "M = 256 g mol⁻¹", m: 1, k: ["256"] }], model: "<p>M<sub>2</sub> = K<sub>f</sub> × w<sub>2</sub> × 1000 ÷ (ΔT<sub>f</sub> × w<sub>1</sub>) = 5.12 × 1.0 × 1000 ÷ (0.40 × 50) = <b>256 g mol⁻¹</b>.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "ideal", q: "Distinguish between ideal solutions and non-ideal solutions showing positive deviation on four points.", hint: "Raoult, ΔH, ΔV, forces.", why: "", points: [{ p: "Raoult's law obeyed at all compositions vs not obeyed (p higher)", m: 1, k: ["raoult"] }, { p: "ΔmixH = 0 vs > 0", m: 1, k: ["δmixh", "enthalpy", "heat"] }, { p: "ΔmixV = 0 vs > 0", m: 1, k: ["volume"] }, { p: "A–B forces equal vs weaker; example of each", m: 1, k: ["forces", "weaker", "hexane", "acetone", "ethanol"] }], model: "<p>(i) <b>Raoult's law:</b> obeyed at all compositions vs vapour pressure higher than predicted.</p><p>(ii) <b>ΔmixH:</b> zero vs positive (heat absorbed).</p><p>(iii) <b>ΔmixV:</b> zero vs positive (expansion).</p><p>(iv) <b>Forces:</b> A–B ≈ A–A, B–B (n-hexane + n-heptane) vs A–B weaker (ethanol + acetone).</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "vant", q: "What is the van't Hoff factor? CaCl₂ in water shows i = 2.47. Find its degree of dissociation, and state what i would be for a substance that dimerises completely.", hint: "α = (i − 1)/(n − 1).", why: "", points: [{ p: "Definition: ratio of observed to calculated colligative property (or normal/abnormal molar mass)", m: 1, k: ["observed", "calculated", "normal", "abnormal"] }, { p: "n = 3 for CaCl₂", m: 1, k: ["3"] }, { p: "α = (2.47 − 1)/(3 − 1) = 0.735", m: 1, k: ["0.735", "73.5"] }, { p: "Complete dimerisation: i = 0.5", m: 1, k: ["0.5"] }], model: "<p><b>van't Hoff factor</b> i = observed colligative property ÷ calculated (= normal molar mass ÷ abnormal molar mass).</p><p>CaCl₂ → Ca²⁺ + 2Cl⁻, n = 3: α = (2.47 − 1) ÷ (3 − 1) = <b>0.735</b> (73.5%).</p><p>Complete dimerisation halves the particles: <b>i = 0.5</b>.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "rlvp", q: "(a) What are colligative properties? Name all four. (b) Show that relative lowering of vapour pressure equals the mole fraction of the solute. (c) 18 g glucose is dissolved in 180 g water at a temperature where p° = 3.17 kPa. Find the vapour pressure of the solution.", hint: "Raoult for the solvent.", why: "", points: [{ p: "Definition: depend on number of particles, not nature", m: 1, k: ["number", "particles"] }, { p: "Names: RLVP, elevation of b.p., depression of f.p., osmotic pressure", m: 1, k: ["boiling", "freezing", "osmotic"] }, { p: "p = p°x₁, so p° − p = p°(1 − x₁) = p°x₂", m: 1, k: ["p°x", "1 −"] }, { p: "(p° − p)/p° = x₂", m: 1, k: ["x2", "x₂", "mole fraction"] }, { p: "n₂ = 0.1, n₁ = 10, x₂ = 0.1/10.1 ≈ 0.0099", m: 1, k: ["0.0099", "10.1"] }, { p: "p ≈ 3.17 × 0.9901 ≈ 3.14 kPa", m: 1, k: ["3.14"] }], model: "<p>(a) Colligative properties depend only on the <b>number of solute particles</b>: relative lowering of vapour pressure, elevation in boiling point, depression in freezing point, osmotic pressure.</p><p>(b) For a non-volatile solute, p = p°x₁. So p° − p = p°(1 − x₁) = p°x₂ and <b>(p° − p)/p° = x₂</b>.</p><p>(c) n₂ = 18 ÷ 180 = 0.1 mol; n₁ = 180 ÷ 18 = 10 mol; x₂ = 0.1 ÷ 10.1 ≈ 0.0099. p = 3.17 × (1 − 0.0099) ≈ <b>3.14 kPa</b>.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "tfp", q: "In very cold places, people pour ethylene glycol into car radiators. This works because the solution has a:", o: ["Lower freezing point", "Higher vapour pressure", "Lower boiling point", "Lower osmotic pressure"], a: 0, hint: "Antifreeze.", why: "Depression in freezing point: <b>lower freezing point</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "osm", q: "Raisins placed in plain water swell after some hours. This is because water moves:", o: ["Into the raisins by osmosis", "Out of the raisins by osmosis", "Into the raisins by reverse osmosis", "By diffusion of sugar out"], a: 0, hint: "Raisin sap is concentrated.", why: "Water flows from dilute (outside) to concentrated (inside): <b>osmosis into the raisins</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "henry", passage: "A diver ascends very quickly from a deep dive and feels joint pain.", q: "Which gas bubbling out of the blood causes this?", o: ["Nitrogen", "Oxygen", "Helium", "Carbon dioxide"], a: 0, hint: "Most of air.", why: "<b>N₂</b> dissolved at high pressure comes out as bubbles: the bends." },
    { id: "q32", t: "case", d: "M", m: 1, c: "osm", passage: "A coastal town supplies drinking water by pushing sea water through a membrane at high pressure.", q: "The process used is:", o: ["Reverse osmosis", "Osmosis", "Distillation", "Dialysis"], a: 0, hint: "Pressure greater than π.", why: "<b>Reverse osmosis</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "vant", passage: "A student finds that the molar mass of benzoic acid measured in benzene is nearly double its formula mass.", q: "This is because benzoic acid in benzene:", o: ["Forms dimers (association)", "Dissociates into ions", "Is volatile", "Reacts with benzene"], a: 0, hint: "i < 1.", why: "<b>Association</b> into dimers halves the particles: i ≈ 0.5, so the molar mass appears doubled." }
  ],
  find: {
    mcq: [
      { s: "Copper dissolved in gold.", o: ["Solid in solid", "Liquid in solid", "Gas in solid", "Solid in liquid"], a: 0, c: "types", d: "E", why: "<b>Solid in solid</b>." },
      { s: "Moles of solute per litre of solution.", o: ["Molarity", "Molality", "Mole fraction", "ppm"], a: 0, c: "conc", d: "E", why: "<b>Molarity</b>." },
      { s: "A concentration value that stays the same when the solution is heated.", o: ["Molality", "Molarity", "Volume %", "w/V %"], a: 0, c: "tdep", d: "M", why: "Mass-based: <b>molality</b>." },
      { s: "Naphthalene dissolves easily in benzene but not in water.", o: ["Like dissolves like", "Henry's law", "Raoult's law", "Osmosis"], a: 0, c: "solub", d: "E", why: "Non-polar in non-polar: <b>like dissolves like</b>." },
      { s: "Doubling the partial pressure of a gas doubles its dissolved mole fraction.", o: ["Henry's law", "Raoult's law", "Dalton's law", "Le Chatelier"], a: 0, c: "henry", d: "E", why: "<b>Henry's law</b>." },
      { s: "Partial vapour pressure of a liquid = its pure vapour pressure × its mole fraction.", o: ["Raoult's law", "Henry's law", "Boyle's law", "van't Hoff law"], a: 0, c: "vp", d: "E", why: "<b>Raoult's law</b>." },
      { s: "Mixing two liquids absorbs heat and the volume increases.", o: ["Positive deviation", "Negative deviation", "Ideal solution", "Azeotrope"], a: 0, c: "ideal", d: "M", why: "ΔH > 0, ΔV > 0: <b>positive deviation</b>." },
      { s: "A mixture boils at constant temperature and cannot be separated by fractional distillation.", o: ["Azeotrope", "Ideal solution", "Isotonic solution", "Saturated solution"], a: 0, c: "ideal", d: "M", why: "<b>Azeotrope</b>." },
      { s: "(p° − p)/p° for a dilute solution of a non-volatile solute.", o: ["Mole fraction of solute", "Molality", "Molarity", "van't Hoff factor"], a: 0, c: "rlvp", d: "M", why: "RLVP = <b>x<sub>solute</sub></b>." },
      { s: "Sea water boils at a slightly higher temperature than pure water.", o: ["Elevation in boiling point", "Depression in freezing point", "Osmosis", "Henry's law"], a: 0, c: "tb", d: "E", why: "<b>Elevation in boiling point</b>." },
      { s: "Salt is spread on icy roads.", o: ["Depression in freezing point", "Elevation in boiling point", "Reverse osmosis", "Relative lowering of VP"], a: 0, c: "tfp", d: "E", why: "<b>Depression in freezing point</b>." },
      { s: "ΔT = K × m, with K = 1.86 K kg mol⁻¹ for water.", o: ["Cryoscopic constant", "Ebullioscopic constant", "Henry's constant", "Gas constant"], a: 0, c: "tfp", d: "M", why: "1.86 is the <b>cryoscopic constant</b> (K<sub>f</sub>)." },
      { s: "Two solutions with the same osmotic pressure.", o: ["Isotonic", "Hypertonic", "Hypotonic", "Azeotropic"], a: 0, c: "osm", d: "M", why: "<b>Isotonic</b>." },
      { s: "Red blood cells swell and may burst in this solution.", o: ["Hypotonic", "Hypertonic", "Isotonic", "Saturated"], a: 0, c: "osm", d: "C", why: "Water enters the cells: <b>hypotonic</b>." },
      { s: "Observed molar mass of KCl is about half the formula mass.", o: ["Dissociation (i ≈ 2)", "Association (i ≈ 0.5)", "Ideal behaviour", "Reverse osmosis"], a: 0, c: "vant", d: "C", why: "Two ions double the effect: <b>dissociation, i ≈ 2</b>." },
      { s: "α = (i − 1)/(n − 1).", o: ["Degree of dissociation", "Degree of association", "Mole fraction", "Relative lowering"], a: 0, c: "vant", d: "C", why: "<b>Degree of dissociation</b>." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["Soda fizzes when opened.", "Henry's law", "henry"], ["Vapour of a mixture is richer in the more volatile liquid.", "Raoult's law", "vp"], ["Chloroform + acetone warm up when mixed.", "Negative deviation", "ideal"], ["Antifreeze in radiators.", "Depression in freezing point", "tfp"], ["Drinking water from sea water.", "Reverse osmosis", "osm"], ["Ethanoic acid dimerises in benzene.", "Association (i < 1)", "vant"]] }
    ],
    wrong: [
      { stmts: ["Molality is independent of temperature.", "Molarity depends on the volume of solution.", "Mole fraction changes when the solution is heated.", "All mole fractions in a solution add up to 1."], a: 2, c: "tdep", why: "Mole fraction is mass-based, so it <b>does not</b> change with temperature." },
      { stmts: ["Higher K<sub>H</sub> means lower gas solubility.", "Gases are more soluble in hot water.", "K<sub>H</sub> depends on the nature of the gas.", "Henry's law holds at constant temperature."], a: 1, c: "henry", why: "Gases are <b>less</b> soluble in hot water." },
      { stmts: ["In osmosis the solvent moves through the membrane.", "π = CRT for a dilute solution.", "Reverse osmosis needs pressure greater than π.", "Solute moves from dilute to concentrated side."], a: 3, c: "osm", why: "It is the <b>solvent</b>, not the solute, that moves." }
    ],
    para: [
      { target: "Negative deviation", c: "ideal", sents: ["Riya mixed two colourless liquids in a flask.", "She recorded the room temperature as 25 °C.", "The flask became warm and the vapour pressure was lower than Raoult's law predicted.", "She labelled the flask and stored it."], a: 2, why: "Heat released and lower vapour pressure: <b>negative deviation</b>." },
      { target: "Henry's law", c: "henry", sents: ["Karan works at a bottling plant.", "Drinks are chilled and filled under about 4 bar of CO₂ so more gas dissolves.", "The plant runs two shifts.", "Bottles are packed in crates of 24."], a: 1, why: "Higher pressure, more dissolved gas: <b>Henry's law</b>." },
      { target: "Isotonic solution", c: "osm", sents: ["A patient was admitted to the ward.", "The doctor checked the patient's pulse.", "A drip of 0.9% NaCl was given so blood cells neither swell nor shrink.", "The patient was discharged the next day."], a: 2, why: "Same osmotic pressure as blood: <b>isotonic</b>." }
    ],
    explain: [
      { s: "A solution of NaCl freezes at a lower temperature than a glucose solution of the same molality.", o: ["NaCl gives more particles (i ≈ 2)", "NaCl is heavier", "Glucose is volatile", "NaCl raises vapour pressure"], a: 0, c: "vant", why: "The clue is <i>same molality</i>: more particles from dissociation give a <b>larger ΔT<sub>f</sub></b>." },
      { s: "Fish are more comfortable in cold water than in warm water.", o: ["More O₂ dissolves in cold water", "Cold water has more salt", "Warm water has lower K<sub>H</sub>", "O₂ is a solid in cold water"], a: 0, c: "henry", why: "K<sub>H</sub> rises with temperature, so <b>more O₂ dissolves in cold water</b>." },
      { s: "Ethanol and water cannot be separated beyond about 95% ethanol by distillation.", o: ["They form a minimum-boiling azeotrope", "They form an ideal solution", "Ethanol is non-volatile", "Water dissociates"], a: 0, c: "ideal", why: "Positive deviation gives a <b>minimum-boiling azeotrope</b>." },
      { s: "Molar mass of a polymer is measured by osmotic pressure, not freezing point.", o: ["π is large and measured at room temperature", "Polymers raise freezing point", "Freezing point is not colligative", "π does not depend on concentration"], a: 0, c: "osm", why: "For large molar masses, ΔT<sub>f</sub> is too small, while <b>π is measurable at room temperature</b>." }
    ]
  }
});
