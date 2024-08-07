import React from 'react'
import NavigationBuild from './navigation/NavigationBuild'
import ContentBuild from './content/ContentBuild'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import { redirect } from 'next/navigation'

const BuildPage = async () => {
  const user = await getCurrentUser()
  if (user?.account_type !== 'brand') redirect('/opportunities')
  return (
    <>
      <div className={'flex h-screen'}>
        <NavigationBuild />
        <ContentBuild />
      </div>
    </>
  )
}

export default BuildPage
