import Button from '@/app/components/Button'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const ViewProfileButton = ({ className }) => {
  return (
    <div className={twMerge('flex gap-3', className)}>
      <Button variant="button2">View Profile</Button>
    </div>
  )
}

export default ViewProfileButton
