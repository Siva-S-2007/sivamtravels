'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, CalendarDays, Clock, Sparkles, X, ArrowRight, Orbit,
  Check, Landmark, BookOpen, Star, Navigation,
} from 'lucide-react';
import { navagraha, type Deity, type Lang } from '@/lib/data';
import { useApp } from '@/lib/app-context';

const RADIUS = 120;

export default function Navagraha() {
  const { lang, t, setSelectedPackageId, triggerBookingHighlight } = useApp();
  const [active, setActive] = useState<Deity>(navagraha[0]);
  const [modal, setModal] = useState<Deity | null>(null);

  const positions = useMemo(() => {
    return navagraha.map((d, i) => {
      const angle = (i / navagraha.length) * Math.PI * 2 - Math.PI / 2;
      return { ...d, x: Math.cos(angle) * RADIUS, y: Math.sin(angle) * RADIUS };
    });
  }, []);

  const handleBookTour = () => {
    setSelectedPackageId('1-day');
    setModal(null);
    triggerBookingHighlight();
    setTimeout(() => {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="navagraha" className="relative overflow-hidden bg-maroon py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(197,160,70,0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(197,160,70,0.06),_transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t('navagraha.eyebrow')}
          title={t('navagraha.title')}
          subtitle={t('navagraha.subtitle')}
          light
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Mandala */}
          <div className="flex justify-center">
            <div className="relative h-[280px] w-[280px] sm:h-[320px] sm:w-[320px]">
              <div className="absolute inset-0 mandala-ring" />
              <div className="absolute inset-[14%] mandala-ring" />
              <div className="absolute inset-[28%] mandala-ring" />
              <div className="absolute inset-[42%] mandala-ring" />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 20px -4px rgba(197,160,70,0.4)',
                      '0 0 40px -2px rgba(197,160,70,0.6)',
                      '0 0 20px -4px rgba(197,160,70,0.4)',
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold/20 to-maroon"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-charcoal to-maroon">
                    <Orbit className="h-4 w-4 text-gold" />
                  </div>
                </motion.div>
              </div>

              {positions.map((d) => {
                const isActive = active.id === d.id;
                return (
                  <button
                    key={d.id}
                    onClick={() => setActive(d)}
                    className="absolute left-1/2 top-1/2 group"
                    style={{ transform: `translate(calc(-50% + ${d.x}px), calc(-50% + ${d.y}px))` }}
                    aria-label={d.name[lang]}
                  >
                    <motion.span
                      animate={isActive ? { scale: 1.15 } : { scale: 1 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="relative flex h-11 w-11 items-center justify-center rounded-full border bg-gradient-to-br from-charcoal/80 to-maroon sm:h-12 sm:w-12"
                      style={{
                        borderColor: isActive ? d.color : 'rgba(197,160,70,0.4)',
                        boxShadow: isActive
                          ? `0 0 24px -2px ${d.color}99, inset 0 0 12px -4px ${d.color}66`
                          : '0 0 0 1px rgba(197,160,70,0.2)',
                      }}
                    >
                      <span
                        className="font-title text-[8px] tracking-wide sm:text-[10px]"
                        style={{ color: isActive ? d.color : '#FAF8F3cc' }}
                      >
                        {d.name[lang]}
                      </span>
                      <span
                        className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full transition-opacity"
                        style={{ backgroundColor: d.color, opacity: isActive ? 1 : 0.3 }}
                      />
                    </motion.span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Premium Info Card */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-charcoal/40 to-transparent backdrop-blur-sm"
              >
                {/* Gradient header */}
                <div
                  className="relative px-7 py-6"
                  style={{
                    background: `linear-gradient(135deg, ${active.color}22 0%, transparent 100%)`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-full border"
                      style={{ borderColor: active.color, backgroundColor: `${active.color}22` }}
                    >
                      <Sparkles className="h-6 w-6" style={{ color: active.color }} />
                    </span>
                    <div>
                      <h3 className="font-heading text-3xl text-white">{active.name[lang]}</h3>
                      <p className="font-title text-xs tracking-[0.2em] text-gold">
                        {active.planet[lang].toUpperCase()}
                      </p>
                    </div>
                  </div>

                  <h4 className="mt-5 font-heading text-xl text-gold/90">{active.temple[lang]}</h4>

                  {/* Badges */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge style={{ backgroundColor: `${active.color}22`, color: active.color, borderColor: `${active.color}55` }}>
                      <Sparkles className="h-3 w-3" />
                      {active.planet[lang]}
                    </Badge>
                    <Badge style={{ backgroundColor: 'rgba(197,160,70,0.15)', color: '#C5A046', borderColor: 'rgba(197,160,70,0.4)' }}>
                      <CalendarDays className="h-3 w-3" />
                      {active.bestDay[lang]}
                    </Badge>
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-7 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                {/* Info grid */}
                <div className="grid gap-4 px-7 py-5 sm:grid-cols-2">
                  <InfoTile icon={<Landmark className="h-4 w-4" />} label={t('navagraha.deity')} value={active.deity[lang]} />
                  <InfoTile icon={<MapPin className="h-4 w-4" />} label={t('navagraha.location')} value={active.location[lang]} />
                  <InfoTile icon={<CalendarDays className="h-4 w-4" />} label={t('navagraha.bestDay')} value={active.bestDay[lang]} />
                  <InfoTile icon={<Clock className="h-4 w-4" />} label={t('navagraha.bestTime')} value={active.bestTime[lang]} />
                </div>

                {/* Divider */}
                <div className="mx-7 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                {/* Benefits */}
                <div className="px-7 py-5">
                  <h5 className="flex items-center gap-2 font-title text-xs tracking-[0.2em] text-gold">
                    <Check className="h-4 w-4" />
                    {t('navagraha.benefits').toUpperCase()}
                  </h5>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {active.benefits.map((b, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 rounded-full border border-gold/20 bg-white/5 px-3 py-1.5 font-body text-xs text-white/85"
                      >
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: active.color }} />
                        {b[lang]}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-7 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                {/* History */}
                <div className="px-7 py-5">
                  <h5 className="flex items-center gap-2 font-title text-xs tracking-[0.2em] text-gold">
                    <BookOpen className="h-4 w-4" />
                    {t('navagraha.history').toUpperCase()}
                  </h5>
                  <p className="mt-3 font-body text-sm leading-relaxed text-white/75">{active.history[lang]}</p>
                </div>

                {/* Divider */}
                <div className="mx-7 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                {/* Highlights */}
                <div className="px-7 py-5">
                  <h5 className="flex items-center gap-2 font-title text-xs tracking-[0.2em] text-gold">
                    <Star className="h-4 w-4" />
                    {t('navagraha.highlights').toUpperCase()}
                  </h5>
                  <ul className="mt-3 space-y-2">
                    {active.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 font-body text-sm text-white/80">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: active.color }} />
                        {h[lang]}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className="mx-7 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                {/* Nearby landmark */}
                <div className="px-7 py-5">
                  <InfoTile icon={<Navigation className="h-4 w-4" />} label={t('navagraha.nearbyLandmark')} value={active.nearbyLandmark[lang]} />
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 border-t border-gold/15 bg-charcoal/20 p-5">
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(active.temple[lang] + ' ' + active.location[lang])}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-3 font-body text-sm text-gold transition-all duration-300 hover:bg-gold hover:text-maroon"
                  >
                    <MapPin className="h-4 w-4" />
                    {t('navagraha.viewOnMap')}
                  </a>
                  <button
                    onClick={() => setModal(active)}
                    className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-3 font-body text-sm text-gold transition-all duration-300 hover:bg-gold hover:text-maroon"
                  >
                    {t('navagraha.readMore')}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <DeityModal deity={modal} onClose={() => setModal(null)} onBookTour={handleBookTour} />
    </section>
  );
}

function Badge({
  children,
  style,
}: {
  children: React.ReactNode;
  style: React.CSSProperties;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-body text-xs font-medium"
      style={style}
    >
      {children}
    </span>
  );
}

function InfoTile({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
        {icon}
      </span>
      <div>
        <p className="font-body text-[11px] tracking-wide text-white/50">{label}</p>
        <p className="mt-0.5 font-body text-sm text-white/90">{value}</p>
      </div>
    </div>
  );
}

function SectionHeading({
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
      <p className="font-title text-xs tracking-[0.4em] text-gold sm:text-sm">{eyebrow}</p>
      <h2 className={`mt-4 font-heading text-4xl font-medium sm:text-5xl lg:text-[3.25rem] ${light ? 'text-white' : 'text-maroon'}`}>
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

function DeityModal({
  deity,
  onClose,
  onBookTour,
}: {
  deity: Deity | null;
  onClose: () => void;
  onBookTour: () => void;
}) {
  const { lang, t } = useApp();
  if (!deity) return null;

  return (
    <AnimatePresence>
      {deity && (
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
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-8 w-full max-w-2xl overflow-hidden rounded-2xl bg-ivory shadow-luxe"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/80 text-charcoal backdrop-blur transition-colors hover:bg-maroon hover:text-ivory"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Gradient header */}
            <div
              className="relative h-40 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${deity.color}33 0%, #6B1E1E 100%)`,
              }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,70,0.15),_transparent_60%)]" />
              <div className="absolute bottom-5 left-6 flex items-center gap-4">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full border"
                  style={{ borderColor: deity.color, backgroundColor: `${deity.color}33` }}
                >
                  <Sparkles className="h-6 w-6" style={{ color: deity.color }} />
                </span>
                <div>
                  <p className="font-title text-xs tracking-[0.3em] text-gold">{deity.planet[lang].toUpperCase()}</p>
                  <h3 className="font-heading text-2xl text-white">{deity.name[lang]}</h3>
                </div>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-6 lg:p-8">
              <h4 className="font-heading text-xl text-maroon">{deity.temple[lang]}</h4>
              <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/80">{deity.details[lang]}</p>

              {/* Info grid */}
              <div className="mt-5 grid gap-4 rounded-xl bg-maroon/5 p-5 sm:grid-cols-2">
                <ModalInfo icon={<Landmark className="h-4 w-4" />} label={t('navagraha.deity')} value={deity.deity[lang]} />
                <ModalInfo icon={<MapPin className="h-4 w-4" />} label={t('navagraha.location')} value={deity.location[lang]} />
                <ModalInfo icon={<CalendarDays className="h-4 w-4" />} label={t('navagraha.bestDay')} value={deity.bestDay[lang]} />
                <ModalInfo icon={<Clock className="h-4 w-4" />} label={t('navagraha.bestTime')} value={deity.bestTime[lang]} />
              </div>

              {/* Benefits */}
              <div className="mt-5">
                <h5 className="flex items-center gap-2 font-title text-xs tracking-[0.2em] text-maroon">
                  <Check className="h-4 w-4 text-gold" />
                  {t('navagraha.benefits').toUpperCase()}
                </h5>
                <div className="mt-3 flex flex-wrap gap-2">
                  {deity.benefits.map((b, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/5 px-3 py-1.5 font-body text-xs text-charcoal/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: deity.color }} />
                      {b[lang]}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-5">
                <h5 className="flex items-center gap-2 font-title text-xs tracking-[0.2em] text-maroon">
                  <Star className="h-4 w-4 text-gold" />
                  {t('navagraha.highlights').toUpperCase()}
                </h5>
                <ul className="mt-3 space-y-2">
                  {deity.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-sm text-charcoal/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: deity.color }} />
                      {h[lang]}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onBookTour}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-maroon px-7 py-3.5 font-body text-sm text-ivory transition-all duration-300 hover:shadow-luxe"
              >
                {t('navagraha.bookTour')}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-maroon/10 text-maroon">
        {icon}
      </span>
      <div>
        <p className="font-body text-[11px] tracking-wide text-charcoal/50">{label}</p>
        <p className="mt-0.5 font-body text-sm text-charcoal/90">{value}</p>
      </div>
    </div>
  );
}
