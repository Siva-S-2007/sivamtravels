'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { useApp } from '@/lib/app-context';
import type { Lang } from '@/lib/data';

type GuideSlug = 'order-to-visit' | 'doshas-remedies' | 'history-beliefs';

type Bi = { en: string; ta: string };

type GuidePage = {
  title: Bi;
  description: Bi;
  heroImage: string;
  eyebrow: Bi;
};

type DoshaDetail = {
  temple: Bi;
  significance: Bi;
  doshas: Bi[];
  remedy: Bi;
};

type HistorySection = {
  heading: Bi;
  paragraphs: Bi[];
  items?: { title: Bi; text: Bi }[];
};

const guidePages: Record<GuideSlug, GuidePage> = {
  'order-to-visit': {
    title: {
      en: 'Navagraha Temple Order to Visit from Kumbakonam',
      ta: 'கும்பகோணத்திலிருந்து நவகிரக கோயில்கள் தரிசன வரிசை',
    },
    description: {
      en: 'Plan your Navagraha Temple Tour with the correct temple order, timings, travel distances and practical pilgrimage tips.',
      ta: 'சரியான கோயில் வரிசை, நேர அட்டவணை, பயண தூரங்கள் மற்றும் பயனுள்ள யாத்திரை குறிப்புகளுடன் உங்கள் நவகிரக கோயில் சுற்றுலாவைத் திட்டமிடுங்கள்.',
    },
    heroImage: '/gallery/image.png',
    eyebrow: { en: 'Temple Guide', ta: 'கோயில் வழிகாட்டி' },
  },
  'doshas-remedies': {
    title: {
      en: 'Navagraha Doshas and Remedies',
      ta: 'நவகிரக தோஷங்களும் பரிகாரங்களும்',
    },
    description: {
      en: 'Understand the astrological significance of each Navagraha, common planetary doshas and traditional remedies followed by devotees.',
      ta: 'ஒவ்வொரு நவகிரகத்தின் ஜோதிட முக்கியத்துவம், பொதுவான கிரக தோஷங்கள் மற்றும் பக்தர்கள் பின்பற்றும் பாரம்பரிய பரிகாரங்களை அறிந்துகொள்ளுங்கள்.',
    },
    heroImage: '/navagrahadoshasandpariharam.png',
    eyebrow: { en: 'Spiritual Guide', ta: 'ஆன்மீக வழிகாட்டி' },
  },
  'history-beliefs': {
    title: {
      en: 'Navagraha Temple History and Beliefs',
      ta: 'நவகிரக கோயில்களின் வரலாறும் நம்பிக்கைகளும்',
    },
    description: {
      en: 'Explore the rich history, sacred legends, architecture and spiritual significance of the Navagraha Temples in Tamil Nadu.',
      ta: 'தமிழ்நாட்டின் நவகிரக கோயில்களின் பணக்கார வரலாறு, புனித கதைகள், கட்டிடக்கலை மற்றும் ஆன்மீக முக்கியத்துவத்தை ஆராயுங்கள்.',
    },
    heroImage: '/gallery/suryangallery.jpg',
    eyebrow: { en: 'History', ta: 'வரலாறு' },
  },
};

const doshaIntroParagraphs: Bi[] = [
  {
    en: "According to Vedic Astrology (Jyotisha), the Navagrahas (nine celestial planets) continuously influence different aspects of human life, including health, career, relationships, wealth, education, and spiritual growth. When a planet is unfavorably placed in one's birth chart, it may create Navagraha Doshas, leading to various life challenges.",
    ta: 'வேத ஜோதிடத்தின்படி (ஜ்யோதிஷா), நவகிரகங்கள் (ஒன்பது வான் கிரகங்கள்) தொடர்ந்து மனித வாழ்வின் பல அம்சங்களில் — ஆரோக்கியம், தொழில், உறவுகள், செழுமை, கல்வி மற்றும் ஆன்மீக வளர்ச்சி — தாக்கத்தை ஏற்படுத்துகின்றன. ஒரு கிரகம் ஜாதகத்தில் பலவீனமாக அமைந்தால், நவகிரக தோஷங்கள் உண்டாகி பல்வேறு வாழ்க்கை சவால்களை ஏற்படுத்தலாம்.',
  },
  {
    en: 'This guide explains the astrological significance of each Navagraha, the common planetary doshas, and the traditional Navagraha remedies (Pariharams) performed at each temple.',
    ta: 'இந்த வழிகாட்டி ஒவ்வொரு நவகிரகத்தின் ஜோதிட முக்கியத்துவம், பொதுவான கிரக தோஷங்கள், மற்றும் ஒவ்வொரு கோயிலிலும் செய்யப்படும் பாரம்பரிய நவகிரக பரிகாரங்களை (பரிஹாரங்கள்) விளக்குகிறது.',
  },
];

