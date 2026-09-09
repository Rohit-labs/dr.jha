import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function TreatmentCard({ treatment }) {
  const { slug, category, name, shortDescription, benefits = [] } = treatment

  return (
    <div className="bg-white border border-[#E8E2D8] rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group">
      <div>
        <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#B64D2E] block mb-2">
          {category}
        </span>
        <h2 className="font-serif text-2xl font-bold text-[#1C1C1A] leading-tight mb-3 group-hover:text-[#A8482D] transition-colors">
          {name}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mb-5">
          {shortDescription}
        </p>

        {benefits.length > 0 && (
          <ul className="space-y-2 mb-6">
            {benefits.slice(0, 3).map((b, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#3A5A40] shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
        <Link
          to={`/treatments/${slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#123F32] group-hover:text-[#A8482D] transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] text-stone-400 font-medium">Certified Clinicians</span>
      </div>
    </div>
  )
}
