const B = require('./xlib.js');
module.exports = B({
'sci10-ch1': {
  s: [
    ["Combination Reactions", "Rusting of iron|Burning of coal"],
    ["Decomposition Reactions", "Heating of ferrous sulphate|Decomposition of silver chloride in sunlight"],
    ["Double Displacement Reactions", "Sodium sulphate and barium chloride|Silver nitrate and sodium chloride"],
    ["Exothermic Reactions", "Burning of natural gas|Respiration|Decomposition of vegetable matter"],
    ["Endothermic Reactions", "Photosynthesis|Thermal decomposition of limestone|Melting of ice"],
    ["Ways to Prevent Rusting", "Painting|Galvanisation|Greasing|Alloying"],
  ],
  p: ["Balanced equation=>Equation with equal atoms of each element on both sides", "Precipitate=>Insoluble solid formed in a reaction", "Galvanisation=>Coating iron with a layer of zinc", "Antioxidant=>Substance added to food to prevent rancidity", "Skeleton equation=>Equation showing formulae without balancing", "Reducing agent=>Substance that gives away oxygen or gains hydrogen", "Redox reaction=>Reaction where oxidation and reduction occur together", "Thermal decomposition=>Breaking of a compound by heat"].filter(t => !/^Reducing/.test(t)),
  c: [["How many hydrogen atoms are on the left in 2H2 + O2 -> 2H2O?", 4, "atoms", "2 x 2 = 4."], ["Fe + CuSO4 -> FeSO4 + Cu. How many different elements are on the left?", 4, "elements", "Fe, Cu, S and O."]],
},
'sci10-ch2': {
  s: [
    ["Indicators Turning Red in Acid", "Blue litmus|Methyl orange|China rose"],
    ["Indicators Turning Blue in Base", "Red litmus|Phenolphthalein turns pink|Turmeric turns red"],
    ["Uses of Salts", "Common salt in food|Bleaching powder for disinfecting|Baking soda in antacids|Washing soda for hard water"],
    ["Antacid Ingredients", "Milk of magnesia|Magnesium hydroxide"],
    ["Natural Acids", "Lactic acid in curd|Tartaric acid in tamarind|Oxalic acid in spinach|Methanoic acid in ant sting"],
    ["Products of Chlor-alkali Process", "Sodium hydroxide|Chlorine gas|Hydrogen gas"],
  ],
  p: ["Neutralisation=>Reaction of an acid with a base to give salt and water", "Water of crystallisation=>Fixed number of water molecules in a salt crystal", "Universal indicator=>Mixture of dyes giving different colours at different pH", "Strong acid=>Acid that ionises completely in water", "Olfactory indicator=>Substance whose smell changes in acid or base", "Gypsum=>CaSO4.2H2O", "Bleaching powder=>Calcium oxychloride made from lime and chlorine", "Antacid=>Mild base used to treat acidity"],
  c: [["A solution has pH 3. What is its pH after the hydrogen ion concentration becomes 10 times smaller?", 4, "pH", "pH rises by 1 for every tenfold fall in H+."], ["How many water molecules does washing soda Na2CO3.10H2O hold per formula unit?", 10, "molecules", "The number after the dot is 10."]],
},
'sci10-ch3': {
  s: [
    ["Reactivity Series (low)", "Copper|Silver|Gold|Mercury"],
    ["Reactivity Series (middle)", "Zinc|Iron|Lead|Aluminium"],
    ["Ionic Compound Properties", "High melting point|Conduct when molten|Hard and brittle|Soluble in water"],
    ["Common Alloys", "Brass|Bronze|Stainless steel|Solder"],
    ["Reactivity Series (more)", "Lithium|Barium|Tin|Hydrogen"],
  ],
  p: ["Roasting=>Heating a sulphide ore strongly in air", "Calcination=>Heating a carbonate ore strongly in limited air", "Thermit reaction=>Reaction of iron oxide with aluminium to give molten iron", "Gangue=>Impurities present in an ore", "Mineral=>Naturally occurring compound of a metal", "Anodising=>Forming a thick oxide layer on aluminium", "Sonorous=>Metals that produce a ringing sound", "Electrolytic refining=>Purifying a metal using an impure anode"],
},
'sci10-ch4': {
  s: [
    ["Functional Groups", "Alcohol|Aldehyde|Ketone|Carboxylic acid"],
    ["Properties of Carbon", "Tetravalency|Catenation|Forms covalent bonds|Forms multiple bonds"],
    ["Soap Properties", "Micelle formation|Cleaning action|Sodium salt of fatty acid|Works poorly in hard water"],
    ["Reactions of Carbon Compounds", "Combustion|Oxidation|Addition|Substitution"],
    ["Ethanol Uses", "Solvent in medicines|Fuel additive|Tincture of iodine|Cough syrups"],
    ["Allotropes of Carbon", "Diamond|Graphite|Fullerene|Graphene"],
  ],
  p: ["Covalent bond=>Bond formed by sharing electrons", "Homologous series=>Family of compounds with the same functional group and a CH2 difference", "Esterification=>Reaction of acid and alcohol giving a sweet-smelling ester", "Hydrogenation=>Addition of hydrogen to unsaturated hydrocarbons with a nickel catalyst", "Saturated=>Hydrocarbon with only single bonds", "Unsaturated=>Hydrocarbon with double or triple bonds", "Denatured alcohol=>Ethanol made unfit to drink", "Detergent=>Cleaning agent that works in hard water"],
  c: [["How many carbon atoms are in butane, C4H10?", 4, "atoms", "The subscript of C is 4."], ["How many hydrogen atoms are in ethane, C2H6?", 6, "atoms", "The subscript of H is 6."]],
},
'sci10-ch5': {
  s: [
    ["Parts of the Alimentary Canal", "Mouth|Oesophagus|Stomach|Small intestine|Large intestine"],
    ["Digestive Juices", "Saliva|Gastric juice|Bile|Pancreatic juice"],
    ["Enzymes", "Amylase|Pepsin|Trypsin|Lipase"],
    ["Parts of Human Heart", "Atrium|Ventricle|Septum|Valve"],
    ["Blood Components", "Plasma|Red blood cells|White blood cells|Platelets"],
    ["Transport in Plants", "Xylem carries water|Phloem carries food|Transpiration pull|Translocation"],
  ],
  p: ["Peristalsis=>Rhythmic contraction that pushes food along the gut", "Transpiration=>Loss of water vapour from leaves", "Alveoli=>Tiny air sacs in the lungs for gas exchange", "Villi=>Finger-like folds in the small intestine for absorption", "Bile=>Juice from the liver that emulsifies fats", "Guard cells=>Cells that control opening of stomata", "Autotroph=>Organism that makes its own food", "Heterotroph=>Organism that depends on others for food"],
  c: [["How many chambers does the human heart have?", 4, "chambers", "Two atria and two ventricles."], ["One molecule of glucose gives 2 ATP in glycolysis and 36 ATP in aerobic respiration. How many more ATP does aerobic give?", 34, "ATP", "36 - 2."]].slice(0, 1),
},
'sci10-ch6': {
  s: [
    ["Parts of the Brain", "Cerebrum|Cerebellum|Medulla|Pons"],
    ["Parts of a Neuron", "Dendrite|Cell body|Axon|Nerve ending"],
    ["Reflex Arc Path", "Receptor|Sensory neuron|Relay neuron|Motor neuron|Effector"],
    ["Endocrine Glands", "Pituitary|Thyroid|Pancreas|Adrenal"],
    ["Plant Tropisms", "Hydrotropism|Chemotropism|Thigmotropism"],
  ],
  p: ["Neuron=>Nerve cell, the unit of the nervous system", "Synapse=>Gap between two neurons where signals pass chemically", "Hormone=>Chemical messenger released by endocrine glands", "Phototropism=>Growth of a plant part in response to light", "Geotropism=>Growth of a plant part in response to gravity", "Goitre=>Swelling of the neck due to iodine deficiency", "Diabetes=>Disorder caused by too little insulin", "Tendril=>Plant part that coils around support after touch"],
},
'sci10-ch7': {
  s: [
    ["Parts of the Flower (Female)", "Stigma|Style|Carpel|Ovule"],
    ["Male Reproductive System", "Testes|Vas deferens|Prostate gland|Urethra"],
    ["Female Reproductive System", "Ovary|Fallopian tube|Uterus|Vagina"],
    ["Types of Pollination", "Self-pollination|Cross-pollination"],
    ["Vegetative Propagation Examples", "Rose cutting|Potato tuber|Bryophyllum leaf|Sugarcane stem"],
    ["Contraceptive Methods", "Condom|Copper-T|Oral pills|Surgical methods"],
  ],
  p: ["Binary fission=>Splitting of a cell into two in Amoeba", "Regeneration=>Growth of a full organism from a body part", "Gamete=>Male or female sex cell", "Zygote=>Cell formed after fertilisation", "Implantation=>Embedding of the embryo in the uterus wall", "Placenta=>Tissue that gives nutrients to the embryo", "Variation=>Differences among individuals of a species", "DNA copying=>Basis of reproduction making similar copies of cells"],
},
'sci10-ch8': {
  s: [
    ["Mendel's Experiment Terms", "Monohybrid cross|Dihybrid cross|Pure line|Hybrid"],
    ["Evidence for Evolution", "Homologous organs|Analogous organs|Fossils"],
    ["Sex Chromosomes", "Girl gets X from both parents|Boy gets Y from father|Sperm decides the sex"],
    ["Accumulation of Variation", "Sexual reproduction|Mutation|Natural selection|Genetic drift"],
  ],
  p: ["Gene=>Unit of heredity that controls a trait", "Dominant=>Trait that appears in the F1 generation", "Recessive=>Trait that is hidden in the F1 generation", "Speciation=>Formation of new species", "Fossil=>Preserved remains of ancient organisms", "Homologous organs=>Organs with same structure but different functions", "Analogous organs=>Organs with different structure but same function", "Acquired trait=>Trait gained in a lifetime, not inherited", "Heredity=>Passing of traits from parents to offspring"],
  c: [["In a dihybrid cross the F2 phenotypic ratio is 9:3:3:1. How many different phenotypes appear?", 4, "types", "The ratio has four parts."], ["Humans have 23 pairs of chromosomes. How many chromosomes are in one body cell?", 46, "chromosomes", "23 x 2."]],
},
'sci10-ch9': {
  s: [
    ["Mirror Formula Terms", "Object distance|Image distance|Focal length|Magnification"],
    ["Image by Concave Mirror (object beyond C)", "Real|Inverted|Diminished"],
    ["Laws of Reflection", "Angle of incidence equals angle of reflection|Incident ray, reflected ray and normal lie in one plane"],
    ["Laws of Refraction", "Snell's law|Ray bends towards the normal in a denser medium|Ray bends away from the normal in a rarer medium"],
    ["Sign Convention", "Distances measured from the pole|Distances along the incident direction are positive|Heights above the axis are positive"],
  ],
  p: ["Pole=>Centre of the reflecting surface", "Centre of curvature=>Centre of the sphere of which the mirror is a part", "Radius of curvature=>Twice the focal length", "Optical centre=>Central point of a lens", "Magnification=>Ratio of image height to object height", "Refraction=>Bending of light on passing from one medium to another", "Real image=>Image that can be formed on a screen", "Virtual image=>Image that cannot be formed on a screen"],
  c: [["A concave mirror has focal length 15 cm. Find its radius of curvature.", 30, "cm", "R = 2f."], ["A lens has focal length 0.25 m. Find its power.", 4, "D", "P = 1/f."]],
},
'sci10-ch10': {
  s: [
    ["Colours of the Spectrum", "Violet|Indigo|Blue|Green|Yellow|Orange|Red"],
    ["Correction of Defects", "Concave lens for myopia|Convex lens for hypermetropia|Bifocal lens for presbyopia"],
    ["Reasons for Blue Sky", "Scattering by air molecules|Short wavelengths scatter more"],
    ["Parts of the Eye (more)", "Lens|Ciliary muscles|Optic nerve|Aqueous humour"],
    ["Atmospheric Refraction Effects", "Twinkling of stars|Advance sunrise|Delayed sunset|Flattened Sun"],
  ],
  p: ["Dispersion=>Splitting of white light into its colours", "Spectrum=>Band of colours obtained after dispersion", "Prism=>Transparent glass piece that disperses light", "Near point=>Closest distance for clear vision, about 25 cm", "Far point=>Farthest point a normal eye sees clearly, infinity", "Scattering=>Spreading of light in all directions by particles", "Power of accommodation=>Ability of the eye lens to change focal length", "Cataract=>Clouding of the eye lens"],
},
'sci10-ch11': {
  s: [
    ["Circuit Symbols", "Cell|Battery|Switch|Ammeter|Voltmeter|Rheostat"],
    ["Factors of Resistance", "Length of the conductor|Area of cross-section|Material|Temperature"],
    ["Heating Effect Uses", "Electric heater|Electric iron|Fuse|Bulb filament"],
    ["Meter Connection", "Ammeter in series|Voltmeter in parallel"],
    ["Good Conductors and Insulators", "Copper|Silver|Rubber|Glass"],
  ],
  p: ["Electric current=>Rate of flow of charge", "Potential difference=>Work done to move a unit charge between two points", "Coulomb=>Unit of charge", "Joule's law=>H = I squared R t", "Fuse=>Wire of low melting point that protects circuits", "Resistivity=>Resistance of a unit cube of a material", "Rheostat=>Variable resistor", "Kilowatt hour=>Commercial unit of electrical energy"],
  c: [["A current of 3 A flows through a 4 ohm resistor. Find the voltage.", 12, "V", "V = IR."], ["A 60 W bulb runs for 5 hours. How many watt-hours of energy is used?", 300, "Wh", "60 x 5."], ["A 12 V battery drives 2 A. Find the resistance.", 6, "ohm", "R = V/I."]],
},
'sci10-ch12': {
  s: [
    ["Field of a Straight Wire", "Concentric circles|Direction by right-hand thumb rule|Stronger when current increases"],
    ["Motor Parts", "Armature coil|Split-ring commutator|Brushes|Magnet"],
    ["Generator Parts", "Slip rings|Armature|Carbon brushes|Permanent magnet"],
    ["Household Wiring", "Live wire is red|Neutral wire is black|Earth wire is green|Fuse in the live wire"],
    ["Current Types", "AC reverses direction|DC flows in one direction|India's AC frequency is 50 Hz"],
  ],
  p: ["Magnetic field=>Region around a magnet where its force is felt", "Solenoid=>Coil of many circular turns of wire", "Electromagnet=>Soft iron core inside a solenoid carrying current", "Electromagnetic induction=>Production of current by a changing magnetic field", "Earth wire=>Wire connected to the metal body for safety", "Short circuit=>Live and neutral wires touching directly", "Overloading=>Drawing more current than the circuit can carry", "Commutator=>Device that reverses current direction in a motor"],
},
'sci10-ch13': {
  s: [
    ["Trophic Levels", "First trophic level|Second trophic level|Third trophic level|Fourth trophic level"],
    ["Biodegradable Waste", "Vegetable peels|Paper|Cotton cloth|Dung"],
    ["Non-biodegradable Waste", "Plastic|DDT|Glass|Aluminium cans"],
    ["Ozone Depletion", "CFCs|Ultraviolet radiation|Skin cancer|UNEP agreement"],
    ["Ecosystem Types", "Pond|Forest|Garden|Crop field"],
  ],
  p: ["Ecosystem=>All living and non-living things interacting in an area", "Food chain=>Sequence of organisms in which each eats the one before", "Food web=>Network of interlinked food chains", "Biomagnification=>Increase in concentration of harmful chemicals along a food chain", "Ozone=>Gas made of three oxygen atoms that absorbs UV", "Decomposer=>Organism that breaks dead matter into simple substances", "Producer=>Organism that makes food by photosynthesis", "Waste=>Material discarded as useless"],
  c: [["Producers have 10000 J of energy. How much reaches the second trophic level?", 1000, "J", "10 percent of 10000."], ["Producers have 1000 J. How much reaches the third trophic level?", 10, "J", "10 percent twice: 100 then 10."]],
},
});
