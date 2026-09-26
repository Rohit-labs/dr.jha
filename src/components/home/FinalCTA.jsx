import React from 'react'
import { ArrowRight, ShieldCheck, Clock, MapPin, Phone, MessageCircle, Award, CheckCircle2, Star, CalendarDays } from 'lucide-react'

export default function FinalCTA({ branch }) {
  const activePhone = branch?.phone ? branch.phone.replace(/[^0-9+]/g, '') : '+919146036559'
  const activeWhatsapp = branch?.whatsapp ? branch.whatsapp.replace(/[^0-9]/g, '') : '919146036559'

  const promiseItems = [
    {
      icon: <Clock className="w-4 h-4 text-[#064C3B]" />,
      title: '45-Min Detailed Assessment',
      desc: 'Full biomechanical, postural & pain root-cause evaluation at your first visit.'
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#064C3B]" />,
      title: 'Evidence-Based Protocols',
      desc: 'Physiotherapy, manual mobilization & medical acupuncture tailored to your recovery.'
    },
    {
      icon: <Award className="w-4 h-4 text-[#064C3B]" />,
      title: 'Senior Clinician Led Care',
      desc: 'Every session supervised by a qualified, registered specialist — no junior hand-offs.'
    },
  ]

  const branchHelplines = [
    { name: 'Mira Road', phone: '+91 91460 36559', tel: '+919146036559' },
    { name: 'Vasai',     phone: '+91 87679 33950', tel: '+918767933950' },
    { name: 'Surat',     phone: '+91 97245 94793', tel: '+919724594793' },
  ]

  const whatToExpect = [
    'A thorough clinical history & movement assessment',
    'Clear diagnosis explained in plain language',
    'A personalised treatment plan from session one',
    'No unnecessary tests or referrals',
  ]

  const openingHours = branch?.timingDetails || [
    { days: 'Monday – Saturday', hours: '8:00 AM – 9:00 PM' },
    { days: 'Sunday',            hours: '9:00 AM – 1:00 PM' },
  ]

  return (
    <section
      id="book"
      aria-labelledby="final-cta-heading"
      className="w-full bg-[#F8F6F0] py-16 sm:py-20 lg:py-24 font-sans antialiased text-[#26332F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative bg-[#FCFBF7] border border-[#DCDDD5] rounded-[36px] sm:rounded-[44px] overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.04)]">

          {/* Thin green top-border accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#064C3B] rounded-t-[44px]" />

          {/* ── Two-column grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px]">

            {/* ════ LEFT ════ */}
            <div className="p-8 sm:p-12 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#DCDDD5] flex flex-col justify-center gap-10">

              {/* Headline block */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-6 h-[1.5px] bg-[#E5A500]" />
                  <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#E5A500]">
                    TAKE THE NEXT STEP
                  </span>
                </div>

                <h2
                  id="final-cta-heading"
                  className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#26332F] leading-[1.12] mb-5"
                >
                  Ready to take <br />
                  <span className="italic font-normal text-[#064C3B]">the next step?</span>
                </h2>

                <p className="text-sm sm:text-base text-stone-500 leading-relaxed font-normal max-w-lg">
                  {branch
                    ? `Whether you're recovering from an injury, managing chronic pain, or seeking preventative care — our ${branch.name} team is ready to help.`
                    : "Whether you're recovering from an injury, managing chronic pain, or seeking preventative rehabilitation — our senior clinicians are ready to guide your journey."}
                </p>
              </div>

              {/* What to expect checklist */}
              <div>
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#064C3B] mb-4">
                  What to Expect at Your First Visit
                </p>
                <ul className="space-y-2.5">
                  {whatToExpect.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#064C3B] shrink-0 mt-0.5" />
                      <span className="text-sm text-stone-600 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Opening hours */}
              <div className="bg-[#F4F2EC] rounded-2xl px-5 py-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <CalendarDays className="w-4 h-4 text-[#064C3B]" />
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#064C3B]">
                    Clinic Hours
                  </span>
                </div>
                {openingHours.map((slot, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <span className="text-stone-500 font-medium">{slot.days}</span>
                    <span className="font-semibold text-[#26332F]">{slot.hours}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href={`tel:${activePhone}`}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#064C3B] hover:bg-[#073D32] shadow-md shadow-[#064C3B]/15 transition-all active:scale-[0.98] group"
                >
                  <Phone className="w-4 h-4" />
                  <span>{branch?.secondaryPhone ? 'Call Dr. Pranab' : 'Call for Appointment'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {branch?.secondaryPhone && (
                  <a
                    href={`tel:${branch.secondaryPhone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#064C3B] bg-white border border-[#064C3B]/30 hover:border-[#064C3B] hover:bg-[#F0F7F4] transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Hr. Anupam</span>
                  </a>
                )}

                <a
                  href={`https://wa.me/${activeWhatsapp}?text=Hello%20Dr.%20Jha%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#26332F] bg-white border border-[#DCDDD5] hover:border-stone-400 hover:bg-stone-50 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

            </div>

            {/* ════ RIGHT: Promise + Review + Branch Lines ════ */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col gap-8 bg-[#F4F2EC]/60">

              {/* Clinical Promise */}
              <div>
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#064C3B] mb-5">
                  Our Clinical Promise
                </p>
                <div className="space-y-5">
                  {promiseItems.map((item, idx) => (
                    <div key={idx} className="flex gap-3.5">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#DCDDD5] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#26332F] mb-0.5">{item.title}</p>
                        <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#DCDDD5]" />

              {/* Patient quote */}
              <div className="bg-white border border-[#DCDDD5] rounded-2xl px-5 py-4">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#E5A500] text-[#E5A500]" />
                  ))}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed italic mb-3">
                  "After 7 years of chronic back pain and multiple consultations, Dr. Jha's combination of acupuncture and physiotherapy gave me lasting relief within weeks."
                </p>
                <p className="text-[11px] font-semibold text-[#26332F]">Ramesh Raina</p>
                <p className="text-[10px] text-stone-400">Mira Road East · Verified Google Review</p>
              </div>

              <div className="border-t border-[#DCDDD5]" />

              {/* Direct Branch Lines */}
              <div>
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#064C3B] mb-4">
                  Direct Branch Lines
                </p>
                <div className="space-y-2.5">
                  {branchHelplines.map((bl, idx) => (
                    <a
                      key={idx}
                      href={`tel:${bl.tel}`}
                      className="flex items-center justify-between px-4 py-3 rounded-2xl bg-white border border-[#DCDDD5] hover:border-[#064C3B]/40 hover:shadow-sm transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-[#F4F2EC] flex items-center justify-center shrink-0">
                          <MapPin className="w-3.5 h-3.5 text-[#064C3B]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#26332F]">{bl.name}</p>
                          <p className="text-[11px] text-stone-500">{bl.phone}</p>
                        </div>
                      </div>
                      <Phone className="w-3.5 h-3.5 text-stone-300 group-hover:text-[#064C3B] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
