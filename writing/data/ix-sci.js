/* Answer Writing Lab · Class IX Science. Original questions; every figure recomputed. */
NFWrite.register({
  slug: "ix-sci", cls: "IX", subject: "Science",
  intro: "Class 9 Science builds the habits board exams reward: exact definitions, labelled diagrams, observation-and-conclusion pairs, and numericals with formula and units.",
  words: { 3: "50–70", 5: "100–140" },
  rules: [
    { t: "Define precisely", b: "Use the textbook definition: 'displacement is the <b>shortest distance</b> between initial and final positions, <b>with direction</b>'." },
    { t: "Formula and units", b: "Numericals: formula → values with units → answer with SI unit (m, J, W)." },
    { t: "Observation → conclusion", b: "For experiments, pair each <b>observation</b> with the <b>conclusion</b> drawn from it." },
    { t: "Tables for differences", b: "Plant vs animal cell, distance vs displacement: use a table with a Basis column." },
    { t: "Everyday examples", b: "Link laws to daily life: inertia → passengers jerk forward when a bus brakes." },
    { t: "Labelled diagrams", b: "A neat, labelled diagram can earn marks on its own. Use a pencil and straight label lines." }
  ],
  questions: [
    {
      id: "q1", ch: "ix-ch2", chTitle: "Cell: The Building Block of Life", marks: 3, cmd: "Distinguish",
      q: "Give three differences between a plant cell and an animal cell.",
      ask: "A table: cell wall, vacuole, plastids (or centrioles/shape).",
      points: [
        { p: "Cell wall: present (cellulose) vs absent", m: 1, k: ["cell wall", "cellulose"] },
        { p: "Vacuole: one large central vacuole vs small or temporary vacuoles", m: 1, k: ["vacuole"] },
        { p: "Plastids: present (chloroplasts) vs absent", m: 1, k: ["plastid", "chloroplast"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Plant cells are green and animal cells are not. Plant cells are bigger.</p>",
          notes: ["'Green' points at chloroplasts: 1 mark at most.", "Size is not a reliable textbook difference.", "No table."] },
        good: { score: 2, text: "<table><tr><th>Basis</th><th>Plant cell</th><th>Animal cell</th></tr><tr><td>Cell wall</td><td>Present</td><td>Absent</td></tr><tr><td>Chloroplast</td><td>Present</td><td>Absent</td></tr><tr><td>Nucleus</td><td>Present</td><td>Present</td></tr></table>",
          notes: ["Two correct rows: 2 marks.", "Both cells have a nucleus, so row 3 is not a difference. Use the <b>vacuole</b> instead."] },
        full: { score: 3, text: "<table><tr><th>Basis</th><th>Plant cell</th><th>Animal cell</th></tr><tr><td>Cell wall</td><td><span class=\"mp\" data-p=\"1\">Present, made of cellulose, outside the membrane</span></td><td>Absent</td></tr><tr><td>Vacuole</td><td><span class=\"mp\" data-p=\"2\">One large central vacuole</span></td><td>Small, temporary vacuoles, if any</td></tr><tr><td>Plastids</td><td><span class=\"mp\" data-p=\"3\">Present (e.g. chloroplasts for photosynthesis)</span></td><td>Absent</td></tr></table>",
          notes: ["Three textbook differences.", "Brief detail (cellulose, central, photosynthesis) adds precision."] }
      },
      mistakes: ["Using features both cells share (nucleus, membrane).", "Saying animal cells have no vacuoles at all.", "No table."],
      tip: "Plant cells have three extras: Wall, big Vacuole, Plastids."
    },
    {
      id: "q2", ch: "ix-ch4", chTitle: "Describing Motion Around Us", marks: 3, cmd: "Calculate",
      q: "Anu walks 3 m east and then 4 m north. Find the distance she covered and her displacement. Which quantity is a vector?",
      ask: "Distance (path length), displacement (straight line from start to end, using Pythagoras), and which one has direction.",
      points: [
        { p: "Distance = 3 + 4 = 7 m", m: 1, k: ["7 m"] },
        { p: "Displacement = √(3² + 4²) = 5 m, towards the north-east", m: 1, k: ["5 m"] },
        { p: "Displacement is a vector (has magnitude and direction); distance is a scalar", m: 1, k: ["vector"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Distance = 7 m. Displacement = 7 m.</p>",
          notes: ["Distance is right: 1 mark.", "Displacement is the straight line from start to end, not the path: use Pythagoras.", "The vector part is unanswered."] },
        good: { score: 2, text: "<p>Distance = 3 + 4 = 7 m</p><p>Displacement = √(9 + 16) = 5 m</p>",
          notes: ["Both values right: 2 marks.", "Answer the third part: <b>displacement</b> is the vector; add its direction (north-east)."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\"><b>Distance</b> = total path length = 3 m + 4 m = <b>7 m</b></span></p><p><span class=\"mp\" data-p=\"2\"><b>Displacement</b> = straight-line distance from start to end = √(3² + 4²) = √25 = <b>5 m</b>, towards the north-east.</span></p><p><span class=\"mp\" data-p=\"3\"><b>Displacement is a vector</b> because it has both magnitude and direction; distance is a scalar.</span></p>",
          notes: ["Each quantity defined in a phrase before its value.", "Direction given with displacement.", "All three parts answered."] }
      },
      mistakes: ["Taking displacement equal to distance.", "Forgetting direction for displacement.", "No units."],
      tip: "Displacement can never be more than distance."
    },
    {
      id: "q3", ch: "ix-ch6", chTitle: "How Forces Affect Motion", marks: 3, cmd: "Explain",
      q: "Why do passengers in a bus fall forward when the driver applies the brakes suddenly? Name the property involved.",
      ask: "Name inertia (of motion), explain what happens to the bus vs the passenger's upper body, and link to Newton's first law.",
      points: [
        { p: "Property: inertia (of motion)", m: 1, k: ["inertia"] },
        { p: "The bus and the feet stop, but the upper body tends to keep moving forward", m: 1, k: ["feet", "upper body", "keep moving", "continue"] },
        { p: "Newton's first law: a body continues in its state of motion unless an external force acts", m: 1, k: ["first law", "state of motion", "external force"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Passengers fall forward because the bus stops and there is a jerk.</p>",
          notes: ["Describes what happens, not why. The property (inertia) is not named.", "1 mark for noting the sudden stop."] },
        good: { score: 2, text: "<p>This is due to inertia of motion. When the bus stops, the passengers' bodies want to keep moving, so they fall forward.</p>",
          notes: ["Inertia named and basic reason: 2 marks.", "Be precise: the <b>feet</b> stop with the bus, but the <b>upper body</b> keeps moving. Link to Newton's first law."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\">The property involved is <b>inertia of motion</b>.</span></p><p><span class=\"mp\" data-p=\"2\">When the brakes are applied, the bus and the passengers' feet (in contact with the floor) stop, but the upper part of the body tends to keep moving forward, so passengers lean forward.</span></p><p><span class=\"mp\" data-p=\"3\">This follows <b>Newton's first law</b>: a body continues in its state of rest or uniform motion unless an external force acts on it.</span></p>",
          notes: ["Feet vs upper body explains the tilt.", "Property and law both named."] }
      },
      mistakes: ["Saying 'a force pushes them forward'.", "Naming inertia of rest instead of inertia of motion.", "Not linking to the first law."],
      tip: "Bus starts → fall backward (inertia of rest). Bus stops → fall forward (inertia of motion)."
    },
    {
      id: "q4", ch: "ix-ch7", chTitle: "Work, Energy and Simple Machines", marks: 3, cmd: "Calculate",
      q: "A force of 50 N pushes a trolley 4 m in the direction of the force in 8 s. Calculate the work done and the power.",
      ask: "W = F × s, then P = W ÷ t, with units.",
      points: [
        { p: "W = F × s = 50 N × 4 m", m: 1, k: ["50 × 4", "f × s", "f x s"] },
        { p: "W = 200 J", m: 1, k: ["200 j"] },
        { p: "P = W ÷ t = 200 J ÷ 8 s = 25 W", m: 1, k: ["25 w"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Work = 50 × 4 = 200. Power = 200 × 8 = 1600</p>",
          notes: ["Work value right but no unit: 1 mark.", "Power is work <b>divided</b> by time, not multiplied."] },
        good: { score: 2, text: "<p>W = F × s = 50 × 4 = 200 J</p><p>P = W ÷ t = 200 ÷ 8 = 25</p>",
          notes: ["Work with unit and power formula: 2 marks.", "Power needs its unit: <b>25 W</b>."] },
        full: { score: 3, text: "<p><b>Given:</b> F = 50 N, s = 4 m, t = 8 s</p><p><span class=\"mp\" data-p=\"1\">Work done, W = F × s = 50 N × 4 m</span><br><span class=\"mp\" data-p=\"2\">= <b>200 J</b></span></p><p><span class=\"mp\" data-p=\"3\">Power, P = W ÷ t = 200 J ÷ 8 s = <b>25 W</b></span></p>",
          notes: ["Given data, formulas, units on every answer."] }
      },
      mistakes: ["Multiplying by time for power.", "Missing units (J, W).", "Ignoring 'in the direction of the force' (needed for W = F × s)."],
      tip: "1 J = 1 N × 1 m; 1 W = 1 J per second."
    },
    {
      id: "q5", ch: "ix-ch8", chTitle: "Journey Inside the Atom", marks: 5, cmd: "Describe",
      q: "Describe Rutherford's alpha-particle scattering experiment. Give its observations and the conclusions drawn from them.",
      ask: "Set-up, then each observation paired with its conclusion, and the resulting model of the atom.",
      points: [
        { p: "Set-up: fast-moving alpha particles directed at a very thin gold foil", m: 1, k: ["gold foil", "alpha"] },
        { p: "Most passed straight through → most of the atom is empty space", m: 1, k: ["empty space", "straight through"] },
        { p: "Some deflected by small angles → positive charge concentrated in a small region", m: 1, k: ["deflect", "positive charge"] },
        { p: "Very few (about 1 in 12,000) bounced back → a tiny, dense, positively charged nucleus", m: 1, k: ["bounced", "rebound", "nucleus", "12,000", "12000"] },
        { p: "Model: electrons revolve around the nucleus in circular paths", m: 1, k: ["revolve", "orbit"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>Rutherford threw alpha particles at gold. Most went through and some came back. He said the atom has a nucleus.</p>",
          notes: ["Two observations and the nucleus: 2 marks.", "Observations are not paired with conclusions; 'empty space' and 'small deflections' are missing.", "Use 'thin gold foil', not 'gold'."] },
        good: { score: 4, text: "<p>Rutherford bombarded a thin gold foil with alpha particles.</p><p>1. Most passed straight through, so most of the atom is empty.</p><p>2. Some were deflected, so there is positive charge in the atom.</p><p>3. Very few bounced back, so there is a small dense nucleus.</p>",
          notes: ["Set-up and three observation–conclusion pairs: 4 marks.", "Point 2 should say the positive charge is <b>concentrated in a small space</b>.", "End with the model: electrons revolve around the nucleus."] },
        full: { score: 5, text: "<p><span class=\"mp\" data-p=\"1\"><b>Set-up:</b> Rutherford directed fast-moving alpha particles (He²⁺) at a very thin gold foil and observed them on a screen around it.</span></p><p><span class=\"mp\" data-p=\"2\"><b>1.</b> Most alpha particles passed straight through → most of the space inside an atom is <b>empty</b>.</span></p><p><span class=\"mp\" data-p=\"3\"><b>2.</b> Some were deflected by small angles → the positive charge occupies a <b>very small space</b> in the atom.</span></p><p><span class=\"mp\" data-p=\"4\"><b>3.</b> Very few (about 1 in 12,000) bounced back → all the positive charge and almost all the mass are concentrated in a tiny, dense <b>nucleus</b>.</span></p><p><span class=\"mp\" data-p=\"5\"><b>Model:</b> the atom has a small positively charged nucleus at the centre, and electrons revolve around it in circular paths.</span></p>",
          notes: ["Each observation paired with its conclusion using '→'.", "Precise numbers and terms (1 in 12,000, dense nucleus).", "Ends with the model of the atom."] }
      },
      mistakes: ["Listing observations without conclusions.", "Saying most particles bounced back.", "Forgetting the final model."],
      tip: "Through → empty; deflected → small positive region; bounced → tiny dense nucleus."
    },
    {
      id: "q6", ch: "ix-ch10", chTitle: "Sound", marks: 3, cmd: "Calculate",
      q: "A boy shouts near a cliff and hears the echo after 2 s. If the speed of sound in air is 340 m s⁻¹, how far is the cliff?",
      ask: "The sound travels to the cliff and back, so distance = (speed × time) ÷ 2.",
      points: [
        { p: "Sound covers twice the distance (to the cliff and back): 2d = v × t", m: 1, k: ["2d", "twice", "÷ 2", "/2", "and back"] },
        { p: "2d = 340 × 2 = 680 m", m: 1, k: ["680"] },
        { p: "d = 340 m", m: 1, k: ["340 m"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Distance = speed × time = 340 × 2 = 680 m</p>",
          notes: ["Correct total path: 1 mark.", "The echo travels to the cliff <b>and back</b>, so the cliff is half of 680 m."] },
        good: { score: 2, text: "<p>Total distance travelled by sound = 340 × 2 = 680 m. So the cliff is at 680 ÷ 2 = 340.</p>",
          notes: ["Correct method and value: 2 marks.", "Unit missing on the final answer: <b>340 m</b>. State why you divide by 2."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\">The sound travels to the cliff and back, so it covers <b>twice</b> the distance d: 2d = v × t</span></p><p><span class=\"mp\" data-p=\"2\">2d = 340 m s⁻¹ × 2 s = 680 m</span></p><p><span class=\"mp\" data-p=\"3\">d = 680 ÷ 2 = <b>340 m</b></span></p>",
          notes: ["Reason for halving stated first.", "Units throughout."] }
      },
      mistakes: ["Forgetting to halve the distance.", "Missing units.", "Using the speed of light."],
      tip: "Echo questions: always ask 'there and back?' Divide by 2."
    }
  ]
});
