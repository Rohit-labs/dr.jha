/**
 * Schema.org Structured Data Generator for Google Rich Snippets & Medical SEO
 * Compliant with Google Search Central guidelines for Healthcare, LocalBusiness,
 * Physician, MedicalProcedure, MedicalCondition, FAQPage, and BreadcrumbList.
 */

export const BASE_URL = 'https://drjhaphysio.in'

/**
 * Common Social Profiles for Knowledge Graph (sameAs)
 */
export const SOCIAL_PROFILES = [
  'https://youtube.com/@dr.jhahealthhub?si=KHKvh-9kBvZelXT1',
  'https://www.facebook.com/Drjhahealthlab',
  'https://www.instagram.com/drjhaphysiotherapy'
]

/**
 * Top-Level Clinical Organization & Multi-Location Medical Business
 */
export const CLINIC_ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'MedicalClinic'],
  '@id': `${BASE_URL}/#organization`,
  'name': 'Dr Jha Physiotherapy & Acupuncture Centre',
  'alternateName': ['Dr. Jha Physiotherapy', 'Dr. Jha Healthcare Centre', 'Dr Jha Health Hub'],
  'url': BASE_URL,
  'logo': {
    '@type': 'ImageObject',
    'url': `${BASE_URL}/images/logo/logo.png`,
    'width': '512',
    'height': '512'
  },
  'image': `${BASE_URL}/images/logo/logo.png`,
  'description': 'Comprehensive evidence-based physiotherapy, neurological rehabilitation, and medical acupuncture clinics across Mira Road, Vasai, and Surat.',
  'telephone': '+91-9146036559',
  'priceRange': '₹₹',
  'currenciesAccepted': 'INR',
  'paymentAccepted': 'Cash, Credit Card, Debit Card, UPI, Net Banking',
  'sameAs': SOCIAL_PROFILES,
  'founder': {
    '@type': 'Physician',
    '@id': `${BASE_URL}/#founder`,
    'name': 'Dr. Pranab Jha',
    'jobTitle': 'Senior Physiotherapist & Medical Acupuncturist',
    'image': `${BASE_URL}/images/doctors/dr-pranab-jha.jpg`,
    'medicalSpecialty': [
      'Physiotherapy',
      'Acupuncture',
      'NeurologicalRehabilitation',
      'Orthopedic',
      'SportsMedicine'
    ],
    'worksFor': {
      '@id': `${BASE_URL}/#organization`
    }
  },
  'medicalSpecialty': [
    'Physiotherapy',
    'Acupuncture',
    'NeurologicalRehabilitation',
    'Orthopedic',
    'SportsMedicine'
  ],
  'department': [
    {
      '@type': 'MedicalClinic',
      '@id': `${BASE_URL}/mira-road#clinic`,
      'name': 'Dr Jha Physiotherapy Flagship Centre - Mira Road',
      'url': `${BASE_URL}/mira-road`,
      'telephone': '+91-9146036559',
      'image': `${BASE_URL}/images/clinics/mira-road/mira-road-clinic-2.png`,
      'priceRange': '₹₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Shop 12-14, Green Heritage, Near Shanti Park',
        'addressLocality': 'Mira Road East, Thane',
        'addressRegion': 'Maharashtra',
        'postalCode': '401107',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 19.2812,
        'longitude': 72.8561
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          'opens': '09:00',
          'closes': '22:00'
        }
      ]
    },
    {
      '@type': 'MedicalClinic',
      '@id': `${BASE_URL}/vasai#clinic`,
      'name': 'Dr Jha Physiotherapy & Acupuncture - Vasai Centre',
      'url': `${BASE_URL}/vasai`,
      'telephone': '+91-8767933950',
      'image': `${BASE_URL}/images/clinics/vasai/vasai-clinic-2.jpeg`,
      'priceRange': '₹₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '2nd Floor, Sai Arcade, Near Railway Station West',
        'addressLocality': 'Vasai West, Palghar',
        'addressRegion': 'Maharashtra',
        'postalCode': '401202',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 19.3813,
        'longitude': 72.8311
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '08:30',
          'closes': '20:30'
        }
      ]
    },
    {
      '@type': 'MedicalClinic',
      '@id': `${BASE_URL}/surat#clinic`,
      'name': 'Dr Jha Physiotherapy & Acupuncture - Surat Regional Centre',
      'url': `${BASE_URL}/surat`,
      'telephone': '+91-9724594793',
      'image': `${BASE_URL}/images/clinics/surat/surat-clinic-2.jpeg`,
      'priceRange': '₹₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '304, Shubh Universal, Vesu Main Road',
        'addressLocality': 'Vesu, Surat',
        'addressRegion': 'Gujarat',
        'postalCode': '395007',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 21.1458,
        'longitude': 72.7758
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          'opens': '09:00',
          'closes': '20:00'
        }
      ]
    }
  ]
}

