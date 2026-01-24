import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Summer Intern',
      company: 'Pixis.ai',
      location: 'New York, NY',
      period: 'May 2025 – Aug 2025',
      problem: 'Analytics workflows were manual, data quality was inconsistent, and teams were making decisions on week-old data.',
      whatIDid: [
        'Built Python/SQL automation to streamline reporting workflows',
        'Designed AWS infrastructure (S3, Redshift, Lambda) enabling real-time analytics',
        'Created data validation frameworks ensuring accuracy across systems',
        'Collaborated with product and growth teams to identify critical metrics'
      ],
      impact: 'Product teams could test hypotheses faster. Leadership had current data for roadmap decisions. The analytics function shifted from being reactive to proactive.',
      teamSize: '2-person data engineering team; collaborated with product and growth teams',
      tools: ['Python', 'SQL', 'AWS (S3, Redshift, Lambda)', 'Airflow']
    },
    {
      title: 'Software Engineer',
      company: 'Trewinia Infotech',
      location: 'India',
      period: 'Nov 2022 – Jul 2024',
      problem: 'A fast-growing startup needed scalable data infrastructure to support business intelligence across sales, marketing, and operations.',
      whatIDid: [
        'ETL pipelines on AWS for large-scale data processing',
        'Interactive dashboards (Power BI, Tableau) for stakeholders across business units',
        'Automated data aggregation eliminating manual reporting'
      ],
      impact: 'Teams could identify bottlenecks in real time. Leadership could track performance across departments. The business moved faster because the data was reliable.',
      teamSize: '4-person data team',
      tools: ['AWS Lambda', 'AWS Glue', 'PostgreSQL', 'Power BI', 'Tableau', 'Python']
    },
    {
      title: 'System Engineer',
      company: 'TCS',
      location: 'India',
      period: 'Feb 2021 – Oct 2022',
      problem: 'We needed to build production backend systems that could reliably serve enterprise clients.',
      whatIDid: [
        'Developed REST APIs using Java and Spring Boot',
        'Optimized PostgreSQL queries and indexing strategies',
        'Implemented caching mechanisms to enhance API performance',
        'Automated deployment workflows'
      ],
      impact: 'Systems handled production traffic reliably. Performance improvements reduced infrastructure costs.',
      teamSize: '8-person engineering team',
      tools: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Git', 'Jenkins']
    }
  ]

  return (
    <section id="experience" className="experience section" aria-labelledby="experience-title">
      <div className="container">
        <h2 id="experience-title" className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <article key={index} className="experience-item">
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
                      <li key={idx}>{item}</li>
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
                        <span key={idx} className="tool-tag">{tool}</span>
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
