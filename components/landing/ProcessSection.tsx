'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { PROCESS_STEPS } from '@/lib/data';
import { useColour } from '@/lib/colour-context';

export function ProcessSection() {
  const { accentColour } = useColour();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  return (
    <section ref={sectionRef} className="py-24 lg:py-36" style={{ backgroundColor: '#F0EDEA' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-20">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#7A756E' }}>How it works</p>
          <h2
            className="font-serif"
            style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 400,
              color: '#1A1917',
            }}
          >
            From first visit to final coat.
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Timeline track */}
          <div
            className="absolute left-6 top-6 bottom-6 w-0.5"
            style={{ backgroundColor: '#E5E0DA' }}
          />

          {/* Scroll-fill paint drip overlay */}
          <motion.div
            className="absolute left-6 top-6 w-0.5 origin-top"
            style={{
              backgroundColor: accentColour,
              scaleY: scrollYProgress,
              bottom: '1.5rem',
            }}
          />

          {/* Steps */}
          <div className="flex flex-col gap-12 lg:gap-16">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex gap-8 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Paint dot node */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium"
                    style={{
                      backgroundColor: accentColour,
                      color: 'white',
                      boxShadow: `0 0 0 4px #F0EDEA, 0 0 0 6px ${accentColour}40`,
                      transition: 'background-color 400ms ease',
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2 pb-4">
                  <h3
                    className="font-serif text-xl mb-3"
                    style={{
                      fontFamily: 'var(--font-display, serif)',
                      fontWeight: 500,
                      color: '#1A1917',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#7A756E' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
