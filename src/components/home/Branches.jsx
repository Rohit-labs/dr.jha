import React from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  ExternalLink,
  Compass
} from 'lucide-react'

/* ──────────────── Stylized Minimal Location Visualization ──────────────── */

function LocationSchematic() {
  return (
    <div className="bg-[#FCFBF7]/90 border border-[#DCDDD5] rounded-2xl p-4 sm:p-5 shadow-xs max-w-sm w-full">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-100">
        <span className="text-[10.5px] font-bold tracking-[0.18em] uppercase text-[#064C3B] flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-[#064C3B]" />
          Regional Presence
        </span>
        <span className="text-[10px] text-stone-400 font-medium">Western Corridor</span>
      </div>

      {/* Schematic Nodes */}
      <div className="space-y-3 relative pl-2">
        {/* Subtle connecting vertical line */}
        <div className="absolute left-[13px] top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-[#064C3B] via-[#064C3B]/70 to-[#064C3B]/30"></div>

        {/* Node 1: Surat */}
        <div className="flex items-center justify-between relative pl-6">
          <div className="absolute left-0 w-3 h-3 rounded-full bg-white border-2 border-[#064C3B] flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-[#064C3B]"></span>
          </div>
          <div>
            <span className="text-xs font-bold text-stone-800">Surat</span>
            <span className="text-[10px] text-stone-400 block">Vesu Main Road • Gujarat</span>
          </div>
          <span className="text-[10px] font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">
            Active
          </span>
        </div>

        {/* Node 2: Vasai */}
        <div className="flex items-center justify-between relative pl-6">
          <div className="absolute left-0 w-3 h-3 rounded-full bg-white border-2 border-[#064C3B] flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-[#064C3B]"></span>
          </div>
          <div>
            <span className="text-xs font-bold text-stone-800">Vasai</span>
            <span className="text-[10px] text-stone-400 block">Near Station West • Palghar</span>
          </div>
          <span className="text-[10px] font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">
            Active
          </span>
        </div>

        {/* Node 3: Mira Road */}
        <div className="flex items-center justify-between relative pl-6">
          <div className="absolute left-0 w-3 h-3 rounded-full bg-[#064C3B] border-2 border-white shadow-xs flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-white"></span>
          </div>
          <div>
            <span className="text-xs font-bold text-[#064C3B]">Mira Road</span>
            <span className="text-[10px] text-stone-500 block">Green Heritage • Thane (MMR)</span>
          </div>
          <span className="text-[10px] font-bold text-[#064C3B] bg-[#064C3B]/10 px-2 py-0.5 rounded-full">
            Flagship
          </span>
        </div>
      </div>
    </div>
  )
}

/* ──────────────── Main Section Component ──────────────── */

