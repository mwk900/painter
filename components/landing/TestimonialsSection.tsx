'use client';

import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/data';

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-36" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#7A756E' }}>What clients say</p>
          <h2
            className="font-serif max-w-xl"
            style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 400,
              color: '#1A1917',
            }}
          >
            Rooms that keep getting noticed.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="relative rounded-lg p-6 lg:p-7 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundColor: '#FAF9F6',
                border: '1px solid #E5E0DA',
                borderLeft: `4px solid ${testimonial.accentColour}`,
                marginTop: index % 2 === 1 ? '16px' : '0',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              {/* Quote mark */}
              <div
                className="text-5xl leading-none mb-3 font-serif"
                style={{
                  fontFamily: 'var(--font-display, serif)',
                  color: testimonial.accentColour,
                  opacity: 0.5,
                }}
              >
                &ldquo;
              </div>

              <p className="text-sm leading-relaxed mb-5" style={{ color: '#4A4540' }}>
                {testimonial.quote}
              </p>

              <div className="flex items-center gap-3">
                {/* Colour dot */}
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0"
                  style={{ backgroundColor: testimonial.accentColour, opacity: 0.8 }}
                />
                <div>
                  <p className="text-sm font-medium" style={{ color: '#1A1917' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-xs" style={{ color: '#7A756E' }}>
                    {testimonial.location} &middot; {testimonial.projectType}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
