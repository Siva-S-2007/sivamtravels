export type Lang = 'en' | 'ta';

export type Bi = Record<Lang, string>;

export type Package = {
  id: string;
  title: Bi;
  duration: Bi;
  tagline: Bi;
  overview: Bi;
  timeline: { time: string; title: Bi; description: Bi }[];
  inclusions: Bi[];
  exclusions: Bi[];
  price: string;
  priceUnit: Bi;
  heroImage: string;
};

export const packages: Package[] = [
  {
    id: '1-day',
    title: {
      en: '1-Day Navagraha Pilgrimage',
      ta: '1-நாள் நவகிரக யாத்திரை',
    },
    duration: { en: '1 Day', ta: '1 நாள்' },
    tagline: {
      en: 'A single day of devotion across the planetary temples.',
      ta: 'ஒரே நாளில் கிரகக் கோயில்களுக்கான பக்திப் பயணம்.',
    },
    overview: {
      en: 'A focused one-day journey to the most accessible Navagraha temples near Kumbakonam, designed for travellers with limited time who still wish to receive the blessings of the nine celestial bodies.',
      ta: 'கும்பகோணம் அருகே உள்ள முக்கிய நவகிரக கோயில்களுக்கான ஒருநாள பயணம். குறுகிய நேரத்தில் ஒன்பது கிரகங்களின் ஆசியைப் பெற விரும்புவோருக்கு ஏற்றது.',
    },
    timeline: [
      {
        time: '5:30 AM',
        title: { en: 'Departure from Kumbakonam', ta: 'கும்பகோணத்திலிருந்து புறப்படல்' },
        description: {
          en: 'Begin the day before sunrise with a comfortable AC vehicle and a knowledgeable guide.',
          ta: 'சூரிய உதயத்திற்கு முன், வசதியான ஏசி வாகனத்தில் அனுபவமிக்க வழிகாட்டியுடன் பயணத்தைத் தொடங்குக.',
        },
      },
      {
        time: '7:00 AM',
        title: { en: 'Suryanarayanan Temple (Surya)', ta: 'சூரியநாராயணர் கோயில் (சூரியன்)' },
        description: {
          en: 'First darshan at the Sun temple, the only shrine dedicated exclusively to the Navagrahas as a group.',
          ta: 'சூரியனுக்கான கோயிலில் முதல் தரிசனம். நவகிரகங்களுக்கென தனியாக அமைந்துள்ள ஒரே கோயில்.',
        },
      },
      {
        time: '10:00 AM',
        title: { en: 'Agneeswarar Temple (Shukra)', ta: 'அக்னீஸ்வரர் கோயில் (சுக்ரன்)' },
        description: {
          en: 'Visit the temple of Venus at Kanjanur, associated with prosperity and harmony.',
          ta: 'செழுமையும் இசைவும் தரும் சுக்ரனுக்கான காஞ்சனூர் கோயிலுக்குச் செல்லுங்கள்.',
        },
      },
      {
        time: '12:30 PM',
        title: { en: 'Lunch & Rest', ta: 'மதிய உணவும் ஓய்வும்' },
        description: {
          en: 'A traditional South Indian vegetarian meal at a trusted local eatery.',
          ta: 'நம்பகமான உள்ளூர் உணவகத்தில் பாரம்பரிய தென்னிந்திய சைவ உணவு.',
        },
      },
      {
        time: '2:30 PM',
        title: { en: 'Kailasanathar Temple (Shani)', ta: 'கைலாசநாதர் கோயில் (சனி)' },
        description: {
          en: 'Seek blessings of Saturn at Thingalur, the planet of discipline and karma.',
          ta: 'ஒழுக்கமும் கர்மமும் தரும் சனிக்கான திங்களூர் கோயிலில் ஆசி பெறுங்கள்.',
        },
      },
      {
        time: '5:00 PM',
        title: { en: 'Return Journey', ta: 'திரும்பும் பயணம்' },
        description: {
          en: 'Return to Kumbakonam with prasadam and a peaceful heart.',
          ta: 'பிரசாதத்துடனும் அமைதியான மனதுடனும் கும்பகோணம் திரும்புக.',
        },
      },
    ],
    inclusions: [
      { en: 'AC vehicle with experienced driver', ta: 'அனுபவமிக்ஓட்டியுடன் ஏசி வாகனம்' },
      { en: 'Knowledgeable temple guide', ta: 'அறிவுள்ள கோயில் வழிகாட்டி' },
      { en: 'All temple darshan tickets', ta: 'அனைத்து கோயில் தரிசன டிக்கெட்கள்' },
      { en: 'Bottled water & refreshments', ta: 'குப்பிகளிட்ட நீரும் தண்ணீரும்' },
      { en: 'Traditional vegetarian lunch', ta: 'பாரம்பரிய சைவ மதிய உணவு' },
    ],
    exclusions: [
      { en: 'Personal expenses', ta: 'தனிப்பட்ட செலவுகள்' },
      { en: 'Accommodation', ta: 'தங்கும் வசதி' },
      { en: 'Special pooja charges', ta: 'சிறப்பு பூஜை கட்டணங்கள்' },
      { en: 'Travel insurance', ta: 'பயண காப்பீடு' },
    ],
    price: '₹3,400',
    priceUnit: { en: '/ Day', ta: '/ நாள்' },
    heroImage: '/gallery/suryangallery.jpg',
  },
  {
    id: '2-day',
    title: {
      en: '2-Day Navagraha Retreat',
      ta: '2-நாள் நவகிரக தியானம்',
    },
    duration: { en: '2 Days · 1 Night', ta: '2 நாட்கள் · 1 இரவு' },
    tagline: {
      en: 'Two unhurried days through all nine planetary temples.',
      ta: 'ஒன்பது கிரகக் கோயில்களுக்கும் இரண்டு அமைதியான நாட்கள்.',
    },
    overview: {
      en: 'A balanced two-day retreat covering all nine Navagraha temples with a restful overnight stay, allowing time for quiet reflection at each shrine and a deeper connection with the celestial energies.',
      ta: 'ஒன்பது நவகிரக கோயில்களையும் உள்ளடக்கிய இரண்டு நாள் தியானப் பயணம். ஓய்வான இரவு தங்கலுடன், ஒவ்வொரு கோயிலிலும் அமைதியாக தியானிக்கவும் கிரக சக்திகளுடன் ஆழமான இணைப்பைப் பெறவும் வாய்ப்பு.',
    },
    timeline: [
      {
        time: 'Day 1 · 6:00 AM',
        title: { en: 'Departure & Surya Temple', ta: 'புறப்படலும் சூரியன் கோயிலும்' },
        description: {
          en: 'Begin the pilgrimage with the Sun temple at Suryanar Kovil, the heart of Navagraha worship.',
          ta: 'நவகிரக வழிபாட்டின் மையமான சூரியன் கோயிலில் யாத்திரையைத் தொடங்குக.',
        },
      },
      {
        time: 'Day 1 · 9:30 AM',
        title: { en: 'Chandra & Angaraka Temples', ta: 'சந்திரனும் அங்காரகனும்' },
        description: {
          en: 'Visit the Moon temple at Thingalur and Mars temple at Vaitheeswaran Kovil, known for healing.',
          ta: 'திங்களூரில் சந்திரன் கோயிலும், வைத்தீஸ்வரன் கோயிலில் அங்காரகன் கோயிலும் — நோய் தீர்க்கும் தலங்கள்.',
        },
      },
      {
        time: 'Day 1 · 1:00 PM',
        title: { en: 'Lunch & Hotel Check-in', ta: 'மதிய உணவும் தங்கலும்' },
        description: {
          en: 'Check in to a heritage-style stay in Kumbakonam and enjoy a leisurely lunch.',
          ta: 'கும்பகோணத்தில் பாரம்பரிய தங்கலில் தங்கி, அமைதியாக மதிய உணவு.',
        },
      },
      {
        time: 'Day 1 · 4:00 PM',
        title: { en: 'Budha & Guru Temples', ta: 'புதனும் குருவும்' },
        description: {
          en: 'Seek the blessings of Mercury at Thiruvenkadu and Jupiter at Alangudi.',
          ta: 'திருவெண்காட்டில் புதனும், ஆலங்குடியில் குருவும் — அவர்களின் ஆசியைப் பெறுக.',
        },
      },
      {
        time: 'Day 2 · 7:00 AM',
        title: { en: 'Shukra & Shani Temples', ta: 'சுக்ரனும் சனியும்' },
        description: {
          en: 'Morning darshan at Kanjanur (Venus) and Thingalur (Saturn).',
          ta: 'காலை தரிசனம் — காஞ்சனூரில் சுக்ரன், திங்களூரில் சனி.',
        },
      },
      {
        time: 'Day 2 · 11:30 AM',
        title: { en: 'Rahu & Ketu Temples', ta: 'ராகுவும் கேதுவும்' },
        description: {
          en: 'Complete the pilgrimage at Thirunageswaram (Rahu) and Keezhaperumpallam (Ketu).',
          ta: 'திருநாகேஸ்வரத்தில் ராகு, கீழப்பெரும்பள்ளத்தில் கேது — யாத்திரை நிறைவு.',
        },
      },
      {
        time: 'Day 2 · 3:00 PM',
        title: { en: 'Return', ta: 'திரும்புதல்' },
        description: {
          en: 'Return to your starting point with all nine blessings received.',
          ta: 'ஒன்பது கிரகங்களின் ஆசியுடன் தொடக்க இடத்திற்குத் திரும்புக.',
        },
      },
    ],
    inclusions: [
      { en: 'AC vehicle for 2 days', ta: '2 நாட்களுக்கு ஏசி வாகனம்' },
      { en: '1 night heritage stay with breakfast', ta: '1 இரவு பாரம்பரிய தங்கல், காலை உணவுடன்' },
      { en: 'Temple guide throughout', ta: 'முழு பயணத்திற்கும் கோயில் வழிகாட்டி' },
      { en: 'All darshan arrangements', ta: 'அனைத்து தரிசன ஏற்பாடுகள்' },
      { en: 'Bottled water & refreshments', ta: 'குப்பிகளிட்ட நீரும் தண்ணீரும்' },
      { en: 'Two vegetarian lunches', ta: 'இரண்டு சைவ மதிய உணவுகள்' },
    ],
    exclusions: [
      { en: 'Dinner on Day 1', ta: 'முதல் நாள் இரவு உணவு' },
      { en: 'Special pooja / archana charges', ta: 'சிறப்பு பூஜை / அர்ச்சனை கட்டணம்' },
      { en: 'Personal expenses', ta: 'தனிப்பட்ட செலவுகள்' },
      { en: 'Travel insurance', ta: 'பயண காப்பீடு' },
    ],
    price: '₹6,800',
    priceUnit: { en: '/ 2 Days', ta: '/ 2 நாட்கள்' },
    heroImage: '/gallery/gurugallery.png',
  },
  {
    id: '3-day',
    title: {
      en: '3-Day Navagraha Sadhana',
      ta: '3-நாள் நவகிரக சாதனை',
    },
    duration: { en: '3 Days · 2 Nights', ta: '3 நாட்கள் · 2 இரவுகள்' },
    tagline: {
      en: 'An immersive three-day spiritual sadhana across all nine temples.',
      ta: 'ஒன்பது கோயில்களிலும் மூன்று நாள் ஆழமான ஆன்மீக சாதனை.',
    },
    overview: {
      en: 'The most complete Navagraha experience — three unhurried days with two restful nights, time for personal rituals, evening satsangs, and a deeper immersion into the mythology and astronomy of the nine celestial bodies.',
      ta: 'மிக முழுமையான நவகிரக அனுபவம் — மூன்று அமைதியான நாட்கள், இரண்டு ஓய்வான இரவுகள், தனிப்பட்ட சடங்குகள், மாலை சத்சங்கம், ஒன்பது கிரகங்களின் புராணமும் வானியலும் ஆழமாக அறிய வாய்ப்பு.',
    },
    timeline: [
      {
        time: 'Day 1 · 6:00 AM',
        title: { en: 'Arrival & Surya Temple', ta: 'வருகையும் சூரியன் கோயிலும்' },
        description: {
          en: 'Arrive in Kumbakonam, settle in, and begin with the Sun temple at Suryanar Kovil.',
          ta: 'கும்பகோணம் வந்து தங்கிய பின், சூரியன் கோயிலில் யாத்திரையைத் தொடங்குக.',
        },
      },
      {
        time: 'Day 1 · 10:00 AM',
        title: { en: 'Chandra Temple, Thingalur', ta: 'சந்திரன் கோயில், திங்களூர்' },
        description: {
          en: 'Visit the Moon temple for emotional peace and ancestral blessings.',
          ta: 'மன அமைதிக்கும் முன்னோர் ஆசிக்கும் சந்திரன் கோயிலுக்குச் செல்லுங்கள்.',
        },
      },
      {
        time: 'Day 1 · 4:00 PM',
        title: { en: 'Evening Satsang', ta: 'மாலை சத்சங்கம்' },
        description: {
          en: 'A guided session on the significance of the Navagrahas in Vedic tradition.',
          ta: 'வேத பாரம்பரியத்தில் நவகிரகங்களின் முக்கியத்துவம் குறித்த வழிகாட்டுதல்.',
        },
      },
      {
        time: 'Day 2 · 7:00 AM',
        title: { en: 'Angaraka & Budha Temples', ta: 'அங்காரகனும் புதனும்' },
        description: {
          en: 'Mars at Vaitheeswaran Kovil and Mercury at Thiruvenkadu.',
          ta: 'வைத்தீஸ்வரன் கோயிலில் அங்காரகன், திருவெண்காட்டில் புதன்.',
        },
      },
      {
        time: 'Day 2 · 1:30 PM',
        title: { en: 'Guru Temple, Alangudi', ta: 'குரு கோயில், ஆலங்குடி' },
        description: {
          en: 'The Jupiter temple, associated with wisdom and expansion.',
          ta: 'ஞானமும் விரிவும் தரும் குரு கோயில்.',
        },
      },
      {
        time: 'Day 2 · 5:00 PM',
        title: { en: 'Sunset at Cauvery Banks', ta: 'காவிரிக் கரையில் அந்திச் சூரியன்' },
        description: {
          en: 'A quiet riverside meditation and reflection.',
          ta: 'ஆற்றங்கரையில் அமைதியான தியானமும் சிந்தனையும்.',
        },
      },
      {
        time: 'Day 3 · 7:30 AM',
        title: { en: 'Shukra & Shani', ta: 'சுக்ரனும் சனியும்' },
        description: {
          en: 'Venus at Kanjanur and Saturn at Thingalur.',
          ta: 'காஞ்சனூரில் சுக்ரன், திங்களூரில் சனி.',
        },
      },
      {
        time: 'Day 3 · 12:00 PM',
        title: { en: 'Rahu & Ketu', ta: 'ராகுவும் கேதுவும்' },
        description: {
          en: 'The shadow planets at Thirunageswaram and Keezhaperumpallam.',
          ta: 'நிழல் கிரகங்கள் — திருநாகேஸ்வரத்தில் ராகு, கீழப்பெரும்பள்ளத்தில் கேது.',
        },
      },
      {
        time: 'Day 3 · 3:30 PM',
        title: { en: 'Closing Ceremony & Departure', ta: 'நிறைவு விழாவும் புறப்படலும்' },
        description: {
          en: 'A final blessing and departure with prasadam.',
          ta: 'இறுதி ஆசியுடன் பிரசாதம் பெற்றுப் புறப்படல்.',
        },
      },
    ],
    inclusions: [
      { en: 'AC vehicle for 3 days', ta: '3 நாட்களுக்கு ஏசி வாகனம்' },
      { en: '2 nights heritage stay with breakfast', ta: '2 இரவு பாரம்பரிய தங்கல், காலை உணவுடன்' },
      { en: 'Expert temple guide & satsang facilitator', ta: 'நிபுணர் வழிகாட்டியும் சத்சங்க நடத்துனரும்' },
      { en: 'All darshan & ritual arrangements', ta: 'அனைத்து தரிசனமும் சடங்கும்' },
      { en: 'Daily bottled water & refreshments', ta: 'தினமும் குப்பிகளிட்ட நீரும் தண்ணீரும்' },
      { en: 'Three vegetarian lunches', ta: 'மூன்று சைவ மதிய உணவுகள்' },
      { en: 'Evening satsang sessions', ta: 'மாலை சத்சங்க அமர்வுகள்' },
    ],
    exclusions: [
      { en: 'Dinners', ta: 'இரவு உணவுகள்' },
      { en: 'Special pooja / homam charges', ta: 'சிறப்பு பூஜை / ஓமம் கட்டணம்' },
      { en: 'Personal expenses', ta: 'தனிப்பட்ட செலவுகள்' },
      { en: 'Travel insurance', ta: 'பயண காப்பீடு' },
    ],
    price: '₹10,200',
    priceUnit: { en: '/ 3 Days', ta: '/ 3 நாட்கள்' },
    heroImage: '/gallery/rahugallery.jpg',
  },
  {
    id: 'group-tour',
    title: {
      en: 'Group Tour',
      ta: 'குழு சுற்றுப்பயணம்',
    },
    duration: { en: '1 Day', ta: '1 நாள்' },
    tagline: {
      en: 'A budget-friendly shared pilgrimage with fellow devotees.',
      ta: 'மற்ற பக்தர்களுடன் பகிர்ந்த பட்ஜெட் யாத்திரை.',
    },
    overview: {
      en: 'A budget-friendly shared pilgrimage ideal for individual devotees, couples and small families who wish to experience the Navagraha temples with fellow pilgrims.',
      ta: 'தனிப்பட்ட பக்தர்கள், தம்பதிகள் மற்றும் சிறு குடும்பங்களுக்கு ஏற்ற பட்ஜெட் நட்பு பகிர்வு யாத்திரை.',
    },
    timeline: [
      {
        time: '6:00 AM',
        title: { en: 'Departure from Kumbakonam', ta: 'கும்பகோணத்திலிருந்து புறப்படல்' },
        description: {
          en: 'Shared vehicle departs from Kumbakonam with fellow pilgrims.',
          ta: 'பக்தர்களுடன் பகிர்ந்த வாகனம் கும்பகோணத்திலிருந்து புறப்படுகிறது.',
        },
      },
      {
        time: '8:00 PM',
        title: { en: 'Return', ta: 'திரும்புதல்' },
        description: {
          en: 'Return to Kumbakonam after completing the Navagraha circuit.',
          ta: 'நவகிரஹ சுற்றை முடித்து கும்பகோணம் திரும்புக.',
        },
      },
    ],
    inclusions: [
      { en: 'Shared AC vehicle', ta: 'பகிர்ந்த ஏசி வாகனம்' },
      { en: 'Experienced driver', ta: 'அனுபவமிக்க ஓட்டுநர்' },
      { en: 'Complete Navagraha circuit', ta: 'முழு நவகிரஹ சுற்று' },
    ],
    exclusions: [
      { en: 'Personal expenses', ta: 'தனிப்பட்ட செலவுகள்' },
      { en: 'Food and beverages', ta: 'உணவு மற்றும் பானங்கள்' },
      { en: 'Temple entry fees', ta: 'கோயில் நுழைவு கட்டணம்' },
    ],
    price: '₹1,500',
    priceUnit: { en: '/ Person', ta: '/ நபர்' },
    heroImage: '/gallery/sanigallery.jpg',
  },
];

