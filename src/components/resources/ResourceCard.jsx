import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'

export default function ResourceCard({ resource }) {
  const { slug, category, readTime, title, summary, date } = resource

  return (
    <article className="bg-white border border-[#E8E2D8] rounded-3xl p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
          <span className="font-bold tracking-[0.16em] uppercase text-[#B64D2E] text-[10px]">
            {category}
          </span>
          <span className="flex items-center gap-1 text-[11px]">
            <Clock className="w-3 h-3" />
            {readTime}
          </span>
        </div>

        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1C1A] leading-snug mb-3 group-hover:text-[#A8482D] transition-colors">
          {title}
        </h2>

        <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal mb-6">
          {summary}
        </p>
      </div>

      <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
        <Link
          to={`/resources/${slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#123F32] group-hover:text-[#A8482D] transition-colors"
        >
          <span>Read Article</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] text-stone-400">{date}</span>
      </div>
    </article>
  )
}
