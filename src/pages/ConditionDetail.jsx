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
  MapPin,
  ShieldAlert,
  BookOpen,
  ExternalLink,
  Layers,
  Award,
  Microscope
} from 'lucide-react'

// Smart mapping for direct condition URLs -> Dedicated Pillar Section Anchor
const CONDITION_SLUG_MAP = {
  // Neurological
  'stroke': '/conditions/stroke-paralysis',
  'hemiplegia': '/conditions/stroke-paralysis',
  'paralysis': '/conditions/stroke-paralysis',
  'neurodegenerative': '/neurological-conditions#neurodegenerative',
  'facial-nerve': '/conditions/bells-palsy',
  'facial-palsy': '/conditions/bells-palsy',
  'ataxia': '/neurological-conditions#ataxia-balance',
  'ataxia-balance': '/neurological-conditions#ataxia-balance',
  'neuropathy': '/neurological-conditions#neuropathies',
  'neuropathies': '/neurological-conditions#neuropathies',
  'diabetic-neuropathy': '/neurological-conditions#neuropathies',
  'cerebral-palsy': '/neurological-conditions#cerebral-palsy',
  'functional-neurological': '/neurological-conditions#functional-neurological',

  // Orthopaedic
  'spine-back': '/conditions/back-pain',
  'slip-disc': '/conditions/sciatica',
  'cervical-spondylosis': '/conditions/neck-pain',
  'lumbar-spondylosis': '/conditions/back-pain',
  'shoulder': '/conditions/frozen-shoulder',
  'shoulder-pain': '/conditions/frozen-shoulder',
  'rotator-cuff': '/conditions/frozen-shoulder',
  'knee': '/conditions/knee-pain',
  'hip-pelvis': '/orthopaedic-conditions#hip-pelvis',
  'elbow-wrist-hand': '/conditions/tennis-elbow',
  'ankle-foot': '/conditions/plantar-fasciitis',
  'arthritis': '/conditions/knee-pain',
  'osteoarthritis': '/conditions/knee-pain',
  'post-surgical': '/orthopaedic-conditions#post-surgical',
  'postural-imbalances': '/orthopaedic-conditions#postural-imbalances',

  // Systemic
  'womens-health': '/systemic-conditions#womens-health',
  'pcos': '/systemic-conditions#womens-health',
  'pelvic-pain': '/systemic-conditions#womens-health',
  'respiratory-pulmonary': '/systemic-conditions#respiratory-pulmonary',
  'asthma': '/systemic-conditions#respiratory-pulmonary',
  'copd': '/systemic-conditions#respiratory-pulmonary',
  'cardiac-rehab': '/systemic-conditions#cardiac-rehab',
  'digestive-metabolic': '/systemic-conditions#digestive-metabolic',
  'ibs': '/systemic-conditions#digestive-metabolic',
  'metabolic-lifestyle': '/systemic-conditions#metabolic-lifestyle',
  'chronic-fatigue': '/systemic-conditions#chronic-fatigue',
  'fibromyalgia': '/systemic-conditions#chronic-fatigue',
  'autoimmune-support': '/systemic-conditions#autoimmune-support',
  'post-illness-icu': '/systemic-conditions#post-illness-icu',

  // Specialized
  'skin-hair': '/specialized-conditions#skin-hair',
  'acne': '/specialized-conditions#skin-hair',
  'hair-fall': '/specialized-conditions#skin-hair',
  'eye-ear-vestibular': '/conditions/vertigo',
  'tinnitus': '/specialized-conditions#eye-ear-vestibular',
  'aesthetic-acupuncture': '/specialized-conditions#aesthetic-acupuncture',
  'posture-ergonomics': '/specialized-conditions#posture-ergonomics',
  'general-wellness': '/specialized-conditions#general-wellness'
}

