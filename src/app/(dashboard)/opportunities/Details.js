'use client'
import Button from '@/app/components/Button'
import utilityStore from '@/utilities/store/utilityStore'
import { useStore } from 'zustand'

const Details = ({ item }) => {
  const { setdrawer } = useStore(utilityStore)

  const handleDetailsClick = () => {
    setdrawer(item)
  }
  return (
    <>
      <Button
        onClick={handleDetailsClick}
        className="w-full h-12 border-secondary text-secondary md:hover:bg-secondary-50"
        variant="button2"
        size="size2"
      >
        Details
      </Button>
    </>
  )
}

export default Details
