'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SectionHeading } from './Packages';
import { useApp } from '@/lib/app-context';
import type { Lang } from '@/lib/data';

const faqData: Record<Lang, { q: string; a: string }[]> = {
  en: [
    {
      q: 'Which is the best Navagraha Tour Package?',
      a: 'The best Navagraha Tour Package depends on your schedule. Our One Day Navagraha Tour Package is ideal for devotees with limited time, while the Two Day Navagraha Tour Package offers a more relaxed pilgrimage. For those seeking a deeper spiritual experience, our Three Day Navagraha Tour Package includes additional temple visits and comfortable travel.',
    },
    {
      q: 'Can all 9 Navagraha temples be visited in one day?',
      a: 'Yes. All nine temples can be covered in our One Day Navagraha Temple Tour with an early start and proper route planning. However, devotees who prefer a slower pace often choose the Two Day Navagraha Tour from Kumbakonam by Sivam Travels for a more comfortable darshan experience.',
    },
    {
      q: 'Where does the Navagraha Tour start?',
      a: 'Our Navagraha Tour from Kumbakonam usually begins with pickup from your hotel, railway station, or nearby location. We also provide pickup from Thirunageswaram and surrounding areas, ensuring a convenient start to your pilgrimage.',
    },
    {
      q: 'Which is the best place to stay for a Navagraha pilgrimage?',
      a: 'Kumbakonam is the preferred base for most pilgrims because it is centrally located between all nine temples. Sivam Travels also offers comfortable accommodation near Thirunageswaram Rahu Temple, making it convenient for devotees planning their Navagraha Temple Tour.',
    },
    {
      q: 'Do you provide pickup from Kumbakonam Railway Station?',
      a: 'Yes. We provide pickup and drop services from Kumbakonam Railway Station, nearby hotels, bus stand, and selected locations. This makes your Navagraha Tour Package smooth and hassle-free from the moment you arrive.',
    },
    {
      q: 'Are hotel accommodations included in the package?',
      a: 'Accommodation is optional and depends on the Navagraha Tour Package you choose. We can arrange clean and comfortable rooms near Rahu Temple (Thirunageswaram) or in Kumbakonam based on your travel requirements.',
    },
    {
      q: 'Which vehicle options are available?',
      a: 'We offer well-maintained Sedan and SUV vehicles for our Navagraha Temple Tour Packages. Vehicle selection depends on the number of travelers, ensuring a comfortable journey for individuals, families, and groups.',
    },
    {
      q: 'Are temple entry fees included?',
      a: 'General temple darshan is free at most Navagraha temples. However, special poojas, archanais, temple offerings, toll charges, parking fees, and permits are not included in the package price unless specifically mentioned during booking.',
    },
    {
      q: 'Is the tour suitable for senior citizens?',
      a: 'Yes. Our Navagraha Temple Tour Packages are suitable for senior citizens. Sivam Travels carefully plans temple timings, reduces unnecessary travel, and provides comfortable vehicles to ensure a peaceful pilgrimage for elderly devotees.',
    },
    {
      q: 'Can I customize my Navagraha Tour Package?',
      a: 'Absolutely. Sivam Travels offers customized Navagraha Tour Packages based on your travel dates, preferred temples, pickup location, accommodation needs, vehicle type, and family requirements. Contact us to create a personalized pilgrimage itinerary.',
    },
    {
      q: 'What is the best time to visit the Navagraha temples?',
      a: 'The temples can be visited throughout the year. However, October to March offers the most pleasant weather for a Navagraha Temple Tour. We also recommend starting early in the morning to avoid crowds and complete darshan comfortably.',
    },
    {
      q: 'How can I book a Navagraha Tour Package?',
      a: 'Booking is simple. You can contact Sivam Travels through WhatsApp, phone call, or our online booking form. Share your travel date, number of travelers, preferred Navagraha Tour Package, and pickup location, and our team will confirm your booking promptly.',
    },
  ],
  ta: [
    {
      q: 'சிறந்த நவகிரக சுற்றுலா தொகுப்பு எது?',
      a: 'சிறந்த நவகிரக சுற்றுலா தொகுப்பு உங்கள் நேரத்தைப் பொறுத்தது. எங்கள் இரண்டு நாள் நவகிரக சுற்றுலா மிகவும் பிரபலமானது, இது ஒரு சீரான வேகத்தை வழங்குகிறது. நாங்கள் ஒரு நாள் நவகிரக சுற்றுலா மற்றும் மூன்று நாள் நவகிரக சுற்றுலா ஆகியவற்றை வழங்குகிறோம். ஒவ்வொரு நவகிரக கோயில் தொகுப்பும் ஒரு முழுமையான ஆன்மீக அனுபவத்திற்காக வடிவமைக்கப்பட்டுள்ளது.',
    },
    {
      q: '9 நவகிரக கோயில்களையும் ஒரே நாளில் தரிசிக்க முடியுமா?',
      a: 'ஆம், எங்கள் ஒரு நாள் நவகிரக சுற்றுலா குறைந்த நேரம் உள்ள பக்தர்களுக்காக வடிவமைக்கப்பட்டுள்ளது. இது ஒன்பது கோயில்களையும் உள்ளடக்கிய ஒரு வேகமான பயணம். மிகவும் வசதியான பயணத்திற்கு, கும்பகோணத்திலிருந்து எங்கள் இரண்டு நாள் நவகிரக சுற்றுலாவை பரிந்துரைக்கிறோம்.',
    },
    {
      q: 'நவகிரக சுற்றுலா எവിടെ இருந்து தொடங்குகிறது?',
      a: 'எங்கள் நவகிரக கோயில் சுற்றுலா தொகுப்புகள் பொதுவாக கும்பகோணத்தில் இருந்து தொடங்குகின்றன. கும்பகோணம் ரயில் நிலையம், உங்கள் ஹோட்டல் அல்லது இப்பகுதியில் உள்ள வேறு எந்த இடத்திலிருந்தும் உங்களை அழைத்துச் செல்ல நாங்கள் ஏற்பாடு செய்யலாம்.',
    },
    {
      q: 'நவகிரக யாத்திரைக்கு தங்குவதற்கு சிறந்த இடம் எது?',
      a: 'கும்பகோணம் நவகிரக யாத்திரைக்கு தங்குவதற்கு மிகவும் மையமான மற்றும் வசதியான இடமாகும், ஏனெனில் இது ஒன்பது கோயில்களுக்கும் எளிதான அணுகலை வழங்குகிறது. உங்கள் நவகிரக சுற்றுலா முன்பதிவின் ஒரு பகுதியாக உங்கள் பட்ஜெட் மற்றும் விருப்பங்களுக்கு ஏற்ற தங்குமிடத்தைக் கண்டறிய நாங்கள் உங்களுக்கு உதவ முடியும்.',
    },
    {
      q: 'கும்பகோணம் ரயில் நிலையத்திலிருந்து பிக்கப் வழங்குகிறீர்களா?',
      a: 'ஆம், எங்கள் அனைத்து நவகிரக சுற்றுலா தொகுப்புகளிலும் கும்பகோணம் ரயில் நிலையத்திலிருந்து இலவச பிக்கப் மற்றும் டிராப்-ஆஃப் ஆகியவை அடங்கும். உங்கள் நவகிரக சுற்றுலா முன்பதிவின் போது உங்கள் பயண விவரங்களை வழங்கவும், எங்கள் ஓட்டுநர் உங்களை வந்தவுடன் வரவேற்பார்.',
    },
    {
      q: 'ஹோட்டல் தங்குமிடங்கள் தொகுப்பில் சேர்க்கப்பட்டுள்ளதா?',
      a: 'எங்கள் стандарт நவகிரக கோயில் தொகுப்பில் ஹோட்டல் தங்குமிடங்கள் தானாக சேர்க்கப்படவில்லை. இருப்பினும், உங்கள் பட்ஜெட்டின் அடிப்படையில் கும்பகோணத்தில் ஹோட்டல்களை முன்பதிவு செய்ய நாங்கள் உதவுகிறோம் மற்றும் கோரிக்கையின் பேரில் தங்குமிடத்தை உள்ளடக்கிய ஒரு தனிப்பயன் தொகுப்பை உருவாக்க முடியும்.',
    },
    {
      q: 'என்னென்ன வாகன விருப்பங்கள் உள்ளன?',
      a: 'செடான்கள் (டிசையர், எடியோஸ்), எஸ்யூவிகள் (இன்னோவா, கிரிஸ்டா) மற்றும் பெரிய வேன்கள் (டெம்போ டிராவலர்) உள்ளிட்ட உங்கள் குழு அளவிற்கு ஏற்றவாறு நன்கு பராமரிக்கப்பட்ட, குளிரூட்டப்பட்ட வாகனங்களை நாங்கள் வழங்குகிறோம்.',
    },
    {
      q: 'கோயில் நுழைவுக் கட்டணம் சேர்க்கப்பட்டுள்ளதா?',
      a: 'அனைத்து நவகிரக கோயில்களிலும் சாதாரண தரிசனம் இலவசம். எனவே, நவகிரக சுற்றுலா தொகுப்பில் நுழைவுக் கட்டணம் சேர்க்கப்படவில்லை. இருப்பினும், விரைவான தரிசனத்திற்காக சிறப்பு தரிசன டிக்கெட்டுகளை வாங்க விரும்பினால், எங்கள் ஓட்டுநர்கள் கோயிலில் அதை எப்படி செய்வது என்று உங்களுக்கு வழிகாட்டுவார்கள்.',
    },
    {
      q: 'இந்த சுற்றுலா மூத்த குடிமக்களுக்கு ஏற்றதா?',
      a: 'நிச்சயமாக. எங்கள் சுற்றுப்பயணங்களில் மூத்த குடிமக்களை நாங்கள் đặc biệt கவனித்துக்கொள்கிறோம். எங்கள் ஓட்டுநர்கள் பொறுமையானவர்கள் மற்றும் இயக்கத்திற்கு உதவுவார்கள். மிகவும் நிதானமான வேகத்திற்கு எங்கள் இரண்டு அல்லது மூன்று நாள் நவகிரக சுற்றுலாவை பரிந்துரைக்கிறோம்.',
    },
    {
      q: 'எனது நவகிரக சுற்றுலா தொகுப்பை நான் தனிப்பயனாக்க முடியுமா?',
      a: 'ஆம், தனிப்பயனாக்கம் எங்கள் முக்கிய பலங்களில் ஒன்றாகும். நீங்கள் மற்ற கோயில்களைச் சேர்க்க விரும்பினாலும், வேகத்தை சரிசெய்ய விரும்பினாலும் அல்லது குறிப்பிட்ட ஏற்பாடுகள் தேவைப்பட்டாலும், உங்கள் சரியான தேவைகளைப் பூர்த்தி செய்யும் ஒரு தனிப்பயனாக்கப்பட்ட நவகிரக கோயில் சுற்றுலாவை நாங்கள் உருவாக்க முடியும்.',
    },
    {
      q: 'நவகிரக கோயில்களுக்குச் செல்ல சிறந்த நேரம் எது?',
      a: 'செப்டம்பர் முதல் மார்ச் வரை வானிலை இனிமையாக இருக்கும்போது நவகிரக கோயில்களுக்குச் செல்ல சிறந்த நேரம். இருப்பினும், கோயில்கள் ஆண்டு முழுவதும் திறந்திருக்கும். நீங்கள் எப்போது பயணம் செய்தாலும் அமைதியான தரிசனத்தை உறுதிசெய்து, உச்ச நேரங்களைத் தவிர்க்க எங்கள் சுற்றுப்பயணங்களைத் திட்டமிடுகிறோம்.',
    },
    {
      q: 'நவகிரக சுற்றுலா தொகுப்பை நான் எப்படி முன்பதிவு செய்வது?',
      a: 'உங்கள் நவகிரக சுற்றுலாவை முன்பதிவு செய்வது எளிது. நீங்கள் எங்களை தொலைபேசி, வாட்ஸ்அப் அல்லது எங்கள் இணையதளத்தில் உள்ள தொடர்பு படிவம் மூலம் தொடர்பு கொள்ளலாம். எங்கள் குழு சரியான தொகுப்பைத் தேர்வுசெய்ய உங்களுக்கு உதவும் மற்றும் தேவையான அனைத்து விவரங்களுடன் உங்கள் நவகிரக சுற்றுலா முன்பதிவை உறுதி செய்யும்.',
    },
  ],
};

