import Image from 'next/image'
import React from 'react'
import saplogo from '@/app/images/SAP_logo.png'

const DesktopMenuFallback = () => {
  return (
    <div
      className={
        'hidden lg:flex flex-col bg-secondary w-full lg:max-w-[280px] xl:max-w-[390px] 2xl:max-w-[470px] xl:rounded-md p-10'
      }
    >
      <Image
        src={saplogo}
        alt="Sports Agent Pro logo"
        quality={100}
        className="lg:mb-5"
      />
      <div className={'flex flex-col h-full gap-[102px] justify-center'}>
        <div
          className={
            'w-[100px] bg-gradient-to-br from-secondary-400 to-secondary-500 animate-pulse h-2 rounded-md'
          }
        />
        <div
          className={
            'w-[60px] bg-gradient-to-br from-secondary-400 to-secondary-500 animate-pulse h-2 rounded-md'
          }
        />
        <div
          className={
            'w-[100px] bg-gradient-to-br from-secondary-400 to-secondary-500 animate-pulse h-2 rounded-md'
          }
        />
        <div
          className={
            'w-[60px] bg-gradient-to-br from-secondary-400 to-secondary-500 animate-pulse h-2 rounded-md'
          }
        />
      </div>
    </div>
  )
}

export default DesktopMenuFallback
