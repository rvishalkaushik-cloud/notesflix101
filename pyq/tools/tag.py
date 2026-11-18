"""Chapter keyword maps for tagging CBSE board questions. Keywords are lowercase regex fragments."""
import re

MAPS = {
 "BST": {
  "ch01": ["coordination", "co-ordination", "management is", "levels of management", "top level", "middle level", "lower level", "supervisory", "effective", "efficien", "nature of management", "management as", "objectives of management", "art", "profession", "multi-dimensional", "pervasive", "intangible"],
  "ch02": ["principles? of management", "fayol", "taylor", "scientific management", "unity of command", "unity of direction", "scalar chain", "gang plank", "espirit|esprit", "division of work", "discipline", "equity", "stability of personnel", "initiative", "centralisation and decentralisation", "order", "remuneration", "subordination of individual", "time study", "motion study", "fatigue study", "method study", "functional foremanship", "standardisation", "simplification", "differential piece", "rule of thumb", "mental revolution", "harmony", "cooperation, not individualism"],
  "ch03": ["business environment", "demonetisation", "liberalisation", "privatisation", "globalisation", "economic environment", "social environment", "technological environment", "political environment", "legal environment", "dynamic nature", "uncertainty", "first mover", "relativity"],
  "ch04": ["planning", "plan ", "objectives", "strateg", "polic", "procedure", "method", "rule", "budget", "programme", "premises", "alternative courses"],
  "ch05": ["organising", "organisation structure|organizational structure", "functional structure", "divisional structure", "formal organisation", "informal organisation", "delegation", "decentralisation", "centralisation", "authority", "responsibility", "accountability", "span of management"],
  "ch06": ["staffing", "recruitment", "selection", "training", "development", "induction", "vestibule", "apprenticeship", "internship", "placement", "orientation", "workforce", "human resource", "job rotation", "employment exchange", "campus recruitment", "web publishing", "labour contractor", "advertisement", "transfer", "promotion", "selection test", "interview"],
  "ch07": ["directing", "supervision", "motivation", "maslow", "incentive", "leadership", "communication", "barrier", "semantic", "psychological barrier", "organisational barrier", "grapevine", "status", "job enrichment", "empowerment", "perquisite", "bonus", "profit sharing", "co-partnership", "stock option", "retirement benefit", "organisational climate", "job security"],
  "ch08": ["controlling", "control", "deviation", "critical point", "management by exception", "standards", "corrective action", "measurement of actual performance"],
  "ch09": ["financial management", "dividend decision", "factors affecting dividend", "affecting the dividend", "capital structure", "financial planning", "dividend", "working capital", "fixed capital", "investment decision", "financing decision", "capital budgeting", "trading on equity", "financial leverage", "debt", "equity"],
  "ch10": ["financial market", "money market", "capital market", "primary market", "secondary market", "stock exchange", "sebi", "treasury bill", "commercial paper", "call money", "certificate of deposit", "commercial bill", "offer for sale", "private placement", "rights issue", "e-ipo", "demat", "depository", "nse", "bse", "trading procedure", "securities"],
  "ch11": ["marketing", "product", "price", "pricing", "place", "physical distribution", "channel", "promotion", "advertising", "personal selling", "sales promotion", "public relations", "branding", "brand", "packaging", "labelling", "label", "warehousing", "transportation", "inventory control", "selling concept", "production concept", "societal marketing", "marketing mix", "trademark"],
  "ch12": ["consumer", "consumer protection act", "district commission", "state commission", "national commission", "right to", "redressal", "unfair trade", "consumer organisation", "ngo", "isi", "agmark", "fpo", "hallmark", "complaint"],
 },
 "ACC": {
  "acc-partnership": ["partnership deed", "interest on capital", "interest on drawings", "profit and loss appropriation", "fixed capital", "fluctuating capital", "guarantee", "past adjustment", "salary to", "commission to", "partners? share", "partnership act"],
  "acc-goodwill": ["goodwill", "super profit", "capitalisation", "years.? purchase", "average profit"],
  "acc-x-change": ["change in (the )?profit sharing ratio", "agreed to share profits", "sacrific", "gain", "reconstitution", "with effect from"],
  "acc-x-admission": ["admi(t|ssion)", "new partner", "new profit sharing ratio", "premium for goodwill", "hidden goodwill"],
  "acc-x-retirement": ["retire", "death of", "deceased", "executor", "joint life policy"],
  "acc-x-dissolution": ["dissolution", "realisation account", "realization account"],
  "acc-x-shares": ["equity shares", "share capital", "forfeit", "re-issue|reissue", "allotment", "first and final call", "calls in arrears", "calls in advance", "application money", "pro-rata", "over-subscri", "under-subscri", "private placement", "employee stock option"],
  "acc-x-debentures": ["debenture", "collateral security", "loss on issue", "premium on redemption", "discount on issue"],
  "acc-fs-company": ["balance sheet", "schedule iii", "major heads", "sub-heads", "statement of profit and loss", "comparative", "common.size", "tools of financial analysis", "financial statement analysis", "limitations of financial"],
  "acc-ratios": ["current ratio", "quick ratio|liquid ratio", "turnover ratio", "trade receivables turnover", "inventory turnover", "debt to equity|debt-equity", "proprietary", "interest coverage", "gross profit ratio", "net profit ratio", "operating ratio", "return on investment"],
  "acc-x-cashflow": ["cash flow", "cash equivalents", "operating activities", "investing activities", "financing activities"],
 },
 "ECO": {
  "eco12-ni": ["national income", "stock variable", "flow variable", "stock and flow", "capital goods", "consumer goods", "gdp", "gnp", "nnp", "ndp", "factor cost", "market price", "value added", "intermediate", "final goods", "double counting", "circular flow", "real gdp", "nominal gdp", "welfare", "transfer payment", "compensation of employees", "mixed income", "depreciation", "net indirect tax", "factor income from abroad", "externalit"],
  "eco12-money": ["money", "barter", "commercial bank", "central bank", "reserve bank|rbi", "credit creation", "money multiplier", "repo", "reverse repo", "cash reserve ratio|crr", "statutory liquidity|slr", "open market operation", "bank rate", "lender of last resort", "m1", "high powered", "legal reserve"],
  "eco12-income": ["aggregate demand", "investment is", "investment demand", "ex ante", "consumption", "aggregate supply", "consumption function", "propensity to consume", "propensity to save", "mpc", "mps", "apc", "aps", "investment multiplier", "multiplier", "ex-ante", "ex-post", "excess demand", "deficient demand", "inflationary gap", "deflationary gap", "full employment", "involuntary unemployment", "equilibrium level of income", "autonomous"],
  "eco12-budget": ["budget", "revenue receipt", "capital receipt", "revenue expenditure", "capital expenditure", "fiscal deficit", "revenue deficit", "primary deficit", "disinvestment", "direct tax", "indirect tax", "subsid", "allocation of resources", "redistribution of income"],
  "eco12-bop": ["balance of payments", "balance of trade", "current account", "capital account", "foreign exchange", "exchange rate", "depreciation of", "appreciation of", "devaluation", "revaluation", "managed floating", "autonomous transaction", "accommodating", "fdi", "fpi", "remittance"],
  "eco12-ied1": ["green revolution", "land reform", "land ceiling", "zamindar", "five year plan", "planning commission", "import substitution", "industrial policy", "small scale|small-scale", "marketed surplus", "high yielding|hyv", "self.reliance", "colonial", "british", "de.industriali", "occupational structure", "infrastructure under", "railways", "mixed economy", "licen"],
  "eco12-lpg": ["new economic policy", "liberalisation", "privatisation", "globalisation", "1991", "disinvestment", "outsourcing", "wto", "maharatna", "navratna", "demonetisation", "gst", "goods and services tax", "reforms"],
  "eco12-ied2": ["human capital", "human development", "education", "health", "on-the-job", "migration", "rural development", "rural credit", "self.help group|shg", "nabard", "agricultural marketing", "organic farming", "diversification", "worker.population", "employment", "unemployment", "formal sector", "informal sector", "casual", "jobless", "environment", "sustainable development", "global warming", "ozone", "absorptive capacity", "carrying capacity", "pollution", "renewable", "mgnrega"],
  "eco12-neighbours": ["china", "pakistan", "great leap forward", "commune", "cultural revolution", "one.child", "sez|special economic zone", "comparative", "india, china", "neighbour"],
 },
 "ENT": {
  "ent-u1": ["opportunit", "idea", "creativity", "innovation", "environment scanning", "brainstorming", "focus group", "feasibility", "problem identification", "sensing", "germination", "incubation", "illumination", "verification", "market assessment"],
  "ent-u2": ["business plan", "enterprise planning", "forms of business", "sole proprietor", "partnership", "company", "organisational plan", "operational plan", "production plan", "financial plan", "marketing plan", "human resource plan", "break.even", "project cost", "formalities", "registration", "legal"],
  "ent-u3": ["marketing", "brand", "packaging", "labelling", "pricing", "price", "channel", "distribution", "promotion", "advertis", "sales promotion", "personal selling", "segment", "marketing mix", "penetration", "skimming"],
  "ent-u4": ["growth", "franchis", "merger", "acquisition", "takeover", "value chain", "value addition", "porter", "royalty", "synergy", "expansion"],
  "ent-u6": ["angel", "venture capital", "ipo", "initial public offer", "stock exchange", "crowd.?fund", "resource mobili", "source of funds", "fixed capital", "working capital", "bootstrap", "private equity", "mudra", "loan", "finance"],
 },
 "CHEM": {
  "chem12-ch1": ["solution", "molality", "molarity", "mole fraction", "raoult", "henry", "colligative", "osmotic", "boiling point", "freezing point", "van.t hoff", "azeotrop", "vapour pressure", "ideal solution"],
  "chem12-ch2": ["electrochemi", "reduction potential", "electrode potential", "vessel", "standard hydrogen", "she\\b", "electrode", "emf", "e.?cell", "nernst", "conductivity", "molar conductivity", "kohlrausch", "faraday", "electrolysis", "galvanic", "daniell", "fuel cell", "corrosion", "battery", "salt bridge"],
  "chem12-ch3": ["rate of reaction|rate constant|rate law", "order of reaction|first order|zero order|second order", "half.life", "molecularity", "activation energy", "arrhenius", "kinetics", "pseudo first", "collision"],
  "chem12-ch4": ["transition element", "d-block|d block", "f-block|f block", "lanthanoid", "actinoid", "lanthanide", "kmno4|permanganate", "k2cr2o7|dichromate", "oxidation state", "zr", "hf", "mn", "cr2\\+", "interstitial", "alloy"],
  "chem12-ch5": ["coordination", "ligand", "complex", "iupac name of", "crystal field", "cfse", "werner", "chelate", "denticity", "valence bond theory", "\\[co|\\[fe|\\[ni|\\[cu|\\[pt|\\[cr", "isomerism in complex", "spectrochemical"],
  "chem12-ch6": ["haloalkane", "haloarene", "alkyl halide", "sn1", "sn2", "chlorobenzene", "chloroform", "racemi", "chiral", "enantiomer", "wurtz", "fittig", "finkelstein", "swarts", "markovnikov", "dehydrohalogen", "grignard"],
  "chem12-ch7": ["alcohol", "phenol", "ether", "williamson", "lucas", "reimer", "kolbe", "anisole", "ethanol", "methanol", "picric", "hydroboration"],
  "chem12-ch8": ["aldehyde", "ketone", "carboxylic", "tollen", "fehling", "iodoform", "aldol", "cannizzaro", "clemmensen", "wolff", "hvz|hell", "rosenmund", "stephen", "etard", "benzaldehyde", "acetone", "acetaldehyde", "carbonyl"],
  "chem12-ch9": ["amine", "aniline", "diazonium", "hoffmann|hofmann", "gabriel", "carbylamine", "hinsberg", "coupling", "basic strength", "nitro"],
  "chem12-ch10": ["biomolecule", "glucose", "fructose", "sucrose", "carbohydrate", "protein", "amino acid", "peptide", "enzyme", "vitamin", "nucleic", "dna", "rna", "denaturation", "starch", "cellulose", "glycosidic", "anomer", "zwitter"],
 },
 "LEGAL": {
  "legal12-judiciary": ["judiciary", "supreme court", "high court", "judicial review", "appointment of judges", "collegium", "writ", "original jurisdiction", "appellate jurisdiction", "advisory jurisdiction", "independence of judiciary"],
  "legal12-adr": ["adr", "alternative dispute", "arbitration", "mediation", "conciliation", "negotiation", "lok adalat", "ombudsman", "lokpal", "lokayukta"],
  "legal12-hr": ["human rights", "nhrc", "shrc", "udhr", "universal declaration", "fundamental rights", "article 21", "dignity"],
  "legal12-ls": ["legal services", "legal aid", "nalsa", "free legal", "legal services authorities"],
  "legal12-intl": ["international law", "treaty", "united nations|un charter", "international court|icj", "sovereign", "customary international", "extradition", "diplomatic"],
  "legal12-prof": ["legal profession", "advocate", "bar council", "advocates act", "senior advocate", "professional ethics", "legal education", "law firm", "foreign lawyer"],
  "legal12-contract": ["contract", "offer", "acceptance", "consideration", "free consent", "coercion", "undue influence", "misrepresentation", "fraud", "minor", "void", "voidable", "breach", "quasi", "agreement", "indemnity", "guarantee", "bailment"],
  "legal12-torts": ["tort", "negligence", "nuisance", "trespass", "defamation", "strict liability", "absolute liability", "vicarious", "volenti", "damnum", "injuria", "rylands", "mc mehta|m\\.c\\. mehta"],
  "legal12-property": ["property", "movable", "immovable", "transfer of property", "easement", "possession", "ownership", "mortgage", "lease", "gift"],
  "legal12-ipr": ["intellectual property", "ipr", "patent", "copyright", "trademark|trade mark", "geographical indication", "design", "trade secret", "infringement"],
  "legal12-entities": ["sole proprietor", "partnership", "llp", "limited liability partnership", "company", "corporate", "cooperative", "huf|hindu undivided", "corporate veil", "legal entity"],
  "legal12-sustdev": ["sustainable development", "environment", "pollution", "polluter pays", "precautionary", "climate", "forest", "wildlife", "ngt|national green tribunal"],
  "legal12-criminal": ["criminal", "crime", "mens rea", "actus reus", "bharatiya nyaya|bns|ipc|indian penal", "cognizable", "bail", "fir", "theft", "murder", "culpable", "arrest", "punishment"],
 },
 "SCI": {
  "sci10-ch1": ["chemical reaction", "balanced", "combination reaction", "decomposition", "displacement", "double displacement", "redox", "oxidation", "reduction", "rancidity", "precipitate", "exothermic", "endothermic"],
  "sci10-ch2": ["acid", "base", "salt", "ph ", "ph\\b", "indicator", "litmus", "neutrali", "bleaching powder", "baking soda", "washing soda", "plaster of paris", "gypsum", "chlor-alkali", "water of crystalli"],
  "sci10-ch3": ["metal", "non-metal", "reactivity series", "ionic", "alloy", "corrosion", "roasting", "calcination", "electrolytic refining", "amphoteric", "malleab", "ductil", "thermit"],
  "sci10-ch4": ["carbon", "covalent", "hydrocarbon", "alkane", "alkene", "alkyne", "homologous", "functional group", "ethanol", "ethanoic", "esterif", "saponif", "soap", "detergent", "micelle", "isomer", "catenation", "substitution reaction", "addition reaction"],
  "sci10-ch5": ["nutrition", "photosynthesis", "respiration", "digestion", "stomata", "transport", "xylem", "phloem", "heart", "blood", "excretion", "nephron", "kidney", "alveoli", "enzyme", "villi", "transpiration", "double circulation", "dialysis"],
  "sci10-ch6": ["cytokinin", "plant hormone", "nervous", "neuron", "reflex", "brain", "hormone", "endocrine", "thyroid", "pituitary", "insulin", "adrenaline", "auxin", "gibberellin", "cytokinin", "abscisic", "tropism", "phototropism", "geotropism", "synapse", "spinal cord"],
  "sci10-ch7": ["reproduction", "fission", "budding", "fragmentation", "regeneration", "spore", "vegetative propagation", "pollination", "fertilisation|fertilization", "ovary", "ovule", "pollen", "puberty", "testes", "contracepti", "sexually transmitted", "placenta", "menstruation", "zygote", "germination"],
  "sci10-ch8": ["heredity", "mendel", "dominant", "recessive", "genotype", "phenotype", "monohybrid", "dihybrid", "sex determination", "chromosome", "gene", "trait", "f1", "f2"],
  "sci10-ch9": ["mirror", "lens", "reflection", "refraction", "refractive index", "focal length", "magnification", "power of", "concave", "convex", "snell", "image formed", "real image", "virtual image", "principal axis"],
  "sci10-ch10": ["eye", "myopia", "hypermetropia", "presbyopia", "dispersion", "prism", "spectrum", "scattering", "tyndall", "rainbow", "twinkling", "blue colour of the sky|sky appear", "accommodation", "near point", "far point"],
  "sci10-ch11": ["current", "resist", "ohm", "potential difference", "voltage", "series", "parallel", "electric power", "joule", "heating effect", "ammeter", "voltmeter", "fuse", "kilowatt", "resistivity", "circuit"],
  "sci10-ch12": ["magnetic field", "magnet", "solenoid", "right.hand thumb", "fleming", "electromagnet", "earth wire", "domestic circuit", "overloading", "short.circuit", "field lines", "compass"],
  "sci10-ch13": ["ecosystem", "food chain", "food web", "trophic", "producer", "decomposer", "biodegradable", "ozone", "garbage", "biological magnification", "environment", "10 percent|10% law"],
 },
 "SST": {
  "sst10-his1": ["nationalism in europe", "french revolution", "napoleon", "mazzini", "bismarck", "cavour", "garibaldi", "unification of (italy|germany)", "frankfurt", "zollverein", "romanticism", "balkan", "vienna", "liberalism", "greek war", "allegor", "marianne", "germania"],
  "sst10-his2": ["gandhi", "non-cooperation|non cooperation", "khilafat", "civil disobedience", "salt march", "dandi", "rowlatt", "jallianwala", "simon commission", "poona pact", "satyagraha", "champaran", "kheda", "ahmedabad", "swaraj", "nationalism in india", "bharat mata", "round table", "awadh", "alluri", "purna swaraj", "lahore"],
  "sst10-his3": ["global world", "second world war", "first world war", "axis powers", "allied powers", "trading network", "sixteenth century", "nineteenth century", "potato famine", "chutney music", "hosay", "silk route", "rinderpest", "indentured", "great depression", "bretton woods", "corn laws", "imf", "world bank", "g-77", "colonialism", "food travels", "transport technology"],
  "sst10-his4": ["industriali", "proto-industr", "jobber", "gomastha", "spinning jenny", "factory", "manchester", "handloom", "weaver", "steam engine", "advertisement", "labels"],
  "sst10-his5": ["print", "gutenberg", "printing press", "manuscript", "vernacular", "chapbook", "penny magazine", "censorship", "vernacular press act", "kitab", "woodblock", "calligraphy"],
  "sst10-geo1": ["resource", "soil", "land degradation", "land use", "alluvial", "black soil", "laterite", "arid soil", "red soil", "soil erosion", "agenda 21", "rio de janeiro", "contour", "terrace", "shelter belt", "gullies", "sheet erosion"],
  "sst10-geo2": ["forest", "wildlife", "biodiversity", "chipko", "joint forest management", "sacred grove", "project tiger", "endangered", "extinct", "reserved forest", "protected forest", "beej bachao"],
  "sst10-geo3": ["water", "dam", "multipurpose|multi-purpose", "rainwater harvesting", "narmada", "sardar sarovar", "tankas", "khadin", "guls|kuls", "bamboo drip", "water scarcity"],
  "sst10-geo4": ["agricult", "crop", "rabi", "kharif", "zaid", "rice", "wheat", "jute", "cotton", "sugarcane", "tea", "coffee", "millet", "pulses", "slash and burn", "shifting", "plantation", "commercial farming", "bhoodan", "food security"],
  "sst10-geo5": ["mineral", "iron ore", "bauxite", "mica", "manganese", "coal", "petroleum", "natural gas", "solar", "wind energy", "nuclear", "conventional", "non-conventional", "energy"],
  "sst10-geo6": ["manufactur", "industr", "textile", "iron and steel", "aluminium", "cement", "fertiliser", "chemical industr", "agro based", "information technology", "industrial pollution", "nmcc"],
  "sst10-geo7": ["transport", "roadways", "railways", "pipeline", "waterways", "airways", "communication", "international trade", "golden quadrilateral", "national highway", "port", "tourism"],
  "sst10-pol1": ["power sharing|power-sharing", "belgium", "sri lanka", "majoritarianism", "horizontal distribution", "vertical distribution", "community government", "checks and balances"],
  "sst10-pol2": ["federal", "decentrali", "panchayat", "union list", "state list", "concurrent list", "residuary", "linguistic states", "language policy", "local self", "gram sabha", "zila parishad", "municipal"],
  "sst10-pol3": ["gender", "caste", "religion", "communal", "secular", "feminist", "sexual division", "patriarchy", "women", "reservation", "casteism"],
  "sst10-pol4": ["political part", "party system", "national party", "state party", "regional party", "election commission", "symbol", "defection", "affidavit", "bjp", "congress", "bsp", "cpi", "aap", "npp"],
  "sst10-pol5": ["outcomes of democracy", "accountable", "legitimate", "dignity and freedom", "economic growth and development", "inequality and poverty", "transparency"],
  "sst10-eco1": ["development", "per capita income", "human development", "hdi", "infant mortality", "literacy rate", "net attendance", "bmi|body mass", "sustainab", "public facilities", "average income"],
  "sst10-eco2": ["sector", "employment", "rural", "primary sector", "secondary sector", "tertiary", "disguised unemployment", "underemployment", "organised", "unorganised", "public sector", "private sector", "mgnrega|nrega", "gdp"],
  "sst10-eco3": ["money", "credit", "barter", "double coincidence", "bank", "collateral", "debt trap", "self help group|shg", "grameen", "formal sector credit|informal", "terms of credit", "demand deposit", "cheque"],
  "sst10-eco4": ["globalisation", "multinational|mnc", "foreign investment", "foreign trade", "liberalisation", "wto", "trade barrier", "sez|special economic zone", "fair globalisation"],
 },
}
CH_TITLES_EXTRA = {
 "acc-x-change": "Change in Profit Sharing Ratio", "acc-x-admission": "Admission of a Partner", "acc-x-retirement": "Retirement / Death of a Partner",
 "acc-x-dissolution": "Dissolution of a Partnership Firm", "acc-x-shares": "Accounting for Share Capital", "acc-x-debentures": "Issue of Debentures", "acc-x-cashflow": "Cash Flow Statement",
}

_comp = {s: {c: [re.compile(k) for k in ks] for c, ks in m.items()} for s, m in MAPS.items()}

def tag(subj, text):
    t = " " + text.lower().replace("\n", " ") + " "
    best, bs = None, 0
    for c, pats in _comp.get(subj, {}).items():
        sc = 0
        for p in pats:
            n = len(p.findall(t))
            if n: sc += 1 + min(n - 1, 2) * 0.3 + (0.5 if len(p.pattern) > 12 else 0)
        if sc > bs: best, bs = c, sc
    return best, bs
