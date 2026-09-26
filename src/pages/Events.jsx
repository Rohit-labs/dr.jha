import React from 'react'
import { Link } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import { events } from '../data/events'
import { Calendar, ArrowRight, Bell, Sparkles } from 'lucide-react'

export default function Events() {
  return (
    <PageContainer>
      <SEO
        title="Events & Workshops | Dr. Jha Physiotherapy & Acupuncture"
        description="Stay connected with upcoming events, workshops and activities from Dr. Jha Centre across Mira Road, Vasai, and Surat."
        canonicalUrl="https://drjhaphysio.in/events"
      />

      <div className="w-full py-8 sm:py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Events' }]} />

          {/* ═══════════ PAGE HEADER ═══════════ */}
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064C3B]/10 text-[#064C3B] text-xs font-bold tracking-[0.16em] uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Community &amp; Learning</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#26332F] leading-[1.12] mb-4">
              Events
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              Stay connected with upcoming events, workshops and activities from Dr. Jha.
            </p>
          </div>

          {/* ═══════════ EVENTS CONTENT / EMPTY STATE ═══════════ */}
          {events.length === 0 ? (
            <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[32px] p-8 sm:p-14 lg:p-16 text-center max-w-2xl mx-auto shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-[#F4F2EC] text-[#064C3B] flex items-center justify-center mx-auto mb-5 shadow-2xs">
                <Calendar className="w-7 h-7 stroke-[1.8]" />
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#26332F] mb-3">
                Upcoming events will appear here.
              </h2>

              <p className="text-sm text-stone-600 leading-relaxed max-w-md mx-auto mb-8 font-normal">
                We organize clinical wellness workshops, posture awareness sessions, and patient education activities. Check back soon for upcoming dates and schedules.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/conditions"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] transition-colors shadow-xs"
                >
                  <span>Explore Conditions We Treat</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-stone-800 bg-white border border-[#DCDDD5] hover:border-stone-400 hover:bg-[#F8F6F0] transition-colors"
                >
                  <span>About Our Practice</span>
                </Link>
              </div>
            </div>
          ) : (
            /* Future-ready events list rendering */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {events.map((event) => (
                <article
                  key={event.slug}
                  className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#064C3B] block mb-2">
                      {event.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#26332F] mb-2">
                      {event.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {event.shortDescription || event.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </div>
    </PageContainer>
  )
}
