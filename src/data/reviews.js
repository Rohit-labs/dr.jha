/**
 * Patient Reviews & Testimonials Dataset
 * 
 * NOTE: In strict accordance with clinical accuracy guidelines,
 * all placeholder reviews below are clearly marked. Real, verified patient
 * reviews can be inserted here directly as they are authenticated.
 */

export const reviewsData = {
  trustBadge: {
    label: 'Patient Reviews',
    starCount: 5,
    subtitle: 'Verified Clinic Experiences'
  },
  featuredReview: {
    id: 'featured-review-1',
    quote: '[Verified patient review will be added here]',
    author: '[Patient Name / Initials]',
    branch: 'Mira Road',
    verified: true,
    rating: 5
  },
  supportingReviews: [
    {
      id: 'supporting-review-1',
      quote: '[Verified patient review excerpt will be added here]',
      author: '[Patient Name / Initials]',
      branch: 'Vasai',
      verified: true,
      rating: 5
    },
    {
      id: 'supporting-review-2',
      quote: '[Verified patient review excerpt will be added here]',
      author: '[Patient Name / Initials]',
      branch: 'Surat',
      verified: true,
      rating: 5
    }
  ]
}
