import { useState, useEffect, lazy, Suspense } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Skeleton from './components/Skeleton/Skeleton'

// Lazy load below-the-fold components
const Experience = lazy(() => import('./components/Experience/Experience'))
const Education = lazy(() => import('./components/Education/Education'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Skills = lazy(() => import('./components/Skills/Skills'))
const Contact = lazy(() => import('./components/Contact/Contact'))

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
          const scrolled = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0
          setScrollProgress(Math.min(100, Math.max(0, scrolled)))
          
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSkeletonComplete = () => {
    setIsLoading(false)
  }

  // Loading fallback component
  const ComponentLoader = () => (
    <div className="component-loader">
      <div className="component-loader-spinner"></div>
    </div>
  )

  return (
    <>
      {isLoading && <Skeleton onComplete={handleSkeletonComplete} />}
      <div className={`App ${isLoading ? 'loading' : ''}`}>
        <a href="#about" className="skip-link">Skip to main content</a>
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
        <Header isScrolled={isScrolled} />
        <main id="main-content">
          <About />
          <Suspense fallback={<ComponentLoader />}>
            <Experience />
            <Education />
            <Projects />
            <Skills />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
