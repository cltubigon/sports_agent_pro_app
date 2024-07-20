/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Icon_running2 from '@/app/components/icons/Icon_running2'
import Icon_teaching from '@/app/components/icons/Icon_teaching'
import Icon_ribbon2 from '@/app/components/icons/Icon_ribbon2'
import Button from '@/app/components/Button'
import Link from 'next/link'
import { useStore } from 'zustand'
import signupStore from '@/utilities/store/signupStore'
import { useEffect } from 'react'

const Step1 = ({ activeStepParams, setcount }) => {
  const { accountType, setaccountType } = useStore(signupStore)
  console.log('accountType', accountType)

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem('signupStore'))
    if (!store?.state?.accountType) {
      setaccountType('brand')
    }
  }, [])

  const handleClick = (type) => {
    if (setcount) {
      setcount(1)
    }
    setaccountType(type)
  }
  return (
    <div
      className={`max-sm:py-5 ${
        !activeStepParams && activeStepParams !== '4' && 'md:h-full'
      } flex flex-col justify-center`}
    >
      <h3
        className={
          'max-sm:text-center font-oswald text-3xl md:text-[50px] leading-[51px] font-bold mb-9 max-sm:mt-3'
        }
      >
        SELECT ACCOUNT TYPE
      </h3>
      <div
        className={
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 mb-10 max-w-[708px]'
        }
      >
        {/* Athlete */}
        <div
          className={`p-3 md:p-5 rounded-md border-[1px] select-none cursor-pointer ${
            accountType === 'athlete'
              ? 'border-secondary'
              : 'border-neutral-300'
          } max-sm:flex max-sm:gap-2 max-sm:items-center`}
          onClick={() => handleClick('athlete')}
        >
          <Icon_running2
            className={`max-h-[66px] max-sm:min-w-[56px] max-sm:min-h-[56px] md:min-w-[66px] md:min-h-[66px] ${
              accountType === 'athlete' ? 'text-secondary' : 'text-neutral-300'
            } md:mb-8 md:mx-auto`}
          />
          <div className={'flex flex-col justify-center'}>
            <p
              className={
                'text-lg md:text-2xl font-oswald font-semibold md:text-center mb-[7px]'
              }
            >
              Athlete
            </p>
            <p
              className={
                'md:text-center text-neutral-500 w-full md:w-[80%] mx-auto leading-[19px]'
              }
            >
              Build and monetize your brand.
            </p>
          </div>
        </div>
        {/* Brand */}
        <div
          className={`p-3 md:p-5 rounded-md border-[1px] select-none cursor-pointer ${
            accountType === 'brand' ? 'border-secondary' : 'border-neutral-300'
          } max-sm:flex max-sm:gap-2 max-sm:items-center`}
          onClick={() => handleClick('brand')}
        >
          <Icon_ribbon2
            className={`max-h-[79px] size-[79px] mx-auto ${
              accountType === 'brand' ? 'text-secondary' : 'text-neutral-300'
            } -mt-2 md:mb-[27px]`}
          />
          <div className={'flex flex-col justify-center'}>
            <p
              className={
                'text-lg md:text-2xl font-oswald font-semibold md:text-center mb-[7px]'
              }
            >
              Brand
            </p>
            <p
              className={
                'md:text-center text-neutral-500 mx-auto leading-[19px]'
              }
            >
              Browse & book athletes to promote your business.
            </p>
          </div>
        </div>
        {/* Coach/staff */}
        <div
          className={`p-3 md:p-5 rounded-md border-[1px] select-none cursor-pointer ${
            accountType === 'coach' ? 'border-secondary' : 'border-neutral-300'
          } max-sm:flex max-sm:gap-2 max-sm:items-center`}
          onClick={() => handleClick('coach')}
        >
          <Icon_teaching
            className={`max-h-[66px] min-w-[56px] min-h-[56px] lg:min-w-[66px] lg:min-h-[66px] mx-auto ${
              accountType === 'coach' ? 'text-secondary' : 'text-neutral-300'
            } md:mb-8`}
          />
          <div className={'flex flex-col justify-center'}>
            <p
              className={
                'text-lg md:text-2xl font-oswald font-semibold md:text-center mb-[7px]'
              }
            >
              Coach/staff
            </p>
            <p
              className={
                'md:text-center text-neutral-500 mx-auto leading-[19px]'
              }
            >
              Share and receive content to engage your audience.
            </p>
          </div>
        </div>
      </div>
      {!activeStepParams && activeStepParams !== '4' && (
        <div className={'w-fit'}>
          <Link href={'/signup?step=2'}>
            <Button className="max-sm:mb-5">CONTINUE</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Step1
