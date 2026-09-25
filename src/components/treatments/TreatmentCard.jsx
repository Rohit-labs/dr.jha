import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Video, Sparkles } from 'lucide-react'

export default function TreatmentCard({ treatment }) {
  const { slug, category, name, shortDescription, benefits = [], image, video, gallery = [] } = treatment

  return (
    <div
      id={slug}
      className="scroll-mt-28 bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-5 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
    >
      <div>
        {/* Treatment Image Visual */}
        {image && (
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-stone-100 border border-stone-200/60 shadow-inner">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            
            {/* Category Tag on Image */}
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-[0.14em] uppercase text-white bg-[#064C3B]/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm">
                <Sparkles className="w-2.5 h-2.5 text-[#E5A500]" />
                {category}
              </span>
            </div>

            {/* Video / Gallery count badge */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
              {video && (
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-white bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-md">
                  <Video className="w-3 h-3 text-[#E5A500]" />
                  Video
                </span>
              )}
              {gallery.length > 1 && (
                <span className="inline-flex items-center text-[10px] font-medium text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md">
                  {gallery.length} Photos
                </span>
              )}
            </div>
          </div>
        )}

        {!image && (
          <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#064C3B] block mb-2">
            {category}
          </span>
        )}

        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] leading-snug mb-2.5 group-hover:text-[#064C3B] transition-colors">
          <Link to={`/treatments/${slug}`}>
            {name}
          </Link>
        </h2>
        
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mb-5 line-clamp-2">
          {shortDescription}
        </p>

        {benefits.length > 0 && (
          <ul className="space-y-2 mb-6">
            {benefits.slice(0, 3).map((b, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#064C3B] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 border-t border-stone-200/80 flex items-center justify-between mt-2">
        <Link
          to={`/treatments/${slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#064C3B] hover:text-[#043328] group-hover:underline transition-all"
        >
          <span>Explore Modality</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <span className="text-[11px] text-stone-400 font-medium">In-Clinic Session</span>
      </div>
    </div>
  )
}
