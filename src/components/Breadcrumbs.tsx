"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import clsx from "clsx";

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm">
      <ol className="flex items-center space-x-2 text-neutral-500">
        <li>
          <Link href="/" className="hover:text-neutral-300 transition-colors flex items-center">
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = index === segments.length - 1;
          const label = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <li key={href} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4" />
              {isLast ? (
                <span className="font-medium text-neutral-200" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link href={href} className="hover:text-neutral-300 transition-colors">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
