/* Answer Writing Lab · Class X Social Science. Original questions and answers. */
NFWrite.register({
  slug: "x-sst", cls: "X", subject: "Social Science (SST)",
  intro: "SST answers score with clear points, the right facts (names, dates, places) and a short explanation for each point. Long story-like paragraphs lose marks because the points get buried.",
  words: { 3: "60–80", 5: "120–150" },
  rules: [
    { t: "Points, not stories", b: "Write numbered points with a <b>short heading</b>. One point per mark; for 5 marks, write five points." },
    { t: "Add a fact to each point", b: "A date, name or place makes a point complete: 'Salt March, 12 March 1930, Sabarmati to Dandi'." },
    { t: "Geography: link to places", b: "Name the <b>states or regions</b>: 'over-irrigation in Punjab and Haryana'." },
    { t: "Civics: examples from India", b: "Explain a concept with an Indian example: horizontal power sharing → legislature, executive, judiciary." },
    { t: "Economics: compare clearly", b: "For 'compare' or 'distinguish', a table with a Basis column is best." },
    { t: "Keep to the word limit", b: "3 marks ≈ 60–80 words; 5 marks ≈ 120–150 words. Extra length does not add marks." }
  ],
  questions: [
    {
      id: "q1", ch: "sst10-his1", chTitle: "The Rise of Nationalism in Europe", marks: 3, cmd: "Explain",
      q: "Explain how culture played an important role in creating the idea of the nation in Europe.",
      ask: "Three ways: Romanticism, folk culture (songs, poetry, dances), and language, each with an example.",
      points: [
        { p: "Romanticism: emotion and a shared past, rather than reason, as the basis of a nation", m: 1, k: ["romantic"] },
        { p: "Folk culture: folk songs, poetry and dances to recover the true spirit of the nation (e.g. Grimm brothers, Herder)", m: 1, k: ["folk", "grimm", "herder"] },
        { p: "Language: e.g. Polish used as a weapon of resistance against Russian rule", m: 1, k: ["language", "polish"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Culture is very important for nationalism. People of Europe loved their culture and fought for their nation. Music and art helped.</p>",
          notes: ["'Music and art helped' points vaguely at culture: 1 mark.", "No specific movement, person or example."] },
        good: { score: 2, text: "<p><b>1. Romanticism:</b> artists and poets focused on emotions and the past.</p><p><b>2. Language:</b> after Russia occupied Poland, Polish was used as a symbol of resistance.</p><p><b>3. Paintings:</b> nations were shown as female figures.</p>",
          notes: ["Romanticism and language are correct: 2 marks.", "Allegory (female figures) is about <b>visualising</b> the nation, a different topic. Use <b>folk culture</b> (Grimm brothers' folk tales) instead."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\"><b>1. Romanticism:</b> this cultural movement stressed emotion, intuition and a shared heritage instead of reason, creating a sense of a common national past.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. Folk culture:</b> thinkers like Herder said the true spirit of a nation lay in its common people; the Grimm brothers collected German folk tales to build a national identity.</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Language:</b> in Russian-occupied Poland, Polish was used in church gatherings and education as a weapon of national resistance.</span></p>",
          notes: ["Three distinct cultural channels.", "Each has a named example (Herder, Grimm brothers, Poland)."] }
      },
      mistakes: ["Writing about wars or unification instead of culture.", "No examples.", "Mixing in allegory, which answers a different question."],
      tip: "Culture = Romanticism + Folk culture + Language. One example each."
    },
    {
      id: "q2", ch: "sst10-his2", chTitle: "Nationalism in India", marks: 5, cmd: "Describe",
      q: "Describe the Salt March. Why did salt become a powerful symbol to unite the nation?",
      ask: "Background (Gandhiji's letter to Irwin), the march (dates, route, volunteers), the breaking of the law, and why salt united people.",
      points: [
        { p: "Background: 31 January 1930 letter to Viceroy Irwin with eleven demands, including abolition of the salt tax", m: 1, k: ["irwin", "eleven", "11 demands"] },
        { p: "March began 12 March 1930 from Sabarmati Ashram with 78 volunteers", m: 1, k: ["sabarmati", "78", "12 march"] },
        { p: "Walked about 240 miles to Dandi in 24 days; broke the salt law on 6 April 1930", m: 1, k: ["dandi", "240", "6 april"] },
        { p: "Start of the Civil Disobedience Movement; people broke salt law and boycotted foreign goods", m: 1, k: ["civil disobedience"] },
        { p: "Salt was consumed by rich and poor alike; a tax on it hurt everyone, so it united all classes", m: 1, k: ["rich and poor", "everyone", "essential", "all classes"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>Gandhiji started the Salt March to protest against the salt tax. He walked to Dandi and made salt. Salt was important because everyone uses it.</p>",
          notes: ["Protest against salt tax and 'everyone uses it': 2 marks.", "No dates, no starting point, no number of volunteers, no link to Civil Disobedience."] },
        good: { score: 4, text: "<p><b>1. Letter to Irwin:</b> in January 1930 Gandhiji sent eleven demands to Viceroy Irwin.</p><p><b>2. The march:</b> on 12 March 1930 he set out from Sabarmati Ashram with 78 volunteers.</p><p><b>3. At Dandi:</b> he reached Dandi on 6 April and broke the salt law by making salt.</p><p><b>4. Civil Disobedience:</b> this began the Civil Disobedience Movement.</p>",
          notes: ["Four well-supported points: 4 marks.", "The second part of the question, <b>why salt was a powerful symbol</b>, is unanswered."] },
        full: { score: 5, text: "<p><span class=\"mp\" data-p=\"1\"><b>1. Background:</b> on 31 January 1930, Gandhiji sent a letter to Viceroy Irwin with eleven demands, the most important being the abolition of the salt tax.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. The march:</b> when the demands were ignored, he set out on 12 March 1930 from Sabarmati Ashram with 78 trusted volunteers.</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Breaking the law:</b> they walked about 240 miles in 24 days to Dandi, where on 6 April 1930 he ceremonially made salt by boiling sea water.</span></p><p><span class=\"mp\" data-p=\"4\"><b>4. Civil Disobedience:</b> this marked the start of the Civil Disobedience Movement; people across India broke the salt law and boycotted foreign cloth.</span></p><p><span class=\"mp\" data-p=\"5\"><b>5. Why salt:</b> salt was an essential item eaten by the rich and the poor alike. A tax on it hurt everyone, so it became a symbol that could unite all classes against British rule.</span></p>",
          notes: ["Both parts of the question answered.", "Key facts: dates, place, 78 volunteers, 240 miles.", "Five numbered points for five marks."] }
      },
      mistakes: ["Answering only the 'describe' part and skipping the 'why'.", "Wrong dates or starting point.", "Story-style paragraph without points."],
      tip: "Underline every question word ('describe' and 'why') and tick each off as you answer."
    },
    {
      id: "q3", ch: "sst10-geo1", chTitle: "Resources and Development", marks: 3, cmd: "Explain",
      q: "Explain any three human activities that have caused land degradation in India, naming the states affected.",
      ask: "Three activities, each with the states where it is a major cause.",
      points: [
        { p: "Deforestation due to mining: Jharkhand, Chhattisgarh, Madhya Pradesh, Odisha", m: 1, k: ["mining", "jharkhand", "odisha"] },
        { p: "Overgrazing: Gujarat, Rajasthan, Madhya Pradesh, Maharashtra", m: 1, k: ["overgrazing", "gujarat", "rajasthan"] },
        { p: "Over-irrigation causing waterlogging and salinity: Punjab, Haryana, western Uttar Pradesh", m: 1, k: ["irrigation", "waterlogging", "punjab", "haryana"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Land degradation is caused by pollution, cutting of trees and population. It is a big problem in India.</p>",
          notes: ["'Cutting of trees' is close to deforestation: 1 mark.", "No states named, and 'population' is too vague."] },
        good: { score: 2, text: "<p><b>1. Mining:</b> mining sites are abandoned after excavation, in Jharkhand and Odisha.</p><p><b>2. Overgrazing:</b> too much grazing by animals in Gujarat and Rajasthan.</p><p><b>3. Floods:</b> floods wash away the soil.</p>",
          notes: ["Mining and overgrazing with states: 2 marks.", "Floods are a natural process; the question asks for <b>human</b> activities. Use over-irrigation (Punjab, Haryana)."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\"><b>1. Mining:</b> deforestation and deep scars left after mining degrade land in <b>Jharkhand, Chhattisgarh, Madhya Pradesh and Odisha</b>.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. Overgrazing:</b> excessive grazing removes vegetation cover, mainly in <b>Gujarat, Rajasthan, Madhya Pradesh and Maharashtra</b>.</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Over-irrigation:</b> waterlogging raises salinity and alkalinity of the soil in <b>Punjab, Haryana and western Uttar Pradesh</b>.</span></p>",
          notes: ["Three human activities.", "Each linked to the correct states from the textbook."] }
      },
      mistakes: ["Including natural causes (floods, earthquakes).", "Not naming states.", "Matching activities to the wrong states."],
      tip: "Mining → mineral belt states; overgrazing → dry western/central states; over-irrigation → Green Revolution states."
    },
    {
      id: "q4", ch: "sst10-pol1", chTitle: "Power-sharing", marks: 3, cmd: "Distinguish",
      q: "Distinguish between horizontal and vertical distribution of power.",
      ask: "A table: meaning, between whom power is shared, and an Indian example (or the idea of checks and balances).",
      points: [
        { p: "Horizontal: power shared among organs of government at the same level vs vertical: among governments at different levels", m: 1, k: ["same level", "different levels"] },
        { p: "Between legislature, executive and judiciary vs Union, state and local governments", m: 1, k: ["legislature", "union", "local"] },
        { p: "Horizontal creates checks and balances; vertical is federalism / decentralisation", m: 1, k: ["checks and balances", "federal", "decentral"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Horizontal is sharing of power side by side. Vertical is sharing up and down.</p>",
          notes: ["The image is right but too vague: 1 mark.", "Name the organs and the levels."] },
        good: { score: 2, text: "<table><tr><th>Basis</th><th>Horizontal</th><th>Vertical</th></tr><tr><td>Meaning</td><td>Among organs at the same level</td><td>Among different levels of government</td></tr><tr><td>Example</td><td>Legislature, executive, judiciary</td><td>Centre and states</td></tr></table>",
          notes: ["Two correct rows: 2 marks.", "A third basis is needed: horizontal sharing creates <b>checks and balances</b>; vertical sharing is <b>federalism</b>."] },
        full: { score: 3, text: "<table><tr><th>Basis</th><th>Horizontal distribution</th><th>Vertical distribution</th></tr><tr><td>Meaning</td><td><span class=\"mp\" data-p=\"1\">Power shared among different organs of government at the same level</span></td><td>Power shared among governments at different levels</td></tr><tr><td>Shared between</td><td><span class=\"mp\" data-p=\"2\">Legislature, executive and judiciary</span></td><td>Union, state and local governments (panchayats, municipalities)</td></tr><tr><td>Result</td><td><span class=\"mp\" data-p=\"3\">A system of checks and balances: no organ has unlimited power</span></td><td>Federalism: a federal or decentralised government</td></tr></table>",
          notes: ["Three bases with Indian examples.", "Key terms: checks and balances, federalism."] }
      },
      mistakes: ["Vague 'side by side / up and down' without naming organs or levels.", "Including community-government sharing (that is a different form).", "No table."],
      tip: "Horizontal = organs (L-E-J). Vertical = levels (Centre-State-Local)."
    },
    {
      id: "q5", ch: "sst10-eco3", chTitle: "Money and Credit", marks: 3, cmd: "Explain",
      q: "Why are formal sources of credit better than informal sources for poor households? Give three reasons.",
      ask: "Three reasons: interest rates, supervision by the RBI, and terms of credit / debt trap.",
      points: [
        { p: "Lower interest rates than moneylenders", m: 1, k: ["lower interest", "low interest", "interest"] },
        { p: "Supervised by the RBI, which checks that banks lend fairly", m: 1, k: ["rbi", "reserve bank", "supervis"] },
        { p: "Informal lenders impose harsh terms and can trap borrowers in a debt trap", m: 1, k: ["debt trap", "harsh", "terms"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Formal sources are banks. They are safe and good for poor people.</p>",
          notes: ["Names banks as formal sources, but 'safe and good' is not a reason: 1 mark at most.", "Give specific reasons: interest, RBI supervision, terms."] },
        good: { score: 2, text: "<p><b>1. Lower interest:</b> banks charge less interest than moneylenders.</p><p><b>2. RBI control:</b> the RBI supervises banks.</p><p><b>3. Easy to get:</b> banks give loans easily to the poor.</p>",
          notes: ["Points 1 and 2: 2 marks.", "Point 3 is wrong: poor households often find bank loans <b>hard</b> to get (collateral, paperwork). The real third reason is that informal lenders' harsh terms create a <b>debt trap</b>."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\"><b>1. Lower interest:</b> banks and cooperatives charge much lower interest than moneylenders, so more of the borrower's income stays with them.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. RBI supervision:</b> the Reserve Bank of India supervises formal lenders and checks that they lend to small cultivators and small businesses, not only to profit-making ones.</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. No debt trap:</b> informal lenders face no rules and may impose harsh terms, so borrowers end up repaying more than they earn and fall into a debt trap.</span></p>",
          notes: ["Three reasons, each with its effect on poor households.", "Uses the textbook term 'debt trap'."] }
      },
      mistakes: ["Saying bank loans are easy for the poor to get.", "Vague words like 'safe' and 'good'.", "Missing the RBI's role."],
      tip: "Formal credit = cheaper + supervised. Informal credit = costly + unregulated."
    },
    {
      id: "q6", ch: "sst10-eco2", chTitle: "Sectors of the Indian Economy", marks: 5, cmd: "Explain",
      q: "Distinguish between the organised and unorganised sectors, and suggest two ways to protect workers in the unorganised sector.",
      ask: "Three differences (registration and rules, job security and benefits, nature of units) and two protection measures.",
      points: [
        { p: "Organised: registered with the government and follows its rules (Factories Act, Minimum Wages Act) vs unorganised: not registered, rules not followed", m: 1, k: ["registered", "rules"] },
        { p: "Organised: job security, paid leave, provident fund vs unorganised: no security, low pay", m: 1, k: ["security", "paid leave", "provident"] },
        { p: "Unorganised: small, scattered units, often outside government control", m: 1, k: ["small", "scattered"] },
        { p: "Protection 1: enforce minimum wages and fixed working hours", m: 1, k: ["minimum wage", "working hours"] },
        { p: "Protection 2: cheap loans, health and social security schemes for small producers and workers", m: 1, k: ["loan", "health", "social security", "scheme"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>The organised sector is good and the unorganised sector is bad. Workers in the organised sector get a good salary. The government should help unorganised workers.</p>",
          notes: ["Salary contrast and 'government should help': 2 marks.", "'Good' and 'bad' are not differences. Name registration, rules and benefits.", "Help must be specific: minimum wages, loans, social security."] },
        good: { score: 4, text: "<table><tr><th>Basis</th><th>Organised</th><th>Unorganised</th></tr><tr><td>Registration</td><td>Registered, follows rules</td><td>Not registered</td></tr><tr><td>Job security</td><td>Secure, with benefits</td><td>No security</td></tr><tr><td>Units</td><td>Large</td><td>Small and scattered</td></tr></table><p><b>Protection:</b> the government should fix minimum wages.</p>",
          notes: ["Three differences and one protection measure: 4 marks.", "A second protection measure is needed, e.g. cheap loans or health and pension schemes."] },
        full: { score: 5, text: "<table><tr><th>Basis</th><th>Organised sector</th><th>Unorganised sector</th></tr><tr><td>Registration and rules</td><td><span class=\"mp\" data-p=\"1\">Registered with the government; follows laws like the Factories Act and Minimum Wages Act</span></td><td>Largely outside government control; rules rarely followed</td></tr><tr><td>Terms of work</td><td><span class=\"mp\" data-p=\"2\">Regular jobs with paid leave, provident fund and medical benefits</span></td><td>Low pay, irregular work, no job security</td></tr><tr><td>Nature of units</td><td>Larger enterprises with fixed workplaces</td><td><span class=\"mp\" data-p=\"3\">Small, scattered units, often family-run</span></td></tr></table><p><b>Protecting unorganised workers</b></p><p><span class=\"mp\" data-p=\"4\">1. The government should enforce <b>minimum wages</b> and fixed working hours.</span></p><p><span class=\"mp\" data-p=\"5\">2. It should provide <b>cheap loans</b> to small producers and <b>health and social security schemes</b> for workers.</span></p>",
          notes: ["Table for the differences, points for the suggestions.", "Specific laws and benefits named.", "Both parts of the question answered."] }
      },
      mistakes: ["Value words ('good', 'bad') instead of differences.", "Only one protection measure.", "Mixing the sector classification (primary/secondary/tertiary) into this question."],
      tip: "Organised = registered + rules + benefits. Unorganised = none of these."
    }
  ]
});
