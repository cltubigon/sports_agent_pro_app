'use client'
import Button from '@/app/components/Button'

const Details = ({ item, setactiveID }) => {
  const handleDetailsClick = () => {
    setactiveID(item?.id)
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
