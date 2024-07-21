'use client'
import React from 'react'
import MobileMenu from './MobileMenuFallback'
import { useSearchParams } from 'next/navigation'
import MobileMenuFallback from './MobileMenuFallback'
import DesktopMenuFallback from './DesktopMenuFallback'
import DesktopMenu from '../menu-container/DesktopMenu'

const MenuContainerFallback = () => {
  const activeStepParams = useSearchParams().get('step')

  const isStep2 = activeStepParams >= 2
  const isStep3 = activeStepParams >= 3
  const isStep4 = activeStepParams >= 4
  const isGreaterThanStep4 = activeStepParams > 4
  return (
    <>
      <DesktopMenuFallback parameters={{isStep2, isStep3, isStep4, isGreaterThanStep4}} />
      <MobileMenuFallback parameters={{isStep2, isStep3, isStep4, isGreaterThanStep4}} />
    </>
  )
}

export default MenuContainerFallback
