import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Coins, Weight } from 'lucide-react';
import { items, type ItemData, type ItemCategory } from '../../../data/items';
import { SITE_NAME, SITE_URL } from '../../../config/site';

export async function generateStaticParams() {
  return items.map((item) => ({ id: item.id }));
}

function buildItemDescription(item: ItemData): string {
  const desc = item.description ? ` ${item.description}` : '';
  const stats: string[] = [];
  if (item.gold > 0) stats.push(`buys for ${item.gold.toLocaleString()} gold`);
  if (item.weight > 0) stats.push(`weighs ${item.weight}`);
  const statsLine = stats.length ? ` ${stats.join(', ')}.` : '';
  return `${item.name} is a ${item.category.toLowerCase()} in Palworld.${desc}${statsLine}`;
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> },
): Promise<Metadata> {
  const { id } = await params;
  const item = items.find((i) => i.id === id);

  if (!item) {
    return {
      title: 'Item not found',
      description: 'The requested item could not be found in the database.',
      robots: { index: false, follow: false },
    };
  }

  const title = `${item.name} — Palworld Item`;
  const description = buildItemDescription(item);
  const path = `/items/${item.id}`;
  const image = item.image || '/og-default.png';

  return {
    title,
    description,
    alternates: { canonical: path },
    keywords: [
      item.name,
      `${item.name} Palworld`,
      `Palworld ${item.category}`,
      'Palworld items',
      'Palworld item database',
    ],
    openGraph: {
      type: 'article',
      title: `${item.name} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}${path}`,
      images: [
        {
          url: image,
          width: 256,
          height: 256,
          alt: `${item.name} — Palworld item icon`,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: `${item.name} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}

const CATEGORY_ACCENTS: Record<ItemCategory, string> = {
  Sphere:     'text-sky-400 border-sky-500/40 bg-sky-900/30',
  Weapon:     'text-rose-400 border-rose-500/40 bg-rose-900/30',
  Ammo:       'text-orange-400 border-orange-500/40 bg-orange-900/30',
  Armor:      'text-blue-300 border-blue-500/40 bg-blue-900/30',
  Accessory:  'text-fuchsia-300 border-fuchsia-500/40 bg-fuchsia-900/30',
  Material:   'text-stone-200 border-stone-500/40 bg-stone-700/40',
  Food:       'text-amber-300 border-amber-500/40 bg-amber-900/30',
  Consumable: 'text-emerald-300 border-emerald-500/40 bg-emerald-900/30',
  Schematic:  'text-purple-300 border-purple-500/40 bg-purple-900/30',
  Glider:     'text-cyan-300 border-cyan-500/40 bg-cyan-900/30',
  'Key Item': 'text-yellow-300 border-yellow-500/40 bg-yellow-900/30',
};

export default async function ItemDetailPage(
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const item = items.find((i) => i.id === id);

  if (!item) notFound();

  const itemUrl = `${SITE_URL}/items/${item.id}`;
  const imageAbs = item.image.startsWith('http') ? item.image : `${SITE_URL}${item.image}`;

  // 8 related items from the same category, alphabetical, excluding self.
  const related = items
    .filter((i) => i.category === item.category && i.id !== item.id)
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(0, 8);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: item.name,
    description: buildItemDescription(item),
    image: [imageAbs],
    url: itemUrl,
    category: item.category,
    weight: { '@type': 'QuantitativeValue', value: item.weight },
    offers: item.gold > 0
      ? { '@type': 'Offer', price: item.gold, priceCurrency: 'PWG' }
      : undefined,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Items', item: `${SITE_URL}/items` },
        { '@type': 'ListItem', position: 3, name: item.name, item: itemUrl },
      ],
    },
  };

  const accent = CATEGORY_ACCENTS[item.category];

  return (
    <div className="max-w-4xl mx-auto pb-20 space-y-8">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/items"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors font-medium"
      >
        <ArrowLeft size={20} /> Back to Items
      </Link>

      <div className="grid md:grid-cols-[256px_1fr] gap-8 items-start">
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex items-center justify-center">
          <Image
            src={item.image}
            alt={item.name}
            width={200}
            height={200}
            className="object-contain drop-shadow-2xl"
          />
        </div>

        <div className="space-y-5">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-100 mb-3">{item.name}</h1>
            <span className={`inline-block text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full border ${accent}`}>
              {item.category}
            </span>
          </div>

          {item.description ? (
            <p className="text-slate-300 leading-relaxed">
              {item.description}
            </p>
          ) : (
            <p className="text-slate-500 italic text-sm">
              No description yet. Want to contribute one? File an issue on the site repo.
            </p>
          )}

          <dl className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-800">
              <dt className="text-xs uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                <Coins className="w-3 h-3" /> Sell Price
              </dt>
              <dd className="text-2xl font-bold text-slate-100">
                {item.gold > 0 ? item.gold.toLocaleString() : '—'}
                {item.gold > 0 ? <span className="text-sm text-slate-500 ml-1">gold</span> : null}
              </dd>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-800">
              <dt className="text-xs uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                <Weight className="w-3 h-3" /> Weight
              </dt>
              <dd className="text-2xl font-bold text-slate-100">
                {item.weight > 0 ? item.weight : '—'}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="space-y-4 pt-4">
          <h2 className="text-xl font-bold text-slate-100">More {item.category} items</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/items/${r.id}`}
                className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 rounded-lg p-3 flex items-center gap-2 transition-colors"
              >
                <div className="w-10 h-10 bg-slate-900 rounded-md relative shrink-0">
                  <Image src={r.image} alt={r.name} fill sizes="40px" className="object-contain p-1" />
                </div>
                <span className="text-sm font-medium text-slate-200 truncate">{r.name}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
