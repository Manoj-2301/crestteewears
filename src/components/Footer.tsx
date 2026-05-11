'use client';

import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const shopLinks = [
    { label: 'New Arrivals', href: '#' },
    { label: 'Best Sellers', href: '#' },
    { label: 'Oversized Tees', href: '#' },
    { label: 'Graphic Tees', href: '#' },
    { label: 'Accessories', href: '#' },
  ];

  const helpLinks = [
    { label: 'Size Guide', href: '#' },
    { label: 'Shipping Info', href: '#' },
    { label: 'Returns & Exchange', href: '#' },
    { label: 'Track Order', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Story', href: '#' },
    { label: 'Careers', href: '#' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid #1a1a1a',
      }}
    >
      {/* Top */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '64px 24px 48px',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px',
        }}
        className="grid-cols-1 md:grid-cols-4"
      >
        {/* Brand */}
        <div>
          <a
            href="#"
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: '22px',
              fontWeight: 900,
              letterSpacing: '-0.5px',
              color: '#fff',
              textDecoration: 'none',
              display: 'inline-block',
              marginBottom: '16px',
            }}
          >
            VOID<span style={{ color: '#c8ff00' }}>WEAR</span>
          </a>
          <p
            style={{
              fontSize: '14px',
              lineHeight: 1.7,
              color: '#a3a3a3',
              marginBottom: '24px',
              maxWidth: '280px',
            }}
          >
            Premium streetwear for the fearless. Bold designs, limited runs, unmatched quality.
          </p>

          {/* Newsletter */}
          <div style={{ marginBottom: '24px' }}>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#fff',
                letterSpacing: '0.5px',
                marginBottom: '12px',
              }}
            >
              Get 10% Off Your First Order
            </div>
            {subscribed ? (
              <div
                style={{
                  fontSize: '13px',
                  color: '#c8ff00',
                  fontWeight: 600,
                }}
              >
                ✓ You\'re in! Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    backgroundColor: '#141414',
                    border: '1px solid #2a2a2a',
                    borderRight: 'none',
                    borderRadius: '8px 0 0 8px',
                    padding: '10px 14px',
                    fontSize: '13px',
                    color: '#fff',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#c8ff00',
                    color: '#000',
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    padding: '10px 16px',
                    borderRadius: '0 8px 8px 0',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#d4ff33'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#c8ff00'; }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              {
                label: 'Instagram',
                href: 'https://instagram.com',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                ),
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 60.81 60.81 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 60.81 60.81 0 0 1-15 0 2 2 0 0 1-2-2z" />
                    <polyline points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                ),
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com',
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#1e1e1e',
                  border: '1px solid #2a2a2a',
                  borderRadius: '8px',
                  color: '#a3a3a3',
                  transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c8ff00';
                  e.currentTarget.style.borderColor = '#c8ff00';
                  e.currentTarget.style.backgroundColor = 'rgba(200,255,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#a3a3a3';
                  e.currentTarget.style.borderColor = '#2a2a2a';
                  e.currentTarget.style.backgroundColor = '#1e1e1e';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Shop Links */}
        <FooterColumn title="Shop" links={shopLinks} />

        {/* Help Links */}
        <FooterColumn title="Help" links={helpLinks} />

        {/* Company Links */}
        <FooterColumn title="Company" links={companyLinks} />
      </div>

      {/* Bottom */}
      <div
        style={{
          borderTop: '1px solid #1a1a1a',
          padding: '20px 24px',
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <p style={{ fontSize: '13px', color: '#525252' }}>
          &copy; 2025 VOIDWEAR. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          {['Privacy', 'Terms', 'Cookies'].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: '13px',
                color: '#525252',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#a3a3a3'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#525252'; }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4
        style={{
          fontFamily: 'var(--font-space-grotesk), sans-serif',
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          color: '#fff',
          marginBottom: '20px',
        }}
      >
        {title}
      </h4>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              style={{
                fontSize: '14px',
                color: '#a3a3a3',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#c8ff00'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#a3a3a3'; }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
