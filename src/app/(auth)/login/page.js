import { Suspense } from 'react'
import ClientLogin from './ClientLogin'
import MenuContainerFallback from '../signup/menu-container-fallback/MenuContainerFallback'
import StepsFallback from '../signup/steps-container/StepsFallback'
import MenuContainer from './MenuContainer'

const LoginPage = () => {
  return (
    <>
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
              <ClientLogin />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
