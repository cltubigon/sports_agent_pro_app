'use client'
import Icon_heart_list from '@/app/components/icons/Icon_heart_list'
import opportunityStore from '@/utilities/store/opportunityStore'
import React from 'react'
import { useStore } from 'zustand'

const MySavedList = () => {
  const { isMySavedList, setisMySavedList } = useStore(opportunityStore)
  const setMySavedList = () => {
    setisMySavedList()
  }
  return (
    <div className="w-full min-w-[160px] flex gap-2 items-center">
      <div className="w-full flex gap-2 items-center" onClick={setMySavedList}>
        <Icon_heart_list className={`${isMySavedList && 'text-secondary'}`} />
        <p
          className={`text-nowrap cursor-default select-none ${
            isMySavedList && 'font-bold text-secondary'
          }`}
        >
          My Saved List
        </p>
      </div>
    </div>
  )
}

export default MySavedList
