'use client'
import { useEffect, useState } from 'react'

const useDeviceSize = () => {
  const [deviceSize, setdeviceSize] = useState(null)

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 767) {
        setdeviceSize('sm')
      } else if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
        setdeviceSize('md')
      } else if (window.innerWidth >= 1024 && window.innerWidth <= 1280) {
        setdeviceSize('lg')
      } else if (window.innerWidth >= 1279 && window.innerWidth <= 1535) {
        setdeviceSize('lg')
      } else if (window.innerWidth >= 1536) {
        setdeviceSize('2xl')
      }
    })
    if (window.innerWidth <= 767) {
      setdeviceSize('sm')
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
      setdeviceSize('md')
    } else if (window.innerWidth >= 1024 && window.innerWidth <= 1280) {
      setdeviceSize('lg')
    } else if (window.innerWidth >= 1279 && window.innerWidth <= 1535) {
      setdeviceSize('lg')
    } else if (window.innerWidth >= 1536) {
      setdeviceSize('2xl')
    }
    // return unmountFunction // Cleanup function to run before unmount
  }, [])
  return { deviceSize }
}

export default useDeviceSize
