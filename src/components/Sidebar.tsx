import Link from "next/link";

const sections = [
  {
    title: "Mechanics",
    links: [
      { href: "/mechanics/work-speed", label: "Work Speed" },
      { href: "/mechanics/capture-chance", label: "Capture Chance (soon)" },
      { href: "/mechanics/damage-formula", label: "Damage Formula (soon)" },
    ],
  },
  {
    title: "Breeding",
    links: [
      { href: "/breeding/trait-inheritance", label: "Trait Inheritance" },
      { href: "/breeding/passive-skills", label: "Passive Skills (soon)" },
    ],
  },
  {
    title: "Bases",
    links: [
      { href: "/bases/worker-roles", label: "Worker Roles (soon)" },
      { href: "/bases/pathing-ai", label: "Pathing & AI (soon)" },
    ],
  },
  {
    title: "Tools",
    links: [{ href: "/calculators/calculators", label: "Calculators (soon)" }],
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 shrink-0 border-r">
      <div className="p-4 sticky top-0">
        <div className="text-sm font-semibold mb-3 opacity-80">Browse</div>

        <nav className="space-y-6">
          {sections.map((sec) => (
            <div key={sec.title}>
              <div className="text-xs font-semibold uppercase tracking-wide opacity-60 mb-2">
                {sec.title}
              </div>
              <ul className="space-y-1">
                {sec.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm hover:underline underline-offset-4"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
