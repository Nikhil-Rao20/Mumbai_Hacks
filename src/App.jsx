import React, { useState, useEffect } from 'react'
import LandingPage from '@/pages/LandingPage'
import PhasesPage from '@/pages/PhasesPage'
import FeaturesPage from '@/pages/FeaturesPage'

function App() {
  const [isDark, setIsDark] = useState(false)
  const [currentPage, setCurrentPage] = useState('landing')

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

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <>
      {currentPage === 'landing' && (
        <LandingPage
          isDark={isDark}
          onThemeToggle={() => setIsDark(!isDark)}
          onNavigate={handleNavigate}
        />
      )}
      {currentPage === 'phases' && (
        <PhasesPage
          isDark={isDark}
          onThemeToggle={() => setIsDark(!isDark)}
          onNavigate={handleNavigate}
        />
      )}
      {currentPage === 'features' && (
        <FeaturesPage
          isDark={isDark}
          onThemeToggle={() => setIsDark(!isDark)}
          onNavigate={handleNavigate}
        />
      )}
    </>
  )
}

export default App
