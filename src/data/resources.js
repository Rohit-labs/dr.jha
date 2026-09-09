export const resources = [
  {
    slug: 'understanding-back-pain',
    title: 'Understanding Back Pain: Causes, Recovery & Clinical Pathways',
    category: 'CONDITION GUIDE',
    readTime: '6 min read',
    date: 'Updated September 2026',
    pageTitle: 'Understanding Back Pain: Clinical Guide | Dr. Jha Centre',
    metaDescription: 'Comprehensive patient guide to understanding acute vs chronic back pain, biomechanical causes, red flags, and conservative recovery.',
    summary: 'A clinician-written guide exploring what actually happens when your back hurts, how to distinguish muscle strain from disc issues, and why structured rehabilitation outlasts passive rest.',
    sections: [
      {
        heading: 'Why Does Back Pain Happen?',
        content: 'The human spine is a resilient, load-bearing column supported by intricate ligaments, intervertebral discs, and layers of stabilizing muscles. Back pain rarely stems from a single sudden event; more commonly, it represents the accumulation of prolonged postural loading, reduced pelvic stability, or repetitive micro-strain.'
      },
      {
        heading: 'The Fallacy of Total Bed Rest',
        content: 'Historical advice frequently recommended days of lying flat in bed. Modern clinical research strongly refutes this: prolonged inactivity leads to muscle deconditioning, joint stiffness, and delayed healing. Controlled, pain-free movement and gentle spinal mobility exercises promote essential nutrient flow to intervertebral discs and facilitate faster recovery.'
      },
      {
        heading: 'When to Seek Professional Evaluation',
        content: 'If back pain persists beyond a week, radiates down into the leg (sciatica), or causes numbness, an assessment by a qualified physiotherapist can accurately identify whether the primary issue is discogenic, facet-mediated, or muscular.'
      }
    ]
  },
  {
    slug: 'understanding-sciatica',
    title: 'Understanding Sciatica: From Nerve Irritation to Relief',
    category: 'CONDITION GUIDE',
    readTime: '5 min read',
    date: 'Updated September 2026',
    pageTitle: 'Understanding Sciatica: Causes & Solutions | Dr. Jha Centre',
    metaDescription: 'Learn about sciatic nerve compression, common triggers like piriformis syndrome and disc bulges, and active physical therapy protocols.',
    summary: 'A clear clinical breakdown of sciatic nerve pathways, warning signs, and evidence-based conservative physical therapy strategies.',
    sections: [
      {
        heading: 'What Is the Sciatic Nerve?',
        content: 'The sciatic nerve is the largest single nerve in the human body, originating from the lower lumbar and sacral spine and extending through the deep gluteals down to the toes. When any part of this pathway experiences mechanical compression or chemical inflammation, radiating pain and sensory changes follow.'
      },
      {
        heading: 'Physical Therapy & Acupuncture Synergy',
        content: 'At Dr. Jha Centre, we frequently combine neurodynamic mobilization (gentle nerve flossing) with targeted acupuncture. This reduces local neurogenic inflammation while restoring muscular balance across the lumbar-pelvic complex.'
      }
    ]
  },
  {
    slug: 'when-to-see-physio',
    title: 'When Should You See a Physiotherapist?',
    category: 'PATIENT EDUCATION',
    readTime: '4 min read',
    date: 'Updated September 2026',
    pageTitle: 'When to Consult a Physiotherapist | Dr. Jha Centre',
    metaDescription: 'Recognize the key physical warning signs that indicate you should consult a licensed physiotherapist rather than waiting.',
    summary: 'Practical guidance to help you recognize when persistent stiffness, recurring pain, or joint clicking warrants early clinical assessment.',
    sections: [
      {
        heading: 'The 7-Day Rule',
        content: 'Minor muscular aches from an unusual activity typically subside within 3 to 5 days. If a painful sensation remains constant or intensifies after a full week, an underlying mechanical or structural issue is likely present.'
      },
      {
        heading: 'Loss of Functional Independence',
        content: 'Whenever discomfort prevents you from sitting through a work meeting, lifting everyday objects, climbing stairs without hesitation, or enjoying sports, early intervention prevents secondary compensatory imbalances from developing.'
      }
    ]
  }
]

export const getResourceBySlug = (slug) => {
  return resources.find((r) => r.slug === slug)
}
