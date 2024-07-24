import Icon_check from '@/app/components/icons/Icon_check'
import Icon_facebook from '@/app/components/icons/Icon_facebook'
import Icon_instagram from '@/app/components/icons/Icon_instagram'
import Icon_star from '@/app/components/icons/Icon_star'
import Icon_tiktok from '@/app/components/icons/Icon_tiktok'
import ProfilePictureComponent from '@/app/components/ThisWebsiteOnly/profilePicture/ProfilePictureComponent'
import React from 'react'

const Sec1 = ({ person }) => {
  const sports = person?.sports?.slice(0, 3)?.map((item) => item?.name)
  const position = person?.position?.slice(0, 3)?.map((item) => item?.name)
  const combinedSportsPosition = [...sports, ...position]
  const formattedSportsPosition = combinedSportsPosition?.join(' • ')
  console.log('person?.display_name', person?.display_name)
  return (
    <div className={'w-full pb-6'}>
      {/* First Sec 1 */}
      <div className={'flex justify-between gap-2'}>
        <div className={''}>
          <div className={'flex gap-1 items-center'}>
            {/* {person?.first_name ||
              (person?.last_name && (
                
              ))} */}
            {(person?.first_name ||
              person?.last_name ||
              person?.display_name) && (
              <h3 className={'font-tinos text-2xl md:text-3xl font-semibold'}>
                {person?.first_name && person.last_name
                  ? `${person?.first_name} ${person?.last_name}`
                  : person?.display_name}
              </h3>
            )}
            <Icon_check className={'size-6 text-secondary-700'} />
          </div>
          <p className={'max-sm:text-sm'}>{formattedSportsPosition}</p>
        </div>
        <ProfilePictureComponent
          user={person}
          parameters={{
            containerStyle: 'size-[60px] min-w-[56px] min-h-[56px]',
          }}
        />
      </div>
      <div className={'pt-3 md:pt-5'}>
        <div
          className={
            'flex gap-1 bg-secondary-200 text-secondary rounded-sm py-1 px-3 w-fit'
          }
        >
          <Icon_star />
          <p className={''}>All-star profile</p>
        </div>
        <div className={'flex gap-10 mt-6'}>
          <Icon_facebook className="text-neutral-500" />
          <Icon_instagram className="text-neutral-500" />
          <Icon_tiktok className="text-white bg-neutral-500 p-1 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default Sec1
