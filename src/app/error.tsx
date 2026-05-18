'use client';

import { useEffect } from 'react';
import Link from 'next/link';

/**
 * Catches errors thrown inside the route segment tree (anything below the
 * root layout). Must be a client component because it needs the `reset`
 * callback. The root layout itself is shielded by global-error.tsx.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Route error:', error);
  }, [error]);

  return (
    <div className="max-w-xl mx-auto py-20 px-4 text-center space-y-6">
      <div className="text-5xl">😬</div>
      <h1 className="text-3xl font-bold text-[var(--color-brand-text-primary)]">
        Something broke
      </h1>
      <p className="text-[var(--color-brand-text-secondary)]">
        This page hit an unexpected error. The rest of the site is fine — try the action below
        or pick another route from the sidebar.
      </p>
      {error.digest && (
        <p className="text-xs text-[var(--color-brand-text-muted)] font-mono">
          Reference: {error.digest}
        </p>
      )}
      <div className="flex gap-3 justify-center">
        <button onClick={reset} className="btn-primary">
          Try again
        </button>
        <Link href="/" className="btn-secondary">
          Go home
        </Link>
      </div>
    </div>
  );
}
