import React, { useState, useRef, useEffect } from 'react'
import { MapPin, ChevronDown, Check } from 'lucide-react'
import { useBranchContext } from '../../context/BranchContext'

export default function BranchSwitcher({ mobile = false, onSelect }) {
  const { branches, currentBranch, selectedBranchSlug, switchBranch } = useBranchContext()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close on outside click
  useEffect(() => {
    if (mobile) return
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobile])

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleSelect = (slug) => {
    switchBranch(slug)
    setIsOpen(false)
    if (onSelect) onSelect(slug)
  }

  // ──────────────── Mobile Layout ────────────────
  if (mobile) {
    return (
      <div className="w-full space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#064C3B] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#064C3B]" />
            <span>Clinic Location</span>
          </span>
          <span className="text-[10px] text-stone-400 font-medium">Switch anytime</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {branches.map((b) => {
            const isSelected = b.slug === selectedBranchSlug
            return (
              <button
                key={b.slug}
                type="button"
                onClick={() => handleSelect(b.slug)}
                className={`py-2 px-2.5 rounded-xl text-xs font-semibold flex flex-col items-center justify-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#064C3B] text-white shadow-xs'
                    : 'bg-[#F4F2EC] hover:bg-[#EAE5DC] text-stone-700 border border-[#DCDDD5]'
                }`}
              >
                <div className="flex items-center gap-1">
                  <span>{b.name}</span>
                  {isSelected && <Check className="w-3 h-3 text-white shrink-0" />}
                </div>
                <span
                  className={`text-[9px] mt-0.5 ${
                    isSelected ? 'text-white/80' : 'text-stone-400'
                  }`}
                >
                  {b.slug === 'mira-road' ? 'Flagship' : b.slug === 'vasai' ? 'Palghar' : 'Gujarat'}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  // ──────────────── Desktop Layout ────────────────
  return (
    <div ref={dropdownRef} className="relative py-2">
      {/* Switcher Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 cursor-pointer ${
          isOpen
            ? 'bg-[#064C3B] text-white border border-[#064C3B] shadow-xs'
            : 'bg-[#F4F2EC] text-stone-700 hover:text-[#064C3B] hover:bg-[#EAE5DC] border border-[#DCDDD5]'
        }`}
        aria-expanded={isOpen}
        aria-label={`Current location: ${currentBranch?.name || 'Not selected'}. Click to switch clinic.`}
        title="Switch clinic location"
      >
        <MapPin
          className={`w-3.5 h-3.5 transition-colors ${
            isOpen ? 'text-white' : 'text-[#064C3B]'
          }`}
        />
        <span className="whitespace-nowrap">{currentBranch?.name || 'Select Clinic'}</span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen
              ? 'rotate-180 text-white'
              : 'text-stone-400 group-hover:text-[#064C3B]'
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-2xl shadow-xl shadow-stone-900/10 p-3 overflow-hidden">
            {/* Header */}
            <div className="px-2 pb-2 mb-1.5 border-b border-stone-200/60 flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#064C3B]">
                Select Clinic Location
              </span>
              <span className="text-[10px] text-stone-400">3 Centres</span>
            </div>

            {/* Branch Choices */}
            <div className="space-y-1">
              {branches.map((b) => {
                const isSelected = b.slug === selectedBranchSlug
                return (
                  <button
                    key={b.slug}
                    type="button"
                    onClick={() => handleSelect(b.slug)}
                    className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-[#064C3B]/10 text-[#064C3B] font-bold'
                        : 'hover:bg-[#F4F2EC] text-stone-800'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold leading-none">
                          {b.name}
                        </span>
                      </div>
                      <p className="text-[10.5px] text-stone-500 mt-1 line-clamp-1">
                        {b.city}
                      </p>
                    </div>

                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-[#064C3B] text-white flex items-center justify-center shrink-0 ml-2">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
