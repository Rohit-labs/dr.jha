import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Branches from '../pages/Branches'
import BranchDetail from '../pages/BranchDetail'
import Conditions from '../pages/Conditions'
import ConditionDetail from '../pages/ConditionDetail'
import Treatments from '../pages/Treatments'
import TreatmentDetail from '../pages/TreatmentDetail'
import Resources from '../pages/Resources'
import ResourceDetail from '../pages/ResourceDetail'
import CaseStudies from '../pages/CaseStudies'
import CaseStudyDetail from '../pages/CaseStudyDetail'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      {/* 1. Homepage */}
      <Route path="/" element={<Home />} />

      {/* 2. About Us */}
      <Route path="/about" element={<About />} />

      {/* 3. Physical Branches */}
      <Route path="/branches" element={<Branches />} />
      <Route path="/branches/:slug" element={<BranchDetail />} />

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

      {/* 8. Fallback 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
