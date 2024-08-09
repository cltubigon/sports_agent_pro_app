import Image from 'next/image'
import React, { forwardRef } from 'react'
import placeholderImage from './images/profile_picture_placeholder.jpg'
import { twMerge } from 'tailwind-merge'

{
  /* <ProfilePictureComponent user={user} /> */
}

const ProfilePictureComponent = forwardRef(function ProfilePictureComponent(
  { children, className, sizes, ...props },
  ref
) {
  // Accepts and OBJECT user
  return (
    <div
      className={twMerge(
        'group/profile relative min-w-[100px] min-h-[100px] overflow-hidden rounded-full',
        props?.parameters?.containerStyle
      )}
    >
      {props?.user?.profilePicture ? (
        <Image
          src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}${props?.user?.profilePicture?.fullPath}`}
          placeholder="blur"
          blurDataURL={props?.user?.profilePicture?.blurDataURL}
          quality={100}
          alt="user image"
          fill
          sizes={sizes || '100px'}
          // "(max-width: 768px) 100vw, 100vw"
          data="profile-picture"
          className={twMerge(
            'object-cover rounded-full border-[1px] border-[#ccc] transition-all duration-300 z-10',
            props?.parameters?.imgStyle
          )}
          {...props}
          ref={ref}
        />
      ) : props?.user?.avatar ? (
        <Image
          src={props?.user?.avatar}
          quality={100}
          alt="user image"
          fill
          sizes={sizes || '100px'}
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
          sizes={sizes || '100px'}
          data="profile-picture"
          title="Upload profile picture"
          className={twMerge(
            'object-cover rounded-full transition-all duration-300 z-10',
            props?.parameters?.imgStyle
          )}
          {...props}
          ref={ref}
        />
      )}
      {children}
    </div>
  )
})

export default ProfilePictureComponent
