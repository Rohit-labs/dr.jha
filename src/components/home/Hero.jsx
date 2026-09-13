import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

export default function Hero({ branch }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
        {/* Left Column (Content & Interactive controls) */}
        <div className="lg:col-span-6 flex justify-center lg:justify-start">
          <HeroLeft branch={branch} />
        </div>

        {/* Right Column (Masked Visuals & Floating Glassmorphic Badges) */}
        <div className="lg:col-span-6 relative">
          <HeroRight branch={branch} />
        </div>
      </div>
    </section>
  )
}

