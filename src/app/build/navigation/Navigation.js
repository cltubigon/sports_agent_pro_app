'use client'
import React from 'react'
import Icon_check2 from '@/app/components/icons/Icon_check2'
import { useStore } from 'zustand'
import buildStore from '@/utilities/store/buildStore'

const Navigation = ({ isOpen }) => {
  const { activeStep, list, dealType, setactiveStep } = useStore(buildStore)
  const newList =
    dealType !== 'offer' ? [...list.slice(0, 2), ...list.slice(3, 6)] : list
  const handleChangeActiveStep = (step) => {
    setactiveStep(step)
  }
  return (
    <>
      <div
        className={`flex flex-col gap-3 mt-10 w-fit ${
          !isOpen ? 'mx-auto' : 'max-sm:mx-auto md:mr-auto'
        }`}
      >
        {newList.map((item, index) => {
          const { id, name, isOK } = item
          return (
            <div
              key={index}
              className={`flex gap-2 md:gap-5`}
              onClick={() => handleChangeActiveStep(id)}
            >
              <div
                className={`relative min-w-6 min-h-6 max-w-6 max-h-6 rounded-full border-[1px] ${
                  isOK && 'bg-white text-secondary'
                } `}
              >
                {isOK ? (
                  <Icon_check2 className="size-3 absolute top-0 right-0 left-0 bottom-0 m-auto" />
                ) : (
                  <p
                    className={
                      'absolute w-fit h-fit top-0 right-0 left-0 bottom-0 m-auto'
                    }
                  >
                    {index + 1}
                  </p>
                )}
              </div>
              <div
                className={`max-sm:hidden cursor-default ${
                  !isOpen && 'hidden'
                } ${activeStep === id && 'font-bold'}`}
              >
                <p className={'text-sm md:text-[15px]'}>{name}</p>
                <p className={'text-xs md:text-sm'}>
                  {isOK ? 'Complete' : 'Incomplete'}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Navigation
