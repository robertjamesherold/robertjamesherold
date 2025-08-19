
// pages/DynamicModernProjectPage/index.tsx
import { useParams, Navigate } from 'react-router-dom'
import { ModernProjectPage } from './components/ModernProjectPage'
import { getProjectBySlug } from './projectData.ts'

export function DynamicModernProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  
  if (!slug) {
    return <Navigate to="/404" replace />
  }

  const projectData = getProjectBySlug(slug)

  if (!projectData) {
    return <Navigate to="/404" replace />
  }

  return <ModernProjectPage projectData={projectData} />
}