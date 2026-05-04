"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Database, GitMerge, Map as MapIcon, CheckSquare } from "lucide-react";
import clsx from "clsx";

const links: { href: string; label: string; icon: React.ElementType; badge?: string }[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/pals", label: "Paldeck", icon: Database },
  { href: "/calculators/breeding", label: "Breeding", icon: GitMerge },
  { href: "/map", label: "Map", icon: MapIcon, badge: "Beta" },
  { href: "/checklist", label: "Checklist", icon: CheckSquare },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[var(--color-brand-bg-sidebar)] border-t border-[var(--color-brand-border)] flex justify-around p-2 z-50 md:hidden pb-safe">
      {links.map(({ href, label, icon: Icon, badge }) => {
        const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
        return (
          <Link
            key={href}
            href={href}
            className={clsx(
              "relative flex flex-col items-center justify-center w-full py-1 text-[10px] transition-colors",
              isActive ? "text-[var(--color-brand-primary)] font-medium" : "text-[var(--color-brand-text-muted)] hover:text-[var(--color-brand-text-primary)]"
            )}
          >
            {badge && (
              <span
                className="absolute top-0 right-1/2 translate-x-3 w-2 h-2 rounded-full bg-amber-400 ring-2 ring-[var(--color-brand-bg-sidebar)]"
                aria-label={badge}
              />
            )}
            <Icon className="w-5 h-5 mb-1" />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
