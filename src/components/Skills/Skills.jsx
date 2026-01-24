import './Skills.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver()

  return (
    <section 
      ref={ref}
      id="skills" 
      className={`skills section fade-in-up ${isVisible ? 'visible' : ''}`}
      aria-labelledby="skills-title"
    >
      <div className="container">
        <h2 id="skills-title" className="section-title">How I Work</h2>
        <p className="section-subtitle">
          I move between technical execution and strategic thinking.
        </p>

        <div className="how-i-work-content">
          <p className="skills-intro">
            I can architect data systems, write production code, train ML models, and deploy to AWS. But I'm equally focused on the why. 
            Does this solve the right problem? How does this create value? What trade-offs are we making?
          </p>

          <div className="skills-sections">
            <div className="skills-section">
              <h3 className="skills-section-title">Technical Capabilities</h3>
              <div className="skills-categories">
                <div className="skill-category">
                  <h4 className="category-label">Languages</h4>
                  <div className="skills-list">
                    <span className="skill-item">Python</span>
                    <span className="skill-item">Java</span>
                    <span className="skill-item">SQL</span>
                    <span className="skill-item">JavaScript</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="category-label">Engineering</h4>
                  <div className="skills-list">
                    <span className="skill-item">Spring Boot</span>
                    <span className="skill-item">REST APIs</span>
                    <span className="skill-item">Microservices</span>
                    <span className="skill-item">React</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="category-label">Cloud & Data</h4>
                  <div className="skills-list">
                    <span className="skill-item">AWS (S3, Lambda, Glue, Redshift)</span>
                    <span className="skill-item">Azure</span>
                    <span className="skill-item">PostgreSQL</span>
                    <span className="skill-item">MongoDB</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="category-label">AI/ML</h4>
                  <div className="skills-list">
                    <span className="skill-item">PyTorch</span>
                    <span className="skill-item">Scikit-learn</span>
                    <span className="skill-item">XGBoost</span>
                    <span className="skill-item">PySpark</span>
                    <span className="skill-item">LLM integration</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="category-label">Analytics</h4>
                  <div className="skills-list">
                    <span className="skill-item">Power BI</span>
                    <span className="skill-item">Tableau</span>
                    <span className="skill-item">Pandas</span>
                    <span className="skill-item">NumPy</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="category-label">DevOps</h4>
                  <div className="skills-list">
                    <span className="skill-item">Docker</span>
                    <span className="skill-item">Git</span>
                    <span className="skill-item">CI/CD pipelines</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-section">
              <h3 className="skills-section-title">What I Deliver</h3>
              <ul className="deliverables-list">
                <li>Systems that scale reliably under production load</li>
                <li>Data pipelines that teams trust for decision-making</li>
                <li>Models that solve business problems, not just optimize metrics</li>
                <li>Clear communication bridging technical and non-technical stakeholders</li>
              </ul>
            </div>

            <div className="skills-section">
              <h3 className="skills-section-title">Work Style</h3>
              <p className="work-style-text">
                Equally comfortable working independently or embedded in cross-functional teams. I can deep-dive into technical 
                implementation and zoom out to understand business strategy. I ask questions, challenge assumptions, and focus on 
                outcomes over activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
