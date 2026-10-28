// Entries with a source were checked against that markham.ca page in October 2026
export const faqDatabase: Array<{ question: string, keywords: string[], answer: string, source?: string }> = [
  {
    question: "When is my garbage collected?",
    keywords: ['garbage', 'waste', 'trash', 'pickup', 'collection', 'bin', 'schedule', 'thursday', 'clear', 'bag', 'every other week'],
    answer: "Clear-bag garbage is collected every other week on your regular collection day, and the green bin every week. Put material at the curb by 7 AM on collection day or after 7 PM the night before. Garbage must be in clear bags (no black, dark, tinted or white bags), though you can put up to four privacy bags inside a clear bag. Use the What Goes Where tool on markham.ca to find your schedule.",
    source: "https://www.markham.ca/neighbourhood-services/recycling-garbage/curbside-collection"
  },
  {
    question: "Where can I go swimming?",
    keywords: ['pool', 'swim', 'swimming', 'close', 'open', 'hour', 'time', 'facility', 'public swim', 'lane', 'aquafit', 'drop-in'],
    answer: "Markham pools offer public swims, including recreational, lane and endurance lane swims, plus Aquafit classes. Find drop-in times through the City's online program system (View Drop In Programs on markham.ca), or call the Contact Centre at 905.477.5530.",
    source: "https://www.markham.ca/sports-recreation-fitness/sports-recreation-programs/swimming"
  },
  {
    question: "Can I park on the street overnight?",
    keywords: ['parking', 'permit', 'residential', 'cost', 'apply', 'price', 'year', 'overnight', 'exemption', 'street', 'night'],
    answer: "Parking on Markham streets is not allowed from 2:30 AM to 6 AM unless signs say otherwise. You can request an overnight exemption online through the City's permit portal. Since October 1, 2026 each daily exemption has a $6 processing fee, and each licence plate can get up to 10 exemptions per calendar year. Exemptions aren't valid during snow clearing, and vehicles with unpaid parking tickets aren't eligible. Questions: parkingadmin@markham.ca or 905.477.7000.",
    source: "https://www.markham.ca/permits-licences-taxes/parking/overnight-parking-request"
  },
  {
    question: "Where can I find a cooling centre?",
    keywords: ['cooling', 'center', 'centre', 'heat', 'hot', 'nearest', 'open', 'location', 'heat warning', 'humidex', 'air conditioning'],
    answer: "During heat warnings, City of Markham community centres are available as cooling centres during regular business hours. Environment and Climate Change Canada issues heat warnings for two or more days of highs of 31°C or more with overnight lows of 20°C or more, or a humidex of 40 or higher. Drink plenty of water, check on neighbours, and call 911 for suspected heat stroke.",
    source: "https://www.markham.ca/neighbourhood-services/fire-services-emergency-preparedness/emergency-preparedness/heat-warnings-markham"
  },
  {
    question: "What goes in the blue bin?",
    keywords: ['recycle', 'blue', 'bin', 'what', 'plastic', 'paper', 'cardboard', 'allowed', 'styrofoam', 'blue box', 'circular materials'],
    answer: "Blue box recycling in Markham is a separate service run by Circular Materials, not the City. Use the What Goes Where tool on markham.ca to check what goes in your blue box. City recycling depots don't sell blue boxes.",
    source: "https://www.markham.ca/neighbourhood-services/recycling-garbage/curbside-collection"
  },
  {
    question: "When is yard waste collected?",
    keywords: ['yard', 'waste', 'brush', 'leaves', 'branch', 'grass', 'cutting', 'kraft', 'paper bag'],
    answer: "Yard material is collected every other week from April to October, then weekly from November to mid-December. Use Kraft paper yard waste bags, open rigid containers or bushel baskets, and don't use any type of plastic bag. Grass clippings and sod aren't collected at the curb.",
    source: "https://www.markham.ca/neighbourhood-services/recycling-garbage/curbside-collection"
  },
  {
    question: "When are Markham libraries open?",
    keywords: ['library', 'book', 'open', 'close', 'renew', 'borrow', 'card', 'branch', 'hours'],
    answer: "A Markham Public Library card is free. Check each branch's hours at markham.bibliocommons.com/locations, and see or renew your checked-out items online under My Borrowing. Questions: 905.513.7977 or AskMPL@markhamlibrary.ca.",
    source: "https://www.markhampubliclibrary.ca/"
  },
  {
    question: "When does York Region Transit run?",
    keywords: ['bus', 'transit', 'york', 'region', 'schedule', 'route', 'stop'],
    answer: "York Region Transit runs bus service across Markham. Check yrt.ca or the YRT app for routes, schedules and live arrival times at your stop."
  },
  {
    question: "How are snow and sidewalks cleared?",
    keywords: ['snow', 'plow', 'street', 'winter', 'sidewalk', 'road', 'clear', 'windrow', 'driveway', 'salt', 'senior'],
    answer: "Arterial and primary roads are salted or plowed around the clock until the pavement is bare. Local roads are plowed once snow reaches 7.5 cm, which can take about 16 hours. Sidewalks are plowed within 24 hours of the end of a snowfall of 5 cm or more. Parking is banned on both sides of all City streets during snow clearing, and you shouldn't push or blow snow onto the road. Households where everyone is 60 or older can apply for the Snow Windrow Removal Assistance Program by calling 905.477.5530.",
    source: "https://www.markham.ca/neighbourhood-services/roads-sidewalks/winter-road-services"
  },
  {
    question: "How do I license my dog or cat?",
    keywords: ['dog', 'cat', 'pet', 'license', 'tag', 'cost', 'animal', 'licence', 'renew'],
    answer: "Dogs and cats in Markham need a licence, including if they're microchipped. Apply online at markham.ca; tags are mailed within 7 to 10 business days. Licences renew each calendar year on January 1. Animal Services: 905.415.7531 or customerservice@markham.ca, every day from 8 AM to 9 PM.",
    source: "https://www.markham.ca/permits-licences-taxes/animal-services"
  },
  {
    question: "When is my property tax due?",
    keywords: ['tax', 'property', 'bill', 'pay', 'due', 'amount', 'online', 'instalment', 'interim', 'final', 'pre-authorized'],
    answer: "Markham sends two property tax bills a year: an interim bill in early January (50% of the previous year's taxes) and a final bill in early June. Your exact due dates are on your bill. You can pay through your bank, by mail, at the Civic Centre cashier (8:30 AM to 4:30 PM, no cash), or with a pre-authorized plan of 4, 6 or 11 instalments. Pay at least five business days before the due date to avoid late fees. Questions: 905.477.5530.",
    source: "https://www.markham.ca/permits-licences-taxes/property-taxes/frequently-asked-questions"
  },
  {
    question: "Do I need a building permit?",
    keywords: ['building', 'permit', 'renovation', 'deck', 'fence', 'application', 'cost'],
    answer: "Many projects, such as additions, decks and structural changes, need a building permit. Check markham.ca for what needs a permit, current fees and how to apply."
  },
  {
    question: "How do I report a pothole?",
    keywords: ['road', 'pothole', 'repair', 'damage', 'report', 'issue'],
    answer: "Report potholes to the City online through markham.ca or by calling the Contact Centre at 905-477-5530."
  },
  {
    question: "How do I book a park pavilion for a party?",
    keywords: ['birthday', 'party', 'book', 'rent', 'park', 'pavilion', 'facility'],
    answer: "Park pavilions and picnic areas can be booked through the City's recreation booking system. Check markham.ca for availability, fees and booking rules."
  },
  {
    question: "What do community centres offer?",
    keywords: ['community', 'center', 'program', 'class', 'senior', 'activity', 'fitness'],
    answer: "Markham's community centres offer fitness, arts, seniors' and children's programs, plus drop-in activities. Browse current programs and register on markham.ca."
  },
  {
    question: "How do I buy a cemetery plot?",
    keywords: ['cemetery', 'burial', 'plot', 'cremation', 'services'],
    answer: "The City operates municipal cemeteries. Check markham.ca for plot availability, pricing and how to arrange a purchase."
  },
  {
    question: "How do I get a marriage licence?",
    keywords: ['marriage', 'license', 'ceremony', 'apply', 'civil'],
    answer: "Marriage licences are issued by the City Clerk's office. Check markham.ca for current hours, fees, required ID and civil ceremony options."
  },
  {
    question: "What are the noise bylaw hours?",
    keywords: ['bylaw', 'noise', 'complaint', 'fine', 'after', 'hour', 'music', 'party', 'loud'],
    answer: "Playing loud music outdoors isn't allowed from 5 PM until 7 AM the next day (9 AM on Sundays), although amplified sound is now allowed until 11 PM on Fridays and Saturdays. Shouting, whistling and singing are prohibited after 11 PM. Outdoor functions on private property need a Noise Exemption Permit. To report noise, call By-law Enforcement at 905.479.7782.",
    source: "https://www.markham.ca/about-city-markham/city-hall/bylaw/noise"
  },
  {
    question: "Do I need a permit for a campfire?",
    keywords: ['fire', 'alarm', 'burn', 'permit', 'campfire'],
    answer: "You may need a permit for open-air burning, and burning is not allowed during a fire ban. Check markham.ca for current rules before lighting a fire."
  },
  {
    question: "Can I remove a tree on my property?",
    keywords: ['tree', 'cut', 'remove', 'city', 'boulevard', 'protected', 'tree permit', 'arborist', 'diameter'],
    answer: "You need a permit before injuring or removing any private tree with a trunk 20 cm or more across, measured 1.37 m above the ground, whatever its health. Apply online; the processing fee is $20.50 and applications are reviewed within 45 days of payment. Trees on a property line need the neighbour's consent. Contact TreePreservationAdmin@markham.ca or 905.477.7000.",
    source: "https://www.markham.ca/permits-licences-taxes/permits/tree-permit-application"
  },
  {
    question: "How do water bills work, and how do I report a leak?",
    keywords: ['water', 'bill', 'leak', 'meter', 'payment', 'utility', 'alectra', 'rate', 'high bill'],
    answer: "Markham water and sewer charges are billed every two months on your Alectra bill. The 2026 combined water and wastewater rate is $5.3694 per cubic metre (rates change each April 1). For a high bill, check for leaks: turn off all water, note your meter reading, wait a few hours without using water and read it again. Leaks in your own plumbing are your responsibility. Questions: 905.477.5530.",
    source: "https://www.markham.ca/neighbourhood-services/water-sewer/rates-meters-billing-fees"
  },
  {
    question: "When are municipal elections held?",
    keywords: ['election', 'vote', 'poll', 'station', 'day', 'register', 'results', 'voting', 'online'],
    answer: "Markham's 2026 municipal election ran from October 16 to 26, 2026, with online voting. Results are posted at markham.ca/elections. Ontario municipal elections are held every four years.",
    source: "https://www.markham.ca/elections"
  },
  {
    question: "When are skating rinks open?",
    keywords: ['skating', 'skate', 'rink', 'ice', 'outdoor', 'winter', 'schedule', 'public skate', 'arena', 'helmet', 'outdoor rink'],
    answer: "Public skating is available at seven City arenas, including Angus Glen, Centennial, Markham Village and Thornhill. From September 1, 2026, admission (plus HST) is free for children 3 and under, $3.10 for ages 4 to 15, $5.17 for adults and $3.63 for 65+. A CSA-approved helmet is recommended. The free Civic Centre outdoor rink reopens in December.",
    source: "https://www.markham.ca/sports-recreation-fitness/sports-recreation-programs/public-skating-lessons-hockey"
  },
  {
    question: "How do I book a tennis court?",
    keywords: ['tennis', 'court', 'book', 'reserve', 'fee'],
    answer: "Many City tennis courts are available for drop-in use, and some can be booked. Check markham.ca for locations and booking details."
  },
  {
    question: "When is the farmers market open?",
    keywords: ['farmers', 'market', 'open', 'day', 'time', 'location'],
    answer: "Markham has seasonal farmers markets. Check markham.ca for this year's locations, days and hours."
  },
  {
    question: "Where can I find free public Wi-Fi?",
    keywords: ['wifi', 'internet', 'public', 'free', 'hotspot'],
    answer: "Free public Wi-Fi is available at many City facilities, including libraries and community centres. Check markham.ca for locations."
  },
  {
    question: "How do I report a damaged sidewalk?",
    keywords: ['sidewalk', 'repair', 'trip', 'crack', 'uneven', 'report'],
    answer: "Report damaged or uneven sidewalks to the City online through markham.ca or by calling 905-477-5530."
  },
  {
    question: "How high can my fence be?",
    keywords: ['fence', 'height', 'tall', 'high', 'property', 'line', 'bylaw', 'pool', 'enclosure', 'neighbour', 'shared'],
    answer: "Front-yard fences can be up to 1.2 m (4 ft) high, and fences along rear and interior side property lines up to 1.8 m (6 ft). On corner lots, the side facing the street is limited to 1.2 m. Pools deeper than 0.6 m need a 1.2 m fence and a pool enclosure permit before filling. For a shared fence on the property line, give your neighbour 14 days' written notice by registered mail. Questions: 905.479.7782.",
    source: "https://www.markham.ca/about-city-markham/city-hall/bylaw/fences-swimming-pools"
  },
  {
    question: "What are the allowed construction hours?",
    keywords: ['construction', 'hours', 'weekend', 'noise', 'allowed', 'saturday', 'sunday', 'holiday'],
    answer: "Construction equipment may be used on Saturdays from 9 AM to 5 PM and is prohibited at all times on Sundays and statutory holidays. Work outside the permitted times needs a noise exemption. See Markham's Noise By-law for weekday hours, or call 905.479.7782.",
    source: "https://www.markham.ca/about-city-markham/city-hall/bylaw/noise"
  },
  {
    question: "Do I need a permit for a garage sale?",
    keywords: ['garage', 'sale', 'permit', 'limit', 'days'],
    answer: "Garage sales are allowed, with some limits on how often you can hold them. Check markham.ca for the current rules."
  },
  {
    question: "How do I report broken playground equipment?",
    keywords: ['playground', 'equipment', 'broken', 'safe', 'inspect'],
    answer: "Report broken playground equipment to the City by calling 905-477-5530 or online through markham.ca."
  },
  {
    question: "Where are public washrooms?",
    keywords: ['toilet', 'washroom', 'public', 'open', 'park', 'location'],
    answer: "Public washrooms are available at community centres and in many parks, some seasonally. Check markham.ca for facility details."
  },
  {
    question: "Where is the lost and found?",
    keywords: ['lost', 'found', 'item', 'property', 'report'],
    answer: "For items lost at a City facility, contact that facility or call the Contact Centre at 905-477-5530."
  },
  {
    question: "Where can I find emergency shelter?",
    keywords: ['shelter', 'homeless', 'support', 'housing', 'emergency'],
    answer: "If you need emergency shelter, contact York Region's emergency housing services through york.ca, or call 211 for help finding services. In an emergency, call 911."
  },
  {
    question: "How are Christmas trees collected?",
    keywords: ['recycling', 'christmas', 'tree', 'dispose', 'drop off'],
    answer: "Christmas trees are collected in January. Check your collection calendar on markham.ca for dates, and remove all decorations first."
  },
  {
    question: "How do I get rid of electronics?",
    keywords: ['e-waste', 'electronic', 'dispose', 'battery', 'recycle', 'batteries', 'depot', 'hazardous', 'paint', 'light bulb'],
    answer: "Markham recycling depots accept electronics, alkaline batteries, ink cartridges and textiles; scrap metal is collected monthly by booking at 905.477.5530. Lithium-ion batteries, light bulbs and household hazardous waste go to the York Region Household Hazardous Waste Depot at 430 Rodick Road. Depots don't accept cash.",
    source: "https://www.markham.ca/neighbourhood-services/recycling-garbage/recycling-depots-drop-centres"
  },
  {
    question: "What goes in the green bin?",
    keywords: ['compost', 'green', 'bin', 'food', 'waste', 'organics', 'diaper', 'pet waste'],
    answer: "The green bin is collected every week. It takes food scraps (including bones, coffee grounds, tea bags and grease), soiled paper such as paper towels and pizza boxes, diapers, pet waste and kitty litter. Keep it under 18 kg with the lid fully closed, and put extra organics in a clear bag beside it. A green bin costs $32 at City recycling depots and some community centres.",
    source: "https://www.markham.ca/neighbourhood-services/recycling-garbage/green-bin"
  },
  {
    question: "How do I arrange bulky item pickup?",
    keywords: ['bulky', 'item', 'furniture', 'mattress', 'pickup', 'large', 'appliance', 'fridge', 'couch', 'renovation'],
    answer: "Bulky items are collected every two weeks on your regular clear-bag garbage day, with no appointment needed. Large appliances are collected monthly by appointment for $18.50 each; call 905.477.5530. Renovation materials aren't collected at the curb; take them to the Earl Turcott Waste Management Facility at 300 Rodick Road.",
    source: "https://www.markham.ca/neighbourhood-services/recycling-garbage/curbside-collection"
  },
  {
    question: "How do I pay or dispute a parking ticket?",
    keywords: ['tickets', 'traffic', 'parking', 'pay', 'fine', 'dispute', 'amps'],
    answer: "You can pay a parking ticket online or by phone at 905-678-8465 (toll-free 1-877-678-8465), both with a $2.50 fee; in person at the Markham Civic Centre from 8:30 AM to 4:30 PM; or by cheque by mail or at the Thornhill entrance drop box. Most parking violations fall under the City's Administrative Monetary Penalty System; see markham.ca for how to dispute one.",
    source: "https://www.markham.ca/about-city-markham/city-hall/bylaw/parking"
  },
  {
    question: "Where can I get a flu shot?",
    keywords: ['vaccine', 'clinic', 'flu', 'shot', 'health'],
    answer: "Flu shots are available from many pharmacies and doctors. York Region Public Health posts clinic information at york.ca/health."
  },
  {
    question: "Can I get a childcare subsidy?",
    keywords: ['daycare', 'childcare', 'subsidy', 'waitlist', 'register'],
    answer: "Childcare fee subsidies are available to eligible families. Apply through York Region Children's Services at york.ca."
  },
  {
    question: "How do I find a job with the City?",
    keywords: ['employment', 'job', 'city', 'hire', 'career', 'vacancy'],
    answer: "City of Markham job opportunities are posted at markham.ca/careers."
  },
  {
    question: "When does City Council meet?",
    keywords: ['council', 'meeting', 'agenda', 'minute', 'watch', 'attend', 'deputation', 'speak', 'minutes'],
    answer: "Council and committee meetings are held at the Markham Civic Centre, 101 Town Centre Boulevard, and are open to the public; you can attend or listen live online. Agendas and minutes are on markham.ca, and you can ask to speak at a meeting using the Request to Speak form. Questions: clerkspublic@markham.ca or 905.477.7000 ext. 2366.",
    source: "https://www.markham.ca/about-the-city-of-markham/city-hall/council-and-committee-meetings"
  },
  {
    question: "Where can I see the City budget?",
    keywords: ['budget', 'taxes', 'spending', 'financial', 'report'],
    answer: "The City publishes its annual budget each year. Full budget documents are available for public download on markham.ca."
  },
  {
    question: "What is Markham's population?",
    keywords: ['population', 'people', 'residents', 'size', 'demographic'],
    answer: "Markham had 338,503 residents in the 2021 Census, the largest population of any municipality in York Region."
  },
  {
    question: "How big is Markham?",
    keywords: ['area', 'size', 'big', 'square', 'kilometer', 'land'],
    answer: "Markham is one of the largest municipalities in York Region, with many parks and community centres. See markham.ca for facts and figures."
  },
  {
    question: "When was Markham founded?",
    keywords: ['founded', 'incorporated', 'history', 'year', 'established'],
    answer: "Markham was first settled in the 1790s, with early settlers led by William Berczy. It became a town in 1971 and a city in 2012."
  },
  {
    question: "What does the Markham flag mean?",
    keywords: ['flag', 'logo', 'symbol', 'crest', 'meaning'],
    answer: "Markham's flag and crest reflect the city's history and heritage. See markham.ca for details."
  },
  {
    question: "What is the police non-emergency number?",
    keywords: ['police', 'non-emergency', 'number', 'contact', 'report'],
    answer: "York Regional Police non-emergency line: 1-866-876-5423. Always call 911 for emergencies."
  },
  {
    question: "How do I reach Markham Fire Services?",
    keywords: ['fire', 'department', 'station', 'emergency', 'contact'],
    answer: "Markham Fire & Emergency Services operates fire stations across the city. Always call 911 for fire emergencies."
  },
  {
    question: "Where is the nearest hospital?",
    keywords: ['hospital', 'emergency', 'room', 'closest', 'nearest'],
    answer: "Markham Stouffville Hospital, part of Oak Valley Health, has an emergency department open 24/7. In an emergency, call 911."
  },
  {
    question: "What should I do if I see a coyote?",
    keywords: ['coyote', 'wildlife', 'animal', 'encounter', 'report'],
    answer: "Coyotes live in many urban areas. Keep pets on a leash, never feed wildlife, and report aggressive animals to the City at 905-477-5530."
  },
  {
    question: "What should I do after hitting a deer?",
    keywords: ['deer', 'collision', 'vehicle', 'hit', 'report'],
    answer: "Report collisions with deer to York Regional Police. Do not approach injured animals."
  },
  {
    question: "When does mosquito spraying happen?",
    keywords: ['mosquito', 'spray', 'west', 'nile', 'program'],
    answer: "York Region Public Health runs a mosquito and West Nile virus program each summer. See york.ca/health for details."
  },
  {
    question: "Where are the Canada Day fireworks?",
    keywords: ['canada', 'day', 'fireworks', 'celebration', 'event'],
    answer: "Markham holds Canada Day celebrations each year. Check markham.ca for this year's locations and fireworks times."
  },
  {
    question: "Where is the Remembrance Day ceremony?",
    keywords: ['remembrance', 'day', 'ceremony', 'november', 'location'],
    answer: "Remembrance Day ceremonies are held on November 11. Check markham.ca for this year's locations and times."
  },
  {
    question: "When is Markham Pride?",
    keywords: ['pride', 'event', 'parade', 'june', 'lgbtq'],
    answer: "Check markham.ca for this year's Pride events and dates."
  },
  {
    question: "When is the Santa Claus Parade?",
    keywords: ['parade', 'santa', 'christmas', 'december', 'holiday'],
    answer: "Markham's Santa Claus Parade is held each year in late fall. Check markham.ca for this year's date and route."
  },
  {
    question: "What should I do if my basement floods?",
    keywords: ['flood', 'basement', 'rain', 'storm', 'sewer', 'backup', 'backwater valve', 'sump pump', 'rebate', 'sewer backup'],
    answer: "Report basement flooding to the City's Waterworks team at 905.477.5530 and staff will investigate. The City fixes blockages on City property; blockages on private property are the owner's cost. The Private Plumbing Protection Rebate can cover up to $1,750 for an indoor backwater valve, $2,000 for an outdoor one, and up to $5,000 to disconnect weeping tiles with a sump pump. The City never calls homeowners to sell flood protection devices.",
    source: "https://www.markham.ca/neighbourhood-services/water-sewer/basement-flooding-and-sewer-back-prevention"
  },
  {
    question: "Who do I call about a power outage?",
    keywords: ['power', 'outage', 'hydro', 'alectra', 'restore'],
    answer: "Report power outages to Alectra Utilities and check its outage map at alectrautilities.com."
  },
  {
    question: "Where can I find current road closures?",
    keywords: ['road', 'closure', 'event', 'construction', 'detour'],
    answer: "Current road closures and detours are posted on markham.ca."
  },
  {
    question: "Where are the bike lanes and trails?",
    keywords: ['bike', 'lane', 'trail', 'bicycle', 'path', 'map'],
    answer: "Markham has bike lanes and multi-use trails across the city. Trail maps are available on markham.ca."
  },
  {
    question: "Where are the off-leash dog parks?",
    keywords: ['off', 'leash', 'dog', 'park', 'area', 'location'],
    answer: "Markham has off-leash dog areas in several parks. Check markham.ca for locations and rules."
  },
  {
    question: "Is there a public beach with lifeguards?",
    keywords: ['beach', 'swim', 'lifeguard', 'summer', 'milne', 'reservoir'],
    answer: "Check markham.ca for any supervised swimming areas and lifeguard hours this season."
  },
  {
    question: "When does summer camp registration open?",
    keywords: ['camp', 'summer', 'child', 'program', 'register', 'march break', 'winter camp', 'kids'],
    answer: "Markham runs summer, winter break and March Break camps with sports, music and arts, plus camps at the Markham Museum, Varley Art Gallery, Flato Markham Theatre and Markham Public Library. Ages, dates and fees are listed with each camp in the City's online program system. Questions: 905.477.5530.",
    source: "https://www.markham.ca/sports-recreation-fitness/sports-recreation-programs/camps"
  },
  {
    question: "Where are the skate parks?",
    keywords: ['skate', 'park', 'bmx', 'scooter', 'location'],
    answer: "Markham has skate parks in several parks. Check markham.ca for locations and hours."
  },
  {
    question: "Is there a disc golf course?",
    keywords: ['disc', 'golf', 'frisbee', 'course', 'location'],
    answer: "Check markham.ca for disc golf courses and other recreation facilities in City parks."
  },
  {
    question: "Where can I go cross-country skiing?",
    keywords: ['cross', 'country', 'ski', 'trail', 'winter', 'groomed'],
    answer: "Check markham.ca and Rouge National Urban Park for cross-country ski trails and current conditions."
  },
  {
    question: "Where can I go tobogganing?",
    keywords: ['toboggan', 'hill', 'sledding', 'winter', 'location'],
    answer: "Toboggan only on designated hills, never on streets. Check markham.ca for locations."
  },
  {
    question: "Where are the splash pads?",
    keywords: ['spray', 'pad', 'splash', 'summer', 'kid', 'water'],
    answer: "Splash pads are open in summer at parks across the city. Check markham.ca for locations and hours."
  },
  {
    question: "Are there free fitness classes?",
    keywords: ['zumba', 'yoga', 'fitness', 'class', 'schedule', 'senior'],
    answer: "Community centres offer fitness classes such as yoga and zumba. Check markham.ca for schedules and fees."
  },
  {
    question: "Which taxi companies are licensed?",
    keywords: ['taxi', 'licensed', 'company', 'number', 'call'],
    answer: "Taxis in Markham must be licensed by the City. Check markham.ca for licensing information."
  },
  {
    question: "Are City facilities accessible?",
    keywords: ['accessible', 'accessibility', 'wheelchair', 'disabled', 'support'],
    answer: "Markham works to make City facilities accessible. Check markham.ca for accessibility information, and yrt.ca for York Region Transit's accessible service."
  },
  {
    question: "What services are at the Civic Centre?",
    keywords: ['photo', 'passport', 'service', 'location'],
    answer: "Check markham.ca for services available at the Civic Centre and their hours."
  },
  {
    question: "Where can I find a commissioner of oaths?",
    keywords: ['commissioner', 'oath', 'statutory', 'declaration', 'witness'],
    answer: "A commissioner of oaths may be available at the Civic Centre. Check markham.ca for hours and fees."
  },
  {
    question: "How do I make a freedom of information request?",
    keywords: ['freedom', 'information', 'foi', 'request', 'document'],
    answer: "Freedom of information requests are made to the City Clerk's office. See markham.ca for how to submit a request."
  },
  {
    question: "What is the fine for littering?",
    keywords: ['litter', 'fine', 'illegal', 'dumping', 'ticket'],
    answer: "Littering and illegal dumping can lead to fines. Report illegal dumping to the City at 905-477-5530."
  },
  {
    question: "Where is smoking banned?",
    keywords: ['smoking', 'public', 'ban', 'park', 'bylaw'],
    answer: "Smoking is banned in many public places under Ontario law and City bylaws, including near playgrounds. Check markham.ca for details."
  },
  {
    question: "Where is vaping banned?",
    keywords: ['vaping', 'public', 'area', 'allowed', 'law'],
    answer: "Vaping is restricted in most of the same places as smoking under the Smoke-Free Ontario Act."
  },
  {
    question: "Can I drink alcohol in a park?",
    keywords: ['alcohol', 'park', 'public', 'drinking', 'allowed'],
    answer: "Drinking alcohol in public parks is generally not allowed except at permitted events. Check markham.ca for current rules."
  },
  {
    question: "When are campfires allowed?",
    keywords: ['campfire', 'open', 'burn', 'permit', 'allowed'],
    answer: "Campfires and open-air burning have strict rules and may need a permit. Check markham.ca before lighting a fire."
  },
  {
    question: "When can I set off fireworks?",
    keywords: ['fireworks', 'set off', 'personal', 'use', 'allowed', 'holiday', 'permit', 'victoria day', 'backyard'],
    answer: "Family fireworks may only be set off on private property with the owner's consent, never on City property such as parks, fields and roads. No permit is needed the day before Victoria Day, on Victoria Day, the day before Canada Day and on Canada Day; on any other day you need a permit, applied for online at least seven days ahead ($246 plus HST). Fines can reach $5,000.",
    source: "https://www.markham.ca/fireworks"
  },
  {
    question: "How do I report graffiti?",
    keywords: ['graffiti', 'remove', 'report', 'damage', 'vandalism'],
    answer: "Report graffiti on public property to the City at 905-477-5530 or online through markham.ca."
  },
  {
    question: "Can I put up signs on utility poles?",
    keywords: ['illegal', 'sign', 'poster', 'remove', 'utility', 'pole'],
    answer: "Signs and posters are restricted on utility poles and City property. Check the sign bylaw on markham.ca."
  },
  {
    question: "When can I use a leaf blower?",
    keywords: ['leaf', 'blower', 'noise', 'hour', 'restriction'],
    answer: "Leaf blowers and other noisy equipment are limited to certain hours. Check the noise bylaw on markham.ca."
  },
  {
    question: "Is there a rain barrel rebate?",
    keywords: ['rain', 'barrel', 'program', 'discount', 'rebate'],
    answer: "Check markham.ca for any current rain barrel or water conservation programs."
  },
  {
    question: "Can I keep backyard chickens?",
    keywords: ['backyard', 'chicken', 'hen', 'rooster', 'allowed', 'number'],
    answer: "Rules about keeping backyard hens are set by City bylaw. Check markham.ca for what's allowed."
  },
  {
    question: "Can I keep bees?",
    keywords: ['bee', 'hive', 'beekeeping', 'register', 'apiary'],
    answer: "Rules about backyard beekeeping are set by provincial and City regulations. Check markham.ca and Ontario's beekeeping rules before getting started."
  },
  {
    question: "Do I need a permit for solar panels?",
    keywords: ['solar', 'panel', 'permit', 'rebate', 'installation'],
    answer: "Solar panel installations may need a building permit. Check markham.ca, and look for available energy rebates."
  },
  {
    question: "Where are public EV chargers?",
    keywords: ['ev', 'charger', 'station', 'public', 'location'],
    answer: "Markham has public EV charging stations at City facilities. Check markham.ca for locations."
  },
  {
    question: "Which bags can go in the green bin?",
    keywords: ['green', 'bin', 'bag', 'compostable', 'plastic', 'allowed', 'plastic bag', 'liner'],
    answer: "Any bag, including plastic grocery bags, can line your green bin and kitchen container. Put extra organic material in a clear bag beside the bin at the curb.",
    source: "https://www.markham.ca/neighbourhood-services/recycling-garbage/green-bin"
  },
  {
    question: "How should I put out my garbage?",
    keywords: ['black', 'bin', 'garbage', 'what goes', 'accepted', 'clear bag', 'privacy'],
    answer: "Garbage must be in clear bags; black, dark, tinted or white bags aren't accepted, but up to four opaque privacy bags can go inside a clear bag. You can also use a garbage can up to 0.5 m by 0.9 m and under 18 kg. Clear-bag garbage is collected every other week.",
    source: "https://www.markham.ca/neighbourhood-services/recycling-garbage/curbside-collection"
  },
  {
    question: "How do I report a missed collection?",
    keywords: ['missed', 'collection', 'report', 'forgot', 'pickup'],
    answer: "If your collection was missed, report it to the City online through markham.ca or by calling 905-477-5530."
  },
  {
    question: "When is Christmas tree collection?",
    keywords: ['christmas', 'tree', 'collection', 'disposal', 'curbside'],
    answer: "Christmas trees are collected in January. Remove all decorations and tinsel before placing the tree at the curb, and check markham.ca for dates."
  },
  {
    question: "How do I book a meeting with my councillor?",
    keywords: ['appointment', 'council', 'member', 'ward', 'meet'],
    answer: "Contact your ward councillor through the councillor pages on markham.ca to request a meeting."
  },
  {
    question: "How do I report an issue to the City?",
    keywords: ['311', 'app', 'download', 'issue', 'report', 'issue', 'problem', 'request', 'contact'],
    answer: "Report a problem or make a request online at markham.ca (Report a Problem), call the Contact Centre at 905.477.5530, or email customerservice@markham.ca. For after-hours emergencies, call 905.477.7000 and press 0.",
    source: "https://www.markham.ca/contact-us"
  },
  {
    question: "What is stormwater management?",
    keywords: ['stormwater', 'management', 'rainwater', 'snow', 'melt', 'river', 'system'],
    answer: "Stormwater management is a municipal service that includes transport and treatment of rainwater and snow melt runoff. It also includes river system restoration to protect critical infrastructure and improve sensitive species habitat."
  },
  {
    question: "What is Markham's stormwater strategy?",
    keywords: ['stormwater', 'strategy', 'flood', 'erosion', 'control', 'watercourse', 'pond', 'facility'],
    answer: "Markham's Stormwater Management Strategy includes flood control, erosion control, watercourse management, and stormwater facility maintenance. The strategy manages both water quantity and quality released into creeks and rivers."
  },
  {
    question: "What is in Markham's stormwater system?",
    keywords: ['stormwater', 'system', 'infrastructure', 'sewer', 'ditch', 'manhole', 'catch', 'basin', 'culvert', 'pond'],
    answer: "Markham stormwater system includes: 743km storm sewers, 176km ditches, 11,400 manholes, 20,000 catch basins, 301 outfalls, 4,500 culverts, 70 stormwater ponds and 2 pumping stations."
  },
  {
    question: "Are all areas' stormwater systems the same?",
    keywords: ['stormwater', 'different', 'area', 'standard', 'design', 'flood', 'capacity', '1980'],
    answer: "No. Stormwater systems built over decades to different design standards. Pre-1980 systems have limited storm capacity. Modern systems provide better quality control and mimic natural water cycles."
  },
  {
    question: "How is stormwater management funded?",
    keywords: ['stormwater', 'funding', 'pay', 'tax', 'development', 'charge', 'grant', 'cost', 'share'],
    answer: "Stormwater activities funded through property taxes, development charges, grants, and occasional cost-sharing with partner agencies."
  },
  {
    question: "What is the stormwater fee?",
    keywords: ['stormwater', 'fee', 'drainage', 'flood', 'control', 'capacity', 'improvement', 'dedicated', 'funding'],
    answer: "The city-wide stormwater management fee is a dedicated funding source for storm drainage system capacity improvements. This expanded service improves flood control and reduces flood damage risk across Markham."
  },
  {
    question: "How wide are sidewalks?",
    keywords: ['sidewalk', 'width', 'wide', 'meter', 'foot', 'multiuse', 'pathway', 'mup', 'atmp', 'active', 'transportation'],
    answer: "Sidewalks are generally 1.5 meters (approximately five feet) wide but could be wider depending on its placement relative to the road curb and on the level of anticipated pedestrian traffic. A sidewalk could also be upgraded to a multiuse pathway (MUP) to accommodate both walking and cycling. The decision is typically determined through recommendations in Markham Active Transportation Master Plan (ATMP), feasibility studies and detailed design, prior to construction."
  },
  {
    question: "What if construction damages my property?",
    keywords: ['private', 'property', 'damage', 'sidewalk', 'construction', 'responsible', 'compensation', 'city'],
    answer: "The City takes every precaution to protect private property during construction. In the event that private property is damaged during construction, residents should contact the City’s Project Manager listed on the construction notice immediately to make arrangements for repair or compensation."
  },
  {
    question: "Will I lose driveway access during sidewalk construction?",
    keywords: ['driveway', 'access', 'construction', 'property', 'parking', 'restricted', 'closed', 'temporary', 'alternate'],
    answer: "For at least a week or more, your driveway will not be accessible during construction of the sidewalk. The construction contractor and/or the City will confirm with each property owner/tenant the days when driveway access will be restricted. The City will provide alternate overnight parking arrangements during the construction period."
  },
  {
    question: "Will I be notified about construction on my street?",
    keywords: ['notification', 'notify', 'notice', 'construction', 'scheduled', 'my', 'street', 'when', 'advance'],
    answer: "The City will send out construction notices to residents/businesses at least one week in advance of construction."
  },
  {
    question: "Why isn't my street included in the sidewalk program?",
    keywords: ['gap', 'not', 'included', 'why', 'excluded', 'left out', 'missing', 'sidewalk', 'program'],
    answer: "The City developed a methodology to prioritize sidewalk projects. Some gaps will be built as part of other capital programs. Others are deferred due to constructability issues or are outside developed areas. Local roads are not currently included in this program."
  },
  {
    question: "What happens to landscaping in the right-of-way?",
    keywords: ['impacted', 'property', 'right', 'of', 'way', 'landscaping', 'sprinkler', 'fence', 'construction'],
    answer: "It is the City's goal to mitigate damage to your property during sidewalk construction. If you have any landscaping facilities within the City right-of-way please notify the City immediately. All private landscaping features within right-of-way that conflict with construction will be removed."
  },
  {
    question: "When will construction happen on my street?",
    keywords: ['timing', 'when', 'schedule', 'construction', 'on', 'my', 'street', 'program', 'status'],
    answer: "Please check the Construction Program and Project Status section. Residents directly impacted by a sidewalk project will be informed in advance of any construction proceeding."
  },
  {
    question: "What is the City right-of-way?",
    keywords: ['right', 'of', 'way', 'property', 'boundary', 'curb', 'how', 'far', 'city', 'land'],
    answer: "Approximately 5.0 meters / 16.4 feet from the curb is City right-of-way. This land allows the City to lay cables, pipes, streetlights and sidewalks to provide services for everyone."
  }
];

