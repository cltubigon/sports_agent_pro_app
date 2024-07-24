'use client'
import Icon_heart2 from '@/app/components/icons/Icon_heart2'
import Icon_heart2_filled from '@/app/components/icons/Icon_heart2_filled'
import utilityStorePersist from '@/utilities/store/utilityStorePersist'
import React from 'react'
import { useStore } from 'zustand'

const Heart = ({ id, owner_id }) => {
  const { favorites, setfavorites } = useStore(utilityStorePersist)
  const handleHeartClick = () => {
    if (
      !favorites?.some((item) => item.id === id && item.owner_id === owner_id)
    ) {
      setfavorites([...favorites, { owner_id, id }])
    } else {
      setfavorites(
        favorites?.filter(
          (item) => item.id !== id && item.owner_id === owner_id
        )
      )
    }
  }
  const has = favorites?.some(
    (item) => item?.owner_id === owner_id && item?.id === id
  )
  return (
    <div
      onClick={handleHeartClick}
      className={'absolute top-5 right-5 rounded-full bg-white p-2 z-50'}
    >
      {has ? (
        <Icon_heart2_filled className="size-4 text-primary" />
      ) : (
        <Icon_heart2 className="size-4 text-primary" />
      )}
    </div>
  )
}

export default Heart
