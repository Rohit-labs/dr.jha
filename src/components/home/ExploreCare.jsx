import React from 'react'
import { ArrowRight, Search } from 'lucide-react'

/* ──────────────── SVG Icons ──────────────── */

function SpineJointIcon() {
  return (
    <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center text-slate-700 shadow-sm shrink-0">
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="4" r="2" />
        <path d="M10 8h4l-1 5h-2L10 8z" />
        <path d="M10 13h4l-1 5h-2L10 13z" />
        <circle cx="12" cy="20" r="1.5" />
        <path d="M6 10c2-1 3 0 4 1" />
        <path d="M18 10c-2-1-3 0-4 1" />
        <path d="M6 15c2-1 3 0 4 1" />
        <path d="M18 15c-2-1-3 0-4 1" />
      </svg>
    </div>
  )
}

function BrainNeurologyIcon() {
  return (
    <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center text-slate-700 shadow-sm shrink-0">
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21V12" />
        <path d="M12 12C12 12 7.5 10.5 6 7.5C4.5 4.5 7 2.5 9 3.2C9 1.5 11.2.8 12 2.2C12.8.8 15 1.5 15 3.2C17 2.5 19.5 4.5 18 7.5C16.5 10.5 12 12 12 12Z" />
        <path d="M8 8c-1.5.5-2.5 2-2 3.5" />
        <path d="M16 8c1.5.5 2.5 2 2 3.5" />
      </svg>
    </div>
  )
}

function SportsRunnerIcon() {
  return (
    <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center text-slate-700 shadow-sm shrink-0">
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#3E5C43]" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="15" cy="4" r="2" />
        <path d="M13 8.5l-3.5 2.5L5 12" />
        <path d="M14.5 6.5l-2 2.5l1.5 4.5L18 17.5" />
        <path d="M12.5 9l-.5 4.5L7.5 17.5" />
      </svg>
    </div>
  )
}

function AcupunctureNeedlesIcon() {
  return (
    <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center text-slate-700 shadow-sm shrink-0">
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <line x1="8" y1="3" x2="8" y2="17" />
        <line x1="12" y1="1.5" x2="12" y2="18.5" />
        <line x1="16" y1="3" x2="16" y2="17" />
        <circle cx="8" cy="18.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" />
        <circle cx="16" cy="18.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    </div>
  )
}

function LotusWellnessIcon() {
  return (
    <div className="w-11 h-11 rounded-full bg-white/80 flex items-center justify-center text-slate-700 shadow-sm shrink-0">
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#2D4536]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V12" />
        <path d="M12 12C12 12 9 9 9 5.5C9 4 10.5 3 12 4.5C13.5 3 15 4 15 5.5C15 9 12 12 12 12Z" />
        <path d="M7 14C5.5 12.5 5 10 6.5 8" />
        <path d="M17 14C18.5 12.5 19 10 17.5 8" />
        <path d="M12 19C9 19 5.5 17.5 5.5 17.5" />
        <path d="M12 19C15 19 18.5 17.5 18.5 17.5" />
      </svg>
    </div>
  )
}

/* ──────────────── Botanical Foliage Silhouettes ──────────────── */

function FoliageTopLeft() {
  return (
    <svg className="absolute -top-4 -left-4 w-32 h-44 text-[#8B9E78]/15 pointer-events-none z-0" viewBox="0 0 120 160" fill="currentColor">
      <path d="M25 160C25 160 22 95 8 55C-6 20 2 4 20 2C38 0 46 18 42 42C38 66 30 115 25 160Z" />
      <path d="M48 150C48 150 46 100 58 64C70 28 62 12 46 10" stroke="currentColor" fill="none" strokeWidth="1.5" opacity="0.4" />
      <path d="M60 145C60 145 75 110 88 80C98 55 92 40 80 42C68 44 65 60 68 85" stroke="currentColor" fill="none" strokeWidth="1.2" opacity="0.3" />
    </svg>
  )
}

function FoliageBottomRight() {
  return (
    <svg className="absolute -bottom-4 -right-4 w-32 h-44 text-[#8B9E78]/15 pointer-events-none z-0 rotate-180" viewBox="0 0 120 160" fill="currentColor">
      <path d="M25 160C25 160 22 95 8 55C-6 20 2 4 20 2C38 0 46 18 42 42C38 66 30 115 25 160Z" />
      <path d="M48 150C48 150 46 100 58 64C70 28 62 12 46 10" stroke="currentColor" fill="none" strokeWidth="1.5" opacity="0.4" />
    </svg>
  )
}

/* ──────────────── Main Component ──────────────── */

