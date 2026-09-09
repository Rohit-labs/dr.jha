import React from 'react'
import TreatmentCard from './TreatmentCard'

export default function TreatmentList({ treatments }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {treatments.map((treatment) => (
        <TreatmentCard key={treatment.slug} treatment={treatment} />
      ))}
    </div>
  )
}
