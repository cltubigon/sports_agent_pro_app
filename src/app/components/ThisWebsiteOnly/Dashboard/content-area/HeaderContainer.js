/* eslint-disable react-hooks/exhaustive-deps */
import { twMerge } from 'tailwind-merge'

const HeaderContainer = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        'max-sm:mt-[68px] w-full py-5 border-b-[1px] border-neutral-200 bg-white px-5 flex items-center justify-between',
        className
      )}
    >
      {children}
    </div>
  )
}

export default HeaderContainer
