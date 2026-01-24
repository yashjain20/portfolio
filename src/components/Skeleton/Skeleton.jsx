import { useState, useEffect } from 'react'
import './Skeleton.css'

const Skeleton = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true)
      setTimeout(() => {
        if (onComplete) onComplete()
      }, 500)
    }, 800)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className={`skeleton-container ${isFading ? 'fade-out' : ''}`}>
      <div className="skeleton-header">
        <div className="skeleton-nav">
          <div className="skeleton-brand"></div>
          <div className="skeleton-nav-items">
            <div className="skeleton-nav-item"></div>
            <div className="skeleton-nav-item"></div>
            <div className="skeleton-nav-item"></div>
            <div className="skeleton-nav-item"></div>
            <div className="skeleton-nav-item"></div>
            <div className="skeleton-nav-item"></div>
          </div>
        </div>
      </div>

      <main className="skeleton-main">
        <section className="skeleton-section skeleton-about">
          <div className="container">
            <div className="skeleton-about-content">
              <div className="skeleton-about-text">
                <div className="skeleton-line skeleton-title"></div>
                <div className="skeleton-line skeleton-tagline"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-buttons">
                  <div className="skeleton-button"></div>
                  <div className="skeleton-button"></div>
                </div>
              </div>
              <div className="skeleton-image"></div>
            </div>
            <div className="skeleton-content-block">
              <div className="skeleton-line skeleton-heading"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
            </div>
          </div>
        </section>

        <section className="skeleton-section">
          <div className="container">
            <div className="skeleton-line skeleton-section-title"></div>
            <div className="skeleton-cards">
              <div className="skeleton-card">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
              </div>
              <div className="skeleton-card">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="skeleton-section">
          <div className="container">
            <div className="skeleton-line skeleton-section-title"></div>
            <div className="skeleton-cards">
              <div className="skeleton-card">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Skeleton
