'use client'
import React from 'react'
import DealType from './deal-type/DealType'
import Details from './details.js/Details'
import { useStore } from 'zustand'
import buildStore from '@/utilities/store/buildStore'
import Recipients from './recipients/Recipients'
import Activities from './activities/Activities'

const ContentBuild = () => {
  const { activeStep } = useStore(buildStore)
  console.log('activeStep', activeStep)
  return (
    <>
      {activeStep === 'deal_type' && <DealType />}
      {activeStep === 'details' && <Details />}
      {activeStep === 'recipients' && <Recipients />}
      {activeStep === 'activities' && <Activities />}
    </>
  )
}

export default ContentBuild
