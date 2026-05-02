import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base Efficiency Dashboard",
  description:
    "Plan your Palworld base workforce and estimate hourly stone, wood, crop, and handiwork output from your Pal lineup.",
  alternates: { canonical: "/calculators/base-efficiency" },
  openGraph: {
    title: "Base Efficiency Dashboard | Palworld Companion",
    description:
      "Right-size your base crew and forecast resource throughput.",
    url: "/calculators/base-efficiency",
    type: "website",
  },
};

export default function BaseEfficiencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
