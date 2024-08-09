import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Icon_cards = forwardRef(function Icon_cards(
  { className, ...props },
  ref
) {
  return (
    <svg
      viewBox="0 0 18 16"
      className={twMerge('size-5', className)}
      {...props}
      ref={ref}
      fill="currentColor"
    >
      <path d="M.609 4.729a.667.667 0 0 0-.338.88l1.966 4.415a.5.5 0 1 0 .914-.406L1.32 5.507l.456-.204a.5.5 0 1 0-.407-.913l-.761.339ZM3.185 2.234a.664.664 0 0 0-.046.418l1.836 8.64a.5.5 0 0 0 .978-.207L4.186 2.77l1.467-.312a.5.5 0 1 0-.208-.978l-1.793.381a.664.664 0 0 0-.467.373Z"></path>
      <path d="M7 1a1 1 0 0 1 1-1v16a1 1 0 0 1-1-1V1Z"></path>
      <path d="M7 15h11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1Z"></path>
      <path d="M17 0a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1V0Z"></path>
      <path d="M7 1a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1H7Z"></path>
      <rect x="10" y="12" width="5" height="1" rx=".5"></rect>
      <rect x="10" y="7" width="3" height="1" rx=".5"></rect>
      <rect x="10" y="5" width="5" height="1" rx=".5"></rect>
      <rect x="10" y="3" width="5" height="1" rx=".5"></rect>
    </svg>
  )
})

export default Icon_cards
