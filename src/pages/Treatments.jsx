import React from 'react'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import TreatmentList from '../components/treatments/TreatmentList'
import { treatments } from '../data/treatments'
import { treatmentSections, allTreatmentsSEO } from '../data/treatmentSections'
import { useBranchContext } from '../context/BranchContext'

/**
 * Treatments listing page.
 *
 * Props
 * -----
 * categorySlug  — injected by the router for category sub-routes, e.g.
 *                 <Treatments categorySlug="physiotherapy-rehab" />
 *                 When absent the page shows all treatments.
 */
export default function Treatments({ categorySlug }) {
  const { currentBranch } = useBranchContext()

  // ── Build the full treatment list for the active branch ──────────────────
  const branchTreatments = currentBranch?.treatments?.map((branchTreatment, index) => {
    const treatment = treatments.find((item) => item.slug === branchTreatment.slug)
    if (!treatment) return null

    const branchImage =
      (currentBranch?.slug && treatment.branchImages?.[currentBranch.slug]) || treatment.image
    return {
      ...treatment,
      name: branchTreatment.name,
      category: branchTreatment.category || treatment.category,
      image: branchTreatment.image || branchImage,
      gallery: branchTreatment.gallery || treatment.gallery,
      video: branchTreatment.video || treatment.video,
      variantName: branchTreatment.name,
      cardId: `${branchTreatment.slug}-${index}`
    }
  }).filter(Boolean) || treatments

  const configuredSlugs = new Set(branchTreatments.map((t) => t.slug))
  const additionalTreatments = currentBranch
    ? treatments
        .filter((t) => !configuredSlugs.has(t.slug))
        .map((t) => ({
          ...t,
          image: (currentBranch?.slug && t.branchImages?.[currentBranch.slug]) || t.image,
          cardId: `${t.slug}-catalog`
        }))
    : []

  const availableTreatments = currentBranch
    ? [...branchTreatments, ...additionalTreatments]
    : treatments

  // ── SEO — resolve from category or fall back to all-treatments defaults ──
  const activeSection = treatmentSections.find((s) => s.id === categorySlug)
  const seo = activeSection?.seo ?? allTreatmentsSEO

  // ── Breadcrumbs ──────────────────────────────────────────────────────────
  const breadcrumbs = activeSection
    ? [
        { label: 'Treatments', href: '/treatments' },
        { label: activeSection.label }
      ]
    : [{ label: 'Treatments' }]

  return (
    <PageContainer>
      <SEO
        title={seo.pageTitle}
        description={seo.metaDescription}
        canonicalUrl={seo.canonicalUrl}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        {/* Header */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <span className="text-xs font-bold tracking-[0.2em] text-[#064C3B] uppercase block mb-3">
            Therapeutic Approaches
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-tight mb-4">
            Treatments &amp; <span className="italic font-normal text-[#064C3B]">Clinical Modalities</span>
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            We integrate modern physical therapy, joint kinematics, and classical medical acupuncture to provide
            targeted, multi-modal care tailored to each patient's diagnostic assessment.
          </p>
        </div>

        {/* Treatment grid with URL-driven category tabs */}
        <TreatmentList treatments={availableTreatments} activeCategorySlug={categorySlug} />
      </div>
    </PageContainer>
  )
}
