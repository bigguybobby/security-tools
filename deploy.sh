#!/bin/bash
# Quick deploy script for Vercel

set -e

echo "🚀 Deploying Security Tools Site to Vercel..."

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm i -g vercel
fi

# Build the site
echo "🔨 Building site..."
npm run build

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🔗 Your site is now live!"
