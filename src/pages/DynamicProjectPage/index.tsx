import { useParams, Navigate } from 'react-router-dom'
import { DynamicUniversalProjectPage } from './DynamicProjectPageUniversal'
import { getProjectStudyBySlug } from './DynamicProjectPageData'

export function DynamicProjectPage() {
  const { slug } = useParams<{ slug: string }>()  // <--- Typisieren!

  if (!slug) {
    return <Navigate to="/404" replace />
  }

  const projectStudyData = getProjectStudyBySlug(slug)

  if (!projectStudyData) {
    return <Navigate to="/404" replace />
  }

  return (
    <DynamicUniversalProjectPage projectPageData={projectStudyData} />
  )
}