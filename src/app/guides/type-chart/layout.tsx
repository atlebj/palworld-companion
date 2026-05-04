import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palworld Type Chart",
  description:
    "Strengths and weaknesses for every Palworld element — Fire, Water, Grass, Electric, Ice, Ground, Dark, Dragon, and Neutral.",
  alternates: { canonical: "/guides/type-chart" },
  openGraph: {
    title: "Palworld Type Chart | Palworld Companion",
    description:
      "Quick reference for offensive and defensive type matchups in Palworld.",
    url: "/guides/type-chart",
    type: "article",
  },
};

export default function TypeChartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
