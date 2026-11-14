/* Notesflix 101 · Accountancy Lab · Class XII · Change in Profit Sharing Ratio among Existing Partners
   Basis: CBSE 2026-27 Accountancy (055), Unit 1; NCERT Class XII Accountancy Part I, Chapter 3 (reconstitution); AS-26.
   All questions are ORIGINAL practice questions ("orig") or written in CBSE board style ("board") for Notesflix 101.
   Check: node lab/tools/validate.js change-psr */
(function(){
function RV(x){ return ["revaluation " + x, x + " revaluation", "profit on revaluation " + x, x + " capital", x + " share"]; }
NFLab.register({
id:"change-psr", cls:"XII", subject:"Accountancy", unit:"Accounting for Partnership Firms", num:"3", icon:"🔄",
title:"Change in Profit Sharing Ratio",
tagline:"Sacrificing and gaining ratios, goodwill compensation, revaluation, reserves and the single adjusting entry when existing partners change their ratio.",
notesLink:"../learn/xii-acc.html",
home:{q:"What is a change in profit sharing ratio?", ticks:["The same partners agree to share profits in a new ratio.","Some partners gain, some sacrifice.","Gainers compensate sacrificers; old reserves and revaluation go in the old ratio."]},
formats:["journal","ledger","capital"],
concepts:{
  ratio:{n:"Sacrificing and gaining ratio"}, goodwill:{n:"Goodwill compensation (AS-26)"}, reval:{n:"Revaluation of assets and liabilities", go:"lab"},
  reserve:{n:"Reserves and accumulated profits/losses"}, single:{n:"Single adjusting entry", go:"lab"}, entries:{n:"Journal entries and formats", go:"lab"}
},
acc:{
  gr:{n:"General Reserve A/c", al:["general reserve","reserve"]}, reval:{n:"Revaluation A/c", al:["revaluation","profit and loss adjustment"]},
  building:{n:"Building A/c", al:["building","buildings"]}, stock:{n:"Stock A/c", al:["stock","inventory"]}, goodwill:{n:"Goodwill A/c", al:["goodwill"]},
  wcr:{n:"Workmen Compensation Reserve A/c", al:["workmen compensation reserve","workmen compensation fund","wcr","workmen's compensation reserve"]},
  wcc:{n:"Claim for Workmen Compensation A/c", al:["claim for workmen compensation","workmen compensation claim","claim"]},
  ifr:{n:"Investment Fluctuation Reserve A/c", al:["investment fluctuation reserve","ifr","investment fluctuation fund"]}, inv:{n:"Investments A/c", al:["investments","investment"]}
},
intro:{
  hook:"A, B and C have run their firm for years in the ratio 3:2:1. B now does far more work, so the partners agree that from next year they will share 2:2:1. Nobody joins and nobody leaves, yet the accounts still need adjustments: some partners are giving up future profit, others are getting more.",
  points:[
    "A change in the profit sharing ratio among existing partners is a <b>reconstitution</b> of the firm: the old agreement ends and a new one begins.",
    "Partners whose share goes down <b>sacrifice</b>; partners whose share goes up <b>gain</b>.",
    "The <b>gaining partners compensate the sacrificing partners</b> for goodwill, in the ratio of their gain and sacrifice (AS-26: no Goodwill A/c is raised).",
    "Revaluation profit or loss, reserves and accumulated profits or losses belong to the period before the change, so they are shared in the <b>old ratio</b>."
  ],
  weight:"Board weightage: a 3 to 4 mark question (gaining ratio + goodwill entry, or a single adjusting entry) appears frequently; it also forms the base of admission and retirement questions."
},
objectives:[
  "Calculate each partner's sacrifice or gain and the sacrificing and gaining ratios.",
  "Pass the goodwill adjustment entry between gaining and sacrificing partners.",
  "Write off goodwill already in the books in the old ratio.",
  "Prepare the Revaluation Account and distribute reserves in the old ratio.",
  "Treat Workmen Compensation Reserve and Investment Fluctuation Reserve.",
  "Pass a single adjusting entry when book values are not to be changed."
],
prereq:[
  {t:"Common denominators", d:"Subtract fractions after bringing them to the same denominator.", check:{q:"3/6 − 2/5 = ?", opts:["1/10","1/30","1/11","5/30"], a:0, why:"15/30 − 12/30 = 3/30 = 1/10."}},
  {t:"Old shares from a ratio", d:"Ratio 3:2:1 → shares 3/6, 2/6, 1/6.", check:{q:"In the ratio 3:2:1, C's share is…", opts:["1/6","1/3","1/5","3/6"], a:0, why:"1 ÷ (3 + 2 + 1)."}},
  {t:"Revaluation rule", d:"Asset up or liability down = gain.", check:{q:"An increase in the value of building is…", opts:["A gain (credit Revaluation)","A loss (debit Revaluation)","Ignored","Credited to Building"], a:0, why:"AU-LD = Gain."}}
],
kid:[
  {id:"k1", c:"ratio", title:"Same friends, new sharing", art:{s:[["🧑","A 3"],["👦","B 2"],["👧","C 1"],["➡️",""],["🧑","A 2"],["👦","B 2"],["👧","C 1"]], cap:"Old 3:2:1 becomes new 2:2:1."},
   story:"<p>A, B and C share a pizza (the profit) 3:2:1. B now works the hardest, so they agree to share 2:2:1 from now on.</p><p>Turn both into thirtieths: old A 15/30, B 10/30, C 5/30; new A 12/30, B 12/30, C 6/30.</p><p>A's slice shrinks by 3/30: A <b>sacrifices</b>. B grows by 2/30 and C by 1/30: they <b>gain</b>.</p>",
   qa:[["Who sacrifices?","Partners whose new share is smaller."],["Who gains?","Partners whose new share is bigger."],["Formula?","Old − New: positive = sacrifice, negative = gain."],["Does anyone join?","No. Same partners, new ratio."]],
   check:{q:"Old 1:1, new 3:2. The first partner…", opts:["Gains 1/10","Sacrifices 1/10","Gains 1/5","Is unaffected"], a:0, why:"Old 1/2 = 5/10, new 3/5 = 6/10: a gain of 1/10."}},
  {id:"k2", c:"goodwill", title:"Pay the friend who gave up", art:{s:[["👦","B gains"],["👧","C gains"],["💸","pay"],["🧑","A sacrificed"]], cap:"Gainers compensate the sacrificer for goodwill."},
   story:"<p>The firm's good name (goodwill) is worth ₹90,000. A is giving up 3/30 of all future profits, which include profits from that good name.</p><p>So the gainers pay A: B pays 90,000 × 2/30 = <b>₹6,000</b> and C pays 90,000 × 1/30 = <b>₹3,000</b>. A receives <b>₹9,000</b>.</p><p>No cash moves; it is done through capital accounts: B's and C's Capital Dr, A's Capital Cr.</p>",
   qa:[["Who pays?","Gaining partners."],["Who receives?","Sacrificing partners."],["How much?","Goodwill × each one's gain or sacrifice."],["Is a Goodwill A/c opened?","No (AS-26)."]],
   check:{q:"Goodwill ₹60,000. X gains 1/6. X compensates the sacrificer by…", opts:["₹10,000","₹60,000","₹6,000","₹36,000"], a:0, why:"60,000 × 1/6 = 10,000."}},
  {id:"k3", c:"reval", title:"Recheck the price tags first", art:{s:[["🏢","Building ↑ ₹18,000"],["📦","Stock ↓ ₹6,000"],["➕","Profit ₹12,000"],["3️⃣2️⃣1️⃣","Old ratio"]], cap:"Changes in value so far belong to the old ratio."},
   story:"<p>Before the new ratio starts, the partners revalue: the building is worth ₹18,000 more; stock is worth ₹6,000 less. Net gain ₹12,000.</p><p>This gain arose while the old ratio applied, so A, B and C share it <b>3:2:1</b>: ₹6,000, ₹4,000 and ₹2,000.</p>",
   qa:[["Why revalue?","So that future gains or losses are not shared wrongly."],["Which ratio?","Old ratio."],["Where is it recorded?","Revaluation A/c."],["Then?","Transfer the profit or loss to capitals."]],
   check:{q:"Revaluation profit at a change in ratio is shared in…", opts:["Old ratio","New ratio","Gaining ratio","Equally"], a:0, why:"It belongs to the time before the change."}},
  {id:"k4", c:"reserve", title:"The old savings jar", art:{s:[["🫙","Reserve ₹30,000"],["🧑","A ₹15,000"],["👦","B ₹10,000"],["👧","C ₹5,000"]], cap:"Reserves built in the old ratio are shared in the old ratio."},
   story:"<p>The firm saved ₹30,000 as General Reserve out of past profits. Those profits were shared 3:2:1, so the reserve goes to A, B and C in <b>3:2:1</b>: ₹15,000, ₹10,000, ₹5,000.</p><p>An accumulated <b>loss</b> (debit balance of P&L) is also shared in the old ratio, but debited.</p>",
   qa:[["Which ratio?","Old ratio."],["Profit and Loss credit balance?","Credited to partners in the old ratio."],["Debit balance?","Debited to partners in the old ratio."],["Advertisement suspense?","Debited to partners in the old ratio."]],
   check:{q:"Debit balance of P&L ₹12,000; old ratio 3:2. A's share is…", opts:["₹7,200 debited","₹7,200 credited","₹6,000 debited","₹4,800 debited"], a:0, why:"12,000 × 3/5 = 7,200, debited (a loss)."}},
  {id:"k5", c:"single", title:"One entry instead of many", art:{s:[["📚","Keep book values"],["🧮","Net effect"],["👦➡️🧑","One entry"]], cap:"Gainer pays sacrificer for reserves, revaluation and goodwill together."},
   story:"<p>Sometimes partners want to <b>keep</b> the reserve and the old asset values in the books. Then we pass just <b>one adjusting entry</b>.</p><p>Add up everything that belongs to the old ratio (reserve + revaluation profit + goodwill), multiply by each partner's gain or sacrifice, and let the gainer's capital be debited and the sacrificer's credited.</p>",
   qa:[["When?","When book values and reserves are not to be changed."],["What is added?","Reserves, P&L credit, revaluation profit, goodwill (losses are subtracted)."],["Then?","× each sacrifice/gain."],["Entry?","Gaining partner's Capital Dr / To Sacrificing partner's Capital."]],
   check:{q:"Items to adjust total ₹50,000; X sacrifices 1/10, Y gains 1/10. Entry amount:", opts:["₹5,000","₹50,000","₹10,000","₹25,000"], a:0, why:"50,000 × 1/10 = 5,000."}}
],
kidActs:[
  {id:"ka1", type:"sort", title:"Which ratio is used?", c:"ratio",
   bins:["Old ratio","Sacrificing / gaining ratio"],
   items:[
     {t:"General Reserve", b:0, why:"Built from past profits."},{t:"Revaluation profit", b:0, why:"Changes in value up to the date of change."},
     {t:"Goodwill compensation", b:1, why:"Gainers pay sacrificers for what they gave up."},{t:"Existing goodwill written off", b:0, why:"It was raised by the old firm."},
     {t:"Debit balance of P&L", b:0, why:"A past loss."},{t:"Excess of Workmen Compensation Reserve", b:0, why:"A past saving."}
   ]},
  {id:"ka2", type:"minute", title:"One-minute challenge: sacrifice or gain?", c:"ratio", secs:60,
   items:[
     {q:"Old 1/2, new 2/5: the partner…", opts:["Sacrifices","Gains"], a:0},
     {q:"Old 1/3, new 1/2: the partner…", opts:["Gains","Sacrifices"], a:0},
     {q:"Who compensates for goodwill?", opts:["Gaining partners","Sacrificing partners"], a:0},
     {q:"Gaining partner's capital is…", opts:["Debited","Credited"], a:0},
     {q:"Old 3/5, new 3/5: the partner…", opts:["Neither gains nor sacrifices","Sacrifices"], a:0},
     {q:"Gaining ratio = …", opts:["New share − Old share","Old share − New share"], a:0}
   ]}
],
exam:[
  {id:"e1", c:"ratio", title:"Meaning and the adjustments required",
   html:"<p>When existing partners agree to share future profits in a new ratio, the firm is <b>reconstituted</b>. Adjustments required:</p><ol><li>Sacrificing ratio and gaining ratio</li><li>Treatment of goodwill</li><li>Revaluation of assets and reassessment of liabilities</li><li>Distribution of reserves and accumulated profits/losses</li><li>Adjustment of capitals (if agreed)</li></ol>"},
  {id:"e2", c:"ratio", title:"Sacrificing ratio and gaining ratio",
   html:"<p class='formula'>Sacrifice = Old share − New share (positive)</p><p class='formula'>Gain = New share − Old share (positive)</p><p class='eg'>A, B, C: old 3:2:1, new 2:2:1. In thirtieths: old 15, 10, 5; new 12, 12, 6. A sacrifices 3/30; B gains 2/30; C gains 1/30. Gaining ratio B:C = 2:1.</p><p class='tip'>Total sacrifice always equals total gain.</p>"},
  {id:"e3", c:"goodwill", title:"Treatment of goodwill (AS-26)",
   html:"<p>Goodwill is not raised in the books. The <b>gaining partners compensate the sacrificing partners</b> through capital accounts:</p><p class='formula'>Gaining Partners' Capital A/cs Dr (goodwill × gain)<br>&nbsp;&nbsp;To Sacrificing Partners' Capital A/cs (goodwill × sacrifice)</p><p><b>Goodwill already in the books</b> is written off first in the <b>old ratio</b>: All Partners' Capital A/cs Dr / To Goodwill A/c.</p>"},
  {id:"e4", c:"reval", title:"Revaluation of assets and liabilities",
   html:"<p>Assets and liabilities are revalued and the profit or loss is shared in the <b>old ratio</b> (Revaluation A/c, AU-LD = Gain).</p><table class='tt'><tbody><tr><td>Increase in asset / decrease in liability</td><td>Asset (or Liability) Dr / To Revaluation A/c</td></tr><tr><td>Decrease in asset / increase in liability</td><td>Revaluation A/c Dr / To Asset (or Liability)</td></tr><tr><td>Profit</td><td>Revaluation A/c Dr / To All Partners' Capital (old ratio)</td></tr></tbody></table>"},
  {id:"e5", c:"reserve", title:"Reserves, accumulated profits and losses",
   html:"<p>General Reserve, Reserve Fund, credit balance of P&L → credited to partners in the <b>old ratio</b>. Debit balance of P&L, Advertisement Suspense → debited in the old ratio.</p><p><b>Workmen Compensation Reserve (WCR):</b> claim paid out of it (WCR Dr / To Claim for Workmen Compensation); excess to partners in old ratio; if the claim exceeds the reserve, the excess claim is debited to Revaluation A/c.</p><p><b>Investment Fluctuation Reserve (IFR):</b> fall in market value of investments is met from IFR; balance to partners in old ratio; a fall larger than IFR is debited to Revaluation A/c.</p>"},
  {id:"e6", c:"single", title:"Single adjusting entry",
   html:"<p>If partners want reserves and asset values to remain unchanged in the books:</p><ol><li>Total = Reserves + P&L credit + Revaluation profit + Goodwill (− accumulated losses − revaluation loss).</li><li>Each partner's adjustment = Total × his sacrifice or gain.</li><li>Entry: Gaining Partner's Capital A/c Dr / To Sacrificing Partner's Capital A/c.</li></ol><p class='eg'>X:Y 3:2 → 1:1. GR 20,000 + revaluation profit 10,000 + P&L 5,000 + goodwill 50,000 = 85,000. X sacrifices 1/10; Y gains 1/10. Entry: Y's Capital Dr 8,500 / To X's Capital 8,500.</p>"},
  {id:"e7", c:"entries", title:"Board answer presentation",
   html:"<ol><li>Working note: old share, new share, sacrifice/gain for every partner (use one common denominator).</li><li>Goodwill entry in the gaining → sacrificing direction.</li><li>Revaluation A/c in T-format; Capital A/cs columnar if asked.</li><li>Single adjusting entry: show the total being adjusted in a working note.</li></ol>"}
],
visual:{kind:"change", title:"Ratio change playground", sub:"Type an old and a new ratio. See who sacrifices, who gains and by how much.",
  names:["A","B","C"], old:[3,2,1], nw:[2,2,1],
  flowTitle:"Steps at a change in ratio", flow:["Find each sacrifice and gain","Gainers compensate sacrificers for goodwill","Write off old goodwill (old ratio)","Revalue assets and liabilities (old ratio)","Distribute reserves and past P&L (old ratio)","Or pass one single adjusting entry","Share future profits in the new ratio"]},
formulas:[
  {n:"Sacrifice", f:"Old share − New share", code:"S-O-N", c:"ratio"},
  {n:"Gain", f:"New share − Old share", code:"G-N-O", c:"ratio"},
  {n:"Goodwill compensation", f:"Goodwill of firm × each partner's gain (paid) or sacrifice (received)", code:"Gainers pay, sacrificers get", c:"goodwill"},
  {n:"Old items", f:"Reserves, P&L balance, revaluation result, existing goodwill → old ratio", code:"Old stuff, old ratio", c:"reserve"},
  {n:"WCR", f:"Claim from reserve; excess to partners (old ratio); shortfall to Revaluation A/c", code:"Claim first, rest to partners", c:"reserve"},
  {n:"IFR", f:"Fall in investments from IFR; balance to partners (old ratio); extra fall to Revaluation A/c", code:"Fall first, rest to partners", c:"reserve"},
  {n:"Single adjusting entry", f:"(Reserves + profits + goodwill − losses) × sacrifice or gain", code:"Add it all, then × change", c:"single"}
],
illus:[
  {id:"i1", tag:"orig", c:"ratio", title:"Who sacrifices, who gains?",
   given:"P, Q and R share profits 2:2:1. From 1 April 2026 they will share 5:3:2.",
   required:"Each partner's sacrifice or gain.",
   formula:"Old share − New share (positive = sacrifice; negative = gain).",
   steps:["Old: P 4/10, Q 4/10, R 2/10. New: P 5/10, Q 3/10, R 2/10","P: 4/10 − 5/10 = −1/10 → <b>gains 1/10</b>","Q: 4/10 − 3/10 = 1/10 → <b>sacrifices 1/10</b>","R: 2/10 − 2/10 = 0 → <b>no change</b>"],
   answer:"P gains 1/10; Q sacrifices 1/10; R is unaffected.", why:"Only partners whose share changes take part in goodwill compensation."},
  {id:"i2", tag:"board", c:"goodwill", title:"Existing goodwill and compensation",
   given:"X and Y share profits 2:1. Goodwill appears in the books at ₹30,000. From 1 April 2026 they will share equally. The firm's goodwill is valued at ₹60,000.",
   required:"Journal entries.",
   formula:"Write off existing goodwill in old ratio 2:1; then gainer compensates sacrificer for 60,000 × gain.",
   steps:["Write off: X 30,000 × 2/3 = <b>₹20,000</b>; Y 30,000 × 1/3 = <b>₹10,000</b>","X: 2/3 − 1/2 = 1/6 sacrifice; Y: 1/2 − 1/3 = 1/6 gain","Compensation = 60,000 × 1/6 = <b>₹10,000</b>: Y pays X"],
   format:{type:"journal", entries:[
     {date:"2026 Apr 1", lines:[{a:"capX", dr:20000},{a:"capY", dr:10000},{a:"goodwill", cr:30000}], narr:"(Being existing goodwill written off in old ratio 2:1)"},
     {date:"2026 Apr 1", lines:[{a:"capY", dr:10000},{a:"capX", cr:10000}], narr:"(Being Y's share of goodwill adjusted for change in ratio)"}]},
   answer:"Write-off X ₹20,000, Y ₹10,000; Y's Capital Dr ₹10,000 To X's Capital ₹10,000.", why:"Old goodwill belongs to the old firm; the new valuation is settled between gainer and sacrificer."},
  {id:"i3", tag:"board", c:"reserve", title:"Accumulated loss and Workmen Compensation Reserve",
   given:"A and B share profits 3:2; from 1 April 2026 they will share 2:3. The books show a debit balance of P&L ₹12,000 and Workmen Compensation Reserve ₹20,000; a claim of ₹5,000 is admitted.",
   required:"Journal entries.",
   formula:"Old ratio 3:2 for both items. WCR: claim first, excess to partners.",
   steps:["P&L debit balance: A 12,000 × 3/5 = <b>₹7,200</b>; B <b>₹4,800</b> (debited)","WCR: claim ₹5,000 transferred to Claim A/c","Excess WCR 15,000: A <b>₹9,000</b>, B <b>₹6,000</b> (credited)"],
   format:{type:"journal", entries:[
     {date:"2026 Apr 1", lines:[{a:"capA", dr:7200},{a:"capB", dr:4800},{a:"pl", cr:12000}], narr:"(Being accumulated loss written off in old ratio)"},
     {date:"2026 Apr 1", lines:[{a:"wcr", dr:20000},{a:"wcc", cr:5000},{a:"capA", cr:9000},{a:"capB", cr:6000}], narr:"(Being WCR used for the claim and excess distributed in old ratio)"}]},
   answer:"A debited 7,200 and credited 9,000; B debited 4,800 and credited 6,000.", why:"Both items arose under the old agreement."}
],
solver:[
  {id:"s1", tag:"board", c:"goodwill", title:"Gaining ratio and goodwill compensation", mins:7,
   q:"A, B and C share profits 3:2:1. They decide to share 2:2:1 from 1 April 2026. Goodwill of the firm is ₹90,000.",
   steps:[
     {label:"A's change", prompt:"A's sacrifice (fraction)", kind:"frac", ans:[1,10], hint:"3/6 − 2/5.", formula:"Old − New", traps:[{v:[1,6], why:"You used the change in ratio terms, not shares. Convert 3:2:1 to 3/6 and 2:2:1 to 2/5."}], why:"15/30 − 12/30 = 3/30 = 1/10.", avoid:"Convert both ratios to shares with one denominator."},
     {label:"B's change", prompt:"B's gain (fraction)", kind:"frac", ans:[1,15], hint:"2/5 − 2/6.", formula:"New − Old", why:"12/30 − 10/30 = 2/30 = 1/15.", avoid:""},
     {label:"C's change", prompt:"C's gain (fraction)", kind:"frac", ans:[1,30], hint:"1/5 − 1/6.", formula:"New − Old", why:"6/30 − 5/30 = 1/30.", avoid:""},
     {label:"B's compensation", prompt:"Amount debited to B's Capital A/c (₹)", kind:"num", ans:6000, hint:"90,000 × 1/15.", formula:"Goodwill × gain", why:"6,000.", avoid:""},
     {label:"A's credit", prompt:"Amount credited to A's Capital A/c (₹)", kind:"num", ans:9000, hint:"90,000 × 1/10.", formula:"Goodwill × sacrifice", traps:[{v:45000, why:"You used A's OLD share. Use only his sacrifice (1/10)."}], why:"9,000 = 6,000 from B + 3,000 from C.", avoid:"Check: total debited = total credited."}
   ]},
  {id:"s2", tag:"board", c:"single", title:"Single adjusting entry", mins:7,
   q:"X and Y share 3:2; from 1 April 2026 they will share equally. Books show General Reserve ₹20,000 and P&L credit ₹5,000. Revaluation would give a profit of ₹10,000, and goodwill is ₹50,000. Partners do not want to change book values or remove the reserve. Find the single entry.",
   steps:[
     {label:"Total to adjust", prompt:"Total of reserve, P&L, revaluation profit and goodwill (₹)", kind:"num", ans:85000, hint:"20,000 + 5,000 + 10,000 + 50,000.", formula:"Σ old-ratio items", why:"85,000.", avoid:"Losses would be subtracted."},
     {label:"X's change", prompt:"X's sacrifice (fraction)", kind:"frac", ans:[1,10], hint:"3/5 − 1/2.", formula:"Old − New", why:"6/10 − 5/10 = 1/10.", avoid:""},
     {label:"Entry amount", prompt:"Amount of the single entry (₹)", kind:"num", ans:8500, hint:"85,000 × 1/10.", formula:"Total × sacrifice", traps:[{v:85000, why:"Only the CHANGE in share (1/10) is adjusted, not the full amount."},{v:5000, why:"You adjusted only goodwill. Include reserve, P&L and revaluation profit too."}], why:"Y's Capital Dr 8,500 / To X's Capital 8,500.", avoid:"Gainer is debited, sacrificer credited."}
   ]},
  {id:"s3", tag:"orig", c:"reserve", title:"Workmen Compensation Reserve smaller than the claim", mins:5,
   q:"P and Q share 2:1 and change to 1:1. Workmen Compensation Reserve is ₹30,000 and a claim of ₹36,000 is admitted.",
   steps:[
     {label:"Used from reserve", prompt:"Amount of the claim met from WCR (₹)", kind:"num", ans:30000, hint:"The whole reserve.", formula:"Lower of reserve and claim", why:"30,000.", avoid:""},
     {label:"Shortfall", prompt:"Excess claim debited to Revaluation A/c (₹)", kind:"num", ans:6000, hint:"36,000 − 30,000.", formula:"Claim − Reserve", traps:[{v:0, why:"The claim is larger than the reserve: the extra 6,000 is a loss."}], why:"6,000 debited to Revaluation A/c.", avoid:""},
     {label:"P's share of this loss", prompt:"P's share of the 6,000 loss (₹)", kind:"num", ans:4000, hint:"Old ratio 2:1.", formula:"Loss × old share", traps:[{v:3000, why:"You used the new ratio. Revaluation loss goes in the OLD ratio 2:1."}], why:"6,000 × 2/3 = 4,000.", avoid:""}
   ]},
  {id:"s4", tag:"orig", c:"reserve", title:"Investment Fluctuation Reserve", mins:5,
   q:"A and B share equally and change to 3:2. Investment Fluctuation Reserve ₹20,000. Investments (book value ₹1,00,000) have a market value of ₹92,000.",
   steps:[
     {label:"Fall in value", prompt:"Fall in value of investments (₹)", kind:"num", ans:8000, hint:"1,00,000 − 92,000.", formula:"Book − Market", why:"8,000.", avoid:""},
     {label:"IFR left", prompt:"IFR left after meeting the fall (₹)", kind:"num", ans:12000, hint:"20,000 − 8,000.", formula:"IFR − Fall", why:"12,000.", avoid:""},
     {label:"A's credit", prompt:"Amount credited to A (₹)", kind:"num", ans:6000, hint:"Old ratio 1:1.", formula:"Balance × old share", traps:[{v:7200, why:"New ratio used. Use the OLD ratio 1:1."},{v:10000, why:"You shared the whole IFR. First meet the fall of 8,000."}], why:"12,000 × 1/2 = 6,000.", avoid:""}
   ]}
],
lab:[
  {id:"L0", tag:"orig", level:"Easy", c:"goodwill", title:"Goodwill compensation entry",
   q:"A, B and C share profits 3:2:1. From 1 April 2026 they will share 2:2:1. Goodwill of the firm is valued at ₹90,000. Pass the journal entry for goodwill.",
   format:{type:"journal", entries:[
     {label:"Goodwill adjusted", date:"2026 Apr 1", lines:[{a:"capB", dr:6000, why:"B gains 2/30: 90,000 × 2/30."},{a:"capC", dr:3000, why:"C gains 1/30: 90,000 × 1/30."},{a:"capA", cr:9000, why:"A sacrifices 3/30: 90,000 × 3/30."}], narr:"(Being goodwill adjusted for change in profit sharing ratio)"}
   ]}},
  {id:"L1", tag:"board", level:"Medium", c:"entries", title:"Full change in ratio: journal entries",
   q:"A, B and C share profits 3:2:1 and agree to share 2:2:1 from 1 April 2026. Capitals: A ₹1,00,000, B ₹80,000, C ₹50,000. General Reserve ₹30,000. Building is to be appreciated by ₹18,000 and stock reduced by ₹6,000. Goodwill is valued at ₹90,000. Pass the journal entries.",
   format:{type:"journal", entries:[
     {label:"Increase in building", date:"2026 Apr 1", lines:[{a:"building", dr:18000},{a:"reval", cr:18000}], narr:"(Being building appreciated)"},
     {label:"Decrease in stock", date:"2026 Apr 1", lines:[{a:"reval", dr:6000},{a:"stock", cr:6000}], narr:"(Being stock reduced)"},
     {label:"Revaluation profit transferred", date:"2026 Apr 1", lines:[{a:"reval", dr:12000, why:"18,000 − 6,000."},{a:"capA", cr:6000, why:"Old ratio 3:2:1."},{a:"capB", cr:4000},{a:"capC", cr:2000}], narr:"(Being revaluation profit transferred in old ratio)"},
     {label:"General Reserve distributed", date:"2026 Apr 1", lines:[{a:"gr", dr:30000},{a:"capA", cr:15000},{a:"capB", cr:10000},{a:"capC", cr:5000}], narr:"(Being general reserve distributed in old ratio)"},
     {label:"Goodwill adjusted", date:"2026 Apr 1", lines:[{a:"capB", dr:6000},{a:"capC", dr:3000},{a:"capA", cr:9000}], narr:"(Being goodwill adjusted between gaining and sacrificing partners)"}
   ]}},
  {id:"L2", tag:"board", level:"Medium", c:"reval", title:"Revaluation Account", ref:"L1",
   q:"Using worksheet L1, prepare the Revaluation Account.",
   format:{type:"tacc", name:"Revaluation Account", heads:["Particulars","₹","Particulars","₹"], date:"2026 Apr 1",
    left:[{a:"stock", amt:6000, p:"To Stock A/c", why:"A decrease in an asset is a loss."},{a:"capA", amt:6000, p:"To A's Capital A/c (profit)", al:RV("a")},{a:"capB", amt:4000, p:"To B's Capital A/c (profit)", al:RV("b")},{a:"capC", amt:2000, p:"To C's Capital A/c (profit)", al:RV("c")}],
    right:[{a:"building", amt:18000, p:"By Building A/c"}], total:18000}},
  {id:"L3", tag:"board", level:"Hard", c:"entries", title:"Partners' Capital Accounts", ref:"L1",
   q:"Using worksheet L1, complete the Partners' Capital Accounts. Leave a cell blank where the partner has no amount.",
   format:{type:"grid", name:"Partners' Capital Accounts", head:["Dr. Particulars","A (₹)","B (₹)","C (₹)","Cr. Particulars","A (₹)","B (₹)","C (₹)"],
    rows:[
      ["To A's Capital A/c (goodwill)",{a:null},{a:6000},{a:3000},"By Balance b/d",{a:100000},{a:80000},{a:50000}],
      ["",null,null,null,"By Revaluation A/c",{a:6000},{a:4000},{a:2000}],
      ["",null,null,null,"By General Reserve A/c",{a:15000},{a:10000},{a:5000}],
      ["",null,null,null,"By B's and C's Capital A/cs (goodwill)",{a:9000},{a:null},{a:null}],
      ["To Balance c/d",{a:130000},{a:88000, why:"94,000 − 6,000."},{a:54000, why:"57,000 − 3,000."},"",null,null,null],
      ["Total",{a:130000},{a:94000},{a:57000},"Total",{a:130000},{a:94000},{a:57000}]]}},
  {id:"L4", tag:"board", level:"Hard", c:"single", title:"Single adjusting entry",
   q:"X and Y share profits 3:2; from 1 April 2026 they will share equally. The books show General Reserve ₹20,000 and a credit balance of P&L ₹5,000. Revaluation would show a profit of ₹10,000. Goodwill is ₹50,000. The partners do not want to change the book values of assets and liabilities or to remove the reserve and P&L balance. Pass a single adjusting entry.",
   format:{type:"journal", entries:[
     {label:"Single adjusting entry", date:"2026 Apr 1", lines:[{a:"capY", dr:8500, why:"Y gains 1/10 of (20,000 + 5,000 + 10,000 + 50,000)."},{a:"capX", cr:8500, why:"X sacrifices 1/10: 85,000 × 1/10."}], narr:"(Being adjustment for reserve, P&L, revaluation profit and goodwill on change in ratio)"}
   ]}},
  {id:"L5", tag:"orig", level:"Medium", c:"reserve", title:"Investment Fluctuation Reserve",
   q:"A and B share equally and decide to share 3:2 from 1 April 2026. Investment Fluctuation Reserve is ₹20,000. Investments (book value ₹1,00,000) are valued at ₹92,000. Pass the journal entry.",
   format:{type:"journal", entries:[
     {label:"IFR used and balance distributed", date:"2026 Apr 1", lines:[{a:"ifr", dr:20000},{a:"inv", cr:8000, why:"Fall in value 1,00,000 − 92,000 is met from IFR."},{a:"capA", cr:6000, why:"Balance 12,000 in old ratio 1:1."},{a:"capB", cr:6000}], narr:"(Being IFR used for fall in investments and balance distributed in old ratio)"}
   ]}}
],
blanks:[
  {id:"B1", t:"Journal", type:"journal", rows:8},
  {id:"B2", t:"Revaluation Account", type:"tacc", rows:6, heads:["Particulars","₹","Particulars","₹"]},
  {id:"B3", t:"Partners' Capital Accounts (3 partners)", type:"grid", rows:7, head:["Dr. Particulars","Partner 1","Partner 2","Partner 3","Cr. Particulars","Partner 1","Partner 2","Partner 3"]},
  {id:"B4", t:"Working: old share, new share, change", type:"grid", rows:4, single:true, head:["Partner","Old share","New share","Sacrifice / Gain"]}
],
mistakes:[
  {id:"m1", c:"goodwill", q:"X:Y 1:1 → 2:1. Goodwill ₹60,000. Entry passed:", shown:[["X's Capital A/c","Dr",20000,""],["To Y's Capital A/c","",null,20000]],
   opts:["The amount should be ₹10,000: X gains only 1/6 (2/3 − 1/2)","X should be credited","Goodwill A/c should be raised","Nothing is wrong"], a:0, why:"60,000 × 1/6 = 10,000. ₹20,000 wrongly uses 1/3."},
  {id:"m2", c:"goodwill", q:"Goodwill ₹60,000 at a change in ratio is recorded as:", shown:[["Goodwill A/c","Dr",60000,""],["To X's Capital A/c","",null,30000],["To Y's Capital A/c","",null,30000]],
   opts:["Goodwill A/c cannot be raised (AS-26); gainers should compensate sacrificers","Amounts should be in new ratio","Goodwill should be credited","Nothing is wrong"], a:0, why:"Only purchased goodwill is recorded."},
  {id:"m3", c:"reserve", q:"General Reserve ₹30,000; old ratio 3:2:1, new 2:2:1. Entry passed:", shown:[["General Reserve A/c","Dr",30000,""],["To A's Capital A/c","",null,12000],["To B's Capital A/c","",null,12000],["To C's Capital A/c","",null,6000]],
   opts:["Reserve goes in the OLD ratio: 15,000, 10,000, 5,000","Reserve should be debited to partners","It should be carried forward","Nothing is wrong"], a:0, why:"Reserves belong to the old ratio."},
  {id:"m4", c:"goodwill", q:"A sacrifices 1/10, B gains 1/10. Goodwill ₹50,000. Entry passed:", shown:[["A's Capital A/c","Dr",5000,""],["To B's Capital A/c","",null,5000]],
   opts:["Sides reversed: B (gainer) Dr, A (sacrificer) Cr","Amount should be ₹50,000","Should go through Goodwill A/c","Nothing is wrong"], a:0, why:"The gainer compensates the sacrificer."},
  {id:"m5", c:"reval", q:"Revaluation profit ₹12,000; old ratio 3:2:1; new 2:2:1. Entry passed:", shown:[["Revaluation A/c","Dr",12000,""],["To A's Capital A/c","",null,4800],["To B's Capital A/c","",null,4800],["To C's Capital A/c","",null,2400]],
   opts:["Revaluation profit goes in the OLD ratio: 6,000, 4,000, 2,000","Should be debited to partners","Should be in gaining ratio","Nothing is wrong"], a:0, why:"Values changed before the new ratio began."}
],
cases:[
  {id:"c1", tag:"board", title:"Trio Tech Solutions",
   story:"Isha, Kunal and Manav run Trio Tech in the ratio 2:2:1. From 1 April 2026 Manav will head a new branch, so they agree to share 2:1:1. The firm's goodwill is valued at ₹1,20,000. The books show General Reserve ₹40,000 and a debit balance of Profit and Loss ₹10,000.",
   qs:[
     {type:"mcq", c:"ratio", q:"Who sacrifices?", opts:["Kunal","Isha","Manav","Nobody"], a:0, why:"Kunal: 2/5 − 1/4 = 3/20 sacrifice; Isha 2/5 − 2/4 = −1/10 gain; Manav 1/5 − 1/4 = −1/20 gain."},
     {type:"ratio", c:"ratio", q:"Gaining ratio Isha : Manav", ans:[2,1], why:"1/10 : 1/20 = 2 : 1."},
     {type:"num", c:"goodwill", q:"Amount credited to Kunal's Capital A/c for goodwill (₹)", ans:18000, why:"1,20,000 × 3/20 = 18,000."},
     {type:"num", c:"goodwill", q:"Amount debited to Isha's Capital A/c for goodwill (₹)", ans:12000, why:"1,20,000 × 1/10 = 12,000."},
     {type:"num", c:"reserve", q:"Manav's net credit from General Reserve and P&L debit balance (₹)", ans:6000, why:"(40,000 − 10,000) × 1/5 = 6,000, in the OLD ratio."}
   ]}
],
games:{
  names:{bs:"Ratio Sorter", profit:"Revaluation Master"},
  obj:{dc:"Choose the correct entry for each change-in-ratio transaction.", bs:"Sort each item into the ratio used for it.", profit:"Track the running revaluation result."},
  cc:{bs:"ratio", profit:"reval", missing:"ratio", escape:"goodwill", casegame:"goodwill", detective:"goodwill", race:"entries"},
  dc:[
    {t:"B gains and C sacrifices; goodwill adjusted.", ok:"Dr B's Capital A/c · Cr C's Capital A/c", bad:["Dr C's Capital A/c · Cr B's Capital A/c","Dr Goodwill A/c · Cr C's Capital A/c","Dr B's Capital A/c · Cr Goodwill A/c"], c:"goodwill"},
    {t:"Goodwill appearing in the books is written off.", ok:"Dr All Partners' Capital A/cs (old ratio) · Cr Goodwill A/c", bad:["Dr Goodwill A/c · Cr All Partners' Capital A/cs","Dr All Partners' Capital A/cs (new ratio) · Cr Goodwill A/c","Dr Revaluation A/c · Cr Goodwill A/c"], c:"goodwill"},
    {t:"General Reserve distributed.", ok:"Dr General Reserve A/c · Cr Partners' Capital A/cs (old ratio)", bad:["Dr General Reserve A/c · Cr Partners' Capital A/cs (new ratio)","Dr Partners' Capital A/cs · Cr General Reserve A/c","Dr General Reserve A/c · Cr Revaluation A/c"], c:"reserve"},
    {t:"Revaluation profit transferred.", ok:"Dr Revaluation A/c · Cr Partners' Capital A/cs (old ratio)", bad:["Dr Revaluation A/c · Cr Partners' Capital A/cs (new ratio)","Dr Partners' Capital A/cs · Cr Revaluation A/c","Dr Revaluation A/c · Cr Gaining partners only"], c:"reval"},
    {t:"Workmen compensation claim admitted, met from WCR.", ok:"Dr Workmen Compensation Reserve A/c · Cr Claim for Workmen Compensation A/c", bad:["Dr Claim A/c · Cr WCR A/c","Dr Revaluation A/c · Cr WCR A/c","Dr Partners' Capital A/cs · Cr Claim A/c"], c:"reserve"},
    {t:"Claim exceeds Workmen Compensation Reserve.", ok:"Dr Revaluation A/c · Cr Claim for Workmen Compensation A/c (excess)", bad:["Dr Partners' Capital A/cs (new ratio) · Cr Claim A/c","Dr Claim A/c · Cr Revaluation A/c","Dr Goodwill A/c · Cr Claim A/c"], c:"reserve"},
    {t:"Fall in value of investments met from IFR.", ok:"Dr Investment Fluctuation Reserve A/c · Cr Investments A/c", bad:["Dr Investments A/c · Cr IFR A/c","Dr Revaluation A/c · Cr IFR A/c","Dr Partners' Capital A/cs · Cr Investments A/c"], c:"reserve"},
    {t:"Advertisement Suspense A/c written off.", ok:"Dr Partners' Capital A/cs (old ratio) · Cr Advertisement Suspense A/c", bad:["Dr Advertisement Suspense A/c · Cr Partners' Capital A/cs","Dr Partners' Capital A/cs (new ratio) · Cr Advertisement Suspense A/c","Dr Revaluation A/c · Cr Advertisement Suspense A/c"], c:"reserve"},
    {t:"Single adjusting entry: Y gains, X sacrifices.", ok:"Dr Y's Capital A/c · Cr X's Capital A/c", bad:["Dr X's Capital A/c · Cr Y's Capital A/c","Dr Revaluation A/c · Cr X's Capital A/c","Dr General Reserve A/c · Cr Y's Capital A/c"], c:"single"},
    {t:"An unrecorded liability is found at the change in ratio.", ok:"Dr Revaluation A/c · Cr Liability A/c", bad:["Dr Liability A/c · Cr Revaluation A/c","Dr Partners' Capital A/cs · Cr Liability A/c","Dr Liability A/c · Cr Partners' Capital A/cs"], c:"reval"}
  ],
  bs:{c:"ratio", title:"Which ratio is used for each item at a change in profit sharing ratio?",
    bins:["Old ratio","Sacrificing / gaining ratio","New ratio"],
    items:[
      {t:"General Reserve", b:0},{t:"Revaluation loss", b:0},{t:"Credit balance of P&L", b:0},{t:"Existing goodwill written off", b:0},{t:"Excess of WCR over claim", b:0},
      {t:"Goodwill compensation", b:1},{t:"Single adjusting entry", b:1},
      {t:"Profits earned after the change", b:2, why:"Future profits follow the new agreement."},{t:"Losses of future years", b:2, why:"Future losses follow the new agreement."}
    ]},
  race:[
    {t:"Goodwill ₹1,20,000; A gains 1/12. Amount debited to A?", ok:"A's Capital A/c Dr → Sacrificing partner's Capital A/c", bad:["Sacrificing partner's Capital A/c Dr → A's Capital A/c","Goodwill A/c Dr → A's Capital A/c"], amt:10000, c:"goodwill"},
    {t:"General Reserve ₹24,000; old ratio 1:1, new 2:1. Credit to each partner?", ok:"General Reserve A/c Dr → Partners' Capital A/cs", bad:["Partners' Capital A/cs Dr → General Reserve A/c","General Reserve A/c Dr → Revaluation A/c"], amt:12000, c:"reserve"},
    {t:"Machinery ₹50,000 depreciated 10% at the change.", ok:"Revaluation A/c Dr → Machinery A/c", bad:["Machinery A/c Dr → Revaluation A/c","Depreciation A/c Dr → Machinery A/c"], amt:5000, c:"reval"},
    {t:"Existing goodwill ₹15,000 written off; old ratio 2:1. Amount debited to the first partner?", ok:"Partners' Capital A/cs Dr → Goodwill A/c", bad:["Goodwill A/c Dr → Partners' Capital A/cs","Revaluation A/c Dr → Goodwill A/c"], amt:10000, c:"goodwill"},
    {t:"WCR ₹10,000, no claim. Old ratio 3:2. Credit to the second partner?", ok:"Workmen Compensation Reserve A/c Dr → Partners' Capital A/cs", bad:["Partners' Capital A/cs Dr → WCR A/c","WCR A/c Dr → Revaluation A/c"], amt:4000, c:"reserve"},
    {t:"Total to adjust ₹60,000; X sacrifices 1/6. Single entry amount?", ok:"Gaining partner's Capital A/c Dr → X's Capital A/c", bad:["X's Capital A/c Dr → Gaining partner's Capital A/c","Revaluation A/c Dr → X's Capital A/c"], amt:10000, c:"single"}
  ],
  missing:[
    {q:"Old 2:1, new 1:1. First partner's sacrifice = ?", kind:"frac", ans:[1,6], why:"2/3 − 1/2 = 1/6.", c:"ratio"},
    {q:"Old 3:2, new 2:3. Second partner's gain = ?", kind:"frac", ans:[1,5], why:"3/5 − 2/5 = 1/5.", c:"ratio"},
    {q:"Gainer pays ₹8,000 for a gain of 1/10. Firm's goodwill = ?", kind:"num", ans:80000, why:"8,000 × 10 = 80,000.", c:"goodwill"},
    {q:"IFR ₹15,000; investments fall by ₹9,000. Amount left for partners = ?", kind:"num", ans:6000, why:"15,000 − 9,000.", c:"reserve"},
    {q:"Old 1:1:1, new 2:2:1. Third partner's sacrifice = ?", kind:"frac", ans:[2,15], why:"1/3 − 1/5 = 5/15 − 3/15 = 2/15.", c:"ratio"},
    {q:"Revaluation profit ₹15,000; old ratio 3:2; new 1:1. Second partner's credit = ?", kind:"num", ans:6000, why:"15,000 × 2/5 (old ratio).", c:"reval"}
  ],
  profit:{ask:"running revaluation result?", c:"reval", start:"Start from 0. Type the running revaluation result after each change (use − for a loss).", base:"A, B, C share 3:2:1 (old ratio).",
    steps:[{t:"Building appreciated by ₹18,000", v:18000},{t:"Stock reduced by ₹6,000", v:-6000},{t:"Provision for doubtful debts ₹2,400 created", v:-2400},{t:"Unrecorded computer ₹3,000 brought in", v:3000}],
    final:{q:"C's share in the old ratio 3:2:1 = ?", ans:2100, why:"12,600 × 1/6 = 2,100.", hint:"Old ratio, C = 1/6."}},
  escape:{story:"The firm's agreement is locked in a cabinet with four locks. Solve each to change the ratio officially.",
    locks:[
      {room:"Lock 1: The Fraction Lock", q:"Old 5:3, new 1:1. The second partner gains a/b in lowest terms. Code = a + b.", ans:9, hint:"1/2 − 3/8 = 1/8 → 1 + 8.", c:"ratio"},
      {room:"Lock 2: The Goodwill Lock", q:"Goodwill ₹72,000. Old 5:3, new 1:1. Code = amount the gainer pays.", ans:9000, hint:"72,000 × 1/8.", c:"goodwill"},
      {room:"Lock 3: The Reserve Lock", q:"WCR ₹25,000; claim ₹10,000; old ratio 3:2. Code = first partner's credit.", ans:9000, hint:"Excess 15,000 × 3/5.", c:"reserve"},
      {room:"Lock 4: The Single Lock", q:"Reserve ₹30,000, revaluation loss ₹6,000, goodwill ₹36,000; X sacrifices 1/12. Code = single entry amount.", ans:5000, hint:"(30,000 − 6,000 + 36,000) × 1/12.", c:"single"}
    ]}
},
revision:{
  summary:["Change in ratio among existing partners = reconstitution.","Sacrifice = Old − New; Gain = New − Old; total sacrifice = total gain.","Goodwill: no Goodwill A/c (AS-26). Gainers' Capital Dr → Sacrificers' Capital Cr (goodwill × change).","Existing goodwill written off in old ratio.","Revaluation profit/loss, reserves, P&L balances → old ratio.","WCR: claim first, excess to partners, shortfall to Revaluation A/c. IFR: fall first, balance to partners, excess fall to Revaluation A/c.","Single adjusting entry when book values stay: (reserves + profits + goodwill − losses) × change."],
  defs:[["Sacrificing ratio","The ratio in which partners give up their share of profit."],["Gaining ratio","The ratio in which partners acquire an additional share of profit: New share − Old share."],["Reconstitution","Any change in the existing agreement among partners, ending the old agreement and starting a new one."],["Single adjusting entry","One entry between gaining and sacrificing partners that replaces separate entries for reserves, revaluation and goodwill."]],
  flash:[{f:"Gaining ratio",b:"New share − Old share"},{f:"Sacrificing ratio",b:"Old share − New share"},{f:"Goodwill entry",b:"Gainer's Capital Dr → Sacrificer's Capital Cr"},{f:"Reserves at change in ratio",b:"Old ratio"},{f:"WCR claim > reserve",b:"Excess claim → Revaluation A/c (Dr)"},{f:"IFR",b:"Meet the fall; balance to partners in old ratio"},{f:"Single adjusting entry",b:"Total × change in share"}],
  treat:[["Goodwill compensation","Gaining partners' Capital Dr → Sacrificing partners' Capital"],["Existing goodwill","All partners' Capital Dr (old ratio) → Goodwill"],["General Reserve","GR Dr → Partners' Capital (old ratio)"],["P&L debit balance","Partners' Capital Dr (old ratio) → P&L"],["WCR","WCR Dr → Claim; excess → Partners' Capital (old ratio)"],["IFR","IFR Dr → Investments (fall); balance → Partners' Capital (old ratio)"]],
  mistakes:["Raising a Goodwill A/c at a change in ratio.","Reversing the goodwill entry (crediting the gainer).","Distributing reserves or revaluation profit in the new ratio.","Forgetting to deduct the claim before distributing WCR.","In a single entry, multiplying by the old share instead of the change in share."],
  fib:[{q:"Gain = New share − ______ share.", a:["old"]},{q:"Gaining partners compensate the ______ partners for goodwill.", a:["sacrificing"]},{q:"Reserves at a change in ratio are distributed in the ______ ratio.", a:["old"]},{q:"If the claim is more than WCR, the excess is debited to ______ A/c.", a:["revaluation"]}],
  mcq:[
    {q:"Old 3:2, new 1:1. The first partner…", opts:["Sacrifices 1/10","Gains 1/10","Sacrifices 1/5","Is unaffected"], a:0, why:"3/5 − 1/2 = 1/10.", c:"ratio"},
    {q:"At a change in ratio, the goodwill entry is…", opts:["Gaining partners Dr, sacrificing partners Cr","Sacrificing Dr, gaining Cr","Goodwill Dr, all partners Cr","All partners Dr, goodwill Cr"], a:0, why:"Gainers compensate.", c:"goodwill"},
    {q:"General Reserve at a change in ratio is shared in…", opts:["Old ratio","New ratio","Gaining ratio","Equally"], a:0, why:"Past profit.", c:"reserve"},
    {q:"WCR ₹20,000, claim ₹24,000. Amount debited to Revaluation A/c:", opts:["₹4,000","₹20,000","₹24,000","Nil"], a:0, why:"Excess claim.", c:"reserve"},
    {q:"X:Y 1:1 → 3:2. Goodwill ₹50,000. Entry:", opts:["X's Capital Dr ₹5,000 / To Y's Capital ₹5,000","Y's Capital Dr ₹5,000 / To X's Capital","X's Capital Dr ₹25,000 / To Y's Capital","No entry"], a:0, why:"X gains 1/10.", c:"goodwill"},
    {q:"Single adjusting entry is used when partners…", opts:["Do not want to change book values","Want a new Goodwill A/c","Admit a partner","Dissolve the firm"], a:0, why:"Definition.", c:"single"}
  ],
  ar:[
    {a:"At a change in ratio, the gaining partner compensates the sacrificing partner.", r:"The gaining partner will receive a larger share of future profits, which include returns on goodwill.", ans:0, why:"Both true; R explains A.", c:"goodwill"},
    {a:"Revaluation profit at a change in ratio is shared in the new ratio.", r:"The change in values took place before the new ratio came into force.", ans:3, why:"A false; R true.", c:"reval"},
    {a:"A partner whose share is unchanged takes part in goodwill adjustment.", r:"Only partners who sacrifice or gain take part in goodwill adjustment.", ans:3, why:"A false; R true.", c:"goodwill"}
  ],
  numericals:["L1","L2","L3","L4","s1","s3"]
},
test:{mins:30, items:[
  {type:"mcq", m:1, c:"ratio", q:"Old 2:1, new 1:2. The first partner…", opts:["Sacrifices 1/3","Gains 1/3","Sacrifices 1/6","Gains 1/6"], a:0, why:"2/3 − 1/3 = 1/3."},
  {type:"mcq", m:1, c:"goodwill", q:"As per AS-26, at a change in ratio goodwill is…", opts:["Not raised in the books","Raised and kept","Raised and written off in new ratio","Credited to gainers"], a:0, why:"Only purchased goodwill is recorded."},
  {type:"mcq", m:1, c:"reserve", q:"Debit balance of P&L at a change in ratio is…", opts:["Debited to partners in old ratio","Credited in old ratio","Debited in new ratio","Ignored"], a:0, why:"Past loss."},
  {type:"mcq", m:1, c:"reval", q:"Increase in a liability on revaluation is…", opts:["Debited to Revaluation A/c","Credited to Revaluation A/c","Credited to partners","Ignored"], a:0, why:"Liability up = loss."},
  {type:"mcq", m:1, c:"reserve", q:"IFR ₹10,000; investments fall by ₹14,000. Amount debited to Revaluation A/c:", opts:["₹4,000","₹10,000","₹14,000","Nil"], a:0, why:"Fall beyond IFR."},
  {type:"mcq", m:1, c:"single", q:"In a single adjusting entry, revaluation LOSS is…", opts:["Subtracted from the total","Added to the total","Ignored","Shared in new ratio"], a:0, why:"Losses reduce the amount adjusted."},
  {type:"ar", m:1, c:"ratio", a:"Total sacrifice equals total gain at a change in ratio.", r:"Whatever share one partner gives up is taken by the others.", ans:0, why:"Both true; R explains A."},
  {type:"ar", m:1, c:"reserve", a:"General Reserve is distributed in the new ratio at a change in ratio.", r:"Reserves are created out of profits of past years.", ans:3, why:"A false; R true."},
  {type:"ratio", m:3, c:"ratio", q:"P, Q and R share 5:3:2. They agree to share 1:2:2 in future. Write the gaining ratio Q : R.", ans:[1,2], why:"In tenths: old 5, 3, 2; new 2, 4, 4. P sacrifices 3/10; Q gains 1/10; R gains 2/10. Gaining ratio 1 : 2."},
  {type:"nums", m:3, c:"goodwill", q:"A, B, C share 1:1:1; new ratio 2:2:1. Goodwill ₹1,50,000.", parts:[{p:"Amount credited to C (₹)", ans:20000, why:"C sacrifices 1/3 − 1/5 = 2/15: 1,50,000 × 2/15."},{p:"Amount debited to A (₹)", ans:10000, why:"A gains 2/5 − 1/3 = 1/15: 1,50,000 × 1/15."}]},
  {type:"nums", m:4, c:"single", q:"X:Y 2:3 → 1:1. GR ₹15,000; P&L debit ₹5,000; revaluation profit ₹10,000; goodwill ₹60,000. Single adjusting entry.", parts:[{p:"Total to adjust (₹)", ans:80000, why:"15,000 − 5,000 + 10,000 + 60,000."},{p:"Amount of the entry (₹)", ans:8000, why:"X gains 1/2 − 2/5 = 1/10: 80,000 × 1/10. X's Capital Dr / To Y's Capital."}]},
  {type:"self", m:3, c:"ratio", q:"State any three adjustments required at the time of change in profit sharing ratio among existing partners.",
   model:"(i) Calculation of sacrificing and gaining ratios. (ii) Treatment of goodwill: gaining partners compensate sacrificing partners. (iii) Revaluation of assets and reassessment of liabilities. Also correct: distribution of reserves and accumulated profits/losses; adjustment of capitals.",
   crit:["One correct adjustment","A second correct adjustment","A third correct adjustment"]},
  {type:"journal", m:4, c:"goodwill", q:"M and N share 3:1. From 1 April 2026 they will share equally. Goodwill appears in the books at ₹40,000; the firm's goodwill is now valued at ₹80,000. Pass the journal entries.",
   entries:[
     {label:"Existing goodwill written off", date:"2026 Apr 1", lines:[{a:"capM", dr:30000, why:"Old ratio 3:1: 40,000 × 3/4."},{a:"capN", dr:10000},{a:"goodwill", cr:40000}], narr:"(Being existing goodwill written off in old ratio)"},
     {label:"Goodwill adjusted", date:"2026 Apr 1", lines:[{a:"capN", dr:20000, why:"N gains 1/2 − 1/4 = 1/4: 80,000 × 1/4."},{a:"capM", cr:20000}], narr:"(Being goodwill adjusted for change in ratio)"}
   ]}
]}
});
})();
