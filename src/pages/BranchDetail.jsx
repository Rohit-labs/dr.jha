import React from 'react'
import { useParams, Link } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import SectionHeading from '../components/common/SectionHeading'
import DoctorCard from '../components/about/DoctorCard'
import BranchInfo from '../components/branches/BranchInfo'
import BranchGallery from '../components/branches/BranchGallery'
import BranchFAQ from '../components/branches/BranchFAQ'
import NotFound from './NotFound'
import { getBranchBySlug, branches } from '../data/branches'
import { doctors } from '../data/team'
import {
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  MapPin,
  Clock,
  Phone,
  MessageSquare,
  ShieldCheck,
  Building2,
  Compass
} from 'lucide-react'

export default function BranchDetail() {
  const { slug } = useParams()
  const branch = getBranchBySlug(slug)

  // Gracefully resolve unknown branch slugs to the 404 page
  if (!branch) {
    return <NotFound />
  }

  // Filter clinicians associated with this physical branch
  const branchDoctors = doctors.filter((doc) =>
    doc.branches.includes(branch.name) || branch.doctorIds?.includes(doc.id)
  )

  // Other branches for exploratory navigation
  const otherBranches = branches.filter((b) => b.slug !== branch.slug)

  // Schema.org MedicalClinic structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: `Dr. Jha Physiotherapy & Acupuncture Centre - ${branch.name}`,
    image: branch.image,
    url: `https://drjhaphysiotherapy.com/branches/${branch.slug}`,
    telephone: branch.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: branch.address,
      addressLocality: branch.city,
      addressRegion: branch.state,
      postalCode: branch.pincode,
      addressCountry: 'IN'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: branch.timingDetails?.[0]?.hours?.split('–')?.[0]?.trim() || '08:30',
        closes: branch.timingDetails?.[0]?.hours?.split('–')?.[1]?.trim() || '20:30'
      }
    ],
    medicalSpecialty: ['Physiotherapy', 'Acupuncture', 'Rehabilitation']
  }

  return (
    <PageContainer>
      <SEO
        title={branch.seo?.pageTitle || `Physiotherapy & Acupuncture in ${branch.name} | Dr. Jha Centre`}
        description={branch.seo?.metaDescription || branch.description}
        canonicalUrl={branch.seo?.canonicalUrl || `https://drjhaphysiotherapy.com/branches/${branch.slug}`}
        ogImage={branch.image}
        structuredData={structuredData}
      />

      <div className="w-full">
        {/* ════════════════════════════════════════════════════════════
            SECTION 1 — LOCAL HERO
        ════════════════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 sm:pb-16">
          <Breadcrumbs
            items={[
              { label: 'Our Locations', href: '/branches' },
              { label: branch.name }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold tracking-[0.2em] text-[#064C3B] uppercase">
                  {branch.city}
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-stone-200/80 text-stone-700">
                  {branch.tag}
                </span>
              </div>

              {/* Single H1 per branch page */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-[1.14]">
                Physiotherapy &amp; Acupuncture in <span className="text-[#064C3B]">{branch.name}</span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal max-w-xl">
                {branch.description}
              </p>

              {/* Dual Hero CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href={`tel:${branch.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] active:scale-[0.98] transition-all shadow-md shadow-[#064C3B]/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us for Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {branch.mapUrl && (
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-stone-800 bg-white border border-stone-300 hover:border-stone-800 hover:bg-stone-50 active:scale-[0.98] transition-all"
                  >
                    <MapPin className="w-4 h-4 text-[#064C3B]" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                  </a>
                )}
              </div>

              {/* Quick Contact Line */}
              <div className="pt-4 border-t border-stone-200/70 flex items-center gap-2 text-xs text-stone-600">
                <span className="font-medium text-stone-700">Helpline:</span>
                <a
                  href={`tel:${branch.phone.replace(/[^0-9+]/g, '')}`}
                  className="font-bold text-[#064C3B] hover:text-[#073D32] transition-colors"
                >
                  {branch.phone}
                </a>
                <span>•</span>
                <span>{branch.openingHours}</span>
              </div>
            </div>

            {/* Hero Right Image */}
            <div className="lg:col-span-5">
              <div className="w-full h-72 sm:h-84 lg:h-96 rounded-3xl overflow-hidden shadow-lg bg-stone-200 relative border border-stone-200/80">
                <img
                  src={branch.image}
                  alt={`Dr. Jha Physiotherapy clinic examination facility in ${branch.name}`}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/95 text-[#064C3B] font-bold text-xs shadow-xs border border-stone-200/80">
                    {branch.name} Facility
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 2 — ABOUT THE CLINIC
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-[#F8F6F0] py-14 sm:py-18 border-y border-stone-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#064C3B] block">
                  Clinical Overview
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#26332F] leading-tight">
                  About the {branch.name} Clinic
                </h2>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                  {branch.about || branch.description}
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
                  <div className="flex items-center gap-2 p-3 bg-white rounded-2xl border border-stone-200/70">
                    <CheckCircle2 className="w-4 h-4 text-[#064C3B] shrink-0" />
                    <span>Supervised Under Dr. Jha Protocol</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-white rounded-2xl border border-stone-200/70">
                    <CheckCircle2 className="w-4 h-4 text-[#064C3B] shrink-0" />
                    <span>Single-Use Sterile Acupuncture Needles</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-white rounded-2xl border border-stone-200/70">
                    <CheckCircle2 className="w-4 h-4 text-[#064C3B] shrink-0" />
                    <span>Individual Private Treatment Bays</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-white rounded-2xl border border-stone-200/70">
                    <CheckCircle2 className="w-4 h-4 text-[#064C3B] shrink-0" />
                    <span>Direct Doctor-Led Assessment</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] p-6 sm:p-7 space-y-3.5 shadow-xs">
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-stone-400 block">
                  Quick Branch Summary
                </span>
                <div className="space-y-2.5 text-xs text-stone-600">
                  <div className="flex justify-between pb-2 border-b border-stone-100">
                    <span className="font-medium text-stone-800">Primary Location:</span>
                    <span>{branch.city}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-stone-100">
                    <span className="font-medium text-stone-800">Branch Classification:</span>
                    <span className="font-semibold text-[#064C3B]">{branch.tag}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-stone-100">
                    <span className="font-medium text-stone-800">Postal Code:</span>
                    <span>{branch.pincode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-stone-800">Mode of Care:</span>
                    <span>In-Person Clinical Practice</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 3 — CLINIC INFORMATION BLOCK
        ════════════════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <BranchInfo branch={branch} />
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 4 — TREATMENTS AVAILABLE AT THIS BRANCH
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-[#F8F6F0] py-14 sm:py-18 border-y border-stone-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <SectionHeading
                eyebrow="Therapy Modalities"
                title="Treatments Available at"
                highlight={branch.name}
                description="Evidence-based rehabilitation modalities administered by qualified practitioners according to your clinical diagnosis."
              />
              <Link
                to="/treatments"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#064C3B] hover:underline"
              >
                <span>View all treatments</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {branch.treatments?.map((treatment, idx) => (
                <div
                  key={idx}
                  className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-2xl p-5 sm:p-6 shadow-xs hover:border-stone-400 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#064C3B] block mb-1.5">
                      {treatment.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#26332F] mb-2">
                      {treatment.name}
                    </h3>
                  </div>
                  <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between">
                    <Link
                      to={`/treatments/${treatment.slug}`}
                      className="text-xs font-semibold text-stone-700 hover:text-[#064C3B] inline-flex items-center gap-1"
                    >
                      <span>Treatment Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <CheckCircle2 className="w-4 h-4 text-[#064C3B]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 5 — CONDITIONS WE HELP WITH
        ════════════════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionHeading
              eyebrow="Clinical Diagnoses"
              title="Conditions We Help With in"
              highlight={branch.name}
              description="Common complaints and diagnoses evaluated and treated at this centre through customized physical therapy plans."
            />
            <Link
              to="/conditions"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#064C3B] hover:underline"
            >
              <span>Explore conditions directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {branch.conditions?.map((cond, idx) => (
              <Link
                key={idx}
                to={`/conditions/${cond.slug}`}
                className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-2xl p-5 hover:border-[#064C3B] transition-colors shadow-xs flex items-center justify-between group"
              >
                <div>
                  <span className="text-xs font-bold text-stone-900 group-hover:text-[#064C3B] transition-colors block">
                    {cond.name}
                  </span>
                  <span className="text-[11px] text-stone-500 block mt-0.5">
                    Targeted recovery protocol
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#064C3B] group-hover:translate-x-0.5 transition-all shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 6 — CLINICAL TEAM AT THIS BRANCH
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-[#F8F6F0] py-14 sm:py-18 border-y border-stone-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Resident Practitioners"
              title="Clinical Team at"
              highlight={branch.name}
              description="Meet the clinical professionals who bring experience, knowledge, and personalized care to patients visiting this branch."
              className="mb-10"
            />

            {branchDoctors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {branchDoctors.map((doc) => (
                  <DoctorCard key={doc.id} doctor={doc} />
                ))}
              </div>
            ) : (
              <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-8 text-center text-xs text-stone-500">
                Clinical team profiles for this branch are verified directly by our administration.
              </div>
            )}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 7 — INSIDE THE CLINIC (GALLERY)
        ════════════════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <BranchGallery gallery={branch.gallery} branchName={branch.name} />
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 8 — PATIENT EXPERIENCES
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-[#F8F6F0] py-14 sm:py-18 border-y border-stone-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              centered
              eyebrow="Patient Feedback"
              title="Patient Experiences at"
              highlight={branch.name}
              description="Verified patient experiences and observations from treatment sessions at this clinic location."
              className="mb-10"
            />

            <div className="max-w-2xl mx-auto bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] p-6 sm:p-8 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#064C3B]">
                  {branch.name} Clinic
                </span>
                <span className="text-[10px] text-stone-400 font-medium">
                  Verified Observation
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed pt-2">
                "{branch.reviews?.[0]?.quote || '[Verified patient review will be displayed here]'}"
              </p>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <strong className="block text-stone-900 font-semibold">
                    {branch.reviews?.[0]?.author || '[Patient Name / Initials]'}
                  </strong>
                  <span className="text-[11px] text-stone-500">
                    {branch.reviews?.[0]?.location || branch.city}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#064C3B]">
                  ★★★★★
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 9 — FAQ
        ════════════════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <BranchFAQ faqs={branch.faqs} branchName={branch.name} />
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 10 — MAP + CONTACT OVERVIEW
        ════════════════════════════════════════════════════════════ */}
        <section className="bg-[#064C3B] text-white py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E5A500] block">
                  Find &amp; Reach Us
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                  Visiting the {branch.name} Centre
                </h2>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl font-normal">
                  Our clinic team is available to assist you with navigation, transit directions, and appointment scheduling.
                </p>

                <div className="space-y-2.5 pt-2 text-xs text-stone-200">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#E5A500] shrink-0 mt-0.5" />
                    <span>{branch.fullAddress}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#E5A500] shrink-0" />
                    <span>{branch.openingHours}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#E5A500] shrink-0" />
                    <span className="font-semibold">{branch.phone}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  {branch.mapUrl && (
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-stone-900 bg-white hover:bg-stone-100 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#064C3B]" />
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {branch.whatsapp && (
                    <a
                      href={`https://wa.me/${branch.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Clinic</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Other Locations Card */}
              <div className="lg:col-span-5 bg-white/10 rounded-3xl p-6 border border-white/15 space-y-3">
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-stone-300 block">
                  Other Clinic Locations
                </span>
                <div className="space-y-2">
                  {otherBranches.map((ob) => (
                    <Link
                      key={ob.slug}
                      to={`/branches/${ob.slug}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <div>
                        <span className="text-xs font-semibold text-white group-hover:text-[#E5A500] transition-colors block">
                          {ob.name} Clinic
                        </span>
                        <span className="text-[10px] text-stone-300 block">
                          {ob.city}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════
            SECTION 11 — FINAL CTA
        ════════════════════════════════════════════════════════════ */}
        <section id="book" className="bg-[#F8F6F0] py-16 sm:py-20 border-t border-stone-200/70 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#064C3B] block">
              Direct Clinical Consultation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-tight">
              Call Us for Appointment at <br />
              <span className="italic font-normal text-[#064C3B]">{branch.name}</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              Speak directly with our clinic desk at {branch.phone} or reserve your evaluation slot. We are committed to helping you understand your condition and regain pain-free movement.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href={`tel:${branch.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] active:scale-[0.98] transition-all shadow-md shadow-[#064C3B]/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us for Appointment ({branch.phone})</span>
              </a>

              <Link
                to="/branches"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-stone-800 bg-white border border-stone-300 hover:border-stone-800 hover:bg-stone-50 active:scale-[0.98] transition-all"
              >
                <Compass className="w-4 h-4 text-stone-500" />
                <span>Find Another Location</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  )
}
