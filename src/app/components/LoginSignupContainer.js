'use client'
import Image from 'next/image'
import Link from 'next/link'
import saplogo from '@/app/images/SAP-logo-colored.png'

const LoginSignupContainer = ({ children, parameters }) => {
  return (
    <div
      className={
        'flex md:items-center pt-6 md:pt-0 justify-center h-screen md:bg-[#F2F9FF] text-center relative'
      }
    >
      <div className={'w-full px-4 flex flex-col items-center'}>
        <div className={'w-full px-3 md:px-0'}>
          <div className={'w-fit mx-auto'}>
            <Link href={'/'}>
              <Image src={saplogo} alt="SAP Logo" />
            </Link>
          </div>
          <p
            className={
              'font-semibold text-neutral-700 text-xl md:text-2xl mt-2 md:mt-4'
            }
          >
            {parameters?.formTitle || 'Sign in to your account'}
          </p>
        </div>
        <div
          className={
            'flex flex-col w-full max-w-[480px] md:shadow-md md:mt-6 py-6 md:p-10 md:min-w-[480px] rounded-md bg-white text-left'
          }
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default LoginSignupContainer
