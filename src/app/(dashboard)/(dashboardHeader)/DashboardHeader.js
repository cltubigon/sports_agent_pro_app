/* eslint-disable react-hooks/exhaustive-deps */
import HeaderMenuIcon from './HeaderMenuIcon'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import HeaderMenu from './header-menu/HeaderMenu'

const DashboardHeader = async () => {
  const currentUser = await getCurrentUser()
  return (
    <div
      className={
        'w-full bg-secondary-950 text-white lg:text-[unset] lg:bg-white shadow-sm fixed top-0 left-0 md:static z-[998]'
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
