'use client';

import React, { useEffect, useRef } from 'react';

interface Testimonial {
  initials: string;
  name: string;
  verified: boolean;
  rating: number;
  title: string;
  text: string;
  product: string;
}

const testimonials: Testimonial[] = [
  {
    initials: 'RV',
    name: 'Rohan V.',
    verified: true,
    rating: 5,
    title: 'Best tee I\'ve ever owned!',
    text: 'The fabric quality is absolutely insane. Perfect oversized fit, pre-shrunk so it stays the same wash after wash. Already ordered 3 more from the Void collection.',
    product: 'Void Oversized Tee',
  },
  {
    initials: 'SK',
    name: 'Siddharth K.',
    verified: true,
    rating: 4,
    title: 'Dope quality, fast delivery',
    text: 'Really comfortable and the print is fire. The oversized fit is exactly on point. Only wish there were more color options. Delivery was super fast!',
    product: 'Shadow Graphic Tee',
  },
  {
    initials: 'AM',
    name: 'Aryan M.',
    verified: true,
    rating: 5,
    title: 'Worth every rupee',
    text: 'Premium feel, premium look. The 240 GSM cotton is thick but breathable. This is my go-to brand for streetwear now. Absolutely recommend to everyone.',
    product: 'Neon Pulse Hoodie',
  },
  {
    initials: 'NP',
    name: 'Nisha P.',
    verified: true,
    rating: 5,
    title: 'Obsessed with the quality',
    text: 'Bought the Cyber Punk Cap and it looks even better in person. The embroidery is clean and the fit is perfect. My friends keep asking where I got it!',
    product: 'Cyber Punk Cap',
  },
  {
    initials: 'KR',
    name: 'Karan R.',
    verified: false,
    rating: 4,
    title: 'Solid streetwear brand',
    text: 'Been buying from VOIDWEAR for 8 months now. Every piece has been consistent in quality. The Glitch Tee is my absolute favorite. Keep dropping new stuff!',
    product: 'Glitch Oversized Tee',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 24 24"
          fill={star <= rating ? '#c8ff00' : 'none'}
          stroke={star <= rating ? '#c8ff00' : '#525252'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="14"
          height="14"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
                  el.style.transform = 'translateX(0)';
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
        padding: '80px 0 100px',
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid #1a1a1a',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-1px',
              textTransform: 'uppercase',
              color: '#fff',
            }}
          >
            What They Say
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} cardRefs={cardRefs} />
          ))}
        </div>

        {/* Second row - 2 cards centered */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
            marginTop: '16px',
            maxWidth: '800px',
            margin: '16px auto 0',
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {testimonials.slice(3).map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i + 3} cardRefs={cardRefs} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
  cardRefs,
}: {
  testimonial: Testimonial;
  index: number;
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}) {
  return (
    <div
      ref={(el) => { cardRefs.current[index] = el; }}
      style={{
        backgroundColor: '#1e1e1e',
        border: '1px solid #2a2a2a',
        borderRadius: '12px',
        padding: '24px',
        opacity: 0,
        transform: 'translateX(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      {/* Top */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Avatar */}
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#c8ff00',
              color: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '13px',
              fontWeight: 800,
              flexShrink: 0,
            }}
          >
            {testimonial.initials}
          </div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>{testimonial.name}</div>
            {testimonial.verified && (
              <div style={{ fontSize: '11px', color: '#c8ff00', marginTop: '2px' }}>✓ Verified Purchase</div>
            )}
          </div>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Text */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
          {testimonial.title}
        </div>
        <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#a3a3a3' }}>{testimonial.text}</p>
      </div>

      {/* Product tag */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: '#141414',
          border: '1px solid #2a2a2a',
          borderRadius: '6px',
          padding: '4px 10px',
          fontSize: '12px',
          color: '#a3a3a3',
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        {testimonial.product}
      </div>
    </div>
  );
}
