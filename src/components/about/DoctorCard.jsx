import React from 'react'
import { MapPin, Award, ShieldCheck, Clock, Phone } from 'lucide-react'

export default function DoctorCard({ doctor }) {
  const {
    name,
    role,
    qualification,
    experience,
    memberships = [],
    specialization,
    branches = [],
    image,
    imageAlt,
    imagePosition,
    description
  } = doctor

  return (
    <article className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all group">
      <div>
        {/* Large Portrait Photography with Uniform Proportions */}
        <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-5 bg-stone-100 relative">
          <img
            src={image}
            alt={imageAlt || `${name}, clinical practitioner at Dr. Jha Centre`}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            style={{ objectPosition: imagePosition || 'center 20%' }}
            loading="lazy"
          />
          {role && (
            <div className="absolute top-3.5 left-3.5">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/95 text-[#064C3B] shadow-xs border border-stone-200/60 backdrop-blur-xs">
                {role}
              </span>
            </div>
          )}
          {experience && (
            <div className="absolute bottom-3.5 right-3.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide bg-[#073D32]/90 text-white shadow-xs backdrop-blur-xs border border-white/10">
                <Clock className="w-3 h-3 text-[#E5A500]" />
                <span>{experience}</span>
              </span>
            </div>
          )}
        </div>

        {/* Doctor Name & Credentials */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-[#064C3B] transition-colors leading-tight mb-1">
          {name}
        </h3>

        {/* Qualification / Medical Designation */}
        <p className="text-xs font-semibold text-[#064C3B] mb-2 leading-relaxed">
          {qualification}
        </p>

        {/* Memberships Pill */}
        {memberships.length > 0 && (
          <div className="mb-3 flex items-start gap-1.5 text-[11px] text-stone-600 bg-[#F4F2EC] px-2.5 py-1 rounded-lg border border-[#DCDDD5]/60 w-fit">
            <ShieldCheck className="w-3.5 h-3.5 text-[#064C3B] shrink-0 mt-0.5" />
            <span className="font-medium">{memberships.join(' • ')}</span>
          </div>
        )}

        {/* Specialization */}
        <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-2">
          {specialization}
        </span>

        {/* Professional Description */}
        <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal mb-5">
          {description}
        </p>
      </div>

      {/* Branch Assignment & Direct Contact Footer */}
      <div className="pt-4 border-t border-stone-200/70 flex items-center justify-between text-[11px] text-stone-500 gap-2">
        {branches.length > 0 && (
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#064C3B] shrink-0" />
            <span className="font-medium text-stone-700">{branches.join(' · ')}</span>
          </div>
        )}
        {doctor.phone ? (
          <a
            href={`tel:${doctor.phone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#064C3B]/10 hover:bg-[#064C3B] text-[#064C3B] hover:text-white transition-colors font-semibold text-[11px] shrink-0"
            title={`Call ${name}`}
          >
            <Phone className="w-3 h-3" />
            <span>{doctor.phone}</span>
          </a>
        ) : (
          <span className="text-[10px] uppercase font-semibold text-stone-400 tracking-wider">
            In-Person Care
          </span>
        )}
      </div>
    </article>
  )
}
