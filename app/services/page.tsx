import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Painting & Decorating Services | Chalk & Line, Nottingham',
  description:
    'Interior painting from £350/room, exterior painting from £800, wallpapering, colour consultation £75, and period property restoration across Nottingham and surrounding areas.',
  openGraph: {
    title: 'Decorating Services | Chalk & Line, Nottingham',
    description: 'Five services, one standard. Interior, exterior, wallpapering, colour consultation and period restoration.',
  },
  alternates: { canonical: 'https://chalkandline.co.uk/services' },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20" style={{ backgroundColor: '#1A1917' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(245,243,240,0.5)' }}>
            What we do
          </p>
          <h1
            className="font-serif text-white"
            style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
            }}
          >
            Five services. One standard.
          </h1>
          <p className="mt-4 text-base max-w-lg" style={{ color: 'rgba(245,243,240,0.6)' }}>
            Every job gets the same level of preparation, the same quality of material, and the same clean finish. Starting prices below.
          </p>
        </div>
      </section>

      {/* Services */}
      {SERVICES.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className="py-20 lg:py-28"
          style={{ backgroundColor: index % 2 === 0 ? '#FAF9F6' : '#F0EDEA' }}
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
              style={{ direction: index % 2 === 1 ? 'rtl' : 'ltr' }}
            >
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden" style={{ direction: 'ltr', aspectRatio: '4/3' }}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Text */}
              <div style={{ direction: 'ltr' }}>
                <p
                  className="text-xs tracking-widest uppercase mb-3 font-medium"
                  style={{ color: '#C4956B' }}
                >
                  0{index + 1}
                </p>
                <h2
                  className="font-serif mb-3"
                  style={{
                    fontFamily: 'var(--font-display, serif)',
                    fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                    fontWeight: 400,
                    color: '#1A1917',
                  }}
                >
                  {service.title}
                </h2>
                <p className="text-sm italic mb-5" style={{ color: '#7A756E' }}>
                  {service.tagline}
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#4A4540' }}>
                  {service.description}
                </p>

                {/* Includes */}
                <div className="mb-6">
                  <p className="text-xs tracking-widest uppercase mb-3 font-medium" style={{ color: '#7A756E' }}>
                    What is included
                  </p>
                  <ul className="flex flex-col gap-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#4A4540' }}>
                        <span className="flex-shrink-0 mt-0.5">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <circle cx="7" cy="7" r="7" fill="#C4956B" fillOpacity="0.15" />
                            <path d="M4 7L6.5 9.5L10 5" stroke="#C4956B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="flex flex-col gap-2 mb-6 pt-5" style={{ borderTop: '1px solid #E5E0DA' }}>
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs" style={{ color: '#7A756E' }}>Pricing</span>
                    <span className="text-sm font-medium" style={{ color: '#1A1917' }}>{service.startingFrom}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs" style={{ color: '#7A756E' }}>Typical timescale</span>
                    <span className="text-sm" style={{ color: '#1A1917' }}>{service.timescale}</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-white rounded transition-all duration-200"
                  style={{ backgroundColor: '#C4956B' }}
                >
                  Get a quote &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#1A1917' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <h2
            className="font-serif text-white mb-6"
            style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 400,
            }}
          >
            Not sure which service you need?
          </h2>
          <p className="text-base mb-8 max-w-md mx-auto" style={{ color: 'rgba(245,243,240,0.6)' }}>
            Tell us about your project and we will point you in the right direction. No obligation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-sm font-medium text-white rounded transition-all duration-200"
            style={{ backgroundColor: '#C4956B' }}
          >
            Get in touch &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