/**
 * Creates BreadcrumbList Schema for Google Rich Snippets
 * @param {Array<{ name: string, url: string }>} items
 */
export function createBreadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`
    }))
  }
}

/**
 * Creates WebSite Schema for Search Box and Site Name verification
 */
export function createWebsiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    'url': BASE_URL,
    'name': 'Dr Jha Physiotherapy & Acupuncture Centre',
    'alternateName': 'Dr. Jha Physiotherapy',
    'publisher': {
      '@id': `${BASE_URL}/#organization`
    }
  }
}

/**
 * Generates Structured Data for Home Page
 */
export function createHomePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      CLINIC_ORGANIZATION,
      createWebsiteSchema(),
      createBreadcrumbSchema([
        { name: 'Home', url: '/' }
      ])
    ]
  }
}

/**
 * Generates Structured Data for a Specific Branch Page
 */
export function createBranchClinicSchema(branch) {
  const branchUrl = `${BASE_URL}/${branch.slug}`
  const branchId = `${branchUrl}#clinic`

  const branchClinicEntity = {
    '@type': 'MedicalClinic',
    '@id': branchId,
    'name': `Dr. Jha Physiotherapy & Acupuncture Centre - ${branch.name}`,
    'alternateName': `Dr. Jha Clinic ${branch.name}`,
    'url': branchUrl,
    'telephone': branch.phone || '+91-9146036559',
    'image': branch.image?.startsWith('http') ? branch.image : `${BASE_URL}${branch.image}`,
    'priceRange': '₹₹',
    'currenciesAccepted': 'INR',
    'paymentAccepted': 'Cash, Credit Card, UPI, Net Banking',
    'description': branch.description || branch.about,
    'parentOrganization': {
      '@id': `${BASE_URL}/#organization`
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': branch.address,
      'addressLocality': branch.city,
      'addressRegion': branch.state,
      'postalCode': branch.pincode,
      'addressCountry': 'IN'
    },
    'geo': branch.geo ? {
      '@type': 'GeoCoordinates',
      'latitude': branch.geo.latitude,
      'longitude': branch.geo.longitude
    } : undefined,
    'medicalSpecialty': [
      'Physiotherapy',
      'Acupuncture',
      'NeurologicalRehabilitation',
      'Orthopedic',
      'SportsMedicine'
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': `Specialized Treatments at ${branch.name}`,
      'itemListElement': (branch.services || []).map((service) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'MedicalTherapy',
          'name': service
        }
      }))
    }
  }

  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: branch.name, url: `/${branch.slug}` }
  ])

  const graph = [CLINIC_ORGANIZATION, branchClinicEntity, breadcrumbs]

  // Add FAQPage Schema if branch has clinical FAQs
  if (branch.faqs && branch.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${branchUrl}#faqs`,
      'mainEntity': branch.faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  }
}

/**
 * Creates structured data for a Condition Pillar Page
 */
export function createConditionPillarSchema({ title, description, url, sections }) {
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      CLINIC_ORGANIZATION,
      {
        '@type': 'MedicalWebPage',
        '@id': fullUrl,
        'url': fullUrl,
        'name': title,
        'description': description,
        'specialty': 'Physiotherapy',
        'about': sections.map((sec) => ({
          '@type': 'MedicalCondition',
          'name': sec.title,
          'description': sec.description,
          'possibleTreatment': [
            {
              '@type': 'MedicalTherapy',
              'name': 'Physiotherapy Rehabilitation'
            },
            {
              '@type': 'MedicalTherapy',
              'name': 'Medical Acupuncture'
            }
          ]
        })),
        'mainEntity': {
          '@type': 'ItemList',
          'itemListElement': sections.map((sec, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'name': sec.title,
            'url': `${fullUrl}#${sec.id}`
          }))
        }
      },
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Conditions', url: '/conditions' },
        { name: title, url }
      ])
    ]
  }
}

