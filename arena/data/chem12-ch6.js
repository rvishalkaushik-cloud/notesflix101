/* Revision Arena · Class XII Chemistry · Unit 6 · Haloalkanes and Haloarenes (Parts 1-3 + exercises). Original cases. */
NFArena.register({
  id: "chem12-ch6", cls: "XII", subject: "Chemistry", unit: "Unit", num: "6",
  title: "Haloalkanes and Haloarenes",
  tagline: "Naming and preparation, SN1 and SN2, optical activity, elimination, reactions with metals, why haloarenes resist substitution, and polyhalogen compounds.",
  notesLink: "../#chem12-ch6",
  concepts: {
    classify: { n: "Classification and naming", s: "prep" },
    prep: { n: "Preparation of haloalkanes", s: "prep" },
    arprep: { n: "Preparation of haloarenes", s: "prep" },
    phys: { n: "Physical properties", s: "prep" },
    sn: { n: "Nucleophilic substitution SN1 and SN2", s: "react" },
    stereo: { n: "Chirality and optical activity", s: "react" },
    elim: { n: "Elimination and Saytzeff rule", s: "react" },
    metals: { n: "Reactions with metals (Grignard, Wurtz)", s: "react" },
    arreact: { n: "Reactions of haloarenes", s: "aryl" },
    poly: { n: "Polyhalogen compounds", s: "poly" }
  },
  overview: {
    text: "Replacing H by a halogen gives <b>haloalkanes</b> (sp³ C–X) and <b>haloarenes</b> (sp² C–X on a ring). The polar C–X bond makes haloalkanes react with <b>nucleophiles</b> by <b>SN1</b> or <b>SN2</b>, or lose HX by <b>elimination</b>. Haloarenes resist nucleophilic substitution but undergo <b>electrophilic substitution</b> at the ortho and para positions. Several <b>polyhalogen compounds</b> are useful but harm the environment.",
    points: [
      "SOCl₂ is best for alcohol → RCl: by-products SO₂ and HCl are gases.",
      "SN2: one step, <b>inversion</b>, CH₃X fastest. SN1: carbocation, <b>racemisation</b>, 3° fastest.",
      "Alcoholic KOH → elimination (<b>Saytzeff</b>: more substituted alkene); aqueous KOH → substitution.",
      "Haloarenes are unreactive to nucleophiles because of <b>resonance</b> (partial C=X), sp² carbon and an unstable phenyl cation."
    ],
    map: {
      center: "Halo compounds",
      branches: [
        { t: "Preparation", c: ["From alcohols", "Free radical / electrophilic halogenation", "Sandmeyer", "Finkelstein, Swarts"] },
        { t: "Haloalkane reactions", c: ["SN1 vs SN2", "Optical activity", "Elimination", "Grignard, Wurtz"] },
        { t: "Haloarenes", c: ["Low reactivity", "o/p directing", "Wurtz–Fittig"] },
        { t: "Polyhalogens", c: ["CHCl₃, CCl₄", "Iodoform", "Freons, DDT"] }
      ]
    }
  },
  sections: [
    {
      id: "prep", title: "Classification, preparation and properties", sub: "Making C–X bonds", icon: "🧪", color: "#EC4899",
      quick: [
        "Classified as mono/di/poly-halo; and by the carbon bearing X: <b>1°, 2°, 3°</b>, <b>allylic</b>, <b>benzylic</b>, <b>vinylic</b>, <b>aryl</b>.",
        "From alcohols: ROH + HX (ZnCl₂ for HCl), PCl₃, PCl₅ or <b>SOCl₂</b> (best: SO₂ and HCl escape as gases, leaving pure RCl).",
        "<b>Finkelstein</b>: RCl/RBr + NaI in dry acetone → RI (NaCl/NaBr precipitate). <b>Swarts</b>: RBr/RCl + AgF, Hg₂F₂, CoF₂ or SbF₃ → RF.",
        "Haloarenes: benzene + Cl₂ with FeCl₃ (dark) → chlorobenzene (+ o/p dichloro). <b>Sandmeyer</b>: ArN₂⁺Cl⁻ + CuCl/HCl → ArCl; CuBr/HBr → ArBr; KI → ArI.",
        "Boiling points rise with the size of X: <b>RI > RBr > RCl > RF</b>; for isomers, <b>more branching → lower bp</b> (smaller surface).",
        "Para-dihalobenzenes melt higher than ortho/meta because they <b>pack better</b> in the crystal."
      ],
      cards: [
        { t: "Why is SOCl₂ preferred?", tag: "why", b: "<p>ROH + SOCl₂ → RCl + SO₂↑ + HCl↑. Both by-products are gases, so the haloalkane is left almost pure.</p>" },
        { t: "Why does Finkelstein work?", tag: "why", b: "<p>NaI dissolves in dry acetone, but NaCl and NaBr do not. They precipitate, pulling the equilibrium towards RI (Le Chatelier).</p>" }
      ],
      exam: ["Name the reagent and give the full equation for each preparation.", "Explain bp trends using van der Waals forces and surface area."]
    },
    {
      id: "react", title: "Reactions of haloalkanes", sub: "Substitution, elimination and metals", icon: "🔁", color: "#7B4DFF",
      quick: [
        "<b>SN2</b>: one step; nucleophile attacks from the back as X leaves; rate = k[RX][Nu⁻] (second order); <b>inversion of configuration</b> (Walden). Reactivity: <b>CH₃X > 1° > 2° > 3°</b> (steric hindrance).",
        "<b>SN1</b>: two steps; slow ionisation to a <b>carbocation</b>; rate = k[RX] (first order); polar protic solvents help; <b>racemisation</b>. Reactivity: <b>3° > 2° > 1°</b> (carbocation stability). Allylic and benzylic halides react fast by SN1 (resonance-stabilised cation).",
        "<b>Chiral</b> carbon: four different groups; <b>enantiomers</b> are non-superimposable mirror images; a 50:50 mixture (<b>racemic</b>) shows no rotation.",
        "<b>Elimination</b> (alcoholic KOH): loses HX from adjacent carbons; <b>Saytzeff rule</b>: the more substituted alkene is the main product. 2-Bromobutane → but-2-ene (major).",
        "KCN → nitrile (C attacks); AgCN → isocyanide (N attacks): CN⁻ is <b>ambident</b>. KNO₂ → alkyl nitrite (R–ONO); AgNO₂ → nitroalkane (R–NO₂).",
        "<b>Grignard reagent</b>: RX + Mg in dry ether → RMgX (keep away from water: RMgX + H₂O → RH). <b>Wurtz</b>: 2RX + 2Na (dry ether) → R–R."
      ],
      table: { cap: "SN1 vs SN2", head: ["Feature", "SN1", "SN2"], rows: [["Steps", "Two (carbocation)", "One"], ["Rate law", "k[RX]", "k[RX][Nu⁻]"], ["Fastest substrate", "3°", "CH₃X / 1°"], ["Stereochemistry", "Racemisation", "Inversion"], ["Solvent", "Polar protic", "Polar aprotic"]] },
      cards: [
        { t: "Worked: predict the product", tag: "example", b: "<p>(CH₃)₃CBr + H₂O → (CH₃)₃COH by <b>SN1</b> (stable 3° carbocation).</p><p>CH₃CH₂Br + OH⁻ (aq) → CH₃CH₂OH by <b>SN2</b>.</p>" },
        { t: "Memory hook", tag: "hook", b: "<p><b>“Aqueous Substitutes, Alcoholic Eliminates.”</b> Aqueous KOH → alcohol; alcoholic KOH → alkene.</p>" }
      ],
      exam: ["Draw the SN2 transition state with the nucleophile and X on opposite sides.", "State the Saytzeff rule and name the major alkene."]
    },
    {
      id: "aryl", title: "Haloarenes", sub: "Why aryl halides are stubborn", icon: "⬡", color: "#12B5A6",
      quick: [
        "Haloarenes are much <b>less reactive</b> to nucleophilic substitution: (i) <b>resonance</b> gives C–X partial double-bond character; (ii) C is <b>sp²</b> (more s character, shorter, stronger bond); (iii) the <b>phenyl cation</b> is unstable; (iv) electron-rich ring repels the nucleophile.",
        "<b>Dow process</b>: chlorobenzene + NaOH at 623 K and 300 atm → phenol.",
        "Electron-withdrawing <b>–NO₂ at ortho/para</b> makes substitution easy: 4-nitrochlorobenzene reacts at 443 K; 2,4-dinitro at 368 K; 2,4,6-trinitro with warm water.",
        "Electrophilic substitution: halogen is <b>deactivating</b> (–I effect) but <b>ortho/para directing</b> (+R effect). Chlorobenzene gives o- and p-chloro products on nitration, sulphonation, halogenation and Friedel–Crafts.",
        "<b>Wurtz–Fittig</b>: ArX + RX + 2Na → Ar–R. <b>Fittig</b>: 2ArX + 2Na → Ar–Ar (biphenyl)."
      ],
      cards: [
        { t: "Why does –NO₂ at para help?", tag: "why", b: "<p>The negative charge of the intermediate (Meisenheimer complex) spreads onto the oxygen atoms of the nitro group at ortho/para positions, stabilising it. A meta nitro group cannot do this.</p>" },
        { t: "Deactivating yet o/p directing?", tag: "why", b: "<p>–I effect withdraws electrons from the whole ring (slower), but +R effect puts extra electron density at ortho and para positions (direction).</p>" }
      ],
      exam: ["Give all four reasons for low reactivity, or at least resonance and sp² carbon.", "Show resonance structures of chlorobenzene."]
    },
    {
      id: "poly", title: "Polyhalogen compounds", sub: "Useful but handle with care", icon: "🌍", color: "#FF8A1F",
      quick: [
        "<b>Dichloromethane</b>: paint remover, solvent; harms the nervous system.",
        "<b>Chloroform</b> (CHCl₃): solvent; once an anaesthetic. Air and light oxidise it to poisonous <b>phosgene</b> (COCl₂), so it is stored in <b>dark bottles filled to the brim</b>.",
        "<b>Iodoform</b> (CHI₃): antiseptic, because it releases free iodine; replaced now because of its smell.",
        "<b>Carbon tetrachloride</b>: once used in fire extinguishers and refrigerants; damages the liver and depletes the <b>ozone layer</b>.",
        "<b>Freons</b> (CFCs, e.g. CCl₂F₂): refrigerants and aerosol propellants; very stable, reach the stratosphere and <b>destroy ozone</b>.",
        "<b>DDT</b>: insecticide against malaria mosquitoes; <b>not biodegradable</b>, accumulates in fatty tissue; banned in many countries."
      ],
      cards: [
        { t: "Why do freons harm ozone?", tag: "why", b: "<p>They are unreactive near the ground, drift to the stratosphere, and UV light breaks C–Cl bonds. The Cl radicals destroy ozone in a chain reaction.</p>" }
      ],
      exam: ["Give one use and one harmful effect for each compound."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "classify", q: "Benzylic halide?", a: "X attached to an sp³ carbon next to a benzene ring (e.g. C₆H₅CH₂Cl)." },
    { k: "Definition", c: "classify", q: "Vinylic halide?", a: "X attached to an sp² carbon of a C=C (e.g. CH₂=CHCl)." },
    { k: "Reagent", c: "prep", q: "Best reagent to convert ROH to RCl?", a: "SOCl₂ (gaseous by-products)." },
    { k: "Reaction", c: "prep", q: "Finkelstein reaction?", a: "RCl/RBr + NaI in dry acetone → RI." },
    { k: "Reaction", c: "prep", q: "Swarts reaction?", a: "RCl/RBr + AgF (or Hg₂F₂, SbF₃) → RF." },
    { k: "Reaction", c: "arprep", q: "Sandmeyer reaction?", a: "ArN₂⁺Cl⁻ + CuCl/HCl (or CuBr/HBr) → ArCl (ArBr) + N₂." },
    { k: "Trend", c: "phys", q: "Boiling point order of ethyl halides?", a: "C₂H₅I > C₂H₅Br > C₂H₅Cl > C₂H₅F." },
    { k: "Fact", c: "sn", q: "Stereochemistry of SN2?", a: "Inversion of configuration." },
    { k: "Fact", c: "sn", q: "Order of SN1 reactivity?", a: "3° > 2° > 1° (carbocation stability)." },
    { k: "Definition", c: "stereo", q: "Racemic mixture?", a: "Equal amounts of two enantiomers; no optical rotation." },
    { k: "Definition", c: "stereo", q: "Chiral carbon?", a: "A carbon bonded to four different groups." },
    { k: "Rule", c: "elim", q: "Saytzeff rule?", a: "In elimination, the more substituted alkene is the major product." },
    { k: "Reagent", c: "metals", q: "Grignard reagent?", a: "RMgX, made from RX + Mg in dry ether." },
    { k: "Reaction", c: "metals", q: "Wurtz reaction?", a: "2RX + 2Na (dry ether) → R–R + 2NaX." },
    { k: "Reason", c: "arreact", q: "Main reason haloarenes resist nucleophilic substitution?", a: "Resonance gives C–X partial double-bond character." },
    { k: "Fact", c: "arreact", q: "Halogen on benzene: activating or deactivating? Directing?", a: "Deactivating, but ortho/para directing." },
    { k: "Fact", c: "poly", q: "Why is chloroform stored in dark bottles?", a: "Light and air oxidise it to poisonous phosgene (COCl₂)." },
    { k: "Fact", c: "poly", q: "Why is DDT a problem?", a: "It is not biodegradable and builds up in fatty tissue." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "The paint shop and the old freezer",
      text: "<p><b>Meher</b>'s uncle uses dichloromethane to strip paint and keeps a bottle of chloroform half full on a sunny shelf. An old freezer in the shop runs on CCl₂F₂.</p>",
      qs: [
        { q: "Why is the half-full bottle of chloroform on a sunny shelf a danger? How should it be stored?", m: 2, type: "Explain", c: "poly", hint: "Phosgene.", points: [{ p: "Air + light oxidise CHCl₃ to poisonous phosgene (COCl₂)", m: 1, k: ["phosgene", "cocl"] }, { p: "Store in dark bottles filled to the brim", m: 1, k: ["dark", "brim", "full"] }], structure: ["Hazard, then storage."], model: "<p>In light, air oxidises chloroform to <b>phosgene (COCl₂)</b>, a poisonous gas: 2CHCl₃ + O₂ → 2COCl₂ + 2HCl.</p><p>Store it in <b>dark-coloured bottles filled to the brim</b> to keep out light and air.</p>" },
        { q: "What harm can the freezer's CCl₂F₂ do when it leaks?", m: 1, type: "Explain", c: "poly", hint: "Stratosphere.", points: [{ p: "It reaches the stratosphere and depletes the ozone layer", m: 1, k: ["ozone"] }], structure: ["One line."], model: "<p>CCl₂F₂ (a freon) is very stable, rises to the stratosphere, and UV light releases Cl radicals that <b>destroy ozone</b>.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "Clean chlorides from alcohols",
      text: "<p><b>Dev</b> must make pure 1-chlorobutane from butan-1-ol. He can use HCl/ZnCl₂, PCl₅ or SOCl₂. Later he needs 1-iodobutane and 1-fluorobutane from it.</p>",
      qs: [
        { q: "Which reagent should he choose, and why?", m: 2, type: "Choose + reason", c: "prep", hint: "Gaseous by-products.", points: [{ p: "SOCl₂ (thionyl chloride)", m: 1, k: ["socl"] }, { p: "By-products SO₂ and HCl are gases and escape, leaving pure product", m: 1, k: ["gas", "so₂", "so2"] }], structure: ["Choice, then reason."], model: "<p><b>SOCl₂</b>: CH₃(CH₂)₃OH + SOCl₂ → CH₃(CH₂)₃Cl + SO₂↑ + HCl↑. The by-products are <b>gases</b> and escape, so the chloride is nearly pure.</p>" },
        { q: "Name the reactions to make the iodide and the fluoride.", m: 2, type: "Name", c: "prep", hint: "NaI; AgF.", points: [{ p: "Finkelstein: NaI in dry acetone → iodide", m: 1, k: ["finkelstein"] }, { p: "Swarts: AgF / SbF₃ → fluoride", m: 1, k: ["swarts"] }], structure: ["Two reactions."], model: "<p>Iodide: <b>Finkelstein reaction</b> (NaI in dry acetone). Fluoride: <b>Swarts reaction</b> (AgF, Hg₂F₂, CoF₂ or SbF₃).</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Same reagent, different paths",
      text: "<p>In two flasks, <b>Riya</b> treats 2-bromobutane with KOH. In flask A the KOH is dissolved in water; in flask B in ethanol and heated. A third flask holds tert-butyl bromide in water.</p>",
      qs: [
        { q: "Name the main product in flasks A and B, and the rule used in B.", m: 3, type: "Predict", c: "elim", hint: "Aqueous substitutes, alcoholic eliminates.", points: [{ p: "A: butan-2-ol (substitution)", m: 1, k: ["butan-2-ol", "2-butanol"] }, { p: "B: but-2-ene (major) by elimination", m: 1, k: ["but-2-ene", "2-butene"] }, { p: "Saytzeff (Zaitsev) rule: more substituted alkene", m: 1, k: ["saytzeff", "zaitsev"] }], structure: ["A, B, rule."], model: "<p>A (aqueous KOH): substitution → <b>butan-2-ol</b>.</p><p>B (alcoholic KOH, heat): elimination → <b>but-2-ene</b> (major) with some but-1-ene.</p><p><b>Saytzeff rule:</b> the more substituted alkene is the main product.</p>" },
        { q: "Which mechanism does tert-butyl bromide follow in water? Give two features.", m: 2, type: "Identify + describe", c: "sn", hint: "3° carbocation.", points: [{ p: "SN1", m: 1, k: ["sn1"] }, { p: "Two steps via a stable 3° carbocation; first-order rate = k[RX] (racemisation if chiral)", m: 1, k: ["carbocation", "first", "k[rx]"] }], structure: ["Mechanism, features."], model: "<p><b>SN1.</b> (i) Slow ionisation forms a stable 3° carbocation, then water attacks fast. (ii) Rate = k[RX] (first order); a polar protic solvent like water helps; a chiral substrate would give racemisation.</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "The mirror-image painkiller",
      text: "<p>A pharmacy student learns that 2-bromobutane has a chiral carbon. When an optically pure sample reacts with OH⁻ by SN2, the product rotates light the opposite way. A sample that reacts by SN1 gives a product with no rotation.</p>",
      qs: [
        { q: "Why is 2-bromobutane chiral? What are its two forms called?", m: 2, type: "Explain", c: "stereo", hint: "Four different groups.", points: [{ p: "C2 bears four different groups: H, Br, CH₃, C₂H₅", m: 1, k: ["four different"] }, { p: "Enantiomers (d and l)", m: 1, k: ["enantiomer"] }], structure: ["Reason, name."], model: "<p>C-2 carries four different groups (H, Br, CH₃, C₂H₅), so it is a <b>chiral centre</b>. Its two non-superimposable mirror-image forms are <b>enantiomers</b> (d and l).</p>" },
        { q: "Explain the stereochemical results of the SN2 and SN1 reactions.", m: 2, type: "Explain", c: "sn", hint: "Back-side attack; planar cation.", points: [{ p: "SN2: back-side attack gives inversion of configuration", m: 1, k: ["inversion", "back"] }, { p: "SN1: planar carbocation attacked from both sides → racemic mixture (no rotation)", m: 1, k: ["racem", "planar", "both"] }], structure: ["SN2, then SN1."], model: "<p><b>SN2:</b> OH⁻ attacks from the side opposite Br, so the configuration flips: <b>inversion</b>.</p><p><b>SN1:</b> the planar carbocation is attacked equally from both faces, giving a <b>racemic mixture</b> with no net rotation.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "The stubborn chlorobenzene",
      text: "<p>A dye factory finds that chlorobenzene will not react with aqueous NaOH under normal lab conditions, while 2,4,6-trinitrochlorobenzene reacts with just warm water. Industrially, chlorobenzene is converted to phenol only at 623 K and 300 atm.</p>",
      qs: [
        { q: "Give three reasons why chlorobenzene is so unreactive to nucleophilic substitution.", m: 3, type: "Explain", c: "arreact", hint: "Resonance, sp², phenyl cation.", points: [{ p: "Resonance: partial double-bond character of C–Cl", m: 1, k: ["resonance", "double"] }, { p: "sp² carbon: shorter, stronger C–Cl bond", m: 1, k: ["sp²", "sp2"] }, { p: "Phenyl cation unstable / electron-rich ring repels nucleophile", m: 1, k: ["phenyl cation", "repul", "unstable"] }], structure: ["Three reasons."], model: "<p>(i) <b>Resonance</b>: a Cl lone pair delocalises into the ring, giving C–Cl partial double-bond character.</p><p>(ii) The carbon is <b>sp²</b>, so the bond is shorter and stronger.</p><p>(iii) The <b>phenyl cation</b> would be very unstable (no SN1), and the electron-rich ring <b>repels</b> nucleophiles (no SN2).</p>" },
        { q: "Why does the trinitro compound react so easily? Name the industrial process for phenol.", m: 2, type: "Explain + name", c: "arreact", hint: "o/p NO₂.", points: [{ p: "–NO₂ groups at o/p withdraw electrons and stabilise the negatively charged intermediate", m: 1, k: ["withdraw", "nitro", "stabil"] }, { p: "Dow process", m: 1, k: ["dow"] }], structure: ["Reason, name."], model: "<p>The three –NO₂ groups at ortho and para positions <b>withdraw electrons</b>, making the ring carbon easier to attack and <b>stabilising the negative intermediate</b> by resonance onto the nitro groups.</p><p>Industrial process: <b>Dow process</b>.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "classify", q: "CH₂=CH–CH₂Cl is a:", o: ["Allylic halide", "Vinylic halide", "Benzylic halide", "Aryl halide"], a: 0, hint: "Cl next to C=C.", why: "Cl on the sp³ carbon next to C=C: <b>allylic</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "phys", q: "Which has the highest boiling point?", o: ["CH₃I", "CH₃Br", "CH₃Cl", "CH₃F"], a: 0, hint: "Largest halogen.", why: "<b>CH₃I</b>." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "sn", q: "Which reacts fastest by SN2?", o: ["CH₃Br", "(CH₃)₂CHBr", "(CH₃)₃CBr", "CH₃CH₂Br"], a: 0, hint: "Least hindered.", why: "<b>CH₃Br</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "sn", q: "Which reacts fastest by SN1?", o: ["(CH₃)₃CBr", "CH₃CH₂Br", "CH₃Br", "(CH₃)₂CHBr"], a: 0, hint: "Most stable cation.", why: "<b>3°</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "metals", q: "Alkyl halide + AgCN gives mainly:", o: ["Isocyanide", "Nitrile", "Amine", "Alcohol"], a: 0, hint: "N attacks.", why: "<b>Isocyanide</b> (R–NC)." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "elim", q: "2-Bromo-2-methylbutane with alcoholic KOH gives mainly:", o: ["2-Methylbut-2-ene", "2-Methylbut-1-ene", "3-Methylbut-1-ene", "2-Methylbutan-2-ol"], a: 0, hint: "Saytzeff.", why: "More substituted alkene: <b>2-methylbut-2-ene</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "arreact", q: "Which reacts most easily with aqueous NaOH?", o: ["2,4,6-Trinitrochlorobenzene", "4-Nitrochlorobenzene", "Chlorobenzene", "3-Nitrochlorobenzene"], a: 0, hint: "Most o/p NO₂.", why: "<b>Trinitro</b>: warm water is enough." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "stereo", q: "Which compound is chiral?", o: ["2-Bromobutane", "1-Bromobutane", "2-Bromopropane", "Bromomethane"], a: 0, hint: "Four different groups.", why: "<b>2-Bromobutane</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "sn", q: "SN2 reactions of optically active haloalkanes give inversion of configuration.", r: "The nucleophile attacks from the side opposite to the leaving group.", a: 0, hint: "Back-side attack.", why: "Both true, and R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "arreact", q: "Chlorobenzene is o,p-directing in electrophilic substitution.", r: "Chlorine deactivates the ring by its –I effect.", a: 1, hint: "Direction comes from +R.", why: "Both true, but direction comes from the <b>+R</b> effect, not –I." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "metals", q: "Grignard reagents must be prepared in dry ether.", r: "Grignard reagents react with water to form alkanes.", a: 0, hint: "Moisture destroys RMgX.", why: "Both true, and R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "poly", q: "Iodoform acts as an antiseptic because it releases free iodine.", a: true, hint: "I₂.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "phys", q: "Branching increases the boiling point of isomeric haloalkanes.", a: false, hint: "Surface area.", why: "False: branching <b>lowers</b> bp." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "stereo", q: "A racemic mixture rotates plane-polarised light.", a: false, hint: "50:50.", why: "False: rotations cancel." },
    { id: "q15", t: "match", d: "E", m: 4, c: "prep", q: "Match the reaction with its reagent.", pairs: [["Finkelstein", "NaI in dry acetone"], ["Swarts", "AgF / SbF₃"], ["Sandmeyer", "CuCl / HCl"], ["Wurtz", "Na in dry ether"]], hint: "One each.", why: "Each named reaction uses one reagent." },
    { id: "q16", t: "match", d: "M", m: 4, c: "poly", q: "Match the compound with its use or problem.", pairs: [["CHCl₃", "Forms phosgene in light"], ["CHI₃", "Antiseptic"], ["CCl₂F₂", "Ozone depletion"], ["DDT", "Non-biodegradable insecticide"]], hint: "One each.", why: "Each compound has one fact." },
    { id: "q17", t: "match", d: "M", m: 4, c: "metals", q: "Match the reagent with the product from RX.", pairs: [["KCN", "Nitrile"], ["AgCN", "Isocyanide"], ["KNO₂", "Alkyl nitrite"], ["AgNO₂", "Nitroalkane"]], hint: "Ionic vs covalent reagent.", why: "Ionic salts attack through the more nucleophilic atom; silver salts through the other." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "elim", q: "Alcoholic KOH removes HX from a haloalkane: this is called ______.", acc: ["elimination", "dehydrohalogenation", "β-elimination", "beta elimination"], hint: "Forms an alkene.", why: "<b>Elimination</b> (dehydrohalogenation)." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "sn", q: "The SN1 mechanism goes through a ______ intermediate.", acc: ["carbocation", "carbonium ion"], hint: "Positive carbon.", why: "<b>Carbocation</b>." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "arreact", q: "Chlorobenzene + NaOH at 623 K and 300 atm gives ______.", acc: ["phenol"], hint: "Dow.", why: "<b>Phenol</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "arreact", q: "ArX + RX + 2Na in dry ether gives Ar–R: this is the ______ reaction.", acc: ["wurtz-fittig", "wurtz fittig", "wurtz–fittig"], hint: "Two names.", why: "<b>Wurtz–Fittig</b>." },
    { id: "q22", t: "short", d: "E", m: 1, c: "metals", q: "What is formed when CH₃MgBr reacts with water?", acc: ["methane", "ch4", "ch₄"], hint: "RMgX + H₂O → RH.", why: "<b>Methane</b>." },
    { id: "q23", t: "short", d: "M", m: 1, c: "arprep", q: "Which reagent converts benzenediazonium chloride to chlorobenzene in the Sandmeyer reaction?", acc: ["cucl", "cucl/hcl", "cuprous chloride", "copper(i) chloride"], hint: "Copper salt.", why: "<b>CuCl/HCl</b>." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "sn", q: "Distinguish between SN1 and SN2 reactions on three points.", hint: "Steps, rate, stereo.", why: "", points: [{ p: "SN1 two steps (carbocation); SN2 one step", m: 1, k: ["step", "carbocation"] }, { p: "SN1 rate = k[RX]; SN2 rate = k[RX][Nu]", m: 1, k: ["rate", "first", "second"] }, { p: "SN1 racemisation; SN2 inversion", m: 1, k: ["racem", "inversion"] }], model: "<p>(i) <b>SN1</b> goes in two steps via a carbocation; <b>SN2</b> is a single step.</p><p>(ii) SN1 rate = k[RX] (first order); SN2 rate = k[RX][Nu⁻] (second order).</p><p>(iii) SN1 gives <b>racemisation</b>; SN2 gives <b>inversion</b>. (Also: SN1 3° > 2° > 1°; SN2 CH₃X > 1° > 2° > 3°.)</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "arreact", q: "Explain why haloarenes are less reactive than haloalkanes towards nucleophilic substitution.", hint: "Resonance, sp², cation.", why: "", points: [{ p: "Resonance: C–X has partial double-bond character", m: 1, k: ["resonance", "double"] }, { p: "sp² carbon: bond shorter and stronger", m: 1, k: ["sp²", "sp2"] }, { p: "Phenyl cation unstable / repulsion by π electrons", m: 1, k: ["phenyl", "unstable", "repul"] }], model: "<p>(i) <b>Resonance</b> gives the C–X bond partial double-bond character, so it is hard to break.</p><p>(ii) The carbon is <b>sp²</b>; the bond is shorter and stronger than an sp³ C–X bond.</p><p>(iii) The <b>phenyl cation</b> is too unstable for SN1, and the ring's π electrons <b>repel</b> an approaching nucleophile.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "metals", q: "Write equations for: (a) Wurtz reaction, (b) Fittig reaction, (c) preparation of a Grignard reagent, (d) reaction of ethyl bromide with KCN.", hint: "Na, Mg, CN⁻.", why: "", points: [{ p: "2CH₃Br + 2Na → CH₃–CH₃ + 2NaBr", m: 1, k: ["2na"] }, { p: "2C₆H₅Cl + 2Na → C₆H₅–C₆H₅ + 2NaCl", m: 1, k: ["c₆h₅–c₆h₅", "biphenyl", "c6h5-c6h5"] }, { p: "C₂H₅Br + Mg → C₂H₅MgBr (dry ether)", m: 1, k: ["mgbr"] }, { p: "C₂H₅Br + KCN → C₂H₅CN + KBr", m: 1, k: ["cn"] }], model: "<p>(a) 2CH₃Br + 2Na → CH₃–CH₃ + 2NaBr (dry ether).</p><p>(b) 2C₆H₅Cl + 2Na → C₆H₅–C₆H₅ + 2NaCl.</p><p>(c) C₂H₅Br + Mg → C₂H₅MgBr (dry ether).</p><p>(d) C₂H₅Br + KCN → C₂H₅CN + KBr.</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "stereo", q: "What is a chiral molecule? Explain why SN1 reaction of an optically active haloalkane gives a racemic mixture, while SN2 gives inversion.", hint: "Planar cation vs back attack.", why: "", points: [{ p: "Chiral: non-superimposable on its mirror image (C with four different groups)", m: 1, k: ["mirror", "four different"] }, { p: "SN1: planar carbocation formed", m: 1, k: ["planar"] }, { p: "Attack from both faces equally → racemic", m: 1, k: ["both", "racem"] }, { p: "SN2: back-side attack → inversion", m: 1, k: ["back", "inversion"] }], model: "<p>A <b>chiral</b> molecule cannot be superimposed on its mirror image (usually a C with four different groups).</p><p><b>SN1:</b> the carbocation is <b>planar</b>, so the nucleophile attacks equally from both faces, giving a 50:50 <b>racemic</b> product.</p><p><b>SN2:</b> the nucleophile attacks from the <b>back</b> as X leaves, so the configuration is <b>inverted</b>.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "prep", q: "(a) How are haloalkanes prepared from alcohols? Give three methods and say which is best. (b) Explain why boiling points of haloalkanes increase from F to I. (c) Explain why p-dichlorobenzene has a higher melting point than o- and m-isomers.", hint: "HX/ZnCl₂, PCl₅, SOCl₂.", why: "", points: [{ p: "ROH + HCl (ZnCl₂) → RCl", m: 1, k: ["zncl"] }, { p: "ROH + PCl₅ / PCl₃ → RCl", m: 1, k: ["pcl"] }, { p: "ROH + SOCl₂ → RCl + SO₂ + HCl; best (gaseous by-products)", m: 1, k: ["socl"] }, { p: "Larger halogen: greater mass and size", m: 1, k: ["size", "mass"] }, { p: "Stronger van der Waals forces → higher bp", m: 1, k: ["van der waals", "dispersion"] }, { p: "p-isomer is symmetrical and packs better in the crystal", m: 1, k: ["symmetr", "pack"] }], model: "<p>(a) (i) ROH + HCl, anhydrous ZnCl₂ → RCl + H₂O. (ii) 3ROH + PCl₃ → 3RCl + H₃PO₃, or ROH + PCl₅ → RCl + POCl₃ + HCl. (iii) ROH + SOCl₂ → RCl + SO₂↑ + HCl↑: <b>best</b>, because the by-products are gases.</p><p>(b) From F to I the halogen gets larger and heavier, so <b>van der Waals forces increase</b> and more energy is needed to boil.</p><p>(c) The para isomer is <b>symmetrical</b> and <b>packs better</b> in the crystal lattice, so more energy is needed to melt it.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "poly", q: "An old hospital storeroom has a brown bottle labelled 'Chloroform, keep full'. The label is there to prevent formation of:", o: ["Phosgene", "Chlorine", "Ozone", "Methane"], a: 0, hint: "COCl₂.", why: "<b>Phosgene</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "arreact", q: "A student nitrates chlorobenzene. The main products are:", o: ["o- and p-chloronitrobenzene", "m-chloronitrobenzene only", "Nitrobenzene", "Chlorine gas"], a: 0, hint: "o/p directing.", why: "Cl is <b>o/p directing</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "poly", passage: "A village used an insecticide against mosquitoes for years; later it was found in fish and in birds' eggs.", q: "The insecticide was probably:", o: ["DDT", "Iodoform", "Freon", "Chloroform"], a: 0, hint: "Not biodegradable.", why: "<b>DDT</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "metals", passage: "A student's Grignard reaction fails because he forgot to dry his glassware.", q: "The Grignard reagent most likely turned into:", o: ["An alkane", "An alcohol", "An alkene", "A haloalkane"], a: 0, hint: "RMgX + H₂O.", why: "RMgX + H₂O → <b>RH</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "sn", passage: "Benzyl chloride hydrolyses much faster than chlorobenzene and even faster than 1-chloropropane by SN1.", q: "The reason is:", o: ["The benzyl carbocation is resonance-stabilised", "Benzyl chloride is a vinylic halide", "Benzene ring repels water", "C–Cl bond is sp²"], a: 0, hint: "Cation stability.", why: "<b>Resonance-stabilised benzyl cation</b>." }
  ],
  find: {
    mcq: [
      { s: "Cl is on a carbon of the benzene ring.", o: ["Aryl halide", "Benzylic halide", "Allylic halide", "Vinylic halide"], a: 0, c: "classify", d: "E", why: "<b>Aryl halide</b>." },
      { s: "Butan-1-ol + SOCl₂ gives pure product with gases escaping.", o: ["Preparation from alcohol", "Swarts reaction", "Wurtz reaction", "Elimination"], a: 0, c: "prep", d: "E", why: "<b>Alcohol → haloalkane</b>." },
      { s: "Bromoethane + NaI in dry acetone; white solid separates.", o: ["Finkelstein reaction", "Swarts reaction", "Sandmeyer reaction", "Fittig reaction"], a: 0, c: "prep", d: "M", why: "<b>Finkelstein</b>." },
      { s: "Diazonium salt + CuBr/HBr gives bromobenzene.", o: ["Sandmeyer reaction", "Wurtz reaction", "Dow process", "Finkelstein reaction"], a: 0, c: "arprep", d: "M", why: "<b>Sandmeyer</b>." },
      { s: "Neopentyl chloride boils lower than n-pentyl chloride.", o: ["Branching lowers boiling point", "Larger halogen", "Hydrogen bonding", "Resonance"], a: 0, c: "phys", d: "M", why: "<b>Branching</b> reduces surface area." },
      { s: "One-step reaction with inversion at the carbon.", o: ["SN2", "SN1", "Elimination", "Free radical substitution"], a: 0, c: "sn", d: "E", why: "<b>SN2</b>." },
      { s: "Rate depends only on [RX]; product is racemic.", o: ["SN1", "SN2", "E2", "Wurtz"], a: 0, c: "sn", d: "M", why: "<b>SN1</b>." },
      { s: "Two forms that rotate plane-polarised light equally but oppositely.", o: ["Enantiomers", "Structural isomers", "Racemic mixture", "Diastereomers"], a: 0, c: "stereo", d: "M", why: "<b>Enantiomers</b>." },
      { s: "Equal amounts of d and l forms; no rotation.", o: ["Racemic mixture", "Enantiomer", "Meso form", "Chiral centre"], a: 0, c: "stereo", d: "E", why: "<b>Racemic mixture</b>." },
      { s: "But-2-ene is the main product from 2-bromobutane with alcoholic KOH.", o: ["Saytzeff rule", "Markovnikov rule", "Hund's rule", "Walden inversion"], a: 0, c: "elim", d: "E", why: "<b>Saytzeff rule</b>." },
      { s: "Bromoethane + Mg in dry ether.", o: ["Grignard reagent", "Wurtz product", "Alcohol", "Alkene"], a: 0, c: "metals", d: "E", why: "<b>Grignard reagent</b>." },
      { s: "Two methyl bromides join with sodium to give ethane.", o: ["Wurtz reaction", "Fittig reaction", "Swarts reaction", "Dow process"], a: 0, c: "metals", d: "M", why: "<b>Wurtz</b>." },
      { s: "Chlorobenzene needs 623 K and 300 atm to become phenol.", o: ["Low reactivity of haloarenes", "SN1 reactivity", "Elimination", "Grignard reaction"], a: 0, c: "arreact", d: "C", why: "Haloarenes are <b>unreactive</b> to nucleophiles." },
      { s: "Cl on benzene slows nitration but sends NO₂ to ortho/para.", o: ["Deactivating, o/p directing", "Activating, m directing", "Activating, o/p directing", "Deactivating, m directing"], a: 0, c: "arreact", d: "C", why: "<b>Deactivating yet o/p directing</b>." },
      { s: "Refrigerant gas that rises to the stratosphere and destroys ozone.", o: ["Freon", "Iodoform", "DDT", "Dichloromethane"], a: 0, c: "poly", d: "E", why: "<b>Freon</b> (CFC)." },
      { s: "Yellow solid used on wounds that smells strongly.", o: ["Iodoform", "Chloroform", "Freon", "DDT"], a: 0, c: "poly", d: "M", why: "<b>Iodoform</b>." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["SOCl₂ gives pure RCl.", "Preparation from alcohols", "prep"], ["Back-side attack, inversion.", "SN2", "sn"], ["Carbon with four different groups.", "Chirality", "stereo"], ["More substituted alkene is major.", "Saytzeff rule", "elim"], ["RMgX in dry ether.", "Grignard reagent", "metals"], ["Store in dark bottles, full.", "Chloroform hazard", "poly"]] }
    ],
    wrong: [
      { stmts: ["SN2 gives inversion.", "SN1 goes through a carbocation.", "SN2 is fastest for 3° halides.", "SN1 is first order."], a: 2, c: "sn", why: "SN2 is fastest for <b>CH₃X and 1°</b>." },
      { stmts: ["Aqueous KOH gives alcohols.", "Alcoholic KOH gives alkenes.", "Saytzeff: less substituted alkene is major.", "Elimination removes HX."], a: 2, c: "elim", why: "Saytzeff: the <b>more</b> substituted alkene is major." },
      { stmts: ["Chlorine on benzene is o/p directing.", "C–Cl in chlorobenzene has partial double-bond character.", "Haloarenes react easily with aqueous NaOH at room temperature.", "–NO₂ at para makes substitution easier."], a: 2, c: "arreact", why: "They need <b>harsh conditions</b> (Dow process)." }
    ],
    para: [
      { target: "SN1 mechanism", c: "sn", sents: ["Aman studied tert-butyl bromide in water.", "The lab was air-conditioned.", "The reaction rate depended only on the bromide's concentration and went through a carbocation.", "He drew a graph of his results."], a: 2, why: "First order via carbocation: <b>SN1</b>." },
      { target: "Swarts reaction", c: "prep", sents: ["A refrigerant company needed fluoro compounds.", "Its chemists heated chloroalkanes with SbF₃ to swap Cl for F.", "The plant is in Gujarat.", "Products are sold in cylinders."], a: 1, why: "Halogen exchange to F: <b>Swarts</b>." },
      { target: "Ozone depletion by freons", c: "poly", sents: ["Scientists measured the ozone over Antarctica.", "They travelled by ship.", "They found that chlorine from leaked refrigerant gases was breaking down the ozone.", "Their report was published in spring."], a: 2, why: "CFCs destroy ozone." }
    ],
    explain: [
      { s: "Chlorobenzene does not react with NaOH at room temperature, but ethyl chloride does.", o: ["Resonance strengthens the aryl C–Cl bond", "Chlorobenzene is a gas", "NaOH is a weak base", "Ethyl chloride is aromatic"], a: 0, c: "arreact", why: "The clue is <i>aryl</i>: <b>resonance</b> gives partial double-bond character." },
      { s: "KCN gives nitriles but AgCN gives isocyanides.", o: ["CN⁻ is ambident; Ag–C bond is covalent so N attacks", "Silver is a catalyst", "KCN is insoluble", "Nitriles are unstable"], a: 0, c: "metals", why: "<b>Ambident</b> CN⁻: Ag–CN is covalent, leaving N to attack." },
      { s: "(CH₃)₃CBr reacts faster than CH₃CH₂Br in water.", o: ["Stable 3° carbocation (SN1)", "Less steric hindrance", "Stronger C–Br bond", "Saytzeff rule"], a: 0, c: "sn", why: "<b>3° carbocation</b> is stable." },
      { s: "An optically active bromide gives an optically inactive alcohol in water.", o: ["SN1 racemisation", "SN2 inversion", "Elimination", "Wurtz coupling"], a: 0, c: "stereo", why: "<b>Racemisation</b> via a planar carbocation." }
    ]
  }
});
