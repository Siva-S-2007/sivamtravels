import type { Lang } from './data';

export type TranslationKey =
  | 'nav.home'
  | 'nav.packages'
  | 'nav.navagraha'
  | 'nav.gallery'
  | 'nav.contact'
  | 'nav.bookNow'
  | 'hero.eyebrow'
  | 'hero.title1'
  | 'hero.title2'
  | 'hero.subtitle'
  | 'hero.description'
  | 'hero.explore'
  | 'hero.bookNow'
  | 'packages.eyebrow'
  | 'packages.title'
  | 'packages.subtitle'
  | 'packages.explore'
  | 'packages.price'
  | 'packages.perPerson'
  | 'packages.perTrip'
  | 'packages.perSeat'
  | 'packages.itinerary'
  | 'packages.inclusions'
  | 'packages.exclusions'
  | 'packages.allInclusive'
  | 'packages.bookJourney'
  | 'navagraha.eyebrow'
  | 'navagraha.title'
  | 'navagraha.subtitle'
  | 'navagraha.readMore'
  | 'navagraha.visitTemple'
  | 'navagraha.planet'
  | 'navagraha.temple'
  | 'navagraha.deity'
  | 'navagraha.location'
  | 'navagraha.bestDay'
  | 'navagraha.bestTime'
  | 'navagraha.significance'
  | 'navagraha.benefits'
  | 'navagraha.history'
  | 'navagraha.highlights'
  | 'navagraha.nearbyLandmark'
  | 'navagraha.viewOnMap'
  | 'navagraha.bookTour'
  | 'why.eyebrow'
  | 'why.title'
  | 'why.subtitle'
  | 'why.features'
  | 'upcoming.eyebrow'
  | 'upcoming.title'
  | 'upcoming.subtitle'
  | 'upcoming.comingSoon'
  | 'upcoming.inPreparation'
  | 'gallery.eyebrow'
  | 'gallery.title'
  | 'gallery.subtitle'
  | 'booking.eyebrow'
  | 'booking.title'
  | 'booking.subtitle'
  | 'booking.beginJourney'
  | 'booking.heading'
  | 'booking.subheading'
  | 'booking.name'
  | 'booking.namePlaceholder'
  | 'booking.phone'
  | 'booking.phonePlaceholder'
  | 'booking.travelDate'
  | 'booking.pickupLocation'
  | 'booking.pickupPlaceholder'
  | 'booking.travelers'
  | 'booking.travelersPlaceholder'
  | 'booking.specialRequests'
  | 'booking.specialPlaceholder'
  | 'booking.selectedPackage'
  | 'booking.send'
  | 'booking.sending'
  | 'booking.package'
  | 'contact.eyebrow'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.office'
  | 'contact.phone'
  | 'contact.email'
  | 'contact.hours'
  | 'contact.hoursDetail'
  | 'contact.hoursNote'
  | 'contact.whatsapp'
  | 'contact.mapPlaceholder'
  | 'footer.tagline'
  | 'footer.quickLinks'
  | 'footer.contact'
  | 'footer.pilgrimageHours'
  | 'footer.availableAllDays'
  | 'footer.copyright'
  | 'footer.backToTop'
  | 'common.from';

