/* Answer Writing Lab · Class XII Accountancy. Original questions; every figure recomputed. */
NFWrite.register({
  slug: "xii-acc", cls: "XII", subject: "Accountancy",
  intro: "In Accountancy, the working earns the marks. Formula, working note, correct format and a labelled final answer each carry marks, even if the last figure goes wrong.",
  words: { 3: "working + answer", 4: "working + answer", 6: "full account" },
  rules: [
    { t: "Formula first", b: "Write the <b>formula</b> before substituting numbers. Most ratio and goodwill questions give a mark for the formula alone." },
    { t: "Show working notes", b: "Number your <b>working notes</b> (WN 1, WN 2) below the account or answer. A correct working note earns its mark even if a later figure is wrong." },
    { t: "Use the proper format", b: "Accounts in <b>T-format with Dr. and Cr.</b>, Particulars and Amount (₹) columns; 'To' on the debit side and 'By' on the credit side." },
    { t: "Label the answer", b: "Ratios as <b>2:1</b> or <b>6 times</b>, amounts with ₹. A bare '2' or '86100' can lose the answer mark." },
    { t: "Time matters", b: "Interest is <b>p.a.</b>: count months carefully (1 October to 31 March = 6 months)." },
    { t: "Schedule III terms", b: "Use the exact <b>major head and sub-head</b> (e.g. 'Current Liabilities → Short-term Borrowings')." }
  ],
  questions: [
    {
      id: "q1", ch: "acc-partnership", chTitle: "Partnership Fundamentals", marks: 3, cmd: "Calculate",
      q: "Asha and Bina are partners with capitals of ₹4,00,000 and ₹3,00,000 on 1 April 2025. On 1 October 2025, Asha introduced additional capital of ₹1,00,000. The deed allows interest on capital at 10% p.a. Calculate interest on capital for the year ended 31 March 2026.",
      ask: "Separate working for the opening capital and for the additional capital (for the correct number of months), then each partner's total.",
      points: [
        { p: "Asha, opening capital: ₹4,00,000 × 10% = ₹40,000", m: 1, k: ["40,000", "40000"] },
        { p: "Asha, additional capital for 6 months: ₹1,00,000 × 10% × 6/12 = ₹5,000; total ₹45,000", m: 1, k: ["5,000", "5000", "45,000", "45000", "6/12"] },
        { p: "Bina: ₹3,00,000 × 10% = ₹30,000", m: 1, k: ["30,000", "30000"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Asha = 5,00,000 × 10% = 50,000</p><p>Bina = 3,00,000 × 10% = 30,000</p>",
          notes: ["Asha's capital was ₹5,00,000 for only <b>half</b> the year. Interest on the additional ₹1,00,000 must be for 6 months.", "Bina's ₹30,000 is correct: 1 mark.", "No labels, no ₹ signs, no statement of the period."] },
        good: { score: 2, text: "<p><b>Asha:</b> on ₹4,00,000 for 12 months = ₹40,000; on ₹1,00,000 for 7 months = 1,00,000 × 10% × 7/12 = ₹5,833. Total = ₹45,833.</p><p><b>Bina:</b> ₹3,00,000 × 10% = ₹30,000.</p>",
          notes: ["Correct method: opening and additional capital worked separately.", "Month count is wrong: 1 October 2025 to 31 March 2026 is <b>6</b> months, not 7.", "Opening interest and Bina's interest are right: 2 marks."] },
        full: { score: 3, text: "<p><b>Interest on capital @ 10% p.a. for the year ended 31 March 2026</b></p><p><span class=\"mp\" data-p=\"1\"><b>Asha:</b> On opening capital: ₹4,00,000 × 10/100 = ₹40,000</span></p><p><span class=\"mp\" data-p=\"2\">On additional capital (1 Oct 2025 – 31 Mar 2026 = 6 months): ₹1,00,000 × 10/100 × 6/12 = ₹5,000<br><b>Total for Asha = ₹45,000</b></span></p><p><span class=\"mp\" data-p=\"3\"><b>Bina:</b> ₹3,00,000 × 10/100 = <b>₹30,000</b></span></p>",
          notes: ["Each capital worked separately with the formula shown.", "The period is stated in brackets, so the 6 months is clear.", "Final answers in bold with ₹."] }
      },
      mistakes: ["Charging a full year on capital introduced mid-year.", "Counting months wrongly (Oct–Mar = 6).", "Charging interest on capital withdrawn for the full year."],
      tip: "Write the period in brackets every time you apply a fraction of a year. It forces you to count the months."
    },
    {
      id: "q2", ch: "acc-goodwill", chTitle: "Goodwill", marks: 3, cmd: "Calculate",
      q: "A firm's average profit is ₹1,80,000 and its capital employed is ₹12,00,000. The normal rate of return is 12%. Calculate goodwill at 3 years' purchase of super profit.",
      ask: "Three steps, each a mark: normal profit, super profit, goodwill.",
      points: [
        { p: "Normal profit = ₹12,00,000 × 12% = ₹1,44,000", m: 1, k: ["1,44,000", "144000"] },
        { p: "Super profit = ₹1,80,000 − ₹1,44,000 = ₹36,000", m: 1, k: ["36,000", "36000"] },
        { p: "Goodwill = ₹36,000 × 3 = ₹1,08,000", m: 1, k: ["1,08,000", "108000"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Normal profit = 12,00,000 × 12% = 1,44,000</p><p>Goodwill = 1,80,000 × 3 = 5,40,000</p>",
          notes: ["Normal profit is right: 1 mark.", "Goodwill is then worked on <b>average</b> profit, which is the average profit method, not the super profit method asked.", "Super profit is skipped entirely."] },
        good: { score: 2, text: "<p>Normal profit = ₹12,00,000 × 12/100 = ₹1,44,000</p><p>Super profit = ₹1,80,000 − ₹1,44,000 = ₹36,000</p><p>Goodwill = ₹36,000 × 100/12 = ₹3,00,000</p>",
          notes: ["Steps 1 and 2 are correct: 2 marks.", "The last step <b>capitalises</b> super profit. The question says '3 years' purchase', so multiply by 3."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\"><b>Step 1: Normal profit</b> = Capital employed × Normal rate of return<br>= ₹12,00,000 × 12/100 = <b>₹1,44,000</b></span></p><p><span class=\"mp\" data-p=\"2\"><b>Step 2: Super profit</b> = Average profit − Normal profit<br>= ₹1,80,000 − ₹1,44,000 = <b>₹36,000</b></span></p><p><span class=\"mp\" data-p=\"3\"><b>Step 3: Goodwill</b> = Super profit × Number of years' purchase<br>= ₹36,000 × 3 = <b>₹1,08,000</b></span></p>",
          notes: ["Every step names its formula, then substitutes.", "The method matches the question: super profit × years' purchase.", "Each step's answer is bold and has ₹."] }
      },
      mistakes: ["Using average profit instead of super profit.", "Capitalising when the question says 'years' purchase'.", "Taking the normal rate on average profit instead of capital employed."],
      tip: "Underline the method in the question ('years' purchase of super profit') before you start."
    },
    {
      id: "q3", ch: "acc-ratios", chTitle: "Accounting Ratios", marks: 4, cmd: "Calculate",
      q: "Current assets of a company are ₹6,00,000, which include inventory of ₹1,50,000 and prepaid expenses of ₹30,000. Current liabilities are ₹3,00,000. Calculate the current ratio and the quick ratio.",
      ask: "Formula and answer for each ratio, plus a working for quick assets. Express ratios as x:1.",
      points: [
        { p: "Current ratio formula: Current assets ÷ Current liabilities", m: 1, k: ["current assets ÷", "current assets/", "current assets /", "current liabilities"] },
        { p: "Current ratio = 6,00,000 ÷ 3,00,000 = 2:1", m: 1, k: ["2:1"] },
        { p: "Quick assets = 6,00,000 − 1,50,000 − 30,000 = ₹4,20,000", m: 1, k: ["4,20,000", "420000"] },
        { p: "Quick ratio = 4,20,000 ÷ 3,00,000 = 1.4:1", m: 1, k: ["1.4:1", "1.4 : 1"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Current ratio = 6,00,000 / 3,00,000 = 2</p><p>Quick ratio = 4,50,000 / 3,00,000 = 1.5</p>",
          notes: ["Current ratio value is right, but no formula and not written as 2:1: 1 mark.", "Prepaid expenses must also be excluded from quick assets: ₹4,20,000, not ₹4,50,000.", "No working shown for quick assets."] },
        good: { score: 3, text: "<p><b>Current ratio</b> = Current assets ÷ Current liabilities = 6,00,000 ÷ 3,00,000 = <b>2:1</b></p><p><b>Quick assets</b> = 6,00,000 − 1,50,000 − 30,000 = ₹4,20,000</p><p><b>Quick ratio</b> = 4,20,000 ÷ 6,00,000 = 0.7:1</p>",
          notes: ["Current ratio with formula, and quick assets: 3 marks.", "Quick ratio divides by <b>current liabilities</b>, not current assets. Correct answer: 1.4:1."] },
        full: { score: 4, text: "<p><span class=\"mp\" data-p=\"1\"><b>Current ratio</b> = Current assets ÷ Current liabilities</span><br><span class=\"mp\" data-p=\"2\">= ₹6,00,000 ÷ ₹3,00,000 = <b>2:1</b></span></p><p><span class=\"mp\" data-p=\"3\"><b>WN: Quick assets</b> = Current assets − Inventory − Prepaid expenses<br>= ₹6,00,000 − ₹1,50,000 − ₹30,000 = ₹4,20,000</span></p><p><span class=\"mp\" data-p=\"4\"><b>Quick ratio</b> = Quick assets ÷ Current liabilities = ₹4,20,000 ÷ ₹3,00,000 = <b>1.4:1</b></span></p>",
          notes: ["Formula written for both ratios.", "Quick assets shown as a working note, excluding both inventory and prepaid expenses.", "Answers expressed as x:1."] }
      },
      mistakes: ["Excluding only inventory from quick assets (prepaid expenses must go too).", "Dividing quick assets by current assets.", "Writing '2' instead of '2:1'."],
      tip: "Quick assets = current assets − inventory − prepaid expenses. Memorise the two exclusions together."
    },
    {
      id: "q4", ch: "acc-fs-company", chTitle: "Financial Statements of a Company", marks: 3, cmd: "Classify",
      q: "Under which major head and sub-head will the following items be shown in a company's Balance Sheet as per Schedule III? (i) Securities premium (ii) Bank overdraft (iii) Loose tools",
      ask: "For each item, the major head <b>and</b> the sub-head. Present it as a three-column table.",
      points: [
        { p: "Securities premium: Shareholders' Funds → Reserves and Surplus", m: 1, k: ["reserves and surplus"] },
        { p: "Bank overdraft: Current Liabilities → Short-term Borrowings", m: 1, k: ["short-term borrowings", "short term borrowings"] },
        { p: "Loose tools: Current Assets → Inventories", m: 1, k: ["inventories", "inventory"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>(i) Reserves and surplus (ii) Long-term borrowings (iii) Fixed assets</p>",
          notes: ["(i) is correct, though the major head is missing: 1 mark.", "Bank overdraft is repayable on demand, so it is a <b>short-term</b> borrowing.", "Loose tools are shown under <b>Inventories</b>, not fixed assets."] },
        good: { score: 2, text: "<table><tr><th>Item</th><th>Major head</th><th>Sub-head</th></tr><tr><td>Securities premium</td><td>Shareholders' Funds</td><td>Reserves and Surplus</td></tr><tr><td>Bank overdraft</td><td>Current Liabilities</td><td>Short-term Borrowings</td></tr><tr><td>Loose tools</td><td>Non-current Assets</td><td>Property, Plant and Equipment</td></tr></table>",
          notes: ["Table format and first two items are correct: 2 marks.", "Loose tools go under <b>Current Assets → Inventories</b> as per Schedule III."] },
        full: { score: 3, text: "<table><tr><th>Item</th><th>Major head</th><th>Sub-head</th></tr><tr><td>(i) Securities premium</td><td colspan=\"2\"><span class=\"mp\" data-p=\"1\">Shareholders' Funds → Reserves and Surplus</span></td></tr><tr><td>(ii) Bank overdraft</td><td colspan=\"2\"><span class=\"mp\" data-p=\"2\">Current Liabilities → Short-term Borrowings</span></td></tr><tr><td>(iii) Loose tools</td><td colspan=\"2\"><span class=\"mp\" data-p=\"3\">Current Assets → Inventories</span></td></tr></table>",
          notes: ["Both major head and sub-head for every item.", "Exact Schedule III wording.", "A neat table makes each item one clear mark."] }
      },
      mistakes: ["Writing only the sub-head.", "Putting bank overdraft under long-term borrowings.", "Treating loose tools as fixed assets."],
      tip: "Ask 'repayable within 12 months?' for liabilities and 'used up within the operating cycle?' for assets."
    },
    {
      id: "q5", ch: "acc-partnership", chTitle: "Partnership Fundamentals", marks: 6, cmd: "Prepare",
      q: "Xavier and Yash share profits 3:2. Their capitals are ₹5,00,000 and ₹3,00,000. For the year ended 31 March 2026, net profit before adjustments is ₹2,40,000. The deed provides: interest on capital at 8% p.a.; salary to Yash of ₹3,000 per month; interest on drawings: Xavier ₹2,000 and Yash ₹1,500. Prepare the Profit and Loss Appropriation Account.",
      ask: "A T-format account with every adjustment on the correct side, the divisible profit, and each partner's share in 3:2. Working notes below.",
      points: [
        { p: "Interest on capital debited: Xavier ₹40,000, Yash ₹24,000", m: 1, k: ["40,000", "24,000", "40000", "24000"] },
        { p: "Salary to Yash debited: ₹3,000 × 12 = ₹36,000", m: 1, k: ["36,000", "36000"] },
        { p: "Interest on drawings credited: ₹2,000 + ₹1,500 = ₹3,500", m: 1, k: ["3,500", "3500", "interest on drawings"] },
        { p: "Divisible profit = ₹2,43,500 − ₹1,00,000 = ₹1,43,500", m: 1, k: ["1,43,500", "143500"] },
        { p: "Xavier's share = ₹1,43,500 × 3/5 = ₹86,100", m: 1, k: ["86,100", "86100"] },
        { p: "Yash's share = ₹1,43,500 × 2/5 = ₹57,400", m: 1, k: ["57,400", "57400"] }
      ],
      answers: {
        weak: { score: 2, text: "<p>Interest on capital: X 40,000, Y 24,000. Salary 36,000. Interest on drawings 3,500.</p><p>Profit = 2,40,000 − 64,000 − 36,000 − 3,500 = 1,36,500. X = 81,900, Y = 54,600.</p>",
          notes: ["Interest on capital and salary are right: 2 marks.", "Interest on drawings is <b>income</b> to the firm: it is <b>credited</b> (added), not deducted.", "No account format at all: in a 6-mark 'prepare' question, format matters."] },
        good: { score: 4, text: "<table><tr><th>Dr. Particulars</th><th>₹</th><th>Cr. Particulars</th><th>₹</th></tr><tr><td>To Interest on Capital: X 40,000; Y 24,000</td><td>64,000</td><td>By Net Profit</td><td>2,40,000</td></tr><tr><td>To Salary to Yash</td><td>36,000</td><td>By Interest on Drawings: X 2,000; Y 1,500</td><td>3,500</td></tr><tr><td>To Profit: X 71,750; Y 71,750</td><td>1,43,500</td><td></td><td></td></tr><tr><td></td><td>2,43,500</td><td></td><td>2,43,500</td></tr></table>",
          notes: ["All adjustments on the correct side and divisible profit right: 4 marks.", "Profit must be shared in the <b>profit-sharing ratio 3:2</b>, not equally: Xavier ₹86,100, Yash ₹57,400.", "Add working notes for interest and salary."] },
        full: { score: 6, text: "<p><b>Profit and Loss Appropriation Account for the year ended 31 March 2026</b></p><table><tr><th>Dr. Particulars</th><th>₹</th><th>Cr. Particulars</th><th>₹</th></tr><tr><td><span class=\"mp\" data-p=\"1\">To Interest on Capital A/c<br>Xavier 40,000; Yash 24,000</span></td><td>64,000</td><td>By Profit and Loss A/c (net profit)</td><td>2,40,000</td></tr><tr><td><span class=\"mp\" data-p=\"2\">To Yash's Salary A/c</span></td><td>36,000</td><td><span class=\"mp\" data-p=\"3\">By Interest on Drawings A/c<br>Xavier 2,000; Yash 1,500</span></td><td>3,500</td></tr><tr><td><span class=\"mp\" data-p=\"4\">To Profit transferred to:</span><br><span class=\"mp\" data-p=\"5\">Xavier's Capital A/c 86,100</span><br><span class=\"mp\" data-p=\"6\">Yash's Capital A/c 57,400</span></td><td>1,43,500</td><td></td><td></td></tr><tr><th></th><th>2,43,500</th><th></th><th>2,43,500</th></tr></table><p><b>WN 1:</b> Interest on capital: Xavier ₹5,00,000 × 8% = ₹40,000; Yash ₹3,00,000 × 8% = ₹24,000.</p><p><b>WN 2:</b> Salary: ₹3,000 × 12 = ₹36,000.</p><p><b>WN 3:</b> Divisible profit = ₹2,43,500 − ₹64,000 − ₹36,000 = ₹1,43,500; Xavier 3/5 = ₹86,100; Yash 2/5 = ₹57,400.</p>",
          notes: ["Proper T-format with heading, Dr./Cr. and 'To'/'By'.", "Interest on drawings on the credit side as an income.", "Working notes below the account justify every figure.", "Totals agree at ₹2,43,500."] }
      },
      mistakes: ["Deducting interest on drawings instead of adding it.", "Taking monthly salary as annual.", "Sharing divisible profit equally instead of in the agreed ratio.", "Missing the account heading and period."],
      tip: "Check the balance: total of credit side must equal total of debit side. If they don't agree, a side is wrong."
    },
    {
      id: "q6", ch: "acc-ratios", chTitle: "Accounting Ratios", marks: 3, cmd: "Calculate",
      q: "Cost of revenue from operations is ₹9,00,000. Opening inventory is ₹1,40,000 and closing inventory is ₹1,60,000. Calculate the inventory turnover ratio.",
      ask: "Average inventory, the formula, and the answer in 'times'.",
      points: [
        { p: "Average inventory = (1,40,000 + 1,60,000) ÷ 2 = ₹1,50,000", m: 1, k: ["1,50,000", "150000"] },
        { p: "Formula: Cost of revenue from operations ÷ Average inventory", m: 1, k: ["cost of revenue", "average inventory"] },
        { p: "Inventory turnover ratio = 9,00,000 ÷ 1,50,000 = 6 times", m: 1, k: ["6 times"] }
      ],
      answers: {
        weak: { score: 1, text: "<p>Average inventory = 1,50,000. ITR = 12,00,000 / 1,50,000 = 8 times</p>",
          notes: ["Average inventory is right: 1 mark.", "The numerator must be <b>cost of revenue from operations</b> (₹9,00,000). The ₹12,00,000 figure is invented; it isn't given."] },
        good: { score: 2, text: "<p>Average inventory = (1,40,000 + 1,60,000) ÷ 2 = ₹1,50,000</p><p>ITR = Cost of revenue from operations ÷ Average inventory = 9,00,000 ÷ 1,50,000 = 5 times</p>",
          notes: ["Average inventory and formula are right: 2 marks.", "Arithmetic slip: 9,00,000 ÷ 1,50,000 = <b>6</b>. Re-check division before moving on."] },
        full: { score: 3, text: "<p><span class=\"mp\" data-p=\"1\"><b>WN: Average inventory</b> = (Opening + Closing inventory) ÷ 2 = (₹1,40,000 + ₹1,60,000) ÷ 2 = ₹1,50,000</span></p><p><span class=\"mp\" data-p=\"2\"><b>Inventory turnover ratio</b> = Cost of revenue from operations ÷ Average inventory</span><br><span class=\"mp\" data-p=\"3\">= ₹9,00,000 ÷ ₹1,50,000 = <b>6 times</b></span></p>",
          notes: ["Working note, formula and answer are each clearly shown.", "Answer expressed in 'times', the correct unit for turnover ratios."] }
      },
      mistakes: ["Using revenue from operations instead of cost of revenue.", "Using closing inventory instead of average.", "Writing the answer as a ratio (6:1) instead of times."],
      tip: "Turnover ratios are always in 'times'. Liquidity and solvency ratios are in 'x:1'."
    }
  ]
});
