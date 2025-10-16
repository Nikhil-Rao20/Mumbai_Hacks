import React from 'react'
import { Copy, Download } from 'lucide-react'

export const CodeViewer = ({ code, isDark }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    alert('Code copied to clipboard!')
  }

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([code], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'flowchart.mmd'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className={`rounded-lg overflow-hidden border ${isDark ? 'border-slate-700 bg-slate-900' : 'border-gray-200 bg-gray-900'}`}>
      <div className={`flex items-center justify-between px-4 py-3 ${isDark ? 'bg-slate-800' : 'bg-gray-800'}`}>
        <span className="text-green-400 font-mono text-sm">Mermaid Code</span>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
            title="Copy code"
          >
            <Copy size={16} />
            Copy
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm transition-colors"
            title="Download code"
          >
            <Download size={16} />
            Download
          </button>
        </div>
      </div>
      <div className="overflow-x-auto max-h-96">
        <pre className="text-gray-300 text-xs font-mono whitespace-pre p-4 leading-relaxed">
          {code}
        </pre>
      </div>
    </div>
  )
}

export default CodeViewer
