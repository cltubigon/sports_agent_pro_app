'use client'
import Button from '@/app/components/Button'
import React from 'react'

const ApplyButton = ({ item }) => {
  const handleApply = () => {}
  return (
    <Button
      onClick={handleApply}
      className="w-full h-12 border-secondary text-secondary md:hover:bg-secondary-50"
      variant="button2"
      size="size2"
    >
      Apply
    </Button>
  )
}

export default ApplyButton