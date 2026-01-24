import './Experience.css'
import { experiences } from '../../data/experience'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const Experience = () => {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section 
      ref={ref}
      id="experience" 
      className={`experience section fade-in-up ${isVisible ? 'visible' : ''}`}
      aria-labelledby="experience-title"
    >
      <div className="container">
        <h2 id="experience-title" className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp) => (
            <article 
              key={exp.id} 
              className="experience-item"
            >
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <p className="experience-location">{exp.location}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>

              <div className="experience-content">
                <div className="experience-section">
                  <h5 className="experience-section-title">The Problem</h5>
                  <p className="experience-section-text">{exp.problem}</p>
                </div>

                <div className="experience-section">
                  <h5 className="experience-section-title">What I Did</h5>
                  <ul className="experience-list-items">
                    {exp.whatIDid.map((item, idx) => (
                      <li key={`${exp.id}-item-${idx}`}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="experience-section">
                  <h5 className="experience-section-title">Impact</h5>
                  <p className="experience-section-text">{exp.impact}</p>
                </div>

                <div className="experience-meta">
                  <div className="experience-meta-item">
                    <span className="meta-label">Team Size:</span>
                    <span className="meta-value">{exp.teamSize}</span>
                  </div>
                  <div className="experience-meta-item">
                    <span className="meta-label">Tools:</span>
                    <div className="experience-tools">
                      {exp.tools.map((tool, idx) => (
                        <span key={`${exp.id}-tool-${idx}`} className="tool-tag">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
