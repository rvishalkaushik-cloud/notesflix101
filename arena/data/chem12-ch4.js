/* Revision Arena · Class XII Chemistry · Unit 4 · The d- and f-Block Elements (Parts 1-3 + exercises). Original cases; every number recomputed. */
NFArena.register({
  id: "chem12-ch4", cls: "XII", subject: "Chemistry", unit: "Unit", num: "4",
  title: "The d- and f-Block Elements",
  tagline: "Transition metals and their trends, magnetic moment and colour, K₂Cr₂O₇ and KMnO₄, lanthanoids, lanthanoid contraction and actinoids.",
  notesLink: "../#chem12-ch4",
  concepts: {
    config: { n: "Position and electronic configuration", s: "trends" },
    phys: { n: "Atomic size, atomisation and ionisation trends", s: "trends" },
    ox: { n: "Variable oxidation states and E°", s: "trends" },
    mag: { n: "Magnetic moment", s: "props" },
    colour: { n: "Colour of ions", s: "props" },
    catal: { n: "Catalysis, interstitial compounds, alloys", s: "props" },
    dichro: { n: "Potassium dichromate", s: "cpds" },
    perm: { n: "Potassium permanganate", s: "cpds" },
    lanth: { n: "Lanthanoids", s: "fblock" },
    lcon: { n: "Lanthanoid contraction", s: "fblock" },
    actin: { n: "Actinoids", s: "fblock" }
  },
  overview: {
    text: "The <b>d-block</b> (groups 3–12) fills (n−1)d orbitals; the <b>f-block</b> fills 4f (<b>lanthanoids</b>) and 5f (<b>actinoids</b>). Partly filled d orbitals explain why transition metals show <b>variable oxidation states</b>, <b>coloured ions</b>, <b>paramagnetism</b>, <b>catalytic activity</b> and <b>complex formation</b>. Two key compounds, <b>K₂Cr₂O₇</b> and <b>KMnO₄</b>, are strong oxidising agents.",
    points: [
      "General configuration (n−1)d<sup>1–10</sup> ns<sup>1–2</sup>; Cr 3d⁵4s¹ and Cu 3d¹⁰4s¹ are exceptions.",
      "μ = √[n(n + 2)] BM, n = unpaired electrons.",
      "Colour comes from <b>d–d transitions</b>; d⁰ and d¹⁰ ions are colourless.",
      "<b>Lanthanoid contraction</b> makes Zr and Hf almost the same size."
    ],
    map: {
      center: "d- and f-Block",
      branches: [
        { t: "Trends", c: ["Configuration", "Size and atomisation", "Ionisation, E°", "Oxidation states"] },
        { t: "Properties", c: ["Magnetic moment", "Colour", "Catalysts", "Interstitial, alloys"] },
        { t: "Compounds", c: ["K₂Cr₂O₇", "KMnO₄"] },
        { t: "f-block", c: ["Lanthanoids +3", "Lanthanoid contraction", "Actinoids"] }
      ]
    }
  },
  sections: [
    {
      id: "trends", title: "Configuration and trends", sub: "Why transition metals behave alike", icon: "🧲", color: "#EC4899",
      quick: [
        "A <b>transition element</b> has an incompletely filled d subshell in the atom or in a common ion. <b>Zn, Cd, Hg</b> (d¹⁰ in all states) are not regarded as transition elements; <b>Cu</b> is (Cu²⁺ is 3d⁹).",
        "Exceptions: <b>Cr 3d⁵4s¹</b>, <b>Cu 3d¹⁰4s¹</b> (half-filled and full d are extra stable).",
        "Atomic radii decrease slowly across a series; the 4d and 5d radii are nearly equal (lanthanoid contraction).",
        "High <b>enthalpy of atomisation</b> (strong metallic bonding from unpaired electrons); Zn has the lowest.",
        "Variable oxidation states because (n−1)d and ns energies are close; <b>Mn shows +2 to +7</b>, the most in the 3d series.",
        "E°(M²⁺/M): <b>Cu is the only 3d metal with a positive value (+0.34 V)</b>, so it does not liberate H₂ from acids. Mn²⁺ (d⁵) and Zn²⁺ (d¹⁰) are extra stable."
      ],
      cards: [
        { t: "Why is Cr²⁺ reducing but Mn³⁺ oxidising?", tag: "why", b: "<p>Both are d⁴. Cr²⁺ → Cr³⁺ gives d³ (stable half-filled t₂g), so Cr²⁺ loses an electron easily: <b>reducing</b>. Mn³⁺ → Mn²⁺ gives d⁵ (half-filled), so Mn³⁺ gains an electron easily: <b>oxidising</b>.</p>" },
        { t: "Why is the third IE of Mn so high?", tag: "why", b: "<p>Mn²⁺ is 3d⁵, a half-filled stable configuration. Removing a third electron disturbs it, so the third ionisation enthalpy is very high.</p>" }
      ],
      exam: ["For 'why' questions, link the answer to d⁰, d⁵ or d¹⁰ stability.", "Mention that the highest oxidation states appear in oxides and fluorides (O and F are small and very electronegative)."]
    },
    {
      id: "props", title: "Magnetic, colour and catalytic properties", sub: "Partly filled d orbitals at work", icon: "🌈", color: "#7B4DFF",
      quick: [
        "Unpaired electrons make ions <b>paramagnetic</b>: <b>μ = √[n(n + 2)] BM</b> (spin-only).",
        "Colour: a d electron absorbs visible light and jumps to a higher d level (<b>d–d transition</b>); we see the complementary colour. Sc³⁺ (d⁰), Ti⁴⁺ (d⁰) and Zn²⁺ (d¹⁰) are colourless.",
        "<b>Catalysts</b>: variable oxidation states and large surface for adsorption: V₂O₅ (contact process), Fe (Haber process), Ni (hydrogenation).",
        "<b>Interstitial compounds</b>: small atoms (H, C, N) trapped in metal lattices (TiC, Mn₄N, Fe₃H): hard, high melting, conducting, chemically inert.",
        "<b>Alloys</b> form easily because atomic radii are similar (brass, bronze, stainless steel).",
        "Transition metals form many <b>complexes</b>: small, highly charged ions with vacant d orbitals."
      ],
      table: { cap: "Spin-only magnetic moments", head: ["Ion", "Configuration", "Unpaired", "μ (BM)"], rows: [["Sc³⁺", "3d⁰", "0", "0"], ["Ti³⁺ / Cu²⁺", "3d¹ / 3d⁹", "1", "1.73"], ["Fe²⁺", "3d⁶", "4", "4.90"], ["Mn²⁺ / Fe³⁺", "3d⁵", "5", "5.92"], ["Zn²⁺", "3d¹⁰", "0", "0"]] },
      cards: [
        { t: "Worked: magnetic moment", tag: "numerical", b: "<p>Fe²⁺ is 3d⁶ with 4 unpaired electrons: μ = √(4 × 6) = √24 = <b>4.90 BM</b>.</p>" },
        { t: "Memory hook", tag: "hook", b: "<p><b>“Zero and full make no colour, no magnet.”</b> d⁰ and d¹⁰ ions are colourless and diamagnetic.</p>" }
      ],
      exam: ["Show the configuration, count unpaired electrons, then use √[n(n+2)].", "Give the reason for catalysis as two points: variable oxidation states and surface adsorption."]
    },
    {
      id: "cpds", title: "Potassium dichromate and permanganate", sub: "Two famous oxidising agents", icon: "🧪", color: "#12B5A6",
      quick: [
        "<b>K₂Cr₂O₇</b> from chromite: 4FeCr₂O₄ + 8Na₂CO₃ + 7O₂ → 8Na₂CrO₄ + 2Fe₂O₃ + 8CO₂; acidify → Na₂Cr₂O₇; add KCl → K₂Cr₂O₇ (less soluble, crystallises).",
        "Chromate (yellow) ⇌ dichromate (orange) depending on pH: 2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O.",
        "In acid: <b>Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O</b> (orange → green). Oxidises I⁻ to I₂, Fe²⁺ to Fe³⁺, H₂S to S.",
        "<b>KMnO₄</b>: fuse MnO₂ with KOH and an oxidant → K₂MnO₄ (green); oxidise electrolytically (or disproportionate in acid) → KMnO₄ (purple).",
        "Acidic: <b>MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O</b> (purple → colourless): oxidises Fe²⁺, C₂O₄²⁻, I⁻.",
        "Neutral/faintly alkaline: MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻ (e.g. I⁻ → IO₃⁻)."
      ],
      cards: [
        { t: "Why is KMnO₄ titration self-indicating?", tag: "why", b: "<p>MnO₄⁻ is deep purple and Mn²⁺ is nearly colourless. The first extra drop of KMnO₄ after the end point gives a permanent pink colour.</p>" },
        { t: "Worked: electrons per ion", tag: "numerical", b: "<p>Mn goes +7 → +2 in acid: <b>5 electrons</b> per MnO₄⁻. Cr goes +6 → +3: <b>3 per Cr</b>, so 6 per Cr₂O₇²⁻.</p>" }
      ],
      exam: ["Balance ionic equations by electrons, then H⁺ and H₂O.", "Write the colour change with each reaction."]
    },
    {
      id: "fblock", title: "Lanthanoids and actinoids", sub: "Filling the 4f and 5f orbitals", icon: "☢️", color: "#FF8A1F",
      quick: [
        "<b>Lanthanoids</b> (Ce–Lu) fill 4f; common oxidation state <b>+3</b>. Ce⁴⁺ is a good oxidant (→ Ce³⁺); Eu²⁺ and Yb²⁺ are reductants.",
        "<b>Lanthanoid contraction</b>: steady decrease in atomic and ionic radii from La to Lu, due to <b>poor shielding by 4f electrons</b>.",
        "Consequences: <b>Zr (160 pm) and Hf (159 pm) have almost the same radius</b> and occur together; lanthanoids are hard to separate; basicity of Ln(OH)₃ falls from La(OH)₃ to Lu(OH)₃.",
        "<b>Actinoids</b> (Th–Lr) fill 5f; all are <b>radioactive</b>. They show more oxidation states than lanthanoids because 5f, 6d and 7s are close in energy (e.g. U +3 to +6).",
        "Actinoid contraction is greater than lanthanoid contraction (5f shields even more poorly).",
        "<b>Mischmetall</b> (~95% lanthanoid metals, ~5% Fe, traces of S, C, Ca, Al): used in Mg alloys for bullets, shells and lighter flints."
      ],
      table: { cap: "Lanthanoids vs actinoids", head: ["Feature", "Lanthanoids", "Actinoids"], rows: [["Orbitals filled", "4f", "5f"], ["Oxidation states", "Mostly +3", "+3 to +7"], ["Radioactivity", "Only Pm", "All"], ["Complex formation", "Less", "More"]] },
      cards: [
        { t: "Why do Zr and Hf behave almost alike?", tag: "why", b: "<p>Between them come the 14 lanthanoids. The lanthanoid contraction cancels the expected size increase, so Hf (5d) is about the same size as Zr (4d), giving very similar chemistry.</p>" }
      ],
      exam: ["State the cause (poor shielding of 4f) and at least two consequences of lanthanoid contraction.", "Compare lanthanoids and actinoids on oxidation states and radioactivity."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "config", q: "Transition element?", a: "An element with an incompletely filled d subshell in the atom or a common ion." },
    { k: "Fact", c: "config", q: "Why are Zn, Cd, Hg not transition elements?", a: "They have full d¹⁰ in the ground state and common ions." },
    { k: "Fact", c: "config", q: "Configuration of Cr?", a: "[Ar] 3d⁵ 4s¹." },
    { k: "Fact", c: "phys", q: "3d metal with the lowest enthalpy of atomisation?", a: "Zinc (no unpaired d electrons)." },
    { k: "Fact", c: "ox", q: "3d metal with the most oxidation states?", a: "Manganese (+2 to +7)." },
    { k: "Fact", c: "ox", q: "3d metal with positive E°(M²⁺/M)?", a: "Copper (+0.34 V)." },
    { k: "Formula", c: "mag", q: "Spin-only magnetic moment?", a: "μ = √[n(n + 2)] BM." },
    { k: "Value", c: "mag", q: "μ of Mn²⁺?", a: "5.92 BM (5 unpaired)." },
    { k: "Reason", c: "colour", q: "Why are transition-metal ions coloured?", a: "d–d transitions absorb visible light; the complementary colour is seen." },
    { k: "Fact", c: "colour", q: "Why is Zn²⁺ colourless?", a: "3d¹⁰: no d–d transition possible." },
    { k: "Example", c: "catal", q: "Catalyst in the contact process?", a: "V₂O₅." },
    { k: "Definition", c: "catal", q: "Interstitial compound?", a: "Small atoms (H, C, N) trapped in the metal lattice, e.g. TiC." },
    { k: "Reaction", c: "dichro", q: "Dichromate in acid (half-equation)?", a: "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O." },
    { k: "Reaction", c: "perm", q: "Permanganate in acid?", a: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O." },
    { k: "Fact", c: "perm", q: "Green intermediate in making KMnO₄?", a: "K₂MnO₄ (potassium manganate)." },
    { k: "Definition", c: "lcon", q: "Lanthanoid contraction?", a: "Steady decrease in size from La to Lu due to poor shielding by 4f electrons." },
    { k: "Fact", c: "lanth", q: "Common oxidation state of lanthanoids?", a: "+3." },
    { k: "Fact", c: "actin", q: "Why do actinoids show more oxidation states?", a: "5f, 6d and 7s orbitals are close in energy." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "The colourful paint shop",
      text: "<p>At an art supply shop, <b>Isha</b> notices that copper sulphate solution is blue, a nickel salt is green, but zinc sulphate and scandium salts are colourless. A magnet test shows the coloured salts are weakly attracted.</p>",
      qs: [
        { q: "Why are the copper and nickel salts coloured but the zinc and scandium salts colourless?", m: 2, type: "Explain", c: "colour", hint: "d–d transitions.", points: [{ p: "Cu²⁺ (d⁹) and Ni²⁺ (d⁸) have partly filled d orbitals: d–d transitions absorb visible light", m: 1, k: ["d–d", "d-d", "partly", "transition"] }, { p: "Zn²⁺ (d¹⁰) and Sc³⁺ (d⁰): no d–d transition possible", m: 1, k: ["d¹⁰", "d10", "d⁰", "d0"] }], structure: ["Coloured ions, then colourless ions."], model: "<p>Cu²⁺ (3d⁹) and Ni²⁺ (3d⁸) have <b>partly filled d orbitals</b>; electrons absorb visible light in <b>d–d transitions</b>, and we see the complementary colour.</p><p>Zn²⁺ is 3d¹⁰ and Sc³⁺ is 3d⁰, so no d–d transition can occur: they are <b>colourless</b>.</p>" },
        { q: "Calculate the spin-only magnetic moment of Cu²⁺.", m: 1, type: "Numerical", c: "mag", hint: "1 unpaired.", points: [{ p: "√(1 × 3) = 1.73 BM", m: 1, k: ["1.73"] }], structure: ["n, then formula."], model: "<p>Cu²⁺ is 3d⁹ with 1 unpaired electron: μ = √(1 × 3) = <b>1.73 BM</b>.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "The iron tablet titration",
      text: "<p><b>Kabir</b> titrates a solution of an iron(II) tablet with KMnO₄ in dilute H₂SO₄. He uses no indicator and stops when a faint pink colour stays.</p>",
      qs: [
        { q: "Write the ionic equation for the reaction.", m: 2, type: "Equation", c: "perm", hint: "5Fe²⁺ per MnO₄⁻.", points: [{ p: "MnO₄⁻ + 8H⁺ + 5Fe²⁺ →", m: 1, k: ["5fe", "8h"] }, { p: "→ Mn²⁺ + 5Fe³⁺ + 4H₂O", m: 1, k: ["mn²⁺", "mn2+", "4h₂o", "4h2o"] }], structure: ["Balanced ionic equation."], model: "<p><b>MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O</b></p>" },
        { q: "Why is no indicator needed?", m: 1, type: "Explain", c: "perm", hint: "Colours.", points: [{ p: "MnO₄⁻ is purple, Mn²⁺ is almost colourless; first excess drop gives pink: self-indicator", m: 1, k: ["self", "purple", "pink"] }], structure: ["One line."], model: "<p>KMnO₄ is a <b>self-indicator</b>: purple MnO₄⁻ becomes nearly colourless Mn²⁺, so the first excess drop gives a permanent pink colour.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Cr²⁺ and Mn³⁺ in the stockroom",
      text: "<p>A stockroom note says: \"Store Cr²⁺ solutions under nitrogen — they reduce air. Mn³⁺ solutions are unstable and oxidise things.\" <b>Kabir</b> notes both ions are d⁴.</p>",
      qs: [
        { q: "Explain why Cr²⁺ is reducing while Mn³⁺ is oxidising, though both are d⁴.", m: 2, type: "Explain", c: "ox", hint: "Which configuration does each reach?", points: [{ p: "Cr²⁺ → Cr³⁺ (d³, stable half-filled t₂g): loses electron easily", m: 1, k: ["d³", "d3", "t2g", "cr³⁺", "cr3+"] }, { p: "Mn³⁺ → Mn²⁺ (d⁵, half-filled): gains electron easily", m: 1, k: ["d⁵", "d5", "half"] }], structure: ["Cr²⁺, then Mn³⁺."], model: "<p>Cr²⁺ (d⁴) → Cr³⁺ (d³), which has a stable half-filled t₂g level, so Cr²⁺ readily <b>loses</b> an electron: <b>reducing</b>.</p><p>Mn³⁺ (d⁴) → Mn²⁺ (d⁵), an extra-stable half-filled d subshell, so Mn³⁺ readily <b>gains</b> an electron: <b>oxidising</b>.</p>" },
        { q: "Why does Mn show its highest oxidation state (+7) in an oxide (Mn₂O₇) but not in its fluoride?", m: 2, type: "Explain", c: "ox", hint: "Multiple bonds.", points: [{ p: "Oxygen can form multiple bonds (Mn=O) with the metal", m: 1, k: ["multiple", "double", "π"] }, { p: "F forms only single bonds; seven F around Mn is not possible", m: 1, k: ["single"] }], structure: ["O, then F."], model: "<p>Oxygen can form <b>multiple bonds</b> (Mn=O) with the metal, so fewer O atoms are needed to reach +7. Fluorine forms only single bonds, and seven F atoms cannot fit around Mn, so MnF₇ is not formed (the highest fluoride is MnF₄).</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "Two metals that are hard to separate",
      text: "<p>A mining company finds that zirconium ore always contains about 1–3% hafnium, and the two are very hard to separate. A chemist explains it using the 14 elements placed between them.</p>",
      qs: [
        { q: "Name and explain the effect responsible.", m: 2, type: "Identify + explain", c: "lcon", hint: "4f shielding.", points: [{ p: "Lanthanoid contraction", m: 1, k: ["lanthanoid contraction"] }, { p: "Poor shielding by 4f electrons ⇒ size decreases across La–Lu, so Hf ≈ Zr in size (159 vs 160 pm)", m: 1, k: ["shield", "4f"] }], structure: ["Name, cause."], model: "<p><b>Lanthanoid contraction.</b> 4f electrons shield the outer electrons poorly, so the effective nuclear charge rises and size falls across La → Lu. This cancels the expected increase, so Hf (159 pm) is almost the same size as Zr (160 pm) and their chemistry is very similar.</p>" },
        { q: "State two other consequences of this effect.", m: 2, type: "State", c: "lcon", hint: "Separation; basicity.", points: [{ p: "Lanthanoids are hard to separate from each other", m: 1, k: ["separat"] }, { p: "Basicity of Ln(OH)₃ decreases from La to Lu", m: 1, k: ["basic"] }], structure: ["Two points."], model: "<p>(i) The <b>lanthanoids themselves are hard to separate</b> because their sizes differ very little.</p><p>(ii) The <b>basic strength of Ln(OH)₃ decreases</b> from La(OH)₃ to Lu(OH)₃ as the ions get smaller.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "From chromite ore to an orange crystal",
      text: "<p>A chemical plant makes K₂Cr₂O₇ from chromite ore (FeCr₂O₄). The product is orange, but when the plant's waste stream becomes alkaline it turns yellow. A lab uses the same compound to test for ethanol in breath samples, where the orange colour turns green.</p>",
      qs: [
        { q: "Outline the three steps of making K₂Cr₂O₇ from chromite.", m: 3, type: "Describe", c: "dichro", hint: "Fuse, acidify, KCl.", points: [{ p: "Fuse with Na₂CO₃ in air → Na₂CrO₄", m: 1, k: ["na₂cro₄", "na2cro4", "sodium chromate"] }, { p: "Acidify → Na₂Cr₂O₇", m: 1, k: ["acid", "na₂cr₂o₇", "na2cr2o7"] }, { p: "Add KCl → K₂Cr₂O₇ crystallises", m: 1, k: ["kcl"] }], structure: ["Three equations or steps."], model: "<p>(i) 4FeCr₂O₄ + 8Na₂CO₃ + 7O₂ → 8Na₂CrO₄ + 2Fe₂O₃ + 8CO₂.</p><p>(ii) 2Na₂CrO₄ + 2H⁺ → Na₂Cr₂O₇ + 2Na⁺ + H₂O.</p><p>(iii) Na₂Cr₂O₇ + 2KCl → K₂Cr₂O₇ + 2NaCl (less soluble K₂Cr₂O₇ crystallises).</p>" },
        { q: "Explain the colour change in alkaline waste, and the change from orange to green in the breath test.", m: 2, type: "Explain", c: "dichro", hint: "pH equilibrium; reduction.", points: [{ p: "In alkali, Cr₂O₇²⁻ (orange) → CrO₄²⁻ (yellow): pH equilibrium", m: 1, k: ["cro₄", "cro4", "chromate", "yellow"] }, { p: "Ethanol reduces Cr₂O₇²⁻ (Cr +6) to Cr³⁺ (green)", m: 1, k: ["cr³⁺", "cr3+", "reduc", "green"] }], structure: ["pH change, then redox."], model: "<p>Cr₂O₇²⁻ + 2OH⁻ ⇌ 2CrO₄²⁻ + H₂O: in alkaline solution orange dichromate becomes <b>yellow chromate</b>.</p><p>In the breath test, ethanol is oxidised and <b>Cr(+6) is reduced to green Cr³⁺</b>: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "config", q: "The electronic configuration of Cu is:", o: ["[Ar] 3d¹⁰ 4s¹", "[Ar] 3d⁹ 4s²", "[Ar] 3d⁸ 4s²", "[Ar] 3d¹⁰ 4s²"], a: 0, hint: "Full d is stable.", why: "<b>3d¹⁰ 4s¹</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "colour", q: "Which ion is colourless?", o: ["Sc³⁺", "Ti³⁺", "Cu²⁺", "Fe²⁺"], a: 0, hint: "d⁰.", why: "Sc³⁺ is <b>d⁰</b>." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "mag", q: "The spin-only magnetic moment of Mn²⁺ (Z = 25) is:", o: ["5.92 BM", "4.90 BM", "3.87 BM", "1.73 BM"], a: 0, hint: "5 unpaired.", why: "√35 = <b>5.92 BM</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "ox", q: "Which 3d metal shows the largest number of oxidation states?", o: ["Mn", "Fe", "Cr", "Zn"], a: 0, hint: "+2 to +7.", why: "<b>Mn</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "perm", q: "In acidic medium, one MnO₄⁻ ion accepts:", o: ["5 electrons", "3 electrons", "1 electron", "7 electrons"], a: 0, hint: "+7 → +2.", why: "<b>5</b>." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "lcon", q: "Zr and Hf have almost identical radii because of:", o: ["Lanthanoid contraction", "Actinoid contraction", "Inert pair effect", "Diagonal relationship"], a: 0, hint: "14 elements between.", why: "<b>Lanthanoid contraction</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "ox", q: "Which 3d metal has a positive E°(M²⁺/M)?", o: ["Cu", "Zn", "Fe", "Mn"], a: 0, hint: "Does not displace H₂.", why: "<b>Cu</b> (+0.34 V)." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "actin", q: "Actinoids show a wider range of oxidation states than lanthanoids because:", o: ["5f, 6d and 7s energies are close", "They are radioactive", "They are larger", "They have no f electrons"], a: 0, hint: "Orbital energies.", why: "<b>5f, 6d, 7s are close in energy</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "phys", q: "Zinc has the lowest enthalpy of atomisation in the 3d series.", r: "Zinc has no unpaired d electrons for metallic bonding.", a: 0, hint: "Weak bonding.", why: "Both true, and R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "catal", q: "Transition metals and their compounds are good catalysts.", r: "They show variable oxidation states and provide a large surface for adsorption.", a: 0, hint: "Two reasons.", why: "Both true, and R explains A." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "config", q: "Copper is a transition element.", r: "Copper atom has a completely filled 3d subshell.", a: 1, hint: "What about Cu²⁺?", why: "Both true, but R does not explain A: Cu counts because <b>Cu²⁺ is 3d⁹</b>." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "lanth", q: "The common oxidation state of lanthanoids is +3.", a: true, hint: "Ln³⁺.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "actin", q: "Only a few actinoids are radioactive.", a: false, hint: "All?", why: "False: <b>all</b> actinoids are radioactive." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "catal", q: "Interstitial compounds are softer than the pure metals.", a: false, hint: "TiC.", why: "False: they are <b>very hard</b>." },
    { id: "q15", t: "match", d: "E", m: 4, c: "catal", q: "Match the catalyst with the process.", pairs: [["V₂O₅", "Contact process"], ["Finely divided Fe", "Haber process"], ["Ni", "Hydrogenation of oils"], ["MnO₂", "Decomposition of KClO₃"]], hint: "One each.", why: "Each catalyst belongs to one process." },
    { id: "q16", t: "match", d: "M", m: 4, c: "mag", q: "Match the ion with its spin-only μ.", pairs: [["Ti³⁺", "1.73 BM"], ["V³⁺", "2.83 BM"], ["Cr³⁺", "3.87 BM"], ["Fe²⁺", "4.90 BM"]], hint: "d¹, d², d³, d⁶.", why: "n = 1, 2, 3, 4 ⇒ √3, √8, √15, √24." },
    { id: "q17", t: "match", d: "M", m: 4, c: "dichro", q: "Match the species with its colour.", pairs: [["Cr₂O₇²⁻", "Orange"], ["CrO₄²⁻", "Yellow"], ["MnO₄⁻", "Purple"], ["MnO₄²⁻", "Green"]], hint: "Manganate is green.", why: "Each ion has one colour." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "config", q: "Elements of groups 3 to 12 are called ______ elements.", acc: ["transition", "d-block", "d block"], hint: "d-block.", why: "<b>Transition</b> (d-block) elements." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "mag", q: "The spin-only magnetic moment of Fe²⁺ is ______ BM.", acc: ["4.90", "4.9"], hint: "√24.", why: "<b>4.90 BM</b>." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "catal", q: "An alloy of about 95% lanthanoid metals and 5% iron is called ______.", acc: ["mischmetall", "mischmetal", "misch metal"], hint: "m…", why: "<b>Mischmetall</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "perm", q: "In neutral or faintly alkaline medium, MnO₄⁻ is reduced to ______.", acc: ["mno2", "mno₂", "manganese dioxide"], hint: "Brown solid.", why: "<b>MnO₂</b>." },
    { id: "q22", t: "short", d: "E", m: 1, c: "lanth", q: "Name the lanthanoid that commonly shows +4 state and acts as an oxidant.", acc: ["cerium", "ce"], hint: "Ce⁴⁺.", why: "<b>Cerium</b>." },
    { id: "q23", t: "short", d: "M", m: 1, c: "perm", q: "Name the green compound formed when MnO₂ is fused with KOH and an oxidant.", acc: ["potassium manganate", "k2mno4", "k₂mno₄"], hint: "K₂MnO₄.", why: "<b>Potassium manganate</b>, K₂MnO₄." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "colour", q: "Explain why transition metal ions are generally coloured. Why is [Ti(H₂O)₆]³⁺ coloured but [Sc(H₂O)₆]³⁺ colourless?", hint: "d–d.", why: "", points: [{ p: "Partly filled d orbitals split; electrons absorb visible light in d–d transitions", m: 1, k: ["d–d", "d-d", "absorb"] }, { p: "Complementary colour is seen", m: 1, k: ["complementary"] }, { p: "Ti³⁺ d¹ allows a d–d transition; Sc³⁺ d⁰ does not", m: 1, k: ["d¹", "d1", "d⁰", "d0"] }], model: "<p>In transition-metal ions the d orbitals are <b>partly filled</b>. An electron absorbs a particular wavelength of visible light and moves to a higher d level (<b>d–d transition</b>); the <b>complementary colour</b> is seen.</p><p>Ti³⁺ is 3d¹, so a d–d transition is possible (violet). Sc³⁺ is 3d⁰, with no d electron to excite: colourless.</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "lcon", q: "What is lanthanoid contraction? Give its cause and two consequences.", hint: "4f shielding.", why: "", points: [{ p: "Steady decrease in size from La to Lu", m: 1, k: ["decrease", "size"] }, { p: "Cause: poor shielding by 4f electrons", m: 1, k: ["shield", "4f"] }, { p: "Consequences: Zr ≈ Hf in size; lanthanoids hard to separate / basicity falls", m: 1, k: ["zr", "hf", "separat", "basic"] }], model: "<p><b>Lanthanoid contraction</b> is the steady decrease in atomic and ionic size from La to Lu.</p><p><b>Cause:</b> 4f electrons shield each other poorly, so effective nuclear charge rises.</p><p><b>Consequences:</b> (i) Zr and Hf have almost the same size; (ii) lanthanoids are hard to separate, and basicity of Ln(OH)₃ decreases.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "lanth", q: "Compare lanthanoids and actinoids on four points.", hint: "Orbitals, oxidation states, radioactivity, complexes.", why: "", points: [{ p: "4f vs 5f", m: 1, k: ["4f", "5f"] }, { p: "Mostly +3 vs +3 to +7", m: 1, k: ["+3", "oxidation"] }, { p: "Only Pm radioactive vs all radioactive", m: 1, k: ["radioactiv"] }, { p: "Less vs greater tendency to form complexes / contraction smaller vs larger", m: 1, k: ["complex", "contraction"] }], model: "<p>(i) <b>Orbitals:</b> 4f vs 5f.</p><p>(ii) <b>Oxidation states:</b> mainly +3 vs +3 to +7.</p><p>(iii) <b>Radioactivity:</b> only promethium vs all actinoids.</p><p>(iv) <b>Complexes:</b> lanthanoids form fewer; actinoids form more. Actinoid contraction is larger.</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "perm", q: "Describe the preparation of KMnO₄ from MnO₂ and write its reaction with oxalate ions in acid.", hint: "Fuse, oxidise; 2MnO₄⁻ + 5C₂O₄²⁻.", why: "", points: [{ p: "2MnO₂ + 4KOH + O₂ → 2K₂MnO₄ + 2H₂O", m: 1, k: ["k₂mno₄", "k2mno4"] }, { p: "Manganate oxidised (electrolytic, or disproportionation in acid) to MnO₄⁻", m: 1, k: ["electroly", "disproportion", "oxidis"] }, { p: "2MnO₄⁻ + 16H⁺ + 5C₂O₄²⁻", m: 1, k: ["5c₂o₄", "5c2o4", "16h"] }, { p: "→ 2Mn²⁺ + 8H₂O + 10CO₂", m: 1, k: ["10co₂", "10co2"] }], model: "<p>2MnO₂ + 4KOH + O₂ → 2K₂MnO₄ (green) + 2H₂O. The manganate is then oxidised electrolytically (or disproportionates in acid: 3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ + MnO₂ + 2H₂O) to purple KMnO₄.</p><p>With oxalate: <b>2MnO₄⁻ + 16H⁺ + 5C₂O₄²⁻ → 2Mn²⁺ + 8H₂O + 10CO₂</b>.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "ox", q: "Explain giving reasons: (a) Transition metals show variable oxidation states. (b) Mn²⁺ compounds are more stable than Fe²⁺ towards oxidation. (c) The highest oxidation state is shown in oxides and fluorides. (d) Transition metals form alloys. (e) Cu⁺ is unstable in aqueous solution. (f) Transition metals form complexes.", hint: "One reason each.", why: "", points: [{ p: "(a) (n−1)d and ns energies close: both used", m: 1, k: ["close", "ns"] }, { p: "(b) Mn²⁺ is d⁵ (stable); Fe²⁺ (d⁶) → Fe³⁺ (d⁵) easily", m: 1, k: ["d⁵", "d5"] }, { p: "(c) O and F are small and highly electronegative (O forms multiple bonds)", m: 1, k: ["electroneg", "small"] }, { p: "(d) Similar atomic radii", m: 1, k: ["similar", "radii", "size"] }, { p: "(e) Cu⁺ disproportionates; high hydration enthalpy of Cu²⁺", m: 1, k: ["disproportion", "hydration"] }, { p: "(f) Small, highly charged ions with vacant d orbitals", m: 1, k: ["vacant", "charge", "small"] }], model: "<p>(a) The (n−1)d and ns electrons have <b>similar energies</b>, so different numbers can be lost.</p><p>(b) Mn²⁺ is <b>3d⁵</b> (half-filled, stable); Fe²⁺ (3d⁶) easily loses one electron to become 3d⁵ Fe³⁺.</p><p>(c) O and F are <b>small and highly electronegative</b>; O can also form multiple bonds.</p><p>(d) Their <b>atomic radii are similar</b>, so atoms replace each other in the lattice.</p><p>(e) 2Cu⁺ → Cu²⁺ + Cu (<b>disproportionation</b>), driven by the much higher <b>hydration enthalpy</b> of Cu²⁺.</p><p>(f) Their ions are <b>small, highly charged</b> and have <b>vacant d orbitals</b> to accept lone pairs.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "catal", q: "A steel factory adds a little carbon to iron so that the metal becomes much harder. Carbon here forms:", o: ["An interstitial compound", "An ionic compound", "A complex ion", "A covalent molecule"], a: 0, hint: "Small atoms in gaps.", why: "<b>Interstitial</b>: C atoms sit in the gaps of the Fe lattice." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "dichro", q: "A breathalyser contains acidified orange K₂Cr₂O₇. The colour after a positive test is:", o: ["Green", "Yellow", "Purple", "Colourless"], a: 0, hint: "Cr³⁺.", why: "Reduced to <b>green Cr³⁺</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "colour", passage: "A student dissolves zinc sulphate and copper sulphate in water separately.", q: "Which solution is colourless?", o: ["Zinc sulphate", "Copper sulphate", "Both", "Neither"], a: 0, hint: "d¹⁰.", why: "Zn²⁺ is <b>d¹⁰</b>: colourless." },
    { id: "q32", t: "case", d: "M", m: 1, c: "mag", passage: "An unknown 3d ion has a spin-only magnetic moment of 3.87 BM.", q: "Number of unpaired electrons:", o: ["3", "2", "4", "5"], a: 0, hint: "√15.", why: "√[3 × 5] = 3.87: <b>3</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "actin", passage: "Uranium forms compounds such as UF₃, UF₄, UF₅ and UF₆.", q: "This shows that actinoids:", o: ["Show variable oxidation states", "Are not radioactive", "Only show +3", "Have no f electrons"], a: 0, hint: "+3 to +6.", why: "U shows <b>+3 to +6</b>." }
  ],
  find: {
    mcq: [
      { s: "Groups 3–12; filling (n−1)d.", o: ["d-block", "f-block", "s-block", "p-block"], a: 0, c: "config", d: "E", why: "<b>d-block</b>." },
      { s: "Cr has 3d⁵4s¹, not 3d⁴4s².", o: ["Extra stability of half-filled d", "Lanthanoid contraction", "Inert pair effect", "Hund's rule violation"], a: 0, c: "config", d: "M", why: "<b>Half-filled d</b> is extra stable." },
      { s: "Zinc melts and boils at much lower temperatures than iron.", o: ["Weak metallic bonding (no unpaired d)", "Lanthanoid contraction", "Colour", "Catalysis"], a: 0, c: "phys", d: "M", why: "<b>No unpaired d electrons</b>." },
      { s: "Manganese forms MnO, Mn₂O₃, MnO₂ and Mn₂O₇.", o: ["Variable oxidation states", "Interstitial compounds", "Alloy formation", "Paramagnetism"], a: 0, c: "ox", d: "E", why: "<b>Variable oxidation states</b>." },
      { s: "Copper does not dissolve in dilute HCl.", o: ["Positive E°(Cu²⁺/Cu)", "Cu is a non-metal", "Cu²⁺ is d⁹", "Cu is an alloy"], a: 0, c: "ox", d: "M", why: "<b>Positive E°</b>." },
      { s: "An ion is attracted by a magnet and μ = 5.92 BM.", o: ["5 unpaired electrons", "3 unpaired electrons", "Diamagnetic", "d¹⁰"], a: 0, c: "mag", d: "M", why: "√35: <b>5 unpaired</b>." },
      { s: "Zn²⁺ salts are white.", o: ["No d–d transition (d¹⁰)", "Lanthanoid contraction", "Interstitial", "Variable oxidation state"], a: 0, c: "colour", d: "E", why: "<b>d¹⁰</b>." },
      { s: "V₂O₅ speeds up SO₂ → SO₃.", o: ["Catalytic property", "Colour", "Magnetism", "Alloy"], a: 0, c: "catal", d: "E", why: "<b>Catalyst</b>." },
      { s: "Brass and bronze form easily from transition metals.", o: ["Similar atomic radii", "Variable oxidation states", "Colour", "Radioactivity"], a: 0, c: "catal", d: "M", why: "<b>Similar radii</b>." },
      { s: "Orange solution turns yellow on adding NaOH.", o: ["Dichromate → chromate", "Permanganate → manganate", "Cr³⁺ formed", "Mn²⁺ formed"], a: 0, c: "dichro", d: "M", why: "<b>Cr₂O₇²⁻ → CrO₄²⁻</b>." },
      { s: "Purple solution loses its colour while oxidising Fe²⁺ in acid.", o: ["MnO₄⁻ → Mn²⁺", "Cr₂O₇²⁻ → Cr³⁺", "Ce⁴⁺ → Ce³⁺", "Cu²⁺ → Cu"], a: 0, c: "perm", d: "E", why: "<b>MnO₄⁻ → Mn²⁺</b>." },
      { s: "Purple solution gives a brown precipitate in neutral medium.", o: ["MnO₂ formed", "Mn²⁺ formed", "Cr³⁺ formed", "K₂MnO₄ formed"], a: 0, c: "perm", d: "C", why: "<b>MnO₂</b> (3 electrons)." },
      { s: "Elements Ce to Lu; most common state +3.", o: ["Lanthanoids", "Actinoids", "Transition metals", "Alkaline earths"], a: 0, c: "lanth", d: "E", why: "<b>Lanthanoids</b>." },
      { s: "Lu³⁺ is smaller than La³⁺.", o: ["Lanthanoid contraction", "Actinoid contraction", "Inert pair effect", "Shielding by s electrons"], a: 0, c: "lcon", d: "M", why: "<b>Lanthanoid contraction</b>." },
      { s: "All members are radioactive; U shows +3 to +6.", o: ["Actinoids", "Lanthanoids", "Transition metals", "Noble gases"], a: 0, c: "actin", d: "C", why: "<b>Actinoids</b>." },
      { s: "La(OH)₃ is a stronger base than Lu(OH)₃.", o: ["Lanthanoid contraction", "Variable oxidation states", "d–d transitions", "Catalysis"], a: 0, c: "lcon", d: "C", why: "Smaller Lu³⁺ is less basic: <b>lanthanoid contraction</b>." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["μ = √[n(n + 2)].", "Magnetic moment", "mag"], ["d–d transition seen as blue.", "Colour of ions", "colour"], ["TiC is very hard.", "Interstitial compound", "catal"], ["Orange → green with ethanol.", "Potassium dichromate", "dichro"], ["Self-indicator in titrations.", "Potassium permanganate", "perm"], ["Zr and Hf are twins.", "Lanthanoid contraction", "lcon"]] }
    ],
    wrong: [
      { stmts: ["Zn²⁺ is colourless.", "Cu²⁺ is paramagnetic.", "Sc³⁺ is coloured.", "Fe³⁺ has 5 unpaired electrons."], a: 2, c: "colour", why: "Sc³⁺ is <b>d⁰</b>, so it is colourless." },
      { stmts: ["MnO₄⁻ is purple.", "K₂MnO₄ is green.", "In acid MnO₄⁻ gives MnO₂.", "KMnO₄ is a self-indicator."], a: 2, c: "perm", why: "In acid it gives <b>Mn²⁺</b>; MnO₂ forms in neutral medium." },
      { stmts: ["Lanthanoids mostly show +3.", "All actinoids are radioactive.", "Lanthanoid contraction is caused by good 4f shielding.", "Zr and Hf have similar radii."], a: 2, c: "lcon", why: "It is caused by <b>poor</b> shielding." }
    ],
    para: [
      { target: "Catalytic property", c: "catal", sents: ["A fertiliser plant runs day and night.", "Its reactor uses finely divided iron so that nitrogen and hydrogen combine much faster.", "The plant employs 400 people.", "It is near a river."], a: 1, why: "Iron speeds the Haber process: <b>catalyst</b>." },
      { target: "Lanthanoid contraction", c: "lcon", sents: ["A geology student studies minerals.", "She learns that hafnium hides inside zirconium ores because the two atoms are almost the same size.", "Her lab has a new microscope.", "She will present in March."], a: 1, why: "Same size: <b>lanthanoid contraction</b>." },
      { target: "Potassium dichromate", c: "dichro", sents: ["Police set up a check-post on the highway.", "The breath-test tube turned from orange to green for one driver.", "Traffic was heavy that night.", "The check-post closed at 2 am."], a: 1, why: "Orange → green: <b>dichromate reduced to Cr³⁺</b>." }
    ],
    explain: [
      { s: "Fe²⁺ salts slowly turn to Fe³⁺ in air but Mn²⁺ salts do not.", o: ["Fe³⁺ and Mn²⁺ are both d⁵ (stable)", "Fe is heavier", "Mn is radioactive", "Fe²⁺ is colourless"], a: 0, c: "ox", why: "The clue is <i>turn to</i>: both end at stable <b>d⁵</b>." },
      { s: "Transition metals catalyse many industrial reactions.", o: ["Variable oxidation states and surface adsorption", "They are radioactive", "They are colourless", "They form alloys"], a: 0, c: "catal", why: "<b>Variable oxidation states</b> and a large <b>surface</b>." },
      { s: "Hydrated CuSO₄ is blue but anhydrous ZnSO₄ is white.", o: ["Cu²⁺ (d⁹) allows d–d transitions; Zn²⁺ (d¹⁰) does not", "Zinc is a non-metal", "Water is blue", "ZnSO₄ is an alloy"], a: 0, c: "colour", why: "<b>d⁹ vs d¹⁰</b>." },
      { s: "Separating neighbouring lanthanoids needs many repeated steps.", o: ["Their sizes and properties are nearly the same", "They are gases", "They are all radioactive", "They have no electrons"], a: 0, c: "lcon", why: "<b>Lanthanoid contraction</b> makes them very alike." }
    ]
  }
});
