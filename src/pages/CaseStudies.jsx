import React from 'react'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import CaseStudyCard from '../components/case-studies/CaseStudyCard'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudies() {
  return (
    <PageContainer>
      <SEO
        title="Real Recovery Stories & Case Studies | Dr. Jha Centre"
        description="Explore real patient rehabilitation journeys and functional recovery milestones achieved at Dr. Jha Centre across Mira Road, Vasai, and Surat."
        canonicalUrl="https://drjhaphysio.in/case-studies"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'Case Studies' }]} />

        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#064C3B] uppercase block mb-3">
            Clinical Documentation
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-tight mb-4">
            Real Recovery <span className="italic font-normal text-[#064C3B]">Journeys</span>
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            Every recovery is unique. Explore how structured assessment, manual therapy, and progressive active rehabilitation help patients regain everyday function and athletic confidence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>

      </div>
    </PageContainer>
  )
}
