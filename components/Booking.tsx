'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, User, Phone, CalendarDays, MapPin, Users, FileText, Package as PackageIcon } from 'lucide-react';
import { packages } from '@/lib/data';
import { useApp } from '@/lib/app-context';

const WHATSAPP_NUMBER = '919000000000';

export default function Booking() {
  const { lang, t, selectedPackageId, setSelectedPackageId, highlightBooking } = useApp();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    pickup: '',
    travelers: '',
    requests: '',
  });
  const [sent, setSent] = useState(false);

  const selectedPackage = packages.find((p) => p.id === selectedPackageId) ?? packages[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pkgName = selectedPackage.title[lang];
    const text =
      `🙏 ${lang === 'ta' ? 'புதிய சுற்றுப்பயண விசாரணை' : 'New Tour Enquiry'}\n\n` +
      `${lang === 'ta' ? 'பெயர்' : 'Name'}: ${form.name}\n` +
      `${lang === 'ta' ? 'தொலைபேசி' : 'Phone'}: ${form.phone}\n\n` +
      `${lang === 'ta' ? 'தேர்ந்தெடுத்த திட்டம்' : 'Selected Package'}:\n${pkgName}\n\n` +
      `${lang === 'ta' ? 'பயண தேதி' : 'Travel Date'}: ${form.date || '-'}\n` +
      `${lang === 'ta' ? 'பிக்அப் இடம்' : 'Pickup Location'}: ${form.pickup || '-'}\n` +
      `${lang === 'ta' ? 'பயணிகள்' : 'Travellers'}: ${form.travelers || '-'}\n\n` +
      `${lang === 'ta' ? 'சிறப்பு கோரிக்கைகள்' : 'Special Requests'}: ${form.requests || '-'}\n\n` +
      `${lang === 'ta' ? 'இந்த யாத்திரை குறித்து தயவுசெய்து என்னை தொடர்பு கொள்ளுங்கள்.' : 'Kindly contact me regarding this pilgrimage.'}\n\n` +
      `${lang === 'ta' ? 'நன்றி.' : 'Thank you.'}`;

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
              src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1000"
              alt="Devotee in prayer"
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
              {/* Selected package (pre-filled, read-only display) */}
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

              <div className="grid gap-4 sm:grid-cols-2">
                <Field icon={<CalendarDays className="h-4 w-4" />} label={t('booking.travelDate')}>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none [color-scheme:dark]"
                  />
                </Field>
                <Field icon={<MapPin className="h-4 w-4" />} label={t('booking.pickupLocation')}>
                  <input
                    value={form.pickup}
                    onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                    placeholder={t('booking.pickupPlaceholder')}
                    className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
                  />
                </Field>
              </div>

              <Field icon={<Users className="h-4 w-4" />} label={t('booking.travelers')}>
                <input
                  type="number"
                  min="1"
                  value={form.travelers}
                  onChange={(e) => setForm({ ...form, travelers: e.target.value })}
                  placeholder={t('booking.travelersPlaceholder')}
                  className="w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
                />
              </Field>

              <Field icon={<FileText className="h-4 w-4" />} label={t('booking.specialRequests')}>
                <textarea
                  value={form.requests}
                  onChange={(e) => setForm({ ...form, requests: e.target.value })}
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
