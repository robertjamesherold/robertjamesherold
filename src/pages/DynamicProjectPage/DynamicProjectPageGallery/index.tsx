import { useState } from 'react'
import styles from './_ProjectPageGallery.module.scss'

export type GalleryImage = {
  id: string | number;
  url: string;
  caption?: string;
  category?: string;
};

export type ProjectPageGalleryProps = {
  images: GalleryImage[]
}

export function ProjectPageGallery({ images }: ProjectPageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  return (<div className='grid-xl2'>
          {images.map((image) => (

            <figure 
              key={image.id} 
              className={styles.imageItem}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.url} alt={image.caption || `Bild ${image.id}`} />
              {image.caption && (
                <figcaption className={styles.caption}>{image.caption}</figcaption>
              )}
            </figure>

          ))}
      {selectedImage && (
        <div 
          className={styles.lightbox}
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage.url} alt={selectedImage.caption || `Bild ${selectedImage.id}`} />
          {selectedImage.caption && (
            <p className={styles.lightboxCaption}>{selectedImage.caption}</p>
          )}
        </div>
      )}
    </div>

  )
}

export default ProjectPageGallery