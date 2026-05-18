'use client';

import { useEffect, useMemo, useState } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

/**
 * Palworld map — image-overlay Leaflet using CRS.Simple.
 *
 * Tiles + marker positions adapted from https://github.com/fa0311/palworld-map (MIT).
 * Marker dataset is preprocessed at build time by scripts/build-search-index.mjs's
 * sibling — see scripts (or the README) for how to refresh.
 */

// Map image bounds in Leaflet's "simple" coordinate space.
// fa0311's tiles are designed around a 256-unit square anchored at top-left = (0,0).
// Leaflet's CRS.Simple uses [y, x] (row, column) so bounds are [bottom-left, top-right].
const MAP_SIZE = 256;
const MAP_BOUNDS: L.LatLngBoundsExpression = [
  [-MAP_SIZE, 0],
  [0, MAP_SIZE],
];

// Coordinate transform from raw pin coords (in-game [-71, 64] range, +/-)
// to Leaflet pixel coordinates inside the 256x256 image.
// Lifted from fa0311/palworld-map (MIT) — same dataset, same transform.
function toLeafletPos(x: number, y: number): [number, number] {
  const scale = 11;
  const mapRatio = 7.8;
  const sx = x > 0 ? 0 : 1;
  const sy = y > 0 ? 0 : 1;
  const X = x * scale;
  const Y = y * scale;
  const pxX = (X - sx) / mapRatio - MAP_SIZE / 2;
  const pxY = (Y - sy) / mapRatio + MAP_SIZE / 2;
  // Leaflet wants [y(lat), x(lng)] — and our Y axis is inverted.
  return [pxX, pxY];
}

type MapPin = {
  t: string;       // raw type
  l: string;       // friendly label
  n: string;       // original name (Japanese)
  x: number;
  y: number;
};

type CategoryConfig = {
  label: string;
  color: string;     // CSS color for marker dot + sidebar swatch
  defaultOn: boolean;
};

const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
  tower:         { label: 'Syndicate Tower',     color: '#f43f5e', defaultOn: true  },
  fasttravel:    { label: 'Fast Travel',          color: '#38bdf8', defaultOn: true  },
  dungeon:       { label: 'Dungeon',              color: '#a78bfa', defaultOn: true  },
  fieldboss:     { label: 'Alpha / Field Boss',   color: '#fb923c', defaultOn: true  },
  kurulis:       { label: 'Lifmunk Effigy',       color: '#34d399', defaultOn: true  },
  metal:         { label: 'Ore',                  color: '#94a3b8', defaultOn: true  },
  coal:          { label: 'Coal',                 color: '#52525b', defaultOn: true  },
  sulfur:        { label: 'Sulfur',               color: '#facc15', defaultOn: true  },
  quartz:        { label: 'Pure Quartz',          color: '#e0f2fe', defaultOn: true  },
  skillfruits:   { label: 'Skill Fruit',          color: '#86efac', defaultOn: true  },
  memo:          { label: 'Lore Note',            color: '#fcd34d', defaultOn: false },
  merchantred:   { label: 'Wandering Merchant',   color: '#fca5a5', defaultOn: false },
  merchantgreen: { label: 'Wandering Merchant',   color: '#86efac', defaultOn: false },
  merchantdark:  { label: 'Black Marketeer',      color: '#a3a3a3', defaultOn: false },
  merchantpal:   { label: 'Pal Merchant',         color: '#fda4af', defaultOn: false },
  captured:      { label: 'Capture Point',        color: '#fde68a', defaultOn: false },
  chest:         { label: 'Treasure Chest',       color: '#fcd34d', defaultOn: false },
  egg:           { label: 'Egg',                  color: '#fef3c7', defaultOn: false },
};

// Render a colored circle as a leaflet DivIcon (no external image fetch needed).
function makeDotIcon(color: string, radius = 6): L.DivIcon {
  const d = radius * 2;
  return L.divIcon({
    html: `<span style="
      display:block;width:${d}px;height:${d}px;border-radius:50%;
      background:${color};border:2px solid #0f1115;
      box-shadow:0 0 0 1px rgba(255,255,255,0.4),0 1px 3px rgba(0,0,0,0.6);
    "></span>`,
    className: 'palworld-dot-icon',
    iconSize: [d + 4, d + 4],
    iconAnchor: [(d + 4) / 2, (d + 4) / 2],
  });
}

