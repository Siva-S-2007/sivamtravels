'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback, useEffect } from 'react';
import { SectionHeading } from './Packages';
import { useApp } from '@/lib/app-context';
import { asset } from '@/lib/utils';
import type { Lang } from '@/lib/data';

type GalleryImage = {
  src: string;
  alt: { en: string; ta: string };
  span?: string;
};

// To add more images, simply append objects to this array.
// span options: 'row-span-2' for tall, 'col-span-2' for wide, '' for regular.
const galleryImages: GalleryImage[] = [
  { src: asset('/gallery/suryangallery.jpg'), alt: { en: 'Suriyan Temple', ta: 'சூரியன் கோயில்' }, span: 'row-span-2' },
  { src: asset('/gallery/chandrangallery.png'), alt: { en: 'Chandran Temple', ta: 'சந்திரன் கோயில்' } },
  { src: asset('/gallery/sevvaigallery.jpg'), alt: { en: 'Sevvai Temple', ta: 'செவ்வாய் கோயில்' } },
  { src: asset('/gallery/budhangallery.png'), alt: { en: 'Budhan Temple', ta: 'புதன் கோயில்' }, span: 'row-span-2' },
  { src: asset('/gallery/gurugallery.png'), alt: { en: 'Guru Temple', ta: 'குரு கோயில்' } },
  { src: asset('/gallery/sukrangallery.jpg'), alt: { en: 'Sukran Temple', ta: 'சுக்கிரன் கோயில்' } },
  { src: asset('/gallery/sanigallery.jpg'), alt: { en: 'Sani Temple', ta: 'சனி கோயில்' } },
  { src: asset('/gallery/rahugallery.jpg'), alt: { en: 'Rahu Temple', ta: 'ராகு கோயில்' } },
  { src: asset('/gallery/ketugallery.jpg'), alt: { en: 'Kethu Temple', ta: 'கேது கோயில்' } },
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

        {/* Masonry grid */}
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
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 font-heading text-lg text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt[lang]}
              </div>
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
