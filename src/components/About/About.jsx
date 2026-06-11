import { useState, useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)
  const imgRef = useRef(null)

  // Safari fix: Check if image is already loaded (cached/preloaded)
  useEffect(() => {
    const img = imgRef.current
    if (img) {
      // Check if image is already complete (Safari cached image fix)
      if (img.complete && img.naturalHeight !== 0) {
        // Image is already loaded, onLoad won't fire
        setImageLoading(false)
      }
    }
  }, [])

  // Timeout fallback for Safari (in case onLoad never fires)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (imageLoading) {
        setImageLoading(false)
      }
    }, 2000) // Show image after 2 seconds even if onLoad doesn't fire

    return () => clearTimeout(timer)
  }, [imageLoading])

  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Get actual header height dynamically
      const header = document.querySelector('.header')
      const headerHeight = header ? header.offsetHeight : 85
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-name">
              <span className="gradient-text">Yash Jain</span>
            </h1>
            <p className="about-tagline">
              I turn raw, messy data into pipelines teams can trust.
            </p>
            <p className="about-intro">
              I'm a data engineer with a Master's in Information Systems from NYU. I build the
              pipelines and infrastructure behind analytics, the systems that move data around,
              clean it up, and get it ready for the people who depend on it.
            </p>
            <div className="about-links">
              <a 
                href="#contact" 
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollTo('contact')
                }}
              >
                Let's Talk
              </a>
              <a 
                href="#projects" 
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollTo('projects')
                }}
              >
                See My Work
              </a>
              <a
                href="/resume/Yash_Jain_Resume.pdf"
                download="Yash_Jain_Resume.pdf"
                className="btn btn-secondary"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              {!imageError ? (
                <>
                  {imageLoading && (
                    <div className="image-loading">
                      <div className="image-spinner"></div>
                    </div>
                  )}
                  <picture>
                    <source srcSet="/images/profile.webp" type="image/webp" />
                    <img 
                      ref={imgRef}
                      src="/images/profile.webp" 
                      alt="Yash Jain" 
                      className="profile-image"
                      loading="eager"
                      width="320"
                      height="320"
                      onLoad={() => setImageLoading(false)}
                      onError={() => {
                        setImageError(true)
                        setImageLoading(false)
                      }}
                      style={{ display: imageLoading ? 'none' : 'block' }}
                    />
                  </picture>
                </>
              ) : (
                <div className="profile-image-placeholder">
                  <span className="placeholder-text">YJ</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="about-divider"></div>

        <div className="about-main-content">
          <h2 className="about-section-heading">How I think about data</h2>
          
          <div className="about-content-grid">
            <div className="about-content-section">
              <h3 className="about-subheading">My Approach</h3>
              <p className="about-paragraph">
                Moving data from one place to another is the easy part. What I care about is
                everything around it: designing schemas that won't crack later, catching bad
                data before it spreads, and knowing when something breaks at 3am.
              </p>
              <p className="about-paragraph">
                Before I build anything, I want to know who's going to use it and what happens
                to their work if it goes wrong. That usually shapes the whole design.
              </p>
            </div>

            <div className="about-content-section">
              <h3 className="about-subheading">What I've Built</h3>
              <p className="about-paragraph">
                Most of my work has been the plumbing behind analytics: pipelines that move data
                every day, models that make slow queries fast, and checks that quietly catch
                problems before anyone notices. A lot of it has been on AWS, with Python and SQL
                doing the heavy lifting and tools like Airflow and dbt keeping things in order.
              </p>
            </div>

            <div className="about-content-section">
              <h3 className="about-subheading">What Drives Me</h3>
              <p className="about-paragraph">
                The best data infrastructure is the kind nobody thinks about. It just runs, the
                numbers are right, and people get on with their work. I like building things that
                fade into the background like that, where the reward is that no one has to worry.
              </p>
            </div>

            <div className="about-content-section">
              <h3 className="about-subheading">What's Next</h3>
              <p className="about-paragraph">
                I'm looking for a data engineering team that takes its infrastructure seriously,
                somewhere I can own real pipelines and keep growing as an engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
