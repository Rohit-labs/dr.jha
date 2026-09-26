import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Brain,
  Bone,
  HeartPulse,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Activity,
  Shield
} from 'lucide-react'

export default function ConditionDiscovery({ branch }) {
  const pillars = [
    {
      id: 'neurological',
      title: 'Neurological Conditions',
      subtitle: 'Neurological Rehabilitation & Supportive Care',
      tag: 'NEURO-MOTOR CARE',
      badge: '7 Clinical Domains',
      icon: <Brain className="w-6 h-6 text-[#064C3B]" />,
      description:
        'Individualized physiotherapy and medical acupuncture for stroke, paralysis, Parkinson’s, Bell’s palsy, peripheral neuropathies, and ataxia.',
      href: '/neurological-conditions',
      color: 'from-[#064C3B]/5 via-transparent to-transparent',
      borderColor: 'hover:border-[#064C3B]/50',
      tagBg: 'bg-[#064C3B]/10 text-[#064C3B]',
      featuredItems: [
        'Stroke / Hemiplegia Recovery',
        "Bell's Palsy & Facial Paralysis",
        "Parkinson's & Neurodegenerative",
        'Diabetic & Peripheral Neuropathy'
      ]
    },
    {
      id: 'orthopaedic',
      title: 'Orthopaedic & Musculoskeletal',
      subtitle: 'Pain Management & Joint Rehabilitation',
      tag: 'SPINE & JOINTS',
      badge: '10 Clinical Domains',
      icon: <Bone className="w-6 h-6 text-[#064C3B]" />,
      description:
        'Targeted relief for acute & chronic spine issues, slip disc, sciatica, frozen shoulder, knee osteoarthritis, and post-surgical recovery.',
      href: '/orthopaedic-conditions',
      color: 'from-[#064C3B]/5 via-transparent to-transparent',
      borderColor: 'hover:border-[#064C3B]/50',
      tagBg: 'bg-[#064C3B]/10 text-[#064C3B]',
      featuredItems: [
        'Neck, Back Pain & Sciatica',
        'Frozen Shoulder & Rotator Cuff',
        'Knee Arthritis & Ligament Care',
        'Post-Surgical & Fracture Rehab'
      ]
    },
    {
      id: 'systemic',
      title: 'Systemic & General Health',
      subtitle: 'Integrative Physical & Pulmonary Supportive Care',
      tag: 'VITAL SYSTEM CARE',
      badge: '8 Clinical Domains',
      icon: <HeartPulse className="w-6 h-6 text-[#064C3B]" />,
      description:
        'Physiotherapy and acupuncture supportive care for women’s health, PCOS, respiratory rehab, chronic fatigue, and post-illness recovery.',
      href: '/systemic-conditions',
      color: 'from-[#064C3B]/5 via-transparent to-transparent',
      borderColor: 'hover:border-[#064C3B]/50',
      tagBg: 'bg-[#064C3B]/10 text-[#064C3B]',
      featuredItems: [
        'Women’s Health & PCOS Support',
        'Asthma & Pulmonary Rehabilitation',
        'Cardiac & Circulatory Recovery',
        'Chronic Fatigue & Pain Syndromes'
      ]
    },
    {
      id: 'specialized',
      title: 'Specialized & Wellness Care',
      subtitle: 'Aesthetic, Sensory & Lifestyle Medicine',
      tag: 'SPECIALIZED CLINICAL',
      badge: '9 Clinical Domains',
      icon: <Sparkles className="w-6 h-6 text-[#064C3B]" />,
      description:
        'Integrative therapies for vertigo, tinnitus, cosmetic facial acupuncture, hair fall supportive care, posture correction, and stress relief.',
      href: '/specialized-conditions',
      color: 'from-[#064C3B]/5 via-transparent to-transparent',
      borderColor: 'hover:border-[#064C3B]/50',
      tagBg: 'bg-[#064C3B]/10 text-[#064C3B]',
      featuredItems: [
        'Cosmetic Facial Acupuncture',
        'Tinnitus & Vertigo (Vestibular)',
        'Skin & Hair Supportive Care',
        'Height, Posture & Alignment'
      ]
    }
  ]

  // Top search queries linking directly to sections
  const quickConditions = [
    { label: 'Sciatica Relief', href: '/orthopaedic-conditions#spine-back' },
    { label: 'Stroke Rehabilitation', href: '/neurological-conditions#stroke-paralysis' },
    { label: "Bell's Palsy", href: '/neurological-conditions#cranial-nerve' },
    { label: 'Frozen Shoulder', href: '/orthopaedic-conditions#shoulder' },
    { label: 'Knee Osteoarthritis', href: '/orthopaedic-conditions#knee' },
    { label: 'PCOS Supportive Care', href: '/systemic-conditions#womens-health' },
    { label: 'Vertigo & Balance', href: '/specialized-conditions#eye-ear-vestibular' },
    { label: 'Parkinson’s Mobility', href: '/neurological-conditions#neurodegenerative' },
    { label: 'Plantar Fasciitis', href: '/orthopaedic-conditions#ankle-foot' },
    { label: 'Cosmetic Acupuncture', href: '/specialized-conditions#aesthetic-cosmetic' },
    { label: 'Post-Surgical Rehab', href: '/orthopaedic-conditions#fracture-post-surgical' }
  ]

  return (
    <section className="w-full bg-[#F8F6F0] pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 font-sans antialiased text-[#26332F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ═══════════ SECTION HEADING ═══════════ */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.2em] text-[#064C3B] uppercase font-semibold mb-3">
            <span className="w-8 h-[1px] bg-[#064C3B]/40"></span>
            <span>WHAT WE TREAT &bull; 4 CLINICAL PILLARS</span>
            <span className="w-8 h-[1px] bg-[#064C3B]/40"></span>
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#26332F] leading-[1.14]">
            Comprehensive Care for <br />
            <span className="italic font-normal text-[#064C3B]">
              Neurological, Orthopaedic &amp; Systemic Health
            </span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            At Dr. Jha Physiotherapy &amp; Acupuncture Centre, our evidence-based clinical protocols span four specialized disciplines, delivering targeted restoration across 34 clinical categories.
          </p>
        </div>

        {/* ═══════════ 4 CLINICAL PILLARS GRID ═══════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {pillars.map((pillar) => (
            <Link
              key={pillar.id}
              to={pillar.href}
              className={`bg-[#FCFBF7] border border-[#DCDDD5] rounded-[30px] p-6 sm:p-8 lg:p-9 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_36px_rgba(6,76,59,0.08)] hover:-translate-y-0.5 group relative overflow-hidden cursor-pointer ${pillar.borderColor}`}
            >
              {/* Background gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} pointer-events-none`} />

              <div className="relative z-10">
                {/* Header Badge Row */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F4F2EC] flex items-center justify-center border border-stone-200/80 group-hover:scale-105 transition-transform">
                      {pillar.icon}
                    </div>
                    <div>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${pillar.tagBg}`}>
                        {pillar.tag}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-stone-500 bg-white/90 border border-stone-200 px-3 py-1 rounded-full shadow-xs">
                    {pillar.badge}
                  </span>
                </div>

                {/* Pillar Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#26332F] leading-tight mb-2 group-hover:text-[#064C3B] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-[#064C3B] mb-3">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal mb-6">
                  {pillar.description}
                </p>

                {/* Key Highlights / Subsections */}
                <div className="bg-white/80 border border-stone-200/70 rounded-2xl p-4 mb-6">
                  <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-2.5">
                    Common Conditions Treated:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pillar.featuredItems.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#064C3B] shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link at Bottom */}
              <div className="relative z-10 pt-5 border-t border-stone-200/70 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#064C3B] group-hover:text-[#073D32] transition-colors">
                  <span>Explore All {pillar.badge} &amp; Protocols</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>

                <div className="w-9 h-9 rounded-full bg-[#F4F2EC] flex items-center justify-center text-[#064C3B] group-hover:bg-[#064C3B] group-hover:text-white transition-all shadow-xs">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ═══════════ DIRECT JUMP TAGS (QUICK ACCESS) ═══════════ */}
        <div className="mt-12 sm:mt-16 bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-stone-200/70">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#064C3B]" />
              <h4 className="text-xs sm:text-sm font-bold text-stone-900 tracking-wide uppercase">
                Frequently Searched Conditions — Direct Anchor Access
              </h4>
            </div>
            <span className="text-[11px] text-stone-400 font-medium">
              Click to jump directly to diagnosis protocol
            </span>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {quickConditions.map((cond, idx) => (
              <Link
                key={idx}
                to={cond.href}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-stone-700 border border-stone-200/80 hover:border-[#064C3B] hover:text-[#064C3B] hover:bg-[#FAF7F2] transition-all duration-200 shadow-2xs hover:scale-[1.02]"
              >
                <span>{cond.label}</span>
                <ChevronRight className="w-3 h-3 text-[#064C3B] opacity-60" />
              </Link>
            ))}
          </div>
        </div>

        {/* ═══════════ EXPLORE ALL CONDITIONS CTA ═══════════ */}
        <div className="text-center mt-10 sm:mt-14">
          <Link
            to="/conditions"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] transition-all shadow-md active:scale-[0.98] group"
          >
            <span>Browse Complete Clinical Directory (34 Categories)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  )
}
