'use client'
import { capitalizeAllFirstLetter } from '@/utilities/capitalizeAllFirstLetter'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import LogoutButton from '../LogoutButton'
import Menu from '@/app/components/Menu'
import ProfilePictureComponent from '@/app/components/ThisWebsiteOnly/profilePicture/ProfilePictureComponent'

const HeaderMenu = ({ currentUser }) => {
  const { display_name, firstName, lastName } = currentUser

  const [showModal, setShowModal] = useState(false)
  const buttonRef = useRef(null)

  return (
    <div className={'flex gap-3 items-center w-fit relative group ml-auto'}>
      <p className={''}>
        {firstName && lastName
          ? `${capitalizeAllFirstLetter(firstName)} ${capitalizeAllFirstLetter(
              lastName
            )}`
          : capitalizeAllFirstLetter(display_name)}
      </p>
      <ProfilePictureComponent
        user={currentUser}
        parameters={{ containerStyle: 'size-[50px]' }}
      />
      <div
        className={
          'clt-modal cursor-pointer w-full z-10 h-[50px] absolute top-0 left-0'
        }
        ref={buttonRef}
        onClick={() => setShowModal(!showModal)}
      />
      <div
        className={`size-3 absolute -bottom-[14px] right-5 rotate-45 border-t-[1px] border-neutral-200 border-l-[1px] z-50 bg-white ${
          showModal ? 'block' : 'hidden'
        } transition-all duration-500`}
      />
      {showModal && (
        <Menu
          showModal={showModal}
          setShowModal={setShowModal}
          referenceElement={buttonRef}
          containerHeight={149}
          containerWidth={250}
          spaceFromElement={8}
          className={`clt-modal w-[250px] border-[1px] border-neutral-300 p-0 text-secondary divide-y-[1px] divide-neutral-200 opacity-0 ${
            showModal ? 'opacity-100' : 'opacity-0'
          } transition-all duration-500`}
        >
          <Link href={'/profile'} prefetch>
            <div className={'py-3 px-5'}>
              <p className={''}>Profile</p>
            </div>
          </Link>
          <Link href={'/billing'} prefetch>
            <div className={'py-3 px-5'}>
              <p className={''}>Billing & Upgrade</p>
            </div>
          </Link>
          <LogoutButton className="clt-modal active:bg-secondary-50 py-3 px-5" />
        </Menu>
      )}
    </div>
  )
}

export default HeaderMenu
