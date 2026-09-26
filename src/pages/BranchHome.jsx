import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Hero from '../components/home/Hero'
import ExploreCare from '../components/home/ExploreCare'
import ClinicalTeam from '../components/home/ClinicalTeam'
import ConditionDiscovery from '../components/home/ConditionDiscovery'
import BranchClinicSection from '../components/branches/BranchClinicSection'
import PatientReviews from '../components/home/PatientReviews'
import NotFound from './NotFound'
import { getBranchBySlug } from '../data/branches'
import { useBranchContext } from '../context/BranchContext'

export default function BranchHome({ branchSlug: propSlug }) {
  const { slug: paramSlug } = useParams()
  const slug = propSlug || paramSlug
  const branch = getBranchBySlug(slug)
  const { setSelectedBranchSlug } = useBranchContext()

  // Sync context with branch route
  useEffect(() => {
    if (branch) {
      setSelectedBranchSlug(branch.slug)
    }
  }, [branch, setSelectedBranchSlug])

  if (!branch) {
    return <NotFound />
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: `Dr. Jha Physiotherapy & Acupuncture Centre - ${branch.name}`,
    image: branch.image,
    url: `https://drjhaphysio.in/${branch.slug}`,
    telephone: branch.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: branch.address,
      addressLocality: branch.city,
      addressRegion: branch.state,
      postalCode: branch.pincode,
      addressCountry: 'IN'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: branch.timingDetails?.[0]?.hours?.split('–')?.[0]?.trim() || '08:30',
        closes: branch.timingDetails?.[0]?.hours?.split('–')?.[1]?.trim() || '20:30'
      }
    ],
    medicalSpecialty: ['Physiotherapy', 'Acupuncture', 'Rehabilitation']
  }

  return (
    <PageContainer>
      <SEO
        title={branch.seo?.pageTitle || `Physiotherapy & Acupuncture in ${branch.name} | Dr. Jha Centre`}
        description={branch.seo?.metaDescription || branch.description}
        canonicalUrl={branch.seo?.canonicalUrl || `https://drjhaphysio.in/${branch.slug}`}
        ogImage={branch.image}
        structuredData={structuredData}
      />

      {/* 1. Hero with natural location integration */}
      <Hero branch={branch} />

      {/* 2. Explore Care areas */}
      <ExploreCare />

      {/* 3. Featured Doctor / Dr. Pranab Jha */}
      <ClinicalTeam branch={branch} />

      {/* 4. Conditions We Help With */}
      <ConditionDiscovery branch={branch} />

      {/* 5. Location-specific Clinic Section (Mira Road / Vasai / Surat Clinic) */}
      <BranchClinicSection branch={branch} />

      {/* 6. Patient Reviews */}
      <PatientReviews branch={branch} />
    </PageContainer>
  )
}
