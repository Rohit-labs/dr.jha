import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ConditionCard({ condition }) {
  const { slug, category, name, shortDescription } = condition

  return (
    <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group">
      <div>
        <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#064C3B] block mb-2">
          {category}
        </span>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] leading-tight mb-2.5 group-hover:text-[#064C3B] transition-colors">
          {name}
        </h2>
        <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal mb-5">
          {shortDescription}
        </p>
      </div>

      <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
        <Link
          to={`/conditions/${slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#064C3B] group-hover:text-[#064C3B] transition-colors"
        >
          <span>Explore Guide</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] text-stone-400 font-medium">Verified Protocol</span>
      </div>
    </div>
  )
}
