import React from 'react'
import {
  ArrowRight,
  Activity,
  ClipboardList,
  HeartHandshake,
  TrendingUp,
  Quote
} from 'lucide-react'

/* ──────────────── Botanical Background Silhouettes ──────────────── */

function SubtleFoliageLeft() {
  return (
    <svg
      className="absolute top-12 -left-10 w-44 h-64 text-white/[0.03] pointer-events-none z-0"
      viewBox="0 0 140 200"
      fill="currentColor"
    >
      <path d="M30 200C30 200 25 120 10 70C-5 25 5 5 25 2C45 -1 55 20 50 50C45 80 35 150 30 200Z" />
      <path d="M60 190C60 190 55 130 70 85C85 40 78 18 58 15" stroke="currentColor" fill="none" strokeWidth="1.5" opacity="0.3" />
    </svg>
  )
}

function SubtleFoliageRight() {
  return (
    <svg
      className="absolute bottom-16 -right-10 w-48 h-72 text-white/[0.03] pointer-events-none z-0 rotate-180"
      viewBox="0 0 140 200"
      fill="currentColor"
    >
      <path d="M30 200C30 200 25 120 10 70C-5 25 5 5 25 2C45 -1 55 20 50 50C45 80 35 150 30 200Z" />
      <path d="M60 190C60 190 55 130 70 85C85 40 78 18 58 15" stroke="currentColor" fill="none" strokeWidth="1.5" opacity="0.3" />
    </svg>
  )
}

/* ──────────────── Data Structure (CMS Ready) ──────────────── */

const featuredCase = {
  id: 'sports-rehab-knee',
  slug: 'returning-to-the-game',
  category: 'SPORTS REHABILITATION',
  title: 'Returning to the game.',
  summary:
    'A recreational athlete came to us with a knee injury that was affecting training and daily movement. Through a structured rehabilitation program, the patient worked toward improved strength, stability and confidence.',
  image:
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop&q=80',
  imageAlt: 'Physiotherapy rehabilitation session assisting knee and lower limb movement',
  overlayQuote: '“I can move freely again.”',
  overlayAuthor: '— Patient',
  journey: [
    {
      step: '01',
      stage: 'CHALLENGE',
      detail: 'Knee pain and limited mobility',
      icon: <Activity className="w-4 h-4 text-[#E5A500]" />,
    },
    {
      step: '02',
      stage: 'ASSESSMENT',
      detail: 'Detailed clinical evaluation',
      icon: <ClipboardList className="w-4 h-4 text-[#E5A500]" />,
    },
    {
      step: '03',
      stage: 'CARE',
      detail: 'Physiotherapy, strengthening & functional training',
      icon: <HeartHandshake className="w-4 h-4 text-[#E5A500]" />,
    },
    {
      step: '04',
      stage: 'PROGRESS',
      detail: 'Return toward sports and daily activities',
      icon: <TrendingUp className="w-4 h-4 text-[#E5A500]" />,
    },
  ],
  testimonial:
    '“The personalized care and guidance made all the difference. I’m back to doing what I love.”',
  testimonialAuthor: '— Patient',
  ctaText: 'Read Full Story →',
  ctaHref: '#case-sports-rehab',
}

const supportingCases = [
  {
    id: 'case-back-pain',
    slug: 'back-pain-recovery',
    category: 'BACK PAIN',
    title: 'From constant pain to everyday comfort.',
    description:
      'A case of persistent lower-back pain managed through an individualized physiotherapy program.',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Targeted spine and back rehabilitation care',
    ctaText: 'Read Story →',
    ctaHref: '#case-back-pain',
  },
  {
    id: 'case-neuro-rehab',
    slug: 'regaining-independence',
    category: 'NEUROLOGICAL REHABILITATION',
    title: 'Regaining independence.',
    description:
      'Rehabilitation focused on improving mobility, balance and daily function.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Neurological mobility exercise and balance training',
    ctaText: 'Read Story →',
    ctaHref: '#case-neuro-rehab',
  },
  {
    id: 'case-shoulder-pain',
    slug: 'stronger-range-of-movement',
    category: 'SHOULDER PAIN',
    title: 'A stronger range of movement.',
    description:
      'Targeted physiotherapy focused on restoring movement and supporting everyday function.',
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&auto=format&fit=crop&q=80',
    imageAlt: 'Shoulder joint mobilization and range of motion therapy',
    ctaText: 'Read Story →',
    ctaHref: '#case-shoulder-pain',
  },
]

/* ──────────────── Main Component ──────────────── */

