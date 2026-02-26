import type { Metadata } from "next";
import Link from "next/link";

import { blogArticles } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Smart Contract Security Blog",
  description:
    "Read expert guidance on smart contract vulnerabilities, automated security scanning, and audit strategy for blockchain teams.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Smart Contract Security Blog",
    description:
      "Security insights on vulnerabilities, scanning workflows, and protocol hardening.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  const sortedArticles = [...blogArticles].sort((a, b) =>
    a.publishedAt > b.publishedAt ? -1 : 1,
  );

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteConfig.name} Blog`,
    url: `${siteConfig.url}/blog`,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    blogPost: sortedArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      url: `${siteConfig.url}/blog/${article.slug}`,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt ?? article.publishedAt,
      author: {
        "@type": "Organization",
        name: article.author,
      },
      description: article.description,
    })),
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-12 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <header className="mb-12 rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur">
        <p className="font-mono text-sm tracking-[0.2em] text-cyan-300">BLOG</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
          Security Research and Engineering Guides
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Tactical content for protocol teams that need to reduce exploit risk,
          pass audits faster, and ship resilient smart contracts.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            className="rounded-full bg-cyan-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
            href="/contact#request-audit"
          >
            Request Audit
          </Link>
          <Link
            className="rounded-full border border-white/20 px-5 py-2 font-semibold text-white transition hover:bg-white/10"
            href="/"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main className="grid gap-6 md:grid-cols-2">
        {sortedArticles.map((article) => (
          <article
            key={article.slug}
            className="flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {" • "}
              {article.readingTime}
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">
              {article.title}
            </h2>
            <p className="mt-3 flex-1 text-slate-300">{article.description}</p>
            <Link
              className="mt-6 inline-flex w-fit rounded-full border border-cyan-300/40 px-4 py-2 font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
              href={`/blog/${article.slug}`}
            >
              Read article
            </Link>
          </article>
        ))}
      </main>
    </div>
  );
}
