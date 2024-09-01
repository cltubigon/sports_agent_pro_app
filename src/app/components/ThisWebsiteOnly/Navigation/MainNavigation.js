'use client'
import Image from 'next/image'
import mainLogo from '@/app/images/SAP-logo-colored.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { restrictedPathsNavigationMenu } from '@/app/lib/restrictFooterNavigation'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const MainNavigation = () => {
  const pathName = usePathname()

  const restricted = restrictedPathsNavigationMenu.some((restrictedPath) =>
    pathName.includes(restrictedPath)
  )

  if (restricted) return

  const nav = [
    { path: '/', name: 'Home' },
    {
      name: 'Free Athlete Marketing',
      // path: '/free-athlete-marketing',
    },
    {
      name: 'Free Canva Template Package',
      // path: '/free-canva-template-package',
    },
    {
      name: 'Contact us',
      // path: '/contact-us',
    },
    // {
    //   name: 'Free Canva Template Package',
    //   path: '/maintenance-services',
    //   array: [
    //     {
    //       name: 'Grounds keeping and gardening services',
    //       path: 'grounds-keeping-and-gardening-services',
    //     },
    //     {
    //       name: 'Home Improvement',
    //       path: '/home-improvement',
    //     },
    //   ],
    // },
  ]

  return (
    <>
      <div className={`flex py-5 shadow-sm select-none`}>
        <div
          className={
            'flex justify-start xl:justify-between items-center gap-4 md:gap-4 xl:gap-[unset] max-w-[1720px] w-full mx-auto px-3 md:px-6 xl:px-10 2xl:px-0  z-[999]'
          }
        >
          <MobileNav parameters={{ nav, pathName }} />
          <Link href={'/'} className="max-sm:max-w-[80%]">
            <Image
              src={mainLogo}
              quality={100}
              priority
              className="max-sm:max-w-[100px] mx-auto"
              alt="Love Transfusion logo"
            />
          </Link>
          <DesktopNav parameters={{ nav, pathName }} />
        </div>
      </div>
    </>
  )
}

export default MainNavigation
