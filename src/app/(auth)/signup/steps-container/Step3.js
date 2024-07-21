/* eslint-disable react-hooks/exhaustive-deps */
import signupStore from '@/utilities/store/signupStore'
import React, { useEffect, useRef, useState } from 'react'
import { useStore } from 'zustand'
import { verifyOtp } from '../actions'
import Toast from '@/app/components/Toast'
import ResendOtp from '../resend-otp/ResendOtp'
import OTPCode from '@/app/components/OTPCode'

const Step3 = () => {
  const { submittedData, setsubmittedData, setaccountType } =
    useStore(signupStore)
  const [OTP, setOTP] = useState(null)
  const [sending, setsending] = useState(false)
  const [toast, settoast] = useState(null)
  const removeResendLocalStorage = () => {
    localStorage.removeItem('resendOTP')
  }

  const verifyOTP = async () => {
    if (!submittedData) return
    setsending(true)
    const { email, password } = submittedData
    const data = { email, password, token: OTP }
    const error = await verifyOtp(data)
    if (!error) {
      removeResendLocalStorage()
      setsubmittedData(null)
      setaccountType(null)
      settoast({
        description: 'You are verified',
        status: 'success',
        duration: 1000,
        redirect: '/signup?step=4',
      })
    } else if (error) {
      settoast({
        description: error,
        status: 'error',
      })
    }
    setsending(false)
  }

  useEffect(() => {
    if (!sending && OTP) verifyOTP()
  }, [OTP])

  return (
    <div className={'max-sm:py-5 md:h-full flex flex-col justify-center'}>
      <Toast parameters={{ toast, settoast }} />
      <h3
        className={
          'max-sm:text-center font-oswald text-3xl md:text-[50px] leading-[51px] font-bold mb-[14px] max-sm:mt-3'
        }
      >
        Secure your account
      </h3>
      <div className={'text-neutral-400'}>
        <p className={'text-lg'}>Enter the code sent to your phone or email</p>
        <p className={'text-lg mt-5 mb-[2px]'}>Enter Code</p>
      </div>
      <div className="relative max-w-[375px]">
        <OTPCode parameters={{ setOTP, sending }} />
        {sending && (
          <p
            className={
              'text-secondary absolute -bottom-7 left-0 right-0 mx-auto'
            }
          >
            Verifying your code...
          </p>
        )}
      </div>
      <div
        className={
          'relative w-fit max-sm:mx-auto mt-10 flex flex-col-reverse items-center'
        }
      >
        <ResendOtp parameters={{ settoast }} />
      </div>
    </div>
  )
}

export default Step3
