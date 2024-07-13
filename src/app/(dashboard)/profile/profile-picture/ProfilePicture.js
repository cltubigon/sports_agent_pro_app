'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import placeholder2 from '../images/profile_picture_placeholder.png'
import Icon_upload from '@/app/components/icons/Icon_upload'
import Popup from '@/app/components/Popup'
// import UploadProfile from './UploadProfile'
const UploadProfile = dynamic(() => import('./UploadProfile'), {
  loading: () => <LoadingComponent className={'min-h-[573px]'} />,
})
import Toast from '@/app/components/Toast'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/utilityStore'
import dynamic from 'next/dynamic'
import LoadingComponent from '@/app/components/LoadingComponent'

const ProfilePicture = ({ user, images: theImages }) => {
  const [images, setimages] = useState(theImages)
  const { toast, settoast } = useStore(utilityStore)
  console.log('images', images)
  const profileImage = images
    ?.filter((item) => item?.isProfilePicture)
    ?.sort((a, b) => {
      const dateA = new Date(a?.isProfilePicture)
      const dateB = new Date(b?.isProfilePicture)
      return dateB - dateA
    })

  const [popup, setpopup] = useState(null)

  const handleImageClick = async () => {
    setpopup(true)
  }
  return (
    <div
      className={'group/profile flex min-h-[128px] min-w-[128px] relative'}
      onClick={handleImageClick}
    >
      <Toast parameters={{ toast, settoast }} />
      {popup && (
        <Popup data={{ setpopup, bgNotClickable: true, noScrollbar: true }}>
          <UploadProfile parameters={{ user, images, setimages, setpopup }} />
        </Popup>
      )}

      {profileImage?.length > 0 ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${profileImage[0]?.fullPath}`}
          placeholder="blur"
          blurDataURL={profileImage[0]?.blurDataURL}
          fill
          quality={100}
          alt="user profile"
          title="Upload profile picture"
          className="object-cover rounded-full group-hover/profile:brightness-50 transition-all duration-300"
        />
      ) : (
        <Image
          src={placeholder2}
          alt="profile placeholder"
          quality={100}
          fill
          title="Upload profile picture"
          className="object-cover rounded-full group-hover/profile:brightness-50 transition-all duration-300"
        />
      )}
      <Icon_upload className="absolute opacity-0 size-10 text-white top-0 bottom-0 right-0 left-0 m-auto group-hover/profile:opacity-100 transition-all duration-300" />
    </div>
  )
}

export default ProfilePicture
