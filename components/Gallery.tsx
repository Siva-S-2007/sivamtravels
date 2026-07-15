'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './Packages';
import { useApp } from '@/lib/app-context';
import type { Lang } from '@/lib/data';

const images: Record<Lang, { src: string; alt: string; span: string }[]> = {
  en: [
    { src: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Temple gopuram', span: 'row-span-2' },
    { src: 'https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Temple carving', span: '' },
    { src: 'https://images.pexels.com/photos/2063582/pexels-photo-2063582.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Sacred lamp', span: '' },
    { src: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Temple corridor', span: 'row-span-2' },
    { src: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Pilgrim at prayer', span: '' },
    { src: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Temple deity', span: '' },
  ],
  ta: [
    { src: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'கோயில் கோபுரம்', span: 'row-span-2' },
    { src: 'https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'கோயில் சிற்பம்', span: '' },
    { src: 'https://images.pexels.com/photos/2063582/pexels-photo-2063582.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'புனித தீபம்', span: '' },
    { src: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'கோயில் வராந்தம்', span: 'row-span-2' },
    { src: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'பக்தன் பிரார்த்தனை', span: '' },
    { src: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'கோயில் மூலவர்', span: '' },
  ],
};

export default function Gallery() {
  const { lang, t } = useApp();
  const imgs = images[lang];

  return (
    <section id="gallery" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={t('gallery.eyebrow')}
          title={t('gallery.title')}
          subtitle={t('gallery.subtitle')}
        />

        <div className="mt-16 grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-3">
          {imgs.map((img, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-gold/15 shadow-soft ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 font-heading text-lg text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
