import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CaseStudyCard({ caseStudy }) {
  const { slug, image, title, category, summary } = caseStudy

  return (
    <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        <div className="w-full h-48 sm:h-52 overflow-hidden bg-stone-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
        </div>

        <div className="p-6 sm:p-7 space-y-3">
          <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#064C3B] block">
            {category}
          </span>
          <h2 className="font-serif text-xl font-bold text-[#26332F] leading-snug group-hover:text-[#064C3B] transition-colors">
            {title}
          </h2>
          <p className="text-xs text-stone-600 leading-relaxed font-normal line-clamp-3">
            {summary}
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-7 pt-0 border-t border-stone-100 flex items-center justify-between mt-4">
        <Link
          to={`/case-studies/${slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#064C3B] group-hover:text-[#064C3B] transition-colors"
        >
          <span>Read Full Journey</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] text-stone-400">Clinical Report</span>
      </div>
    </div>
  )
}
