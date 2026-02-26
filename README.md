# Smart Contract Security Toolkit

> 71+ Open Source Security Tools for Smart Contract Developers

A clean, professional landing page showcasing our smart contract security tools collection. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Landing Page**: Hero section, stats, tool categories, and CTAs
- **Tool Index**: Searchable, filterable catalog of all 71 tools
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards, sitemap
- **Static Export**: Deployable to Vercel, Netlify, GitHub Pages
- **Responsive**: Mobile-first design with Tailwind CSS

## 📦 Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build static export
npm run build

# Preview build
npx serve out
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=out
```

### GitHub Pages
```bash
# Build and push to gh-pages branch
npm run build
git add out -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages
```

## 📁 Project Structure

```
security-tools-site/
├── app/
│   ├── page.tsx           # Landing page
│   ├── tools/
│   │   └── page.tsx       # Tool index
│   ├── layout.tsx         # Root layout with SEO
│   └── globals.css        # Global styles
├── data/
│   └── tools.json         # Tool metadata
├── public/
│   ├── sitemap.xml
│   └── robots.txt
└── next.config.ts         # Static export config
```

## 🎯 Tool Categories

- **Discovery & Reconnaissance** (8 tools)
- **Vulnerability Scanners** (25 tools)
- **Protocol-Specific Analyzers** (8 tools)
- **Analysis & Mapping** (12 tools)
- **Reporting & Formatting** (7 tools)
- **DeFi Operations** (6 tools)
- **Testing** (5 tools)

## 📊 SEO Features

- ✅ Semantic HTML
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Fast page load (static export)
- ✅ Mobile responsive

## 🔗 Links

- GitHub: [bigguybobby](https://github.com/bigguybobby)
- Tools: `~/.openclaw/workspace-hackatooner/tools/`

## 📝 License

MIT

---

Built by security researchers, for security researchers.
