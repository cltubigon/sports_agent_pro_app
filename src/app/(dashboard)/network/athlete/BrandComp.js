import Image from 'next/image'
import React from 'react'
import Heart from '../heart/Heart'
import profilePlaceholder from '@/app/components/ThisWebsiteOnly/profilePicture/images/profile_picture_placeholder.jpg'
import { capitalizeAllFirstLetter } from '@/utilities/capitalizeAllFirstLetter'

const BrandComp = ({ brand, currentUser }) => {
  return (
    <>
      {brand.map((item, index) => {
        const { first_name, last_name, display_name } = item
        return (
          <div
            key={index}
            className={
              'relative min-h-[325px] max-h-[325px] overflow-hidden rounded-md border-neutral-200 border-[1px]'
            }
          >
            <Heart id={item?.id} owner_id={currentUser?.id} />
            <div className="flex flex-col rounded-md h-full">
              <div className={'relative min-h-[214px] w-full select-none'}>
                {item?.profilePicture ? (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${item?.profilePicture?.fullPath}`}
                    placeholder="blur"
                    blurDataURL={item?.profilePicture?.blurDataURL}
                    alt="athlete profile picture"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 100vw"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Image
                    src={profilePlaceholder}
                    alt="athlete profile picture"
                    quality={100}
                    fill
                    sizes="(max-width: 768px) 100vw, 100vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div
                className={
                  'text-[15px] text-neutral-400 bg-white p-6 rounded-bl-md rounded-br-md h-full'
                }
              >
                <p
                  className={
                    'text-xl text-black font-oswald font-bold mb-[6px]'
                  }
                >
                  {first_name && last_name
                    ? `${capitalizeAllFirstLetter(
                        first_name
                      )} ${capitalizeAllFirstLetter(last_name)}`
                    : capitalizeAllFirstLetter(display_name)}
                </p>
                {item?.whichBestDescribesYou?.length > 0 && (
                  <p className={''}>{item?.whichBestDescribesYou[0]?.name}</p>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default BrandComp
