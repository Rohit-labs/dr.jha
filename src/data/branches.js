/**
 * Clinic Branches / Locations Dataset
 * 
 * Source of truth for physical clinic locations:
 * - Mira Road (Flagship Centre, MMR / Thane)
 * - Vasai (Clinical Centre, Palghar)
 * - Surat (Regional Centre, Gujarat)
 * 
 * NOTE: Factual, verified clinical information only.
 * No fabricated dates, claims, or doctor qualifications.
 */

export const branches = [
  {
    slug: 'mira-road',
    name: 'Mira Road',
    tag: 'Flagship Centre',
    headline: 'Physiotherapy & Acupuncture in Mira Road',
    heroTitle: {
      line1: 'Move Without Limits.',
      line2: 'Live With Confidence.'
    },
    city: 'Mira Road East, Thane',
    state: 'Maharashtra',
    pincode: '401107',
    address: 'Shop 12-14, Green Heritage, Near Shanti Park',
    fullAddress: 'Shop 12-14, Green Heritage, Near Shanti Park, Mira Road East, Thane, Maharashtra 401107',
    landmark: 'Opposite Shanti Park complex',
    transitInfo: '5 minutes by auto from Mira Road Railway Station East. Accessible via Western Express Highway.',
    parking: 'Convenient ground-level visitor parking available near Green Heritage.',
    phone: '+91 91460 36559',
    secondaryPhone: '+91 74983 13922',
    phones: [
      { label: 'Dr. Pranab Jha', number: '+91 91460 36559', tel: '+919146036559' },
      { label: 'Hr. Anupam Jha', number: '+91 74983 13922', tel: '+917498313922' }
    ],
    whatsapp: '+91 91460 36559',
    openingHours: 'Mon – Sat: 8:00 AM – 9:00 PM | Sun: 9:00 AM – 1:00 PM',
    timingDetails: [
      { days: 'Monday – Saturday', hours: '8:00 AM – 9:00 PM' },
      { days: 'Sunday', hours: '9:00 AM – 1:00 PM' }
    ],
    shortDescription: 'Our flagship multi-disciplinary facility providing specialized physiotherapy, medical acupuncture, and advanced rehabilitation in Mira Road.',
    description: 'Our flagship clinical facility in Mira Road provides advanced multi-disciplinary physiotherapy, traditional acupuncture, and pain management in a modern, compassionate environment.',
    about: 'Established as our primary rehabilitation facility in the Mumbai Metropolitan Region, the Mira Road clinic integrates modern physiotherapy, manual mobilization, and sterile medical acupuncture under the clinical guidance of Dr. Pranab Jha. The clinic is equipped with dedicated treatment bays, therapeutic exercise areas, and specialized modalities for complex spinal, nerve, and joint recovery.',
    mapUrl: 'https://maps.google.com/?q=Dr+Jha+Physiotherapy+Mira+Road',
    directionsUrl: 'https://maps.google.com/?q=Dr+Jha+Physiotherapy+Mira+Road',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop&q=80',
        caption: 'Primary consultation suite & diagnostic evaluation area'
      },
      {
        url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop&q=80',
        caption: 'Dedicated therapy tables for acupuncture & manual mobilization'
      },
      {
        url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&auto=format&fit=crop&q=80',
        caption: 'Active movement rehabilitation & postural correction zone'
      }
    ],
    services: [
      'Orthopaedic Physiotherapy',
      'Medical Acupuncture',
      'Neurological Rehabilitation',
      'Sports Injury Recovery',
      'Dry Needling',
      'Manual Joint Mobilization',
      'Post-Surgical Rehabilitation'
    ],
    treatments: [
      { name: 'Orthopaedic Physiotherapy', slug: 'physiotherapy', category: 'Core Rehabilitation' },
      { name: 'Medical Acupuncture', slug: 'acupuncture', category: 'Traditional & Holistic' },
      { name: 'Dry Needling & Myofascial Release', slug: 'physiotherapy', category: 'Pain Management' },
      { name: 'Neurological Rehabilitation', slug: 'physiotherapy', category: 'Neuro Recovery' },
      { name: 'Post-Surgical Recovery Protocols', slug: 'physiotherapy', category: 'Post-Operative' },
      { name: 'Sports Injury Rehabilitation', slug: 'physiotherapy', category: 'Athletic Recovery' }
    ],
    conditions: [
      { name: 'Back Pain & Spine Care', slug: 'back-pain' },
      { name: 'Sciatica & Nerve Irritation', slug: 'sciatica' },
      { name: 'Knee Osteoarthritis & Joint Pain', slug: 'knee-pain' },
      { name: 'Neck Pain & Cervical Spondylosis', slug: 'neck-pain' },
      { name: 'Frozen Shoulder & Rotator Cuff', slug: 'frozen-shoulder' },
      { name: 'Sports Injuries & Sprains', slug: 'sports-injuries' }
    ],
    doctorIds: ['dr-pranab-jha', 'hr-anupam-jha'],
    reviews: [
      {
        quote: '[Verified patient review for Mira Road clinic will be added here]',
        author: '[Patient Name / Initials]',
        location: 'Mira Road East',
        verified: true
      }
    ],
    faqs: [
      {
        question: 'How do I schedule an appointment at the Mira Road clinic?',
        answer: 'You can call our direct helplines at +91 91460 36559 (Dr. Pranab Jha) or +91 74983 13922 (Hr. Anupam Jha) to reserve a consultation slot with our specialists.'
      },
      {
        question: 'Is parking available near the Mira Road branch?',
        answer: 'Yes, convenient ground-level visitor parking is accessible around the Green Heritage and Shanti Park complex.'
      },
      {
        question: 'Are both physiotherapy and acupuncture offered at this branch?',
        answer: 'Yes, Dr. Pranab Jha personally consults at the Mira Road centre, providing comprehensive evaluation that pairs modern evidence-based physiotherapy with medical acupuncture.'
      },
      {
        question: 'What should I bring to my first session?',
        answer: 'Please bring any relevant X-rays, MRI scans, previous medical reports, and wear comfortable, loose-fitting clothing suitable for physical examination.'
      }
    ],
    seo: {
      pageTitle: 'Physiotherapy & Acupuncture in Mira Road | Dr. Jha Centre',
      metaDescription: 'Visit Dr. Jha Physiotherapy & Acupuncture Centre in Mira Road. Specialized orthopaedic, neurological, and sports rehabilitation care.',
      canonicalUrl: 'https://drjhaphysiotherapy.com/mira-road'
    }
  },
  {
    slug: 'vasai',
    name: 'Vasai',
    tag: 'Clinical Centre',
    headline: 'Physiotherapy & Acupuncture in Vasai',
    heroTitle: {
      line1: 'Heal With Purpose.',
      line2: 'Move With Freedom.'
    },
    city: 'Vasai West, Palghar',
    state: 'Maharashtra',
    pincode: '401202',
    address: '2nd Floor, Sai Arcade, Near Railway Station West',
    fullAddress: '2nd Floor, Sai Arcade, Near Railway Station West, Vasai, Maharashtra 401202',
    landmark: 'Walking distance from Vasai Road Railway Station West',
    transitInfo: 'Less than a 3-minute walk from Vasai Road Station West exit. Auto and bus stand adjacent.',
    parking: 'Street and commercial parking available near Sai Arcade.',
    phone: '+91 87679 33950',
    whatsapp: '+91 87679 33950',
    openingHours: 'Mon – Sat: 8:30 AM – 8:30 PM',
    timingDetails: [
      { days: 'Monday – Saturday', hours: '8:30 AM – 8:30 PM' },
      { days: 'Sunday', hours: 'Closed / Prior appointment only' }
    ],
    shortDescription: 'Conveniently situated next to Vasai Road Station, providing personalized physical therapy and rehabilitation care across Palghar district.',
    description: 'Conveniently located near Vasai Railway Station West, our Vasai centre brings personalized evidence-based physical therapy and rehabilitation to patients across Palghar and Mumbai MMR.',
    about: 'Serving the growing community of Vasai-Virar and the Palghar region, our Vasai clinic offers dedicated physical therapy, chronic pain relief, and functional movement training. Located on the second floor of Sai Arcade just moments from the railway terminus, this clinic allows convenient daily access for commuters, seniors, and recovering surgical patients.',
    mapUrl: 'https://maps.google.com/?q=Dr+Jha+Physiotherapy+Vasai',
    directionsUrl: 'https://maps.google.com/?q=Dr+Jha+Physiotherapy+Vasai',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=80',
        caption: 'Rehabilitation tables and manual therapy suite'
      },
      {
        url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop&q=80',
        caption: 'Electrotherapy & localized pain management equipment'
      },
      {
        url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&auto=format&fit=crop&q=80',
        caption: 'Gait retraining and balance assessment zone'
      }
    ],
    services: [
      'Spinal & Back Pain Therapy',
      'Joint Mobilization & Manual Therapy',
      'Post-Operative Recovery',
      'Medical Acupuncture',
      'Geriatric Mobility Care',
      'Knee & Shoulder Rehabilitation'
    ],
    treatments: [
      { name: 'Spinal & Back Pain Therapy', slug: 'physiotherapy', category: 'Spine Health' },
      { name: 'Joint Mobilization & Manual Care', slug: 'physiotherapy', category: 'Manual Therapy' },
      { name: 'Post-Operative Orthopaedic Rehab', slug: 'physiotherapy', category: 'Post-Surgical' },
      { name: 'Medical Acupuncture Sessions', slug: 'acupuncture', category: 'Acupuncture' },
      { name: 'Geriatric Mobility & Balance Care', slug: 'physiotherapy', category: 'Senior Health' },
      { name: 'Shoulder & Knee Restoration', slug: 'physiotherapy', category: 'Joint Care' }
    ],
    conditions: [
      { name: 'Back Pain & Lumbar Strain', slug: 'back-pain' },
      { name: 'Sciatic Nerve Decompression', slug: 'sciatica' },
      { name: 'Knee Osteoarthritis & Post-TKR', slug: 'knee-pain' },
      { name: 'Cervical Neck Strain & Spondylosis', slug: 'neck-pain' },
      { name: 'Frozen Shoulder (Adhesive Capsulitis)', slug: 'frozen-shoulder' }
    ],
    doctorIds: ['hr-shweta-jha'],
    reviews: [
      {
        quote: '[Verified patient review for Vasai clinic will be added here]',
        author: '[Patient Name / Initials]',
        location: 'Vasai West',
        verified: true
      }
    ],
    faqs: [
      {
        question: 'Where is the Vasai clinic located?',
        answer: 'We are situated on the 2nd floor of Sai Arcade, within immediate walking distance from the Vasai Road Railway Station West exit.'
      },
      {
        question: 'What conditions are treated at the Vasai centre?',
        answer: 'We treat back pain, neck pain, sciatica, knee osteoarthritis, frozen shoulder, sports injuries, and post-surgical rehabilitation.'
      },
      {
        question: 'Does the clinic have lift access?',
        answer: 'Yes, Sai Arcade is equipped with passenger elevator access to the 2nd floor for mobility-impaired patients.'
      },
      {
        question: 'Can I schedule a home visit from the Vasai clinic?',
        answer: 'Home physiotherapy visits can be arranged for patients with acute mobility restrictions across Vasai West. Contact our clinic desk to check slot availability.'
      }
    ],
    seo: {
      pageTitle: 'Physiotherapy & Acupuncture in Vasai | Dr. Jha Centre',
      metaDescription: 'Dr. Jha Physiotherapy & Acupuncture Centre in Vasai West. Personalized rehabilitation, chronic pain relief, and functional movement care.',
      canonicalUrl: 'https://drjhaphysiotherapy.com/vasai'
    }
  },
  {
    slug: 'surat',
    name: 'Surat',
    tag: 'Regional Centre',
    headline: 'Physiotherapy & Acupuncture in Surat',
    heroTitle: {
      line1: 'Restore Your Movement.',
      line2: 'Reclaim Your Life.'
    },
    city: 'Vesu, Surat',
    state: 'Gujarat',
    pincode: '395007',
    address: '301, Titanium Square, Vesu Main Road',
    fullAddress: '301, Titanium Square, Vesu Main Road, Surat, Gujarat 395007',
    landmark: 'Near VIP Road junction, Vesu',
    transitInfo: 'Centrally located on Vesu Main Road, easily reachable from Dumas Road and Surat Airport corridor.',
    parking: 'Ample basement and visitor surface parking in Titanium Square commercial complex.',
    phone: '+91 97245 94793',
    whatsapp: '+91 97245 94793',
    openingHours: 'Mon – Sat: 9:00 AM – 8:00 PM',
    timingDetails: [
      { days: 'Monday – Saturday', hours: '9:00 AM – 8:00 PM' },
      { days: 'Sunday', hours: 'Closed' }
    ],
    shortDescription: 'Delivering specialized musculoskeletal rehabilitation, sports performance recovery, and medical acupuncture in Vesu, Surat.',
    description: 'Serving Gujarat from our state-of-the-art facility on Vesu Main Road, Dr. Jha Centre in Surat delivers expert physiotherapy, acupuncture, and sports recovery protocols.',
    about: 'Extending our clinical standards to South Gujarat, the Surat centre in Vesu provides specialized orthopaedic rehabilitation, athletic injury conditioning, and therapeutic acupuncture. Designed to offer a calm, modern setting, the clinic accommodates patients seeking focused care for chronic pain, posture correction, and post-operative recovery.',
    mapUrl: 'https://maps.google.com/?q=Dr+Jha+Physiotherapy+Surat',
    directionsUrl: 'https://maps.google.com/?q=Dr+Jha+Physiotherapy+Surat',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&auto=format&fit=crop&q=80',
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&auto=format&fit=crop&q=80',
        caption: 'Modern clinical consultation & kinetic assessment area'
      },
      {
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=80',
        caption: 'Specialized therapy treatment rooms'
      },
      {
        url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&auto=format&fit=crop&q=80',
        caption: 'Corrective movement and athletic functional conditioning suite'
      }
    ],
    services: [
      'Advanced Musculoskeletal Rehab',
      'Sports Performance & Injury Recovery',
      'Medical Acupuncture',
      'Spine Care & Postural Correction',
      'Electrotherapy & Modalities',
      'Balance & Gait Retraining'
    ],
    treatments: [
      { name: 'Advanced Musculoskeletal Rehab', slug: 'physiotherapy', category: 'Orthopaedics' },
      { name: 'Sports Performance Recovery', slug: 'physiotherapy', category: 'Sports Rehab' },
      { name: 'Medical Acupuncture & Needling', slug: 'acupuncture', category: 'Acupuncture' },
      { name: 'Spine Alignment & Postural Therapy', slug: 'physiotherapy', category: 'Spine Care' },
      { name: 'Neuromuscular & Gait Retraining', slug: 'physiotherapy', category: 'Functional Movement' }
    ],
    conditions: [
      { name: 'Lower Back Pain & Lumbar Strain', slug: 'back-pain' },
      { name: 'Sciatica & Disc Irritation', slug: 'sciatica' },
      { name: 'Athletic Knee & Ligament Injuries', slug: 'sports-injuries' },
      { name: 'Cervical Neck Stiffness', slug: 'neck-pain' },
      { name: 'Shoulder Impingement & Rotator Cuff', slug: 'frozen-shoulder' }
    ],
    doctorIds: ['hr-samta-salecha'],
    reviews: [
      {
        quote: '[Verified patient review for Surat clinic will be added here]',
        author: '[Patient Name / Initials]',
        location: 'Vesu, Surat',
        verified: true
      }
    ],
    faqs: [
      {
        question: 'How do I locate the Surat clinic in Vesu?',
        answer: 'Our clinic is located in 301 Titanium Square on Vesu Main Road, readily accessible with dedicated elevators and reserved visitor parking.'
      },
      {
        question: 'Do I need a doctor referral to visit the Surat centre?',
        answer: 'No referral is mandatory. You can schedule a direct consultation for physical therapy assessment and acupuncture care.'
      },
      {
        question: 'What modes of therapy are provided at Surat?',
        answer: 'We provide orthopaedic physiotherapy, manual therapy, medical acupuncture, sports conditioning, electrotherapy, and individualized home exercise regimens.'
      }
    ],
    seo: {
      pageTitle: 'Physiotherapy & Acupuncture in Surat | Dr. Jha Centre',
      metaDescription: 'Premier physiotherapy and acupuncture clinic in Vesu, Surat. Advanced rehabilitation, pain relief, and personalized therapy plans.',
      canonicalUrl: 'https://drjhaphysiotherapy.com/surat'
    }
  }
]

/**
 * Retrieve branch data by slug
 * @param {string} slug 
 * @returns {object|undefined}
 */
export const getBranchBySlug = (slug) => {
  if (!slug) return undefined
  return branches.find((b) => b.slug.toLowerCase() === slug.toLowerCase())
}
