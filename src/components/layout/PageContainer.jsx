import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from '../common/ScrollToTop'

export default function PageContainer({ children, className = '' }) {
  return (
    <div className={`min-h-screen bg-[#F8F6F0] text-[#26332F] selection:bg-[#064C3B] selection:text-white flex flex-col justify-between ${className}`}>
      <ScrollToTop />
      <header className="sticky top-0 z-50 bg-[#F8F6F0] w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3">
          <Navbar />
        </div>
      </header>
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  )
}
