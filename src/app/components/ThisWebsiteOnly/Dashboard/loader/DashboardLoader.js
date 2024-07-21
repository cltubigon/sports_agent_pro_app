import React from 'react'
import ContentContainerDashboard from '../ContentContainerDashboard'
import DashboardContentMenu from '../DashboardContentMenu'

const DashboardLoader = () => {
  const menu = [
    { name: 'Profile', value: 'profile' },
    { name: '', value: 'spacer' },
  ]
  return (
    <ContentContainerDashboard>
      <div className={'px-5 py-[30px]'}>
        <div
          className={
            'w-[155px] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
          }
        />
      </div>
      <div
        className={'px-5 py-[30px] bg-neutral-50 border-t-[1px] border-b-[1px]'}
      >
        <div
          className={
            'w-[100px] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
          }
        />
      </div>
      {/* // Content */}
      <div className={'flex flex-col gap-10 min-h-[40vh] py-10'}>
        <div className={'px-5 flex flex-col gap-2'}>
          <div
            className={
              'max-w-[25%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
          <div
            className={
              'max-w-[20%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
          <div
            className={
              'max-w-[15%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
        </div>
        <div className={'px-5 flex flex-col gap-2'}>
          <div
            className={
              'max-w-[16%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
          <div
            className={
              'max-w-[19%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
          <div
            className={
              'max-w-[14%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
        </div>
        <div className={'px-5 flex flex-col gap-2'}>
          <div
            className={
              'max-w-[25%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
          <div
            className={
              'max-w-[20%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
          <div
            className={
              'max-w-[15%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
        </div>
        <div className={'px-5 flex flex-col gap-2'}>
          <div
            className={
              'max-w-[16%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
          <div
            className={
              'max-w-[19%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
          <div
            className={
              'max-w-[14%] bg-gradient-to-r from-neutral-50 to-neutral-200 animate-pulse h-2 rounded-md'
            }
          />
        </div>
      </div>
    </ContentContainerDashboard>
  )
}

export default DashboardLoader
