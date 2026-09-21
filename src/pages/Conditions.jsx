import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import CopyDirectLink from '../components/conditions/CopyDirectLink'
import { CLINIC_ORGANIZATION } from '../utils/seoStructuredData'
import { useBranchContext } from '../context/BranchContext'
import {
  Search,
  ArrowRight,
  Brain,
  Bone,
  HeartPulse,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  Stethoscope,
  Filter
} from 'lucide-react'

export default function Conditions() {
  const { currentBranch } = useBranchContext()
  const [filter, setFilter] = useState('')
  const [activeTab, setActiveTab] = useState('all')

  const phone = currentBranch?.phone || '+919146036559'
  const cleanPhone = phone.replace(/[^0-9+]/g, '')
  const whatsapp = currentBranch?.whatsapp || '9146036559'

  // Master 4-Pillar Clinical Data
  const pillars = [
    {
      id: 'neurological',
      title: 'Neurological Conditions',
      pageHref: '/neurological-conditions',
      badge: 'NEUROLOGICAL REHABILITATION',
      icon: <Brain className="w-5 h-5 text-[#064C3B]" />,
      description:
        'Individualized physiotherapy and acupuncture-based supportive care focused on neuroplasticity, mobility, coordination, and functional independence.',
      sections: [
        {
          id: 'stroke-paralysis',
          number: '01',
          title: 'Stroke & Paralysis Rehabilitation',
          tagline: 'Neuro-motor recovery & functional re-education',
          items: [
            'Stroke / Cerebrovascular Accident (CVA)',
            'Hemiplegia',
            'Hemiparesis',
            'Paraplegia',
            'Quadriplegia',
            'Spinal Cord Injury Rehab',
            'Traumatic Brain Injury (TBI)',
            'Post-Stroke Spasticity',
            'Post-Stroke Balance & Gait Disorders'
          ]
        },
        {
          id: 'neurodegenerative',
          number: '02',
          title: 'Neurodegenerative Conditions',
          tagline: 'Preserving motor capacity, balance & safety',
          items: [
            'Parkinson’s Disease',
            'Multiple Sclerosis (MS)',
            'Motor Neuron Disease (MND)',
            'Amyotrophic Lateral Sclerosis (ALS)',
            'Progressive Supranuclear Palsy (PSP)',
            'Multiple System Atrophy (MSA)',
            'Huntington’s Disease',
            'Dystonia',
            'Essential Tremor'
          ]
        },
        {
          id: 'cranial-nerve',
          number: '03',
          title: 'Bulbar, Facial & Cranial Nerve Disorders',
          tagline: 'Facial nerve activation & neuromuscular symmetry',
          items: [
            'Bulbar Palsy',
            'Pseudobulbar Palsy',
            'Facial Paralysis / Bell’s Palsy',
            'Cranial Nerve Palsies',
            'Trigeminal Neuralgia',
            'Facial Muscle Weakness'
          ]
        },
        {
          id: 'ataxia-balance',
          number: '04',
          title: 'Cerebellar & Ataxia Disorders',
          tagline: 'Vestibular & cerebellar coordination training',
          items: [
            'Cerebellar Ataxia',
            'Spinocerebellar Ataxia (SCA)',
            'Hereditary Ataxia',
            'Ataxia of Various Causes',
            'Balance & Coordination Disorders',
            'Gait Ataxia'
          ]
        },
        {
          id: 'peripheral-neuromuscular',
          number: '05',
          title: 'Peripheral Nerve & Neuromuscular Conditions',
          tagline: 'Sensory revival & nerve gliding therapy',
          items: [
            'Peripheral Neuropathy',
            'Diabetic Neuropathy',
            'Foot Drop (Peroneal Palsy)',
            'Nerve Palsy (Radial, Ulnar, Median)',
            'Guillain-Barré Syndrome (GBS)',
            'Muscular Dystrophy',
            'Neuromuscular Weakness',
            'Muscle Spasticity',
            'Post-Neurological Weakness'
          ]
        },
        {
          id: 'developmental',
          number: '06',
          title: 'Developmental & Other Neurological Conditions',
          tagline: 'Motor milestones & pediatric supportive therapy',
          items: [
            'Cerebral Palsy',
            'Developmental Motor Disorders',
            'Post-Encephalitis Sequelae',
            'Post-Meningitis Sequelae',
            'Neurological Weakness',
            'Mobility & Functional Impairments'
          ]
        },
        {
          id: 'functional-rehab',
          number: '07',
          title: 'Functional Neurological Rehabilitation',
          tagline: 'Rebuilding capacity for everyday living',
          items: [
            'Gait & Walking Difficulties',
            'Balance Problems',
            'Coordination Difficulties',
            'Muscle Stiffness & Spasticity',
            'Reduced Mobility & Transfers',
            'Postural Instability',
            'Activities of Daily Living (ADL) Support'
          ]
        }
      ]
    },
    {
      id: 'orthopaedic',
      title: 'Orthopaedic & Musculoskeletal Conditions',
      pageHref: '/orthopaedic-conditions',
      badge: 'ORTHOPAEDIC CARE',
      icon: <Bone className="w-5 h-5 text-[#064C3B]" />,
      description:
        'Physiotherapy and acupuncture-based care for acute joint pain, disc injuries, tendon tears, arthritis, and post-surgical recovery.',
      sections: [
        {
          id: 'spine-back',
          number: '01',
          title: 'Spine & Back Conditions',
          tagline: 'Disc bulge, sciatica & facet joint decompression',
          items: [
            'Neck Pain',
            'Back Pain',
            'Cervical Spondylosis',
            'Lumbar Spondylosis',
            'Cervical Disc Prolapse',
            'Lumbar Disc Prolapse / Slip Disc',
            'Sciatica',
            'Cervical & Lumbar Radiculopathy',
            'Spondylolisthesis',
            'Spinal Stenosis',
            'Facet & SI Joint Dysfunction',
            'Coccydynia'
          ]
        },
        {
          id: 'shoulder',
          number: '02',
          title: 'Shoulder Conditions',
          tagline: 'Capsular release & rotator cuff tendon loading',
          items: [
            'Frozen Shoulder (Adhesive Capsulitis)',
            'Shoulder Pain',
            'Rotator Cuff Tear & Tendinopathy',
            'Shoulder Impingement Syndrome',
            'Shoulder Bursitis',
            'Shoulder Dislocation & Instability',
            'Labral Injuries',
            'Post-Shoulder Surgery Rehab'
          ]
        },
        {
          id: 'knee',
          number: '03',
          title: 'Knee Conditions',
          tagline: 'Osteoarthritis care, cartilage protection & ligament rehab',
          items: [
            'Knee Osteoarthritis',
            'Knee Pain',
            'Patellofemoral Pain Syndrome',
            'Patellar Tendinopathy',
            'Meniscus Tears & Injuries',
            'ACL, PCL, MCL, LCL Sprains',
            'Knee Bursitis',
            'IT Band Syndrome',
            'Post-TKR & Post-Knee Surgery Rehab'
          ]
        },
        {
          id: 'hip-pelvis',
          number: '04',
          title: 'Hip & Pelvic Conditions',
          tagline: 'Trochanteric relief & acetabular alignment',
          items: [
            'Hip Pain',
            'Hip Osteoarthritis',
            'Hip Bursitis',
            'Greater Trochanteric Pain Syndrome',
            'Gluteal Tendinopathy',
            'Hip Impingement (FAI)',
            'Hip Labral Injuries',
            'Sacroiliac Joint Pain',
            'Post-Hip Replacement Rehab'
          ]
        },
        {
          id: 'elbow-wrist-hand',
          number: '05',
          title: 'Elbow, Wrist & Hand Conditions',
          tagline: 'Epicondylitis recovery & nerve decompression',
          items: [
            'Tennis Elbow (Lateral Epicondylitis)',
            'Golfer’s Elbow (Medial Epicondylitis)',
            'Elbow Pain & Bursitis',
            'Wrist Pain',
            'Carpal Tunnel Syndrome',
            'De Quervain’s Tenosynovitis',
            'Trigger Finger',
            'Post-Fracture & Hand Surgery Rehab'
          ]
        },
        {
          id: 'ankle-foot',
          number: '06',
          title: 'Ankle & Foot Conditions',
          tagline: 'Plantar fascia healing & arch stabilization',
          items: [
            'Ankle Pain & Sprains',
            'Chronic Ankle Instability',
            'Achilles Tendinopathy & Tears',
            'Plantar Fasciitis',
            'Heel Pain & Calcaneal Spur',
            'Flat Feet / Pes Planus',
            'Metatarsalgia',
            'Shin Splints (MTSS)',
            'Post-Fracture Ankle Rehab'
          ]
        },
        {
          id: 'arthritis-joints',
          number: '07',
          title: 'Arthritis & Joint Conditions',
          tagline: 'Morning stiffness relief & synovial joint care',
          items: [
            'Osteoarthritis',
            'Rheumatoid Arthritis (Supportive)',
            'Ankylosing Spondylitis (Supportive)',
            'Joint Stiffness & Pain',
            'Joint Mobility Restrictions',
            'Post-Immobilization Stiffness',
            'Degenerative Joint Disease'
          ]
        },
        {
          id: 'sports-soft-tissue',
          number: '08',
          title: 'Sports & Soft Tissue Injuries',
          tagline: 'Muscle strain rebuild & athletic conditioning',
          items: [
            'Muscle Strains & Tears',
            'Ligament & Tendon Injuries',
            'Sports-Related Sprains',
            'Overuse Injuries',
            'Tendinitis & Bursitis',
            'Myofascial Pain & Trigger Points',
            'Repetitive Strain Injuries'
          ]
        },
        {
          id: 'fracture-post-surgical',
          number: '09',
          title: 'Fracture & Post-Surgical Rehabilitation',
          tagline: 'Safe progressive loading after orthopaedic procedures',
          items: [
            'Post-Fracture Rehabilitation',
            'Post-Cast Immobilization Rehab',
            'Joint Replacement Rehab (TKR & THR)',
            'Post-ACL Reconstruction Rehab',
            'Post-Ligament Repair Rehab',
            'Post-Arthroscopy Rehab',
            'Post-Spine Surgery Rehab'
          ]
        },
        {
          id: 'postural-functional',
          number: '10',
          title: 'Postural & Functional Musculoskeletal Conditions',
          tagline: 'Forward head correction & kinetic chain balance',
          items: [
            'Poor Posture & Imbalances',
            'Forward Head Posture (Tech Neck)',
            'Rounded Shoulders',
            'Muscle Tightness & Weakness',
            'Flexibility & Mobility Restrictions',
            'Gait & Movement Dysfunction'
          ]
        }
      ]
    },
    {
      id: 'systemic',
      title: 'Systemic & General Health Conditions',
      pageHref: '/systemic-conditions',
      badge: 'SYSTEMIC SUPPORTIVE CARE',
      icon: <HeartPulse className="w-5 h-5 text-[#064C3B]" />,
      description:
        'Integrated physiotherapy and acupuncture-based supportive care focused on symptom management, vital endurance, and systemic functional recovery.',
      sections: [
        {
          id: 'womens-health',
          number: '01',
          title: 'Women’s Health Conditions',
          tagline: 'Pelvic health, dysmenorrhea & postpartum care',
          items: [
            'Menstrual Pain / Dysmenorrhea',
            'Premenstrual Syndrome (PMS)',
            'PCOS (Supportive care)',
            'Menstrual Irregularities',
            'Pelvic Pain',
            'Pregnancy & Postpartum Back Pain',
            'Pelvic Floor Dysfunction',
            'Urinary Incontinence',
            'Menopausal Musculoskeletal Symptoms'
          ]
        },
        {
          id: 'respiratory-pulmonary',
          number: '02',
          title: 'Respiratory & Pulmonary Conditions',
          tagline: 'Lung volume expansion & breathing retraining',
          items: [
            'Asthma (Supportive Care)',
            'COPD Rehabilitation',
            'Chronic Bronchitis Support',
            'Pulmonary Rehabilitation',
            'Post-COVID Respiratory Rehab',
            'Respiratory Muscle Weakness',
            'Breathing Pattern Disorders',
            'Reduced Exercise Tolerance'
          ]
        },
        {
          id: 'cardiac-rehab',
          number: '03',
          title: 'Cardiac & Cardiovascular Rehabilitation',
          tagline: 'Supervised conditioning & cardiovascular endurance',
          items: [
            'Cardiac Rehabilitation',
            'Post-Heart Attack Rehabilitation',
            'Post-CABG (Bypass) Rehabilitation',
            'Post-Angioplasty Rehabilitation',
            'Cardiovascular Deconditioning',
            'Reduced Exercise Tolerance',
            'Functional Cardiac Weakness'
          ]
        },
        {
          id: 'digestive-abdominal',
          number: '04',
          title: 'Digestive & Abdominal Conditions',
          tagline: 'Enteric regulation & abdominal wall tension relief',
          items: [
            'Chronic Constipation',
            'Irritable Bowel Syndrome (IBS Support)',
            'Bloating & Splanchnic Tension',
            'Indigestion / Dyspepsia',
            'Gas-Related Discomfort',
            'Functional Digestive Complaints',
            'Abdominal Musculoskeletal Pain'
          ]
        },
        {
          id: 'metabolic-lifestyle',
          number: '05',
          title: 'Metabolic & Lifestyle-Related Conditions',
          tagline: 'Insulin sensitivity & joint-safe exercise',
          items: [
            'Diabetes-Related Physical Complications',
            'Diabetic Neuropathy Care',
            'Obesity-Related Joint Issues',
            'Metabolic Deconditioning',
            'General Physical Deconditioning',
            'Reduced Exercise Tolerance',
            'Lifestyle Musculoskeletal Pain'
          ]
        },
        {
          id: 'chronic-health',
          number: '06',
          title: 'General & Chronic Health Conditions',
          tagline: 'Fatigue budgeting & somatic renewal',
          items: [
            'Chronic Fatigue Complaints',
            'General Weakness & Lethargy',
            'Chronic Pain Syndromes',
            'Stress-Related Muscle Tension',
            'Sleep Difficulties (Supportive Care)',
            'Physical Deconditioning',
            'Age-Related Functional Decline',
            'Post-Prolonged Illness Recovery'
          ]
        },
        {
          id: 'autoimmune-rheumatological',
          number: '07',
          title: 'Autoimmune & Rheumatological Conditions',
          tagline: 'Pain modulation & gentle mobility preservation',
          items: [
            'Rheumatoid Arthritis Support',
            'Ankylosing Spondylitis Support',
            'Fibromyalgia Syndrome',
            'Systemic Lupus Erythematosus (SLE Support)',
            'Sjögren’s Syndrome Support',
            'Rheumatological Rehabilitation'
          ]
        },
        {
          id: 'post-illness-recovery',
          number: '08',
          title: 'Post-Illness & Post-Hospitalization Rehabilitation',
          tagline: 'Rebuilding independence after intensive medical events',
          items: [
            'Post-COVID Rehabilitation',
            'Post-ICU Acquired Weakness',
            'Post-Hospitalization Deconditioning',
            'Bed Rest Muscle Loss Recovery',
            'Functional Mobility Recovery'
          ]
        }
      ]
    },
    {
      id: 'specialized',
      title: 'Specialized & Aesthetic Wellness Care',
      pageHref: '/specialized-conditions',
      badge: 'SPECIALIZED & WELLNESS',
      icon: <Sparkles className="w-5 h-5 text-[#064C3B]" />,
      description:
        'Unique integrative therapies covering vestibular vertigo, cosmetic facial acupuncture, hair supportive care, and adolescent growth posture.',
      sections: [
        {
          id: 'skin-hair',
          number: '01',
          title: 'Skin & Hair Conditions',
          tagline: 'Acupuncture-based microvascular follicle & dermal support',
          items: [
            'Acne & Blemishes',
            'Acne Scars Supportive Care',
            'Pigmentation & Melasma',
            'Skin Dullness',
            'Fine Lines & Wrinkles',
            'Hair Fall Supportive Care',
            'Alopecia Supportive Acupuncture'
          ]
        },
        {
          id: 'eye-ear-vestibular',
          number: '02',
          title: 'Eye, Ear & Vestibular Conditions',
          tagline: 'Canalith repositioning, vertigo relief & tinnitus care',
          items: [
            'Eye Strain (Digital Fatigue)',
            'Dry Eye Symptoms Support',
            'Tinnitus Supportive Management',
            'Vertigo (BPPV / Peripheral)',
            'Dizziness & Disequilibrium',
            'Vestibular Dysfunction & Balance',
            'Facial Paralysis-Related Dysfunction'
          ]
        },
        {
          id: 'aesthetic-cosmetic',
          number: '03',
          title: 'Aesthetic & Cosmetic Wellness',
          tagline: 'Facial micro-needling, collagen lift & muscle toning',
          items: [
            'Facial Rejuvenation',
            'Fine Lines & Wrinkles',
            'Facial Puffiness & Lymphatic Sluggishness',
            'Skin Tone & Texture Concerns',
            'Facial Muscle Toning',
            'Aesthetic Acupuncture',
            'Wellness-Oriented Cosmetic Care'
          ]
        },
        {
          id: 'height-posture',
          number: '04',
          title: 'Height, Growth & Posture',
          tagline: 'Spinal decompression & healthy adolescent growth',
          items: [
            'Postural Imbalance',
            'Poor Posture & Forward Head',
            'Rounded Shoulders',
            'Growth-Related Postural Concerns',
            'Musculoskeletal Imbalances',
            'Flexibility & Mobility Restrictions',
            'Height & Posture Support'
          ]
        },
        {
          id: 'womens-health',
          number: '05',
          title: 'Women’s Health & Pelvic Care',
          tagline: 'Supportive care for pelvic floor & postnatal healing',
          items: [
            'Dysmenorrhea & Pelvic Pain',
            'PCOS Supportive Care',
            'Pregnancy & Postnatal Back Pain',
            'Pelvic Floor Dysfunction',
            'Urinary Incontinence',
            'Menopausal Musculoskeletal Care'
          ]
        },
        {
          id: 'respiratory-pulmonary',
          number: '06',
          title: 'Respiratory & Pulmonary Care',
          tagline: 'Lung volume recovery & diaphragmatic re-education',
          items: [
            'Asthma Respiratory Care',
            'COPD Rehabilitation',
            'Chronic Bronchitis Support',
            'Pulmonary Rehabilitation',
            'Post-COVID Respiratory Recovery',
            'Breathing Pattern Disorders'
          ]
        },
        {
          id: 'digestive-abdominal',
          number: '07',
          title: 'Digestive & Abdominal Health',
          tagline: 'Enteric motility & visceral abdominal comfort',
          items: [
            'Functional Constipation',
            'IBS Supportive Management',
            'Bloating & Dyspepsia',
            'Functional Gas Discomfort',
            'Abdominal Musculoskeletal Pain'
          ]
        },
        {
          id: 'general-wellness',
          number: '08',
          title: 'General Wellness & Lifestyle',
          tagline: 'Stress release, sleep reset & somatic vitality',
          items: [
            'Stress-Related Muscle Tension',
            'Sleep Difficulties Supportive Care',
            'General Physical Weakness',
            'Fatigue Functional Complaints',
            'Physical Deconditioning'
          ]
        }
      ]
    }
  ]

  // Filter logic across search query and active category tab
  const filteredPillars = useMemo(() => {
    return pillars
      .filter((p) => activeTab === 'all' || p.id === activeTab)
      .map((p) => {
        if (!filter.trim()) return p

        const q = filter.toLowerCase()
        const matchesPillar =
          p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)

        const matchingSections = p.sections.filter((s) => {
          const matchesTitle = s.title.toLowerCase().includes(q)
          const matchesTagline = s.tagline.toLowerCase().includes(q)
          const matchesItems = s.items.some((item) => item.toLowerCase().includes(q))
          return matchesTitle || matchesTagline || matchesItems
        })

        if (matchesPillar) return p

        return {
          ...p,
          sections: matchingSections
        }
      })
      .filter((p) => p.sections.length > 0)
  }, [filter, activeTab])

  // Total count of categories
  const totalSectionsCount = pillars.reduce((sum, p) => sum + p.sections.length, 0)

  return (
    <PageContainer>
      <SEO
        title="Conditions We Treat — Physiotherapy & Medical Acupuncture | Dr. Jha"
        description="Comprehensive clinical directory of 34+ conditions treated across Mira Road, Vasai, and Surat. Neuro-rehabilitation, spine & joint pain relief, women's health & specialized care."
        keywords="conditions treated dr jha, physiotherapy clinic mira road, acupuncture vasai, pain relief surat, stroke rehab, sciatica clinic, frozen shoulder, bells palsy"
        canonicalUrl="https://drjhaphysiotherapy.com/conditions"
        structuredData={{
          '@context': 'https://schema.org',
          '@graph': [
            CLINIC_ORGANIZATION,
            {
              '@type': 'MedicalWebPage',
              'name': 'Conditions We Treat | Dr. Jha Physiotherapy & Acupuncture Centre',
              'url': 'https://drjhaphysiotherapy.com/conditions',
              'description': 'Comprehensive directory of 34 clinical conditions treated with evidence-based physiotherapy and medical acupuncture.',
              'about': pillars.flatMap((p) =>
                p.sections.map((s) => ({
                  '@type': 'MedicalCondition',
                  'name': s.title,
                  'description': s.description
                }))
              )
            }
          ]
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'Conditions Directory' }]} />

        {/* ════════════════ HERO HEADER ════════════════ */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#064C3B] uppercase mb-3">
            <Stethoscope className="w-4 h-4 text-[#064C3B]" />
            <span>CLINICAL CARE DIRECTORY &bull; 4 COMPREHENSIVE DOMAINS</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-[1.14] mb-4">
            Conditions <span className="italic font-normal text-[#064C3B]">We Treat</span>
          </h1>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            Explore our clinician-curated directory spanning neurological rehabilitation, orthopaedic and spine care, systemic supportive therapy, and specialized aesthetic wellness. Each condition is managed with individualized physiotherapy and medical acupuncture protocols.
          </p>

          {/* Search Box */}
          <div className="mt-6 relative max-w-lg">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search by diagnosis (e.g., Sciatica, Bell's Palsy, Vertigo, ACL, PCOS)..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-stone-300 bg-white text-xs sm:text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#064C3B] focus:ring-2 focus:ring-[#064C3B]/20 shadow-xs"
            />
            {filter && (
              <button
                type="button"
                onClick={() => setFilter('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 font-medium"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* ════════════════ CATEGORY FILTER TABS ════════════════ */}
        <div className="mb-10 sm:mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-[#064C3B] text-white shadow-sm'
                  : 'bg-[#F4F2EC] text-stone-700 hover:bg-stone-200 border border-stone-200/70'
              }`}
            >
              All Domains ({totalSectionsCount})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('neurological')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'neurological'
                  ? 'bg-[#064C3B] text-white shadow-sm'
                  : 'bg-[#F4F2EC] text-stone-700 hover:bg-stone-200 border border-stone-200/70'
              }`}
            >
              Neurological (7)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('orthopaedic')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'orthopaedic'
                  ? 'bg-[#064C3B] text-white shadow-sm'
                  : 'bg-[#F4F2EC] text-stone-700 hover:bg-stone-200 border border-stone-200/70'
              }`}
            >
              Orthopaedic &amp; Musculoskeletal (10)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('systemic')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'systemic'
                  ? 'bg-[#064C3B] text-white shadow-sm'
                  : 'bg-[#F4F2EC] text-stone-700 hover:bg-stone-200 border border-stone-200/70'
              }`}
            >
              Systemic Health (8)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('specialized')}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'specialized'
                  ? 'bg-[#064C3B] text-white shadow-sm'
                  : 'bg-[#F4F2EC] text-stone-700 hover:bg-stone-200 border border-stone-200/70'
              }`}
            >
              Specialized &amp; Wellness (8)
            </button>
          </div>
        </div>

        {/* ════════════════ 4 GRAND PILLARS & SECTIONS ════════════════ */}
        {filteredPillars.length === 0 ? (
          <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-12 text-center max-w-lg mx-auto">
            <p className="text-sm font-semibold text-stone-800 mb-2">No matching conditions found</p>
            <p className="text-xs text-stone-500 mb-5">
              We couldn't find any condition matching "{filter}". Try searching another symptom or reset your search.
            </p>
            <button
              type="button"
              onClick={() => {
                setFilter('')
                setActiveTab('all')
              }}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#064C3B] hover:bg-[#073D32]"
            >
              Reset Search &amp; View All
            </button>
          </div>
        ) : (
          <div className="space-y-16 sm:space-y-20">
            {filteredPillars.map((pillar) => (
              <section key={pillar.id} className="space-y-6">
                
                {/* Pillar Header Card */}
                <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
                  <div className="max-w-2xl space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="p-2 rounded-xl bg-[#064C3B]/10">{pillar.icon}</span>
                      <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#064C3B]">
                        {pillar.badge}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#26332F]">
                      {pillar.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <Link
                    to={pillar.pageHref}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] transition-all shadow-md shrink-0 self-start md:self-auto group"
                  >
                    <span>Explore Full Clinical Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Subsections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                  {pillar.sections.map((sec) => (
                    <div
                      key={sec.id}
                      className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:border-[#064C3B]/60 hover:shadow-md transition-all group"
                    >
                      <div>
                        {/* Header Pill & ID */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-mono font-bold text-[#064C3B] bg-[#064C3B]/10 px-2 py-0.5 rounded-full">
                            DOM-{sec.number}
                          </span>
                          <span className="text-[11px] font-medium text-stone-400">
                            {sec.items.length} Diagnoses
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#26332F] leading-snug mb-2 group-hover:text-[#064C3B] transition-colors">
                          <Link to={`${pillar.pageHref}#${sec.id}`}>
                            {sec.title}
                          </Link>
                        </h3>

                        {/* Tagline */}
                        <p className="text-xs text-[#B8583B] font-medium mb-3.5 leading-snug">
                          {sec.tagline}
                        </p>

                        {/* Diagnoses Preview Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {sec.items.slice(0, 5).map((item, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] bg-[#F4F2EC] text-stone-700 px-2 py-0.5 rounded-md border border-stone-200/50"
                            >
                              {item.split('(')[0].trim()}
                            </span>
                          ))}
                          {sec.items.length > 5 && (
                            <span className="text-[10px] text-stone-400 self-center font-medium pl-1">
                              +{sec.items.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Direct Subsection Link with Highlight Effect */}
                      <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                        <Link
                          to={`${pillar.pageHref}#${sec.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#064C3B] group-hover:text-[#073D32] transition-colors"
                        >
                          <span>Explore Protocol &amp; Care</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <CopyDirectLink
                          targetPath={pillar.pageHref}
                          sectionId={sec.id}
                          title={sec.title}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </section>
            ))}
          </div>
        )}

        {/* ════════════════ CLINICAL CONSULTATION CARD ════════════════ */}
        <div className="mt-16 sm:mt-20 bg-[#073D32] text-white rounded-[32px] p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#E5A500] uppercase block mb-2">
              UNLISTED OR COMPLEX SYMPTOMS?
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Schedule a Clinical Assessment Across Our 3 Centres
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
              Many patients present with overlapping symptoms—such as chronic spinal stiffness accompanied by nerve pain or metabolic fatigue. Our specialists conduct thorough functional evaluations to build your targeted recovery roadmap.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`tel:${cleanPhone}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#043328] border border-white/20 shadow-md transition-all active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span>Call For Assessment ({phone})</span>
            </a>
            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent('Hello Dr. Jha Centre, I would like to consult regarding a condition assessment.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#073D32] bg-white hover:bg-stone-100 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Us Directly</span>
            </a>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-stone-300 hover:text-white transition-colors"
            >
              <span>View Mira Road, Vasai &amp; Surat Centres</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </PageContainer>
  )
}
