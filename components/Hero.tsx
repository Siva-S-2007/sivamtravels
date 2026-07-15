'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CalendarHeart } from 'lucide-react';
import { useApp } from '@/lib/app-context';

export default function Hero() {
  const { lang, t } = useApp();
  const isTamil = lang === 'ta';

  return (
    <section id="home" className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-maroon/70 via-charcoal/60 to-charcoal/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.55)_100%)]" />
      </div>

      <div className={`relative z-10 mx-auto px-6 text-center ${isTamil ? 'max-w-3xl' : 'max-w-4xl'}`}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`font-title text-gold ${isTamil ? 'text-[10px] tracking-[0.3em] sm:text-xs' : 'text-xs tracking-[0.45em] sm:text-sm'}`}
        >
          {t('hero.eyebrow')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className={`mt-6 font-heading font-medium text-white text-balance ${
            isTamil
              ? 'text-3xl leading-[1.3] sm:text-4xl lg:text-5xl'
              : 'text-5xl leading-[1.05] sm:text-6xl lg:text-7xl'
          }`}
        >
          {t('hero.title1')}
          <span className="block gold-text">{t('hero.title2')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className={`mx-auto mt-7 font-body leading-relaxed text-white/80 ${
            isTamil ? 'max-w-2xl text-sm sm:text-base' : 'max-w-xl text-base sm:text-lg'
          }`}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#packages"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-body text-sm tracking-wide text-maroon transition-all duration-300 hover:shadow-luxe hover:brightness-105"
          >
            {t('hero.explore')}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#booking"
            className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-3.5 font-body text-sm tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:text-gold"
          >
            <CalendarHeart className="h-4 w-4" />
            {t('hero.bookNow')}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="h-1.5 w-1.5 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
