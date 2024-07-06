'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

const LoadingProgress = () => {
  const [progressstarted, setprogressstarted] = useState(false)

  useEffect(() => {
    setprogressstarted(true)
  }, [])

  return (
    <div className={'w-full bg-neutral-200'}>
      <div
        className={`fixed h-[3px] bg-blue-400 top-0 left-0 z-[9999] ${
          progressstarted ? 'w-[90%]' : 'w-0'
        } transition-all duration-[20s] ease-out`}
      />
    </div>
  )
}

export default LoadingProgress
