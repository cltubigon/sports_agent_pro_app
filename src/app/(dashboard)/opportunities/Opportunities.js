/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import CopyClipboard from '@/app/components/CopyClipboard2'
import ProfilePictureComponent from '@/app/components/ThisWebsiteOnly/profilePicture/ProfilePictureComponent'
import { capitalizeAllFirstLetter } from '@/utilities/capitalizeAllFirstLetter'
import React, { useEffect, useState } from 'react'
import Details from './Details'
import ApplyButton from './athlete/ApplyButton'
import { useStore } from 'zustand'
import opportunityStore from '@/utilities/store/opportunityStore'
import SaveToListButton from './athlete/SaveToListButton'
import { removeDuplicatesFromArray } from '@/utilities/removeDuplicatesFromArray'
import DrawerContainer from './DrawerContainer'
import EditButton from './brand/EditButton'
import { deleteCookie } from '@/utilities/actions/cookieActions'

const Opportunities = ({ posts, account_type, activePostId }) => {
  const { isMyApplications, isMySavedList } = useStore(opportunityStore)
  const [activeID, setactiveID] = useState(activePostId)

  const filteredMyApplications = isMyApplications
    ? posts?.filter((i) => i?.applications?.length > 0)
    : !isMySavedList
    ? posts
    : []
  const filteredMySavedList = isMySavedList
    ? posts?.filter((i) => i?.favorite_opportunities?.length > 0)
    : !isMyApplications
    ? posts
    : []
  const joined =
    isMyApplications || isMySavedList
      ? removeDuplicatesFromArray([
          ...filteredMyApplications,
          ...filteredMySavedList,
        ])
      : posts

  useEffect(() => {
    if (activePostId && !posts?.some((i) => i.id === activePostId)) {
      deleteCookie('drawerPostId')
    }
  }, [])

  return (
    <>
      <DrawerContainer
        account_type={account_type}
        drawer={posts?.find((i) => i.id === activeID)}
        setdrawer={setactiveID}
      />
      <div
        className={
          'grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-3 lg:gap-4 2xl:gap-5 p-5'
        }
      >
        {joined
          ?.sort((a, b) => {
            const dateA = new Date(b?.created_at)
            const dateB = new Date(a?.created_at)
            return dateA - dateB
          })
          ?.map((item, index) => {
            const {
              id,
              title,
              brief,
              expirationDate,
              selectedActivities,
              total,
              users: owner,
              applications,
              favorite_opportunities,
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
                    className={
                      'flex justify-between gap-2 w-full bg-neutral-50'
                    }
                  >
                    <div className={'flex gap-2'}>
                      <ProfilePictureComponent
                        user={owner}
                        sizes="64px"
                        parameters={{
                          containerStyle:
                            'min-w-[64px] min-h-[64px] rounded-none',
                          imgStyle: 'rounded-none',
                        }}
                      />
                      <div className={'flex flex-col'}>
                        <p
                          className={'text-lg mt-1 font-semibold line-clamp-1'}
                        >
                          {owner?.first_name && owner?.last_name
                            ? `${capitalizeAllFirstLetter(
                                owner?.first_name
                              )} ${capitalizeAllFirstLetter(owner?.last_name)}`
                            : capitalizeAllFirstLetter(owner?.display_name)}
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
                    <div
                      className={
                        'flex flex-col py-1 items-center justify-center px-2 gap-1'
                      }
                    >
                      {/* <Icon_copy className="text-neutral-500" /> */}
                      {/* <Icon_heart2 className="text-neutral-500 size-4" /> */}
                      {(account_type === 'athlete' ||
                        account_type === 'coach') && (
                        <SaveToListButton
                          item={item}
                          // savedList={
                          //   favorite_opportunities?.length >= 1
                          //     ? favorite_opportunities[0]
                          //     : null
                          // }
                        />
                      )}
                      <CopyClipboard
                        textToCopy={`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/opportunities/?post=${id}`}
                      />
                    </div>
                  </div>
                  <div
                    className={
                      'flex flex-col md:px-4 pt-4 md:pt-9 pb-4 text-sm'
                    }
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
                  {(account_type === 'athlete' || account_type === 'coach') && (
                    <ApplyButton item={item} />
                  )}
                  {account_type === 'brand' && <EditButton item={item} />}
                  <Details item={item} setactiveID={setactiveID} />
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Opportunities
