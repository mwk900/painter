'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { HERO_COLOURS } from '@/lib/colours';
import { Colour } from '@/lib/types';
import { useColour } from '@/lib/colour-context';

function LivingRoomSVG({ wallColour }: { wallColour: string }) {
  return (
    <svg
      viewBox="0 0 900 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      style={{ maxHeight: '480px' }}
    >
      <defs>
        <filter id="furniture-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#1A1917" floodOpacity="0.15" />
        </filter>
        <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#1A1917" floodOpacity="0.1" />
        </filter>
        <linearGradient id="floor-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4C5B0" />
          <stop offset="100%" stopColor="#BFB09A" />
        </linearGradient>
        <linearGradient id="ceiling-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0EDE8" />
          <stop offset="100%" stopColor="#E8E4DD" />
        </linearGradient>
        <linearGradient id="window-light" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8F4F8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D0E8F0" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="wall-shadow-left" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="wall-shadow-right" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* === ROOM SHELL === */}

      {/* Back wall - COLOURABLE */}
      <rect
        className="room-wall"
        x="0" y="0" width="900" height="420"
        fill={wallColour}
      />

      {/* Left side wall shading */}
      <rect x="0" y="0" width="100" height="420" fill="url(#wall-shadow-left)" />
      {/* Right side wall shading */}
      <rect x="800" y="0" width="100" height="420" fill="url(#wall-shadow-right)" />

      {/* Ceiling */}
      <rect x="0" y="0" width="900" height="60" fill="url(#ceiling-gradient)" />

      {/* Ceiling/wall join line */}
      <line x1="0" y1="60" x2="900" y2="60" stroke="#C8BFA9" strokeWidth="1" />

      {/* Floor */}
      <rect x="0" y="420" width="900" height="120" fill="url(#floor-gradient)" />

      {/* Floor planks suggestion */}
      <line x1="0" y1="440" x2="900" y2="440" stroke="#C0B19C" strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="0" y1="460" x2="900" y2="460" stroke="#C0B19C" strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="0" y1="480" x2="900" y2="480" stroke="#C0B19C" strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="0" y1="500" x2="900" y2="500" stroke="#C0B19C" strokeWidth="0.5" strokeOpacity="0.5" />
      <line x1="150" y1="420" x2="150" y2="540" stroke="#C0B19C" strokeWidth="0.5" strokeOpacity="0.3" />
      <line x1="350" y1="420" x2="350" y2="540" stroke="#C0B19C" strokeWidth="0.5" strokeOpacity="0.3" />
      <line x1="550" y1="420" x2="550" y2="540" stroke="#C0B19C" strokeWidth="0.5" strokeOpacity="0.3" />
      <line x1="750" y1="420" x2="750" y2="540" stroke="#C0B19C" strokeWidth="0.5" strokeOpacity="0.3" />

      {/* Skirting board */}
      <rect x="0" y="408" width="900" height="14" fill="#E8E4DC" stroke="#D4CFC6" strokeWidth="0.5" />
      <rect x="0" y="418" width="900" height="3" fill="#D4CFC6" />

      {/* === WINDOW === */}
      <g filter="url(#soft-shadow)">
        {/* Window frame outer */}
        <rect x="340" y="80" width="220" height="280" rx="2" fill="#E8E4DC" stroke="#D0CAC0" strokeWidth="1.5" />
        {/* Window glass */}
        <rect x="352" y="92" width="196" height="256" fill="url(#window-light)" />
        {/* Window cross bar horizontal */}
        <rect x="352" y="218" width="196" height="6" fill="#E8E4DC" />
        {/* Window cross bar vertical */}
        <rect x="447" y="92" width="6" height="256" fill="#E8E4DC" />
        {/* Window light effect */}
        <rect x="352" y="92" width="60" height="256" fill="white" fillOpacity="0.15" />
        {/* Window sill */}
        <rect x="330" y="356" width="240" height="12" rx="1" fill="#E8E4DC" stroke="#D0CAC0" strokeWidth="1" />
      </g>

      {/* Window light cast on floor */}
      <rect x="380" y="420" width="140" height="80" fill="white" fillOpacity="0.08" />

      {/* === PICTURE FRAME (LEFT) === */}
      <g filter="url(#soft-shadow)">
        <rect x="80" y="120" width="140" height="180" rx="2" fill="#E8E4DC" stroke="#C8C0B6" strokeWidth="2" />
        {/* Mat */}
        <rect x="94" y="134" width="112" height="152" fill="#F0EDE8" />
        {/* Inner frame */}
        <rect x="104" y="144" width="92" height="132" fill="#D4CFC6" />
        {/* Abstract art suggestion - soft shapes */}
        <ellipse cx="150" cy="210" rx="28" ry="36" fill="#C4956B" fillOpacity="0.4" />
        <ellipse cx="168" cy="195" rx="20" ry="26" fill="#8B9E7E" fillOpacity="0.4" />
        <ellipse cx="138" cy="225" rx="18" ry="22" fill="#7B9DB7" fillOpacity="0.35" />
        {/* Frame shadow detail */}
        <rect x="80" y="120" width="140" height="4" fill="white" fillOpacity="0.3" rx="2" />
      </g>

      {/* === PICTURE FRAME (RIGHT, SMALLER) === */}
      <g filter="url(#soft-shadow)">
        <rect x="680" y="150" width="100" height="130" rx="2" fill="#E8E4DC" stroke="#C8C0B6" strokeWidth="2" />
        <rect x="692" y="162" width="76" height="106" fill="#F0EDE8" />
        <rect x="700" y="170" width="60" height="90" fill="#E0D8D0" />
        {/* Minimal line art */}
        <line x1="710" y1="180" x2="750" y2="250" stroke="#C8BFA9" strokeWidth="1.5" />
        <line x1="750" y1="180" x2="710" y2="250" stroke="#C8BFA9" strokeWidth="1.5" />
        <circle cx="730" cy="215" r="15" stroke="#C8BFA9" strokeWidth="1.5" fill="none" />
      </g>

      {/* === SOFA === */}
      <g filter="url(#furniture-shadow)">
        {/* Sofa body/seat */}
        <rect x="180" y="350" width="540" height="80" rx="6" fill="#D8D2C8" />
        {/* Sofa back */}
        <rect x="190" y="290" width="520" height="68" rx="6" fill="#CDC7BD" />
        {/* Sofa arm left */}
        <rect x="170" y="300" width="50" height="128" rx="6" fill="#C8C2B8" />
        {/* Sofa arm right */}
        <rect x="680" y="300" width="50" height="128" rx="6" fill="#C8C2B8" />
        {/* Sofa seat cushion dividers */}
        <line x1="350" y1="352" x2="350" y2="428" stroke="#BEB8AE" strokeWidth="1.5" />
        <line x1="550" y1="352" x2="550" y2="428" stroke="#BEB8AE" strokeWidth="1.5" />
        {/* Back cushion dividers */}
        <line x1="350" y1="292" x2="350" y2="356" stroke="#B8B2A8" strokeWidth="1.5" />
        <line x1="550" y1="292" x2="550" y2="356" stroke="#B8B2A8" strokeWidth="1.5" />
        {/* Sofa legs */}
        <rect x="200" y="426" width="16" height="14" rx="2" fill="#A89880" />
        <rect x="684" y="426" width="16" height="14" rx="2" fill="#A89880" />
        {/* Seat front edge */}
        <rect x="180" y="424" width="540" height="6" rx="2" fill="#C0BAB0" />
      </g>

      {/* Cushions on sofa */}
      <g filter="url(#soft-shadow)">
        {/* Left cushion */}
        <rect x="220" y="298" width="100" height="110" rx="8" fill="#E8E2D8" />
        <line x1="220" y1="353" x2="320" y2="353" stroke="#D8D2C8" strokeWidth="1" />
        {/* Centre cushion */}
        <rect x="400" y="298" width="100" height="110" rx="8" fill="#DED8CE" />
        <line x1="400" y1="353" x2="500" y2="353" stroke="#CEC8BE" strokeWidth="1" />
        {/* Right cushion */}
        <rect x="580" y="298" width="90" height="110" rx="8" fill="#E4DED4" />
        <line x1="580" y1="353" x2="670" y2="353" stroke="#D4CEC4" strokeWidth="1" />
      </g>

      {/* === FLOOR LAMP === */}
      <g filter="url(#soft-shadow)">
        {/* Lamp base */}
        <ellipse cx="790" cy="428" rx="22" ry="8" fill="#B0A898" />
        {/* Lamp pole */}
        <rect x="787" y="220" width="6" height="210" rx="3" fill="#C8C0B4" />
        {/* Lamp shade */}
        <path d="M750 220 L830 220 L815 280 L765 280 Z" fill="#E8DFD0" stroke="#D4C8B8" strokeWidth="1.5" />
        {/* Lamp glow */}
        <ellipse cx="790" cy="280" rx="50" ry="20" fill="#FFF8E8" fillOpacity="0.25" />
        {/* Shade detail */}
        <line x1="770" y1="225" x2="768" y2="275" stroke="#D4C8B8" strokeWidth="0.8" strokeOpacity="0.6" />
        <line x1="810" y1="225" x2="812" y2="275" stroke="#D4C8B8" strokeWidth="0.8" strokeOpacity="0.6" />
      </g>

      {/* === SIDE TABLE === */}
      <g filter="url(#soft-shadow)">
        <rect x="756" y="370" width="68" height="8" rx="2" fill="#C4B8A8" />
        <rect x="764" y="378" width="6" height="50" rx="2" fill="#C0B4A4" />
        <rect x="810" y="378" width="6" height="50" rx="2" fill="#C0B4A4" />
        <rect x="756" y="424" width="68" height="4" rx="1" fill="#B8AC9C" />
      </g>

      {/* Small plant on side table */}
      <g>
        <rect x="776" y="348" width="20" height="24" rx="3" fill="#C4956B" fillOpacity="0.7" />
        <ellipse cx="786" cy="352" rx="14" ry="8" fill="#8B9E7E" />
        <ellipse cx="786" cy="344" rx="10" ry="12" fill="#7A8E6E" fillOpacity="0.8" />
        <ellipse cx="780" cy="338" rx="7" ry="9" fill="#8B9E7E" fillOpacity="0.9" />
        <ellipse cx="792" cy="337" rx="6" ry="8" fill="#7A8E6E" fillOpacity="0.9" />
      </g>

      {/* === COFFEE TABLE === */}
      <g filter="url(#soft-shadow)">
        <rect x="310" y="430" width="280" height="8" rx="2" fill="#C8BCA8" />
        <rect x="318" y="438" width="8" height="16" rx="2" fill="#C0B4A0" />
        <rect x="574" y="438" width="8" height="16" rx="2" fill="#C0B4A0" />
        <ellipse cx="450" cy="432" rx="100" ry="4" fill="#B8AC98" fillOpacity="0.3" />
      </g>

      {/* Books on coffee table */}
      <rect x="380" y="420" width="50" height="10" rx="1" fill="#8B9E7E" fillOpacity="0.6" />
      <rect x="382" y="418" width="46" height="4" rx="1" fill="#7A8E6E" fillOpacity="0.7" />
      <rect x="440" y="421" width="40" height="8" rx="1" fill="#C4956B" fillOpacity="0.5" />
      <rect x="442" y="419" width="36" height="4" rx="1" fill="#B8864A" fillOpacity="0.5" />

      {/* === CORNICE / CEILING MOULDING === */}
      <path
        d="M0,60 Q20,52 40,60 L900,60 L900,52 Q880,44 860,52 L40,52 Q20,44 0,52 Z"
        fill="#E8E4DC"
        fillOpacity="0.6"
      />

      {/* Subtle room perspective lines */}
      <line x1="0" y1="0" x2="0" y2="540" stroke="#B0A898" strokeWidth="0.5" strokeOpacity="0.3" />
      <line x1="900" y1="0" x2="900" y2="540" stroke="#B0A898" strokeWidth="0.5" strokeOpacity="0.3" />
    </svg>
  );
}

