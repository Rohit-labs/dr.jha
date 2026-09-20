import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import { getCaseStudyBySlug, caseStudies } from '../data/caseStudies'
import {
  Activity,
  ClipboardList,
  HeartHandshake,
  TrendingUp,
  Phone,
  ArrowRight,
  Quote,
  ShieldCheck
} from 'lucide-react'

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const cs = getCaseStudyBySlug(slug)

  if (!cs) {
    return <Navigate to="/case-studies" replace />
  }

  const otherCases = caseStudies.filter((c) => c.slug !== cs.slug)

  return (
    <PageContainer>
      <SEO
        title={cs.pageTitle}
        description={cs.metaDescription}
        canonicalUrl={`https://drjhaphysiotherapy.com/case-studies/${cs.slug}`}
        ogImage={cs.image}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Case Studies', href: '/case-studies' },
            { label: cs.title }
          ]}
        />

        {/* Header */}
        <header className="mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#064C3B] uppercase block mb-3">
            {cs.category} • CLINICAL CASE SUMMARY
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-tight mb-5">
            {cs.title}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            {cs.summary}
          </p>
        </header>

        {/* Image */}
        {cs.image && (
          <div className="w-full h-72 sm:h-96 rounded-3xl overflow-hidden mb-12 shadow-sm bg-stone-100">
            <img
              src={cs.image}
              alt={cs.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        )}

        {/* 4 Clinical Milestones */}
        <div className="space-y-6">
          <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2.5 text-[#064C3B]">
              <Activity className="w-5 h-5" />
              <span className="text-xs font-bold tracking-wider uppercase">01 • The Challenge</span>
            </div>
            <h2 className="font-serif text-xl font-bold text-stone-900">Baseline Presentation</h2>
            <p className="text-sm text-stone-700 leading-relaxed font-normal">{cs.challenge}</p>
          </div>

          <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2.5 text-[#064C3B]">
              <ClipboardList className="w-5 h-5" />
              <span className="text-xs font-bold tracking-wider uppercase">02 • Assessment</span>
            </div>
            <h2 className="font-serif text-xl font-bold text-stone-900">Clinical Evaluation</h2>
            <p className="text-sm text-stone-700 leading-relaxed font-normal">{cs.assessment}</p>
          </div>

          <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2.5 text-[#064C3B]">
              <HeartHandshake className="w-5 h-5" />
              <span className="text-xs font-bold tracking-wider uppercase">03 • Care Plan</span>
            </div>
            <h2 className="font-serif text-xl font-bold text-stone-900">Treatment Approach</h2>
            <p className="text-sm text-stone-700 leading-relaxed font-normal">{cs.treatment}</p>
          </div>

          <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-2.5 text-[#064C3B]">
              <TrendingUp className="w-5 h-5" />
              <span className="text-xs font-bold tracking-wider uppercase">04 • Outcome &amp; Progress</span>
            </div>
            <h2 className="font-serif text-xl font-bold text-stone-900">Functional Milestone</h2>
            <p className="text-sm text-stone-700 leading-relaxed font-normal">{cs.progress}</p>
          </div>
        </div>

        {/* Testimonial Reflection */}
        {cs.testimonial && (
          <div className="my-10 p-7 sm:p-9 rounded-3xl bg-[#F4F2EC] border border-[#DCDDD5] text-center space-y-3">
            <p className="font-serif italic text-lg sm:text-xl text-stone-800 leading-snug">
              {cs.testimonial}
            </p>
            <span className="block text-xs font-semibold text-stone-500">
              {cs.author}
            </span>
          </div>
        )}

        {/* Disclaimer */}
        <p className="text-[11px] text-stone-400 italic text-center max-w-xl mx-auto my-8">
          *Note: Every patient diagnosis and physiology is unique. Case studies demonstrate clinical approach and progression rather than guaranteed identical outcomes.
        </p>

        {/* Consultation Callout */}
        <div className="mt-8 p-7 sm:p-9 rounded-3xl bg-[#073D32] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="font-serif text-2xl font-bold">Have a similar physical complaint?</h3>
            <p className="text-xs text-stone-300 mt-1 max-w-md">
              Schedule an evaluation with our physical therapy team at our Mira Road, Vasai, or Surat clinics.
            </p>
          </div>
          <a
            href="tel:+919146036559"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#043328] border border-white/20 shrink-0 shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>Call Us for Appointment</span>
          </a>
        </div>

        {/* Other Case Studies */}
        <div className="mt-14 pt-8 border-t border-stone-200">
          <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-stone-400 block mb-4">
            More Patient Journeys
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherCases.map((oc) => (
              <Link
                key={oc.slug}
                to={`/case-studies/${oc.slug}`}
                className="p-5 rounded-2xl bg-[#FCFBF7] border border-[#DCDDD5] hover:border-stone-400 transition-colors block group"
              >
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#064C3B] block mb-1">
                  {oc.category}
                </span>
                <strong className="font-serif text-base font-bold text-stone-900 group-hover:text-[#064C3B] block mb-1 leading-snug">
                  {oc.title}
                </strong>
                <span className="text-xs text-stone-500 line-clamp-2">
                  {oc.summary}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </PageContainer>
  )
}
