'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  image: string;
  alt: string;
  colors: string[];
  colorNames: string[];
  sizes: string[];
  description: string;
  details: string[];
  images: {src: string;alt: string;}[];
  rating: number;
  reviewCount: number;
}

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
  size: string;
}

const allProducts: Product[] = [
{
  id: 1,
  name: 'Void Oversized Tee',
  price: '₹1,299',
  originalPrice: '₹1,799',
  badge: 'NEW',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_129fa5462-1772420507853.png",
  alt: 'Void oversized tee in black with bold graphic print on heavyweight cotton',
  colorNames: ['Jet Black', 'Charcoal', 'Acid Yellow'],
  colors: ['#000', '#1a1a1a', '#c8ff00'],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  description:
  'The Void Oversized Tee is built for those who move through the city like a shadow. Cut from 280gsm heavyweight cotton, this tee drops long, sits wide, and carries a graphic that hits different under streetlights.',
  details: [
  '280gsm heavyweight 100% cotton',
  'Oversized boxy fit — size down for a regular fit',
  'Screen-printed graphic — fade resistant',
  'Ribbed crew neck with reinforced seams',
  'Machine wash cold, tumble dry low'],

  images: [
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d7a20a72-1772158994526.png',
    alt: 'Void oversized tee front view'
  },
  {
    src: "https://images.unsplash.com/photo-1670955100468-ea82f2f89c48",
    alt: 'Void oversized tee back view'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1d7a20a72-1772158994526.png",
    alt: 'Void oversized tee detail close-up of graphic print'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1b0dbd14b-1772499606013.png",
    alt: 'Void oversized tee worn on model in urban setting'
  }],

  rating: 4.7,
  reviewCount: 128
},
{
  id: 2,
  name: 'Shadow Graphic Tee',
  price: '₹1,099',
  badge: 'HOT',
  image: 'https://images.unsplash.com/photo-1628429480184-956c735b3493',
  alt: 'Shadow graphic tee with dark aesthetic design worn by male model',
  colorNames: ['Jet Black', 'Charcoal'],
  colors: ['#000', '#333'],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  description:
  'The Shadow Graphic Tee channels raw energy into wearable art. A slim-fit silhouette with a distressed graphic that tells a story without saying a word.',
  details: [
  '220gsm combed cotton jersey',
  'Slim fit — true to size',
  'DTG printed graphic with distressed finish',
  'Taped neck seam for durability',
  'Machine wash cold, hang dry'],

  images: [
  {
    src: "https://images.unsplash.com/photo-1628429480184-956c735b3493",
    alt: 'Shadow graphic tee front view'
  },
  {
    src: "https://images.unsplash.com/photo-1628429480184-956c735b3493",
    alt: 'Shadow graphic tee side view'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1f920fc53-1777606148862.png",
    alt: 'Shadow graphic tee detail shot'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1d14a8be6-1773161885202.png",
    alt: 'Shadow graphic tee worn on model'
  }],

  rating: 4.5,
  reviewCount: 94
},
{
  id: 3,
  name: 'Neon Pulse Hoodie',
  price: '₹2,499',
  originalPrice: '₹3,199',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1299364c1-1772873083080.png",
  alt: 'Neon pulse hoodie in dark colorway with embroidered logo detail',
  colorNames: ['Jet Black', 'Charcoal'],
  colors: ['#000', '#1a1a1a'],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  description:
  'The Neon Pulse Hoodie is your armor for cold nights and loud venues. 400gsm fleece interior, embroidered logo, and a silhouette that commands space.',
  details: [
  '400gsm 80/20 cotton-polyester fleece',
  'Oversized fit with dropped shoulders',
  'Embroidered chest logo',
  'Kangaroo pocket with hidden zip',
  'Machine wash cold, tumble dry low'],

  images: [
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1813555d7-1772574832637.png',
    alt: 'Neon pulse hoodie front view'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1299364c1-1772873083080.png",
    alt: 'Neon pulse hoodie back view'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1299364c1-1772873083080.png",
    alt: 'Neon pulse hoodie detail of embroidery'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_18a2a7a2c-1772806144458.png",
    alt: 'Neon pulse hoodie worn on model'
  }],

  rating: 4.8,
  reviewCount: 212
},
{
  id: 4,
  name: 'Dark Matter Tee',
  price: '₹1,199',
  badge: 'LIMITED',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_151c80135-1772939272069.png',
  alt: 'Dark matter tee with abstract graphic print in limited edition run',
  colorNames: ['Jet Black', 'Charcoal', 'White'],
  colors: ['#000', '#2a2a2a', '#fff'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  description:
  'Limited to 200 units. The Dark Matter Tee is a collector\'s piece — abstract cosmic print on heavyweight cotton, numbered at the hem.',
  details: [
  '300gsm heavyweight cotton',
  'Limited edition — 200 units only',
  'Numbered at hem',
  'All-over sublimation print',
  'Cold wash only, do not tumble dry'],

  images: [
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_151c80135-1772939272069.png',
    alt: 'Dark matter tee front view'
  },
  {
    src: "https://images.unsplash.com/photo-1576005257047-410211e1ffa2",
    alt: 'Dark matter tee back view'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_151c80135-1772939272069.png",
    alt: 'Dark matter tee detail of print'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_151c80135-1772939272069.png",
    alt: 'Dark matter tee worn on model'
  }],

  rating: 4.9,
  reviewCount: 67
},
{
  id: 5,
  name: 'Glitch Oversized Tee',
  price: '₹1,399',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ab17f27d-1772180403777.png",
  alt: 'Glitch oversized tee with digital art inspired graphic on premium cotton',
  colorNames: ['Jet Black', 'Acid Yellow'],
  colors: ['#000', '#c8ff00'],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  description:
  'Inspired by corrupted data and digital noise. The Glitch Oversized Tee wears the language of the internet on heavyweight cotton.',
  details: [
  '280gsm heavyweight cotton',
  'Oversized boxy fit',
  'Multi-layer screen print',
  'Dropped shoulders',
  'Machine wash cold'],

  images: [
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1423abc5d-1772631660711.png',
    alt: 'Glitch oversized tee front view'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_12fb6d207-1772181553388.png",
    alt: 'Glitch oversized tee back view'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1ab17f27d-1772180403777.png",
    alt: 'Glitch oversized tee detail shot'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_10c51b19e-1768751080179.png",
    alt: 'Glitch oversized tee worn on model'
  }],

  rating: 4.6,
  reviewCount: 83
},
{
  id: 6,
  name: 'Cyber Punk Cap',
  price: '₹799',
  badge: 'NEW',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e305dbf4-1778470494532.png",
  alt: 'Cyber punk cap with embroidered logo and adjustable strap in black',
  colorNames: ['Jet Black', 'Charcoal'],
  colors: ['#000', '#1a1a1a'],
  sizes: ['One Size'],
  description:
  'The Cyber Punk Cap is a 6-panel structured cap with embroidered VOIDWEAR logo and an adjustable leather strap at the back.',
  details: [
  '100% cotton twill',
  '6-panel structured fit',
  'Embroidered front logo',
  'Adjustable leather strap',
  'Spot clean only'],

  images: [
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_10537004c-1778470496330.png",
    alt: 'Cyber punk cap front view'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_14b888151-1778470372907.png",
    alt: 'Cyber punk cap side view'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_142626427-1767021418858.png",
    alt: 'Cyber punk cap back strap detail'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_142626427-1767021418858.png",
    alt: 'Cyber punk cap worn on model'
  }],

  rating: 4.4,
  reviewCount: 51
},
{
  id: 7,
  name: 'Static Noise Tee',
  price: '₹1,299',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_172b33fb6-1778470493935.png",
  alt: 'Static noise tee with abstract pattern design in oversized fit',
  colorNames: ['Jet Black', 'Charcoal', 'White'],
  colors: ['#000', '#333', '#fff'],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  description:
  'The Static Noise Tee captures the chaos of white noise in a wearable format. Abstract all-over pattern on a relaxed oversized silhouette.',
  details: [
  '260gsm cotton jersey',
  'Relaxed oversized fit',
  'All-over print',
  'Crew neck',
  'Machine wash cold'],

  images: [
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1433f0613-1773756844630.png',
    alt: 'Static noise tee front view'
  },
  {
    src: "https://images.unsplash.com/photo-1576005257047-410211e1ffa2",
    alt: 'Static noise tee back view'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1e8238ee3-1778470373052.png",
    alt: 'Static noise tee detail shot'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_101b572e8-1773476838376.png",
    alt: 'Static noise tee worn on model'
  }],

  rating: 4.5,
  reviewCount: 76
},
{
  id: 8,
  name: 'Void Cargo Pants',
  price: '₹2,999',
  originalPrice: '₹3,999',
  badge: 'HOT',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_197e466c0-1766433323404.png",
  alt: 'Void cargo pants in black with multiple pockets and relaxed streetwear fit',
  colorNames: ['Jet Black', 'Charcoal'],
  colors: ['#000', '#1a1a1a'],
  sizes: ['28', '30', '32', '34', '36'],
  description:
  'The Void Cargo Pants are built for utility and style. Six pockets, tapered leg, and a relaxed waist that sits low — the way cargo should.',
  details: [
  '300gsm cotton ripstop',
  'Relaxed fit, tapered leg',
  '6 pockets including 2 cargo',
  'Adjustable drawstring waist',
  'Machine wash cold, hang dry'],

  images: [
  {
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_11fcdf9b3-1772829020823.png',
    alt: 'Void cargo pants front view'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_197e466c0-1766433323404.png",
    alt: 'Void cargo pants back view'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_17c42d407-1772155716123.png",
    alt: 'Void cargo pants pocket detail'
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1ea98c46a-1774702001500.png",
    alt: 'Void cargo pants worn on model'
  }],

  rating: 4.8,
  reviewCount: 159
}];