export default function ConditionDetail() {
  const { slug } = useParams()
  const condition = getConditionBySlug(slug)

  if (!condition) {
    const targetAnchor = CONDITION_SLUG_MAP[slug]
    if (targetAnchor) {
      return <Navigate to={targetAnchor} replace />
    }
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

  const medicalWebPageData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    'name': condition.name,
    'description': condition.metaDescription,
    'url': `https://drjhaphysiotherapy.com/conditions/${condition.slug}`,
    'about': {
      '@type': 'MedicalCondition',
      'name': condition.name,
      'alternateName': condition.medicalTerm,
      'signOrSymptom': condition.symptoms?.map((s) => ({ '@type': 'MedicalSignOrSymptom', 'name': s })),
      'possibleTreatment': condition.treatmentApproach?.map((t) => ({ '@type': 'MedicalTherapy', 'name': t }))
    }
  }

  const otherConditions = conditions.filter((c) => c.slug !== condition.slug).slice(0, 5)

  return (
    <PageContainer>
      <SEO
        title={condition.pageTitle}
        description={condition.metaDescription}
        canonicalUrl={`https://drjhaphysiotherapy.com/conditions/${condition.slug}`}
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [faqStructuredData, medicalWebPageData].filter(Boolean)
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Conditions Directory', href: '/conditions' },
            { label: condition.name }
          ]}
        />

        {/* ════════════════ PAGE HERO HEADER ════════════════ */}
        <div className="max-w-4xl mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#064C3B] uppercase bg-[#064C3B]/10 px-3 py-1 rounded-full">
              {condition.category}
            </span>
            {condition.medicalTerm && (
              <span className="text-[11px] font-mono text-stone-600 bg-[#F4F2EC] px-3 py-1 rounded-full border border-stone-200/70">
                {condition.medicalTerm}
              </span>
            )}
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>Evidence-Based &bull; Wikipedia / Clinical Consensus</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-[1.14] mb-4">
            {condition.name}
          </h1>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            {condition.shortDescription}
          </p>
        </div>

        {/* ════════════════ 2-COLUMN CLINICAL LAYOUT ════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Clinical Overview, Pathophysiology, Symptoms, Red Flags, Treatments, Sources, FAQs (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Medical Overview */}
            <article className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200/70 pb-3.5">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-[#064C3B]" />
                  <span>Medical Overview &amp; Clinical Definition</span>
                </h2>
                <span className="text-[11px] font-mono text-stone-400">Clinical Guide</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                {condition.overview}
              </p>
            </article>

            {/* 2. Pathophysiology & Disease Mechanism */}
            {condition.pathophysiology && (
              <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] flex items-center gap-2.5">
                  <Microscope className="w-5 h-5 text-[#064C3B]" />
                  <span>Pathophysiology &amp; Biomechanical Mechanism</span>
                </h2>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  {condition.pathophysiology}
                </p>
                {condition.classification && (
                  <div className="mt-4 p-4 rounded-2xl bg-[#F4F2EC] border border-stone-200 text-xs text-stone-700 leading-relaxed">
                    <span className="font-bold text-[#26332F] block mb-1">Clinical Classification &amp; Staging:</span>
                    {condition.classification}
                  </div>
                )}
              </div>
            )}

            {/* 3. Common Symptoms & Manifestations */}
            {condition.symptoms && (
              <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] flex items-center gap-2.5">
                  <Activity className="w-5 h-5 text-[#064C3B]" />
                  <span>Common Symptoms &amp; Diagnostic Signs</span>
                </h2>
                <ul className="space-y-3">
                  {condition.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                      <span className="w-2 h-2 rounded-full bg-[#064C3B] mt-2 shrink-0"></span>
                      <span className="leading-relaxed">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 4. Critical Red Flags & Urgent Warning (Patient Safety) */}
            {condition.redFlags && (
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-3.5">
                <h2 className="font-serif text-lg sm:text-xl font-bold text-amber-950 flex items-center gap-2.5">
                  <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0" />
                  <span>Critical Red Flags &amp; Triage Warnings</span>
                </h2>
                <p className="text-xs text-amber-900/80 leading-relaxed">
                  If you experience any of the following acute symptoms, seek immediate emergency medical evaluation prior to conservative therapy:
                </p>
                <ul className="space-y-2.5 pt-1">
                  {condition.redFlags.map((flag, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-amber-950 leading-relaxed font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span>
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 5. When to Seek Professional Physical Care */}
            {condition.whenToSeekHelp && (
              <div className="bg-[#F4F2EC] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] flex items-center gap-2.5">
                  <AlertCircle className="w-5 h-5 text-[#064C3B]" />
                  <span>When to Seek Clinical Evaluation</span>
                </h2>
                <ul className="space-y-3">
                  {condition.whenToSeekHelp.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#064C3B] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 6. Treatment Approach at Dr. Jha Centre */}
            {condition.treatmentApproach && (
              <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-5">
                <div className="flex items-center justify-between border-b border-stone-200/70 pb-3">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] flex items-center gap-2.5">
                    <Stethoscope className="w-5 h-5 text-[#064C3B]" />
                    <span>Evidence-Based Rehabilitation Pathway</span>
                  </h2>
                  <span className="text-[11px] font-mono text-[#064C3B] bg-[#064C3B]/10 px-2 py-0.5 rounded-md">
                    Multimodal Care
                  </span>
                </div>
                <div className="space-y-4">
                  {condition.treatmentApproach.map((item, idx) => {
                    const parts = item.split(':')
                    const hasTitle = parts.length > 1
                    const title = hasTitle ? parts[0] : null
                    const body = hasTitle ? parts.slice(1).join(':') : item

                    return (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-[#064C3B] shrink-0 mt-1" />
                        <div>
                          {title && <strong className="text-stone-900 font-semibold">{title}: </strong>}
                          <span className="leading-relaxed">{body}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* 7. Scientific Evidence & Research Summary */}
            {condition.clinicalEvidence && (
              <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] flex items-center gap-2.5">
                  <Layers className="w-5 h-5 text-[#064C3B]" />
                  <span>Clinical Evidence &amp; Research Summary</span>
                </h2>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                  {condition.clinicalEvidence}
                </p>
              </div>
            )}

            {/* 8. Verified Sources & Reliable Medical Literature */}
            {condition.reliableSources && condition.reliableSources.length > 0 && (
              <div className="bg-[#F4F2EC] border border-[#DCDDD5] rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-[#26332F] flex items-center gap-2.5">
                    <BookOpen className="w-5 h-5 text-[#064C3B]" />
                    <span>Verified Medical Literature &amp; Sources</span>
                  </h2>
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">
                    References
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  The clinical summaries, diagnostic criteria, and rehabilitation protocols on this page are synthesized from peer-reviewed medical journals, Wikipedia medical consensus, and international clinical guidelines:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {condition.reliableSources.map((src, idx) => (
                    <a
                      key={idx}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-2xl bg-white border border-stone-200/80 hover:border-[#064C3B] hover:shadow-xs transition-all flex items-center justify-between group"
                    >
                      <div className="pr-2">
                        <span className="text-[10px] font-bold text-[#064C3B] uppercase tracking-wider block">
                          {src.name}
                        </span>
                        <span className="text-xs font-semibold text-stone-800 group-hover:text-[#064C3B] transition-colors line-clamp-1">
                          {src.topic}
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#064C3B] shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* 9. FAQs */}
            {condition.faqs && (
              <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-5">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#064C3B]" />
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
            <div className="bg-[#073D32] text-white rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E5A500]">
                CLINICAL EVALUATION
              </span>
              <h3 className="font-serif text-2xl font-bold leading-tight">
                Consult for {condition.name}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Schedule an in-person assessment with our specialized physiotherapy and acupuncture team across Mira Road, Vasai, or Surat.
              </p>
              <div className="pt-2 space-y-2.5">
                <a
                  href="tel:+919146036559"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#043328] border border-white/20 active:scale-[0.98] transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call For Assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/9146036559?text=${encodeURIComponent(`Hello Dr. Jha Centre, I would like to book a consultation regarding ${condition.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#073D32] bg-white hover:bg-stone-100 transition-all shadow-md"
                >
                  <span>WhatsApp Appointment</span>
                </a>
              </div>
            </div>

            {/* Related Treatments */}
            {condition.relatedTreatments && (
              <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 shadow-xs">
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-stone-400 block mb-3">
                  Recommended Treatments
                </span>
                <div className="space-y-2.5">
                  {condition.relatedTreatments.map((t) => (
                    <Link
                      key={t.slug}
                      to={`/treatments/${t.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F4F2EC] transition-colors group"
                    >
                      <span className="text-xs font-semibold text-stone-800 group-hover:text-[#064C3B]">
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
              <div className="bg-[#F4F2EC] border border-[#DCDDD5] rounded-3xl p-6 shadow-xs">
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-stone-400 block mb-3">
                  Available Across Branches
                </span>
                <div className="space-y-2">
                  {condition.relatedBranches.map((b) => (
                    <Link
                      key={b.slug}
                      to={`/${b.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-stone-200/60 hover:border-stone-400 transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#064C3B]" />
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

            {/* Other Conditions Directory */}
            <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-stone-400">
                  Other Clinical Conditions
                </span>
                <Link to="/conditions" className="text-[11px] font-semibold text-[#064C3B] hover:underline">
                  View All &rarr;
                </Link>
              </div>
              <div className="space-y-2">
                {otherConditions.map((oc) => (
                  <Link
                    key={oc.slug}
                    to={`/conditions/${oc.slug}`}
                    className="flex items-center justify-between text-xs font-medium text-stone-700 hover:text-[#064C3B] py-1.5 border-b border-stone-100 last:border-0 group"
                  >
                    <span>{oc.name}</span>
                    <ArrowRight className="w-3 h-3 text-stone-300 group-hover:text-[#064C3B] group-hover:translate-x-0.5 transition-all" />
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
