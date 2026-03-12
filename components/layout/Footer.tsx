import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#2A2725', color: '#F5F3F0' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span
                className="text-xl font-serif block"
                style={{ fontFamily: 'var(--font-display, serif)', fontWeight: 400 }}
              >
                Chalk & Line
              </span>
              <span className="text-xs tracking-widest uppercase opacity-50">Decorating</span>
            </div>
            <p className="text-sm leading-relaxed opacity-70">
              Professional decorating and colour consultancy, Nottingham.
            </p>
            <p className="text-xs mt-6 opacity-40">
              This is a demo website created by NorthSummit Agency to showcase web design capabilities for trades businesses. Chalk & Line Decorating is a fictional brand.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest uppercase opacity-50 mb-5">Navigation</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase opacity-50 mb-5">Contact</p>
            <div className="flex flex-col gap-3 text-sm opacity-70">
              <a href="tel:01150000000" className="hover:opacity-100 transition-opacity">0115 000 0000</a>
              <a href="mailto:hello@chalkandline.co.uk" className="hover:opacity-100 transition-opacity">hello@chalkandline.co.uk</a>
              <address className="not-italic leading-relaxed">
                Studio 2, Castle Yard<br />
                Nottingham NG1 6AA
              </address>
            </div>
            <p className="text-xs mt-6 opacity-40">
              Mon to Fri, 8am to 5:30pm<br />
              Saturdays by appointment
            </p>
          </div>
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          style={{ borderTop: '1px solid rgba(245,243,240,0.1)' }}
        >
          <p className="text-xs opacity-40">
            &copy; {new Date().getFullYear()} Chalk & Line Decorating. Demo site only.
          </p>
          <a
            href="https://northsummit.agency"
            className="text-xs opacity-40 hover:opacity-70 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website by NorthSummit.agency
          </a>
        </div>
      </div>
    </footer>
  );
}
