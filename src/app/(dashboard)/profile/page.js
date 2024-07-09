import ContentContainerDashboard from '@/app/components/ThisWebsiteOnly/Dashboard/ContentContainerDashboard'
import DashboardContentMenu from '@/app/components/ThisWebsiteOnly/Dashboard/DashboardContentMenu'
import Image from 'next/image'
import React from 'react'
import placeholder from './images/20220202210918_img4888.png'
import Button from '@/app/components/Button'
import BasicInfo from './BasicInfo'

const ProfilePage = () => {
  const menu = [
    { name: 'Profile', value: 'profile' },
    { name: 'Profile2', value: 'profile2' },
    { name: '', value: 'spacer' },
  ]
  return (
    <ContentContainerDashboard>
      <DashboardContentMenu menu={menu}>Account</DashboardContentMenu>
      <div className={'p-5'}>
        {/* Profile Pic */}
        <div className={'flex justify-between'}>
          <div className={'flex gap-5 items-center'}>
            <div className={'flex size-[128px] relative'}>
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
                Henriette Muller
              </h5>
              <p className={''}>Professional Athlete</p>
            </div>
          </div>
          <div className={'flex gap-3'}>
            <Button variant="button2">View Profile</Button>
          </div>
        </div>
        {/* Basic Info */}
        <BasicInfo />
      </div>
    </ContentContainerDashboard>
  )
}

export default ProfilePage
