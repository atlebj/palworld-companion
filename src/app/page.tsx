import Link from "next/link";
import { sections } from "../config/nav";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6">
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-gradient pb-2">
          Palworld Companion
        </h1>
        <p className="text-xl text-[var(--color-brand-text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
          Clear explanations of mechanics, breeding systems, base optimization, and tools to help you master Palworld.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/pals"
            className="btn-primary flex items-center justify-center gap-2"
          >
            Explore Paldeck
          </Link>
          <Link
            href="/calculators/breeding"
            className="btn-secondary flex items-center justify-center gap-2"
          >
            Breeding Calculator
          </Link>
        </div>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => {
          return (
            <div key={section.title} className="card p-6 hover:border-[var(--color-brand-primary)]/50 transition-colors group">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-[var(--color-brand-text-primary)] group-hover:text-[var(--color-brand-primary)] transition-colors">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block text-sm text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors flex items-center gap-2 group/link"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-border)] group-hover/link:bg-[var(--color-brand-primary)] transition-colors"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
