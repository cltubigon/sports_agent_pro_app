'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import buildStore from '@/utilities/store/buildStore'
import opportunityStore from '@/utilities/store/opportunityStore'
import React, { useEffect } from 'react'
import { useStore } from 'zustand'

const Header = ({ children, posts }) => {
  const { resetbuildStore } = useStore(buildStore)
  const { hasApplied, sethasApplied } = useStore(opportunityStore)

  // useEffect(() => {
  //   if (item?.id === applications?.post_id) {
  //     console.log('istrue', item?.id)
  //     sethasApplied([...hasApplied, item?.id])
  //   }
  // }, [])

  useEffect(() => {
    sethasApplied([
      ...posts
        ?.filter((i) => i.applications?.length > 0)
        ?.map((i) => i?.applications[0]?.post_id),
    ])
    resetbuildStore()
  }, [])
  return (
    <div
      className={
        'w-full flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2'
      }
    >
      {children}
    </div>
  )
}

export default Header
