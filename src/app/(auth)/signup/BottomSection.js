'use client'
import React from 'react'
import OAuthGoogleSignIn from '../login/OAuthGoogleSignIn'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const BottomSection = () => {
  const activeStepParams = useSearchParams().get('step')
  return (
    <>
      {activeStepParams !== '3' && (
        <div
          className={`relative ${
            activeStepParams === '2' ? 'min-h-[110px]' : 'min-h-[73px]'
          } border-t-[1px] w-full border-neutral-300 flex flex-col justify-center`}
        >
          {activeStepParams === '2' && (
            <>
              <p
                className={'bg-white absolute text-lg -top-4 pr-3 left-0 w-fit'}
              >
                Or continue with
              </p>
              <OAuthGoogleSignIn className={'max-w-[280px] mr-auto'}>
                Sign up with Google
              </OAuthGoogleSignIn>
            </>
          )}
          {!activeStepParams && (
            <p className={'w-full md:text-lg text-neutral-500 text-center'}>
              Already have an account?{' '}
              <Link href={'/login'} className="text-primary">
                Sign in
              </Link>
            </p>
          )}
        </div>
      )}
    </>
  )
}

export default BottomSection
