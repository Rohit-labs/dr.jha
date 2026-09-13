import React from 'react'
import { Link } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import { ArrowLeft, Home, MapPin, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <PageContainer>
      <SEO
        title="Page Not Found | Dr. Jha Physiotherapy & Acupuncture Centre"
        description="The page you are looking for does not exist. Explore our clinic locations, conditions, and treatments."
      />

      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <span className="font-mono text-sm font-bold tracking-[0.2em] text-[#064C3B] uppercase">
          404 • Page Not Found
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#26332F]">
          Looking for guidance?
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed max-w-md mx-auto">
          The requested page may have moved or is temporarily unavailable. Let's help you find what you need.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-stone-800 border border-stone-300 hover:border-stone-800 transition-colors"
          >
            <MapPin className="w-4 h-4 text-[#064C3B]" />
            <span>Choose Clinic Location</span>
          </Link>

          <Link
            to="/conditions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-stone-800 border border-stone-300 hover:border-stone-800 transition-colors"
          >
            <Search className="w-4 h-4 text-[#064C3B]" />
            <span>Explore Conditions</span>
          </Link>
        </div>
      </div>
    </PageContainer>
  )
}
