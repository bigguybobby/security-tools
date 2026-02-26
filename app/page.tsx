import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Smart Contract Security Audits and Automated Scanning",
  description:
    "Secure your protocol with automated smart contract scanning and expert-led audits. Get actionable findings before attackers do.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Smart Contract Security Audits and Automated Scanning",
    description:
      "Cut exploit risk with continuous scanning, manual review, and clear remediation guidance.",
    url: siteConfig.url,
  },
  twitter: {
    title: "Smart Contract Security Audits and Automated Scanning",
    description:
      "Cut exploit risk with continuous scanning, manual review, and clear remediation guidance.",
  },
};

const riskSignals = [
  "Critical findings flagged before deployment",
  "Actionable remediation with code-level context",
  "Audit-ready reports for investors and partners",
];

const workflow = [
  {
    step: "1",
    title: "Connect your repo",
    description:
      "Run automated scans on every pull request to catch known vulnerabilities immediately.",
  },
  {
    step: "2",
    title: "Review prioritized findings",
    description:
      "Get severity-ranked issues with exploit paths and clear remediation guidance.",
  },
  {
    step: "3",
    title: "Ship with confidence",
    description:
      "Pair automated results with an expert audit before mainnet launch.",
  },
];

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    sameAs: [siteConfig.social.x, siteConfig.social.linkedin],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/blog?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Smart Contract Security Audit",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Global",
    url: siteConfig.url,
    description:
      "Automated security scanning and expert manual audits for smart contracts and blockchain infrastructure.",
  };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-20 pt-8 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationJsonLd,
            websiteJsonLd,
            serviceJsonLd,
          ]),
        }}
      />

      <header className="mb-16 flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">SENTINEL</p>
          <p className="text-lg font-semibold text-white">Security Tools</p>
        </div>
        <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
          <Link className="rounded-full px-4 py-2 hover:bg-white/10" href="/">
            Home
          </Link>
          <Link className="rounded-full px-4 py-2 hover:bg-white/10" href="/blog">
            Blog
          </Link>
          <Link className="rounded-full px-4 py-2 hover:bg-white/10" href="/contact">
            Contact
          </Link>
          <Link
            className="rounded-full bg-cyan-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
            href="/contact#request-audit"
          >
            Request Audit
          </Link>
        </nav>
      </header>

      <main className="flex flex-col gap-16">
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Stop exploit risk before launch
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              Automated scanning plus expert audits for smart contracts.
            </h1>
            <p className="text-lg text-slate-300">
              Find critical vulnerabilities earlier, prioritize fixes faster, and
              deploy with a defensible security posture.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                href="/contact#request-audit"
              >
                Request Audit
              </Link>
              <Link
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                href="/blog"
              >
                Read Security Insights
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-900/30">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">
              Why teams choose Sentinel
            </p>
            <ul className="space-y-3 text-slate-100">
              {riskSignals.map((signal) => (
                <li key={signal} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 md:p-10">
          <h2 className="mb-8 text-3xl font-semibold text-white">How it works</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {workflow.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950/50 p-5"
              >
                <p className="mb-3 font-mono text-sm text-cyan-300">Step {item.step}</p>
                <h3 className="mb-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-cyan-300/30 bg-gradient-to-r from-cyan-400/20 to-emerald-400/10 p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-white">
            Need a pre-launch security review?
          </h2>
          <p className="mt-3 max-w-2xl text-slate-200">
            Share your chain, codebase stage, and launch target. We will reply
            with scope, timeline, and next steps.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-slate-100"
              href="/contact#request-audit"
            >
              Request Audit
            </Link>
            <Link
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              href="/contact"
            >
              Contact Security Team
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
