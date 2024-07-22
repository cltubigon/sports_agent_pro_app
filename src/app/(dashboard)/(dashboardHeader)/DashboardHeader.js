/* eslint-disable react-hooks/exhaustive-deps */
import HeaderMenuIcon from './HamburgerMenu'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import AccountMenu from '@/app/components/ThisWebsiteOnly/Navigation2/account-menu/AccountMenu'
import { logout } from '@/app/(auth)/signOut/actions'
import { capitalizeAllFirstLetter } from '@/utilities/capitalizeAllFirstLetter'

const DashboardHeader = async () => {
  const currentUser = await getCurrentUser()
  const { display_name, first_name, last_name } = currentUser
  const menu = [
    { label: 'Profile', path: '/profile', func: null },
    { label: 'Billing & Upgrade', path: '/billing', func: null },
    { label: 'Logout', path: '', func: logout },
  ]
  return (
    <div
      className={
        'w-full bg-secondary text-white lg:text-[unset] lg:bg-white fixed top-0 left-0 md:static z-[900] border-b-[1px] border-neutral-200'
      }
    >
      <div
        className={'px-5 py-2 flex items-center justify-between lg:justify-end'}
      >
        <HeaderMenuIcon />
        {/* <HeaderMenu currentUser={currentUser} /> */}
        <div className={'flex gap-2 items-center'}>
          <p className={''}>
            {first_name && last_name
              ? `${capitalizeAllFirstLetter(
                  first_name
                )} ${capitalizeAllFirstLetter(last_name)}`
              : capitalizeAllFirstLetter(display_name)}
          </p>
          {currentUser && (
            <AccountMenu
              menu={menu}
              user={currentUser}
              spaceFromElement={8}
              menuStyle="border-neutral-100 bg-white text-neutral-900"
              itemStyle="hover:bg-neutral-50"
              itemContainerStyle={
                'before:first:bg-white before:first:border-neutral-100 before:hover:first:bg-neutral-50'
              }
              profPicContainerStyle="size-[50px]"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
