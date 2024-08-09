'use client'
import buildStore from '@/utilities/store/buildStore'
import utilityStore from '@/utilities/store/utilityStore'
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
  const { setdrawer } = useStore(utilityStore)

  const router = useRouter()
  const handleEdit = () => {
    // resetbuildStore()
    setdrawer(null)
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
