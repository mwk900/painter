'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COLOUR_FAMILIES } from '@/lib/colours';
import { ColourFamily } from '@/lib/types';

interface TooltipState {
  visible: boolean;
  text: string;
  x: number;
  y: number;
}

export function ColourFamiliesSection() {
  const [expandedFamily, setExpandedFamily] = useState<ColourFamily | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState>({ visible: false, text: '', x: 0, y: 0 });

  const toggleFamily = (name: ColourFamily) => {
    setExpandedFamily(prev => (prev === name ? null : name));
  };

  const handleChipHover = (e: React.MouseEvent, advice: string) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setTooltip({ visible: true, text: advice, x: rect.left + rect.width / 2, y: rect.top - 8 });
  };

  const handleChipLeave = () => {
    setTooltip({ visible: false, text: '', x: 0, y: 0 });
  };

  return (
    <section className="py-24 lg:py-36" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#7A756E' }}>
            The Chalk & Line Palette
          </p>
          <h2
            className="font-serif"
            style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 400,
              color: '#1A1917',
            }}
          >
            Every colour tells a room what to feel.
          </h2>
        </div>

        {/* Family cards grid */}
        <div className="grid grid-cols-1 gap-3">
          {COLOUR_FAMILIES.map(family => (
            <motion.div key={family.name} layout className="overflow-hidden">
              {/* Family header */}
              <button
                onClick={() => toggleFamily(family.name)}
                className="w-full text-left rounded-lg overflow-hidden transition-all duration-200 hover:opacity-90"
                style={{ border: '1px solid #E5E0DA' }}
              >
                <div className="flex items-center gap-4 p-4 lg:p-5" style={{ backgroundColor: '#F0EDEA' }}>
                  {/* Colour strip */}
                  <div className="flex gap-1 flex-shrink-0">
                    {family.colours.slice(0, 5).map(c => (
                      <div
                        key={c.hex}
                        className="rounded-full border border-white/30"
                        style={{ width: 28, height: 28, backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-medium text-base"
                      style={{ color: '#1A1917' }}
                    >
                      {family.name}
                    </p>
                    <p className="text-sm hidden sm:block" style={{ color: '#7A756E' }}>
                      {family.description}
                    </p>
                  </div>
                  <div
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300"
                    style={{
                      transform: expandedFamily === family.name ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <line x1="7" y1="0" x2="7" y2="14" stroke="#7A756E" strokeWidth="1.5" />
                      <line x1="0" y1="7" x2="14" y2="7" stroke="#7A756E" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Expanded content */}
              <AnimatePresence>
                {expandedFamily === family.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      className="p-6 rounded-b-lg"
                      style={{ border: '1px solid #E5E0DA', borderTop: 'none', backgroundColor: '#FAF9F6' }}
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {family.colours.map(colour => (
                          <div
                            key={colour.hex}
                            className="flex flex-col items-center gap-2 cursor-default group relative"
                            onMouseEnter={e => handleChipHover(e, colour.advice)}
                            onMouseLeave={handleChipLeave}
                            onTouchStart={e => {
                              const rect = e.currentTarget.getBoundingClientRect();
                              setTooltip({ visible: true, text: colour.advice, x: rect.left + rect.width / 2, y: rect.top - 8 });
                            }}
                            onTouchEnd={() => setTimeout(() => setTooltip({ visible: false, text: '', x: 0, y: 0 }), 2000)}
                          >
                            <div
                              className="rounded-full transition-transform duration-200 group-hover:scale-110 border-2 border-transparent group-hover:border-white"
                              style={{
                                width: 56,
                                height: 56,
                                backgroundColor: colour.hex,
                                boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                              }}
                            />
                            <div className="text-center">
                              <p
                                className="text-xs font-medium leading-tight"
                                style={{ color: '#1A1917', fontSize: '0.75rem' }}
                              >
                                {colour.name}
                              </p>
                              <p
                                className="text-xs tracking-wide font-mono mt-0.5"
                                style={{ color: '#7A756E', fontSize: '0.6875rem' }}
                              >
                                {colour.hex}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tooltip (fixed position) */}
      {tooltip.visible && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <div
            className="text-xs text-white px-3 py-2 rounded shadow-lg max-w-xs text-center"
            style={{ backgroundColor: '#1A1917', maxWidth: '200px' }}
          >
            {tooltip.text}
            <div
              className="absolute left-1/2 -bottom-1.5 w-2 h-2 rotate-45"
              style={{
                backgroundColor: '#1A1917',
                transform: 'translateX(-50%) rotate(45deg)',
                bottom: '-4px',
                left: '50%',
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
