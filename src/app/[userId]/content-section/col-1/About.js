import React from 'react'
import Icon_user_details2 from '@/app/components/icons/Icon_user_details2'
import Icon_user_details from '@/app/components/icons/Icon_user_details'
import Icon_affiliations from '@/app/components/icons/Icon_affiliations'
import Icon_location from '@/app/components/icons/Icon_location'
import Icon_house from '@/app/components/icons/Icon_house'

const AthleteAbout = ({ person }) => {
  const affiliates = person?.leaguesAndConferences
    ?.slice(0, 10)
    ?.map((item) => item?.name)
    .join(' • ')
  const ethnicity = person?.ethnicity
    ?.slice(0, 5)
    ?.map((item) => item?.name)
    .join(' • ')
  return (
    <div className={'py-6'}>
      <p className={'font-bold mb-6'}>About</p>
      <div className={'flex flex-col gap-5'}>
        <div className={'flex gap-3'}>
          <Icon_user_details className="size-6 min-w-6" />
          <div className={''}>
            <p className={'font-semibold'}>Biography</p>
            <p className={'text-sm'}>{person?.bio}</p>
          </div>
        </div>
        <div className={'flex gap-3'}>
          <Icon_affiliations className="size-6 min-w-6" />
          <div className={''}>
            <p className={'font-semibold'}>Affiliations</p>
            <p className={'text-sm'}>{affiliates}</p>
          </div>
        </div>
        <div className={'flex gap-3'}>
          <Icon_location className="size-6 min-w-6" />
          <div className={''}>
            <p className={'font-semibold'}>Location</p>
            <p className={'text-sm'}>{person?.currentLocation}</p>
          </div>
        </div>
        <div className={'flex gap-3'}>
          <Icon_user_details2 className="size-6 min-w-6" />
          <div className={''}>
            <p className={'font-semibold'}>Background</p>
            <p className={'text-sm'}>
              {person?.whichBestDescribesYou[0]?.name} •{' '}
              {person?.genderIdentity[0]?.name} • {ethnicity}
            </p>
          </div>
        </div>
        <div className={'flex gap-3'}>
          <Icon_house className="size-6 min-w-6" />
          <div className={''}>
            <p className={'font-semibold'}>Hometown</p>
            <p className={'text-sm'}>{person?.homeTown}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AthleteAbout