const productReviews: Record<number, Review[]> = {
  1: [
  {
    id: 1,
    author: 'Arjun M.',
    rating: 5,
    date: 'Apr 28, 2025',
    title: 'Exactly what streetwear should feel like',
    body: 'The weight of this tee is insane for the price. Graphic hasn\'t faded after 10 washes. Sized up to XL for the oversized look and it\'s perfect.',
    verified: true,
    size: 'XL'
  },
  {
    id: 2,
    author: 'Priya K.',
    rating: 5,
    date: 'Apr 15, 2025',
    title: 'Premium quality, fast delivery',
    body: 'Got this in the acid yellow colorway and it\'s a statement piece. The cotton is thick and the print is crisp. Will be ordering more.',
    verified: true,
    size: 'M'
  },
  {
    id: 3,
    author: 'Rohan S.',
    rating: 4,
    date: 'Mar 30, 2025',
    title: 'Great tee, runs slightly large',
    body: 'Quality is top notch. I\'d say size down if you want a more fitted oversized look. The graphic is really well done.',
    verified: true,
    size: 'L'
  },
  {
    id: 4,
    author: 'Sneha T.',
    rating: 5,
    date: 'Mar 12, 2025',
    title: 'Best purchase this year',
    body: 'Wore this to a concert and got so many compliments. The fabric is heavy and the fit is perfect. VOIDWEAR never misses.',
    verified: true,
    size: 'S'
  }]

};

