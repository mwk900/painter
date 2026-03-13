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

const BASE_URL = 'https://chalkandline.co.uk';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Chalk & Line Decorating | Painter & Decorator, Nottingham',
    template: '%s | Chalk & Line Decorating',
  },
  description:
    'Premium painting, decorating, and colour consultancy across Nottingham. Interior and exterior painting, wallpapering, period property restoration. Colour done properly.',
  keywords: [
    'painter decorator Nottingham',
    'interior painting Nottingham',
    'exterior painting Nottingham',
    'colour consultation Nottingham',
    'wallpapering Nottingham',
    'period property restoration Nottingham',
    'Farrow and Ball decorator Nottingham',
    'Dulux Select Decorator',
    'West Bridgford painter',
    'Beeston decorator',
    'Sherwood painter',
  ],
  authors: [{ name: 'Chalk & Line Decorating' }],
  creator: 'Chalk & Line Decorating',
  publisher: 'Chalk & Line Decorating',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    title: 'Chalk & Line Decorating | Colour Done Properly',
    description:
      'Premium painting, decorating, and colour consultancy across Nottingham. Interior, exterior, wallpapering, and period restoration.',
    url: BASE_URL,
    siteName: 'Chalk & Line Decorating',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Chalk & Line Decorating — Colour Done Properly',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chalk & Line Decorating | Colour Done Properly',
    description: 'Professional painting, decorating, and colour consultancy across Nottingham.',
  },
  alternates: {
    canonical: BASE_URL,
  },
};

// Local Business structured data (JSON-LD)
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BASE_URL,
  name: 'Chalk & Line Decorating',
  description:
    'Premium painting, decorating, and colour consultancy across Nottingham. Interior and exterior painting, wallpapering, and period property restoration.',
  url: BASE_URL,
  telephone: '01150000000',
  email: 'hello@chalkandline.co.uk',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Studio 2, Castle Yard',
    addressLocality: 'Nottingham',
    postalCode: 'NG1 6AA',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.9548,
    longitude: -1.1581,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:30',
    },
  ],
  priceRange: '££',
  areaServed: [
    'Nottingham',
    'West Bridgford',
    'Beeston',
    'Sherwood',
    'Mapperley',
    'Wollaton',
    'Arnold',
    'Carlton',
    'Long Eaton',
    'Hucknall',
    'Ruddington',
  ],
  serviceType: [
    'Interior Painting',
    'Exterior Painting',
    'Wallpapering',
    'Colour Consultation',
    'Period Property Restoration',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Decorating Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior Painting', description: 'From £350 per room' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Exterior Painting', description: 'From £800' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Colour Consultation', description: '£75 for up to 3 rooms' } },
    ],
  },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
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
