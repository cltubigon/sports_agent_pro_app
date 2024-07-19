import React from 'react'
import MenuContainer from './menu-container/MenuContainer'
import StepsContainer from './steps-container/StepsContainer'
import BottomSection from './BottomSection'

const SignupPage = () => {
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
        <MenuContainer />
        <div className={'w-full h-full flex flex-col px-8 md:px-10 lg:px-20'}>
          <StepsContainer />
          <BottomSection />
        </div>
      </div>
    </div>
  )
}

export default SignupPage
