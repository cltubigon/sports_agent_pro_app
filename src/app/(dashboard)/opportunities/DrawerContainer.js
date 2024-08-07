/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Button from '@/app/components/Button'
import Drawer from '@/app/components/Drawer'
import Icon_close from '@/app/components/icons/Icon_close'
import ProfilePictureComponent from '@/app/components/ThisWebsiteOnly/profilePicture/ProfilePictureComponent'
import ViewMore from '@/app/components/ViewMore'
import { capitalizeAllFirstLetter } from '@/utilities/capitalizeAllFirstLetter'
import { removeDuplicatesFromArray } from '@/utilities/removeDuplicatesFromArray'
import utilityStore from '@/utilities/store/utilityStore'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useStore } from 'zustand'
import useEditPost from './hooks/useEditPost'
import ApplyButton from './ApplyButton'
import opportunityStore from '@/utilities/store/opportunityStore'

const Container = ({ children }) => {
  return <div className={'flex flex-col px-4 gap-5 py-5'}>{children}</div>
}

const DrawerContainer = ({ account_type }) => {
  const { drawer, setdrawer } = useStore(utilityStore)
  const { handleEdit } = useEditPost({ item: drawer })

  const uniqueActivities = removeDuplicatesFromArray(
    drawer?.selectedActivities?.map((i) => i.name)
  )
  const handleClose = () => {
    setdrawer(null)
  }
  return (
    <div>
      <Drawer>
        <div className={'flex flex-col justify-between w-full h-full'}>
          <div className={'flex flex-col first:pt-0'}>
            {/* Profile Section */}
            <div className={'flex bg-neutral-50 gap-5 items-center'}>
              <ProfilePictureComponent
                user={drawer?.users}
                parameters={{
                  containerStyle:
                    'min-w-[60px] max-h-[60px] md:min-w-[80px] md:min-h-[80px] 2xp:min-w-[100px] 2xp:min-h-[100px] rounded-none',
                  imgStyle: 'rounded-none',
                }}
              />
              <div className={'flex flex-col w-full'}>
                <p className={'text-lg font-semibold'}>
                  {drawer?.users?.first_name && drawer?.users?.last_name
                    ? `${capitalizeAllFirstLetter(
                        drawer?.users?.first_name
                      )} ${capitalizeAllFirstLetter(drawer?.users?.last_name)}`
                    : capitalizeAllFirstLetter(drawer?.users?.display_name)}
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
              <div className={'flex px-3'}>
                <Icon_close onClick={handleClose} />
              </div>
            </div>
            <div
              className={
                'w-full h-full max-h-[81vh] overflow-y-auto max-sm:pb-10 max-lg:lg:pb-6'
              }
            >
              {/* Details */}
              <Container>
                <p className={'text-lg font-bold'}>Details</p>
                <div className={'flex flex-col'}>
                  <p className={' line-clamp-1'}>
                    Activities{' '}
                    <span className="font-semibold">
                      {uniqueActivities?.map((i) => i).join(' - ')}
                    </span>
                  </p>
                  <p className={' line-clamp-1'}>
                    Applications <span className="font-semibold">0</span>
                  </p>
                  {drawer?.expirationDate && (
                    <p className={' line-clamp-1'}>
                      Expires{' '}
                      <span className="font-semibold">
                        {new Date(drawer?.expirationDate).toLocaleDateString()}
                      </span>
                    </p>
                  )}
                  <p className={' line-clamp-1'}>
                    Total{' '}
                    <span className="font-semibold">${drawer?.total}</span>
                  </p>
                </div>
              </Container>
              {/* Brief */}
              <Container>
                <p className={'text-lg font-bold'}>Brief</p>
                <ViewMore maxHeight={'130px'}>
                  <div
                    className={''}
                    dangerouslySetInnerHTML={{ __html: drawer?.brief }}
                  />
                </ViewMore>
              </Container>
              <Container>
                <p className={'text-lg font-bold'}>Activities</p>
                <ViewMore maxHeight={'180px'}>
                  <div className={'flex flex-col gap-2'}>
                    {drawer?.selectedActivities?.map((item, index) => {
                      const { img, name, date, compensation } = item
                      return (
                        <div key={index} className={'flex gap-2 items-center'}>
                          <Image
                            width={48}
                            height={48}
                            src={img}
                            alt="Activity"
                            quality={100}
                            className="size-6 min-w-6 min-h-6 md:size-8 md:min-w-8 md:min-h-8"
                          />
                          <div className={'flex flex-col w-full'}>
                            <p className={''}>{name}</p>
                            <p className={'text-sm text-neutral-400'}>
                              Due by: {new Date(date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className={'flex min-w-[100px] justify-end'}>
                            <p className={''}>{compensation}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </ViewMore>
              </Container>
            </div>
          </div>
          {account_type === 'brand' && (
            <div
              className={
                'absolute flex-col md:flex-row bottom-0 w-full flex gap-2 md:gap-5 py-3 px-4'
              }
            >
              <Button className="w-full">View Applicants</Button>
              <Button onClick={handleEdit} className="w-full" variant="button2">
                Edit
              </Button>
            </div>
          )}
          {(account_type === 'athlete' || account_type === 'coach') && (
            <div
              className={
                'absolute flex-col md:flex-row bottom-0 w-full flex gap-2 md:gap-5 py-3 px-4'
              }
            >
              <ApplyButton
                item={drawer}
                applications={
                  drawer?.applications ? drawer?.applications : null
                }
              />
            </div>
          )}
        </div>
      </Drawer>
    </div>
  )
}

export default DrawerContainer