const doshaDetails: Record<string, DoshaDetail> = {
  Surya: {
    temple: { en: 'Suriyanar Kovil (Surya)', ta: 'சூரியநார் கோயில் (சூரியன்)' },
    significance: {
      en: 'The Sun (Surya) represents the soul, leadership, father, authority, government careers, confidence, and physical vitality. A weak Sun may result in low self-confidence, health concerns, and career obstacles.',
      ta: 'சூரியன் ஆன்மா, தலைமைத்துவம், தந்தை, அதிகாரம், அரசு தொழில், நம்பிக்கை மற்றும் உடல் உறுதியை குறிக்கிறார். பலவீனமான சூரியன் குறைந்த சுய நம்பிக்கை, உடல்நல பிரச்சனைகள் மற்றும் தொழில் தடைகளை ஏற்படுத்தலாம்.',
    },
    doshas: [
      { en: 'Low confidence', ta: 'குறைந்த நம்பிக்கை' },
      { en: 'Career obstacles', ta: 'தொழில் தடைகள்' },
      { en: 'Government-related issues', ta: 'அரசு சார்ந்த பிரச்சனைகள்' },
      { en: 'Health problems (Heart & Eyes)', ta: 'உடல்நல பிரச்சனைகள் (இதயம் & கண்)' },
    ],
    remedy: {
      en: 'Offer red lotus flowers, wheat, and jaggery to Lord Surya. Lighting a pure ghee lamp on Sundays is believed to improve confidence, leadership qualities, and career growth.',
      ta: 'சூரிய பகவானுக்கு சிவந்த தாமரை, கோதுமை மற்றும் வெல்லம் படைக்கவும். ஞாயிற்றுக்கிழமை நெய் தீபம் ஏற்றுவது நம்பிக்கை, தலைமைத்துவம் மற்றும் தொழில் வளர்ச்சியை மேம்படுத்தும் என்பது நம்பிக்கை.',
    },
  },
  Chandra: {
    temple: { en: 'Thingalur (Chandra)', ta: 'திங்களூர் (சந்திரன்)' },
    significance: {
      en: 'The Moon (Chandra) governs emotions, mental peace, mother, memory, and emotional stability.',
      ta: 'சந்திரன் உணர்வுகள், மன அமைதி, தாய், நினைவாற்றல் மற்றும் உணர்ச்சி சமநிலையை ஆள்கிறார்.',
    },
    doshas: [
      { en: 'Anxiety', ta: 'கவலை' },
      { en: 'Depression', ta: 'மனச்சோர்வு' },
      { en: 'Emotional instability', ta: 'உணர்ச்சி கோளாறு' },
      { en: 'Restless mind', ta: 'அமைதியற்ற மனம்' },
    ],
    remedy: {
      en: 'Offer white rice, white clothing, and white oleander flowers on Mondays to seek mental peace and emotional balance.',
      ta: 'திங்கட்கிழமை வெள்ளை அரிசி, வெள்ளை ஆடை மற்றும் வெள்ளை அலரி மலர்களை படைத்து மன அமைதியும் உணர்ச்சி சமநிலையும் வேண்டுங்கள்.',
    },
  },
  Angaraka: {
    temple: { en: 'Vaitheeswaran Kovil (Angaraka / Mars)', ta: 'வைத்தீஸ்வரன் கோயில் (அங்காரகன் / செவ்வாய்)' },
    significance: {
      en: 'Mars represents courage, property, strength, blood circulation, and determination.',
      ta: 'செவ்வாய் தைரியம், சொத்து, வலிமை, ரத்த ஓட்டம் மற்றும் உறுதிப்பாட்டை குறிக்கிறார்.',
    },
    doshas: [
      { en: 'Manglik Dosha (Kuja Dosha)', ta: 'மாங்கிலிக் தோஷம் (குஜ தோஷம்)' },
      { en: 'Marriage delays', ta: 'திருமண தாமதம்' },
      { en: 'Anger', ta: 'கோபம்' },
      { en: 'Debt', ta: 'கடன்' },
      { en: 'Accidents', ta: 'விபத்துகள்' },
    ],
    remedy: {
      en: 'Offer red cloth and Toor Dal to Lord Angaraka. Devotees also receive the famous Thirusaandu Urundai, traditionally believed to support healing and good health.',
      ta: 'அங்காரகனுக்கு சிவந்த ஆடை மற்றும் துவரம் பருப்பு படைக்கவும். பக்தர்கள் புகழ்பெற்ற திருச்சந்து உருண்டையையும் பெறுவார்கள், இது குணமளிப்பதாகவும் ஆரோக்கியத்தைத் தருவதாகவும் நம்பப்படுகிறது.',
    },
  },
  Budha: {
    temple: { en: 'Thiruvenkadu (Budha)', ta: 'திருவெண்காடு (புதன்)' },
    significance: {
      en: 'Mercury governs intelligence, education, communication, speech, memory, and business.',
      ta: 'புதன் அறிவு, கல்வி, தொடர்பாடல், பேச்சு, நினைவாற்றல் மற்றும் தொழிலை ஆள்கிறார்.',
    },
    doshas: [
      { en: 'Poor concentration', ta: 'குறைந்த கவனம்' },
      { en: 'Speech difficulties', ta: 'பேச்சு தடைகள்' },
      { en: 'Business losses', ta: 'தொழில் இழப்பு' },
      { en: 'Learning difficulties', ta: 'கற்றல் சிரமங்கள்' },
    ],
    remedy: {
      en: 'Offer green gram (Moong Dal) and green clothing on Wednesdays for wisdom, academic success, and business growth.',
      ta: 'புதக்கிழமை பச்சைப் பயறு மற்றும் பச்சை ஆடை படைத்து ஞானம், கல்வி வெற்றி மற்றும் தொழில் வளர்ச்சி பெறுங்கள்.',
    },
  },
  Guru: {
    temple: { en: 'Alangudi (Guru)', ta: 'ஆலங்குடி (குரு)' },
    significance: {
      en: 'Jupiter represents wisdom, wealth, higher education, marriage, children, and spiritual knowledge.',
      ta: 'வியாழன் ஞானம், செழுமை, உயர் கல்வி, திருமணம், குழந்தைகள் மற்றும் ஆன்மீக அறிவை குறிக்கிறார்.',
    },
    doshas: [
      { en: 'Financial obstacles', ta: 'நிதி தடைகள்' },
      { en: 'Delayed marriage', ta: 'திருமண தாமதம்' },
      { en: 'Educational setbacks', ta: 'கல்வி தடைகள்' },
      { en: 'Child-related concerns', ta: 'குழந்தை சம்பந்தமான கவலைகள்' },
    ],
    remedy: {
      en: 'Offer yellow cloth, Bengal gram (Chana Dal), and yellow jasmine flowers to Lord Dakshinamurthy on Thursdays.',
      ta: 'வியாழக்கிழமை தட்சிணாமூர்த்திக்கு மஞ்சள் ஆடை, கடலை பருப்பு மற்றும் மஞ்சள் மல்லிகை மலர்கள் படைக்கவும்.',
    },
  },
  Sukra: {
    temple: { en: 'Kanjanur (Sukra)', ta: 'காஞ்சனூர் (சுக்கிரன்)' },
    significance: {
      en: 'Venus governs love, marriage, beauty, luxury, relationships, and prosperity.',
      ta: 'சுக்கிரன் அன்பு, திருமணம், அழகு, ஆடம்பரம், உறவுகள் மற்றும் செழுமையை ஆள்கிறார்.',
    },
    doshas: [
      { en: 'Relationship problems', ta: 'உறவு பிரச்சனைகள்' },
      { en: 'Lack of prosperity', ta: 'செழுமை பற்றாக்குறை' },
      { en: 'Marital issues', ta: 'தாம்பத்திய பிரச்சனைகள்' },
      { en: 'Financial instability', ta: 'நிதி அஸ்திரத்தன்மை இன்மை' },
    ],
    remedy: {
      en: 'Offer white beans (Mochai), white silk cloth, and white lotus flowers on Fridays for marital harmony and prosperity.',
      ta: 'வெள்ளிக்கிழமை வெள்ளை அவரை, வெள்ளை பட்டு ஆடை மற்றும் வெள்ளை தாமரை மலர்கள் படைத்து தாம்பத்திய இசைவும் செழுமையும் பெறுங்கள்.',
    },
  },
  Sani: {
    temple: { en: 'Thirunallar (Saneeswaran)', ta: 'திருநள்ளாறு (சனீஸ்வரன்)' },
    significance: {
      en: 'Saturn governs karma, discipline, justice, patience, hard work, and life lessons.',
      ta: 'சனி கர்மம், ஒழுக்கம், நீதி, பொறுமை, கடின உழைப்பு மற்றும் வாழ்க்கை பாடங்களை ஆள்கிறார்.',
    },
    doshas: [
      { en: 'Sade Sati', ta: 'ஏழரை சனி' },
      { en: 'Career setbacks', ta: 'தொழில் தேக்கம்' },
      { en: 'Financial loss', ta: 'நிதி இழப்பு' },
      { en: 'Emotional struggles', ta: 'உணர்ச்சி போராட்டங்கள்' },
    ],
    remedy: {
      en: "Devotees bathe in the sacred Nala Theertham, offer sesame oil, sesame seeds, and black cloth on Saturdays to seek relief from Saturn's adverse effects.",
      ta: 'சனிக்கிழமை புனித நல தீர்த்தத்தில் நீராடி, எள்ளெண்ணெய், எள் விதைகள் மற்றும் கருப்பு ஆடை படைத்து சனியின் தீய விளைவுகளிலிருந்து நிவாரணம் பெறுகிறார்கள்.',
    },
  },
  Rahu: {
    temple: { en: 'Thirunageswaram (Rahu)', ta: 'திருநாகேஸ்வரம் (ராகு)' },
    significance: {
      en: 'Rahu influences foreign opportunities, unexpected events, ambition, illusion, and material desires.',
      ta: 'ராகு வெளிநாட்டு வாய்ப்புகள், எதிர்பாராத நிகழ்வுகள், லட்சியம், மாயை மற்றும் பொருள் ஆசைகளை பாதிக்கிறார்.',
    },
    doshas: [
      { en: 'Kala Sarpa Dosha', ta: 'கால சர்ப்ப தோஷம்' },
      { en: 'Delayed foreign travel', ta: 'வெளிநாட்டு பயண தாமதம்' },
      { en: 'Unexplained health concerns', ta: 'காரணம் தெரியாத உடல்நல பிரச்சனைகள்' },
      { en: 'Unexpected obstacles', ta: 'எதிர்பாராத தடைகள்' },
    ],
    remedy: {
      en: 'Perform Milk Abhishekam during Rahu Kaalam, a traditional ritual associated with this temple.',
      ta: 'ராகு காலத்தில் பால் அபிஷேகம் செய்யுங்கள், இது இந்த கோயிலுடன் தொடர்புடைய பாரம்பரிய சடங்கு.',
    },
  },
  Ketu: {
    temple: { en: 'Keezhaperumpallam (Ketu)', ta: 'கீழப்பெரும்பள்ளம் (கேது)' },
    significance: {
      en: 'Ketu represents spirituality, liberation (Moksha), intuition, detachment, and inner wisdom.',
      ta: 'கேது ஆன்மீகம், முக்தி, உள்ளுணர்வு, பற்றறுத்தல் மற்றும் உள் ஞானத்தை குறிக்கிறார்.',
    },
    doshas: [
      { en: 'Confusion', ta: 'குழப்பம்' },
      { en: 'Fear', ta: 'பயம்' },
      { en: 'Lack of direction', ta: 'திசையற்ற தன்மை' },
      { en: 'Nervous system concerns', ta: 'நரம்பு மண்டல பிரச்சனைகள்' },
    ],
    remedy: {
      en: 'Offer multi-colored cloth and Horse Gram (Kollu) on Tuesdays or Sundays to seek spiritual clarity and inner peace.',
      ta: 'செவ்வாய் அல்லது ஞாயிற்றுக்கிழமை பல வர்ண ஆடை மற்றும் கொள்ளு (குதிரை பருப்பு) படைத்து ஆன்மீக தெளிவும் உள் அமைதியும் பெறுங்கள்.',
    },
  },
};

