import React from 'react'
import Icon_left from '../icons/Icon_left'
import Icon_right from '../icons/Icon_right'
import { twMerge } from 'tailwind-merge'

const CustomNavigation = ({
  className,
  parameters: { handlePrev, handleNext },
}) => {
  return (
    <>
      <div
        onClick={handlePrev}
        className={twMerge(
          'absolute cursor-pointer top-0 bottom-0 p-2 rounded-full bg-black bg-opacity-10 w-fit h-fit shadow-md z-40 my-auto left-[10px] hidden group-hover/swiper:block select-none',
          //   required to add group-swiper
          //   in the wrapper
          className
        )}
      >
        <Icon_left className="size-8 text-white" />
      </div>
      <div
        onClick={handleNext}
        className={twMerge(
          'absolute cursor-pointer top-0 bottom-0 p-2 rounded-full bg-black bg-opacity-10 w-fit h-fit shadow-md z-40 my-auto right-[10px] hidden group-hover/swiper:block  select-none',
          //   add group-swiper
          //   in the wrapper
          className
        )}
      >
        <Icon_right className="size-8 text-white" />
      </div>
    </>
  )
}

export default CustomNavigation
