"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sections } from "../config/nav";
import { ChevronDown, ChevronRight } from "lucide-react";
import clsx from "clsx";

export default function Sidebar() {
  const pathname = usePathname();
  // Initialize all sections as expanded
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    sections.forEach((sec) => {
        initialState[sec.title] = true;
    });
    return initialState;
  });

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 h-screen sticky top-0 border-r border-[var(--color-brand-border)] bg-[var(--color-brand-bg-sidebar)] text-[var(--color-brand-text-secondary)]">
      <div className="flex-1 overflow-y-auto py-6 px-4">
        <nav className="space-y-8">
          {sections.map((sec) => (
            <div key={sec.title}>
              <button
                onClick={() => toggleSection(sec.title)}
                className="flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-[var(--color-brand-text-muted)] hover:text-[var(--color-brand-text-primary)] transition-colors mb-3 group select-none"
              >
                <span>{sec.title}</span>
                {expandedSections[sec.title] ? (
                  <ChevronDown className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                ) : (
                  <ChevronRight className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                )}
              </button>

              {expandedSections[sec.title] && (
                <ul className="space-y-1">
                  {sec.links.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;

                    return (
                        <li key={link.href}>
                        <Link
                            href={link.href}
                            className={clsx(
                            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 group relative",
                            isActive
                                ? "bg-[rgba(91,124,255,0.1)] text-[var(--color-brand-primary)] font-medium"
                                : "hover:bg-[var(--color-brand-bg-card)] hover:text-[var(--color-brand-text-primary)]"
                            )}
                        >
                            {Icon && (
                            <Icon
                                className={clsx(
                                "w-4 h-4 transition-colors",
                                isActive ? "text-[var(--color-brand-primary)]" : "text-[var(--color-brand-text-muted)] group-hover:text-[var(--color-brand-text-primary)]"
                                )}
                            />
                            )}
                            <span className="truncate">{link.label}</span>
                        </Link>
                        </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
