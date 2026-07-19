'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, CalendarDays, Clock, Sparkles, X, ArrowRight,
  Landmark, Navigation,
} from 'lucide-react';
import { navagraha, type Deity, type Lang } from '@/lib/data';
import { navagrahaModalData, type ModalData } from '@/lib/navagraha-modal';
import { useApp } from '@/lib/app-context';
import { asset } from '@/lib/utils';

const RADIUS = typeof window !== 'undefined' && window.innerWidth < 640 ? 140 : 165;
const ROTATION_DURATION = 100;

export default function Navagraha() {
  const { lang, t, setSelectedPackageId, triggerBookingHighlight } = useApp();
  const [active, setActive] = useState<Deity>(navagraha[0]);
  const [modal, setModal] = useState<Deity | null>(null);

  const positions = useMemo(() => {
    const radius = typeof window !== 'undefined' && window.innerWidth < 640 ? 140 : 165;
    return navagraha.map((d, i) => {
      const angle = (i / navagraha.length) * Math.PI * 2 - Math.PI / 2;
      return { ...d, x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
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
            <div className="relative h-[340px] w-[340px] sm:h-[440px] sm:w-[440px]">
              {/* Rotating rings */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: ROTATION_DURATION, repeat: Infinity, ease: 'linear' }}
              >
                <div className="absolute inset-0 mandala-ring" />
                <div className="absolute inset-[14%] mandala-ring" />
                <div className="absolute inset-[28%] mandala-ring" />
                <div className="absolute inset-[42%] mandala-ring" />
              </motion.div>

              {/* Center (static) */}
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
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold/20 to-maroon overflow-hidden"
                >
                  <img src={asset('/sivalingam.jpg')} alt="Sivalingam" className="h-full w-full rounded-full object-cover" />
                </motion.div>
              </div>

              {/* Orbiting planets (rotates, labels counter-rotate to stay upright) */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: ROTATION_DURATION, repeat: Infinity, ease: 'linear' }}
              >
                {positions.map((d) => {
                  const isActive = active.id === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setActive(d)}
                      className="absolute left-1/2 top-1/2"
                      style={{ transform: `translate(calc(-50% + ${d.x}px), calc(-50% + ${d.y}px))` }}
                      aria-label={d.name[lang]}
                    >
                      <motion.span
                        animate={isActive ? { scale: 1.18 } : { scale: 1 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="relative flex h-12 w-12 items-center justify-center rounded-full border bg-gradient-to-br from-charcoal/80 to-maroon sm:h-16 sm:w-16"
                        style={{
                          borderColor: isActive ? d.color : 'rgba(197,160,70,0.4)',
                          boxShadow: isActive
                            ? `0 0 28px -2px ${d.color}cc, 0 0 12px -4px ${d.color}66`
                            : `0 0 16px -6px ${d.color}99, 0 0 6px -8px ${d.color}66`,
                        }}
                      >
                        {/* Counter-rotation wrapper to keep label upright */}
                        <motion.span
                          className="flex flex-col items-center"
                          animate={{ rotate: -360 }}
                          transition={{ duration: ROTATION_DURATION, repeat: Infinity, ease: 'linear' }}
                        >
                          <span
                            className="font-title text-[10px] tracking-wide sm:text-xs"
                            style={{ color: isActive ? d.color : '#FAF8F3cc' }}
                          >
                            {lang === 'en' ? (d.planetTamil.en.match(/\(([^)]+)\)/)?.[1] || d.name.en) : d.name[lang]}
                          </span>
                        </motion.span>
                        {/* Pulsing dot for active */}
                        {isActive && (
                          <motion.span
                            className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
                            style={{ backgroundColor: d.color }}
                            animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                          />
                        )}
                      </motion.span>
                    </button>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Compact Info Card */}
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
                {/* Header */}
                <div
                  className="relative px-7 py-6"
                  style={{
                    background: `linear-gradient(135deg, ${active.color}22 0%, transparent 100%)`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-full border overflow-hidden"
                      style={{ borderColor: active.color, backgroundColor: `${active.color}22` }}
                    >
                      <img src={asset('/sivamtravels-logo.png')} alt="Sivam Travels" className="h-full w-full object-cover rounded-full" />
                    </span>
                    <div>
                      <h3 className="font-heading text-3xl text-white">{active.name[lang]}</h3>
                      <p className="font-title text-xs tracking-[0.15em] text-gold">
                        {active.planetTamil[lang]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-7 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                {/* Temple name + short description */}
                <div className="px-7 py-5">
                  <h4 className="font-heading text-xl text-gold/90">{active.temple[lang]}</h4>
                  <p className="mt-2 font-body text-base leading-relaxed text-white/75">
                    {active.significance[lang]}
                  </p>
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

                {/* Action button */}
                <div className="flex gap-3 border-t border-gold/15 bg-charcoal/20 p-5">
                  <button
                    onClick={() => setModal(active)}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-3 font-body text-sm text-gold transition-all duration-300 hover:bg-gold hover:text-maroon"
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
        <p className="font-body text-xs tracking-wide text-white/50">{label}</p>
        <p className="mt-0.5 font-body text-base text-white/90">{value}</p>
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
      <p className="font-title text-sm tracking-[0.4em] text-gold sm:text-base">{eyebrow}</p>
      <h2 className={`mt-4 font-heading text-4xl font-medium sm:text-5xl lg:text-[3.25rem] ${light ? 'text-white' : 'text-maroon'}`}>
        {title}
      </h2>
      <span className="mx-auto mt-5 block h-px w-16 bg-gold/50" />
      {subtitle && (
        <p className={`mt-6 font-body text-lg leading-relaxed sm:text-xl ${light ? 'text-white/75' : 'text-charcoal/70'}`}>
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
  const modalData: ModalData | undefined = navagrahaModalData[deity.id];

  return (
    <AnimatePresence>
      {deity && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-charcoal/85 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-8 w-full max-w-3xl overflow-hidden rounded-2xl bg-ivory shadow-luxe"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-ivory/80 text-charcoal backdrop-blur transition-colors hover:bg-maroon hover:text-ivory"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Banner image */}
            {modalData && (
              <div className="relative h-56 overflow-hidden">
                <img
                  src={modalData.bannerImage}
                  alt={deity.temple[lang]}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/40 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6">
                  <p className="font-title text-xs tracking-[0.3em] text-gold">
                    {deity.planetTamil[lang]}
                  </p>
                  <h3 className="mt-1 font-heading text-3xl text-white">{deity.name[lang]}</h3>
                  <p className="mt-1 font-body text-sm text-white/80">{deity.temple[lang]}</p>
                </div>
              </div>
            )}

            <div className="max-h-[65vh] overflow-y-auto p-6 lg:p-8">
              {modalData ? (
                <div className="space-y-6">
                  {/* Overview */}
                  <ModalSection title={t('navagraha.significance')}>
                    <p className="font-body text-base leading-relaxed text-charcoal/80">{modalData.overview[lang]}</p>
                  </ModalSection>

                  {/* History */}
                  <ModalSection title={t('navagraha.history')}>
                    <p className="font-body text-base leading-relaxed text-charcoal/80">{modalData.history[lang]}</p>
                  </ModalSection>

                  {/* Benefits */}
                  <ModalSection title={t('navagraha.benefits')}>
                    <div className="flex flex-wrap gap-2">
                      {modalData.benefits.map((b, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/5 px-3 py-1.5 font-body text-sm text-charcoal/80"
                        >
                          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: deity.color }} />
                          {b[lang]}
                        </span>
                      ))}
                    </div>
                  </ModalSection>

                  {/* Special Rituals */}
                  <ModalSection title="Special Rituals / Poojas">
                    <p className="font-body text-base leading-relaxed text-charcoal/80">{modalData.specialRituals[lang]}</p>
                  </ModalSection>

                  {/* Temple Specialities */}
                  <ModalSection title="Temple Specialities">
                    <p className="font-body text-base leading-relaxed text-charcoal/80">{modalData.templeSpecialities[lang]}</p>
                  </ModalSection>

                  {/* Architecture */}
                  <ModalSection title="Architecture / Unique Features">
                    <p className="font-body text-base leading-relaxed text-charcoal/80">{modalData.architecture[lang]}</p>
                  </ModalSection>

                  {/* Visit Info */}
                  <div className="grid gap-4 rounded-xl bg-maroon/5 p-5 sm:grid-cols-2">
                    <ModalInfo icon={<CalendarDays className="h-4 w-4" />} label={t('navagraha.bestDay')} value={modalData.bestDay[lang]} />
                    <ModalInfo icon={<Clock className="h-4 w-4" />} label={t('navagraha.bestTime')} value={modalData.bestTime[lang]} />
                    <ModalInfo icon={<MapPin className="h-4 w-4" />} label={t('navagraha.location')} value={modalData.location[lang]} />
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(deity.temple[lang] + ' ' + modalData.location[lang])}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-3 font-body text-sm text-maroon transition-all duration-300 hover:bg-gold hover:text-maroon"
                    >
                      <Navigation className="h-4 w-4" />
                      {t('navagraha.viewOnMap')}
                    </a>
                    <button
                      onClick={onBookTour}
                      className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-maroon px-7 py-3 font-body text-sm text-ivory transition-all duration-300 hover:shadow-luxe"
                    >
                      {t('navagraha.bookTour')}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ) : (
                <p className="font-body text-sm text-charcoal/70">{deity.details[lang]}</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h5 className="flex items-center gap-2 font-title text-sm tracking-[0.2em] text-maroon">
        <span className="h-3 w-px bg-gold" />
        {title.toUpperCase()}
      </h5>
      <div className="mt-3">{children}</div>
    </div>
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
        <p className="font-body text-xs tracking-wide text-charcoal/50">{label}</p>
        <p className="mt-0.5 font-body text-base text-charcoal/90">{value}</p>
      </div>
    </div>
  );
}