'use client'
import Button from '@/app/components/Button'
import Icon_left from '@/app/components/icons/Icon_left'
import Icon_right from '@/app/components/icons/Icon_right'
import buildStore from '@/utilities/store/buildStore'
import { useStore } from 'zustand'
import Content from './Content'

const Recipients = ({ athletes, isColumn }) => {
  const { setactiveStep } = useStore(buildStore)
  const handleNext = () => {
    setactiveStep('activities')
  }
  const handlePrev = () => {
    setactiveStep('details')
  }
  return (
    <div className={'w-full h-full bg-white flex flex-col justify-between'}>
      {/* Header */}
      <div
        className={'py-1 md:py-4 border-b-2  px-3 md:px-8 xl:px-14 2xl:px-20'}
      >
        <h5 className={'font-oswald text-2xl md:text-3xl font-bold'}>
          Recipients
        </h5>
        <p className={'text-neutral-600 text-sm md:text-[15px] mt-1'}>
          Select which recipients you will be sending this to
        </p>
      </div>
      <div className={'flex flex-col gap-5 w-full items h-full overflow-auto'}>
        {/* Content */}
        <Content />
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

export default Recipients
