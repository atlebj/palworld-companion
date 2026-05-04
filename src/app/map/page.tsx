import MapClientLoader from './MapClientLoader';

export default function MapPage() {
  return (
    <div className="max-w-6xl mx-auto py-4 space-y-4">
      <div className="flex items-baseline gap-3 flex-wrap">
        <h1 className="text-3xl font-bold text-[var(--color-brand-text-primary)]">
          Resource Map
        </h1>
        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border bg-amber-500/15 text-amber-300 border-amber-500/30">
          Beta
        </span>
      </div>
      <p className="text-[var(--color-brand-text-secondary)] max-w-3xl">
        Interactive map of Palpagos. Toggle marker categories on the left.
        Marker dataset adapted from{' '}
        <a
          href="https://github.com/fa0311/palworld-map"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-brand-primary)] underline"
        >
          fa0311/palworld-map
        </a>{' '}
        (MIT). Names are still Japanese — translations welcome.
      </p>

      <MapClientLoader />
    </div>
  );
}
