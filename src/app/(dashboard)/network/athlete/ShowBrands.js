'use client'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/utilityStore'
import Favorites from './Favorites'
import BrandComp from './BrandComp'

const ShowBrands = ({ brand, currentUser }) => {
  const { showFavorites } = useStore(utilityStore)
  return (
    <>
      {!showFavorites && <BrandComp brand={brand} currentUser={currentUser} />}
      {showFavorites && <Favorites currentUser={currentUser} brand={brand} />}
    </>
  )
}

export default ShowBrands
