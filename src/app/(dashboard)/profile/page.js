import ContentContainerDashboard from '@/app/components/ThisWebsiteOnly/Dashboard/ContentContainerDashboard'
import DashboardContentMenu from '@/app/components/ThisWebsiteOnly/Dashboard/DashboardContentMenu'
import Image from 'next/image'
import React, { Suspense } from 'react'
import placeholder from './images/20220202210918_img4888.png'
import Button from '@/app/components/Button'
import BasicInfo from './BasicInfo'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import { capitalizeAllFirstLetter } from '@/utilities/capitalizeAllFirstLetter'
import AboutYou from './AboutYou'
import ViewProfileButton from './ViewProfileButton'
import AthleticProfileSection from './AthleticProfileSection'
import Locations from './Locations'
import Media from './Media'
import { createServer } from '@/config/supabase/supabaseServer'
import LoadingComponent from '@/app/components/LoadingComponent'

const ProfilePage = async () => {
  const supabase = createServer()
  const user = await getCurrentUser()
  const { data: images, error } = await supabase
    .from('gallery')
    .select('*')
    .eq('owner_id', user?.id)
  console.log('images', images)
  const menu = [
    { name: 'Profile', value: 'profile' },
    { name: '', value: 'spacer' },
  ]
  console.log('user', user)
  return (
    <ContentContainerDashboard>
      <DashboardContentMenu menu={menu}>Account</DashboardContentMenu>
      <p className={''}>{user?.id}</p>
      <Suspense fallback={<LoadingComponent />}>
        <Media user={user} images={images} />
      </Suspense>
      <div className={'p-5'}>
        {/* Profile Pic */}
        <div className={'flex flex-col md:flex-row md:justify-between gap-2'}>
          <div className={'flex gap-5 items-center'}>
            <div className={'flex min-h-[128px] min-w-[128px] relative'}>
              <Image
                src={placeholder}
                fill
                quality={100}
                alt="user profile"
                className="object-cover rounded-full"
              />
            </div>
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
        {/* <Suspense fallback={<LoadingComponent />}>
          <Media user={user} images={images} />
        </Suspense> */}
        {/* Locations */}
        <Locations user={user} />
        {/* Athletic Profile */}
        <AthleticProfileSection user={user} />
      </div>
    </ContentContainerDashboard>
  )
}

export default ProfilePage
