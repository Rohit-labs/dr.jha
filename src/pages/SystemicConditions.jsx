import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import CopyDirectLink from '../components/conditions/CopyDirectLink'
import { createConditionPillarSchema } from '../utils/seoStructuredData'
import { useBranchContext } from '../context/BranchContext'
import {
  Activity,
  CheckCircle2,
  AlertCircle,
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  ChevronRight,
  HeartPulse,
  Wind,
  Flower2,
  Apple
} from 'lucide-react'

export default function SystemicConditions() {
  const { currentBranch } = useBranchContext()
  const location = useLocation()
  const [highlightedId, setHighlightedId] = useState(null)

  // Branch contact details
  const phone = currentBranch?.phone || '+919146036559'
  const cleanPhone = phone.replace(/[^0-9+]/g, '')
  const whatsapp = currentBranch?.whatsapp || '9146036559'

  // Smooth scrolling with offset and temporary highlight
  const scrollToSection = (id) => {
    setHighlightedId(id)
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -90
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setTimeout(() => {
      setHighlightedId((curr) => (curr === id ? null : curr))
    }, 3200)
  }

  // Detect hash on mount or when location.hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const timer = setTimeout(() => {
        scrollToSection(id)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [location.hash])

  // The 8 Clinical Categories
  const sections = [
    {
      id: 'womens-health',
      number: '01',
      title: 'Women’s Health Conditions',
      tagline: 'Pelvic health, postnatal recovery & hormonal musculoskeletal support',
      description:
        'Individualized supportive care combining gentle pelvic floor retraining, core stabilization, and medical acupuncture to address pelvic discomfort, menstrual pain, and postpartum biomechanics.',
      items: [
        'Menstrual Pain / Dysmenorrhea',
        'Premenstrual Syndrome (PMS)',
        'Polycystic Ovary Syndrome (PCOS) — supportive care',
        'Menstrual Irregularities — supportive care',
        'Pelvic Pain',
        'Pregnancy-Related Musculoskeletal Pain',
        'Postpartum Musculoskeletal Rehabilitation',
        'Postnatal Back Pain',
        'Pelvic Floor Dysfunction',
        'Urinary Incontinence — physiotherapy management',
        'Menopausal Musculoskeletal Symptoms'
      ],
      highlights: [
        'Pelvic floor biofeedback & tone balance',
        'Diastasis recti safe core reactivation',
        'Acupuncture for neuro-endocrine regulation'
      ]
    },
    {
      id: 'respiratory-pulmonary',
      number: '02',
      title: 'Respiratory & Pulmonary Conditions',
      tagline: 'Breathing pattern retraining, lung volume & exercise tolerance',
      description:
        'Specialized chest physiotherapy and pulmonary rehabilitation designed to clear secretions, rebuild diaphragmatic excursion, and overcome breathlessness.',
      items: [
        'Asthma — supportive respiratory care',
        'Chronic Obstructive Pulmonary Disease (COPD)',
        'Chronic Bronchitis — rehabilitation support',
        'Pulmonary Rehabilitation',
        'Post-COVID Respiratory Rehabilitation',
        'Respiratory Muscle Weakness',
        'Breathing Pattern Disorders',
        'Reduced Exercise Tolerance',
        'Respiratory Deconditioning',
        'Chest Physiotherapy Requirements'
      ],
      highlights: [
        'Diaphragmatic & pursed-lip breathing re-education',
        'Inspiratory muscle training (IMT)',
        'Graded aerobic endurance protocols'
      ]
    },
    {
      id: 'cardiac-rehab',
      number: '03',
      title: 'Cardiac & Cardiovascular Rehabilitation',
      tagline: 'Monitored conditioning & progressive endurance restoration',
      description:
        'Phase-wise physical rehabilitation tailored to safely rebuild cardiovascular reserve, functional independence, and physical confidence following cardiac events.',
      items: [
        'Cardiac Rehabilitation (Phase II / III supportive)',
        'Post-Heart Attack (MI) Rehabilitation',
        'Post-CABG (Bypass Surgery) Rehabilitation',
        'Post-Angioplasty Rehabilitation',
        'Cardiovascular Deconditioning',
        'Reduced Exercise Tolerance',
        'Cardiac-Related Functional Weakness'
      ],
      highlights: [
        'Target heart rate & MET-based exercise pacing',
        'Sternal precautions adherence training',
        'Continuous vital sign & fatigue monitoring'
      ]
    },
    {
      id: 'digestive-abdominal',
      number: '04',
      title: 'Digestive & Abdominal Conditions',
      tagline: 'Visceral motility support & autonomic nervous system balance',
      description:
        'Acupuncture-based supportive care and abdominal wall rehabilitation to modulate enteric nerve signaling, relieve muscular guarding, and support digestive transit.',
      items: [
        'Constipation (Functional / Chronic)',
        'Irritable Bowel Syndrome (IBS) — supportive management',
        'Bloating & Splanchnic Tension',
        'Indigestion / Dyspepsia',
        'Gas-Related Discomfort',
        'Functional Digestive Complaints',
        'Abdominal Musculoskeletal Pain'
      ],
      highlights: [
        'Abdominal trigger point release & manual visceral mobilization',
        'Electro-acupuncture for gut-brain axis modulation',
        'Stress-reduction breathing to tone parasympathetic vagal nerve'
      ]
    },
    {
      id: 'metabolic-lifestyle',
      number: '05',
      title: 'Metabolic & Lifestyle-Related Conditions',
      tagline: 'Insulin sensitivity, joint unloading & structured movement',
      description:
        'Personalized low-impact exercise therapy and acupuncture aimed at alleviating musculoskeletal consequences of metabolic disorders and physical inactivity.',
      items: [
        'Diabetes-Related Physical Complications',
        'Diabetic Neuropathy (Sensory loss & neuropathic pain)',
        'Obesity-Related Musculoskeletal Problems',
        'Metabolic Deconditioning',
        'General Physical Deconditioning',
        'Reduced Exercise Tolerance',
        'Lifestyle-Related Musculoskeletal Pain'
      ],
      highlights: [
        'Joint-preserving non-weight-bearing conditioning',
        'Peripheral sensory nerve stimulation',
        'Gradual physical capacity re-building'
      ]
    },
    {
      id: 'chronic-health',
      number: '06',
      title: 'General & Chronic Health Conditions',
      tagline: 'Fatigue management, restorative sleep & functional vitalization',
      description:
        'Gentle, restorative multimodal care to counter systemic deconditioning, persistent fatigue, sleep disruption, and age-related physical weakness.',
      items: [
        'Chronic Fatigue-Related Functional Difficulties',
        'General Weakness & Lethargy',
        'Chronic Pain Conditions',
        'Stress-Related Muscle Tension',
        'Sleep-Related Difficulties — supportive care',
        'Reduced Mobility & Transfer Difficulties',
        'Physical Deconditioning',
        'Age-Related Functional Decline',
        'Recovery Following Prolonged Illness'
      ],
      highlights: [
        'Energy conservation & activity pacing coaching',
        'Gentle somatic & restorative acupuncture',
        'Low-intensity active movement re-engagement'
      ]
    },
    {
      id: 'autoimmune-rheumatological',
      number: '07',
      title: 'Autoimmune & Rheumatological Conditions',
      tagline: 'Supportive symptom management & functional joint preservation',
      description:
        'Complementary physical therapy and acupuncture protocols crafted to soothe hyper-sensitized pain pathways, maintain spinal elasticity, and combat stiffness.',
      items: [
        'Rheumatoid Arthritis — supportive rehabilitation',
        'Ankylosing Spondylitis — supportive rehabilitation',
        'Fibromyalgia Syndrome',
        'Systemic Lupus Erythematosus (SLE) — supportive rehabilitation',
        'Sjögren’s Syndrome — supportive care',
        'Chronic Fatigue-Related Conditions',
        'Other Rheumatological Conditions — rehabilitation support'
      ],
      highlights: [
        'Gentle passive spinal mobility & posture maintenance',
        'Central sensitization pain modulation',
        'Non-aggravating isometric exercise progression'
      ]
    },
    {
      id: 'post-illness-recovery',
      number: '08',
      title: 'Post-Illness & Post-Hospitalization Rehabilitation',
      tagline: 'Rebuilding independence after severe medical events',
      description:
        'Focused recovery protocols for individuals recovering from intensive care, severe viral infections, prolonged bed rest, or prolonged catabolic states.',
      items: [
        'Post-COVID Rehabilitation (Brain fog, fatigue, weakness)',
        'Post-ICU Rehabilitation (ICU-acquired weakness)',
        'Post-Hospitalization Weakness',
        'Post-Prolonged Bed Rest Deconditioning',
        'Recovery After Major Illness',
        'General Mobility and Functional Recovery'
      ],
      highlights: [
        'Gradual postural challenge (Sit-to-stand progression)',
        'Bed-mobility and transfer independence training',
        'Peripheral muscle re-activation & lung expansion'
      ]
    }
  ]

  return (
    <PageContainer>
      <SEO
        title="Women's Health, Respiratory Rehab & Systemic Care | Dr. Jha (Mira Road, Vasai, Surat)"
        description="Integrative physiotherapy & acupuncture supportive care for PCOS, pelvic floor rehab, asthma, COPD, chronic fatigue & metabolic health across Mira Road, Vasai, and Surat."
        keywords="PCOS supportive acupuncture mira road, pelvic floor physiotherapy vasai, asthma respiratory rehabilitation surat, chronic fatigue syndrome clinic, post icu physiotherapy mumbai, dr jha clinic"
        canonicalUrl="https://drjhaphysiotherapy.com/systemic-conditions"
        structuredData={createConditionPillarSchema({
          title: "Systemic & General Health Conditions | Dr. Jha Centre",
          description: "Integrated physiotherapy and acupuncture supportive care for women's health, respiratory rehab, cardiac recovery, metabolic deconditioning, and chronic fatigue across Mira Road, Vasai, and Surat.",
          url: "https://drjhaphysiotherapy.com/systemic-conditions",
          sections
        })}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Conditions', href: '/conditions' },
            { label: 'Systemic & General Health' }
          ]}
        />

        {/* ════════════════ HERO HEADER ════════════════ */}
        <div className="mt-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#064C3B] uppercase mb-3">
            <HeartPulse className="w-4 h-4 text-[#064C3B]" />
            <span>SYSTEMIC &amp; GENERAL HEALTH CONDITIONS</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-[1.14] max-w-4xl mb-6">
            Integrated Physiotherapy &amp; <br />
            <span className="italic font-normal text-[#064C3B]">
              Acupuncture-Based Supportive Care
            </span>
          </h1>

          <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] p-6 sm:p-9 shadow-sm relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                At <strong className="text-stone-900 font-semibold">Dr. Jha Physiotherapy &amp; Acupuncture Centre</strong>, we provide individualized physiotherapy and acupuncture-based supportive care for selected systemic and general health conditions.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Our clinical approach focuses on <span className="text-[#064C3B] font-semibold">symptom management</span>, <span className="text-[#064C3B] font-semibold">improving physical function</span>, <span className="text-[#064C3B] font-semibold">supporting recovery</span>, and <span className="text-[#064C3B] font-semibold">enhancing quality of life</span>, wherever appropriate.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={`tel:${cleanPhone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] shadow-md transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call for Health Consultation</span>
                </a>
                <a
                  href={`https://wa.me/${whatsapp}?text=${encodeURIComponent('Hello Dr. Jha Centre, I would like to inquire about supportive care for a systemic health condition.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#064C3B] bg-white border border-[#DCDDD5] hover:border-[#064C3B] hover:bg-[#F8F6F0] transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ════════════════ QUICK JUMP PILLS ════════════════ */}
        <div className="mb-12">
          <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-stone-400 mb-3">
            Quick Navigation — 8 Clinical Domains
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {sections.map((sec) => {
              const isActive = (highlightedId === sec.id) || (location.hash === `#${sec.id}`)
              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => {
                    scrollToSection(sec.id)
                    window.history.pushState(null, '', `#${sec.id}`)
                  }}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-[#064C3B] text-white border-[#064C3B] shadow-sm scale-105 ring-2 ring-[#064C3B]/20'
                      : 'bg-[#F4F2EC] text-stone-700 hover:bg-[#064C3B] hover:text-white border-stone-200/70 hover:scale-[1.02]'
                  }`}
                >
                  <span className={`text-[10px] font-mono ${isActive ? 'text-white/80' : 'opacity-60'}`}>
                    {sec.number}
                  </span>
                  <span>{sec.title.split('(')[0].split('&')[0]}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ════════════════ 8 CLINICAL CATEGORIES ════════════════ */}
        <div className="space-y-12 sm:space-y-16">
          {sections.map((sec) => {
            const isHighlighted = highlightedId === sec.id

            return (
              <section
                key={sec.id}
                id={sec.id}
                className={`scroll-mt-28 rounded-[32px] p-6 sm:p-9 lg:p-10 transition-all duration-700 relative ${
                  isHighlighted
                    ? 'bg-[#F7F5EE] border-2 border-[#064C3B] shadow-[0_16px_50px_rgba(6,76,59,0.18)] ring-4 ring-[#064C3B]/25 scale-[1.015]'
                    : 'bg-[#FCFBF7] border border-[#DCDDD5] shadow-xs hover:border-[#064C3B]/60 hover:shadow-[0_12px_36px_rgba(6,76,59,0.08)] hover:-translate-y-0.5'
                }`}
              >
                {/* Active Section Pulse Badge */}
                {isHighlighted && (
                  <div className="absolute top-4 right-5 sm:top-6 sm:right-7 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#064C3B] text-white shadow-md animate-pulse">
                    <Sparkles className="w-3 h-3 text-[#E5A500]" />
                    <span>Active Selection</span>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Intro / Summary */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                          isHighlighted ? 'bg-[#064C3B] text-white' : 'bg-[#064C3B]/10 text-[#064C3B]'
                        }`}>
                          {sec.number}
                        </span>
                        <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#064C3B]">
                          SUPPORTIVE CARE
                        </span>
                      </div>
                      <CopyDirectLink sectionId={sec.id} title={sec.title} />
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#26332F] leading-snug">
                      {sec.title}
                    </h2>

                    <p className="text-xs sm:text-sm font-medium text-[#B8583B]">
                      {sec.tagline}
                    </p>

                    <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
                      {sec.description}
                    </p>

                    {/* Highlights Pill Box */}
                    <div className="pt-2">
                      <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2">
                        Clinical Rehabilitation Focus:
                      </div>
                      <div className="space-y-1.5">
                        {sec.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#064C3B] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Items Grid */}
                  <div className="lg:col-span-7 bg-[#F4F2EC]/70 border border-stone-200/80 rounded-2xl p-5 sm:p-7">
                    <div className="text-xs font-bold text-[#26332F] uppercase tracking-wider mb-4 flex items-center justify-between border-b border-stone-200 pb-2.5">
                      <span>Conditions Managed in This Category</span>
                      <span className="text-[11px] font-normal text-stone-500">
                        {sec.items.length} Diagnoses
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {sec.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-white border border-stone-200/60 rounded-xl px-3.5 py-2.5 flex items-start gap-2.5 shadow-2xs hover:border-[#064C3B]/50 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#064C3B] mt-1.5 shrink-0" />
                          <span className="text-xs font-medium text-stone-800 leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[11px] text-stone-500">
                        Available at Mira Road, Vasai &amp; Surat centres.
                      </span>
                      <a
                        href={`tel:${cleanPhone}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#064C3B] hover:text-[#073D32]"
                      >
                        <span>Inquire for this condition</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </section>
            )
          })}
        </div>

        {/* ════════════════ THERAPEUTIC APPROACH ════════════════ */}
        <div className="mt-16 sm:mt-20 bg-[#073D32] text-white rounded-[32px] p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#E5A500] uppercase block mb-2">
              INTEGRATIVE MODALITIES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              How Physiotherapy &amp; Acupuncture Support Systemic Health
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Systemic conditions often present multifaceted challenges—fatigue, dysautonomia, muscular weakness, and restricted vital endurance. Combining graded physical therapy with acupuncture creates a holistic pathway toward functional resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-white/10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-[#E5A500]">
                <Activity className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">Targeted Physical Rehabilitation</h3>
              </div>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Respiratory Pacing &amp; IMT:</strong> Re-educating diaphragmatic excursion to optimize ventilatory efficiency.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Sub-Maximal Graded Conditioning:</strong> Gradually restoring exercise tolerance without precipitating post-exertional malaise.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Pelvic &amp; Core Biofeedback:</strong> Alleviating pregnancy-related incontinence and lumbopelvic strain.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-[#E5A500]">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">Clinical Medical Acupuncture</h3>
              </div>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Autonomic Nervous System Regulation:</strong> Enhancing parasympathetic tone to soothe irritable bowels, anxiety, and sleep deficits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Endocrine &amp; Pelvic Circulation:</strong> Stimulating localized microcirculation in menstrual and pelvic discomfort.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Central Pain Threshold Modulation:</strong> Elevating endorphin release in widespread chronic conditions like fibromyalgia.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ════════════════ MANDATORY CLINICAL NOTE & DISCLAIMER ════════════════ */}
        <div className="mt-12 bg-[#FAF7F2] border-2 border-stone-300/80 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start gap-3.5">
            <ShieldAlert className="w-6 h-6 text-[#B8583B] shrink-0 mt-0.5" />
            <div className="space-y-2 text-xs sm:text-[13px] text-stone-700 leading-relaxed">
              <span className="font-bold text-stone-900 uppercase tracking-wider block text-xs">
                Clinical Note &amp; Transparency:
              </span>
              <p>
                Systemic conditions require individualized assessment and, where necessary, coordination with the treating physician or relevant medical specialist. Physiotherapy and acupuncture may help manage selected symptoms and support functional recovery but do not replace medical diagnosis or treatment of underlying systemic diseases.
              </p>
            </div>
          </div>
        </div>

        {/* ════════════════ BOTTOM CONSULTATION CTA ════════════════ */}
        <div className="mt-14 text-center bg-[#FCFBF7] border border-[#DCDDD5] rounded-[32px] p-8 sm:p-12 shadow-xs">
          <span className="text-xs font-bold tracking-[0.2em] text-[#064C3B] uppercase block mb-3">
            EVIDENCE-BASED RECOVERY PLANS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#26332F] mb-4">
            Consult With Our Integrative Care Team
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Discuss your physical symptoms with our clinical team to explore how supportive physiotherapy and acupuncture can complement your recovery.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${cleanPhone}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] shadow-md transition-all active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us ({phone})</span>
            </a>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#064C3B] bg-white border border-[#DCDDD5] hover:border-[#064C3B] transition-all"
            >
              <span>View All 3 Clinic Locations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </PageContainer>
  )
}
