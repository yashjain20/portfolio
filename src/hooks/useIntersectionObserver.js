import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const currentElement = elementRef.current
    if (!currentElement) return

    let observer = null

    // Check if element is already in viewport on mount (with delay to ensure DOM is ready)
    const checkInitialVisibility = () => {
      const rect = currentElement.getBoundingClientRect()
      const isInViewport = rect.top < window.innerHeight + 100 && rect.bottom > -100
      
      if (isInViewport) {
        setIsVisible(true)
        return true
      }
      return false
    }

    // Small delay to ensure layout is complete
    const timeoutId = setTimeout(() => {
      if (checkInitialVisibility()) {
        return
      }

      // Set up Intersection Observer if not already visible
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Unobserve after first intersection to prevent re-triggering
          if (observer) {
            observer.unobserve(entry.target)
          }
        }
      }, {
        threshold: 0.1,
        rootMargin: '100px 0px -50px 0px',
        ...options
      })

      observer.observe(currentElement)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      if (observer && currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [])

  return [elementRef, isVisible]
}
