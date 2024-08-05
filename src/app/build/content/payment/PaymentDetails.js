'use client'
import React, { useEffect, useState } from 'react'
import ModuleContainer from '../review/ModuleContainer'
import { useStore } from 'zustand'
import buildStore from '@/utilities/store/buildStore'

const PaymentDetails = () => {
  const { selectedActivities } = useStore(buildStore)
  const [compensation, setcompensation] = useState(0)
  const [fee, setfee] = useState(0)

  useEffect(() => {
    if (selectedActivities?.length > 1) {
      const allActivityAmounts = selectedActivities?.map((item) =>
        parseFloat(item?.compensation?.replace('$ ', '') || 0)
      )
      setcompensation(allActivityAmounts?.reduce((accu, curr) => accu + curr))
    } else if (selectedActivities?.length === 1) {
      setcompensation(
        parseFloat(
          parseFloat(
            selectedActivities[0]?.compensation?.replace('$ ', '') || 0
          )?.toFixed(2)
        )
      )
    }
  }, [selectedActivities])

  useEffect(() => {
    const calcFee = parseFloat((compensation * 0.05)?.toFixed(2))
    setfee(calcFee)
  }, [compensation])
  return (
    <div>
      <ModuleContainer title={'Payment details'}>
        <div className={'flex flex-col gap-1'}>
          <div className={'flex items-center justify-between'}>
            <p className={''}>Recipient compensation</p>
            <p className={''}>${compensation}</p>
          </div>
          <div className={'flex items-center justify-between'}>
            <p className={''}>
              Marketplace fee<span className="text-red-500">*</span>
            </p>
            <p className={''}>${fee}</p>
          </div>
          <div
            className={
              'flex items-center text-xl font-semibold text-secondary justify-between border-t-[1px] mt-2 pt-3'
            }
          >
            <p className={''}>Total due</p>
            <p className={''}>${(compensation + fee).toFixed(2)}</p>
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
