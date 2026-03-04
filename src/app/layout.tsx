import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import MobileNav from "../components/MobileNav";
import Breadcrumbs from "../components/Breadcrumbs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Palworld Companion",
  description:
    "Clear explanations of Palworld mechanics, breeding systems, base optimization, and hidden formulas.",
};

const GA_MEASUREMENT_ID = "G-7B77H0BSG3";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-brand-bg-main)] text-[var(--color-brand-text-primary)]`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <header className="sticky top-0 z-40 w-full border-b border-[var(--color-brand-border)] bg-[var(--color-brand-bg-sidebar)]/80 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-brand-bg-sidebar)]/60">
          <nav className="max-w-6xl mx-auto p-4 flex gap-6 text-sm items-center">
            <Link href="/" className="font-bold text-lg text-[var(--color-brand-text-primary)] hover:text-[var(--color-brand-primary)] transition-colors">
              Palworld Companion
            </Link>
            <div className="hidden md:flex gap-6">
                <Link href="/mechanics/work-speed" className="text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors">Mechanics</Link>
                <Link href="/breeding/trait-inheritance" className="text-[var(--color-brand-text-secondary)] hover:text-[var(--color-brand-primary)] transition-colors">Breeding</Link>
            </div>
            <div className="ml-auto">
              <Search />
            </div>
          </nav>
        </header>

        <div className="max-w-6xl mx-auto flex pb-16 md:pb-0 min-h-screen">
          <Sidebar />
          <main className="flex-1 p-6 md:p-8">
            <Breadcrumbs />
            {children}
          </main>
        </div>
        <MobileNav />
      </body>
    </html>
  );
}
