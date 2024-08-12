/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { applyToPost, unApplyToPost } from '../actions'
import ButtonLoader from '@/app/components/ButtonLoader'
import { useEffect, useState } from 'react'

const ApplyButton = ({ item }) => {
  const [loading, setloading] = useState(null)
  const hasApplied = item?.applications?.length > 0

  useEffect(() => {
    setloading(null)
  }, [hasApplied])

  const handleApply = async () => {
    setloading({ id: item?.id })

    if (!hasApplied) {
      const { data } = await applyToPost(item)
      if (!data) {
        changeLoading()
      }
    } else {
      const error = await unApplyToPost(item?.applications[0])
      if (error) {
        changeLoading()
      }
    }
  }
  return (
    <ButtonLoader
      onClick={handleApply}
      disabled={loading && true}
      className={`w-full h-12 ${
        hasApplied
          ? 'border-secondary bg-secondary text-white md:hover:bg-secondary-600'
          : 'border-secondary text-secondary md:hover:bg-secondary-50'
      }`}
      parameters={{ id: item?.id, loading, setloading }}
      variant="button2"
      size="size2"
    >
      {hasApplied ? 'Applied' : 'Apply'}
    </ButtonLoader>
  )
}

export default ApplyButton
