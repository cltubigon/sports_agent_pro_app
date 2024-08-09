import HeaderContainer from '@/app/components/ThisWebsiteOnly/Dashboard/content-area/HeaderContainer'
import React from 'react'
import DrawerContainer from '../DrawerContainer'
import Header from '../Header'
import Opportunities from './Opportunities'
import MyApplicationsButton from './MyApplicationsButton'
import MySavedList from './MySavedList'

const AthleteOpportunities = ({ posts, user, account_type }) => {
  return (
    <div>
      <HeaderContainer>
        <Header posts={posts}>
          <div className={'flex flex-col w-full'}>
            <h3 className={'font-oswald text-2xl md:text-3xl font-bold'}>
              Listed opportunities
            </h3>
            <p className={'text-neutral-400'}>
              Based on your profile and interests
            </p>
          </div>
          <div className={'flex flex-row gap-2'}>
            <MyApplicationsButton />
            <MySavedList />
          </div>
        </Header>
      </HeaderContainer>
      <Opportunities posts={posts} />
      <DrawerContainer user={user} account_type={account_type} />
    </div>
  )
}

export default AthleteOpportunities
