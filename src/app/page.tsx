import Link from "next/link";
import Image from "next/image";
import { sections } from "../config/nav";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto py-8 md:py-12 px-4 sm:px-6">
      {/* Hero */}
      <section
        className="relative overflow-hidden rounded-3xl mb-12 md:mb-16 border border-[var(--color-brand-border)] min-h-[420px] md:min-h-[500px] flex items-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
      >
        <Image
          src="/palpic1.jpg"
          alt="Palworld key art — an explorer with goggles charging forward, flanked by Demon Eye Pals."
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover object-[center_25%] md:object-center"
        />

        {/* Left-to-right scrim for headline legibility */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-bg-main)] via-[var(--color-brand-bg-main)]/85 to-transparent md:via-[var(--color-brand-bg-main)]/70"
        />
        {/* Bottom fade for extra depth */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--color-brand-bg-main)]/60 to-transparent"
        />

        <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 max-w-xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-gradient pb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Palworld Companion
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-brand-text-secondary)] mb-8 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            Clear explanations of mechanics, breeding systems, base optimization, and tools to help you master Palworld.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/pals"
              className="btn-primary flex items-center justify-center gap-2"
            >
              Explore Paldeck
            </Link>
            <Link
              href="/calculators/breeding"
              className="btn-secondary flex items-center justify-center gap-2 bg-[var(--color-brand-bg-card)]/80 backdrop-blur-sm"
            >
              Breeding Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Section grid */}
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
