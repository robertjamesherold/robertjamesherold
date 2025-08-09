import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { PageTransition } from './utils/PageTransition'
import { Navigation } from './layout/Navigation'
import { Footer } from './layout/Footer'
import { HomePage } from './pages/HomePage'
import { StoryPage } from './pages/StoryPage'
import { SkillPage } from './pages/SkillPage'
import { CVPage } from './pages/CVPage'
import { ProjectPage } from './pages/ProjectPage'
import { CasePage } from './pages/CasePage'
import { ContactPage } from './pages/ContactPage'
import { SuccessPage } from './pages/SuccessPage'
import { DynamicCaseStudyPage } from './pages/DynamicCaseStudyPage'
import { DynamicProjectPage } from './pages/DynamicProjectPage'
import { NotFoundPage } from './pages/404Page'
import { PrivacyPage } from './pages/PrivacyPage'
import { ImprintPage } from './pages/ImprintPage'
import { Navigate } from 'react-router-dom'


import './App.scss'

function AnimatedRoutes() {
  const location = useLocation()
  


  return (
    <>
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
          <Route path='/story' element={<StoryPage />} />
          <Route path='/skills' element={<SkillPage />} />
          <Route path='/lebenslauf' element={<CVPage />} />
          <Route path='/projekte' element={<ProjectPage />} />
          <Route path='/projekte/:slug' element={<DynamicProjectPage />} />
          <Route path='/fallstudien' element={<CasePage />} />
          <Route path="/fallstudien/:slug" element={<DynamicCaseStudyPage />} />         
          <Route path='/kontakt' element={<ContactPage />} />
          <Route path='/danke' element={<SuccessPage />} />
          <Route path="/datenschutz" element={<PrivacyPage />} />
          <Route path="/impressum" element={<ImprintPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <Footer />
      </PageTransition>
    </>
  )
}

export default function App() {
  return (
    <Router>
      <Navigation />
      <AnimatedRoutes />
    </Router>
  )
}