import React, { forwardRef } from 'react'
import Icon_check2 from '../icons/Icon_check2'
import { twMerge } from 'tailwind-merge'

// defaultChecked={true}

// Example:
// <Checkbox id="savePassword" {...register('savePassword')}>
// Remember me
// </Checkbox>

const Checkbox = forwardRef(function Checkbox(
  { children, className, ...props },
  ref
) {
  return (
    <div className={'flex items-center justify-start'}>
      <input
        type="checkbox"
        className="peer appearance-none"
        ref={ref}
        {...props}
      />
      <div
        className={
          'peer-checked:hidden min-w-[25px] min-h-[25px] border-[1px] rounded-[5px] border-neutral-300 relative'
        }
      />
      <div
        className={
          'hidden peer-checked:block bg-primary min-w-[25px] min-h-[25px] border-[1px] rounded-[5px] border-neutral-300 relative'
        }
      >
        <Icon_check2
          className={
            'text-white absolute size-[14px] m-auto my-auto top-0 bottom-0 left-0 right-0'
          }
        />
      </div>
      <label
        htmlFor={props.id}
        className={twMerge('z-10 select-none pl-6 ml-[-16px]', className)}
      >
        {children}
      </label>
    </div>
  )
})

export default Checkbox
