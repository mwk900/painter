import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Chalk & Line Decorating, Nottingham',
  description:
    'The story behind Chalk & Line. Started after 8 years painting for other firms and realising most of them skip prep.',
};

const VALUES = [
  {
    title: 'Preparation First',
    description: 'The finish you see is determined by the work you do not. Filling, sanding, priming. Every time, regardless of schedule pressure.',
  },
  {
    title: 'Colour Confidence',
    description: 'Colour is a skill, not a guess. We carry fan decks, we understand light, and we will tell you honestly when something will not work.',
  },
  {
    title: 'Clean Finish',
    description: 'Edges cut by hand. No drips on skirting boards. Dust sheets down from start to finish. The standard is not negotiable.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ backgroundColor: '#1A1917' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(245,243,240,0.5)' }}>
            Our story
          </p>
          <h1
            className="font-serif text-white max-w-2xl"
            style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            Started after 8 years painting for other firms and realising most of them skip prep.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FAF9F6' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <div>
              <p className="text-xs tracking-widest uppercase mb-6 font-medium" style={{ color: '#C4956B' }}>
                Background
              </p>
              <div className="flex flex-col gap-5 text-base leading-relaxed" style={{ color: '#4A4540' }}>
                <p>
                  Eight years working for larger painting firms in Nottingham. Good firms, mostly. But the pattern was always the same: quote the prep, then cut it when the schedule got tight. Fill half the cracks. Skip the shellac primer on the stained ceiling. Two coats, but not quite two full coats.
                </p>
                <p>
                  The results were fine. Clients were happy because they did not know what they were not getting. But I knew. And it is a difficult thing to keep doing work you know is not right.
                </p>
                <p>
                  Chalk & Line is the answer to that. A decorating firm that does not negotiate on preparation. Not because it is clever marketing, but because it is the only way to do the job properly. The name comes from the chalk line, the most basic tool in a decorator's kit, and the thing most people skip.
                </p>
                <p>
                  We operate across Nottingham and the surrounding area, from Hucknall to Ruddington, from Arnold to Long Eaton. The housing stock here is exceptional: Victorian terraces, Edwardian semis, Georgian townhouses, and good modern new-builds. Each one needs something slightly different. We know what each one needs.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase mb-6 font-medium" style={{ color: '#C4956B' }}>
                What we use
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { brand: 'Farrow & Ball', use: 'Specified by clients for premium interior work. We are familiar with every colour in the range and how it behaves on different surfaces.' },
                  { brand: 'Little Greene', use: 'Exceptional depth of colour. Particularly good for period properties where Farrow & Ball feels too of-the-moment.' },
                  { brand: 'Dulux Heritage', use: 'Our working emulsion of choice for most domestic interior projects. Excellent coverage and a genuine low-sheen finish.' },
                  { brand: 'Crown Trade', use: 'Trade-grade for commercial and larger domestic projects. Reliable, consistent, built to be applied properly.' },
                  { brand: 'Zinsser', use: 'The primer you use when the surface genuinely requires it. BIN for stains, Bulls Eye 1-2-3 for general adhesion.' },
                ].map(item => (
                  <div
                    key={item.brand}
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: '#F0EDEA', border: '1px solid #E5E0DA' }}
                  >
                    <p className="text-sm font-medium mb-1" style={{ color: '#1A1917' }}>{item.brand}</p>
                    <p className="text-sm" style={{ color: '#7A756E' }}>{item.use}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F0EDEA' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase mb-12 font-medium" style={{ color: '#7A756E' }}>
            How we work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value, i) => (
              <div key={i}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium mb-5"
                  style={{ backgroundColor: '#C4956B', color: 'white' }}
                >
                  {i + 1}
                </div>
                <h3
                  className="font-serif text-xl mb-3"
                  style={{
                    fontFamily: 'var(--font-display, serif)',
                    fontWeight: 500,
                    color: '#1A1917',
                  }}
                >
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7A756E' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Ready to talk about your project?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-sm font-medium text-white rounded"
            style={{ backgroundColor: '#C4956B' }}
          >
            Get a quote &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
