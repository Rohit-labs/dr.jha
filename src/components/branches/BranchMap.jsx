import React from 'react'
import { ExternalLink } from 'lucide-react'

export default function BranchMap({ mapUrl, whatsapp }) {
  return (
    <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-3">
      {mapUrl && (
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-stone-300 hover:border-stone-800 text-stone-800 text-xs font-semibold transition-colors"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      )}

      {whatsapp && (
        <a
          href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 text-xs font-semibold transition-colors border border-[#25D366]/30"
        >
          <span>WhatsApp Enquiry</span>
        </a>
      )}
    </div>
  )
}
