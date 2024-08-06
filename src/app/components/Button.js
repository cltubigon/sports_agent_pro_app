import { openSans } from '@/utilities/fonts/fonts'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

const variants = {
  dark: `leading-[22px] flex gap-2 items-center justify-center w-fit h-fit text-sm rounded-[5px] font-bold text-white px-[38px] py-2 bg-primary hover:bg-primary-700 transition-all duration-300 ${openSans.className} active:bg-primary-800`,
  button2: `leading-[22px] flex gap-2 items-center justify-center h-fit text-sm rounded-[5px] font-semibold px-[38px] py-2 border-[1px] border-primary bg-white md:hover:bg-primary-100 active:bg-primary-100 text-primary transition-all duration-300 ${openSans.className}`,
  button3: `leading-[22px] flex gap-2 items-center justify-center w-fit h-fit text-sm rounded-[5px] font-bold h-[48px] text-white px-[38px] py-2 bg-primary hover:bg-primary-700 transition-all duration-300 ${openSans.className} active:bg-primary-800`,
  light: `leading-[22px] flex gap-2 items-center justify-center h-fit text-sm rounded-[5px] font-semibold px-[17px] py-2 bg-white hover:bg-neutral-200 text-black transition-all duration-300 ${openSans.className}`,
}
const sizes = {
  default: `h-12 md:h-[63px]`,
  size2: `h-10 md:h-12`,
}

const Button = forwardRef(function Button(
  { children, className, variant, size, ...props },
  ref
) {
  const variation = variant
    ? variants[variant?.toLowerCase()]
    : variants['dark']
  const varSize = size ? sizes[size.toLowerCase()] : sizes['default']
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
