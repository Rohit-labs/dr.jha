import React, { useEffect, useState } from 'react'
import { Facebook, Instagram, X, Youtube } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { useBranchContext } from '../../context/BranchContext'

const HOME_ROUTES = ['/', '/mira-road', '/vasai', '/surat']

export default function FollowPrompt() {
  const location = useLocation()
  const { currentBranch } = useBranchContext()
  const [isOpen, setIsOpen] = useState(false)
  const branchKey = currentBranch?.slug || 'mira-road'
  const storageKey = `drjha_follow_prompt_seen_${branchKey}`
  const isHomeRoute = HOME_ROUTES.includes(location.pathname)

  useEffect(() => {
    if (!isHomeRoute) {
      setIsOpen(false)
      return
    }

    try {
      if (!localStorage.getItem(storageKey)) {
        setIsOpen(true)
      }
    } catch (error) {
      setIsOpen(true)
    }
  }, [isHomeRoute, storageKey])

  const closePrompt = () => {
    setIsOpen(false)
    try {
      localStorage.setItem(storageKey, 'true')
    } catch (error) {
      // Continue without persistence when storage is unavailable.
    }
  }

  if (!isOpen || !isHomeRoute) return null

  const socialLinks = [
    { label: 'YouTube', href: currentBranch?.socials?.youtube, icon: Youtube },
    { label: 'Facebook', href: currentBranch?.socials?.facebook, icon: Facebook },
    { label: 'Instagram', href: currentBranch?.socials?.instagram, icon: Instagram }
  ].filter((social) => social.href)

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/25 p-4 backdrop-blur-[2px]"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closePrompt()
      }}
      onTouchStart={(event) => {
        if (event.target === event.currentTarget) closePrompt()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="follow-prompt-title"
        className="relative w-full max-w-md rounded-3xl border border-white/30 bg-[#FCFBF7]/95 p-7 text-center shadow-2xl backdrop-blur-md sm:p-9"
      >
        <button
          type="button"
          onClick={closePrompt}
          aria-label="Close follow prompt"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-stone-500 transition-colors hover:bg-stone-200/70 hover:text-stone-900"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#064C3B]">
          Stay Connected
        </p>
        <h2 id="follow-prompt-title" className="font-serif text-2xl font-bold leading-tight text-[#26332F] sm:text-3xl">
          Help us grow by leaving us a follow
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          Follow Dr. Jha for clinical guidance, recovery updates, and helpful wellness content.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${label}`}
              onClick={closePrompt}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#064C3B] text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-[#073D32]"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
