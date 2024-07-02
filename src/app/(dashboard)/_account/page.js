import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import React from 'react'

const AccountPage = async () => {
  const currentUser = await getCurrentUser()
  return (
    <div className={'w-full'}>
      <h2 className={'text-xl font-semibold text-primary'}>My Account</h2>
      <div className={'flex flex-col gap-2 my-5'}>
        <p className={''}>Email: {currentUser?.email}</p>
        <p className={''}>Account type: {currentUser?.role}</p>
      </div>
    </div>
  )
}

export default AccountPage
