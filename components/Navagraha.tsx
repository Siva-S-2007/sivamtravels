'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpenText, Orbit, ScrollText } from 'lucide-react';

const guideCards = [
  {
    href: '/navagraha/order-to-visit',
    label: 'Temple Guide',
    title: 'Navagraha Temple Order to Visit',
    description:
      'Discover the traditional order for visiting all nine Navagraha temples from Kumbakonam, along with the most efficient pilgrimage route.',
    cta: 'View Temple Order ->',
    Icon: Orbit,
    heroImage: '/gallery/suryanagallery.png',
    exploreText: 'Explore',
  },
  {
    href: '/navagraha/doshas-remedies',
    label: 'Spiritual Guide',
    title: 'Navagraha Doshas & Remedies',
    description:
      'Learn the significance of each planetary dosha, recommended temple visits, prayers, and traditional remedies followed by devotees.',
    cta: 'Explore Remedies ->',
    Icon: ScrollText,
    heroImage: '/gallery/chandrangallery.png',
    exploreText: 'Explore',
  },
  {
    href: '/navagraha/history-beliefs',
    label: 'History',
    title: 'Navagraha History & Beliefs',
    description:
      'Explore the history of the Navagraha temples, their spiritual importance, and the beliefs associated with each planetary deity.',
    cta: 'Read History ->',
    Icon: BookOpenText,
    heroImage: '/gallery/sevvaigallery.png',
    exploreText: 'Explore',
  },
];

export default function Navagraha() {
  return (
    <section id="navagraha" className="relative overflow-hidden bg-maroon-darker py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(107,30,30,0.06),_transparent_38%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(197,160,70,0.14),_transparent_42%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-title text-sm tracking-[0.38em] text-gold sm:text-base">Navagraha Information Guide</p>
          <h2 className="mt-4 font-heading text-4xl font-medium text-white sm:text-5xl lg:text-[3.25rem]">
            Everything You Need Before Your Navagraha Pilgrimage
          </h2>
          <span className="mx-auto mt-5 block h-px w-16 bg-gold/50" />
          <p className="mt-6 font-body text-lg leading-relaxed text-white/80 sm:text-xl">
            Learn the correct temple visiting order, understand the significance of each Navagraha, and discover
            traditional remedies before beginning your spiritual journey.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {guideCards.map((card, i) => (
            <motion.article
              key={card.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold/15 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-luxe"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-maroon/5 to-gold/5">
                <img
                  src={card.heroImage}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/20 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 font-heading text-xl font-medium text-white">
                  {card.title}
                </h3>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <p className="font-body text-sm leading-relaxed text-charcoal/70">{card.description}</p>
                <div className="mt-auto flex flex-col gap-5">
                  <Link
                    href={card.href}
                    className="group/btn mt-auto inline-flex items-center justify-between rounded-full border border-gold/40 px-5 py-3 font-body text-sm text-maroon transition-all duration-300 hover:bg-maroon hover:text-ivory"
                  >
                    {card.exploreText}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}