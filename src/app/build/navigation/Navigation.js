import React from 'react'
import { navList } from './list'
import Icon_check2 from '@/app/components/icons/Icon_check2'

const Navigation = () => {
  return (
    <>
      <div className={'flex flex-col gap-3 mt-10'}>
        {navList.map((item, index) => {
          const { name } = item
          return (
            <div key={index} className={'flex gap-5'}>
              <div className={'relative size-5 rounded-full border-[1px]'}>
                <Icon_check2 className="size-3 absolute top-0 right-0 left-0 bottom-0 m-auto" />
              </div>
              <div className={''}>
                <p className={'text-[15px]'}>{name}</p>
                <p className={'text-sm'}>Incomplete</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Navigation
