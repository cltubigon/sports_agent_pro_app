import React, { Suspense } from 'react'
import MenuContainer from './menu-container/MenuContainer'
import StepsContainer from './steps-container/StepsContainer'
import BottomSection from './BottomSection'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import { redirect } from 'next/navigation'
import MenuContainerFallback from './menu-container-fallback/MenuContainerFallback'
import StepsFallback from './steps-container/StepsFallback'

const SignupPage = async () => {
  const user = await getCurrentUser()
  if (
    user?.account_type &&
    user?.whichBestDescribesYou?.length > 0 &&
    user?.genderIdentity?.length > 0
  ) {
    redirect('/dashboard')
  }

  return (
    <div
      className={
        'xl:py-2 xl:px-10 bg-[#b51350] w-full h-screen flex items-center justify-center'
      }
    >
      <div
        className={
          'w-full h-full max-w-[1500px] xl:max-h-[800px] mx-auto bg-white xl:rounded-md flex flex-col lg:flex-row lg:overflow-hidden'
        }
      >
        <Suspense fallback={<MenuContainerFallback />}>
          <MenuContainer />
        </Suspense>
        <div className={'w-full h-full flex flex-col px-8 md:px-10 lg:px-20'}>
          <Suspense fallback={<StepsFallback />}>
            <StepsContainer user={user} />
            <BottomSection />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
