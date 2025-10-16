import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, ChevronUp, Copy, ExternalLink, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'
import Header from '@/components/Header'
import FeatureCard from '@/components/FeatureCard'
import MermaidDiagram from '@/components/MermaidDiagram'
import CodeViewer from '@/components/CodeViewer'
import { flowchartData } from '@/data/flowcharts'

function FeaturesPage({ isDark, onThemeToggle, onNavigate }) {
  const [activeFeature, setActiveFeature] = useState('feature1')
  const [showCode, setShowCode] = useState(false)
  const [zoom, setZoom] = useState(100)
  const mermaidRef = useRef(null)

  const currentData = flowchartData[activeFeature]
  const features = Object.entries(flowchartData).filter(([key]) => key.startsWith('feature'))

  const handleZoom = (direction) => {
    if (direction === 'in' && zoom < 200) setZoom(zoom + 10)
    if (direction === 'out' && zoom > 50) setZoom(zoom - 10)
  }

  const resetZoom = () => setZoom(100)

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50'}`}>
        <Header isDark={isDark} onThemeToggle={onThemeToggle} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Navigation Bar */}
          <div className="mb-6 flex items-center justify-between">
            <h1 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              🎯 Feature Flowcharts
            </h1>
            <button
              onClick={() => onNavigate('phases')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-white'
                  : 'bg-white hover:bg-gray-100 text-gray-900'
              }`}
            >
              ← System Phases
            </button>
          </div>

          {/* Feature Selection Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
            {features.map(([key, data]) => (
              <FeatureCard
                key={key}
                feature={key}
                data={data}
                isActive={activeFeature === key}
                onClick={() => {
                  setActiveFeature(key)
                  setShowCode(false)
                  setZoom(100)
                }}
              />
            ))}
          </div>

          {/* Main Flowchart Display */}
          <div className={`${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-2xl shadow-2xl p-6 sm:p-8 border animate-fadeIn`}>
            {/* Header with Controls */}
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {currentData.title}
                  </h2>
                  <p className={`text-sm sm:text-base mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {currentData.description}
                  </p>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex flex-wrap gap-2 justify-between">
                <div className="flex gap-2">
                  <button
                    onClick={() => handleZoom('out')}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                      isDark
                        ? 'bg-slate-700 hover:bg-slate-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                    title="Zoom Out"
                  >
                    <ZoomOut size={18} />
                    <span className="text-sm">{zoom}%</span>
                  </button>
                  <button
                    onClick={resetZoom}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                      isDark
                        ? 'bg-slate-700 hover:bg-slate-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                    title="Reset Zoom"
                  >
                    <RotateCcw size={18} />
                  </button>
                  <button
                    onClick={() => handleZoom('in')}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                      isDark
                        ? 'bg-slate-700 hover:bg-slate-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                    title="Zoom In"
                  >
                    <ZoomIn size={18} />
                  </button>
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
            </div>

            {/* Code Display */}
            {showCode && (
              <div className="mb-6 animate-slideUp">
                <CodeViewer code={currentData.code} isDark={isDark} />
              </div>
            )}

            {/* Diagram Display with Zoom */}
            <div
              ref={mermaidRef}
              className={`rounded-xl overflow-auto ${isDark ? 'bg-slate-700' : 'bg-gray-50'} border ${isDark ? 'border-slate-600' : 'border-gray-200'}`}
              style={{
                maxHeight: '600px',
                minHeight: '500px',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top left', padding: '20px' }}>
                <MermaidDiagram code={currentData.code} isDark={isDark} />
              </div>
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
                  alert('Flowchart code copied!')
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isDark
                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                    : 'bg-purple-500 hover:bg-purple-600 text-white'
                }`}
              >
                <Copy size={16} />
                Copy Code
              </button>
            </div>

            {/* Feature Info */}
            <div className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-slate-700' : 'bg-gray-50'} border ${isDark ? 'border-slate-600' : 'border-gray-200'}`}>
              <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                About This Feature
              </h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {currentData.description}
              </p>
              <p className={`text-sm mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                💡 <strong>Tip:</strong> Use the zoom controls to explore the flowchart in detail. Use the slider to adjust the zoom level to your preference.
              </p>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => onNavigate('landing')}
              className={`p-4 rounded-lg border transition-all hover:shadow-lg ${
                isDark
                  ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-white'
                  : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-900'
              }`}
            >
              ← Back to Home
            </button>
            <div className={`p-4 rounded-lg border text-center ${
              isDark ? 'bg-slate-800 border-slate-700 text-gray-300' : 'bg-white border-gray-200 text-gray-600'
            }`}>
              <p className="font-semibold">Feature {Object.keys(features).indexOf(activeFeature) + 1} of {features.length}</p>
            </div>
            <button
              onClick={() => onNavigate('phases')}
              className={`p-4 rounded-lg border transition-all hover:shadow-lg ${
                isDark
                  ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-white'
                  : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-900'
              }`}
            >
              System Phases →
            </button>
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

export default FeaturesPage
