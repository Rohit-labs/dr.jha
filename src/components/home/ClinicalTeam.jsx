import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  GraduationCap,
  Activity,
  MapPin,
  ShieldCheck,
  Phone,
  Clock
} from 'lucide-react'
import { doctors } from '../../data/team'

export default function ClinicalTeam({ branch }) {
  // Determine which doctors belong to the current branch
  const branchDoctors = useMemo(() => {
    if (!branch) {
      // Default: Mira Road team (Dr. Pranab Jha & Hr. Anupam Jha)
      return doctors.filter(
        (doc) => doc.id === 'dr-pranab-jha' || doc.id === 'hr-anupam-jha'
      )
    }

    if (branch.slug === 'vasai') {
      return doctors.filter((doc) => doc.id === 'hr-shweta-jha')
    }

    if (branch.slug === 'surat') {
      return doctors.filter((doc) => doc.id === 'hr-samta-salecha')
    }

    if (branch.slug === 'mira-road') {
      return doctors.filter(
        (doc) => doc.id === 'dr-pranab-jha' || doc.id === 'hr-anupam-jha'
      )
    }

    // Fallback based on doctorIds in branch data
    if (branch.doctorIds && branch.doctorIds.length > 0) {
      return doctors.filter((doc) => branch.doctorIds.includes(doc.id))
    }

    return [doctors[0]]
  }, [branch])

  return (
    <section className="w-full bg-[#F8F6F0] pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-24 font-sans antialiased text-[#26332F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ═══════════ SECTION HEADING ═══════════ */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.2em] text-[#064C3B] uppercase font-semibold mb-3">
            <span className="w-8 h-[1px] bg-[#064C3B]/40"></span>
            <span>MEET YOUR {branch?.name ? branch.name.toUpperCase() : 'CARE'} TEAM</span>
            <span className="w-8 h-[1px] bg-[#064C3B]/40"></span>
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#26332F] leading-[1.12]">
            Clinical Experience, <br />
            <span className="italic font-normal text-[#064C3B]">Personal Care.</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto mt-4 leading-relaxed font-normal">
            {branch?.slug === 'mira-road' || !branch
              ? 'Under the clinical leadership of Dr. Pranab Jha and Hr. Anupam Jha, our Mira Road centre combines evidence-based physiotherapy and medical acupuncture for lasting recovery.'
              : branch?.slug === 'vasai'
              ? 'Under Hr. Shweta Jha, our Vasai centre delivers specialized naturopathy, therapeutic yoga, and acupuncture care tailored to your recovery.'
              : branch?.slug === 'surat'
              ? 'Under Hr. Samta Salecha, our Surat clinic provides advanced acupuncture medicine and dedicated musculoskeletal rehabilitation.'
              : 'Our clinical specialists combine evidence-based rehabilitation and medical acupuncture to help you regain pain-free movement.'}
          </p>
        </div>

        {/* ═══════════ DOCTORS DISPLAY ═══════════ */}
        {branchDoctors.length > 1 ? (
          /* ────── MULTI-DOCTOR: SIDE-BY-SIDE CARDS (MIRA ROAD) ────── */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {branchDoctors.map((doc) => {
              const callNumber = doc.phone
                ? doc.phone.replace(/[^0-9+]/g, '')
                : (branch?.phone ? branch.phone.replace(/[^0-9+]/g, '') : '+919146036559')
              const shortName = doc.id === 'dr-pranab-jha' ? 'Dr. Pranab' : 'Hr. Anupam'

              return (
                <article
                  key={doc.id}
                  className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[36px] overflow-hidden flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] ring-1 ring-[#064C3B]/10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all group"
                >
                  <div>
                    {/* Portrait Photography */}
                    <div className="relative overflow-hidden bg-stone-100 h-72 sm:h-80 w-full">
                      <img
                        src={doc.image}
                        alt={doc.imageAlt || `${doc.name} - ${doc.role}`}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        style={{ objectPosition: doc.imagePosition || 'center 25%' }}
                        loading="lazy"
                      />

                      {/* Role Tag Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase bg-white/95 text-[#064C3B] border border-stone-200/80 shadow-xs backdrop-blur-xs">
                          {doc.id === 'dr-pranab-jha' ? 'FOUNDER & CLINICAL LEAD' : doc.role.toUpperCase()}
                        </span>
                      </div>

                      {/* Experience Badge */}
                      {doc.experience && (
                        <div className="absolute top-4 right-4 z-10">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wide bg-[#073D32]/90 text-white shadow-xs backdrop-blur-xs border border-white/10">
                            <Clock className="w-3.5 h-3.5 text-[#E5A500]" />
                            <span>{doc.experience}</span>
                          </span>
                        </div>
                      )}

                      {/* Active Clinic Location Pill */}
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold bg-[#073D32]/90 text-white shadow-xs backdrop-blur-xs border border-white/10">
                          <MapPin className="w-3.5 h-3.5 text-[#E5A500]" />
                          <span>{doc.branches ? doc.branches.join(' • ') : 'Mira Road Centre'}</span>
                        </span>
                      </div>
                    </div>

                    {/* Clinician Content Body */}
                    <div className="p-6 sm:p-8">
                      {/* Name & Role Header */}
                      <div className="space-y-1">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#26332F] leading-tight group-hover:text-[#064C3B] transition-colors">
                          {doc.name}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-[#064C3B]">
                          {doc.role}
                        </p>
                      </div>

                      {/* Accent Divider */}
                      <div className="w-12 h-0.5 bg-[#E5A500] my-4"></div>

                      {/* Bio */}
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                        {doc.description}
                      </p>

                      {/* Credentials & Details List */}
                      <div className="space-y-3.5 pt-2 border-t border-stone-200/70">
                        {/* Qualification */}
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                            <GraduationCap className="w-4 h-4 stroke-[1.8]" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                              Medical Designation
                            </span>
                            <p className="text-xs sm:text-sm font-semibold text-stone-800">
                              {doc.qualification}
                            </p>
                          </div>
                        </div>

                        {/* Specialization */}
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                            <Activity className="w-4 h-4 stroke-[1.8]" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                              Specialized Focus
                            </span>
                            <p className="text-xs sm:text-sm font-semibold text-stone-800">
                              {doc.specialization}
                            </p>
                          </div>
                        </div>

                        {/* Memberships */}
                        {doc.memberships && doc.memberships.length > 0 && (
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                              <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
                            </div>
                            <div>
                              <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                                Professional Memberships
                              </span>
                              <p className="text-xs sm:text-sm font-semibold text-stone-800">
                                {doc.memberships.join(' • ')}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center gap-3">
                    <a
                      href={`tel:${callNumber}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] transition-all shadow-xs active:scale-[0.98]"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call {shortName}: {doc.phone || '+91 91460 36559'}</span>
                    </a>

                    <Link
                      to="/about"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#064C3B] bg-white border border-[#DCDDD5] hover:border-[#064C3B] hover:bg-[#F8F6F0] transition-all"
                    >
                      <span>Full Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        ) : (
          /* ────── SINGLE DOCTOR (VASAI / SURAT): EXPANSIVE EDITORIAL CARD ────── */
          <div className="max-w-5xl mx-auto">
            <article className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[36px] overflow-hidden flex flex-col lg:flex-row shadow-[0_4px_24px_rgba(0,0,0,0.02)] ring-1 ring-[#064C3B]/10">
              
              {/* Left Column: Portrait Photo (44%) */}
              <div className="lg:w-[44%] relative overflow-hidden bg-stone-100 min-h-[380px] sm:min-h-[440px] lg:min-h-[520px]">
                <img
                  src={branchDoctors[0].image}
                  alt={branchDoctors[0].imageAlt || `${branchDoctors[0].name} - ${branchDoctors[0].role}`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: branchDoctors[0].imagePosition || 'center 25%' }}
                  loading="lazy"
                />

                {/* Doctor Role Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20">
                  <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase bg-white/95 text-[#064C3B] border border-stone-200/80 shadow-xs backdrop-blur-xs">
                    {branchDoctors[0].role}
                  </span>
                </div>

                {/* Active Clinics Pill at Bottom */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-20">
                  <div className="bg-[#073D32]/90 backdrop-blur-md rounded-xl px-4 py-2.5 text-white flex items-center justify-between text-xs border border-white/10 shadow-md">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#E5A500]" />
                      <span className="font-medium">Direct Clinical Practice</span>
                    </div>
                    <span className="font-semibold text-white/90">
                      {branchDoctors[0].branches ? branchDoctors[0].branches.join(' • ') : branch?.name || 'Clinic'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Clinical Details (56%) */}
              <div className="lg:w-[56%] p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
                <div>
                  {/* Name & Role Header */}
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#26332F] leading-tight">
                      {branchDoctors[0].name}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[#064C3B]">
                      {branchDoctors[0].role}
                    </p>
                  </div>

                  {/* Subtle Accent Divider */}
                  <div className="w-14 h-0.5 bg-[#E5A500] my-5"></div>

                  {/* Clinical Bio / Overview */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                    {branchDoctors[0].description}
                  </p>

                  {/* Credentials & Details List */}
                  <div className="space-y-3.5">
                    {/* Medical Designation */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                        <GraduationCap className="w-4 h-4 stroke-[1.8]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                          Medical Designation
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-stone-800">
                          {branchDoctors[0].qualification}
                        </p>
                      </div>
                    </div>

                    {/* Clinical Experience */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                        <Clock className="w-4 h-4 stroke-[1.8]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                          Clinical Experience
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-stone-800">
                          {branchDoctors[0].experience || 'Dedicated Clinical Practice'}
                        </p>
                      </div>
                    </div>

                    {/* Memberships */}
                    {branchDoctors[0].memberships && branchDoctors[0].memberships.length > 0 && (
                      <div className="flex items-start gap-3.5">
                        <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                          <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                            Professional Memberships
                          </span>
                          <p className="text-xs sm:text-sm font-semibold text-stone-800">
                            {branchDoctors[0].memberships.join(' • ')}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Specialization */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                        <Activity className="w-4 h-4 stroke-[1.8]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                          Specialized Focus
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-stone-800">
                          {branchDoctors[0].specialization}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions Bar */}
                <div className="pt-6 sm:pt-8 mt-6 border-t border-stone-200/70 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] transition-all shadow-sm active:scale-[0.98]"
                  >
                    <span>Meet the Full Team</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`tel:${branchDoctors[0]?.phone ? branchDoctors[0].phone.replace(/[^0-9+]/g, '') : (branch?.phone ? branch.phone.replace(/[^0-9+]/g, '') : '+919146036559')}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#064C3B] bg-white border border-[#DCDDD5] hover:border-[#064C3B] hover:bg-[#F8F6F0] transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {branchDoctors[0].name}: {branchDoctors[0].phone || branch?.phone || '+91 91460 36559'}</span>
                  </a>
                </div>

              </div>

            </article>
          </div>
        )}

      </div>
    </section>
  )
}
