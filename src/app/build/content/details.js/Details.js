'use client'
import Button from '@/app/components/Button'
import Icon_left from '@/app/components/icons/Icon_left'
import Icon_right from '@/app/components/icons/Icon_right'
import Input from '@/app/components/inputsFields/InputGroup/Input'
import buildStore from '@/utilities/store/buildStore'
import { useStore } from 'zustand'
import Brief from './Brief'
import ExpirationDate from './ExpirationDate'
import Link from 'next/link'
import Icon_close from '@/app/components/icons/Icon_close'

const Details = () => {
  const { dealName, setdealName, setactiveStep, dealType } =
    useStore(buildStore)

  const handleDealNameChange = ({ target: { value } }) => {
    setdealName(value)
  }

  const handlePrev = () => {
    setactiveStep('deal_type')
  }
  const handleNext = () => {
    setactiveStep(dealType !== 'offer' ? 'activities' : 'recipients')
  }
  return (
    <div className={'w-full h-full bg-white flex flex-col justify-between'}>
      {/* Header */}
      <div
        className={
          'relative py-1 md:py-4 border-b-2  px-3 md:px-8 xl:px-14 2xl:px-20'
        }
      >
        <h5 className={'font-oswald text-2xl md:text-3xl font-bold'}>
          Details
        </h5>
        <p className={'text-neutral-600 text-sm md:text-[15px] mt-1'}>
          Add information about your deal that will be shared with recipients
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
        <p className={'text-xl text-neutral-400 font-bold'}>Deal information</p>
        <div className={'flex flex-col gap-3'}>
          <div className={''}>
            <label htmlFor="dealName">
              Offer name <span className="text-red-500">*</span>
            </label>
            <p className={'text-xs text-neutral-400'}>
              Choose something clear and concise, but make it memorable!
            </p>
          </div>
          <Input
            defaultValue={dealName}
            id="dealName"
            onChange={handleDealNameChange}
          />
        </div>
        <Brief />
        <p className={'text-xl max-sm:mt-5 text-neutral-400 font-bold'}>
          Deal options
        </p>
        <ExpirationDate />
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
          onClick={handleNext}
          className="h-10 max-sm:text-sm md:h-12 max-sm:px-3"
        >
          Next <Icon_right />
        </Button>
      </div>
    </div>
  )
}

export default Details
