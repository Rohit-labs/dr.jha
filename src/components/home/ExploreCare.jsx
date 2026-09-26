import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/* ──────────────── Foliage SVG accents ──────────────── */
function FoliageTopLeft() {
  return (
    <svg className="absolute -top-4 -left-4 w-32 h-44 text-[#8B9E78]/15 pointer-events-none z-0" viewBox="0 0 120 160" fill="currentColor">
      <path d="M25 160C25 160 22 95 8 55C-6 20 2 4 20 2C38 0 46 18 42 42C38 66 30 115 25 160Z" />
      <path d="M48 150C48 150 46 100 58 64C70 28 62 12 46 10" stroke="currentColor" fill="none" strokeWidth="1.5" opacity="0.4" />
      <path d="M60 145C60 145 75 110 88 80C98 55 92 40 80 42C68 44 65 60 68 85" stroke="currentColor" fill="none" strokeWidth="1.2" opacity="0.3" />
    </svg>
  )
}

function FoliageBottomRight() {
  return (
    <svg className="absolute -bottom-4 -right-4 w-32 h-44 text-[#8B9E78]/15 pointer-events-none z-0 rotate-180" viewBox="0 0 120 160" fill="currentColor">
      <path d="M25 160C25 160 22 95 8 55C-6 20 2 4 20 2C38 0 46 18 42 42C38 66 30 115 25 160Z" />
      <path d="M48 150C48 150 46 100 58 64C70 28 62 12 46 10" stroke="currentColor" fill="none" strokeWidth="1.5" opacity="0.4" />
    </svg>
  )
}

/* ──────────────── Card data — real treatment photos & slugs ──────────────── */
const cards = [
  {
    slug: 'physiotherapy',
    title: 'Physiotherapy & Rehabilitation',
    description: 'Manual therapy, joint mobilization & corrective exercise for orthopaedic and neurological recovery.',
    image: '/images/treatments/exercise-therapy2.jpeg',
    imageAlt: 'Physiotherapy exercise rehabilitation session',
    category: 'CORE REHABILITATION',
  },
  {
    slug: 'acupuncture',
    title: 'Medical Acupuncture',
    description: 'Sterile fine-needle therapy targeting neuro-meridian points for natural pain modulation.',
    image: '/images/treatments/acupuncture.jpeg',
    imageAlt: 'Medical acupuncture treatment session',
    category: 'TRADITIONAL & MEDICAL',
  },
  {
    slug: 'fire-cupping',
    title: 'Cupping & Myofascial Therapy',
    description: 'Dry cupping, fire cupping & wet cupping to decompress tight fascial planes, boost circulation and relieve chronic muscular tension.',
    image: '/images/treatments/dry-cupping-therapy.jpeg',
    imageAlt: 'Cupping therapy session for muscle relief',
    category: 'CUPPING THERAPY',
    featured: true,
  },
  {
    slug: 'shockwave-therapy',
    title: 'Shockwave Therapy (ESWT)',
    description: 'High-energy acoustic pulses for chronic heel spurs, calcific tendinitis & stubborn tendinopathies.',
    image: '/images/treatments/shockwave-therapy.jpeg',
    imageAlt: 'Extracorporeal shockwave therapy treatment',
    category: 'ADVANCED MODALITY',
  },
  {
    slug: 'scalp-acupuncture',
    title: 'Scalp Acupuncture',
    description: 'Neuro-acupuncture over cortical zones for stroke, Parkinson\'s, facial palsy & motor recovery.',
    image: '/images/treatments/scalp-acupuncture.jpeg',
    imageAlt: 'Scalp acupuncture for neurological rehabilitation',
    category: 'NEURO REHABILITATION',
  },
]

