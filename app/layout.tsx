import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond, Cinzel } from 'next/font/google';
import { AppProvider } from '@/lib/app-context';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sivam Travels — Sacred Journeys to the Navagraha Temples',
  description:
    'Sivam Travels curates serene, temple-inspired spiritual journeys across South India. Experience the nine Navagraha temples with comfort, devotion, and grace.',
  openGraph: {
    title: 'Sivam Travels — Sacred Journeys',
    description:
      'Curated spiritual journeys to the Navagraha temples and sacred sites of South India.',
    images: [{ url: '/og.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: '/og.jpg' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${cinzel.variable}`}>
      <body className="font-body bg-background text-foreground antialiased">
        <AppProvider>{children}</AppProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sivam Travels",
              "url": "https://www.sivamtravels.com",
              "logo": "https://www.sivamtravels.com/logo.png", // Assuming you have a logo at this path
              "sameAs": [
                "https://www.facebook.com/sivamtravels", // Replace with actual social links
                "https://twitter.com/sivamtravels",
                "https://www.instagram.com/sivamtravels"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Sivam Travels",
              "telephone": "", // Add your phone number
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "", // Add your street address
                "addressLocality": "Kumbakonam",
                "addressRegion": "Tamil Nadu",
                "postalCode": "", // Add your postal code
                "addressCountry": "IN"
              },
              "url": "https://www.sivamtravels.com",
              "priceRange": "$", // Adjust price range as appropriate
              "areaServed": {
                "@type": "State",
                "name": "Tamil Nadu"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Sivam Travels",
              "url": "https://www.sivamtravels.com"
            })
          }}
        />
      </body>
    </html>
  );
}