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

export default function Home() {
  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    'name': 'Dr. Jha Physiotherapy & Acupuncture Centre',
    'image': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=85',
    'url': 'https://drjhaphysio.in',
    'telephone': '+919146036559',
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