export default function RecoveryStories() {
  return (
    <section className="w-full bg-[#064C3B] py-20 sm:py-24 lg:py-28 font-sans antialiased text-[#F8F6F0] relative overflow-hidden">
      {/* Subtle organic line decorations */}
      <SubtleFoliageLeft />
      <SubtleFoliageRight />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ═══════════ TOP HEADING AREA ═══════════ */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 relative">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 text-[11px] sm:text-xs tracking-[0.22em] text-[#F8F6F0]/80 uppercase font-semibold mb-3">
            <span className="w-8 h-[1px] bg-[#FCFBF7]/30"></span>
            REAL RECOVERY STORIES
            <span className="w-8 h-[1px] bg-[#FCFBF7]/30"></span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#F8F6F0] leading-[1.12]">
            Every recovery <br />
            <span className="italic font-normal text-[#E5A500]">has a story.</span>
          </h2>

          {/* Supporting paragraph */}
          <p className="text-sm sm:text-base text-[#F8F6F0]/75 max-w-xl mx-auto mt-4 leading-relaxed font-normal">
            Explore real patient journeys and see how personalized physiotherapy and rehabilitation helped them move toward better function and everyday life.
          </p>

          {/* Small editorial accent note on top-right */}
          <div className="hidden lg:block absolute -top-2 right-[-140px] xl:right-[-180px] pointer-events-none select-none text-right -rotate-6">
            <span className="font-handwriting font-['Caveat'] text-[#F8F6F0]/40 text-xl xl:text-2xl leading-tight block">
              Real People
              <br />
              Real Progress
            </span>
          </div>
        </div>

        {/* ═══════════ FEATURED CASE STUDY (COMPOSITION) ═══════════ */}
        <div className="max-w-6xl mx-auto bg-[#FCFBF7] rounded-[28px] sm:rounded-[36px] overflow-hidden text-[#26332F] shadow-2xl shadow-black/20 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* Left Image Area (approx 48%) */}
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] lg:min-h-full overflow-hidden bg-stone-100">
              <img
                src={featuredCase.image}
                alt={featuredCase.imageAlt}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />

              {/* Elegant Quote Overlay in Upper-Left */}
              <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-10 max-w-[260px]">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/15 text-white shadow-lg">
                  <p className="font-serif italic text-base sm:text-lg leading-snug">
                    {featuredCase.overlayQuote}
                  </p>
                  <span className="block text-[11px] font-sans font-medium text-stone-300 mt-1">
                    {featuredCase.overlayAuthor}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Information Area (approx 52%) */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
              <div>
                {/* Category Label */}
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#064C3B] block mb-2">
                  {featuredCase.category}
                </span>

                {/* Main Case Title */}
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#26332F] leading-tight mb-3">
                  {featuredCase.title}
                </h3>

                {/* Case Summary */}
                <p className="text-xs sm:text-[13.5px] text-stone-600 leading-relaxed font-normal mb-8">
                  {featuredCase.summary}
                </p>

                {/* 4-Step Horizontal Journey */}
                <div className="mb-8 pt-2">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative">
                    {featuredCase.journey.map((step, idx) => (
                      <div
                        key={idx}
                        className="bg-white/70 border border-stone-200/80 rounded-2xl p-3 flex flex-col justify-between h-full relative"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-mono text-[10px] font-bold text-stone-400">
                              {step.step}
                            </span>
                            <div className="w-6 h-6 rounded-lg bg-[#E5A500]/10 flex items-center justify-center">
                              {step.icon}
                            </div>
                          </div>
                          <span className="text-[9.5px] font-bold tracking-[0.14em] uppercase text-stone-500 block mb-1">
                            {step.stage}
                          </span>
                        </div>
                        <p className="text-[11px] text-stone-800 font-medium leading-snug">
                          {step.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA Row & Integrated Testimonial Panel */}
              <div className="pt-4 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                {/* Terracotta Button */}
                <a
                  href={featuredCase.ctaHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-[#F8F6F0] bg-[#064C3B] hover:bg-[#073D32] active:scale-[0.98] transition-all shadow-md shadow-[#064C3B]/20 text-white w-fit shrink-0 cursor-pointer"
                >
                  <span>{featuredCase.ctaText}</span>
                </a>

                {/* Narrow Quiet Testimonial Panel */}
                <div className="sm:border-l sm:border-stone-200/80 sm:pl-4 max-w-xs">
                  <p className="text-[11.5px] text-stone-600 italic leading-snug">
                    {featuredCase.testimonial}
                  </p>
                  <span className="text-[10px] font-medium text-stone-400 block mt-1">
                    {featuredCase.testimonialAuthor}
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ═══════════ THREE SUPPORTING CASE STUDIES ═══════════ */}
        <div className="max-w-6xl mx-auto mt-7 sm:mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {supportingCases.map((c, idx) => (
              <div
                key={idx}
                className="bg-[#FCFBF7] rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 text-[#26332F] flex flex-col justify-between shadow-lg shadow-black/10 border border-white/10 group hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Card Image */}
                  <div className="w-full h-40 sm:h-44 rounded-2xl overflow-hidden mb-4 bg-stone-200">
                    <img
                      src={c.image}
                      alt={c.imageAlt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Category */}
                  <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#064C3B] block mb-1.5">
                    {c.category}
                  </span>

                  {/* Title */}
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[#26332F] leading-tight mb-2">
                    {c.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {c.description}
                  </p>
                </div>

                {/* CTA Link */}
                <div className="pt-4 mt-3 border-t border-stone-200/60">
                  <a
                    href={c.ctaHref}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#064C3B] hover:text-[#073D32] transition-colors"
                  >
                    <span>{c.ctaText}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