export default function OurBranches() {
  return (
    <section className="w-full bg-[#F8F6F0] py-20 sm:py-24 lg:py-28 font-sans antialiased text-[#26332F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════════ TOP HEADING & LOCATION SCHEMATIC ═══════════ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Left: Heading & Intro */}
          <div className="max-w-xl">
            {/* Small Eyebrow */}
            <div className="flex items-center gap-3 text-xs tracking-[0.2em] text-[#064C3B] uppercase font-semibold mb-3">
              <span className="w-8 h-[1px] bg-[#064C3B]/40"></span>
              OUR BRANCHES
              <span className="w-8 h-[1px] bg-[#064C3B]/40"></span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#26332F] leading-[1.12]">
              Three locations. <br />
              <span className="italic font-normal text-[#064C3B]">One standard of care.</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-stone-600 mt-4 leading-relaxed font-normal">
              Find a Dr. Jha centre near you and take the next step toward personalized physiotherapy and rehabilitation.
            </p>
          </div>

          {/* Right: Tasteful Minimal Location Schematic */}
          <div className="lg:shrink-0 flex justify-start lg:justify-end">
            <LocationSchematic />
          </div>
        </div>

        {/* ═══════════ FEATURED BRANCH: MIRA ROAD ═══════════ */}
        <div className="max-w-6xl mx-auto bg-[#073D32] rounded-[30px] sm:rounded-[36px] overflow-hidden text-white shadow-xl shadow-stone-900/10 border border-white/10 mb-8 sm:mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Content Area (56%) */}
            <div className="lg:col-span-7 p-7 sm:p-9 lg:p-11 xl:p-12 flex flex-col justify-between">
              <div>
                {/* Header Labels */}
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E5A500]">
                    MIRA ROAD
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-white/10 text-stone-200 px-2.5 py-0.5 rounded-full border border-white/10">
                    Flagship Centre
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-bold text-white leading-tight mb-4">
                  Dr. Jha Physiotherapy &amp; Acupuncture Centre
                </h3>

                {/* Verified Metadata Rows */}
                <div className="space-y-3.5 text-stone-200 text-xs sm:text-[13px] mb-8">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#E5A500] shrink-0 mt-0.5" />
                    <address className="not-italic leading-relaxed text-stone-300">
                      Shop 12-14, Green Heritage, Near Shanti Park, Mira Road East, Thane, Maharashtra 401107
                    </address>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#E5A500] shrink-0" />
                    <span className="text-stone-300">
                      Mon – Sat: 8:00 AM – 9:00 PM | Sun: 9:00 AM – 1:00 PM
                    </span>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#E5A500] shrink-0" />
                    <span className="text-stone-300 font-medium">
                      +91 98200 12345
                    </span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-5 border-t border-white/15 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  to="/mira-road"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#043328] active:scale-[0.98] transition-all shadow-md shadow-black/20 border border-white/20"
                >
                  <span>View Mira Road Branch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://maps.google.com/?q=Dr+Jha+Physiotherapy+Mira+Road"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white/90 hover:text-white border border-white/25 hover:border-white/60 transition-all hover:bg-white/5"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Photo Area (44%) */}
            <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden bg-stone-900">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop&q=80"
                alt="Dr. Jha Physiotherapy clinic examination and treatment area in Mira Road"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden"></div>
            </div>
          </div>
        </div>

        {/* ═══════════ SUPPORTING BRANCHES: VASAI & SURAT ═══════════ */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

          {/* ────── VASAI BRANCH ────── */}
          <article className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all">
            <div>
              {/* Image */}
              <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-5 bg-stone-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80"
                  alt="Physiotherapy treatment and rehabilitation room at Vasai clinic"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Label */}
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#064C3B] block mb-1">
                VASAI
              </span>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] leading-tight mb-3">
                Dr. Jha Physiotherapy &amp; Acupuncture Centre
              </h3>

              {/* Details */}
              <div className="space-y-2.5 text-xs text-stone-600 mb-6">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                  <address className="not-italic leading-relaxed text-stone-600">
                    2nd Floor, Sai Arcade, Near Railway Station West, Vasai, Maharashtra
                  </address>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span>Mon – Sat: 8:30 AM – 8:30 PM</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="font-medium text-stone-700">+91 98200 67890</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-stone-200/70 flex items-center justify-between">
              <Link
                to="/vasai"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#064C3B] hover:text-[#073D32] transition-colors group/link"
              >
                <span>View Vasai Branch</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://maps.google.com/?q=Dr+Jha+Physiotherapy+Vasai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-medium text-stone-400 hover:text-stone-700 flex items-center gap-1 transition-colors"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </article>

          {/* ────── SURAT BRANCH ────── */}
          <article className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all">
            <div>
              {/* Image */}
              <div className="w-full h-44 sm:h-48 rounded-2xl overflow-hidden mb-5 bg-stone-100 relative">
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&auto=format&fit=crop&q=80"
                  alt="Clinical exercise and consultation suite at Surat clinic"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Label */}
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#064C3B] block mb-1">
                SURAT
              </span>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] leading-tight mb-3">
                Dr. Jha Physiotherapy &amp; Acupuncture Centre
              </h3>

              {/* Details */}
              <div className="space-y-2.5 text-xs text-stone-600 mb-6">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                  <address className="not-italic leading-relaxed text-stone-600">
                    301, Titanium Square, Vesu Main Road, Surat, Gujarat
                  </address>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span className="font-medium text-stone-700">+91 98200 11223</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-stone-200/70 flex items-center justify-between">
              <Link
                to="/surat"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#064C3B] hover:text-[#073D32] transition-colors group/link"
              >
                <span>View Surat Branch</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://maps.google.com/?q=Dr+Jha+Physiotherapy+Surat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-medium text-stone-400 hover:text-stone-700 flex items-center gap-1 transition-colors"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </article>

        </div>

        {/* ═══════════ HOMEPAGE CONVERSION STRIP ═══════════ */}
        <div className="max-w-xl mx-auto text-center mt-12 sm:mt-14 pt-6 border-t border-stone-200/70">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-[#064C3B] bg-white border border-[#DCDDD5] hover:border-[#064C3B] hover:bg-[#F8F6F0] transition-all shadow-xs active:scale-[0.98]"
          >
            <span>Explore All Clinics</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
