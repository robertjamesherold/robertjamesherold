import { useState, useEffect } from 'react'
import { Header } from '../../../layout/Header'
import { Container } from '../../../layout/Container'
import { CaseStudyPageNav, Pagination } from '../DynamicCaseStudyPageNav'
import { CaseStudyContent } from '../DynamicCaseStudyPageContent'
import { CaseStudyMeta } from '../DynamicCaseStudyPageMeta'
import { CaseStudySidebar } from '../DynamicCaseStudyPageSidebar'
import { Grid, Section, type ColumnProps } from '../../../layout/GridLayout'
export type SubSubSection = {
  sub?: string
  text?: string
}

export type SubSection = {
  id?: string | number
  name?: string
  subtitle?: string
  sub?: string
  text?: string
  image?: string
  subsubsections?: SubSubSection[]
}
// Section Type definieren
export type CaseStudySection = {
  id: string 
  title?: string
  name?: string
  content?: string
  subsections?: SubSection[]
}


export type CaseStudy = {
  id: string | number
  slug?: string  
  title?: string
  subtitle?: string
  client?: string
  date?: string
  duration?: string
  category?: string
  tags?: string[]
  sections: CaseStudySection[] // Array von Sections
  imageMap?: Record<string, string>
  thumbnail?: string
  excerpt?: string
}

export type UniversalCaseStudyProps = {
  caseStudyData: CaseStudy
}

export type CaseStudyNavProps = {
  sections: CaseStudySection[];
  activeSection: string | number ;
  onSectionClick: (sectionId: string) => void;
  span?: number | ColumnProps
}

export function UniversalCaseStudy({ 
  caseStudyData
}: UniversalCaseStudyProps) {
  const [activeSection, setActiveSection] = useState<string | number>('')
  
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
      <Header title={title} text={subtitle}/>
      <Section id='content' isPaddingTop={false}> 
   
        {/* Sidebar mit Meta-Infos und Navigation */}
         <Grid grid={{default:12}} gapRow='large' fullH={false}>
          <CaseStudySidebar grid={{default:1, md: 2, xl: 1}} span={{default: 12, xl: 4}}>

          <CaseStudyPageNav 
            span={{default: 1}}
            sections={sections}
            activeSection={activeSection}
            onSectionClick={setActiveSection}
          />

          <CaseStudyMeta 
          span={{default: 1}}
            client={client}
            date={date}
            duration={duration}
            category={category}
            tags={tags}
          />
        </CaseStudySidebar>
    
      <Container span={{ default: 12, xl: 8 }}>
        {/* Main Content */}
        <CaseStudyContent 
          sections={sections}
          activeSection={activeSection}
          onSectionVisible={setActiveSection}
          imageMap={imageMap}
        />
      </Container>

      <Container>
        <Pagination 
          sections={sections}
          activeSection={activeSection}
          onSectionClick={setActiveSection}
        />
      
      </Container>
        </Grid>       

       </Section>
    </main>
  )
}