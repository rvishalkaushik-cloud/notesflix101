const B = require('./xlib.js');
module.exports = B({
'ix-ch1': {
  s: [["Derived Quantities", "Area|Volume|Density|Speed"],["Measuring Instruments", "Metre scale|Vernier calliper|Stopwatch|Thermometer|Physical balance"],["Prefixes", "Kilo|Milli|Centi|Micro"]],
  p: ["Measurement=>Comparing a quantity with a standard unit","Error=>Difference between measured and true value","Accuracy=>How close a measurement is to the true value","Precision=>How close repeated measurements are to each other","SI=>International System of Units","Variable=>A factor that can change in an experiment","Observation=>Information gathered using senses or instruments","Conclusion=>Result drawn from experimental evidence"].filter(t=>!/^(Accuracy|Precision|Variable)/.test(t)),
  c: [["Convert 5 kg to grams.",5000,"g","1 kg = 1000 g."],["Convert 4500 m to km.",4.5,"km","Divide by 1000."]],
},
'ix-ch2': {
  s: [["Cell Organelles", "Golgi apparatus|Endoplasmic reticulum|Lysosome|Plastid"],["Functions", "Mitochondria make energy|Ribosomes make proteins|Lysosomes digest waste|Chloroplasts make food"],["Cell Theory Scientists", "Robert Hooke|Schleiden|Schwann|Virchow"]],
  p: ["Cell wall=>Rigid outer layer of plant cells made of cellulose","Vacuole=>Space in a cell that stores water and waste","Cytoplasm=>Jelly-like fluid in a cell","Osmosis=>Movement of water through a semi-permeable membrane","Diffusion=>Movement of particles from high to low concentration","Prokaryote=>Cell without a true nucleus","Eukaryote=>Cell with a true nucleus","Powerhouse of the cell=>Mitochondria"].filter(t=>!/^(Nucleus|Mitochondria)/.test(t)),
},
'ix-ch3': {
  s: [["Meristematic Tissue Types", "Apical|Lateral|Intercalary"],["Epithelial Types", "Squamous|Cuboidal|Columnar|Ciliated"],["Connective Tissue Types", "Bone|Cartilage|Ligament|Tendon|Adipose"],["Xylem Parts", "Tracheid|Vessel|Xylem fibre"],["Phloem Parts", "Sieve tube|Companion cell|Phloem fibre"]],
  p: ["Meristem=>Tissue where cells keep dividing","Parenchyma=>Simple permanent tissue that stores food","Collenchyma=>Tissue giving flexibility to plants","Sclerenchyma=>Hard dead tissue that gives strength","Stomata=>Pores in the leaf epidermis","Ligament=>Connects bone to bone","Tendon=>Connects muscle to bone","Areolar=>Connective tissue that fills spaces inside organs"],
},
'ix-ch4': {
  s: [["Equations of Motion Terms", "Initial velocity|Final velocity|Uniform acceleration|Time interval"],["Types of Motion", "Uniform|Non-uniform|Circular|Oscillatory"],["Motion Graph Shapes", "Straight horizontal line means rest|Straight sloped line means uniform speed|Curved line means changing speed"],["Units", "Metre per second|Metre per second squared|Kilometre per hour"]],
  p: ["Distance=>Total length of the path travelled","Retardation=>Negative acceleration","Uniform acceleration=>Equal change in velocity in equal intervals","Average speed=>Total distance divided by total time","Odometer=>Instrument that measures distance travelled by a vehicle","Speedometer=>Instrument that shows the speed of a vehicle","Rest=>State of not changing position with time","Frame of reference=>Point or set of axes used to describe position"],
  c: [["A bus covers 150 km in 3 hours. Find its speed.",50,"km/h","150 / 3."],["A body starts from rest and accelerates at 2 m/s2 for 5 s. Find final velocity.",10,"m/s","v = u + at = 0 + 2 x 5."]],
},
'ix-ch5': {
  s: [["Solution Types", "Solid in liquid|Gas in liquid|Liquid in liquid"],["Colloid Examples", "Milk|Fog|Smoke|Jelly"],["True Solution Properties", "Particles cannot be seen|Do not scatter light|Stable|Pass through filter paper"],["Suspension Properties", "Particles can be seen|Settle on standing|Scatter light|Filtered easily"],["Separating Methods Used For", "Cream from milk by centrifugation|Salt from sea water by evaporation|Ink dyes by chromatography|Oil from water by separating funnel"]],
  p: ["Mixture=>Two or more substances physically combined","Pure substance=>Material made of one kind of particle","Concentration=>Amount of solute in a given amount of solution","Saturated solution=>Solution that cannot dissolve more solute","Tyndall effect=>Scattering of light by colloidal particles","Sublimation=>Solid turning directly to gas","Centrifugation=>Separation using spinning","Crystallisation=>Method to obtain pure crystals from solution"],
  c: [["Dissolve 20 g salt in 80 g water. Find the mass of the solution.",100,"g","20 + 80."],["Mass of solute is 10 g in 100 g solution. Find mass percentage.",10,"%","10 / 100 x 100."]],
},
'ix-ch6': {
  s: [["Types of Force", "Muscular|Gravitational|Magnetic|Frictional|Electrostatic"],["Friction Helps", "Walking|Writing with pencil|Lighting a matchstick|Brakes of a vehicle"],["Friction Reduced By", "Oil|Ball bearings|Streamlined shape|Polishing"],["Contact Forces", "Push|Pull|Friction|Tension"]],
  p: ["Balanced force=>Forces that cancel each other so there is no change in motion","Unbalanced force=>Net force that changes the state of motion","Weight=>Force with which Earth attracts a body","Mass=>Amount of matter in a body","Gravity=>Force of attraction towards Earth's centre","Impulse=>Force multiplied by time","Conservation of momentum=>Total momentum stays constant if no external force acts","Terminal velocity=>Constant maximum speed of a falling body"],
  c: [["Find the force on a 5 kg object accelerating at 3 m/s2.",15,"N","F = ma."],["Find the weight of a 10 kg mass (g = 10 m/s2).",100,"N","W = mg."]],
},
'ix-ch7': {
  s: [["Forms of Energy", "Heat|Light|Sound|Chemical|Electrical"],["Energy Conversion", "Bulb: electrical to light|Fan: electrical to mechanical|Solar cell: light to electrical|Dynamo: mechanical to electrical"],["Levers", "Seesaw|Scissors|Crowbar|Tongs"],["Renewable Energy Sources", "Solar|Wind|Hydro|Biomass"]],
  p: ["Work=>Force multiplied by displacement in its direction","Energy=>Capacity to do work","Law of conservation of energy=>Energy can neither be created nor destroyed","Kinetic energy=>Energy due to motion","Potential energy=>Energy due to position or condition","Efficiency=>Useful output divided by total input","Fulcrum=>Fixed point about which a lever turns","Load=>Weight lifted by a machine"].filter(t=>!/^(Work|Power)/.test(t)),
  c: [["Find the potential energy of 2 kg at 5 m height (g = 10).",100,"J","mgh = 2 x 10 x 5."],["A machine does 500 J in 5 s. Find its power.",100,"W","500 / 5."]],
},
'ix-ch8': {
  s: [["Atomic Models", "Dalton's model|Thomson's plum pudding model|Rutherford's nuclear model|Bohr's model"],["Experiment Evidence", "Gold foil experiment found the nucleus|Cathode ray tube found the electron|Alpha scattering showed empty space"],["Shell Capacities", "K shell holds 2|L shell holds 8|M shell holds 18"],["Isotopes", "Protium|Deuterium|Tritium|Carbon-14"]],
  p: ["Nucleus=>Dense centre of the atom with protons and neutrons","Valence electrons=>Electrons in the outermost shell","Isobars=>Atoms with same mass number and different atomic number","Isotopes=>Atoms with same atomic number and different mass number","Octet=>Eight electrons in the outer shell","Electron=>Negatively charged particle discovered by J.J. Thomson","Proton=>Positively charged particle discovered by Goldstein","Bohr=>Proposed that electrons orbit in fixed shells"],
  c: [["An atom has atomic number 17 and mass number 35. How many neutrons does it have?",18,"neutrons","35 - 17."],["Sodium has atomic number 11. How many electrons in the M shell?",1,"electron","Configuration 2, 8, 1."]],
},
'ix-ch9': {
  s: [["Chemical Formulae", "H2O|CO2|NaCl|NH3"],["Valency of Ions", "Sodium has valency 1|Calcium has valency 2|Aluminium has valency 3|Oxygen has valency 2"],["Common Atomic Masses", "Hydrogen 1|Carbon 12|Nitrogen 14|Oxygen 16"],["Types of Ions", "Cation|Anion|Polyatomic ion"]],
  p: ["Atom=>Smallest particle of an element","Molecule=>Group of atoms bonded together","Mole=>6.022 x 10 to the power 23 particles","Avogadro number=>6.022 x 10 to the power 23","Valency=>Combining capacity of an element","Formula unit mass=>Sum of atomic masses in an ionic compound","Atomicity=>Number of atoms in a molecule","Polyatomic ion=>Group of atoms carrying a charge"].filter(t=>!/^(Molecule|Mole|Ion)/.test(t)),
  c: [["Find the molecular mass of NH3 (N = 14, H = 1).",17,"u","14 + 3."],["Find the number of moles in 36 g of water (H2O = 18).",2,"mol","36 / 18."]],
},
'ix-ch10': {
  s: [["Types of Wave", "Longitudinal wave|Transverse wave"],["Sound Needs", "A medium|Vibrating source|A receiver"],["Characteristics of Sound", "Pitch depends on frequency|Loudness depends on amplitude|Quality depends on waveform"],["Parts of Human Ear", "Pinna|Ear canal|Eardrum|Cochlea"],["Sound Travels Fastest In", "Solids|Liquids|Gases"]],
  p: ["Frequency=>Number of oscillations per second","Amplitude=>Maximum displacement from the mean position","Wavelength=>Distance between two successive crests","Hertz=>Unit of frequency","Compression=>Region of high pressure in a sound wave","Rarefaction=>Region of low pressure in a sound wave","Decibel=>Unit of loudness","Speed of sound in air=>About 343 metres per second"],
  c: [["Frequency 20 Hz and wavelength 17 m. Find the speed.",340,"m/s","v = f x lambda."],["An echo returns after 2 s. Speed of sound is 340 m/s. Find the distance of the reflector.",340,"m","Distance = 340 x 2 / 2."]],
},
'ix-ch11': {
  s: [["Parts of a Flower", "Sepal|Petal|Stamen|Pistil"],["Seed Dispersal Agents", "Wind|Water|Animals|Explosion"],["Male Reproductive Organs", "Testes|Sperm duct|Penis"],["Female Reproductive Organs", "Ovary|Oviduct|Uterus"]],
  p: ["Fertilisation=>Fusion of male and female gametes","Fission=>Splitting of a single cell into two","Pollen=>Male gametes in a flower","Ovule=>Part of the ovary that becomes a seed","Embryo=>Early stage of development after zygote","Hybrid=>Offspring of two different varieties","Cloning=>Producing identical copies of an organism","Gestation=>Period during which the embryo develops"],
},
'ix-ch12': {
  s: [["Five Kingdoms", "Monera|Protista|Fungi|Plantae|Animalia"],["Plant Groups", "Thallophyta|Bryophyta|Pteridophyta|Gymnosperms|Angiosperms"],["Animal Groups", "Porifera|Coelenterata|Annelida|Arthropoda|Mollusca"],["Vertebrate Classes", "Pisces|Amphibia|Reptilia|Aves|Mammalia"],["Cold-blooded Animals", "Fish|Lizard|Crocodile|Snake"]],
  p: ["Classification=>Grouping organisms by similarities","Phylum=>Taxonomic rank below kingdom","Genus=>Group of closely related species","Homo sapiens=>Scientific name of humans","Linnaeus=>Father of taxonomy","Invertebrate=>Animal without a backbone","Warm-blooded=>Body temperature stays constant","Hierarchy=>Arrangement of groups from largest to smallest"].filter(t=>!/^(Binomial|Species)/.test(t)),
},
'ix-ch13': {
  s: [["Gases in Cycles", "Oxygen|Nitrogen|Water vapour|Ozone"],["Greenhouse Gases", "Carbon dioxide|Methane|Nitrous oxide"],["Water Cycle Steps", "Evaporation|Condensation|Precipitation|Runoff"],["Sources of Pollution", "Vehicles|Factories|Burning of waste|Plastic dumping"]],
  p: ["Atmosphere=>Layer of gases around the Earth","Hydrosphere=>All water on Earth","Lithosphere=>Rocky outer shell of the Earth","Nitrogen fixation=>Conversion of nitrogen gas into usable compounds","Acid rain=>Rain made acidic by sulphur and nitrogen oxides","Recycling=>Processing waste into new products","Sustainability=>Meeting present needs without harming the future","Ozone layer=>Layer in the stratosphere that absorbs ultraviolet rays"],
},
'ix-sst1': {
  s: [["Sources of History", "Coins|Inscriptions|Monuments|Manuscripts"],["Physical Features", "Mountains|Rivers|Plains|Plateaus"],["Civic Ideas", "Equality|Liberty|Justice|Fraternity"],["Branches of Social Science", "History|Geography|Political Science|Economics"]],
  p: ["Chronology=>Arrangement of events in time order","Archaeology=>Study of the past through remains","Latitude=>Imaginary line measured in degrees north or south of the equator","Longitude=>Imaginary line measured east or west of the Prime Meridian","Citizen=>Member of a country with rights and duties","Economy=>System of production and exchange of goods and services","Society=>Group of people living together with shared rules","Evidence=>Facts used to prove something"],
},
'ix-sst2': {
  s: [["Volcano Features", "Crater|Vent|Lava|Magma chamber"],["Earthquake Terms", "Focus|Epicentre|Seismograph|Richter scale"],["Agents of Erosion", "Rivers|Wind|Glaciers|Sea waves"],["Rock Examples", "Granite|Sandstone|Marble|Basalt|Limestone|Slate"]],
  p: ["Magma=>Molten rock below the surface","Lava=>Molten rock that reaches the surface","Epicentre=>Point on the surface directly above the focus","Weathering=>Breaking down of rocks in place","Erosion=>Carrying away of weathered material","Deposition=>Settling of material carried by agents","Tectonic plate=>Large moving piece of the Earth's crust","Mineral=>Naturally occurring substance with a definite composition"],
},
'ix-sst3': {
  s: [["Types of Rainfall", "Convectional|Relief|Cyclonic"],["Weather Instruments", "Thermometer|Barometer|Rain gauge|Anemometer|Wind vane"],["Climate Factors", "Latitude|Altitude|Distance from sea|Ocean currents"],["Winds", "Trade winds|Westerlies|Polar easterlies|Monsoon"]],
  p: ["Weather=>Day-to-day state of the atmosphere","Climate=>Average weather over many years","Humidity=>Amount of water vapour in the air","Monsoon=>Seasonal reversal of winds","Barometer=>Instrument measuring air pressure","Isotherm=>Line joining places of equal temperature","Isobar=>Line joining places of equal pressure","Atmospheric pressure=>Weight of air on a surface"],
},
'ix-sst4': {
  s: [["Tools of Early Humans", "Hand axe|Scraper|Microlith|Bone needle"],["Harappan Cities", "Mohenjo-daro|Lothal|Kalibangan|Dholavira"],["Features of Harappan Cities", "Grid plan|Drainage system|Great Bath|Granary"],["Metals Used", "Copper|Bronze|Iron|Gold"]],
  p: ["Paleolithic=>Old Stone Age","Neolithic=>New Stone Age","Domestication=>Taming animals and plants for human use","Nomad=>Person who moves from place to place","Archaeologist=>Scientist who studies ancient remains","Fossil=>Preserved remains of ancient life","Script=>System of writing","Trade=>Exchange of goods between people or places"],
},
'ix-sst5': {
  s: [["Maurya Rulers", "Chandragupta Maurya|Bindusara|Ashoka"],["Gupta Rulers", "Chandragupta I|Samudragupta|Chandragupta II"],["Ashoka's Reforms", "Spread of dhamma|Rock and pillar edicts|Welfare works|Ban on cruelty to animals"],["Sources for Mauryan History", "Arthashastra|Indica|Ashokan inscriptions"],["Foreign Travellers", "Megasthenes|Fa-Hien|Hiuen Tsang|Al-Biruni"]],
  p: ["Kalinga War=>War after which Ashoka gave up violence","Dhamma=>Ashoka's policy of moral conduct","Arthashastra=>Book written by Kautilya on statecraft","Edict=>Official order inscribed on rock or pillar","Sangam=>Early Tamil literature and assembly","Janapada=>Early territorial state","Guild=>Association of merchants or craftspeople","Indica=>Account of India by Megasthenes"],
},
'ix-sst6': {
  s: [["Democratic Countries", "India|USA|Japan|UK"],["Fundamental Rights Examples", "Equality before law|Freedom of speech|Freedom of religion|Right against exploitation"],["Features of Dictatorship", "No free elections|No freedom of press|One ruler holds power|Opposition suppressed"],["Duties of Citizens", "Respecting the Constitution|Protecting public property|Paying taxes|Voting"]],
  p: ["Rule of law=>No person is above the law","Majority=>More than half of the people","Minority=>Smaller group differing from the majority","Representation=>Elected persons speaking for voters","Accountability=>Duty of government to answer to the people","Constitution=>Supreme law of a country","Equality=>Same rights and dignity for all","Franchise=>Right to vote"].filter(t=>!/^(Constitution)/.test(t)),
},
'ix-sst7': {
  s: [["Election Officials", "Returning officer|Presiding officer|Polling agent|Chief Election Commissioner"],["Types of Elections", "General election|By-election|Panchayat election|Municipal election"],["Voting Aids", "EVM|VVPAT|Indelible ink|Voter ID card"],["Election Reforms", "Photo voter IDs|Spending limits|Disclosure of assets|NOTA"]],
  p: ["Ballot=>Paper or machine used to cast a vote","Electorate=>All people eligible to vote","Polling booth=>Place where people cast votes","Turnout=>Percentage of voters who actually voted","Adult franchise=>Right to vote for all citizens aged 18 and above","Delimitation=>Drawing boundaries of constituencies","Reserved constituency=>Seat kept for SC or ST candidates","NOTA=>None of the above option on EVM"],
},
'ix-sst8': {
  s: [["Sectors", "Primary sector|Secondary sector|Tertiary sector"],["Primary Activities", "Farming|Fishing|Mining|Forestry"],["Rewards of Factors", "Rent for land|Wages for labour|Interest for capital|Profit for entrepreneur"],["Economic Systems", "Capitalist|Socialist|Mixed"]],
  p: ["Opportunity cost=>Value of the next best alternative given up","Producer=>Person who makes goods or services","Consumer=>Person who uses goods and services","Money=>Medium of exchange","Resources=>Means used to produce goods","Choice=>Selecting among alternatives because of scarcity","Trade=>Buying and selling of goods","Economy=>System by which a society produces and distributes goods"].filter(t=>!/^(Economy)/.test(t)),
},
'ix-sst9': {
  s: [["Demand Shifters", "Income|Tastes|Price of related goods|Population"],["Supply Shifters", "Cost of production|Technology|Number of sellers|Weather"],["Market Types", "Local market|Wholesale market|Online market|Weekly market"],["Law Statements", "Price rises demand falls|Price rises supply rises"]],
  p: ["Demand curve=>Graph showing quantity demanded at each price","Supply curve=>Graph showing quantity supplied at each price","Market=>Place or system where buyers and sellers meet","Price=>Amount paid for a good or service","Competition=>Rivalry among sellers","Substitute=>Good that can replace another","Complement=>Good used together with another","Wholesale=>Sale in large quantities"],
},
'ix-sstp2-1': {
  s: [["Ocean Names", "Pacific|Atlantic|Indian|Arctic|Southern"],["Causes of Tides", "Gravity of the Moon|Gravity of the Sun|Rotation of the Earth"],["Warm Currents", "Gulf Stream|Kuroshio|Brazil Current"],["Cold Currents", "Labrador|Humboldt|Canary"]],
  p: ["Ocean floor=>Bottom of the sea with ridges and trenches","Mariana Trench=>Deepest part of the ocean","Spring tide=>High tide at full and new moon","Neap tide=>Low tide at the quarter moons","Coral reef=>Ocean structure built by tiny animals","Tsunami=>Large sea waves caused by undersea earthquakes","Mangrove=>Trees that grow in coastal salty water","Estuary=>Place where a river meets the sea"],
},
'ix-sstp2-2': {
  s: [["Rainforest Animals", "Jaguar|Toucan|Sloth|Orangutan"],["Desert Plants", "Cactus|Date palm|Acacia"],["Polar Animals", "Polar bear|Penguin|Reindeer|Walrus"],["Conservation Steps", "Planting trees|Protecting habitats|Banning hunting|Reducing pollution"]],
  p: ["Ecosystem=>Living and non-living parts interacting in an area","Producer=>Organism that makes its own food","Consumer=>Organism that eats other organisms","Decomposer=>Organism that breaks down dead matter","Adaptation=>Feature that helps an organism survive","Endangered=>At risk of extinction","Extinct=>No longer exists","Migration=>Seasonal movement of animals"],
},
'ix-sstp2-3': {
  s: [["Delhi Sultanate Dynasties", "Slave|Khalji|Tughlaq|Sayyid|Lodi"],["Mughal Buildings", "Taj Mahal|Red Fort|Humayun's Tomb|Fatehpur Sikri"],["Battles", "First Battle of Panipat|Battle of Haldighati|Battle of Talikota"],["Administration Terms", "Iqta|Jagir|Zabt|Sulh-i-kul"]],
  p: ["Sultan=>Ruler of the Delhi Sultanate","Mansabdar=>Mughal official ranked by a number","Bhakti=>Devotional movement","Sufi=>Mystic tradition of Islam","Jizya=>Tax on non-Muslims removed by Akbar","Din-i-Ilahi=>Faith proposed by Akbar","Peshwa=>Prime minister of the Maratha kingdom","Deccan=>Plateau region of southern India"],
},
'ix-sstp2-4': {
  s: [["Parliament Parts", "Lok Sabha|Rajya Sabha|President"],["Tiers of Local Government", "Gram Panchayat|Block Samiti|Zila Parishad"],["Government Services", "Police|Postal service|Public transport|Fire brigade"],["Judicial Bodies", "Supreme Court|High Court|District Court"]],
  p: ["Policy=>Plan of action adopted by a government","Law=>Rule made by the legislature","Tax=>Money collected by the government","Welfare=>Programmes for people's wellbeing","Subsidy=>Financial help given by the government","Implementation=>Putting a plan into action","Budget=>Government's yearly income and spending plan","Panchayat=>Village-level self-government"].filter(t=>!/^(Budget)/.test(t)),
},
'ix-sstp2-5': {
  s: [["Income Sources", "Pocket money|Salary|Gifts|Earnings from work"],["Expenses", "Rent|Books|Transport|Snacks"],["Savings Options", "Piggy bank|Bank account|Post office|Recurring deposit"],["Money Safety", "Never share your PIN|Keep receipts|Check bank statements|Avoid fake links"]],
  p: ["Compound interest=>Interest on both principal and earned interest","Principal=>Original amount deposited or borrowed","Deposit=>Money placed in a bank","Withdrawal=>Taking money out of an account","Debit card=>Card to pay from your own bank balance","Credit=>Money borrowed to be repaid later","Insurance=>Protection against financial loss","Needs=>Things essential for life"],
  c: [["Pocket money ₹800, spent ₹550. How much is saved?",250,"₹","800 - 550."],["Save ₹200 per month for 6 months. Find total savings.",1200,"₹","200 x 6."]],
},
'ix-sstp2-6': {
  s: [["Business Ideas", "Mobile app|Home bakery|Eco-friendly bags|Tutoring service"],["Marketing Ways", "Posters|Social media|Word of mouth|Discounts"],["Costs", "Raw material|Wages|Rent|Electricity"],["Business Types", "Sole trader|Partnership|Company|Cooperative"]],
  p: ["Revenue=>Money earned from sales","Cost=>Money spent to run a business","Loss=>When costs are more than revenue","Innovation=>Introducing a new idea or method","Customer=>Person who buys from a business","Brand=>Name or symbol that identifies a product","Pitch=>Short presentation of a business idea","Capital=>Money invested in a business"],
  c: [["Revenue ₹90,000 and costs ₹60,000. Find the profit.",30000,"₹","90,000 - 60,000."],["Sell 50 items at ₹40 each. Find the revenue.",2000,"₹","50 x 40."]],
},
'ix-eng1': {
  s: [["Adverbs", "Quickly|Slowly|Carefully|Loudly"],["Pronouns", "She|They|Her|Their"],["Prepositions", "In|On|At|Under"],["Past Tense Verbs", "Wrote|Learnt|Spoke|Thought"]],
  p: ["Noun=>Word naming a person, place or thing","Verb=>Word showing action or state","Adjective=>Word describing a noun","Adverb=>Word describing a verb","Pronoun=>Word used in place of a noun","Preposition=>Word showing relation between nouns","Conjunction=>Word joining words or sentences","Poem=>Writing arranged in lines with rhythm"].filter(t=>!/^(Refrain)/.test(t)),
},
'ix-eng2': {
  s: [["Noun Clauses", "What he said surprised us|I know that she is right"],["Relative Pronouns", "who|whom|which|whose"],["Conjunctions", "and|but|because|although"],["Symbols in Literature", "Pot as creativity|Clay as potential|Wheel as life"]],
  p: ["Clause=>Group of words with a subject and verb","Phrase=>Group of words without a finite verb","Symbol=>Object that stands for an idea","Free verse=>Poetry without a fixed rhyme or metre","Dignity of labour=>Respect for every kind of work","Craft=>Skill in making things by hand","Protagonist=>Main character of a story","Conflict=>Struggle between opposing forces"],
},
'ix-eng3': {
  s: [["Rhyming Pairs", "Day and say|Light and night|Sun and fun|Tree and free"],["Tenses in Passive", "Simple present|Simple past|Present perfect"],["Imagery Types", "Visual|Auditory|Tactile|Olfactory"],["Other Devices", "Simile|Personification|Onomatopoeia|Repetition"]],
  p: ["Voice=>Form of a verb showing who does the action","Rhyme scheme=>Pattern of end sounds in a poem","Stanza=>Group of lines in a poem","Personification=>Giving human qualities to non-human things","Alliteration=>Repetition of initial consonant sounds","Onomatopoeia=>Word imitating a sound","Theme=>Central idea of a piece of writing","Mood=>Feeling created in the reader"],
},
'ix-eng4': {
  s: [["Memory Senses", "Smell|Sight|Taste|Touch|Sound"],["Types of Humour", "Irony|Satire|Wit|Exaggeration"],["Modals of Possibility", "might|shall|would|will"],["Narrative Elements", "Plot|Character|Setting|Conflict"]],
  p: ["Modal verb=>Verb expressing ability, duty or possibility","Suspense=>Excitement about what will happen next","Flashback=>Scene from the past within a story","Tone=>Author's attitude to the subject","Sensory imagery=>Language that appeals to the five senses","Narrator=>Person who tells the story","Setting=>Time and place of a story","Climax=>Turning point of a story"],
},
'ix-eng5': {
  s: [["Reporting Verbs", "said|told|asked|replied"],["Tense Changes", "is becomes was|do becomes did|has becomes had"],["Time Words in Reported Speech", "today becomes that day|tomorrow becomes the next day|now becomes then"],["Interview Parts", "Introduction|Questions|Answers|Conclusion"]],
  p: ["Direct speech=>Exact words of the speaker in quotes","Indirect speech=>Reporting what was said without exact words","Backshift=>Change of tense in reported speech","Interviewer=>Person who asks the questions","Persistence=>Continuing despite difficulty","Disability=>Physical or mental impairment","Inclusion=>Making sure everyone can take part","Achievement=>Something accomplished with effort"].filter(t=>!/^(Inclusion|Resilience)/.test(t)),
},
'ix-eng6': {
  s: [["More Idioms", "A piece of cake|Under the weather|Spill the beans|Cost an arm and a leg"],["Meanings of Idioms", "Break the ice means start a conversation|Piece of cake means very easy|Under the weather means unwell"],["More Phrasal Verbs", "Turn down|Find out|Set up|Call off"],["Musical Terms", "Melody|Harmony|Tempo|Chorus"]],
  p: ["Idiom=>Phrase with a meaning different from its words","Phrasal verb=>Verb combined with a particle giving a new meaning","Dialogue=>Conversation between characters","Rhythm=>Pattern of beats in speech or music","Stage=>Place where performers show their act","Duet=>Performance by two people","Audience=>People who watch or listen","Friendship=>Bond between friends"].filter(t=>!/^(Play|Dialogue)/.test(t)),
},
'ix-eng7': {
  s: [["Figures of Speech", "Simile|Metaphor|Hyperbole|Personification"],["Mood Words", "Joyful|Gloomy|Tense|Peaceful"],["Letters", "Formal letter|Informal letter|Postcard"],["Postal Terms", "Stamp|Envelope|Address|Postman"]],
  p: ["Simile=>Comparison using like or as","Metaphor=>Direct comparison without like or as","Hyperbole=>Deliberate exaggeration","Tone=>Writer's attitude","Mood=>Atmosphere of a piece","Courier=>Person who carries messages or parcels","Message=>Information sent from one person to another","Messenger=>Person who delivers a message"].filter(t=>!/^(Tone|Mood)/.test(t)),
},
'ix-eng8': {
  s: [["Third Conditional", "If I had known, I would have come|If she had studied, she would have passed"],["If-clause Verbs", "If I were|If he studies|If they had left"],["Informal Letter Parts", "Address of sender|Greeting|Body of letter|Yours lovingly"],["Dream-related Words", "Ambition|Goal|Hope|Determination"]],
  p: ["Conditional=>Sentence expressing a condition and result","Ambition=>Strong desire to achieve something","Determination=>Firmness of purpose","Goal=>Aim one wants to reach","Passion=>Strong enthusiasm for something","Formal letter=>Letter written to an official or stranger","Informal letter=>Letter written to friends or family","Salutation=>Greeting at the start of a letter"].filter(t=>!/^(Passion|Salutation)/.test(t)),
},
'ix-hin1': {
  s: [["पर्यायवाची", "आकाश - गगन|फूल - पुष्प|पेड़ - वृक्ष|नदी - सरिता"],["विलोम", "सच - झूठ|दूर - पास|ऊपर - नीचे|गर्म - ठंडा"],["मुहावरे", "आग बबूला होना|कान भरना|दाँतों तले उँगली दबाना"]],
  p: ["बैल=>खेती में काम आने वाला पशु","कथा=>कहानी","मित्रता=>दोस्ती का भाव","स्वतंत्रता=>आज़ादी","परिश्रम=>मेहनत","किसान=>खेती करने वाला व्यक्ति","अन्याय=>न्याय के विरुद्ध काम","साहस=>हिम्मत"],
},
'ix-hin2': {
  s: [["विराम-चिह्न", "योजक चिह्न|उद्धरण चिह्न|अर्द्ध विराम|निर्देशक चिह्न"],["मिश्र वाक्य", "जो परिश्रम करता है वह सफल होता है|मैंने देखा कि वह आ रहा है"],["निबंध के अंग", "भूमिका|विषय-वस्तु|उपसंहार"]],
  p: ["अनुच्छेद=>किसी एक विचार पर लिखा गया छोटा गद्यांश","वाक्य=>शब्दों का सार्थक समूह","विचार=>मन में उठने वाली बात","लेखन=>लिखने की कला","संक्षेप=>कम शब्दों में बात","शीर्षक=>रचना का नाम","भूमिका=>आरंभिक भाग","उपसंहार=>अंतिम भाग"],
},
'ix-hin3': {
  s: [["सर्वनाम", "मैं|तुम|वह|यह"],["क्रिया के भेद", "सकर्मक|अकर्मक|संयुक्त|प्रेरणार्थक"],["विशेषण", "सुंदर|ऊँचा|मीठा|लंबा"]],
  p: ["संवाद=>बातचीत","मौन=>चुप रहने की स्थिति","अकेलापन=>किसी के साथ न होने का भाव","आँगन=>घर के भीतर खुली जगह","व्यक्तिवाचक=>किसी विशेष नाम का बोध कराने वाली संज्ञा","जातिवाचक=>पूरी जाति का बोध कराने वाली संज्ञा","भाववाचक=>गुण या भाव का बोध कराने वाली संज्ञा","सर्वनाम=>संज्ञा की जगह आने वाला शब्द"].filter(t=>!/^सर्वनाम/.test(t)),
},
'ix-hin4': {
  s: [["परिमाणवाचक क्रिया-विशेषण", "बहुत|थोड़ा|कम|अधिक"],["क्रिया के रूप", "पढ़ता है|पढ़ा|पढ़ेगा"],["साक्षात्कार के अंग", "प्रश्नकर्ता|उत्तरदाता|प्रश्न|उत्तर"]],
  p: ["साक्षात्कार=>किसी व्यक्ति से प्रश्न पूछकर जानकारी लेना","सकर्मक=>जिस क्रिया का फल कर्म पर पड़े","अकर्मक=>जिस क्रिया को कर्म की ज़रूरत न हो","वार्तालाप=>आपसी बातचीत","संगीत=>गायन और वादन की कला","ध्वनि=>सुनाई देने वाली आवाज़","सुर=>संगीत में स्वर","विशेषण=>संज्ञा की विशेषता बताने वाला शब्द"],
},
'ix-hin5': {
  s: [["पुल्लिंग", "घोड़ा|पर्वत|सूर्य|चाँद"],["सागर के अंग", "लहर|तट|तल|द्वीप"],["वचन बदलो", "कलम से कलमें|बात से बातें|चिड़िया से चिड़ियाँ"]],
  p: ["वचन=>शब्द की संख्या का बोध","लिंग=>स्त्री या पुरुष का बोध","एकवचन=>एक का बोध","बहुवचन=>एक से अधिक का बोध","चट्टान=>बड़ा कठोर पत्थर","सागर=>समुद्र","संगम=>मिलन स्थान","अनेक=>एक से ज़्यादा"],
},
'ix-hin6': {
  s: [["विस्मयादिबोधक वाक्य", "वाह! कितना सुंदर है|अरे! यह क्या हुआ|हाय! मैं लुट गया"],["आज्ञावाचक वाक्य", "दरवाज़ा बंद करो|चुपचाप बैठो"],["रीढ़ की हड्डी के पात्र", "रामस्वरूप|उमा|शंकर|गोपाल प्रसाद"]],
  p: ["रीढ़=>पीठ की मुख्य हड्डी","एकांकी=>एक अंक का नाटक","दहेज=>विवाह के समय दिया जाने वाला धन","स्वाभिमान=>अपने सम्मान का भाव","व्यंग्य=>चुभती हुई बात","विवाह=>शादी","सम्मान=>इज़्ज़त","संवाद=>पात्रों की बातचीत"],
},
'ix-hin7': {
  s: [["उपसर्ग", "अन्|निर्|उप|प्रति|सु"],["प्रत्यय", "पन|आवट|आस|ई|ता"],["उपसर्ग से शब्द", "अनपढ़|निडर|उपहार|सुपुत्र"]],
  p: ["उपसर्ग=>शब्द के आरंभ में जुड़ने वाला अंश","प्रत्यय=>शब्द के अंत में जुड़ने वाला अंश","देश=>राष्ट्र","मातृभूमि=>जन्मभूमि","स्वतंत्र=>आज़ाद","गौरव=>गर्व","एकता=>मेल का भाव","समर्पण=>पूरी तरह अर्पित करना"],
},
'ix-hin8': {
  s: [["रैदास के पद के भाव", "ईश्वर से निकटता|भक्ति|अहंकार का त्याग|समानता"],["उत्प्रेक्षा अलंकार", "मानो सूरज धरती पर उतर आया|जनु चाँद मुख पर आ बैठा"],["अनुप्रास अलंकार", "चंदन चर्चित चारु चरण|तरनि तनूजा तट तमाल"]],
  p: ["भक्ति=>ईश्वर के प्रति प्रेम","पद=>गाए जाने वाली काव्य रचना","अलंकार=>काव्य की शोभा बढ़ाने वाला तत्व","उपमा=>समानता दिखाने वाला अलंकार","रूपक=>उपमेय पर उपमान का आरोप","चंदन=>सुगंधित लकड़ी","पानी=>जल","संत=>साधु महात्मा"],
},
'ix-hin9': {
  s: [["संप्रदान कारक", "के लिए|के वास्ते|राम ने सीता के लिए फल लाया"],["अपादान कारक", "से अलग होना|पेड़ से पत्ता गिरा"],["संबंध और अधिकरण", "का, के, की|में, पर|घर में|मेज़ पर"]],
  p: ["कारक=>संज्ञा या सर्वनाम का क्रिया से संबंध","विभक्ति=>कारक की पहचान कराने वाला चिह्न","संवाद=>बातचीत","क्रोध=>गुस्सा","धनुष=>तीर चलाने का साधन","परशुराम=>क्रोधी ऋषि","लक्ष्मण=>राम के छोटे भाई","विनम्रता=>नम्र होने का गुण"],
},
'ix-hin10': {
  s: [["तत्सम शब्द", "सूर्य|कर्म|अग्नि|पुष्प"],["तद्भव शब्द", "सूरज|काम|आग|फूल"],["पर्यायवाची", "आकाश - अंबर|सोना - कनक|समुद्र - सागर|तालाब - सरोवर"],["विलोम", "आना - जाना|नया - पुराना|सत्य - असत्य|प्रेम - घृणा"]],
  p: ["भारती=>सरस्वती या भारत माता","विजय=>जीत","जय=>जीत की ध्वनि","तत्सम=>संस्कृत से ज्यों का त्यों आया शब्द","तद्भव=>संस्कृत से बदलकर आया शब्द","देशज=>स्थानीय बोलियों से आया शब्द","स्वर=>ध्वनि","नवीन=>नया"],
},
'ix-hin11': {
  s: [["यण संधि", "इति + आदि = इत्यादि|सु + आगत = स्वागत|अति + अधिक = अत्यधिक"],["वृद्धि संधि", "एक + एक = एकैक|सदा + एव = सदैव"],["व्यंजन संधि", "दिक् + गज = दिग्गज|जगत् + ईश = जगदीश"],["वीर रस के शब्द", "साहस|शौर्य|बलिदान|पराक्रम"]],
  p: ["रानी=>राजा की पत्नी या शासिका","वीरता=>बहादुरी","स्वतंत्रता=>आज़ादी","संधि=>दो ध्वनियों का मेल","स्वर संधि=>स्वर से स्वर के मेल से बना विकार","विच्छेद=>अलग करना","बलिदान=>देश के लिए प्राणों का त्याग","रणभूमि=>युद्ध का स्थान"],
},
'ix-hin12': {
  s: [["हरि के अर्थ", "विष्णु|सिंह|घोड़ा"],["कर के अर्थ", "हाथ|किरण|टैक्स"],["घर की याद के भाव", "बिछड़ने का दुख|माँ की याद|अपनापन|अकेलापन"]],
  p: ["अनेकार्थी=>जिस शब्द के कई अर्थ हों","स्मृति=>याद","मायका=>माँ का घर","विदाई=>बिछड़ने का क्षण","कविता=>काव्य रचना","भावना=>मन का भाव","परदेश=>दूसरे देश या स्थान","यादें=>बीती बातें"],
},
});
