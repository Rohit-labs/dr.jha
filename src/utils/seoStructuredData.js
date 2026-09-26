/**
 * Schema.org Structured Data Generator for Google Rich Snippets & Medical SEO
 */

export const CLINIC_ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  'name': 'Dr Jha Physiotherapy & Acupuncture Centre',
  'alternateName': 'Dr. Jha Physiotherapy',
  'url': 'https://drjhaphysio.in',
  'logo': 'https://drjhaphysio.in/logo.png',
  'description': 'Comprehensive evidence-based physiotherapy, neurological rehabilitation, and medical acupuncture clinics across Mira Road, Vasai, and Surat.',
  'founder': {
    '@type': 'Physician',
    'name': 'Dr. Pranab Jha',
    'jobTitle': 'Senior Physiotherapist & Medical Acupuncturist'
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
      '@type': 'Physiotherapy',
      'name': 'Dr Jha Physiotherapy Flagship Centre - Mira Road',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Shop 12-14, Green Heritage, Near Shanti Park',
        'addressLocality': 'Mira Road East, Thane',
        'addressRegion': 'Maharashtra',
        'postalCode': '401107',
        'addressCountry': 'IN'
      },
      'telephone': '+91-9146036559',
      'openingHours': 'Mo-Sa 08:00-21:00, Su 09:00-13:00'
    },
    {
      '@type': 'Physiotherapy',
      'name': 'Dr Jha Physiotherapy & Acupuncture - Vasai Centre',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Vasai West',
        'addressRegion': 'Maharashtra',
        'addressCountry': 'IN'
      },
      'telephone': '+91-9146036559'
    },
    {
      '@type': 'Physiotherapy',
      'name': 'Dr Jha Physiotherapy & Acupuncture - Surat Regional Centre',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Surat',
        'addressRegion': 'Gujarat',
        'addressCountry': 'IN'
      },
      'telephone': '+91-9146036559'
    }
  ]
}

/**
 * Creates structured data for a Condition Pillar Page
 */
export function createConditionPillarSchema({ title, description, url, sections }) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      CLINIC_ORGANIZATION,
      {
        '@type': 'MedicalWebPage',
        '@id': url,
        'url': url,
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
            'url': `${url}#${sec.id}`
          }))
        }
      }
    ]
  }
}
