'use client';

import React, { useEffect, useRef } from 'react';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: '240 GSM Cotton',
    desc: 'Heavyweight, pre-shrunk cotton that holds its shape wash after wash.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Limited Drops',
    desc: 'Every Friday, a new drop. Once it\'s gone, it\'s gone. No restocks.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: 'Free Shipping',
    desc: 'Free delivery on all orders above ₹999. Pan-India delivery in 3-5 days.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Easy Returns',
    desc: '7-day hassle-free returns. No questions asked, full refund guaranteed.',
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cardRefs.current.forEach((el, i) => {
              if (el) {
                setTimeout(() => {
                  el.style.opacity = '1';
                  el.style.transform = 'translateY(0)';
                }, i * 100);
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '60px 0',
        backgroundColor: '#141414',
        borderTop: '1px solid #1a1a1a',
        borderBottom: '1px solid #1a1a1a',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px',
        }}
        className="grid-cols-2 md:grid-cols-4"
      >
        {features.map((feature, i) => (
          <div
            key={feature.title}
            ref={(el) => { cardRefs.current[i] = el; }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '12px',
              opacity: 0,
              transform: 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(200,255,0,0.1)',
                border: '1px solid rgba(200,255,0,0.2)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c8ff00',
              }}
            >
              {feature.icon}
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '6px',
                }}
              >
                {feature.title}
              </div>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#a3a3a3' }}>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
