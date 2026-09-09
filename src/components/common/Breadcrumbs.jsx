import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center text-xs text-stone-500 font-medium overflow-x-auto whitespace-nowrap">
      <Link to="/" className="inline-flex items-center gap-1 hover:text-[#123F32] transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-stone-400 shrink-0" />
            {isLast || !item.href ? (
              <span className="text-stone-800 font-semibold truncate max-w-[240px]">
                {item.label}
              </span>
            ) : (
              <Link to={item.href} className="hover:text-[#123F32] transition-colors truncate">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}
