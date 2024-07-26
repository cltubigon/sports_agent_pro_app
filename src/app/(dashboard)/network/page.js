import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import { createServer } from '@/config/supabase/supabaseServer'
import React from 'react'
import ShowBrands from './athlete/ShowBrands'
import ShowAthletes from './brand/ShowAthletes'
import Button from '@/app/components/Button'
import Icon_heart2 from '@/app/components/icons/Icon_heart2'
import SavedList from './saved-list/SavedList'

const getAccountType = async (type, supabase) => {
  const fetchUser = async (findThis) => {
    const { data: person } = await supabase
      .from('users')
      .select()
      .eq('account_type', findThis)
    return person
  }
  if (type === 'brand') {
    return await fetchUser('athlete')
  } else if (type === 'athlete') {
    return await fetchUser('brand')
  }
}

const DiscoverPage = async () => {
  const currentUser = await getCurrentUser()
  const supabase = createServer()
  const person = await getAccountType(currentUser?.account_type, supabase)
  return (
    <>
      <div
        className={
          'max-sm:mt-[68px] w-full py-5 border-b-[1px] border-neutral-200 bg-white px-5 flex items-center justify-between'
        }
      >
        <h3 className={'font-oswald text-2xl md:text-3xl font-bold'}>
          DISCOVER
        </h3>
        <SavedList />
      </div>
      <div
        className={
          'grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 md:gap-3 lg:gap-4 2xl:gap-8 p-5'
        }
      >
        {currentUser?.account_type === 'brand' && (
          <ShowAthletes person={person} currentUser={currentUser} />
        )}
        {currentUser?.account_type === 'athlete' && (
          <ShowBrands brand={person} currentUser={currentUser} />
        )}
      </div>
    </>
  )
}

export default DiscoverPage