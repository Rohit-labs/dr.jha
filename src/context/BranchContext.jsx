import React, { createContext, useContext, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { branches, getBranchBySlug } from '../data/branches'

const BranchContext = createContext(null)

const STORAGE_KEY = 'drjha_selected_branch'

// Valid branch slugs
const VALID_BRANCH_SLUGS = ['mira-road', 'vasai', 'surat']

export function BranchProvider({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  // Detect branch from current path if on a location page
  const getBranchSlugFromPath = (pathname) => {
    const cleanPath = pathname.replace(/^\//, '').toLowerCase()
    if (cleanPath === '' || cleanPath === 'mira-road') return 'mira-road'
    return VALID_BRANCH_SLUGS.includes(cleanPath) ? cleanPath : null
  }

  const [selectedBranchSlug, setSelectedBranchSlug] = useState(() => {
    // 1. First priority: Check current route
    if (typeof window !== 'undefined') {
      const pathSlug = getBranchSlugFromPath(window.location.pathname)
      if (pathSlug) return pathSlug
      
      // 2. Second priority: Stored preference
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored && VALID_BRANCH_SLUGS.includes(stored)) {
        return stored
      }
    }
    // Default to Mira Road Flagship Centre as landing page
    return 'mira-road'
  })

  // Synchronize branch with route when navigating to /mira-road, /vasai, /surat
  useEffect(() => {
    const pathSlug = getBranchSlugFromPath(location.pathname)
    if (pathSlug && pathSlug !== selectedBranchSlug) {
      setSelectedBranchSlug(pathSlug)
      try {
        localStorage.setItem(STORAGE_KEY, pathSlug)
      } catch (e) {
        // Ignore localStorage errors
      }
    }
  }, [location.pathname])

  // Switch location handler
  const switchBranch = (slug) => {
    if (!VALID_BRANCH_SLUGS.includes(slug)) return
    setSelectedBranchSlug(slug)
    try {
      localStorage.setItem(STORAGE_KEY, slug)
    } catch (e) {
      // Ignore localStorage errors
    }
    navigate(`/${slug}`)
  }

  const currentBranch = selectedBranchSlug ? getBranchBySlug(selectedBranchSlug) : null

  return (
    <BranchContext.Provider
      value={{
        branches,
        currentBranch,
        selectedBranchSlug,
        setSelectedBranchSlug: (slug) => {
          if (VALID_BRANCH_SLUGS.includes(slug)) {
            setSelectedBranchSlug(slug)
            try {
              localStorage.setItem(STORAGE_KEY, slug)
            } catch (e) {}
          }
        },
        switchBranch,
      }}
    >
      {children}
    </BranchContext.Provider>
  )
}

export function useBranchContext() {
  const context = useContext(BranchContext)
  if (!context) {
    throw new Error('useBranchContext must be used within a BranchProvider')
  }
  return context
}
