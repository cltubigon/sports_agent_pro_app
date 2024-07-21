import Image from 'next/image'
import React from 'react'
import saplogo from '@/app/images/SAP_logo.png'

const MobileMenuFallback = () => {
  return (
    <div className="block lg:hidden">
      <div className={'bg-secondary px-10 py-5'}>
        <Image
          src={saplogo}
          alt="Sports Agent Pro logo"
          quality={100}
          className="max-sm:w-[100px] lg:mb-[133px] mx-auto md:mx-[unset]"
        />
      </div>
      <div
        className={
          'grid grid-cols-4 bg-secondary-300 h-10 text-white py-2 items-center px-5 gap-6'
        }
      >
        <div
          className={
            'w-full md:w-[60px] md:mx-auto bg-gradient-to-br from-secondary-200 to-secondary-200 animate-pulse h-2 rounded-md'
          }
        />
        <div
          className={
            'w-full md:w-[60px] md:mx-auto bg-gradient-to-br from-secondary-200 to-secondary-200 animate-pulse h-2 rounded-md'
          }
        />
        <div
          className={
            'w-full md:w-[60px] md:mx-auto bg-gradient-to-br from-secondary-200 to-secondary-200 animate-pulse h-2 rounded-md'
          }
        />
        <div
          className={
            'w-full md:w-[60px] md:mx-auto bg-gradient-to-br from-secondary-200 to-secondary-200 animate-pulse h-2 rounded-md'
          }
        />
      </div>
    </div>
  )
}

export default MobileMenuFallback
