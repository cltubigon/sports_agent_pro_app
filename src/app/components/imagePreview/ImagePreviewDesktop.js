'use client'
import React, { useState } from 'react'

import Image from 'next/image'
import Icon_left from '../icons/Icon_left'
import Icon_right from '../icons/Icon_right'

const ImagePreviewDesktop = ({ parameters: { images } }) => {
  const [activeSlide, setactiveSlide] = useState(0)
  const handleLeft = () => {
    if (activeSlide === 0) {
      setactiveSlide(images?.length - 1)
      return
    }
    setactiveSlide(activeSlide - 1)
  }
  const handleRight = () => {
    if (activeSlide === images?.length - 1) {
      setactiveSlide(0)
      return
    }
    setactiveSlide(activeSlide + 1)
  }
  return (
    <>
      <div
        className={
          'hidden lg:flex items-center justify-center h-screen relative'
        }
      >
        <div
          className={
            'flex items-center justify-start w-full h-full transition-all duration-500'
          }
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {images.map((item, index) => {
            const { fullPath, blurDataURL } = item
            return (
              <div
                key={index}
                className={
                  'min-w-full h-full bg-black px-[89px] flex justify-center items-center transition-all duration-500 select-none'
                }
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${fullPath}`}
                  alt="user images"
                  placeholder={'blur'}
                  blurDataURL={blurDataURL}
                  quality={100}
                  width={720}
                  height={720}
                  className="select-none w-auto h-full"
                />
              </div>
            )
          })}
        </div>
        {/* Left Icon */}
        <div
          onClick={handleLeft}
          className={
            'cursor-pointer group hover:-translate-x-[6px] h-full absolute left-0 min-w-[100px] bg-black bg-opacity-10 flex items-center justify-center transition-all duration-300'
          }
        >
          <Icon_left className="size-16 rounded-full p-2 text-white  bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 z-10" />
        </div>
        {/* Right Icon */}
        <div
          onClick={handleRight}
          className={
            'cursor-pointer group hover:translate-x-[6px] h-full absolute right-0 min-w-[100px] bg-black bg-opacity-10 flex items-center justify-center transition-all duration-300'
          }
        >
          <Icon_right className="size-16 rounded-full p-2 text-white  bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 z-10" />
        </div>
      </div>
    </>
  )
}

export default ImagePreviewDesktop
