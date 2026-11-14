/* Notesflix 101 · Accountancy Lab · Class XII · Issue of Debentures
   Basis: CBSE 2026-27 Accountancy (055), Unit 2 Accounting for Companies; NCERT Class XII Accountancy Part II;
   Companies Act, 2013 (Sections 2(30), 52, 71) and Schedule III. Redemption of debentures is not in the current syllabus.
   All questions are ORIGINAL practice questions ("orig") or written in CBSE board style ("board") for Notesflix 101.
   Check: node lab/tools/validate.js debentures */
NFLab.register({
id:"debentures", cls:"XII", subject:"Accountancy", unit:"Accounting for Companies", num:"8", icon:"📃",
title:"Issue of Debentures",
tagline:"Debentures vs shares, the six issue-and-redemption combinations, loss on issue, consideration other than cash, collateral security and interest with TDS.",
notesLink:"../learn/xii-acc.html",
home:{q:"What is a debenture?", ticks:["A debenture is a loan taken by a company from the public.","Debentureholders are creditors: they get fixed interest, not dividend.","Debentures can be issued at par, premium or discount and redeemed at par or premium."]},
formats:["journal","statements"],
concepts:{
  meaning:{n:"Meaning and types of debentures"}, issue:{n:"Issue at par, premium or discount", go:"lab"}, loss:{n:"Loss on issue and its write-off", go:"lab"},
  vendor:{n:"Issue for consideration other than cash", go:"lab"}, collateral:{n:"Debentures as collateral security"}, interest:{n:"Interest on debentures and TDS", go:"lab"}
},
acc:{
  cash:{n:"Bank A/c", al:["bank","cash","cash at bank","bank a c"]},
  pl:{n:"Statement of Profit and Loss", al:["statement of profit and loss","profit and loss","p l","statement of p l","surplus"]},
  debapp:{n:"Debenture Application and Allotment A/c", al:["debenture application and allotment","debentures application and allotment","debenture application","debenture application allotment","application and allotment"]},
  deb9:{n:"9% Debentures A/c", al:["9 debentures","9 percent debentures","nine percent debentures"]},
  deb10:{n:"10% Debentures A/c", al:["10 debentures","10 percent debentures"]},
  deb12:{n:"12% Debentures A/c", al:["12 debentures","12 percent debentures"]},
  loi:{n:"Loss on Issue of Debentures A/c", al:["loss on issue of debentures","loss on issue","loss on issue of debenture","discount on issue of debentures"]},
  prr:{n:"Premium on Redemption of Debentures A/c", al:["premium on redemption of debentures","premium on redemption","premium on redemption of debenture"]},
  secprem:{n:"Securities Premium A/c", al:["securities premium","security premium","securities premium reserve","premium on issue of debentures"]},
  dint:{n:"Debenture Interest A/c", al:["debenture interest","interest on debentures","interest on debenture"]},
  dh:{n:"Debentureholders A/c", al:["debentureholders","debenture holders","debentureholder","debenture holder"]},
  tds:{n:"TDS Payable A/c", al:["tds payable","tds","tax deducted at source","income tax payable"]},
  mach:{n:"Machinery A/c", al:["machinery","plant and machinery","machine"]}, vendor:{n:"Vendor A/c", al:["vendor","vendors","seller","supplier"]},
  dsus:{n:"Debenture Suspense A/c", al:["debenture suspense","debentures suspense"]},
  deb11:{n:"11% Debentures A/c", al:["11 debentures","11 percent debentures"]},
  sbi:{n:"Loan from SBI A/c", al:["loan from sbi","sbi loan","bank loan","sbi","loan"]}
},
intro:{
  hook:"Ganga Ltd needs ₹10 lakh for new machines but does not want to give away ownership by issuing more shares. So it borrows from the public by issuing debentures: certificates promising fixed interest every year and repayment after five years.",
  points:[
    "A <b>debenture</b> (Section 2(30)) is an instrument of debt. Debentureholders are <b>creditors</b> of the company, not owners.",
    "They receive <b>interest at a fixed rate</b> on the face value, payable even if the company makes a loss. They have no voting rights.",
    "Debentures may be issued at <b>par, premium or discount</b> and redeemed at <b>par or premium</b>. Debentures A/c is always credited at <b>face value</b>.",
    "Debentures may also be issued to a vendor for assets (consideration other than cash) or as <b>collateral security</b> for a loan."
  ],
  weight:"Board weightage: a 3 to 4 mark journal question (issue with loss on issue, writing off the loss, issue to a vendor or interest with TDS) is common."
},
objectives:[
  "Distinguish debentures from shares and name the types of debentures.",
  "Pass entries for all six combinations of issue and redemption.",
  "Calculate the loss on issue of debentures and write it off from Securities Premium and the Statement of Profit and Loss.",
  "Record debentures issued for consideration other than cash.",
  "Record debentures issued as collateral security under both methods.",
  "Record interest on debentures with TDS."
],
prereq:[
  {t:"Shares vs loans", d:"Owners get dividends; lenders get interest.", check:{q:"Interest on a loan taken by a company is…", opts:["A charge against profit","An appropriation of profit","Paid only if there is profit","Credited to Share Capital"], a:0, why:"Interest is payable whether or not there is profit."}},
  {t:"Discount and premium", d:"₹100 at 5% discount = ₹95; at 10% premium = ₹110.", check:{q:"A ₹100 debenture issued at 5% discount. Cash received:", opts:["₹95","₹105","₹100","₹5"], a:0, why:"100 − 5."}},
  {t:"Percent of face value", d:"Interest is always on face value.", check:{q:"9% interest on 1,000 debentures of ₹100:", opts:["₹9,000","₹900","₹90,000","₹1,000"], a:0, why:"1,00,000 × 9%."}}
],
kid:[
  {id:"k1", c:"meaning", title:"Borrowing from thousands of people", art:{s:[["🏭","Company"],["📃","Debenture ₹100"],["👨‍👩‍👧","Public lends"],["💹","Fixed interest"]], cap:"Debentureholders lend money; they are creditors, not owners."},
   story:"<p>Ganga Ltd needs ₹10 lakh. Instead of selling more shares, it prints 10,000 <b>debentures</b> of ₹100 each and borrows from the public.</p><p>Each debenture is a promise: <i>“We will pay you 9% interest every year and return your ₹100 after 5 years.”</i> Debentureholders are <b>lenders</b>: they get interest even in a bad year but have no vote.</p>",
   qa:[["Who are debentureholders?","Creditors of the company."],["What do they get?","Fixed interest on face value."],["Interest in a loss year?","Yes, it must still be paid."],["Voting rights?","No."]],
   check:{q:"A debentureholder is the company's…", opts:["Creditor","Owner","Director","Partner"], a:0, why:"He has lent money."}},
  {id:"k2", c:"meaning", title:"Kinds of debentures", art:{s:[["🔒","Secured"],["🔓","Unsecured"],["🔁","Convertible"],["🗓️","Redeemable"],["0️⃣","Zero coupon"]], cap:"Debentures differ by security, convertibility, repayment and interest."},
   story:"<p><b>Secured</b> debentures have a charge on the company's assets; <b>unsecured</b> do not. <b>Convertible</b> ones can become shares later; <b>non-convertible</b> cannot. <b>Redeemable</b> ones are repaid after a period; <b>irredeemable</b> (perpetual) are repaid only on winding up. <b>Zero coupon</b> bonds pay no interest but are issued at a deep discount. <b>Registered</b> debentures record holders' names; <b>bearer</b> ones pass by delivery.</p>",
   qa:[["Secured?","Backed by a charge on assets."],["Convertible?","Can be changed into shares."],["Zero coupon?","No interest; issued at a big discount."],["Perpetual?","Repaid only on winding up."]],
   check:{q:"Debentures issued at a deep discount with no interest are…", opts:["Zero coupon","Secured","Convertible","Bearer"], a:0, why:"Definition."}},
  {id:"k3", c:"issue", title:"Price tag vs face value", art:{s:[["🏷️","Face ₹100"],["⬇️","Issue ₹95"],["⬆️","Repay ₹110"],["💥","Loss ₹15 each"]], cap:"Discount now + extra paid later = loss on issue."},
   story:"<p>Ganga Ltd sells its ₹100 debentures for only ₹95 (5% <b>discount</b>) and promises to repay ₹110 (10% <b>premium on redemption</b>). The company gets ₹95 but owes ₹110 later: a <b>loss of ₹15</b> per debenture.</p><p>In the books, 9% Debentures A/c is credited at ₹100 (face value), Premium on Redemption at ₹10 (a liability), and Loss on Issue of Debentures is debited ₹15.</p>",
   qa:[["Credited at?","Face value, always."],["Premium on redemption?","A liability, shown under Other Long-term Liabilities."],["Loss on issue?","Discount + premium payable on redemption."],["Issued at premium?","Credit Securities Premium."]],
   check:{q:"Issue at par, redeemable at 5% premium. Loss on issue per ₹100 debenture:", opts:["₹5","Nil","₹10","₹105"], a:0, why:"Only the redemption premium."}},
  {id:"k4", c:"loss", title:"Cleaning up the loss", art:{s:[["💥","Loss ₹1,50,000"],["🧺","From Securities Premium ₹40,000"],["📉","Rest ₹1,10,000 from P&L"]], cap:"Use Securities Premium first, then the Statement of Profit and Loss."},
   story:"<p>A loss on issue cannot sit in the books for ever. It is <b>written off</b>: first from the <b>Securities Premium</b> balance (Section 52 allows this), and the rest from the <b>Statement of Profit and Loss</b>.</p><p>Ganga Ltd had ₹40,000 in Securities Premium: use it all, then charge ₹1,10,000 to the Statement of P&L.</p>",
   qa:[["First source?","Securities Premium."],["Then?","Statement of Profit and Loss."],["Why Securities Premium?","Section 52(2) permits it for discount on issue of debentures."],["Entry?","Securities Premium Dr, Statement of P&L Dr / To Loss on Issue."]],
   check:{q:"Loss on issue ₹60,000; Securities Premium ₹25,000. Charged to Statement of P&L:", opts:["₹35,000","₹60,000","₹25,000","Nil"], a:0, why:"60,000 − 25,000."}},
  {id:"k5", c:"vendor", title:"Paying for a machine with debentures", art:{s:[["⚙️","Machine ₹4,40,000"],["🤝","Vendor"],["📃","4,000 debentures at ₹110"]], cap:"Number of debentures = Amount payable ÷ Issue price."},
   story:"<p>Ganga Ltd buys a machine worth ₹4,40,000. Instead of cash, it gives the seller (<b>vendor</b>) its 12% debentures of ₹100 at a premium of 10% (₹110 each).</p><p>Number of debentures = 4,40,000 ÷ 110 = <b>4,000</b>. 12% Debentures A/c is credited ₹4,00,000 and Securities Premium ₹40,000.</p>",
   qa:[["First entry?","Machinery Dr / To Vendor."],["Second entry?","Vendor Dr / To Debentures (and Securities Premium)."],["Number?","Purchase price ÷ issue price."],["Cash involved?","No."]],
   check:{q:"Asset ₹1,90,000 paid by debentures of ₹100 at 5% discount. Number issued:", opts:["2,000","1,900","1,805","1,995"], a:0, why:"1,90,000 ÷ 95."}},
  {id:"k6", c:"interest", title:"Interest with tax deducted", art:{s:[["📅","Year end"],["💹","Interest ₹90,000"],["🏛️","TDS 10% ₹9,000"],["👨‍👩‍👧","Pay ₹81,000"]], cap:"The company keeps TDS and deposits it with the government."},
   story:"<p>9% on ₹10,00,000 = ₹90,000 interest. The law asks the company to deduct tax at source (TDS), say 10% = ₹9,000, and deposit it with the government. Debentureholders get ₹81,000.</p><p>Entries: Debenture Interest Dr 90,000 / To Debentureholders 81,000 / To TDS Payable 9,000; then pay them; then deposit TDS; finally transfer Debenture Interest to the Statement of Profit and Loss.</p>",
   qa:[["Interest on?","Face value."],["TDS?","Tax deducted and deposited with government."],["Final transfer?","Statement of P&L Dr / To Debenture Interest."],["Paid in a loss year?","Yes."]],
   check:{q:"Interest ₹50,000; TDS 10%. Paid to debentureholders:", opts:["₹45,000","₹50,000","₹5,000","₹55,000"], a:0, why:"50,000 − 5,000."}}
],
kidActs:[
  {id:"ka1", type:"sort", title:"Share or debenture?", c:"meaning",
   bins:["Equity share","Debenture"],
   items:[{t:"Holder is an owner", b:0, why:"Shareholders own the company."},{t:"Fixed interest is paid even in a loss", b:1, why:"Interest is a charge."},{t:"Voting rights", b:0, why:"Equity shareholders vote."},{t:"Can be secured by a charge on assets", b:1, why:"Secured debentures."},{t:"Return is a dividend that may vary", b:0, why:"Dividend depends on profit."},{t:"Repaid before shareholders on winding up", b:1, why:"Creditors are paid first."}]},
  {id:"ka2", type:"minute", title:"One-minute challenge: debenture entries", c:"issue", secs:60,
   items:[
     {q:"Debentures A/c is credited at…", opts:["Face value","Issue price"], a:0},
     {q:"Premium on issue of debentures goes to…", opts:["Securities Premium","Premium on Redemption"], a:0},
     {q:"Premium payable on redemption is a…", opts:["Liability","Reserve"], a:0},
     {q:"Loss on issue is written off first from…", opts:["Securities Premium","General Reserve"], a:0},
     {q:"Interest on debentures is calculated on…", opts:["Face value","Issue price"], a:0},
     {q:"Collateral debentures (Method 1) need…", opts:["No journal entry","Bank Dr / To Debentures"], a:0}
   ]}
],
exam:[
  {id:"e1", c:"meaning", title:"Meaning, features and types",
   html:"<p><b>Debenture</b> (Section 2(30)) includes debenture stock, bonds or any other instrument of a company evidencing a debt. Issued under Section 71.</p><p><b>Types:</b> secured / unsecured; redeemable / irredeemable (perpetual); convertible (fully or partly) / non-convertible; registered / bearer; specific coupon rate / zero coupon rate.</p><table class='tt'><thead><tr><th>Basis</th><th>Shares</th><th>Debentures</th></tr></thead><tbody><tr><td>Status</td><td>Owners</td><td>Creditors</td></tr><tr><td>Return</td><td>Dividend (appropriation)</td><td>Interest (charge)</td></tr><tr><td>Voting</td><td>Yes (equity)</td><td>No</td></tr><tr><td>Repayment on winding up</td><td>After creditors</td><td>Before shareholders</td></tr><tr><td>Security</td><td>None</td><td>May be secured</td></tr><tr><td>Issue at discount</td><td>Not allowed (Sec 53)</td><td>Allowed</td></tr></tbody></table>"},
  {id:"e2", c:"issue", title:"The six combinations of issue and redemption",
   html:"<p>Common first entries: Bank A/c Dr / To Debenture Application and Allotment A/c (cash received). Then:</p><table class='tt'><thead><tr><th>Case</th><th>Second entry (₹100 debenture)</th></tr></thead><tbody><tr><td>1. Par, redeemable at par</td><td>Deb. Application & Allotment Dr 100 / To Debentures 100</td></tr><tr><td>2. Discount 5%, redeemable at par</td><td>Deb. Appl. & Allot. Dr 95; Loss on Issue Dr 5 / To Debentures 100</td></tr><tr><td>3. Premium 5%, redeemable at par</td><td>Deb. Appl. & Allot. Dr 105 / To Debentures 100 / To Securities Premium 5</td></tr><tr><td>4. Par, redeemable at 10% premium</td><td>Deb. Appl. & Allot. Dr 100; Loss on Issue Dr 10 / To Debentures 100 / To Premium on Redemption 10</td></tr><tr><td>5. Discount 5%, redeemable at 10% premium</td><td>Deb. Appl. & Allot. Dr 95; Loss on Issue Dr 15 / To Debentures 100 / To Premium on Redemption 10</td></tr><tr><td>6. Premium 5%, redeemable at 10% premium</td><td>Deb. Appl. & Allot. Dr 105; Loss on Issue Dr 10 / To Debentures 100 / To Securities Premium 5 / To Premium on Redemption 10</td></tr></tbody></table>"},
  {id:"e3", c:"loss", title:"Loss on issue of debentures and its write-off",
   html:"<p class='formula'>Loss on issue = Discount on issue + Premium payable on redemption</p><p>Written off first from <b>Securities Premium</b> (Section 52(2)(c)), then from the <b>Statement of Profit and Loss</b> (as finance cost):</p><p class='formula'>Securities Premium A/c Dr<br>Statement of Profit and Loss Dr<br>&nbsp;&nbsp;To Loss on Issue of Debentures A/c</p><p>Premium on Redemption of Debentures is a liability: shown under Other Long-term Liabilities until redemption.</p>"},
  {id:"e4", c:"vendor", title:"Issue for consideration other than cash",
   html:"<p class='formula'>Number of debentures = Amount payable to vendor ÷ Issue price per debenture</p><table class='tt'><tbody><tr><td>Asset purchased</td><td>Sundry Assets A/c Dr / To Vendor A/c</td></tr><tr><td>Debentures issued at par</td><td>Vendor A/c Dr / To Debentures A/c</td></tr><tr><td>at premium</td><td>Vendor A/c Dr / To Debentures A/c / To Securities Premium A/c</td></tr><tr><td>at discount</td><td>Vendor A/c Dr; Loss on Issue Dr / To Debentures A/c</td></tr></tbody></table><p>If assets are taken over with liabilities, the vendor is credited with the purchase consideration; any excess of consideration over net assets is goodwill, any shortfall is capital reserve.</p>"},
  {id:"e5", c:"collateral", title:"Debentures as collateral security",
   html:"<p>A company may issue its own debentures to a lender as additional (collateral) security for a loan. The lender may sell them only if the company defaults.</p><p><b>Method 1:</b> no journal entry. In the Balance Sheet, the loan is shown with a note: “secured by issue of … debentures as collateral security”.</p><p><b>Method 2:</b> Debenture Suspense A/c Dr / To Debentures A/c. In the Balance Sheet, debentures are shown under Long-term Borrowings with Debenture Suspense deducted, so the total is not doubled.</p><p>No interest is paid on collateral debentures.</p>"},
  {id:"e6", c:"interest", title:"Interest on debentures with TDS",
   html:"<table class='tt'><tbody><tr><td>Interest due</td><td>Debenture Interest A/c Dr / To Debentureholders A/c / To TDS Payable A/c</td></tr><tr><td>Interest paid</td><td>Debentureholders A/c Dr / To Bank A/c</td></tr><tr><td>TDS deposited</td><td>TDS Payable A/c Dr / To Bank A/c</td></tr><tr><td>Transfer at year end</td><td>Statement of Profit and Loss Dr / To Debenture Interest A/c</td></tr></tbody></table><p>Interest is calculated on the <b>face value</b> for the period the debentures were outstanding.</p>"},
  {id:"e7", c:"issue", title:"Balance Sheet presentation",
   html:"<p>Non-current Liabilities → (a) Long-term Borrowings: debentures (secured/unsecured), with terms of redemption; (b) Other Long-term Liabilities: Premium on Redemption of Debentures. Debentures redeemable within 12 months move to Current Liabilities (current maturities of long-term debt).</p>"}
],
visual:{kind:"debenture", title:"Debenture issue playground", sub:"Pick the issue terms and redemption premium. See the cash, the credits, the loss on issue and the yearly interest.",
  n:10000, fv:100, issue:5, red:10, rate:9,
  flowTitle:"Life of a debenture issue", flow:["Application money received","Debentures allotted at face value","Discount/premium and redemption premium recorded","Loss on issue written off (SP, then P&L)","Interest paid yearly after TDS","Shown under Long-term Borrowings","Redeemed on maturity (beyond syllabus)"]},
formulas:[
  {n:"Loss on issue", f:"Discount on issue + Premium payable on redemption", code:"Less now + more later", c:"loss"},
  {n:"Write-off order", f:"Securities Premium first, then Statement of P&L", code:"SP then P&L", c:"loss"},
  {n:"Debentures A/c", f:"Always credited at face value", code:"Face, not price", c:"issue"},
  {n:"Number to vendor", f:"Amount payable ÷ Issue price", code:"Divide by the price paid", c:"vendor"},
  {n:"Interest", f:"Face value × rate × time; TDS = Interest × TDS rate", code:"Face × rate, minus TDS", c:"interest"},
  {n:"Collateral (Method 2)", f:"Debenture Suspense Dr / To Debentures", code:"Suspense balances it out", c:"collateral"}
],
illus:[
  {id:"i1", tag:"orig", c:"issue", title:"Comparing the six combinations",
   given:"A company issues 1,000 debentures of ₹100 each under six different terms.",
   required:"Loss on issue in each case.",
   formula:"Loss on issue = Discount + Premium on redemption (premium on issue reduces nothing; it goes to Securities Premium).",
   steps:["Par / par: <b>nil</b>","5% discount / par: 1,000 × 5 = <b>₹5,000</b>","5% premium / par: <b>nil</b> (₹5,000 to Securities Premium)","Par / 10% premium: <b>₹10,000</b>","5% discount / 10% premium: <b>₹15,000</b>","5% premium / 10% premium: <b>₹10,000</b> (and ₹5,000 to Securities Premium)"],
   answer:"Loss arises whenever there is a discount on issue or a premium on redemption.", why:"Debentures are credited at face value; the gap between what is received and what will be repaid is a loss."},
  {id:"i2", tag:"board", c:"issue", title:"Issued at premium, redeemable at premium",
   given:"Hari Ltd issued 2,000 12% debentures of ₹100 each at a premium of 5%, redeemable at a premium of 10%. Full amount payable on application. All debentures were subscribed.",
   required:"Journal entries.",
   formula:"Cash = 2,000 × 105; Debentures at face; SP 5 each; Premium on redemption 10 each; Loss 10 each.",
   steps:["Cash received = 2,000 × 105 = <b>₹2,10,000</b>","Securities Premium = 2,000 × 5 = <b>₹10,000</b>","Premium on redemption = 2,000 × 10 = <b>₹20,000</b> = Loss on issue"],
   format:{type:"journal", entries:[
     {date:"2026 Apr 1", lines:[{a:"cash", dr:210000},{a:"debapp", cr:210000}], narr:"(Being application money received)"},
     {date:"2026 Apr 1", lines:[{a:"debapp", dr:210000},{a:"loi", dr:20000},{a:"deb12", cr:200000},{a:"secprem", cr:10000},{a:"prr", cr:20000}], narr:"(Being 2,000 12% debentures allotted at 5% premium, redeemable at 10% premium)"}]},
   answer:"Loss on issue ₹20,000; Securities Premium ₹10,000.", why:"The premium received on issue is a capital gain (Securities Premium); the premium payable on redemption is a future liability and a loss."},
  {id:"i3", tag:"board", c:"collateral", title:"Collateral security: Method 2",
   given:"Ganga Ltd took a bank loan of ₹5,00,000 and issued 6,000 10% debentures of ₹100 each as collateral security.",
   required:"Entry under Method 2 and the treatment under Method 1.",
   formula:"Method 2: Debenture Suspense Dr / To Debentures at face value.",
   steps:["Method 1: <b>no entry</b>; note below the bank loan","Method 2: face value = 6,000 × 100 = <b>₹6,00,000</b>","Balance Sheet (Method 2): 10% Debentures 6,00,000 less Debenture Suspense 6,00,000 = nil, plus bank loan 5,00,000"],
   format:{type:"journal", entries:[{date:"2026 Apr 1", lines:[{a:"dsus", dr:600000},{a:"deb10", cr:600000}], narr:"(Being 6,000 10% debentures issued as collateral security for a bank loan)"}]},
   answer:"Debenture Suspense Dr ₹6,00,000 / To 10% Debentures ₹6,00,000.", why:"No money is received, so the debentures must not increase total borrowings."}
],
solver:[
  {id:"s1", tag:"board", c:"loss", title:"Loss on issue: discount and redemption premium", mins:5,
   q:"Ganga Ltd issued 10,000 9% debentures of ₹100 each at a discount of 5%, redeemable at a premium of 10%.",
   steps:[
     {label:"Cash received", prompt:"Cash received (₹)", kind:"num", ans:950000, hint:"10,000 × 95.", formula:"Number × issue price", why:"9,50,000.", avoid:""},
     {label:"Debentures credited", prompt:"Amount credited to 9% Debentures A/c (₹)", kind:"num", ans:1000000, hint:"Face value.", formula:"Number × face value", traps:[{v:950000, why:"Debentures are credited at FACE value, not at the issue price."},{v:1100000, why:"Redemption premium goes to a separate liability account."}], why:"10,00,000.", avoid:""},
     {label:"Loss on issue", prompt:"Loss on issue of debentures (₹)", kind:"num", ans:150000, hint:"Discount 50,000 + redemption premium 1,00,000.", formula:"Discount + premium on redemption", traps:[{v:50000, why:"Add the premium payable on redemption too."},{v:100000, why:"Add the discount on issue too."}], why:"1,50,000.", avoid:""}
   ]},
  {id:"s2", tag:"orig", c:"vendor", title:"Debentures issued to a vendor", mins:5,
   q:"Ganga Ltd bought machinery for ₹4,40,000 and paid the vendor by issuing 12% debentures of ₹100 each at a premium of 10%.",
   steps:[
     {label:"Issue price", prompt:"Issue price per debenture (₹)", kind:"num", ans:110, hint:"100 + 10%.", formula:"Face + premium", why:"110.", avoid:""},
     {label:"Number", prompt:"Number of debentures issued", kind:"num", ans:4000, hint:"4,40,000 ÷ 110.", formula:"Amount ÷ issue price", traps:[{v:4400, why:"Divide by the ISSUE price ₹110, not the face value ₹100."}], why:"4,000.", avoid:""},
     {label:"Securities Premium", prompt:"Securities Premium credited (₹)", kind:"num", ans:40000, hint:"4,000 × 10.", formula:"Number × premium", why:"40,000.", avoid:""}
   ]},
  {id:"s3", tag:"board", c:"interest", title:"Interest with TDS", mins:4,
   q:"10,000 9% debentures of ₹100 each were outstanding for the whole year. TDS is deducted at 10%.",
   steps:[
     {label:"Interest", prompt:"Interest for the year (₹)", kind:"num", ans:90000, hint:"10,00,000 × 9%.", formula:"Face value × rate", traps:[{v:85500, why:"Interest is on FACE value (₹10,00,000), not on the issue price (₹9,50,000)."}], why:"90,000.", avoid:""},
     {label:"TDS", prompt:"TDS (₹)", kind:"num", ans:9000, hint:"10% of interest.", formula:"Interest × TDS rate", why:"9,000.", avoid:""},
     {label:"Net paid", prompt:"Amount paid to debentureholders (₹)", kind:"num", ans:81000, hint:"90,000 − 9,000.", formula:"Interest − TDS", why:"81,000.", avoid:""}
   ]},
  {id:"s4", tag:"board", c:"loss", title:"Writing off the loss", mins:4,
   q:"Loss on issue of debentures is ₹1,50,000. The company has a Securities Premium balance of ₹40,000. Write off the loss in the year of issue.",
   steps:[
     {label:"From Securities Premium", prompt:"Amount written off from Securities Premium (₹)", kind:"num", ans:40000, hint:"Use the whole balance.", formula:"Lower of SP balance and loss", why:"40,000.", avoid:""},
     {label:"From Statement of P&L", prompt:"Amount written off to Statement of P&L (₹)", kind:"num", ans:110000, hint:"1,50,000 − 40,000.", formula:"Loss − SP used", traps:[{v:150000, why:"Use Securities Premium first; only the balance goes to P&L."}], why:"1,10,000.", avoid:""}
   ]}
],
lab:[
  {id:"L0", tag:"orig", level:"Easy", c:"issue", title:"Issue at par, redeemable at par",
   q:"Ravi Ltd issued 5,000 10% debentures of ₹100 each at par, redeemable at par, the whole amount payable on application. All were subscribed. Pass the journal entries.",
   format:{type:"journal", entries:[
     {label:"Application money received", date:"2026 Apr 1", lines:[{a:"cash", dr:500000},{a:"debapp", cr:500000}], narr:"(Being application money received on 5,000 debentures)"},
     {label:"Debentures allotted", date:"2026 Apr 1", lines:[{a:"debapp", dr:500000},{a:"deb10", cr:500000}], narr:"(Being 5,000 10% debentures allotted)"}
   ]}},
  {id:"L1", tag:"board", level:"Medium", c:"issue", title:"Discount on issue, premium on redemption",
   q:"Ganga Ltd issued 10,000 9% debentures of ₹100 each at a discount of 5%, redeemable at a premium of 10% after 5 years. The whole amount was payable on application and all debentures were subscribed. Pass the journal entries for the issue.",
   format:{type:"journal", entries:[
     {label:"Application money received", date:"2026 Apr 1", lines:[{a:"cash", dr:950000, why:"10,000 × 95."},{a:"debapp", cr:950000}], narr:"(Being application money received)"},
     {label:"Debentures allotted", date:"2026 Apr 1", lines:[{a:"debapp", dr:950000},{a:"loi", dr:150000, why:"Discount 50,000 + premium on redemption 1,00,000."},{a:"deb9", cr:1000000, why:"Always at face value."},{a:"prr", cr:100000, why:"10% payable on redemption: a liability."}], narr:"(Being 10,000 9% debentures allotted at 5% discount, redeemable at 10% premium)"}
   ]}},
  {id:"L2", tag:"board", level:"Medium", c:"loss", title:"Writing off the loss on issue", ref:"L1",
   q:"Continuing L1: Ganga Ltd has a Securities Premium balance of ₹40,000. Write off the loss on issue of debentures in the year of issue.",
   format:{type:"journal", entries:[
     {label:"Loss written off", date:"2027 Mar 31", lines:[{a:"secprem", dr:40000, why:"Securities Premium first (Section 52)."},{a:"pl", dr:110000, why:"Balance 1,50,000 − 40,000."},{a:"loi", cr:150000}], narr:"(Being loss on issue of debentures written off)"}
   ]}},
  {id:"L3", tag:"board", level:"Hard", c:"vendor", title:"Debentures issued to a vendor",
   q:"Ganga Ltd purchased machinery for ₹4,40,000 from Supreme Machines and paid them by issuing 12% debentures of ₹100 each at a premium of 10%. Pass the journal entries.",
   format:{type:"journal", entries:[
     {label:"Machinery purchased", date:"2026 May 1", lines:[{a:"mach", dr:440000},{a:"vendor", cr:440000}], narr:"(Being machinery purchased from Supreme Machines)"},
     {label:"Debentures issued to vendor", date:"2026 May 1", lines:[{a:"vendor", dr:440000},{a:"deb12", cr:400000, why:"4,40,000 ÷ 110 = 4,000 debentures × ₹100."},{a:"secprem", cr:40000, why:"4,000 × 10."}], narr:"(Being 4,000 12% debentures issued at 10% premium to the vendor)"}
   ]}},
  {id:"L4", tag:"board", level:"Medium", c:"interest", title:"Interest on debentures with TDS", ref:"L1",
   q:"Continuing L1: interest on the 9% debentures for the year ended 31 March 2027 was paid after deducting TDS at 10%. TDS was deposited with the government. Pass the entries for interest due, interest paid, TDS deposited and transfer of interest to the Statement of Profit and Loss.",
   format:{type:"journal", entries:[
     {label:"Interest due", date:"2027 Mar 31", lines:[{a:"dint", dr:90000, why:"10,00,000 × 9% (on face value)."},{a:"dh", cr:81000},{a:"tds", cr:9000, why:"10% of 90,000."}], narr:"(Being interest due on debentures and TDS deducted)"},
     {label:"Interest paid", date:"2027 Mar 31", lines:[{a:"dh", dr:81000},{a:"cash", cr:81000}], narr:"(Being interest paid to debentureholders)"},
     {label:"TDS deposited", date:"2027 Mar 31", lines:[{a:"tds", dr:9000},{a:"cash", cr:9000}], narr:"(Being TDS deposited with the government)"},
     {label:"Interest transferred", date:"2027 Mar 31", lines:[{a:"pl", dr:90000},{a:"dint", cr:90000}], narr:"(Being debenture interest transferred to Statement of Profit and Loss)"}
   ]}},
  {id:"L5", tag:"orig", level:"Hard", c:"loss", title:"Statement of loss on issue", ref:"L1",
   q:"Using L1 and L2, complete the working for the loss on issue of debentures and its write-off.",
   format:{type:"grid", single:true, name:"Working note: Loss on issue of debentures", head:["Particulars","₹"],
    rows:[["Discount on issue (5% of ₹10,00,000)",{a:50000}],["Premium payable on redemption (10% of ₹10,00,000)",{a:100000}],["Total loss on issue",{a:150000}],["Written off from Securities Premium",{a:40000}],["Written off from Statement of Profit and Loss",{a:110000}]]}},
  {id:"L6", tag:"orig", level:"Easy", c:"collateral", title:"Collateral security (Method 2)",
   q:"Ganga Ltd took a loan of ₹5,00,000 from SBI and issued 6,000 10% debentures of ₹100 each as collateral security. Pass the entries for the loan received and the debentures issued (Method 2).",
   format:{type:"journal", entries:[
     {label:"Loan received", date:"2026 Apr 1", lines:[{a:"cash", dr:500000},{a:"sbi", cr:500000}], narr:"(Being loan taken from SBI)"},
     {label:"Collateral debentures", date:"2026 Apr 1", lines:[{a:"dsus", dr:600000},{a:"deb10", cr:600000, why:"Face value 6,000 × 100; no cash is received."}], narr:"(Being 6,000 10% debentures issued as collateral security)"}
   ]}}
],
blanks:[
  {id:"B1", t:"Journal", type:"journal", rows:8},
  {id:"B2", t:"Working note", type:"grid", rows:6, single:true, head:["Particulars","₹"]},
  {id:"B3", t:"Ledger account (T-format)", type:"tacc", rows:6, heads:["Particulars","₹","Particulars","₹"]}
],
mistakes:[
  {id:"m1", c:"issue", q:"10,000 debentures of ₹100 issued at 5% discount, redeemable at par. Entry:", shown:[["Debenture Application and Allotment A/c","Dr",950000,""],["To 9% Debentures A/c","",null,950000]],
   opts:["Debentures must be credited at face value ₹10,00,000; Loss on Issue Dr ₹50,000","The discount should be credited","Bank should be debited ₹10,00,000","Nothing is wrong"], a:0, why:"Face value always."},
  {id:"m2", c:"interest", q:"Interest on 10,000 9% debentures of ₹100 issued at ₹95:", work:["Interest = 9,50,000 × 9% = 85,500"],
   opts:["Interest is on face value: 10,00,000 × 9% = 90,000","Rate should be 10%","Interest is not payable in the first year","Nothing is wrong"], a:0, why:"Coupon rate applies to face value."},
  {id:"m3", c:"issue", q:"Premium of 10% payable on redemption recorded as:", shown:[["Loss on Issue of Debentures A/c","Dr",100000,""],["To Securities Premium A/c","",null,100000]],
   opts:["It should be credited to Premium on Redemption of Debentures A/c (a liability)","Loss should be credited","Amount should be ₹10,000","Nothing is wrong"], a:0, why:"Securities Premium is only for premium RECEIVED."},
  {id:"m4", c:"interest", q:"Interest ₹90,000; TDS 10%. Entry:", shown:[["Debenture Interest A/c","Dr",90000,""],["To Debentureholders A/c","",null,90000]],
   opts:["TDS ₹9,000 must be credited to TDS Payable; Debentureholders only ₹81,000","Interest should be ₹81,000","Bank should be credited directly","Nothing is wrong"], a:0, why:"Tax is deducted at source."},
  {id:"m5", c:"collateral", q:"Debentures of ₹6,00,000 issued as collateral for a loan:", shown:[["Bank A/c","Dr",600000,""],["To 10% Debentures A/c","",null,600000]],
   opts:["No cash is received: use Debenture Suspense (Method 2) or no entry (Method 1)","Amount should be ₹5,00,000","Debentures should be debited","Nothing is wrong"], a:0, why:"Collateral debentures bring no money."}
],
cases:[
  {id:"c1", tag:"board", title:"Metro Components Ltd expands",
   story:"Metro Components Ltd needs funds for a new plant. On 1 April 2026 it issued 20,000 8% debentures of ₹100 each at a premium of 6%, redeemable at a premium of 10% after 5 years. It also bought land for ₹3,15,000 from a farmer, paying him in 8% debentures of ₹100 each issued at a premium of 5%. TDS on interest is 10%. Its Securities Premium balance before these issues was nil.",
   qs:[
     {type:"num", c:"issue", q:"Cash received on the public issue (₹)", ans:2120000, why:"20,000 × 106."},
     {type:"num", c:"loss", q:"Loss on issue of the public issue debentures (₹)", ans:200000, why:"Premium on redemption 20,000 × 10 (premium on issue goes to SP, it does not reduce the loss)."},
     {type:"num", c:"vendor", q:"Number of debentures issued to the farmer", ans:3000, why:"3,15,000 ÷ 105."},
     {type:"num", c:"interest", q:"Net interest paid to holders of the public issue for 2026-27 (₹)", ans:144000, why:"20,00,000 × 8% = 1,60,000 − TDS 16,000."},
     {type:"num", c:"loss", q:"Amount of loss on issue charged to Statement of P&L (₹)", ans:65000, why:"Securities Premium available = 1,20,000 (public) + 15,000 (farmer) = 1,35,000; 2,00,000 − 1,35,000 = 65,000."}
   ]}
],
games:{
  names:{bs:"Balance Sheet Placer", profit:"Loss Tracker"},
  obj:{dc:"Choose the correct entry for each debenture transaction.", bs:"Place each item in the right part of the Balance Sheet.", profit:"Track the loss on issue still to be written off."},
  cc:{bs:"issue", profit:"loss", missing:"vendor", escape:"loss", casegame:"issue", detective:"issue", race:"issue"},
  dc:[
    {t:"Debentures issued at par, redeemable at par: allotment.", ok:"Dr Debenture Application & Allotment A/c · Cr Debentures A/c", bad:["Dr Debentures A/c · Cr Debenture Application & Allotment A/c","Dr Bank A/c · Cr Debentures A/c","Dr Debenture Application & Allotment A/c · Cr Share Capital A/c"], c:"issue"},
    {t:"Issued at a discount: the discount.", ok:"Dr Loss on Issue of Debentures A/c", bad:["Cr Loss on Issue of Debentures A/c","Dr Securities Premium A/c","Cr Debentures A/c with issue price"], c:"issue"},
    {t:"Issued at a premium: the premium.", ok:"Cr Securities Premium A/c", bad:["Cr Premium on Redemption of Debentures A/c","Dr Loss on Issue of Debentures A/c","Cr Debentures A/c"], c:"issue"},
    {t:"Redeemable at a premium: the premium payable.", ok:"Cr Premium on Redemption of Debentures A/c (Dr Loss on Issue)", bad:["Cr Securities Premium A/c","Dr Premium on Redemption A/c","No entry until redemption"], c:"issue"},
    {t:"Loss on issue written off.", ok:"Dr Securities Premium A/c, Statement of P&L · Cr Loss on Issue of Debentures A/c", bad:["Dr Loss on Issue · Cr Securities Premium","Dr General Reserve · Cr Debentures","Dr Debentures · Cr Loss on Issue"], c:"loss"},
    {t:"Machinery bought from a vendor.", ok:"Dr Machinery A/c · Cr Vendor A/c", bad:["Dr Vendor A/c · Cr Machinery A/c","Dr Machinery A/c · Cr Debentures A/c","Dr Machinery A/c · Cr Bank A/c"], c:"vendor"},
    {t:"Debentures issued to the vendor at par.", ok:"Dr Vendor A/c · Cr Debentures A/c", bad:["Dr Debentures A/c · Cr Vendor A/c","Dr Machinery A/c · Cr Debentures A/c","Dr Vendor A/c · Cr Bank A/c"], c:"vendor"},
    {t:"Debentures issued as collateral (Method 2).", ok:"Dr Debenture Suspense A/c · Cr Debentures A/c", bad:["Dr Bank A/c · Cr Debentures A/c","Dr Debentures A/c · Cr Debenture Suspense A/c","Dr Bank Loan A/c · Cr Debentures A/c"], c:"collateral"},
    {t:"Interest due with TDS.", ok:"Dr Debenture Interest A/c · Cr Debentureholders A/c, TDS Payable A/c", bad:["Dr Debentureholders A/c · Cr Debenture Interest A/c","Dr Debenture Interest A/c · Cr Bank A/c only","Dr Statement of P&L · Cr Debentureholders A/c"], c:"interest"},
    {t:"Debenture interest closed at year end.", ok:"Dr Statement of Profit and Loss · Cr Debenture Interest A/c", bad:["Dr Debenture Interest A/c · Cr Statement of P&L","Dr Securities Premium · Cr Debenture Interest","Dr Debentureholders · Cr Debenture Interest"], c:"interest"}
  ],
  bs:{c:"issue", title:"Where does each item go in the company's Balance Sheet?",
    bins:["Long-term Borrowings","Reserves and Surplus","Other Long-term Liabilities / Current Liabilities"],
    items:[{t:"9% Debentures", b:0},{t:"12% Debentures issued to vendor", b:0},{t:"Bank loan secured by collateral debentures", b:0},{t:"Securities Premium", b:1},{t:"Balance of Statement of P&L (surplus)", b:1},{t:"Premium on Redemption of Debentures", b:2, why:"Other Long-term Liabilities."},{t:"TDS Payable", b:2, why:"Other Current Liabilities."},{t:"Interest accrued and due on debentures", b:2, why:"Other Current Liabilities."}]},
  race:[
    {t:"2,000 debentures of ₹100 at 4% discount. Cash received?", ok:"Bank A/c Dr → Debenture Application & Allotment A/c", bad:["Debenture Application & Allotment A/c Dr → Bank A/c","Bank A/c Dr → Debentures A/c at ₹2,00,000"], amt:192000, c:"issue"},
    {t:"Those 2,000 are redeemable at 5% premium. Loss on issue?", ok:"Loss on Issue Dr (with Appl. & Allot.) → Debentures & Premium on Redemption", bad:["Securities Premium Dr → Loss on Issue","Debentures Dr → Loss on Issue"], amt:18000, c:"loss"},
    {t:"Asset ₹2,10,000 paid by debentures of ₹100 at 5% premium. Number?", ok:"Vendor A/c Dr → Debentures & Securities Premium", bad:["Debentures Dr → Vendor A/c","Asset A/c Dr → Debentures A/c"], amt:2000, c:"vendor"},
    {t:"Interest 10% on ₹3,00,000 debentures; TDS 10%. Net paid?", ok:"Debenture Interest Dr → Debentureholders & TDS Payable", bad:["Debentureholders Dr → Debenture Interest","Debenture Interest Dr → Bank only"], amt:27000, c:"interest"},
    {t:"Loss on issue ₹30,000; SP ₹12,000. To Statement of P&L?", ok:"Securities Premium & Statement of P&L Dr → Loss on Issue", bad:["Loss on Issue Dr → Securities Premium","Statement of P&L Dr → Securities Premium"], amt:18000, c:"loss"},
    {t:"1,500 debentures of ₹100 issued as collateral (Method 2).", ok:"Debenture Suspense Dr → Debentures", bad:["Bank Dr → Debentures","Debentures Dr → Debenture Suspense"], amt:150000, c:"collateral"}
  ],
  missing:[
    {q:"Debentures ₹5,00,000 issued at 6% discount, redeemable at 4% premium. Loss on issue = ?", kind:"num", ans:50000, why:"30,000 + 20,000.", c:"loss"},
    {q:"Asset ₹4,80,000 paid by debentures of ₹100 at 4% discount. Number = ?", kind:"num", ans:5000, why:"4,80,000 ÷ 96.", c:"vendor"},
    {q:"Interest paid net ₹54,000 after 10% TDS. Gross interest = ?", kind:"num", ans:60000, why:"54,000 ÷ 0.9.", c:"interest"},
    {q:"8% debentures ₹2,50,000 issued on 1 October; year ends 31 March. Interest for the year = ?", kind:"num", ans:10000, why:"2,50,000 × 8% × 6/12.", c:"interest"},
    {q:"3,000 debentures of ₹100 at 7% premium. Securities Premium = ?", kind:"num", ans:21000, why:"3,000 × 7.", c:"issue"},
    {q:"Loss ₹75,000; Statement of P&L charged ₹45,000. Securities Premium used = ?", kind:"num", ans:30000, why:"75,000 − 45,000.", c:"loss"}
  ],
  profit:{ask:"loss on issue still to be written off?", plus:"increase", minus:"decrease", c:"loss", start:"Start from 0. Type the balance of Loss on Issue of Debentures after each event.", base:"Ganga Ltd: 10,000 debentures of ₹100.",
    steps:[{t:"Issued at 5% discount", v:50000},{t:"Redeemable at 10% premium", v:100000},{t:"Securities Premium of ₹40,000 used", v:-40000}],
    final:{q:"The rest is charged to the Statement of P&L. Amount = ?", ans:110000, why:"1,50,000 − 40,000.", hint:"Whatever is left."}},
  escape:{story:"The treasurer's vault opens only with four debenture codes.",
    locks:[
      {room:"Lock 1: Cash", q:"5,000 debentures of ₹100 issued at 8% discount. Code = cash received.", ans:460000, hint:"5,000 × 92.", c:"issue"},
      {room:"Lock 2: Loss", q:"Those debentures are redeemable at 5% premium. Code = loss on issue.", ans:65000, hint:"40,000 + 25,000.", c:"loss"},
      {room:"Lock 3: Vendor", q:"Building ₹3,30,000 paid by debentures of ₹100 at 10% premium. Code = number issued.", ans:3000, hint:"3,30,000 ÷ 110.", c:"vendor"},
      {room:"Lock 4: Interest", q:"12% on ₹5,00,000 debentures; TDS 10%. Code = TDS.", ans:6000, hint:"60,000 × 10%.", c:"interest"}
    ]}
},
revision:{
  summary:["Debenture = instrument of debt (Sec 2(30)); holders are creditors; fixed interest is a charge.","Types: secured/unsecured, redeemable/perpetual, convertible/non-convertible, registered/bearer, zero coupon.","Debentures A/c always credited at face value.","Premium on issue → Securities Premium. Discount on issue and premium on redemption → Loss on Issue (Dr); premium on redemption → liability.","Write off loss: Securities Premium first, then Statement of P&L.","Vendor: Asset Dr / To Vendor; Vendor Dr / To Debentures (+SP). Number = amount ÷ issue price.","Collateral: Method 1 no entry; Method 2 Debenture Suspense Dr / To Debentures.","Interest on face value; TDS credited to TDS Payable; interest closed to Statement of P&L."],
  defs:[["Debenture","An instrument acknowledging a debt by the company, including debenture stock and bonds (Section 2(30))."],["Loss on issue of debentures","The sum of discount allowed on issue and premium payable on redemption."],["Collateral security","Additional security given to a lender, to be used only if the borrower defaults."],["Zero coupon bonds","Debentures carrying no interest, issued at a deep discount and redeemed at face value."]],
  flash:[{f:"Debentures credited at",b:"Face value"},{f:"Loss on issue",b:"Discount + premium on redemption"},{f:"Write-off order",b:"Securities Premium → Statement of P&L"},{f:"Premium on redemption shown under",b:"Other Long-term Liabilities"},{f:"Number to vendor",b:"Amount ÷ issue price"},{f:"Collateral Method 2",b:"Debenture Suspense Dr / To Debentures"},{f:"Interest base",b:"Face value × rate × time"}],
  treat:[["Issue at par/par","Appl. & Allot. Dr → Debentures"],["Discount","Loss on Issue Dr"],["Premium on issue","→ Securities Premium"],["Premium on redemption","Loss on Issue Dr → Premium on Redemption"],["Write off","SP, Statement of P&L Dr → Loss on Issue"],["Vendor","Asset Dr → Vendor; Vendor Dr → Debentures (+SP)"],["Collateral (M2)","Debenture Suspense Dr → Debentures"],["Interest","Debenture Interest Dr → Debentureholders, TDS Payable"]],
  mistakes:["Crediting debentures at the issue price.","Crediting premium on redemption to Securities Premium.","Calculating interest on the issue price.","Debiting Bank for collateral debentures.","Ignoring TDS when interest is paid.","Charging the whole loss to P&L when Securities Premium is available."],
  fib:[{q:"Debentures A/c is always credited at ______ value.", a:["face","nominal","par"]},{q:"Premium payable on redemption of debentures is a ______.", a:["liability"]},{q:"Loss on issue of debentures is first written off from ______ Premium.", a:["securities","security"]},{q:"Under Method 2, collateral debentures are debited to Debenture ______ A/c.", a:["suspense"]}],
  mcq:[
    {q:"Debentureholders are…", opts:["Creditors","Owners","Members","Directors"], a:0, why:"They lend money.", c:"meaning"},
    {q:"1,000 debentures of ₹100 at 10% discount, redeemable at par. Loss:", opts:["₹10,000","₹1,000","Nil","₹1,10,000"], a:0, why:"Discount only.", c:"loss"},
    {q:"Premium on issue of debentures is credited to…", opts:["Securities Premium","Premium on Redemption","Statement of P&L","Debentures"], a:0, why:"Capital receipt.", c:"issue"},
    {q:"Asset ₹2,85,000 paid by debentures of ₹100 at 5% discount. Number:", opts:["3,000","2,850","2,707","2,993"], a:0, why:"2,85,000 ÷ 95.", c:"vendor"},
    {q:"Interest ₹40,000; TDS 10%. TDS Payable credited:", opts:["₹4,000","₹36,000","₹40,000","₹400"], a:0, why:"10%.", c:"interest"},
    {q:"Under Method 1 for collateral debentures…", opts:["No entry is passed","Bank is debited","Debenture Suspense is debited","Loan is debited"], a:0, why:"Only a note.", c:"collateral"}
  ],
  ar:[
    {a:"Interest on debentures is payable even if the company suffers a loss.", r:"Interest on debentures is a charge against profit.", ans:0, why:"Both true; R explains A.", c:"interest"},
    {a:"Debentures can be issued at a discount.", r:"Section 53 prohibits issue of debentures at a discount.", ans:2, why:"A true; R false (Section 53 applies to shares).", c:"issue"},
    {a:"Premium on redemption of debentures is credited to Securities Premium.", r:"Premium on redemption is payable to debentureholders in future.", ans:3, why:"A false; R true.", c:"issue"}
  ],
  numericals:["L1","L2","L3","L4","s1","s2"]
},
test:{mins:30, items:[
  {type:"mcq", m:1, c:"meaning", q:"Which is NOT true of debentures?", opts:["Holders have voting rights","They carry fixed interest","They may be secured","Holders are creditors"], a:0, why:"No voting rights."},
  {type:"mcq", m:1, c:"issue", q:"Debentures issued at a premium of 5%, redeemable at par: loss on issue per ₹100 debenture:", opts:["Nil","₹5","₹105","₹10"], a:0, why:"No discount, no redemption premium."},
  {type:"mcq", m:1, c:"loss", q:"Loss on issue of debentures can be written off from…", opts:["Securities Premium and Statement of P&L","Capital Reserve only","Share Capital","Premium on Redemption"], a:0, why:"Section 52 and P&L."},
  {type:"mcq", m:1, c:"collateral", q:"Interest on debentures issued as collateral security is…", opts:["Not paid","Paid at coupon rate","Paid at 6%","Added to the loan"], a:0, why:"They are only security."},
  {type:"mcq", m:1, c:"interest", q:"Debenture interest is finally transferred to…", opts:["Statement of Profit and Loss","Securities Premium","Debentures A/c","General Reserve"], a:0, why:"It is a finance cost."},
  {type:"mcq", m:1, c:"vendor", q:"Assets of ₹1,00,000 bought for debentures of ₹100 issued at par. Vendor A/c is…", opts:["Debited ₹1,00,000 when debentures are issued","Credited when debentures are issued","Not opened","Debited when assets are bought"], a:0, why:"Vendor Dr / To Debentures."},
  {type:"ar", m:1, c:"issue", a:"Debentures A/c is credited with the face value even when issued at a discount.", r:"The company is liable to repay at least the face value.", ans:0, why:"Both true; R explains A."},
  {type:"ar", m:1, c:"collateral", a:"Debentures issued as collateral increase the company's total borrowings in the Balance Sheet.", r:"Under Method 2, Debenture Suspense is deducted from Debentures.", ans:3, why:"A false; R true."},
  {type:"nums", m:3, c:"loss", q:"4,000 10% debentures of ₹100 issued at 6% discount, redeemable at 5% premium. Securities Premium balance ₹10,000.", parts:[{p:"Loss on issue (₹)", ans:44000, why:"24,000 + 20,000."},{p:"Charged to Statement of P&L (₹)", ans:34000, why:"44,000 − 10,000."}]},
  {type:"nums", m:3, c:"vendor", q:"Furniture ₹2,64,000 bought; paid by 9% debentures of ₹100 at 10% premium.", parts:[{p:"Number of debentures", ans:2400, why:"2,64,000 ÷ 110."},{p:"Securities Premium (₹)", ans:24000, why:"2,400 × 10."}]},
  {type:"nums", m:4, c:"interest", q:"12% debentures of ₹8,00,000 outstanding all year; TDS 10%.", parts:[{p:"Interest (₹)", ans:96000, why:"8,00,000 × 12%."},{p:"Net paid to debentureholders (₹)", ans:86400, why:"96,000 − 9,600."}]},
  {type:"self", m:3, c:"meaning", q:"Give any three differences between shares and debentures.",
   model:"(i) Shareholders are owners; debentureholders are creditors. (ii) Shareholders get dividend (appropriation of profit); debentureholders get interest (charge, payable even in loss). (iii) Equity shareholders have voting rights; debentureholders do not. Also correct: debentures may be secured; debentures repaid before shares on winding up; debentures can be issued at a discount, shares cannot.",
   crit:["One correct difference","A second correct difference","A third correct difference"]},
  {type:"journal", m:4, c:"issue", q:"Leela Ltd issued 3,000 11% debentures of ₹100 each at par, redeemable at a premium of 8%. The whole amount was received on application. Pass the journal entries.",
   entries:[
     {label:"Application money received", date:"2026 Apr 1", lines:[{a:"cash", dr:300000},{a:"debapp", cr:300000}], narr:"(Being application money received)"},
     {label:"Debentures allotted", date:"2026 Apr 1", lines:[{a:"debapp", dr:300000},{a:"loi", dr:24000, why:"3,000 × 8 premium payable on redemption."},{a:"deb11", cr:300000},{a:"prr", cr:24000}], narr:"(Being 3,000 11% debentures allotted, redeemable at 8% premium)"}
   ]}
]}
});
