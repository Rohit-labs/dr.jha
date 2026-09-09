import { useState, useRef, useEffect } from 'react'
import {
  Search,
  ArrowRight,
  X,
  BookOpen,
  Activity,
  FileText,
  Compass,
  Sparkles,
  ChevronRight
} from 'lucide-react'

/* ──────────────── Search Database (CMS & Headless Ready) ──────────────── */

const searchIndex = [
  // Conditions
  {
    type: 'condition',
    category: 'CONDITIONS',
    title: 'Back Pain',
    slug: 'back-pain',
    description: 'Postural strain, lumbar disc pain and acute muscular spasms.',
    href: '/conditions/back-pain',
  },
  {
    type: 'condition',
    category: 'CONDITIONS',
    title: 'Lower Back Pain',
    slug: 'lower-back-pain',
    description: 'Mechanical and persistent lower spinal discomfort.',
    href: '/conditions/lower-back-pain',
  },
  {
    type: 'condition',
    category: 'CONDITIONS',
    title: 'Sciatica',
    slug: 'sciatica',
    description: 'Sciatic nerve compression causing radiation down the leg.',
    href: '/conditions/sciatica',
  },
  {
    type: 'condition',
    category: 'CONDITIONS',
    title: 'Knee Pain',
    slug: 'knee-pain',
    description: 'Patellofemoral pain, ligament strains and osteoarthritis.',
    href: '/conditions/knee-pain',
  },
  {
    type: 'condition',
    category: 'CONDITIONS',
    title: 'Neck Pain & Cervical Tension',
    slug: 'neck-pain',
    description: 'Stiffness, desk-posture strain and cervical facet joint irritation.',
    href: '/conditions/neck-pain',
  },
  {
    type: 'condition',
    category: 'CONDITIONS',
    title: 'Shoulder Pain & Frozen Shoulder',
    slug: 'shoulder-pain',
    description: 'Rotator cuff impingement, bursitis and adhesive capsulitis.',
    href: '/conditions/shoulder-pain',
  },
  {
    type: 'condition',
    category: 'CONDITIONS',
    title: 'Vertigo & Balance Disorders',
    slug: 'vertigo',
    description: 'Benign paroxysmal positional vertigo (BPPV) & vestibular rehab.',
    href: '/conditions/vertigo',
  },
  {
    type: 'condition',
    category: 'CONDITIONS',
    title: 'Sports Injuries',
    slug: 'sports-injuries',
    description: 'Hamstring strains, ankle sprains and return-to-play training.',
    href: '/conditions/sports-injuries',
  },

  // Treatments
  {
    type: 'treatment',
    category: 'TREATMENTS',
    title: 'Orthopaedic Physiotherapy',
    slug: 'orthopaedic-physiotherapy',
    description: 'Structured musculoskeletal rehabilitation for joint and spine health.',
    href: '/treatments/orthopaedic-physiotherapy',
  },
  {
    type: 'treatment',
    category: 'TREATMENTS',
    title: 'Medical Acupuncture & Dry Needling',
    slug: 'medical-acupuncture',
    description: 'Targeted myofascial release and neural stimulation for pain relief.',
    href: '/treatments/medical-acupuncture',
  },
  {
    type: 'treatment',
    category: 'TREATMENTS',
    title: 'Manual Therapy & Joint Mobilization',
    slug: 'manual-therapy',
    description: 'Hands-on clinical techniques to restore joint glide and mobility.',
    href: '/treatments/manual-therapy',
  },

  // Resources / Guides
  {
    type: 'resource',
    category: 'RESOURCES',
    title: 'Understanding Back Pain Guide',
    slug: 'understanding-back-pain',
    description: 'A clinician-written guide on causes, red flags and recovery paths.',
    href: '/resources/understanding-back-pain',
  },
  {
    type: 'resource',
    category: 'RESOURCES',
    title: 'Exercises & Recovery Tips for the Spine',
    slug: 'spine-recovery-exercises',
    description: 'Gentle core and spinal stabilization movements for home care.',
    href: '/resources/spine-recovery-exercises',
  },

  // Case Studies
  {
    type: 'case-study',
    category: 'CASE STUDIES',
    title: 'Back Pain Recovery Story',
    slug: 'back-pain-recovery-story',
    description: 'A recreational athlete’s path back to comfortable daily movement.',
    href: '#case-back-pain',
  },
]

const popularTopics = [
  'Back Pain',
  'Knee Pain',
  'Neck Pain',
  'Sciatica',
  'Shoulder Pain',
  'Vertigo',
  'Sports Injuries',
]

