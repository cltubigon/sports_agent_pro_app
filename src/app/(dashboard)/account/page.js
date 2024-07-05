import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import React from 'react'
import ResetPassword from './reset-password/ResetPassword'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import DisplayNameContainer from './update-display-name/DisplayNameContainer'

const AccountPage = async () => {
  const currentUser = await getCurrentUser()
  return (
    <div className={'w-full'}>
      <h2 className={'text-xl font-semibold text-primary'}>My Account</h2>
      <div
        className={'grid grid-cols-1 md:grid-cols-2 gap-2 my-5 items-center'}
      >
        <p className={''}>Email:</p>
        <Input
          disabled
          value={currentUser?.email}
          className="border-neutral-200 text-neutral-400"
        />
        <p className={''}>Account type:</p>
        <Input
          disabled
          value={
            currentUser?.role === 'user' ? 'Basic user' : currentUser?.role
          }
          className="border-neutral-200 text-neutral-400 focus-visible:outline-white"
        />
        <p className={''}>Display name:</p>
        <DisplayNameContainer currentUser={currentUser} />
      </div>
      <ResetPassword />
    </div>
  )
}

export default AccountPage
