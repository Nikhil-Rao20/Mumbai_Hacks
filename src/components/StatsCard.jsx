import React from 'react'

export const StatsCard = ({ value, label, subtext, gradient }) => {
  return (
    <div className={`bg-gradient-to-br ${gradient} text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow`}>
      <div className="text-3xl sm:text-4xl font-bold mb-2">{value}</div>
      <div className="text-sm sm:text-base font-semibold opacity-90">{label}</div>
      {subtext && <div className="text-xs opacity-75 mt-2">{subtext}</div>}
    </div>
  )
}

export default StatsCard
