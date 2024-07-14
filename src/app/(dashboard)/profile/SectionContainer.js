import React from 'react'

const SectionContainer = ({ children, ...props }) => {
  const { Icon, title } = props?.data
  return (
    <div className={'rounded-md mt-8 p-4 border-[1px] border-neutral-200'}>
      <div className={'flex items-center mb-4 gap-2'}>
        {Icon && <Icon />}
        {title ? (
          <p className={'font-bold'}>{title}</p>
        ) : (
          <p className={'font-bold'}>Title Placeholder</p>
        )}
      </div>
      {children}
    </div>
  )
}

export default SectionContainer
