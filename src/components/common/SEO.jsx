import { useEffect } from 'react'

export default function SEO({
  title = 'Dr. Jha Physiotherapy & Acupuncture Centre | Mira Road • Vasai • Surat',
  description = 'Evidence-based physiotherapy, rehabilitation, and medical acupuncture care across Mira Road, Vasai, and Surat. Personalized treatment plans for pain-free living.',
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=85',
  structuredData
}) {
  useEffect(() => {
    // 1. Update Title
    document.title = title

    // Helper to create or update meta tag
    const setMeta = (nameAttr, nameVal, content) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameVal}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(nameAttr, nameVal)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // 2. Update Standard Meta Description
    setMeta('name', 'description', description)

    // 3. Open Graph Tags
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', ogType)
    setMeta('property', 'og:image', ogImage)
    if (canonicalUrl) {
      setMeta('property', 'og:url', canonicalUrl)
    }

    // 4. Canonical Tag
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

    // 5. JSON-LD Structured Data
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
  }, [title, description, canonicalUrl, ogType, ogImage, structuredData])

  return null
}
