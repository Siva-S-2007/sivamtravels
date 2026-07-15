'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowRight, X, Check, Minus, Sparkles } from 'lucide-react';
import { packages, type Package } from '@/lib/data';
import { useApp } from '@/lib/app-context';

const heroImages = [
  '/gallery/suryangallery.png',
  '/gallery/sevvaigallery.png',
  '/gallery/sanigallery.png',
];

export default function Packages() {
  const { lang, t } = useApp();
  const [active, setActive] = useState<Package | null>(null);

  return (
    <section id="packages" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t('packages.eyebrow')}
          title={t('packages.title')}
          subtitle={t('packages.subtitle')}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-gold/15 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={heroImages[i]}
                  alt={pkg.title[lang]}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/20 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-ivory/90 px-3 py-1 font-body text-xs tracking-wide text-maroon">
                  <Clock className="h-3 w-3" />
                  {pkg.duration[lang]}
                </span>
                <h3 className="absolute bottom-5 left-5 right-5 font-heading text-2xl font-medium text-white">
                  {pkg.title[lang]}
                </h3>
              </div>

              <div className="flex flex-col gap-5 p-6">
                <p className="font-body text-sm leading-relaxed text-charcoal/70">{pkg.tagline[lang]}</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-title text-xs tracking-wide text-charcoal/50">{t('packages.price')}</span>
                  <span className="font-title text-lg tracking-wide text-gold">{pkg.price}</span>
                  <span className="font-body text-xs text-charcoal/50">{t('packages.perPerson')}</span>
                </div>
                <button
                  onClick={() => setActive(pkg)}
                  className="group/btn inline-flex items-center justify-between rounded-full border border-gold/40 px-5 py-3 font-body text-sm text-maroon transition-all duration-300 hover:bg-maroon hover:text-ivory"
                >
                  {t('packages.explore')}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <PackageModal pkg={active} onClose={() => setActive(null)} />
    </section>
  );
}

function PackageModal({ pkg, onClose }: { pkg: Package | null; onClose: () => void }) {
  const { lang, t, setSelectedPackageId, triggerBookingHighlight } = useApp();

  const handleBook = () => {
    if (pkg) setSelectedPackageId(pkg.id);
    onClose();
    triggerBookingHighlight();
    setTimeout(() => {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <AnimatePresence>
      {pkg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-charcoal/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-8 w-full max-w-3xl overflow-hidden rounded-2xl bg-ivory shadow-luxe"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/80 text-charcoal backdrop-blur transition-colors hover:bg-maroon hover:text-ivory"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative h-44 overflow-hidden">
              <img
                src={heroImages[packages.findIndex((p) => p.id === pkg.id)]}
                alt={pkg.title[lang]}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 to-transparent" />
              <div className="absolute bottom-5 left-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/90 px-3 py-1 font-body text-xs tracking-wide text-maroon">
                  <Clock className="h-3 w-3" />
                  {pkg.duration[lang]}
                </span>
                <h3 className="mt-3 font-heading text-3xl font-medium text-white">{pkg.title[lang]}</h3>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-6 lg:p-8">
              <p className="font-body text-base leading-relaxed text-charcoal/80">{pkg.overview[lang]}</p>

              <h4 className="mt-8 flex items-center gap-2 font-title text-sm tracking-[0.2em] text-maroon">
                <Sparkles className="h-4 w-4 text-gold" />
                {t('packages.itinerary')}
              </h4>
              <ol className="mt-4 space-y-4 border-l border-gold/30 pl-5">
                {pkg.timeline.map((item, i) => (
                  <li key={i} className="relative">
                    <span className="absolute -left-[26px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-gold bg-ivory" />
                    <p className="font-body text-xs tracking-wide text-gold">{item.time}</p>
                    <p className="font-heading text-lg text-charcoal">{item.title[lang]}</p>
                    <p className="mt-0.5 font-body text-sm leading-relaxed text-charcoal/70">{item.description[lang]}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h4 className="font-title text-xs tracking-[0.2em] text-maroon">{t('packages.inclusions')}</h4>
                  <ul className="mt-3 space-y-2">
                    {pkg.inclusions.map((inc) => (
                      <li key={inc.en} className="flex items-start gap-2 font-body text-sm text-charcoal/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />
                        {inc[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-title text-xs tracking-[0.2em] text-maroon">{t('packages.exclusions')}</h4>
                  <ul className="mt-3 space-y-2">
                    {pkg.exclusions.map((exc) => (
                      <li key={exc.en} className="flex items-start gap-2 font-body text-sm text-charcoal/60">
                        <Minus className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />
                        {exc[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl bg-maroon/5 p-5 sm:flex-row">
                <div>
                  <p className="font-title text-sm tracking-wide text-gold">
                    {t('packages.price')} {pkg.price} {t('packages.perPerson')}
                  </p>
                  <p className="font-body text-xs text-charcoal/60">{t('packages.allInclusive')}</p>
                </div>
                <button
                  onClick={handleBook}
                  className="group inline-flex items-center gap-2 rounded-full bg-maroon px-7 py-3 font-body text-sm text-ivory transition-all duration-300 hover:shadow-luxe"
                >
                  {t('packages.bookJourney')}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="font-title text-sm font-semibold tracking-[0.3em] text-gold sm:text-base">{eyebrow}</p>
      <h2
        className={`mt-4 font-heading text-4xl font-medium sm:text-5xl lg:text-[3.25rem] ${
          light ? 'text-white' : 'text-maroon'
        }`}
      >
        {title}
      </h2>
      <span className="mx-auto mt-5 block h-px w-16 bg-gold/50" />
      {subtitle && (
        <p className={`mt-6 font-body text-base leading-relaxed sm:text-lg ${light ? 'text-white/75' : 'text-charcoal/70'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
