import Image from 'next/image'
import React from 'react'
import saplogo from '@/app/images/SAP_logo.png'
import Icon_right from '@/app/components/icons/Icon_right'
import Link from 'next/link'

const MobileMenu = ({ parameters: { isStep2, isStep3, isStep4 } }) => {
  return (
    <div className="block lg:hidden">
      <div className={'bg-secondary px-10 py-5'}>
        <Link href={'/'} prefetch>
          <Image
            src={saplogo}
            alt="Sports Agent Pro logo"
            quality={100}
            className="max-sm:w-[100px] lg:mb-[133px] mx-auto md:mx-[unset]"
          />
        </Link>
      </div>
      <div
        className={
          'grid grid-cols-4 md:grid-cols-7 bg-secondary-300 text-white py-2 items-center'
        }
      >
        <p
          className={'font-oswald font-bold text md:text-xl w-full text-center'}
        >
          STEP 1
        </p>
        <Icon_right
          className={`hidden md:block text-white ${
            !isStep2 && 'opacity-45'
          } mx-auto`}
        />
        <p
          className={`font-oswald font-bold text md:text-xl w-full text-center ${
            !isStep2 && 'opacity-45'
          }`}
        >
          STEP 2
        </p>
        <Icon_right
          className={`hidden md:block text-white ${
            !isStep3 && 'opacity-45'
          } mx-auto`}
        />
        <p
          className={`font-oswald font-bold text md:text-xl w-full text-center ${
            !isStep3 && 'opacity-45'
          }`}
        >
          STEP 3
        </p>
        <Icon_right
          className={`hidden md:block text-white ${
            !isStep4 && 'opacity-45'
          } mx-auto`}
        />
        <p
          className={`font-oswald font-bold text md:text-xl w-full text-center ${
            !isStep4 && 'opacity-45'
          }`}
        >
          STEP 4
        </p>
      </div>
    </div>
  )
}

export default MobileMenu