const FaqItem = ({
  q,
  a,
  isOpen,
  setIsOpen,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  setIsOpen: () => void;
}) => {
  return (
    <div className="rounded-2xl border border-gold/15 bg-white shadow-soft transition-all duration-300 hover:border-gold/30 hover:shadow-luxe">
      <button
        onClick={setIsOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <h3 className="font-heading text-lg text-maroon">{q}</h3>
        <div className="relative h-6 w-6 shrink-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={isOpen ? 'minus' : 'plus'}
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              {isOpen ? (
                <Minus className="h-6 w-6 text-maroon/80" />
              ) : (
                <Plus className="h-6 w-6 text-maroon/80" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 font-body leading-relaxed text-charcoal/80">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Faq() {
  const { lang, t } = useApp();
  const items = faqData[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const middleIndex = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, middleIndex);
  const rightItems = items.slice(middleIndex);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <section id="faq" className="bg-ivory py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('faq.eyebrow')}
          title={t('faq.title')}
          subtitle={t('faq.subtitle')}
          className="text-center"
        />
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 lg:max-w-7xl lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-4">
            {leftItems.map((item, i) => (
              <FaqItem
                key={i}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                setIsOpen={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {rightItems.map((item, i) => (
              <FaqItem
                key={i + middleIndex}
                q={item.q}
                a={item.a}
                isOpen={openIndex === i + middleIndex}
                setIsOpen={() =>
                  setOpenIndex(openIndex === i + middleIndex ? null : i + middleIndex)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}