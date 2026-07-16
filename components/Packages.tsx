'use client';

import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { packages } from '@/lib/data';
import { useApp } from '@/lib/app-context';

export default function Packages() {
  const { lang, t } = useApp();
  const router = useRouter();

  return (
    <section id="packages" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t('packages.eyebrow')}
          title={t('packages.title')}
          subtitle={t('packages.subtitle')}
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold/15 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-maroon/5 to-gold/5">
                <img
                  src={pkg.heroImage}
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

              <div className="flex flex-1 flex-col gap-5 p-6">
                <p className="font-body text-sm leading-relaxed text-charcoal/70">{pkg.tagline[lang]}</p>
                <div className="mt-auto flex flex-col gap-5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-title text-xs tracking-wide text-charcoal/50">{t('packages.price')}</span>
                    <span className="font-title text-lg tracking-wide text-gold">{pkg.price}</span>
                    <span className="font-body text-xs text-charcoal/50">{pkg.priceUnit[lang]}</span>
                  </div>
                  <button
                    onClick={() => router.push(`/packages/${pkg.id}`)}
                    className="group/btn inline-flex items-center justify-between rounded-full border border-gold/40 px-5 py-3 font-body text-sm text-maroon transition-all duration-300 hover:bg-maroon hover:text-ivory"
                  >
                    {t('packages.explore')}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
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
