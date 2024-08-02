import React from 'react'
import ModuleContainer from './ModuleContainer'
import { useStore } from 'zustand'
import buildStore from '@/utilities/store/buildStore'
import { listDealType } from '../deal-type/list'

const DealType = () => {
  const { dealType } = useStore(buildStore)
  console.log('listDealType', listDealType)
  return (
    <ModuleContainer step={'deal_type'} title={'Deal Type'}>
      {listDealType?.map((item, index) => {
        const { Icon, title, description } = item
        return (
          <div key={index}>
            {item.value === dealType && (
              <div className={'flex gap-5 items-center'}>
                <div
                  className={
                    'flex min-w-[64px] min-h-[64px] justify-center items-center rounded-full bg-secondary-100'
                  }
                >
                  <Icon className="size-7" />
                </div>
                <div className={''}>
                  <p className={'text-lg font-bold'}>{title}</p>
                  <p className={'text-neutral-600'}>{description}</p>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </ModuleContainer>
  )
}

export default DealType
