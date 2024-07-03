'use client'
import Image from 'next/image'
import logo from '@/app/images/lt-logo-white.png'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/utilityStore'
import Icon_close from '@/app/components/icons/Icon_close'
import Link from 'next/link'
import { dashboardMenuList } from './dashboardMenuList'

const DashboardMenuMobile = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useStore(utilityStore)

  const handleCLose = () => {
    setIsMobileMenuOpen()
  }
  const handleMenuClick = () => {
    setIsMobileMenuOpen(false)
  }
  return (
    <>
      <div
        className={`bg-primary fixed h-screen text-white py-10 z-10 overflow-hidden shadow-md ${
          isMobileMenuOpen ? 'w-[300px] px-5' : 'w-0'
        } transition-all duration-500`}
      >
        {isMobileMenuOpen && (
          <Icon_close
            className="absolute top-3 right-3 select-none"
            onClick={handleCLose}
          />
        )}
        <div className={'h-fit mb-5 lg:mb-10 w-fit'}>
          <Link href={'/dashboard'}>
            <h3 className={'text-2xl min-w-[210px] md:text-3xl font-bold'}>
              Sports Agent Pro
            </h3>
          </Link>
        </div>
        <div
          className={'flex flex-col min-w-[250px] divide-y divide-primary-400'}
        >
          {dashboardMenuList.map((menu, index) => {
            const { name, link, Icon } = menu
            return (
              <Link href={link} key={index} prefetch onClick={handleMenuClick}>
                <div className={'flex items-center gap-4 py-4'}>
                  <Icon className={'text-white size-7'} />
                  <p className={''}>{name}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default DashboardMenuMobile
