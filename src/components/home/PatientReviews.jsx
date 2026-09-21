import React from 'react'
import { Star, ExternalLink, MapPin, CheckCircle, ShieldCheck } from 'lucide-react'
import { reviewsData } from '../../data/reviews'

export default function PatientReviews({ branch }) {
  const { trustBadge, featuredReview, supportingReviews } = reviewsData

  // If a branch is specified, check for branch-specific review
  const branchReview = branch?.reviews?.[0]
    ? {
        quote: branch.reviews[0].quote,
        author: branch.reviews[0].author,
        branch: branch.name,
        condition: branch.reviews[0].condition || 'Clinical Rehabilitation',
        source: branch.reviews[0].source || 'Google Review',
        verified: branch.reviews[0].verified,
        rating: 5,
      }
    : supportingReviews.find((r) => r.branch?.toLowerCase() === branch?.name?.toLowerCase()) || featuredReview

  const googleReviewsUrl = 'https://www.google.com/search?q=dr+jha+mira+road#lrd=0x3be7b1f88d09710d:0xc181b2fa261f6c42,1,,,,'

  return (
    <section
      id="patient-reviews"
      aria-labelledby="reviews-heading"
      className="w-full bg-[#064C3B] text-[#FCFBF7] py-16 sm:py-20 lg:py-24 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ═══════════ 1. HEADER & TRUST INDICATOR ═══════════ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* Heading Column */}
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E5A500]">
                PATIENT EXPERIENCES
              </span>
              <span className="text-white/40">•</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300 bg-white/10 px-2.5 py-0.5 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Google Reviews
              </span>
            </div>

            <h2
              id="reviews-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FCFBF7] leading-[1.15]"
            >
              Real healing.<br />
              <span className="italic font-normal text-stone-300">Authentic recovery stories.</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-normal pt-1 max-w-xl">
              Unedited feedback from patients treated at Dr. Jha Physiotherapy &amp; Acupuncture Centre for complex spine, nerve, and joint recovery.
            </p>
          </div>

          {/* Google Trust Indicator Badge */}
          <div className="shrink-0">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 transition-all group/badge"
            >
              <div className="flex items-center gap-1 text-[#E5A500]" aria-label={`${trustBadge.starCount} out of 5 stars`}>
                {Array.from({ length: trustBadge.starCount }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                ))}
              </div>
              <div className="sm:border-l sm:border-white/15 sm:pl-3">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-bold tracking-wide text-white block">
                    {trustBadge.label}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover/badge:text-white transition-colors" />
                </div>
                <span className="text-[11px] text-stone-300 font-medium">
                  {trustBadge.subtitle}
                </span>
              </div>
            </a>
          </div>

        </div>

        {/* ═══════════ 2. FEATURED PATIENT TESTIMONIAL ═══════════ */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-white/[0.04] border border-white/15 rounded-[32px] sm:rounded-[36px] p-8 sm:p-12 lg:p-14 relative shadow-lg">
            
            {/* Condition Pill */}
            {branchReview.condition && (
              <div className="mb-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#E5A500]/20 text-[#E5A500] border border-[#E5A500]/30 tracking-wide inline-block">
                  {branchReview.condition}
                </span>
              </div>
            )}

            {/* Featured Quote */}
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#FCFBF7] font-normal leading-relaxed italic mb-8 sm:mb-10 max-w-4xl">
              “{branchReview.quote}”
            </blockquote>

            {/* Author Attribution & Branch Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-semibold text-stone-200">
                  <CheckCircle className="w-4 h-4 text-[#E5A500]" />
                </div>
                <div>
                  <cite className="not-italic text-sm sm:text-base font-semibold text-white block">
                    — {branchReview.author}
                  </cite>
                  <span className="text-[11px] text-stone-300 font-normal">
                    {branchReview.source || 'Verified Google Review'}
                  </span>
                </div>
              </div>

              {branchReview.branch && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-xs font-medium text-stone-200 w-fit">
                  <MapPin className="w-3.5 h-3.5 text-[#E5A500]" />
                  <span>{branchReview.branch} Branch</span>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* ═══════════ 3. SUPPORTING REVIEWS (2 COLUMNS) ═══════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-10">
          {supportingReviews.map((review) => (
            <article
              key={review.id}
              className="bg-white/[0.03] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:bg-white/[0.05] transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  {/* 5 Stars */}
                  <div
                    className="flex items-center gap-1 text-[#E5A500]"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                    ))}
                  </div>

                  {/* Condition Tag */}
                  {review.condition && (
                    <span className="text-[11px] font-semibold text-emerald-300 bg-white/10 px-2.5 py-0.5 rounded-md border border-white/10">
                      {review.condition}
                    </span>
                  )}
                </div>

                {/* Review Excerpt */}
                <blockquote className="text-sm sm:text-base text-stone-200 leading-relaxed italic font-normal mb-6">
                  “{review.quote}”
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div>
                  <cite className="not-italic font-semibold text-white block">
                    — {review.author}
                  </cite>
                  <span className="text-[10px] text-stone-400 font-normal">
                    {review.source || 'Google Review'}
                  </span>
                </div>
                {review.branch && (
                  <span className="text-stone-300 font-medium flex items-center gap-1 text-[11px] bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    <MapPin className="w-3 h-3 text-[#E5A500]" />
                    {review.branch}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* ═══════════ 4. SECTION FOOTER & GOOGLE REVIEWS CTA ═══════════ */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col items-center text-center">
          
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-[#E5A500] transition-all px-7 py-3.5 rounded-full border border-white/20 hover:border-[#E5A500] bg-white/[0.05] hover:bg-white/[0.1] shadow-sm"
          >
            <span>Read 230+ Patient Reviews on Google</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>

          {/* Subtle Footprint */}
          <span className="text-xs text-stone-400/90 tracking-wide font-normal mt-4 sm:mt-5">
            Verified patient feedback from Google Reviews &amp; clinical practice in Mira Road
          </span>

        </div>

      </div>
    </section>
  )
}

