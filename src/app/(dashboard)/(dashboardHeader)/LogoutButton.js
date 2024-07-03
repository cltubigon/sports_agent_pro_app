'use client'
import { logout } from '@/app/(auth)/signOut/actions'
import React from 'react'

const LogoutButton = () => {
  const handleLogout = async () => {
    await logout()
  }
  return (
    <>
      <p
        className={'py-3 px-5 cursor-pointer text-[#000]'}
        onClick={handleLogout}
      >
        Logout
      </p>
    </>
  )
}

export default LogoutButton
