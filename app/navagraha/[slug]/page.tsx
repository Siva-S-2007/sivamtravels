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

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;
  const page = guideMeta[slug as GuideSlug];
  if (!page) return { title: 'Navagraha Guide | Sivam Travels' };

  return {
    title: `${page.title} | Sivam Travels`,
    description: page.description,
    alternates: {
      canonical: `https://www.sivamtravels.com/navagraha/${slug}`,
    },
  };
}

export default function NavagrahaGuidePage({ params }: { params: { slug: string } }) {
  const slug = params.slug as GuideSlug;
  if (!guideMeta[slug]) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.sivamtravels.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Navagraha Guides",
        "item": "https://www.sivamtravels.com/navagraha" // Assuming a general Navagraha guides page
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": guideMeta[slug].title,
        "item": `https://www.sivamtravels.com/navagraha/${slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <NavagrahaGuideClient slug={params.slug} />
      <Footer />
    </>
  );
}