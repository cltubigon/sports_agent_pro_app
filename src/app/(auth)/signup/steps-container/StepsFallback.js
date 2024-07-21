import React from 'react'

const StepsFallback = () => {
  return (
    <div className="py-10 flex flex-col gap-10">
      <div className={'w-full flex flex-col gap-2 justify-start'}>
        <div
          className={
            'w-[70%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
          }
        />
        <div
          className={
            'w-[47%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
          }
        />
        <div
          className={
            'w-[42%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
          }
        />
      </div>
      <div className={'w-[60%] flex flex-col gap-2 justify-start'}>
        <div
          className={
            'w-[70%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
          }
        />
        <div
          className={
            'w-[47%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
          }
        />
        <div
          className={
            'w-[42%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
          }
        />
      </div>
      <div className={'w-[80%] flex flex-col gap-2 justify-start'}>
        <div
          className={
            'w-[70%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
          }
        />
        <div
          className={
            'w-[47%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
          }
        />
        <div
          className={
            'w-[42%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
          }
        />
      </div>
    </div>
  )
}

export default StepsFallback
