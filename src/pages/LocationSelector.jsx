import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import { branches } from '../data/branches'
import { useBranchContext } from '../context/BranchContext'
import { MapPin, Clock, Phone, ArrowRight, Compass } from 'lucide-react'

export default function LocationSelector() {
  const navigate = useNavigate()
  const { switchBranch } = useBranchContext()

  const handleSelectBranch = (slug) => {
    switchBranch(slug)
    navigate(`/${slug}`)
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Dr. Jha Physiotherapy & Acupuncture Centre - All Locations',
    description: 'Multi-disciplinary physiotherapy, medical acupuncture, and rehabilitation care centres in Mira Road, Vasai, and Surat.',
    url: 'https://drjhaphysiotherapy.com/locations',
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
        title="Our Clinic Locations | Mira Road, Vasai & Surat | Dr. Jha Centre"
        description="Explore our specialized physiotherapy and medical acupuncture clinic locations in Mira Road East (Thane), Vasai West (Palghar), and Vesu (Surat)."
        canonicalUrl="https://drjhaphysiotherapy.com/locations"
        structuredData={structuredData}
      />

      <div className="w-full py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ label: 'Our Locations' }]} />

          {/* ═══════════ HEADER / WELCOME ═══════════ */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFBF7] border border-[#DCDDD5] text-xs font-semibold text-[#064C3B] tracking-wider uppercase mb-4 shadow-xs">
              <Compass className="w-3.5 h-3.5" />
              <span>Our Regional Centres</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#26332F] tracking-tight leading-[1.12] mb-4">
              Our Clinic Locations. <br />
              <span className="italic font-normal text-[#064C3B]">Personalized care, near you.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal max-w-xl mx-auto">
              Please choose your preferred clinic location to explore specialized physiotherapy, neurological rehabilitation, and medical acupuncture tailored to your recovery.
            </p>
          </div>

          {/* ═══════════ 3 LOCATION CHOICES ═══════════ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {branches.map((branch) => (
              <article
                key={branch.slug}
                className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[30px] sm:rounded-[34px] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#064C3B]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Container */}
                  <div className="w-full h-52 sm:h-56 bg-stone-100 overflow-hidden relative">
                    <img
                      src={branch.image}
                      alt={`Dr. Jha clinic facility in ${branch.name}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-xs backdrop-blur-xs ${
                          branch.slug === 'mira-road'
                            ? 'bg-[#064C3B] text-white'
                            : 'bg-white/95 text-[#064C3B] border border-stone-200/80'
                        }`}
                      >
                        {branch.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#064C3B] block mb-1">
                        {branch.city}
                      </span>
                      <h2 className="font-serif text-2xl font-bold text-[#26332F] leading-tight">
                        {branch.name}
                      </h2>
                      <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed font-normal">
                        {branch.shortDescription}
                      </p>
                    </div>

                    {/* Quick Metadata */}
                    <div className="space-y-2.5 text-xs text-stone-600 pt-2 border-t border-stone-100">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed line-clamp-1">{branch.address}</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                        <span className="line-clamp-1">{branch.openingHours}</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                        <span className="font-semibold text-stone-800">{branch.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Select Clinic CTA */}
                <div className="p-6 sm:p-7 pt-0">
                  <button
                    type="button"
                    onClick={() => handleSelectBranch(branch.slug)}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] group-hover:shadow-md group-hover:shadow-[#064C3B]/20 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                  >
                    <span>Enter {branch.name} Clinic</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* ═══════════ BOTTOM REASSURANCE STRIP ═══════════ */}
          <div className="mt-14 sm:mt-18 text-center border-t border-stone-200/70 pt-8">
            <p className="text-xs text-stone-500 font-medium">
              Direct practitioner assessment and verified clinical protocols under Dr. Pranab Jha across all 3 centres.
            </p>
          </div>

        </div>
      </div>
    </PageContainer>
  )
}
