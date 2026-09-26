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
    href: `/${b.slug}`,
  })),
  ...resources.map((r) => ({
    title: r.title,
    category: 'Blog',
    description: r.summary || '',
    href: `/blogs/${r.slug}`,
  })),
]

const popularTags = [
  { name: 'Back Pain',        href: '/conditions/back-pain' },
  { name: 'Sciatica',         href: '/conditions/sciatica' },
  { name: 'Knee Pain',        href: '/conditions/knee-pain' },
  { name: 'Neck Pain',        href: '/conditions/neck-pain' },
  { name: 'Frozen Shoulder',  href: '/conditions/frozen-shoulder' },
  { name: "Bell's Palsy",     href: '/conditions/bells-palsy' },
  { name: 'Vertigo',          href: '/conditions/vertigo' },
  { name: 'Sports Injury',    href: '/conditions/sports-injuries' },
  { name: "Parkinson's",      href: '/conditions/parkinsons' },
  { name: 'Plantar Fasciitis',href: '/conditions/plantar-fasciitis' },
]

export default function HeroLeft({ branch }) {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const searchRef = useRef(null)

  const branchHeroHeadings = {
    'mira-road': {
      line1: 'Move Without Limits.',
      line2: 'Live With Confidence.',
    },
    'surat': {
      line1: 'Restore Your Movement.',
      line2: 'Reclaim Your Life.',
    },
    'vasai': {
      line1: 'Heal With Purpose.',
      line2: 'Move With Freedom.',
    },
  }

  const heroHeading =
    branch?.heroTitle ||
    (branch?.slug && branchHeroHeadings[branch.slug.toLowerCase()]) || {
      line1: 'Move Better.',
      line2: 'Live Fuller.',
    }

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
    <div className="flex flex-col justify-center space-y-6 sm:space-y-7 max-w-xl lg:max-w-2xl">
      {/* Top Tag Pill */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFBF7] border border-[#DCDDD5] text-xs font-semibold text-[#26332F] tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[#064C3B]"></span>
          <span>Trusted Care</span>
          <span className="text-stone-400">•</span>
          <span>{branch ? branch.name : '3 Locations'}</span>
          <span className="text-stone-400">•</span>
          <span>10+ Years</span>
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="space-y-1 sm:space-y-1.5">
        <span className="block font-serif text-[34px] min-[400px]:text-[38px] sm:text-[44px] md:text-5xl lg:text-[52px] xl:text-[58px] font-bold text-[#26332F] tracking-tight leading-[1.12] whitespace-normal sm:whitespace-nowrap">
          {heroHeading.line1}
        </span>
        <span className="block font-serif italic text-[34px] min-[400px]:text-[38px] sm:text-[44px] md:text-5xl lg:text-[52px] xl:text-[58px] font-bold text-[#064C3B] tracking-tight leading-[1.12] whitespace-normal sm:whitespace-nowrap">
          {heroHeading.line2}
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-stone-600 text-base sm:text-[17px] leading-relaxed font-normal max-w-lg">
        {branch
          ? `Expert physiotherapy, rehabilitation and acupuncture care in ${branch.name}.`
          : 'Expert physiotherapy, rehabilitation and acupuncture care for a healthier, stronger and pain-free you.'}
      </p>

      {/* Hero Search Bar */}
      <div ref={searchRef} className="relative w-full pt-1">
        <form
          onSubmit={handleSearchSubmit}
          className="w-full relative flex items-center bg-white rounded-full p-1.5 sm:p-2 pl-5 sm:pl-6 border border-stone-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-stone-300 focus-within:border-[#064C3B] focus-within:ring-4 focus-within:ring-[#064C3B]/10 transition-all duration-200"
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
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#064C3B] hover:bg-[#073D32] text-white flex items-center justify-center shrink-0 transition-all duration-200 active:scale-95 shadow-md shadow-[#064C3B]/25 cursor-pointer"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        {/* Live Search Results Dropdown */}
        {showDropdown && searchQuery.trim().length > 0 && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-[#FCFBF7] border border-[#DCDDD5] rounded-2xl shadow-xl shadow-stone-900/10 p-2 z-40 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
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
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F4F2EC] transition-colors group cursor-pointer"
                  >
                    <div className="pr-3">
                      <span className="text-xs sm:text-[13px] font-semibold text-stone-900 group-hover:text-[#064C3B] transition-colors block">
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
                  className="text-xs text-[#064C3B] hover:underline font-semibold mt-1 inline-block"
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
              className="px-3 py-1.5 rounded-full border border-stone-300/70 bg-[#FCFBF7]/90 hover:bg-white text-stone-600 hover:text-stone-900 hover:border-[#064C3B]/40 hover:text-[#064C3B] active:scale-[0.98] transition-all cursor-pointer font-medium"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href={`tel:${branch?.phone ? branch.phone.replace(/[^0-9+]/g, '') : '+919146036559'}`}
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#064C3B]/20 cursor-pointer"
        >
          <Phone className="w-4 h-4 text-white/90" />
          <span>{branch?.secondaryPhone ? 'Call Dr. Pranab' : 'Call Us for Appointment'}</span>
          <span className="text-white/80 font-normal">→</span>
        </a>

        {branch?.secondaryPhone && (
          <a
            href={`tel:${branch.secondaryPhone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#064C3B] bg-white/90 hover:bg-white border border-[#064C3B]/30 hover:border-[#064C3B] active:scale-[0.98] transition-all duration-200 shadow-xs hover:shadow-sm cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#064C3B]" />
            <span>Call Hr. Anupam</span>
          </a>
        )}

        <a
          href={branch?.whatsapp ? `https://wa.me/${branch.whatsapp.replace(/[^0-9]/g, '')}` : 'https://wa.me/'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-stone-800 bg-white/80 hover:bg-white border border-stone-300/80 active:scale-[0.98] transition-all duration-200 shadow-xs hover:shadow-sm cursor-pointer"
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
    </div>
  )
}