export const translations: Record<TranslationKey, Record<Lang, string>> = {
  'nav.home': { en: 'Home', ta: 'முகப்பு' },
  'nav.packages': { en: 'Packages', ta: 'திட்டங்கள்' },
  'nav.navagraha': { en: 'Navagraha', ta: 'நவகிரகம்' },
  'nav.gallery': { en: 'Gallery', ta: 'படத்தொகுப்பு' },
  'nav.contact': { en: 'Contact', ta: 'தொடர்பு' },
  'nav.bookNow': { en: 'Book Now', ta: 'இப்போது முன்பதிவி' },

  'hero.eyebrow': { en: 'BEGIN YOUR DIVINE JOURNEY', ta: 'உங்கள் தெய்வீக பயணத்தைத் தொடங்குங்கள்' },
  'hero.title1': { en: 'Begin Your', ta: 'உங்கள் தெய்வீக' },
  'hero.title2': { en: 'Divine Journey', ta: 'பயணத்தைத் தொடங்குங்கள்' },
  'hero.subtitle': {
    en: 'Visit the Sacred Navagraha Temples',
    ta: 'புனித நவகிரக கோயில்களைப் பார்வையிடுங்கள்',
  },
  'hero.description': {
    en: 'with comfort, care, and peace of mind.',
    ta: 'வசதியாக, அக்கறையுடனும் மனநிம்மதியுடனும்.',
  },
  'hero.explore': { en: 'Explore Packages', ta: 'திட்டங்களைப் பார்க்க' },
  'hero.bookNow': { en: 'Book Now', ta: 'இப்போது முன்பதிவி' },

  'packages.eyebrow': { en: 'Featured Packages', ta: 'சிறப்பு திட்டங்கள்' },
  'packages.title': { en: 'Pilgrimage Experiences', ta: 'யாத்திரை அனுபவங்கள்' },
  'packages.subtitle': {
    en: 'Three thoughtfully designed journeys to the Navagraha temples, each offering a different depth of spiritual immersion.',
    ta: 'நவகிரக கோயில்களுக்கான மூன்று கவனமாக வடிவமைக்கப்பட்ட பயணங்கள், ஒவ்வொன்றும் வெவ்வேறு ஆழமான ஆன்மீக அனுபவத்தை தருகின்றன.',
  },
  'packages.explore': { en: 'Explore', ta: 'விவரம் பார்க்க' },
  'packages.price': { en: 'From', ta: 'தொடக்க' },
  'packages.perPerson': { en: 'per person', ta: 'ஒருவருக்கு' },
  'packages.perTrip': { en: 'per trip', ta: 'ஒரு பயணத்திற்கு' },
  'packages.perSeat': { en: 'per seat', ta: 'ஒரு இருக்கைக்கு' },
  'packages.itinerary': { en: 'ITINERARY', ta: 'பயண அட்டவணை' },
  'packages.inclusions': { en: 'INCLUSIONS', ta: 'சேர்க்கப்பட்டவை' },
  'packages.exclusions': { en: 'EXCLUSIONS', ta: 'சேர்க்காதவை' },
  'packages.allInclusive': { en: 'All-inclusive pricing · No hidden costs', ta: 'அனைத்தும் உள்ளடக்கிய கட்டணம் · மறைக்கப்பட்ட செலவுகள் இல்லை' },
  'packages.bookJourney': { en: 'Book This Journey', ta: 'இந்த பயணத்தை முன்பதிவி' },

  'navagraha.eyebrow': { en: 'Interactive Experience', ta: 'இடைச்செயல் அனுபவம்' },
  'navagraha.title': { en: 'The Navagraha Mandala', ta: 'நவகிரக மண்டலம்' },
  'navagraha.subtitle': {
    en: 'Nine celestial deities, nine sacred temples. Explore the planetary guardians of Vedic astrology and the shrines where they are worshipped.',
    ta: 'ஒன்பது வான் தெய்வங்கள், ஒன்பது புனித கோயில்கள். வேத ஜோதிடத்தின் கிரக பாதுகாவலர்களையும் அவர்கள் வழிபடப்படும் தலங்களையும் அறியுங்கள்.',
  },
  'navagraha.readMore': { en: 'Read More', ta: 'மேலும் படிக்க' },
  'navagraha.visitTemple': { en: 'Visit This Temple', ta: 'இந்த கோயிலுக்குச் செல்ல' },
  'navagraha.planet': { en: 'Planet', ta: 'கிரகம்' },
  'navagraha.temple': { en: 'Temple', ta: 'கோயில்' },
  'navagraha.deity': { en: 'Presiding Deity', ta: 'மூலவர்' },
  'navagraha.location': { en: 'Location', ta: 'இடம்' },
  'navagraha.bestDay': { en: 'Best Day', ta: 'சிறந்த நாள்' },
  'navagraha.bestTime': { en: 'Best Time', ta: 'சிறந்த நேரம்' },
  'navagraha.significance': { en: 'Significance', ta: 'சிறப்பு' },
  'navagraha.benefits': { en: 'Spiritual Benefits', ta: 'ஆன்மீக நன்மைகள்' },
  'navagraha.history': { en: 'Temple History', ta: 'கோயில் வரலாறு' },
  'navagraha.highlights': { en: 'Highlights', ta: 'சிறப்பம்சங்கள்' },
  'navagraha.nearbyLandmark': { en: 'Nearby Landmark', ta: 'அருகிலுள்ள இடம்' },
  'navagraha.viewOnMap': { en: 'View on Map', ta: 'வரைபடத்தில் பார்க்க' },
  'navagraha.bookTour': { en: 'Book This Tour', ta: 'இந்த சுற்றுப்பயணத்தை முன்பதிவி' },

  'why.eyebrow': { en: 'Why Sivam Travels', ta: 'ஏன் சிவம் டிராவல்ஸ்' },
  'why.title': { en: 'The Difference is in the Devotion', ta: 'வித்தியாசம் பக்தியில் உள்ளது' },
  'why.subtitle': {
    en: 'We do not sell tours. We curate pilgrimages — with the care, patience, and reverence that sacred travel deserves.',
    ta: 'நாங்கள் சுற்றுலா விற்பதில்ல. புனித பயணம் தகுந்த கவனம், பொறுமை, பக்தியுடன் யாத்திரைகளை நாங்கள் தேர்வு செய்கிறோம்.',
  },
  'why.features': { en: '', ta: '' },

  'upcoming.eyebrow': { en: 'On the Horizon', ta: 'வரவிருக்கும்' },
  'upcoming.title': { en: 'Upcoming Spiritual Journeys', ta: 'வரவிருக்கும் ஆன்மீக பயணங்கள்' },
  'upcoming.subtitle': {
    en: 'New pilgrimages are being carefully crafted. These sacred circuits will be available soon — each one a journey of a lifetime.',
    ta: 'புதிய யாத்திரைகள் கவனமாக உருவாக்கப்பட்டு வருகின்றன. இந்த புனித பயணங்கள் விரைவில் கிடைக்கும் — ஒவ்வொன்றும் வாழ்நாள் பயணம்.',
  },
  'upcoming.comingSoon': { en: 'Coming Soon', ta: 'விரைவில்' },
  'upcoming.inPreparation': { en: 'In preparation', ta: 'தயாரிப்பில்' },

  'gallery.eyebrow': { en: 'Gallery', ta: 'படத்தொகுப்பு' },
  'gallery.title': { en: 'Moments of the Sacred', ta: 'புனிதத்தின் தருணங்கள்' },
  'gallery.subtitle': {
    en: 'A glimpse of the temples, rituals, and quiet devotion that await on a Sivam Travels pilgrimage.',
    ta: 'சிவம் டிராவல்ஸ் யாத்திரையில் காத்திருக்கும் கோயில்கள், சடங்குகள், அமைதியான பக்தியின் ஒரு காட்சி.',
  },

  'booking.eyebrow': { en: 'BOOKING', ta: 'முன்பதிவு' },
  'booking.title': { en: 'A few words, and we take care of the rest.', ta: 'சொல்லுங்கள், மீதியை நாங்கள் கவனிக்கிறோம்.' },
  'booking.subtitle': {
    en: 'Send us your details and our team will reach out on WhatsApp to craft your pilgrimage.',
    ta: 'உங்கள் விவரங்களை அனுப்புங்கள், எங்கள் அணி வாட்ஸ்அப்பில் உங்கள் யாத்திரையை திட்டமிட தொடர்பு கொள்ளும்.',
  },
  'booking.beginJourney': { en: 'BEGIN YOUR JOURNEY', ta: 'உங்கள் பயணத்தைத் தொடங்குங்கள்' },
  'booking.heading': { en: 'WhatsApp Enquiry', ta: 'வாட்ஸ்அப் விசாரணை' },
  'booking.subheading': { en: 'We typically respond within an hour.', ta: 'பொதுவாக ஒரு மணி நேரத்திற்குள் பதிலளிப்போம்.' },
  'booking.name': { en: 'Full Name', ta: 'முழுப் பெயர்' },
  'booking.namePlaceholder': { en: 'Your name', ta: 'உங்கள் பெயர்' },
  'booking.phone': { en: 'Phone', ta: 'தொலைபேசி' },
  'booking.phonePlaceholder': { en: '+91 ...', ta: '+91 ...' },
  'booking.travelDate': { en: 'Travel Date', ta: 'பயண தேதி' },
  'booking.pickupLocation': { en: 'Pickup Location', ta: 'பிக்அப் இடம்' },
  'booking.pickupPlaceholder': { en: 'e.g. Kumbakonam Bus Stand', ta: 'உதாரணம்: கும்பகோணம் பேருந்து நிலையம்' },
  'booking.travelers': { en: 'Number of Travelers', ta: 'பயணிகளின் எண்ணிக்கை' },
  'booking.travelersPlaceholder': { en: 'e.g. 4', ta: 'உதாரணம்: 4' },
  'booking.specialRequests': { en: 'Special Requests', ta: 'சிறப்பு கோரிக்கைகள்' },
  'booking.specialPlaceholder': { en: 'Any specific requirements...', ta: 'ஏதேனும் குறிப்பிட்ட தேவைகள்...' },
  'booking.selectedPackage': { en: 'Selected Package', ta: 'தேர்ந்தெடுத்த திட்டம்' },
  'booking.send': { en: 'Send via WhatsApp', ta: 'வாட்ஸ்அப் மூலம் அனுப்பு' },
  'booking.sending': { en: 'Opening WhatsApp...', ta: 'வாட்ஸ்அப் திறக்கிறது...' },
  'booking.package': { en: 'Package', ta: 'திட்டம்' },

  'contact.eyebrow': { en: 'Contact', ta: 'தொடர்பு' },
  'contact.title': { en: 'Reach the Sivam Travels Family', ta: 'சிவம் டிராவல்ஸ் குடும்பத்தை அணுகுங்கள்' },
  'contact.subtitle': {
    en: 'We are here to answer your questions and help plan your sacred journey. Reach out any time.',
    ta: 'உங்கள் கேள்விகளுக்கு பதிலளிக்கவும், உங்கள் புனித பயணத்தை திட்டமிடவும் நாங்கள் இங்கே உள்ளோம். எப்போது வேண்டுமானாலும் தொடர்பு கொள்ளுங்கள்.',
  },
  'contact.office': { en: 'Our Office', ta: 'எங்கள் அலுவலகம்' },
  'contact.phone': { en: 'Phone', ta: 'தொலைபேசி' },
  'contact.email': { en: 'Email', ta: 'மின்னஞ்சல்' },
  'contact.hours': { en: 'Hours', ta: 'நேரம்' },
  'contact.hoursDetail': { en: 'Monday – Sunday · 6:00 AM – 9:00 PM', ta: 'திங்கள் – ஞாயிறு · காலை 6:00 – இரவு 9:00' },
  'contact.hoursNote': { en: 'We are available every day of the week.', ta: 'வாரத்தின் அனைத்து நாட்களிலும் நாங்கள் கிடைக்கிறோம்.' },
  'contact.whatsapp': { en: 'Chat on WhatsApp', ta: 'வாட்ஸ்அப்பில் அரட்டை' },
  'contact.mapPlaceholder': { en: 'Map placeholder · Google Maps integration coming soon', ta: 'வரைபட இடம் · கூகுள் வரைபடம் விரைவில்' },

  'footer.tagline': {
    en: 'Sacred journeys to the Navagraha temples and beyond — crafted with devotion, comfort, and grace.',
    ta: 'நவகிரக கோயில்களுக்கான புனித யாத்திரைகள் — பக்தி, வசதி, கருணையுடன் வடிவமைக்கப்பட்டது.',
  },
  'footer.quickLinks': { en: 'QUICK LINKS', ta: 'விரைவு இணைப்புகள்' },
  'footer.contact': { en: 'CONTACT', ta: 'தொடர்பு' },
  'footer.pilgrimageHours': { en: 'PILGRIMAGE HOURS', ta: 'யாத்திரை நேரம்' },
  'footer.availableAllDays': { en: 'Available all days of the week, including festival days.', ta: 'விழா நாட்கள் உட்பட வாரத்தின் அனைத்து நாட்களிலும் கிடைக்கிறோம்.' },
  'footer.copyright': { en: 'Crafted with devotion.', ta: 'பக்தியுடன் உருவாக்கப்பட்டது.' },
  'footer.backToTop': { en: 'Back to top', ta: 'மேலே செல்ல' },

  'common.from': { en: 'From', ta: 'தொடக்க' },
};

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key]?.[lang] ?? key;
}