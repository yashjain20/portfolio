import './Contact.css'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { LinkedInIcon, GitHubIcon, CopyIcon } from '../Icons/Icons'
import { useToast } from '../../context/ToastContext'

const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver()
  const { showToast } = useToast()
  const email = 'yj3273@nyu.edu'
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jainyash20',
      icon: LinkedInIcon
    },
    {
      name: 'GitHub',
      url: 'https://github.com/yashjain20',
      icon: GitHubIcon
    }
  ]

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      showToast('Email copied to clipboard!', 'success')
    } catch (err) {
      console.error('Failed to copy email:', err)
      showToast('Failed to copy email. Please try again.', 'error')
    }
  }

  return (
    <section 
      ref={ref}
      id="contact" 
      className={`contact section fade-in-up ${isVisible ? 'visible' : ''}`}
      aria-labelledby="contact-title"
    >
      <div className="container">
        <h2 id="contact-title" className="section-title">Let's Talk</h2>
        <div className="contact-content">
          <div className="contact-main-card">
            <div className="contact-top-section">
              <h3 className="contact-subtitle">What I'm Looking For</h3>
              <p className="contact-intro">
                I'm exploring full-time opportunities starting mid-2026 in roles where technology drives business outcomes.
              </p>
              <div className="roles-grid">
                <div className="roles-list">
                  <h4 className="roles-title">Roles I'm drawn to:</h4>
                  <ul className="roles-items">
                    <li>Software and Data Engineering: Building systems that scale and enable analytics</li>
                    <li>Analytics and ML Engineering: Deploying models and infrastructure in production</li>
                    <li>Technical Consulting: Solving strategic problems with technology while working cross-functionally</li>
                    <li>Product-focused technical roles: Where engineering and business strategy intersect</li>
                  </ul>
                </div>
                <div className="what-matters">
                  <h4 className="roles-title">What matters to me:</h4>
                  <ul className="roles-items">
                    <li>Working on problems that create real leverage</li>
                    <li>Teams that value both technical craft and strategic thinking</li>
                    <li>Organizations where curiosity is rewarded and learning is continuous</li>
                    <li>Roles where what you build matters as much as how you build it</li>
                  </ul>
                </div>
              </div>
              <p className="contact-cta">
                If you're working on something interesting where these skills align, I'd love to connect.
              </p>
            </div>

            <div className="contact-divider"></div>

            <div className="contact-bottom-section">
              <h3 className="contact-details-title">Contact Information</h3>
              <div className="contact-info-grid">
                <div className="contact-details">
                  <div className="contact-detail-item">
                    <strong>Email:</strong>
                    <div className="email-wrapper">
                      <a href={`mailto:${email}`}>{email}</a>
                      <button
                        onClick={handleCopyEmail}
                        className="copy-email-btn"
                        aria-label="Copy email to clipboard"
                        title="Copy email"
                      >
                        <CopyIcon size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="contact-detail-item">
                    <strong>Location:</strong>
                    <span>Brooklyn, NY</span>
                  </div>
                </div>
                <div className="social-links">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label={social.name}
                      >
                        <IconComponent size={24} />
                        <span>{social.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
