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
    <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative space-y-4">
        <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-black/30 p-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400">Breeding path</p>
            <p className="mt-1 text-lg font-bold text-white">Parent A + Parent B</p>
          </div>
          <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-semibold text-blue-400">
            3 steps
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-neutral-800 bg-black/30 p-4">
            <p className="text-xs text-neutral-400">Passive plan</p>
            <p className="mt-2 text-2xl font-extrabold text-white">4/4</p>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-black/30 p-4">
            <p className="text-xs text-neutral-400">Base output</p>
            <p className="mt-2 text-2xl font-extrabold text-white">+38%</p>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-black/30 p-4">
          <p className="mb-3 text-sm font-semibold text-white">Companion checklist</p>
          <div className="space-y-2">
            {[
              "Check breeding chain",
              "Review passive skills",
              "Optimize base workers",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-neutral-400">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
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
          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
            Build better Pals faster
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-400">
            Use breeding tools, Pal data, passive skill guides, and calculators to plan stronger teams and more efficient bases.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/calculators/breeding" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
              Start breeding
            </Link>
            <Link href="/pals" className="bg-neutral-800 text-white px-6 py-3 rounded-lg font-medium">
              Explore Paldeck
            </Link>
          </div>
        </div>
        <HeroVisual />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Start here</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {startHereCards.map((card) => (
            <Link key={card.href} href={card.href} className="border border-neutral-800 p-5 rounded-xl hover:border-blue-500/50">
              <h3 className="font-bold text-white">{card.title}</h3>
              <p className="text-sm text-neutral-400 mt-2">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Popular tools</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularTools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="border border-neutral-800 p-5 rounded-xl hover:border-blue-500/50">
              <h3 className="font-bold text-white">{tool.title}</h3>
              <p className="text-sm text-neutral-400 mt-2">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div key={section.title} className="border border-neutral-800 rounded-xl p-6">
            <h2 className="text-lg font-bold mb-4">{section.title}</h2>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-blue-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
