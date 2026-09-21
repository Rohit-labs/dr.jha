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
  Bone,
  Flame
} from 'lucide-react'

export default function OrthopaedicConditions() {
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

  // The 10 Clinical Categories
  const sections = [
    {
      id: 'spine-back',
      number: '01',
      title: 'Spine & Back Conditions',
      tagline: 'Cervical, thoracic & lumbar disc and facet joint care',
      description:
        'Comprehensive assessment and structured rehabilitation for spinal decompression, radicular nerve irritation, posture overload, and mechanical spine dysfunction.',
      items: [
        'Neck Pain',
        'Back Pain',
        'Cervical Spondylosis',
        'Lumbar Spondylosis',
        'Cervical Disc Prolapse',
        'Lumbar Disc Prolapse / Slip Disc',
        'Sciatica',
        'Cervical Radiculopathy',
        'Lumbar Radiculopathy',
        'Spondylolisthesis',
        'Spondylolysis',
        'Spinal Stenosis',
        'Facet Joint Dysfunction',
        'Sacroiliac Joint Dysfunction',
        'Coccyx Pain / Coccydynia'
      ],
      highlights: [
        'Mechanical spinal mobilization & decompression',
        'Core stabilizer neuromuscular activation',
        'Acupuncture for paraspinal muscle release'
      ]
    },
    {
      id: 'shoulder',
      number: '02',
      title: 'Shoulder Conditions',
      tagline: 'Capsular mobility, rotator cuff repair & impingement relief',
      description:
        'Restoring overhead reach, scapulohumeral rhythm, and rotator cuff tendon capacity through gentle joint glide techniques and targeted tendon loading.',
      items: [
        'Frozen Shoulder / Adhesive Capsulitis',
        'Shoulder Pain',
        'Rotator Cuff Injury',
        'Rotator Cuff Tendinopathy',
        'Shoulder Impingement Syndrome',
        'Shoulder Bursitis',
        'Shoulder Dislocation Rehabilitation',
        'Shoulder Instability',
        'Labral Injuries',
        'Post-Shoulder Surgery Rehabilitation'
      ],
      highlights: [
        'Glenohumeral multi-plane mobilization',
        'Scapular stabilizer re-education',
        'Dry needling for subacromial trigger points'
      ]
    },
    {
      id: 'knee',
      number: '03',
      title: 'Knee Conditions',
      tagline: 'Joint cartilage protection, ligament rehab & alignment',
      description:
        'Targeted knee rehabilitation focusing on patellofemoral tracking, cartilage unloading, post-surgical knee rehab (TKR/ACL), and meniscus healing.',
      items: [
        'Knee Osteoarthritis',
        'Knee Pain',
        'Patellofemoral Pain Syndrome',
        'Patellar Tendinopathy',
        'Meniscus Injuries',
        'Anterior Cruciate Ligament (ACL) Injury',
        'Posterior Cruciate Ligament (PCL) Injury',
        'Medial Collateral Ligament (MCL) Injury',
        'Lateral Collateral Ligament (LCL) Injury',
        'Knee Bursitis',
        'Iliotibial Band Syndrome',
        'Post-TKR Rehabilitation',
        'Post-Knee Surgery Rehabilitation'
      ],
      highlights: [
        'VMO & quad tendon strengthening',
        'Knee joint distraction & patellar glide',
        'Gait & lower quadrant biomechanical correction'
      ]
    },
    {
      id: 'hip-pelvis',
      number: '04',
      title: 'Hip & Pelvic Conditions',
      tagline: 'Acetabular joint mobility, bursitis & pelvic stability',
      description:
        'Addressing deep gluteal tendinopathies, hip impingements, labral stress, and post-hip replacement functional recovery.',
      items: [
        'Hip Pain',
        'Hip Osteoarthritis',
        'Hip Bursitis',
        'Greater Trochanteric Pain Syndrome',
        'Gluteal Tendinopathy',
        'Hip Impingement (FAI)',
        'Hip Labral Injuries',
        'Sacroiliac Joint Pain',
        'Pelvic Musculoskeletal Pain',
        'Post-Hip Replacement Rehabilitation'
      ],
      highlights: [
        'Gluteus medius & pelvic floor integration',
        'Capsular mobilization for internal/external rotation',
        'Acupuncture for trochanteric pain relief'
      ]
    },
    {
      id: 'elbow-wrist-hand',
      number: '05',
      title: 'Elbow, Wrist & Hand Conditions',
      tagline: 'Epicondylitis recovery, nerve decompression & grip restoration',
      description:
        'Targeted therapies for desk workers, athletes, and craftspeople experiencing tendon strains, tunnel compressions, or hand fractures.',
      items: [
        'Tennis Elbow / Lateral Epicondylitis',
        'Golfer’s Elbow / Medial Epicondylitis',
        'Elbow Pain',
        'Elbow Bursitis',
        'Wrist Pain',
        'Carpal Tunnel Syndrome',
        'De Quervain’s Tenosynovitis',
        'Wrist Tendinopathy',
        'Hand Pain',
        'Trigger Finger',
        'Post-Fracture Hand Rehabilitation',
        'Post-Surgical Hand Rehabilitation'
      ],
      highlights: [
        'Eccentric wrist extensor/flexor loading',
        'Median & radial nerve mobilization',
        'Cross-friction massage & electro-acupuncture'
      ]
    },
    {
      id: 'ankle-foot',
      number: '06',
      title: 'Ankle & Foot Conditions',
      tagline: 'Plantar fascia healing, ligament stability & arch biomechanics',
      description:
        'Comprehensive treatment for weight-bearing foot pain, chronic ligament laxity, Achilles tendinopathies, and post-fracture mobility.',
      items: [
        'Ankle Pain',
        'Ankle Sprain (Inversion / Eversion)',
        'Ankle Instability',
        'Achilles Tendinopathy',
        'Achilles Tendon Injury Rehabilitation',
        'Plantar Fasciitis',
        'Heel Pain & Calcaneal Spur',
        'Flat Feet / Pes Planus',
        'Foot Pain',
        'Metatarsalgia',
        'Shin Splints / MTSS',
        'Post-Fracture Ankle Rehabilitation',
        'Post-Ankle Surgery Rehabilitation'
      ],
      highlights: [
        'Plantar fascia & calf tissue release',
        'Subtalar & talocrural joint mobilization',
        'Proprioceptive balance board training'
      ]
    },
    {
      id: 'arthritis-joints',
      number: '07',
      title: 'Arthritis & Joint Conditions',
      tagline: 'Joint protection, morning stiffness relief & cartilage care',
      description:
        'Clinician-guided therapies aimed at preserving synovial joint health, reducing flare-up discomfort, and combating progressive immobility.',
      items: [
        'Osteoarthritis (Multiple joints)',
        'Rheumatoid Arthritis — supportive rehabilitation',
        'Ankylosing Spondylitis — supportive rehabilitation',
        'Joint Stiffness & Tightness',
        'Joint Pain',
        'Joint Mobility Restrictions',
        'Post-Immobilization Stiffness',
        'Degenerative Joint Conditions'
      ],
      highlights: [
        'Low-impact synovial fluid stimulation',
        'Passive & active-assisted range of motion',
        'Acupuncture for anti-inflammatory neuromodulation'
      ]
    },
    {
      id: 'sports-soft-tissue',
      number: '08',
      title: 'Sports & Soft Tissue Injuries',
      tagline: 'Rapid athletic recovery, muscle tears & tendon healing',
      description:
        'Structured phasing from acute anti-inflammatory care to eccentric rebuild and functional return-to-sport testing.',
      items: [
        'Muscle Strains',
        'Muscle Tears (Hamstring, Quadriceps, Calf)',
        'Ligament Injuries',
        'Tendon Injuries',
        'Sprains & Twists',
        'Sports-Related Injuries',
        'Overuse Injuries',
        'Tendinitis / Tendinopathy',
        'Bursitis',
        'Myofascial Pain Syndrome',
        'Trigger Points',
        'Repetitive Strain Injuries (RSI)'
      ],
      highlights: [
        'Kinesiology taping & myofascial trigger release',
        'Dry needling for deep knot deactivation',
        'Progressive plyometric & agility conditioning'
      ]
    },
    {
      id: 'fracture-post-surgical',
      number: '09',
      title: 'Fracture & Post-Surgical Rehabilitation',
      tagline: 'Guided protocol recovery after orthopaedic surgeries',
      description:
        'Structured phase-wise recovery following internal fixations, joint replacements, and arthroscopic procedures to regain strength and safety.',
      items: [
        'Post-Fracture Rehabilitation',
        'Post-Immobilization Rehabilitation (Plaster cast removal)',
        'Joint Replacement Rehabilitation',
        'Post-TKR Rehabilitation (Total Knee Replacement)',
        'Post-THR Rehabilitation (Total Hip Replacement)',
        'Post-ACL Reconstruction Rehabilitation',
        'Post-Ligament Repair Rehabilitation',
        'Post-Arthroscopy Rehabilitation',
        'Post-Spinal Surgery Rehabilitation',
        'Post-Orthopaedic Surgery Rehabilitation'
      ],
      highlights: [
        'Scar tissue mobilization & swelling reduction',
        'Safe progressive weight-bearing protocols',
        'Gait retraining & assistive device weaning'
      ]
    },
    {
      id: 'postural-functional',
      number: '10',
      title: 'Postural & Functional Musculoskeletal Conditions',
      tagline: 'Ergonomic alignment, kinetic chain balance & movement health',
      description:
        'Correcting repetitive desk posture imbalances, head-forward posture, rounded shoulders, and muscle length-tension deficits.',
      items: [
        'Poor Posture',
        'Forward Head Posture (Tech neck)',
        'Rounded Shoulders',
        'Postural Imbalance',
        'Muscle Tightness',
        'Muscle Weakness',
        'Flexibility Restrictions',
        'Mobility Restrictions',
        'Gait Abnormalities',
        'Functional Movement Dysfunction'
      ],
      highlights: [
        'Deep cervical flexor & rhomboid strengthening',
        'Thoracic spine extension mobilization',
        'Workstation ergonomic alignment training'
      ]
    }
  ]

  return (
    <PageContainer>
      <SEO
        title="Orthopaedic Physiotherapy, Sciatica & Joint Pain Relief | Dr. Jha (Mira Road, Vasai, Surat)"
        description="Evidence-based physiotherapy & acupuncture for sciatica, slip disc, cervical spondylosis, frozen shoulder, knee arthritis & sports injuries across Mira Road, Vasai, and Surat."
        keywords="sciatica pain treatment mira road, slip disc physiotherapy vasai, frozen shoulder acupuncture surat, knee osteoarthritis rehabilitation, cervical spondylosis clinic mumbai, dr jha physiotherapy"
        canonicalUrl="https://drjhaphysiotherapy.com/orthopaedic-conditions"
        structuredData={createConditionPillarSchema({
          title: "Orthopaedic & Musculoskeletal Conditions | Dr. Jha Centre",
          description: "Comprehensive physiotherapy and acupuncture pain management and rehabilitation for spine, shoulder, knee, hip, sports injuries, and post-surgery care across Mira Road, Vasai, and Surat.",
          url: "https://drjhaphysiotherapy.com/orthopaedic-conditions",
          sections
        })}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Conditions', href: '/conditions' },
            { label: 'Orthopaedic & Musculoskeletal' }
          ]}
        />

        {/* ════════════════ HERO HEADER ════════════════ */}
        <div className="mt-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#064C3B] uppercase mb-3">
            <Bone className="w-4 h-4 text-[#064C3B]" />
            <span>ORTHOPAEDIC &amp; MUSCULOSKELETAL CONDITIONS</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-[1.14] max-w-4xl mb-6">
            Physiotherapy &amp; Acupuncture-Based <br />
            <span className="italic font-normal text-[#064C3B]">
              Pain Management &amp; Rehabilitation
            </span>
          </h1>

          <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] p-6 sm:p-9 shadow-sm relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                At <strong className="text-stone-900 font-semibold">Dr. Jha Physiotherapy &amp; Acupuncture Centre</strong>, we provide individualized physiotherapy and acupuncture-based care for selected orthopaedic and musculoskeletal conditions.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Our clinical approach focuses on <span className="text-[#064C3B] font-semibold">pain management</span>, <span className="text-[#064C3B] font-semibold">improving mobility</span>, <span className="text-[#064C3B] font-semibold">restoring strength</span>, <span className="text-[#064C3B] font-semibold">enhancing joint function</span>, and <span className="text-[#064C3B] font-semibold">supporting recovery after injuries and surgery</span>.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={`tel:${cleanPhone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] shadow-md transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call for Orthopaedic Consultation</span>
                </a>
                <a
                  href={`https://wa.me/${whatsapp}?text=${encodeURIComponent('Hello Dr. Jha Centre, I would like to consult for an orthopaedic / joint pain condition.')}`}
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
            Quick Navigation — 10 Clinical Domains
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

        {/* ════════════════ 10 CLINICAL CATEGORIES ════════════════ */}
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
                          ORTHOPAEDIC CARE
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
              CLINICAL MODALITIES &amp; PROTOCOLS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Integrative Orthopaedic Physiotherapy &amp; Medical Acupuncture
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Our multidisciplinary care seamlessly bridges manual joint mobilization, progressive strength loading, and acupuncture-based pain modulation to target both symptoms and underlying biomechanical causes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-white/10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-[#E5A500]">
                <Activity className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">Advanced Physiotherapy</h3>
              </div>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Manual Joint Mobilization:</strong> Maitland and Mulligan techniques to restore restricted capsule and facet glide.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Progressive Kinetic Loading:</strong> Rebuilding eccentric capacity and tendon resilience to avoid re-injury.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Postural &amp; Biomechanical Retraining:</strong> Correcting kinetic chain compensations from the feet through the spine.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2.5 text-[#E5A500]">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-base font-bold text-white">Clinical Acupuncture &amp; Dry Needling</h3>
              </div>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Myofascial Trigger Deactivation:</strong> Releasing chronic knots in trapezius, gluteals, piriformis, and rotator cuff.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Anti-Inflammatory Modulation:</strong> Stimulating localized endorphin and microvascular circulation in joint capsules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E5A500]">•</span>
                  <span><strong>Radicular Pain Relief:</strong> Calming hyperexcitable nerve root branches in sciatica and cervical radiculopathy.</span>
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
                Orthopaedic rehabilitation is individualized according to the patient’s diagnosis, clinical condition, and rehabilitation goals. Physiotherapy and acupuncture may help manage selected symptoms and improve functional ability. Medical evaluation and specialist consultation may be required where appropriate.
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
            Consult With Our Orthopaedic &amp; Musculoskeletal Team
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Schedule a physical assessment to identify the biomechanical source of your joint pain or injury and start a targeted rehabilitation plan.
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
