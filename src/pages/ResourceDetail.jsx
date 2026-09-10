import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import { getResourceBySlug, resources } from '../data/resources'
import { Clock, Phone, ArrowRight, BookOpen, Stethoscope } from 'lucide-react'

export default function ResourceDetail() {
  const { slug } = useParams()
  const resource = getResourceBySlug(slug)

  if (!resource) {
    return <Navigate to="/resources" replace />
  }

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': resource.title,
    'description': resource.summary,
    'datePublished': '2026-09-01',
    'dateModified': '2026-09-06',
    'author': {
      '@type': 'Organization',
      'name': 'Dr. Jha Physiotherapy & Acupuncture Centre'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Dr. Jha Physiotherapy & Acupuncture Centre',
      'url': 'https://drjhaphysiotherapy.com'
    }
  }

  const otherResources = resources.filter((r) => r.slug !== resource.slug)

  return (
    <PageContainer>
      <SEO
        title={resource.pageTitle}
        description={resource.metaDescription}
        canonicalUrl={`https://drjhaphysiotherapy.com/resources/${resource.slug}`}
        structuredData={articleStructuredData}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Resources', href: '/resources' },
            { label: resource.title }
          ]}
        />

        {/* Article Header */}
        <header className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 text-xs text-stone-500 font-medium mb-3">
            <span className="font-bold tracking-[0.18em] uppercase text-[#064C3B]">
              {resource.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {resource.readTime}
            </span>
            <span>•</span>
            <span>{resource.date}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-tight mb-5">
            {resource.title}
          </h1>

          <div className="bg-[#FCFBF7] border-l-4 border-[#064C3B] p-4 sm:p-5 rounded-r-2xl">
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic font-normal">
              {resource.summary}
            </p>
          </div>
        </header>

        {/* Article Body Sections */}
        <article className="space-y-8 text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
          {resource.sections.map((sec, idx) => (
            <section key={idx} className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F]">
                {sec.heading}
              </h2>
              <p className="leading-relaxed">
                {sec.content}
              </p>
            </section>
          ))}
        </article>

        {/* Next Step / Consultation Callout Box */}
        <div className="mt-12 p-7 sm:p-9 rounded-3xl bg-[#073D32] text-white space-y-4 shadow-lg">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E5A500]">
            Clinical Guidance
          </span>
          <h3 className="font-serif text-2xl font-bold">
            Experiencing Persistent Pain or Mobility Issues?
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl leading-relaxed">
            Reading articles is a helpful first step, but an individualized physical assessment identifies the precise mechanical source of discomfort. Schedule a consultation at our Mira Road, Vasai, or Surat clinics.
          </p>
          <div className="pt-2">
            <a
              href="tel:+919820012345"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#043328] border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us for Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Other Resources */}
        <div className="mt-14 pt-8 border-t border-stone-200">
          <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-stone-400 block mb-4">
            More from the Knowledge Centre
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherResources.map((or) => (
              <Link
                key={or.slug}
                to={`/resources/${or.slug}`}
                className="p-5 rounded-2xl bg-[#FCFBF7] border border-[#DCDDD5] hover:border-stone-400 transition-colors block group"
              >
                <span className="text-[10px] font-bold tracking-wider uppercase text-[#064C3B] block mb-1">
                  {or.category}
                </span>
                <strong className="font-serif text-base font-bold text-stone-900 group-hover:text-[#064C3B] block mb-2 leading-snug">
                  {or.title}
                </strong>
                <span className="text-xs text-stone-500 line-clamp-2">
                  {or.summary}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </PageContainer>
  )
}
