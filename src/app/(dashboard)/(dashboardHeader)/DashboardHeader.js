/* eslint-disable react-hooks/exhaustive-deps */
import HeaderMenuIcon from './HeaderMenuIcon'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import HeaderMenu from './header-menu/HeaderMenu'

const DashboardHeader = async () => {
  const currentUser = await getCurrentUser()
  return (
    <div
      className={
        'w-full bg-secondary text-white lg:text-[unset] lg:bg-white fixed top-0 left-0 md:static z-[900] border-b-[1px] border-neutral-200'
      }
    >
      <div className={'px-5 py-2 flex items-center'}>
        <HeaderMenuIcon />
        <HeaderMenu currentUser={currentUser} />
      </div>
    </div>
  )
}

export default DashboardHeader
