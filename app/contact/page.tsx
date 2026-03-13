'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [service, setService] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20" style={{ backgroundColor: '#1A1917' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(245,243,240,0.5)' }}>
            Get in touch
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
            Let us start with the right colour.
          </h1>
          <p className="mt-4 text-base max-w-lg" style={{ color: 'rgba(245,243,240,0.6)' }}>
            We aim to visit for a quote within 5 working days. Free colour advice included with every site visit.
          </p>
        </div>
      </section>

      {/* Form + details */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#FAF9F6' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact details */}
            <div>
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#7A756E' }}>Phone</p>
                  <a href="tel:01150000000" className="text-xl font-medium transition-opacity hover:opacity-70" style={{ color: '#1A1917' }}>
                    0115 000 0000
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#7A756E' }}>Email</p>
                  <a href="mailto:hello@chalkandline.co.uk" className="text-base transition-opacity hover:opacity-70" style={{ color: '#1A1917' }}>
                    hello@chalkandline.co.uk
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#7A756E' }}>Address</p>
                  <address className="not-italic leading-relaxed" style={{ color: '#4A4540' }}>
                    Studio 2, Castle Yard<br />
                    Nottingham NG1 6AA
                  </address>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#7A756E' }}>Hours</p>
                  <p style={{ color: '#4A4540' }}>Monday to Friday, 8am to 5:30pm</p>
                  <p className="text-sm mt-1" style={{ color: '#7A756E' }}>Saturdays by appointment</p>
                </div>
              </div>

              <div className="mt-10 pt-8" style={{ borderTop: '1px solid #E5E0DA' }}>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: '#4A4540' }}
                >
                  We do not quote over the phone. Every project gets a proper site visit so we can assess the surfaces, the light, and understand what you are trying to achieve. The quote you receive is fixed.
                </p>
                <p
                  className="text-sm mt-4 font-medium"
                  style={{ color: '#C4956B' }}
                >
                  Free colour advice included with every quote.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center gap-5 py-16 text-center rounded-xl"
                  style={{ border: '1px solid #E5E0DA', backgroundColor: '#F0EDEA' }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#8B9E7E', color: 'white', fontSize: '1.5rem' }}
                  >
                    &#10003;
                  </div>
                  <div>
                    <h3
                      className="font-serif text-xl mb-2"
                      style={{ fontFamily: 'var(--font-display, serif)', fontWeight: 400, color: '#1A1917' }}
                    >
                      Thank you, we will be in touch.
                    </h3>
                    <p className="text-sm" style={{ color: '#7A756E' }}>
                      Demo form. No data was submitted.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 p-8 rounded-xl"
                  style={{ backgroundColor: '#F0EDEA', border: '1px solid #E5E0DA' }}
                >
                  <h2
                    className="font-serif text-xl mb-2"
                    style={{ fontFamily: 'var(--font-display, serif)', fontWeight: 400, color: '#1A1917' }}
                  >
                    Request a quote
                  </h2>

                  {[
                    { label: 'Your name', type: 'text', required: true },
                    { label: 'Phone number', type: 'tel', required: true },
                    { label: 'Email address', type: 'email', required: true },
                    { label: 'Postcode', type: 'text', required: true },
                  ].map(field => (
                    <div key={field.label} className="relative">
                      <input
                        type={field.type}
                        placeholder={field.label}
                        required={field.required}
                        className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all duration-200"
                        style={{
                          backgroundColor: '#FAF9F6',
                          border: '1px solid #E5E0DA',
                          color: '#1A1917',
                        }}
                        onFocus={e => (e.target.style.borderColor = '#C4956B')}
                        onBlur={e => (e.target.style.borderColor = '#E5E0DA')}
                      />
                    </div>
                  ))}

                  <select
                    value={service}
                    onChange={e => setService(e.target.value)}
                    required
                    className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all duration-200 appearance-none"
                    style={{
                      backgroundColor: '#FAF9F6',
                      border: '1px solid #E5E0DA',
                      color: service ? '#1A1917' : '#7A756E',
                    }}
                  >
                    <option value="" disabled>Service required</option>
                    <option value="interior">Interior Painting</option>
                    <option value="exterior">Exterior Painting</option>
                    <option value="wallpapering">Wallpapering</option>
                    <option value="consultation">Colour Consultation</option>
                    <option value="period">Period Restoration</option>
                    <option value="unsure">Not sure yet</option>
                  </select>

                  {service === 'interior' && (
                    <input
                      type="number"
                      min="1"
                      max="20"
                      placeholder="Number of rooms"
                      className="w-full px-4 py-3 text-sm rounded-lg outline-none"
                      style={{
                        backgroundColor: '#FAF9F6',
                        border: '1px solid #E5E0DA',
                        color: '#1A1917',
                      }}
                    />
                  )}

                  <select
                    className="w-full px-4 py-3 text-sm rounded-lg outline-none appearance-none"
                    style={{
                      backgroundColor: '#FAF9F6',
                      border: '1px solid #E5E0DA',
                      color: '#7A756E',
                    }}
                  >
                    <option value="" disabled selected>Preferred start date</option>
                    <option value="asap">As soon as possible</option>
                    <option value="2weeks">Within 2 weeks</option>
                    <option value="month">Within a month</option>
                    <option value="flexible">Flexible</option>
                  </select>

                  <textarea
                    placeholder="Tell us about the project..."
                    rows={4}
                    className="w-full px-4 py-3 text-sm rounded-lg outline-none resize-none"
                    style={{
                      backgroundColor: '#FAF9F6',
                      border: '1px solid #E5E0DA',
                      color: '#1A1917',
                    }}
                  />

                  <button
                    type="submit"
                    className="w-full py-4 text-sm font-medium text-white rounded-lg transition-all duration-200"
                    style={{ backgroundColor: '#C4956B' }}
                  >
                    Send enquiry
                  </button>

                  <p className="text-xs text-center" style={{ color: '#7A756E' }}>
                    Demo form. No data is submitted or stored.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
