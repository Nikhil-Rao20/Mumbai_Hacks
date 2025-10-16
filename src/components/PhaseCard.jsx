import React from 'react'
import * as Icons from 'lucide-react'

export const PhaseCard = ({ phase, data, isActive, onClick }) => {
  const IconComponent = Icons[data.icon]

  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-left w-full ${
        isActive
          ? `shadow-2xl ring-4 ring-purple-400 bg-gradient-to-br ${data.color}`
          : 'shadow-lg hover:shadow-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-800'
      }`}
    >
      <div className="flex items-start gap-3 mb-2">
        <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-purple-100 dark:bg-purple-900'}`}>
          {IconComponent && <IconComponent size={20} className={isActive ? 'text-white' : 'text-purple-600 dark:text-purple-300'} />}
        </div>
        <div className="flex-1">
          <h3 className={`font-bold text-sm leading-tight ${isActive ? 'text-white' : 'text-gray-800 dark:text-gray-200'}`}>
            {data.title}
          </h3>
          <p className={`text-xs mt-1 ${isActive ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
            {data.description}
          </p>
        </div>
      </div>
      {isActive && <div className="text-xs text-white/90 mt-2">✓ Currently viewing</div>}
    </button>
  )
}

export default PhaseCard
