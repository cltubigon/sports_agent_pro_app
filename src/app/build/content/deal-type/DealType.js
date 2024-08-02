'use client'
import Button from '@/app/components/Button'
import Icon_right from '@/app/components/icons/Icon_right'
import buildStore from '@/utilities/store/buildStore'
import { useStore } from 'zustand'
import { listDealType } from './list'

const DealType = () => {
  const { dealType, setdealType, setactiveStep } = useStore(buildStore)

  const handleClick = (value) => {
    setdealType(value)
  }
  const handleButtonClick = () => {
    setactiveStep('details')
  }
  return (
    <div className={'w-full h-full bg-white flex flex-col justify-between'}>
      {/* Header */}
      <div
        className={'py-1 md:py-4 border-b-2  px-3 md:px-8 xl:px-14 2xl:px-20'}
      >
        <h5 className={'font-oswald text-2xl md:text-3xl font-bold'}>
          Deal Type
        </h5>
        <p className={'text-neutral-600 text-sm md:text-[15px] mt-1'}>
          Select what type of deal you will be building out
        </p>
      </div>
      <div
        className={
          'flex flex-col gap-5 py-5 md:py-10 w-full items h-full overflow-auto px-3 md:px-8 xl:px-14 2xl:px-20'
        }
      >
        {/* Content */}
        {listDealType.map((item, index) => {
          const { title, description, Icon, value } = item
          return (
            <div
              key={index}
              onClick={() => handleClick(value)}
              className={`flex flex-col md:flex-row gap-3 md:gap-5 p-6 items-center rounded-md border-[1px] ${
                dealType === value
                  ? 'border-secondary bg-secondary-50'
                  : 'border-transparent hover:bg-neutral-50'
              }`}
            >
              <div
                className={'rounded-full p-[2px] bg-secondary-300 w-fit h-fit'}
              >
                <div
                  className={`size-[14px] border-2 border-white rounded-full ${
                    dealType === value ? 'bg-secondary' : 'bg-white'
                  }`}
                />
              </div>
              <div
                className={
                  'flex min-w-[64px] min-h-[64px] justify-center items-center rounded-full bg-secondary-100'
                }
              >
                <Icon className="size-7" />
              </div>
              <div className={''}>
                <p className={'text-lg font-bold'}>{title}</p>
                <p className={'text-neutral-600'}>{description}</p>
              </div>
            </div>
          )
        })}
      </div>
      {/* Footer */}
      <div
        className={'py-2 md:py-4 border-t-2  px-3 md:px-8 xl:px-14 2xl:px-20'}
      >
        <Button
          onClick={handleButtonClick}
          className="ml-auto h-10 max-sm:text-sm md:h-12 max-sm:px-3"
        >
          Next step <Icon_right />
        </Button>
      </div>
    </div>
  )
}

export default DealType
