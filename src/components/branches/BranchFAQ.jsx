import React, { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'

export default function BranchFAQ({ faqs = [], branchName = '' }) {
  const [openIndex, setOpenIndex] = useState(0)

  if (!faqs || faqs.length === 0) return null

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="bg-[#FCFBF7] border border-[#DCDDD5] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 shadow-xs">
      <div className="mb-6 pb-4 border-b border-stone-100 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#064C3B] block mb-1">
            Visiting Guide
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#26332F] flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#064C3B]" />
            <span>Frequently Asked Questions ({branchName})</span>
          </h2>
        </div>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                isOpen ? 'border-[#064C3B]/30 bg-[#F4F2EC]' : 'border-stone-200/80 bg-white hover:border-stone-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#064C3B]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal border-t border-stone-200/50 mt-1">
                  {faq.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
