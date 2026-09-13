/**
 * Events & Workshops Dataset Foundation
 * 
 * Future-ready data architecture for Dr. Jha clinical events, workshops,
 * community health camps, and rehabilitation webinars.
 * 
 * Future Event Schema:
 * {
 *   slug: string,
 *   title: string,
 *   date: string, // e.g. 'October 15, 2026'
 *   time: string, // e.g. '10:00 AM – 1:00 PM'
 *   location: string, // e.g. 'Mira Road Clinic' | 'Online Webinar'
 *   category: string, // e.g. 'Workshop' | 'Webinar' | 'Health Camp'
 *   shortDescription: string,
 *   description: string,
 *   image: string,
 *   registrationLink?: string,
 *   status: 'Upcoming' | 'Completed' | 'Registration Open'
 * }
 * 
 * NOTE: Factual, authenticated events only. No fabricated placeholder events.
 */

export const events = []

/**
 * Retrieve event by slug
 * @param {string} slug 
 * @returns {object|undefined}
 */
export const getEventBySlug = (slug) => {
  if (!slug) return undefined
  return events.find((e) => e.slug.toLowerCase() === slug.toLowerCase())
}
