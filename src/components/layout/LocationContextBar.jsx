import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ChevronDown, Check } from 'lucide-react'
import { useBranchContext } from '../../context/BranchContext'

export default function LocationContextBar() {
  const { branches, currentBranch, selectedBranchSlug, switchBranch } = useBranchContext()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
  }

  const displayName = currentBranch ? `${currentBranch.name} Clinic` : null

  return (
    <div className="w-full bg-[#F4F2EC] border-b border-[#DCDDD5]/80">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 sm:h-11">

          {/* Left: Location Indicator (clickable to open dropdown) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 min-w-0 text-left cursor-pointer group py-1"
            aria-label="Current clinic location. Click to change."
          >
            <MapPin className="w-3.5 h-3.5 text-[#064C3B] shrink-0 group-hover:scale-110 transition-transform" />
            {currentBranch ? (
              <span className="text-xs sm:text-[13px] font-semibold text-[#064C3B] truncate group-hover:underline">
                <span className="hidden sm:inline">{currentBranch.name} Clinic</span>
                <span className="sm:hidden">{currentBranch.name}</span>
              </span>
            ) : (
              <span className="text-xs sm:text-[13px] font-semibold text-[#064C3B] group-hover:underline">
                Select Clinic
              </span>
            )}
          </button>

          {/* Right: Change Clinic Dropdown Trigger */}
          <div ref={dropdownRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                isOpen
                  ? 'bg-[#064C3B] text-white'
                  : 'text-stone-700 hover:text-[#064C3B] hover:bg-[#EAE5DC]'
              }`}
              aria-expanded={isOpen}
              aria-label="Change clinic location"
            >
              <span className="hidden sm:inline">
                {currentBranch ? 'Change Clinic' : 'Choose Clinic'}
              </span>
              <span className="sm:hidden">
                {currentBranch ? 'Change' : 'Choose'}
              </span>
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : 'text-stone-400'
                }`}
              />
            </button>

            {/* Dropdown */}
            {isOpen && (
              <div className="absolute right-0 top-full mt-1.5 w-60 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-xl shadow-xl shadow-stone-900/10 p-2 overflow-hidden">
                  {/* Header */}
                  <div className="px-2 pb-1.5 mb-1 border-b border-stone-200/60 flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#064C3B]">
                      Select Clinic
                    </span>
                    <span className="text-[10px] text-stone-400">3 Centres</span>
                  </div>

                  {/* Branch Choices */}
                  <div className="space-y-0.5">
                    {branches.map((b) => {
                      const isSelected = b.slug === selectedBranchSlug
                      return (
                        <button
                          key={b.slug}
                          type="button"
                          onClick={() => handleSelect(b.slug)}
                          className={`w-full text-left p-2.5 rounded-lg transition-all flex items-center justify-between group cursor-pointer ${
                            isSelected
                              ? 'bg-[#064C3B]/10 text-[#064C3B]'
                              : 'hover:bg-[#F4F2EC] text-stone-800'
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className={`text-xs leading-none ${isSelected ? 'font-bold' : 'font-semibold'}`}>
                                {b.name}
                              </span>
                            </div>
                            <p className="text-[10.5px] text-stone-500 mt-0.5 line-clamp-1">
                              {b.city}
                            </p>
                          </div>

                          {isSelected && (
                            <div className="w-4.5 h-4.5 rounded-full bg-[#064C3B] text-white flex items-center justify-center shrink-0 ml-2">
                              <Check className="w-3 h-3 stroke-[2.5]" />
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>

                  {/* Link to All Locations Page */}
                  <div className="pt-1.5 mt-1 border-t border-stone-200/60">
                    <Link
                      to="/locations"
                      onClick={() => setIsOpen(false)}
                      className="w-full text-center py-1 text-[11px] font-semibold text-[#064C3B] hover:text-[#073D32] block"
                    >
                      View All Clinic Details →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
