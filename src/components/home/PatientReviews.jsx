import React from 'react'
import { Star, ArrowRight, MapPin, CheckCircle } from 'lucide-react'
import { reviewsData } from '../../data/reviews'

export default function PatientReviews() {
  const { trustBadge, featuredReview, supportingReviews } = reviewsData

  return (
    <section
      id="patient-reviews"
      aria-labelledby="reviews-heading"
      className="w-full bg-[#123F32] text-[#FAF7F2] py-16 sm:py-20 lg:py-24 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ═══════════ 1. HEADER & TRUST INDICATOR ═══════════ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* Heading Column */}
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D66B4E] block">
              PATIENT STORIES
            </span>
            <h2
              id="reviews-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF7F2] leading-[1.15]"
            >
              Real people.<br />
              <span className="italic font-normal text-stone-300">Real experiences.</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-normal pt-1 max-w-xl">
              The most meaningful measure of our care is how our patients experience their journey with us.
            </p>
          </div>

          {/* Neutral Trust Indicator Badge */}
          <div className="shrink-0">
            <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/10">
              <div className="flex items-center gap-1 text-[#E5A93C]" aria-label={`${trustBadge.starCount} out of 5 stars`}>
                {Array.from({ length: trustBadge.starCount }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                ))}
              </div>
              <div className="sm:border-l sm:border-white/15 sm:pl-3">
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-white block">
                  {trustBadge.label}
                </span>
                <span className="text-[11px] text-stone-400 font-normal">
                  {trustBadge.subtitle}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ═══════════ 2. FEATURED PATIENT TESTIMONIAL ═══════════ */}
        <div className="mt-12 sm:mt-16">
          <div className="bg-white/[0.03] border border-white/10 rounded-[32px] sm:rounded-[36px] p-8 sm:p-12 lg:p-14 relative">
            
            {/* Elegant Quotation Mark */}
            <span
              className="font-serif text-6xl sm:text-7xl lg:text-8xl text-[#D66B4E]/30 leading-none select-none block mb-2 sm:mb-4 -mt-2 sm:-mt-4"
              aria-hidden="true"
            >
              “
            </span>

            {/* Featured Quote */}
            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#FAF7F2] font-normal leading-relaxed italic mb-8 sm:mb-10 max-w-4xl">
              {featuredReview.quote}
            </blockquote>

            {/* Author Attribution & Branch Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-semibold text-stone-200">
                  <CheckCircle className="w-4 h-4 text-[#D66B4E]" />
                </div>
                <div>
                  <cite className="not-italic text-sm sm:text-base font-semibold text-white block">
                    — {featuredReview.author}
                  </cite>
                  <span className="text-[11px] text-stone-400 font-normal">
                    Verified Clinic Patient
                  </span>
                </div>
              </div>

              {featuredReview.branch && (
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-stone-300 w-fit">
                  <MapPin className="w-3.5 h-3.5 text-[#D66B4E]" />
                  <span>{featuredReview.branch} Branch</span>
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
              className="bg-white/[0.02] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:bg-white/[0.035] transition-colors"
            >
              <div>
                {/* 5 Stars */}
                <div
                  className="flex items-center gap-1 text-[#E5A93C] mb-4"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                  ))}
                </div>

                {/* Review Excerpt */}
                <blockquote className="text-sm sm:text-base text-stone-200 leading-relaxed italic font-normal mb-6">
                  “{review.quote}”
                </blockquote>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <cite className="not-italic font-semibold text-white">
                  — {review.author}
                </cite>
                {review.branch && (
                  <span className="text-stone-400 font-medium flex items-center gap-1 text-[11px]">
                    <MapPin className="w-3 h-3 text-[#D66B4E]" />
                    {review.branch}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* ═══════════ 4. SECTION FOOTER & UNDERSTATED CTA ═══════════ */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex flex-col items-center text-center">
          
          <a
            href="#patient-reviews"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white hover:text-[#D66B4E] transition-colors px-6 py-3 rounded-full border border-white/20 hover:border-[#D66B4E] bg-white/[0.03]"
          >
            <span>Read More Reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
          </a>

          {/* Subtle Branch Footprint */}
          <span className="text-xs text-stone-400/90 tracking-wide font-normal mt-4 sm:mt-5">
            Patient experiences across Mira Road · Vasai · Surat
          </span>

        </div>

      </div>
    </section>
  )
}
