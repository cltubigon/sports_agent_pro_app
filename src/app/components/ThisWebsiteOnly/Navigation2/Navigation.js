import React from 'react'
import ProfilePictureComponent from '../profilePicture/ProfilePictureComponent'
import Link from 'next/link'
import AccountMenu from './account-menu/AccountMenu'
import { logout } from '@/app/(auth)/signOut/actions'

const Navigation = ({ user }) => {
  const menu = [
    { label: 'Profile', path: '/profile', func: null },
    { label: 'Logout', path: '', func: logout },
  ]
  return (
    <div className={'min-h-[81px] bg-secondary flex items-center'}>
      <div
        className={
          'w-full max-w-[1500px] m-auto px-3 md:px-6 2xl:px-0 text-white'
        }
      >
        <div className={'flex justify-between items-center w-full'}>
          <h5 className={'font-tinos text-xl md:text-2xl font-bold'}>
            Sports Agent Pro
          </h5>
          {!user && (
            <Link href={'/login'}>
              <div
                className={
                  'flex flex-col items-center justify-center gap-[2px]'
                }
              >
                <ProfilePictureComponent
                  user={user}
                  parameters={{ containerStyle: 'size-[35px]' }}
                />
                <p className={'text-sm text-center'}>Login</p>
              </div>
            </Link>
          )}
          {user && (
            <AccountMenu
              menu={menu}
              user={user}
              spaceFromElement={11}
              menuStyle="border-secondary-800 bg-secondary text-white"
              itemStyle="hover:bg-secondary-600"
              itemContainerStyle={
                'before:first:bg-secondary before:first:border-secondary-800 before:hover:first:bg-secondary-600'
              }
            >
              Account
            </AccountMenu>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navigation
