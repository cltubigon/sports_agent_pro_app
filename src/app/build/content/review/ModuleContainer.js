import buildStore from '@/utilities/store/buildStore'
import React from 'react'
import { useStore } from 'zustand'

const ModuleContainer = ({ children, title, step }) => {
  const { setactiveStep } = useStore(buildStore)
  const handleEdit = () => {
    setactiveStep(step)
  }
  return (
    <div className="flex flex-col p-3 md:p-4 border-[1px] rounded-md w-full">
      <div
        className={'flex justify-between items-center pt-2 pb-4 border-b-[1px]'}
      >
        <p className={'md:text-xl text-neutral-500 font-semibold'}>{title}</p>
        <p
          onClick={handleEdit}
          className={
            'max-sm:text-sm cursor-default font-semibold text-secondary'
          }
        >
          Edit
        </p>
      </div>
      <div className={'flex flex-col pt-8 pb-4'}>{children}</div>
    </div>
  )
}

export default ModuleContainer