function StarRating({ rating, size = 16 }: {rating: number;size?: number;}) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((star) =>
      <svg
        key={star}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={star <= Math.round(rating) ? '#c8ff00' : 'none'}
        stroke={star <= Math.round(rating) ? '#c8ff00' : '#525252'}
        strokeWidth="2">
        
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )}
    </div>);

}

export default function ProductDetailPage({ params }: {params: Promise<{id: string;}>;}) {
  const { id } = React.use(params);
  const productId = parseInt(id, 10);
  const product = allProducts.find((p) => p.id === productId) || allProducts[0];
  const reviews = productReviews[product.id] || productReviews[1];
  const relatedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 4);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'details' | 'reviews'>('description');

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes[0] !== 'One Size') return;
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const avgRating =
  reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <AnnouncementBar />
      <Header />

      {/* Main content with top padding for fixed header */}
      <main style={{ paddingTop: '104px' }}>
        {/* Breadcrumb */}
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
          
          <Link
            href="/"
            style={{ fontSize: '13px', color: '#525252', textDecoration: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#c8ff00'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#525252'}>
            
            Home
          </Link>
          <span style={{ color: '#525252', fontSize: '13px' }}>/</span>
          <Link
            href="/#drops"
            style={{ fontSize: '13px', color: '#525252', textDecoration: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#c8ff00'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#525252'}>
            
            Shop
          </Link>
          <span style={{ color: '#525252', fontSize: '13px' }}>/</span>
          <span style={{ fontSize: '13px', color: '#a3a3a3' }}>{product.name}</span>
        </div>

        {/* Product Section */}
        <div
          style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px' }}
          className="product-layout">
          
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
              alignItems: 'start'
            }}
            className="product-grid-layout">
            
            {/* ── LEFT: Image Gallery ── */}
            <div>
              {/* Main Image */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  aspectRatio: '3/4',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #2a2a2a',
                  marginBottom: '12px'
                }}>
                
                <Image
                  src={product.images[selectedImage].src}
                  alt={product.images[selectedImage].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                  priority />
                
                {product.badge &&
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: '#c8ff00',
                    color: '#000',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    padding: '4px 10px',
                    borderRadius: '4px'
                  }}>
                  
                    {product.badge}
                  </div>
                }
              </div>

              {/* Thumbnails */}
              <div style={{ display: 'flex', gap: '8px' }}>
                {product.images.map((img, i) =>
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  style={{
                    position: 'relative',
                    flex: 1,
                    aspectRatio: '1/1',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: selectedImage === i ? '2px solid #c8ff00' : '2px solid #2a2a2a',
                    cursor: 'pointer',
                    backgroundColor: '#1a1a1a',
                    padding: 0,
                    transition: 'border-color 0.2s'
                  }}
                  aria-label={`View image ${i + 1}`}>
                  
                    <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="80px"
                    style={{ objectFit: 'cover' }} />
                  
                  </button>
                )}
              </div>
            </div>

            {/* ── RIGHT: Product Info ── */}
            <div style={{ position: 'sticky', top: '120px' }}>
              {/* Name & Rating */}
              <div style={{ marginBottom: '20px' }}>
                <h1
                  style={{
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    fontSize: 'clamp(24px, 3vw, 36px)',
                    fontWeight: 800,
                    letterSpacing: '-0.5px',
                    textTransform: 'uppercase',
                    color: '#fff',
                    marginBottom: '10px',
                    lineHeight: 1.1
                  }}>
                  
                  {product.name}
                </h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <StarRating rating={product.rating} />
                  <span style={{ fontSize: '13px', color: '#a3a3a3' }}>
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '28px'
                }}>
                
                <span
                  style={{
                    fontSize: '28px',
                    fontWeight: 800,
                    color: '#c8ff00',
                    fontFamily: 'var(--font-space-grotesk), sans-serif'
                  }}>
                  
                  {product.price}
                </span>
                {product.originalPrice &&
                <>
                    <span
                    style={{
                      fontSize: '18px',
                      color: '#525252',
                      textDecoration: 'line-through'
                    }}>
                    
                      {product.originalPrice}
                    </span>
                    <span
                    style={{
                      backgroundColor: 'rgba(200,255,0,0.1)',
                      color: '#c8ff00',
                      fontSize: '12px',
                      fontWeight: 700,
                      padding: '3px 8px',
                      borderRadius: '4px',
                      border: '1px solid rgba(200,255,0,0.2)'
                    }}>
                    
                      SAVE{' '}
                      {Math.round(
                      (parseInt(product.originalPrice.replace(/[₹,]/g, '')) -
                      parseInt(product.price.replace(/[₹,]/g, ''))) /
                      parseInt(product.originalPrice.replace(/[₹,]/g, '')) *
                      100
                    )}
                      %
                    </span>
                  </>
                }
              </div>

              {/* Color Selector */}
              <div style={{ marginBottom: '24px' }}>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#a3a3a3',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '10px'
                  }}>
                  
                  Color:{' '}
                  <span style={{ color: '#fff' }}>{product.colorNames[selectedColor]}</span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {product.colors.map((color, i) =>
                  <button
                    key={i}
                    onClick={() => setSelectedColor(i)}
                    aria-label={product.colorNames[i]}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: color,
                      border:
                      selectedColor === i ?
                      '2px solid #c8ff00' : '2px solid #2a2a2a',
                      cursor: 'pointer',
                      outline:
                      selectedColor === i ? '2px solid rgba(200,255,0,0.3)' : 'none',
                      outlineOffset: '2px',
                      transition: 'border-color 0.2s, outline 0.2s'
                    }} />

                  )}
                </div>
              </div>

              {/* Size Selector */}
              <div style={{ marginBottom: '28px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px'
                  }}>
                  
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#a3a3a3',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                    
                    Size:{' '}
                    <span style={{ color: '#fff' }}>{selectedSize || 'Select'}</span>
                  </span>
                  <button
                    style={{
                      fontSize: '12px',
                      color: '#c8ff00',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }}>
                    
                    Size Guide
                  </button>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {product.sizes.map((size) =>
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      minWidth: '48px',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border:
                      selectedSize === size ?
                      '1.5px solid #c8ff00' : '1.5px solid #2a2a2a',
                      backgroundColor:
                      selectedSize === size ? 'rgba(200,255,0,0.08)' : 'transparent',
                      color: selectedSize === size ? '#c8ff00' : '#a3a3a3',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      letterSpacing: '0.3px'
                    }}>
                    
                      {size}
                    </button>
                  )}
                </div>
              </div>

              {/* Quantity + Add to Cart */}
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                {/* Quantity */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1.5px solid #2a2a2a',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}>
                  
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{
                      width: '40px',
                      height: '48px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#a3a3a3',
                      fontSize: '18px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                    
                    −
                  </button>
                  <span
                    style={{
                      width: '40px',
                      textAlign: 'center',
                      color: '#fff',
                      fontSize: '14px',
                      fontWeight: 600
                    }}>
                    
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{
                      width: '40px',
                      height: '48px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#a3a3a3',
                      fontSize: '18px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                    
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  style={{
                    flex: 1,
                    backgroundColor: addedToCart ? '#a8d900' : '#c8ff00',
                    color: '#000',
                    fontWeight: 800,
                    fontSize: '14px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    padding: '14px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s, transform 0.1s',
                    transform: addedToCart ? 'scale(0.98)' : 'scale(1)'
                  }}>
                  
                  {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
              </div>

              {/* Wishlist */}
              <button
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  color: '#a3a3a3',
                  fontWeight: 600,
                  fontSize: '13px',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1.5px solid #2a2a2a',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'border-color 0.2s, color 0.2s',
                  marginBottom: '28px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#c8ff00';
                  e.currentTarget.style.color = '#c8ff00';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2a2a2a';
                  e.currentTarget.style.color = '#a3a3a3';
                }}>
                
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="16"
                  height="16">
                  
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Add to Wishlist
              </button>

              {/* Trust Badges */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px',
                  padding: '16px',
                  backgroundColor: '#141414',
                  borderRadius: '10px',
                  border: '1px solid #2a2a2a'
                }}>
                
                {[
                { icon: '🚚', label: 'Free shipping', sub: 'Orders over ₹999' },
                { icon: '↩️', label: 'Easy returns', sub: '7-day return policy' },
                { icon: '🔒', label: 'Secure checkout', sub: 'SSL encrypted' },
                { icon: '✅', label: 'Authentic', sub: '100% genuine product' }].
                map((badge) =>
                <div
                  key={badge.label}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  
                    <span style={{ fontSize: '18px' }}>{badge.icon}</span>
                    <div>
                      <div
                      style={{ fontSize: '12px', fontWeight: 600, color: '#fff' }}>
                      
                        {badge.label}
                      </div>
                      <div style={{ fontSize: '11px', color: '#525252' }}>
                        {badge.sub}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── Tabs: Description / Details / Reviews ── */}
          <div style={{ marginTop: '80px', borderTop: '1px solid #1a1a1a', paddingTop: '60px' }}>
            {/* Tab Nav */}
            <div
              style={{
                display: 'flex',
                gap: '0',
                borderBottom: '1px solid #2a2a2a',
                marginBottom: '40px'
              }}>
              
              {(['description', 'details', 'reviews'] as const).map((tab) =>
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '14px 28px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom:
                  activeTab === tab ? '2px solid #c8ff00' : '2px solid transparent',
                  color: activeTab === tab ? '#c8ff00' : '#525252',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  marginBottom: '-1px'
                }}>
                
                  {tab === 'reviews' ? `Reviews (${reviews.length})` : tab}
                </button>
              )}
            </div>

            {/* Tab Content */}
            {activeTab === 'description' &&
            <div style={{ maxWidth: '680px' }}>
                <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.8,
                  color: '#a3a3a3',
                  fontWeight: 400
                }}>
                
                  {product.description}
                </p>
              </div>
            }

            {activeTab === 'details' &&
            <div style={{ maxWidth: '680px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {product.details.map((detail, i) =>
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '14px 0',
                    borderBottom: '1px solid #1a1a1a',
                    fontSize: '15px',
                    color: '#a3a3a3'
                  }}>
                  
                      <span style={{ color: '#c8ff00', marginTop: '2px', flexShrink: 0 }}>
                        <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      width="14"
                      height="14">
                      
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {detail}
                    </li>
                )}
                </ul>
              </div>
            }

            {activeTab === 'reviews' &&
            <div>
                {/* Rating Summary */}
                <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '32px',
                  marginBottom: '40px',
                  padding: '28px',
                  backgroundColor: '#141414',
                  borderRadius: '12px',
                  border: '1px solid #2a2a2a',
                  flexWrap: 'wrap'
                }}>
                
                  <div style={{ textAlign: 'center' }}>
                    <div
                    style={{
                      fontSize: '56px',
                      fontWeight: 800,
                      color: '#c8ff00',
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      lineHeight: 1,
                      marginBottom: '8px'
                    }}>
                    
                      {avgRating.toFixed(1)}
                    </div>
                    <StarRating rating={avgRating} size={20} />
                    <div style={{ fontSize: '13px', color: '#525252', marginTop: '6px' }}>
                      {reviews.length} reviews
                    </div>
                  </div>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    {[5, 4, 3, 2, 1].map((star) => {
                    const count = reviews.filter((r) => r.rating === star).length;
                    const pct = count / reviews.length * 100;
                    return (
                      <div
                        key={star}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          marginBottom: '6px'
                        }}>
                        
                          <span
                          style={{ fontSize: '12px', color: '#525252', width: '12px' }}>
                          
                            {star}
                          </span>
                          <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="#c8ff00"
                          stroke="#c8ff00"
                          strokeWidth="2">
                          
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <div
                          style={{
                            flex: 1,
                            height: '6px',
                            backgroundColor: '#2a2a2a',
                            borderRadius: '3px',
                            overflow: 'hidden'
                          }}>
                          
                            <div
                            style={{
                              width: `${pct}%`,
                              height: '100%',
                              backgroundColor: '#c8ff00',
                              borderRadius: '3px',
                              transition: 'width 0.5s ease'
                            }} />
                          
                          </div>
                          <span style={{ fontSize: '12px', color: '#525252', width: '16px' }}>
                            {count}
                          </span>
                        </div>);

                  })}
                  </div>
                </div>

                {/* Review Cards */}
                <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '20px'
                }}>
                
                  {reviews.map((review) =>
                <div
                  key={review.id}
                  style={{
                    backgroundColor: '#141414',
                    borderRadius: '12px',
                    padding: '24px',
                    border: '1px solid #2a2a2a'
                  }}>
                  
                      <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '12px'
                    }}>
                    
                        <div>
                          <div
                        style={{
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#fff',
                          marginBottom: '4px'
                        }}>
                        
                            {review.author}
                          </div>
                          <StarRating rating={review.rating} size={14} />
                        </div>
                        <span style={{ fontSize: '12px', color: '#525252' }}>
                          {review.date}
                        </span>
                      </div>
                      <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: '8px'
                    }}>
                    
                        {review.title}
                      </div>
                      <p
                    style={{
                      fontSize: '14px',
                      color: '#a3a3a3',
                      lineHeight: 1.6,
                      margin: 0
                    }}>
                    
                        {review.body}
                      </p>
                      <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginTop: '14px'
                    }}>
                    
                        {review.verified &&
                    <span
                      style={{
                        fontSize: '11px',
                        color: '#c8ff00',
                        backgroundColor: 'rgba(200,255,0,0.08)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        border: '1px solid rgba(200,255,0,0.15)',
                        fontWeight: 600
                      }}>
                      
                            ✓ Verified
                          </span>
                    }
                        <span style={{ fontSize: '11px', color: '#525252' }}>
                          Size: {review.size}
                        </span>
                      </div>
                    </div>
                )}
                </div>
              </div>
            }
          </div>

          {/* ── Related Products ── */}
          <div style={{ marginTop: '80px', borderTop: '1px solid #1a1a1a', paddingTop: '60px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontSize: 'clamp(22px, 2.5vw, 32px)',
                fontWeight: 800,
                letterSpacing: '-0.5px',
                textTransform: 'uppercase',
                color: '#fff',
                marginBottom: '32px'
              }}>
              
              You Might Also Like
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px'
              }}
              className="related-grid">
              
              {relatedProducts.map((rp) =>
              <RelatedProductCard key={rp.id} product={rp} />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Responsive Styles */}
      <style jsx global>{`
        @media (max-width: 900px) {
          .product-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .product-grid-layout > div:last-child {
            position: static !important;
          }
        }
        @media (max-width: 640px) {
          .related-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>);

}

function RelatedProductCard({ product }: {product: Product;}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/product/${product.id}`}
      style={{ textDecoration: 'none', display: 'block' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      
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
          sizes="(max-width: 640px) 50vw, 25vw"
          style={{
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)'
          }}
          loading="lazy" />
        
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
      </div>
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
        <span style={{ fontSize: '14px', fontWeight: 700, color: '#c8ff00' }}>
          {product.price}
        </span>
        {product.originalPrice &&
        <span
          style={{
            fontSize: '12px',
            color: '#525252',
            textDecoration: 'line-through'
          }}>
          
            {product.originalPrice}
          </span>
        }
      </div>
    </Link>);

}