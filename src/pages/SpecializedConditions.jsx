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
  Eye,
  Smile,
  Heart,
  UserCheck,
  TrendingUp,
  Feather
} from 'lucide-react'

export default function SpecializedConditions() {
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

  // The 9 Clinical Categories
  const sections = [
    {
      id: 'womens-health',
      number: '01',
      title: 'Women’s Health',
      tagline: 'Pelvic floor health, hormonal transitions & postpartum care',
      description:
        'Holistic rehabilitation and acupuncture-based symptom relief addressing menstrual pain, pelvic floor instability, postpartum recovery, and menopausal musculoskeletal changes.',
      items: [
        'Menstrual Pain / Dysmenorrhea',
        'PCOS-Related Symptoms — supportive care',
        'Pelvic Pain',
        'Pregnancy-Related Back Pain',
        'Postpartum Rehabilitation',
        'Pelvic Floor Dysfunction',
        'Urinary Incontinence',
        'Menopausal Musculoskeletal Symptoms'
      ],
      highlights: [
        'Pelvic floor muscular re-education',
        'Acupuncture for pelvic microcirculation',
        'Diastasis recti and lumbopelvic stabilization'
      ]
    },
    {
      id: 'skin-hair',
      number: '02',
      title: 'Skin & Hair Conditions',
      tagline: 'Acupuncture-based microcirculation & dermal vitality support',
      description:
        'Supportive medical acupuncture and micro-stimulation focused on localized blood perfusion, cellular turnover, and follicle health for chronic skin and hair concerns.',
      items: [
        'Acne & Inflammatory Blemishes',
        'Acne Scars — tissue renewal support',
        'Pigmentation',
        'Melasma',
        'Skin Dullness & Lack of Vitality',
        'Fine Lines & Wrinkles',
        'Hair Fall — supportive microcirculation care',
        'Alopecia — supportive care'
      ],
      highlights: [
        'Facial acupuncture for localized collagen synthesis',
        'Scalp micro-needle stimulation for follicle perfusion',
        'Internal neuro-hormonal balancing points'
      ]
    },
    {
      id: 'eye-ear-vestibular',
      number: '03',
      title: 'Eye, Ear & Vestibular Conditions',
      tagline: 'Vestibular recalibration, tinnitus relief & ocular strain release',
      description:
        'Targeted vestibular rehabilitation therapy (VRT) and specialized cranial-acupuncture to steady vertigo, ease inner-ear ringing, and relieve digital eye fatigue.',
      items: [
        'Eye Strain (Digital eye fatigue / Asthenopia)',
        'Dry Eye Symptoms — supportive care',
        'Tinnitus — supportive management',
        'Vertigo (BPPV / Peripheral vertigo)',
        'Dizziness & Disequilibrium',
        'Vestibular Dysfunction',
        'Balance Disorders',
        'Facial Paralysis-Related Dysfunction'
      ],
      highlights: [
        'Canalith repositioning maneuvers (Epley / Semont)',
        'Peri-auricular & temporal acupuncture for tinnitus',
        'Gaze stabilization & visual-vestibular adaptation'
      ]
    },
    {
      id: 'respiratory-pulmonary',
      number: '04',
      title: 'Respiratory & Pulmonary Conditions',
      tagline: 'Ventilatory efficiency, lung expansion & stamina recovery',
      description:
        'Individualized chest physiotherapy and respiratory muscle training designed to clear secretions, ease air hunger, and restore physical exercise capacity.',
      items: [
        'Asthma — supportive respiratory care',
        'COPD Rehabilitation',
        'Chronic Bronchitis — rehabilitation support',
        'Pulmonary Rehabilitation',
        'Post-COVID Respiratory Rehabilitation',
        'Breathing Pattern Disorders',
        'Respiratory Muscle Weakness',
        'Reduced Exercise Tolerance'
      ],
      highlights: [
        'Inspiratory muscle trainer (IMT) resistance loading',
        'Active cycle of breathing techniques (ACBT)',
        'Aerobic endurance pacing'
      ]
    },
    {
      id: 'cardiac-rehab',
      number: '05',
      title: 'Cardiac Rehabilitation',
      tagline: 'Safe progressive conditioning & cardiovascular recovery',
      description:
        'Supervised phase-wise exercise therapy to safely rebuild cardiovascular reserve, functional independence, and physical confidence following cardiac procedures.',
      items: [
        'Cardiac Rehabilitation',
        'Post-Heart Attack Rehabilitation',
        'Post-CABG Rehabilitation',
        'Post-Angioplasty Rehabilitation',
        'Cardiovascular Deconditioning',
        'Reduced Exercise Tolerance'
      ],
      highlights: [
        'Target heart rate & MET-paced exertion protocols',
        'Sternal precautions adherence training',
        'Continuous vital sign & fatigue monitoring'
      ]
    },
    {
      id: 'digestive-abdominal',
      number: '06',
      title: 'Digestive & Abdominal Conditions',
      tagline: 'Gut-brain axis regulation & abdominal wall tension relief',
      description:
        'Acupuncture-based supportive management and abdominal visceral therapies to regulate enteric peristalsis, relieve muscular splinting, and calm dyspeptic distress.',
      items: [
        'Constipation (Functional / Chronic)',
        'Irritable Bowel Syndrome (IBS) — supportive management',
        'Bloating',
        'Indigestion / Dyspepsia',
        'Gas-Related Discomfort',
        'Functional Digestive Complaints',
        'Abdominal Musculoskeletal Pain'
      ],
      highlights: [
        'Abdominal fascial release & trigger deactivation',
        'Electro-acupuncture for enteric motility',
        'Vagal nerve somatic calming techniques'
      ]
    },
    {
      id: 'aesthetic-cosmetic',
      number: '07',
      title: 'Aesthetic & Cosmetic Wellness',
      tagline: 'Non-invasive facial acupuncture & natural rejuvenation',
      description:
        'Evidence-informed aesthetic acupuncture that naturally stimulates facial collagen production, tones expressive musculature, and promotes radiant dermal texture.',
      items: [
        'Facial Rejuvenation',
        'Fine Lines & Wrinkles',
        'Facial Puffiness & Lymphatic Sluggishness',
        'Skin Tone & Texture Concerns',
        'Acne-Related Skin Concerns',
        'Facial Muscle Toning',
        'Aesthetic Acupuncture',
        'Wellness-Oriented Cosmetic Care'
      ],
      highlights: [
        'Intradermal acupuncture for collagen stimulation',
        'Facial lymphatic drainage & depuffing',
        'Platysma and zygomaticus muscle lifting'
      ]
    },
    {
      id: 'height-posture',
      number: '08',
      title: 'Height, Growth & Posture',
      tagline: 'Spinal decompression, adolescent posture & growth optimization',
      description:
        'Biomechanical alignment protocols focusing on axial spinal extension, correcting rounded shoulders and forward head carriage, and supporting healthy growth dynamics.',
      items: [
        'Postural Imbalance',
        'Poor Posture',
        'Forward Head Posture (Tech Neck)',
        'Rounded Shoulders',
        'Growth-Related Postural Concerns',
        'Musculoskeletal Imbalances',
        'Flexibility & Mobility Restrictions',
        'Height & Posture Support'
      ],
      highlights: [
        'Axial spine decompression & wall posture retraining',
        'Pectoral stretch & rhomboid/scapular strengthening',
        'Adolescent postural screening & corrective home drills'
      ]
    },
    {
      id: 'general-wellness',
      number: '09',
      title: 'General Wellness & Lifestyle',
      tagline: 'Restorative somatic care, stress release & vitality renewal',
      description:
        'Supportive therapies designed to release chronic tension patterns, reset sleep quality, restore physical stamina, and alleviate persistent lethargy.',
      items: [
        'Stress-Related Muscle Tension',
        'Sleep-Related Difficulties — supportive care',
        'General Weakness',
        'Fatigue-Related Functional Complaints',
        'Physical Deconditioning',
        'Reduced Mobility'
      ],
      highlights: [
        'Restorative somatic acupuncture for stress relief',
        'Energy budgeting & activity pacing coaching',
        'Gentle joint decompression & restorative mobility'
      ]
    }
  ]

  return (
    <PageContainer>
      <SEO
        title="Cosmetic Acupuncture, Vertigo & Wellness Care | Dr. Jha (Mira Road, Vasai, Surat)"
        description="Specialized acupuncture & physiotherapy supportive care for skin rejuvenation, acne, hair fall, vertigo, tinnitus, and posture alignment across Mira Road, Vasai, and Surat."
        keywords="cosmetic acupuncture mira road, facial rejuvenation vasai, vertigo vestibular physiotherapy surat, tinnitus supportive acupuncture, hair fall acupuncture, posture correction mumbai"
        canonicalUrl="https://drjhaphysiotherapy.com/specialized-conditions"
        structuredData={createConditionPillarSchema({
          title: "Specialized & Aesthetic Wellness Care | Dr. Jha Centre",
          description: "Integrative physiotherapy and acupuncture supportive care for skin, hair, vertigo, tinnitus, aesthetic facial acupuncture, height and posture, and women's health across Mira Road, Vasai, and Surat.",
          url: "https://drjhaphysiotherapy.com/specialized-conditions",
          sections
        })}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Conditions', href: '/conditions' },
            { label: 'Specialized & Wellness Care' }
          ]}
        />

        {/* ════════════════ HERO HEADER ════════════════ */}
        <div className="mt-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#064C3B] uppercase mb-3">
            <Sparkles className="w-4 h-4 text-[#064C3B]" />
            <span>SPECIALIZED &amp; AESTHETIC WELLNESS CARE</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-[1.14] max-w-4xl mb-6">
            Integrative Physiotherapy, <br />
            <span className="italic font-normal text-[#064C3B]">
              Acupuncture &amp; Wellness Rehabilitation
            </span>
          </h1>

          <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] p-6 sm:p-9 shadow-sm relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                At <strong className="text-stone-900 font-semibold">Dr. Jha Physiotherapy &amp; Acupuncture Centre</strong>, we offer specialized clinical therapies addressing unique health goals—from vestibular balance and cosmetic facial acupuncture to posture optimization and restorative wellness.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Our approach integrates modern physical medicine with traditional acupuncture to deliver <span className="text-[#064C3B] font-semibold">targeted symptom management</span>, <span className="text-[#064C3B] font-semibold">postural realignments</span>, <span className="text-[#064C3B] font-semibold">natural aesthetic revitalization</span>, and <span className="text-[#064C3B] font-semibold">holistic lifestyle recovery</span>.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={`tel:${cleanPhone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] shadow-md transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call for Specialized Consultation</span>
                </a>
                <a
                  href={`https://wa.me/${whatsapp}?text=${encodeURIComponent('Hello Dr. Jha Centre, I would like to inquire about specialized / aesthetic wellness care.')}`}
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
            Quick Navigation — 9 Specialized Wellness Domains
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

        {/* ════════════════ 9 CLINICAL CATEGORIES ════════════════ */}
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
                          SPECIALIZED CARE
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
                        Clinical &amp; Aesthetic Focus:
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
                      <span>Conditions &amp; Wellness Programs</span>
                      <span className="text-[11px] font-normal text-stone-500">
                        {sec.items.length} Focus Areas
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
                        <span>Inquire for this care</span>
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
              SPECIALIZED MODALITIES &amp; PHILOSOPHY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Integrative Medicine for Vitality, Aesthetics &amp; Balance
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              True wellness unites functional mechanics with somatic vitality. From precision canalith repositioning for vertigo to micro-needle facial acupuncture for non-invasive aesthetic rejuvenation, our clinic blends scientific anatomy with proven holistic modalities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-white/10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-[#E5A500]">
                <Activity className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">Physical &amp; Vestibular Medicine</h3>
              </div>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Vestibular Ocular Retraining:</strong> Resolving canalith displacement and motion-provoked equilibrium loss.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Postural Axis Realignment:</strong> Lengthening shortened spinal curves to reclaim upright height and carriage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Diaphragmatic Expansion:</strong> Pulmonary exercise therapy to enrich arterial oxygenation and reduce breathlessness.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-[#E5A500]">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">Cosmetic &amp; Somatic Acupuncture</h3>
              </div>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Facial Micro-Needling &amp; Acupuncture:</strong> Triggering endogenous collagen and elastin synthesis without chemicals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Scalp Perfusion Needling:</strong> Stimulating micro-vascular blood supply around hair follicles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Neuro-Somatic Calming:</strong> Activating parasympathetic vagal pathways to ease insomnia and systemic tension.</span>
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
                Specialized and aesthetic wellness therapies are tailored to each individual's physical presentation and goals. Acupuncture and supportive physical therapies provide valuable symptom management and wellness enhancement, but work alongside primary medical, dermatological, and ENT specialists where appropriate.
              </p>
            </div>
          </div>
        </div>

        {/* ════════════════ BOTTOM CONSULTATION CTA ════════════════ */}
        <div className="mt-14 text-center bg-[#FCFBF7] border border-[#DCDDD5] rounded-[32px] p-8 sm:p-12 shadow-xs">
          <span className="text-xs font-bold tracking-[0.2em] text-[#064C3B] uppercase block mb-3">
            EVIDENCE-INFORMED WELLNESS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#26332F] mb-4">
            Consult With Our Specialized Care Practitioners
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Whether seeking relief from vestibular vertigo, natural facial rejuvenation, or postural growth support, our clinical team is ready to guide you.
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
