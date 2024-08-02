import React from 'react'

const Loader = ({ isColumn }) => {
  return (
    <>
      {new Array(10).fill('').map((item, index) => {
        return (
          <div
            key={index}
            className={`flex gap-5 px-7 py-[8px] ${
              !isColumn ? 'flex-row' : 'flex-col'
            }`}
          >
            <div className={'flex items-center gap-5'}>
              <div
                className={
                  'max-w-6 max-h-6 min-w-6 min-h-6 bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
                }
              />
              <div
                className={
                  'max-w-12 max-h-12 min-w-12 min-h-12 bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-full'
                }
              />
            </div>
            <div className={'flex flex-col gap-2 w-full justify-center'}>
              <div
                className={
                  'w-full  max-w-[240px] bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
                }
              />
              <div
                className={
                  'w-full max-w-[340px] bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
                }
              />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Loader
