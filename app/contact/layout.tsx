import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Get a Quote | Chalk & Line Decorating, Nottingham',
  description:
    'Get a quote from Chalk & Line Decorating. We visit within 5 working days. Free colour advice with every quote. Covering Nottingham and 20 miles.',
  openGraph: {
    title: 'Get a Quote | Chalk & Line Decorating, Nottingham',
    description: 'Request a quote for painting, decorating, or colour consultation. Free colour advice included.',
  },
  alternates: { canonical: 'https://chalkandline.co.uk/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
