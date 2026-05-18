import { Suspense } from "react";
import type { Metadata } from "next";
import CaptureChanceClient from "./CaptureChanceClient";

export const metadata: Metadata = {
  title: "Capture Chance Calculator",
  description:
    "Estimate your odds of capturing a Palworld Pal based on its current HP, level difference, sphere tier, and capture power bonuses.",
  alternates: { canonical: "/calculators/capture-chance" },
  openGraph: {
    title: "Capture Chance Calculator | Palworld Companion",
    description:
      "Find the right sphere and HP threshold to maximize your capture rate in Palworld.",
    url: "/calculators/capture-chance",
    type: "website",
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="max-w-3xl p-6">Loading…</div>}>
      <CaptureChanceClient />
    </Suspense>
  );
}
