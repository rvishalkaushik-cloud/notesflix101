/* Notesflix 101 · Accountancy Lab content · Class XII · Admission of a Partner
   Content only. The engine (lab/lab.js) draws every screen from this object.
   Source basis: CBSE 2026-27 Accountancy (055) syllabus, Unit 1 Accounting for Partnership Firms; NCERT Class XII
   Accountancy Part I, admission of a partner; AS-26 (Intangible Assets) for goodwill.
   Every question here is an ORIGINAL practice question written for Notesflix 101 (tag "orig") or written in
   CBSE board style (tag "board"). None is labelled as an NCERT question or a previous-year question.
   Run `node lab/tools/validate.js` after editing: it recomputes every answer from the given facts. */
(function(){
function cap(x){ return {n: x + "'s Capital A/c", al:[x + " capital", "capital " + x, "capital of " + x, x + " cap", "capital a c of " + x]}; }

NFLab.register({
id:"admission", cls:"XII", subject:"Accountancy", unit:"Accounting for Partnership Firms", num:"4",
title:"Admission of a Partner",
tagline:"New ratio, sacrifice, goodwill, revaluation, reserves and capitals: every adjustment when a new partner joins.",
notesLink:"../learn/xii-acc.html",

icon:"🤝",
home:{q:"What is Admission of a Partner?", ticks:["A new person becomes a partner.","The profit sharing ratio changes.","Some adjustments are needed (goodwill, revaluation, reserves)."]},

/* formats this chapter switches on (the engine hides the rest) */
formats:["journal","ledger","capital","balance"],

concepts:{
  ratio:{n:"New profit sharing ratio"}, sacrifice:{n:"Sacrificing ratio"}, goodwill:{n:"Goodwill premium (AS-26)"},
  hidden:{n:"Hidden goodwill"}, reval:{n:"Revaluation of assets and liabilities", go:"lab"}, reserve:{n:"Reserves and accumulated profits/losses"},
  capital:{n:"Adjustment of capitals", go:"lab"}, entries:{n:"Journal entries and formats", go:"lab"}
},

/* every account name the worksheets can expect. n = how it prints; al = other names a student may type */
acc:{
  cash:{n:"Cash A/c", al:["cash","bank","cash bank","bank a c"]},
  prem:{n:"Premium for Goodwill A/c", al:["premium for goodwill","premium","goodwill premium","premium goodwill"]},
  reval:{n:"Revaluation A/c", al:["revaluation","revaluation account","profit and loss adjustment"]},
  gr:{n:"General Reserve A/c", al:["general reserve","reserve"]},
  ifr:{n:"Investment Fluctuation Reserve A/c", al:["investment fluctuation reserve","ifr","investment fluctuation fund"]},
  inv:{n:"Investments A/c", al:["investments","investment"]},
  goodwill:{n:"Goodwill A/c", al:["goodwill"]},
  stock:{n:"Stock A/c", al:["stock","inventory","inventories"]},
  building:{n:"Building A/c", al:["building","buildings"]},
  land:{n:"Land A/c", al:["land","land and building"]},
  mach:{n:"Machinery A/c", al:["machinery","machine","plant and machinery","plant"]},
  furn:{n:"Furniture A/c", al:["furniture","furniture and fittings"]},
  debtors:{n:"Debtors", al:["debtors","sundry debtors","trade receivables","receivables"]},
  pdd:{n:"Provision for Doubtful Debts A/c", al:["provision for doubtful debts","provision for bad debts","provision for bad and doubtful debts","pdd","provision"]},
  creditors:{n:"Creditors", al:["creditors","sundry creditors","trade payables","payables"]},
  orent:{n:"Outstanding Rent A/c", al:["outstanding rent","rent outstanding"]},
  bal:{n:"Balance", al:["balance","balance c d","balance b d","balance cd","balance bd","bal c d","bal b d"]},
  capA:cap("A"), capZ:cap("Z"), capB:cap("B"), capC:cap("C"), capD:cap("D"), capP:cap("P"), capQ:cap("Q"), capR:cap("R"), capX:cap("X"), capY:cap("Y")
},

/* 01 · Chapter introduction */
intro:{
  hook:"A and B run a profitable shop. Business is growing, and they need more money and one more pair of hands. Their friend C is ready to join. The day C joins, the old agreement ends and a new one begins.",
  points:[
    "Admitting a new partner <b>reconstitutes</b> the firm: the old partnership deed ends and a new agreement starts. The business itself carries on.",
    "Under <b>Section 31 of the Indian Partnership Act, 1932</b>, a new partner can be admitted only with the <b>consent of all existing partners</b>, unless the partnership deed says otherwise.",
    "The new partner gets two rights: a right to <b>share in the assets</b> and a right to <b>share in the future profits</b> of the firm.",
    "Because the old partners give up part of their profit share, every gain, loss and reserve built up <b>before</b> the admission is settled among the <b>old partners only</b>."
  ],
  weight:"Board weightage: partnership accounting (Unit 1) carries the largest share of Part A marks. Admission questions usually come as a 6 or 8 mark numerical (Revaluation A/c, Capital A/cs, Balance Sheet) plus 1 to 3 mark questions on ratios and goodwill."
},

/* 02 · Learning objectives */
objectives:[
  "Calculate the new profit sharing ratio and the sacrificing ratio in every type of question.",
  "Treat goodwill as per AS-26: premium brought in cash, not brought in cash, partly brought, paid privately and hidden goodwill.",
  "Prepare the Revaluation Account and transfer its profit or loss to old partners.",
  "Distribute reserves and accumulated profits or losses among old partners.",
  "Adjust partners' capitals on the basis of the new partner's capital or the old partners' capitals.",
  "Prepare Partners' Capital Accounts and the new Balance Sheet in board format."
],

/* 03 · Prerequisite knowledge: a quick check before starting */
prereq:[
  {t:"Profit sharing ratio", d:"If A and B share profits 3:2, A gets 3/5 and B gets 2/5 of every rupee of profit.",
   check:{q:"A and B share profits 3:2. The profit is ₹50,000. What is B's share?", opts:["₹20,000","₹30,000","₹25,000","₹10,000"], a:0, why:"B's share = 50,000 × 2/5 = ₹20,000."}},
  {t:"Goodwill", d:"Goodwill is the value of a firm's reputation: its ability to earn more profit than a normal firm.",
   check:{q:"Which of these best describes goodwill?", opts:["The value of a firm's reputation and its ability to earn extra profit","The cash in the firm's bank account","The firm's building","A partner's drawings"], a:0, why:"Goodwill is an intangible asset: the money value of reputation and loyal customers."}},
  {t:"Debit and credit of capital", d:"A partner's Capital A/c is credited when the firm owes him more (capital brought, profit, reserve share) and debited when the firm owes him less (loss, drawings).",
   check:{q:"A partner's share of revaluation PROFIT is…", opts:["Credited to his Capital A/c","Debited to his Capital A/c","Debited to Cash A/c","Not recorded"], a:0, why:"Profit increases what the firm owes the partner, so his Capital A/c is credited."}}
],

/* 04 · Learn like Class 7: story mode. art = drawing from the engine's art library */
kid:[
  {id:"k1", c:"ratio", title:"A new friend joins the shop", art:"shop",
   story:"<p>Asha and Bunty run a small lemonade stall. Every ₹5 of profit, Asha takes ₹3 and Bunty takes ₹2. That is their <b>profit sharing ratio</b>: 3 : 2.</p><p>Summer comes and the stall gets busy. They invite their friend Chintu to join. Chintu says: <i>“I will work with you and bring money, but I want one-fifth of the profit.”</i></p><p>When Chintu joins, we say Chintu is <b>admitted as a partner</b>. In accounts, this is called <b>Admission of a Partner</b>.</p>",
   qa:[["Who joins?","Chintu, the new partner."],["What changes?","How the profit is cut: the old 3 : 2 rule ends and a new rule starts."],["Why does it matter?","Profit earned BEFORE Chintu joined belongs only to Asha and Bunty."],["How does it look in accounts?","We pass entries for the new ratio, goodwill, revaluation, reserves and capital."]],
   check:{q:"Chintu joins Asha and Bunty's stall. Chintu is the…", opts:["New partner","Old partner","Customer","Creditor"], a:0, why:"The person who joins an existing partnership is the new (incoming) partner."}},
  {id:"k2", c:"ratio", title:"Cutting the pizza again", art:"pizza",
   story:"<p>Think of the profit as a pizza cut into 5 slices: Asha eats 3, Bunty eats 2.</p><p>Chintu wants 1/5 of the pizza. So 4/5 is left for Asha and Bunty. If they keep sharing that leftover in their old way (3 : 2), Asha gets 3/5 of 4/5 = <b>12/25</b> and Bunty gets 2/5 of 4/5 = <b>8/25</b>. Chintu gets 1/5 = <b>5/25</b>.</p><p>The new way of cutting the pizza is the <b>new profit sharing ratio</b>: 12 : 8 : 5.</p>",
   qa:[["Who decides the new ratio?","All partners agree on it."],["Where does Chintu's slice come from?","From Asha's and Bunty's slices."],["Why multiply 3/5 by 4/5?","Because Asha now gets 3/5 of what is LEFT, not of the whole pizza."],["How is it written?","New ratio 12 : 8 : 5 (all over 25)."]],
   check:{q:"Old ratio 3 : 2. New partner takes 1/5. If the old partners share the rest in the old ratio, the new ratio is…", opts:["12 : 8 : 5","3 : 2 : 1","3 : 2 : 5","4 : 4 : 2"], a:0, why:"Remaining 4/5 split 3:2 gives 12/25 and 8/25; the new partner has 5/25."}},
  {id:"k3", c:"sacrifice", title:"Who gave up a slice?", art:"sacrifice",
   story:"<p>Before Chintu came, Asha had 3/5 = 15/25 of the pizza. Now she has 12/25. She <b>gave up</b> 3/25.</p><p>Bunty had 2/5 = 10/25. Now he has 8/25. He gave up 2/25.</p><p>The share a partner gives up is his <b>sacrifice</b>. Asha and Bunty gave up in the ratio 3 : 2. This is the <b>sacrificing ratio</b>.</p><p>Simple rule: <b>Sacrifice = Old share − New share</b>.</p>",
   qa:[["Who sacrifices?","The old partners whose share goes down."],["Where does the sacrifice go?","To the new partner."],["Why find it?","Because the goodwill money paid by the new partner goes to the partners who sacrificed, in this ratio."],["How?","Old share minus new share, for each old partner."]],
   check:{q:"Bunty's share falls from 10/25 to 8/25. His sacrifice is…", opts:["2/25","8/25","10/25","18/25"], a:0, why:"Sacrifice = old − new = 10/25 − 8/25 = 2/25."}},
  {id:"k4", c:"goodwill", title:"Paying for the good name", art:"goodwill",
   story:"<p>Asha and Bunty's stall is famous. Kids queue up every evening. Chintu gets these ready customers from Day 1 without doing the hard work of building the name.</p><p>So Chintu pays a little extra, called <b>premium for goodwill</b>. Say the stall's good name is worth ₹10,000. Chintu takes 1/5 of it, so he pays ₹2,000.</p><p>Who gets the ₹2,000? The friends who <b>gave up</b> their slices: Asha and Bunty, in the sacrificing ratio 3 : 2. Asha gets ₹1,200 and Bunty gets ₹800.</p><p>In accounts we do <b>not</b> open a Goodwill account for this. The money goes to a <b>Premium for Goodwill A/c</b> and then to the old partners' capital accounts.</p>",
   qa:[["Who pays?","The new partner."],["Who receives?","The old partners who sacrificed, in the sacrificing ratio."],["Why?","He enjoys the reputation and customers they built."],["How in accounts?","Cash A/c Dr → Premium for Goodwill A/c; then Premium for Goodwill A/c Dr → old partners' Capital A/cs."]],
   check:{q:"The goodwill premium paid by the new partner is shared by old partners in…", opts:["Sacrificing ratio","New ratio","Equal ratio always","Capital ratio"], a:0, why:"They are paid for what they gave up, so the sacrificing ratio is used."}},
  {id:"k5", c:"reval", title:"Checking the old price tags", art:"reval",
   story:"<p>Before Chintu joins, the friends check every old thing in the stall. The juicer was bought for ₹2,000 but is worn out: it is now worth only ₹1,500 (a <b>loss</b> of ₹500). The small shop space they own is now worth more (a <b>gain</b>).</p><p>These gains and losses happened while only Asha and Bunty were partners, so they belong to <b>them only</b>, in their old ratio.</p><p>Accountants record this in a <b>Revaluation Account</b>: losses on the left (debit), gains on the right (credit).</p>",
   qa:[["Who gets the gain or loss?","Old partners, in the old ratio."],["Where is it recorded?","Revaluation Account."],["Why before admission?","So the new partner neither gains nor loses from changes that happened before he joined."],["How?","Asset up or liability down = gain (credit). Asset down or liability up = loss (debit)."]],
   check:{q:"The juicer's value falls from ₹2,000 to ₹1,500. In the Revaluation A/c this ₹500 is a…", opts:["Loss, shown on the debit side","Gain, shown on the credit side","Gain, shown on the debit side","Not recorded"], a:0, why:"A fall in an asset's value is a loss, so Revaluation A/c is debited."}},
  {id:"k6", c:"reserve", title:"The old piggy bank", art:"piggy",
   story:"<p>Asha and Bunty saved ₹1,000 from past profits in a piggy bank (a <b>General Reserve</b>). Chintu did not help earn it.</p><p>So before Chintu joins, they break the piggy bank and share the ₹1,000 in their <b>old ratio</b> 3 : 2: Asha ₹600, Bunty ₹400.</p><p>If instead there was an old <b>loss</b> sitting in the books, Asha and Bunty bear it in the old ratio too.</p>",
   qa:[["Who shares the reserve?","Old partners only."],["In which ratio?","Old ratio."],["Why?","It was saved from profits earned before the new partner came."],["How?","General Reserve A/c Dr → old partners' Capital A/cs."]],
   check:{q:"General Reserve at the time of admission is shared by…", opts:["Old partners in the old ratio","All partners in the new ratio","New partner only","Nobody"], a:0, why:"Reserves are past profits, so only the old partners share them, in the old ratio."}},
  {id:"k7", c:"capital", title:"Balancing the money each puts in", art:"scale",
   story:"<p>After all the settling, Asha's capital is ₹12,000 and Bunty's is ₹8,000. Together ₹20,000 for 4/5 of the business.</p><p>If capital must match the profit share, then the whole business needs ₹20,000 × 5/4 = ₹25,000. Chintu's 1/5 means he should bring ₹5,000.</p><p>This is called <b>adjustment of capital</b>: making each partner's money in the business match his share.</p>",
   qa:[["Who brings money?","Usually the new partner, sometimes old partners bring or withdraw too."],["Why?","So capital stays in line with the profit share."],["How do we find total capital?","Combined old capital × reciprocal of their combined new share."],["Then?","New partner's capital = total capital × his share."]],
   check:{q:"Old partners' total adjusted capital is ₹80,000 for 4/5 share. The new partner (1/5) should bring…", opts:["₹20,000","₹16,000","₹1,00,000","₹80,000"], a:0, why:"Total = 80,000 × 5/4 = 1,00,000. New partner = 1,00,000 × 1/5 = ₹20,000."}}
],

/* drag-and-drop and one-minute activities for Class 7 mode */
kidActs:[
  {id:"ka1", type:"sort", title:"Gain or loss? Sort the price-tag checks", c:"reval",
   bins:["Gain (credit Revaluation)","Loss (debit Revaluation)"],
   items:[
     {t:"Building's value goes up", b:0, why:"An asset increasing is a gain."},
     {t:"Stock is found damaged", b:1, why:"An asset decreasing is a loss."},
     {t:"Creditors to be paid less than recorded", b:0, why:"A liability decreasing is a gain."},
     {t:"An unpaid electricity bill is found", b:1, why:"A new (unrecorded) liability is a loss."},
     {t:"An old computer, not in the books, is found", b:0, why:"An unrecorded asset brought into books is a gain."},
     {t:"Provision for doubtful debts is created", b:1, why:"Expecting some debtors not to pay reduces the asset value: a loss."}
   ]},
  {id:"ka2", type:"minute", title:"One-minute challenge: who gets it?", c:"reserve", secs:60,
   items:[
     {q:"General Reserve at admission goes to…", opts:["Old partners, old ratio","All partners, new ratio"], a:0},
     {q:"Revaluation profit goes to…", opts:["Old partners, old ratio","New partner only"], a:0},
     {q:"Goodwill premium goes to…", opts:["Sacrificing partners, sacrificing ratio","All partners, equally"], a:0},
     {q:"Loss in the books (debit balance of P&L) is borne by…", opts:["Old partners, old ratio","New partner"], a:0},
     {q:"Future profits after admission are shared in…", opts:["New ratio","Old ratio"], a:0},
     {q:"Premium paid privately to old partners: entry in firm's books?", opts:["No entry","Cash Dr, Premium Cr"], a:0}
   ]}
],

/* 05 · Class 12 detailed explanation. Each block: id, c (concept), title, html */
exam:[
  {id:"e1", c:"ratio", title:"Meaning and legal position",
   html:"<p><b>Admission of a partner</b> means taking a new person into an existing firm as a partner. It is a <b>reconstitution</b> of the firm: the existing agreement ends and a new agreement comes into force.</p><ul><li>As per <b>Section 31(1)</b> of the Indian Partnership Act, 1932, a new partner can be admitted only with the <b>consent of all existing partners</b>, subject to any contract between the partners.</li><li>The incoming partner acquires the right to <b>share in the assets</b> and in the <b>future profits</b> of the firm.</li><li>He generally brings capital and a premium for goodwill.</li></ul><p><b>Adjustments required at the time of admission</b></p><ol><li>New profit sharing ratio</li><li>Sacrificing ratio</li><li>Valuation and adjustment of goodwill</li><li>Revaluation of assets and reassessment of liabilities</li><li>Distribution of accumulated profits, reserves and losses</li><li>Adjustment of partners' capitals</li></ol>"},
  {id:"e2", c:"ratio", title:"New profit sharing ratio: four question types",
   html:"<p><b>Type 1. Only the new partner's share is given.</b> Assume old partners continue in the old ratio. Each old partner's new share = old share × (1 − new partner's share).</p><p class='eg'>A:B = 3:2, C gets 1/5. A = 3/5 × 4/5 = 12/25; B = 2/5 × 4/5 = 8/25; C = 1/5 = 5/25. <b>New ratio 12:8:5.</b></p><p><b>Type 2. New partner takes his share in a given ratio from old partners.</b> Split his share in that ratio and subtract from each old share.</p><p class='eg'>A:B = 3:2, C gets 1/5 equally from A and B. A = 3/5 − 1/10 = 5/10; B = 2/5 − 1/10 = 3/10; C = 2/10. <b>New ratio 5:3:2.</b></p><p><b>Type 3. New partner takes stated fractions from each old partner.</b> Subtract each fraction directly.</p><p class='eg'>A:B = 3:2, C takes 1/6 from A and 1/12 from B. A = 3/5 − 1/6 = 13/30 = 26/60; B = 2/5 − 1/12 = 19/60; C = 1/6 + 1/12 = 15/60. <b>New ratio 26:19:15.</b></p><p><b>Type 4. Old partners surrender a fraction of their own share.</b> A surrenders 1/3 of his share means A gives 1/3 × A's share.</p><p class='eg'>A:B = 3:2. A surrenders 1/3 of his share and B 1/4 of his share to C. A gives 3/5 × 1/3 = 1/5 (keeps 2/5); B gives 2/5 × 1/4 = 1/10 (keeps 3/10); C = 1/5 + 1/10 = 3/10. <b>New ratio 4:3:3.</b></p>"},
  {id:"e3", c:"sacrifice", title:"Sacrificing ratio",
   html:"<p><b>Sacrificing ratio</b> is the ratio in which the old partners give up (sacrifice) their share of profit in favour of the new partner.</p><p class='formula'>Sacrifice of a partner = Old share − New share</p><ul><li>It is needed to share the <b>goodwill premium</b> brought by the new partner.</li><li>If nothing is said about how the new partner gets his share, the old partners sacrifice in their <b>old ratio</b>, so sacrificing ratio = old ratio.</li><li>If an old partner's sacrifice works out <b>negative</b>, he is a gaining partner, not a sacrificing one.</li></ul>"},
  {id:"e4", c:"goodwill", title:"Treatment of goodwill (AS-26)",
   html:"<p>As per <b>AS-26</b>, only purchased goodwill is recorded. At admission no Goodwill Account is raised. The new partner compensates the sacrificing partners for their sacrifice, in the <b>sacrificing ratio</b>.</p><table class='tt'><thead><tr><th>Situation</th><th>Journal entry</th></tr></thead><tbody><tr><td>1. Premium brought in cash</td><td>Cash/Bank A/c Dr<br>&nbsp;&nbsp;To Premium for Goodwill A/c<br><br>Premium for Goodwill A/c Dr<br>&nbsp;&nbsp;To Sacrificing Partners' Capital A/cs (sacrificing ratio)</td></tr><tr><td>2. Premium not brought in cash</td><td>New Partner's Current A/c (or Capital A/c) Dr<br>&nbsp;&nbsp;To Sacrificing Partners' Capital A/cs</td></tr><tr><td>3. Premium partly brought in cash</td><td>Entry 1 for the cash part and Entry 2 for the balance.</td></tr><tr><td>4. Premium paid privately to old partners</td><td><b>No entry</b> in the firm's books.</td></tr><tr><td>5. Old partners withdraw the premium (fully or partly)</td><td>Sacrificing Partners' Capital A/cs Dr<br>&nbsp;&nbsp;To Cash/Bank A/c</td></tr><tr><td>6. Goodwill already appears in the books</td><td>Old Partners' Capital A/cs Dr (old ratio)<br>&nbsp;&nbsp;To Goodwill A/c</td></tr></tbody></table><p class='tip'>Board tip: never write “Cash A/c Dr To Goodwill A/c” at admission. Goodwill A/c is not raised; use <b>Premium for Goodwill A/c</b>.</p>"},
  {id:"e5", c:"hidden", title:"Hidden goodwill",
   html:"<p>When the goodwill of the firm is not given, it is calculated from the capital brought in by the new partner and his share.</p><p class='formula'>Total capital of new firm = New partner's capital × Reciprocal of his share</p><p class='formula'>Hidden goodwill = Total capital of new firm − (Old partners' adjusted capitals + New partner's capital)</p><p>Old partners' capitals are taken <b>after</b> adjusting reserves, accumulated profits/losses and revaluation profit/loss. The new partner's share of hidden goodwill is then treated like premium not brought in cash (debited to his Current/Capital A/c).</p><p class='eg'>C brings ₹60,000 for 1/4 share. A and B's adjusted capitals total ₹1,50,000. Total capital = 60,000 × 4 = 2,40,000. Hidden goodwill = 2,40,000 − (1,50,000 + 60,000) = <b>₹30,000</b>. C's share = 30,000 × 1/4 = ₹7,500.</p>"},
  {id:"e6", c:"reval", title:"Revaluation of assets and reassessment of liabilities",
   html:"<p>Assets and liabilities are revalued so that any gain or loss up to the date of admission is shared by the <b>old partners</b> in the <b>old ratio</b>. The <b>Revaluation Account</b> (also called Profit and Loss Adjustment A/c) records these changes.</p><table class='tt'><thead><tr><th>Change</th><th>Journal entry</th></tr></thead><tbody><tr><td>Increase in value of an asset</td><td>Asset A/c Dr<br>&nbsp;&nbsp;To Revaluation A/c</td></tr><tr><td>Decrease in value of an asset</td><td>Revaluation A/c Dr<br>&nbsp;&nbsp;To Asset A/c</td></tr><tr><td>Increase in a liability</td><td>Revaluation A/c Dr<br>&nbsp;&nbsp;To Liability A/c</td></tr><tr><td>Decrease in a liability</td><td>Liability A/c Dr<br>&nbsp;&nbsp;To Revaluation A/c</td></tr><tr><td>Unrecorded asset</td><td>Asset A/c Dr<br>&nbsp;&nbsp;To Revaluation A/c</td></tr><tr><td>Unrecorded liability</td><td>Revaluation A/c Dr<br>&nbsp;&nbsp;To Liability A/c</td></tr><tr><td>Profit on revaluation</td><td>Revaluation A/c Dr<br>&nbsp;&nbsp;To Old Partners' Capital A/cs (old ratio)</td></tr><tr><td>Loss on revaluation</td><td>Old Partners' Capital A/cs Dr (old ratio)<br>&nbsp;&nbsp;To Revaluation A/c</td></tr></tbody></table><p class='tip'>Memory code <b>“AU-LD = Gain”</b>: Asset Up or Liability Down is a gain (credit side). Everything else is a loss (debit side).</p>"},
  {id:"e7", c:"reserve", title:"Reserves and accumulated profits or losses",
   html:"<p>Reserves and undistributed profits or losses in the books on the date of admission belong to the <b>old partners</b> and are transferred to their capital accounts in the <b>old ratio</b>.</p><table class='tt'><thead><tr><th>Item</th><th>Journal entry</th></tr></thead><tbody><tr><td>General Reserve / Reserve Fund / Profit & Loss A/c (credit balance)</td><td>General Reserve A/c Dr<br>Profit and Loss A/c Dr<br>&nbsp;&nbsp;To Old Partners' Capital A/cs</td></tr><tr><td>Profit & Loss A/c (debit balance, a loss) or Advertisement Suspense / Deferred Revenue Expenditure</td><td>Old Partners' Capital A/cs Dr<br>&nbsp;&nbsp;To Profit and Loss A/c<br>&nbsp;&nbsp;To Advertisement Suspense A/c</td></tr><tr><td>Workmen Compensation Reserve (WCR)</td><td>Claim, if any, is paid out of it: WCR A/c Dr To Claim for Workmen Compensation A/c. Excess goes to old partners: WCR A/c Dr To Old Partners' Capital A/cs. A claim more than the reserve: the shortfall is debited to Revaluation A/c.</td></tr><tr><td>Investment Fluctuation Reserve (IFR)</td><td>Fall in market value of investments is met from IFR; the balance goes to old partners. A fall bigger than IFR: the excess is debited to Revaluation A/c.</td></tr></tbody></table>"},
  {id:"e8", c:"capital", title:"Adjustment of capitals",
   html:"<p><b>Case 1. New partner's capital on the basis of old partners' capitals</b></p><p class='formula'>Total capital of new firm = Combined adjusted capital of old partners × Reciprocal of their combined new share</p><p class='formula'>New partner's capital = Total capital × New partner's share</p><p class='eg'>A and B: adjusted capitals ₹1,20,000 and ₹80,000 (together ₹2,00,000). C gets 1/5. Old partners' combined share = 4/5. Total = 2,00,000 × 5/4 = 2,50,000. C's capital = 2,50,000 × 1/5 = <b>₹50,000</b>.</p><p><b>Case 2. Old partners' capitals on the basis of the new partner's capital</b></p><p class='formula'>Total capital = New partner's capital × Reciprocal of his share; each old partner's required capital = Total capital × his new share</p><p>Compare required with adjusted capital. <b>Surplus</b>: withdrawn (Capital A/c Dr To Cash A/c) or transferred to Current A/c. <b>Deficit</b>: brought in (Cash A/c Dr To Capital A/c) or debited to Current A/c.</p>"},
  {id:"e9", c:"entries", title:"How to present an admission answer in the board exam",
   html:"<ol><li>Write <b>working notes</b> first: new ratio, sacrificing ratio, goodwill share, revaluation result.</li><li>Prepare <b>Revaluation A/c</b> in T-format with <i>Dr.</i> and <i>Cr.</i> written on top.</li><li>Prepare <b>Partners' Capital A/cs</b> in columnar form (one column per partner, both sides).</li><li>Prepare the new <b>Balance Sheet</b> with the date, “as at …”, Liabilities on the left and Assets on the right.</li><li>Show debtors net of provision on the asset side: “Debtors 50,000 − Provision 2,500 = 47,500”.</li><li>Every journal entry: date, Dr line, “To” line indented, amounts in the right column, and a narration in brackets starting with “Being…”.</li></ol>"}
],

/* 06 · Concept visualisation: the ratio playground and the admission flow */
visual:{
  kind:"admit", names:["A","B"], old:[3,2], newName:"C", share:[1,5],
  flow:["Old firm (A, B)","New ratio and sacrificing ratio","Goodwill premium to sacrificing partners","Revaluation profit/loss to old partners","Reserves to old partners","Capital adjustment","New Balance Sheet (A, B, C)"]
},

/* 07 · Formulas and rules, with memory codes */
formulas:[
  {n:"Sacrifice", f:"Sacrifice = Old share − New share", code:"S-O-N: Sacrifice = Old minus New", c:"sacrifice"},
  {n:"New share (old ratio continues)", f:"Old partner's new share = Old share × (1 − New partner's share)", code:"Same knife, smaller pizza", c:"ratio"},
  {n:"Premium for goodwill", f:"New partner's premium = Firm's goodwill × New partner's share", c:"goodwill", code:"Pay for your slice of the name"},
  {n:"Goodwill from premium", f:"Firm's goodwill = Premium brought × Reciprocal of new partner's share", c:"goodwill", code:"Flip the share, scale the premium"},
  {n:"Hidden goodwill", f:"Hidden goodwill = (New partner's capital × Reciprocal of his share) − (Old partners' adjusted capitals + New partner's capital)", c:"hidden", code:"What it should be minus what it is"},
  {n:"Revaluation rule", f:"Asset ↑ or Liability ↓ → Gain (Cr Revaluation). Asset ↓ or Liability ↑ → Loss (Dr Revaluation)", c:"reval", code:"AU-LD = Gain"},
  {n:"Who shares what", f:"Revaluation result, reserves, past losses → old partners, old ratio. Goodwill premium → sacrificing partners, sacrificing ratio.", c:"reserve", code:"Old stuff, old ratio. Sacrifice money, sacrifice ratio."},
  {n:"Total capital from old partners", f:"Total capital = Old partners' combined adjusted capital × Reciprocal of their combined new share", c:"capital", code:"Grow the part to the whole"}
],

/* 08 · Solved illustrations. Each follows: given, required, formula, steps, format, answer, why */
illus:[
  {id:"i1", tag:"orig", c:"ratio", title:"New ratio and sacrificing ratio (stated fractions)",
   given:"A and B share profits in the ratio 3:2. They admit C for 1/4 share, which he acquires 1/6 from A and 1/12 from B.",
   required:"New profit sharing ratio and sacrificing ratio.",
   formula:"New share = Old share − Share given up. Sacrificing ratio = ratio of shares given up.",
   steps:["A's new share = 3/5 − 1/6 = 18/30 − 5/30 = <b>13/30</b>","B's new share = 2/5 − 1/12 = 24/60 − 5/60 = <b>19/60</b>","C's share = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = <b>1/4</b> (matches the question)","LCM of 30, 60, 4 = 60: A = 26/60, B = 19/60, C = 15/60","Sacrificing ratio = 1/6 : 1/12 = 2/12 : 1/12 = <b>2 : 1</b>"],
   answer:"New ratio 26 : 19 : 15. Sacrificing ratio 2 : 1.",
   why:"Each old partner gives up exactly the fraction stated, so we subtract it from his old share. The fractions given up are the sacrifices, so their ratio is the sacrificing ratio."},
  {id:"i2", tag:"orig", c:"goodwill", title:"Premium for goodwill brought in cash",
   given:"X and Y share profits 3:2. Z is admitted for 1/5 share. The firm's goodwill is valued at ₹1,20,000. Z brings ₹80,000 as capital and his share of goodwill in cash. (1 April 2026)",
   required:"Journal entries in the books of the firm.",
   formula:"Premium = Firm's goodwill × Z's share. Shared by X and Y in sacrificing ratio (= old ratio here, as no other ratio is given).",
   steps:["Z's share of goodwill = 1,20,000 × 1/5 = <b>₹24,000</b>","Sacrificing ratio = old ratio = 3 : 2 (Z takes from X and Y in their old ratio)","X's share of premium = 24,000 × 3/5 = <b>₹14,400</b>; Y's share = 24,000 × 2/5 = <b>₹9,600</b>","Pass three entries: capital brought, premium brought, premium distributed"],
   format:{type:"journal", entries:[
     {date:"2026 Apr 1", lines:[{a:"cash", dr:80000},{a:"capZ", cr:80000, n:"Z's Capital A/c"}], narr:"(Being capital brought in by Z)"},
     {date:"2026 Apr 1", lines:[{a:"cash", dr:24000},{a:"prem", cr:24000}], narr:"(Being premium for goodwill brought in by Z)"},
     {date:"2026 Apr 1", lines:[{a:"prem", dr:24000},{a:"capX", cr:14400},{a:"capY", cr:9600}], narr:"(Being premium for goodwill credited to sacrificing partners in 3:2)"}
   ]},
   answer:"Cash A/c Dr ₹1,04,000 in total; X's Capital Cr ₹14,400; Y's Capital Cr ₹9,600.",
   why:"AS-26 does not allow self-generated goodwill to be recorded, so no Goodwill A/c is opened. The premium compensates the partners who gave up their share."},
  {id:"i3", tag:"board", c:"reval", title:"Complete admission question: Revaluation, Capitals and Balance Sheet",
   given:"P and Q share profits 2:1. Their Balance Sheet on 31 March 2026: <b>Liabilities</b> Creditors ₹30,000; General Reserve ₹15,000; Capitals P ₹90,000, Q ₹60,000 (total ₹1,95,000). <b>Assets</b> Cash ₹25,000; Debtors ₹40,000; Stock ₹50,000; Furniture ₹20,000; Land ₹60,000 (total ₹1,95,000).<br>On 1 April 2026 R is admitted for 1/4 share on these terms: (i) R brings ₹70,000 as capital and ₹24,000 as premium for goodwill; (ii) Land is revalued at ₹75,000; (iii) Furniture is reduced by ₹5,000; (iv) Outstanding rent of ₹1,000 is to be recorded.",
   required:"Revaluation A/c, Partners' Capital A/cs and the Balance Sheet of the new firm.",
   formula:"Revaluation: AU-LD = Gain. Profit to old partners in old ratio 2:1. Premium in sacrificing ratio (old ratio 2:1, as nothing else is stated). General Reserve in old ratio.",
   steps:["Revaluation gains: Land +15,000. Losses: Furniture 5,000 + Outstanding rent 1,000 = 6,000. <b>Profit = ₹9,000</b> → P 6,000, Q 3,000","General Reserve ₹15,000 → P 10,000, Q 5,000","Premium ₹24,000 in 2:1 → P 16,000, Q 8,000","P's capital = 90,000 + 10,000 + 16,000 + 6,000 = <b>₹1,22,000</b>; Q's = 60,000 + 5,000 + 8,000 + 3,000 = <b>₹76,000</b>; R's = <b>₹70,000</b>","Cash = 25,000 + 70,000 + 24,000 = ₹1,19,000","New ratio: P = 2/3 × 3/4 = 1/2; Q = 1/3 × 3/4 = 1/4; R = 1/4 → <b>2 : 1 : 1</b>"],
   format:{type:"multi", parts:[
     {type:"tacc", name:"Revaluation Account", heads:["Particulars","₹","Particulars","₹"],
      left:[{a:"furn", amt:5000, p:"To Furniture A/c"},{a:"orent", amt:1000, p:"To Outstanding Rent A/c"},{a:"capP", amt:6000, p:"To Profit transferred to P's Capital A/c"},{a:"capQ", amt:3000, p:"To Profit transferred to Q's Capital A/c"}],
      right:[{a:"land", amt:15000, p:"By Land A/c"}], total:15000},
     {type:"grid", name:"Partners' Capital Accounts",
      head:["Dr. Particulars","P (₹)","Q (₹)","R (₹)","Cr. Particulars","P (₹)","Q (₹)","R (₹)"],
      rows:[
        ["",null,null,null,"By Balance b/d",90000,60000,null],
        ["",null,null,null,"By Cash A/c",null,null,70000],
        ["",null,null,null,"By General Reserve A/c",10000,5000,null],
        ["",null,null,null,"By Premium for Goodwill A/c",16000,8000,null],
        ["",null,null,null,"By Revaluation A/c (profit)",6000,3000,null],
        ["To Balance c/d",122000,76000,70000,"",null,null,null],
        ["Total",122000,76000,70000,"Total",122000,76000,70000]
      ]},
     {type:"tacc", name:"Balance Sheet of P, Q and R as at 1 April 2026", heads:["Liabilities","₹","Assets","₹"],
      left:[{a:"creditors", amt:30000, p:"Creditors"},{a:"orent", amt:1000, p:"Outstanding Rent"},{a:"capP", amt:122000, p:"P's Capital"},{a:"capQ", amt:76000, p:"Q's Capital"},{a:"capR", amt:70000, p:"R's Capital"}],
      right:[{a:"cash", amt:119000, p:"Cash"},{a:"debtors", amt:40000, p:"Debtors"},{a:"stock", amt:50000, p:"Stock"},{a:"furn", amt:15000, p:"Furniture"},{a:"land", amt:75000, p:"Land"}], total:299000}
   ]},
   answer:"Revaluation profit ₹9,000. Capitals: P ₹1,22,000, Q ₹76,000, R ₹70,000. Balance Sheet total ₹2,99,000. New ratio 2:1:1.",
   why:"Revaluation profit and the reserve were earned before R joined, so only P and Q share them in the old ratio. The premium is R's payment for the share P and Q gave up."}
],

/* 09 · Step-by-step numerical solver. kind: num | frac | ratio. traps: common wrong answers with a reason */
solver:[
  {id:"s1", tag:"orig", c:"goodwill", title:"Goodwill by average profit, then premium", mins:8,
   q:"A and B share profits 3:1. C is admitted for 1/4 share, which he takes from A and B in their old ratio. The firm's profits for the last three years were ₹40,000, ₹50,000 and ₹60,000. Goodwill is valued at 2 years' purchase of the average profit. C brings his share of goodwill in cash. Find A's share of the premium.",
   steps:[
     {label:"Identify the profits to average", prompt:"Total of the three years' profits (₹)", kind:"num", ans:150000,
      hint:"Add 40,000 + 50,000 + 60,000.", formula:"Total profit = sum of the given years' profits",
      why:"Average profit needs the total of all the years first.", avoid:"List each year's figure before adding so none is missed."},
     {label:"Calculate the average profit", prompt:"Average profit (₹)", kind:"num", ans:50000,
      hint:"Divide the total by the number of years (3).", formula:"Average profit = Total profit ÷ Number of years",
      traps:[{v:75000, why:"You divided by 2. There are 3 years of profit, so divide by 3."}],
      why:"Average = 1,50,000 ÷ 3 = 50,000.", avoid:"Count the years given in the question, not the years' purchase."},
     {label:"Identify the number of years' purchase", prompt:"Number of years' purchase", kind:"num", ans:2,
      hint:"Read the question: “2 years' purchase”.", formula:"Given in the question",
      traps:[{v:3, why:"3 is the number of years of profit. The years' PURCHASE is the multiplier: 2."}],
      why:"Years' purchase is the multiplier applied to average profit.", avoid:"Underline “years' purchase” when you read the question."},
     {label:"Apply the formula: goodwill of the firm", prompt:"Goodwill of the firm (₹)", kind:"num", ans:100000,
      hint:"Average profit × years' purchase.", formula:"Goodwill = Average profit × Number of years' purchase",
      traps:[{v:300000, why:"You multiplied the TOTAL profit by 2. Use the AVERAGE profit (₹50,000)."}],
      why:"Goodwill = 50,000 × 2 = 1,00,000.", avoid:"Always multiply the average, never the total."},
     {label:"C's share of goodwill (premium)", prompt:"C's premium for goodwill (₹)", kind:"num", ans:25000,
      hint:"Firm's goodwill × C's share (1/4).", formula:"Premium = Firm's goodwill × New partner's share",
      traps:[{v:100000, why:"That is the goodwill of the whole firm. C pays only for his 1/4 share."}],
      why:"Premium = 1,00,000 × 1/4 = 25,000.", avoid:"The new partner pays only for his own share of goodwill."},
     {label:"A's share of the premium", prompt:"Amount credited to A's Capital A/c (₹)", kind:"num", ans:18750,
      hint:"Sacrificing ratio = old ratio 3:1 here. A gets 3/4 of the premium.", formula:"A's share = Premium × A's sacrifice ÷ Total sacrifice",
      traps:[{v:12500, why:"You split the premium equally. It goes in the sacrificing ratio (3:1 here)."},{v:6250, why:"That is B's share (1/4). A sacrificed 3/4 of C's share."}],
      why:"25,000 × 3/4 = 18,750.", avoid:"Find the sacrificing ratio first; split the premium only in that ratio."}
   ]},
  {id:"s2", tag:"orig", c:"ratio", title:"New ratio and sacrificing ratio", mins:6,
   q:"X and Y share profits 5:3. Z is admitted for 1/4 share, which he takes equally from X and Y. Find the new profit sharing ratio and the sacrificing ratio.",
   steps:[
     {label:"Share given up by each old partner", prompt:"Share given up by X (as a fraction)", kind:"frac", ans:[1,8],
      hint:"Z's 1/4 is taken equally from two partners.", formula:"Each one's sacrifice = 1/4 × 1/2",
      traps:[{v:[1,4], why:"1/4 is Z's whole share. X gives only half of it."}],
      why:"1/4 ÷ 2 = 1/8.", avoid:"“Equally” means split the new partner's share into equal parts."},
     {label:"X's new share", prompt:"X's new share (fraction)", kind:"frac", ans:[1,2],
      hint:"5/8 − 1/8.", formula:"New share = Old share − Sacrifice",
      why:"5/8 − 1/8 = 4/8 = 1/2.", avoid:"Convert to a common denominator before subtracting."},
     {label:"Y's new share", prompt:"Y's new share (fraction)", kind:"frac", ans:[1,4],
      hint:"3/8 − 1/8.", formula:"New share = Old share − Sacrifice",
      why:"3/8 − 1/8 = 2/8 = 1/4.", avoid:"Check: X + Y + Z must add up to 1."},
     {label:"New profit sharing ratio", prompt:"New ratio X : Y : Z", kind:"ratio", ans:[2,1,1],
      hint:"1/2 : 1/4 : 1/4. Multiply all by 4.", formula:"Bring all shares to one denominator and drop it",
      traps:[{v:[5,3,2], why:"You kept the old ratio for X and Y. Their shares changed after giving up 1/8 each."}],
      why:"1/2 : 1/4 : 1/4 = 2 : 1 : 1.", avoid:"Add the three shares: they must total 1."},
     {label:"Sacrificing ratio", prompt:"Sacrificing ratio X : Y", kind:"ratio", ans:[1,1],
      hint:"Both gave up 1/8.", formula:"Sacrificing ratio = ratio of sacrifices",
      traps:[{v:[5,3], why:"5:3 is the OLD ratio. Here both sacrificed the same 1/8, so the ratio is 1:1."}],
      why:"1/8 : 1/8 = 1 : 1.", avoid:"Sacrificing ratio equals the old ratio ONLY when the new partner takes his share in the old ratio."}
   ]},
  {id:"s3", tag:"board", c:"hidden", title:"Hidden goodwill", mins:7,
   q:"A and B share profits equally. Their capitals after all adjustments are ₹60,000 and ₹40,000. C is admitted for 1/4 share and brings ₹50,000 as capital. He brings no premium for goodwill. Find the hidden goodwill and the amount credited to A.",
   steps:[
     {label:"Total capital of the new firm", prompt:"Total capital on the basis of C's capital (₹)", kind:"num", ans:200000,
      hint:"50,000 × reciprocal of 1/4.", formula:"Total capital = New partner's capital × Reciprocal of his share",
      traps:[{v:12500, why:"You multiplied by 1/4. Multiply by the RECIPROCAL, 4/1."}],
      why:"50,000 × 4 = 2,00,000.", avoid:"Reciprocal of 1/4 is 4."},
     {label:"Actual combined capital", prompt:"A + B + C capitals (₹)", kind:"num", ans:150000,
      hint:"60,000 + 40,000 + 50,000.", formula:"Old partners' adjusted capitals + New partner's capital",
      traps:[{v:100000, why:"You left out C's own capital of ₹50,000."}],
      why:"60,000 + 40,000 + 50,000 = 1,50,000.", avoid:"Include the new partner's capital in the actual total."},
     {label:"Hidden goodwill of the firm", prompt:"Hidden goodwill (₹)", kind:"num", ans:50000,
      hint:"2,00,000 − 1,50,000.", formula:"Hidden goodwill = Total capital − Actual combined capital",
      why:"2,00,000 − 1,50,000 = 50,000.", avoid:"Hidden goodwill is the gap between what the capital should be and what it is."},
     {label:"C's share of goodwill", prompt:"C's share of goodwill (₹)", kind:"num", ans:12500,
      hint:"50,000 × 1/4.", formula:"C's share = Hidden goodwill × C's share",
      why:"50,000 × 1/4 = 12,500.", avoid:"C pays for his share only."},
     {label:"Amount credited to A", prompt:"Credited to A's Capital A/c (₹)", kind:"num", ans:6250,
      hint:"Old ratio is 1:1, so sacrificing ratio is 1:1.", formula:"Share in sacrificing ratio",
      traps:[{v:7500, why:"You used the capital ratio (60:40). Premium is shared in the sacrificing ratio, which is 1:1 here."}],
      why:"12,500 × 1/2 = 6,250. Entry: C's Current A/c Dr 12,500; To A's Capital 6,250; To B's Capital 6,250.", avoid:"Capital ratio is never used to share goodwill."}
   ]},
  {id:"s4", tag:"orig", c:"capital", title:"New partner's capital from old partners' capitals", mins:5,
   q:"P and Q share profits 3:2. Their capitals after all adjustments are ₹1,20,000 and ₹80,000. R is admitted for 1/5 share. R is to bring capital in proportion to his share. Find R's capital.",
   steps:[
     {label:"Old partners' combined adjusted capital", prompt:"P + Q capitals (₹)", kind:"num", ans:200000,
      hint:"1,20,000 + 80,000.", formula:"Combined adjusted capital", why:"1,20,000 + 80,000 = 2,00,000.", avoid:"Use capitals AFTER all adjustments."},
     {label:"Old partners' combined new share", prompt:"P and Q's combined new share (fraction)", kind:"frac", ans:[4,5],
      hint:"1 − R's share.", formula:"Combined share = 1 − New partner's share", why:"1 − 1/5 = 4/5.", avoid:"It is the share of P and Q together in the NEW firm."},
     {label:"Total capital of the new firm", prompt:"Total capital (₹)", kind:"num", ans:250000,
      hint:"2,00,000 × 5/4.", formula:"Total capital = Combined capital × Reciprocal of combined share",
      traps:[{v:160000, why:"You multiplied by 4/5. Use the reciprocal: 5/4."}],
      why:"2,00,000 × 5/4 = 2,50,000.", avoid:"The part (4/5) grows to the whole, so the total must be bigger."},
     {label:"R's capital", prompt:"R's capital (₹)", kind:"num", ans:50000,
      hint:"2,50,000 × 1/5.", formula:"New partner's capital = Total capital × His share",
      traps:[{v:40000, why:"You took 1/5 of the OLD partners' capital (2,00,000). Take 1/5 of the TOTAL capital (2,50,000)."}],
      why:"2,50,000 × 1/5 = 50,000.", avoid:"Find the total first; then take the new partner's share of it."}
   ]}
],

/* 10 · Interactive accounting practice lab: one block per transaction */
lab:[
  {id:"L0", tag:"orig", level:"Easy", c:"goodwill", title:"Premium brought in cash",
   q:"A and B share profits 3:2. On 1 April 2026 C is admitted for 1/5 share, which he takes from A and B in their old ratio. C brings ₹50,000 as premium for goodwill in cash. Pass the journal entries.",
   format:{type:"journal", entries:[
     {label:"Premium brought in by C", date:"2026 Apr 1", lines:[{a:"cash", dr:50000},{a:"prem", cr:50000, why:"Goodwill A/c is not raised (AS-26); the cash is credited to Premium for Goodwill A/c."}], narr:"(Being premium for goodwill brought in by C)"},
     {label:"Premium credited to sacrificing partners", date:"2026 Apr 1", lines:[{a:"prem", dr:50000},{a:"capA", cr:30000, why:"50,000 × 3/5 = 30,000 (sacrificing ratio = old ratio 3:2)."},{a:"capB", cr:20000, why:"50,000 × 2/5 = 20,000."}], narr:"(Being premium for goodwill credited to sacrificing partners in 3:2)"}
   ]}},
  {id:"L1", tag:"orig", level:"Medium", c:"goodwill", title:"Premium not brought in cash and existing goodwill",
   q:"X and Y share profits 3:2. Goodwill appears in their books at ₹20,000. On 1 April 2026 D is admitted for 1/6 share, which he takes equally from X and Y. The firm's goodwill is valued at ₹60,000. D cannot bring his share of goodwill in cash. Pass the journal entries.",
   format:{type:"journal", entries:[
     {label:"Existing goodwill written off", date:"2026 Apr 1", lines:[{a:"capX", dr:12000, why:"Existing goodwill is written off among OLD partners in the OLD ratio: 20,000 × 3/5 = 12,000."},{a:"capY", dr:8000, why:"20,000 × 2/5 = 8,000."},{a:"goodwill", cr:20000}], narr:"(Being existing goodwill written off among old partners in 3:2)"},
     {label:"D's share of goodwill adjusted", date:"2026 Apr 1", lines:[{a:"capD", dr:10000, why:"D's share = 60,000 × 1/6 = 10,000. Not brought in cash, so his Capital (or Current) A/c is debited."},{a:"capX", cr:5000, why:"D takes equally from X and Y, so the sacrificing ratio is 1:1: 10,000 × 1/2."},{a:"capY", cr:5000, why:"10,000 × 1/2 = 5,000."}], narr:"(Being D's share of goodwill adjusted through capital accounts in sacrificing ratio 1:1)"}
   ]}},
  {id:"L2", tag:"board", level:"Medium", c:"entries", title:"Full admission: journal entries",
   q:"A and B share profits 3:2. Their Balance Sheet on 31 March 2026: <b>Liabilities</b> Creditors ₹40,000; General Reserve ₹20,000; Capitals A ₹1,20,000, B ₹80,000. <b>Assets</b> Cash ₹30,000; Debtors ₹50,000; Stock ₹40,000; Machinery ₹60,000; Building ₹80,000. On 1 April 2026 C is admitted for 1/5 share on these terms: (i) C brings ₹1,00,000 as capital and ₹30,000 as premium for goodwill; (ii) Stock is revalued at ₹44,000; (iii) Machinery is depreciated by 10%; (iv) A provision for doubtful debts is created at 5% on debtors; (v) Building is revalued at ₹95,000. Pass the journal entries.",
   format:{type:"journal", entries:[
     {label:"Capital brought in by C", date:"2026 Apr 1", lines:[{a:"cash", dr:100000},{a:"capC", cr:100000}], narr:"(Being capital brought in by C)"},
     {label:"Premium brought in by C", date:"2026 Apr 1", lines:[{a:"cash", dr:30000},{a:"prem", cr:30000, why:"Use Premium for Goodwill A/c, not Goodwill A/c."}], narr:"(Being premium for goodwill brought in by C)"},
     {label:"Premium credited to A and B", date:"2026 Apr 1", lines:[{a:"prem", dr:30000},{a:"capA", cr:18000, why:"Sacrificing ratio = old ratio 3:2 (no other ratio given): 30,000 × 3/5."},{a:"capB", cr:12000, why:"30,000 × 2/5 = 12,000."}], narr:"(Being premium credited to sacrificing partners in 3:2)"},
     {label:"Decrease in assets (losses)", date:"2026 Apr 1", lines:[{a:"reval", dr:8500, why:"Total loss = Machinery 6,000 + Provision 2,500 = 8,500."},{a:"mach", cr:6000, why:"10% of 60,000 = 6,000. A decrease in an asset: Revaluation Dr, Asset Cr."},{a:"pdd", cr:2500, why:"5% of 50,000 = 2,500."}], narr:"(Being machinery depreciated and provision for doubtful debts created)"},
     {label:"Increase in assets (gains)", date:"2026 Apr 1", lines:[{a:"stock", dr:4000, why:"44,000 − 40,000 = 4,000. An increase in an asset: Asset Dr, Revaluation Cr."},{a:"building", dr:15000, why:"95,000 − 80,000 = 15,000."},{a:"reval", cr:19000, why:"Total gain = 4,000 + 15,000 = 19,000."}], narr:"(Being increase in value of stock and building)"},
     {label:"Revaluation profit transferred", date:"2026 Apr 1", lines:[{a:"reval", dr:10500, why:"Profit = 19,000 − 8,500 = 10,500."},{a:"capA", cr:6300, why:"Old ratio 3:2: 10,500 × 3/5 = 6,300."},{a:"capB", cr:4200, why:"10,500 × 2/5 = 4,200."}], narr:"(Being profit on revaluation transferred to old partners in 3:2)"},
     {label:"General Reserve distributed", date:"2026 Apr 1", lines:[{a:"gr", dr:20000},{a:"capA", cr:12000, why:"Old partners, old ratio: 20,000 × 3/5. C gets nothing."},{a:"capB", cr:8000, why:"20,000 × 2/5 = 8,000."}], narr:"(Being general reserve transferred to old partners in 3:2)"}
   ]}},
  {id:"L3", tag:"board", level:"Medium", c:"reval", title:"Revaluation Account", ref:"L2",
   q:"Using the question in worksheet L2, prepare the Revaluation Account. Type each item on the correct side.",
   format:{type:"tacc", name:"Revaluation Account", heads:["Particulars","₹","Particulars","₹"],
    left:[{a:"mach", amt:6000, p:"To Machinery A/c", why:"Decrease in an asset is a loss: debit side. 10% of 60,000."},{a:"pdd", amt:2500, p:"To Provision for Doubtful Debts A/c", why:"5% of 50,000. Reduces the value of debtors: a loss."},{a:"capA", amt:6300, p:"To A's Capital A/c (profit)", why:"Profit 10,500 × 3/5. The profit is the balancing figure on the debit side."},{a:"capB", amt:4200, p:"To B's Capital A/c (profit)", why:"10,500 × 2/5."}],
    right:[{a:"stock", amt:4000, p:"By Stock A/c", why:"Increase in an asset is a gain: credit side."},{a:"building", amt:15000, p:"By Building A/c", why:"95,000 − 80,000."}], total:19000}},
  {id:"L4", tag:"board", level:"Hard", c:"capital", title:"Partners' Capital Accounts", ref:"L2",
   q:"Using the question in worksheet L2, complete the Partners' Capital Accounts. Leave a cell blank where the partner has no amount.",
   format:{type:"grid", name:"Partners' Capital Accounts",
    head:["Dr. Particulars","A (₹)","B (₹)","C (₹)","Cr. Particulars","A (₹)","B (₹)","C (₹)"],
    rows:[
      ["",null,null,null,"By Balance b/d",{a:120000},{a:80000},{a:null}],
      ["",null,null,null,"By Cash A/c",{a:null},{a:null},{a:100000, why:"C's capital brought in."}],
      ["",null,null,null,"By General Reserve A/c",{a:12000, why:"20,000 × 3/5."},{a:8000, why:"20,000 × 2/5."},{a:null, why:"C does not share the reserve."}],
      ["",null,null,null,"By Premium for Goodwill A/c",{a:18000, why:"30,000 × 3/5."},{a:12000, why:"30,000 × 2/5."},{a:null}],
      ["",null,null,null,"By Revaluation A/c (profit)",{a:6300},{a:4200},{a:null, why:"Revaluation profit belongs to old partners only."}],
      ["To Balance c/d",{a:156300, why:"1,20,000 + 12,000 + 18,000 + 6,300."},{a:104200, why:"80,000 + 8,000 + 12,000 + 4,200."},{a:100000},"",null,null,null],
      ["Total",{a:156300},{a:104200},{a:100000},"Total",{a:156300},{a:104200},{a:100000}]
    ]}},
  {id:"L5", tag:"board", level:"Hard", c:"entries", title:"Balance Sheet of the new firm", ref:"L2",
   q:"Using the question in worksheet L2, prepare the Balance Sheet of A, B and C as at 1 April 2026. Show debtors net of provision.",
   format:{type:"tacc", name:"Balance Sheet of A, B and C as at 1 April 2026", heads:["Liabilities","₹","Assets","₹"],
    left:[{a:"creditors", amt:40000, p:"Creditors"},{a:"capA", amt:156300, p:"A's Capital", why:"From the Capital A/cs."},{a:"capB", amt:104200, p:"B's Capital"},{a:"capC", amt:100000, p:"C's Capital"}],
    right:[{a:"cash", amt:160000, p:"Cash", why:"30,000 + 1,00,000 capital + 30,000 premium."},{a:"debtors", amt:47500, p:"Debtors 50,000 − Provision 2,500", why:"Show debtors net of the 5% provision."},{a:"stock", amt:44000, p:"Stock"},{a:"mach", amt:54000, p:"Machinery", why:"60,000 − 6,000."},{a:"building", amt:95000, p:"Building"}], total:400500,
    gone:[{a:"gr", why:"General Reserve was fully distributed, so it does not appear in the new Balance Sheet."},{a:"reval", why:"Revaluation A/c is closed; it never appears in a Balance Sheet."},{a:"prem", why:"Premium for Goodwill A/c is closed after crediting the old partners."}]}}
],

/* 11 · Blank worksheets the student can use for any question (free mode) */
blanks:[
  {id:"B1", t:"Journal", type:"journal", rows:8},
  {id:"B2", t:"Ledger account (T-format)", type:"tacc", rows:6, heads:["Particulars","₹","Particulars","₹"]},
  {id:"B3", t:"Partners' Capital Accounts (3 partners)", type:"grid", rows:7, head:["Dr. Particulars","Partner 1","Partner 2","Partner 3","Cr. Particulars","Partner 1","Partner 2","Partner 3"]},
  {id:"B4", t:"Balance Sheet (horizontal)", type:"tacc", rows:8, heads:["Liabilities","₹","Assets","₹"]}
],

/* 12 · Mistake detection: show a wrong entry, find what is wrong */
mistakes:[
  {id:"m1", c:"goodwill", q:"C brings ₹30,000 as goodwill in cash. A student writes:", shown:[["Cash A/c","Dr",30000,""],["To Goodwill A/c","",null,30000]],
   opts:["Goodwill A/c should not be credited; it should be Premium for Goodwill A/c","The amount should be ₹6,000","Cash A/c should be credited","Nothing is wrong"], a:0,
   why:"Under AS-26, goodwill is not raised at admission. The premium is credited to Premium for Goodwill A/c and then to the sacrificing partners."},
  {id:"m2", c:"goodwill", q:"A and B share 3:2. C joins for 1/5 (new ratio 12:8:5). Premium ₹25,000 is distributed:", shown:[["Premium for Goodwill A/c","Dr",25000,""],["To A's Capital A/c","",null,12000],["To B's Capital A/c","",null,8000],["To C's Capital A/c","",null,5000]],
   opts:["Premium was split in the new ratio; it must go only to A and B in the sacrificing ratio 3:2 (₹15,000 and ₹10,000)","The debit should be to Cash A/c","C's share should be ₹10,000","Nothing is wrong"], a:0,
   why:"The new partner pays the premium; he never receives a share of it. Old partners get it in the sacrificing ratio."},
  {id:"m3", c:"reserve", q:"General Reserve ₹15,000 at the time of C's admission (A:B 2:1, new ratio 2:1:1):", shown:[["General Reserve A/c","Dr",15000,""],["To A's Capital A/c","",null,7500],["To B's Capital A/c","",null,3750],["To C's Capital A/c","",null,3750]],
   opts:["Reserve must go to old partners only in the old ratio 2:1 (₹10,000 and ₹5,000)","The reserve should be debited to the partners","It should be transferred to Revaluation A/c","Nothing is wrong"], a:0,
   why:"Reserves are past profits earned before C joined, so A and B share them in the old ratio."},
  {id:"m4", c:"reval", q:"Outstanding salary of ₹2,000, not recorded so far, is found at admission:", shown:[["Outstanding Salary A/c","Dr",2000,""],["To Revaluation A/c","",null,2000]],
   opts:["Sides are reversed: an unrecorded liability is a loss, so Revaluation A/c Dr, To Outstanding Salary A/c","Amount should be ₹1,000","Should be debited to C's Capital","Nothing is wrong"], a:0,
   why:"A new liability means the firm owes more: a loss. Revaluation A/c is debited."},
  {id:"m5", c:"reval", q:"Revaluation profit ₹9,000 (old ratio A:B 2:1, C admitted for 1/4):", shown:[["Revaluation A/c","Dr",9000,""],["To A's Capital A/c","",null,4500],["To B's Capital A/c","",null,2250],["To C's Capital A/c","",null,2250]],
   opts:["Revaluation profit belongs to old partners only, in the old ratio (₹6,000 and ₹3,000)","The profit should be debited to partners","C should get ₹4,500","Nothing is wrong"], a:0,
   why:"Changes in value happened before C joined, so only A and B share the result, in 2:1."}
],

/* 13 · Case study */
cases:[
  {id:"c1", tag:"board", title:"Brew & Bake Café",
   story:"Meera and Kabir run Brew & Bake Café and share profits 3:2. To open a second outlet they admit Rohan for 1/4 share, which he takes <b>entirely from Meera</b>. Rohan brings ₹40,000 as premium for goodwill in cash. The books show an Investment Fluctuation Reserve of ₹10,000. Investments of book value ₹50,000 have a market value of ₹46,000 on the date of admission.",
   qs:[
     {type:"mcq", c:"ratio", q:"Meera's new share of profit is…", opts:["7/20","3/5","1/4","9/20"], a:0, why:"3/5 − 1/4 = 12/20 − 5/20 = 7/20."},
     {type:"ratio", c:"ratio", q:"New profit sharing ratio Meera : Kabir : Rohan", ans:[7,8,5], why:"Meera 7/20, Kabir 2/5 = 8/20 (unchanged), Rohan 5/20."},
     {type:"mcq", c:"goodwill", q:"How is Rohan's premium of ₹40,000 credited?", opts:["Entirely to Meera's Capital A/c","Meera ₹24,000 and Kabir ₹16,000","Meera, Kabir and Rohan in the new ratio","To Goodwill A/c"], a:0, why:"Only Meera sacrificed, so the sacrificing ratio is 1:0 and Meera gets all of it."},
     {type:"num", c:"goodwill", q:"Implied goodwill of the whole firm (₹)", ans:160000, why:"40,000 × 4/1 = 1,60,000."},
     {type:"num", c:"reserve", q:"Amount of Investment Fluctuation Reserve credited to Meera's Capital A/c (₹)", ans:3600, why:"Fall in value = 4,000, met from IFR. Balance 6,000 shared 3:2 between old partners: Meera 3,600, Kabir 2,400."}
   ]}
],

/* 14 · Games */
games:{
  obj:{dc:"Choose the correct debit and credit accounts for admission transactions.", bs:"Place every item of the new firm's Balance Sheet on the correct side.", profit:"Track the running revaluation profit as each adjustment arrives."},
  dc:[
    {t:"C brings ₹60,000 as capital in cash.", ok:"Dr Cash A/c · Cr C's Capital A/c", bad:["Dr C's Capital A/c · Cr Cash A/c","Dr Cash A/c · Cr Premium for Goodwill A/c","Dr Cash A/c · Cr Revaluation A/c"], c:"entries"},
    {t:"C brings ₹15,000 as premium for goodwill in cash.", ok:"Dr Cash A/c · Cr Premium for Goodwill A/c", bad:["Dr Cash A/c · Cr Goodwill A/c","Dr Goodwill A/c · Cr Cash A/c","Dr Premium for Goodwill A/c · Cr Cash A/c"], c:"goodwill"},
    {t:"Premium for goodwill is transferred to the sacrificing partners.", ok:"Dr Premium for Goodwill A/c · Cr Sacrificing Partners' Capital A/cs", bad:["Dr Sacrificing Partners' Capital A/cs · Cr Premium for Goodwill A/c","Dr Premium for Goodwill A/c · Cr All Partners' Capital A/cs","Dr Cash A/c · Cr Old Partners' Capital A/cs"], c:"goodwill"},
    {t:"Building is revalued upwards.", ok:"Dr Building A/c · Cr Revaluation A/c", bad:["Dr Revaluation A/c · Cr Building A/c","Dr Building A/c · Cr Old Partners' Capital A/cs","Dr Building A/c · Cr Cash A/c"], c:"reval"},
    {t:"Stock is found overvalued and reduced.", ok:"Dr Revaluation A/c · Cr Stock A/c", bad:["Dr Stock A/c · Cr Revaluation A/c","Dr Old Partners' Capital A/cs · Cr Stock A/c","Dr Purchases A/c · Cr Stock A/c"], c:"reval"},
    {t:"An outstanding salary bill, not recorded so far, is to be recorded.", ok:"Dr Revaluation A/c · Cr Outstanding Salary A/c", bad:["Dr Outstanding Salary A/c · Cr Revaluation A/c","Dr Salary A/c · Cr Cash A/c","Dr Old Partners' Capital A/cs · Cr Outstanding Salary A/c"], c:"reval"},
    {t:"Creditors will be paid ₹2,000 less than recorded.", ok:"Dr Creditors A/c · Cr Revaluation A/c", bad:["Dr Revaluation A/c · Cr Creditors A/c","Dr Creditors A/c · Cr Cash A/c","Dr Creditors A/c · Cr Old Partners' Capital A/cs"], c:"reval"},
    {t:"General Reserve is distributed at admission.", ok:"Dr General Reserve A/c · Cr Old Partners' Capital A/cs", bad:["Dr General Reserve A/c · Cr All Partners' Capital A/cs","Dr Old Partners' Capital A/cs · Cr General Reserve A/c","Dr General Reserve A/c · Cr Revaluation A/c"], c:"reserve"},
    {t:"Debit balance of Profit and Loss A/c (accumulated loss) is written off.", ok:"Dr Old Partners' Capital A/cs · Cr Profit and Loss A/c", bad:["Dr Profit and Loss A/c · Cr Old Partners' Capital A/cs","Dr All Partners' Capital A/cs · Cr Profit and Loss A/c","Dr Revaluation A/c · Cr Profit and Loss A/c"], c:"reserve"},
    {t:"New partner cannot bring his share of goodwill in cash.", ok:"Dr New Partner's Current A/c · Cr Sacrificing Partners' Capital A/cs", bad:["Dr Goodwill A/c · Cr Sacrificing Partners' Capital A/cs","Dr Sacrificing Partners' Capital A/cs · Cr New Partner's Current A/c","Dr Cash A/c · Cr Premium for Goodwill A/c"], c:"goodwill"},
    {t:"Goodwill already in the books is written off at admission.", ok:"Dr Old Partners' Capital A/cs · Cr Goodwill A/c", bad:["Dr Goodwill A/c · Cr Old Partners' Capital A/cs","Dr All Partners' Capital A/cs · Cr Goodwill A/c","Dr Revaluation A/c · Cr Goodwill A/c"], c:"goodwill"},
    {t:"Loss on revaluation is transferred.", ok:"Dr Old Partners' Capital A/cs · Cr Revaluation A/c", bad:["Dr Revaluation A/c · Cr Old Partners' Capital A/cs","Dr All Partners' Capital A/cs · Cr Revaluation A/c","Dr Revaluation A/c · Cr Cash A/c"], c:"reval"},
    {t:"A computer not recorded in the books is found.", ok:"Dr Computer A/c · Cr Revaluation A/c", bad:["Dr Revaluation A/c · Cr Computer A/c","Dr Computer A/c · Cr Cash A/c","Dr Computer A/c · Cr New Partner's Capital A/c"], c:"reval"},
    {t:"Old partners withdraw the premium brought by the new partner.", ok:"Dr Old Partners' Capital A/cs · Cr Cash A/c", bad:["Dr Cash A/c · Cr Old Partners' Capital A/cs","Dr Premium for Goodwill A/c · Cr Cash A/c","Dr Old Partners' Capital A/cs · Cr Premium for Goodwill A/c"], c:"goodwill"},
    {t:"Advertisement Suspense A/c (deferred revenue expenditure) is written off.", ok:"Dr Old Partners' Capital A/cs · Cr Advertisement Suspense A/c", bad:["Dr Advertisement Suspense A/c · Cr Old Partners' Capital A/cs","Dr Revaluation A/c · Cr Advertisement Suspense A/c","Dr All Partners' Capital A/cs · Cr Advertisement Suspense A/c"], c:"reserve"}
  ],
  bs:{c:"capital", title:"Build the new Balance Sheet of P, Q and R (from solved illustration 3)",
    bins:["Liabilities","Assets","Not shown in new Balance Sheet"],
    items:[
      {t:"Creditors", amt:30000, b:0},{t:"Outstanding Rent", amt:1000, b:0},{t:"P's Capital", amt:122000, b:0},{t:"Q's Capital", amt:76000, b:0},{t:"R's Capital", amt:70000, b:0},
      {t:"Cash", amt:119000, b:1},{t:"Debtors", amt:40000, b:1},{t:"Stock", amt:50000, b:1},{t:"Furniture", amt:15000, b:1},{t:"Land", amt:75000, b:1},
      {t:"General Reserve", amt:15000, b:2, why:"Distributed to P and Q, so it is closed."},{t:"Revaluation A/c", amt:9000, b:2, why:"A nominal account; closed by transferring profit to capitals."},{t:"Premium for Goodwill", amt:24000, b:2, why:"Closed after crediting P and Q."}
    ], total:299000},
  race:[
    {t:"C brings ₹60,000 capital.", ok:"Cash A/c Dr → C's Capital A/c", bad:["C's Capital A/c Dr → Cash A/c","Cash A/c Dr → Premium for Goodwill A/c"], amt:60000, c:"entries"},
    {t:"General Reserve ₹25,000 (A:B 3:2). Amount credited to A?", ok:"General Reserve A/c Dr → A's & B's Capital A/cs", bad:["A's & B's Capital A/cs Dr → General Reserve A/c","General Reserve A/c Dr → A's, B's & C's Capital A/cs"], amt:15000, c:"reserve"},
    {t:"Machinery ₹80,000 depreciated by 15%.", ok:"Revaluation A/c Dr → Machinery A/c", bad:["Machinery A/c Dr → Revaluation A/c","Depreciation A/c Dr → Machinery A/c"], amt:12000, c:"reval"},
    {t:"Firm's goodwill ₹90,000; D gets 1/3 and brings his premium in cash.", ok:"Cash A/c Dr → Premium for Goodwill A/c", bad:["Cash A/c Dr → Goodwill A/c","Goodwill A/c Dr → D's Capital A/c"], amt:30000, c:"goodwill"},
    {t:"Provision for doubtful debts @ 4% on debtors of ₹75,000.", ok:"Revaluation A/c Dr → Provision for Doubtful Debts A/c", bad:["Provision for Doubtful Debts A/c Dr → Revaluation A/c","Bad Debts A/c Dr → Debtors A/c"], amt:3000, c:"reval"},
    {t:"Revaluation loss ₹6,000 (A:B 2:1). Amount debited to B?", ok:"A's & B's Capital A/cs Dr → Revaluation A/c", bad:["Revaluation A/c Dr → A's & B's Capital A/cs","A's, B's & C's Capital A/cs Dr → Revaluation A/c"], amt:2000, c:"reval"}
  ],
  missing:[
    {q:"C pays ₹18,000 premium for 1/4 share. Goodwill of the whole firm = ?", kind:"num", ans:72000, why:"18,000 × 4 = 72,000.", c:"goodwill"},
    {q:"A:B = 5:3. C gets 1/5, old ratio continues. A's new share = ?", kind:"frac", ans:[1,2], why:"5/8 × 4/5 = 20/40 = 1/2.", c:"ratio"},
    {q:"Revaluation gains ₹12,000, losses ₹7,500. Profit on revaluation = ?", kind:"num", ans:4500, why:"12,000 − 7,500 = 4,500.", c:"reval"},
    {q:"Old partners' adjusted capitals total ₹1,30,000. C brings ₹40,000 for 1/5 share. Hidden goodwill = ?", kind:"num", ans:30000, why:"Total = 40,000 × 5 = 2,00,000. 2,00,000 − (1,30,000 + 40,000) = 30,000.", c:"hidden"},
    {q:"Adjusted capitals A ₹90,000 and B ₹60,000. C joins for 1/4 share. C's capital = ?", kind:"num", ans:50000, why:"Total = 1,50,000 × 4/3 = 2,00,000. C = 2,00,000 × 1/4 = 50,000.", c:"capital"},
    {q:"Revaluation profit ₹9,000; A received ₹5,400. B's share = ?", kind:"num", ans:3600, why:"9,000 − 5,400 = 3,600 (old ratio 3:2).", c:"reval"},
    {q:"A:B = 3:2. C takes 1/5 entirely from A. B's sacrifice = ?", kind:"frac", ans:[0,1], why:"B gives up nothing: sacrifice = 0.", c:"sacrifice"}
  ],
  profit:{ask:"running revaluation result?", c:"reval", start:"Start from 0. After each change, type the running revaluation result (use − for a loss).", base:"A and B share 3:2.",
    steps:[
      {t:"Building ₹80,000 revalued at ₹95,000", v:15000},
      {t:"Machinery ₹60,000 depreciated by 15%", v:-9000},
      {t:"Provision for doubtful debts @ 5% on debtors ₹50,000", v:-2500},
      {t:"Unrecorded investment of ₹3,000 brought into books", v:3000},
      {t:"Outstanding wages of ₹1,500 to be recorded", v:-1500},
      {t:"Creditors to be paid ₹2,000 less", v:2000}
    ], final:{q:"Final profit is shared 3:2. A's share = ?", ans:4200, why:"Final profit 7,000 × 3/5 = 4,200.", hint:"Old ratio 3:2."}},
  escape:{story:"You are locked in the old accountant's office. Each door has a number lock. Solve the accounting puzzle on the door to get the code.",
    locks:[
      {room:"Door 1: The Ratio Room", q:"A and B share 3:2. C joins for 1/5 share; the old ratio continues. Write the new ratio in lowest terms as a:b:c. The code is a + b + c.", ans:25, hint:"New ratio 12:8:5.", c:"ratio"},
      {room:"Door 2: The Goodwill Vault", q:"Firm's goodwill ₹1,00,000. C gets 1/5 and brings his premium in cash, taken from A and B in 3:2. Code = A's share of premium.", ans:12000, hint:"Premium 20,000 × 3/5.", c:"goodwill"},
      {room:"Door 3: The Revaluation Lab", q:"Building +₹20,000; stock −₹6,000; provision @ 5% on debtors of ₹40,000. Code = revaluation profit.", ans:12000, hint:"20,000 − 6,000 − 2,000.", c:"reval"},
      {room:"Door 4: The Hidden Door", q:"C brings ₹60,000 for 1/4 share. Old partners' adjusted capitals total ₹1,50,000. Code = hidden goodwill.", ans:30000, hint:"60,000 × 4 − (1,50,000 + 60,000).", c:"hidden"}
    ]}
},

/* 15 · Revision */
revision:{
  summary:[
    "Admission = reconstitution. Consent of all partners (Sec 31). New partner gets a share in assets and future profits.",
    "Six adjustments: new ratio · sacrificing ratio · goodwill · revaluation · reserves/past profits and losses · capital.",
    "Sacrifice = Old share − New share. If nothing is said, sacrificing ratio = old ratio.",
    "Goodwill (AS-26): never raise Goodwill A/c. Cash → Premium for Goodwill → sacrificing partners. Not in cash → new partner's Current/Capital A/c Dr.",
    "Existing goodwill in books → written off to old partners in old ratio.",
    "Revaluation: AU-LD = Gain. Result → old partners, old ratio.",
    "Reserves and past profits → old partners' capitals (credit). Past losses and advertisement suspense → old partners' capitals (debit). Old ratio.",
    "Capital: total = known capital × reciprocal of its share; then each share of the total."
  ],
  defs:[["Admission of a partner","Taking a new partner into an existing firm with the consent of all existing partners; the firm is reconstituted."],["Sacrificing ratio","The ratio in which old partners give up their share of profit in favour of the new partner."],["Premium for goodwill","The amount the new partner pays to the sacrificing partners for his share of the firm's goodwill."],["Hidden goodwill","Goodwill worked out from the capital brought by the new partner, when the firm's goodwill is not given."],["Revaluation Account","A nominal account that records changes in the values of assets and liabilities at reconstitution; its result goes to old partners in the old ratio."]],
  flash:[
    {f:"Sacrifice formula", b:"Old share − New share"},
    {f:"New partner's premium", b:"Firm's goodwill × New partner's share"},
    {f:"Firm's goodwill from premium", b:"Premium × Reciprocal of new partner's share"},
    {f:"Hidden goodwill", b:"(New partner's capital × reciprocal of share) − (old adjusted capitals + new partner's capital)"},
    {f:"AU-LD", b:"Asset Up or Liability Down = Gain → credit Revaluation A/c"},
    {f:"Premium shared in", b:"Sacrificing ratio"},
    {f:"Revaluation profit and reserves shared in", b:"Old ratio, among old partners only"},
    {f:"Premium paid privately", b:"No entry in the firm's books"},
    {f:"Total capital from old capitals", b:"Combined adjusted capital × reciprocal of combined new share"}
  ],
  treat:[["Premium brought in cash","Cash Dr → Premium for Goodwill; Premium for Goodwill Dr → Sacrificing partners' Capital"],["Premium not brought","New partner's Current/Capital Dr → Sacrificing partners' Capital"],["Goodwill in books","Old partners' Capital Dr (old ratio) → Goodwill"],["Revaluation profit","Revaluation Dr → Old partners' Capital (old ratio)"],["General Reserve","General Reserve Dr → Old partners' Capital (old ratio)"],["Accumulated loss","Old partners' Capital Dr → Profit and Loss A/c"],["Capital deficit brought in","Cash Dr → Partner's Capital"]],
  mistakes:["Writing “Cash A/c Dr To Goodwill A/c” for premium (Goodwill A/c is not raised).","Sharing the premium in the new ratio or giving a share to the new partner.","Giving the new partner a share of reserves or revaluation profit.","Putting a fall in an asset's value on the credit side of Revaluation A/c.","Using the old ratio as the sacrificing ratio when the question says the new partner takes his share in some other way.","Forgetting the new partner's own capital when calculating hidden goodwill.","Showing General Reserve or Revaluation A/c in the new Balance Sheet."],
  fib:[
    {q:"The ratio in which old partners give up their share is called the ______ ratio.", a:["sacrificing","sacrifice"]},
    {q:"Profit on revaluation is shared by old partners in the ______ ratio.", a:["old"]},
    {q:"Premium for goodwill brought in cash is first credited to ______ A/c.", a:["premium for goodwill","premium"]},
    {q:"Goodwill already in the books is written off among old partners in their ______ ratio.", a:["old"]},
    {q:"If the premium is paid privately to the old partners, ______ entry is passed in the firm's books.", a:["no"]}
  ],
  mcq:[
    {q:"Sacrificing ratio is calculated as…", opts:["Old ratio − New ratio","New ratio − Old ratio","Old ratio ÷ New ratio","Capital ratio"], a:0, why:"Each old partner's sacrifice = old share − new share.", c:"sacrifice"},
    {q:"Premium for goodwill brought in cash is credited to old partners in…", opts:["Sacrificing ratio","Old ratio always","New ratio","Capital ratio"], a:0, why:"They are compensated for what they gave up.", c:"goodwill"},
    {q:"A and B share 3:2. C is admitted for 1/4 share taken equally from A and B. A's new share is…", opts:["19/40","9/20","3/8","1/2"], a:0, why:"3/5 − 1/8 = 24/40 − 5/40 = 19/40.", c:"ratio"},
    {q:"An unrecorded liability found at admission is recorded by…", opts:["Debiting Revaluation A/c","Crediting Revaluation A/c","Debiting the new partner's capital","No entry"], a:0, why:"A new liability is a loss: Revaluation A/c Dr, Liability A/c Cr.", c:"reval"},
    {q:"Workmen Compensation Reserve ₹20,000; claim ₹8,000. Amount credited to old partners:", opts:["₹12,000","₹20,000","₹8,000","₹28,000"], a:0, why:"Claim is paid out of the reserve; the excess 12,000 goes to old partners in the old ratio.", c:"reserve"},
    {q:"New partner pays premium privately to old partners. Entry in firm's books:", opts:["No entry","Cash Dr To Premium for Goodwill","Goodwill Dr To Capitals","Capitals Dr To Cash"], a:0, why:"The money never enters the firm.", c:"goodwill"},
    {q:"X and Y share equally. Z brings ₹50,000 for 1/3 share. Total capital of the new firm on this basis:", opts:["₹1,50,000","₹1,00,000","₹16,667","₹2,00,000"], a:0, why:"50,000 × 3 = 1,50,000.", c:"capital"},
    {q:"At admission, Goodwill A/c already in the books is…", opts:["Written off to old partners in old ratio","Written off to all partners in new ratio","Carried forward","Credited to the new partner"], a:0, why:"It was raised by the old firm; old partners write it off in the old ratio.", c:"goodwill"}
  ],
  ar:[
    {a:"At admission, General Reserve is distributed among the old partners only.", r:"Reserves are created out of profits earned before the new partner joined.", ans:0, why:"Both are true and R explains A.", c:"reserve"},
    {a:"Premium for goodwill is always credited to old partners in their old ratio.", r:"Old partners sacrifice their share of profit in favour of the new partner.", ans:3, why:"A is false: the premium goes in the SACRIFICING ratio, which equals the old ratio only in one case. R is true.", c:"goodwill"},
    {a:"Goodwill Account is not raised at the time of admission of a partner.", r:"AS-26 allows only purchased goodwill to be recorded in the books.", ans:0, why:"Both are true and R explains A.", c:"goodwill"}
  ],
  numericals:["L2","L3","L4","L5","s3"]
},

/* 16 · Chapter test. total 25 marks, 30 minutes. self = marked by the student against stated criteria */
test:{mins:30, items:[
  {type:"mcq", m:1, c:"sacrifice", q:"X and Y share 2:1. Z gets 1/4, taking it from X only. Y's sacrifice is…", opts:["Nil","1/12","1/4","1/3"], a:0, why:"Z takes nothing from Y."},
  {type:"mcq", m:1, c:"goodwill", q:"Premium for goodwill not brought in cash is debited to…", opts:["New partner's Current A/c","Goodwill A/c","Cash A/c","Premium for Goodwill A/c"], a:0, why:"His Current (or Capital) A/c is debited; sacrificing partners are credited."},
  {type:"mcq", m:1, c:"reval", q:"Increase in the value of land is…", opts:["Credited to Revaluation A/c","Debited to Revaluation A/c","Credited to Land A/c","Credited to new partner"], a:0, why:"Asset up = gain = credit Revaluation."},
  {type:"mcq", m:1, c:"reserve", q:"Debit balance of Profit and Loss A/c at admission is…", opts:["Debited to old partners' capitals in old ratio","Credited to old partners' capitals","Debited to all partners in new ratio","Shown in new Balance Sheet"], a:0, why:"It is an accumulated loss of the old partners."},
  {type:"mcq", m:1, c:"ratio", q:"A:B = 4:3. C is admitted for 1/8 share; old ratio continues. New ratio:", opts:["4:3:1","32:24:7","28:21:7","4:3:7"], a:0, why:"A = 4/7 × 7/8 = 4/8; B = 3/7 × 7/8 = 3/8; C = 1/8 → 4:3:1."},
  {type:"mcq", m:1, c:"capital", q:"Old partners' adjusted capitals total ₹1,80,000 for 3/4 share. New partner's capital for 1/4 share:", opts:["₹60,000","₹45,000","₹2,40,000","₹1,35,000"], a:0, why:"Total = 1,80,000 × 4/3 = 2,40,000; × 1/4 = 60,000."},
  {type:"ar", m:1, c:"reval", a:"Revaluation profit is credited to all partners including the new partner.", r:"The new partner gets a share in the future profits of the firm.", ans:3, why:"A is false (old partners only); R is true."},
  {type:"ar", m:1, c:"goodwill", a:"When the new partner brings premium in cash, it is credited to Premium for Goodwill A/c.", r:"As per AS-26, Goodwill A/c is not raised in the books at admission.", ans:0, why:"Both true; R explains A."},
  {type:"ratio", m:3, c:"ratio", q:"A and B share 3:2. C is admitted for 1/4 share, taking 1/6 from A and 1/12 from B. New ratio A : B : C =", ans:[26,19,15], why:"A 13/30 = 26/60; B 19/60; C 15/60."},
  {type:"nums", m:3, c:"hidden", q:"A and B share equally; adjusted capitals ₹70,000 and ₹50,000. C brings ₹75,000 for 1/3 share and no premium.", parts:[
    {p:"Hidden goodwill of the firm (₹)", ans:30000, why:"Total = 75,000 × 3 = 2,25,000. Actual = 70,000 + 50,000 + 75,000 = 1,95,000. Hidden goodwill = 30,000."},
    {p:"Amount debited to C's Current A/c for goodwill (₹)", ans:10000, why:"30,000 × 1/3 = 10,000, credited to A and B 5,000 each (sacrificing ratio 1:1)."}]},
  {type:"nums", m:4, c:"reval", q:"A and B share 3:2. At C's admission: Stock (₹50,000) reduced by 10%; Building appreciated by ₹12,000; unrecorded investments ₹4,000; outstanding salary ₹1,000 to be recorded.", parts:[
    {p:"Profit (+) or loss (−) on revaluation (₹)", ans:10000, why:"Gains 12,000 + 4,000 = 16,000; losses 5,000 + 1,000 = 6,000; profit 10,000."},
    {p:"Amount credited to A's Capital A/c (₹)", ans:6000, why:"10,000 × 3/5 = 6,000."}]},
  {type:"self", m:3, c:"ratio", q:"State any three adjustments required at the time of admission of a partner.",
   model:"(i) Calculation of the new profit sharing ratio and the sacrificing ratio. (ii) Accounting treatment of goodwill: premium credited to sacrificing partners. (iii) Revaluation of assets and reassessment of liabilities, with profit or loss shared by old partners in the old ratio. (Also correct: distribution of reserves and accumulated profits/losses; adjustment of capitals.)",
   crit:["Named one correct adjustment","Named a second correct adjustment","Named a third correct adjustment"]},
  {type:"journal", m:4, c:"goodwill", q:"P and Q share 3:1. On 1 April 2026 R is admitted for 1/5 share, taken from P and Q in their old ratio. Firm's goodwill ₹80,000. R brings ₹10,000 of his premium in cash and cannot bring the rest. Pass the journal entries.",
   entries:[
     {label:"Cash part of premium", date:"2026 Apr 1", lines:[{a:"cash", dr:10000},{a:"prem", cr:10000}], narr:"(Being part of premium brought in cash by R)"},
     {label:"Premium distributed and balance adjusted", date:"2026 Apr 1", lines:[{a:"prem", dr:10000},{a:"curR", dr:6000, why:"R's total share = 80,000 × 1/5 = 16,000; brought 10,000; balance 6,000 debited to his Current A/c."},{a:"capP", cr:12000, why:"16,000 × 3/4 = 12,000."},{a:"capQ", cr:4000, why:"16,000 × 1/4 = 4,000."}], narr:"(Being premium credited to sacrificing partners in 3:1)"}
   ]}
]}
});
})();
