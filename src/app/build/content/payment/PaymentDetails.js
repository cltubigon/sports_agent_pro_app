import React, { useEffect, useState } from 'react'
import ModuleContainer from '../review/ModuleContainer'
import { useStore } from 'zustand'
import buildStore from '@/utilities/store/buildStore'
import { sendOffer } from './actions'

const PaymentDetails = () => {
  const { selectedActivities } = useStore(buildStore)
  const [amount, setamount] = useState(null)
  const [totalDue, settotalDue] = useState(null)

  const stringged = '2.45'
  const converted = parseFloat(stringged)
  console.log('typeof converted', typeof converted)

  useEffect(() => {
    if (selectedActivities?.length > 1) {
      setamount(
        selectedActivities?.reduce((accu, currVal) => {
          const accumulated =
            parseFloat(accu?.compensation?.replace('$ ', ''))?.toFixed(2) +
            parseFloat(currVal?.compensation?.replace('$ ', ''))?.toFixed(2)
          console.log('accumulated', accumulated)
          return accumulated
        })
      )
    } else if (selectedActivities?.length === 1) {
      setamount(
        parseFloat(
          selectedActivities[0]?.compensation?.replace('$ ', '')
        )?.toFixed(2)
      )
    }
  }, [selectedActivities])

  useEffect(() => {
    settotalDue((amount * 0.05)?.toFixed(2))
  }, [amount])

  console.log('typeof amount', typeof amount)
  console.log('typeof totalDue', typeof totalDue)
  console.log({ amount, totalDue })
  return (
    <div>
      <ModuleContainer title={'Payment details'}>
        <div className={'flex flex-col gap-1'}>
          <div className={'flex items-center justify-between'}>
            <p className={''}>Recipient compensation</p>
            <p className={''}>${amount || '0.00'}</p>
          </div>
          <div className={'flex items-center justify-between'}>
            <p className={''}>
              Marketplace fee<span className="text-red-500">*</span>
            </p>
            <p className={''}>${totalDue}</p>
          </div>
          <div
            className={
              'flex items-center text-xl font-semibold text-secondary justify-between border-t-[1px] mt-2 pt-3'
            }
          >
            <p className={''}>Total due</p>
            <p className={''}>${totalDue + amount}</p>
          </div>
        </div>
      </ModuleContainer>
      <p className={'text-sm mt-3 text-neutral-500'}>
        * This fee helps us keep Sports Agent Pro free for athletes and provide
        support on your deal.
      </p>
    </div>
  )
}

export default PaymentDetails
