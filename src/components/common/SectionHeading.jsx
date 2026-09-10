import React from 'react'

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  centered = false,
  eyebrowColor = 'text-[#064C3B]',
  highlightColor = 'text-[#064C3B]',
  className = ''
}) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <span className={`text-xs font-bold tracking-[0.2em] uppercase block mb-3 ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      {(title || highlight) && (
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26332F] leading-tight mb-4">
          {title}{' '}
          {highlight && (
            <span className={`italic font-normal ${highlightColor}`}>
              {highlight}
            </span>
          )}
        </h2>
      )}
      {description && (
        <p className="text-sm sm:text-base text-[#6F7773] leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  )
}
