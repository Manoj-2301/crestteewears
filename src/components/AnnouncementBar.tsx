'use client';

import React, { useEffect, useRef } from 'react';

const messages = [
  '⚡ NEW DROP ALERT — VOID COLLECTION IS LIVE ⚡',
  '⚡ FREE SHIPPING ON ORDERS OVER ₹999 ⚡',
  '⚡ USE CODE: VOID20 FOR 20% OFF ⚡',
  '⚡ NEW DROP ALERT — VOID COLLECTION IS LIVE ⚡',
  '⚡ FREE SHIPPING ON ORDERS OVER ₹999 ⚡',
  '⚡ USE CODE: VOID20 FOR 20% OFF ⚡',
  '⚡ NEW DROP ALERT — VOID COLLECTION IS LIVE ⚡',
  '⚡ FREE SHIPPING ON ORDERS OVER ₹999 ⚡',
  '⚡ USE CODE: VOID20 FOR 20% OFF ⚡',
  '⚡ NEW DROP ALERT — VOID COLLECTION IS LIVE ⚡',
  '⚡ FREE SHIPPING ON ORDERS OVER ₹999 ⚡',
  '⚡ USE CODE: VOID20 FOR 20% OFF ⚡',
];

export default function AnnouncementBar() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        backgroundColor: '#c8ff00',
        color: '#000',
        overflow: 'hidden',
        padding: '10px 0',
        fontSize: '12px',
        fontWeight: 700,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        display: 'flex',
      }}
    >
      <div
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'marquee 25s linear infinite',
        }}
      >
        {messages?.map((msg, i) => (
          <span key={i} style={{ paddingRight: '50px' }}>{msg}</span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
