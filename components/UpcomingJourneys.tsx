'use client';

import { motion } from 'framer-motion';
import { Lock, Sparkles } from 'lucide-react';
import { SectionHeading } from './Packages';
import { useApp } from '@/lib/app-context';
import type { Lang } from '@/lib/data';

const journeys: Record<Lang, { title: string; desc: string; img: string }[]> = {
  en: [
    { title: 'Padal Petra Sthalam', desc: 'A grand pilgrimage covering the sacred Padal Petra Shiva Temples, the revered temples glorified in the devotional hymns of the Nayanmars, offering devotees a profound spiritual journey through Tamil Nadu\'s rich Shaivite heritage.', img: '/padal-petra.jpg' },
    { title: 'Pancha Bhootha Sthalams', desc: 'The five elemental temples of Lord Shiva — earth, water, fire, air, and space.', img: '/pancha-bhootha.jpg' },
    { title: 'Arupadai Veedu', desc: 'The six battle-camps of Lord Murugan, the most sacred shrines of the Tamil deity.', img: '/arupadai-veedu.jpg' },
    { title: 'Divya Desam', desc: 'The 108 temples consecrated by the Alwars in praise of Lord Vishnu.', img: '/divya-desam.jpg' },
  ],
  ta: [
    { title: 'பாடல் பெற்ற ஸ்தலம்', desc: 'நாயன்மார்களின் பக்தி பாடல்களில் புகழப்பட்ட புனித பாடல் பெற்ற சிவன் கோயில்களை உள்ளடக்கிய ஒரு பெரும் யாத்திரை, தமிழ்நாட்டின் சைவ பாரம்பரியம் நிறைந்த ஆன்மீக பயணத்தை பக்தர்களுக்கு வழங்குகிறது.', img: '/padal-petra.jpg' },
    { title: 'பஞ்ச பூத ஸ்தலங்கள்', desc: 'இறைவனின் ஐந்து பூத தலங்கள் — நிலம், நீர், நெருப்பு, காற்று, விண்வெளி.', img: '/pancha-bhootha.jpg' },
    { title: 'ஆறுபடை வீடு', desc: 'முருகப் பெருமானின் ஆறு போர் முகாம்கள், தமிழ் தெய்வத்தின் மிகப் புனித தலங்கள்.', img: '/arupadai-veedu.jpg' },
    { title: 'திவ்ய தேசம்', desc: 'ஆழ்வார்களால் திருமாலைப் போற்றி 108 கோயில்கள்.', img: '/divya-desam.jpg' },
  ],
};

export default function UpcomingJourneys() {
  const { lang, t } = useApp();
  const items = journeys[lang];

  return (
    <section className="relative bg-gradient-to-b from-ivory to-[#F3EFE5] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t('upcoming.eyebrow')}
          title={t('upcoming.title')}
          subtitle={t('upcoming.subtitle')}
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((j, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-white shadow-soft"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={j.img}
                  alt={j.title}
                  className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ivory/90 px-3 py-1 font-body text-xs tracking-wide text-maroon">
                  <Lock className="h-3 w-3" />
                  {t('upcoming.comingSoon')}
                </span>
                <h3 className="absolute bottom-4 left-5 right-5 font-heading text-xl text-white">{j.title}</h3>
              </div>
              <div className="p-5">
                <p className="font-body text-base leading-relaxed text-charcoal/70">{j.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 font-body text-sm tracking-wide text-gold">
                  <Sparkles className="h-3 w-3" />
                  {t('upcoming.comingSoon')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
