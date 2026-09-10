import React from 'react'
import { Calendar, ArrowRight, ShieldCheck, Clock, MapPin, Phone, MessageCircle } from 'lucide-react'

export default function FinalCTA() {
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
      title: '3 Dedicated Clinics',
      description: 'Fully equipped rehabilitation centres across Mira Road, Vasai, and Surat.'
    }
  ]

  const branchHelplines = [
    { name: 'Mira Road', phone: '+91 98200 12345', tel: '+919820012345' },
    { name: 'Vasai', phone: '+91 98200 67890', tel: '+919820067890' },
    { name: 'Surat', phone: '+91 98200 11223', tel: '+919820011223' }
  ]

  return (
    <section
      id="book"
      aria-labelledby="final-cta-heading"
      className="w-full bg-[#F8F6F0] py-16 sm:py-20 lg:py-24"
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
              Your path to pain-free movement<br />
              <span className="italic font-normal text-[#064C3B]">begins with an evaluation.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal mb-8 sm:mb-10 max-w-2xl">
              Whether you are recovering from surgery, managing chronic pain, or seeking preventative rehabilitation, our senior physiotherapists and acupuncture specialists are here to guide your recovery with individualized clinical care.
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

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <a
                href="tel:+919820012345"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] shadow-md shadow-[#064C3B]/20 hover:shadow-lg transition-all active:scale-[0.98] group"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us for Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/919820012345?text=Hello%20Dr.%20Jha%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-[#DCDDD5] hover:border-stone-400 transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
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
