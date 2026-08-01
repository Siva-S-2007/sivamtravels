import { notFound } from 'next/navigation';
import { packageDetails, getPackageBySlug } from '@/lib/packages';
import PackagePageClient from './PackagePageClient';


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Navagraha Tour Packages from Kumbakonam | Sivam Travels',
  description: 'Book the best Navagraha Tour Packages from Kumbakonam with Sivam Travels. Explore custom 1-day and 2-day temple itineraries at affordable rates.',
};

export default function Page() {
  return (
    <main>
      <h1>Best Navagraha Tour Packages from Kumbakonam</h1>
    </main>
  );
}



export function generateStaticParams() {
  return packageDetails.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) return { title: 'Package Not Found' };
  return {
    title: `${pkg.title.en} — Sivam Travels`,
    description: pkg.overview.en,
  };
}

export default function PackagePage({ params }: { params: { slug: string } }) {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) notFound();
  return <PackagePageClient slug={params.slug} />;
}