export function MapClient() {
  const [markers, setMarkers] = useState<MapPin[]>([]);
  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    Object.fromEntries(Object.entries(CATEGORY_CONFIG).map(([k, v]) => [k, v.defaultOn]))
  );

  useEffect(() => {
    fetch('/map/markers.json')
      .then((r) => r.json())
      .then((data: MapPin[]) => setMarkers(data))
      .catch((err) => console.error('Failed to load markers', err));
  }, []);

  // Pre-compute icons per category so we don't churn on every render.
  const iconsByType = useMemo(() => {
    const out: Record<string, L.DivIcon> = {};
    for (const [t, cfg] of Object.entries(CATEGORY_CONFIG)) {
      const radius = ['tower', 'fieldboss', 'fasttravel', 'dungeon'].includes(t) ? 8 : 5;
      out[t] = makeDotIcon(cfg.color, radius);
    }
    return out;
  }, []);

  const visibleMarkers = useMemo(
    () => markers.filter((m) => enabled[m.t]),
    [markers, enabled]
  );

  const countsByType = useMemo(() => {
    const out: Record<string, number> = {};
    for (const m of markers) out[m.t] = (out[m.t] || 0) + 1;
    return out;
  }, [markers]);

  const toggle = (t: string) => setEnabled((prev) => ({ ...prev, [t]: !prev[t] }));
  const setAll = (on: boolean) =>
    setEnabled(Object.fromEntries(Object.keys(CATEGORY_CONFIG).map((k) => [k, on])));

  // Sort categories so the default-on ones surface first in the sidebar.
  const sortedCategories = useMemo(
    () =>
      Object.entries(CATEGORY_CONFIG).sort(([, a], [, b]) => {
        if (a.defaultOn !== b.defaultOn) return a.defaultOn ? -1 : 1;
        return a.label.localeCompare(b.label);
      }),
    []
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4">
      {/* Filter sidebar */}
      <aside className="card p-4 space-y-3 md:max-h-[78vh] md:overflow-y-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-[var(--color-brand-text-primary)] uppercase tracking-wider">
            Layers
          </h2>
          <span className="text-xs text-[var(--color-brand-text-muted)]">
            {visibleMarkers.length}
          </span>
        </div>
        <div className="flex gap-2 text-xs">
          <button
            onClick={() => setAll(true)}
            className="flex-1 py-1 rounded border border-[var(--color-brand-border)] hover:border-[var(--color-brand-primary)]/50 text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-text-primary)] transition-colors"
          >
            All
          </button>
          <button
            onClick={() => setAll(false)}
            className="flex-1 py-1 rounded border border-[var(--color-brand-border)] hover:border-[var(--color-brand-primary)]/50 text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-text-primary)] transition-colors"
          >
            None
          </button>
        </div>
        <ul className="space-y-1.5">
          {sortedCategories.map(([t, cfg]) => {
            const count = countsByType[t] ?? 0;
            const on = !!enabled[t];
            return (
              <li key={t}>
                <label className="flex items-center gap-2 cursor-pointer text-sm py-1 px-2 rounded hover:bg-[var(--color-brand-bg-main)]/60">
                  <input
                    type="checkbox"
                    checked={on}
                    onChange={() => toggle(t)}
                    className="accent-[var(--color-brand-primary)]"
                  />
                  <span
                    className="inline-block w-3 h-3 rounded-full border border-black/40"
                    style={{ background: cfg.color }}
                    aria-hidden
                  />
                  <span className="flex-1 text-[var(--color-brand-text-primary)] truncate">
                    {cfg.label}
                  </span>
                  <span className="text-[11px] text-[var(--color-brand-text-muted)] tabular-nums">
                    {count}
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* Map */}
      <div className="card overflow-hidden">
        <MapContainer
          crs={L.CRS.Simple}
          bounds={MAP_BOUNDS}
          maxBounds={MAP_BOUNDS}
          maxBoundsViscosity={1}
          minZoom={0}
          maxZoom={5}
          zoom={1}
          center={[-MAP_SIZE / 2, MAP_SIZE / 2]}
          style={{ height: '78vh', width: '100%', background: '#0f1115' }}
          attributionControl={false}
        >
          <TileLayer
            url="/map/tiles/{z}/{y}_{x}.png"
            tileSize={256}
            noWrap
            bounds={MAP_BOUNDS}
            minZoom={0}
            maxZoom={5}
            maxNativeZoom={3}
          />
          {visibleMarkers.map((m, i) => {
            const [px, py] = toLeafletPos(m.x, m.y);
            return (
              <Marker key={`${m.t}-${i}`} position={[px, py]} icon={iconsByType[m.t]}>
                <Popup>
                  <div className="text-xs">
                    <div className="font-bold text-sm">{m.l}</div>
                    {m.n && <div className="opacity-80 mt-0.5">{m.n}</div>}
                    <div className="opacity-60 mt-1 font-mono">
                      {m.x.toFixed(1)}, {m.y.toFixed(1)}
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}
