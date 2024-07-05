import Link from 'next/link'
import { dashboardMenuList } from './dashboardMenuList'

const DashboardMenuDesktop = () => {
  return (
    <div
      className={
        'bg-secondary-950 max-sm:fixed h-screen text-white xl:w-[300px] 2xl:w-[360px] py-10 px-5'
      }
    >
      <div className={'h-fit mb-10 w-fit'}>
        <Link href={'/dashboard'}>
          <h3 className={'text-2xl md:text-3xl font-bold'}>Sports Agent Pro</h3>
        </Link>
      </div>
      <div className={'flex flex-col divide-y divide-secondary-700'}>
        {dashboardMenuList.map((menu, index) => {
          const { name, link, Icon } = menu
          return (
            <Link href={link} key={index} prefetch>
              <div className={'flex items-center gap-4 py-4'}>
                <Icon className={'text-white size-7'} />
                <p className={''}>{name}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default DashboardMenuDesktop
