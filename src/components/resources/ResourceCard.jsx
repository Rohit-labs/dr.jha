import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, ArrowRight } from 'lucide-react'

export default function ResourceCard({ resource }) {
  const { slug, category, readTime, title, summary, date } = resource

  return (
    <article className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
          <span className="font-bold tracking-[0.16em] uppercase text-[#064C3B] text-[10px]">
            {category}
          </span>
          <span className="flex items-center gap-1 text-[11px]">
            <Clock className="w-3 h-3" />
            {readTime}
          </span>
        </div>

        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] leading-snug mb-3 group-hover:text-[#064C3B] transition-colors">
          {title}
        </h2>

        <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal mb-6">
          {summary}
        </p>
      </div>

      <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
        <Link
          to={`/blogs/${slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#064C3B] group-hover:text-[#064C3B] transition-colors"
        >
          <span>Read Article</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] text-stone-400">{date}</span>
      </div>
    </article>
  )
}
