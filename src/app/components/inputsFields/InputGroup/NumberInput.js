import { forwardRef } from 'react'
import { NumericFormat } from 'react-number-format'
import { twMerge } from 'tailwind-merge'

const variants = {
  default:
    'py-[10px] px-3 w-full text-[16px] h-[62px] text-neutral-900 rounded-lg border-[1px] border-neutral-200 outline-none focus-visible:border-secondary',
}

const NumberInput = forwardRef(function NumberInput(
  { children, className, variant, ...props },
  ref
) {
  const variation = variant
    ? variants[variant?.toLowerCase()]
    : variants['default']
  return (
    <>
      <NumericFormat
        ref={ref}
        // prefix={'$'}                 // Optional
        decimalScale={2}
        thousandSeparator=","
        fixedDecimalScale={true}
        allowNegative={false}
        placeholder="Enter amount"
        className={twMerge(
          variation,
          'peer w-full relative',
          'group-data-[icon=right]/input:pr-10', //  data-icon="right"
          'group-data-[icon=left]/input:pl-10', //  data-icon="left"
          'group-data-[icon=leftright]/input:px-10', //  data-icon="leftright"
          className,
          props?.error && 'border-red-500'
        )}
        {...props}
      />
      {props?.error && (
        <p className="absolute top-0 bottom-0 my-1 right-1 text-red-500 z-10 pl-3 leading-[22px] bg-red-100 py-[2px] w-fit px-4 rounded-md flex items-center">
          {props?.error}
        </p>
      )}
    </>
  )
})

export default NumberInput
