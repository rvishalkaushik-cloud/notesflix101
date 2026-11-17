/* Revision Arena · Class XII Accountancy · Chapter 8 · Financial Statements of a Company and Their Analysis (Parts 1-4). Original cases; figures recomputed. */
NFArena.register({
  id: "acc-fs-company", cls: "XII", subject: "Accountancy", unit: "Chapter", num: "8",
  title: "Financial Statements of a Company and Their Analysis",
  tagline: "Schedule III Balance Sheet and Statement of P&L, then comparative and common-size statements.",
  notesLink: "../#acc-fs-company",
  concepts: {
    bs: { n: "Schedule III Balance Sheet: major heads", s: "bs" },
    cls: { n: "Classifying items into sub-heads", s: "bs" },
    note: { n: "Notes to accounts: share capital and reserves", s: "bs" },
    pl: { n: "Statement of Profit and Loss format", s: "pl" },
    rev: { n: "Revenue from operations vs other income", s: "pl" },
    cmc: { n: "Cost of materials consumed and changes in inventories", s: "pl" },
    obj: { n: "Objectives of analysis", s: "analysis" },
    tools: { n: "Tools of analysis", s: "analysis" },
    lim: { n: "Limitations of analysis", s: "analysis" },
    comp: { n: "Comparative statements", s: "comp" },
    cs: { n: "Common-size statements", s: "cs" }
  },
  overview: {
    text: "A company prepares its <b>Balance Sheet</b> and <b>Statement of Profit and Loss</b> in the format of <b>Schedule III</b> to the Companies Act, 2013. Only major heads and sub-heads appear on the face; details go in <b>Notes to Accounts</b>. These statements are then <b>analysed</b> with tools such as comparative statements, common-size statements and ratios.",
    points: [
      "Balance Sheet: <b>Equity and Liabilities</b> (shareholders' funds, non-current and current liabilities) and <b>Assets</b> (non-current and current).",
      "Statement of P&L: Revenue from operations + Other income − seven expense heads = Profit before tax.",
      "<b>Comparative statement</b>: two years side by side, absolute and % change (horizontal analysis).",
      "<b>Common-size statement</b>: every item as % of a base: revenue from operations (P&L) or the total (Balance Sheet) (vertical analysis)."
    ],
    map: {
      center: "Company Financial Statements",
      branches: [
        { t: "Balance Sheet", c: ["Major heads and sub-heads", "Classification", "Notes to accounts"] },
        { t: "Statement of P&L", c: ["Revenue vs other income", "Seven expense heads", "Materials and inventories"] },
        { t: "Analysis", c: ["Objectives", "Tools", "Limitations"] },
        { t: "Statements", c: ["Comparative (horizontal)", "Common-size (vertical)"] }
      ]
    }
  },
  sections: [
    {
      id: "bs", title: "Schedule III Balance Sheet", sub: "Heads, sub-heads and notes", icon: "🏛️", color: "#4da3ff",
      quick: [
        "Title is <b>'Balance Sheet as at 31st March …'</b>. Columns: Particulars · Note No. · Current year · Previous year.",
        "<b>Equity and Liabilities:</b> (1) Shareholders' funds: share capital, reserves and surplus, money received against share warrants; (2) Share application money pending allotment; (3) Non-current liabilities; (4) Current liabilities.",
        "<b>Non-current liabilities:</b> long-term borrowings, deferred tax liabilities (net), other long-term liabilities, long-term provisions. <b>Current liabilities:</b> short-term borrowings, trade payables, other current liabilities, short-term provisions.",
        "<b>Assets:</b> Non-current: property, plant and equipment and intangible assets, non-current investments, deferred tax assets (net), long-term loans and advances, other non-current assets. Current: current investments, inventories, trade receivables, cash and cash equivalents, short-term loans and advances, other current assets.",
        "Use Schedule III words: <b>trade receivables</b> (not debtors), <b>trade payables</b> (not creditors)."
      ],
      table: { cap: "Board-favourite classification", head: ["Item", "Major head", "Sub-head"], rows: [["Debentures", "Non-current liabilities", "Long-term borrowings"], ["Bank overdraft", "Current liabilities", "Short-term borrowings"], ["Calls in advance", "Current liabilities", "Other current liabilities"], ["Interest accrued on debentures", "Current liabilities", "Other current liabilities"], ["Provision for tax", "Current liabilities", "Short-term provisions"], ["Securities premium", "Shareholders' funds", "Reserves and surplus"], ["Goodwill", "Non-current assets", "Intangible assets"], ["Loose tools / stores and spares", "Current assets", "Inventories"], ["Cheques in hand", "Current assets", "Cash and cash equivalents"], ["Prepaid expenses", "Current assets", "Other current assets"]] },
      cards: [
        { t: "Share Capital note", tag: "eg", b: "<p>Authorised: 1,00,000 shares of ₹10 = ₹10,00,000.</p><p>Issued and subscribed: 80,000 shares. Fully paid: 75,000 × 10 = ₹7,50,000. Not fully paid: 5,000 × 10 = 50,000 <b>less calls in arrears</b> 10,000 = ₹40,000.</p><p>Total subscribed capital shown = <b>₹7,90,000</b>.</p>" },
        { t: "Debit balance of P&L", tag: "tip", b: "<p>A debit balance in the Statement of P&L is shown as a <b>negative item under Reserves and Surplus</b>, even if reserves become negative.</p>" },
        { t: "Shares forfeited", tag: "tip", b: "<p>Forfeited shares account is <b>added to subscribed capital</b> in the Share Capital note.</p>" }
      ],
      exam: ["'Due within 12 months' → current; 'after 12 months' → non-current.", "Proposed dividend is not a liability till approved; it is disclosed in notes."]
    },
    {
      id: "pl", title: "Statement of Profit and Loss", sub: "Seven lines, seven expense heads", icon: "📊", color: "#22c55e",
      quick: [
        "<b>I</b> Revenue from operations · <b>II</b> Other income · <b>III</b> Total income · <b>IV</b> Expenses · <b>V</b> Profit before tax · tax · <b>profit for the period</b>.",
        "<b>Expense heads:</b> cost of materials consumed; purchases of stock-in-trade; changes in inventories of finished goods, work-in-progress and stock-in-trade; employee benefits expense; finance costs; depreciation and amortisation expense; other expenses.",
        "<b>Revenue from operations</b>: sale of products, sale of services, other operating revenue (e.g. scrap sales). <b>Other income</b>: interest and dividend received (for a non-finance company), profit on sale of fixed assets.",
        "<b>Cost of materials consumed</b> = Opening stock of materials + Purchases of materials − Closing stock of materials.",
        "<b>Changes in inventories</b> = Opening − Closing (of finished goods, WIP, stock-in-trade). A rise in stock gives a <b>negative</b> figure that reduces expenses."
      ],
      table: { cap: "Which expense head?", head: ["Item", "Expense head"], rows: [["Salaries, wages, bonus, contribution to PF", "Employee benefits expense"], ["Interest on debentures and loans", "Finance costs"], ["Discount on issue of debentures written off", "Finance costs"], ["Depreciation on machinery", "Depreciation and amortisation"], ["Rent, power, advertisement", "Other expenses"], ["Goods bought for resale", "Purchases of stock-in-trade"]] },
      cards: [
        { t: "Worked example: materials", tag: "eg", b: "<p>Opening materials ₹40,000; purchases ₹3,00,000; closing ₹60,000.</p><p>Cost of materials consumed = 40,000 + 3,00,000 − 60,000 = <b>₹2,80,000</b>.</p>" },
        { t: "Worked example: changes in inventories", tag: "eg", b: "<p>Opening finished goods ₹2,30,000; closing ₹2,60,000.</p><p>Changes = 2,30,000 − 2,60,000 = <b>(₹30,000)</b>, which reduces total expenses.</p>" },
        { t: "Scrap and interest", tag: "tip", b: "<p>A manufacturer's scrap sale is <b>other operating revenue</b> (part of revenue from operations). Interest on a bank deposit is <b>other income</b>.</p>" }
      ],
      exam: ["For a finance company, interest and dividend are revenue from operations."]
    },
    {
      id: "analysis", title: "Analysis: objectives, tools, limits", sub: "Why and how we analyse", icon: "🔍", color: "#f5b301",
      quick: [
        "<b>Objectives:</b> judge earning capacity (profitability), solvency (short and long term), efficiency of operations, compare with past and with other firms, and help forecasting.",
        "<b>Users:</b> management (planning and control), investors (safety and returns), lenders and creditors (repayment ability), government and employees.",
        "<b>Tools:</b> comparative statements, common-size statements, ratio analysis and cash flow statement.",
        "<b>Limitations:</b> based on historical data, ignores price-level changes, ignores qualitative factors (staff morale, brand), affected by window dressing and by personal judgement and accounting policies."
      ],
      cards: [
        { t: "Trade payables look at…", tag: "tip", b: "<p>Short-term creditors care about <b>liquidity</b>: can the company pay within the year? Debenture holders care about <b>long-term solvency</b> and interest cover.</p>" },
        { t: "Window dressing", tag: "def", b: "<p>Making the statements look better than they are (e.g. delaying purchases to year-end). It reduces the reliability of analysis.</p>" }
      ],
      exam: ["'Ignores inflation' → limitation: price-level changes ignored."]
    },
    {
      id: "comp", title: "Comparative statements", sub: "Two years side by side", icon: "↔️", color: "#ff5470",
      quick: [
        "Columns: Particulars · Note · Previous year · Current year · <b>Absolute change</b> · <b>% change</b>.",
        "<b>% change = Absolute change ÷ Previous year × 100.</b> The base is always the <b>previous year</b>.",
        "Also called <b>horizontal analysis</b>: it shows the direction and size of change over time.",
        "A fall gives a negative change, e.g. borrowings ₹4,00,000 → ₹3,00,000 = −25%."
      ],
      cards: [
        { t: "Worked example", tag: "eg", b: "<p>Revenue ₹5,00,000 → ₹6,00,000: change 1,00,000; % change = 1,00,000 ÷ 5,00,000 × 100 = <b>20%</b>.</p><p>Expenses ₹4,00,000 → ₹5,00,000: <b>25%</b>. Expenses grew faster, so profit grew slower.</p>" },
        { t: "Reading the result", tag: "why", b: "<p>If revenue rises 10% but expenses rise 18%, profit before tax will grow slowly or fall. Always compare growth of income with growth of costs.</p>" }
      ],
      exam: ["Total of the comparative Balance Sheet: (total change ÷ previous total) × 100, not the sum of item %s."]
    },
    {
      id: "cs", title: "Common-size statements", sub: "Everything out of 100", icon: "💯", color: "#c084fc",
      quick: [
        "<b>P&L base</b>: revenue from operations = 100. Every item ÷ revenue of the <b>same year</b> × 100.",
        "<b>Balance Sheet base</b>: total of the Balance Sheet = 100.",
        "Also called <b>vertical analysis</b>. It lets firms of different sizes be compared.",
        "Memory code: <b>Revenue rules the P&L, Total tops the Balance Sheet</b>; <b>Comparative is Horizontal, Common-size is Vertical</b>."
      ],
      table: { cap: "Comparative vs common-size", head: ["Basis", "Comparative", "Common-size"], rows: [["Shows", "Change over time", "Share of each item in a base"], ["Analysis", "Horizontal", "Vertical"], ["Base", "Previous year figure", "Revenue (P&L) / Total (BS)"], ["Best for", "Trend of one firm", "Comparing firms of different sizes"]] },
      cards: [
        { t: "Worked example", tag: "eg", b: "<p>Revenue ₹8,00,000; employee benefits ₹1,20,000 → 1,20,000 ÷ 8,00,000 × 100 = <b>15%</b>.</p><p>Total assets ₹20,00,000; current assets ₹5,00,000 → <b>25%</b>.</p>" },
        { t: "Bigger is not better", tag: "why", b: "<p>Firm X: revenue ₹50 lakh, profit ₹5 lakh (10%). Firm Y: revenue ₹5 lakh, profit ₹1 lakh (20%). Y has the better margin though X earns more.</p>" }
      ],
      exam: ["'Other expenses fell from 12% to 9% of revenue' → better cost control."]
    }
  ],
  flashcards: [
    { k: "Format", c: "bs", q: "Under which Act and schedule is a company Balance Sheet prepared?", a: "Schedule III, Companies Act, 2013." },
    { k: "Heads", c: "bs", q: "Name the three sub-heads of shareholders' funds.", a: "Share capital; reserves and surplus; money received against share warrants." },
    { k: "Classify", c: "cls", q: "Where are debentures shown?", a: "Non-current liabilities → long-term borrowings." },
    { k: "Classify", c: "cls", q: "Where is calls in advance shown?", a: "Current liabilities → other current liabilities." },
    { k: "Classify", c: "cls", q: "Where are loose tools shown?", a: "Current assets → inventories." },
    { k: "Classify", c: "cls", q: "Where is securities premium shown?", a: "Shareholders' funds → reserves and surplus." },
    { k: "Note", c: "note", q: "How are calls in arrears shown?", a: "Deducted from subscribed capital in the Share Capital note." },
    { k: "Note", c: "note", q: "Debit balance of the Statement of P&L?", a: "Shown as a negative item under reserves and surplus." },
    { k: "P&L", c: "pl", q: "Total income = ?", a: "Revenue from operations + Other income." },
    { k: "P&L", c: "rev", q: "Is dividend received by a manufacturing company revenue from operations?", a: "No: other income." },
    { k: "Formula", c: "cmc", q: "Cost of materials consumed?", a: "Opening materials + Purchases − Closing materials." },
    { k: "Formula", c: "cmc", q: "Changes in inventories?", a: "Opening − Closing stock of finished goods, WIP and stock-in-trade." },
    { k: "Head", c: "pl", q: "Under which head is interest on debentures shown?", a: "Finance costs." },
    { k: "Tools", c: "tools", q: "Name four tools of analysis.", a: "Comparative statements, common-size statements, ratio analysis, cash flow statement." },
    { k: "Limits", c: "lim", q: "Give two limitations of financial analysis.", a: "Historical data; ignores price-level changes (also qualitative factors ignored, window dressing)." },
    { k: "Formula", c: "comp", q: "% change in a comparative statement?", a: "Absolute change ÷ Previous year × 100." },
    { k: "Base", c: "cs", q: "Base of a common-size Statement of P&L?", a: "Revenue from operations = 100." },
    { k: "Type", c: "cs", q: "Common-size analysis is horizontal or vertical?", a: "Vertical." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Sorting the trial balance",
      text: "<p>The accountant of <span class='co'>Kesar Steel Ltd</span> has these balances: 9% Debentures ₹5,00,000; Bank overdraft ₹60,000; Loose tools ₹25,000; Securities premium ₹1,00,000; Provision for tax ₹80,000; Calls in advance ₹15,000.</p>",
      qs: [
        { q: "Show the major head and sub-head for each of the six items in the company's Balance Sheet.", m: 6, type: "Classify", c: "cls", ans: "Long-term borrowings; short-term borrowings; inventories; reserves and surplus; short-term provisions; other current liabilities", keys: ["long-term borrowings", "inventories"], hint: "Schedule III words only.",
          points: [{ p: "Debentures → Non-current liabilities, <b>long-term borrowings</b>", m: 1, k: ["long-term borrowing"] }, { p: "Bank overdraft → Current liabilities, <b>short-term borrowings</b>", m: 1, k: ["short-term borrowing"] }, { p: "Loose tools → Current assets, <b>inventories</b>", m: 1, k: ["inventor"] }, { p: "Securities premium → Shareholders' funds, <b>reserves and surplus</b>", m: 1, k: ["reserves"] }, { p: "Provision for tax → Current liabilities, <b>short-term provisions</b>", m: 1, k: ["short-term provision"] }, { p: "Calls in advance → Current liabilities, <b>other current liabilities</b>", m: 1, k: ["other current liabilit"] }],
          structure: ["Table: item · major head · sub-head."],
          model: "<table><tr><th>Item</th><th>Major head</th><th>Sub-head</th></tr><tr><td>9% Debentures</td><td>Non-current liabilities</td><td>Long-term borrowings</td></tr><tr><td>Bank overdraft</td><td>Current liabilities</td><td>Short-term borrowings</td></tr><tr><td>Loose tools</td><td>Current assets</td><td>Inventories</td></tr><tr><td>Securities premium</td><td>Shareholders' funds</td><td>Reserves and surplus</td></tr><tr><td>Provision for tax</td><td>Current liabilities</td><td>Short-term provisions</td></tr><tr><td>Calls in advance</td><td>Current liabilities</td><td>Other current liabilities</td></tr></table>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "The share capital note",
      text: "<p><span class='co'>Opal Ltd</span> has an authorised capital of 1,00,000 equity shares of ₹10 each. It issued 80,000 shares, all subscribed. All money was called up. Holders of 5,000 shares did not pay the final call of ₹2 per share.</p>",
      qs: [
        { q: "Prepare the Share Capital note to accounts.", m: 4, type: "Prepare", c: "note", ans: "Authorised 10,00,000; issued 8,00,000; subscribed fully paid 7,50,000; not fully paid 50,000 − 10,000 = 40,000; total 7,90,000", keys: ["7,90,000", "10,000"], hint: "Calls in arrears 5,000 × 2.",
          points: [{ p: "Authorised capital ₹10,00,000", m: 1, k: ["10,00,000"] }, { p: "Issued capital 80,000 shares = ₹8,00,000", m: 1, k: ["8,00,000"] }, { p: "Subscribed and fully paid 75,000 × 10 = ₹7,50,000", m: 1, k: ["7,50,000"] }, { p: "Not fully paid 50,000 less calls in arrears 10,000 = 40,000; total <b>₹7,90,000</b>", m: 1, k: ["7,90,000", "40,000"] }],
          structure: ["Authorised → Issued → Subscribed (fully paid / not fully paid less arrears) → total."],
          model: "<table><tr><th>Particulars</th><th>₹</th></tr><tr><td>Authorised: 1,00,000 equity shares of ₹10 each</td><td>10,00,000</td></tr><tr><td>Issued: 80,000 equity shares of ₹10 each</td><td>8,00,000</td></tr><tr><td>Subscribed and fully paid: 75,000 shares of ₹10 each</td><td>7,50,000</td></tr><tr><td>Subscribed but not fully paid: 5,000 shares of ₹10 each, ₹10 called up (50,000) less calls in arrears (10,000)</td><td>40,000</td></tr><tr><td><b>Total (shown in Balance Sheet)</b></td><td><b>7,90,000</b></td></tr></table>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Scrap, interest and stock",
      text: "<p><span class='co'>Pinewood Furniture Ltd</span> sold furniture worth ₹12,00,000, sold wood scrap for ₹30,000 and earned interest of ₹45,000 on a bank deposit. Opening stock of timber was ₹40,000, timber bought ₹3,00,000 and closing stock of timber ₹60,000. Finished goods were ₹2,30,000 at the start and ₹2,60,000 at the end of the year.</p>",
      qs: [
        { q: "Calculate revenue from operations, other income, cost of materials consumed and changes in inventories of finished goods.", m: 4, type: "Calculate", c: "cmc", ans: "12,30,000; 45,000; 2,80,000; (30,000)", keys: ["12,30,000", "2,80,000"], hint: "Scrap is operating revenue.",
          points: [{ p: "Revenue from operations ₹12,30,000", m: 1, k: ["12,30,000"] }, { p: "Other income ₹45,000", m: 1, k: ["45,000"] }, { p: "Cost of materials consumed ₹2,80,000", m: 1, k: ["2,80,000"] }, { p: "Changes in inventories <b>(₹30,000)</b>", m: 1, k: ["30,000"] }],
          structure: ["Four headed workings."],
          model: "<p><b>Revenue from operations</b> = 12,00,000 + 30,000 (scrap: other operating revenue) = <b>₹12,30,000</b>.</p><p><b>Other income</b> = interest on bank deposit <b>₹45,000</b>.</p><p><b>Cost of materials consumed</b> = 40,000 + 3,00,000 − 60,000 = <b>₹2,80,000</b>.</p><p><b>Changes in inventories</b> = 2,30,000 − 2,60,000 = <b>(₹30,000)</b>: stock rose, so expenses fall.</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "Revenue up, profit down?",
      text: "<p><span class='co'>Brightline Retail Ltd</span>: revenue from operations ₹20,00,000 (2025-26) and ₹25,00,000 (2026-27); total expenses ₹14,00,000 and ₹18,20,000. Tax rate 30%.</p>",
      qs: [
        { q: "Prepare a comparative Statement of Profit and Loss (revenue, expenses, PBT, tax, PAT) with absolute and percentage change, and state one conclusion.", m: 6, type: "Prepare and interpret", c: "comp", ans: "Revenue +25%; expenses +30%; PBT 6,00,000 → 6,80,000 (+13.33%); PAT 4,20,000 → 4,76,000", keys: ["13.33", "30"], hint: "Base = previous year.",
          points: [{ p: "Revenue: change 5,00,000, <b>25%</b>", m: 1, k: ["25"] }, { p: "Expenses: change 4,20,000, <b>30%</b>", m: 1, k: ["30%", "4,20,000"] }, { p: "PBT 6,00,000 → 6,80,000; change 80,000, <b>13.33%</b>", m: 1, k: ["13.33", "80,000"] }, { p: "Tax 1,80,000 → 2,04,000 (13.33%)", m: 1, k: ["1,80,000", "2,04,000"] }, { p: "PAT 4,20,000 → 4,76,000 (13.33%)", m: 1, k: ["4,20,000", "4,76,000"] }, { p: "Conclusion: expenses grew faster than revenue, so profit grew slower", m: 1, k: ["faster", "slower"] }],
          structure: ["Table with 2 years, change, %; one-line conclusion."],
          model: "<table><tr><th>Particulars</th><th>2025-26</th><th>2026-27</th><th>Change</th><th>%</th></tr><tr><td>Revenue from operations</td><td>20,00,000</td><td>25,00,000</td><td>5,00,000</td><td>25.00</td></tr><tr><td>Less: Expenses</td><td>14,00,000</td><td>18,20,000</td><td>4,20,000</td><td>30.00</td></tr><tr><td>Profit before tax</td><td>6,00,000</td><td>6,80,000</td><td>80,000</td><td>13.33</td></tr><tr><td>Less: Tax 30%</td><td>1,80,000</td><td>2,04,000</td><td>24,000</td><td>13.33</td></tr><tr><td>Profit after tax</td><td>4,20,000</td><td>4,76,000</td><td>56,000</td><td>13.33</td></tr></table><p><b>Conclusion:</b> expenses (30%) grew faster than revenue (25%), so profit grew only 13.33%. The company should control costs.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Small firm, better margin",
      text: "<p>An investor compares <span class='co'>Alpha Foods Ltd</span> (revenue ₹50,00,000; employee benefits ₹10,00,000; other expenses ₹35,00,000) with <span class='co'>Beta Snacks Ltd</span> (revenue ₹5,00,000; employee benefits ₹75,000; other expenses ₹3,25,000). Ignore tax.</p>",
      qs: [
        { q: "Prepare a common-size statement for both companies and advise the investor which is more profitable relative to its size.", m: 4, type: "Prepare and advise", c: "cs", ans: "Alpha: 20%, 70%, profit 10%. Beta: 15%, 65%, profit 20%. Beta has the better margin.", keys: ["10%", "20%"], hint: "Divide by each firm's own revenue.",
          points: [{ p: "Alpha: employee benefits 20%, other expenses 70%", m: 1, k: ["20", "70"] }, { p: "Alpha profit ₹5,00,000 = <b>10%</b>", m: 1, k: ["10"] }, { p: "Beta: 15%, 65%; profit ₹1,00,000 = <b>20%</b>", m: 1, k: ["15", "65", "20"] }, { p: "Advice: Beta is more profitable per rupee of revenue", m: 1, k: ["beta"] }],
          structure: ["Common-size table for two firms; one-line advice."],
          model: "<table><tr><th>Particulars</th><th>Alpha %</th><th>Beta %</th></tr><tr><td>Revenue from operations</td><td>100</td><td>100</td></tr><tr><td>Employee benefits expense</td><td>20</td><td>15</td></tr><tr><td>Other expenses</td><td>70</td><td>65</td></tr><tr><td>Profit</td><td>10</td><td>20</td></tr></table><p>Alpha's profit is larger in rupees (₹5,00,000 vs ₹1,00,000), but <b>Beta earns 20 paise per rupee</b> of revenue against Alpha's 10 paise. Relative to size, <b>Beta is more profitable</b>.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "bs", q: "A company's Balance Sheet is prepared as per:", o: ["Schedule I", "Schedule II", "Schedule III", "Table F"], a: 2, hint: "Companies Act, 2013.", why: "<b>Schedule III</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "cls", q: "Bank overdraft is shown under:", o: ["Long-term borrowings", "Short-term borrowings", "Trade payables", "Other current liabilities"], a: 1, hint: "Repayable on demand.", why: "<b>Short-term borrowings</b>." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "cs", q: "In a common-size Statement of P&L, revenue from operations is taken as:", o: ["0", "1", "100", "Total income"], a: 2, hint: "Base.", why: "<b>100</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "cls", q: "Interest accrued on debentures is shown under:", o: ["Long-term borrowings", "Finance costs", "Other current liabilities", "Short-term provisions"], a: 2, hint: "Payable within the year.", why: "<b>Other current liabilities</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "rev", q: "For a manufacturing company, dividend received is:", o: ["Revenue from operations", "Other income", "Other operating revenue", "Finance cost"], a: 1, hint: "Not its main business.", why: "<b>Other income</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "comp", q: "Long-term borrowings fell from ₹4,00,000 to ₹3,00,000. % change:", o: ["−33.33%", "−25%", "+25%", "−20%"], a: 1, hint: "Base = previous year.", why: "−1,00,000 ÷ 4,00,000 = <b>−25%</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "cmc", q: "Opening finished goods ₹50,000, closing ₹70,000. Changes in inventories:", o: ["₹20,000", "(₹20,000)", "₹1,20,000", "Nil"], a: 1, hint: "Opening − closing.", why: "50,000 − 70,000 = <b>(₹20,000)</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "comp", q: "Current assets and current liabilities both rise by 25%. Working capital:", o: ["Falls", "Rises by 25%", "Stays the same", "Rises by 50%"], a: 1, hint: "Both grow in proportion.", why: "The difference also grows by <b>25%</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "cs", q: "Common-size statements help compare firms of different sizes.", r: "All items are shown as percentages of a common base.", a: 0, hint: "Why comparable?", why: "Both true; R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "lim", q: "Financial analysis ignores price-level changes.", r: "Financial statements are prepared on the basis of historical cost.", a: 0, hint: "Cost basis.", why: "Both true; R explains A." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "cls", q: "Calls in arrears are shown as a current liability.", r: "Calls in arrears are amounts not yet received from shareholders.", a: 3, hint: "Where are arrears shown?", why: "A is false: they are <b>deducted from subscribed capital</b>. R is true." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "bs", q: "Schedule III uses the term 'trade receivables' instead of 'debtors'.", a: true, hint: "Schedule III words.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "comp", q: "Comparative statements are an example of vertical analysis.", a: false, hint: "CH-CV.", why: "False: they are <b>horizontal</b>." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "note", q: "A debit balance of the Statement of P&L is shown on the assets side.", a: false, hint: "Reserves and surplus.", why: "False: negative figure under <b>reserves and surplus</b>." },
    { id: "q15", t: "match", d: "E", m: 4, c: "cls", q: "Match the item with its sub-head.", pairs: [["Goodwill", "Intangible assets"], ["Cheques in hand", "Cash and cash equivalents"], ["Prepaid expenses", "Other current assets"], ["Stores and spares", "Inventories"]], hint: "Schedule III sub-heads.", why: "Each item has one sub-head." },
    { id: "q16", t: "match", d: "M", m: 4, c: "pl", q: "Match the item with its expense head.", pairs: [["Contribution to provident fund", "Employee benefits expense"], ["Interest on debentures", "Finance costs"], ["Advertisement", "Other expenses"], ["Goods bought for resale", "Purchases of stock-in-trade"]], hint: "Seven heads.", why: "Each item has one head." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "pl", q: "Revenue from operations + Other income = Total ______.", acc: ["income"], hint: "Line III.", why: "Total income." },
    { id: "q18", t: "fill", d: "M", m: 1, c: "cs", q: "Common-size analysis is also called ______ analysis.", acc: ["vertical"], hint: "CH-CV.", why: "Vertical." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "cls", q: "Securities premium is shown under reserves and ______.", acc: ["surplus"], hint: "Sub-head of shareholders' funds.", why: "Surplus." },
    { id: "q20", t: "short", d: "E", m: 1, c: "tools", q: "Name any one tool of analysis of financial statements.", acc: ["comparative", "common-size", "common size", "ratio", "cash flow"], hint: "Four tools.", why: "Comparative, common-size, ratio analysis or cash flow statement." },
    { id: "q21", t: "short", d: "M", m: 1, c: "cmc", q: "Opening materials ₹20,000, purchases ₹1,50,000, closing ₹30,000. Cost of materials consumed (in ₹)?", acc: ["1,40,000", "140000", "1,40,000.", "₹1,40,000"], hint: "O + P − C.", why: "20,000 + 1,50,000 − 30,000 = ₹1,40,000." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "obj", q: "State any three objectives of analysis of financial statements.", hint: "Profitability, solvency, efficiency.", why: "",
      points: [{ p: "Assess earning capacity / profitability", m: 1, k: ["profit", "earning"] }, { p: "Assess solvency (short and long term)", m: 1, k: ["solven", "liquid"] }, { p: "Assess efficiency / compare / forecast", m: 1, k: ["efficien", "compar", "forecast"] }],
      model: "<p>(i) To judge the <b>earning capacity</b> (profitability) of the business.</p><p>(ii) To judge <b>short-term and long-term solvency</b>.</p><p>(iii) To judge the <b>efficiency</b> of operations and to <b>compare</b> with past years and other firms, helping in forecasting.</p>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "lim", q: "Explain any three limitations of analysis of financial statements.", hint: "Historical, price level, qualitative.", why: "",
      points: [{ p: "Based on historical data", m: 1, k: ["histor"] }, { p: "Ignores price-level changes", m: 1, k: ["price"] }, { p: "Ignores qualitative factors / window dressing", m: 1, k: ["qualitative", "window"] }],
      model: "<p>(i) <b>Historical analysis:</b> it studies the past, which may not repeat.</p><p>(ii) <b>Ignores price-level changes:</b> statements use historical cost, so inflation distorts comparisons.</p><p>(iii) <b>Ignores qualitative aspects</b> such as staff morale and brand, and can be misled by <b>window dressing</b>.</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "cs", q: "Revenue from operations ₹10,00,000; employee benefits ₹2,00,000; other expenses ₹3,00,000; tax 40% of PBT. Prepare a common-size Statement of P&L.", hint: "Divide by 10,00,000.", why: "",
      points: [{ p: "Revenue 100; employee benefits 20; other expenses 30", m: 1, k: ["20", "30"] }, { p: "PBT ₹5,00,000 = 50%", m: 1, k: ["50"] }, { p: "Tax ₹2,00,000 = 20%", m: 1, k: ["2,00,000", "20"] }, { p: "PAT ₹3,00,000 = 30%", m: 1, k: ["3,00,000", "30"] }],
      model: "<table><tr><th>Particulars</th><th>₹</th><th>%</th></tr><tr><td>Revenue from operations</td><td>10,00,000</td><td>100</td></tr><tr><td>Employee benefits expense</td><td>2,00,000</td><td>20</td></tr><tr><td>Other expenses</td><td>3,00,000</td><td>30</td></tr><tr><td>Profit before tax</td><td>5,00,000</td><td>50</td></tr><tr><td>Tax (40%)</td><td>2,00,000</td><td>20</td></tr><tr><td>Profit after tax</td><td>3,00,000</td><td>30</td></tr></table>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "cs", q: "Distinguish between comparative and common-size statements on four bases.", hint: "Shows, analysis, base, use.", why: "",
      points: [{ p: "Shows change over time vs share of base", m: 1, k: ["change", "share", "proportion"] }, { p: "Horizontal vs vertical", m: 1, k: ["horizontal", "vertical"] }, { p: "Base: previous year vs revenue/total", m: 1, k: ["previous", "revenue", "total"] }, { p: "Use: trend vs inter-firm comparison", m: 1, k: ["trend", "firm"] }],
      model: "<table><tr><th>Basis</th><th>Comparative</th><th>Common-size</th></tr><tr><td>Shows</td><td>Absolute and % change over years</td><td>Each item as % of a base</td></tr><tr><td>Type</td><td>Horizontal analysis</td><td>Vertical analysis</td></tr><tr><td>Base</td><td>Previous year figure</td><td>Revenue (P&L) / total (BS)</td></tr><tr><td>Best use</td><td>Trend of one firm</td><td>Comparing firms of different sizes</td></tr></table>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "comp", q: "Prepare a comparative Balance Sheet: Share capital ₹10,00,000 and ₹15,00,000; Long-term borrowings ₹4,00,000 and ₹3,00,000; Current liabilities ₹4,00,000 and ₹5,50,000; Non-current assets ₹12,00,000 and ₹16,00,000; Current assets ₹6,00,000 and ₹7,50,000.", hint: "Totals 18,00,000 and 23,50,000.", why: "",
      points: [{ p: "Share capital +5,00,000, 50%", m: 1, k: ["50"] }, { p: "Long-term borrowings −1,00,000, −25%", m: 1, k: ["25"] }, { p: "Current liabilities +1,50,000, 37.5%", m: 1, k: ["37.5"] }, { p: "Non-current assets +4,00,000, 33.33%", m: 1, k: ["33.33"] }, { p: "Current assets +1,50,000, 25%", m: 1, k: ["25"] }, { p: "Totals 18,00,000 → 23,50,000; +5,50,000, 30.56%", m: 1, k: ["30.56", "23,50,000"] }],
      model: "<table><tr><th>Particulars</th><th>Year 1</th><th>Year 2</th><th>Change</th><th>%</th></tr><tr><td>Share capital</td><td>10,00,000</td><td>15,00,000</td><td>5,00,000</td><td>50.00</td></tr><tr><td>Long-term borrowings</td><td>4,00,000</td><td>3,00,000</td><td>(1,00,000)</td><td>(25.00)</td></tr><tr><td>Current liabilities</td><td>4,00,000</td><td>5,50,000</td><td>1,50,000</td><td>37.50</td></tr><tr><td><b>Total</b></td><td>18,00,000</td><td>23,50,000</td><td>5,50,000</td><td>30.56</td></tr><tr><td>Non-current assets</td><td>12,00,000</td><td>16,00,000</td><td>4,00,000</td><td>33.33</td></tr><tr><td>Current assets</td><td>6,00,000</td><td>7,50,000</td><td>1,50,000</td><td>25.00</td></tr><tr><td><b>Total</b></td><td>18,00,000</td><td>23,50,000</td><td>5,50,000</td><td>30.56</td></tr></table><p>The company raised fresh share capital, repaid part of its loans and expanded fixed assets.</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "pl", q: "From the following, prepare the Statement of Profit and Loss: Revenue from operations ₹20,00,000; Other income ₹50,000; Cost of materials consumed ₹8,00,000; Changes in inventories (₹50,000); Employee benefits ₹3,00,000; Finance costs ₹1,00,000; Depreciation ₹1,50,000; Other expenses ₹1,50,000; Tax 30%.", hint: "Total expenses = 14,50,000.", why: "",
      points: [{ p: "Total income ₹20,50,000", m: 1, k: ["20,50,000"] }, { p: "Changes in inventories shown as negative (50,000)", m: 1, k: ["50,000"] }, { p: "Total expenses ₹14,50,000", m: 1, k: ["14,50,000"] }, { p: "PBT ₹6,00,000", m: 1, k: ["6,00,000"] }, { p: "Tax ₹1,80,000", m: 1, k: ["1,80,000"] }, { p: "Profit for the period ₹4,20,000", m: 1, k: ["4,20,000"] }],
      model: "<table><tr><th>Particulars</th><th>₹</th></tr><tr><td>I. Revenue from operations</td><td>20,00,000</td></tr><tr><td>II. Other income</td><td>50,000</td></tr><tr><td>III. Total income</td><td>20,50,000</td></tr><tr><td>IV. Expenses: Cost of materials consumed</td><td>8,00,000</td></tr><tr><td>Changes in inventories</td><td>(50,000)</td></tr><tr><td>Employee benefits expense</td><td>3,00,000</td></tr><tr><td>Finance costs</td><td>1,00,000</td></tr><tr><td>Depreciation and amortisation</td><td>1,50,000</td></tr><tr><td>Other expenses</td><td>1,50,000</td></tr><tr><td>Total expenses</td><td>14,50,000</td></tr><tr><td>V. Profit before tax (III − IV)</td><td>6,00,000</td></tr><tr><td>Less: Tax (30%)</td><td>1,80,000</td></tr><tr><td><b>Profit for the period</b></td><td><b>4,20,000</b></td></tr></table>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "rev", q: "A finance company earns interest on loans given. For it, this interest is", o: ["Other income", "Revenue from operations", "Finance cost", "Reserve"], a: 1, hint: "Its main business.", why: "<b>Revenue from operations</b> for a finance company." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "cs", q: "Other expenses were 12% of revenue last year and 9% this year. This shows", o: ["Better cost control", "Lower revenue", "Higher tax", "More borrowing"], a: 0, hint: "Share of revenue fell.", why: "<b>Better control</b> of other expenses." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "obj", q: "A bank deciding on a 5-year loan looks mainly at the company's", o: ["Long-term solvency", "Dividend history only", "Number of employees", "Stock market price"], a: 0, hint: "Repayment over years.", why: "<b>Long-term solvency</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "cls", passage: "<b>Kesar Steel Ltd</b> received ₹15,000 from shareholders for a call not yet made.", q: "This is shown under", o: ["Share capital", "Other current liabilities", "Reserves and surplus", "Short-term provisions"], a: 1, hint: "Calls in advance.", why: "<b>Other current liabilities</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "comp", passage: "In <b>Orbit Ltd's</b> comparative statement, revenue rose 10% while total expenses rose 18%.", q: "Profit before tax will most likely", o: ["Rise faster than revenue", "Rise slower or fall", "Double", "Stay exactly the same"], a: 1, hint: "Costs outpaced income.", why: "Expenses grew faster → profit <b>grows slower or falls</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "cs", passage: "<b>Orbit Ltd's</b> long-term borrowings fell from 30% to 20% of the Balance Sheet total.", q: "The company has become", o: ["More dependent on debt", "Less dependent on debt", "Less profitable", "Insolvent"], a: 1, hint: "Share of debt fell.", why: "<b>Less dependent on debt</b>: owners' funds finance more." }
  ],
  find: {
    mcq: [
      { s: "A company lists debentures under non-current liabilities.", o: ["Long-term borrowings", "Short-term borrowings", "Trade payables", "Provisions"], a: 0, c: "cls", d: "E", why: "<b>Long-term borrowings</b>." },
      { s: "₹10,000 unpaid on the final call is deducted in the Share Capital note.", o: ["Calls in arrears", "Calls in advance", "Forfeiture", "Securities premium"], a: 0, c: "note", d: "E", why: "<b>Calls in arrears</b>." },
      { s: "Salaries, bonus and PF contribution are shown together.", o: ["Employee benefits expense", "Other expenses", "Finance costs", "Cost of materials"], a: 0, c: "pl", d: "E", why: "<b>Employee benefits expense</b>." },
      { s: "Two years' revenue shown side by side with change in ₹ and %.", o: ["Comparative statement", "Common-size statement", "Ratio analysis", "Cash flow"], a: 0, c: "comp", d: "E", why: "<b>Comparative statement</b>." },
      { s: "Every item in the Balance Sheet is shown as a % of the total.", o: ["Common-size Balance Sheet", "Comparative Balance Sheet", "Ratio", "Trend"], a: 0, c: "cs", d: "M", why: "<b>Common-size</b>." },
      { s: "Opening timber + timber bought − closing timber.", o: ["Cost of materials consumed", "Changes in inventories", "Purchases of stock-in-trade", "Other expenses"], a: 0, c: "cmc", d: "M", why: "<b>Cost of materials consumed</b>." },
      { s: "A manufacturer earns interest on a fixed deposit.", o: ["Other income", "Revenue from operations", "Finance cost", "Reserves"], a: 0, c: "rev", d: "M", why: "<b>Other income</b>." },
      { s: "A creditor checks whether the company can pay within the year.", o: ["Short-term solvency (liquidity)", "Long-term solvency", "Profitability", "Window dressing"], a: 0, c: "obj", d: "M", why: "<b>Liquidity</b> objective." },
      { s: "The analyst warns that a 2015 machine cost is far below today's price.", o: ["Ignores price-level changes", "Window dressing", "Qualitative factors", "Personal bias"], a: 0, c: "lim", d: "M", why: "Limitation: <b>price-level changes ignored</b>." },
      { s: "Company delays purchases till after 31 March to show a better current ratio.", o: ["Window dressing", "Common-size", "Comparative", "Calls in arrears"], a: 0, c: "lim", d: "M", why: "<b>Window dressing</b>." },
      { s: "Stock of finished goods rose during the year, so a negative figure reduces expenses.", o: ["Changes in inventories", "Cost of materials", "Other income", "Depreciation"], a: 0, c: "cmc", d: "C", why: "<b>Changes in inventories</b> = opening − closing (negative)." },
      { s: "Debit balance of ₹40,000 in the Statement of P&L.", o: ["Negative item under reserves and surplus", "Other current asset", "Intangible asset", "Short-term provision"], a: 0, c: "note", d: "C", why: "Shown as <b>negative under reserves and surplus</b>." },
      { s: "Sale of scrap by a cement company.", o: ["Other operating revenue", "Other income", "Exceptional item", "Reserve"], a: 0, c: "rev", d: "C", why: "<b>Other operating revenue</b>, part of revenue from operations." },
      { s: "Ratios, comparative statements and common-size statements are listed in a textbook.", o: ["Tools of analysis", "Objectives of analysis", "Limitations", "Schedule III heads"], a: 0, c: "tools", d: "C", why: "<b>Tools of analysis</b>." },
      { s: "Two firms, ₹50 lakh and ₹5 lakh revenue, compared by profit as % of revenue.", o: ["Common-size (inter-firm)", "Comparative (intra-firm)", "Ratio of capital", "Window dressing"], a: 0, c: "cs", d: "C", why: "Different sizes: <b>common-size</b>." },
      { s: "Money received against share warrants shown in the Balance Sheet.", o: ["Shareholders' funds", "Current liabilities", "Long-term borrowings", "Other income"], a: 0, c: "bs", d: "C", why: "A sub-head of <b>shareholders' funds</b>." }
    ],
    match: [
      { title: "Drag each item onto its place.", pairs: [["Bank overdraft", "Short-term borrowings", "cls"], ["Loose tools", "Inventories", "cls"], ["Interest on debentures", "Finance costs", "pl"], ["Dividend received (manufacturer)", "Other income", "rev"], ["Change as % of previous year", "Comparative statement", "comp"], ["Item as % of revenue", "Common-size P&L", "cs"]] }
    ],
    wrong: [
      { stmts: ["Debentures are long-term borrowings.", "Bank overdraft is a short-term borrowing.", "Calls in arrears are a current liability.", "Securities premium is in reserves and surplus."], a: 2, c: "cls", why: "Calls in arrears are <b>deducted from subscribed capital</b>." },
      { stmts: ["Comparative is horizontal.", "Common-size is vertical.", "Comparative uses revenue as the base.", "Common-size P&L uses revenue as 100."], a: 2, c: "comp", why: "Comparative uses the <b>previous year</b> as base." },
      { stmts: ["Analysis uses historical data.", "Analysis ignores price-level changes.", "Analysis captures staff morale.", "Window dressing reduces reliability."], a: 2, c: "lim", why: "Analysis <b>ignores qualitative</b> factors like morale." }
    ],
    para: [
      { target: "Other operating revenue", c: "rev", sents: ["Pinewood Ltd makes chairs.", "It sold leftover wood chips to a paper mill.", "It also earned bank interest.", "It paid salaries monthly."], a: 1, why: "Scrap sale by a manufacturer: <b>other operating revenue</b>." },
      { target: "Window dressing", c: "lim", sents: ["The company's year ends on 31 March.", "Its staff work in two shifts.", "Managers postponed buying stock to 2 April so the Balance Sheet looked healthier.", "Auditors visited in May."], a: 2, why: "Postponing purchases to dress up the Balance Sheet: <b>window dressing</b>." },
      { target: "Common-size statement", c: "cs", sents: ["The analyst collected two companies' P&L statements.", "She converted each item into a % of that company's own revenue.", "She printed the report.", "The investors met on Friday."], a: 1, why: "% of own revenue: <b>common-size</b>." }
    ],
    explain: [
      { s: "Revenue column for 2026-27 shows +25% next to it.", o: ["Comparative statement", "Common-size", "Ratio", "Note to accounts"], a: 0, c: "comp", why: "The clue is <i>change between years</i>: <b>comparative</b>." },
      { s: "Employee benefits shown as 15 against revenue 100.", o: ["Common-size P&L", "Comparative P&L", "Share capital note", "Trend"], a: 0, c: "cs", why: "Revenue = 100: <b>common-size</b>." },
      { s: "₹30,000 shown in brackets under expenses because stock went up.", o: ["Changes in inventories", "Other income", "Finance cost", "Calls in arrears"], a: 0, c: "cmc", why: "Negative when closing > opening: <b>changes in inventories</b>." },
      { s: "A company shows 'Trade payables' instead of 'Creditors'.", o: ["Schedule III terms", "Window dressing", "Common-size", "Comparative"], a: 0, c: "bs", why: "Required wording of <b>Schedule III</b>." }
    ]
  }
});
