'use client';

import React, { useState } from 'react';
import { items } from '../../data/items';
import { Search } from 'lucide-react';

export default function ItemDatabasePage() {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(items.map(i => i.category)))];

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                          item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-100">Item Database</h1>
        <p className="text-slate-400">Search for spheres, materials, and schematics.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-lg">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search items..."
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors">
             <div className="flex justify-between items-start mb-2">
               <h3 className={`font-bold text-lg ${
                 item.rarity === 'Legendary' ? 'text-amber-400' :
                 item.rarity === 'Epic' ? 'text-purple-400' :
                 item.rarity === 'Rare' ? 'text-sky-400' :
                 'text-slate-200'
               }`}>
                 {item.name}
               </h3>
               <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${
                 item.rarity === 'Legendary' ? 'bg-amber-900/30 border-amber-500/50 text-amber-500' :
                 item.rarity === 'Epic' ? 'bg-purple-900/30 border-purple-500/50 text-purple-400' :
                 item.rarity === 'Rare' ? 'bg-sky-900/30 border-sky-500/50 text-sky-400' :
                 'bg-slate-700 border-slate-600 text-slate-400'
               }`}>
                 {item.rarity}
               </span>
             </div>

             <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{item.category}</div>
             <p className="text-sm text-slate-400">{item.description}</p>
             {item.weight !== undefined && (
                <div className="mt-4 pt-2 border-t border-slate-700 text-xs text-slate-500 flex justify-end">
                    Weight: {item.weight}
                </div>
             )}
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          No items found matching &quot;{search}&quot;.
        </div>
      )}
    </div>
  );
}
