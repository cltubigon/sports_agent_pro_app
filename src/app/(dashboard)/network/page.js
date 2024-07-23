import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import { createServer } from '@/config/supabase/supabaseServer'
import Image from 'next/image'
import React from 'react'
import profilePlaceholder from '@/app/components/ThisWebsiteOnly/profilePicture/images/profile_picture_placeholder.jpg'
import Link from 'next/link'
import { capitalizeAllFirstLetter } from '@/utilities/capitalizeAllFirstLetter'
import Icon_heart from '@/app/components/icons/Icon_heart'
import Icon_heart2 from '@/app/components/icons/Icon_heart2'
import Heart from './heart/Heart'

const getAccountType = async (type, supabase) => {
  const fetchUser = async (findThis) => {
    const { data: person } = await supabase
      .from('users')
      .select()
      .eq('account_type', findThis)
    return person
  }
  if (type === 'brand') {
    return await fetchUser('athlete')
  } else if (type === 'athlete') {
    return await fetchUser('brand')
  }
}

const DiscoverPage = async () => {
  const currentUser = await getCurrentUser()
  const supabase = createServer()
  const person = await getAccountType(currentUser?.account_type, supabase)
  return (
    <div
      className={
        'max-sm:mt-[68px] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-3 lg:gap-4 2xl:gap-8 py-10 px-3'
      }
    >
      {person.map((item, index) => {
        const { first_name, last_name, display_name } = item
        const sports = item?.sports[0] || ''
        const previousTeams = item?.previousTeams[0] || ''
        const experience = item?.experience[0] || ''
        const currentTeams = item?.currentTeams[0] || ''
        const language = item?.language?.slice(0, 2) || []
        const ethnicity =
          item?.ethnicity?.slice(0, 2) ||
          []?.map((item) => item.name).join(' * ')
        const topParagraph = [
          sports,
          previousTeams,
          experience,
          currentTeams,
          ...language,
          ...ethnicity,
        ]
        return (
          <div
            key={index}
            className={
              'relative min-h-[425px] max-h-[425px] overflow-hidden rounded-md border-neutral-200 border-[1px]'
            }
          >
            <Heart />
            <Link
              href={item?.id}
              target="_blank"
              className="flex flex-col rounded-md h-full"
            >
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
                {topParagraph?.length > 0 && (
                  <p className={''}>
                    {topParagraph?.map((item) => item.name).join(' * ')}
                  </p>
                )}
                {item?.identifiersInterests?.length > 0 && (
                  <p className={'mt-2'}>
                    {item?.identifiersInterests
                      ?.slice(0, 2)
                      ?.map((item) => item.name)
                      .join(' * ')}
                  </p>
                )}
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default DiscoverPage
