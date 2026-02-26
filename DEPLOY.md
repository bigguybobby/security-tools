# Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy this Next.js site:

```bash
# 1. Install Vercel CLI (if not already)
npm i -g vercel

# 2. Deploy
cd ~/projects/security-tools-site
vercel --prod
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? (select your account)
- Link to existing project? **No**
- Project name? `security-tools-site`
- Directory? `./`
- Override settings? **No**

Your site will be live at: `https://security-tools-site.vercel.app`

## Deploy to Netlify

```bash
# 1. Install Netlify CLI
npm i -g netlify-cli

# 2. Build the site
npm run build

# 3. Deploy
netlify deploy --prod --dir=out

# Or use drag-and-drop: https://app.netlify.com/drop
```

## Deploy to GitHub Pages

```bash
# 1. Create a gh-pages branch
git checkout -b gh-pages

# 2. Build and commit
npm run build
git add out -f
git commit -m "Deploy to GitHub Pages"

# 3. Push
git push origin gh-pages

# 4. Enable GitHub Pages in repo settings
# Settings > Pages > Source: gh-pages branch
```

Your site will be at: `https://yourusername.github.io/security-tools-site/`

## Custom Domain Setup

### Vercel
1. Go to project settings > Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain settings
2. Add custom domain
3. Configure DNS (A record or CNAME)

### GitHub Pages
1. Add `CNAME` file to `public/` with your domain
2. Rebuild and redeploy
3. Configure DNS:
   - A records pointing to GitHub IPs
   - Or CNAME to `yourusername.github.io`

## Environment Variables

This is a static site with no backend, so no env vars needed.

If you add API calls later:
- Vercel: Project Settings > Environment Variables
- Netlify: Site Settings > Environment Variables

## SSL/HTTPS

All platforms (Vercel, Netlify, GitHub Pages) provide free SSL certificates automatically.

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test mobile responsiveness
- [ ] Check SEO meta tags (view page source)
- [ ] Submit sitemap to Google Search Console: `your-domain.com/sitemap.xml`
- [ ] Test Open Graph tags: https://www.opengraph.xyz/
- [ ] Update GitHub repo URL in footer/CTAs if changed

## Continuous Deployment

Both Vercel and Netlify support auto-deployment from GitHub:

1. Push your code to GitHub
2. Connect repo in Vercel/Netlify dashboard
3. Every push to `main` branch auto-deploys

## Performance Tips

- ✅ Already optimized as static export
- ✅ Images use `unoptimized: true` for static hosting
- ✅ No client-side data fetching (all static)
- ✅ Minimal JavaScript bundle

Expected Lighthouse scores: 90-100 across all metrics.

## Troubleshooting

**Build fails:**
- Check Node.js version: `node -v` (need 18+)
- Clear cache: `rm -rf .next out node_modules && npm install`

**Pages show 404:**
- Ensure `output: 'export'` in `next.config.ts`
- Check `trailingSlash: true` setting

**Styling broken:**
- Verify Tailwind config
- Check `globals.css` imports

## Need Help?

- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com/
