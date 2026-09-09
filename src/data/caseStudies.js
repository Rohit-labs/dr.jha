export const caseStudies = [
  {
    slug: 'sports-rehab-knee',
    category: 'SPORTS REHABILITATION',
    title: 'Returning to the Game: Post-Sprain Knee Rehabilitation',
    pageTitle: 'Sports Knee Rehabilitation Case Study | Dr. Jha Centre',
    metaDescription: 'Read how a recreational athlete recovered stability and strength following a knee strain through structured physiotherapy at Dr. Jha Centre.',
    summary: 'A recreational athlete came to us with a knee injury that was affecting training and daily movement. Through a structured rehabilitation program, the patient worked toward improved strength, stability and confidence.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&auto=format&fit=crop&q=80',
    challenge: 'Persistent joint line tenderness, apprehension during lateral cutting, and quadriceps atrophy following an on-field twisting injury.',
    assessment: 'Biomechanical gait analysis and manual orthopedic testing revealed grade-1 medial ligament strain accompanied by vastus medialis inhibition.',
    treatment: 'Phased progressive overload: isometric activation, manual patellar mobilization, eccentric hamstring loading, and functional agility drills.',
    progress: 'Regained full symmetrical lower limb strength and returned to recreational athletic training with objective functional clearance.',
    testimonial: '“The personalized care and guidance made all the difference. I’m back to doing what I love.”',
    author: '— Verified Patient (Anonymized)'
  },
  {
    slug: 'back-pain-recovery',
    category: 'BACK PAIN',
    title: 'From Constant Pain to Everyday Comfort',
    pageTitle: 'Chronic Lower Back Pain Case Study | Dr. Jha Centre',
    metaDescription: 'Case study demonstrating clinical recovery from persistent lower back pain through personalized physical therapy and posture correction.',
    summary: 'A case of persistent lower-back pain managed through an individualized physiotherapy program, core stability exercises, and postural ergonomics.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&auto=format&fit=crop&q=80',
    challenge: 'Three months of persistent lumbar stiffness and discomfort during sitting at a computer workstation.',
    assessment: 'Identification of lumbar facet hypomobility and severe tightness in the hip flexor complex.',
    treatment: 'Gentle spinal mobilization, manual trigger point release, and progressive transverse abdominis stabilization.',
    progress: 'Reported pain-free sitting tolerance and return to regular brisk walking within 6 weeks.',
    testimonial: '“I learned how to manage my posture and strengthen my core. The relief has been lasting.”',
    author: '— Verified Patient (Anonymized)'
  },
  {
    slug: 'regaining-independence',
    category: 'NEUROLOGICAL REHABILITATION',
    title: 'Regaining Independence: Balance & Functional Retraining',
    pageTitle: 'Neurological Rehabilitation Case Study | Dr. Jha Centre',
    metaDescription: 'Learn about patient rehabilitation focused on neuro-plasticity, balance retraining, and regaining daily activity confidence.',
    summary: 'Rehabilitation focused on improving mobility, balance, gait coordination, and daily function.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=80',
    challenge: 'Post-acute neurological weakness leading to unsteadiness while walking and difficulty navigating steps.',
    assessment: 'Functional balance scoring and gait cycle evaluation.',
    treatment: 'Proprioceptive neuromuscular facilitation (PNF), repetitive task practice, and supported balance retraining.',
    progress: 'Significantly enhanced dynamic balance scores and independent community walking.',
    testimonial: '“Every week brought small, meaningful milestones that restored my confidence.”',
    author: '— Verified Patient (Anonymized)'
  }
]

export const getCaseStudyBySlug = (slug) => {
  return caseStudies.find((c) => c.slug === slug)
}
