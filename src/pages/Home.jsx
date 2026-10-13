import React from 'react'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Hero from '../components/home/Hero'
import ExploreCare from '../components/home/ExploreCare'
import ClinicalTeam from '../components/home/ClinicalTeam'
import ConditionDiscovery from '../components/home/ConditionDiscovery'
import Branches from '../components/home/Branches'
import PatientReviews from '../components/home/PatientReviews'
import FinalCTA from '../components/home/FinalCTA'

import { createHomePageSchema } from '../utils/seoStructuredData'

export default function Home() {
  const homeStructuredData = createHomePageSchema()

  return (
    <PageContainer>
      <SEO
        title="Dr. Jha Physiotherapy & Acupuncture Centre | Move Better. Live Fuller."
        description="Expert physiotherapy, rehabilitation, and medical acupuncture care across Mira Road, Vasai, and Surat. Personalized treatment plans for pain-free living."
        canonicalUrl="https://drjhaphysio.in/"
        structuredData={homeStructuredData}
      />

      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Explore Our Care */}
      <ExploreCare />

      {/* Section 3: Featured Clinician / Dr. Pranab Jha */}
      <ClinicalTeam />

      {/* Section 4: Conditions & What We Help With */}
      <ConditionDiscovery />

      {/* Section 5: Our Physical Clinics */}
      <Branches />

      {/* Section 6: Patient Reviews / Social Proof */}
      <PatientReviews />

      {/* Section 7: Final Consultation & Booking CTA */}
      <FinalCTA />
    </PageContainer>
  )
}
