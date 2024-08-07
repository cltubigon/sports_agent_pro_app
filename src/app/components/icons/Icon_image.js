import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Icon_image = forwardRef(function Icon_image(
  { className, ...props },
  ref
) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={twMerge('size-5', className)}
      {...props}
      ref={ref}
    >
      <path
        d="M13.5 9c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM13.5 5c-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5 1.5-0.673 1.5-1.5-0.673-1.5-1.5-1.5z"
        fill="currentColor"
      ></path>
      <path
        d="M18.5 0h-17c-0.827 0-1.5 0.673-1.5 1.5v17c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-17c0-0.827-0.673-1.5-1.5-1.5zM1 18.5v-4.807l4.197-4.617c0.085-0.093 0.196-0.145 0.314-0.147s0.231 0.048 0.318 0.139l9.5 9.932h-13.83c-0.276 0-0.5-0.224-0.5-0.5zM19 18.5c0 0.276-0.224 0.5-0.5 0.5h-1.786l-10.161-10.623c-0.281-0.294-0.655-0.452-1.053-0.447s-0.768 0.173-1.042 0.474l-3.457 3.803v-10.707c0-0.276 0.224-0.5 0.5-0.5h17c0.276 0 0.5 0.224 0.5 0.5v17z"
        fill="currentColor"
      ></path>
    </svg>
  )
})

export default Icon_image
