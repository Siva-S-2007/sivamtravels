'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { SectionHeading } from './Packages';
import { useApp } from '@/lib/app-context';
import type { Lang } from '@/lib/data';

const WHATSAPP_NUMBER = '917305707781';
const OFFICE_MAP_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Sivam Complex, 55/1 Karaikal Main Road, Thirunageswaram (Near Rahu Sthalam), Kumbakonam, Tamil Nadu 612204');

const contactInfo: Record<Lang, { office: string; phone1: string; phone2: string; whatsapp: string; mapLabel: string }> = {
  en: {
    office: 'Sivam Complex, 55/1 Karaikal Main Road, Thirunageswaram (Near Rahu Sthalam), Kumbakonam, Tamil Nadu 612204',
    phone1: '+91 73057 07781',
    phone2: '+91 99434 04224',
    whatsapp: '+91 73057 07781',
    mapLabel: 'Thirunageswaram, Kumbakonam',
  },
  ta: {
    office: 'சிவம் காம்ப்ளெக்ஸ், 55/1 காரைக்கால் மெயின் ரோடு, திருநாகேஸ்வரம் (ராகு ஸ்தலம் அருகே), கும்பகோணம், தமிழ்நாடு 612204',
    phone1: '+91 73057 07781',
    phone2: '+91 99434 04224',
    whatsapp: '+91 73057 07781',
    mapLabel: 'திருநாகேஸ்வரம், கும்பகோணம்',
  },
};

export default function Contact() {
  const { lang, t } = useApp();
  const info = contactInfo[lang];

  return (
    <section id="contact" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <ContactRow icon={<MapPin className="h-5 w-5" />} title={t('contact.office')}>
              {info.office}
            </ContactRow>
            <ContactRow icon={<Phone className="h-5 w-5" />} title={t('contact.phone')}>
              <a href="tel:+917305707781" className="hover:text-maroon">{info.phone1}</a>
              <br />
              <a href="tel:+919943404224" className="hover:text-maroon">{info.phone2}</a>
            </ContactRow>
            <ContactRow icon={<MessageCircle className="h-5 w-5" />} title="WhatsApp">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-maroon">
                {info.whatsapp}
              </a>
            </ContactRow>
            <ContactRow icon={<Clock className="h-5 w-5" />} title={t('contact.hours')}>
              {t('contact.hoursDetail')}
              <br />
              {t('contact.hoursNote')}
            </ContactRow>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 self-start rounded-full bg-maroon px-7 py-3.5 font-body text-sm text-ivory transition-all duration-300 hover:shadow-luxe"
              >
                <MessageCircle className="h-4 w-4" />
                {t('contact.whatsapp')}
              </a>
              <a
                href={OFFICE_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 self-start rounded-full border border-maroon px-7 py-3.5 font-body text-sm text-maroon transition-all duration-300 hover:bg-maroon hover:text-ivory"
              >
                <MapPin className="h-4 w-4" />
                {lang === 'en' ? 'Find Us' : 'எங்களைக் காண்க'}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative min-h-[400px] overflow-hidden rounded-2xl border border-gold/20 shadow-soft"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8E2D5] to-[#D9D2C2]">
              <svg className="h-full w-full opacity-40" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 120 L400 100" stroke="#6B1E1E" strokeWidth="1" opacity="0.3" />
                <path d="M0 200 L400 220" stroke="#6B1E1E" strokeWidth="1" opacity="0.3" />
                <path d="M0 280 L400 260" stroke="#6B1E1E" strokeWidth="1" opacity="0.3" />
                <path d="M80 0 L100 400" stroke="#6B1E1E" strokeWidth="1" opacity="0.3" />
                <path d="M200 0 L220 400" stroke="#6B1E1E" strokeWidth="1" opacity="0.3" />
                <path d="M320 0 L300 400" stroke="#6B1E1E" strokeWidth="1" opacity="0.3" />
                <path d="M50 350 Q150 250 250 300 T380 200" stroke="#C5A046" strokeWidth="2" fill="none" opacity="0.5" />
              </svg>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="relative flex h-16 w-16 items-center justify-center">
                <span className="absolute h-full w-full animate-ping rounded-full bg-maroon/20" />
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon text-ivory shadow-luxe">
                  <MapPin className="h-5 w-5" />
                </span>
              </span>
              <p className="mt-4 font-heading text-lg text-maroon">{info.mapLabel}</p>
              <p className="font-body text-xs text-charcoal/60">{t('contact.mapPlaceholder')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-gold/15 bg-white p-5 shadow-soft">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon/5 text-maroon">
        {icon}
      </span>
      <div>
        <h4 className="font-title text-xs tracking-[0.2em] text-gold">{title.toUpperCase()}</h4>
        <div className="mt-1.5 font-body text-sm leading-relaxed text-charcoal/80">{children}</div>
      </div>
    </div>
  );
}