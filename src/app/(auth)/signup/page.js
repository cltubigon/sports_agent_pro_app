import React, { Suspense } from 'react'
import MenuContainer from './menu-container/MenuContainer'
import StepsContainer from './steps-container/StepsContainer'
import BottomSection from './BottomSection'
import { getCurrentUser } from '@/config/supabase/getCurrentUser'
import { redirect } from 'next/navigation'

const SignupPage = async () => {
  const user = await getCurrentUser()
  // if (!user?.currentLocation) {
  //   redirect('/signup?step=2')
  // }
  console.log('user', user)
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
        <Suspense fallback={<p className={''}>Loading...</p>}>
          <MenuContainer />
        </Suspense>
        <div className={'w-full h-full flex flex-col px-8 md:px-10 lg:px-20'}>
          <Suspense fallback={<p className={''}>Loading...</p>}>
            <StepsContainer user={user} />
            <BottomSection />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
