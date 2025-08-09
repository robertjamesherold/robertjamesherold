import React, { useState, useEffect } from 'react'
import { Container } from '../../../layout/Container'
import { CaseStudyNav } from '../DynamicCaseStudyPageNav'
import { CaseStudyContent } from '../DynamicCaseStudyPageContent'
import { CaseStudyMeta } from '../DynamicCaseStudyPageMeta'
import { CaseStudySidebar } from '../DynamicCaseStudyPageSidebar'

export type CaseStudy = {
  id: string
  slug: string
  title: string
  subtitle?: string
  client?: string
  date?: string
  duration?: string
  category?: string
  tags?: string[]
  sections: any[]
  imageMap?: Record<string, any>
  thumbnail?: string
  excerpt?: string
}

export type UniversalCaseStudyProps = {
  caseStudyData: CaseStudy
  relatedStudies?: CaseStudy[]
}

export function UniversalCaseStudy({ 
  caseStudyData,
  relatedStudies
}: UniversalCaseStudyProps) {
  const [activeSection, setActiveSection] = useState<string>('')
  
  // Erste Section als Standard setzen
  useEffect(() => {
    if (caseStudyData?.sections?.length > 0 && !activeSection) {
      setActiveSection(caseStudyData.sections[0].id)
    }
  }, [caseStudyData, activeSection])
  
  // Scroll to top when case study changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [caseStudyData.id])
  
  const {
    title,
    subtitle,
    client,
    date,
    duration,
    category,
    tags,
    sections,
    imageMap = {}
  } = caseStudyData

  return (
    <main>
      {/* Header mit Cover Image */}
      <Container span={{ default: 12 }}>
        <h1 className='colored textcenter'>{title}</h1>
        {subtitle && <p className='textcenter subtitle'>{subtitle}</p>}
      </Container>
      
      <Container span={{ default: 12, xl: 5 }}>
        {/* Sidebar mit Meta-Infos und Navigation */}
        <CaseStudySidebar>
         
          
          <CaseStudyNav 
            sections={sections}
            activeSection={activeSection}
            onSectionClick={setActiveSection}
          />

           <CaseStudyMeta 
            client={client}
            date={date}
            duration={duration}
            category={category}
            tags={tags}
          />
        </CaseStudySidebar>
        
      </Container>
      
      <Container span={{ default: 12, xl: 7 }}>
        {/* Main Content */}
        <CaseStudyContent 
          sections={sections}
          activeSection={activeSection}
          onSectionVisible={setActiveSection}
          imageMap={imageMap}
        />
      </Container>
      
     
    </main>
  )
}