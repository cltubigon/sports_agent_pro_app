'use client'
import Button from '@/app/components/Button'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const ViewProfileButton = ({ user, className }) => {
  return (
    <div className={twMerge('flex gap-3', className)}>
      <div className={'w-fit'}>
        <Link href={`/${user?.id}`} target="_blank" prefetch>
          <Button variant="button2">View Profile</Button>
        </Link>
      </div>
    </div>
  )
}

export default ViewProfileButton
