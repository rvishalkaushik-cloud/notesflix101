/* Revision Arena · Class XII Accountancy · Chapter 9 · Accounting Ratios (Parts 1-4). Original cases; every ratio recomputed. */
NFArena.register({
  id: "acc-ratios", cls: "XII", subject: "Accountancy", unit: "Chapter", num: "9",
  title: "Accounting Ratios",
  tagline: "Liquidity, solvency, activity and profitability: 18 ratios, their formulas, and the effect of transactions.",
  notesLink: "../#acc-ratios",
  concepts: {
    meaning: { n: "Meaning, types and uses of ratios", s: "liq" },
    current: { n: "Current ratio", s: "liq" },
    quick: { n: "Quick (liquid) ratio", s: "liq" },
    effect: { n: "Effect of transactions on ratios", s: "liq" },
    de: { n: "Debt-equity and debt to capital employed", s: "solv" },
    prop: { n: "Proprietary and total assets to debt ratio", s: "solv" },
    icr: { n: "Interest coverage ratio", s: "solv" },
    inv: { n: "Inventory turnover ratio", s: "act" },
    recv: { n: "Trade receivables and payables turnover", s: "act" },
    wc: { n: "Working capital, fixed and net asset turnover", s: "act" },
    gp: { n: "Gross profit ratio", s: "prof" },
    op: { n: "Operating and operating profit ratio", s: "prof" },
    np: { n: "Net profit ratio and return on investment", s: "prof" }
  },
  overview: {
    text: "An <b>accounting ratio</b> is a mathematical relationship between two related figures in the financial statements. Ratios are grouped into <b>liquidity</b> (can the company pay short-term bills?), <b>solvency</b> (can it repay long-term debt?), <b>activity</b> (how fast do assets move?) and <b>profitability</b> (how much does it earn?).",
    points: [
      "Ratios can be shown as a <b>pure ratio</b> (2 : 1), a <b>percentage</b> (25%), a <b>rate/times</b> (8 times) or a <b>fraction</b>.",
      "<b>Quick assets</b> = Current assets − Inventories − Prepaid expenses.",
      "<b>Capital employed</b> = Shareholders' funds + Long-term debt = Total assets − Current liabilities.",
      "<b>Operating ratio + Operating profit ratio = 100%</b>."
    ],
    map: {
      center: "Accounting Ratios",
      branches: [
        { t: "Liquidity", c: ["Current ratio", "Quick ratio", "Effect of transactions"] },
        { t: "Solvency", c: ["Debt-equity", "Debt to capital employed", "Total assets to debt", "Proprietary", "Interest coverage"] },
        { t: "Activity", c: ["Inventory turnover", "Receivables / payables turnover", "Working capital, fixed and net asset turnover"] },
        { t: "Profitability", c: ["Gross profit", "Operating / operating profit", "Net profit", "Return on investment"] }
      ]
    }
  },
  sections: [
    {
      id: "liq", title: "Liquidity ratios", sub: "Can it pay its bills on time?", icon: "💧", color: "#4da3ff",
      quick: [
        "<b>Current ratio</b> = Current assets ÷ Current liabilities. Ideal about <b>2 : 1</b>.",
        "<b>Quick ratio</b> = Quick assets ÷ Current liabilities. Ideal about <b>1 : 1</b>. Quick assets = CA − Inventories − Prepaid expenses.",
        "<b>Effect of a transaction:</b> if both CA and CL change by the same amount, the ratio moves <b>towards 1</b> when both rise and <b>away from 1</b> when both fall (for a ratio above 1).",
        "A transaction that only swaps one current asset for another leaves the current ratio <b>unchanged</b>."
      ],
      table: { cap: "Effect on current ratio 2 : 1", head: ["Transaction", "CA", "CL", "Current ratio"], rows: [["Paid a creditor", "Falls", "Falls", "Increases"], ["Goods bought on credit", "Rises", "Rises", "Decreases"], ["Cash collected from debtors", "No change", "No change", "No change"], ["Machinery bought for cash", "Falls", "No change", "Decreases"], ["Machinery sold for cash", "Rises", "No change", "Increases"], ["Short-term loan taken in cash", "Rises", "Rises", "Decreases"]] },
      cards: [
        { t: "Worked example", tag: "eg", b: "<p>CA ₹8,00,000 (inventories ₹3,00,000, prepaid ₹20,000); CL ₹4,00,000.</p><p>Current ratio = 8,00,000 ÷ 4,00,000 = <b>2 : 1</b>. Quick assets = 4,80,000; quick ratio = <b>1.2 : 1</b>.</p>" },
        { t: "Find CL from working capital", tag: "tip", b: "<p>Working capital ₹90,000; current ratio 2.5 : 1. CA − CL = 1.5 CL = 90,000 → <b>CL = ₹60,000</b>, CA = ₹1,50,000.</p>" },
        { t: "Reading the pair", tag: "why", b: "<p>Current ratio 2.6 : 1 but quick ratio 0.6 : 1 → most current assets are <b>inventory</b>; the firm may struggle to pay bills quickly.</p>" }
      ],
      exam: ["Goods bought for cash: current ratio unchanged, quick ratio falls (cash → inventory)."]
    },
    {
      id: "solv", title: "Solvency ratios", sub: "Is long-term debt safe?", icon: "🏗️", color: "#22c55e",
      quick: [
        "<b>Long-term debt</b> = Long-term borrowings + Long-term provisions. <b>Shareholders' funds (equity)</b> = Share capital + Reserves and surplus.",
        "<b>Debt-equity</b> = Long-term debt ÷ Shareholders' funds. Safe limit about <b>2 : 1</b>.",
        "<b>Debt to capital employed</b> = Long-term debt ÷ Capital employed.",
        "<b>Total assets to debt</b> = Total assets ÷ Long-term debt. <b>Proprietary ratio</b> = Shareholders' funds ÷ Total assets.",
        "<b>Interest coverage</b> = Profit before interest and tax ÷ Interest on long-term debt (times)."
      ],
      table: { cap: "Effect on debt-equity 1 : 1", head: ["Transaction", "Debt", "Equity", "Ratio"], rows: [["Issue of equity shares for cash", "Same", "Rises", "Decreases"], ["Issue of debentures", "Rises", "Same", "Increases"], ["Redemption of debentures", "Falls", "Same", "Decreases"], ["Bonus shares from reserves", "Same", "Same", "No change"]] },
      cards: [
        { t: "Worked example", tag: "eg", b: "<p>LT debt ₹7,00,000; shareholders' funds ₹14,00,000; total assets ₹25,00,000; CL ₹4,00,000.</p><p>Debt-equity <b>0.5 : 1</b>; CE = 21,00,000; debt to CE <b>0.33 : 1</b>; total assets to debt <b>3.57 : 1</b>; proprietary <b>0.56 : 1</b>.</p>" },
        { t: "Interest coverage from net profit", tag: "eg", b: "<p>Profit after interest and tax ₹3,50,000; tax ₹1,50,000; interest ₹1,00,000.</p><p>PBIT = 6,00,000 → coverage = <b>6 times</b>.</p>" }
      ],
      exam: ["A debit balance of the Statement of P&L is <b>deducted</b> from shareholders' funds."]
    },
    {
      id: "act", title: "Activity (turnover) ratios", sub: "How fast things move", icon: "🔁", color: "#f5b301",
      quick: [
        "<b>Inventory turnover</b> = Cost of revenue from operations ÷ Average inventory. Cost of revenue = Opening inventory + Purchases + Direct expenses − Closing inventory (or Revenue − Gross profit).",
        "<b>Trade receivables turnover</b> = Credit revenue ÷ Average trade receivables (debtors + bills receivable). Collection period = 365 ÷ turnover (days) or 12 ÷ turnover (months).",
        "<b>Trade payables turnover</b> = Credit purchases ÷ Average trade payables. Payment period = 365 ÷ turnover.",
        "<b>Working capital turnover</b> = Revenue ÷ Working capital. <b>Fixed asset turnover</b> = Revenue ÷ Net fixed assets. <b>Net asset turnover</b> = Revenue ÷ Capital employed."
      ],
      cards: [
        { t: "Worked example: inventory", tag: "eg", b: "<p>Revenue ₹12,00,000; gross profit 25% <b>on cost</b>; average inventory ₹1,60,000.</p><p>Cost = 12,00,000 × 100/125 = 9,60,000 → turnover = <b>6 times</b>.</p>" },
        { t: "Worked example: receivables", tag: "eg", b: "<p>Credit revenue ₹7,30,000; average receivables ₹73,000 → <b>10 times</b>; collection period 365 ÷ 10 = <b>36.5 days</b>.</p>" },
        { t: "Reading the trend", tag: "why", b: "<p>Inventory turnover falling from 8 to 5 times → stock is moving slowly (overstocking or weak sales). Collection period rising from 30 to 60 days → customers are paying slowly.</p>" }
      ],
      exam: ["Mark-up on cost: convert to cost first (× 100 ÷ (100 + markup))."]
    },
    {
      id: "prof", title: "Profitability ratios", sub: "How much does it earn?", icon: "💰", color: "#ff5470",
      quick: [
        "<b>Gross profit ratio</b> = Gross profit ÷ Revenue from operations × 100. With a mark-up of x% on cost, GP ratio = x ÷ (100 + x) × 100.",
        "<b>Operating ratio</b> = (Cost of revenue + Operating expenses) ÷ Revenue × 100. Non-operating items (loss on sale of assets, interest) are <b>excluded</b>.",
        "<b>Operating profit ratio</b> = Operating profit ÷ Revenue × 100 = <b>100 − Operating ratio</b>.",
        "<b>Net profit ratio</b> = Net profit ÷ Revenue × 100 (after tax unless asked before tax).",
        "<b>Return on investment (ROI)</b> = Profit before interest and tax ÷ Capital employed × 100."
      ],
      cards: [
        { t: "Worked example: GP and mark-up", tag: "eg", b: "<p>Revenue ₹5,00,000; cost of revenue ₹3,50,000 → GP 1,50,000 = <b>30%</b>.</p><p>Goods sold at 25% above cost → GP ratio = 25 ÷ 125 × 100 = <b>20%</b>.</p>" },
        { t: "Worked example: ROI", tag: "eg", b: "<p>PBIT ₹3,00,000; capital employed ₹15,00,000 → ROI = <b>20%</b>.</p>" },
        { t: "Net profit after tax", tag: "eg", b: "<p>Revenue ₹20,00,000; PBT ₹3,00,000; tax 30% → PAT 2,10,000; NP ratio = <b>10.5%</b>.</p>" }
      ],
      exam: ["Operating ratio 78% → operating profit ratio 22%."]
    }
  ],
  flashcards: [
    { k: "Meaning", c: "meaning", q: "What is an accounting ratio?", a: "A mathematical relationship between two related accounting figures." },
    { k: "Types", c: "meaning", q: "Name the four types of ratios.", a: "Liquidity, solvency, activity (turnover) and profitability." },
    { k: "Formula", c: "current", q: "Current ratio?", a: "Current assets ÷ Current liabilities (ideal about 2 : 1)." },
    { k: "Formula", c: "quick", q: "Quick assets?", a: "Current assets − Inventories − Prepaid expenses." },
    { k: "Effect", c: "effect", q: "Current ratio 2 : 1. Paying a creditor makes it…?", a: "Increase (both fall, ratio above 1 moves away from 1)." },
    { k: "Formula", c: "de", q: "Debt-equity ratio?", a: "Long-term debt ÷ Shareholders' funds." },
    { k: "Definition", c: "de", q: "Long-term debt includes…?", a: "Long-term borrowings + Long-term provisions." },
    { k: "Formula", c: "de", q: "Capital employed?", a: "Shareholders' funds + Long-term debt (= Total assets − Current liabilities)." },
    { k: "Formula", c: "prop", q: "Proprietary ratio?", a: "Shareholders' funds ÷ Total assets." },
    { k: "Formula", c: "icr", q: "Interest coverage ratio?", a: "PBIT ÷ Interest on long-term debt." },
    { k: "Formula", c: "inv", q: "Inventory turnover ratio?", a: "Cost of revenue from operations ÷ Average inventory." },
    { k: "Formula", c: "recv", q: "Collection period with turnover of 8 times (12-month year)?", a: "12 ÷ 8 = 1.5 months." },
    { k: "Formula", c: "wc", q: "Working capital turnover?", a: "Revenue from operations ÷ Working capital." },
    { k: "Formula", c: "gp", q: "GP ratio with 25% mark-up on cost?", a: "25 ÷ 125 × 100 = 20%." },
    { k: "Formula", c: "op", q: "Operating ratio + operating profit ratio = ?", a: "100%." },
    { k: "Formula", c: "np", q: "Return on investment?", a: "PBIT ÷ Capital employed × 100." },
    { k: "Exclude", c: "op", q: "Is loss on sale of a fixed asset an operating expense?", a: "No: it is non-operating, so it is excluded from the operating ratio." },
    { k: "Effect", c: "effect", q: "Bonus shares issued from reserves: effect on debt-equity?", a: "No change: shareholders' funds unchanged." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Is Kiran Ltd liquid?",
      text: "<p><span class='co'>Kiran Ltd</span> has current assets of ₹6,00,000, which include inventories of ₹2,40,000 and prepaid expenses of ₹10,000. Its current liabilities are ₹3,50,000. A supplier wants to know whether to give 60 days' credit.</p>",
      qs: [
        { q: "Calculate the current ratio and quick ratio and advise the supplier.", m: 3, type: "Calculate and advise", c: "quick", ans: "Current 1.71 : 1; quick 1 : 1", keys: ["1.71", "1 : 1", "1:1"], hint: "Quick assets = 6,00,000 − 2,40,000 − 10,000.",
          points: [{ p: "Current ratio = 6,00,000 ÷ 3,50,000 = <b>1.71 : 1</b>", m: 1, k: ["1.71"] }, { p: "Quick ratio = 3,50,000 ÷ 3,50,000 = <b>1 : 1</b>", m: 1, k: ["1 : 1", "1:1", "3,50,000"] }, { p: "Advice: quick ratio at the ideal 1 : 1, so short-term credit is reasonably safe", m: 1, k: ["safe", "ideal", "can"] }],
          structure: ["Two ratios with working, one-line advice."],
          model: "<p>Current ratio = 6,00,000 ÷ 3,50,000 = <b>1.71 : 1</b> (a little below the ideal 2 : 1).</p><p>Quick assets = 6,00,000 − 2,40,000 − 10,000 = 3,50,000. Quick ratio = 3,50,000 ÷ 3,50,000 = <b>1 : 1</b>.</p><p>The quick ratio equals the ideal 1 : 1, so Kiran Ltd can meet its immediate liabilities. Credit can be given, while watching the slightly low current ratio.</p>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "Five transactions, one ratio",
      text: "<p><span class='co'>Lotus Ltd</span> has a current ratio of <b>2 : 1</b> and a quick ratio of <b>1.5 : 1</b>. The accountant lists: (i) paid a trade payable ₹20,000; (ii) bought goods on credit ₹30,000; (iii) collected ₹15,000 from trade receivables; (iv) bought goods for cash ₹10,000.</p>",
      qs: [
        { q: "State the effect (increase, decrease or no change) of each transaction on the current ratio, with a reason.", m: 4, type: "Analyse", c: "effect", ans: "(i) increase (ii) decrease (iii) no change (iv) no change", keys: ["increase", "decrease", "no change"], hint: "Both change → towards/away from 1.",
          points: [{ p: "(i) <b>Increase</b>: CA and CL fall equally; ratio above 1 moves away from 1", m: 1, k: ["increase"] }, { p: "(ii) <b>Decrease</b>: CA and CL rise equally; ratio moves towards 1", m: 1, k: ["decrease"] }, { p: "(iii) <b>No change</b>: one current asset replaces another", m: 1, k: ["no change"] }, { p: "(iv) <b>No change</b>: cash becomes inventory, CA total same", m: 1, k: ["no change", "same"] }],
          structure: ["Effect + reason for each."],
          model: "<p>(i) <b>Increase</b>: CA and CL both fall by ₹20,000; a ratio above 1 moves away from 1.</p><p>(ii) <b>Decrease</b>: CA (inventory) and CL (payables) both rise by ₹30,000; the ratio moves towards 1.</p><p>(iii) <b>No change</b>: cash rises and receivables fall by the same amount.</p><p>(iv) <b>No change</b> in current ratio: cash turns into inventory. (The quick ratio would fall.)</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "How safely is Vinay Ltd financed?",
      text: "<p><span class='co'>Vinay Ltd</span>: share capital ₹10,00,000; reserves and surplus ₹4,00,000; long-term borrowings ₹6,00,000; long-term provisions ₹2,00,000; current liabilities ₹2,00,000; total assets ₹24,00,000. Profit before interest and tax ₹4,80,000; interest on long-term borrowings ₹60,000.</p>",
      qs: [
        { q: "Calculate debt-equity, total assets to debt, proprietary ratio and interest coverage ratio.", m: 6, type: "Calculate and interpret", c: "de", ans: "0.57 : 1; 3 : 1; 0.58 : 1; 8 times", keys: ["0.57", "3 : 1", "8"], hint: "LT debt = 8,00,000; SHF = 14,00,000.",
          points: [{ p: "Long-term debt ₹8,00,000; shareholders' funds ₹14,00,000", m: 1, k: ["8,00,000", "14,00,000"] }, { p: "Debt-equity = <b>0.57 : 1</b>", m: 1, k: ["0.57"] }, { p: "Total assets to debt = <b>3 : 1</b>", m: 1, k: ["3 : 1", "3:1"] }, { p: "Proprietary = 14,00,000 ÷ 24,00,000 = <b>0.58 : 1</b>", m: 1, k: ["0.58"] }, { p: "Interest coverage = 4,80,000 ÷ 60,000 = <b>8 times</b>", m: 1, k: ["8 times", "8"] }, { p: "Interpretation: low debt, strong cover → financially safe", m: 1, k: ["safe", "sound", "low"] }],
          structure: ["Base figures, four ratios, one-line interpretation."],
          model: "<p>Long-term debt = 6,00,000 + 2,00,000 = <b>₹8,00,000</b>. Shareholders' funds = 10,00,000 + 4,00,000 = <b>₹14,00,000</b>.</p><p>Debt-equity = 8,00,000 ÷ 14,00,000 = <b>0.57 : 1</b>.</p><p>Total assets to debt = 24,00,000 ÷ 8,00,000 = <b>3 : 1</b>.</p><p>Proprietary = 14,00,000 ÷ 24,00,000 = <b>0.58 : 1</b>.</p><p>Interest coverage = 4,80,000 ÷ 60,000 = <b>8 times</b>.</p><p>Debt is well below the safe 2 : 1 and profit covers interest 8 times, so the company is <b>financially safe</b>.</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "Stock that will not move",
      text: "<p><span class='co'>Ruby Garments Ltd</span>: revenue from operations ₹12,00,000 (all credit); gross profit is 25% <b>on cost</b>. Opening inventory ₹1,40,000; closing inventory ₹1,80,000. Trade receivables: opening ₹1,00,000, closing ₹1,40,000. Last year, inventory turnover was 8 times and the collection period was 30 days.</p>",
      qs: [
        { q: "Calculate the inventory turnover ratio and the collection period (365 days). Compare with last year and suggest one action.", m: 6, type: "Calculate and evaluate", c: "inv", ans: "Cost 9,60,000; inventory turnover 6 times; receivables turnover 10 times; collection period 36.5 days", keys: ["6 times", "36.5"], hint: "Cost = 12,00,000 × 100/125.",
          points: [{ p: "Cost of revenue = <b>₹9,60,000</b>", m: 1, k: ["9,60,000"] }, { p: "Average inventory ₹1,60,000", m: 1, k: ["1,60,000"] }, { p: "Inventory turnover = <b>6 times</b>", m: 1, k: ["6 times", "6"] }, { p: "Average receivables ₹1,20,000; turnover 10 times", m: 1, k: ["1,20,000", "10"] }, { p: "Collection period = <b>36.5 days</b>", m: 1, k: ["36.5"] }, { p: "Both worsened (8 → 6; 30 → 36.5 days); action: clear old stock / tighten credit", m: 1, k: ["slow", "worse", "tighten", "clear", "reduce"] }],
          structure: ["Inventory turnover, collection period, comparison, one action."],
          model: "<p>Cost of revenue = 12,00,000 × 100 ÷ 125 = <b>₹9,60,000</b>. Average inventory = (1,40,000 + 1,80,000) ÷ 2 = ₹1,60,000.</p><p>Inventory turnover = 9,60,000 ÷ 1,60,000 = <b>6 times</b> (last year 8).</p><p>Average receivables = (1,00,000 + 1,40,000) ÷ 2 = ₹1,20,000. Turnover = 12,00,000 ÷ 1,20,000 = 10 times. Collection period = 365 ÷ 10 = <b>36.5 days</b> (last year 30).</p><p>Stock moves slower and customers pay later. <b>Action:</b> clear slow-moving stock with offers and tighten credit terms.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Peeling the profit",
      text: "<p><span class='co'>Neon Lights Ltd</span>: revenue from operations ₹20,00,000; cost of revenue ₹14,00,000; operating expenses ₹2,60,000; loss on sale of machinery ₹40,000; interest on debentures ₹60,000. Tax rate 30%. Capital employed ₹15,00,000.</p>",
      qs: [
        { q: "Calculate GP ratio, operating ratio, operating profit ratio, net profit ratio (after tax) and ROI.", m: 6, type: "Calculate", c: "op", ans: "GP 30%; OR 83%; OPR 17%; NP 8.4%; ROI 20%", keys: ["30%", "83", "17", "20"], hint: "Loss on sale is non-operating; PBIT = 3,40,000 − 40,000.",
          points: [{ p: "GP ₹6,00,000 → GP ratio <b>30%</b>", m: 1, k: ["30"] }, { p: "Operating cost 16,60,000 → operating ratio <b>83%</b>", m: 1, k: ["83"] }, { p: "Operating profit 3,40,000 → OPR <b>17%</b>", m: 1, k: ["17"] }, { p: "PBT = 3,40,000 − 40,000 − 60,000 = 2,40,000; PAT 1,68,000", m: 1, k: ["2,40,000", "1,68,000"] }, { p: "NP ratio (after tax) = <b>8.4%</b>", m: 1, k: ["8.4"] }, { p: "PBIT 3,00,000 → ROI <b>20%</b>", m: 1, k: ["20"] }],
          structure: ["Layer by layer: GP → operating → PBIT → PBT → PAT, with ratios."],
          model: "<p>Gross profit = 20,00,000 − 14,00,000 = 6,00,000 → GP ratio = <b>30%</b>.</p><p>Operating cost = 14,00,000 + 2,60,000 = 16,60,000 → operating ratio = <b>83%</b>; operating profit ratio = <b>17%</b> (operating profit ₹3,40,000).</p><p>PBIT = 3,40,000 − 40,000 (non-operating loss) = ₹3,00,000. PBT = 3,00,000 − 60,000 = ₹2,40,000. Tax 30% = 72,000. PAT = ₹1,68,000 → NP ratio = 1,68,000 ÷ 20,00,000 = <b>8.4%</b>.</p><p>ROI = 3,00,000 ÷ 15,00,000 × 100 = <b>20%</b>.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "current", q: "The ideal current ratio is generally:", o: ["1 : 1", "2 : 1", "1 : 2", "3 : 1"], a: 1, hint: "Twice.", why: "<b>2 : 1</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "quick", q: "Which is NOT a quick asset?", o: ["Cash", "Trade receivables", "Inventories", "Marketable securities"], a: 2, hint: "Takes time to sell.", why: "<b>Inventories</b> are excluded." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "meaning", q: "Debt-equity ratio is a:", o: ["Liquidity ratio", "Solvency ratio", "Activity ratio", "Profitability ratio"], a: 1, hint: "Long-term.", why: "<b>Solvency</b> ratio." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "quick", q: "CA ₹3,00,000; inventories ₹1,00,000; CL ₹1,00,000. Quick ratio:", o: ["3 : 1", "2 : 1", "1 : 1", "1.5 : 1"], a: 1, hint: "2,00,000 ÷ 1,00,000.", why: "<b>2 : 1</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "prop", q: "Total assets ₹10,00,000; shareholders' funds ₹6,00,000. Proprietary ratio:", o: ["0.6 : 1", "1.67 : 1", "0.4 : 1", "6 : 1"], a: 0, hint: "SHF ÷ TA.", why: "<b>0.6 : 1</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "recv", q: "Trade receivables turnover is 8 times. Collection period (12-month year):", o: ["1.5 months", "8 months", "0.67 months", "45 days"], a: 0, hint: "12 ÷ 8.", why: "<b>1.5 months</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "current", q: "Working capital ₹90,000; current ratio 2.5 : 1. Current liabilities:", o: ["₹36,000", "₹60,000", "₹1,50,000", "₹2,25,000"], a: 1, hint: "1.5 CL = 90,000.", why: "<b>₹60,000</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "effect", q: "Current ratio is 1 : 1. Paying a creditor will:", o: ["Increase it", "Decrease it", "Not change it", "Make it zero"], a: 2, hint: "Both fall equally at 1 : 1.", why: "At 1 : 1, equal changes leave it <b>unchanged</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "effect", q: "Issue of bonus shares from reserves changes the debt-equity ratio.", r: "Bonus shares convert reserves into share capital.", a: 3, hint: "Shareholders' funds total?", why: "A is false (SHF unchanged); R is true." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "op", q: "Loss on sale of a fixed asset is excluded while calculating operating ratio.", r: "It is a non-operating expense.", a: 0, hint: "Operating vs not.", why: "Both true; R explains A." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "np", q: "Operating ratio and operating profit ratio together make 100%.", r: "ROI is calculated on profit after tax.", a: 2, hint: "PBIT.", why: "A true; R false (ROI uses <b>PBIT</b>)." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "quick", q: "Prepaid expenses are excluded from quick assets.", a: true, hint: "Cannot be turned into cash.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "icr", q: "Interest coverage is calculated on profit after tax.", a: false, hint: "Before interest and tax.", why: "False: <b>PBIT</b>." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "effect", q: "Goods bought for cash reduce the quick ratio.", a: true, hint: "Cash → inventory.", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "meaning", q: "Match the ratio with its type.", pairs: [["Quick ratio", "Liquidity"], ["Proprietary ratio", "Solvency"], ["Inventory turnover", "Activity"], ["Return on investment", "Profitability"]], hint: "What does it measure?", why: "Each ratio belongs to one group." },
    { id: "q16", t: "match", d: "M", m: 4, c: "np", q: "Match the ratio with its denominator.", pairs: [["Inventory turnover", "Average inventory"], ["Debt-equity", "Shareholders' funds"], ["Return on investment", "Capital employed"], ["Interest coverage", "Interest on long-term debt"]], hint: "Bottom of the fraction.", why: "Each formula has one denominator." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "quick", q: "Quick assets = Current assets − Inventories − ______ expenses.", acc: ["prepaid"], hint: "Paid in advance.", why: "Prepaid." },
    { id: "q18", t: "fill", d: "M", m: 1, c: "op", q: "Operating ratio 78% means operating profit ratio is ______ %.", acc: ["22"], hint: "100 − 78.", why: "22%." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "de", q: "Capital employed = Total assets − ______ liabilities.", acc: ["current"], hint: "Short-term ones.", why: "Current." },
    { id: "q20", t: "short", d: "E", m: 1, c: "meaning", q: "Name the group of ratios that tells whether a firm can pay its short-term debts.", acc: ["liquidity", "liquidity ratios"], hint: "Short-term.", why: "Liquidity ratios." },
    { id: "q21", t: "short", d: "M", m: 1, c: "gp", q: "Goods are sold at 25% above cost. What is the GP ratio (in %)?", acc: ["20", "20%"], hint: "25 ÷ 125.", why: "20%." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "meaning", q: "State any three uses (objectives) of ratio analysis.", hint: "Liquidity, solvency, efficiency, comparison.", why: "",
      points: [{ p: "Assess liquidity / solvency", m: 1, k: ["liquid", "solven"] }, { p: "Assess efficiency / profitability", m: 1, k: ["efficien", "profit"] }, { p: "Inter-firm and intra-firm comparison / forecasting", m: 1, k: ["compar", "forecast", "trend"] }],
      model: "<p>(i) To judge the <b>liquidity and solvency</b> of the firm.</p><p>(ii) To judge <b>operating efficiency and profitability</b>.</p><p>(iii) To make <b>comparisons</b> with past years and other firms, and to help <b>forecasting</b>.</p>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "icr", q: "Net profit after interest and tax ₹3,50,000; tax ₹1,50,000; interest on long-term loan ₹1,00,000. Calculate the interest coverage ratio.", hint: "Build PBIT first.", why: "",
      points: [{ p: "PBIT = 3,50,000 + 1,50,000 + 1,00,000", m: 1, k: ["6,00,000"] }, { p: "Formula: PBIT ÷ interest", m: 1, k: ["pbit", "interest"] }, { p: "<b>6 times</b>", m: 1, k: ["6 times", "6"] }],
      model: "<p>PBIT = 3,50,000 + 1,50,000 + 1,00,000 = <b>₹6,00,000</b>.</p><p>Interest coverage = 6,00,000 ÷ 1,00,000 = <b>6 times</b>.</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "inv", q: "Opening inventory ₹2,00,000; purchases ₹21,00,000; direct expenses ₹1,00,000; closing inventory ₹3,00,000. Calculate cost of revenue and inventory turnover ratio.", hint: "Average inventory 2,50,000.", why: "",
      points: [{ p: "Cost of revenue = 2,00,000 + 21,00,000 + 1,00,000 − 3,00,000", m: 1, k: ["21,00,000"] }, { p: "= ₹21,00,000", m: 1, k: ["21,00,000"] }, { p: "Average inventory ₹2,50,000", m: 1, k: ["2,50,000"] }, { p: "Turnover <b>8.4 times</b>", m: 1, k: ["8.4"] }],
      model: "<p>Cost of revenue = 2,00,000 + 21,00,000 + 1,00,000 − 3,00,000 = <b>₹21,00,000</b>.</p><p>Average inventory = (2,00,000 + 3,00,000) ÷ 2 = <b>₹2,50,000</b>.</p><p>Inventory turnover = 21,00,000 ÷ 2,50,000 = <b>8.4 times</b>.</p>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "effect", q: "The debt-equity ratio of a company is 1 : 1. State with reasons the effect of (i) issue of equity shares for cash, (ii) issue of debentures, (iii) redemption of debentures, (iv) bonus shares from reserves.", hint: "Which side changes?", why: "",
      points: [{ p: "(i) Decreases: equity rises", m: 1, k: ["decrease"] }, { p: "(ii) Increases: debt rises", m: 1, k: ["increase"] }, { p: "(iii) Decreases: debt falls", m: 1, k: ["decrease"] }, { p: "(iv) No change: SHF unchanged", m: 1, k: ["no change"] }],
      model: "<p>(i) <b>Decreases</b>: shareholders' funds rise, debt is the same.</p><p>(ii) <b>Increases</b>: long-term debt rises.</p><p>(iii) <b>Decreases</b>: long-term debt falls.</p><p>(iv) <b>No change</b>: reserves become share capital; total shareholders' funds stay the same.</p>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "de", q: "Calculate debt-equity, debt to capital employed, total assets to debt and proprietary ratio: Share capital ₹10,00,000; reserves ₹4,00,000; long-term borrowings ₹5,00,000; long-term provisions ₹2,00,000; current liabilities ₹4,00,000; total assets ₹25,00,000.", hint: "LT debt 7,00,000; SHF 14,00,000; CE 21,00,000.", why: "",
      points: [{ p: "LT debt ₹7,00,000; SHF ₹14,00,000", m: 1, k: ["7,00,000", "14,00,000"] }, { p: "Capital employed ₹21,00,000", m: 1, k: ["21,00,000"] }, { p: "Debt-equity 0.5 : 1", m: 1, k: ["0.5"] }, { p: "Debt to CE 0.33 : 1", m: 1, k: ["0.33"] }, { p: "Total assets to debt 3.57 : 1", m: 1, k: ["3.57"] }, { p: "Proprietary 0.56 : 1", m: 1, k: ["0.56"] }],
      model: "<p>LT debt = 5,00,000 + 2,00,000 = <b>₹7,00,000</b>; SHF = 10,00,000 + 4,00,000 = <b>₹14,00,000</b>; CE = 14,00,000 + 7,00,000 = <b>₹21,00,000</b> (check: 25,00,000 − 4,00,000).</p><p>Debt-equity = 7 ÷ 14 = <b>0.5 : 1</b>. Debt to CE = 7 ÷ 21 = <b>0.33 : 1</b>. Total assets to debt = 25 ÷ 7 = <b>3.57 : 1</b>. Proprietary = 14 ÷ 25 = <b>0.56 : 1</b>.</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "wc", q: "Revenue from operations ₹15,00,000; current assets ₹3,00,000; current liabilities ₹1,00,000; net fixed assets ₹7,50,000; capital employed ₹10,50,000. Calculate working capital turnover, fixed asset turnover and net asset turnover, and explain what a high turnover shows.", hint: "WC = 2,00,000.", why: "",
      points: [{ p: "Working capital ₹2,00,000", m: 1, k: ["2,00,000"] }, { p: "WC turnover <b>7.5 times</b>", m: 1, k: ["7.5"] }, { p: "Fixed asset turnover <b>2 times</b>", m: 1, k: ["2 times", "2"] }, { p: "Net asset turnover <b>1.43 times</b>", m: 1, k: ["1.43"] }, { p: "Formulas stated with revenue as numerator", m: 1, k: ["revenue"] }, { p: "High turnover = efficient use of assets", m: 1, k: ["efficien"] }],
      model: "<p>Working capital = 3,00,000 − 1,00,000 = ₹2,00,000. WC turnover = 15,00,000 ÷ 2,00,000 = <b>7.5 times</b>.</p><p>Fixed asset turnover = 15,00,000 ÷ 7,50,000 = <b>2 times</b>.</p><p>Net asset turnover = 15,00,000 ÷ 10,50,000 = <b>1.43 times</b>.</p><p>A high turnover means the company earns more revenue per rupee of assets: it uses its assets <b>efficiently</b>.</p>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "quick", q: "Current ratio 2.6 : 1 and quick ratio 0.6 : 1 suggest", o: ["Heavy inventory", "Too much cash", "No debts", "High profits"], a: 0, hint: "Gap between the two.", why: "Most current assets are <b>inventory</b>." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "recv", q: "Collection period rose from 30 to 60 days. This means", o: ["Customers pay more slowly", "Sales doubled", "Stock is selling faster", "Creditors are paid faster"], a: 0, hint: "Days to collect.", why: "<b>Slower collection</b> from customers." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "gp", q: "GP ratio is 20% and revenue ₹6,00,000. Cost of revenue is", o: ["₹1,20,000", "₹4,80,000", "₹5,00,000", "₹7,20,000"], a: 1, hint: "80% of revenue.", why: "6,00,000 − 1,20,000 = <b>₹4,80,000</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "current", passage: "<b>Sunrise Ltd</b> has current assets ₹4,00,000 and current liabilities ₹2,00,000.", q: "Its current ratio is", o: ["1 : 1", "2 : 1", "0.5 : 1", "4 : 1"], a: 1, hint: "4 ÷ 2.", why: "<b>2 : 1</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "prop", passage: "<b>Vinay Ltd</b> has long-term borrowings ₹6,00,000, long-term provisions ₹2,00,000 and total assets ₹24,00,000.", q: "Its total assets to debt ratio is", o: ["4 : 1", "3 : 1", "12 : 1", "0.33 : 1"], a: 1, hint: "Debt = 8,00,000.", why: "24 ÷ 8 = <b>3 : 1</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "np", passage: "<b>Neon Ltd</b>: revenue ₹20,00,000, profit before tax ₹3,00,000, tax 30%.", q: "Its net profit ratio after tax is", o: ["15%", "10.5%", "4.5%", "21%"], a: 1, hint: "PAT 2,10,000.", why: "2,10,000 ÷ 20,00,000 = <b>10.5%</b>." }
  ],
  find: {
    mcq: [
      { s: "A supplier checks if the company can pay within 60 days.", o: ["Liquidity ratios", "Solvency ratios", "Activity ratios", "Profitability ratios"], a: 0, c: "meaning", d: "E", why: "<b>Liquidity</b>." },
      { s: "Current assets ÷ current liabilities = 2 : 1.", o: ["Current ratio", "Quick ratio", "Debt-equity", "Proprietary"], a: 0, c: "current", d: "E", why: "<b>Current ratio</b>." },
      { s: "Inventory and prepaid expenses are removed before dividing by current liabilities.", o: ["Quick ratio", "Current ratio", "Inventory turnover", "Proprietary"], a: 0, c: "quick", d: "E", why: "<b>Quick ratio</b>." },
      { s: "Long-term debt compared with shareholders' funds.", o: ["Debt-equity ratio", "Proprietary ratio", "ROI", "Current ratio"], a: 0, c: "de", d: "E", why: "<b>Debt-equity</b>." },
      { s: "Shareholders' funds ÷ total assets = 0.6.", o: ["Proprietary ratio", "Debt-equity", "Total assets to debt", "Quick ratio"], a: 0, c: "prop", d: "M", why: "<b>Proprietary ratio</b>." },
      { s: "PBIT is 8 times the interest on debentures.", o: ["Interest coverage ratio", "ROI", "Net profit ratio", "Debt-equity"], a: 0, c: "icr", d: "M", why: "<b>Interest coverage</b>." },
      { s: "Cost of revenue ÷ average stock = 6.", o: ["Inventory turnover", "Receivables turnover", "Working capital turnover", "GP ratio"], a: 0, c: "inv", d: "M", why: "<b>Inventory turnover</b>." },
      { s: "Customers take 36.5 days on average to pay.", o: ["Collection period", "Payment period", "Inventory turnover", "Interest coverage"], a: 0, c: "recv", d: "M", why: "<b>Collection period</b>." },
      { s: "Revenue ÷ (current assets − current liabilities).", o: ["Working capital turnover", "Fixed asset turnover", "Net asset turnover", "Current ratio"], a: 0, c: "wc", d: "M", why: "<b>Working capital turnover</b>." },
      { s: "Gross profit as a % of revenue from operations.", o: ["GP ratio", "Operating ratio", "NP ratio", "ROI"], a: 0, c: "gp", d: "M", why: "<b>GP ratio</b>." },
      { s: "(Cost of revenue + operating expenses) ÷ revenue × 100 = 83%.", o: ["Operating ratio", "Operating profit ratio", "GP ratio", "NP ratio"], a: 0, c: "op", d: "C", why: "<b>Operating ratio</b>." },
      { s: "PBIT ÷ capital employed × 100.", o: ["Return on investment", "Net profit ratio", "Proprietary", "Interest coverage"], a: 0, c: "np", d: "C", why: "<b>ROI</b>." },
      { s: "Paying a creditor raised the current ratio from 2 : 1 to 2.2 : 1.", o: ["Effect of transaction (both fall)", "Bonus issue", "Inventory turnover", "Window dressing only"], a: 0, c: "effect", d: "C", why: "Both CA and CL fall: <b>effect of a transaction</b>." },
      { s: "Debentures redeemed; debt-equity drops from 1 : 1 to 0.8 : 1.", o: ["Debt falls", "Equity falls", "Bonus shares", "Inventory rises"], a: 0, c: "effect", d: "C", why: "Redemption <b>reduces debt</b>." },
      { s: "Sales ₹15 lakh, net fixed assets ₹7.5 lakh: 2 times.", o: ["Fixed asset turnover", "Working capital turnover", "Net asset turnover", "Inventory turnover"], a: 0, c: "wc", d: "C", why: "<b>Fixed asset turnover</b>." },
      { s: "Profit after tax as a % of revenue: 10.5%.", o: ["Net profit ratio", "ROI", "Operating profit ratio", "GP ratio"], a: 0, c: "np", d: "C", why: "<b>Net profit ratio</b>." }
    ],
    match: [
      { title: "Drag each formula onto its ratio.", pairs: [["Quick assets ÷ CL", "Quick ratio", "quick"], ["LT debt ÷ SHF", "Debt-equity", "de"], ["PBIT ÷ interest", "Interest coverage", "icr"], ["Cost of revenue ÷ average inventory", "Inventory turnover", "inv"], ["Revenue ÷ working capital", "Working capital turnover", "wc"], ["PBIT ÷ capital employed × 100", "Return on investment", "np"]] }
    ],
    wrong: [
      { stmts: ["Inventories are excluded from quick assets.", "Prepaid expenses are excluded from quick assets.", "Trade receivables are excluded from quick assets.", "Cash is a quick asset."], a: 2, c: "quick", why: "Trade receivables <b>are</b> quick assets." },
      { stmts: ["Long-term debt includes long-term provisions.", "Capital employed = SHF + LT debt.", "Interest coverage uses profit after tax.", "Proprietary ratio = SHF ÷ total assets."], a: 2, c: "icr", why: "Interest coverage uses <b>PBIT</b>." },
      { stmts: ["Operating ratio + operating profit ratio = 100%.", "Loss on sale of machinery is an operating expense.", "ROI uses PBIT.", "GP ratio = GP ÷ revenue × 100."], a: 1, c: "op", why: "Loss on sale is <b>non-operating</b>." },
      { stmts: ["Goods bought on credit lower a 2 : 1 current ratio.", "Collecting from debtors leaves it unchanged.", "Buying machinery for cash raises it.", "Paying a creditor raises it."], a: 2, c: "effect", why: "Buying machinery for cash <b>lowers</b> CA and the ratio." }
    ],
    para: [
      { target: "Quick ratio", c: "quick", sents: ["The bank studied Asha Traders' Balance Sheet.", "It removed stock and prepaid rent from current assets.", "It then divided the rest by current liabilities.", "The loan was approved."], a: 2, why: "Dividing quick assets by CL: <b>quick ratio</b>." },
      { target: "Interest coverage", c: "icr", sents: ["Debenture holders met the CFO.", "He showed that profit before interest and tax was ₹8 lakh.", "Interest on debentures was ₹1 lakh, covered 8 times.", "The meeting ended early."], a: 2, why: "PBIT ÷ interest: <b>interest coverage</b>." },
      { target: "Collection period", c: "recv", sents: ["Sales are all on credit.", "Average debtors were one-tenth of sales.", "So customers took about 36 days to pay.", "The company hired two clerks."], a: 2, why: "Days taken by customers: <b>collection period</b>." }
    ],
    explain: [
      { s: "A firm's stock is sold and replaced 8 times a year.", o: ["Inventory turnover", "Receivables turnover", "Current ratio", "GP ratio"], a: 0, c: "inv", why: "The clue is <i>stock sold 8 times</i>: <b>inventory turnover</b>." },
      { s: "Owners fund 60% of the assets.", o: ["Proprietary ratio", "Debt-equity", "Quick ratio", "ROI"], a: 0, c: "prop", why: "Owners' share of assets: <b>proprietary ratio</b>." },
      { s: "₹20 earned before interest and tax on every ₹100 of capital employed.", o: ["Return on investment", "Net profit ratio", "GP ratio", "Interest coverage"], a: 0, c: "np", why: "PBIT per ₹100 of CE: <b>ROI</b>." },
      { s: "Bank overdraft taken to pay creditors leaves the current ratio unchanged.", o: ["One current liability replaces another", "Both rise", "Both fall", "Only CA changes"], a: 0, c: "effect", why: "CL total unchanged: <b>one liability replaces another</b>." }
    ]
  }
});
