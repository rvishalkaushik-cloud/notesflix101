/* Revision Arena · Class XII Accountancy · Chapter 1 · Partnership Fundamentals (covers Parts 1-4). Original cases; no textbook text copied. */
NFArena.register({
  id: "acc-partnership", cls: "XII", subject: "Accountancy", unit: "Chapter", num: "1",
  title: "Partnership Fundamentals",
  tagline: "Deed, Section 13, the appropriation account, interest on drawings, past adjustments and guarantee of profit.",
  notesLink: "../#acc-partnership",
  concepts: {
    def: { n: "Meaning and features of partnership", s: "basics" },
    deed: { n: "Partnership deed and its contents", s: "basics" },
    s13: { n: "Rules when there is no deed (Section 13)", s: "basics" },
    loan: { n: "Interest on partner's loan (a charge)", s: "approp" },
    approp: { n: "Profit and Loss Appropriation Account", s: "approp" },
    ioc: { n: "Interest on capital", s: "approp" },
    comm: { n: "Salary and commission to partners", s: "approp" },
    capac: { n: "Fixed and fluctuating capital accounts", s: "approp" },
    iod: { n: "Interest on drawings (average period / product)", s: "drawings" },
    insuff: { n: "Insufficient profit and loss", s: "insuff" },
    past: { n: "Past adjustments", s: "past" },
    guar: { n: "Guarantee of minimum profit", s: "guar" }
  },
  overview: {
    text: "A <b>partnership</b> is the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all (Indian Partnership Act, 1932, Section 4). The <b>deed</b> fixes the rules; where it is silent, <b>Section 13</b> applies. Profit is first adjusted for <b>charges</b> (like interest on a partner's loan) in the P&L Account, and then distributed through the <b>Profit and Loss Appropriation Account</b>.",
    points: [
      "Charges go to the <b>P&L Account</b>; appropriations (interest on capital, salary, commission, reserve, shares) go to the <b>P&L Appropriation Account</b>.",
      "Interest on drawings is <b>income</b> of the firm: it is credited to the Appropriation Account and debited to partners.",
      "Mistakes of past years are corrected by <b>one adjusting entry</b> through capital or current accounts, without reopening old accounts.",
      "A guaranteed partner gets at least the promised amount; the <b>shortfall</b> is borne by the partner(s) who gave the guarantee."
    ],
    map: {
      center: "Partnership Fundamentals",
      branches: [
        { t: "Basics", c: ["Definition and features", "Partnership deed", "Section 13 (no deed)"] },
        { t: "Distribution", c: ["Loan interest: a charge", "Appropriation Account", "Fixed vs fluctuating capital"] },
        { t: "Drawings", c: ["Average period method", "Product method"] },
        { t: "Special cases", c: ["Insufficient profit or loss", "Past adjustments", "Guarantee of profit"] }
      ]
    }
  },
  sections: [
    {
      id: "basics", title: "Partnership, deed and Section 13", sub: "What holds a firm together", icon: "🤝", color: "#4da3ff",
      quick: [
        "<b>Features:</b> two or more persons (maximum 50 under the Companies (Miscellaneous) Rules, 2014), an agreement, a business, sharing of profits, and <b>mutual agency</b> (each partner is an agent of the firm and of the others).",
        "<b>Liability is unlimited</b>: personal assets of partners can be used to pay firm debts.",
        "<b>Partnership deed</b>: a written agreement that sets the profit-sharing ratio, capital, interest on capital and drawings, salary, commission, loan terms and rules for admission, retirement and dissolution.",
        "<b>Section 13 (no deed or deed silent):</b> profits shared <b>equally</b>; <b>no</b> interest on capital; <b>no</b> interest on drawings; <b>no</b> salary or commission; interest on a partner's loan at <b>6% p.a.</b>"
      ],
      table: { cap: "When the deed is silent (Section 13)", head: ["Item", "Rule"], rows: [["Profit-sharing ratio", "Equal"], ["Interest on capital", "Not allowed"], ["Interest on drawings", "Not charged"], ["Salary / commission", "Not allowed"], ["Interest on partner's loan", "6% p.a., even if there is a loss"]] },
      cards: [
        { t: "Mutual agency", tag: "def", b: "<p>Every partner is both an agent and a principal. An act done by one partner in the normal course of business binds the firm and all partners. This is the true test of a partnership.</p>" },
        { t: "Why a deed matters", tag: "why", b: "<p>A written deed avoids disputes later. Courts and the Registrar can rely on it, and every partner knows the agreed salary, interest and ratio in advance.</p>" },
        { t: "Loan vs capital", tag: "tip", b: "<p>Money a partner gives over and above capital is a <b>loan</b>. Interest on it is a <b>charge</b>: it is paid even in a loss year and is debited to the P&L Account, not the Appropriation Account.</p>" }
      ],
      exam: ["'There is no deed and one partner asks for salary' → not allowed (Section 13).", "'Partner advanced ₹50,000 to the firm, no rate agreed' → interest at <b>6% p.a.</b>"]
    },
    {
      id: "approp", title: "The Appropriation Account and capital accounts", sub: "Charges first, then appropriations", icon: "📒", color: "#22c55e",
      quick: [
        "<b>P&L Appropriation Account</b> starts with <b>net profit</b> (after charges) and shows how it is divided.",
        "<b>Debit side:</b> interest on capital, salary, commission, transfer to reserve, then each partner's share of profit.",
        "<b>Credit side:</b> net profit and <b>interest on drawings</b>.",
        "<b>Commission on net profit after charging such commission</b> = Net profit × rate ÷ (100 + rate).",
        "<b>Fixed capital:</b> two accounts per partner. Capital stays the same; interest, salary, share and drawings go to the <b>Current Account</b>. <b>Fluctuating capital:</b> one Capital Account takes everything."
      ],
      table: { cap: "Where each item goes", head: ["Item", "Account", "Side"], rows: [["Interest on partner's loan", "P&L Account", "Debit (charge)"], ["Interest on capital", "Appropriation A/c", "Debit"], ["Salary / commission to partner", "Appropriation A/c", "Debit"], ["Transfer to reserve", "Appropriation A/c", "Debit"], ["Interest on drawings", "Appropriation A/c", "Credit"], ["Share of profit", "Appropriation A/c", "Debit (then to partners)"]] },
      cards: [
        { t: "Worked example: commission after charging", tag: "eg", b: "<p>Net profit ₹1,10,000; Kiran gets 10% commission on profit <b>after</b> charging it.</p><p>Commission = 1,10,000 × 10 ÷ 110 = <b>₹10,000</b>.</p><p>If it were 10% <b>before</b> charging, it would be ₹11,000.</p>" },
        { t: "Worked example: appropriation", tag: "eg", b: "<p>Deepa and Farhan share 3 : 2. Farhan's salary ₹20,000. Net profit ₹1,00,000.</p><p>Left to share = 1,00,000 − 20,000 = 80,000 → Deepa <b>₹48,000</b>, Farhan <b>₹32,000</b>.</p>" },
        { t: "Interest on capital: on which balance?", tag: "tip", b: "<p>On the <b>opening capital</b>. If capital was added during the year, add interest on the addition for the months it was used. Opening capital = closing capital − profit + drawings − additions (if only closing capital is given).</p>" }
      ],
      exam: ["Loan interest is never shown in the Appropriation Account.", "With fixed capitals, the Capital Account balance does not change unless capital is added or withdrawn."]
    },
    {
      id: "drawings", title: "Interest on drawings", sub: "Average period and product methods", icon: "⏳", color: "#f5b301",
      quick: [
        "Charged only if the <b>deed</b> provides. It is income for the firm.",
        "<b>Same amount at regular intervals</b>: Interest = Total drawings × Rate × Average period ÷ 12.",
        "<b>Unequal amounts on different dates</b>: product method. Multiply each drawing by months left till year-end; Interest = Sum of products × Rate ÷ 100 × 1/12.",
        "Date not given → charge for <b>6 months</b> on total drawings."
      ],
      table: { cap: "Average period (12-month year)", head: ["Withdrawn", "Beginning", "Middle", "End"], rows: [["Monthly", "6.5 months", "6 months", "5.5 months"], ["Quarterly", "7.5 months", "6 months", "4.5 months"], ["Half-yearly", "9 months", "6 months", "3 months"]] },
      cards: [
        { t: "Worked example: monthly at the beginning", tag: "eg", b: "<p>₹5,000 at the beginning of every month, 12% p.a. Total = ₹60,000.</p><p>Interest = 60,000 × 12/100 × 6.5/12 = <b>₹3,900</b>.</p>" },
        { t: "Worked example: product method", tag: "eg", b: "<p>₹10,000 on 1 May (11 months), ₹20,000 on 1 Aug (8), ₹15,000 on 1 Dec (4), ₹5,000 on 1 Feb (2). Products = 1,10,000 + 1,60,000 + 60,000 + 10,000 = 3,40,000.</p><p>Interest at 12% = 3,40,000 × 12/100 × 1/12 = <b>₹3,400</b>.</p>" },
        { t: "Drawings only for part of the year", tag: "tip", b: "<p>₹8,000 at the end of each month for 6 months (April–September), interest till 31 March: months left run from 11 to 6, average = 8.5 months. Interest at 10% = 48,000 × 10/100 × 8.5/12 = <b>₹3,400</b>.</p>" }
      ],
      exam: ["Quarterly at the end → 4.5 months, not 3.", "Dates given with different amounts → use the product method."]
    },
    {
      id: "insuff", title: "When profit is not enough, or there is a loss", sub: "Appropriation vs charge", icon: "⚖️", color: "#ff5470",
      quick: [
        "If interest on capital is an <b>appropriation</b> and profit is less than total interest, the available profit is divided in the <b>ratio of interest on capital</b>, not the profit-sharing ratio.",
        "In a <b>loss</b> year, no interest on capital (as an appropriation), salary or commission is allowed; the loss is shared in the profit-sharing ratio.",
        "If the deed says interest on capital is a <b>charge</b>, it is allowed even in a loss, and any resulting loss is shared in the profit-sharing ratio.",
        "Interest on a partner's <b>loan</b> is always allowed: it is a charge."
      ],
      cards: [
        { t: "Worked example: insufficient profit", tag: "eg", b: "<p>A and B: interest on capital ₹30,000 and ₹20,000 (total ₹50,000). Profit available ₹40,000.</p><p>Share 40,000 in 30 : 20 = 3 : 2 → A <b>₹24,000</b>, B <b>₹16,000</b>. Nothing is left for profit shares.</p>" },
        { t: "Salary plus interest, profit short", tag: "tip", b: "<p>When the deed gives several appropriations and profit is short, divide the available profit in the <b>ratio of the amounts due</b> to each partner under all those heads together.</p>" }
      ],
      exam: ["'Interest on capital is to be treated as a charge' → allow it even if the firm made a loss."]
    },
    {
      id: "past", title: "Past adjustments", sub: "Fixing last year without reopening it", icon: "🛠️", color: "#c084fc",
      quick: [
        "Errors found after accounts are closed (interest omitted, wrong ratio used, salary not given) are corrected by <b>one adjusting entry</b>.",
        "Make a table: what each partner <b>should have received</b> (credit) minus the <b>profit taken back</b> in the profit-sharing ratio (debit) → net effect.",
        "The partner with a net <b>debit</b> is debited; the one with a net credit is credited. With fixed capitals, use <b>Current Accounts</b>."
      ],
      table: { cap: "Interest on capital at 10% omitted · A : B = 3 : 2 · capitals ₹2,00,000 and ₹1,00,000", head: ["Particulars", "A (₹)", "B (₹)", "Total (₹)"], rows: [["Interest that should be credited", "20,000 Cr", "10,000 Cr", "30,000"], ["Profit taken back (3 : 2)", "18,000 Dr", "12,000 Dr", "30,000"], ["Net effect", "2,000 Cr", "2,000 Dr", "Nil"]] },
      cards: [
        { t: "The adjusting entry", tag: "eg", b: "<p>From the table above: <b>B's Capital A/c Dr ₹2,000, To A's Capital A/c ₹2,000.</b></p><p>The totals of the debit and credit rows are always equal, so the net effect adds to nil.</p>" }
      ],
      exam: ["Never pass an entry for the full omitted interest: only the <b>net</b> effect."]
    },
    {
      id: "guar", title: "Guarantee of minimum profit", sub: "Who makes good the shortfall", icon: "🛡️", color: "#22d3ee",
      quick: [
        "A partner (often a new one) may be guaranteed a <b>minimum profit</b>.",
        "First divide profit in the normal ratio. If the guaranteed partner's share is less than the guarantee, the <b>deficiency</b> is borne by the guaranteeing partner(s).",
        "One guarantor bears it all; several guarantors bear it in their <b>agreed ratio</b>, or their profit-sharing ratio if none is given.",
        "If the share is already above the guarantee, nothing changes."
      ],
      cards: [
        { t: "Worked example", tag: "eg", b: "<p>X, Y, Z share 2 : 2 : 1. Z is guaranteed ₹30,000 by X and Y. Profit ₹1,00,000.</p><p>Z's share = 20,000 → deficiency ₹10,000, borne by X and Y in 2 : 2 = ₹5,000 each.</p><p>Final: X <b>₹35,000</b>, Y <b>₹35,000</b>, Z <b>₹30,000</b>.</p>" },
        { t: "Guarantee by the firm", tag: "tip", b: "<p>If the <b>firm</b> gives the guarantee, the shortfall is borne by the other partners in their profit-sharing ratio.</p>" }
      ],
      exam: ["Check the guarantor before dividing the deficiency: one partner, two partners in a given ratio, or the firm."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "def", q: "Which section of the Indian Partnership Act, 1932 defines partnership?", a: "Section 4." },
    { k: "Feature", c: "def", q: "What is mutual agency?", a: "Each partner is an agent of the firm and of the other partners; acts in the normal course of business bind all." },
    { k: "Limit", c: "def", q: "Maximum number of partners in a firm?", a: "50 (Companies (Miscellaneous) Rules, 2014)." },
    { k: "Deed", c: "deed", q: "Name four contents of a partnership deed.", a: "Profit-sharing ratio, capital, interest on capital and drawings, salary/commission (also loan terms, admission, retirement)." },
    { k: "Section 13", c: "s13", q: "Profit-sharing ratio when the deed is silent?", a: "Equal." },
    { k: "Section 13", c: "s13", q: "Rate of interest on a partner's loan with no agreement?", a: "6% per annum." },
    { k: "Charge", c: "loan", q: "Where is interest on a partner's loan shown?", a: "Debit side of the Profit and Loss Account (it is a charge)." },
    { k: "Appropriation", c: "approp", q: "Which item is on the credit side of the Appropriation Account besides net profit?", a: "Interest on drawings." },
    { k: "Formula", c: "comm", q: "Commission at r% of net profit after charging such commission?", a: "Net profit × r ÷ (100 + r)." },
    { k: "Capital", c: "capac", q: "Under fixed capitals, where are drawings recorded?", a: "In the partner's Current Account." },
    { k: "Average period", c: "iod", q: "Average period for equal drawings at the beginning of every month?", a: "6.5 months." },
    { k: "Average period", c: "iod", q: "Average period for equal drawings at the end of every quarter?", a: "4.5 months." },
    { k: "Method", c: "iod", q: "Which method when unequal amounts are drawn on different dates?", a: "Product method." },
    { k: "Short profit", c: "insuff", q: "Profit is less than total interest on capital (appropriation). How is it divided?", a: "In the ratio of interest on capital." },
    { k: "Loss", c: "insuff", q: "Is interest on capital allowed in a loss year?", a: "No, unless the deed treats it as a charge." },
    { k: "Past adjustment", c: "past", q: "How many entries correct a past error?", a: "One adjusting entry for the net effect." },
    { k: "Guarantee", c: "guar", q: "Who bears the deficiency of a guaranteed partner?", a: "The partner(s) who gave the guarantee, in their agreed ratio." },
    { k: "Guarantee", c: "guar", q: "Guaranteed ₹30,000; share works out ₹34,000. What is paid?", a: "₹34,000: the guarantee is a minimum, not a fixed amount." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "No deed, four demands",
      text: "<p><b>Ritika</b> and <b>Sahil</b> run <span class='co'>Brewline Cafés</span> without a written deed. Ritika brought ₹6,00,000 capital and Sahil ₹2,00,000. Sahil also lent the firm ₹1,00,000 on 1 April 2025. Sahil manages the café full time. At year-end Ritika says profit must be shared 3 : 1 as per capital, and Sahil wants a salary of ₹10,000 a month and interest at 12% on his loan.</p>",
      qs: [
        { q: "Settle the four disputed points with reference to the law.", m: 4, type: "Apply provisions", c: "s13", ans: "Equal profit; no interest on capital; no salary; loan interest 6% = ₹6,000", keys: ["equal", "6%"], hint: "No deed → Section 13.",
          points: [{ p: "Profit shared <b>equally</b>, not in capital ratio", m: 1, k: ["equal"] }, { p: "<b>No interest on capital</b> to Ritika", m: 1, k: ["interest on capital", "no interest"] }, { p: "<b>No salary</b> to Sahil though he works full time", m: 1, k: ["salary"] }, { p: "Interest on loan at <b>6% p.a.</b> = ₹6,000, not 12%", m: 1, k: ["6%", "6,000", "6000"] }],
          structure: ["One line per dispute: claim → rule → decision."],
          model: "<p>As there is no deed, <b>Section 13</b> of the Indian Partnership Act, 1932 applies:</p><p>(i) Profits are shared <b>equally</b>, so Ritika's 3 : 1 claim fails.</p><p>(ii) <b>No interest on capital</b> is allowed.</p><p>(iii) <b>No salary</b> is payable to Sahil, even for full-time work.</p><p>(iv) Sahil gets interest on his loan at <b>6% p.a.</b>: 1,00,000 × 6% = <b>₹6,000</b>, charged to the P&L Account.</p>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "Commission after charging",
      text: "<p><span class='co'>Indigo Prints</span> has partners <b>Jaya</b> and <b>Kiran</b> sharing 3 : 2. Profit before interest on Kiran's loan was ₹1,14,800. Kiran's loan is ₹80,000 at 6% p.a. The deed gives Jaya a salary of ₹2,500 a month and Kiran a commission of 10% of net profit <b>after charging such commission</b>. ₹12,000 is transferred to General Reserve.</p>",
      qs: [
        { q: "Calculate the net profit for appropriation, Kiran's commission, and each partner's share of profit.", m: 4, type: "Calculate", c: "comm", ans: "Net profit ₹1,10,000; commission ₹10,000; Jaya ₹34,800; Kiran ₹23,200", keys: ["1,10,000", "10,000"], hint: "Loan interest first, then 10/110.",
          points: [{ p: "Loan interest ₹4,800 deducted → net profit <b>₹1,10,000</b>", m: 1, k: ["1,10,000", "110000", "4,800"] }, { p: "Commission = 1,10,000 × 10/110 = <b>₹10,000</b>", m: 1, k: ["10,000", "10000"] }, { p: "Salary ₹30,000; reserve ₹12,000; left to share <b>₹58,000</b>", m: 1, k: ["58,000", "58000"] }, { p: "Jaya <b>₹34,800</b>, Kiran <b>₹23,200</b>", m: 1, k: ["34,800", "23,200"] }],
          structure: ["Loan interest → net profit → commission → balance → shares."],
          model: "<p>Loan interest = 80,000 × 6% = ₹4,800 (a <b>charge</b>). Net profit = 1,14,800 − 4,800 = <b>₹1,10,000</b>.</p><p>Commission = 1,10,000 × 10 ÷ 110 = <b>₹10,000</b>.</p><p>Salary = 2,500 × 12 = ₹30,000. Left to share = 1,10,000 − 30,000 − 10,000 − 12,000 = <b>₹58,000</b>.</p><p>Jaya 3/5 = <b>₹34,800</b>; Kiran 2/5 = <b>₹23,200</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "The café owner's withdrawals",
      text: "<p><b>Aarav</b> withdrew ₹6,000 in the <b>middle</b> of every month and <b>Meher</b> withdrew ₹25,000 at the <b>beginning</b> of every half-year during 2025-26. The deed charges interest on drawings at 8% p.a. <b>Neel</b>, the third partner, drew ₹10,000 on 1 May, ₹20,000 on 1 August, ₹15,000 on 1 December and ₹5,000 on 1 February, with interest at 12% p.a.</p>",
      qs: [
        { q: "Calculate interest on drawings of Aarav and Meher.", m: 3, type: "Calculate", c: "iod", ans: "Aarav ₹2,880; Meher ₹3,000", keys: ["2,880", "3,000"], hint: "Middle of month = 6; beginning of half-year = 9.",
          points: [{ p: "Aarav: 72,000 × 8% × 6/12 = <b>₹2,880</b>", m: 1.5, k: ["2,880", "2880"] }, { p: "Meher: 50,000 × 8% × 9/12 = <b>₹3,000</b>", m: 1.5, k: ["3,000", "3000"] }],
          structure: ["Total drawings × rate × average period ÷ 12 for each."],
          model: "<p><b>Aarav:</b> total 6,000 × 12 = 72,000; middle of every month → 6 months. 72,000 × 8/100 × 6/12 = <b>₹2,880</b>.</p><p><b>Meher:</b> total 25,000 × 2 = 50,000; beginning of every half-year → 9 months. 50,000 × 8/100 × 9/12 = <b>₹3,000</b>.</p>" },
        { q: "Using the product method, calculate interest on Neel's drawings.", m: 3, type: "Calculate", c: "iod", ans: "₹3,400", keys: ["3,400"], hint: "Months to 31 March: 11, 8, 4, 2.",
          points: [{ p: "Months: 11, 8, 4, 2", m: 1, k: ["11", "8"] }, { p: "Sum of products <b>3,40,000</b>", m: 1, k: ["3,40,000", "340000"] }, { p: "Interest <b>₹3,400</b>", m: 1, k: ["3,400", "3400"] }],
          structure: ["Table of amount × months, total, then × 12/100 × 1/12."],
          model: "<p>Products: 10,000 × 11 = 1,10,000; 20,000 × 8 = 1,60,000; 15,000 × 4 = 60,000; 5,000 × 2 = 10,000. Total = <b>3,40,000</b>.</p><p>Interest = 3,40,000 × 12/100 × 1/12 = <b>₹3,400</b>.</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "A guarantee from two partners",
      text: "<p><b>Xavier</b>, <b>Yamini</b> and <b>Zubin</b> share profits 2 : 2 : 1 in <span class='co'>Northfield Tiles</span>. Xavier and Yamini guarantee Zubin a minimum profit of ₹30,000, the deficiency to be borne by them in the ratio 3 : 2. The profit for 2025-26 is ₹1,00,000.</p>",
      qs: [
        { q: "Calculate the profit finally credited to each partner and show how the deficiency is shared.", m: 4, type: "Calculate and explain", c: "guar", ans: "Deficiency ₹10,000; Xavier ₹34,000, Yamini ₹36,000, Zubin ₹30,000", keys: ["10,000", "30,000"], hint: "Zubin's normal share first; then split the gap 3 : 2.",
          points: [{ p: "Normal shares: 40,000, 40,000, 20,000", m: 1, k: ["40,000", "20,000"] }, { p: "Deficiency = 30,000 − 20,000 = <b>₹10,000</b>", m: 1, k: ["10,000", "10000"] }, { p: "Borne 3 : 2 → Xavier 6,000, Yamini 4,000", m: 1, k: ["6,000", "4,000"] }, { p: "Final: Xavier <b>₹34,000</b>, Yamini <b>₹36,000</b>, Zubin <b>₹30,000</b>", m: 1, k: ["34,000", "36,000"] }],
          structure: ["Normal shares → deficiency → split in agreed ratio → final."],
          model: "<p>Normal shares (2 : 2 : 1): Xavier ₹40,000, Yamini ₹40,000, Zubin ₹20,000.</p><p>Deficiency = 30,000 − 20,000 = <b>₹10,000</b>, borne by Xavier and Yamini in 3 : 2: Xavier ₹6,000, Yamini ₹4,000.</p><p>Final: Xavier 40,000 − 6,000 = <b>₹34,000</b>; Yamini 40,000 − 4,000 = <b>₹36,000</b>; Zubin <b>₹30,000</b>.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Interest left out last year",
      text: "<p><b>Ananya</b> and <b>Bhavesh</b> share profits 3 : 2 with fixed capitals of ₹2,00,000 and ₹1,00,000. After the 2025-26 accounts were closed, they found that interest on capital at 10% p.a. had been omitted. The profit for the year was ₹90,000.</p>",
      qs: [
        { q: "Show the adjustment in a table and pass the single adjusting entry. Explain why only one entry is passed.", m: 6, type: "Prepare and justify", c: "past", ans: "Bhavesh's Current A/c Dr ₹2,000 To Ananya's Current A/c ₹2,000", keys: ["2,000"], hint: "Credit interest, debit profit back in 3 : 2, find net.",
          points: [{ p: "Interest due: Ananya ₹20,000, Bhavesh ₹10,000", m: 1, k: ["20,000", "10,000"] }, { p: "Profit taken back 30,000 in 3 : 2 = 18,000 and 12,000", m: 1, k: ["18,000", "12,000"] }, { p: "Net: Ananya <b>₹2,000 Cr</b>, Bhavesh <b>₹2,000 Dr</b>", m: 1, k: ["2,000"] }, { p: "Entry through <b>Current Accounts</b> (fixed capitals)", m: 1, k: ["current"] }, { p: "Entry: Bhavesh's Current A/c Dr 2,000 To Ananya's Current A/c 2,000", m: 1, k: ["bhavesh", "dr"] }, { p: "One entry because closed accounts are not reopened; only the net effect is corrected", m: 1, k: ["net", "reopen", "closed"] }],
          structure: ["Table with three rows, net effect, journal entry, one-line reason."],
          model: "<table><tr><th>Particulars</th><th>Ananya</th><th>Bhavesh</th><th>Total</th></tr><tr><td>Interest on capital (Cr)</td><td>20,000</td><td>10,000</td><td>30,000</td></tr><tr><td>Profit taken back 3 : 2 (Dr)</td><td>18,000</td><td>12,000</td><td>30,000</td></tr><tr><td>Net effect</td><td>2,000 Cr</td><td>2,000 Dr</td><td>Nil</td></tr></table><p><b>Journal:</b> Bhavesh's Current A/c Dr ₹2,000, To Ananya's Current A/c ₹2,000 (being interest on capital omitted, now adjusted).</p><p>Current Accounts are used because capitals are <b>fixed</b>. The profit was already distributed and the books closed, so instead of reopening them, one entry corrects the <b>net effect</b> on each partner.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "def", q: "The true test of a partnership is:", o: ["Sharing of profits", "Mutual agency", "Unlimited liability", "Registration"], a: 1, hint: "Agent and principal.", why: "<b>Mutual agency</b>: each partner can bind the firm." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "s13", q: "In the absence of a deed, profits are shared:", o: ["In capital ratio", "Equally", "In the ratio of time spent", "As the senior partner decides"], a: 1, hint: "Section 13.", why: "Equally." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "loan", q: "Interest on a partner's loan is debited to:", o: ["P&L Appropriation A/c", "Partner's Capital A/c", "Profit and Loss A/c", "Partner's Current A/c"], a: 2, hint: "It is a charge.", why: "P&L Account, because it is a <b>charge</b> against profit." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "iod", q: "Drawings of an equal amount at the end of every quarter: average period is", o: ["3 months", "4.5 months", "6 months", "7.5 months"], a: 1, hint: "(9 + 0) ÷ 2.", why: "End of quarter: (9 + 0) ÷ 2 = <b>4.5 months</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "comm", q: "Net profit ₹2,20,000. Commission is 10% of net profit after charging such commission. Commission =", o: ["₹22,000", "₹20,000", "₹24,200", "₹18,000"], a: 1, hint: "× 10/110.", why: "2,20,000 × 10/110 = <b>₹20,000</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "capac", q: "Under the fixed capital method, interest on capital is credited to the partner's:", o: ["Capital Account", "Current Account", "Loan Account", "Drawings Account"], a: 1, hint: "Capital stays fixed.", why: "Current Account." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "insuff", q: "Interest on capital (an appropriation) due: P ₹24,000, Q ₹16,000. Profit is ₹30,000. P gets", o: ["₹24,000", "₹15,000", "₹18,000", "₹12,000"], a: 2, hint: "Ratio 24 : 16.", why: "30,000 × 24/40 = <b>₹18,000</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "guar", q: "A, B, C share 3 : 2 : 1; C is guaranteed ₹20,000 by A alone. Profit ₹90,000. A's final share:", o: ["₹45,000", "₹40,000", "₹50,000", "₹42,500"], a: 1, hint: "C's share 15,000.", why: "C's share 15,000, deficiency 5,000 borne by A: 45,000 − 5,000 = <b>₹40,000</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "loan", q: "Interest on a partner's loan is allowed even when the firm suffers a loss.", r: "Interest on a partner's loan is a charge against profit.", a: 0, hint: "Charge vs appropriation.", why: "Both true; R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "iod", q: "Interest on drawings is credited to the Profit and Loss Appropriation Account.", r: "Interest on drawings is an expense for the firm.", a: 2, hint: "Income or expense?", why: "A is true; R is false: it is <b>income</b> for the firm." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "insuff", q: "In a year of loss, partners are allowed interest on capital as an appropriation.", r: "Appropriations can be made only out of profit.", a: 3, hint: "No profit, no appropriation.", why: "A is false; R is true." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "def", q: "The liability of partners in a partnership firm is limited.", a: false, hint: "Personal assets.", why: "False: liability is <b>unlimited</b>." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "capac", q: "Under fluctuating capitals, each partner has only one Capital Account.", a: true, hint: "No Current A/c.", why: "True." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "past", q: "To correct interest omitted in a past year, the old accounts are reopened and redrawn.", a: false, hint: "One entry.", why: "False: one <b>adjusting entry</b> for the net effect." },
    { id: "q15", t: "match", d: "E", m: 4, c: "iod", q: "Match the pattern of equal drawings with the average period.", pairs: [["Beginning of every month", "6.5 months"], ["End of every month", "5.5 months"], ["Beginning of every quarter", "7.5 months"], ["End of every half-year", "3 months"]], hint: "Beginning adds, end subtracts.", why: "Each pattern has one average period." },
    { id: "q16", t: "match", d: "M", m: 4, c: "approp", q: "Match the item with where it is recorded.", pairs: [["Interest on partner's loan", "P&L Account (debit)"], ["Salary to a partner", "Appropriation A/c (debit)"], ["Interest on drawings", "Appropriation A/c (credit)"], ["Drawings under fixed capital", "Current Account (debit)"]], hint: "Charge vs appropriation.", why: "Charges to P&L; appropriations to the Appropriation Account." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "s13", q: "If there is no agreement, interest on a partner's loan is allowed at ______ % p.a.", acc: ["6", "six"], hint: "Section 13.", why: "6%." },
    { id: "q18", t: "fill", d: "E", m: 1, c: "def", q: "Partnership is defined in Section ______ of the Indian Partnership Act, 1932.", acc: ["4", "four"], hint: "Early section.", why: "Section 4." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "iod", q: "Unequal drawings on different dates: interest is calculated by the ______ method.", acc: ["product"], hint: "Amount × months.", why: "Product method." },
    { id: "q20", t: "short", d: "E", m: 1, c: "deed", q: "Name the written agreement that sets the terms of a partnership.", acc: ["partnership deed", "deed"], hint: "Also called articles of partnership.", why: "Partnership deed." },
    { id: "q21", t: "short", d: "M", m: 1, c: "guar", q: "Guaranteed partner's share exceeds the guarantee. Who bears anything?", acc: ["no one", "nobody", "none", "nil"], hint: "Minimum, not fixed.", why: "No one: the guarantee only works when the share is below it." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "s13", q: "State any three provisions of Section 13 that apply when the deed is silent.", hint: "Ratio, interest, salary, loan.", why: "",
      points: [{ p: "Profits shared equally", m: 1, k: ["equal"] }, { p: "No interest on capital / drawings", m: 1, k: ["interest on capital", "drawings"] }, { p: "No salary; loan interest 6%", m: 1, k: ["salary", "6%"] }],
      model: "<p>(i) Profits and losses are shared <b>equally</b>.</p><p>(ii) <b>No interest on capital</b> is allowed and <b>no interest on drawings</b> is charged.</p><p>(iii) <b>No salary or commission</b> is paid; interest on a partner's loan is allowed at <b>6% p.a.</b></p>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "iod", q: "Shreya withdrew ₹30,000 at the end of every quarter. Interest on drawings is 10% p.a. Calculate interest on drawings, showing the average period.", hint: "Quarter end = 4.5.", why: "",
      points: [{ p: "Total drawings ₹1,20,000", m: 1, k: ["1,20,000", "120000"] }, { p: "Average period 4.5 months", m: 1, k: ["4.5"] }, { p: "Interest <b>₹4,500</b>", m: 1, k: ["4,500", "4500"] }],
      model: "<p>Total drawings = 30,000 × 4 = <b>₹1,20,000</b>. End of every quarter → average period <b>4.5 months</b>.</p><p>Interest = 1,20,000 × 10/100 × 4.5/12 = <b>₹4,500</b>.</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "capac", q: "Distinguish between fixed and fluctuating capital accounts on four bases.", hint: "Number of accounts, change, balance, adjustments.", why: "",
      points: [{ p: "Number of accounts: two vs one", m: 1, k: ["two", "one"] }, { p: "Capital balance: stays same vs changes", m: 1, k: ["same", "chang", "fluctuat"] }, { p: "Where adjustments go: Current A/c vs Capital A/c", m: 1, k: ["current"] }, { p: "Debit balance: Current A/c may show debit; capital normally credit (vs can be debit)", m: 1, k: ["debit"] }],
      model: "<table><tr><th>Basis</th><th>Fixed</th><th>Fluctuating</th></tr><tr><td>Accounts</td><td>Two: Capital and Current</td><td>One: Capital</td></tr><tr><td>Capital balance</td><td>Remains the same unless capital is added or withdrawn</td><td>Changes every year</td></tr><tr><td>Adjustments (interest, salary, share, drawings)</td><td>In Current Account</td><td>In Capital Account</td></tr><tr><td>Debit balance</td><td>Capital always credit; Current may be debit</td><td>Capital may show a debit balance</td></tr></table>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "insuff", q: "P and Q have capitals of ₹3,00,000 and ₹2,00,000 and share profits 2 : 1. The deed allows interest on capital at 10% p.a. Profit for the year is ₹40,000. Show the distribution if interest on capital is (a) an appropriation and (b) a charge.", hint: "(a) ratio of interest; (b) allow interest, loss shared 2 : 1.", why: "",
      points: [{ p: "Interest due ₹30,000 and ₹20,000", m: 1, k: ["30,000", "20,000"] }, { p: "(a) 40,000 in 3 : 2 → P <b>₹24,000</b>, Q <b>₹16,000</b>", m: 1, k: ["24,000", "16,000"] }, { p: "(b) Interest in full; loss ₹10,000", m: 1, k: ["10,000", "loss"] }, { p: "(b) Loss 2 : 1 → P ₹6,667, Q ₹3,333 (net P 23,333, Q 16,667)", m: 1, k: ["6,667", "3,333"] }],
      model: "<p>Interest due: P 10% of 3,00,000 = <b>₹30,000</b>; Q 10% of 2,00,000 = <b>₹20,000</b>; total ₹50,000.</p><p><b>(a) Appropriation:</b> only ₹40,000 is available, shared in the ratio of interest 30 : 20 → P <b>₹24,000</b>, Q <b>₹16,000</b>.</p><p><b>(b) Charge:</b> interest is allowed in full (₹50,000), leaving a loss of ₹10,000 shared 2 : 1 → P ₹6,667, Q ₹3,333. Net: P 30,000 − 6,667 = <b>₹23,333</b>; Q 20,000 − 3,333 = <b>₹16,667</b>.</p>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "approp", q: "Gagan, Hema and Inder share profits 2 : 2 : 1. The deed allows Hema a salary of ₹3,000 per month, Inder a commission of ₹9,000, interest on capital at 5% on capitals of ₹2,00,000, ₹2,00,000 and ₹1,00,000, and a transfer of ₹15,000 to General Reserve. Net profit is ₹1,75,000. Prepare the Profit and Loss Appropriation Account.", hint: "Salary 36,000; interest 25,000; then share.", why: "",
      points: [{ p: "Interest on capital: 10,000, 10,000, 5,000", m: 1, k: ["10,000", "5,000", "25,000"] }, { p: "Salary to Hema ₹36,000", m: 1, k: ["36,000"] }, { p: "Commission ₹9,000 and reserve ₹15,000 debited", m: 1, k: ["9,000", "15,000"] }, { p: "Divisible profit <b>₹90,000</b>", m: 1, k: ["90,000"] }, { p: "Shares: Gagan ₹36,000, Hema ₹36,000, Inder ₹18,000", m: 1, k: ["36,000", "18,000"] }, { p: "Correct format: net profit on credit; totals ₹1,75,000", m: 1, k: ["1,75,000"] }],
      model: "<table><tr><th>Dr</th><th>₹</th><th>Cr</th><th>₹</th></tr><tr><td>To Interest on Capital: Gagan 10,000; Hema 10,000; Inder 5,000</td><td>25,000</td><td>By Net Profit b/d</td><td>1,75,000</td></tr><tr><td>To Salary to Hema (3,000 × 12)</td><td>36,000</td><td></td><td></td></tr><tr><td>To Commission to Inder</td><td>9,000</td><td></td><td></td></tr><tr><td>To General Reserve</td><td>15,000</td><td></td><td></td></tr><tr><td>To Profit: Gagan 36,000; Hema 36,000; Inder 18,000</td><td>90,000</td><td></td><td></td></tr><tr><td><b>Total</b></td><td><b>1,75,000</b></td><td><b>Total</b></td><td><b>1,75,000</b></td></tr></table><p>Divisible profit = 1,75,000 − 25,000 − 36,000 − 9,000 − 15,000 = ₹90,000, shared 2 : 2 : 1.</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "guar", q: "Lata, Mohan and Nisha share profits 3 : 2 : 1. Nisha is guaranteed a minimum profit of ₹25,000, the deficiency to be borne by Lata and Mohan in their profit-sharing ratio. The profit for the year is ₹1,20,000. Prepare the Profit and Loss Appropriation Account.", hint: "Nisha's share 20,000; deficiency 5,000 in 3 : 2.", why: "",
      points: [{ p: "Normal shares 60,000, 40,000, 20,000", m: 1, k: ["60,000", "40,000", "20,000"] }, { p: "Deficiency ₹5,000", m: 1, k: ["5,000"] }, { p: "Borne 3 : 2 → Lata ₹3,000, Mohan ₹2,000", m: 1, k: ["3,000", "2,000"] }, { p: "Lata ₹57,000", m: 1, k: ["57,000"] }, { p: "Mohan ₹38,000", m: 1, k: ["38,000"] }, { p: "Nisha ₹25,000; account totals ₹1,20,000", m: 1, k: ["25,000", "1,20,000"] }],
      model: "<p>Normal shares: Lata 60,000; Mohan 40,000; Nisha 20,000. Deficiency = 25,000 − 20,000 = <b>₹5,000</b>, borne 3 : 2 → Lata ₹3,000, Mohan ₹2,000.</p><table><tr><th>Dr</th><th>₹</th><th>Cr</th><th>₹</th></tr><tr><td>To Lata's Capital (60,000 − 3,000)</td><td>57,000</td><td>By Net Profit b/d</td><td>1,20,000</td></tr><tr><td>To Mohan's Capital (40,000 − 2,000)</td><td>38,000</td><td></td><td></td></tr><tr><td>To Nisha's Capital (20,000 + 5,000)</td><td>25,000</td><td></td><td></td></tr><tr><td><b>Total</b></td><td><b>1,20,000</b></td><td><b>Total</b></td><td><b>1,20,000</b></td></tr></table>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "loan", q: "A partner says, 'My ₹50,000 loan should earn interest only if the firm makes a profit.' This is", o: ["Correct, interest is an appropriation", "Incorrect, loan interest is a charge", "Correct under Section 13", "Incorrect, loans earn no interest"], a: 1, hint: "Charge vs appropriation.", why: "Loan interest is a <b>charge</b>, payable even in a loss." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "past", q: "Interest on capital was omitted last year. A gets ₹2,000 Cr and B ₹2,000 Dr as net effect. The entry is", o: ["A's Capital Dr, To B's Capital", "B's Capital Dr, To A's Capital", "P&L Adjustment Dr, To A's Capital", "No entry needed"], a: 1, hint: "Debit the one with net debit.", why: "<b>B's Capital A/c Dr, To A's Capital A/c</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "iod", q: "A partner withdrew ₹4,000 at the end of each month from October to March (6 months); interest is charged till 31 March at 12%. Average period:", o: ["2.5 months", "3 months", "3.5 months", "6 months"], a: 0, hint: "Months left: 5, 4, 3, 2, 1, 0.", why: "(5 + 0) ÷ 2 = <b>2.5 months</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "s13", passage: "<b>Tara</b> and <b>Uday</b> started a bakery without any written agreement. Tara works all day; Uday only invests.", q: "Tara's claim for a monthly salary will be:", o: ["Accepted as she works", "Rejected under Section 13", "Accepted at 6%", "Decided by capital ratio"], a: 1, hint: "No deed.", why: "No salary without agreement (<b>Section 13</b>)." },
    { id: "q32", t: "case", d: "M", m: 1, c: "comm", passage: "<b>Vivek</b> gets a commission of 5% of net profit <b>after charging such commission</b>. Net profit before commission is ₹2,10,000.", q: "Vivek's commission is", o: ["₹10,500", "₹10,000", "₹11,000", "₹9,500"], a: 1, hint: "× 5/105.", why: "2,10,000 × 5/105 = <b>₹10,000</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "guar", passage: "The firm guarantees new partner <b>Zara</b> ₹40,000. Partners W, X and Zara share 2 : 2 : 1. Profit is ₹1,50,000.", q: "Who bears Zara's deficiency, and how much does W bear?", o: ["W alone, ₹10,000", "W and X equally, ₹5,000", "W and X 2 : 2 : 1, ₹4,000", "Nobody"], a: 1, hint: "Zara's share 30,000; firm's guarantee → others in their ratio.", why: "Deficiency 10,000; guarantee by the firm → W and X in 2 : 2 → <b>₹5,000</b> each." }
  ],
  find: {
    mcq: [
      { s: "Two friends agree to buy and sell used phones and split the profit; each can sign deals for both.", o: ["Partnership", "Joint venture only", "Sole proprietorship", "Company"], a: 0, c: "def", d: "E", why: "Agreement + business + profit sharing + mutual agency: <b>partnership</b>." },
      { s: "The firm's books show 'Interest on Rahul's Loan' on the debit of the P&L Account.", o: ["Charge against profit", "Appropriation of profit", "Interest on drawings", "Past adjustment"], a: 0, c: "loan", d: "E", why: "A <b>charge</b>." },
      { s: "Partners agree on salaries, ratios and interest in a written document signed by all.", o: ["Partnership deed", "Memorandum of association", "Prospectus", "Balance sheet"], a: 0, c: "deed", d: "E", why: "<b>Partnership deed</b>." },
      { s: "There is no deed; one partner lent money; interest charged at 6%.", o: ["Section 13 rule", "Guarantee of profit", "Past adjustment", "Commission"], a: 0, c: "s13", d: "E", why: "<b>Section 13</b>." },
      { s: "Profit of ₹40,000 is split 3 : 2 because interest due was ₹30,000 and ₹20,000.", o: ["Insufficient profit", "Guarantee", "Commission", "Past adjustment"], a: 0, c: "insuff", d: "M", why: "Profit short of interest → divided in ratio of interest: <b>insufficient profit</b>." },
      { s: "Each partner has a Capital Account that never changes and a second account for drawings and shares.", o: ["Fixed capital method", "Fluctuating capital method", "Loan account", "Goodwill account"], a: 0, c: "capac", d: "M", why: "<b>Fixed capital</b> (Capital + Current Accounts)." },
      { s: "Commission worked out as profit × 10 ÷ 110.", o: ["Commission after charging", "Commission before charging", "Interest on capital", "Interest on drawings"], a: 0, c: "comm", d: "M", why: "<b>After charging such commission</b>." },
      { s: "Amount × months remaining is totalled and multiplied by rate ÷ 12.", o: ["Product method", "Average period", "Ratio of interest", "Net effect table"], a: 0, c: "iod", d: "M", why: "<b>Product method</b>." },
      { s: "Equal monthly drawings at the beginning: 6.5 months used.", o: ["Average period method", "Product method", "Section 13", "Guarantee"], a: 0, c: "iod", d: "M", why: "<b>Average period</b>." },
      { s: "A shortfall in one partner's share is made up by another partner who promised it.", o: ["Guarantee of profit", "Past adjustment", "Insufficient profit", "Charge"], a: 0, c: "guar", d: "M", why: "<b>Guarantee of minimum profit</b>." },
      { s: "One journal entry transfers ₹2,000 from B's Capital to A's Capital after last year's error is found.", o: ["Past adjustment", "Guarantee", "Commission", "Drawings"], a: 0, c: "past", d: "C", why: "<b>Past adjustment</b> for the net effect." },
      { s: "Interest on capital is allowed even though the firm made a loss, because the deed says so.", o: ["Interest treated as a charge", "Interest as appropriation", "Section 13", "Guarantee"], a: 0, c: "insuff", d: "C", why: "Treated as a <b>charge</b>." },
      { s: "Firm's profit of ₹60,000 is credited to the Appropriation Account along with ₹3,000 from partners.", o: ["Interest on drawings", "Interest on loan", "Salary", "Reserve"], a: 0, c: "approp", d: "C", why: "The ₹3,000 is <b>interest on drawings</b>, a credit." },
      { s: "Partners' total share in the Appropriation Account is less than net profit because ₹15,000 went to General Reserve.", o: ["Transfer to reserve", "Charge", "Past adjustment", "Guarantee"], a: 0, c: "approp", d: "C", why: "<b>Transfer to reserve</b> is an appropriation." },
      { s: "A partner's Current Account shows a debit balance at year-end.", o: ["Drawings exceeded credits", "Capital was withdrawn", "Loan was repaid", "Guarantee failed"], a: 0, c: "capac", d: "C", why: "Debit balance arises when <b>drawings and losses exceed</b> interest, salary and share." },
      { s: "Partners share profits equally even though capitals are ₹6 lakh and ₹2 lakh; no document exists.", o: ["Section 13", "Guarantee", "Past adjustment", "Commission"], a: 0, c: "s13", d: "C", why: "No deed → <b>equal</b> sharing under Section 13." }
    ],
    match: [
      { title: "Drag each situation onto its concept.", pairs: [["Firm pays 6% on a partner's advance with no agreement", "Section 13", "s13"], ["Profit × 10 ÷ 110", "Commission after charging", "comm"], ["Amount × months left, summed", "Product method", "iod"], ["Profit split in ratio of interest due", "Insufficient profit", "insuff"], ["One entry for last year's omission", "Past adjustment", "past"], ["Shortfall paid by another partner", "Guarantee of profit", "guar"]] }
    ],
    wrong: [
      { stmts: ["Interest on a partner's loan is a charge.", "Interest on drawings is credited to the Appropriation Account.", "Salary to a partner is debited to the Profit and Loss Account.", "Transfer to reserve is an appropriation."], a: 2, c: "approp", why: "Salary to a partner is an <b>appropriation</b>, debited to the Appropriation Account." },
      { stmts: ["Without a deed, profits are shared equally.", "Without a deed, interest on capital is allowed at 6%.", "Without a deed, no salary is paid.", "Without a deed, loan interest is 6% p.a."], a: 1, c: "s13", why: "No interest on capital is allowed under Section 13; 6% is for <b>loans</b>." },
      { stmts: ["Monthly at the beginning: 6.5 months.", "Quarterly at the end: 4.5 months.", "Half-yearly at the beginning: 3 months.", "Monthly at the end: 5.5 months."], a: 2, c: "iod", why: "Half-yearly at the beginning is <b>9 months</b>." },
      { stmts: ["A guarantee is a minimum amount.", "The guarantor bears the deficiency.", "If the share exceeds the guarantee, it is reduced to the guarantee.", "Several guarantors bear it in the agreed ratio."], a: 2, c: "guar", why: "A higher share is <b>kept</b>; the guarantee is only a floor." }
    ],
    para: [
      { target: "Interest on partner's loan", c: "loan", sents: ["Riya and Sam run a pottery studio.", "Sam lent the studio ₹40,000 to buy a kiln.", "At year-end, ₹2,400 was debited to the Profit and Loss Account for Sam.", "Profits were then divided equally."], a: 2, why: "₹2,400 (6% of 40,000) in the P&L Account: <b>interest on loan</b>." },
      { target: "Past adjustment", c: "past", sents: ["The 2025-26 accounts of a firm were closed in May.", "In June the accountant found that a partner's salary had not been given.", "A single entry was passed through the partners' Current Accounts.", "The firm then prepared its budget."], a: 2, why: "One entry correcting a closed year: <b>past adjustment</b>." },
      { target: "Guarantee of profit", c: "guar", sents: ["Asha joined as a partner with a 1/6 share.", "The senior partner promised she would get at least ₹30,000 a year.", "Her share came to ₹24,000.", "The senior partner gave up ₹6,000 of his share to her."], a: 3, why: "The shortfall paid by the guarantor: <b>guarantee</b> in action." }
    ],
    explain: [
      { s: "Partners' capitals stayed at ₹5,00,000 each for three years though profits were earned.", o: ["Fixed capital method", "Fluctuating capital", "Section 13", "Past adjustment"], a: 0, c: "capac", why: "The clue is <i>capitals stayed the same</i>: <b>fixed capitals</b>." },
      { s: "Drawings of ₹2,000 at the end of each month, interest for 5.5 months.", o: ["Average period method", "Product method", "Commission", "Guarantee"], a: 0, c: "iod", why: "Equal amounts at regular intervals: <b>average period</b>." },
      { s: "Profit of ₹20,000 was given to partners in the ratio of salary and interest due to them.", o: ["Insufficient profit", "Guarantee", "Past adjustment", "Section 13"], a: 0, c: "insuff", why: "Profit short of appropriations: <b>insufficient profit</b>." },
      { s: "A partner was paid ₹11,000 on a profit of ₹1,21,000 at 10%.", o: ["Commission after charging", "Commission before charging", "Interest on capital", "Interest on loan"], a: 0, c: "comm", why: "1,21,000 × 10/110 = 11,000: <b>commission after charging</b>." }
    ]
  }
});
