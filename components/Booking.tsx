'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, User, Phone, CalendarDays, MapPin, Users, FileText, Package as PackageIcon, Car, BedDouble, Baby } from 'lucide-react';
import { packages } from '@/lib/data';
import { useApp } from '@/lib/app-context';
import { asset } from '@/lib/utils';

const WHATSAPP_NUMBER = '917305707781';

export default function Booking() {
  const { lang, t, selectedPackageId, setSelectedPackageId, highlightBooking } = useApp();
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

  const selectedPackage = packages.find((p) => p.id === selectedPackageId) ?? packages[0];
  const isGroupTour = selectedPackageId === 'group-tour';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pkgName = selectedPackage.title[lang];
    const accommodationText =
      form.accommodation === 'yes'
        ? `Yes (${form.roomType || '-'} × ${form.roomCount || '-'})`
        : 'No';
    const text =
      `*Booking Request*\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n\n` +
      `Package: ${pkgName}\n` +
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
    <section id="booking" className="relative overflow-hidden bg-maroon py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,_rgba(197,160,70,0.1),_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[420px] overflow-hidden rounded-2xl border border-gold/20"
          >
            <img
              src={asset('/deities/rahu.jpg')}
              alt="Rahu deity"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-title text-xs tracking-[0.4em] text-gold">{t('booking.beginJourney')}</p>
              <h3 className="mt-3 font-heading text-3xl text-white">{t('booking.title')}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-white/75">{t('booking.subtitle')}</p>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className={`relative rounded-2xl border bg-gradient-to-br from-charcoal/30 to-transparent p-8 backdrop-blur-sm transition-all duration-700 lg:p-10 ${
              highlightBooking
                ? 'border-gold shadow-[0_0_40px_-4px_rgba(197,160,70,0.5)] ring-2 ring-gold/40'
                : 'border-gold/20'
            }`}
          >
            {highlightBooking && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 font-body text-xs font-medium text-maroon shadow-luxe"
              >
                {t('booking.selectedPackage')}: {selectedPackage.title[lang]}
              </motion.div>
            )}

            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-2xl text-white">{t('booking.heading')}</h3>
                <p className="font-body text-xs text-white/60">{t('booking.subheading')}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-4">
              {/* Selected package */}
              <div>
                <span className="mb-1.5 block font-body text-xs tracking-wide text-white/60">
                  {t('booking.selectedPackage')}
                </span>
                <div className="flex items-center gap-3 rounded-xl border border-gold/40 bg-gold/10 px-4 py-3">
                  <PackageIcon className="h-4 w-4 text-gold" />
                  <select
                    value={selectedPackageId}
                    onChange={(e) => setSelectedPackageId(e.target.value)}
                    className="w-full bg-transparent font-body text-sm text-white focus:outline-none"
                  >
                    {packages.map((p) => (
                      <option key={p.id} value={p.id} className="bg-maroon text-white">
                        {p.title[lang]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field icon={<User className="h-4 w-4" />} label={t('booking.name')}>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t('booking.namePlaceholder')}
                    className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
                  />
                </Field>
                <Field icon={<Phone className="h-4 w-4" />} label={t('booking.phone')}>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={t('booking.phonePlaceholder')}
                    className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
                  />
                </Field>
              </div>

              <div>
                <Field icon={<CalendarDays className="h-4 w-4" />} label={t('booking.travelDate')}>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none [color-scheme:dark]"
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field icon={<Users className="h-4 w-4" />} label={lang === 'en' ? 'Number of Adults' : 'பெரியவர்கள் எண்ணிக்கை'}>
                  <input
                    type="number"
                    min="1"
                    value={form.adults}
                    onChange={(e) => setForm({ ...form, adults: e.target.value })}
                    placeholder="0"
                    className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
                  />
                </Field>
                <Field icon={<Baby className="h-4 w-4" />} label={lang === 'en' ? 'Number of Children' : 'குழந்தைகள் எண்ணிக்கை'}>
                  <input
                    type="number"
                    min="0"
                    value={form.children}
                    onChange={(e) => setForm({ ...form, children: e.target.value })}
                    placeholder="0"
                    className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
                  />
                </Field>
              </div>

              {/* Vehicle Selection */}
              {!isGroupTour && (
                <div>
                  <span className="mb-1.5 block font-body text-xs tracking-wide text-white/60">
                    {lang === 'en' ? 'Vehicle Selection' : 'வாகன தேர்வு'}
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {['Sedan', 'SUV'].map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setForm({ ...form, vehicle: v })}
                        className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 font-body text-sm transition-all ${
                          form.vehicle === v
                            ? 'border-gold bg-gold/20 text-gold'
                            : 'border-gold/25 bg-white/5 text-white/70 hover:border-gold/50'
                        }`}
                      >
                        <Car className="h-4 w-4" />
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Accommodation */}
              <div>
                <span className="mb-1.5 block font-body text-xs tracking-wide text-white/60">
                  {lang === 'en' ? 'Accommodation' : 'தங்கும் வசதி'}
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, accommodation: 'yes' })}
                    className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 font-body text-sm transition-all ${
                      form.accommodation === 'yes'
                        ? 'border-gold bg-gold/20 text-gold'
                        : 'border-gold/25 bg-white/5 text-white/70 hover:border-gold/50'
                    }`}
                  >
                    <BedDouble className="h-4 w-4" />
                    {lang === 'en' ? 'Room Required' : 'அறை தேவை'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, accommodation: 'none', roomType: '', roomCount: '' })}
                    className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 font-body text-sm transition-all ${
                      form.accommodation === 'none'
                        ? 'border-gold bg-gold/20 text-gold'
                        : 'border-gold/25 bg-white/5 text-white/70 hover:border-gold/50'
                    }`}
                  >
                    {lang === 'en' ? 'No Room Required' : 'அறை தேவையில்லை'}
                  </button>
                </div>
              </div>

              {/* Room details (conditional) */}
              {form.accommodation === 'yes' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <Field icon={<BedDouble className="h-4 w-4" />} label={lang === 'en' ? 'Room Type' : 'அறை வகை'}>
                    <select
                      value={form.roomType}
                      onChange={(e) => setForm({ ...form, roomType: e.target.value })}
                      className="w-full bg-transparent text-sm text-white focus:outline-none"
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
                  <Field icon={<FileText className="h-4 w-4" />} label={lang === 'en' ? 'Number of Rooms' : 'அறைகள் எண்ணிக்கை'}>
                    <input
                      type="number"
                      min="1"
                      value={form.roomCount}
                      onChange={(e) => setForm({ ...form, roomCount: e.target.value })}
                      placeholder="1"
                      className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
                    />
                  </Field>
                </motion.div>
              )}

              <Field icon={<FileText className="h-4 w-4" />} label={t('booking.specialRequests')}>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder={t('booking.specialPlaceholder')}
                  rows={3}
                  className="w-full resize-none bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
                />
              </Field>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 font-body text-sm tracking-wide text-maroon transition-all duration-300 hover:shadow-luxe hover:brightness-105"
              >
                {sent ? t('booking.sending') : t('booking.send')}
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
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
      <span className="mb-1.5 block font-body text-xs tracking-wide text-white/60">{label}</span>
      <div className="flex items-center gap-2 rounded-xl border border-gold/25 bg-white/5 px-4 py-3 transition-colors focus-within:border-gold/60">
        <span className="text-gold/70">{icon}</span>
        {children}
      </div>
    </label>
  );
}