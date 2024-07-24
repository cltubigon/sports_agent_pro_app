'use client'
import React from 'react'
import AthleteComp from './AthleteComp'
import utilityStore from '@/utilities/store/utilityStore'
import { useStore } from 'zustand'
import Favorites from './Favorites'

const ShowAthletes = ({ person, currentUser }) => {
  const { showFavorites } = useStore(utilityStore)
  // console.log('showFavorites', showFavorites)
  console.log('currentUser?.id', currentUser?.id)
  return (
    <>
      {!showFavorites && (
        <AthleteComp person={person} currentUser={currentUser} />
      )}
      {showFavorites && <Favorites person={person} currentUser={currentUser} />}
    </>
  )
}

export default ShowAthletes
