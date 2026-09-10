import React from 'react'
import { MapPin, Clock, Phone, Navigation, MessageSquare, Car } from 'lucide-react'
import BranchMap from './BranchMap'

export default function BranchInfo({ branch }) {
  const {
    fullAddress,
    openingHours,
    timingDetails,
    phone,
    mapUrl,
    whatsapp,
    landmark,
    transitInfo,
    parking
  } = branch

  return (
    <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-stone-100">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#064C3B] block mb-1">
            Clinic Information
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F]">
            Location &amp; Visiting Hours
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700">
        {/* Full Address & Landmark */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#064C3B] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900 font-semibold mb-0.5">Physical Address</strong>
              <address className="not-italic leading-relaxed text-stone-600">
                {fullAddress}
              </address>
              {landmark && (
                <span className="text-[11px] text-stone-500 block mt-1">
                  <span className="font-medium text-stone-700">Landmark:</span> {landmark}
                </span>
              )}
            </div>
          </div>

          {transitInfo && (
            <div className="flex items-start gap-3 pt-2">
              <Navigation className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-stone-500 leading-relaxed">
                {transitInfo}
              </p>
            </div>
          )}

          {parking && (
            <div className="flex items-start gap-3">
              <Car className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-stone-500 leading-relaxed">
                {parking}
              </p>
            </div>
          )}
        </div>

        {/* Timings & Direct Contact */}
        <div className="space-y-3 sm:border-l sm:border-stone-100 sm:pl-6">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#064C3B] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900 font-semibold mb-1">Consultation Timings</strong>
              {timingDetails && timingDetails.length > 0 ? (
                <div className="space-y-1">
                  {timingDetails.map((t, idx) => (
                    <div key={idx} className="text-xs text-stone-600 flex justify-between gap-2">
                      <span className="font-medium text-stone-700">{t.days}:</span>
                      <span>{t.hours}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <span className="text-stone-600">{openingHours}</span>
              )}
            </div>
          </div>

          <div className="flex items-start gap-3 pt-2 border-t border-stone-100">
            <Phone className="w-5 h-5 text-[#064C3B] shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900 font-semibold mb-0.5">Direct Clinic Phone</strong>
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                className="text-[#064C3B] font-bold text-sm hover:text-[#073D32] transition-colors"
              >
                {phone}
              </a>
              <span className="text-[10px] text-stone-400 block mt-0.5">
                Lines open during regular clinic hours
              </span>
            </div>
          </div>
        </div>
      </div>

      <BranchMap mapUrl={mapUrl} whatsapp={whatsapp} />
    </div>
  )
}
