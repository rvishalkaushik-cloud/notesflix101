/* Notesflix 101 · Accountancy Lab · Class XII · Retirement and Death of a Partner
   Basis: CBSE 2026-27 Accountancy (055), Unit 1; NCERT Class XII Accountancy Part I; AS-26.
   All questions are ORIGINAL practice questions ("orig") or written in CBSE board style ("board") for Notesflix 101.
   Check: node lab/tools/validate.js retirement */
(function(){
function RV(x){ return ["revaluation " + x, x + " revaluation", "profit on revaluation " + x, x + " capital", x + " share"]; }
NFLab.register({
id:"retirement", cls:"XII", subject:"Accountancy", unit:"Accounting for Partnership Firms", num:"5", icon:"👋",
title:"Retirement and Death of a Partner",
tagline:"New and gaining ratios, retiring partner's goodwill, revaluation, reserves, amount due and its settlement, and profit up to the date of death.",
notesLink:"../learn/xii-acc.html",
home:{q:"What happens when a partner retires or dies?", ticks:["The remaining partners share his share of profit (gaining ratio).","They pay him for his share of goodwill.","His full dues are settled in cash, by loan, or to his executors."]},
formats:["journal","ledger","capital"],
concepts:{
  ratio:{n:"New ratio and gaining ratio"}, goodwill:{n:"Goodwill of the retiring partner"}, reval:{n:"Revaluation", go:"lab"},
  reserve:{n:"Reserves and accumulated profits/losses"}, due:{n:"Amount due and its settlement", go:"lab"}, death:{n:"Death: profit to date and executors"}, entries:{n:"Journal entries and formats", go:"lab"}
},
acc:{
  gr:{n:"General Reserve A/c", al:["general reserve","reserve"]}, reval:{n:"Revaluation A/c", al:["revaluation","profit and loss adjustment"]},
  building:{n:"Building A/c", al:["building","buildings"]}, furn:{n:"Furniture A/c", al:["furniture"]}, goodwill:{n:"Goodwill A/c", al:["goodwill"]},
  loanC:{n:"C's Loan A/c", al:["c loan","loan c","loan of c","c loan account"]}, loanB:{n:"B's Loan A/c", al:["b loan","loan b","loan of b"]},
  plsus:{n:"Profit and Loss Suspense A/c", al:["profit and loss suspense","p l suspense","pl suspense","suspense"]},
  exeZ:{n:"Z's Executor A/c", al:["z executor","z executors","executor of z","executors of z","z executor account"]}
},
intro:{
  hook:"After twenty years, C wants to retire from the firm. A and B will carry on. C has built the firm's name, has a share in its reserves and in any rise in the value of its building. Before he walks away, the accounts must work out every rupee he is owed and how it will be paid.",
  points:[
    "<b>Retirement</b> means a partner leaving the firm while the others continue. <b>Death</b> of a partner has the same accounting effect, with his dues paid to his legal representatives (executors).",
    "The remaining partners take over the retiring partner's share in the <b>gaining ratio</b> (New share − Old share).",
    "They <b>compensate the retiring partner for his share of goodwill</b> in the gaining ratio (no Goodwill A/c is raised, AS-26).",
    "Revaluation profit or loss and reserves are shared by <b>all partners in the old ratio</b>, including the retiring partner. His final balance is paid in cash, transferred to his <b>Loan A/c</b>, or partly both."
  ],
  weight:"Board weightage: retirement/death numericals (Revaluation A/c, Capital A/cs, Balance Sheet, deceased partner's share of profit) are standard 6 mark questions."
},
objectives:[
  "Calculate the new profit sharing ratio and the gaining ratio.",
  "Treat the retiring or deceased partner's share of goodwill.",
  "Prepare the Revaluation Account and distribute reserves in the old ratio.",
  "Find the amount due to the retiring partner and record its settlement.",
  "Calculate a deceased partner's share of profit up to the date of death (time and turnover basis).",
  "Prepare the deceased partner's Executor's Account."
],
prereq:[
  {t:"Shares from ratios", d:"Ratio 3:2:1 means 3/6, 2/6 and 1/6.", check:{q:"In 3:2:1, A's share is…", opts:["1/2","3/5","1/3","3/1"], a:0, why:"3/6 = 1/2."}},
  {t:"Gaining partner pays", d:"At a change in ratio, the partner who gains compensates the one who sacrifices.", check:{q:"Who compensates for goodwill?", opts:["The gaining partners","The sacrificing partners","The firm's creditors","Nobody"], a:0, why:"Gainers pay for the extra share they get."}},
  {t:"Part-year profit", d:"Three months' share of a ₹1,20,000 yearly profit = 1,20,000 × 3/12.", check:{q:"Profit for 3 months on a yearly ₹1,20,000 basis:", opts:["₹30,000","₹40,000","₹10,000","₹3,000"], a:0, why:"1,20,000 × 3/12 = 30,000."}}
],
kid:[
  {id:"k1", c:"ratio", title:"A friend leaves the team", art:{s:[["🧑","A 3"],["👦","B 2"],["👴","C 1 ✈️"],["➡️",""],["🧑","A 3/5"],["👦","B 2/5"]], cap:"C leaves; A and B share his slice."},
   story:"<p>A, B and C share a pizza 3:2:1. C retires. Now only A and B will eat, and they keep their old proportion 3:2.</p><p>A's slice grows from 3/6 to 3/5; B's from 2/6 to 2/5. The extra each one gets is his <b>gain</b>: A gains 3/5 − 3/6 = 3/30; B gains 2/5 − 2/6 = 2/30. <b>Gaining ratio 3:2</b>.</p><p>If nothing is said, the remaining partners take the retiring partner's share in their old ratio, so gaining ratio = their old ratio.</p>",
   qa:[["Who gains?","The remaining partners."],["Formula?","Gain = New share − Old share."],["When is gaining ratio = old ratio?","When they keep their old proportion."],["Why find it?","To share the retiring partner's goodwill payment."]],
   check:{q:"A, B, C share 2:2:1. C retires; A and B continue equally. Gaining ratio:", opts:["1:1","2:1","2:2:1","1:2"], a:0, why:"Each gains 1/2 − 2/5 = 1/10."}},
  {id:"k2", c:"goodwill", title:"Pay him for the good name he leaves behind", art:{s:[["⭐","Goodwill ₹1,20,000"],["👴","C's 1/6 = ₹20,000"],["🧑","A pays ₹12,000"],["👦","B pays ₹8,000"]], cap:"Gaining partners pay the retiring partner's share of goodwill."},
   story:"<p>The firm's good name is worth ₹1,20,000. C owns 1/6 of it: ₹20,000. He leaves it behind for A and B to enjoy.</p><p>So A and B pay him in their <b>gaining ratio</b> 3:2: A ₹12,000, B ₹8,000. Entry: A's and B's Capital Dr / To C's Capital.</p>",
   qa:[["Who receives?","The retiring partner."],["Who pays?","The gaining partners, in gaining ratio."],["Is a Goodwill A/c opened?","No."],["Old goodwill in books?","Written off in the old ratio first."]],
   check:{q:"Goodwill ₹60,000; retiring partner's share 1/3. He receives…", opts:["₹20,000","₹60,000","₹30,000","₹40,000"], a:0, why:"60,000 × 1/3."}},
  {id:"k3", c:"reval", title:"Check the values before he goes", art:{s:[["🏢","Building +₹24,000"],["🪑","Furniture −₹6,000"],["➕","Profit ₹18,000"],["3️⃣2️⃣1️⃣","Old ratio"]], cap:"All partners, including the one leaving, share revaluation in the old ratio."},
   story:"<p>The building is now worth ₹24,000 more; the furniture ₹6,000 less. Net gain ₹18,000.</p><p>This rise happened while C was a partner, so <b>all three</b> share it in the <b>old ratio</b> 3:2:1: A ₹9,000, B ₹6,000, C ₹3,000.</p>",
   qa:[["Who shares?","All partners, including the retiring one."],["Which ratio?","Old ratio."],["Why?","The change happened before he left."],["Where?","Revaluation A/c."]],
   check:{q:"Revaluation loss ₹12,000; old ratio 2:1:1; B retires. B's share is…", opts:["₹3,000 debited","₹3,000 credited","Nil","₹4,000 debited"], a:0, why:"12,000 × 1/4, a loss."}},
  {id:"k4", c:"due", title:"Adding up what he is owed", art:{s:[["💼","Capital ₹60,000"],["⭐","+ Goodwill ₹20,000"],["🫙","+ Reserve ₹6,000"],["🏢","+ Revaluation ₹3,000"],["🟰","₹89,000"]], cap:"Amount due = capital + all his shares."},
   story:"<p>C's capital is ₹60,000. Add his share of goodwill ₹20,000, General Reserve ₹6,000 and revaluation profit ₹3,000. Total due: <b>₹89,000</b>.</p><p>The firm pays ₹29,000 in cash now and transfers ₹60,000 to <b>C's Loan A/c</b>, to be repaid later with interest. If nothing is agreed, the law gives him 6% p.a. interest (or a share of profits) on unpaid dues.</p>",
   qa:[["What is added?","Goodwill, reserves, revaluation profit, profit to date, interest on capital."],["What is subtracted?","Drawings, losses, interest on drawings, revaluation loss."],["How is it paid?","Cash, loan or both."],["Loan entry?","Retiring partner's Capital Dr / To his Loan A/c."]],
   check:{q:"Due ₹50,000; paid ₹20,000 in cash; rest as loan. Loan amount:", opts:["₹30,000","₹50,000","₹20,000","₹70,000"], a:0, why:"50,000 − 20,000."}},
  {id:"k5", c:"death", title:"When a partner dies midway", art:{s:[["📅","1 Apr"],["🕯️","30 Jun"],["⏱️","3 months"],["💰","Share of profit"],["👨‍⚖️","Executor"]], cap:"His share of profit till the date of death goes to his executor."},
   story:"<p>Z dies on 30 June. He worked for 3 months of the year, so he has earned a share of profit for those 3 months.</p><p>If last year's profit was ₹1,20,000 and Z's share is 1/5: 1,20,000 × 3/12 × 1/5 = <b>₹6,000</b> (time basis). Or it can be based on sales up to the date of death (turnover basis).</p><p>His total dues are transferred to <b>Z's Executor's A/c</b> and paid to his family.</p>",
   qa:[["Time basis?","Last year's (or average) profit × months/12 × his share."],["Turnover basis?","Sales to date × profit % × his share."],["Entry?","P&L Suspense A/c Dr / To deceased partner's Capital."],["Who gets the money?","His executors (legal representatives)."]],
   check:{q:"Last year's profit ₹2,40,000; X (share 1/4) dies after 2 months. His share of profit:", opts:["₹10,000","₹40,000","₹20,000","₹60,000"], a:0, why:"2,40,000 × 2/12 × 1/4."}}
],
kidActs:[
  {id:"ka1", type:"sort", title:"Does it increase or reduce what the retiring partner gets?", c:"due",
   bins:["Added to his amount due","Deducted from his amount due"],
   items:[{t:"His share of goodwill", b:0, why:"Paid by gaining partners."},{t:"His share of General Reserve", b:0, why:"Past profit."},{t:"His share of revaluation profit", b:0, why:"Gain up to his retirement."},{t:"His drawings during the year", b:1, why:"Already taken out."},{t:"His share of accumulated loss", b:1, why:"Past loss."},{t:"Interest on his capital up to retirement", b:0, why:"Earned till the date of retirement."}]},
  {id:"ka2", type:"minute", title:"One-minute challenge: retirement rules", c:"ratio", secs:60,
   items:[
     {q:"Gaining ratio = ?", opts:["New share − Old share","Old share − New share"], a:0},
     {q:"Retiring partner's goodwill is paid by…", opts:["Gaining partners","All partners including him"], a:0},
     {q:"Reserves at retirement are shared…", opts:["By all partners in the old ratio","By remaining partners only"], a:0},
     {q:"Amount due not paid at once is transferred to…", opts:["Retiring partner's Loan A/c","General Reserve"], a:0},
     {q:"Deceased partner's dues are paid to…", opts:["His executors","The remaining partners"], a:0},
     {q:"Remaining partners continue in their old ratio: gaining ratio is…", opts:["Their old ratio","Equal always"], a:0}
   ]}
],
exam:[
  {id:"e1", c:"ratio", title:"Meaning and adjustments required",
   html:"<p>A partner may retire with the consent of all partners, as per the agreement, or by notice in a partnership at will. On death, his legal representatives (executors) are entitled to his dues.</p><p><b>Adjustments:</b> (1) new ratio and gaining ratio; (2) goodwill; (3) revaluation of assets and liabilities; (4) reserves and accumulated profits/losses; (5) profit or loss up to the date of retirement/death; (6) amount due and its settlement; (7) adjustment of capitals of continuing partners (if agreed).</p>"},
  {id:"e2", c:"ratio", title:"New ratio and gaining ratio",
   html:"<p class='formula'>Gain = New share − Old share</p><ul><li><b>Not stated</b>: continuing partners keep their old proportion → gaining ratio = their old ratio.</li><li><b>Gaining ratio given</b>: new share = old share + (retiring share × gaining proportion).</li><li><b>New ratio given</b>: gain = new − old for each continuing partner.</li></ul><p class='eg'>A, B, C 3:2:1; B retires; A and C will share 5:3. A gains 5/8 − 3/6 = 1/8 = 3/24; C gains 3/8 − 1/6 = 5/24. Gaining ratio 3:5.</p>"},
  {id:"e3", c:"goodwill", title:"Treatment of goodwill",
   html:"<p class='formula'>Gaining Partners' Capital A/cs Dr (gaining ratio)<br>&nbsp;&nbsp;To Retiring Partner's Capital A/c (his share of goodwill)</p><p>Goodwill already in the books is first written off among <b>all</b> partners in the old ratio. Hidden goodwill: if the retiring partner is paid more than his dues, the excess is his share of goodwill and is treated the same way.</p>"},
  {id:"e4", c:"reval", title:"Revaluation and reserves",
   html:"<p>Revaluation A/c is prepared exactly as at admission (AU-LD = Gain); profit or loss is shared by <b>all partners in the old ratio</b>.</p><p>General Reserve, credit balance of P&L, excess of WCR and IFR → all partners in old ratio (credit). Accumulated losses, advertisement suspense → all partners in old ratio (debit).</p>"},
  {id:"e5", c:"due", title:"Amount due and its settlement",
   html:"<p class='formula'>Amount due = Capital + share of goodwill + reserves + revaluation profit + profit to date + interest on capital − drawings − interest on drawings − losses</p><table class='tt'><tbody><tr><td>Paid in cash</td><td>Retiring Partner's Capital A/c Dr / To Cash (Bank) A/c</td></tr><tr><td>Transferred to loan</td><td>Retiring Partner's Capital A/c Dr / To Retiring Partner's Loan A/c</td></tr></tbody></table><p>Section 37: if dues are not settled, the retiring partner (or executor) may choose interest at 6% p.a. or a share of profits earned with his money.</p>"},
  {id:"e6", c:"death", title:"Death: profit up to the date of death",
   html:"<p><b>Time basis</b>: Deceased's share = Last year's (or average) profit × months up to death/12 × his share.</p><p><b>Turnover (sales) basis</b>: Profit % = Last year's profit ÷ Last year's sales; Profit to date = Sales up to death × profit %; × his share.</p><p class='formula'>Profit and Loss Suspense A/c Dr / To Deceased Partner's Capital A/c</p><p>(Alternatively, gaining partners' capitals are debited in the gaining ratio.)</p><p>Finally: Deceased Partner's Capital A/c Dr / To Deceased Partner's Executor's A/c.</p>"},
  {id:"e7", c:"entries", title:"Board answer presentation",
   html:"<ol><li>Working notes: gaining ratio; goodwill share; profit to date (if death).</li><li>Revaluation A/c (T-format).</li><li>Partners' Capital A/cs (columnar), ending with the retiring partner's transfer to Cash/Loan/Executor.</li><li>Balance Sheet of the reconstituted firm, showing the retiring partner's Loan as a liability.</li></ol>"}
],
visual:{kind:"retire", title:"Retirement playground", sub:"Pick who retires and how the others take his share. See the new and gaining ratios exactly.",
  names:["A","B","C"], old:[3,2,1], out:2,
  flowTitle:"Steps at retirement or death", flow:["Find new and gaining ratios","Gainers pay retiring partner's goodwill","Revalue assets and liabilities (old ratio)","Distribute reserves (old ratio)","Add profit to date (death)","Find the amount due","Pay in cash, transfer to loan, or to executors"]},
formulas:[
  {n:"Gain", f:"New share − Old share", code:"G-N-O", c:"ratio"},
  {n:"Retiring partner's goodwill", f:"Firm's goodwill × retiring partner's share, paid by gainers in gaining ratio", code:"His slice of the name, paid by gainers", c:"goodwill"},
  {n:"Amount due", f:"Capital + goodwill + reserves + revaluation profit + profit to date − drawings − losses", code:"Add his gains, subtract his takings", c:"due"},
  {n:"Profit to death (time)", f:"Last year's profit × months/12 × share", code:"Year profit, slice by time", c:"death"},
  {n:"Profit to death (turnover)", f:"Sales to date × (Last profit ÷ Last sales) × share", code:"Sales × margin × share", c:"death"},
  {n:"Unpaid dues", f:"6% p.a. interest or share of profit (Section 37), at the option of the retiring partner/executor", code:"Six or share", c:"due"}
],
illus:[
  {id:"i1", tag:"orig", c:"ratio", title:"Gaining ratio given",
   given:"A, B and C share profits 5:3:2. C retires. His share is taken by A and B in the ratio 2:1.",
   required:"New profit sharing ratio of A and B.",
   formula:"New share = Old share + C's share × gaining proportion.",
   steps:["C's share = 2/10 = 6/30","A gains 6/30 × 2/3 = 4/30; B gains 6/30 × 1/3 = 2/30","A = 15/30 + 4/30 = <b>19/30</b>; B = 9/30 + 2/30 = <b>11/30</b>","New ratio <b>19 : 11</b>"],
   answer:"New ratio 19:11; gaining ratio 2:1.", why:"The retiring partner's share is split exactly as stated and added to each old share."},
  {id:"i2", tag:"board", c:"death", title:"Deceased partner's share of profit: turnover basis",
   given:"X, Y and Z share 2:2:1. Z died on 30 June 2026. Sales for 2025-26 were ₹16,00,000 and profit ₹2,40,000. Sales from 1 April to 30 June 2026 were ₹4,00,000.",
   required:"Z's share of profit up to the date of death and the entry.",
   formula:"Profit % = 2,40,000/16,00,000 = 15%; Profit to date = 4,00,000 × 15%; Z's share = 1/5.",
   steps:["Profit rate = 2,40,000 ÷ 16,00,000 = <b>15%</b>","Profit up to 30 June = 4,00,000 × 15% = <b>₹60,000</b>","Z's share = 60,000 × 1/5 = <b>₹12,000</b>"],
   format:{type:"journal", entries:[{date:"2026 Jun 30", lines:[{a:"plsus", dr:12000},{a:"capZ", cr:12000}], narr:"(Being Z's share of profit up to the date of death)"}]},
   answer:"Z's share of profit = ₹12,000.", why:"Turnover basis assumes profit is earned evenly with sales."},
  {id:"i3", tag:"board", c:"due", title:"Retirement: Revaluation, Capital Accounts and settlement",
   given:"A, B and C share profits 3:2:1. Capitals on 31 March 2026: A ₹1,20,000, B ₹80,000, C ₹60,000; General Reserve ₹36,000. C retires on that date. Building is appreciated by ₹24,000; furniture is reduced by ₹6,000. Goodwill of the firm is ₹1,20,000. A and B continue in 3:2. C is paid ₹29,000 in cash and the balance is transferred to his loan account.",
   required:"Revaluation A/c and Partners' Capital A/cs.",
   formula:"Revaluation and reserve: old ratio 3:2:1. Goodwill: C's 1/6 paid by A and B in gaining ratio 3:2.",
   steps:["Revaluation profit = 24,000 − 6,000 = <b>₹18,000</b> → A 9,000, B 6,000, C 3,000","General Reserve 36,000 → A 18,000, B 12,000, C 6,000","C's goodwill = 1,20,000 × 1/6 = <b>₹20,000</b> → A pays 12,000, B 8,000","C's due = 60,000 + 3,000 + 6,000 + 20,000 = <b>₹89,000</b>: cash 29,000, loan 60,000","A: 1,20,000 + 9,000 + 18,000 − 12,000 = <b>₹1,35,000</b>; B: 80,000 + 6,000 + 12,000 − 8,000 = <b>₹90,000</b>"],
   format:{type:"multi", parts:[
     {type:"tacc", name:"Revaluation Account", heads:["Particulars","₹","Particulars","₹"], date:"2026 Mar 31",
      left:[{a:"furn", amt:6000, p:"To Furniture A/c"},{a:"capA", amt:9000, p:"To A's Capital A/c (profit)"},{a:"capB", amt:6000, p:"To B's Capital A/c (profit)"},{a:"capC", amt:3000, p:"To C's Capital A/c (profit)"}],
      right:[{a:"building", amt:24000, p:"By Building A/c"}], total:24000},
     {type:"grid", name:"Partners' Capital Accounts", head:["Dr. Particulars","A (₹)","B (₹)","C (₹)","Cr. Particulars","A (₹)","B (₹)","C (₹)"],
      rows:[
        ["To C's Capital A/c (goodwill)",12000,8000,null,"By Balance b/d",120000,80000,60000],
        ["To Cash A/c",null,null,29000,"By Revaluation A/c",9000,6000,3000],
        ["To C's Loan A/c",null,null,60000,"By General Reserve A/c",18000,12000,6000],
        ["To Balance c/d",135000,90000,null,"By A's and B's Capital A/cs (goodwill)",null,null,20000],
        ["Total",147000,98000,89000,"Total",147000,98000,89000]]}
   ]},
   answer:"C's dues ₹89,000 (cash ₹29,000, loan ₹60,000). A ₹1,35,000; B ₹90,000.", why:"Everything that arose up to the date of retirement is shared in the old ratio; only goodwill is settled in the gaining ratio."}
],
solver:[
  {id:"s1", tag:"board", c:"goodwill", title:"New ratio given: gaining ratio and goodwill", mins:7,
   q:"A, B and C share profits 3:2:1. B retires. A and C will share future profits 5:3. Goodwill of the firm is ₹72,000.",
   steps:[
     {label:"A's gain", prompt:"A's gain (fraction)", kind:"frac", ans:[1,8], hint:"5/8 − 3/6.", formula:"New − Old", why:"15/24 − 12/24 = 3/24 = 1/8.", avoid:""},
     {label:"C's gain", prompt:"C's gain (fraction)", kind:"frac", ans:[5,24], hint:"3/8 − 1/6.", formula:"New − Old", why:"9/24 − 4/24 = 5/24.", avoid:""},
     {label:"Gaining ratio", prompt:"Gaining ratio A : C", kind:"ratio", ans:[3,5], hint:"3/24 : 5/24.", formula:"Ratio of gains", traps:[{v:[3,1], why:"3:1 is A and C's OLD ratio. The new ratio 5:3 changes the gains."},{v:[5,3], why:"5:3 is the NEW ratio. Gaining ratio = new − old."}], why:"3 : 5.", avoid:"Never assume gaining ratio = old ratio when a new ratio is given."},
     {label:"B's goodwill", prompt:"B's share of goodwill (₹)", kind:"num", ans:24000, hint:"72,000 × 2/6.", formula:"Goodwill × B's share", why:"24,000.", avoid:""},
     {label:"A's payment", prompt:"Amount debited to A's Capital A/c (₹)", kind:"num", ans:9000, hint:"24,000 × 3/8.", formula:"B's goodwill × A's part of gaining ratio", traps:[{v:15000, why:"That is C's part (5/8)."},{v:18000, why:"You used A's old proportion 3:1. Use the gaining ratio 3:5."}], why:"24,000 × 3/8 = 9,000 (C pays 15,000).", avoid:""}
   ]},
  {id:"s2", tag:"orig", c:"due", title:"Amount due to the retiring partner", mins:6,
   q:"C retires. His capital ₹60,000; share of General Reserve ₹6,000; share of revaluation profit ₹3,000; share of goodwill ₹20,000; drawings during the year ₹4,000. He is paid ₹25,000 in cash and the rest is transferred to his loan account.",
   steps:[
     {label:"Additions", prompt:"Total of capital, reserve, revaluation and goodwill (₹)", kind:"num", ans:89000, hint:"60,000 + 6,000 + 3,000 + 20,000.", formula:"Capital + shares", why:"89,000.", avoid:""},
     {label:"Amount due", prompt:"Amount due after drawings (₹)", kind:"num", ans:85000, hint:"Deduct drawings.", formula:"Additions − Drawings", traps:[{v:93000, why:"Drawings reduce what is due; subtract them."}], why:"89,000 − 4,000 = 85,000.", avoid:""},
     {label:"Loan", prompt:"Amount transferred to C's Loan A/c (₹)", kind:"num", ans:60000, hint:"85,000 − 25,000.", formula:"Due − Cash paid", why:"60,000.", avoid:""}
   ]},
  {id:"s3", tag:"board", c:"death", title:"Profit up to death: time basis", mins:5,
   q:"X, Y and Z share 2:2:1. Z died on 30 June 2026. Profit for 2025-26 was ₹1,20,000. Z's share of profit up to the date of death is to be based on last year's profit.",
   steps:[
     {label:"Months", prompt:"Months from 1 April to 30 June", kind:"num", ans:3, hint:"April, May, June.", formula:"Count months", why:"3.", avoid:""},
     {label:"Firm's profit to death", prompt:"Firm's profit for those months (₹)", kind:"num", ans:30000, hint:"1,20,000 × 3/12.", formula:"Annual profit × months/12", why:"30,000.", avoid:""},
     {label:"Z's share", prompt:"Z's share (₹)", kind:"num", ans:6000, hint:"× 1/5.", formula:"× Z's share", traps:[{v:24000, why:"You did not take Z's share (1/5)."},{v:30000, why:"That is the whole firm's profit."}], why:"30,000 × 1/5 = 6,000.", avoid:""}
   ]},
  {id:"s4", tag:"orig", c:"death", title:"Profit up to death: turnover basis", mins:6,
   q:"P, Q and R share 2:1:1. R died on 31 July 2026. Last year's sales ₹10,00,000; profit ₹1,50,000. Sales from 1 April to 31 July 2026: ₹3,00,000.",
   steps:[
     {label:"Profit rate", prompt:"Profit as % of sales", kind:"num", ans:15, tol:0.01, hint:"1,50,000 ÷ 10,00,000 × 100.", formula:"Profit ÷ Sales × 100", why:"15%.", avoid:""},
     {label:"Profit to date", prompt:"Profit up to 31 July (₹)", kind:"num", ans:45000, hint:"3,00,000 × 15%.", formula:"Sales to date × rate", why:"45,000.", avoid:""},
     {label:"R's share", prompt:"R's share (₹)", kind:"num", ans:11250, hint:"× 1/4.", formula:"× R's share", traps:[{v:15000, why:"R's share is 1/4 (2:1:1), not 1/3."}], why:"45,000 × 1/4 = 11,250.", avoid:"Total of ratio 2 + 1 + 1 = 4."}
   ]}
],
lab:[
  {id:"L0", tag:"orig", level:"Easy", c:"goodwill", title:"Retiring partner's goodwill",
   q:"A, B and C share profits 3:2:1. C retires on 31 March 2026. Goodwill of the firm is ₹1,20,000. A and B will continue to share profits 3:2. Pass the journal entry for goodwill.",
   format:{type:"journal", entries:[{label:"C's share of goodwill", date:"2026 Mar 31", lines:[{a:"capA", dr:12000, why:"C's goodwill 1,20,000 × 1/6 = 20,000; gaining ratio 3:2 → A pays 12,000."},{a:"capB", dr:8000},{a:"capC", cr:20000}], narr:"(Being C's share of goodwill adjusted to gaining partners' capitals in 3:2)"}]}},
  {id:"L1", tag:"board", level:"Medium", c:"entries", title:"Retirement: journal entries",
   q:"A, B and C share profits 3:2:1. Capitals on 31 March 2026: A ₹1,20,000, B ₹80,000, C ₹60,000. General Reserve ₹36,000. C retires on that date. Building is appreciated by ₹24,000 and furniture reduced by ₹6,000. Goodwill of the firm is ₹1,20,000; A and B continue in 3:2. C is paid ₹29,000 in cash and the balance is transferred to his loan account. Pass the journal entries.",
   format:{type:"journal", entries:[
     {label:"Building appreciated", date:"2026 Mar 31", lines:[{a:"building", dr:24000},{a:"reval", cr:24000}], narr:"(Being building appreciated)"},
     {label:"Furniture reduced", date:"2026 Mar 31", lines:[{a:"reval", dr:6000},{a:"furn", cr:6000}], narr:"(Being furniture reduced)"},
     {label:"Revaluation profit", date:"2026 Mar 31", lines:[{a:"reval", dr:18000},{a:"capA", cr:9000, why:"All partners, old ratio 3:2:1."},{a:"capB", cr:6000},{a:"capC", cr:3000, why:"The retiring partner also shares it."}], narr:"(Being revaluation profit transferred in old ratio)"},
     {label:"General Reserve", date:"2026 Mar 31", lines:[{a:"gr", dr:36000},{a:"capA", cr:18000},{a:"capB", cr:12000},{a:"capC", cr:6000}], narr:"(Being general reserve distributed in old ratio)"},
     {label:"Goodwill", date:"2026 Mar 31", lines:[{a:"capA", dr:12000},{a:"capB", dr:8000},{a:"capC", cr:20000}], narr:"(Being C's share of goodwill adjusted)"},
     {label:"C settled", date:"2026 Mar 31", lines:[{a:"capC", dr:89000, why:"60,000 + 3,000 + 6,000 + 20,000."},{a:"cash", cr:29000},{a:"loanC", cr:60000, why:"89,000 − 29,000."}], narr:"(Being amount due to C paid partly in cash and the balance transferred to his loan account)"}
   ]}},
  {id:"L2", tag:"board", level:"Medium", c:"reval", title:"Revaluation Account", ref:"L1",
   q:"Using worksheet L1, prepare the Revaluation Account.",
   format:{type:"tacc", name:"Revaluation Account", heads:["Particulars","₹","Particulars","₹"], date:"2026 Mar 31",
    left:[{a:"furn", amt:6000, p:"To Furniture A/c"},{a:"capA", amt:9000, p:"To A's Capital A/c (profit)", al:RV("a")},{a:"capB", amt:6000, p:"To B's Capital A/c (profit)", al:RV("b")},{a:"capC", amt:3000, p:"To C's Capital A/c (profit)", al:RV("c")}],
    right:[{a:"building", amt:24000, p:"By Building A/c"}], total:24000}},
  {id:"L3", tag:"board", level:"Hard", c:"due", title:"Partners' Capital Accounts", ref:"L1",
   q:"Using worksheet L1, complete the Partners' Capital Accounts. Leave a cell blank where the partner has no amount.",
   format:{type:"grid", name:"Partners' Capital Accounts", head:["Dr. Particulars","A (₹)","B (₹)","C (₹)","Cr. Particulars","A (₹)","B (₹)","C (₹)"],
    rows:[
      ["To C's Capital A/c (goodwill)",{a:12000},{a:8000},{a:null},"By Balance b/d",{a:120000},{a:80000},{a:60000}],
      ["To Cash A/c",{a:null},{a:null},{a:29000},"By Revaluation A/c",{a:9000},{a:6000},{a:3000}],
      ["To C's Loan A/c",{a:null},{a:null},{a:60000},"By General Reserve A/c",{a:18000},{a:12000},{a:6000}],
      ["To Balance c/d",{a:135000},{a:90000},{a:null, why:"C's account is closed: no balance."},"By A's and B's Capital A/cs (goodwill)",{a:null},{a:null},{a:20000}],
      ["Total",{a:147000},{a:98000},{a:89000},"Total",{a:147000},{a:98000},{a:89000}]]}},
  {id:"L4", tag:"board", level:"Medium", c:"death", title:"Death: profit to date and transfer to executor",
   q:"X, Y and Z share 2:2:1. Z died on 30 June 2026. His share of profit up to the date of death is based on last year's profit of ₹1,20,000. After all other adjustments, Z's Capital A/c shows ₹64,000 before crediting this profit. Pass the entries for (i) Z's share of profit and (ii) transfer of his balance to his executor.",
   format:{type:"journal", entries:[
     {label:"Z's share of profit to date of death", date:"2026 Jun 30", lines:[{a:"plsus", dr:6000, why:"1,20,000 × 3/12 × 1/5 = 6,000."},{a:"capZ", cr:6000}], narr:"(Being Z's share of profit up to the date of death)"},
     {label:"Transfer to executor", date:"2026 Jun 30", lines:[{a:"capZ", dr:70000, why:"64,000 + 6,000."},{a:"exeZ", cr:70000}], narr:"(Being the amount due to Z transferred to his executor's account)"}
   ]}},
  {id:"L5", tag:"orig", level:"Hard", c:"death", title:"Z's Executor's Account",
   q:"Continuing L4: on 30 June 2026 ₹30,000 is paid to Z's executor by cheque. The balance remains payable. Prepare Z's Executor's Account up to 30 June 2026.",
   format:{type:"tacc", name:"Z's Executor's Account", heads:["Particulars","₹","Particulars","₹"], date:"2026 Jun 30",
    left:[{a:"bank", amt:30000, p:"To Bank A/c", why:"Paid by cheque."},{a:"bal", amt:40000, p:"To Balance c/d", why:"70,000 − 30,000 still payable."}],
    right:[{a:"capZ", amt:70000, p:"By Z's Capital A/c"}], total:70000}}
],
blanks:[
  {id:"B1", t:"Journal", type:"journal", rows:8},
  {id:"B2", t:"Revaluation Account", type:"tacc", rows:6, heads:["Particulars","₹","Particulars","₹"]},
  {id:"B3", t:"Partners' Capital Accounts (3 partners)", type:"grid", rows:7, head:["Dr. Particulars","Partner 1","Partner 2","Partner 3","Cr. Particulars","Partner 1","Partner 2","Partner 3"]},
  {id:"B4", t:"Executor's / Loan Account", type:"tacc", rows:5, heads:["Particulars","₹","Particulars","₹"]}
],
mistakes:[
  {id:"m1", c:"goodwill", q:"C retires; his share of goodwill ₹20,000 (gaining ratio A:B 3:2). Entry passed:", shown:[["C's Capital A/c","Dr",20000,""],["To A's Capital A/c","",null,12000],["To B's Capital A/c","",null,8000]],
   opts:["Sides reversed: A and B (gainers) are debited, C is credited","Amounts should be equal","Goodwill A/c should be raised","Nothing is wrong"], a:0, why:"The retiring partner receives goodwill."},
  {id:"m2", c:"reserve", q:"General Reserve ₹36,000 at C's retirement (old 3:2:1):", shown:[["General Reserve A/c","Dr",36000,""],["To A's Capital A/c","",null,21600],["To B's Capital A/c","",null,14400]],
   opts:["C must also get his share: all partners in old ratio (18,000, 12,000, 6,000)","Reserve should be debited","It should be carried forward","Nothing is wrong"], a:0, why:"Reserves were built while C was a partner."},
  {id:"m3", c:"ratio", q:"A, B, C 3:2:1; B retires; A and C will share 5:3. B's goodwill ₹24,000. Entry passed:", shown:[["A's Capital A/c","Dr",18000,""],["C's Capital A/c","Dr",6000,""],["To B's Capital A/c","",null,24000]],
   opts:["Gaining ratio is 3:5 (A 1/8, C 5/24): A 9,000, C 15,000","Amount should be ₹72,000","B should be debited","Nothing is wrong"], a:0, why:"When a new ratio is given, compute gains: they differ from the old ratio."},
  {id:"m4", c:"due", q:"C's dues ₹89,000 are transferred to his loan:", shown:[["C's Loan A/c","Dr",89000,""],["To C's Capital A/c","",null,89000]],
   opts:["Sides reversed: C's Capital Dr / To C's Loan A/c","Should be paid only in cash","Amount should be ₹60,000","Nothing is wrong"], a:0, why:"Closing the capital account means debiting it."},
  {id:"m5", c:"death", q:"Z (share 1/5) died after 3 months; last year's profit ₹1,20,000. Entry:", shown:[["Profit and Loss Suspense A/c","Dr",24000,""],["To Z's Capital A/c","",null,24000]],
   opts:["Only 3 months' profit: 1,20,000 × 3/12 × 1/5 = 6,000","Should be credited to P&L Suspense","Should go to Z's Loan","Nothing is wrong"], a:0, why:"₹24,000 is a full year's share."}
],
cases:[
  {id:"c1", tag:"board", title:"Sunrise Traders",
   story:"Pooja, Raghav and Sameer were partners in Sunrise Traders sharing profits 2:2:1. Sameer died on 31 August 2026. The deed provides that a deceased partner's executors get: his capital (₹80,000 on 1 April 2026), his share of goodwill (firm's goodwill valued at ₹1,50,000), his share of profit up to death based on the average of the last three years' profits (₹1,00,000, ₹1,20,000 and ₹1,40,000), and interest on capital at 6% p.a. His drawings up to death were ₹9,000.",
   qs:[
     {type:"num", c:"goodwill", q:"Sameer's share of goodwill (₹)", ans:30000, why:"1,50,000 × 1/5."},
     {type:"num", c:"death", q:"Sameer's share of profit up to death (₹)", ans:10000, why:"Average profit 1,20,000; April to August = 5 months: 1,20,000 × 5/12 × 1/5 = 10,000."},
     {type:"num", c:"due", q:"Interest on Sameer's capital up to death (₹)", ans:2000, why:"80,000 × 6% × 5/12 = 2,000."},
     {type:"mcq", c:"goodwill", q:"Pooja and Raghav continue equally. Sameer's goodwill is borne by…", opts:["Pooja and Raghav equally","Pooja only","All three partners","Nobody"], a:0, why:"Each gains 1/2 − 2/5 = 1/10, so 1:1."},
     {type:"mcq", c:"death", q:"The amount due to Sameer is transferred to…", opts:["Sameer's Executor's A/c","General Reserve","Pooja's Capital A/c","Revaluation A/c"], a:0, why:"Dues of a deceased partner go to his executors."}
   ]}
],
games:{
  names:{bs:"Dues Sorter", profit:"Amount Due Master"},
  obj:{dc:"Choose the correct entry for each retirement or death transaction.", bs:"Sort what increases or reduces the retiring partner's dues.", profit:"Build up the retiring partner's amount due item by item."},
  cc:{bs:"due", profit:"due", missing:"death", escape:"goodwill", casegame:"death", detective:"goodwill", race:"entries"},
  dc:[
    {t:"Retiring partner's share of goodwill adjusted.", ok:"Dr Gaining Partners' Capital A/cs · Cr Retiring Partner's Capital A/c", bad:["Dr Retiring Partner's Capital A/c · Cr Gaining Partners' Capital A/cs","Dr Goodwill A/c · Cr Retiring Partner's Capital A/c","Dr All Partners' Capital A/cs · Cr Goodwill A/c"], c:"goodwill"},
    {t:"Goodwill in the books written off at retirement.", ok:"Dr All Partners' Capital A/cs (old ratio) · Cr Goodwill A/c", bad:["Dr Remaining Partners' Capital A/cs · Cr Goodwill A/c","Dr Goodwill A/c · Cr All Partners' Capital A/cs","Dr Revaluation A/c · Cr Goodwill A/c"], c:"goodwill"},
    {t:"General Reserve distributed at retirement.", ok:"Dr General Reserve A/c · Cr All Partners' Capital A/cs (old ratio)", bad:["Dr General Reserve A/c · Cr Remaining Partners' Capital A/cs","Dr All Partners' Capital A/cs · Cr General Reserve A/c","Dr General Reserve A/c · Cr Retiring Partner's Loan A/c"], c:"reserve"},
    {t:"Amount due to retiring partner paid in cash.", ok:"Dr Retiring Partner's Capital A/c · Cr Cash A/c", bad:["Dr Cash A/c · Cr Retiring Partner's Capital A/c","Dr Retiring Partner's Loan A/c · Cr Cash A/c","Dr Gaining Partners' Capital A/cs · Cr Cash A/c"], c:"due"},
    {t:"Amount due transferred to retiring partner's loan.", ok:"Dr Retiring Partner's Capital A/c · Cr Retiring Partner's Loan A/c", bad:["Dr Retiring Partner's Loan A/c · Cr Retiring Partner's Capital A/c","Dr Cash A/c · Cr Retiring Partner's Loan A/c","Dr Retiring Partner's Capital A/c · Cr Cash A/c"], c:"due"},
    {t:"Deceased partner's share of profit up to death.", ok:"Dr Profit and Loss Suspense A/c · Cr Deceased Partner's Capital A/c", bad:["Dr Deceased Partner's Capital A/c · Cr P&L Suspense A/c","Dr P&L Appropriation A/c · Cr Executor's A/c","Dr Cash A/c · Cr Deceased Partner's Capital A/c"], c:"death"},
    {t:"Deceased partner's balance transferred.", ok:"Dr Deceased Partner's Capital A/c · Cr Executor's A/c", bad:["Dr Executor's A/c · Cr Deceased Partner's Capital A/c","Dr Deceased Partner's Capital A/c · Cr Cash A/c only","Dr Remaining Partners' Capital A/cs · Cr Executor's A/c"], c:"death"},
    {t:"Payment to the executor by cheque.", ok:"Dr Executor's A/c · Cr Bank A/c", bad:["Dr Bank A/c · Cr Executor's A/c","Dr Deceased Partner's Capital A/c · Cr Bank A/c","Dr Executor's A/c · Cr Cash only"], c:"death"},
    {t:"Revaluation loss at retirement.", ok:"Dr All Partners' Capital A/cs (old ratio) · Cr Revaluation A/c", bad:["Dr Revaluation A/c · Cr All Partners' Capital A/cs","Dr Remaining Partners' Capital A/cs · Cr Revaluation A/c","Dr Retiring Partner's Loan A/c · Cr Revaluation A/c"], c:"reval"},
    {t:"Interest on retiring partner's loan for the year.", ok:"Dr Interest on Loan A/c · Cr Retiring Partner's Loan A/c", bad:["Dr Retiring Partner's Loan A/c · Cr Interest A/c","Dr Retiring Partner's Capital A/c · Cr Interest A/c","Dr Cash A/c · Cr Interest A/c"], c:"due"}
  ],
  bs:{c:"due", title:"Does each item increase or reduce what the retiring partner gets?",
    bins:["Increases his dues","Reduces his dues","Does not concern him"],
    items:[{t:"His share of goodwill", b:0},{t:"His share of revaluation profit", b:0},{t:"His share of General Reserve", b:0},{t:"Interest on his capital to date", b:0},{t:"His share of profit to date", b:0},
      {t:"His drawings", b:1},{t:"Interest on his drawings", b:1},{t:"His share of accumulated loss", b:1},{t:"His share of revaluation loss", b:1},
      {t:"Profits after his retirement", b:2, why:"He is no longer a partner."},{t:"Capital brought later by continuing partners", b:2, why:"Only the continuing partners are affected."}]},
  race:[
    {t:"Goodwill ₹90,000; retiring partner's share 1/3. Credited to him?", ok:"Gaining Partners' Capital A/cs Dr → Retiring Partner's Capital A/c", bad:["Retiring Partner's Capital A/c Dr → Gaining Partners' Capital A/cs","Goodwill A/c Dr → Retiring Partner's Capital A/c"], amt:30000, c:"goodwill"},
    {t:"Reserve ₹50,000; retiring partner's share 1/5.", ok:"General Reserve A/c Dr → All Partners' Capital A/cs", bad:["General Reserve A/c Dr → Remaining Partners' Capital A/cs","All Partners' Capital A/cs Dr → General Reserve A/c"], amt:10000, c:"reserve"},
    {t:"Due ₹75,000; cash paid ₹25,000; balance to loan. Loan amount?", ok:"Retiring Partner's Capital A/c Dr → Retiring Partner's Loan A/c", bad:["Retiring Partner's Loan A/c Dr → Retiring Partner's Capital A/c","Cash A/c Dr → Retiring Partner's Loan A/c"], amt:50000, c:"due"},
    {t:"Last year's profit ₹1,80,000; partner (1/3) dies after 4 months. His profit share?", ok:"P&L Suspense A/c Dr → Deceased Partner's Capital A/c", bad:["Deceased Partner's Capital A/c Dr → P&L Suspense A/c","P&L A/c Dr → Executor's A/c"], amt:20000, c:"death"},
    {t:"Building ₹2,00,000 appreciated by 10% at retirement.", ok:"Building A/c Dr → Revaluation A/c", bad:["Revaluation A/c Dr → Building A/c","Building A/c Dr → Retiring Partner's Capital A/c"], amt:20000, c:"reval"},
    {t:"Executor paid ₹40,000 by cheque.", ok:"Executor's A/c Dr → Bank A/c", bad:["Bank A/c Dr → Executor's A/c","Deceased Partner's Capital A/c Dr → Bank A/c"], amt:40000, c:"death"}
  ],
  missing:[
    {q:"A:B:C 2:2:1. C retires; A and B continue equally. A's gain = ?", kind:"frac", ans:[1,10], why:"1/2 − 2/5 = 1/10.", c:"ratio"},
    {q:"Retiring partner's goodwill credited ₹15,000 for a 1/4 share. Firm's goodwill = ?", kind:"num", ans:60000, why:"15,000 × 4.", c:"goodwill"},
    {q:"Last year's profit ₹96,000; partner with 1/4 share dies after 6 months. His share = ?", kind:"num", ans:12000, why:"96,000 × 6/12 × 1/4.", c:"death"},
    {q:"Sales last year ₹8,00,000, profit ₹1,20,000; sales to date of death ₹2,00,000; share 1/3. His share = ?", kind:"num", ans:10000, why:"15% × 2,00,000 = 30,000 × 1/3.", c:"death"},
    {q:"Dues ₹1,10,000; loan transferred ₹70,000. Cash paid = ?", kind:"num", ans:40000, why:"1,10,000 − 70,000.", c:"due"},
    {q:"A, B, C 5:3:2; C retires; A and B take his share 1:1. B's new share = ?", kind:"frac", ans:[2,5], why:"3/10 + 1/10 = 4/10 = 2/5.", c:"ratio"}
  ],
  profit:{from:60000, ask:"amount due to C now?", plus:"addition", minus:"deduction", c:"due", start:"C's capital is ₹60,000. Type the amount due to him after each item.", base:"C retires; old ratio 3:2:1.",
    steps:[{t:"Share of revaluation profit ₹3,000", v:3000},{t:"Share of General Reserve ₹6,000", v:6000},{t:"Share of goodwill ₹20,000", v:20000},{t:"Drawings ₹4,000", v:-4000},{t:"Interest on drawings ₹200", v:-200}],
    final:{q:"₹25,000 is paid in cash. Amount transferred to C's Loan A/c = ?", ans:59800, why:"84,800 − 25,000.", hint:"Amount due − cash paid."}},
  escape:{story:"The retiring partner's farewell file is locked behind four doors. Each door opens with a retirement calculation.",
    locks:[
      {room:"Door 1: Gaining Gate", q:"A, B, C share 4:3:3. C retires; A and B continue 3:2. A's gain as a/b in lowest terms. Code = a + b.", ans:6, hint:"3/5 − 4/10 = 2/10 = 1/5 → 1 + 5.", c:"ratio"},
      {room:"Door 2: Goodwill Gate", q:"Goodwill ₹1,00,000. C's share 3/10. Code = C's goodwill.", ans:30000, hint:"1,00,000 × 3/10.", c:"goodwill"},
      {room:"Door 3: Time Gate", q:"Average profit ₹1,44,000; partner (1/3) dies on 31 October (7 months). Code = his share of profit.", ans:28000, hint:"1,44,000 × 7/12 × 1/3.", c:"death"},
      {room:"Door 4: Settlement Gate", q:"Capital ₹50,000 + goodwill ₹15,000 + reserve ₹5,000 − revaluation loss ₹2,000. Code = amount due.", ans:68000, hint:"50,000 + 15,000 + 5,000 − 2,000.", c:"due"}
    ]}
},
revision:{
  summary:["Retirement/death = reconstitution; gaining ratio = New − Old share.","No ratio given → continuing partners keep old proportion: gaining ratio = their old ratio.","Goodwill: Gaining partners' Capital Dr → Retiring partner's Capital Cr (his share of goodwill). Old goodwill written off by all, old ratio.","Revaluation and reserves → all partners including the retiring one, old ratio.","Amount due = Capital + goodwill + reserves + revaluation profit + profit/interest to date − drawings − losses.","Settlement: cash, or transfer to Loan A/c (6% p.a. if not agreed, Section 37).","Death: profit to date by time or turnover basis → P&L Suspense Dr; balance to Executor's A/c."],
  defs:[["Retirement","A partner leaving the firm while the others continue the business."],["Gaining ratio","The ratio in which continuing partners acquire the retiring partner's share: New share − Old share."],["Executor","The legal representative who receives a deceased partner's dues."],["Profit and Loss Suspense A/c","A temporary account debited with a deceased partner's share of profit up to death, closed to the P&L at year end."]],
  flash:[{f:"Gaining ratio",b:"New share − Old share"},{f:"Retiring partner's goodwill entry",b:"Gainers' Capital Dr → Retiring partner's Capital Cr"},{f:"Reserves at retirement",b:"All partners, old ratio"},{f:"Unpaid dues (Sec. 37)",b:"6% p.a. interest or share of profit"},{f:"Profit to death: time basis",b:"Profit × months/12 × share"},{f:"Profit to death: turnover basis",b:"Sales to date × profit % × share"},{f:"Deceased partner's balance",b:"Transferred to his Executor's A/c"}],
  treat:[["Goodwill","Gaining partners' Capital Dr → Retiring partner's Capital"],["Existing goodwill","All partners' Capital Dr (old ratio) → Goodwill"],["Reserves","Reserve Dr → All partners' Capital (old ratio)"],["Payment in cash","Retiring partner's Capital Dr → Cash"],["Transfer to loan","Retiring partner's Capital Dr → his Loan A/c"],["Profit to death","P&L Suspense Dr → Deceased partner's Capital"],["Balance of deceased","Deceased partner's Capital Dr → Executor's A/c"]],
  mistakes:["Crediting gainers and debiting the retiring partner for goodwill.","Leaving the retiring partner out of reserves or revaluation.","Assuming gaining ratio = old ratio even when a new ratio is given.","Taking a full year's profit for a partner who died midway.","Debiting the Loan A/c when transferring dues to a loan."],
  fib:[{q:"Gaining ratio = New share − ______ share.", a:["old"]},{q:"A deceased partner's dues are transferred to his ______ account.", a:["executor","executors","executor s"]},{q:"Retiring partner's share of goodwill is debited to the ______ partners.", a:["gaining","continuing","remaining"]},{q:"Profit up to death is debited to Profit and Loss ______ A/c.", a:["suspense"]}],
  mcq:[
    {q:"A, B, C share 2:2:1. A retires; B and C continue 3:2. C's gain:", opts:["1/5","2/5","1/10","Nil"], a:0, why:"2/5 − 1/5 = 1/5.", c:"ratio"},
    {q:"Retiring partner's share of goodwill is paid by…", opts:["Gaining partners in gaining ratio","All partners in old ratio","The firm from cash","The new partner"], a:0, why:"Gainers pay.", c:"goodwill"},
    {q:"Reserves at the time of retirement are shared by…", opts:["All partners in old ratio","Continuing partners only","Retiring partner only","Gaining partners"], a:0, why:"Past profits.", c:"reserve"},
    {q:"Profit last year ₹60,000; partner (1/3) dies on 30 September. His share (time basis):", opts:["₹10,000","₹20,000","₹30,000","₹5,000"], a:0, why:"60,000 × 6/12 × 1/3.", c:"death"},
    {q:"Unpaid dues of a retiring partner earn (no agreement):", opts:["6% p.a. interest or share of profits","12% p.a.","Nothing","Bank rate"], a:0, why:"Section 37.", c:"due"},
    {q:"Amount due to a retiring partner transferred to loan: entry", opts:["Retiring Partner's Capital Dr / To his Loan","Loan Dr / To Capital","Cash Dr / To Loan","Capital Dr / To Cash"], a:0, why:"Close the capital account.", c:"due"}
  ],
  ar:[
    {a:"The retiring partner shares the revaluation profit.", r:"The change in values took place while he was a partner.", ans:0, why:"Both true; R explains A.", c:"reval"},
    {a:"Gaining ratio is always equal to the old ratio of continuing partners.", r:"Continuing partners may agree on any new ratio.", ans:3, why:"A false; R true.", c:"ratio"},
    {a:"A deceased partner's share of profit is credited to his capital account.", r:"He earned profit up to the date of his death.", ans:0, why:"Both true; R explains A.", c:"death"}
  ],
  numericals:["L1","L2","L3","L4","s1","s4"]
},
test:{mins:30, items:[
  {type:"mcq", m:1, c:"ratio", q:"Gaining ratio is used to share…", opts:["The retiring partner's goodwill","General Reserve","Revaluation profit","Accumulated loss"], a:0, why:"Only goodwill."},
  {type:"mcq", m:1, c:"due", q:"A retiring partner's loan appears in the new Balance Sheet as…", opts:["A liability","An asset","Capital","Not shown"], a:0, why:"The firm owes it."},
  {type:"mcq", m:1, c:"death", q:"Deceased partner's share of profit is debited to…", opts:["Profit and Loss Suspense A/c","His Executor's A/c","Revaluation A/c","Goodwill A/c"], a:0, why:"Standard entry."},
  {type:"mcq", m:1, c:"reserve", q:"Advertisement Suspense ₹12,000 at C's retirement (old 1:1:1). C's share:", opts:["₹4,000 debited","₹4,000 credited","₹6,000 debited","Nil"], a:0, why:"12,000 × 1/3, a loss."},
  {type:"mcq", m:1, c:"goodwill", q:"Goodwill ₹48,000; X, Y, Z share 2:1:1; Z retires; X and Y continue 2:1. Amount debited to X:", opts:["₹8,000","₹12,000","₹6,000","₹4,000"], a:0, why:"Z's goodwill 12,000 × 2/3."},
  {type:"mcq", m:1, c:"due", q:"Section 37: unpaid dues earn interest at…", opts:["6% p.a.","9% p.a.","12% p.a.","Nil"], a:0, why:"Or share of profit at his option."},
  {type:"ar", m:1, c:"goodwill", a:"At retirement, the retiring partner is debited with his share of goodwill.", r:"Goodwill is a gain to the continuing partners.", ans:3, why:"A false (he is credited); R true."},
  {type:"ar", m:1, c:"death", a:"Under the turnover basis, profit to date of death = sales to date × last year's profit rate.", r:"Profit is assumed to accrue evenly with sales.", ans:0, why:"Both true; R explains A."},
  {type:"ratio", m:3, c:"ratio", q:"A, B and C share 5:3:2. C retires; A and B take his share in the ratio 2:1. New ratio A : B =", ans:[19,11], why:"A 15/30 + 4/30 = 19/30; B 9/30 + 2/30 = 11/30."},
  {type:"nums", m:3, c:"death", q:"P, Q, R share 3:2:1. R dies on 31 May 2026. Last year's sales ₹12,00,000 and profit ₹1,80,000; sales from 1 April to 31 May 2026 ₹2,40,000.", parts:[{p:"Profit up to death (firm) (₹)", ans:36000, why:"15% × 2,40,000."},{p:"R's share (₹)", ans:6000, why:"36,000 × 1/6."}]},
  {type:"nums", m:4, c:"due", q:"B retires. Capital ₹70,000; share of reserve ₹8,000; share of revaluation loss ₹3,000; share of goodwill ₹25,000; drawings ₹5,000. ₹35,000 is paid in cash; rest to loan.", parts:[{p:"Amount due (₹)", ans:95000, why:"70,000 + 8,000 − 3,000 + 25,000 − 5,000."},{p:"Loan amount (₹)", ans:60000, why:"95,000 − 35,000."}]},
  {type:"self", m:3, c:"ratio", q:"Give any three items that are credited to a retiring partner's capital account.",
   model:"(i) His share of goodwill. (ii) His share of General Reserve / accumulated profits. (iii) His share of revaluation profit. Also correct: interest on capital to date; his share of profit to date; salary/commission due.",
   crit:["One correct item","A second correct item","A third correct item"]},
  {type:"journal", m:4, c:"goodwill", q:"X, Y and Z share 2:2:1. Z retires on 31 March 2026. Goodwill appears in the books at ₹10,000. The firm's goodwill is valued at ₹50,000; X and Y continue equally. Pass the journal entries for goodwill.",
   entries:[
     {label:"Existing goodwill written off", date:"2026 Mar 31", lines:[{a:"capX", dr:4000, why:"Old ratio 2:2:1."},{a:"capY", dr:4000},{a:"capZ", dr:2000},{a:"goodwill", cr:10000}], narr:"(Being existing goodwill written off in old ratio)"},
     {label:"Z's share of goodwill", date:"2026 Mar 31", lines:[{a:"capX", dr:5000, why:"Z's goodwill 50,000 × 1/5 = 10,000; gaining ratio 1:1."},{a:"capY", dr:5000},{a:"capZ", cr:10000}], narr:"(Being Z's share of goodwill adjusted)"}
   ]}
]}
});
})();
