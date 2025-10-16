import React from 'react'
import { Sun, Moon } from 'lucide-react'

export const Header = ({ isDark, onThemeToggle }) => {
  return (
    <header className={`${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'} border-b sticky top-0 z-50 backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            💰 Fintech Flowcharts
          </h1>
          <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            AI-Powered Financial System for 230M+ Gig Workers
          </p>
        </div>
        
        <button
          onClick={onThemeToggle}
          className={`p-2 rounded-lg transition-colors ${
            isDark
              ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
              : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
          }`}
          title="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  )
}

export default Header
