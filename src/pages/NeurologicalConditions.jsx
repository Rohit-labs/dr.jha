import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import { createConditionPillarSchema } from '../utils/seoStructuredData'
import { useBranchContext } from '../context/BranchContext'
import {
  Brain,
  Activity,
  CheckCircle2,
  AlertCircle,
  Phone,
  MessageSquare,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  HeartPulse,
  Award,
  ChevronRight
} from 'lucide-react'

export default function NeurologicalConditions() {
  const { currentBranch } = useBranchContext()
  const location = useLocation()
  const [highlightedId, setHighlightedId] = useState(null)

  // Use branch phone or fallback to Mira Road
  const phone = currentBranch?.phone || '+919146036559'
  const cleanPhone = phone.replace(/[^0-9+]/g, '')
  const whatsapp = currentBranch?.whatsapp || '9146036559'

  // Smooth scrolling with offset and temporary highlight
  const scrollToSection = (id) => {
    setHighlightedId(id)
    const el = document.getElementById(id)
    if (el) {
      const yOffset = -90 // offset to account for sticky navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    // Highlight stays active for 3 seconds then fades smoothly
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

  // The 7 Clinical Categories
  const sections = [
    {
      id: 'stroke-paralysis',
      number: '01',
      title: 'Stroke & Paralysis Rehabilitation',
      tagline: 'Comprehensive neuro-motor recovery & functional re-education',
      description:
        'Focused multidisciplinary rehabilitation for post-stroke survivors and central nervous system injuries, targeting neuroplasticity, mobility restoration, and spasticity modulation.',
      items: [
        'Stroke / Cerebrovascular Accident (CVA)',
        'Hemiplegia (One-sided paralysis)',
        'Hemiparesis (One-sided motor weakness)',
        'Paraplegia (Lower body paralysis)',
        'Quadriplegia / Tetraplegia',
        'Spinal Cord Injury Rehabilitation',
        'Traumatic Brain Injury (TBI) Rehabilitation',
        'Post-Stroke Spasticity & Muscle Rigidity',
        'Post-Stroke Balance & Gait Disorders'
      ],
      highlights: [
        'Task-oriented motor retraining',
        'Early mobilization & posture stabilization',
        'Acupuncture for neural stimulation'
      ]
    },
    {
      id: 'neurodegenerative',
      number: '02',
      title: 'Neurodegenerative Conditions',
      tagline: 'Preserving motor function, balance & independence',
      description:
        'Supportive therapy designed to maintain muscle tone, slow functional decline, manage tremors, and enhance safety in transfers and ambulation.',
      items: [
        'Parkinson’s Disease (PD)',
        'Multiple Sclerosis (MS)',
        'Motor Neuron Disease (MND)',
        'Amyotrophic Lateral Sclerosis (ALS)',
        'Progressive Supranuclear Palsy (PSP)',
        'Multiple System Atrophy (MSA)',
        'Huntington’s Disease',
        'Dystonia (Focal & Generalized)',
        'Essential Tremor'
      ],
      highlights: [
        'Rhythmic cueing & gait recalibration',
        'Rigidity release & flexibility maintenance',
        'Fall prevention protocols'
      ]
    },
    {
      id: 'cranial-nerve',
      number: '03',
      title: 'Bulbar, Facial & Cranial Nerve Disorders',
      tagline: 'Facial nerve activation & bulbar supportive therapy',
      description:
        'Targeted electro-acupuncture and specialized neuro-muscular re-education to re-engage facial symmetry, nerve conduction, and functional expression.',
      items: [
        'Bulbar Palsy',
        'Pseudobulbar Palsy',
        'Facial Paralysis / Bell’s Palsy',
        'Cranial Nerve Palsies',
        'Trigeminal Neuralgia',
        'Facial Muscle Weakness & Asymmetry'
      ],
      highlights: [
        'Targeted electro-acupuncture for facial nerve',
        'Neuromuscular mirror re-education',
        'Pain desensitization for trigeminal nerves'
      ]
    },
    {
      id: 'ataxia-balance',
      number: '04',
      title: 'Cerebellar & Ataxia Disorders',
      tagline: 'Vestibular & cerebellar coordination training',
      description:
        'Therapeutic approaches dedicated to recalibrating sensory integration, reducing movement tremors, and steadying gait ataxia.',
      items: [
        'Cerebellar Ataxia',
        'Spinocerebellar Ataxia (SCA)',
        'Hereditary Ataxia',
        'Ataxia of Various Causes',
        'Balance & Coordination Disorders',
        'Gait Ataxia & Wide-Based Walking'
      ],
      highlights: [
        'Frenkel’s coordination exercises',
        'Dynamic balance platform training',
        'Proprioceptive weighting & stabilizing'
      ]
    },
    {
      id: 'peripheral-neuromuscular',
      number: '05',
      title: 'Peripheral Nerve & Neuromuscular Conditions',
      tagline: 'Sensory revival, nerve gliding & muscle reactivation',
      description:
        'Comprehensive management for localized nerve injuries, systemic neuropathies, and neuromuscular junction or muscle disorders.',
      items: [
        'Peripheral Neuropathy',
        'Diabetic Neuropathy (Sensory loss & tingling)',
        'Foot Drop (Peroneal nerve palsy)',
        'Nerve Palsy (Radial, Ulnar, Median)',
        'Guillain-Barré Syndrome (GBS) Rehabilitation',
        'Muscular Dystrophy',
        'Neuromuscular Weakness',
        'Muscle Spasticity',
        'Muscle Weakness Following Neurological Illness'
      ],
      highlights: [
        'Electrical nerve stimulation & acupuncture',
        'Ankle-Foot Orthosis (AFO) gait training',
        'Neurodynamic nerve mobilization'
      ]
    },
    {
      id: 'developmental',
      number: '06',
      title: 'Developmental & Other Neurological Conditions',
      tagline: 'Pediatric & young adult developmental rehabilitation',
      description:
        'Supportive therapy focused on optimizing motor milestones, reducing joint contractures, and fostering day-to-day functional movement.',
      items: [
        'Cerebral Palsy (Spastic, Athetoid, Ataxic)',
        'Developmental Motor Disorders',
        'Post-Encephalitis Neurological Sequelae',
        'Post-Meningitis Neurological Sequelae',
        'Neurological Weakness',
        'Mobility & Functional Impairments',
        'Balance & Coordination Impairments'
      ],
      highlights: [
        'Neurodevelopmental therapy (NDT) concepts',
        'Postural symmetry & tone reduction',
        'Caregiver handling & home exercise guidance'
      ]
    },
    {
      id: 'functional-rehab',
      number: '07',
      title: 'Functional Neurological Rehabilitation',
      tagline: 'Rebuilding capacity for essential daily living',
      description:
        'Tailored therapeutic interventions targeted directly at the real-life movement limitations affecting patient quality of life.',
      items: [
        'Gait & Walking Difficulties',
        'Balance Problems & Fear of Falling',
        'Coordination Difficulties',
        'Muscle Stiffness & Spasticity',
        'Reduced Mobility & Transfer Limitations',
        'Postural Instability',
        'Functional Weakness',
        'Activities of Daily Living (ADL) Difficulties'
      ],
      highlights: [
        'Sit-to-stand and transfer mastery',
        'Endurance and energy conservation training',
        'Assistive device prescription & gait optimization'
      ]
    }
  ]

  return (
    <PageContainer>
      <SEO
        title="Neurological Conditions & Stroke Rehabilitation in Mira Road, Vasai, Surat | Dr. Jha"
        description="Individualized physiotherapy & acupuncture supportive care for stroke, hemiplegia, Parkinson's, Bell's palsy, diabetic neuropathy & ataxia across Mira Road, Vasai, and Surat."
        keywords="stroke rehabilitation mira road, bell's palsy acupuncture vasai, hemiplegia physiotherapy surat, parkinson rehab mumbai, diabetic neuropathy acupuncture, dr jha physiotherapy"
        canonicalUrl="https://drjhaphysio.in/neurological-conditions"
        structuredData={createConditionPillarSchema({
          title: "Neurological Conditions & Rehabilitation | Dr. Jha Centre",
          description: "Evidence-based physiotherapy and acupuncture supportive care for stroke, paralysis, Bell's palsy, ataxia, and neuropathies across Mira Road, Vasai, and Surat.",
          url: "https://drjhaphysio.in/neurological-conditions",
          sections
        })}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Conditions', href: '/conditions' },
            { label: 'Neurological Conditions' }
          ]}
        />

        {/* ════════════════ HERO HEADER ════════════════ */}
        <div className="mt-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#064C3B] uppercase mb-3">
            <Brain className="w-4 h-4 text-[#064C3B]" />
            <span>NEUROLOGICAL REHABILITATION &amp; SUPPORTIVE CARE</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-[1.14] max-w-4xl mb-6">
            Dedicated Care for <br />
            <span className="italic font-normal text-[#064C3B]">
              Neurological Conditions &amp; Functional Recovery
            </span>
          </h1>

          <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] p-6 sm:p-9 shadow-sm relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                At <strong className="text-stone-900 font-semibold">Dr. Jha Physiotherapy &amp; Acupuncture Centre</strong>, we provide individualized physiotherapy and acupuncture-based supportive care for selected neurological conditions.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Our clinical approach focuses on improving <span className="text-[#064C3B] font-semibold">mobility</span>, <span className="text-[#064C3B] font-semibold">balance</span>, <span className="text-[#064C3B] font-semibold">coordination</span>, <span className="text-[#064C3B] font-semibold">muscle function</span>, <span className="text-[#064C3B] font-semibold">pain management</span>, and <span className="text-[#064C3B] font-semibold">independence in daily activities</span>.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={`tel:${cleanPhone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] shadow-md transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call for Neuro Assessment</span>
                </a>
                <a
                  href={`https://wa.me/${whatsapp}?text=${encodeURIComponent('Hello Dr. Jha Centre, I would like to inquire about neurological rehabilitation.')}`}
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
            Quick Navigation — 7 Core Clinical Domains
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
                  <span>{sec.title.split('&')[0]}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* ════════════════ 7 CLINICAL CATEGORIES ════════════════ */}
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
                          CLINICAL REHABILITATION
                        </span>
                      </div>
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
                      Key Clinical Focus:
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
                    <span>Conditions Treated in This Category</span>
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
              How Physiotherapy &amp; Acupuncture Work Together in Neuro Care
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Neurological recovery demands a layered clinical strategy. While conventional physiotherapy retrains muscular patterns and motor coordination, clinical acupuncture supports localized neuro-vascular circulation and neuromodulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-white/10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-[#E5A500]">
                <Activity className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">Targeted Neuro-Physiotherapy</h3>
              </div>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Neuroplastic Repetition:</strong> High-repetition, task-specific training to forge alternative motor pathways.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Spasticity Management:</strong> Prolonged stretching, positioning, and antagonist muscle activation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Balance &amp; Gait Recalibration:</strong> Sensory perturbation, parallel bar walking, and assistive device integration.</span>
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
                  <span><strong>Electro-Acupuncture:</strong> Delivering mild, targeted micro-currents to stimulate sluggish facial and peripheral nerves.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Microcirculation Enhancement:</strong> Augmenting localized blood flow to hypoxic and dormant muscular groups.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Pain &amp; Neuropathic Ease:</strong> Calming hyperexcitable nerve roots in conditions like trigeminal and peripheral neuropathies.</span>
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
                Neurological rehabilitation is individualized according to the patient’s diagnosis, clinical condition, and rehabilitation goals. Physiotherapy and acupuncture may help manage selected symptoms and improve functional ability but do not claim to cure or reverse underlying neurodegenerative diseases. Medical evaluation and multidisciplinary care may be required.
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
            Consult With Our Neurological Rehabilitation Team
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Whether recovering from a recent stroke or seeking long-term functional mobility support for Parkinson's or neuropathy, our clinical team is here to assess and guide you.
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
