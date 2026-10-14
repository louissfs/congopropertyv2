import React, { useState, useEffect } from 'react';
import { Mail, Phone, X, ArrowUpRight } from 'lucide-react';

const GLOBAL_CSS = `
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { margin: 0; padding: 0; min-height: 100%; }
  .cp-pill-btn:hover { background-color: #ffffff !important; }
  .cp-footer-btn:hover { color: #0284c7 !important; }
  .cp-contact-card:hover { border-color: #0284c7 !important; }
  .cp-close-btn:hover { color: #0f172a !important; }
  @media (max-width: 640px) {
    .cp-header { padding: 16px 16px !important; }
    .cp-footer { padding: 20px 16px !important; justify-content: center !important; text-align: center; }
    .cp-badge { font-size: 10px !important; padding: 6px 12px !important; }
  }
`;

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    if (!isContactOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setIsContactOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isContactOpen]);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        color: '#0f172a',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        overflowX: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <style>{GLOBAL_CSS}</style>

      <section
        style={{
          position: 'relative',
          width: '100%',
          flex: '1 0 auto',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#edf2f7',
        }}
      >
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}
        >
          <svg
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <defs>
              <pattern id="congoGridPattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="60" y2="0" stroke="rgba(15,23,42,0.04)" strokeWidth="0.8" />
                <line x1="0" y1="0" x2="0" y2="60" stroke="rgba(15,23,42,0.04)" strokeWidth="0.8" />
              </pattern>
              <linearGradient id="congoRiverShine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#0284c7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            <rect width="100%" height="100%" fill="url(#congoGridPattern)" />

            <g opacity="0.35" fill="none" stroke="#94a3b8">
              <ellipse cx="610" cy="380" rx="360" ry="260" strokeWidth="0.7" strokeDasharray="3 3" />
              <ellipse cx="610" cy="380" rx="280" ry="200" strokeWidth="0.7" />
              <ellipse cx="610" cy="380" rx="200" ry="140" strokeWidth="0.7" strokeDasharray="5 3" />
            </g>

            <path
              d="M 330,260 C 370,230 420,210 490,215 C 560,220 620,185 680,180 C 730,175 790,195 830,225 C 860,250 885,290 890,340 C 895,380 910,430 925,480 C 940,530 920,580 895,620 C 870,660 840,690 790,710 C 740,730 690,690 650,670 C 610,650 580,665 540,650 C 490,630 450,580 430,530 C 410,480 370,470 330,470 C 300,470 270,490 240,490 C 220,490 205,475 220,450 C 235,425 280,410 290,380 C 300,350 280,310 300,285 Z"
              fill="rgba(255, 255, 255, 0.82)"
              stroke="#2563eb"
              strokeWidth="2.5"
              style={{ filter: 'drop-shadow(0 4px 18px rgba(37,99,235,0.12))' }}
            />

            <path
              d="M 220,450 C 270,420 310,410 330,370 C 360,320 400,280 460,265 C 530,250 620,260 700,270 C 770,280 810,330 830,400 C 850,470 820,540 850,600"
              fill="none"
              stroke="url(#congoRiverShine)"
              strokeWidth="4.2"
              strokeLinecap="round"
            />

            <path
              d="M 460,265 C 470,330 520,380 570,430 M 700,270 C 730,330 750,390 770,460"
              fill="none"
              stroke="rgba(2,132,199,0.5)"
              strokeWidth="2"
              strokeDasharray="4 3"
            />

            <line
              x1="180"
              y1="340"
              x2="980"
              y2="340"
              stroke="rgba(239, 68, 68, 0.28)"
              strokeWidth="1.2"
              strokeDasharray="6 6"
            />
            <text
              x="200"
              y="332"
              fill="rgba(239, 68, 68, 0.65)"
              fontSize="11"
              fontFamily="monospace"
              letterSpacing="2"
            >
              0° EQUATOR
            </text>
          </svg>
        </div>

        <header
          className="cp-header"
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            padding: '24px 36px',
            maxWidth: '1600px',
            width: '100%',
            margin: '0 auto',
          }}
        >
          <button
            type="button"
            className="cp-pill-btn"
            onClick={() => setIsContactOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '9999px',
              padding: '10px 24px',
              color: '#0f172a',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.02em',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
              transition: 'background-color 0.2s ease',
            }}
          >
            <span>Contact</span>
            <ArrowUpRight size={16} />
          </button>

          <div
            className="cp-badge"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              padding: '8px 18px',
              borderRadius: '9999px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              fontSize: '12px',
              fontFamily: 'monospace',
              fontWeight: 600,
              color: '#0284c7',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 8px #10b981',
                flexShrink: 0,
              }}
            />
            <span>DEMOCRATIC REPUBLIC OF CONGO</span>
          </div>
        </header>

        <div
          style={{
            position: 'relative',
            zIndex: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none',
            userSelect: 'none',
            padding: '40px 16px 60px 16px',
            textAlign: 'center',
            margin: 'auto 0',
          }}
        >
          <div
            style={{
              fontSize: '13px',
              letterSpacing: '0.35em',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#0284c7',
              marginBottom: '12px',
              opacity: 0.95,
            }}
          >
            Prime Real Estate & Strategic Assets
          </div>
          <h1
            style={{
              margin: 0,
              fontFamily: '"Impact", "Arial Narrow Bold", "Bebas Neue", "Arial Black", sans-serif',
              fontSize: 'clamp(2.2rem, 9vw, 12rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 0.95,
              color: '#0f172a',
              textTransform: 'uppercase',
              textAlign: 'center',
              textShadow: '0 6px 20px rgba(0, 0, 0, 0.06)',
              whiteSpace: 'nowrap',
              maxWidth: '100%',
            }}
          >
            CONGOPROPERTY
          </h1>
          <p
            style={{
              margin: '18px 0 0 0',
              fontSize: 'clamp(14px, 1.4vw, 17px)',
              maxWidth: '650px',
              color: '#475569',
              lineHeight: 1.5,
              fontWeight: 450,
            }}
          >
            Premier property advisory, prime developments, and strategic real estate portfolios across the Democratic Republic of Congo.
          </p>
        </div>

        <div style={{ height: '24px' }} />
      </section>

      <footer
        className="cp-footer"
        style={{
          borderTop: '1px solid #e2e8f0',
          padding: '24px 36px',
          maxWidth: '1600px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          color: '#64748b',
          fontSize: '13px',
        }}
      >
        <div>© {new Date().getFullYear()} congoproperty.com. All rights reserved.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button
            type="button"
            className="cp-footer-btn"
            onClick={() => setIsContactOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              fontSize: 'inherit',
              fontWeight: 500,
              padding: 0,
              transition: 'color 0.2s',
            }}
          >
            Contact & Advisory
          </button>
        </div>
      </footer>

      {isContactOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            overflowY: 'auto',
          }}
          onClick={() => setIsContactOpen(false)}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              color: '#0f172a',
              width: '100%',
              maxWidth: '560px',
              borderRadius: '20px',
              padding: '36px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.25)',
              position: 'relative',
              border: '1px solid rgba(0, 0, 0, 0.08)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="cp-close-btn"
              aria-label="Close contact dialog"
              onClick={() => setIsContactOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'transparent',
                border: 'none',
                color: '#64748b',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
              }}
            >
              <X size={20} />
            </button>

            <div style={{ fontSize: '12px', fontWeight: 700, color: '#10b981', letterSpacing: '0.08em' }}>
              DIRECT INQUIRIES & ADVISORY
            </div>
            <h2 id="contact-title" style={{ fontSize: '26px', fontWeight: 800, margin: '6px 0 16px 0' }}>
              Contact CongoProperty
            </h2>
            <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 20px 0', lineHeight: 1.5 }}>
              For premium acquisitions, land titles, and private real estate advisory services across the DRC.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a
                href="tel:+447835592674"
                className="cp-contact-card"
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'border-color 0.2s',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(2, 132, 199, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0284c7',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Phone Number</div>
                  <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '2px' }}>
                    +44 7835 592674
                  </div>
                </div>
              </a>

              <a
                href="mailto:ops@seavik.com"
                className="cp-contact-card"
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'border-color 0.2s',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(16, 185, 129, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Direct Email</div>
                  <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '2px' }}>
                    ops@seavik.com
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
