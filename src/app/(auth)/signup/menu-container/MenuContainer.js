'use client'
import React from 'react'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import { useSearchParams } from 'next/navigation'

const MenuContainer = () => {
  const activeStepParams = useSearchParams().get('step')

  const isStep2 = activeStepParams >= 2
  const isStep3 = activeStepParams >= 3
  const isStep4 = activeStepParams >= 4
  const isGreaterThanStep4 = activeStepParams > 4
  return (
    <>
      <DesktopMenu parameters={{isStep2, isStep3, isStep4, isGreaterThanStep4}} />
      <MobileMenu parameters={{isStep2, isStep3, isStep4, isGreaterThanStep4}} />
    </>
  )
}

export default MenuContainer
