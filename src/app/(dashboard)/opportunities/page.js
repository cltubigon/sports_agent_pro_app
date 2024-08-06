import Button from '@/app/components/Button'
import CopyClipboard from '@/app/components/CopyClipboard2'
import HeaderContainer from '@/app/components/ThisWebsiteOnly/Dashboard/content-area/HeaderContainer'
import ProfilePictureComponent from '@/app/components/ThisWebsiteOnly/profilePicture/ProfilePictureComponent'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import { createServer } from '@/config/supabase/supabaseServer'
import { capitalizeAllFirstLetter } from '@/utilities/capitalizeAllFirstLetter'
import Link from 'next/link'
import React from 'react'
import Details from './Details'
import DrawerContainer from './DrawerContainer'
import EditButton from './EditButton'
import Header from './Header'

const OpportunitiesPage = async () => {
  const supabase = createServer()
  const user = await getCurrentUser()
  const { data: posts, error } = await supabase.from('posts').select()
  return (
    <div>
      <HeaderContainer>
        <Header>
          <h3 className={'font-oswald text-2xl md:text-3xl font-bold'}>
            My Opportunities
          </h3>
          <div className={'w-fit'}>
            <Link href={'/build'} prefetch>
              <Button className="h-[53px]">Build Opportunity</Button>
            </Link>
          </div>
        </Header>
      </HeaderContainer>
      <div
        className={
          'grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-3 lg:gap-4 2xl:gap-5 p-5'
        }
      >
        {posts?.map((item, index) => {
          const {
            id,
            title,
            brief,
            expirationDate,
            selectedActivities,
            total,
          } = item
          return (
            <div
              className={
                'flex flex-col w-full bg-white rounded-md pb-5 justify-between'
              }
              key={index}
            >
              <div className={''}>
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
                    <CopyClipboard
                      textToCopy={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/opportunities/${id}`}
                    />
                  </div>
                </div>
                <div
                  className={'flex flex-col md:px-4 pt-4 md:pt-9 pb-4 text-sm'}
                >
                  <p className={'font-bold line-clamp-1'}>{title}</p>
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
                    Total{' '}
                    <span className="font-bold">${total?.toFixed(2)}</span>
                  </p>
                  {expirationDate && (
                    <p className={''}>
                      Expires{' '}
                      <span className="font-bold">
                        {new Date(expirationDate).toLocaleDateString()}
                      </span>
                    </p>
                  )}
                </div>
              </div>
              <div className={'flex gap-2 flex-col md:px-4'}>
                <EditButton item={item} />
                <Details item={item} />
              </div>
            </div>
          )
        })}
      </div>
      <DrawerContainer user={user} />
    </div>
  )
}

export default OpportunitiesPage
