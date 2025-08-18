import { useParams, Navigate } from 'react-router-dom'
import { UniversalCaseStudy } from './DynamicCaseStudyPageUniversal'
import { getCaseStudyBySlug } from './DynamicCaseStudyPageData'

export function DynamicCaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  
  // Early return wenn slug undefined ist
  if (!slug) {
    return <Navigate to="/404" replace />
  }

  // Jetzt ist slug garantiert ein string
  const caseStudyData = getCaseStudyBySlug(slug)

  if (!caseStudyData) {
    return <Navigate to="/404" replace />
  }

  // Prop-Name muss kleingeschrieben sein: caseStudyData
  return <UniversalCaseStudy caseStudyData={caseStudyData} />
}