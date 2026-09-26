import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Calendar,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  MapPin,
  FileText,
  HelpCircle,
  Video,
  Sparkles,
  Activity,
  Stethoscope,
  BookOpen,
  Phone
} from 'lucide-react'
import { conditions } from '../../data/conditions'
import { treatments } from '../../data/treatments'
import { resources } from '../../data/resources'
import { caseStudies } from '../../data/caseStudies'
import { branches } from '../../data/branches'
import { useBranchContext } from '../../context/BranchContext'
import LocationContextBar from './LocationContextBar'

const allSearchItems = [
  ...conditions.map((c) => ({
    title: c.name,
    category: 'Conditions',
    tag: c.category || 'Condition',
    description: c.shortDescription || c.overview || '',
    href: `/conditions/${c.slug}`,
  })),
  ...treatments.map((t) => ({
    title: t.name,
    category: 'Treatments',
    tag: t.category || 'Treatment',
    description: t.shortDescription || t.overview || '',
    href: `/treatments/${t.slug}`,
  })),
  ...resources.map((r) => ({
    title: r.title,
    category: 'Blogs',
    tag: r.category || 'Blog',
    description: r.summary || '',
    href: `/blogs/${r.slug}`,
  })),
  ...caseStudies.map((cs) => ({
    title: cs.title,
    category: 'Case Studies',
    tag: cs.category || 'Case Study',
    description: cs.summary || '',
    href: `/case-studies/${cs.slug}`,
  })),
  ...branches.map((b) => ({
    title: `${b.name} Clinic`,
    category: 'Branches',
    tag: b.tag || 'Branch',
    description: `${b.headline} • ${b.address}`,
    href: `/${b.slug}`,
  })),
  {
    title: 'Neurological Conditions & Rehabilitation',
    category: 'Conditions',
    tag: 'Neurology',
    description: 'Stroke, Parkinson’s, Bell’s palsy, neuropathy, ataxia, and functional neuro-rehabilitation',
    href: '/neurological-conditions',
  },
  {
    title: 'Orthopaedic & Musculoskeletal Conditions',
    category: 'Conditions',
    tag: 'Orthopaedics',
    description: 'Spine, shoulder, knee, hip, arthritis, fractures, and sports injuries rehabilitation',
    href: '/orthopaedic-conditions',
  },
  {
    title: 'Systemic & General Health Conditions',
    category: 'Conditions',
    tag: 'Systemic',
    description: 'Women’s health, pulmonary, cardiac rehab, metabolic deconditioning, and chronic fatigue supportive care',
    href: '/systemic-conditions',
  },
  {
    title: 'Specialized & Aesthetic Wellness Care',
    category: 'Conditions',
    tag: 'Specialized',
    description: 'Skin & hair, vertigo, tinnitus, aesthetic facial acupuncture, height & posture, and general wellness care',
    href: '/specialized-conditions',
  },
  {
    title: 'Frequently Asked Questions (FAQs)',
    category: 'FAQs',
    tag: 'Help & FAQs',
    description: '20 comprehensive questions and answers on treatments, acupuncture safety, session duration, stroke rehab, locations, and booking',
    href: '/faqs',
  },
  {
    title: 'Acupuncture Safety & Session Details',
    category: 'FAQs',
    tag: 'Acupuncture',
    description: 'Is acupuncture painful or safe? Sterile disposable needles and holistic clinical protocols explained',
    href: '/faqs',
  },
  {
    title: 'Events & Workshops',
    category: 'Events',
    tag: 'Events',
    description: 'Upcoming clinic events, workshops and community health programs',
    href: '/events',
  },
]

