/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import HeaderMenuIcon from './HeaderMenuIcon'
import LogoutButton from './LogoutButton'
import blankProfile from './images/blank-profile.png'
import { capitalizeAllFirstLetter } from '@/utilities/capitalizeAllFirstLetter'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'

const DashboardHeader = async () => {
  const currentUser = await getCurrentUser()

  const display_name = currentUser?.display_name
  const avatar = currentUser?.avatar

  return (
    <div
      className={
        'w-full bg-primary text-white lg:text-[unset] lg:bg-white shadow-sm fixed top-0 left-0 md:static'
      }
    >
      <div className={'px-5 py-2 flex items-center'}>
        <HeaderMenuIcon />
        <div className={'flex gap-2 items-center w-fit relative group ml-auto'}>
          <p className={''}>{capitalizeAllFirstLetter(display_name)}</p>
          <Image
            src={avatar || blankProfile}
            width={50}
            height={50}
            quality={100}
            alt="user image"
            className="rounded-full border-[1px] border-[#ccc]"
          />
          <div
            className={
              'group-hover:block hidden absolute bottom-[-61px] pt-[15px]  right-0 w-[200px] rounded-sm  shadow-sm before:absolute before:top-[7px] before:right-4 before:w-4 before:h-4 before:bg-white before:border-[#ccc] before:border-t-[1px] before:border-l-[1px] before:z-0 before:rotate-45 '
            }
          >
            <div className={'bg-white border-[1px] border-[#ccc]'}>
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
