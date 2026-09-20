import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, ArrowRight, Calendar } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#073D32] text-[#F8F6F0] pt-16 pb-12 font-sans antialiased border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/15">
          
          {/* Col 1: Brand & Clinical Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-white/95 flex items-center justify-center p-1 border border-white/20 shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src="/logo.png"
                  alt="Dr. Jha Physiotherapy & Acupuncture Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-white tracking-tight">
                  Dr. Jha
                </span>
                <span className="text-[9px] tracking-[0.18em] uppercase font-medium text-stone-300">
                  Physiotherapy • Rehabilitation • Acupuncture
                </span>
              </div>
            </Link>

            <p className="text-xs text-stone-300 leading-relaxed max-w-sm font-normal">
              Specialized multi-disciplinary physiotherapy, traditional acupuncture, and evidence-based rehabilitation care across Mumbai MMR and Gujarat.
            </p>

            <div className="pt-2">
              <a
                href="tel:+919820012345"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#064C3B] hover:bg-[#053C2F] border border-white/20 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us for Appointment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Physical Branches (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E5A500] block mb-2">
              Our Clinics
            </span>
            <ul className="space-y-3 text-xs text-stone-300">
              <li>
                <Link to="/mira-road" className="hover:text-white transition-colors block">
                  <strong className="text-white block font-semibold">Mira Road (Flagship)</strong>
                  <span className="text-[11px] text-stone-400">Green Heritage, Shanti Park • Thane</span>
                </Link>
              </li>
              <li>
                <Link to="/vasai" className="hover:text-white transition-colors block">
                  <strong className="text-white block font-semibold">Vasai</strong>
                  <span className="text-[11px] text-stone-400">Sai Arcade, Near Station West • Palghar</span>
                </Link>
              </li>
              <li>
                <Link to="/surat" className="hover:text-white transition-colors block">
                  <strong className="text-white block font-semibold">Surat</strong>
                  <span className="text-[11px] text-stone-400">Titanium Square, Vesu Main Road • Gujarat</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Conditions (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E5A500] block mb-2">
              Conditions
            </span>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <Link to="/conditions/back-pain" className="hover:text-white transition-colors">Back Pain & Spine</Link>
              </li>
              <li>
                <Link to="/conditions/sciatica" className="hover:text-white transition-colors">Sciatica</Link>
              </li>
              <li>
                <Link to="/conditions/knee-pain" className="hover:text-white transition-colors">Knee Osteoarthritis</Link>
              </li>
              <li>
                <Link to="/conditions/neck-pain" className="hover:text-white transition-colors">Neck Pain & Cervical</Link>
              </li>
              <li>
                <Link to="/conditions/frozen-shoulder" className="hover:text-white transition-colors">Frozen Shoulder</Link>
              </li>
              <li>
                <Link to="/conditions/sports-injuries" className="hover:text-white transition-colors">Sports Injuries</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Treatments & Resources (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E5A500] block mb-2">
              Treatments & Guides
            </span>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <Link to="/treatments/physiotherapy" className="hover:text-white transition-colors">Physiotherapy & Rehabilitation</Link>
              </li>
              <li>
                <Link to="/treatments/acupuncture" className="hover:text-white transition-colors">Medical Acupuncture</Link>
              </li>
              <li>
                <Link to="/treatments/manual-therapy" className="hover:text-white transition-colors">Manual Therapy & Mobilization</Link>
              </li>
              <li>
                <Link to="/treatments/dry-needling" className="hover:text-white transition-colors">Dry Needling</Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition-colors">Patient Knowledge Centre</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition-colors">Clinic Events & Workshops</Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors">Real Recovery Journeys</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Ethics Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <p>
            © {new Date().getFullYear()} Dr. Jha Physiotherapy &amp; Acupuncture Centre. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Healthcare Disclaimer &amp; Privacy
            </Link>
            <Link to="/" className="hover:text-white transition-colors">
              All Locations
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
