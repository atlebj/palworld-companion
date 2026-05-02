'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';

type SearchEntryType = 'pal' | 'tool' | 'guide' | 'doc';

type SearchEntry = {
  type: SearchEntryType;
  slug: string;
  title: string;
  description: string;
  /** Pal-only: type list e.g. ["Fire", "Dark"] */
  types?: string[];
  /** Pal-only: work suitability names e.g. ["mining", "handiwork"] */
  works?: string[];
};

const TYPE_LABEL: Record<SearchEntryType, string> = {
  pal: 'Pal',
  tool: 'Tool',
  guide: 'Guide',
  doc: 'Doc',
};

const TYPE_BADGE_CLASS: Record<SearchEntryType, string> = {
  pal: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
  tool: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
  guide: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  doc: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
};

const MAX_RESULTS = 30;

/**
 * Returns a numeric score for a query against a single entry. Lower is better;
 * negative means "no match — exclude". We use this to rank results so exact
 * name matches surface before generic substring hits.
 */
function score(entry: SearchEntry, q: string): number {
  const title = entry.title.toLowerCase();

  // Pal-specific haystacks (types, works) get folded into a separate signal
  const tags: string[] = [];
  if (entry.types) tags.push(...entry.types.map((t) => t.toLowerCase()));
  if (entry.works) tags.push(...entry.works.map((w) => w.toLowerCase()));
  const tagBlob = tags.join(' ');

  const desc = entry.description.toLowerCase();

  if (title === q) return 0;
  if (title.startsWith(q)) return 10;
  if (title.includes(q)) return 20;
  // Multi-word title match (every word in query must appear somewhere in title)
  const words = q.split(/\s+/).filter(Boolean);
  if (words.length > 1 && words.every((w) => title.includes(w))) return 25;
  if (tagBlob.includes(q)) return 30;
  if (desc.includes(q)) return 40;
  return -1;
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState<SearchEntry[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Load the index once on mount.
  useEffect(() => {
    fetch('/search-index.json')
      .then((res) => res.json())
      .then((data) => setIndex(data))
      .catch((err) => console.error('Failed to load search index', err));
  }, []);

  // Global ⌘K / Ctrl+K to toggle, Esc to close.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus the input when the modal opens; reset state when it closes.
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setActiveIdx(0);
    }
  }, [isOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const ranked: Array<{ entry: SearchEntry; s: number }> = [];
    for (const entry of index) {
      const s = score(entry, q);
      if (s >= 0) ranked.push({ entry, s });
    }
    ranked.sort((a, b) => {
      if (a.s !== b.s) return a.s - b.s;
      return a.entry.title.localeCompare(b.entry.title);
    });
    return ranked.slice(0, MAX_RESULTS).map((r) => r.entry);
  }, [query, index]);

  // Keep the active index inside the result range as the query changes.
  useEffect(() => {
    setActiveIdx(0);
  }, [query]);

  const handleSelect = useCallback(
    (slug: string) => {
      setIsOpen(false);
      router.push(slug);
    },
    [router]
  );

  // Arrow-key navigation inside the result list.
  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (results.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => (i + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = results[activeIdx];
      if (target) handleSelect(target.slug);
    }
  };

  // Ensure the active result scrolls into view when it changes.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const active = list.querySelector<HTMLElement>(`[data-idx="${activeIdx}"]`);
    if (active) {
      active.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIdx]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-sm text-[var(--color-brand-text-muted)] hover:text-[var(--color-brand-text-primary)] transition-colors bg-[var(--color-brand-bg-card)] px-3 py-1.5 rounded-md border border-[var(--color-brand-border)] w-full"
        aria-label="Open search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span>Search...</span>
        <kbd className="ml-auto hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-xs font-medium text-[var(--color-brand-text-muted)] bg-[var(--color-brand-bg-main)] rounded border border-[var(--color-brand-border)]">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
          role="presentation"
        >
          <div
            className="w-full max-w-xl bg-[var(--color-brand-bg-card)] rounded-xl shadow-2xl overflow-hidden border border-[var(--color-brand-border)] animate-in fade-in zoom-in-95 duration-100"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Search Palworld Companion"
          >
            <div className="flex items-center border-b border-[var(--color-brand-border)] px-4 py-3">
              <svg
                className="w-5 h-5 text-[var(--color-brand-text-muted)] mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={inputRef}
                type="text"
                className="flex-1 bg-transparent outline-none text-lg text-[var(--color-brand-text-primary)] placeholder-[var(--color-brand-text-muted)]"
                placeholder="Search pals, calculators, guides..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
                aria-controls="search-results"
                aria-autocomplete="list"
              />
            </div>

            <div
              id="search-results"
              ref={listRef}
              className="max-h-[60vh] overflow-y-auto py-2"
              role="listbox"
            >
              {results.length === 0 && query && (
                <p className="px-4 py-8 text-center text-sm text-[var(--color-brand-text-muted)]">
                  No results for &quot;{query}&quot;
                </p>
              )}

              {results.length === 0 && !query && (
                <p className="px-4 py-8 text-center text-sm text-[var(--color-brand-text-muted)]">
                  Try &quot;Anubis&quot;, &quot;mining&quot;, or &quot;breeding calculator&quot;.
                </p>
              )}

              {results.map((result, idx) => {
                const isActive = idx === activeIdx;
                return (
                  <div
                    key={`${result.type}-${result.slug}`}
                    data-idx={idx}
                    onClick={() => handleSelect(result.slug)}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`mx-2 px-3 py-2.5 rounded-md cursor-pointer flex items-center gap-3 ${
                      isActive
                        ? 'bg-[var(--color-brand-bg-main)] ring-1 ring-[var(--color-brand-primary)]/40'
                        : 'hover:bg-[var(--color-brand-bg-main)]/60'
                    }`}
                    role="option"
                    aria-selected={isActive}
                  >
                    <span
                      className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border ${
                        TYPE_BADGE_CLASS[result.type]
                      }`}
                    >
                      {TYPE_LABEL[result.type]}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-[var(--color-brand-text-primary)] truncate">
                        {result.title}
                      </div>
                      {result.description && (
                        <div className="text-xs text-[var(--color-brand-text-muted)] truncate mt-0.5">
                          {result.description}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {results.length > 0 && (
              <div className="hidden sm:flex items-center justify-between border-t border-[var(--color-brand-border)] px-4 py-2 text-[11px] text-[var(--color-brand-text-muted)]">
                <span className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-[var(--color-brand-bg-main)] rounded border border-[var(--color-brand-border)]">↑</kbd>
                    <kbd className="px-1.5 py-0.5 bg-[var(--color-brand-bg-main)] rounded border border-[var(--color-brand-border)]">↓</kbd>
                    navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-[var(--color-brand-bg-main)] rounded border border-[var(--color-brand-border)]">↵</kbd>
                    open
                  </span>
                </span>
                <span>
                  {results.length} of {index.length} indexed
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
