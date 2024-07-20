import Toast from '@/app/components/Toast'
import React, { useEffect, useState } from 'react'
import Step1 from './Step1'
import Select_Custom from '@/app/components/inputsFields/Select_Custom'
import {
  listGenderIdentities,
  listWhichBestDescribesYou,
} from '@/app/(dashboard)/profile/listOfArray'
import signupStore from '@/utilities/store/signupStore'
import { useStore } from 'zustand'
import Button from '@/app/components/Button'
import { useRouter } from 'next/navigation'
import { stepFourUpdateInfo } from '../actions'

const Step4 = ({ activeStepParams, user }) => {
  const route = useRouter()
  const [toast, settoast] = useState(null)
  const [count, setcount] = useState(null)
  const { accountType, setaccountType } = useStore(signupStore)
  const [whichBestDescribesYou, setwhichBestDescribesYou] = useState(
    user?.whichBestDescribesYou
  )
  const [genderIdentity, setgenderIdentity] = useState(user?.genderIdentity)

  if (!user) {
    route.push('/signup')
  }
  alert('asfd')

  //   useEffect(() => {
  //     const localData = JSON.parse(localStorage.getItem('signupStore'))
  //     setaccountType(localData?.state?.accountType)
  //   }, [])

  const handleSubmit = async () => {
    const { error } = await stepFourUpdateInfo({
      data: accountType,
      whichBestDescribesYou,
      genderIdentity,
      id: user?.id,
    })
    if (error) {
      settoast({
        description: error,
        status: 'error',
      })
      return
    }
    setaccountType(null)
    route.push('/dashboard')
  }

  console.log({ accountType, whichBestDescribesYou, genderIdentity })
  return (
    <div
      className={
        'max-sm:py-5 py-10 md:h-full flex flex-col justify-center overflow-y-auto'
      }
    >
      <Toast parameters={{ toast, settoast }} />
      {!user?.accountType && count < 1 && (
        <Step1 activeStepParams={activeStepParams} setcount={setcount} />
      )}
      {user?.accountType ||
        (accountType && count && (
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
                  Which best describes you?*
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
            <Button onClick={handleSubmit} className="mt-5">
              CONTINUE
            </Button>
          </>
        ))}
    </div>
  )
}

export default Step4
