import Link from "next/link";
import { sections } from "../config/nav";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
          Palworld Companion
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
          Clear explanations of mechanics, breeding systems, base optimization, and tools to help you master Palworld.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/getting-started"
            className="bg-neutral-900 text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
          >
            Start Here
          </Link>
          <Link
            href="/calculators/damage"
            className="bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
          >
            Try Damage Calculator
          </Link>
        </div>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => {
          // Skip "Start Here" as it's covered in hero, unless we want it?
          // Actually "Start Here" has "Getting Started" which is fine to list.
          // But maybe skip if it's just one link?
          // Let's keep it consistent.
          return (
            <div key={section.title} className="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-colors">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
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
