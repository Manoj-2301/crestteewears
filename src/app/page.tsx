import React from 'react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FeaturedCollections from '@/components/FeaturedCollections';
import ProductGrid from '@/components/ProductGrid';
import InstagramFeed from '@/components/InstagramFeed';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#0a0a0a',
      }}
    >
      {/* Announcement Bar - Fixed top */}
      <AnnouncementBar />

      {/* Header - Fixed below announcement bar */}
      <Header />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <Hero />

        {/* Features / Trust Bar */}
        <Features />

        {/* Featured Collections */}
        <FeaturedCollections />

        {/* Product Grid - Trending Now */}
        <ProductGrid />

        {/* Instagram Feed */}
        <InstagramFeed />

        {/* Testimonials */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
