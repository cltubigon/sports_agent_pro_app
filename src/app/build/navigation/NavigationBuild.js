'use client'
import Icon_left2 from '@/app/components/icons/Icon_left2'
import Image from 'next/image'
import React, { useState } from 'react'
import saplogo from '@/app/images/SAP_logo.png'
import Navigation from './Navigation'
import Icon_right2 from '@/app/components/icons/Icon_right2'

const NavigationBuild = () => {
  const [isOpen, setisOpen] = useState(true)
  const handleClick = () => {
    setisOpen(() => !isOpen)
  }
  return (
    <div
      className={`text-white w-fit md:w-full h-full flex flex-col bg-secondary transition-all duration-100 py-5 justify-between ${
        isOpen
          ? 'md:max-w-[290px] px-2 md:px-5'
          : 'max-w-[80px] px-2 max-sm:w-fit'
      }`}
    >
      <div className={'flex flex-col'}>
        <Image
          src={saplogo}
          alt="SAP Logo"
          quality={100}
          className={`${isOpen ? 'max-w-[80px]' : 'max-w-[50px] mx-auto'}`}
        />
        <Navigation isOpen={isOpen} />
      </div>
      <div
        className={`flex ${!isOpen ? 'justify-center' : 'justify-end'}`}
        onClick={handleClick}
      >
        <Icon_left2 className={`size-6 ${!isOpen && 'hidden'}`} />
        <Icon_right2 className={`size-6 ${isOpen && 'hidden'}`} />
      </div>
    </div>
  )
}

export default NavigationBuild
