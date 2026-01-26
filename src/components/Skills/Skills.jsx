import './Skills.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

// Skill category icons
const CategoryIcon = ({ category }) => {
  const icons = {
    'Languages': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    'Engineering': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"></path>
      </svg>
    ),
    'Cloud & Data': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    'AI/ML': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2"></circle>
        <circle cx="19" cy="12" r="2"></circle>
        <circle cx="5" cy="12" r="2"></circle>
        <circle cx="12" cy="19" r="2"></circle>
        <line x1="12" y1="7" x2="12" y2="17"></line>
        <line x1="7" y1="12" x2="17" y2="12"></line>
        <line x1="8.24" y1="8.24" x2="15.76" y2="15.76"></line>
        <line x1="8.24" y1="15.76" x2="15.76" y2="8.24"></line>
      </svg>
    ),
    'Analytics': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
    'DevOps': (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"></path>
      </svg>
    )
  }
  
  return icons[category] || null
}

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
                  <h4 className="category-label">
                    <CategoryIcon category="Languages" />
                    Languages
                  </h4>
                  <div className="skills-list">
                    <span className="skill-item">Python</span>
                    <span className="skill-item">Java</span>
                    <span className="skill-item">SQL</span>
                    <span className="skill-item">JavaScript</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="category-label">
                    <CategoryIcon category="Engineering" />
                    Engineering
                  </h4>
                  <div className="skills-list">
                    <span className="skill-item">Spring Boot</span>
                    <span className="skill-item">REST APIs</span>
                    <span className="skill-item">Microservices</span>
                    <span className="skill-item">React</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="category-label">
                    <CategoryIcon category="Cloud & Data" />
                    Cloud & Data
                  </h4>
                  <div className="skills-list">
                    <span className="skill-item">AWS (S3, Lambda, Glue, Redshift)</span>
                    <span className="skill-item">Azure</span>
                    <span className="skill-item">PostgreSQL</span>
                    <span className="skill-item">MongoDB</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="category-label">
                    <CategoryIcon category="AI/ML" />
                    AI/ML
                  </h4>
                  <div className="skills-list">
                    <span className="skill-item">PyTorch</span>
                    <span className="skill-item">Scikit-learn</span>
                    <span className="skill-item">XGBoost</span>
                    <span className="skill-item">PySpark</span>
                    <span className="skill-item">LLM integration</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="category-label">
                    <CategoryIcon category="Analytics" />
                    Analytics
                  </h4>
                  <div className="skills-list">
                    <span className="skill-item">Power BI</span>
                    <span className="skill-item">Tableau</span>
                    <span className="skill-item">Pandas</span>
                    <span className="skill-item">NumPy</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="category-label">
                    <CategoryIcon category="DevOps" />
                    DevOps
                  </h4>
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
