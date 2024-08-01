'use client'
import Button from '@/app/components/Button'
import Icon_trash from '@/app/components/icons/Icon_trash'
import DateInput from '@/app/components/inputsFields/DateInput'
import NumberInput from '@/app/components/inputsFields/InputGroup/NumberInput'
import buildStore from '@/utilities/store/buildStore'
import Image from 'next/image'
import { useStore } from 'zustand'

const Content = ({ handlePopupOpen }) => {
  const { selectedActivities, setDate, setCompensation, trashActivity } =
    useStore(buildStore)

  const handleDateChange = ({ target: { value } }, item) => {
    setDate({ ...item, date: value })
  }
  const handleChange = ({ target: { value } }, item) => {
    setCompensation({ ...item, compensation: value })
  }
  const handleTrash = (item) => {
    trashActivity(item)
  }
  console.log('selectedActivities', selectedActivities)
  return (
    <div className="relative w-full h-auto px-3 md:px-8 xl:px-14 2xl:px-20">
      <div className={'sticky top-0 bg-white z-50 py-2'}>
        <Button
          onClick={handlePopupOpen}
          className="max-sm:h-10 h-12 max-sm:px-3 md:h-12 ml-auto"
        >
          Add Activities
        </Button>
        <div
          className={
            'hidden mt-3 md:grid grid-cols-4 bg-secondary text-white py-4 px-3 rounded-tl-xl rounded-tr-xl'
          }
        >
          <p className={''}>Activity</p>
          <p className={''}>Compensation</p>
          <p className={''}>Due date</p>
          <p className={''}>Actions</p>
        </div>
      </div>
      <div
        className={
          'relative flex flex-col pb-5 w-full overflow-x-auto overflow-y-hidden'
        }
      >
        {selectedActivities
          ?.map((item, index) => {
            const { id, img, name } = item
            return (
              <div
                key={index}
                className={
                  'relative gap-2 grid grid-cols-1 md:grid-cols-4 items-center even:bg-secondary-50 py-3 px-3'
                }
              >
                <div className={'flex gap-3 items-center'}>
                  <Image
                    src={img}
                    alt="Activity"
                    quality={100}
                    className="size-8 min-w-8 min-h-8 md:size-12 md:min-w-12 md:min-h-12"
                  />
                  <p className={'max-sm:text-sm'}>{name}</p>
                </div>
                <NumberInput
                  prefix={'$ '}
                  value={item?.compensation || ''}
                  onChange={(e) => handleChange(e, item)}
                  className="max-sm:text-sm max-sm:h-10 md:max-w-[200px] text-center"
                />
                <DateInput
                  id={id}
                  onChange={(e) => handleDateChange(e, item)}
                  className="max-sm:text-sm max-sm:h-10 md:max-w-[200px] text-center"
                  value={item?.date || ''}
                />
                <Icon_trash
                  onClick={() => handleTrash(item)}
                  className="max-sm:absolute max-sm:top-4 max-sm:right-3 text-primary"
                />
              </div>
            )
          })
          ?.sort((a, b) => b.name - a.name)}
      </div>
    </div>
  )
}

export default Content
