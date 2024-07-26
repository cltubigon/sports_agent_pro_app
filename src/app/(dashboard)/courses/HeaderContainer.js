import React from 'react'

const HeaderContainer = ({ children }) => {
  return (
    <div
      className={
        'sticky top-[68px] md:top-0 lg:top-0 mt-[65px] md:mt-[unset] z-10 flex flex-row justify-between md:justify-between min-h-[69px] bg-white border-b-[1px] border-neutral-200 py-4 pl-5 pr-0 md:pl-5 md:pr-5'
      }
    >
      {children}
    </div>
  )
}

export default HeaderContainer
