import Link from "next/link";
import { sections } from "../config/nav";

const startHereCards = [
  {
    href: "/calculators/breeding",
    title: "Start breeding",
    description: "Find parent combinations and plan the shortest route to the Pal you want.",
  },
  {
    href: "/pals",
    title: "Explore the Paldeck",
    description: "Search Pals by stats, drops, elements, work suitability, and more.",
  },
  {
    href: "/calculators",
    title: "Use calculators",
    description: "Estimate damage, capture chance, IVs, work speed, and base efficiency.",
  },
];

const popularTools = [
  {
    href: "/calculators/breeding",
    title: "Breeding Pathfinder",
    description: "Find the shortest route to breed the Pal you want.",
  },
  {
    href: "/pals",
    title: "Paldeck",
    description: "Search Pals by stats, drops, work suitability, and more.",
  },
  {
    href: "/pals/passives",
    title: "Passive Skills",
    description: "Compare passives and plan stronger inheritance chains.",
  },
  {
    href: "/calculators/iv",
    title: "IV Calculator",
    description: "Estimate your Pal's hidden stats and potential.",
  },
  {
    href: "/calculators/work-speed",
    title: "Work Speed Calculator",
    description: "Plan faster production and better base workers.",
  },
  {
    href: "/calculators/capture-chance",
    title: "Capture Calculator",
    description: "Estimate capture chance before spending spheres.",
  },
];

function HeroVisual() {
  return (
    <div className="card relative overflow-hidden rounded-3xl p-6 shadow-2xl">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--color-brand-primary)]/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative space-y-4">
        <div className="flex items-center justify-between rounded-2xl border border-[var(--color-brand-border)] bg-black/20 p-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--color-brand-text-secondary)]">Breeding path</p>
            <p className="mt-1 text-lg font-bold text-[var(--color-brand-text-primary)]">Parent A + Parent B</p>
          </div>
          <span className="rounded-full bg-[var(--color-brand-primary)]/20 px-3 py-1 text-sm font-semibold text-[var(--color-brand-primary)]">
            3 steps
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-[var(--color-brand-border)] bg-black/20 p-4">
            <p className="text-xs text-[var(--color-brand-text-secondary)]">Passive plan</p>
            <p className="mt-2 text-2xl font-extrabold text-[var(--color-brand-text-primary)]">4/4</p>
          </div>
          <div className="rounded-2xl border border-[var(--color-brand-border)] bg-black/20 p-4">
            <p className="text-xs text-[var(--color-brand-text-secondary)]">Base output</p>
            <p className="mt-2 text-2xl font-extrabold text-[var(--color-brand-text-primary)]">+38%</p>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--color-brand-border)] bg-black/20 p-4">
          <p className="mb-3 text-sm font-semibold text-[var(--color-brand-text-primary)]">Companion checklist</p>
          <div className="space-y-2">
            {[
              "Check breeding chain",
              "Review passive skills",
              "Optimize base workers",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-[var(--color-brand-text-secondary)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-brand-primary)]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <section className="mb-16 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-brand-primary)]">
            Palworld Companion
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-gradient pb-2 md:text-6xl">
            Build better Pals faster
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-brand-text-secondary)]">
            Use breeding tools, Pal data, passive skill guides, and calculators to plan stronger teams and more efficient bases.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/calculators/breeding" className="btn-primary flex items-center justify-center gap-2">
              Start breeding
            </Link>
            <Link href="/pals" className="btn-secondary flex items-center justify-center gap-2">
              Explore Paldeck
            </Link>
          </div>
        </div>
        <HeroVisual />
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-[var(--color-brand-text-primary)]">Start here</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {startHereCards.map((card) => (
            <Link key={card.href} href={card.href} className="card p-5 transition-colors hover:border-[var(--color-brand-primary)]/50">
              <h3 className="font-bold text-[var(--color-brand-text-primary)]">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-brand-text-secondary)]">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold text-[var(--color-brand-text-primary)]">Popular tools</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {popularTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="card p-5 transition-colors hover:border-[var(--color-brand-primary)]/50">
              <h3 className="font-bold text-[var(--color-brand-text-primary)]">{tool.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-brand-text-secondary)]">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-[var(--color-brand-text-primary)]">Browse all guides and tools</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title} className="card p-6 transition-colors hover:border-[var(--color-brand-primary)]/50 group">
              <h3 className="mb-4 text-lg font-bold text-[var(--color-brand-text-primary)] transition-colors group-hover:text-[var(--color-brand-primary)]">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-[var(--color-brand-text-secondary)] transition-colors hover:text-[var(--color-brand-primary)] group/link"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-border)] transition-colors group-hover/link:bg-[var(--color-brand-primary)]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
