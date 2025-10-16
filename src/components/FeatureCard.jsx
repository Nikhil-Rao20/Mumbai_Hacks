import React from 'react'
import * as LucideIcons from 'lucide-react'

function FeatureCard({ feature, data, isActive, onClick }) {
  const iconName = data.icon
  const IconComponent = LucideIcons[iconName] || LucideIcons.Zap

  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
        isActive
          ? `bg-gradient-to-br ${data.color} text-white border-current shadow-lg ring-2 ring-offset-2 ring-current`
          : 'border-gray-300 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-500'
      }`}
    >
      <div className="flex items-start gap-3">
        <IconComponent size={24} className="flex-shrink-0 mt-0.5" />
        <div className="min-w-0">
          <h3 className={`font-bold text-sm truncate ${isActive ? '' : 'text-gray-900 dark:text-white'}`}>
            {data.title}
          </h3>
          <p className={`text-xs mt-1 line-clamp-2 ${isActive ? 'opacity-90' : 'text-gray-600 dark:text-gray-400'}`}>
            {data.description}
          </p>
        </div>
      </div>
    </button>
  )
}

export default FeatureCard
