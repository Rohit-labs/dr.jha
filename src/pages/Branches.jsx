import React from 'react'
import { Link } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'
import BranchCard from '../components/branches/BranchCard'
import LocationSchematic from '../components/branches/LocationSchematic'
import { branches } from '../data/branches'
import { reviewsData } from '../data/reviews'
import {
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Compass,
  Building2,
  Car,
  Navigation
} from 'lucide-react'

export default function Branches() {
  const miraRoadBranch = branches.find((b) => b.slug === 'mira-road')
  const vasaiBranch = branches.find((b) => b.slug === 'vasai')
  const suratBranch = branches.find((b) => b.slug === 'surat')

  const coreCareDisciplines = [
    {
      title: 'Physiotherapy & Rehabilitation',
      description: 'Hands-on joint mobilization, soft tissue therapy, and progressive movement retraining for acute or persistent musculoskeletal strain.',
      tag: 'Core Care',
      link: '/treatments/physiotherapy'
    },
    {
      title: 'Medical Acupuncture',
      description: 'Sterile fine-needle therapy targeting myofascial trigger points and neuro-meridian pathways to alleviate chronic nerve and muscular pain.',
      tag: 'Integrated Therapy',
      link: '/treatments/acupuncture'
    },
    {
      title: 'Spine & Posture Care',
      description: 'Biomechanical evaluation and targeted stabilization for lumbar disc irritation, cervical spondylosis, and postural tension.',
      tag: 'Specialized',
      link: '/conditions/back-pain'
    },
    {
      title: 'Neurological Rehabilitation',
      description: 'Task-specific motor retraining, balance re-education, and gait restoration for stroke recovery and neurological conditions.',
      tag: 'Restorative',
      link: '/conditions'
    },
    {
      title: 'Sports Injury Recovery',
      description: 'Kinetic chain assessment, progressive loading, and return-to-activity conditioning for ligament, tendon, and athletic injuries.',
      tag: 'Performance',
      link: '/conditions/sports-injuries'
    },
    {
      title: 'Post-Surgical Protocols',
      description: 'Structured phase-by-phase recovery following joint arthroscopy, ligament reconstruction, and spinal surgeries.',
      tag: 'Post-Operative',
      link: '/treatments'
    }
  ]

  const approachPrinciples = [
    {
      number: '01',
      title: 'Personalized Assessment',
      description: 'Understanding your condition, movement, and recovery goals through comprehensive baseline physical evaluation before planning your care.'
    },
    {
      number: '02',
      title: 'Individualized Treatment',
      description: 'Treatment approaches selected around the patient’s specific pathology, lifestyle demands, and functional tolerance rather than generic protocols.'
    },
    {
      number: '03',
      title: 'Rehabilitation-Focused Care',
      description: 'Helping patients work toward better movement, functional autonomy, and confidence in daily and recreational activities.'
    },
    {
      number: '04',
      title: 'Experienced Clinical Team',
      description: 'Care delivered by clinicians with practical experience across orthopaedic physical therapy, neuro recovery, and medical acupuncture.'
    }
  ]

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Dr. Jha Physiotherapy & Acupuncture Centre - Clinic Network',
    description: 'Specialized multi-disciplinary physiotherapy and acupuncture centres located in Mira Road, Vasai, and Surat.',
    url: 'https://drjhaphysiotherapy.com/branches',
    department: branches.map((b) => ({
      '@type': 'MedicalClinic',
      name: `Dr. Jha Centre - ${b.name}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: b.address,
        addressLocality: b.city,
        addressRegion: b.state,
        postalCode: b.pincode,
        addressCountry: 'IN'
      },
      telephone: b.phone
    }))
  }

  return (
    <PageContainer>
      <SEO
        title="Our Branches | Mira Road, Vasai & Surat | Dr. Jha Physiotherapy"
        description="Find a Dr. Jha Physiotherapy & Acupuncture clinic near you in Mira Road, Vasai, or Surat. Three physical clinic branches, one standard of personalized clinical care."
        canonicalUrl="https://drjhaphysiotherapy.com/branches"
        structuredData={structuredData}
      />

      <div className="w-full">
        {/* ════════════════════════════════════════════════════════════
            SECTION 1 — HERO
        ════════════════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-14 sm:pb-18 lg:pb-22">
          <Breadcrumbs items={[{ label: 'Branches' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3A5A40]/10 text-[#3A5A40] text-xs font-bold tracking-[0.16em] uppercase">
                <Compass className="w-3.5 h-3.5" />
                <span>Our Branches</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1C1A] leading-[1.12]">
                Our Branches: <span className="italic font-normal text-[#B64D2E]">Find Care Near You</span>
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl font-normal">
                Three physical clinic branches, one consistent approach to personalized physiotherapy and rehabilitation care. Whether you visit us in Mira Road, Vasai, or Surat, you receive individual clinical attention focused on your recovery.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#locations"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#B64D2E] hover:bg-[#A34226] active:scale-[0.98] transition-all shadow-md shadow-[#B64D2E]/20 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Explore Our Branches</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${miraRoadBranch?.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-stone-800 bg-white border border-stone-300 hover:border-stone-800 hover:bg-stone-50 active:scale-[0.98] transition-all"
                >
                  <Phone className="w-4 h-4 text-stone-500" />
                  <span>Direct Helpline</span>
                </a>
              </div>

              {/* Quick Branch Pill Indicators */}
              <div className="pt-4 border-t border-stone-200/80 flex flex-wrap items-center gap-2 text-xs text-stone-600">
                <span className="font-medium text-stone-700">Clinic Branches:</span>
                <a href="#mira-road" className="hover:text-[#B64D2E] font-semibold">Mira Road (MMR)</a>
                <span>•</span>
                <a href="#vasai" className="hover:text-[#B64D2E] font-semibold">Vasai West (Palghar)</a>
                <span>•</span>
                <a href="#surat" className="hover:text-[#B64D2E] font-semibold">Surat (Gujarat)</a>
              </div>
            </div>

            {/* Right Column: Editorial Visual & Schematic */}
            <div className="lg:col-span-5 space-y-4">
              <div className="w-full h-72 sm:h-84 lg:h-96 rounded-3xl overflow-hidden shadow-lg bg-stone-200 relative border border-stone-200/80">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop&q=80"
                  alt="Dr. Jha Physiotherapy clinical treatment and consultation facility"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20 inline-block mb-1.5">
                    Continuous Care
                  </span>
                  <p className="text-xs sm:text-sm font-medium leading-snug">
                    Consistent clinical protocols and direct practitioner evaluation across all 3 centres.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 2 — OUR LOCATIONS (EDITORIAL ASYMMETRIC PRESENTATION)
        ════════════════════════════════════════════════════════════ */}
        <section id="locations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-stone-200/70">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Our Branches"
              title="Three Physical Branches:"
              highlight="Choose Your Nearest Clinic"
              description="Each branch is equipped for personalized physical therapy and medical acupuncture, staffed by trained clinicians practicing under established recovery protocols."
            />
            <div className="shrink-0 hidden md:block">
              <LocationSchematic activeSlug="" />
            </div>
          </div>

          {/* Editorial Layout: Mira Road Flagship Hero Card + Vasai & Surat Pair */}
          <div className="space-y-8">
            {/* 1. MIRA ROAD (Flagship Visual Prominence) */}
            {miraRoadBranch && (
              <div
                id="mira-road"
                className="bg-[#123F32] text-white rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-xl shadow-stone-900/10 border border-white/10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Left Content Area (58%) */}
                  <div className="lg:col-span-7 p-7 sm:p-9 lg:p-11 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#D66B4E]">
                          MIRA ROAD
                        </span>
                        <span className="text-[10px] font-bold tracking-wider uppercase bg-white/10 text-stone-200 px-2.5 py-0.5 rounded-full border border-white/10">
                          Flagship Centre
                        </span>
                      </div>

                      <h2 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-white leading-tight mb-3">
                        Dr. Jha Physiotherapy &amp; Acupuncture Centre
                      </h2>

                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-normal">
                        {miraRoadBranch.shortDescription}
                      </p>

                      {/* Key Verified Details */}
                      <div className="space-y-3 text-xs text-stone-200 mb-8">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-[#D66B4E] shrink-0 mt-0.5" />
                          <address className="not-italic leading-relaxed text-stone-300">
                            {miraRoadBranch.fullAddress}
                          </address>
                        </div>

                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-[#D66B4E] shrink-0" />
                          <span className="text-stone-300">
                            {miraRoadBranch.openingHours}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-[#D66B4E] shrink-0" />
                          <span className="text-stone-200 font-semibold">
                            {miraRoadBranch.phone}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="pt-5 border-t border-white/15 flex flex-wrap items-center gap-3.5">
                      <Link
                        to="/branches/mira-road"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#B64D2E] hover:bg-[#A34226] active:scale-[0.98] transition-all shadow-md shadow-[#B64D2E]/20"
                      >
                        <span>View Clinic Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <a
                        href={miraRoadBranch.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white/90 hover:text-white border border-white/25 hover:border-white/60 transition-all hover:bg-white/5"
                      >
                        <span>Get Directions</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right Photo (42%) */}
                  <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full overflow-hidden bg-stone-900">
                    <img
                      src={miraRoadBranch.image}
                      alt="Dr. Jha Physiotherapy clinic facility in Mira Road"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 2 & 3. VASAI & SURAT SIDE BY SIDE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vasaiBranch && (
                <div id="vasai">
                  <BranchCard branch={vasaiBranch} />
                </div>
              )}
              {suratBranch && (
                <div id="surat">
                  <BranchCard branch={suratBranch} />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 3 — CHOOSE YOUR CLINIC (PATIENT CONVENIENCE GUIDE)
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-[#FAF8F5] py-16 sm:py-20 border-y border-stone-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              eyebrow="Accessibility & Commute"
              title="Which Clinic Is"
              highlight="Right for You?"
              description="Select the facility nearest to your home or office. All three clinics share the same clinical philosophy, patient care standards, and appointment procedures."
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {branches.map((b) => (
                <div
                  key={b.slug}
                  className="bg-white border border-[#E8E2D8] rounded-[28px] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-stone-400 transition-colors"
                >
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#3A5A40] block mb-1">
                        {b.tag}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1C1A]">
                        {b.name}
                      </h3>
                      <p className="text-xs text-stone-500 font-medium mt-0.5">
                        {b.city}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-stone-100 text-xs text-stone-600">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-[#B64D2E] shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-stone-700">{b.address}</span>
                      </div>

                      {b.transitInfo && (
                        <div className="flex items-start gap-2.5">
                          <Navigation className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{b.transitInfo}</span>
                        </div>
                      )}

                      {b.parking && (
                        <div className="flex items-start gap-2.5">
                          <Car className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{b.parking}</span>
                        </div>
                      )}

                      <div className="flex items-start gap-2.5">
                        <Clock className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                        <span>{b.openingHours}</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                        <span className="font-medium text-stone-800">{b.phone}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-6 border-t border-stone-100 flex items-center justify-between">
                    <Link
                      to={`/branches/${b.slug}`}
                      className="text-xs font-semibold text-[#123F32] hover:text-[#B64D2E] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>View Clinic</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={b.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-stone-400 hover:text-stone-700 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 4 — CARE ACROSS OUR CLINICS
        ════════════════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Clinical Capabilities"
              title="Care Designed Around"
              highlight="Your Recovery"
              description="A multi-disciplinary foundation combining hands-on physical therapy, targeted pain modulation, and active exercise retraining."
            />
            <Link
              to="/treatments"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B64D2E] hover:underline"
            >
              <span>Explore full treatment directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCareDisciplines.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E8E2D8] rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#3A5A40] block mb-2">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C1C1A] group-hover:text-[#B64D2E] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-stone-100">
                  <Link
                    to={item.link}
                    className="text-xs font-semibold text-stone-800 hover:text-[#B64D2E] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 5 — THE CLINIC EXPERIENCE
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-[#FAF8F5] py-16 sm:py-20 border-y border-stone-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              eyebrow="Clinical Environment"
              title="Spaces Designed for"
              highlight="Better Care"
              description="Quiet, sanitary consultation rooms and dedicated movement zones created to help patients feel comfortable, heard, and supported during their recovery."
              className="mb-12"
            />

            {/* Curated Clinic Visual Triad */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-[#E8E2D8] rounded-[28px] overflow-hidden shadow-xs">
                <div className="h-56 overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80"
                    alt="Private consultation and evaluation room"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 mb-1">
                    Private Consultation Rooms
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    Dedicated, confidential evaluation bays for thorough clinical history and biomechanical examination.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#E8E2D8] rounded-[28px] overflow-hidden shadow-xs">
                <div className="h-56 overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80"
                    alt="Manual therapy and acupuncture care tables"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 mb-1">
                    Therapy &amp; Needling Suites
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    Hygienic treatment tables equipped for manual therapy, electro-stimulation, and sterile acupuncture.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#E8E2D8] rounded-[28px] overflow-hidden shadow-xs">
                <div className="h-56 overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80"
                    alt="Active movement rehabilitation zone"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 mb-1">
                    Active Rehabilitation Zones
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    Space dedicated to corrective exercises, balance training, and posture re-education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 6 — OUR APPROACH (4 CONCISE CLINICAL PRINCIPLES)
        ════════════════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <SectionHeading
            centered
            eyebrow="Clinical Philosophy"
            title="Personalized Care."
            highlight="Focused on Progress."
            description="Our clinical practice is built on factual evaluation, patient collaboration, and sustainable functional recovery."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachPrinciples.map((principle, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E8E2D8] rounded-[28px] p-6 sm:p-7 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-2xl font-bold text-[#B64D2E] block mb-3">
                    {principle.number}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1C1C1A] mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                    {principle.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#3A5A40]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Clinical Standard</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 7 — PATIENT EXPERIENCES
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-[#FAF8F5] py-16 sm:py-20 border-y border-stone-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              eyebrow="Patient Feedback"
              title="Real Experiences."
              highlight="Real Patients."
              description="Reflections from individuals who visited our clinics for physical rehabilitation and acupuncture care."
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {branches.map((b) => (
                <div
                  key={b.slug}
                  className="bg-white border border-[#E8E2D8] rounded-[28px] p-6 sm:p-7 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                      <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#3A5A40]">
                        {b.name} Clinic
                      </span>
                      <span className="text-[10px] text-stone-400 font-medium">
                        Verified Experience
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed pt-2">
                      "{b.reviews[0]?.quote || '[Verified patient review will be displayed here]'}"
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-stone-100 flex items-center justify-between text-xs">
                    <div>
                      <strong className="block text-stone-900 font-semibold">
                        {b.reviews[0]?.author || '[Patient Name / Initials]'}
                      </strong>
                      <span className="text-[11px] text-stone-500">
                        {b.reviews[0]?.location || b.city}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#B64D2E]">
                      ★★★★★
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 8 — LOCATION OVERVIEW (REGIONAL CORRIDOR SCHEMATIC)
        ════════════════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="bg-[#123F32] text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl shadow-stone-900/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D66B4E] block">
                  Regional Connectivity
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Connecting Patients Across <br />
                  <span className="italic font-normal text-stone-200">Mumbai MMR &amp; South Gujarat</span>
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl font-normal">
                  Our clinics are strategically located along the Western rail and road corridor to provide convenient in-person care for local residents and regional commuters alike.
                </p>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <strong className="block text-white font-semibold mb-0.5">Mira Road</strong>
                    <span className="text-stone-300 text-[11px]">MMR Flagship facility</span>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <strong className="block text-white font-semibold mb-0.5">Vasai West</strong>
                    <span className="text-stone-300 text-[11px]">Adjacent to station</span>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <strong className="block text-white font-semibold mb-0.5">Surat (Vesu)</strong>
                    <span className="text-stone-300 text-[11px]">Titanium Square</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <LocationSchematic className="bg-white text-stone-900" />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 9 — FINAL CTA
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-[#FAF8F5] py-16 sm:py-20 border-t border-stone-200/70 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#3A5A40] block">
              Begin Your Recovery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1A] leading-tight">
              Ready to Take <span className="italic font-normal text-[#B64D2E]">the Next Step?</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              Find your nearest clinic and speak with our team about your care. We look forward to supporting your path toward pain-free movement.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="tel:+919820012345"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#B64D2E] hover:bg-[#A34226] active:scale-[0.98] transition-all shadow-md shadow-[#B64D2E]/20 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us for Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#locations"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-stone-800 bg-white border border-stone-300 hover:border-stone-800 hover:bg-stone-50 active:scale-[0.98] transition-all"
              >
                <span>View Our Branches</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  )
}
