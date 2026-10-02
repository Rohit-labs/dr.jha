import React, { useMemo, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import TreatmentCard from './TreatmentCard'
import { Search, Sparkles, LayoutGrid } from 'lucide-react'
import { treatmentSections } from '../../data/treatmentSections'
import { useState } from 'react'

/**
 * TreatmentList
 *
 * Props
 * -----
 * treatments          — full list of treatment objects for the active branch
 * activeCategorySlug  — the current category slug from the URL (undefined = show all)
 */
export default function TreatmentList({ treatments, activeCategorySlug }) {
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')

  // Resolve active section from URL-driven prop
  const activeSection = treatmentSections.find((s) => s.id === activeCategorySlug) ?? null

  // ── Hash-based scroll-to (legacy deep-link support) ──────────────────────
  useEffect(() => {
    const hash = location.hash?.replace('#', '')
    if (!hash) return
    const target = treatments.find(
      (t) =>
        t.cardId === hash ||
        t.slug === hash ||
        t.name.toLowerCase().replace(/[^a-z0-9]/g, '-') === hash
    )
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target.cardId || target.slug)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 150)
    }
  }, [location.hash, treatments])

  // ── Filter ────────────────────────────────────────────────────────────────
  const filteredTreatments = useMemo(() => {
    return treatments.filter((t) => {
      const matchesCategory =
        !activeSection || activeSection.slugs.includes(t.slug)
      const q = searchQuery.trim().toLowerCase()
      const matchesSearch =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.shortDescription.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
      return matchesCategory && matchesSearch
    })
  }, [treatments, activeSection, searchQuery])

  // ── Category tab config ───────────────────────────────────────────────────
  const tabs = [
    { id: null, label: 'All Modalities', href: '/treatments' },
    ...treatmentSections.map((s) => ({
      id: s.id,
      label: s.label,
      href: `/treatments/${s.id}`
    }))
  ]

  return (
    <div className="space-y-8">
      {/* ── Search & Count bar ── */}
      <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-4 sm:p-6 shadow-xs flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:flex-1 min-w-0">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search treatments or symptoms..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs sm:text-sm bg-white border border-stone-200 focus:outline-none focus:border-[#064C3B] focus:ring-1 focus:ring-[#064C3B] transition-all"
          />
        </div>
        <div className="text-xs text-stone-500 font-medium shrink-0">
          Showing{' '}
          <span className="font-bold text-[#064C3B]">{filteredTreatments.length}</span>
          {' '}of {treatments.length} clinical modalities
        </div>
      </div>

      {/* ── URL-driven category tabs ── */}
      <nav aria-label="Treatment categories" className="flex flex-wrap items-center gap-2 pb-2">
        {tabs.map((tab) => {
          const isActive = (tab.id === null && !activeCategorySlug) || tab.id === activeCategorySlug
          return (
            <Link
              key={tab.href}
              to={tab.href}
              aria-current={isActive ? 'page' : undefined}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                isActive
                  ? 'bg-[#064C3B] text-white shadow-sm'
                  : 'bg-[#F4F2EC] text-stone-700 hover:bg-stone-200 border border-stone-200/60'
              }`}
            >
              {tab.id === null
                ? <LayoutGrid className="w-3 h-3" />
                : <Sparkles className="w-3 h-3" />}
              {tab.label}
            </Link>
          )
        })}
      </nav>

      {/* ── Treatment cards grid ── */}
      {filteredTreatments.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {filteredTreatments.map((treatment) => (
            <TreatmentCard key={treatment.cardId || treatment.slug} treatment={treatment} />
          ))}
        </div>
      ) : (
        <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-12 text-center space-y-4">
          <p className="font-serif text-lg text-stone-700">
            {searchQuery
              ? `No treatments matched "${searchQuery}".`
              : 'No treatments found in this category.'}
          </p>
          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#064C3B] hover:bg-[#043328] transition-colors"
          >
            View All Treatments
          </Link>
        </div>
      )}
    </div>
  )
}
