// components/ProjectGalleryGrid/index.tsx
import { useState } from 'react'
import styles from './ProjectGalleryGrid.module.scss'

interface GalleryImage {
  id: number | string
  url: string
  caption?: string
  category?: string
}

interface ProjectGalleryGridProps {
  images: GalleryImage[]
}

export function ProjectGalleryGrid({ images }: ProjectGalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [filter, setFilter] = useState<string>('all')

  // Get unique categories
  const categories = ['all', ...new Set(images.map(img => img.category).filter(Boolean))]

  // Filter images
  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter)

  return (
    <>
      {/* Filter Tabs */}
      {categories.length > 1 && (
        <div className={styles.filterTabs}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterTab} ${filter === cat ? styles.active : ''}`}
              onClick={() => setFilter(cat || 'all')}
            >
              {cat || 'all'}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <div className={styles.galleryGrid}>
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className={`${styles.galleryItem} ${styles[`item-${(index % 5) + 1}`]}`}
            onClick={() => setSelectedImage(image)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={styles.imageWrapper}>
              <img src={image.url} alt={image.caption || `Gallery image ${image.id}`} />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M21 11L27 5M27 5L21 5M27 5V11M11 21L5 27M5 27L11 27M5 27V21" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {image.caption && <p>{image.caption}</p>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div className={styles.lightboxContent}>
            <img src={selectedImage.url} alt={selectedImage.caption || ''} />
            {selectedImage.caption && (
              <p className={styles.lightboxCaption}>{selectedImage.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
