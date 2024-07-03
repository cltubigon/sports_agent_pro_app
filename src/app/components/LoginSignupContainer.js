'use client'
import mainLogo from '@/app/images/main-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const LoginSignupContainer = ({ children, parameters }) => {
  return (
    <div
      className={
        'flex md:items-center pt-6 md:pt-0 justify-center h-screen md:bg-[#F2F9FF] text-center relative'
      }
    >
      <div className={'flex flex-col'}>
        <div className={'px-3 md:px-0'}>
          <div className={'w-fit mx-auto'}>
            <Link href={'/'}>
              <h1 className={'text-4xl md:text-5xl font-bold'}>
                Sports Agent Pro
              </h1>
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
            'flex max-w-[480px] md:shadow-md md:mt-6 py-6 md:p-10 md:min-w-[480px] rounded-md bg-white text-left'
          }
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default LoginSignupContainer