const historySections: HistorySection[] = [
  {
    heading: {
      en: 'History of the Navagraha Temples',
      ta: 'நவகிரக கோயில்களின் வரலாறு',
    },
    paragraphs: [
      {
        en: 'The Navagraha temples were primarily built and expanded during the reign of the Chola Dynasty between the 7th and 12th centuries. Renowned for their architectural excellence and devotion to Lord Shiva, the Chola kings transformed these temples into enduring centers of worship, culture, and heritage.',
        ta: 'நவகிரக கோயில்கள் பெரும்பாலும் 7-ஆம் மற்றும் 12-ஆம் நூற்றாண்டுகளுக்கு இடையில் சோழ மன்னர்களின் ஆட்சியில் கட்டப்பட்டு விரிவாக்கப்பட்டன. கட்டிடக்கலை சிறப்புக்காகவும் இறைவன் மீதான பக்திக்காகவும் புகழ்பெற்ற சோழ மன்னர்கள் இந்த கோயில்களை வழிபாடு, கலாச்சாரம் மற்றும் பாரம்பரியத்தின் நிலையான மையங்களாக மாற்றினர்.',
      },
      {
        en: 'Today, these temples remain living monuments that beautifully preserve the traditions of ancient Tamil civilization.',
        ta: 'இன்று, இந்த கோயில்கள் பண்டைய தமிழ் நாகரிகத்தின் பாரம்பரியங்களை அழகாக பாதுகாக்கும் வாழும் நினைவுச்சின்னங்களாக உள்ளன.',
      },
    ],
  },
  {
    heading: {
      en: 'The Spiritual Significance of the Navagraha Temples',
      ta: 'நவகிரக கோயில்களின் ஆன்மீக முக்கியத்துவம்',
    },
    paragraphs: [
      {
        en: 'A common misconception is that all nine temples were built exclusively to worship the Navagrahas. In reality, with the exception of Suriyanar Kovil, the remaining temples are dedicated to Lord Shiva, with separate shrines for each planetary deity.',
        ta: 'ஒன்பது கோயில்களும் நவகிரகங்களை வழிபட மட்டுமே கட்டப்பட்டன என்பது ஒரு பொதுவான தவறான கருத்து. உண்மையில், சூரியநார் கோயிலைத் தவிர, மற்ற கோயில்கள் இறைவனுக்கு அர்ப்பணிக்கப்பட்டவை, ஒவ்வொரு கிரக தெய்வத்திற்கும் தனிச் சன்னதிகள் உள்ளன.',
      },
      {
        en: 'According to the Agama Shastras, the Navagrahas are regarded as attendants of the Supreme Lord. Their shrines are carefully positioned according to sacred architectural principles, ensuring harmony between the planetary energies.',
        ta: 'ஆகம சாஸ்திரங்களின்படி, நவகிரகங்கள் இறைவனின் பணியாளர்களாக கருதப்படுகிறார்கள். அவர்களின் சன்னதிகள் புனித கட்டிடக்கலை கோட்பாடுகளின்படி கவனமாக அமைக்கப்பட்டுள்ளன, இது கிரக சக்திகளுக்கு இடையே இசைவை உறுதி செய்கிறது.',
      },
    ],
  },
  {
    heading: {
      en: 'Dravidian Architecture of the Navagraha Temples',
      ta: 'நவகிரக கோயில்களின் திராவிட கட்டிடக்கலை',
    },
    paragraphs: [
      {
        en: 'The Navagraha temples showcase some of the finest examples of Dravidian temple architecture in Tamil Nadu.',
        ta: 'நவகிரக கோயில்கள் தமிழ்நாட்டில் திராவிட கோயில் கட்டிடக்கலையின் சிறந்த உதாரணங்களை காட்டுகின்றன.',
      },
    ],
    items: [
      {
        title: { en: 'Rajagopurams (Temple Towers)', ta: 'ராஜகோபுரங்கள் (கோயில் கோபுரங்கள்)' },
        text: {
          en: 'The towering Rajagopurams welcome devotees with intricate sculptures depicting stories from Hindu epics and Puranas.',
          ta: 'உயரமான ராஜகோபுரங்கள் இந்து இதிகாசங்கள் மற்றும் புராணங்களின் கதைகளை சித்தரிக்கும் நுணுக்கமான சிற்பங்களுடன் பக்தர்களை வரவேற்கின்றன.',
        },
      },
      {
        title: { en: 'Granite Mandapams', ta: 'கருங்கல் மண்டபங்கள்' },
        text: {
          en: 'Beautiful pillared halls carved from granite feature exquisite sculptures of dancers, musicians, deities, and mythical creatures, reflecting the remarkable craftsmanship of the Chola period.',
          ta: 'கருங்கல்லால் செதுக்கப்பட்ட அழகிய தூண் மண்டபங்களில் நர்த்தகர்கள், இசைக்கலைஞர்கள், தெய்வங்கள் மற்றும் புராண உயிரினங்களின் அற்புத சிற்பங்கள் உள்ளன, இவை சோழ காலத்தின் குறிப்பிடத்தக்க கைவினைத்திறனை பிரதிபலிக்கின்றன.',
        },
      },
      {
        title: { en: 'Sacred Temple Tanks (Theerthams)', ta: 'புனித கோயில் தீர்த்தங்கள்' },
        text: {
          en: 'Almost every Navagraha temple has a sacred temple tank, traditionally used for ritual purification and historically designed to conserve rainwater while supporting the surrounding ecosystem.',
          ta: 'கிட்டத்தட்ட ஒவ்வொரு நவகிரக கோயிலிலும் ஒரு புனித தீர்த்தம் உள்ளது, இது பாரம்பரியமாக சடங்கு புனிதமாக்கலுக்கு பயன்படுத்தப்படுகிறது மற்றும் மழைநீரை சேமிக்கவும் சுற்றியுள்ள சூழலியலை ஆதரிக்கவும் வரலாற்று ரீதியாக வடிவமைக்கப்பட்டுள்ளது.',
        },
      },
    ],
  },
  {
    heading: {
      en: 'Famous Legends Behind the Navagraha Temples',
      ta: 'நவகிரக கோயில்களுக்கு பின்னால் உள்ள புகழ்பெற்ற கதைகள்',
    },
    paragraphs: [
      {
        en: 'Every Navagraha temple is associated with unique legends that continue to shape the faith and traditions of devotees.',
        ta: 'ஒவ்வொரு நவகிரக கோயிலும் தனித்துவமான கதைகளுடன் தொடர்புடையது, அவை பக்தர்களின் நம்பிக்கை மற்றும் பாரம்பரியங்களை தொடர்ந்து வடிவமைக்கின்றன.',
      },
    ],
    items: [
      {
        title: { en: 'The Legend of Suriyanar Kovil', ta: 'சூரியநார் கோயிலின் கதை' },
        text: {
          en: 'According to tradition, the Navagrahas were once cursed by Lord Brahma. Seeking relief, they performed intense penance to Lord Shiva near present-day Kumbakonam. Pleased with their devotion, Lord Shiva blessed them and granted them the ability to bestow blessings upon devotees who worship at this sacred temple.',
          ta: 'பாரம்பரியத்தின்படி, நவகிரகங்கள் ஒரு காலத்தில் பிரம்மாவால் சாபம் பெற்றன. நிவாரணம் தேடி, அவை இன்றைய கும்பகோணம் அருகே இறைவனுக்கு தீவிர தவம் செய்தன. அவற்றின் பக்தியால் மகிழ்ந்த இறைவன், இந்த புனித கோயிலில் வழிபடும் பக்தர்களுக்கு ஆசி வழங்கும் சக்தியை அவற்றிற்கு அளித்தார்.',
        },
      },
      {
        title: { en: 'The Legend of Thirunallar', ta: 'திருநள்ளாறின் கதை' },
        text: {
          en: "The famous Thirunallar Saneeswaran Temple is closely connected with King Nala. After enduring immense hardships attributed to Saturn's influence, King Nala prayed at Thirunallar and bathed in the sacred Nala Theertham. According to tradition, his suffering ended, and he regained prosperity and peace.",
          ta: 'புகழ்பெற்ற திருநள்ளாறு சனீஸ்வரன் கோயில் நல மன்னனுடன் நெருக்கமாக தொடர்புடையது. சனியின் தாக்கத்தால் ஏற்பட்ட பெரும் துன்பங்களைத் தாங்கிய நலன், திருநள்ளாற்றில் பிரார்த்தனை செய்து புனித நல தீர்த்தத்தில் நீராடினான். பாரம்பரியத்தின்படி, அவன் துன்பம் முடிந்து, செழுமையும் அமைதியும் மீண்டும் பெற்றான்.',
        },
      },
      {
        title: { en: 'The Legend of Vaitheeswaran Kovil', ta: 'வைத்தீஸ்வரன் கோயிலின் கதை' },
        text: {
          en: 'The history of Vaitheeswaran Kovil is linked to the Ramayana. Tradition holds that Lord Rama performed the final rites of the brave eagle king Jatayu at this sacred site after his battle with Ravana, making the temple deeply significant to devotees.',
          ta: 'வைத்தீஸ்வரன் கோயிலின் வரலாறு ராமாயணத்துடன் இணைந்துள்ளது. ராவணனுடனான போருக்குப் பின் இறைவன் ராமன் இந்த புனித இடத்தில் துணிவான ஜடாயுவிற்கு இறுதிச் சடங்கு செய்தார் என்பது பாரம்பரியம், இது கோயிலை பக்தர்களுக்கு மிகவும் முக்கியமானதாக ஆக்குகிறது.',
        },
      },
    ],
  },
  {
    heading: {
      en: 'The Enduring Beliefs of the Navagraha Temples',
      ta: 'நவகிரக கோயில்களின் நிலைத்த நம்பிக்கைகள்',
    },
    paragraphs: [
      {
        en: 'For generations, devotees have visited the Navagraha temples seeking blessings for health, prosperity, education, marriage, career, and spiritual well-being. These temples continue to symbolize faith, devotion, and the timeless connection between Hindu spirituality, temple traditions, and Tamil heritage.',
        ta: 'தலைமுறை தலைமுறையாக, பக்தர்கள் ஆரோக்கியம், செழுமை, கல்வி, திருமணம், தொழில் மற்றும் ஆன்மீக நலனுக்காக ஆசி பெற நவகிரக கோயில்களுக்கு வருகிறார்கள். இந்த கோயில்கள் நம்பிக்கை, பக்தி மற்றும் இந்து ஆன்மீகம், கோயில் பாரம்பரியங்கள் மற்றும் தமிழ் பாரம்பரியத்திற்கு இடையேயான காலமற்ற தொடர்பை குறியீடாகக் கொண்டுள்ளன.',
      },
    ],
  },
];

