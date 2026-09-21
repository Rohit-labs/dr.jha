import React, { useState } from 'react'
import { Link2, Check } from 'lucide-react'

export default function CopyDirectLink({ sectionId, title, targetPath }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e) => {
    e.stopPropagation()
    const path = targetPath || window.location.pathname
    const url = `${window.location.origin}${path}#${sectionId}`
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2200)
      })
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = url
      document.body.appendChild(textarea)
      textarea.select()
      try {
        document.execCommand('copy')
        setCopied(true)
        setTimeout(() => setCopied(false), 2200)
      } catch (err) {
        console.error('Failed to copy link', err)
      }
      document.body.removeChild(textarea)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={`Copy direct link to ${title}`}
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-all border ${
        copied
          ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
          : 'bg-white/90 text-stone-600 border-stone-200 hover:text-[#064C3B] hover:border-[#064C3B]/40 hover:bg-[#FAF7F2]'
      }`}
    >
      {copied ? (
        <>
          <Check className="w-3 h-3 text-white" />
          <span>Direct Link Copied!</span>
        </>
      ) : (
        <>
          <Link2 className="w-3 h-3 text-[#064C3B]" />
          <span>Copy Direct Link</span>
        </>
      )}
    </button>
  )
}
