/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import HeaderMenuIcon from './HeaderMenuIcon'
import LogoutButton from './LogoutButton'
import { capitalizeAllFirstLetter } from '@/utilities/capitalizeAllFirstLetter'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import Icon_user_circled from '@/app/components/icons/Icon_user_circled'
import Link from 'next/link'

const DashboardHeader = async () => {
  const currentUser = await getCurrentUser()

  const display_name = currentUser?.display_name
  const avatar = currentUser?.avatar
  return (
    <div
      className={
        'w-full bg-secondary-950 text-white lg:text-[unset] lg:bg-white shadow-sm fixed top-0 left-0 md:static z-[998]'
      }
    >
      <div className={'px-5 py-2 flex items-center'}>
        <HeaderMenuIcon />

        <div className={'flex gap-2 items-center w-fit relative group ml-auto'}>
          <p className={''}>{capitalizeAllFirstLetter(display_name)}</p>
          {avatar ? (
            <Image
              src={avatar}
              width={50}
              height={50}
              quality={100}
              alt="user image"
              className="rounded-full border-[1px] border-[#ccc]"
            />
          ) : (
            <Icon_user_circled className="size-[62px]" />
          )}
          <div
            className={
              'group-hover:block hidden absolute top-[58px] pt-[8px]  right-0 w-[200px] rounded-sm shadow-sm before:absolute before:top-0 before:right-6 before:w-4 before:h-4 before:bg-white before:border-[#ccc] before:border-t-[1px] before:border-l-[1px] before:z-0 before:rotate-45 z-[998]'
            }
          >
            <div
              className={
                'bg-white text-secondary border-[1px] border-[#ccc] divide-y-[1px] divide-neutral-200'
              }
            >
              <Link href={'/billing'}>
                <div className={'py-3 px-5'}>
                  <p className={''}>Billing & Upgrade</p>
                </div>
              </Link>
              <LogoutButton className="active:bg-secondary-50 py-3 px-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
