/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import Icon_close from './icons/Icon_close'
import { twMerge } from 'tailwind-merge'

//IMPORTANT
// const [popup, setpopup] = useState(null) ---> Must be present in the parent component

// Then import it like:
// {popup && <Popup data={{ setpopup, bgNotClickable:true }}></Popup>}

// STYLING For modalContainer
// Example: data={{ modalContainer: 'max-w-[652px]' }}
// STYLING For contentContainer
// Example: data={{ contentContainer: 'text-primary' }}

const Popup = ({ children, ...props }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)
  const setBodyStyle = () => {
    document.body.style.overflow = 'hidden'
    if (isDesktop && !props?.data?.noScrollbar) {
      // noScrollbar
      document.body.style.marginRight = '15px'
    }
  }
  const unmountFunction = () => {
    document.body.style.overflow = ''
    document.body.style.marginRight = ''
  }

  useEffect(() => {
    setBodyStyle()
    window.addEventListener('resize', () =>
      setIsDesktop(window.innerWidth >= 768)
    )
    return unmountFunction // Cleanup function to run before unmount
  }, [])

  const bgClose = (e) => {
    e.stopPropagation()
    if (!props.data?.bgNotClickable) {
      props.data?.setpopup(false)
    }
  }
  const handleClose = (e) => {
    e.stopPropagation()
    props.data?.setpopup(false)
  }
  const handleContentClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div
      className={twMerge(
        'flex fixed left-0 py-4 md:py-10 px-2 top-0 w-full h-screen max-h-screen bg-neutral-500 bg-opacity-25 backdrop-blur-sm overflow-y-auto z-[991]',
        props?.className
      )}
      onClick={bgClose}
    >
      <div
        onClick={handleContentClick}
        className={twMerge(
          'flex my-auto relative min-h-10 w-full max-w-[552px] h-fit bg-white mx-auto rounded-md overflow-hidden shadow-xl',
          props?.data?.modalContainer
        )}
      >
        <Icon_close
          onClick={handleClose}
          className={twMerge(
            'absolute z-50 top-3 right-3 box-content',
            props?.data?.icon
          )}
        />
        <div className={twMerge('flex w-full', props?.data?.contentContainer)}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Popup
