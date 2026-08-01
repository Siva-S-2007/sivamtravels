import { notFound } from 'next/navigation';
import { packageDetails, getPackageBySlug } from '@/lib/packages';
import PackagePageClient from './PackagePageClient';


export function generateStaticParams() {
  return packageDetails.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) return { title: 'Package Not Found' };

  return {
    title: `${pkg.title.en} — Sivam Travels`,
    description: pkg.overview.en,
    alternates: {
      canonical: `https://www.sivamtravels.com/packages/${slug}`,
    },
  };
}

export default function PackagePage({ params }: { params: { slug: string } }) {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) notFound();

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
        "name": "Packages",
        "item": "https://www.sivamtravels.com/packages"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": pkg.title.en,
        "item": `https://www.sivamtravels.com/packages/${params.slug}`
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": pkg.title.en,
    "name": pkg.title.en,
    "description": pkg.overview.en,
    "url": `https://www.sivamtravels.com/packages/${params.slug}`,
    "provider": {
      "@type": "Organization",
      "name": "Sivam Travels"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PackagePageClient slug={params.slug} />
    </>
  );
}