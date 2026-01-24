import './About.css'

const About = () => {
  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
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
              I turn complex business problems into technical solutions and make sure the data tells the story.
            </p>
            <p className="about-intro">
              Pursuing a Master's in Information Systems at NYU. I build scalable systems, analyze data to drive decisions, 
              and deploy AI/ML solutions that create measurable business impact.
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
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <img 
                src="/images/profile.jpg" 
                alt="Yash Jain" 
                className="profile-image"
                loading="lazy"
                width="320"
                height="320"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
          </div>
        </div>

        <div className="about-main-content">
          <h2 className="about-section-heading">Where technology meets strategy</h2>
          <p className="about-paragraph">
            I work at the intersection of building and solving. My technical foundation is in software engineering: backend systems, 
            data pipelines, machine learning. But my graduate work in Information Systems has trained me to think beyond just implementation.
          </p>
          <p className="about-paragraph">
            The questions I ask are: How does this system support a business goal? What decisions does this data enable? Who needs to 
            understand this, and in what format?
          </p>
          <p className="about-paragraph">
            I've built production systems that process millions of records daily, designed dashboards that changed how product teams 
            prioritize features, and automated workflows that eliminated manual processes. I've worked with engineers who think in 
            system architecture and stakeholders who think in quarterly revenue, and I've learned to speak both languages fluently.
          </p>
          <p className="about-paragraph">
            What excites me isn't just technical elegance. It's leverage. Building solutions that create outsized impact. Systems that 
            don't just work, but enable faster, smarter decisions. Data that doesn't just exist in dashboards, but changes how 
            organizations operate.
          </p>
          <p className="about-paragraph">
            I'm exploring full-time opportunities starting mid-2026 where I can apply both technical depth and strategic thinking. I'm interested in 
            roles in software engineering, data and analytics engineering, AI/ML, or business-facing technical consulting.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
