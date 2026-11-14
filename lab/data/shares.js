/* Notesflix 101 · Accountancy Lab · Class XII · Accounting for Share Capital
   Basis: CBSE 2026-27 Accountancy (055), Unit 2 Accounting for Companies; NCERT Class XII Accountancy Part II;
   Companies Act, 2013 (Sections 2(20), 2(84), 39, 42, 43, 52, 53, 62; Table F) and Schedule III.
   All questions are ORIGINAL practice questions ("orig") or written in CBSE board style ("board") for Notesflix 101.
   Check: node lab/tools/validate.js shares */
NFLab.register({
id:"shares", cls:"XII", subject:"Accountancy", unit:"Accounting for Companies", num:"7", icon:"📜",
title:"Accounting for Share Capital",
tagline:"Kinds of share capital, issue at par and premium, over-subscription and pro-rata allotment, calls in arrears and advance, forfeiture, reissue and Balance Sheet presentation.",
notesLink:"../learn/xii-acc.html",
home:{q:"What is share capital?", ticks:["A company raises money by selling small units called shares.","Buyers pay in instalments: application, allotment and calls.","If a shareholder does not pay, his shares can be forfeited and reissued."]},
formats:["journal","ledger","statements"],
concepts:{
  company:{n:"Company, shares and kinds of capital"}, issue:{n:"Issue at par and premium", go:"lab"}, prorata:{n:"Over-subscription and pro-rata allotment", go:"lab"},
  calls:{n:"Calls in arrears and in advance"}, forfeit:{n:"Forfeiture of shares", go:"lab"}, reissue:{n:"Reissue and Capital Reserve", go:"lab"}, present:{n:"Balance Sheet presentation", go:"lab"}
},
acc:{
  cash:{n:"Bank A/c", al:["bank","cash","cash at bank","bank a c"]},
  app:{n:"Equity Share Application A/c", al:["equity share application","share application","application","equity shares application"]},
  allot:{n:"Equity Share Allotment A/c", al:["equity share allotment","share allotment","allotment","equity shares allotment"]},
  call:{n:"Equity Share First and Final Call A/c", al:["equity share first and final call","share first and final call","first and final call","first final call","share first final call","call"]},
  scap:{n:"Equity Share Capital A/c", al:["equity share capital","share capital","equity shares capital"]},
  secprem:{n:"Securities Premium A/c", al:["securities premium","security premium","securities premium reserve","share premium","premium"]},
  forf:{n:"Share Forfeiture A/c", al:["share forfeiture","shares forfeited","forfeited shares","forfeiture","share forfeited","forfeited share"]},
  cres:{n:"Capital Reserve A/c", al:["capital reserve"]}, cia:{n:"Calls in Arrears A/c", al:["calls in arrears","call in arrears"]}, cadv:{n:"Calls in Advance A/c", al:["calls in advance","call in advance"]}
},
intro:{
  hook:"Vardhman Ltd needs ₹5 crore to build a factory. No single owner has that much. So the company divides its capital into lakhs of small units of ₹10 each and invites the public to buy them. Recording who applied, who was allotted, who paid and who did not is accounting for share capital.",
  points:[
    "A <b>company</b> (Section 2(20), Companies Act, 2013) is an artificial person with a separate legal entity, perpetual succession and limited liability of its members.",
    "Its capital is divided into <b>shares</b> (Section 2(84)): <b>equity shares</b> and <b>preference shares</b> (Section 43). Preference shares carry a preferential right to a fixed dividend and to repayment of capital on winding up.",
    "Shares can be issued at <b>par</b> or at a <b>premium</b>. Issue at a <b>discount is not allowed</b> (Section 53), except sweat equity shares.",
    "Money is usually collected in instalments: <b>application, allotment and calls</b>. A shareholder who fails to pay may have his shares <b>forfeited</b>; forfeited shares may be <b>reissued</b>."
  ],
  weight:"Board weightage: Share capital is the biggest topic in Part A after partnership. Journal entries with pro-rata allotment, forfeiture and reissue, and the Share Capital note in the Balance Sheet are asked every year (4 to 6 marks)."
},
objectives:[
  "Explain the features of a company and the kinds of share capital (authorised, issued, subscribed, called-up, paid-up).",
  "Pass journal entries for issue of shares at par and at a premium.",
  "Handle under-subscription, over-subscription and pro-rata allotment, including adjustment of excess application money.",
  "Record calls in arrears and calls in advance, with interest as per Table F.",
  "Pass entries for forfeiture and reissue of shares and transfer to Capital Reserve.",
  "Present share capital in the Balance Sheet and the Notes to Accounts (Schedule III)."
],
prereq:[
  {t:"Debit and credit of capital", d:"Capital received from owners is credited.", check:{q:"Money received from shareholders for shares is finally credited to…", opts:["Share Capital A/c","Bank A/c","Share Allotment A/c only","Profit and Loss A/c"], a:0, why:"Share Capital is the owners' fund, a credit balance."}},
  {t:"Premium", d:"Premium = issue price − face value.", check:{q:"A ₹10 share issued at ₹12. Premium per share:", opts:["₹2","₹12","₹10","₹22"], a:0, why:"12 − 10 = 2."}},
  {t:"Ratios", d:"Pro-rata means in proportion.", check:{q:"20,000 shares allotted to applicants of 25,000 shares. Ratio of allotment:", opts:["4 : 5","5 : 4","1 : 5","20 : 1"], a:0, why:"20,000 : 25,000 = 4 : 5."}}
],
kid:[
  {id:"k1", c:"company", title:"A business owned by thousands", art:{s:[["🏭","Company"],["🧩","Shares ₹10 each"],["👨‍👩‍👧‍👦","Many owners"]], cap:"Capital divided into small shares; each buyer is a part-owner."},
   story:"<p>Vardhman Ltd wants ₹5,00,000. It cuts this into 50,000 small pieces of ₹10 each. Each piece is a <b>share</b>. Anyone who buys shares becomes a <b>shareholder</b>: a part-owner of the company.</p><p>The company is like a separate person in law. It can own property and borrow in its own name. If it fails, shareholders lose at most what they promised to pay for their shares: <b>limited liability</b>.</p>",
   qa:[["What is a share?","One small unit of the company's capital."],["Who owns the company?","Its shareholders."],["Limited liability?","A shareholder's loss is limited to the unpaid amount on his shares."],["Does the company die if owners change?","No: perpetual succession."]],
   check:{q:"Which is a feature of a company?", opts:["Separate legal entity","Unlimited liability of members","Ends when a member dies","Maximum 50 members always"], a:0, why:"A company is a separate person in law."}},
  {id:"k2", c:"company", title:"Five boxes of capital", art:{s:[["🏦","Authorised ₹10L"],["📢","Issued ₹5L"],["✍️","Subscribed ₹5L"],["📣","Called up"],["💰","Paid up"]], cap:"From the maximum allowed down to the money actually received."},
   story:"<p><b>Authorised</b> capital is the maximum the company may raise (written in its memorandum). <b>Issued</b> is the part offered to the public. <b>Subscribed</b> is the part the public actually took. <b>Called-up</b> is what the company has asked for so far. <b>Paid-up</b> is what has actually been received.</p>",
   qa:[["Biggest box?","Authorised capital."],["Called-up vs paid-up?","Paid-up = called-up − calls in arrears."],["Can issued exceed authorised?","No."],["Reserve capital?","Uncalled capital to be called only on winding up."]],
   check:{q:"Called-up ₹8,00,000; calls in arrears ₹10,000. Paid-up capital:", opts:["₹7,90,000","₹8,10,000","₹8,00,000","₹10,000"], a:0, why:"8,00,000 − 10,000."}},
  {id:"k3", c:"issue", title:"Paying in instalments", art:{s:[["📝","Application ₹3"],["✅","Allotment ₹5"],["📞","Call ₹4"],["🟰","₹12 (₹10 + ₹2 premium)"]], cap:"Like paying for a phone in EMIs."},
   story:"<p>Shares of ₹10 are sold at ₹12 (a <b>premium</b> of ₹2, because the company is doing well). Buyers pay ₹3 with the <b>application</b>, ₹5 on <b>allotment</b> (₹3 capital + ₹2 premium) and ₹4 on the <b>first and final call</b>.</p><p>Each instalment has its own account: Share Application A/c, Share Allotment A/c, Share Call A/c. When the amount becomes due, it is credited to Share Capital (and premium to Securities Premium).</p>",
   qa:[["Where is premium credited?","Securities Premium A/c."],["When is premium usually collected?","With allotment (unless stated otherwise)."],["Discount allowed?","No (Section 53), except sweat equity."],["Use of premium?","Only for purposes in Section 52(2)."]],
   check:{q:"Allotment of ₹5 includes premium ₹2. Of each ₹5, Share Capital gets…", opts:["₹3","₹5","₹2","₹7"], a:0, why:"Premium goes to Securities Premium."}},
  {id:"k4", c:"prorata", title:"Too many buyers!", art:{s:[["🙋","Applied 30,000"],["🎟️","Available 20,000"],["❌","Reject 5,000"],["⚖️","Give 20,000 to 25,000 applicants (4:5)"]], cap:"Over-subscription: reject some, allot the rest pro-rata."},
   story:"<p>Ganga Ltd offers 20,000 shares but receives applications for 30,000. It rejects 5,000 (refunds their money) and gives 20,000 shares to the applicants for 25,000, in the ratio <b>4 : 5</b> (pro-rata).</p><p>Those pro-rata applicants paid application money on 25,000 shares but got only 20,000. Their <b>extra application money</b> is kept and adjusted towards what they owe on allotment.</p>",
   qa:[["Rejected applicants?","Their money is refunded."],["Pro-rata?","Shares given in proportion to what was applied for."],["Excess money?","Adjusted towards allotment (and calls, if allowed)."],["Under-subscription?","Shares allotted only for applications received (minimum subscription must be met)."]],
   check:{q:"Applied 1,000 shares; allotted pro-rata 4:5. Shares received:", opts:["800","1,000","500","1,250"], a:0, why:"1,000 × 4/5."}},
  {id:"k5", c:"forfeit", title:"Missed your EMI? Lose the shares", art:{s:[["😟","Ravi did not pay"],["✂️","Shares forfeited"],["💸","₹3 already paid is lost"]], cap:"Forfeiture: the company cancels the shares and keeps what was paid."},
   story:"<p>Ravi paid ₹3 application money on 1,000 shares but did not pay the allotment or the call. After notice, the company <b>forfeits</b> his shares: they are cancelled and Ravi loses the ₹3,000 he paid.</p><p>That ₹3,000 goes to <b>Share Forfeiture A/c</b>. Share Capital is debited with the amount called up on his shares (₹10 each), and the unpaid allotment and call accounts are credited. If the premium was not received, Securities Premium is also debited.</p>",
   qa:[["Who can forfeit?","Directors, as per the Articles, after due notice."],["What is debited?","Share Capital with called-up amount (and Securities Premium if premium not received)."],["What is credited?","Unpaid calls; Share Forfeiture with the amount received."],["Is the money returned?","No."]],
   check:{q:"1,000 shares of ₹10 fully called; ₹3 paid. Amount credited to Share Forfeiture:", opts:["₹3,000","₹10,000","₹7,000","₹13,000"], a:0, why:"Only what Ravi paid on capital."}},
  {id:"k6", c:"reissue", title:"Selling the cancelled shares again", art:{s:[["♻️","600 reissued"],["🏷️","₹8 each, fully paid"],["➖","Discount ₹1,200"],["🏛️","Capital Reserve ₹600"]], cap:"Discount on reissue is met from forfeited money; any profit goes to Capital Reserve."},
   story:"<p>The company reissues 600 of Ravi's shares to Meena at ₹8 each as fully paid. The ₹2 per share discount (₹1,200) is taken from Share Forfeiture A/c, where ₹3 per share (₹1,800) is lying for these 600 shares.</p><p>The remaining ₹600 on the reissued shares is a capital profit: it goes to <b>Capital Reserve</b>. The forfeited amount on the 400 shares not reissued (₹1,200) stays in Share Forfeiture A/c.</p>",
   qa:[["Maximum discount?","Not more than the amount forfeited on those shares."],["Capital Reserve?","Forfeited amount on reissued shares − discount."],["Reissue at premium?","Premium credited to Securities Premium."],["Balance on unissued forfeited shares?","Shown as 'Add: Share Forfeited' in Share Capital note."]],
   check:{q:"Forfeited ₹3 per share; reissued at ₹9 (face ₹10). Capital Reserve per share:", opts:["₹2","₹1","₹3","₹9"], a:0, why:"3 − 1 = 2."}}
],
kidActs:[
  {id:"ka1", type:"sort", title:"Where does it appear in the Balance Sheet?", c:"present",
   bins:["Share Capital (note)","Reserves and Surplus"],
   items:[{t:"Subscribed and fully paid capital", b:0, why:"Shown under Share Capital."},{t:"Share Forfeited A/c balance", b:0, why:"Added to subscribed capital."},{t:"Calls in arrears", b:0, why:"Deducted from called-up capital."},{t:"Securities Premium", b:1, why:"A reserve."},{t:"Capital Reserve", b:1, why:"A reserve from capital profits."},{t:"General Reserve", b:1, why:"A revenue reserve."}]},
  {id:"ka2", type:"minute", title:"One-minute challenge: share capital rules", c:"calls", secs:60,
   items:[
     {q:"Shares can be issued at a discount?", opts:["No (except sweat equity)","Yes, freely"], a:0},
     {q:"Interest on calls in arrears (Table F) up to…", opts:["10% p.a.","12% p.a."], a:0},
     {q:"Interest on calls in advance (Table F) up to…", opts:["12% p.a.","10% p.a."], a:0},
     {q:"Premium on shares is credited to…", opts:["Securities Premium A/c","Share Capital A/c"], a:0},
     {q:"Profit on reissue of forfeited shares goes to…", opts:["Capital Reserve","General Reserve"], a:0},
     {q:"Paid-up capital = ?", opts:["Called-up − Calls in arrears","Called-up + Calls in advance"], a:0}
   ]}
],
exam:[
  {id:"e1", c:"company", title:"Company, shares and kinds of share capital",
   html:"<p><b>Company</b>: an artificial person created by law, having a separate legal entity, perpetual succession and limited liability. Kinds: private, public, One Person Company; limited by shares, by guarantee, unlimited; government company; holding and subsidiary.</p><p><b>Share</b> (Section 2(84)): a share in the share capital of a company. <b>Preference shares</b>: preferential right to fixed dividend and to repayment of capital on winding up. <b>Equity shares</b>: all shares that are not preference shares.</p><table class='tt'><tbody><tr><td>Authorised</td><td>Maximum capital the company can raise (memorandum)</td></tr><tr><td>Issued</td><td>Part of authorised capital offered for subscription</td></tr><tr><td>Subscribed</td><td>Part of issued capital taken up (fully paid / not fully paid)</td></tr><tr><td>Called-up</td><td>Part of subscribed capital called by the company</td></tr><tr><td>Paid-up</td><td>Called-up capital actually received (called-up − calls in arrears)</td></tr><tr><td>Reserve capital</td><td>Uncalled capital to be called only on winding up</td></tr></tbody></table>"},
  {id:"e2", c:"issue", title:"Issue of shares at par and premium",
   html:"<table class='tt'><thead><tr><th>Stage</th><th>Entry</th></tr></thead><tbody><tr><td>Application money received</td><td>Bank A/c Dr / To Share Application A/c</td></tr><tr><td>Application money transferred</td><td>Share Application A/c Dr / To Share Capital A/c (and Securities Premium if included)</td></tr><tr><td>Allotment due</td><td>Share Allotment A/c Dr / To Share Capital A/c / To Securities Premium A/c</td></tr><tr><td>Allotment received</td><td>Bank A/c Dr / To Share Allotment A/c</td></tr><tr><td>Call due</td><td>Share First Call A/c Dr / To Share Capital A/c</td></tr><tr><td>Call received</td><td>Bank A/c Dr / To Share First Call A/c</td></tr></tbody></table><p><b>Securities Premium</b> may be used only for (Section 52(2)): issuing fully paid bonus shares; writing off preliminary expenses; writing off expenses, commission or discount on issue of shares or debentures; premium payable on redemption of preference shares or debentures; buy-back of shares (Section 68).</p><p>Issue at a discount is void (Section 53) except sweat equity shares (Section 54). Minimum application money: at least 5% of the nominal value (Section 39(2)).</p>"},
  {id:"e3", c:"prorata", title:"Under-subscription, over-subscription and pro-rata allotment",
   html:"<p><b>Under-subscription</b>: allot only the shares applied for, provided minimum subscription (90% of issue) is received; otherwise refund all.</p><p><b>Over-subscription</b>: (i) reject some applications and refund; (ii) allot pro-rata; (iii) a mix of both.</p><table class='tt'><tbody><tr><td>Rejected applications refunded</td><td>Share Application A/c Dr / To Bank A/c</td></tr><tr><td>Excess money of pro-rata applicants adjusted</td><td>Share Application A/c Dr / To Share Allotment A/c (and To Calls in Advance A/c for any surplus, if the Articles allow)</td></tr></tbody></table><p class='eg'>20,000 shares; applied 30,000; 5,000 rejected; 25,000 applicants get 20,000 (4:5). Application ₹4: excess = 25,000 × 4 − 20,000 × 4 = ₹20,000 → to allotment; refund = 5,000 × 4 = ₹20,000.</p>"},
  {id:"e4", c:"calls", title:"Calls in arrears and calls in advance",
   html:"<p><b>Calls in arrears</b>: called but unpaid. Either debit a Calls in Arrears A/c or leave the balance in the call account. Interest at up to <b>10% p.a.</b> (Table F) may be charged.</p><p><b>Calls in advance</b>: received before being called; credited to Calls in Advance A/c (a liability). Interest up to <b>12% p.a.</b> (Table F) is paid on it.</p><p>In the Balance Sheet, calls in arrears are deducted from called-up capital; calls in advance are shown under Other Current Liabilities.</p>"},
  {id:"e5", c:"forfeit", title:"Forfeiture of shares",
   html:"<p class='formula'>Share Capital A/c Dr (called-up amount)<br>Securities Premium A/c Dr (only if premium not received)<br>&nbsp;&nbsp;To Unpaid Allotment / Call A/cs (amount not paid)<br>&nbsp;&nbsp;To Share Forfeiture A/c (amount received on capital)</p><p class='eg'>1,000 shares of ₹10 at a premium of ₹2; ₹3 paid on application; allotment ₹5 (incl. premium) and call ₹4 unpaid. Share Capital Dr 10,000; Securities Premium Dr 2,000; To Share Allotment 5,000; To Call 4,000; To Share Forfeiture 3,000.</p><p class='tip'>If the premium had already been received, Securities Premium is NOT debited: premium once received cannot be cancelled.</p>"},
  {id:"e6", c:"reissue", title:"Reissue of forfeited shares",
   html:"<p class='formula'>Bank A/c Dr (amount received)<br>Share Forfeiture A/c Dr (discount on reissue)<br>&nbsp;&nbsp;To Share Capital A/c (paid-up value credited)<br>&nbsp;&nbsp;To Securities Premium A/c (if reissued above face value)</p><ul><li>Discount on reissue cannot exceed the amount forfeited on those shares.</li><li>Surplus on reissued shares (forfeited amount − discount) is a capital profit: <b>Share Forfeiture A/c Dr / To Capital Reserve A/c</b>.</li><li>If only some forfeited shares are reissued, transfer only the surplus relating to them.</li></ul>"},
  {id:"e7", c:"present", title:"Presentation in the Balance Sheet (Schedule III)",
   html:"<p>Balance Sheet → Equity and Liabilities → Shareholders' Funds → (a) Share Capital (Note 1), (b) Reserves and Surplus (Note 2).</p><table class='tt'><thead><tr><th>Note 1: Share Capital</th><th>₹</th></tr></thead><tbody><tr><td>Authorised: … equity shares of ₹10 each</td><td>…</td></tr><tr><td>Issued: … equity shares of ₹10 each</td><td>…</td></tr><tr><td>Subscribed capital: Subscribed and fully paid …<br>Subscribed but not fully paid … (called-up − calls in arrears)<br>Add: Share Forfeited A/c</td><td>…</td></tr></tbody></table><p>Securities Premium and Capital Reserve go to Note 2 (Reserves and Surplus).</p>"},
  {id:"e8", c:"company", title:"Private placement and ESOP (concept)",
   html:"<p><b>Private placement</b> (Section 42): offer of securities to a select group of persons (other than by public offer), up to 200 persons in a financial year (excluding QIBs and employees under ESOP).</p><p><b>Employees Stock Option Plan (ESOP)</b> (Section 62(1)(b)): an option to employees to buy the company's shares at a future date at a pre-determined price, usually lower than market price.</p>"}
],
visual:{kind:"forfeit", title:"Forfeiture and reissue playground", sub:"Change the amounts. See the forfeited amount, the discount on reissue, the Capital Reserve and the balance left.",
  fv:10, paid:3, n:1000, re:600, price:8,
  flowTitle:"Life of a share issue", flow:["Application money received","Shares allotted (pro-rata if over-subscribed)","Allotment money due and received","Calls made and received","Unpaid shares forfeited","Forfeited shares reissued","Surplus to Capital Reserve; present in Balance Sheet"]},
formulas:[
  {n:"Paid-up capital", f:"Called-up capital − Calls in arrears", code:"Called minus unpaid", c:"company"},
  {n:"Premium", f:"Issue price − Face value → Securities Premium A/c", code:"Above face = premium", c:"issue"},
  {n:"Pro-rata excess", f:"Application money of pro-rata applicants − Application money on shares allotted", code:"Paid for more, got less", c:"prorata"},
  {n:"Interest on calls in arrears", f:"Arrears × 10% × period (Table F)", code:"Late = 10", c:"calls"},
  {n:"Interest on calls in advance", f:"Advance × 12% × period (Table F)", code:"Early = 12", c:"calls"},
  {n:"Amount forfeited", f:"Amount received on capital (premium excluded)", code:"Only what he paid on capital", c:"forfeit"},
  {n:"Maximum discount on reissue", f:"Amount forfeited on the reissued shares", code:"Discount ≤ forfeited", c:"reissue"},
  {n:"Capital Reserve", f:"Forfeited amount on reissued shares − Discount on reissue", code:"Leftover on reissued = capital profit", c:"reissue"}
],
illus:[
  {id:"i1", tag:"orig", c:"calls", title:"Interest on calls in arrears",
   given:"A shareholder holding 2,000 shares failed to pay the first call of ₹3 per share due on 1 October 2025. He paid it on 1 January 2026. The Articles adopt Table F.",
   required:"Interest on calls in arrears.",
   formula:"Interest = Arrears × 10% × months/12.",
   steps:["Calls in arrears = 2,000 × 3 = <b>₹6,000</b>","Period of delay = 3 months","Interest = 6,000 × 10/100 × 3/12 = <b>₹150</b>"],
   answer:"Interest on calls in arrears = ₹150.", why:"Table F allows up to 10% p.a. on calls unpaid after the due date."},
  {id:"i2", tag:"board", c:"prorata", title:"Over-subscription with pro-rata allotment",
   given:"Ganga Ltd invited applications for 20,000 equity shares of ₹10 each at par: ₹4 on application, ₹6 on allotment. Applications were received for 30,000 shares. Applications for 5,000 shares were rejected; the rest were allotted pro-rata. All money due on allotment was received.",
   required:"Journal entries up to receipt of allotment money.",
   formula:"Ratio 20,000 : 25,000 = 4 : 5. Excess on pro-rata applicants adjusted to allotment.",
   steps:["Application money received = 30,000 × 4 = <b>₹1,20,000</b>","Transferred to capital = 20,000 × 4 = ₹80,000; refund 5,000 × 4 = ₹20,000; excess to allotment 25,000 × 4 − 80,000 = <b>₹20,000</b>","Allotment due = 20,000 × 6 = ₹1,20,000; received = 1,20,000 − 20,000 = <b>₹1,00,000</b>"],
   format:{type:"journal", entries:[
     {date:"2026 Apr 1", lines:[{a:"cash", dr:120000},{a:"app", cr:120000}], narr:"(Being application money received for 30,000 shares)"},
     {date:"2026 Apr 10", lines:[{a:"app", dr:120000},{a:"scap", cr:80000},{a:"allot", cr:20000},{a:"cash", cr:20000}], narr:"(Being application money transferred, excess adjusted and rejected money refunded)"},
     {date:"2026 Apr 10", lines:[{a:"allot", dr:120000},{a:"scap", cr:120000}], narr:"(Being allotment money due)"},
     {date:"2026 Apr 30", lines:[{a:"cash", dr:100000},{a:"allot", cr:100000}], narr:"(Being allotment money received after adjusting excess application money)"}]},
   answer:"Refund ₹20,000; excess adjusted ₹20,000; allotment received ₹1,00,000.", why:"Pro-rata applicants are credited with their extra money instead of being refunded."},
  {id:"i3", tag:"board", c:"forfeit", title:"Forfeiture when premium was already received",
   given:"500 equity shares of ₹10 each, issued at a premium of ₹2 payable with allotment, were forfeited for non-payment of the first and final call of ₹3. Allotment (including premium) had been paid.",
   required:"Journal entry for forfeiture.",
   formula:"Share Capital Dr with called-up ₹10; To Call (unpaid ₹3); To Share Forfeiture (₹7 paid on capital). Premium received is not touched.",
   steps:["Called up = 500 × 10 = <b>₹5,000</b>","Unpaid call = 500 × 3 = <b>₹1,500</b>","Paid on capital = 500 × 7 = <b>₹3,500</b> → Share Forfeiture"],
   format:{type:"journal", entries:[{date:"2026 Jun 1", lines:[{a:"scap", dr:5000},{a:"call", cr:1500},{a:"forf", cr:3500}], narr:"(Being 500 shares forfeited for non-payment of first and final call)"}]},
   answer:"Share Capital Dr ₹5,000 / To Call ₹1,500 / To Share Forfeiture ₹3,500.", why:"Premium already received stays in Securities Premium; it cannot be cancelled."}
],
solver:[
  {id:"s1", tag:"board", c:"reissue", title:"Forfeiture, reissue and Capital Reserve", mins:7,
   q:"1,000 equity shares of ₹10 each on which only ₹3 per share (application) had been paid were forfeited. Of these, 600 shares were reissued at ₹8 per share as fully paid.",
   steps:[
     {label:"Amount forfeited", prompt:"Total credited to Share Forfeiture A/c (₹)", kind:"num", ans:3000, hint:"1,000 × 3.", formula:"Shares × amount paid", traps:[{v:10000, why:"₹10,000 is the called-up amount debited to Share Capital. Forfeiture gets only what was paid."}], why:"3,000.", avoid:""},
     {label:"Forfeited on reissued shares", prompt:"Forfeited amount relating to 600 shares (₹)", kind:"num", ans:1800, hint:"600 × 3.", formula:"Reissued shares × amount paid", why:"1,800.", avoid:""},
     {label:"Discount on reissue", prompt:"Discount on reissue (₹)", kind:"num", ans:1200, hint:"600 × (10 − 8).", formula:"Shares × (face value − reissue price)", why:"1,200 (within the limit of 1,800).", avoid:""},
     {label:"Capital Reserve", prompt:"Transfer to Capital Reserve (₹)", kind:"num", ans:600, hint:"1,800 − 1,200.", formula:"Forfeited on reissued − discount", traps:[{v:1800, why:"Deduct the discount used on reissue."}], why:"600.", avoid:"Never transfer the forfeited amount of shares not yet reissued."},
     {label:"Balance left", prompt:"Balance remaining in Share Forfeiture A/c (₹)", kind:"num", ans:1200, hint:"400 × 3.", formula:"Unissued forfeited shares × amount paid", why:"1,200.", avoid:""}
   ]},
  {id:"s2", tag:"orig", c:"prorata", title:"One applicant under pro-rata allotment", mins:6,
   q:"Shares of ₹10: ₹4 on application, ₹6 on allotment. Allotment was made pro-rata in the ratio 4:5. Ravi applied for 1,000 shares. How much does he pay on allotment?",
   steps:[
     {label:"Shares allotted", prompt:"Shares allotted to Ravi", kind:"num", ans:800, hint:"1,000 × 4/5.", formula:"Applied × ratio", why:"800.", avoid:""},
     {label:"Application paid", prompt:"Application money Ravi paid (₹)", kind:"num", ans:4000, hint:"1,000 × 4.", formula:"Applied × ₹4", why:"4,000.", avoid:""},
     {label:"Excess", prompt:"Excess application money (₹)", kind:"num", ans:800, hint:"4,000 − 800 × 4.", formula:"Paid − needed on allotted shares", why:"4,000 − 3,200 = 800.", avoid:""},
     {label:"Allotment due", prompt:"Allotment due on his shares (₹)", kind:"num", ans:4800, hint:"800 × 6.", formula:"Allotted × ₹6", why:"4,800.", avoid:""},
     {label:"Amount paid on allotment", prompt:"Cash Ravi pays on allotment (₹)", kind:"num", ans:4000, hint:"4,800 − 800.", formula:"Due − excess adjusted", traps:[{v:4800, why:"Adjust his excess application money of ₹800."},{v:6000, why:"Allotment is on 800 shares, not 1,000."}], why:"4,000.", avoid:""}
   ]},
  {id:"s3", tag:"orig", c:"calls", title:"Interest on calls in advance", mins:4,
   q:"A shareholder holding 1,000 shares paid the second call of ₹4 per share along with allotment, 2 months before it was called. Table F applies.",
   steps:[
     {label:"Calls in advance", prompt:"Amount of calls in advance (₹)", kind:"num", ans:4000, hint:"1,000 × 4.", formula:"Shares × call", why:"4,000.", avoid:""},
     {label:"Rate", prompt:"Rate of interest under Table F (%)", kind:"num", ans:12, hint:"Early payment earns more.", formula:"Table F", traps:[{v:10, why:"10% is for calls in ARREARS. Calls in advance get 12%."}], why:"12% p.a.", avoid:"Late = 10, Early = 12."},
     {label:"Interest", prompt:"Interest payable (₹)", kind:"num", ans:80, hint:"4,000 × 12% × 2/12.", formula:"Advance × rate × months/12", why:"80.", avoid:""}
   ]},
  {id:"s4", tag:"board", c:"present", title:"Subscribed but not fully paid", mins:5,
   q:"10,000 equity shares of ₹10 each were subscribed; ₹8 per share has been called up. Calls in arrears are ₹2,000. Show the amounts for the Share Capital note.",
   steps:[
     {label:"Called-up", prompt:"Called-up capital (₹)", kind:"num", ans:80000, hint:"10,000 × 8.", formula:"Shares × amount called", traps:[{v:100000, why:"Only ₹8 has been called, not ₹10."}], why:"80,000.", avoid:""},
     {label:"Paid-up", prompt:"Paid-up capital shown (₹)", kind:"num", ans:78000, hint:"80,000 − 2,000.", formula:"Called-up − calls in arrears", why:"78,000.", avoid:""}
   ]}
],
lab:[
  {id:"L0", tag:"orig", level:"Easy", c:"issue", title:"Application money",
   q:"Vardhman Ltd issued 50,000 equity shares of ₹10 each at a premium of ₹2 per share, payable ₹3 on application, ₹5 on allotment (including premium) and ₹4 on first and final call. Applications were received for exactly 50,000 shares and all were allotted. Pass entries for (i) application money received and (ii) its transfer on allotment.",
   format:{type:"journal", entries:[
     {label:"Application money received", date:"2026 Apr 1", lines:[{a:"cash", dr:150000, why:"50,000 × 3."},{a:"app", cr:150000}], narr:"(Being application money received on 50,000 shares)"},
     {label:"Application money transferred", date:"2026 Apr 15", lines:[{a:"app", dr:150000},{a:"scap", cr:150000, why:"Application money of ₹3 is all towards capital; the premium is due with allotment."}], narr:"(Being application money transferred to share capital on allotment)"}
   ]}},
  {id:"L1", tag:"board", level:"Medium", c:"issue", title:"Allotment and call", ref:"L0",
   q:"Continuing L0: allotment and the first and final call were made. All money was received except on 1,000 shares held by Ravi, who paid neither the allotment nor the call. (Do not use a Calls in Arrears A/c.) Pass the entries for allotment due, allotment received, call due and call received.",
   format:{type:"journal", entries:[
     {label:"Allotment due", date:"2026 Apr 15", lines:[{a:"allot", dr:250000, why:"50,000 × 5."},{a:"scap", cr:150000, why:"50,000 × 3 capital."},{a:"secprem", cr:100000, why:"50,000 × 2 premium."}], narr:"(Being allotment money due including premium)"},
     {label:"Allotment received", date:"2026 Apr 30", lines:[{a:"cash", dr:245000, why:"49,000 × 5: Ravi's 1,000 shares unpaid."},{a:"allot", cr:245000}], narr:"(Being allotment money received except on 1,000 shares)"},
     {label:"Call due", date:"2026 Jul 1", lines:[{a:"call", dr:200000, why:"50,000 × 4."},{a:"scap", cr:200000}], narr:"(Being first and final call money due)"},
     {label:"Call received", date:"2026 Jul 20", lines:[{a:"cash", dr:196000, why:"49,000 × 4."},{a:"call", cr:196000}], narr:"(Being call money received except on 1,000 shares)"}
   ]}},
  {id:"L2", tag:"board", level:"Hard", c:"forfeit", title:"Forfeiture, reissue and Capital Reserve", ref:"L0",
   q:"Continuing L1: Ravi's 1,000 shares were forfeited. Later 600 of these shares were reissued at ₹8 per share as fully paid. Pass the entries for forfeiture, reissue and transfer to Capital Reserve.",
   format:{type:"journal", entries:[
     {label:"Forfeiture", date:"2026 Aug 1", lines:[{a:"scap", dr:10000, why:"Called up 1,000 × 10."},{a:"secprem", dr:2000, why:"Premium of ₹2 was due with allotment and NOT received, so it is cancelled."},{a:"allot", cr:5000, why:"Unpaid allotment 1,000 × 5."},{a:"call", cr:4000, why:"Unpaid call 1,000 × 4."},{a:"forf", cr:3000, why:"Received on capital: 1,000 × 3."}], narr:"(Being 1,000 shares forfeited for non-payment of allotment and call)"},
     {label:"Reissue", date:"2026 Sep 1", lines:[{a:"cash", dr:4800, why:"600 × 8."},{a:"forf", dr:1200, why:"Discount 600 × 2."},{a:"scap", cr:6000}], narr:"(Being 600 forfeited shares reissued at ₹8 as fully paid)"},
     {label:"Capital Reserve", date:"2026 Sep 1", lines:[{a:"forf", dr:600, why:"Forfeited on 600 shares 1,800 − discount 1,200."},{a:"cres", cr:600}], narr:"(Being gain on reissue transferred to capital reserve)"}
   ]}},
  {id:"L3", tag:"board", level:"Medium", c:"reissue", title:"Share Forfeiture Account", ref:"L0",
   q:"Using worksheet L2, prepare the Share Forfeiture Account.",
   format:{type:"tacc", name:"Share Forfeiture Account", heads:["Particulars","₹","Particulars","₹"], date:"2026 Sep 1",
    left:[{a:"scap", amt:1200, p:"To Equity Share Capital A/c (discount on reissue)"},{a:"cres", amt:600, p:"To Capital Reserve A/c"},{a:"bal", amt:1200, p:"To Balance c/d", why:"400 shares not reissued × 3."}],
    right:[{a:"scap", amt:3000, p:"By Equity Share Capital A/c (forfeiture)"}], total:3000}},
  {id:"L4", tag:"board", level:"Hard", c:"present", title:"Share Capital note to accounts", ref:"L0",
   q:"Using worksheets L0 to L2: authorised capital is 1,00,000 equity shares of ₹10 each. Complete Note 1: Share Capital as at 30 September 2026.",
   format:{type:"grid", single:true, name:"Note 1: Share Capital", head:["Particulars","₹"],
    rows:[["Authorised capital: 1,00,000 equity shares of ₹10 each",1000000],["Issued capital: 50,000 equity shares of ₹10 each",{a:500000}],["Subscribed and fully paid: 49,600 equity shares of ₹10 each",{a:496000, why:"49,000 paid shares + 600 reissued = 49,600."}],["Add: Share Forfeited A/c",{a:1200, why:"Forfeited amount on 400 shares not reissued."}],["Total subscribed capital",{a:497200}]]}},
  {id:"L5", tag:"board", level:"Medium", c:"prorata", title:"Over-subscription and pro-rata allotment",
   q:"Ganga Ltd invited applications for 20,000 equity shares of ₹10 each at par: ₹4 on application, ₹6 on allotment. Applications were received for 30,000 shares. Applications for 5,000 shares were rejected and money refunded; the rest were allotted pro-rata. Excess application money was adjusted towards allotment. All allotment money was received. Pass the journal entries.",
   format:{type:"journal", entries:[
     {label:"Application money received", date:"2026 Apr 1", lines:[{a:"cash", dr:120000},{a:"app", cr:120000}], narr:"(Being application money received for 30,000 shares)"},
     {label:"Transfer, adjustment and refund", date:"2026 Apr 10", lines:[{a:"app", dr:120000},{a:"scap", cr:80000, why:"20,000 × 4."},{a:"allot", cr:20000, why:"Excess of pro-rata applicants: 25,000 × 4 − 80,000."},{a:"cash", cr:20000, why:"Refund on 5,000 rejected × 4."}], narr:"(Being application money transferred, excess adjusted and balance refunded)"},
     {label:"Allotment due", date:"2026 Apr 10", lines:[{a:"allot", dr:120000},{a:"scap", cr:120000}], narr:"(Being allotment money due)"},
     {label:"Allotment received", date:"2026 Apr 30", lines:[{a:"cash", dr:100000, why:"1,20,000 − 20,000 already adjusted."},{a:"allot", cr:100000}], narr:"(Being balance of allotment money received)"}
   ]}}
],
blanks:[
  {id:"B1", t:"Journal", type:"journal", rows:10},
  {id:"B2", t:"Ledger account (T-format)", type:"tacc", rows:6, heads:["Particulars","₹","Particulars","₹"]},
  {id:"B3", t:"Note to Accounts (two columns)", type:"grid", rows:6, single:true, head:["Particulars","₹ (current year)","₹ (previous year)"]}
],
mistakes:[
  {id:"m1", c:"forfeit", q:"1,000 shares (₹10, premium ₹2 with allotment) forfeited; only application ₹3 paid; allotment and call unpaid. Entry passed:", shown:[["Equity Share Capital A/c","Dr",10000,""],["To Share Allotment A/c","",null,5000],["To Share First and Final Call A/c","",null,4000],["To Share Forfeiture A/c","",null,1000]],
   opts:["Securities Premium Dr ₹2,000 is missing and forfeiture should be ₹3,000","Share Capital should be ₹12,000","Forfeiture should be ₹10,000","Nothing is wrong"], a:0, why:"Unreceived premium is cancelled by debiting Securities Premium; the amount paid on capital (₹3,000) goes to forfeiture."},
  {id:"m2", c:"reissue", q:"Forfeited ₹3 per share; 600 shares reissued at ₹6 (face ₹10). Entry:", shown:[["Bank A/c","Dr",3600,""],["Share Forfeiture A/c","Dr",2400,""],["To Equity Share Capital A/c","",null,6000]],
   opts:["Discount ₹4 per share exceeds the ₹3 forfeited: not allowed","Bank should be ₹6,000","Capital Reserve should be credited","Nothing is wrong"], a:0, why:"Maximum discount on reissue = amount forfeited on those shares (₹1,800)."},
  {id:"m3", c:"issue", q:"Allotment of ₹5 per share (including ₹2 premium) on 10,000 shares made due:", shown:[["Share Allotment A/c","Dr",50000,""],["To Equity Share Capital A/c","",null,50000]],
   opts:["Premium ₹20,000 must be credited to Securities Premium; Share Capital only ₹30,000","Allotment should be credited","Amount should be ₹20,000","Nothing is wrong"], a:0, why:"Premium never goes to Share Capital."},
  {id:"m4", c:"reissue", q:"All 1,000 forfeited shares (₹3 forfeited each) reissued at ₹9. Transfer entry:", shown:[["Share Forfeiture A/c","Dr",3000,""],["To Capital Reserve A/c","",null,3000]],
   opts:["Discount ₹1,000 was used; only ₹2,000 goes to Capital Reserve","Should go to General Reserve","No transfer is needed","Nothing is wrong"], a:0, why:"Capital Reserve = 3,000 − 1,000."},
  {id:"m5", c:"calls", q:"Calls in advance ₹5,000 received:", shown:[["Bank A/c","Dr",5000,""],["To Equity Share Capital A/c","",null,5000]],
   opts:["Calls in advance are credited to Calls in Advance A/c, not Share Capital, until the call is made","Should be credited to Securities Premium","Should be debited to Share Capital","Nothing is wrong"], a:0, why:"The money is not yet called, so it is a liability."}
],
cases:[
  {id:"c1", tag:"board", title:"Sunbeam Solar Ltd's IPO",
   story:"Sunbeam Solar Ltd offered 1,00,000 equity shares of ₹10 each at a premium of ₹5, payable ₹4 on application, ₹6 on allotment (including the whole premium) and ₹5 on first and final call. Applications were received for 1,50,000 shares. Applications for 30,000 shares were rejected; the rest were allotted pro-rata. Excess application money was adjusted towards allotment. Asha, holding 2,000 shares, did not pay the call; her shares were forfeited and later reissued to Tarun at ₹9 per share fully paid.",
   qs:[
     {type:"ratio", c:"prorata", q:"Ratio of allotment (shares allotted : shares applied by pro-rata applicants)", ans:[5,6], why:"1,00,000 : 1,20,000 = 5 : 6."},
     {type:"num", c:"prorata", q:"Excess application money adjusted towards allotment (₹)", ans:80000, why:"1,20,000 × 4 − 1,00,000 × 4 = 80,000."},
     {type:"num", c:"forfeit", q:"Amount credited to Share Forfeiture A/c on Asha's shares (₹)", ans:10000, why:"Paid on capital: application 4 + allotment capital 1 = ₹5 per share × 2,000 (premium ₹5 was received and is not forfeited)."},
     {type:"num", c:"reissue", q:"Amount transferred to Capital Reserve after reissue (₹)", ans:8000, why:"Forfeited 10,000 − discount 2,000 × 1 = 8,000."},
     {type:"mcq", c:"forfeit", q:"Is Securities Premium debited at forfeiture of Asha's shares?", opts:["No: the premium was received with allotment","Yes, always","Yes, half of it","Only if reissued at a discount"], a:0, why:"Premium once received is not cancelled."}
   ]}
],
games:{
  names:{bs:"Balance Sheet Placer", profit:"Forfeiture Tracker"},
  obj:{dc:"Choose the correct entry for each share capital transaction.", bs:"Place each item in the right part of the Balance Sheet.", profit:"Track the balance in Share Forfeiture A/c."},
  cc:{bs:"present", profit:"reissue", missing:"forfeit", escape:"reissue", casegame:"prorata", detective:"forfeit", race:"issue"},
  dc:[
    {t:"Application money received.", ok:"Dr Bank A/c · Cr Share Application A/c", bad:["Dr Share Application A/c · Cr Bank A/c","Dr Bank A/c · Cr Share Capital A/c","Dr Bank A/c · Cr Share Allotment A/c"], c:"issue"},
    {t:"Allotment money due (with premium).", ok:"Dr Share Allotment A/c · Cr Share Capital A/c, Securities Premium A/c", bad:["Dr Share Allotment A/c · Cr Share Capital A/c only","Dr Bank A/c · Cr Share Allotment A/c","Dr Share Capital A/c · Cr Share Allotment A/c"], c:"issue"},
    {t:"Refund of money on rejected applications.", ok:"Dr Share Application A/c · Cr Bank A/c", bad:["Dr Bank A/c · Cr Share Application A/c","Dr Share Capital A/c · Cr Bank A/c","Dr Share Allotment A/c · Cr Bank A/c"], c:"prorata"},
    {t:"Excess application money adjusted towards allotment.", ok:"Dr Share Application A/c · Cr Share Allotment A/c", bad:["Dr Share Allotment A/c · Cr Share Application A/c","Dr Share Application A/c · Cr Bank A/c","Dr Share Application A/c · Cr Share Capital A/c"], c:"prorata"},
    {t:"Calls in advance received.", ok:"Dr Bank A/c · Cr Calls in Advance A/c", bad:["Dr Bank A/c · Cr Share Capital A/c","Dr Calls in Advance A/c · Cr Bank A/c","Dr Bank A/c · Cr Securities Premium A/c"], c:"calls"},
    {t:"Interest on calls in advance paid.", ok:"Dr Interest on Calls in Advance A/c · Cr Bank A/c", bad:["Dr Bank A/c · Cr Interest on Calls in Advance A/c","Dr Calls in Advance A/c · Cr Bank A/c","Dr Share Capital A/c · Cr Bank A/c"], c:"calls"},
    {t:"Shares forfeited (premium already received).", ok:"Dr Share Capital A/c · Cr Unpaid Calls A/c, Share Forfeiture A/c", bad:["Dr Share Capital A/c, Securities Premium A/c · Cr Unpaid Calls, Share Forfeiture","Dr Share Forfeiture A/c · Cr Share Capital A/c","Dr Bank A/c · Cr Share Forfeiture A/c"], c:"forfeit"},
    {t:"Forfeited shares reissued at a discount.", ok:"Dr Bank A/c, Share Forfeiture A/c · Cr Share Capital A/c", bad:["Dr Bank A/c · Cr Share Forfeiture A/c","Dr Share Capital A/c · Cr Bank A/c, Share Forfeiture A/c","Dr Bank A/c, Capital Reserve A/c · Cr Share Capital A/c"], c:"reissue"},
    {t:"Gain on reissue transferred.", ok:"Dr Share Forfeiture A/c · Cr Capital Reserve A/c", bad:["Dr Capital Reserve A/c · Cr Share Forfeiture A/c","Dr Share Forfeiture A/c · Cr General Reserve A/c","Dr Share Forfeiture A/c · Cr Securities Premium A/c"], c:"reissue"},
    {t:"Forfeited shares reissued above face value.", ok:"Dr Bank A/c · Cr Share Capital A/c, Securities Premium A/c", bad:["Dr Bank A/c · Cr Share Capital A/c, Capital Reserve A/c","Dr Bank A/c · Cr Share Forfeiture A/c","Dr Securities Premium A/c · Cr Bank A/c"], c:"reissue"}
  ],
  bs:{c:"present", title:"Where does each item go in a company's Balance Sheet?",
    bins:["Note 1: Share Capital","Note 2: Reserves and Surplus","Other Current Liabilities"],
    items:[{t:"Subscribed and fully paid capital", b:0},{t:"Subscribed but not fully paid (net)", b:0},{t:"Add: Share Forfeited A/c", b:0},{t:"Less: Calls in arrears", b:0},{t:"Securities Premium", b:1},{t:"Capital Reserve", b:1},{t:"General Reserve", b:1},{t:"Calls in advance", b:2, why:"Money not yet called: a liability."},{t:"Unpaid interest on calls in advance", b:2, why:"Owed to shareholders."}]},
  race:[
    {t:"20,000 shares; application ₹3. Amount received?", ok:"Bank A/c Dr → Share Application A/c", bad:["Share Application A/c Dr → Bank A/c","Bank A/c Dr → Share Capital A/c"], amt:60000, c:"issue"},
    {t:"10,000 shares; allotment ₹5 including premium ₹2. Securities Premium credited?", ok:"Share Allotment A/c Dr → Share Capital A/c & Securities Premium A/c", bad:["Share Allotment A/c Dr → Share Capital A/c","Securities Premium A/c Dr → Share Allotment A/c"], amt:20000, c:"issue"},
    {t:"Rejected applications for 4,000 shares at ₹2 application. Refund?", ok:"Share Application A/c Dr → Bank A/c", bad:["Bank A/c Dr → Share Application A/c","Share Capital A/c Dr → Bank A/c"], amt:8000, c:"prorata"},
    {t:"500 shares (₹10, fully called) forfeited; ₹6 paid. Forfeiture credited?", ok:"Share Capital A/c Dr → Calls A/c & Share Forfeiture A/c", bad:["Share Forfeiture A/c Dr → Share Capital A/c","Bank A/c Dr → Share Forfeiture A/c"], amt:3000, c:"forfeit"},
    {t:"Those 500 reissued at ₹7 fully paid. Discount debited to Forfeiture?", ok:"Bank A/c & Share Forfeiture A/c Dr → Share Capital A/c", bad:["Bank A/c Dr → Share Forfeiture A/c","Share Capital A/c Dr → Bank A/c"], amt:1500, c:"reissue"},
    {t:"Then the surplus transferred.", ok:"Share Forfeiture A/c Dr → Capital Reserve A/c", bad:["Capital Reserve A/c Dr → Share Forfeiture A/c","Share Forfeiture A/c Dr → General Reserve A/c"], amt:1500, c:"reissue"}
  ],
  missing:[
    {q:"Called-up ₹4,50,000; paid-up ₹4,42,000. Calls in arrears = ?", kind:"num", ans:8000, why:"4,50,000 − 4,42,000.", c:"calls"},
    {q:"Applications 40,000; shares 30,000; pro-rata to all. Ratio of allotment a:b (lowest) — code a + b = ?", kind:"num", ans:7, why:"30,000 : 40,000 = 3 : 4 → 7.", c:"prorata"},
    {q:"200 shares forfeited, ₹4 paid each; reissued at ₹8 (face ₹10). Capital Reserve = ?", kind:"num", ans:400, why:"800 − 400.", c:"reissue"},
    {q:"Calls in arrears ₹9,000 for 4 months; Table F. Interest = ?", kind:"num", ans:300, why:"9,000 × 10% × 4/12.", c:"calls"},
    {q:"300 shares forfeited, ₹5 forfeited each. Maximum discount allowed on reissuing all = ?", kind:"num", ans:1500, why:"300 × 5.", c:"reissue"},
    {q:"5,000 shares at ₹10 + ₹3 premium, all paid. Securities Premium = ?", kind:"num", ans:15000, why:"5,000 × 3.", c:"issue"}
  ],
  profit:{ask:"balance in Share Forfeiture A/c?", plus:"credit", minus:"debit", c:"reissue", start:"Start from 0. Type the Share Forfeiture balance after each event.", base:"Ravi's 1,000 shares (₹3 paid each).",
    steps:[{t:"1,000 shares forfeited (₹3 paid on each)", v:3000},{t:"600 shares reissued at ₹8 (discount ₹2 each)", v:-1200},{t:"Surplus on those 600 transferred to Capital Reserve", v:-600},{t:"Remaining 400 reissued at ₹9 (discount ₹1 each)", v:-400}],
    final:{q:"Capital Reserve transfer on the 400 shares = ?", ans:800, why:"Forfeited 1,200 − discount 400.", hint:"Balance left now."}},
  escape:{story:"The company secretary's locker holds the share register. Four codes open it.",
    locks:[
      {room:"Lock 1: Application", q:"Issue 40,000 shares; application ₹2.50. Code = application money received if fully subscribed.", ans:100000, hint:"40,000 × 2.50.", c:"issue"},
      {room:"Lock 2: Pro-rata", q:"Allotment ratio 3:4; Neha applied for 2,000 shares. Code = shares allotted to her.", ans:1500, hint:"2,000 × 3/4.", c:"prorata"},
      {room:"Lock 3: Forfeit", q:"800 shares of ₹10 (fully called) forfeited; ₹7 received on each. Code = forfeiture amount.", ans:5600, hint:"800 × 7.", c:"forfeit"},
      {room:"Lock 4: Reissue", q:"Those 800 reissued at ₹6 fully paid. Code = Capital Reserve.", ans:2400, hint:"5,600 − 800 × 4.", c:"reissue"}
    ]}
},
revision:{
  summary:["Company: separate legal entity, limited liability, perpetual succession.","Capital: authorised → issued → subscribed → called-up → paid-up.","Issue at par or premium; discount not allowed (Sec 53) except sweat equity.","Premium → Securities Premium (uses: Sec 52(2)).","Over-subscription: reject + refund; pro-rata + adjust excess to allotment.","Calls in arrears: interest 10%; calls in advance: interest 12% (Table F).","Forfeiture: Share Capital Dr (called-up); Securities Premium Dr if not received; To unpaid calls; To Share Forfeiture (received on capital).","Reissue: discount ≤ forfeited; surplus on reissued shares → Capital Reserve.","Balance Sheet: Note 1 Share Capital (add forfeited, less arrears); Securities Premium and Capital Reserve in Reserves and Surplus."],
  defs:[["Share","A share in the share capital of a company (Section 2(84))."],["Forfeiture","Cancellation of shares for non-payment of calls, with the amount paid being retained by the company."],["Calls in arrears","Amount called but not paid by a shareholder by the due date."],["Calls in advance","Amount received from a shareholder before it is called."],["Capital Reserve","Reserve created out of capital profits, such as surplus on reissue of forfeited shares."]],
  flash:[{f:"Paid-up capital",b:"Called-up − Calls in arrears"},{f:"Interest on arrears / advance",b:"10% / 12% p.a. (Table F)"},{f:"Forfeiture credited with",b:"Amount received on capital"},{f:"Premium not received at forfeiture",b:"Debit Securities Premium"},{f:"Maximum discount on reissue",b:"Amount forfeited on those shares"},{f:"Capital Reserve on reissue",b:"Forfeited on reissued − discount"},{f:"Issue at discount",b:"Not allowed (Sec 53), except sweat equity"}],
  treat:[["Application received","Bank Dr → Share Application"],["Rejected refund","Share Application Dr → Bank"],["Excess adjusted","Share Application Dr → Share Allotment"],["Allotment due with premium","Share Allotment Dr → Share Capital, Securities Premium"],["Calls in advance","Bank Dr → Calls in Advance"],["Forfeiture","Share Capital Dr (+SP if unpaid) → Calls, Share Forfeiture"],["Reissue","Bank, Share Forfeiture Dr → Share Capital"],["Capital profit","Share Forfeiture Dr → Capital Reserve"]],
  mistakes:["Crediting premium to Share Capital.","Crediting Share Forfeiture with the called-up amount instead of the amount received.","Forgetting to debit Securities Premium when the premium was not received.","Allowing a reissue discount larger than the forfeited amount.","Transferring the forfeited amount of shares not yet reissued to Capital Reserve.","Showing calls in advance as share capital."],
  fib:[{q:"Shares cannot be issued at a ______ except sweat equity shares.", a:["discount"]},{q:"Interest on calls in arrears under Table F is up to ______% p.a.", a:["10","ten"]},{q:"Surplus on reissue of forfeited shares is transferred to ______ Reserve.", a:["capital"]},{q:"Premium on issue of shares is credited to ______ A/c.", a:["securities premium","security premium"]}],
  mcq:[
    {q:"Paid-up capital is…", opts:["Called-up capital less calls in arrears","Authorised less issued","Issued less subscribed","Called-up plus calls in advance"], a:0, why:"Definition.", c:"company"},
    {q:"Securities Premium cannot be used for…", opts:["Paying dividend","Issuing fully paid bonus shares","Writing off preliminary expenses","Premium on redemption of debentures"], a:0, why:"Section 52(2) does not allow dividends.", c:"issue"},
    {q:"Excess application money of pro-rata applicants is…", opts:["Adjusted towards allotment","Credited to Share Capital","Transferred to Capital Reserve","Forfeited"], a:0, why:"Standard treatment.", c:"prorata"},
    {q:"500 shares of ₹10 forfeited after ₹6 paid; reissued at ₹8. Capital Reserve:", opts:["₹2,000","₹3,000","₹1,000","₹4,000"], a:0, why:"3,000 − 1,000.", c:"reissue"},
    {q:"Calls in advance appear in the Balance Sheet under…", opts:["Other Current Liabilities","Share Capital","Reserves and Surplus","Current Assets"], a:0, why:"A liability.", c:"calls"},
    {q:"At forfeiture, Share Capital is debited with…", opts:["Called-up amount","Paid-up amount","Face value always","Amount unpaid"], a:0, why:"Cancel what was credited to capital.", c:"forfeit"}
  ],
  ar:[
    {a:"Securities Premium is debited at forfeiture if the premium has not been received.", r:"The premium credited when allotment fell due was never actually received, so the credit must be reversed.", ans:0, why:"Both true; R explains A.", c:"forfeit"},
    {a:"The discount on reissue of forfeited shares cannot exceed the forfeited amount.", r:"Otherwise the shares would in effect be issued at a discount.", ans:0, why:"Both true; R explains A.", c:"reissue"},
    {a:"Calls in advance form part of share capital.", r:"Calls in advance are amounts not yet called up.", ans:3, why:"A false; R true.", c:"calls"}
  ],
  numericals:["L1","L2","L3","L4","L5","s1"]
},
test:{mins:30, items:[
  {type:"mcq", m:1, c:"company", q:"The maximum capital a company may raise is its…", opts:["Authorised capital","Issued capital","Subscribed capital","Paid-up capital"], a:0, why:"Stated in the memorandum."},
  {type:"mcq", m:1, c:"issue", q:"Minimum application money as per Section 39(2):", opts:["5% of nominal value","25% of nominal value","10% of issue price","50% of face value"], a:0, why:"At least 5%."},
  {type:"mcq", m:1, c:"forfeit", q:"Share Forfeiture A/c balance (on shares not reissued) appears…", opts:["Added to subscribed capital in Note 1","Under Reserves and Surplus","Under Current Liabilities","Deducted from capital"], a:0, why:"Schedule III."},
  {type:"mcq", m:1, c:"calls", q:"Interest on calls in advance under Table F:", opts:["12% p.a.","10% p.a.","6% p.a.","9% p.a."], a:0, why:"Table F."},
  {type:"mcq", m:1, c:"reissue", q:"Forfeited ₹4 per share; reissue price ₹7 (face ₹10). Is this allowed?", opts:["Yes: discount ₹3 ≤ ₹4","No","Only with court approval","Only for preference shares"], a:0, why:"Discount within limit."},
  {type:"mcq", m:1, c:"issue", q:"Shares issued at a discount are…", opts:["Void (except sweat equity)","Allowed up to 10%","Allowed with SEBI approval","Allowed for private companies"], a:0, why:"Section 53."},
  {type:"ar", m:1, c:"reissue", a:"Surplus on reissue of forfeited shares is a capital profit.", r:"It does not arise from the normal trading of the company.", ans:0, why:"Both true; R explains A."},
  {type:"ar", m:1, c:"prorata", a:"Money on rejected applications is adjusted towards allotment.", r:"Rejected applicants are not allotted any shares.", ans:3, why:"A false (refunded); R true."},
  {type:"nums", m:3, c:"prorata", q:"Shares offered 40,000 (application ₹3, allotment ₹5). Applied 60,000; 10,000 rejected; rest pro-rata.", parts:[{p:"Refund (₹)", ans:30000, why:"10,000 × 3."},{p:"Excess adjusted to allotment (₹)", ans:30000, why:"50,000 × 3 − 40,000 × 3."}]},
  {type:"nums", m:3, c:"reissue", q:"400 shares of ₹10 (₹8 called up) forfeited after ₹5 was paid; 300 of them reissued at ₹6 as ₹8 paid up.", parts:[{p:"Amount forfeited on all 400 (₹)", ans:2000, why:"400 × 5."},{p:"Capital Reserve on the 300 reissued (₹)", ans:900, why:"Forfeited 300 × 5 = 1,500 − discount 300 × 2 = 600 → 900."}]},
  {type:"nums", m:4, c:"present", q:"Authorised 2,00,000 shares of ₹10; issued and subscribed 1,50,000; fully called; calls in arrears ₹6,000; share forfeited balance ₹1,500.", parts:[{p:"Called-up capital (₹)", ans:1500000, why:"1,50,000 × 10."},{p:"Total subscribed capital in Note 1 (₹)", ans:1495500, why:"15,00,000 − 6,000 + 1,500."}]},
  {type:"self", m:3, c:"issue", q:"State any three purposes for which Securities Premium can be used (Section 52(2)).",
   model:"(i) Issuing fully paid bonus shares to members. (ii) Writing off preliminary expenses of the company. (iii) Writing off expenses, commission or discount on issue of shares or debentures. Also correct: providing for premium payable on redemption of preference shares or debentures; buy-back of its own shares (Section 68).",
   crit:["One correct purpose","A second correct purpose","A third correct purpose"]},
  {type:"journal", m:4, c:"forfeit", q:"Kiran Ltd forfeited 300 equity shares of ₹10 each (issued at a premium of ₹3 payable with allotment) for non-payment of allotment of ₹8 (including premium) and first and final call of ₹3. Application money of ₹2 per share had been received. The forfeited shares were reissued at ₹9 per share fully paid. Pass entries for forfeiture and reissue.",
   entries:[
     {label:"Forfeiture", date:"2026 Aug 1", lines:[{a:"scap", dr:3000, why:"300 × 10 called up."},{a:"secprem", dr:900, why:"Premium 300 × 3 not received."},{a:"allot", cr:2400, why:"300 × 8 unpaid."},{a:"call", cr:900},{a:"forf", cr:600, why:"300 × 2 received."}], narr:"(Being 300 shares forfeited)"},
     {label:"Reissue", date:"2026 Sep 1", lines:[{a:"cash", dr:2700},{a:"forf", dr:300, why:"Discount 300 × 1."},{a:"scap", cr:3000}], narr:"(Being forfeited shares reissued at ₹9 fully paid)"}
   ]}
]}
});
