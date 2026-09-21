import { useEffect } from 'react'

export default function SEO({
  title = 'Dr. Jha Physiotherapy & Acupuncture Centre | Mira Road • Vasai • Surat',
  description = 'Evidence-based physiotherapy, rehabilitation, and medical acupuncture care across Mira Road, Vasai, and Surat. Personalized treatment plans for pain-free living.',
  keywords = 'physiotherapy clinic, medical acupuncture, stroke rehabilitation, sciatica treatment, slip disc, bell palsy, frozen shoulder, knee pain, mira road, vasai, surat, dr pranab jha',
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=85',
  structuredData
}) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title

    // Helper to create or update meta tags
    const setMeta = (nameAttr, nameVal, content) => {
      if (!content) return
      let element = document.querySelector(`meta[${nameAttr}="${nameVal}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(nameAttr, nameVal)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // 2. Standard SEO Meta Tags
    setMeta('name', 'description', description)
    if (keywords) {
      setMeta('name', 'keywords', keywords)
    }
    setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')
    setMeta('name', 'author', 'Dr. Pranab Jha, PT')

    // Local Geo SEO Tags for Mumbai MMR & Gujarat
    setMeta('name', 'geo.region', 'IN-MH;IN-GJ')
    setMeta('name', 'geo.placename', 'Thane, Palghar, Surat')

    // 3. Open Graph Tags
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', ogType)
    setMeta('property', 'og:image', ogImage)
    setMeta('property', 'og:site_name', 'Dr Jha Physiotherapy & Acupuncture Centre')
    setMeta('property', 'og:locale', 'en_IN')
    if (canonicalUrl) {
      setMeta('property', 'og:url', canonicalUrl)
    }

    // 4. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', ogImage)

    // 5. Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalUrl) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link')
        canonicalLink.setAttribute('rel', 'canonical')
        document.head.appendChild(canonicalLink)
      }
      canonicalLink.setAttribute('href', canonicalUrl)
    } else if (canonicalLink) {
      canonicalLink.remove()
    }

    // 6. JSON-LD Structured Data
    const SCRIPT_ID = 'seo-structured-data'
    let scriptElement = document.getElementById(SCRIPT_ID)
    if (structuredData) {
      if (!scriptElement) {
        scriptElement = document.createElement('script')
        scriptElement.id = SCRIPT_ID
        scriptElement.type = 'application/ld+json'
        document.head.appendChild(scriptElement)
      }
      scriptElement.textContent = JSON.stringify(structuredData)
    } else if (scriptElement) {
      scriptElement.remove()
    }

    return () => {
      // Cleanup custom structured data when unmounting if needed
      const el = document.getElementById(SCRIPT_ID)
      if (el) el.remove()
    }
  }, [title, description, keywords, canonicalUrl, ogType, ogImage, structuredData])

  return null
}
