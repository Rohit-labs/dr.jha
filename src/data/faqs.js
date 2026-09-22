/**
 * Frequently Asked Questions (FAQs) Dataset
 * 
 * Official 20 FAQs for Dr. Jha Physiotherapy & Acupuncture Centre.
 * Optimized for clinical clarity and Google Search SEO (FAQPage Schema).
 */

export const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General & Conditions' },
  { id: 'acupuncture', label: 'Acupuncture & Safety' },
  { id: 'modalities', label: 'Advanced Therapies' },
  { id: 'specialized', label: 'Rehabilitation & Neuro Care' },
  { id: 'appointments', label: 'Appointments & Locations' }
]

export const generalFaqs = [
  {
    id: 1,
    category: 'general',
    question: 'What conditions do you treat?',
    answer: 'We treat a wide range of conditions including back pain, neck pain, sciatica, knee pain, frozen shoulder, arthritis, sports injuries, stroke rehabilitation, facial palsy, Parkinson\'s disease, neuropathy, tennis elbow, heel pain, post-operative rehabilitation, women\'s health conditions, and many other musculoskeletal and neurological disorders.'
  },
  {
    id: 2,
    category: 'general',
    question: 'Do I need a doctor\'s referral to start treatment?',
    answer: 'No. You can book an appointment directly. If needed, we may recommend further investigations or referral to another specialist.'
  },
  {
    id: 3,
    category: 'acupuncture',
    question: 'What is acupuncture?',
    answer: 'Acupuncture is a safe and evidence-based therapy in which very fine sterile needles are inserted at specific points on the body to help relieve pain, improve function, and support the body\'s natural healing process.'
  },
  {
    id: 4,
    category: 'acupuncture',
    question: 'Is acupuncture painful?',
    answer: 'Most patients experience little to no pain. The needles used are extremely thin, and many people find the treatment relaxing.'
  },
  {
    id: 5,
    category: 'acupuncture',
    question: 'Is acupuncture safe?',
    answer: 'Yes. We use only sterile, single-use disposable needles and follow strict hygiene and safety protocols.'
  },
  {
    id: 6,
    category: 'general',
    question: 'How many treatment sessions will I need?',
    answer: 'The number of sessions depends on your condition, its severity, and how long you have had it. After your assessment, we will explain your personalized treatment plan.'
  },
  {
    id: 7,
    category: 'modalities',
    question: 'Do you provide physiotherapy along with acupuncture?',
    answer: 'Yes. When appropriate, we combine physiotherapy, acupuncture, manual therapy, exercise rehabilitation, laser therapy, shockwave therapy, and other modalities to achieve the best possible results.'
  },
  {
    id: 8,
    category: 'modalities',
    question: 'What is Shockwave Therapy?',
    answer: 'Shockwave Therapy (ESWT) is a non-invasive treatment that uses acoustic waves to stimulate healing and reduce pain in chronic tendon and soft tissue conditions such as plantar fasciitis and tennis elbow.'
  },
  {
    id: 9,
    category: 'modalities',
    question: 'What is LASER Therapy?',
    answer: 'Low-Level LASER Therapy (LLLT) uses light energy to help reduce pain, inflammation, and promote tissue healing.'
  },
  {
    id: 10,
    category: 'general',
    question: 'How long is each treatment session?',
    answer: 'Most treatment sessions last between 30 and 60 minutes, depending on the condition and treatment plan.'
  },
  {
    id: 11,
    category: 'specialized',
    question: 'Do you treat stroke and paralysis patients?',
    answer: 'Yes. We provide comprehensive rehabilitation programs for stroke, facial palsy, Parkinson\'s disease, spinal cord injuries, and other neurological conditions.'
  },
  {
    id: 12,
    category: 'specialized',
    question: 'Do you provide home physiotherapy?',
    answer: 'Yes. Home physiotherapy services are available for selected patients who are unable to visit the clinic.'
  },
  {
    id: 13,
    category: 'general',
    question: 'Can I continue my regular medicines during treatment?',
    answer: 'In most cases, yes. Never stop prescribed medications without consulting your treating doctor.'
  },
  {
    id: 14,
    category: 'specialized',
    question: 'Do you treat sports injuries?',
    answer: 'Yes. We treat ligament injuries, muscle strains, tendon injuries, joint pain, and help athletes return to activity safely.'
  },
  {
    id: 15,
    category: 'specialized',
    question: 'Is cosmetic acupuncture available?',
    answer: 'Yes. We offer cosmetic acupuncture for facial rejuvenation, skin health, acne, pigmentation, and overall skin wellness.'
  },
  {
    id: 16,
    category: 'appointments',
    question: 'How can I book an appointment?',
    answer: 'You can book an appointment by calling us, sending a WhatsApp message, or filling out the appointment form on our website.'
  },
  {
    id: 17,
    category: 'appointments',
    question: 'Which payment methods do you accept?',
    answer: 'We accept cash, UPI, debit cards, credit cards, and other commonly used digital payment methods.'
  },
  {
    id: 18,
    category: 'appointments',
    question: 'Which locations do you serve?',
    answer: 'We have centres in Mira Road, Vasai, Borivali (Mumbai) and Vesu (Surat).'
  },
  {
    id: 19,
    category: 'general',
    question: 'Do you provide personalized treatment plans?',
    answer: 'Yes. Every patient receives a customized treatment plan based on a detailed assessment, diagnosis, and individual recovery goals.'
  },
  {
    id: 20,
    category: 'general',
    question: 'Why choose Dr. JHA Physiotherapy & Acupuncture Centre?',
    answer: 'We combine evidence-based physiotherapy with medical acupuncture and advanced rehabilitation techniques such as manual therapy, LASER therapy, shockwave therapy, cupping therapy, and exercise rehabilitation to provide personalized, holistic care focused on long-term recovery.'
  }
]

/**
 * Generates Schema.org FAQPage structured data for SEO rich snippets.
 */
export function getFaqStructuredData(faqs = generalFaqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }
}
