import React, { Suspense } from 'react'
import BasicInfo from './BasicInfo'
import AboutYou from './AboutYou'
import AthleticProfileSection from './AthleticProfileSection'
import Locations from './Locations'
import Media from './Media'
import LoadingComponent from '@/app/components/LoadingComponent'

const AthleteProfile = ({ user, images }) => {
  return (
    <>
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
    </>
  )
}

export default AthleteProfile
