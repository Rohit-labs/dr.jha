import React from 'react'
import { Compass } from 'lucide-react'

export default function LocationSchematic({ activeSlug = '', className = '' }) {
  const nodes = [
    {
      slug: 'surat',
      name: 'Surat',
      region: 'Vesu Main Road • Gujarat',
      tag: 'Regional Centre',
      color: '#064C3B'
    },
    {
      slug: 'vasai',
      name: 'Vasai',
      region: 'Sai Arcade • Palghar (MMR)',
      tag: 'Clinical Centre',
      color: '#064C3B'
    },
    {
      slug: 'mira-road',
      name: 'Mira Road',
      region: 'Green Heritage • Thane (MMR)',
      tag: 'Flagship Centre',
      color: '#064C3B',
      isFlagship: true
    }
  ]

  return (
    <div className={`bg-[#FCFBF7]/95 border border-[#DCDDD5] rounded-2xl p-4 sm:p-5 shadow-xs max-w-sm w-full ${className}`}>
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
        <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-[#064C3B] flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-[#064C3B]" />
          Regional Presence
        </span>
        <span className="text-[10px] text-stone-400 font-medium">Western Corridor</span>
      </div>

      {/* Schematic Nodes */}
      <div className="space-y-3.5 relative pl-2">
        {/* Subtle connecting vertical line */}
        <div className="absolute left-[13px] top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-[#064C3B] via-[#064C3B]/80 to-[#064C3B]"></div>

        {nodes.map((node) => {
          const isSelected = activeSlug === node.slug
          return (
            <div key={node.slug} className="flex items-center justify-between relative pl-6">
              <div
                className={`absolute left-0 w-3 h-3 rounded-full flex items-center justify-center transition-all ${
                  node.isFlagship
                    ? 'bg-[#064C3B] border-2 border-white shadow-xs'
                    : isSelected
                    ? 'bg-[#064C3B] border-2 border-white shadow-xs'
                    : 'bg-white border-2 border-[#064C3B]'
                }`}
              >
                <span
                  className={`w-1 h-1 rounded-full ${
                    node.isFlagship || isSelected ? 'bg-white' : 'bg-[#064C3B]'
                  }`}
                ></span>
              </div>

              <div>
                <span
                  className={`text-xs font-bold block ${
                    isSelected ? 'text-[#064C3B]' : 'text-stone-800'
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
                    ? 'text-[#064C3B] bg-[#064C3B]/10 font-bold'
                    : isSelected
                    ? 'text-white bg-[#064C3B]'
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
