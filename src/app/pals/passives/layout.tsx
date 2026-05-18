import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Palworld Passive Skills",
  description:
    "Search every Palworld passive skill — stat effects, breeding compatibility, and which Pals can carry each trait.",
  alternates: { canonical: "/pals/passives" },
  openGraph: {
    title: "Palworld Passive Skills | Palworld Companion",
    description:
      "Find the right passives for combat, work, or breeding setups.",
    url: "/pals/passives",
    type: "article",
  },
};

export default function PassivesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
