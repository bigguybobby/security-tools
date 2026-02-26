export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  author: string;
  keywords: string[];
  sections: BlogSection[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "top-10-smart-contract-vulnerabilities-in-2026",
    title: "Top 10 Smart Contract Vulnerabilities in 2026",
    description:
      "A practical breakdown of the ten most exploited smart contract vulnerability classes in 2026 and how security teams can prevent losses before deployment.",
    publishedAt: "2026-02-01",
    updatedAt: "2026-02-12",
    readingTime: "8 min read",
    author: "Sentinel Research Team",
    keywords: [
      "smart contract vulnerabilities",
      "web3 security",
      "solidity audit",
      "defi risk",
      "crypto exploit prevention",
    ],
    sections: [
      {
        heading: "Where teams are still losing funds",
        paragraphs: [
          "Attackers keep targeting predictable implementation mistakes, not theoretical edge cases. Most incidents in 2026 map back to missing threat modeling, incomplete access control assumptions, and rushed deployment pipelines.",
          "The list below reflects recurring issues seen in production incidents and pre-launch audits across DeFi, L2 middleware, and tokenized asset platforms.",
        ],
      },
      {
        heading: "The top 10 vulnerability classes",
        bullets: [
          "Access control drift in upgradeable contracts",
          "Cross-function reentrancy via shared state",
          "Oracle and price feed manipulation windows",
          "Arithmetic precision loss in accounting logic",
          "Unsafe external calls and callback assumptions",
          "Signature replay across chains or domains",
          "DoS from unbounded loops and storage growth",
          "Initialization race conditions in proxies",
          "Privilege escalation through role misconfiguration",
          "Faulty liquidation math and insolvency checks",
        ],
        paragraphs: [
          "Treat each class as a test category with dedicated unit, invariant, and fuzz coverage. Finding one issue usually signals adjacent defects in the same subsystem.",
        ],
      },
      {
        heading: "How to reduce exploit probability",
        bullets: [
          "Model critical invariants before writing code",
          "Use automated static and dynamic scans on every pull request",
          "Gate deployments on high-severity findings",
          "Run an independent audit before mainnet release",
        ],
        paragraphs: [
          "The fastest teams pair automation with human review. Automation catches breadth and regressions, while auditors validate assumptions and economic safety properties.",
        ],
      },
    ],
  },
  {
    slug: "why-you-need-automated-security-scanning",
    title: "Why You Need Automated Security Scanning",
    description:
      "Automated scanning catches security regressions at commit speed, lowers audit costs, and gives engineering leaders measurable risk visibility.",
    publishedAt: "2026-01-18",
    updatedAt: "2026-02-10",
    readingTime: "6 min read",
    author: "Sentinel Engineering",
    keywords: [
      "automated security scanning",
      "DevSecOps",
      "CI security",
      "smart contract scanner",
      "application security automation",
    ],
    sections: [
      {
        heading: "Manual review alone does not scale",
        paragraphs: [
          "Security reviewers cannot manually inspect every commit in a fast-moving codebase. By the time an auditor sees a risky change, it may already be merged, shipped, or copied across repos.",
          "Automated scanners provide immediate signal at pull-request time, turning security into a repeatable engineering control instead of a late-stage checkpoint.",
        ],
      },
      {
        heading: "What automation gives your team",
        bullets: [
          "Continuous detection of known vulnerability patterns",
          "Consistent policy enforcement across repositories",
          "Actionable findings mapped to code locations",
          "Trend reporting for risk posture over time",
        ],
        paragraphs: [
          "Automation is not a replacement for audits. It is the baseline that keeps common mistakes out of production and keeps paid audit time focused on high-impact logic flaws.",
        ],
      },
      {
        heading: "Implementation checklist",
        bullets: [
          "Run static analysis on every pull request",
          "Run deeper fuzz or symbolic checks on release branches",
          "Fail builds on critical and high findings",
          "Route findings to owners with explicit SLA targets",
        ],
        paragraphs: [
          "Teams that treat scanning results as first-class engineering work see faster remediation, fewer critical defects at audit time, and stronger launch confidence.",
        ],
      },
    ],
  },
  {
    slug: "clarity-vs-solidity-security-comparison",
    title: "Clarity vs Solidity: Security Comparison",
    description:
      "A security-focused comparison of Clarity and Solidity, covering language-level protections, typical failure modes, and audit implications.",
    publishedAt: "2026-02-08",
    updatedAt: "2026-02-20",
    readingTime: "7 min read",
    author: "Protocol Security Lab",
    keywords: [
      "Clarity vs Solidity",
      "smart contract language security",
      "Solidity audit",
      "Clarity security",
      "web3 development",
    ],
    sections: [
      {
        heading: "Security model differences",
        paragraphs: [
          "Clarity is interpreted and deliberately restrictive, which removes entire bug classes tied to compiler surprises and hidden runtime behavior. Solidity is more expressive and ecosystem-rich, but that flexibility introduces more room for misuse.",
          "In practice, language choice changes your default risk profile, but architecture and review discipline still dominate final security outcomes.",
        ],
      },
      {
        heading: "Where Solidity needs extra safeguards",
        bullets: [
          "Reentrancy and external call ordering",
          "Upgradeability complexity and storage layout hazards",
          "Delegatecall and proxy privilege boundaries",
          "Edge-case behavior in token integrations",
        ],
        paragraphs: [
          "Solidity teams should enforce hardened coding standards, exhaustive tests, and strict deployment controls to offset the broader attack surface.",
        ],
      },
      {
        heading: "Where Clarity still needs audit depth",
        bullets: [
          "Economic logic flaws and incentive failures",
          "Permission model mistakes in contract composition",
          "Unexpected interactions with external protocol assumptions",
        ],
        paragraphs: [
          "Clarity reduces certain implementation risks, but it does not prevent flawed protocol design. A strong audit still needs to validate invariants, value flow, and abuse scenarios.",
        ],
      },
    ],
  },
];

export const blogBySlug = Object.fromEntries(
  blogArticles.map((article) => [article.slug, article]),
) as Record<string, BlogArticle>;

export function getBlogArticle(slug: string) {
  return blogBySlug[slug];
}
