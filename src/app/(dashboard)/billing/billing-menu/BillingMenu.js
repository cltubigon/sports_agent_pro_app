'use client'
import React, { useState } from 'react'

const BillingMenu = () => {
  const [activeMenu, setactiveMenu] = useState('your_plan')

  const handleClick = (value) => {
    if (value !== 'spacer') setactiveMenu(value)
  }
  const menu = [
    { name: 'Your Plan', value: 'your_plan' },
    { name: '', value: 'spacer' },
  ]
  console.log('activeMenu', activeMenu)
  return (
    <div className={'flex overflow-x-auto'}>
      {menu.map((item, index) => {
        const { name, value } = item
        return (
          <div
            className={`border-r-[1px] select-none cursor-default last:border-r-0 ${
              activeMenu !== value &&
              value !== 'spacer' &&
              'hover:bg-neutral-100'
            } ${
              activeMenu !== value &&
              'border-neutral-300 border-b-[1px] bg-neutral-50'
            } ${value === 'spacer' ? 'w-full hidden md:block' : 'min-w-fit'}`}
            onClick={() => handleClick(value)}
            key={index}
          >
            <p className={'p-5'}>{name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default BillingMenu
