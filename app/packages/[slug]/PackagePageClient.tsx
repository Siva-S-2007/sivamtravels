'use client';

import { useApp } from '@/lib/app-context';
import { getPackageBySlug } from '@/lib/packages';
import PackagePageContent from '@/components/PackagePageContent';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PackagePageClient({ slug }: { slug: string }) {
  const { lang } = useApp();
  const pkg = getPackageBySlug(slug);
  if (!pkg) return null;

  return (
    <>
      <Navbar />
      <PackagePageContent pkg={pkg} lang={lang} />
      <Footer />
    </>
  );
}
