'use client';

import { motion } from 'framer-motion';
import { Clock, ArrowRight, Phone, Check, MapPin, Car, Star, BedDouble, ChevronRight } from 'lucide-react';
import type { PackageDetail } from '@/lib/packages';
import type { Lang } from '@/lib/data';

const WHATSAPP_NUMBER = '919876543210';

export default function PackagePageContent({ pkg, lang }: { pkg: PackageDetail; lang: Lang }) {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`I'm interested in the ${pkg.title.en} package`)}`;
  const callLink = `tel:+${WHATSAPP_NUMBER}`;

  return (
    <div className="bg-ivory">
      {/* Hero */}
      <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={pkg.heroImage} alt={pkg.title[lang]} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 lg:px-10 lg:pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/90 px-4 py-1.5 font-body text-xs tracking-wide text-maroon">
              <Clock className="h-3 w-3" />
              {pkg.duration[lang]}
            </span>
            <h1 className="mt-5 font-heading text-4xl font-medium text-white sm:text-5xl lg:text-6xl">{pkg.title[lang]}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <span className="font-title text-sm tracking-wide text-gold">
                {lang === 'en' ? 'Starting from' : 'தொடக்க விலை'} {pkg.startingPrice} {pkg.priceUnit[lang]}
              </span>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 font-body text-sm text-maroon transition-all hover:shadow-luxe hover:brightness-105"
              >
                {lang === 'en' ? 'Book on WhatsApp' : 'வாட்ஸ்அப்பில் பதிவு செய்க'}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel>{lang === 'en' ? 'Overview' : 'மேலோட்டம்'}</SectionLabel>
          <p className="mt-6 font-body text-lg leading-relaxed text-charcoal/80">{pkg.overview[lang]}</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-gradient-to-b from-maroon/5 to-transparent py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <SectionLabel center>{lang === 'en' ? 'Tour Highlights' : 'சுற்றுப்பயண சிறப்பம்சங்கள்'}</SectionLabel>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pkg.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-3 rounded-xl border border-gold/15 bg-white p-4 shadow-soft"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-4 w-4" />
                </span>
                <span className="font-body text-sm text-charcoal/80">{h[lang]}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel center>{lang === 'en' ? 'Day-wise Itinerary' : 'நாள் வாரியாக பயணதிட்டம்'}</SectionLabel>
          <div className="mt-14 space-y-10">
            {pkg.itinerary.map((day, di) => (
              <div key={di}>
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon font-title text-sm text-gold">
                    {di + 1}
                  </span>
                  <h3 className="font-heading text-2xl font-medium text-maroon">{day.day[lang]}</h3>
                </div>
                <div className="relative ml-5 border-l-2 border-gold/30 pl-8">
                  {day.stops.length === 0 ? (
                    <p className="font-body text-sm italic text-charcoal/50">{day.day[lang]}</p>
                  ) : (
                    day.stops.map((stop, si) => (
                      <motion.div
                        key={si}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-30px' }}
                        transition={{ duration: 0.4, delay: si * 0.05 }}
                        className="relative mb-6 last:mb-0"
                      >
                        <span className="absolute -left-[34px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-gold bg-ivory">
                          <MapPin className="h-2.5 w-2.5 text-gold" />
                        </span>
                        <div className="rounded-xl border border-gold/15 bg-white p-4 shadow-soft">
                          <p className="font-heading text-lg text-charcoal">{stop.title[lang]}</p>
                        </div>
                        {si < day.stops.length - 1 && (
                          <ChevronRight className="absolute -left-[30px] top-8 h-4 w-4 -rotate-90 text-gold/40" />
                        )}
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gradient-to-b from-maroon/5 to-transparent py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel center>{lang === 'en' ? 'Pricing' : 'விலை விவரம்'}</SectionLabel>
          <div className="mt-10 text-center">
            <p className="font-body text-sm text-charcoal/60">{lang === 'en' ? 'Starting From' : 'தொடக்க விலை'}</p>
            <p className="mt-2 font-heading text-5xl font-medium text-maroon">
              {pkg.startingPrice} <span className="text-2xl text-charcoal/60">{pkg.priceUnit[lang]}</span>
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-maroon">
                    <th className="px-6 py-4 text-left font-title text-sm tracking-wide text-gold">
                      {lang === 'en' ? 'Vehicle' : 'வாகனம்'}
                    </th>
                    <th className="px-6 py-4 text-left font-title text-sm tracking-wide text-gold">
                      {lang === 'en' ? 'Capacity' : 'கொள்ளளவு'}
                    </th>
                    <th className="px-6 py-4 text-right font-title text-sm tracking-wide text-gold">
                      {lang === 'en' ? 'Trip Price' : 'பயண விலை'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pkg.vehiclePricing.map((v, i) => (
                    <tr key={i} className="border-t border-gold/10 transition-colors hover:bg-gold/5">
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-2 font-body text-sm text-charcoal">
                          <Car className="h-4 w-4 text-gold/60" />
                          {v.vehicle}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-body text-sm text-charcoal/70">{v.capacity}</td>
                      <td className="px-6 py-4 text-right font-title text-sm text-maroon">{v.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-center font-body text-xs text-charcoal/50">{pkg.pricingNote[lang]}</p>
        </div>
      </section>

      {/* Accommodation */}
      {pkg.hasAccommodation && pkg.roomPricing && (
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <SectionLabel center>{lang === 'en' ? 'Optional Stay' : 'விருப்ப தங்கல்'}</SectionLabel>
            <div className="mt-10 overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-soft">
              <div className="border-b border-gold/15 bg-gradient-to-r from-maroon/5 to-gold/5 p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <BedDouble className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-medium text-maroon">{pkg.accommodationTitle?.[lang]}</h3>
                    <p className="mt-1 font-body text-sm text-charcoal/70">{pkg.accommodationDescription?.[lang]}</p>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-maroon/5">
                      <th className="px-6 py-3 text-left font-title text-sm tracking-wide text-maroon">
                        {lang === 'en' ? 'Room' : 'அறை'}
                      </th>
                      <th className="px-6 py-3 text-right font-title text-sm tracking-wide text-maroon">Non A/C</th>
                      <th className="px-6 py-3 text-right font-title text-sm tracking-wide text-maroon">A/C</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pkg.roomPricing.map((r, i) => (
                      <tr key={i} className="border-t border-gold/10 transition-colors hover:bg-gold/5">
                        <td className="px-6 py-3 font-body text-sm text-charcoal">{r.room[lang]}</td>
                        <td className="px-6 py-3 text-right font-title text-sm text-charcoal/80">{r.nonAc}</td>
                        <td className="px-6 py-3 text-right font-title text-sm text-charcoal/80">{r.ac}</td>
                      </tr>
                    ))}
                    <tr className="border-t border-gold/10">
                      <td className="px-6 py-3 font-body text-sm text-charcoal/60" colSpan={3}>
                        {lang === 'en' ? 'Extra Person' : 'கூடுதல் நபர்'}: {pkg.accommodationExtraPerson}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="border-t border-gold/15 p-6">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 font-body text-sm text-maroon transition-all hover:bg-maroon hover:text-ivory"
                >
                  {lang === 'en' ? 'View Room Options' : 'அறை விருப்பங்களைப் பார்க்க'}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="bg-gradient-to-b from-maroon/5 to-transparent py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <SectionLabel center>{lang === 'en' ? 'Gallery' : 'படத்தொகுப்பு'}</SectionLabel>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {pkg.galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-gold/15 shadow-soft"
              >
                <img
                  src={img}
                  alt={`${pkg.title[lang]} ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-maroon py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.12)_0%,_transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Star className="mx-auto h-8 w-8 text-gold" />
          <h2 className="mt-6 font-heading text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
            {lang === 'en' ? `Ready for your ${pkg.title.en}?` : `உங்கள் ${pkg.title.ta} தயாரா?`}
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-body text-sm text-maroon transition-all hover:shadow-luxe hover:brightness-105"
            >
              {lang === 'en' ? 'Book on WhatsApp' : 'வாட்ஸ்அப்பில் பதிவு செய்க'}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={callLink}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-3.5 font-body text-sm text-white backdrop-blur-sm transition-all hover:border-gold/60 hover:text-gold"
            >
              <Phone className="h-4 w-4" />
              {lang === 'en' ? 'Call Now' : 'இப்போது அழைக்க'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionLabel({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <p className="font-title text-sm font-semibold tracking-[0.3em] text-gold">{children}</p>
      <span className={`mt-4 block h-px w-16 bg-gold/50 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}
