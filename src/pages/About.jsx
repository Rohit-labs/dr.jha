import React from 'react'
import { Link } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import DoctorCard from '../components/about/DoctorCard'
import { doctors } from '../data/team'
import {
  Activity,
  HeartHandshake,
  ShieldCheck,
  Calendar,
  ArrowRight,
  MapPin
} from 'lucide-react'

export default function About() {
  const physicianStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    'name': 'Dr. Pranab Jha',
    'jobTitle': 'Physiotherapy & Acupuncture Specialist',
    'medicalSpecialty': ['Physiotherapy', 'Acupuncture', 'Rehabilitation'],
    'worksFor': {
      '@type': 'MedicalClinic',
      'name': 'Dr. Jha Physiotherapy & Acupuncture Centre',
      'url': 'https://drjhaphysiotherapy.com'
    }
  }

  return (
    <PageContainer>
      <SEO
        title="About Dr. Pranab Jha & Clinical Philosophy | Dr. Jha Centre"
        description="Learn about Dr. Pranab Jha, our clinical team, and our evidence-based multi-disciplinary physiotherapy and acupuncture approach."
        canonicalUrl="https://drjhaphysiotherapy.com/about"
        structuredData={physicianStructuredData}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        {/* Hero Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#4A6453] uppercase block mb-3">
            Our Foundation &amp; Philosophy
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1A] leading-tight mb-4">
            Experienced hands. <span className="italic font-normal text-[#B64D2E]">Personalized care.</span>
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            At Dr. Jha Physiotherapy &amp; Acupuncture Centre, we believe true rehabilitation begins with listening. Rather than relying on generic exercise sheets or temporary fixes, we design clinical protocols around each patient's biomechanics, recovery goals, and daily demands.
          </p>
        </div>

        {/* ═══════════ OUR CLINICAL TEAM (2 × 2 DOCTOR GRID) ═══════════ */}
        <section aria-label="Our Clinical Team" className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </section>

        {/* 4 Core Pillars */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-[0.2em] text-[#3A5A40] uppercase block mb-2">
              Our Clinical Pillars
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Why Patients Trust Dr. Jha Centre
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E8E2D8] rounded-3xl p-6 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#123F32]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">Evidence-Based</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Treatment decisions rooted in modern joint kinematics and validated rehabilitation science.
              </p>
            </div>

            <div className="bg-white border border-[#E8E2D8] rounded-3xl p-6 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#B64D2E]">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">1-on-1 Focus</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Personalized clinician attention without crowded assembly-line setups.
              </p>
            </div>

            <div className="bg-white border border-[#E8E2D8] rounded-3xl p-6 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#3A5A40]">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">Integrated Care</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Seamless combination of manual therapy, exercises, and acupuncture where indicated.
              </p>
            </div>

            <div className="bg-white border border-[#E8E2D8] rounded-3xl p-6 shadow-xs space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] flex items-center justify-center text-[#123F32]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">3 Regional Clinics</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Consistent clinical protocols across Mira Road, Vasai, and Surat.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#123F32] text-white rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-xl">
          <h2 className="font-serif text-3xl font-bold">Ready to Move Without Discomfort?</h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
            Schedule an appointment at your nearest Dr. Jha centre and receive an individualized assessment today.
          </p>
          <div className="pt-3">
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#A8482D] hover:bg-[#933D25] shadow-md transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </PageContainer>
  )
}
