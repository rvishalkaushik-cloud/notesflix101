/* Revision Arena · Class XII Chemistry · Unit 10 · Biomolecules (Parts 1-3 + exercises). Original cases. Hormones are not in the rationalised syllabus. */
NFArena.register({
  id: "chem12-ch10", cls: "XII", subject: "Chemistry", unit: "Unit", num: "10",
  title: "Biomolecules",
  tagline: "Carbohydrates and the structure of glucose, disaccharides and polysaccharides, amino acids and protein structure, denaturation, enzymes, vitamins and nucleic acids.",
  notesLink: "../#chem12-ch10",
  concepts: {
    carbclass: { n: "Classification of carbohydrates", s: "carb" },
    glucose: { n: "Structure of glucose", s: "carb" },
    cyclic: { n: "Cyclic structure and anomers", s: "carb" },
    disacc: { n: "Disaccharides", s: "carb" },
    poly: { n: "Polysaccharides", s: "carb" },
    amino: { n: "Amino acids and zwitterions", s: "prot" },
    pstruct: { n: "Structure of proteins", s: "prot" },
    denat: { n: "Denaturation and enzymes", s: "prot" },
    vit: { n: "Vitamins", s: "vitna" },
    na: { n: "Nucleic acids", s: "vitna" }
  },
  overview: {
    text: "<b>Biomolecules</b> are the molecules of life. <b>Carbohydrates</b> give energy and structure; <b>proteins</b> are polymers of α-amino acids that do most of the work in cells (enzymes, transport, structure); <b>vitamins</b> are needed in small amounts for health; <b>nucleic acids</b> (DNA, RNA) store and use genetic information.",
    points: [
      "Glucose: open chain shows six carbons in a line, –CHO and five –OH; it exists mainly as cyclic <b>α and β anomers</b>.",
      "Sucrose is <b>non-reducing</b>; maltose and lactose are <b>reducing</b>.",
      "Protein levels: <b>primary</b> (sequence), <b>secondary</b> (α-helix, β-sheet), <b>tertiary</b>, <b>quaternary</b>; denaturation destroys 2°/3° but not 1°.",
      "DNA: deoxyribose, A–T and G–C pairs, double helix; RNA: ribose, uracil instead of thymine."
    ],
    map: {
      center: "Biomolecules",
      branches: [
        { t: "Carbohydrates", c: ["Mono / di / poly", "Glucose structure", "Anomers", "Starch, cellulose, glycogen"] },
        { t: "Proteins", c: ["α-Amino acids", "Peptide bond", "1° to 4° structure", "Denaturation"] },
        { t: "Vitamins", c: ["Fat-soluble A, D, E, K", "Water-soluble B, C", "Deficiency diseases"] },
        { t: "Nucleic acids", c: ["Nucleoside, nucleotide", "DNA double helix", "RNA types"] }
      ]
    }
  },
  sections: [
    {
      id: "carb", title: "Carbohydrates", sub: "Sugars and their polymers", icon: "🍚", color: "#EC4899",
      quick: [
        "Carbohydrates are polyhydroxy aldehydes or ketones (or compounds that give them on hydrolysis). <b>Monosaccharides</b> (glucose, fructose) cannot be hydrolysed; <b>oligosaccharides</b> give 2–10 units; <b>polysaccharides</b> give many.",
        "<b>Reducing sugars</b> reduce Fehling's/Tollens' reagent (free aldehyde or ketone group): all monosaccharides, maltose, lactose. <b>Sucrose is non-reducing</b>.",
        "Glucose evidence: HI → n-hexane (<b>straight chain of 6 C</b>); NH₂OH → oxime and HCN → cyanohydrin (<b>C=O</b>); Br₂ water → gluconic acid (<b>–CHO</b>); acetic anhydride → pentaacetate (<b>five –OH</b>); HNO₃ → saccharic acid (one <b>1° alcohol</b>).",
        "Open chain fails to explain: no Schiff's test, no NaHSO₃ adduct, and the pentaacetate does not react with NH₂OH. So glucose exists as a <b>cyclic hemiacetal</b> (C-5 OH adds to C-1), as α and β <b>anomers</b> (differ at C-1, the anomeric carbon); six-membered <b>pyranose</b> ring (Haworth form).",
        "<b>Sucrose</b> = α-D-glucose (C1) + β-D-fructose (C2): non-reducing. Hydrolysis gives <b>invert sugar</b> (dextrorotatory → laevorotatory, because fructose −92.4° outweighs glucose +52.5°). <b>Maltose</b> = 2 α-D-glucose (C1–C4); <b>lactose</b> = β-D-galactose + β-D-glucose (C1–C4).",
        "<b>Starch</b> = amylose (15–20%, water-soluble, unbranched α-1,4) + amylopectin (80–85%, branched with α-1,6). <b>Cellulose</b>: β-D-glucose, β-1,4, straight chains (plant cell walls). <b>Glycogen</b>: highly branched, \"animal starch\" in liver and muscle."
      ],
      table: { cap: "Disaccharides", head: ["Sugar", "Units", "Link", "Reducing?"], rows: [["Sucrose", "α-glucose + β-fructose", "C1–C2", "No"], ["Maltose", "2 α-glucose", "C1–C4", "Yes"], ["Lactose", "β-galactose + β-glucose", "C1–C4", "Yes"]] },
      cards: [
        { t: "Why is sucrose non-reducing?", tag: "why", b: "<p>Its glycosidic bond joins C-1 of glucose to C-2 of fructose, so <b>both</b> reducing groups are used up. No free aldehyde or ketone remains.</p>" },
        { t: "Memory hook", tag: "hook", b: "<p><b>“Sucrose Shuts both doors”</b>: both anomeric carbons are tied up, so it does not reduce Tollens' or Fehling's.</p>" }
      ],
      exam: ["List glucose evidence as reaction → conclusion pairs.", "Name the linkage (C1–C4, C1–C2) for each disaccharide."]
    },
    {
      id: "prot", title: "Proteins and enzymes", sub: "Chains of amino acids", icon: "🥚", color: "#7B4DFF",
      quick: [
        "<b>α-Amino acids</b> have –NH₂ and –COOH on the same carbon. <b>Essential</b> amino acids must come from the diet (e.g. valine, leucine, lysine); non-essential ones are made in the body (e.g. glycine, alanine).",
        "In solution an amino acid exists as a <b>zwitterion</b> (H₃N⁺–CHR–COO⁻): it is amphoteric, with high melting points and water solubility like salts.",
        "Amino acids join by <b>peptide bonds</b> (–CO–NH–), losing water. Two amino acids → dipeptide; many → polypeptide; > about 100 → protein.",
        "<b>Primary</b> structure: the sequence of amino acids. <b>Secondary</b>: <b>α-helix</b> (right-handed, H-bonds between –NH and C=O four residues apart) or <b>β-pleated sheet</b> (chains side by side, H-bonded). <b>Tertiary</b>: overall folding (H-bonds, disulphide bridges, van der Waals and electrostatic forces). <b>Quaternary</b>: arrangement of subunits (e.g. haemoglobin).",
        "<b>Fibrous</b> proteins: long, insoluble (keratin in hair, myosin in muscle). <b>Globular</b> proteins: spherical, water-soluble (insulin, albumin).",
        "<b>Denaturation</b>: heat, pH change or salts disturb 2° and 3° structure; the protein loses its biological activity but the <b>primary structure stays</b> (boiled egg white, curdling of milk). <b>Enzymes</b> are protein biocatalysts, highly specific."
      ],
      cards: [
        { t: "Worked: a dipeptide", tag: "example", b: "<p>Glycine (H₂N–CH₂–COOH) + alanine (H₂N–CH(CH₃)–COOH) → H₂N–CH₂–<b>CO–NH</b>–CH(CH₃)–COOH (Gly–Ala) + H₂O.</p>" },
        { t: "Why does a boiled egg stay hard?", tag: "why", b: "<p>Heat breaks the H-bonds that hold the globular albumin in shape; chains unfold and tangle (denaturation). The process cannot be reversed by cooling.</p>" }
      ],
      exam: ["Define each level of protein structure in one line with an example.", "State clearly that denaturation leaves the primary structure intact."]
    },
    {
      id: "vitna", title: "Vitamins and nucleic acids", sub: "Small helpers and the molecules of heredity", icon: "🧬", color: "#12B5A6",
      quick: [
        "<b>Fat-soluble</b> vitamins A, D, E, K are stored in the liver and fat tissue. <b>Water-soluble</b> vitamins (B group, C) are excreted in urine, so they must be taken regularly (B₁₂ is an exception: it is stored).",
        "Deficiencies: <b>A</b> night blindness, xerophthalmia; <b>B₁</b> beriberi; <b>B₂</b> cheilosis; <b>B₆</b> convulsions; <b>B₁₂</b> pernicious anaemia; <b>C</b> scurvy (bleeding gums); <b>D</b> rickets, osteomalacia; <b>E</b> fragile red cells, muscle weakness; <b>K</b> slow blood clotting.",
        "<b>Nucleoside</b> = base + pentose sugar; <b>nucleotide</b> = nucleoside + phosphate. Nucleotides join by <b>phosphodiester</b> links (5′ to 3′).",
        "<b>DNA</b>: 2-deoxyribose; bases A, G, C, T; <b>double helix</b>; A pairs with T (2 H-bonds), G pairs with C (3 H-bonds).",
        "<b>RNA</b>: ribose; bases A, G, C, <b>U</b>; usually single-stranded. Types: <b>m-RNA</b> (message), <b>r-RNA</b> (ribosomes), <b>t-RNA</b> (transfer amino acids).",
        "Functions: DNA carries hereditary information and copies itself (replication); RNA directs <b>protein synthesis</b>."
      ],
      table: { cap: "DNA vs RNA", head: ["Feature", "DNA", "RNA"], rows: [["Sugar", "2-Deoxyribose", "Ribose"], ["Bases", "A, G, C, T", "A, G, C, U"], ["Strands", "Double helix", "Single"], ["Main job", "Heredity, replication", "Protein synthesis"]] },
      cards: [
        { t: "Worked: complementary strand", tag: "example", b: "<p>DNA strand 5′–ATGCCA–3′ pairs with <b>3′–TACGGT–5′</b>.</p>" },
        { t: "Why must vitamin C be eaten daily?", tag: "why", b: "<p>It is water-soluble: extra amounts leave the body in urine, so it is not stored.</p>" }
      ],
      exam: ["Write vitamin–disease pairs as a table.", "Give at least three differences between DNA and RNA."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "carbclass", q: "Reducing sugar?", a: "A sugar that reduces Fehling's or Tollens' reagent (has a free aldehyde/ketone group)." },
    { k: "Example", c: "carbclass", q: "A non-reducing disaccharide?", a: "Sucrose." },
    { k: "Evidence", c: "glucose", q: "Glucose + HI gives n-hexane. What does this show?", a: "Six carbons in a straight chain." },
    { k: "Evidence", c: "glucose", q: "Glucose + acetic anhydride gives a pentaacetate. What does this show?", a: "Five –OH groups." },
    { k: "Evidence", c: "glucose", q: "Glucose + bromine water gives gluconic acid. What does this show?", a: "An aldehyde (–CHO) group." },
    { k: "Definition", c: "cyclic", q: "Anomers?", a: "Cyclic forms differing only at C-1 (α and β glucose)." },
    { k: "Fact", c: "disacc", q: "Why is hydrolysed sucrose called invert sugar?", a: "Rotation changes from dextro to laevo (fructose's −92.4° beats glucose's +52.5°)." },
    { k: "Fact", c: "disacc", q: "Units of lactose?", a: "β-D-galactose and β-D-glucose (C1–C4)." },
    { k: "Fact", c: "poly", q: "Two parts of starch?", a: "Amylose (unbranched) and amylopectin (branched)." },
    { k: "Fact", c: "poly", q: "Linkage in cellulose?", a: "β-1,4 glycosidic linkage." },
    { k: "Definition", c: "amino", q: "Zwitterion?", a: "Dipolar ion H₃N⁺–CHR–COO⁻ of an amino acid." },
    { k: "Definition", c: "amino", q: "Essential amino acid?", a: "One the body cannot make; must come from food." },
    { k: "Definition", c: "pstruct", q: "Primary structure of a protein?", a: "The sequence of amino acids." },
    { k: "Fact", c: "pstruct", q: "Bonds that hold the α-helix?", a: "H-bonds between –NH and C=O of residues four apart." },
    { k: "Definition", c: "denat", q: "Denaturation?", a: "Loss of 2°/3° structure and biological activity by heat or pH; primary structure unchanged." },
    { k: "Disease", c: "vit", q: "Deficiency of vitamin D?", a: "Rickets (children), osteomalacia (adults)." },
    { k: "Fact", c: "na", q: "Base in RNA instead of thymine?", a: "Uracil." },
    { k: "Fact", c: "na", q: "Number of H-bonds in a G–C pair?", a: "Three." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Sugars in the canteen test",
      text: "<p>In a science club, <b>Tara</b> tests three sugar solutions with Fehling's solution: glucose and maltose give a red precipitate, but table sugar (sucrose) does not. After boiling the sucrose with a drop of acid, it also gives a red precipitate.</p>",
      qs: [
        { q: "Why does sucrose not give the test at first?", m: 2, type: "Explain", c: "disacc", hint: "Glycosidic link.", points: [{ p: "C-1 of glucose and C-2 of fructose are joined", m: 1, k: ["c1", "c-1", "c2", "c-2"] }, { p: "No free aldehyde/ketone, so non-reducing", m: 1, k: ["non-reducing", "no free"] }], structure: ["Link, then result."], model: "<p>In sucrose, the <b>C-1 of α-glucose is linked to C-2 of β-fructose</b>, so both reducing groups are used. With no free aldehyde or ketone group, sucrose is a <b>non-reducing sugar</b>.</p>" },
        { q: "Why does it respond after boiling with acid? What is the product mixture called?", m: 1, type: "Explain", c: "disacc", hint: "Hydrolysis.", points: [{ p: "Hydrolysed to glucose + fructose (reducing): invert sugar", m: 1, k: ["invert", "hydrolys"] }], structure: ["One line."], model: "<p>Acid <b>hydrolyses</b> sucrose to glucose and fructose, both reducing sugars. The mixture is called <b>invert sugar</b>.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "The vitamin chart",
      text: "<p>A school nurse makes a chart for students: a child in her clinic has bleeding gums, another has bowed legs, and a third cannot see well at dusk.</p>",
      qs: [
        { q: "Name the vitamin lacking in each case.", m: 3, type: "Identify", c: "vit", hint: "C, D, A.", points: [{ p: "Bleeding gums: vitamin C (scurvy)", m: 1, k: ["vitamin c", " c"] }, { p: "Bowed legs: vitamin D (rickets)", m: 1, k: ["vitamin d", " d"] }, { p: "Poor vision at dusk: vitamin A (night blindness)", m: 1, k: ["vitamin a", " a"] }], structure: ["One per child."], model: "<p>Bleeding gums: <b>vitamin C</b> (scurvy). Bowed legs: <b>vitamin D</b> (rickets). Poor vision at dusk: <b>vitamin A</b> (night blindness).</p>" },
        { q: "Which of these vitamins must be eaten daily, and why?", m: 1, type: "Explain", c: "vit", hint: "Water-soluble.", points: [{ p: "Vitamin C: water-soluble, excreted, not stored", m: 1, k: ["water", "excret", "not stored"] }], structure: ["One line."], model: "<p><b>Vitamin C</b>: it is <b>water-soluble</b>, so extra amounts are excreted in urine and it is not stored.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Why glucose is a ring",
      text: "<p><b>Ishaan</b> reads that glucose forms an oxime and a cyanohydrin, but does not give Schiff's test or form a bisulphite compound. Its pentaacetate does not react with hydroxylamine at all.</p>",
      qs: [
        { q: "What do the oxime and cyanohydrin reactions show? What do the failed tests suggest?", m: 2, type: "Interpret", c: "glucose", hint: "C=O present, but not free.", points: [{ p: "Oxime and cyanohydrin show a carbonyl group", m: 1, k: ["carbonyl", "c=o"] }, { p: "Failed tests: the –CHO is not free; glucose exists mostly in a cyclic form", m: 1, k: ["cyclic", "not free", "ring"] }], structure: ["Evidence, conclusion."], model: "<p>Forming an <b>oxime</b> and a <b>cyanohydrin</b> shows glucose has a <b>carbonyl group</b>.</p><p>No Schiff's test, no bisulphite adduct and an unreactive pentaacetate show that the –CHO is <b>not free</b>: glucose exists mainly as a <b>cyclic hemiacetal</b>.</p>" },
        { q: "Describe the cyclic structure and explain what α and β glucose are.", m: 2, type: "Describe", c: "cyclic", hint: "C-5 OH and C-1.", points: [{ p: "C-5 –OH adds to C-1 aldehyde, forming a six-membered (pyranose) ring", m: 1, k: ["c-5", "c5", "pyranose", "six"] }, { p: "α and β differ in the –OH position at C-1 (anomers)", m: 1, k: ["anomer", "c-1", "c1"] }], structure: ["Ring formation, anomers."], model: "<p>The –OH on <b>C-5</b> adds to the aldehyde at <b>C-1</b>, forming a six-membered <b>pyranose ring</b> (cyclic hemiacetal).</p><p>C-1 becomes a new chiral centre, so two forms exist, <b>α and β glucose</b>, differing only in the position of the –OH at C-1: they are <b>anomers</b>.</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "The boiled egg and the haircut",
      text: "<p><b>Tara</b>'s mother boils an egg: the clear white turns solid. At the salon, <b>Ishaan</b> learns that hair is made of a tough protein that does not dissolve in water, while the albumin in egg white does dissolve.</p>",
      qs: [
        { q: "What happens to the egg white protein on boiling? Which level of structure survives?", m: 2, type: "Explain", c: "denat", hint: "Denaturation.", points: [{ p: "Denaturation: heat breaks H-bonds, protein unfolds and coagulates", m: 1, k: ["denatur", "unfold", "h-bond"] }, { p: "Primary structure (sequence) remains", m: 1, k: ["primary"] }], structure: ["Change, what remains."], model: "<p>Heat breaks the H-bonds holding the protein's 2° and 3° structure; the chains <b>unfold and coagulate</b> (<b>denaturation</b>). The <b>primary structure</b>, the sequence of amino acids, is not changed.</p>" },
        { q: "Classify hair keratin and egg albumin as fibrous or globular and give one difference.", m: 2, type: "Classify", c: "pstruct", hint: "Shape and solubility.", points: [{ p: "Keratin fibrous; albumin globular", m: 1, k: ["fibrous", "globular"] }, { p: "Fibrous: long, insoluble; globular: spherical, water-soluble", m: 1, k: ["insoluble", "soluble", "spherical"] }], structure: ["Classify, differ."], model: "<p><b>Keratin</b> is a <b>fibrous</b> protein: long parallel chains, insoluble in water. <b>Albumin</b> is a <b>globular</b> protein: folded into a spherical shape, soluble in water.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "The forensic DNA strand",
      text: "<p>A forensic lab sequences a short piece of DNA: <b>5′–ATGCCGTA–3′</b>. A student asks why DNA uses thymine while the messenger molecule made from it uses uracil, and why G–C rich DNA is harder to separate on heating.</p>",
      qs: [
        { q: "Write the complementary DNA strand and the m-RNA that would be copied from the given strand.", m: 2, type: "Write", c: "na", hint: "A–T, G–C; U replaces T in RNA.", points: [{ p: "DNA: 3′–TACGGCAT–5′", m: 1, k: ["tacggcat"] }, { p: "m-RNA: 3′–UACGGCAU–5′", m: 1, k: ["uacggcau"] }], structure: ["DNA, then RNA."], model: "<p>Complementary DNA: <b>3′–TACGGCAT–5′</b>.</p><p>m-RNA copied from it (U in place of T): <b>3′–UACGGCAU–5′</b>.</p>" },
        { q: "Give three differences between DNA and RNA, and explain why G–C rich DNA needs more heat to separate.", m: 3, type: "Compare + explain", c: "na", hint: "Sugar, base, strands; H-bonds.", points: [{ p: "Sugar: deoxyribose vs ribose", m: 1, k: ["deoxyribose", "ribose"] }, { p: "Base T vs U; double vs single strand", m: 1, k: ["thymine", "uracil", "double", "single"] }, { p: "G–C pairs have 3 H-bonds (A–T only 2), so more energy is needed", m: 1, k: ["3", "three"] }], structure: ["Differences, then reason."], model: "<p>(i) <b>Sugar:</b> DNA has 2-deoxyribose; RNA has ribose. (ii) <b>Bases:</b> DNA has thymine; RNA has uracil. (iii) <b>Strands:</b> DNA is a double helix; RNA is usually single-stranded.</p><p>G–C pairs are held by <b>three hydrogen bonds</b>, A–T by two, so G–C rich DNA needs more heat to separate its strands.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "carbclass", q: "Which is a monosaccharide?", o: ["Fructose", "Sucrose", "Starch", "Maltose"], a: 0, hint: "Cannot be hydrolysed.", why: "<b>Fructose</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "vit", q: "Scurvy is caused by deficiency of vitamin:", o: ["C", "A", "D", "K"], a: 0, hint: "Bleeding gums.", why: "<b>C</b>." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "glucose", q: "Glucose + HI on prolonged heating gives n-hexane. This shows:", o: ["Six carbons in a straight chain", "Five –OH groups", "An aldehyde group", "A ring structure"], a: 0, hint: "Straight chain.", why: "<b>Straight chain of six carbons</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "poly", q: "Cellulose is a polymer of:", o: ["β-D-glucose", "α-D-glucose", "Fructose", "Galactose"], a: 0, hint: "β-1,4.", why: "<b>β-D-glucose</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "na", q: "Which base is found in RNA but not in DNA?", o: ["Uracil", "Thymine", "Adenine", "Guanine"], a: 0, hint: "U.", why: "<b>Uracil</b>." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "pstruct", q: "The α-helix is stabilised by:", o: ["H-bonds between –NH and C=O of residues four apart", "Disulphide bonds only", "Ionic bonds between chains", "Peptide bonds"], a: 0, hint: "Same chain.", why: "<b>Intrachain H-bonds</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "disacc", q: "Which is a reducing sugar?", o: ["Maltose", "Sucrose", "Starch", "Cellulose"], a: 0, hint: "Free anomeric C.", why: "<b>Maltose</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "denat", q: "On denaturation, which structure of a protein remains intact?", o: ["Primary", "Secondary", "Tertiary", "Quaternary"], a: 0, hint: "Covalent bonds stay.", why: "<b>Primary</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "amino", q: "Amino acids have high melting points.", r: "They exist as zwitterions with salt-like character.", a: 0, hint: "Ionic attraction.", why: "Both true, and R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "vit", q: "Vitamin C must be supplied regularly in the diet.", r: "Vitamin C is water-soluble and is excreted in urine.", a: 0, hint: "Not stored.", why: "Both true, and R explains A." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "disacc", q: "Sucrose is a reducing sugar.", r: "Sucrose is hydrolysed to glucose and fructose.", a: 3, hint: "Glycosidic link uses both.", why: "A is false; R is true." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "poly", q: "Glycogen is called animal starch.", a: true, hint: "Liver and muscle.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "na", q: "In DNA, adenine pairs with guanine.", a: false, hint: "A–T, G–C.", why: "False: A pairs with <b>T</b>." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "cyclic", q: "α- and β-D-glucose differ in configuration at C-1.", a: true, hint: "Anomers.", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "vit", q: "Match the vitamin with its deficiency disease.", pairs: [["Vitamin A", "Night blindness"], ["Vitamin B₁", "Beriberi"], ["Vitamin D", "Rickets"], ["Vitamin K", "Slow blood clotting"]], hint: "One each.", why: "Each vitamin has one disease." },
    { id: "q16", t: "match", d: "M", m: 4, c: "glucose", q: "Match the reaction of glucose with what it proves.", pairs: [["HI → n-hexane", "Straight chain of six C"], ["Acetic anhydride → pentaacetate", "Five –OH groups"], ["Bromine water → gluconic acid", "Aldehyde group"], ["HNO₃ → saccharic acid", "One primary alcohol group"]], hint: "Reaction → conclusion.", why: "Each reaction proves one feature." },
    { id: "q17", t: "match", d: "M", m: 4, c: "pstruct", q: "Match the protein level with its description.", pairs: [["Primary", "Sequence of amino acids"], ["Secondary", "α-Helix or β-sheet"], ["Tertiary", "Overall 3D folding of one chain"], ["Quaternary", "Arrangement of subunits"]], hint: "Levels 1–4.", why: "Each level has one description." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "amino", q: "The –CO–NH– bond joining amino acids is the ______ bond.", acc: ["peptide", "amide"], hint: "p…", why: "<b>Peptide</b> bond." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "disacc", q: "Hydrolysed sucrose is called ______ sugar.", acc: ["invert"], hint: "Rotation changes sign.", why: "<b>Invert</b> sugar." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "na", q: "A nucleoside plus a phosphate group is a ______.", acc: ["nucleotide"], hint: "n…", why: "<b>Nucleotide</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "poly", q: "The water-soluble, unbranched part of starch is ______.", acc: ["amylose"], hint: "15–20%.", why: "<b>Amylose</b>." },
    { id: "q22", t: "short", d: "E", m: 1, c: "denat", q: "What are protein catalysts in living cells called?", acc: ["enzymes", "enzyme"], hint: "Biocatalysts.", why: "<b>Enzymes</b>." },
    { id: "q23", t: "short", d: "M", m: 1, c: "na", q: "How many hydrogen bonds join an A–T pair?", acc: ["2", "two"], hint: "Fewer than G–C.", why: "<b>Two</b>." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "glucose", q: "Give three reactions of glucose that cannot be explained by its open-chain structure.", hint: "Schiff's, NaHSO₃, pentaacetate.", why: "", points: [{ p: "Does not give Schiff's test", m: 1, k: ["schiff"] }, { p: "Does not form a bisulphite (NaHSO₃) adduct", m: 1, k: ["bisulphite", "nahso", "bisulfite"] }, { p: "Pentaacetate does not react with NH₂OH (no free –CHO)", m: 1, k: ["pentaacetate", "hydroxylamine", "nh₂oh", "nh2oh"] }], model: "<p>(i) Glucose does not give <b>Schiff's test</b>.</p><p>(ii) It does not form a <b>hydrogensulphite (NaHSO₃) addition product</b>.</p><p>(iii) Its <b>pentaacetate does not react with hydroxylamine</b>, showing no free –CHO. These are explained by the <b>cyclic structure</b>.</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "poly", q: "Compare starch and cellulose on three points.", hint: "Glucose form, linkage, use.", why: "", points: [{ p: "Starch: α-D-glucose; cellulose: β-D-glucose", m: 1, k: ["α", "β", "alpha", "beta"] }, { p: "Starch: α-1,4 (+ α-1,6 branches); cellulose: β-1,4 straight", m: 1, k: ["1,4", "1,6", "branch"] }, { p: "Starch: food storage in plants; cellulose: cell walls (structural)", m: 1, k: ["storage", "cell wall"] }], model: "<p>(i) <b>Units:</b> starch of α-D-glucose; cellulose of β-D-glucose.</p><p>(ii) <b>Links:</b> starch α-1,4 with α-1,6 branches (amylopectin); cellulose β-1,4, straight chains.</p><p>(iii) <b>Role:</b> starch stores food in plants; cellulose builds cell walls.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "pstruct", q: "Explain the four levels of protein structure with one example of a bond or feature at each level.", hint: "Sequence, helix, fold, subunits.", why: "", points: [{ p: "Primary: sequence; peptide bonds", m: 1, k: ["sequence", "peptide"] }, { p: "Secondary: α-helix/β-sheet; H-bonds", m: 1, k: ["helix", "sheet"] }, { p: "Tertiary: folding; disulphide, H-bonds, van der Waals, ionic", m: 1, k: ["disulph", "fold"] }, { p: "Quaternary: subunits (e.g. haemoglobin)", m: 1, k: ["subunit", "haemoglobin"] }], model: "<p>(i) <b>Primary:</b> the sequence of amino acids joined by peptide bonds.</p><p>(ii) <b>Secondary:</b> α-helix or β-pleated sheet, held by H-bonds.</p><p>(iii) <b>Tertiary:</b> overall folding into fibrous or globular shape, held by H-bonds, disulphide bridges, van der Waals and electrostatic forces.</p><p>(iv) <b>Quaternary:</b> arrangement of two or more polypeptide subunits (haemoglobin has four).</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "na", q: "What are nucleotides? Give the structure of DNA (sugar, bases, pairing, shape) and the role of each type of RNA.", hint: "Base + sugar + phosphate.", why: "", points: [{ p: "Nucleotide = base + pentose sugar + phosphate", m: 1, k: ["phosphate"] }, { p: "DNA: deoxyribose; A, G, C, T; double helix", m: 1, k: ["deoxyribose", "double"] }, { p: "A–T (2 H-bonds), G–C (3 H-bonds)", m: 1, k: ["a–t", "a-t", "g–c", "g-c"] }, { p: "m-RNA message; t-RNA carries amino acids; r-RNA forms ribosomes", m: 1, k: ["m-rna", "t-rna", "r-rna"] }], model: "<p>A <b>nucleotide</b> is a nitrogenous base + pentose sugar + phosphate group.</p><p><b>DNA</b>: 2-deoxyribose; bases A, G, C, T; two strands coiled in a <b>double helix</b>; A pairs with T (2 H-bonds) and G with C (3 H-bonds).</p><p><b>RNA types:</b> m-RNA carries the genetic message; t-RNA brings amino acids; r-RNA forms the ribosomes where proteins are made.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "carbclass", q: "(a) Classify carbohydrates with one example each. (b) What are reducing and non-reducing sugars? Give one example each. (c) Explain the formation of invert sugar.", hint: "Mono/oligo/poly; free anomeric C; rotation.", why: "", points: [{ p: "Monosaccharides (glucose), oligosaccharides (sucrose), polysaccharides (starch)", m: 1, k: ["mono", "oligo", "poly"] }, { p: "Examples for each class", m: 1, k: ["glucose", "sucrose", "starch"] }, { p: "Reducing: reduce Fehling's/Tollens' (free C=O); e.g. glucose/maltose", m: 1, k: ["fehling", "tollens", "free"] }, { p: "Non-reducing: sucrose", m: 1, k: ["sucrose"] }, { p: "Sucrose hydrolysed → glucose (+52.5°) + fructose (−92.4°)", m: 1, k: ["52.5", "92.4", "hydrolys"] }, { p: "Rotation changes from dextro to laevo: invert sugar", m: 1, k: ["laevo", "invert"] }], model: "<p>(a) <b>Monosaccharides</b> cannot be hydrolysed (glucose); <b>oligosaccharides</b> give 2–10 monosaccharides (sucrose); <b>polysaccharides</b> give many (starch).</p><p>(b) <b>Reducing sugars</b> reduce Fehling's/Tollens' reagent because they have a free aldehyde or ketone group (glucose, maltose). <b>Non-reducing sugars</b> do not (sucrose).</p><p>(c) Sucrose (dextrorotatory, +66.5°) is hydrolysed to <b>glucose (+52.5°)</b> and <b>fructose (−92.4°)</b>. Fructose's larger laevorotation wins, so the mixture is <b>laevorotatory</b>: the sign of rotation is inverted, giving <b>invert sugar</b>.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "denat", q: "When lemon juice is added to warm milk, the milk curdles. The protein in milk has undergone:", o: ["Denaturation", "Hydrolysis to amino acids", "Polymerisation", "Fermentation"], a: 0, hint: "pH change.", why: "<b>Denaturation</b> by acid." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "poly", q: "Humans cannot digest grass, but cows can, mainly because:", o: ["Humans lack enzymes to break β-1,4 links in cellulose", "Grass has no glucose", "Cellulose is a protein", "Starch is toxic"], a: 0, hint: "β-links.", why: "Humans lack <b>cellulase</b> for β-1,4 links." },
    { id: "q31", t: "case", d: "E", m: 1, c: "vit", passage: "A child who rarely goes outside develops soft, bent leg bones.", q: "Lacking vitamin:", o: ["D", "C", "A", "B₁"], a: 0, hint: "Sunshine vitamin.", why: "<b>Vitamin D</b> (rickets)." },
    { id: "q32", t: "case", d: "M", m: 1, c: "amino", passage: "Glycine is soluble in water and melts at a high temperature, unlike most organic compounds of similar mass.", q: "This is because glycine exists as a:", o: ["Zwitterion", "Polymer", "Covalent gas", "Disaccharide"], a: 0, hint: "Dipolar ion.", why: "<b>Zwitterion</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "na", passage: "A DNA sample has 30% adenine.", q: "Its guanine content is:", o: ["20%", "30%", "40%", "70%"], a: 0, hint: "A = T; G = C.", why: "A + T = 60%, so G + C = 40% and G = <b>20%</b>." }
  ],
  find: {
    mcq: [
      { s: "Sugar that cannot be broken into simpler sugars.", o: ["Monosaccharide", "Disaccharide", "Polysaccharide", "Oligosaccharide"], a: 0, c: "carbclass", d: "E", why: "<b>Monosaccharide</b>." },
      { s: "A sugar gives a red precipitate with Fehling's solution.", o: ["Reducing sugar", "Non-reducing sugar", "Polysaccharide", "Protein"], a: 0, c: "carbclass", d: "E", why: "<b>Reducing sugar</b>." },
      { s: "Glucose forms a pentaacetate.", o: ["Five –OH groups", "One –CHO group", "Straight chain", "Ring structure"], a: 0, c: "glucose", d: "M", why: "<b>Five –OH</b>." },
      { s: "Two forms of glucose differing only at C-1.", o: ["Anomers", "Enantiomers", "Polymers", "Zwitterions"], a: 0, c: "cyclic", d: "M", why: "<b>Anomers</b>." },
      { s: "C-5 OH adds to C-1 forming a six-membered ring.", o: ["Pyranose structure", "Furanose structure", "Open chain", "Peptide bond"], a: 0, c: "cyclic", d: "C", why: "<b>Pyranose</b>." },
      { s: "Milk sugar made of galactose and glucose.", o: ["Lactose", "Sucrose", "Maltose", "Cellulose"], a: 0, c: "disacc", d: "E", why: "<b>Lactose</b>." },
      { s: "Sugar that changes rotation from + to − on hydrolysis.", o: ["Sucrose (invert sugar)", "Maltose", "Lactose", "Glucose"], a: 0, c: "disacc", d: "M", why: "<b>Sucrose</b>." },
      { s: "Highly branched stored carbohydrate in liver.", o: ["Glycogen", "Cellulose", "Amylose", "Sucrose"], a: 0, c: "poly", d: "E", why: "<b>Glycogen</b>." },
      { s: "Straight chains of β-glucose in plant cell walls.", o: ["Cellulose", "Starch", "Glycogen", "Maltose"], a: 0, c: "poly", d: "M", why: "<b>Cellulose</b>." },
      { s: "H₃N⁺–CH₂–COO⁻.", o: ["Zwitterion", "Peptide", "Nucleotide", "Anomer"], a: 0, c: "amino", d: "M", why: "<b>Zwitterion</b> of glycine." },
      { s: "Amino acid that must come from food.", o: ["Essential amino acid", "Non-essential amino acid", "Vitamin", "Enzyme"], a: 0, c: "amino", d: "E", why: "<b>Essential</b>." },
      { s: "Right-handed coil held by H-bonds within one chain.", o: ["α-Helix", "β-Pleated sheet", "Primary structure", "Quaternary structure"], a: 0, c: "pstruct", d: "M", why: "<b>α-Helix</b>." },
      { s: "Haemoglobin has four polypeptide chains working together.", o: ["Quaternary structure", "Primary structure", "Secondary structure", "Denaturation"], a: 0, c: "pstruct", d: "C", why: "<b>Quaternary</b>." },
      { s: "Egg white turns solid on boiling.", o: ["Denaturation", "Hydrolysis", "Polymerisation", "Inversion"], a: 0, c: "denat", d: "E", why: "<b>Denaturation</b>." },
      { s: "Vitamin stored in liver; lack causes night blindness.", o: ["Vitamin A", "Vitamin C", "Vitamin B₁", "Vitamin B₁₂"], a: 0, c: "vit", d: "E", why: "<b>A</b>." },
      { s: "Molecule with ribose and uracil that carries the message for protein synthesis.", o: ["m-RNA", "DNA", "t-RNA", "Glycogen"], a: 0, c: "na", d: "C", why: "<b>m-RNA</b>." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["Glucose + HI → n-hexane.", "Straight-chain structure of glucose", "glucose"], ["α and β forms at C-1.", "Anomers", "cyclic"], ["Glucose C1 joined to fructose C2.", "Sucrose", "disacc"], ["H₃N⁺–CHR–COO⁻.", "Zwitterion", "amino"], ["Boiled egg white.", "Denaturation", "denat"], ["A pairs with T, G with C.", "DNA double helix", "na"]] }
    ],
    wrong: [
      { stmts: ["Glucose is a reducing sugar.", "Maltose is a reducing sugar.", "Sucrose is a reducing sugar.", "Lactose is a reducing sugar."], a: 2, c: "disacc", why: "Sucrose is <b>non-reducing</b>." },
      { stmts: ["Denaturation destroys biological activity.", "Denaturation breaks peptide bonds.", "Heat can denature proteins.", "Curdling of milk is denaturation."], a: 1, c: "denat", why: "Peptide bonds (primary structure) are <b>not</b> broken." },
      { stmts: ["DNA contains deoxyribose.", "RNA contains uracil.", "DNA contains uracil.", "G–C pairs have three H-bonds."], a: 2, c: "na", why: "DNA has <b>thymine</b>, not uracil." }
    ],
    para: [
      { target: "Invert sugar", c: "disacc", sents: ["A sweet shop makes syrup for jalebis.", "The cook boils sugar with a little lemon juice, which splits sucrose into glucose and fructose.", "The shop opens at 7 am.", "Jalebis sell out by noon."], a: 1, why: "Acid hydrolysis of sucrose: <b>invert sugar</b>." },
      { target: "Water-soluble vitamin", c: "vit", sents: ["A doctor advised a patient to eat oranges every day.", "She explained that vitamin C is washed out of the body in urine and is not stored.", "The clinic was crowded.", "The patient lives nearby."], a: 1, why: "Not stored: <b>water-soluble</b>." },
      { target: "Base pairing in DNA", c: "na", sents: ["A biotech lab extracted DNA from strawberries.", "They noted that wherever one strand had adenine, the other had thymine.", "Strawberries were bought fresh.", "The lab had a bright window."], a: 1, why: "A–T pairing." }
    ],
    explain: [
      { s: "Glucose does not form a bisulphite compound though it has an aldehyde group.", o: ["It exists mainly in cyclic form", "It has no carbonyl", "It is a ketone", "It is a polymer"], a: 0, c: "cyclic", why: "The clue is <i>though it has</i>: the –CHO is tied up in the <b>ring</b>." },
      { s: "Amino acids are soluble in water but insoluble in benzene.", o: ["They are zwitterions (ionic)", "They are non-polar", "They are gases", "They are polymers"], a: 0, c: "amino", why: "<b>Zwitterions</b> are salt-like." },
      { s: "Boiled egg white cannot be turned back into liquid by cooling.", o: ["Denaturation is irreversible here", "Peptide bonds reform", "Water evaporates", "It is a carbohydrate"], a: 0, c: "denat", why: "<b>Irreversible denaturation</b>." },
      { s: "A strand of DNA with more G–C pairs melts at a higher temperature.", o: ["G–C pairs have three H-bonds", "G is heavier", "A–T pairs are covalent", "RNA is present"], a: 0, c: "na", why: "<b>Three H-bonds</b> per G–C pair." }
    ]
  }
});
