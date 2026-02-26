'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ArrowLeft, Github, Terminal, ExternalLink } from 'lucide-react'
import tools from '@/data/tools.json'

const categories = [
  'All Tools',
  'Discovery & Reconnaissance',
  'Vulnerability Scanners',
  'Protocol-Specific Analyzers',
  'Analysis & Mapping',
  'Gas Optimization',
  'Reporting & Formatting',
  'DeFi Operations',
  'Testing'
]

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Tools')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'All Tools' || tool.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toolsByCategory = categories
    .filter(cat => cat !== 'All Tools')
    .map(category => ({
      name: category,
      tools: tools.filter(t => t.category === category)
    }))

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <a
              href="https://github.com/bigguybobby"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Security Tools</h1>
          <p className="text-xl text-slate-400">
            Browse our collection of {tools.length} open source security tools
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-12 pr-4 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-slate-400">
            Showing {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
          </p>
        </div>

        {/* Tools Grid */}
        {selectedCategory === 'All Tools' && searchQuery === '' ? (
          // Show by category
          <div className="space-y-16">
            {toolsByCategory.map(({ name, tools: categoryTools }) => (
              <section key={name}>
                <h2 className="text-3xl font-bold text-white mb-6">{name}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryTools.map(tool => (
                    <ToolCard key={tool.name} tool={tool} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          // Show filtered results
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map(tool => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No tools found matching your search.</p>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <section className="container mx-auto px-6 py-20 mt-12">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Contribute?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            These tools are open source. Submit PRs, report issues, or suggest new tools.
          </p>
          <a
            href="https://github.com/bigguybobby"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-slate-800">
        <div className="text-center text-slate-400">
          <p className="mb-4">Built by security researchers, for security researchers</p>
          <p className="text-sm">Open Source • MIT License</p>
        </div>
      </footer>
    </main>
  )
}

function ToolCard({ tool }: { tool: typeof tools[0] }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
      {/* Category Badge */}
      <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-400 mb-4">
        {tool.category}
      </div>

      {/* Tool Name */}
      <h3 className="text-xl font-semibold text-white mb-3 font-mono break-all">
        {tool.name}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-sm mb-4">
        {tool.description}
      </p>

      {/* Features */}
      <div className="mb-4">
        <div className="text-xs text-slate-500 mb-2">Key Features:</div>
        <ul className="space-y-1">
          {tool.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
              <span className="text-blue-400 mt-0.5">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Usage */}
      <div className="bg-slate-900/50 border border-slate-700 rounded p-3">
        <div className="flex items-center gap-2 mb-2">
          <Terminal className="w-4 h-4 text-slate-500" />
          <span className="text-xs text-slate-500">Usage:</span>
        </div>
        <code className="text-xs text-green-400 break-all">
          {tool.usage}
        </code>
      </div>
    </div>
  )
}
