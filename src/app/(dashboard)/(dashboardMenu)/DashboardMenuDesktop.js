import Link from 'next/link'
import Image from 'next/image'
import saplogo from '@/app/images/SAP-logo-colored.png'
import Menu from './Menu'

const DashboardMenuDesktop = () => {
  return (
    <div
      className={
        'bg-white border-r-[1px] border-neutral-200 max-sm:fixed h-screen text-neutral-400 xl:w-[240px] 2xl:w-[297px] py-10 px-6'
      }
    >
      <div className={'h-fit mb-10 w-fit'}>
        <Link href={'/network'} prefetch>
          <Image src={saplogo} alt="SAP logo" quality={100} />
        </Link>
      </div>
      <Menu />
    </div>
  )
}

export default DashboardMenuDesktop
