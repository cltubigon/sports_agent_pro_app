'use client'
import Icon_heart2 from '@/app/components/icons/Icon_heart2'
import React from 'react'

const Heart = () => {
  const handleHeartClick = (e) => {
    e.stopPropagation()
    console.log('heart clicked')
  }
  return (
    <div
      onClick={handleHeartClick}
      className={'absolute top-5 right-5 rounded-full bg-white p-2 z-50'}
    >
      <Icon_heart2 className="size-4 text-primary" />
    </div>
  )
}

export default Heart
