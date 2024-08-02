'use client'
import Button from '@/app/components/Button'
import Icon_left from '@/app/components/icons/Icon_left'
import buildStore from '@/utilities/store/buildStore'
import { useStore } from 'zustand'
import PaymentDetails from './PaymentDetails'
import TermsAndConditions from './TermsAndConditions'
import Icon_check2 from '@/app/components/icons/Icon_check2'
import { useState } from 'react'
import Toast from '@/app/components/Toast'

const Payment = () => {
  const { setactiveStep, dealType, list } = useStore(buildStore)
  const [hasAcceptedTC, sethasAcceptedTC] = useState(true)
  const [toast, settoast] = useState(null)

  const allOK = list?.find((item) => item.id === 'review')?.isOK
  console.log('allOK', allOK)
  const handlePrev = () => {
    setactiveStep('review')
  }
  console.log('hasAcceptedTC', hasAcceptedTC)
  const handleSubmit = () => {
    console.log('disabled')
    if (!hasAcceptedTC && !allOK) return
    console.log('submitting data')
  }
  return (
    <div className={'w-full h-full bg-white flex flex-col justify-between'}>
      {/* Header */}
      <Toast parameters={{ toast, settoast }} />
      <div
        className={'py-1 md:py-4 border-b-2  px-3 md:px-8 xl:px-14 2xl:px-20'}
      >
        <h5 className={'font-oswald text-2xl md:text-3xl font-bold'}>
          Payment
        </h5>
        <p className={'text-neutral-600 text-sm md:text-[15px] mt-1'}>
          Select your payment method and agree to Sports Agent Pro terms
        </p>
      </div>
      <div
        className={
          'flex flex-col gap-5 py-5 md:py-10 w-full items h-full overflow-auto px-3 md:px-8 xl:px-14 2xl:px-20'
        }
      >
        {/* Content */}
        <PaymentDetails />
        <TermsAndConditions sethasAcceptedTC={sethasAcceptedTC} />
      </div>
      {/* Footer */}
      <div
        className={
          'flex justify-between py-2 md:py-4 border-t-2 px-3 md:px-8 xl:px-14 2xl:px-20'
        }
      >
        <Button
          onClick={handlePrev}
          className="h-10 max-sm:text-sm md:h-12 max-sm:px-3"
        >
          <Icon_left /> Previous
        </Button>
        <Button
          disabled={(!hasAcceptedTC || !allOK) && true}
          onClick={handleSubmit}
          className={`h-10 max-sm:text-sm md:h-12 max-sm:px-3 ${
            (!hasAcceptedTC || !allOK) && 'opacity-60'
          }`}
        >
          {dealType === 'offer' ? 'Send Offer' : 'List opportunity'}{' '}
          <Icon_check2 />
        </Button>
      </div>
    </div>
  )
}

export default Payment
