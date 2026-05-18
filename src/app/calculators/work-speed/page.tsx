import { Suspense } from "react";
import type { Metadata } from "next";
import WorkSpeedClient from "./WorkSpeedClient";

export const metadata: Metadata = {
  title: "Work Speed Calculator",
  description:
    "Calculate Palworld base production times by combining a Pal's work suitability level with its work speed stat and active bonuses.",
  alternates: { canonical: "/calculators/work-speed" },
  openGraph: {
    title: "Work Speed Calculator | Palworld Companion",
    description:
      "How fast will your Pals craft, mine, and farm? Plug in stats to find out.",
    url: "/calculators/work-speed",
    type: "website",
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="max-w-3xl p-6">Loading…</div>}>
      <WorkSpeedClient />
    </Suspense>
  );
}
