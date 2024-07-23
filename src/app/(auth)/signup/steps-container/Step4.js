import Toast from '@/app/components/Toast'
import React, { useState } from 'react'
import Step1 from './Step1'
import Select_Custom from '@/app/components/inputsFields/Select_Custom'
import {
  listGenderIdentities,
  listWhichBestDescribesYou,
} from '@/app/(dashboard)/profile/listOfArray'
import signupStore from '@/utilities/store/signupStore'
import { useStore } from 'zustand'
import { stepFourUpdateInfo } from '../actions'
import ButtonLoader from '@/app/components/ButtonLoader'
import { updateProfileInformation } from '@/app/(dashboard)/profile/actions'
import { useRouter } from 'next/navigation'

const Step4 = ({ activeStepParams, user }) => {
  const [toast, settoast] = useState(null)
  const [count, setcount] = useState(null)
  const { accountType, setaccountType } = useStore(signupStore)
  const [whichBestDescribesYou, setwhichBestDescribesYou] = useState(
    user?.whichBestDescribesYou
  )
  const [loading, setloading] = useState(null)
  const [genderIdentity, setgenderIdentity] = useState(user?.genderIdentity)

  //   useEffect(() => {
  //     const localData = JSON.parse(localStorage.getItem('signupStore'))
  //     setaccountType(localData?.state?.accountType)
  //   }, [])

  const route = useRouter()

  const handleSubmit = async () => {
    const account_type = accountType
    setloading({ id: 'updateInfo' })
    
    const updateData = async (data) => {
      const { error } = await updateProfileInformation({
        data,
        id: user?.id,
      })
      if (error) {
        settoast({
          description: error,
          status: 'error',
        })
        return
      } else {
        setaccountType(null)
        route.push('/dashboard')
      }
    }
    if (user?.account_type) {
      const data = {
        whichBestDescribesYou,
        genderIdentity,
      }
      await updateData(data)
    } else {
      const data = {
        account_type,
        whichBestDescribesYou,
        genderIdentity,
      }
      await updateData(data)
    }
  }
  return (
    <div
      className={
        'pt-5 pb-[170px] md:pb-10 md:pt-10 md:h-full flex flex-col justify-center overflow-y-auto'
      }
    >
      <Toast parameters={{ toast, settoast }} />
      {!user?.account_type && count < 1 && (
        <Step1 activeStepParams={activeStepParams} setcount={setcount} />
      )}
      {(user?.account_type || count) && (
        <>
          <h3
            className={
              'max-sm:text-center font-oswald text-3xl md:text-[50px] leading-[51px] font-bold mb-[29px] max-sm:mt-3'
            }
          >
            ACCOUNT DETAILS
          </h3>
          <div className={'flex flex-col gap-3'}>
            <div className={''}>
              <p className={'text-neutral-500 mb-[2px] text-lg'}>
                Which best describes you?*
              </p>
              <Select_Custom
                parameters={{
                  options: listWhichBestDescribesYou,
                  selectedItem: whichBestDescribesYou,
                  setselectedItem: setwhichBestDescribesYou,
                  containerHeight: 200,
                  classModalId: 'which-best-describes',
                  menuStyle: 'h-[300px]',
                }}
              />
              <p className={'text-neutral-500 mb-[2px] text-lg'}>
                Don’t worry, this can be changed later.
              </p>
            </div>
            <div className={''}>
              <p className={'text-neutral-500 mb-[2px] text-lg'}>
                Gender identity*
              </p>
              <Select_Custom
                parameters={{
                  options: listGenderIdentities,
                  selectedItem: genderIdentity,
                  setselectedItem: setgenderIdentity,
                  containerHeight: 230,
                  classModalId: 'genderIdentity',
                }}
              />
            </div>
          </div>
          <ButtonLoader
            parameters={{ id: 'updateInfo', loading, setloading }}
            onClick={handleSubmit}
            className="mt-5"
          >
            CONTINUE
          </ButtonLoader>
        </>
      )}
    </div>
  )
}

export default Step4
