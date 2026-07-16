import { notFound } from 'next/navigation';
import { packageDetails, getPackageBySlug } from '@/lib/packages';
import PackagePageClient from './PackagePageClient';

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
