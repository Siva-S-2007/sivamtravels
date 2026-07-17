import type { Lang } from './data';

export type Bi = Record<Lang, string>;

export type ModalData = {
  id: string;
  bannerImage: string;
  overview: Bi;
  history: Bi;
  benefits: Bi[];
  specialRituals: Bi;
  templeSpecialities: Bi;
  architecture: Bi;
  bestDay: Bi;
  bestTime: Bi;
  location: Bi;
};

export const navagrahaModalData: Record<string, ModalData> = {
  surya: {
    id: 'surya',
    bannerImage: '/deities/suryan.jpg',
    overview: {
      en: 'Suryanar Kovil is the premier Navagraha temple dedicated exclusively to the Sun God, Surya. Located near Kumbakonam, it is unique because it features dedicated shrines for all other eight planetary deities facing Surya. Worship here is believed to bestow health, vitality, and success in life.',
      ta: 'சூரியநார் கோவில் சூரிய பகவானுக்கு அர்ப்பணிக்கப்பட்ட முதன்மை நவகிரக கோயில். கும்பகோணம் அருகே அமைந்துள்ள இது, மற்ற எட்டு கிரக தெய்வங்களுக்கும் தனித்தனி சன்னதிகள் கொண்டதால் தனித்துவமானது. இங்கு வழிபட ஆரோக்கியம், உயிரோட்டம், வாழ்வில் வெற்றி கிடைக்கும் என்பது நம்பிக்கை.',
    },
    history: {
      en: 'The origins of Suryanar Kovil are rooted in ancient Puranic legends. According to temple lore, Sage Kalava was predicted to suffer from severe leprosy due to his past karma. Seeking relief, he prayed intensely to all nine planetary deities. Moved by his devotion, the Navagrahas granted him a cure. However, Lord Brahma was displeased because the planets went against the cosmic laws of karma by altering the sage\'s destiny. As a punishment, Brahma cursed the Navagrahas to live on Earth in a jungle of white wildflower plants, known as Arka Vanam. The planets performed severe penance to Lord Shiva at this very spot to seek redemption. Pleased by their intense devotion, Lord Shiva appeared before them and desanctified the curse. Shiva declared that the area would become a holy site where devotees could worship the Navagrahas to mitigate their planetary afflictions. He also granted Surya the primary status among the planets here. The current structural temple was built during the Chola dynasty. Historical inscriptions attribute its construction to King Kulothunga Chola I in the late 11th century CE. Later additions and renovations were carried out by the Vijayanagara rulers and the Nayak kings, who expanded the stone mandates and the outer walls. Architecturally, the temple represents an early transition phase of Chola stone architecture. Unlike other temples where Navagrahas are placed in a single small shrine, this temple was specifically designed to house them in separate structural shrines surrounding the central deity. This layout preserves the cosmic configuration described in ancient astrological texts.',
      ta: 'சூரியநார் கோவிலின் தோற்றம் பண்டைய புராண கதைகளில் வேரூன்றியது. கலவ முனிவர் தன் கர்மாவால் கடுமையான தோல் நோயால் பாதிக்கப்படுவார் என கணிக்கப்பட்டது. நிவாரணம் தேடி, அவர் ஒன்பது கிரக தெய்வங்களையும் தீவிரமாக பிரார்த்தனை செய்தார். அவரது பக்தியால் நவகிரகங்கள் அவருக்கு நிவாரணம் அளித்தன. ஆனால் பிரம்மா கோபமடைந்து, கிரகங்கள் கர்ம விதியை மீறியதால் அர்க்க வனத்தில் வாழ சாபமிட்டார். கிரகங்கள் இங்கு இறைவனை தீவிர தவம் செய்து சாபத்தை நீக்கிக்கொண்டன. சோழ மன்னர் முதலாம் குலோத்துங்க சோழனால் 11-ஆம் நூற்றாண்டில் கட்டப்பட்டது.',
    },
    benefits: [
      { en: 'Overcomes chronic health issues, eye, bone, and skin diseases', ta: 'நாட்பட்ட உடல்நல பிரச்சனைகள், கண், எலும்பு, தோல் நோய்களை போக்குகிறது' },
      { en: 'Infuses willpower, leadership, and self-confidence', ta: 'மன உறுதி, தலைமைத்துவம், சுய நம்பிக்கையை வளர்க்கிறது' },
      { en: 'Relieves delays in career, politics, and government approvals', ta: 'தொழில், அரசியல், அரசு அனுமதி தாமதங்களை நீக்குகிறது' },
      { en: 'Clears ancestral blocks, bringing peace and prosperity', ta: 'முன்னோர் தடைகளை நீக்கி அமைதியும் செழுமையும் தருகிறது' },
    ],
    specialRituals: {
      en: 'Maha Abhishekam to Lord Surya, Surya Namaskaram archana, and Arka Leaf (Erukku) offering.',
      ta: 'சூரிய பகவானுக்கு மகா அபிஷேகம், சூரிய நமஸ்கார அர்ச்சனை, எருக்கு இலை படையல்.',
    },
    templeSpecialities: {
      en: 'The cosmic center for mitigating Surya Dosha, Pitru Dosha, and planetary obstructions. Surya faces west, and all eight planets are in separate shrines around him. Devotees circumambulate the entire complex to balance cosmic energies.',
      ta: 'சூரிய தோஷம், பித்ரு தோஷம், கிரக தடைகளை நீக்கும் பிரபஞ்ச மையம். சூரியன் மேற்கு நோக்கி, மற்ற எட்டு கிரகங்களும் அவரைச் சுற்றி தனித்தனி சன்னதிகளில் உள்ளன.',
    },
    architecture: {
      en: 'Built in classic Chola architectural style, featuring a three-tiered Rajagopuram. The unique feature is that Guru (Jupiter) is positioned directly facing Surya, which visually subdues the intense heat and power radiating from the Sun God.',
      ta: 'சோழர் கட்டிடக்கலை பாணியில் மூன்று நிலை ராஜகோபுரத்துடன் கட்டப்பட்டது. குரு நேரடியாக சூரியனை நோக்கி இருப்பது சிறப்பம்சம்.',
    },
    bestDay: { en: 'Sunday', ta: 'ஞாயிறு' },
    bestTime: { en: '6:00 AM – 10:00 AM', ta: 'காலை 6:00 – 10:00' },
    location: { en: 'Suryanar Kovil, near Kumbakonam', ta: 'சூரியனார் கோவில், கும்பகோணம் அருகே' },
  },
  chandra: {
    id: 'chandra',
    bannerImage: '/gallery/chandrangallery.png',
    overview: {
      en: 'Thingalur Kailasanathar Temple is dedicated to Chandra, the Moon God. While the primary deity is Lord Shiva as Kailasanathar, Chandra is worshipped here in a prominent shrine to bring mental peace, emotional stability, and relief from psychological stresses.',
      ta: 'திங்களூர் கைலாசநாதர் கோயில் சந்திர பகவானுக்கு அர்ப்பணிக்கப்பட்டது. மூலவர் கைலாசநாதராக இறைவன் இருந்தாலும், சந்திரன் இங்கு முக்கிய சன்னதியில் வழிபடப்படுகிறார். மன அமைதி, உணர்ச்சி சமநிலை, மன அழுத்தம் நீக்கம் கிடைக்கும்.',
    },
    history: {
      en: 'The history of Thingalur is deeply intertwined with the story of a wealthy merchant and staunch devotee named Appudhi Adigal. Appudhi Adigal revered the saint Thirunavukkarasar (Appar) so much that he named his children, his businesses, and local charity booths after him. One day, Appar visited Thingalur and was invited to Appudhi Adigal\'s home for a feast. While gathering banana leaves for the meal, Appudhi Adigal\'s eldest son was bitten by a venomous cobra and died instantly. To avoid disrupting the holy guest\'s meal, the grieving parents hid the corpse. When Appar asked for the eldest son to serve the food, the truth came out. Deeply moved, Appar carried the boy\'s body to the temple and sang the famous "Ondru Kolam" pathigam to Lord Shiva. Miraculously, the poison left the boy\'s body, and he woke up as if from sleep, showcasing the divine grace present at this holy site. The structural shrine dates back to the early medieval Chola period, with subsequent enhancements by the Vijayanagara empire. The village name "Thingal" translates directly to the moon in Tamil, establishing the site\'s cosmic connection for millennia.',
      ta: 'திங்களூர் வரலாறு அப்பூதி அடிகள் என்ற வணிகரின் கதையுடன் இணைந்துள்ளது. அவர் திருநாவுக்கரசர் (அப்பர்) மீது கொண்ட பக்தியால் தன் பிள்ளைகளுக்கும் தொழிலுக்கும் அப்பர் பெயரையே வைத்தார். ஒருநாள் அப்பர் விருந்திற்கு வந்தபோது, மூத்த மகன் பாம்பு கடியால் இறந்தான். விருந்தின் மரியாதைக்காக அவர்கள் உடலை மறைத்தனர். அப்பர் உண்மை அறிந்து, "ஒன்று கோலம்" பதிகம் பாட, குழந்தை உயிர்த்தெழுந்தது. திங்களூர் என்ற பெயர் தமிழில் சந்திரனை குறிக்கிறது.',
    },
    benefits: [
      { en: 'Mental clarity, emotional balance, and relief from chronic stress', ta: 'மன தெளிவு, உணர்ச்சி சமநிலை, நாட்பட்ட மன அழுத்தம் நீக்கம்' },
      { en: 'Heals strained mother-child relationships, fosters domestic harmony', ta: 'தாய்-பிள்ளை உறவு மேம்பாடு, குடும்ப இசைவு' },
      { en: 'Unlocks creativity in arts, psychology, and hospitality', ta: 'கலை, உளவியல், விருந்தோம்பலில் படைப்பாற்றல்' },
      { en: 'Improves concentration, memory, and academic growth in children', ta: 'குழந்தைகளின் கவனம், நினைவாற்றல், கல்வி வளர்ச்சி' },
    ],
    specialRituals: {
      en: 'Chandra Abhishekam using raw rice and white flowers, and feeding of sweet pongal (rice pudding) to children.',
      ta: 'அரிசி மற்றும் வெள்ளை மலர்களால் சந்திர அபிஷேகம், குழந்தைகளுக்கு சர்க்கரைப் பொங்கல் படைத்தல்.',
    },
    templeSpecialities: {
      en: 'Chandra rules the mind, emotions, and maternal relationships. The temple is a spiritual healing center for Chandra Dosha, depression, anxiety, and emotional turmoil.',
      ta: 'சந்திரன் மனம், உணர்வு, தாய் உறவை ஆள்கிறார். சந்திர தோஷம், மனச்சோர்வு, கவலை, உணர்ச்சி கோளாறுகளுக்கு ஆன்மீக குண மையம்.',
    },
    architecture: {
      en: 'A modest yet highly energetic rural temple structure with a traditional tank called Chandra Pushkarani. During the Tamil months of Panguni and Purattasi, the moon rays fall directly onto the Shiva Lingam during sunset.',
      ta: 'எளிய ஆனால் உயர் ஆற்றல் கொண்ட கிராமக் கோயில். சந்திர புஷ்கரணி தீர்த்தம். பங்குனி, புரட்டாசி மாதங்களில் அந்தி வேளையில் சந்திரனின் ஒளி நேரடியாக சிவலிங்கத்தின் மீது விழுகிறது.',
    },
    bestDay: { en: 'Monday', ta: 'திங்கள்' },
    bestTime: { en: '5:00 PM – 7:00 PM', ta: 'மாலை 5:00 – 7:00' },
    location: { en: 'Thingalur, near Thiruvaiyaru', ta: 'திங்களூர், திருவையாறு அருகே' },
  },
  angaraka: {
    id: 'angaraka',
    bannerImage: '/deities/sevvai.jpg',
    overview: {
      en: 'Vaitheeswaran Kovil is the powerful Navagraha temple for Angarakan (Mars). Lord Shiva is worshipped here as Vaitheeswaran, the "Divine Healer," who cures all mental and physical ailments. This temple is also world-renowned as the center for Nadi Astrology.',
      ta: 'வைத்தீஸ்வரன் கோயில் அங்காரகனுக்கான (செவ்வாய்) வல்ல நவகிரக கோயில். இறைவன் வைத்தீஸ்வரனாக — "தெய்வீக வைத்தியராக" வழிபடப்படுகிறார். இது நாடி ஜோதிடத்திற்கு உலகப் புகழ்பெற்ற மையம்.',
    },
    history: {
      en: 'According to Hindu mythology, Mars (Angarakan) was suffering from a severe skin disease that caused immense agony. He performed rigorous penance at this shrine, praying to Lord Shiva. Moved by his devotion, Shiva appeared as a celestial physician (Vaitheeswaran), dissolved the disease with holy ash and neem leaves, and blessed Mars with a permanent place in the temple complex. Another major historical epic associated with this temple is from the Ramayana. It is believed that the demigod bird Jatayu fought valiantly against Ravana to rescue Goddess Sita. When Jatayu was mortally wounded, Lord Rama and Lakshmana found him here. After Jatayu passed away, Rama performed the final funerary rites for the bird at this sacred spot, which is marked by the Jatayu Kundam inside the temple. The structural elements of the temple boast deep historical antiquity, with renovations spanning the Chola, Pandya, and Hoysala dynasties. The complex also houses the shrine of Lord Murugan as Selva Muthukumaran. It is said that Goddess Parvati gave Murugan his divine spear (Vel) here to destroy the demon Surapadman.',
      ta: 'அங்காரகன் கடுமையான தோல் நோயால் அவதிப்பட்டு, இறைவனை தீவிர தவம் செய்தான். அவன் பக்தியால் இறைவன் வைத்தீஸ்வரனாக தோன்றி, விபூதியும் வேம்பு இலையும் கொண்டு நோயை நீக்கி, அவனுக்கு கோயிலில் இடம் அளித்தார். ராமாயணத்தில் ஜடாயு ராவணனுடன் போராடி காயமுற்று, இராமனிடம் உயிர்விட்டான். இராமன் இங்கு ஜடாயுவுக்கு இறுதிச் சடங்கு செய்தான். சோழ, பாண்டிய, ஹொய்சாளர் காலங்களில் புதுப்பிக்கப்பட்டது.',
    },
    benefits: [
      { en: 'Cures chronic sickness, skin allergies, and deep physical pains', ta: 'நாட்பட்ட நோய், தோல் ஒவ்வாமை, ஆழமான உடல் வலிகளை குணமாக்குகிறது' },
      { en: 'Removes marriage blocks, solves land disputes, protects from debts', ta: 'திருமண தடைகளை நீக்கி, நில வழக்குகளை தீர்த்து, கடனிலிருந்து பாதுகாக்கிறது' },
      { en: 'Career growth in engineering, surgery, defense, and real estate', ta: 'பொறியியல், அறுவை, பாதுகாப்பு, ரியல் எஸ்டேட்டில் தொழில் வளர்ச்சி' },
      { en: 'Channels anger into productive, constructive actions', ta: 'கோபத்தை செயல்படும் சக்தியாக மாற்றுகிறது' },
    ],
    specialRituals: {
      en: 'Angarakan Angamani Pooja, dissolved jaggery offering into the temple tank, and Thiruchandu Uruvaahi (holy paste) application.',
      ta: 'அங்காரக அங்கமணி பூஜை, கருப்பட்டி தீர்த்தத்தில் கரைத்தல், திருச்சந்து பிரசாதம்.',
    },
    templeSpecialities: {
      en: 'The primary site to remedy Angaraka Dosha (Sevvai Dosha), which causes delays in marriage, property disputes, and accidents. The earth element of Mars is balanced by the healing waters of the Siddhamirtham tank.',
      ta: 'அங்காரக தோஷம் (செவ்வாய் தோஷம்) நீக்கும் முதன்மை தலம். செவ்வாயின் பூமி தத்துவம் சித்தாமிர்த தீர்த்தத்தால் சமநிலைப்படுத்தப்படுகிறது.',
    },
    architecture: {
      en: 'A massive temple complex with high stone walls and a highly sacred tank called Siddhamirtham, whose waters are infused with medicinal herbs. The neem tree near the inner sanctum is centuries old and considered highly sacred.',
      ta: 'உயர் கல் சுவர்களுடன் பெரிய கோயில் வளாகம். சித்தாமிர்த தீர்த்தம் மூலிகைகள் கலந்த நீரைக் கொண்டது. கருவறை அருகே நூற்றாண்டு வேப்ப மரம் புனிதமானது.',
    },
    bestDay: { en: 'Tuesday', ta: 'செவ்வாய்' },
    bestTime: { en: '8:00 AM – 12:00 PM', ta: 'காலை 8:00 – 12:00' },
    location: { en: 'Vaitheeswaran Kovil, near Sirkazhi', ta: 'வைத்தீஸ்வரன் கோவில், சீர்காழி அருகே' },
  },
  budha: {
    id: 'budha',
    bannerImage: '/deities/budhan.jpg',
    overview: {
      en: 'Thiruvenkadu Swetharanyeswarar Temple is the dedicated Navagraha sthalam for Budhan (Mercury). Lord Shiva is worshipped here as Swetharanyeswarar in a vast "white forest" complex. Budhan governs intellect, education, and communication, making this a vital stop for student success.',
      ta: 'திருவெண்காடு ஸ்ரீவேதாரண்யேஸ்வரர் கோயில் புதனுக்கான நவகிரக தலம். இறைவன் ஸ்ரீவேதாரண்யேஸ்வரராக "வெள்ளை காட்டில்" வழிபடப்படுகிறார். புதன் அறிவு, கல்வி, தொடர்பாடலை ஆள்கிறார்.',
    },
    history: {
      en: 'The name Thiruvenkadu means "sacred white forest" in Tamil. Puranic history states that this temple is equal in spiritual sanctity to Kashi (Varanasi). It is said that Lord Shiva performed his fierce cosmic dance, the Tandava, here to slay the demon Maruthuvan, who had acquired boons and was terrorizing the devas. The scars from the demon\'s weapons are still visible on the body of the sacred Nandi bull inside the temple. Budhan performed deep penance here directed at Lord Shiva to clear himself of a past curse and to gain planetary status. Shiva, pleased with his academic and spiritual focus, granted him a place in the outer courtyard of the temple, facing east. The temple structures are ancient, with records showing renovations by Chola kings like Raja Raja Chola I and Aditya Chola. The temple features a unique manifestation of Shiva known as Agora Murthi, a fierce form that protected the sages from evil forces. Worshipping Agora Murthi before entering the Budhan shrine is a traditional custom followed for centuries to ward off negative energy.',
      ta: 'திருவெண்காடு என்ற பெயர் "புனித வெள்ளை காடு" எனப் பொருள்படும். இது காசிக்கு சமமான புனிதம் கொண்டது. இறைவன் மருதுவன் என்ற அரக்கனை அழிக்க தாண்டவம் ஆடியதாக வரலாறு. அந்த அரக்கனின் ஆயுதத்தால் ஏற்பட்ட தழும்புகள் நந்தியின் உடலில் இன்றும் உள்ளன. புதன் இங்கு தவமிருந்து கிரக நிலை பெற்றார். அகோர மூர்த்தி சன்னதி தீய சக்திகளை நீக்கும்.',
    },
    benefits: [
      { en: 'Clarity of thought, oratorical skills, and excellence in education and exams', ta: 'சிந்தனை தெளிவு, பேச்சுத்திறம், கல்வி மற்றும் தேர்வுகளில் சிறப்பு' },
      { en: 'Fixes speech impediments and cures nerve-related issues', ta: 'பேச்சு கோளாறுகளை சரிசெய்து நரம்பு சம்பந்தப்பட்ட நோய்களை குணமாக்குகிறது' },
      { en: 'Clears financial blocks for business owners, accountants, writers', ta: 'தொழில் அதிபர்கள், கணக்காளர்கள், எழுத்தாளர்களுக்கு நிதி தடைகளை நீக்குகிறது' },
      { en: 'Brings creative breakthroughs and analytical sharpness', ta: 'படைப்பாற்றல் முன்னேற்றம் மற்றும் ஆய்வு திறனை வளர்க்கிறது' },
    ],
    specialRituals: {
      en: 'Budhan Abhishekam with green cloth, green gram (moong dal) offering, and education-specific Vidhya Archana.',
      ta: 'பச்சை வஸ்திரம், பச்சைப் பயறு படையல், வித்யா அர்ச்சனையுடன் புதன் அபிஷேகம்.',
    },
    templeSpecialities: {
      en: 'The ultimate cosmic node for Budha Dosha. Mercury controls the nervous system, speech, logical thinking, and business acumen. The temple houses three sacred water tanks created by three drops from Lord Shiva\'s eyes during his cosmic dance.',
      ta: 'புதன் தோஷம் நீக்கும் பிரபஞ்ச மையம். புதன் நரம்பு மண்டலம், பேச்சு, தர்க்கம், தொழில் திறனை ஆள்கிறார். இறைவனின் தாண்டவத்தின் போது விழித்த மூன்று துளிகளால் மூன்று தீர்த்தங்கள்.',
    },
    architecture: {
      en: 'A very large temple complex featuring three holy tanks: Agni, Surya, and Chandra Theertham. The Agora Murthi shrine is an architectural masterpiece of Chola stone sculpture craftsmanship.',
      ta: 'மிகப் பெரிய கோயில் வளாகம். அக்னி, சூரிய, சந்திர தீர்த்தம் என மூன்று புனித தீர்த்தங்கள். அகோர மூர்த்தி சன்னதி சோழ சிற்ப கலை வியப்பு.',
    },
    bestDay: { en: 'Wednesday', ta: 'புதன்' },
    bestTime: { en: '7:00 AM – 11:00 AM', ta: 'காலை 7:00 – 11:00' },
    location: { en: 'Thiruvenkadu, near Sirkazhi', ta: 'திருவெண்காடு, சீர்காழி அருகே' },
  },
  guru: {
    id: 'guru',
    bannerImage: '/gallery/gurugallery.png',
    overview: {
      en: 'Alangudi is revered as the Navagraha sthalam for Guru (Jupiter), the planet of wisdom, fortune, and marriage. Here, Lord Shiva is known as Apatsahayavar (The Savior from Dangers), and Lord Dakshinamurthy is worshipped as the planetary representation of Guru.',
      ta: 'ஆலங்குடி குருவுக்கான (வியாழன்) நவகிரஹ தலம். ஞானம், அதிர்ஷ்டம், திருமணம் தரும் கிரகம். இறைவன் ஆபத்சகாயேஸ்வரராக (துன்ப நேரத்தில் உதவுபவர்) வழிபடப்படுகிறார். தட்சிணாமூர்த்தி குருவாக வழிபடப்படுகிறார்.',
    },
    history: {
      en: 'The legendary history of Alangudi revolves around the churning of the cosmic ocean of milk by gods and demons. During the churning, a deadly venom called Halahala emerged, threatening to destroy the entire universe. Lord Shiva came to the rescue, swallowing the poison to save creation. The name "Alangudi" translates to "the place where the poison was consumed," making it a deeply sacred place of refuge. Sage Vishwamitra, the celestial devas, and the planet Jupiter themselves performed intense penance here to witness Lord Shiva\'s benevolent form. Because Jupiter is the preceptor (Guru) of the gods, Lord Shiva manifested here as Dakshinamurthy, the cosmic teacher, to impart ultimate spiritual wisdom to him. The architectural structure seen today was constructed during the Chola era and heavily fortified by the Nayak rulers during wars. The temple is bounded by three holy rivers, creating a natural geographic energetic vortex.',
      ta: 'பாற்கடல் கடையும் போது வெளிவந்த ஆலகால விஷத்தை இறைவன் உண்டு பிரபஞ்சத்தை காத்தார். "ஆலங்குடி" என்ற பெயர் "விஷம் உண்ட இடம்" எனப் பொருள்படும். விஸ்வாமித்திரரும் குருவும் இங்கு தவமிருந்தனர். குரு தேவர்களின் ஆசான் என்பதால் இறைவன் தட்சிணாமூர்த்தியாக தோன்றினார். சோழ காலத்தில் கட்டப்பட்டு நாயக்க மன்னர்களால் புதுப்பிக்கப்பட்டது.',
    },
    benefits: [
      { en: 'Opens stalled marriage proposals, blesses childless couples with offspring', ta: 'தடைபட்ட திருமண பேச்சுகளை திறக்கிறது, குழந்தையில்லாதோருக்கு ஆசி' },
      { en: 'Removes dangers, eliminates negative vibrations, resolves financial crises', ta: 'தீய சக்திகளை நீக்கி, நிதி நெருக்கடிகளை தீர்க்கிறது' },
      { en: 'Clarity and luck for civil services, management, and teaching roles', ta: 'அரசு, மேலாண்மை, கற்பித்தல் துறைகளில் தெளிவும் அதிர்ஷ்டமும்' },
      { en: 'Converts bad planetary phases into wisdom and growth', ta: 'தீய கிரக காலங்களை ஞானமாகவும் வளர்ச்சியாகவும் மாற்றுகிறது' },
    ],
    specialRituals: {
      en: 'Guru Peyarchi Laksharchana (during Jupiter transit), chickpea (Kondaikadalai) garland offering, and yellow cloth presentation.',
      ta: 'குரு பெயர்ச்சி லட்சார்ச்சனை, கொண்டைக்கடலை மாலை, மஞ்சள் வஸ்திரம் படைத்தல்.',
    },
    templeSpecialities: {
      en: 'Guru is the most benevolent planet, governing wealth, marriage, and children. When Guru is weakly positioned, it causes financial distress and delay in childbearing. Alangudi is the primary temple to clear these planetary blockages.',
      ta: 'குரு மிகவும் அருள் தரும் கிரகம், செழுமை, திருமணம், குழந்தைகளை ஆள்கிறார். குரு பலவீனமாக இருந்தால் நிதி துன்பமும் குழந்தை தாமதமும் ஏற்படும். ஆலங்குடி இவற்றை நீக்கும் முதன்மை தலம்.',
    },
    architecture: {
      en: 'Surrounded by a scenic moat-like structure, the temple stands out for its exceptional Dakshinamurthy sculpture on the south wall, which is visited by hundreds of thousands during transit days.',
      ta: 'அகழியால் சூழப்பட்ட கோயில். தெற்கு சுவரில் உள்ள தட்சிணாமூர்த்தி சிற்பம் சிறப்பம்சம். பெயர்ச்சி நாட்களில் லட்சக்கணக்கானோர் வருகின்றனர்.',
    },
    bestDay: { en: 'Thursday', ta: 'வியாழன்' },
    bestTime: { en: '6:00 AM – 9:00 AM', ta: 'காலை 6:00 – 9:00' },
    location: { en: 'Alangudi, near Kumbakonam', ta: 'ஆலங்குடி, கும்பகோணம் அருகே' },
  },
  sukra: {
    id: 'sukra',
    bannerImage: '/deities/sukran.jpg',
    overview: {
      en: 'Kanjanur Agniswarar Temple is the Navagraha shrine dedicated to Sukran (Venus), the planet governing wealth, art, luxury, and marital bliss. Uniquely, Sukran is located invisibly within the main Shiva Lingam (Agniswarar) itself, rather than in a separate physical idol.',
      ta: 'காஞ்சனூர் அக்னீஸ்வரர் கோயில் சுக்கிரனுக்கான (வெள்ளி) நவகிரக தலம். செழுமை, கலை, ஆடம்பரம், திருமண இன்பம் தரும் கிரகம். தனிப்பட்ட முறையில் சுக்கிரன் முதன்மை சிவலிங்கத்துக்குள்ளேயே அகண்யமாக உள்ளார்.',
    },
    history: {
      en: 'The history of Kanjanur is linked to Agni, the Fire God, who performed deep penance here to wash away the sins of consuming impure offerings during rituals. Lord Shiva appeared before him from the sacrificial fire, giving the main deity the name Agniswarar. During the Vamana avatar of Lord Vishnu, the demon king Bali was giving away land as charity. Sukran, who was the guru of the demons, realized Vishnu\'s trick and took the form of a bee to block the spout of the water vessel to stop the donation. Lord Vishnu pierced the spout with a blade of grass, blinding Sukran in one eye. To regain his lost eyesight and planetary status, Sukran came to Kanjanur and prayed to Lord Shiva for centuries. Shiva blessed Sukran, restored his vision, and absorbed him into his own divine form. Hence, there is no separate shrine for Sukran here; Lord Agniswarar himself acts as the giver of Venusian blessings.',
      ta: 'அக்னி தேவன் இங்கு தவமிருந்து பாவம் நீக்கினான். இறைவன் யாக நெருப்பிலிருந்து தோன்றி அக்னீஸ்வரர் எனப்பெயர் பெற்றார். வாமன அவதாரத்தில் சுக்கிரன் தேவர்களின் ஆசானாக இருந்து விஷ்ணுவின் தந்திரத்தை உணர்ந்து தடுக்க முயன்றார். விஷ்ணு புல்லால் குடத்தை குத்த, சுக்கிரனுக்கு ஒரு கண் பார்வை போனது. அதை மீட்க இங்கு தவமிருந்து இறைவன் அருள் பெற்றார்.',
    },
    benefits: [
      { en: 'Material luxury, financial stability, and ability to purchase homes and vehicles', ta: 'பொருள் ஆடம்பரம், நிதி ஸ்திரத்தன்மை, வீடு வாகனம் வாங்க ஆசி' },
      { en: 'Resolves spouse disputes, brings harmony, romance, and understanding', ta: 'தம்பதிகளிடையே இசைவு, அன்பு, புரிதலை ஏற்படுத்துகிறது' },
      { en: 'Creative breakthroughs in filmmaking, fashion, music, and design', ta: 'திரைப்படம், ஃபேஷன், இசை, வடிவமைப்பில் படைப்பாற்றல்' },
      { en: 'Clears eye-related health ailments and skin issues', ta: 'கண் மற்றும் தோல் சம்பந்தப்பட்ட நோய்களை நீக்குகிறது' },
    ],
    specialRituals: {
      en: 'White cloth offering to the Shiva Lingam, white lotus archana, and moong dal sweet distribution.',
      ta: 'சிவலிங்கத்திற்கு வெள்ளை வஸ்திரம், வெள்ளை தாமரை அர்ச்சனை, பயறு இனிப்பு படைத்தல்.',
    },
    templeSpecialities: {
      en: 'Sukran rules artistic talents, visual aesthetics, diamonds, vehicles, and family happiness. This temple is an energetic hub to resolve Sukra Dosha, which can cause marital discord and poverty.',
      ta: 'சுக்கிரன் கலைத்திறன், அழகியல், வைரம், வாகனம், குடும்ப இன்பம் தருபவர். சுக்கிர தோஷம் நீக்கும் ஆற்றல் மையம்.',
    },
    architecture: {
      en: 'Built in classic Chola style with multiple stone enclosures. A beautiful stone carving of Nataraja in the Mukti Mandapam shows Shiva performing the Mukti Tandava for the sages.',
      ta: 'சோழர் பாணியில் பல கல் அடைப்புகளுடன் கட்டப்பட்டது. முக்தி மண்டபத்தில் நடராஜரின் கல் சிற்பம் சிறப்பு.',
    },
    bestDay: { en: 'Friday', ta: 'வெள்ளி' },
    bestTime: { en: '5:00 PM – 7:00 PM', ta: 'மாலை 5:00 – 7:00' },
    location: { en: 'Kanjanur, near Kumbakonam', ta: 'காஞ்சனூர், கும்பகோணம் அருகே' },
  },
  shani: {
    id: 'shani',
    bannerImage: '/deities/shani.jpg',
    overview: {
      en: 'Thirunallar Saniswaran Temple is the most powerful Navagraha sthalam for Sani (Saturn), the planet of karma, discipline, and justice. Lord Shiva is worshipped as Darbaranyeswarar, and Sani resides in a separate shrine where he is treated with utmost devotion to relieve the effects of Sade Sati.',
      ta: 'திருநள்ளாறு சனீஸ்வரன் கோயில் சனிக்கான (கர்ம, ஒழுக்கம், நீதி கிரகம்) வல்ல நவகிரக தலம். இறைவன் தர்பாரண்யேஸ்வரராக வழிபடப்படுகிறார். சனி தனி சன்னதியில் சாடே சாதி தீய விளைவுகளை நீக்க வழிபடப்படுகிறார்.',
    },
    history: {
      en: 'The most famous legend of Thirunallar involves King Nala of the Nishadha kingdom. King Nala was a righteous and noble ruler, but he was cursed by Saturn to lose his kingdom, wealth, and even his physical form, turning into a deformed dwarf. Wandering in exile, Nala reached Thirunallar and took a holy bath in the Nala Theertham tank. Instantly, the effects of Saturn\'s curse were washed away, and Nala regained his handsome form and royal dignity. This is why the temple tank is called Nala Theertham. Saturn, pleased with Nala\'s devotion, granted him a boon that anyone who bathes in this tank on Saturdays during Sade Sati would be relieved of their sufferings. Another legend states that the divine consorts of the Navagrahas were cursed by Lord Brahma and took refuge in this forest of darbha grass (Darbaranyam). Lord Shiva appeared as a Swayambhu Lingam in the forest, and the consorts worshipped him to be relieved of their curse.',
      ta: 'நலன் என்ற மன்னர் சனி சாபத்தால் அரசையும் செழுமையையும் இழந்து, குள்ளமாக மாறினான். திருநள்ளாறு வந்து நல தீர்த்தத்தில் நீராட, சனி சாபம் நீங்கி, மீண்டும் கம்பீரமான உருவம் பெற்றான். சனிக்கிழமை இத்தீர்த்தத்தில் நீராடினால் சாடே சாதி துன்பங்கள் நீங்கும் என சனி வரமளித்தார். தர்ப்பை காட்டில் இறைவன் சுயம்பு லிங்கமாக தோன்றினார்.',
    },
    benefits: [
      { en: 'Relief from the seven-and-a-half-year Sade Sati and Ashtama Shani periods', ta: 'ஏழரை சனி மற்றும் அஷ்டம சனி காலங்களிலிருந்து நிவாரணம்' },
      { en: 'Overcomes professional stagnation, legal issues, and sudden financial losses', ta: 'தொழில் தேக்கம், சட்ட பிரச்சனைகள், திடீர் நிதி இழப்புகளை போக்குகிறது' },
      { en: 'Discipline, patience, and hard work bring long-term stability', ta: 'ஒழுக்கம், பொறுமை, கடின உழைப்பு நீண்ட கால ஸ்திரத்தன்மை தருகின்றன' },
      { en: 'Relief from chronic joint pains, leg ailments, and nervous disorders', ta: 'நாட்பட்ட மூட்டு வலி, கால் நோய்கள், நரம்பு கோளாறுகள் நீக்கம்' },
    ],
    specialRituals: {
      en: 'Sesame (gingelly) oil abhishekam to Saturn, black cloth offering, and feeding of crows and beggars.',
      ta: 'சனிக்கு எள்ளெண்ணெய் அபிஷேகம், கருப்பு வஸ்திரம், காக்கா மற்றும் ஏழைகளுக்கு உணவளித்தல்.',
    },
    templeSpecialities: {
      en: 'Sani is the planet of karma and divine justice. He delivers the results of past actions, not as punishment but as spiritual lessons. Thirunallar is the primary temple to seek his grace during difficult Saturn transits.',
      ta: 'சனி கர்மம் மற்றும் தெய்வீக நீதியின் கிரகம். தண்டனையாக அல்லாமல் ஆன்மீக பாடமாக கடந்த கால செயல்களின் விளைவை வழங்குகிறார். திருநள்ளாறு சனி பெயர்ச்சி காலங்களில் அருள் பெற முதன்மை தலம்.',
    },
    architecture: {
      en: 'Built in the Dravidian style with a five-tiered Rajagopuram. The Nala Theertham tank is a major architectural and spiritual feature, surrounded by pillared corridors where devotees perform circumambulation.',
      ta: 'ஐந்து நிலை ராஜகோபுரத்துடன் திராவிட பாணியில் கட்டப்பட்டது. நல தீர்த்தம் முக்கிய அம்சம், தூண்களால் சூழப்பட்ட வராண்டங்கள்.',
    },
    bestDay: { en: 'Saturday', ta: 'சனி' },
    bestTime: { en: '4:30 PM – 6:00 PM', ta: 'மாலை 4:30 – 6:00' },
    location: { en: 'Thirunallar, Karaikal', ta: 'திருநள்ளாறு, காரைக்கால்' },
  },
  rahu: {
    id: 'rahu',
    bannerImage: '/deities/rahu.jpg',
    overview: {
      en: 'Thirunageswaram Rahu Temple is dedicated to the shadow planet Rahu. Lord Shiva is worshipped as Naganathaswamy. The temple is world-famous for a miraculous phenomenon: during the milk abhishekam to Rahu, the milk turns pale blue before flowing into the tank.',
      ta: 'திருநாகேஸ்வரம் ராகு கோயில் நிழல் கிரகமான ராகுவுக்கு அர்ப்பணிக்கப்பட்டது. இறைவன் நாகநாதசுவாமியாக வழிபடப்படுகிறார். ராகுவுக்கு பால் அபிஷேகம் செய்யும் போது பால் நீல நிறமாக மாறும் அதிசயத்திற்கு உலகப் புகழ்.',
    },
    history: {
      en: 'The legend of Rahu is rooted in the churning of the cosmic ocean. When the elixir of immortality emerged, the demon Swarbhanu disguised himself as a god and sat between the sun and moon to drink it. Lord Vishnu, in the form of Mohini, discovered the deception and severed Swarbhanu\'s head with the Sudarshana Chakra. However, since the nectar had already reached his throat, both the head (Rahu) and the body (Ketu) became immortal. Rahu, seeking a place of worship, performed intense penance at Thirunageswaram. Lord Shiva appeared and granted him planetary status, instructing him to reside here and bless devotees. The temple\'s name "Thiru Nageswaram" means "the sacred abode of the serpent king." The serpent king Adisesha and Goddess Parvati are also said to have worshipped Shiva here. The temple was patronized by the Chola kings and later by the Thanjavur Marathas, who added significant structural elements.',
      ta: 'பாற்கடல் கடையும் போது அமுதம் வெளிவர, அசுரன் ஸ்வர்பானு தேவர்களைப் போல வேடமிட்டு அமுதம் குடித்தான். விஷ்ணு மோகினி அவதாரம் எடுத்து சுதர்சன சக்கரத்தால் அவன் தலையை துண்டித்தார். அமுதம் தொண்டையை அடைந்திருந்ததால் தலை (ராகு) மற்றும் உடல் (கேது) இரண்டும் அழியா உயிர் பெற்றன. ராகு இங்கு தவமிருந்து இறைவன் அருளால் கிரக நிலை பெற்றான்.',
    },
    benefits: [
      { en: 'Removes obstacles in foreign education, travel, and immigration', ta: 'வெளிநாட்டு கல்வி, பயணம், குடியேற்றத்தில் தடைகளை நீக்குகிறது' },
      { en: 'Relief from snake curses (Sarpa Dosha) and sudden misfortunes', ta: 'நாக தோஷம் மற்றும் திடீர் துர்பாக்கியங்களிலிருந்து நிவாரணம்' },
      { en: 'Protects from betrayal, hidden enemies, and negative energies', ta: 'துரோகம், மறைமுக எதிரிகள், தீய சக்திகளிடமிருந்து பாதுகாப்பு' },
      { en: 'Heals skin diseases, allergies, and mysterious health issues', ta: 'தோல் நோய்கள், ஒவ்வாமை, மர்ம உடல்நல பிரச்சனைகளை குணமாக்குகிறது' },
    ],
    specialRituals: {
      en: 'Rahu Kalam milk abhishekam (especially on Saturdays), blue cloth offering, and serpent worship.',
      ta: 'ராகு கால பால் அபிஷேகம் (குறிப்பாக சனிக்கிழமை), நீல வஸ்திரம், நாக வழிபாடு.',
    },
    templeSpecialities: {
      en: 'Rahu is the north node of the moon, causing eclipses and governing sudden events. The milk-turning-blue phenomenon during abhishekam draws thousands of devotees and is considered a divine confirmation of Rahu\'s presence.',
      ta: 'ராகு சந்திரனின் வட முனை, கிரகணங்களையும் திடீர் நிகழ்வுகளையும் ஆள்கிறார். அபிஷேகத்தின் போது பால் நீலமாகும் நிகழ்வு ஆயிரக்கணக்கான பக்தர்களை ஈர்க்கிறது.',
    },
    architecture: {
      en: 'A grand temple complex with two prakarams (enclosures) and a towering Rajagopuram. The Rahu shrine features the deity with a human body and a serpent head, carved in dark stone.',
      ta: 'இரண்டு பிரகாரங்கள் மற்றும் உயர் ராஜகோபுரத்துடன் பிரம்மாண்ட கோயில். ராகு சன்னதியில் மனித உடலும் பாம்பு தலையும் கொண்ட கருங்கல் சிற்பம்.',
    },
    bestDay: { en: 'Saturday (Rahu Kalam)', ta: 'சனி (ராகு காலம்)' },
    bestTime: { en: '4:30 PM – 6:00 PM', ta: 'மாலை 4:30 – 6:00' },
    location: { en: 'Thirunageswaram, near Kumbakonam', ta: 'திருநாகேஸ்வரம், கும்பகோணம் அருகே' },
  },
  ketu: {
    id: 'ketu',
    bannerImage: '/deities/kethu.jpg',
    overview: {
      en: 'Keezhaperumpallam Naganatha Temple is the Navagraha sthalam for Ketu, the south lunar node. Located near the ancient port town of Poompuhar where the Cauvery meets the sea, it is a serene, off-the-beaten-path temple ideal for deep meditation and spiritual liberation.',
      ta: 'கீழப்பெரும்பள்ளம் நாகநாத கோயில் கேதுவுக்கான நவகிரக தலம். காவிரி கடலைச் சந்திக்கும் பூம்புகார் துறைமுகம் அருகே, ஆழ்ந்த தியானத்திற்கும் முக்திக்கும் ஏற்ற அமைதியான தலம்.',
    },
    history: {
      en: 'The legend of Ketu is inseparable from that of Rahu. When Lord Vishnu severed the demon Swarbhanu, the headless body became Ketu. Ketu performed severe penance at Keezhaperumpallam to attain planetary status. Lord Shiva, pleased with his devotion, granted him the role of "Moksha Karaka" — the planet that grants spiritual liberation. Ketu is depicted with a serpent\'s head and a human body, symbolizing the severed body of the demon. The temple is located near Poompuhar, one of the most ancient port cities of the Tamil Sangam era, which was later submerged by the sea. The serene, remote location of the temple adds to its meditative atmosphere. Historical records show patronage by the Chola kings, who maintained the temple as part of the Navagraha circuit. The temple has been relatively small and less frequented compared to other Navagraha temples, preserving its contemplative character.',
      ta: 'கேதுவின் கதை ராகுவின் கதையுடன் பிரிக்க முடியாது. விஷ்ணு ஸ்வர்பானுவின் தலையை துண்டித்தபோது, தலையற்ற உடல் கேதுவானது. கேது இங்கு தீவிர தவமிருந்து கிரக நிலை பெற்றான். இறைவன் அவனை "மோட்ச காரகர்" — ஆன்மீக முக்தி தரும் கிரகமாக ஆசீர்வதித்தார். கேது பாம்பு தலையும் மனித உடலும் கொண்டு சித்தரிக்கப்படுகிறான். பூம்புகார் அருகே அமைந்துள்ளது.',
    },
    benefits: [
      { en: 'Spiritual growth, detachment from material bondage, and inner peace', ta: 'ஆன்மீக வளர்ச்சி, பொருள் பற்றறுத்தல், உள் அமைதி' },
      { en: 'Relief from mysterious illnesses, unexplained fears, and phobias', ta: 'மர்ம நோய்கள், காரணம் தெரியாத பயம் மற்றும் பீதியிலிருந்து நிவாரணம்' },
      { en: 'Breaks repetitive karmic patterns and ancestral curses', ta: 'திரும்ப திரும்ப வரும் கர்ம சுழற்சி மற்றும் முன்னோர் சாபங்களை முறிக்கிறது' },
      { en: 'Wisdom in occult sciences, astrology, and spiritual healing', ta: 'மறைமுக அறிவியல், ஜோதிடம், ஆன்மீக குணமளித்தலில் ஞானம்' },
    ],
    specialRituals: {
      en: 'Ketu abhishekam with multicolored flowers, horse gram (kollu) offering, and deep meditation.',
      ta: 'பல வர்ண மலர்களால் கேது அபிஷேகம், கொள்ளு படையல், ஆழ்ந்த தியானம்.',
    },
    templeSpecialities: {
      en: 'Ketu is the Moksha Karaka — the planet of spiritual liberation. Unlike other planets that grant material benefits, Ketu grants detachment, wisdom, and freedom from the cycle of rebirth. The temple\'s remote location enhances its meditative power.',
      ta: 'கேது மோட்ச காரகர் — ஆன்மீக முக்தி கிரகம். மற்ற கிரகங்களைப் போல பொருள் பலன் தராமல், பற்றறுத்தல், ஞானம், பிறவாசை நீக்கம் தருகிறார். தலத்தின் தொலைவு தியான சக்தியை அதிகர்க்கிறது.',
    },
    architecture: {
      en: 'A small, modest temple with a single prakaram. The Ketu shrine features the deity with a serpent\'s head and human body, carved in stone. The temple\'s simplicity and remote location near the coast contribute to its deeply contemplative atmosphere.',
      ta: 'ஒரே பிரகாரத்துடன் சிறிய கோயில். கேது சன்னதியில் பாம்பு தலையும் மனித உடலும் கொண்ட கல் சிற்பம். கடற்கரை அருகே அமைந்துள்ளது.',
    },
    bestDay: { en: 'Tuesday', ta: 'செவ்வாய்' },
    bestTime: { en: '4:30 PM – 6:00 PM', ta: 'மாலை 4:30 – 6:00' },
    location: { en: 'Keezhaperumpallam, near Poompuhar', ta: 'கீழப்பெரும்பள்ளம், பூம்புகார் அருகே' },
  },
};
