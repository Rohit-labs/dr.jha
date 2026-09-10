import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function TreatmentCard({ treatment }) {
  const { slug, category, name, shortDescription, benefits = [] } = treatment

  return (
    <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group">
      <div>
        <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#064C3B] block mb-2">
          {category}
        </span>
        <h2 className="font-serif text-2xl font-bold text-[#26332F] leading-tight mb-3 group-hover:text-[#064C3B] transition-colors">
          {name}
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mb-5">
          {shortDescription}
        </p>

        {benefits.length > 0 && (
          <ul className="space-y-2 mb-6">
            {benefits.slice(0, 3).map((b, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#064C3B] shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
        <Link
          to={`/treatments/${slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#064C3B] group-hover:text-[#064C3B] transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] text-stone-400 font-medium">Certified Clinicians</span>
      </div>
    </div>
  )
}
