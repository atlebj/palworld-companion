'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { items, type ItemCategory } from '../../data/items';
import { Search, Coins, Weight } from 'lucide-react';

const CATEGORY_ORDER: ItemCategory[] = [
  'Sphere', 'Weapon', 'Ammo', 'Armor', 'Accessory',
  'Material', 'Food', 'Consumable', 'Schematic', 'Glider', 'Key Item',
];

const CATEGORY_STYLES: Record<ItemCategory, { bg: string; text: string; ring: string }> = {
  Sphere:     { bg: 'bg-sky-900/30',    text: 'text-sky-400',     ring: 'border-sky-500/40' },
  Weapon:     { bg: 'bg-rose-900/30',   text: 'text-rose-400',    ring: 'border-rose-500/40' },
  Ammo:       { bg: 'bg-orange-900/30', text: 'text-orange-400',  ring: 'border-orange-500/40' },
  Armor:      { bg: 'bg-blue-900/30',   text: 'text-blue-300',    ring: 'border-blue-500/40' },
  Accessory:  { bg: 'bg-fuchsia-900/30',text: 'text-fuchsia-300', ring: 'border-fuchsia-500/40' },
  Material:   { bg: 'bg-stone-700/40',  text: 'text-stone-200',   ring: 'border-stone-500/40' },
  Food:       { bg: 'bg-amber-900/30',  text: 'text-amber-300',   ring: 'border-amber-500/40' },
  Consumable: { bg: 'bg-emerald-900/30',text: 'text-emerald-300', ring: 'border-emerald-500/40' },
  Schematic:  { bg: 'bg-purple-900/30', text: 'text-purple-300',  ring: 'border-purple-500/40' },
  Glider:     { bg: 'bg-cyan-900/30',   text: 'text-cyan-300',    ring: 'border-cyan-500/40' },
  'Key Item': { bg: 'bg-yellow-900/30', text: 'text-yellow-300',  ring: 'border-yellow-500/40' },
};

const PAGE_SIZE = 60;

export default function ItemDatabasePage() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'All' | ItemCategory>('All');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();
    return items.filter((item) => {
      if (categoryFilter !== 'All' && item.category !== categoryFilter) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q) ||
        (item.description ?? '').toLowerCase().includes(q)
      );
    });
  }, [search, categoryFilter]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [search, categoryFilter]);

  const visible = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const counts = useMemo(() => {
    const out: Record<string, number> = { All: items.length };
    for (const it of items) out[it.category] = (out[it.category] ?? 0) + 1;
    return out;
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-100">Item Database</h1>
        <p className="text-slate-400">
          Every Palworld item — {items.length} entries across {CATEGORY_ORDER.length} categories.
        </p>
      </div>

      <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-lg space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search by name, id, or description..."
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <CategoryPill
            label={`All (${counts.All})`}
            active={categoryFilter === 'All'}
            onClick={() => setCategoryFilter('All')}
          />
          {CATEGORY_ORDER.filter((c) => counts[c] > 0).map((c) => (
            <CategoryPill
              key={c}
              label={`${c} (${counts[c]})`}
              active={categoryFilter === c}
              onClick={() => setCategoryFilter(c)}
            />
          ))}
        </div>
      </div>

      <p className="text-sm text-slate-500">
        Showing {visible.length} of {filteredItems.length} items
        {filteredItems.length !== items.length ? ` (${items.length} total)` : ''}.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((item) => {
          const styles = CATEGORY_STYLES[item.category];
          return (
            <Link
              key={item.id}
              href={`/items/${item.id}`}
              className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-slate-800/80 transition-colors block"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="w-12 h-12 bg-slate-900 rounded-lg p-1 shrink-0 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="48px"
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-100 truncate">{item.name}</h3>
                  <span
                    className={`inline-block mt-1 text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border ${styles.bg} ${styles.text} ${styles.ring}`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>

              {item.description ? (
                <p className="text-sm text-slate-400 line-clamp-2">{item.description}</p>
              ) : null}

              <div className="mt-3 pt-2 border-t border-slate-700 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Coins className="w-3 h-3" /> {item.gold > 0 ? item.gold.toLocaleString() : '—'}
                </span>
                <span className="flex items-center gap-1">
                  <Weight className="w-3 h-3" /> {item.weight}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center py-12 text-slate-500">
          No items match your filters.
        </div>
      ) : null}

      {hasMore ? (
        <div className="flex justify-center pt-4">
          <button
            type="button"
            onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
            className="px-6 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-slate-200 font-bold transition-colors"
          >
            Show more ({filteredItems.length - visibleCount} remaining)
          </button>
        </div>
      ) : null}
    </div>
  );
}

function CategoryPill({
  label, active, onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  const base = 'px-3 py-1.5 rounded-md text-xs font-bold border transition-colors';
  if (active) {
    return (
      <button type="button" onClick={onClick} className={`${base} bg-sky-600 text-white border-sky-500`}>
        {label}
      </button>
    );
  }
  return (
    <button type="button" onClick={onClick} className={`${base} bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500`}>
      {label}
    </button>
  );
}
