import React from 'react'
import { MapPin } from 'lucide-react'

export default function DoctorCard({ doctor }) {
  const {
    name,
    role,
    qualification,
    specialization,
    branches = [],
    image,
    imageAlt,
    description
  } = doctor

  return (
    <article className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all group">
      <div>
        {/* Large Portrait Photography with Uniform Proportions */}
        <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-5 bg-stone-100 relative">
          <img
            src={image}
            alt={imageAlt || `${name}, clinical practitioner at Dr. Jha Centre`}
            className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
          {role && (
            <div className="absolute top-3.5 left-3.5">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/95 text-[#123F32] shadow-xs border border-stone-200/60">
                {role}
              </span>
            </div>
          )}
        </div>

        {/* Doctor Name & Credentials */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-[#B64D2E] transition-colors leading-tight mb-1">
          {name}
        </h3>

        {/* Qualification */}
        <p className="text-xs font-medium text-stone-600 mb-2.5">
          {qualification}
        </p>

        {/* Specialization */}
        <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#B64D2E] block mb-3">
          {specialization}
        </span>

        {/* Professional Description */}
        <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal mb-5">
          {description}
        </p>
      </div>

      {/* Branch Assignment Footer */}
      {branches.length > 0 && (
        <div className="pt-4 border-t border-stone-200/70 flex items-center justify-between text-[11px] text-stone-500">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#3A5A40] shrink-0" />
            <span>{branches.join(' · ')}</span>
          </div>
          <span className="text-[10px] uppercase font-semibold text-stone-400 tracking-wider">
            In-Person Care
          </span>
        </div>
      )}
    </article>
  )
}
