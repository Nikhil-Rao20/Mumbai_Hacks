import React, { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

export const MermaidDiagram = ({ code, isDark }) => {
  const containerRef = useRef(null)
  const mermaidId = useRef(`mermaid-${Math.random().toString(36).substr(2, 9)}`)

  useEffect(() => {
    if (!containerRef.current || !code) return

    const renderDiagram = async () => {
      try {
        mermaid.initialize({
          startOnLoad: true,
          theme: isDark ? 'dark' : 'default',
          securityLevel: 'loose',
          fontFamily: 'inter, system-ui, sans-serif',
        })

        const element = document.createElement('div')
        element.id = mermaidId.current
        element.className = 'mermaid'
        element.textContent = code

        containerRef.current.innerHTML = ''
        containerRef.current.appendChild(element)

        await mermaid.contentLoaded()
      } catch (error) {
        console.error('Mermaid rendering error:', error)
        if (containerRef.current) {
          containerRef.current.innerHTML = `<div class="text-red-500 p-4">Error rendering diagram: ${error.message}</div>`
        }
      }
    }

    renderDiagram()
  }, [code, isDark])

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-auto rounded-lg bg-white dark:bg-slate-800 p-4 border border-gray-200 dark:border-slate-700"
      style={{ minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    />
  )
}

export default MermaidDiagram
