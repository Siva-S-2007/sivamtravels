'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { Lang } from './data';
import { translations, type TranslationKey } from './translations';

type AppContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
  selectedPackageId: string;
  setSelectedPackageId: (id: string) => void;
  highlightBooking: boolean;
  triggerBookingHighlight: () => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');
  const [selectedPackageId, setSelectedPackageId] = useState<string>('1-day');
  const [highlightBooking, setHighlightBooking] = useState(false);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('sivam-lang') : null;
    if (saved === 'en' || saved === 'ta') setLangState(saved);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== 'undefined') localStorage.setItem('sivam-lang', l);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'en' ? 'ta' : 'en');
  }, [lang, setLang]);

  const t = useCallback((key: TranslationKey) => translations[key]?.[lang] ?? key, [lang]);

  const triggerBookingHighlight = useCallback(() => {
    setHighlightBooking(false);
    requestAnimationFrame(() => {
      setHighlightBooking(true);
      setTimeout(() => setHighlightBooking(false), 2500);
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t,
        selectedPackageId,
        setSelectedPackageId,
        highlightBooking,
        triggerBookingHighlight,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
