import type { Lang, Bi } from './data';

export type VehiclePrice = {
  vehicle: string;
  capacity: string;
  pricePerDay: string;
  coverage: string;
  extraKm: string;
  extraHr: string;
  models: string;
};

export type ItineraryStop = {
  time: string;
  title: Bi;
  description?: Bi;
};

export type ItineraryDay = {
  day: Bi;
  stops: ItineraryStop[];
};

export type RoomPrice = {
  room: Bi;
  nonAc: string;
  ac: string;
};

export type PackageDetail = {
  slug: string;
  title: Bi;
  duration: Bi;
  tagline: Bi;
  overview: Bi;
  heroImage: string;
  startingPrice: string;
  priceUnit: Bi;
  highlights: Bi[];
  itinerary: ItineraryDay[];
  vehiclePricing: VehiclePrice[];
  pricingNote: Bi;
  hasAccommodation: boolean;
  accommodationTitle?: Bi;
  accommodationDescription?: Bi;
  roomPricing?: RoomPrice[];
  accommodationExtraPerson?: string;
};

const sedanVehicle: VehiclePrice = {
  vehicle: 'Sedan',
  capacity: '1–4 Persons',
  pricePerDay: '₹3,400 / Day',
  coverage: '12 Hrs / 200 Km',
  extraKm: '₹13 / Km',
  extraHr: '₹100 / Hr',
  models: 'Swift, Etios, Glanza',
};

const suvVehicle: VehiclePrice = {
  vehicle: 'SUV',
  capacity: '5–7 Persons',
  pricePerDay: '₹4,800 / Day',
  coverage: '12 Hrs / 200 Km',
  extraKm: '₹18 / Km',
  extraHr: '₹100 / Hr',
  models: 'Ertiga, Xylo, Innova',
};

const pricingNote: Bi = {
  en: 'Toll, parking and permit are charged separately. Extra kilometres: Sedan ₹13/km, SUV ₹18/km. Extra hours: ₹100/hr.',
  ta: 'டோல், பார்க்கிங் மற்றும் பெர்மிட் தனியாக வசூலிக்கப்படும். கூடுதல் கிமீ: செடான் ₹13/கிமீ, SUV ₹18/கிமீ. கூடுதல் மணிநேரம்: ₹100/மணி.',
};

const roomPricingCommon: RoomPrice[] = [
  { room: { en: 'Single Bed', ta: 'ஒற்றை படுக்கை' }, nonAc: '₹900', ac: '—' },
  { room: { en: 'Double Bed', ta: 'இரட்டை படுக்கை' }, nonAc: '₹1,300', ac: '₹1,600' },
  { room: { en: 'Deluxe Double', ta: 'டீலக்ஸ் இரட்டை' }, nonAc: '₹1,500', ac: '₹1,800' },
  { room: { en: 'Three Bed', ta: 'மூன்று படுக்கை' }, nonAc: '₹2,300', ac: '₹2,600' },
  { room: { en: 'Four Bed', ta: 'நான்கு படுக்கை' }, nonAc: '₹3,000', ac: '₹3,300' },
];

