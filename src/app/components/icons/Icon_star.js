import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Icon_star = forwardRef(function Icon_star({ className, ...props }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={twMerge('size-5', className)}
      {...props}
      ref={ref}
    >
      <path
        fill="currentColor"
        d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"
      />
    </svg>
  )
})

export default Icon_star
