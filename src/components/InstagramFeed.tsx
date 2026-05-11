'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const instagramImages = [
{
  src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
  alt: 'VOIDWEAR Instagram post showing oversized tee in urban street setting'
},
{
  src: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=300&fit=crop',
  alt: 'VOIDWEAR Instagram post featuring shadow graphic tee worn by model'
},
{
  src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop',
  alt: 'VOIDWEAR Instagram post of limited edition hoodie with neon accents'
},
{
  src: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=300&h=300&fit=crop',
  alt: 'VOIDWEAR Instagram post showing flat lay of new collection pieces'
},
{
  src: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=300&h=300&fit=crop',
  alt: 'VOIDWEAR Instagram post of glitch tee worn in outdoor urban environment'
},
{
  src: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=300&h=300&fit=crop',
  alt: 'VOIDWEAR Instagram post featuring dark matter tee with bold graphic'
}];


export default function InstagramFeed() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            itemRefs.current.forEach((el, i) => {
              if (el) {
                setTimeout(() => {
                  el.style.opacity = '1';
                  el.style.transform = 'scale(1)';
                }, i * 80);
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
        borderTop: '1px solid #1a1a1a'
      }}>
      
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-1px',
              textTransform: 'uppercase',
              color: '#fff'
            }}>
            
            @VOIDWEAR
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '8px'
          }}
          className="grid-cols-3 sm:grid-cols-6">
          
          {instagramImages.map((img, i) =>
          <div
            key={i}
            ref={(el) => {itemRefs.current[i] = el;}}
            style={{
              position: 'relative',
              aspectRatio: '1',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer',
              opacity: 0,
              transform: 'scale(0.95)',
              transition: 'opacity 0.4s ease, transform 0.4s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              const overlay = e.currentTarget.querySelector('.ig-overlay') as HTMLElement;
              if (overlay) overlay.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              const overlay = e.currentTarget.querySelector('.ig-overlay') as HTMLElement;
              if (overlay) overlay.style.opacity = '0';
            }}>
            
              <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 16vw, 33vw"
              style={{ objectFit: 'cover' }}
              loading="lazy" />
            
              <div
              className="ig-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(200,255,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}>
              
                <svg viewBox="0 0 24 24" fill="none" stroke="#c8ff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Follow Button */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
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
              padding: '12px 28px',
              borderRadius: '8px',
              border: '1px solid #2a2a2a',
              transition: 'border-color 0.2s, color 0.2s',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#c8ff00';
              e.currentTarget.style.color = '#c8ff00';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#2a2a2a';
              e.currentTarget.style.color = '#fff';
            }}>
            
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>);

}