export default function Navbar() {
  const location = useLocation()
  const { currentBranch, selectedBranchSlug } = useBranchContext()

  const isPathActive = (path) => {
    if (path === '/') return location.pathname === '/'
    if (path === '/blogs' || path === '/resources') {
      return (
        location.pathname === '/blogs' ||
        location.pathname.startsWith('/blogs/') ||
        location.pathname === '/resources' ||
        location.pathname.startsWith('/resources/') ||
        location.pathname === '/case-studies' ||
        location.pathname.startsWith('/case-studies/')
      )
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`)
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState({})
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchFilter, setSearchFilter] = useState('All')

  const filteredSearchItems = searchQuery.trim()
    ? allSearchItems.filter((item) => {
        const matchesFilter = searchFilter === 'All' || item.category === searchFilter
        const q = searchQuery.toLowerCase()
        const matchesQuery =
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.tag.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        return matchesFilter && matchesQuery
      })
    : []

  const timeoutRef = useRef(null)
  const searchInputRef = useRef(null)

  // Mouse hover handlers with delay to avoid flicker
  const handleMouseEnter = (menuKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(menuKey)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 160)
  }

  // Keyboard accessibility: ESC closes modal and dropdowns
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSearchModalOpen(false)
        setActiveDropdown(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Auto-focus search input when modal opens
  useEffect(() => {
    if (searchModalOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 50)
    }
  }, [searchModalOpen])

  const toggleMobileSection = (key) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  /* ──────────────── Navigation Data ──────────────── */

  const conditionsData = {
    title: 'Conditions We Treat',
    subtitle: 'Evidence-based recovery protocols tailored to your diagnosis',
    categories: [
      {
        heading: 'NEUROLOGICAL CONDITIONS',
        href: '/neurological-conditions',
        items: [
          { name: 'Stroke & Paralysis Rehabilitation', href: '/neurological-conditions#stroke-paralysis' },
          { name: "Parkinson's & Neurodegenerative", href: '/neurological-conditions#neurodegenerative' },
          { name: "Bell's Palsy & Facial Paralysis", href: '/neurological-conditions#facial-nerve' },
          { name: 'Cerebellar Ataxia & Balance', href: '/neurological-conditions#ataxia-balance' },
          { name: 'Peripheral Neuropathy & Foot Drop', href: '/neurological-conditions#neuropathies' },
          { name: 'Cerebral Palsy & Motor Disorders', href: '/neurological-conditions#cerebral-palsy' },
          { name: 'Functional Neuro Rehabilitation', href: '/neurological-conditions#functional-neurological' },
        ],
      },
      {
        heading: 'ORTHOPAEDIC & MUSCULOSKELETAL',
        href: '/orthopaedic-conditions',
        items: [
          { name: 'Spine & Back Conditions', href: '/orthopaedic-conditions#spine-back' },
          { name: 'Shoulder & Rotator Cuff Care', href: '/orthopaedic-conditions#shoulder' },
          { name: 'Knee Pain & Ligament Injuries', href: '/orthopaedic-conditions#knee' },
          { name: 'Hip & Pelvic Rehabilitation', href: '/orthopaedic-conditions#hip-pelvis' },
          { name: 'Elbow, Wrist & Hand Care', href: '/orthopaedic-conditions#elbow-wrist-hand' },
          { name: 'Ankle, Foot & Plantar Fasciitis', href: '/orthopaedic-conditions#ankle-foot' },
          { name: 'Arthritis & Joint Stiffness', href: '/orthopaedic-conditions#arthritis' },
          { name: 'Fracture & Post-Surgical Rehab', href: '/orthopaedic-conditions#post-surgical' },
        ],
      },
      {
        heading: 'SYSTEMIC & GENERAL HEALTH',
        href: '/systemic-conditions',
        items: [
          { name: 'Women’s Health & Pelvic Care', href: '/systemic-conditions#womens-health' },
          { name: 'Respiratory & Pulmonary Rehab', href: '/systemic-conditions#respiratory-pulmonary' },
          { name: 'Cardiac & Cardiovascular Rehab', href: '/systemic-conditions#cardiac-rehab' },
          { name: 'Digestive & Abdominal Care', href: '/systemic-conditions#digestive-metabolic' },
          { name: 'Metabolic & Lifestyle Recovery', href: '/systemic-conditions#metabolic-lifestyle' },
          { name: 'Chronic Fatigue & General Health', href: '/systemic-conditions#chronic-fatigue' },
          { name: 'Autoimmune & Rheumatological Care', href: '/systemic-conditions#autoimmune-support' },
          { name: 'Post-Illness & ICU Recovery', href: '/systemic-conditions#post-illness-icu' },
        ],
      },
      {
        heading: 'SPECIALIZED & WELLNESS CARE',
        href: '/specialized-conditions',
        items: [
          { name: 'Skin & Hair Supportive Care', href: '/specialized-conditions#skin-hair' },
          { name: 'Eye, Ear & Vestibular (Vertigo)', href: '/specialized-conditions#eye-ear-vestibular' },
          { name: 'Aesthetic & Cosmetic Wellness', href: '/specialized-conditions#aesthetic-acupuncture' },
          { name: 'Height, Growth & Posture', href: '/specialized-conditions#posture-ergonomics' },
          { name: 'Women’s Health & Pelvic Care', href: '/specialized-conditions#womens-health-spec' },
          { name: 'Respiratory & Pulmonary Care', href: '/specialized-conditions#respiratory-spec' },
          { name: 'Digestive & Abdominal Health', href: '/specialized-conditions#digestive-spec' },
          { name: 'General Wellness & Lifestyle', href: '/specialized-conditions#general-wellness' },
        ],
      },
    ],
    actionText: 'View All Conditions →',
    actionHref: '/conditions',
  }

  const treatmentsData = {
    title: 'Treatments & Modalities',
    subtitle: 'Comprehensive manual therapy, rehabilitation, and acupuncture care',
    categories: [
      {
        heading: 'PHYSIOTHERAPY & REHAB',
        items: [
          { name: 'Physiotherapy & Rehabilitation', href: '/treatments/physiotherapy' },
          { name: 'Exercise Therapy & Biomechanics', href: '/treatments/exercise-therapy' },
          { name: 'Manual Therapy & Mobilization', href: '/treatments/manual-therapy' },
          { name: 'Dry Needling & Myofascial', href: '/treatments/dry-needling' },
        ],
      },
      {
        heading: 'ACUPUNCTURE & SPECIALIZED',
        items: [
          { name: 'Medical Acupuncture & Pain', href: '/treatments/acupuncture' },
          { name: 'Scalp Acupuncture (Neuro)', href: '/treatments/scalp-acupuncture' },
          { name: 'Auriculotherapy (Ear Seeds)', href: '/treatments/auriculotherapy' },
          { name: 'Bloodletting (Micro-Bleeding)', href: '/treatments/bloodletting-therapy' },
          { name: 'Cosmetic Acupuncture + LASER', href: '/treatments/cosmetic-acupuncture-laser' },
        ],
      },
      {
        heading: 'CUPPING & DETOXIFICATION',
        items: [
          { name: 'Dry Cupping Therapy', href: '/treatments/dry-cupping-therapy' },
          { name: 'Wet Cupping Therapy (Hijama)', href: '/treatments/wet-cupping-therapy' },
          { name: 'Fire Cupping Therapy', href: '/treatments/fire-cupping' },
          { name: 'Gua Sha Therapy (IASTM)', href: '/treatments/guasa-therapy' },
        ],
      },
      {
        heading: 'ADVANCED & THERMAL',
        items: [
          { name: 'High & Low LASER (LLLT)', href: '/treatments/laser-therapy' },
          { name: 'Shockwave Therapy (ESWT)', href: '/treatments/shockwave-therapy' },
          { name: 'Moxibustion Therapy', href: '/treatments/moxibustion-therapy' },
          { name: 'Ginger Moxibustion', href: '/treatments/ginger-moxibustion' },
        ],
      },
    ],
    actionText: 'View All 17 Modalities →',
    actionHref: '/treatments',
  }


  const blogsData = [
    {
      heading: 'CLINICAL ARTICLES & GUIDES',
      icon: <BookOpen className="w-4 h-4 text-[#064C3B]" />,
      items: [
        { label: 'Understanding Back Pain & Recovery', href: '/blogs/understanding-back-pain' },
        { label: 'Understanding Sciatica & Nerve Relief', href: '/blogs/understanding-sciatica' },
        { label: 'When Should You See a Physiotherapist?', href: '/blogs/when-to-see-physio' },
        { label: 'All Articles & Clinical Guides →', href: '/blogs' },
      ],
    },
    {
      heading: 'PATIENT RECOVERY CASE STUDIES',
      icon: <Sparkles className="w-4 h-4 text-[#E5A500]" />,
      items: [
        { label: 'Sports Knee Sprain Rehabilitation', href: '/case-studies/sports-rehab-knee' },
        { label: 'Chronic Back Pain & Posture Relief', href: '/case-studies/back-pain-recovery' },
        { label: 'Stroke & Neurological Independence', href: '/case-studies/regaining-independence' },
        { label: 'All Real Recovery Journeys →', href: '/case-studies' },
      ],
    },
    {
      heading: 'FAQS & PATIENT GUIDANCE',
      icon: <HelpCircle className="w-4 h-4 text-[#064C3B]" />,
      items: [
        { label: '20 Common Patient FAQs', href: '/faqs' },
        { label: 'Medical Acupuncture Safety & Process', href: '/faqs' },
        { label: 'First Evaluation Session Overview', href: '/faqs' },
      ],
    },
    {
      heading: 'COMMUNITY & WORKSHOPS',
      icon: <Video className="w-4 h-4 text-[#064C3B]" />,
      items: [
        { label: 'Spine Health Camps & Seminars', href: '/events' },
        { label: 'Senior Mobility & Balance Programs', href: '/events' },
        { label: 'View Upcoming Clinic Events →', href: '/events' },
      ],
    },
  ]

  const popularSearches = [
    'Back Pain',
    'Sciatica',
    'Medical Acupuncture',
    'Stroke Rehabilitation',
    'Knee Pain',
    'Dry Needling',
    'Mira Road',
    'Shockwave Therapy',
  ]

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3">
        <nav className="w-full relative z-40 pt-1 pb-3 sm:pb-3.5">
        <div className="w-full flex items-center justify-between gap-3 lg:gap-5 xl:gap-8">
          {/* Brand Logo */}
          <Link to={selectedBranchSlug ? `/${selectedBranchSlug}` : '/'} className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            {/* Clinic Logo */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
              <img
                src="/logo.png"
                alt="Dr. Jha Physiotherapy & Acupuncture Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col shrink-0">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#26332F] leading-tight whitespace-nowrap">
                Dr. Jha
              </span>
              <span className="text-[7.5px] sm:text-[8.5px] lg:text-[9px] tracking-[0.14em] sm:tracking-[0.18em] font-medium text-stone-500 uppercase whitespace-nowrap">
                Physiotherapy • Rehabilitation • Acupuncture
              </span>
            </div>
          </Link>

          {/* ──────────────── Desktop Navigation Links ──────────────── */}
          <div className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6 text-[13px] xl:text-[13.5px] text-stone-600 font-medium">

            {/* 0. Home */}
            <Link
              to={selectedBranchSlug ? `/${selectedBranchSlug}` : '/'}
              className={`relative py-2 transition-colors whitespace-nowrap ${
                (selectedBranchSlug && isPathActive(`/${selectedBranchSlug}`)) || (!selectedBranchSlug && isPathActive('/'))
                  ? 'text-[#064C3B] font-semibold'
                  : 'text-stone-600 hover:text-[#064C3B] font-medium'
              }`}
            >
              <span className="relative inline-block">
                Home
                {((selectedBranchSlug && isPathActive(`/${selectedBranchSlug}`)) || (!selectedBranchSlug && isPathActive('/'))) && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#064C3B] rounded-full transition-all duration-200"></span>
                )}
              </span>
            </Link>

            {/* 1. About Us */}
            <Link
              to="/about"
              className={`relative py-2 transition-colors whitespace-nowrap ${
                isPathActive('/about')
                  ? 'text-[#064C3B] font-semibold'
                  : 'text-stone-600 hover:text-[#064C3B] font-medium'
              }`}
            >
              <span className="relative inline-block">
                About
                {isPathActive('/about') && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#064C3B] rounded-full transition-all duration-200"></span>
                )}
              </span>
            </Link>

            {/* 2. Conditions ▾ (Mega-Menu) */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('conditions')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/conditions"
                onClick={() => setActiveDropdown(null)}
                className={`relative py-2 flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer ${
                  isPathActive('/conditions')
                    ? 'text-[#064C3B] font-semibold'
                    : 'text-stone-600 hover:text-[#064C3B] font-medium'
                }`}
              >
                <span className="relative inline-block">
                  Conditions
                  {isPathActive('/conditions') && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#064C3B] rounded-full transition-all duration-200"></span>
                  )}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 ${
                    activeDropdown === 'conditions'
                      ? 'rotate-180 text-[#064C3B]'
                      : isPathActive('/conditions')
                      ? 'text-[#064C3B]'
                      : 'text-stone-400'
                  }`}
                />
              </Link>

              {/* Mega-Menu Dropdown for Conditions */}
              {activeDropdown === 'conditions' && (
                <div className="fixed left-4 right-4 max-w-6xl mx-auto top-[60px] xl:top-[66px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] shadow-2xl shadow-stone-900/10 p-7 lg:p-8 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-baseline justify-between pb-5 mb-5 border-b border-stone-200/70">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-stone-900">
                          {conditionsData.title}
                        </h3>
                        <p className="text-xs text-stone-500 mt-0.5">
                          {conditionsData.subtitle}
                        </p>
                      </div>
                      <Link
                        to={conditionsData.actionHref}
                        onClick={() => setActiveDropdown(null)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#064C3B] hover:text-[#073D32] transition-colors group"
                      >
                        <span>{conditionsData.actionText}</span>
                      </Link>
                    </div>

                    {/* 4 Categories */}
                    <div className="grid grid-cols-4 gap-6 xl:gap-8">
                      {conditionsData.categories.map((cat, idx) => (
                        <div key={idx} className="flex flex-col">
                          {/* Heading with generous bottom space & dividing line */}
                          <div className="pb-3.5 mb-4 border-b border-stone-200/75">
                            {cat.href ? (
                              <Link
                                to={cat.href}
                                onClick={() => setActiveDropdown(null)}
                                className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#064C3B] hover:text-[#0b6b53] group/heading flex items-center justify-between transition-colors leading-snug"
                              >
                                <span>{cat.heading}</span>
                                <ArrowRight className="w-3 h-3 text-[#064C3B] group-hover/heading:translate-x-1 transition-transform shrink-0 ml-1.5" />
                              </Link>
                            ) : (
                              <h4 className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#064C3B]">
                                {cat.heading}
                              </h4>
                            )}
                          </div>

                          {/* Subheadings with comfortable spacing and hover animation */}
                          <ul className="space-y-2">
                            {cat.items.map((item, itemIdx) => {
                              const label = typeof item === 'string' ? item : item.name
                              const href = typeof item === 'string'
                                ? `#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
                                : item.href
                              const isInternal = href.startsWith('/')

                              return (
                                <li key={itemIdx}>
                                  {isInternal ? (
                                    <Link
                                      to={href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="text-xs text-stone-600 hover:text-[#064C3B] hover:translate-x-1 transition-all block py-1 font-normal leading-relaxed hover:font-medium"
                                    >
                                      {label}
                                    </Link>
                                  ) : (
                                    <a
                                      href={href}
                                      onClick={() => setActiveDropdown(null)}
                                      className="text-xs text-stone-600 hover:text-[#064C3B] hover:translate-x-1 transition-all block py-1 font-normal leading-relaxed hover:font-medium"
                                    >
                                      {label}
                                    </a>
                                  )}
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Subtle bottom note / highlight */}
                    <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500 bg-[#F4F2EC]/60 -mx-8 -mb-8 px-8 py-3.5">
                      <span>Looking for stroke, Parkinson's or nerve care? Explore our dedicated program.</span>
                      <Link
                        to="/neurological-conditions"
                        onClick={() => setActiveDropdown(null)}
                        className="font-semibold text-stone-800 hover:text-[#064C3B] flex items-center gap-1"
                      >
                        Neurological Rehabilitation Page <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Treatments ▾ (Mega-Menu) */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('treatments')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/treatments"
                onClick={() => setActiveDropdown(null)}
                className={`relative py-2 flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer ${
                  isPathActive('/treatments')
                    ? 'text-[#064C3B] font-semibold'
                    : 'text-stone-600 hover:text-[#064C3B] font-medium'
                }`}
              >
                <span className="relative inline-block">
                  Treatments
                  {isPathActive('/treatments') && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#064C3B] rounded-full transition-all duration-200"></span>
                  )}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 ${
                    activeDropdown === 'treatments'
                      ? 'rotate-180 text-[#064C3B]'
                      : isPathActive('/treatments')
                      ? 'text-[#064C3B]'
                      : 'text-stone-400'
                  }`}
                />
              </Link>

              {/* Mega-Menu Dropdown for Treatments */}
              {activeDropdown === 'treatments' && (
                <div className="fixed left-4 right-4 max-w-6xl mx-auto top-[60px] xl:top-[66px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] shadow-2xl shadow-stone-900/10 p-7 lg:p-8 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-baseline justify-between pb-5 mb-5 border-b border-stone-200/70">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-stone-900">
                          {treatmentsData.title}
                        </h3>
                        <p className="text-xs text-stone-500 mt-0.5">
                          {treatmentsData.subtitle}
                        </p>
                      </div>
                      <Link
                        to={treatmentsData.actionHref}
                        onClick={() => setActiveDropdown(null)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#064C3B] hover:text-[#073D32] transition-colors group"
                      >
                        <span>{treatmentsData.actionText}</span>
                      </Link>
                    </div>

                    {/* 4 Categories */}
                    <div className="grid grid-cols-4 gap-6">
                      {treatmentsData.categories.map((cat, idx) => (
                        <div key={idx} className="space-y-3">
                          <h4 className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#064C3B]">
                            {cat.heading}
                          </h4>
                          <ul className="space-y-2">
                            {cat.items.map((item, itemIdx) => {
                              const label = typeof item === 'string' ? item : item.name
                              const href = typeof item === 'string'
                                ? `/treatments/${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
                                : item.href
                              return (
                                <li key={itemIdx}>
                                  <Link
                                    to={href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="text-xs text-stone-600 hover:text-[#064C3B] hover:translate-x-0.5 transition-all block py-0.5 font-normal hover:font-medium"
                                  >
                                    {label}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA strip */}
                    <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500 bg-[#F4F2EC]/60 -mx-8 -mb-8 px-8 py-3.5">
                      <span>Personalized multi-disciplinary plans combining manual therapy, rehab & acupuncture.</span>
                      <a
                        href="#book"
                        onClick={() => setActiveDropdown(null)}
                        className="font-semibold text-stone-800 hover:text-[#064C3B] flex items-center gap-1"
                      >
                        Schedule an Evaluation <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 6. Blogs ▾ (Clinical Insights & Knowledge Domain) */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('blogs')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/blogs"
                onClick={() => setActiveDropdown(null)}
                className={`relative py-2 flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer ${
                  isPathActive('/blogs')
                    ? 'text-[#064C3B] font-semibold'
                    : 'text-stone-600 hover:text-[#064C3B] font-medium'
                }`}
              >
                <span className="relative inline-block">
                  Blogs
                  {isPathActive('/blogs') && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#064C3B] rounded-full transition-all duration-200"></span>
                  )}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 ${
                    activeDropdown === 'blogs'
                      ? 'rotate-180 text-[#064C3B]'
                      : isPathActive('/blogs')
                      ? 'text-[#064C3B]'
                      : 'text-stone-400'
                  }`}
                />
              </Link>

              {/* Dropdown for Blogs */}
              {activeDropdown === 'blogs' && (
                <div className="fixed left-4 right-4 max-w-6xl mx-auto top-[60px] xl:top-[66px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] shadow-2xl shadow-stone-900/10 p-7 lg:p-8 overflow-hidden">
                    <div className="flex items-baseline justify-between pb-4 mb-5 border-b border-stone-200/70">
                      <div>
                        <h4 className="font-serif text-xl font-bold text-stone-900">
                          Blogs &amp; Clinical Insights
                        </h4>
                        <p className="text-xs text-stone-500 mt-0.5">
                          Evidence-based articles, patient case studies, recovery journeys &amp; FAQs
                        </p>
                      </div>
                      <Link
                        to="/blogs"
                        onClick={() => setActiveDropdown(null)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#064C3B] hover:text-[#073D32] transition-colors"
                      >
                        <span>Explore All Blogs &amp; Articles →</span>
                      </Link>
                    </div>

                    <div className="grid grid-cols-4 gap-6">
                      {blogsData.map((cat, idx) => (
                        <div key={idx} className="space-y-3">
                          <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.14em] uppercase text-[#064C3B]">
                            {cat.icon}
                            <span>{cat.heading}</span>
                          </div>
                          <ul className="space-y-2">
                            {cat.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <Link
                                  to={item.href || '/blogs'}
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-xs text-stone-600 hover:text-[#064C3B] hover:translate-x-0.5 transition-all block py-0.5 font-normal hover:font-medium leading-snug"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500 bg-[#F4F2EC]/60 -mx-8 -mb-8 px-8 py-3.5">
                      <span>Updated weekly with certified clinician insights and real patient recovery documentation.</span>
                      <Link
                        to="/case-studies"
                        onClick={() => setActiveDropdown(null)}
                        className="font-semibold text-stone-800 hover:text-[#064C3B] flex items-center gap-1"
                      >
                        View All Patient Case Studies <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Events */}
            <Link
              to="/events"
              className={`relative py-2 transition-colors whitespace-nowrap ${
                isPathActive('/events')
                  ? 'text-[#064C3B] font-semibold'
                  : 'text-stone-600 hover:text-[#064C3B] font-medium'
              }`}
            >
              <span className="relative inline-block">
                Events
                {isPathActive('/events') && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#064C3B] rounded-full transition-all duration-200"></span>
                )}
              </span>
            </Link>


          </div>

          {/* ──────────────── Right CTA Button ──────────────── */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href={`tel:${currentBranch?.phone ? currentBranch.phone.replace(/[^0-9+]/g, '') : '+919146036559'}`}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide text-white bg-[#064C3B] hover:bg-[#073D32] active:scale-[0.98] transition-all duration-200 shadow-sm shadow-[#064C3B]/20 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-white/90 shrink-0" />
              <span className="whitespace-nowrap">Call Us for Appointment</span>
              <span className="text-white/80 shrink-0">→</span>
            </a>
          </div>

          {/* ──────────────── Mobile Controls (Hamburger ONLY) ──────────────── */}
          <div className="flex items-center lg:hidden shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-stone-700 hover:text-[#064C3B] hover:bg-stone-200/50 active:bg-stone-200/70 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2]" />
              )}
            </button>
          </div>
        </div>

        {/* ──────────────── Mobile Dropdown Accordion Menu ──────────────── */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-5 rounded-3xl bg-[#FCFBF7] border border-[#DCDDD5] shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            
            {/* Home */}
            <Link
              to={selectedBranchSlug ? `/${selectedBranchSlug}` : '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm py-2 flex items-center justify-between transition-colors ${
                (selectedBranchSlug && isPathActive(`/${selectedBranchSlug}`)) || (!selectedBranchSlug && isPathActive('/'))
                  ? 'font-semibold text-[#064C3B]'
                  : 'font-medium text-stone-800'
              }`}
            >
              <span>Home</span>
              {((selectedBranchSlug && isPathActive(`/${selectedBranchSlug}`)) || (!selectedBranchSlug && isPathActive('/'))) && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#064C3B]"></span>
              )}
            </Link>

            {/* Conditions Accordion */}
            <div className="border-t border-stone-200/60 pt-2">
              <div className="w-full py-1 flex items-center justify-between">
                <Link
                  to="/conditions"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm hover:text-[#064C3B] ${
                    isPathActive('/conditions') ? 'font-semibold text-[#064C3B]' : 'font-medium text-stone-800'
                  }`}
                >
                  Conditions
                </Link>
                <button
                  type="button"
                  onClick={() => toggleMobileSection('conditions')}
                  className="p-1 text-base font-semibold text-stone-500 hover:text-stone-800"
                  aria-label="Toggle conditions list"
                >
                  {mobileExpanded['conditions'] ? '−' : '+'}
                </button>
              </div>

              {mobileExpanded['conditions'] && (
                <div className="pl-3 pr-1 py-2 space-y-4 bg-[#F4F2EC]/70 rounded-2xl p-3 my-1">
                  {conditionsData.categories.map((cat, idx) => (
                    <div key={idx}>
                      {cat.href ? (
                        <Link
                          to={cat.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[10px] font-bold tracking-wider uppercase text-[#064C3B] hover:underline mb-1.5 inline leading-snug"
                        >
                          <span>{cat.heading}</span>
                          <ArrowRight className="inline-block w-2.5 h-2.5 ml-1 align-middle -mt-0.5" />
                        </Link>
                      ) : (
                        <p className="text-[10px] font-bold tracking-wider uppercase text-[#064C3B] mb-1.5">
                          {cat.heading}
                        </p>
                      )}
                      <ul className="space-y-1.5 pl-2">
                        {cat.items.map((item, itemIdx) => {
                          const label = typeof item === 'string' ? item : item.name
                          const href = typeof item === 'string'
                            ? `#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
                            : item.href
                          const isInternal = href.startsWith('/')

                          return (
                            <li key={itemIdx}>
                              {isInternal ? (
                                <Link
                                  to={href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-xs text-stone-600 hover:text-[#064C3B] block py-0.5"
                                >
                                  {label}
                                </Link>
                              ) : (
                                <a
                                  href={href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-xs text-stone-600 hover:text-[#064C3B] block py-0.5"
                                >
                                  {label}
                                </a>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  ))}
                  <Link
                    to={conditionsData.actionHref}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-semibold text-[#064C3B] block pt-2 border-t border-stone-300/60"
                  >
                    {conditionsData.actionText}
                  </Link>
                </div>
              )}
            </div>

            {/* Treatments Accordion */}
            <div className="border-t border-stone-200/60 pt-2">
              <div className="w-full py-1 flex items-center justify-between">
                <Link
                  to="/treatments"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm hover:text-[#064C3B] ${
                    isPathActive('/treatments') ? 'font-semibold text-[#064C3B]' : 'font-medium text-stone-800'
                  }`}
                >
                  Treatments
                </Link>
                <button
                  type="button"
                  onClick={() => toggleMobileSection('treatments')}
                  className="p-1 text-base font-semibold text-stone-500 hover:text-stone-800"
                  aria-label="Toggle treatments list"
                >
                  {mobileExpanded['treatments'] ? '−' : '+'}
                </button>
              </div>

              {mobileExpanded['treatments'] && (
                <div className="pl-3 pr-1 py-2 space-y-4 bg-[#F4F2EC]/70 rounded-2xl p-3 my-1">
                  {treatmentsData.categories.map((cat, idx) => (
                    <div key={idx}>
                      <p className="text-[10px] font-bold tracking-wider uppercase text-[#064C3B] mb-1.5">
                        {cat.heading}
                      </p>
                      <ul className="space-y-1.5 pl-2">
                        {cat.items.map((item, itemIdx) => {
                          const label = typeof item === 'string' ? item : item.name
                          const href = typeof item === 'string'
                            ? `/treatments/${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`
                            : item.href
                          return (
                            <li key={itemIdx}>
                              <Link
                                to={href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-xs text-stone-600 hover:text-[#064C3B] block py-0.5"
                              >
                                {label}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  ))}
                  <Link
                    to={treatmentsData.actionHref}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-semibold text-[#064C3B] block pt-2 border-t border-stone-300/60"
                  >
                    {treatmentsData.actionText}
                  </Link>
                </div>
              )}
            </div>

            {/* About Us */}
            <div className="border-t border-stone-200/60 pt-2">
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 block ${
                  isPathActive('/about') ? 'font-semibold text-[#064C3B]' : 'font-medium text-stone-800'
                }`}
              >
                About Us
              </Link>
            </div>

            {/* Events */}
            <div className="border-t border-stone-200/60 pt-2">
              <Link
                to="/events"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 block ${
                  isPathActive('/events') ? 'font-semibold text-[#064C3B]' : 'font-medium text-stone-800'
                }`}
              >
                Events
              </Link>
            </div>

            {/* Blogs Accordion */}
            <div className="border-t border-stone-200/60 pt-2">
              <div className="w-full py-1 flex items-center justify-between">
                <Link
                  to="/blogs"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm hover:text-[#064C3B] ${
                    isPathActive('/blogs') ? 'font-semibold text-[#064C3B]' : 'font-medium text-stone-800'
                  }`}
                >
                  Blogs
                </Link>
                <button
                  type="button"
                  onClick={() => toggleMobileSection('blogs')}
                  className="p-1 text-base font-semibold text-stone-500 hover:text-stone-800"
                  aria-label="Toggle blogs list"
                >
                  {mobileExpanded['blogs'] ? '−' : '+'}
                </button>
              </div>

              {mobileExpanded['blogs'] && (
                <div className="pl-3 pr-1 py-2 space-y-4 bg-[#F4F2EC]/70 rounded-2xl p-3 my-1">
                  {blogsData.map((cat, idx) => (
                    <div key={idx}>
                      <p className="text-[10px] font-bold tracking-wider uppercase text-[#064C3B] mb-1.5 flex items-center gap-1.5">
                        {cat.icon}
                        <span>{cat.heading}</span>
                      </p>
                      <ul className="space-y-1.5 pl-2">
                        {cat.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link
                              to={item.href || '/blogs'}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs text-stone-600 hover:text-[#064C3B] block py-0.5"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link
                    to="/blogs"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-semibold text-[#064C3B] block pt-2 border-t border-stone-300/60"
                  >
                    Explore All Blogs &amp; Articles →
                  </Link>
                </div>
              )}
            </div>

            {/* FAQs Direct Link */}
            <div className="border-t border-stone-200/60 pt-2">
              <Link
                to="/faqs"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm py-2 block ${
                  isPathActive('/faqs') ? 'font-semibold text-[#064C3B]' : 'font-medium text-stone-800'
                }`}
              >
                FAQs (20 Common Questions)
              </Link>
            </div>



            {/* Call Us for Appointment CTA */}
            <div className="pt-2">
              <a
                href={`tel:${currentBranch?.phone ? currentBranch.phone.replace(/[^0-9+]/g, '') : '+919146036559'}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] shadow-md shadow-[#064C3B]/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us for Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
        </nav>
      </div>

      {/* ──────────────── 2. Location Context Bar ──────────────── */}
      <LocationContextBar />



      {/* ──────────────── 4. SEARCH MODAL ──────────────── */}
      {searchModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-4 bg-stone-950/40 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto"
          onClick={() => setSearchModalOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] shadow-2xl p-6 sm:p-8 overflow-hidden relative animate-in zoom-in-95 duration-200 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#064C3B]">
                Search Knowledge Base
              </span>
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-200/60 transition-colors cursor-pointer"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
              What are you looking for?
            </h3>

            {/* Search Input Box */}
            <div className="relative flex items-center bg-[#F4F2EC] rounded-full p-2 pl-5 border border-stone-300 shadow-sm focus-within:border-[#064C3B] focus-within:ring-2 focus-within:ring-[#064C3B]/15 transition-all">
              <Search className="w-5 h-5 text-stone-400 shrink-0 mr-3" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search conditions, treatments, branches..."
                className="w-full bg-transparent text-stone-800 placeholder:text-stone-400 text-sm sm:text-base focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1.5 rounded-full hover:bg-stone-200/60 text-stone-400 hover:text-stone-700 mr-1 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Category Chips */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-4">
              <span className="text-xs text-stone-400 mr-1">Filter:</span>
              {['All', 'Conditions', 'Treatments', 'Resources', 'Case Studies', 'Branches', 'Events'].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSearchFilter(filter)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    searchFilter === filter
                      ? 'bg-[#064C3B] text-white font-semibold'
                      : 'bg-white/80 border border-stone-200 text-stone-600 hover:border-stone-400'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Search Results */}
            {searchQuery.trim() ? (
              <div className="mt-5 pt-4 border-t border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    Results ({filteredSearchItems.length})
                  </span>
                  {searchFilter !== 'All' && (
                    <button
                      type="button"
                      onClick={() => setSearchFilter('All')}
                      className="text-xs text-[#064C3B] hover:underline cursor-pointer"
                    >
                      Clear filter
                    </button>
                  )}
                </div>

                {filteredSearchItems.length > 0 ? (
                  <div className="max-h-[300px] overflow-y-auto space-y-1.5 pr-1 divide-y divide-stone-200/50">
                    {filteredSearchItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.href}
                        onClick={() => {
                          setSearchModalOpen(false)
                          setSearchQuery('')
                        }}
                        className="block pt-2 pb-2 px-3 rounded-xl hover:bg-[#F4F2EC] transition-colors group"
                      >
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <span className="text-sm font-semibold text-stone-900 group-hover:text-[#064C3B] transition-colors">
                            {item.title}
                          </span>
                          <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-stone-200/80 text-stone-700 shrink-0">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-stone-500 line-clamp-1">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center bg-[#F4F2EC]/60 rounded-2xl border border-stone-200/60 mt-2">
                    <p className="text-sm font-medium text-stone-700">
                      No matching results found for "{searchQuery}"
                    </p>
                    <p className="text-xs text-stone-400 mt-1.5">
                      Try searching for{' '}
                      <button
                        type="button"
                        onClick={() => setSearchQuery('Back Pain')}
                        className="text-[#064C3B] hover:underline font-medium cursor-pointer"
                      >
                        Back Pain
                      </button>
                      {', '}
                      <button
                        type="button"
                        onClick={() => setSearchQuery('Acupuncture')}
                        className="text-[#064C3B] hover:underline font-medium cursor-pointer"
                      >
                        Acupuncture
                      </button>
                      {', or '}
                      <button
                        type="button"
                        onClick={() => setSearchQuery('Mira Road')}
                        className="text-[#064C3B] hover:underline font-medium cursor-pointer"
                      >
                        Mira Road
                      </button>
                      .
                    </p>
                  </div>
                )}
              </div>
            ) : (
              /* Popular Suggested Searches when no query */
              <div className="mt-6 pt-5 border-t border-stone-200">
                <p className="text-xs font-semibold text-stone-500 mb-2.5">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSearchQuery(item)}
                      className="px-3 py-1.5 rounded-full text-xs bg-[#F4F2EC] hover:bg-white text-stone-700 hover:text-stone-900 border border-stone-300/70 hover:border-stone-400 transition-all cursor-pointer"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-400">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-stone-200 text-stone-700 font-mono text-[10px]">ESC</kbd> to close</span>
              <Link
                to="/conditions"
                onClick={() => setSearchModalOpen(false)}
                className="text-[#064C3B] font-semibold hover:underline flex items-center gap-1"
              >
                Browse directory →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
