'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, ArrowLeft, Phone, Check, Car, Star, BedDouble, Send, User, CalendarDays, Users, Baby, FileText, Package as PackageIcon, MapPin, ExternalLink, Info } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { PackageDetail } from '@/lib/packages';
import type { Lang } from '@/lib/data';

const WHATSAPP_NUMBER = '917305707781';
const HOTEL_MAP_URL = 'https://maps.app.goo.gl/mg76WqWqs92dn1rC7';
const OFFICE_MAP_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Sivam Complex, 55/1 Karaikal Main Road, Thirunageswaram (Near Rahu Sthalam), Kumbakonam, Tamil Nadu 612204');

export default function PackagePageContent({ pkg, lang }: { pkg: PackageDetail; lang: Lang }) {
  const router = useRouter();
  const isGroupTour = pkg.slug === 'group-tour';
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    adults: '',
    children: '',
    vehicle: '',
    accommodation: 'none',
    roomType: '',
    roomCount: '',
    notes: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const accommodationText =
      form.accommodation === 'yes'
        ? `Yes (${form.roomType || '-'} × ${form.roomCount || '-'})`
        : 'No';
    const text =
      `*Booking Request*\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n\n` +
      `Package: ${pkg.title[lang]}\n` +
      `Travel Date: ${form.date || '-'}\n\n` +
      `Adults: ${form.adults || '-'}\n` +
      `Children: ${form.children || '-'}\n\n` +
      `Vehicle Selected: ${form.vehicle || '-'}\n` +
      `Accommodation: ${accommodationText}\n` +
      `Additional Notes: ${form.notes || '-'}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="bg-ivory">
      {/* Hero */}
      <section className="relative flex min-h-[460px] items-end overflow-hidden lg:min-h-[520px]">
        <div className="absolute inset-0">
          <img src={pkg.heroImage} alt={pkg.title[lang]} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 lg:px-10 lg:pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-2 mt-16 md:mt-0">
              <button
                onClick={() => router.push('/')}
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 font-body text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/25"
              >
                <ArrowLeft className="h-4 w-4" />
                {lang === 'en' ? 'Back to Home' : 'முகப்பிற்கு திரும்பு'}
              </button>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/90 px-5 py-2 font-body text-base tracking-wide text-maroon">
              <Clock className="h-4 w-4" />
              {pkg.duration[lang]}
            </span>
            <h1 className="mt-5 font-heading text-4xl font-medium text-white sm:text-5xl lg:text-6xl">{pkg.title[lang]}</h1>
            <p className="mt-3 max-w-2xl font-body text-lg leading-relaxed text-white/80">{pkg.tagline[lang]}</p>
            <div className="mt-5 flex flex-wrap items-center gap-6">
              <span className="font-title text-lg tracking-wide text-gold">
                {lang === 'en' ? 'Starting from' : 'தொடக்க விலை'} {pkg.startingPrice} {pkg.priceUnit[lang]}
              </span>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-body text-base text-maroon transition-all hover:shadow-luxe hover:brightness-105"
              >
                {lang === 'en' ? 'Book Now' : 'பதிவு செய்க'}
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel>{lang === 'en' ? 'Overview' : 'மேலோட்டம்'}</SectionLabel>
          <p className="mt-6 font-body text-xl leading-relaxed text-charcoal/80 sm:text-2xl">{pkg.overview[lang]}</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-gradient-to-b from-maroon/5 to-transparent py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <SectionLabel center>{lang === 'en' ? 'Tour Highlights' : 'சுற்றுப்பயண சிறப்பம்சங்கள்'}</SectionLabel>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pkg.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-4 rounded-xl border border-gold/15 bg-white p-5 shadow-soft"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Check className="h-5 w-5" />
                </span>
                <span className="font-body text-lg text-charcoal/80">{h[lang]}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary — Bordered grid table */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel center>{lang === 'en' ? 'Day-wise Itinerary' : 'நாள் வாரியாக பயணதிட்டம்'}</SectionLabel>
          {/* Desktop: bordered grid table */}
          <div className="mt-10 hidden overflow-hidden rounded-xl border border-charcoal/20 bg-white shadow-soft md:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-maroon">
                  <th className="border border-maroon/60 px-5 py-4 text-left font-title text-base tracking-widest text-gold">
                    {lang === 'en' ? 'DAY' : 'நாள்'}
                  </th>
                  <th className="border border-maroon/60 px-5 py-4 text-left font-title text-base tracking-widest text-gold">
                    {lang === 'en' ? 'TEMPLES / STOPS' : 'கோயில்கள் / நிறுத்தங்கள்'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {pkg.itinerary.map((day, di) =>
                  day.stops.length > 0 ? (
                    day.stops.map((stop, si) => (
                      <tr key={`${di}-${si}`} className="transition-colors hover:bg-gold/5">
                        {si === 0 ? (
                          <td
                            className="border border-charcoal/15 bg-maroon/5 px-5 py-4 align-top font-heading text-2xl font-semibold text-maroon"
                            rowSpan={day.stops.length}
                          >
                            {day.day[lang]}
                          </td>
                        ) : null}
                        <td className="border border-charcoal/15 px-5 py-4 font-body text-lg text-charcoal">
                          {(() => {
                            const title = stop.title[lang];
                            const separatorIndex = title.indexOf(' — ') !== -1 ? title.indexOf(' — ') : title.indexOf(' – ') !== -1 ? title.indexOf(' – ') : -1;
                            if (separatorIndex === -1) return title;
                            const templeName = title.substring(0, separatorIndex + 1);
                            const location = title.substring(separatorIndex + 2);
                            return (
                              <>
                                <span className="text-maroon">{templeName}</span>
                                <span>{location}</span>
                              </>
                            );
                          })()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr key={di}>
                      <td 
                        className="border border-charcoal/15 bg-maroon px-5 py-4 font-heading text-2xl font-semibold text-gold"
                        colSpan={2}
                      >
                        {day.day[lang]}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile: card layout */}
          <div className="mt-10 space-y-5 md:hidden">
            {pkg.itinerary.map((day, di) => (
              <div key={di} className="overflow-hidden rounded-xl border border-charcoal/20 bg-white shadow-soft">
                <div className="bg-maroon px-5 py-3">
                  <span className="font-heading text-xl font-semibold text-gold">{day.day[lang]}</span>
                </div>
                <ul className="divide-y divide-charcoal/10">
                  {day.stops.length > 0 ? (
                    day.stops.map((stop, si) => (
                      <li key={si} className="flex items-start gap-3 px-5 py-3">
                        <span className="font-body text-base">
                          {(() => {
                            const title = stop.title[lang];
                            const separatorIndex = title.indexOf(' — ') !== -1 ? title.indexOf(' — ') : title.indexOf(' – ') !== -1 ? title.indexOf(' – ') : -1;
                            if (separatorIndex === -1) return title;
                            const templeName = title.substring(0, separatorIndex + 1);
                            const location = title.substring(separatorIndex + 2);
                            return (
                              <>
                                <span className="text-maroon">{templeName}</span>
                                <span className="text-charcoal">{location}</span>
                              </>
                            );
                          })()}
                        </span>
                      </li>
                    ))
                  ) : null}
                </ul>
              </div>
            ))}
          </div>

          {pkg.customizableNote && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-gold/30 bg-gold/10 px-5 py-4">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-maroon" />
              <p className="font-body text-sm leading-relaxed text-maroon">{pkg.customizableNote[lang]}</p>
            </div>
          )}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gradient-to-b from-maroon/5 to-transparent py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <SectionLabel center>{lang === 'en' ? 'Pricing' : 'விலை விவரம்'}</SectionLabel>
          <div className="mt-10 text-center">
            <p className="font-body text-base text-charcoal/60">{lang === 'en' ? 'Starting From' : 'தொடக்க விலை'}</p>
            <p className="mt-2 font-heading text-5xl font-medium text-maroon lg:text-6xl">
              {pkg.startingPrice} <span className="text-2xl text-charcoal/60 lg:text-3xl">{pkg.priceUnit[lang]}</span>
            </p>
          </div>

          {/* Desktop: full table */}
          <div className="mt-10 hidden overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-soft md:block">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-maroon">
                    <th className="px-5 py-4 text-left font-title text-base tracking-wide text-gold">
                      {lang === 'en' ? 'Vehicle' : 'வாகனம்'}
                    </th>
                    <th className="px-5 py-4 text-left font-title text-base tracking-wide text-gold">
                      {lang === 'en' ? 'Capacity' : 'கொள்ளளவு'}
                    </th>
                    <th className="px-5 py-4 text-left font-title text-base tracking-wide text-gold">
                      {lang === 'en' ? 'Price' : 'விலை'}
                    </th>
                    <th className="px-5 py-4 text-left font-title text-base tracking-wide text-gold">
                      {lang === 'en' ? 'Coverage' : 'உள்ளடக்கம்'}
                    </th>
                    <th className="px-5 py-4 text-left font-title text-base tracking-wide text-gold">
                      {lang === 'en' ? 'Extra Km' : 'கூடுதல் கிமீ'}
                    </th>
                    <th className="px-5 py-4 text-left font-title text-base tracking-wide text-gold">
                      {lang === 'en' ? 'Extra Hr' : 'கூடுதல் மணி'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pkg.vehiclePricing.map((v, i) => (
                    <tr key={i} className="border-t border-gold/10 transition-colors hover:bg-gold/5">
                      <td className="px-5 py-4">
                        <span className="flex items-center gap-2.5 font-body text-base text-charcoal">
                          <Car className="h-5 w-5 text-gold/60" />
                          <span>
                            {v.vehicle}
                            <span className="block font-body text-xs text-charcoal/50">{v.models}</span>
                          </span>
                        </span>
                      </td>
                      <td className="px-5 py-4 font-body text-base text-charcoal/70">{v.capacity}</td>
                      <td className="px-5 py-4 font-title text-base text-maroon">{v.pricePerDay}</td>
                      <td className="px-5 py-4 font-body text-base text-charcoal/70">{v.coverage}</td>
                      <td className="px-5 py-4 font-body text-base text-charcoal/70">{v.extraKm}</td>
                      <td className="px-5 py-4 font-body text-base text-charcoal/70">{v.extraHr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile: card layout with all fields */}
          <div className="mt-10 space-y-4 md:hidden">
            {pkg.vehiclePricing.map((v, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-soft">
                <div className="flex items-center gap-3 border-b border-gold/15 bg-maroon/5 px-5 py-4">
                  <Car className="h-5 w-5 text-gold" />
                  <div>
                    <p className="font-body text-base font-semibold text-charcoal">{v.vehicle}</p>
                    <p className="font-body text-xs text-charcoal/50">{v.models}</p>
                  </div>
                </div>
                <dl className="divide-y divide-charcoal/10">
                  <div className="flex items-center justify-between px-5 py-3">
                    <dt className="font-title text-xs tracking-wide text-gold">{lang === 'en' ? 'CAPACITY' : 'கொள்ளளவு'}</dt>
                    <dd className="font-body text-sm text-charcoal/80">{v.capacity}</dd>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3">
                    <dt className="font-title text-xs tracking-wide text-gold">{lang === 'en' ? 'PRICE' : 'விலை'}</dt>
                    <dd className="font-title text-sm text-maroon">{v.pricePerDay}</dd>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3">
                    <dt className="font-title text-xs tracking-wide text-gold">{lang === 'en' ? 'COVERAGE' : 'உள்ளடக்கம்'}</dt>
                    <dd className="font-body text-sm text-charcoal/80">{v.coverage}</dd>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3">
                    <dt className="font-title text-xs tracking-wide text-gold">{lang === 'en' ? 'EXTRA KM' : 'கூடுதல் கிமீ'}</dt>
                    <dd className="font-body text-sm text-charcoal/80">{v.extraKm}</dd>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3">
                    <dt className="font-title text-xs tracking-wide text-gold">{lang === 'en' ? 'EXTRA HR' : 'கூடுதல் மணி'}</dt>
                    <dd className="font-body text-sm text-charcoal/80">{v.extraHr}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          {/* Pricing disclaimer — more visible */}
          <div className="mt-5 flex items-start gap-3 rounded-xl border border-gold/30 bg-gold/10 px-5 py-4">
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-maroon text-xs text-gold">!</span>
            <p className="font-body text-base font-medium leading-relaxed text-maroon">{pkg.pricingNote[lang]}</p>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      {pkg.hasAccommodation && pkg.roomPricing && (
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <SectionLabel center>{lang === 'en' ? 'Optional Stay' : 'விருப்ப தங்கல்'}</SectionLabel>
            <div className="mt-10 overflow-hidden rounded-2xl border border-gold/20 bg-white shadow-soft">
              <div className="border-b border-gold/15 bg-gradient-to-r from-maroon/5 to-gold/5 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <BedDouble className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-medium text-maroon">{pkg.accommodationTitle?.[lang]}</h3>
                    <p className="mt-1 font-body text-base text-charcoal/70">{pkg.accommodationDescription?.[lang]}</p>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-maroon/5">
                      <th className="px-6 py-3 text-left font-title text-base tracking-wide text-maroon">
                        {lang === 'en' ? 'Room' : 'அறை'}
                      </th>
                      <th className="px-6 py-3 text-right font-title text-base tracking-wide text-maroon">Non A/C</th>
                      <th className="px-6 py-3 text-right font-title text-base tracking-wide text-maroon">A/C</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pkg.roomPricing.map((r, i) => (
                      <tr key={i} className="border-t border-gold/10 transition-colors hover:bg-gold/5">
                        <td className="px-6 py-3 font-body text-base text-charcoal">{r.room[lang]}</td>
                        <td className="px-6 py-3 text-right font-title text-base text-charcoal/80">{r.nonAc}</td>
                        <td className="px-6 py-3 text-right font-title text-base text-charcoal/80">{r.ac}</td>
                      </tr>
                    ))}
                    <tr className="border-t border-gold/10">
                      <td className="px-6 py-3 font-body text-base text-charcoal/60" colSpan={3}>
                        {lang === 'en' ? 'Extra Person' : 'கூடுதல் நபர்'}: {pkg.accommodationExtraPerson}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="border-t border-gold/15 p-5">
                <a
                  href={HOTEL_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-6 py-3 font-body text-base text-maroon transition-all hover:bg-maroon hover:text-ivory"
                >
                  <MapPin className="h-5 w-5" />
                  {lang === 'en' ? 'View Hotel' : 'விடுதியைக் காண்க'}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Booking Form */}
      <section id="booking" className="relative overflow-hidden bg-maroon py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,_rgba(197,160,70,0.1),_transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
          <div className="text-center">
            <Star className="mx-auto h-10 w-10 text-gold" />
            <h2 className="mt-5 font-heading text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
              {lang === 'en' ? `Book Your ${pkg.title.en}` : `உங்கள் ${pkg.title.ta} பதிவு செய்க`}
            </h2>
            <p className="mt-3 font-body text-lg text-white/70">
              {lang === 'en' ? 'Fill in your details and we will send your booking request directly to our team.' : 'உங்கள் விவரங்களை நிரப்புங்கள், உங்கள் பதிவு கோரிக்கை நேரடியாக எங்கள் குழுவிற்கு அனுப்பப்படும்.'}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5 rounded-2xl border border-gold/20 bg-gradient-to-br from-charcoal/30 to-transparent p-8 backdrop-blur-sm lg:p-10"
          >
            <div>
              <span className="mb-2 block font-body text-sm tracking-wide text-white/60">
                {lang === 'en' ? 'Package Selected' : 'தேர்ந்தெடுக்கப்பட்ட தொகுப்பு'}
              </span>
              <div className="flex items-center gap-3 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3.5">
                <PackageIcon className="h-5 w-5 text-gold" />
                <span className="font-body text-base text-white">{pkg.title[lang]}</span>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field icon={<User className="h-5 w-5" />} label={lang === 'en' ? 'Name' : 'பெயர்'}>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={lang === 'en' ? 'Your full name' : 'உங்கள் முழு பெயர்'}
                  className="w-full bg-transparent text-base text-white placeholder-white/40 focus:outline-none"
                />
              </Field>
              <Field icon={<Phone className="h-5 w-5" />} label={lang === 'en' ? 'Mobile Number' : 'மொபைல் எண்'}>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="98765 43210"
                  className="w-full bg-transparent text-base text-white placeholder-white/40 focus:outline-none"
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field icon={<CalendarDays className="h-5 w-5" />} label={lang === 'en' ? 'Preferred Travel Date' : 'விருப்பப்பட்ட பயண தேதி'}>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-transparent text-base text-white placeholder-white/40 focus:outline-none [color-scheme:dark]"
                />
              </Field>
              <Field icon={<Users className="h-5 w-5" />} label={lang === 'en' ? 'Number of Adults' : 'பெரியவர்கள் எண்ணிக்கை'}>
                <input
                  type="number"
                  min="1"
                  value={form.adults}
                  onChange={(e) => setForm({ ...form, adults: e.target.value })}
                  placeholder="0"
                  className="w-full bg-transparent text-base text-white placeholder-white/40 focus:outline-none"
                />
              </Field>
            </div>

            <Field icon={<Baby className="h-5 w-5" />} label={lang === 'en' ? 'Number of Children' : 'குழந்தைகள் எண்ணிக்கை'}>
              <input
                type="number"
                min="0"
                value={form.children}
                onChange={(e) => setForm({ ...form, children: e.target.value })}
                placeholder="0"
                className="w-full bg-transparent text-base text-white placeholder-white/40 focus:outline-none"
              />
            </Field>

            {/* Vehicle */}
            {!isGroupTour && (
              <div>
                <span className="mb-2 block font-body text-sm tracking-wide text-white/60">
                  {lang === 'en' ? 'Vehicle Selection' : 'வாகன தேர்வு'}
                </span>
                <div className="grid grid-cols-2 gap-4">
                  {['Sedan', 'SUV'].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setForm({ ...form, vehicle: v })}
                      className={`flex items-center justify-center gap-2 rounded-xl border px-5 py-3.5 font-body text-base transition-all ${
                        form.vehicle === v
                          ? 'border-gold bg-gold/20 text-gold'
                          : 'border-gold/25 bg-white/5 text-white/70 hover:border-gold/50'
                      }`}
                    >
                      <Car className="h-5 w-5" />
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Accommodation */}
            <div>
              <span className="mb-2 block font-body text-sm tracking-wide text-white/60">
                {lang === 'en' ? 'Accommodation' : 'தங்கும் வசதி'}
              </span>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, accommodation: 'yes' })}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-5 py-3.5 font-body text-base transition-all ${
                    form.accommodation === 'yes'
                      ? 'border-gold bg-gold/20 text-gold'
                      : 'border-gold/25 bg-white/5 text-white/70 hover:border-gold/50'
                  }`}
                >
                  <BedDouble className="h-5 w-5" />
                  {lang === 'en' ? 'Room Required' : 'அறை தேவை'}
                </button>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, accommodation: 'none', roomType: '', roomCount: '' })}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-5 py-3.5 font-body text-base transition-all ${
                    form.accommodation === 'none'
                      ? 'border-gold bg-gold/20 text-gold'
                      : 'border-gold/25 bg-white/5 text-white/70 hover:border-gold/50'
                  }`}
                >
                  {lang === 'en' ? 'No Room Required' : 'அறை தேவையில்லை'}
                </button>
              </div>
            </div>

            {form.accommodation === 'yes' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="grid gap-5 sm:grid-cols-2"
              >
                <Field icon={<BedDouble className="h-5 w-5" />} label={lang === 'en' ? 'Room Type' : 'அறை வகை'}>
                  <select
                    value={form.roomType}
                    onChange={(e) => setForm({ ...form, roomType: e.target.value })}
                    className="w-full bg-transparent text-base text-white focus:outline-none"
                  >
                    <option value="" className="bg-maroon text-white">{lang === 'en' ? 'Select' : 'தேர்வு'}</option>
                    <option value="Single (Non-AC) — ₹900" className="bg-maroon text-white">Single Bed (Non-AC) — ₹900</option>
                    <option value="Double (Non-AC) — ₹1,300" className="bg-maroon text-white">Double Bed (Non-AC) — ₹1,300</option>
                    <option value="Double (AC) — ₹1,600" className="bg-maroon text-white">Double Bed (AC) — ₹1,600</option>
                    <option value="Deluxe Double (Non-AC) — ₹1,500" className="bg-maroon text-white">Deluxe Double (Non-AC) — ₹1,500</option>
                    <option value="Deluxe Double (AC) — ₹1,800" className="bg-maroon text-white">Deluxe Double (AC) — ₹1,800</option>
                    <option value="Three Bed (Non-AC) — ₹2,300" className="bg-maroon text-white">Three Bed (Non-AC) — ₹2,300</option>
                    <option value="Three Bed (AC) — ₹2,600" className="bg-maroon text-white">Three Bed (AC) — ₹2,600</option>
                    <option value="Four Bed (Non-AC) — ₹3,000" className="bg-maroon text-white">Four Bed (Non-AC) — ₹3,000</option>
                    <option value="Four Bed (AC) — ₹3,300" className="bg-maroon text-white">Four Bed (AC) — ₹3,300</option>
                  </select>
                </Field>
                <Field icon={<FileText className="h-5 w-5" />} label={lang === 'en' ? 'Number of Rooms' : 'அறைகள் எண்ணிக்கை'}>
                  <input
                    type="number"
                    min="1"
                    value={form.roomCount}
                    onChange={(e) => setForm({ ...form, roomCount: e.target.value })}
                    placeholder="1"
                    className="w-full bg-transparent text-base text-white placeholder-white/40 focus:outline-none"
                  />
                </Field>
              </motion.div>
            )}

            <Field icon={<FileText className="h-5 w-5" />} label={lang === 'en' ? 'Additional Notes' : 'கூடுதல் குறிப்புகள்'}>
              <textarea
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder={lang === 'en' ? 'Any special requests...' : 'சிறப்பு கோரிக்கைகள்...'}
                rows={3}
                className="w-full resize-none bg-transparent text-base text-white placeholder-white/40 focus:outline-none"
              />
            </Field>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-base tracking-wide text-maroon transition-all duration-300 hover:shadow-luxe hover:brightness-105"
            >
              {sent ? (lang === 'en' ? 'Opening WhatsApp...' : 'வாட்ஸ்அப் திறக்கிறது...') : (lang === 'en' ? 'Send Booking Request' : 'பதிவு கோரிக்கை அனுப்பு')}
              <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-body text-base text-white backdrop-blur-sm transition-all hover:border-gold/60 hover:text-gold"
            >
              <Phone className="h-5 w-5" />
              {lang === 'en' ? 'Call Now' : 'இப்போது அழைக்க'}
            </a>
            <a
              href={OFFICE_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-body text-base text-white backdrop-blur-sm transition-all hover:border-gold/60 hover:text-gold"
            >
              <MapPin className="h-5 w-5" />
              {lang === 'en' ? 'Find Us' : 'எங்களைக் காண்க'}
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
      <p className="font-title text-base font-semibold tracking-[0.3em] text-gold">{children}</p>
      <span className={`mt-4 block h-px w-20 bg-gold/50 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-body text-sm tracking-wide text-white/60">{label}</span>
      <div className="flex items-center gap-3 rounded-xl border border-gold/25 bg-white/5 px-4 py-3.5 transition-colors focus-within:border-gold/60">
        <span className="text-gold/70">{icon}</span>
        {children}
      </div>
    </label>
  );
}