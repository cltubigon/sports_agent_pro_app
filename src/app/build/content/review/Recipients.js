import React from 'react'
import ModuleContainer from './ModuleContainer'
import { useStore } from 'zustand'
import buildStore from '@/utilities/store/buildStore'
import ProfilePictureComponent from '@/app/components/ThisWebsiteOnly/profilePicture/ProfilePictureComponent'
import Button from '@/app/components/Button'

const Recipients = () => {
  const { selectedRecipients, fetchedAthletes, setactiveStep } =
    useStore(buildStore)

  const selectedAthletes = fetchedAthletes?.filter((ath) =>
    selectedRecipients?.some((sel) => sel === ath.id)
  )

  const handleSetActiveStep = () => {
    setactiveStep('recipients')
  }
  return (
    <ModuleContainer step={'recipients'} title={'Recipients'}>
      <div className={'w-full h-full'}>
        {selectedAthletes?.map((item, index) => {
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
              key={index}
              className={`cursor-default rounded-md`}
            >
              <div className={`flex gap-3 md:gap-5 py-[6px]`}>
                <div
                  className={`flex gap-3 md:gap-5 content-between items-center`}
                >
                  <ProfilePictureComponent
                    parameters={{
                      containerStyle: 'size-12 min-w-12 min-h-12',
                    }}
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
        {selectedAthletes?.length < 1 && (
          <div
            className={
              'w-full min-h-[100px] flex gap-3 flex-col justify-center items-center'
            }
          >
            <p className={'text-center text-xl font-semibold'}>
              No recipients have been selected
            </p>
            <Button onClick={handleSetActiveStep} variant="button3">
              Select Recipients
            </Button>
          </div>
        )}
      </div>
    </ModuleContainer>
  )
}

export default Recipients
