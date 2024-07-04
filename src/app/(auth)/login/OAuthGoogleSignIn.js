'use client'
import Icon_google from '@/app/components/icons/Icon_google'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import React, { useState } from 'react'
import { handleLoginWithOAuth } from './actions'

const OAuthGoogleSignIn = () => {
  const [loadingOAuth, setloadingOAuth] = useState(false)

  const handleOathLogin = (social) => {
    setloadingOAuth(true)
    handleLoginWithOAuth(social)
  }
  return (
    <div className={'flex gap-4 select-none'}>
      <div
        className={
          'flex cursor-pointer rounded-md w-full justify-center shadow-sm border-[1px] py-[10px] px-3 border-[#D1D5DB] gap-2'
        }
        onClick={() => handleOathLogin('google')}
      >
        <Icon_google className="size-6" />
        <div className={'relative'}>
          Google{' '}
          {loadingOAuth && (
            <Icon_spinner className="text-neutral-700 animate-spin absolute -right-8 top-0 bottom-0 my-auto" />
          )}
        </div>
      </div>
    </div>
  )
}

export default OAuthGoogleSignIn
