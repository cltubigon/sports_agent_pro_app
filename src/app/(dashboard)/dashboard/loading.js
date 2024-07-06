'use client'
import ContentContainerDashboard from '@/app/components/ThisWebsiteOnly/Dashboard/ContentContainerDashboard'
import React from 'react'

const DashboardLoading = () => {
  return (
    <ContentContainerDashboard>
      <div className={'w-full'}>
        <h2
          className={
            'text-xl font-semibold w-fit select-none text-transparent bg-neutral-200 animate-pulse'
          }
        >
          Dashboard
        </h2>
        <p
          className={
            'w-fit mt-1 select-none text-transparent bg-neutral-200 animate-pulse'
          }
        >
          In aliquid quia id provident optio et iure quae? Hic cumque internos
          qui quis dolores ut dolor explicabo et voluptatem ullam qui dolorum
          enim qui perspiciatis animi in dolores voluptas.
        </p>
      </div>
    </ContentContainerDashboard>
  )
}

export default DashboardLoading
