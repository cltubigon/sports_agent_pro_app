import React, { useEffect, useState } from 'react'
import AthleteComp from './AthleteComp'
import { useStore } from 'zustand'
import utilityStorePersist from '@/utilities/store/utilityStorePersist'

const Favorites = ({ person, currentUser }) => {
  const [favorites, setfavorites] = useState([])
  const { favorites: comp } = useStore(utilityStorePersist)

  const funcSetFavorites = () => {
    setfavorites(
      JSON.parse(localStorage.getItem('utilityStorePersist'))?.state?.favorites
    )
  }
  console.log('favorites', favorites)
  console.log('comp', comp)
  useEffect(() => {
    funcSetFavorites()
  }, [comp])

  const filtered = favorites?.filter(
    (item) => item.owner_id === currentUser?.id
  )
  const filteredPeople = person?.filter((item) =>
    filtered?.some((i) => i?.id === item?.id)
  )
  console.log('filteredPeople', filteredPeople)
  return (
    <>
      <AthleteComp person={filteredPeople} currentUser={currentUser} />
    </>
  )
}

export default Favorites
