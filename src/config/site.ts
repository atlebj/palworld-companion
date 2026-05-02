/**
 * Canonical site config. Used for metadataBase, sitemap, robots, and OG defaults.
 *
 * Override SITE_URL via env (e.g. for staging/preview deployments) by setting
 * NEXT_PUBLIC_SITE_URL. Must be an absolute URL with no trailing slash.
 */
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.palworldcompanion.com";

export const SITE_URL = rawUrl.replace(/\/$/, "");

export const SITE_NAME = "Palworld Companion";

export const SITE_DESCRIPTION =
  "Clear explanations of Palworld mechanics, breeding systems, base optimization, and hidden formulas — plus calculators, a complete Paldeck, and guides.";

export const SITE_TWITTER = "@palcompanion";

/**
 * Default Open Graph image used when a page does not specify its own.
 * Should be a 1200x630 PNG/JPG placed in /public.
 */
export const SITE_OG_IMAGE = "/og-default.png";

export const SITE_LOCALE = "en_US";
