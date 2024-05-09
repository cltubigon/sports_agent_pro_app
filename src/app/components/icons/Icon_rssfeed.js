import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Icon_rssfeed = forwardRef(function Icon_rssfeed(
  { className, ...props },
  ref
) {
  return (
    <svg
      className={twMerge('size-5', className)}
      {...props}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M0 64C0 46.3 14.3 32 32 32c229.8 0 416 186.2 416 416c0 17.7-14.3 32-32 32s-32-14.3-32-32C384 253.6 226.4 96 32 96C14.3 96 0 81.7 0 64zM0 416a64 64 0 1 1 128 0A64 64 0 1 1 0 416zM32 160c159.1 0 288 128.9 288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-123.7-100.3-224-224-224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
      />
    </svg>
  )
})

export default Icon_rssfeed
