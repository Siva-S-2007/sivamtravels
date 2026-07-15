'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useApp } from '@/lib/app-context';
import type { TranslationKey } from '@/lib/translations';

const links: { label: TranslationKey; href: string }[] = [
  { label: 'nav.home', href: '#home' },
  { label: 'nav.packages', href: '#packages' },
  { label: 'nav.navagraha', href: '#navagraha' },
  { label: 'nav.gallery', href: '#gallery' },
  { label: 'nav.contact', href: '#contact' },
];

export default function Navbar() {
  const { lang, toggleLang, t } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-ivory/85 backdrop-blur-xl border-b border-gold/20 shadow-soft'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="group flex items-center gap-3">
          <span
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full border transition-colors',
              scrolled ? 'border-gold/40 bg-maroon' : 'border-white/40 bg-white/10'
            )}
          >
            <Sparkles className={cn('h-5 w-5 text-gold')} />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                'font-title text-lg tracking-[0.2em] transition-colors',
                scrolled ? 'text-maroon' : 'text-white'
              )}
            >
              SIVAM
            </span>
            <span
              className={cn(
                'font-body text-[10px] tracking-[0.35em] transition-colors',
                scrolled ? 'text-charcoal/60' : 'text-white/70'
              )}
            >
              TRAVELS
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  'group relative font-body text-sm tracking-wide transition-colors',
                  scrolled ? 'text-charcoal/80 hover:text-maroon' : 'text-white/85 hover:text-white'
                )}
              >
                {t(l.label)}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className={cn(
              'group relative flex items-center gap-2 rounded-full border px-3.5 py-2 font-body text-xs tracking-wide transition-all duration-300',
              scrolled
                ? 'border-gold/30 text-charcoal/70 hover:border-gold/60 hover:text-maroon'
                : 'border-white/30 text-white/80 hover:border-gold/60 hover:text-gold'
            )}
            aria-label="Toggle language"
          >
            <span className={cn('font-medium transition-all', lang === 'ta' ? 'text-gold opacity-100' : 'opacity-50')}>
              தமிழ்
            </span>
            <span className="opacity-30">|</span>
            <span className={cn('font-medium transition-all', lang === 'en' ? 'text-gold opacity-100' : 'opacity-50')}>
              English
            </span>
          </button>

          <div className="hidden lg:block">
            <a
              href="#booking"
              className={cn(
                'group inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-body text-sm tracking-wide transition-all duration-300',
                scrolled
                  ? 'bg-maroon text-ivory hover:bg-maroon/90 hover:shadow-luxe'
                  : 'border border-gold/60 bg-white/5 text-gold hover:bg-gold hover:text-maroon'
              )}
            >
              {t('nav.bookNow')}
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className={cn('lg:hidden', scrolled ? 'text-maroon' : 'text-white')}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-ivory/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-body text-charcoal/80 transition-colors hover:bg-gold/10 hover:text-maroon"
                  >
                    {t(l.label)}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-full bg-maroon px-3 py-3 text-center font-body text-ivory"
                >
                  {t('nav.bookNow')}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
