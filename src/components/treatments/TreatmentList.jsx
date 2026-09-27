import React, { useState, useMemo, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TreatmentCard from './TreatmentCard'
import { Search, Sparkles, Filter } from 'lucide-react'
import { treatmentSections } from '../../data/treatmentSections'

export default function TreatmentList({ treatments }) {
  const location = useLocation()
  const [selectedSection, setSelectedSection] = useState(() => {
    const section = new URLSearchParams(location.search).get('section')
    return treatmentSections.some((item) => item.id === section) ? section : 'ALL'
  })
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const section = new URLSearchParams(location.search).get('section')
    setSelectedSection(treatmentSections.some((item) => item.id === section) ? section : 'ALL')
  }, [location.search])

  // Handle hash navigation if user lands on /treatments#specific-slug
  useEffect(() => {
    const hash = location.hash?.replace('#', '')
    if (hash) {
      const targetTreatment = treatments.find(
        (t) => t.cardId === hash || t.slug === hash || t.name.toLowerCase().replace(/[^a-z0-9]/g, '-') === hash
      )
      if (targetTreatment) {
        // If current category filters it out, reset to ALL
        setSelectedSection('ALL')
        setSearchQuery('')
        setTimeout(() => {
          const el = document.getElementById(targetTreatment.cardId || targetTreatment.slug)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        }, 150)
      }
    }
  }, [location.hash, treatments])

  const filteredTreatments = useMemo(() => {
    const activeSection = treatmentSections.find((section) => section.id === selectedSection)

    return treatments.filter((t) => {
      const matchesSection = !activeSection || activeSection.slugs.includes(t.slug)
      const matchesSearch =
        !searchQuery.trim() ||
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.category.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesSection && matchesSearch
    })
  }, [treatments, selectedSection, searchQuery])

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls */}
      <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-4 sm:p-6 shadow-xs flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full md:flex-1 min-w-0">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search treatments or symptoms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs sm:text-sm bg-white border border-stone-200 focus:outline-none focus:border-[#064C3B] focus:ring-1 focus:ring-[#064C3B] transition-all"
            />
          </div>

        </div>

        {/* Count summary */}
        <div className="text-xs text-stone-500 font-medium">
          Showing <span className="font-bold text-[#064C3B]">{filteredTreatments.length}</span> of {treatments.length} clinical modalities
        </div>
      </div>

      {/* Primary Treatment Sections */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {['ALL', ...treatmentSections.map((section) => section.id)].map((sectionId) => {
          const isActive = selectedSection === sectionId
          const label = sectionId === 'ALL'
            ? 'All Modalities'
            : treatmentSections.find((section) => section.id === sectionId).label

          return (
            <button
              key={sectionId}
              onClick={() => setSelectedSection(sectionId)}
              className={`inline-flex whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#064C3B] text-white shadow-sm'
                  : 'bg-[#F4F2EC] text-stone-700 hover:bg-stone-200 border border-stone-200/60'
              }`}
            >
              {label}
            </button>
          )
        })}
      </div>

      {/* Grid of Treatment Cards */}
      {filteredTreatments.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {filteredTreatments.map((treatment) => (
            <TreatmentCard key={treatment.cardId || treatment.slug} treatment={treatment} />
          ))}
        </div>
      ) : (
        <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-12 text-center space-y-3">
          <p className="font-serif text-lg text-stone-700">No treatments matched your criteria.</p>
          <button
            onClick={() => {
              setSelectedSection('ALL')
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
