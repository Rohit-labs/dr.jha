import React from 'react'
import { Compass } from 'lucide-react'

export default function LocationSchematic({ activeSlug = '', className = '' }) {
  const nodes = [
    {
      slug: 'surat',
      name: 'Surat',
      region: 'Vesu Main Road • Gujarat',
      tag: 'Regional Centre',
      color: '#3A5A40'
    },
    {
      slug: 'vasai',
      name: 'Vasai',
      region: 'Sai Arcade • Palghar (MMR)',
      tag: 'Clinical Centre',
      color: '#3A5A40'
    },
    {
      slug: 'mira-road',
      name: 'Mira Road',
      region: 'Green Heritage • Thane (MMR)',
      tag: 'Flagship Centre',
      color: '#B64D2E',
      isFlagship: true
    }
  ]

  return (
    <div className={`bg-white/90 border border-stone-200/80 rounded-2xl p-4 sm:p-5 shadow-xs max-w-sm w-full ${className}`}>
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
        <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-[#3A5A40] flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-[#3A5A40]" />
          Regional Presence
        </span>
        <span className="text-[10px] text-stone-400 font-medium">Western Corridor</span>
      </div>

      {/* Schematic Nodes */}
      <div className="space-y-3.5 relative pl-2">
        {/* Subtle connecting vertical line */}
        <div className="absolute left-[13px] top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-[#3A5A40] via-[#3A5A40] to-[#B64D2E]"></div>

        {nodes.map((node) => {
          const isSelected = activeSlug === node.slug
          return (
            <div key={node.slug} className="flex items-center justify-between relative pl-6">
              <div
                className={`absolute left-0 w-3 h-3 rounded-full flex items-center justify-center transition-all ${
                  node.isFlagship
                    ? 'bg-[#B64D2E] border-2 border-white shadow-xs'
                    : isSelected
                    ? 'bg-[#3A5A40] border-2 border-white shadow-xs'
                    : 'bg-white border-2 border-[#3A5A40]'
                }`}
              >
                <span
                  className={`w-1 h-1 rounded-full ${
                    node.isFlagship || isSelected ? 'bg-white' : 'bg-[#3A5A40]'
                  }`}
                ></span>
              </div>

              <div>
                <span
                  className={`text-xs font-bold block ${
                    isSelected ? 'text-[#B64D2E]' : 'text-stone-800'
                  }`}
                >
                  {node.name}
                </span>
                <span className="text-[10px] text-stone-400 block">
                  {node.region}
                </span>
              </div>

              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  node.isFlagship
                    ? 'text-[#B64D2E] bg-[#B64D2E]/10 font-bold'
                    : isSelected
                    ? 'text-white bg-[#3A5A40]'
                    : 'text-stone-500 bg-stone-100'
                }`}
              >
                {node.tag}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
