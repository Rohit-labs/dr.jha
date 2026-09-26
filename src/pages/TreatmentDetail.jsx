import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import { getTreatmentBySlug, treatments } from '../data/treatments'
import {
  CheckCircle2,
  Phone,
  ArrowRight,
  HelpCircle,
  Sparkles,
  ShieldCheck,
  Camera,
  Video,
  Maximize2,
  X,
  ChevronRight
} from 'lucide-react'

export default function TreatmentDetail() {
  const { slug } = useParams()
  const treatment = getTreatmentBySlug(slug)
  const [activePhoto, setActivePhoto] = useState(null)

  if (!treatment) {
    return <Navigate to="/treatments" replace />
  }

  const otherTreatments = treatments.filter((t) => t.slug !== treatment.slug)

  return (
    <PageContainer>
      <SEO
        title={treatment.pageTitle}
        description={treatment.metaDescription}
        canonicalUrl={`https://drjhaphysio.in/treatments/${treatment.slug}`}
      />

      {/* Fullscreen Photo Lightbox Modal */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={activePhoto}
              alt={treatment.name}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-sm font-medium">{treatment.name}</p>
              <p className="text-stone-400 text-xs mt-1">{treatment.category} • Dr. Jha Healthcare Centre</p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Treatments', href: '/treatments' },
            { label: treatment.name }
          ]}
        />

        {/* Page Hero Header */}
        <div className="max-w-4xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#064C3B]/10 border border-[#064C3B]/20 text-[#064C3B] text-[11px] font-bold tracking-[0.16em] uppercase mb-3">
            <Sparkles className="w-3 h-3 text-[#E5A500]" />
            <span>{treatment.category}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-[1.15] mb-4">
            {treatment.name}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            {treatment.shortDescription}
          </p>
        </div>

        {/* Featured Treatment Banner Image */}
        {treatment.image && (
          <div className="mb-10 sm:mb-14 rounded-3xl overflow-hidden bg-stone-100 border border-[#DCDDD5] shadow-sm relative group">
            <div className="aspect-[16/9] sm:aspect-[21/9] w-full relative">
              <img
                src={treatment.image}
                alt={treatment.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#E5A500] block mb-1">
                    Clinical Procedure
                  </span>
                  <h2 className="font-serif text-xl sm:text-3xl font-bold text-white drop-shadow-md">
                    {treatment.name}
                  </h2>
                </div>
                <button
                  onClick={() => setActivePhoto(treatment.image)}
                  className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-medium transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Full Photo</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2-Column Clinical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview */}
            <article className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-4">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F]">
                Clinical Approach &amp; Overview
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                {treatment.overview}
              </p>
            </article>

            {/* Photo Gallery & Real Clinical Media */}
            {treatment.gallery && treatment.gallery.length > 0 && (
              <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] flex items-center gap-2">
                    <Camera className="w-5 h-5 text-[#064C3B]" />
                    <span>Clinical Procedure Gallery</span>
                  </h2>
                  <span className="text-xs text-stone-500 font-medium">
                    {treatment.gallery.length} Verified Photos
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {treatment.gallery.map((photo, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActivePhoto(photo)}
                      className="group relative aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 cursor-pointer shadow-xs hover:shadow-md transition-all"
                    >
                      <img
                        src={photo}
                        alt={`${treatment.name} clinical session ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-6 h-6 text-white drop-shadow" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Clinical Video Demonstration */}
            {treatment.video && (
              <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] flex items-center gap-2">
                  <Video className="w-5 h-5 text-[#064C3B]" />
                  <span>Clinical Procedure Demonstration</span>
                </h2>
                <div className="rounded-2xl overflow-hidden bg-black aspect-video relative border border-stone-200 shadow-inner">
                  <video
                    controls
                    poster={treatment.image}
                    className="w-full h-full object-contain"
                    preload="metadata"
                  >
                    <source src={treatment.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-xs text-stone-500 italic">
                  Live in-clinic demonstration conducted under sterile clinical supervision at Dr. Jha Centre.
                </p>
              </div>
            )}

            {/* Key Clinical Benefits */}
            {treatment.benefits && (
              <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#064C3B]" />
                  <span>Key Clinical Benefits</span>
                </h2>
                <ul className="space-y-3">
                  {treatment.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#064C3B] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What to Expect */}
            {treatment.whatToExpect && (
              <div className="bg-[#F4F2EC] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-4">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#064C3B]" />
                  <span>What to Expect During Your Session</span>
                </h2>
                <ul className="space-y-3">
                  {treatment.whatToExpect.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#064C3B] mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* FAQs */}
            {treatment.faqs && (
              <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-9 shadow-xs space-y-5">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-[#064C3B]" />
                  <span>Treatment FAQs</span>
                </h2>
                <div className="space-y-4">
                  {treatment.faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-stone-100 pb-4 last:border-0 last:pb-0">
                      <h3 className="text-xs sm:text-sm font-bold text-stone-900 mb-1.5">
                        {faq.question}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Appointment Booking Box */}
            <div className="bg-[#073D32] text-white rounded-3xl p-6 sm:p-7 shadow-lg space-y-4">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E5A500]">
                Clinical Service
              </span>
              <h3 className="font-serif text-2xl font-bold leading-tight">
                Experience {treatment.name}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                Consult with our experienced physiotherapists and acupuncture specialists to determine if this modality is ideal for your recovery.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+919146036559"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#043328] border border-white/20 active:scale-[0.98] transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us for Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Conditions Commonly Treated with this Modality */}
            {treatment.conditionsTreated && (
              <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 shadow-xs">
                <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-stone-400 block mb-3">
                  Conditions Addressed
                </span>
                <div className="space-y-2">
                  {treatment.conditionsTreated.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/conditions/${c.slug}`}
                      className="flex items-center justify-between p-2 rounded-xl hover:bg-[#F4F2EC] transition-colors group"
                    >
                      <span className="text-xs font-semibold text-stone-800 group-hover:text-[#064C3B]">
                        {c.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Other Treatments */}
            <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 shadow-xs">
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-stone-400 block mb-3">
                Other Treatment Modalities
              </span>
              <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                {otherTreatments.map((ot) => (
                  <Link
                    key={ot.slug}
                    to={`/treatments/${ot.slug}`}
                    className="flex items-center justify-between text-xs font-medium text-stone-700 hover:text-[#064C3B] py-2 border-b border-stone-100 last:border-0 group"
                  >
                    <span className="line-clamp-1">{ot.name}</span>
                    <ChevronRight className="w-3 h-3 text-stone-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </PageContainer>
  )
}
