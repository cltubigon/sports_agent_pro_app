/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'

const useIntersection = (img1Ref) => {
  const [isVisible, setisVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        // Element is visible
        setisVisible(true)
      } else {
        // Element is not visible
      }
    })

    observer.observe(img1Ref.current)

    return () => {
      observer.disconnect()
    }
  }, [])
  return { isVisible }
}

export default useIntersection
