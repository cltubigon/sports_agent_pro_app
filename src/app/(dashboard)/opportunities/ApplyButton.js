/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Button from '@/app/components/Button'
import React, { useEffect, useState } from 'react'
import { applyToPost, unApplyToPost } from './actions'
import { useStore } from 'zustand'
import opportunityStore from '@/utilities/store/opportunityStore'

const ApplyButton = ({ item, applications }) => {
  const { hasApplied, sethasApplied } = useStore(opportunityStore)
  const applied = hasApplied?.some((i) => i === item?.id)
  // const [hasApplied, sethasApplied] = useState(
  //   applications?.post_id === item?.id || false
  // )
  // console.log('item', item)
  // console.log('applications', applications)

  console.log('hasApplied', hasApplied)
  // useEffect(() => {
  //   if (item?.id === applications?.post_id) {
  //     console.log('istrue', item?.id)
  //     sethasApplied([...hasApplied, item?.id])
  //   }
  // }, [])

  const handleApply = async () => {
    if (!applied) {
      sethasApplied([...hasApplied, item?.id])
      console.log('applying')
      await applyToPost(item)
    } else {
      sethasApplied(hasApplied?.filter((i) => i !== item?.id))
      console.log('not applying')
      const error = await unApplyToPost(applications)
      console.log('error', error)
    }
  }
  return (
    <Button
      onClick={handleApply}
      className="w-full h-12 border-secondary text-secondary md:hover:bg-secondary-50"
      variant="button2"
      size="size2"
    >
      {applied ? 'Applied' : 'Apply'}
    </Button>
  )
}

export default ApplyButton
