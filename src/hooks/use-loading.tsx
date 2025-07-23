import { useState, useEffect } from "react"

export const useLoading = (initialState = false) => {
  const [isLoading, setIsLoading] = useState(initialState)

  const startLoading = () => setIsLoading(true)
  const stopLoading = () => setIsLoading(false)

  return {
    isLoading,
    startLoading,
    stopLoading,
    setIsLoading
  }
}

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false)

  const startTransition = () => {
    setIsTransitioning(true)
    // Simulate minimum loading time for smooth UX
    setTimeout(() => setIsTransitioning(false), 800)
  }

  useEffect(() => {
    // Listen for route changes
    const handleRouteChange = () => {
      startTransition()
    }

    // Add event listeners for navigation
    window.addEventListener('beforeunload', handleRouteChange)
    
    return () => {
      window.removeEventListener('beforeunload', handleRouteChange)
    }
  }, [])

  return {
    isTransitioning,
    startTransition
  }
}