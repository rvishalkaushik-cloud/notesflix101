/* Revision Arena · Class XII Economics · Unit 3 · Determination of Income and Employment (Parts 1-4). Original cases; every figure recomputed. */
NFArena.register({
  id: "eco12-income", cls: "XII", subject: "Economics", unit: "Unit", num: "3",
  title: "Determination of Income and Employment",
  tagline: "Aggregate demand, propensities, equilibrium output, the investment multiplier, and excess and deficient demand.",
  notesLink: "../#eco12-income",
  concepts: {
    ad: { n: "Aggregate demand and its components", s: "ad" },
    cfun: { n: "Consumption and saving functions", s: "ad" },
    prop: { n: "APC, MPC, APS, MPS and their relations", s: "ad" },
    eq: { n: "Equilibrium output (AD = AS, S = I)", s: "eq" },
    bep: { n: "Break-even point", s: "eq" },
    mult: { n: "Investment multiplier", s: "mult" },
    fe: { n: "Full employment and involuntary unemployment", s: "gaps" },
    excess: { n: "Excess demand (inflationary gap)", s: "gaps" },
    deficient: { n: "Deficient demand (deflationary gap)", s: "gaps" },
    measures: { n: "Measures to correct excess and deficient demand", s: "gaps" }
  },
  overview: {
    text: "In the short run, the level of income and employment is determined where <b>aggregate demand (AD)</b> equals <b>aggregate supply (AS)</b>, or equivalently where <b>planned saving equals planned investment</b>. A change in investment changes income by a multiple: the <b>investment multiplier</b>. If equilibrium is above or below full employment, there is <b>excess</b> or <b>deficient demand</b>.",
    points: [
      "Two-sector AD = C + I. Consumption: C = c̄ + bY, where b = MPC.",
      "<b>APC + APS = 1</b>; <b>MPC + MPS = 1</b>.",
      "Equilibrium income Y = (c̄ + I) ÷ (1 − b).",
      "<b>k = 1 ÷ (1 − MPC) = 1 ÷ MPS</b>; ΔY = k × ΔI."
    ],
    map: {
      center: "Income and Employment",
      branches: [
        { t: "Demand", c: ["AD = C + I", "Consumption function", "APC, MPC, APS, MPS"] },
        { t: "Equilibrium", c: ["AD = AS", "S = I", "Break-even point"] },
        { t: "Multiplier", c: ["k = 1/MPS", "Working of rounds", "Numericals"] },
        { t: "Problems", c: ["Excess demand", "Deficient demand", "Fiscal and monetary measures"] }
      ]
    }
  },
  sections: [
    {
      id: "ad", title: "Aggregate demand and propensities", sub: "How much will people spend?", icon: "🛒", color: "#4da3ff",
      quick: [
        "<b>Aggregate demand</b>: total planned (ex-ante) expenditure on final goods in an economy in a year. AD = C + I (two sector); C + I + G + (X − M) (four sector).",
        "<b>Consumption function</b>: C = c̄ + bY. c̄ = <b>autonomous consumption</b> (spent even at zero income); b = <b>MPC</b>.",
        "<b>APC</b> = C ÷ Y; <b>MPC</b> = ΔC ÷ ΔY; <b>APS</b> = S ÷ Y; <b>MPS</b> = ΔS ÷ ΔY.",
        "<b>APC + APS = 1</b>; <b>MPC + MPS = 1</b>. MPC lies between 0 and 1; APC can exceed 1 at low income.",
        "<b>Saving function</b>: S = −c̄ + (1 − b)Y."
      ],
      table: { cap: "Income ₹1,000 → ₹1,200; consumption ₹800 → ₹950", head: ["Measure", "Working", "Value"], rows: [["APC (at 1,000)", "800 ÷ 1,000", "0.8"], ["APS (at 1,000)", "200 ÷ 1,000", "0.2"], ["MPC", "150 ÷ 200", "0.75"], ["MPS", "50 ÷ 200", "0.25"]] },
      cards: [
        { t: "Why APC falls as income rises", tag: "why", b: "<p>Because of autonomous consumption, at low income people consume more than they earn (APC > 1). As income rises, the share consumed falls.</p>" },
        { t: "Investment in this chapter", tag: "def", b: "<p>Investment is taken as <b>autonomous</b>: decided by businesses' expectations, not by the current level of income. Its curve is horizontal.</p>" }
      ],
      exam: ["MPC can never be more than 1 or less than 0 in this model; APS can be negative."]
    },
    {
      id: "eq", title: "Equilibrium output", sub: "Where planned spending meets output", icon: "⚖️", color: "#22c55e",
      quick: [
        "<b>AD = AS approach</b>: AS is the 45° line (Y = C + S). Equilibrium is where the AD curve cuts the 45° line.",
        "<b>S = I approach</b>: equilibrium is where planned saving equals planned investment.",
        "If AD > AS: inventories fall, firms raise output. If AD < AS: inventories pile up, firms cut output.",
        "<b>Equilibrium income</b>: Y = (c̄ + I) ÷ (1 − b).",
        "<b>Break-even point</b>: where C = Y (saving is zero). Below it, saving is negative (dissaving)."
      ],
      table: { cap: "C = 100 + 0.8Y, I = 200", head: ["Y", "C", "S", "AD = C + I", "Result"], rows: [["1,000", "900", "100", "1,100", "AD > AS: output rises"], ["1,500", "1,300", "200", "1,500", "Equilibrium (S = I)"], ["2,000", "1,700", "300", "1,900", "AD < AS: output falls"]] },
      cards: [
        { t: "Worked example", tag: "eg", b: "<p>C = 100 + 0.8Y; I = 200. Y = (100 + 200) ÷ 0.2 = <b>1,500</b>.</p><p>Check: C = 100 + 1,200 = 1,300; S = 200 = I.</p>" },
        { t: "Break-even income", tag: "eg", b: "<p>C = 100 + 0.8Y. Break-even: Y = 100 + 0.8Y → 0.2Y = 100 → <b>Y = 500</b>.</p>" }
      ],
      exam: ["Ex-ante (planned) S and I are equal only at equilibrium; ex-post (actual) S and I are always equal."]
    },
    {
      id: "mult", title: "The investment multiplier", sub: "Small push, big change", icon: "✖️", color: "#f5b301",
      quick: [
        "<b>Multiplier (k)</b> = ΔY ÷ ΔI = 1 ÷ (1 − MPC) = 1 ÷ MPS.",
        "Higher MPC → larger multiplier. MPC 0.5 → k = 2; MPC 0.8 → k = 5; MPC 0.9 → k = 10.",
        "<b>Working:</b> new investment raises income of those who receive it; they spend MPC of it; that becomes others' income; and so on in rounds that get smaller.",
        "Limits: k lies between 1 (MPC = 0) and infinity (MPC = 1)."
      ],
      table: { cap: "ΔI = ₹100 cr, MPC = 0.8", head: ["Round", "ΔY (₹ cr)", "ΔC (₹ cr)", "ΔS (₹ cr)"], rows: [["1", "100", "80", "20"], ["2", "80", "64", "16"], ["3", "64", "51.2", "12.8"], ["…", "…", "…", "…"], ["Total", "500", "400", "100"]] },
      cards: [
        { t: "Worked example", tag: "eg", b: "<p>MPC = 0.75; investment rises by ₹500 cr. k = 1 ÷ 0.25 = <b>4</b>; ΔY = <b>₹2,000 cr</b>.</p>" },
        { t: "Finding MPC from k", tag: "eg", b: "<p>Income rose ₹2,000 cr after investment rose ₹400 cr. k = 5 → MPS = 0.2 → <b>MPC = 0.8</b>.</p>" }
      ],
      exam: ["Total extra saving at the end of all rounds equals the extra investment (₹100 here)."]
    },
    {
      id: "gaps", title: "Excess and deficient demand", sub: "Too much or too little spending", icon: "🌡️", color: "#ff5470",
      quick: [
        "<b>Full employment</b>: all who are able and willing to work at the existing wage get work. <b>Involuntary unemployment</b>: people willing to work at the existing wage cannot find work.",
        "<b>Excess demand</b>: AD > AS at full employment. Output cannot rise further, so <b>prices rise</b>. The gap is the <b>inflationary gap</b>.",
        "<b>Deficient demand</b>: AD < AS at full employment. Output and employment fall; <b>involuntary unemployment</b>. The gap is the <b>deflationary gap</b>.",
        "<b>Fiscal measures</b>: change government spending and taxes. <b>Monetary measures</b>: repo/bank rate, CRR/SLR, OMO, margin requirement."
      ],
      table: { cap: "Corrective measures", head: ["Measure", "Excess demand", "Deficient demand"], rows: [["Government expenditure", "Reduce", "Increase"], ["Taxes", "Raise", "Cut"], ["Repo / bank rate", "Raise", "Lower"], ["CRR / SLR", "Raise", "Lower"], ["Open market operations", "Sell securities", "Buy securities"], ["Margin requirement", "Raise", "Lower"]] },
      cards: [
        { t: "Worked example: inflationary gap", tag: "eg", b: "<p>Full employment output ₹2,000 cr; AD at that output ₹2,300 cr → inflationary gap = <b>₹300 cr</b>.</p>" },
        { t: "Why excess demand raises prices", tag: "why", b: "<p>At full employment, there are no idle resources to produce more. Extra demand only bids up prices: output and employment stay the same.</p>" }
      ],
      exam: ["Inflationary gap = AD − AS at full employment; deflationary gap = AS − AD at full employment."]
    }
  ],
  flashcards: [
    { k: "Definition", c: "ad", q: "What is aggregate demand?", a: "Total planned expenditure on final goods and services in an economy in a year." },
    { k: "Components", c: "ad", q: "Components of AD in a two-sector economy?", a: "Consumption (C) and investment (I)." },
    { k: "Function", c: "cfun", q: "Consumption function C = c̄ + bY: what is c̄?", a: "Autonomous consumption, spent even at zero income." },
    { k: "Formula", c: "prop", q: "MPC?", a: "ΔC ÷ ΔY." },
    { k: "Relation", c: "prop", q: "MPC + MPS = ?", a: "1." },
    { k: "Relation", c: "prop", q: "Can APC be more than 1?", a: "Yes, at low incomes (below break-even)." },
    { k: "Range", c: "prop", q: "Range of MPC?", a: "Between 0 and 1." },
    { k: "Equilibrium", c: "eq", q: "Condition of equilibrium (saving approach)?", a: "Planned saving = Planned investment." },
    { k: "Equilibrium", c: "eq", q: "What happens when AD > AS?", a: "Inventories fall; firms increase output till AD = AS." },
    { k: "Formula", c: "eq", q: "Equilibrium income with C = c̄ + bY and I?", a: "Y = (c̄ + I) ÷ (1 − b)." },
    { k: "Point", c: "bep", q: "What is the break-even point?", a: "The income level where consumption equals income and saving is zero." },
    { k: "Formula", c: "mult", q: "Investment multiplier?", a: "k = 1 ÷ (1 − MPC) = 1 ÷ MPS." },
    { k: "Relation", c: "mult", q: "MPC 0.9: multiplier?", a: "10." },
    { k: "Definition", c: "fe", q: "What is involuntary unemployment?", a: "People willing to work at the existing wage cannot find work." },
    { k: "Gap", c: "excess", q: "Inflationary gap?", a: "Excess of AD over AS at full employment level." },
    { k: "Gap", c: "deficient", q: "Effect of deficient demand?", a: "Fall in output and employment (involuntary unemployment); prices may fall." },
    { k: "Measure", c: "measures", q: "Fiscal measure to correct excess demand?", a: "Reduce government spending / raise taxes." },
    { k: "Measure", c: "measures", q: "Monetary measure to correct deficient demand?", a: "Lower repo rate / CRR, or buy securities." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "Spending a raise",
      text: "<p><b>Kavya's</b> household income rose from ₹40,000 to ₹50,000 a month. Their spending rose from ₹36,000 to ₹43,500.</p>",
      qs: [
        { q: "Calculate APC at the old income, MPC and MPS. What does MPC tell us?", m: 3, type: "Calculate", c: "prop", ans: "APC 0.9; MPC 0.75; MPS 0.25", keys: ["0.9", "0.75", "0.25"], hint: "ΔC = 7,500; ΔY = 10,000.",
          points: [{ p: "APC = 36,000 ÷ 40,000 = <b>0.9</b>", m: 1, k: ["0.9"] }, { p: "MPC = 7,500 ÷ 10,000 = <b>0.75</b>; MPS = <b>0.25</b>", m: 1, k: ["0.75", "0.25"] }, { p: "MPC: 75 paise of every extra rupee is spent", m: 1, k: ["75", "extra", "additional"] }],
          structure: ["Three calculations, one line meaning."],
          model: "<p>APC = 36,000 ÷ 40,000 = <b>0.9</b>.</p><p>MPC = ΔC ÷ ΔY = 7,500 ÷ 10,000 = <b>0.75</b>; MPS = 1 − 0.75 = <b>0.25</b>.</p><p>MPC shows that the household spends <b>75 paise of every extra rupee</b> of income and saves 25 paise.</p>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "Where does Sundar settle?",
      text: "<p>The economy of <span class='co'>Sundar</span> has the consumption function C = 100 + 0.8Y (₹ crore) and autonomous investment of ₹200 crore.</p>",
      qs: [
        { q: "Calculate equilibrium income, consumption and saving at equilibrium, and the break-even income.", m: 4, type: "Calculate", c: "eq", ans: "Y 1,500; C 1,300; S 200; break-even 500", keys: ["1,500", "1,300", "500"], hint: "Y = (100 + 200) ÷ 0.2.",
          points: [{ p: "Y = (100 + 200) ÷ (1 − 0.8) = <b>1,500</b>", m: 1, k: ["1,500"] }, { p: "C = 100 + 0.8 × 1,500 = <b>1,300</b>", m: 1, k: ["1,300"] }, { p: "S = 1,500 − 1,300 = <b>200</b> = I", m: 1, k: ["200"] }, { p: "Break-even: Y = 100 ÷ 0.2 = <b>500</b>", m: 1, k: ["500"] }],
          structure: ["Equilibrium, C, S check, break-even."],
          model: "<p>Equilibrium: Y = C + I → Y = 100 + 0.8Y + 200 → 0.2Y = 300 → <b>Y = ₹1,500 crore</b>.</p><p>C = 100 + 0.8 × 1,500 = <b>₹1,300 crore</b>; S = 1,500 − 1,300 = <b>₹200 crore</b> = I (check).</p><p>Break-even: C = Y → 100 + 0.8Y = Y → 0.2Y = 100 → <b>Y = ₹500 crore</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "The new highway project",
      text: "<p>The government of Sundar starts a highway project, raising investment by ₹500 crore. Economists estimate that households spend 75% of any extra income.</p>",
      qs: [
        { q: "Calculate the multiplier and the total increase in income. Show the first three rounds and explain why income rises by more than investment.", m: 6, type: "Calculate and explain", c: "mult", ans: "k = 4; ΔY = 2,000", keys: ["4", "2,000"], hint: "MPC 0.75.",
          points: [{ p: "k = 1 ÷ (1 − 0.75) = <b>4</b>", m: 1, k: ["4"] }, { p: "ΔY = 4 × 500 = <b>₹2,000 cr</b>", m: 1, k: ["2,000"] }, { p: "Round 1: 500; round 2: 375", m: 1, k: ["375"] }, { p: "Round 3: 281.25", m: 1, k: ["281"] }, { p: "Income spent becomes others' income (chain)", m: 1, k: ["spend", "income of others", "chain"] }, { p: "Rounds shrink because part is saved (MPS 0.25)", m: 1, k: ["sav", "leak", "mps"] }],
          structure: ["Formula, total, rounds table, explanation."],
          model: "<p>k = 1 ÷ (1 − MPC) = 1 ÷ 0.25 = <b>4</b>. ΔY = 4 × 500 = <b>₹2,000 crore</b>.</p><table><tr><th>Round</th><th>ΔY</th><th>ΔC (75%)</th></tr><tr><td>1</td><td>500</td><td>375</td></tr><tr><td>2</td><td>375</td><td>281.25</td></tr><tr><td>3</td><td>281.25</td><td>210.94</td></tr></table><p>The ₹500 crore paid to workers and suppliers becomes their income. They spend 75% of it, which becomes income for others, who again spend 75%, and so on. Each round is smaller because 25% is saved. The total rise in income is 4 times the investment.</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "Too much money chasing goods",
      text: "<p>Sundar's economy is at full employment with output of ₹2,000 crore. Easy loans and a festival boom have pushed aggregate demand to ₹2,300 crore. Prices of food and housing are rising every month.</p>",
      qs: [
        { q: "Identify the situation, calculate the gap, and suggest two fiscal and two monetary measures to correct it.", m: 6, type: "Diagnose and recommend", c: "excess", ans: "Excess demand; inflationary gap 300", keys: ["excess", "300"], hint: "AD above full-employment output.",
          points: [{ p: "<b>Excess demand</b> (AD > AS at full employment)", m: 1, k: ["excess"] }, { p: "Inflationary gap = 2,300 − 2,000 = <b>₹300 cr</b>", m: 1, k: ["300"] }, { p: "Fiscal 1: reduce government expenditure", m: 1, k: ["expenditure", "spending"] }, { p: "Fiscal 2: raise taxes", m: 1, k: ["tax"] }, { p: "Monetary 1: raise repo / bank rate", m: 1, k: ["repo", "bank rate"] }, { p: "Monetary 2: raise CRR / sell securities", m: 1, k: ["crr", "sell", "slr", "margin"] }],
          structure: ["Name, gap, two fiscal, two monetary measures."],
          model: "<p>This is <b>excess demand</b>: AD (₹2,300 cr) exceeds output at full employment (₹2,000 cr). Inflationary gap = <b>₹300 crore</b>; it raises prices, not output.</p><p><b>Fiscal:</b> (i) reduce government expenditure; (ii) raise taxes to cut disposable income.</p><p><b>Monetary:</b> (i) raise the repo rate and bank rate so loans become costlier; (ii) raise CRR or sell securities in the open market to absorb money.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Shops full, buyers few",
      text: "<p>In neighbouring <span class='co'>Kanakpur</span>, factories have unsold stock piling up, and many workers who want jobs at current wages cannot find them. Full-employment output is ₹5,000 crore, but aggregate demand is only ₹4,600 crore.</p>",
      qs: [
        { q: "Name the problem and its effect on employment, calculate the gap and explain two measures to correct it.", m: 4, type: "Diagnose and recommend", c: "deficient", ans: "Deficient demand; deflationary gap 400; involuntary unemployment", keys: ["deficient", "400"], hint: "AD below full-employment output.",
          points: [{ p: "<b>Deficient demand</b>", m: 1, k: ["deficient"] }, { p: "Deflationary gap ₹400 cr; involuntary unemployment", m: 1, k: ["400", "involuntary"] }, { p: "Measure 1: raise government spending / cut taxes", m: 1, k: ["spending", "tax"] }, { p: "Measure 2: lower repo rate / CRR or buy securities", m: 1, k: ["repo", "crr", "buy"] }],
          structure: ["Name, gap and effect, two measures."],
          model: "<p>This is <b>deficient demand</b>: AD (₹4,600 cr) is below full-employment output (₹5,000 cr). Deflationary gap = <b>₹400 crore</b>. Unsold stock leads firms to cut output, causing <b>involuntary unemployment</b>.</p><p>Measures: (i) <b>Fiscal</b>: increase government expenditure (or cut taxes) to raise AD. (ii) <b>Monetary</b>: lower the repo rate and CRR, or buy securities, to make credit cheaper and more available.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "ad", q: "In a two-sector economy, AD =", o: ["C + S", "C + I", "C + G", "S + I"], a: 1, hint: "Spending.", why: "<b>C + I</b>." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "prop", q: "MPC + MPS =", o: ["0", "1", "Income", "Multiplier"], a: 1, hint: "Extra income is spent or saved.", why: "<b>1</b>." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "mult", q: "If MPC = 0.5, multiplier =", o: ["0.5", "1", "2", "5"], a: 2, hint: "1 ÷ 0.5.", why: "<b>2</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "prop", q: "Which can be greater than 1?", o: ["MPC", "MPS", "APC", "None"], a: 2, hint: "At low incomes.", why: "<b>APC</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "eq", q: "At equilibrium (saving approach):", o: ["S > I", "S = I", "S < I", "S = 0"], a: 1, hint: "Planned values.", why: "<b>Planned S = planned I</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "mult", q: "ΔI = ₹400 cr, ΔY = ₹2,000 cr. MPC is:", o: ["0.2", "0.5", "0.8", "5"], a: 2, hint: "k = 5.", why: "MPS = 0.2 → <b>MPC 0.8</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "eq", q: "C = 50 + 0.75Y; I = 100. Equilibrium income is:", o: ["400", "600", "200", "150"], a: 1, hint: "150 ÷ 0.25.", why: "<b>600</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "excess", q: "Excess demand at full employment leads to:", o: ["More output", "Higher prices", "More unemployment", "Lower prices"], a: 1, hint: "No idle resources.", why: "<b>Higher prices</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "mult", q: "The higher the MPC, the larger the multiplier.", r: "Multiplier = 1 ÷ (1 − MPC).", a: 0, hint: "Formula.", why: "Both true; R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "eq", q: "When AD exceeds AS, firms increase output.", r: "Inventories fall below planned levels when AD exceeds AS.", a: 0, hint: "Falling stock signals more demand.", why: "Both true; R explains A." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "deficient", q: "Deficient demand causes involuntary unemployment.", r: "Firms cut output when they cannot sell all they produce.", a: 0, hint: "Lower output, fewer jobs.", why: "Both true; R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "cfun", q: "Autonomous consumption is spent even at zero income.", a: true, hint: "c̄.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "prop", q: "MPC can be greater than 1.", a: false, hint: "0 to 1.", why: "False." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "bep", q: "At the break-even point, saving is zero.", a: true, hint: "C = Y.", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "prop", q: "Match the term with its formula.", pairs: [["APC", "C ÷ Y"], ["MPC", "ΔC ÷ ΔY"], ["APS", "S ÷ Y"], ["Multiplier", "1 ÷ MPS"]], hint: "Average vs marginal.", why: "Each term has one formula." },
    { id: "q16", t: "match", d: "M", m: 4, c: "measures", q: "Match the measure with the problem it corrects.", pairs: [["Raise CRR", "Excess demand"], ["Buy government securities", "Deficient demand"], ["Raise taxes", "Inflationary gap"], ["Increase public works spending", "Deflationary gap"]], hint: "Tighten vs ease.", why: "Tightening corrects excess; easing corrects deficient demand." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "prop", q: "APC + APS = ______.", acc: ["1", "one"], hint: "Spent or saved.", why: "1." },
    { id: "q18", t: "fill", d: "M", m: 1, c: "excess", q: "Excess of AD over AS at full employment is the ______ gap.", acc: ["inflationary"], hint: "Prices rise.", why: "Inflationary." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "eq", q: "The aggregate supply curve in this model is a ______-degree line.", acc: ["45", "forty-five"], hint: "Y = C + S.", why: "45°." },
    { id: "q20", t: "short", d: "E", m: 1, c: "fe", q: "What is unemployment called when people willing to work at the existing wage cannot find jobs?", acc: ["involuntary unemployment", "involuntary"], hint: "Not by choice.", why: "Involuntary unemployment." },
    { id: "q21", t: "short", d: "M", m: 1, c: "mult", q: "MPS is 0.25. What is the multiplier?", acc: ["4", "four"], hint: "1 ÷ 0.25.", why: "4." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "prop", q: "Distinguish between APC and MPC (three points).", hint: "Ratio of totals vs changes; range.", why: "",
      points: [{ p: "APC = C ÷ Y; MPC = ΔC ÷ ΔY", m: 1, k: ["c ÷ y", "Δc", "change"] }, { p: "APC can exceed 1; MPC lies between 0 and 1", m: 1, k: ["exceed", "more than 1", "between"] }, { p: "APC falls as income rises; MPC constant in a linear function", m: 1, k: ["falls", "constant"] }],
      model: "<p>(i) <b>APC</b> is total consumption ÷ total income; <b>MPC</b> is change in consumption ÷ change in income.</p><p>(ii) APC can be more than 1 (at low incomes); MPC is always between 0 and 1.</p><p>(iii) APC falls as income rises; MPC stays constant in a straight-line consumption function.</p>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "mult", q: "MPC is 0.8. Investment rises by ₹200 crore. Calculate the multiplier, change in income and change in consumption.", hint: "k = 5.", why: "",
      points: [{ p: "k = 5", m: 1, k: ["5"] }, { p: "ΔY = ₹1,000 cr", m: 1, k: ["1,000"] }, { p: "ΔC = 0.8 × 1,000 = ₹800 cr", m: 1, k: ["800"] }],
      model: "<p>k = 1 ÷ (1 − 0.8) = <b>5</b>. ΔY = 5 × 200 = <b>₹1,000 crore</b>. ΔC = MPC × ΔY = 0.8 × 1,000 = <b>₹800 crore</b> (ΔS = 200 = ΔI).</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "eq", q: "Explain what happens when planned saving is greater than planned investment, and how equilibrium is restored.", hint: "AD < AS.", why: "",
      points: [{ p: "S > I means AD < AS", m: 1, k: ["ad < as", "less than"] }, { p: "Unsold inventories pile up", m: 1, k: ["inventor", "unsold"] }, { p: "Firms reduce output and employment", m: 1, k: ["reduce", "cut", "fall"] }, { p: "Income falls, saving falls till S = I", m: 1, k: ["s = i", "equal"] }],
      model: "<p>If planned saving exceeds planned investment, households are spending less than firms are producing: <b>AD < AS</b>.</p><p>Unsold goods pile up as unplanned inventories, so firms <b>cut output and employment</b>.</p><p>As income falls, saving also falls, until planned saving again equals planned investment. Equilibrium is restored at a lower income.</p>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "deficient", q: "Explain any two measures to correct deficient demand.", hint: "One fiscal, one monetary.", why: "",
      points: [{ p: "Fiscal measure named", m: 1, k: ["expenditure", "spending", "tax"] }, { p: "Fiscal measure explained (raises AD)", m: 1, k: ["increase", "raise", "demand"] }, { p: "Monetary measure named", m: 1, k: ["repo", "bank rate", "crr", "buy", "margin"] }, { p: "Monetary measure explained (cheaper/more credit)", m: 1, k: ["credit", "cheap", "lend"] }],
      model: "<p><b>(i) Increase government expenditure</b> (fiscal): spending on roads, schools and welfare directly raises aggregate demand, and through the multiplier raises income more.</p><p><b>(ii) Lower the repo rate</b> (monetary): banks get cheaper funds, lower loan rates, and households and firms borrow and spend more, raising AD.</p>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "eq", q: "Explain the determination of equilibrium income using the AD-AS approach with a schedule (C = 100 + 0.8Y, I = 200; Y = 1,000, 1,500, 2,000).", hint: "Equilibrium at 1,500.", why: "",
      points: [{ p: "AD = C + I; AS = Y (45° line)", m: 1, k: ["45", "c + i"] }, { p: "Schedule: Y 1,000 → AD 1,100", m: 1, k: ["1,100"] }, { p: "Y 1,500 → AD 1,500 (equilibrium)", m: 1, k: ["1,500"] }, { p: "Y 2,000 → AD 1,900", m: 1, k: ["1,900"] }, { p: "Below equilibrium AD > AS: output rises", m: 1, k: ["rise", "increase"] }, { p: "Above equilibrium AD < AS: output falls", m: 1, k: ["fall", "reduce"] }],
      model: "<p>AD = C + I and AS is shown by the 45° line (Y). Equilibrium is where AD = AS.</p><table><tr><th>Y</th><th>C</th><th>I</th><th>AD</th><th>Result</th></tr><tr><td>1,000</td><td>900</td><td>200</td><td>1,100</td><td>AD > AS: output rises</td></tr><tr><td>1,500</td><td>1,300</td><td>200</td><td>1,500</td><td>Equilibrium</td></tr><tr><td>2,000</td><td>1,700</td><td>200</td><td>1,900</td><td>AD < AS: output falls</td></tr></table><p>At ₹1,000 crore, spending exceeds output; inventories fall and firms expand. At ₹2,000 crore, spending is less than output; inventories pile up and firms cut back. Only at <b>₹1,500 crore</b> does planned spending equal output.</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "mult", q: "Explain the working of the investment multiplier with a numerical example (ΔI = ₹100 cr, MPC = 0.8).", hint: "Rounds 100, 80, 64…", why: "",
      points: [{ p: "k = 1 ÷ (1 − MPC) = 5", m: 1, k: ["5"] }, { p: "First round: income rises by ₹100 cr", m: 1, k: ["100"] }, { p: "Second round: ₹80 cr spent becomes income", m: 1, k: ["80"] }, { p: "Third round: ₹64 cr", m: 1, k: ["64"] }, { p: "Total ΔY = ₹500 cr; ΔC 400; ΔS 100", m: 1, k: ["500", "400"] }, { p: "Process ends when total extra saving = extra investment", m: 1, k: ["saving", "equal"] }],
      model: "<p>k = 1 ÷ (1 − 0.8) = <b>5</b>.</p><table><tr><th>Round</th><th>ΔY</th><th>ΔC</th><th>ΔS</th></tr><tr><td>1</td><td>100</td><td>80</td><td>20</td></tr><tr><td>2</td><td>80</td><td>64</td><td>16</td></tr><tr><td>3</td><td>64</td><td>51.2</td><td>12.8</td></tr><tr><td>Total</td><td>500</td><td>400</td><td>100</td></tr></table><p>The extra ₹100 crore of investment becomes income for workers and suppliers. They spend 80% (₹80 cr), which becomes others' income, and so on. Income keeps rising in smaller rounds until total extra saving (₹100 cr) equals the extra investment. Total rise in income = <b>₹500 crore</b>.</p>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "cfun", q: "A family with no income this month still spends ₹5,000 using savings. This ₹5,000 is", o: ["Induced consumption", "Autonomous consumption", "MPC", "Investment"], a: 1, hint: "At zero income.", why: "<b>Autonomous consumption</b>." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "excess", q: "Factories are running at full capacity and prices are rising due to high demand. This is", o: ["Deficient demand", "Excess demand", "Break-even", "Involuntary unemployment"], a: 1, hint: "Full capacity + rising prices.", why: "<b>Excess demand</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "mult", q: "If people start saving a larger share of extra income, the multiplier will", o: ["Rise", "Fall", "Stay the same", "Become 1"], a: 1, hint: "k = 1 ÷ MPS.", why: "Higher MPS → <b>smaller multiplier</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "prop", passage: "Income rose by ₹1,000 and consumption by ₹600.", q: "MPC is", o: ["0.4", "0.6", "1.6", "6"], a: 1, hint: "600 ÷ 1,000.", why: "<b>0.6</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "eq", passage: "In an economy, unplanned inventories are piling up in warehouses.", q: "This shows", o: ["AD > AS", "AD < AS", "AD = AS", "Full employment"], a: 1, hint: "Unsold goods.", why: "<b>AD < AS</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "deficient", passage: "Full-employment output ₹5,000 cr; AD ₹4,600 cr.", q: "The deflationary gap is", o: ["₹400 cr", "₹4,600 cr", "₹9,600 cr", "Nil"], a: 0, hint: "5,000 − 4,600.", why: "<b>₹400 cr</b>." }
  ],
  find: {
    mcq: [
      { s: "Total planned spending of households and firms in the economy.", o: ["Aggregate demand", "Aggregate supply", "Multiplier", "Break-even"], a: 0, c: "ad", d: "E", why: "<b>Aggregate demand</b>." },
      { s: "₹2,000 spent each month even with no income.", o: ["Autonomous consumption", "MPC", "Investment", "MPS"], a: 0, c: "cfun", d: "E", why: "<b>Autonomous consumption</b>." },
      { s: "Of every extra ₹100 earned, ₹70 is spent.", o: ["MPC = 0.7", "APC = 0.7", "MPS = 0.7", "k = 0.7"], a: 0, c: "prop", d: "E", why: "<b>MPC 0.7</b>." },
      { s: "Total consumption ÷ total income = 1.1 for a poor family.", o: ["APC above 1", "MPC above 1", "MPS", "Multiplier"], a: 0, c: "prop", d: "E", why: "<b>APC</b> > 1 (dissaving)." },
      { s: "The AD curve cuts the 45° line.", o: ["Equilibrium income", "Break-even point", "Inflationary gap", "Multiplier"], a: 0, c: "eq", d: "M", why: "<b>Equilibrium</b>." },
      { s: "Income at which the family neither saves nor borrows.", o: ["Break-even point", "Equilibrium", "Full employment", "MPC"], a: 0, c: "bep", d: "M", why: "<b>Break-even point</b>." },
      { s: "₹100 crore of new investment raises income by ₹500 crore.", o: ["Multiplier of 5", "MPC of 5", "Break-even", "Inflation"], a: 0, c: "mult", d: "M", why: "<b>Multiplier 5</b>." },
      { s: "Warehouses fill with unsold goods; firms cut output.", o: ["AD < AS", "AD > AS", "S < I", "Full employment"], a: 0, c: "eq", d: "M", why: "<b>AD < AS</b>." },
      { s: "Workers ready to work at current wages cannot find jobs.", o: ["Involuntary unemployment", "Full employment", "Voluntary unemployment", "Inflation"], a: 0, c: "fe", d: "M", why: "<b>Involuntary unemployment</b>." },
      { s: "Demand exceeds what the economy can produce at full employment.", o: ["Excess demand", "Deficient demand", "Break-even", "Multiplier"], a: 0, c: "excess", d: "M", why: "<b>Excess demand</b>." },
      { s: "AD at full employment is ₹300 cr more than output.", o: ["Inflationary gap", "Deflationary gap", "Multiplier", "MPS"], a: 0, c: "excess", d: "C", why: "<b>Inflationary gap</b>." },
      { s: "AD at full employment is ₹400 cr less than output.", o: ["Deflationary gap", "Inflationary gap", "Break-even", "MPC"], a: 0, c: "deficient", d: "C", why: "<b>Deflationary gap</b>." },
      { s: "Government raises taxes to cool rising prices.", o: ["Fiscal measure for excess demand", "Monetary measure", "Deficient demand cure", "Multiplier"], a: 0, c: "measures", d: "C", why: "<b>Fiscal</b> measure for excess demand." },
      { s: "Central bank lowers repo rate during a slump.", o: ["Monetary measure for deficient demand", "Fiscal measure", "Excess demand cure", "Break-even"], a: 0, c: "measures", d: "C", why: "<b>Monetary</b> measure for deficient demand." },
      { s: "Extra saving at the end of all rounds equals the new investment.", o: ["Multiplier process completed", "Break-even", "Inflationary gap", "APC"], a: 0, c: "mult", d: "C", why: "End of the <b>multiplier</b> process." },
      { s: "MPC 0.9 gives a bigger rise in income than MPC 0.6.", o: ["Higher MPC, larger multiplier", "Higher MPS, larger multiplier", "APC > 1", "Break-even"], a: 0, c: "mult", d: "C", why: "<b>k = 10 vs 2.5</b>." }
    ],
    match: [
      { title: "Drag each situation onto its concept.", pairs: [["Spending at zero income", "Autonomous consumption", "cfun"], ["ΔC ÷ ΔY", "MPC", "prop"], ["C = Y, saving zero", "Break-even point", "bep"], ["1 ÷ MPS", "Investment multiplier", "mult"], ["AD > AS at full employment", "Excess demand", "excess"], ["Jobs not available at going wage", "Involuntary unemployment", "fe"]] }
    ],
    wrong: [
      { stmts: ["MPC + MPS = 1.", "APC + APS = 1.", "MPC can exceed 1.", "APC can exceed 1."], a: 2, c: "prop", why: "<b>MPC</b> lies between 0 and 1." },
      { stmts: ["Excess demand raises prices.", "Deficient demand causes involuntary unemployment.", "To fight excess demand, buy securities.", "To fight deficient demand, cut taxes."], a: 2, c: "measures", why: "To fight excess demand, <b>sell</b> securities." },
      { stmts: ["k = 1 ÷ MPS.", "k = 1 ÷ (1 − MPC).", "Higher MPS gives a bigger k.", "k ≥ 1."], a: 2, c: "mult", why: "Higher MPS gives a <b>smaller</b> k." }
    ],
    para: [
      { target: "Multiplier", c: "mult", sents: ["The state built a new metro line.", "Workers spent their wages in local shops.", "Shopkeepers then spent their extra income, and so on, until income rose four times the cost.", "The metro opened in June."], a: 2, why: "Repeated spending rounds: <b>multiplier</b>." },
      { target: "Deficient demand", c: "deficient", sents: ["Kanakpur's factories have spare machines.", "Unsold stock is piling up.", "The weather is pleasant.", "Many people who want work cannot find any."], a: 1, why: "Unsold stock shows AD < AS: <b>deficient demand</b>." },
      { target: "Autonomous consumption", c: "cfun", sents: ["Raju lost his job.", "He still spent ₹4,000 on food from savings.", "He looked for work every day.", "He found a job in March."], a: 1, why: "Spending at zero income: <b>autonomous consumption</b>." }
    ],
    explain: [
      { s: "Prices rise but output does not, because all workers are employed.", o: ["Excess demand", "Deficient demand", "Break-even", "Multiplier"], a: 0, c: "excess", why: "The clue is <i>all workers are employed</i>: <b>excess demand</b>." },
      { s: "Saving is negative at very low income.", o: ["Below break-even point", "Above equilibrium", "Full employment", "MPS > 1"], a: 0, c: "bep", why: "Dissaving occurs <b>below break-even</b>." },
      { s: "Investment of ₹50 cr raised income by ₹50 cr only.", o: ["MPC = 0 (k = 1)", "MPC = 1", "k = 5", "Excess demand"], a: 0, c: "mult", why: "k = 1 when <b>MPC = 0</b>." },
      { s: "Firms find stocks falling below planned levels.", o: ["AD > AS", "AD < AS", "Break-even", "S > I"], a: 0, c: "eq", why: "Stocks run down when <b>AD > AS</b>." }
    ]
  }
});
