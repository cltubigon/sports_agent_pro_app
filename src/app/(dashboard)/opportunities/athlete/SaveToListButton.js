/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { saveToList, unSaveToList } from '../actions'
import { useStore } from 'zustand'
import opportunityStore from '@/utilities/store/opportunityStore'
import Icon_heart2 from '@/app/components/icons/Icon_heart2'
import Icon_heart2_filled from '@/app/components/icons/Icon_heart2_filled'

const SaveToListButton = ({ item, savedList }) => {
  const { hasSavedToList, sethasSavedToList } = useStore(opportunityStore)
  const hasSaved = hasSavedToList?.some((i) => i === item?.id)

  const handleSave = async () => {
    if (!hasSaved) {
      sethasSavedToList([...hasSavedToList, item?.id])
      await saveToList(item)
    } else {
      sethasSavedToList(hasSavedToList?.filter((i) => i !== item?.id))
      const error = await unSaveToList(savedList)
      console.log('error', error)
    }
  }
  return (
    <>
      {hasSavedToList ? (
        <>
          {hasSaved ? (
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
        <div
          className={
            'bg-gradient-to-br from-neutral-50 to-neutral-200 animate-pulse h-4 w-4 rounded-md'
          }
        />
      )}
    </>
  )
}

export default SaveToListButton
