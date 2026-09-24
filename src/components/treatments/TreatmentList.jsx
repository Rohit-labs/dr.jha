import React, { useState, useMemo } from 'react'
import TreatmentCard from './TreatmentCard'
import { Search, Sparkles, Filter } from 'lucide-react'

export default function TreatmentList({ treatments }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = useMemo(() => {
    const cats = ['ALL']
    treatments.forEach((t) => {
      if (t.category && !cats.includes(t.category)) {
        cats.push(t.category)
      }
    })
    return cats
  }, [treatments])

  const filteredTreatments = useMemo(() => {
    return treatments.filter((t) => {
      const matchesCat = selectedCategory === 'ALL' || t.category === selectedCategory
      const matchesSearch =
        !searchQuery.trim() ||
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCat && matchesSearch
    })
  }, [treatments, selectedCategory, searchQuery])

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls */}
      <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-4 sm:p-6 shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder="Search treatments or symptoms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs sm:text-sm bg-white border border-stone-200 focus:outline-none focus:border-[#064C3B] focus:ring-1 focus:ring-[#064C3B] transition-all"
          />
        </div>

        {/* Count summary */}
        <div className="text-xs text-stone-500 font-medium">
          Showing <span className="font-bold text-[#064C3B]">{filteredTreatments.length}</span> of {treatments.length} clinical modalities
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#064C3B] text-white shadow-sm'
                  : 'bg-[#F4F2EC] text-stone-700 hover:bg-stone-200 border border-stone-200/60'
              }`}
            >
              {cat === 'ALL' ? 'All Modalities' : cat}
            </button>
          )
        })}
      </div>

      {/* Grid of Treatment Cards */}
      {filteredTreatments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTreatments.map((treatment) => (
            <TreatmentCard key={treatment.slug} treatment={treatment} />
          ))}
        </div>
      ) : (
        <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-12 text-center space-y-3">
          <p className="font-serif text-lg text-stone-700">No treatments matched your criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('ALL')
              setSearchQuery('')
            }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#064C3B] hover:bg-[#043328] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  )
}
