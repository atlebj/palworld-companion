'use client';

import dynamic from 'next/dynamic';

// Leaflet touches `window` on import so it must run client-side only.
// In Next 16+, `ssr: false` inside next/dynamic is only allowed in client
// components — that's why this wrapper exists separately from page.tsx.
const MapClient = dynamic(() => import('./MapClient').then((m) => m.MapClient), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[70vh] text-[var(--color-brand-text-muted)]">
      Loading map…
    </div>
  ),
});

export default function MapClientLoader() {
  return <MapClient />;
}
