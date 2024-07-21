'use client'
import React, { useState } from 'react'
import test1 from '@/app/images/test1.webp'
import test2 from '@/app/images/test2.webp'
import test3 from '@/app/images/test3.jpg'
import test4 from '@/app/images/test4.png'
import Image from 'next/image'
import Icon_left from './icons/Icon_left'
import Icon_right from './icons/Icon_right'

const ImagePreview = ({ children, ...props }) => {
  const [activeSlide, setactiveSlide] = useState(0)
  const testImages = [test1, test2, test3, test4]
  const handleLeft = () => {
    if (activeSlide === 0) {
      setactiveSlide(testImages?.length - 1)
      return
    }
    setactiveSlide(activeSlide - 1)
  }
  const handleRight = () => {
    if (activeSlide === testImages?.length - 1) {
      setactiveSlide(0)
      return
    }
    setactiveSlide(activeSlide + 1)
  }
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-secondary bg-opacity-95 z-[990]">
      <div className={'flex items-center justify-center h-full relative'}>
        <div
          className={
            'flex items-center justify-start h-full transition-all duration-500'
          }
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {testImages.map((img, index) => {
            return (
              <div
                key={index}
                className={
                  'min-w-full h-full bg-black px-[89px] flex justify-center items-center transition-all duration-500 select-none'
                }
              >
                <Image src={img} alt="test" quality={100} />
              </div>
            )
          })}
        </div>
        {/* Left Icon */}
        <div
          onClick={handleLeft}
          className={
            'group hover:-translate-x-[6px] h-full absolute left-0 min-w-[100px] bg-black bg-opacity-10 flex items-center justify-center transition-all duration-300'
          }
        >
          <Icon_left className="size-16 rounded-full p-2 text-white  bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 z-10" />
        </div>
        {/* Right Icon */}
        <div
          onClick={handleRight}
          className={
            'group hover:translate-x-[6px] h-full absolute right-0 min-w-[100px] bg-black bg-opacity-10 flex items-center justify-center transition-all duration-300'
          }
        >
          <Icon_right className="size-16 rounded-full p-2 text-white  bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 z-10" />
        </div>
      </div>
    </div>
  )
}

export default ImagePreview