export function HeroSection() {
  const { selectedColour, setSelectedColour, accentColour } = useColour();
  const [localColour, setLocalColour] = useState<Colour>(HERO_COLOURS[0]);

  const handleSwatchClick = (colour: Colour) => {
    setLocalColour(colour);
    setSelectedColour(colour);
  };

  return (
    <section className="relative min-h-screen flex flex-col" style={{ backgroundColor: '#1A1917' }}>
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, ${accentColour}20 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, ${selectedColour.hex}15 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col justify-center pt-20 pb-8 px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Headline */}
        <div className="text-center mb-6 lg:mb-8">
          <p className="text-xs tracking-widest uppercase mb-4 opacity-60" style={{ color: '#F5F3F0' }}>
            The Chalk & Line Collection
          </p>
          <h1
            className="font-serif text-white mb-3"
            style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            See it before you commit.
          </h1>
          <p className="text-base lg:text-lg max-w-lg mx-auto" style={{ color: 'rgba(245,243,240,0.65)' }}>
            Professional decorating and colour consultancy across Nottingham.
          </p>
        </div>

        {/* Room SVG */}
        <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden" style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
          <LivingRoomSVG wallColour={localColour.hex} />
        </div>

        {/* Colour swatches */}
        <div className="mt-6 lg:mt-8 max-w-4xl mx-auto w-full">
          <div className="flex gap-3 overflow-x-auto pb-2 justify-center flex-wrap sm:flex-nowrap">
            {HERO_COLOURS.map(colour => (
              <button
                key={colour.hex}
                onClick={() => handleSwatchClick(colour)}
                className="flex-shrink-0 relative transition-all duration-200"
                aria-label={colour.name}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  backgroundColor: colour.hex,
                  border: localColour.hex === colour.hex
                    ? `3px solid ${colour.hex}`
                    : '3px solid transparent',
                  boxShadow: localColour.hex === colour.hex
                    ? `0 0 0 2px white, 0 0 0 4px ${colour.hex}`
                    : '0 2px 8px rgba(0,0,0,0.3)',
                  transform: localColour.hex === colour.hex ? 'scale(1.15)' : 'scale(1)',
                }}
              />
            ))}
          </div>

          {/* Colour label */}
          <AnimatePresence mode="wait">
            <motion.div
              key={localColour.hex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-center mt-4"
            >
              <p
                className="text-xs tracking-widest uppercase font-medium mb-1"
                style={{ color: accentColour }}
              >
                {localColour.name}
              </p>
              <p className="text-sm max-w-md mx-auto" style={{ color: 'rgba(245,243,240,0.65)' }}>
                {localColour.mood}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-white rounded transition-all duration-300"
            style={{ backgroundColor: accentColour }}
          >
            Book a colour consultation &rarr;
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium rounded transition-all duration-300"
            style={{
              border: '1px solid rgba(245,243,240,0.25)',
              color: '#F5F3F0',
            }}
          >
            View our work
          </Link>
        </div>
      </div>
    </section>
  );
}
