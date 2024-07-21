'use client'
import Step1 from './Step1'
import { useSearchParams } from 'next/navigation'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

const StepsContainer = ({ user }) => {
  const activeStepParams = useSearchParams().get('step')
  return (
    <>
      {!activeStepParams && <Step1 />}
      {activeStepParams === '2' && <Step2 />}
      {activeStepParams === '3' && <Step3 />}
      {activeStepParams === '4' && (
        <Step4 activeStepParams={activeStepParams} user={user} />
      )}
    </>
  )
}

export default StepsContainer
