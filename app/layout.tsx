import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";

import { siteConfig } from "@/lib/site";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-XXXXXXXXXX";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Smart Contract Security Audits | Sentinel Security Tools",
    template: "%s | Sentinel Security Tools",
  },
  description:
    "Security tools and expert audits for smart contracts. Detect vulnerabilities early, reduce exploit risk, and ship with measurable confidence.",
  keywords: [
    "smart contract security",
    "blockchain audit",
    "security scanning",
    "Solidity audit",
    "web3 security tools",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Smart Contract Security Audits | Sentinel Security Tools",
    description:
      "Automated scanning and expert audits to secure smart contracts before launch.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Contract Security Audits | Sentinel Security Tools",
    description:
      "Automated scanning and expert audits to secure smart contracts before launch.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${plexMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-placeholder" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaMeasurementId}');`}
        </Script>
      </body>
    </html>
  );
}
