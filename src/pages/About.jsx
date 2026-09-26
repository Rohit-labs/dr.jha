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
          <span className="text-xs font-bold tracking-[0.2em] text-[#064C3B] uppercase block mb-3">
            Our Foundation &amp; Philosophy
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-tight mb-4">
            Experienced hands. <span className="italic font-normal text-[#064C3B]">Personalized care.</span>
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
            <span className="text-xs font-bold tracking-[0.2em] text-[#064C3B] uppercase block mb-2">
              Our Clinical Pillars
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Why Patients Trust Dr. Jha Centre
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 shadow-xs space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F4F2EC] flex items-center justify-center text-[#064C3B] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900">Evidence-Based</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Treatment decisions rooted in modern joint kinematics and validated rehabilitation science.
              </p>
            </div>

            <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 shadow-xs space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F4F2EC] flex items-center justify-center text-[#064C3B] shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900">1-on-1 Focus</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Personalized clinician attention without crowded assembly-line setups.
              </p>
            </div>

            <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 shadow-xs space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F4F2EC] flex items-center justify-center text-[#064C3B] shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900">Integrated Care</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Seamless combination of manual therapy, exercises, and acupuncture where indicated.
              </p>
            </div>

            <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 shadow-xs space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F4F2EC] flex items-center justify-center text-[#064C3B] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900">3 Regional Clinics</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Consistent clinical protocols across Mira Road, Vasai, and Surat.
              </p>
            </div>
          </div>
        </div>


      </div>
    </PageContainer>
  )
}
