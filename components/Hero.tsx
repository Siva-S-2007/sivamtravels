'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CalendarHeart, MapPin, Car, BedDouble, HandHeart } from 'lucide-react';
import { useApp } from '@/lib/app-context';
import { asset } from '@/lib/utils';

export default function Hero() {
  const { lang, t } = useApp();
  const isTamil = lang === 'ta';

  const trustBadges = isTamil
    ? [
        { icon: MapPin, text: 'திருநாகேஸ்வரத்தில் அமைந்துள்ளது (ராகு கோயில்)' },
        { icon: Car, text: 'தனியார் & குழு சுற்றுலா' },
        { icon: BedDouble, text: 'அருகில் அறைகள் உள்ளன' },
        { icon: HandHeart, text: 'முழு நவக்கிரக யாத்திரை' },
      ]
    : [
        { icon: MapPin, text: 'Located at Thirunageswaram (Rahu Temple)' },
        { icon: Car, text: 'Private & Group Tours' },
        { icon: BedDouble, text: 'Rooms Available Nearby' },
        { icon: HandHeart, text: 'Complete Navagraha Pilgrimage' },
      ];

  return (
    <section id="home" className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          style={{ willChange: 'transform' }}
        >
          <source src={asset('/heronew.mp4')} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(45,18,8,0.55) 0%, rgba(15,15,15,0.55) 50%, rgba(10,10,10,0.75) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.55)_100%)]" />
      </div>

      <div className={`relative z-10 mx-auto px-6 text-center ${isTamil ? 'max-w-3xl' : 'max-w-[900px]'}`}>
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className={`font-heading font-semibold gold-text text-balance ${
            isTamil
              ? 'text-3xl leading-[1.1] sm:text-4xl lg:text-5xl'
              : 'text-[44px] leading-[1.05] sm:text-6xl lg:text-[80px]'
          }`}
        >
          {t('hero.title1')}
          <span className="block">{t('hero.title2')}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`mt-8 font-body font-medium text-white text-balance ${
            isTamil ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl lg:text-[40px]'
          }`}
        >
          {t('hero.subtitle')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className={`mx-auto mt-[18px] font-body leading-[1.7] text-white/90 ${
            isTamil ? 'max-w-2xl text-base sm:text-lg' : 'max-w-[700px] text-lg sm:text-[21px]'
          }`}
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-[42px] flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-5"
        >
          <a
            href="#packages"
            className="group inline-flex items-center gap-2 rounded-full bg-gold px-9 py-4 font-body text-sm tracking-wide text-maroon transition-all duration-300 hover:shadow-luxe hover:brightness-105"
          >
            {t('hero.explore')}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#booking"
            className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-9 py-4 font-body text-sm tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:text-gold"
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
