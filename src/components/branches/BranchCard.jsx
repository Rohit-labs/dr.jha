import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Phone, ArrowRight, ExternalLink } from 'lucide-react'

export default function BranchCard({ branch, featured = false }) {
  const {
    slug,
    name,
    tag,
    image,
    address,
    city,
    openingHours,
    phone,
    mapUrl,
    shortDescription
  } = branch

  return (
    <article
      className={`bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group ${
        featured ? 'ring-1 ring-[#064C3B]/10' : ''
      }`}
    >
      <div>
        {/* Photo Container */}
        <div className="w-full h-52 sm:h-56 bg-stone-100 overflow-hidden relative">
          <img
            src={image}
            alt={`Dr. Jha Physiotherapy clinic facility in ${name}`}
            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-xs ${
                tag === 'Flagship Centre'
                  ? 'bg-[#064C3B] text-white'
                  : 'bg-white/95 text-[#064C3B] border border-stone-200/80'
              }`}
            >
              {tag}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-4">
          <div>
            <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#064C3B] block mb-1">
              {name}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] leading-tight">
              Dr. Jha Physiotherapy &amp; Acupuncture Centre
            </h3>
            {shortDescription && (
              <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed font-normal">
                {shortDescription}
              </p>
            )}
          </div>

          {/* Location & Visiting Details */}
          <div className="space-y-2.5 text-xs text-stone-600 pt-1 border-t border-stone-100">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed text-stone-700">
                {address}, {city}
              </address>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-stone-400 shrink-0" />
              <span className="text-stone-600">{openingHours}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-stone-400 shrink-0" />
              <a
                href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
                className="font-medium text-stone-800 hover:text-[#064C3B] transition-colors"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footers */}
      <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-stone-100 mt-4">
        <Link
          to={`/${slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#064C3B] hover:text-[#064C3B] transition-colors group/link"
        >
          <span>View Clinic Details</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
        </Link>

        {mapUrl && (
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-stone-400 hover:text-stone-800 transition-colors"
          >
            <span>Directions</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  )
}
