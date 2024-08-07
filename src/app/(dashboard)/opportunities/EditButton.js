'use client'
import Button from '@/app/components/Button'
import React from 'react'
import useEditPost from './hooks/useEditPost'
import { useStore } from 'zustand'
import utilityStore from '@/utilities/store/utilityStore'

const EditButton = ({ item }) => {
  const { handleEdit } = useEditPost({ item })
  return (
    <Button
      onClick={handleEdit}
      className="w-full h-12 border-secondary text-secondary md:hover:bg-secondary-50"
      variant="button2"
      size="size2"
    >
      Edit
    </Button>
  )
}

export default EditButton
