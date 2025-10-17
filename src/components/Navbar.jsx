import React from 'react'
import { Home, BarChart3, Target, Moon, Sun } from 'lucide-react'

function Navbar({ isDark, onThemeToggle, onNavigate, currentPage }) {
  const navItems = [
    { id: 'landing', label: 'Home', icon: Home },
    { id: 'phases', label: 'Phases', icon: BarChart3 },
    { id: 'features', label: 'Features', icon: Target }
  ]

  return (
    <nav className={`sticky top-0 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'} border-b shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="KAMAI Logo" className="w-8 h-8 rounded-lg object-cover" />
            <span className={`font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
              KAMAI
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === id
                    ? isDark
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-100 text-purple-700'
                    : isDark
                    ? 'text-gray-400 hover:text-white hover:bg-slate-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline font-medium">{label}</span>
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onThemeToggle}
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
