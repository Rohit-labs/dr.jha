import React from 'react'

export default function BranchGallery({ gallery = [], branchName = '' }) {
  if (!gallery || gallery.length === 0) return null

  return (
    <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 shadow-xs">
      <div className="mb-6">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#3A5A40] block mb-1">
          Clinic Spaces &amp; Facilities
        </span>
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1C1A]">
          Inside the {branchName} Clinic
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 font-normal">
          Designed for quiet, private rehabilitation, sanitary manual therapy, and comfortable movement recovery.
        </p>
      </div>

      {/* Asymmetric Editorial Photo Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-stretch">
        {/* Primary Large Photo */}
        {gallery[0] && (
          <div className="md:col-span-7 rounded-2xl overflow-hidden bg-stone-200 relative min-h-[260px] sm:min-h-[320px]">
            <img
              src={gallery[0].url}
              alt={gallery[0].caption || `${branchName} clinic room`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {gallery[0].caption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 text-white">
                <span className="text-xs font-medium block">
                  {gallery[0].caption}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Secondary Stacked Photos */}
        <div className="md:col-span-5 flex flex-col gap-4 sm:gap-5 justify-between">
          {gallery.slice(1, 3).map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-stone-200 relative h-36 sm:h-[150px] flex-1"
            >
              <img
                src={item.url}
                alt={item.caption || `${branchName} treatment facility`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {item.caption && (
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3 text-white">
                  <span className="text-[11px] font-medium block line-clamp-1">
                    {item.caption}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
