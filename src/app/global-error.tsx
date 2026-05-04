'use client';

import { useEffect } from 'react';

/**
 * Last-resort error boundary that wraps the root layout itself. Renders its
 * own <html>/<body> because the layout chain is broken at this point.
 *
 * Must be a client component.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          background: '#0f1115',
          color: '#E6E9F2',
          fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif',
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{ maxWidth: 480, textAlign: 'center' }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 12 }}>
            Palworld Companion is having a bad time
          </h1>
          <p style={{ opacity: 0.8, marginBottom: 24 }}>
            Something went wrong in the app shell. Try reloading.
          </p>
          {error.digest && (
            <p style={{ fontSize: 12, opacity: 0.6, fontFamily: 'monospace', marginBottom: 24 }}>
              Reference: {error.digest}
            </p>
          )}
          <button
            onClick={reset}
            style={{
              background: '#5B7CFF',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              padding: '10px 18px',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