const historyIntroParagraphs: Bi[] = [
  {
    en: "The Navagraha Temples of Tamil Nadu are among India's most significant spiritual and architectural landmarks. While millions of devotees visit these sacred shrines seeking divine blessings, each temple also preserves centuries of history, remarkable Dravidian architecture, and fascinating legends rooted in Hindu tradition.",
    ta: 'தமிழ்நாட்டின் நவகிரக கோயில்கள் இந்தியாவின் மிக முக்கியமான ஆன்மீக மற்றும் கட்டிடக்கலை அடையாளங்களில் சில. லட்சக்கணக்கான பக்தர்கள் தெய்வீக ஆசி தேடி இந்த புனித கோயில்களுக்கு வருகை தரும் அதே வேளையில், ஒவ்வொரு கோயிலும் நூற்றாண்டுகளாக வரலாறு, அற்புதமான திராவிட கட்டிடக்கலை மற்றும் இந்து பாரம்பரியத்தில் வேரூன்றிய கதைகளை பாதுகாக்கிறது.',
  },
  {
    en: 'Explore the history, beliefs, architecture, and spiritual significance of the Navagraha temples and discover why they continue to inspire pilgrims from around the world.',
    ta: 'நவகிரக கோயில்களின் வரலாறு, நம்பிக்கைகள், கட்டிடக்கலை மற்றும் ஆன்மீக முக்கியத்துவத்தை ஆராயுங்கள், அவை ஏன் உலகெங்கிலும் உள்ள யாத்ரீகர்களை தொடர்ந்து ஊக்குவிக்கின்றன என்பதை அறிந்துகொள்ளுங்கள்.',
  },
];

