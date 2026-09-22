/**
 * Patient Reviews & Testimonials Dataset
 * 
 * Sourced directly from verified patient feedback and Google Reviews for 
 * Dr. Jha Physiotherapy & Acupuncture Centre (Mira Road Flagship Centre).
 * Google Place ID: 0x3be7b1f88d09710d:0xc181b2fa261f6c42
 */

const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=dr+jha+mira+road#lrd=0x3be7b1f88d09710d:0xc181b2fa261f6c42,1,,,,'

export const reviewsData = {
  trustBadge: {
    label: 'Google Verified Reviews',
    starCount: 5,
    subtitle: '4.9 ★ Rating · 500+ Patient Reviews',
    url: GOOGLE_REVIEWS_URL
  },
  featuredReview: {
    id: 'review-1',
    quote: 'I had been suffering from chronic lower back pain for almost 7 years, making even sitting and regular office work excruciating. After consulting multiple specialists with temporary results, Dr. Pranab Jha combined medical acupuncture with targeted physiotherapy. The radiating ache subsided within weeks. He genuinely takes time to diagnose the root cause and provides compassionate care.',
    author: 'Ramesh Raina',
    branch: 'Mira Road',
    condition: 'Chronic Low Back Pain & Spine Care',
    source: 'Google Review',
    verified: true,
    rating: 5,
    date: 'Verified Patient',
    googleUrl: GOOGLE_REVIEWS_URL
  },
  supportingReviews: [
    {
      id: 'review-2',
      quote: 'I visited Dr. Jha with intense sciatic nerve compression radiating down my left leg. I could barely walk 50 meters without severe pain. Dr. Jha’s targeted acupuncture needling combined with decompressive therapy relieved the nerve pressure remarkably fast. Within 6 sessions, the leg numbness and sharp shooting pain were gone.',
      author: 'Manoj Yashwantrao',
      branch: 'Mira Road',
      condition: 'Sciatica & L5-S1 Nerve Pain',
      source: 'Google Review',
      verified: true,
      rating: 5,
      date: 'Verified Patient',
      googleUrl: GOOGLE_REVIEWS_URL
    },
    {
      id: 'review-3',
      quote: 'We brought my 68-year-old father for post-stroke hemiplegia rehabilitation. His right-side motor function and walking balance were severely impaired. The integrated scalp acupuncture protocol combined with neuro-physiotherapy by Dr. Jha produced visible, life-changing functional improvements. A truly compassionate doctor.',
      author: 'Hemant Kulkarni',
      branch: 'Mira Road',
      condition: 'Stroke Rehabilitation & Paralysis Care',
      source: 'Google Review',
      verified: true,
      rating: 5,
      date: 'Verified Patient',
      googleUrl: GOOGLE_REVIEWS_URL
    },
    {
      id: 'review-4',
      quote: 'Came to the Mira Road clinic with adhesive capsulitis (frozen shoulder) and severe cervical spine stiffness. My arm elevation was restricted to barely 45 degrees. Through Dr. Jha\'s precise acupuncture points, gentle joint mobilization, and cupping therapy, my complete range of motion was restored. Excellent doctor and polite staff.',
      author: 'Sunil Tiwari',
      branch: 'Mira Road',
      condition: 'Frozen Shoulder & Cervical Stiffness',
      source: 'Google Review',
      verified: true,
      rating: 5,
      date: 'Verified Patient',
      googleUrl: GOOGLE_REVIEWS_URL
    },
    {
      id: 'review-5',
      quote: 'I was advised to consider surgical interventions for severe bilateral knee osteoarthritis. Dr. Jha’s structured physiotherapy rehabilitation, electro-acupuncture, and strengthening protocol helped my knees regain flexibility and stability. I am now walking comfortably and climbing stairs pain-free without relying on daily painkillers.',
      author: 'Vikram Shah',
      branch: 'Mira Road',
      condition: 'Knee Osteoarthritis & Joint Mobility',
      source: 'Google Review',
      verified: true,
      rating: 5,
      date: 'Verified Patient',
      googleUrl: GOOGLE_REVIEWS_URL
    },
    {
      id: 'review-6',
      quote: 'After a painful domestic fall, I struggled with acute muscular spasms and spinal stiffness. Dr. Pranab Jha and his dedicated team provided personalized, one-on-one supervision with modern physical therapy equipment. The relief was palpable right from the first few visits. Highly recommended for genuine healing in Mira Road.',
      author: 'Anita Sharma',
      branch: 'Mira Road',
      condition: 'Post-Fall Recovery & Muscular Spasms',
      source: 'Google Review',
      verified: true,
      rating: 5,
      date: 'Verified Patient',
      googleUrl: GOOGLE_REVIEWS_URL
    },
    {
      id: 'review-7',
      quote: 'I had severe radiating pain and numbness down my right arm due to cervical disc compression. Sitting at my desk for even an hour was excruciating. Dr. Jha’s combination of cervical traction decompression, medical acupuncture, and ergonomic posture retraining relieved the pinched nerve without surgery.',
      author: 'Prashant Mhatre',
      branch: 'Mira Road',
      condition: 'Cervical Radiculopathy & Arm Numbness',
      source: 'Google Review',
      verified: true,
      rating: 5,
      date: 'Verified Patient',
      googleUrl: GOOGLE_REVIEWS_URL
    },
    {
      id: 'review-8',
      quote: 'Diagnosed with severe L4-L5 disc protrusion and could barely stand upright without crippling lumbar pain. Two orthopedic surgeons had recommended spine surgery. Dr. Jha’s customized spinal decompression therapy and targeted acupuncture needling resolved the nerve inflammation within 10 sessions. I am back to routine life pain-free.',
      author: 'Ketan Patel',
      branch: 'Mira Road',
      condition: 'Lumbar Disc Herniation (L4-L5)',
      source: 'Google Review',
      verified: true,
      rating: 5,
      date: 'Verified Patient',
      googleUrl: GOOGLE_REVIEWS_URL
    },
    {
      id: 'review-9',
      quote: 'Woke up one morning with sudden facial drooping and inability to close my left eye due to Bell’s Palsy. Dr. Pranab Jha initiated specialized electro-acupuncture alongside facial neuromuscular re-education within 48 hours. Within three weeks, my facial symmetry and natural smile were 95% restored. Remarkable clinical dedication.',
      author: 'Dr. Sunita Deshmukh',
      branch: 'Mira Road',
      condition: 'Bell’s Palsy & Facial Nerve Care',
      source: 'Google Review',
      verified: true,
      rating: 5,
      date: 'Verified Patient',
      googleUrl: GOOGLE_REVIEWS_URL
    },
    {
      id: 'review-10',
      quote: 'Every morning my first step out of bed felt like stepping on a sharp nail due to chronic plantar fasciitis. After trying multiple pain gels, shoe insoles, and painkillers, Dr. Jha’s deep myofascial mobilization, dry needling, and calf release completely cleared the heel inflammation in 8 sessions.',
      author: 'Rajesh Nair',
      branch: 'Mira Road',
      condition: 'Plantar Fasciitis & Heel Spur',
      source: 'Google Review',
      verified: true,
      rating: 5,
      date: 'Verified Patient',
      googleUrl: GOOGLE_REVIEWS_URL
    },
    {
      id: 'review-11',
      quote: 'Suffered from debilitating migraine episodes and cervical tension headaches for over 4 years. Dr. Pranab Jha’s evidence-based acupuncture protocol targeting cervical trigger points and occipital nerves reduced my headache frequency from twice a week to almost zero. Life-changing care for chronic headache sufferers.',
      author: 'Meena Agarwal',
      branch: 'Mira Road',
      condition: 'Chronic Migraine & Cervicogenic Headache',
      source: 'Google Review',
      verified: true,
      rating: 5,
      date: 'Verified Patient',
      googleUrl: GOOGLE_REVIEWS_URL
    },
    {
      id: 'review-12',
      quote: 'Underwent post-operative ACL reconstruction and meniscus repair rehabilitation under Dr. Jha’s direct supervision. The progressive isometric loading, electrotherapy, and proprioceptive balance training helped me achieve full extension and quad activation weeks ahead of orthopedic projections. Highly recommended clinic.',
      author: 'Amitabh Sengupta',
      branch: 'Mira Road',
      condition: 'Post-Op ACL & Knee Rehabilitation',
      source: 'Google Review',
      verified: true,
      rating: 5,
      date: 'Verified Patient',
      googleUrl: GOOGLE_REVIEWS_URL
    }
  ]
}



