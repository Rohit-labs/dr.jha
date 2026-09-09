import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Phone, Search, ArrowRight, X } from 'lucide-react'
import { conditions } from '../../data/conditions'
import { treatments } from '../../data/treatments'
import { branches } from '../../data/branches'
import { resources } from '../../data/resources'

// Searchable database across all primary care domains
const heroSearchIndex = [
  ...conditions.map((c) => ({
    title: c.name,
    category: 'Condition',
    description: c.shortDescription || c.overview?.slice(0, 80) + '...',
    href: `/conditions/${c.slug}`,
  })),
  ...treatments.map((t) => ({
    title: t.name,
    category: 'Treatment',
    description: t.shortDescription || t.overview?.slice(0, 80) + '...',
    href: `/treatments/${t.slug}`,
  })),
  ...branches.map((b) => ({
    title: `${b.name} Clinic`,
    category: 'Branch',
    description: `${b.headline} • ${b.address}`,
    href: `/branches/${b.slug}`,
  })),
  ...resources.map((r) => ({
    title: r.title,
    category: 'Resource',
    description: r.summary || '',
    href: `/resources/${r.slug}`,
  })),
]

const popularTags = [
  { name: 'Back Pain', href: '/conditions/back-pain' },
  { name: 'Knee Pain', href: '/conditions/knee-pain' },
  { name: 'Neck Pain', href: '/conditions/neck-pain' },
  { name: 'Sciatica', href: '/conditions/sciatica' },
  { name: 'Sports Injury', href: '/conditions/sports-injuries' },
]

export default function HeroLeft() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const searchRef = useRef(null)

  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
  ]

  const filteredResults = searchQuery.trim()
    ? heroSearchIndex.filter((item) => {
        const q = searchQuery.toLowerCase()
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        )
      }).slice(0, 5)
    : []

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return

    if (filteredResults.length > 0) {
      navigate(filteredResults[0].href)
      setShowDropdown(false)
    } else {
      navigate('/conditions')
      setShowDropdown(false)
    }
  }

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="flex flex-col justify-center space-y-6 sm:space-y-7 max-w-xl">
      {/* Top Tag Pill */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE8E0] border border-stone-300/50 text-xs font-semibold text-stone-700 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[#243B2E]"></span>
          <span>Trusted Care</span>
          <span className="text-stone-400">•</span>
          <span>3 Locations</span>
          <span className="text-stone-400">•</span>
          <span>10+ Years</span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="space-y-1">
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-[72px] font-bold text-[#1A1A1A] tracking-tight leading-[1.06]">
          Move Better.
        </h1>
        <h2 className="font-serif italic text-5xl sm:text-6xl lg:text-[72px] font-bold text-[#A8482D] tracking-tight leading-[1.06]">
          Live Fuller.
        </h2>
      </div>

      {/* Subheading */}
      <p className="text-stone-600 text-base sm:text-[17px] leading-relaxed font-normal max-w-lg">
        Expert physiotherapy, rehabilitation and acupuncture care for a
        healthier, stronger and pain-free you.
      </p>

      {/* Desktop Hero Search Bar (hidden on mobile/tablet where dedicated below-navbar search bar operates) */}
      <div ref={searchRef} className="hidden lg:block relative w-full pt-1">
        <form
          onSubmit={handleSearchSubmit}
          className="w-full relative flex items-center bg-white rounded-full p-1.5 sm:p-2 pl-5 sm:pl-6 border border-stone-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-stone-300 focus-within:border-[#A8482D] focus-within:ring-4 focus-within:ring-[#A8482D]/10 transition-all duration-200"
        >
          <Search className="w-5 h-5 text-stone-400 shrink-0 mr-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setShowDropdown(true)
            }}
            onFocus={() => setShowDropdown(true)}
            placeholder="What condition or symptom are you experiencing?"
            className="w-full bg-transparent text-stone-800 placeholder:text-stone-400 text-sm sm:text-[15px] focus:outline-none font-normal"
            aria-label="Search conditions and treatments"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setShowDropdown(false)
              }}
              className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 mr-1.5 transition-colors cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            aria-label="Search care options"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#A8482D] hover:bg-[#933D25] text-white flex items-center justify-center shrink-0 transition-all duration-200 active:scale-95 shadow-md shadow-[#A8482D]/25 cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        {/* Live Search Results Dropdown */}
        {showDropdown && searchQuery.trim().length > 0 && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-[#FAF7F2] border border-[#E8E2D8] rounded-2xl shadow-xl shadow-stone-900/10 p-2 z-40 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {filteredResults.length > 0 ? (
              <div className="divide-y divide-stone-200/60 max-h-64 overflow-y-auto">
                {filteredResults.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.href}
                    onClick={() => {
                      setShowDropdown(false)
                      setSearchQuery('')
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F4EFEA] transition-colors group cursor-pointer"
                  >
                    <div className="pr-3">
                      <span className="text-xs sm:text-[13px] font-semibold text-stone-900 group-hover:text-[#A8482D] transition-colors block">
                        {item.title}
                      </span>
                      <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-stone-200/80 text-stone-700 shrink-0">
                      {item.category}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center">
                <p className="text-xs text-stone-600">
                  No direct care options found for "{searchQuery}".
                </p>
                <Link
                  to="/conditions"
                  onClick={() => setShowDropdown(false)}
                  className="text-xs text-[#A8482D] hover:underline font-semibold mt-1 inline-block"
                >
                  Explore all conditions we treat →
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Popular Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-2.5 text-xs">
          <span className="font-semibold text-stone-700 mr-1">Popular:</span>
          {popularTags.map((tag) => (
            <Link
              key={tag.name}
              to={tag.href}
              className="px-3 py-1.5 rounded-full border border-stone-300/70 bg-[#FAF7F2]/90 hover:bg-white text-stone-600 hover:text-stone-900 hover:border-[#A8482D]/40 active:scale-[0.98] transition-all cursor-pointer font-medium"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap items-center gap-3.5 pt-2">
        <a
          href="tel:+919820012345"
          className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-[15px] font-semibold text-white bg-[#A8482D] hover:bg-[#933D25] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#A8482D]/25 cursor-pointer"
        >
          <Phone className="w-4 h-4 text-white/90" />
          <span>Call Us for Appointment</span>
          <span className="text-white/80 font-normal">→</span>
        </a>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-[15px] font-semibold text-stone-800 bg-white/80 hover:bg-white border border-stone-300/80 active:scale-[0.98] transition-all duration-200 shadow-xs hover:shadow-sm cursor-pointer"
        >
          {/* Custom WhatsApp Icon */}
          <svg
            className="w-4 h-4 fill-[#25D366]"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span>WhatsApp Us</span>
        </a>
      </div>

      {/* Social Proof Avatar Bar */}
      <div className="flex items-center gap-3.5 pt-3">
        {/* Avatar Stack */}
        <div className="flex items-center -space-x-2.5">
          {avatars.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Patient ${i + 1}`}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-xs"
            />
          ))}
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <span className="text-xs sm:text-[13px] font-bold text-stone-900 leading-tight">
            Trusted by 5,000+ patients
          </span>
          <span className="text-[11px] sm:text-xs text-stone-500 font-medium leading-tight">
            Real people. Real recovery.
          </span>
        </div>
      </div>
    </div>
  )
}