const orderToVisitContent = {
  intro: [
    {
      en: 'Planning your Navagraha Temple Tour from Kumbakonam requires the right route, proper timing, and local guidance. The nine Navagraha temples are spread across Kumbakonam, Mayiladuthurai, and Karaikal, making route planning essential for a smooth pilgrimage.',
      ta: 'கும்பகோணத்திலிருந்து உங்கள் நவகிரக கோயில் சுற்றுலாவைத் திட்டமிட சரியான வழி, சரியான நேரம் மற்றும் உள்ளூர் வழிகாட்டி தேவை. ஒன்பது நவகிரக கோயில்கள் கும்பகோணம், மயிலாடுதுறை மற்றும் காரைக்கால் முழுவதும் பரவியுள்ளன, இது சுமூகமான யாத்திரைக்கு வழி திட்டமிடலை அவசியமாக்குகிறது.',
    },
    {
      en: 'This guide covers the Navagraha Temple Order to Visit, temple timings, travel distances, and the best itinerary to help devotees complete their spiritual journey comfortably.',
      ta: 'இந்த வழிகாட்டி நவகிரக கோயில்கள் தரிசன வரிசை, கோயில் நேர அட்டவணை, பயண தூரங்கள் மற்றும் பக்தர்கள் தங்கள் ஆன்மீக பயணத்தை வசதியாக முடிக்க உதவும் சிறந்த பயண திட்டத்தை உள்ளடக்கியது.',
    },
  ] as Bi[],
  stayHeading: {
    en: 'Best Place to Stay for Your Navagraha Temple Tour',
    ta: 'உங்கள் நவகிரக கோயில் சுற்றுலாவுக்கு தங்குவதற்கு சிறந்த இடம்',
  },
  stayText: {
    en: 'Kumbakonam is the ideal starting point and the best base for any Navagraha Tour Package. Located centrally within the temple circuit, it offers convenient access to all nine temples along with comfortable hotels, great vegetarian restaurants, and experienced local travel operators.',
    ta: 'கும்பகோணம் எந்த நவகிரக சுற்றுலா தொகுப்பிற்கும் சிறந்த தொடக்க புள்ளி மற்றும் தளமாகும். கோயில் சுற்றுப்பாதையின் மையப்பகுதியில் அமைந்துள்ள இது, ஒன்பது கோயில்களுக்கும் எளிதான அணுகலுடன், வசதியான தங்குமிடங்கள், சிறந்த சைவ உணவகங்கள் மற்றும் அனுபவமிக்க உள்ளூர் பயண அமைப்பாளர்களை வழங்குகிறது.',
  },
  stayList: [
    { en: 'Nearest Airport: Tiruchirappalli (Trichy - TRZ) - 90 km (Approx. 2.5 Hours)', ta: 'அருகிலுள்ள விமான நிலையம்: திருச்சிராப்பள்ளி (திருச்சி - TRZ) - 90 கி.மீ (சுமார் 2.5 மணி)' },
    { en: 'Nearest Railway Station: Kumbakonam Railway Station (KMU). Well connected to Chennai, Bengaluru, Madurai, Trichy and other major cities.', ta: 'அருகிலுள்ள ரயில் நிலையம்: கும்பகோணம் ரயில் நிலையம் (KMU). சென்னை, பெங்களூர், மதுரை, திருச்சி மற்றும் பிற பெரிய நகரங்களுடன் நன்கு இணைக்கப்பட்டுள்ளது.' },
  ] as Bi[],
  timingsHeading: { en: 'Navagraha Temple Timings', ta: 'நவகிரக கோயில் நேர அட்டவணை' },
  timingsText: {
    en: 'Before finalizing your route, it is vital to note the standard temple opening hours. Unlike regular tourist spots, South Indian temples strictly observe resting times for the deities.',
    ta: 'உங்கள் வழியை இறுதி செய்வதற்கு முன், நிலையான கோயில் திறக்கும் நேரங்களை கவனிப்பது அவசியம். வழக்கமான சுற்றுலா தளங்களைப் போல் அல்லாமல், தென்னிந்திய கோயில்கள் தெய்வங்களுக்கான ஓய்வு நேரத்தை கண்டிப்பாக கடைபிடிக்கின்றன.',
  },
  timingsList: [
    { en: 'Morning Darshan: 6:00 AM - 12:30 PM', ta: 'காலை தரிசனம்: காலை 6:00 - 12:30' },
    { en: 'Evening Darshan: 4:00 PM - 8:30 PM', ta: 'மாலை தரிசனம்: மாலை 4:00 - 8:30' },
  ] as Bi[],
  timingsTip: {
    en: 'Travel Tip: Avoid planning temple visits between 12:30 PM and 4:00 PM, as almost all temples will remain closed during this period. Use this time to have lunch and travel between towns.',
    ta: 'பயண குறிப்பு: மதியம் 12:30 மற்றும் மாலை 4:00 மணிக்கு இடையில் கோயில் வருகையைத் திட்டமிட வேண்டாம், ஏனெனில் இந்த காலகட்டத்தில் கிட்டத்தட்ட அனைத்து கோயில்களும் மூடியிருக்கும். இந்த நேரத்தை மதிய உணவுக்கும் நகரங்களுக்கு இடையே பயணிக்கவும் பயன்படுத்தவும்.',
  },
  recommendedHeading: {
    en: 'Recommended Navagraha Temple Order to Visit (2 Days)',
    ta: 'பரிந்துரைக்கப்பட்ட நவகிரக கோயில் தரிசன வரிசை (2 நாட்கள்)',
  },
  recommendedText: {
    en: 'Trying to cover all nine temples in a single day is exhausting. This 2-day itinerary provides a comfortable and efficient route from Kumbakonam, reducing your driving time while giving you enough peace to perform your darshan and rituals.',
    ta: 'ஒன்பது கோயில்களையும் ஒரே நாளில் தரிசிக்க முயற்சிப்பது களைப்பானது. இந்த 2-நாள் பயணத் திட்டம் கும்பகோணத்திலிருந்து வசதியான மற்றும் திறமையான வழியை வழங்குகிறது, உங்கள் வாகன ஓட்டும் நேரத்தை குறைத்து, தரிசனம் மற்றும் சடங்குகளை செய்ய போதுமான அமைதியை தருகிறது.',
  },
  day1Heading: { en: 'Day 1 - Kumbakonam & Mayiladuthurai Route', ta: '1-ஆம் நாள் - கும்பகோணம் & மயிலாடுதுறை வழி' },
  day1Text: { en: 'Cover the eastern and northern cluster of temples first. The recommended flow is:', ta: 'கிழக்கு மற்றும் வடக்கு கோயில் குழுவை முதலில் தரிசிக்கவும். பரிந்துரைக்கப்பட்ட வரிசை:' },
  day1List: [
    { en: 'Thingalur - Chandra Temple (Start early morning)', ta: 'திங்களூர் - சந்திர கோயில் (அதிகாலையில் தொடங்கவும்)' },
    { en: 'Alangudi - Guru Temple', ta: 'ஆலங்குடி - குரு கோயில்' },
    { en: 'Suriyanar Kovil - Surya Temple', ta: 'சூரியநார் கோயில் - சூரிய கோயில்' },
    { en: 'Kanjanur - Sukra Temple', ta: 'காஞ்சனூர் - சுக்கிர கோயில்' },
    { en: 'Lunch Break', ta: 'மதிய உணவு இடைவேளை' },
    { en: 'Thirunageswaram - Rahu Temple (Time this around Rahu Kaalam for the milk abhishekam)', ta: 'திருநாகேஸ்வரம் - ராகு கோயில் (பால் அபிஷேகத்திற்கு ராகு காலத்திற்கு ஏற்ப நேரம் அமைக்கவும்)' },
  ] as Bi[],
  day2Heading: { en: 'Day 2 - Karaikal & Sirkazhi Route', ta: '2-ஆம் நாள் - காரைக்கால் & சீர்காழி வழி' },
  day2Text: { en: 'On your second day, complete the remaining temples situated toward the coastal and southern belts:', ta: 'இரண்டாம் நாள், கடற்கரை மற்றும் தெற்கு பகுதிகளில் உள்ள மீதமுள்ள கோயில்களை முடிக்கவும்:' },
  day2List: [
    { en: 'Thirunallar - Shani Temple (Expect heavy crowds, so arrive as early as possible)', ta: 'திருநள்ளாறு - சனி கோயில் (பெரும் கூட்டத்தை எதிர்பார்க்கவும், எனவே முடிந்தவரை சீக்கிரமாக வரவும்)' },
    { en: 'Keezhaperumpallam - Ketu Temple', ta: 'கீழப்பெரும்பள்ளம் - கேது கோயில்' },
    { en: 'Thiruvenkadu - Budha Temple', ta: 'திருவெண்காடு - புதன் கோயில்' },
    { en: 'Vaitheeswaran Kovil - Angaraka Temple', ta: 'வைத்தீஸ்வரன் கோயில் - அங்காரக கோயில்' },
  ] as Bi[],
  distanceHeading: { en: 'Distance of Navagraha Temples from Kumbakonam', ta: 'கும்பகோணத்திலிருந்து நவகிரக கோயில்களின் தூரம்' },
  distanceText: { en: 'Use this quick distance reference to understand your travel logistics:', ta: 'உங்கள் பயண தகவல்களை புரிந்துகொள்ள இந்த தூர குறிப்பை பயன்படுத்தவும்:' },
  distanceList: [
    { en: 'Thirunageswaram (Rahu): 7 km', ta: 'திருநாகேஸ்வரம் (ராகு): 7 கி.மீ' },
    { en: 'Suriyanar Kovil (Surya): 15 km', ta: 'சூரியநார் கோயில் (சூரியன்): 15 கி.மீ' },
    { en: 'Alangudi (Guru): 17 km', ta: 'ஆலங்குடி (குரு): 17 கி.மீ' },
    { en: 'Kanjanur (Sukra): 18 km', ta: 'காஞ்சனூர் (சுக்கிரன்): 18 கி.மீ' },
    { en: 'Thingalur (Chandra): 33 km', ta: 'திங்களூர் (சந்திரன்): 33 கி.மீ' },
    { en: 'Vaitheeswaran Kovil (Angaraka): 50 km', ta: 'வைத்தீஸ்வரன் கோயில் (அங்காரகன்): 50 கி.மீ' },
    { en: 'Thirunallar (Shani): 55 km', ta: 'திருநள்ளாறு (சனி): 55 கி.மீ' },
    { en: 'Thiruvenkadu (Budha): 60 km', ta: 'திருவெண்காடு (புதன்): 60 கி.மீ' },
    { en: 'Keezhaperumpallam (Ketu): 65 km', ta: 'கீழப்பெரும்பள்ளம் (கேது): 65 கி.மீ' },
  ] as Bi[],
  tipsHeading: { en: 'Essential Travel Tips', ta: 'அத்தியாவசிய பயண குறிப்புகள்' },
  tipsText: { en: 'Follow these practical tips to make your pilgrimage smoother and more comfortable:', ta: 'உங்கள் யாத்திரையை மென்மையானதாகவும் வசதியானதாகவும் மாற்ற இந்த பயனுள்ள குறிப்புகளை பின்பற்றவும்:' },
  tipsList: [
    { en: 'Start your journey early in the morning, around 6:00 AM, to beat the crowds and the heat.', ta: 'கூட்டத்தையும் வெப்பத்தையும் தவிர்க்க காலை 6:00 மணிக்கு பயணத்தை தொடங்கவும்.' },
    { en: 'Wear comfortable traditional attire. Men should wear dhotis or proper pants (no shorts), and women should wear sarees, half-sarees, or salwar kameez.', ta: 'வசதியான பாரம்பரிய ஆடை அணியவும். ஆண்கள் வேட்டி அல்லது முறையான கால்சட்டை (ஷார்ட்ஸ் அல்ல) அணியவும், பெண்கள் புடவை, அரை புடவை அல்லது சல்வார் கமீஸ் அணியவும்.' },
    { en: 'Carry plenty of drinking water and light refreshments for the long drives between villages.', ta: 'கிராமங்களுக்கு இடையேயான நீண்ட பயணங்களுக்கு போதுமான குடிநீர் மற்றும் இலகு உணவு எடுத்துச் செல்லவும்.' },
    { en: 'Allocate enough time for darshan at each temple—do not rush the experience.', ta: 'ஒவ்வொரு கோயிலிலும் தரிசனத்திற்கு போதுமான நேரம் ஒதுக்கவும் — அனுபவத்தை அவசரப்படுத்த வேண்டாம்.' },
    { en: 'Booking a private AC vehicle with a local driver is highly recommended as rural routes can be confusing to navigate alone.', ta: 'உள்ளூர் ஓட்டுநருடன் தனியார் ஏசி வாகனம் முன்பதிவு செய்வது பரிந்துரைக்கப்படுகிறது, ஏனெனில் கிராமப்புற வழிகள் தனியாக வழிநடத்த குழப்பமாக இருக்கலாம்.' },
  ] as Bi[],
  introHeading: { en: 'Introduction', ta: 'அறிமுகம்' },
};

