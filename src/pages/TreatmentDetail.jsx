import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import { getTreatmentBySlug, treatments } from '../data/treatments'
import {
  CheckCircle2,
  Phone,
  ArrowRight,
  HelpCircle,
  Sparkles,
  ShieldCheck
} from 'lucide-react'

export default function TreatmentDetail() {
  const { slug } = useParams()
  const treatment = getTreatmentBySlug(slug)

  if (!treatment) {
    return <Navigate to="/treatments" replace />
  }

  const otherTreatments = treatments.filter((t) => t.slug !== treatment.slug)

  return (
    <PageContainer>
      <SEO
        title={treatment.pageTitle}
        description={treatment.metaDescription}
        canonicalUrl={`https://drjhaphysiotherapy.com/treatments/${treatment.slug}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Treatments', href: '/treatments' },
            { label: treatment.name }
          ]}
        />

        {/* Page Hero Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#064C3B] uppercase block mb-3">
            {treatment.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-[1.15] mb-4">
            {treatment.name}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            {treatment.shortDescription}
          </p>
        </div>

        {/* 2-Column Clinical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview */}
            <article className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F]">
                Clinical Approach &amp; Overview
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                {treatment.overview}
              </p>
            </article>

            {/* Key Clinical Benefits */}
            {treatment.benefits && (
              <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#064C3B]" />
                  <span>Key Clinical Benefits</span>
                </h2>
                <ul className="space-y-3">
                  {treatment.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#064C3B] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What to Expect */}
            {treatment.whatToExpect && (
              <div className="bg-[#F4F2EC] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#064C3B]" />
                  <span>What to Expect During Your Session</span>
                </h2>
                <ul className="space-y-3">
                  {treatment.whatToExpect.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#064C3B] mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQs */}
            {treatment.faqs && (
              <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-5">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#064C3B]" />
                  <span>Treatment FAQs</span>
                </h2>
                <div className="space-y-4">
                  {treatment.faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-stone-100 pb-4 last:border-0 last:pb-0">
                      <h3 className="text-xs sm:text-sm font-bold text-stone-900 mb-1.5">
                        {faq.question}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Appointment Booking Box */}
            <div className="bg-[#073D32] text-white rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E5A500]">
                Clinical Service
              </span>
              <h3 className="font-serif text-2xl font-bold leading-tight">
                Experience {treatment.name}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Consult with our experienced physiotherapists and acupuncture specialists to determine if this modality is ideal for your recovery.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+919146036559"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#043328] border border-white/20 active:scale-[0.98] transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us for Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Conditions Commonly Treated with this Modality */}
            {treatment.conditionsTreated && (
              <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 shadow-xs">
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-stone-400 block mb-3">
                  Conditions Addressed
                </span>
                <div className="space-y-2">
                  {treatment.conditionsTreated.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/conditions/${c.slug}`}
                      className="flex items-center justify-between p-2 rounded-xl hover:bg-[#F4F2EC] transition-colors group"
                    >
                      <span className="text-xs font-semibold text-stone-800 group-hover:text-[#064C3B]">
                        {c.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Other Treatments */}
            <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 shadow-xs">
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-stone-400 block mb-3">
                Other Treatment Modalities
              </span>
              <div className="space-y-2">
                {otherTreatments.map((ot) => (
                  <Link
                    key={ot.slug}
                    to={`/treatments/${ot.slug}`}
                    className="block text-xs font-medium text-stone-700 hover:text-[#064C3B] py-1 border-b border-stone-100 last:border-0"
                  >
                    {ot.name}
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </PageContainer>
  )
}