/**
 * Creates structured data for an Individual Condition Detail Page
 */
export function createConditionDetailSchema({ condition, url }) {
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`

  const medicalCondition = {
    '@type': 'MedicalCondition',
    '@id': `${fullUrl}#condition`,
    'name': condition.name,
    'alternateName': condition.medicalTerm,
    'description': condition.metaDescription || condition.shortDescription,
    'signOrSymptom': condition.symptoms?.map((s) => ({
      '@type': 'MedicalSignOrSymptom',
      'name': s
    })),
    'possibleTreatment': condition.treatmentApproach?.map((t) => ({
      '@type': 'MedicalTherapy',
      'name': t
    }))
  }

  const medicalWebPage = {
    '@type': 'MedicalWebPage',
    '@id': fullUrl,
    'url': fullUrl,
    'name': condition.pageTitle || `${condition.name} Treatment | Dr. Jha Centre`,
    'description': condition.metaDescription,
    'about': {
      '@id': `${fullUrl}#condition`
    }
  }

  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Conditions', url: '/conditions' },
    { name: condition.name, url }
  ])

  const graph = [CLINIC_ORGANIZATION, medicalCondition, medicalWebPage, breadcrumbs]

  if (condition.faqs && condition.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${fullUrl}#faqs`,
      'mainEntity': condition.faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  }
}

/**
 * Creates structured data for an Individual Treatment / Procedure Detail Page
 */
export function createTreatmentDetailSchema({ treatment, url }) {
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`

  const medicalProcedure = {
    '@type': ['MedicalProcedure', 'MedicalTherapy'],
    '@id': `${fullUrl}#procedure`,
    'name': treatment.name,
    'description': treatment.overview || treatment.shortDescription || treatment.metaDescription,
    'procedureType': 'NoninvasiveProcedure',
    'relevantSpecialty': treatment.category || 'Physiotherapy',
    'provider': {
      '@id': `${BASE_URL}/#organization`
    },
    'howPerformed': treatment.whatToExpect?.join('. ')
  }

  const webPage = {
    '@type': 'MedicalWebPage',
    '@id': fullUrl,
    'url': fullUrl,
    'name': treatment.pageTitle || `${treatment.name} | Dr. Jha Centre`,
    'description': treatment.metaDescription,
    'about': {
      '@id': `${fullUrl}#procedure`
    }
  }

  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Treatments', url: '/treatments' },
    { name: treatment.name, url }
  ])

  const graph = [CLINIC_ORGANIZATION, medicalProcedure, webPage, breadcrumbs]

  if (treatment.faqs && treatment.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${fullUrl}#faqs`,
      'mainEntity': treatment.faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph
  }
}

/**
 * Creates structured data for Treatments Directory Page
 */
export function createTreatmentsCatalogSchema({ treatments, url = '/treatments' }) {
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      CLINIC_ORGANIZATION,
      {
        '@type': 'CollectionPage',
        '@id': fullUrl,
        'url': fullUrl,
        'name': 'Treatments & Clinical Modalities | Dr. Jha Centre',
        'description': 'Explore clinical physiotherapy, medical acupuncture, dry needling, cupping therapy, LASER photobiomodulation, and shockwave therapy.',
        'mainEntity': {
          '@type': 'ItemList',
          'itemListElement': treatments.map((t, idx) => ({
            '@type': 'ListItem',
            'position': idx + 1,
            'name': t.name,
            'url': `${BASE_URL}/treatments/${t.slug}`
          }))
        }
      },
      createBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Treatments', url: '/treatments' }
      ])
    ]
  }
}

/**
 * Creates structured data for Physician Profile
 */
export function createDoctorPhysicianSchema(doctor) {
  return {
    '@type': 'Physician',
    '@id': `${BASE_URL}/about#${doctor.id}`,
    'name': doctor.name,
    'jobTitle': doctor.role,
    'description': doctor.description,
    'image': doctor.image?.startsWith('http') ? doctor.image : `${BASE_URL}${doctor.image}`,
    'medicalSpecialty': doctor.specialization ? doctor.specialization.split(', ') : ['Physiotherapy'],
    'worksFor': {
      '@id': `${BASE_URL}/#organization`
    }
  }
}
