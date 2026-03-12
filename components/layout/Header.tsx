'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useColour } from '@/lib/colour-context';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { selectedColour, accentColour } = useColour();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isHero = !scrolled;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(250, 249, 246, 0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #E5E0DA' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="text-lg lg:text-xl font-serif tracking-tight transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-display, serif)',
                color: isHero ? '#F5F3F0' : '#1A1917',
                fontWeight: 500,
              }}
            >
              Chalk & Line
            </span>
            <span
              className="text-xs tracking-widest uppercase transition-colors duration-300"
              style={{ color: isHero ? 'rgba(245,243,240,0.65)' : '#7A756E' }}
            >
              Decorating
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70"
                style={{ color: isHero ? '#F5F3F0' : '#1A1917' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm font-medium text-white rounded transition-all duration-300"
              style={{ backgroundColor: accentColour }}
            >
              Get a Quote
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
              aria-label="Toggle menu"
            >
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  backgroundColor: menuOpen ? '#F5F3F0' : (isHero ? '#F5F3F0' : '#1A1917'),
                  transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  backgroundColor: menuOpen ? '#F5F3F0' : (isHero ? '#F5F3F0' : '#1A1917'),
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  backgroundColor: menuOpen ? '#F5F3F0' : (isHero ? '#F5F3F0' : '#1A1917'),
                  transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center px-8"
            style={{ backgroundColor: selectedColour.hex }}
          >
            <div className="max-w-sm mx-auto w-full">
              <p
                className="text-xs tracking-widest uppercase mb-8 opacity-60"
                style={{ color: '#1A1917' }}
              >
                Menu
              </p>
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-3xl font-serif transition-opacity hover:opacity-60"
                      style={{
                        fontFamily: 'var(--font-display, serif)',
                        color: '#1A1917',
                        fontWeight: 400,
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-12 pt-8 border-t border-black/20">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-white rounded"
                  style={{ backgroundColor: '#1A1917' }}
                >
                  Get a Quote
                </Link>
                <p className="mt-6 text-sm opacity-70" style={{ color: '#1A1917' }}>
                  0115 000 0000
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
