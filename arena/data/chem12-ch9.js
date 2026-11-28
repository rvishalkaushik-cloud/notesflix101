/* Revision Arena · Class XII Chemistry · Unit 9 · Amines (Parts 1-3 + exercises). Original cases. */
NFArena.register({
  id: "chem12-ch9", cls: "XII", subject: "Chemistry", unit: "Unit", num: "9",
  title: "Amines",
  tagline: "Classification and preparation (Gabriel, Hoffmann), basic strength, carbylamine and Hinsberg tests, reactions of aniline, and diazonium salts in synthesis and dyes.",
  notesLink: "../#chem12-ch9",
  concepts: {
    classify: { n: "Classification and structure", s: "prep" },
    prep: { n: "Preparation of amines", s: "prep" },
    named: { n: "Gabriel and Hoffmann reactions", s: "prep" },
    phys: { n: "Physical properties", s: "prep" },
    basic: { n: "Basic strength", s: "basic" },
    tests: { n: "Carbylamine, Hinsberg and HNO₂ tests", s: "basic" },
    aniline: { n: "Electrophilic substitution in aniline", s: "basic" },
    dprep: { n: "Preparation and stability of diazonium salts", s: "diazo" },
    replace: { n: "Replacement of the diazo group", s: "diazo" },
    coupling: { n: "Coupling reactions and dyes", s: "diazo" }
  },
  overview: {
    text: "<b>Amines</b> are derivatives of ammonia in which H atoms are replaced by alkyl or aryl groups (1°, 2°, 3°). The lone pair on nitrogen makes them <b>bases</b> and <b>nucleophiles</b>. Aniline's lone pair is delocalised into the ring, so it is a weaker base but a very reactive ring. Aromatic 1° amines give <b>diazonium salts</b>, which are key intermediates for making many aromatic compounds and <b>azo dyes</b>.",
    points: [
      "<b>Gabriel synthesis</b> gives pure 1° aliphatic amines; <b>Hoffmann bromamide</b> gives an amine with one C fewer than the amide.",
      "In water: (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ > C₆H₅NH₂.",
      "<b>Carbylamine test</b> (CHCl₃ + alc. KOH) is given only by 1° amines: foul-smelling isocyanide.",
      "ArNH₂ + NaNO₂/HCl at 273–278 K → ArN₂⁺Cl⁻."
    ],
    map: {
      center: "Amines",
      branches: [
        { t: "Making amines", c: ["Reduce nitro / nitrile / amide", "Ammonolysis", "Gabriel", "Hoffmann bromamide"] },
        { t: "Basicity", c: ["Inductive effect", "Solvation", "Steric", "Aniline resonance"] },
        { t: "Tests and aniline", c: ["Carbylamine", "Hinsberg", "HNO₂", "Bromination, nitration"] },
        { t: "Diazonium salts", c: ["Sandmeyer, Gattermann", "KI, HBF₄, H₃PO₂", "Coupling → azo dyes"] }
      ]
    }
  },
  sections: [
    {
      id: "prep", title: "Classification and preparation", sub: "Putting nitrogen on carbon", icon: "🧬", color: "#EC4899",
      quick: [
        "<b>1°</b> RNH₂, <b>2°</b> R₂NH, <b>3°</b> R₃N. N is sp³ with a lone pair; the molecule is pyramidal.",
        "<b>Reduction of nitro compounds</b>: Fe + HCl (preferred: FeCl₂ formed is hydrolysed, releasing HCl, so little acid is needed), Sn + HCl, or H₂/Pd.",
        "<b>Ammonolysis</b>: RX + NH₃ → mixture of 1°, 2°, 3° amines and quaternary salt (excess NH₃ favours 1°).",
        "Reduction of <b>nitriles</b> (LiAlH₄ or H₂/Ni) → RCH₂NH₂ (one C more than RX); reduction of <b>amides</b> (LiAlH₄) → amines.",
        "<b>Gabriel phthalimide synthesis</b>: phthalimide + KOH → potassium phthalimide + RX → N-alkylphthalimide → hydrolysis → <b>pure 1° amine</b>. Not for aromatic amines (aryl halides do not do SN2).",
        "<b>Hoffmann bromamide degradation</b>: RCONH₂ + Br₂ + 4NaOH → RNH₂ + Na₂CO₃ + 2NaBr + 2H₂O (amine has <b>one C fewer</b>)."
      ],
      cards: [
        { t: "Worked: Hoffmann count", tag: "example", b: "<p>Propanamide (3 C) + Br₂/NaOH → <b>ethanamine</b> (2 C). Benzamide → <b>aniline</b>.</p>" },
        { t: "Boiling points", tag: "why", b: "<p>1° and 2° amines form N–H···N hydrogen bonds; 3° amines have no N–H. So bp: <b>1° > 2° > 3°</b> for isomers, but all are lower than alcohols (N is less electronegative than O).</p>" }
      ],
      exam: ["For Gabriel, write all three steps.", "In Hoffmann questions, count carbons."]
    },
    {
      id: "basic", title: "Basicity, tests and aniline", sub: "The nitrogen lone pair at work", icon: "🧪", color: "#7B4DFF",
      quick: [
        "Alkyl groups (+I) push electrons to N: aliphatic amines are <b>stronger bases than NH₃</b>. In water, <b>solvation</b> (H-bonding of the ammonium ion) and <b>steric</b> crowding also matter: (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ (pKb 3.27, 3.38, 4.22, 4.75).",
        "<b>Aniline</b> (pKb 9.38) is a much weaker base: its lone pair is delocalised into the ring by resonance. Electron-donating groups on the ring increase basicity; –NO₂ decreases it.",
        "<b>Carbylamine test</b>: 1° amine + CHCl₃ + alcoholic KOH → <b>isocyanide</b> (foul smell). 2° and 3° do not respond.",
        "<b>Hinsberg's reagent</b> (benzenesulphonyl chloride): 1° → sulphonamide <b>soluble in alkali</b>; 2° → sulphonamide <b>insoluble in alkali</b>; 3° → no reaction.",
        "<b>HNO₂</b> (NaNO₂ + HCl): aliphatic 1° → alcohol + <b>N₂ gas</b>; aromatic 1° at 273–278 K → <b>diazonium salt</b>.",
        "Aniline: –NH₂ is strongly activating, o/p directing. Bromine water → white <b>2,4,6-tribromoaniline</b>. For mono-substitution, first <b>acetylate</b> (acetanilide). Direct nitration gives a lot of <b>meta</b> product (anilinium ion forms in acid). No Friedel–Crafts (N bonds to AlCl₃). Sulphonation → <b>sulphanilic acid</b> (zwitterion)."
      ],
      table: { cap: "Hinsberg test", head: ["Amine", "With C₆H₅SO₂Cl", "Product in KOH"], rows: [["1°", "N-alkylbenzenesulphonamide", "Dissolves (acidic N–H)"], ["2°", "N,N-dialkylbenzenesulphonamide", "Does not dissolve"], ["3°", "No reaction", "—"]] },
      cards: [
        { t: "Why is (CH₃)₃N weaker than (CH₃)₂NH in water?", tag: "why", b: "<p>(CH₃)₃NH⁺ has only one N–H to hydrogen-bond with water, so it is less stabilised by solvation, and three methyls crowd the N. These outweigh the extra +I effect.</p>" },
        { t: "Why acetylate before nitrating aniline?", tag: "why", b: "<p>In acid, –NH₂ becomes –NH₃⁺, a meta-directing group, and the ring may be oxidised. Acetanilide's –NHCOCH₃ is moderately activating and o/p directing, giving mainly <b>p-nitroacetanilide</b>; hydrolysis then gives p-nitroaniline.</p>" }
      ],
      exam: ["Always state which amines give the carbylamine test.", "Explain basicity using +I, solvation and steric effects together."]
    },
    {
      id: "diazo", title: "Diazonium salts", sub: "A gateway to aromatic compounds", icon: "🎨", color: "#12B5A6",
      quick: [
        "<b>Diazotisation</b>: C₆H₅NH₂ + NaNO₂ + 2HCl (273–278 K) → C₆H₅N₂⁺Cl⁻ + NaCl + 2H₂O. Used at once; arenediazonium salts are more stable than alkyl ones (resonance).",
        "<b>Sandmeyer</b>: CuCl/HCl → ArCl; CuBr/HBr → ArBr; CuCN/KCN → ArCN. <b>Gattermann</b>: Cu powder + HX.",
        "<b>KI</b> → ArI (iodobenzene). <b>HBF₄</b>, then heat → ArF (fluorobenzene).",
        "<b>H₃PO₂</b> or ethanol → benzene (removes –NH₂ from a ring). <b>Warm water</b> → phenol. NaNO₂/Cu → nitrobenzene.",
        "<b>Coupling</b> (N₂ retained): with <b>phenol</b> (mildly alkaline) → p-hydroxyazobenzene (<b>orange</b> dye); with <b>aniline</b> (mildly acidic) → p-aminoazobenzene (<b>yellow</b> dye). These are electrophilic substitutions at the para position."
      ],
      cards: [
        { t: "Worked: making 1,3,5-tribromobenzene", tag: "example", b: "<p>Aniline + Br₂ water → 2,4,6-tribromoaniline → NaNO₂/HCl (273 K) → diazonium salt → H₃PO₂ → <b>1,3,5-tribromobenzene</b>. The –NH₂ directs the bromines, then is removed.</p>" },
        { t: "Memory hook", tag: "hook", b: "<p><b>“Sandmeyer Copper, Gattermann Copper-dust, Iodine needs only KI, Fluorine needs BF₄.”</b></p>" }
      ],
      exam: ["Write the temperature 273–278 K for diazotisation.", "For coupling, give the colour and the pH condition."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "classify", q: "Secondary amine?", a: "R₂NH: two alkyl/aryl groups on N." },
    { k: "Reagent", c: "prep", q: "Preferred reagent to reduce nitrobenzene to aniline?", a: "Fe + HCl." },
    { k: "Reaction", c: "named", q: "Gabriel synthesis gives?", a: "Pure primary aliphatic amines." },
    { k: "Reaction", c: "named", q: "Hoffmann bromamide degradation?", a: "RCONH₂ + Br₂ + 4NaOH → RNH₂ (one C fewer)." },
    { k: "Fact", c: "named", q: "Why can't Gabriel make aniline?", a: "Aryl halides do not undergo SN2 with phthalimide anion." },
    { k: "Trend", c: "phys", q: "Boiling point order of isomeric amines?", a: "1° > 2° > 3°." },
    { k: "Trend", c: "basic", q: "Basicity order of methylamines in water?", a: "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃." },
    { k: "Reason", c: "basic", q: "Why is aniline a weaker base than NH₃?", a: "Its lone pair is delocalised into the benzene ring." },
    { k: "Test", c: "tests", q: "Carbylamine test?", a: "1° amine + CHCl₃ + alcoholic KOH → foul-smelling isocyanide." },
    { k: "Test", c: "tests", q: "Hinsberg's reagent?", a: "Benzenesulphonyl chloride (C₆H₅SO₂Cl)." },
    { k: "Test", c: "tests", q: "Aliphatic 1° amine + HNO₂?", a: "Alcohol + N₂ gas." },
    { k: "Reaction", c: "aniline", q: "Aniline + bromine water?", a: "White ppt of 2,4,6-tribromoaniline." },
    { k: "Reason", c: "aniline", q: "Why no Friedel–Crafts with aniline?", a: "N's lone pair bonds with AlCl₃, deactivating the ring." },
    { k: "Reaction", c: "dprep", q: "Conditions for diazotisation?", a: "NaNO₂ + HCl at 273–278 K." },
    { k: "Reaction", c: "replace", q: "ArN₂⁺Cl⁻ + CuCN/KCN?", a: "Benzonitrile (Sandmeyer)." },
    { k: "Reaction", c: "replace", q: "ArN₂⁺Cl⁻ + H₃PO₂?", a: "Benzene." },
    { k: "Reaction", c: "coupling", q: "Benzenediazonium chloride + phenol (alkaline)?", a: "p-Hydroxyazobenzene (orange dye)." },
    { k: "Reaction", c: "coupling", q: "Benzenediazonium chloride + aniline?", a: "p-Aminoazobenzene (yellow dye)." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "The smelly test tube",
      text: "<p><b>Sana</b> has three amines: ethanamine, N-methylethanamine and N,N-dimethylethanamine. She warms each with chloroform and alcoholic KOH. Only one tube gives a very offensive smell.</p>",
      qs: [
        { q: "Name the test and identify which amine gave the smell.", m: 2, type: "Identify", c: "tests", hint: "1° only.", points: [{ p: "Carbylamine (isocyanide) test", m: 1, k: ["carbylamine", "isocyanide"] }, { p: "Ethanamine (the 1° amine)", m: 1, k: ["ethanamine", "1°", "primary"] }], structure: ["Test name, amine."], model: "<p>This is the <b>carbylamine test</b>. Only the <b>1° amine, ethanamine</b>, gives the foul-smelling ethyl isocyanide.</p>" },
        { q: "Write the equation.", m: 1, type: "Equation", c: "tests", hint: "RNC.", points: [{ p: "C₂H₅NH₂ + CHCl₃ + 3KOH → C₂H₅NC + 3KCl + 3H₂O", m: 1, k: ["nc", "3koh"] }], structure: ["One equation."], model: "<p><b>C₂H₅NH₂ + CHCl₃ + 3KOH (alc.) → C₂H₅NC + 3KCl + 3H₂O</b></p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "Fewer carbons, more purity",
      text: "<p>A pharmaceutical lab needs pure <b>propan-1-amine</b>. <b>Nikhil</b> suggests heating 1-bromopropane with ammonia. His senior says that gives a messy mixture and suggests two better routes.</p>",
      qs: [
        { q: "Why does ammonolysis give a mixture?", m: 1, type: "Explain", c: "prep", hint: "Product is also a nucleophile.", points: [{ p: "The 1° amine formed reacts further with RX to give 2°, 3° amines and quaternary salt", m: 1, k: ["further", "2°", "3°", "quaternary"] }], structure: ["One line."], model: "<p>The 1° amine formed is itself a nucleophile and reacts further with RX, giving <b>2°, 3° amines and a quaternary ammonium salt</b>.</p>" },
        { q: "Name two better methods and the starting material for each.", m: 2, type: "Suggest", c: "named", hint: "Gabriel; Hoffmann.", points: [{ p: "Gabriel synthesis from 1-bromopropane and potassium phthalimide", m: 1, k: ["gabriel", "phthalimide"] }, { p: "Hoffmann bromamide from butanamide", m: 1, k: ["hoffmann", "butanamide"] }], structure: ["Two methods."], model: "<p>(i) <b>Gabriel phthalimide synthesis</b> using 1-bromopropane, then hydrolysis.</p><p>(ii) <b>Hoffmann bromamide degradation</b> of <b>butanamide</b> (4 C) with Br₂/NaOH, giving the 3 C amine.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Which amine is the stronger base?",
      text: "<p>A chemistry quiz asks students to rank methanamine, N-methylmethanamine, N,N-dimethylmethanamine, ammonia and aniline by basic strength in water. <b>Gill Sir</b> gives pKb values: 3.38, 3.27, 4.22, 4.75 and 9.38.</p>",
      qs: [
        { q: "Arrange them in decreasing basic strength.", m: 1, type: "Arrange", c: "basic", hint: "Lower pKb, stronger base.", points: [{ p: "(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ > C₆H₅NH₂", m: 1, k: ["(ch₃)₂nh >", "(ch3)2nh >"] }], structure: ["One order."], model: "<p><b>(CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ > C₆H₅NH₂</b>.</p>" },
        { q: "Explain why the 3° amine is weaker than the 2°, and why aniline is weakest.", m: 3, type: "Explain", c: "basic", hint: "Solvation, steric; resonance.", points: [{ p: "+I effect alone would make 3° strongest", m: 1, k: ["+i"] }, { p: "But (CH₃)₃NH⁺ has fewest N–H for H-bonding with water (poor solvation) and is crowded", m: 1, k: ["solvation", "steric", "h-bond"] }, { p: "Aniline: lone pair delocalised into ring (resonance), less available", m: 1, k: ["resonance", "delocal"] }], structure: ["Inductive, solvation/steric, aniline."], model: "<p>The <b>+I effect</b> of methyl groups would make (CH₃)₃N the strongest. But in water, (CH₃)₃NH⁺ has only one N–H, so it is <b>poorly solvated</b>, and three methyls cause <b>steric crowding</b>; overall it is weaker than (CH₃)₂NH.</p><p>In <b>aniline</b>, the N lone pair is <b>delocalised into the ring</b> by resonance, so it is much less available to accept H⁺.</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "Nitrating aniline the smart way",
      text: "<p>A dye unit needs p-nitroaniline. When <b>Sana</b> nitrates aniline directly with nitric and sulphuric acids, she gets lots of the meta isomer and tarry material. Her mentor tells her to protect the –NH₂ group first.</p>",
      qs: [
        { q: "Why does direct nitration give a meta product and tar?", m: 2, type: "Explain", c: "aniline", hint: "Anilinium ion; oxidation.", points: [{ p: "In acid, –NH₂ is protonated to –NH₃⁺, a meta-directing deactivating group", m: 1, k: ["anilinium", "nh₃⁺", "nh3+", "meta"] }, { p: "HNO₃ oxidises the activated ring → tarry products", m: 1, k: ["oxid", "tar"] }], structure: ["Two reasons."], model: "<p>In strong acid, aniline becomes the <b>anilinium ion (–NH₃⁺)</b>, which is deactivating and <b>meta-directing</b>. Also, HNO₃ <b>oxidises</b> the very reactive ring, giving tarry products.</p>" },
        { q: "Outline the protected route to p-nitroaniline.", m: 2, type: "Describe", c: "aniline", hint: "Acetylation, nitration, hydrolysis.", points: [{ p: "Acetylate: aniline + (CH₃CO)₂O → acetanilide", m: 1, k: ["acetanilide", "acetyl"] }, { p: "Nitrate → p-nitroacetanilide, then hydrolyse → p-nitroaniline", m: 1, k: ["hydrolys", "p-nitro"] }], structure: ["Protect, nitrate, deprotect."], model: "<p>(i) <b>Acetylate:</b> aniline + acetic anhydride → acetanilide.</p><p>(ii) <b>Nitrate:</b> mainly <b>p-nitroacetanilide</b> (the –NHCOCH₃ group is o/p directing and less activating).</p><p>(iii) <b>Hydrolyse</b> (acid or base) → <b>p-nitroaniline</b>.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "One salt, many products",
      text: "<p>A fine-chemicals plant prepares benzenediazonium chloride and splits it into batches to make chlorobenzene, iodobenzene, phenol, benzonitrile and an orange dye. <b>Gill Sir</b> warns the team to keep the diazotisation bath cold.</p>",
      qs: [
        { q: "Write the conditions for making benzenediazonium chloride and say why the bath must be cold.", m: 2, type: "Describe", c: "dprep", hint: "273–278 K.", points: [{ p: "Aniline + NaNO₂ + HCl at 273–278 K", m: 1, k: ["273", "nano₂", "nano2"] }, { p: "Diazonium salts decompose (to phenol + N₂) at higher temperatures", m: 1, k: ["decompos", "unstable"] }], structure: ["Equation/conditions, reason."], model: "<p>C₆H₅NH₂ + NaNO₂ + 2HCl → C₆H₅N₂⁺Cl⁻ + NaCl + 2H₂O at <b>273–278 K</b>.</p><p>Diazonium salts are <b>unstable</b>; above about 278 K they decompose (giving phenol and N₂), so the bath is kept cold and the salt is used immediately.</p>" },
        { q: "Give the reagent for each product: chlorobenzene, iodobenzene, benzonitrile, and the orange dye.", m: 3, type: "Reagents", c: "replace", hint: "Sandmeyer, KI, coupling.", points: [{ p: "Chlorobenzene: CuCl/HCl (Sandmeyer); iodobenzene: KI", m: 1, k: ["cucl", "ki"] }, { p: "Benzonitrile: CuCN/KCN", m: 1, k: ["cucn"] }, { p: "Orange dye: couple with phenol in mild alkali → p-hydroxyazobenzene", m: 1, k: ["phenol", "hydroxyazobenzene"] }], structure: ["Each product."], model: "<p><b>Chlorobenzene:</b> CuCl/HCl (Sandmeyer). <b>Iodobenzene:</b> KI. <b>Benzonitrile:</b> CuCN/KCN.</p><p><b>Orange dye:</b> couple with <b>phenol</b> in mildly alkaline solution → <b>p-hydroxyazobenzene</b>.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "classify", q: "(CH₃)₂NH is a:", o: ["Secondary amine", "Primary amine", "Tertiary amine", "Quaternary salt"], a: 0, hint: "Two groups on N.", why: "<b>2°</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "tests", q: "The carbylamine test is given by:", o: ["Primary amines", "Secondary amines", "Tertiary amines", "All amines"], a: 0, hint: "Needs two N–H.", why: "<b>1° amines</b>." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "named", q: "Benzamide + Br₂ + NaOH gives:", o: ["Aniline", "Benzylamine", "Benzoic acid", "Bromobenzene"], a: 0, hint: "One C fewer.", why: "<b>Aniline</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "basic", q: "The weakest base is:", o: ["C₆H₅NH₂", "NH₃", "CH₃NH₂", "(CH₃)₂NH"], a: 0, hint: "Resonance.", why: "<b>Aniline</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "replace", q: "Benzenediazonium chloride + KI gives:", o: ["Iodobenzene", "Phenol", "Benzene", "Chlorobenzene"], a: 0, hint: "Direct replacement.", why: "<b>Iodobenzene</b>." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "tests", q: "Which amine gives a Hinsberg product insoluble in alkali?", o: ["N-Methylethanamine", "Ethanamine", "N,N-Dimethylethanamine", "Aniline"], a: 0, hint: "No acidic N–H left.", why: "<b>2° amine</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "aniline", q: "Direct nitration of aniline gives a large amount of meta product because:", o: ["Anilinium ion is formed in acid", "–NH₂ is meta directing", "Aniline is not aromatic", "NO₂⁺ is a nucleophile"], a: 0, hint: "–NH₃⁺.", why: "<b>Anilinium ion</b> is meta-directing." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "named", q: "Which cannot be made by Gabriel synthesis?", o: ["Aniline", "Ethanamine", "Propan-1-amine", "Benzylamine"], a: 0, hint: "Aryl halide.", why: "<b>Aniline</b>: aryl halides don't do SN2." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "basic", q: "Aniline is a weaker base than ethanamine.", r: "In aniline the lone pair on N is delocalised over the benzene ring.", a: 0, hint: "Lone pair availability.", why: "Both true, and R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "aniline", q: "Aniline does not undergo Friedel–Crafts reaction.", r: "Aniline forms a salt with AlCl₃, the Lewis acid catalyst.", a: 0, hint: "N bonds to AlCl₃.", why: "Both true, and R explains A." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "phys", q: "Tertiary amines have higher boiling points than isomeric primary amines.", r: "Tertiary amines have no N–H bond for hydrogen bonding.", a: 3, hint: "Which boils higher?", why: "A is false; R is true." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "dprep", q: "Diazotisation is carried out at 273–278 K.", a: true, hint: "Cold.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "tests", q: "Tertiary amines react with Hinsberg's reagent.", a: false, hint: "No N–H.", why: "False." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "basic", q: "Methylamine is a stronger base than ammonia.", a: true, hint: "+I.", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "replace", q: "Match the reagent (with ArN₂⁺Cl⁻) with the product.", pairs: [["CuCl / HCl", "Chlorobenzene"], ["H₃PO₂", "Benzene"], ["Warm water", "Phenol"], ["HBF₄, then heat", "Fluorobenzene"]], hint: "One each.", why: "Each reagent replaces N₂ with one group." },
    { id: "q16", t: "match", d: "M", m: 4, c: "prep", q: "Match the starting material with the method to an amine.", pairs: [["Nitrobenzene", "Fe / HCl reduction"], ["Ethanenitrile", "LiAlH₄ reduction"], ["Ethanamide + Br₂/NaOH", "Hoffmann bromamide"], ["Potassium phthalimide + RX", "Gabriel synthesis"]], hint: "One each.", why: "Each starting material uses one method." },
    { id: "q17", t: "match", d: "M", m: 4, c: "tests", q: "Match the observation with the amine type.", pairs: [["Foul smell with CHCl₃/KOH", "Primary amine"], ["Hinsberg product insoluble in KOH", "Secondary amine"], ["No reaction with Hinsberg's reagent", "Tertiary amine"], ["Gives N₂ gas with HNO₂ at room temperature", "Primary aliphatic amine"]], hint: "Think N–H count.", why: "Each test points to one type." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "aniline", q: "Aniline + bromine water gives a white ppt of 2,4,6-______aniline.", acc: ["tribromo"], hint: "Three Br.", why: "<b>Tribromo</b>aniline." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "tests", q: "Benzenesulphonyl chloride is called ______ reagent.", acc: ["hinsberg", "hinsberg's", "hinsberg’s"], hint: "H…", why: "<b>Hinsberg's</b> reagent." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "coupling", q: "Benzenediazonium chloride couples with phenol to give an ______ dye.", acc: ["orange"], hint: "p-Hydroxyazobenzene.", why: "<b>Orange</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "named", q: "Hoffmann bromamide degradation of hexanamide gives ______amine.", acc: ["pentan-1-", "pentyl", "pentan-1", "1-pentyl"], hint: "One C fewer.", why: "<b>Pentan-1-amine</b>." },
    { id: "q22", t: "short", d: "E", m: 1, c: "replace", q: "Which reagent removes the –N₂⁺ group to give benzene?", acc: ["h3po2", "h₃po₂", "hypophosphorous acid", "ethanol", "phosphinic acid"], hint: "Reducing agent.", why: "<b>H₃PO₂</b> (or ethanol)." },
    { id: "q23", t: "short", d: "M", m: 1, c: "aniline", q: "What is formed when aniline is sulphonated with conc. H₂SO₄ and heated?", acc: ["sulphanilic acid", "sulfanilic acid", "4-aminobenzenesulphonic acid", "p-aminobenzenesulphonic acid"], hint: "Zwitterion.", why: "<b>Sulphanilic acid</b>." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "named", q: "Write the steps of Gabriel phthalimide synthesis. Why can't it make aromatic 1° amines?", hint: "KOH, RX, hydrolysis.", why: "", points: [{ p: "Phthalimide + KOH → potassium phthalimide", m: 1, k: ["koh", "potassium phthalimide"] }, { p: "+ RX → N-alkylphthalimide; hydrolysis (NaOH) → RNH₂", m: 1, k: ["n-alkyl", "hydrolys"] }, { p: "Aryl halides do not undergo nucleophilic substitution (SN2) with the phthalimide anion", m: 1, k: ["aryl", "sn2", "substitution"] }], model: "<p>(i) Phthalimide + ethanolic KOH → <b>potassium phthalimide</b>.</p><p>(ii) + RX → <b>N-alkylphthalimide</b>; (iii) alkaline hydrolysis → <b>RNH₂</b> + phthalate.</p><p>Aryl halides <b>do not undergo nucleophilic substitution</b> with the phthalimide anion, so aromatic amines cannot be made.</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "tests", q: "How does Hinsberg's test distinguish 1°, 2° and 3° amines?", hint: "Solubility in alkali.", why: "", points: [{ p: "1°: sulphonamide with acidic N–H, soluble in KOH", m: 1, k: ["soluble"] }, { p: "2°: sulphonamide with no N–H, insoluble in KOH", m: 1, k: ["insoluble"] }, { p: "3°: does not react", m: 1, k: ["no reaction", "not react"] }], model: "<p>Amine + <b>benzenesulphonyl chloride</b>:</p><p><b>1°:</b> forms C₆H₅SO₂NHR, whose N–H is acidic (strong electron-withdrawing SO₂ group), so it <b>dissolves in KOH</b>.</p><p><b>2°:</b> forms C₆H₅SO₂NR₂ with no N–H: <b>insoluble in KOH</b>.</p><p><b>3°:</b> <b>no reaction</b>.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "replace", q: "Write the products of benzenediazonium chloride with: (a) CuBr/HBr, (b) CuCN/KCN, (c) H₂O (warm), (d) aniline.", hint: "Three replacements and one coupling.", why: "", points: [{ p: "(a) Bromobenzene", m: 1, k: ["bromobenzene"] }, { p: "(b) Benzonitrile", m: 1, k: ["benzonitrile", "c₆h₅cn", "c6h5cn"] }, { p: "(c) Phenol", m: 1, k: ["phenol"] }, { p: "(d) p-Aminoazobenzene (yellow dye)", m: 1, k: ["aminoazobenzene"] }], model: "<p>(a) <b>Bromobenzene</b> + N₂. (b) <b>Benzonitrile</b> (C₆H₅CN) + N₂. (c) <b>Phenol</b> + N₂ + HCl. (d) <b>p-Aminoazobenzene</b> (yellow dye), by coupling.</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "basic", q: "Explain the order of basic strength of ethylamines in water: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃.", hint: "+I, solvation, steric balance.", why: "", points: [{ p: "All ethylamines > NH₃ because of +I effect", m: 1, k: ["+i"] }, { p: "Solvation of R₃NH⁺ is weakest (fewest N–H)", m: 1, k: ["solvation", "h-bond"] }, { p: "Steric hindrance increases with more groups", m: 1, k: ["steric"] }, { p: "For ethyl, larger groups make steric/+I balance place 3° above 1°", m: 1, k: ["balance", "combined", "net"] }], model: "<p>(i) Ethyl groups push electrons to N (<b>+I effect</b>), so all ethylamines are stronger bases than NH₃.</p><p>(ii) In water, the ammonium ion is stabilised by <b>H-bonding (solvation)</b>; this is weakest for R₃NH⁺ (one N–H).</p><p>(iii) Bulky groups cause <b>steric hindrance</b> to H⁺ attack.</p><p>(iv) With ethyl groups, the stronger +I effect outweighs the poorer solvation of the 3° ion compared with the 1°, so the <b>net</b> order is (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "aniline", q: "(a) Why is –NH₂ in aniline o/p directing and activating? (b) How is 4-bromoaniline made from aniline? (c) Convert aniline to 1,3,5-tribromobenzene. Give reagents for each step.", hint: "Protect; then diazo route.", why: "", points: [{ p: "(a) Lone pair delocalised into ring (+R): high electron density at o and p", m: 1, k: ["lone pair", "+r", "resonance"] }, { p: "(b) Acetylate aniline → acetanilide", m: 1, k: ["acetanilide", "acetyl"] }, { p: "Brominate (Br₂/CH₃COOH) → 4-bromoacetanilide, then hydrolyse → 4-bromoaniline", m: 1, k: ["hydrolys", "4-bromo"] }, { p: "(c) Aniline + Br₂ water → 2,4,6-tribromoaniline", m: 1, k: ["tribromoaniline"] }, { p: "NaNO₂/HCl, 273 K → diazonium salt", m: 1, k: ["nano₂", "nano2", "273"] }, { p: "H₃PO₂ → 1,3,5-tribromobenzene", m: 1, k: ["h₃po₂", "h3po2"] }], model: "<p>(a) The N lone pair is <b>delocalised into the ring</b> (+R), raising electron density, especially at ortho and para positions.</p><p>(b) Aniline → (acetic anhydride) → <b>acetanilide</b> → (Br₂ in CH₃COOH) → 4-bromoacetanilide → (hydrolysis) → <b>4-bromoaniline</b>.</p><p>(c) Aniline → (Br₂ water) → <b>2,4,6-tribromoaniline</b> → (NaNO₂/HCl, 273 K) → diazonium salt → (<b>H₃PO₂</b>) → <b>1,3,5-tribromobenzene</b>.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "coupling", q: "A textile unit makes a yellow dye by reacting benzenediazonium chloride with another amine in mildly acidic solution. The amine is:", o: ["Aniline", "Ethanamine", "Trimethylamine", "Acetamide"], a: 0, hint: "Aromatic amine coupling.", why: "<b>Aniline</b> → p-aminoazobenzene (yellow)." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "named", q: "A chemist wants to shorten a carbon chain by one while making an amine from an amide. She should use:", o: ["Br₂ + NaOH (Hoffmann)", "LiAlH₄", "Fe + HCl", "Phthalimide + KOH"], a: 0, hint: "One C fewer.", why: "<b>Hoffmann bromamide</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "tests", passage: "A colourless amine gives bubbles of a colourless, odourless gas with nitrous acid at room temperature and forms an alcohol.", q: "The amine is:", o: ["A 1° aliphatic amine", "A 2° amine", "A 3° amine", "Aniline at 273 K"], a: 0, hint: "N₂ released.", why: "<b>1° aliphatic</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "aniline", passage: "A student brominates aniline with bromine water and gets three Br atoms at once, though she wanted one.", q: "She should first:", o: ["Acetylate the –NH₂ group", "Use more bromine", "Add AlCl₃", "Heat strongly"], a: 0, hint: "Reduce activation.", why: "<b>Acetylation</b> moderates the ring." },
    { id: "q33", t: "case", d: "C", m: 1, c: "dprep", passage: "Arenediazonium salts can be stored briefly in cold solution, but alkyldiazonium salts decompose at once.", q: "The reason is:", o: ["Resonance stabilisation of the arenediazonium ion", "Alkyl groups are heavier", "Arenes are basic", "N₂ is not formed from arenes"], a: 0, hint: "Ring delocalisation.", why: "<b>Resonance</b> with the ring." }
  ],
  find: {
    mcq: [
      { s: "Nitrogen with three alkyl groups and no N–H.", o: ["Tertiary amine", "Primary amine", "Secondary amine", "Amide"], a: 0, c: "classify", d: "E", why: "<b>3°</b>." },
      { s: "Nitrobenzene + Fe/HCl.", o: ["Reduction to aniline", "Diazotisation", "Hoffmann", "Gabriel"], a: 0, c: "prep", d: "E", why: "<b>Reduction</b>." },
      { s: "Bromoethane + excess NH₃ under pressure.", o: ["Ammonolysis", "Gabriel synthesis", "Hoffmann degradation", "Carbylamine"], a: 0, c: "prep", d: "M", why: "<b>Ammonolysis</b>." },
      { s: "Potassium phthalimide + RX, then hydrolysis.", o: ["Gabriel synthesis", "Hoffmann", "Sandmeyer", "Coupling"], a: 0, c: "named", d: "E", why: "<b>Gabriel</b>." },
      { s: "Amide loses one carbon to give an amine.", o: ["Hoffmann bromamide degradation", "Gabriel synthesis", "Reduction with LiAlH₄", "Diazotisation"], a: 0, c: "named", d: "M", why: "<b>Hoffmann</b>." },
      { s: "Propan-1-amine boils higher than N,N-dimethylmethanamine.", o: ["H-bonding in 1° amines", "Higher mass", "Resonance", "Steric effect"], a: 0, c: "phys", d: "M", why: "<b>N–H···N H-bonds</b>." },
      { s: "(CH₃)₂NH is a stronger base than (CH₃)₃N in water.", o: ["Solvation and steric effects", "Only +I effect", "Resonance", "Hybridisation"], a: 0, c: "basic", d: "C", why: "<b>Solvation and steric</b> effects." },
      { s: "Aniline's pKb is about 9.4, much larger than NH₃'s.", o: ["Lone pair delocalised into ring", "+I effect", "H-bonding", "Steric effect"], a: 0, c: "basic", d: "M", why: "<b>Resonance</b>." },
      { s: "Offensive smell with chloroform and alcoholic KOH.", o: ["Carbylamine test", "Hinsberg test", "Iodoform test", "Lucas test"], a: 0, c: "tests", d: "E", why: "<b>Carbylamine</b>." },
      { s: "Product of an amine with C₆H₅SO₂Cl dissolves in KOH.", o: ["Primary amine (Hinsberg)", "Secondary amine", "Tertiary amine", "Amide"], a: 0, c: "tests", d: "M", why: "<b>1°</b>." },
      { s: "White precipitate at once when bromine water is added to an amine.", o: ["Aniline", "Ethanamine", "Trimethylamine", "Ammonia"], a: 0, c: "aniline", d: "E", why: "<b>Aniline</b>." },
      { s: "Acetanilide is nitrated instead of aniline.", o: ["Protecting –NH₂", "Making a dye", "Diazotisation", "Hoffmann"], a: 0, c: "aniline", d: "C", why: "<b>Protection</b> of –NH₂." },
      { s: "Aniline + NaNO₂ + HCl in an ice bath.", o: ["Diazotisation", "Carbylamine", "Acetylation", "Gabriel"], a: 0, c: "dprep", d: "E", why: "<b>Diazotisation</b>." },
      { s: "Diazonium salt + CuCl/HCl → chlorobenzene.", o: ["Sandmeyer reaction", "Gattermann reaction", "Coupling", "Hoffmann"], a: 0, c: "replace", d: "M", why: "<b>Sandmeyer</b>." },
      { s: "Diazonium salt + phenol in alkali → orange colour.", o: ["Coupling reaction", "Sandmeyer reaction", "Reduction", "Hydrolysis"], a: 0, c: "coupling", d: "M", why: "<b>Coupling</b>." },
      { s: "–N₂⁺ swapped for H using H₃PO₂.", o: ["Replacement by hydrogen", "Coupling", "Sandmeyer", "Gattermann"], a: 0, c: "replace", d: "C", why: "<b>Deamination</b> via H₃PO₂." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["Phthalimide route to pure RNH₂.", "Gabriel synthesis", "named"], ["Lone pair spread over the ring.", "Weak basicity of aniline", "basic"], ["CHCl₃ + alc. KOH, foul smell.", "Carbylamine test", "tests"], ["Acetylate before nitrating.", "Protecting –NH₂", "aniline"], ["NaNO₂/HCl at 273 K.", "Diazotisation", "dprep"], ["Orange azo dye from phenol.", "Coupling reaction", "coupling"]] }
    ],
    wrong: [
      { stmts: ["1° amines give the carbylamine test.", "2° amines give an alkali-insoluble Hinsberg product.", "3° amines give the carbylamine test.", "3° amines do not react with Hinsberg's reagent."], a: 2, c: "tests", why: "Only <b>1°</b> amines give the carbylamine test." },
      { stmts: ["Gabriel synthesis gives 1° amines.", "Hoffmann degradation removes one carbon.", "Gabriel synthesis can make aniline.", "Fe/HCl reduces nitrobenzene."], a: 2, c: "named", why: "Gabriel <b>cannot</b> make aryl amines." },
      { stmts: ["Diazotisation is done at 273–278 K.", "Coupling with phenol gives an orange dye.", "H₃PO₂ converts diazonium salt to phenol.", "KI gives iodobenzene."], a: 2, c: "replace", why: "H₃PO₂ gives <b>benzene</b>; water gives phenol." }
    ],
    para: [
      { target: "Hoffmann bromamide degradation", c: "named", sents: ["A research team studied amides.", "They warmed butanamide with bromine and sodium hydroxide and got propan-1-amine.", "The lab manager ordered new glassware.", "Results were shared on Monday."], a: 1, why: "One C fewer: <b>Hoffmann</b>." },
      { target: "Basic strength of amines", c: "basic", sents: ["Riya measured the pH of 0.1 M amine solutions.", "Dimethylamine gave the highest pH, aniline the lowest.", "She used a digital meter.", "She cleaned the electrode after each reading."], a: 1, why: "pH ranks <b>basic strength</b>." },
      { target: "Coupling reaction", c: "coupling", sents: ["A textile unit needed an orange colour.", "Its chemists mixed cold benzenediazonium chloride with alkaline phenol.", "The unit runs three shifts.", "Fabric is dried in the sun."], a: 1, why: "Azo dye: <b>coupling</b>." }
    ],
    explain: [
      { s: "Aniline is soluble in dilute HCl but not in water.", o: ["It forms anilinium chloride salt", "HCl is organic", "Aniline is acidic", "Water is non-polar"], a: 0, c: "basic", why: "The clue is <i>HCl</i>: aniline is a <b>base</b> and forms a soluble salt." },
      { s: "Bromination of aniline gives 2,4,6-tribromoaniline even without a catalyst.", o: ["–NH₂ strongly activates the ring", "Aniline is a base", "Br₂ is a nucleophile", "Ring is deactivated"], a: 0, c: "aniline", why: "<b>Strong activation</b> by –NH₂." },
      { s: "Ethanamine and N-methylmethanamine have the same formula but different Hinsberg results.", o: ["One is 1°, the other 2°", "Different masses", "One is aromatic", "One is an amide"], a: 0, c: "tests", why: "<b>1° vs 2°</b>." },
      { s: "Diazotisation must be done in an ice bath.", o: ["Diazonium salts decompose when warm", "Ice is a catalyst", "NaNO₂ melts", "Aniline freezes"], a: 0, c: "dprep", why: "<b>Unstable</b> diazonium salts." }
    ]
  }
});
