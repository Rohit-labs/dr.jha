import { Users, MapPin, Star, ArrowRight } from 'lucide-react'

export default function HeroRight() {
  const primaryHeroImage =
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85'

  const testimonialAvatars = [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&h=80&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&h=80&q=80',
  ]

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Main Visual Frame */}
      <div className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[620px] flex items-center justify-center">

        {/* ====== DESKTOP VIEW (lg+): Wavy S-Curve via native SVG ====== */}
        <div className="hidden lg:block w-full h-[620px] relative select-none">
          <svg
            viewBox="0 0 600 660"
            className="w-full h-full block"
            preserveAspectRatio="none"
          >
            <defs>
              <clipPath id="hero-wave-curve">
                {/*
                  True wavy S-curve on the left edge:
                  - Starts at top-left (~x=140) curving concave inward
                  - Swings OUT to the left forming a convex bulge around y=200-350
                  - Swings back IN (concave) around y=400-500
                  - Then exits near bottom-left (~x=80)
                  This creates a visible wave / S shape, not a single ellipse.
                */}
                <path d="
                  M 160 0
                  C 120 60, 60 110, 50 180
                  C 38 260, 90 310, 100 360
                  C 110 410, 60 470, 40 530
                  C 25 575, 60 630, 80 660
                  L 560 660
                  Q 600 660 600 620
                  L 600 40
                  Q 600 0 560 0
                  Z
                " />
              </clipPath>
            </defs>

            {/* Masked Photo */}
            <image
              href={primaryHeroImage}
              width="600"
              height="660"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#hero-wave-curve)"
            />
          </svg>

          {/* "Stronger Every Day" in the white space created by the wave's concave gap */}
          <div className="absolute top-[38%] -left-6 xl:-left-2 z-20 pointer-events-none select-none">
            <div className="bg-[#FCFBF7] rounded-2xl px-4 py-3 border border-[#DCDDD5] shadow-[0_4px_16px_rgba(0,0,0,0.04)] -rotate-6">
              <span className="font-handwriting text-stone-800 text-[22px] xl:text-[26px] font-bold leading-tight tracking-wide block">
                Stronger
              </span>
              <span className="font-handwriting text-stone-800 text-[22px] xl:text-[26px] font-bold leading-tight tracking-wide block">
                Every Day
              </span>
              {/* Curved accent underline */}
              <svg
                className="w-20 h-4 text-stone-600 mt-0.5 overflow-visible"
                viewBox="0 0 80 16"
                fill="none"
              >
                <path
                  d="M 4 8 C 24 16, 58 16, 76 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* --- DESKTOP FLOATING GLASSMORPHIC BADGES --- */}

          {/* Top-Right Badge: 10+ Years Experience */}
          <div className="flex flex-col absolute top-6 right-6 xl:right-8 z-20 p-4 rounded-2xl bg-[#FCFBF7]/90 backdrop-blur-md border border-white/70 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:scale-[1.02] transition-transform w-44">
            <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-800 mb-2">
              <Users className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="font-bold text-3xl text-stone-900 leading-none">
              10+
            </div>
            <div className="text-[11px] font-medium text-stone-500 leading-tight mt-1.5">
              Years of Clinical Experience
            </div>
          </div>

          {/* Middle-Right Badge: 3 Locations */}
          <div className="flex flex-col absolute top-[195px] right-6 xl:right-8 z-20 p-4 rounded-2xl bg-[#FCFBF7]/90 backdrop-blur-md border border-white/70 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:scale-[1.02] transition-transform w-44">
            <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center text-stone-800 mb-2">
              <MapPin className="w-5 h-5 stroke-[2]" />
            </div>
            <div className="font-bold text-3xl text-stone-900 leading-none">
              3
            </div>
            <div className="text-xs font-semibold text-stone-800 leading-tight mt-1">
              Locations
            </div>
            <div className="text-[10px] font-medium text-stone-500 leading-tight mt-0.5">
              Mira Road • Vasai • Surat
            </div>
          </div>

          {/* Bottom-Right Badge: Google Rating */}
          <div className="flex flex-col absolute bottom-14 right-6 xl:right-8 z-20 p-4 rounded-2xl bg-[#FCFBF7]/95 backdrop-blur-md border border-white/70 shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:scale-[1.02] transition-transform w-52">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-semibold text-stone-600">
                Google Rating
              </span>
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.35 24 12 24z" />
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
              </svg>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold text-2xl text-stone-900 leading-none">4.9</span>
              <span className="text-xs text-stone-400 font-medium">/5</span>
              <div className="flex items-center text-[#E5A500] ml-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#E5A500] stroke-[#E5A500]" />
                ))}
              </div>
            </div>
            <div className="text-[10px] text-stone-500 font-medium mt-1">
              From 1,000+ patient reviews
            </div>
          </div>

          {/* Bottom Pill Testimonial */}
          <div className="flex items-center gap-3 absolute bottom-6 left-16 xl:left-20 z-20 py-2.5 px-4 rounded-full bg-[#FCFBF7]/90 backdrop-blur-md border border-white/70 shadow-[0_8px_25px_rgba(0,0,0,0.06)] max-w-sm">
            <div className="flex items-center -space-x-2 shrink-0">
              {testimonialAvatars.map((url, i) => (
                <img key={i} src={url} alt={`Patient ${i}`} className="w-6 h-6 rounded-full border border-white object-cover shadow-xs" />
              ))}
            </div>
            <p className="text-[11.5px] font-medium text-stone-700 italic truncate">
              "Professional, caring and truly effective treatment."
            </p>
            <button type="button" className="w-6 h-6 rounded-full bg-stone-200/90 hover:bg-stone-300 text-stone-700 flex items-center justify-center shrink-0 transition-colors cursor-pointer" aria-label="Next review">
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* ====== MOBILE & TABLET VIEW (< lg) ====== */}
        <div className="block lg:hidden w-full h-[460px] sm:h-[520px] rounded-3xl overflow-hidden relative shadow-lg">
          <img
            src={primaryHeroImage}
            alt="Physiotherapist treating patient"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
      </div>

      {/* --- MOBILE & TABLET RESPONSIVE BADGES (< lg) --- */}
      <div className="lg:hidden w-full mt-6 space-y-4">
        {/* Mobile Testimonial Card */}
        <div className="w-full flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center -space-x-2 shrink-0">
              {testimonialAvatars.map((url, i) => (
                <img key={i} src={url} alt={`Patient ${i}`} className="w-6 h-6 rounded-full border border-white object-cover" />
              ))}
            </div>
            <p className="text-xs font-medium text-stone-700 italic">
              "Professional, caring and truly effective treatment."
            </p>
          </div>
          <span className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 shrink-0">
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>

        {/* Mobile 3-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-800 shrink-0">
              <Users className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <div className="font-bold text-2xl text-stone-900 leading-none">10+</div>
              <div className="text-[11px] text-stone-500 font-medium mt-0.5">Years Experience</div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-800 shrink-0">
              <MapPin className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <div className="font-bold text-2xl text-stone-900 leading-none">3</div>
              <div className="text-[11px] text-stone-500 font-medium mt-0.5">Mira Road • Vasai • Surat</div>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/80 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 shrink-0">
              <Star className="w-5 h-5 fill-[#E5A500] stroke-[#E5A500]" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-2xl text-stone-900 leading-none">4.9</span>
                <span className="text-[11px] text-stone-400 font-medium">/5</span>
              </div>
              <div className="text-[11px] text-stone-500 font-medium mt-0.5">1,000+ Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
