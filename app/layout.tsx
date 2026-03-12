import type { Metadata } from 'next';
import { Cormorant_Garamond, Instrument_Sans } from 'next/font/google';
import './globals.css';
import { ColourProvider } from '@/lib/colour-context';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const bodyFont = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chalk & Line Decorating | Nottingham',
  description:
    'Professional painting, decorating, and colour consultancy across Nottingham. Interior and exterior painting, wallpapering, and period property restoration.',
  keywords: 'painter decorator Nottingham, colour consultation, interior painting, exterior painting, wallpapering, period restoration',
  openGraph: {
    title: 'Chalk & Line Decorating',
    description: 'Colour done properly. Professional decorating and colour consultancy across Nottingham.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body style={{ fontFamily: 'var(--font-body, system-ui, sans-serif)' }} className="antialiased">
        <ColourProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ColourProvider>
      </body>
    </html>
  );
}
