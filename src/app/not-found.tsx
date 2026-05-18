import Link from 'next/link';

export const metadata = {
  title: 'Not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto py-20 px-4 text-center space-y-6">
      <div className="text-6xl font-extrabold text-[var(--color-brand-text-muted)]/40">404</div>
      <h1 className="text-3xl font-bold text-[var(--color-brand-text-primary)]">
        That page isn&apos;t in the Paldeck
      </h1>
      <p className="text-[var(--color-brand-text-secondary)]">
        The URL you tried doesn&apos;t exist. Maybe one of these is what you wanted:
      </p>
      <div className="grid sm:grid-cols-2 gap-3 mt-6 text-left">
        <Link href="/pals" className="card p-4 hover:border-[var(--color-brand-primary)]/50 transition-colors">
          <div className="font-bold text-[var(--color-brand-text-primary)]">Paldeck</div>
          <div className="text-sm text-[var(--color-brand-text-secondary)] mt-1">
            Browse every Pal with stats and drops.
          </div>
        </Link>
        <Link href="/calculators/breeding" className="card p-4 hover:border-[var(--color-brand-primary)]/50 transition-colors">
          <div className="font-bold text-[var(--color-brand-text-primary)]">Breeding Pathfinder</div>
          <div className="text-sm text-[var(--color-brand-text-secondary)] mt-1">
            Find the shortest chain to any Pal.
          </div>
        </Link>
        <Link href="/map" className="card p-4 hover:border-[var(--color-brand-primary)]/50 transition-colors">
          <div className="font-bold text-[var(--color-brand-text-primary)]">Resource Map</div>
          <div className="text-sm text-[var(--color-brand-text-secondary)] mt-1">
            Find ore, sulfur, dungeons, and towers.
          </div>
        </Link>
        <Link href="/" className="card p-4 hover:border-[var(--color-brand-primary)]/50 transition-colors">
          <div className="font-bold text-[var(--color-brand-text-primary)]">Home</div>
          <div className="text-sm text-[var(--color-brand-text-secondary)] mt-1">
            Start over from the front page.
          </div>
        </Link>
      </div>
    </div>
  );
}
