'use client'
import { logout } from '@/app/(auth)/signOut/actions'
import Icon_spinner from '@/app/components/icons/Icon_spinner'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const LogoutButton = ({ className }) => {
  const [loading, setloading] = useState(null)

  const handleLogout = async () => {
    setloading(true)
    await logout()
  }
  return (
    <>
      <div
        onClick={handleLogout}
        className={twMerge('cursor-pointer select-none w-full', className)}
      >
        <p className="w-fit relative">
          Logout{' '}
          {loading && (
            <Icon_spinner className="text-neutral-700 animate-spin absolute -right-8 top-0 bottom-0 my-auto" />
          )}
        </p>
      </div>
    </>
  )
}

export default LogoutButton
