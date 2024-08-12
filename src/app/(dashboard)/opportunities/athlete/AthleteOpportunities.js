import HeaderContainer from '@/app/components/ThisWebsiteOnly/Dashboard/content-area/HeaderContainer'
import Header from '../Header'
import Opportunities from '../Opportunities'
import MyApplicationsButton from './MyApplicationsButton'
import MySavedList from './MySavedList'
import { getCookie } from '@/utilities/actions/cookieActions'

const AthleteOpportunities = async ({ posts, account_type }) => {
  const activePostId = await getCookie('drawerPostId')
  return (
    <div>
      <HeaderContainer>
        <Header>
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
      <Opportunities
        posts={posts}
        account_type={account_type}
        activePostId={activePostId}
      />
    </div>
  )
}

export default AthleteOpportunities
