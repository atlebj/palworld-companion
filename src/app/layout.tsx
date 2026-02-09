import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";

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
      <head>
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
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b">
          <nav className="max-w-6xl mx-auto p-4 flex gap-4 text-sm items-center">
            <Link href="/" className="font-semibold">
              Palworld Companion
            </Link>
            <Link href="/mechanics/work-speed">Mechanics</Link>
            <Link href="/breeding/trait-inheritance">Breeding</Link>
          </nav>
        </header>

        <div className="max-w-6xl mx-auto flex">
          <Sidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
