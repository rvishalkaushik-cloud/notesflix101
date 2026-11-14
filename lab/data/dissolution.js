/* Notesflix 101 · Accountancy Lab · Class XII · Dissolution of a Partnership Firm
   Basis: CBSE 2026-27 Accountancy (055), Unit 1; NCERT Class XII Accountancy Part I; Indian Partnership Act, 1932 (Sections 39-48).
   All questions are ORIGINAL practice questions ("orig") or written in CBSE board style ("board") for Notesflix 101.
   Check: node lab/tools/validate.js dissolution */
(function(){
function R(x){ return ["realisation " + x, "realisation a c " + x, "realisation " + x + " a c"]; }
NFLab.register({
id:"dissolution", cls:"XII", subject:"Accountancy", unit:"Accounting for Partnership Firms", num:"6", icon:"🏁",
title:"Dissolution of a Partnership Firm",
tagline:"Dissolution of partnership vs firm, settlement of accounts, Realisation Account, partners' capitals and the final Cash Account.",
notesLink:"../learn/xii-acc.html",
home:{q:"What is dissolution of a firm?", ticks:["The business closes for all partners.","Assets are sold and outsiders are paid first.","What is left goes to partners after profit or loss on realisation."]},
formats:["journal","ledger","capital"],
concepts:{
  modes:{n:"Dissolution: meaning and modes"}, order:{n:"Settlement of accounts (Section 48)"}, transfer:{n:"Transfer to Realisation A/c", go:"lab"},
  realise:{n:"Realising assets and paying liabilities", go:"lab"}, result:{n:"Profit or loss on realisation"}, settle:{n:"Final settlement with partners", go:"lab"}
},
acc:{
  realis:{n:"Realisation A/c", al:["realisation","realization","realisation account"]},
  debtors:{n:"Debtors A/c", al:["debtors","sundry debtors","trade receivables"]}, stock:{n:"Stock A/c", al:["stock","inventory"]},
  mach:{n:"Machinery A/c", al:["machinery","plant and machinery","machine"]}, creditors:{n:"Creditors A/c", al:["creditors","sundry creditors","trade payables"]},
  gr:{n:"General Reserve A/c", al:["general reserve","reserve"]}, loanB:{n:"B's Loan A/c", al:["b loan","loan b","loan from b","loan of b"]},
  furn:{n:"Furniture A/c", al:["furniture"]}, inv:{n:"Investments A/c", al:["investments","investment"]}
},
intro:{
  hook:"After ten years, A and B decide to close their firm. Machines will be sold, customers will pay what they can, suppliers must be paid, and whatever is left will be handed back to the partners. Dissolution accounts follow every rupee from the Balance Sheet to the partners' hands.",
  points:[
    "<b>Dissolution of partnership</b>: only the relation among partners changes (admission, retirement, death); the firm continues. <b>Dissolution of the firm</b>: the business ends for all partners.",
    "A firm is dissolved by agreement, compulsorily (all partners or all but one insolvent; business becomes illegal), on certain contingencies (expiry of term, completion of venture, death or insolvency of a partner), by notice (partnership at will), or by court order.",
    "On dissolution, assets are realised and liabilities paid through a <b>Realisation Account</b>. Its profit or loss goes to partners in the profit sharing ratio.",
    "<b>Section 48</b> fixes the order of payment: outside creditors first, then partners' loans, then partners' capitals, and any surplus in the profit sharing ratio."
  ],
  weight:"Board weightage: a dissolution question (journal entries or Realisation A/c with Capitals and Cash) is a regular 4 to 6 mark question."
},
objectives:[
  "Distinguish dissolution of partnership from dissolution of the firm, and state the modes of dissolution.",
  "Apply the order of settlement under Section 48.",
  "Transfer assets and outside liabilities to the Realisation Account.",
  "Record realisation of assets, payment of liabilities and realisation expenses, including assets or liabilities taken over by partners.",
  "Calculate and transfer the profit or loss on realisation.",
  "Prepare Partners' Capital Accounts and the Cash/Bank Account to close the books."
],
prereq:[
  {t:"Balance Sheet sides", d:"Assets on the right, liabilities and capital on the left.", check:{q:"Creditors appear on the…", opts:["Liabilities side","Assets side","Both sides","Neither"], a:0, why:"They are amounts the firm owes."}},
  {t:"Book value vs realised value", d:"Book value is the figure in the books; realised value is the cash actually received.", check:{q:"Debtors of ₹30,000 realise ₹28,000. The ₹2,000 is a…", opts:["Loss","Gain","Liability","Capital"], a:0, why:"Less cash than book value."}},
  {t:"Profit sharing ratio", d:"Losses are shared in the same ratio as profits.", check:{q:"Loss ₹18,000; ratio 3:2. A's share:", opts:["₹10,800","₹7,200","₹9,000","₹18,000"], a:0, why:"18,000 × 3/5."}}
],
kid:[
  {id:"k1", c:"modes", title:"Closing the shop for good", art:{s:[["🏪","Shop"],["🔒","Closed"],["🧑","A"],["👦","B"]], cap:"Dissolution of the firm: the business ends for everyone."},
   story:"<p>A and B decide to close their shop forever. This is <b>dissolution of the firm</b>: the business stops for all partners.</p><p>It is different from a partner joining or leaving while the shop continues: that is only <b>dissolution of the partnership</b> (the agreement changes).</p>",
   qa:[["Does business continue?","No: the firm is wound up."],["How can it happen?","By agreement, compulsorily, on contingencies, by notice or by court."],["What first?","Sell assets, pay outsiders."],["Then?","Settle with partners."]],
   check:{q:"Which leads to dissolution of the FIRM?", opts:["The business becomes illegal","A new partner joins","A partner retires and others continue","Change in profit sharing ratio"], a:0, why:"Compulsory dissolution."}},
  {id:"k2", c:"transfer", title:"One big basket called Realisation", art:{s:[["📦","Assets in"],["🧺","Realisation A/c"],["📄","Liabilities in"]], cap:"Assets go to the debit side, outside liabilities to the credit side."},
   story:"<p>All the shop's things (stock, machines, debtors) are put into one basket called the <b>Realisation Account</b> at their book values, on the <b>debit</b> side.</p><p>All amounts owed to outsiders (creditors, bills payable, bank loan) go into the same account on the <b>credit</b> side.</p><p>Not included: cash and bank (they are the money itself), partners' loans and capitals, reserves and fictitious assets.</p>",
   qa:[["Which assets?","All except cash/bank and fictitious assets."],["Which liabilities?","Outside liabilities only."],["Why?","To see the profit or loss on closing down."],["Partners' loans?","Paid separately, not via Realisation."]],
   check:{q:"Which is NOT transferred to the Realisation A/c?", opts:["Cash in hand","Stock","Creditors","Debtors"], a:0, why:"Cash is used for payments, not realised."}},
  {id:"k3", c:"realise", title:"Selling things and paying people", art:{s:[["🛒","Stock sold"],["💵","Cash in"],["🏦","Creditors paid"],["💸","Cash out"]], cap:"Cash received is credited to Realisation; cash paid is debited."},
   story:"<p>The machine is sold for ₹60,000: <b>Cash Dr, Realisation Cr</b>. Creditors are paid ₹38,000: <b>Realisation Dr, Cash Cr</b>.</p><p>A takes the stock home at ₹45,000: no cash, so <b>A's Capital Dr, Realisation Cr</b>. Closing costs of ₹3,000: <b>Realisation Dr, Cash Cr</b>.</p>",
   qa:[["Asset sold?","Cash Dr / To Realisation."],["Liability paid?","Realisation Dr / To Cash."],["Asset taken by partner?","Partner's Capital Dr / To Realisation."],["Expenses?","Realisation Dr / To Cash (or partner's capital if he pays)."]],
   check:{q:"B takes over a computer at ₹8,000. Entry:", opts:["B's Capital Dr / To Realisation","Realisation Dr / To B's Capital","Cash Dr / To Realisation","Computer Dr / To B's Capital"], a:0, why:"B receives an asset instead of cash."}},
  {id:"k4", c:"result", title:"Did we gain or lose by closing?", art:{s:[["⚖️","Dr ₹1,91,000"],["⚖️","Cr ₹1,73,000"],["📉","Loss ₹18,000"],["3️⃣2️⃣","A 10,800 · B 7,200"]], cap:"Balance of Realisation A/c = profit or loss, shared in PSR."},
   story:"<p>Add the debit side (book value of assets + payments) and the credit side (liabilities + money received). If debit is bigger, there is a <b>loss on realisation</b>.</p><p>Here loss = ₹18,000. A and B share it 3:2: <b>A's Capital Dr 10,800, B's Capital Dr 7,200</b>.</p>",
   qa:[["Profit?","Credit side bigger."],["Loss?","Debit side bigger."],["Ratio?","Profit sharing ratio."],["Entry for loss?","Partners' Capital Dr / To Realisation."]],
   check:{q:"Realisation A/c: debit ₹80,000, credit ₹86,000. Result:", opts:["Profit ₹6,000","Loss ₹6,000","Nil","Profit ₹86,000"], a:0, why:"Credit exceeds debit."}},
  {id:"k5", c:"order", title:"Who gets paid first?", art:{s:[["1️⃣","Outsiders"],["2️⃣","Partners' loans"],["3️⃣","Partners' capitals"],["4️⃣","Surplus in PSR"]], cap:"Section 48: the order of payment."},
   story:"<p>Money from selling the assets is used in a fixed order: first <b>outside creditors</b>, then <b>partners' loans</b> (like B's loan to the firm), then each partner's <b>capital</b>, and any surplus in the profit sharing ratio.</p><p>Losses are met first from profits, then from capital, and if needed by partners from their own pockets.</p>",
   qa:[["First?","Outside creditors."],["Partner's loan vs capital?","Loan comes before capital."],["Losses?","From profits, then capital, then personally."],["Last?","Partners' capitals and surplus."]],
   check:{q:"B's loan to the firm is paid…", opts:["After outside creditors, before capitals","Before outside creditors","After capitals","Never"], a:0, why:"Section 48(b)."}}
],
kidActs:[
  {id:"ka1", type:"sort", title:"Into the Realisation A/c or not?", c:"transfer",
   bins:["Transferred to Realisation A/c","Not transferred"],
   items:[{t:"Stock", b:0, why:"An asset to be sold."},{t:"Creditors", b:0, why:"An outside liability."},{t:"Cash at bank", b:1, why:"It is the money itself."},{t:"Partner's loan", b:1, why:"Paid separately after outsiders."},{t:"General Reserve", b:1, why:"Goes to partners' capitals."},{t:"Machinery", b:0, why:"An asset to be sold."}]},
  {id:"ka2", type:"minute", title:"One-minute challenge: realisation entries", c:"realise", secs:60,
   items:[
     {q:"Asset sold for cash:", opts:["Cash Dr / To Realisation","Realisation Dr / To Cash"], a:0},
     {q:"Creditors paid in cash:", opts:["Realisation Dr / To Cash","Cash Dr / To Realisation"], a:0},
     {q:"Partner takes an asset:", opts:["Partner's Capital Dr / To Realisation","Realisation Dr / To Partner's Capital"], a:0},
     {q:"Partner pays realisation expenses:", opts:["Realisation Dr / To Partner's Capital","Partner's Capital Dr / To Realisation"], a:0},
     {q:"Loss on realisation:", opts:["Partners' Capital Dr / To Realisation","Realisation Dr / To Partners' Capital"], a:0},
     {q:"Partner's loan repaid:", opts:["Partner's Loan Dr / To Cash","Realisation Dr / To Cash"], a:0}
   ]}
],
exam:[
  {id:"e1", c:"modes", title:"Dissolution of partnership vs dissolution of firm",
   html:"<table class='tt'><thead><tr><th>Basis</th><th>Dissolution of partnership</th><th>Dissolution of firm</th></tr></thead><tbody><tr><td>Business</td><td>Continues</td><td>Ends</td></tr><tr><td>Books</td><td>Not closed</td><td>Closed</td></tr><tr><td>Assets and liabilities</td><td>Revalued</td><td>Realised and paid</td></tr><tr><td>Court</td><td>No intervention</td><td>Possible (court order)</td></tr></tbody></table><p>Dissolution of the firm always involves dissolution of partnership, but not the other way round.</p>"},
  {id:"e2", c:"modes", title:"Modes of dissolution of a firm",
   html:"<ol><li><b>By agreement</b> (Section 40).</li><li><b>Compulsory</b> (Section 41): all partners or all but one become insolvent; the business becomes illegal.</li><li><b>On contingencies</b> (Section 42): expiry of the fixed term; completion of the venture; death of a partner; insolvency of a partner.</li><li><b>By notice</b> (Section 43): partnership at will.</li><li><b>By court</b> (Section 44): partner of unsound mind, permanent incapacity, misconduct, persistent breach, transfer of interest, perpetual losses, just and equitable grounds.</li></ol>"},
  {id:"e3", c:"order", title:"Settlement of accounts (Section 48)",
   html:"<p><b>Losses</b> (including deficiency of capital) are paid first out of profits, then out of capital, and lastly by partners individually in their profit sharing ratio.</p><p><b>Assets</b> (including sums contributed to make up deficiencies) are applied in this order: (a) debts to third parties; (b) advances (loans) by partners; (c) partners' capitals; (d) residue to partners in their profit sharing ratio.</p>"},
  {id:"e4", c:"transfer", title:"Realisation Account: what is transferred",
   html:"<table class='tt'><tbody><tr><td>All assets except cash, bank and fictitious assets (at book value)</td><td>Realisation A/c Dr / To Asset A/cs</td></tr><tr><td>All outside liabilities (at book value)</td><td>Liability A/cs Dr / To Realisation A/c</td></tr></tbody></table><p>Provisions against assets (provision for doubtful debts, accumulated depreciation) are transferred to the credit side, or assets are transferred at net value. Partners' loans, capitals, reserves and fictitious assets are <b>not</b> transferred.</p>"},
  {id:"e5", c:"realise", title:"Realisation entries",
   html:"<table class='tt'><thead><tr><th>Transaction</th><th>Entry</th></tr></thead><tbody><tr><td>Asset sold</td><td>Cash/Bank Dr / To Realisation</td></tr><tr><td>Asset taken by a partner</td><td>Partner's Capital Dr / To Realisation</td></tr><tr><td>Unrecorded asset realised</td><td>Cash Dr / To Realisation</td></tr><tr><td>Liability paid</td><td>Realisation Dr / To Cash/Bank</td></tr><tr><td>Liability taken over by a partner</td><td>Realisation Dr / To Partner's Capital</td></tr><tr><td>Creditor accepts an asset in full settlement</td><td>No entry</td></tr><tr><td>Realisation expenses paid by firm / by partner</td><td>Realisation Dr / To Cash or To Partner's Capital</td></tr><tr><td>Partner's loan repaid</td><td>Partner's Loan Dr / To Cash</td></tr></tbody></table>"},
  {id:"e6", c:"result", title:"Profit or loss, reserves and final settlement",
   html:"<p>Profit: Realisation Dr / To Partners' Capitals (PSR). Loss: Partners' Capitals Dr / To Realisation.</p><p>Reserves and P&L credit: Reserve Dr / To Partners' Capitals. Accumulated losses and fictitious assets: Partners' Capitals Dr / To P&L (or the asset).</p><p>Final settlement: Partner's Capital Dr / To Cash (credit balance paid) or Cash Dr / To Partner's Capital (debit balance brought in). The Cash A/c must close with a nil balance.</p>"},
  {id:"e7", c:"settle", title:"Board answer presentation",
   html:"<ol><li>Realisation A/c with Dr./Cr.; show 'To Cash (creditors)' and 'By Cash (debtors)' clearly.</li><li>Partners' Capital A/cs (columnar).</li><li>Cash/Bank A/c, which must balance with nothing left.</li><li>Check: total realisation entries = payments + final settlement.</li></ol>"}
],
visual:{kind:"realise", title:"Realisation playground", sub:"Change what each asset fetches, the discount from creditors and the expenses. Watch the realisation profit or loss.",
  assets:[["Debtors",30000,90],["Stock",50000,90],["Machinery",70000,85]], cred:40000, disc:5, exp:3000, names:["A","B"], ratio:[3,2],
  flowTitle:"Steps on dissolution", flow:["Transfer assets to Realisation (Dr)","Transfer outside liabilities to Realisation (Cr)","Record assets sold or taken over","Record liabilities paid and expenses","Find profit or loss on realisation","Pay partners' loans, distribute reserves","Settle capitals; cash closes at nil"]},
formulas:[
  {n:"Realisation result", f:"Credit side (liabilities + amounts realised) − Debit side (assets + payments + expenses)", code:"Cr − Dr: + profit, − loss", c:"result"},
  {n:"Order of payment", f:"Outsiders → partners' loans → partners' capitals → surplus in PSR", code:"O-L-C-S", c:"order"},
  {n:"Asset taken by partner", f:"Partner's Capital Dr / To Realisation", code:"He takes, he is debited", c:"realise"},
  {n:"Liability taken by partner", f:"Realisation Dr / To Partner's Capital", code:"He pays, he is credited", c:"realise"},
  {n:"Creditor takes an asset fully", f:"No entry (both already in Realisation)", code:"Swap = silence", c:"realise"},
  {n:"Final payment", f:"Capital + reserve share ± realisation result − assets taken", code:"What is left is paid", c:"settle"}
],
illus:[
  {id:"i1", tag:"orig", c:"order", title:"Applying Section 48",
   given:"On dissolution, assets realise ₹1,03,000 in cash (including the opening cash of ₹15,000). Outside liabilities paid ₹38,000 and realisation expenses ₹3,000. B's loan to the firm is ₹10,000.",
   required:"Cash available for partners' capitals.",
   formula:"Cash → outsiders and expenses first → partners' loans → capitals.",
   steps:["Cash available = <b>₹1,03,000</b>","Less outsiders and expenses 38,000 + 3,000 = 41,000 → ₹62,000","Less B's loan ₹10,000 → <b>₹52,000</b> for partners' capitals"],
   answer:"₹52,000 is available for partners' capitals.", why:"Section 48 puts outside debts before partners' loans, and loans before capitals."},
  {id:"i2", tag:"board", c:"result", title:"Realisation Account",
   given:"A and B share 3:2. Balance Sheet on 31 March 2026: Creditors ₹40,000; B's Loan ₹10,000; General Reserve ₹15,000; Capitals A ₹60,000, B ₹40,000 | Cash ₹15,000; Debtors ₹30,000; Stock ₹50,000; Machinery ₹70,000. The firm is dissolved: debtors realise ₹28,000; A takes the stock at ₹45,000; machinery sold for ₹60,000; creditors paid ₹38,000; expenses ₹3,000; B's loan repaid.",
   required:"Realisation Account.",
   formula:"Dr: assets at book value + payments. Cr: liabilities + amounts realised. Balance = profit/loss in 3:2.",
   steps:["Debit side = 30,000 + 50,000 + 70,000 + 38,000 + 3,000 = <b>₹1,91,000</b>","Credit side before result = 40,000 + 28,000 + 45,000 + 60,000 = <b>₹1,73,000</b>","Loss = <b>₹18,000</b> → A 10,800, B 7,200"],
   format:{type:"tacc", name:"Realisation Account", heads:["Particulars","₹","Particulars","₹"], date:"2026 Mar 31",
     left:[{a:"debtors", amt:30000, p:"To Debtors A/c"},{a:"stock", amt:50000, p:"To Stock A/c"},{a:"mach", amt:70000, p:"To Machinery A/c"},{a:"cash", amt:38000, p:"To Cash A/c (creditors paid)"},{a:"cash", amt:3000, p:"To Cash A/c (expenses)"}],
     right:[{a:"creditors", amt:40000, p:"By Creditors A/c"},{a:"cash", amt:28000, p:"By Cash A/c (debtors)"},{a:"capA", amt:45000, p:"By A's Capital A/c (stock)"},{a:"cash", amt:60000, p:"By Cash A/c (machinery)"},{a:"capA", amt:10800, p:"By A's Capital A/c (loss)"},{a:"capB", amt:7200, p:"By B's Capital A/c (loss)"}], total:191000},
   answer:"Loss on realisation ₹18,000: A ₹10,800, B ₹7,200.", why:"Assets fetched less than book value and creditors gave only a small discount, so the firm lost on closing down."},
  {id:"i3", tag:"board", c:"realise", title:"Creditor takes an asset; others paid at a discount",
   given:"Creditors total ₹30,000. One creditor of ₹12,000 accepts furniture (book value ₹10,000) in full settlement. The remaining creditors are paid in cash at a discount of 5%.",
   required:"Entry for payment to creditors.",
   formula:"Creditor accepting an asset in full settlement → no entry. Others: 18,000 × 95%.",
   steps:["Creditor taking furniture: <b>no entry</b> (both already in Realisation A/c)","Remaining creditors = 30,000 − 12,000 = ₹18,000","Cash paid = 18,000 × 95% = <b>₹17,100</b>"],
   format:{type:"journal", entries:[{date:"2026 Mar 31", lines:[{a:"realis", dr:17100},{a:"cash", cr:17100}], narr:"(Being creditors paid at 5% discount)"}]},
   answer:"Realisation A/c Dr ₹17,100 / To Cash A/c ₹17,100.", why:"Only cash payments need entries; the furniture-for-debt swap affects nothing new."}
],
solver:[
  {id:"s1", tag:"board", c:"result", title:"Profit or loss on realisation", mins:7,
   q:"Assets transferred: Debtors ₹30,000, Stock ₹50,000, Machinery ₹70,000. Creditors ₹40,000. Debtors realise ₹28,000; A takes stock at ₹45,000; machinery sold ₹60,000; creditors paid ₹38,000; expenses ₹3,000. Ratio A:B 3:2.",
   steps:[
     {label:"Debit side", prompt:"Total debit side (₹)", kind:"num", ans:191000, hint:"Assets 1,50,000 + payments 41,000.", formula:"Assets + creditors paid + expenses", traps:[{v:150000, why:"You left out the payments to creditors and expenses."}], why:"1,91,000.", avoid:""},
     {label:"Credit side", prompt:"Total credit side before result (₹)", kind:"num", ans:173000, hint:"40,000 + 28,000 + 45,000 + 60,000.", formula:"Liabilities + amounts realised", traps:[{v:128000, why:"You left out the stock taken by A (45,000): an asset taken by a partner is credited."}], why:"1,73,000.", avoid:""},
     {label:"Result", prompt:"Loss on realisation (₹)", kind:"num", ans:18000, hint:"Dr − Cr.", formula:"Debit − Credit", why:"18,000 loss.", avoid:""},
     {label:"A's share", prompt:"A's share of the loss (₹)", kind:"num", ans:10800, hint:"× 3/5.", formula:"Loss × A's share", why:"10,800.", avoid:""}
   ]},
  {id:"s2", tag:"orig", c:"settle", title:"Final payment to a partner", mins:5,
   q:"Continuing s1: A's capital ₹60,000; his share of General Reserve ₹9,000; he took stock worth ₹45,000; his share of realisation loss ₹10,800. How much cash does A receive?",
   steps:[
     {label:"Credits", prompt:"Capital + reserve share (₹)", kind:"num", ans:69000, hint:"60,000 + 9,000.", formula:"Credits", why:"69,000.", avoid:""},
     {label:"Debits", prompt:"Stock taken + loss (₹)", kind:"num", ans:55800, hint:"45,000 + 10,800.", formula:"Debits", why:"55,800.", avoid:""},
     {label:"Cash to A", prompt:"Final cash paid to A (₹)", kind:"num", ans:13200, hint:"69,000 − 55,800.", formula:"Credits − Debits", traps:[{v:58200, why:"You did not deduct the stock A took over (45,000)."}], why:"13,200.", avoid:"Assets taken by a partner reduce his cash payment."}
   ]},
  {id:"s3", tag:"board", c:"realise", title:"Creditors partly settled with an asset", mins:5,
   q:"Creditors ₹30,000. A creditor of ₹12,000 accepts furniture in full settlement. The remaining creditors are paid at a 5% discount.",
   steps:[
     {label:"Remaining creditors", prompt:"Creditors still to be paid (₹)", kind:"num", ans:18000, hint:"30,000 − 12,000.", formula:"Total − settled by asset", why:"18,000.", avoid:""},
     {label:"Cash paid", prompt:"Cash paid to them (₹)", kind:"num", ans:17100, hint:"18,000 × 95%.", formula:"× (1 − discount)", traps:[{v:28500, why:"You applied the discount to all creditors, including the one paid with furniture."}], why:"17,100.", avoid:""}
   ]},
  {id:"s4", tag:"orig", c:"order", title:"Cash available for capitals", mins:5,
   q:"Opening cash ₹15,000. Debtors realise ₹28,000 and machinery ₹60,000. Creditors paid ₹38,000; expenses ₹3,000; B's loan ₹10,000 repaid.",
   steps:[
     {label:"Total cash", prompt:"Total cash available (₹)", kind:"num", ans:103000, hint:"15,000 + 28,000 + 60,000.", formula:"Opening + receipts", why:"1,03,000.", avoid:""},
     {label:"Outsiders", prompt:"Paid to outsiders and expenses (₹)", kind:"num", ans:41000, hint:"38,000 + 3,000.", formula:"Payments", why:"41,000.", avoid:""},
     {label:"For capitals", prompt:"Cash left for partners' capitals (₹)", kind:"num", ans:52000, hint:"1,03,000 − 41,000 − 10,000.", formula:"Total − outsiders − partners' loans", traps:[{v:62000, why:"Partner's loan must be paid before capitals."}], why:"52,000.", avoid:"Section 48 order."}
   ]}
],
lab:[
  {id:"L0", tag:"orig", level:"Easy", c:"transfer", title:"Transfer of assets and liabilities",
   q:"A and B dissolve their firm on 31 March 2026. Assets (other than cash): Debtors ₹30,000, Stock ₹50,000, Machinery ₹70,000. Outside liability: Creditors ₹40,000. Pass the transfer entries.",
   format:{type:"journal", entries:[
     {label:"Assets transferred", date:"2026 Mar 31", lines:[{a:"realis", dr:150000},{a:"debtors", cr:30000},{a:"stock", cr:50000},{a:"mach", cr:70000}], narr:"(Being assets transferred to Realisation A/c)"},
     {label:"Liabilities transferred", date:"2026 Mar 31", lines:[{a:"creditors", dr:40000},{a:"realis", cr:40000}], narr:"(Being creditors transferred to Realisation A/c)"}
   ]}},
  {id:"L1", tag:"board", level:"Medium", c:"realise", title:"Dissolution: realisation and settlement entries",
   q:"A and B share 3:2. Balance Sheet on 31 March 2026: Creditors ₹40,000; B's Loan ₹10,000; General Reserve ₹15,000; Capitals A ₹60,000, B ₹40,000 | Cash ₹15,000; Debtors ₹30,000; Stock ₹50,000; Machinery ₹70,000. The firm is dissolved (transfer entries already passed): debtors realised ₹28,000; A took the stock at ₹45,000; machinery sold for ₹60,000; creditors paid ₹38,000; realisation expenses ₹3,000; B's loan repaid. Pass the remaining entries.",
   format:{type:"journal", entries:[
     {label:"Debtors realised", date:"2026 Mar 31", lines:[{a:"cash", dr:28000},{a:"realis", cr:28000}], narr:"(Being debtors realised)"},
     {label:"Stock taken by A", date:"2026 Mar 31", lines:[{a:"capA", dr:45000, why:"A receives an asset instead of cash."},{a:"realis", cr:45000}], narr:"(Being stock taken over by A)"},
     {label:"Machinery sold", date:"2026 Mar 31", lines:[{a:"cash", dr:60000},{a:"realis", cr:60000}], narr:"(Being machinery sold)"},
     {label:"Creditors paid", date:"2026 Mar 31", lines:[{a:"realis", dr:38000},{a:"cash", cr:38000}], narr:"(Being creditors paid in full settlement)"},
     {label:"Realisation expenses", date:"2026 Mar 31", lines:[{a:"realis", dr:3000},{a:"cash", cr:3000}], narr:"(Being realisation expenses paid)"},
     {label:"B's loan repaid", date:"2026 Mar 31", lines:[{a:"loanB", dr:10000, why:"Partners' loans are paid directly, not through Realisation."},{a:"cash", cr:10000}], narr:"(Being B's loan repaid)"},
     {label:"Loss on realisation", date:"2026 Mar 31", lines:[{a:"capA", dr:10800, why:"Loss 18,000 × 3/5."},{a:"capB", dr:7200},{a:"realis", cr:18000}], narr:"(Being loss on realisation transferred in 3:2)"},
     {label:"General Reserve", date:"2026 Mar 31", lines:[{a:"gr", dr:15000},{a:"capA", cr:9000},{a:"capB", cr:6000}], narr:"(Being general reserve distributed)"},
     {label:"Final payment to partners", date:"2026 Mar 31", lines:[{a:"capA", dr:13200, why:"60,000 + 9,000 − 45,000 − 10,800."},{a:"capB", dr:38800, why:"40,000 + 6,000 − 7,200."},{a:"cash", cr:52000}], narr:"(Being final payment made to partners)"}
   ]}},
  {id:"L2", tag:"board", level:"Medium", c:"result", title:"Realisation Account", ref:"L1",
   q:"Using worksheet L1, prepare the Realisation Account.",
   format:{type:"tacc", name:"Realisation Account", heads:["Particulars","₹","Particulars","₹"], date:"2026 Mar 31",
    left:[{a:"debtors", amt:30000, p:"To Debtors A/c"},{a:"stock", amt:50000, p:"To Stock A/c"},{a:"mach", amt:70000, p:"To Machinery A/c"},{a:"cash", amt:38000, p:"To Cash A/c (creditors paid)", why:"Payment of a liability is debited."},{a:"cash", amt:3000, p:"To Cash A/c (expenses)"}],
    right:[{a:"creditors", amt:40000, p:"By Creditors A/c"},{a:"cash", amt:28000, p:"By Cash A/c (debtors)"},{a:"capA", amt:45000, p:"By A's Capital A/c (stock)", why:"An asset taken by a partner is credited."},{a:"cash", amt:60000, p:"By Cash A/c (machinery)"},{a:"capA", amt:10800, p:"By A's Capital A/c (loss)", why:"Loss 18,000 × 3/5 balances the account."},{a:"capB", amt:7200, p:"By B's Capital A/c (loss)"}], total:191000}},
  {id:"L3", tag:"board", level:"Hard", c:"settle", title:"Partners' Capital Accounts", ref:"L1",
   q:"Using worksheet L1, complete the Partners' Capital Accounts. Leave a cell blank where the partner has no amount.",
   format:{type:"grid", name:"Partners' Capital Accounts", head:["Dr. Particulars","A (₹)","B (₹)","Cr. Particulars","A (₹)","B (₹)"],
    rows:[
      ["To Realisation A/c (stock)",{a:45000},{a:null},"By Balance b/d",{a:60000},{a:40000}],
      ["To Realisation A/c (loss)",{a:10800},{a:7200},"By General Reserve A/c",{a:9000},{a:6000}],
      ["To Cash A/c",{a:13200},{a:38800},"",null,null],
      ["Total",{a:69000},{a:46000},"Total",{a:69000},{a:46000}]]}},
  {id:"L4", tag:"board", level:"Hard", c:"settle", title:"Cash Account", ref:"L1",
   q:"Using worksheet L1, prepare the Cash Account. It must close with no balance.",
   format:{type:"tacc", name:"Cash Account", heads:["Particulars","₹","Particulars","₹"], date:"2026 Mar 31",
    left:[{a:"bal", amt:15000, p:"To Balance b/d"},{a:"realis", amt:28000, p:"To Realisation A/c (debtors)", al:R("debtors")},{a:"realis", amt:60000, p:"To Realisation A/c (machinery)", al:R("machinery")}],
    right:[{a:"realis", amt:38000, p:"By Realisation A/c (creditors)", al:R("creditors")},{a:"realis", amt:3000, p:"By Realisation A/c (expenses)", al:R("expenses")},{a:"loanB", amt:10000, p:"By B's Loan A/c"},{a:"capA", amt:13200, p:"By A's Capital A/c"},{a:"capB", amt:38800, p:"By B's Capital A/c"}], total:103000}},
  {id:"L5", tag:"orig", level:"Medium", c:"realise", title:"Special realisation entries",
   q:"On dissolution of P, Q and R's firm on 31 March 2026: (i) realisation expenses of ₹2,000 were paid by P; (ii) an unrecorded computer was sold for ₹5,000; (iii) Q agreed to pay off a creditor of ₹8,000. Pass the journal entries.",
   format:{type:"journal", entries:[
     {label:"Expenses paid by P", date:"2026 Mar 31", lines:[{a:"realis", dr:2000},{a:"capP", cr:2000, why:"P paid on behalf of the firm, so the firm owes him."}], narr:"(Being realisation expenses paid by P)"},
     {label:"Unrecorded computer sold", date:"2026 Mar 31", lines:[{a:"cash", dr:5000},{a:"realis", cr:5000}], narr:"(Being unrecorded computer sold)"},
     {label:"Creditor paid by Q", date:"2026 Mar 31", lines:[{a:"realis", dr:8000},{a:"capQ", cr:8000, why:"Q took over the firm's liability."}], narr:"(Being creditor paid off by Q)"}
   ]}}
],
blanks:[
  {id:"B1", t:"Journal", type:"journal", rows:8},
  {id:"B2", t:"Realisation Account", type:"tacc", rows:8, heads:["Particulars","₹","Particulars","₹"]},
  {id:"B3", t:"Partners' Capital Accounts (3 partners)", type:"grid", rows:6, head:["Dr. Particulars","Partner 1","Partner 2","Partner 3","Cr. Particulars","Partner 1","Partner 2","Partner 3"]},
  {id:"B4", t:"Cash / Bank Account", type:"tacc", rows:7, heads:["Particulars","₹","Particulars","₹"]}
],
mistakes:[
  {id:"m1", c:"transfer", q:"Transfer entry on dissolution:", shown:[["Realisation A/c","Dr",165000,""],["To Cash A/c","",null,15000],["To Debtors A/c","",null,30000],["To Stock A/c","",null,50000],["To Machinery A/c","",null,70000]],
   opts:["Cash must not be transferred to Realisation A/c","Machinery should not be transferred","Debtors should be debited","Nothing is wrong"], a:0, why:"Cash is used to make payments; it is not realised."},
  {id:"m2", c:"order", q:"B's loan of ₹10,000 at dissolution:", shown:[["B's Loan A/c","Dr",10000,""],["To Realisation A/c","",null,10000]],
   opts:["Partners' loans are not transferred to Realisation; they are paid directly: B's Loan Dr / To Cash","Amount should be ₹15,000","B's Capital should be debited","Nothing is wrong"], a:0, why:"Only outside liabilities go to Realisation."},
  {id:"m3", c:"realise", q:"A takes stock at ₹45,000:", shown:[["Realisation A/c","Dr",45000,""],["To A's Capital A/c","",null,45000]],
   opts:["Sides reversed: A's Capital Dr / To Realisation","Should be Cash Dr","Amount should be book value","Nothing is wrong"], a:0, why:"A receives an asset, so his capital is reduced."},
  {id:"m4", c:"result", q:"General Reserve ₹15,000 at dissolution:", shown:[["General Reserve A/c","Dr",15000,""],["To Realisation A/c","",null,15000]],
   opts:["Reserves go to partners' capitals in PSR, not to Realisation","Should be debited to partners","Should be ignored","Nothing is wrong"], a:0, why:"Reserves belong to partners."},
  {id:"m5", c:"result", q:"Loss on realisation ₹18,000 (A:B 3:2):", shown:[["Realisation A/c","Dr",18000,""],["To A's Capital A/c","",null,10800],["To B's Capital A/c","",null,7200]],
   opts:["A loss is debited to partners: Partners' Capitals Dr / To Realisation","Ratio should be equal","Amount should be ₹1,91,000","Nothing is wrong"], a:0, why:"That entry records a profit."}
],
cases:[
  {id:"c1", tag:"board", title:"Lakeview Bakery closes",
   story:"Kavya and Rohit (3:1) closed Lakeview Bakery on 31 March 2026. Assets other than cash: Ovens ₹80,000; Stock ₹20,000; Debtors ₹16,000. Creditors were ₹24,000 and Rohit had lent ₹20,000 to the firm. Ovens sold for ₹72,000; Kavya took the stock at ₹18,000; debtors realised ₹14,000; creditors were paid ₹23,000; expenses ₹2,000 were paid by Rohit.",
   qs:[
     {type:"num", c:"result", q:"Debit side of Realisation A/c (₹)", ans:141000, why:"80,000 + 20,000 + 16,000 + 23,000 + 2,000."},
     {type:"num", c:"result", q:"Loss on realisation (₹)", ans:13000, why:"Credit 24,000 + 72,000 + 18,000 + 14,000 = 1,28,000; 1,41,000 − 1,28,000."},
     {type:"num", c:"result", q:"Kavya's share of the loss (₹)", ans:9750, why:"13,000 × 3/4."},
     {type:"mcq", c:"realise", q:"Expenses paid by Rohit are recorded as…", opts:["Realisation Dr / To Rohit's Capital","Rohit's Capital Dr / To Realisation","Cash Dr / To Rohit's Capital","No entry"], a:0, why:"The firm owes Rohit."},
     {type:"mcq", c:"order", q:"Rohit's loan of ₹20,000 is paid…", opts:["After creditors, before capitals","Before creditors","With capitals","Through Realisation A/c"], a:0, why:"Section 48."}
   ]}
],
games:{
  names:{bs:"Realisation Builder", profit:"Realisation Master"},
  obj:{dc:"Choose the correct entry for each dissolution transaction.", bs:"Place each item on the correct side of the Realisation A/c, or outside it.", profit:"Track the running realisation result."},
  cc:{bs:"transfer", profit:"result", missing:"result", escape:"settle", casegame:"result", detective:"realise", race:"realise"},
  dc:[
    {t:"Assets transferred to Realisation.", ok:"Dr Realisation A/c · Cr Asset A/cs", bad:["Dr Asset A/cs · Cr Realisation A/c","Dr Cash A/c · Cr Asset A/cs","Dr Partners' Capital A/cs · Cr Asset A/cs"], c:"transfer"},
    {t:"Creditors transferred to Realisation.", ok:"Dr Creditors A/c · Cr Realisation A/c", bad:["Dr Realisation A/c · Cr Creditors A/c","Dr Creditors A/c · Cr Cash A/c","Dr Creditors A/c · Cr Partners' Capital A/cs"], c:"transfer"},
    {t:"Asset sold for cash.", ok:"Dr Cash A/c · Cr Realisation A/c", bad:["Dr Realisation A/c · Cr Cash A/c","Dr Cash A/c · Cr Asset A/c","Dr Asset A/c · Cr Cash A/c"], c:"realise"},
    {t:"Partner takes over an asset.", ok:"Dr Partner's Capital A/c · Cr Realisation A/c", bad:["Dr Realisation A/c · Cr Partner's Capital A/c","Dr Asset A/c · Cr Partner's Capital A/c","Dr Cash A/c · Cr Realisation A/c"], c:"realise"},
    {t:"Creditors paid in cash.", ok:"Dr Realisation A/c · Cr Cash A/c", bad:["Dr Creditors A/c · Cr Cash A/c","Dr Cash A/c · Cr Realisation A/c","Dr Realisation A/c · Cr Creditors A/c"], c:"realise"},
    {t:"Partner agrees to pay a liability.", ok:"Dr Realisation A/c · Cr Partner's Capital A/c", bad:["Dr Partner's Capital A/c · Cr Realisation A/c","Dr Liability A/c · Cr Partner's Capital A/c","Dr Realisation A/c · Cr Cash A/c"], c:"realise"},
    {t:"Realisation expenses paid by a partner.", ok:"Dr Realisation A/c · Cr Partner's Capital A/c", bad:["Dr Partner's Capital A/c · Cr Realisation A/c","Dr Realisation A/c · Cr Cash A/c","Dr Expenses A/c · Cr Partner's Capital A/c"], c:"realise"},
    {t:"Partner's loan repaid.", ok:"Dr Partner's Loan A/c · Cr Cash A/c", bad:["Dr Realisation A/c · Cr Cash A/c","Dr Partner's Capital A/c · Cr Cash A/c","Dr Cash A/c · Cr Partner's Loan A/c"], c:"order"},
    {t:"Profit on realisation.", ok:"Dr Realisation A/c · Cr Partners' Capital A/cs", bad:["Dr Partners' Capital A/cs · Cr Realisation A/c","Dr Cash A/c · Cr Realisation A/c","Dr Realisation A/c · Cr General Reserve A/c"], c:"result"},
    {t:"Final payment to a partner.", ok:"Dr Partner's Capital A/c · Cr Cash A/c", bad:["Dr Cash A/c · Cr Partner's Capital A/c","Dr Realisation A/c · Cr Cash A/c","Dr Partner's Loan A/c · Cr Cash A/c"], c:"settle"},
    {t:"Creditor accepts an asset in full settlement.", ok:"No entry", bad:["Dr Creditors A/c · Cr Asset A/c","Dr Realisation A/c · Cr Asset A/c","Dr Creditors A/c · Cr Realisation A/c"], c:"realise"},
    {t:"Unrecorded asset sold.", ok:"Dr Cash A/c · Cr Realisation A/c", bad:["Dr Realisation A/c · Cr Cash A/c","Dr Asset A/c · Cr Cash A/c","Dr Cash A/c · Cr Partners' Capital A/cs"], c:"realise"}
  ],
  bs:{c:"transfer", title:"Build the Realisation Account of A and B (worksheet L1)",
    bins:["Realisation A/c — Debit","Realisation A/c — Credit","Not in Realisation A/c"],
    items:[
      {t:"Debtors (book value)", amt:30000, b:0},{t:"Stock (book value)", amt:50000, b:0},{t:"Machinery (book value)", amt:70000, b:0},{t:"Cash paid to creditors", amt:38000, b:0},{t:"Realisation expenses paid", amt:3000, b:0},
      {t:"Creditors (book value)", amt:40000, b:1},{t:"Cash from debtors", amt:28000, b:1},{t:"Stock taken by A", amt:45000, b:1},{t:"Cash from machinery", amt:60000, b:1},{t:"Loss on realisation", amt:18000, b:1},
      {t:"Opening cash", amt:15000, b:2, why:"Cash is not realised."},{t:"B's loan", amt:10000, b:2, why:"Paid directly after outsiders."},{t:"General Reserve", amt:15000, b:2, why:"Goes to partners' capitals."}
    ], total:191000},
  race:[
    {t:"Stock ₹40,000 sold at 10% below book value.", ok:"Cash A/c Dr → Realisation A/c", bad:["Realisation A/c Dr → Cash A/c","Stock A/c Dr → Cash A/c"], amt:36000, c:"realise"},
    {t:"Creditors ₹25,000 paid at 4% discount.", ok:"Realisation A/c Dr → Cash A/c", bad:["Creditors A/c Dr → Cash A/c","Cash A/c Dr → Realisation A/c"], amt:24000, c:"realise"},
    {t:"Partner takes furniture at 80% of its book value ₹15,000.", ok:"Partner's Capital A/c Dr → Realisation A/c", bad:["Realisation A/c Dr → Partner's Capital A/c","Furniture A/c Dr → Partner's Capital A/c"], amt:12000, c:"realise"},
    {t:"Profit on realisation ₹9,000 (ratio 2:1). First partner's share?", ok:"Realisation A/c Dr → Partners' Capital A/cs", bad:["Partners' Capital A/cs Dr → Realisation A/c","Cash A/c Dr → Partners' Capital A/cs"], amt:6000, c:"result"},
    {t:"Partner's loan ₹20,000 repaid.", ok:"Partner's Loan A/c Dr → Cash A/c", bad:["Realisation A/c Dr → Cash A/c","Partner's Capital A/c Dr → Cash A/c"], amt:20000, c:"order"},
    {t:"Realisation expenses ₹2,500 paid by the firm.", ok:"Realisation A/c Dr → Cash A/c", bad:["Cash A/c Dr → Realisation A/c","Partners' Capital A/cs Dr → Cash A/c"], amt:2500, c:"realise"}
  ],
  missing:[
    {q:"Realisation debit ₹1,20,000; credit before result ₹1,05,000. Loss = ?", kind:"num", ans:15000, why:"1,20,000 − 1,05,000.", c:"result"},
    {q:"Debtors ₹40,000; 5% could not be realised. Cash realised = ?", kind:"num", ans:38000, why:"40,000 × 95%.", c:"realise"},
    {q:"Capital ₹50,000; reserve share ₹6,000; realisation loss ₹8,000; asset taken ₹10,000. Final cash = ?", kind:"num", ans:38000, why:"50,000 + 6,000 − 8,000 − 10,000.", c:"settle"},
    {q:"Cash available ₹80,000; outsiders ₹45,000; partner's loan ₹15,000. Left for capitals = ?", kind:"num", ans:20000, why:"80,000 − 45,000 − 15,000.", c:"order"},
    {q:"Creditors ₹50,000; one (₹20,000) took machinery in full settlement; rest paid at 10% discount. Cash paid = ?", kind:"num", ans:27000, why:"30,000 × 90%.", c:"realise"},
    {q:"Realisation loss ₹12,000; ratio 2:1:1. Second partner's share = ?", kind:"num", ans:3000, why:"12,000 × 1/4.", c:"result"}
  ],
  profit:{ask:"running realisation result?", c:"result", start:"Start from 0. After each event, type the running profit (+) or loss (−) on realisation.", base:"A and B share 3:2.",
    steps:[{t:"Debtors ₹30,000 realise ₹28,000", v:-2000},{t:"Stock ₹50,000 taken by A at ₹45,000", v:-5000},{t:"Machinery ₹70,000 sold for ₹60,000", v:-10000},{t:"Creditors ₹40,000 paid ₹38,000", v:2000},{t:"Expenses ₹3,000 paid", v:-3000}],
    final:{q:"Loss is shared 3:2. B's share = ?", ans:7200, why:"18,000 × 2/5.", hint:"B gets 2/5."}},
  escape:{story:"The closed bakery's safe has four locks. The final settlement is inside.",
    locks:[
      {room:"Lock 1: Transfer", q:"Assets other than cash: Stock ₹25,000, Debtors ₹15,000, Furniture ₹10,000. Code = amount debited to Realisation on transfer.", ans:50000, hint:"25,000 + 15,000 + 10,000.", c:"transfer"},
      {room:"Lock 2: Realise", q:"Stock realised 80%, debtors 90%, furniture taken by a partner at ₹8,000. Code = cash received.", ans:33500, hint:"20,000 + 13,500 (furniture brings no cash).", c:"realise"},
      {room:"Lock 3: Result", q:"Creditors ₹20,000 paid ₹19,000; no expenses. Using Locks 1 and 2: code = loss on realisation.", ans:7500, hint:"Dr 50,000 + 19,000 = 69,000; Cr 20,000 + 33,500 + 8,000 = 61,500.", c:"result"},
      {room:"Lock 4: Settle", q:"Partner X: capital ₹30,000; took furniture ₹8,000; share of loss ₹4,500. Code = cash paid to X.", ans:17500, hint:"30,000 − 8,000 − 4,500.", c:"settle"}
    ]}
},
revision:{
  summary:["Dissolution of partnership: firm continues. Dissolution of firm: business ends, books closed.","Modes: agreement, compulsory, contingencies, notice, court.","Section 48: losses from profits → capital → partners personally; assets to outsiders → partners' loans → capitals → surplus in PSR.","Realisation A/c: Dr assets (except cash, bank, fictitious) and payments; Cr outside liabilities and amounts realised.","Partner takes asset → his Capital Dr; partner pays liability or expenses → his Capital Cr.","Creditor accepts asset in full settlement → no entry.","Partners' loans paid directly; reserves to capitals; final payment closes capitals and cash."],
  defs:[["Dissolution of firm","Discontinuance of the business relationship among all the partners, ending the firm."],["Realisation Account","A nominal account prepared on dissolution to record the sale of assets and payment of liabilities and find the profit or loss."],["Section 48","The provision of the Partnership Act that sets the order of settling accounts on dissolution."]],
  flash:[{f:"Asset sold",b:"Cash Dr → Realisation"},{f:"Liability paid",b:"Realisation Dr → Cash"},{f:"Asset taken by partner",b:"Partner's Capital Dr → Realisation"},{f:"Liability taken by partner",b:"Realisation Dr → Partner's Capital"},{f:"Creditor accepts asset fully",b:"No entry"},{f:"Partner's loan",b:"Paid directly: Loan Dr → Cash"},{f:"Order (Sec. 48)",b:"Outsiders → loans → capitals → surplus"}],
  treat:[["Transfer of assets","Realisation Dr → Assets"],["Transfer of liabilities","Liabilities Dr → Realisation"],["Asset realised","Cash Dr → Realisation"],["Liability paid","Realisation Dr → Cash"],["Expenses (firm)","Realisation Dr → Cash"],["Expenses (partner)","Realisation Dr → Partner's Capital"],["Loss","Partners' Capitals Dr → Realisation"],["Reserves","Reserve Dr → Partners' Capitals"]],
  mistakes:["Transferring cash or bank to Realisation A/c.","Transferring partners' loans or reserves to Realisation A/c.","Crediting a partner who takes over an asset.","Passing an entry when a creditor accepts an asset in full settlement.","Recording a loss as Realisation Dr / To Capitals."],
  fib:[{q:"On dissolution, assets are transferred to the ______ side of Realisation A/c.", a:["debit","dr"]},{q:"A partner's loan is paid ______ outside creditors.", a:["after"]},{q:"When a creditor accepts an asset in full settlement, ______ entry is passed.", a:["no"]},{q:"Profit on realisation is shared in the ______ ratio.", a:["profit sharing","psr","profit-sharing"]}],
  mcq:[
    {q:"Which is transferred to the debit of Realisation A/c?", opts:["Debtors","Cash","Partner's loan","General Reserve"], a:0, why:"An asset to be realised.", c:"transfer"},
    {q:"Partner takes over stock: entry", opts:["Partner's Capital Dr / To Realisation","Realisation Dr / To Partner's Capital","Stock Dr / To Capital","Cash Dr / To Stock"], a:0, why:"He receives an asset.", c:"realise"},
    {q:"Under Section 48, partners' loans are paid…", opts:["After outside debts, before capitals","First of all","After capitals","With creditors equally"], a:0, why:"Order of settlement.", c:"order"},
    {q:"Realisation expenses paid by a partner: entry", opts:["Realisation Dr / To Partner's Capital","Partner's Capital Dr / To Realisation","Realisation Dr / To Cash","No entry"], a:0, why:"The firm owes him.", c:"realise"},
    {q:"Debit side ₹2,00,000, credit side ₹1,85,000 before result. Result:", opts:["Loss ₹15,000","Profit ₹15,000","Nil","Loss ₹1,85,000"], a:0, why:"Debit bigger.", c:"result"},
    {q:"Which is NOT a mode of dissolution of a firm?", opts:["Admission of a new partner","By notice","By court","Compulsory dissolution"], a:0, why:"Admission only reconstitutes the partnership.", c:"modes"}
  ],
  ar:[
    {a:"Cash and bank balances are not transferred to the Realisation A/c.", r:"They are used to make payments and need not be realised.", ans:0, why:"Both true; R explains A.", c:"transfer"},
    {a:"A partner's loan is transferred to the credit of Realisation A/c.", r:"A partner's loan is paid after outside liabilities.", ans:3, why:"A false (paid directly); R true.", c:"order"},
    {a:"Dissolution of partnership always means dissolution of the firm.", r:"In dissolution of partnership the firm may continue.", ans:3, why:"A false; R true.", c:"modes"}
  ],
  numericals:["L1","L2","L3","L4","s1","s4"]
},
test:{mins:30, items:[
  {type:"mcq", m:1, c:"modes", q:"Dissolution of a firm on a partner becoming insolvent is…", opts:["On a contingency","By court only","By notice","Compulsory always"], a:0, why:"Section 42 (subject to contract)."},
  {type:"mcq", m:1, c:"transfer", q:"Provision for doubtful debts on dissolution is…", opts:["Credited to Realisation A/c","Debited to Realisation A/c","Credited to partners","Ignored"], a:0, why:"Transferred with debtors, to the credit side."},
  {type:"mcq", m:1, c:"realise", q:"A creditor of ₹10,000 accepts machinery worth ₹12,000 in full settlement. Entry:", opts:["No entry","Creditors Dr / To Machinery","Realisation Dr / To Machinery","Machinery Dr / To Realisation"], a:0, why:"Both already in Realisation A/c."},
  {type:"mcq", m:1, c:"order", q:"First payment from realised assets goes to…", opts:["Outside creditors","Partners' loans","Partners' capitals","Partners' surplus"], a:0, why:"Section 48."},
  {type:"mcq", m:1, c:"result", q:"Profit on realisation is credited to…", opts:["Partners' Capital A/cs","Realisation A/c","Cash A/c","General Reserve"], a:0, why:"Realisation Dr / To Capitals."},
  {type:"mcq", m:1, c:"settle", q:"After final settlement, the Cash A/c shows…", opts:["Nil balance","Debit balance","Credit balance","Partners' capitals"], a:0, why:"All cash is paid out."},
  {type:"ar", m:1, c:"realise", a:"An asset taken over by a partner is debited to his capital account.", r:"The partner receives the asset in place of cash.", ans:0, why:"Both true; R explains A."},
  {type:"ar", m:1, c:"transfer", a:"General Reserve is transferred to the Realisation A/c on dissolution.", r:"General Reserve belongs to the partners.", ans:3, why:"A false (to capitals); R true."},
  {type:"nums", m:3, c:"result", q:"Assets transferred ₹1,00,000; creditors ₹30,000. Assets realise ₹85,000; creditors paid ₹29,000; expenses ₹1,000. Ratio X:Y 1:1.", parts:[{p:"Loss on realisation (₹)", ans:15000, why:"Dr 1,30,000; Cr 1,15,000."},{p:"X's share (₹)", ans:7500, why:"15,000 ÷ 2."}]},
  {type:"nums", m:3, c:"realise", q:"Creditors ₹40,000: one creditor of ₹15,000 takes stock in full settlement; the rest are paid at 4% discount. Investments (book ₹20,000) taken by a partner at ₹18,000.", parts:[{p:"Cash paid to creditors (₹)", ans:24000, why:"25,000 × 96%."},{p:"Amount debited to the partner for investments (₹)", ans:18000, why:"At the agreed value."}]},
  {type:"nums", m:4, c:"settle", q:"P's capital ₹40,000; share of General Reserve ₹5,000; share of realisation profit ₹3,000; he took a car at ₹12,000. Q's capital ₹20,000; reserve ₹5,000; profit ₹3,000.", parts:[{p:"Cash paid to P (₹)", ans:36000, why:"40,000 + 5,000 + 3,000 − 12,000."},{p:"Cash paid to Q (₹)", ans:28000, why:"20,000 + 5,000 + 3,000."}]},
  {type:"self", m:3, c:"modes", q:"State any three differences between dissolution of partnership and dissolution of firm.",
   model:"(i) Business continues in dissolution of partnership but ends in dissolution of firm. (ii) Books are not closed in dissolution of partnership but are closed in dissolution of firm. (iii) Assets and liabilities are revalued in dissolution of partnership but realised and paid in dissolution of firm. Also correct: court intervention possible only in dissolution of firm; dissolution of firm involves dissolution of partnership but not vice versa.",
   crit:["One correct difference","A second correct difference","A third correct difference"]},
  {type:"journal", m:4, c:"realise", q:"On dissolution of X and Y's firm on 31 March 2026: (i) furniture of ₹12,000 taken by X; (ii) creditors of ₹30,000 paid ₹28,500 in full settlement. Pass the journal entries.",
   entries:[
     {label:"Furniture taken by X", date:"2026 Mar 31", lines:[{a:"capX", dr:12000},{a:"realis", cr:12000}], narr:"(Being furniture taken over by X)"},
     {label:"Creditors paid", date:"2026 Mar 31", lines:[{a:"realis", dr:28500},{a:"cash", cr:28500}], narr:"(Being creditors paid in full settlement)"}
   ]}
]}
});
})();
