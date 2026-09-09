import React from 'react'
import ConditionCard from './ConditionCard'

export default function ConditionList({ conditions, emptyMessage = 'No conditions found matching your search.' }) {
  if (!conditions || conditions.length === 0) {
    return (
      <div className="py-12 text-center text-stone-500 text-sm">
        {emptyMessage}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {conditions.map((condition) => (
        <ConditionCard key={condition.slug} condition={condition} />
      ))}
    </div>
  )
}
