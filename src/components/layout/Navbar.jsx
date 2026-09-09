import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Calendar,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Search,
  MapPin,
  FileText,
  HelpCircle,
  Video,
  Sparkles,
  Activity,
  Stethoscope,
  BookOpen
} from 'lucide-react'

export default function Navbar() {
  const location = useLocation()
  const isPathActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState({})
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchFilter, setSearchFilter] = useState('All')

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
        heading: 'PAIN & MOBILITY',
        items: [
          'Back Pain',
          'Neck Pain',
          'Knee Pain',
          'Shoulder Pain',
          'Sciatica',
          'Arthritis',
          'Heel Pain & Plantar Fasciitis',
        ],
      },
      {
        heading: 'NEUROLOGICAL',
        items: [
          'Stroke Rehabilitation',
          "Parkinson's Rehabilitation",
          "Facial / Bell's Palsy",
          'Peripheral Neuropathy',
          'Spinal Cord Injury',
          'Cerebral Palsy',
          'Multiple Sclerosis',
        ],
      },
      {
        heading: 'SPORTS & INJURY',
        items: [
          'Sports Injuries',
          'Tennis Elbow',
          "Golfer's Elbow",
          'Other Musculoskeletal Injuries',
        ],
      },
      {
        heading: 'OTHER',
        items: [
          'Vertigo & Balance',
          "Women's Health",
          'Geriatric Rehabilitation',
          'Post-Surgical Rehabilitation',
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
        heading: 'PHYSIOTHERAPY',
        items: [
          'Orthopaedic Physiotherapy',
          'Sports Physiotherapy',
          'Neurological Rehabilitation',
          'Post-Surgical Rehabilitation',
          'Geriatric Physiotherapy',
          "Women's Health Physiotherapy",
          'Home Physiotherapy',
        ],
      },
      {
        heading: 'ACUPUNCTURE & TRADITIONAL',
        items: [
          'Medical Acupuncture',
          'Electro Acupuncture',
          'Dry Needling',
          'Cupping Therapy',
          'Auricular Acupuncture',
          'Moxibustion',
        ],
      },
      {
        heading: 'MANUAL & EXERCISE THERAPY',
        items: [
          'Manual Therapy',
          'Joint Mobilization',
          'Myofascial Release',
          'Trigger Point Therapy',
          'Therapeutic Exercise',
          'Strength & Conditioning',
          'Balance & Gait Training',
        ],
      },
      {
        heading: 'ADVANCED MODALITIES',
        items: [
          'Shockwave Therapy',
          'LASER Therapy',
          'IFT / TENS',
          'Ultrasound',
          'EMS / NMES',
          'SWD',
        ],
      },
    ],
    actionText: 'View All Treatments →',
    actionHref: '/treatments',
  }

  const branchesData = [
    {
      name: 'Mira Road',
      address: 'Shop 12-14, Green Heritage, Near Shanti Park',
      phone: '+91 98200 12345',
      timing: '8:00 AM – 9:00 PM',
      href: '/branches/mira-road',
    },
    {
      name: 'Vasai',
      address: '2nd Floor, Sai Arcade, Near Railway Station West',
      phone: '+91 98200 67890',
      timing: '8:30 AM – 8:30 PM',
      href: '/branches/vasai',
    },
    {
      name: 'Surat',
      address: '301, Titanium Square, Vesu Main Road',
      phone: '+91 98200 11223',
      timing: '9:00 AM – 8:00 PM',
      href: '/branches/surat',
    },
  ]

  const resourcesData = [
    {
      heading: 'HEALTH & REHABILITATION',
      icon: <Activity className="w-4 h-4 text-[#3A5A40]" />,
      items: [
        'Condition Guides',
        'Physiotherapy Articles',
        'Rehabilitation Tips',
      ],
    },
    {
      heading: 'PATIENT STORIES',
      icon: <Sparkles className="w-4 h-4 text-[#A8482D]" />,
      items: [
        'Case Studies',
        'Recovery Journeys',
      ],
    },
    {
      heading: 'HELP',
      icon: <HelpCircle className="w-4 h-4 text-stone-600" />,
      items: [
        'FAQs',
        'Common Questions',
      ],
    },
    {
      heading: 'MEDIA',
      icon: <Video className="w-4 h-4 text-stone-600" />,
      items: [
        'Videos',
        'Educational Content',
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
    'Post-Surgical Rehab',
    'Shockwave Therapy',
  ]

  return (
    <>
      <nav className="w-full relative z-40 pt-1 pb-3 sm:pb-3.5">
        <div className="w-full flex items-center justify-between gap-3 lg:gap-5 xl:gap-8">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            {/* Elegant Wellness Emblem */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-[#23382B] group-hover:scale-105 transition-transform shrink-0">
              <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 sm:w-9 sm:h-9">
                <circle cx="18" cy="8" r="3.2" fill="#263E32" />
                <path d="M17 14C12 14 7 18 8 26C11 25 15 22 17 18V14Z" fill="#263E32" />
                <path d="M19 14C24 14 29 18 28 26C25 25 21 22 19 18V14Z" fill="#365545" />
                <path d="M18 17V30C18 30 16.5 27 15 27" stroke="#263E32" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex flex-col shrink-0">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] leading-tight whitespace-nowrap">
                Dr. Jha
              </span>
              <span className="text-[7.5px] sm:text-[8.5px] lg:text-[9px] tracking-[0.14em] sm:tracking-[0.18em] font-medium text-stone-500 uppercase whitespace-nowrap">
                Physiotherapy • Rehabilitation • Acupuncture
              </span>
            </div>
          </Link>

          {/* ──────────────── Desktop Navigation Links ──────────────── */}
          <div className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6 text-[13px] xl:text-[13.5px] text-stone-600 font-medium">
            
            {/* 1. Home */}
            <Link
              to="/"
              className={`relative py-2 transition-colors whitespace-nowrap ${
                isPathActive('/') ? 'text-[#1A1A1A] font-semibold' : 'text-stone-600 hover:text-[#1A1A1A]'
              }`}
            >
              <span>Home</span>
              {location.pathname === '/' && (
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#A8482D] rounded-full"></span>
              )}
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
                className={`flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer ${
                  isPathActive('/conditions') ? 'text-[#A8482D] font-semibold' : 'hover:text-[#1A1A1A]'
                }`}
              >
                <span>Conditions</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-stone-400 stroke-[2.2] transition-transform duration-200 ${
                    activeDropdown === 'conditions' ? 'rotate-180 text-[#A8482D]' : ''
                  }`}
                />
              </Link>

              {/* Mega-Menu Dropdown for Conditions */}
              {activeDropdown === 'conditions' && (
                <div className="fixed left-4 right-4 max-w-6xl mx-auto top-[60px] xl:top-[66px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#FAF7F2] border border-[#E8E2D8] rounded-[28px] shadow-2xl shadow-stone-900/10 p-7 lg:p-8 overflow-hidden">
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
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A8482D] hover:text-[#8E3B24] transition-colors group"
                      >
                        <span>{conditionsData.actionText}</span>
                      </Link>
                    </div>

                    {/* 4 Categories */}
                    <div className="grid grid-cols-4 gap-6">
                      {conditionsData.categories.map((cat, idx) => (
                        <div key={idx} className="space-y-3">
                          <h4 className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3A5A40]">
                            {cat.heading}
                          </h4>
                          <ul className="space-y-2">
                            {cat.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <a
                                  href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-xs text-stone-600 hover:text-[#A8482D] hover:translate-x-0.5 transition-all block py-0.5"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Subtle bottom note / highlight */}
                    <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500 bg-[#F4EFEA]/60 -mx-8 -mb-8 px-8 py-3.5">
                      <span>Suffering from an unlisted symptom? Our specialists diagnose complex cases.</span>
                      <a
                        href="#book"
                        onClick={() => setActiveDropdown(null)}
                        className="font-semibold text-stone-800 hover:text-[#A8482D] flex items-center gap-1"
                      >
                        Consult a Physiotherapist <ArrowRight className="w-3 h-3" />
                      </a>
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
                className={`flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer ${
                  isPathActive('/treatments') ? 'text-[#A8482D] font-semibold' : 'hover:text-[#1A1A1A]'
                }`}
              >
                <span>Treatments</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-stone-400 stroke-[2.2] transition-transform duration-200 ${
                    activeDropdown === 'treatments' ? 'rotate-180 text-[#A8482D]' : ''
                  }`}
                />
              </Link>

              {/* Mega-Menu Dropdown for Treatments */}
              {activeDropdown === 'treatments' && (
                <div className="fixed left-4 right-4 max-w-6xl mx-auto top-[60px] xl:top-[66px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#FAF7F2] border border-[#E8E2D8] rounded-[28px] shadow-2xl shadow-stone-900/10 p-7 lg:p-8 overflow-hidden">
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
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A8482D] hover:text-[#8E3B24] transition-colors group"
                      >
                        <span>{treatmentsData.actionText}</span>
                      </Link>
                    </div>

                    {/* 4 Categories */}
                    <div className="grid grid-cols-4 gap-6">
                      {treatmentsData.categories.map((cat, idx) => (
                        <div key={idx} className="space-y-3">
                          <h4 className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3A5A40]">
                            {cat.heading}
                          </h4>
                          <ul className="space-y-2">
                            {cat.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <a
                                  href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-xs text-stone-600 hover:text-[#A8482D] hover:translate-x-0.5 transition-all block py-0.5"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA strip */}
                    <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500 bg-[#F4EFEA]/60 -mx-8 -mb-8 px-8 py-3.5">
                      <span>Personalized multi-disciplinary plans combining manual therapy, rehab & acupuncture.</span>
                      <a
                        href="#book"
                        onClick={() => setActiveDropdown(null)}
                        className="font-semibold text-stone-800 hover:text-[#A8482D] flex items-center gap-1"
                      >
                        Schedule an Evaluation <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. About Us (No dropdown) */}
            <Link
              to="/about"
              className={`py-2 transition-colors whitespace-nowrap ${
                isPathActive('/about') ? 'text-[#A8482D] font-semibold' : 'hover:text-[#1A1A1A]'
              }`}
            >
              About Us
            </Link>

            {/* 5. Branches ▾ (Dedicated 3 Locations) */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('branches')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/branches"
                onClick={() => setActiveDropdown(null)}
                className={`flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer ${
                  isPathActive('/branches') ? 'text-[#A8482D] font-semibold' : 'hover:text-[#1A1A1A]'
                }`}
              >
                <span>Branches</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-stone-400 stroke-[2.2] transition-transform duration-200 ${
                    activeDropdown === 'branches' ? 'rotate-180 text-[#A8482D]' : ''
                  }`}
                />
              </Link>

              {/* Simple Dropdown for Branches */}
              {activeDropdown === 'branches' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#FAF7F2] border border-[#E8E2D8] rounded-2xl shadow-xl shadow-stone-900/10 p-4 overflow-hidden">
                    <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#3A5A40] px-2 pb-2 mb-2 border-b border-stone-200/60 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#3A5A40]" />
                      <span>Physical Clinic Locations</span>
                    </div>

                    <div className="space-y-2">
                      {branchesData.map((branch, idx) => (
                        <Link
                          key={idx}
                          to={branch.href}
                          onClick={() => setActiveDropdown(null)}
                          className="p-2.5 rounded-xl hover:bg-[#F3EFEA] transition-colors block group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-stone-900 group-hover:text-[#A8482D] transition-colors">
                              {branch.name}
                            </span>
                            <span className="text-[10px] text-stone-400 group-hover:translate-x-0.5 transition-transform">→</span>
                          </div>
                          <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">
                            {branch.address}
                          </p>
                          <div className="flex items-center justify-between text-[10px] text-stone-400 mt-1">
                            <span>{branch.timing}</span>
                            <span className="font-medium text-stone-600">{branch.phone}</span>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="pt-3 mt-2 border-t border-stone-200/70 px-2">
                      <Link
                        to="/branches"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-semibold text-[#A8482D] hover:text-[#8E3B24] flex items-center justify-between group"
                      >
                        <span>View All Branches</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 6. Resources ▾ (Knowledge Centre) */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/resources"
                onClick={() => setActiveDropdown(null)}
                className={`flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer ${
                  isPathActive('/resources') ? 'text-[#A8482D] font-semibold' : 'hover:text-[#1A1A1A]'
                }`}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-stone-400 stroke-[2.2] transition-transform duration-200 ${
                    activeDropdown === 'resources' ? 'rotate-180 text-[#A8482D]' : ''
                  }`}
                />
              </Link>

              {/* Dropdown for Resources */}
              {activeDropdown === 'resources' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[540px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#FAF7F2] border border-[#E8E2D8] rounded-[24px] shadow-2xl shadow-stone-900/10 p-6 overflow-hidden">
                    <div className="flex items-baseline justify-between pb-3 mb-4 border-b border-stone-200/70">
                      <div>
                        <h4 className="font-serif text-base font-bold text-stone-900">
                          Patient Knowledge Centre
                        </h4>
                        <p className="text-[11px] text-stone-500">
                          Clinical guides, rehab insights & recovery stories
                        </p>
                      </div>
                      <BookOpen className="w-4 h-4 text-stone-400" />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      {resourcesData.map((cat, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-[0.14em] uppercase text-[#3A5A40]">
                            {cat.icon}
                            <span>{cat.heading}</span>
                          </div>
                          <ul className="space-y-1.5 pl-5">
                            {cat.items.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                <a
                                  href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-xs text-stone-600 hover:text-[#A8482D] hover:translate-x-0.5 transition-all block"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 mt-5 border-t border-stone-200/70 flex items-center justify-between">
                      <span className="text-[11px] text-stone-500">
                        Updated weekly with certified physiotherapist insights
                      </span>
                      <Link
                        to="/resources"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-semibold text-[#A8482D] hover:text-[#8E3B24] flex items-center gap-1"
                      >
                        Explore All Resources →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 7. Search Icon Button */}
            <button
              type="button"
              onClick={() => setSearchModalOpen(true)}
              className="p-2 rounded-full text-stone-600 hover:text-[#1A1A1A] hover:bg-stone-200/50 transition-colors cursor-pointer"
              aria-label="Open search"
              title="Search conditions, treatments, symptoms"
            >
              <Search className="w-4 h-4 stroke-[2.2]" />
            </button>
          </div>

          {/* ──────────────── Right CTA Button ──────────────── */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide text-white bg-[#A8482D] hover:bg-[#933D25] active:scale-[0.98] transition-all duration-200 shadow-sm shadow-[#A8482D]/20 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3.5 h-3.5 text-white/90 shrink-0" />
              <span className="whitespace-nowrap">Book Appointment</span>
              <span className="text-white/80 shrink-0">→</span>
            </a>
          </div>

          {/* ──────────────── Mobile Controls ──────────────── */}
          <div className="flex items-center gap-1.5 lg:hidden shrink-0">
            <button
              onClick={() => setSearchModalOpen(true)}
              className="p-2 rounded-xl text-stone-700 hover:text-black hover:bg-stone-200/50 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[2]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-700 hover:text-black hover:bg-stone-200/50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* ──────────────── Mobile Dropdown Accordion Menu ──────────────── */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 p-5 rounded-3xl bg-[#FAF7F2] border border-[#E8E2D8] shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            
            {/* Home */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm py-2 flex items-center justify-between ${
                location.pathname === '/' ? 'font-bold text-[#A8482D]' : 'font-medium text-stone-800'
              }`}
            >
              <span>Home</span>
              {location.pathname === '/' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8482D]"></span>
              )}
            </Link>

            {/* Conditions Accordion */}
            <div className="border-t border-stone-200/60 pt-2">
              <div className="w-full py-1 flex items-center justify-between">
                <Link
                  to="/conditions"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm hover:text-[#A8482D] ${
                    isPathActive('/conditions') ? 'font-bold text-[#A8482D]' : 'font-medium text-stone-800'
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
                <div className="pl-3 pr-1 py-2 space-y-4 bg-[#F4EFEA]/70 rounded-2xl p-3 my-1">
                  {conditionsData.categories.map((cat, idx) => (
                    <div key={idx}>
                      <p className="text-[10px] font-bold tracking-wider uppercase text-[#3A5A40] mb-1.5">
                        {cat.heading}
                      </p>
                      <ul className="space-y-1.5 pl-2">
                        {cat.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <a
                              href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs text-stone-600 hover:text-[#A8482D] block py-0.5"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link
                    to={conditionsData.actionHref}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-semibold text-[#A8482D] block pt-2 border-t border-stone-300/60"
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
                  className={`text-sm hover:text-[#A8482D] ${
                    isPathActive('/treatments') ? 'font-bold text-[#A8482D]' : 'font-medium text-stone-800'
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
                <div className="pl-3 pr-1 py-2 space-y-4 bg-[#F4EFEA]/70 rounded-2xl p-3 my-1">
                  {treatmentsData.categories.map((cat, idx) => (
                    <div key={idx}>
                      <p className="text-[10px] font-bold tracking-wider uppercase text-[#3A5A40] mb-1.5">
                        {cat.heading}
                      </p>
                      <ul className="space-y-1.5 pl-2">
                        {cat.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <a
                              href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs text-stone-600 hover:text-[#A8482D] block py-0.5"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link
                    to={treatmentsData.actionHref}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-semibold text-[#A8482D] block pt-2 border-t border-stone-300/60"
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
                  isPathActive('/about') ? 'font-bold text-[#A8482D]' : 'font-medium text-stone-800'
                }`}
              >
                About Us
              </Link>
            </div>

            {/* Branches Accordion */}
            <div className="border-t border-stone-200/60 pt-2">
              <div className="w-full py-1 flex items-center justify-between">
                <Link
                  to="/branches"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm hover:text-[#A8482D] ${
                    isPathActive('/branches') ? 'font-bold text-[#A8482D]' : 'font-medium text-stone-800'
                  }`}
                >
                  Branches
                </Link>
                <button
                  type="button"
                  onClick={() => toggleMobileSection('branches')}
                  className="p-1 text-base font-semibold text-stone-500 hover:text-stone-800"
                  aria-label="Toggle branches list"
                >
                  {mobileExpanded['branches'] ? '−' : '+'}
                </button>
              </div>

              {mobileExpanded['branches'] && (
                <div className="pl-3 pr-1 py-2 space-y-2 bg-[#F4EFEA]/70 rounded-2xl p-3 my-1">
                  {branchesData.map((branch, idx) => (
                    <Link
                      key={idx}
                      to={branch.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs text-stone-700 hover:text-[#A8482D] block py-1"
                    >
                      <span className="font-semibold">{branch.name}</span>
                      <span className="block text-[10px] text-stone-500">{branch.address}</span>
                    </Link>
                  ))}
                  <Link
                    to="/branches"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-semibold text-[#A8482D] block pt-2 border-t border-stone-300/60"
                  >
                    View All Branches →
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Accordion */}
            <div className="border-t border-stone-200/60 pt-2">
              <div className="w-full py-1 flex items-center justify-between">
                <Link
                  to="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm hover:text-[#A8482D] ${
                    isPathActive('/resources') ? 'font-bold text-[#A8482D]' : 'font-medium text-stone-800'
                  }`}
                >
                  Resources
                </Link>
                <button
                  type="button"
                  onClick={() => toggleMobileSection('resources')}
                  className="p-1 text-base font-semibold text-stone-500 hover:text-stone-800"
                  aria-label="Toggle resources list"
                >
                  {mobileExpanded['resources'] ? '−' : '+'}
                </button>
              </div>

              {mobileExpanded['resources'] && (
                <div className="pl-3 pr-1 py-2 space-y-3 bg-[#F4EFEA]/70 rounded-2xl p-3 my-1">
                  {resourcesData.map((cat, idx) => (
                    <div key={idx}>
                      <p className="text-[10px] font-bold tracking-wider uppercase text-[#3A5A40] mb-1">
                        {cat.heading}
                      </p>
                      <ul className="space-y-1 pl-2">
                        {cat.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <a
                              href={`#${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-xs text-stone-600 hover:text-[#A8482D] block py-0.5"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <Link
                    to="/resources"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs font-semibold text-[#A8482D] block pt-2 border-t border-stone-300/60"
                  >
                    Explore All Resources →
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Search Button */}
            <div className="border-t border-stone-200/60 pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  setSearchModalOpen(true)
                }}
                className="w-full flex items-center justify-between p-3 rounded-2xl bg-white border border-stone-200 text-stone-700 text-xs font-medium"
              >
                <span className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-stone-400" />
                  Search conditions, treatments...
                </span>
                <span className="text-[10px] text-stone-400 font-mono">⌘K</span>
              </button>
            </div>

            {/* Book Appointment CTA */}
            <div className="pt-2">
              <a
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white bg-[#A8482D] hover:bg-[#933D25] shadow-md shadow-[#A8482D]/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ──────────────── 7. SEARCH MODAL ──────────────── */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-stone-950/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="w-full max-w-2xl bg-[#FAF7F2] border border-[#E8E2D8] rounded-[28px] shadow-2xl p-6 sm:p-8 overflow-hidden relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#3A5A40]">
                Search Knowledge Base
              </span>
              <button
                type="button"
                onClick={() => setSearchModalOpen(false)}
                className="p-1.5 rounded-full text-stone-400 hover:text-stone-800 hover:bg-stone-200/60 transition-colors"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
              What are you looking for?
            </h3>

            {/* Search Input Box */}
            <div className="relative flex items-center bg-white rounded-full p-2 pl-5 border border-stone-300 shadow-sm focus-within:border-[#A8482D] focus-within:ring-2 focus-within:ring-[#A8482D]/15 transition-all">
              <Search className="w-5 h-5 text-stone-400 shrink-0 mr-3" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search a condition, treatment, symptom or topic..."
                className="w-full bg-transparent text-stone-800 placeholder:text-stone-400 text-sm sm:text-base focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1.5 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 mr-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Category Chips */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-xs text-stone-400 mr-1">Filter:</span>
              {['All', 'Conditions', 'Treatments', 'Resources', 'Case Studies'].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setSearchFilter(filter)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    searchFilter === filter
                      ? 'bg-[#A8482D] text-white font-semibold'
                      : 'bg-white border border-stone-200 text-stone-600 hover:border-stone-400'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Popular Suggested Searches */}
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
                    className="px-3 py-1.5 rounded-full text-xs bg-[#F3EFEA] hover:bg-white text-stone-700 hover:text-stone-900 border border-stone-300/70 hover:border-stone-400 transition-all cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-400">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-stone-200 text-stone-700 font-mono text-[10px]">ESC</kbd> to close</span>
              <Link
                to="/conditions"
                onClick={() => setSearchModalOpen(false)}
                className="text-[#A8482D] font-semibold hover:underline flex items-center gap-1"
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
