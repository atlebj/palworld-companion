import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { pals } from '../../../data/pals';
import { SITE_NAME, SITE_URL } from '../../../config/site';
import {
  Hammer, Package, Snowflake,
  ArrowLeft, Dna
} from 'lucide-react';
import Image from 'next/image';

export async function generateStaticParams() {
  return pals.map((pal) => ({
    key: pal.key,
  }));
}

function buildPalDescription(pal: typeof pals[number]): string {
  const types = pal.types.join("/");
  const topWorks = Object.entries(pal.suitability)
    .filter(([, level]) => typeof level === "number" && (level ?? 0) > 0)
    .sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0))
    .slice(0, 3)
    .map(([k, level]) => `${k.replace(/_/g, " ")} Lv. ${level}`)
    .join(", ");

  const variant = pal.isVariant ? " variant" : "";
  const stats = `HP ${pal.stats.hp}, ATK ${pal.stats.attack.melee}, DEF ${pal.stats.defense}`;
  const works = topWorks ? ` Top work suitabilities: ${topWorks}.` : "";

  return `${pal.name} is a ${types}-type Palworld${variant} pal. ${stats}.${works} See full stats, drops, breeding power, and active skills.`;
}

export async function generateMetadata(
  { params }: { params: Promise<{ key: string }> },
): Promise<Metadata> {
  const { key } = await params;
  const pal = pals.find((p) => p.key === key);

  if (!pal) {
    return {
      title: "Pal not found",
      description: "The requested Pal could not be found in the Paldeck.",
      robots: { index: false, follow: false },
    };
  }

  const title = `${pal.name} — Stats, Drops & Breeding`;
  const description = buildPalDescription(pal);
  const path = `/pals/${pal.key}`;
  const image = pal.image || "/og-default.png";

  return {
    title,
    description,
    alternates: { canonical: path },
    keywords: [
      pal.name,
      `${pal.name} Palworld`,
      `${pal.name} stats`,
      `${pal.name} drops`,
      `${pal.name} breeding`,
      ...pal.types.map((t) => `${t} type Pal`),
      "Paldeck",
    ],
    openGraph: {
      type: "article",
      title: `${pal.name} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}${path}`,
      images: [
        {
          url: image,
          width: 512,
          height: 512,
          alt: `${pal.name} — Palworld Pal artwork`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pal.name} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}

type SuitabilityConfig = { type: 'image', src: string } | { type: 'icon', component: React.ElementType };

const suitabilityConfig: Record<string, SuitabilityConfig> = {
  kindling: { type: 'image', src: '/images/suitability/kindling.png' },
  watering: { type: 'image', src: '/images/suitability/watering.png' },
  planting: { type: 'image', src: '/images/suitability/planting.png' },
  generating_electricity: { type: 'image', src: '/images/suitability/generating_electricity.png' },
  handiwork: { type: 'image', src: '/images/suitability/handiwork.png' },
  gathering: { type: 'image', src: '/images/suitability/gathering.png' },
  lumbering: { type: 'image', src: '/images/suitability/lumbering.png' },
  mining: { type: 'image', src: '/images/suitability/mining.png' },
  medicine_production: { type: 'image', src: '/images/suitability/medicine_production.png' },
  cooling: { type: 'icon', component: Snowflake },
  transporting: { type: 'image', src: '/images/suitability/transporting.png' },
  farming: { type: 'image', src: '/images/suitability/farming.png' },
  oil_extraction: { type: 'image', src: '/images/suitability/oil_extraction.png' },
};

const StatBar = ({ label, value, max = 200, color }: { label: string, value: number, max?: number, color: string }) => (
  <div className="flex items-center gap-4">
    <span className="w-12 font-bold text-slate-400 uppercase text-sm">{label}</span>
    <div className="flex-1 h-3 bg-slate-800 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${Math.min((value / max) * 100, 100)}%` }}
      />
    </div>
    <span className="w-8 text-right font-mono text-slate-200 font-bold">{value}</span>
  </div>
);

const TypeBadge = ({ type }: { type: string }) => {
    const colors: Record<string, string> = {
        Neutral: 'bg-neutral-600',
        Fire: 'bg-red-600',
        Water: 'bg-blue-600',
        Grass: 'bg-green-600',
        Electric: 'bg-yellow-600',
        Ice: 'bg-cyan-600',
        Ground: 'bg-amber-700',
        Dark: 'bg-purple-900',
        Dragon: 'bg-indigo-600',
    };
    return (
        <span className={`${colors[type] || 'bg-slate-600'} text-white text-xs uppercase font-bold px-3 py-1 rounded-full shadow-sm`}>
            {type}
        </span>
    );
};

export default async function PalDetailPage({ params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  const pal = pals.find((p) => p.key === key);

  if (!pal) {
    notFound();
  }

  const palUrl = `${SITE_URL}/pals/${pal.key}`;
  const palImageAbs = pal.image?.startsWith("http") ? pal.image : `${SITE_URL}${pal.image ?? ""}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${pal.name} — Palworld Pal`,
    description: buildPalDescription(pal),
    url: palUrl,
    image: palImageAbs ? [palImageAbs] : undefined,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "Thing",
      name: pal.name,
      additionalType: "https://schema.org/VideoGameCharacter",
      description: pal.description,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Paldeck", item: `${SITE_URL}/pals` },
        { "@type": "ListItem", position: 3, name: pal.name, item: palUrl },
      ],
    },
  };

  return (
    <div className="max-w-4xl mx-auto pb-20 space-y-8">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header / Nav */}
      <div className="flex items-center justify-between">
        <Link href="/pals" className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors font-medium">
          <ArrowLeft size={20} /> Back to Paldeck
        </Link>
        <div className="flex gap-2">
            {/* Previous/Next buttons could go here */}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column: Image & Basic Info */}
        <div className="space-y-6">
            <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent opacity-50"></div>
                <div className="absolute top-6 left-6 font-mono text-4xl font-bold text-slate-800">#{pal.id.toString().padStart(3, '0')}</div>

                <div className="relative z-10 flex justify-center">
                    {/* Using next/image requires width/height. The previous img had w-64 h-64 which is 256px.
                        Ideally we use the actual image dimensions, but for now we can infer. */}
                    {pal.image && (
                        <Image
                            src={pal.image}
                            alt={pal.name}
                            width={256}
                            height={256}
                            className="w-64 h-64 object-contain drop-shadow-2xl"
                        />
                    )}
                </div>
            </div>

            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800 space-y-4">
                <h3 className="text-lg font-bold text-slate-200 uppercase tracking-wider">Description</h3>
                <p className="text-slate-300 leading-relaxed italic">
                    &quot;{pal.description}&quot;
                </p>
            </div>
        </div>

        {/* Right Column: Stats & Details */}
        <div className="space-y-8">
            <div>
                <div className="flex flex-wrap items-center gap-4 mb-2">
                    <h1 className="text-4xl font-extrabold text-[var(--color-brand-text-primary)]">{pal.name}</h1>
                    {pal.isVariant && (
                        <span className="bg-[var(--color-brand-border)] text-[var(--color-brand-text-muted)] text-[10px] px-2 py-0.5 rounded-full font-bold shadow-md uppercase tracking-widest whitespace-nowrap">
                            Variant
                        </span>
                    )}
                    {!pal.id && (
                        <span className="bg-purple-600/80 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-md uppercase tracking-widest whitespace-nowrap">
                            Collab
                        </span>
                    )}
                </div>
                <div className="flex gap-2 mb-6">
                    {pal.types.map(t => <TypeBadge key={t} type={t} />)}
                </div>

                <div className="space-y-4 card p-6">
                    <h3 className="text-sm font-bold text-[var(--color-brand-text-muted)] uppercase tracking-wider mb-2">Base Stats</h3>
                    <StatBar label="HP" value={pal.stats.hp} color="bg-green-500" />
                    <StatBar label="ATK" value={pal.stats.attack.melee} color="bg-red-500" />
                    <StatBar label="DEF" value={pal.stats.defense} color="bg-blue-500" />

                    <div className="pt-4 mt-4 border-t border-[var(--color-brand-border)] flex justify-between items-center">
                        <span className="text-[var(--color-brand-text-muted)] text-sm font-bold">Breeding Power</span>
                        <span className="text-[var(--color-brand-text-primary)] font-mono text-lg">{pal.breedingPower}</span>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-bold text-[var(--color-brand-text-primary)] mb-4 flex items-center gap-2">
                    <Hammer size={20} className="text-[var(--color-brand-primary)]" /> Work Suitability
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {Object.entries(pal.suitability).map(([key, level]) => {
                        const config = suitabilityConfig[key];
                        const label = key.replace(/_/g, ' ');
                        if (!level || level === 0) return null;
                        return (
                            <div key={key} className="flex items-center gap-3 card p-3 hover:border-[var(--color-brand-border)] transition-colors">
                                <div className={`p-2 rounded-lg bg-[var(--color-brand-bg)] text-[var(--color-brand-text-muted)] shrink-0`}>
                                    {config?.type === 'image' ? (
                                        <Image src={config.src} alt={label} width={32} height={32} className="w-8 h-8" />
                                    ) : config?.type === 'icon' ? (
                                        <config.component size={24} className="p-0.5" />
                                    ) : (
                                        <Package size={24} className="p-0.5" />
                                    )}
                                </div>
                                <div>
                                    <div className="text-xs text-[var(--color-brand-text-muted)] uppercase font-bold truncate w-24">{label}</div>
                                    <div className="text-lg font-bold text-[var(--color-brand-text-primary)]">Lv. {level}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {pal.skills && pal.skills.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-lg font-bold text-[var(--color-brand-text-primary)] mb-4">Active Skills</h3>
                    <div className="space-y-3">
                        {pal.skills.map((skill, index) => (
                            <div key={index} className="card p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-center gap-3">
                                        <h4 className="font-bold text-[var(--color-brand-text-primary)]">{skill.name}</h4>
                                        <TypeBadge type={skill.element} />
                                    </div>
                                    <div className="text-xs font-mono text-[var(--color-brand-text-muted)] bg-[var(--color-brand-bg)] px-2 py-1 rounded">Lv. {skill.level}</div>
                                </div>
                                <div className="flex gap-4 mb-3 text-xs text-[var(--color-brand-text-secondary)] font-mono">
                                    <span className="flex items-center gap-1"><span className="text-[var(--color-brand-text-muted)]">PWR</span> {skill.power}</span>
                                    <span className="flex items-center gap-1"><span className="text-[var(--color-brand-text-muted)]">CT</span> {skill.cooltime}s</span>
                                </div>
                                <p className="text-sm text-[var(--color-brand-text-secondary)]">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {pal.drops && pal.drops.length > 0 && (
                 <div className="mt-8">
                    <h3 className="text-lg font-bold text-[var(--color-brand-text-primary)] mb-4">Drops</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {pal.drops.map((drop, index) => (
                            <div key={index} className="card p-3 flex justify-between items-center">
                                <span className="text-sm font-medium text-[var(--color-brand-text-secondary)]">{drop.name}</span>
                                <span className="text-xs font-mono text-[var(--color-brand-text-muted)]">{drop.min}-{drop.max}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="pt-8">
                <Link
                    href="/calculators/breeding"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-900/20 hover:shadow-sky-500/20 active:scale-95"
                >
                    <Dna size={20} /> Find Breeding Combinations
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
