const B = require('./xlib.js');
module.exports = B({
'sst10-his1': {
  s: [
    ["Unification of Italy", "Young Italy|Kingdom of Sardinia-Piedmont|Red Shirts"],
    ["Unification of Germany", "Junkers|Frankfurt Parliament|Proclamation at Versailles"],
    ["Treaty of Vienna 1815 Outcomes", "Bourbon dynasty restored in France|Belgium joined the Kingdom of the Netherlands|Prussia gained Rhine territories|Austria got northern Italy|Russia got part of Poland"],
    ["Events of 1830-48", "July Revolution|Greek War of Independence|Silesian weavers' revolt|Belgium's independence"],
    ["Ideas of Nationalism", "Liberal nationalism|Conservatism after 1815|Romantic nationalism|Economic liberalism"],
  ],
  p: ["Marianne=>Female allegory of the French nation", "Germania=>Female allegory of the German nation", "Nation-state=>State where most citizens share a common identity", "Absolutism=>Government with unlimited power in one ruler", "Romanticism=>Cultural movement that stressed emotion and folk culture", "Suffrage=>Right to vote", "Ethnic=>Based on a common racial, tribal or cultural origin", "Utopian=>Vision of a society that is so ideal it is unlikely to exist", "Napoleonic Code=>Civil Code of 1804 giving equality before law", "Plebiscite=>Direct vote by which all people of a region accept or reject a proposal"],
},
'sst10-his2': {
  s: [
    ["Boycott in Non-Cooperation", "Surrender of titles|Boycott of civil services|Boycott of schools and courts|Boycott of foreign goods"],
    ["Methods of Civil Disobedience", "Breaking the salt law|Refusing to pay taxes|Picketing liquor shops|Burning foreign cloth"],
    ["Peasant and Tribal Movements", "Awadh Kisan Sabha|Gudem Hills guerrilla movement|Baba Ramchandra"],
    ["Business Groups", "Indian Industrial and Commercial Congress|FICCI|Purshottamdas Thakurdas|G.D. Birla"],
  ],
  p: ["Khilafat=>Movement to defend the Caliph's power after the First World War", "Begar=>Forced labour without pay", "Rowlatt Act=>1919 law allowing detention without trial", "Jallianwala Bagh=>Amritsar massacre of 13 April 1919", "Chauri Chaura=>Violent incident that made Gandhi withdraw Non-Cooperation", "Purna Swaraj=>Demand for complete independence declared at Lahore in 1929", "Separate electorates=>Seats reserved for a community voted only by that community", "Hind Swaraj=>Book written by Gandhi in 1909", "Boycott=>Refusal to deal with or buy goods", "Picket=>Protest by standing outside a shop or office"],
},
'sst10-his3': {
  s: [
    ["Pre-modern Trade", "Noodles and pasta|Potatoes from the Americas|Smallpox carried to the Americas|Gold from Africa"],
    ["19th Century Changes", "Rinderpest|Indentured labour|Gold standard|Colonialism"],
    ["Causes of the Great Depression", "Agricultural overproduction|Fall in agricultural prices|American loans withdrawn|Bank failures"],
    ["Bretton Woods Institutions", "IMF|World Bank|Fixed exchange rates|US dollar linked to gold"],
    ["Indentured Labour", "Contract for five years|Migration to the Caribbean|Called coolies|Hosay festival in Trinidad|Chutney music"],
  ],
  p: ["Silk Routes=>Trade routes linking Asia with Europe and north Africa", "Indentured labour=>Bonded labourer under contract to work for an employer", "Corn Laws=>British laws restricting import of corn", "Rinderpest=>Cattle plague that spread in Africa in the 1890s", "Bretton Woods=>1944 conference that set up the IMF and World Bank", "G-77=>Group of developing countries demanding a New International Economic Order", "Tariff=>Tax on imports", "Great Depression=>Worldwide economic collapse from 1929", "Cowries=>Shells used as a form of currency", "Gold standard=>System where currency value is linked to gold"].filter(t => !t.startsWith('Corn') && !t.startsWith('Rinderpest') && !t.startsWith('Indentured') && !t.startsWith('Bretton') && !t.startsWith('G-77')),
},
'sst10-his4': {
  s: [
    ["Inventions", "Flying shuttle|Cotton mill|Water frame"],
    ["Putting-out Workers", "Stapler|Fuller|Carder|Spinner|Weaver"],
    ["Colonial India Textiles", "East India Company|Jamdani|Chintz|Bandanna"],
    ["Indian Industrialists", "Dwarkanath Tagore|Dinshaw Petit|Jamsetji Tata|Seth Hukumchand|G.D. Birla"],
    ["Early Factories in India", "Bombay cotton mill 1854|Calcutta jute mill 1855|Elgin Mill at Kanpur|Ahmedabad cotton mill|Tata Iron and Steel Company"],
  ],
  p: ["Gomastha=>Paid servant of the East India Company who supervised weavers", "Spinning jenny=>Machine invented by James Hargreaves in 1764", "Fuller=>Person who gathers cloth by pleating", "Stapler=>Person who sorts wool according to fibre", "Guild=>Association of producers that trained craftspeople and controlled competition", "Jobber=>Person employed by industrialists to get new recruits", "Manchester=>Centre of the British cotton industry", "Merchant=>Trader who gave orders and raw material to cottage workers"],
},
'sst10-his5': {
  s: [
    ["Early Print", "Buddhist Diamond Sutra of 868|Handwritten manuscripts in Europe|Woodblock printing in Japan|Johann Gutenberg in Strasbourg"],
    ["Print and Dissent", "Martin Luther's Ninety-Five Theses|Menocchio|Index of prohibited books|Printing of the Bible"],
    ["Printed Works and Writers", "Gulamgiri|Amar Jiban|Chhote Aur Bade Ka Sawal|Sambad Kaumudi|Stri Purush Tulna|Kesari"],
    ["Printing Technology", "Hand press|Lithography|Cylindrical steam-powered press|Offset press"],
  ],
  p: ["Gutenberg=>German who developed the printing press around 1430s", "Manuscript=>Handwritten document", "Woodblock=>Wood carved with text used to print", "Print revolution=>Transformation of life and thought after printing spread", "Chapbooks=>Pocket-size books sold by pedlars", "Penny magazines=>Cheap magazines for women readers", "Gulamgiri=>Book by Jyotiba Phule on caste oppression", "Vernacular Press Act=>1878 law to control Indian-language newspapers", "Censorship=>Banning or controlling printed material", "Lithography=>Printing from a flat surface using oil and water repulsion"],
},
'sst10-geo1': {
  s: [
    ["Renewable Resources", "Solar energy|Wind energy|Forests|Water"],
    ["Non-renewable Resources", "Coal|Petroleum|Minerals|Natural gas"],
    ["Alluvial Soil", "Found in the northern plains|Rich in potash and lime|Suitable for wheat and rice|Khadar and Bhangar types"],
    ["Black Soil", "Also called regur|Made of lava rocks|Ideal for cotton|Retains moisture|Develops cracks when dry"],
    ["Red and Laterite Soil", "Red colour due to iron|Poor in humus|Leached in heavy rainfall regions|Suitable for tea and coffee|Cashew grows well"],
    ["Soil Conservation Methods", "Contour ploughing|Terrace farming|Shelter belts|Strip cropping|Afforestation"],
    ["Land Use Categories", "Forest area|Net sown area|Fallow land|Barren and wasteland|Pasture"],
  ],
  p: ["Resource=>Anything usable for needs if technologically accessible, economically feasible and culturally acceptable", "Khadar=>New alluvium found in floodplains", "Bhangar=>Old alluvium found away from floodplains", "Regur=>Black soil of the Deccan", "Gully erosion=>Running water cuts deep channels in the soil", "Sheet erosion=>Removal of top soil by water flowing as a sheet", "Agenda 21=>Declaration at the 1992 Rio Summit for sustainable development", "Fallow=>Land left uncultivated for a time to recover fertility"],
},
'sst10-geo2': {
  s: [
    ["Extinct Species", "Asiatic cheetah|Pink-headed duck"],
    ["Rare Species", "Himalayan brown bear|Wild Asiatic buffalo|Desert fox|Hornbill"],
    ["Normal Species", "Cattle|Sal|Pine|Rodents"],
    ["Endemic Species", "Andaman wild pig|Mithun"],
    ["Conservation Efforts", "Project Tiger|Chipko movement|Joint forest management|Sacred groves|Wildlife Protection Act 1972|Beej Bachao Andolan"],
    ["Forest Types by Administration", "Reserved forests|Protected forests|Unclassed forests"],
    ["More Threats to Forests", "Shifting cultivation|River valley projects|Hunting and poaching|Industrialisation"],
  ],
  p: ["Endangered species=>Species in danger of extinction", "Vulnerable species=>Species likely to become endangered soon", "Endemic species=>Species found only in a particular area", "Extinct species=>Species that no longer exist", "Reserved forest=>Forest with the most protection, where grazing is banned", "Wildlife Protection Act=>1972 law that banned hunting and protected habitats", "Biosphere reserve=>Protected area that conserves biodiversity and traditions of local people", "Afforestation=>Planting trees in areas without forest"],
},
'sst10-geo3': {
  s: [
    ["Multipurpose Project Benefits", "Inland navigation|Water supply for homes|Tourism|Soil conservation"],
    ["Problems of Dams", "Flooding of the basin|Water-borne diseases|Conflicts over water sharing"],
    ["Rainwater Harvesting Methods", "Bamboo drip irrigation|Palar pani|Inundation channels"],
    ["Dams and Rivers", "Bhakra Nangal on Sutlej|Hirakud on Mahanadi|Tehri on Bhagirathi|Sardar Sarovar on Narmada|Nagarjuna Sagar on Krishna|Mettur on Kaveri"],
  ],
  p: ["Dam=>Barrier across flowing water to obstruct, direct or slow it", "Hydropower=>Electricity generated from flowing water", "Rainwater harvesting=>Collecting and storing rain for later use", "Water scarcity=>Shortage of fresh water relative to demand", "Temples of modern India=>Nehru's phrase for dams", "Guls=>Diversion channels in the Western Himalayas", "Khadin=>Rajasthan farm system that stores rain in the soil", "Johad=>Small earthen check dam in Rajasthan"],
},
'sst10-geo4': {
  s: [
    ["Kharif Crops", "Bajra|Groundnut|Soyabean|Jute|Ragi"],
    ["Rabi Crops", "Gram|Linseed|Masoor"],
    ["Zaid Crops", "Watermelon|Muskmelon|Cucumber|Vegetables"],
    ["Plantation Crops", "Banana"],
    ["Reforms in Agriculture", "Land consolidation|Abolition of zamindari|Crop insurance|Kisan Credit Card|Minimum support price"],
    ["Primitive Subsistence Farming", "Slash and burn|Small patches of land|Primitive tools|Dependence on monsoon"],
    ["Commercial Farming", "High doses of modern inputs|Crops sold in the market|Large scale|Punjab and Haryana rice"],
  ],
  p: ["Slash and burn=>Shifting agriculture where land is cleared by burning", "Jhumming=>Name for shifting agriculture in the North-East", "Bhoodan=>Land donation movement started by Vinoba Bhave", "Operation Flood=>White Revolution for milk production", "Kharif=>Crops sown with the monsoon and harvested in September-October", "Rabi=>Crops sown in winter and harvested in summer", "Zaid=>Short crop season between rabi and kharif", "Rotation of crops=>Growing different crops one after another to restore fertility"],
},
'sst10-geo5': {
  s: [
    ["Metallic Minerals", "Lead|Zinc|Tin"],
    ["Non-metallic Minerals", "Dolomite|Potash|Sand"],
    ["Non-conventional Energy", "Solar energy|Wind energy|Biogas|Tidal energy|Geothermal energy"],
    ["Types of Coal", "Peat|Lignite|Bituminous|Anthracite"],
    ["Types of Iron Ore", "Magnetite|Hematite"],
  ],
  p: ["Mineral=>Naturally occurring substance with a definite chemical composition", "Ore=>Rock from which a metal can be extracted", "Ferrous minerals=>Minerals containing iron", "Non-ferrous minerals=>Minerals without iron", "Thermal power=>Electricity produced by burning coal, oil or gas", "Nuclear power=>Electricity produced from atomic minerals like uranium", "Geothermal energy=>Energy from the heat inside the Earth", "Biogas=>Fuel produced from animal dung and plant waste", "Solar photovoltaic=>Cells that convert sunlight into electricity"],
},
'sst10-geo6': {
  s: [
    ["Agro-based Industries", "Tea processing|Coffee processing|Dairy products|Fruit and vegetable processing"],
    ["Mineral-based Industries", "Petrochemicals|Copper smelting|Fertilisers"],
    ["Steel Plants", "Bhilai|Durgapur|Rourkela|Bokaro|Jamshedpur|Visakhapatnam"],
    ["Factors for Location of Industries", "Raw materials|Labour|Capital|Power|Market|Transport"],
    ["Types of Industrial Pollution", "Air pollution|Water pollution|Thermal pollution|Noise pollution"],
    ["Control of Industrial Pollution", "Fixing chimneys with filters|Recycling water|Treating effluents before release|Using rain water"],
    ["Importance of Manufacturing", "Modernises agriculture|Reduces unemployment|Reduces regional disparities|Brings foreign exchange"],
  ],
  p: ["Integrated steel plant=>Plant that carries out all steel-making processes in one complex", "Mini steel plant=>Smaller plant using steel scrap and sponge iron", "Software technology park=>Zone with facilities for software exports", "NTPC=>National Thermal Power Corporation", "Textile industry=>Industry that converts fibre into cloth", "Cement industry=>Industry that needs limestone and gypsum", "Industrial pollution=>Contamination of air, water and land by factories", "Value addition=>Increase in worth of a product through processing"],
},
'sst10-geo7': {
  s: [
    ["Railways", "Broad gauge|Metre gauge|Narrow gauge|Konkan Railway|Metro rail"],
    ["Major Ports", "Kandla|Mumbai|Jawaharlal Nehru Port|Marmagao|New Mangalore|Kochi|Chennai|Visakhapatnam|Paradip|Tuticorin"],
    ["Communication", "Radio|Television|Newspapers|Postal service|Landline"],
    ["International Trade", "Exports|Imports|Balance of trade|Free trade|Trade barriers"],
  ],
  p: ["Golden Quadrilateral=>Superhighway connecting Delhi, Mumbai, Chennai and Kolkata", "Border Roads Organisation=>Builds roads in difficult border areas", "Pipeline=>Transport of liquids and gas through tubes", "Balance of trade=>Difference between exports and imports", "Tourism=>Travel for leisure that promotes trade and culture", "Port=>Place where ships load and unload goods", "Airways=>Fastest mode of transport", "Information technology=>Use of computers and networks to process information"],
},
'sst10-pol1': {
  s: [
    ["Horizontal Power Sharing", "Legislature, executive and judiciary share power|Checks and balances"],
    ["Vertical Power Sharing", "Union, State and Local governments|Federal division of power"],
    ["Belgian Model", "Equal Dutch and French ministers in the central government|Brussels has a separate government|Community government for each language group"],
    ["Sri Lanka", "Sinhala majority|Tamils of recent Indian origin|Civil war|Demand for Tamil Eelam"],
    ["Reasons for Power Sharing", "Reduces conflict between social groups|Ensures stability|Respect for diversity"],
  ],
  p: ["Prudential reasons=>Power sharing is useful because it reduces conflict and ensures stability", "Moral reasons=>Power sharing is valuable in itself as it respects people's right to be consulted", "Civil war=>Violent conflict between groups within a country", "Federal government=>Government in which power is divided between levels", "Coalition government=>Government formed by several parties", "Ethnic=>Based on shared descent or culture", "Majoritarianism=>Belief that the majority can rule as it wishes", "Accommodation=>Adjusting to the needs of different groups"],
},
'sst10-pol2': {
  s: [
    ["Union List", "Atomic energy|Railways|Communications|Census"],
    ["State List", "Public health|Land|Local government|Prisons"],
    ["Concurrent List", "Trade unions|Criminal law|Economic and social planning"],
    ["Rural Local Government", "Gram Panchayat|Panchayat Samiti|Zila Parishad"],
    ["Urban Local Government", "Municipality|Municipal Corporation|Mayor|Ward councillor"],
    ["Features of Federalism", "Two or more levels of government|Powers defined in the Constitution|Courts act as umpires|Financial autonomy of each level"],
    ["Coming Together Federations", "USA|Switzerland|Australia"],
    ["Holding Together Federations", "India|Spain|Belgium"],
  ],
  p: ["Decentralisation=>Power taken from Union and State governments and given to local governments", "73rd and 74th Amendments=>1992 amendments that made local government stronger", "State Election Commissioner=>Official who conducts local body elections", "Linguistic states=>States formed on the basis of language after 1956", "Union Territory=>Area administered directly by the central government", "Federalism=>System with two or more levels of government", "Hindi=>Official language of the Union with English as associate", "Scheduled languages=>22 languages recognised in the Constitution"].filter(t => !t.startsWith('Federalism')),
},
'sst10-pol3': {
  s: [
    ["Secular State Features", "No official religion|Freedom to practise any religion|Discrimination on religion is banned|State is neutral"],
    ["Gender Division of Labour", "Women do most housework|Public life dominated by men|Women's work is often unpaid"],
    ["Feminist Demands", "Equal rights|Votes for women|Equal wages"],
    ["Caste and Politics", "Caste hierarchy|Dalit movements|Reservation for SC and ST|Parties choose candidates by caste"],
  ],
  p: ["Gender division=>Social roles assigned to men and women", "Feminist=>Person who believes in equal rights for women and men", "Sex ratio=>Number of females per 1000 males", "Caste hierarchy=>Ranking of castes in order", "Secular state=>State that has no official religion", "Reservation=>Seats set aside for specific groups", "Family laws=>Laws on marriage, divorce and inheritance", "Communal politics=>Using religion as the basis of politics"].filter(t => !t.startsWith('Communal')),
},
'sst10-pol4': {
  s: [
    ["Reforms for Parties", "Anti-defection law|Filing affidavits on criminal cases|Mandatory internal elections|Public funding of elections"],
    ["One-party System", "China|Cuba|North Korea"],
    ["Two-party System", "USA|UK"],
    ["Multi-party System", "India|Nepal|Israel"],
    ["Components of a Party", "Leaders|Active members|Followers"],
  ],
  p: ["Political party=>Group of people who come together to contest elections and hold power", "Ruling party=>Party that forms the government", "Opposition=>Parties that do not form the government but question it", "Defection=>Changing party after being elected", "Coalition=>Alliance of parties to form a government", "Anti-defection law=>Law that bans elected members from switching parties", "Manifesto=>Document in which a party sets out its promises", "State party=>Party recognised in a particular state"].filter(t => !/^(Opposition|Defection|Coalition)/.test(t)),
},
'sst10-pol5': {
  s: [
    ["Accountability and Legitimacy", "Free and fair elections|Right to Information|Citizens can examine decisions|Mass support for democracy"],
    ["Democracy and Social Differences", "Accommodates social divisions|Reduces chances of violent conflict|Respects dignity of citizens|Allows citizens to correct mistakes"],
    ["Economic Outcomes", "Dictatorships have slightly higher growth|Democracies have more political equality|Economic inequality persists"],
  ],
  p: ["Democracy=>Form of government in which rulers are elected by the people", "Right to Information Act=>2005 law allowing citizens to seek government information", "Legitimate government=>Government accepted by the people", "Dignity=>Respect and equal worth of every person", "Dictatorship=>Rule by one person or group without free elections", "Political equality=>Equal vote and equal weight to every citizen", "Public participation=>Citizens taking part in decisions", "Inequality=>Unequal distribution of income and opportunities"],
},
'sst10-eco1': {
  s: [
    ["Human Development Indicators", "Net attendance ratio|Infant mortality rate|Body mass index|Gross enrolment ratio"],
    ["UNDP Human Development Index Components", "Life expectancy at birth|Mean years of schooling|Per capita gross national income"],
    ["Public Facilities", "Roads|Schools|Hospitals|Drinking water|Ration shops"],
    ["Sustainability", "Depletion of non-renewable resources|Overuse of groundwater"],
  ],
  p: ["Public facilities=>Services provided by government such as health and education", "Infant mortality rate=>Deaths of children below one year per 1000 live births", "Literacy rate=>Percentage of people aged 7 and above who can read and write", "Net attendance ratio=>Percentage of school-age children attending school", "Body Mass Index=>Weight divided by the square of height", "Human Development Report=>UNDP publication that ranks countries", "Sustainable development=>Development that meets present needs without harming the future", "Average income=>Total income divided by the total population"],
  c: [["National income is ₹20,00,000 crore and population is 100 crore. Find per capita income.", 20000, "₹", "20,00,000 / 100."], ["800 persons out of 1000 aged 7 and above can read and write. Find the literacy rate.", 80, "%", "800 / 1000 x 100."]],
},
'sst10-eco2': {
  s: [
    ["Primary Sector", "Dairy|Poultry|Horticulture"],
    ["Secondary Sector", "Sugar mills|Brick making|Steel production"],
    ["Tertiary Sector", "Trade|Communication|Hospitals|Police|Retail shops"],
    ["Organised Sector", "Registered with the government|Fixed working hours|Social security benefits|Job security"],
    ["Unorganised Sector", "Irregular work|No job security|Low and irregular wages|Casual labour"],
    ["Public Sector Activities", "Railways|Post office|Government schools|Public hospitals"],
    ["Private Sector Activities", "Tata Steel|Reliance Jio|Private schools|Shopping malls"],
  ],
  p: ["GDP=>Value of all final goods and services produced in a country in a year", "Final goods=>Goods consumed or invested, not used in production", "Intermediate goods=>Goods used up in producing final goods", "Underemployment=>Working less than one's capacity", "Public sector=>Sector owned by the government", "Private sector=>Sector owned by individuals or companies", "Employment guarantee=>Law assuring days of paid work to rural households", "Structural change=>Shift in GDP share from primary to secondary and tertiary"].filter(t => !t.startsWith('GDP')),
  c: [["A farmer sells wheat worth ₹80 to a mill, the mill sells flour worth ₹120 to a bakery and the bakery sells bread worth ₹200. What is counted in GDP?", 200, "₹", "Only the final good, bread, is counted."], ["Primary sector is ₹20 crore, secondary ₹25 crore and tertiary ₹55 crore. Find the tertiary share of GDP.", 55, "%", "55 / 100 x 100."]],
},
'sst10-eco3': {
  s: [
    ["Terms of Credit", "Interest rate|Collateral|Documentation requirement|Mode of repayment"],
    ["Modern Forms of Money", "Demand deposit|Debit card|UPI"],
    ["Self Help Groups", "Group of 15 to 20 members|Regular savings|Loans at reasonable interest|Meetings to discuss social issues"],
    ["Role of the RBI", "Issues currency|Supervises banks|Ensures cash reserves|Frames monetary policy"],
    ["Risks of Credit", "Debt trap|Crop failure|High interest of moneylenders"],
  ],
  p: ["Credit=>Agreement where a lender supplies money or goods in return for payment later", "Collateral=>Asset pledged as a guarantee for a loan", "Demand deposit=>Deposit withdrawable on demand", "Debt trap=>Situation where a borrower cannot repay and falls into deeper debt", "Interest=>Price paid for the use of borrowed money", "Formal credit=>Loans from banks and cooperatives", "Informal credit=>Loans from moneylenders, traders and relatives", "Cheque=>Written order to a bank to pay money from an account"],
  c: [["A loan of ₹20,000 at 12% simple interest for 2 years. Find the interest.", 4800, "₹", "20,000 x 12/100 x 2."], ["A loan of ₹5,000 carries interest of ₹600. Find the total repayment.", 5600, "₹", "5,000 + 600."]],
},
'sst10-eco4': {
  s: [
    ["Globalisation Drivers", "Foreign trade|Reduction in transport costs|Information and communication technology|Removal of trade barriers"],
    ["Foreign Trade Policy", "Import duty|Trade liberalisation|Export promotion"],
    ["Benefits of Globalisation", "Wider choice for consumers|Higher quality products|Jobs created by MNCs|Competition spurs Indian companies"],
    ["Impact on Small Producers", "Competition from imports|Closure of small units|Contractual jobs|Lower wages for workers"],
    ["Special Economic Zone Features", "World-class facilities|Tax holidays|Relaxed labour laws"],
  ],
  p: ["Multinational company=>Company that owns or controls production in more than one country", "Foreign trade=>Trade between countries", "WTO=>World Trade Organisation that sets rules of trade", "Foreign investment=>Money invested by MNCs in assets in another country", "Trade barrier=>Restriction on trade such as tariff or quota", "Special Economic Zone=>Area with world-class facilities for export-oriented firms", "Outsourcing=>Getting work done by a company in another country", "Competition=>Rivalry among firms to attract customers"].filter(t => !/^(Foreign investment)/.test(t)),
},
});
