import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Icon_user2 = forwardRef(function Icon_user2(
  { className, ...props },
  ref
) {
  return (
    <svg
      viewBox="0 0 252 231"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge('size-4', className)}
      {...props}
      ref={ref}
    >
      <g clipPath="url(#clip0_104_2)">
        <ellipse
          cx="126.5"
          cy="283.5"
          rx="139.5"
          ry="156.5"
          fill="currentColor"
        />
        <circle cx="126.5" cy="61.5" r="60.5" fill="currentColor" />
      </g>
    </svg>
  )
})

export default Icon_user2
