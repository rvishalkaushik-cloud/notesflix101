// Trimmed example of a finished note (2 of 5 steps). Copy its shape, not its words.
module.exports={
 "meta": {
  "title": "EXAMPLE (trimmed): Basic Concepts of Macroeconomics",
  "titleHtml": "MACRO<span>ECONOMICS</span><br><small style=\"font-size:.45em;color:var(--teal)\">Basic Concepts</small>",
  "kicker": "Class 12 · Economics · Unit 1 · National Income · Part 1",
  "lead": "Why do we talk about <b>India’s</b> income, not just one family’s? Meet the big-picture ideas every National Income question is built on.",
  "palette": 0
 },
 "hook": [
  "Harpreet buys 100 kg of flour for her bakery and Aarav’s mother buys 5 kg for home. Same flour, same shop. Is the flour the same kind of good in both cases?",
  "No! For the bakery it is an <b>intermediate good</b> (it will be turned into bread). For the home it is a <b>final good</b> (it is used up by the family). In economics, <b>the use decides the type</b>, not the good itself."
 ],
 "cast": [
  {
   "key": "aarav",
   "name": "Aarav",
   "role": "Class 12 student",
   "hair": "short",
   "skin": "#c99070",
   "shirt": "$$P",
   "bg": "$$S"
  },
  {
   "key": "harpreet",
   "name": "Harpreet",
   "role": "Owner, Fluffy Loaf Bakery",
   "hair": "bun",
   "skin": "#d9a37c",
   "shirt": "$$S",
   "bg": "$$A",
   "bindi": false
  },
  {
   "key": "suresh",
   "name": "Mr. Suresh",
   "role": "Golden Grain Flour Mill",
   "hair": "bald",
   "skin": "#a8714a",
   "shirt": "$$A",
   "bg": "$$P",
   "beard": true
  },
  {
   "key": "nisha",
   "name": "Nisha",
   "role": "Machine maker, OvenTech",
   "hair": "long",
   "skin": "#b57d58",
   "shirt": "$$H2",
   "bg": "$$C",
   "glasses": true
  }
 ],
 "hero": "<svg viewBox=\"0 0 640 380\" role=\"img\" aria-label=\"A whole economy: mill, bakery, homes and a factory linked by money and goods\">\n<rect width=\"640\" height=\"380\" fill=\"$$BG2\"/><rect y=\"250\" width=\"640\" height=\"130\" fill=\"$$A\"/>\n<circle cx=\"320\" cy=\"180\" r=\"150\" fill=\"none\" stroke=\"$$H\" stroke-width=\"3\" stroke-dasharray=\"10 9\" opacity=\".35\"/>\n<g transform=\"translate(70 130)\"><rect width=\"110\" height=\"90\" rx=\"8\" fill=\"#fff\"/><rect width=\"110\" height=\"16\" fill=\"$$P\"/><rect x=\"80\" y=\"-40\" width=\"18\" height=\"50\" fill=\"#fff\"/><circle cx=\"89\" cy=\"-52\" r=\"12\" fill=\"#fff\" opacity=\".8\"><animate attributeName=\"cy\" values=\"-52;-74;-52\" dur=\"3s\" repeatCount=\"indefinite\"/></circle><text x=\"55\" y=\"65\" font-size=\"34\" text-anchor=\"middle\">🌾</text></g>\n<g transform=\"translate(265 90)\"><rect width=\"110\" height=\"96\" rx=\"10\" fill=\"$$T\"/><path d=\"M-6 0 h122 l-8 20 h-106z\" fill=\"$$S\"/><text x=\"55\" y=\"70\" font-size=\"38\" text-anchor=\"middle\">🍞</text></g>\n<g transform=\"translate(460 130)\"><polygon points=\"0,40 55,0 110,40\" fill=\"$$C\"/><rect y=\"40\" width=\"110\" height=\"60\" fill=\"#fff\"/><rect x=\"42\" y=\"62\" width=\"26\" height=\"38\" fill=\"$$H\"/></g>\n<g transform=\"translate(270 255)\"><rect width=\"100\" height=\"70\" rx=\"8\" fill=\"$$H\"/><text x=\"50\" y=\"50\" font-size=\"34\" text-anchor=\"middle\">⚙️</text></g>\n<g font-size=\"26\"><text><animateMotion dur=\"7s\" repeatCount=\"indefinite\" path=\"M190 175 Q250 120 265 140\"/>📦</text><text><animateMotion dur=\"7s\" begin=\"1.5s\" repeatCount=\"indefinite\" path=\"M380 140 Q430 120 460 170\"/>🍞</text><text><animateMotion dur=\"8s\" begin=\"3s\" repeatCount=\"indefinite\" path=\"M470 240 Q400 330 360 300\"/>🪙</text></g>\n<g font-family=\"Baloo 2,Inter,sans-serif\" font-weight=\"800\" font-size=\"17\" fill=\"$$H\" text-anchor=\"middle\"><text x=\"125\" y=\"245\">Flour mill</text><text x=\"320\" y=\"210\">Bakery</text><text x=\"515\" y=\"250\">Homes</text><text x=\"320\" y=\"350\">Machine maker</text></g></svg>",
 "glossary": {
  "macroeconomics": "The study of the economy as a whole: national income, total employment, the general price level, aggregate demand and supply.",
  "microeconomics": "The study of individual units: one consumer, one firm, one market.",
  "aggregate": "A total for the whole economy, e.g. total output or total employment.",
  "consumption goods": "Goods that satisfy human wants directly, bought by households for their own use.",
  "capital goods": "Fixed assets used again and again in production for many years, e.g. machines, buildings.",
  "final goods": "Goods bought for final consumption or investment, not for resale or further processing in the same year.",
  "intermediate goods": "Goods used up as raw material or bought for resale during the same year.",
  "stock": "A quantity measured at a point of time, e.g. wealth on 31 March.",
  "flow": "A quantity measured over a period of time, e.g. income per month.",
  "investment": "Addition to the stock of capital (fixed assets and inventories) during a period.",
  "depreciation": "Fall in the value of fixed capital due to normal wear and tear and expected obsolescence. Also called consumption of fixed capital.",
  "gross investment": "Total addition to capital in a period, including the part that only replaces worn-out capital.",
  "net investment": "Gross investment minus depreciation: the real addition to the capital stock.",
  "end use": "The purpose for which a good is finally used. It decides whether a good is final or intermediate.",
  "durable goods": "Consumption goods that last many years, e.g. a TV or a car.",
  "obsolescence": "Losing value because the asset becomes outdated, e.g. due to new technology."
 },
 "mspec": {
  "flour": {
   "aria": "Flour going to a home is final; flour going to a bakery is intermediate",
   "sky": [
    "$$BG",
    "$$BG2"
   ],
   "ground": "$$A",
   "steps": [
    {
     "t": 200,
     "c": "Mr. Suresh’s mill makes flour 🌾",
     "do": [
      {
       "id": "mill",
       "to": {
        "o": 1
       }
      }
     ]
    },
    {
     "t": 2400,
     "c": "5 kg goes to a <b>home</b> → eaten as rotis",
     "do": [
      {
       "fly": {
        "from": "mill",
        "to": "home",
        "e": "🛍️",
        "n": 2
       }
      },
      {
       "id": "home",
       "to": {
        "o": 1
       }
      }
     ]
    },
    {
     "t": 4800,
     "c": "That flour is a <b>FINAL good</b> ✅",
     "do": [
      {
       "id": "f1",
       "to": {
        "o": 1
       }
      },
      {
       "pulse": "home"
      }
     ]
    },
    {
     "t": 7000,
     "c": "100 kg goes to the <b>bakery</b> → turned into bread for sale",
     "do": [
      {
       "fly": {
        "from": "mill",
        "to": "bak",
        "e": "📦",
        "n": 3
       }
      },
      {
       "id": "bak",
       "to": {
        "o": 1
       }
      }
     ]
    },
    {
     "t": 9400,
     "c": "That flour is an <b>INTERMEDIATE good</b> 🔁",
     "do": [
      {
       "id": "f2",
       "to": {
        "o": 1
       }
      },
      {
       "pulse": "bak"
      }
     ]
    },
    {
     "t": 11800,
     "c": "Same flour, different <b>end use</b>, different type",
     "big": 1,
     "do": []
    }
   ],
   "objs": [
    {
     "id": "mill",
     "k": "box",
     "x": 400,
     "y": 120,
     "w": 160,
     "h": 80,
     "c": "$$P",
     "e": "🌾",
     "t": "Golden Grain Mill",
     "o": 0
    },
    {
     "id": "home",
     "k": "box",
     "x": 170,
     "y": 270,
     "w": 150,
     "h": 70,
     "c": "$$C",
     "e": "🏠",
     "t": "Home",
     "o": 0
    },
    {
     "id": "bak",
     "k": "box",
     "x": 630,
     "y": 270,
     "w": 150,
     "h": 70,
     "c": "$$S",
     "e": "🍞",
     "t": "Bakery",
     "o": 0
    },
    {
     "id": "f1",
     "k": "text",
     "x": 170,
     "y": 205,
     "t": "FINAL",
     "fs": 22,
     "c": "$$C",
     "o": 0
    },
    {
     "id": "f2",
     "k": "text",
     "x": 630,
     "y": 205,
     "t": "INTERMEDIATE",
     "fs": 22,
     "c": "$$S",
     "o": 0
    }
   ]
  },
  "tank": {
   "aria": "Water flowing into a tank: flow per minute, stock at a moment",
   "sky": [
    "$$BG",
    "$$BG2"
   ],
   "ground": "$$A",
   "steps": [
    {
     "t": 200,
     "c": "A tap pours water: <b>10 litres per minute</b>",
     "do": [
      {
       "id": "tap",
       "to": {
        "o": 1
       }
      },
      {
       "fly": {
        "from": "tap",
        "to": "tank",
        "e": "💧",
        "n": 6,
        "gap": 300,
        "arc": 10
       }
      }
     ]
    },
    {
     "t": 3000,
     "c": "“Per minute” needs a <b>period of time</b> → that is a <b>FLOW</b>",
     "do": [
      {
       "id": "fl",
       "to": {
        "o": 1
       }
      }
     ]
    },
    {
     "t": 5600,
     "c": "At 10:05 am the tank holds…",
     "do": [
      {
       "id": "lv",
       "fill": 70,
       "ms": 1500
      },
      {
       "id": "n",
       "to": {
        "o": 1
       }
      },
      {
       "count": {
        "id": "n",
        "to": 500,
        "suf": " litres",
        "ms": 1500
       }
      }
     ]
    },
    {
     "t": 8400,
     "c": "“At 10:05” is a <b>point of time</b> → that is a <b>STOCK</b>",
     "do": [
      {
       "id": "st",
       "to": {
        "o": 1
       }
      }
     ]
    },
    {
     "t": 11000,
     "c": "Income is a flow 🚰 · wealth is a stock 🪣",
     "big": 1,
     "do": []
    }
   ],
   "objs": [
    {
     "id": "tap",
     "k": "emoji",
     "t": "🚰",
     "x": 260,
     "y": 90,
     "fs": 60,
     "o": 0
    },
    {
     "id": "tank",
     "k": "box",
     "x": 400,
     "y": 240,
     "w": 160,
     "h": 120,
     "c": "$$T",
     "sc": "$$H",
     "sw": 4,
     "o": 1
    },
    {
     "id": "lv",
     "k": "bar",
     "x": 250,
     "y": 330,
     "w": 300,
     "h": 20,
     "c": "$$S",
     "t": "Water level"
    },
    {
     "id": "n",
     "k": "text",
     "x": 400,
     "y": 245,
     "t": "0",
     "fs": 26,
     "c": "$$H",
     "o": 0
    },
    {
     "id": "fl",
     "k": "text",
     "x": 150,
     "y": 170,
     "t": "FLOW",
     "fs": 26,
     "c": "$$P",
     "o": 0
    },
    {
     "id": "st",
     "k": "text",
     "x": 650,
     "y": 200,
     "t": "STOCK",
     "fs": 26,
     "c": "$$S",
     "o": 0
    }
   ]
  }
 },
 "steps": [
  {
   "id": "s3",
   "e": "🔁",
   "t": "Final Goods and Intermediate Goods",
   "nav": "Final vs intermediate",
   "pred": [
    "Why would counting both the flour AND the bread in India’s output be a mistake?",
    "Because the flour’s value is already inside the price of the bread. Counting both is <b>double counting</b>. Only <b>final goods</b> are counted in national income."
   ],
   "motion": [
    "One flour, two destinies",
    "flour"
   ],
   "ks": {
    "title": "End use decides: final or intermediate",
    "art": "<svg viewBox=\"0 0 300 200\"><rect width=\"300\" height=\"200\" rx=\"16\" fill=\"$$BG2\"/><rect x=\"110\" y=\"20\" width=\"80\" height=\"50\" rx=\"12\" fill=\"$$P\"/><text x=\"150\" y=\"53\" font-size=\"28\" text-anchor=\"middle\">🌾</text><path d=\"M150 70 C150 100 70 100 70 125 M150 70 C150 100 230 100 230 125\" stroke=\"$$H\" stroke-width=\"4\" fill=\"none\"/><rect x=\"20\" y=\"125\" width=\"100\" height=\"55\" rx=\"12\" fill=\"$$C\"/><text x=\"70\" y=\"150\" font-size=\"12\" font-weight=\"800\" fill=\"#fff\" text-anchor=\"middle\">HOME</text><text x=\"70\" y=\"168\" font-size=\"12\" font-weight=\"800\" fill=\"#fff\" text-anchor=\"middle\">= FINAL</text><rect x=\"180\" y=\"125\" width=\"100\" height=\"55\" rx=\"12\" fill=\"$$S\"/><text x=\"230\" y=\"150\" font-size=\"12\" font-weight=\"800\" fill=\"#fff\" text-anchor=\"middle\">BAKERY</text><text x=\"230\" y=\"168\" font-size=\"11\" font-weight=\"800\" fill=\"#fff\" text-anchor=\"middle\">= INTERMEDIATE</text></svg>",
    "simple": "<b>Final goods</b> are bought for <b>final consumption</b> (by households or government) or for <b>investment</b> (by firms). <b>Intermediate goods</b> are used up in production or resold within the same year.",
    "pts": [
     [
      "🎯",
      "The <b>end use</b> of a good, not its nature, decides whether it is final or intermediate."
     ],
     [
      "🏗️",
      "Capital goods bought by firms (machines) are <b>final goods</b>: they are not resold or used up in the year."
     ],
     [
      "🚫",
      "Only final goods enter national income, to avoid <b>double counting</b>."
     ]
    ],
    "an": "A cricket ball is like a final good when you play with it, but it is like an intermediate good for a shop that resells it.",
    "ex": "Final goods are those goods which are meant for final use, i.e. for consumption or investment, and are not meant for resale or further processing in the same year. Intermediate goods are those goods which are used as raw material for further production or are meant for resale during the same year. Whether a good is final or intermediate depends on its end use."
   },
   "words": [
    "final goods",
    "intermediate goods",
    "end use"
   ],
   "flips": {
    "h": "Tricky cases · tap for details",
    "items": [
     [
      "🥛",
      "Milk to a home",
      "Consumed by the family.",
      "Final good."
     ],
     [
      "🍬",
      "Milk to a sweet shop",
      "Used to make sweets for sale.",
      "Intermediate good."
     ],
     [
      "🔥",
      "Oven bought by a bakery",
      "A fixed asset, not resold, not used up this year.",
      "Final good (investment)."
     ],
     [
      "🖨️",
      "Paper bought by a school office",
      "Government/organisation consumption… but paper for a publisher is raw material.",
      "Depends on end use."
     ],
     [
      "🚗",
      "Car bought by a taxi firm",
      "Capital good used for years.",
      "Final good (investment)."
     ],
     [
      "🛞",
      "Tyres bought by a car maker",
      "Fitted into cars for sale.",
      "Intermediate good."
     ]
    ]
   },
   "act": {
    "type": "scenario",
    "id": "s3sim",
    "who": "harpreet",
    "h": "🧑‍🍳 Simulate · Final or intermediate?",
    "try": "For each purchase, think about the <b>end use</b> before choosing.",
    "learn": "Same good can be both. <b>Resale / used up in production this year → intermediate</b>. <b>Consumption or investment → final</b>.",
    "endText": "🏁 Bakery closed for the day!",
    "items": [
     [
      "I bought 200 kg of sugar for today’s cakes.",
      [
       "Intermediate good",
       "Final good",
       "Capital good"
      ],
      "Used up in production.",
      "harpreet"
     ],
     [
      "I bought a new delivery van for my bakery.",
      [
       "Final good (investment)",
       "Intermediate good",
       "Consumption good"
      ],
      "A fixed asset: final good.",
      "harpreet"
     ],
     [
      "Aarav’s mother bought a cake for his birthday.",
      [
       "Final good",
       "Intermediate good",
       "Capital good"
      ],
      "Final consumption by a household.",
      "aarav"
     ],
     [
      "The mill bought wheat from farmers to grind into flour.",
      [
       "Intermediate good",
       "Final good",
       "Capital good"
      ],
      "Raw material for further processing.",
      "suresh"
     ],
     [
      "Nisha bought steel sheets to make ovens for sale.",
      [
       "Intermediate good",
       "Final good",
       "Consumption good"
      ],
      "Raw material.",
      "nisha"
     ]
    ]
   },
   "quiz": [
    [
     "Whether a good is final or intermediate depends on its…",
     [
      "End use",
      "Price",
      "Size",
      "Durability"
     ],
     "NCERT."
    ],
    [
     "A machine bought by a firm is a…",
     [
      "Final good",
      "Intermediate good",
      "Consumption good",
      "Free good"
     ],
     "It is investment, not resold."
    ],
    [
     "Including intermediate goods in national income causes…",
     [
      "Double counting",
      "Depreciation",
      "Inflation",
      "Nothing"
     ],
     "Their value is already in final goods."
    ]
   ],
   "line": "<b>End use</b> decides: consumption or investment → <b>final</b>; resale or raw material → <b>intermediate</b>."
  },
  {
   "id": "s4",
   "e": "🪣",
   "t": "Stocks and Flows",
   "nav": "Stocks and flows",
   "pred": [
    "“Aarav has ₹5,000 in his bank account” and “Aarav earns ₹500 a week from tuition”. Which one needs a time period to make sense?",
    "The ₹500 a week: income is a <b>flow</b>. ₹5,000 in the bank (on a date) is a <b>stock</b>."
   ],
   "motion": [
    "Tap and tank",
    "tank"
   ],
   "ks": {
    "title": "Point of time vs period of time",
    "art": "<svg viewBox=\"0 0 300 200\"><rect width=\"300\" height=\"200\" rx=\"16\" fill=\"$$BG2\"/><text x=\"70\" y=\"70\" font-size=\"46\" text-anchor=\"middle\">🚰</text><path d=\"M70 80 V120\" stroke=\"$$S\" stroke-width=\"8\" stroke-dasharray=\"6 6\"/><rect x=\"30\" y=\"120\" width=\"80\" height=\"60\" rx=\"8\" fill=\"#fff\" stroke=\"$$H\" stroke-width=\"3\"/><rect x=\"33\" y=\"145\" width=\"74\" height=\"32\" fill=\"$$S\"/><text x=\"200\" y=\"80\" font-size=\"14\" font-weight=\"800\" fill=\"$$P\" text-anchor=\"middle\">FLOW: per period</text><text x=\"200\" y=\"104\" font-size=\"12\" fill=\"$$H\" text-anchor=\"middle\">income, investment</text><text x=\"200\" y=\"140\" font-size=\"14\" font-weight=\"800\" fill=\"$$S\" text-anchor=\"middle\">STOCK: at a point</text><text x=\"200\" y=\"164\" font-size=\"12\" fill=\"$$H\" text-anchor=\"middle\">wealth, capital</text></svg>",
    "simple": "A <b>stock</b> is measured at a <b>point of time</b>. A <b>flow</b> is measured over a <b>period of time</b>.",
    "pts": [
     [
      "🪣",
      "Stocks: wealth, capital, money supply, foreign exchange reserves, population (on a date)."
     ],
     [
      "🚰",
      "Flows: income, investment, depreciation, consumption, exports, interest."
     ],
     [
      "🔗",
      "Flows change stocks: <b>net investment</b> (flow) adds to <b>capital</b> (stock)."
     ]
    ],
    "an": "Your school’s total number of students on 1 July is a stock; new admissions per month is a flow.",
    "ex": "Stock is a quantity measured at a particular point of time, e.g. capital, wealth, money supply. Flow is a quantity measured over a period of time, e.g. national income, investment, consumption. Stocks have no time dimension, while flows have a time dimension."
   },
   "words": [
    "stock",
    "flow"
   ],
   "flips": {
    "h": "Stock or flow? · tap for details",
    "items": [
     [
      "🏦",
      "Bank balance",
      "Measured on a date.",
      "Stock."
     ],
     [
      "💼",
      "Salary",
      "Per month.",
      "Flow."
     ],
     [
      "🏭",
      "Capital",
      "Value of machines on 31 March.",
      "Stock."
     ],
     [
      "🔥",
      "Investment",
      "Addition to capital during the year.",
      "Flow."
     ],
     [
      "🔧",
      "Depreciation",
      "Wear and tear during the year.",
      "Flow."
     ],
     [
      "💵",
      "Money supply",
      "Money with the public on a date.",
      "Stock."
     ]
    ]
   },
   "act": {
    "type": "sort",
    "id": "s4sort",
    "h": "🗂️ Your turn · Stock or flow?",
    "try": "Add the words <b>“per year”</b>. If the sentence still makes sense, it is a flow.",
    "learn": "Point of time → <b>stock</b>. Period of time → <b>flow</b>.",
    "buckets": [
     "Stock",
     "Flow"
    ],
    "items": [
     [
      "Wealth of a family",
      0,
      "At a point of time."
     ],
     [
      "National income",
      1,
      "Per year."
     ],
     [
      "Water in a dam on 1 June",
      0,
      "At a point."
     ],
     [
      "Exports of India",
      1,
      "Per year."
     ],
     [
      "Capital stock of the bakery",
      0,
      "On a date."
     ],
     [
      "Interest earned on a deposit",
      1,
      "Per period."
     ],
     [
      "Foreign exchange reserves",
      0,
      "On a date."
     ]
    ]
   },
   "quiz": [
    [
     "Which is a stock?",
     [
      "Wealth",
      "Income",
      "Investment",
      "Depreciation"
     ],
     "Point of time."
    ],
    [
     "Which is a flow?",
     [
      "National income",
      "Money supply",
      "Capital",
      "Bank balance"
     ],
     "Period of time."
    ],
    [
     "Flows have a…",
     [
      "Time dimension",
      "Fixed value",
      "Point of time",
      "Physical form only"
     ],
     "Measured per period."
    ]
   ],
   "line": "<b>Stock</b> = at a point of time · <b>Flow</b> = over a period of time."
  }
 ],
 "board": {
  "after": 0,
  "title": "Concept Town in 3D",
  "try": "Pick a mode. In <b>Goods flow</b>, switch the flows on and off. In <b>Capital tower</b>, press each button to see how capital builds up.",
  "modes": [
   {
    "id": "flow",
    "label": "🔁 Goods flow",
    "kit": "flow",
    "tag": "FINAL vs INTERMEDIATE",
    "title": "Who sells what to whom?",
    "intro": "Orange flows carry <b>intermediate goods</b>; teal flows carry <b>final goods</b>. Tap a building or a flow.",
    "nodes": [
     {
      "id": "farm",
      "label": "Wheat farm",
      "emoji": "🌾",
      "x": -17,
      "z": -6,
      "shape": "box",
      "color": "$$A",
      "info": "Sells wheat to the mill: an <b>intermediate</b> good."
     },
     {
      "id": "mill",
      "label": "Golden Grain Mill",
      "emoji": "🏭",
      "x": -6,
      "z": -8,
      "shape": "factory",
      "color": "$$P",
      "info": "Turns wheat into flour. Sells flour to the bakery (intermediate) and to homes (final)."
     },
     {
      "id": "bak",
      "label": "Fluffy Loaf Bakery",
      "emoji": "🍞",
      "x": 6,
      "z": -2,
      "shape": "shop",
      "color": "$$S",
      "info": "Buys flour (intermediate) and an oven (capital good = final). Sells bread to homes (final)."
     },
     {
      "id": "oven",
      "label": "OvenTech",
      "emoji": "⚙️",
      "x": -4,
      "z": 8,
      "shape": "tower",
      "color": "$$H2",
      "info": "Nisha makes ovens. An oven sold to the bakery is a <b>capital good</b>, counted as a <b>final good</b> (investment)."
     },
     {
      "id": "home",
      "label": "Homes",
      "emoji": "🏠",
      "x": 16,
      "z": 6,
      "shape": "house",
      "color": "$$C",
      "info": "Households buy bread and flour for consumption: <b>final goods</b>."
     }
    ],
    "edges": [
     {
      "from": "farm",
      "to": "mill",
      "color": "$$P",
      "label": "wheat",
      "group": "int"
     },
     {
      "from": "mill",
      "to": "bak",
      "color": "$$P",
      "label": "flour",
      "group": "int"
     },
     {
      "from": "mill",
      "to": "home",
      "color": "$$S",
      "label": "flour for rotis",
      "group": "fin",
      "side": 1
     },
     {
      "from": "bak",
      "to": "home",
      "color": "$$S",
      "label": "bread",
      "group": "fin"
     },
     {
      "from": "oven",
      "to": "bak",
      "color": "$$S",
      "label": "oven (capital)",
      "group": "fin"
     }
    ],
    "groups": [
     {
      "id": "int",
      "label": "Intermediate flows",
      "say": [
       "Intermediate goods: used up or resold within the year. <b>Not</b> counted separately in national income.",
       "Intermediate flows hidden."
      ]
     },
     {
      "id": "fin",
      "label": "Final flows",
      "say": [
       "Final goods: consumption by homes, or investment (the oven). These are counted.",
       "Final flows hidden."
      ]
     }
    ],
    "note": "Only the <b>teal</b> flows (final goods) are counted in national income."
   },
   {
    "id": "tower",
    "label": "🏗️ Capital tower",
    "kit": "stack",
    "tag": "STOCK and FLOW",
    "title": "How the capital stock grows",
    "intro": "Each block is a year’s capital. Tap the buttons.",
    "layers": [
     {
      "label": "Opening capital ₹10 L",
      "h": 4,
      "color": "$$S",
      "info": "The <b>stock</b> of capital on 1 April."
     },
     {
      "label": "Gross investment ₹3 L",
      "h": 1.6,
      "color": "$$P",
      "info": "A <b>flow</b>: total new capital added during the year."
     },
     {
      "label": "Depreciation −₹1 L",
      "h": 0.8,
      "color": "$$C",
      "info": "A <b>flow</b>: wear and tear that must be replaced."
     }
    ],
    "steps": [
     {
      "label": "1 April (stock)",
      "show": [
       0
      ],
      "note": "Opening capital stock: <b>₹10 lakh</b> on a date. A stock."
     },
     {
      "label": "+ Gross investment",
      "show": [
       0,
       1
      ],
      "note": "Added during the year: ₹3 lakh. A flow."
     },
     {
      "label": "− Depreciation",
      "show": [
       0,
       1,
       2
      ],
      "note": "₹1 lakh of the new capital only replaces wear and tear."
     },
     {
      "label": "31 March (stock)",
      "show": [
       0,
       1
      ],
      "note": "Closing stock = 10 + (3 − 1) = <b>₹12 lakh</b>. Net investment ₹2 lakh was the real addition."
     }
    ],
    "note": "Tap the buttons in order."
   },
   {
    "id": "bars",
    "label": "📊 Gross vs net",
    "kit": "bars",
    "tag": "COMPARE",
    "title": "Three businesses, one year (made-up numbers)",
    "intro": "Orange = gross investment, teal = net investment (₹ lakh). The gap is depreciation.",
    "series": [
     {
      "name": "Gross investment",
      "color": "$$P"
     },
     {
      "name": "Net investment",
      "color": "$$S"
     }
    ],
    "unit": "₹ lakh",
    "cats": [
     {
      "label": "Bakery",
      "values": [
       3,
       2
      ],
      "info": "Depreciation ₹1 lakh."
     },
     {
      "label": "Flour mill",
      "values": [
       8,
       5
      ],
      "info": "Depreciation ₹3 lakh."
     },
     {
      "label": "OvenTech",
      "values": [
       6,
       6
      ],
      "info": "New firm: almost no depreciation yet."
     }
    ]
   }
  ]
 },
 "summary": {
  "blocks": [
   {
    "type": "cmp",
    "h": "Quick revision table",
    "heads": [
     "Concept",
     "Meaning",
     "Example"
    ],
    "rows": [
     [
      "Macroeconomics",
      "Economy as a whole (aggregates)",
      "National income, inflation"
     ],
     [
      "Consumption good",
      "Satisfies wants directly",
      "Milk, TV for a home"
     ],
     [
      "Capital good",
      "Fixed asset used for years",
      "Oven, tractor"
     ],
     [
      "Final good",
      "For consumption or investment",
      "Bread for a home, oven for a bakery"
     ],
     [
      "Intermediate good",
      "Used up in production or resold in the year",
      "Flour for a bakery"
     ],
     [
      "Stock",
      "At a point of time",
      "Wealth, capital"
     ],
     [
      "Flow",
      "Over a period of time",
      "Income, investment"
     ],
     [
      "Net investment",
      "Gross investment − depreciation",
      "₹3 L − ₹1 L = ₹2 L"
     ]
    ]
   }
  ],
  "line": "Macro looks at the whole economy; count only <b>final goods</b>; stocks are at a point, flows over a period; <b>net = gross − depreciation</b>."
 },
 "exam": {
  "qs": [
   {
    "m": 1,
    "q": "Define depreciation.",
    "pts": [
     "Fall in the value of fixed capital",
     "due to normal wear and tear and expected obsolescence"
    ]
   },
   {
    "m": 3,
    "q": "Distinguish between stock and flow with one example each.",
    "pts": [
     "Stock is measured at a point of time; flow over a period of time",
     "Stock has no time dimension; flow has a time dimension",
     "Example: wealth/capital (stock); income/investment (flow)"
    ]
   }
  ],
  "mcq": [
   [
    "Assertion (A): Flour is always an intermediate good. Reason (R): The end use of a good decides whether it is final or intermediate.",
    [
     "A is false, but R is true",
     "Both A and R are true, and R explains A",
     "Both A and R are true, but R does not explain A",
     "A is true, but R is false"
    ],
    "Flour bought by a household is a final good.",
    "A–R"
   ],
   [
    "Which of the following is NOT a flow?",
    [
     "Capital",
     "Investment",
     "Depreciation",
     "Income"
    ],
    "Capital is a stock."
   ],
   [
    "Gross investment ₹200 crore, net investment ₹150 crore. Depreciation is…",
    [
     "₹50 crore",
     "₹350 crore",
     "₹150 crore",
     "₹200 crore"
    ],
    "200 − 150."
   ]
  ]
 },
 "next": "Part 2 · Circular Flow of Income"
};
