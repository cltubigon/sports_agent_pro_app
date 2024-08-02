import React from 'react'
import ModuleContainer from '../review/ModuleContainer'

const PaymentDetails = () => {
  return (
    <div>
      <ModuleContainer title={'Payment details'}>
        <div className={'flex flex-col gap-1'}>
          <div className={'flex items-center justify-between'}>
            <p className={''}>Recipient compensation</p>
            <p className={''}>$50</p>
          </div>
          <div className={'flex items-center justify-between'}>
            <p className={''}>
              Marketplace fee<span className="text-red-500">*</span>
            </p>
            <p className={''}>$50</p>
          </div>
          <div
            className={
              'flex items-center text-xl font-semibold text-secondary justify-between border-t-[1px] mt-2 pt-3'
            }
          >
            <p className={''}>Total due</p>
            <p className={''}>$62.50</p>
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
