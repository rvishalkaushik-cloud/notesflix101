/* Revision Arena · Class XII Chemistry · Unit 7 · Alcohols, Phenols and Ethers (Parts 1-3 + exercises). Original cases. */
NFArena.register({
  id: "chem12-ch7", cls: "XII", subject: "Chemistry", unit: "Unit", num: "7",
  title: "Alcohols, Phenols and Ethers",
  tagline: "Preparation, hydrogen bonding, acidity of alcohols and phenols, Lucas test, dehydration and oxidation, reactions of phenol, Williamson synthesis and cleavage of ethers.",
  notesLink: "../#chem12-ch7",
  concepts: {
    alcprep: { n: "Preparation of alcohols", s: "alc" },
    phprep: { n: "Preparation of phenols", s: "phen" },
    phys: { n: "Boiling point and solubility", s: "alc" },
    acid: { n: "Acidity of alcohols and phenols", s: "phen" },
    alcreact: { n: "Reactions of alcohols (esters, HX, Lucas)", s: "alc" },
    dehyd: { n: "Dehydration and oxidation", s: "alc" },
    phreact: { n: "Reactions of phenol", s: "phen" },
    ethprep: { n: "Preparation of ethers", s: "eth" },
    ethreact: { n: "Reactions of ethers", s: "eth" },
    tests: { n: "Distinguishing tests and uses", s: "eth" }
  },
  overview: {
    text: "Replacing H of a hydrocarbon by <b>–OH</b> gives <b>alcohols</b> (on sp³ C) and <b>phenols</b> (on a benzene ring); replacing H of –OH by an alkyl or aryl group gives <b>ethers</b>. Hydrogen bonding explains their high boiling points and solubility. Phenols are far more <b>acidic</b> than alcohols because the phenoxide ion is resonance-stabilised. The –OH group strongly <b>activates</b> the ring for electrophilic substitution.",
    points: [
      "Grignard + HCHO → 1° alcohol; + other aldehydes → 2°; + ketones → 3°.",
      "<b>Lucas test</b>: turbidity at once (3°), within ~5 min (2°), none at room temperature (1°).",
      "Phenol + bromine water → white <b>2,4,6-tribromophenol</b>; phenol + FeCl₃ → violet colour.",
      "<b>Williamson synthesis</b>: RX (1°) + R′O⁻Na⁺ → R–O–R′ by SN2."
    ],
    map: {
      center: "Alcohols, Phenols, Ethers",
      branches: [
        { t: "Alcohols", c: ["Preparation", "H-bonding", "Lucas test", "Dehydration, oxidation"] },
        { t: "Phenols", c: ["Cumene process", "Acidity", "Bromination, nitration", "Kolbe, Reimer–Tiemann"] },
        { t: "Ethers", c: ["Williamson synthesis", "Cleavage by HI", "Anisole reactions"] },
        { t: "Tests and uses", c: ["FeCl₃, Lucas", "Methanol poisoning", "Fermentation"] }
      ]
    }
  },
  sections: [
    {
      id: "alc", title: "Alcohols", sub: "Making and reacting –OH on sp³ carbon", icon: "🍶", color: "#EC4899",
      quick: [
        "Preparation: <b>acid-catalysed hydration</b> of alkenes (Markovnikov); <b>hydroboration–oxidation</b> (B₂H₆ then H₂O₂/OH⁻; anti-Markovnikov); <b>reduction</b> of aldehydes/ketones (H₂/Pd, NaBH₄, LiAlH₄) and acids (LiAlH₄).",
        "<b>Grignard route</b>: RMgX + HCHO → 1° alcohol; + RCHO → 2°; + R₂CO → 3° (after hydrolysis).",
        "Higher bp than hydrocarbons or ethers of similar mass because of <b>intermolecular H-bonding</b>; lower alcohols dissolve in water (H-bonds with water); solubility falls as the alkyl part grows.",
        "Reactions as nucleophiles: with acids → <b>esters</b> (conc. H₂SO₄). With HX → RX; <b>Lucas reagent</b> (conc. HCl + anhyd. ZnCl₂) distinguishes 1°, 2°, 3°.",
        "<b>Dehydration</b> with conc. H₂SO₄: ethanol at 443 K → ethene; ease 3° > 2° > 1° (carbocation).",
        "<b>Oxidation</b>: 1° → aldehyde (PCC, or Cu at 573 K) → carboxylic acid (KMnO₄/K₂Cr₂O₇); 2° → ketone; 3° resists oxidation (Cu at 573 K gives an alkene)."
      ],
      table: { cap: "Lucas test and Cu at 573 K", head: ["Alcohol", "Lucas test", "Hot Cu (573 K)"], rows: [["1°", "No turbidity at room temperature", "Aldehyde"], ["2°", "Turbid in about 5 min", "Ketone"], ["3°", "Turbid at once", "Alkene"]] },
      cards: [
        { t: "Worked: Grignard synthesis", tag: "example", b: "<p>CH₃MgBr + CH₃COCH₃ → (CH₃)₃C–OMgBr → (H₂O) → <b>(CH₃)₃COH</b>, 2-methylpropan-2-ol (3°).</p>" },
        { t: "Memory hook", tag: "hook", b: "<p><b>“Formal 1, Aldehyde 2, Ketone 3”</b>: HCHO gives 1°, other aldehydes 2°, ketones 3° alcohols with Grignard reagents.</p>" }
      ],
      exam: ["Write Markovnikov vs anti-Markovnikov products clearly.", "Give the time for turbidity in the Lucas test."]
    },
    {
      id: "phen", title: "Phenols", sub: "–OH on a benzene ring", icon: "⬡", color: "#7B4DFF",
      quick: [
        "Preparation: from <b>chlorobenzene</b> (NaOH, 623 K, 300 atm); fusing <b>benzenesulphonic acid</b> with NaOH; warming a <b>diazonium salt</b> with water; industrially from <b>cumene</b> (gives phenol + acetone).",
        "<b>Acidity</b>: phenol (pKa ≈ 10) is more acidic than ethanol (pKa ≈ 15.9) because the <b>phenoxide ion is resonance-stabilised</b>. Phenol reacts with NaOH; alcohols do not.",
        "Electron-withdrawing groups (–NO₂) at ortho/para <b>increase</b> acidity (p-nitrophenol pKa 7.1); electron-donating groups (–CH₃) <b>decrease</b> it.",
        "–OH activates the ring and is <b>o/p directing</b>. Dilute HNO₃ → o- and p-nitrophenol (separated by <b>steam distillation</b>: o-isomer is volatile due to intramolecular H-bonding). Conc. HNO₃ → <b>picric acid</b> (2,4,6-trinitrophenol).",
        "<b>Bromine water</b> → white ppt of 2,4,6-tribromophenol; Br₂ in CS₂ at low temperature → mono-bromophenols.",
        "<b>Kolbe reaction</b>: sodium phenoxide + CO₂ (then H⁺) → <b>salicylic acid</b>. <b>Reimer–Tiemann</b>: phenol + CHCl₃ + NaOH → <b>salicylaldehyde</b>. Zn dust reduces phenol to benzene; chromic acid oxidises it to benzoquinone."
      ],
      cards: [
        { t: "Why is phenol more acidic than ethanol?", tag: "why", b: "<p>The negative charge on phenoxide spreads over the ring by resonance, stabilising it. Ethoxide's charge stays on O, and the ethyl group even pushes electrons towards it (+I), destabilising it.</p>" },
        { t: "Why is o-nitrophenol steam-volatile?", tag: "why", b: "<p>It forms an <b>intramolecular</b> H-bond (within one molecule), so it does not associate with other molecules or water and evaporates easily. p-Nitrophenol forms <b>intermolecular</b> H-bonds and stays behind.</p>" }
      ],
      exam: ["Draw resonance structures of phenoxide.", "Name both products in nitration with dilute and conc. HNO₃."]
    },
    {
      id: "eth", title: "Ethers and tests", sub: "R–O–R′", icon: "🧴", color: "#12B5A6",
      quick: [
        "<b>Williamson synthesis</b>: R–X + R′–O⁻Na⁺ → R–O–R′ + NaX (SN2). Use a <b>primary halide</b>; a 3° halide gives an alkene by elimination. For tert-butyl methyl ether use (CH₃)₃CONa + CH₃Br.",
        "Dehydration of 1° alcohols with conc. H₂SO₄ at <b>413 K</b> gives ethers (at 443 K ethanol gives ethene).",
        "Ethers have low bp (no H-bonding between molecules) but are slightly soluble in water (H-bond with water).",
        "<b>Cleavage by HI</b>: R–O–R′ + HI → ROH + R′I. With methyl tert-butyl ether, the products are CH₃OH and (CH₃)₃CI (SN1 via 3° cation). Anisole + HI → <b>phenol + CH₃I</b> (aryl–O bond does not break).",
        "–OCH₃ in anisole is activating and <b>o/p directing</b>: bromination (Br₂ in ethanoic acid), nitration and Friedel–Crafts give o- and p-products.",
        "Tests: <b>FeCl₃</b> gives violet with phenol (none with alcohols). Uses: methanol (wood spirit) is poisonous and can cause blindness; ethanol is made by fermentation of sugars."
      ],
      cards: [
        { t: "Worked: choosing the Williamson pair", tag: "example", b: "<p>For CH₃–O–C(CH₃)₃: use <b>(CH₃)₃CO⁻Na⁺ + CH₃Br</b>. The other pair, CH₃O⁻Na⁺ + (CH₃)₃CBr, gives mainly 2-methylpropene by elimination.</p>" },
        { t: "Why does anisole + HI give phenol and CH₃I, not iodobenzene?", tag: "why", b: "<p>The O–aryl bond has partial double-bond character (resonance) and the aryl carbon cannot undergo SN2, so I⁻ attacks the methyl carbon instead.</p>" }
      ],
      exam: ["In Williamson questions, always say which halide is primary.", "For HI cleavage, name both products and the mechanism."]
    }
  ],
  flashcards: [
    { k: "Reaction", c: "alcprep", q: "Hydroboration–oxidation of propene gives?", a: "Propan-1-ol (anti-Markovnikov)." },
    { k: "Rule", c: "alcprep", q: "Grignard + ketone gives which alcohol?", a: "A 3° alcohol." },
    { k: "Reason", c: "phys", q: "Why do alcohols boil higher than ethers of similar mass?", a: "Intermolecular hydrogen bonding." },
    { k: "Test", c: "alcreact", q: "Lucas reagent?", a: "Conc. HCl + anhydrous ZnCl₂." },
    { k: "Test", c: "alcreact", q: "Lucas result for 3° alcohol?", a: "Turbidity immediately." },
    { k: "Reaction", c: "dehyd", q: "Ethanol + conc. H₂SO₄ at 443 K?", a: "Ethene." },
    { k: "Reaction", c: "dehyd", q: "2° alcohol on oxidation gives?", a: "A ketone." },
    { k: "Reagent", c: "dehyd", q: "Reagent to stop 1° alcohol oxidation at aldehyde?", a: "PCC (pyridinium chlorochromate)." },
    { k: "Process", c: "phprep", q: "Industrial process making phenol and acetone together?", a: "Cumene process." },
    { k: "Reason", c: "acid", q: "Why is phenol more acidic than ethanol?", a: "Phenoxide ion is resonance-stabilised." },
    { k: "Trend", c: "acid", q: "Effect of –NO₂ at para on phenol's acidity?", a: "Increases acidity." },
    { k: "Reaction", c: "phreact", q: "Phenol + bromine water?", a: "White ppt of 2,4,6-tribromophenol." },
    { k: "Reaction", c: "phreact", q: "Kolbe reaction product?", a: "Salicylic acid (2-hydroxybenzoic acid)." },
    { k: "Reaction", c: "phreact", q: "Reimer–Tiemann product?", a: "Salicylaldehyde (2-hydroxybenzaldehyde)." },
    { k: "Reaction", c: "ethprep", q: "Williamson synthesis?", a: "RX (1°) + R′ONa → R–O–R′ + NaX (SN2)." },
    { k: "Reaction", c: "ethreact", q: "Anisole + HI?", a: "Phenol + CH₃I." },
    { k: "Test", c: "tests", q: "Test to tell phenol from ethanol?", a: "Neutral FeCl₃: violet with phenol." },
    { k: "Fact", c: "tests", q: "Why is methanol dangerous to drink?", a: "It is poisonous and can cause blindness or death." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Three unlabelled alcohols",
      text: "<p>A lab has three bottles: butan-1-ol, butan-2-ol and 2-methylpropan-2-ol, but the labels have peeled off. <b>Riya</b> has Lucas reagent and a stopwatch.</p>",
      qs: [
        { q: "What is Lucas reagent, and what will she observe for each alcohol?", m: 3, type: "Describe", c: "alcreact", hint: "Turbidity timing.", points: [{ p: "Conc. HCl + anhydrous ZnCl₂", m: 1, k: ["zncl", "hcl"] }, { p: "2-Methylpropan-2-ol (3°): turbid at once", m: 1, k: ["immediate", "at once"] }, { p: "Butan-2-ol (2°): ~5 min; butan-1-ol (1°): no turbidity at room temperature", m: 1, k: ["5 min", "no turbidity"] }], structure: ["Reagent, then each result."], model: "<p><b>Lucas reagent</b> = conc. HCl + anhydrous ZnCl₂.</p><p>3° (2-methylpropan-2-ol): <b>turbidity at once</b>. 2° (butan-2-ol): turbidity in about <b>5 minutes</b>. 1° (butan-1-ol): <b>no turbidity</b> at room temperature.</p>" },
        { q: "Why does the 3° alcohol react fastest?", m: 1, type: "Explain", c: "alcreact", hint: "Carbocation.", points: [{ p: "Forms the most stable (3°) carbocation (SN1)", m: 1, k: ["carbocation", "stable"] }], structure: ["One line."], model: "<p>It reacts by SN1 through the <b>most stable 3° carbocation</b>, so the insoluble alkyl chloride forms fastest.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "Tell phenol from ethanol",
      text: "<p><b>Karan</b> has two colourless liquids: ethanol and a phenol solution. He has FeCl₃, NaOH and bromine water.</p>",
      qs: [
        { q: "Give two tests that tell them apart.", m: 2, type: "Distinguish", c: "tests", hint: "FeCl₃, Br₂ water.", points: [{ p: "Neutral FeCl₃: phenol gives violet colour, ethanol none", m: 1, k: ["fecl", "violet"] }, { p: "Bromine water: phenol gives white ppt (tribromophenol), ethanol none", m: 1, k: ["bromine", "white"] }], structure: ["Two tests."], model: "<p>(i) <b>Neutral FeCl₃</b>: phenol gives a <b>violet</b> colour; ethanol does not.</p><p>(ii) <b>Bromine water</b>: phenol gives a <b>white precipitate</b> of 2,4,6-tribromophenol; ethanol does not.</p>" },
        { q: "Why does phenol dissolve in NaOH but ethanol does not react?", m: 1, type: "Explain", c: "acid", hint: "Acidity.", points: [{ p: "Phenol is more acidic (resonance-stabilised phenoxide), so it forms sodium phenoxide", m: 1, k: ["acid", "phenoxide", "resonance"] }], structure: ["One line."], model: "<p>Phenol is acidic enough (phenoxide is <b>resonance-stabilised</b>) to react with NaOH, forming sodium phenoxide. Ethanol is a weaker acid than water and does not.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "The pain-relief factory",
      text: "<p>A medicine factory makes salicylic acid (used for aspirin) from phenol using CO₂, and salicylaldehyde (for perfumes) using chloroform. Its supplier makes phenol by the cumene process.</p>",
      qs: [
        { q: "Name and write the reactions used to make salicylic acid and salicylaldehyde.", m: 2, type: "Name + equation", c: "phreact", hint: "Kolbe, Reimer–Tiemann.", points: [{ p: "Kolbe: sodium phenoxide + CO₂ (400 K, 4–7 atm), then H⁺ → salicylic acid", m: 1, k: ["kolbe"] }, { p: "Reimer–Tiemann: phenol + CHCl₃ + NaOH, then H⁺ → salicylaldehyde", m: 1, k: ["reimer", "tiemann"] }], structure: ["Each reaction."], model: "<p><b>Kolbe reaction:</b> C₆H₅ONa + CO₂ → (H⁺) → 2-hydroxybenzoic acid (<b>salicylic acid</b>).</p><p><b>Reimer–Tiemann:</b> C₆H₅OH + CHCl₃ + aq. NaOH → (H⁺) → 2-hydroxybenzaldehyde (<b>salicylaldehyde</b>).</p>" },
        { q: "What useful by-product does the cumene process give?", m: 1, type: "State", c: "phprep", hint: "A ketone.", points: [{ p: "Acetone (propanone)", m: 1, k: ["acetone", "propanone"] }], structure: ["One word."], model: "<p><b>Acetone</b> (propanone) forms along with phenol.</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "Separating the nitrophenols",
      text: "<p>Nitrating phenol with dilute HNO₃ gives a mixture of two isomers. <b>Sana</b> separates them by passing steam through the mixture: one comes over with the steam, the other stays. With concentrated HNO₃, she gets a yellow explosive solid.</p>",
      qs: [
        { q: "Which isomer distils with steam and why?", m: 2, type: "Explain", c: "phreact", hint: "Intra- vs intermolecular H-bond.", points: [{ p: "o-Nitrophenol is steam volatile", m: 1, k: ["o-nitro", "ortho"] }, { p: "Intramolecular H-bonding; p-isomer has intermolecular H-bonding", m: 1, k: ["intramolecular"] }], structure: ["Isomer, reason."], model: "<p><b>o-Nitrophenol</b> is steam volatile. It forms an <b>intramolecular H-bond</b>, so its molecules do not associate. p-Nitrophenol forms <b>intermolecular</b> H-bonds and has a higher boiling point.</p>" },
        { q: "Name the yellow solid and say why it is a strong acid.", m: 2, type: "Identify + explain", c: "acid", hint: "Three NO₂ groups.", points: [{ p: "Picric acid (2,4,6-trinitrophenol)", m: 1, k: ["picric", "trinitrophenol"] }, { p: "Three electron-withdrawing –NO₂ groups at o/p stabilise the phenoxide ion", m: 1, k: ["withdraw", "nitro", "stabil"] }], structure: ["Name, reason."], model: "<p><b>Picric acid</b> (2,4,6-trinitrophenol). The three –NO₂ groups at ortho and para positions <b>withdraw electrons</b>, spreading the negative charge of the phenoxide ion and greatly <b>stabilising</b> it, so it is a strong acid.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Making and breaking an ether",
      text: "<p>A fuel lab wants to make <b>tert-butyl methyl ether</b> (an anti-knock additive). <b>Aditya</b> plans to mix sodium methoxide with tert-butyl bromide. His teacher says that will mostly fail. Later the lab heats anisole with HI.</p>",
      qs: [
        { q: "Why will Aditya's plan fail, and what pair of reagents should he use?", m: 3, type: "Explain + correct", c: "ethprep", hint: "3° halide eliminates.", points: [{ p: "With a 3° halide, the alkoxide acts as a base: elimination gives 2-methylpropene", m: 1, k: ["elimination", "alkene", "methylpropene"] }, { p: "Williamson works by SN2 and needs a 1° halide", m: 1, k: ["sn2", "primary", "1°"] }, { p: "Use (CH₃)₃CONa + CH₃Br", m: 1, k: ["ch₃br", "ch3br", "(ch₃)₃cona", "(ch3)3cona"] }], structure: ["Problem, reason, correct pair."], model: "<p>tert-Butyl bromide is a 3° halide; the strong base CH₃O⁻ removes H⁺ and causes <b>elimination</b>, giving mainly <b>2-methylpropene</b>.</p><p>Williamson synthesis is an <b>SN2</b> reaction and needs a <b>primary halide</b>.</p><p>Correct pair: <b>(CH₃)₃CO⁻Na⁺ + CH₃Br → CH₃OC(CH₃)₃ + NaBr</b>.</p>" },
        { q: "Write the products of anisole + HI and explain why iodobenzene is not formed.", m: 2, type: "Predict + explain", c: "ethreact", hint: "Aryl–O bond.", points: [{ p: "Phenol + CH₃I", m: 1, k: ["phenol", "ch₃i", "ch3i"] }, { p: "Aryl–O bond has partial double-bond character; I⁻ attacks the methyl carbon (SN2)", m: 1, k: ["double", "resonance", "methyl"] }], structure: ["Products, reason."], model: "<p>C₆H₅OCH₃ + HI → <b>C₆H₅OH + CH₃I</b>.</p><p>The O–aryl bond has <b>partial double-bond character</b> and the sp² ring carbon cannot be attacked by SN2, so I⁻ attacks the <b>methyl</b> carbon instead.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "alcprep", q: "HCHO + CH₃MgBr, followed by hydrolysis, gives:", o: ["Ethanol", "Methanol", "Propan-2-ol", "Ethanal"], a: 0, hint: "1° alcohol with one more C.", why: "<b>Ethanol</b> (1°)." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "tests", q: "Phenol gives a violet colour with:", o: ["Neutral FeCl₃", "Lucas reagent", "Tollens' reagent", "NaHCO₃"], a: 0, hint: "Iron.", why: "<b>Neutral FeCl₃</b>." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "acid", q: "The most acidic of these is:", o: ["p-Nitrophenol", "Phenol", "p-Cresol", "Ethanol"], a: 0, hint: "Electron-withdrawing group.", why: "<b>p-Nitrophenol</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "dehyd", q: "A 2° alcohol passed over Cu at 573 K gives:", o: ["Ketone", "Aldehyde", "Alkene", "Ether"], a: 0, hint: "Dehydrogenation.", why: "<b>Ketone</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "alcprep", q: "Propene → propan-1-ol is achieved by:", o: ["B₂H₆, then H₂O₂/OH⁻", "Dilute H₂SO₄", "KMnO₄", "HBr"], a: 0, hint: "Anti-Markovnikov.", why: "<b>Hydroboration–oxidation</b>." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "ethreact", q: "CH₃–O–C(CH₃)₃ + HI gives:", o: ["CH₃OH + (CH₃)₃CI", "CH₃I + (CH₃)₃COH", "CH₄ + (CH₃)₃COI", "Only CH₃I"], a: 0, hint: "SN1 at 3° carbon.", why: "Stable 3° cation forms: <b>CH₃OH + (CH₃)₃CI</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "phreact", q: "Phenol + Br₂ in CS₂ at low temperature gives mainly:", o: ["o- and p-bromophenol", "2,4,6-Tribromophenol", "m-Bromophenol", "Bromobenzene"], a: 0, hint: "Less polar solvent.", why: "Monobromination: <b>o- and p-bromophenol</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "dehyd", q: "Which alcohol dehydrates most easily?", o: ["2-Methylpropan-2-ol", "Butan-2-ol", "Butan-1-ol", "Methanol"], a: 0, hint: "Most stable carbocation.", why: "<b>3°</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "phys", q: "Ethanol has a higher boiling point than methoxymethane.", r: "Ethanol molecules form intermolecular hydrogen bonds.", a: 0, hint: "Same formula C₂H₆O.", why: "Both true, and R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "acid", q: "Phenol is more acidic than ethanol.", r: "Phenoxide ion is resonance-stabilised.", a: 0, hint: "Stable conjugate base.", why: "Both true, and R explains A." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "phreact", q: "o-Nitrophenol is less volatile than p-nitrophenol.", r: "o-Nitrophenol has intramolecular hydrogen bonding.", a: 3, hint: "Which is steam volatile?", why: "A is false (o-isomer is <b>more</b> volatile); R is true." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "alcreact", q: "1° alcohols give turbidity immediately with Lucas reagent.", a: false, hint: "3° are fastest.", why: "False: <b>3°</b> give it at once." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "tests", q: "Methanol can cause blindness if consumed.", a: true, hint: "Wood spirit.", why: "True." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "ethprep", q: "Williamson synthesis works best with tertiary alkyl halides.", a: false, hint: "SN2.", why: "False: it needs <b>primary</b> halides." },
    { id: "q15", t: "match", d: "E", m: 4, c: "phreact", q: "Match the reaction with its product.", pairs: [["Kolbe reaction", "Salicylic acid"], ["Reimer–Tiemann reaction", "Salicylaldehyde"], ["Phenol + bromine water", "2,4,6-Tribromophenol"], ["Phenol + conc. HNO₃", "Picric acid"]], hint: "One each.", why: "Each reaction has one product." },
    { id: "q16", t: "match", d: "M", m: 4, c: "alcprep", q: "Match the carbonyl compound (+ CH₃MgBr, then H₂O) with the alcohol type.", pairs: [["HCHO", "1° alcohol"], ["CH₃CHO", "2° alcohol"], ["CH₃COCH₃", "3° alcohol"], ["CO₂", "Carboxylic acid (not an alcohol)"]], hint: "Formal 1, aldehyde 2, ketone 3.", why: "Each carbonyl gives one product type." },
    { id: "q17", t: "match", d: "M", m: 4, c: "dehyd", q: "Match the conditions with the product from ethanol.", pairs: [["Conc. H₂SO₄, 443 K", "Ethene"], ["Conc. H₂SO₄, 413 K", "Ethoxyethane"], ["PCC", "Ethanal"], ["Acidified K₂Cr₂O₇", "Ethanoic acid"]], hint: "Temperature decides alkene vs ether.", why: "Each condition gives one product." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "phprep", q: "The industrial process that gives phenol and acetone is the ______ process.", acc: ["cumene"], hint: "Isopropylbenzene.", why: "<b>Cumene</b>." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "alcreact", q: "Conc. HCl with anhydrous ZnCl₂ is called ______ reagent.", acc: ["lucas", "lucas'", "lucas’"], hint: "L…", why: "<b>Lucas</b> reagent." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "ethreact", q: "Anisole + HI gives phenol and ______.", acc: ["ch3i", "ch₃i", "methyl iodide", "iodomethane"], hint: "Methyl group.", why: "<b>CH₃I</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "phreact", q: "Sodium phenoxide heated with CO₂ under pressure, then acidified, gives ______ acid.", acc: ["salicylic", "2-hydroxybenzoic", "o-hydroxybenzoic"], hint: "Kolbe.", why: "<b>Salicylic</b> acid." },
    { id: "q22", t: "short", d: "E", m: 1, c: "tests", q: "Which alcohol is called wood spirit?", acc: ["methanol", "ch3oh", "ch₃oh", "methyl alcohol"], hint: "One carbon.", why: "<b>Methanol</b>." },
    { id: "q23", t: "short", d: "M", m: 1, c: "dehyd", q: "Name the reagent that oxidises a 1° alcohol to an aldehyde only.", acc: ["pcc", "pyridinium chlorochromate"], hint: "Mild.", why: "<b>PCC</b>." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "acid", q: "Explain why phenol is more acidic than ethanol, and how a –NO₂ group at the para position affects phenol's acidity.", hint: "Resonance; –I and –R.", why: "", points: [{ p: "Phenoxide ion is stabilised by resonance (charge delocalised into ring)", m: 1, k: ["resonance", "delocal"] }, { p: "Ethoxide not stabilised; ethyl +I effect destabilises it", m: 1, k: ["+i", "ethoxide"] }, { p: "p-NO₂ withdraws electrons, further stabilising phenoxide: more acidic", m: 1, k: ["withdraw", "more acidic", "increase"] }], model: "<p>(i) In phenoxide, the negative charge is <b>delocalised</b> over the benzene ring by resonance, stabilising it.</p><p>(ii) In ethoxide the charge stays on O, and the ethyl group's <b>+I effect</b> makes it less stable; so ethanol is a weaker acid.</p><p>(iii) A <b>p-NO₂</b> group withdraws electrons (–I and –R), spreading the charge further: p-nitrophenol is <b>more acidic</b> than phenol.</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "dehyd", q: "Give the mechanism of acid-catalysed dehydration of ethanol to ethene.", hint: "Protonate, lose water, lose H⁺.", why: "", points: [{ p: "Step 1: protonation of –OH to –OH₂⁺", m: 1, k: ["proton"] }, { p: "Step 2: loss of water to form carbocation (slow)", m: 1, k: ["carbocation", "loss of water"] }, { p: "Step 3: loss of H⁺ from adjacent C to form ethene", m: 1, k: ["h⁺", "h+", "ethene"] }], model: "<p>(i) <b>Protonation:</b> CH₃CH₂–OH + H⁺ → CH₃CH₂–OH₂⁺.</p><p>(ii) <b>Carbocation formation</b> (slow): CH₃CH₂–OH₂⁺ → CH₃CH₂⁺ + H₂O.</p><p>(iii) <b>Loss of H⁺:</b> CH₃CH₂⁺ → CH₂=CH₂ + H⁺.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "phprep", q: "Give four methods of preparing phenol.", hint: "Haloarene, sulphonic acid, diazonium, cumene.", why: "", points: [{ p: "From chlorobenzene: NaOH, 623 K, 300 atm, then H⁺", m: 1, k: ["chlorobenzene", "623"] }, { p: "From benzenesulphonic acid: fuse with NaOH, then H⁺", m: 1, k: ["sulphonic", "sulfonic"] }, { p: "From diazonium salt: warm with water", m: 1, k: ["diazonium"] }, { p: "From cumene: air oxidation to hydroperoxide, then dilute acid", m: 1, k: ["cumene"] }], model: "<p>(i) <b>From chlorobenzene:</b> NaOH at 623 K and 300 atm, then acidify.</p><p>(ii) <b>From benzenesulphonic acid:</b> fuse with NaOH, then acidify.</p><p>(iii) <b>From diazonium salts:</b> warm with water: C₆H₅N₂⁺Cl⁻ + H₂O → C₆H₅OH + N₂ + HCl.</p><p>(iv) <b>From cumene:</b> air oxidation to cumene hydroperoxide, then dilute acid → phenol + acetone.</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "ethprep", q: "Explain Williamson synthesis with an equation. Why is it not suitable with tertiary halides? Write the best route to 2-methoxy-2-methylpropane.", hint: "SN2 vs elimination.", why: "", points: [{ p: "RX + R′ONa → R–O–R′ + NaX", m: 1, k: ["rona", "r′ona", "nax"] }, { p: "SN2 mechanism", m: 1, k: ["sn2"] }, { p: "3° halide: alkoxide acts as base, elimination gives alkene", m: 1, k: ["elimination", "alkene"] }, { p: "(CH₃)₃CONa + CH₃Br → (CH₃)₃COCH₃", m: 1, k: ["ch₃br", "ch3br"] }], model: "<p><b>Williamson synthesis:</b> R–X + R′–O⁻Na⁺ → R–O–R′ + NaX, an <b>SN2</b> reaction.</p><p>With a 3° halide, the alkoxide (a strong base) removes a β-H, so <b>elimination</b> gives an alkene instead of an ether.</p><p>Best route: <b>(CH₃)₃CO⁻Na⁺ + CH₃Br → (CH₃)₃C–O–CH₃ + NaBr</b>.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "phreact", q: "(a) Why is –OH group o/p directing and activating? (b) Write the products of phenol with: bromine water; dilute HNO₃; conc. HNO₃; Zn dust; CHCl₃/NaOH.", hint: "Resonance; five reactions.", why: "", points: [{ p: "(a) Lone pair of O delocalised into ring (+R): electron density high at o and p", m: 1, k: ["lone pair", "+r", "resonance"] }, { p: "Bromine water → 2,4,6-tribromophenol (white ppt)", m: 1, k: ["tribromo"] }, { p: "Dilute HNO₃ → o- and p-nitrophenol", m: 1, k: ["nitrophenol"] }, { p: "Conc. HNO₃ → picric acid", m: 1, k: ["picric"] }, { p: "Zn dust → benzene", m: 1, k: ["benzene"] }, { p: "CHCl₃/NaOH → salicylaldehyde (Reimer–Tiemann)", m: 1, k: ["salicylaldehyde"] }], model: "<p>(a) A lone pair on O is <b>delocalised into the ring</b> (+R effect), increasing electron density, especially at ortho and para positions: activating and o/p directing.</p><p>(b) Bromine water → <b>2,4,6-tribromophenol</b> (white ppt). Dilute HNO₃ → <b>o- and p-nitrophenol</b>. Conc. HNO₃ → <b>picric acid</b>. Zn dust → <b>benzene</b>. CHCl₃/NaOH → <b>salicylaldehyde</b> (Reimer–Tiemann).</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "tests", q: "A sugarcane factory converts molasses into ethanol using yeast. The process is:", o: ["Fermentation", "Hydroboration", "Williamson synthesis", "Cumene process"], a: 0, hint: "Enzymes.", why: "<b>Fermentation</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "phys", q: "Glycerol mixes completely with water but hexan-1-ol barely dissolves. The best explanation is:", o: ["Glycerol has three –OH groups for H-bonding; hexanol's large alkyl part is hydrophobic", "Glycerol is an acid", "Hexanol is ionic", "Water is non-polar"], a: 0, hint: "OH count vs chain length.", why: "<b>More –OH, more H-bonding; long chain is hydrophobic</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "phreact", passage: "On adding bromine water to a sample, a white precipitate forms immediately and the orange colour disappears.", q: "The sample is likely:", o: ["Phenol", "Ethanol", "Diethyl ether", "Methanol"], a: 0, hint: "Tribromo.", why: "<b>Phenol</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "alcprep", q: "To make 2-methylpropan-2-ol, which pair should be used (followed by hydrolysis)?", passage: "A student needs a 3° alcohol using a Grignard reagent.", o: ["CH₃MgBr + acetone", "CH₃MgBr + HCHO", "CH₃MgBr + ethanal", "CH₃MgBr + CO₂"], a: 0, hint: "Ketone.", why: "<b>Acetone</b> gives the 3° alcohol." },
    { id: "q33", t: "case", d: "C", m: 1, c: "ethreact", passage: "A sample of anisole is nitrated with a mixture of conc. HNO₃ and H₂SO₄.", q: "The main products are:", o: ["o- and p-nitroanisole", "m-nitroanisole", "Nitrobenzene + methanol", "Phenol"], a: 0, hint: "–OCH₃ directs.", why: "–OCH₃ is <b>o/p directing</b>." }
  ],
  find: {
    mcq: [
      { s: "Propene + water with acid gives propan-2-ol.", o: ["Acid-catalysed hydration (Markovnikov)", "Hydroboration–oxidation", "Williamson synthesis", "Kolbe reaction"], a: 0, c: "alcprep", d: "E", why: "<b>Markovnikov hydration</b>." },
      { s: "Butanal reduced with NaBH₄.", o: ["Reduction to a 1° alcohol", "Oxidation", "Dehydration", "Esterification"], a: 0, c: "alcprep", d: "E", why: "<b>Reduction</b>." },
      { s: "Cumene hydroperoxide splits into phenol and acetone.", o: ["Cumene process", "Dow process", "Kolbe reaction", "Reimer–Tiemann"], a: 0, c: "phprep", d: "M", why: "<b>Cumene process</b>." },
      { s: "Ethanol boils at 351 K but methoxymethane at 248 K.", o: ["Hydrogen bonding", "Branching", "Resonance", "Inductive effect"], a: 0, c: "phys", d: "E", why: "<b>H-bonding</b> in ethanol." },
      { s: "Phenol dissolves in NaOH; ethanol does not react.", o: ["Higher acidity of phenol", "Lower bp of phenol", "Ethanol is a base", "Phenol is an ether"], a: 0, c: "acid", d: "E", why: "<b>Phenol is more acidic</b>." },
      { s: "Picric acid is a much stronger acid than phenol.", o: ["Three –NO₂ groups stabilise the anion", "It has more H atoms", "It is a solid", "It forms H-bonds"], a: 0, c: "acid", d: "C", why: "<b>Electron-withdrawing</b> groups." },
      { s: "Alcohol + acetic acid with conc. H₂SO₄ gives a fruity smell.", o: ["Esterification", "Dehydration", "Oxidation", "Williamson synthesis"], a: 0, c: "alcreact", d: "E", why: "<b>Ester</b>." },
      { s: "Turbidity appears after about five minutes with HCl/ZnCl₂.", o: ["2° alcohol", "1° alcohol", "3° alcohol", "Phenol"], a: 0, c: "alcreact", d: "M", why: "<b>2°</b>." },
      { s: "Butan-2-ol over hot copper gives butanone.", o: ["Dehydrogenation (oxidation)", "Dehydration", "Reduction", "Hydration"], a: 0, c: "dehyd", d: "M", why: "<b>Dehydrogenation</b>." },
      { s: "Ethanol at 443 K with conc. H₂SO₄.", o: ["Dehydration to ethene", "Ether formation", "Oxidation", "Esterification"], a: 0, c: "dehyd", d: "M", why: "<b>Ethene</b>." },
      { s: "Phenol + CHCl₃ + NaOH gives an aldehyde.", o: ["Reimer–Tiemann reaction", "Kolbe reaction", "Cannizzaro reaction", "Williamson synthesis"], a: 0, c: "phreact", d: "M", why: "<b>Reimer–Tiemann</b>." },
      { s: "Sodium phenoxide + CO₂ → aspirin's parent acid.", o: ["Kolbe reaction", "Reimer–Tiemann", "Friedel–Crafts", "Dow process"], a: 0, c: "phreact", d: "C", why: "<b>Kolbe</b>: salicylic acid." },
      { s: "CH₃CH₂ONa + CH₃I gives an ether.", o: ["Williamson synthesis", "Lucas test", "Kolbe reaction", "Esterification"], a: 0, c: "ethprep", d: "E", why: "<b>Williamson synthesis</b>." },
      { s: "Ethanol and conc. H₂SO₄ at 413 K give a volatile anaesthetic.", o: ["Ether by dehydration", "Ethene", "Ethanal", "Ethanoic acid"], a: 0, c: "ethprep", d: "C", why: "<b>Ethoxyethane</b>." },
      { s: "Ether + HI gives an alcohol and an alkyl iodide.", o: ["Cleavage of ethers", "Williamson synthesis", "Dehydration", "Kolbe reaction"], a: 0, c: "ethreact", d: "M", why: "<b>Cleavage by HI</b>." },
      { s: "Violet colour with FeCl₃.", o: ["Phenol test", "Lucas test", "Iodoform test", "Tollens' test"], a: 0, c: "tests", d: "E", why: "<b>Phenol</b>." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["Propene → propan-1-ol with B₂H₆.", "Hydroboration–oxidation", "alcprep"], ["Phenoxide resonance.", "Acidity of phenol", "acid"], ["Turbid at once with HCl/ZnCl₂.", "Lucas test (3°)", "alcreact"], ["CO₂ + phenoxide → salicylic acid.", "Kolbe reaction", "phreact"], ["1° RX + RONa.", "Williamson synthesis", "ethprep"], ["Anisole + HI → phenol + CH₃I.", "Cleavage of ethers", "ethreact"]] }
    ],
    wrong: [
      { stmts: ["Phenol is more acidic than ethanol.", "–NO₂ at para increases phenol's acidity.", "–CH₃ at para increases phenol's acidity.", "Picric acid is strongly acidic."], a: 2, c: "acid", why: "–CH₃ <b>decreases</b> acidity." },
      { stmts: ["1° alcohol + PCC gives an aldehyde.", "2° alcohol gives a ketone on oxidation.", "3° alcohols are easily oxidised to ketones.", "1° alcohols give acids with KMnO₄."], a: 2, c: "dehyd", why: "3° alcohols <b>resist</b> oxidation." },
      { stmts: ["Williamson synthesis is SN2.", "It works best with primary halides.", "Anisole + HI gives iodobenzene.", "Ethers have lower bp than isomeric alcohols."], a: 2, c: "ethreact", why: "Anisole + HI gives <b>phenol + CH₃I</b>." }
    ],
    para: [
      { target: "Lucas test", c: "alcreact", sents: ["Tara had three unknown alcohols.", "She added HCl with anhydrous ZnCl₂ and timed how quickly each went cloudy.", "Her lab partner recorded room temperature.", "They washed the test tubes afterwards."], a: 1, why: "Timing turbidity: <b>Lucas test</b>." },
      { target: "Steam distillation of nitrophenols", c: "phreact", sents: ["Ishaan nitrated phenol with dilute nitric acid.", "He wore safety goggles.", "He passed steam through the mixture, and the ortho isomer came over while the para isomer stayed.", "He weighed both products."], a: 2, why: "o-isomer is steam volatile: <b>intramolecular H-bond</b>." },
      { target: "Williamson synthesis", c: "ethprep", sents: ["A perfume chemist needed an ether.", "She treated sodium ethoxide with bromomethane.", "The perfume launched in spring.", "It sold in 50 mL bottles."], a: 1, why: "Alkoxide + 1° halide: <b>Williamson</b>." }
    ],
    explain: [
      { s: "Ethanol mixes with water in all proportions, but ethane does not.", o: ["Ethanol forms H-bonds with water", "Ethane is ionic", "Ethanol is acidic", "Ethane reacts with water"], a: 0, c: "phys", why: "The clue is <i>mixes</i>: <b>H-bonding with water</b>." },
      { s: "o-Nitrophenol boils lower than p-nitrophenol.", o: ["Intramolecular H-bonding in the ortho isomer", "p-isomer is lighter", "ortho isomer is ionic", "Resonance in para only"], a: 0, c: "phreact", why: "<b>Intramolecular</b> H-bond reduces association." },
      { s: "Phenol reacts with bromine water without a catalyst, but benzene needs FeBr₃.", o: ["–OH strongly activates the ring", "Phenol is acidic", "Benzene is saturated", "Bromine water is a catalyst"], a: 0, c: "phreact", why: "–OH is strongly <b>activating</b>." },
      { s: "tert-Butyl bromide and sodium methoxide give mostly an alkene.", o: ["Elimination dominates with 3° halides", "SN2 is fastest for 3°", "Methoxide is acidic", "Bromide is a nucleophile"], a: 0, c: "ethprep", why: "3° halide + strong base: <b>elimination</b>." }
    ]
  }
});
