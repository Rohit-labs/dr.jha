import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/common/ScrollToTop'
import { BranchProvider } from './context/BranchContext'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <BrowserRouter>
      <BranchProvider>
        <ScrollToTop />
        <AppRoutes />
      </BranchProvider>
    </BrowserRouter>
  )
}

