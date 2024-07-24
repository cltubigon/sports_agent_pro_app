'use client'
import Button from '@/app/components/Button'
import Icon_heart2 from '@/app/components/icons/Icon_heart2'
import utilityStore from '@/utilities/store/utilityStore'
import React from 'react'
import { useStore } from 'zustand'

const SavedList = () => {
  const { showFavorites, setshowFavorites } = useStore(utilityStore)
  const handleClick = () => {
    setshowFavorites(!showFavorites)
  }
  return (
    <div className={''}>
      <Button
        onClick={handleClick}
        className={`h-[53px] ${
          !showFavorites &&
          'bg-neutral-50 hover:bg-neutral-100 outline-[2px] outline-neutral-500 border text-black'
        }`}
      >
        <Icon_heart2 className={!showFavorites && 'text-neutral-400'} />
        Saved List
      </Button>
    </div>
  )
}

export default SavedList
