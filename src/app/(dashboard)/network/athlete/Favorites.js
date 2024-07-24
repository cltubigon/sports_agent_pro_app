import utilityStorePersist from '@/utilities/store/utilityStorePersist'
import React, { useEffect, useState } from 'react'
import { useStore } from 'zustand'
import BrandComp from './BrandComp'

const Favorites = ({ brand, currentUser }) => {
  const [favorites, setfavorites] = useState([])
  const { favorites: comp } = useStore(utilityStorePersist)

  const funcSetFavorites = () => {
    setfavorites(
      JSON.parse(localStorage.getItem('utilityStorePersist'))?.state?.favorites
    )
  }

  useEffect(() => {
    funcSetFavorites()
  }, [comp])

  console.log('favorites', favorites)
  const filtered = favorites?.filter(
    (item) => item.owner_id === currentUser?.id
  )
  console.log('filtered', filtered)
  const filteredBrands = brand?.filter((item) =>
    filtered?.some((i) => i?.id === item?.id)
  )
  console.log('filteredBrands', filteredBrands)
  return (
    <>
      <BrandComp brand={filteredBrands} currentUser={currentUser} />
    </>
  )
}

export default Favorites
