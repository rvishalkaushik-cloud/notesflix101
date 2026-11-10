const B = require('./xlib.js');
module.exports = B({
'acc-partnership': {
  s: [
    ["Charged to Profit and Loss Account", "Interest on bank loan|Depreciation|Audit fees"],
    ["Fixed Capital Method", "Capital account balance remains unchanged|Adjustments pass through current account|Drawings debited to current account"],
    ["Fluctuating Capital Method", "Only capital account is maintained|Capital balance changes every year|Drawings debited to capital account"],
    ["If there is no Partnership Deed", "Profits shared equally|No interest on capital|No salary to partners|No interest on drawings|Interest on partner's loan at 6% p.a."],
  ],
  p: ["Partnership=>Relation between persons who agree to share profits of a business carried on by all or any of them acting for all", "Profit and Loss Appropriation Account=>Account that shows how net profit is distributed among partners", "Current account=>Account that records the partners' share of profit, drawings and interest", "Drawings=>Cash or goods withdrawn by a partner for personal use", "Capital account=>Account showing a partner's investment in the firm", "Partner's loan=>Amount lent by a partner to the firm beyond capital", "Past adjustments=>Rectification of omitted items after final accounts are prepared", "Guarantee of profit=>Assurance given to a partner that his share will not fall below a minimum"],
  c: [["A and B share profits equally. Profit is ₹80,000, and interest on capital is ₹6,000 for A and ₹4,000 for B. Find the profit to be divided.", 70000, "₹", "80,000 - (6,000 + 4,000) = 70,000."], ["A partner's loan of ₹50,000 is outstanding for a year and there is no deed. Find interest at the legal rate.", 3000, "₹", "6% of 50,000 = 3,000."], ["A partner draws ₹10,000 at the end of each month for a year. Total drawings are?", 120000, "₹", "10,000 x 12."]],
},
'acc-goodwill': {
  s: [
    ["Factors affecting Goodwill", "Quality of product|Customer base|Special advantages such as patents|Risk involved|Competition"],
    ["Methods of Valuing Goodwill", "Weighted average profit method|Capitalisation of average profit|Capitalisation of super profit"],
    ["When Goodwill is Valued", "Change in profit-sharing ratio|Admission of a partner|Retirement of a partner|Death of a partner|Sale of the firm"],
  ],
  p: ["Average profit=>Total profits of the selected years divided by the number of years", "Weighted average profit=>Average where recent years carry higher weights", "Normal profit=>Capital employed multiplied by the normal rate of return", "Years' purchase=>Number of years of super profit paid as goodwill", "Capitalised value=>Profit divided by the normal rate of return", "Intangible asset=>Asset with no physical existence", "Hidden goodwill=>Goodwill found from the total value of the firm and its net assets", "Normal rate of return=>Usual rate of profit in a similar business"],
  c: [["Average profit is ₹50,000 and normal profit is ₹35,000. Find goodwill at 3 years' purchase of super profit.", 45000, "₹", "Super profit = 15,000; 15,000 x 3 = 45,000."], ["Profits of three years are ₹12,000, ₹18,000 and ₹24,000 with weights 1, 2 and 3. Find the weighted average profit.", 20000, "₹", "(12,000 + 36,000 + 72,000) / 6 = 20,000."], ["Super profit is ₹15,000 and normal rate of return is 10%. Find goodwill by capitalisation of super profit.", 150000, "₹", "15,000 x 100/10."]],
},
'acc-fs-company': {
  s: [
    ["Non-current Assets", "Tangible assets|Intangible assets|Non-current investments|Capital work-in-progress|Patents|Trademarks|Deferred tax assets|Long-term loans and advances"],
    ["Current Assets", "Current investments|Other current assets|Prepaid expenses"],
    ["Non-current Liabilities", "Other long-term liabilities"],
    ["Shareholders' Funds", "Share capital|Reserves and surplus|Money received against share warrants"],
    ["Expenses in Statement of Profit and Loss", "Cost of materials consumed|Purchase of stock-in-trade|Changes in inventories|Employee benefit expense|Finance costs|Depreciation and amortisation|Other expenses"],
    ["Income in Statement of Profit and Loss", "Revenue from operations|Other income"],
    ["Tools of Financial Analysis", "Comparative statements|Common-size statements|Ratio analysis|Cash flow analysis"],
  ],
  p: ["Absolute change=>Difference between current year and previous year figures", "Percentage change=>Absolute change divided by base year figure, multiplied by 100", "Base year=>Year with which later years are compared", "Balance sheet=>Statement of assets and liabilities at a given date", "Statement of Profit and Loss=>Statement of revenue and expenses for a period", "Schedule III=>Part of the Companies Act giving the format of company financial statements", "Intra-firm comparison=>Comparison of figures of the same firm over time", "Inter-firm comparison=>Comparison of figures of different firms"],
  c: [["Net profit is ₹80,000 and revenue from operations is ₹4,00,000. Find net profit as a percentage of revenue.", 20, "%", "80,000 / 4,00,000 x 100."], ["Current liabilities rose from ₹2,50,000 to ₹3,00,000. Find the percentage increase.", 20, "%", "50,000 / 2,50,000 x 100."], ["Share capital is ₹4,00,000 and reserves are ₹1,00,000. Find shareholders' funds.", 500000, "₹", "4,00,000 + 1,00,000."]],
},
'eco12-ni': {
  s: [
    ["Stock Variables", "Bank balance|Number of houses|Foreign exchange reserves|National debt"],
    ["Flow Variables", "Depreciation|Profit|Savings|Imports|Wages|Interest paid"],
    ["Included in GDP", "Imputed rent of owner-occupied house|Own-account production of fixed assets|Salaries of government employees|Production of capital goods"],
    ["Not included in GDP", "Sale of old car|Pension|Scholarship|Purchase of shares|Raw material used in production|Housewife's services|Illegal activities|Lottery winnings"],
    ["Income Method Components", "Compensation of employees|Operating surplus|Mixed income of self-employed"],
    ["Expenditure Method Components", "Private final consumption expenditure|Government final consumption expenditure|Gross domestic capital formation|Net exports of goods and services"],
  ],
  p: ["GDP at market price=>Money value of all final goods and services produced within the domestic territory in a year", "Net factor income from abroad=>Factor income received from abroad minus factor income paid abroad", "Intermediate goods=>Goods used up in the production process", "Final goods=>Goods meant for final consumption or investment", "Depreciation=>Fall in the value of fixed capital due to wear and tear", "Net indirect taxes=>Indirect taxes minus subsidies", "Value added=>Value of output minus intermediate consumption", "Factor cost=>Payments made to factors of production", "Economic territory=>Geographical area administered by a government within which people and goods move freely", "Per capita income=>National income divided by population"],
  c: [["GDP at market price is ₹600 crore, depreciation ₹40 crore and net indirect taxes ₹50 crore. Find NDP at factor cost.", 510, "₹ crore", "600 - 40 - 50 = 510."], ["GNP at market price is ₹900 crore and net factor income from abroad is ₹20 crore. Find GDP at market price.", 880, "₹ crore", "GDP = GNP - NFIA = 900 - 20."], ["Compensation of employees ₹400 crore, operating surplus ₹300 crore, mixed income ₹100 crore. Find NDP at factor cost.", 800, "₹ crore", "Add all three factor incomes."], ["Nominal GDP is ₹800 crore and the price index is 160 (base 100). Find real GDP.", 500, "₹ crore", "Real GDP = 800 / 160 x 100."]],
},
'eco12-money': {
  s: [
    ["Functions of Commercial Banks", "Accepting deposits|Granting loans and advances|Credit creation|Agency functions|Overdraft facility"],
    ["Functions of the Central Bank", "Issue of currency notes|Banker to the government|Banker to banks|Lender of last resort|Custodian of foreign exchange reserves|Controller of credit"],
    ["Components of M1", "Currency notes and coins with the public|Demand deposits with commercial banks|Other deposits with the RBI"],
  ],
  p: ["Barter system=>Exchange of goods for goods without money", "Double coincidence of wants=>Each party must have what the other wants", "Credit creation=>Banks creating deposits many times the initial cash", "Demand deposits=>Deposits withdrawable on demand by cheque", "Time deposits=>Deposits repayable after a fixed period", "Bank rate=>Rate at which the RBI lends long-term funds to banks without securities", "Reverse repo rate=>Rate at which the RBI borrows money from commercial banks", "Open market operations=>Buying and selling of government securities by the RBI", "Moral suasion=>Persuasion by the central bank without legal force", "Monetary policy=>Policy of the central bank to control money supply and credit", "High powered money=>Currency plus reserves of banks held with the RBI", "Margin requirement=>Difference between loan amount and the market value of security"],
  c: [["The legal reserve ratio is 25%. Find the money multiplier.", 4, "times", "1 / 0.25 = 4."], ["An initial deposit of ₹2,000 with a 20% reserve ratio. Find the total deposits created.", 10000, "₹", "2,000 x 1/0.20."], ["Deposits are ₹10,00,000 and CRR is 4%. Find the required cash reserve.", 40000, "₹", "4% of 10,00,000."]],
},
'eco12-income': {
  s: [
    ["Excess Demand Remedies", "Reduce government expenditure|Raise margin requirement|Credit rationing|Raise repo rate"],
    ["Deficient Demand Remedies", "Increase government expenditure|Lower margin requirement|Cheaper credit|Lower repo rate"],
    ["Autonomous Investment", "Government infrastructure spending|Not influenced by income level|Social welfare investment"],
    ["Induced Investment", "Varies with income|Profit motivated|Private sector investment"],
  ],
  p: ["Aggregate demand=>Total planned expenditure on final goods and services in an economy", "Aggregate supply=>Total value of goods and services produced in an economy", "Ex-ante=>Planned or expected values", "Ex-post=>Actual or realised values", "Full employment=>Situation where all who are willing to work at the going wage get work", "Involuntary unemployment=>Unemployment of those willing to work at the going wage but not getting work", "Consumption function=>Relation between consumption and income", "APS=>Average propensity to save, saving divided by income", "MPS=>Change in saving divided by change in income", "Paradox of thrift=>If everyone saves more, total saving may fall"],
  c: [["MPC is 0.5. Find the investment multiplier.", 2, "times", "1 / (1 - 0.5)."], ["Investment rises by ₹200 crore and MPC is 0.6. Find the rise in income.", 500, "₹ crore", "Multiplier = 2.5; 2.5 x 200 = 500."], ["MPS is 0.2. Find the multiplier.", 5, "times", "Multiplier = 1/MPS."], ["Consumption is C = 100 + 0.8Y. Find consumption when Y = 1,000.", 900, "₹", "100 + 0.8 x 1,000."], ["Consumption is C = 50 + 0.5Y and investment is ₹100. Find equilibrium income.", 300, "₹", "Y = (50 + 100) / (1 - 0.5)."]],
},
'eco12-budget': {
  s: [
    ["Revenue Receipts", "Grants-in-aid|Fines and penalties"],
    ["Revenue Expenditure", "Pensions|Grants to states|Administrative expenses"],
    ["Capital Expenditure", "Building roads and bridges|Purchase of machinery|Loans given to states|Investment in shares|Construction of dams|Acquisition of land"],
    ["Objectives of the Budget", "Reallocation of resources|Reducing inequalities of income and wealth|Economic stability|Management of public enterprises|Economic growth|Regional balance"],
    ["Direct Taxes", "Income tax|Corporation tax|Capital gains tax"],
    ["Indirect Taxes", "GST|Customs duty|Excise duty"],
  ],
  p: ["Budget=>Annual financial statement of estimated receipts and expenditure of the government", "Fiscal policy=>Government policy on taxation, spending and borrowing", "Balanced budget=>Budget in which expenditure equals receipts", "Surplus budget=>Budget in which receipts exceed expenditure", "Deficit budget=>Budget in which expenditure exceeds receipts", "Public goods=>Goods whose benefits cannot be denied to anyone", "Merit goods=>Goods that government promotes for social welfare", "Revenue receipts=>Receipts that neither create a liability nor reduce assets", "Capital receipts=>Receipts that create a liability or reduce assets", "Indirect tax=>Tax whose burden can be shifted to others", "Subsidy=>Financial help given by the government to producers or consumers"],
  c: [["Total expenditure is ₹1,000 crore, revenue receipts ₹600 crore and non-debt capital receipts ₹100 crore. Find the fiscal deficit.", 300, "₹ crore", "FD = 1,000 - (600 + 100)."], ["Revenue deficit is ₹400 crore and grants for creating capital assets are ₹100 crore. Find the effective revenue deficit.", 300, "₹ crore", "Effective RD = RD - grants for capital assets."], ["Fiscal deficit is ₹5 lakh crore and GDP is ₹100 lakh crore. Find fiscal deficit as % of GDP.", 5, "%", "5 / 100 x 100."]],
},
'eco12-bop': {
  s: [
    ["Current Account", "Import of goods|Export of services|Gifts and donations|Interest payments"],
    ["Capital Account", "Foreign aid received|Purchase of foreign assets|Repayment of loans"],
    ["Flexible Exchange Rate", "Determined by demand and supply|Free from government control|Needs small reserves|Fluctuates every day"],
    ["Managed Floating", "Central bank intervenes sometimes|Also called dirty floating|Mix of fixed and flexible"],
  ],
  p: ["Appreciation=>Rise in the value of domestic currency in terms of foreign currency under a flexible rate", "Depreciation=>Fall in the value of domestic currency under a flexible rate", "Devaluation=>Fall in the value of domestic currency by the government under a fixed rate", "Revaluation=>Increase of the official value of the currency under a fixed rate", "Foreign exchange market=>Market where currencies are bought and sold", "Spot rate=>Exchange rate for immediate delivery", "Forward rate=>Exchange rate agreed today for delivery at a future date", "Hedging=>Protecting against exchange rate risk", "Trade deficit=>Imports of goods exceed exports of goods", "Official reserve transactions=>Transactions by the central bank to settle the BOP"],
  c: [["Exports are ₹500 crore and imports ₹650 crore. Find the balance of trade.", -150, "₹ crore", "500 - 650 = -150."], ["Current account balance is -₹100 crore and capital account balance is +₹120 crore. Find the overall balance.", 20, "₹ crore", "-100 + 120 = +20."], ["The rupee moves from ₹80 to ₹82 per dollar. Find the percentage depreciation of the rupee.", 2.5, "%", "(82 - 80)/80 x 100."]],
},
'eco12-ied1': {
  s: [
    ["Colonial Economy", "Drain of wealth|Exploitation by zamindari system|Dominance of agriculture in occupations|Exports of raw materials"],
    ["Features of the Green Revolution", "High-yielding variety seeds|Chemical fertilisers|Assured irrigation|Higher wheat and rice yields|Regional disparity"],
    ["Trade Policy 1950-90", "Import substitution|High tariffs|Quotas|Protection of domestic industry"],
  ],
  p: ["Planning Commission=>Body set up in 1950 to prepare five year plans", "NITI Aayog=>Policy think tank that replaced the Planning Commission in 2015", "Public sector=>Part of the economy owned and run by the government", "Land ceiling=>Upper limit on land that a person can hold", "Minimum support price=>Price at which the government buys crops from farmers", "Buffer stock=>Stock of foodgrains kept by the government for price stability", "Public distribution system=>System of supplying foodgrains at subsidised prices", "Subsidy=>Financial support given to farmers or producers to reduce costs", "Infant industry=>Newly set up industry that needs protection to grow", "Industrial licensing=>Government permission needed to start or expand an industry"],
},
'eco12-lpg': {
  s: [
    ["Liberalisation", "Deregulation of industry|Financial sector reforms|Tax reforms|Foreign exchange reforms"],
    ["Privatisation", "Strategic sale|Opening reserved sectors to private firms|Reduced monopoly of PSUs"],
    ["Globalisation", "Foreign direct investment inflows|Removal of quantitative restrictions|Currency convertibility"],
    ["Objectives of Demonetisation", "Curb black money|Counter fake currency|Promote digital payments|Widen the tax base"],
    ["GST Features", "One nation one tax|Destination-based tax|Input tax credit|CGST|SGST|IGST"],
    ["Merits of Reforms", "Higher growth rate|Rise in foreign exchange reserves|Increase in foreign investment"],
    ["Criticisms of Reforms", "Jobless growth|Neglect of agriculture|Widening inequality"],
  ],
  p: ["Liberalisation=>Freeing the economy from direct controls of the government", "Privatisation=>Transfer of ownership or management from the public to the private sector", "Globalisation=>Integration of the domestic economy with the world economy", "Input tax credit=>Credit for tax already paid on inputs", "Foreign direct investment=>Investment by a foreign firm in business operations of another country", "Navratna=>Status given to well-performing public sector enterprises", "New Economic Policy=>Package of reforms started in 1991", "Special Economic Zone=>Duty-free area set up for export promotion", "Currency convertibility=>Freedom to convert one currency into another"],
},
'eco12-ied2': {
  s: [
    ["Human Capital Formation Sources", "Expenditure on information|Expenditure on welfare"],
    ["Rural Development Issues", "Agricultural marketing|Animal husbandry|Fisheries|Horticulture"],
    ["Types of Unemployment", "Educated unemployment|Cyclical|Frictional"],
    ["Sustainable Development Measures", "Solar and wind energy|Afforestation|Recycling|Waste management|Biogas"],
    ["Environmental Problems", "Global warming|Ozone depletion|Air pollution|Deforestation"],
    ["Problems of Human Capital Formation", "Rising population|Low accessibility|Brain drain|Poor quality of education"],
  ],
  p: ["Human capital=>Stock of skill, knowledge and health in a person", "Human development=>Expansion of choices, capabilities and well-being of people", "Brain drain=>Migration of skilled people to other countries", "Sustainable development=>Meeting present needs without harming future generations", "NABARD=>National Bank for Agriculture and Rural Development", "Self-help group=>Small voluntary group that saves and gives credit to its members", "Organic farming=>Farming without chemical fertilisers and pesticides", "Informal sector=>Part of the economy with no formal contracts or social security", "Casual worker=>Worker hired on a daily basis without any job security"],
},
'eco12-neighbours': {
  s: [
    ["India", "Five Year Plans began in 1951|Green Revolution|Services-led growth"],
    ["China", "Reforms in 1978|Commune system|Cultural Revolution|Household responsibility system"],
    ["Pakistan", "Green Revolution in the 1960s|Nationalisation in the 1970s|Regulation of the economy through plans"],
  ],
  p: ["Commune system=>Collective farming in China after 1958", "Cultural Revolution=>Chinese movement from 1966 that disrupted education and the economy", "Household responsibility system=>Chinese reform letting farmers keep surplus after meeting a quota", "Township and village enterprises=>Rural industries that grew rapidly in China after reforms", "Barefoot doctors=>Rural health workers trained in China to give basic care", "Human Development Index=>Combined measure of health, education and income", "Gross Domestic Product=>Total value of goods and services produced in a country in a year", "Demographic transition=>Shift from high birth and death rates to low ones"],
},
});
