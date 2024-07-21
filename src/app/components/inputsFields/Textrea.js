import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Textarea = forwardRef(function Textarea(
  { children, className, variant, ...props },
  ref
) {
  const defaultStyle =
    'py-[6px] px-3 w-full text-[16px] text-[#222] rounded-[5px] border-[1px] border-neutral-300 placeholder:text-neutral-400 focus-visible:outline-none'
  return (
    <div>
      <textarea
        ref={ref}
        rows={props?.rows || '3'}
        placeholder={props?.placeholder || 'Type here'}
        className={twMerge(
          defaultStyle,
          'mb-[-6px]',
          className,
          props?.error && 'border-red-500'
        )}
        {...props}
      />
      {props?.error && (
        <p className="text-red-500 pl-3 my-1 bg-red-100 py-1 w-fit px-4 mb-2 rounded-sm">
          {props?.error}
        </p>
      )}
    </div>
  )
})

export default Textarea