const ctaContent = {
  brand: 'Sivam Travels',
  heading: {
    en: 'Continue Your Navagraha Journey With a Thoughtfully Planned Pilgrimage',
    ta: 'சிந்தனையுடன் திட்டமிடப்பட்ட யாத்திரையுடன் உங்கள் நவகிரக பயணத்தை தொடரவும்',
  },
  text: {
    en: 'Explore our curated Navagraha tour packages from Kumbakonam for a more comfortable, seamless, and spiritually focused travel experience.',
    ta: 'மேலும் வசதியான, தடையற்ற மற்றும் ஆன்மீக நோக்கிலான பயண அனுபவத்திற்காக கும்பகோணத்திலிருந்து நாங்கள் தேர்வு செய்த நவகிரக சுற்றுலா தொகுப்புகளை ஆராயுங்கள்.',
  },
  button: { en: 'Explore Packages', ta: 'தொகுப்புகளை ஆராய்க' },
  backToGuide: { en: 'Back to Guide', ta: 'வழிகாட்டிக்குத் திரும்பு' },
  breadcrumbHome: { en: 'Home', ta: 'முகப்பு' },
  breadcrumbGuide: { en: 'Navagraha Information Guide', ta: 'நவகிரக தகவல் வழிகாட்டி' },
};

