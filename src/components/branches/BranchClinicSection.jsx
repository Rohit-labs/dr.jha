import React from 'react'
import { MapPin, Clock, Phone, ExternalLink, Navigation, Car, MessageCircle } from 'lucide-react'

export default function BranchClinicSection({ branch }) {
  if (!branch) return null

  return (
    <section className="w-full bg-[#F8F6F0] py-16 sm:py-20 lg:py-24 font-sans antialiased text-[#26332F] relative overflow-hidden border-y border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ═══════════ SECTION HEADING ═══════════ */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.2em] text-[#064C3B] uppercase font-semibold mb-3">
            <span className="w-8 h-[1px] bg-[#064C3B]/40"></span>
            OUR {branch.name.toUpperCase()} CLINIC
            <span className="w-8 h-[1px] bg-[#064C3B]/40"></span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#26332F] leading-[1.12]">
            Visiting our <br />
            <span className="italic font-normal text-[#064C3B]">{branch.name} Centre.</span>
          </h2>

          <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto mt-4 leading-relaxed font-normal">
            {branch.about || branch.description}
          </p>
        </div>

        {/* ═══════════ CLINIC FEATURE CARD ═══════════ */}
        <div className="max-w-6xl mx-auto bg-[#073D32] rounded-[30px] sm:rounded-[36px] overflow-hidden text-white shadow-xl shadow-stone-900/10 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Content Area (58%) */}
            <div className="lg:col-span-7 p-7 sm:p-9 lg:p-11 xl:p-12 flex flex-col justify-between">
              <div>
                {/* Header Labels */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E5A500]">
                    {branch.name}
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-white/10 text-stone-200 px-2.5 py-0.5 rounded-full border border-white/10">
                    {branch.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-white leading-tight mb-6">
                  Dr. Jha Physiotherapy &amp; Acupuncture Centre
                </h3>

                {/* Verified Metadata Rows */}
                <div className="space-y-4 text-stone-200 text-xs sm:text-[13px] mb-8">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#E5A500] shrink-0 mt-0.5" />
                    <div>
                      <address className="not-italic leading-relaxed text-stone-200">
                        {branch.fullAddress || branch.address}
                      </address>
                      {branch.landmark && (
                        <span className="text-[11px] text-stone-300 block mt-0.5">
                          Landmark: {branch.landmark}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Transit & Parking */}
                  {branch.transitInfo && (
                    <div className="flex items-start gap-3">
                      <Navigation className="w-4 h-4 text-[#E5A500] shrink-0 mt-0.5" />
                      <span className="text-stone-300 text-xs leading-relaxed">
                        {branch.transitInfo}
                      </span>
                    </div>
                  )}

                  {branch.parking && (
                    <div className="flex items-start gap-3">
                      <Car className="w-4 h-4 text-[#E5A500] shrink-0 mt-0.5" />
                      <span className="text-stone-300 text-xs leading-relaxed">
                        {branch.parking}
                      </span>
                    </div>
                  )}

                  {/* Consultation Timings */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#E5A500] shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium text-white mb-1">Consultation Hours</span>
                      {branch.timingDetails && branch.timingDetails.length > 0 ? (
                        <div className="space-y-1 text-stone-300 text-xs">
                          {branch.timingDetails.map((t, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="font-medium text-stone-200">{t.days}:</span>
                              <span>{t.hours}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="text-stone-300">{branch.openingHours}</span>
                      )}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#E5A500] shrink-0" />
                    <span className="text-stone-200 font-semibold text-sm">
                      {branch.phone}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-5 border-t border-white/15 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={`tel:${branch.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#043328] active:scale-[0.98] transition-all shadow-md shadow-black/20 border border-white/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {branch.name} Desk</span>
                </a>

                {branch.mapUrl && (
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full text-xs sm:text-sm font-medium text-white/90 hover:text-white border border-white/25 hover:border-white/60 transition-all hover:bg-white/5"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {branch.whatsapp && (
                  <a
                    href={`https://wa.me/${branch.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full text-xs sm:text-sm font-medium text-white/90 hover:text-white border border-white/20 transition-all hover:bg-white/5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Photo & Gallery Area (42%) */}
            <div className="lg:col-span-5 relative flex flex-col justify-between bg-stone-900 overflow-hidden min-h-[320px] lg:min-h-full">
              <div className="h-full w-full relative">
                <img
                  src={branch.image}
                  alt={`Dr. Jha clinic facility in ${branch.name}`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20 inline-block mb-1">
                    {branch.name} Facility
                  </span>
                  <p className="text-xs text-stone-200 line-clamp-1">
                    {branch.headline}
                  </p>
                </div>
              </div>

              {/* Gallery Thumbnails if available */}
              {branch.gallery && branch.gallery.length > 0 && (
                <div className="p-3 bg-black/40 backdrop-blur-xs grid grid-cols-3 gap-2 border-t border-white/10">
                  {branch.gallery.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="h-14 rounded-lg overflow-hidden border border-white/20 bg-stone-800">
                      <img
                        src={item.url}
                        alt={item.caption || `${branch.name} clinic view ${idx + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
