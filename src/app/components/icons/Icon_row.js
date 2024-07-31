import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Icon_row = forwardRef(function Icon_row({ className, ...props }, ref) {
  return (
    <svg
      viewBox="0 0 14 14"
      className={twMerge('size-5', className)}
      {...props}
      ref={ref}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1Zm1 0h12v4H1V1ZM0 9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V9Zm1 0h12v4H1V9Z"
      ></path>
    </svg>
  )
})

export default Icon_row
