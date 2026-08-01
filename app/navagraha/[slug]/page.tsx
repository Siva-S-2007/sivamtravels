import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavagrahaGuideClient from './NavagrahaGuideClient';

type GuideSlug = 'order-to-visit' | 'doshas-remedies' | 'history-beliefs';

const guideMeta: Record<GuideSlug, { title: string; description: string }> = {
  'order-to-visit': {
    title: 'Navagraha Temple Order to Visit from Kumbakonam',
    description:
      'Plan your Navagraha Temple Tour with the correct temple order, timings, travel distances and practical pilgrimage tips.',
  },
  'doshas-remedies': {
    title: 'Navagraha Doshas and Remedies',
    description:
      'Understand the astrological significance of each Navagraha, common planetary doshas and traditional remedies followed by devotees.',
  },
  'history-beliefs': {
    title: 'Navagraha Temple History and Beliefs',
    description:
      'Explore the rich history, sacred legends, architecture and spiritual significance of the Navagraha Temples in Tamil Nadu.',
  },
};

export function generateStaticParams() {
  return Object.keys(guideMeta).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = guideMeta[params.slug as GuideSlug];
  if (!page) return { title: 'Navagraha Guide | Sivam Travels' };
  return {
    title: `${page.title} | Sivam Travels`,
    description: page.description,
  };
}

export default function NavagrahaGuidePage({ params }: { params: { slug: string } }) {
  const slug = params.slug as GuideSlug;
  if (!guideMeta[slug]) notFound();

  return (
    <>
      <Navbar />
      <NavagrahaGuideClient slug={params.slug} />
      <Footer />
    </>
  );
}
