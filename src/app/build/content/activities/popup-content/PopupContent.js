'use client'
import React, { useState } from 'react'
import { activityList } from './list'
import Image from 'next/image'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import { useStore } from 'zustand'
import buildStore from '@/utilities/store/buildStore'
import Button from '@/app/components/Button'

const PopupContent = ({ setpopup }) => {
  const { selectedActivities, setselectedActivities } = useStore(buildStore)
  const [list, setlist] = useState(activityList)
  const [tempSelections, settempSelections] = useState([])

  const handleAdd = (item) => {
    settempSelections([
      ...tempSelections,
      { ...item, id: `${item.id}${Date.now()}` },
    ])
    setlist(
      list?.map((temp) => {
        if (temp.id === item.id) {
          const newTemp = {
            ...temp,
            qty: temp?.qty + 1,
            id: `${temp.id}${Date.now()}`,
          }
          return newTemp
        } else {
          return temp
        }
      })
    )
  }
  const handleDeduct = (item) => {
    // const ind = tempSelections?.findIndex((temp) => temp.name === item.name)
    // const asdf = tempSelections?.filter(
    //   (_, index) =>
    //     index !== tempSelections?.findIndex((temp) => temp.name === item.name)
    // )
    settempSelections(
      tempSelections?.filter(
        (_, index) =>
          index !== tempSelections?.findIndex((temp) => temp.name === item.name)
      )
    )
    setlist(
      list?.map((temp) => {
        if (temp.id === item.id && temp.qty) {
          const newTemp = { ...temp, qty: temp?.qty - 1 }
          return newTemp
        } else return temp
      })
    )
  }
  const handleAddActivities = () => {
    if (tempSelections?.length < 1) return
    setlist(activityList)
    settempSelections([])
    setselectedActivities(tempSelections)
    setpopup(null)
  }

  const handleCancel = () => {
    setpopup(false)
  }
  return (
    <div className={'flex flex-col w-full'}>
      <div className={'px-6 flex sticky top-0 z-10 py-1 bg-white'}>
        <p className={'py-4 border-b-[1px] w-full text-lg font-semibold'}>
          Add Activities
        </p>
      </div>
      <div className="py-6 pl-6 pr-2 w-full overflow-y-auto scroll-">
        <div className={'h-full w-4 bg-white z-50 absolute top-0 right-0'} />
        <div className={'flex flex-col gap-6'}>
          {list?.map((item, index) => {
            const { id, img, name, description, qty } = item
            return (
              <div
                className={'flex flex-col md:flex-row gap-4 justify-between'}
                key={index}
              >
                <div className={'flex gap-4'}>
                  <Image
                    width={48}
                    height={48}
                    src={img}
                    alt="Activity"
                    quality={100}
                    className="size-12 min-w-12 min-h-12"
                  />
                  <div className={''}>
                    <p className={'font-semibold'}>{name}</p>
                    <p className={'text-sm text-neutral-500'}>{description}</p>
                  </div>
                </div>
                <div className={'flex items-center justify-center gap-3'}>
                  <div
                    onClick={() => handleDeduct(item)}
                    className={
                      'w-full h-full min-w-10 min-h-10 max-w-10 max-h-10 border-[1px] rounded-md flex justify-center items-center select-none cursor-default'
                    }
                  >
                    <p className={''}>-</p>
                  </div>
                  <Input
                    id={id}
                    readOnly={true}
                    type="telephone"
                    defaultValue={qty || ''}
                    className="text-center p-0 size-12 max-w-10 max-h-10 w-12 outline-none focus-visible:border-neutral-200 bg-neutral-100 cursor-default"
                  />
                  <div
                    onClick={() => handleAdd(item)}
                    className={
                      'w-full h-full min-w-10 min-h-10 max-w-10 max-h-10 border-[1px] rounded-md flex justify-center items-center select-none cursor-default'
                    }
                  >
                    <p className={''}>+</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div
        className={
          'px-6 flex items-center justify-between sticky top-0 z-10 py-3 bg-white'
        }
      >
        <Button onClick={handleCancel} className="h-12 px-5" variant="button2">
          Cancel
        </Button>
        <Button
          onClick={handleAddActivities}
          className={`h-12 px-5 ${
            tempSelections?.length < 1 && 'opacity-60 cursor-default'
          }`}
        >
          {tempSelections?.length < 1
            ? 'Select Activities'
            : `Add ${tempSelections?.length} Activities`}
        </Button>
      </div>
    </div>
  )
}

export default PopupContent
