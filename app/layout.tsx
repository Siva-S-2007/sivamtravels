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
      </body>
    </html>
  );
}
