import Button from '@/app/components/Button'
import HeaderContainer from '@/app/components/ThisWebsiteOnly/Dashboard/content-area/HeaderContainer'
import Link from 'next/link'
import React from 'react'
import Header from '../Header'
import { getCookie } from '@/utilities/actions/cookieActions'
import Opportunities from '../Opportunities'

const BrandOpportunities = async ({ posts, account_type }) => {
  const activePostId = await getCookie('drawerPostId')
  return (
    <div>
      <HeaderContainer>
        <Header>
          <div className={'flex flex-col'}>
            <h3 className={'font-oswald text-2xl md:text-3xl font-bold'}>
              My Opportunities
            </h3>
          </div>
          <div className={'w-fit'}>
            <Link href={'/build'} prefetch>
              <Button className="h-[53px]">Build Opportunity</Button>
            </Link>
          </div>
        </Header>
      </HeaderContainer>
      <Opportunities
        posts={posts}
        account_type={account_type}
        activePostId={activePostId}
      />
    </div>
  )
}

export default BrandOpportunities
