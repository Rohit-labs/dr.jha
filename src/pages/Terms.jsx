import React from 'react'
import { Link } from 'react-router-dom'
import PageContainer from '../components/layout/PageContainer'
import SEO from '../components/common/SEO'
import Breadcrumbs from '../components/common/Breadcrumbs'
import {
  FileText,
  ShieldCheck,
  Lock,
  Video,
  Building2,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  Phone,
  ArrowRight,
  ExternalLink,
  MapPin
} from 'lucide-react'

export default function Terms() {
  const termsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms & Conditions for Patients | Dr. Jha Physiotherapy & Acupuncture Centre',
    description: 'Terms and conditions, patient privacy guidelines, online tele-consultation protocols, and physical clinic policies for Dr. Jha Physiotherapy & Acupuncture Centre.',
    url: 'https://drjhaphysio.in/terms'
  }

  return (
    <PageContainer>
      <SEO
        title="Terms & Conditions for Patients | Dr. Jha Centre"
        description="Review the patient terms and conditions, healthcare authorization, tele-consultation policies, and data privacy guidelines for Dr. Jha Physiotherapy & Acupuncture Centre."
        canonicalUrl="https://drjhaphysio.in/terms"
        structuredData={termsStructuredData}
      />

      <div className="w-full py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

          {/* ═══════════ HEADER ═══════════ */}
          <div className="mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCFBF7] border border-[#DCDDD5] text-xs font-semibold text-[#064C3B] tracking-wider uppercase mb-4 shadow-xs">
              <FileText className="w-3.5 h-3.5" />
              <span>Legal &amp; Clinical Protocols</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] tracking-tight leading-[1.15] mb-4">
              Terms &amp; Conditions <br />
              <span className="italic font-normal text-[#064C3B]">for Patients</span>
            </h1>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal max-w-2xl">
              Please read these terms and conditions carefully before booking an appointment or receiving healthcare services from Dr. Jha Physiotherapy &amp; Acupuncture Centre.
            </p>

            <div className="flex items-center gap-4 text-xs text-stone-500 mt-4 pt-4 border-t border-stone-200/80">
              <span>Official Patient Agreement</span>
              <span>•</span>
              <span>Updated &amp; Effective: 2025 – 2026</span>
            </div>
          </div>

          {/* ═══════════ CONTENT SECTIONS ═══════════ */}
          <div className="space-y-10 sm:space-y-12">

            {/* 1. Scope & Healthcare Service Authorization */}
            <section className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F4F2EC] flex items-center justify-center text-[#064C3B] shrink-0 mt-0.5">
                  <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] leading-tight">
                    1. Healthcare Services Authorization &amp; Pre-Primary Diagnosis
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Booking authorization, scope of assessment, and onward referral guidelines
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                <p>
                  By digitally booking an appointment via{' '}
                  <a
                    href="https://www.drjhaphysios.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#064C3B] hover:underline inline-flex items-center gap-1"
                  >
                    <span>https://www.drjhaphysios.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>{' '}
                  or associated clinic platforms, you authorize the Doctors and qualified practitioners associated with{' '}
                  <strong className="text-stone-900 font-semibold">Dr Jha Physiotherapy &amp; Acupuncture Center</strong>{' '}
                  to assess your medical history and provide healthcare services on an <em>‘as is’</em> and <em>‘as available’</em> basis, including administration of therapeutic modalities, rehabilitation exercises, and medications as deemed clinically necessary.
                </p>

                {/* Important Callout */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F8F6F0] border border-[#DCDDD5]/80 flex items-start gap-3.5">
                  <AlertCircle className="w-5 h-5 text-[#E5A500] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-[13px] text-stone-700 leading-relaxed">
                    <strong className="font-semibold text-stone-900 block mb-1">Pre-Primary Consultation Level:</strong>
                    The diagnosis based on digital or initial consultation is at a <strong>pre-primary level</strong>. You agree that you will visit another medical doctor or specialized physician, either as directed by the Doctor undertaking the consultation or a doctor of your choice, for advanced diagnostic workups, radiological imaging, or further treatment where required.
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Sensitive Personal Information (SPI) & Privacy */}
            <section className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F4F2EC] flex items-center justify-center text-[#064C3B] shrink-0 mt-0.5">
                  <Lock className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] leading-tight">
                    2. Sensitive Personal Information (“SPI”) &amp; Confidentiality
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    How patient health data, medical records, and biometrics are handled
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                <p>
                  During your clinical interaction, you will disclose sensitive personal information (<strong className="font-semibold text-stone-900">“SPI”</strong>) to Dr Jha Physiotherapy &amp; Acupuncture Center, which will include without limitation:
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <li className="p-3.5 rounded-xl bg-white border border-stone-200/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#064C3B] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700 leading-normal">
                      Physical, physiological, and mental health conditions, symptoms, and medical history
                    </span>
                  </li>
                  <li className="p-3.5 rounded-xl bg-white border border-stone-200/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#064C3B] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700 leading-normal">
                      Medical test results, diagnostic reports, and imaging in connection with your treatment
                    </span>
                  </li>
                  <li className="p-3.5 rounded-xl bg-white border border-stone-200/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#064C3B] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700 leading-normal">
                      Past medical history, surgical records, and prescription documentation
                    </span>
                  </li>
                  <li className="p-3.5 rounded-xl bg-white border border-stone-200/80 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#064C3B] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700 leading-normal">
                      Biometric information and identifiers needed for clinical records and identity verification
                    </span>
                  </li>
                </ul>

                <p className="pt-2">
                  <strong className="text-stone-900 font-semibold">Strict Purpose Limitation &amp; Non-Disclosure:</strong>{' '}
                  Dr Jha Physiotherapy &amp; Acupuncture Center may store, use, and disclose your SPI to the Doctors solely for the purposes of clinical treatment and recovery planning. Dr Jha Physiotherapy &amp; Acupuncture Center will <strong className="text-stone-900">not publish or disclose</strong> your SPI to any third person or body corporate without your explicit consent, except when mandated by applicable law.
                </p>

                <p>
                  <strong className="text-stone-900 font-semibold">Review &amp; Record Correction:</strong>{' '}
                  You may review the medical history and other related records provided by you to Dr Jha Physiotherapy &amp; Acupuncture Center at any time, and request Dr Jha Physiotherapy &amp; Acupuncture Center to correct or amend any inaccurate or deficient information.
                </p>

                <p>
                  <strong className="text-stone-900 font-semibold">Patient Responsibility for Authenticity:</strong>{' '}
                  Dr Jha Physiotherapy &amp; Acupuncture Center will not be responsible for the authenticity or accuracy of the SPI provided by you. Accurate medical disclosure is vital to safe and effective clinical care.
                </p>
              </div>
            </section>

            {/* 3. Limitation of Liability */}
            <section className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-xs space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F4F2EC] flex items-center justify-center text-[#064C3B] shrink-0 mt-0.5">
                  <AlertCircle className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] leading-tight">
                    3. Limitation of Liability &amp; Disclaimers
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Boundaries of professional liability and warranties
                  </p>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal space-y-3">
                <p>
                  You agree that Dr Jha Physiotherapy &amp; Acupuncture Center liability will only be limited to the professional services rendered by it.
                </p>
                <p>
                  Dr Jha Physiotherapy &amp; Acupuncture Center does not make any guarantee, representations, or endorsements, or implied or express warranties with respect to the services provided by any Doctor engaged by it. Clinical recovery timelines and functional outcomes depend on multiple physiological factors unique to each patient.
                </p>
              </div>
            </section>

            {/* 4. Online Video Consultation Protocols */}
            <section className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F4F2EC] flex items-center justify-center text-[#064C3B] shrink-0 mt-0.5">
                  <Video className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] leading-tight">
                    4. Online Video Consultation Terms
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Tele-health protocols, appointment confirmations, recordings, and digital prescriptions
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div className="p-4 rounded-2xl bg-white border border-stone-200/80 space-y-2">
                    <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#064C3B] block">
                      Secure Data Storage
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      The information provided by you while booking the appointment will be stored securely and will be accessible only by Dr Jha Physiotherapy &amp; Acupuncture Center.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-stone-200/80 space-y-2">
                    <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#064C3B] block">
                      Email &amp; SMS Confirmation
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Once the appointment is confirmed, you will receive an email notification on the provided email address and an SMS notification on the given mobile number containing the consultation URL to join the scheduled virtual room.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-stone-200/80 space-y-2">
                    <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#064C3B] block">
                      Recorded Sessions
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      The online consultation session will be recorded for security and clinical governance reasons, and will be stored in a secure and encrypted format.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-stone-200/80 space-y-2">
                    <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#064C3B] block">
                      Digital Prescription Dispatch
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      When the online consultation ends, you will be notified by email and SMS with the formal prescription and therapeutic recommendations issued by the doctor during the consultation.
                    </p>
                  </div>

                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#073D32] text-white flex items-start gap-3.5 mt-4">
                  <AlertCircle className="w-5 h-5 text-[#E5A500] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-[13px] text-stone-200 leading-relaxed">
                    <strong className="text-white font-semibold block mb-1">Absence of Physical Examination Notice:</strong>
                    Since the consultation is conducted online with the Doctor via video, there will be <strong>no physical examination or hands-on palpation</strong>. If your condition presents acute neurological deficits, trauma, or requires physical orthopedic testing, an in-person clinic visit will be advised immediately.
                  </div>
                </div>

              </div>
            </section>

            {/* 5. Consultation at Physical Clinic */}
            <section className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F4F2EC] flex items-center justify-center text-[#064C3B] shrink-0 mt-0.5">
                  <Building2 className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] leading-tight">
                    5. Consultation at Physical Clinic Locations
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Mira Road, Vasai, and Surat clinic appointment protocols
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                <p>
                  The information provided by you while booking your in-person appointment will be stored securely and will be accessible only by Dr Jha Physiotherapy &amp; Acupuncture Center administrative and clinical staff.
                </p>
                <p>
                  Once the in-person appointment is confirmed, you will receive an email notification on your registered email address and an SMS notification on your mobile number. The confirmation communication will contain the exact physical address, landmark, and navigation instructions for the designated clinic branch where you are scheduled to attend.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80">
                    <strong className="text-xs font-semibold text-stone-900 block">Mira Road (Flagship)</strong>
                    <span className="text-[11px] text-stone-500 block mt-0.5">Green Heritage, Shanti Park, Mira Road East, Thane 401107</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80">
                    <strong className="text-xs font-semibold text-stone-900 block">Vasai Centre</strong>
                    <span className="text-[11px] text-stone-500 block mt-0.5">2nd Floor, Sai Arcade, Near Railway Station West, Palghar 401202</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80">
                    <strong className="text-xs font-semibold text-stone-900 block">Surat Centre</strong>
                    <span className="text-[11px] text-stone-500 block mt-0.5">301, Titanium Square, Vesu Main Road, Surat, Gujarat 395007</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Patient Support & Contact */}
            <section className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F4F2EC] flex items-center justify-center text-[#064C3B] shrink-0 mt-0.5">
                  <HelpCircle className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] leading-tight">
                    6. Patient Support &amp; Queries
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Contact helpdesk for appointment modifications, directions, and questions
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
                <p>
                  If you have any questions regarding your appointment, clinical scheduling, online video room access, or these Terms &amp; Conditions, our support team is available to assist you:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="tel:+919146036559"
                    className="p-4 rounded-2xl bg-white border border-stone-200/80 hover:border-[#064C3B] flex items-center gap-3.5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F4F2EC] flex items-center justify-center text-[#064C3B] group-hover:bg-[#064C3B] group-hover:text-white transition-colors shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block">
                        Telephone Helpline
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-stone-900">
                        +91 91460 36559 / +91 74983 13922
                      </span>
                    </div>
                  </a>

                  <a
                    href="https://www.drjhaphysios.com/mapview/19-276808/72-863687"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white border border-stone-200/80 hover:border-[#064C3B] flex items-center justify-between transition-colors group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#F4F2EC] flex items-center justify-center text-[#064C3B] group-hover:bg-[#064C3B] group-hover:text-white transition-colors shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-stone-400 block">
                          Interactive Clinic Map
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-stone-900">
                          View Location Coordinates
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#064C3B] transition-colors" />
                  </a>
                </div>
              </div>
            </section>

          </div>

          {/* ═══════════ FOOTER CTA BOX ═══════════ */}
          <div className="mt-14 sm:mt-18 bg-[#073D32] text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 text-center space-y-4 shadow-xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Ready to Schedule Your Appointment?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto leading-relaxed">
              Book your personalized consultation online or visit your nearest Dr. Jha centre in Mira Road, Vasai, or Surat.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#053C2F] border border-white/20 transition-all shadow-md"
              >
                <span>Select Clinic Location</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919146036559"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-stone-200 bg-white/10 hover:bg-white/15 border border-white/10 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Clinic Desk</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </PageContainer>
  )
}
