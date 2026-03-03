"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Database, GitMerge, Map as MapIcon, CheckSquare } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/pals", label: "Paldeck", icon: Database },
  { href: "/calculators/breeding", label: "Breeding", icon: GitMerge },
  { href: "/map", label: "Map", icon: MapIcon },
  { href: "/checklist", label: "Checklist", icon: CheckSquare },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-800 flex justify-around p-2 z-50 md:hidden pb-safe">
      {links.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
        return (
          <Link
            key={href}
            href={href}
            className={clsx(
              "flex flex-col items-center justify-center w-full py-1 text-[10px]",
              isActive ? "text-orange-500" : "text-neutral-500 hover:text-neutral-300"
            )}
          >
            <Icon className="w-5 h-5 mb-1" />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
