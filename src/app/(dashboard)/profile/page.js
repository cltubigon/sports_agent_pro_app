import ContentContainerDashboard from '@/app/components/ThisWebsiteOnly/Dashboard/ContentContainerDashboard'
import DashboardContentMenu from '@/app/components/ThisWebsiteOnly/Dashboard/DashboardContentMenu'
import React, { Suspense } from 'react'
import BasicInfo from './BasicInfo'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import { capitalizeAllFirstLetter } from '@/utilities/capitalizeAllFirstLetter'
import AboutYou from './AboutYou'
import ViewProfileButton from './ViewProfileButton'
import AthleticProfileSection from './AthleticProfileSection'
import Locations from './Locations'
import Media from './Media'
import LoadingComponent from '@/app/components/LoadingComponent'
import { fetchGalleryImages } from './actions'
import ProfilePicture from './profile-picture/ProfilePicture'

const ProfilePage = async () => {
  const user = await getCurrentUser()
  const images = await fetchGalleryImages(user)

  const menu = [
    { name: 'Profile', value: 'profile' },
    { name: '', value: 'spacer' },
  ]
  return (
    <ContentContainerDashboard>
      <DashboardContentMenu menu={menu}>Account</DashboardContentMenu>
      <div className={'p-5'}>
        {/* Profile Pic */}
        <div className={'flex flex-col md:flex-row md:justify-between gap-2'}>
          <div className={'flex gap-5 items-center'}>
            <ProfilePicture user={user} images={images} />
            <div className={''}>
              <h5 className={'font-tinos text-xl md:text-2xl font-bold'}>
                {capitalizeAllFirstLetter(
                  `${user?.firstName || ''} ${user?.lastName || ''}`
                )}
              </h5>
              <p className={''}>
                {user?.whichBestDescribesYou?.length > 0 &&
                  user?.whichBestDescribesYou[0]?.name}
              </p>
              <ViewProfileButton className={'flex md:hidden mt-2'} />
            </div>
          </div>
          <ViewProfileButton className={'hidden md:flex'} />
        </div>

        {/* Basic Info */}
        <BasicInfo user={user} />
        {/* About You */}
        <AboutYou user={user} />
        {/* Media */}
        <Suspense fallback={<LoadingComponent />}>
          <Media user={user} images={images} />
        </Suspense>
        {/* Locations */}
        <Locations user={user} />
        {/* Athletic Profile */}
        <AthleticProfileSection user={user} />
      </div>
    </ContentContainerDashboard>
  )
}

export default ProfilePage
