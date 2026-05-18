import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Prefer AVIF (smaller) and fall back to WebP for older browsers.
    // Source pal artwork is already webp, but next/image still re-encodes
    // and serves a properly-sized variant per device.
    formats: ["image/avif", "image/webp"],

    // Match the breakpoints we actually use (Tailwind sm/md/lg/xl/2xl)
    // so the optimizer doesn't generate widths we'll never request.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],

    // Sizes used for the small in-card thumbnails (table rows, breeding pairs).
    imageSizes: [32, 48, 64, 96, 128, 256],

    // Cache optimized images aggressively at the edge — pal artwork is static
    // and only changes when we update the dataset.
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
};

export default nextConfig;
