import React from 'react'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import ResourceCard from '../components/resources/ResourceCard'
import { resources } from '../data/resources'

export default function Resources() {
  return (
    <PageContainer>
      <SEO
        title="Patient Knowledge Centre & Articles | Dr. Jha Physiotherapy"
        description="Clinician-authored condition guides, physiotherapy recovery tips, and educational articles to help you understand your recovery."
        canonicalUrl="https://drjhaphysiotherapy.com/resources"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'Resources' }]} />

        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#3A5A40] uppercase block mb-3">
            Patient Knowledge Centre
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1A] leading-tight mb-4">
            Educational Guides &amp; <span className="italic font-normal text-[#B64D2E]">Clinical Articles</span>
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            Understand the mechanics of pain, when to seek therapy, and what evidence-based rehabilitation entails through our certified clinician guides.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>

      </div>
    </PageContainer>
  )
}
