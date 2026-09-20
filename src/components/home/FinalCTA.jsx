import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Clock, MapPin, Phone, MessageCircle } from 'lucide-react'

export default function FinalCTA({ branch }) {
  const guarantees = [
    {
      icon: <Clock className="w-4 h-4 text-[#064C3B]" />,
      title: '45-Min Detailed Assessment',
      description: 'Comprehensive evaluation of biomechanics, posture, and pain root causes.'
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#064C3B]" />,
      title: 'Evidence-Based Protocols',
      description: 'Personalized integration of physical therapy, manual techniques & acupuncture.'
    },
    {
      icon: <MapPin className="w-4 h-4 text-[#064C3B]" />,
      title: branch ? `${branch.name} Clinic` : '3 Dedicated Clinics',
      description: branch ? branch.address : 'Fully equipped rehabilitation centres across Mira Road, Vasai, and Surat.'
    }
  ]

  const branchHelplines = [
    { name: 'Mira Road', phone: '+91 91460 36559 / +91 74983 13922', tel: '+919146036559' },
    { name: 'Vasai', phone: '+91 87679 33950', tel: '+918767933950' },
    { name: 'Surat', phone: '+91 97245 94793', tel: '+919724594793' }
  ]

  const activePhone = branch?.phone ? branch.phone.replace(/[^0-9+]/g, '') : '+919146036559'
  const activeWhatsapp = branch?.whatsapp ? branch.whatsapp.replace(/[^0-9]/g, '') : '919146036559'

  return (
    <section
      id="book"
      aria-labelledby="final-cta-heading"
      className="w-full bg-[#F8F6F0] py-16 sm:py-20 lg:py-24 font-sans antialiased text-[#26332F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Sanctuary Card */}
        <div className="relative bg-[#FCFBF7] border border-[#DCDDD5] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
          
          {/* Subtle Botanical SVG Accent in Background */}
          <svg
            className="absolute -right-16 -bottom-16 w-80 h-80 text-[#064C3B]/[0.04] pointer-events-none select-none"
            viewBox="0 0 200 200"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M50 190C50 190 40 110 20 60C0 15 10 -5 30 -8C50 -11 60 10 55 40C50 70 40 140 35 190Z" />
            <path d="M70 180C70 180 65 120 80 75C95 30 88 8 68 5" stroke="currentColor" fill="none" strokeWidth="2" opacity="0.4" />
          </svg>

          <div className="relative z-10 max-w-3xl">
            
            {/* Eyebrow */}
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E5A500] block mb-3">
              TAKE THE NEXT STEP
            </span>

            {/* Main Heading */}
            <h2
              id="final-cta-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-[1.15] mb-4"
            >
              Ready to take <br />
              <span className="italic font-normal text-[#064C3B]">the next step?</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal mb-8 sm:mb-10 max-w-2xl">
              {branch
                ? `Whether you are recovering from an injury, managing chronic pain, or seeking preventative care, our team at ${branch.name} is ready to guide your recovery.`
                : 'Whether you are recovering from an injury, managing chronic pain, or seeking preventative rehabilitation, our senior physiotherapists are ready to guide your journey to lasting recovery.'}
            </p>

            {/* 3 Peace-of-Mind Clinical Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-10 pb-10 border-b border-stone-200/80">
              {guarantees.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-xs">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-xs sm:text-sm text-stone-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed pl-9">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              {/* Primary: Call Us for Appointment */}
              <a
                href={`tel:${activePhone}`}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] shadow-md shadow-[#064C3B]/20 hover:shadow-lg transition-all active:scale-[0.98] group"
              >
                <Phone className="w-4 h-4" />
                <span>{branch?.secondaryPhone ? 'Call Dr. Pranab' : 'Call Us for Appointment'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Call if available (e.g. Hr. Anupam on Mira Road) */}
              {branch?.secondaryPhone && (
                <a
                  href={`tel:${branch.secondaryPhone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#064C3B] bg-white hover:bg-[#F8F6F0] border border-[#064C3B]/40 hover:border-[#064C3B] transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#064C3B]" />
                  <span>Call Hr. Anupam</span>
                </a>
              )}

              {/* Secondary: Choose Location */}
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#26332F] bg-white hover:bg-[#F8F6F0] border border-[#DCDDD5] hover:border-[#064C3B] transition-all shadow-xs"
              >
                <MapPin className="w-4 h-4 text-[#064C3B]" />
                <span>Change Location</span>
              </Link>

              {/* WhatsApp Secondary Option */}
              <a
                href={`https://wa.me/${activeWhatsapp}?text=Hello%20Dr.%20Jha%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-[#DCDDD5] hover:border-stone-400 transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Clinic Helplines */}
            <div className="pt-6 border-t border-stone-200/60 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs text-stone-600">
              <span className="font-medium text-stone-700">Direct Branch Lines:</span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {branchHelplines.map((branch, idx) => (
                  <a
                    key={idx}
                    href={`tel:${branch.tel}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-stone-700 hover:text-[#064C3B] border border-stone-200/80 transition-colors font-medium text-[11px]"
                  >
                    <Phone className="w-3 h-3 text-[#064C3B]" />
                    <span>{branch.name}: {branch.phone}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
