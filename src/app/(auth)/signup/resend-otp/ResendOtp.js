/* eslint-disable react-hooks/exhaustive-deps */
import CountdownTimer from '@/app/components/CountdownTimer'
import signupStore from '@/utilities/store/signupStore'
import React, { useEffect, useState } from 'react'
import { useStore } from 'zustand'
import { signup } from '../actions'
import ButtonLoader from '@/app/components/ButtonLoader'

const ResendOtp = ({ parameters: { settoast } }) => {
  const { submittedData } = useStore(signupStore)
  const [loading, setloading] = useState(null)
  const [remainingTimeVerify, setremainingTimeVerify] = useState(null)

  useEffect(() => {
    const resendOTP = JSON.parse(localStorage.getItem('resendOTP'))
    if (resendOTP) {
      setremainingTimeVerify(Math.floor(resendOTP - Date.now() / 1000))
    }
  }, [])

  const setResendLocalStorage = () => {
    if (!remainingTimeVerify) {
      const timeNow = Date.now() / 1000 + 60 // 65 is in seconds
      setremainingTimeVerify(timeNow - Date.now() / 1000)
      localStorage.setItem('resendOTP', JSON.stringify(timeNow))
    }
  }

  const handleResendClick = async () => {
    if (!submittedData) return
    setloading({ id: 'uploadImages' })
    const error = await signup(submittedData)
    if (error) return
    setloading(null)
    setResendLocalStorage()
    settoast({
      description: 'We sent code to your email',
      status: 'success',
    })
  }
  return (
    <>
      <ButtonLoader
        onClick={handleResendClick}
        className={`${
          remainingTimeVerify &&
          'bg-primary-400 hover:bg-primary-400 active:bg-primary-400'
        }`}
        parameters={{ id: 'uploadImages', loading, setloading }}
        disabled={remainingTimeVerify}
      >
        RESEND CODE
      </ButtonLoader>
      {remainingTimeVerify && (
        <CountdownTimer
          className="md:absolute top-0 bottom-0 my-auto -right-16"
          parameters={{ remainingTimeVerify, setremainingTimeVerify }}
        />
      )}
    </>
  )
}

export default ResendOtp
