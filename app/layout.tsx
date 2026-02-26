import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Contract Security Toolkit | 71+ Open Source Security Tools",
  description: "Battle-tested security scanners, analyzers, and PoC generators for smart contract auditing. Find vulnerabilities in Solidity, DeFi protocols, and blockchain applications.",
  keywords: [
    "smart contract security",
    "solidity security",
    "bug bounty",
    "immunefi",
    "code4rena",
    "vulnerability scanner",
    "defi security",
    "blockchain audit",
    "security tools",
    "reentrancy detector",
    "smart contract audit"
  ],
  authors: [{ name: "Security Research Team" }],
  creator: "Bobby",
  publisher: "Security Research Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://security-tools.dev",
    title: "Smart Contract Security Toolkit",
    description: "71+ Open Source Security Tools for Smart Contract Developers",
    siteName: "Smart Contract Security Toolkit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Smart Contract Security Toolkit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Contract Security Toolkit",
    description: "71+ Open Source Security Tools for Smart Contract Developers",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
