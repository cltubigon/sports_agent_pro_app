import Image from 'next/image'
import React, { forwardRef } from 'react'
import placeholderImage from './images/profile_picture_placeholder.png'
import { twMerge } from 'tailwind-merge'
import Icon_upload from '../../icons/Icon_upload'

const ProfilePictureComponent = forwardRef(function ProfilePictureComponent(
  { children, className, ...props },
  ref
) {
  const { profilePicture, avatar } = props?.user
  console.log('profilePicture', profilePicture)
  return (
    <div
      className={twMerge(
        'group/profile relative size-[100px] overflow-hidden rounded-full',
        props?.parameters?.containerStyle
      )}
    >
      {profilePicture ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${profilePicture?.fullPath}`}
          placeholder="blur"
          blurDataURL={profilePicture?.blurDataURL}
          quality={100}
          alt="user image"
          fill
          data="profile-picture"
          className={twMerge(
            'object-cover rounded-full border-[1px] border-[#ccc] transition-all duration-300 z-10',
            props?.parameters?.imgStyle
          )}
          {...props}
          ref={ref}
        />
      ) : avatar ? (
        <Image
          src={avatar}
          quality={100}
          alt="user image"
          fill
          data="profile-picture"
          className={twMerge(
            'object-cover rounded-full border-[1px] border-[#ccc] transition-all duration-300 z-10',
            props?.parameters?.imgStyle
          )}
          {...props}
          ref={ref}
        />
      ) : (
        <Image
          src={placeholderImage}
          alt="profile placeholder"
          quality={100}
          fill
          data="profile-picture"
          title="Upload profile picture"
          className="object-cover rounded-full transition-all duration-300 z-10"
          {...props}
          ref={ref}
        />
      )}
      {children}
    </div>
  )
})

export default ProfilePictureComponent
