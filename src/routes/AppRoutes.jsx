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
import Terms from '../pages/Terms'
import FAQs from '../pages/FAQs'
import NeurologicalConditions from '../pages/NeurologicalConditions'
import OrthopaedicConditions from '../pages/OrthopaedicConditions'
import SystemicConditions from '../pages/SystemicConditions'
import SpecializedConditions from '../pages/SpecializedConditions'
import NotFound from '../pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      {/* 1. Root Landing Page (Mira Road Flagship Centre) */}
      <Route path="/" element={<BranchHome branchSlug="mira-road" />} />

      {/* 2. Reusable Location Homepages */}
      <Route path="/mira-road" element={<BranchHome branchSlug="mira-road" />} />
      <Route path="/vasai" element={<BranchHome branchSlug="vasai" />} />
      <Route path="/surat" element={<BranchHome branchSlug="surat" />} />

      {/* 3. All Locations Directory / Selector Page */}
      <Route path="/locations" element={<LocationSelector />} />
      <Route path="/branches" element={<LocationSelector />} />

      {/* 3. About Us / Full Clinical Team */}
      <Route path="/about" element={<About />} />

      {/* 4. Conditions We Treat */}
      <Route path="/conditions" element={<Conditions />} />
      <Route path="/neurological-conditions" element={<NeurologicalConditions />} />
      <Route path="/conditions/neurological-conditions" element={<NeurologicalConditions />} />
      <Route path="/orthopaedic-conditions" element={<OrthopaedicConditions />} />
      <Route path="/orthopaedic-musculoskeletal-conditions" element={<OrthopaedicConditions />} />
      <Route path="/conditions/orthopaedic-conditions" element={<OrthopaedicConditions />} />
      <Route path="/systemic-conditions" element={<SystemicConditions />} />
      <Route path="/systemic-health-conditions" element={<SystemicConditions />} />
      <Route path="/conditions/systemic-conditions" element={<SystemicConditions />} />
      <Route path="/specialized-conditions" element={<SpecializedConditions />} />
      <Route path="/wellness-conditions" element={<SpecializedConditions />} />
      <Route path="/conditions/specialized-conditions" element={<SpecializedConditions />} />
      <Route path="/conditions/:slug" element={<ConditionDetail />} />

      {/* 5. Treatments & Modalities */}
      <Route path="/treatments" element={<Treatments />} />
      <Route path="/treatments/:slug" element={<TreatmentDetail />} />

      {/* 6. Patient Knowledge Centre (Blogs & Resources) */}
      <Route path="/blogs" element={<Resources />} />
      <Route path="/blogs/:slug" element={<ResourceDetail />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/:slug" element={<ResourceDetail />} />

      {/* 7. Real Recovery Journeys (Case Studies) */}
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

      {/* 8. Events & Workshops Foundation */}
      <Route path="/events" element={<Events />} />

      {/* 9. Patient Terms & Conditions */}
      <Route path="/terms" element={<Terms />} />
      <Route path="/terms-and-conditions" element={<Terms />} />

      {/* 10. Frequently Asked Questions (FAQs) */}
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/faq" element={<FAQs />} />

      {/* 11. Fallback 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
