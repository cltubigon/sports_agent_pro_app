'use client'
import buildStore from '@/utilities/store/buildStore'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useStore } from 'zustand'

const useEditPost = ({ item }) => {
  const {
    setpostId,
    setdealType,
    setdealName,
    setbrief,
    setbriefDateOpen,
    setexpirationDate,
    setselectedActivities,
    setselectedRecipients,
  } = useStore(buildStore)

  const router = useRouter()
  const handleEdit = () => {
    // resetbuildStore()
    setpostId(item?.id)
    setdealType(item?.type || 'offer')
    setdealName(item?.title || null)
    setbrief(item?.brief || null)
    setbriefDateOpen(item?.expirationDate ? true : false)
    setexpirationDate(item?.expirationDate || null)
    setselectedActivities(item?.selectedActivities || [])
    setselectedRecipients(item?.selectedRecipients || [])
    router.push('/build')
  }
  return { handleEdit }
}

export default useEditPost
