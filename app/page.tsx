import Link from 'next/link'
import { Github, Mail, Shield, Search, Bug, Zap } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Open Source Security Toolkit</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Smart Contract<br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Security Toolkit
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            71+ Open Source Security Tools for Smart Contract Developers
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Battle-tested security scanners, analyzers, and PoC generators used in production audits. 
            Built by security researchers, for security researchers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Browse All Tools
              <Search className="w-5 h-5" />
            </Link>
            <a
              href="https://github.com/bigguybobby"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold border border-slate-700 transition-colors"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">71+</div>
            <div className="text-slate-400">Security Tools</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
            <div className="text-slate-400">Vulnerability Types</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">8</div>
            <div className="text-slate-400">Tool Categories</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">18K+</div>
            <div className="text-slate-400">Lines of Code</div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Tool Categories</h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive coverage across the entire security audit lifecycle
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard
            icon={<Search className="w-8 h-8" />}
            title="Discovery & Reconnaissance"
            description="Find high-value targets and map contract scope automatically"
            count={8}
            color="blue"
          />
          <CategoryCard
            icon={<Bug className="w-8 h-8" />}
            title="Vulnerability Scanners"
            description="Detect reentrancy, oracle manipulation, precision loss, and more"
            count={25}
            color="red"
          />
          <CategoryCard
            icon={<Zap className="w-8 h-8" />}
            title="Gas Optimization"
            description="Identify gas hotspots and expensive operations"
            count={3}
            color="yellow"
          />
          <CategoryCard
            icon={<Shield className="w-8 h-8" />}
            title="Protocol Analyzers"
            description="Specialized tools for DeFi protocols, DEXs, and lending pools"
            count={8}
            color="green"
          />
        </div>
      </section>

      {/* Featured Tools */}
      <section className="container mx-auto px-6 py-20 bg-slate-800/30">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Featured Tools</h2>
        <p className="text-slate-400 text-center mb-12">Most popular tools in our arsenal</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ToolCard
            name="bounty-target-scanner.sh"
            description="Scan Immunefi/Code4rena for high-value bug bounty programs"
            category="Discovery"
          />
          <ToolCard
            name="reentrancy-detector.sh"
            description="Detect reentrancy vulnerabilities via external calls + state changes"
            category="Vulnerability Scanners"
          />
          <ToolCard
            name="permit-scanner.sh"
            description="Scan for EIP-2612 permit vulnerabilities (signature replay, frontrun)"
            category="Vulnerability Scanners"
          />
          <ToolCard
            name="audit-speedrun.sh"
            description="Full protocol audit in one command - 9-step automated pipeline"
            category="Discovery"
          />
          <ToolCard
            name="immunefi-report-formatter.sh"
            description="Format findings for Immunefi submission with template generation"
            category="Reporting"
          />
          <ToolCard
            name="flashloan-poc-scaffold.sh"
            description="Flash loan PoC generator for Aave/dYdX/Balancer with Foundry"
            category="Testing"
          />
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
          >
            View All 71+ Tools
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Level Up Your Security Game?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join security researchers using these tools to find critical vulnerabilities and earn bounties
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/bigguybobby"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Github className="w-5 h-5" />
              Star on GitHub
            </a>
            <a
              href="mailto:security@example.com"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get Updates
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-slate-800">
        <div className="text-center text-slate-400">
          <p className="mb-4">Built by security researchers, for security researchers</p>
          <p className="text-sm">
            Open Source • MIT License • Powered by{' '}
            <a href="https://openclaw.ai" className="text-blue-400 hover:text-blue-300">
              OpenClaw
            </a>
          </p>
        </div>
      </footer>
    </main>
  )
}

function CategoryCard({ 
  icon, 
  title, 
  description, 
  count, 
  color 
}: { 
  icon: React.ReactNode
  title: string
  description: string
  count: number
  color: 'blue' | 'red' | 'yellow' | 'green'
}) {
  const colorClasses = {
    blue: 'from-blue-500/10 to-blue-600/10 border-blue-500/20 text-blue-400',
    red: 'from-red-500/10 to-red-600/10 border-red-500/20 text-red-400',
    yellow: 'from-yellow-500/10 to-yellow-600/10 border-yellow-500/20 text-yellow-400',
    green: 'from-green-500/10 to-green-600/10 border-green-500/20 text-green-400',
  }

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border rounded-lg p-6 hover:scale-105 transition-transform`}>
      <div className={`${colorClasses[color].split(' ')[2]} mb-4`}>{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-4">{description}</p>
      <div className="text-sm text-slate-500">{count} tools</div>
    </div>
  )
}

function ToolCard({ name, description, category }: { name: string; description: string; category: string }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-colors">
      <div className="text-xs text-blue-400 mb-2">{category}</div>
      <h3 className="text-lg font-semibold text-white mb-2 font-mono">{name}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  )
}
