'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useColour } from '@/lib/colour-context';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function BurgerIcon({
  colour,
  animateToClose = false,
}: {
  colour: string;
  animateToClose?: boolean;
}) {
  return (
    <>
      <span
        className="block w-5 h-0.5 rounded-full transition-all duration-300"
        style={{
          backgroundColor: colour,
          transform: animateToClose ? 'translateY(7px) rotate(45deg)' : 'none',
        }}
      />
      <span
        className="block w-5 h-0.5 rounded-full transition-all duration-300"
        style={{
          backgroundColor: colour,
          opacity: animateToClose ? 0 : 1,
        }}
      />
      <span
        className="block w-5 h-0.5 rounded-full transition-all duration-300"
        style={{
          backgroundColor: colour,
          transform: animateToClose ? 'translateY(-7px) rotate(-45deg)' : 'none',
        }}
      />
    </>
  );
}

function LogoContent({
  dark,
  isHero,
  menuOpen,
}: {
  dark?: boolean;
  isHero: boolean;
  menuOpen: boolean;
}) {
  return (
    <span className="flex flex-col leading-none">
      <span
        style={{
          fontFamily: 'var(--font-display, serif)',
          color: dark ? '#1A1917' : (menuOpen ? '#1A1917' : (isHero ? '#F5F3F0' : '#1A1917')),
          fontWeight: 500,
          fontSize: '1.05rem',
          letterSpacing: '-0.01em',
          lineHeight: 1.15,
        }}
      >
        Chalk & Line
      </span>
      <span
        style={{
          fontSize: '0.6rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: dark ? '#7A756E' : (menuOpen ? '#7A756E' : (isHero ? 'rgba(245,243,240,0.6)' : '#7A756E')),
          lineHeight: 1,
        }}
      >
        Decorating
      </span>
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  // true = bar is visible; false = bar is hidden (scrolled down on mobile)
  const [barVisible, setBarVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const { selectedColour, accentColour } = useColour();
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      // Scroll direction logic for mobile bar hide/show
      if (y < 80) {
        setBarVisible(true);
      } else if (y > lastScrollY.current + 4) {
        // Scrolling down — hide bar
        setBarVisible(false);
      } else if (y < lastScrollY.current - 4) {
        // Scrolling up — show bar
        setBarVisible(true);
      }
      lastScrollY.current = y;
    };
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

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);

    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isHero = !scrolled;

  return (
    <>
      {/* ── Desktop header (full bar, always visible) ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 hidden lg:block"
        style={{
          backgroundColor: scrolled ? 'rgba(250, 249, 246, 0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #E5E0DA' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          <Link href="/" scroll={false} onClick={handleLogoClick} className="flex flex-col leading-none cursor-pointer">
            <LogoContent isHero={isHero} menuOpen={menuOpen} />
          </Link>

          <nav className="flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-60"
                style={{ color: isHero ? '#F5F3F0' : '#1A1917' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white rounded transition-all duration-300"
            style={{ backgroundColor: accentColour }}
          >
            Get a Quote
          </Link>
        </div>
      </header>

      {/* ── Mobile: full bar (shows when barVisible = true) ── */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 lg:hidden"
        animate={{ y: barVisible ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        style={{
          backgroundColor: scrolled ? 'rgba(250, 249, 246, 0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #E5E0DA' : 'none',
        }}
      >
        <div className="px-5 flex items-center justify-between h-16">
          <Link href="/" scroll={false} onClick={handleLogoClick} className="flex flex-col leading-none cursor-pointer">
            <LogoContent isHero={isHero} menuOpen={menuOpen} />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <BurgerIcon colour={isHero ? '#F5F3F0' : '#1A1917'} animateToClose={menuOpen} />
          </button>
        </div>
      </motion.header>

      {/* ── Mobile: floating logo pill (shows when bar is hidden + scrolled) ── */}
      <AnimatePresence>
        {!barVisible && scrolled && !menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.92 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-3 left-4 z-50 lg:hidden"
          >
            <Link
              href="/"
              scroll={false}
              onClick={handleLogoClick}
              className="flex items-center gap-2 cursor-pointer"
              style={{
                backgroundColor: 'rgba(250, 249, 246, 0.97)',
                backdropFilter: 'blur(12px)',
                border: '1px solid #E5E0DA',
                borderRadius: '999px',
                padding: '8px 16px 8px 14px',
                boxShadow: '0 2px 16px rgba(26,25,23,0.10)',
              }}
            >
              {/* Small paint-stroke accent dot */}
              <span
                className="flex-shrink-0 rounded-full"
                style={{ width: 8, height: 8, backgroundColor: accentColour }}
              />
              <LogoContent dark isHero={isHero} menuOpen={menuOpen} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile hamburger pill (shows when bar is hidden + scrolled, no menu open) ── */}
      <AnimatePresence>
        {!barVisible && scrolled && !menuOpen && (
          <motion.button
            initial={{ opacity: 0, y: -12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.92 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-3 right-4 z-50 lg:hidden flex flex-col items-center gap-1.5"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{
              backgroundColor: 'rgba(250, 249, 246, 0.97)',
              backdropFilter: 'blur(12px)',
              border: '1px solid #E5E0DA',
              borderRadius: '999px',
              padding: '10px 14px',
              boxShadow: '0 2px 16px rgba(26,25,23,0.10)',
            }}
          >
            <BurgerIcon colour="#1A1917" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Mobile overlay menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center px-8 lg:hidden"
            style={{ backgroundColor: selectedColour.hex }}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 p-2"
              aria-label="Close menu"
            >
              <span className="block w-5 h-0.5 bg-black/60 rotate-45 translate-y-0.5" />
              <span className="block w-5 h-0.5 bg-black/60 -rotate-45 -translate-y-0" />
            </button>

            <div className="max-w-sm mx-auto w-full">
              <p className="text-xs tracking-widest uppercase mb-8 opacity-50" style={{ color: '#1A1917' }}>
                Navigation
              </p>
              <nav className="flex flex-col gap-5">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.055, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-4xl transition-opacity hover:opacity-50 block"
                      style={{
                        fontFamily: 'var(--font-display, serif)',
                        color: '#1A1917',
                        fontWeight: 400,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-10 pt-8 border-t border-black/15">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-white rounded-full"
                  style={{ backgroundColor: '#1A1917' }}
                >
                  Get a Quote
                </Link>
                <p className="mt-5 text-sm opacity-50" style={{ color: '#1A1917' }}>
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
