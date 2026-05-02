import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import MobileNav from "../components/MobileNav";
import Breadcrumbs from "../components/Breadcrumbs";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_OG_IMAGE,
  SITE_LOCALE,
  SITE_TWITTER,
} from "../config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Palworld",
    "Palworld guide",
    "Paldeck",
    "Palworld breeding",
    "Palworld calculator",
    "Palworld tier list",
    "Palworld map",
    "Palworld mechanics",
  ],
  authors: [{ name: "Palworld Companion Team" }],
  creator: "Palworld Companion",
  publisher: "Palworld Companion",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: SITE_LOCALE,
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: SITE_TWITTER,
    creator: SITE_TWITTER,
    images: [SITE_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "games",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
};

const GA_MEASUREMENT_ID = "G-7B77H0BSG3";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--color-brand-bg-main)] text-[var(--color-brand-text-primary)]`}>
        <Script
          id="website-jsonld"
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
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
