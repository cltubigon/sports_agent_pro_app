import React from 'react'
import ModuleContainer from './ModuleContainer'
import { useStore } from 'zustand'
import buildStore from '@/utilities/store/buildStore'
import Image from 'next/image'

const Activities = () => {
  const { selectedActivities } = useStore(buildStore)
  console.log('selectedActivities', selectedActivities)
  return (
    <ModuleContainer step={'activities'} title={'Activities'}>
      <div className={'flex gap-3 flex-col divide-y-[1px] divide-neutral-50'}>
        {selectedActivities?.map((item, index) => {
          const { name, img } = item
          return (
            <div className={'flex'} key={index}>
              <div
                className={
                  'flex flex-col md:flex-row justify-between w-full md:items-center'
                }
              >
                <div className={'flex gap-3 items-center'}>
                  <Image
                    src={img}
                    alt="Activity"
                    quality={100}
                    className="size-8 min-w-8 min-h-8 md:size-12 md:min-w-12 md:min-h-12"
                  />
                  <div className={''}>
                    <p className={'max-sm:text-sm'}>{name}</p>
                    <p className={'text-sm text-neutral-500'}>
                      {item?.compensation}
                    </p>
                  </div>
                </div>
                {item?.date && (
                  <p className={'text-neutral-500 text-sm'}>
                    Due by: {item?.date}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </ModuleContainer>
  )
}

export default Activities