export default function NavagrahaGuideClient({ slug: slugStr }: { slug: string }) {
  const { lang } = useApp();
  const slug = slugStr as GuideSlug;
  const page = guidePages[slug];
  if (!page) return null;

  return (
    <div className="bg-ivory">
      <GuideHero page={page} lang={lang} />
      <main>
        <article className="py-16 lg:py-24">
          {slug === 'order-to-visit' ? <OrderToVisitLayout lang={lang} /> : null}
          {slug === 'doshas-remedies' ? <DoshasLayout lang={lang} /> : null}
          {slug === 'history-beliefs' ? <HistoryLayout lang={lang} /> : null}
        </article>
      </main>
    </div>
  );
}

function GuideHero({ page, lang }: { page: GuidePage; lang: Lang }) {
  return (
    <section className="relative flex min-h-[460px] items-end overflow-hidden lg:min-h-[520px]">
      <div className="absolute inset-0">
        <img src={page.heroImage} alt={page.title[lang]} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-maroon/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 lg:px-10 lg:pb-16">
        <div className="mb-4 mt-16 md:mt-0">
          <Link
            href="/#navagraha"
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 font-body text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/25"
          >
            <ArrowLeft className="h-4 w-4" />
            {ctaContent.backToGuide[lang]}
          </Link>
        </div>

        <nav aria-label="Breadcrumb" className="mb-5">
          <ol
            className="flex flex-wrap items-center gap-2 text-sm text-white/75"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" itemProp="item" className="transition-colors hover:text-gold">
                <span itemProp="name">{ctaContent.breadcrumbHome[lang]}</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li className="text-gold/70">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/#navagraha" itemProp="item" className="transition-colors hover:text-gold">
                <span itemProp="name">{ctaContent.breadcrumbGuide[lang]}</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <li className="text-gold/70">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="text-gold">
              <span itemProp="name">{page.title[lang]}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        <span className="inline-flex items-center gap-2 rounded-full bg-gold/90 px-5 py-2 font-body text-base tracking-wide text-maroon">
          <Sparkles className="h-4 w-4" />
          {page.eyebrow[lang]}
        </span>
        <h1 className="mt-5 max-w-4xl font-heading text-5xl font-medium text-white sm:text-6xl lg:text-[4.25rem]">{page.title[lang]}</h1>
        <p className="mt-4 max-w-2xl font-body text-xl leading-[1.8] text-white/80 lg:text-2xl">{page.description[lang]}</p>
      </div>
    </section>
  );
}

