import Icon_left2 from '@/app/components/icons/Icon_left2'
import Image from 'next/image'
import React from 'react'
import saplogo from '@/app/images/SAP_logo.png'
import Navigation from './Navigation'

const NavigationBuild = () => {
  return (
    <div
      className={
        'w-full h-full flex flex-col justify-between p-5 max-w-[290px] bg-secondary'
      }
    >
      <div className={'flex flex-col'}>
        <Image
          src={saplogo}
          alt="SAP Logo"
          quality={100}
          className="max-w-[80px]"
        />
        <Navigation />
      </div>
      <div className={'flex justify-end'}>
        <Icon_left2 className="size-6" />
      </div>
    </div>
  )
}

export default NavigationBuild
