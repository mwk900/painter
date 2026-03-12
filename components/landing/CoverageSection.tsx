'use client';

import { motion } from 'framer-motion';
import { COVERAGE_AREAS } from '@/lib/data';

const CREDENTIALS = [
  { label: 'Dulux Select Decorator', icon: 'D' },
  { label: 'Farrow & Ball Approved Applicator', icon: 'F&B' },
  { label: 'Fully Insured (£2m Public Liability)', icon: '£2m' },
  { label: 'DBS Checked Team', icon: 'DBS' },
  { label: '5-Year Workmanship Guarantee', icon: '5yr' },
  { label: 'Waste Carrier Licence', icon: 'WC' },
];

// Abstract dot map for Nottingham area
const AREA_DOTS = [
  { x: 50, y: 50, area: 'Hucknall', highlight: true },
  { x: 35, y: 63, area: 'Arnold', highlight: true },
  { x: 65, y: 63, area: 'Carlton', highlight: true },
  { x: 48, y: 72, area: 'Nottingham', highlight: true, main: true },
  { x: 30, y: 72, area: 'Wollaton', highlight: true },
  { x: 25, y: 82, area: 'Long Eaton', highlight: true },
  { x: 42, y: 83, area: 'Beeston', highlight: true },
  { x: 58, y: 80, area: 'West Bridgford', highlight: true },
  { x: 62, y: 68, area: 'Mapperley', highlight: true },
  { x: 52, y: 60, area: 'Sherwood', highlight: true },
  { x: 66, y: 88, area: 'Ruddington', highlight: true },
  { x: 20, y: 56, area: '', highlight: false },
  { x: 75, y: 55, area: '', highlight: false },
  { x: 80, y: 72, area: '', highlight: false },
  { x: 35, y: 48, area: '', highlight: false },
  { x: 70, y: 45, area: '', highlight: false },
  { x: 15, y: 70, area: '', highlight: false },
  { x: 55, y: 45, area: '', highlight: false },
];

export function CoverageSection() {
  return (
    <section className="py-24 lg:py-36" style={{ backgroundColor: '#F0EDEA' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#7A756E' }}>Where we work</p>
          <h2
            className="font-serif"
            style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 400,
              color: '#1A1917',
            }}
          >
            Covering Nottingham and up to 20 miles.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Coverage map */}
          <div>
            <div
              className="relative rounded-xl p-8"
              style={{ backgroundColor: '#FAF9F6', border: '1px solid #E5E0DA' }}
            >
              {/* Abstract dot map */}
              <div className="relative" style={{ paddingBottom: '80%' }}>
                <div className="absolute inset-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Paint spatter texture */}
                    {Array.from({ length: 40 }).map((_, i) => (
                      <circle
                        key={i}
                        cx={10 + Math.sin(i * 137.5) * 40 + 40}
                        cy={10 + Math.cos(i * 137.5) * 40 + 40}
                        r={0.3 + (i % 3) * 0.15}
                        fill="#C8BFA9"
                        opacity="0.2"
                      />
                    ))}

                    {/* Area dots */}
                    {AREA_DOTS.map((dot, i) => (
                      <g key={i}>
                        {dot.highlight && (
                          <circle
                            cx={dot.x}
                            cy={dot.y}
                            r={dot.main ? 3.5 : 2.5}
                            fill="none"
                            stroke="#C4956B"
                            strokeWidth="0.5"
                            opacity="0.3"
                          />
                        )}
                        <circle
                          cx={dot.x}
                          cy={dot.y}
                          r={dot.main ? 2.5 : (dot.highlight ? 1.8 : 1)}
                          fill={dot.main ? '#C4956B' : (dot.highlight ? '#C4956B' : '#D9D4CD')}
                          opacity={dot.highlight ? 0.8 : 0.4}
                        />
                      </g>
                    ))}
                  </svg>
                </div>
              </div>

              {/* Area list */}
              <div className="flex flex-wrap gap-2 mt-6">
                {COVERAGE_AREAS.map(area => (
                  <span
                    key={area}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: '#F0EDEA',
                      color: '#4A4540',
                      border: '1px solid #E5E0DA',
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div>
            <p className="text-xs tracking-widest uppercase mb-6 font-medium" style={{ color: '#7A756E' }}>
              Credentials & Insurance
            </p>
            <div className="grid grid-cols-1 gap-3">
              {CREDENTIALS.map((cred, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] }}
                  className="flex items-center gap-4 p-4 rounded-lg"
                  style={{
                    backgroundColor: '#FAF9F6',
                    border: '1px solid #E5E0DA',
                  }}
                >
                  {/* Badge icon */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium"
                    style={{ backgroundColor: '#F0EDEA', color: '#C4956B', border: '1px solid #E5E0DA' }}
                  >
                    {cred.icon}
                  </div>
                  <p className="text-sm" style={{ color: '#1A1917' }}>
                    {cred.label}
                  </p>
                  {/* Checkmark */}
                  <div className="ml-auto flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#8B9E7E" fillOpacity="0.15" />
                      <path d="M4.5 8L7 10.5L11.5 6" stroke="#8B9E7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
