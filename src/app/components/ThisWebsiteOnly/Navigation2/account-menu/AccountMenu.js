'use client'
import Menu from '@/app/components/Menu'
import React, { useRef, useState } from 'react'
import ProfilePictureComponent from '@/app/components/ThisWebsiteOnly/profilePicture/ProfilePictureComponent'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

// Must be logged in
// {user && (
//   menu={menu}
//   <AccountMenu
//     user={user}
//     spaceFromElement={20}
//     menuStyle="border-secondary-800 bg-secondary text-white"
//     itemStyle="hover:bg-secondary-600"
//     itemContainerStyle={
//       'before:first:bg-secondary before:first:border-secondary-800 before:hover:first:bg-secondary-600'
//     }
//   >
//     Account
//   </AccountMenu>
// )}

const AccountMenu = ({
  children,
  menu,
  user,
  className,
  menuStyle,
  spaceFromElement,
  itemStyle,
  itemContainerStyle,
  profPicContainerStyle,
}) => {
  const [showModal, setShowModal] = useState(false)
  const buttonRef = useRef(null)

  return (
    <div className="relative">
      <div
        ref={buttonRef}
        onClick={() => setShowModal(!showModal)}
        className={twMerge(
          'clt-account-menu cursor-pointer flex flex-col items-center justify-center gap-[2px]',
          className
        )}
      >
        <ProfilePictureComponent
          user={user}
          parameters={{
            containerStyle: twMerge('size-[35px]', profPicContainerStyle),
          }}
        />
        <p className={'text-sm text-center'}>{children}</p>
      </div>
      {showModal && (
        <>
          <Menu
            showModal={showModal}
            setShowModal={setShowModal}
            referenceElement={buttonRef}
            containerHeight={230}
            className={twMerge(
              'w-[300px] p-0 border-t-[1px] border-b-[0] border-r-0 border-l-0  overflow-visible',
              menuStyle
            )}
            classId={'clt-account-menu'}
            containerWidth={350} //optional
            spaceFromElement={spaceFromElement} //optional
          >
            {menu.map((item, index) => {
              const { label, path, func } = item
              return (
                <div
                  key={index}
                  className={twMerge(
                    'before:first:size-4 before:first:absolute before:first:right-5 before:first:-top-2 before:first:rotate-45 before:first:border-l-[1px] before:first:border-t-[1px]   ',
                    itemContainerStyle
                  )}
                >
                  {path && (
                    <Link href={path} prefetch>
                      <p className={twMerge('p-4', itemStyle)}>{label}</p>
                    </Link>
                  )}
                  {func && (
                    <p
                      onClick={() => func()}
                      className={twMerge('cursor-pointer p-4', itemStyle)}
                    >
                      {label}
                    </p>
                  )}
                </div>
              )
            })}
          </Menu>
        </>
      )}
    </div>
  )
}

export default AccountMenu
