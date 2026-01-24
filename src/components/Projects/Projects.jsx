import './Projects.css'
import { projects } from '../../data/projects'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section 
      ref={ref}
      id="projects" 
      className={`projects section fade-in-up ${isVisible ? 'visible' : ''}`}
      aria-labelledby="projects-title"
    >
      <div className="container">
        <h2 id="projects-title" className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <article 
              key={project.id} 
              className="project-case-study"
            >
              <div className="project-header">
                <div className="project-logo-large">
                  <span className="project-logo-text">{project.logoText}</span>
                </div>
                <div className="project-header-text">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
              </div>

              <div className="project-section">
                <h4 className="project-section-title">The Challenge</h4>
                <p className="project-section-content">{project.challenge}</p>
              </div>

              <div className="project-section">
                <h4 className="project-section-title">My Role</h4>
                <p className="project-section-content">{project.role}</p>
              </div>

              <div className="project-section">
                <h4 className="project-section-title">What I Built</h4>
                <ul className="project-features">
                  {project.whatIBuilt.map((feature, idx) => (
                    <li key={`${project.id}-feature-${idx}`}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-section">
                <h4 className="project-section-title">The Impact</h4>
                <p className="project-section-content">{project.impact}</p>
              </div>

              <div className="project-meta">
                <div className="project-meta-item">
                  <span className="meta-label">Timeline:</span>
                  <span className="meta-value">{project.timeline}</span>
                </div>
                <div className="project-meta-item">
                  <span className="meta-label">Tech:</span>
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={`${project.id}-tech-${idx}`} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-section">
                <h4 className="project-section-title">What I Learned</h4>
                <p className="project-section-content">{project.whatILearned}</p>
              </div>

              {project.ifIDidThisAgain && (
                <div className="project-section">
                  <h4 className="project-section-title">If I Did This Again</h4>
                  <p className="project-section-content">{project.ifIDidThisAgain}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
