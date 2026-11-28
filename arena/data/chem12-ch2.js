/* Revision Arena · Class XII Chemistry · Unit 2 · Electrochemistry (Parts 1-3 + exercises). Original cases; every number recomputed. */
NFArena.register({
  id: "chem12-ch2", cls: "XII", subject: "Chemistry", unit: "Unit", num: "2",
  title: "Electrochemistry",
  tagline: "Galvanic cells and electrode potentials, the Nernst equation and Gibbs energy, conductance and Kohlrausch's law, electrolysis, batteries, fuel cells and corrosion.",
  notesLink: "../#chem12-ch2",
  concepts: {
    cell: { n: "Galvanic cells and cell notation", s: "cells" },
    sep: { n: "Electrode potential, SHE and the series", s: "cells" },
    nernst: { n: "Nernst equation", s: "nernst" },
    gibbs: { n: "ΔG°, E° and the equilibrium constant", s: "nernst" },
    kappa: { n: "Conductivity, cell constant, molar conductivity", s: "cond" },
    dil: { n: "Variation with dilution", s: "cond" },
    kohl: { n: "Kohlrausch's law", s: "cond" },
    faraday: { n: "Faraday's laws of electrolysis", s: "elys" },
    products: { n: "Products of electrolysis", s: "elys" },
    battery: { n: "Primary and secondary batteries", s: "apps" },
    fuel: { n: "Fuel cells", s: "apps" },
    corr: { n: "Corrosion and its prevention", s: "apps" }
  },
  overview: {
    text: "Electrochemistry links <b>chemical energy</b> and <b>electrical energy</b>. In a <b>galvanic cell</b> a spontaneous redox reaction makes electricity (E<sub>cell</sub> &gt; 0, ΔG &lt; 0); in an <b>electrolytic cell</b> electricity drives a non-spontaneous reaction. <b>Electrode potentials</b> and the <b>Nernst equation</b> predict the voltage, <b>conductance</b> tells us how ions carry charge, and <b>Faraday's laws</b> give the amount of product.",
    points: [
      "E°<sub>cell</sub> = E°<sub>cathode</sub> − E°<sub>anode</sub> (right − left); <b>ΔG° = −nFE°<sub>cell</sub></b>.",
      "Nernst at 298 K: <b>E = E° − (0.059/n) log Q</b>; at equilibrium E = 0 and log K = nE°/0.059.",
      "κ falls on dilution, but <b>Λ<sub>m</sub> rises</b>; Kohlrausch gives Λ°<sub>m</sub> of weak electrolytes.",
      "<b>m = ZIt</b>; 1 F = 96 487 C mol⁻¹ (≈ 96 500)."
    ],
    map: {
      center: "Electrochemistry",
      branches: [
        { t: "Cells", c: ["Daniell cell", "Cell notation", "SHE, E° series"] },
        { t: "Nernst", c: ["E vs concentration", "ΔG° = −nFE°", "K from E°"] },
        { t: "Conductance", c: ["κ and cell constant", "Λm and dilution", "Kohlrausch's law"] },
        { t: "Electrolysis & uses", c: ["Faraday's laws", "Products", "Batteries, fuel cells", "Corrosion"] }
      ]
    }
  },
  sections: [
    {
      id: "cells", title: "Galvanic cells and electrode potential", sub: "Chemistry that pushes electrons", icon: "🔋", color: "#EC4899",
      quick: [
        "<b>Daniell cell</b>: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s); E° = 1.10 V. Zn is the <b>anode</b> (oxidation, −), Cu the <b>cathode</b> (reduction, +).",
        "A <b>salt bridge</b> (KCl or KNO₃ in agar) completes the circuit and keeps the two solutions electrically neutral.",
        "Cell notation: <b>anode | anode ion || cathode ion | cathode</b>, e.g. Zn(s)|Zn²⁺(aq)||Cu²⁺(aq)|Cu(s).",
        "The <b>standard hydrogen electrode</b> (Pt, H₂ at 1 bar, H⁺ at 1 M) is given E° = 0. Other E° values are measured against it.",
        "<b>E°<sub>cell</sub> = E°<sub>right</sub> − E°<sub>left</sub></b> (using standard <b>reduction</b> potentials).",
        "A more <b>negative</b> E° means a stronger <b>reducing</b> agent (Li, −3.05 V); a more positive E° means a stronger <b>oxidising</b> agent (F₂, +2.87 V)."
      ],
      cards: [
        { t: "Worked: E°<sub>cell</sub>", tag: "numerical", b: "<p>E°(Cu²⁺/Cu) = +0.34 V, E°(Zn²⁺/Zn) = −0.76 V.</p><p>E°<sub>cell</sub> = 0.34 − (−0.76) = <b>1.10 V</b>.</p>" },
        { t: "Memory hook", tag: "hook", b: "<p><b>AN OX, RED CAT</b>: ANode = OXidation, REDuction = CAThode.</p>" },
        { t: "Can copper displace hydrogen from dilute acid?", tag: "why", b: "<p>No. E°(Cu²⁺/Cu) = +0.34 V is above SHE (0), so Cu is a weaker reducing agent than H₂ and cannot reduce H⁺.</p>" }
      ],
      exam: ["Always write E° as reduction potentials before subtracting.", "In notation, the single line is a phase boundary and the double line is the salt bridge."]
    },
    {
      id: "nernst", title: "Nernst equation and Gibbs energy", sub: "How concentration changes the voltage", icon: "📉", color: "#7B4DFF",
      quick: [
        "For M<sup>n+</sup> + ne⁻ → M at 298 K: <b>E = E° − (0.059/n) log(1/[M<sup>n+</sup>])</b>.",
        "For a cell aA + bB → cC + dD: <b>E<sub>cell</sub> = E°<sub>cell</sub> − (0.059/n) log Q</b>, Q = [C]<sup>c</sup>[D]<sup>d</sup>/[A]<sup>a</sup>[B]<sup>b</sup> (solids omitted).",
        "At equilibrium E<sub>cell</sub> = 0, so <b>log K<sub>c</sub> = nE°<sub>cell</sub>/0.059</b>.",
        "<b>ΔrG° = −nFE°<sub>cell</sub></b>. A positive E° gives negative ΔG°: the reaction is <b>spontaneous</b>.",
        "Also ΔrG° = −RT ln K, which links E°, ΔG° and K."
      ],
      cards: [
        { t: "Worked: Nernst", tag: "numerical", b: "<p>Zn|Zn²⁺(0.1 M)||Cu²⁺(0.01 M)|Cu, E° = 1.10 V, n = 2.</p><p>E = 1.10 − (0.059/2) log(0.1/0.01) = 1.10 − 0.0295 × 1 = <b>1.07 V</b>.</p>" },
        { t: "Worked: ΔG° and K", tag: "numerical", b: "<p>Daniell cell: ΔG° = −2 × 96 487 × 1.10 = −212 271 J ≈ <b>−212.3 kJ mol⁻¹</b>.</p><p>log K = 2 × 1.10 / 0.059 = 37.29 ⇒ <b>K ≈ 1.9 × 10³⁷</b>.</p>" },
        { t: "Concentration cell", tag: "def", b: "<p>Same electrode in two concentrations (e.g. Cu|Cu²⁺(0.01 M)||Cu²⁺(0.1 M)|Cu). E° = 0, so the voltage comes only from the log term: E = (0.059/2) log 10 = 0.0295 V.</p>" }
      ],
      exam: ["Write Q as products over reactants with solids left out.", "Remember the sign: E falls when Q rises."]
    },
    {
      id: "cond", title: "Conductance of solutions", sub: "How ions carry current", icon: "⚡", color: "#12B5A6",
      quick: [
        "Resistance R = ρ(l/A); conductance G = 1/R; <b>conductivity κ = 1/ρ</b> (S cm⁻¹ or S m⁻¹).",
        "<b>Cell constant G* = l/A</b> (cm⁻¹), found with standard KCl solution; <b>κ = G*/R</b>.",
        "<b>Molar conductivity Λ<sub>m</sub> = κ × 1000/C</b> (S cm² mol⁻¹ with κ in S cm⁻¹ and C in mol L⁻¹).",
        "On dilution, <b>κ decreases</b> (fewer ions per cm³) but <b>Λ<sub>m</sub> increases</b> (ions move more freely; weak electrolytes dissociate more).",
        "Strong electrolytes: Λ<sub>m</sub> = Λ°<sub>m</sub> − A√c (nearly straight line). Weak electrolytes: Λ<sub>m</sub> rises steeply at low c, so Λ°<sub>m</sub> cannot be found by extrapolation.",
        "<b>Kohlrausch's law</b>: Λ°<sub>m</sub> = ν₊λ°₊ + ν₋λ°₋. It gives Λ°<sub>m</sub> of weak electrolytes and α = Λ<sub>m</sub>/Λ°<sub>m</sub>."
      ],
      cards: [
        { t: "Worked: κ and Λ<sub>m</sub>", tag: "numerical", b: "<p>A cell with G* = 1.5 cm⁻¹ shows R = 1500 Ω for 0.01 M solution.</p><p>κ = 1.5 ÷ 1500 = 1.0 × 10⁻³ S cm⁻¹; Λ<sub>m</sub> = 1.0 × 10⁻³ × 1000 ÷ 0.01 = <b>100 S cm² mol⁻¹</b>.</p>" },
        { t: "Worked: Kohlrausch", tag: "numerical", b: "<p>Λ°(HCl) = 425.9, Λ°(CH₃COONa) = 91.0, Λ°(NaCl) = 126.4 S cm² mol⁻¹.</p><p>Λ°(CH₃COOH) = 425.9 + 91.0 − 126.4 = <b>390.5 S cm² mol⁻¹</b>. If Λ<sub>m</sub> = 39.05, α = <b>0.1</b>.</p>" },
        { t: "Why does κ fall but Λ<sub>m</sub> rise?", tag: "why", b: "<p>κ counts ions in 1 cm³: dilution means fewer. Λ<sub>m</sub> counts the conductance of <b>all</b> the ions from one mole, which move more freely (and weak electrolytes ionise more) when dilute.</p>" }
      ],
      exam: ["Watch units: 1000 converts L to cm³.", "Draw Λm vs √c for both strong (CH₃COOH steep) and weak cases."]
    },
    {
      id: "elys", title: "Electrolysis and Faraday's laws", sub: "Electricity making chemicals", icon: "🧲", color: "#FF8A1F",
      quick: [
        "<b>First law</b>: mass deposited ∝ charge passed: <b>m = ZIt</b> (Z = electrochemical equivalent).",
        "<b>Second law</b>: for the same charge, masses of different substances are in the ratio of their <b>equivalent masses</b> (molar mass ÷ electrons).",
        "Charge on 1 mol of electrons = <b>1 F = 96 487 C</b> (≈ 96 500 C). Ag⁺ needs 1 F per mol, Cu²⁺ 2 F, Al³⁺ 3 F.",
        "Molten NaCl: Na at cathode, Cl₂ at anode. <b>Aqueous NaCl</b>: H₂ at cathode (water reduced more easily), Cl₂ at anode (O₂ needs overpotential), NaOH left in solution.",
        "Dilute H₂SO₄: O₂ at anode; concentrated H₂SO₄: peroxodisulphate (S₂O₈²⁻) at anode.",
        "Products depend on the electrode (inert Pt or active Cu), the ions present and their E° values."
      ],
      cards: [
        { t: "Worked: copper plating", tag: "numerical", b: "<p>2 A for 965 s: Q = 1930 C = 1930 ÷ 96 500 = 0.02 mol e⁻.</p><p>Cu²⁺ + 2e⁻ → Cu, so 0.01 mol Cu = <b>0.635 g</b> (Cu = 63.5).</p>" },
        { t: "Worked: charge needed", tag: "numerical", b: "<p>1 mol Al from Al³⁺ needs 3 F = 3 × 96 487 = <b>289 461 C</b>.</p>" },
        { t: "Why H₂, not Na, from aqueous NaCl?", tag: "why", b: "<p>Water (E° for 2H₂O → H₂ ≈ −0.83 V) is reduced far more easily than Na⁺ (−2.71 V), so H₂ forms at the cathode.</p>" }
      ],
      exam: ["Write the electrode reaction first: it tells you n.", "Convert time to seconds."]
    },
    {
      id: "apps", title: "Batteries, fuel cells and corrosion", sub: "Electrochemistry in daily life", icon: "🚗", color: "#2F6BFF",
      quick: [
        "<b>Primary</b> batteries cannot be recharged: <b>dry (Leclanché) cell</b> ≈ 1.5 V (Zn anode, carbon cathode with MnO₂); <b>mercury cell</b> 1.35 V, constant voltage (hearing aids, watches).",
        "<b>Secondary</b> batteries can be recharged: <b>lead storage battery</b> (Pb anode, PbO₂ cathode, 38% H₂SO₄; PbSO₄ forms on discharge), <b>nickel–cadmium</b> cell.",
        "<b>Fuel cells</b> turn the energy of a fuel's combustion directly into electricity: H₂–O₂ cell (used in Apollo missions), about <b>70% efficient</b>, product is water, no pollution.",
        "<b>Corrosion</b> is an electrochemical process. Rusting: anode Fe → Fe²⁺ + 2e⁻; cathode O₂ + 4H⁺ + 4e⁻ → 2H₂O; Fe²⁺ is oxidised to rust Fe₂O₃·xH₂O.",
        "Rusting speeds up with moisture, dissolved CO₂/salts (better electrolyte) and impurities.",
        "Prevention: paint, grease or coat; <b>galvanisation</b> (zinc coat); <b>sacrificial anode</b> (Mg or Zn corrodes instead of Fe)."
      ],
      table: { cap: "Primary vs secondary vs fuel cell", head: ["Type", "Rechargeable?", "Example"], rows: [["Primary", "No", "Dry cell, mercury cell"], ["Secondary", "Yes", "Lead storage, Ni–Cd"], ["Fuel cell", "Runs while fuel is fed", "H₂–O₂ cell"]] },
      cards: [
        { t: "Lead storage battery reactions", tag: "def", b: "<p>Discharge: Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O. Charging reverses it, so the battery can be reused.</p>" },
        { t: "Why does zinc protect iron even when scratched?", tag: "why", b: "<p>Zn (E° −0.76 V) is more easily oxidised than Fe (−0.44 V), so zinc acts as the anode and corrodes first: <b>sacrificial protection</b>.</p>" },
        { t: "H₂–O₂ fuel cell", tag: "def", b: "<p>Anode: 2H₂ + 4OH⁻ → 4H₂O + 4e⁻. Cathode: O₂ + 2H₂O + 4e⁻ → 4OH⁻. Overall: 2H₂ + O₂ → 2H₂O.</p>" }
      ],
      exam: ["For corrosion, write anode, cathode and overall reactions.", "Name two methods of prevention with one line of reason each."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "cell", q: "Which electrode is the anode in a galvanic cell?", a: "The one where oxidation occurs; it is negative." },
    { k: "Function", c: "cell", q: "Two jobs of a salt bridge?", a: "Completes the circuit and keeps the solutions electrically neutral." },
    { k: "Fact", c: "sep", q: "E° of the standard hydrogen electrode?", a: "0 V (Pt, H₂ 1 bar, H⁺ 1 M)." },
    { k: "Formula", c: "sep", q: "E°<sub>cell</sub>?", a: "E°<sub>cathode</sub> − E°<sub>anode</sub> (reduction potentials)." },
    { k: "Fact", c: "sep", q: "Strongest reducing agent in the series?", a: "Lithium (most negative E°)." },
    { k: "Formula", c: "nernst", q: "Nernst equation at 298 K?", a: "E = E° − (0.059/n) log Q." },
    { k: "Formula", c: "gibbs", q: "ΔG° in terms of E°?", a: "ΔG° = −nFE°<sub>cell</sub>." },
    { k: "Formula", c: "gibbs", q: "K from E°?", a: "log K = nE°<sub>cell</sub>/0.059 (298 K)." },
    { k: "Formula", c: "kappa", q: "Molar conductivity?", a: "Λ<sub>m</sub> = κ × 1000/C (S cm² mol⁻¹)." },
    { k: "Definition", c: "kappa", q: "Cell constant?", a: "l/A of the conductivity cell (cm⁻¹); κ = G*/R." },
    { k: "Trend", c: "dil", q: "Effect of dilution on κ and Λ<sub>m</sub>?", a: "κ decreases; Λ<sub>m</sub> increases." },
    { k: "Law", c: "kohl", q: "Kohlrausch's law?", a: "Λ°<sub>m</sub> of an electrolyte = sum of the limiting molar conductivities of its ions (ν₊λ°₊ + ν₋λ°₋)." },
    { k: "Law", c: "faraday", q: "Faraday's first law?", a: "Mass deposited ∝ charge passed: m = ZIt." },
    { k: "Value", c: "faraday", q: "1 faraday?", a: "96 487 C (charge on 1 mol of electrons)." },
    { k: "Fact", c: "products", q: "Cathode product from aqueous NaCl?", a: "H₂ gas." },
    { k: "Example", c: "battery", q: "A secondary battery?", a: "Lead storage battery (or Ni–Cd)." },
    { k: "Fact", c: "fuel", q: "Product of the H₂–O₂ fuel cell?", a: "Water." },
    { k: "Method", c: "corr", q: "Sacrificial protection?", a: "Attaching a more reactive metal (Mg/Zn) that corrodes instead of iron." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "The science-fair lemon battery",
      text: "<p><b>Tanya</b> and <b>Om</b> build a Daniell-type cell for the science fair: a zinc strip in ZnSO₄ and a copper strip in CuSO₄, joined by a strip of filter paper soaked in KNO₃. E°(Zn²⁺/Zn) = −0.76 V, E°(Cu²⁺/Cu) = +0.34 V.</p>",
      qs: [
        { q: "Write the cell notation and identify the anode.", m: 2, type: "Write + identify", c: "cell", hint: "Anode on the left.", points: [{ p: "Zn(s)|Zn²⁺(aq)||Cu²⁺(aq)|Cu(s)", m: 1, k: ["zn", "||", "cu"] }, { p: "Zinc is the anode (oxidation)", m: 1, k: ["zinc", "zn", "anode"] }], structure: ["Notation, then anode."], model: "<p><b>Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)</b>. Zinc is the <b>anode</b>: Zn → Zn²⁺ + 2e⁻.</p>" },
        { q: "Calculate E°<sub>cell</sub> and state the role of the KNO₃ strip.", m: 2, type: "Numerical + explain", c: "sep", hint: "Cathode − anode.", points: [{ p: "E° = 0.34 − (−0.76) = 1.10 V", m: 1, k: ["1.10", "1.1"] }, { p: "Salt bridge: completes circuit, keeps neutrality", m: 1, k: ["circuit", "neutral"] }], structure: ["Calculation, then salt bridge."], model: "<p>E°<sub>cell</sub> = 0.34 − (−0.76) = <b>1.10 V</b>.</p><p>The KNO₃ strip is a <b>salt bridge</b>: it completes the circuit and keeps both solutions electrically neutral.</p>" }
      ]
    },
    {
      id: "c2", lvl: 1, title: "The rusty school gate",
      text: "<p>The school's iron gate near the sea rusts every monsoon, while the <b>galvanised</b> iron bucket in the garden stays bright even where it is scratched. <b>Dev</b> wants to understand why.</p>",
      qs: [
        { q: "Write the anode and cathode reactions in rusting.", m: 2, type: "Write reactions", c: "corr", hint: "Fe oxidised, O₂ reduced.", points: [{ p: "Anode: Fe → Fe²⁺ + 2e⁻", m: 1, k: ["fe²⁺", "fe2+", "2e"] }, { p: "Cathode: O₂ + 4H⁺ + 4e⁻ → 2H₂O", m: 1, k: ["o₂", "o2", "4h"] }], structure: ["Anode, cathode."], model: "<p><b>Anode:</b> Fe(s) → Fe²⁺(aq) + 2e⁻</p><p><b>Cathode:</b> O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l)</p>" },
        { q: "Why does the gate near the sea rust faster, and why does the scratched bucket not rust?", m: 2, type: "Explain", c: "corr", hint: "Electrolyte; sacrificial zinc.", points: [{ p: "Salty, moist air is a better electrolyte, speeding the electrochemical process", m: 1, k: ["salt", "electrolyte"] }, { p: "Zinc is more reactive (more negative E°), so it corrodes in place of iron", m: 1, k: ["zinc", "sacrific", "more reactive"] }], structure: ["Sea air, then zinc."], model: "<p>Sea air carries salt and moisture, which form a better <b>electrolyte</b>, so the electrochemical cells on the iron work faster.</p><p>Zinc has a more negative E° than iron, so even where scratched it acts as the <b>anode</b> and corrodes instead of iron (<b>sacrificial protection</b>).</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Voltage that will not stay put",
      text: "<p>In the lab, <b>Naina</b> sets up Zn|Zn²⁺(0.1 M)||Cu²⁺(0.01 M)|Cu at 298 K. Her voltmeter shows a little less than the textbook 1.10 V. Later she lets the cell run for a whole day and the reading falls to zero.</p>",
      qs: [
        { q: "Calculate the expected E<sub>cell</sub> using the Nernst equation.", m: 2, type: "Numerical", c: "nernst", hint: "Q = [Zn²⁺]/[Cu²⁺].", points: [{ p: "E = 1.10 − (0.059/2) log(0.1/0.01)", m: 1, k: ["0.059", "log"] }, { p: "E = 1.10 − 0.0295 = 1.07 V", m: 1, k: ["1.07"] }], structure: ["Equation, substitution, answer."], model: "<p>E = E° − (0.059/n) log([Zn²⁺]/[Cu²⁺]) = 1.10 − (0.059/2) log(0.1/0.01) = 1.10 − 0.0295 = <b>1.07 V</b>.</p>" },
        { q: "Why does the reading become zero after a day? Find K for the reaction.", m: 3, type: "Explain + numerical", c: "gibbs", hint: "Equilibrium.", points: [{ p: "Reaction reaches equilibrium; E<sub>cell</sub> = 0", m: 1, k: ["equilibrium"] }, { p: "log K = 2 × 1.10/0.059 = 37.29", m: 1, k: ["37.29", "37.3"] }, { p: "K ≈ 1.9 × 10³⁷", m: 1, k: ["10³⁷", "10^37", "1.9"] }], structure: ["Reason, then K."], model: "<p>As the cell runs, [Zn²⁺] rises and [Cu²⁺] falls until the reaction reaches <b>equilibrium</b>; then there is no driving force and E<sub>cell</sub> = 0.</p><p>log K = nE°/0.059 = 2 × 1.10 ÷ 0.059 = 37.29, so <b>K ≈ 1.9 × 10³⁷</b>.</p>" }
      ]
    },
    {
      id: "c4", lvl: 2, title: "Weak acid in the conductivity cell",
      text: "<p><b>Veer</b> measures a 0.01 M acetic acid solution in a cell with constant 1.5 cm⁻¹ and gets R = 3841 Ω. Data: Λ°(HCl) = 425.9, Λ°(CH₃COONa) = 91.0, Λ°(NaCl) = 126.4 S cm² mol⁻¹.</p>",
      qs: [
        { q: "Find κ and Λ<sub>m</sub> of the acetic acid solution.", m: 2, type: "Numerical", c: "kappa", hint: "κ = G*/R.", points: [{ p: "κ = 1.5/3841 = 3.905 × 10⁻⁴ S cm⁻¹", m: 1, k: ["3.9", "10⁻⁴", "10^-4"] }, { p: "Λ<sub>m</sub> = 3.905 × 10⁻⁴ × 1000/0.01 = 39.05 S cm² mol⁻¹", m: 1, k: ["39"] }], structure: ["κ, then Λm."], model: "<p>κ = G*/R = 1.5 ÷ 3841 = <b>3.905 × 10⁻⁴ S cm⁻¹</b>.</p><p>Λ<sub>m</sub> = κ × 1000/C = 3.905 × 10⁻⁴ × 1000 ÷ 0.01 = <b>39.05 S cm² mol⁻¹</b>.</p>" },
        { q: "Use Kohlrausch's law to find Λ°<sub>m</sub> and the degree of dissociation. Why can't Λ°<sub>m</sub> be found by extrapolation here?", m: 3, type: "Numerical + reason", c: "kohl", hint: "HCl + CH₃COONa − NaCl.", points: [{ p: "Λ° = 425.9 + 91.0 − 126.4 = 390.5", m: 1, k: ["390.5"] }, { p: "α = 39.05/390.5 = 0.1", m: 1, k: ["0.1", "10%"] }, { p: "Weak electrolyte: Λm rises steeply at low c, so the curve cannot be extended to c = 0", m: 1, k: ["steep", "weak", "extrapolat"] }], structure: ["Λ°, α, reason."], model: "<p>Λ°(CH₃COOH) = 425.9 + 91.0 − 126.4 = <b>390.5 S cm² mol⁻¹</b>.</p><p>α = Λ<sub>m</sub>/Λ°<sub>m</sub> = 39.05 ÷ 390.5 = <b>0.1</b>.</p><p>For a weak electrolyte Λ<sub>m</sub> rises very steeply at low concentration, so the graph cannot be extrapolated to zero concentration.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "The plating workshop and the electric bus",
      text: "<p>A jewellery workshop copper-plates brass rings using a current of <b>2 A for 965 s</b> through CuSO₄ solution. The city's new electric bus runs on a <b>hydrogen–oxygen fuel cell</b>, while the school's inverter uses a <b>lead storage battery</b>. (Cu = 63.5 g mol⁻¹, 1 F = 96 500 C.)</p>",
      qs: [
        { q: "Calculate the mass of copper deposited on the rings.", m: 2, type: "Numerical", c: "faraday", hint: "Q = It, then moles of e⁻.", points: [{ p: "Q = 2 × 965 = 1930 C = 0.02 mol e⁻", m: 1, k: ["1930", "0.02"] }, { p: "0.01 mol Cu = 0.635 g", m: 1, k: ["0.635"] }], structure: ["Charge, electrons, mass."], model: "<p>Q = It = 2 × 965 = 1930 C = 1930 ÷ 96 500 = 0.02 mol e⁻.</p><p>Cu²⁺ + 2e⁻ → Cu, so Cu = 0.01 mol = 0.01 × 63.5 = <b>0.635 g</b>.</p>" },
        { q: "Write the electrode reactions of the fuel cell and give two advantages. How is the inverter battery different from a dry cell?", m: 3, type: "Explain + compare", c: "fuel", hint: "Anode H₂, cathode O₂; rechargeable.", points: [{ p: "Anode 2H₂ + 4OH⁻ → 4H₂O + 4e⁻; cathode O₂ + 2H₂O + 4e⁻ → 4OH⁻", m: 1, k: ["4oh", "4e"] }, { p: "Advantages: high efficiency (~70%), no pollution (water only)", m: 1, k: ["efficien", "pollut", "water"] }, { p: "Lead storage is secondary (rechargeable); dry cell is primary", m: 1, k: ["secondary", "recharge", "primary"] }], structure: ["Reactions, advantages, comparison."], model: "<p><b>Anode:</b> 2H₂ + 4OH⁻ → 4H₂O + 4e⁻; <b>cathode:</b> O₂ + 2H₂O + 4e⁻ → 4OH⁻.</p><p>Advantages: about <b>70% efficient</b> and <b>pollution-free</b> (only water forms).</p><p>The lead storage battery is a <b>secondary</b> cell that can be recharged; a dry cell is a <b>primary</b> cell and cannot.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "cell", q: "In a galvanic cell, reduction takes place at the:", o: ["Cathode", "Anode", "Salt bridge", "Voltmeter"], a: 0, hint: "RED CAT.", why: "<b>Cathode</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "sep", q: "The standard electrode potential of the SHE is:", o: ["0 V", "1 V", "−1 V", "0.059 V"], a: 0, hint: "Reference.", why: "<b>0 V</b> by convention." },
    { id: "q3", t: "mcq", d: "M", m: 1, c: "sep", q: "E° values: Mg²⁺/Mg −2.37 V, Zn²⁺/Zn −0.76 V, Ag⁺/Ag +0.80 V. The strongest reducing agent is:", o: ["Mg", "Zn", "Ag", "Ag⁺"], a: 0, hint: "Most negative.", why: "<b>Mg</b> has the most negative E°." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "dil", q: "On diluting an acetic acid solution:", o: ["κ decreases, Λm increases", "Both increase", "Both decrease", "κ increases, Λm decreases"], a: 0, hint: "Per cm³ vs per mole.", why: "<b>κ falls, Λm rises</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "products", q: "Electrolysis of aqueous NaCl with inert electrodes gives at the cathode:", o: ["H₂", "Na", "Cl₂", "O₂"], a: 0, hint: "Water is easier to reduce.", why: "<b>H₂</b>." },
    { id: "q6", t: "mcq", d: "C", m: 1, c: "gibbs", q: "For a cell with n = 2 and E° = 0.295 V at 298 K, log K is:", o: ["10", "5", "20", "2.95"], a: 0, hint: "nE°/0.059.", why: "2 × 0.295 / 0.059 = <b>10</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "faraday", q: "The charge needed to deposit 1 mol of Al from Al³⁺ is:", o: ["3 F", "1 F", "2 F", "1/3 F"], a: 0, hint: "Electrons per ion.", why: "Al³⁺ + 3e⁻ → Al: <b>3 F</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "kappa", q: "A 0.02 M solution has κ = 2 × 10⁻³ S cm⁻¹. Its Λm (S cm² mol⁻¹) is:", o: ["100", "10", "0.1", "1000"], a: 0, hint: "κ × 1000/C.", why: "2 × 10⁻³ × 1000 ÷ 0.02 = <b>100</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "gibbs", q: "A cell reaction with positive E°<sub>cell</sub> is spontaneous.", r: "ΔG° = −nFE°<sub>cell</sub>, so positive E° gives negative ΔG°.", a: 0, hint: "Sign link.", why: "Both true, and R explains A." },
    { id: "q10", t: "ar", d: "C", m: 1, c: "kohl", q: "Λ°m of acetic acid can be found by extrapolating the Λm vs √c graph to zero concentration.", r: "Acetic acid is a weak electrolyte.", a: 3, hint: "Weak curve is steep.", why: "A is false (the curve is too steep; Kohlrausch's law is used). R is true." },
    { id: "q11", t: "ar", d: "M", m: 1, c: "battery", q: "A mercury cell gives a nearly constant voltage throughout its life.", r: "Its overall reaction does not involve any ion whose concentration changes.", a: 0, hint: "Why constant?", why: "Both true, and R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "cell", q: "The anode of a galvanic cell is the positive electrode.", a: false, hint: "Electrons leave it.", why: "False: the anode is <b>negative</b> in a galvanic cell." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "fuel", q: "The only product of the H₂–O₂ fuel cell is water.", a: true, hint: "Clean.", why: "True." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "battery", q: "The dry cell can be recharged many times.", a: false, hint: "Primary.", why: "False: it is a <b>primary</b> cell." },
    { id: "q15", t: "match", d: "E", m: 4, c: "kappa", q: "Match the quantity with its unit.", pairs: [["Conductivity", "S cm⁻¹"], ["Molar conductivity", "S cm² mol⁻¹"], ["Cell constant", "cm⁻¹"], ["Faraday constant", "C mol⁻¹"]], hint: "Check the formulas.", why: "Each unit follows from its definition." },
    { id: "q16", t: "match", d: "M", m: 4, c: "battery", q: "Match the device with its feature.", pairs: [["Dry cell", "Primary, about 1.5 V"], ["Mercury cell", "Constant 1.35 V"], ["Lead storage battery", "Rechargeable, H₂SO₄ electrolyte"], ["H₂–O₂ fuel cell", "Used in Apollo missions"]], hint: "One each.", why: "Each feature belongs to one device." },
    { id: "q17", t: "match", d: "M", m: 4, c: "products", q: "Match the electrolysis with its anode product.", pairs: [["Molten NaCl", "Cl₂"], ["Dilute H₂SO₄ (Pt)", "O₂"], ["Concentrated H₂SO₄ (Pt)", "S₂O₈²⁻"], ["CuSO₄ with copper anode", "Cu²⁺ (anode dissolves)"]], hint: "Active electrode dissolves.", why: "Each anode product follows from the ions and electrodes." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "faraday", q: "The charge on one mole of electrons is called one ______.", acc: ["faraday"], hint: "F", why: "<b>Faraday</b>." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "sep", q: "E°<sub>cell</sub> of the Daniell cell is ______ V.", acc: ["1.10", "1.1"], hint: "0.34 + 0.76.", why: "<b>1.10 V</b>." },
    { id: "q20", t: "fill", d: "M", m: 1, c: "corr", q: "Coating iron with zinc is called ______.", acc: ["galvanisation", "galvanization", "galvanizing", "galvanising"], hint: "g…", why: "<b>Galvanisation</b>." },
    { id: "q21", t: "fill", d: "C", m: 1, c: "nernst", q: "For Zn|Zn²⁺(0.1 M)||Cu²⁺(0.01 M)|Cu, E<sub>cell</sub> at 298 K is ______ V.", acc: ["1.07", "1.0705"], hint: "1.10 − 0.0295.", why: "<b>1.07 V</b>." },
    { id: "q22", t: "short", d: "E", m: 1, c: "corr", q: "Name the metal used as a sacrificial anode to protect iron pipelines (any one).", acc: ["magnesium", "zinc", "mg", "zn"], hint: "More reactive.", why: "<b>Magnesium</b> (or zinc)." },
    { id: "q23", t: "short", d: "M", m: 1, c: "kohl", q: "Λ° values: HCl 425.9, CH₃COONa 91.0, NaCl 126.4. What is Λ° of CH₃COOH?", acc: ["390.5"], hint: "Add, subtract.", why: "<b>390.5 S cm² mol⁻¹</b>." },
    { id: "q24", t: "sa3", d: "M", m: 3, c: "kohl", q: "State Kohlrausch's law and give two of its applications.", hint: "Sum of ions; weak electrolytes; α.", why: "", points: [{ p: "Statement: Λ°m = sum of limiting molar conductivities of ions (ν₊λ°₊ + ν₋λ°₋)", m: 1, k: ["sum", "ions", "limiting"] }, { p: "Application: Λ°m of weak electrolytes", m: 1, k: ["weak"] }, { p: "Application: degree of dissociation (α = Λm/Λ°m) or Ka", m: 1, k: ["dissociation", "α", "ka"] }], model: "<p><b>Kohlrausch's law:</b> the limiting molar conductivity of an electrolyte is the sum of the limiting molar conductivities of its cation and anion: Λ°<sub>m</sub> = ν₊λ°₊ + ν₋λ°₋.</p><p>(i) Finding Λ°<sub>m</sub> of <b>weak electrolytes</b>.</p><p>(ii) Finding the <b>degree of dissociation</b> α = Λ<sub>m</sub>/Λ°<sub>m</sub> (and hence K<sub>a</sub>).</p>" },
    { id: "q25", t: "sa3", d: "C", m: 3, c: "gibbs", q: "Calculate ΔrG° for the Daniell cell (E° = 1.10 V, F = 96 487 C mol⁻¹) and state what its sign shows.", hint: "−nFE°.", why: "", points: [{ p: "ΔG° = −nFE°, n = 2", m: 1, k: ["−nfe", "-nfe", "n = 2"] }, { p: "= −2 × 96 487 × 1.10 = −212 271 J ≈ −212.3 kJ mol⁻¹", m: 1, k: ["212"] }, { p: "Negative: reaction is spontaneous", m: 1, k: ["spontaneous"] }], model: "<p>ΔrG° = −nFE°<sub>cell</sub> = −2 × 96 487 × 1.10 = −212 271 J mol⁻¹ ≈ <b>−212.3 kJ mol⁻¹</b>.</p><p>The <b>negative</b> sign shows the reaction is <b>spontaneous</b>.</p>" },
    { id: "q26", t: "sa4", d: "M", m: 4, c: "battery", q: "Distinguish between primary and secondary batteries with one example each, and write the discharge reaction of the lead storage battery.", hint: "Rechargeable?", why: "", points: [{ p: "Primary: cannot be recharged", m: 1, k: ["cannot", "not recharg"] }, { p: "Secondary: can be recharged", m: 1, k: ["recharg"] }, { p: "Examples: dry/mercury cell; lead storage/Ni–Cd", m: 1, k: ["dry", "mercury", "lead", "nickel"] }, { p: "Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O", m: 1, k: ["pbso"] }], model: "<p><b>Primary</b> batteries cannot be recharged once used (dry cell). <b>Secondary</b> batteries can be recharged by passing current the opposite way (lead storage battery).</p><p>Discharge: <b>Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O</b>.</p>" },
    { id: "q27", t: "sa4", d: "C", m: 4, c: "faraday", q: "State Faraday's two laws of electrolysis. How many grams of silver are deposited when 0.5 A passes through AgNO₃ for 9650 s (Ag = 108)?", hint: "Q = It.", why: "", points: [{ p: "First law: m ∝ Q (m = ZIt)", m: 1, k: ["proportional", "zit"] }, { p: "Second law: masses in ratio of equivalent masses", m: 1, k: ["equivalent"] }, { p: "Q = 4825 C = 0.05 mol e⁻", m: 1, k: ["4825", "0.05"] }, { p: "Ag = 0.05 × 108 = 5.4 g", m: 1, k: ["5.4"] }], model: "<p><b>First law:</b> the mass deposited is proportional to the charge passed, m = ZIt. <b>Second law:</b> for the same charge, masses of different substances are in the ratio of their equivalent masses.</p><p>Q = 0.5 × 9650 = 4825 C = 0.05 mol e⁻. Ag⁺ + e⁻ → Ag, so Ag = 0.05 × 108 = <b>5.4 g</b>.</p>" },
    { id: "q28", t: "la6", d: "C", m: 6, c: "kappa", q: "(a) Define conductivity and molar conductivity and give their units. (b) How do they vary with dilution? Explain. (c) A cell with constant 1.5 cm⁻¹ shows resistance 1500 Ω with 0.01 M KCl. Find κ and Λm.", hint: "κ = G*/R; Λm = κ × 1000/C.", why: "", points: [{ p: "κ: conductance of 1 cm³ (unit cube); S cm⁻¹", m: 1, k: ["s cm⁻¹", "unit", "cube"] }, { p: "Λm: conductance of all ions from 1 mol; S cm² mol⁻¹", m: 1, k: ["mole", "s cm²"] }, { p: "κ decreases on dilution: fewer ions per unit volume", m: 1, k: ["decrease", "fewer"] }, { p: "Λm increases: ions freer / more dissociation", m: 1, k: ["increase"] }, { p: "κ = 1.5/1500 = 1 × 10⁻³ S cm⁻¹", m: 1, k: ["10⁻³", "0.001"] }, { p: "Λm = 100 S cm² mol⁻¹", m: 1, k: ["100"] }], model: "<p>(a) <b>Conductivity κ</b> is the conductance of a solution placed between electrodes 1 cm² in area and 1 cm apart (S cm⁻¹). <b>Molar conductivity Λ<sub>m</sub></b> is the conductance of all the ions produced by one mole of electrolyte, Λ<sub>m</sub> = κ × 1000/C (S cm² mol⁻¹).</p><p>(b) On dilution κ <b>decreases</b> because there are fewer ions per cm³; Λ<sub>m</sub> <b>increases</b> because the ions move more freely and weak electrolytes dissociate more.</p><p>(c) κ = G*/R = 1.5 ÷ 1500 = <b>1.0 × 10⁻³ S cm⁻¹</b>; Λ<sub>m</sub> = 1.0 × 10⁻³ × 1000 ÷ 0.01 = <b>100 S cm² mol⁻¹</b>.</p>" },
    { id: "q29", t: "comp", d: "M", m: 1, c: "corr", q: "Ships have magnesium blocks bolted to their steel hulls. The blocks:", o: ["Corrode instead of the steel", "Make the ship lighter", "Increase the speed", "Reduce friction"], a: 0, hint: "Sacrificial.", why: "Mg is more reactive: it <b>corrodes instead of the steel</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "products", q: "A student electrolyses CuSO₄ solution using copper electrodes. After an hour the blue colour of the solution:", o: ["Stays the same", "Fades", "Turns green", "Deepens"], a: 0, hint: "Anode dissolves.", why: "Cu dissolves at the anode as fast as it deposits at the cathode, so [Cu²⁺] and the colour <b>stay the same</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "cell", passage: "In a Daniell cell the zinc rod slowly becomes thinner while copper builds up on the copper rod.", q: "The zinc rod is the:", o: ["Anode", "Cathode", "Salt bridge", "Electrolyte"], a: 0, hint: "Oxidation.", why: "Zn is oxidised: <b>anode</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "fuel", passage: "A space mission needs electricity and drinking water from the same device.", q: "The best device is:", o: ["H₂–O₂ fuel cell", "Dry cell", "Lead storage battery", "Mercury cell"], a: 0, hint: "Product is water.", why: "The <b>H₂–O₂ fuel cell</b> gives both." },
    { id: "q33", t: "case", d: "C", m: 1, c: "nernst", passage: "A concentration cell Cu|Cu²⁺(0.01 M)||Cu²⁺(0.1 M)|Cu is set up at 298 K.", q: "Its emf is about:", o: ["0.0295 V", "0 V", "0.059 V", "1.10 V"], a: 0, hint: "E° = 0; n = 2.", why: "E = (0.059/2) log(0.1/0.01) = <b>0.0295 V</b>." }
  ],
  find: {
    mcq: [
      { s: "The electrode where electrons leave the cell to the outer circuit.", o: ["Anode", "Cathode", "Salt bridge", "SHE"], a: 0, c: "cell", d: "E", why: "<b>Anode</b> (oxidation)." },
      { s: "A U-tube of KNO₃ in agar joining two beakers.", o: ["Salt bridge", "Electrolytic cell", "Fuel cell", "Conductivity cell"], a: 0, c: "cell", d: "E", why: "<b>Salt bridge</b>." },
      { s: "Pt dipped in 1 M H⁺ with H₂ bubbling at 1 bar.", o: ["SHE", "Calomel electrode", "Fuel cell", "Concentration cell"], a: 0, c: "sep", d: "E", why: "<b>Standard hydrogen electrode</b>." },
      { s: "E changes when the ion concentrations change.", o: ["Nernst equation", "Kohlrausch's law", "Faraday's law", "Henry's law"], a: 0, c: "nernst", d: "E", why: "<b>Nernst equation</b>." },
      { s: "A cell with E = 0 V after running for a long time.", o: ["Equilibrium reached", "Salt bridge broken", "Too much current", "Wrong electrodes"], a: 0, c: "gibbs", d: "M", why: "<b>Equilibrium</b>: no driving force." },
      { s: "−nFE°<sub>cell</sub>.", o: ["ΔrG°", "Λm", "κ", "Q"], a: 0, c: "gibbs", d: "E", why: "<b>ΔrG°</b>." },
      { s: "l/A of a conductivity cell.", o: ["Cell constant", "Conductivity", "Resistivity", "Molar conductivity"], a: 0, c: "kappa", d: "E", why: "<b>Cell constant</b>." },
      { s: "κ × 1000 ÷ C.", o: ["Molar conductivity", "Conductivity", "Conductance", "Cell constant"], a: 0, c: "kappa", d: "M", why: "<b>Λm</b>." },
      { s: "Λm of acetic acid shoots up at very low concentration.", o: ["More dissociation on dilution", "Fewer ions per cm³", "Kohlrausch's law fails", "Ions get heavier"], a: 0, c: "dil", d: "M", why: "Weak electrolytes <b>dissociate more on dilution</b>." },
      { s: "Λ°(CH₃COOH) = Λ°(HCl) + Λ°(CH₃COONa) − Λ°(NaCl).", o: ["Kohlrausch's law", "Nernst equation", "Faraday's second law", "Ohm's law"], a: 0, c: "kohl", d: "M", why: "<b>Kohlrausch's law</b>." },
      { s: "Doubling the current doubles the metal plated in the same time.", o: ["Faraday's first law", "Faraday's second law", "Nernst equation", "Kohlrausch's law"], a: 0, c: "faraday", d: "E", why: "<b>m = ZIt</b>: first law." },
      { s: "Same charge deposits 108 g Ag but only 31.75 g Cu.", o: ["Faraday's second law", "Faraday's first law", "Henry's law", "Raoult's law"], a: 0, c: "faraday", d: "C", why: "Masses in the ratio of <b>equivalent masses</b>." },
      { s: "Brine electrolysis gives a gas at the cathode and leaves NaOH behind.", o: ["H₂ at cathode", "Na at cathode", "O₂ at cathode", "Cl₂ at cathode"], a: 0, c: "products", d: "M", why: "<b>H₂</b> from water." },
      { s: "An inverter battery that is charged overnight.", o: ["Secondary battery", "Primary battery", "Fuel cell", "Concentration cell"], a: 0, c: "battery", d: "E", why: "<b>Secondary</b>: rechargeable." },
      { s: "A cell that keeps working as long as hydrogen is supplied.", o: ["Fuel cell", "Dry cell", "Mercury cell", "Daniell cell"], a: 0, c: "fuel", d: "M", why: "<b>Fuel cell</b>." },
      { s: "Reddish-brown flakes form on an iron nail left in salt water.", o: ["Corrosion (rusting)", "Galvanisation", "Electroplating", "Passivation"], a: 0, c: "corr", d: "C", why: "<b>Rusting</b>, faster in salt water." }
    ],
    match: [
      { title: "Drag each clue onto its concept.", pairs: [["Zinc strip grows thinner in a Daniell cell.", "Anode", "cell"], ["E = E° − (0.059/n) log Q.", "Nernst equation", "nernst"], ["Λ° of a weak acid from strong electrolytes.", "Kohlrausch's law", "kohl"], ["m = ZIt.", "Faraday's first law", "faraday"], ["Recharged inverter battery.", "Secondary battery", "battery"], ["Magnesium block on a ship's hull.", "Sacrificial protection", "corr"]] }
    ],
    wrong: [
      { stmts: ["Oxidation occurs at the anode.", "The cathode is positive in a galvanic cell.", "Electrons flow from cathode to anode in the outer circuit.", "A salt bridge keeps the solutions neutral."], a: 2, c: "cell", why: "Electrons flow from <b>anode to cathode</b> in the outer circuit." },
      { stmts: ["κ decreases on dilution.", "Λm increases on dilution.", "Λ°m of a weak electrolyte is found by extrapolation.", "Kohlrausch's law gives Λ°m of weak electrolytes."], a: 2, c: "kohl", why: "Weak electrolytes need <b>Kohlrausch's law</b>, not extrapolation." },
      { stmts: ["Dry cell is a primary cell.", "Mercury cell gives constant voltage.", "Lead storage battery cannot be recharged.", "Fuel cells produce water from H₂ and O₂."], a: 2, c: "battery", why: "The lead storage battery <b>is rechargeable</b>." }
    ],
    para: [
      { target: "Faraday's first law", c: "faraday", sents: ["Rahul runs a small plating shop.", "He noticed that keeping the current on twice as long gave twice the silver coating.", "His shop opens at 10 am.", "He sells silver-plated spoons."], a: 1, why: "Mass ∝ charge: <b>Faraday's first law</b>." },
      { target: "Sacrificial protection", c: "corr", sents: ["The village has an old iron water pipeline.", "Engineers buried magnesium blocks connected to the pipe so the blocks corrode instead.", "The pipeline is 3 km long.", "It supplies two schools."], a: 1, why: "More reactive metal corrodes first: <b>sacrificial protection</b>." },
      { target: "Nernst equation", c: "nernst", sents: ["Anika set up a zinc–copper cell.", "She used 0.1 M zinc sulphate.", "When she diluted the copper sulphate, the cell voltage dropped slightly.", "She wrote her results in a table."], a: 2, why: "Voltage depends on concentration: <b>Nernst equation</b>." }
    ],
    explain: [
      { s: "Copper does not liberate hydrogen from dilute HCl.", o: ["E°(Cu²⁺/Cu) is positive (above SHE)", "Copper is a non-metal", "HCl is a weak acid", "Copper is too heavy"], a: 0, c: "sep", why: "The clue is <i>hydrogen</i>: Cu has <b>positive E°</b>, so it cannot reduce H⁺." },
      { s: "Electrolysis of aqueous NaCl gives Cl₂, not O₂, at the anode.", o: ["O₂ formation needs a large overpotential", "Cl⁻ is not present", "Water cannot be oxidised", "Na⁺ is oxidised"], a: 0, c: "products", why: "<b>Overpotential</b> for O₂ makes Cl₂ form first." },
      { s: "A hearing-aid battery keeps exactly the same voltage until it dies.", o: ["Mercury cell: no ion concentration changes", "It is a fuel cell", "It is rechargeable", "It uses a salt bridge"], a: 0, c: "battery", why: "In the <b>mercury cell</b> no ion's concentration changes in the overall reaction." },
      { s: "The galvanised roof sheet does not rust even at scratches.", o: ["Zinc corrodes in place of iron", "Zinc stops all air", "Iron becomes a non-metal", "Paint covers the scratch"], a: 0, c: "corr", why: "Zinc is the <b>sacrificial anode</b>." }
    ]
  }
});
