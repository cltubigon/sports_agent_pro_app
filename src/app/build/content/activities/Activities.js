'use client'
import Button from '@/app/components/Button'
import Icon_left from '@/app/components/icons/Icon_left'
import Icon_right from '@/app/components/icons/Icon_right'
import buildStore from '@/utilities/store/buildStore'
import { useStore } from 'zustand'
import Content from './Content'
import Popup from '@/app/components/Popup'
import { useState } from 'react'
import Icon_megaphone from '@/app/components/icons/Icon_megaphone'
import PopupContent from './popup-content/PopupContent'
import Link from 'next/link'
import Icon_close from '@/app/components/icons/Icon_close'

const Activities = () => {
  const { setactiveStep, selectedActivities, dealType } = useStore(buildStore)
  const [popup, setpopup] = useState(null)

  const handlePopupOpen = () => {
    setpopup(true)
  }

  const handlePrev = () => {
    setactiveStep(dealType !== 'offer' ? 'details' : 'recipients')
  }
  const handleNext = () => {
    setactiveStep('review')
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
          Activities
        </h5>
        <p className={'text-neutral-600 text-sm md:text-[15px] mt-1'}>
          Select which activities recipients will be required to complete
        </p>
        <Link href={'/opportunities'} prefetch>
          <Icon_close className="absolute top-3 right-3" />
        </Link>
      </div>
      <div className={'flex flex-col gap-5 w-full items h-full overflow-auto'}>
        {/* Content */}
        {selectedActivities?.length > 0 ? (
          <Content handlePopupOpen={handlePopupOpen} />
        ) : (
          <div className="flex flex-col justify-center items-center w-full h-full overflow-auto px-3 md:px-8 xl:px-14 2xl:px-20">
            <Icon_megaphone className="size-10 mb-5" />
            <p className={'text-center text-xl font-semibold'}>
              No activities have been selected
            </p>
            <Button onClick={handlePopupOpen} className="h-12 mt-10">
              Add Activities
            </Button>
          </div>
        )}
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
      {popup && (
        <Popup
          data={{
            setpopup,
            noScrollbar: true,
            modalContainer: 'max-w-[760px] max-h-[100%]',
          }}
          className="md:py-3"
        >
          <PopupContent setpopup={setpopup} />
        </Popup>
      )}
    </div>
  )
}

export default Activities
