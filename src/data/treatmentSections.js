/**
 * Treatment category sections — used for URL-driven filtering & SEO.
 * Each entry maps to a URL slug: /treatments/<id>
 */
export const treatmentSections = [
  {
    id: 'physiotherapy-rehab',
    label: 'Physiotherapy & Rehab',
    slugs: ['physiotherapy', 'exercise-therapy', 'manual-therapy', 'dry-needling'],
    seo: {
      pageTitle: 'Physiotherapy & Rehabilitation Services | Expert Physical Therapy | Dr. Jha Centre',
      metaDescription: 'Specialized physiotherapy, manual therapy, exercise biomechanics, and myofascial dry needling for lasting musculoskeletal recovery.',
      canonicalUrl: 'https://drjhaphysio.in/treatments/physiotherapy-rehab'
    }
  },
  {
    id: 'acupuncture-specialized',
    label: 'Acupuncture & Specialized',
    slugs: ['acupuncture', 'scalp-acupuncture', 'auriculotherapy', 'bloodletting-therapy', 'cosmetic-acupuncture-laser'],
    seo: {
      pageTitle: 'Medical Acupuncture & Specialized Therapies | Pain Management | Dr. Jha Centre',
      metaDescription: 'Offering medical acupuncture, scalp acupuncture, ear seeds, cosmetic acupuncture, and micro-bleeding therapies for pain relief and neurological recovery.',
      canonicalUrl: 'https://drjhaphysio.in/treatments/acupuncture-specialized'
    }
  },
  {
    id: 'cupping-detoxification',
    label: 'Cupping & Detoxification',
    slugs: ['dry-cupping-therapy', 'wet-cupping-therapy', 'fire-cupping', 'guasa-therapy'],
    seo: {
      pageTitle: 'Cupping & Detoxification Therapy | Dry, Wet (Hijama) & Fire Cupping | Dr. Jha Centre',
      metaDescription: 'Revitalizing detoxification therapies including Hijama wet cupping, dry cupping, fire cupping, and Gua Sha IASTM for deep muscular relief.',
      canonicalUrl: 'https://drjhaphysio.in/treatments/cupping-detoxification'
    }
  },
  {
    id: 'advanced-thermal',
    label: 'Advanced & Thermal',
    slugs: ['laser-therapy', 'shockwave-therapy', 'moxibustion-therapy', 'ginger-moxibustion'],
    seo: {
      pageTitle: 'Advanced & Thermal Therapies | LASER, Shockwave & Moxibustion | Dr. Jha Centre',
      metaDescription: 'Cutting-edge treatment solutions including High/Low LASER (LLLT), Shockwave Therapy (ESWT), and Moxibustion for accelerated tissue healing.',
      canonicalUrl: 'https://drjhaphysio.in/treatments/advanced-thermal'
    }
  }
]

/** SEO defaults for the base /treatments (all-categories) route */
export const allTreatmentsSEO = {
  pageTitle: 'All Treatments & Therapies | Comprehensive Care | Dr. Jha Centre',
  metaDescription: 'Explore our full range of therapies including physiotherapy, acupuncture, cupping, and advanced thermal treatments at Dr. Jha Physiotherapy & Acupuncture Centre.',
  canonicalUrl: 'https://drjhaphysio.in/treatments'
}
