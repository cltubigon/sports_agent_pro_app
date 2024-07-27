import Button from '@/app/components/Button'
import HeaderContainer from '@/app/components/ThisWebsiteOnly/Dashboard/content-area/HeaderContainer'
import Link from 'next/link'
import React from 'react'

const OpportunitiesPage = () => {
  return (
    <div>
      <HeaderContainer>
        <h3 className={'font-oswald text-2xl md:text-3xl font-bold'}>
          My Opportunities
        </h3>
        <div className={'w-fit'}>
          <Link href={'/build'} prefetch>
            <Button className="h-[53px]">Build Opportunity</Button>
          </Link>
        </div>
      </HeaderContainer>
    </div>
  )
}

export default OpportunitiesPage
