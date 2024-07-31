'use client'
import React from 'react'
import DealType from './deal-type/DealType'
import Details from './details.js/Details'
import { useStore } from 'zustand'
import buildStore from '@/utilities/store/buildStore'
import Recipients from './recipients/Recipients'

const ContentBuild = () => {
  const { activeStep } = useStore(buildStore)
  return (
    <>
      {activeStep === 'deal_type' && <DealType />}
      {activeStep === 'details' && <Details />}
      {activeStep === 'recipients' && <Recipients />}
    </>
  )
}

export default ContentBuild
