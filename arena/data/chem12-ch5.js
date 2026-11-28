/* Revision Arena · Class XII Chemistry · Unit 5 · Coordination Compounds (Parts 1-3 + exercises). Original cases; every number recomputed. */
NFArena.register({
  id: "chem12-ch5", cls: "XII", subject: "Chemistry", unit: "Unit", num: "5",
  title: "Coordination Compounds",
  tagline: "Werner's theory, ligands and coordination number, IUPAC names, isomerism, valence bond and crystal field theories, carbonyls and uses of complexes.",
  notesLink: "../#chem12-ch5",
  concepts: {
    werner: { n: "Werner's theory", s: "basics" },
    terms: { n: "Ligands, denticity, CN, oxidation state", s: "basics" },
    name: { n: "IUPAC nomenclature", s: "name" },
    struct: { n: "Structural isomerism", s: "iso" },
    geo: { n: "Geometrical isomerism", s: "iso" },
    opt: { n: "Optical isomerism", s: "iso" },
    vbt: { n: "Valence bond theory", s: "bond" },
    cft: { n: "Crystal field theory", s: "bond" },
    colour: { n: "Colour and spectrochemical series", s: "bond" },
    carbonyl: { n: "Metal carbonyls", s: "bond" },
    uses: { n: "Importance of complexes", s: "name" }
  },
  overview: {
    text: "A <b>coordination compound</b> has a central metal atom or ion bonded to <b>ligands</b> that donate lone pairs. <b>Werner</b> explained these with primary (ionisable) and secondary (coordination) valences. We name them by <b>IUPAC rules</b>, find their <b>isomers</b>, and explain their shape, magnetism and colour with <b>valence bond theory</b> and <b>crystal field theory</b>.",
    points: [
      "Coordination number = number of donor atoms bonded to the metal.",
      "Name ligands alphabetically, then the metal with its oxidation state in Roman numerals; anionic complexes end in <b>-ate</b>.",
      "Strong-field ligands (CN⁻, CO, en, NH₃) give <b>low-spin</b> complexes; weak-field (I⁻, Cl⁻, F⁻) give high-spin.",
      "Δ<sub>t</sub> = (4/9)Δ<sub>o</sub>, so tetrahedral complexes are almost always high spin."
    ],
    map: {
      center: "Coordination Compounds",
      branches: [
        { t: "Basics", c: ["Werner's theory", "Ligands and denticity", "CN and oxidation state"] },
        { t: "Naming", c: ["Order of ligands", "-ate for anions", "Uses of complexes"] },
        { t: "Isomerism", c: ["Ionisation, linkage", "cis / trans, fac / mer", "Optical"] },
        { t: "Bonding", c: ["VBT hybridisation", "CFT, Δo and spin", "Colour", "Carbonyls"] }
      ]
    }
  },
  sections: [
    {
      id: "basics", title: "Werner's theory and key terms", sub: "Metal, ligands and the coordination sphere", icon: "🧩", color: "#EC4899",
      quick: [
        "<b>Werner</b>: a metal shows a <b>primary valence</b> (ionisable, = oxidation state, satisfied by anions) and a <b>secondary valence</b> (non-ionisable, = coordination number, satisfied by ligands, with a fixed shape).",
        "Test with AgNO₃: CoCl₃·6NH₃ gives 3 AgCl → [Co(NH₃)₆]Cl₃; CoCl₃·5NH₃ gives 2 → [Co(NH₃)₅Cl]Cl₂; CoCl₃·4NH₃ gives 1 → [Co(NH₃)₄Cl₂]Cl.",
        "<b>Ligand</b>: species donating a lone pair. Unidentate (Cl⁻, NH₃), didentate (en, C₂O₄²⁻), hexadentate (<b>EDTA⁴⁻</b>).",
        "<b>Chelate</b>: a polydentate ligand forming a ring with the metal; chelates are extra stable.",
        "<b>Ambidentate</b> ligands bind through either of two atoms: NO₂⁻ (N) / ONO⁻ (O); SCN⁻ (S) / NCS⁻ (N).",
        "<b>Coordination number</b> = number of donor atoms attached; e.g. [Fe(C₂O₄)₃]³⁻ has CN 6 (3 × 2)."
      ],
      cards: [
        { t: "Worked: oxidation state and CN", tag: "numerical", b: "<p>K₃[Fe(C₂O₄)₃]: 3(+1) + x + 3(−2) = 0 ⇒ <b>Fe = +3</b>; CN = 3 × 2 = <b>6</b>.</p><p>[Co(en)₂Cl₂]⁺: x + 0 + 2(−1) = +1 ⇒ <b>Co = +3</b>; CN = 2 × 2 + 2 = <b>6</b>.</p>" },
        { t: "Double salt vs complex", tag: "def", b: "<p>A <b>double salt</b> (Mohr's salt, potash alum) breaks completely into simple ions in water. A <b>complex</b> keeps its complex ion: K₄[Fe(CN)₆] gives [Fe(CN)₆]⁴⁻, not Fe²⁺ and CN⁻.</p>" }
      ],
      exam: ["Count denticity when finding CN.", "Use the AgNO₃ test to decide which Cl⁻ are outside the bracket."]
    },
    {
      id: "name", title: "Naming and uses", sub: "IUPAC rules and complexes in life", icon: "🏷️", color: "#7B4DFF",
      quick: [
        "Cation named first, then anion. Inside the bracket: <b>ligands in alphabetical order</b>, then the metal.",
        "Anionic ligands end in -o (chlorido, cyanido, hydroxido, oxalato); neutral ones keep names except <b>aqua</b> (H₂O), <b>ammine</b> (NH₃), <b>carbonyl</b> (CO).",
        "Prefixes di-, tri-, tetra- (ignored in alphabetising); bis-, tris- for ligands like en.",
        "Oxidation state in Roman numerals after the metal. If the complex is an <b>anion</b>, the metal ends in <b>-ate</b> (ferrate, cuprate, argentate, zincate).",
        "Uses: <b>EDTA</b> estimates water hardness and treats lead poisoning; <b>cis-platin</b> is an anticancer drug; <b>Wilkinson's catalyst</b> [(Ph₃P)₃RhCl] hydrogenates alkenes; chlorophyll (Mg), haemoglobin (Fe), vitamin B₁₂ (Co).",
        "Metallurgy: gold and silver are extracted as [Au(CN)₂]⁻ and [Ag(CN)₂]⁻."
      ],
      table: { cap: "Practice names", head: ["Formula", "IUPAC name"], rows: [["[Co(NH₃)₅Cl]Cl₂", "Pentaamminechloridocobalt(III) chloride"], ["K₄[Fe(CN)₆]", "Potassium hexacyanidoferrate(II)"], ["[Pt(NH₃)₂Cl₂]", "Diamminedichloridoplatinum(II)"], ["[Ni(CO)₄]", "Tetracarbonylnickel(0)"], ["K₂[Zn(OH)₄]", "Potassium tetrahydroxidozincate(II)"]] },
      cards: [
        { t: "Memory hook", tag: "hook", b: "<p><b>“Cation first, ligands by ABC, metal last; minus means -ate.”</b></p>" }
      ],
      exam: ["Alphabetise by ligand name, not by prefix (ammine before chlorido).", "Always show the oxidation state in brackets."]
    },
    {
      id: "iso", title: "Isomerism", sub: "Same formula, different arrangement", icon: "🪞", color: "#12B5A6",
      quick: [
        "<b>Ionisation isomers</b>: exchange of a ligand with a counter ion: [Co(NH₃)₅SO₄]Br and [Co(NH₃)₅Br]SO₄.",
        "<b>Linkage isomers</b>: ambidentate ligand bonds through different atoms: [Co(NH₃)₅(NO₂)]Cl₂ and [Co(NH₃)₅(ONO)]Cl₂.",
        "<b>Coordination isomers</b>: ligands swap between cationic and anionic complexes: [Co(NH₃)₆][Cr(CN)₆] and [Cr(NH₃)₆][Co(CN)₆]. <b>Solvate (hydrate)</b> isomers: water inside or outside the sphere.",
        "<b>Geometrical</b>: square planar MA₂B₂ ([Pt(NH₃)₂Cl₂]) and octahedral MA₄B₂ show <b>cis/trans</b>; MA₃B₃ shows <b>fac/mer</b>. Tetrahedral MA₂B₂ shows none.",
        "<b>Optical</b>: non-superimposable mirror images (d and l). Common in [M(AA)₃] such as [Co(en)₃]³⁺ and in <b>cis</b>-[M(AA)₂B₂] like cis-[PtCl₂(en)₂]²⁺; the trans form is optically inactive."
      ],
      cards: [
        { t: "Worked: counting isomers", tag: "numerical", b: "<p>[Co(en)₂Cl₂]⁺: two geometrical isomers (cis, trans). The cis form is chiral, giving d and l. Total = <b>3 stereoisomers</b>.</p>" },
        { t: "Why is trans-[PtCl₂(en)₂]²⁺ optically inactive?", tag: "why", b: "<p>It has a plane of symmetry passing through the two en rings and Pt, so its mirror image is superimposable.</p>" }
      ],
      exam: ["Draw cis and trans clearly (90° vs 180°).", "For optical isomers, show the mirror plane."]
    },
    {
      id: "bond", title: "Bonding: VBT, CFT and carbonyls", sub: "Shape, magnetism and colour", icon: "🧠", color: "#FF8A1F",
      quick: [
        "<b>VBT</b>: the metal uses hybrid orbitals to accept lone pairs. [Co(NH₃)₆]³⁺: d²sp³, <b>inner orbital</b>, octahedral, diamagnetic. [CoF₆]³⁻: sp³d², <b>outer orbital</b>, paramagnetic (4 unpaired).",
        "[Ni(CN)₄]²⁻: dsp², square planar, diamagnetic. [NiCl₄]²⁻: sp³, tetrahedral, paramagnetic (2 unpaired).",
        "<b>CFT</b>: ligands split d orbitals; octahedral: t₂g (lower) and e<sub>g</sub> (higher), gap Δ<sub>o</sub>. If Δ<sub>o</sub> &lt; P (pairing energy): high spin; if Δ<sub>o</sub> &gt; P: low spin.",
        "<b>Spectrochemical series</b>: I⁻ &lt; Br⁻ &lt; SCN⁻ &lt; Cl⁻ &lt; S²⁻ &lt; F⁻ &lt; OH⁻ &lt; C₂O₄²⁻ &lt; H₂O &lt; NCS⁻ &lt; edta⁴⁻ &lt; NH₃ &lt; en &lt; CN⁻ &lt; CO.",
        "Colour: d–d transition across Δ; [Ti(H₂O)₆]³⁺ absorbs green-yellow (~498 nm) and looks <b>violet</b>. Without ligands (anhydrous CuSO₄) there is no splitting, so it is white.",
        "<b>Metal carbonyls</b>: synergic bonding: CO donates a σ lone pair to the metal, and the metal donates back into CO's empty π* orbital (π back-bonding), strengthening the M–C bond."
      ],
      cards: [
        { t: "Worked: CFSE", tag: "numerical", b: "<p>d⁴ octahedral: high spin t₂g³e<sub>g</sub>¹ ⇒ CFSE = 3(−0.4) + 1(+0.6) = <b>−0.6Δ<sub>o</sub></b>. Low spin t₂g⁴ ⇒ 4(−0.4) = <b>−1.6Δ<sub>o</sub> + P</b>.</p>" },
        { t: "Worked: magnetic moments", tag: "numerical", b: "<p>[Fe(CN)₆]³⁻ (d⁵, strong field, low spin): 1 unpaired ⇒ <b>1.73 BM</b>. [Fe(H₂O)₆]³⁺ (d⁵, weak field, high spin): 5 unpaired ⇒ <b>5.92 BM</b>.</p>" },
        { t: "Why are tetrahedral complexes high spin?", tag: "why", b: "<p>Δ<sub>t</sub> ≈ (4/9)Δ<sub>o</sub> is small, so it is usually less than the pairing energy; electrons occupy higher orbitals instead of pairing.</p>" }
      ],
      exam: ["For VBT, show the box diagram, hybridisation, shape and magnetism.", "For CFT, write the t₂g/e<sub>g</sub> filling and state high or low spin."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "werner", q: "Primary valence?", a: "Ionisable valence = oxidation state, satisfied by anions." },
    { k: "Definition", c: "werner", q: "Secondary valence?", a: "Non-ionisable valence = coordination number, satisfied by ligands." },
    { k: "Definition", c: "terms", q: "Ambidentate ligand?", a: "A ligand that can bind through two different atoms (NO₂⁻/ONO⁻, SCN⁻/NCS⁻)." },
    { k: "Example", c: "terms", q: "A hexadentate ligand?", a: "EDTA⁴⁻." },
    { k: "Definition", c: "terms", q: "Chelate?", a: "Ring formed when a polydentate ligand binds a metal through two or more atoms." },
    { k: "Rule", c: "name", q: "Name of NH₃ as a ligand?", a: "Ammine." },
    { k: "Name", c: "name", q: "K₄[Fe(CN)₆]?", a: "Potassium hexacyanidoferrate(II)." },
    { k: "Example", c: "struct", q: "A pair of ionisation isomers?", a: "[Co(NH₃)₅SO₄]Br and [Co(NH₃)₅Br]SO₄." },
    { k: "Fact", c: "geo", q: "Does tetrahedral MA₂B₂ show geometrical isomerism?", a: "No." },
    { k: "Fact", c: "geo", q: "Isomers of octahedral MA₃B₃?", a: "fac and mer." },
    { k: "Example", c: "opt", q: "An optically active complex?", a: "[Co(en)₃]³⁺ (or cis-[PtCl₂(en)₂]²⁺)." },
    { k: "Fact", c: "vbt", q: "Hybridisation of [Ni(CN)₄]²⁻?", a: "dsp², square planar, diamagnetic." },
    { k: "Fact", c: "vbt", q: "Hybridisation of [CoF₆]³⁻?", a: "sp³d² (outer orbital), paramagnetic." },
    { k: "Definition", c: "cft", q: "Crystal field splitting energy Δ<sub>o</sub>?", a: "Energy gap between t₂g and e<sub>g</sub> in an octahedral field." },
    { k: "Rule", c: "cft", q: "When is a complex low spin?", a: "When Δ<sub>o</sub> > pairing energy P (strong-field ligand)." },
    { k: "Fact", c: "colour", q: "Strongest-field ligand in the series?", a: "CO." },
    { k: "Definition", c: "carbonyl", q: "Synergic bonding in carbonyls?", a: "σ donation from CO to metal plus π back-donation from metal to CO's π*." },
    { k: "Use", c: "uses", q: "Use of cis-platin?", a: "Anticancer drug." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Three cobalt bottles",
      text: "<p>A lab has three bottles labelled CoCl₃·6NH₃, CoCl₃·5NH₃ and CoCl₃·4NH₃. <b>Zoya</b> adds excess AgNO₃ to 1 mol of each and gets 3, 2 and 1 mol of white AgCl respectively.</p>",
      qs: [
        { q: "Write the formulas of the three complexes.", m: 2, type: "Deduce", c: "werner", hint: "Precipitated Cl⁻ is outside.", points: [{ p: "[Co(NH₃)₆]Cl₃", m: 1, k: ["[co(nh₃)₆]cl₃", "[co(nh3)6]cl3"] }, { p: "[Co(NH₃)₅Cl]Cl₂ and [Co(NH₃)₄Cl₂]Cl", m: 1, k: ["cl₂", "cl2", "[co(nh₃)₄cl₂]", "[co(nh3)4cl2]"] }], structure: ["One formula per bottle."], model: "<p>3 AgCl: <b>[Co(NH₃)₆]Cl₃</b>; 2 AgCl: <b>[Co(NH₃)₅Cl]Cl₂</b>; 1 AgCl: <b>[Co(NH₃)₄Cl₂]Cl</b>.</p>" },
        { q: "Which postulate of Werner's theory does this support?", m: 1, type: "State", c: "werner", hint: "Ionisable vs non-ionisable.", points: [{ p: "Primary valence (ionisable) vs secondary valence (non-ionisable, inside the sphere)", m: 1, k: ["primary", "secondary"] }], structure: ["One line."], model: "<p>Only Cl⁻ satisfying the <b>primary (ionisable) valence</b> are precipitated; Cl⁻ in the <b>secondary valence</b> (inside the coordination sphere) are not.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "Naming the reagent bottles",
      text: "<p><b>Arjun</b> is labelling the stockroom: K₃[Fe(C₂O₄)₃], [Co(NH₃)₅Cl]Cl₂ and [Ni(CO)₄].</p>",
      qs: [
        { q: "Give the oxidation state and coordination number of Fe in K₃[Fe(C₂O₄)₃].", m: 1, type: "Numerical", c: "terms", hint: "Oxalate is didentate, −2.", points: [{ p: "+3 and 6", m: 1, k: ["+3", "6"] }], structure: ["Both values."], model: "<p>3 + x − 6 = 0 ⇒ <b>Fe = +3</b>; three didentate oxalates ⇒ <b>CN = 6</b>.</p>" },
        { q: "Write the IUPAC names of all three.", m: 3, type: "Name", c: "name", hint: "-ate for anions.", points: [{ p: "Potassium trioxalatoferrate(III)", m: 1, k: ["trioxalatoferrate"] }, { p: "Pentaamminechloridocobalt(III) chloride", m: 1, k: ["pentaamminechloridocobalt"] }, { p: "Tetracarbonylnickel(0)", m: 1, k: ["tetracarbonylnickel"] }], structure: ["One name per formula."], model: "<p>K₃[Fe(C₂O₄)₃]: <b>potassium trioxalatoferrate(III)</b>.</p><p>[Co(NH₃)₅Cl]Cl₂: <b>pentaamminechloridocobalt(III) chloride</b>.</p><p>[Ni(CO)₄]: <b>tetracarbonylnickel(0)</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "The cancer drug and its twin",
      text: "<p>A hospital pharmacist explains that the anticancer drug is the <b>cis</b> form of [Pt(NH₃)₂Cl₂]; the trans form does not work. A research student also studies [Co(en)₂Cl₂]⁺.</p>",
      qs: [
        { q: "What type of isomerism do cis and trans [Pt(NH₃)₂Cl₂] show? Describe the difference.", m: 2, type: "Identify + describe", c: "geo", hint: "Square planar.", points: [{ p: "Geometrical (cis–trans) isomerism", m: 1, k: ["geometrical", "cis"] }, { p: "cis: like ligands at 90°; trans: at 180°", m: 1, k: ["90", "180", "adjacent", "opposite"] }], structure: ["Type, then arrangement."], model: "<p><b>Geometrical (cis–trans) isomerism.</b> In the square planar cis isomer the two Cl (and two NH₃) are <b>adjacent (90°)</b>; in trans they are <b>opposite (180°)</b>.</p>" },
        { q: "How many stereoisomers does [Co(en)₂Cl₂]⁺ have? Which one is optically active?", m: 2, type: "Count + identify", c: "opt", hint: "cis is chiral.", points: [{ p: "3 stereoisomers (trans + d-cis + l-cis)", m: 1, k: ["3", "three"] }, { p: "The cis form is optically active", m: 1, k: ["cis"] }], structure: ["Count, then which."], model: "<p>Two geometrical isomers, cis and trans. The <b>cis</b> isomer has no plane of symmetry and exists as d and l forms; trans is inactive. Total <b>3 stereoisomers</b>.</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "Two nickel complexes",
      text: "<p><b>Ishaan</b> prepares [Ni(CN)₄]²⁻ (yellow, not attracted by a magnet) and [NiCl₄]²⁻ (attracted by a magnet). Ni²⁺ is 3d⁸.</p>",
      qs: [
        { q: "Using VBT, give the hybridisation and shape of each.", m: 2, type: "Explain", c: "vbt", hint: "CN⁻ pairs electrons.", points: [{ p: "[Ni(CN)₄]²⁻: dsp², square planar", m: 1, k: ["dsp²", "dsp2", "square planar"] }, { p: "[NiCl₄]²⁻: sp³, tetrahedral", m: 1, k: ["sp³", "sp3", "tetrahedral"] }], structure: ["Each complex."], model: "<p>With strong-field CN⁻, the 3d⁸ electrons pair up, freeing one 3d orbital: <b>dsp², square planar</b>.</p><p>With weak-field Cl⁻, no pairing occurs: <b>sp³, tetrahedral</b>.</p>" },
        { q: "Explain the magnetic behaviour of each.", m: 2, type: "Explain", c: "vbt", hint: "Unpaired electrons.", points: [{ p: "[Ni(CN)₄]²⁻: all electrons paired: diamagnetic", m: 1, k: ["diamagnetic", "paired"] }, { p: "[NiCl₄]²⁻: 2 unpaired electrons: paramagnetic (2.83 BM)", m: 1, k: ["2", "paramagnetic", "2.83"] }], structure: ["Each complex."], model: "<p>[Ni(CN)₄]²⁻ has all eight d electrons paired: <b>diamagnetic</b>. [NiCl₄]²⁻ keeps <b>2 unpaired electrons</b>: paramagnetic, μ = √8 = 2.83 BM.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Colour, spin and a pop-out carbonyl",
      text: "<p>[Fe(H₂O)₆]³⁺ is pale violet and strongly paramagnetic, but [Fe(CN)₆]³⁻ is red and only weakly paramagnetic. A nickel refinery purifies Ni as [Ni(CO)₄], a volatile carbonyl. Fe³⁺ is 3d⁵.</p>",
      qs: [
        { q: "Using CFT, show the d-electron arrangements of the two iron complexes and calculate their spin-only magnetic moments.", m: 3, type: "Explain + numerical", c: "cft", hint: "H₂O weak, CN⁻ strong.", points: [{ p: "[Fe(H₂O)₆]³⁺: weak field, high spin t₂g³e<sub>g</sub>², 5 unpaired", m: 1, k: ["high spin", "t₂g³", "t2g3", "5"] }, { p: "[Fe(CN)₆]³⁻: strong field, low spin t₂g⁵, 1 unpaired", m: 1, k: ["low spin", "t₂g⁵", "t2g5", "1"] }, { p: "μ = 5.92 BM and 1.73 BM", m: 1, k: ["5.92", "1.73"] }], structure: ["Each complex, then μ."], model: "<p>H₂O is a weak-field ligand (Δ<sub>o</sub> &lt; P): <b>t₂g³e<sub>g</sub>²</b>, high spin, 5 unpaired, μ = √35 = <b>5.92 BM</b>.</p><p>CN⁻ is strong-field (Δ<sub>o</sub> &gt; P): <b>t₂g⁵</b>, low spin, 1 unpaired, μ = √3 = <b>1.73 BM</b>.</p>" },
        { q: "Describe the bonding in [Ni(CO)₄] and why the M–C bond is strong.", m: 2, type: "Explain", c: "carbonyl", hint: "Synergic.", points: [{ p: "σ bond: CO lone pair donated to Ni", m: 1, k: ["σ", "sigma", "donat"] }, { p: "π back-bonding: Ni d electrons into CO π*; synergic strengthening", m: 1, k: ["back", "π*", "synergic"] }], structure: ["σ, then π."], model: "<p>CO donates its carbon lone pair into an empty metal orbital (<b>σ bond</b>). The filled metal d orbitals donate electron density back into CO's empty <b>π* orbital (π back-bonding)</b>. The two effects reinforce each other (<b>synergic bonding</b>), making the M–C bond strong.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "terms", q: "EDTA⁴⁻ is a:", o: ["Hexadentate ligand", "Didentate ligand", "Unidentate ligand", "Ambidentate ligand"], a: 0, hint: "Six donor atoms.", why: "<b>Hexadentate</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "name", q: "The ligand name of NH₃ is:", o: ["Ammine", "Amine", "Amido", "Ammonia"], a: 0, hint: "Double m.", why: "<b>Ammine</b>." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "terms", q: "The coordination number of Co in [Co(en)₂Cl₂]⁺ is:", o: ["6", "4", "2", "3"], a: 0, hint: "en is didentate.", why: "2 × 2 + 2 = <b>6</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "struct", q: "[Co(NH₃)₅(NO₂)]Cl₂ and [Co(NH₃)₅(ONO)]Cl₂ are:", o: ["Linkage isomers", "Ionisation isomers", "Coordination isomers", "Optical isomers"], a: 0, hint: "Ambidentate.", why: "<b>Linkage isomers</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "colour", q: "Which ligand produces the largest crystal field splitting?", o: ["CO", "H₂O", "Cl⁻", "NH₃"], a: 0, hint: "Top of the series.", why: "<b>CO</b>." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "vbt", q: "The hybridisation of [Co(NH₃)₆]³⁺ is:", o: ["d²sp³", "sp³d²", "dsp²", "sp³"], a: 0, hint: "Inner orbital.", why: "NH₃ pairs the 3d⁶ electrons: <b>d²sp³</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "geo", q: "Which shows geometrical isomerism?", o: ["[Pt(NH₃)₂Cl₂] (square planar)", "[Zn(NH₃)₂Cl₂] (tetrahedral)", "[Co(NH₃)₆]³⁺", "[Ni(CO)₄]"], a: 0, hint: "Square planar MA₂B₂.", why: "<b>Square planar MA₂B₂</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "cft", q: "For a d⁴ ion in a weak octahedral field, the CFSE is:", o: ["−0.6Δo", "−1.6Δo", "−0.4Δo", "0"], a: 0, hint: "t₂g³e<sub>g</sub>¹.", why: "3(−0.4) + 0.6 = <b>−0.6Δo</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "cft", q: "Tetrahedral complexes are generally high spin.", r: "Δt is much smaller than Δo (about 4/9 of it).", a: 0, hint: "Small splitting.", why: "Both true, and R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "colour", q: "Anhydrous CuSO₄ is white but CuSO₄·5H₂O is blue.", r: "Water ligands split the d orbitals so a d–d transition is possible.", a: 0, hint: "No ligand, no splitting.", why: "Both true, and R explains A." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "opt", q: "trans-[CoCl₂(en)₂]⁺ is optically active.", r: "It has a plane of symmetry.", a: 3, hint: "Symmetry ⇒ inactive.", why: "A is false; R is true." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "terms", q: "SCN⁻ is an ambidentate ligand.", a: true, hint: "S or N.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "uses", q: "EDTA is used to treat lead poisoning.", a: true, hint: "Chelation.", why: "True." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "geo", q: "Tetrahedral complexes of the type MA₂B₂ show cis–trans isomerism.", a: false, hint: "All positions adjacent.", why: "False." },
    { id: "q15", t: "match", d: "E", m: 4, c: "uses", q: "Match the complex with its use or role.", pairs: [["cis-Platin", "Anticancer drug"], ["Wilkinson's catalyst", "Hydrogenation of alkenes"], ["[Ag(CN)₂]⁻", "Extraction of silver"], ["EDTA", "Estimating hardness of water"]], hint: "One each.", why: "Each complex has one use." },
    { id: "q16", t: "match", d: "M", m: 4, c: "vbt", q: "Match the complex with its hybridisation.", pairs: [["[Ni(CN)₄]²⁻", "dsp²"], ["[NiCl₄]²⁻", "sp³"], ["[CoF₆]³⁻", "sp³d²"], ["[Co(NH₃)₆]³⁺", "d²sp³"]], hint: "Strong vs weak field.", why: "Each follows from VBT." },
    { id: "q17", t: "match", d: "M", m: 4, c: "struct", q: "Match the pair with the type of isomerism.", pairs: [["[Co(NH₃)₅SO₄]Br / [Co(NH₃)₅Br]SO₄", "Ionisation"], ["[Co(NH₃)₆][Cr(CN)₆] / [Cr(NH₃)₆][Co(CN)₆]", "Coordination"], ["[Cr(H₂O)₆]Cl₃ / [Cr(H₂O)₅Cl]Cl₂·H₂O", "Hydrate (solvate)"], ["M–NO₂ / M–ONO", "Linkage"]], hint: "What is swapped?", why: "Each pair shows one type." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "terms", q: "A ring formed by a polydentate ligand with a metal is called a ______.", acc: ["chelate"], hint: "c…", why: "<b>Chelate</b>." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "name", q: "The IUPAC name of K₄[Fe(CN)₆] is potassium hexacyanido______(II).", acc: ["ferrate"], hint: "Anionic complex.", why: "<b>ferrate</b>." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "cft", q: "In an octahedral field, the lower set of d orbitals is called ______.", acc: ["t2g", "t₂g"], hint: "Three orbitals.", why: "<b>t₂g</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "cft", q: "The spin-only μ of [Fe(CN)₆]³⁻ is ______ BM.", acc: ["1.73"], hint: "Low spin d⁵.", why: "1 unpaired: <b>1.73 BM</b>." },
    { id: "q22", t: "short", d: "E", m: 1, c: "uses", q: "Which metal is at the centre of chlorophyll?", acc: ["magnesium", "mg"], hint: "Green plants.", why: "<b>Magnesium</b>." },
    { id: "q23", t: "short", d: "M", m: 1, c: "opt", q: "How many stereoisomers does [Co(en)₂Cl₂]⁺ have?", acc: ["3", "three"], hint: "cis (d, l) + trans.", why: "<b>3</b>." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "werner", q: "State three postulates of Werner's theory.", hint: "Two valences, shape.", why: "", points: [{ p: "Metal shows primary and secondary valences", m: 1, k: ["primary", "secondary"] }, { p: "Primary = ionisable, satisfied by anions; secondary = non-ionisable, satisfied by ligands (= CN)", m: 1, k: ["ionisable", "ligand"] }, { p: "Secondary valences point in fixed directions, giving definite shapes", m: 1, k: ["direction", "shape", "geometry"] }], model: "<p>(i) A metal shows two valences: <b>primary</b> and <b>secondary</b>.</p><p>(ii) Primary valences are <b>ionisable</b> and satisfied by negative ions; secondary valences are <b>non-ionisable</b>, satisfied by ligands, and equal the coordination number.</p><p>(iii) Secondary valences are directed in space, giving complexes <b>definite shapes</b> (octahedral, tetrahedral, square planar).</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "cft", q: "Draw the d-orbital splitting in an octahedral field and explain why [Co(NH₃)₆]³⁺ is diamagnetic but [CoF₆]³⁻ is paramagnetic (Co³⁺ = 3d⁶).", hint: "Strong vs weak field.", why: "", points: [{ p: "Splitting into t₂g (lower, −0.4Δo) and e<sub>g</sub> (higher, +0.6Δo)", m: 1, k: ["t₂g", "t2g", "eg"] }, { p: "NH₃ strong field: t₂g⁶, all paired: diamagnetic", m: 1, k: ["t₂g⁶", "t2g6", "diamagnetic"] }, { p: "F⁻ weak field: t₂g⁴e<sub>g</sub>², 4 unpaired: paramagnetic", m: 1, k: ["4", "t₂g⁴", "t2g4", "paramagnetic"] }], model: "<p>In an octahedral field the d orbitals split into lower <b>t₂g</b> (three) and higher <b>e<sub>g</sub></b> (two), separated by Δ<sub>o</sub>.</p><p>NH₃ is a strong-field ligand (Δ<sub>o</sub> &gt; P): <b>t₂g⁶</b>, all paired: <b>diamagnetic</b>.</p><p>F⁻ is weak-field (Δ<sub>o</sub> &lt; P): <b>t₂g⁴e<sub>g</sub>²</b>, 4 unpaired: <b>paramagnetic</b>.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "uses", q: "Give four applications of coordination compounds.", hint: "Medicine, analysis, biology, metallurgy.", why: "", points: [{ p: "Medicine: cis-platin / EDTA for lead poisoning", m: 1, k: ["platin", "lead"] }, { p: "Analysis: EDTA titration for hardness / dimethylglyoxime for Ni", m: 1, k: ["hardness", "edta", "dimethylglyoxime"] }, { p: "Biology: chlorophyll, haemoglobin, vitamin B₁₂", m: 1, k: ["chlorophyll", "haemoglobin", "b12", "b₁₂"] }, { p: "Metallurgy / catalysis: [Au(CN)₂]⁻ extraction or Wilkinson's catalyst", m: 1, k: ["cyan", "gold", "silver", "wilkinson"] }], model: "<p>(i) <b>Medicine:</b> cis-platin against cancer; EDTA removes lead from the body.</p><p>(ii) <b>Analysis:</b> hardness of water is found by EDTA titration.</p><p>(iii) <b>Biology:</b> chlorophyll (Mg), haemoglobin (Fe), vitamin B₁₂ (Co).</p><p>(iv) <b>Metallurgy and catalysis:</b> gold and silver extracted as cyanido complexes; Wilkinson's catalyst for hydrogenation.</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "carbonyl", q: "What are metal carbonyls? Explain the synergic bonding in them with one example.", hint: "σ + π back.", why: "", points: [{ p: "Compounds of metals with CO ligands, e.g. [Ni(CO)₄]", m: 1, k: ["co", "ni(co)", "fe(co)"] }, { p: "σ bond: C lone pair of CO into metal orbital", m: 1, k: ["σ", "sigma"] }, { p: "π back-bond: metal d electrons into CO π*", m: 1, k: ["π*", "back"] }, { p: "Mutual reinforcement strengthens M–C bond (synergic)", m: 1, k: ["synergic", "strength", "reinforc"] }], model: "<p><b>Metal carbonyls</b> are compounds of metals with carbon monoxide as ligand, e.g. [Ni(CO)₄] (tetrahedral), [Fe(CO)₅].</p><p>(i) CO donates its carbon lone pair into an empty metal orbital: <b>σ bond</b>. (ii) Filled metal d orbitals donate electrons back into CO's empty <b>π*</b> orbital: π back-bond. (iii) Each effect strengthens the other: <b>synergic bonding</b>, so the M–C bond is strong.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "cft", q: "(a) Explain crystal field splitting in an octahedral complex. (b) What decides whether a complex is high spin or low spin? (c) Arrange H₂O, CN⁻, Cl⁻, NH₃, CO and F⁻ in increasing field strength. (d) Explain why [Ti(H₂O)₆]³⁺ is violet.", hint: "Δo vs P; d–d.", why: "", points: [{ p: "Ligands approach along axes; e<sub>g</sub> raised, t₂g lowered; gap Δo", m: 1, k: ["axes", "eg", "t₂g", "t2g"] }, { p: "Barycentre: t₂g −0.4Δo, e<sub>g</sub> +0.6Δo", m: 1, k: ["0.4", "0.6"] }, { p: "Δo > P: low spin; Δo < P: high spin", m: 1, k: ["pairing", "p"] }, { p: "Cl⁻ < F⁻ < H₂O < NH₃ < CN⁻ < CO", m: 1, k: ["cl⁻ < f⁻", "cl- < f-"] }, { p: "Ti³⁺ d¹: t₂g¹ → e<sub>g</sub>¹ absorbs green-yellow (~498 nm)", m: 1, k: ["498", "green", "d¹", "d1"] }, { p: "Complementary colour violet is seen", m: 1, k: ["violet", "complementary"] }], model: "<p>(a) In an octahedral complex, ligands approach along the axes. The <b>e<sub>g</sub></b> orbitals (d<sub>x²−y²</sub>, d<sub>z²</sub>) point at them and are raised (+0.6Δ<sub>o</sub>); the <b>t₂g</b> orbitals lie between the axes and are lowered (−0.4Δ<sub>o</sub>).</p><p>(b) If <b>Δ<sub>o</sub> &gt; P</b> (pairing energy), electrons pair in t₂g: low spin. If Δ<sub>o</sub> &lt; P: high spin.</p><p>(c) <b>Cl⁻ &lt; F⁻ &lt; H₂O &lt; NH₃ &lt; CN⁻ &lt; CO</b>.</p><p>(d) Ti³⁺ is d¹ (t₂g¹). It absorbs green-yellow light (~498 nm) to jump to e<sub>g</sub>; the complementary colour, <b>violet</b>, is seen.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "uses", q: "A child with lead poisoning is given a drug that grabs Pb²⁺ ions in a cage-like ring and lets them leave the body. The drug is:", o: ["EDTA (a chelating agent)", "cis-Platin", "Wilkinson's catalyst", "Ni(CO)₄"], a: 0, hint: "Hexadentate.", why: "<b>EDTA</b> chelates Pb²⁺." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "colour", q: "Adding ammonia to a pale-blue copper(II) solution gives a deep blue colour because:", o: ["NH₃ is a stronger-field ligand than H₂O, changing Δ", "Copper is reduced", "Water evaporates", "Cu²⁺ becomes d¹⁰"], a: 0, hint: "Ligand swap.", why: "[Cu(NH₃)₄]²⁺ has a <b>larger Δ</b>, shifting the absorbed light." },
    { id: "q31", t: "case", d: "E", m: 1, c: "uses", passage: "Gold dust is dissolved from ore by aerated sodium cyanide solution.", q: "The gold dissolves as:", o: ["[Au(CN)₂]⁻", "AuCl₃", "Au₂O₃", "[Au(NH₃)₂]⁺"], a: 0, hint: "Cyanido complex.", why: "<b>[Au(CN)₂]⁻</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "struct", passage: "Two samples, one violet and one red, both have the formula Co(NH₃)₅BrSO₄. The violet one gives a white precipitate with BaCl₂; the red one gives a cream precipitate with AgNO₃.", q: "They are:", o: ["Ionisation isomers", "Linkage isomers", "Optical isomers", "Geometrical isomers"], a: 0, hint: "Different ions released.", why: "<b>Ionisation isomers</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "vbt", passage: "A Ni(II) complex with four ligands is diamagnetic.", q: "Its shape is:", o: ["Square planar", "Tetrahedral", "Octahedral", "Linear"], a: 0, hint: "dsp².", why: "Diamagnetic 4-coordinate Ni(II): <b>square planar</b>." }
  ],
  find: {
    mcq: [
      { s: "Cl⁻ ions that precipitate with AgNO₃.", o: ["Primary valence", "Secondary valence", "Ligands", "Chelate"], a: 0, c: "werner", d: "E", why: "<b>Primary</b> (ionisable)." },
      { s: "Number of donor atoms around the metal.", o: ["Coordination number", "Oxidation state", "Denticity", "Primary valence"], a: 0, c: "terms", d: "E", why: "<b>Coordination number</b>." },
      { s: "Ethylenediamine binds through both N atoms.", o: ["Didentate ligand", "Ambidentate ligand", "Unidentate ligand", "Hexadentate ligand"], a: 0, c: "terms", d: "E", why: "<b>Didentate</b>." },
      { s: "NO₂⁻ can bind through N or O.", o: ["Ambidentate ligand", "Chelating ligand", "Bridging ligand", "Hexadentate"], a: 0, c: "terms", d: "M", why: "<b>Ambidentate</b>." },
      { s: "Metal name ends in -ate.", o: ["Anionic complex", "Cationic complex", "Neutral complex", "Double salt"], a: 0, c: "name", d: "E", why: "<b>Anionic complex</b>." },
      { s: "Ligands written in the name by ABC order.", o: ["IUPAC nomenclature rule", "Werner postulate", "CFT rule", "Isomer rule"], a: 0, c: "name", d: "M", why: "<b>IUPAC rule</b>." },
      { s: "Two compounds give different ions in solution though the formula is the same.", o: ["Ionisation isomers", "Linkage isomers", "Optical isomers", "fac–mer"], a: 0, c: "struct", d: "M", why: "<b>Ionisation isomers</b>." },
      { s: "Two Cl⁻ at 90° in a square planar Pt complex.", o: ["cis isomer", "trans isomer", "fac isomer", "Optical isomer"], a: 0, c: "geo", d: "E", why: "<b>cis</b>." },
      { s: "Three like ligands on one face of an octahedron.", o: ["fac isomer", "mer isomer", "cis isomer", "Linkage isomer"], a: 0, c: "geo", d: "C", why: "<b>fac</b>." },
      { s: "Mirror images that cannot be superimposed.", o: ["Optical isomers", "Geometrical isomers", "Ionisation isomers", "Hydrate isomers"], a: 0, c: "opt", d: "M", why: "<b>Optical isomers</b>." },
      { s: "Inner d orbitals used; d²sp³.", o: ["Inner orbital complex", "Outer orbital complex", "Tetrahedral complex", "Square planar complex"], a: 0, c: "vbt", d: "M", why: "<b>Inner orbital</b>." },
      { s: "Electrons pair in t₂g because Δo is large.", o: ["Low-spin complex", "High-spin complex", "Tetrahedral complex", "d¹⁰ complex"], a: 0, c: "cft", d: "M", why: "<b>Low spin</b>." },
      { s: "Electrons spread into e<sub>g</sub> before pairing.", o: ["High-spin complex", "Low-spin complex", "Square planar complex", "Diamagnetic complex"], a: 0, c: "cft", d: "C", why: "<b>High spin</b> (Δo < P)." },
      { s: "Ligands arranged by their power to split d orbitals.", o: ["Spectrochemical series", "Electrochemical series", "Activity series", "Periodic table"], a: 0, c: "colour", d: "E", why: "<b>Spectrochemical series</b>." },
      { s: "CO donates σ and accepts π back-donation.", o: ["Synergic bonding", "Ionic bonding", "Hydrogen bonding", "Metallic bonding"], a: 0, c: "carbonyl", d: "C", why: "<b>Synergic bonding</b>." },
      { s: "Haemoglobin carries oxygen using iron.", o: ["Biological importance of complexes", "Metal carbonyl", "Double salt", "Linkage isomer"], a: 0, c: "uses", d: "C", why: "Haemoglobin is a <b>complex</b>." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["3 AgCl from CoCl₃·6NH₃.", "Werner's theory", "werner"], ["EDTA binds through six atoms.", "Hexadentate ligand", "terms"], ["M–SCN vs M–NCS.", "Linkage isomerism", "struct"], ["[Co(en)₃]³⁺ has d and l forms.", "Optical isomerism", "opt"], ["t₂g⁶ with NH₃.", "Low spin (strong field)", "cft"], ["CO σ-donor and π-acceptor.", "Synergic bonding", "carbonyl"]] }
    ],
    wrong: [
      { stmts: ["EDTA is hexadentate.", "en is didentate.", "NH₃ is ambidentate.", "SCN⁻ is ambidentate."], a: 2, c: "terms", why: "NH₃ binds only through N: <b>unidentate</b>." },
      { stmts: ["Square planar MA₂B₂ shows cis–trans.", "Tetrahedral MA₂B₂ shows cis–trans.", "MA₃B₃ shows fac–mer.", "cis-[M(AA)₂B₂] is optically active."], a: 1, c: "geo", why: "Tetrahedral MA₂B₂ shows <b>no</b> geometrical isomerism." },
      { stmts: ["CN⁻ is a strong-field ligand.", "Tetrahedral complexes are usually low spin.", "Δt ≈ 4/9 Δo.", "Δo > P gives low spin."], a: 1, c: "cft", why: "Tetrahedral complexes are usually <b>high spin</b>." }
    ],
    para: [
      { target: "Chelate (EDTA)", c: "uses", sents: ["A water-testing lab checks tap water every day.", "The technician titrates the sample with EDTA, which wraps around Ca²⁺ and Mg²⁺ ions.", "The lab has six benches.", "Results are emailed to the city office."], a: 1, why: "EDTA forms <b>chelates</b>." },
      { target: "Optical isomerism", c: "opt", sents: ["A research student made [Co(en)₃]Cl₃.", "She stored the crystals in a dark bottle.", "Under polarised light, one sample turned the plane to the right and its mirror form to the left.", "She recorded the melting point."], a: 2, why: "Rotating plane-polarised light: <b>optical isomers</b>." },
      { target: "Crystal field splitting", c: "cft", sents: ["A paint company makes blue pigments.", "The chemist explains that ligands split the metal's d orbitals, so a d electron absorbs orange light.", "The pigment is packed in 1 kg tins.", "It sells well in summer."], a: 1, why: "Ligands split d orbitals: <b>CFT</b>." }
    ],
    explain: [
      { s: "[Ni(CN)₄]²⁻ is diamagnetic but [NiCl₄]²⁻ is paramagnetic.", o: ["CN⁻ is strong-field and pairs electrons (dsp²)", "Cl⁻ is strong-field", "Ni has no d electrons", "Both are octahedral"], a: 0, c: "vbt", why: "The clue is the ligand: <b>strong-field CN⁻ pairs electrons</b>." },
      { s: "[Co(en)₃]³⁺ is more stable than [Co(NH₃)₆]³⁺.", o: ["Chelate effect", "en is ambidentate", "NH₃ is anionic", "Co is reduced"], a: 0, c: "terms", why: "Rings make it more stable: <b>chelate effect</b>." },
      { s: "Anhydrous CuSO₄ is white; it turns blue in moist air.", o: ["Water ligands split d orbitals", "Copper is reduced", "Sulphate is coloured", "Air is blue"], a: 0, c: "colour", why: "No ligand field, no d–d transition; <b>water splits the d orbitals</b>." },
      { s: "The M–C bond in [Ni(CO)₄] is stronger than expected from σ donation alone.", o: ["π back-bonding (synergic)", "Ionic attraction", "Hydrogen bonding", "Chelation"], a: 0, c: "carbonyl", why: "<b>Back-bonding</b> adds a π component." }
    ]
  }
});
