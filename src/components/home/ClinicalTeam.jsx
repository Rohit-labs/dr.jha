import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  GraduationCap,
  Activity,
  MapPin,
  ClipboardCheck,
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  Phone,
  Clock,
  ChevronLeft,
  ChevronRight,
  UserCheck
} from 'lucide-react'
import { doctors } from '../../data/team'

export default function ClinicalTeam({ branch }) {
  // Determine which doctors belong to the current branch
  const branchDoctors = useMemo(() => {
    if (!branch) {
      // Default: Mira Road team (Dr. Pranab Jha & Hr. Anupam Jha)
      return doctors.filter(
        (doc) => doc.id === 'dr-pranab-jha' || doc.id === 'hr-anupam-jha'
      )
    }

    if (branch.slug === 'vasai') {
      return doctors.filter((doc) => doc.id === 'hr-shweta-jha')
    }

    if (branch.slug === 'surat') {
      return doctors.filter((doc) => doc.id === 'hr-samta-salecha')
    }

    if (branch.slug === 'mira-road') {
      return doctors.filter(
        (doc) => doc.id === 'dr-pranab-jha' || doc.id === 'hr-anupam-jha'
      )
    }

    // Fallback based on doctorIds in branch data
    if (branch.doctorIds && branch.doctorIds.length > 0) {
      return doctors.filter((doc) => branch.doctorIds.includes(doc.id))
    }

    return [doctors[0]]
  }, [branch])

  // Active doctor slide index
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStartX, setTouchStartX] = useState(null)
  const [touchEndX, setTouchEndX] = useState(null)

  // Reset index if branch changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [branch?.slug])

  const totalDoctors = branchDoctors.length
  const isCarousel = totalDoctors > 1

  const nextSlide = useCallback(() => {
    if (totalDoctors > 1) {
      setCurrentIndex((prev) => (prev + 1) % totalDoctors)
    }
  }, [totalDoctors])

  const prevSlide = useCallback(() => {
    if (totalDoctors > 1) {
      setCurrentIndex((prev) => (prev - 1 + totalDoctors) % totalDoctors)
    }
  }, [totalDoctors])

  // Autoplay for carousel (pauses on hover or touch)
  useEffect(() => {
    if (!isCarousel || isPaused) return

    const timer = setInterval(() => {
      nextSlide()
    }, 6500)

    return () => clearInterval(timer)
  }, [isCarousel, isPaused, nextSlide])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return
    const diff = touchStartX - touchEndX
    if (diff > 50) {
      nextSlide()
    } else if (diff < -50) {
      prevSlide()
    }
    setTouchStartX(null)
    setTouchEndX(null)
  }

  const activeDoctor = branchDoctors[currentIndex] || branchDoctors[0] || doctors[0]

  const principles = [
    {
      title: 'Personalized Treatment Plans',
      icon: <ClipboardCheck className="w-5 h-5 text-[#064C3B] stroke-[1.7]" />,
      desc: 'Customized protocols designed around your specific biomechanics and daily routine.'
    },
    {
      title: 'Evidence-Based Approach',
      icon: <ShieldCheck className="w-5 h-5 text-[#064C3B] stroke-[1.7]" />,
      desc: 'Techniques grounded in validated physical medicine and rehabilitation research.'
    },
    {
      title: 'Dedicated 1-on-1 Focus',
      icon: <HeartHandshake className="w-5 h-5 text-[#064C3B] stroke-[1.7]" />,
      desc: 'Hands-on clinician attention without rushed multi-patient sessions.'
    },
    {
      title: 'Focus on Long-Term Recovery',
      icon: <TrendingUp className="w-5 h-5 text-[#064C3B] stroke-[1.7]" />,
      desc: 'Sustainable relief and functional strength to prevent recurrent pain episodes.'
    },
  ]

  return (
    <section className="w-full bg-[#F8F6F0] pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-24 font-sans antialiased text-[#26332F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ═══════════ SECTION HEADING ═══════════ */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.2em] text-[#064C3B] uppercase font-semibold mb-3">
            <span className="w-8 h-[1px] bg-[#064C3B]/40"></span>
            <span>MEET YOUR {branch?.name ? branch.name.toUpperCase() : 'CARE'} TEAM</span>
            <span className="w-8 h-[1px] bg-[#064C3B]/40"></span>
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#26332F] leading-[1.12]">
            Clinical Experience, <br />
            <span className="italic font-normal text-[#064C3B]">Personal Care.</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto mt-4 leading-relaxed font-normal">
            {branch?.slug === 'mira-road' || !branch
              ? 'Under the clinical leadership of Dr. Pranab Jha and Hr. Anupam Jha, our Mira Road centre combines evidence-based physiotherapy and medical acupuncture for lasting recovery.'
              : branch?.slug === 'vasai'
              ? 'Under Hr. Shweta Jha, our Vasai centre delivers specialized naturopathy, therapeutic yoga, and acupuncture care tailored to your recovery.'
              : branch?.slug === 'surat'
              ? 'Under Hr. Samta Salecha, our Surat clinic provides advanced acupuncture medicine and dedicated musculoskeletal rehabilitation.'
              : 'Our clinical specialists combine evidence-based rehabilitation and medical acupuncture to help you regain pain-free movement.'}
          </p>
        </div>

        {/* ═══════════ CAROUSEL SELECTOR TABS (FOR MULTI-DOCTOR BRANCHES) ═══════════ */}
        {isCarousel && (
          <div className="max-w-xl mx-auto mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-full bg-[#FCFBF7] border border-[#DCDDD5] shadow-xs">
            {branchDoctors.map((doc, idx) => (
              <button
                key={doc.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'bg-[#064C3B] text-white shadow-sm'
                    : 'text-stone-700 hover:text-[#064C3B] hover:bg-[#F4F2EC]'
                }`}
              >
                <UserCheck className={`w-3.5 h-3.5 transition-colors ${currentIndex === idx ? 'text-[#E5A500]' : 'text-stone-400'}`} />
                <span>{doc.name}</span>
                <span className="hidden md:inline text-[11px] opacity-80 font-normal">
                  ({doc.role.split('&')[0].trim()})
                </span>
              </button>
            ))}
          </div>
        )}

        {/* ═══════════ STATIC CARD FRAME WITH IN-PLACE DATA & PHOTO TRANSITION ═══════════ */}
        <div
          className="max-w-5xl mx-auto relative group/slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Static Card Skeleton */}
          <article className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[36px] overflow-hidden flex flex-col lg:flex-row shadow-[0_4px_24px_rgba(0,0,0,0.02)] ring-1 ring-[#064C3B]/10">
            
            {/* ──────────────── Left Column: Cross-Fading Portrait Photos (44%) ──────────────── */}
            <div className="lg:w-[44%] relative overflow-hidden bg-stone-100 min-h-[380px] sm:min-h-[440px] lg:min-h-[520px]">
              {branchDoctors.map((doctor, idx) => {
                const isActive = idx === currentIndex
                return (
                  <img
                    key={doctor.id}
                    src={doctor.image}
                    alt={doctor.imageAlt || `${doctor.name} - ${doctor.role}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                      isActive
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-[1.03] z-0 pointer-events-none'
                    }`}
                    style={{ objectPosition: doctor.imagePosition || 'center 25%' }}
                    loading="lazy"
                  />
                )
              })}

              {/* Doctor Role Badge (Dynamic in-place transition) */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase bg-white/95 text-[#064C3B] border border-stone-200/80 shadow-xs backdrop-blur-xs transition-all duration-300">
                  {activeDoctor.role}
                </span>
              </div>

              {/* Active Clinics Pill at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-20">
                <div className="bg-[#073D32]/90 backdrop-blur-md rounded-xl px-4 py-2.5 text-white flex items-center justify-between text-xs border border-white/10 shadow-md">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E5A500]" />
                    <span className="font-medium">Direct Clinical Practice</span>
                  </div>
                  <span className="font-semibold text-white/90">
                    {activeDoctor.branches ? activeDoctor.branches.join(' • ') : branch?.name || 'Mira Road'}
                  </span>
                </div>
              </div>
            </div>

            {/* ──────────────── Right Column: In-Place Cross-Fading Clinical Data (56%) ──────────────── */}
            <div className="lg:w-[56%] p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
              
              {/* Stacked Doctor Content Container */}
              <div className="relative min-h-[380px] sm:min-h-[360px] lg:min-h-[390px]">
                {branchDoctors.map((doctor, idx) => {
                  const isActive = idx === currentIndex
                  return (
                    <div
                      key={doctor.id}
                      className={`transition-all duration-500 ease-out ${
                        isActive
                          ? 'opacity-100 translate-y-0 relative z-10'
                          : 'opacity-0 translate-y-3 absolute inset-0 pointer-events-none z-0'
                      }`}
                    >
                      {/* Name & Role Header */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#26332F] leading-tight">
                            {doctor.name}
                          </h3>

                          {/* Carousel Counter */}
                          {isCarousel && (
                            <span className="text-[11px] font-bold tracking-wider text-stone-500 uppercase bg-[#F4F2EC] px-2.5 py-1 rounded-full border border-[#DCDDD5]">
                              {idx + 1} / {totalDoctors}
                            </span>
                          )}
                        </div>

                        <p className="text-sm sm:text-base font-semibold text-[#064C3B]">
                          {doctor.role}
                        </p>
                      </div>

                      {/* Subtle Accent Divider */}
                      <div className="w-14 h-0.5 bg-[#E5A500] my-5"></div>

                      {/* Clinical Bio / Overview */}
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                        {doctor.description}
                      </p>

                      {/* Credentials & Details List */}
                      <div className="space-y-3.5">
                        {/* Medical Designation */}
                        <div className="flex items-start gap-3.5">
                          <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                            <GraduationCap className="w-4 h-4 stroke-[1.8]" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                              Medical Designation
                            </span>
                            <p className="text-xs sm:text-sm font-semibold text-stone-800">
                              {doctor.qualification}
                            </p>
                          </div>
                        </div>

                        {/* Clinical Experience */}
                        <div className="flex items-start gap-3.5">
                          <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                            <Clock className="w-4 h-4 stroke-[1.8]" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                              Clinical Experience
                            </span>
                            <p className="text-xs sm:text-sm font-semibold text-stone-800">
                              {doctor.experience || 'Dedicated Clinical Practice'}
                            </p>
                          </div>
                        </div>

                        {/* Memberships */}
                        {doctor.memberships && doctor.memberships.length > 0 && (
                          <div className="flex items-start gap-3.5">
                            <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                              <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
                            </div>
                            <div>
                              <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                                Professional Memberships
                              </span>
                              <p className="text-xs sm:text-sm font-semibold text-stone-800">
                                {doctor.memberships.join(' • ')}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Specialization */}
                        <div className="flex items-start gap-3.5">
                          <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                            <Activity className="w-4 h-4 stroke-[1.8]" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                              Specialized Focus
                            </span>
                            <p className="text-xs sm:text-sm font-semibold text-stone-800">
                              {doctor.specialization}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Static Bottom Actions & Controls Bar */}
              <div className="pt-6 sm:pt-8 mt-6 border-t border-stone-200/70 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] transition-all shadow-sm active:scale-[0.98]"
                  >
                    <span>Meet the Full Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`tel:${activeDoctor?.phone ? activeDoctor.phone.replace(/[^0-9+]/g, '') : (branch?.phone ? branch.phone.replace(/[^0-9+]/g, '') : '+919146036559')}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#064C3B] bg-white border border-[#DCDDD5] hover:border-[#064C3B] hover:bg-[#F8F6F0] transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {activeDoctor.name}: {activeDoctor.phone || branch?.phone || '+91 91460 36559'}</span>
                  </a>
                </div>

                {/* Slider Arrow Controls */}
                {isCarousel && (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full bg-white border border-[#DCDDD5] flex items-center justify-center text-stone-700 hover:text-[#064C3B] hover:border-[#064C3B] hover:bg-[#F4F2EC] shadow-xs active:scale-95 transition-all cursor-pointer"
                      aria-label="Previous Doctor"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full bg-white border border-[#DCDDD5] flex items-center justify-center text-stone-700 hover:text-[#064C3B] hover:border-[#064C3B] hover:bg-[#F4F2EC] shadow-xs active:scale-95 transition-all cursor-pointer"
                      aria-label="Next Doctor"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>

            </div>

          </article>

          {/* Carousel Bottom Indicator Dots */}
          {isCarousel && (
            <div className="flex items-center justify-center gap-2.5 mt-4">
              {branchDoctors.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === dotIdx
                      ? 'w-8 bg-[#064C3B]'
                      : 'w-2 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Go to Doctor ${dotIdx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ═══════════ TRUST / CARE PRINCIPLES STRIP ═══════════ */}
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-2xl sm:rounded-[28px] p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/70">
              {principles.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-2.5 ${
                    idx !== 0 ? 'pt-5 sm:pt-0 sm:pl-6' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F4F2EC] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-stone-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
