import React from 'react'
import {
  ArrowRight,
  GraduationCap,
  Award,
  Activity,
  ClipboardCheck,
  ShieldCheck,
  HeartHandshake,
  TrendingUp
} from 'lucide-react'

export default function ClinicalTeam() {
  const doctors = [
    {
      name: 'Dr. Pranab Jha',
      role: 'Physiotherapist & Acupuncture Specialist',
      tag: 'FOUNDER',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop&q=80',
      imageAlt: 'Dr. Pranab Jha performing physiotherapy assessment and care',
      qualifications: 'BAPD & Additional Certifications',
      experience: '10+ Years of Clinical Experience',
      expertise: 'Physiotherapy, Rehabilitation & Acupuncture',
      profileHref: '#profile-dr-pranab-jha',
      isPrimary: true,
    },
    {
      name: 'Dr. [Name]',
      role: 'Physiotherapist',
      tag: 'MIRA ROAD CLINIC',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&auto=format&fit=crop&q=80',
      imageAlt: 'Physiotherapy clinician conducting clinical rehabilitation session',
      qualifications: '[Qualifications / Degree Placeholder]',
      experience: '[Clinical Experience Placeholder]',
      expertise: '[Musculoskeletal & Sports Rehabilitation / Placeholder]',
      profileHref: '#profile-associate-doctor',
      isPrimary: false,
    },
  ]

  const principles = [
    {
      title: 'Personalized Treatment Plans',
      icon: <ClipboardCheck className="w-5 h-5 text-[#2D4536] stroke-[1.6]" />,
    },
    {
      title: 'Evidence-Based Approach',
      icon: <ShieldCheck className="w-5 h-5 text-[#2D4536] stroke-[1.6]" />,
    },
    {
      title: 'Compassionate Patient Care',
      icon: <HeartHandshake className="w-5 h-5 text-[#2D4536] stroke-[1.6]" />,
    },
    {
      title: 'Focus on Long-Term Recovery',
      icon: <TrendingUp className="w-5 h-5 text-[#2D4536] stroke-[1.6]" />,
    },
  ]

  return (
    <section className="w-full bg-[#F5F2EC] pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-24 font-sans antialiased text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ═══════════ SECTION HEADING ═══════════ */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Small Eyebrow */}
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.2em] text-[#4A6453] uppercase font-semibold mb-3">
            <span className="w-8 h-[1px] bg-[#4A6453]/40"></span>
            MEET OUR CLINICAL TEAM
            <span className="w-8 h-[1px] bg-[#4A6453]/40"></span>
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#1A1A1A] leading-[1.12]">
            Experienced hands. <br />
            <span className="italic font-normal text-[#A6543D]">Personalized care.</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto mt-4 leading-relaxed font-normal">
            Our clinicians combine clinical expertise, personalized assessment and rehabilitation-focused care to help you move toward a better, healthier life.
          </p>
        </div>

        {/* ═══════════ TWO LARGE DOCTOR PROFILE COMPOSITIONS ═══════════ */}
        <div className="max-w-6xl mx-auto flex flex-col gap-8 lg:gap-10">
          {doctors.map((doctor, idx) => (
            <article
              key={idx}
              className={`bg-[#FAF8F5] border border-[#E8E2D8] rounded-[28px] sm:rounded-[36px] overflow-hidden flex flex-col lg:flex-row shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] ${
                doctor.isPrimary ? 'ring-1 ring-[#A6543D]/10' : ''
              }`}
            >
              {/* Left Side: Large Portrait / Clinical Photograph (46%) */}
              <div className="lg:w-[46%] relative overflow-hidden bg-stone-100 min-h-[300px] sm:min-h-[380px] lg:min-h-full">
                <img
                  src={doctor.image}
                  alt={doctor.imageAlt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />

                {/* Small Contextual Pill Label on Image */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-[10.5px] font-bold tracking-[0.16em] uppercase bg-white/95 text-[#2D4536] border border-stone-200/70 shadow-xs backdrop-blur-xs">
                    {doctor.tag}
                  </span>
                </div>
              </div>

              {/* Right Side: Doctor Information (54%) */}
              <div className="lg:w-[54%] p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
                <div>
                  {/* Name & Role */}
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#1A1A1A] leading-tight">
                      {doctor.name}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-stone-600">
                      {doctor.role}
                    </p>
                  </div>

                  {/* Subtle Accent Divider */}
                  <div className="w-12 h-px bg-[#A6543D]/40 my-6"></div>

                  {/* Clinical Information Rows */}
                  <div className="space-y-5">
                    {/* Qualifications */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-stone-100/90 flex items-center justify-center shrink-0 text-stone-700 mt-0.5">
                        <GraduationCap className="w-4 h-4 stroke-[1.6]" />
                      </div>
                      <div>
                        <span className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                          Qualifications
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-stone-800">
                          {doctor.qualifications}
                        </p>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-stone-100/90 flex items-center justify-center shrink-0 text-stone-700 mt-0.5">
                        <Award className="w-4 h-4 stroke-[1.6]" />
                      </div>
                      <div>
                        <span className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                          Clinical Experience
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-stone-800">
                          {doctor.experience}
                        </p>
                      </div>
                    </div>

                    {/* Special Interests / Clinical Expertise */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-stone-100/90 flex items-center justify-center shrink-0 text-stone-700 mt-0.5">
                        <Activity className="w-4 h-4 stroke-[1.6]" />
                      </div>
                      <div>
                        <span className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                          Clinical Expertise
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-stone-800">
                          {doctor.expertise}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Link CTA */}
                <div className="pt-8 mt-2">
                  <a
                    href={doctor.profileHref}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1A1A1A] hover:text-[#A6543D] transition-colors group w-fit"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ═══════════ TRUST / CARE PRINCIPLES STRIP ═══════════ */}
        <div className="max-w-6xl mx-auto mt-12 sm:mt-16">
          <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl sm:rounded-[28px] p-5 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/70">
              {principles.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3.5 ${
                    idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-stone-100/80 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold text-stone-800 leading-snug">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ BOTTOM LABEL + CTA ═══════════ */}
        <div className="max-w-6xl mx-auto mt-10 sm:mt-12 pt-6 border-t border-stone-300/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="block text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-stone-500">
              Mira Road
            </span>
            <span className="block text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-stone-500">
              Clinical Team
            </span>
          </div>

          <a
            href="#meet-team"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full border border-stone-300 hover:border-stone-800 text-stone-800 hover:text-black text-xs sm:text-sm font-semibold transition-all duration-200 hover:bg-white active:scale-[0.98]"
          >
            <span>Meet the Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  )
}
