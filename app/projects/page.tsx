'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/data';
import { ALL_COLOURS } from '@/lib/colours';

type FilterType = 'All' | 'Interior' | 'Exterior' | 'Wallpaper' | 'Period';
const FILTERS: FilterType[] = ['All', 'Interior', 'Exterior', 'Wallpaper', 'Period'];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 lg:pt-40 lg:pb-20"
        style={{ backgroundColor: '#1A1917' }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(245,243,240,0.5)' }}>
            Our work
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
            Projects across Nottingham.
          </h1>
          <p className="mt-4 text-base max-w-lg" style={{ color: 'rgba(245,243,240,0.6)' }}>
            From Victorian terraces in Sherwood to new-builds in Gamston. Every project starts the same way: thorough preparation.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section style={{ backgroundColor: '#FAF9F6' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex gap-2 flex-wrap">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="px-5 py-2 text-sm font-medium rounded-full transition-all duration-200"
                style={{
                  backgroundColor: activeFilter === filter ? '#1A1917' : 'transparent',
                  color: activeFilter === filter ? '#F5F3F0' : '#7A756E',
                  border: '1px solid #E5E0DA',
                }}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-8 pb-24 lg:pb-36" style={{ backgroundColor: '#FAF9F6' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] }}
                className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer"
                style={{
                  border: '1px solid #E5E0DA',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: i % 3 === 0 ? '4/5' : '4/3' }}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: 'rgba(26,25,23,0.4)' }}
                  />
                </div>

                <div className="p-4" style={{ backgroundColor: '#FAF9F6' }}>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-sm font-medium" style={{ color: '#1A1917' }}>
                        {project.title}
                      </h3>
                      <p className="text-xs" style={{ color: '#7A756E' }}>
                        {project.location}
                      </p>
                    </div>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#F0EDEA', color: '#7A756E', border: '1px solid #E5E0DA' }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Colour swatches */}
                  {project.colours && (
                    <div className="flex gap-1.5 mt-3">
                      {project.colours.map(colourName => {
                        const colour = ALL_COLOURS.find(c => c.name === colourName);
                        return colour ? (
                          <div
                            key={colourName}
                            title={colourName}
                            className="rounded-full border border-white/50"
                            style={{
                              width: 16,
                              height: 16,
                              backgroundColor: colour.hex,
                              boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                            }}
                          />
                        ) : null;
                      })}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
