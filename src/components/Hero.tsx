'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = contentRef.current?.querySelectorAll('[data-animate]');
    if (!elements) return;
    elements.forEach((el, i) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(20px)';
      setTimeout(() => {
        (el as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      }, 100 + i * 120);
    });
    if (imageRef.current) {
      imageRef.current.style.opacity = '0';
      imageRef.current.style.transform = 'translateX(30px)';
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          imageRef.current.style.opacity = '1';
          imageRef.current.style.transform = 'none';
        }
      }, 300);
    }
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '104px',
        paddingBottom: '80px',
        overflow: 'hidden',
        backgroundColor: '#0a0a0a'
      }}>
      
      {/* Background grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(200,255,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,255,0,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          pointerEvents: 'none'
        }} />
      
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
      

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center'
        }}
        className="grid-cols-1 md:grid-cols-2">
        
        {/* Content */}
        <div ref={contentRef}>
          {/* Eyebrow */}
          <div
            data-animate
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(200,255,0,0.1)',
              border: '1px solid rgba(200,255,0,0.3)',
              borderRadius: '9999px',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: '#c8ff00',
              marginBottom: '24px'
            }}>
            
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
              <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            New Drop Every Friday
          </div>

          {/* Title */}
          <h1
            data-animate
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: 'clamp(48px, 7vw, 88px)',
              fontWeight: 900,
              lineHeight: 1.0,
              letterSpacing: '-2px',
              textTransform: 'uppercase',
              color: '#fff',
              marginBottom: '24px'
            }}>
            
            DRESS THE
            <br />
            <span style={{ color: '#c8ff00' }}>VOID</span>
          </h1>

          {/* Subtitle */}
          <p
            data-animate
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#a3a3a3',
              maxWidth: '440px',
              marginBottom: '36px'
            }}>
            
            Premium streetwear for those who move in silence. Raw aesthetics on 240 GSM heavyweight cotton. Limited runs — once it drops, it's gone forever.
          </p>

          {/* CTAs */}
          <div
            data-animate
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
            
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#c8ff00',
                color: '#000',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                padding: '14px 28px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(200,255,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}>
              
              Shop Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'transparent',
                color: '#fff',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                padding: '14px 28px',
                borderRadius: '8px',
                border: '1px solid #2a2a2a',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease, color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#c8ff00';
                e.currentTarget.style.color = '#c8ff00';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#2a2a2a';
                e.currentTarget.style.color = '#fff';
              }}>
              
              New Drops
            </button>
          </div>

          {/* Stats */}
          <div
            data-animate
            style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            
            {[
            { value: '30K+', label: 'Happy Customers' },
            { value: '150+', label: 'Unique Designs' },
            { value: '4.9★', label: 'Avg Rating' }].
            map((stat) =>
            <div key={stat.label}>
                <div
                style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#c8ff00',
                  lineHeight: 1
                }}>
                
                  {stat.value}
                </div>
                <div style={{ fontSize: '12px', color: '#a3a3a3', marginTop: '4px', letterSpacing: '0.5px' }}>
                  {stat.label}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div ref={imageRef} style={{ position: 'relative' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              aspectRatio: '3/4',
              maxWidth: '480px',
              marginLeft: 'auto',
              border: '1px solid #2a2a2a'
            }}>
            
            <Image
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=800&fit=crop"
              alt="VOIDWEAR model wearing premium oversized streetwear tee in dark aesthetic"
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              style={{ objectFit: 'cover' }}
              priority />
            
            {/* Overlay gradient */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 60%)'
              }} />
            
            {/* Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                backgroundColor: '#c8ff00',
                color: '#000',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                padding: '6px 12px',
                borderRadius: '6px'
              }}>
              
              ⚡ Trending Now
            </div>
          </div>

          {/* Floating accent card */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              right: '-20px',
              backgroundColor: '#1e1e1e',
              border: '1px solid #2a2a2a',
              borderRadius: '12px',
              padding: '16px',
              minWidth: '140px',
              animation: 'float 3s ease-in-out infinite'
            }}>
            
            <div style={{ fontSize: '11px', color: '#a3a3a3', marginBottom: '4px', letterSpacing: '0.5px' }}>LATEST DROP</div>
            <div style={{ fontFamily: 'var(--font-space-grotesk), sans-serif', fontSize: '14px', fontWeight: 700, color: '#fff' }}>Void Oversized</div>
            <div style={{ fontSize: '13px', color: '#c8ff00', fontWeight: 700, marginTop: '4px' }}>₹1,299</div>
          </div>

          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
          `}</style>
        </div>
      </div>
    </section>);

}