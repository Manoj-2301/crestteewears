'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  image: string;
  alt: string;
  colors: string[];
}

const products: Product[] = [
{
  id: 1,
  name: 'Void Oversized Tee',
  price: '₹1,299',
  originalPrice: '₹1,799',
  badge: 'NEW',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d7a20a72-1772158994526.png",
  alt: 'Void oversized tee in black with bold graphic print on heavyweight cotton',
  colors: ['#000', '#1a1a1a', '#c8ff00']
},
{
  id: 2,
  name: 'Shadow Graphic Tee',
  price: '₹1,099',
  badge: 'HOT',
  image: "https://images.unsplash.com/photo-1628429480184-956c735b3493",
  alt: 'Shadow graphic tee with dark aesthetic design worn by male model',
  colors: ['#000', '#333']
},
{
  id: 3,
  name: 'Neon Pulse Hoodie',
  price: '₹2,499',
  originalPrice: '₹3,199',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1813555d7-1772574832637.png",
  alt: 'Neon pulse hoodie in dark colorway with embroidered logo detail',
  colors: ['#000', '#1a1a1a']
},
{
  id: 4,
  name: 'Dark Matter Tee',
  price: '₹1,199',
  badge: 'LIMITED',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_151c80135-1772939272069.png",
  alt: 'Dark matter tee with abstract graphic print in limited edition run',
  colors: ['#000', '#2a2a2a', '#fff']
},
{
  id: 5,
  name: 'Glitch Oversized Tee',
  price: '₹1,399',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1423abc5d-1772631660711.png",
  alt: 'Glitch oversized tee with digital art inspired graphic on premium cotton',
  colors: ['#000', '#c8ff00']
},
{
  id: 6,
  name: 'Cyber Punk Cap',
  price: '₹799',
  badge: 'NEW',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d6255e43-1778470091810.png",
  alt: 'Cyber punk cap with embroidered logo and adjustable strap in black',
  colors: ['#000', '#1a1a1a']
},
{
  id: 7,
  name: 'Static Noise Tee',
  price: '₹1,299',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1433f0613-1773756844630.png",
  alt: 'Static noise tee with abstract pattern design in oversized fit',
  colors: ['#000', '#333', '#fff']
},
{
  id: 8,
  name: 'Void Cargo Pants',
  price: '₹2,999',
  originalPrice: '₹3,999',
  badge: 'HOT',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11fcdf9b3-1772829020823.png",
  alt: 'Void cargo pants in black with multiple pockets and relaxed streetwear fit',
  colors: ['#000', '#1a1a1a']
}];


export default function ProductGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      id="drops"
      style={{
        padding: '80px 0 100px',
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid #1a1a1a'
      }}>
      
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: 800,
              letterSpacing: '-1px',
              textTransform: 'uppercase',
              color: '#fff'
            }}>
            
            Trending Now
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px'
          }}
          className="grid-cols-2 md:grid-cols-4">
          
          {products.map((product, i) =>
          <ProductCard key={product.id} product={product} index={i} />
          )}
        </div>

        {/* View All */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
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
              padding: '14px 32px',
              borderRadius: '8px',
              border: '1px solid #2a2a2a',
              cursor: 'pointer',
              transition: 'border-color 0.2s, color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#c8ff00';
              e.currentTarget.style.color = '#c8ff00';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#2a2a2a';
              e.currentTarget.style.color = '#fff';
            }}>
            
            View All Products
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>);

}

function ProductCard({ product, index }: {product: Product;index: number;}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = React.useState(false);

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
            }, index * 80);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <Link href={`/product/${product.id}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        ref={cardRef}
        style={{
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
      
      {/* Image */}
      <div
        style={{
          position: 'relative',
          borderRadius: '10px',
          overflow: 'hidden',
          aspectRatio: '3/4',
          backgroundColor: '#1a1a1a',
          marginBottom: '12px',
          border: '1px solid #2a2a2a'
        }}>
        
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          style={{
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)'
          }}
          loading="lazy" />
        
        {/* Badge */}
        {product.badge &&
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: '#c8ff00',
            color: '#000',
            fontSize: '10px',
            fontWeight: 800,
            letterSpacing: '1px',
            padding: '3px 8px',
            borderRadius: '4px'
          }}>
          
            {product.badge}
          </div>
        }
        {/* Quick Add */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '12px',
            transform: hovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.3s ease'
          }}>
          
          <button
            style={{
              width: '100%',
              backgroundColor: '#c8ff00',
              color: '#000',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
              padding: '10px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'
            }}>
            
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div>
        <div
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '4px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
          
          {product.name}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#c8ff00' }}>{product.price}</span>
          {product.originalPrice &&
          <span style={{ fontSize: '12px', color: '#525252', textDecoration: 'line-through' }}>
              {product.originalPrice}
            </span>
          }
        </div>
        {/* Color dots */}
        <div style={{ display: 'flex', gap: '4px', marginTop: '8px' }}>
          {product.colors.map((color, i) =>
          <div
            key={i}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: color,
              border: '1px solid #2a2a2a'
            }} />

          )}
        </div>
      </div>
    </div>
    </Link>
  );

}