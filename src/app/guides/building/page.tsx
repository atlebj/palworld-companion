import type { Metadata } from "next";
import Link from "next/link";
import { Hammer, Pickaxe, Cake, Shield, Droplets, Trees } from "lucide-react";

export const metadata: Metadata = {
  title: "Build Guides & Base Architecture",
  description:
    "Optimized Palworld base layouts — ore farms, cake production, defense bases, hot springs, and food/wood hybrids.",
  alternates: { canonical: "/guides/building" },
  openGraph: {
    title: "Palworld Build Guides | Palworld Companion",
    description:
      "Efficient and beautiful base layouts that keep your Pals working.",
    url: "/guides/building",
    type: "article",
  },
};

const guides = [
  {
    title: "Automated Ore Farm",
    href: "/guides/building/ore-farm",
    desc: "Maximize ore production with a dedicated mining base — Digtoise, Anubis, and clean pathing.",
    icon: Pickaxe,
    accent: "text-amber-400",
  },
  {
    title: "Cake & Egg Farm",
    href: "/guides/building/cake-egg-farm",
    desc: "Keep your breeding chains running. The crew, layout, and throughput math for 2 cakes/hour.",
    icon: Cake,
    accent: "text-pink-400",
  },
  {
    title: "Defense Base Layout",
    href: "/guides/building/defense-base",
    desc: "Raid-resistant design with funnels, turret placement, and combat Pals on standby.",
    icon: Shield,
    accent: "text-rose-400",
  },
  {
    title: "Hot Spring & SAN Recovery",
    href: "/guides/building/hot-spring-base",
    desc: "A dedicated rest base. Hot springs, Pal-fiber beds, and recovery rotation.",
    icon: Droplets,
    accent: "text-sky-400",
  },
  {
    title: "Logging & Plantation Hybrid",
    href: "/guides/building/logging-plantation",
    desc: "Wood and berries on a single Pal crew — feeds your main base and stockpiles construction wood.",
    icon: Trees,
    accent: "text-emerald-400",
  },
];

export default function BuildingGuides() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 text-slate-100 flex items-center gap-3">
          <Hammer className="text-sky-400" /> Build Guides
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Five base layouts covering production, food, defense, and Pal welfare. Each guide includes
          crew picks, layout tips, throughput numbers, and common mistakes to avoid.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {guides.map(({ title, href, desc, icon: Icon, accent }) => (
          <Link
            key={href}
            href={href}
            className="group block p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-sky-500/50 hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-start gap-4">
              <Icon className={`w-8 h-8 shrink-0 ${accent}`} />
              <div className="flex-1 min-w-0">
                <h2 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                  {title}
                </h2>
                <p className="text-slate-400 mt-2 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
