/* Revision Arena · Class XII Chemistry · Unit 8 · Aldehydes, Ketones and Carboxylic Acids (Parts 1-3 + exercises). Original cases. */
NFArena.register({
  id: "chem12-ch8", cls: "XII", subject: "Chemistry", unit: "Unit", num: "8",
  title: "Aldehydes, Ketones and Carboxylic Acids",
  tagline: "Preparation, nucleophilic addition, reduction and oxidation tests, aldol and Cannizzaro, acidity of carboxylic acids, HVZ and decarboxylation, and distinguishing tests.",
  notesLink: "../#chem12-ch8",
  concepts: {
    prep: { n: "Preparation of aldehydes and ketones", s: "carb" },
    nucadd: { n: "Nucleophilic addition", s: "carb" },
    nh2: { n: "Reactions with ammonia derivatives", s: "carb" },
    redox: { n: "Reduction and oxidation of carbonyls", s: "react" },
    alpha: { n: "Aldol condensation (α-hydrogen)", s: "react" },
    cann: { n: "Cannizzaro reaction", s: "react" },
    acprep: { n: "Preparation of carboxylic acids", s: "acid" },
    acidity: { n: "Acidity of carboxylic acids", s: "acid" },
    acreact: { n: "Reactions of carboxylic acids", s: "acid" },
    tests: { n: "Distinguishing tests", s: "react" }
  },
  overview: {
    text: "The <b>carbonyl group</b> (C=O) is polar: its carbon is attacked by <b>nucleophiles</b>. Aldehydes are more reactive than ketones (less hindered, less electron-rich). Aldehydes are easily <b>oxidised</b> (Tollens', Fehling's). Compounds with <b>α-hydrogen</b> undergo <b>aldol condensation</b>; those without undergo <b>Cannizzaro</b>. <b>Carboxylic acids</b> are acidic because the carboxylate ion is resonance-stabilised.",
    points: [
      "Rosenmund: RCOCl + H₂ (Pd–BaSO₄) → RCHO; Etard: toluene + CrO₂Cl₂ → benzaldehyde.",
      "Clemmensen (Zn–Hg/HCl) and Wolff–Kishner (NH₂NH₂, KOH) reduce C=O to CH₂.",
      "<b>Iodoform test</b>: CH₃CO– or CH₃CH(OH)– give yellow CHI₃.",
      "Acid strength rises with electron-withdrawing groups: CCl₃COOH > CHCl₂COOH > ClCH₂COOH > CH₃COOH."
    ],
    map: {
      center: "Carbonyl compounds",
      branches: [
        { t: "Making C=O", c: ["Oxidation of alcohols", "Rosenmund, Stephen, Etard", "Friedel–Crafts acylation"] },
        { t: "Addition", c: ["HCN, NaHSO₃", "Grignard, acetals", "Oximes, hydrazones, 2,4-DNP"] },
        { t: "Redox and α-H", c: ["Clemmensen, Wolff–Kishner", "Tollens', Fehling's", "Aldol", "Cannizzaro"] },
        { t: "Carboxylic acids", c: ["Preparation", "Acidity", "HVZ, decarboxylation", "NaHCO₃ test"] }
      ]
    }
  },
  sections: [
    {
      id: "carb", title: "Preparation and nucleophilic addition", sub: "Making and attacking C=O", icon: "🍋", color: "#EC4899",
      quick: [
        "Aldehydes: 1° alcohol + PCC; <b>Rosenmund</b> (RCOCl + H₂, Pd–BaSO₄); <b>Stephen</b> (RCN + SnCl₂/HCl, then H₂O); nitriles/esters + DIBAL-H; <b>Etard</b> (toluene + CrO₂Cl₂ → benzaldehyde); <b>Gattermann–Koch</b> (benzene + CO + HCl, AlCl₃/CuCl).",
        "Ketones: 2° alcohol oxidation; acyl chloride + dialkylcadmium (R₂Cd); nitrile + Grignard then hydrolysis; <b>Friedel–Crafts acylation</b> of benzene.",
        "Aldehydes are <b>more reactive</b> than ketones to nucleophiles: (i) less steric hindrance; (ii) only one alkyl group pushing electrons (+I) to the carbonyl carbon.",
        "Addition of <b>HCN</b> → cyanohydrin; <b>NaHSO₃</b> → crystalline bisulphite adduct (used to purify); <b>Grignard</b> → alcohols; alcohols → <b>hemiacetal/acetal</b> (ketals with ethylene glycol protect C=O).",
        "<b>Ammonia derivatives</b> (addition then loss of water): NH₂OH → <b>oxime</b>; NH₂NH₂ → <b>hydrazone</b>; 2,4-DNP → orange-yellow <b>2,4-DNP derivative</b>; semicarbazide → <b>semicarbazone</b>."
      ],
      cards: [
        { t: "Why is BaSO₄ in the Rosenmund catalyst?", tag: "why", b: "<p>BaSO₄ <b>poisons</b> the palladium so it stops at the aldehyde and does not reduce it further to an alcohol.</p>" },
        { t: "Why aldehyde > ketone?", tag: "why", b: "<p>In ketones, two alkyl groups crowd the carbonyl carbon (steric) and push electron density onto it (+I), making it less positive and less attractive to nucleophiles.</p>" }
      ],
      exam: ["Name the reagent and write the product for every named reaction.", "Show the nucleophile attacking the carbonyl carbon."]
    },
    {
      id: "react", title: "Reduction, oxidation, aldol and Cannizzaro", sub: "Redox and α-hydrogen chemistry", icon: "🔄", color: "#7B4DFF",
      quick: [
        "Reduction to alcohols: NaBH₄ or LiAlH₄. To CH₂: <b>Clemmensen</b> (Zn–Hg + conc. HCl) or <b>Wolff–Kishner</b> (NH₂NH₂, then KOH in ethylene glycol, heat).",
        "Aldehydes are easily oxidised: <b>Tollens' reagent</b> (ammoniacal AgNO₃) → <b>silver mirror</b>; <b>Fehling's solution</b> → <b>red ppt of Cu₂O</b> (aromatic aldehydes do not give Fehling's test). Ketones give neither.",
        "<b>Haloform reaction</b>: methyl ketones (CH₃CO–) with NaOX → CHX₃ + carboxylate; with iodine, yellow <b>iodoform</b> (also given by ethanol and CH₃CH(OH)– alcohols).",
        "<b>Aldol condensation</b>: aldehydes/ketones with <b>α-H</b> + dilute NaOH → β-hydroxy aldehyde/ketone (aldol) → on heating, α,β-unsaturated compound. Cross aldol between two different carbonyls gives four products.",
        "<b>Cannizzaro reaction</b>: aldehydes <b>without α-H</b> (HCHO, benzaldehyde) + conc. NaOH → one molecule reduced to alcohol, one oxidised to carboxylate salt (disproportionation).",
        "The –CHO/–CO– group on benzene is <b>deactivating and meta-directing</b>."
      ],
      table: { cap: "Tests at a glance", head: ["Test", "Aldehyde", "Ketone"], rows: [["Tollens'", "Silver mirror", "No change"], ["Fehling's", "Red ppt (aliphatic)", "No change"], ["2,4-DNP", "Orange ppt", "Orange ppt"], ["Iodoform", "Only CH₃CHO", "Methyl ketones"]] },
      cards: [
        { t: "Worked: aldol of ethanal", tag: "example", b: "<p>2CH₃CHO → (dil. NaOH) → CH₃CH(OH)CH₂CHO (3-hydroxybutanal) → (heat, −H₂O) → <b>CH₃CH=CHCHO</b> (but-2-enal).</p>" },
        { t: "Worked: Cannizzaro of benzaldehyde", tag: "example", b: "<p>2C₆H₅CHO + conc. NaOH → <b>C₆H₅CH₂OH + C₆H₅COONa</b>.</p>" },
        { t: "Memory hook", tag: "hook", b: "<p><b>“Alpha-H? Aldol. No alpha-H? Cannizzaro.”</b></p>" }
      ],
      exam: ["Check for α-H before choosing aldol or Cannizzaro.", "State the observation (mirror, red ppt, yellow ppt) in every test."]
    },
    {
      id: "acid", title: "Carboxylic acids", sub: "The –COOH group", icon: "🧃", color: "#12B5A6",
      quick: [
        "Preparation: oxidation of 1° alcohols/aldehydes; <b>alkylbenzenes + alkaline KMnO₄</b> → benzoic acid (any side chain); hydrolysis of <b>nitriles</b> and amides; <b>Grignard + CO₂</b> then H⁺; hydrolysis of acyl halides, anhydrides and esters.",
        "High boiling points: acids form <b>H-bonded dimers</b>, even in the vapour.",
        "Acidity: carboxylate ion is stabilised by <b>two equivalent resonance structures</b>, so acids are stronger than phenols and alcohols. pKa: HCOOH 3.75, C₆H₅COOH 4.19, CH₃COOH 4.76.",
        "<b>Electron-withdrawing</b> groups increase acidity (F > Cl > Br > I; more halogens, closer to –COOH); <b>electron-donating</b> groups decrease it.",
        "Reactions: with <b>NaHCO₃ → CO₂</b> effervescence (phenols do not); esterification; PCl₅/SOCl₂ → acyl chloride; NH₃ then heat → amide; <b>LiAlH₄</b> → 1° alcohol.",
        "<b>Decarboxylation</b>: sodium salt + soda lime → alkane with one C less. <b>Kolbe electrolysis</b> of RCOONa → R–R. <b>HVZ reaction</b>: Cl₂ or Br₂ + red P → α-halo acid. Ring substitution of benzoic acid is meta; no Friedel–Crafts."
      ],
      cards: [
        { t: "Worked: ranking acids", tag: "example", b: "<p><b>FCH₂COOH > ClCH₂COOH > BrCH₂COOH > CH₃COOH</b>: the more electronegative the halogen, the stronger the –I effect, the more stable the anion.</p>" },
        { t: "Why is formic acid stronger than acetic acid?", tag: "why", b: "<p>The CH₃ group in acetic acid pushes electrons (+I) towards the carboxylate, destabilising it. HCOO⁻ has no such group.</p>" }
      ],
      exam: ["Use NaHCO₃ to tell a carboxylic acid from a phenol.", "For HVZ, show the halogen on the α-carbon."]
    }
  ],
  flashcards: [
    { k: "Reaction", c: "prep", q: "Rosenmund reduction?", a: "RCOCl + H₂ over Pd–BaSO₄ → RCHO." },
    { k: "Reaction", c: "prep", q: "Etard reaction?", a: "Toluene + CrO₂Cl₂, then hydrolysis → benzaldehyde." },
    { k: "Reaction", c: "prep", q: "Stephen reduction?", a: "RCN + SnCl₂/HCl → imine; hydrolysis → RCHO." },
    { k: "Reason", c: "nucadd", q: "Why are aldehydes more reactive than ketones?", a: "Less steric hindrance and less +I effect on the carbonyl carbon." },
    { k: "Product", c: "nucadd", q: "Carbonyl + HCN?", a: "Cyanohydrin." },
    { k: "Product", c: "nh2", q: "Carbonyl + NH₂OH?", a: "Oxime." },
    { k: "Product", c: "nh2", q: "Carbonyl + 2,4-DNP?", a: "Orange-yellow 2,4-dinitrophenylhydrazone." },
    { k: "Reaction", c: "redox", q: "Clemmensen reduction?", a: "C=O → CH₂ with Zn–Hg and conc. HCl." },
    { k: "Reaction", c: "redox", q: "Wolff–Kishner reduction?", a: "C=O → CH₂ with NH₂NH₂, then KOH in ethylene glycol, heat." },
    { k: "Test", c: "tests", q: "Tollens' test positive result?", a: "Silver mirror (aldehydes)." },
    { k: "Test", c: "tests", q: "Which carbonyls give the iodoform test?", a: "Methyl ketones and CH₃CHO (and alcohols with CH₃CH(OH)–)." },
    { k: "Reaction", c: "alpha", q: "Aldol condensation needs?", a: "At least one α-hydrogen, dilute NaOH." },
    { k: "Reaction", c: "cann", q: "Cannizzaro reaction?", a: "Aldehyde without α-H + conc. NaOH → alcohol + carboxylate salt." },
    { k: "Reaction", c: "acprep", q: "Toluene + alkaline KMnO₄, then H⁺?", a: "Benzoic acid." },
    { k: "Reason", c: "acidity", q: "Why are carboxylic acids acidic?", a: "Carboxylate ion is stabilised by two equivalent resonance forms." },
    { k: "Trend", c: "acidity", q: "Stronger: ClCH₂COOH or CH₃COOH?", a: "ClCH₂COOH (–I effect of Cl)." },
    { k: "Reaction", c: "acreact", q: "HVZ reaction?", a: "RCH₂COOH + X₂/red P → RCHXCOOH (α-halo acid)." },
    { k: "Reaction", c: "acreact", q: "Decarboxylation?", a: "RCOONa + NaOH/CaO (heat) → RH + Na₂CO₃." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Three colourless liquids",
      text: "<p><b>Ananya</b> has ethanal, propanone and benzaldehyde in unlabelled bottles. She has Tollens' reagent, Fehling's solution and iodine with NaOH.</p>",
      qs: [
        { q: "Which reagent tells propanone from the two aldehydes, and what does she see?", m: 1, type: "Distinguish", c: "tests", hint: "Ketones do not reduce Tollens'.", points: [{ p: "Tollens': both aldehydes give a silver mirror, propanone does not", m: 1, k: ["tollens", "silver"] }], structure: ["One test."], model: "<p><b>Tollens' reagent:</b> ethanal and benzaldehyde give a <b>silver mirror</b>; propanone gives no change.</p>" },
        { q: "How can she tell ethanal from benzaldehyde, and which test do ethanal and propanone both pass?", m: 2, type: "Distinguish", c: "tests", hint: "Fehling's; iodoform.", points: [{ p: "Fehling's: ethanal gives red ppt; benzaldehyde does not (aromatic)", m: 1, k: ["fehling", "red"] }, { p: "Iodoform: ethanal and propanone both give yellow CHI₃", m: 1, k: ["iodoform", "yellow"] }], structure: ["Two tests."], model: "<p><b>Fehling's solution:</b> ethanal gives a <b>red ppt of Cu₂O</b>; benzaldehyde (aromatic) does not.</p><p><b>Iodoform test:</b> ethanal (CH₃CHO) and propanone (CH₃COCH₃) both give a <b>yellow ppt of CHI₃</b>.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "Vinegar or phenol?",
      text: "<p><b>Rahul</b> has a dilute solution of acetic acid and one of phenol. Both turn blue litmus red slightly. His teacher gives him sodium hydrogencarbonate solution.</p>",
      qs: [
        { q: "What will he see with NaHCO₃ in each case?", m: 1, type: "Observe", c: "acreact", hint: "CO₂.", points: [{ p: "Acetic acid gives brisk effervescence of CO₂; phenol does not", m: 1, k: ["effervescence", "co₂", "co2"] }], structure: ["One line."], model: "<p>Acetic acid gives <b>brisk effervescence</b> (CO₂); phenol gives <b>no effervescence</b>.</p>" },
        { q: "Why is acetic acid a stronger acid than phenol?", m: 2, type: "Explain", c: "acidity", hint: "Equivalent resonance on two O atoms.", points: [{ p: "Carboxylate has two equivalent resonance structures with charge on two O atoms", m: 1, k: ["equivalent", "two oxygen", "two o"] }, { p: "Phenoxide's charge spreads onto less electronegative C atoms; less stabilised", m: 1, k: ["carbon", "less"] }], structure: ["Carboxylate, then phenoxide."], model: "<p>In <b>acetate</b>, the negative charge is shared equally by <b>two electronegative O atoms</b> (two equivalent resonance forms).</p><p>In <b>phenoxide</b>, the charge spreads onto ring <b>carbon</b> atoms, which are less electronegative, and the resonance forms are not equivalent, so it is less stable.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Ethanal in a basic bath",
      text: "<p>In a lab, <b>Rahul</b> adds dilute NaOH to ethanal and warms the product. In another flask he adds concentrated NaOH to benzaldehyde.</p>",
      qs: [
        { q: "Name the reaction of ethanal and write the products before and after heating.", m: 2, type: "Name + products", c: "alpha", hint: "α-H.", points: [{ p: "Aldol condensation: 3-hydroxybutanal (aldol)", m: 1, k: ["aldol", "3-hydroxybutanal"] }, { p: "On heating: but-2-enal", m: 1, k: ["but-2-enal", "crotonaldehyde"] }], structure: ["Name, aldol, enal."], model: "<p><b>Aldol condensation</b>: 2CH₃CHO → CH₃CH(OH)CH₂CHO (<b>3-hydroxybutanal</b>), which on heating loses water to give <b>but-2-enal</b>, CH₃CH=CHCHO.</p>" },
        { q: "Why does benzaldehyde react differently? Name the reaction and the products.", m: 2, type: "Explain", c: "cann", hint: "No α-H.", points: [{ p: "No α-H, so no aldol; it undergoes Cannizzaro reaction", m: 1, k: ["cannizzaro", "no α", "no alpha"] }, { p: "Products: benzyl alcohol + sodium benzoate", m: 1, k: ["benzyl alcohol", "benzoate"] }], structure: ["Reason, products."], model: "<p>Benzaldehyde has <b>no α-hydrogen</b>, so it cannot form an enolate for aldol. With conc. NaOH it undergoes the <b>Cannizzaro reaction</b>: 2C₆H₅CHO → <b>C₆H₅CH₂OH + C₆H₅COONa</b>.</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "Ranking the sour solutions",
      text: "<p>A food lab compares four acids: CH₃COOH, ClCH₂COOH, Cl₂CHCOOH and HCOOH. <b>Ananya</b> must predict their order of strength before measuring pH.</p>",
      qs: [
        { q: "Arrange the four acids in increasing acid strength.", m: 1, type: "Arrange", c: "acidity", hint: "Count Cl; HCOOH vs CH₃COOH.", points: [{ p: "CH₃COOH < HCOOH < ClCH₂COOH < Cl₂CHCOOH", m: 1, k: ["ch₃cooh < hcooh", "ch3cooh < hcooh"] }], structure: ["One order."], model: "<p><b>CH₃COOH < HCOOH < ClCH₂COOH < Cl₂CHCOOH</b>.</p>" },
        { q: "Explain the order.", m: 2, type: "Explain", c: "acidity", hint: "+I vs –I.", points: [{ p: "CH₃ (+I) destabilises acetate, so acetic acid is weakest; HCOOH has no CH₃", m: 1, k: ["+i", "ch₃", "ch3"] }, { p: "Cl (–I) withdraws electrons and stabilises the anion; two Cl more than one", m: 1, k: ["–i", "-i", "withdraw"] }], structure: ["Donating, withdrawing."], model: "<p>The <b>CH₃</b> group pushes electrons (+I) and destabilises acetate, so acetic acid is weaker than formic acid.</p><p><b>Cl</b> withdraws electrons (–I), spreading the negative charge; two Cl atoms do this more than one, so Cl₂CHCOOH is strongest.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "From toluene to a ketone-free product",
      text: "<p>A perfume company needs benzaldehyde and makes it from toluene. Another unit turns acetophenone (C₆H₅COCH₃) into ethylbenzene without touching the ring, and also makes benzoic acid from toluene. <b>Rahul</b> must choose reagents.</p>",
      qs: [
        { q: "How can toluene be converted to benzaldehyde, and to benzoic acid?", m: 2, type: "Reagents", c: "prep", hint: "Etard; KMnO₄.", points: [{ p: "Etard reaction: CrO₂Cl₂ in CS₂, then H₃O⁺ → benzaldehyde", m: 1, k: ["etard", "cro₂cl₂", "cro2cl2"] }, { p: "Alkaline KMnO₄ (then acid) → benzoic acid", m: 1, k: ["kmno₄", "kmno4"] }], structure: ["Two conversions."], model: "<p>Toluene + <b>CrO₂Cl₂</b> (Etard reaction), then hydrolysis → <b>benzaldehyde</b>.</p><p>Toluene + <b>alkaline KMnO₄</b>, then acidify → <b>benzoic acid</b>.</p>" },
        { q: "Name two ways to convert acetophenone to ethylbenzene, and say when each is preferred.", m: 3, type: "Name + compare", c: "redox", hint: "Acid vs base conditions.", points: [{ p: "Clemmensen: Zn–Hg + conc. HCl", m: 1, k: ["clemmensen"] }, { p: "Wolff–Kishner: NH₂NH₂, then KOH/ethylene glycol, heat", m: 1, k: ["wolff", "kishner"] }, { p: "Clemmensen for acid-stable compounds; Wolff–Kishner for acid-sensitive compounds (and vice versa for base-sensitive)", m: 1, k: ["acid-sensitive", "acid sensitive", "base"] }], structure: ["Two methods, when to use."], model: "<p>(i) <b>Clemmensen reduction:</b> Zn–Hg + conc. HCl.</p><p>(ii) <b>Wolff–Kishner reduction:</b> NH₂NH₂, then KOH in ethylene glycol on heating.</p><p>Clemmensen uses <b>strong acid</b>, so it suits compounds stable in acid; Wolff–Kishner uses <b>strong base</b>, so it suits acid-sensitive compounds.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "tests", q: "Tollens' reagent gives a silver mirror with:", o: ["Ethanal", "Propanone", "Ethanol", "Acetic acid"], a: 0, hint: "Aldehyde.", why: "<b>Ethanal</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "prep", q: "RCOCl + H₂ over Pd–BaSO₄ gives:", o: ["RCHO", "RCH₂OH", "RCOOH", "RH"], a: 0, hint: "Rosenmund.", why: "<b>Aldehyde</b>." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "alpha", q: "Which does NOT undergo aldol condensation?", o: ["HCHO", "CH₃CHO", "CH₃COCH₃", "CH₃CH₂CHO"], a: 0, hint: "No α-H.", why: "<b>HCHO</b> has no α-H." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "acidity", q: "The strongest acid is:", o: ["CF₃COOH", "CCl₃COOH", "CH₃COOH", "ClCH₂COOH"], a: 0, hint: "Most electronegative.", why: "<b>CF₃COOH</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "nh2", q: "Carbonyl compound + hydroxylamine gives:", o: ["Oxime", "Hydrazone", "Semicarbazone", "Cyanohydrin"], a: 0, hint: "NH₂OH.", why: "<b>Oxime</b>." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "acreact", q: "Sodium propanoate heated with soda lime gives:", o: ["Ethane", "Propane", "Butane", "Methane"], a: 0, hint: "One C less.", why: "<b>Ethane</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "tests", q: "Which gives the iodoform test but NOT Tollens' test?", o: ["Propanone", "Ethanal", "Propanal", "Benzaldehyde"], a: 0, hint: "Methyl ketone.", why: "<b>Propanone</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "acreact", q: "CH₃CH₂COOH + Cl₂ / red P gives:", o: ["CH₃CHClCOOH", "ClCH₂CH₂COOH", "CH₃CH₂COCl", "CH₃CH₂Cl"], a: 0, hint: "α-carbon.", why: "HVZ: <b>α-chloro acid</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "nucadd", q: "Aldehydes are more reactive than ketones towards nucleophilic addition.", r: "Ketones have two alkyl groups that hinder attack and reduce the positive charge on the carbonyl carbon.", a: 0, hint: "Steric + electronic.", why: "Both true, and R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "acreact", q: "Benzoic acid does not undergo Friedel–Crafts reaction.", r: "The –COOH group deactivates the ring and the AlCl₃ catalyst binds to it.", a: 0, hint: "Deactivated ring.", why: "Both true, and R explains A." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "cann", q: "Benzaldehyde undergoes Cannizzaro reaction.", r: "Benzaldehyde has three α-hydrogens.", a: 2, hint: "Count α-H.", why: "A is true; R is false (it has <b>no</b> α-H)." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "tests", q: "Ketones give a silver mirror with Tollens' reagent.", a: false, hint: "Only aldehydes.", why: "False." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "acidity", q: "Carboxylic acids have higher boiling points than alcohols of similar mass because they form dimers.", a: true, hint: "H-bonded pairs.", why: "True." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "tests", q: "Benzaldehyde gives a red precipitate with Fehling's solution.", a: false, hint: "Aromatic.", why: "False: aromatic aldehydes do <b>not</b> respond." },
    { id: "q15", t: "match", d: "E", m: 4, c: "prep", q: "Match the named reaction with its reagent.", pairs: [["Rosenmund reduction", "H₂, Pd–BaSO₄"], ["Etard reaction", "CrO₂Cl₂"], ["Stephen reduction", "SnCl₂ / HCl"], ["Gattermann–Koch", "CO, HCl, AlCl₃/CuCl"]], hint: "One each.", why: "Each named reaction uses one reagent." },
    { id: "q16", t: "match", d: "M", m: 4, c: "redox", q: "Match the conversion with the reagent.", pairs: [["C=O → CH₂ in acid", "Zn–Hg / conc. HCl"], ["C=O → CH₂ in base", "NH₂NH₂ then KOH, heat"], ["C=O → CH–OH", "NaBH₄"], ["–COOH → –CH₂OH", "LiAlH₄"]], hint: "Clemmensen vs Wolff–Kishner.", why: "Each reagent gives one change." },
    { id: "q17", t: "match", d: "M", m: 4, c: "nh2", q: "Match the reagent with the product type.", pairs: [["NH₂OH", "Oxime"], ["NH₂NH₂", "Hydrazone"], ["NH₂NHCONH₂", "Semicarbazone"], ["HCN", "Cyanohydrin"]], hint: "Ammonia derivatives + HCN.", why: "Each reagent gives one product." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "tests", q: "Fehling's test for aldehydes gives a ______ precipitate.", acc: ["red", "red-brown", "brick red", "reddish brown"], hint: "Cu₂O.", why: "<b>Red</b> (Cu₂O)." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "alpha", q: "The product of aldol condensation of ethanal before heating is 3-______butanal.", acc: ["hydroxy"], hint: "β-hydroxy.", why: "<b>3-hydroxy</b>butanal." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "acreact", q: "A carboxylic acid with NaHCO₃ gives ______ gas.", acc: ["co2", "co₂", "carbon dioxide"], hint: "Fizz.", why: "<b>CO₂</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "acidity", q: "pKa of formic acid is about 3.75 and of acetic acid about ______.", acc: ["4.76", "4.8", "4.75"], hint: "Weaker.", why: "<b>4.76</b>." },
    { id: "q22", t: "short", d: "E", m: 1, c: "nucadd", q: "Which reagent forms a crystalline adduct used to purify aldehydes?", acc: ["nahso3", "sodium bisulphite", "sodium hydrogensulphite", "sodium bisulfite", "nahso₃"], hint: "Bisulphite.", why: "<b>NaHSO₃</b>." },
    { id: "q23", t: "short", d: "M", m: 1, c: "acprep", q: "What is formed when CH₃MgBr reacts with CO₂, followed by acid hydrolysis?", acc: ["ethanoic acid", "acetic acid", "ch3cooh", "ch₃cooh"], hint: "One more C.", why: "<b>Ethanoic acid</b>." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "tests", q: "Give one chemical test each to distinguish: (a) ethanal and propanone, (b) phenol and benzoic acid, (c) propanone and propanal.", hint: "Tollens', NaHCO₃, iodoform/Fehling's.", why: "", points: [{ p: "(a) Tollens': ethanal silver mirror, propanone none", m: 1, k: ["tollens", "silver"] }, { p: "(b) NaHCO₃: benzoic acid effervescence, phenol none (or FeCl₃ violet for phenol)", m: 1, k: ["nahco", "effervescence", "fecl"] }, { p: "(c) Iodoform: propanone yellow ppt, propanal none (or Fehling's for propanal)", m: 1, k: ["iodoform", "fehling"] }], model: "<p>(a) <b>Tollens' reagent:</b> ethanal gives a silver mirror; propanone does not.</p><p>(b) <b>NaHCO₃:</b> benzoic acid gives brisk effervescence of CO₂; phenol does not.</p><p>(c) <b>Iodoform test:</b> propanone gives yellow CHI₃; propanal does not.</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "cann", q: "Write the Cannizzaro reaction of formaldehyde. Explain why it is a disproportionation.", hint: "One oxidised, one reduced.", why: "", points: [{ p: "2HCHO + conc. NaOH → CH₃OH + HCOONa", m: 1, k: ["ch₃oh", "ch3oh", "hcoona"] }, { p: "One molecule reduced to methanol", m: 1, k: ["reduc"] }, { p: "Other oxidised to formate: same species both oxidised and reduced", m: 1, k: ["oxidis", "oxidiz", "same"] }], model: "<p><b>2HCHO + conc. NaOH → CH₃OH + HCOONa</b>.</p><p>One HCHO molecule is <b>reduced</b> to methanol and the other is <b>oxidised</b> to sodium formate. Since the <b>same compound</b> is both oxidised and reduced, it is a disproportionation.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "acprep", q: "Give four methods of preparing carboxylic acids with one equation each.", hint: "Alcohols, alkylbenzenes, nitriles, Grignard.", why: "", points: [{ p: "Oxidation of 1° alcohol/aldehyde (KMnO₄)", m: 1, k: ["alcohol", "kmno"] }, { p: "Alkylbenzene + alkaline KMnO₄ → benzoic acid", m: 1, k: ["toluene", "alkylbenzene", "benzoic"] }, { p: "Hydrolysis of nitrile (H⁺/H₂O)", m: 1, k: ["nitrile", "cn"] }, { p: "RMgX + CO₂, then H₃O⁺", m: 1, k: ["co₂", "co2", "grignard"] }], model: "<p>(i) RCH₂OH → (KMnO₄, H⁺) → <b>RCOOH</b>.</p><p>(ii) C₆H₅CH₃ → (KMnO₄/KOH, then H⁺) → <b>C₆H₅COOH</b>.</p><p>(iii) RCN + 2H₂O (H⁺) → <b>RCOOH</b> + NH₄⁺.</p><p>(iv) RMgX + CO₂ → RCOOMgX → (H₃O⁺) → <b>RCOOH</b>.</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "nucadd", q: "Explain the mechanism of nucleophilic addition of HCN to a carbonyl compound and why it is base-catalysed.", hint: "CN⁻ attacks.", why: "", points: [{ p: "Base generates CN⁻ from HCN (stronger nucleophile)", m: 1, k: ["cn⁻", "cn-", "base"] }, { p: "CN⁻ attacks the carbonyl carbon (slow), forming a tetrahedral alkoxide", m: 1, k: ["attack", "tetrahedral", "alkoxide"] }, { p: "Alkoxide picks up H⁺ → cyanohydrin", m: 1, k: ["h⁺", "h+", "cyanohydrin"] }, { p: "Base-catalysed because HCN itself is a weak nucleophile", m: 1, k: ["weak"] }], model: "<p>(i) Base converts HCN into <b>CN⁻</b>, a much stronger nucleophile (this is why the reaction is base-catalysed).</p><p>(ii) CN⁻ attacks the positive carbonyl carbon (slow step), giving a <b>tetrahedral alkoxide ion</b>.</p><p>(iii) The alkoxide takes H⁺ from HCN or water, giving the <b>cyanohydrin</b> and regenerating CN⁻.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "acidity", q: "(a) Why are carboxylic acids more acidic than phenols and alcohols? (b) How do electron-withdrawing and electron-donating groups affect acidity? (c) Arrange in increasing acidity: benzoic acid, 4-nitrobenzoic acid, 4-methoxybenzoic acid, and justify.", hint: "Resonance; –I/–R vs +R.", why: "", points: [{ p: "Carboxylate: two equivalent resonance forms, charge on two O", m: 1, k: ["equivalent", "two o", "two oxygen"] }, { p: "Phenoxide less stabilised; alkoxide not stabilised (+I)", m: 1, k: ["phenoxide", "alkoxide"] }, { p: "EWG stabilise anion → increase acidity", m: 1, k: ["withdraw", "increase"] }, { p: "EDG destabilise anion → decrease acidity", m: 1, k: ["donat", "decrease"] }, { p: "4-Methoxybenzoic < benzoic < 4-nitrobenzoic", m: 1, k: ["methoxy", "< benzoic", "<benzoic"] }, { p: "–OCH₃ donates (+R); –NO₂ withdraws", m: 1, k: ["+r", "–i", "-i", "withdraw"] }], model: "<p>(a) In the <b>carboxylate</b> ion, the charge is shared equally by two O atoms (two equivalent resonance forms). Phenoxide's charge goes onto less electronegative ring carbons; alkoxide has no resonance and its alkyl group's +I effect destabilises it.</p><p>(b) <b>Electron-withdrawing</b> groups (–NO₂, halogens) stabilise the anion and <b>increase</b> acidity; <b>electron-donating</b> groups (–CH₃, –OCH₃) <b>decrease</b> it.</p><p>(c) <b>4-methoxybenzoic acid < benzoic acid < 4-nitrobenzoic acid</b>: –OCH₃ donates electrons by resonance (+R); –NO₂ withdraws by –I and –R.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "nucadd", q: "A chemist wants to protect a ketone group while reacting another part of the molecule. She treats it with ethylene glycol and dry HCl to form:", o: ["A cyclic ketal", "An oxime", "An alcohol", "An ester"], a: 0, hint: "Diol.", why: "<b>Cyclic ketal</b> (acetal)." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "alpha", q: "A mixture of ethanal and propanal with dilute NaOH gives:", o: ["Four aldol products (cross aldol)", "Only one product", "Cannizzaro products", "No reaction"], a: 0, hint: "Both have α-H.", why: "<b>Cross aldol</b>: four products." },
    { id: "q31", t: "case", d: "E", m: 1, c: "nh2", passage: "A student adds an orange reagent to an unknown liquid and gets an orange-yellow precipitate.", q: "The reagent and the functional group are:", o: ["2,4-DNP; carbonyl", "Tollens'; aldehyde", "FeCl₃; phenol", "NaHCO₃; acid"], a: 0, hint: "Brady's reagent.", why: "<b>2,4-DNP</b> detects C=O." },
    { id: "q32", t: "case", d: "M", m: 1, c: "tests", passage: "A compound C₃H₆O gives a yellow precipitate with I₂/NaOH but no silver mirror with Tollens' reagent.", q: "It is:", o: ["Propanone", "Propanal", "Propan-1-ol", "Propene oxide"], a: 0, hint: "Methyl ketone.", why: "<b>Propanone</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "acreact", passage: "Electrolysis of a concentrated solution of sodium ethanoate gives a gas at the anode that burns.", q: "The hydrocarbon formed is:", o: ["Ethane", "Methane", "Ethene", "Propane"], a: 0, hint: "Kolbe electrolysis: R–R.", why: "2CH₃COO⁻ → <b>C₂H₆</b> + 2CO₂." }
  ],
  find: {
    mcq: [
      { s: "Acyl chloride + H₂ over a poisoned palladium catalyst.", o: ["Rosenmund reduction", "Stephen reduction", "Clemmensen reduction", "Etard reaction"], a: 0, c: "prep", d: "E", why: "<b>Rosenmund</b>." },
      { s: "Toluene + chromyl chloride → benzaldehyde.", o: ["Etard reaction", "Gattermann–Koch", "Cannizzaro", "HVZ"], a: 0, c: "prep", d: "M", why: "<b>Etard</b>." },
      { s: "Benzene + CH₃COCl with AlCl₃ gives acetophenone.", o: ["Friedel–Crafts acylation", "Rosenmund reduction", "Aldol", "Kolbe"], a: 0, c: "prep", d: "M", why: "<b>Friedel–Crafts acylation</b>." },
      { s: "Carbonyl + HCN gives a compound with both –OH and –CN.", o: ["Cyanohydrin formation", "Oxime formation", "Aldol", "Esterification"], a: 0, c: "nucadd", d: "E", why: "<b>Cyanohydrin</b>." },
      { s: "Ketone + ethylene glycol, dry HCl.", o: ["Ketal formation", "Aldol condensation", "Cannizzaro", "HVZ"], a: 0, c: "nucadd", d: "C", why: "<b>Ketal</b>." },
      { s: "Orange precipitate with 2,4-dinitrophenylhydrazine.", o: ["Carbonyl group test", "Carboxylic acid test", "Phenol test", "Alcohol test"], a: 0, c: "nh2", d: "E", why: "<b>Carbonyl</b>." },
      { s: "Acetophenone + Zn–Hg / conc. HCl.", o: ["Clemmensen reduction", "Wolff–Kishner", "Rosenmund", "Cannizzaro"], a: 0, c: "redox", d: "M", why: "<b>Clemmensen</b>." },
      { s: "Silver mirror on the test tube wall.", o: ["Tollens' test (aldehyde)", "Fehling's test", "Iodoform test", "Lucas test"], a: 0, c: "tests", d: "E", why: "<b>Tollens'</b>." },
      { s: "Yellow solid with antiseptic smell forms from propanone + I₂/NaOH.", o: ["Iodoform test", "Fehling's test", "Tollens' test", "2,4-DNP test"], a: 0, c: "tests", d: "M", why: "<b>Iodoform</b>." },
      { s: "Two ethanal molecules join under dilute NaOH.", o: ["Aldol condensation", "Cannizzaro reaction", "Esterification", "Decarboxylation"], a: 0, c: "alpha", d: "E", why: "<b>Aldol</b>." },
      { s: "Benzaldehyde + conc. NaOH gives an alcohol and a salt.", o: ["Cannizzaro reaction", "Aldol", "Clemmensen", "Kolbe"], a: 0, c: "cann", d: "M", why: "<b>Cannizzaro</b>." },
      { s: "Grignard reagent bubbled with dry ice, then acid.", o: ["Preparation of carboxylic acid", "Preparation of ketone", "Reduction", "Aldol"], a: 0, c: "acprep", d: "M", why: "<b>RCOOH</b>." },
      { s: "Trichloroacetic acid is far stronger than acetic acid.", o: ["–I effect of Cl stabilises anion", "Hydrogen bonding", "Steric hindrance", "Resonance in ring"], a: 0, c: "acidity", d: "C", why: "<b>–I effect</b>." },
      { s: "Fizz with sodium bicarbonate.", o: ["Carboxylic acid", "Phenol", "Alcohol", "Ketone"], a: 0, c: "acreact", d: "E", why: "<b>Carboxylic acid</b>." },
      { s: "Acid + Br₂ + red phosphorus → α-bromo acid.", o: ["HVZ reaction", "Kolbe reaction", "Rosenmund", "Stephen"], a: 0, c: "acreact", d: "C", why: "<b>HVZ</b>." },
      { s: "Sodium acetate + soda lime → methane.", o: ["Decarboxylation", "Esterification", "Aldol", "Reduction"], a: 0, c: "acreact", d: "M", why: "<b>Decarboxylation</b>." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["Pd–BaSO₄ stops at aldehyde.", "Rosenmund reduction", "prep"], ["CN⁻ attacks C=O.", "Nucleophilic addition", "nucadd"], ["C=O → CH₂ with hydrazine and KOH.", "Wolff–Kishner reduction", "redox"], ["Needs α-H and dilute alkali.", "Aldol condensation", "alpha"], ["No α-H, conc. alkali.", "Cannizzaro reaction", "cann"], ["CO₂ fizz with NaHCO₃.", "Carboxylic acid test", "acreact"]] }
    ],
    wrong: [
      { stmts: ["Aldehydes reduce Tollens' reagent.", "Aromatic aldehydes reduce Fehling's solution.", "Ketones do not reduce Tollens' reagent.", "Propanone gives the iodoform test."], a: 1, c: "tests", why: "Aromatic aldehydes do <b>not</b> reduce Fehling's." },
      { stmts: ["HCHO gives Cannizzaro reaction.", "CH₃CHO gives aldol condensation.", "C₆H₅CHO gives aldol with itself.", "Cannizzaro is a disproportionation."], a: 2, c: "alpha", why: "Benzaldehyde has <b>no α-H</b>." },
      { stmts: ["Formic acid is stronger than acetic acid.", "Electron-donating groups increase acidity.", "Carboxylate ions are resonance-stabilised.", "Acids form H-bonded dimers."], a: 1, c: "acidity", why: "Donating groups <b>decrease</b> acidity." }
    ],
    para: [
      { target: "Tollens' test", c: "tests", sents: ["Diya brought three bottles from the storeroom.", "She warmed one sample with ammoniacal silver nitrate, and a shiny coating formed inside the tube.", "The storeroom was cold.", "She wrote the label neatly."], a: 1, why: "Silver mirror: <b>Tollens' test</b>." },
      { target: "Aldol condensation", c: "alpha", sents: ["A flavour company studied ethanal.", "In dilute alkali, two molecules joined to form a β-hydroxy aldehyde.", "The company is in Pune.", "It exports to five countries."], a: 1, why: "<b>Aldol</b>." },
      { target: "Effect of substituents on acidity", c: "acidity", sents: ["Karan measured the pH of several acid solutions.", "All were 0.1 M.", "The one with three chlorine atoms near –COOH had by far the lowest pH.", "He plotted a bar chart."], a: 2, why: "Cl withdraws electrons: <b>stronger acid</b>." }
    ],
    explain: [
      { s: "Propanal reacts faster with HCN than propanone.", o: ["Less steric hindrance and less +I in aldehydes", "Propanal has no α-H", "Propanone is aromatic", "HCN prefers ketones"], a: 0, c: "nucadd", why: "The clue is <i>faster</i>: aldehydes are <b>less hindered</b> and more positive." },
      { s: "Formaldehyde gives Cannizzaro reaction but acetaldehyde gives aldol.", o: ["HCHO has no α-H; CH₃CHO has α-H", "HCHO is a ketone", "CH₃CHO is aromatic", "Both have no α-H"], a: 0, c: "cann", why: "Decided by <b>α-hydrogen</b>." },
      { s: "Acetic acid boils higher than propan-1-ol though their masses are equal.", o: ["Acids form H-bonded dimers", "Acids are ionic", "Propanol is branched", "Acetic acid is aromatic"], a: 0, c: "acidity", why: "<b>Dimers</b> by strong H-bonding." },
      { s: "Benzoic acid is nitrated at the meta position.", o: ["–COOH is deactivating, meta directing", "–COOH is activating", "Ring has no electrons", "Friedel–Crafts"], a: 0, c: "acreact", why: "<b>Meta-directing</b> –COOH." }
    ]
  }
});
