'use client'
import Button from '@/app/components/Button'
import utilityStore from '@/utilities/store/utilityStore'
import { useStore } from 'zustand'

const Details = ({ item, applications }) => {
  const { setdrawer } = useStore(utilityStore)
  const handleDetailsClick = () => {
    if (applications) {
      const { applications, ...newItem } = item
      const asdf = { ...newItem, applications: applications[0] }
      setdrawer({ ...newItem, applications: applications[0] })
    } else {
      const { applications, ...newItem } = item
      setdrawer(newItem)
    }
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
