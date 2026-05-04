import type { MetadataRoute } from "next";
import fs from "node:fs/promises";
import path from "node:path";
import { SITE_URL } from "../config/site";
import { pals } from "../data/pals";
import { sections } from "../config/nav";

type SitemapEntry = MetadataRoute.Sitemap[number];

const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency?: SitemapEntry["changeFrequency"];
  priority?: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/pals", changeFrequency: "weekly", priority: 0.9 },
  { path: "/pals/passives", changeFrequency: "weekly", priority: 0.7 },
  { path: "/items", changeFrequency: "weekly", priority: 0.7 },
  { path: "/map", changeFrequency: "monthly", priority: 0.6 },
  { path: "/checklist", changeFrequency: "monthly", priority: 0.5 },
  { path: "/my-pals", changeFrequency: "monthly", priority: 0.5 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/patch-notes", changeFrequency: "weekly", priority: 0.7 },
  { path: "/guides/tier-list", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/building", changeFrequency: "monthly", priority: 0.7 },
  { path: "/guides/raids", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/type-chart", changeFrequency: "monthly", priority: 0.7 },
  { path: "/calculators/damage", changeFrequency: "monthly", priority: 0.8 },
  { path: "/calculators/capture-chance", changeFrequency: "monthly", priority: 0.8 },
  { path: "/calculators/work-speed", changeFrequency: "monthly", priority: 0.7 },
  { path: "/calculators/iv", changeFrequency: "monthly", priority: 0.7 },
  { path: "/calculators/breeding", changeFrequency: "monthly", priority: 0.8 },
  { path: "/calculators/breeding-simulator", changeFrequency: "monthly", priority: 0.7 },
  { path: "/calculators/base-efficiency", changeFrequency: "monthly", priority: 0.7 },
];

/**
 * Recursively walk the content/ directory and emit one entry per .mdx file.
 * Slug is the file path relative to content/, with the extension stripped.
 */
async function getMdxRoutes(): Promise<SitemapEntry[]> {
  const contentDir = path.join(process.cwd(), "content");
  const entries: SitemapEntry[] = [];

  async function walk(dir: string): Promise<void> {
    let dirents;
    try {
      dirents = await fs.readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const dirent of dirents) {
      const full = path.join(dir, dirent.name);
      if (dirent.isDirectory()) {
        await walk(full);
        continue;
      }
      if (!dirent.name.endsWith(".mdx")) continue;

      const rel = path.relative(contentDir, full).replace(/\\/g, "/");
      const slug = "/" + rel.replace(/\.mdx$/, "");

      // Mirror the (docs) route's notFound for top-level files served outside slug-only routes.
      // The catch-all at src/app/(docs)/[...slug]/page.tsx returns notFound() when slug.length === 0,
      // so a content file at the root of content/ would 404. We still include nested files.
      const slugParts = slug.split("/").filter(Boolean);
      if (slugParts.length === 0) continue;

      let lastModified: Date | undefined;
      try {
        const stat = await fs.stat(full);
        lastModified = stat.mtime;
      } catch {
        lastModified = undefined;
      }

      entries.push({
        url: `${SITE_URL}${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  await walk(contentDir);
  return entries;
}

/**
 * Crawl the nav config so newly-added nav links automatically appear in the sitemap
 * even if we forget to update STATIC_ROUTES. We then de-duplicate against STATIC_ROUTES.
 */
function getNavRoutes(): SitemapEntry[] {
  const seen = new Set(STATIC_ROUTES.map((r) => r.path));
  const result: SitemapEntry[] = [];
  for (const section of sections) {
    for (const link of section.links) {
      if (!link.href.startsWith("/")) continue;
      if (seen.has(link.href)) continue;
      seen.add(link.href);
      result.push({
        url: `${SITE_URL}${link.href}`,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }
  return result;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: SitemapEntry[] = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const palEntries: SitemapEntry[] = pals.map((pal) => ({
    url: `${SITE_URL}/pals/${pal.key}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const mdxEntries = await getMdxRoutes();
  const navEntries = getNavRoutes();

  return [...staticEntries, ...navEntries, ...palEntries, ...mdxEntries];
}
