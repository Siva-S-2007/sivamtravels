'use client';

import { MapPin, Phone, Mail, ArrowUp, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { useApp } from '@/lib/app-context';
import type { TranslationKey } from '@/lib/translations';
import type { Lang } from '@/lib/data';

const WHATSAPP_NUMBER = '917305707781';
const OFFICE_MAP_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Sivam Complex, 55/1 Karaikal Main Road, Thirunageswaram (Near Rahu Sthalam), Kumbakonam, Tamil Nadu 612204');

const quickLinks: { label: TranslationKey; href: string }[] = [
  { label: 'nav.home', href: '#home' },
  { label: 'nav.packages', href: '#packages' },
  { label: 'nav.navagraha', href: '#navagraha' },
  { label: 'nav.gallery', href: '#gallery' },
  { label: 'nav.bookNow', href: '#booking' },
  { label: 'nav.contact', href: '#contact' },
];

const footerContact: Record<Lang, { address: string; phone1: string; phone2: string; whatsapp: string; email: string }> = {
  en: {
    address: 'Sivam Complex, 55/1 Karaikal Main Road, Thirunageswaram (Near Rahu Sthalam), Kumbakonam, Tamil Nadu 612204',
    phone1: '+91 73057 07781',
    phone2: '+91 99434 04224',
    whatsapp: '+91 73057 07781',
    email: 'info@sivamtravels.com',
  },
  ta: {
    address: 'சிவம் காம்ப்ளெக்ஸ், 55/1 காரைக்கால் மெயின் ரோடு, திருநாகேஸ்வரம் (ராகு ஸ்தலம் அருகே), கும்பகோணம், தமிழ்நாடு 612204',
    phone1: '+91 73057 07781',
    phone2: '+91 99434 04224',
    whatsapp: '+91 73057 07781',
    email: 'info@sivamtravels.com',
  },
};

export default function Footer() {
  const { lang, t } = useApp();
  const info = footerContact[lang];

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gold/40 bg-maroon">
                <Image
                  src="/public/sivamtravels-logo.png"
                  alt="Sivam Travels"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-title text-lg tracking-[0.2em] text-ivory">SIVAM</span>
                <span className="font-body text-[10px] tracking-[0.35em] text-ivory/60">TRAVELS</span>
              </div>
            </div>
            <p className="mt-5 font-body text-sm leading-relaxed text-ivory/60">{t('footer.tagline')}</p>

          </div>

          <div>
            <h4 className="font-title text-xs tracking-[0.3em] text-gold">{t('footer.quickLinks')}</h4>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-ivory/70 transition-colors hover:text-gold"
                  >
                    {t(l.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-title text-xs tracking-[0.3em] text-gold">{t('footer.contact')}</h4>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-2 font-body text-sm text-ivory/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                {info.address}
              </li>
              <li className="flex items-center gap-2 font-body text-sm text-ivory/70">
                <Phone className="h-4 w-4 shrink-0 text-gold/70" />
                <a href="tel:+917305707781" className="hover:text-gold">{info.phone1}</a>
              </li>
              <li className="flex items-center gap-2 font-body text-sm text-ivory/70">
                <Phone className="h-4 w-4 shrink-0 text-gold/70" />
                <a href="tel:+919943404224" className="hover:text-gold">{info.phone2}</a>
              </li>
              <li className="flex items-center gap-2 font-body text-sm text-ivory/70">
                <Mail className="h-4 w-4 shrink-0 text-gold/70" />
                <a href={`mailto:${info.email}`} className="hover:text-gold">{info.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-title text-xs tracking-[0.3em] text-gold">{t('footer.pilgrimageHours')}</h4>
            <ul className="mt-5 space-y-2.5 font-body text-sm text-ivory/70">
              <li>{t('contact.hoursDetail')}</li>
              <li className="mt-3 text-xs text-ivory/50">{t('footer.availableAllDays')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 sm:flex-row">
          <p className="font-body text-xs text-ivory/50">
            © {new Date().getFullYear()} Sivam Travels. {t('footer.copyright')}
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 font-body text-xs text-ivory/60 transition-colors hover:text-gold"
          >
            {t('footer.backToTop')}
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
