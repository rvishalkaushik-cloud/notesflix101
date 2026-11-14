/* Notesflix 101 · Accountancy Lab · Class XII · Accounting for Partnership Firms: Fundamentals
   Basis: CBSE 2026-27 Accountancy (055), Unit 1; NCERT Class XII Accountancy Part I, Chapter 1; Indian Partnership Act, 1932.
   All questions are ORIGINAL practice questions ("orig") or written in CBSE board style ("board") for Notesflix 101.
   Check: node lab/tools/validate.js partnership */
/* wordings students use in the Appropriation A/c, so "Interest on Capital: A" and "To A's Current A/c" both match */
function IOC(x){ return ["interest on capital " + x, "interest on capital to " + x, x + " interest on capital", "ioc " + x, "interest on " + x + " capital"]; }
function IOD(x){ return ["interest on drawings " + x, "interest on drawings of " + x, x + " interest on drawings", "iod " + x, x + " current", x + " capital"]; }
function PR(x){ return ["profit " + x, "profit " + x + " current", "profit " + x + " capital", "share of profit " + x, x + " share of profit", x + " share", "profit transferred to " + x, "profit transferred " + x]; }
NFLab.register({
id:"partnership", cls:"XII", subject:"Accountancy", unit:"Accounting for Partnership Firms", num:"1", icon:"🤝",
title:"Partnership Fundamentals",
tagline:"Partnership deed, interest on capital and drawings, Profit and Loss Appropriation Account, capital accounts, guarantee and past adjustments.",
notesLink:"../learn/xii-acc.html",
home:{q:"What is a partnership?", ticks:["Two or more people run one business together.","They share its profits in an agreed ratio.","Their agreement (the deed) decides interest, salary and the profit ratio."]},
formats:["journal","ledger","capital"],

concepts:{
  deed:{n:"Partnership deed and Act provisions"}, capital:{n:"Fixed and fluctuating capitals", go:"lab"}, ioc:{n:"Interest on capital"},
  iod:{n:"Interest on drawings"}, approp:{n:"Profit and Loss Appropriation Account", go:"lab"}, guarantee:{n:"Guarantee of profit"},
  past:{n:"Past adjustments"}, entries:{n:"Journal entries and formats", go:"lab"}
},
acc:{
  loanB:{n:"B's Loan A/c", al:["b loan","loan from b","loan b"]},
  ioc:{n:"Interest on Capital A/c", al:["interest on capital"]}, iod:{n:"Interest on Drawings A/c", al:["interest on drawings"]},
  sal:{n:"Partner's Salary A/c", al:["salary","partner salary","b salary"]}
},

intro:{
  hook:"Riya has money but no time. Kabir has time and skill but little money. Together they open a café. How should they share the profit? Who gets interest, who gets a salary, and what if one of them takes cash out midway? Partnership accounts answer exactly these questions.",
  points:[
    "<b>Partnership</b> (Section 4, Indian Partnership Act, 1932) is the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all.",
    "Its features: two or more persons, an agreement, a lawful business, sharing of profits, mutual agency and unlimited liability. The minimum is 2 partners; the maximum is 50 (Companies (Miscellaneous) Rules, 2014).",
    "The written agreement is the <b>partnership deed</b>. It fixes the profit sharing ratio, interest on capital and drawings, salaries, commission and loan terms.",
    "When the deed is silent, the <b>Act's provisions</b> apply: profits shared equally, no interest on capital, no interest on drawings, no salary or commission, and 6% p.a. interest on a partner's loan."
  ],
  weight:"Board weightage: Unit 1 (Partnership) carries the biggest block of Part A marks. Appropriation, interest on drawings, guarantee and past adjustments appear every year as 3 to 6 mark numericals."
},
objectives:[
  "State the features of partnership and the provisions that apply when there is no deed.",
  "Prepare Partners' Capital Accounts under the fixed and fluctuating capital methods.",
  "Calculate interest on capital and interest on drawings (all average-period cases and the product method).",
  "Prepare the Profit and Loss Appropriation Account, including when profit is insufficient.",
  "Deal with a guarantee of minimum profit to a partner.",
  "Pass a single adjusting entry for past omissions and errors."
],
prereq:[
  {t:"Profit sharing ratio", d:"A ratio 3:2 means A gets 3/5 and B gets 2/5 of the profit.",
   check:{q:"Profit ₹75,000 is shared 3:2. A gets…", opts:["₹45,000","₹30,000","₹37,500","₹50,000"], a:0, why:"75,000 × 3/5 = 45,000."}},
  {t:"Interest for part of a year", d:"Interest = Amount × Rate/100 × Months/12.",
   check:{q:"Interest on ₹60,000 at 10% p.a. for 6 months is…", opts:["₹3,000","₹6,000","₹600","₹36,000"], a:0, why:"60,000 × 10/100 × 6/12 = 3,000."}},
  {t:"Capital account", d:"The capital account shows what the business owes its owner: credited for money brought and profits, debited for drawings and losses.",
   check:{q:"Drawings by a partner are…", opts:["Debited to his Capital or Current A/c","Credited to his Capital A/c","Debited to P&L A/c","Credited to Cash A/c only, nothing else"], a:0, why:"Drawings reduce what the firm owes the partner, so his account is debited (Cash is credited)."}}
],
kid:[
  {id:"k1", c:"deed", title:"Two friends, one café", art:{s:[["👩","Riya: money"],["🤝",""],["🧑‍🍳","Kabir: skill"],["➡️",""],["☕","Café"]], cap:"Together they run one business and share its profit."},
   story:"<p>Riya has ₹4 lakh but no time. Kabir is a great cook but has only ₹2 lakh. They start a café together and agree to share the profit.</p><p>When two or more people <b>agree</b> to run a business together and <b>share its profit</b>, they are <b>partners</b>, and the arrangement is a <b>partnership</b>.</p><p>Each partner can act for the café, so each is an <b>agent</b> of the others. If the café cannot pay its debts, the partners pay from their own pockets: <b>unlimited liability</b>.</p>",
   qa:[["Who are partners?","People who agree to run a business together and share its profit."],["What do they share?","The profit (and losses) of the business."],["Why write an agreement?","To avoid fights later about money and roles."],["How many partners?","At least 2, at most 50."]],
   check:{q:"Which is NOT a feature of partnership?", opts:["Limited liability of partners","Agreement between partners","Sharing of profits","Mutual agency"], a:0, why:"Partners have UNLIMITED liability."}},
  {id:"k2", c:"deed", title:"The rule book (deed)", art:{s:[["📜","Deed"],["✍️",""],["👩","Riya"],["🧑‍🍳","Kabir"]], cap:"No rule book? The Partnership Act's rules apply."},
   story:"<p>Riya and Kabir write a rule book: profit ratio 3:2, 10% interest on capital, ₹3,000 a month salary to Kabir. This rule book is the <b>partnership deed</b>.</p><p>What if they never wrote one? Then the law (the <b>Indian Partnership Act, 1932</b>) fills the gaps: profit shared <b>equally</b>; <b>no</b> interest on capital; <b>no</b> interest on drawings; <b>no</b> salary; and a partner's <b>loan gets 6% p.a.</b> interest.</p>",
   qa:[["Who writes the deed?","All the partners together."],["What does it decide?","Ratio, interest, salary, commission, loan terms."],["Why does the Act matter?","It applies wherever the deed is silent."],["How is profit shared with no deed?","Equally, whatever the capitals."]],
   check:{q:"No deed. Kabir lent ₹1,00,000 to the café. Interest he gets for a full year:", opts:["₹6,000","₹12,000","Nothing","₹10,000"], a:0, why:"The Act allows 6% p.a. on a partner's loan: 1,00,000 × 6% = 6,000."}},
  {id:"k3", c:"ioc", title:"A thank-you for the money", art:{s:[["💰","₹4,00,000"],["✖️",""],["🔟","10%"],["🟰",""],["🎁","₹40,000"]], cap:"Interest on capital rewards the partner who put in more money."},
   story:"<p>Riya put in more money than Kabir. To be fair, the deed gives each partner <b>10% interest on capital</b>.</p><p>Riya: ₹4,00,000 × 10% = <b>₹40,000</b>. Kabir: ₹2,00,000 × 10% = <b>₹20,000</b>.</p><p>This interest is paid out of profit, so it is an <b>appropriation</b> of profit, not an expense. If the café makes a loss, no interest on capital is given.</p>",
   qa:[["Who gets it?","Every partner, on his own capital, if the deed allows."],["From where?","Out of the profit (appropriation)."],["Why?","To reward the partners who invested more."],["How?","Capital × Rate × Time."]],
   check:{q:"The café makes a LOSS this year. Interest on capital (deed is silent on losses) is…", opts:["Not allowed","Allowed in full","Allowed at 6%","Given only to Riya"], a:0, why:"Interest on capital is an appropriation; with a loss there is nothing to appropriate."}},
  {id:"k4", c:"iod", title:"Taking money out early costs extra", art:{s:[["🏧","Drawings"],["📅","Middle of each month"],["⏳","6 months avg."],["💸","Interest"]], cap:"Interest on drawings is charged for the time the money was out."},
   story:"<p>Kabir takes ₹5,000 out of the café in the middle of every month for home expenses. These are his <b>drawings</b>.</p><p>That money could have stayed in the café, so the deed charges <b>interest on drawings</b> at 10% p.a. Money taken in April is out for nearly the whole year; money taken in March is out for only a few days. On average, money drawn mid-month is out for <b>6 months</b>.</p><p>So interest = ₹60,000 × 10% × 6/12 = <b>₹3,000</b>, debited to Kabir and credited to the appropriation account.</p>",
   qa:[["Who pays?","The partner who withdrew."],["To whom?","It is credited to the Profit and Loss Appropriation A/c."],["Why?","He used the firm's money for his own needs."],["How?","Total drawings × Rate × Average period/12."]],
   check:{q:"Drawings of the same amount at the BEGINNING of every month: average period is…", opts:["6.5 months","6 months","5.5 months","12 months"], a:0, why:"Beginning of each month → (12 + 1)/2 = 6.5 months."}},
  {id:"k5", c:"approp", title:"Cutting the profit cake in order", art:{s:[["🎂","Profit"],["1️⃣","Interest"],["2️⃣","Salary"],["3️⃣","Commission"],["🍰","Rest in 3:2"]], cap:"First the fixed slices, then the rest in the profit sharing ratio."},
   story:"<p>The café made ₹1,50,000 profit. Before sharing it 3:2, the fixed promises from the deed are paid: interest on capital, Kabir's salary, any commission. Interest on drawings is added back, because partners pay it to the firm.</p><p>What is left is the <b>divisible profit</b>, shared in the profit sharing ratio.</p><p>All of this is shown in the <b>Profit and Loss Appropriation Account</b>.</p>",
   qa:[["Who prepares it?","The firm, after the Profit and Loss Account."],["What goes on the debit side?","Interest on capital, salary, commission, reserve, share of profit."],["And the credit side?","Net profit and interest on drawings."],["Why separate?","These are partners' rewards, not business expenses."]],
   check:{q:"Which item goes to the CREDIT side of the P&L Appropriation A/c?", opts:["Interest on drawings","Interest on capital","Partner's salary","Transfer to reserve"], a:0, why:"Interest on drawings is an income of the firm from partners."}},
  {id:"k6", c:"capital", title:"One notebook or two?", art:{s:[["📗","Capital A/c"],["📘","Current A/c"],["⚖️","Fixed method"]], cap:"Fixed capital: capital stays the same; everything else goes to the current account."},
   story:"<p>Under the <b>fixed capital method</b> each partner has two notebooks: a <b>Capital A/c</b> that stays the same (unless capital is added or withdrawn), and a <b>Current A/c</b> for interest, salary, share of profit and drawings.</p><p>Under the <b>fluctuating capital method</b> there is one notebook: everything goes to the Capital A/c, so its balance keeps changing.</p>",
   qa:[["Which is default?","Fluctuating, unless the deed says capitals are fixed."],["Can a fixed capital change?","Only when capital is added or permanently withdrawn."],["Can a current A/c have a debit balance?","Yes."],["Where does salary go under fixed method?","To the Current A/c."]],
   check:{q:"Capitals are FIXED. Interest on capital is credited to…", opts:["Partners' Current A/cs","Partners' Capital A/cs","P&L A/c","Cash A/c"], a:0, why:"Under the fixed capital method all adjustments go through Current A/cs."}},
  {id:"k7", c:"guarantee", title:"A promise of minimum profit", art:{s:[["🧑","Chirag"],["🛡️","Min ₹50,000"],["👩","Asha"],["👨","Bhanu"]], cap:"If Chirag's share falls short, the guarantors make it up."},
   story:"<p>Chirag joins as a partner but asks: <i>“Promise me at least ₹50,000 a year.”</i> Asha and Bhanu agree. This is a <b>guarantee of profit</b>.</p><p>If Chirag's share works out to only ₹40,000, the <b>shortfall of ₹10,000</b> is paid by the partners who gave the guarantee, in the agreed ratio (or their own profit sharing ratio if nothing is said).</p>",
   qa:[["Who is guaranteed?","The partner promised a minimum."],["Who pays the shortfall?","The partner(s) who gave the guarantee."],["In which ratio?","As agreed; otherwise their profit sharing ratio."],["When nothing to pay?","When his share is already above the minimum."]],
   check:{q:"Chirag's share is ₹62,000; guaranteed minimum ₹50,000. Shortfall is…", opts:["Nil","₹12,000","₹50,000","₹62,000"], a:0, why:"His actual share already exceeds the minimum."}}
],
kidActs:[
  {id:"ka1", type:"sort", title:"Where does it go? P&L Appropriation A/c", c:"approp",
   bins:["Debit side (paid out of profit)","Credit side (comes into it)"],
   items:[
     {t:"Interest on capital", b:0, why:"A reward to partners out of profit."},{t:"Partner's salary", b:0, why:"An appropriation of profit."},
     {t:"Interest on drawings", b:1, why:"Partners pay it to the firm."},{t:"Net profit from P&L A/c", b:1, why:"The profit being shared."},
     {t:"Partner's commission", b:0, why:"An appropriation of profit."},{t:"Transfer to General Reserve", b:0, why:"Profit kept aside: an appropriation."}
   ]},
  {id:"ka2", type:"minute", title:"One-minute challenge: deed or no deed?", c:"deed", secs:60,
   items:[
     {q:"No deed: profit sharing ratio is…", opts:["Equal","Capital ratio"], a:0},
     {q:"No deed: interest on capital is…", opts:["Not allowed","6% p.a."], a:0},
     {q:"No deed: interest on a partner's loan is…", opts:["6% p.a.","Not allowed"], a:0},
     {q:"No deed: salary to a working partner is…", opts:["Not allowed","Allowed"], a:0},
     {q:"No deed: interest on drawings is…", opts:["Not charged","Charged at 6%"], a:0},
     {q:"Interest on a partner's loan is…", opts:["A charge (P&L A/c)","An appropriation"], a:0}
   ]}
],
exam:[
  {id:"e1", c:"deed", title:"Meaning, features and the partnership deed",
   html:"<p><b>Partnership</b> is “the relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all” (Section 4, Indian Partnership Act, 1932).</p><p><b>Features:</b> two or more persons (maximum 50); agreement (oral or written); lawful business; sharing of profits; mutual agency; unlimited liability.</p><p><b>Partnership deed</b>: the written agreement. It usually covers names and addresses, nature of business, capital, profit sharing ratio, interest on capital and drawings, salary and commission, interest on loans, accounting rules, and admission, retirement and dissolution.</p>"},
  {id:"e2", c:"deed", title:"Provisions of the Act when there is no deed (Sections 13 and 13(d))",
   html:"<table class='tt'><thead><tr><th>Matter</th><th>Rule</th></tr></thead><tbody><tr><td>Profit sharing</td><td>Equally, whatever the capital</td></tr><tr><td>Interest on capital</td><td>Not allowed</td></tr><tr><td>Interest on drawings</td><td>Not charged</td></tr><tr><td>Salary, commission</td><td>Not allowed</td></tr><tr><td>Interest on partner's loan</td><td>6% p.a.; it is a <b>charge</b> against profit, payable even in a loss</td></tr></tbody></table><p class='tip'>Interest on a partner's loan goes to the <b>Profit and Loss A/c</b>, not the Appropriation A/c. Rent paid to a partner for the firm's use of his property is also a charge.</p>"},
  {id:"e3", c:"capital", title:"Fixed and fluctuating capital methods",
   html:"<table class='tt'><thead><tr><th>Basis</th><th>Fixed capital</th><th>Fluctuating capital</th></tr></thead><tbody><tr><td>Accounts kept</td><td>Capital A/c and Current A/c</td><td>Only Capital A/c</td></tr><tr><td>Interest, salary, share of profit, drawings</td><td>Current A/c</td><td>Capital A/c</td></tr><tr><td>Balance</td><td>Capital stays the same; current A/c may show a debit</td><td>Changes every year; usually credit</td></tr></tbody></table><p>Capital A/c changes under the fixed method only for additional capital or a permanent withdrawal.</p>"},
  {id:"e4", c:"ioc", title:"Interest on capital",
   html:"<p class='formula'>Interest on capital = Capital × Rate/100 × Period/12</p><ul><li>Calculated on the <b>opening capital</b>; additional capital earns interest from the date it is brought in; a withdrawal of capital reduces it from that date.</li><li>Opening capital, if not given = Closing capital − profit credited − additional capital + drawings (+ losses debited).</li><li>It is an <b>appropriation</b>: allowed only out of profit. If there is a loss, no interest. If profit is less than the interest due, the profit is shared in the <b>ratio of interest on capital</b> (or of all appropriations due).</li><li>If the deed treats it as a <b>charge</b>, it is allowed even in a loss (debited to P&L A/c).</li></ul><p><b>Entry:</b> Interest on Capital A/c Dr / To Partners' Capital (or Current) A/cs; then P&L Appropriation A/c Dr / To Interest on Capital A/c. (Many answers pass one direct entry: P&L Appropriation A/c Dr / To Partners' Capital or Current A/cs.)</p>"},
  {id:"e5", c:"iod", title:"Interest on drawings",
   html:"<p class='formula'>Interest on drawings = Total drawings × Rate/100 × Average period/12</p><table class='tt'><thead><tr><th>Drawings of equal amount made</th><th>Monthly</th><th>Quarterly</th></tr></thead><tbody><tr><td>At the beginning of each period</td><td>6.5 months</td><td>7.5 months</td></tr><tr><td>In the middle of each period</td><td>6 months</td><td>6 months</td></tr><tr><td>At the end of each period</td><td>5.5 months</td><td>4.5 months</td></tr></tbody></table><p>Date of withdrawal not given → interest for 6 months on the total drawings. Unequal amounts or irregular dates → <b>product method</b>: Interest = Sum of (amount × months outstanding) × Rate/100 × 1/12.</p><p><b>Entry:</b> Partners' Capital/Current A/cs Dr / To Interest on Drawings A/c; then Interest on Drawings A/c Dr / To P&L Appropriation A/c.</p>"},
  {id:"e6", c:"approp", title:"Profit and Loss Appropriation Account",
   html:"<table class='tt'><thead><tr><th>Debit side</th><th>Credit side</th></tr></thead><tbody><tr><td>To Interest on Capital<br>To Partners' Salary / Commission<br>To General Reserve<br>To Profit transferred to Partners' Capital/Current A/cs (in PSR)</td><td>By Profit and Loss A/c (net profit)<br>By Interest on Drawings</td></tr></tbody></table><p><b>Commission</b> as a % of net profit: on profit <i>before</i> commission = NP × r/100; on profit <i>after</i> charging such commission = NP × r/(100 + r).</p><p><b>Insufficient profit:</b> appropriations are paid in proportion to the amounts due; nothing is left for the profit sharing ratio.</p><p class='tip'>Interest on partner's loan, rent to a partner and manager's commission are <b>charges</b>: they go to the Profit and Loss A/c before net profit is found.</p>"},
  {id:"e7", c:"guarantee", title:"Guarantee of profit to a partner",
   html:"<p>A partner may be guaranteed a minimum share of profit. If his actual share is less, the <b>deficiency</b> is borne by the guaranteeing partner(s): by one partner, by all of them in an agreed ratio, or (if nothing is said) in their profit sharing ratio.</p><p class='eg'>A, B, C share 2:2:1. C is guaranteed ₹50,000. Profit ₹2,00,000. C's share = 40,000. Deficiency = 10,000, borne by A and B in 2:2 → 5,000 each. Final: A 75,000, B 75,000, C 50,000.</p><p>In the Appropriation A/c the deficiency is shown by reducing the guarantors' shares (“Less: deficiency borne”) and increasing the guaranteed partner's share. Entry: Guarantors' Capital A/cs Dr / To Guaranteed partner's Capital A/c.</p>"},
  {id:"e8", c:"past", title:"Past adjustments",
   html:"<p>When interest on capital, drawings, salary, commission or the profit ratio was omitted or wrong in last year's accounts (already closed), one <b>adjustment entry</b> is passed through partners' capital (or current) accounts.</p><ol><li>Work out what each partner <b>should have been credited</b> (omitted interest/salary) or <b>debited</b> (omitted interest on drawings).</li><li>The same total must come out of (or go into) profit, so debit (or credit) it to partners in the profit sharing ratio.</li><li>Net each partner: a net credit (+) means his account is credited; a net debit (−) means it is debited.</li></ol><p class='eg'>Use an adjustment table: rows = items, columns = partners, last row = net effect. Entry: Partner with net debit A/c Dr / To Partner with net credit A/c.</p>"},
  {id:"e9", c:"entries", title:"Board answer presentation",
   html:"<ol><li>Write working notes first: interest on capital, interest on drawings (with average period), commission.</li><li>P&L Appropriation A/c: heading “for the year ended 31st March 2026”, Dr./Cr., each partner's item on a separate line.</li><li>Capital A/cs in columnar form; under fixed capitals prepare Capital A/cs and Current A/cs separately.</li><li>Past adjustment: show the adjustment table, then one journal entry.</li></ol>"}
],
visual:{kind:"approp", title:"Appropriation playground", sub:"Change the profit, capitals, interest rate and salary. Watch the profit flow out, and see what happens when profit is not enough.",
  names:["A","B"], profit:150000, caps:[400000,200000], rate:10, salary:36000, ratio:[3,2],
  flowTitle:"Profit flow", flow:["Profit and Loss A/c gives net profit","Add interest on drawings","Less interest on capital","Less salary and commission","Less transfer to reserve","Divisible profit in PSR","To partners' Capital or Current A/cs"]},
formulas:[
  {n:"Interest on capital", f:"Capital × Rate/100 × Months/12 (on opening capital; extra capital from the date brought in)", code:"C-R-T: Capital, Rate, Time", c:"ioc"},
  {n:"Interest on drawings", f:"Total drawings × Rate/100 × Average period/12", code:"Begin 6½, Middle 6, End 5½ (monthly)", c:"iod"},
  {n:"Quarterly drawings", f:"Average period: beginning 7.5, middle 6, end 4.5 months", code:"7½-6-4½ for quarters", c:"iod"},
  {n:"Product method", f:"Σ(Amount × months outstanding) × Rate/100 × 1/12", code:"Multiply, add, then rate", c:"iod"},
  {n:"Commission after charging itself", f:"Net profit × r/(100 + r)", code:"After = add r to 100 below", c:"approp"},
  {n:"Insufficient profit", f:"Profit shared in the ratio of appropriations due (e.g. interest on capital)", code:"Not enough? Share it in the ratio of dues", c:"ioc"},
  {n:"Opening capital", f:"Closing capital + Drawings − Profit credited − Additional capital (+ Losses)", code:"Walk the account backwards", c:"capital"},
  {n:"Guarantee deficiency", f:"Guaranteed amount − Actual share, borne by guarantors in agreed ratio", code:"Promise minus actual", c:"guarantee"},
  {n:"No deed", f:"Equal profit · no interest on capital or drawings · no salary · 6% on partner's loan (charge)", code:"E-N-N-N-6", c:"deed"}
],
illus:[
  {id:"i1", tag:"orig", c:"iod", title:"Interest on drawings: beginning of every month",
   given:"P withdrew ₹5,000 at the beginning of every month during the year ended 31 March 2026. Interest on drawings is charged at 6% p.a.",
   required:"Interest on P's drawings.",
   formula:"Interest = Total drawings × Rate/100 × Average period/12. Beginning of each month → average period 6.5 months.",
   steps:["Total drawings = 5,000 × 12 = <b>₹60,000</b>","Average period = (12 + 1)/2 = <b>6.5 months</b> (first draw is out 12 months, last draw 1 month)","Interest = 60,000 × 6/100 × 6.5/12","= <b>₹1,950</b>"],
   answer:"Interest on drawings = ₹1,950.",
   why:"Equal drawings at the start of each month are out, on average, for 6.5 months, so the full-year interest on the total is scaled by 6.5/12."},
  {id:"i2", tag:"orig", c:"ioc", title:"Insufficient profit for interest on capital",
   given:"A and B have capitals ₹3,00,000 and ₹2,00,000. The deed allows interest on capital at 10% p.a. Net profit for the year ended 31 March 2026 is ₹40,000.",
   required:"Profit and Loss Appropriation Account.",
   formula:"Interest due = Capital × 10%. Profit less than interest due → share profit in the ratio of interest on capital.",
   steps:["Interest due: A = <b>₹30,000</b>, B = <b>₹20,000</b>, total ₹50,000","Profit ₹40,000 is less than ₹50,000: insufficient","Share ₹40,000 in 30,000 : 20,000 = 3 : 2","A gets <b>₹24,000</b>; B gets <b>₹16,000</b>; nothing is left for the profit sharing ratio"],
   format:{type:"tacc", name:"Profit and Loss Appropriation Account for the year ended 31 March 2026", heads:["Particulars","₹","Particulars","₹"], date:"2026 Mar 31",
     left:[{a:"capA", amt:24000, p:"To Interest on Capital: A"},{a:"capB", amt:16000, p:"To Interest on Capital: B"}],
     right:[{a:"pl", amt:40000, p:"By Profit and Loss A/c (net profit)"}], total:40000},
   answer:"A ₹24,000, B ₹16,000 as interest on capital; no divisible profit.",
   why:"Interest on capital is an appropriation, so it cannot exceed the profit available. The available profit is shared in proportion to what each partner was due."},
  {id:"i3", tag:"board", c:"approp", title:"Appropriation Account and fluctuating Capital Accounts",
   given:"P and Q share profits 3:2. Capitals on 1 April 2025: P ₹2,00,000, Q ₹1,50,000 (fluctuating). Interest on capital 6% p.a.; P's salary ₹24,000 a year; drawings P ₹30,000, Q ₹20,000; interest on drawings P ₹2,000, Q ₹1,500. Net profit for the year ended 31 March 2026: ₹1,00,000.",
   required:"P&L Appropriation A/c and Partners' Capital A/cs.",
   formula:"Divisible profit = Net profit + Interest on drawings − Interest on capital − Salary. Shared 3:2.",
   steps:["Interest on capital: P = 2,00,000 × 6% = <b>₹12,000</b>; Q = 1,50,000 × 6% = <b>₹9,000</b>","Credit side = 1,00,000 + 2,000 + 1,500 = ₹1,03,500","Appropriations = 12,000 + 9,000 + 24,000 = ₹45,000","Divisible profit = 1,03,500 − 45,000 = <b>₹58,500</b> → P 35,100, Q 23,400","P's capital: 2,00,000 + 12,000 + 24,000 + 35,100 − 30,000 − 2,000 = <b>₹2,39,100</b>","Q's capital: 1,50,000 + 9,000 + 23,400 − 20,000 − 1,500 = <b>₹1,60,900</b>"],
   format:{type:"multi", parts:[
     {type:"tacc", name:"Profit and Loss Appropriation Account for the year ended 31 March 2026", heads:["Particulars","₹","Particulars","₹"], date:"2026 Mar 31",
      left:[{a:"capP", amt:12000, p:"To Interest on Capital: P"},{a:"capQ", amt:9000, p:"To Interest on Capital: Q"},{a:"capP", amt:24000, p:"To P's Salary"},{a:"capP", amt:35100, p:"To Profit transferred to P's Capital"},{a:"capQ", amt:23400, p:"To Profit transferred to Q's Capital"}],
      right:[{a:"pl", amt:100000, p:"By Profit and Loss A/c (net profit)"},{a:"capP", amt:2000, p:"By Interest on Drawings: P"},{a:"capQ", amt:1500, p:"By Interest on Drawings: Q"}], total:103500},
     {type:"grid", name:"Partners' Capital Accounts", head:["Dr. Particulars","P (₹)","Q (₹)","Cr. Particulars","P (₹)","Q (₹)"],
      rows:[
        ["To Drawings A/c",30000,20000,"By Balance b/d",200000,150000],
        ["To Interest on Drawings A/c",2000,1500,"By Interest on Capital A/c",12000,9000],
        ["",null,null,"By Salary A/c",24000,null],
        ["",null,null,"By P&L Appropriation A/c (profit)",35100,23400],
        ["To Balance c/d",239100,160900,"",null,null],
        ["Total",271100,182400,"Total",271100,182400]]}
   ]},
   answer:"Divisible profit ₹58,500. Closing capitals: P ₹2,39,100; Q ₹1,60,900.",
   why:"Under the fluctuating method every appropriation and drawing passes through the Capital A/c, so its balance changes."}
],
solver:[
  {id:"s1", tag:"orig", c:"iod", title:"Interest on drawings: quarterly at the beginning", mins:6,
   q:"A withdrew ₹15,000 at the beginning of each quarter during the year ended 31 March 2026. Interest on drawings is 8% p.a. Calculate the interest on A's drawings.",
   steps:[
     {label:"Total drawings", prompt:"Total drawings for the year (₹)", kind:"num", ans:60000, hint:"4 quarters × 15,000.", formula:"Total = amount × number of withdrawals", traps:[{v:15000, why:"That is one quarter only. There are 4 quarters."}], why:"15,000 × 4 = 60,000.", avoid:"Count the withdrawals in the year first."},
     {label:"Average period", prompt:"Average period in months", kind:"num", ans:7.5, tol:0.01, hint:"Beginning of each quarter: (12 + 3)/2.", formula:"Quarterly at the beginning → 7.5 months", traps:[{v:4.5, why:"4.5 months is for drawings at the END of each quarter."},{v:6, why:"6 months is for the middle of each quarter, or when no date is given."},{v:6.5, why:"6.5 months is for MONTHLY drawings at the beginning."}], why:"The first draw is out 12 months, the last 3 months: average (12 + 3)/2 = 7.5.", avoid:"Remember 7½-6-4½ for quarters."},
     {label:"Interest for a full year", prompt:"Interest on total drawings for 12 months (₹)", kind:"num", ans:4800, hint:"60,000 × 8%.", formula:"Total × Rate/100", why:"60,000 × 8/100 = 4,800.", avoid:"Find the full-year interest, then scale by time."},
     {label:"Interest on drawings", prompt:"Interest on A's drawings (₹)", kind:"num", ans:3000, hint:"4,800 × 7.5/12.", formula:"Interest = Total × Rate × Average period/12", traps:[{v:4800, why:"You charged a full year. Drawings were out for 7.5 months on average."},{v:1800, why:"You used 4.5 months (end of quarter). Here money was drawn at the BEGINNING."}], why:"4,800 × 7.5/12 = 3,000.", avoid:"Always multiply by average period ÷ 12."}
   ]},
  {id:"s2", tag:"board", c:"ioc", title:"Insufficient profit: interest on capital", mins:5,
   q:"X and Y have capitals of ₹1,20,000 and ₹80,000. Interest on capital is allowed at 10% p.a. The net profit is only ₹15,000. How much does X receive?",
   steps:[
     {label:"Interest due to X", prompt:"X's interest on capital due (₹)", kind:"num", ans:12000, hint:"1,20,000 × 10%.", formula:"Capital × Rate", why:"1,20,000 × 10% = 12,000.", avoid:"Work out what is due before checking the profit."},
     {label:"Interest due to Y", prompt:"Y's interest on capital due (₹)", kind:"num", ans:8000, hint:"80,000 × 10%.", formula:"Capital × Rate", why:"80,000 × 10% = 8,000.", avoid:""},
     {label:"Compare with profit", prompt:"Total interest due (₹)", kind:"num", ans:20000, hint:"12,000 + 8,000.", formula:"Total due", why:"20,000 is more than the profit of 15,000: profit is insufficient.", avoid:"If profit < total due, share the profit in the ratio of amounts due."},
     {label:"X's amount", prompt:"Amount X actually receives (₹)", kind:"num", ans:9000, hint:"15,000 × 12,000/20,000.", formula:"Profit × X's interest ÷ Total interest", traps:[{v:12000, why:"X cannot get his full interest: only ₹15,000 profit exists."},{v:7500, why:"You split the profit equally. Use the ratio of interest due, 12:8."}], why:"15,000 × 3/5 = 9,000; Y gets 6,000.", avoid:"Interest on capital is an appropriation, limited to available profit."}
   ]},
  {id:"s3", tag:"orig", c:"guarantee", title:"Guarantee borne by one partner", mins:6,
   q:"A, B and C share profits 3:2:1. C is guaranteed a minimum profit of ₹30,000, and any deficiency is to be borne by A alone. Net profit for the year is ₹1,20,000. Find each partner's final share.",
   steps:[
     {label:"C's share as per ratio", prompt:"C's share before guarantee (₹)", kind:"num", ans:20000, hint:"1,20,000 × 1/6.", formula:"Profit × C's ratio", why:"1,20,000 × 1/6 = 20,000.", avoid:"Total of ratio = 3 + 2 + 1 = 6."},
     {label:"Deficiency", prompt:"Deficiency to make good (₹)", kind:"num", ans:10000, hint:"30,000 − 20,000.", formula:"Guaranteed − Actual", why:"30,000 − 20,000 = 10,000.", avoid:"No deficiency if actual ≥ guaranteed."},
     {label:"A's final share", prompt:"A's final share (₹)", kind:"num", ans:50000, hint:"A's share 60,000 less the whole deficiency.", formula:"A's share − deficiency (A alone bears it)", traps:[{v:54000, why:"You made A and B share the deficiency 3:2. Here A ALONE bears it."},{v:60000, why:"You forgot to deduct the deficiency A bears."}], why:"60,000 − 10,000 = 50,000.", avoid:"Read who gives the guarantee."},
     {label:"B's final share", prompt:"B's final share (₹)", kind:"num", ans:40000, hint:"B is not affected.", formula:"Profit × 2/6", why:"1,20,000 × 2/6 = 40,000 (unchanged).", avoid:""},
     {label:"C's final share", prompt:"C's final share (₹)", kind:"num", ans:30000, hint:"The guaranteed amount.", formula:"Guaranteed minimum", why:"C gets exactly 30,000.", avoid:"Check: 50,000 + 40,000 + 30,000 = 1,20,000."}
   ]},
  {id:"s4", tag:"board", c:"past", title:"Past adjustment: interest on capital omitted", mins:7,
   q:"A and B share profits equally. Their capitals were ₹2,00,000 and ₹1,00,000. Last year's profit was distributed without allowing interest on capital at 5% p.a. Pass one adjusting entry. (Answer the amounts step by step.)",
   steps:[
     {label:"A's omitted interest", prompt:"Interest on capital due to A (₹)", kind:"num", ans:10000, hint:"2,00,000 × 5%.", formula:"Capital × Rate", why:"2,00,000 × 5% = 10,000.", avoid:""},
     {label:"B's omitted interest", prompt:"Interest on capital due to B (₹)", kind:"num", ans:5000, hint:"1,00,000 × 5%.", formula:"Capital × Rate", why:"1,00,000 × 5% = 5,000.", avoid:""},
     {label:"Profit to be taken back", prompt:"A's share of the total ₹15,000 to be debited (₹)", kind:"num", ans:7500, hint:"15,000 shared equally.", formula:"Total omitted × profit sharing ratio", traps:[{v:10000, why:"The 15,000 comes out of profit, which is shared in the profit ratio 1:1, not the capital ratio."}], why:"15,000 × 1/2 = 7,500.", avoid:"Omitted interest reduces last year's profit, which partners share in PSR."},
     {label:"Net effect on A", prompt:"Net credit to A (₹)", kind:"num", ans:2500, hint:"10,000 credit − 7,500 debit.", formula:"Credit due − Debit in PSR", why:"+2,500 for A; B has −2,500.", avoid:"Prepare a table: interest, less profit, net."},
     {label:"Adjusting entry amount", prompt:"Amount of the entry B's Capital A/c Dr To A's Capital A/c (₹)", kind:"num", ans:2500, hint:"The net figure.", formula:"Net effect", why:"B's Capital A/c Dr 2,500 / To A's Capital A/c 2,500.", avoid:"One entry for the net effect, not separate entries."}
   ]}
],
lab:[
  {id:"L0", tag:"orig", level:"Easy", c:"ioc", title:"Interest on capital and salary (fixed capitals)",
   q:"A and B are partners with FIXED capitals of ₹4,00,000 and ₹2,00,000. The deed allows interest on capital at 10% p.a. and a salary of ₹3,000 a month to B. Pass the entries for interest on capital and salary for the year ended 31 March 2026, directly through the P&L Appropriation A/c and the partners' Current Accounts.",
   format:{type:"journal", entries:[
     {label:"Interest on capital", date:"2026 Mar 31", lines:[{a:"pla", dr:60000, why:"40,000 + 20,000 = 60,000 is appropriated out of profit."},{a:"curA", cr:40000, why:"4,00,000 × 10% = 40,000. Fixed capitals: credit the Current A/c."},{a:"curB", cr:20000, why:"2,00,000 × 10% = 20,000."}], narr:"(Being interest on capital allowed @ 10% p.a.)"},
     {label:"Salary to B", date:"2026 Mar 31", lines:[{a:"pla", dr:36000},{a:"curB", cr:36000, why:"3,000 × 12 = 36,000, credited to B's Current A/c."}], narr:"(Being salary allowed to B)"}
   ]}},
  {id:"L1", tag:"board", level:"Medium", c:"approp", title:"Appropriation entries for the year",
   q:"A and B share profits 3:2 with FIXED capitals of ₹4,00,000 and ₹2,00,000. Deed: interest on capital 10% p.a.; B's salary ₹3,000 a month; interest on drawings 10% p.a. Drawings: A ₹60,000, B ₹48,000, made evenly in the middle of every month. Net profit for the year ended 31 March 2026: ₹1,50,000. Pass the journal entries, directly through the P&L Appropriation A/c and Current Accounts.",
   format:{type:"journal", entries:[
     {label:"Net profit transferred", date:"2026 Mar 31", lines:[{a:"pl", dr:150000},{a:"pla", cr:150000}], narr:"(Being net profit transferred to P&L Appropriation A/c)"},
     {label:"Interest on capital", date:"2026 Mar 31", lines:[{a:"pla", dr:60000},{a:"curA", cr:40000},{a:"curB", cr:20000}], narr:"(Being interest on capital allowed)"},
     {label:"Salary to B", date:"2026 Mar 31", lines:[{a:"pla", dr:36000},{a:"curB", cr:36000}], narr:"(Being salary allowed to B)"},
     {label:"Interest on drawings", date:"2026 Mar 31", lines:[{a:"curA", dr:3000, why:"60,000 × 10% × 6/12 = 3,000 (middle of each month → 6 months)."},{a:"curB", dr:2400, why:"48,000 × 10% × 6/12 = 2,400."},{a:"pla", cr:5400, why:"Interest on drawings is a gain to the firm: credit the Appropriation A/c."}], narr:"(Being interest on drawings charged)"},
     {label:"Divisible profit distributed", date:"2026 Mar 31", lines:[{a:"pla", dr:59400, why:"1,50,000 + 5,400 − 60,000 − 36,000 = 59,400."},{a:"curA", cr:35640, why:"59,400 × 3/5."},{a:"curB", cr:23760, why:"59,400 × 2/5."}], narr:"(Being divisible profit transferred to partners in 3:2)"}
   ]}},
  {id:"L2", tag:"board", level:"Medium", c:"approp", title:"P&L Appropriation Account", ref:"L1",
   q:"Using the question in worksheet L1, prepare the Profit and Loss Appropriation Account for the year ended 31 March 2026.",
   format:{type:"tacc", name:"Profit and Loss Appropriation Account for the year ended 31 March 2026", heads:["Particulars","₹","Particulars","₹"], date:"2026 Mar 31",
    left:[{a:"curA", amt:40000, p:"To Interest on Capital: A", why:"4,00,000 × 10%.", al:IOC("A")},{a:"curB", amt:20000, p:"To Interest on Capital: B", al:IOC("B")},{a:"sal", amt:36000, p:"To B's Salary", why:"3,000 × 12.", al:["salary b","b salary","salary to b","b current"]},{a:"curA", amt:35640, p:"To Profit: A's Current A/c", why:"Divisible profit 59,400 × 3/5.", al:PR("A")},{a:"curB", amt:23760, p:"To Profit: B's Current A/c", why:"59,400 × 2/5.", al:PR("B")}],
    right:[{a:"pl", amt:150000, p:"By Profit and Loss A/c", al:["net profit","profit and loss","p l"]},{a:"curA", amt:3000, p:"By Interest on Drawings: A", why:"60,000 × 10% × 6/12.", al:IOD("A")},{a:"curB", amt:2400, p:"By Interest on Drawings: B", why:"48,000 × 10% × 6/12.", al:IOD("B")}], total:155400}},
  {id:"L3", tag:"board", level:"Hard", c:"capital", title:"Partners' Current Accounts", ref:"L1",
   q:"Using worksheet L1, complete the Partners' Current Accounts. Opening current account balances: A ₹10,000 (Cr), B ₹5,000 (Cr). Leave a cell blank where the partner has no amount.",
   format:{type:"grid", name:"Partners' Current Accounts", head:["Dr. Particulars","A (₹)","B (₹)","Cr. Particulars","A (₹)","B (₹)"],
    rows:[
      ["To Drawings A/c",{a:60000},{a:48000},"By Balance b/d",{a:10000},{a:5000}],
      ["To Interest on Drawings A/c",{a:3000, why:"60,000 × 10% × 6/12."},{a:2400},"By Interest on Capital A/c",{a:40000},{a:20000}],
      ["",null,null,"By Salary A/c",{a:null, why:"Only B gets salary."},{a:36000}],
      ["",null,null,"By P&L Appropriation A/c (profit)",{a:35640},{a:23760}],
      ["To Balance c/d",{a:22640, why:"85,640 − 63,000."},{a:34360, why:"84,760 − 50,400."},"",null,null],
      ["Total",{a:85640},{a:84760},"Total",{a:85640},{a:84760}]]}},
  {id:"L4", tag:"board", level:"Hard", c:"past", title:"Past adjustment: interest on capital omitted",
   q:"X, Y and Z share profits equally. Their capitals on 1 April 2025 were ₹1,50,000, ₹1,00,000 and ₹50,000. After the accounts for 2025-26 were closed, it was found that interest on capital at 6% p.a. was not allowed. Pass the adjusting entry on 1 April 2026.",
   format:{type:"journal", entries:[
     {label:"Adjustment for omitted interest on capital", date:"2026 Apr 1", lines:[{a:"capZ", dr:3000, why:"Z should have got 3,000 interest but shares 6,000 of the 18,000 total: net −3,000."},{a:"capX", cr:3000, why:"X: interest 9,000 − share of total 6,000 = +3,000. Y: 6,000 − 6,000 = nil, so Y is not in the entry."}], narr:"(Being omitted interest on capital adjusted)"}
   ]}},
  {id:"L5", tag:"board", level:"Hard", c:"guarantee", title:"Guarantee of profit to C",
   q:"A, B and C share profits 2:2:1. C is guaranteed a minimum profit of ₹50,000; any deficiency is borne by A and B in their profit sharing ratio. Net profit for the year ended 31 March 2026 is ₹2,00,000 (capitals are fluctuating). Pass the entries: (i) profit distributed in the ratio; (ii) deficiency made good.",
   format:{type:"journal", entries:[
     {label:"Profit distributed in 2:2:1", date:"2026 Mar 31", lines:[{a:"pla", dr:200000},{a:"capA", cr:80000},{a:"capB", cr:80000},{a:"capC", cr:40000}], narr:"(Being profit distributed in 2:2:1)"},
     {label:"Deficiency of C made good", date:"2026 Mar 31", lines:[{a:"capA", dr:5000, why:"Deficiency 50,000 − 40,000 = 10,000, borne by A and B 2:2."},{a:"capB", dr:5000},{a:"capC", cr:10000}], narr:"(Being deficiency of guaranteed profit to C borne by A and B)"}
   ]}}
],
blanks:[
  {id:"B1", t:"Journal", type:"journal", rows:8},
  {id:"B2", t:"P&L Appropriation Account", type:"tacc", rows:7, heads:["Particulars","₹","Particulars","₹"]},
  {id:"B3", t:"Partners' Capital / Current Accounts (3 partners)", type:"grid", rows:7, head:["Dr. Particulars","Partner 1","Partner 2","Partner 3","Cr. Particulars","Partner 1","Partner 2","Partner 3"]},
  {id:"B4", t:"Ledger account (T-format)", type:"tacc", rows:6, heads:["Particulars","₹","Particulars","₹"]}
],
mistakes:[
  {id:"m1", c:"deed", q:"Interest on B's loan of ₹1,00,000 (no deed) is recorded as:", shown:[["P&L Appropriation A/c","Dr",6000,""],["To Interest on B's Loan A/c","",null,6000]],
   opts:["Interest on a partner's loan is a charge: debit Profit and Loss A/c, not the Appropriation A/c","The rate should be 12%","It should be credited to B's Capital A/c only","Nothing is wrong"], a:0, why:"Interest on a partner's loan must be paid even in a loss; it is a charge against profit."},
  {id:"m2", c:"iod", q:"Interest on drawings ₹2,400 charged to B:", shown:[["P&L Appropriation A/c","Dr",2400,""],["To B's Current A/c","",null,2400]],
   opts:["Sides are reversed: B's Current A/c is debited and the Appropriation A/c credited","The amount should be ₹1,200","It should go to Capital A/c","Nothing is wrong"], a:0, why:"B pays interest to the firm, so B's account is debited."},
  {id:"m3", c:"capital", q:"Capitals are FIXED. Salary to A ₹24,000 is recorded as:", shown:[["P&L Appropriation A/c","Dr",24000,""],["To A's Capital A/c","",null,24000]],
   opts:["Under fixed capitals the salary goes to A's Current A/c, not Capital A/c","Salary is a charge to P&L A/c","Amount should be ₹2,000","Nothing is wrong"], a:0, why:"Fixed capital accounts change only for capital introduced or withdrawn."},
  {id:"m4", c:"ioc", q:"The firm made a LOSS of ₹20,000. The deed allows interest on capital (silent on losses). Accountant passed:", shown:[["P&L Appropriation A/c","Dr",15000,""],["To A's Capital A/c","",null,9000],["To B's Capital A/c","",null,6000]],
   opts:["No interest on capital is allowed when there is a loss (it is an appropriation)","Amounts should be equal","Should be debited to partners","Nothing is wrong"], a:0, why:"With no profit, there is nothing to appropriate."},
  {id:"m5", c:"guarantee", q:"C (1/5 share) guaranteed ₹50,000, deficiency borne by A only (A:B:C 2:2:1). Profit ₹2,00,000. Entry passed:", shown:[["A's Capital A/c","Dr",5000,""],["B's Capital A/c","Dr",5000,""],["To C's Capital A/c","",null,10000]],
   opts:["A alone must bear the whole deficiency of ₹10,000","Deficiency is ₹50,000","C should be debited","Nothing is wrong"], a:0, why:"Only the partner who gave the guarantee bears the shortfall."}
],
cases:[
  {id:"c1", tag:"board", title:"Spice Route Caterers",
   story:"Neha and Arjun started Spice Route Caterers on 1 April 2025 without a written deed. Neha brought ₹3,00,000 and Arjun ₹2,00,000 as capital. Arjun also lent ₹1,00,000 to the firm on 1 April 2025. Neha, who manages the kitchen full time, wants a salary of ₹10,000 a month; Arjun wants interest on capital at 8%. Profit for the year before considering any of these was ₹96,000.",
   qs:[
     {type:"num", c:"deed", q:"Interest payable on Arjun's loan for the year (₹)", ans:6000, why:"No deed → 6% p.a.: 1,00,000 × 6% = 6,000. It is a charge."},
     {type:"mcq", c:"deed", q:"Neha's claim for salary:", opts:["Not allowed: there is no deed allowing salary","Allowed: she works full time","Allowed at half rate","Allowed if Arjun agrees verbally after the year"], a:0, why:"The Act allows no salary unless agreed."},
     {type:"mcq", c:"deed", q:"Arjun's claim for interest on capital:", opts:["Not allowed","Allowed at 8%","Allowed at 6%","Allowed only on Arjun's capital"], a:0, why:"No interest on capital without agreement."},
     {type:"num", c:"deed", q:"Profit available for sharing after the loan interest (₹)", ans:90000, why:"96,000 − 6,000 = 90,000."},
     {type:"num", c:"deed", q:"Arjun's share of profit (₹)", ans:45000, why:"Shared equally (no deed): 90,000 ÷ 2 = 45,000."}
   ]}
],
games:{
  names:{bs:"Appropriation Sorter", profit:"Profit Flow Master"},
  obj:{dc:"Choose the correct debit and credit accounts for partnership transactions.", bs:"Sort each item: P&L Appropriation A/c (debit or credit) or a charge in the P&L A/c.", profit:"Track the divisible profit as each appropriation is taken out."},
  cc:{bs:"approp", profit:"approp", missing:"ioc", escape:"iod", casegame:"deed", detective:"entries"},
  dc:[
    {t:"Interest on capital allowed (fluctuating capitals).", ok:"Dr P&L Appropriation A/c · Cr Partners' Capital A/cs", bad:["Dr Partners' Capital A/cs · Cr P&L Appropriation A/c","Dr P&L A/c · Cr Partners' Capital A/cs","Dr Cash A/c · Cr Partners' Capital A/cs"], c:"ioc"},
    {t:"Interest on capital allowed (fixed capitals).", ok:"Dr P&L Appropriation A/c · Cr Partners' Current A/cs", bad:["Dr P&L Appropriation A/c · Cr Partners' Capital A/cs","Dr Partners' Current A/cs · Cr P&L Appropriation A/c","Dr Interest A/c · Cr Cash A/c"], c:"capital"},
    {t:"Interest on drawings charged.", ok:"Dr Partners' Capital/Current A/cs · Cr P&L Appropriation A/c", bad:["Dr P&L Appropriation A/c · Cr Partners' Capital A/cs","Dr Drawings A/c · Cr Interest A/c","Dr P&L A/c · Cr Partners' Capital A/cs"], c:"iod"},
    {t:"Interest on a partner's loan provided.", ok:"Dr Profit and Loss A/c · Cr Interest on Partner's Loan A/c", bad:["Dr P&L Appropriation A/c · Cr Interest on Partner's Loan A/c","Dr Partner's Loan A/c · Cr P&L A/c","Dr Partner's Capital A/c · Cr Interest A/c"], c:"deed"},
    {t:"Salary to a partner (fluctuating capitals).", ok:"Dr P&L Appropriation A/c · Cr Partner's Capital A/c", bad:["Dr Salary A/c · Cr Cash A/c","Dr Partner's Capital A/c · Cr P&L Appropriation A/c","Dr P&L A/c · Cr Partner's Current A/c"], c:"approp"},
    {t:"Partner withdraws cash for personal use (fixed capitals).", ok:"Dr Partner's Current A/c (via Drawings) · Cr Cash A/c", bad:["Dr Partner's Capital A/c · Cr Cash A/c","Dr Cash A/c · Cr Partner's Current A/c","Dr P&L A/c · Cr Cash A/c"], c:"capital"},
    {t:"Net profit transferred to the Appropriation A/c.", ok:"Dr Profit and Loss A/c · Cr P&L Appropriation A/c", bad:["Dr P&L Appropriation A/c · Cr Profit and Loss A/c","Dr Partners' Capital A/cs · Cr P&L A/c","Dr Cash A/c · Cr P&L Appropriation A/c"], c:"approp"},
    {t:"Divisible profit transferred to partners.", ok:"Dr P&L Appropriation A/c · Cr Partners' Capital/Current A/cs", bad:["Dr Partners' Capital A/cs · Cr P&L Appropriation A/c","Dr P&L A/c · Cr Partners' Capital A/cs","Dr P&L Appropriation A/c · Cr General Reserve A/c"], c:"approp"},
    {t:"Transfer of 10% of profit to General Reserve.", ok:"Dr P&L Appropriation A/c · Cr General Reserve A/c", bad:["Dr General Reserve A/c · Cr P&L Appropriation A/c","Dr P&L A/c · Cr General Reserve A/c","Dr Partners' Capital A/cs · Cr General Reserve A/c"], c:"approp"},
    {t:"Deficiency of a guaranteed partner borne by others.", ok:"Dr Guarantor partners' Capital A/cs · Cr Guaranteed partner's Capital A/c", bad:["Dr Guaranteed partner's Capital A/c · Cr Guarantors' Capital A/cs","Dr P&L A/c · Cr Guaranteed partner's Capital A/c","Dr Cash A/c · Cr Guaranteed partner's Capital A/c"], c:"guarantee"},
    {t:"Past adjustment: omitted interest on capital, X gains and Y loses.", ok:"Dr Y's Capital A/c · Cr X's Capital A/c", bad:["Dr X's Capital A/c · Cr Y's Capital A/c","Dr P&L Appropriation A/c · Cr X's Capital A/c","Dr Interest on Capital A/c · Cr Y's Capital A/c"], c:"past"},
    {t:"Partner brings additional capital in cash.", ok:"Dr Cash A/c · Cr Partner's Capital A/c", bad:["Dr Partner's Capital A/c · Cr Cash A/c","Dr Cash A/c · Cr Partner's Current A/c","Dr Cash A/c · Cr P&L Appropriation A/c"], c:"capital"}
  ],
  bs:{c:"approp", title:"Sort the items of A and B's firm (worksheet L1) plus three charges",
    bins:["Appropriation A/c — Debit","Appropriation A/c — Credit","Profit and Loss A/c (a charge)"],
    items:[
      {t:"Interest on capital: A", amt:40000, b:0},{t:"Interest on capital: B", amt:20000, b:0},{t:"B's salary", amt:36000, b:0},{t:"Profit to A", amt:35640, b:0},{t:"Profit to B", amt:23760, b:0},
      {t:"Net profit", amt:150000, b:1},{t:"Interest on drawings: A", amt:3000, b:1},{t:"Interest on drawings: B", amt:2400, b:1},
      {t:"Interest on partner's loan", amt:6000, b:2, why:"A charge: paid even in a loss."},{t:"Rent paid to a partner", amt:12000, b:2, why:"A charge for using his property."},{t:"Manager's commission", amt:5000, b:2, why:"An expense of the business."}
    ], total:155400},
  race:[
    {t:"Capital ₹2,40,000; interest on capital @ 5% for the full year.", ok:"P&L Appropriation A/c Dr → Partner's Capital A/c", bad:["Partner's Capital A/c Dr → P&L Appropriation A/c","P&L A/c Dr → Partner's Capital A/c"], amt:12000, c:"ioc"},
    {t:"Drawings ₹24,000 (no dates given); interest @ 10%.", ok:"Partner's Capital A/c Dr → P&L Appropriation A/c", bad:["P&L Appropriation A/c Dr → Partner's Capital A/c","Drawings A/c Dr → Cash A/c"], amt:1200, c:"iod"},
    {t:"Loan by partner ₹50,000 for a full year, no deed.", ok:"Profit and Loss A/c Dr → Interest on Loan A/c", bad:["P&L Appropriation A/c Dr → Interest on Loan A/c","Partner's Loan A/c Dr → Profit and Loss A/c"], amt:3000, c:"deed"},
    {t:"Salary ₹4,000 a month to B (fixed capitals).", ok:"P&L Appropriation A/c Dr → B's Current A/c", bad:["P&L Appropriation A/c Dr → B's Capital A/c","Salary A/c Dr → Cash A/c"], amt:48000, c:"capital"},
    {t:"Commission 10% of net profit after charging it; profit before commission ₹1,10,000.", ok:"P&L Appropriation A/c Dr → Partner's Capital A/c", bad:["Partner's Capital A/c Dr → P&L Appropriation A/c","Commission A/c Dr → Cash A/c"], amt:10000, c:"approp"},
    {t:"Profit ₹90,000 shared 2:1. Amount credited to the first partner?", ok:"P&L Appropriation A/c Dr → Partners' Capital A/cs", bad:["Partners' Capital A/cs Dr → P&L Appropriation A/c","P&L A/c Dr → Partners' Capital A/cs"], amt:60000, c:"approp"}
  ],
  missing:[
    {q:"Drawings ₹4,000 at the END of every month; interest 12% p.a. Interest on drawings = ?", kind:"num", ans:2640, why:"48,000 × 12% × 5.5/12 = 2,640.", c:"iod"},
    {q:"Profit before commission ₹1,05,000; commission is 5% of the profit after charging such commission. Commission = ?", kind:"num", ans:5000, why:"1,05,000 × 5/105 = 5,000.", c:"approp"},
    {q:"Closing capital ₹1,80,000; profit credited ₹30,000; drawings ₹20,000; no other item. Opening capital = ?", kind:"num", ans:170000, why:"1,80,000 + 20,000 − 30,000 = 1,70,000.", c:"capital"},
    {q:"Capital ₹1,00,000 on 1 April; ₹50,000 more brought on 1 October; interest 10% p.a. Interest for the year = ?", kind:"num", ans:12500, why:"10,000 + 50,000 × 10% × 6/12 = 12,500.", c:"ioc"},
    {q:"A, B, C share 3:2:1; profit ₹60,000; C guaranteed ₹15,000 by A and B in 3:2. A's final share = ?", kind:"num", ans:27000, why:"C's share 10,000; deficiency 5,000; A bears 3,000: 30,000 − 3,000 = 27,000.", c:"guarantee"},
    {q:"Interest due A ₹9,000, B ₹6,000; profit only ₹10,000. A gets = ?", kind:"num", ans:6000, why:"10,000 × 9/15 = 6,000.", c:"ioc"}
  ],
  profit:{from:150000, ask:"profit left to share?", plus:"addition", minus:"deduction", c:"approp", start:"Start from the net profit of ₹1,50,000 (worksheet L1). Type the profit still left after each item.", base:"A and B share 3:2.",
    steps:[
      {t:"Add interest on drawings ₹5,400", v:5400},
      {t:"Interest on capital to A ₹40,000", v:-40000},
      {t:"Interest on capital to B ₹20,000", v:-20000},
      {t:"Salary to B ₹36,000", v:-36000}
    ], final:{q:"Divisible profit is shared 3:2. A's share = ?", ans:35640, why:"59,400 × 3/5 = 35,640.", hint:"3/5 of the divisible profit."}},
  escape:{story:"The firm's old ledger is locked in a strong room. Each door's code is a partnership calculation.",
    locks:[
      {room:"Door 1: The Drawing Room", q:"₹6,000 drawn at the beginning of every month; interest 10% p.a. Code = interest on drawings.", ans:3900, hint:"72,000 × 10% × 6.5/12.", c:"iod"},
      {room:"Door 2: The Deed Vault", q:"No deed. Partner's loan ₹80,000 given on 1 October 2025. Code = interest up to 31 March 2026.", ans:2400, hint:"80,000 × 6% × 6/12.", c:"deed"},
      {room:"Door 3: The Guarantee Gate", q:"X, Y, Z share 2:2:1; profit ₹1,50,000; Z guaranteed ₹40,000 by X alone. Code = X's final share.", ans:50000, hint:"Z's share 30,000; shortfall 10,000; X: 60,000 − 10,000.", c:"guarantee"},
      {room:"Door 4: The Commission Corner", q:"Profit before commission ₹2,20,000; manager-partner gets 10% of profit after charging such commission. Code = commission.", ans:20000, hint:"2,20,000 × 10/110.", c:"approp"}
    ]}
},
revision:{
  summary:[
    "Partnership: 2 to 50 persons, agreement, lawful business, profit sharing, mutual agency, unlimited liability.",
    "No deed: profit equally · no interest on capital or drawings · no salary/commission · 6% p.a. on partner's loan (a charge).",
    "Fixed capitals: Capital A/c + Current A/c. Fluctuating: only Capital A/c.",
    "Interest on capital = capital × rate × time; an appropriation, so no interest in a loss; insufficient profit → share in ratio of interest due.",
    "Interest on drawings: monthly 6.5 / 6 / 5.5; quarterly 7.5 / 6 / 4.5 months; no dates → 6 months; else product method.",
    "P&L Appropriation A/c: Dr interest on capital, salary, commission, reserve, share of profit; Cr net profit, interest on drawings.",
    "Guarantee: shortfall borne by guarantor(s) in agreed ratio (else their PSR).",
    "Past adjustments: one net entry through capital accounts, using an adjustment table."
  ],
  defs:[["Partnership","The relation between persons who have agreed to share the profits of a business carried on by all or any of them acting for all."],["Partnership deed","The written agreement among partners setting out the terms of the partnership."],["Fixed capital","A method where capital accounts stay unchanged and all adjustments go to current accounts."],["Interest on drawings","Interest charged on amounts withdrawn by partners for personal use, credited to the Appropriation A/c."],["Guarantee of profit","An assurance that a partner will receive at least a stated amount of profit, any shortfall being borne by the guarantors."]],
  flash:[
    {f:"Monthly drawings: beginning / middle / end", b:"6.5 / 6 / 5.5 months"},
    {f:"Quarterly drawings: beginning / middle / end", b:"7.5 / 6 / 4.5 months"},
    {f:"No deed: interest on loan", b:"6% p.a., charged to P&L A/c"},
    {f:"Commission after charging itself", b:"NP × r/(100 + r)"},
    {f:"Interest on capital in a loss", b:"Not allowed (unless the deed treats it as a charge)"},
    {f:"Insufficient profit", b:"Share profit in the ratio of appropriations due"},
    {f:"Fixed capitals: salary goes to", b:"Partner's Current A/c"},
    {f:"Opening capital", b:"Closing + drawings − profit − additional capital"}
  ],
  treat:[["Interest on capital","P&L Appropriation Dr → Partners' Capital/Current"],["Interest on drawings","Partners' Capital/Current Dr → P&L Appropriation"],["Salary/commission to partner","P&L Appropriation Dr → Partner's Capital/Current"],["Interest on partner's loan","P&L A/c Dr → Partner's Loan (or Interest) A/c"],["Share of profit","P&L Appropriation Dr → Partners' Capital/Current"],["Guarantee deficiency","Guarantors' Capital Dr → Guaranteed partner's Capital"],["Past adjustment","Partner with net debit Dr → Partner with net credit"]],
  mistakes:["Debiting interest on a partner's loan to the Appropriation A/c.","Allowing interest on capital when the firm has a loss.","Using 6.5 months for drawings at the END of each month (it is 5.5).","Crediting salary to the Capital A/c when capitals are fixed.","Applying 6% interest on capital when there is no deed (none is allowed).","Sharing an insufficient profit in the profit sharing ratio instead of the ratio of interest due.","Passing several entries for a past adjustment instead of one net entry."],
  fib:[
    {q:"In the absence of a deed, interest on a partner's loan is allowed at ______ % p.a.", a:["6","six"]},
    {q:"Drawings made at the beginning of each month carry interest for an average of ______ months.", a:["6.5","6 5","six and a half"]},
    {q:"Under the fixed capital method, interest on capital is credited to the partners' ______ accounts.", a:["current"]},
    {q:"Interest on drawings is credited to the ______ account.", a:["profit and loss appropriation","p l appropriation","appropriation"]},
    {q:"The maximum number of partners in a firm is ______.", a:["50","fifty"]}
  ],
  mcq:[
    {q:"In the absence of a deed, profits are shared…", opts:["Equally","In capital ratio","In ratio of time devoted","As decided by the court"], a:0, why:"Section 13(b): equally.", c:"deed"},
    {q:"Interest on drawings is…", opts:["Credited to P&L Appropriation A/c","Debited to P&L Appropriation A/c","Credited to P&L A/c","Debited to Cash A/c"], a:0, why:"It is a gain for the firm from partners.", c:"iod"},
    {q:"Drawings ₹3,000 at the end of every month, 10% p.a. Interest:", opts:["₹1,650","₹1,800","₹1,950","₹3,600"], a:0, why:"36,000 × 10% × 5.5/12 = 1,650.", c:"iod"},
    {q:"Under fixed capitals, the capital account changes when…", opts:["Additional capital is introduced","Salary is allowed","Profit is credited","Interest on drawings is charged"], a:0, why:"Only capital introduced or permanently withdrawn changes it.", c:"capital"},
    {q:"Interest on a partner's loan is…", opts:["A charge against profit","An appropriation of profit","Not allowed without a deed","Credited to P&L A/c"], a:0, why:"Payable even in a loss; debited to P&L A/c.", c:"deed"},
    {q:"Profit before commission ₹2,10,000; commission 5% of profit after charging such commission:", opts:["₹10,000","₹10,500","₹11,000","₹9,500"], a:0, why:"2,10,000 × 5/105 = 10,000.", c:"approp"},
    {q:"A is guaranteed ₹40,000. His share works out to ₹32,000. Deficiency borne by B and C 1:1. B bears:", opts:["₹4,000","₹8,000","₹16,000","Nil"], a:0, why:"8,000 × 1/2 = 4,000.", c:"guarantee"},
    {q:"Interest on capital with a net LOSS (deed silent):", opts:["Not allowed","Allowed fully","Allowed at 6%","Debited to partners"], a:0, why:"Appropriations need a profit.", c:"ioc"}
  ],
  ar:[
    {a:"Interest on a partner's loan is debited to the Profit and Loss Account.", r:"Interest on a partner's loan is a charge against profit.", ans:0, why:"Both true; R explains A.", c:"deed"},
    {a:"Under the fixed capital method, a partner's capital account can show a debit balance.", r:"Drawings and losses are debited to the current account under this method.", ans:3, why:"A is false: the CURRENT account may show a debit balance, the capital account stays fixed. R is true.", c:"capital"},
    {a:"Interest on capital is not allowed when the firm incurs a loss.", r:"Interest on capital is an appropriation of profit.", ans:0, why:"Both true; R explains A.", c:"ioc"}
  ],
  numericals:["L1","L2","L3","L4","L5","s1"]
},
test:{mins:30, items:[
  {type:"mcq", m:1, c:"deed", q:"In the absence of a deed, a partner who works more is entitled to…", opts:["No salary","Salary at market rate","Extra 10% of profit","Interest on capital"], a:0, why:"No salary or commission without agreement."},
  {type:"mcq", m:1, c:"iod", q:"Drawings made at the middle of each quarter: average period is…", opts:["6 months","7.5 months","4.5 months","6.5 months"], a:0, why:"Middle of each period → 6 months."},
  {type:"mcq", m:1, c:"capital", q:"Under the fixed capital method, drawings are debited to…", opts:["Partner's Current A/c","Partner's Capital A/c","P&L Appropriation A/c","Cash A/c only"], a:0, why:"Current A/c records all regular adjustments."},
  {type:"mcq", m:1, c:"approp", q:"Which is NOT shown in the P&L Appropriation A/c?", opts:["Interest on partner's loan","Interest on capital","Partner's salary","Interest on drawings"], a:0, why:"Interest on loan is a charge, shown in the P&L A/c."},
  {type:"mcq", m:1, c:"ioc", q:"A's capital ₹2,00,000 on 1 April; withdrew ₹50,000 of capital on 1 January; interest 12% p.a. Interest for the year to 31 March:", opts:["₹22,500","₹24,000","₹18,000","₹21,000"], a:0, why:"2,00,000 × 12% × 9/12 = 18,000 + 1,50,000 × 12% × 3/12 = 4,500 → 22,500."},
  {type:"mcq", m:1, c:"guarantee", q:"P, Q, R share 3:2:1. R guaranteed ₹20,000 by P and Q. Profit ₹96,000. Deficiency is…", opts:["₹4,000","₹16,000","Nil","₹20,000"], a:0, why:"R's share 16,000; shortfall 4,000."},
  {type:"ar", m:1, c:"iod", a:"When dates of drawings are not given, interest is charged for 6 months on total drawings.", r:"It is assumed that drawings were made evenly during the year.", ans:0, why:"Both true; R explains A."},
  {type:"ar", m:1, c:"deed", a:"Partners share profits in their capital ratio when there is no deed.", r:"The Partnership Act requires profits to be shared equally in the absence of an agreement.", ans:3, why:"A false, R true."},
  {type:"nums", m:3, c:"iod", q:"B withdrew ₹2,000 at the beginning of every month for 12 months; interest on drawings 9% p.a.", parts:[
    {p:"Total drawings (₹)", ans:24000, why:"2,000 × 12."},{p:"Interest on drawings (₹)", ans:1170, why:"24,000 × 9% × 6.5/12 = 1,170."}]},
  {type:"nums", m:3, c:"ioc", q:"X and Y have capitals ₹1,50,000 and ₹1,00,000; interest on capital 8% p.a.; profit ₹15,000 only.", parts:[
    {p:"X receives (₹)", ans:9000, why:"Interest due 12,000 and 8,000; profit shared 12:8 → 15,000 × 12/20 = 9,000."},{p:"Y receives (₹)", ans:6000, why:"15,000 × 8/20 = 6,000."}]},
  {type:"nums", m:4, c:"approp", q:"A and B share 3:2. Net profit ₹1,20,000; interest on capital A ₹12,000, B ₹8,000; B's salary ₹20,000; interest on drawings A ₹1,500, B ₹500.", parts:[
    {p:"Divisible profit (₹)", ans:82000, why:"1,20,000 + 2,000 − 20,000 − 20,000 = 82,000."},{p:"A's share of divisible profit (₹)", ans:49200, why:"82,000 × 3/5 = 49,200."}]},
  {type:"self", m:3, c:"deed", q:"State any three provisions of the Indian Partnership Act, 1932 that apply in the absence of a partnership deed.",
   model:"(i) Profits and losses are shared equally. (ii) No interest on capital is allowed. (iii) No interest is charged on drawings. Also correct: no salary or commission to any partner; interest on a partner's loan at 6% p.a.",
   crit:["One correct provision","A second correct provision","A third correct provision"]},
  {type:"journal", m:4, c:"past", q:"P, Q and R share profits equally. Capitals: P ₹1,20,000, Q ₹60,000, R ₹60,000. Last year's profit was distributed without interest on capital at 10% p.a. Pass the adjusting entry on 1 April 2026.",
   entries:[
     {label:"Past adjustment", date:"2026 Apr 1", lines:[{a:"capQ", dr:2000, why:"Interest: P 12,000, Q 6,000, R 6,000 = 24,000; each bears 8,000. Q: 6,000 − 8,000 = −2,000."},{a:"capR", dr:2000, why:"R: 6,000 − 8,000 = −2,000."},{a:"capP", cr:4000, why:"P: 12,000 − 8,000 = +4,000."}], narr:"(Being omitted interest on capital adjusted)"}
   ]}
]}
});