function OrderToVisitLayout({ lang }: { lang: Lang }) {
  const c = orderToVisitContent;
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 font-body text-xl leading-relaxed text-charcoal/80">
      <div className="max-w-5xl">
        <h2 className="font-heading text-5xl text-maroon mt-8 mb-8">{c.introHeading[lang]}</h2>
        {c.intro.map((p, i) => (
          <p key={i} className="mb-8">{p[lang]}</p>
        ))}

        <h2 className="font-heading text-5xl text-maroon mt-20 mb-8">{c.stayHeading[lang]}</h2>
        <p className="mb-8">{c.stayText[lang]}</p>
        <ul className="list-disc pl-8 mb-12 space-y-4">
          {c.stayList.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatStrong(item[lang]) }} />
          ))}
        </ul>

        <h2 className="font-heading text-5xl text-maroon mt-20 mb-8">{c.timingsHeading[lang]}</h2>
        <p className="mb-8">{c.timingsText[lang]}</p>
        <ul className="list-disc pl-8 mb-8 space-y-4">
          {c.timingsList.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatStrong(item[lang]) }} />
          ))}
        </ul>
        <p className="mb-12 italic text-maroon/80">{c.timingsTip[lang]}</p>

        <h2 className="font-heading text-5xl text-maroon mt-20 mb-8">{c.recommendedHeading[lang]}</h2>
        <p className="mb-10">{c.recommendedText[lang]}</p>

        <h3 className="font-heading text-3xl text-maroon mb-6">{c.day1Heading[lang]}</h3>
        <p className="mb-6">{c.day1Text[lang]}</p>
        <ul className="list-disc pl-8 mb-12 space-y-3">
          {c.day1List.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatEm(item[lang]) }} />
          ))}
        </ul>

        <h3 className="font-heading text-3xl text-maroon mt-12 mb-6">{c.day2Heading[lang]}</h3>
        <p className="mb-6">{c.day2Text[lang]}</p>
        <ul className="list-disc pl-8 mb-12 space-y-3">
          {c.day2List.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatEm(item[lang]) }} />
          ))}
        </ul>

        <h2 className="font-heading text-5xl text-maroon mt-20 mb-8">{c.distanceHeading[lang]}</h2>
        <p className="mb-8">{c.distanceText[lang]}</p>
        <ul className="list-disc pl-8 mb-12 space-y-3">
          {c.distanceList.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatStrong(item[lang]) }} />
          ))}
        </ul>

        <h2 className="font-heading text-5xl text-maroon mt-20 mb-8">{c.tipsHeading[lang]}</h2>
        <p className="mb-8">{c.tipsText[lang]}</p>
        <ul className="list-disc pl-8 space-y-4">
          {c.tipsList.map((item, i) => (
            <li key={i}>{item[lang]}</li>
          ))}
        </ul>
      </div>

      <div className="mt-24">
        <BottomCta lang={lang} />
      </div>
    </div>
  );
}

function DoshasLayout({ lang }: { lang: Lang }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 font-body text-xl leading-relaxed text-charcoal/80">
      <div className="max-w-5xl">
        <h2 className="font-heading text-5xl text-maroon mt-8 mb-8">{orderToVisitContent.introHeading[lang]}</h2>
        {doshaIntroParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-8">{paragraph[lang]}</p>
        ))}

        <div className="mt-16 space-y-20">
          {Object.entries(doshaDetails).map(([planet, detail], index) => (
            <div key={planet} className="border-b border-gold/20 pb-16 last:border-0 last:pb-0">
              <h2 className="font-heading text-4xl text-maroon mb-8">{index + 1}. {detail.temple[lang]}</h2>

              <p className="mb-6">
                <strong className="text-maroon/90">{lang === 'ta' ? 'ஜோதிட முக்கியத்துவம்:' : 'Astrological Significance:'}</strong><br />
                {detail.significance[lang]}
              </p>

              <p className="mb-6">
                <strong className="text-maroon/90">{lang === 'ta' ? 'பொதுவான தோஷங்கள் (துன்பங்கள்):' : 'Common Doshas (Afflictions):'}</strong><br />
                {detail.doshas.map((d) => d[lang]).join(', ')}
              </p>

              <p className="mb-6 text-maroon">
                <strong>{lang === 'ta' ? 'பாரம்பரிய பரிகாரம் (பரிஹாரம்):' : 'Traditional Remedy (Pariharam):'}</strong><br />
                {detail.remedy[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <BottomCta lang={lang} />
      </div>
    </div>
  );
}

function HistoryLayout({ lang }: { lang: Lang }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 font-body text-xl leading-relaxed text-charcoal/80">
      <div className="max-w-5xl">
        <h2 className="font-heading text-5xl text-maroon mt-8 mb-8">{orderToVisitContent.introHeading[lang]}</h2>
        {historyIntroParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-8">{paragraph[lang]}</p>
        ))}

        <div className="space-y-20 mt-16">
          {historySections.map((section, index) => (
            <div key={index}>
              <h2 className="font-heading text-4xl text-maroon mb-8">{section.heading[lang]}</h2>

              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-8">{paragraph[lang]}</p>
              ))}

              {section.items && (
                <ul className="list-disc pl-8 space-y-6 mt-8">
                  {section.items.map((item) => (
                    <li key={item.title.en}>
                      <strong className="text-maroon/90">{item.title[lang]}:</strong> {item.text[lang]}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <BottomCta lang={lang} />
      </div>
    </div>
  );
}

function BottomCta({ lang }: { lang: Lang }) {
  return (
    <div className="rounded-[30px] border border-gold/20 bg-gradient-to-br from-maroon to-maroon/95 p-10 lg:p-14 shadow-luxe my-8">
      <p className="font-title text-base tracking-[0.3em] text-gold uppercase mb-5">{ctaContent.brand}</p>
      <h2 className="font-heading text-4xl lg:text-5xl leading-tight text-white mb-6">
        {ctaContent.heading[lang]}
      </h2>
      <p className="font-body text-xl text-white/80 mb-10 max-w-3xl">
        {ctaContent.text[lang]}
      </p>
      <Link
        href="/#packages"
        className="inline-flex items-center gap-2 rounded-full bg-gold px-10 py-5 font-body text-lg font-medium text-maroon transition-all hover:shadow-lg hover:scale-[1.02]"
      >
        {ctaContent.button[lang]}
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  );
}

function formatStrong(text: string): string {
  const colonIdx = text.indexOf(':');
  if (colonIdx === -1) return text;
  return `<strong>${text.slice(0, colonIdx)}:</strong>${text.slice(colonIdx + 1)}`;
}

function formatEm(text: string): string {
  if (text.startsWith('Lunch') || text.includes('மதிய உணவு')) {
    return `<em>${text}</em>`;
  }
  return text;
}