// Filler and question words that appear in queries of every kind and never identify a topic on their own
const genericKeywords = new Set([
  'what', 'when', 'where', 'why', 'how', 'my', 'of', 'on', 'off', 'not', 'use', 'way', 'right',
  'far', 'wide', 'safe', 'size', 'item', 'line', 'call', 'free', 'time', 'day', 'days', 'year',
]);

// Words from the question itself also count as keywords, minus ones too common to mean anything
const questionStopwords = new Set([
  'what', 'when', 'where', 'which', 'does', 'have', 'with', 'about', 'there', 'should', 'will',
  'from', 'your', 'this', 'that', 'into', 'after', 'markham', 'city', 'find', 'many', 'need',
]);
const entryKeywords = faqDatabase.map(entry => {
  const questionWords = entry.question
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, ' ')
    .split(/\s+/)
    .map(word => word.replace(/'s$/, ''))
    .filter(word => word.length >= 4 && !questionStopwords.has(word));
  return [...new Set([...entry.keywords, ...questionWords])];
});

// How many entries share each keyword; a keyword used by one or two entries is a strong signal
const keywordFrequency = new Map<string, number>();
for (const keywords of entryKeywords) {
  for (const keyword of keywords) {
    keywordFrequency.set(keyword, (keywordFrequency.get(keyword) ?? 0) + 1);
  }
}

// Match whole words only (so "ice" doesn't match "office"), allowing simple word endings
const keywordPatterns = new Map<string, RegExp>();
const matchesKeyword = (query: string, keyword: string) => {
  let pattern = keywordPatterns.get(keyword);
  if (!pattern) {
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    pattern = new RegExp(`\\b${escaped}(s|es|ed|ing)?\\b`);
    keywordPatterns.set(keyword, pattern);
  }
  return pattern.test(query);
};

const FALLBACK_ANSWER = "I'm HeyMarkham, and I can only help with questions about Markham municipal services. I don't have specific information about that question. For further assistance you can call City of Markham customer service at 905-477-5530 or email customerservice@markham.ca during business hours.";

/**
 * Find best matching answer for user query, with the markham.ca page it came from if checked
 */
export function findFaq(query: string): { answer: string; source?: string } {
  const lowerQuery = query.toLowerCase();
  
  let bestMatch: (typeof faqDatabase)[number] | null = null;
  let highestScore = 0;

  for (const [index, entry] of faqDatabase.entries()) {
    let score = 0;
    for (const keyword of entryKeywords[index]) {
      if (matchesKeyword(lowerQuery, keyword)) {
        // Filler words only nudge a match; distinctive words carry it
        if (genericKeywords.has(keyword)) score += 0.5;
        else score += (keywordFrequency.get(keyword) ?? 0) <= 2 ? 2 : 1;
      }
    }
    if (score > highestScore) {
      highestScore = score;
      bestMatch = entry;
    }
  }

  // Minimum threshold - two common keywords, or one distinctive keyword
  if (highestScore >= 2 && bestMatch) {
    return { answer: bestMatch.answer, source: bestMatch.source };
  }
  
  // Uncertain / irrelevant question
  return { answer: FALLBACK_ANSWER };
}

export function findAnswer(query: string): string {
  return findFaq(query).answer;
}