export default function ConditionDiscovery() {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const searchContainerRef = useRef(null)

  // Filter search results based on input
  const filteredResults = query.trim()
    ? searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : []

  // Group filtered results by category
  const groupedResults = filteredResults.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = []
    acc[item.category].push(item)
    return acc
  }, {})

  // Close search suggestions on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsFocused(false)
      }
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsFocused(false)
    }

    document.addEventListener('mousedown', handleOutsideClick)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <section className="w-full bg-[#F7F3EC] py-20 sm:py-24 lg:py-28 font-sans antialiased text-[#1C1C1A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════════ 1. SECTION HEADING ═══════════ */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.2em] text-[#4A6453] uppercase font-semibold mb-3">
            <span className="w-8 h-[1px] bg-[#4A6453]/40"></span>
            YOUR HEALTH, BETTER UNDERSTOOD
            <span className="w-8 h-[1px] bg-[#4A6453]/40"></span>
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#1C1C1A] leading-[1.14]">
            Know what's happening. <br />
            <span className="italic font-normal text-[#B64D2E]">Know what to do next.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto mt-4 leading-relaxed font-normal">
            Clear, practical information about pain, injuries, rehabilitation and physiotherapy — helping you better understand your condition and make informed decisions about your care.
          </p>
        </div>

        {/* ═══════════ 2. MAIN SEARCH EXPERIENCE ═══════════ */}
        <div ref={searchContainerRef} className="max-w-2xl lg:max-w-3xl mx-auto mb-12 sm:mb-14 relative z-30">
          <div
            className={`w-full bg-white rounded-full p-2 pl-5 sm:pl-6 border transition-all duration-200 shadow-md shadow-stone-900/5 flex items-center justify-between gap-3 ${
              isFocused
                ? 'border-[#B64D2E] ring-4 ring-[#B64D2E]/10'
                : 'border-stone-200/90 hover:border-stone-300'
            }`}
          >
            <div className="flex items-center gap-3 flex-1">
              <Search className="w-5 h-5 text-stone-400 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setIsFocused(true)
                }}
                onFocus={() => setIsFocused(true)}
                placeholder="Search a condition, symptom or problem..."
                aria-label="Search a condition, symptom or problem"
                className="w-full bg-transparent text-sm sm:text-base text-stone-800 placeholder:text-stone-400 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-1.5 shrink-0 pr-1">
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('')
                  }}
                  className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <a
                href="#conditions"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#123F32] hover:bg-[#1A5242] text-white flex items-center justify-center transition-transform active:scale-95 shadow-sm shrink-0"
                aria-label="Submit search"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ──────────────── Search Dropdown / Suggestion Area ──────────────── */}
          {isFocused && (
            <div className="absolute left-0 right-0 top-full mt-2.5 bg-white border border-stone-200/90 rounded-3xl shadow-2xl shadow-stone-900/10 p-5 sm:p-6 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 max-h-[420px] overflow-y-auto">
              {query.trim() === '' ? (
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
                    <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-stone-400">
                      Suggested Starting Points
                    </span>
                    <span className="text-[11px] text-stone-400 font-medium">
                      Type to filter directory
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {searchIndex.slice(0, 6).map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={() => setIsFocused(false)}
                        className="p-3 rounded-2xl hover:bg-[#FAF8F5] border border-transparent hover:border-stone-200/80 transition-all flex items-start justify-between group"
                      >
                        <div>
                          <span className="text-xs font-bold text-stone-800 group-hover:text-[#B64D2E] transition-colors block">
                            {item.title}
                          </span>
                          <span className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                            {item.description}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform shrink-0 mt-0.5" />
                      </a>
                    ))}
                  </div>
                </div>
              ) : Object.keys(groupedResults).length > 0 ? (
                <div className="space-y-4">
                  {Object.entries(groupedResults).map(([category, items]) => (
                    <div key={category} className="space-y-1.5">
                      <span className="text-[10.5px] font-bold tracking-[0.16em] uppercase text-[#3A5A40] block px-2">
                        {category}
                      </span>
                      <div className="space-y-1">
                        {items.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            onClick={() => setIsFocused(false)}
                            className="p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors flex items-center justify-between group"
                          >
                            <div>
                              <span className="text-xs sm:text-sm font-semibold text-stone-900 group-hover:text-[#B64D2E] transition-colors">
                                {item.title}
                              </span>
                              <p className="text-[11px] text-stone-500 line-clamp-1">
                                {item.description}
                              </p>
                            </div>
                            <span className="text-xs text-[#B64D2E] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                              View →
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-6 text-center">
                  <p className="text-sm font-medium text-stone-700">
                    No exact matches found for "{query}"
                  </p>
                  <p className="text-xs text-stone-500 mt-1">
                    Try searching for common terms like "back", "sciatica", "knee", or "acupuncture".
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ═══════════ Popular Topics Pill Links ═══════════ */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 px-2">
            <span className="text-xs font-semibold text-stone-500 mr-1 shrink-0">
              Popular Topics:
            </span>
            {popularTopics.map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => {
                  setQuery(topic)
                  setIsFocused(true)
                }}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium border border-stone-300/80 bg-white/70 hover:bg-white text-stone-700 hover:text-[#123F32] hover:border-[#123F32] transition-all duration-200 cursor-pointer shadow-2xs"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* ═══════════ 3. KNOWLEDGE CONTENT AREA (ASYMMETRIC COMPOSITION) ═══════════ */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

            {/* ──────── LEFT: One Large Featured Condition/Guide (Approx 58% width) ──────── */}
            <article className="lg:col-span-7 bg-[#FAF8F5] border border-[#E8E2D8] rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] group">
              <div>
                {/* Large Featured Image */}
                <div className="w-full h-60 sm:h-72 lg:h-80 rounded-2xl sm:rounded-3xl overflow-hidden mb-6 bg-stone-100 relative">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&auto=format&fit=crop&q=80"
                    alt="Physical examination and posture evaluation for back pain relief"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.16em] uppercase bg-white/95 text-[#123F32] border border-stone-200/70 shadow-xs backdrop-blur-xs">
                      Featured Guide
                    </span>
                  </div>
                </div>

                {/* Category Label */}
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#B64D2E] block mb-2">
                  Condition Guide
                </span>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1C1C1A] leading-tight mb-3">
                  Understanding Back Pain
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal max-w-xl">
                  Learn about common causes, symptoms, assessment and how physiotherapy may support recovery. Discover when conservative care and structured rehabilitation help manage spinal discomfort.
                </p>
              </div>

              {/* CTA */}
              <div className="pt-6 mt-4 border-t border-stone-200/70">
                <a
                  href="/conditions/back-pain"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#123F32] hover:text-[#B64D2E] transition-colors group/link w-fit"
                >
                  <span>Explore Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>

            {/* ──────── RIGHT: Two Smaller Resource Items Stacked (Approx 42% width) ──────── */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">

              {/* Secondary Resource 1: Understanding Sciatica */}
              <article className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between flex-1 shadow-[0_4px_24px_rgba(0,0,0,0.02)] group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10.5px] font-bold tracking-[0.16em] uppercase text-[#B64D2E]">
                      Condition Guide
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600">
                      <BookOpen className="w-3.5 h-3.5 stroke-[1.8]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1C1A] leading-tight mb-2">
                    Understanding Sciatica
                  </h3>

                  <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                    A practical introduction to symptoms, causes and physiotherapy-led management for nerve irritation radiating through the lumbar and leg pathways.
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-stone-200/70">
                  <a
                    href="/conditions/sciatica"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#123F32] hover:text-[#B64D2E] transition-colors group/link"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>

              {/* Secondary Resource 2: When should you see a physio? */}
              <article className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between flex-1 shadow-[0_4px_24px_rgba(0,0,0,0.02)] group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10.5px] font-bold tracking-[0.16em] uppercase text-[#3A5A40]">
                      Patient Education
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-stone-100 flex items-center justify-center text-stone-600">
                      <FileText className="w-3.5 h-3.5 stroke-[1.8]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1C1A] leading-tight mb-2">
                    When should you see a physiotherapist?
                  </h3>

                  <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                    Learn when persistent pain, reduced movement or difficulty with daily activities may warrant professional assessment rather than waiting.
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-stone-200/70">
                  <a
                    href="/resources/when-to-see-physio"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#123F32] hover:text-[#B64D2E] transition-colors group/link"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>

            </div>

          </div>
        </div>

        {/* ═══════════ 4. CONVERSION FUNNEL BOTTOM STRIP ═══════════ */}
        <div className="max-w-4xl mx-auto mt-14 sm:mt-16 pt-8 border-t border-stone-300/60 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#123F32] shrink-0 border border-stone-200 shadow-xs">
              <Compass className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg font-bold text-[#1C1C1A] leading-tight">
                Not sure where to start?
              </h4>
              <p className="text-xs text-stone-500 mt-0.5">
                Tell us what you're experiencing and find the right place to begin.
              </p>
            </div>
          </div>

          <a
            href="#conditions"
            className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#123F32] hover:bg-[#1A5242] active:scale-[0.98] transition-all shadow-sm shrink-0"
          >
            <span>Find My Care</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
