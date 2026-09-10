import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Activity, Sparkles, Shield, ChevronRight } from 'lucide-react'
import { conditions } from '../../data/conditions'

export default function ConditionDiscovery() {
  // Select the 6 core conditions for the homepage discovery
  const featuredSlugs = [
    'back-pain',
    'sciatica',
    'knee-pain',
    'neck-pain',
    'frozen-shoulder',
    'sports-injuries',
  ]

  const featuredConditions = featuredSlugs
    .map((slug) => conditions.find((c) => c.slug === slug))
    .filter(Boolean)

  return (
    <section className="w-full bg-[#F8F6F0] pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-24 font-sans antialiased text-[#26332F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ═══════════ SECTION HEADING ═══════════ */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.2em] text-[#064C3B] uppercase font-semibold mb-3">
            <span className="w-8 h-[1px] bg-[#064C3B]/40"></span>
            WHAT WE HELP WITH
            <span className="w-8 h-[1px] bg-[#064C3B]/40"></span>
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#26332F] leading-[1.12]">
            Targeted care for <br />
            <span className="italic font-normal text-[#064C3B]">common and complex conditions.</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto mt-4 leading-relaxed font-normal">
            Whether addressing acute spinal discomfort, nerve impingement, or recovering from athletic strain, our personalized clinical protocols aim for lasting functional restoration.
          </p>
        </div>

        {/* ═══════════ 6 CORE CONDITIONS GRID ═══════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredConditions.map((condition) => (
            <div
              key={condition.slug}
              className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#064C3B]/40 hover:shadow-[0_8px_30px_rgba(6,76,59,0.06)] group"
            >
              <div>
                {/* Category Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#064C3B]/5 text-[#064C3B] border border-[#064C3B]/10">
                    {condition.category || 'PAIN & MOBILITY'}
                  </span>
                  <span className="text-[11px] font-medium text-stone-400">
                    Evidence-Based
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] leading-snug mb-3 group-hover:text-[#064C3B] transition-colors">
                  <Link to={`/conditions/${condition.slug}`}>
                    {condition.name}
                  </Link>
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                  {condition.shortDescription}
                </p>
              </div>

              {/* Action Link at Bottom */}
              <div className="pt-6 mt-6 border-t border-stone-200/70 flex items-center justify-between">
                <Link
                  to={`/conditions/${condition.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#064C3B] group-hover:text-[#073D32] transition-colors"
                >
                  <span>Learn more &amp; treatment</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="w-8 h-8 rounded-full bg-[#F4F2EC] flex items-center justify-center text-[#064C3B] opacity-80 group-hover:opacity-100 group-hover:bg-[#064C3B] group-hover:text-white transition-all">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ═══════════ EXPLORE ALL CONDITIONS CTA ═══════════ */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            to="/conditions"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#064C3B] bg-white border border-[#DCDDD5] hover:border-[#064C3B] hover:bg-[#F8F6F0] transition-all shadow-xs active:scale-[0.98]"
          >
            <span>Explore All Conditions &amp; Symptoms</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
