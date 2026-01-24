import { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }} aria-label="Home">
              YJ
            </a>
          </div>
          
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} role="navigation">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}>Experience</a></li>
            <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education') }}>Education</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}>Projects</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}>Skills</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
            <li>
              <a 
                href="/resume/Yash_Jain_Resume.pdf" 
                download="Yash_Jain_Resume.pdf"
                className="nav-resume-btn"
                aria-label="Download Resume"
              >
                Resume
              </a>
            </li>
          </ul>

          <button 
            className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
