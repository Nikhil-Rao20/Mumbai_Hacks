import React, { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, Copy, ExternalLink } from 'lucide-react'
import Header from '@/components/Header'
import PhaseCard from '@/components/PhaseCard'
import MermaidDiagram from '@/components/MermaidDiagram'
import CodeViewer from '@/components/CodeViewer'
import StatsCard from '@/components/StatsCard'
import { flowchartData } from '@/data/flowcharts'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [activeChart, setActiveChart] = useState('main')
  const [showCode, setShowCode] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const currentData = flowchartData[activeChart]
  const phases = Object.entries(flowchartData)

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50'}`}>
        <Header isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Phase Selection Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8">
            {phases.map(([key, data]) => (
              <PhaseCard
                key={key}
                phase={key}
                data={data}
                isActive={activeChart === key}
                onClick={() => {
                  setActiveChart(key)
                  setShowCode(false)
                }}
              />
            ))}
          </div>

          {/* Main Flowchart Display */}
          <div className={`${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-2xl shadow-2xl p-6 sm:p-8 border animate-fadeIn`}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <div>
                <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  {currentData.title}
                </h2>
                <p className={`text-sm sm:text-base mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {currentData.description}
                </p>
              </div>
              <button
                onClick={() => setShowCode(!showCode)}
                className={`btn-primary inline-flex items-center gap-2 whitespace-nowrap`}
              >
                {showCode ? (
                  <>
                    <ChevronUp size={18} />
                    Hide Code
                  </>
                ) : (
                  <>
                    <ChevronDown size={18} />
                    View Code
                  </>
                )}
              </button>
            </div>

            {/* Code Display */}
            {showCode && (
              <div className="mb-6 animate-slideUp">
                <CodeViewer code={currentData.code} isDark={isDark} />
              </div>
            )}

            {/* Diagram Display */}
            <div className={`rounded-xl overflow-hidden ${isDark ? 'bg-slate-700' : 'bg-gray-50'}`}>
              <MermaidDiagram code={currentData.code} isDark={isDark} />
            </div>

            {/* External Links */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a
                href="https://mermaid.live"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isDark
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                <ExternalLink size={16} />
                Open in Mermaid Editor
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(currentData.code)
                  alert('Flowchart code copied! Paste it in Mermaid Live Editor.')
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isDark
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-purple-500 hover:bg-purple-600 text-white'
                }`}
              >
                <Copy size={16} />
                Copy & Open
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              value="4"
              label="Unique Features"
              subtext="Voice, Fast-Track, Context, Monitoring"
              gradient="from-purple-500 to-purple-700"
            />
            <StatsCard
              value="15+"
              label="AI Agents"
              subtext="Parallel processing system"
              gradient="from-blue-500 to-blue-700"
            />
            <StatsCard
              value="92%"
              label="ML Accuracy"
              subtext="Pattern prediction confidence"
              gradient="from-green-500 to-green-700"
            />
            <StatsCard
              value="+236%"
              label="Savings Growth"
              subtext="₹2,847/month vs ₹850 baseline"
              gradient="from-amber-500 to-amber-700"
            />
          </div>

          {/* System Flow Overview */}
          <div className={`mt-12 ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-2xl shadow-xl p-6 sm:p-8 border`}>
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>
              📋 Complete System Flow
            </h3>
            <div className="space-y-3">
              {[
                { num: '0', title: 'Offline-First Engine', desc: 'User inputs → Local storage → Smart sync → 100% Offline' },
                { num: '1', title: 'Data Collection', desc: 'Multi-source → Quality checks → Preprocessing → Categorization' },
                { num: '2', title: 'Analysis Layer', desc: '4 parallel agents → Knowledge retrieval → Tax compliance' },
                { num: '3', title: 'Reasoning Loop', desc: 'Claude reasoning → Simulations → Explainability → Personalization' },
                { num: '4', title: 'Action Layer', desc: 'Multi-channel delivery → Auto-execution → Gamification' },
                { num: '5', title: 'Learning Loop', desc: 'Feedback → Outcome verification → Adaptive learning' },
                { num: '∞', title: '24/7 Monitoring', desc: 'Every 6 hours → Risk/opportunity → Alerts → Back to orchestrator' },
              ].map((item, idx) => (
                <div key={idx} className={`flex gap-4 p-4 rounded-lg ${isDark ? 'bg-slate-700' : 'bg-gray-50'} border-l-4 transition-all hover:shadow-md`} style={{ borderColor: ['#3b82f6', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#10b981'][idx] }}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold`} style={{ backgroundColor: ['#3b82f6', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#10b981'][idx] }}>
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>{item.title}</h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer className={`mt-12 text-center pb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <p className="text-sm mb-2">
              🌟 Built with React • Powered by Claude Sonnet 4.5 • 230M+ Gig Workers
            </p>
            <p className="text-xs opacity-75">
              All flowcharts optimized for clarity and rendered live using Mermaid.js
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
