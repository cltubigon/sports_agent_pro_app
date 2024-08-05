import CopyClipboard from '@/app/[userId]/CopyClipboard'
import Button from '@/app/components/Button'
import Icon_copy from '@/app/components/icons/Icon_copy'
import HeaderContainer from '@/app/components/ThisWebsiteOnly/Dashboard/content-area/HeaderContainer'
import ProfilePictureComponent from '@/app/components/ThisWebsiteOnly/profilePicture/ProfilePictureComponent'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import { createServer } from '@/config/supabase/supabaseServer'
import { capitalizeAllFirstLetter } from '@/utilities/capitalizeAllFirstLetter'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OpportunitiesPage = async () => {
  const supabase = createServer()
  const user = await getCurrentUser()
  const { data: posts, error } = await supabase.from('posts').select()
  console.log('posts', posts)
  return (
    <div>
      <HeaderContainer
        className={'flex flex-col md:flex-row items-start gap-2'}
      >
        <h3 className={'font-oswald text-2xl md:text-3xl font-bold'}>
          My Opportunities
        </h3>
        <div className={'w-fit'}>
          <Link href={'/build'} prefetch>
            <Button className="h-[53px]">Build Opportunity</Button>
          </Link>
        </div>
      </HeaderContainer>
      <div
        className={
          'grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-3 lg:gap-4 2xl:gap-8 p-5'
        }
      >
        {posts?.map((item, index) => {
          const { title, brief, expirationDate, selectedActivities, total } =
            item
          // const expDate =
          // console.log('expDate', expDate)
          return (
            <div
              className={'flex flex-col w-full bg-white rounded-md'}
              key={index}
            >
              <div
                className={'flex justify-between gap-2 w-full bg-neutral-50'}
              >
                <div className={'flex gap-2'}>
                  <ProfilePictureComponent
                    user={user}
                    parameters={{
                      containerStyle: 'size-[64px] rounded-none',
                      imgStyle: 'rounded-none',
                    }}
                  />
                  <div className={'flex flex-col'}>
                    <p className={'text-lg mt-1 font-semibold line-clamp-1'}>
                      {user?.first_name && user?.last_name
                        ? `${capitalizeAllFirstLetter(
                            user?.first_name
                          )} ${capitalizeAllFirstLetter(user?.last_name)}`
                        : capitalizeAllFirstLetter(user?.display_name)}
                    </p>
                    <div className={'flex items-center gap-2'}>
                      <p className={'text-sm'}>Open</p>
                      <div
                        className={
                          'min-w-[6px] min-h-[6px] max-w-[6px] max-h-[6px] rounded-full bg-green-500'
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className={'flex mt-2 px-2'}>
                  {/* <Icon_copy className="text-neutral-500" /> */}
                  <CopyClipboard shareTextStyle={'hidden'} />
                </div>
              </div>
              <div className={'flex flex-col px-4 pt-9 pb-4 text-sm'}>
                <p className={'font-bold'}>{title}</p>
                <div
                  dangerouslySetInnerHTML={{ __html: brief }}
                  className="line-clamp-2 text-neutral-500"
                />
                <div className={'flex gap-2 mt-4'}>
                  <p className={'line-clamp-1'}>
                    Activities:{' '}
                    <span className="font-bold">
                      {selectedActivities[0]?.name}
                    </span>
                  </p>
                  {selectedActivities?.length > 1 && (
                    <div
                      className={
                        'px-[6px] py-[2px] bg-neutral-200 flex justify-center items-center rounded-full text-xs'
                      }
                    >
                      +{selectedActivities?.length - 1}
                    </div>
                  )}
                </div>
                <p className={''}>
                  Total: <span className="font-bold">${total}</span>
                </p>
                {expirationDate && (
                  <p className={''}>
                    Expires:{' '}
                    <span className="font-bold">
                      {new Date(expirationDate).toLocaleDateString()}
                    </span>
                  </p>
                )}
              </div>
              <div className={'flex gap-2 flex-col px-4'}>
                <Button
                  className="w-full h-12 border-secondary text-secondary md:hover:bg-secondary-50"
                  variant="button2"
                >
                  Edit
                </Button>
                <Button
                  className="w-full h-12 border-secondary text-secondary md:hover:bg-secondary-50"
                  variant="button2"
                >
                  Details
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OpportunitiesPage
