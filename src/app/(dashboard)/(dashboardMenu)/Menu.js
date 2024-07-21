/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Link from 'next/link'
import { dashboardMenuList } from './dashboardMenuList'
import { usePathname } from 'next/navigation'

const Menu = () => {
  const pathName = usePathname()
  return (
    <div className={'flex flex-col'}>
      {dashboardMenuList.map((menu, index) => {
        const { name, link, Icon } = menu
        return (
          <Link href={link} key={index} prefetch>
            <div
              className={`flex px-5 items-center gap-4 py-4 border-l-[2px] rounded-lg ${
                pathName === link
                  ? ' border-secondary text-secondary bg-secondary-50'
                  : 'border-transparent'
              } hover:text-secondary`}
            >
              <Icon className={`size-7`} />
              <p className={`font-semibold`}>{name}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Menu
