
// components/ProjectContent/index.tsx
import { useEffect, useRef, useState } from 'react'
import styles from './ProjectContent.module.scss'

interface ProjectContentProps {
  content: string
  imageMap?: Record<string, string>
}

export function ProjectContent({ content, imageMap = {} }: ProjectContentProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [processedContent, setProcessedContent] = useState<string>('')

  useEffect(() => {
    // Process content to handle special formatting
    let processed = content

    // Convert line breaks to paragraphs
    const paragraphs = processed.split('\n\n').filter(p => p.trim())
    
    // Process each paragraph
    const formattedParagraphs = paragraphs.map(paragraph => {
      // Check for lists
      if (paragraph.includes('•') || paragraph.includes('-')) {
        const items = paragraph.split(/[•\-]/).filter(item => item.trim())
        return `<ul class="${styles.contentList}">${items.map(item => 
          `<li>${item.trim()}</li>`
        ).join('')}</ul>`
      }
      
      // Check for headings (lines starting with #)
      if (paragraph.startsWith('#')) {
        const level = paragraph.match(/^#+/)?.[0].length || 1
        const text = paragraph.replace(/^#+\s*/, '')
        return `<h${level + 2} class="${styles[`heading${level}`]}">${text}</h${level + 2}>`
      }
      
      // Check for quotes (lines starting with >)
      if (paragraph.startsWith('>')) {
        const quote = paragraph.replace(/^>\s*/, '')
        return `<blockquote class="${styles.quote}">${quote}</blockquote>`
      }
      
      // Check for images [image:key]
      const imageRegex = /\[image:([^\]]+)\]/g
      paragraph = paragraph.replace(imageRegex, (match, key) => {
        const imageUrl = imageMap[key] || key
        return `<figure class="${styles.contentImage}">
          <img src="${imageUrl}" alt="${key}" />
        </figure>`
      })
      
      // Regular paragraph
      return `<p>${paragraph}</p>`
    })

    setProcessedContent(formattedParagraphs.join(''))
  }, [content, imageMap])

  // Animate content on mount
  useEffect(() => {
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll('p, ul, blockquote, figure, h3, h4, h5')
      elements.forEach((el, index) => {
        ;(el as HTMLElement).style.animationDelay = `${index * 0.1}s`
        el.classList.add(styles.animated)
      })
    }
  }, [processedContent])

  return (
    <div 
      ref={contentRef}
      className={styles.projectContent}
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  )
}