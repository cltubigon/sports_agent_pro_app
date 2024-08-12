/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { saveToList, unSaveToList } from '../actions'
import Icon_heart2 from '@/app/components/icons/Icon_heart2'
import Icon_heart2_filled from '@/app/components/icons/Icon_heart2_filled'
import { useEffect, useState } from 'react'
import Icon_spinner from '@/app/components/icons/Icon_spinner'

const SaveToListButton = ({ item }) => {
  const [loading, setloading] = useState(null)
  const hasSavedToList = item?.favorite_opportunities?.length > 0

  useEffect(() => {
    setloading(null)
  }, [hasSavedToList])

  const handleSave = async () => {
    setloading({ id: item?.id })

    if (!hasSavedToList) {
      const { data } = await saveToList(item)
      if (!data) {
        changeLoading()
      }
    } else {
      const error = await unSaveToList(item?.favorite_opportunities[0])
      if (error) {
        changeLoading()
      }
    }
  }
  return (
    <>
      {!loading ? (
        <>
          {hasSavedToList ? (
            <Icon_heart2_filled
              onClick={handleSave}
              className="size-4 text-primary"
            />
          ) : (
            <Icon_heart2
              onClick={handleSave}
              className="text-neutral-500 size-4"
            />
          )}
        </>
      ) : (
        <Icon_spinner className="text-neutral-500 animate-spin size-4" />
      )}
    </>
  )
}

export default SaveToListButton
