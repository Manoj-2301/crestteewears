'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Collection {
  label: string;
  title: string;
  count: string;
  image: string;
  alt: string;
}

const collections: Collection[] = [
{
  label: 'New Arrivals',
  title: 'Fresh Drops',
  count: '18 Products',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12fb6d207-1772181553388.png",
  alt: 'Model wearing fresh drop streetwear oversized tee in urban setting'
},
{
  label: 'Best Sellers',
  title: 'Fan Favorites',
  count: '24 Products',
  image: "https://images.unsplash.com/photo-1579675109935-a12dd235c97f",
  alt: 'Collection of fan favorite graphic tees laid flat on dark surface'
},
{
  label: 'Limited Edition',
  title: 'Void Exclusives',
  count: '8 Products',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12750be54-1772082203139.png",
  alt: 'Limited edition exclusive streetwear hoodie with bold graphic print'
},
{
  label: 'Accessories',
  title: 'Complete the Fit',
  count: '14 Products',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_177c8d684-1774039313569.png",
  alt: 'Streetwear accessories including caps and bags to complete the outfit'
}];


export default function FeaturedCollections() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('[data-reveal]');
            elements.forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 100);
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
      id="shop"
      style={{
        padding: '100px 0',
        backgroundColor: '#0a0a0a'
      }}>
      
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div
          data-reveal
          style={{
            textAlign: 'center',
            marginBottom: '56px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease'
          }}>
          
          <h2
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              letterSpacing: '-1px',
              textTransform: 'uppercase',
              color: '#fff',
              marginBottom: '12px'
            }}>
            
            Featured Collections
          </h2>
          <p style={{ fontSize: '15px', color: '#a3a3a3' }}>
            Explore our curated collections designed for every mood
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px'
          }}
          className="grid-cols-1 sm:grid-cols-2">
          
          {collections.map((col, i) =>
          <CollectionCard key={col.title} collection={col} delay={i * 100} />
          )}
        </div>
      </div>
    </section>);

}

function CollectionCard({ collection, delay }: {collection: Collection;delay: number;}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.style.opacity = '1';
                cardRef.current.style.transform = 'translateY(0)';
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      style={{
        position: 'relative',
        borderRadius: '12px',
        overflow: 'hidden',
        aspectRatio: '4/3',
        cursor: 'pointer',
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector('img') as HTMLImageElement;
        if (img) img.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector('img') as HTMLImageElement;
        if (img) img.style.transform = 'scale(1)';
      }}>
      
      <Image
        src={collection.image}
        alt={collection.alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
        loading="lazy" />
      
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)'
        }} />
      
      {/* Content */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '24px'
        }}>
        
        <div
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#c8ff00',
            marginBottom: '6px'
          }}>
          
          {collection.label}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontSize: '22px',
            fontWeight: 800,
            color: '#fff',
            marginBottom: '4px'
          }}>
          
          {collection.title}
        </div>
        <div style={{ fontSize: '13px', color: '#a3a3a3' }}>{collection.count}</div>
      </div>
    </div>);

}