/* Answer Writing Lab · Class XII Legal Studies. Original questions and answers. */
NFWrite.register({
  slug: "xii-legal", cls: "XII", subject: "Legal Studies",
  intro: "Legal Studies answers score with the correct legal term, the statute or section, and a leading case. In problem questions, apply the rule to the facts and give a clear conclusion.",
  rules: [
    { t: "Cite the law", b: "Name the <b>Act and section</b> where you can: 'Section 10, Indian Contract Act, 1872'. It turns an average answer into a legal one." },
    { t: "Use a leading case", b: "One relevant <b>case name with year</b> per answer, e.g. <i>Mohori Bibee v. Dharmodas Ghose</i> (1903)." },
    { t: "IRAC for problems", b: "For fact-based questions: <b>Issue → Rule → Application → Conclusion</b>. Each part can carry a mark." },
    { t: "Distinguish in a table", b: "Use a table with a <b>Basis</b> column; the same basis on both sides." },
    { t: "Precise terms", b: "Write 'void ab initio', 'actus reus', 'mens rea', 'award': the examiner looks for legal vocabulary." },
    { t: "Conclude", b: "End problem answers with one clear line: 'Therefore, the contract is void.'" }
  ],
  questions: [
    {
      id: "q1", ch: "legal12-contract", chTitle: "Law of Contract", marks: 4, cmd: "Explain",
      q: "Explain any four essentials of a valid contract under the Indian Contract Act, 1872.",
      ask: "Four essentials, each with a heading and a line of explanation; cite Section 10 once.",
      points: [
        { p: "Free consent (not caused by coercion, undue influence, fraud, misrepresentation or mistake)", m: 1, k: ["free consent"] },
        { p: "Competent parties (major, of sound mind, not disqualified)", m: 1, k: ["competent"] },
        { p: "Lawful consideration", m: 1, k: ["consideration"] },
        { p: "Lawful object / not expressly declared void / offer and acceptance / intention to create legal relations (any one)", m: 1, k: ["lawful object", "not expressly", "void", "offer", "intention"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>A contract is an agreement enforceable by law. It must be written and signed by both parties. Both parties must agree and the contract should be legal.</p>",
          notes: ["A contract need <b>not</b> be written and signed (oral contracts are valid unless a law requires writing).", "'Both parties must agree' points vaguely at consent: 1 mark.", "No headings, no section."] },
        good: { score: 3, text: "<p><b>1. Free consent:</b> the parties must agree freely.</p><p><b>2. Competent parties:</b> parties must be able to contract.</p><p><b>3. Lawful consideration:</b> something in return.</p><p><b>4. Registration:</b> the contract must be registered.</p>",
          notes: ["Points 1–3 are correct essentials: 3 marks.", "Registration is <b>not</b> a general essential; use lawful object or 'not expressly declared void'.", "Explanations are thin: say what makes consent free or a party competent."] },
        full: { score: 4, text: "<p>Under <b>Section 10 of the Indian Contract Act, 1872</b>, all agreements are contracts if made with:</p><p><span class=\"mp\" data-p=\"1\"><b>1. Free consent:</b> consent not caused by coercion, undue influence, fraud, misrepresentation or mistake.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. Competent parties:</b> parties who have reached majority (18 years), are of sound mind and are not disqualified by law (Section 11).</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Lawful consideration:</b> each party must give something in return that is not forbidden by law.</span></p><p><span class=\"mp\" data-p=\"4\"><b>4. Lawful object:</b> the purpose of the agreement must not be illegal, immoral or against public policy.</span></p>",
          notes: ["Section 10 cited once at the start.", "Each essential has a heading and a precise legal meaning.", "Section 11 adds depth for competent parties."] }
      },
      mistakes: ["Saying every contract must be written or registered.", "Listing 'agreement' and 'offer' as two separate essentials and padding the answer.", "No reference to the Act."],
      tip: "Learn Section 10 as a list: free consent, competent parties, lawful consideration, lawful object, not expressly declared void."
    },
    {
      id: "q2", ch: "legal12-contract", chTitle: "Law of Contract", marks: 3, cmd: "Apply (problem)",
      q: "Rohan, aged 16, buys a laptop on credit from Tech Mart by signing an agreement to pay ₹60,000 in instalments. He later refuses to pay. Can Tech Mart enforce the agreement against Rohan? Give reasons.",
      ask: "IRAC: the rule on minors, the leading case, and a clear conclusion.",
      points: [
        { p: "Rule: a minor (below 18) is not competent to contract under Section 11", m: 1, k: ["section 11", "minor", "not competent", "18"] },
        { p: "A minor's agreement is void ab initio: <i>Mohori Bibee v. Dharmodas Ghose</i> (1903)", m: 1, k: ["void ab initio", "mohori bibee", "void"] },
        { p: "Conclusion: Tech Mart cannot enforce the agreement against Rohan", m: 1, k: ["cannot enforce", "not enforce", "cannot recover", "no"] }
      ],
      answers: {
        weak: { score: 0, text: "<p>Yes, Tech Mart can enforce it because Rohan signed the agreement and must pay.</p>",
          notes: ["Wrong conclusion: signing does not bind a minor.", "No rule (Section 11), no case law and the wrong conclusion: 0 marks."] },
        good: { score: 2, text: "<p>No. Rohan is a minor, and a minor is not competent to contract under Section 11 of the Indian Contract Act. So Tech Mart cannot enforce the agreement.</p>",
          notes: ["Rule and conclusion are right: 2 marks.", "Add the effect, <b>void ab initio</b>, and the leading case <i>Mohori Bibee v. Dharmodas Ghose</i>."] },
        full: { score: 3, text: "<p><b>Issue:</b> Is a minor bound by an agreement to pay on credit?</p><p><span class=\"mp\" data-p=\"1\"><b>Rule:</b> Under Section 11 of the Indian Contract Act, 1872, a person below 18 years is not competent to contract.</span></p><p><span class=\"mp\" data-p=\"2\">An agreement with a minor is <b>void ab initio</b> (void from the beginning): <i>Mohori Bibee v. Dharmodas Ghose</i> (1903).</span></p><p><span class=\"mp\" data-p=\"3\"><b>Application and conclusion:</b> Rohan is 16, so his agreement with Tech Mart is void. <b>Tech Mart cannot enforce it against him.</b></span></p>",
          notes: ["IRAC structure makes the reasoning easy to follow.", "Statute, legal effect and leading case all present.", "Conclusion stated plainly."] }
      },
      mistakes: ["Calling a minor's agreement 'voidable' (it is void).", "Missing the leading case.", "No conclusion."],
      tip: "Minor's agreement → void ab initio → Mohori Bibee (1903). Learn the three together."
    },
    {
      id: "q3", ch: "legal12-torts", chTitle: "Law of Torts", marks: 4, cmd: "Distinguish",
      q: "Distinguish between strict liability and absolute liability on four bases.",
      ask: "A table: origin case, exceptions, type of activity, and nature of compensation.",
      points: [
        { p: "Origin: <i>Rylands v. Fletcher</i> (1868) vs <i>M.C. Mehta v. Union of India</i> (1987)", m: 1, k: ["rylands", "mehta"] },
        { p: "Exceptions: defences available (act of God, plaintiff's fault, etc.) vs no exceptions", m: 1, k: ["exception", "defence", "act of god"] },
        { p: "Activity: escape of a dangerous thing from non-natural use of land vs hazardous or inherently dangerous industry", m: 1, k: ["non-natural", "hazardous", "inherently dangerous"] },
        { p: "Compensation: ordinary compensation vs compensation linked to the size and capacity of the enterprise (exemplary)", m: 1, k: ["capacity", "magnitude", "exemplary", "compensation"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Strict liability is when a person is strictly liable. Absolute liability is when a person is absolutely liable and it is stricter. Absolute liability came after the Bhopal gas tragedy.</p>",
          notes: ["Definitions are circular ('strict liability is when … strictly liable').", "The Bhopal context hints at the origin: 1 mark at most.", "No table, no case names."] },
        good: { score: 3, text: "<table><tr><th>Basis</th><th>Strict liability</th><th>Absolute liability</th></tr><tr><td>Origin</td><td><i>Rylands v. Fletcher</i></td><td><i>M.C. Mehta v. Union of India</i></td></tr><tr><td>Exceptions</td><td>Some exceptions allowed</td><td>No exceptions</td></tr><tr><td>Applies to</td><td>Dangerous things</td><td>Hazardous industries</td></tr></table>",
          notes: ["Three correct rows: 3 marks.", "Add a fourth basis: <b>compensation</b> under absolute liability is linked to the enterprise's size and capacity.", "Add years to the cases (1868, 1987)."] },
        full: { score: 4, text: "<table><tr><th>Basis</th><th>Strict liability</th><th>Absolute liability</th></tr><tr><td>Origin</td><td><span class=\"mp\" data-p=\"1\"><i>Rylands v. Fletcher</i> (1868), England</span></td><td><i>M.C. Mehta v. Union of India</i> (1987), India: oleum gas leak case</td></tr><tr><td>Exceptions</td><td><span class=\"mp\" data-p=\"2\">Defences allowed: act of God, plaintiff's own fault, consent, act of a third party, statutory authority</span></td><td>No exceptions or defences</td></tr><tr><td>Activity covered</td><td><span class=\"mp\" data-p=\"3\">Escape of a dangerous thing kept through non-natural use of land</span></td><td>Enterprises engaged in hazardous or inherently dangerous activity</td></tr><tr><td>Compensation</td><td><span class=\"mp\" data-p=\"4\">Ordinary compensation for the harm caused</span></td><td>Linked to the magnitude and capacity of the enterprise, to have a deterrent effect</td></tr></table>",
          notes: ["Four bases with case names and years.", "Exceptions listed specifically, not just 'some'.", "Compensation row shows understanding of the deterrent purpose."] }
      },
      mistakes: ["Circular definitions.", "Giving the Bhopal case as the origin instead of <i>M.C. Mehta</i> (1987).", "Saying absolute liability has 'few' exceptions (it has none)."],
      tip: "Strict = English, 1868, defences allowed. Absolute = Indian, 1987, no defences."
    },
    {
      id: "q4", ch: "legal12-adr", chTitle: "Alternative Dispute Resolution", marks: 3, cmd: "Distinguish",
      q: "Distinguish between arbitration and mediation on three bases.",
      ask: "A table: role of the third party, binding nature of the outcome, and governing law.",
      points: [
        { p: "Role: arbitrator decides the dispute vs mediator only helps the parties reach a settlement", m: 1, k: ["decides", "facilitat", "helps"] },
        { p: "Outcome: binding arbitral award vs settlement only if parties agree", m: 1, k: ["award", "binding"] },
        { p: "Law: Arbitration and Conciliation Act, 1996 vs Mediation Act, 2023", m: 1, k: ["1996", "2023", "act"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Arbitration and mediation are both ways to settle disputes outside court. In arbitration an arbitrator is appointed and in mediation a mediator is appointed.</p>",
          notes: ["Correctly sets both outside court, but no real difference given: naming the neutral person is not a distinction.", "1 mark at most for a basic point about the third party."] },
        good: { score: 2, text: "<table><tr><th>Basis</th><th>Arbitration</th><th>Mediation</th></tr><tr><td>Role of third party</td><td>Arbitrator gives a decision</td><td>Mediator helps parties talk</td></tr><tr><td>Outcome</td><td>Award is binding</td><td>Not binding unless parties settle</td></tr><tr><td>Cost</td><td>Cheaper than courts</td><td>Cheaper than courts</td></tr></table>",
          notes: ["Rows 1 and 2 are correct: 2 marks.", "Row 3 shows no difference. Use the <b>governing law</b>: Arbitration and Conciliation Act, 1996 vs Mediation Act, 2023."] },
        full: { score: 3, text: "<table><tr><th>Basis</th><th>Arbitration</th><th>Mediation</th></tr><tr><td>Role of the neutral</td><td><span class=\"mp\" data-p=\"1\">The arbitrator hears both sides and <b>decides</b> the dispute</span></td><td>The mediator only <b>facilitates</b> talks; the parties decide</td></tr><tr><td>Outcome</td><td><span class=\"mp\" data-p=\"2\">A binding <b>arbitral award</b>, enforceable like a decree</span></td><td>A settlement agreement only if both parties agree</td></tr><tr><td>Governing law</td><td><span class=\"mp\" data-p=\"3\">Arbitration and Conciliation Act, 1996</span></td><td>Mediation Act, 2023</td></tr></table>",
          notes: ["Three real differences.", "Legal terms 'award' and 'facilitates' used precisely.", "Statutes named with years."] }
      },
      mistakes: ["Using a basis where both sides are the same (both are cheaper than courts).", "Calling a mediator's suggestion binding.", "Not naming the statutes."],
      tip: "Arbitrator = private judge. Mediator = helper. That one line gives you the first row."
    },
    {
      id: "q5", ch: "legal12-ipr", chTitle: "Intellectual Property Rights", marks: 3, cmd: "Explain",
      q: "Explain any three types of intellectual property rights with an example each.",
      ask: "Three types, each with what it protects, an example and (for depth) its term of protection in India.",
      points: [
        { p: "Patent: protects a new invention; 20 years; e.g. a new medicine", m: 1, k: ["patent"] },
        { p: "Copyright: protects original literary, artistic, musical works; author's life + 60 years; e.g. a novel or song", m: 1, k: ["copyright"] },
        { p: "Trademark: protects a brand name or logo; 10 years, renewable; e.g. a company's logo", m: 1, k: ["trademark", "trade mark"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>IPR are rights over things made by the mind. Types are patent, copyright and trademark. Patent is for inventions.</p>",
          notes: ["Three types named, but only patent is explained: 1 mark.", "No examples, which the question asks for."] },
        good: { score: 2, text: "<p><b>1. Patent:</b> protects a new invention, e.g. a new type of engine.</p><p><b>2. Copyright:</b> protects books, music and films, e.g. a novel.</p><p><b>3. Trademark:</b> protects inventions of companies.</p>",
          notes: ["Patent and copyright are right: 2 marks.", "A trademark protects a <b>brand name, logo or symbol</b>, not inventions.", "Adding the term of protection would strengthen each point."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\"><b>1. Patent:</b> an exclusive right over a new, inventive and industrially useful invention, granted for <b>20 years</b>. Example: a new drug formula.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. Copyright:</b> protects original literary, dramatic, musical and artistic works; for authors it lasts for the <b>author's life plus 60 years</b>. Example: a novel or a song.</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Trademark:</b> protects a distinctive mark, name or logo that identifies goods or services; registered for <b>10 years</b> and renewable. Example: a company's logo.</span></p>",
          notes: ["Each type: what it protects, duration, example.", "Durations show precise knowledge of Indian law."] }
      },
      mistakes: ["Saying trademarks protect inventions.", "Skipping examples when asked.", "Mixing up patent (20 years) and copyright (life + 60) durations."],
      tip: "Patent = invention. Copyright = expression. Trademark = identity."
    },
    {
      id: "q6", ch: "legal12-criminal", chTitle: "Criminal Laws in India", marks: 6, cmd: "Explain",
      q: "Explain the essential elements of a crime. Illustrate with an example.",
      ask: "The four elements with meaning, the Latin maxim linking actus reus and mens rea, and one example applied to all elements.",
      points: [
        { p: "Human being: the act must be done by a person under a legal duty and fit for punishment", m: 1, k: ["human being"] },
        { p: "Mens rea: a guilty mind (intention, knowledge or recklessness)", m: 1, k: ["mens rea", "guilty mind"] },
        { p: "Actus reus: a guilty act or illegal omission", m: 1, k: ["actus reus", "guilty act"] },
        { p: "Injury: harm caused to body, mind, reputation or property of a person", m: 1, k: ["injury", "harm"] },
        { p: "Maxim: <i>actus non facit reum nisi mens sit rea</i> (an act is not guilty unless the mind is guilty)", m: 1, k: ["actus non facit", "nisi mens"] },
        { p: "Example applied to the elements", m: 1, k: ["example", "e.g", "for instance"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>A crime is a wrong against society. For a crime there must be a criminal, an intention and a bad act. Example: theft.</p>",
          notes: ["'Intention' and 'bad act' point to mens rea and actus reus: 2 marks.", "Latin terms, injury and the maxim are missing.", "'Example: theft' is not applied to the elements."] },
        good: { score: 4, text: "<p><b>1. Human being:</b> the crime must be committed by a human.</p><p><b>2. Mens rea:</b> guilty intention.</p><p><b>3. Actus reus:</b> guilty act.</p><p><b>4. Injury:</b> harm must be caused to another person.</p><p>Example: A steals B's phone.</p>",
          notes: ["All four elements named: 4 marks.", "The maxim linking mens rea and actus reus is missing.", "The example is not applied: show which part is the intention, the act and the injury."] },
        full: { score: 6, text: "<p><span class=\"mp\" data-p=\"1\"><b>1. Human being:</b> the act must be done by a human being who is under a legal duty to act lawfully and is fit to be punished.</span></p><p><span class=\"mp\" data-p=\"2\"><b>2. Mens rea (guilty mind):</b> the wrongful intention, knowledge or recklessness behind the act.</span></p><p><span class=\"mp\" data-p=\"3\"><b>3. Actus reus (guilty act):</b> the physical act or illegal omission that the law forbids.</span></p><p><span class=\"mp\" data-p=\"4\"><b>4. Injury:</b> harm illegally caused to the body, mind, reputation or property of another person.</span></p><p><span class=\"mp\" data-p=\"5\">The link between the act and the mind is expressed in the maxim <i>actus non facit reum nisi mens sit rea</i>: an act alone does not make a person guilty unless the mind is also guilty.</span></p><p><span class=\"mp\" data-p=\"6\"><b>Example:</b> A plans to take B's phone (<b>mens rea</b>), slips it from B's bag (<b>actus reus</b>), and B loses property (<b>injury</b>). A, a human being, has committed theft.</span></p>",
          notes: ["Four elements with Latin and English terms.", "The maxim shows depth.", "The example is mapped to each element in brackets."] }
      },
      mistakes: ["Listing elements without explaining them.", "Missing 'injury'.", "Giving an example without connecting it to the elements."],
      tip: "Remember H-M-A-I: Human being, Mens rea, Actus reus, Injury."
    }
  ]
});
