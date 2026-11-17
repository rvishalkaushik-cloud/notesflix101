/* Revision Arena · Class XII Entrepreneurship · Unit 3 · Enterprise Marketing. Original cases; figures recomputed. */
NFArena.register({
  id: "ent-u3", cls: "XII", subject: "Entrepreneurship", unit: "Unit", num: "3",
  title: "Enterprise Marketing",
  tagline: "Marketing goals and the mix, branding and packaging, pricing methods, distribution, and promotion.",
  notesLink: "../#ent-u3",
  concepts: {
    goals: { n: "Goals of a business and the marketing concept", s: "compass" },
    mix: { n: "Marketing mix (4Ps)", s: "compass" },
    seg: { n: "Market segmentation and targeting", s: "compass" },
    brand: { n: "Branding", s: "brand" },
    pack: { n: "Packaging and labelling", s: "brand" },
    pricing: { n: "Pricing methods", s: "price" },
    place: { n: "Channels of distribution", s: "price" },
    promo: { n: "Promotion tools", s: "promo" },
    ads: { n: "Advertising and media", s: "promo" }
  },
  overview: {
    text: "Marketing is how an enterprise finds customers and keeps them. The entrepreneur sets <b>goals</b>, chooses a <b>target market</b>, and blends the <b>4Ps: product, price, place and promotion</b>. A strong <b>brand</b> and smart <b>packaging</b> make the product stand out, the right <b>price</b> brings profit, <b>distribution</b> puts it within reach, and <b>promotion</b> tells customers about it.",
    points: [
      "Goals: <b>profit, growth, market share, customer satisfaction, social responsibility</b>.",
      "Cost-plus price = <b>Cost + markup</b> (e.g. cost ₹200 + 25% = ₹250).",
      "Penetration pricing: low price to win the market; <b>skimming</b>: high launch price.",
      "Promotion mix: <b>advertising, personal selling, sales promotion, public relations</b>."
    ],
    map: {
      center: "Enterprise Marketing",
      branches: [
        { t: "Compass", c: ["Goals", "Segmentation, targeting", "4Ps"] },
        { t: "Brand studio", c: ["Brand name, logo", "Packaging", "Labelling"] },
        { t: "Price and place", c: ["Cost-plus, competitive", "Penetration, skimming", "Channels"] },
        { t: "Promotion", c: ["Advertising", "Sales promotion", "Personal selling, PR"] }
      ]
    }
  },
  sections: [
    {
      id: "compass", title: "Marketing goals and the mix", sub: "Who, what and how", icon: "🧭", color: "#4da3ff",
      quick: [
        "<b>Goals of an enterprise</b>: <b>profit</b> (to survive and grow), <b>growth</b> (sales, outlets), <b>market share</b>, <b>customer satisfaction</b>, <b>social responsibility</b>.",
        "<b>Marketing concept</b>: identify customer needs first and then make products that satisfy them better than competitors.",
        "<b>Market segmentation</b>: dividing a market into groups with similar needs (by age, income, location, lifestyle). <b>Targeting</b>: choosing the segment(s) to serve. <b>Positioning</b>: the image the product should hold in customers' minds.",
        "<b>Marketing mix (4Ps)</b>: <b>Product</b> (features, quality, design, brand); <b>Price</b> (amount charged, discounts, credit); <b>Place</b> (channels, stores, logistics); <b>Promotion</b> (communicating with customers).",
        "For services, three more Ps: <b>people, process, physical evidence</b>."
      ],
      cards: [
        { t: "Example: a protein bar", tag: "eg", b: "<p><b>Segment:</b> gym-goers aged 18–35 in cities. <b>Product:</b> 20 g protein, no sugar. <b>Price:</b> ₹99. <b>Place:</b> gyms, online. <b>Promotion:</b> fitness influencers.</p>" }
      ],
      exam: ["Write the 4Ps in order: <b>product, price, place, promotion</b>."]
    },
    {
      id: "brand", title: "Branding, packaging and labelling", sub: "Making the product stand out", icon: "🏷️", color: "#22c55e",
      quick: [
        "<b>Brand</b>: a name, term, sign, symbol or design (or a combination) that identifies a seller's goods and distinguishes them. <b>Brand name</b>: the part that can be spoken. <b>Brand mark</b>: the symbol or logo. <b>Trademark</b>: a brand legally registered and protected.",
        "<b>A good brand name</b> is short, easy to pronounce and remember, suggests the product's benefit, is distinctive, and can be registered.",
        "<b>Benefits of branding</b>: product differentiation, customer loyalty, easier advertising, premium pricing, easier introduction of new products.",
        "<b>Packaging</b>: designing and producing the container or wrapper. <b>Levels</b>: primary (immediate container, e.g. bottle), secondary (extra layer, e.g. box), transportation (for shipping). Functions: protection, convenience, identification, promotion ('silent salesman').",
        "<b>Labelling</b>: information printed on or attached to the package: name, ingredients, weight, price (MRP), date of manufacture and expiry, manufacturer's address, directions for use. Some details are required by law."
      ],
      cards: [
        { t: "Why packaging sells", tag: "why", b: "<p>On a crowded shelf, packaging is often the first thing a buyer notices. Attractive, convenient packaging can win the sale before any salesperson speaks.</p>" }
      ],
      exam: ["Brand name = spoken part; brand mark = symbol."]
    },
    {
      id: "price", title: "Pricing and distribution", sub: "How much, and where", icon: "💰", color: "#f5b301",
      quick: [
        "<b>Factors affecting price</b>: cost of production, demand, competition, government regulation, marketing objectives.",
        "<b>Cost-plus pricing</b>: price = cost + a fixed markup percentage.",
        "<b>Competition-based pricing</b>: price set in line with competitors (at, below or above).",
        "<b>Perceived-value (value-based) pricing</b>: price based on what customers believe the product is worth.",
        "<b>Penetration pricing</b>: low introductory price to gain market share quickly. <b>Skimming pricing</b>: high introductory price for early buyers, reduced later.",
        "<b>Channels of distribution</b>: <b>zero-level</b> (direct: manufacturer → consumer, e.g. own website, factory outlet); <b>one-level</b> (manufacturer → retailer → consumer); <b>two-level</b> (manufacturer → wholesaler → retailer → consumer); <b>three-level</b> (adds an agent).",
        "Choice of channel depends on the product (perishable, technical), market (size, spread), company resources and middlemen available."
      ],
      table: { cap: "Pricing methods", head: ["Method", "Basis", "Example"], rows: [["Cost-plus", "Cost + markup", "Cost ₹200, 25% markup → ₹250"], ["Competition", "Rivals' prices", "Match nearby cafés at ₹120"], ["Perceived value", "Buyer's view of worth", "Designer bag at ₹9,000"], ["Penetration", "Low launch price", "New app ₹1 for first month"], ["Skimming", "High launch price", "New smartphone ₹1,20,000"]] },
      cards: [
        { t: "Worked example", tag: "eg", b: "<p>A candle costs ₹80 to make. Markup 40%. Cost-plus price = 80 + 32 = <b>₹112</b>.</p>" }
      ],
      exam: ["'Sold directly through the firm's website' → <b>zero-level channel</b>."]
    },
    {
      id: "promo", title: "Promotion", sub: "Telling and persuading", icon: "📣", color: "#ff5470",
      quick: [
        "<b>Promotion</b>: communicating with customers to inform, persuade and remind them.",
        "<b>Advertising</b>: paid, impersonal communication through mass media by an identified sponsor. Media: newspapers, TV, radio, outdoor, cinema, digital and social media.",
        "<b>Personal selling</b>: face-to-face presentation by a salesperson; two-way and flexible; useful for costly or technical products.",
        "<b>Sales promotion</b>: short-term incentives to boost sales: discounts, free samples, buy-one-get-one, coupons, contests, exchange offers.",
        "<b>Public relations and publicity</b>: building goodwill; publicity is unpaid coverage in the media.",
        "<b>Digital marketing</b>: social media, search ads, email, influencers; measurable and low-cost for start-ups.",
        "Choosing media depends on target audience, cost, reach, the product and the message."
      ],
      cards: [
        { t: "Advertising vs personal selling", tag: "def", b: "<p><b>Advertising</b> reaches many people at once, is impersonal and one-way. <b>Personal selling</b> reaches one at a time, is personal and two-way.</p>" }
      ],
      exam: ["'Free sample with every purchase' → <b>sales promotion</b>, not advertising."]
    }
  ],
  flashcards: [
    { k: "Goals", c: "goals", q: "Name four goals of an enterprise.", a: "Profit, growth, market share, customer satisfaction (also social responsibility)." },
    { k: "Mix", c: "mix", q: "What are the 4Ps?", a: "Product, price, place, promotion." },
    { k: "Mix", c: "mix", q: "Three extra Ps for services?", a: "People, process, physical evidence." },
    { k: "Segment", c: "seg", q: "What is market segmentation?", a: "Dividing a market into groups with similar needs." },
    { k: "Brand", c: "brand", q: "Brand name vs brand mark?", a: "Brand name can be spoken; brand mark is the symbol or logo." },
    { k: "Brand", c: "brand", q: "What is a trademark?", a: "A brand legally registered and protected." },
    { k: "Brand", c: "brand", q: "Two qualities of a good brand name?", a: "Short and easy to remember (also suggestive, distinctive, registrable)." },
    { k: "Pack", c: "pack", q: "Three levels of packaging?", a: "Primary, secondary, transportation." },
    { k: "Pack", c: "pack", q: "Why is packaging called a 'silent salesman'?", a: "It attracts and persuades buyers on the shelf." },
    { k: "Pack", c: "pack", q: "What is labelling?", a: "Information printed on or attached to the package." },
    { k: "Price", c: "pricing", q: "Cost-plus price formula?", a: "Cost + markup." },
    { k: "Price", c: "pricing", q: "What is penetration pricing?", a: "A low introductory price to gain market share." },
    { k: "Price", c: "pricing", q: "What is skimming pricing?", a: "A high introductory price, reduced later." },
    { k: "Place", c: "place", q: "What is a zero-level channel?", a: "Direct sale from manufacturer to consumer." },
    { k: "Place", c: "place", q: "What is a two-level channel?", a: "Manufacturer → wholesaler → retailer → consumer." },
    { k: "Promo", c: "promo", q: "Name the four promotion tools.", a: "Advertising, personal selling, sales promotion, public relations." },
    { k: "Promo", c: "promo", q: "Give two sales promotion techniques.", a: "Discounts and free samples (also BOGO, coupons, contests)." },
    { k: "Ads", c: "ads", q: "Define advertising.", a: "Paid, impersonal communication through mass media by an identified sponsor." }
  ],
  cases: [
    {
      id: "c1", lvl: 1, title: "The 4Ps of Chai Point",
      text: "<p><b>Ritu</b> launched 'Kadak', a masala tea premix in 10 sachets. She priced the box at ₹120, sold it through kirana stores and her own website, and ran ads on Instagram with a 'first box free' coupon.</p>",
      qs: [
        { q: "Identify the four elements of the marketing mix in the case.", m: 4, type: "Identify", c: "mix", ans: "Product: tea premix; Price ₹120; Place: kirana and website; Promotion: Instagram, coupon", keys: ["product", "price", "place", "promotion"], hint: "Four Ps.",
          points: [{ p: "<b>Product</b>: 'Kadak' masala tea premix, 10 sachets", m: 1, k: ["product"] }, { p: "<b>Price</b>: ₹120 a box", m: 1, k: ["price", "120"] }, { p: "<b>Place</b>: kirana stores and own website", m: 1, k: ["place"] }, { p: "<b>Promotion</b>: Instagram ads and coupon", m: 1, k: ["promotion"] }],
          structure: ["P + case line, four times."],
          model: "<p><b>Product:</b> 'Kadak' masala tea premix in 10 sachets.</p><p><b>Price:</b> ₹120 per box.</p><p><b>Place:</b> kirana stores and her own website.</p><p><b>Promotion:</b> Instagram ads and a 'first box free' coupon.</p>" }
      ]
    },
    {
      id: "c2", lvl: 2, title: "The name on the jar",
      text: "<p>Two sisters make honey in Uttarakhand. They chose the name 'Himbee', a bee logo on a mountain, and registered it. The honey comes in a glass jar, packed in a printed cardboard box, and shipped in crates. The jar shows ingredients, net weight, MRP, best-before date and their address.</p>",
      qs: [
        { q: "Identify the brand elements, the levels of packaging and the purpose of the label.", m: 6, type: "Identify", c: "brand", ans: "Brand name, brand mark, trademark; primary, secondary, transportation; labelling informs", keys: ["brand name", "mark", "trademark", "primary", "secondary"], hint: "Name, logo, registration; jar, box, crate.",
          points: [{ p: "Brand name: 'Himbee'", m: 1, k: ["brand name"] }, { p: "Brand mark: bee logo on a mountain", m: 1, k: ["mark", "logo"] }, { p: "Trademark: registered brand", m: 1, k: ["trademark"] }, { p: "Primary packaging: glass jar", m: 1, k: ["primary"] }, { p: "Secondary: printed box; transportation: crates", m: 1, k: ["secondary", "transport"] }, { p: "Labelling: informs buyers and meets legal requirements", m: 1, k: ["label", "inform", "legal"] }],
          structure: ["Three brand elements, three packaging levels, label purpose."],
          model: "<p><b>Branding:</b> 'Himbee' is the <b>brand name</b>; the bee-on-mountain logo is the <b>brand mark</b>; once registered, it is a <b>trademark</b>.</p><p><b>Packaging:</b> the glass jar is <b>primary</b>, the printed cardboard box is <b>secondary</b>, and the shipping crates are <b>transportation</b> packaging.</p><p><b>Labelling:</b> ingredients, weight, MRP, best-before date and address <b>inform the buyer</b> and meet <b>legal requirements</b>.</p>" }
      ]
    },
    {
      id: "c3", lvl: 2, title: "Pricing the planter",
      text: "<p><b>EcoPot</b> makes coir planters at a cost of ₹150 each and adds a 30% markup. Its rival sells similar planters at ₹199. When EcoPot launched a new self-watering planter, it priced it at ₹999 for the first three months, then cut it to ₹749.</p>",
      qs: [
        { q: "Calculate the cost-plus price and identify the pricing methods in the case.", m: 4, type: "Calculate and identify", c: "pricing", ans: "₹195 cost-plus; competition-based comparison; skimming for the new planter", keys: ["195", "skimming"], hint: "150 + 45.",
          points: [{ p: "Markup = 30% of 150 = ₹45", m: 1, k: ["45"] }, { p: "Cost-plus price = 150 + 45 = <b>₹195</b>", m: 1, k: ["195"] }, { p: "Comparing with rival's ₹199: competition-based pricing", m: 1, k: ["competit"] }, { p: "₹999 then ₹749: <b>skimming pricing</b>", m: 1, k: ["skimming"] }],
          structure: ["Markup, price, two methods."],
          model: "<p>Markup = 30% × ₹150 = ₹45, so the <b>cost-plus price</b> = 150 + 45 = <b>₹195</b>.</p><p>This is just below the rival's ₹199, showing attention to <b>competition-based pricing</b>.</p><p>The self-watering planter at ₹999 at launch, cut to ₹749 later, is <b>skimming pricing</b>.</p>" }
      ]
    },
    {
      id: "c4", lvl: 3, title: "Getting the curd to the customer",
      text: "<p>The dairy cooperative <b>Doodhganga</b> sells fresh curd through 400 retailers in Pune, bought from three wholesalers. It also has a few company-owned parlours. For its new high-end cheese, it uses a sales agent who supplies wholesalers in other cities.</p>",
      qs: [
        { q: "Identify the channels of distribution used and explain two factors that affect the choice of channel.", m: 6, type: "Identify and explain", c: "place", ans: "Zero-level (parlours); two-level (wholesaler-retailer); three-level (agent); factors: perishability, market spread", keys: ["zero", "two-level", "three-level", "perishab"], hint: "Parlours, wholesalers, agent.",
          points: [{ p: "<b>Zero-level</b>: company-owned parlours", m: 1, k: ["zero"] }, { p: "<b>Two-level</b>: wholesaler → retailer → consumer", m: 1, k: ["two"] }, { p: "<b>Three-level</b>: agent → wholesaler → retailer for cheese", m: 1, k: ["three", "agent"] }, { p: "Factor: perishable product needs short channel", m: 1, k: ["perishab", "short"] }, { p: "Factor: wide market spread needs longer channel", m: 1, k: ["market", "spread", "wide"] }, { p: "Factor: company resources / product value", m: 1, k: ["resource", "cost", "value"] }],
          structure: ["Three channels; factors."],
          model: "<p><b>Channels:</b> (i) company-owned parlours: <b>zero-level</b> (direct); (ii) curd through wholesalers and retailers: <b>two-level</b>; (iii) cheese through an agent, wholesalers and retailers: <b>three-level</b>.</p><p><b>Factors:</b> (i) <b>nature of product:</b> fresh curd is perishable, so it needs a short, fast channel; (ii) <b>market spread:</b> cheese sold in many cities needs a longer channel with an agent; (iii) <b>resources:</b> own parlours need more investment.</p>" }
      ]
    },
    {
      id: "c5", lvl: 3, title: "Spreading the word",
      text: "<p>To launch its e-scooter, <b>Zoomo</b> ran TV ads and YouTube videos, gave a ₹5,000 exchange offer on old petrol scooters, had trained staff give test rides and explain features at showrooms, and invited journalists for a free ride that led to newspaper stories.</p>",
      qs: [
        { q: "Identify the promotion tools used and explain why personal selling suits this product.", m: 4, type: "Identify and explain", c: "promo", ans: "Advertising, sales promotion, personal selling, publicity; costly technical product", keys: ["advertis", "sales promotion", "personal selling", "publicity"], hint: "TV, exchange offer, test rides, journalists.",
          points: [{ p: "<b>Advertising</b>: TV ads, YouTube", m: 1, k: ["advertis"] }, { p: "<b>Sales promotion</b>: exchange offer", m: 1, k: ["sales promotion"] }, { p: "<b>Personal selling</b> and <b>publicity</b>: test rides; newspaper stories", m: 1, k: ["personal selling", "publicity", "pr"] }, { p: "Personal selling suits costly, technical products needing explanation", m: 1, k: ["costly", "technical", "explain", "expensive"] }],
          structure: ["Four tools; reason."],
          model: "<p><b>Tools:</b> TV and YouTube ads are <b>advertising</b>; the ₹5,000 exchange offer is <b>sales promotion</b>; test rides and explanations at showrooms are <b>personal selling</b>; free rides for journalists leading to news stories are <b>publicity / public relations</b>.</p><p><b>Why personal selling:</b> an e-scooter is <b>costly and technical</b>; buyers have questions about range, charging and safety, which a salesperson can answer face to face.</p>" }
      ]
    }
  ],
  questions: [
    { id: "q1", t: "mcq", d: "E", m: 1, c: "mix", q: "Which is NOT one of the 4Ps?", o: ["Product", "Price", "People", "Promotion"], a: 2, hint: "People is a service P.", why: "<b>People</b> is an extra P for services." },
    { id: "q2", t: "mcq", d: "E", m: 1, c: "brand", q: "The symbol of a brand is the:", o: ["Brand name", "Brand mark", "Label", "Package"], a: 1, hint: "Logo.", why: "<b>Brand mark</b>." },
    { id: "q3", t: "mcq", d: "E", m: 1, c: "place", q: "Selling directly through the firm's own website is a:", o: ["Zero-level channel", "One-level channel", "Two-level channel", "Three-level channel"], a: 0, hint: "No middlemen.", why: "<b>Zero-level</b>." },
    { id: "q4", t: "mcq", d: "M", m: 1, c: "pricing", q: "Cost ₹240, markup 25%. Cost-plus price:", o: ["₹265", "₹280", "₹300", "₹320"], a: 2, hint: "240 + 60.", why: "<b>₹300</b>." },
    { id: "q5", t: "mcq", d: "M", m: 1, c: "pricing", q: "A low introductory price to capture the market is:", o: ["Skimming", "Penetration", "Cost-plus", "Perceived value"], a: 1, hint: "Enter deep.", why: "<b>Penetration</b>." },
    { id: "q6", t: "mcq", d: "M", m: 1, c: "promo", q: "'Buy one, get one free' is:", o: ["Advertising", "Personal selling", "Sales promotion", "Publicity"], a: 2, hint: "Short-term incentive.", why: "<b>Sales promotion</b>." },
    { id: "q7", t: "mcq", d: "C", m: 1, c: "pack", q: "The shipping crate is which level of packaging?", o: ["Primary", "Secondary", "Transportation", "Label"], a: 2, hint: "For shipping.", why: "<b>Transportation</b>." },
    { id: "q8", t: "mcq", d: "C", m: 1, c: "ads", q: "Unpaid media coverage of a firm is:", o: ["Advertising", "Publicity", "Sales promotion", "Personal selling"], a: 1, hint: "Free.", why: "<b>Publicity</b>." },
    { id: "q9", t: "ar", d: "M", m: 1, c: "pack", q: "Packaging is called a silent salesman.", r: "Attractive packaging draws buyers on the shelf.", a: 0, hint: "Shelf appeal.", why: "Both true; R explains A." },
    { id: "q10", t: "ar", d: "M", m: 1, c: "pricing", q: "Skimming pricing sets a low launch price.", r: "Skimming targets early buyers willing to pay more.", a: 3, hint: "High launch.", why: "A false; R true." },
    { id: "q11", t: "ar", d: "C", m: 1, c: "promo", q: "Personal selling suits technical products.", r: "It allows two-way communication and demonstrations.", a: 0, hint: "Explain.", why: "Both true; R explains A." },
    { id: "q12", t: "tf", d: "E", m: 1, c: "brand", q: "A registered brand is called a trademark.", a: true, hint: "Legal.", why: "True." },
    { id: "q13", t: "tf", d: "E", m: 1, c: "ads", q: "Advertising is a personal form of communication.", a: false, hint: "Mass media.", why: "False: impersonal." },
    { id: "q14", t: "tf", d: "M", m: 1, c: "place", q: "A two-level channel includes a wholesaler and a retailer.", a: true, hint: "Two middlemen.", why: "True." },
    { id: "q15", t: "match", d: "E", m: 4, c: "promo", q: "Match the activity with the promotion tool.", pairs: [["TV commercial", "Advertising"], ["Salesperson's demo", "Personal selling"], ["10% festive discount", "Sales promotion"], ["News story about the firm", "Publicity"]], hint: "Four tools.", why: "Each activity is one tool." },
    { id: "q16", t: "match", d: "M", m: 4, c: "pricing", q: "Match the situation with the pricing method.", pairs: [["Cost + 20%", "Cost-plus"], ["Same as rival's price", "Competition-based"], ["High launch price, cut later", "Skimming"], ["₹1 trial for new app", "Penetration"]], hint: "Pricing.", why: "Each situation is one method." },
    { id: "q17", t: "fill", d: "E", m: 1, c: "brand", q: "The part of a brand that can be spoken is the brand ______.", acc: ["name"], hint: "Say it.", why: "Name." },
    { id: "q18", t: "fill", d: "M", m: 1, c: "seg", q: "Dividing a market into groups with similar needs is market ______.", acc: ["segmentation"], hint: "Segments.", why: "Segmentation." },
    { id: "q19", t: "fill", d: "M", m: 1, c: "pack", q: "The immediate container of a product is ______ packaging.", acc: ["primary"], hint: "First layer.", why: "Primary." },
    { id: "q20", t: "short", d: "E", m: 1, c: "mix", q: "Which P of marketing deals with channels and stores?", acc: ["place"], hint: "Where.", why: "Place." },
    { id: "q21", t: "short", d: "M", m: 1, c: "pack", q: "Name one item that must appear on a label.", acc: ["mrp", "price", "weight", "ingredients", "expiry date", "date of manufacture", "address", "net weight"], hint: "Legal info.", why: "MRP, weight, ingredients, dates, address." },
    { id: "q22", t: "sa3", d: "E", m: 3, c: "brand", q: "State three qualities of a good brand name.", hint: "Short, suggestive, distinctive.", why: "",
      points: [{ p: "Short and easy to pronounce/remember", m: 1, k: ["short", "easy", "remember"] }, { p: "Suggests the product's benefit", m: 1, k: ["suggest", "benefit"] }, { p: "Distinctive and registrable", m: 1, k: ["distinct", "regist"] }],
      model: "<p>(i) <b>Short and easy</b> to pronounce and remember.</p><p>(ii) <b>Suggests the benefit</b> or use of the product.</p><p>(iii) <b>Distinctive</b> and capable of legal <b>registration</b>.</p>" },
    { id: "q23", t: "sa3", d: "M", m: 3, c: "pack", q: "Explain three functions of packaging.", hint: "Protect, identify, promote.", why: "",
      points: [{ p: "Protection", m: 1, k: ["protect"] }, { p: "Convenience / identification", m: 1, k: ["convenien", "identif"] }, { p: "Promotion (silent salesman)", m: 1, k: ["promot", "silent"] }],
      model: "<p>(i) <b>Protection:</b> prevents damage, spoilage and leakage.</p><p>(ii) <b>Convenience and identification:</b> easy to carry, store and recognise.</p><p>(iii) <b>Promotion:</b> attractive packs act as a 'silent salesman' on the shelf.</p>" },
    { id: "q24", t: "sa4", d: "M", m: 4, c: "pricing", q: "Explain four methods of pricing.", hint: "Cost-plus, competition, penetration, skimming.", why: "",
      points: [{ p: "Cost-plus", m: 1, k: ["cost-plus", "cost plus", "markup"] }, { p: "Competition-based", m: 1, k: ["competit"] }, { p: "Penetration", m: 1, k: ["penetrat"] }, { p: "Skimming / perceived value", m: 1, k: ["skim", "perceived", "value"] }],
      model: "<p>(i) <b>Cost-plus:</b> cost plus a fixed markup.</p><p>(ii) <b>Competition-based:</b> set at, above or below rivals' prices.</p><p>(iii) <b>Penetration:</b> low launch price to win market share quickly.</p><p>(iv) <b>Skimming:</b> high launch price for early buyers, lowered later.</p>" },
    { id: "q25", t: "sa4", d: "C", m: 4, c: "promo", q: "Distinguish between advertising and personal selling on four bases.", hint: "Reach, nature, flow, cost.", why: "",
      points: [{ p: "Impersonal vs personal", m: 1, k: ["personal", "impersonal"] }, { p: "Many at once vs one at a time", m: 1, k: ["many", "mass", "one"] }, { p: "One-way vs two-way", m: 1, k: ["one-way", "two-way"] }, { p: "Low cost per person vs high; flexibility", m: 1, k: ["cost", "flexib"] }],
      model: "<table><tr><th>Basis</th><th>Advertising</th><th>Personal selling</th></tr><tr><td>Nature</td><td>Impersonal</td><td>Personal, face to face</td></tr><tr><td>Reach</td><td>Many at once</td><td>One at a time</td></tr><tr><td>Communication</td><td>One-way</td><td>Two-way</td></tr><tr><td>Flexibility</td><td>Same message for all</td><td>Adjusted to each buyer</td></tr></table>" },
    { id: "q26", t: "la6", d: "C", m: 6, c: "place", q: "Explain the channels of distribution and the factors affecting their choice.", hint: "Zero to three levels; product, market, company.", why: "",
      points: [{ p: "Zero-level (direct)", m: 1, k: ["zero", "direct"] }, { p: "One-level (retailer)", m: 1, k: ["one-level", "retailer"] }, { p: "Two-level (wholesaler, retailer)", m: 1, k: ["two", "wholesaler"] }, { p: "Three-level (agent)", m: 1, k: ["three", "agent"] }, { p: "Factor: product (perishable, technical, value)", m: 1, k: ["perishab", "technical", "product"] }, { p: "Factor: market size/spread; company resources", m: 1, k: ["market", "resource"] }],
      model: "<p><b>Channels:</b> (i) <b>Zero-level:</b> manufacturer → consumer (own website, outlets); (ii) <b>One-level:</b> manufacturer → retailer → consumer; (iii) <b>Two-level:</b> manufacturer → wholesaler → retailer → consumer; (iv) <b>Three-level:</b> manufacturer → agent → wholesaler → retailer → consumer.</p><p><b>Factors:</b> (i) <b>product:</b> perishable or technical goods need short channels; (ii) <b>market:</b> a large, scattered market needs longer channels; (iii) <b>company:</b> a firm with large resources may sell directly.</p>" },
    { id: "q27", t: "la6", d: "C", m: 6, c: "promo", q: "Explain the elements of the promotion mix with examples.", hint: "Four tools + digital.", why: "",
      points: [{ p: "Advertising with example", m: 1, k: ["advertis"] }, { p: "Personal selling with example", m: 1, k: ["personal selling"] }, { p: "Sales promotion with example", m: 1, k: ["sales promotion", "discount", "sample"] }, { p: "Public relations / publicity", m: 1, k: ["public relation", "publicity"] }, { p: "Digital marketing", m: 1, k: ["digital", "social media", "influencer"] }, { p: "Choice depends on audience, cost, product", m: 1, k: ["audience", "cost", "product"] }],
      model: "<p>(i) <b>Advertising:</b> paid mass-media messages, e.g. a TV ad for a juice brand.</p><p>(ii) <b>Personal selling:</b> face-to-face selling, e.g. a showroom executive explaining a car.</p><p>(iii) <b>Sales promotion:</b> short-term incentives, e.g. free samples, discounts.</p><p>(iv) <b>Public relations and publicity:</b> building goodwill and earning news coverage.</p><p>(v) <b>Digital marketing:</b> social media, search ads and influencers, low-cost and measurable for start-ups.</p><p>The mix is chosen according to the <b>target audience, budget and product</b>.</p>" },
    { id: "q28", t: "comp", d: "M", m: 1, c: "seg", q: "A fitness brand designs products only for women aged 25–40 in metros. This is", o: ["Penetration", "Targeting a segment", "Skimming", "Publicity"], a: 1, hint: "Chosen group.", why: "<b>Targeting a segment</b>." },
    { id: "q29", t: "comp", d: "M", m: 1, c: "pricing", q: "A designer charges ₹15,000 for a dress because customers value her name. This is", o: ["Cost-plus", "Perceived-value pricing", "Penetration", "Competition-based"], a: 1, hint: "Worth to buyer.", why: "<b>Perceived-value pricing</b>." },
    { id: "q30", t: "comp", d: "C", m: 1, c: "pack", q: "A chocolate is wrapped in foil, placed in a printed box, and 50 boxes go in a carton. The printed box is", o: ["Primary", "Secondary", "Transportation", "Label"], a: 1, hint: "Second layer.", why: "<b>Secondary</b>." },
    { id: "q31", t: "case", d: "E", m: 1, c: "promo", passage: "A shampoo brand gives a free 5 ml sachet with every newspaper on Sunday.", q: "This is", o: ["Advertising", "Sales promotion (free sample)", "Personal selling", "Publicity"], a: 1, hint: "Free sample.", why: "<b>Sales promotion</b>." },
    { id: "q32", t: "case", d: "M", m: 1, c: "pricing", passage: "A bag costs ₹500 to make, and the firm adds 40%.", q: "Its price is", o: ["₹540", "₹600", "₹700", "₹740"], a: 2, hint: "500 + 200.", why: "<b>₹700</b>." },
    { id: "q33", t: "case", d: "C", m: 1, c: "place", passage: "A mill sells cloth to wholesalers, who sell to retailers, who sell to customers.", q: "This is a", o: ["Zero-level", "One-level", "Two-level", "Three-level"], a: 2, hint: "Two middlemen.", why: "<b>Two-level</b>." }
  ],
  find: {
    mcq: [
      { s: "A firm aims to be the top seller with 30% of the market.", o: ["Market share goal", "Social goal", "Skimming", "Publicity"], a: 0, c: "goals", d: "E", why: "<b>Market share</b>." },
      { s: "Features, quality and design of a phone.", o: ["Product", "Price", "Place", "Promotion"], a: 0, c: "mix", d: "E", why: "<b>Product</b>." },
      { s: "Logo of a swoosh on shoes.", o: ["Brand mark", "Brand name", "Label", "Package"], a: 0, c: "brand", d: "E", why: "<b>Brand mark</b>." },
      { s: "MRP and expiry printed on a pack.", o: ["Labelling", "Branding", "Pricing", "Publicity"], a: 0, c: "pack", d: "E", why: "<b>Labelling</b>." },
      { s: "Targeting teenagers in tier-2 cities.", o: ["Segmentation and targeting", "Skimming", "Packaging", "Labelling"], a: 0, c: "seg", d: "M", why: "<b>Targeting</b>." },
      { s: "Brand registered with the government.", o: ["Trademark", "Label", "Package", "Publicity"], a: 0, c: "brand", d: "M", why: "<b>Trademark</b>." },
      { s: "Bottle of juice inside a printed carton.", o: ["Secondary packaging", "Primary", "Transportation", "Label"], a: 0, c: "pack", d: "M", why: "The carton is <b>secondary</b>." },
      { s: "Price = cost ₹100 + 30%.", o: ["Cost-plus pricing", "Skimming", "Penetration", "Perceived value"], a: 0, c: "pricing", d: "M", why: "<b>Cost-plus</b>." },
      { s: "New gaming console launched at a very high price.", o: ["Skimming", "Penetration", "Cost-plus", "Competition"], a: 0, c: "pricing", d: "M", why: "<b>Skimming</b>." },
      { s: "New OTT app costs ₹29 a month to attract users.", o: ["Penetration", "Skimming", "Cost-plus", "Perceived value"], a: 0, c: "pricing", d: "M", why: "<b>Penetration</b>." },
      { s: "Pottery sold from the potter's own stall.", o: ["Zero-level channel", "One-level", "Two-level", "Three-level"], a: 0, c: "place", d: "C", why: "<b>Zero-level</b>." },
      { s: "Brand sells only through retailers like supermarkets.", o: ["One-level channel", "Zero-level", "Two-level", "Three-level"], a: 0, c: "place", d: "C", why: "<b>One-level</b>." },
      { s: "Billboards and radio jingles.", o: ["Advertising", "Personal selling", "Sales promotion", "Publicity"], a: 0, c: "ads", d: "C", why: "<b>Advertising</b>." },
      { s: "Insurance agent visits a family to explain a policy.", o: ["Personal selling", "Advertising", "Publicity", "Sales promotion"], a: 0, c: "promo", d: "C", why: "<b>Personal selling</b>." },
      { s: "Scratch-card contest with every purchase.", o: ["Sales promotion", "Advertising", "Personal selling", "PR"], a: 0, c: "promo", d: "C", why: "<b>Sales promotion</b>." },
      { s: "A café donates meals and a newspaper writes about it.", o: ["Publicity / PR", "Advertising", "Sales promotion", "Skimming"], a: 0, c: "promo", d: "C", why: "<b>Publicity</b>." }
    ],
    match: [
      { title: "Drag each situation onto its concept.", pairs: [["Product, price, place, promotion", "Marketing mix", "mix"], ["Bee logo on the jar", "Brand mark", "brand"], ["Weight, MRP, expiry on pack", "Labelling", "pack"], ["High launch price, cut later", "Skimming", "pricing"], ["Sold only via own website", "Zero-level channel", "place"], ["Free sample with purchase", "Sales promotion", "promo"]] }
    ],
    wrong: [
      { stmts: ["Brand name can be spoken.", "A brand mark is a symbol.", "Every brand is automatically a trademark.", "Branding builds loyalty."], a: 2, c: "brand", why: "Only a <b>registered</b> brand is a trademark." },
      { stmts: ["Penetration uses a low launch price.", "Skimming uses a high launch price.", "Cost-plus ignores costs.", "Perceived value depends on buyers' view."], a: 2, c: "pricing", why: "Cost-plus is <b>based on</b> cost." },
      { stmts: ["Advertising is paid.", "Publicity is unpaid.", "Personal selling is impersonal.", "Sales promotion is short-term."], a: 2, c: "promo", why: "Personal selling is <b>personal</b>." }
    ],
    para: [
      { target: "Penetration pricing", c: "pricing", sents: ["A new mineral water brand entered Delhi.", "Competitors sold at ₹20 a bottle.", "It priced its bottle at ₹12 to win buyers quickly.", "Its factory is in Haryana."], a: 2, why: "Low price to win market: <b>penetration</b>." },
      { target: "Secondary packaging", c: "pack", sents: ["A perfume comes in a glass bottle.", "The bottle sits in a velvet-lined printed box.", "Boxes are shipped in cartons.", "The perfume smells of jasmine."], a: 1, why: "The box around the bottle: <b>secondary</b>." },
      { target: "Personal selling", c: "promo", sents: ["SolarHome sells rooftop panels.", "It runs Facebook ads.", "Its engineers visit homes to measure roofs and explain savings to each family.", "It also offers a 10% discount."], a: 2, why: "Face-to-face explanation: <b>personal selling</b>." }
    ],
    explain: [
      { s: "A firm first asks what customers want, then designs the product.", o: ["Marketing concept", "Skimming", "Labelling", "Publicity"], a: 0, c: "goals", why: "The clue is <i>customers first</i>: <b>marketing concept</b>." },
      { s: "A watch is priced at ₹50,000 because buyers see it as luxury.", o: ["Perceived-value pricing", "Cost-plus", "Penetration", "Competition"], a: 0, c: "pricing", why: "<b>Perceived value</b>." },
      { s: "Milk is sold via 300 retailers supplied by wholesalers.", o: ["Two-level channel", "Zero-level", "One-level", "Three-level"], a: 0, c: "place", why: "<b>Two-level</b>." },
      { s: "Brand pays for ads on a cricket broadcast.", o: ["Advertising", "Publicity", "Personal selling", "Sales promotion"], a: 0, c: "ads", why: "<b>Advertising</b>." }
    ]
  }
});
