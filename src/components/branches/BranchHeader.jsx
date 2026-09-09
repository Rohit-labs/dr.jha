import React from 'react'

export default function BranchHeader({ branch }) {
  const { name, tag, description } = branch

  return (
    <div className="max-w-3xl mb-10 sm:mb-12">
      <div className="flex items-center gap-2.5 mb-3">
        <span className="text-xs font-bold tracking-[0.2em] text-[#A8482D] uppercase">
          {name}
        </span>
        <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-stone-200/80 text-stone-700">
          {tag}
        </span>
      </div>

      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1A] leading-[1.15] mb-4">
        Physiotherapy &amp; Acupuncture in {name}
      </h1>

      <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
        {description}
      </p>
    </div>
  )
}
