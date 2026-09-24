import React, { useState } from 'react'
import { MapPin, Clock, Phone, ExternalLink, Navigation, Car, MessageCircle } from 'lucide-react'

export default function BranchClinicSection({ branch }) {
  if (!branch) return null

  const isMiraRoad =
    branch.slug === 'mira-road' ||
    branch.name?.toLowerCase().includes('mira road')

  const isSurat =
    branch.slug === 'surat' ||
    branch.name?.toLowerCase().includes('surat')

  const isVasai =
    branch.slug === 'vasai' ||
    branch.name?.toLowerCase().includes('vasai')

  const [miraActiveIndex, setMiraActiveIndex] = useState(0)
  const [suratActiveIndex, setSuratActiveIndex] = useState(0)
  const [vasaiActiveIndex, setVasaiActiveIndex] = useState(0)

  const miraRoadImages = [
    {
      url: encodeURI('/Dr Jha photos/Clinic Photos/Mira Road/Mira_road_clinic (2).png'),
      fallback: '/images/clinics/mira-road-clinic-2.png',
      caption: 'Treatment bays and rehabilitation suites at Mira Road',
    },
    {
      url: encodeURI('/Dr Jha photos/Clinic Photos/Mira Road/Mira_road_clinic (3).png'),
      fallback: '/images/clinics/mira-road-clinic-3.png',
      caption: 'Dedicated clinical consultation and therapy areas',
    },
    {
      url: encodeURI('/Dr Jha photos/Clinic Photos/Mira Road/Mira_road_clinic (4).png'),
      fallback: '/images/clinics/mira-road-clinic-4.png',
      caption: 'Modern physiotherapy and sterile acupuncture facility',
    },
  ]

  const suratImages = [
    {
      url: encodeURI('/Dr Jha photos/Clinic Photos/Surat/Surat_clinic2.jpeg'),
      fallback: '/images/clinics/surat-clinic-2.jpeg',
      caption: 'Clinical consultation and therapy evaluation suite at Surat',
    },
    {
      url: encodeURI('/Dr Jha photos/Clinic Photos/Surat/Surat_clinic3.jpeg'),
      fallback: '/images/clinics/surat-clinic-3.jpeg',
      caption: 'Advanced physiotherapy and electrotherapy rehabilitation station',
    },
    {
      url: encodeURI('/Dr Jha photos/Clinic Photos/Surat/Surat_clinic4.jpeg'),
      fallback: '/images/clinics/surat-clinic-4.jpeg',
      caption: 'Private medical acupuncture and therapeutic cupping bay',
    },
    {
      url: encodeURI('/Dr Jha photos/Clinic Photos/Surat/Surat_clinic5.jpeg'),
      fallback: '/images/clinics/surat-clinic-5.jpeg',
      caption: 'Targeted spine mobilization and musculoskeletal recovery area',
    },
    {
      url: encodeURI('/Dr Jha photos/Clinic Photos/Surat/Surat_clinic8.jpeg'),
      fallback: '/images/clinics/surat-clinic-8.jpeg',
      caption: 'Modern clinical reception and patient care facility in Vesu',
    },
  ]

  const vasaiImages = [
    {
      url: encodeURI('/Dr Jha photos/Clinic Photos/Vasai/Vasai_clinic2.jpeg'),
      fallback: '/images/clinics/vasai-clinic-2.jpeg',
      caption: 'Clinical consultation and therapy evaluation bays at Vasai',
    },
    {
      url: encodeURI('/Dr Jha photos/Clinic Photos/Vasai/Vasai_clinic4.jpeg'),
      fallback: '/images/clinics/vasai-clinic-4.jpeg',
      caption: 'Advanced physiotherapy and spine rehabilitation suite',
    },
    {
      url: encodeURI('/Dr Jha photos/Clinic Photos/Vasai/Vasai_clinic5.jpeg'),
      fallback: '/images/clinics/vasai-clinic-5.jpeg',
      caption: 'Specialized medical acupuncture and recovery station',
    },
  ]

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
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#E5A500] shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <a
                        href={`tel:${branch.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-stone-200 hover:text-white font-semibold text-sm hover:underline"
                      >
                        {branch.phone} {branch.secondaryPhone && <span className="text-xs font-normal text-stone-400">(Dr. Pranab Jha)</span>}
                      </a>
                      {branch.secondaryPhone && (
                        <a
                          href={`tel:${branch.secondaryPhone.replace(/[^0-9+]/g, '')}`}
                          className="text-stone-200 hover:text-white font-semibold text-sm hover:underline"
                        >
                          {branch.secondaryPhone} <span className="text-xs font-normal text-stone-400">(Hr. Anupam Jha)</span>
                        </a>
                      )}
                    </div>
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
                  <span>{branch.secondaryPhone ? 'Call Dr. Pranab' : `Call ${branch.name} Desk`}</span>
                </a>

                {branch.secondaryPhone && (
                  <a
                    href={`tel:${branch.secondaryPhone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B]/80 hover:bg-[#043328] active:scale-[0.98] transition-all shadow-md border border-white/20"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Hr. Anupam</span>
                  </a>
                )}

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
              {isMiraRoad ? (
                <>
                  {/* Clickable Main Image (click changes image) */}
                  <div
                    onClick={() => setMiraActiveIndex((prev) => (prev + 1) % miraRoadImages.length)}
                    className="h-full w-full relative cursor-pointer group select-none overflow-hidden"
                    title="Click image to view next facility photo"
                  >
                    <img
                      key={miraActiveIndex}
                      src={miraRoadImages[miraActiveIndex].url}
                      onError={(e) => {
                        if (e.target.src !== miraRoadImages[miraActiveIndex].fallback) {
                          e.target.src = miraRoadImages[miraActiveIndex].fallback
                        }
                      }}
                      alt={miraRoadImages[miraActiveIndex].caption}
                      className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none"></div>

                    {/* Top status pill (no arrows, clean indicator) */}
                    <div className="absolute top-4 right-4 pointer-events-none">
                      <span className="text-[10px] font-semibold bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20 text-stone-200 shadow-sm">
                        {miraActiveIndex + 1} / {miraRoadImages.length} • Click to next
                      </span>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                      <span className="text-[10px] font-bold tracking-widest uppercase bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20 inline-block mb-1">
                        Mira Road Facility
                      </span>
                      <p className="text-xs text-stone-200 line-clamp-1">
                        {miraRoadImages[miraActiveIndex].caption}
                      </p>
                    </div>
                  </div>

                  {/* Clickable Thumbnail Strip in same format (no arrows) */}
                  <div className="p-3 bg-black/50 backdrop-blur-xs grid grid-cols-3 gap-2 border-t border-white/10">
                    {miraRoadImages.map((item, idx) => {
                      const isActive = miraActiveIndex === idx
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setMiraActiveIndex(idx)
                          }}
                          className={`h-14 rounded-lg overflow-hidden border transition-all cursor-pointer relative ${
                            isActive
                              ? 'border-[#E5A500] ring-2 ring-[#E5A500]/60 opacity-100 scale-[1.02]'
                              : 'border-white/20 opacity-60 hover:opacity-100 hover:border-white/40'
                          }`}
                          aria-label={`View facility photo ${idx + 1}`}
                          title={`Click to view facility photo ${idx + 1}`}
                        >
                          <img
                            src={item.url}
                            onError={(e) => {
                              if (e.target.src !== item.fallback) {
                                e.target.src = item.fallback
                              }
                            }}
                            alt={item.caption}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      )
                    })}
                  </div>
                </>
              ) : isSurat ? (
                <>
                  {/* Clickable Main Image for Surat (click changes image) */}
                  <div
                    onClick={() => setSuratActiveIndex((prev) => (prev + 1) % suratImages.length)}
                    className="h-full w-full relative cursor-pointer group select-none overflow-hidden"
                    title="Click image to view next facility photo"
                  >
                    <img
                      key={suratActiveIndex}
                      src={suratImages[suratActiveIndex].url}
                      onError={(e) => {
                        if (e.target.src !== suratImages[suratActiveIndex].fallback) {
                          e.target.src = suratImages[suratActiveIndex].fallback
                        }
                      }}
                      alt={suratImages[suratActiveIndex].caption}
                      className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none"></div>

                    {/* Top status pill (no arrows, clean indicator) */}
                    <div className="absolute top-4 right-4 pointer-events-none">
                      <span className="text-[10px] font-semibold bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20 text-stone-200 shadow-sm">
                        {suratActiveIndex + 1} / {suratImages.length} • Click to next
                      </span>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                      <span className="text-[10px] font-bold tracking-widest uppercase bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20 inline-block mb-1">
                        Surat Facility
                      </span>
                      <p className="text-xs text-stone-200 line-clamp-1">
                        {suratImages[suratActiveIndex].caption}
                      </p>
                    </div>
                  </div>

                  {/* Clickable Thumbnail Strip in same format (no arrows, 5 thumbnails) */}
                  <div className="p-2.5 sm:p-3 bg-black/50 backdrop-blur-xs grid grid-cols-5 gap-1.5 sm:gap-2 border-t border-white/10">
                    {suratImages.map((item, idx) => {
                      const isActive = suratActiveIndex === idx
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSuratActiveIndex(idx)
                          }}
                          className={`h-12 sm:h-14 rounded-lg overflow-hidden border transition-all cursor-pointer relative ${
                            isActive
                              ? 'border-[#E5A500] ring-2 ring-[#E5A500]/60 opacity-100 scale-[1.02]'
                              : 'border-white/20 opacity-60 hover:opacity-100 hover:border-white/40'
                          }`}
                          aria-label={`View Surat facility photo ${idx + 1}`}
                          title={`Click to view Surat facility photo ${idx + 1}`}
                        >
                          <img
                            src={item.url}
                            onError={(e) => {
                              if (e.target.src !== item.fallback) {
                                e.target.src = item.fallback
                              }
                            }}
                            alt={item.caption}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      )
                    })}
                  </div>
                </>
              ) : isVasai ? (
                <>
                  {/* Clickable Main Image for Vasai (click changes image) */}
                  <div
                    onClick={() => setVasaiActiveIndex((prev) => (prev + 1) % vasaiImages.length)}
                    className="h-full w-full relative cursor-pointer group select-none overflow-hidden"
                    title="Click image to view next facility photo"
                  >
                    <img
                      key={vasaiActiveIndex}
                      src={vasaiImages[vasaiActiveIndex].url}
                      onError={(e) => {
                        if (e.target.src !== vasaiImages[vasaiActiveIndex].fallback) {
                          e.target.src = vasaiImages[vasaiActiveIndex].fallback
                        }
                      }}
                      alt={vasaiImages[vasaiActiveIndex].caption}
                      className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none"></div>

                    {/* Top status pill (no arrows, clean indicator) */}
                    <div className="absolute top-4 right-4 pointer-events-none">
                      <span className="text-[10px] font-semibold bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/20 text-stone-200 shadow-sm">
                        {vasaiActiveIndex + 1} / {vasaiImages.length} • Click to next
                      </span>
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                      <span className="text-[10px] font-bold tracking-widest uppercase bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20 inline-block mb-1">
                        Vasai Facility
                      </span>
                      <p className="text-xs text-stone-200 line-clamp-1">
                        {vasaiImages[vasaiActiveIndex].caption}
                      </p>
                    </div>
                  </div>

                  {/* Clickable Thumbnail Strip in same format (no arrows, 3 thumbnails) */}
                  <div className="p-3 bg-black/50 backdrop-blur-xs grid grid-cols-3 gap-2 border-t border-white/10">
                    {vasaiImages.map((item, idx) => {
                      const isActive = vasaiActiveIndex === idx
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setVasaiActiveIndex(idx)
                          }}
                          className={`h-14 rounded-lg overflow-hidden border transition-all cursor-pointer relative ${
                            isActive
                              ? 'border-[#E5A500] ring-2 ring-[#E5A500]/60 opacity-100 scale-[1.02]'
                              : 'border-white/20 opacity-60 hover:opacity-100 hover:border-white/40'
                          }`}
                          aria-label={`View Vasai facility photo ${idx + 1}`}
                          title={`Click to view Vasai facility photo ${idx + 1}`}
                        >
                          <img
                            src={item.url}
                            onError={(e) => {
                              if (e.target.src !== item.fallback) {
                                e.target.src = item.fallback
                              }
                            }}
                            alt={item.caption}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      )
                    })}
                  </div>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
