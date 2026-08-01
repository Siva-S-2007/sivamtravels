'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpenText, Orbit, ScrollText } from 'lucide-react';
import Image from 'next/image';
import { useApp } from '@/lib/app-context';
import type { Lang } from '@/lib/data';

type GuideCard = {
  href: string;
  label: { en: string; ta: string };
  title: { en: string; ta: string };
  description: { en: string; ta: string };
  cta: { en: string; ta: string };
  Icon: typeof Orbit;
  heroImage: string;
  exploreText: { en: string; ta: string };
};

const guideCards: GuideCard[] = [
  {
    href: '/navagraha/order-to-visit',
    label: {
      en: 'Temple Guide',
      ta: 'கோயில் வழிகாட்டி',
    },
    title: {
      en: 'Navagraha Temple Order to Visit',
      ta: 'நவகிரக கோயில்கள் தரிசன வரிசை',
    },
    description: {
      en: 'Discover the traditional order for visiting all nine Navagraha temples from Kumbakonam, along with the most efficient pilgrimage route.',
      ta: 'கும்பகோணத்திலிருந்து ஒன்பது நவகிரக கோயில்களையும் தரிசிக்க பாரம்பரிய வரிசையும், சிறந்த யாத்திரை வழியும் இங்கே.',
    },
    cta: {
      en: 'View Temple Order ->',
      ta: 'வரிசையைக் காண்க ->',
    },
    Icon: Orbit,
    heroImage: '/navagrahatempleorder.jpg',
    exploreText: {
      en: 'Read More',
      ta: 'மேலும் படிக்க',
    },
  },
  {
    href: '/navagraha/doshas-remedies',
    label: {
      en: 'Spiritual Guide',
      ta: 'ஆன்மீக வழிகாட்டி',
    },
    title: {
      en: 'Navagraha Doshas & Remedies',
      ta: 'நவகிரக தோஷங்களும் பரிகாரங்களும்',
    },
    description: {
      en: 'Learn the significance of each planetary dosha, recommended temple visits, prayers, and traditional remedies followed by devotees.',
      ta: 'ஒவ்வொரு கிரக தோஷத்தின் பொருள், பரிகாரமாக செல்ல வேண்டிய கோயில்கள், பிரார்த்தனைகள் மற்றும் பக்தர்கள் பின்பற்றும் பாரம்பரிய பரிகாரங்களை அறிக.',
    },
    cta: {
      en: 'Explore Remedies ->',
      ta: 'பரிகாரங்களை ஆராய்க ->',
    },
    Icon: ScrollText,
    heroImage: '/navagrahadoshasandpariharam.png',
    exploreText: {
      en: 'Read More',
      ta: 'மேலும் படிக்க',
    },
  },
  {
    href: '/navagraha/history-beliefs',
    label: {
      en: 'History',
      ta: 'வரலாறு',
    },
    title: {
      en: 'Navagraha History & Beliefs',
      ta: 'நவகிரக வரலாறும் நம்பிக்கைகளும்',
    },
    description: {
      en: 'Explore the history of the Navagraha temples, their spiritual importance, and the beliefs associated with each planetary deity.',
      ta: 'நவகிரக கோயில்களின் வரலாறு, அவற்றின் ஆன்மீக முக்கியத்துவம் மற்றும் ஒவ்வொரு கிரக தெய்வத்துடன் தொடர்புடைய நம்பிக்கைகளை ஆராய்க.',
    },
    cta: {
      en: 'Read History ->',
      ta: 'வரலாற்றைப் படிக்க ->',
    },
    Icon: BookOpenText,
    heroImage: '/navagrahahistory.png',
    exploreText: {
      en: 'Read More',
      ta: 'மேலும் படிக்க',
    },
  },
];

export default function Navagraha() {
  const { lang } = useApp();

  return (
    <section id="navagraha" className="relative overflow-hidden bg-maroon-darker py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(107,30,30,0.06),_transparent_38%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(197,160,70,0.14),_transparent_42%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-title text-sm tracking-[0.38em] text-gold sm:text-base">
            {lang === 'ta' ? 'நவகிரக தகவல் வழிகாட்டி' : 'Navagraha Information Guide'}
          </p>
          <h2 className="mt-4 font-heading text-4xl font-medium text-white sm:text-5xl lg:text-[3.25rem]">
            {lang === 'ta'
              ? 'உங்கள் நவகிரக யாத்திரைக்கு முன் தேவையான அனைத்தும்'
              : 'Everything You Need Before Your Navagraha Pilgrimage'}
          </h2>
          <span className="mx-auto mt-5 block h-px w-16 bg-gold/50" />
          <p className="mt-6 font-body text-lg leading-relaxed text-white/80 sm:text-xl">
            {lang === 'ta'
              ? 'சரியான கோயில் தரிசன வரிசையை அறிந்து, ஒவ்வொரு நவகிரகத்தின் பொருளையும் புரிந்து, உங்கள் ஆன்மீக பயணத்தைத் தொடங்குவதற்கு முன் பாரம்பரிய பரிகாரங்களைக் கண்டறிக.'
              : 'Learn the correct temple visiting order, understand the significance of each Navagraha, and discover traditional remedies before beginning your spiritual journey.'}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {guideCards.map((card, i) => (
            <motion.article
              key={card.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold/15 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-maroon/5 to-gold/5">
                <Image
                  src={card.heroImage}
                  alt={card.title[lang]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 font-heading text-xl font-medium text-white">
                  {card.title[lang]}
                </h3>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <p className="font-body text-sm leading-relaxed text-charcoal/70">{card.description[lang]}</p>
                <div className="mt-auto flex flex-col gap-5">
                  <Link
                    href={card.href}
                    className="group/btn mt-auto inline-flex items-center justify-between rounded-full border border-gold/40 px-5 py-3 font-body text-sm text-maroon transition-all duration-300 hover:bg-maroon hover:text-ivory"
                  >
                    {card.exploreText[lang]}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}