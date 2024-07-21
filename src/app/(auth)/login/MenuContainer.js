import React from 'react'
import saplogo from '@/app/images/SAP_logo.png'
import Image from 'next/image'
import Link from 'next/link'

const MenuContainer = () => {
  return (
    <div
      className={
        'lg:flex flex-col bg-secondary w-full lg:max-w-[280px] xl:max-w-[390px] 2xl:max-w-[470px] xl:rounded-md px-8 py-4 lg:px-10 lg:py-10'
      }
    >
      <Link href={'/'} className='w-fit'>
        <Image
          src={saplogo}
          alt="Sports Agent Pro logo"
          quality={100}
          className="lg:mb-5 mx-auto md:mx-[unset]"
        />
      </Link>
    </div>
  )
}

export default MenuContainer
