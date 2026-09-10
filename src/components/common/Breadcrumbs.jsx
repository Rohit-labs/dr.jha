import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center text-xs text-[#6F7773] font-medium overflow-x-auto whitespace-nowrap">
      <Link to="/" className="inline-flex items-center gap-1 hover:text-[#064C3B] transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-[#DCDDD5] shrink-0" />
            {isLast || !item.href ? (
              <span className="text-[#26332F] font-semibold truncate max-w-[240px]">
                {item.label}
              </span>
            ) : (
              <Link to={item.href} className="hover:text-[#064C3B] transition-colors truncate">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}
