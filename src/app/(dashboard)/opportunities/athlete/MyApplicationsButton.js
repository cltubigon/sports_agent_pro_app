'use client'
import Icon_cards from '@/app/components/icons/Icon_cards'
import opportunityStore from '@/utilities/store/opportunityStore'
import React from 'react'
import { useStore } from 'zustand'

const MyApplicationsButton = () => {
  const { isMyApplications, setisMyApplications } = useStore(opportunityStore)
  const setMyApplications = () => {
    setisMyApplications()
  }
  return (
    <div className="w-full min-w-[160px] flex gap-2 items-center" onClick={setMyApplications}>
      <Icon_cards className={`${isMyApplications && 'text-secondary'}`} />
      <p
        className={`text-nowrap cursor-default select-none ${
          isMyApplications && 'font-bold text-secondary'
        }`}
      >
        My Applications
      </p>
    </div>
  )
}

export default MyApplicationsButton
