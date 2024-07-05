import { openSans } from '@/utilities/fonts/fonts'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const variants = {
  dark: `leading-[22px] flex gap-2 items-center justify-center w-fit h-fit text-sm rounded-[5px] font-semibold text-white px-[17px] py-2 bg-primary hover:bg-primary-700 transition-all duration-300 ${openSans.className} active:bg-primary-800`,
  button2: `leading-[22px] flex gap-2 items-center justify-center h-fit text-sm rounded-[5px] font-semibold px-[17px] py-[7px] border-[1px] border-primary bg-white hover:bg-primary hover:text-white text-primary transition-all duration-300 ${openSans.className}`,
  light: `leading-[22px] flex gap-2 items-center justify-center h-fit text-sm rounded-[5px] font-semibold px-[17px] py-2 bg-white hover:bg-neutral-200 text-black transition-all duration-300 ${openSans.className}`,
}
const sizes = {
  md: `leading-[22px] font-semibold w-[230px] py-3`,
}

const Button = forwardRef(function Button(
  { children, className, variant, size, ...props },
  ref
) {
  const variation = variant
    ? variants[variant?.toLowerCase()]
    : variants['dark']
  const varSize = size ? sizes[size.toLowerCase()] : ''
  return (
    <button
      type={props.type || 'button'}
      ref={ref}
      className={twMerge(variation, varSize, className)}
      {...props}
    >
      {children}
    </button>
  )
})

export default Button