export default function CareAreas() {
  return (
    <section className="w-full bg-[#F5F2EC] pt-8 sm:pt-12 lg:pt-14 pb-4 sm:pb-6 lg:pb-8">
      {/* Outer Centered Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 font-sans antialiased text-[#1A1A1A]">
        
        {/* Master Canvas Container */}
        <div className="bg-[#FAF8F5] rounded-[44px] p-6 sm:p-10 lg:p-14 relative overflow-hidden border border-black/[0.04]">
          {/* Subtle botanical vector silhouettes */}
          <FoliageTopLeft />
          <FoliageBottomRight />

          {/* ═══════════ Section Heading Area ═══════════ */}
          <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
            {/* Top Eyebrow */}
            <div className="flex items-center justify-center gap-3 text-xs tracking-widest text-[#4A6453] uppercase font-semibold mb-3">
              <span className="w-8 h-[1px] bg-[#4A6453]/40"></span>
              OUR CARE AREAS
              <span className="w-8 h-[1px] bg-[#4A6453]/40"></span>
            </div>

            {/* H2 Title */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#1A1A1A] leading-[1.15] mb-3">
              Explore our care <br />
              <span className="italic font-normal text-[#A6543D]">for a stronger, pain-free you.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-black/60 max-w-xl mx-auto text-center mt-3 leading-relaxed">
              From everyday discomfort to specialized rehabilitation, we offer personalized care for every stage of your recovery.
            </p>
          </div>

          {/* ═══════════ Bento Grid (Desktop: 3 Equal Columns) ═══════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch mt-12 relative z-10">
            
            {/* ──────────────── COLUMN A: Left Column (lg:col-span-4) ──────────────── */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              
              {/* Card 1: Pain & Mobility */}
              <div className="bg-[#ECE7DF] rounded-[32px] overflow-hidden flex relative flex-1 min-h-[220px]">
                {/* Left Text Area */}
                <div className="w-[58%] p-6 sm:p-7 flex flex-col justify-between z-10 h-full">
                  <div>
                    <div className="mb-4">
                      <SpineJointIcon />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1A1A1A] leading-tight mb-2">
                      Pain &amp; Mobility
                    </h3>
                    <p className="text-xs text-[#1A1A1A]/60 leading-relaxed">
                      Back pain, neck pain, knee pain, sciatica and more.
                    </p>
                  </div>
                  <a
                    href="#explore"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A1A1A] mt-4 hover:text-[#A6543D] transition"
                  >
                    Explore <span>&rarr;</span>
                  </a>
                </div>

                {/* Right Inset Photo */}
                <div className="w-[42%] absolute right-0 top-0 bottom-0 h-full overflow-hidden rounded-l-[28px]">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=80"
                    alt="Spine & Back Examination"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Card 2: Neurological Rehabilitation */}
              <div className="bg-[#ECE7DF] rounded-[32px] overflow-hidden flex relative flex-1 min-h-[220px]">
                {/* Left Text Area */}
                <div className="w-[58%] p-6 sm:p-7 flex flex-col justify-between z-10 h-full">
                  <div>
                    <div className="mb-4">
                      <BrainNeurologyIcon />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1A1A1A] leading-tight mb-2">
                      Neurological Rehabilitation
                    </h3>
                    <p className="text-xs text-[#1A1A1A]/60 leading-relaxed">
                      Stroke, Parkinson's, facial palsy and other neurological conditions.
                    </p>
                  </div>
                  <a
                    href="#explore"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A1A1A] mt-4 hover:text-[#A6543D] transition"
                  >
                    Explore <span>&rarr;</span>
                  </a>
                </div>

                {/* Right Inset Photo */}
                <div className="w-[42%] absolute right-0 top-0 bottom-0 h-full overflow-hidden rounded-l-[28px]">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80"
                    alt="Hand Therapy Exercise"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

            {/* ──────────────── COLUMN B: Center Column (lg:col-span-4) ──────────────── */}
            <div className="lg:col-span-4 flex flex-col">
              <div className="bg-[#ECE7DF] rounded-[36px] overflow-hidden flex flex-col justify-between shadow-sm relative h-full min-h-[460px]">
                
                {/* Top Image Portion: The Arched Dome */}
                <div className="w-full h-[280px] sm:h-[310px] relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80"
                    alt="Physiotherapist treating patient"
                    className="w-full h-full object-cover [clip-path:ellipse(85%_95%_at_50%_15%)]"
                    loading="lazy"
                  />

                </div>

                {/* Bottom Content Portion */}
                <div className="p-7 sm:p-8 text-center flex flex-col items-center justify-center flex-1">
                  <LotusWellnessIcon />
                  <h3 className="font-serif text-[22px] font-bold text-[#1A1A1A] leading-tight mt-3 mb-2">
                    Physiotherapy &amp; Rehabilitation
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/65 max-w-xs leading-relaxed mb-4">
                    Personalized treatment plans for long-term recovery and better movement.
                  </p>
                  <a
                    href="#all-treatments"
                    className="bg-[#2D4536] hover:bg-[#223529] text-white text-xs font-semibold px-6 py-3 rounded-full mt-2 transition shadow-sm inline-flex items-center gap-2 active:scale-[0.98]"
                  >
                    Explore All Treatments <span>&rarr;</span>
                  </a>
                </div>

              </div>
            </div>

            {/* ──────────────── COLUMN C: Right Column (lg:col-span-4) ──────────────── */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              
              {/* Card 3: Sports Rehabilitation */}
              <div className="bg-[#ECE7DF] rounded-[32px] overflow-hidden flex relative flex-1 min-h-[220px]">
                {/* Left Text Area */}
                <div className="w-[58%] p-6 sm:p-7 flex flex-col justify-between z-10 h-full">
                  <div>
                    <div className="mb-4">
                      <SportsRunnerIcon />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1A1A1A] leading-tight mb-2">
                      Sports Rehabilitation
                    </h3>
                    <p className="text-xs text-[#1A1A1A]/60 leading-relaxed">
                      Injury recovery, performance enhancement and return to activity.
                    </p>
                  </div>
                  <a
                    href="#explore"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A1A1A] mt-4 hover:text-[#A6543D] transition"
                  >
                    Explore <span>&rarr;</span>
                  </a>
                </div>

                {/* Right Inset Photo */}
                <div className="w-[42%] absolute right-0 top-0 bottom-0 h-full overflow-hidden rounded-l-[28px]">
                  <img
                    src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop&q=80"
                    alt="Track Runner Athlete"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Card 4: Acupuncture & Pain Management */}
              <div className="bg-[#ECE7DF] rounded-[32px] overflow-hidden flex relative flex-1 min-h-[220px]">
                {/* Left Text Area */}
                <div className="w-[58%] p-6 sm:p-7 flex flex-col justify-between z-10 h-full">
                  <div>
                    <div className="mb-4">
                      <AcupunctureNeedlesIcon />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1A1A1A] leading-tight mb-2">
                      Acupuncture &amp; Pain Management
                    </h3>
                    <p className="text-xs text-[#1A1A1A]/60 leading-relaxed">
                      Holistic care for chronic pain, stress and overall well-being.
                    </p>
                  </div>
                  <a
                    href="#explore"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A1A1A] mt-4 hover:text-[#A6543D] transition"
                  >
                    Explore <span>&rarr;</span>
                  </a>
                </div>

                {/* Right Inset Photo */}
                <div className="w-[42%] absolute right-0 top-0 bottom-0 h-full overflow-hidden rounded-l-[28px]">
                  <img
                    src="https://images.unsplash.com/photo-1512290900672-1f4a9a0ebf35?w=600&auto=format&fit=crop&q=80"
                    alt="Acupuncture Therapy Session"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>

          </div>

          {/* ═══════════ Bottom Search Utility Pill ═══════════ */}
          <div className="mt-6 bg-[#ECE7DF] rounded-full py-3.5 px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            {/* Left Side: Magnifier badge + titles */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-slate-600 shadow-sm shrink-0">
                <Search className="w-4 h-4 stroke-[2]" />
              </div>
              <div className="text-left leading-tight">
                <span className="block text-[10px] text-[#1A1A1A]/50 font-medium uppercase tracking-wider">
                  Not sure where to start?
                </span>
                <span className="font-serif text-sm sm:text-base font-bold text-[#1A1A1A]">
                  Find the right care <span className="italic font-normal text-[#A6543D]">for your condition.</span>
                </span>
              </div>
            </div>

            {/* Right Side: Subtext + Button + Handwritten script */}
            <div className="flex items-center gap-4">
              <span className="hidden md:inline-block text-xs text-[#1A1A1A]/50">
                Search your symptoms and get personalized guidance.
              </span>
              <a
                href="#search"
                className="bg-white hover:bg-slate-50 text-[#1A1A1A] text-xs font-semibold px-5 py-2.5 rounded-full shadow-sm border border-black/5 transition inline-flex items-center gap-1.5 shrink-0 active:scale-[0.98]"
              >
                Search Conditions <span>&rarr;</span>
              </a>
              <span className="hidden lg:inline-block font-handwriting font-['Caveat'] text-lg text-slate-500 leading-none">
                Better Movement<br />Brighter Days
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
