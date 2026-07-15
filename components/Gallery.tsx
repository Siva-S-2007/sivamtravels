'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import { SectionHeading } from './Packages';
import { useApp } from '@/lib/app-context';
import type { Lang } from '@/lib/data';

type GalleryImage = {
  src: string;
  alt: { en: string; ta: string };
  span?: string;
};

// To add more images, simply append objects to this array.
// span options: 'row-span-2' for tall, 'col-span-2' for wide, '' for regular.
const galleryImages: GalleryImage[] = [
  { src: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Temple gopuram', ta: 'கோயில் கோபுரம்' }, span: 'row-span-2' },
  { src: 'https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Temple carving', ta: 'கோயில் சிற்பம்' } },
  { src: 'https://images.pexels.com/photos/2063582/pexels-photo-2063582.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Sacred lamp', ta: 'புனித தீபம்' } },
  { src: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Temple corridor', ta: 'கோயில் வராந்தம்' }, span: 'row-span-2' },
  { src: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Pilgrim at prayer', ta: 'பக்தன் பிரார்த்தனை' } },
  { src: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Temple deity', ta: 'கோயில் மூலவர்' } },
  { src: 'https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Temple entrance', ta: 'கோயில் நுழைவாயில்' } },
  { src: 'https://images.pexels.com/photos/161747/stupa-pokhara-nepal-monument-161747.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Sacred architecture', ta: 'புனித கட்டிடக்கலை' } },
  { src: 'https://images.pexels.com/photos/2063582/pexels-photo-2063582.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Evening aarti', ta: 'மாலை ஆரத்தி' } },
  { src: 'https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&w=800', alt: { en: 'Stone pillars', ta: 'கல் தூண்கள்' } },
];

export default function Gallery() {
  const { lang, t } = useApp();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextImage = useCallback(() => {
    setLightbox((prev) => (prev === null ? prev : (prev + 1) % galleryImages.length));
  }, []);
  const prevImage = useCallback(() => {
    setLightbox((prev) => (prev === null ? prev : (prev - 1 + galleryImages.length) % galleryImages.length));
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t('gallery.eyebrow')}
          title={t('gallery.title')}
          subtitle={t('gallery.subtitle')}
        />

        {/* Masonry grid — auto-flows with any number of images */}
        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {galleryImages.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
              onClick={() => setLightbox(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-gold/15 shadow-soft"
            >
              <img
                src={img.src}
                alt={img.alt[lang]}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 font-heading text-lg text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt[lang]}
              </div>
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ivory/80 text-maroon opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Plus className="h-4 w-4" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 text-ivory backdrop-blur transition-colors hover:bg-maroon hover:text-ivory"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/10 text-ivory backdrop-blur transition-colors hover:bg-gold hover:text-maroon sm:left-8"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt[lang]}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-[90vw] rounded-xl object-contain shadow-luxe"
            />

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/10 text-ivory backdrop-blur transition-colors hover:bg-gold hover:text-maroon sm:right-8"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-heading text-lg text-white/90">
              {galleryImages[lightbox].alt[lang]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