export type Deity = {
  id: string;
  name: Bi;
  planet: Bi;
  planetTamil: Bi;
  temple: Bi;
  deity: Bi;
  location: Bi;
  bestDay: Bi;
  bestTime: Bi;
  significance: Bi;
  benefits: Bi[];
  history: Bi;
  highlights: Bi[];
  nearbyLandmark: Bi;
  details: Bi;
  color: string;
};

export const navagraha: Deity[] = [
  {
    id: 'surya',
    name: { en: 'Surya', ta: 'சூரியன்' },
    planet: { en: 'Sun', ta: 'சூரியன்' },
    planetTamil: { en: 'சூரியன் (Suriyan)', ta: 'சூரியன் (Suriyan)' },
    temple: { en: 'Suryanarayanaswamy Temple', ta: 'சூரியநாராயணசுவாமி கோயில்' },
    deity: { en: 'Surya Bhagavan', ta: 'சூரிய பகவான்' },
    location: { en: 'Suryanar Kovil, near Kumbakonam', ta: 'சூரியனார் கோவில், கும்பகோணம் அருகே' },
    bestDay: { en: 'Sunday', ta: 'ஞாயிறு' },
    bestTime: { en: '6:00 AM – 10:00 AM', ta: 'காலை 6:00 – 10:00' },
    significance: {
      en: 'The Sun represents the soul, vitality, and leadership. Worshipping Surya is believed to restore confidence, health, and clarity of purpose.',
      ta: 'சூரியன் ஆன்மா, உயிரோட்டம், தலைமைத்துவத்தை குறிக்கிறார். சூரிய வழிபாடு நம்பிக்கை, ஆரோக்கியம், தெளிவான நோக்கத்தை தரும்.',
    },
    benefits: [
      { en: 'Career Growth', ta: 'தொழில் வளர்ச்சி' },
      { en: 'Confidence', ta: 'நம்பிக்கை' },
      { en: 'Leadership', ta: 'தலைமைத்துவம்' },
      { en: 'Government Opportunities', ta: 'அரசு வாய்ப்புகள்' },
      { en: 'Good Health', ta: 'நல்ல ஆரோக்கியம்' },
    ],
    history: {
      en: 'Built by King Kulothunga Chola I, this is the only temple in India dedicated exclusively to Surya as the presiding deity. The sanctum houses all nine Navagrahas facing Surya. The architecture is designed so the sun rays fall directly on the deity at specific times of the year.',
      ta: 'முதலாம் குலோத்துங்க சோழனால் கட்டப்பட்ட இது, சூரியனுக்கு மட்டும் தனியாக அர்ப்பணிக்கப்பட்ட இந்தியாவின் ஒரே கோயில். ஒன்பது நவகிரகங்களும் சூரியனை நோக்கி உள்ளன. ஆண்டின் குறிப்பிட்ட நேரங்களில் சூரிய ஒளி நேரடியாக மூலவர் மீது விழும் வகையில் கட்டப்பட்டுள்ளது.',
    },
    highlights: [
      { en: 'Built during Chola period', ta: 'சோழர் காலத்தில் கட்டப்பட்டது' },
      { en: 'Only temple dedicated to Surya', ta: 'சூரியனுக்கு அர்ப்பணிக்கப்பட்ட ஒரே கோயில்' },
      { en: 'Important Navagraha pilgrimage', ta: 'முக்கிய நவகிரக யாத்திரை தலம்' },
    ],
    nearbyLandmark: { en: 'Aduthurai, Tamil Nadu', ta: 'ஆடுதுறை, தமிழ்நாடு' },
    details: {
      en: 'Suryanar Kovil is the only temple in India dedicated exclusively to Surya (the Sun God) as the presiding deity. Built by King Kulothunga Chola I, the temple houses all nine Navagrahas facing Surya in the sanctum. Devotees believe that offering worship here on a Sunday during the solar transition brings relief from skin ailments, eye problems, and obstacles in career. The temple architecture is designed so that the rays of the sun fall directly on the deity during specific times of the year.',
      ta: 'சூரியனார் கோவில் இந்தியாவில் சூரிய பகவானுக்கு மட்டும் தனியாக அர்ப்பணிக்கப்பட்ட ஒரே கோயில். முதலாம் குலோத்துங்க சோழனால் கட்டப்பட்டது. ஒன்பது நவகிரகங்களும் சூரியனை நோக்கி உள்ளன. ஞாயிற்றுக்கிழமை வழிபட தோல் நோய், கண் பிரச்சனை, தொழில் தடைகள் நீங்கும் என்பது பக்தர்களின் நம்பிக்கை.',
    },
    color: '#C5A046',
  },
  {
    id: 'chandra',
    name: { en: 'Chandra', ta: 'சந்திரன்' },
    planet: { en: 'Moon', ta: 'சந்திரன்' },
    planetTamil: { en: 'சந்திரன் (Chandran)', ta: 'சந்திரன் (Chandran)' },
    temple: { en: 'Kailasanathar Temple', ta: 'கைலாசநாதர் கோயில்' },
    deity: { en: 'Lord Shiva as Kailasanathar', ta: 'கைலாசநாதராக இறைவன்' },
    location: { en: 'Thingalur, near Thiruvaiyaru', ta: 'திங்களூர், திருவையாறு அருகே' },
    bestDay: { en: 'Monday', ta: 'திங்கள்' },
    bestTime: { en: '5:00 PM – 7:00 PM', ta: 'மாலை 5:00 – 7:00' },
    significance: {
      en: 'The Moon governs the mind, emotions, and memory. Chandra worship is sought for mental peace, maternal wellbeing, and emotional balance.',
      ta: 'சந்திரன் மனம், உணர்வு, நினைவாற்றலை ஆள்கிறார். மன அமைதி, தாயின் நலன், உணர்ச்சி சமநிலைக்கு சந்திர வழிபாடு செய்யப்படுகிறது.',
    },
    benefits: [
      { en: 'Mental Peace', ta: 'மன அமைதி' },
      { en: 'Emotional Balance', ta: 'உணர்ச்சி சமநிலை' },
      { en: 'Maternal Wellbeing', ta: 'தாயின் நலன்' },
      { en: 'Memory Power', ta: 'நினைவாற்றல்' },
      { en: 'Good Sleep', ta: 'நல்ல தூக்கம்' },
    ],
    history: {
      en: 'Thingalur derives its name from "Thingal," the Tamil word for Moon. Legend says the Moon god sought refuge here after being cursed by Daksha, and was restored to his full glory by Lord Shiva. The temple is small and serene, offering a deeply personal atmosphere for worship.',
      ta: 'திங்களூர் என்ற பெயர் "திங்கள்" என்ற சந்திரனைக் குறிக்கும் தமிழ்ச் சொல்லிலிருந்து வந்தது. தட்சன் சாபத்தால் சந்திரன் இங்கு அடைக்கலம் புகுந்து, இறைவன் அருளால் மீண்டும் முழு ஒளி பெற்றார் என்பது வரலாறு.',
    },
    highlights: [
      { en: 'Moon god restored here by Shiva', ta: 'சந்திரனுக்கு இறைவன் அருளிய தலம்' },
      { en: 'Serene uncrowded atmosphere', ta: 'அமைதியான சூழல்' },
      { en: 'Relief from mental stress', ta: 'மன அழுத்தம் நீங்கும் தலம்' },
    ],
    nearbyLandmark: { en: 'Thiruvaiyaru, Tamil Nadu', ta: 'திருவையாறு, தமிழ்நாடு' },
    details: {
      en: 'Thingalur derives its name from "Thingal," the Tamil word for Moon. The presiding deity is Lord Shiva as Kailasanathar, with Ambal as Periyanayagi. Legend says the Moon god sought refuge here after being cursed by Daksha, and was restored to his full glory by Lord Shiva. Devotees pray here for relief from mental stress, mood disorders, and to strengthen maternal relationships. The temple is small and serene, offering a deeply personal atmosphere for worship.',
      ta: 'திங்களூர் என்ற பெயர் "திங்கள்" என்ற சந்திரனைக் குறிக்கும் தமிழ்ச் சொல்லிலிருந்து வந்தது. மூலவர் கைலாசநாதர், அம்பாள் பெரியநாயகி. தட்சன் சாபத்தால் சந்திரன் இங்கு அடைக்கலம் புகுந்து, இறைவன் அருளால் முழு ஒளி பெற்றார். மன அழுத்தம், மனச்சோர்வு நீங்கவும், தாயின் உறவு பலப்பவும் இங்கு வழிபடுகின்றனர்.',
    },
    color: '#D4D4D4',
  },
  {
    id: 'angaraka',
    name: { en: 'Angaraka', ta: 'அங்காரகன்' },
    planet: { en: 'Mars', ta: 'செவ்வாய்' },
    planetTamil: { en: 'செவ்வாய் (Sevvai)', ta: 'செவ்வாய் (Sevvai)' },
    temple: { en: 'Vaitheeswaran Temple', ta: 'வைத்தீஸ்வரன் கோயில்' },
    deity: { en: 'Lord Shiva as Vaitheeswaran', ta: 'வைத்தீஸ்வரனாக இறைவன்' },
    location: { en: 'Vaitheeswaran Kovil, near Sirkazhi', ta: 'வைத்தீஸ்வரன் கோவில், சீர்காழி அருகே' },
    bestDay: { en: 'Tuesday', ta: 'செவ்வாய்' },
    bestTime: { en: '8:00 AM – 12:00 PM', ta: 'காலை 8:00 – 12:00' },
    significance: {
      en: 'Mars represents courage, energy, and sibling bonds. Angaraka worship is sought for healing, strength, and victory over adversaries.',
      ta: 'அங்காரகன் தைரியம், ஆற்றல், சகோதர உறவை குறிக்கிறார். நோய் தீர்க்கவும், வலிமையும் வெற்றியும் பெறவும் அங்காரக வழிபாடு செய்யப்படுகிறது.',
    },
    benefits: [
      { en: 'Physical Healing', ta: 'உடல் நலம்' },
      { en: 'Courage & Strength', ta: 'தைரியமும் வலிமையும்' },
      { en: 'Victory Over Enemies', ta: 'எதிரிகள் மீது வெற்றி' },
      { en: 'Sibling Harmony', ta: 'சகோதர இசைவு' },
      { en: 'Relief from Skin Diseases', ta: 'தோல் நோய் நீக்கம்' },
    ],
    history: {
      en: 'Vaitheeswaran Kovil is one of the most revered temples in the Navagraha circuit, dedicated to Lord Shiva as the divine healer. The temple tank, Siddhamritham, is believed to have curative properties. The temple is also the birthplace of the Tamil medical science of Siddha.',
      ta: 'வைத்தீஸ்வரன் கோயில் நவகிரக தலங்களில் மிகவும் புகழ்பெற்றது. இறைவன் வைத்தீஸ்வரனாக — தெய்வீக வைத்தியராக வழிபடப்படுகிறார். சித்தாமிர்தம் என்ற தீர்த்தம் நோய் தீர்க்கும் சக்தி கொண்டது. சித்த மருத்துவம் தோன்றிய தலமும் இதுவே.',
    },
    highlights: [
      { en: 'Divine healer temple', ta: 'தெய்வீக வைத்தியர் கோயில்' },
      { en: 'Siddhamritham holy tank', ta: 'சித்தாமிர்த தீர்த்தம்' },
      { en: 'Birthplace of Siddha medicine', ta: 'சித்த மருத்துவத்தின் தொட்டில்' },
    ],
    nearbyLandmark: { en: 'Sirkazhi, Tamil Nadu', ta: 'சீர்காழி, தமிழ்நாடு' },
    details: {
      en: 'Vaitheeswaran Kovil is one of the most revered temples in the Navagraha circuit, dedicated to Lord Shiva as Vaitheeswaran — the divine healer. The temple tank, called Siddhamritham (nectar of perfection), is believed to have curative properties. Devotees bathe in or consume the water seeking relief from skin diseases, especially "Angaraka dosham." The temple is also the birthplace of the Tamil medical science of Siddha. A unique feature is the "Thiruchandu" — medicinal prasadam given to devotees.',
      ta: 'வைத்தீஸ்வரன் கோயில் நவகிரக தலங்களில் மிகவும் புகழ்பெற்றது. இறைவன் வைத்தீஸ்வரனாக — தெய்வீக வைத்தியராக வழிபடப்படுகிறார். சித்தாமிர்தம் என்ற தீர்த்தம் நோய் தீர்க்கும் சக்தி கொண்டது. தோல் நோய்களுக்கு, குறிப்பாக "அங்காரக தோஷம்" நீங்க இத்தீர்த்தத்தில் நீராடுகின்றனர். சித்த மருத்துவம் தோன்றிய தலமும் இதுவே.',
    },
    color: '#B0413E',
  },
  {
    id: 'budha',
    name: { en: 'Budha', ta: 'புதன்' },
    planet: { en: 'Mercury', ta: 'புதன்' },
    planetTamil: { en: 'புதன் (Budhan)', ta: 'புதன் (Budhan)' },
    temple: { en: 'Swetharanyeswarar Temple', ta: 'ஸ்ரீவேதாரண்யேஸ்வரர் கோயில்' },
    deity: { en: 'Lord Shiva as Swetharanyeswarar', ta: 'ஸ்ரீவேதாரண்யேஸ்வரராக இறைவன்' },
    location: { en: 'Thiruvenkadu, near Sirkazhi', ta: 'திருவெண்காடு, சீர்காழி அருகே' },
    bestDay: { en: 'Wednesday', ta: 'புதன்' },
    bestTime: { en: '7:00 AM – 11:00 AM', ta: 'காலை 7:00 – 11:00' },
    significance: {
      en: 'Mercury governs intellect, communication, and learning. Budha worship is sought for wisdom, eloquence, and success in education and business.',
      ta: 'புதன் அறிவு, தொடர்பாடல், கற்றலை ஆள்கிறார். ஞானம், பேச்சுத்திறம், கல்வி மற்றும் தொழிலில் வெற்றி பெற புதன் வழிபாடு செய்யப்படுகிறது.',
    },
    benefits: [
      { en: 'Wisdom & Intellect', ta: 'ஞானமும் அறிவும்' },
      { en: 'Educational Success', ta: 'கல்வியில் வெற்றி' },
      { en: 'Business Growth', ta: 'தொழில் வளர்ச்சி' },
      { en: 'Communication Skills', ta: 'தொடர்பாடல் திறன்' },
      { en: 'Relief from Nervous Issues', ta: 'நரம்பு தொடர்பு நோய்கள் நீக்கம்' },
    ],
    history: {
      en: 'Thiruvenkadu, meaning "white forest," is known for its three sacred tanks — Agni Theertham, Surya Theertham, and Chandra Theertham. Budha (Mercury) is said to have worshipped Lord Shiva here to gain wisdom. The temple is also famous for the "Aghora Murthy" shrine, one of the fiercest forms of Lord Shiva.',
      ta: 'திருவெண்காடு என்ற பெயர் "வெள்ளை காடு" என்ற பொருள் தரும். அக்னி தீர்த்தம், சூரிய தீர்த்தம், சந்திர தீர்த்தம் என மூன்று தீர்த்தங்கள் உள்ளன. புதன் இங்கு இறைவனை வழிபட்டு ஞானம் பெற்றார். அகோர மூர்த்தி சன்னதி பிரசித்தம்.',
    },
    highlights: [
      { en: 'Three sacred theerthams', ta: 'மூன்று புனித தீர்த்தங்கள்' },
      { en: 'Aghora Murthy shrine', ta: 'அகோர மூர்த்தி சன்னதி' },
      { en: 'Budha worshipped Shiva here', ta: 'புதன் இறைவனை வழிபட்ட தலம்' },
    ],
    nearbyLandmark: { en: 'Sirkazhi, Tamil Nadu', ta: 'சீர்காழி, தமிழ்நாடு' },
    details: {
      en: 'Thiruvenkadu, meaning "white forest," is one of the six sacred abodes of Lord Shiva associated with the natural elements. The temple is known for its three sacred tanks — Agni Theertham, Surya Theertham, and Chandra Theertham. Budha (Mercury) is said to have worshipped Lord Shiva here to gain wisdom. The temple is also famous for the "Aghora Murthy" shrine, one of the fiercest forms of Lord Shiva, and for the rare depiction of the Navagrahas with Budha at the center.',
      ta: 'திருவெண்காடு என்ற பெயர் "வெள்ளை காடு" என்ற பொருள் தரும். இறைவனின் ஆறு புனித தலங்களில் ஒன்று. அக்னி தீர்த்தம், சூரிய தீர்த்தம், சந்திர தீர்த்தம் என மூன்று தீர்த்தங்கள் உள்ளன. புதன் இங்கு இறைவனை வழிபட்டு ஞானம் பெற்றார். அகோர மூர்த்தி சன்னதி பிரசித்தம்.',
    },
    color: '#7A8B4F',
  },
  {
    id: 'guru',
    name: { en: 'Guru', ta: 'குரு' },
    planet: { en: 'Jupiter', ta: 'குரு' },
    planetTamil: { en: 'குரு (Guru)', ta: 'குரு (Guru)' },
    temple: { en: 'Apatsahayeswarar Temple', ta: 'ஆபத்சகாயேஸ்வரர் கோயில்' },
    deity: { en: 'Lord Shiva as Dakshinamurthy', ta: 'தட்சிணாமூர்த்தியாக இறைவன்' },
    location: { en: 'Alangudi, near Kumbakonam', ta: 'ஆலங்குடி, கும்பகோணம் அருகே' },
    bestDay: { en: 'Thursday', ta: 'வியாழன்' },
    bestTime: { en: '6:00 AM – 9:00 AM', ta: 'காலை 6:00 – 9:00' },
    significance: {
      en: 'Jupiter represents wisdom, prosperity, and dharma. Guru worship is sought for knowledge, family wellbeing, and spiritual growth.',
      ta: 'குரு ஞானம், செழுமை, தர்மத்தை குறிக்கிறார். அறிவு, குடும்ப நலன், ஆன்மீக வளர்ச்சிக்கு குரு வழிபாடு செய்யப்படுகிறது.',
    },
    benefits: [
      { en: 'Wisdom & Knowledge', ta: 'ஞானமும் அறிவும்' },
      { en: 'Family Wellbeing', ta: 'குடும்ப நலன்' },
      { en: 'Spiritual Growth', ta: 'ஆன்மீக வளர்ச்சி' },
      { en: 'Prosperity', ta: 'செழுமை' },
      { en: 'Relief from Guru Dosham', ta: 'குரு தோஷம் நீக்கம்' },
    ],
    history: {
      en: 'Alangudi is the most revered Guru sthalam, where Jupiter (Dakshinamurthy, the youthful form of Lord Shiva as the supreme teacher) is worshipped. The presiding deity is Apatsahayeswarar — "the Lord who helps in times of distress." Devotees come here seeking relief from Guru dosham, which can affect marriage, education, and progeny.',
      ta: 'ஆலங்குடி மிகவும் புகழ்பெற்ற குரு தலம். தட்சிணாமூர்த்தி — இறைவனின் இளமைத் திருவுருவாக குரு வழிபடப்படுகிறார். மூலவர் ஆபத்சகாயேஸ்வரர் — "துன்ப நேரத்தில் உதவும் இறைவன்." குரு தோஷம் நீங்க இங்கு வருகின்றனர்.',
    },
    highlights: [
      { en: 'Most revered Guru sthalam', ta: 'மிகப் புகழ்பெற்ற குரு தலம்' },
      { en: 'Dakshinamurthy shrine', ta: 'தட்சிணாமூர்த்தி சன்னதி' },
      { en: 'Relief from Guru dosham', ta: 'குரு தோஷம் நீக்கும் தலம்' },
    ],
    nearbyLandmark: { en: 'Tiruvarur, Tamil Nadu', ta: 'திருவாரூர், தமிழ்நாடு' },
    details: {
      en: 'Alangudi is the most revered Guru sthalam, where Jupiter (Dakshinamurthy, the youthful form of Lord Shiva as the supreme teacher) is worshipped. The presiding deity is Apatsahayeswarar — "the Lord who helps in times of distress." Devotees come here seeking relief from Guru dosham (afflictions of Jupiter in their astrological chart), which can affect marriage, education, and progeny. The temple is particularly crowded on Thursdays, when special abhishekams are performed. The Dakshinamurthy shrine here is considered among the most powerful in South India.',
      ta: 'ஆலங்குடி மிகவும் புகழ்பெற்ற குரு தலம். தட்சிணாமூர்த்தி — இறைவனின் இளமைத் திருவுருவாக குரு வழிபடப்படுகிறார். மூலவர் ஆபத்சகாயேஸ்வரர் — "துன்ப நேரத்தில் உதவும் இறைவன்." குரு தோஷம் நீங்க இங்கு வருகின்றனர். வியாழக்கிழமை சிறப்பு அபிஷேகம் நடக்கிறது. தட்சிணாமூர்த்தி சன்னதி தென்னிந்தியாவிலேயே சக்தி வாய்ந்தது.',
    },
    color: '#C9A227',
  },
  {
    id: 'sukra',
    name: { en: 'Sukra', ta: 'சுக்ரன்' },
    planet: { en: 'Venus', ta: 'சுக்ரன்' },
    planetTamil: { en: 'சுக்கிரன் (Sukran)', ta: 'சுக்கிரன் (Sukran)' },
    temple: { en: 'Agneeswarar Temple', ta: 'அக்னீஸ்வரர் கோயில்' },
    deity: { en: 'Lord Shiva as Agneeswarar', ta: 'அக்னீஸ்வரராக இறைவன்' },
    location: { en: 'Kanjanur, near Kumbakonam', ta: 'காஞ்சனூர், கும்பகோணம் அருகே' },
    bestDay: { en: 'Friday', ta: 'வெள்ளி' },
    bestTime: { en: '5:00 PM – 7:00 PM', ta: 'மாலை 5:00 – 7:00' },
    significance: {
      en: 'Venus governs love, beauty, art, and prosperity. Sukra worship is sought for marital harmony, artistic success, and material comfort.',
      ta: 'சுக்ரன் அன்பு, அழகு, கலை, செழுமையை ஆள்கிறார். திருமண இசைவு, கலை வெற்றி, பொருள் வசதிக்கு சுக்ர வழிபாடு செய்யப்படுகிறது.',
    },
    benefits: [
      { en: 'Marital Harmony', ta: 'திருமண இசைவு' },
      { en: 'Artistic Success', ta: 'கலைத்துறை வெற்றி' },
      { en: 'Material Comfort', ta: 'பொருள் வசதி' },
      { en: 'Good Relationships', ta: 'நல்ல உறவுகள்' },
      { en: 'Relief from Sukra Dosham', ta: 'சுக்ர தோஷம் நீக்கம்' },
    ],
    history: {
      en: 'Kanjanur is the Sukra sthalam, where the presiding deity is Lord Shiva as Agneeswarar — "the Lord of Fire." Venus is associated with the element of fire in Vedic astrology. Sukra is the guru of the Asuras and the celestial teacher of wealth and luxury. The temple is also associated with the legend of Lord Shiva blessing Sage Agasthiyar.',
      ta: 'காஞ்சனூர் சுக்ர தலம். மூலவர் அக்னீஸ்வரர் — "அக்னியின் இறைவன்." வேத ஜோதிடப்படி சுக்ரன் அக்னி தத்துவத்துடன் தொடர்புடையவர். சுக்ரன் அசுரர்களின் குரு, செழுமையின் தெய்வீக ஆசான். அகத்திய முனிவருக்கு இறைவன் அருளிய தலம்.',
    },
    highlights: [
      { en: 'Sukra sthalam', ta: 'சுக்ர தலம்' },
      { en: 'Lord of Fire deity', ta: 'அக்னி தத்துவ மூலவர்' },
      { en: 'Agasthiyar legend', ta: 'அகத்தியர் தொடர்புடைய தலம்' },
    ],
    nearbyLandmark: { en: 'Kumbakonam, Tamil Nadu', ta: 'கும்பகோணம், தமிழ்நாடு' },
    details: {
      en: 'Kanjanur is the Sukra sthalam, where the presiding deity is Lord Shiva as Agneeswarar — "the Lord of Fire." Venus is associated with the element of fire in Vedic astrology, and this temple beautifully connects the two. Sukra is the guru of the Asuras and the celestial teacher of wealth and luxury. Devotees pray here for a good spouse, harmony in marriage, and relief from Sukra dosham. The temple is also associated with the legend of Lord Shiva blessing Sage Agasthiyar, who installed the Shiva Lingam here.',
      ta: 'காஞ்சனூர் சுக்ர தலம். மூலவர் அக்னீஸ்வரர் — "அக்னியின் இறைவன்." வேத ஜோதிடப்படி சுக்ரன் அக்னி தத்துவத்துடன் தொடர்புடையவர். சுக்ரன் அசுரர்களின் குரு, செழுமையின் தெய்வீக ஆசான். நல்ல வாழ்க்கைத் துணை, திருமண இசைவு, சுக்ர தோஷம் நீங்க இங்கு வழிபடுகின்றனர்.',
    },
    color: '#E0C8A0',
  },
  {
    id: 'shani',
    name: { en: 'Shani', ta: 'சனி' },
    planet: { en: 'Saturn', ta: 'சனி' },
    planetTamil: { en: 'சனி (Sani)', ta: 'சனி (Sani)' },
    temple: { en: 'Saniswaran Temple', ta: 'சனீஸ்வரன் கோயில்' },
    deity: { en: 'Lord Shiva as Darbaranyeswarar', ta: 'தர்பாரண்யேஸ்வரராக இறைவன்' },
    location: { en: 'Thirunallar, Karaikal', ta: 'திருநள்ளாறு, காரைக்கால்' },
    bestDay: { en: 'Saturday', ta: 'சனி' },
    bestTime: { en: '4:30 PM – 6:00 PM', ta: 'மாலை 4:30 – 6:00' },
    significance: {
      en: 'Saturn represents discipline, karma, and justice. Shani worship is sought for relief from suffering, patience, and righteous living.',
      ta: 'சனி ஒழுக்கம், கர்மம், நீதியை குறிக்கிறார். துன்பம் நீங்க, பொறுமையும் நேர்மையான வாழ்வும் பெற சனி வழிபாடு செய்யப்படுகிறது.',
    },
    benefits: [
      { en: 'Relief from Sade Sati', ta: 'சாடே சாதி நீக்கம்' },
      { en: 'Patience & Discipline', ta: 'பொறுமையும் ஒழுக்கமும்' },
      { en: 'Career Stability', ta: 'தொழில் ஸ்திரத்தன்மை' },
      { en: 'Relief from Suffering', ta: 'துன்பம் நீக்கம்' },
      { en: 'Karmic Balance', ta: 'கர்ம சமநிலை' },
    ],
    history: {
      en: 'The Shani temple at Thingalur shares its location with the Chandra temple, making it a unique dual-planet shrine. Saturn is not a punisher but a teacher who delivers the results of one\'s karma. Devotees light sesame oil lamps here on Saturdays to seek Shani\'s grace and mitigate the effects of Sade Sati.',
      ta: 'திங்களூரில் சனி கோயில் சந்திரன் கோயிலுடன் இணைந்தே உள்ளது — இரட்டை கிரஹ தலம். சனி தண்டிப்பவர் அல்ல, கர்மத்தின் விளைவை கற்பிப்பவர். சனிக்கிழமை எள்ளெண்ணெய் விளக்கேற்றி சனி அருள் பெறுகின்றனர்.',
    },
    highlights: [
      { en: 'Dual-planet shrine (with Chandra)', ta: 'இரட்டை கிரஹ தலம் (சந்திரனுடன்)' },
      { en: 'Sesame oil lamp ritual', ta: 'எள்ளெண்ணெய் விளக்கு வழிபாடு' },
      { en: 'Relief from Sade Sati', ta: 'சாடே சாதி நீக்கும் தலம்' },
    ],
    nearbyLandmark: { en: 'Thiruvaiyaru, Tamil Nadu', ta: 'திருவையாறு, தமிழ்நாடு' },
    details: {
      en: 'The Shani (Saturn) temple at Thingalur shares its location with the Chandra temple, making it a unique dual-planet shrine. Saturn is the most feared and most misunderstood of the Navagrahas — he is not a punisher but a teacher who delivers the results of one\'s karma. Devotees light sesame oil lamps here on Saturdays to seek Shani\'s grace and mitigate the effects of Sade Sati (the seven-and-a-half-year Saturn transit). The temple is serene and uncrowded, ideal for contemplative worship.',
      ta: 'திங்களூரில் சனி கோயில் சந்திரன் கோயிலுடன் இணைந்தே உள்ளது — இரட்டை கிரஹ தலம். சனி மிகவும் பயப்படும் கிரகம் என்றாலும், அவர் தண்டிப்பவர் அல்ல — கர்மத்தின் விளைவை கற்பிப்பவர். சனிக்கிழமை எள்ளெண்ணெய் விளக்கேற்றி சாடே சாதியின் தீய விளைவுகளை நீக்குகின்றனர்.',
    },
    color: '#5C5C5C',
  },
  {
    id: 'rahu',
    name: { en: 'Rahu', ta: 'ராகு' },
    planet: { en: 'North Node', ta: 'ராகு' },
    planetTamil: { en: 'ராகு (Rahu)', ta: 'ராகு (Rahu)' },
    temple: { en: 'Naganathaswamy Temple', ta: 'நாகநாதசுவாமி கோயில்' },
    deity: { en: 'Lord Shiva as Naganathaswamy', ta: 'நாகநாதசுவாமியாக இறைவன்' },
    location: { en: 'Thirunageswaram, near Kumbakonam', ta: 'திருநாகேஸ்வரம், கும்பகோணம் அருகே' },
    bestDay: { en: 'Saturday (Rahu Kalam)', ta: 'சனி (ராகு காலம்)' },
    bestTime: { en: '4:30 PM – 6:00 PM', ta: 'மாலை 4:30 – 6:00' },
    significance: {
      en: 'Rahu represents ambition, worldly desires, and the unexpected. Rahu worship is sought for relief from sudden misfortune and for material advancement.',
      ta: 'ராகு லட்சியம், உலக விருப்பம், எதிர்பாராததை குறிக்கிறார். திடீர் துன்பம் நீங்கவும், முன்னேற்றம் பெறவும் ராகு வழிபாடு செய்யப்படுகிறது.',
    },
    benefits: [
      { en: 'Relief from Sudden Misfortune', ta: 'திடீர் துன்பம் நீக்கம்' },
      { en: 'Material Advancement', ta: 'பொருள் முன்னேற்றம்' },
      { en: 'Protection from Negativity', ta: 'தீய சக்திகளிடமிருந்து பாதுகாப்பு' },
      { en: 'Relief from Skin Diseases', ta: 'தோல் நோய் நீக்கம்' },
      { en: 'Removal of Obstacles', ta: 'தடைகள் நீக்கம்' },
    ],
    history: {
      en: 'Thirunageswaram is the Rahu sthalam, one of the most visited temples in the Navagraha circuit. The temple is famous for the Rahu Bhagavan shrine, where during the milk abhishekam, the milk poured on the deity turns pale blue before flowing into the tank — a phenomenon that draws thousands of devotees. The temple\'s name means "the abode of the serpent god."',
      ta: 'திருநாகேஸ்வரம் ராகு தலம், நவகிரஹ தலங்களில் மிக அதிகம் பேர் வரும் கோயில். ராகு பகவானுக்கு பால் அபிஷேகம் செய்யும் போது, பால் நீல நிறமாக மாறி தீர்த்தத்தில் கலக்கிறது — இது ஆயிரக்கணக்கான பக்தர்களை ஈர்க்கிறது. கோயிலின் பெயர் "நாக தேவனின் வாசஸ்தலம்" என்று பொருள்படும்.',
    },
    highlights: [
      { en: 'Milk turns blue during abhishekam', ta: 'அபிஷேகத்தில் பால் நீலமாகும் அதிசயம்' },
      { en: 'Most visited Navagraha temple', ta: 'அதிக பக்தர்கள் வரும் தலம்' },
      { en: 'Rahu Kalam special pooja', ta: 'ராகு கால சிறப்பு பூஜை' },
    ],
    nearbyLandmark: { en: 'Kumbakonam, Tamil Nadu', ta: 'கும்பகோணம், தமிழ்நாடு' },
    details: {
      en: 'Thirunageswaram is the Rahu sthalam, one of the most visited temples in the Navagraha circuit. The temple is famous for the Rahu Bhagavan shrine, where during the milk abhishekam (ritual bathing), the milk poured on the deity turns pale blue before flowing into the tank — a phenomenon that draws thousands of devotees. Rahu is the "shadow planet" that causes eclipses, and worship here is believed to remove obstacles from unexpected sources, cure skin diseases, and protect from negative energies. The temple\'s name itself means "the abode of the serpent god."',
      ta: 'திருநாகேஸ்வரம் ராகு தலம். ராகு பகவானுக்கு பால் அபிஷேகம் செய்யும் போது, பால் நீல நிறமாக மாறி தீர்த்தத்தில் கலக்கிறது. ராகு கிரகணத்தை ஏற்படுத்தும் "நிழல் கிரகம்". எதிர்பாராத தடைகள் நீங்க, தோல் நோய் தீர, தீய சக்திகளிடமிருந்து பாதுகாப்பு பெற இங்கு வழிபடுகின்றனர்.',
    },
    color: '#4A4A6E',
  },
  {
    id: 'ketu',
    name: { en: 'Ketu', ta: 'கேது' },
    planet: { en: 'South Node', ta: 'கேது' },
    planetTamil: { en: 'கேது (Kethu)', ta: 'கேது (Kethu)' },
    temple: { en: 'Naganathaswamy Temple', ta: 'நாகநாதசுவாமி கோயில்' },
    deity: { en: 'Lord Shiva as Naganathaswamy', ta: 'நாகநாதசுவாமியாக இறைவன்' },
    location: { en: 'Keezhaperumpallam, near Poompuhar', ta: 'கீழப்பெரும்பள்ளம், பூம்புகார் அருகே' },
    bestDay: { en: 'Tuesday', ta: 'செவ்வாய்' },
    bestTime: { en: '4:30 PM – 6:00 PM', ta: 'மாலை 4:30 – 6:00' },
    significance: {
      en: 'Ketu represents spirituality, liberation, and past-life karma. Ketu worship is sought for spiritual growth, liberation from the cycle of rebirth, and relief from mysterious afflictions.',
      ta: 'கேது ஆன்மீகம், முக்தி, முந்தைய பிறவி கர்மத்தை குறிக்கிறார். ஆன்மீக வளர்ச்சி, பிறவாசை நீக்கம், மர்மமான துன்பங்கள் நீங்க கேது வழிபாடு செய்யப்படுகிறது.',
    },
    benefits: [
      { en: 'Spiritual Growth', ta: 'ஆன்மீக வளர்ச்சி' },
      { en: 'Liberation (Moksha)', ta: 'முக்தி' },
      { en: 'Relief from Mystery Illness', ta: 'மர்ம நோய் நீக்கம்' },
      { en: 'Breaking Karmic Patterns', ta: 'கர்ம சுழற்சி முறிவு' },
      { en: 'Inner Peace', ta: 'உள் அமைதி' },
    ],
    history: {
      en: 'Keezhaperumpallam is the Ketu sthalam, located near the historic port town of Poompuhar where the river Cauvery meets the sea. The Ketu shrine depicts the deity with a serpent\'s head and a human body. Ketu is the "moksha karaka" — the planet that grants liberation. The temple is quiet and off the beaten path, offering a deeply meditative atmosphere.',
      ta: 'கீழப்பெரும்பள்ளம் கேது தலம், காவிரி கடலைச் சந்திக்கும் பூம்புகார் துறைமுகம் அருகே உள்ளது. கேது பாம்பு தலையுடன் மனித உடலுடன் சித்தரிக்கப்படுகிறார். கேது "மோட்ச காரகர்" — முக்தி தரும் கிரகம். தியானத்திற்கு ஏற்ற அமைதியான தலம்.',
    },
    highlights: [
      { en: 'Serpent-headed Ketu deity', ta: 'பாம்பு தலை கேது மூலவர்' },
      { en: 'Moksha karaka sthalam', ta: 'முக்தி காரக தலம்' },
      { en: 'Near ancient Poompuhar port', ta: 'பழமையான பூம்புகார் துறைமுகம் அருகே' },
    ],
    nearbyLandmark: { en: 'Poompuhar, Tamil Nadu', ta: 'பூம்புகார், தமிழ்நாடு' },
    details: {
      en: 'Keezhaperumpallam is the Ketu sthalam, located near the historic port town of Poompuhar where the river Cauvery meets the sea. The presiding deity is Lord Shiva as Naganathaswamy, and the Ketu shrine depicts the deity with a serpent\'s head and a human body. Ketu is the "moksha karaka" — the planet that grants liberation. Worship here is sought by those on the spiritual path, those facing unexplained difficulties, and those seeking to break free from repetitive karmic patterns. The temple is quiet and off the beaten path, offering a deeply meditative atmosphere.',
      ta: 'கீழப்பெரும்பள்ளம் கேது தலம், காவிரி கடலைச் சந்திக்கும் பூம்புகார் துறைமுகம் அருகே உள்ளது. மூலவர் நாகநாதசுவாமி. கேது பாம்பு தலையுடன் மனித உடலுடன் சித்தரிக்கப்படுகிறார். கேது "மோட்ச காரகர்" — முக்தி தரும் கிரகம். ஆன்மீக பயணிகள், மர்மமான துன்பங்கள் நீங்க விரும்புவோர், கர்ம சுழற்சியை உடைக்க விரும்புவோர் இங்கு வழிபடுகின்றனர்.',
    },
    color: '#6E5A4A',
  },
];
