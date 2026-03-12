'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { SERVICES } from '@/lib/data';

interface ServiceBandProps {
  service: typeof SERVICES[number];
  index: number;
}

function ServiceBand({ service, index }: ServiceBandProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const imageLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col items-stretch min-h-[420px] overflow-hidden ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      {/* Image */}
      <motion.div
        className="relative w-full lg:w-[65%] h-64 lg:h-auto overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className={`w-full h-full ${isInView ? 'ken-burns' : ''}`} style={{ position: 'relative', height: '100%', minHeight: '280px' }}>
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 65vw"
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        className="flex-1 flex flex-col justify-center p-8 lg:p-12 xl:p-16"
        style={{ backgroundColor: index % 2 === 0 ? '#F0EDEA' : '#FAF9F6' }}
        initial={{ opacity: 0, x: imageLeft ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <p
          className="text-xs tracking-widest uppercase mb-3 font-medium"
          style={{ color: '#C4956B' }}
        >
          0{index + 1}
        </p>
        <h3
          className="font-serif mb-4"
          style={{
            fontFamily: 'var(--font-display, serif)',
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 400,
            color: '#1A1917',
          }}
        >
          {service.title}
        </h3>
        <p
          className="text-sm font-medium mb-4 italic"
          style={{ color: '#7A756E', fontStyle: 'italic' }}
        >
          {service.tagline}
        </p>
        <p className="text-sm leading-relaxed mb-6 line-clamp-4" style={{ color: '#4A4540' }}>
          {service.description}
        </p>
        <p className="text-xs mb-6" style={{ color: '#7A756E' }}>
          {service.startingFrom}
        </p>
        <Link
          href={`/services#${service.id}`}
          className="inline-flex items-center text-sm font-medium group"
          style={{ color: '#1A1917' }}
        >
          Learn more
          <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
        </Link>
      </motion.div>
    </div>
  );
}

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 lg:py-36" style={{ backgroundColor: '#FAF9F6' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-12 lg:mb-16" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#7A756E' }}>What we do</p>
          <h2
            className="font-serif max-w-xl"
            style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 400,
              color: '#1A1917',
            }}
          >
            Five services. One standard.
          </h2>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-2 rounded-xl overflow-hidden" style={{ border: '1px solid #E5E0DA' }}>
          {SERVICES.map((service, i) => (
            <ServiceBand key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
