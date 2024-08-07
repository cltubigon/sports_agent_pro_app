import Button from '@/app/components/Button'
import Icon_check2 from '@/app/components/icons/Icon_check2'
import ProfilePictureComponent from '@/app/components/ThisWebsiteOnly/profilePicture/ProfilePictureComponent'
import buildStore from '@/utilities/store/buildStore'
import React from 'react'
import { useStore } from 'zustand'
import Loader from './Loader'

const Discover = ({ athletes, isColumn, handleClear }) => {
  const { selectedRecipients, setselectedRecipients } = useStore(buildStore)

  const handleClick = (id) => {
    setselectedRecipients([id])
  }
  return (
    <div
      className={`h-full w-full grid ${
        isColumn &&
        athletes?.length > 0 &&
        'grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5'
      }`}
    >
      {!athletes && <Loader isColumn={isColumn} />}
      {athletes?.length > 0 &&
        athletes?.map((item, index) => {
          const {
            id,
            first_name,
            last_name,
            currentTeams,
            whichBestDescribesYou,
            discipline,
          } = item
          return (
            <div
              onClick={() => handleClick(id)}
              key={index}
              className={`border-[1px] cursor-default rounded-md hover:border-neutral-400 px-2 md:px-5 ${
                isColumn ? 'border-neutral-200' : 'border-transparent'
              }`}
            >
              <div
                className={`flex gap-3 md:gap-5 py-[6px] ml-2 ${
                  isColumn && 'flex-col'
                }`}
              >
                <div
                  className={`flex gap-3 md:gap-5 content-between items-center`}
                >
                  <div
                    className={
                      'relative min-w-6 min-h-6 border-[1px] rounded-sm'
                    }
                  >
                    {selectedRecipients?.some((r) => r === id) && (
                      <Icon_check2 className="absolute top-0 bottom-0 right-0 left-0 m-auto" />
                    )}
                  </div>
                  <ProfilePictureComponent
                    parameters={{ containerStyle: 'size-12 min-w-12 min-h-12' }}
                    user={item}
                  />
                </div>
                <div className={''}>
                  <p className={''}>{`${first_name} ${last_name}`}</p>
                  <p className={'text-sm text-neutral-500'}>
                    {whichBestDescribesYou?.map((whi) => whi.name)?.join(' - ')}
                    {currentTeams?.length > 0 && (
                      <span>
                        {' '}
                        -{' '}
                        {currentTeams
                          ?.slice(0, 2)
                          .map((dis) => dis.name)
                          ?.join(' - ')}
                      </span>
                    )}
                    {discipline?.length > 0 && (
                      <span>
                        {' '}
                        -{' '}
                        {discipline
                          ?.slice(0, 2)
                          .map((dis) => dis.name)
                          ?.join(' - ')}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      {athletes !== undefined && athletes?.length < 1 && (
        <div
          className={
            'w-full min-h-[350px] flex gap-1 flex-col justify-center items-center'
          }
        >
          <p className={'text-center text-xl font-semibold'}>
            No recipients have been found from the search
          </p>
          <p className={'text-center'}>
            Clear the search or try searching for different recipients
          </p>
          <Button onClick={handleClear} className="mt-5">
            Select Recipients
          </Button>
        </div>
      )}
    </div>
  )
}

export default Discover
