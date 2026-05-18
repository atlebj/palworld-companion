import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workforce Composition Planner",
  description:
    "Plan your Palworld base crew, see where its work suitability is concentrated, and spot coverage gaps. Compare workforce compositions side by side.",
  alternates: { canonical: "/calculators/base-efficiency" },
  openGraph: {
    title: "Workforce Composition Planner | Palworld Companion",
    description:
      "Right-size your base crew and see where its suitability levels stack up.",
    url: "/calculators/base-efficiency",
    type: "website",
  },
};

export default function BaseEfficiencyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
