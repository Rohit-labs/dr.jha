import React from 'react'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Hero from '../components/home/Hero'
import ExploreCare from '../components/home/ExploreCare'
import ClinicalTeam from '../components/home/ClinicalTeam'
import RecoveryStories from '../components/home/RecoveryStories'
import KnowledgeDiscovery from '../components/home/KnowledgeDiscovery'
import Branches from '../components/home/Branches'
import PatientReviews from '../components/home/PatientReviews'
import FinalCTA from '../components/home/FinalCTA'

export default function Home() {
  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    'name': 'Dr. Jha Physiotherapy & Acupuncture Centre',
    'image': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=85',
    'url': 'https://drjhaphysiotherapy.com',
    'telephone': '+919820012345',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Shop 12-14, Green Heritage, Near Shanti Park',
      'addressLocality': 'Mira Road East',
      'addressRegion': 'Maharashtra',
      'postalCode': '401107',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 19.2812,
      'longitude': 72.8561
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '08:00',
        'closes': '21:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Sunday',
        'opens': '09:00',
        'closes': '13:00'
      }
    ],
    'medicalSpecialty': ['Physiotherapy', 'Acupuncture', 'Rehabilitation']
  }

  return (
    <PageContainer>
      <SEO
        title="Dr. Jha Physiotherapy & Acupuncture Centre | Move Better. Live Fuller."
        description="Expert physiotherapy, rehabilitation, and medical acupuncture care across Mira Road, Vasai, and Surat. Personalized treatment plans for pain-free living."
        canonicalUrl="https://drjhaphysiotherapy.com/"
        structuredData={homeStructuredData}
      />

      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Explore Our Care */}
      <ExploreCare />

      {/* Section 3: Meet Our Clinical Team */}
      <ClinicalTeam />

      {/* Section 4: Real Recovery Stories */}
      <RecoveryStories />

      {/* Section 5: Knowledge / Condition Discovery */}
      <KnowledgeDiscovery />

      {/* Section 6: Our Branches */}
      <Branches />

      {/* Section 7: Patient Reviews / Social Proof */}
      <PatientReviews />

      {/* Section 8: Final Call to Action */}
      <FinalCTA />
    </PageContainer>
  )
}
