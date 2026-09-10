import React, { useState } from 'react'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import ConditionList from '../components/conditions/ConditionList'
import { conditions } from '../data/conditions'
import { Search } from 'lucide-react'

export default function Conditions() {
  const [filter, setFilter] = useState('')

  const filtered = conditions.filter(
    (c) =>
      c.name.toLowerCase().includes(filter.toLowerCase()) ||
      c.shortDescription.toLowerCase().includes(filter.toLowerCase()) ||
      c.category.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <PageContainer>
      <SEO
        title="Conditions We Treat | Dr. Jha Physiotherapy & Acupuncture Centre"
        description="Comprehensive guide to musculoskeletal, neurological, and sports conditions treated at Dr. Jha Centre across Mira Road, Vasai, and Surat."
        canonicalUrl="https://drjhaphysiotherapy.com/conditions"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'Conditions' }]} />

        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#064C3B] uppercase block mb-3">
            Clinical Care Directory
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-tight mb-4">
            Conditions <span className="italic font-normal text-[#064C3B]">We Treat</span>
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            Explore our clinician-led condition directory to learn more about causes, symptoms, and how personalized physiotherapy and acupuncture support recovery.
          </p>

          {/* Search Filter Box */}
          <div className="mt-6 relative max-w-md">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search condition or symptom..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full border border-stone-300 bg-white text-xs sm:text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#064C3B]"
            />
          </div>
        </div>

        {/* Conditions Grid */}
        <ConditionList conditions={filtered} />

      </div>
    </PageContainer>
  )
}
