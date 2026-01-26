import { useState, useEffect } from 'react'

export const useActiveSection = (sections = ['about', 'experience', 'education', 'projects', 'skills', 'contact']) => {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header')
      const headerHeight = header ? header.offsetHeight : 85
      const scrollPosition = window.scrollY + headerHeight + 100 // Offset for better detection

      // Find which section is currently in view
      let currentSection = 'about'
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            currentSection = sections[i]
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    // Initial check
    handleScroll()

    // Throttle scroll events
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  return activeSection
}
