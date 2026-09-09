import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer active:scale-[0.98]'
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-xs sm:text-sm gap-2',
    lg: 'px-6 py-3 text-sm sm:text-base gap-2.5'
  }[size] || 'px-5 py-2.5 text-xs sm:text-sm gap-2'

  const variantClasses = {
    primary: 'bg-[#B64D2E] hover:bg-[#A34226] text-white shadow-sm hover:shadow',
    secondary: 'border border-stone-300 hover:border-stone-800 text-stone-800 bg-white hover:bg-stone-50',
    dark: 'bg-[#123F32] hover:bg-[#0E3228] text-white shadow-sm hover:shadow',
    ghost: 'text-stone-700 hover:text-stone-950 hover:bg-stone-100/70'
  }[variant] || 'bg-[#B64D2E] hover:bg-[#A34226] text-white shadow-sm hover:shadow'

  const fullClassName = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={fullClassName} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={fullClassName} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={fullClassName} {...props}>
      {content}
    </button>
  )
}
