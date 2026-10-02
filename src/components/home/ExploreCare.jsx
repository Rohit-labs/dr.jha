import React from 'react'
import { Link, useLocation } from 'react-router-dom'
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

export default function ExploreCare({ branch }) {
  const location = useLocation()
  const pathname = location.pathname.toLowerCase()

  const isSurat = branch?.slug === 'surat' || pathname.includes('/surat')
  const isVasai = branch?.slug === 'vasai' || pathname.includes('/vasai')

  // Branch-segregated treatment photos and cards
  let cards = [
    {
      slug: 'physiotherapy',
      title: 'Physiotherapy & Rehabilitation',
      description: 'Manual therapy, joint mobilization & corrective exercise for orthopaedic and neurological recovery.',
      image: encodeURI('/Dr Jha photos/treatment photos/physio_mira_road.jpeg'),
      imageAlt: 'Physiotherapy rehabilitation at Mira Road clinic',
      category: 'CORE REHABILITATION',
    },
    {
      slug: 'acupuncture',
      title: 'Medical Acupuncture',
      description: 'Sterile fine-needle therapy targeting neuro-meridian points for natural pain modulation.',
      image: encodeURI('/Dr Jha photos/treatment photos/Acupuncture.jpeg'),
      imageAlt: 'Medical acupuncture treatment at Mira Road clinic',
      category: 'TRADITIONAL & MEDICAL',
    },
    {
      slug: 'fire-cupping',
      title: 'Cupping & Myofascial Therapy',
      description: 'Dry cupping, fire cupping & wet cupping to decompress tight fascial planes, boost circulation and relieve chronic muscular tension.',
      image: encodeURI('/Dr Jha photos/treatment photos/Dry cupping therapy.jpeg'),
      imageAlt: 'Cupping therapy session for muscle relief at Mira Road',
      category: 'CUPPING THERAPY',
      featured: true,
    },
    {
      slug: 'laser-therapy',
      title: 'Laser Therapy (Photobiomodulation)',
      description: 'Advanced clinical laser therapy for deep cellular tissue repair, rapid inflammation relief and nerve healing.',
      image: encodeURI('/Dr Jha photos/treatment photos/LASER therapy2.jpeg'),
      imageAlt: 'Laser therapy session at Dr. Jha clinic',
      category: 'ADVANCED MODALITY',
    },
    {
      slug: 'exercise-therapy',
      title: 'Movement & Spinal Care',
      description: 'Individualized movement retraining, posture correction, and kinetic spinal rehabilitation.',
      image: encodeURI('/Dr Jha photos/treatment photos/physio_2_mira_road.jpeg'),
      imageAlt: 'Active physical therapy at Mira Road clinic',
      category: 'SPINE & MOVEMENT',
    },
  ]

  if (isSurat) {
    cards = [
      {
        slug: 'laser-therapy',
        title: 'Clinical LASER Therapy',
        description: 'Advanced laser photobiomodulation for cellular repair, deep tendon recovery and rapid pain relief in Surat.',
        image: encodeURI('/Dr Jha photos/treatment photos/LASER therapy_surat.jpeg'),
        imageAlt: 'Laser therapy photobiomodulation session at Surat clinic',
        category: 'ADVANCED ELECTRO-MODALITY',
        featured: true,
      },
      {
        slug: 'physiotherapy',
        title: 'Physiotherapy & Exercise Rehab',
        description: 'Targeted joint loading, kinetic exercise and manual mobilization at our Surat facility.',
        image: encodeURI('/Dr Jha photos/treatment photos/Exercise therapy2_surat.jpeg'),
        imageAlt: 'Exercise rehabilitation session at Surat clinic',
        category: 'CORE REHABILITATION',
      },
      {
        slug: 'cosmetic-acupuncture-laser',
        title: 'Cosmetic Acupuncture & LASER',
        description: 'Non-surgical facial toning, collagen stimulation, and photobiomodulation in Surat.',
        image: encodeURI('/Dr Jha photos/treatment photos/cosmetic-acupuncture-laser-therapy-surat.jpeg'),
        imageAlt: 'Cosmetic acupuncture and facial laser in Surat clinic',
        category: 'AESTHETIC CARE',
      },
      {
        slug: 'shockwave-therapy',
        title: 'Shockwave Therapy (ESWT)',
        description: 'High-energy acoustic pulses for chronic heel spurs, calcific tendinitis & stubborn tendinopathies.',
        image: encodeURI('/Dr Jha photos/treatment photos/Shockwave therapy2_surat.jpeg'),
        imageAlt: 'Shockwave therapy treatment in Surat clinic',
        category: 'ADVANCED REGENERATIVE',
      },
      {
        slug: 'acupuncture',
        title: 'Medical Acupuncture',
        description: 'Sterile fine-needle therapy stimulating neuro-meridian points for chronic joint and nerve relief.',
        image: encodeURI('/Dr Jha photos/treatment photos/Acupuncture2.jpeg'),
        imageAlt: 'Medical acupuncture at Surat clinic',
        category: 'ACUPUNCTURE CARE',
      },
    ]
  } else if (isVasai) {
    cards = [
      {
        slug: 'acupuncture',
        title: 'Medical Acupuncture',
        description: 'Sterile fine-needle therapy targeting neuro-meridian points for natural pain modulation and recovery with Dr. Shweta Jha at Vasai.',
        image: encodeURI('/Dr Jha photos/treatment photos/Acupuncture.jpeg'),
        imageAlt: 'Medical acupuncture treatment at Vasai clinic',
        category: 'TRADITIONAL & MEDICAL ACUPUNCTURE',
      },
      {
        slug: 'physiotherapy',
        title: 'Physiotherapy & Rehab',
        description: 'Manual joint mobilization, posture retraining, and post-surgical recovery at Vasai West.',
        image: encodeURI('/Dr Jha photos/treatment photos/physio_vasai.jpeg'),
        imageAlt: 'Physiotherapy rehabilitation at Vasai clinic',
        category: 'CORE REHABILITATION',
      },
      {
        slug: 'dry-cupping-therapy',
        title: 'Cupping & Myofascial Therapy',
        description: 'Dry cupping and tissue decompression to boost blood circulation and release chronic muscle spasm.',
        image: encodeURI('/Dr Jha photos/treatment photos/Dry cupping therapy.jpeg'),
        imageAlt: 'Cupping therapy session at Vasai clinic',
        category: 'CUPPING THERAPY',
        featured: true,
      },
      {
        slug: 'scalp-acupuncture',
        title: 'Scalp Neuro-Acupuncture',
        description: 'Neuro-meridian stimulation over cortical zones for stroke recovery, facial palsy, and motor control.',
        image: encodeURI('/Dr Jha photos/treatment photos/Scalp acupuncture.jpeg'),
        imageAlt: 'Scalp acupuncture session at Vasai clinic',
        category: 'NEURO REHABILITATION',
      },
      {
        slug: 'shockwave-therapy',
        title: 'Advanced Modality Therapy',
        description: 'Clinical modalities for chronic heel pain, tendinitis, and acute musculoskeletal relief.',
        image: encodeURI('/Dr Jha photos/treatment photos/Shockwave Therapy.jpeg'),
        imageAlt: 'Clinical therapy modality at Vasai clinic',
        category: 'TARGETED MODALITY',
      },
    ]
  }

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
