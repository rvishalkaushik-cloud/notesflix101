/* Answer Writing Lab · Class XI Legal Studies. Original questions and answers. */
NFWrite.register({
  slug: "xi-legal", cls: "XI", subject: "Legal Studies",
  intro: "Class XI Legal Studies builds the habit of legal writing: the right term, the Article or Act, a leading case, and a clear structure.",
  rules: [
    { t: "Cite the source", b: "Mention the <b>Article, Act or case</b> where it fits: 'Article 32', 'Family Courts Act, 1984', '<i>Kesavananda Bharati</i> (1973)'." },
    { t: "One feature per heading", b: "Each feature or point gets its own <b>heading</b> and a line of explanation." },
    { t: "Tables for differences", b: "Basis column, the same basis on both sides." },
    { t: "Indian examples", b: "Link to Indian institutions: Parliament, Supreme Court, High Courts, Lok Adalats." },
    { t: "Precise vocabulary", b: "'Locus standi', 'judicial review', 'separation of powers' earn marks; 'the court can check things' does not." },
    { t: "Conclude briefly", b: "One closing line connecting the points to the question shows understanding." }
  ],
  questions: [
    {
      id: "q1", ch: "legal11-const", chTitle: "Basic Features of the Constitution", marks: 4, cmd: "Explain",
      q: "Explain any four basic features of the Constitution of India.",
      ask: "Four features with a heading and a line each; one Indian detail per feature.",
      points: [
        { p: "Written and lengthy Constitution", m: 1, k: ["written", "lengthy"] },
        { p: "Federal system with a unitary bias / strong Centre", m: 1, k: ["federal", "unitary"] },
        { p: "Parliamentary form of government", m: 1, k: ["parliamentary"] },
        { p: "Fundamental Rights / independent judiciary / secularism / universal adult franchise (any one)", m: 1, k: ["fundamental rights", "judiciary", "secular", "franchise"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>The Constitution of India is very good. It gives rights to people and was made by Dr B.R. Ambedkar. It came into force in 1950.</p>",
          notes: ["'Gives rights' points at Fundamental Rights: 1 mark.", "Facts about who drafted it and when are not features.", "No headings."] },
        good: { score: 3, text: "<p><b>1. Written Constitution:</b> it is a written document.</p><p><b>2. Federal system:</b> powers are divided between the Centre and states.</p><p><b>3. Fundamental Rights:</b> citizens get basic rights.</p><p><b>4. Preamble:</b> it has a Preamble.</p>",
          notes: ["Three valid features: 3 marks.", "'It has a Preamble' is not a feature in itself. Use parliamentary government or an independent judiciary.", "Add detail: e.g. 'unitary bias: strong Centre, single citizenship'."] },
        full: { score: 4, text: "<p><span class=\"mp\" data-p=\"1\"><b>1. Written and lengthy:</b> one of the longest written constitutions in the world, with detailed provisions on the Centre, states and citizens.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. Federal with a unitary bias:</b> powers are divided between the Union and the states, but the Centre is stronger (single citizenship, emergency powers).</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Parliamentary government:</b> the executive (Council of Ministers) is collectively responsible to the Lok Sabha.</span></p><p><span class=\"mp\" data-p=\"4\"><b>4. Independent judiciary:</b> the Supreme Court and High Courts can review laws and protect Fundamental Rights (judicial review).</span></p>",
          notes: ["Four distinct features, each explained with an Indian detail.", "Legal vocabulary: unitary bias, collective responsibility, judicial review."] }
      },
      mistakes: ["Writing historical facts instead of features.", "One-word features.", "Calling India purely federal."],
      tip: "Features describe how the Constitution works, not when or by whom it was made."
    },
    {
      id: "q2", ch: "legal11-jud", chTitle: "Judiciary", marks: 3, cmd: "Explain",
      q: "Explain the hierarchy of courts in India.",
      ask: "Three levels from top to bottom, each with its Article or role.",
      points: [
        { p: "Supreme Court at the top (Article 124): highest court of appeal; guardian of the Constitution", m: 1, k: ["supreme court", "124"] },
        { p: "High Courts in states (Article 214): appeals from lower courts; writs under Article 226", m: 1, k: ["high court", "214", "226"] },
        { p: "Subordinate courts: district and sessions courts, civil and criminal courts below them", m: 1, k: ["subordinate", "district", "sessions"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>India has many courts. The Supreme Court is the biggest court in Delhi.</p>",
          notes: ["Supreme Court at the top: 1 mark.", "High Courts and subordinate courts are missing."] },
        good: { score: 2, text: "<p><b>1. Supreme Court:</b> the highest court.</p><p><b>2. High Courts:</b> in each state.</p><p><b>3. Lok Adalats:</b> settle cases quickly.</p>",
          notes: ["Supreme Court and High Courts: 2 marks.", "Lok Adalats are an ADR mechanism, not a level of the regular court hierarchy. Use <b>subordinate courts</b> (district and sessions courts)."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\"><b>1. Supreme Court (Article 124):</b> the apex court; the final court of appeal and guardian of the Constitution, with writ jurisdiction under Article 32.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. High Courts (Article 214):</b> the highest courts in the states; they hear appeals from subordinate courts and issue writs under Article 226.</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Subordinate courts:</b> district courts (civil) and sessions courts (criminal) at the district level, with lower civil and magistrate courts below them.</span></p>",
          notes: ["Top-to-bottom order with Articles.", "Each level's role is stated."] }
      },
      mistakes: ["Including Lok Adalats or tribunals as a level of the hierarchy.", "Missing Articles.", "Wrong order."],
      tip: "Draw a quick pyramid in rough before writing: SC → HC → District/Sessions → lower courts."
    },
    {
      id: "q3", ch: "legal11-juris", chTitle: "Jurisprudence, Nature and Sources of Law", marks: 3, cmd: "Distinguish",
      q: "Distinguish between custom and legislation as sources of law on three bases.",
      ask: "A table: origin, form (written or unwritten), and how it changes.",
      points: [
        { p: "Origin: grows from long practice of the community vs made deliberately by a legislature", m: 1, k: ["practice", "legislature", "parliament"] },
        { p: "Form: usually unwritten vs written and codified", m: 1, k: ["unwritten", "written", "codified"] },
        { p: "Change: evolves slowly vs can be amended quickly by the legislature", m: 1, k: ["slow", "amend", "quick"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Custom is old and legislation is new. Custom is followed in villages.</p>",
          notes: ["'Old vs new' hints at origin: 1 mark at most.", "'Followed in villages' is not a basis of difference."] },
        good: { score: 2, text: "<table><tr><th>Basis</th><th>Custom</th><th>Legislation</th></tr><tr><td>Origin</td><td>Long practice of people</td><td>Made by Parliament</td></tr><tr><td>Form</td><td>Unwritten</td><td>Written</td></tr><tr><td>Importance</td><td>Less</td><td>More</td></tr></table>",
          notes: ["Origin and form rows: 2 marks.", "'Importance' is not a real basis; use <b>how it changes</b>: custom evolves slowly, legislation can be amended."] },
        full: { score: 3, text: "<table><tr><th>Basis</th><th>Custom</th><th>Legislation</th></tr><tr><td>Origin</td><td><span class=\"mp\" data-p=\"1\">Grows out of long, continuous and accepted practice of a community</span></td><td>Deliberately made by a competent legislature</td></tr><tr><td>Form</td><td><span class=\"mp\" data-p=\"2\">Usually unwritten</span></td><td>Written and codified in Acts</td></tr><tr><td>Change</td><td><span class=\"mp\" data-p=\"3\">Evolves slowly over time</span></td><td>Can be amended or repealed quickly</td></tr></table>",
          notes: ["Three meaningful bases.", "Precise phrases: 'competent legislature', 'codified'."] }
      },
      mistakes: ["Opinion bases like 'importance'.", "Saying custom is never recognised by courts (valid customs are).", "Paragraph instead of table."],
      tip: "Custom = from the people, over time. Legislation = from the legislature, on purpose."
    },
    {
      id: "q4", ch: "legal11-polinst", chTitle: "Introduction to Political Institutions", marks: 3, cmd: "Distinguish",
      q: "Distinguish between the parliamentary and presidential forms of government.",
      ask: "A table: relation between executive and legislature, head of state vs head of government, and tenure of the executive.",
      points: [
        { p: "Executive is part of and responsible to the legislature vs separate from the legislature (separation of powers)", m: 1, k: ["responsible", "separate", "separation"] },
        { p: "Nominal head and real head are different (President and PM) vs one person is both (President)", m: 1, k: ["nominal", "real", "head"] },
        { p: "Executive can be removed by a no-confidence motion vs fixed tenure (removal only by impeachment)", m: 1, k: ["no-confidence", "no confidence", "fixed", "impeach"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>India has parliamentary government and the USA has presidential government.</p>",
          notes: ["Examples only; 1 mark at most for correct examples.", "No basis of difference."] },
        good: { score: 2, text: "<table><tr><th>Basis</th><th>Parliamentary</th><th>Presidential</th></tr><tr><td>Executive</td><td>Responsible to legislature</td><td>Not responsible</td></tr><tr><td>Head</td><td>President and PM</td><td>President only</td></tr><tr><td>Example</td><td>India</td><td>USA</td></tr></table>",
          notes: ["Two correct rows: 2 marks.", "'Example' is not a basis; use <b>tenure</b>: no-confidence motion vs fixed term."] },
        full: { score: 3, text: "<table><tr><th>Basis</th><th>Parliamentary (e.g. India)</th><th>Presidential (e.g. USA)</th></tr><tr><td>Executive and legislature</td><td><span class=\"mp\" data-p=\"1\">Ministers are members of and collectively responsible to the legislature</span></td><td>Executive is separate from the legislature (separation of powers)</td></tr><tr><td>Heads</td><td><span class=\"mp\" data-p=\"2\">Nominal head (President) and real head (Prime Minister) are different</span></td><td>The President is both head of state and of government</td></tr><tr><td>Tenure</td><td><span class=\"mp\" data-p=\"3\">Government can be removed by a no-confidence motion</span></td><td>Fixed term; removal only by impeachment</td></tr></table>",
          notes: ["Three real bases, examples placed in the header.", "Key terms: collective responsibility, separation of powers, impeachment."] }
      },
      mistakes: ["Using 'example' as a basis.", "Saying the Indian President is the real executive.", "Missing collective responsibility."],
      tip: "Parliamentary = fusion and responsibility. Presidential = separation and fixed term."
    },
    {
      id: "q5", ch: "legal11-jud", chTitle: "Judiciary", marks: 4, cmd: "Explain",
      q: "What is Public Interest Litigation (PIL)? Explain three of its features.",
      ask: "Meaning, then three features: relaxed locus standi, letters treated as petitions, and the Articles used (or a leading case).",
      points: [
        { p: "Meaning: litigation in a court to protect public interest or the rights of those who cannot approach the court themselves", m: 1, k: ["public interest", "cannot approach"] },
        { p: "Relaxation of locus standi: any public-spirited person can file", m: 1, k: ["locus standi", "any person", "public-spirited"] },
        { p: "Epistolary jurisdiction: a letter or postcard can be treated as a petition", m: 1, k: ["letter", "postcard", "epistolary"] },
        { p: "Filed under Article 32 (Supreme Court) or Article 226 (High Courts); recognised in <i>S.P. Gupta v. Union of India</i> (1981)", m: 1, k: ["article 32", "226", "s.p. gupta", "sp gupta"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>PIL means a case filed for the public. Anyone can file it. It is free.</p>",
          notes: ["Meaning roughly right: 1 mark.", "'Anyone can file' points at locus standi but needs the term.", "'It is free' is not a recognised feature."] },
        good: { score: 3, text: "<p>PIL is litigation filed in court to protect public interest.</p><p><b>1. Relaxed locus standi:</b> any public-spirited person can file it for others.</p><p><b>2. Letter petitions:</b> even a letter to the court can be treated as a PIL.</p><p><b>3. Quick justice:</b> PILs are decided fast.</p>",
          notes: ["Meaning and two features: 3 marks.", "'Decided fast' is not a feature. Use the Articles (32 and 226) or the leading case <i>S.P. Gupta</i> (1981)."] },
        full: { score: 4, text: "<p><span class=\"mp\" data-p=\"1\"><b>Meaning:</b> PIL is litigation filed in a court to protect public interest or the rights of people who, because of poverty or disadvantage, cannot approach the court themselves.</span></p><p><span class=\"mp\" data-p=\"2\"><b>1. Relaxed locus standi:</b> the rule that only the affected person can sue is relaxed; any public-spirited person or group may file.</span></p><p><span class=\"mp\" data-p=\"3\"><b>2. Epistolary jurisdiction:</b> a letter or postcard to the court can be treated as a writ petition.</span></p><p><span class=\"mp\" data-p=\"4\"><b>3. Constitutional basis:</b> filed under Article 32 in the Supreme Court or Article 226 in a High Court; the idea was firmly recognised in <i>S.P. Gupta v. Union of India</i> (1981).</span></p>",
          notes: ["Meaning covers who benefits.", "Legal terms: locus standi, epistolary jurisdiction.", "Articles and a case give legal depth."] }
      },
      mistakes: ["Saying PIL can be filed for personal disputes.", "Missing the term 'locus standi'.", "No Article or case."],
      tip: "PIL = public, not private. If the case only helps the petitioner, it is not a PIL."
    },
    {
      id: "q6", ch: "legal11-fam", chTitle: "Family Justice System", marks: 6, cmd: "Explain",
      q: "Explain the objectives and main features of Family Courts under the Family Courts Act, 1984.",
      ask: "Objective, where they are set up, the emphasis on conciliation, procedure, legal representation, and jurisdiction.",
      points: [
        { p: "Act: Family Courts Act, 1984", m: 1, k: ["1984"] },
        { p: "Objective: speedy settlement of family disputes through conciliation, preserving the family", m: 1, k: ["speedy", "conciliation", "preserv"] },
        { p: "Set up by state governments, in consultation with the High Court, in cities with a population over 10 lakh", m: 1, k: ["10 lakh", "one million", "high court", "state government"] },
        { p: "Duty to first attempt conciliation; counsellors and welfare experts assist", m: 1, k: ["counsel", "conciliation", "settlement"] },
        { p: "Informal procedure; parties not entitled to a lawyer as of right", m: 1, k: ["lawyer", "legal practitioner", "informal"] },
        { p: "Jurisdiction: marriage, divorce, maintenance, custody and guardianship, matrimonial property", m: 1, k: ["maintenance", "custody", "divorce"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>Family courts are special courts for family matters like divorce. They help in solving problems in the family quickly.</p>",
          notes: ["Family matters and speedy resolution: 2 marks.", "No Act, no conciliation, no features of procedure or setup."] },
        good: { score: 4, text: "<p>Family Courts were set up under the Family Courts Act, 1984.</p><p><b>Objective:</b> speedy settlement of family disputes.</p><p><b>Features:</b> (i) they try conciliation first; (ii) they deal with divorce, maintenance and custody; (iii) they are set up in all districts.</p>",
          notes: ["Act, objective, conciliation and jurisdiction: 4 marks.", "They are set up mainly in cities with a population over <b>10 lakh</b>, by states in consultation with the High Court, not in all districts.", "Add the rule on lawyers: not allowed as of right."] },
        full: { score: 6, text: "<p><span class=\"mp\" data-p=\"1\">Family Courts are established under the <b>Family Courts Act, 1984</b>.</span></p><p><span class=\"mp\" data-p=\"2\"><b>Objective:</b> to promote conciliation and secure the speedy settlement of disputes relating to marriage and family affairs, preserving the family where possible.</span></p><p><b>Features</b></p><p><span class=\"mp\" data-p=\"3\">(i) <b>Setting up:</b> state governments, in consultation with the High Court, set up Family Courts, compulsorily in cities with a population of over 10 lakh.</span></p><p><span class=\"mp\" data-p=\"4\">(ii) <b>Conciliation first:</b> the court must first try to bring about a settlement, aided by counsellors and welfare experts.</span></p><p><span class=\"mp\" data-p=\"5\">(iii) <b>Informal procedure:</b> the court can frame its own simple procedure, and parties are not entitled to be represented by a lawyer as of right.</span></p><p><span class=\"mp\" data-p=\"6\">(iv) <b>Jurisdiction:</b> marriage and divorce, maintenance, custody and guardianship of children, and matrimonial property.</span></p>",
          notes: ["Act and objective first, then numbered features.", "Specific details: 10 lakh population, counsellors, lawyers not as of right."] }
      },
      mistakes: ["Saying Family Courts exist in every district by law.", "Missing conciliation, the core idea.", "Not naming the Act."],
      tip: "Family Courts = conciliation first, formality last."
    }
  ]
});
