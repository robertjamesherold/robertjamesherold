import React from 'react'
import styles from './DynamicProjectPageVideo.module.scss'

export type VideoItem = {
  id: number | string
  url: string
  title?: string
  caption?: string
  poster?: string
  type?: 'mp4' | 'webm' | 'youtube' | 'vimeo'
}

export type VideoWrapperProps = {
  videos: VideoItem[]
}

export const VideoWrapper: React.FC<VideoWrapperProps> = ({ videos }) => {
  if (!videos || videos.length === 0) return null

  const renderVideo = (video: VideoItem) => {
    if (video.type === 'youtube') {
      const videoId = video.url.includes('youtu.be/')
         ? video.url.split('youtu.be/')[1]
        : video.url.split('v=')[1]?.split('&')[0]
           
      return (
        <div className={styles.videoEmbed}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
            title={video.title || `Video ${video.id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
      )
    }

    if (video.type === 'vimeo') {
      const videoId = video.url.split('/').pop()
      return (
        <div className={styles.videoEmbed}>
          <iframe
            src={`https://player.vimeo.com/video/${videoId}`}
            frameBorder="0"
            allowFullScreen
            title={video.title || `Video ${video.id}`}
            allow="autoplay; fullscreen; picture-in-picture"
          />
        </div>
      )
    }

    // HTML5 Video mit Interaction-Fixes
    return (
      <video
        controls
        poster={video.poster}
        className={styles.videoPlayer}
        preload="metadata"
        playsInline
        // KRITISCHE ATTRIBUTE FÜR INTERAKTIVITÄT:
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          position: 'relative',
          zIndex: 1,
          pointerEvents: 'auto',
          background: '#000'
        }}
        // Event Handlers für Debugging:
        onMouseEnter={() => console.log('Video mouse enter')}
        onMouseLeave={() => console.log('Video mouse leave')}
        onClick={() => console.log('Video clicked')}
        onPlay={() => console.log('Video started playing')}
        onPause={() => console.log('Video paused')}
        onError={(e) => console.error('Video error:', e)}
      >
        <source 
          src={video.url} 
          type={`video/${video.type || 'mp4'}`} 
        />
        <p style={{ 
          color: 'white', 
          padding: '2rem', 
          textAlign: 'center',
          background: '#333'
        }}>
          Ihr Browser unterstützt das Video-Element nicht.
          <br />
          <button 
            onClick={() => window.open(video.url, '_blank')}
            style={{ 
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              background: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Video in neuem Tab öffnen
          </button>
        </p>
      </video>
    )
  }

  return (
 <section className={`${styles.videoSection} {isActive ? ${styles.active} : ''}`}
      style={{ 
        position: 'relative',
        zIndex: 0 // Niedriger z-index für Container
      }}
    >
  
      <div className={styles.videosGrid}>
        {videos.map((video) => (
          <div 
            key={video.id} 
            className={styles.videoItem}
          
            onClick={() => console.log('Video container clicked:', video.id)}
          >
            
            {/* Video mit extra Wrapper für bessere Kontrolle */}
            <div 
              style={{
                position: 'relative',
                zIndex: 2,
              }}
              onClick={(e) => {
                console.log('Video wrapper clicked')
                e.stopPropagation() // Verhindert Event-Bubbling
              }}
            >
              {renderVideo(video)}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  )
}