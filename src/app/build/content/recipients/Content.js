/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useRef, useState } from 'react'
import Discover from './Discover'
import SelectedRecipients from './SelectedRecipients'
import { createClient } from '@/config/supabase/supabaseClient'
import { useQuery } from '@tanstack/react-query'
import Icon_dashboard from '@/app/components/icons/Icon_dashboard'
import Icon_row from '@/app/components/icons/Icon_row'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import InputGroup from '@/app/components/inputsFields/InputGroup/InputGroup'
import Icon_user2 from '@/app/components/icons/Icon_user2'
import { useStore } from 'zustand'
import buildStore from '@/utilities/store/buildStore'

const Content = () => {
  const { selectedRecipients, setfetchedAthletes } = useStore(buildStore)
  const [isDiscover, setisDiscover] = useState(true)
  const [isColumn, setisColumn] = useState(null)
  const formRef = useRef(null)
  const [defaultInputValue, setdefaultInputValue] = useState(null)
  const [searchResult, setsearchResult] = useState(null)

  const supabase = createClient()
  const { data: athletes } = useQuery({
    queryKey: ['athletes'],
    queryFn: async () => {
      const { data } = await supabase
        .from('users')
        .select()
        .eq('account_type', 'athlete')
      if (data) {
        return data
      }
    },
    refetchInterval: 3600 * 1000,
  })

  useEffect(() => {
    setfetchedAthletes(athletes)
  }, [athletes])

  const handleClick = (bool) => {
    setisDiscover(bool)
  }
  const handleLayout = (bool) => {
    setisColumn(bool)
  }

  const handleSearchChange = ({ target: { value } }) => {
    setdefaultInputValue(value)
    const arrVal = value?.split(' ')
    const first = athletes?.filter((item) =>
      arrVal?.some((i) => {
        if (!i) return false
        return item?.first_name?.toLowerCase()?.includes(i)
      })
    )
    const last = athletes?.filter((item) =>
      arrVal?.some((i) => {
        if (!i) return false
        return item?.last_name?.toLowerCase()?.includes(i)
      })
    )
    setsearchResult([...first, ...last])
  }

  const handleClear = () => {
    formRef.current.reset()
    setdefaultInputValue('')
    setsearchResult(null)
  }
  return (
    <div className="relative w-full h-full overflow-auto px-3 md:px-8 xl:px-14 2xl:px-20">
      <div className={'sticky top-0 bg-white z-50'}>
        <div
          className={
            'flex gap-5 md:gap-8 items-center pt-1 md:pt-2 border-b-2 w-full text-neutral-500 max-sm:text-sm'
          }
        >
          <p
            className={`relative cursor-default py-2 font-semibold ${
              isDiscover &&
              'text-neutral-900 before:absolute before:h-[2px] before:w-full before:-bottom-[2px] before:bg-secondary'
            }`}
            onClick={() => handleClick(true)}
          >
            Discover
          </p>
          <p
            className={`relative cursor-default py-2 font-semibold ${
              !isDiscover &&
              'text-neutral-900 before:absolute before:h-[2px] before:w-full before:-bottom-[2px] before:bg-secondary'
            }`}
            onClick={() => handleClick(false)}
          >
            Selected Recipients{' '}
            {selectedRecipients?.length > 0 && (
              <span>- {selectedRecipients?.length}</span>
            )}
          </p>
        </div>
        {isDiscover && (
          <div className={'mt-3'}>
            <form ref={formRef}>
              <InputGroup data-icon="left">
                <Input
                  defaultValue={defaultInputValue}
                  id="searchInput"
                  onChange={handleSearchChange}
                  className="rounded-full h-11"
                  placeholder="Search recipients"
                />
                <Icon_user2 className="peer-focus-visible:text-secondary absolute top-0 bottom-0 my-auto left-4 text-neutral-300" />
              </InputGroup>
            </form>
          </div>
        )}
        <div className={'flex items-center gap-2 justify-end py-2'}>
          <Icon_dashboard
            onClick={() => handleLayout(true)}
            className={`rounded-sm text-neutral-500 size-8 p-[6px] hover:bg-neutral-50 ${
              isColumn && 'bg-neutral-100'
            }`}
          />
          <Icon_row
            onClick={() => handleLayout(false)}
            className={`rounded-sm text-neutral-500 size-7 p-[6px] hover:bg-neutral-50 ${
              !isColumn && 'bg-neutral-100'
            }`}
          />
        </div>
      </div>
      <div className={'flex'}>
        {isDiscover && (
          <Discover
            isColumn={isColumn}
            athletes={(defaultInputValue && searchResult) || athletes}
            handleClear={handleClear}
          />
        )}
        {!isDiscover && (
          <SelectedRecipients
            athletes={(defaultInputValue && searchResult) || athletes}
            isColumn={isColumn}
            setisDiscover={setisDiscover}
          />
        )}
      </div>
    </div>
  )
}

export default Content
