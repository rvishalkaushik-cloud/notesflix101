/* Answer Writing Lab · Class XI Business Studies. Original questions and answers. */
NFWrite.register({
  slug: "xi-bst", cls: "XI", subject: "Business Studies",
  intro: "Class XI Business Studies trains the same skills as the board year: headings, one point per mark, tables for differences and case lines quoted as proof.",
  rules: [
    { t: "Heading first", b: "Begin each point with the <b>term in bold</b>, then one or two lines of explanation." },
    { t: "Count the marks", b: "A 4-mark 'explain' needs <b>four points</b>. Number them so the examiner can tick each." },
    { t: "Tables for differences", b: "Use a table with a <b>Basis</b> column; the same basis on both sides of a row." },
    { t: "Quote the case", b: "In case questions, name the concept and <b>quote</b> the line that shows it." },
    { t: "Examples", b: "A short Indian example (a kirana store, a cooperative dairy) makes an 'explain' answer complete." },
    { t: "Exact terms", b: "Write 'unlimited liability', 'perpetual succession', 'warehousing': not everyday words." }
  ],
  questions: [
    {
      id: "q1", ch: "xi-u2", chTitle: "Forms of Business Organisation", marks: 3, cmd: "Distinguish",
      q: "Distinguish between a sole proprietorship and a partnership on three bases.",
      ask: "A table: number of owners, liability, and continuity (or decision-making / formation).",
      points: [
        { p: "Number of owners: one vs two or more", m: 1, k: ["one", "two or more"] },
        { p: "Liability: unlimited (of one owner) vs unlimited and joint", m: 1, k: ["unlimited", "joint"] },
        { p: "Continuity / decision-making: ends with owner, quick decisions vs affected by death/retirement of a partner, decisions by consultation", m: 1, k: ["continu", "decision", "death", "retire"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Sole proprietorship is owned by one person while partnership is owned by many people. Partnership is better because there is more capital.</p>",
          notes: ["Number of owners is a valid basis: 1 mark.", "'Partnership is better' is an opinion, not a difference.", "No table."] },
        good: { score: 2, text: "<table><tr><th>Basis</th><th>Sole proprietorship</th><th>Partnership</th></tr><tr><td>Owners</td><td>One</td><td>Two or more</td></tr><tr><td>Liability</td><td>Unlimited</td><td>Unlimited</td></tr><tr><td>Capital</td><td>Limited</td><td>More</td></tr></table>",
          notes: ["Owners and capital rows are valid: 2 marks.", "Liability row shows no difference: write 'unlimited and <b>joint</b>' for partnership, or choose continuity instead."] },
        full: { score: 3, text: "<table><tr><th>Basis</th><th>Sole proprietorship</th><th>Partnership</th></tr><tr><td>Number of owners</td><td><span class=\"mp\" data-p=\"1\">Only one</span></td><td>Two or more (maximum 50 under company rules)</td></tr><tr><td>Liability</td><td><span class=\"mp\" data-p=\"2\">Unlimited liability of the sole owner</span></td><td>Unlimited and joint liability of all partners</td></tr><tr><td>Continuity</td><td><span class=\"mp\" data-p=\"3\">Ends with the death or insolvency of the owner</span></td><td>Affected by the death, retirement or insolvency of any partner</td></tr></table>",
          notes: ["Every row shows a real contrast.", "'Joint' liability is the key word that separates the two."] }
      },
      mistakes: ["A liability row that says 'unlimited' on both sides with nothing more.", "Giving opinions ('partnership is better').", "Paragraph instead of table."],
      tip: "When both sides share a feature, add the word that differs (unlimited vs unlimited <b>and joint</b>) or choose another basis."
    },
    {
      id: "q2", ch: "xi-u4", chTitle: "Business Services", marks: 4, cmd: "Explain",
      q: "Explain any four functions of warehousing.",
      ask: "Four functions with a heading and a line each on how the warehouse performs it.",
      points: [
        { p: "Consolidation", m: 1, k: ["consolidat"] },
        { p: "Break bulk", m: 1, k: ["break bulk", "bulk"] },
        { p: "Stock piling / seasonal storage", m: 1, k: ["stock pil", "season"] },
        { p: "Value-added services / price stabilisation / financing (any one)", m: 1, k: ["value", "price stabil", "financ", "loan"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Warehousing means storing goods. It keeps goods safe from rain and theft. It is very useful for business.</p>",
          notes: ["'Keeps goods safe' is close to storage: 1 mark at most.", "No textbook functions named; 'very useful' adds nothing."] },
        good: { score: 3, text: "<p><b>1. Consolidation:</b> goods from different producers are combined.</p><p><b>2. Break bulk:</b> large quantities are divided into smaller ones.</p><p><b>3. Price stabilisation:</b> prices remain stable.</p><p><b>4. Transportation:</b> goods are transported.</p>",
          notes: ["Points 1–3 are correct functions: 3 marks.", "Transportation is a separate business service, not a warehousing function. Use stock piling or financing.", "Point 3 needs the 'how': releasing stock when supply is short."] },
        full: { score: 4, text: "<p><span class=\"mp\" data-p=\"1\"><b>1. Consolidation:</b> materials from several suppliers are combined into one full load for a buyer, saving transport cost.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. Break bulk:</b> large quantities received from producers are divided into smaller lots for retailers.</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Stock piling:</b> seasonal goods like rice are stored and released through the year as demand arises.</span></p><p><span class=\"mp\" data-p=\"4\"><b>4. Financing:</b> the warehouse receipt can be pledged with a bank to raise a loan against stored goods.</span></p>",
          notes: ["Four textbook functions, each explained in a working line.", "Concrete examples (rice, warehouse receipt)."] }
      },
      mistakes: ["Listing types of warehouses instead of functions.", "Including transportation or insurance.", "One-word points without explanation."],
      tip: "Functions: consolidation, break bulk, stock piling, value-added services, price stabilisation, financing."
    },
    {
      id: "q3", ch: "xi-u6", chTitle: "Social Responsibility and Business Ethics", marks: 4, cmd: "Explain",
      q: "Explain the social responsibility of business towards (a) consumers and (b) employees, giving two points for each.",
      ask: "Two specific duties under each group, labelled (a) and (b).",
      points: [
        { p: "Consumers 1: safe, good quality products", m: 1, k: ["quality", "safe"] },
        { p: "Consumers 2: fair prices / honest advertising / after-sales service / grievance redressal", m: 1, k: ["fair price", "advertis", "after-sales", "grievance", "information"] },
        { p: "Employees 1: fair wages and good working conditions", m: 1, k: ["wage", "working condition"] },
        { p: "Employees 2: job security / training and growth / safety / respect for rights", m: 1, k: ["security", "training", "safety", "rights"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Business should be good to consumers and employees. It should give good products to consumers and treat employees well.</p>",
          notes: ["'Good products' earns 1 mark (quality).", "'Treat employees well' is too vague; name the duty (fair wages, safe workplace)."] },
        good: { score: 3, text: "<p><b>(a) Consumers:</b> supply quality products; charge reasonable prices.</p><p><b>(b) Employees:</b> pay fair wages; give them bonus every month.</p>",
          notes: ["Three valid duties: 3 marks.", "'Bonus every month' is not a recognised responsibility. Use job security, safe working conditions or training."] },
        full: { score: 4, text: "<p><b>(a) Towards consumers</b></p><p><span class=\"mp\" data-p=\"1\">1. Supply <b>safe, good-quality products</b> that do what they claim.</span></p><p><span class=\"mp\" data-p=\"2\">2. Charge <b>fair prices</b> and give honest information in advertising, with prompt after-sales service.</span></p><p><b>(b) Towards employees</b></p><p><span class=\"mp\" data-p=\"3\">1. Pay <b>fair wages</b> and provide healthy, safe working conditions.</span></p><p><span class=\"mp\" data-p=\"4\">2. Offer <b>job security, training</b> and chances for growth, and respect their right to form unions.</span></p>",
          notes: ["Two duties per group, numbered under clear sub-headings.", "Each duty is specific and textbook-based."] }
      },
      mistakes: ["Vague lines like 'be good to them'.", "Mixing consumer and employee duties.", "Writing responsibilities towards owners or government instead."],
      tip: "Make a 2-column rough list (consumers | employees) before writing, so the points don't mix."
    },
    {
      id: "q4", ch: "xi-u7", chTitle: "Sources of Business Finance", marks: 3, cmd: "Distinguish",
      q: "Distinguish between equity shares and preference shares on three bases.",
      ask: "A table: right to dividend, right to repayment of capital, and voting rights.",
      points: [
        { p: "Dividend: paid after preference dividend, rate varies vs fixed rate, paid first", m: 1, k: ["dividend", "fixed"] },
        { p: "Repayment on winding up: after preference capital vs before equity capital", m: 1, k: ["repayment", "winding up", "capital"] },
        { p: "Voting rights: full voting rights vs limited voting rights", m: 1, k: ["voting"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Equity shareholders are owners and preference shareholders are not owners. Equity shareholders have voting rights.</p>",
          notes: ["Voting rights point is valid: 1 mark.", "Preference shareholders are also part-owners of the company, so 'not owners' is wrong.", "No table."] },
        good: { score: 2, text: "<table><tr><th>Basis</th><th>Equity shares</th><th>Preference shares</th></tr><tr><td>Dividend</td><td>Not fixed</td><td>Fixed rate</td></tr><tr><td>Voting</td><td>Full voting rights</td><td>Limited</td></tr><tr><td>Risk</td><td>Low</td><td>High</td></tr></table>",
          notes: ["Dividend and voting rows are correct: 2 marks.", "Risk is reversed: equity shareholders bear the <b>highest</b> risk. Better: use repayment of capital as the third basis."] },
        full: { score: 3, text: "<table><tr><th>Basis</th><th>Equity shares</th><th>Preference shares</th></tr><tr><td>Right to dividend</td><td><span class=\"mp\" data-p=\"1\">Paid after preference dividend; rate varies with profit</span></td><td>Paid first, at a fixed rate</td></tr><tr><td>Repayment of capital</td><td><span class=\"mp\" data-p=\"2\">Repaid last, after all other claims, on winding up</span></td><td>Repaid before equity capital</td></tr><tr><td>Voting rights</td><td><span class=\"mp\" data-p=\"3\">Full voting rights</span></td><td>Limited voting rights (only on matters affecting them)</td></tr></table>",
          notes: ["Three standard bases: dividend, repayment, voting.", "Priority (first/last) is stated on both sides."] }
      },
      mistakes: ["Saying preference shareholders are not owners.", "Reversing risk.", "Not mentioning 'preference' as priority in dividend and repayment."],
      tip: "Preference = preferred twice: dividend first and capital first."
    },
    {
      id: "q5", ch: "xi-u9", chTitle: "Internal Trade", marks: 5, cmd: "Explain",
      q: "Explain any five services rendered by wholesalers to retailers.",
      ask: "Five services to <b>retailers</b> (not to manufacturers), each with a heading.",
      points: [
        { p: "Availability of goods (variety from many producers)", m: 1, k: ["availab", "variety"] },
        { p: "Marketing support", m: 1, k: ["marketing support", "advertis", "promotion"] },
        { p: "Grant of credit", m: 1, k: ["credit"] },
        { p: "Specialised knowledge (new products, demand trends)", m: 1, k: ["knowledge", "information"] },
        { p: "Risk sharing (buying in small lots, no need to store large stock)", m: 1, k: ["risk"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>Wholesalers help retailers by giving them goods and credit. They also help manufacturers by buying in bulk and storing goods.</p>",
          notes: ["'Giving goods' and 'credit' earn 2 marks.", "Bulk buying and storage are services to <b>manufacturers</b>, not retailers: no marks.", "No headings."] },
        good: { score: 4, text: "<p><b>1. Availability of goods:</b> retailers get many products in one place.</p><p><b>2. Grant of credit:</b> wholesalers sell on credit.</p><p><b>3. Marketing support:</b> wholesalers advertise products.</p><p><b>4. Risk sharing:</b> retailers buy in small quantities.</p><p><b>5. Financing manufacturers:</b> wholesalers pay in advance.</p>",
          notes: ["Points 1–4 are services to retailers: 4 marks.", "Point 5 is a service to <b>manufacturers</b>. Use 'specialised knowledge' instead."] },
        full: { score: 5, text: "<p><span class=\"mp\" data-p=\"1\"><b>1. Availability of goods:</b> wholesalers stock products of many manufacturers, so retailers can buy a wide variety from one place.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. Marketing support:</b> they run advertisements and sales promotion that boost retailers' sales.</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Grant of credit:</b> they sell on credit, so retailers need less working capital.</span></p><p><span class=\"mp\" data-p=\"4\"><b>4. Specialised knowledge:</b> they tell retailers about new products, prices and changing demand.</span></p><p><span class=\"mp\" data-p=\"5\"><b>5. Risk sharing:</b> retailers can buy in small lots and avoid the risk of holding large stocks.</span></p>",
          notes: ["Five services, all to retailers.", "Each explains the benefit to the retailer."] }
      },
      mistakes: ["Mixing services to manufacturers (bulk buying, storage, financing, price stabilisation) with services to retailers.", "No headings.", "Writing only four points for five marks."],
      tip: "Read the question twice: 'to retailers' or 'to manufacturers'. The lists are different."
    },
    {
      id: "q6", ch: "xi-u3", chTitle: "Public, Private and Global Enterprises", marks: 6, cmd: "Explain",
      q: "What is a departmental undertaking? Explain its features, and give two merits and one limitation.",
      ask: "Meaning, three features, two merits and one limitation: six marks in total.",
      points: [
        { p: "Meaning: a public enterprise run as a department of a ministry (e.g. Indian Railways, Posts)", m: 1, k: ["department", "ministry", "railway", "post"] },
        { p: "Feature: funded by and accountable through the government budget", m: 1, k: ["budget", "treasury"] },
        { p: "Feature: employees are government servants; controlled by the ministry", m: 1, k: ["government servant", "civil servant", "ministry"] },
        { p: "Merit: effective control by Parliament / accountability", m: 1, k: ["control", "accountab", "parliament"] },
        { p: "Merit: source of revenue / serves national objectives / ensures secrecy in strategic sectors", m: 1, k: ["revenue", "national", "secrecy", "strategic"] },
        { p: "Limitation: red tape / lack of flexibility / political interference / no initiative", m: 1, k: ["red tape", "flexib", "political", "initiative", "delay"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>A departmental undertaking is a government company like ONGC. It is owned by government and works for public welfare. Its merit is that it gives jobs. Its limitation is losses.</p>",
          notes: ["Government ownership and public welfare earn 2 marks.", "ONGC is a <b>government company</b>, a different form. Use Indian Railways or India Post.", "'Gives jobs' and 'losses' are too general."] },
        good: { score: 5, text: "<p><b>Meaning:</b> an enterprise run as a department of a ministry, e.g. Indian Railways.</p><p><b>Features:</b> financed from the government budget; employees are government servants.</p><p><b>Merits:</b> effective control by Parliament; serves national goals.</p>",
          notes: ["Meaning, two features and two merits: 5 marks.", "The limitation is missing: e.g. <b>red tape</b> delays decisions.", "When a question lists parts, tick each part off before you finish."] },
        full: { score: 6, text: "<p><span class=\"mp\" data-p=\"1\"><b>Meaning:</b> a departmental undertaking is a public enterprise organised and run as a department of a ministry, e.g. Indian Railways and India Post.</span></p><p><b>Features</b></p><p><span class=\"mp\" data-p=\"2\">(i) It is financed through annual budget allocations, and its revenue goes to the treasury.</span></p><p><span class=\"mp\" data-p=\"3\">(ii) Its employees are government servants, and it is directly controlled by the ministry, with no separate legal entity.</span></p><p><b>Merits</b></p><p><span class=\"mp\" data-p=\"4\">(i) <b>Effective control:</b> Parliament can question its working, ensuring accountability.</span></p><p><span class=\"mp\" data-p=\"5\">(ii) <b>Serves national objectives</b> and suits strategic sectors where secrecy matters, such as defence production.</span></p><p><b>Limitation</b></p><p><span class=\"mp\" data-p=\"6\"><b>Red tape and inflexibility:</b> every decision needs ministry approval, causing delays and leaving little room for initiative.</span></p>",
          notes: ["Sub-headings match the question's parts.", "Correct Indian examples.", "Each merit and limitation is explained, not just named."] }
      },
      mistakes: ["Giving examples of government companies (ONGC, SAIL) for departmental undertakings.", "Missing one of the asked parts.", "One-word merits."],
      tip: "When a question has parts (features, merits, limitations), use the same words as sub-headings."
    }
  ]
});
