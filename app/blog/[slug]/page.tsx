import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogArticles, getBlogArticle } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {
      title: "Article not found",
      description: "The requested blog article could not be found.",
    };
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `${siteConfig.url}/blog/${article.slug}`,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  const publishedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: `${siteConfig.url}/favicon.ico`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${article.slug}`,
    keywords: article.keywords.join(", "),
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-12 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />

      <header className="mb-10 rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
          {publishedDate} {" • "} {article.readingTime}
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-lg text-slate-300">{article.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            className="rounded-full bg-cyan-400 px-5 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
            href="/contact#request-audit"
          >
            Request Audit
          </Link>
          <Link
            className="rounded-full border border-white/20 px-5 py-2 font-semibold text-white transition hover:bg-white/10"
            href="/blog"
          >
            Back to Blog
          </Link>
        </div>
      </header>

      <main className="space-y-8 rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-slate-200">
        {article.sections.map((section) => (
          <section key={section.heading} className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-8 text-slate-300">
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="space-y-2 pl-1 text-slate-200">
                {section.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-7">
                    <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <section className="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-6">
          <h2 className="text-2xl font-semibold text-white">Ready for an external review?</h2>
          <p className="mt-3 text-slate-200">
            Get a scoped audit plan with timelines, pricing, and remediation support.
          </p>
          <Link
            className="mt-5 inline-flex rounded-full bg-white px-5 py-2 font-semibold text-slate-950 transition hover:bg-slate-100"
            href="/contact#request-audit"
          >
            Request Audit
          </Link>
        </section>
      </main>
    </div>
  );
}
