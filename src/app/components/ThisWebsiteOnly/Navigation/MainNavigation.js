'use client'
import Image from 'next/image'
import mainLogo from '@/app/images/main-logo.png'
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
      name: 'Cleaning services',
      // path: '/cleaning-services',
      array: [
        {
          name: 'Cleaning Commercial and Domestic',
          path: '/cleaning-commercial-and-domestic',
        },
        {
          name: 'Professional carpet and upholstery cleaning',
          path: '/professional-carpet-and-upholstery-cleaning',
        },
        {
          name: 'Professional oven cleaning',
          path: '/professional-oven-cleaning',
        },
      ],
    },
    {
      name: 'Maintenance Services',
      // path: '/maintenance-services',
      array: [
        {
          name: 'Grounds keeping and gardening services',
          path: 'grounds-keeping-and-gardening-services',
        },
        {
          name: 'Home Improvement',
          path: '/home-improvement',
        },
      ],
    },
    {
      name: 'Contact us',
      path: '/contact-us',
    },
  ]

  return (
    <>
      <div className={`flex py-4 shadow-sm select-none`}>
        <div
          className={
            'flex justify-start xl:justify-between items-center gap-2 md:gap-4 xl:gap-[unset] max-w-[1150px] w-full mx-auto px-3 md:px-6 xl:px-0  z-[999]'
          }
        >
          <MobileNav parameters={{ nav, pathName }} />
          <Link href={'/'} className="max-sm:max-w-[80%]">
            <Image
              src={mainLogo}
              quality={100}
              priority
              className=" mx-auto"
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