export const packageDetails: PackageDetail[] = [
  {
    slug: '1-day',
    title: { en: '1-Day Navagraha Pilgrimage', ta: '1-நாள் நவகிரக யாத்திரை' },
    duration: { en: '1 Day', ta: '1 நாள்' },
    tagline: {
      en: 'Visit all nine sacred Navagraha temples in a single day.',
      ta: 'ஒரே நாளில் ஒன்பது புனித நவகிரக கோயில்களையும் தரிசிக்க.',
    },
    overview: {
      en: 'Visit all nine sacred Navagraha temples in a thoughtfully planned one-day pilgrimage. This itinerary is designed for devotees who wish to complete the Navagraha circuit comfortably within a single day while experiencing peaceful darshan at every temple.',
      ta: 'ஒன்பது புனித நவகிரக கோயில்களையும் கவனமாக திட்டமிடப்பட்ட ஒருநாள யாத்திரையில் தரிசிக்க. ஒரே நாளில் நவகிரஹ சுற்றுப்பயணத்தை வசதியாக முடித்து, ஒவ்வொரு கோயிலிலும் அமைதியான தரிசனம் பெற விரும்பும் பக்தர்களுக்கான திட்டம்.',
    },
    heroImage: '/gallery/suryangallery.jpg',
    startingPrice: '₹3,400',
    priceUnit: { en: '/ Day', ta: '/ நாள்' },
    highlights: [
      { en: 'Visit all 9 Navagraha Temples', ta: 'அனைத்து 9 நவகிரஹ கோயில்களும்' },
      { en: 'Comfortable private vehicle', ta: 'வசதியான தனியார் வாகனம்' },
      { en: 'Experienced local driver', ta: 'அனுபவமிக்க ஓட்டுநர்' },
      { en: 'Flexible pickup from Kumbakonam', ta: 'கும்பகோணத்திலிருந்து நெகிழக்கூடிய பிக்அப்' },
      { en: 'Family friendly', ta: 'குடும்பத்திற்கு ஏற்றது' },
      { en: 'Senior citizen friendly', ta: 'மூத்த குடிமக்களுக்கு ஏற்றது' },
    ],
    itinerary: [
      {
        day: { en: 'Morning', ta: 'காலை' },
        stops: [
          { time: '', title: { en: 'Thingalur (Chandran)', ta: 'திங்களூர் (சந்திரன்)' } },
          { time: '', title: { en: 'Alangudi (Guru)', ta: 'ஆலங்குடி (குரு)' } },
          { time: '', title: { en: 'Thirunageswaram (Rahu)', ta: 'திருநாகேஸ்வரம் (ராகு)' } },
        ],
      },
      {
        day: { en: 'Midday', ta: 'மதிய வேளை' },
        stops: [
          { time: '', title: { en: 'Lunch Break', ta: 'மதிய உணவு இடைவேளை' } },
        ],
      },
      {
        day: { en: 'Afternoon', ta: 'பிற்பகல்' },
        stops: [
          { time: '', title: { en: 'Suriyanar Kovil (Surya)', ta: 'சூரியனார் கோவில் (சூரியன்)' } },
          { time: '', title: { en: 'Kanjanur (Sukran)', ta: 'காஞ்சனூர் (சுக்கிரன்)' } },
          { time: '', title: { en: 'Vaitheeswaran Koil (Sevvai)', ta: 'வைத்தீஸ்வரன் கோவில் (செவ்வாய்)' } },
          { time: '', title: { en: 'Thiruvenkadu (Budhan)', ta: 'திருவெண்காடு (புதன்)' } },
          { time: '', title: { en: 'Keezhaperumpallam (Ketu)', ta: 'கீழப்பெரும்பள்ளம் (கேது)' } },
          { time: '', title: { en: 'Thirunallar (Sani)', ta: 'திருநள்ளாறு (சனி)' } },
        ],
      },
      {
        day: { en: 'Evening Return', ta: 'மாலை திரும்புதல்' },
        stops: [],
      },
    ],
    vehiclePricing: [sedanVehicle, suvVehicle],
    pricingNote,
    hasAccommodation: true,
    accommodationTitle: { en: 'Stay Near Rahu Temple', ta: 'ராகு கோயில் அருகே தங்கும் வசதி' },
    accommodationDescription: {
      en: 'Comfortable rooms available near Thirunageswaram Rahu Temple for devotees wishing to stay overnight.',
      ta: 'திருநாகேஸ்வரம் ராகு கோயில் அருகே இரவு தங்க விரும்பும் பக்தர்களுக்கு வசதியான அறைகள்.',
    },
    roomPricing: roomPricingCommon,
    accommodationExtraPerson: '₹500',
  },
  {
    slug: '2-day',
    title: { en: '2-Day Navagraha Retreat', ta: '2-நாள் நவகிரக தியானம்' },
    duration: { en: '2 Days · 1 Night', ta: '2 நாட்கள் · 1 இரவு' },
    tagline: {
      en: 'A relaxed two-day pilgrimage covering all Navagraha temples and heritage temples.',
      ta: 'அனைத்து நவகிரஹ கோயில்கள் மற்றும் பாரம்பரிய கோயில்களை உள்ளடக்கிய இரண்டு நாள் யாத்திரை.',
    },
    overview: {
      en: "A relaxed two-day pilgrimage covering all Navagraha temples along with some of the region's most celebrated spiritual and heritage temples. Ideal for devotees who wish to travel at a comfortable pace.",
      ta: 'அனைத்து நவகிரஹ கோயில்களும் மற்றும் பகுதியின் பிரபலமான ஆன்மீக மற்றும் பாரம்பரிய கோயில்களும் உள்ளடக்கிய இரண்டு நாள் யாத்திரை. வசதியான வேகத்தில் பயணிக்க விரும்பும் பக்தர்களுக்கு ஏற்றது.',
    },
    heroImage: '/gallery/gurugallery.png',
    startingPrice: '₹6,800',
    priceUnit: { en: '/ 2 Days', ta: '/ 2 நாட்கள்' },
    highlights: [
      { en: '2 Days / 1 Night', ta: '2 நாட்கள் / 1 இரவு' },
      { en: 'All Navagraha Temples', ta: 'அனைத்து நவகிரஹ கோயில்கள்' },
      { en: 'Heritage Temples', ta: 'பாரம்பரிய கோயில்கள்' },
      { en: 'Overnight stay at Kumbakonam', ta: 'கும்பகோணத்தில் இரவு தங்கல்' },
      { en: 'Comfortable sightseeing', ta: 'வசதியான சுற்றுப்பயணம்' },
      { en: 'Flexible itinerary', ta: 'நெகிழக்கூடிய பயணதிட்டம்' },
    ],
    itinerary: [
      {
        day: { en: 'Day One', ta: 'முதல் நாள்' },
        stops: [
          { time: '', title: { en: 'Thingalur (Chandran)', ta: 'திங்களூர் (சந்திரன்)' } },
          { time: '', title: { en: 'Alangudi (Guru)', ta: 'ஆலங்குடி (குரு)' } },
          { time: '', title: { en: 'Thirunageswaram (Rahu)', ta: 'திருநாகேஸ்வரம் (ராகு)' } },
          { time: '', title: { en: 'Uppiliappan Temple', ta: 'உப்பிலியப்பன் கோயில்' } },
          { time: '', title: { en: 'Patteeswaram', ta: 'பட்டீஸ்வரம்' } },
          { time: '', title: { en: 'Airavatesvara Temple', ta: 'ஐராவதேஸ்வரர் கோயில்' } },
        ],
      },
      {
        day: { en: 'Night Stay — Kumbakonam', ta: 'இரவு தங்கல் — கும்பகோணம்' },
        stops: [],
      },
      {
        day: { en: 'Day Two', ta: 'இரண்டாம் நாள்' },
        stops: [
          { time: '', title: { en: 'Suriyanar Kovil (Surya)', ta: 'சூரியனார் கோவில் (சூரியன்)' } },
          { time: '', title: { en: 'Kanjanur (Sukran)', ta: 'காஞ்சனூர் (சுக்கிரன்)' } },
          { time: '', title: { en: 'Vaitheeswaran Koil (Sevvai)', ta: 'வைத்தீஸ்வரன் கோவில் (செவ்வாய்)' } },
          { time: '', title: { en: 'Thiruvenkadu (Budhan)', ta: 'திருவெண்காடு (புதன்)' } },
          { time: '', title: { en: 'Keezhaperumpallam (Ketu)', ta: 'கீழப்பெரும்பள்ளம் (கேது)' } },
          { time: '', title: { en: 'Thirunallar (Sani)', ta: 'திருநள்ளாறு (சனி)' } },
        ],
      },
    ],
    vehiclePricing: [
      { ...sedanVehicle, pricePerDay: '₹3,400 / Day × 2 = ₹6,800' },
      { ...suvVehicle, pricePerDay: '₹4,800 / Day × 2 = ₹9,600' },
    ],
    pricingNote,
    hasAccommodation: true,
    accommodationTitle: { en: 'Stay Near Rahu Temple', ta: 'ராகு கோயில் அருகே தங்கும் வசதி' },
    accommodationDescription: {
      en: 'Comfortable rooms available near Thirunageswaram Rahu Temple for devotees wishing to stay overnight.',
      ta: 'திருநாகேஸ்வரம் ராகு கோயில் அருகே இரவு தங்க விரும்பும் பக்தர்களுக்கு வசதியான அறைகள்.',
    },
    roomPricing: roomPricingCommon,
    accommodationExtraPerson: '₹500',
  },
  {
    slug: '3-day',
    title: { en: '3-Day Spiritual Journey', ta: '3-நாள் ஆன்மீக பயணம்' },
    duration: { en: '3 Days · 2 Nights', ta: '3 நாட்கள் · 2 இரவுகள்' },
    tagline: {
      en: 'An immersive three-day pilgrimage from Trichy covering Navagraha and iconic temples.',
      ta: 'திருச்சியிலிருந்து நவகிரஹ மற்றும் பிரபல கோயில்களை உள்ளடக்கிய மூன்று நாள் யாத்திரை.',
    },
    overview: {
      en: 'An immersive three-day pilgrimage beginning from Trichy, covering the complete Navagraha circuit together with iconic temples across Trichy, Thanjavur and Kumbakonam.',
      ta: 'திருச்சியிலிருந்து தொடங்கும் மூன்று நாள் யாத்திரை, திருச்சி, தஞ்சாவூர் மற்றும் கும்பகோணம் முழுவதும் உள்ள பிரபல கோயில்களுடன் முழு நவகிரஹ சுற்றுப்பயணத்தை உள்ளடக்கியது.',
    },
    heroImage: '/gallery/rahugallery.jpg',
    startingPrice: '₹10,200',
    priceUnit: { en: '/ 3 Days', ta: '/ 3 நாட்கள்' },
    highlights: [
      { en: '3 Days / 2 Nights', ta: '3 நாட்கள் / 2 இரவுகள்' },
      { en: 'Navagraha Temples', ta: 'நவகிரஹ கோயில்கள்' },
      { en: 'Brihadeeswarar Temple', ta: 'பிரகதீஸ்வரர் கோயில்' },
      { en: 'Airavatesvara Temple', ta: 'ஐராவதேஸ்வரர் கோயில்' },
      { en: 'Garbarakshambigai Temple', ta: 'கர்பரட்சாம்பிகை கோயில்' },
      { en: 'Kumbakonam Heritage Circuit', ta: 'கும்பகோணம் பாரம்பரிய சுற்று' },
    ],
    itinerary: [
      {
        day: { en: 'Day One', ta: 'முதல் நாள்' },
        stops: [
          { time: '', title: { en: 'Pickup — Trichy Railway Station', ta: 'பிக்அப் — திருச்சி ரயில் நிலையம்' } },
          { time: '', title: { en: 'Thingalur (Chandran)', ta: 'திங்களூர் (சந்திரன்)' } },
          { time: '', title: { en: 'Brihadeeswarar Temple', ta: 'பிரகதீஸ்வரர் கோயில்' } },
          { time: '', title: { en: 'Aiyarappar Temple', ta: 'ஐயாறப்பர் கோயில்' } },
          { time: '', title: { en: 'Punnai Mariamman Temple', ta: 'புன்னை மாரியம்மன் கோயில்' } },
          { time: '', title: { en: 'Garbarakshambigai Temple', ta: 'கர்பரட்சாம்பிகை கோயில்' } },
          { time: '', title: { en: 'Papanasam', ta: 'பாபநாசம்' } },
        ],
      },
      {
        day: { en: 'Night Stay — Kumbakonam', ta: 'இரவு தங்கல் — கும்பகோணம்' },
        stops: [],
      },
      {
        day: { en: 'Day Two', ta: 'இரண்டாம் நாள்' },
        stops: [
          { time: '', title: { en: 'Continue Navagraha pilgrimage', ta: 'நவகிரஹ யாத்திரை தொடர்க' } },
          { time: '', title: { en: 'Important temples around Kumbakonam', ta: 'கும்பகோணம் சுற்று கோயில்கள்' } },
        ],
      },
      {
        day: { en: 'Night Stay — Kumbakonam', ta: 'இரவு தங்கல் — கும்பகோணம்' },
        stops: [],
      },
      {
        day: { en: 'Day Three', ta: 'மூன்றாம் நாள்' },
        stops: [
          { time: '', title: { en: 'Complete remaining temples', ta: 'மீதமுள்ள கோயில்களை முடிக்க' } },
          { time: '', title: { en: 'Departure — Trichy / Kumbakonam', ta: 'புறப்படல் — திருச்சி / கும்பகோணம்' } },
        ],
      },
    ],
    vehiclePricing: [
      { ...sedanVehicle, pricePerDay: '₹3,400 / Day × 3 = ₹10,200' },
      { ...suvVehicle, pricePerDay: '₹4,800 / Day × 3 = ₹14,400' },
    ],
    pricingNote,
    hasAccommodation: true,
    accommodationTitle: { en: 'Stay Near Rahu Temple', ta: 'ராகு கோயில் அருகே தங்கும் வசதி' },
    accommodationDescription: {
      en: 'Comfortable rooms available near Thirunageswaram Rahu Temple for devotees wishing to stay overnight.',
      ta: 'திருநாகேஸ்வரம் ராகு கோயில் அருகே இரவு தங்க விரும்பும் பக்தர்களுக்கு வசதியான அறைகள்.',
    },
    roomPricing: roomPricingCommon,
    accommodationExtraPerson: '₹500',
  },
  {
    slug: 'group-tour',
    title: { en: 'Group Tour', ta: 'குழு சுற்றுப்பயணம்' },
    duration: { en: '1 Day', ta: '1 நாள்' },
    tagline: {
      en: 'A budget-friendly shared pilgrimage for individuals, couples and small families.',
      ta: 'தனிநபர்கள், தம்பதிகள் மற்றும் சிறு குடும்பங்களுக்கான பட்ஜெட் நட்பு பகிர்வு யாத்திரை.',
    },
    overview: {
      en: 'A budget-friendly shared pilgrimage ideal for individual devotees, couples and small families who wish to experience the Navagraha temples with fellow pilgrims.',
      ta: 'தனிப்பட்ட பக்தர்கள், தம்பதிகள் மற்றும் சிறு குடும்பங்களுக்கு ஏற்ற பட்ஜெட் நட்பு பகிர்வு யாத்திரை, மற்ற பக்தர்களுடன் நவகிரஹ கோயில்களை அனுபவிக்க.',
    },
    heroImage: '/gallery/sanigallery.jpg',
    startingPrice: '₹1,500',
    priceUnit: { en: '/ Person', ta: '/ நபர்' },
    highlights: [
      { en: 'Shared vehicle', ta: 'பகிரப்பட்ட வாகனம்' },
      { en: 'Complete Navagraha circuit', ta: 'முழு நவகிரஹ சுற்று' },
      { en: 'Experienced driver', ta: 'அனுபவமிக்க ஓட்டுநர்' },
      { en: 'Fixed itinerary', ta: 'நிரந்தர பயணதிட்டம்' },
      { en: 'Toll, Permit & Parking included', ta: 'டோல், பெர்மிட் & பார்க்கிங் உள்ளடங்கும்' },
      { en: 'Cost-effective travel', ta: 'செலவு குறைந்த பயணம்' },
    ],
    itinerary: [
      {
        day: { en: 'Morning', ta: 'காலை' },
        stops: [
          { time: '', title: { en: 'Departure from Kumbakonam', ta: 'கும்பகோணத்திலிருந்து புறப்படல்' } },
          { time: '', title: { en: 'Suriyanar Kovil (Surya)', ta: 'சூரியனார் கோவில் (சூரியன்)' } },
          { time: '', title: { en: 'Kanjanur (Sukran)', ta: 'காஞ்சனூர் (சுக்கிரன்)' } },
          { time: '', title: { en: 'Thingalur (Chandran)', ta: 'திங்களூர் (சந்திரன்)' } },
        ],
      },
      {
        day: { en: 'Midday', ta: 'மதிய வேளை' },
        stops: [
          { time: '', title: { en: 'Lunch Break', ta: 'மதிய உணவு இடைவேளை' } },
          { time: '', title: { en: 'Alangudi (Guru)', ta: 'ஆலங்குடி (குரு)' } },
          { time: '', title: { en: 'Thirunageswaram (Rahu)', ta: 'திருநாகேஸ்வரம் (ராகு)' } },
        ],
      },
      {
        day: { en: 'Afternoon', ta: 'பிற்பகல்' },
        stops: [
          { time: '', title: { en: 'Vaitheeswaran Koil (Sevvai)', ta: 'வைத்தீஸ்வரன் கோவில் (செவ்வாய்)' } },
          { time: '', title: { en: 'Thiruvenkadu (Budhan)', ta: 'திருவெண்காடு (புதன்)' } },
          { time: '', title: { en: 'Keezhaperumpallam (Ketu)', ta: 'கீழப்பெரும்பள்ளம் (கேது)' } },
          { time: '', title: { en: 'Thirunallar (Sani)', ta: 'திருநள்ளாறு (சனி)' } },
        ],
      },
      {
        day: { en: 'Evening Return', ta: 'மாலை திரும்புதல்' },
        stops: [],
      },
    ],
    vehiclePricing: [
      {
        vehicle: 'Shared Vehicle',
        capacity: 'Per Person',
        pricePerDay: '₹1,500 / Person',
        coverage: 'Full Navagraha Circuit',
        extraKm: '—',
        extraHr: '—',
        models: 'Shared AC Vehicle',
      },
    ],
    pricingNote: {
      en: 'Toll, permit and parking are included in the group tour price.',
      ta: 'டோல், பெர்மிட் மற்றும் பார்க்கிங் குழு சுற்றுப்பயண விலையில் சேர்க்கப்பட்டுள்ளது.',
    },
    hasAccommodation: false,
  },
];

export function getPackageBySlug(slug: string): PackageDetail | undefined {
  return packageDetails.find((p) => p.slug === slug);
}
