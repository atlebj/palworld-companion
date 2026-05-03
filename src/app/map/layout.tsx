import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palworld Resource Map (Beta)",
  description:
    "Find ore, sulfur, coal, lifmunk effigies, dungeons, and tower locations on the Palworld map.",
  alternates: { canonical: "/map" },
  openGraph: {
    title: "Palworld Resource Map | Palworld Companion",
    description: "Locate every key resource and landmark on the Palpagos islands.",
    url: "/map",
    type: "website",
  },
};

export default function MapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
