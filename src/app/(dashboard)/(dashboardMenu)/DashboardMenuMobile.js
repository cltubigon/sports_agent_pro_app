/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Image from 'next/image'
import logo from '@/app/images/lt-logo-white.png'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/utilityStore'
import Icon_close from '@/app/components/icons/Icon_close'
import Link from 'next/link'
import { dashboardMenuList } from './dashboardMenuList'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const DashboardMenuMobile = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useStore(utilityStore)
  const pathname = usePathname()
  const handleCLose = () => {
    setIsMobileMenuOpen()
  }
  const triggeredFunction2 = (e) => {
    const currElem = e.target?.className
    const currParent = e.target?.parentElement?.className

    if (typeof currElem === 'string' && typeof currParent === 'string') {
      if (
        !currElem?.includes('dashboard-menu') &&
        !currParent?.includes('dashboard-menu')
      ) {
        setIsMobileMenuOpen(false)
      }
    }
  }

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.addEventListener('click', (e) => triggeredFunction2(e))
  }, [])
  return (
    <>
      <div
        className={`dashboard-menu bg-secondary fixed h-screen text-white py-10 z-[999] overflow-hidden shadow-md ${
          isMobileMenuOpen ? 'w-[300px] px-5' : 'w-0'
        } transition-all duration-500`}
      >
        {isMobileMenuOpen && (
          <Icon_close
            className="absolute top-3 right-3 select-none"
            onClick={handleCLose}
          />
        )}
        <div className={'h-fit mb-5 lg:mb-10 w-full'}>
          <Link href={'/dashboard'} prefetch>
            <h3
              className={
                'dashboard-menu text-2xl md:text-3xl font-bold min-w-[255px]'
              }
            >
              Sports Agent Pro
            </h3>
          </Link>
        </div>
        <div
          className={
            'dashboard-menu flex flex-col min-w-[250px] divide-y divide-secondary-600'
          }
        >
          {dashboardMenuList.map((menu, index) => {
            const { name, link, Icon } = menu
            return (
              <Link href={link} key={index} prefetch>
                <div className={'dashboard-menu flex items-center gap-4 py-4'}>
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
