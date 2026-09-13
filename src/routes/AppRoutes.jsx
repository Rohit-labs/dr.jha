import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LocationSelector from '../pages/LocationSelector'
import BranchHome from '../pages/BranchHome'
import About from '../pages/About'
import Conditions from '../pages/Conditions'
import ConditionDetail from '../pages/ConditionDetail'
import Treatments from '../pages/Treatments'
import TreatmentDetail from '../pages/TreatmentDetail'
import Resources from '../pages/Resources'
import ResourceDetail from '../pages/ResourceDetail'
import CaseStudies from '../pages/CaseStudies'
import CaseStudyDetail from '../pages/CaseStudyDetail'
import Events from '../pages/Events'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      {/* 1. Root Location Selection */}
      <Route path="/" element={<LocationSelector />} />

      {/* 2. Reusable Location Homepages */}
      <Route path="/mira-road" element={<BranchHome branchSlug="mira-road" />} />
      <Route path="/vasai" element={<BranchHome branchSlug="vasai" />} />
      <Route path="/surat" element={<BranchHome branchSlug="surat" />} />

      {/* 3. About Us / Full Clinical Team */}
      <Route path="/about" element={<About />} />

      {/* 4. Conditions We Treat */}
      <Route path="/conditions" element={<Conditions />} />
      <Route path="/conditions/:slug" element={<ConditionDetail />} />

      {/* 5. Treatments & Modalities */}
      <Route path="/treatments" element={<Treatments />} />
      <Route path="/treatments/:slug" element={<TreatmentDetail />} />

      {/* 6. Patient Knowledge Centre (Resources) */}
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/:slug" element={<ResourceDetail />} />

      {/* 7. Real Recovery Journeys (Case Studies) */}
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

      {/* 8. Events & Workshops Foundation */}
      <Route path="/events" element={<Events />} />

      {/* 9. Fallback 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
