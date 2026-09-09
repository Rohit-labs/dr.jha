import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import { getConditionBySlug, conditions } from '../data/conditions'
import {
  Activity,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Phone,
  ArrowRight,
  Stethoscope,
  MapPin
} from 'lucide-react'

export default function ConditionDetail() {
  const { slug } = useParams()
  const condition = getConditionBySlug(slug)

  if (!condition) {
    return <Navigate to="/conditions" replace />
  }

  const faqStructuredData = condition.faqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': condition.faqs.map((faq) => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      }
    : null

  const otherConditions = conditions.filter((c) => c.slug !== condition.slug).slice(0, 4)

  return (
    <PageContainer>
      <SEO
        title={condition.pageTitle}
        description={condition.metaDescription}
        canonicalUrl={`https://drjhaphysiotherapy.com/conditions/${condition.slug}`}
        structuredData={faqStructuredData}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Conditions', href: '/conditions' },
            { label: condition.name }
          ]}
        />

        {/* Page Hero Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#A8482D] uppercase block mb-3">
            {condition.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1A] leading-[1.15] mb-4">
            {condition.name}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            {condition.shortDescription}
          </p>
        </div>

        {/* 2-Column Clinical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Clinical Overview, Symptoms, When to Seek Help, FAQs (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview */}
            <article className="bg-white border border-[#E8E2D8] rounded-3xl p-6 sm:p-9 shadow-xs space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1C1A]">
                Understanding the Condition
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed font-normal">
                {condition.overview}
              </p>
            </article>

            {/* Common Symptoms */}
            {condition.symptoms && (
              <div className="bg-white border border-[#E8E2D8] rounded-3xl p-6 sm:p-9 shadow-xs space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1C1A] flex items-center gap-2.5">
                  <Activity className="w-5 h-5 text-[#A8482D]" />
                  <span>Common Symptoms</span>
                </h2>
                <ul className="space-y-3">
                  {condition.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A8482D] mt-2 shrink-0"></span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* When to Seek Professional Care */}
            {condition.whenToSeekHelp && (
              <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-3xl p-6 sm:p-9 shadow-xs space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1C1A] flex items-center gap-2.5">
                  <AlertCircle className="w-5 h-5 text-[#B64D2E]" />
                  <span>When to Seek Professional Evaluation</span>
                </h2>
                <ul className="space-y-3">
                  {condition.whenToSeekHelp.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#3A5A40] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Treatment Approach at Dr. Jha Centre */}
            {condition.treatmentApproach && (
              <div className="bg-white border border-[#E8E2D8] rounded-3xl p-6 sm:p-9 shadow-xs space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1C1A] flex items-center gap-2.5">
                  <Stethoscope className="w-5 h-5 text-[#123F32]" />
                  <span>How We Approach Care</span>
                </h2>
                <ul className="space-y-3">
                  {condition.treatmentApproach.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#123F32] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQs */}
            {condition.faqs && (
              <div className="bg-white border border-[#E8E2D8] rounded-3xl p-6 sm:p-9 shadow-xs space-y-5">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1C1A] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#3A5A40]" />
                  <span>Frequently Asked Questions</span>
                </h2>
                <div className="space-y-4">
                  {condition.faqs.map((faq, idx) => (
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

          {/* Right Column: Appointment Booking & Related Navigation (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Consultation CTA Card */}
            <div className="bg-[#123F32] text-white rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D66B4E]">
                Personalized Care
              </span>
              <h3 className="font-serif text-2xl font-bold leading-tight">
                Consult for {condition.name}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Schedule a clinical assessment with our physiotherapy and acupuncture team to receive a structured, evidence-based recovery plan.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+919820012345"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#A8482D] hover:bg-[#933D25] active:scale-[0.98] transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us for Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Related Treatments */}
            {condition.relatedTreatments && (
              <div className="bg-white border border-[#E8E2D8] rounded-3xl p-6 shadow-xs">
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-stone-400 block mb-3">
                  Recommended Treatments
                </span>
                <div className="space-y-2.5">
                  {condition.relatedTreatments.map((t) => (
                    <Link
                      key={t.slug}
                      to={`/treatments/${t.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors group"
                    >
                      <span className="text-xs font-semibold text-stone-800 group-hover:text-[#A8482D]">
                        {t.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Nearest Physical Clinics */}
            {condition.relatedBranches && (
              <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-3xl p-6 shadow-xs">
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-stone-400 block mb-3">
                  Available Across Branches
                </span>
                <div className="space-y-2">
                  {condition.relatedBranches.map((b) => (
                    <Link
                      key={b.slug}
                      to={`/branches/${b.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-stone-200/60 hover:border-stone-400 transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#3A5A40]" />
                        <span className="text-xs font-semibold text-stone-900">
                          {b.name} Clinic
                        </span>
                      </div>
                      <span className="text-xs text-stone-400 group-hover:translate-x-0.5 transition-transform">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Other Conditions */}
            <div className="bg-white border border-[#E8E2D8] rounded-3xl p-6 shadow-xs">
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-stone-400 block mb-3">
                Other Conditions We Treat
              </span>
              <div className="space-y-2">
                {otherConditions.map((oc) => (
                  <Link
                    key={oc.slug}
                    to={`/conditions/${oc.slug}`}
                    className="block text-xs font-medium text-stone-700 hover:text-[#A8482D] py-1 border-b border-stone-100 last:border-0"
                  >
                    {oc.name}
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