export default function CareAreas() {
  const left = cards.slice(0, 2)
  const center = cards[2]
  const right = cards.slice(3, 5)

  return (
    <section className="w-full bg-[#F8F6F0] pt-8 sm:pt-12 lg:pt-14 pb-4 sm:pb-6 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 font-sans antialiased text-[#26332F]">

        {/* Master canvas */}
        <div className="bg-[#FCFBF7] rounded-[44px] p-6 sm:p-10 lg:p-14 relative overflow-hidden border border-black/[0.04]">
          <FoliageTopLeft />
          <FoliageBottomRight />

          {/* Section heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
            <div className="flex items-center justify-center gap-3 text-xs tracking-widest text-[#064C3B] uppercase font-semibold mb-3">
              <span className="w-8 h-[1px] bg-[#064C3B]/40"></span>
              OUR CARE AREAS
              <span className="w-8 h-[1px] bg-[#064C3B]/40"></span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#26332F] leading-[1.15] mb-3">
              Explore our care <br />
              <span className="italic font-normal text-[#064C3B]">for a stronger, pain-free you.</span>
            </h2>
            <p className="text-sm sm:text-base text-black/60 max-w-xl mx-auto mt-3 leading-relaxed">
              From everyday discomfort to specialized rehabilitation, we offer personalized care for every stage of your recovery.
            </p>
          </div>

          {/* ── Bento grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch mt-10 relative z-10">

            {/* ── Left column ── */}
            <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">
              {left.map((card) => (
                <Link
                  key={card.slug}
                  to={`/treatments/${card.slug}`}
                  className="bg-[#F4F2EC] rounded-[28px] overflow-hidden flex relative flex-1 min-h-[200px] group hover:shadow-md transition-shadow"
                >
                  {/* Text */}
                  <div className="w-[58%] p-5 sm:p-6 flex flex-col justify-between z-10 h-full">
                    <div>
                      <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#064C3B]/70 block mb-2">
                        {card.category}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-[#26332F] leading-tight mb-2">
                        {card.title}
                      </h3>
                      <p className="text-[11px] text-[#26332F]/60 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#064C3B] mt-4 group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Photo */}
                  <div className="w-[42%] absolute right-0 top-0 bottom-0 h-full overflow-hidden rounded-l-[24px]">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </Link>
              ))}
            </div>

            {/* ── Center featured card ── */}
            <div className="lg:col-span-4 flex flex-col">
              <Link
                to={`/treatments/${center.slug}`}
                className="bg-[#F4F2EC] rounded-[32px] overflow-hidden flex flex-col shadow-sm relative h-full min-h-[440px] group hover:shadow-md transition-shadow"
              >
                {/* Arched image */}
                <div className="w-full h-[260px] sm:h-[290px] relative overflow-hidden shrink-0">
                  <img
                    src={center.image}
                    alt={center.imageAlt}
                    className="w-full h-full object-cover [clip-path:ellipse(85%_95%_at_50%_15%)] group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 text-center flex flex-col items-center justify-center flex-1">
                  <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#064C3B]/70 block mb-2">
                    {center.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-[22px] font-bold text-[#26332F] leading-tight mb-2">
                    {center.title}
                  </h3>
                  <p className="text-xs text-[#26332F]/60 max-w-xs leading-relaxed mb-5">
                    {center.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#064C3B] mt-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </div>

            {/* ── Right column ── */}
            <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">
              {right.map((card) => (
                <Link
                  key={card.slug}
                  to={`/treatments/${card.slug}`}
                  className="bg-[#F4F2EC] rounded-[28px] overflow-hidden flex relative flex-1 min-h-[200px] group hover:shadow-md transition-shadow"
                >
                  {/* Text */}
                  <div className="w-[58%] p-5 sm:p-6 flex flex-col justify-between z-10 h-full">
                    <div>
                      <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-[#064C3B]/70 block mb-2">
                        {card.category}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-[#26332F] leading-tight mb-2">
                        {card.title}
                      </h3>
                      <p className="text-[11px] text-[#26332F]/60 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#064C3B] mt-4 group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Photo */}
                  <div className="w-[42%] absolute right-0 top-0 bottom-0 h-full overflow-hidden rounded-l-[24px]">
                    <img
                      src={card.image}
                      alt={card.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </Link>
              ))}
            </div>

          </div>

          {/* View all button */}
          <div className="text-center mt-8 relative z-10">
            <Link
              to="/treatments"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] shadow-md transition-all active:scale-[0.98] group"
            >
              View All Treatment Modalities
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
