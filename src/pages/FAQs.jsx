import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import { generalFaqs, faqCategories, getFaqStructuredData } from '../data/faqs'
import {
  HelpCircle,
  Search,
  ChevronDown,
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  MapPin,
  Stethoscope,
  Activity
} from 'lucide-react'

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [openFaqId, setOpenFaqId] = useState(1) // Open first FAQ by default

  // Filter FAQs based on category and search query
  const filteredFaqs = useMemo(() => {
    return generalFaqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === 'all' || faq.category === selectedCategory

      const matchesSearch =
        searchQuery.trim() === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id))
  }

  const structuredData = useMemo(() => {
    return getFaqStructuredData(generalFaqs)
  }, [])

  return (
    <PageContainer>
      <SEO
        title="Frequently Asked Questions (FAQs) | Dr. Jha Physiotherapy & Acupuncture"
        description="Find answers to common questions about physiotherapy, medical acupuncture, session duration, stroke rehab, laser therapy, shockwave therapy, clinic locations, and appointment bookings."
        canonicalUrl="https://drjhaphysio.in/faqs"
        structuredData={structuredData}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

        {/* ═══════════ 1. HERO HEADER & SEARCH ═══════════ */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064C3B]/10 text-[#064C3B] text-xs font-bold tracking-wider uppercase mb-4 border border-[#064C3B]/15">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PATIENT HELP &amp; GUIDANCE</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-[1.15] mb-4">
            Frequently Asked <span className="italic font-normal text-[#064C3B]">Questions.</span>
          </h1>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Clear, clinical answers about our physiotherapy protocols, medical acupuncture safety, advanced modalities, and appointment procedures across our centres.
          </p>

          {/* Search Input Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., acupuncture pain, session time, referral)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-full bg-[#FCFBF7] border border-[#DCDDD5] text-stone-800 placeholder-stone-400 text-sm focus:outline-hidden focus:border-[#064C3B] focus:ring-2 focus:ring-[#064C3B]/15 shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-400 hover:text-stone-700 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* ═══════════ 2. CATEGORY PILL SELECTOR ═══════════ */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-10 sm:mb-12">
          {faqCategories.map((cat) => {
            const isActive = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#064C3B] text-white shadow-xs'
                    : 'bg-[#FCFBF7] text-stone-600 hover:text-[#064C3B] hover:bg-[#F4F2EC] border border-[#DCDDD5]'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* ═══════════ 3. ACCORDION FAQ LIST ═══════════ */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-3.5">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id
                return (
                  <article
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-[#FCFBF7] border-[#064C3B]/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ring-1 ring-[#064C3B]/10'
                        : 'bg-[#FCFBF7] border-[#DCDDD5] hover:border-[#064C3B]/30'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      className="w-full text-left px-5 sm:px-7 py-4 sm:py-5 flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-serif text-base sm:text-lg font-bold text-stone-900 group-hover:text-[#064C3B] leading-snug">
                        {faq.id}. {faq.question}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 ${
                          isOpen
                            ? 'bg-[#064C3B] text-white rotate-180'
                            : 'bg-[#F4F2EC] text-stone-500'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal border-t border-stone-100">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-8">
              <HelpCircle className="w-10 h-10 text-stone-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-bold text-stone-800 mb-1">
                No matching questions found
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 mb-4">
                Try searching for a different keyword or browse all questions.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                className="px-5 py-2 rounded-full text-xs font-semibold bg-[#064C3B] text-white hover:bg-[#073D32] transition-colors cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* ═══════════ 4. STILL HAVE QUESTIONS CTA BOX ═══════════ */}
        <div className="bg-[#073D32] text-white rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#E5A500] uppercase block">
                DIRECT CLINICAL ASSISTANCE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                Have a specific question about your condition?
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal max-w-lg">
                Our clinical lead Dr. Pranab Jha and our senior doctors are available for direct consultations and clinical guidance across Mira Road, Vasai, and Surat.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-3">
              <a
                href="tel:+919146036559"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#043328] border border-white/20 shadow-md transition-all text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 91460 36559</span>
              </a>

              <a
                href="https://wa.me/919146036559"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#064C3B] bg-[#FCFBF7] hover:bg-white shadow-md transition-all text-center"
              >
                <MessageSquare className="w-4 h-4 text-[#064C3B]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

          </div>
        </div>

        {/* ═══════════ 5. QUICK EXPLORATION LINKS ═══════════ */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Link
            to="/conditions"
            className="p-5 rounded-2xl bg-[#FCFBF7] border border-[#DCDDD5] hover:border-[#064C3B] hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <Activity className="w-6 h-6 text-[#064C3B] mb-2" />
              <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-[#064C3B] transition-colors mb-1">
                Conditions We Treat
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Explore dedicated protocols for spine, nerve, stroke, and joint pain.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1 text-xs font-semibold text-[#064C3B]">
              <span>Browse Conditions</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/treatments"
            className="p-5 rounded-2xl bg-[#FCFBF7] border border-[#DCDDD5] hover:border-[#064C3B] hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <Stethoscope className="w-6 h-6 text-[#064C3B] mb-2" />
              <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-[#064C3B] transition-colors mb-1">
                Therapies &amp; Modalities
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Learn about physical therapy, sterile acupuncture, and laser therapy.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1 text-xs font-semibold text-[#064C3B]">
              <span>View Treatments</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/locations"
            className="p-5 rounded-2xl bg-[#FCFBF7] border border-[#DCDDD5] hover:border-[#064C3B] hover:shadow-md transition-all group flex flex-col justify-between"
          >
            <div>
              <MapPin className="w-6 h-6 text-[#064C3B] mb-2" />
              <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-[#064C3B] transition-colors mb-1">
                Our Clinic Locations
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Find addresses, timings, and directions for Mira Road, Vasai, and Surat.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-1 text-xs font-semibold text-[#064C3B]">
              <span>Explore Locations</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

      </div>
    </PageContainer>
  )
}
