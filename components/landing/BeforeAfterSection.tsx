'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { BEFORE_AFTER_CARDS } from '@/lib/data';

interface CardProps {
  card: typeof BEFORE_AFTER_CARDS[number];
  index: number;
}

function BeforeAfterCard({ card, index }: CardProps) {
  const [revealed, setRevealed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleReveal = useCallback(() => setRevealed(true), []);
  const handleHide = useCallback(() => setRevealed(false), []);

  const handleTouchStart = useCallback(() => {
    timerRef.current = setTimeout(() => setRevealed(true), 300);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setRevealed(false);
  }, []);

  // Clip path directions
  const getClipPath = (reveal: boolean) => {
    if (card.wipeDirection === 'tl-br') {
      return reveal
        ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        : 'polygon(0 0, 0 0, 0 100%, 0 100%)';
    } else {
      return reveal
        ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="relative rounded-xl overflow-hidden cursor-pointer select-none"
      style={{ aspectRatio: '4/3', boxShadow: '0 4px 24px rgba(0,0,0,0.1)' }}
      onMouseEnter={handleReveal}
      onMouseLeave={handleHide}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* After image (default) */}
      <div className="absolute inset-0">
        <Image
          src={card.afterImage}
          alt={`After: ${card.label}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Before image (revealed on hover/hold) */}
      <div
        className="absolute inset-0 transition-all"
        style={{
          clipPath: getClipPath(revealed),
          transitionDuration: '600ms',
          transitionTimingFunction: 'ease-in-out',
        }}
      >
        <Image
          src={card.beforeImage}
          alt={`Before: ${card.label}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Before label */}
        <div
          className="absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)', color: 'white' }}
        >
          Before
        </div>
      </div>

      {/* Overlay label */}
      <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.6))' }}>
        <p className="text-white text-sm font-medium">{card.label}</p>
        <p className="text-white text-xs opacity-70">{card.location}</p>
      </div>

      {/* Hover hint */}
      {!revealed && (
        <div className="absolute top-3 right-3">
          <div
            className="px-2 py-1 text-xs rounded"
            style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#1A1917' }}
          >
            <span className="hidden md:inline">Hover</span>
            <span className="md:hidden">Hold</span>
            {' '}to reveal
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function BeforeAfterSection() {
  return (
    <section className="py-24 lg:py-36" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#7A756E' }}>Project results</p>
          <h2
            className="font-serif"
            style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 400,
              color: '#1A1917',
            }}
          >
            The difference preparation makes.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {BEFORE_AFTER_CARDS.map((card, i) => (
            <BeforeAfterCard key={card.id} card={card} index={i} />
          ))}
        </div>

        <p
          className="text-center text-sm mt-10 max-w-lg mx-auto italic"
          style={{ color: '#7A756E', fontStyle: 'italic' }}
        >
          Every project starts with prep you can not see and ends with a finish you can not stop looking at.
        </p>
      </div>
    </section>
  );
}
