import React, { useEffect, useRef, useState } from 'react'
import ModuleContainer from './ModuleContainer'
import { useStore } from 'zustand'
import buildStore from '@/utilities/store/buildStore'
import Icon_up from '@/app/components/icons/Icon_up'
import Icon_down from '@/app/components/icons/Icon_down'

const Details = () => {
  const { dealName, brief, expirationDate } = useStore(buildStore)
  const [isViewMore, setisViewMore] = useState(false)
  const briefRef = useRef(null)
  const [Height, setHeight] = useState(null)

  useEffect(() => {
    if (briefRef?.current) {
      setHeight(briefRef?.current?.offsetHeight)
    }
  }, [])

  const handleViewMore = () => {
    setisViewMore(() => !isViewMore)
  }
  return (
    <ModuleContainer step={'details'} title={'Details'}>
      <div className={'flex flex-col gap-3'}>
        <div
          className={`flex flex-col gap-3 overflow-y-hidden ${
            !isViewMore && brief && brief !== '<p><br></p>'
              ? 'max-h-[197px] md:max-h-[197px]'
              : 'h-full'
          }`}
        >
          <div className={''}>
            <p className={'font-semibold'}>Offer name</p>
            {dealName ? (
              <p className={''}>{dealName}</p>
            ) : (
              <p className={'py-1 px-3 w-fit rounded-full bg-red-100'}>
                Required
              </p>
            )}
          </div>
          {brief && brief !== '<p><br></p>' ? (
            <div className={''}>
              <p className={'font-semibold'}>Brief</p>
              <div
                ref={briefRef}
                className={''}
                dangerouslySetInnerHTML={{ __html: brief }}
              />
            </div>
          ) : (
            <div className={''}>
              <p className={'font-semibold'}>Brief</p>
              <p className={'py-1 px-3 w-fit rounded-full bg-red-100'}>
                Required
              </p>
            </div>
          )}
        </div>

        <div className={'flex flex-col gap-5'}>
          {brief && brief !== '<p><br></p>' && Height > 190 && (
            <>
              {isViewMore ? (
                <p
                  onClick={handleViewMore}
                  className={
                    'font-semibold flex gap-2 items-center text-secondary cursor-default'
                  }
                >
                  View less <Icon_up />
                </p>
              ) : (
                <p
                  onClick={handleViewMore}
                  className={
                    'font-semibold flex gap-2 items-center text-secondary cursor-default'
                  }
                >
                  View more <Icon_down />
                </p>
              )}
            </>
          )}
          {expirationDate && (
            <div className={''}>
              <p className={'font-semibold'}>Expiration date</p>
              <p className={''}>{expirationDate}</p>
            </div>
          )}
        </div>
      </div>
    </ModuleContainer>
  )
}

export default Details
