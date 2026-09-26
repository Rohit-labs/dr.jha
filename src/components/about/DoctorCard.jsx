import React from 'react'
import { MapPin, ShieldCheck, Award, Phone, GraduationCap, Activity } from 'lucide-react'

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
    <article className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[32px] overflow-hidden flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all group ring-1 ring-[#064C3B]/10">
      <div>
        {/* Portrait Photography */}
        <div className="w-full h-72 sm:h-80 md:h-[340px] overflow-hidden relative bg-stone-100">
          <img
            src={image}
            alt={imageAlt || `${name}, clinical practitioner at Dr. Jha Centre`}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            style={{ objectPosition: imagePosition || 'center 20%', ...doctor.imageStyle }}
            loading="lazy"
          />
          {/* Role Tag Badge — top left */}
          {role && (
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/95 text-[#064C3B] shadow-xs border border-stone-200/60 backdrop-blur-xs">
                {role}
              </span>
            </div>
          )}
          {/* Branch Pill — bottom left */}
          {branches.length > 0 && (
            <div className="absolute bottom-3.5 left-3.5 z-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold bg-[#073D32]/90 text-white shadow-xs backdrop-blur-xs border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-[#E5A500]" />
                <span>{branches.length >= 3 ? 'All Branches' : branches.join(' • ')}</span>
              </span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          {/* Name */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-[#064C3B] transition-colors leading-tight mb-2">
            {name}
          </h3>

          {/* Gold accent divider */}
          <div className="w-10 h-0.5 bg-[#E5A500] mb-4" />

          {/* Description paragraph */}
          <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal mb-5">
            {description}
          </p>

          {/* Credentials list */}
          <div className="space-y-3 pt-4 border-t border-stone-200/70">
            {/* Clinical Experience */}
            {experience && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                  <Award className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                    Clinical Experience
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-stone-800">{experience}</p>
                </div>
              </div>
            )}
            {/* Qualification */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                <GraduationCap className="w-4 h-4 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                  Medical Designation
                </span>
                <p className="text-xs sm:text-sm font-semibold text-stone-800">{qualification}</p>
              </div>
            </div>

            {/* Specialization */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                <Activity className="w-4 h-4 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                  Specialized Focus
                </span>
                <p className="text-xs sm:text-sm font-semibold text-stone-800">{specialization}</p>
              </div>
            </div>

            {/* Memberships */}
            {memberships.length > 0 && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#064C3B] mt-0.5">
                  <ShieldCheck className="w-4 h-4 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block mb-0.5">
                    Professional Memberships
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-stone-800">
                    {memberships.join(' • ')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer: Phone CTA */}
      <div className="px-6 sm:px-7 pb-5 pt-0">
        {doctor.phone ? (
          <a
            href={`tel:${doctor.phone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#064C3B]/10 hover:bg-[#064C3B] text-[#064C3B] hover:text-white transition-colors font-semibold text-xs shrink-0 border border-[#064C3B]/20 hover:border-transparent"
            title={`Call ${name}`}
          >
            <Phone className="w-3.5 h-3.5" />
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
