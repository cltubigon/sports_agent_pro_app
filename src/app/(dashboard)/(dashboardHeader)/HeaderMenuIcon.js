'use client'
import React from 'react'
import Icon_menu from '@/app/components/icons/Icon_menu'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/utilityStore'

const HeaderMenuIcon = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useStore(utilityStore)

  const handleMenuClick = () => {
    setIsMobileMenuOpen()
  }
  return (
    <>
      {!isMobileMenuOpen && (
        <Icon_menu
          className="size-8 select-none lg:hidden"
          onClick={handleMenuClick}
        />
      )}
    </>
  )
}

export default HeaderMenuIcon
