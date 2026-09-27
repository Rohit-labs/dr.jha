import React from 'react'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import TreatmentList from '../components/treatments/TreatmentList'
import { treatments } from '../data/treatments'
import { useBranchContext } from '../context/BranchContext'

export default function Treatments() {
  const { currentBranch } = useBranchContext()
  const branchTreatments = currentBranch?.treatments?.map((branchTreatment, index) => {
    const treatment = treatments.find((item) => item.slug === branchTreatment.slug)
    if (!treatment) return null

    return {
      ...treatment,
      name: branchTreatment.name,
      category: branchTreatment.category || treatment.category,
      image: branchTreatment.image || treatment.image,
      gallery: branchTreatment.gallery || treatment.gallery,
      video: branchTreatment.video || treatment.video,
      cardId: `${branchTreatment.slug}-${index}`
    }
  }).filter(Boolean) || treatments

  const configuredSlugs = new Set(branchTreatments.map((treatment) => treatment.slug))
  const additionalTreatments = currentBranch
    ? treatments
        .filter((treatment) => !configuredSlugs.has(treatment.slug))
        .map((treatment) => ({
          ...treatment,
          cardId: `${treatment.slug}-catalog`
        }))
    : []
  const availableTreatments = currentBranch
    ? [...branchTreatments, ...additionalTreatments]
    : treatments

  return (
    <PageContainer>
      <SEO
        title="Treatments & Modalities | Dr. Jha Physiotherapy & Acupuncture Centre"
        description="Explore evidence-based physiotherapy, medical acupuncture, manual therapy, and rehabilitation modalities at Dr. Jha Centre."
        canonicalUrl="https://drjhaphysio.in/treatments"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'Treatments' }]} />

        {/* Header */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <span className="text-xs font-bold tracking-[0.2em] text-[#064C3B] uppercase block mb-3">
            Therapeutic Approaches
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-tight mb-4">
            Treatments &amp; <span className="italic font-normal text-[#064C3B]">Clinical Modalities</span>
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            We integrate modern physical therapy, joint kinematics, and classical medical acupuncture to provide targeted, multi-modal care tailored to each patient's diagnostic assessment.
          </p>
        </div>

        {/* Treatments Grid */}
        <TreatmentList treatments={availableTreatments} />

      </div>
    </PageContainer>
  )
}
