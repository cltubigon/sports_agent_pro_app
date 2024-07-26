import React from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={twMerge(
        'w-full overflow-hidden border-[1px] bg-white border-neutral-200 rounded-md relative',
        props?.className
      )}
    >
      {children}
    </div>
  )
}

export default Card
