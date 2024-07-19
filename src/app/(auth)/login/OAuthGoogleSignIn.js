'use client'
import Icon_google from '@/app/components/icons/Icon_google'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import React, { useState } from 'react'
import { handleLoginWithOAuth } from './actions'
import { twMerge } from 'tailwind-merge'
import { useStore } from 'zustand'
import signupStore from '@/utilities/store/signupStore'

const OAuthGoogleSignIn = ({ children, className }) => {
  const [loadingOAuth, setloadingOAuth] = useState(false)
  const { accountType } = useStore(signupStore)

  const handleOathLogin = (social) => {
    setloadingOAuth(true)
    handleLoginWithOAuth({ accountType, social })
  }
  return (
    <div
      className={twMerge('flex gap-4 select-none w-full bg-white', className)}
    >
      <div
        className={
          'flex cursor-pointer rounded-full w-full justify-center shadow-sm border-[1px] py-[10px] px-3 border-[#D1D5DB] gap-2'
        }
        onClick={() => handleOathLogin('google')}
      >
        <Icon_google className="size-6" />
        <div className={'relative'}>
          {children}{' '}
          {loadingOAuth && (
            <Icon_spinner className="text-neutral-700 animate-spin absolute -right-8 top-0 bottom-0 my-auto" />
          )}
        </div>
      </div>
    </div>
  )
}

export default OAuthGoogleSignIn
