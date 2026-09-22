import React from 'react'
import { Star, ExternalLink, MapPin, CheckCircle, ShieldCheck } from 'lucide-react'
import { reviewsData } from '../../data/reviews'

export default function PatientReviews({ branch }) {
  const { trustBadge, featuredReview, supportingReviews } = reviewsData

  const googleReviewsUrl = 'https://www.google.com/search?q=dr+jha+mira+road#lrd=0x3be7b1f88d09710d:0xc181b2fa261f6c42,1,,,,'

  // Combine all reviews into a unified array for 2-column small cards layout
  const allReviews = [featuredReview, ...supportingReviews]

  // If a branch is specified, prioritize branch reviews at top
  const displayReviews = branch?.reviews?.length
    ? [
        ...branch.reviews.map((r, i) => ({
          id: `branch-review-${i}`,
          quote: r.quote,
          author: r.author,
          branch: branch.name,
          condition: r.condition || 'Clinical Rehabilitation',
          source: r.source || 'Google Review',
          verified: r.verified ?? true,
          rating: 5,
          googleUrl: googleReviewsUrl,
        })),
        ...allReviews.filter((r) => r.branch?.toLowerCase() !== branch?.name?.toLowerCase()),
      ].slice(0, 12)
    : allReviews

  const getInitials = (name) => {
    if (!name) return 'PT'
    return name
      .split(' ')
      .filter(Boolean)
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()
  }

  return (
    <section
      id="patient-reviews"
      aria-labelledby="reviews-heading"
      className="w-full bg-[#FAF9F5] text-[#26332F] py-16 sm:py-20 lg:py-24 border-y border-stone-200/70 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ═══════════ 1. HEADER & TRUST INDICATOR ═══════════ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 sm:pb-12 border-b border-stone-200/80">
          
          {/* Heading Column */}
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#064C3B]">
                PATIENT EXPERIENCES
              </span>
              <span className="text-stone-300">•</span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Google Reviews
              </span>
            </div>

            <h2
              id="reviews-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2926] leading-[1.15]"
            >
              Real healing.<br />
              <span className="italic font-normal text-[#064C3B]">Authentic recovery stories.</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal pt-1 max-w-xl">
              Unedited feedback from verified patients treated at Dr. Jha Physiotherapy &amp; Acupuncture Centre. Click any review to view on Google.
            </p>
          </div>

          {/* Google Trust Indicator Badge */}
          <div className="shrink-0">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-3.5 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200/90 shadow-sm transition-all group/badge"
            >
              <div className="flex items-center gap-1 text-[#E5A500]" aria-label={`${trustBadge.starCount} out of 5 stars`}>
                {Array.from({ length: trustBadge.starCount }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                ))}
              </div>
              <div className="sm:border-l sm:border-stone-200 sm:pl-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-bold tracking-wide text-stone-900 block">
                    {trustBadge.label}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover/badge:text-[#064C3B] transition-colors" />
                </div>
                <span className="text-[11px] text-stone-500 font-medium">
                  {trustBadge.subtitle}
                </span>
              </div>
            </a>
          </div>

        </div>

        {/* ═══════════ 2. REVIEWS GRID (2 REVIEWS PER ROW) ═══════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-8 sm:mt-10">
          {displayReviews.map((review) => (
            <a
              key={review.id}
              href={review.googleUrl || googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read ${review.author}'s review on Google`}
              className="group bg-white border border-stone-200/90 hover:border-[#064C3B] rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(6,76,59,0.08)] transition-all duration-200 cursor-pointer text-left relative"
            >
              <div>
                {/* Card Top Row: Star Rating + Condition Pill + Google Review Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* 5 Stars */}
                    <div
                      className="flex items-center gap-0.5 text-[#E5A500]"
                      aria-label={`${review.rating || 5} out of 5 stars`}
                    >
                      {Array.from({ length: review.rating || 5 }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                      ))}
                    </div>

                    {/* Condition Tag */}
                    {review.condition && (
                      <span className="text-[11px] font-semibold text-[#064C3B] bg-[#064C3B]/8 px-2.5 py-0.5 rounded-full border border-[#064C3B]/15">
                        {review.condition}
                      </span>
                    )}
                  </div>

                  {/* Google Action Indicator */}
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-stone-400 group-hover:text-[#064C3B] transition-colors shrink-0">
                    <span className="hidden sm:inline">Google Review</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>

                {/* Review Excerpt */}
                <blockquote className="text-sm sm:text-[14.5px] text-stone-700 group-hover:text-stone-900 leading-relaxed italic font-normal mb-5">
                  “{review.quote}”
                </blockquote>
              </div>

              {/* Card Footer: Author Attribution & Branch */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#064C3B]/8 group-hover:bg-[#064C3B]/15 border border-[#064C3B]/20 flex items-center justify-center text-[11px] font-bold text-[#064C3B] shrink-0 transition-colors">
                    {getInitials(review.author)}
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-stone-900 text-xs sm:text-sm block group-hover:text-[#064C3B] transition-colors">
                      {review.author}
                    </cite>
                    <div className="flex items-center gap-1.5 text-[10px] text-stone-500 font-normal">
                      <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                        <CheckCircle className="w-2.5 h-2.5 text-emerald-600" />
                        Verified
                      </span>
                      <span className="text-stone-300">•</span>
                      <span>Google Review</span>
                    </div>
                  </div>
                </div>

                {review.branch && (
                  <span className="text-stone-600 font-medium flex items-center gap-1 text-[11px] bg-stone-50 px-2.5 py-1 rounded-full border border-stone-200/80 shrink-0">
                    <MapPin className="w-3 h-3 text-[#064C3B]" />
                    {review.branch}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* ═══════════ 3. SECTION FOOTER & GOOGLE REVIEWS CTA ═══════════ */}
        <div className="mt-10 sm:mt-14 pt-8 border-t border-stone-200/80 flex flex-col items-center text-center">
          
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#085C48] transition-all px-8 py-3.5 rounded-full shadow-sm hover:shadow-md"
          >
            <span>Read 500+ Patient Reviews on Google</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>

          {/* Subtle Footprint */}
          <span className="text-xs text-stone-500 tracking-wide font-normal mt-3 sm:mt-4">
            Click any review card to open the live Google Reviews dialog for Dr. Jha Centre Mira Road
          </span>

        </div>

      </div>
    </section>
  )
}


