import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Icon_facebook2 = forwardRef(function Icon_facebook2(
  { className, ...props },
  ref
) {
  return (
    <svg
      className={twMerge('size-5', className)}
      {...props}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path
        fill="currentColor"
        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
      />
    </svg>
  )
})

export default Icon_facebook2
