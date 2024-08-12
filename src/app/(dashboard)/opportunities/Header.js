'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import buildStore from '@/utilities/store/buildStore'
import React, { useEffect } from 'react'
import { useStore } from 'zustand'

const Header = ({ children }) => {
  const { resetbuildStore } = useStore(buildStore)

  useEffect(() => {
    resetbuildStore()
  }, [])
  return (
    <div
      className={
        'w-full flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2'
      }
    >
      {children}
    </div>
  )
}

export default Header
