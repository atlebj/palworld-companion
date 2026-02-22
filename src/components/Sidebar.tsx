"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  {
    title: "Start Here",
    links: [{ href: "/getting-started", label: "Getting Started" }],
  },
  {
    title: "Mechanics",
    links: [
      { href: "/mechanics/work-speed", label: "Work Speed" },
      { href: "/mechanics/capture-chance", label: "Capture Chance" },
      { href: "/mechanics/damage-formula", label: "Damage Formula" },
      { href: "/mechanics/pvp-arena", label: "PvP Arena Meta" },
      { href: "/mechanics/oil-rig-stronghold", label: "Oil Rig Stronghold" },
    ],
  },
  {
    title: "Breeding",
    links: [
      { href: "/breeding/trait-inheritance", label: "Trait Inheritance" },
      { href: "/breeding/passive-skills", label: "Passive Skills" },
    ],
  },
  {
    title: "Bases",
    links: [
      { href: "/bases/worker-roles", label: "Worker Roles" },
      { href: "/bases/pathing-ai", label: "Pathing & AI" },
    ],
  },
  {
    title: "Tools",
    links: [{ href: "/calculators", label: "Calculators" }],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block w-64 shrink-0 border-r h-screen sticky top-0 bg-neutral-50 dark:bg-neutral-900/20">
      <div className="p-6 h-full overflow-y-auto">
        <nav className="space-y-8">
          {sections.map((sec) => (
            <div key={sec.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3 px-2">
                {sec.title}
              </h3>
              <ul className="space-y-1">
                {sec.links.map((l) => {
                  const isActive = pathname === l.href;
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className={`block px-3 py-2 text-sm rounded-md transition-all duration-200 ${
                          isActive
                            ? "bg-neutral-900 text-white dark:bg-white dark:text-black font-medium"
                            : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-200"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
