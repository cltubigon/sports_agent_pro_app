import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Icon_eye_opened = forwardRef(function Icon_eye_opened(
  { className, ...props },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={twMerge('size-5', className)}
      {...props}
      ref={ref}
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  )
})

export default Icon_eye_opened
