import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Making 10,000 Hours of Audio Accessible',
      subtitle: 'NYU Capstone Project | New York Public Library',
      logoText: 'AI',
      challenge: 'The New York Public Library held thousands of hours of historical audio: interviews, lectures, performances. But they were essentially unusable. No transcripts. No search. If you didn\'t know exactly what minute of which recording contained what you needed, you\'d never find it.',
      role: 'I was the technical lead on a 3-person team. I designed the ML pipeline architecture, integrated Faster-Whisper for transcription and Qwen2 LLM for summarization, and built the data processing workflow.',
      whatIBuilt: [
        'Processes audio files and generates accurate transcriptions',
        'Uses LLM-based summarization to create searchable content',
        'Enables keyword search across the entire archive'
      ],
      impact: 'Researchers and educators can now discover content in minutes that would have taken hours of manual listening. A historian searching for mentions of a specific event can query the system and get timestamped results instantly.',
      timeline: '4 months (Sept 2025 – Dec 2025)',
      technologies: ['Python', 'Faster-Whisper', 'Qwen2 LLM', 'Natural Language Processing'],
      whatILearned: 'Working with real institutional constraints taught me how to balance technical ambition with practical deliverables. The library needed something that worked reliably, not something that was technically perfect. I learned to prioritize robustness over sophistication and how to communicate technical trade-offs to non-technical stakeholders.'
    },
    {
      title: 'Predicting Startup Success: Which Signals Actually Matter?',
      subtitle: 'NYU Stern School of Business',
      logoText: 'ML',
      challenge: 'Venture investors evaluate hundreds of startups. Which early-stage signals actually predict funding success? Is it team size? Funding velocity? Market timing?',
      role: 'This was a solo project. I sourced and cleaned Crunchbase records, engineered features, built classification models, and interpreted results for business strategy implications.',
      whatIBuilt: [
        'XGBoost and Random Forest models to predict funding outcomes',
        'Feature engineering around team composition, capital efficiency, market conditions',
        'Analysis showing which metrics had predictive power versus noise'
      ],
      impact: 'Key finding: Funding velocity and team composition were stronger predictors than market size. I identified non-obvious patterns that could inform investor screening processes.',
      timeline: '12 weeks',
      technologies: ['Python', 'XGBoost', 'Random Forest', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      whatILearned: 'The technical work like model tuning and hyperparameter optimization was only half the challenge. The real value came from translating model outputs into actionable business insights. I learned how to communicate statistical findings to non-technical audiences and frame recommendations in terms of business strategy, not just model performance.',
      ifIDidThisAgain: 'I\'d incorporate survival analysis to better capture the time-to-funding dimension. I\'d also test ensemble methods combining deep learning with traditional ML to capture more complex interaction effects.'
    }
  ]

  return (
    <section id="projects" className="projects section" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title" className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <article key={index} className="project-case-study">
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
                    <li key={idx}>{feature}</li>
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
                      <span key={idx} className="tech-tag">{tech}</span>
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
