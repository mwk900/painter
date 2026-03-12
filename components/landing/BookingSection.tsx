'use client';

import { useState } from 'react';
import { useColour } from '@/lib/colour-context';

export function BookingSection() {
  const { accentColour } = useColour();
  const [service, setService] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" style={{ backgroundColor: '#C4956B' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-36">
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="font-serif text-white"
            style={{
              fontFamily: 'var(--font-display, serif)',
              fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
              fontWeight: 400,
              letterSpacing: '-0.01em',
            }}
          >
            Let us pick the right colour. Then put it on your walls properly.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact details */}
          <div className="text-white">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs tracking-widest uppercase mb-2 opacity-70">Phone</p>
                <a href="tel:01150000000" className="text-xl font-medium hover:opacity-80 transition-opacity">
                  0115 000 0000
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase mb-2 opacity-70">Email</p>
                <a href="mailto:hello@chalkandline.co.uk" className="text-base hover:opacity-80 transition-opacity">
                  hello@chalkandline.co.uk
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase mb-2 opacity-70">Address</p>
                <address className="not-italic text-base opacity-90 leading-relaxed">
                  Studio 2, Castle Yard<br />
                  Nottingham NG1 6AA
                </address>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase mb-2 opacity-70">Hours</p>
                <p className="opacity-90">Monday to Friday, 8am to 5:30pm</p>
                <p className="opacity-70 text-sm">Saturdays by appointment</p>
              </div>
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm opacity-90 font-medium">
                  Free colour advice included with every quote.
                </p>
                <p className="text-xs opacity-60 mt-1">
                  We aim to visit for a quote within 5 working days.
                </p>
              </div>
            </div>
          </div>

          {/* Booking form */}
          <div
            className="rounded-xl p-6 lg:p-8"
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-8 text-center text-white">
                <div className="text-4xl">&#10003;</div>
                <h3
                  className="font-serif text-xl"
                  style={{ fontFamily: 'var(--font-display, serif)', fontWeight: 400 }}
                >
                  Thanks, we will be in touch.
                </h3>
                <p className="text-sm opacity-70">
                  This is a demo form. No data was submitted.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name */}
                <div className="floating-input-group">
                  <input
                    type="text"
                    placeholder=" "
                    className="floating-input"
                    required
                  />
                  <label className="floating-label">Your name</label>
                </div>

                {/* Phone */}
                <div className="floating-input-group">
                  <input
                    type="tel"
                    placeholder=" "
                    className="floating-input"
                    required
                  />
                  <label className="floating-label">Phone number</label>
                </div>

                {/* Postcode */}
                <div className="floating-input-group">
                  <input
                    type="text"
                    placeholder=" "
                    className="floating-input"
                    required
                  />
                  <label className="floating-label">Postcode</label>
                </div>

                {/* Service */}
                <div className="floating-input-group">
                  <select
                    className="floating-select"
                    value={service}
                    onChange={e => setService(e.target.value)}
                    required
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="wallpapering">Wallpapering</option>
                    <option value="consultation">Colour Consultation</option>
                    <option value="period">Period Restoration</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>

                {/* Number of rooms (if interior) */}
                {service === 'interior' && (
                  <div className="floating-input-group">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      placeholder=" "
                      className="floating-input"
                    />
                    <label className="floating-label">Number of rooms (1-10)</label>
                  </div>
                )}

                {/* Preferred start */}
                <div className="floating-input-group">
                  <select className="floating-select" defaultValue="">
                    <option value="" disabled>Preferred start</option>
                    <option value="asap">As soon as possible</option>
                    <option value="2weeks">Within 2 weeks</option>
                    <option value="month">Within a month</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                {/* Message */}
                <div className="floating-input-group">
                  <textarea
                    placeholder=" "
                    rows={3}
                    className="floating-input"
                    style={{ resize: 'vertical', minHeight: '80px', paddingTop: '1.25rem' }}
                  />
                  <label className="floating-label">Message (optional)</label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-medium rounded transition-all duration-300 mt-2"
                  style={{ backgroundColor: '#1A1917', color: '#F5F3F0' }}
                >
                  Send enquiry
                </button>

                <p className="text-xs text-center opacity-60 text-white">
                  Demo form. No data is submitted or stored.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
