'use client';

import dynamic from 'next/dynamic';

const WorldMap = dynamic(() => import('@/components/WorldMap'), { ssr: false });

export default function MapPage() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        padding: '12px 20px',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-bg-secondary)',
      }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, margin: 0 }}>Geographic View</h1>
        <p style={{ fontSize: 13, color: 'var(--color-text-muted)', margin: '4px 0 0' }}>
          Explore where philosophical traditions, thinkers, and ideas emerged and traveled across the world.
        </p>
      </div>
      <div style={{ flex: 1 }}>
        <WorldMap />
      </div>
    </div>
  );
}
