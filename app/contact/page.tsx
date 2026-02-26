import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request Security Audit",
  description:
    "Request a smart contract security audit. Share your protocol scope and launch goals to receive a tailored review plan.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Request Security Audit",
    description:
      "Submit your protocol details and get a tailored smart contract audit proposal.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Request Security Audit",
    url: `${siteConfig.url}/contact`,
    about: {
      "@type": "Service",
      serviceType: "Smart Contract Security Audit",
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-12 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <header className="mb-10 rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur">
        <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">CONTACT</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
          Request an Audit
        </h1>
        <p className="mt-4 text-lg text-slate-300">
          Send your scope and timeline. Our team will respond with an audit plan
          and next steps.
        </p>
        <Link
          className="mt-6 inline-flex rounded-full border border-white/20 px-5 py-2 font-semibold text-white transition hover:bg-white/10"
          href="/blog"
        >
          Read security articles first
        </Link>
      </header>

      <main>
        <form
          id="request-audit"
          className="space-y-5 rounded-3xl border border-white/10 bg-slate-900/60 p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm text-slate-200">Name</span>
              <input
                className="w-full rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                name="name"
                type="text"
                placeholder="Jane Founder"
                required
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm text-slate-200">Work email</span>
              <input
                className="w-full rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
                name="email"
                type="email"
                placeholder="jane@protocol.com"
                required
              />
            </label>
          </div>

          <label className="space-y-2">
            <span className="text-sm text-slate-200">Project type</span>
            <input
              className="w-full rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
              name="project"
              type="text"
              placeholder="DeFi lending protocol on Ethereum"
              required
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm text-slate-200">Audit goals and deadline</span>
            <textarea
              className="min-h-32 w-full rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
              name="details"
              placeholder="Share what you are launching, known risk areas, and target mainnet date."
              required
            />
          </label>

          <button
            className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            type="submit"
          >
            Submit Request
          </button>

          <p className="text-sm text-slate-400">
            This form is a frontend placeholder. Connect it to your CRM, email,
            or API endpoint before production.
          </p>
        </form>
      </main>
    </div>
  );
}
