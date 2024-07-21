import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import saplogo from '@/app/images/SAP_logo.png'
import Icon_check2 from '@/app/components/icons/Icon_check2'
import Link from 'next/link'

const DesktopMenu = ({
  parameters: { isStep2, isStep3, isStep4, isGreaterThanStep4 },
}) => {
  return (
    <div
      className={
        'hidden lg:flex flex-col bg-secondary w-full lg:max-w-[280px] xl:max-w-[390px] 2xl:max-w-[470px] xl:rounded-md p-10'
      }
    >
      <Link href={'/'} className="w-fit">
        <Image
          src={saplogo}
          alt="Sports Agent Pro logo"
          quality={100}
          className="lg:mb-5"
        />
      </Link>
      <div className={'flex flex-col h-full gap-[102px] justify-center'}>
        <div
          className={`flex relative gap-4 items-center text-white after:absolute after:top-[35px] after:w-1 after:bg-white after:h-[88px] after:left-[10px] ${
            !isStep2 && 'after:opacity-15'
          }`}
        >
          <div
            className={
              'relative min-w-[26px] min-h-[26px] size-[26px] rounded-full bg-white'
            }
          >
            {isStep2 && (
              <Icon_check2 className="text-secondary absolute top-0 right-0 left-0 bottom-0 m-auto" />
            )}
          </div>
          <p className={'font-oswald font-bold text-xl'}>STEP 1</p>
        </div>
        <div
          className={`flex gap-4 items-center text-white relative  after:absolute after:top-[35px] after:w-1 after:bg-white after:h-[88px] after:left-[10px] ${
            !isStep3 && 'after:opacity-15'
          }`}
        >
          <div
            className={`relative min-w-[26px] min-h-[26px] size-[26px] rounded-full ${
              !isStep2 && 'opacity-15'
            } bg-white`}
          >
            {isStep3 && (
              <Icon_check2 className="text-secondary absolute top-0 right-0 left-0 bottom-0 m-auto" />
            )}
          </div>
          <p
            className={`font-oswald font-bold text-xl ${
              !isStep2 && 'opacity-15'
            }`}
          >
            STEP 2
          </p>
        </div>
        <div
          className={`flex gap-4 items-center text-white relative  after:absolute after:top-[35px] after:w-1 after:bg-white after:h-[88px] after:left-[10px] ${
            !isStep4 && 'after:opacity-15'
          }`}
        >
          <div
            className={`relative min-w-[26px] min-h-[26px] size-[26px] rounded-full ${
              !isStep3 && 'opacity-15'
            } bg-white`}
          >
            {' '}
            {isStep4 && (
              <Icon_check2 className="text-secondary absolute top-0 right-0 left-0 bottom-0 m-auto" />
            )}
          </div>
          <p
            className={`font-oswald font-bold text-xl ${
              !isStep3 && 'opacity-15'
            }`}
          >
            STEP 3
          </p>
        </div>
        <div className={'flex gap-4 items-center text-white relative'}>
          <div
            className={`relative min-w-[26px] min-h-[26px] size-[26px] rounded-full ${
              !isStep4 && 'opacity-15'
            } bg-white`}
          >
            {isGreaterThanStep4 && (
              <Icon_check2 className="text-secondary absolute top-0 right-0 left-0 bottom-0 m-auto" />
            )}
          </div>
          <p
            className={`font-oswald font-bold text-xl ${
              !isStep4 && 'opacity-15'
            }`}
          >
            STEP 4
          </p>
        </div>
      </div>
    </div>
  )
}

export default DesktopMenu
