import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  GraduationCap,
  Award,
  Activity,
  MapPin,
  ClipboardCheck,
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  Phone
} from 'lucide-react'
import { doctors } from '../../data/team'

export default function ClinicalTeam() {
  // Dr. Pranab Jha is the founder & clinical lead
  const drJha = doctors.find((doc) => doc.id === 'dr-pranab-jha') || doctors[0]

  const principles = [
    {
      title: 'Personalized Treatment Plans',
      icon: <ClipboardCheck className="w-5 h-5 text-[#064C3B] stroke-[1.7]" />,
      desc: 'Customized protocols designed around your specific biomechanics and daily routine.'
    },
    {
      title: 'Evidence-Based Approach',
      icon: <ShieldCheck className="w-5 h-5 text-[#064C3B] stroke-[1.7]" />,
      desc: 'Techniques grounded in validated physical medicine and rehabilitation research.'
    },
    {
      title: 'Dedicated 1-on-1 Focus',
      icon: <HeartHandshake className="w-5 h-5 text-[#064C3B] stroke-[1.7]" />,
      desc: 'Hands-on clinician attention without rushed multi-patient sessions.'
    },
    {
      title: 'Focus on Long-Term Recovery',
      icon: <TrendingUp className="w-5 h-5 text-[#064C3B] stroke-[1.7]" />,
      desc: 'Sustainable relief and functional strength to prevent recurrent pain episodes.'
    },
  ]

  return (
    <section className="w-full bg-[#F8F6F0] pt-4 sm:pt-6 lg:pt-8 pb-16 sm:pb-20 lg:pb-24 font-sans antialiased text-[#26332F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ═══════════ SECTION HEADING ═══════════ */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.2em] text-[#064C3B] uppercase font-semibold mb-3">
            <span className="w-8 h-[1px] bg-[#064C3B]/40"></span>
            CLINICAL LEADERSHIP
            <span className="w-8 h-[1px] bg-[#064C3B]/40"></span>
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#26332F] leading-[1.12]">
            Clinical experience. <br />
            <span className="italic font-normal text-[#064C3B]">Personalized healing.</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto mt-4 leading-relaxed font-normal">
            Under the clinical direction of Dr. Pranab Jha, our team combines evidence-based physical rehabilitation and medical acupuncture to help you regain pain-free movement.
          </p>
        </div>

        {/* ═══════════ SINGLE FEATURED CLINICIAN CARD: DR. PRANAB JHA ═══════════ */}
        <div className="max-w-5xl mx-auto">
          <article className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[36px] overflow-hidden flex flex-col lg:flex-row shadow-[0_4px_24px_rgba(0,0,0,0.02)] ring-1 ring-[#064C3B]/10">
            {/* Left Side: Portrait Image (44%) */}
            <div className="lg:w-[44%] relative overflow-hidden bg-stone-100 min-h-[340px] sm:min-h-[420px] lg:min-h-full">
              <img
                src={drJha.image}
                alt={drJha.imageAlt || 'Dr. Pranab Jha - Founder & Clinical Lead'}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />

              {/* Founder Tag Badge */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase bg-white/95 text-[#064C3B] border border-stone-200/80 shadow-xs backdrop-blur-xs">
                  FOUNDER &amp; CLINICAL LEAD
                </span>
              </div>

              {/* Active Clinics Pill at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-10">
                <div className="bg-[#073D32]/90 backdrop-blur-md rounded-xl px-4 py-2.5 text-white flex items-center justify-between text-xs border border-white/10 shadow-md">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E5A500]" />
                    <span className="font-medium">Direct Clinical Practice</span>
                  </div>
                  <span className="font-semibold text-white/90">Mira Road • Vasai • Surat</span>
                </div>
              </div>
            </div>

            {/* Right Side: Detailed Clinician Content (56%) */}
            <div className="lg:w-[56%] p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
              <div>
                {/* Name & Title */}
                <div className="space-y-1.5">
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#26332F] leading-tight">
                    {drJha.name}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#064C3B]">
                    {drJha.role}
                  </p>
                </div>

                {/* Subtle Accent Divider */}
                <div className="w-14 h-0.5 bg-[#E5A500] my-5"></div>

                {/* Clinical Bio / Overview */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                  {drJha.description}
                </p>

                {/* Credentials & Details */}
                <div className="space-y-4">
                  {/* Qualifications */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                      <GraduationCap className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                        Qualifications &amp; Training
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-stone-800">
                        {drJha.qualification}
                      </p>
                    </div>
                  </div>

                  {/* Clinical Experience */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                      <Award className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                        Clinical Experience
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-stone-800">
                        10+ Years Dedicated Clinical Practice &amp; Rehabilitation
                      </p>
                    </div>
                  </div>

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
                        {drJha.specialization}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-8 mt-6 border-t border-stone-200/70 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] transition-all shadow-sm active:scale-[0.98]"
                >
                  <span>Meet the Full Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+919820012345"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#064C3B] bg-white border border-[#DCDDD5] hover:border-[#064C3B] hover:bg-[#F8F6F0] transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call for Appointment</span>
                </a>
              </div>
            </div>
          </article>
        </div>

        {/* ═══════════ TRUST / CARE PRINCIPLES STRIP ═══════════ */}
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-2xl sm:rounded-[28px] p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/70">
              {principles.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-2.5 ${
                    idx !== 0 ? 'pt-5 sm:pt-0 sm:pl-6' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F4F2EC] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-bold text-stone-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════ SUB-BANNER: MEET FULL TEAM ACROSS CLINICS ═══════════ */}
        <div className="max-w-5xl mx-auto mt-8 sm:mt-10 pt-6 border-t border-stone-300/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-stone-600 text-center sm:text-left">
            Our wider clinical team provides care across our Mira Road, Vasai, and Surat locations.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#064C3B] hover:text-[#073D32] group shrink-0"
          >
            <span>View All Clinicians &amp; Qualifications</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  )
}
