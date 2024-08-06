'use client'
import React, { useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Icon_up from './icons/Icon_up'
import Icon_down from './icons/Icon_down'

// maxHeight must be in px | % | vh
const ViewMore = ({ children, className, maxHeight }) => {
  const [isOpen, setisOpen] = useState(null)
  const [Height, setHeight] = useState(null)
  const contentRef = useRef(null)

  const asdf = Height + 20 >= parseInt(maxHeight?.replace('px', ''))
  useEffect(() => {
    if (contentRef?.current?.offsetHeight) {
      setHeight(contentRef?.current?.offsetHeight)
    }
  }, [])
  console.log('Height, maxHeight', asdf, Height, maxHeight)
  const handleView = () => {
    setisOpen(!isOpen)
  }
  return (
    <div className={'flex flex-col gap-2'}>
      <div
        ref={contentRef}
        className={twMerge('relative overflow-y-hidden', className)}
        style={{ maxHeight: !isOpen && maxHeight }}
      >
        {children}
        {!isOpen && (
          <div
            className={`absolute bottom-0 left-0 w-full h-10 ${
              Height >= parseInt(maxHeight?.replace('px', '')) &&
              'bg-gradient-to-b from-transparent to-white'
            }`}
          />
        )}
      </div>
      {Height >= parseInt(maxHeight?.replace('px', '')) && (
        <div className={''}>
          {!isOpen ? (
            <p
              className={'flex gap-2 items-center cursor-default w-fit'}
              onClick={handleView}
            >
              View more <Icon_down />
            </p>
          ) : (
            <p
              className={'flex gap-2 items-center cursor-default w-fit'}
              onClick={handleView}
            >
              View less <Icon_up />
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default ViewMore
