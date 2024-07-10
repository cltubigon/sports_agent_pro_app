import React from 'react'

const SectionContainer = ({ children, ...props }) => {
  return (
    <div className={'rounded-md mt-8 p-4 border-[1px] border-neutral-200'}>
      <p className={'font-bold mb-4'}>{props?.data?.title}</p>
      {children}
    </div>
  )
}

export default SectionContainer
