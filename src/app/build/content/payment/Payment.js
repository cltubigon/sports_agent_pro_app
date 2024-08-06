'use client'
import Button from '@/app/components/Button'
import Icon_left from '@/app/components/icons/Icon_left'
import buildStore from '@/utilities/store/buildStore'
import { useStore } from 'zustand'
import PaymentDetails from './PaymentDetails'
import TermsAndConditions from './TermsAndConditions'
import { useState } from 'react'
import Toast from '@/app/components/Toast'
import { insertOrUpdate } from './actions'
import { formatDateToUTCString } from '@/utilities/date-and-time/formatDateToUTCString'
import { useRouter } from 'next/navigation'
import ButtonLoader from '@/app/components/ButtonLoader'
import Link from 'next/link'
import Icon_close from '@/app/components/icons/Icon_close'
import utilityStore from '@/utilities/store/utilityStore'

const Payment = () => {
  const {
    postId,
    selectedActivities,
    selectedRecipients,
    setactiveStep,
    dealType,
    dealName,
    brief,
    expirationDate,
    list,
  } = useStore(buildStore)
  const { setdrawer } = useStore(utilityStore)
  const [hasAcceptedTC, sethasAcceptedTC] = useState(true)
  const [toast, settoast] = useState(null)
  const [loading, setloading] = useState(null)
  const router = useRouter()

  const allOK = list?.find((item) => item.id === 'review')?.isOK
  const handlePrev = () => {
    setactiveStep('review')
  }
  const handleSubmit = async () => {
    if (!hasAcceptedTC && !allOK) return
    setloading({ id: 'submit' })
    const { data, error } = await insertOrUpdate({
      data: {
        type: dealType,
        title: dealName,
        brief,
        expirationDate: expirationDate
          ? formatDateToUTCString(expirationDate)
          : null,
        selectedRecipients: dealType === 'offer' ? selectedRecipients : [],
        selectedActivities,
      },
      id: postId ? postId : null,
    })
    if (data) {
      setdrawer(data[0])
      router.push('/opportunities')
    } else if (error) {
      settoast({
        description: error,
        status: 'error',
      })
    }
    setloading(null)
  }
  return (
    <div className={'w-full h-full bg-white flex flex-col justify-between'}>
      {/* Header */}
      <Toast parameters={{ toast, settoast }} />
      <div
        className={
          'relative py-1 md:py-4 border-b-2  px-3 md:px-8 xl:px-14 2xl:px-20'
        }
      >
        <h5 className={'font-oswald text-2xl md:text-3xl font-bold'}>
          Payment
        </h5>
        <p className={'text-neutral-600 text-sm md:text-[15px] mt-1'}>
          Select your payment method and agree to Sports Agent Pro terms
        </p>
        <Link href={'/opportunities'} prefetch>
          <Icon_close className="absolute top-3 right-3" />
        </Link>
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
          'flex flex-col md:flex-row gap-1 justify-between py-2 md:py-4 border-t-2 px-3 md:px-8 xl:px-14 2xl:px-20'
        }
      >
        <Button
          onClick={handlePrev}
          className="h-10 max-sm:w-full max-sm:text-sm md:h-12 max-sm:px-3"
        >
          <Icon_left /> Previous
        </Button>
        <ButtonLoader
          disabled={(!hasAcceptedTC || !allOK) && true}
          onClick={handleSubmit}
          className={`h-10 max-sm:w-full max-sm:text-sm md:h-12 max-sm:px-3 ${
            (!hasAcceptedTC || !allOK) && 'opacity-60'
          }`}
          parameters={{ id: 'submit', loading, setloading }}
        >
          {dealType === 'offer'
            ? postId
              ? 'Update offer'
              : 'Send offer'
            : postId
            ? 'Update opportunity'
            : 'List opportunity'}{' '}
        </ButtonLoader>
      </div>
    </div>
  )
}

export default Payment
