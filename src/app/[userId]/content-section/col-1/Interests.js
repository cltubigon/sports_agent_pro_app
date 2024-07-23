'use client'
import React, { useState } from 'react'
import Icon_check3 from '@/app/components/icons/Icon_check3'
import Icon_down from '@/app/components/icons/Icon_down'
import Icon_up from '@/app/components/icons/Icon_up'

const AthleteInterests = ({ person }) => {
  const [showMore, setshowMore] = useState(false)

  const handleClick = () => {
    setshowMore(() => !showMore)
  }
  return (
    <div className={'py-6'}>
      <p className={'font-bold mb-6'}>Interests</p>
      <div
        className={`flex overflow-hidden flex-wrap ${
          !showMore && 'max-h-[115px]'
        } transition-all duration-700`}
      >
        {person?.identifiersInterests?.map((item, index) => {
          const { name } = item
          return (
            <div
              key={index}
              className={'min-w-[50%] flex py-1 gap-5 items-center'}
            >
              <Icon_check3 className="text-secondary-300" />
              <p className={'text-sm'}>{name}</p>
            </div>
          )
        })}
      </div>
      {person?.identifiersInterests?.length > 8 && (
        <div
          className={`flex select-none gap-1 items-center cursor-pointer w-fit pt-4`}
          onClick={handleClick}
        >
          <p className={'text-secondary-600 text-sm font-bold'}>Show more</p>
          {!showMore && <Icon_down className={'text-secondary-500 size-4'} />}
          {showMore && <Icon_up className={'text-secondary-500 size-4'} />}
        </div>
      )}
    </div>
  )
}

export default AthleteInterests
