import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Icon_LinkedIn2 = forwardRef(function Icon_LinkedIn2(
  { className, ...props },
  ref
) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge('size-5', className)}
      {...props}
      ref={ref}
    >
      <path
        d="M0.309677 16H3.40645V4.9H0.309677V16ZM1.85806 0C0.825806 0 0 0.8 0 1.8C0 2.8 0.825806 3.6 1.85806 3.6C2.89032 3.6 3.71613 2.8 3.71613 1.8C3.71613 0.8 2.89032 0 1.85806 0ZM8.67097 6.6V4.9H5.57419V16H8.67097V10.3C8.67097 7.1 12.9032 6.9 12.9032 10.3V16H16V9.2C16 3.8 10.1161 4 8.67097 6.6Z"
        fill="currentColor"
      />
    </svg>
  )
})

export default Icon_LinkedIn2
