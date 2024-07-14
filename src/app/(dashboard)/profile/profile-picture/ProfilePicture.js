'use client'
import React, { useState } from 'react'
import Icon_upload from '@/app/components/icons/Icon_upload'
import Popup from '@/app/components/Popup'
const UploadProfile = dynamic(() => import('./UploadProfile'), {
  loading: () => <LoadingComponent className={'min-h-[573px]'} />,
})
import Toast from '@/app/components/Toast'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/utilityStore'
import dynamic from 'next/dynamic'
import LoadingComponent from '@/app/components/LoadingComponent'
import ProfilePictureComponent from '@/app/components/ThisWebsiteOnly/profilePicture/ProfilePictureComponent'

const ProfilePicture = ({ user, images }) => {
  const { toast, settoast } = useStore(utilityStore)
  const [popup, setpopup] = useState(null)

  const handleImageClick = async () => {
    setpopup(true)
  }
  return (
    <div className={''}>
      <div className={'flex min-h-[128px] min-w-[128px] relative'}>
        <Toast parameters={{ toast, settoast }} />
        {popup && (
          <Popup data={{ setpopup, bgNotClickable: true, noScrollbar: true }}>
            <UploadProfile parameters={{ user, images, setpopup }} />
          </Popup>
        )}
        <ProfilePictureComponent
          user={user}
          onClick={handleImageClick}
          parameters={{
            containerStyle: 'size-[128px]',
            imgStyle: 'lg:group-hover/profile:brightness-50',
          }}
        >
          <Icon_upload
            onClick={handleImageClick}
            className="absolute opacity-0 lg:group-hover/profile:opacity-100 size-10 text-white top-0 bottom-0 right-0 left-0 m-auto transition-all duration-300 z-[500]"
          />
        </ProfilePictureComponent>
      </div>
      <div className={'flex z-20 w-full mt-auto lg:hidden'}>
        <p
          className={'mx-auto font-semibold text-sm mt-1'}
          onClick={handleImageClick}
        >
          Edit
        </p>
      </div>
    </div>
  )
}

export default ProfilePicture
