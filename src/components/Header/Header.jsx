import { useState, useEffect, useRef } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'
import './Header.css'

const Header = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection()
  const menuRef = useRef(null)
  const toggleButtonRef = useRef(null)
  const firstMenuItemRef = useRef(null)

  const scrollToSection = (sectionId) => {
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
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      // Focus first menu item when menu opens
      setTimeout(() => {
        if (firstMenuItemRef.current) {
          firstMenuItemRef.current.focus()
        }
      }, 100)
    } else {
      document.body.style.overflow = 'unset'
      // Return focus to toggle button when menu closes
      if (toggleButtonRef.current) {
        toggleButtonRef.current.focus()
      }
    }
  }, [isMobileMenuOpen])

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
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
          
          <ul 
            ref={menuRef}
            className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} 
            role="navigation"
            aria-hidden={!isMobileMenuOpen}
          >
            <li>
              <a 
                ref={firstMenuItemRef}
                href="#about" 
                onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
                className={activeSection === 'about' ? 'active' : ''}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}
                className={activeSection === 'experience' ? 'active' : ''}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                onClick={(e) => { e.preventDefault(); scrollToSection('education') }}
                className={activeSection === 'education' ? 'active' : ''}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                Education
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}
                className={activeSection === 'projects' ? 'active' : ''}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}
                className={activeSection === 'skills' ? 'active' : ''}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
                className={activeSection === 'contact' ? 'active' : ''}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                Contact
              </a>
            </li>
            <li>
              <a 
                href="/resume/Yash_Jain_Resume.pdf" 
                download="Yash_Jain_Resume.pdf"
                className="nav-resume-btn"
                aria-label="Download Resume"
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                Resume
              </a>
            </li>
          </ul>

          <button 
            ref={toggleButtonRef}
            className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
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
