'use client'
import React, { useState } from 'react'

// const menu = [
//   { name: 'Your Plan', value: 'your_plan' },
//   { name: '', value: 'spacer' },
// ]
{
  /* <DashboardContentMenu>Account</DashboardContentMenu> */
}

const DashboardContentMenu = ({ children, menu }) => {
  const [activeMenu, setactiveMenu] = useState(
    menu?.length > 0 ? menu[0]?.value : null
  )

  const handleClick = (value) => {
    if (value !== 'spacer') setactiveMenu(value)
  }
  return (
    <>
      <div className={'p-5 border-neutral-200 border-b-[1px]'}>
        <h2 className={'text-xl font-semibold text-primary'}>{children}</h2>
      </div>
      <div className={'flex overflow-x-auto'}>
        {menu?.map((item, index) => {
          const { name, value } = item
          return (
            <div
              className={`border-r-[1px] select-none cursor-default last:border-r-0 ${
                activeMenu !== value &&
                value !== 'spacer' &&
                'hover:bg-neutral-100'
              } ${
                activeMenu !== value &&
                'border-neutral-200 border-b-[1px] bg-neutral-50'
              } ${value === 'spacer' ? 'w-full hidden md:block' : 'min-w-fit'}`}
              onClick={() => handleClick(value)}
              key={index}
            >
              <p className={'p-5'}>{name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default DashboardContentMenu
