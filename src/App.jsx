import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Skeleton from './components/Skeleton/Skeleton'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (window.scrollY / windowHeight) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSkeletonComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <Skeleton onComplete={handleSkeletonComplete} />}
      <div className={`App ${isLoading ? 'loading' : ''}`}>
        <a href="#about" className="skip-link">Skip to main content</a>
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
        <Header isScrolled={isScrolled} />
        <main id="main-content">
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
