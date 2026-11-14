/* Notesflix 101 · Accountancy Lab · Class XII · Goodwill: Nature and Valuation
   Basis: CBSE 2026-27 Accountancy (055), Unit 1; NCERT Class XII Accountancy Part I, Chapter 2.
   All questions are ORIGINAL practice questions ("orig") or written in CBSE board style ("board") for Notesflix 101.
   Check: node lab/tools/validate.js goodwill */
NFLab.register({
id:"goodwill", cls:"XII", subject:"Accountancy", unit:"Accounting for Partnership Firms", num:"2", icon:"⭐",
title:"Goodwill: Nature and Valuation",
tagline:"What goodwill is, why it is valued, and the four methods: average profit, weighted average, super profit and capitalisation.",
notesLink:"../learn/xii-acc.html",
home:{q:"What is goodwill?", ticks:["It is the money value of a firm's good name.","It comes from loyal customers, location and good management.","It is valued when partners or their ratio change."]},
formats:["statements"],
mistakeSub:"Each working below has one error. Find it.",
concepts:{
  meaning:{n:"Meaning, nature and factors"}, adjust:{n:"Adjusting past profits", go:"lab"}, avg:{n:"Average profit method"},
  wavg:{n:"Weighted average profit method"}, super:{n:"Super profit method"}, capm:{n:"Capitalisation method"}, ce:{n:"Capital employed", go:"lab"}
},
acc:{},

intro:{
  hook:"Two sweet shops sit on the same street with the same ovens and the same capital. One has a queue every evening; the other is empty. The difference in their profit comes from something you cannot touch: goodwill. Partnership accounts must put a rupee value on it whenever partners change.",
  points:[
    "<b>Goodwill</b> is the value of the reputation of a firm, which enables it to earn more profit than a normal business with the same capital.",
    "It is an <b>intangible asset</b> (not visible, but it has value and can be sold). It is <b>not a fictitious asset</b>.",
    "Under AS-26 only <b>purchased goodwill</b> is recorded in the books; self-generated goodwill is not.",
    "Goodwill is valued when the profit sharing ratio changes, a partner is admitted, retires or dies, or the firm is sold or amalgamated."
  ],
  weight:"Board weightage: valuation of goodwill is asked almost every year as a 3 or 4 mark numerical, often with abnormal items to adjust first."
},
objectives:[
  "Explain the meaning and nature of goodwill and the factors that affect it.",
  "State when goodwill needs to be valued in a partnership firm.",
  "Adjust past profits for abnormal and expected future items.",
  "Value goodwill by the average profit and weighted average profit methods.",
  "Value goodwill by the super profit method and both capitalisation methods.",
  "Calculate capital employed correctly."
],
prereq:[
  {t:"Simple average", d:"Average = total ÷ number of items.", check:{q:"Average of ₹80,000, ₹1,00,000 and ₹1,20,000 is…", opts:["₹1,00,000","₹3,00,000","₹90,000","₹1,10,000"], a:0, why:"3,00,000 ÷ 3 = 1,00,000."}},
  {t:"Percentage return", d:"Normal profit = Capital × Normal rate of return/100.", check:{q:"Capital ₹5,00,000 at a normal return of 12% gives a normal profit of…", opts:["₹60,000","₹6,000","₹41,667","₹1,20,000"], a:0, why:"5,00,000 × 12% = 60,000."}},
  {t:"Reversing a percentage", d:"If 10% of X is ₹50,000, X = 50,000 × 100/10.", check:{q:"10% of a sum is ₹40,000. The sum is…", opts:["₹4,00,000","₹4,000","₹44,000","₹40,00,000"], a:0, why:"40,000 × 100/10 = 4,00,000."}}
],
kid:[
  {id:"k1", c:"meaning", title:"The famous sweet shop", art:{s:[["🏪","Same shop"],["🍬","Same sweets"],["👥👥👥","Long queue!"],["⭐","Good name"]], cap:"The extra profit from a good name is goodwill."},
   story:"<p>Sharma Sweets and Gupta Sweets are on the same street. Both have the same ovens and the same money in the business. But people line up at Sharma Sweets every evening because its laddoos are famous.</p><p>So Sharma Sweets earns <b>more profit</b> than a normal shop. The money value of this good name is called <b>goodwill</b>.</p><p>You cannot touch it, but you could sell it: a buyer would pay extra for a shop that already has loyal customers. So goodwill is an <b>intangible asset</b>.</p>",
   qa:[["Who creates goodwill?","The owners, through good service, quality and honesty."],["What is it?","The value of a firm's reputation and extra earning power."],["Why value it?","When partners change, the old partners must be paid for it."],["How is it shown?","Only purchased goodwill appears in the books (AS-26)."]],
   check:{q:"Goodwill is…", opts:["An intangible asset","A fictitious asset","A current asset","A liability"], a:0, why:"It has real value but no physical form."}},
  {id:"k2", c:"meaning", title:"What makes a good name?", art:{s:[["📍","Location"],["😊","Service"],["🏆","Quality"],["👨‍💼","Management"],["🔁","Repeat buyers"]], cap:"Factors that build goodwill."},
   story:"<p>A shop near a busy market gets more customers: <b>location</b>. A shop with polite staff and fast service is loved: <b>efficient management</b>. A shop selling the only good kulfi in town faces little <b>competition</b>.</p><p>Other factors: <b>nature of the business</b> (steady demand), <b>quality of products</b>, <b>market situation</b> (a monopoly), <b>special advantages</b> like a licence or a long lease, and <b>favourable contracts</b>.</p>",
   qa:[["Does location matter?","Yes, a good location brings more customers."],["What about competition?","Less competition means higher goodwill."],["Can goodwill fall?","Yes, if quality or service drops."],["Is goodwill permanent?","No, it can rise or fall."]],
   check:{q:"Which does NOT increase goodwill?", opts:["Many strong competitors nearby","A prime location","Efficient management","A government licence"], a:0, why:"More competition reduces extra profit, so lower goodwill."}},
  {id:"k3", c:"avg", title:"An average year", art:{s:[["📅","Year 1 ₹1.2L"],["📅","Year 2 ₹1.4L"],["📅","Year 3 ₹1.9L"],["➗","÷ 3"],["📊","₹1.5L"]], cap:"Average profit × number of years' purchase = goodwill."},
   story:"<p>A buyer asks: how much does this shop earn in a <b>normal</b> year? Profits were ₹1,20,000, ₹1,40,000 and ₹1,90,000. Average = ₹4,50,000 ÷ 3 = <b>₹1,50,000</b>.</p><p>The buyer agrees to pay for 2 years of that average: ₹1,50,000 × 2 = <b>₹3,00,000</b>. The “2” is called the <b>number of years' purchase</b>.</p><p>But first remove anything unusual: a one-time gain from selling a machine, or a loss from a fire. Those will not repeat.</p>",
   qa:[["Why average?","One year may be lucky or unlucky."],["What is years' purchase?","How many years of average profit the buyer pays for."],["Why remove abnormal items?","They will not happen again."],["Formula?","Goodwill = Average profit × Number of years' purchase."]],
   check:{q:"Profits ₹50,000, ₹60,000, ₹70,000; 3 years' purchase of average profit. Goodwill =", opts:["₹1,80,000","₹5,40,000","₹60,000","₹2,10,000"], a:0, why:"Average 60,000 × 3 = 1,80,000."}},
  {id:"k4", c:"wavg", title:"Recent years count more", art:{s:[["1️⃣","Old year ×1"],["2️⃣","Last year ×2"],["3️⃣","This year ×3"],["⚖️","Weighted"]], cap:"When profits keep rising, give more weight to recent years."},
   story:"<p>The shop's profit is growing every year: ₹90,000, ₹1,20,000, ₹1,50,000. A simple average (₹1,20,000) is unfair to the sellers because recent years show the true picture.</p><p>So we give <b>weights</b> 1, 2, 3 (recent years heavier): 90,000×1 + 1,20,000×2 + 1,50,000×3 = 7,80,000. Divide by 1+2+3 = 6 → <b>₹1,30,000</b>. This is the <b>weighted average profit</b>.</p>",
   qa:[["When is it used?","When profits show a rising or falling trend."],["Who gets more weight?","The most recent year."],["How to divide?","By the total of the weights, not the number of years."],["Then?","Weighted average × years' purchase."]],
   check:{q:"Weighted average: products total ₹6,00,000, weights 1, 2, 3. Weighted average profit =", opts:["₹1,00,000","₹2,00,000","₹6,00,000","₹3,00,000"], a:0, why:"6,00,000 ÷ 6 = 1,00,000."}},
  {id:"k5", c:"super", title:"Extra over normal", art:{s:[["🏦","Capital ₹10L"],["📈","Normal 10% = ₹1L"],["💰","Actual ₹1.5L"],["✨","Super ₹50,000"]], cap:"Super profit = Average profit − Normal profit."},
   story:"<p>Any shop with ₹10,00,000 invested should earn at least 10%, i.e. ₹1,00,000. That is the <b>normal profit</b>.</p><p>Sharma Sweets actually earns ₹1,50,000 on average. The extra ₹50,000 is <b>super profit</b>: it comes from the good name.</p><p>The buyer pays for, say, 3 years of super profit: ₹50,000 × 3 = <b>₹1,50,000 goodwill</b>.</p>",
   qa:[["What is normal profit?","What an average firm earns on the same capital."],["What is super profit?","Average profit minus normal profit."],["No super profit?","Then no goodwill."],["Formula?","Goodwill = Super profit × years' purchase."]],
   check:{q:"Average profit ₹80,000; normal profit ₹80,000. Goodwill by super profit method:", opts:["Nil","₹80,000","₹1,60,000","₹40,000"], a:0, why:"Super profit is zero, so goodwill is nil."}},
  {id:"k6", c:"capm", title:"How much capital would earn this?", art:{s:[["💰","Profit ₹1.5L"],["÷","at 10%"],["🏦","Worth ₹15L"],["➖","Capital ₹10L"],["⭐","Goodwill ₹5L"]], cap:"Capitalisation: profit turned back into the capital that would earn it."},
   story:"<p>If normal businesses earn 10%, how much capital would be needed to earn ₹1,50,000? ₹1,50,000 × 100/10 = ₹15,00,000. That is the <b>capitalised value</b> of the firm.</p><p>The firm actually uses only ₹10,00,000 of capital (assets minus outside liabilities). The difference, ₹5,00,000, must be goodwill.</p><p>Shortcut: capitalise only the super profit: ₹50,000 × 100/10 = ₹5,00,000. Same answer.</p>",
   qa:[["What is capitalised value?","Profit × 100 ÷ normal rate of return."],["What is capital employed?","Assets (excluding goodwill) − outside liabilities."],["Goodwill?","Capitalised value − capital employed."],["Short way?","Super profit × 100 ÷ normal rate."]],
   check:{q:"Super profit ₹30,000; normal rate 15%. Goodwill by capitalising super profit:", opts:["₹2,00,000","₹4,500","₹45,000","₹30,000"], a:0, why:"30,000 × 100/15 = 2,00,000."}}
],
kidActs:[
  {id:"ka1", type:"sort", title:"Fix the past profit: add back, deduct or leave it?", c:"adjust",
   bins:["Add back to that year's profit","Deduct from that year's profit"],
   items:[
     {t:"Loss of stock by fire (abnormal)", b:0, why:"An abnormal loss reduced profit; it will not repeat."},
     {t:"Gain on sale of an old machine", b:1, why:"An abnormal gain raised profit; it will not repeat."},
     {t:"Income from non-trade investments", b:1, why:"Not earned from the business, so excluded."},
     {t:"Insurance premium that will not be paid in future", b:0, why:"An expense that will not recur is added back."},
     {t:"Partners' remuneration not charged so far (to be charged in future)", b:1, why:"A future expense must be deducted to find normal profit."},
     {t:"Undercharged depreciation of the past (correction)", b:1, why:"The correct depreciation reduces profit."}
   ]},
  {id:"ka2", type:"minute", title:"One-minute challenge: which method?", c:"meaning", secs:60,
   items:[
     {q:"Profits show a rising trend. Best method:", opts:["Weighted average profit","Simple average profit"], a:0},
     {q:"Super profit = ?", opts:["Average profit − Normal profit","Average profit − Capital"], a:0},
     {q:"Goodwill is a…", opts:["Intangible asset","Fictitious asset"], a:0},
     {q:"Self-generated goodwill under AS-26 is…", opts:["Not recorded","Recorded"], a:0},
     {q:"Capitalised value = ?", opts:["Average profit × 100/NRR","Average profit × NRR/100"], a:0},
     {q:"Capital employed excludes…", opts:["Goodwill","Machinery"], a:0}
   ]}
],
exam:[
  {id:"e1", c:"meaning", title:"Meaning and nature of goodwill",
   html:"<p><b>Goodwill</b> is the value of the reputation of a firm in respect of the profits expected in future over and above the normal profits earned by other similar firms.</p><ul><li>It is an <b>intangible asset</b>, not a fictitious asset; it can be sold only with the whole business.</li><li>Its value can rise or fall; valuing it is subjective.</li><li>As per <b>AS-26</b>, only purchased goodwill is recorded; self-generated goodwill is not.</li></ul>"},
  {id:"e2", c:"meaning", title:"Factors affecting goodwill and need for valuation",
   html:"<p><b>Factors:</b> nature of business; location; efficiency of management; market situation (monopoly, competition); special advantages (licences, long lease, cheap power); quality of products; favourable contracts.</p><p><b>Need for valuation in a partnership:</b> change in profit sharing ratio; admission of a partner; retirement of a partner; death of a partner; dissolution involving sale of the business; amalgamation of firms.</p>"},
  {id:"e3", c:"adjust", title:"Adjusting past profits before valuation",
   html:"<table class='tt'><thead><tr><th>Item</th><th>Treatment</th></tr></thead><tbody><tr><td>Abnormal loss (fire, theft, loss on sale of fixed asset)</td><td>Add back</td></tr><tr><td>Abnormal gain (profit on sale of fixed asset, lottery)</td><td>Deduct</td></tr><tr><td>Income from non-trade investments</td><td>Deduct</td></tr><tr><td>Expense not to be incurred in future (e.g. insurance premium)</td><td>Add back</td></tr><tr><td>Expense to be incurred in future (e.g. partners' remuneration)</td><td>Deduct</td></tr><tr><td>Errors in past accounts (undercharged depreciation, overvalued stock)</td><td>Correct the profit of that year</td></tr></tbody></table><p class='tip'>Adjust each year's profit first, then average. Never average first and adjust later.</p>"},
  {id:"e4", c:"avg", title:"Average profit method",
   html:"<p class='formula'>Goodwill = Average profit × Number of years' purchase</p><p class='eg'>Profits ₹1,20,000; ₹1,50,000 (including abnormal gain ₹10,000); ₹1,70,000 (after an abnormal loss of ₹20,000). Adjusted: 1,20,000; 1,40,000; 1,90,000 → total 4,50,000; average 1,50,000; at 2 years' purchase, goodwill = <b>₹3,00,000</b>.</p><p>A loss in any year is subtracted when finding the total.</p>"},
  {id:"e5", c:"wavg", title:"Weighted average profit method",
   html:"<p class='formula'>Weighted average profit = Σ(Profit × Weight) ÷ Σ Weights; Goodwill = Weighted average profit × Years' purchase</p><p>Used when profits show a trend. Weights 1, 2, 3 … are normally given to years in order, the latest year getting the highest weight.</p><p class='eg'>₹90,000×1 + ₹1,20,000×2 + ₹1,50,000×3 = 7,80,000; ÷ 6 = 1,30,000; × 2 = <b>₹2,60,000</b>.</p>"},
  {id:"e6", c:"super", title:"Super profit method",
   html:"<p class='formula'>Normal profit = Capital employed × Normal rate of return/100</p><p class='formula'>Super profit = Average profit − Normal profit; Goodwill = Super profit × Number of years' purchase</p><p class='eg'>Capital employed ₹10,00,000; NRR 10%; average profit ₹1,50,000. Normal profit 1,00,000; super profit 50,000; at 3 years' purchase goodwill = <b>₹1,50,000</b>.</p>"},
  {id:"e7", c:"capm", title:"Capitalisation method (two ways)",
   html:"<p><b>(a) Capitalisation of average profit</b></p><p class='formula'>Capitalised value = Average profit × 100/NRR; Goodwill = Capitalised value − Capital employed</p><p><b>(b) Capitalisation of super profit</b></p><p class='formula'>Goodwill = Super profit × 100/NRR</p><p>Both give the same answer when the same figures are used.</p><p class='eg'>Average profit 1,50,000, NRR 10%, capital employed 10,00,000: (a) 15,00,000 − 10,00,000 = 5,00,000; (b) 50,000 × 100/10 = 5,00,000.</p>"},
  {id:"e8", c:"ce", title:"Capital employed",
   html:"<p class='formula'>Capital employed = Total assets (excluding goodwill, fictitious assets and non-trade investments) − Outside liabilities</p><p>Or: Partners' capitals + Reserves and surplus − Goodwill − Fictitious assets (− non-trade investments).</p><p class='tip'>If capital employed excludes non-trade investments, the income from them must also be removed from average profit.</p>"},
  {id:"e9", c:"avg", title:"Board answer presentation",
   html:"<ol><li>Working note 1: table of adjusted profits (year, profit, add, less, adjusted).</li><li>Working note 2: average (or weighted average) profit.</li><li>Working note 3: normal profit / capital employed where needed.</li><li>Final line: “Goodwill = ₹… (… years' purchase of …)”.</li></ol>"}
],
visual:{kind:"goodwill", title:"Goodwill calculator", sub:"Change the profits, years' purchase, normal rate and capital employed. Every method updates at once.",
  profits:[90000,120000,150000], yp:2, nrr:10, ce:1000000,
  flowTitle:"Steps to value goodwill", flow:["Collect past profits","Adjust abnormal and future items","Find average or weighted average","Find normal profit (capital × NRR)","Find super profit","Multiply by years' purchase or capitalise","Goodwill"]},
formulas:[
  {n:"Average profit method", f:"Goodwill = Average profit × Number of years' purchase", code:"A × Y", c:"avg"},
  {n:"Weighted average", f:"Σ(Profit × Weight) ÷ Σ Weights", code:"Divide by weights, not years", c:"wavg"},
  {n:"Normal profit", f:"Capital employed × NRR/100", code:"What any firm should earn", c:"super"},
  {n:"Super profit", f:"Average profit − Normal profit", code:"Actual minus normal", c:"super"},
  {n:"Super profit method", f:"Goodwill = Super profit × Years' purchase", code:"S × Y", c:"super"},
  {n:"Capitalisation of average profit", f:"(Average profit × 100/NRR) − Capital employed", code:"Grow the profit to capital, subtract what is used", c:"capm"},
  {n:"Capitalisation of super profit", f:"Super profit × 100/NRR", code:"Super × 100 ÷ rate", c:"capm"},
  {n:"Capital employed", f:"Assets (excl. goodwill, fictitious and non-trade investments) − Outside liabilities", code:"Real assets minus outsiders", c:"ce"}
],
illus:[
  {id:"i1", tag:"board", c:"adjust", title:"Average profit with abnormal items",
   given:"Profits of a firm: 2022-23 ₹1,20,000; 2023-24 ₹1,50,000 (including an abnormal gain of ₹10,000); 2024-25 ₹1,70,000 (after charging an abnormal loss of ₹20,000). Goodwill is valued at 2 years' purchase of the average profit of the last three years.",
   required:"Value of goodwill.",
   formula:"Adjust each year (deduct abnormal gain, add back abnormal loss), then Goodwill = Average profit × 2.",
   steps:["2023-24: 1,50,000 − 10,000 = <b>₹1,40,000</b>","2024-25: 1,70,000 + 20,000 = <b>₹1,90,000</b>","Total = 1,20,000 + 1,40,000 + 1,90,000 = ₹4,50,000","Average = 4,50,000 ÷ 3 = <b>₹1,50,000</b>","Goodwill = 1,50,000 × 2 = <b>₹3,00,000</b>"],
   format:{type:"grid", single:true, name:"Statement of adjusted profits", head:["Year","Profit (₹)","Add: abnormal loss (₹)","Less: abnormal gain (₹)","Adjusted profit (₹)"], sum:[4],
     rows:[["2022-23",120000,null,null,120000],["2023-24",150000,null,10000,140000],["2024-25",170000,20000,null,190000],["Total",null,null,null,450000]]},
   answer:"Goodwill = ₹3,00,000.",
   why:"Abnormal items will not recur, so they are removed to find the profit the business normally earns."},
  {id:"i2", tag:"orig", c:"super", title:"Super profit method",
   given:"Capital employed ₹10,00,000; normal rate of return 10%; average profit ₹1,50,000. Goodwill is 3 years' purchase of super profit.",
   required:"Value of goodwill.",
   formula:"Normal profit = 10% of 10,00,000; Super profit = Average − Normal; Goodwill = Super profit × 3.",
   steps:["Normal profit = 10,00,000 × 10/100 = <b>₹1,00,000</b>","Super profit = 1,50,000 − 1,00,000 = <b>₹50,000</b>","Goodwill = 50,000 × 3 = <b>₹1,50,000</b>"],
   answer:"Goodwill = ₹1,50,000.", why:"Only the profit above what any firm would earn is due to goodwill."},
  {id:"i3", tag:"board", c:"capm", title:"Capitalisation of average profit with future remuneration",
   given:"Average profit of a firm is ₹1,20,000. This is before charging partners' remuneration of ₹20,000 a year, which will be charged in future. Normal rate of return 10%. Capital employed ₹8,00,000.",
   required:"Goodwill by capitalisation of average profit.",
   formula:"Adjusted average = 1,20,000 − 20,000. Capitalised value = Adjusted average × 100/10. Goodwill = Capitalised value − Capital employed.",
   steps:["Adjusted average profit = 1,20,000 − 20,000 = <b>₹1,00,000</b>","Capitalised value = 1,00,000 × 100/10 = <b>₹10,00,000</b>","Goodwill = 10,00,000 − 8,00,000 = <b>₹2,00,000</b>"],
   answer:"Goodwill = ₹2,00,000.", why:"A cost that will be charged in future reduces the profit a buyer can expect."}
],
solver:[
  {id:"s1", tag:"board", c:"adjust", title:"Average profit method with abnormal items", mins:8,
   q:"Profits: 2022-23 ₹1,20,000; 2023-24 ₹1,50,000 (including an abnormal gain of ₹10,000); 2024-25 ₹1,70,000 (after charging an abnormal loss of ₹20,000). Goodwill = 2 years' purchase of average profit.",
   steps:[
     {label:"Adjust 2023-24", prompt:"Adjusted profit of 2023-24 (₹)", kind:"num", ans:140000, hint:"An abnormal gain is removed.", formula:"Profit − abnormal gain", traps:[{v:160000, why:"You ADDED the abnormal gain. A gain that will not recur must be deducted."}], why:"1,50,000 − 10,000 = 1,40,000.", avoid:"Gain → deduct; loss → add back."},
     {label:"Adjust 2024-25", prompt:"Adjusted profit of 2024-25 (₹)", kind:"num", ans:190000, hint:"The profit is AFTER charging the loss, so add it back.", formula:"Profit + abnormal loss", traps:[{v:150000, why:"You deducted the loss again. It was already charged, so ADD it back."}], why:"1,70,000 + 20,000 = 1,90,000.", avoid:"Read 'after charging' carefully."},
     {label:"Total adjusted profit", prompt:"Total of the three adjusted profits (₹)", kind:"num", ans:450000, hint:"1,20,000 + 1,40,000 + 1,90,000.", formula:"Sum", why:"4,50,000.", avoid:""},
     {label:"Average profit", prompt:"Average profit (₹)", kind:"num", ans:150000, hint:"÷ 3.", formula:"Total ÷ years", why:"4,50,000 ÷ 3 = 1,50,000.", avoid:""},
     {label:"Goodwill", prompt:"Goodwill (₹)", kind:"num", ans:300000, hint:"× 2.", formula:"Average × years' purchase", traps:[{v:900000, why:"You multiplied the TOTAL by 2. Use the average."}], why:"1,50,000 × 2 = 3,00,000.", avoid:""}
   ]},
  {id:"s2", tag:"orig", c:"wavg", title:"Weighted average profit method", mins:6,
   q:"Profits: 2022-23 ₹90,000; 2023-24 ₹1,20,000; 2024-25 ₹1,50,000. Weights 1, 2, 3 respectively. Goodwill = 2 years' purchase of weighted average profit.",
   steps:[
     {label:"Total of products", prompt:"Σ (profit × weight) (₹)", kind:"num", ans:780000, hint:"90,000 + 2,40,000 + 4,50,000.", formula:"Σ Profit × Weight", why:"7,80,000.", avoid:"Multiply each year by its own weight."},
     {label:"Total weights", prompt:"Σ weights", kind:"num", ans:6, hint:"1 + 2 + 3.", formula:"Σ Weights", traps:[{v:3, why:"Divide by the total of the WEIGHTS (6), not the number of years."}], why:"6.", avoid:""},
     {label:"Weighted average profit", prompt:"Weighted average profit (₹)", kind:"num", ans:130000, hint:"7,80,000 ÷ 6.", formula:"Σ products ÷ Σ weights", traps:[{v:120000, why:"That is the simple average. Use the weights."},{v:260000, why:"You divided by 3 instead of 6."}], why:"1,30,000.", avoid:""},
     {label:"Goodwill", prompt:"Goodwill (₹)", kind:"num", ans:260000, hint:"× 2.", formula:"Weighted average × years' purchase", why:"2,60,000.", avoid:""}
   ]},
  {id:"s3", tag:"board", c:"super", title:"Super profit method", mins:5,
   q:"Capital employed ₹10,00,000; normal rate of return 10%; average profit ₹1,50,000. Goodwill = 3 years' purchase of super profit.",
   steps:[
     {label:"Normal profit", prompt:"Normal profit (₹)", kind:"num", ans:100000, hint:"10% of 10,00,000.", formula:"Capital employed × NRR/100", why:"1,00,000.", avoid:""},
     {label:"Super profit", prompt:"Super profit (₹)", kind:"num", ans:50000, hint:"Average − Normal.", formula:"Average profit − Normal profit", traps:[{v:-850000, why:"You subtracted capital employed. Subtract NORMAL PROFIT."}], why:"1,50,000 − 1,00,000 = 50,000.", avoid:""},
     {label:"Goodwill", prompt:"Goodwill (₹)", kind:"num", ans:150000, hint:"× 3.", formula:"Super profit × years' purchase", traps:[{v:450000, why:"You multiplied the AVERAGE profit by 3. Use super profit."}], why:"50,000 × 3 = 1,50,000.", avoid:"Super profit method → only the extra profit is multiplied."}
   ]},
  {id:"s4", tag:"orig", c:"capm", title:"Capitalisation: both ways", mins:7,
   q:"Average profit ₹1,50,000; normal rate of return 10%; capital employed ₹10,00,000. Find goodwill by (a) capitalisation of average profit and (b) capitalisation of super profit.",
   steps:[
     {label:"Capitalised value", prompt:"Capitalised value of average profit (₹)", kind:"num", ans:1500000, hint:"1,50,000 × 100/10.", formula:"Average profit × 100/NRR", traps:[{v:15000, why:"You multiplied by 10/100. Capitalising means × 100/NRR."}], why:"15,00,000.", avoid:""},
     {label:"Goodwill (a)", prompt:"Goodwill by capitalisation of average profit (₹)", kind:"num", ans:500000, hint:"Capitalised value − capital employed.", formula:"Capitalised value − Capital employed", why:"15,00,000 − 10,00,000 = 5,00,000.", avoid:""},
     {label:"Super profit", prompt:"Super profit (₹)", kind:"num", ans:50000, hint:"1,50,000 − 1,00,000.", formula:"Average − Normal", why:"50,000.", avoid:""},
     {label:"Goodwill (b)", prompt:"Goodwill by capitalisation of super profit (₹)", kind:"num", ans:500000, hint:"50,000 × 100/10.", formula:"Super profit × 100/NRR", traps:[{v:5000, why:"You multiplied by NRR/100. Use 100/NRR."}], why:"5,00,000: the same as (a).", avoid:"Both capitalisation methods agree."}
   ]}
],
lab:[
  {id:"L0", tag:"board", level:"Easy", c:"adjust", title:"Statement of adjusted profits",
   q:"Profits: 2022-23 ₹1,20,000; 2023-24 ₹1,50,000 (including an abnormal gain of ₹10,000); 2024-25 ₹1,70,000 (after charging an abnormal loss of ₹20,000). Complete the statement. Leave a cell blank where nothing is added or deducted.",
   format:{type:"grid", single:true, name:"Statement of adjusted profits", head:["Year","Profit (₹)","Add: abnormal loss (₹)","Less: abnormal gain (₹)","Adjusted profit (₹)"], sum:[4],
    rows:[
      ["2022-23",120000,{a:null},{a:null},{a:120000}],
      ["2023-24",150000,{a:null},{a:10000, why:"The abnormal gain is included in the profit, so deduct it."},{a:140000}],
      ["2024-25",170000,{a:20000, why:"The loss was already charged, so add it back."},{a:null},{a:190000}],
      ["Total",null,null,null,{a:450000}]]}},
  {id:"L1", tag:"orig", level:"Medium", c:"wavg", title:"Weighted average profit and goodwill",
   q:"Profits: 2022-23 ₹90,000; 2023-24 ₹1,20,000; 2024-25 ₹1,50,000. Weights 1, 2, 3. Goodwill = 2 years' purchase of weighted average profit. Complete the working.",
   format:{type:"grid", single:true, name:"Weighted average profit", head:["Year","Profit (₹)","Weight","Product (₹)"],
    rows:[
      ["2022-23",90000,1,{a:90000}],["2023-24",120000,2,{a:240000}],["2024-25",150000,3,{a:450000}],
      ["Totals",null,{a:6},{a:780000}],
      ["Weighted average profit",null,null,{a:130000, why:"7,80,000 ÷ 6."}],
      ["Goodwill (2 years' purchase)",null,null,{a:260000, why:"1,30,000 × 2."}]]}},
  {id:"L2", tag:"board", level:"Medium", c:"super", title:"Super profit statement",
   q:"Capital employed ₹10,00,000; normal rate of return 10%; average profit ₹1,50,000. Goodwill = 3 years' purchase of super profit. Complete the statement.",
   format:{type:"grid", single:true, name:"Goodwill by super profit method", head:["Particulars","₹"],
    rows:[["Average profit",150000],["Normal profit (10% of ₹10,00,000)",{a:100000}],["Super profit",{a:50000, why:"1,50,000 − 1,00,000."}],["Goodwill (3 years' purchase of super profit)",{a:150000, why:"50,000 × 3."}]]}},
  {id:"L3", tag:"board", level:"Hard", c:"ce", title:"Capital employed and capitalisation of super profit",
   q:"A firm's total assets are ₹14,50,000, which include goodwill ₹1,00,000 and non-trade investments ₹50,000. Outside liabilities are ₹3,00,000. Average profit is ₹1,55,000, which includes ₹5,000 income from non-trade investments. Normal rate of return 10%. Find goodwill by capitalising the super profit.",
   format:{type:"grid", single:true, name:"Capital employed and goodwill", head:["Particulars","₹"],
    rows:[["Total assets",1450000],["Less: Goodwill",{a:100000, why:"Goodwill is excluded from capital employed."}],["Less: Non-trade investments",{a:50000, why:"Not used in the business."}],["Less: Outside liabilities",{a:300000}],["Capital employed",{a:1000000, why:"14,50,000 − 1,00,000 − 50,000 − 3,00,000."}],["Average profit (after removing non-trade income)",{a:150000, why:"1,55,000 − 5,000: income from non-trade investments is removed too."}],["Normal profit (10%)",{a:100000}],["Super profit",{a:50000}],["Goodwill (super profit × 100/10)",{a:500000}]]}},
  {id:"L4", tag:"orig", level:"Hard", c:"capm", title:"Capitalisation of average profit",
   q:"Average profit ₹1,50,000; normal rate of return 12%; capital employed ₹10,00,000. Find goodwill by capitalising the average profit.",
   format:{type:"grid", single:true, name:"Goodwill by capitalisation of average profit", head:["Particulars","₹"],
    rows:[["Average profit",150000],["Capitalised value (× 100/12)",{a:1250000, why:"1,50,000 × 100/12 = 12,50,000."}],["Less: Capital employed",{a:1000000}],["Goodwill",{a:250000, why:"12,50,000 − 10,00,000."}]]}}
],
blanks:[
  {id:"B1", t:"Statement of adjusted profits", type:"grid", rows:6, head:["Year","Profit","Add","Less"], single:true},
  {id:"B2", t:"Journal", type:"journal", rows:6},
  {id:"B3", t:"Working note (two columns)", type:"tacc", rows:6, heads:["Working","₹","Working","₹"]}
],
mistakes:[
  {id:"m1", c:"avg", q:"Profits ₹60,000, ₹80,000, ₹1,00,000; goodwill = 2 years' purchase of average profit. A student wrote:", work:["Total profit = 2,40,000","Goodwill = 2,40,000 × 2 = 4,80,000"],
   opts:["Average profit (80,000) must be used: goodwill = 1,60,000","The total should be 2,60,000","Years' purchase should be 3","Nothing is wrong"], a:0, why:"Goodwill = average × years' purchase."},
  {id:"m2", c:"adjust", q:"2024-25 profit ₹1,00,000 includes an abnormal gain of ₹15,000. Working:", work:["Adjusted profit = 1,00,000 + 15,000 = 1,15,000"],
   opts:["An abnormal gain must be deducted: 85,000","It should be ignored: 1,00,000","It should be doubled","Nothing is wrong"], a:0, why:"Gains that will not recur are removed."},
  {id:"m3", c:"super", q:"Capital employed ₹5,00,000; NRR 12%; average profit ₹80,000. Working:", work:["Super profit = 80,000 − 5,00,000 = −4,20,000","Goodwill = nil"],
   opts:["Super profit = average profit − NORMAL profit (60,000) = 20,000","Normal profit is 12,000","Goodwill = 80,000","Nothing is wrong"], a:0, why:"Normal profit = 5,00,000 × 12% = 60,000."},
  {id:"m4", c:"capm", q:"Super profit ₹24,000; NRR 12%. Working:", work:["Goodwill = 24,000 × 12/100 = 2,880"],
   opts:["Capitalising means × 100/NRR: 2,00,000","It should be 24,000 × 12","Goodwill = 24,000","Nothing is wrong"], a:0, why:"24,000 × 100/12 = 2,00,000."},
  {id:"m5", c:"ce", q:"Assets ₹9,00,000 (including goodwill ₹50,000); liabilities ₹2,00,000. Working:", work:["Capital employed = 9,00,000 − 2,00,000 = 7,00,000"],
   opts:["Goodwill must be excluded: 6,50,000","Liabilities should be added","Capital employed = 9,00,000","Nothing is wrong"], a:0, why:"Capital employed excludes goodwill."}
],
cases:[
  {id:"c1", tag:"board", title:"Kesar Sweets",
   story:"Kesar Sweets has capital employed of ₹6,00,000. Similar sweet shops earn 12% on capital. Kesar's profits for the last three years were ₹90,000, ₹1,00,000 and ₹1,10,000. Partners want goodwill at 2 years' purchase of super profit, and a buyer offers capitalisation of super profit instead.",
   qs:[
     {type:"num", c:"avg", q:"Average profit (₹)", ans:100000, why:"(90,000 + 1,00,000 + 1,10,000) ÷ 3 = 1,00,000."},
     {type:"num", c:"super", q:"Normal profit (₹)", ans:72000, why:"6,00,000 × 12% = 72,000."},
     {type:"num", c:"super", q:"Goodwill at 2 years' purchase of super profit (₹)", ans:56000, why:"Super profit 28,000 × 2 = 56,000."},
     {type:"num", c:"capm", q:"Goodwill by capitalising super profit (₹)", ans:233333, why:"28,000 × 100/12 = 2,33,333 (rounded)."},
     {type:"mcq", c:"meaning", q:"Which factor most explains Kesar's super profit?", opts:["Its reputation and loyal customers","Its capital employed","Its fire loss","Its insurance claim"], a:0, why:"Extra profit over normal comes from goodwill factors."}
   ]}
],
games:{
  names:{dc:"Add Back or Deduct?", bs:"Profit Fixer", race:"Method Race", detective:"Working Detective", profit:"Normal Profit Master"},
  obj:{dc:"Decide how each item changes past profit before valuing goodwill.", bs:"Sort items: add back, deduct or ignore.", race:"Pick the right method and compute goodwill against the clock.", profit:"Turn a reported profit into the normal profit, item by item."},
  cc:{dc:"adjust", detective:"super", bs:"adjust", race:"avg", missing:"super", profit:"adjust", escape:"capm", casegame:"super"},
  dc:[
    {t:"Loss of goods by fire in 2023-24 (profit is after charging it).", ok:"Add back to 2023-24 profit", bad:["Deduct from 2023-24 profit","Ignore it","Deduct from all three years"], c:"adjust"},
    {t:"Profit on sale of a fixed asset included in profit.", ok:"Deduct from that year's profit", bad:["Add back to that year's profit","Ignore it","Add to every year"], c:"adjust"},
    {t:"Interest received on non-trade investments.", ok:"Deduct from profit", bad:["Add to profit","Ignore it","Add to capital employed"], c:"adjust"},
    {t:"Partners' remuneration of ₹20,000 a year to be charged in future.", ok:"Deduct from average profit", bad:["Add to average profit","Ignore it","Add to goodwill"], c:"adjust"},
    {t:"Insurance premium of ₹3,000 a year will not be payable in future.", ok:"Add back to profit", bad:["Deduct from profit","Ignore it","Deduct from capital employed"], c:"adjust"},
    {t:"Depreciation was undercharged by ₹5,000 in 2024-25.", ok:"Deduct ₹5,000 from 2024-25 profit", bad:["Add ₹5,000 to 2024-25 profit","Ignore it","Deduct from 2022-23"], c:"adjust"},
    {t:"Closing stock of 2024-25 was overvalued by ₹8,000.", ok:"Deduct ₹8,000 from 2024-25 profit", bad:["Add ₹8,000 to 2024-25 profit","Ignore it","Add to capital employed"], c:"adjust"},
    {t:"A loss of ₹10,000 in one of the years.", ok:"Subtract it when totalling the profits", bad:["Add it to the total","Ignore that year","Divide only the other years"], c:"avg"},
    {t:"Profits are rising steadily every year.", ok:"Use the weighted average profit method", bad:["Use the simple average","Use only the last year","Use the lowest year"], c:"wavg"},
    {t:"Average profit equals normal profit.", ok:"Goodwill by super profit method is nil", bad:["Goodwill equals average profit","Goodwill equals capital employed","Goodwill doubles"], c:"super"},
    {t:"Capital employed is asked.", ok:"Assets (excluding goodwill and fictitious assets) − outside liabilities", bad:["Total assets including goodwill","Assets + liabilities","Partners' capital + goodwill"], c:"ce"},
    {t:"Self-generated goodwill of the firm.", ok:"Not recorded in the books (AS-26)", bad:["Debited to Goodwill A/c","Credited to partners' capitals","Shown as a current asset"], c:"meaning"}
  ],
  bs:{c:"adjust", title:"Fix last year's reported profit before valuing goodwill",
    bins:["Add back","Deduct","Ignore (normal item)"],
    items:[
      {t:"Abnormal loss by theft", b:0},{t:"Insurance premium not payable in future", b:0},{t:"Loss on sale of an old machine", b:0},
      {t:"Profit on sale of land", b:1},{t:"Income from non-trade investments", b:1},{t:"Future partners' remuneration", b:1},{t:"Undercharged depreciation", b:1},
      {t:"Normal repairs", b:2, why:"A regular business expense: already correct."},{t:"Salary to staff", b:2, why:"Recurring: no change."},{t:"Normal depreciation charged", b:2, why:"Already correct."}
    ]},
  race:[
    {t:"Average profit ₹80,000; 3 years' purchase.", ok:"Average profit method", bad:["Super profit method","Capitalisation of super profit"], amt:240000, c:"avg"},
    {t:"Super profit ₹30,000; 2 years' purchase.", ok:"Super profit method", bad:["Average profit method","Capitalisation of average profit"], amt:60000, c:"super"},
    {t:"Super profit ₹30,000; NRR 15%; capitalise.", ok:"Capitalisation of super profit", bad:["Super profit method","Average profit method"], amt:200000, c:"capm"},
    {t:"Average profit ₹1,00,000; NRR 10%; capital employed ₹8,00,000; capitalise average profit.", ok:"Capitalisation of average profit", bad:["Capitalisation of super profit","Average profit method"], amt:200000, c:"capm"},
    {t:"Products Σ ₹3,60,000; weights 1+2+3; 2 years' purchase.", ok:"Weighted average profit method", bad:["Average profit method","Super profit method"], amt:120000, c:"wavg"},
    {t:"Capital employed ₹4,00,000; NRR 10%; average profit ₹55,000; 4 years' purchase of super profit.", ok:"Super profit method", bad:["Capitalisation of average profit","Average profit method"], amt:60000, c:"super"}
  ],
  missing:[
    {q:"Goodwill ₹1,80,000 at 3 years' purchase of average profit. Average profit = ?", kind:"num", ans:60000, why:"1,80,000 ÷ 3 = 60,000.", c:"avg"},
    {q:"Goodwill ₹90,000 at 3 years' purchase of super profit; normal profit ₹50,000. Average profit = ?", kind:"num", ans:80000, why:"Super profit 30,000 + normal 50,000 = 80,000.", c:"super"},
    {q:"Goodwill by capitalising super profit ₹2,00,000; NRR 10%. Super profit = ?", kind:"num", ans:20000, why:"2,00,000 × 10/100 = 20,000.", c:"capm"},
    {q:"Capitalised value ₹12,00,000; goodwill ₹2,00,000. Capital employed = ?", kind:"num", ans:1000000, why:"12,00,000 − 2,00,000 = 10,00,000.", c:"capm"},
    {q:"Assets ₹7,50,000 incl. goodwill ₹50,000; outside liabilities ₹1,00,000. Capital employed = ?", kind:"num", ans:600000, why:"7,50,000 − 50,000 − 1,00,000 = 6,00,000.", c:"ce"},
    {q:"Profits ₹30,000 (w1), ₹60,000 (w2), ₹70,000 (w3). Weighted average profit = ?", kind:"num", ans:60000, why:"(30,000 + 1,20,000 + 2,10,000) ÷ 6 = 3,60,000 ÷ 6 = 60,000.", c:"wavg"}
  ],
  profit:{from:170000, ask:"normal profit now?", plus:"addition", minus:"deduction", c:"adjust", start:"Reported profit of 2024-25 is ₹1,70,000. Type the corrected profit after each item.", base:"Goodwill will be 2 years' purchase.",
    steps:[
      {t:"Add back abnormal loss by fire ₹20,000", v:20000},
      {t:"Deduct income from non-trade investments ₹5,000", v:-5000},
      {t:"Deduct partners' remuneration to be charged in future ₹15,000", v:-15000},
      {t:"Add back insurance premium not payable in future ₹3,000", v:3000}
    ], final:{q:"Goodwill at 2 years' purchase of this normal profit = ?", ans:346000, why:"1,73,000 × 2 = 3,46,000.", hint:"Corrected profit × 2."}},
  escape:{story:"The valuer's safe has four dials. Each dial's number is a goodwill calculation.",
    locks:[
      {room:"Dial 1: Average", q:"Profits ₹1,00,000, ₹1,20,000 and a loss of ₹10,000. Average profit = ?", ans:70000, hint:"(1,00,000 + 1,20,000 − 10,000) ÷ 3.", c:"avg"},
      {room:"Dial 2: Weighted", q:"Profits ₹60,000 (w1), ₹80,000 (w2), ₹1,00,000 (w3). Goodwill at 3 years' purchase of weighted average = ?", ans:260000, hint:"(60,000 + 1,60,000 + 3,00,000) ÷ 6 = 86,666.67 → × 3.", c:"wavg"},
      {room:"Dial 3: Super", q:"Capital employed ₹8,00,000; NRR 15%; average profit ₹1,50,000; 2 years' purchase of super profit. Goodwill = ?", ans:60000, hint:"Normal 1,20,000; super 30,000; × 2.", c:"super"},
      {room:"Dial 4: Capitalise", q:"Average profit ₹90,000; NRR 12%; capital employed ₹6,00,000. Goodwill by capitalising average profit = ?", ans:150000, hint:"90,000 × 100/12 = 7,50,000 − 6,00,000.", c:"capm"}
    ]}
},
revision:{
  summary:[
    "Goodwill = value of reputation that earns profit above normal; an intangible (not fictitious) asset.",
    "AS-26: only purchased goodwill is recorded.",
    "Valued on: change in PSR, admission, retirement, death, sale/amalgamation.",
    "Adjust each year's profit first: add back abnormal losses and expenses that will not recur; deduct abnormal gains, non-trade income and future expenses.",
    "Average profit method: Average × years' purchase. Weighted: Σ(P×W) ÷ ΣW.",
    "Super profit = Average − Normal (Capital employed × NRR). Goodwill = Super profit × years' purchase.",
    "Capitalisation: (Average × 100/NRR) − Capital employed, or Super profit × 100/NRR.",
    "Capital employed = Assets (excluding goodwill, fictitious, non-trade investments) − Outside liabilities."
  ],
  defs:[["Goodwill","The value of the reputation of a firm which enables it to earn profit above the normal profit of similar firms."],["Normal profit","The profit a firm in the same industry normally earns on the capital employed."],["Super profit","Excess of average actual profit over normal profit."],["Years' purchase","The number of years for which super or average profit is expected to continue, used as a multiplier."],["Capital employed","Total assets used in the business minus outside liabilities."]],
  flash:[
    {f:"Average profit method", b:"Average profit × years' purchase"},{f:"Weighted average", b:"Σ(Profit × Weight) ÷ Σ Weights"},
    {f:"Normal profit", b:"Capital employed × NRR/100"},{f:"Super profit", b:"Average profit − Normal profit"},
    {f:"Capitalised value", b:"Average profit × 100/NRR"},{f:"Goodwill (capitalisation of super profit)", b:"Super profit × 100/NRR"},
    {f:"Abnormal gain", b:"Deduct from that year's profit"},{f:"Future expense", b:"Deduct from average profit"}
  ],
  treat:[["Abnormal loss","Add back"],["Abnormal gain","Deduct"],["Non-trade income","Deduct (and exclude the investment from capital employed)"],["Expense not to recur","Add back"],["Future expense (e.g. partners' remuneration)","Deduct"],["Year with a loss","Subtract it in the total"]],
  mistakes:["Multiplying TOTAL profit instead of AVERAGE profit by years' purchase.","Adding an abnormal gain instead of deducting it.","Dividing by the number of years in the weighted average method.","Super profit = average − capital employed (it is average − normal profit).","Capitalising with × NRR/100 instead of × 100/NRR.","Including goodwill in capital employed."],
  fib:[
    {q:"Goodwill is an ______ asset.", a:["intangible"]},
    {q:"Super profit = Average profit − ______ profit.", a:["normal"]},
    {q:"Under AS-26, only ______ goodwill is recorded in the books.", a:["purchased"]},
    {q:"In the weighted average method, the total of products is divided by the total of the ______.", a:["weights"]}
  ],
  mcq:[
    {q:"Goodwill is…", opts:["An intangible asset","A fictitious asset","A current asset","A liability"], a:0, why:"It has value but no physical form.", c:"meaning"},
    {q:"Average profit ₹50,000; NRR 10%; capital employed ₹4,00,000. Super profit:", opts:["₹10,000","₹40,000","₹50,000","₹90,000"], a:0, why:"50,000 − 40,000 = 10,000.", c:"super"},
    {q:"Capitalised value of ₹60,000 average profit at 12%:", opts:["₹5,00,000","₹7,200","₹72,000","₹50,000"], a:0, why:"60,000 × 100/12 = 5,00,000.", c:"capm"},
    {q:"Profit includes ₹4,000 interest on non-trade investments. For goodwill, it is…", opts:["Deducted","Added","Ignored","Doubled"], a:0, why:"Not earned from the business.", c:"adjust"},
    {q:"Weighted average of ₹20,000 (w1), ₹30,000 (w2), ₹40,000 (w3):", opts:["₹33,333","₹30,000","₹90,000","₹2,00,000"], a:0, why:"(20,000 + 60,000 + 1,20,000) ÷ 6 = 33,333.", c:"wavg"},
    {q:"Which situation does NOT need valuation of goodwill?", opts:["A partner takes a loan from the firm","Admission of a partner","Retirement of a partner","Change in profit sharing ratio"], a:0, why:"A loan does not change ownership or the ratio.", c:"meaning"},
    {q:"Capital employed ₹5,00,000; NRR 10%; average profit ₹45,000. Goodwill by super profit method:", opts:["Nil","₹5,000","₹45,000","₹50,000"], a:0, why:"Normal 50,000 > average 45,000: no super profit.", c:"super"},
    {q:"Goodwill by capitalising super profit ₹15,000 at 10%:", opts:["₹1,50,000","₹1,500","₹15,000","₹16,500"], a:0, why:"15,000 × 100/10.", c:"capm"}
  ],
  ar:[
    {a:"Goodwill is a fictitious asset.", r:"Goodwill cannot be seen or touched.", ans:3, why:"A is false (it is intangible, not fictitious); R is true.", c:"meaning"},
    {a:"Abnormal losses are added back to past profits while valuing goodwill.", r:"Abnormal losses are not expected to recur in future.", ans:0, why:"Both true; R explains A.", c:"adjust"},
    {a:"Both capitalisation methods give the same goodwill.", r:"Capitalised value of average profit minus capital employed equals capitalised super profit.", ans:0, why:"Both true; R explains A.", c:"capm"}
  ],
  numericals:["L0","L1","L3","L4","s1","s3"]
},
test:{mins:30, items:[
  {type:"mcq", m:1, c:"meaning", q:"Goodwill as per AS-26 is recorded only when it is…", opts:["Purchased","Self-generated","Above ₹1 lakh","Valued by partners"], a:0, why:"Only purchased goodwill."},
  {type:"mcq", m:1, c:"adjust", q:"Profit of a year is after charging an abnormal loss of ₹6,000. For goodwill, the ₹6,000 is…", opts:["Added back","Deducted","Ignored","Halved"], a:0, why:"Remove the effect of an abnormal loss."},
  {type:"mcq", m:1, c:"super", q:"Normal profit is calculated on…", opts:["Capital employed","Average profit","Total assets including goodwill","Sales"], a:0, why:"Capital employed × NRR."},
  {type:"mcq", m:1, c:"wavg", q:"Weighted average method is preferred when profits…", opts:["Show a trend","Are equal every year","Are losses","Are not given"], a:0, why:"Recent years better reflect a trend."},
  {type:"mcq", m:1, c:"capm", q:"Goodwill by capitalisation of average profit = ", opts:["Capitalised value − Capital employed","Average profit × NRR","Super profit × years' purchase","Capital employed − Capitalised value"], a:0, why:"Definition."},
  {type:"mcq", m:1, c:"ce", q:"Capital employed does NOT include…", opts:["Goodwill","Machinery","Stock","Debtors"], a:0, why:"Goodwill is excluded."},
  {type:"ar", m:1, c:"super", a:"If average profit is less than normal profit, there is no goodwill by the super profit method.", r:"Super profit is the excess of average profit over normal profit.", ans:0, why:"Both true; R explains A."},
  {type:"ar", m:1, c:"wavg", a:"In the weighted average method, the latest year usually gets the lowest weight.", r:"Recent profits better reflect the firm's future earnings.", ans:3, why:"A false (latest year gets the HIGHEST weight); R true."},
  {type:"nums", m:3, c:"avg", q:"Profits: ₹80,000; ₹1,10,000 (including an abnormal gain of ₹20,000); ₹1,00,000. Goodwill = 2 years' purchase of average profit.", parts:[
    {p:"Average profit (₹)", ans:90000, why:"(80,000 + 90,000 + 1,00,000) ÷ 3 = 90,000."},{p:"Goodwill (₹)", ans:180000, why:"90,000 × 2."}]},
  {type:"nums", m:3, c:"super", q:"Capital employed ₹6,00,000; NRR 10%; average profit ₹84,000; goodwill = 3 years' purchase of super profit.", parts:[
    {p:"Super profit (₹)", ans:24000, why:"84,000 − 60,000."},{p:"Goodwill (₹)", ans:72000, why:"24,000 × 3."}]},
  {type:"nums", m:4, c:"capm", q:"Assets ₹12,00,000 (including goodwill ₹1,00,000); outside liabilities ₹3,00,000; average profit ₹1,20,000; NRR 12%.", parts:[
    {p:"Capital employed (₹)", ans:800000, why:"12,00,000 − 1,00,000 − 3,00,000."},{p:"Goodwill by capitalisation of average profit (₹)", ans:200000, why:"1,20,000 × 100/12 = 10,00,000 − 8,00,000."}]},
  {type:"self", m:3, c:"meaning", q:"State any three factors affecting the value of goodwill of a firm.",
   model:"(i) Nature of business: steady demand raises goodwill. (ii) Location: a convenient location attracts customers. (iii) Efficiency of management. Also correct: market situation (monopoly), special advantages (licences, cheap power), quality of products, favourable contracts.",
   crit:["One correct factor with a brief explanation","A second correct factor","A third correct factor"]},
  {type:"nums", m:4, c:"wavg", q:"Profits: 2022-23 ₹60,000 (weight 1); 2023-24 ₹90,000 (weight 2); 2024-25 ₹1,20,000 (weight 3). Goodwill = 3 years' purchase of weighted average profit.", parts:[
    {p:"Weighted average profit (₹)", ans:100000, why:"(60,000 + 1,80,000 + 3,60,000) ÷ 6 = 1,00,000."},{p:"Goodwill (₹)", ans:300000, why:"1,00,000 × 3."}]}
]}
});
